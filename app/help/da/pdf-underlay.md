---
title: PDF-underlag og PDF-import
summary: Læg en PDF-side under din tegning for at spore og plotte den, eller gør sidens linjer og tekst til tegningsobjekter.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, underlag, spor, importér pdf, scanning, plantegning, udtoning, klip, lag, fang, åbn pdf
from: aa301d0f
---

## To måder at hente en PDF-side ind

- **Vedhæft** ({{cmd:PDFATTACH}}) beholder PDF'en som et billede under din tegning. Du sporer den, fanger dens linjer, udtoner den og klipper den, og den udskrives sammen med arket. Tegningen gemmer kun filens navn.
- **Importér** ({{cmd:PDFIMPORT}}) gør sidens linjer, kurver, udfyldninger og tekst til almindelige tegningsobjekter på lag, der er navngivet efter PDF'en. De er dine at redigere, og PDF'en er ikke nødvendig bagefter.

Åbner du en PDF med {{ui:Åbn}}, spørger programmet, hvilken af de to du vil bruge.

## Vedhæft en side

1. Skriv `PDFATTACH` (eller `PDFATT`) og vælg PDF'en. Har den flere sider, skriv sidenummeret.
2. Klik indsætningspunktet (sidens nederste venstre hjørne).
3. Tryk {{key:Enter}} for sidens rigtige størrelse, eller skriv skalaen: tegningsenheder pr. PDF-punkt (et punkt er 1/72 tomme, så 0.3528 in i en tegning i millimeter).
4. Tryk {{key:Enter}} for ingen drejning, eller skriv en vinkel.

Siden er et objekt ligesom en blokreference: flyt, drej, skalér, kopiér, slet og læg den på et lag. Slår du lagets synlighed fra, forsvinder den. Zoomer du ind, tegnes siden skarpt igen.

## Spor den

Med {{ui:Fang}} tændt fanger markøren PDF'ens egne linjer: endepunkter, midtpunkter og skæringspunkter (og {{ui:Nærmeste}}, når det fang er tændt). Tekst tegnet som bogstaver på siden fanges ikke.

## Justér den

- `PDFADJUST`: **Udtoning** (0 til 80 procent), **Kontrast** (0 til 100), **Monokrom**, og **Til/fra** for at skjule den uden at slette den.
- `PDFCLIP`: vis kun et rektangel eller en polygon af siden; **Slet** fjerner klippet.
- `PDFLAYERS`: en PDF kan have egne lag. Kommandoen lister dem; skriv et nummer for at tænde eller slukke et lag for denne underlag. Lag, som filen har slukket, starter slukket.

## Plot og gem

PLOT udskriver siden som dens linjer, udfyldninger og tekst (så den forbliver skarp og søgbar). Billeder i PDF'en vises på skærmen, men udskrives endnu ikke.

En DWG eller DXF 2000 gemmer underlaget som et link: filens navn, siden, hvor den ligger, dens skala, drejning, klip, udtoning og kontrast. PDF'en selv er ikke i tegningen. Åbn tegningen igen, skriv `PDF` og vælg filen igen; siderne vises som rammer, indtil du gør det, og får deres rigtige størrelse først da. Ældre DXF (R12) har ingen underlag: den gemmer rammen og navnet. Det er endnu ikke undersøgt, hvordan andre programmer læser det gemte klip og den gemte skala.

## Importér en side

1. Skriv `PDFIMPORT` (eller `PDFIM`) og vælg PDF'en og siden.
2. Klik, hvor sidens nederste venstre hjørne skal være.
3. Tryk {{key:Enter}} for rigtig størrelse, skriv en skala, eller vælg **To punkter**: siden tegnes i rigtig størrelse, derefter klikker du to punkter med en afstand, du kender, og skriver den rigtige afstand; alt skaleres efter det.

Linjer bliver til linjer og polylinjer, cirkler og buer genkendes, og udfyldte figurer bliver til massive skraveringer. Tekst bliver til tekst på et lag, der slutter med `-TEXT`. Det er ét fortrydelsestrin. Billeder i PDF'en importeres ikke: vedhæft siden i stedet. En scanning (en side, der kun er et billede) har ingen linjer at importere.

PDF'er læses som ikke-betroede filer: ingen scripts køres, og en meget stor side afkortes, og det siges.
