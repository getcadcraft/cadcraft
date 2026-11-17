---
title: Modellera i 3D
summary: Se ritningen i 3D på fliken 3D och skapa enkla solid av den: extrudera (med avsmalning eller längs en bana), revolvera, trycka och dra ytor, lådor, cylindrar och kilar, förena, subtrahera och skära solid, flytta, kopiera, rotera och radera dem, samt placera platta 2D-vyer av dem på ett blad.
keywords: 3d, tre d, solid, 3dsolid, region, kropp, acis, sat, sab, solid från andra program, öppna 3D-ritning, extrudera, ext, revolvera, rev, svep, avsmalning, bana, presspull, tryck dra, press pull, push pull, låda, box, cylinder, cyl, kil, wedge, 3dorbit, kretsa, orbit, vy, vscurrent, visuell stil, skuggad, dold linje, trådmodell, röntgen, xray, iso, perspektiv, parallell, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, view cube, förena, union, uni, subtrahera, su, skärning, intersect, in, boolesk, boolean, kombinera, förena solid, viewbase, flatshot, platt vy, 2d-vy, ritningsvy, framvy, uppifrånvy, sidovy, dolda linjer
from: 13060e71
---

## Det här gör du

En 1000 × 600 rumsyta extruderas till ett block som är 400 högt, en yta dras upp och en cylinder placeras bredvid. Sedan sparas modellen med ritningen och exporteras för en 3D-visare eller en skrivare.

Fliken {{ui:3D}} ligger bredvid {{ui:Modell}} under ritningen. Den visar modellrumsritningen liggande på marken i sina lagerfärger (lager som är av eller frysta förblir dolda) och de solid du skapar. Första gången fliken öppnas laddas 3D-vyn; därefter byter den direkt.

## Extrudera en form

