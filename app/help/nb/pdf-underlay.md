---
title: PDF-underlag og PDF-import
summary: Legg en PDF-side under tegningen for å tegne over og plotte den, eller gjør sidens linjer og tekst om til tegningsobjekter.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, underlag, tegn over, importer pdf, skanning, planløsning, tone, klipp, layer, fang, åpne pdf
from: aa301d0f
---

## To måter å hente inn en PDF-side

- **Legg ved** ({{cmd:PDFATTACH}}) beholder PDF-en som et bilde under tegningen. Du tegner over den, fanger til linjene, toner den, klipper den, og den skrives ut sammen med arket. Tegningen beholder bare filnavnet.
- **Importer** ({{cmd:PDFIMPORT}}) gjør sidens linjer, kurver, fyll og tekst om til vanlige tegningsobjekter, på layer oppkalt etter PDF-en. De kan redigeres fritt, og PDF-en trengs ikke etterpå.

Å åpne en PDF med {{ui:Åpne}} spør hvilken av de to du vil ha.

## Legg ved en side

1. Skriv `PDFATTACH` (eller `PDFATT`) og velg PDF-en. Har den flere sider, skriv sidenummeret.
2. Klikk innsettingspunktet (sidens nedre venstre hjørne).
3. Trykk {{key:Enter}} for sidens virkelige størrelse, eller skriv en skala: tegningsenheter per PDF-punkt (et punkt er 1/72 tomme, så i en tegning i millimeter blir det 0.3528).
4. Trykk {{key:Enter}} for ingen vending, eller skriv en vinkel.

Siden er et objekt, likt en blokkreferanse: flytt, roter, skaler, kopier, slett og legg den på et layer. Slår du av layeren, forsvinner den. Zoomer du inn, tegnes siden på nytt skarpt.

## Tegn over den

Med {{ui:Fang}} på fanger markøren til PDF-ens egne linjer: endepunkter, midtpunkter og kryssinger (og {{ui:Nærmeste}} når det fanget er på). Tekst som er tegnet som bokstaver på siden, fanges ikke.

## Juster den

- `PDFADJUST`: **Tone (F)** (0 til 80 prosent), **Kontrast (C)** (0 til 100), **Monokrom (M)**, og **Av/på (O)** for å skjule den uten å slette den.
- `PDFCLIP`: viser bare et rektangel eller en mangekant av siden; **Slett (D)** fjerner klippet.
- `PDFLAYERS`: en PDF kan ha egne layer. Kommandoen lister dem; skriv et nummer for å slå den layeren av eller på for dette underlaget. Layerne filen har av, starter av.

## Plott og lagre

PLOT skriver ut siden som linjer, fyll og tekst (slik at den forblir skarp og søkbar). Bilder inne i PDF-en vises på skjermen, men skrives ikke ut ennå.

En DWG eller DXF 2000 beholder underlaget som en lenke: filnavnet, siden, hvor den ligger, skalaen, vendingen, klippet, tonen og kontrasten. PDF-en selv ligger ikke i tegningen. Åpne tegningen igjen, skriv `PDF` og velg filen på nytt; sidene vises som rammer til da, og får sin virkelige størrelse først da. Eldre DXF (R12) har ingen underlag: den beholder rammen og navnet. Det er ikke sjekket ennå hvordan andre programmer leser lagret klipp og skala.

## Importer en side

1. Skriv `PDFIMPORT` (eller `PDFIM`) og velg PDF-en og siden.
2. Klikk der sidens nedre venstre hjørne skal ligge.
3. Trykk {{key:Enter}} for virkelig størrelse, skriv en skala, eller velg **To punkter**: siden tegnes i virkelig størrelse, deretter klikker du to punkter med en avstand du kjenner, og skriver inn den virkelige avstanden; alt skaleres til å passe.

Linjer blir til linjer og polylinjer, sirkler og buer gjenkjennes, fylte former blir til heldekkende fyll, og tekst blir til tekst på et layer som ender på `-TEXT`. Det er ett steg å angre. Bilder i PDF-en importeres ikke: legg siden ved i stedet. En skanning (en side som bare er et bilde) har ingen linjer å importere.

PDF-er leses som ikke-pålitelige filer: ingen skript kjøres, og en svært stor side kuttes av, og det meldes fra om det.
