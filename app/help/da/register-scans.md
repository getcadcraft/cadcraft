---
title: Registrér flere scanninger til én
summary: Placér scanninger, der er taget fra forskellige positioner, i ét koordinatsystem ved hjælp af valgte punktpar eller indtastede mål, forfin dem med ICP, gem registreringen som et projekt, og eksportér den registrerede punktsky som LAS eller E57. Kommandoen er REGISTERSCANS.
keywords: registrér, registrering, scanninger, punktsky, icp, iterative closest point, mål, punktpar, stiv transformation, justér, flet, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Hvad du skal gøre

Flere scanninger af samme sted (hver taget fra sin egen scannerposition) starter i deres egne koordinater. Registrér dem: giv hver scanning én placering, så de alle ligger i ét koordinatsystem. Gem derefter det som et projekt, og skriv den registrerede punktsky til én LAS- eller E57-fil.

## Placér scanningerne

1. Åbn dialogen (skriv `REGISTERSCANS` (eller `REGSCAN`)). {{ui:Tilføj scanninger…}} tager LAS-, LAZ-, E57-, PLY-, PCD-, PTX-, PTS- eller XYZ-filer, eller du kan slippe dem på dialogen. Scanninger, der bruger forskellige enheder, afvises med en bemærkning: konvertér den ene først.
2. Vælg {{ui:Scanning, der skal flyttes}} og {{ui:Placér mod}}. Billedet viser alle scanninger i koordinatsystemet, som de er nu, hver i sin farve: {{ui:Plan}}, {{ui:Front}} eller {{ui:Side}}. Træk for at panorere, og brug hjulet til at zoome.
3. **Efter punktpar.** Klik på {{ui:Vælg et par}}, derefter et punkt på scanningen, der skal flyttes, og derefter det samme sted på en anden scanning (et hjørne, et mål, fodpunktet af en søjle). Gør det mindst tre gange, med punkter der ikke ligger på én linje og er spredt ud. Klik på {{ui:Placér efter par}}: scanningen placeres ved en mindste kvadraters tilpasning, og **Rest** viser, hvor langt hvert par stadig afviger. Et par med et stort tal er et dårligt valg: fjern det med krydset, og placér igen.
4. **Efter mål.** Hvis et punkts sande koordinater er kendte (målte mål), klik på {{ui:Vælg, og skriv derefter mål}}, klik på punktet på dets scanning, og skriv målets X, Y og Z i rækken. Punktpar og indtastede mål kan blandes frit.

## Forfin med ICP

Par giver en grov placering. {{ui:Forfin}} flytter scanningen, indtil dens flader ligger på den anden scannings: først **punkt til punkt**, derefter **punkt til plan**. Tabellen viser hvert trin med dets fejl og hvor mange punkter der blev matchet; linjen over den tegner, hvordan fejlen falder. {{ui:Stop}} afslutter kørslen efter det trin, der er i gang, og beholder det, den er nået til. {{ui:Fortryd}} tager hele kørslen (eller den sidste placering) tilbage; {{ui:Nulstil}} sætter scanningen tilbage til sine filkoordinater.

For at det kan gå hurtigt på en bærbar, arbejder ICP på en nedsampling af punkterne ({{ui:Brugte punkter}}, 5,000 til 60,000) og ignorerer matches længere væk end {{ui:Største matchafstand}} (som standard 5 % af scanningens størrelse, og det bliver mindre, efterhånden som den falder til ro). Den har brug for en grov placering først: scanninger, der næsten ikke overlapper, melder, at de ikke kan matches. Flader, der kun er plane, eller kun er lige, kan ikke fastlægge en position langs sig selv; tilføj par i det tilfælde.

## Gem og eksportér

- {{ui:Gem projekt}} skriver en lille `.ccscans.json`-fil: hver scannings navn, størrelse og et fingeraftryk af dens første 64 KB, med dens transformation. Den indeholder ingen punkter. {{ui:Åbn projekt…}} finder scanningsfilerne ud fra disse referencer (filerne skal være tilføjet først) og indsætter alle transformationer igen.
- {{ui:Eksportér LAS}} og {{ui:Eksportér E57}} skriver én fil med alle scanninger på deres registrerede plads. Punkterne i originalerne omskrives aldrig; transformationen anvendes på vej ud. Med {{ui:Læs alle punkter fra filerne}} slået til læses hver fil igen for hvert punkt (op til 20 millioner pr. scanning); slået fra skrives kun de punkter, der vises i fremviseren.
- {{ui:Vis registreret sky}} (CadCraft) skriver LAS-filen og tilføjer den under tegningen på dens egne koordinater, ligesom enhver anden sky.

:::note
Intet uploades. Registreringen arbejder i filernes egne enheder og bevarer millimeter: en LAS skrives med en skala, der passer (ned til 0.1 mm), og en E57 med doubles. Et koordinatsystem føres kun over i LAS, når alle scanninger angiver den samme EPSG-kode. E57-skriveren er vores egen; den kontrolleres ved at læse dens filer tilbage med denne læser og med libE57Format.
:::
