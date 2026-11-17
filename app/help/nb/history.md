---
title: Historikk: versjoner og hva som er endret
summary: Se versjonene av en tegning (kopiene Studio lagrer når du lagrer, og skyens), åpne eller gjenopprett en, og sammenlign to med endringene vist i farger.
keywords: historikk, versjoner, versjonshistorikk, gjenopprett, forrige versjon, angre lagring, sammenlign, sammenlign tegninger, dwgcompare, endringer, lagt til, fjernet, endret, øyeblikksbilde, sikkerhetskopi, skyversjoner
from: 141d37b3
---

## Hva du skal lage

En titt på en tidligere versjon av en tegning, og en liste over hva som er annerledes enn nå: hva som er lagt til, hva som er fjernet og hva som er endret, markert med farge på tegningen.

## Åpne Historikk

Skriv `HISTORY` (eller `HIST`) og trykk {{key:Enter}}, eller velg {{ui:Historikk…}} i {{ui:Mer}}-menyen i gruppen {{ui:Visning}}. Panelet åpnes ved siden av tegningen og forblir åpent mens du arbeider, så du kan panorere og zoome i tegningen med fargene på.

Historikk fungerer i CadCraft Studio. I en nettleser sier panelet bare det.

## Hvor versjonene kommer fra

- **På denne datamaskinen.** Hver gang du åpner en tegning fra en fil i Studio, og hver gang du lagrer den, beholder Studio en kopi av filen i sin egen lagring på denne datamaskinen. Den første kopien er {{ui:Slik den ble åpnet}}: filen slik den var før din første lagring over den. Studio beholder de nyeste 25 kopiene av hver tegning, og de eldste går først når alle kopiene til sammen passerer 400 MB. En lagring som ikke endrer noe, beholder ingenting. Ingenting lastes opp.
- **I skyen.** Når du åpner en tegning fra skyfilene dine i Studio, lister panelet også {{ui:I skyen}}: hver versjon skyen har, med nummer, hvem som lagret den og notatet. Panelet leser dem bare. CadCraft sender ikke sine egne lagringer til skyen ennå, så dette er versjonene som er lagret fra andre enheter og fra nettet. Logg inn igjen i Studio hvis den sier at innloggingen gikk ut.

En tegning du ikke har lagret ennå har ingen kopier: lagre den først.

## Åpne eller gjenopprett en versjon

- {{ui:Åpne}} legger den versjonen i en egen fane. Tegningen din berøres ikke.
- {{ui:Gjenopprett}} erstatter denne tegningen med den versjonen. Den spør først. Studio beholder en kopi av tegningen slik den er nå i Historikk (merket {{ui:Før en gjenoppretting}}) før den gjør det, og ingenting skrives til filen før du lagrer. En gjenoppretting kan ikke angres med {{key:Mod+Z}}; bruk den kopien.

## Sammenlign

1. Klikk {{ui:Sammenlign}} på en versjon. Den sammenlignes med {{ui:Tegningen slik den er nå}}; for å sammenligne med en annen versjon i stedet, velg den først i {{ui:Sammenlign med}}.
2. Les resultatet under listen: hvor mange objekter som er lagt til, fjernet og endret, og en liste over dem. Klikk på et element i listen for å flytte visningen dit.
3. På tegningen:
   - **grønne** objekter er lagt til,
   - **røde** objekter er fjernet (de finnes bare i den eldre versjonen),
   - **oransje** objekter er endret: den nye formen er heltrukket og den gamle stiplet.
4. {{ui:Vis på tegningen}} slår fargene av og på; {{ui:Fjern fargene}} tar resultatet bort. Å lukke panelet fjerner dem også.

Listen sier hva som er endret i et endret objekt: teksten, at det er flyttet, formen, layeret, fargen, linjetypen eller linjevekten. Hvert ark sammenlignes for seg; fargene vises på arket som er åpent.

:::note
En tegning har ingen varig nummerering av objektene, så CadCraft matcher objekter etter hva de er: det samme objektet på begge sider er uendret; et objekt av samme type og layer som ligger innenfor sin egen størrelse fra et gammelt, er det samme objektet, endret; det som er igjen, er lagt til eller fjernet. Et objekt som er flyttet langt fra der det var, vises som fjernet ett sted og lagt til et annet. En blokkreferanse regnes etter innholdet i blokken sin.
:::

## Vanlige feil

- **«Ingen kopier ennå.»** Studio beholder en kopi ved hver åpning og lagring av en tegning som har en fil på denne datamaskinen. En tegning åpnet fra en nettleserfane, eller som aldri er lagret, har ingen.
- **Skylisten mangler.** Den vises for en tegning åpnet fra skyen i Studio; en fil åpnet fra disken er ikke en skytegning.
- **Alt ser endret ut.** To versjoner lagret av ulike programmer skriver den samme tegningen på ulike måter (navn på anonyme blokker, avrunding). Sammenlign versjoner lagret av CadCraft.
