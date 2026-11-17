---
title: Skapa och infoga block
summary: Gör en ritad dörr till ett block, placera den igen på andra positioner, skalor och vinklar, och rensa bort oanvända block.
keywords: block, bmake, infoga, ddinsert, symbol, rensa, purge, spräng, explode, definiera om, baspunkt, referens, räkna, bcount, förteckning, csv, attribut, datautvinning
from: 125a129d
---

## Det du ska skapa

En dörrsymbol som görs till ett block som heter `DOOR-900`, och sedan placeras tre gånger: som ritad, vriden 90 grader och spegelvänd.

Ett block är en namngiven grupp av objekt. Du ritar det en gång; varje ställe du använder det på är en **blockreferens** som pekar tillbaka på den enda definitionen. Avsnittet {{ui:Block}} i vänster panel listar blocken i ritningen och hur ofta vart och ett används.

## Rita dörren

1. Skriv `L` och tryck på {{key:Enter}}.
2. Skriv `0,0` och tryck på {{key:Enter}}.
3. Skriv `@0,900` och tryck på {{key:Enter}}, tryck sedan på {{key:Enter}} igen. Det här är dörrbladet.
4. Skriv `A` och tryck på {{key:Enter}}.
5. Skriv `C` och tryck på {{key:Enter}} för att ange centrum först.
6. Skriv `0,0` och tryck på {{key:Enter}} för centrum.
7. Skriv `900,0` och tryck på {{key:Enter}} för startpunkten.
8. Skriv `0,900` och tryck på {{key:Enter}} för slutpunkten. Det här är svängen.
9. Klicka på {{ui:Utsträckning}}.

Bågar går moturs från startpunkten till slutpunkten.

## Skapa blocket

1. Skriv `B` och tryck på {{key:Enter}}, eller klicka på {{ui:Skapa}} i gruppen Block.
2. Vid `Ange blocknamn`, skriv `DOOR-900` och tryck på {{key:Enter}}.
3. Vid `Ange baspunkt för infogning`, skriv `0,0` och tryck på {{key:Enter}}. Det här är gångjärnet: punkten som hamnar där du placerar blocket.
4. Vid `Välj objekt`, dra ett fönster runt bladet och bågen.
5. Tryck på {{key:Enter}}.

Historiken säger `Block ”DOOR-900” skapades av 2 objekt, och de ersattes av en referens till det.` Panelen {{ui:Block}} listar DOOR-900 med `1×` bredvid: en referens. Klicka på dörren: den markeras nu som ett enda objekt, en ”Blockreferens”.

:::tip
Du kan markera objekten först och sedan skriva `B`. CadCraft frågar fortfarande efter namnet och baspunkten, och använder sedan din markering.
:::

## Infoga blocket

1. Skriv `I` och tryck på {{key:Enter}}, eller klicka på {{ui:Infoga}} bredvid DOOR-900 i panelen {{ui:Block}}.
2. Vid `Ange blocknamn eller [Fil/Bibliotek (L)] <DOOR-900>`, tryck på {{key:Enter}}. (Knappen {{ui:Infoga}} i panelen fyller i namnet åt dig.)
3. Dörren följer korshåret. Klicka där gångjärnet ska vara.

En andra dörr visas.

## Infoga vriden eller skalad

1. Skriv `I` och tryck på {{key:Enter}}, tryck sedan på {{key:Enter}} för att godkänna namnet.
2. Vid `Ange infogningspunkt [Skala/Rotera]`, skriv `R` och tryck på {{key:Enter}}.
3. Skriv `90` och tryck på {{key:Enter}}. Förhandsvisningen vrids.
4. Klicka för att placera den.

Skriv `S` i stället för att ange en skalfaktor; den gäller i båda riktningarna. Skalan och rotationen kommer ihåg till nästa infogning. För att spegla en dörr, infoga den och använd sedan {{cmd:MIRROR}} på referensen.

## Ändra ett placerat block

