---
title: Lav og indsæt blokke
summary: Gør en tegnet dør til en blok, placér den igen i andre positioner, skalaer og vinkler, og ryd op i ubrugte blokke.
keywords: blok, bmake, indsæt, ddinsert, symbol, purge, eksplodér, omdefiner, basispunkt, reference, tæl, bcount, skema, csv, attributter, dataudtræk
from: 125a129d
---

## Hvad du skal lave

Et dørsymbol gjort til en blok kaldet `DOOR-900`, og derefter placeret tre gange: som tegnet, drejet 90 grader og spejlet.

En blok er en navngivet gruppe af objekter. Du tegner den én gang; hvert sted du bruger den, er en **blokreference**, der peger tilbage på den ene definition. Sektionen {{ui:Blokke}} i venstre panel viser blokkene i tegningen og hvor ofte hver enkelt bruges.

## Tegn døren

1. Skriv `L` og tryk {{key:Enter}}.
2. Skriv `0,0` og tryk {{key:Enter}}.
3. Skriv `@0,900` og tryk {{key:Enter}}, og tryk derefter {{key:Enter}} igen. Dette er dørbladet.
4. Skriv `A` og tryk {{key:Enter}}.
5. Skriv `C` og tryk {{key:Enter}} for først at angive centrum.
6. Skriv `0,0` og tryk {{key:Enter}} for centrum.
7. Skriv `900,0` og tryk {{key:Enter}} for startpunktet.
8. Skriv `0,900` og tryk {{key:Enter}} for slutpunktet. Dette er svinget.
9. Klik på {{ui:Udstrækning}}.

Buer går mod uret fra startpunktet til slutpunktet.

## Lav blokken

1. Skriv `B` og tryk {{key:Enter}}, eller klik på {{ui:Lav}} i gruppen Blokke.
2. Ved `Enter block name` skriver du `DOOR-900` og trykker {{key:Enter}}.
3. Ved `Specify insertion base point` skriver du `0,0` og trykker {{key:Enter}}. Dette er hængslet: det punkt der lander, hvor du placerer blokken.
4. Ved `Select objects` trækker du et vindue rundt om bladet og buen.
5. Tryk {{key:Enter}}.

Historikken siger `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` Panelet {{ui:Blokke}} lister DOOR-900 med `1×` ved siden af: én reference. Klik på døren: den vælges nu som ét objekt, en »Blokreference«.

:::tip
Du kan vælge objekterne først og derefter skrive `B`. CadCraft spørger stadig efter navn og basispunkt, og bruger derefter dit valg.
:::

## Indsæt blokken

1. Skriv `I` og tryk {{key:Enter}}, eller klik på {{ui:Indsæt}} ved siden af DOOR-900 i panelet {{ui:Blokke}}.
2. Ved `Enter block name or [File/Library] <DOOR-900>` trykker du {{key:Enter}}. (Panelets knap {{ui:Indsæt}} udfylder navnet for dig.)
3. Døren følger krydset. Klik hvor hængslet skal være.

En anden dør dukker op.

## Indsæt drejet eller skaleret

1. Skriv `I` og tryk {{key:Enter}}, og tryk derefter {{key:Enter}} for at acceptere navnet.
2. Ved `Specify insertion point [Scale/Rotate]` skriver du `R` og trykker {{key:Enter}}.
3. Skriv `90` og tryk {{key:Enter}}. Forhåndsvisningen drejer.
4. Klik for at placere den.

Skriv `S` i stedet for at angive en skalafaktor; den gælder for begge retninger. Skala og rotation huskes til næste indsættelse. For at spejle en dør indsætter du den og bruger derefter {{cmd:MIRROR}} på referencen.

## Ændr en placeret blok

Vælg en blokreference. I højre panel kan du ændre dens {{ui:X}}, {{ui:Y}}, {{ui:Skala X}}, {{ui:Skala Y}} og {{ui:Rotation}}. En negativ {{ui:Skala X}} vender den.

