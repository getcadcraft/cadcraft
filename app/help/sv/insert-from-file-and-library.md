---
title: Infoga från en fil eller biblioteket
summary: Ta in ett block, eller en hel ritning, från en annan DWG eller DXF, och placera objekt från biblioteket, en fil eller ett annat bibliotek, med deras källangivelser och uppdateringar.
keywords: infoga, fil, bibliotek, librarycraft, objekt, utrustning, block från en annan ritning, wblock, designcenter, källangivelser, upphovsangivelse, licens, uppdatering, flöde, item.json
from: f6e4e452
---

## Infoga ett block från en annan ritning

1. Skriv `I` och tryck på {{key:Enter}}, eller klicka på {{ui:Infoga}} i gruppen Block.
2. Kommandoraden längst ned i fönstret frågar `Enter block name or [File/Library]`. Skriv `F` där och tryck på {{key:Enter}}.
3. Välj DWG- eller DXF-filen på den här datorn. Den läses här; den öppnas inte, och inget laddas upp.
4. I dialogrutan {{ui:Infoga från}} väljer du ett block i listan (skriv i {{ui:Filtrera block}} för att hitta det), eller behåller {{ui:Hela ritningen}}. Klicka på {{ui:Infoga}}.
5. Klicka där det ska ligga, och fyll i de attribut det frågar efter.

Du kan också börja i panelen {{ui:Block}}: skriv `F` i dess ruta {{ui:Filtrera block}} och tryck på {{key:Enter}}, eller skriv något som inget block matchar och klicka på {{ui:Från en fil…}}. `L` och {{ui:Bibliotek…}} öppnar biblioteket på samma sätt. Före version 0.10.1 sökte en bokstav i {{ui:Filtrera block}} bara i den här ritningens block och svarade "No block matches the filter."

För att ha en ritning med egna block till hands, klicka på {{ui:Lägg till en ritning}} under {{ui:Bibliotek}} i panelen {{ui:Block}} och välj DWG- eller DXF-filen. Dess block listas med bilder; klicka på ett för att placera det.

Hela ritningen kommer in som ett block med namn efter filen. Block inuti blocket du valde kommer också med. Lagren de använder läggs till i den här ritningen.

Är den andra ritningen i andra enheter (tum och millimeter, till exempel), skalar CadCraft referensen så att den stämmer och säger det i historiken.

### När ett namn redan används

Har den här ritningen redan ett block med samma namn frågar CadCraft:

- {{ui:Behåll befintliga}} använder denna ritnings block med det namnet.
- {{ui:Byt namn}} tar in det nya som `Namn (2)`.

Hela infogningen är ett steg: {{key:Mod+Z}} tar bort referensen och de kopierade definitionerna igen.

## Öppna biblioteket

Klicka på {{ui:Bibliotek…}} i panelen {{ui:Block}}, eller {{ui:Bibliotek}} i gruppen Block, eller skriv `LIB`. Vid frågan `INSERT` öppnar `L` det också.

Biblioteket har fyra källor, som flikar:

- {{ui:Bibliotek}}: CadCrafts bibliotek. Sök efter namn, tillverkare eller modell, och filtrera efter kategori.
- {{ui:Filer…}}: en objektfil (`item.json`) från valfritt bibliotek, eller en ritning, kalkylblad eller 3D-modell att göra objekt av: en DWG eller DXF (varje block blir ett objekt), en CSV med kolumner för namn och storlek, eller en glTF- eller OBJ-modell. Inget laddas upp.
- {{ui:Standard}}: stålprofiler (som sektioner, elevationer eller 3D-element) och standarddelar som bultar, muttrar och lager, gjorda här utifrån publicerade tabeller. Se [Placera stålprofiler och standarddelar](topic:steel-and-standard-parts).
- {{ui:Andra flöden}}: andra bibliotek som svarar på samma sätt som Bibliotek. Lägg till deras adress en gång; den här webbläsaren kommer ihåg den.

Varje kort visar en förhandsvisning, namnet, tillverkaren och modellen, licensen och versionen. Ett indraget objekt markeras {{ui:Indragen}} med skälet; CadCraft frågar innan du placerar ett.

## Placera ett objekt

1. Klicka på {{ui:Placera}} på ett kort.
2. Klicka där objektet ska ligga. Skriv `R` först för att vrida det, eller `S` för att skala det.
3. Vid `Enter Item number (CC-ITEM)` trycker du på {{key:Enter}} för nästa lediga nummer, eller skriver ett eget.

