---
title: Indsæt fra en fil eller biblioteket
summary: Hent en blok, eller en hel tegning, ind fra en anden DWG eller DXF, og placér elementer fra biblioteket, en fil eller et andet bibliotek, med deres kildeangivelser og opdateringer.
keywords: indsæt, fil, bibliotek, librarycraft, element, udstyr, blok fra en anden tegning, wblock, designcenter, kildeangivelse, attribution, licens, opdatering, feed, item.json
from: f6e4e452
---

## Indsæt en blok fra en anden tegning

1. Skriv `I` og tryk {{key:Enter}}, eller klik på {{ui:Indsæt}} i gruppen Blokke.
2. Kommandolinjen nederst i vinduet spørger `Enter block name or [File/Library]`. Skriv `F` der og tryk {{key:Enter}}.
3. Vælg DWG- eller DXF-filen på denne computer. Den læses her; den åbnes ikke, og intet uploades.
4. I dialogen {{ui:Indsæt fra}} vælger du en blok fra listen (skriv i {{ui:Filtrér blokke}} for at finde den), eller lad {{ui:Hele tegningen}} stå. Klik på {{ui:Indsæt}}.
5. Klik, hvor den skal hen, og udfyld eventuelle attributter, den beder om.

Du kan også starte fra panelet {{ui:Blokke}}: skriv `F` i dets felt {{ui:Filtrér blokke}} og tryk {{key:Enter}}, eller skriv noget, ingen blok matcher, og klik på {{ui:Fra en fil…}}. `L` og {{ui:Bibliotek…}} åbner biblioteket på samme måde. Før version 0.10.1 søgte et bogstav skrevet i {{ui:Filtrér blokke}} kun i denne tegnings blokke og svarede »Ingen blok matcher filteret.«

For at have en tegning med dine egne blokke ved hånden, klik på {{ui:Tilføj en tegning}} under {{ui:Biblioteker}} i panelet {{ui:Blokke}} og vælg DWG- eller DXF-filen. Dens blokke vises med billeder; klik på en for at placere den.

Hele tegningen kommer ind som én blok, navngivet efter filen. Blokke inde i den blok, du valgte, kommer også med. De lag de bruger, føjes til denne tegning.

Hvis den anden tegning er i andre enheder (tommer og millimeter, for eksempel), skalerer CadCraft referencen til at passe og siger det i historikken.

### Når et navn allerede er i brug

Hvis denne tegning allerede har en blok med samme navn, spørger CadCraft:

- {{ui:Behold eksisterende}} bruger denne tegnings blok af det navn.
- {{ui:Omdøb}} henter den nye ind som `Name (2)`.

Hele indsættelsen er ét trin: {{key:Mod+Z}} tager referencen og de kopierede definitioner væk igen.

## Åbn biblioteket

Klik på {{ui:Bibliotek…}} i panelet {{ui:Blokke}}, eller {{ui:Bibliotek}} i gruppen Blokke, eller skriv `LIB`. Ved `INSERT`-prompten åbner `L` det også.

Biblioteket har fire kilder, som faner:

- {{ui:Bibliotek}}: CadCraft-biblioteket. Søg efter navn, producent eller model, og filtrér efter kategori.
- {{ui:Filer…}}: en elementfil (`item.json`) fra ethvert bibliotek, eller en tegning, et regneark eller en 3D-model at lave elementer ud af: en DWG eller DXF (hver blok bliver et element), en CSV med navne- og størrelseskolonner, eller en glTF- eller OBJ-model. Intet uploades.
- {{ui:Standard}}: stålprofiler (som snit, opstalter eller 3D-profiler) og standarddele såsom bolte, møtrikker og lejer, lavet her ud fra offentliggjorte tabeller. Se [Placér stålprofiler og standarddele](topic:steel-and-standard-parts).
- {{ui:Andre feeds}}: andre biblioteker, der svarer på samme måde som Bibliotek. Tilføj deres adresse én gang; denne browser husker den.

Hvert kort viser et billede, navnet, producenten og modellen, licensen og versionen. Et tilbagetrukket element er markeret {{ui:Trukket tilbage}} med årsagen; CadCraft spørger, før du placerer et.

## Placér et element

1. Klik på {{ui:Placér}} på et kort.
2. Klik, hvor elementet skal hen. Skriv `R` først for at dreje det, eller `S` for at skalere det.
3. Ved `Enter Item number (CC-ITEM)` trykker du {{key:Enter}} for det næste ledige nummer, eller skriver dit eget.