## Omdefiner en blok

For at ændre alle døre på én gang laver du en blok med samme navn:

1. Tegn den nye version af døren.
2. Skriv `B` og tryk {{key:Enter}}, og skriv `DOOR-900`.
3. Ved `Block "DOOR-900" already exists. Redefine it?` skriver du `Y` og trykker {{key:Enter}}.
4. Angiv basispunktet og vælg de nye objekter, som før.

Alle referencer til DOOR-900 viser nu den nye version.

Eller redigér selve blokken: {{ui:Blokke}} › {{ui:Mere}} › {{ui:Redigér blok}} ({{cmd:BEDIT}}) åbner den alene, og {{ui:Gem blok}} gemmer den tilbage. Se [Blokattributter](topic:attributes#change-a-block-the-block-editor).

## Tæl blokke og eksportér en liste

Skriv {{cmd:COUNT}} (eller {{ui:Blokke}} › {{ui:Mere}} › {{ui:Tæl blokke}}), og derefter:

- klik på én dør: alle døre i dette rum vælges, og historikken siger hvor mange der er her og i hele tegningen;
- eller tryk {{key:Enter}}: historikken lister hver blok med sin tælling, flest først;
- eller skriv `E`, og derefter `C` for en CSV med tællingerne (i modellen, på ark, i alt), eller `A` for én række pr. reference med dens lag, position, rotation og alle attributværdier — et skema du kan åbne i et regneark.

Blokke uden navn (målsætninger, tabeller) og referencer inde i andre blokke tælles ikke med. Celler der starter som en formel (`=`, `+`, `-`, `@`) får et foranstillet `'`, så et regneark viser dem som tekst.

## Eksplodér og rens

- {{cmd:EXPLODE}} (`X`) gør en valgt blokreference om til separate objekter. Definitionen bliver.
- {{cmd:PURGE}} (`PU`) fjerner blokdefinitioner som intet bruger længere. Historikken siger hvor mange der blev fjernet.

## Blocknavne

Et navn kan være op til 255 tegn og kan indeholde mellemrum, men det må ikke starte med en stjerne, og det må ikke indeholde `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` eller en backtick. Når du gemmer DXF R12, skrives navne med store bogstaver; andre tegn end bogstaver, cifre, `$`, `_` og `-` bliver til `_`, og navne afkortes til 31 tegn. Historikken siger hvor mange der ændrede sig. Korte navne med store bogstaver, cifre og bindestreger, som `DOOR-900`, bevares uændret. En gemt DWG beholder navne som du skrev dem, med store og små bogstaver; kun tegn DWG ikke tillader ændres (en `|` bliver til `$0$`, andre bliver til `_`).

## Skriv en blok eller objekter til en fil for sig selv

Skriv `W` ({{cmd:WBLOCK}}) og vælg **Objekter**, **Blok** eller **Hele tegningen**. Resultatet er en ny DWG eller DXF, der kun indeholder de lag, stilarter og blokke den bruger, med dit basispunkt som origo. For objekter kan du beholde dem, gøre dem til en blok eller slette dem fra denne tegning.

## Almindelige fejl

- **Blokken landede langt fra krydset.** Basispunktet lå ikke på objekterne. Lav blokken igen med basispunktet på et hjørne eller et hængsel.
- **»No objects selected; nothing made.«** Du trykkede {{key:Enter}}, før du havde valgt noget. Intet er valgt; intet er lavet.
- **»This drawing has no blocks yet: F inserts one from a file, L from the library (or make one with BLOCK).«** Denne tegning har endnu ingen blokke: F indsætter en fra en fil, L fra biblioteket (eller lav en med BLOCK). Skriv `F` for at hente en blok ind fra en anden tegning, eller `L` for biblioteket. Se [Indsæt fra en fil eller biblioteket](topic:insert-from-file-and-library).
- **»A viewport cannot go in a block.«** En viewport kan ikke være i en blok. Lad viewport-rammerne ligge uden for valget.
