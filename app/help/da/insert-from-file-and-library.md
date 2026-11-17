---
title: Indsæt fra en fil eller biblioteket
summary: Hent en blok eller en hel tegning ind fra en anden DWG- eller DXF-fil, og placér emner fra biblioteket, en fil eller et andet bibliotek, med deres kildeangivelser og opdateringer.
keywords: indsæt, fil, bibliotek, librarycraft, emne, udstyr, blok fra en anden tegning, wblock, designcenter, kildeangivelse, licens, opdatering, feed, item.json
from: 316188d2
---

## Indsæt en blok fra en anden tegning

1. Skriv `I` og tryk {{key:Enter}}, eller klik på {{ui:Indsæt}} i gruppen {{ui:Blokke}}.
2. Ved `Angiv blokkens navn eller [Fil/Bibliotek (L)]` skriver du `F` og trykker {{key:Enter}}.
3. Vælg DWG- eller DXF-filen på denne computer. Den læses her; den åbnes ikke, og intet uploades.
4. I dialogen {{ui:Indsæt fra}} vælger du en blok fra listen (skriv i {{ui:Filtrér blokke}} for at finde den), eller beholder {{ui:Hele tegningen}}. Klik på {{ui:Indsæt}}.
5. Klik, hvor den skal placeres, og udfyld eventuelle attributter, den beder om.

Hele tegningen kommer ind som én blok med navn efter filen. Blokke inde i den blok, du valgte, kommer også med. De lag, de bruger, føjes til denne tegning.

Hvis den anden tegning har andre enheder (fx tommer og millimeter), skalerer CadCraft referencen, så den passer, og siger det i historikken.

### Når et navn allerede er i brug

Har denne tegning allerede en blok med samme navn, spørger CadCraft:

- {{ui:Behold eksisterende}} bruger denne tegnings blok med det navn.
- {{ui:Omdøb}} indsætter den nye som `Navn (2)`.

Hele indsættelsen er ét trin: {{key:Mod+Z}} fjerner referencen og de kopierede definitioner igen.

## Åbn biblioteket

Klik på {{ui:Bibliotek…}} i panelet {{ui:Blokke}}, eller på {{ui:Bibliotek}} i gruppen {{ui:Blokke}}, eller skriv `LIB`. Ved ledeteksten `INSERT` åbner `L` det også.

Biblioteket har fire kilder, som faner:

- {{ui:Bibliotek}}: CadCraft-biblioteket. Søg efter navn, producent eller model, og filtrér efter kategori.
- {{ui:Filer…}}: en emnefil (`item.json`) fra et hvilket som helst bibliotek, eller en tegning, et regneark eller en 3D-model at lave emner af: en DWG eller DXF (hver blok bliver et emne), en CSV med kolonnerne navn og størrelse, eller en glTF- eller OBJ-model. Intet uploades.
- {{ui:Standard}}: stålprofiler (som snit, facader eller 3D-elementer) og standarddele som bolte, møtrikker og lejer, lavet her ud fra udgivne tabeller. Se [Placér stålprofiler og standarddele](topic:steel-and-standard-parts).
- {{ui:Andre feeds}}: andre biblioteker, der svarer på samme måde som Bibliotek. Tilføj deres adresse én gang; denne browser husker den.

Hvert kort viser en forhåndsvisning, navnet, producenten og modellen, licensen og versionen. Et trukket tilbage emne er markeret {{ui:Trukket tilbage}} med årsagen; CadCraft spørger, før du placerer et.

## Placér et emne

1. Klik på {{ui:Placér}} på et kort.
2. Klik, hvor emnet skal være. Skriv først `R` for at dreje det, eller `S` for at skalere det.
3. Ved `Angiv emnenummer (CC-ITEM)` trykker du {{key:Enter}} for det næste ledige nummer, eller skriver dit eget.

Emnet bliver en blok med navnet `LIB_<navn>_v<version>`, tegnet i denne tegnings enheder. Har tegningen ingen enheder, indsættes emnet i millimeter, og historikken siger det; sæt {{ui:Enheder}} i det højre panel først.

Dets data følger med som usynlige attributter: emnets id og version, licens og kildeangivelse, producent, model, kategori og størrelser. Se [Blokattributter](topic:attributes).

## Emner på dit sprog

Et emne kan have sit navn og sin beskrivelse på andre sprog. Når det har dem på det sprog, CadCraft er indstillet til (Indstillinger › Generelt › Sprog), bruger kortet og det placerede blokke emnets navn fra dem. Selve blokken beholder et navn lavet ud fra emnets eget navn, så en tegning har én blok pr. emne, uanset hvilket sprog der placerede det.

## Søg efter opdateringer

1. Åbn biblioteket.
2. Klik på {{ui:Søg efter opdateringer}}.

Hvert bibliotekemne i tegningen vises med sine emnenumre, og om det er opdateret, har en nyere version (og hvad der er ændret), eller er trukket tilbage. Klik på {{ui:Opdatér}} ved en række, eller på {{ui:Opdatér alle}}. Hver reference flytter til den nye versions blok og beholder sit emnenummer, antal, placering, vinkel og lag. {{key:Mod+Z}} fortryder en opdatering.

## Angiv kilderne til det, du har brugt

Klik på {{ui:Bibliotekets kildeangivelser}}. Hvert emne vises med sin kildeangivelseslinje og sin licens.

- {{ui:Kopiér kildeangivelse}} kopierer ét emnes linje; {{ui:Kopiér alle}} kopierer alle linjerne.
- {{ui:Download CSV}} gemmer listen med emnenumrene, producenterne, modellerne, licenserne og kildeangivelserne. Den åbnes i ethvert regneark.

Licenser som CC BY beder dig angive ophavsmanden, hvor du bruger værket. Sæt linjerne på tegningen, i specifikationen eller i projektnoterne.

## Symboler og aktiver

Biblioteket har tre slags emner: Symboler (tegnekonventioner, 2D), Typer (hvad et element er lavet af) og Aktiver (fysiske objekter). I fanen {{ui:Bibliotek}} viser listen {{ui:Slags emne}} Symboler og aktiver sammen, kun Symboler eller kun Aktiver. Typer er det, et BimCraft-projekt bygges af, så CadCraft viser dem ikke.

## Log ind på biblioteket

Klik på {{ui:Log ind på biblioteket}}. Et lille vindue åbner på webstedet; når du er logget ind dér, kan CadCraft vise dit teams emner og registrere det, du placerer, så du hører, når et emne, du har brugt, ændrer sig. Login gælder for denne browserfane. Tilbagekald det når som helst fra din kontos sikkerhedsside.

## Typiske fejl

- **»At lave emner af IFC-typer er i BimCraft.«** IFC- og familiefiler læses i appen BimCraft. Lav emnet der eller i biblioteket, og brug dets `item.json` her.
- **»Biblioteket kunne ikke nås.«** Du er offline, eller biblioteket er nede. Emner, der allerede er i tegningen, påvirkes ikke.
- **Et emne er langt for stort eller lille.** Tegningens enheder er forkerte eller ikke sat. Fortryd, sæt {{ui:Enheder}}, og placér det igen.
