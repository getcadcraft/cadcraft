---
title: Registrer flere skanninger til én
summary: Plasser skanninger tatt fra ulike posisjoner i én ramme, med valgte punktpar eller innskrevne målmerker, finjuster dem med ICP, lagre registreringen som et prosjekt og eksporter den registrerte punktskyen som LAS eller E57. Kommandoen er REGISTERSCANS.
keywords: registrering, registrer, skanninger, punktsky, icp, iterativ nærmeste punkt, målmerker, punktpar, stiv transformasjon, juster, slå sammen, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Dette gjør du

Flere skanninger av ett sted (hver fra sin egen skannerposisjon) starter i egne koordinater. Registrer dem: gi hver skanning én plassering, slik at alle ligger i samme ramme. Lagre deretter dette som et prosjekt, og skriv den registrerte punktskyen til én LAS- eller E57-fil.

## Plasser skanningene

1. Åpne dialogboksen (skriv `REGISTERSCANS` (eller `REGSCAN`)). {{ui:Legg til skanninger…}} tar imot LAS-, LAZ-, E57-, PLY-, PCD-, PTX-, PTS- og XYZ-filer, eller du kan slippe dem på dialogboksen. Skanninger som bruker ulike enheter, avvises med en merknad: konverter én av dem først.
2. Velg {{ui:Skanning som skal flyttes}} og {{ui:Plasser mot}}. Bildet viser alle skanningene i rammen slik de er nå, med én farge for hver: {{ui:Plan}}, {{ui:Front}} eller {{ui:Side}}. Dra for å panorere, og bruk hjulet for å zoome.
3. **Etter punktpar.** Klikk {{ui:Velg et par}}, deretter et punkt på skanningen som skal flyttes, og så samme sted på en annen skanning (et hjørne, et målmerke, foten av en søyle). Gjør dette minst tre ganger, med punkter som ikke ligger på én linje og som er spredt utover. Klikk {{ui:Plasser etter par}}: skanningen plasseres med en minste kvadraters tilpasning, og **Rest** viser hvor langt hvert par fortsatt er unna. Et par med et stort tall er et dårlig valg: fjern det med kryssknappen, og plasser på nytt.
4. **Etter målmerker.** Hvis et punkts sanne koordinater er kjent (innmålte målmerker), klikk {{ui:Velg, og skriv så målet}}, klikk punktet på skanningen, og skriv målmerkets X, Y og Z i raden. Par og innskrevne målmerker kan blandes fritt.

## Finjuster med ICP

Par gir en grov plassering. {{ui:Forfin}} flytter skanningen til overflatene ligger oppå den andre skanningens: først **punkt til punkt**, deretter **punkt til plan**. Tabellen viser hvert steg med feil og hvor mange punkter som ble matchet; linjen over den tegner at feilen synker. {{ui:Stopp}} avslutter kjøringen etter steget som pågår, og beholder det som er nådd. {{ui:Angre}} tar hele kjøringen (eller siste plassering) tilbake; {{ui:Tilbakestill}} setter skanningen tilbake til filkoordinatene.

For å holde det raskt på en bærbar PC bruker ICP en nedskalert andel av punktene ({{ui:Punkter som brukes}}, 5 000 til 60 000) og ignorerer matcher som er lenger unna enn {{ui:Største sammenpasningsavstand}} (som standard 5 % av skanningens størrelse, og mindre etter hvert som den setter seg). Den trenger først en grov plassering: skanninger som knapt overlapper, melder at de ikke kan matches. Overflater som bare er flate eller bare rette, kan ikke låses i posisjon langs seg selv; legg til par i så fall.

## Lagre og eksporter

- {{ui:Lagre prosjekt}} skriver en liten `.ccscans.json`-fil: hver skannings navn, størrelse og en fingeravtrykk av de første 64 KB, med transformasjonen. Den inneholder ingen punkter. {{ui:Åpne prosjekt…}} finner skannefilene ut fra disse referansene (filene må være lagt til først), og setter tilbake alle transformasjonene.
- {{ui:Eksporter LAS}} og {{ui:Eksporter E57}} skriver én fil med alle skanningene på sin registrerte plass. Punktene i originalene skrives aldri om; transformasjonen brukes på veien ut. Med {{ui:Les alle punkter fra filene}} på, leses hver fil på nytt for hvert punkt (opptil 20 millioner per skanning). Av, skrives bare punktene som vises i visningen.
- {{ui:Vis registrert sky}} (CadCraft) skriver LAS-filen og fester den under tegningen på sine egne koordinater, som enhver annen sky.

:::note
Ingenting lastes opp. Registreringen skjer i filenes egne enheter og beholder millimeter: en LAS skrives med en skala som passer (ned til 0,1 mm), en E57 med doble tall. Et koordinatsystem føres bare med over til LAS når alle skanningene oppgir samme EPSG-kode. E57-skriveren er vår egen; den kontrolleres ved å lese filene tilbake med denne leseren og med libE57Format.
:::