Markera en blockreferens. I den högra panelen kan du ändra {{ui:X}}, {{ui:Y}}, {{ui:Scale X}}, {{ui:Scale Y}} och {{ui:Rotation}}. Ett negativt {{ui:Scale X}} vänder den.

## Definiera om ett block

För att ändra alla dörrar på en gång, skapa ett block med samma namn:

1. Rita den nya versionen av dörren.
2. Skriv `B` och tryck på {{key:Enter}}, och skriv `DOOR-900`.
3. Vid `Block ”DOOR-900” finns redan. Definiera om det?`, skriv `Y` och tryck på {{key:Enter}}.
4. Ange baspunkten och markera de nya objekten, som tidigare.

Varje referens till DOOR-900 visar nu den nya versionen.

Eller redigera blocket självt: {{ui:Block}} › {{ui:Mer}} › {{ui:Redigera block}} ({{cmd:BEDIT}}) öppnar det för sig själv, och {{ui:Spara block}} sparar tillbaka det. Se [Blockattribut](topic:attributes#change-a-block-the-block-editor).

## Räkna block och exportera en förteckning

Skriv {{cmd:COUNT}} (eller {{ui:Block}} › {{ui:Mer}} › {{ui:Räkna block}}), och sedan:

- klicka på en dörr: alla dörrar i det här utrymmet markeras, och historiken säger hur många det finns här och i hela ritningen;
- eller tryck på {{key:Enter}}: historiken listar varje block med sitt antal, flest först;
- eller skriv `E`, och sedan `C` för en CSV med antalen (i modellen, på blad, totalt) eller `A` för en rad per referens med dess lager, position, rotation och varje attributvärde — en förteckning du kan öppna i ett kalkylblad.

Namnlösa block (måttsättningar, tabeller) och referenser inuti andra block räknas inte. Celler som börjar som en formel (`=`, `+`, `-`, `@`) får ett inledande `'` så att ett kalkylblad visar dem som text.

## Spräng och rensa

- {{cmd:EXPLODE}} (`X`) gör en markerad blockreferens till separata objekt igen. Definitionen finns kvar.
- {{cmd:PURGE}} (`PU`) tar bort blockdefinitioner som inget längre använder. Historiken säger hur många den tog bort.

## Blocknamn

Ett namn kan vara upp till 255 tecken långt och kan innehålla mellanslag, men det kan inte börja med en asterisk och inte innehålla `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` eller ett grav accent. När du sparar DXF R12 skrivs namnen med versaler, andra tecken än bokstäver, siffror, `$`, `_` och `-` blir `_`, och namnen kortas till 31 tecken; historiken säger hur många som ändrades. Korta namn med versaler, siffror och bindestreck, som `DOOR-900`, överlever oförändrade. En sparad DWG behåller namnen så som du skrev dem, med stora och små bokstäver; bara tecken som DWG inte tillåter ändras (ett `|` blir `$0$`, andra blir `_`).

## Skriv ett block eller objekt till en egen fil

Skriv `W` ({{cmd:WBLOCK}}) och välj **Objekt**, **Block** eller **Hela ritningen**. Resultatet blir en ny DWG eller DXF som bara innehåller de lager, stilar och block den använder, med din baspunkt som origo. För objekt kan du behålla dem, göra dem till ett block eller ta bort dem från den här ritningen.

## Vanliga misstag

- **Blocket hamnade långt från korshåret.** Baspunkten låg inte på objekten. Gör blocket igen med baspunkten på ett hörn eller ett gångjärn.
- **”No objects selected; nothing made.”** Du tryckte på Enter innan du markerade något. Ingen markering: inget skapades.
- **”This drawing has no blocks yet: F inserts one from a file, L from the library (or make one with BLOCK).”** Ritningen har inga block ännu: F infogar ett från en fil, L från biblioteket (eller skapa ett med BLOCK). Skriv `F` för att hämta ett block från en annan ritning, eller `L` för biblioteket. Se [Infoga från fil eller bibliotek](topic:insert-from-file-and-library).
- **”A viewport cannot go in a block.”** En vyport kan inte ingå i ett block. Lämna vyportramar utanför markeringen.