Objektet blir ett block med namnet `LIB_<name>_v<version>`, ritat i den här ritningens enheter. Har ritningen inga enheter placeras objektet i millimeter, och historiken säger det; ange {{ui:Enheter}} i den högra panelen först.

Dess data följer med som osynliga attribut: objektets id och version, licens och källangivelse, tillverkare, modell, kategori och storlekar. Se [Blockattribut](topic:attributes).

## Objekt på ditt språk

Ett objekt kan bära sitt namn och sin beskrivning på andra språk. När det finns på det språk CadCraft är inställt på (Inställningar › Allmänt › Språk) använder kortet och det placerade blockets objektnamn dem. Blocket i sig behåller ett namn gjort av objektets eget namn, så en ritning har ett block per objekt oavsett vilket språk som placerade det.

## Sök efter uppdateringar

1. Öppna biblioteket.
2. Klicka på {{ui:Sök efter uppdateringar}}.

Varje bibliotekobjekt i ritningen listas med sina objektnummer och om det är uppdaterat, har en nyare version (och vad som ändrats), eller har dragits in. Klicka på {{ui:Uppdatera}} på en rad, eller {{ui:Uppdatera alla}}. Varje referens flyttas till den nya versionens block och behåller sitt objektnummer, sin mängd, plats, vinkel och lager. {{key:Mod+Z}} ångrar en uppdatering.

## Ge källangivelse för det du använt

Klicka på {{ui:Bibliotekets källangivelser}}. Varje objekt listas med sin källangivelsesrad och licens.

- {{ui:Kopiera källangivelse}} kopierar ett objekts rad; {{ui:Kopiera alla}} kopierar varje rad.
- {{ui:Ladda ner CSV}} sparar listan med objektnummer, tillverkare, modeller, licenser och källangivelser. Den öppnas i vilket kalkylprogram som helst.

Licenser som CC BY ber dig ange upphovsmannen där du använder verket. Lägg raderna på ritningen, i specifikationen eller i projektanteckningarna.

## Symboler och tillgångar

Biblioteket har tre slag av objekt: Symboler (ritkonventioner, 2D), Typer (vad ett element består av) och Tillgångar (fysiska objekt). I fliken {{ui:Bibliotek}} visar listan {{ui:Typ av objekt}} Symboler och tillgångar tillsammans, bara Symboler, eller bara Tillgångar. Typer är det ett BimCraft-projekt byggs av, så CadCraft listar dem inte.

## Logga in i biblioteket

Klicka på {{ui:Logga in i biblioteket}}. Ett litet fönster öppnas på webbplatsen; när du är inloggad där kan CadCraft visa ditt teams objekt och registrera det du placerar, så att du får veta när ett objekt du använt ändras. Inloggningen gäller för den här webbläsarfliken. Återkalla den när som helst från kontots säkerhetssida.

## Spara dina egna objekt i Mina objekt

{{ui:Mina objekt}} är en privat lista i biblioteket som bara du kan se. Den finns inte i det offentliga biblioteket, inte i sökningen och visas inte för ditt team, och den följer ditt konto till varje dator där du loggar in i biblioteket.

1. Klicka på {{ui:Filer…}} i panelen Bibliotek och läs en fil.
2. På objektet du vill ha igen, klicka på {{ui:Spara i mina objekt}}.
3. Senare klickar du på {{ui:Mina objekt}} och på {{ui:Placera}}. Det placeras som vilket bibliotekobjekt som helst, och {{ui:Sök efter uppdateringar}} täcker det.
4. {{ui:Ta bort från mina objekt}} tar bort det från listan. Kopior som redan placerats i ritningar finns kvar.

Du måste vara inloggad i biblioteket. Att läsa en fil laddar inte upp något; att spara ett objekt skickar bara just det objektet till ditt konto.

:::note
Mina objekt testas och kanske inte är öppet för ditt konto än. Säger det "My objects is not open for this account yet" kan du fortfarande placera objekt från dina egna filer med {{ui:Filer…}}.
:::

## Vanliga misstag

- **"Making items from IFC types is in BimCraft."** IFC- och familjefiler läses i appen BimCraft. Gör objektet där eller i biblioteket, och använd sedan dess `item.json` här.
- **"The library could not be reached."** Du är offline, eller biblioteket är nere. Objekt som redan finns i ritningen påverkas inte.
- **Ett objekt är alldeles för stort eller litet.** Ritningens enheter är fel eller inte satta. Ångra, ange {{ui:Enheter}} och placera det igen.
