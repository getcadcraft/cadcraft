---
title: Infoga från en fil eller biblioteket
summary: Hämta in ett block, eller en hel ritning, från en annan DWG- eller DXF-fil, och placera objekt från biblioteket, en fil eller ett annat bibliotek, med deras källangivelser och uppdateringar.
keywords: infoga, fil, bibliotek, librarycraft, objekt, utrustning, block från en annan ritning, wblock, designcenter, källangivelser, upphovsangivelse, licens, uppdatering, flöde, item.json
from: 316188d2
---

## Infoga ett block från en annan ritning

1. Skriv `I` och tryck på {{key:Enter}}, eller klicka på {{ui:Infoga}} i gruppen {{ui:Block}}.
2. Vid `Enter block name or [File/Library]` skriver du `F` och trycker på {{key:Enter}}.
3. Välj DWG- eller DXF-filen på den här datorn. Den läses här; den öppnas inte, och inget laddas upp.
4. I dialogrutan {{ui:Infoga från}} väljer du ett block i listan (skriv i {{ui:Filtrera block}} för att hitta det), eller behåll {{ui:Hela ritningen}}. Klicka på {{ui:Infoga}}.
5. Klicka där det ska placeras, och fyll i eventuella attribut som den frågar efter.

Hela ritningen hämtas in som ett block med filens namn. Block inuti blocket du valde kommer med. Lagren de använder läggs till i den här ritningen.

Om den andra ritningen har andra enheter (tum och millimeter till exempel) skalar CadCraft referensen så att den stämmer, och säger det i historiken.

### När ett namn redan används

Om den här ritningen redan har ett block med samma namn frågar CadCraft:

- {{ui:Behåll befintliga}} använder den här ritningens block med det namnet.
- {{ui:Byt namn}} hämtar in det nya som `Namn (2)`.

Hela infogningen är ett steg: {{key:Mod+Z}} tar bort referensen och de kopierade definitionerna igen.

## Öppna biblioteket

Klicka på {{ui:Bibliotek…}} i panelen {{ui:Block}}, eller {{ui:Bibliotek}} i gruppen Block, eller skriv `LIB`. Vid prompten `INSERT` öppnar `L` det också.

Biblioteket har fyra källor, som flikar:

- {{ui:Bibliotek}}: CadCraft-biblioteket. Sök efter namn, tillverkare eller modell, och filtrera efter kategori.
- {{ui:Filer…}}: en objektfil (`item.json`) från valfritt bibliotek, eller en ritning, ett kalkylblad eller en 3D-modell att skapa objekt av: en DWG eller DXF (varje block blir ett objekt), en CSV med kolumnerna namn och storlek, eller en glTF- eller OBJ-modell. Inget laddas upp.
- {{ui:Standard}}: stålprofiler (som sektioner, fasader eller 3D-stänger) och standarddelar som bultar, muttrar och lager, skapade här från publicerade tabeller. Se [Placera stålprofiler och standarddelar](topic:steel-and-standard-parts).
- {{ui:Andra flöden}}: andra bibliotek som svarar på samma sätt som Bibliotek. Lägg till deras adress en gång; webbläsaren kommer ihåg den.

Varje kort visar en förhandsvisning, namnet, tillverkaren och modellen, licensen och versionen. Ett återkallat objekt märks med {{ui:Återkallad}} och skälet; CadCraft frågar innan du placerar ett.

## Placera ett objekt

1. Klicka på {{ui:Placera}} på ett kort.
2. Klicka där objektet ska placeras. Skriv `R` först för att vrida det, eller `S` för att skala det.
3. Vid `Enter Item number (CC-ITEM)` trycker du på {{key:Enter}} för nästa lediga nummer, eller skriver ett eget.

Objektet blir ett block med namnet `LIB_<name>_v<version>`, ritat i den här ritningens enheter. Om ritningen saknar enheter placeras objektet i millimeter och historiken säger det; ange {{ui:Enheter}} i den högra panelen först.

Dess data följer med som osynliga attribut: objektets id och version, licens och källangivelse, tillverkare, modell, kategori och storlekar. Se [Blockattribut](topic:attributes).

## Objekt på ditt språk

Ett objekt kan ha sitt namn och sin beskrivning på andra språk. När det har dem på det språk CadCraft är inställt på (Inställningar › Allmänt › Språk) använder kortet och det placerade blockets objektnamn dem. Blocket i sig behåller ett namn som bildas av objektets eget namn, så en ritning har ett block per objekt oavsett vilket språk som placerade det.

## Sök efter uppdateringar

1. Öppna biblioteket.
2. Klicka på {{ui:Sök efter uppdateringar}}.

Varje biblioteksobjekt i ritningen listas med sina objektnummer och om det är uppdaterat, har en nyare version (och vad som ändrats), eller har återkallats. Klicka på {{ui:Uppdatera}} på en rad, eller {{ui:Uppdatera alla}}. Varje referens flyttas till den nya versionens block och behåller sitt objektnummer, sin mängd, sin plats, sin vinkel och sitt lager. {{key:Mod+Z}} ångrar en uppdatering.

## Ange källor för det du använt

Klicka på {{ui:Bibliotekets källangivelser}}. Varje objekt listas med sin källangivelse och sin licens.

- {{ui:Kopiera källangivelse}} kopierar ett objekts rad; {{ui:Kopiera alla}} kopierar varje rad.
- {{ui:Ladda ner CSV}} sparar listan med objektnumren, tillverkarna, modellerna, licenserna och källangivelserna. Den öppnas i vilket kalkylprogram som helst.

Licenser som CC BY ber dig ange upphovsmannen där du använder verket. Lägg raderna på ritningen, i specifikationen eller i projektanteckningarna.

## Symboler och tillgångar

Biblioteket har tre typer av objekt: Symboler (ritkonventioner, 2D), Typer (vad ett element består av) och Tillgångar (fysiska objekt). I fliken {{ui:Bibliotek}} visar listan {{ui:Typ av objekt}} Symboler och tillgångar tillsammans, bara Symboler, eller bara Tillgångar. Typer är det ett BimCraft-projekt byggs av, så CadCraft listar dem inte.

## Logga in i biblioteket

Klicka på {{ui:Logga in i biblioteket}}. Ett litet fönster öppnas på webbplatsen; när du är inloggad där kan CadCraft visa ditt teams objekt och registrera det du placerar, så att du hör när ett objekt du använde ändras. Inloggningen gäller för den här webbläsarfliken. Återkalla den när som helst från kontots säkerhetssida.

## Vanliga misstag

- **"Att skapa objekt från IFC-typer görs i BimCraft."** IFC- och familjefiler läses i appen BimCraft. Skapa objektet där eller i biblioteket, och använd sedan dess `item.json` här.
- **"Biblioteket kunde inte nås."** Du är offline, eller biblioteket är nere. Objekt som redan finns i ritningen påverkas inte.
- **Ett objekt är alldeles för stort eller för litet.** Ritningens enheter är fel eller inte inställda. Ångra, ange {{ui:Enheter}} och placera det igen.