1. På fliken {{ui:Modell}}, skriv `REC` och tryck på {{key:Enter}}. Skriv `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Klicka på fliken {{ui:3D}}. Verktygsfältet visar gruppen {{ui:3D}} i stället för ritningsgrupperna.
3. Klicka på {{ui:Extrudera}} (eller skriv {{cmd:EXTRUDE}}, `EXT`). Klicka inuti rektangeln och tryck sedan på {{key:Enter}}.
4. Skriv `400` och tryck på {{key:Enter}}. Historiken säger "Extruderade 1 solid, 400 hög" med dess volym.

Slutna polylinjer (bågar inkluderade), rektanglar, polygoner, cirklar och ellipser extruderas. Linjer och öppna polylinjer gör det inte, och historiken säger varför. Du kan också markera formerna på fliken {{ui:Modell}} först och skriva `EXTRUDE` där. I stället för att skriva höjden kan du klicka på den: konturen följer markören upp och ned. En negativ höjd går nedåt. Skriv `D` vid höjdprompten för att radera 2D-formerna efter extrudering (`D` igen behåller dem).

Vid höjdprompten ber `T` (Avsmalningsvinkel) om en vinkel i grader: sidorna lutar inåt med den, så att toppen blir mindre (en negativ vinkel gör den större). En för brant vinkel för formen avvisas. `P` (Bana) sveper formerna längs en bana i stället (se nedan).

## Revolvera och svepa

- {{cmd:REVOLVE}} (`REV`, eller {{ui:Mer}} › {{ui:Revolvera kring en axel}}): markera slutna former, tryck på {{key:Enter}} och klicka sedan på axelns två ändpunkter (eller skriv `X` eller `Y` för ritningens axel genom 0,0). Skriv sedan en vinkel, eller tryck på {{key:Enter}} för ett helt varv. Formen vrids kring axeln och reser sig ur marken: rita halva konturen av en vas bredvid en linje och revolvera den kring linjen. Formen får vidröra axeln men inte korsa den. Ett helt varv har 48 steg.
- {{cmd:SWEEP}} (eller {{ui:Mer}} › {{ui:Svep längs en bana}}, eller `P` vid EXTRUDE:s höjdprompt): markera slutna former (profilen), tryck på {{key:Enter}} och klicka sedan på banan: en linje, polylinje, båge, cirkel eller ellips. Profilen reser sig tvärs över banan med mitten på den och löper längs den. Hörn skärs i geringsvinkel, och en sluten bana ger en ring. En liten rektangel som sveps längs ett rums kontur blir en golvlist, och en cirkel längs en polylinje blir ett rör.

## Trycka och dra en yta

1. Klicka på {{ui:Tryck/dra}} (eller skriv {{cmd:PRESSPULL}}).
2. Klicka på blockets översta yta.
3. Skriv `100` och tryck på {{key:Enter}}, eller flytta markören och klicka. Blocket är nu 500 högt.

## Lådor, cylindrar och kilar

- {{cmd:BOX}}: klicka eller skriv två hörn, och sedan en höjd.
- {{cmd:CYLINDER}} (`CYL`): mittpunkten, radien och sedan en höjd. Cylindrar och extruderade cirklar har 48 sidor, skuggade jämnt.
- {{cmd:WEDGE}} (`WE`): två hörn och en höjd. Den är full höjd vid det första hörnet och sluttar till noll vid det andra.

På fliken 3D träffar ett klick ytan eller kanten under markören, annars marken, så att en låda kan stå på en annan solid.

## Flytta, kopiera, rotera och radera solid

På fliken 3D väljer ett klick en solid. Dra från vänster till höger för ett fönster, och från höger till vänster för ett korsande fönster. Sedan:

- {{cmd:MOVE}}: klicka en basspunkt och var den ska gå, eller skriv `<100,0,0>` (eller `@100,0`) för en sträcka längs X, Y och Z.
- {{cmd:COPY}}: samma, men originalet blir kvar.
- {{cmd:ROTATE}}: skriv en vinkel (den vrids kring markeringens mitt, runt Z), eller klicka mittpunkten, en startpunkt och vinkeln.
- {{cmd:ERASE}} eller {{key:Delete}}.

## Förena, subtrahera och skära solid

Öppna {{ui:Mer}} i 3D-verktygsfältet, eller skriv kommandot:

- {{cmd:UNION}} (`UNI`): markera solidena och tryck på {{key:Enter}}. De blir en solid.
- {{cmd:SUBTRACT}} (`SU`): markera de solid som ska behållas och tryck på {{key:Enter}}. Markera sedan de som ska bort och tryck på {{key:Enter}}. Ett hål genom ett block: rita en cylinder genom det och subtrahera sedan cylindern.
- {{cmd:INTERSECT}} (`IN`): markera solidena och tryck på {{key:Enter}}. Endast det de har gemensamt blir kvar.

Historiken säger resultatets volym. Varje kommando är ett ångra-steg. Det första du kör laddar den booleska 3D-motorn (ca 0,5 MB; ingår i {{ui:Spara för offline}}). Endast slutna solid kan kombineras: en solid med öppna kanter (från ett annat programs lösa 3D-ytor) avvisas, och historiken säger varför. Resultatet blir en solid. Krökta ytor består av platta facetter, precis som cylindern.

Dubbelklicka på en solid för att redigera dess ytor och kanter var för sig. {{key:Esc}} stänger det igen. Varje 3D-ändring är ett ångra-steg i samma historik som ritningen: {{key:Mod+Z}} ångrar det senaste du gjorde på någon av flikarna.

## Platta vyer på ett blad

1. Öppna en bladflik (eller stanna på {{ui:Modell}}) och skriv sedan {{cmd:VIEWBASE}} (eller `FLATSHOT`).
2. Välj vyn: {{key:Enter}} för framvyn, eller `T` (uppifrån), `R` (höger), `L` (vänster), `BA` (bak), `BO` (botten), `I` (isometrisk).
3. {{key:Enter}} visar dolda linjer, streckade. `H` utelämnar dem.
4. {{key:Enter}} tar skalan CadCraft föreslår: på ett blad den största standardskalan (till exempel 1:20) där vyn ryms inom under halva pappret. Eller skriv en skala: `1:50`, `2:1`.
5. Klicka, eller skriv, var vyns mitt ska ligga.

Vyn är en blockreferens, `VIEW-FRONT-1` och så vidare: synliga kanter ligger på lagret VIEW-VISIBLE (0,5 mm) och dolda på VIEW-HIDDEN (streckad, 0,25 mm). Flytta den, måttsätt den och skriv ut den som vilken annan ritningsvy som helst. Den är en bild av solidena när du gjorde den. Efter att ha ändrat dem, radera vyn och kör {{cmd:VIEWBASE}} igen. För fler vyer, kör kommandot en gång per vy.

## Titta runt

Dra med hjulet för att kretsa, {{key:Shift}} + hjul dra eller högerknappen för att panorera, och vrid hjulet för att zooma vid markören. På en pekplatta kretsar två fingrar och en nypning zoomar. Ett högerklick utan att dra är {{key:Enter}}, som på de andra flikarna. 3DORBIT låter vänsterknappen kretsa tills du trycker på {{key:Enter}} eller {{key:Esc}}.

- {{ui:Vyer}} (eller {{cmd:VIEW}}): Iso, Uppifrån, Botten, Framifrån, Bakifrån, Vänster, Höger, Perspektiv eller Parallell, samt Zooma till allt.
- {{ui:Stil}} (eller {{cmd:VSCURRENT}}, `VS`): Skuggad, Skuggad med kanter, Dold linje, Trådmodell eller Röntgen.

Punkter du klickar fäster vid solidena (hörn, kanter, ytor) och vid 2D-ritningen på marken: ändarna och mittpunkterna på dess linjer och bågar, samt punkter längs dem. 2D-linjerna markeras aldrig på fliken 3D. När ett kommando frågar efter 2D-objekt (EXTRUDE, REVOLVE, SWEEP) väljer ett klick ett objekt. Ett drag från vänster till höger tar det som ligger helt inuti fönstret, och ett drag från höger till vänster tar det som fönstret korsar, precis som på fliken {{ui:Modell}}.

En vykub sitter uppe till höger på fliken 3D: klicka på en yta, kant eller ett hörn för att titta därifrån, dra den för att kretsa, och husknappen återgår till isovyn. Det är {{ui:Automatisk}}, utgångsläget för {{ui:Hörnindikator}} i [CadCraft-inställningar](topic:settings). Inställt på {{ui:ViewCube}} visar även fliken {{ui:Modell}} en kub som tittar uppifrån. Ett klick på en annan sida öppnar fliken 3D och tittar därifrån. Inställt på {{ui:Axelikon}} visar båda flikarna axelmarkören i stället.

## Solid från andra program

En ritning från ett annat program kan innehålla 3D-solid, regioner och kroppar (3DSOLID, REGION, BODY: det andra programmet behåller deras form som ACIS-data). CadCraft visar de i modellrummet på fliken 3D, i sin lagers färg och med sina egna kanter, första gången du öppnar fliken. Kommandoraden säger sedan hur många som ritades.

- De visas som de är: du kan inte markera, flytta eller ändra dem. Lager som är av eller frysta döljer dem.
- Sparas som DWG skrivs var och en tillbaka oförändrad, i vilken DWG-version som helst, så att det andra programmet får dem igen. DXF-filer behåller dem inte: CadCraft skriver dem endast i DWG och säger det när du sparar som DXF.
- Ritade: plana ytor, och ytor på cylindrar, koner, sfärer, torusar och enkla spline-ytor, med raka, runda och spline-kanter. En yta på någon annan typ av yta, eller en som CadCraft inte kan lägga ut, gissas inte. Den utelämnas och listas, till exempel "Inte ritad ännu (3D-solid): 2 ytor på spline-surface (sweepsur), en yta som inte ritats ännu."
- Solid inuti block visas inte ännu. "Om den här filen" räknar dem.

Krökta ytor ritas som små platta bitar, ungefär 7,5° från varandra, så en krökt solid ser lite facetterad ut på nära håll.

## Spara och exportera

Sparande behåller 3D-modellen, i DWG och i DXF. Varje yta skrivs som en 3D-yta på lagret `CC-3D`, så att andra program visar solidena. CadCraft behåller också sin egna exakta kopia i filen, som den läser tillbaka när du öppnar ritningen igen, med 3D-vyn som den var (kamera, projektion och visuell stil). 3D-ytor från andra program kommer in på fliken 3D som lösa ytor, samlade som en grupp. En 3D-yta i ett block kommer in en gång för varje referens till blocket i modellen, placerad och vriden som referensen är. I blocket självt, och på ett blad, ritas en 3D-yta platt, som sin kontur.

{{ui:Exportera}} i 3D-gruppen laddar ner enbart solidena: GLB för visare och webben ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) eller STL för 3D-utskrift, i millimeter ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} frågar vilket format du vill ha.

:::note
3D-modellen har verklig storlek. En ritning utan enheter räknas som millimeter, så `1000` är en meter. Om du ändrar ritningens enheter senare (Egenskaper, med inget markerat) skalas solidena med dem så att de förblir på ritningen, och historiken säger det. Ett {{key:Mod+Z}} ångrar ändringen av enheter och skalningen tillsammans.
:::