Elementet bliver en blok ved navn `LIB_<name>_v<version>`, tegnet i denne tegnings enheder. Har tegningen ingen enheder, placeres elementet i millimeter, og historikken siger det; angiv {{ui:Enheder}} i højre panel først.

Dets data følger med som usynlige attributter: elementets id og version, licens og kildeangivelse, producent, model, kategori og størrelser. Se [Blokattributter](topic:attributes).

## Elementer på dit sprog

Et element kan have sit navn og sin beskrivelse på andre sprog. Når det har dem på det sprog, CadCraft er sat til (Indstillinger › Generelt › Sprog), bruger kortet og det placerede blokkens elementnavn dem. Selve blokken beholder et navn lavet ud fra elementets eget navn, så en tegning har én blok pr. element, uanset hvilket sprog der placerede det.

## Tjek for opdateringer

1. Åbn biblioteket.
2. Klik på {{ui:Søg efter opdateringer}}.

Hvert bibliotekselement i tegningen vises med sine elementnumre og om det er opdateret, har en nyere version (og hvad der er ændret), eller er blevet trukket tilbage. Klik på {{ui:Opdatér}} på en række, eller {{ui:Opdatér alle}}. Hver reference flytter til den nye versions blok og beholder sit elementnummer, antal, sted, vinkel og lag. {{key:Mod+Z}} fortryder en opdatering.

## Angiv hvad du har brugt

Klik på {{ui:Bibliotekets kildeangivelser}}. Hvert element vises med sin kildelinje og sin licens.

- {{ui:Kopiér kildeangivelse}} kopierer ét elements linje; {{ui:Kopiér alle}} kopierer hver linje.
- {{ui:Download CSV}} gemmer listen med elementnumrene, producenterne, modellerne, licenserne og kildeangivelserne. Den åbnes i ethvert regneark.

Licenser som CC BY beder dig nævne forfatteren, hvor du bruger værket. Sæt linjerne på tegningen, i specifikationen eller i projektnoterne.

## Symboler og aktiver

Biblioteket har tre slags elementer: Symboler (tegnekonventioner, 2D), Typer (hvad et element er lavet af) og Aktiver (fysiske objekter). I fanen {{ui:Bibliotek}} viser listen {{ui:Slags emne}} Symboler og aktiver sammen, kun Symboler, eller kun Aktiver. Typer er det, et BimCraft-projekt er bygget af, så CadCraft viser dem ikke.

## Log ind på biblioteket

Klik på {{ui:Log ind på biblioteket}}. Et lille vindue åbnes på siden; når du er logget ind der, kan CadCraft vise dit teams elementer og registrere det, du placerer, så du hører, når et element du brugte, ændres. Login varer for denne browserfane. Tilbagekald det når som helst fra din kontos sikkerhedsside.

## Behold dine egne objekter i Mine objekter

{{ui:Mine objekter}} er en privat liste i Biblioteket, som kun du kan se. Den er ikke i det offentlige bibliotek, ikke i søgningen, og den vises ikke for dit team, og den følger din konto til hver computer, hvor du logger ind i biblioteket.

1. Klik i panelet Bibliotek på {{ui:Filer…}} og læs en fil.
2. På det element du vil have igen, klik på {{ui:Gem i mine objekter}}.
3. Senere klikker du på {{ui:Mine objekter}} og klikker på {{ui:Placér}}. Det placeres som ethvert bibliotekselement, og {{ui:Søg efter opdateringer}} dækker det.
4. {{ui:Fjern fra mine objekter}} tager det af listen. Kopier der allerede er placeret i tegninger, bliver.

Du skal være logget ind i biblioteket. At læse en fil uploader intet; at beholde et element sender kun det ene element til din konto.

:::note
Mine objekter er under test og er måske ikke åben for din konto endnu. Hvis der står »Mine objekter er ikke åben for denne konto endnu«, kan du stadig placere elementer fra dine egne filer med {{ui:Filer…}}.
:::

## Almindelige fejl

- **»Lav elementer ud fra IFC-typer er i BimCraft.«** IFC- og familiefiler læses i BimCraft-appen. Lav elementet der, eller på biblioteket, og brug dets `item.json` her.
- **»Biblioteket kunne ikke nås.«** Du er offline, eller biblioteket er nede. Elementer der allerede er i tegningen, berøres ikke.
- Et element er langt for stort eller for småt. Tegningens enheder er forkerte eller ikke angivet. Fortryd, angiv {{ui:Enheder}}, og placér det igen.
