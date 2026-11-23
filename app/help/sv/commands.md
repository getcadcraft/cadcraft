---
title: Kommandoreferens
summary: Varje kommando i CadCraft-ritappen, med sina kortnamn, frågorna det ställer, sina alternativ och standardvärden.
keywords: kommandon, alias, kommandolista, yta, omkrets, measuregeom, linje, pline, cirkel, båge, trimma, förskjut, dimlinear, block, infoga, layout, plotta, zoom, hjälp, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicera, selectall
from: 979ffe3b
---

Skriv ett kommandonamn eller ett alias och tryck på {{key:Enter}} eller {{key:Space}}. Versaler och gemener spelar ingen roll, och ett inledande `_`, `-`, `.` eller `'` ignoreras. Skriv `HELP` (eller `?`) för att skriva ut en kort lista över varje kommando i kommandoradens historik; tryck på {{key:F1}} för den här hjälpen.

Så läser du frågorna: alternativ står inom hakparenteser, och du väljer ett genom att skriva dess versaler (`D` för Diameter). Ett standardvärde står inom vinkelparenteser; tryck på {{key:Enter}} för att godta det. Där en punkt efterfrågas kan du klicka eller skriva något av formaten i [Koordinat- och avståndsinmatning](topic:coordinate-entry). Där ett avstånd efterfrågas kan du skriva ett tal eller klicka två punkter.

Trycker du på {{key:Enter}} där en punkt eller ett objekt krävs, och det inte finns något standardvärde, avslutas kommandot. {{key:Esc}} avbryter det. Vad ett kommando gjorde är ett ångra-steg.

## Rita

### LINE

Alias: `L`. Räta segment, vart och ett ett eget objekt.

- `Specify first point` (Enter: börja från den senaste punkten du gav)
- `Specify next point [Undo]`, upprepas. Efter två segment: `[Undo/Close]`.
- `U` tar tillbaka det senaste segmentet, `C` sluter till första punkten och avslutar. Enter avslutar.

### PLINE

Alias: `PL`. En polylinje av linje- och bågsegment.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close när det finns två segment)
- `A` växlar till bågar: `Specify endpoint of arc [Line/CLose/Undo]`. Varje båge fortsätter tangerande det föregående segmentet. `L` går tillbaka till linjer, `CL` sluter med en båge.
- Enter avslutar; polylinjen förblir öppen.

### CIRCLE

Alias: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` frågar `Specify diameter of circle`.
- `2P`: två ändar av en diameter. `3P`: tre punkter på cirkeln.
- `T` (även kommandot `TTR`, och {{ui:Rita}} › {{ui:Mer}} › {{ui:Cirkel: Tan, Tan, Radie}}): `Specify point on object for first tangent of circle`, sedan den andra, sedan radien (Enter: den senaste). Cirkeln tangerar båda objekten (linjer, bågar, cirklar, polylinjesegment, även inuti block); av de cirklar som gör det är det den som tangerar närmast dina val. "Circle does not exist" när ingen passar.
- `TTT` (eller {{ui:Rita}} › {{ui:Mer}} › {{ui:Cirkel: Tan, Tan, Tan}}): tre objekt; cirkeln som tangerar alla tre, närmast dina val (tre linjer ger den inre cirkeln eller en yttre, beroende på var du väljer).

### ARC

Alias: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: en båge genom tre punkter.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Bågen går moturs från start till slut.

### RECTANG

Alias: `REC`, `RECTANGLE`. En sluten polylinje.

- `Specify first corner point`, `Specify other corner point`. Skriv `@width,height` för det andra hörnet.

### POLYGON

Alias: `POL`. En regelbunden polygon som en sluten polylinje.

- `Enter number of sides <4>` (3 till 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: klicka eller skriv en punkt; dess avstånd ger storleken och dess riktning vrider polygonen.

### ELLIPSE

Alias: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, sedan avståndet till den andra axeln.
- `I` (`Isocircle`, bara medan {{cmd:ISODRAFT}} är på): mittpunkt, sedan radie eller `Diameter`: ellipsen en cirkel visas som på det aktuella isometriska planet.

### HATCH

Alias: `H`, `BH`, `BHATCH`; eller {{ui:Skraffering}} i verktygsfältet. Skriver först ut det aktuella mönstret, skalan och vinkeln.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, upprepas (`Undo` när det finns en yta): varje klick lägger till den slutna ytan runt det, med de slutna former som ligger inuti den som öar. Enter gör en skraffering av alla.
- `S`: `Select closed objects` (slutna polylinjer, cirklar, slutna ellipser).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): fyllningen är en övertoning i stället för ett mönster. Se {{cmd:GRADIENT}} för dess frågor.

Se [Skraffering och fyllda ytor](topic:hatch).

### GRADIENT

Alias: `GD`. Fyller en yta med en övertoning av en eller två färger. Den frågar efter övertoningen först, och fortsätter sedan som {{cmd:HATCH}} gör (`Pick internal point`, `S` för slutna objekt, {{key:Enter}} för att avsluta).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, upprepas; den skriver ut övertoningen som den är nu varje gång.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, eller en av dem inverterad (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). De första bokstäverna räcker.
- `O`: en färg, sedan dess ton från 0 till 1 (0 skuggar den till svart, 0,5 är själva färgen, 1 tonar den till vitt). `TW`: den första och den andra färgen. En färg är ett tal från 1 till 255, tre tal som `255,128,0`, eller `#rrggbb`.
- `A`: vinkeln övertoningen går i. `C`: centrerad Yes eller No (No flyttar övertoningens mitt till ena sidan).
- Den avvisar en färg eller typ den inte känner igen, och en ton utanför 0 till 1.

{{cmd:HATCHEDIT}} `G` och Egenskaper (Övertoning) ändrar en övertoning senare, eller gör vilken skraffering som helst till en. En övertoning ritas på skärmen och skrivs ut. DWG 2004 och senare behåller den som en riktig övertoningsskraffering; DXF 2000 och DWG 2000 behåller den för CadCraft, och andra program ser en heltäckande fyllning i den första färgen.

### HATCHGENERATEBOUNDARY

Alias: `HGB`. Gör gränsen igen från en skraffering som tappat den. `Select hatches` (eller markera dem först), sedan `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Varje slinga i skraffen blir en sluten polylinje på skraffens lager; de nya polylinjerna lämnas markerade. En krökt kant kommer tillbaka som de korta räta bitar skraffen behåller.
- Med Yes följer skraffen sin nya gräns, som en skraffering gjord med {{cmd:HATCH}} gör. Ett ångra-steg.
- Den säger det när ingen skraffering var markerad.

### POINT

Alias: `PO`; eller {{ui:Rita}} › {{ui:Mer}} › {{ui:Punkt}}. Punktobjekt, ett per klick, tills Enter.

- `Specify a point`

### XLINE

Alias: `XL`; eller {{ui:Rita}} › {{ui:Mer}} › {{ui:Konstruktionslinje}}. Konstruktionslinjer, oändliga åt båda håll. Se [Konstruktionslinjer och strålar](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, sedan `Specify through point` för varje linje, tills Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` frågar `Select a line object` först.
- `B`: `Specify angle vertex point`, `Specify angle start point`, sedan `Specify angle end point` för varje linje.
- `O`: `Specify offset distance [Through] <Through>`, sedan `Select a line object` och `Specify side to offset` (eller `Specify through point`) för varje linje.

### RAY

Inget alias; eller {{ui:Rita}} › {{ui:Mer}} › {{ui:Stråle}}. `Specify start point`, sedan `Specify through point` för varje stråle, tills Enter.

### TEXT

Alias: `DT`, `DTEXT`; eller {{ui:Text}} i verktygsfältet. Enradig text; varje rad är ett eget objekt.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, sedan `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, upprepas: varje Enter startar nästa rad under. Enter på en tom rad avslutar. {{key:Space}} skriver ett mellanslag här.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} sätter markeringar på en linje, båge, cirkel, polylinje, spline eller ellips som delar den i lika delar. Välj objektet, och ange sedan antalet delar (2 till 32767). Ett öppet objekt får en markering mindre än antalet delar; ett slutet får en markering även på sin start. Själva objektet klipps inte. Markeringarna är punkter; `Block` frågar i stället efter ett block i den här ritningen och om det ska vridas för att följa objektet. Längder längs splines och ellipser mäts längs korta korder. Den avvisar text, skraffer och andra objekt som inte har någon längd.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} sätter en markering med varje given längd längs en linje, båge, cirkel, polylinje, spline eller ellips, med början vid änden närmast där du valde den (ett slutet objekt: från dess start). Ange längden genom att skriva den eller med två punkter. Det öppna objektets fjärrände får ingen markering. `Block` placerar ett block vid varje markering i stället för en punkt. Den avvisar en längd på 0, en längd längre än objektet, och en som skulle ge fler än 32767 markeringar.

### BOUNDARY

Alias: `BO`, `BPOLY`. {{cmd:BOUNDARY}} gör en sluten polylinje runt ytan som innehåller punkten du väljer, utifrån de linjer, bågar, cirklar, polylinjer och kurvor som avgränsar den på skärmen. Bitar som ligger på en båge eller cirkel kommer tillbaka som bågsegment; bitar av ellipser och splines kommer tillbaka som korta räta segment. Med `Islands` på (startinställningen) får varje sluten yta inuti den också en egen polylinje. Fortsätt välja punkter; Enter avslutar. Objekten som avgränsar ytan lämnas som de är. Den säger det när ingen sluten yta innehåller punkten.

### BLEND

{{cmd:BLEND}} ritar en spline mellan ändarna på två öppna kurvor. Välj varje kurva nära änden som ska förenas. `CONtinuity` väljer `Tangent` (splinen lämnar och anländer längs båda kurvorna) eller `Smooth` (den följer även hur de böjer sig vid ändarna); valet behålls för sessionen. De två kurvorna ändras inte. Den avvisar slutna objekt och två ändar som redan möts.

### REGION

Alias: `REG`. {{cmd:REGION}} gör slutna objekt till regioner: platta ytor du kan förena, klippa och mäta. Välj cirklar, slutna polylinjer, slutna ellipser eller slutna splines, eller linjer, bågar och öppna polylinjer som sluter en slinga ände mot ände; varje slinga blir en region och ersätter de objekt den kom från. Bågar förblir bågar; ellipser och splines blir korta räta segment. Det som inte är slutet och inte sluter någon slinga lämnas som det är, och det säger hur många. I ritningen är en region en eller flera slutna polylinjer hållna samman som en onämnd grupp, så ett klick markerar hela regionen och en kopia är en egen region; andra program som öppnar filen ser slutna polylinjer.

När det finns regioner i ritningen arbetar {{cmd:UNION}}, {{cmd:SUBTRACT}} och {{cmd:INTERSECT}} på fliken 2D med regioner: `UNION` förenar de markerade regionerna till en (regioner som ligger isär blir en region med flera konturer), `SUBTRACT` frågar efter regionerna att subtrahera från och sedan dem som ska tas bort (ett hål förblir en del av regionen), `INTERSECT` behåller ytan de alla delar. Var och en säger resultatets area och är ett ångra-steg. De avvisar när inget skulle finnas kvar eller inget delas. På fliken 3D, och i en ritning utan regioner, fungerar samma kommandon på solider som förut.

## Ändra

### MTEXT

Alias: `MT`, `T`; eller {{ui:Stycke}} i verktygsfältet. Styckestext som bryts till en bredd, skriven på plats.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: bredden över de två hörnen är där texten bryts. `H` frågar `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` och hoppar över det andra hörnet.
- Sedan öppnas en ruta på ritningen: skriv, {{key:Enter}} för ett nytt stycke, {{key:Mod+Enter}} eller ett klick utanför för att avsluta, {{key:Esc}} för att avbryta. Dess fält sätter höjd, radavstånd, bredd och justering. Se [Lägg till text och etiketter](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Alias: `ED`, `DDEDIT`; eller dubbelklicka på en text. `Select a text to edit`, upprepas tills {{key:Enter}}: varje öppnas i samma ruta. Startad på en markerad eller dubbelklickad text redigerar den den och avslutas.

### ERASE

Alias: `E`, `DELETE`; eller tryck på {{key:Delete}} med objekt markerade.

- `Select objects` (hoppas över när objekt redan är markerade)

### MOVE

Alias: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, skrivet som `dx,dy`.

### COPY

Alias: `CO`, `CP`. Kopior så många gånger du anger punkter.

`Array` vid frågan om andra punkten gör en rad på en gång: ange antalet objekt (originalet räknas som ett), sedan punkten där den första kopian ska ligga; de övriga följer med samma avstånd. `Fit` gör den punkten till den sista kopians plats i stället, med de övriga jämnt utspridda mellan.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, upprepas tills Enter. `U` tar tillbaka den senaste kopian.

### ROTATE

Alias: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: grader, moturs positivt; eller klicka en punkt för att vrida mot den.

### SCALE

Alias: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: skriv en faktor som `0.5` eller `2`. En klickad punkt ger dess avstånd från basspunkten som faktor.

### MIRROR

Alias: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Alias: `AL`; eller {{ui:Ändra}} › {{ui:Mer}} › {{ui:Justera}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Med två par: `Scale objects based on alignment points? [Yes/No] <N>`

Se [Justera objekt](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (eller markeringen), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` frågar efter punkten. Markeringen står kvar.

### DISTRIBUTE

- `Select objects` (minst tre), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. De yttre två står kvar; markeringen står kvar.

### ALIGNPANEL

Alias: `ALP`; eller {{ui:Ändra}} › {{ui:Mer}} › {{ui:Justera och fördela}}. Öppnar panelen som kör ALIGNTO och DISTRIBUTE med klick.

### LASER

Alias: `LASERCUT`; eller {{ui:Vy}} › {{ui:Mer}} › {{ui:Laser…}}. Öppnar panelen Laser över ritningen: vad varje lager gör (skär, rita upp, gravera, fyll, bild), förhandsvisningen, GRBL G-kod att spara, och inramning och sändning över Web Serial. Se [Skicka en ritning till en laser](topic:laser-cutting).

### STRETCH

Alias: `S`; eller {{ui:Töj}}. `Select objects to stretch`: dra korsande fönster (eller skriv `C`) över ändarna för att flytta. `Specify base point [Displacement]`, `Specify second point`. Punkter inuti fönstren flyttas: linjeändar, polylinjehörn (bågsegment behåller sin höjd), måttpunkter; cirklar, ellipser, text, punkter och block flyttas hela när deras mittpunkt eller infogningspunkt ligger inuti. En markering gjord före kommandot behåller de korsande fönster (och lasson) som gjorde den, så att de töjer på samma sätt. Utan fönster flyttas objekten hela.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Alias: `AR`; eller {{ui:Matris}}. `Select objects`, sedan `Enter array type [Rectangular/POlar] <Rectangular>` (endast ARRAY).

- Rektangulär startar med 4 kolumner × 3 rader, med avstånd 1,5 gånger objektens storlek, visad som en förhandsvisning. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` frågar kolumner och rader, `S` avstånden mellan kolumner och mellan rader (negativt går åt vänster eller ned), `COL` och `R` en riktning vardera.
- Polär frågar `Specify center point of array`, startar med 6 objekt runt hela varvet, roterade. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` objekt, `F` vinkeln att fylla (+ moturs, − medurs), `ROT` Yes eller No.
- {{key:Enter}} (eXit) gör kopiorna, som vanliga objekt. Ett ångra-steg.
- `AS` (ASsociative) växlar mellan vanliga kopior och en matris som förblir redigerbar: ett objekt du ändrar senare med {{cmd:ARRAYEDIT}}, med dess handtag eller i Egenskaper. Valet kommer ihåg ({{cmd:ARRAYASSOCIATIVITY}}); det startar på vanliga kopior.

### ARRAYPATH

Kopior längs en kurva. `Select objects`, sedan `Select path curve`: en linje, båge, cirkel, ellips, polylinje eller spline (inte ett av objekten som matrisas). Banan startar vid dess ände närmast objekten, och det första objektet är objekten där de står.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, med en förhandsvisning. `M`: `Divide` sprider objekten jämnt över hela banan, `Measure` sätter ett var så långt längs den. `I`: antalet objekt (med Measure betyder 0 så många som ryms; ett antal längre än banan begränsas till det som ryms). `SP`: avståndet mellan objekten längs banan (växlar till Measure). `AL`: Yes vrider varje objekt så att det följer banan, No håller dem upprätta.
- `AS` som i {{cmd:ARRAY}}. Med den på behåller matrisen en egen kopia av banans form: att redigera banekurvan efteråt flyttar inte objekten.
- Den avvisar en bana som inte är en kurva, och ett objekt.

### ARRAYEDIT

Ändrar en matris gjord med ASsociative. `Select array` (eller markera den först). Den skriver ut vad matrisen är nu, och frågar sedan tills {{key:Enter}}:

- Rektangulär: `COL` kolumner och deras avstånd, `R` rader och deras avstånd, `A` vinkeln kolumnerna går i.
- Polär: `I` objekt, `F` fyllningsvinkeln, `ROT` rotera objekt Yes eller No.
- Bana: `M` Divide eller Measure, `I` objekt, `SP` avstånd, `AL` justera mot banan.
- `S` (Source) öppnar de objekt matrisen upprepar, på egen hand, som blockredigeraren. Rita och redigera där; {{cmd:ARRAYCLOSE}} sparar eller förkastar, och varje objekt följer.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, sedan klickar du på de objekt som ska ersättas, {{key:Enter}}. Dessa objekt visar ersättningen i stället; ersättningsobjekten lämnar ritningen och lever i matrisen. `RES` (RESet) visar källobjekten i varje objekt igen.
- Varje ändring är ett ångra-steg. Den avvisar vanliga kopior, en vanlig blockreferens och en matris på ett låst lager.

Samma tal finns i Egenskaper under Matris, och matrisen har handtag: dess basspunkt flyttar den, handtaget vid andra objektet anger avståndet, handtaget efter det sista anger antalet (polär: det andra objektet anger hur många objekt, det sista fyllningsvinkeln). {{cmd:EXPLODE}} gör en matris till vanliga kopior igen.

### ARRAYCLOSE

Avslutar {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Den säger det när inga källobjekt för en matris är öppna. {{cmd:BCLOSE}} gör detsamma.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Anger vad {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR och {{cmd:ARRAYPATH}} startar på; deras alternativ `AS` ändrar samma inställning. Kommer ihåg i den här webbläsaren.

### OFFSET

Alias: `O`. Linjer, bågar, cirklar och polylinjer.

Där en polylinje flyttas utåt och dess räta segment går isär vid ett hörn, avgör {{cmd:OFFSETGAPTYPE}} hur luckan stängs.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, sedan `Specify point on side to offset` (eller, med Through, `Specify through point`), upprepas tills Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: hur {{cmd:OFFSET}} stänger luckorna vid polylinjens yttre hörn. `0` förlänger segmenten tills de möts (startinställningen), `1` förenar dem med en båge runt det gamla hörnet, `2` med en rak avskärning. Inre hörn och bågsegment påverkas inte. Sparas för den här sessionen.

### EXTRIM

{{cmd:EXTRIM}} trimmar allt på ena sidan av en kant. Välj skärkanten (en linje, båge, cirkel, polylinje, ellips, spline eller konstruktionslinje), välj sedan en punkt på den sida som ska rensas: varje linje, båge, cirkel, polylinje och konstruktionslinje som korsar kanten förlorar sin del på den sidan, där den startar vid kanten. Medan du väljer sidan följer de delar som skulle tas bort pekaren. För en sluten kant är sidorna insidan och utsidan. Objekt som bara rör kanten, och text, skraffer, splines och ellipser som korsar den, lämnas som de är. Ett ångra-steg.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: hur {{cmd:TRIM}} och {{cmd:EXTEND}} startar. `1` Snabb: varje objekt är en skärkant eller gräns. `0` Standard: de frågar efter kanterna först. Även `(setvar "TRIMEXTENDMODE" 0)` i LISP.

### TRIM

Alias: `TR`. Skriver först ut `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. I snabbläge är varje synligt objekt en skärkant, och ett objekt som inget korsar raderas; i standardläge frågar den först `Select cutting edges (Enter = every object)` och klipper bara vid dem.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, upprepas: klicka på biten som ska bort (den visas grå och streckad medan pekaren vilar på den), dra en bana över flera bitar (alla går i ett steg), eller klicka två tomma platser för ett staket mellan dem. {{key:Shift}} förlänger i stället. `T` väljer skärkanter (standardläge), `F` frågar efter staketpunkter, `C` två fönsterhörn (bitar som delvis ligger inuti går), `O` frågar `Enter a trim mode option [Quick/Standard]`, `E` frågar `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` raderar objekt du väljer, `U` ångrar det senaste valet eller draget. Enter avslutar. Se [Trimma och förläng](topic:trim-and-extend).

- Ett klick på en skraffering klipper skraffen: skärkanterna delar den skrafferade ytan, och biten du klickade på tas bort (ingen ritad kontur finns kvar där den var). Skraffen behåller sitt mönster eller sin övertoning; en skraffering som var kopplad till sin gräns är inte kopplad efteråt, eftersom den inte längre fyller den. Den säger det när ingen skärkant delar skraffen där, när klicket ligger utanför skraffen, och när inget skulle finnas kvar (använd {{cmd:ERASE}}). En dragen bana eller ett staket klipper inte skraffer.

### EXTEND

Alias: `EX`. Samma som TRIM åt andra hållet: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Ett klick förlänger änden närmast det till nästa gräns; en dragen bana eller ett staket förlänger varje objekt det korsar; {{key:Shift}} trimmar. `B` väljer gränskanter (standardläge). Mode och Edge delas med TRIM.

### LINKVIEWS

Alias: `SYNCVIEWS`; eller {{ui:Vy}} › {{ui:Mer}} › {{ui:Länka rutornas vyer}}, eller länkikonen på ritningsflikarna. `Link the panes' views [ON/OFF]` (Enter växlar till det andra läget): medan den är på flyttar en panorering eller zoom i den aktiva rutan varje ruta som visar samma slags utrymme. Se [Dela skärmen](topic:split-screen).

### OPENIN3D

Inget alias; eller {{ui:Vy}} › {{ui:Mer}} › {{ui:Öppna i ModelCraft}} där 3D-modelleringsappen tar emot en överlämnad ritning. Öppnar den där i en ny flik, som en DWG (inget laddas upp). Om webbläsaren blockerar fliken säger den det.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: vad tryck och drag på en tom plats ritar. Samma som Inställningar › CadCraft › Dra för att markera. Se [Lassomarkering](topic:lasso-selection).

### FILLET

Alias: `F`. Linjer, bågar, cirklar och polylinjer. Skriver först ut `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` frågar `Specify fillet radius <last>`. `T` frågar `Enter Trim mode option [Trim/No trim]`: med No trim behålls objekten som de är och bara bågen läggs till.
  - `M` låter kommandot fortsätta för fler hörn tills {{key:Enter}}; `U` tar tillbaka det senaste hörnet utan att lämna kommandot.
  - `P` frågar `Select 2D polyline [Radius]` och rundar av varje hörn där två räta segment möts. Avrundningar den redan har ersätts av den nya radien; radie 0 tar bort dem. Hörn vars sidor är för korta för radien lämnas och räknas.
- `Select second object or shift-select to apply corner [Radius]`. Håll {{key:Shift}} när du klickar för ett vasst hörn, oavsett radie.

Klicka på varje objekt på den del du vill behålla. Två linjer som inte möts förlängs. Två parallella linjer får en halvcirkel över gapet, vid den ände av första linjen som ligger närmast ditt klick. En cirkel klipps aldrig. Två intilliggande segment i en polylinje får bågen inuti polylinjen; en polylinje och ett annat objekt fungerar när snittet landar på polylinjens första eller sista segment.

### CHAMFER

Alias: `CHA`. Linjer och polylinjers räta segment. Skriver först ut de aktuella avstånden (eller längd och vinkel).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` frågar `Specify first chamfer distance <last>` och `Specify second chamfer distance <the first>`: det första klipps från den första linjen du väljer, det andra från den andra.
  - `A` frågar `Specify chamfer length on the first line` och `Specify chamfer angle from the first line`.
  - `E` (mEthod) väljer vilket av de två den nästa fasningen använder. `T`, `M`, `U` och `P` fungerar som i {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+klick gör ett vasst hörn.

Ett avstånd längre än linjen avvisas (`Distance is too large.`).

### BREAK och BREAKATPOINT

Alias: `BR`. `Select object` (där du klickar är första punkten), `Specify second break point [First point]`; `F` frågar `Specify first break point` och `Specify second break point`. Delen mellan dem tas bort; på en cirkel, moturs från första punkten. BREAKATPOINT frågar `Specify break point` och delar objektet i två där (inte en cirkel).

### LENGTHEN

Alias: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: ett val skriver ut `Current length` (och en bågs omslutna vinkel) och frågar igen. `DE` frågar `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` drar. Sedan `Select an object to change [Undo]`, upprepas: änden närmast klicket flyttas. Linjer, bågar och öppna polylinjer.

### JOIN

Alias: `J`. `Select objects to join`. Linjer, bågar och öppna polylinjer som möts ände mot ände blir polylinjer (slutna när kedjan sluter sig); linjer på en linje blir en linje; bågar på en cirkel blir en båge eller cirkeln. Historiken säger hur många objekt som förenades och hur många som inte gjorde det.

### MATCHPROP

Alias: `MA`, `PAINTER`. `Select source object`, sedan `Select destination objects [Settings]` och {{key:Enter}}. Kopierar lager och färg, och mellan objekt av samma slag textens höjd och bredd, måttens storlekar eller skraffens mönster. `S` frågar `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, upprepas tills {{key:Enter}}; valet kommer ihåg för sessionen.

### EXPLODE

Alias: `X`. Polylinjer blir linjer och bågar, blockreferenser blir sina objekt, mått blir linjer, pilspetsar och text. En matris som förblir redigerbar ({{cmd:ARRAYEDIT}}) blir vanliga kopior av sina objekt.

- `Select objects`

### GROUP

Alias: `G`. {{cmd:GROUP}} ger de markerade objekten ett namn de delar. Markera objekten, skriv sedan ett namn (inga mellanslag; `?` listar grupperna; Enter skapar en onämnd grupp) och, för en namngiven grupp, en valfri beskrivning. Från då på markerar ett klick på ett av dem, eller ett fönster som tar in ett, dem alla, så att de flyttas, kopieras och raderas tillsammans; varje objekt är fortfarande ett eget objekt. Ett objekt kan vara i flera grupper. En kopia av en hel grupp blir en ny onämnd grupp; en kopia av en medlem ensam går med i gruppen. Grupper hör till utrymmet de gjordes i (modellen eller ett blad). De behålls när du sparar som DWG eller DXF och öppnar filen igen i CadCraft; DXF 2000-filer bär dem även som gruppobjekt för andra program, och grupper gjorda i ett annat program läses när en DXF eller DWG öppnas.

### UNGROUP

{{cmd:UNGROUP}} tar isär grupper: markera objekt i grupperna (varje grupp de ingår i tas isär), eller skriv `Name` och gruppens namn. Objekten finns kvar i ritningen. Ett ångra-steg återställer grupperna.

### GROUPEDIT

{{cmd:GROUPEDIT}} ändrar en grupp. Välj ett av dess objekt, eller `Name` och dess namn; en grupp som redan är markerad tas som den är. Sedan: `Add` objekt (ett i taget, inte grupp för grupp), `Remove` objekt, `REName` gruppen, ändra dess `Description`, eller ange `Selectable` (om ett klick på ett objekt markerar hela gruppen). `eXit` eller Enter avslutar. En grupp utan kvarvarande objekt försvinner.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: med `1` (startinställningen) markerar ett klick eller ett fönster på ett grupperat objekt hela dess grupp; med `0` enskilda objekt, så att du kan redigera en medlem. Sparas för den här sessionen.

## Urklipp

CadCrafts eget urklipp: det fungerar inom en ritning, mellan ritningar och mellan CadCraft-flikar i den här webbläsaren. Se [Kopiera, klistra in och duplicera](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, eller {{ui:Kopiera}} i gruppen {{ui:Redigera}}. Kopierar objekt till urklippet, med de block och lager de använder. Objekten förblir markerade.

- `Select objects to copy` (hoppas över när objekt redan är markerade)

### CUTCLIP

{{key:Mod+X}}, eller {{ui:Klipp ut}} i menyn {{ui:Mer}}. Kopierar objekt till urklippet och raderar dem sedan (ett ångra-steg).

- `Select objects to cut` (hoppas över när objekt redan är markerade)

### COPYBASE

Kopierar objekt till urklippet med en basispunkt du väljer; inklistring placerar den punkten.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, eller {{ui:Klistra in}} i gruppen {{ui:Redigera}}. Kopian följer markören och hänger från omfattningens nedre vänstra hörn (eller dess mitt, eller punkten från `COPYBASE`; se [CadCraft-inställningar](topic:settings)).

- `Specify insertion point`

De inklistrade objekten markeras. Ett block som ritningen redan har under samma namn behåller den här ritningens definition.

När ett område kopierat i MarkupCraft är nyare än det CadCraft kopierade (och yngre än 6 timmar) klistrar {{key:Mod+V}} och `PASTECLIP` i stället in det området: se `PASTEAREA`.

### PASTEAREA

Alias: `PAREA`. {{ui:Klistra in kopierad yta}} i menyn {{ui:Mer}}. Klistrar in ett område kopierat med {{ui:Kopiera yta}} i MarkupCraft som en bild i sin sanna storlek. Se [Bilder i en ritning](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (endast när bladet inte hade någon ritningsskala): ett tal, {{key:Enter}} för pappersstorleken, eller `P`, sedan `First point on the pasted area`, `Second point on the pasted area` och deras sanna avstånd.

### PASTEORIG

{{key:Mod+Shift+V}}, eller {{ui:Klistra in på plats}} i menyn {{ui:Mer}}. Klistrar in vid koordinaterna objekten kopierades från. Frågar inget.

### DUPLICATE

Alias: `DUP`. {{key:Mod+D}}, eller {{ui:Duplicera och flytta}} i menyn {{ui:Mer}}. En kopia av objekten följer pekaren från där de står; {{key:Esc}} lämnar ingenting. Använder inte urklippet.

- `Select objects to duplicate` (hoppas över när objekt redan är markerade)
- `Specify where the copy goes (Esc leaves nothing)`: klicka, skriv en punkt, `@dx,dy` (från där pekaren var), eller ett avstånd mot markören.

### SELECT

Frågar `Select objects` (med alla alternativ nedan) och lämnar det du valde markerat, för nästa kommando eller för `P` senare.

### QSELECT

Alias: `QS`. I webbläsaren dialogrutan {{ui:Snabbmarkering}} (se [Välj objekt](topic:select-objects#select-by-a-rule-quick-select)). Utan den frågar kommandoraden `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` och `Enter value`. Träffarna blir markeringen.

### SELECTSIMILAR

Alias: `SIM`. `Select objects [SEttings]` (eller den aktuella markeringen): markerar varje objekt av samma typ med samma lager och färg (och blocknamn, skraffmönster). `SE` frågar `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, upprepas tills {{key:Enter}}.

### FIND

Inget alias; eller {{ui:Redigera}} › {{ui:Mer}} › {{ui:Sök och ersätt}}. I webbläsaren dialogrutan {{ui:Sök och ersätt}} (se [Lägg till text och etiketter](topic:text#find-and-replace-words)). Utan den: `Enter text to find`, sedan `Enter replacement text (Enter: select what is found)`. Söker i text, attributvärden och måttext, på den öppna fliken eller i markeringen.

### SELECTALL och DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) markerar varje objekt du kan redigera på den öppna fliken. `DESELECT` (alias `AI_DESELECT`, `SELECTNONE`; eller {{key:Esc}}) rensar markeringen.

## Måttsättning

### DIMLINEAR

Alias: `DLI`, `DIMLIN`. Horisontellt eller vertikalt avstånd.

- `Specify first extension line origin [Select object]` (Enter eller `S`: `Select object to dimension`, sedan klicka på en linje, båge, cirkel eller polylinjesegment)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` frågar efter text (`<>` är det uppmätta värdet), `H` och `V` låser riktningen, `R` frågar `Specify angle of dimension line <0>`.

### DIMALIGNED

Alias: `DAL`, `DIMALI`. Det sanna avståndet mellan två punkter.

- Ursprung som i {{cmd:DIMLINEAR}}, sedan `Specify dimension line location [Text]`.

### DIMANGULAR

Alias: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Båge: dess vinkel. Cirkel: `Specify second angle endpoint`. Linje: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: klicka inuti vinkeln du vill mäta.

### DIMRADIUS och DIMDIAMETER

Alias: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, sedan `Specify dimension line location [Text]`.

### DIMCONTINUE

Alias: `DCO`, `DIMCONT`. Fortsätter från det senaste linjära eller justerade måttet som gjordes (eller frågar `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, upprepas tills Enter.

### DIMBASELINE

Alias: `DBA`, `DIMBASE`. Som {{cmd:DIMCONTINUE}}, men varje mått startar från det första ursprunget och staplas längre ut.

### DIMORDINATE

Alias: `DOR`, `DIMORD`. `Specify feature location`, sedan `Specify leader endpoint [Xdatum/Ydatum/Text]`. Skriver hur långt elementet ligger från UCS-origo längs X eller längs Y, på en hänvisning: en hänvisning som går mest upp eller ned läses som X, en som går åt sidan läses som Y; `Xdatum` och `Ydatum` låser vilket. Ange origo först med {{cmd:UCS}} (utan den är det ritningens 0,0). Handtagen flyttar elementet, origo och hänvisningens slut, och värdet följer. Sparas som ett riktigt ordinatmått i DWG och DXF. Avvisar en hänvisningsände på själva elementet.

### DIMARC

Alias: `DAR`. `Select arc or polyline arc segment`, sedan `Specify arc length dimension location [Text]`. Mäter längs bågen (inte korden) och skriver bågsymbolen före värdet. Avvisar en hel cirkel, en linje eller ett rakt polylinjesegment. En DWG behåller det som bågmått; en DXF behåller det som ett vinkelmått med längden som text, och CadCraft öppnar det som bågmått igen.

### DIMJOGGED

Alias: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Ett radiemått för en kurva vars mittpunkt ligger långt bort eller utanför bladet: måttlinjen startar vid punkten du anger i stället för mittpunkten, med en knyck i den, och skriver ändå den sanna radien. En DWG behåller det som knuttat radiemått; en DXF behåller det som radiemått, och CadCraft öppnar det knuttat igen.

### DIMJOGLINE

Alias: `DJL`. `Select dimension to add jog [Remove]`, sedan `Specify jog location (or press Enter)`. Sätter en knutsymbol på linjen i ett linjärt eller justerat mått, för att visa att avståndet inte är ritat i skala; värdet ändras inte. `Remove` tar bort den. Avvisar andra slag av mått.

### QDIM

Inget alias. `Select geometry to dimension`, sedan `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Måttsätter flera objekt i ett steg, från ändarna av linjer och polylinjesegment, mittpunkter av cirklar och bågar, punkter och blockreferenser. En position ovanför eller under objekten mäter tvärs över, en bredvid dem mäter upp. `Continuous` kedjar punkterna, `Baseline` mäter allt från den första, `Staggered` nästlar par från mitten och utåt, `Ordinate` ger varje punkt dess avstånd från datumet (`datumPoint` väljer ett nytt), `Radius` och `Diameter` måttsätter varje cirkel och båge du väljer. Läget kommer ihåg. Allt det gör är ett ångra-steg. Säger det när det finns färre än två punkter, eller inga bågar eller cirklar för Radius och Diameter.

### DIMBREAK

Alias: `DBREAK`. `Select dimensions to add or remove breaks`, sedan `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` lämnar ett gap i mått- och hjälplinjerna där ett annat objekt korsar dem, och räknar ut gapen igen när de objekten eller måttet flyttas. `Manual` (ett mått) frågar två punkter och lämnar ett gap mellan dem. `Remove` tar bort alla gap. Gapet är 1,5 gånger måttets texthöjd.

### DIMSPACE

Inget alias. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Flyttar måttlinjerna för parallella linjära och justerade mått (eller vinkelmått vid samma hörn) så att de ligger lika långt från varandra, räknat från basmåttet, var och en på den sida den ligger. `0` radar upp dem med basmåttet; `Auto` är dubbelt basmåttets texthöjd. Mått som inte är parallella med basmåttet lämnas i fred.

### DIMINSPECT

Inget alias. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Ritar en ram runt värdet med en etikett före det och kontrollfrekvensen efter. `remove` tar bort ramen. Toleranstext stannar med värdet.

### DIMOVERRIDE

Alias: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, igen tills Enter, sedan `Select dimensions`. Ändrar de inställningarna på de markerade måtten bara; måttstilen ändras inte. Tar de variabler som är ett tal eller en omkopplare (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` återställer de markerade måtten till deras stil. Avvisar ett namn som inte är en sådan variabel, och ett värde den inte kan ta.

### DIMREASSOCIATE

Alias: `DRE`, `DIMREASSOC`. `Select dimensions`, sedan för varje mått dess hjälplinjeursprung (`Specify first extension line origin on an object`: fångar till en ände eller mitten av en linje, ett polylinjehörn, en mittpunkt; Enter lämnar punkten fri), eller för ett radie-, diameter-, knuttat radie- eller bågmått `Select arc or circle`. Måttet kopplas sedan till dessa objekt: när de flyttas eller ändrar storlek följer det i samma ångra-steg och mäter om. Att flytta en kopplad punkt för hand, eller radera objektet, avslutar kopplingen. Kopplingen sparas i DWG och DXF 2000 som CadCrafts egna data; andra program ser ett vanligt mått.

### DIMDISASSOCIATE

Alias: `DDA`, `DIMDISASSOC`. `Select dimensions`. Frigör dem från de objekt de är kopplade till; ingenting flyttas.

### CENTERMARK

Alias: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, igen tills Enter. Ritar ett kryss i mitten och fyra mittlinjer ett litet stycke förbi kurvan (linjetyp CENTER), som vanliga linjer på det aktuella lagret; storleken följer pilstorleken och totalskalan i de aktuella måttinställningarna, och vrids med UCS. De följer inte cirkeln om den flyttas.

### CENTERLINE

Alias: `CL`. `Select first line`, `Select second line`. Ritar en linje mitt emellan två linjer (längs halveringslinjen när de möts), lite längre än de är, i linjetyp CENTER. En vanlig linje: den följer inte de två linjerna.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Inget alias. Var och en frågar `Enter new value for … <current>` och anger den storleken för **nya** mått: totalskala, texthöjd, pilstorlek, decimaler (upp till 8), mellanrum runt texten, förlängning bortom måttlinjen, förskjutning från origo. Se [Ange måttstorlekar](topic:dimension-settings).

### DIMLUNIT

Måttinställning: formatet för nya mått endast (1 vetenskaplig, 2 decimal, 3 teknisk, 4 arkitekt, 5 bråk).

### DIMSTYLE och -DIMSTYLE

Alias: `DST`, `DDIM`, `D`. Måttstilshanteraren: {{ui:Gör aktuell}}, {{ui:Ny…}}, {{ui:Ändra…}}, {{ui:Byt namn…}}, {{ui:Ta bort}}, {{ui:Jämför…}}, {{ui:Verkställ på markerade}}. `-DIMSTYLE` på kommandoraden: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Se [Ange måttstorlekar](topic:dimension-settings#named-dimension-styles).

### DIMEDIT och DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, sedan måtten (eller de som redan är markerade). New frågar efter texten (`<>` = måttet); Rotate efter en vinkel (0 sätter tillbaka texten); Oblique för hjälplinjernas vinkel från X-axeln (Enter = ingen; endast linjära och justerade mått). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Se [Ange måttstorlekar](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Alias: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, eller med mått markerade `Units in the text of the selected dimensions`. Skriver den uppmätta längden i den enheten med enheten efter (DIMLFAC och ett DIMPOST-suffix); `D` återgår till ritningsenheter. Se [Mått i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Alias: `RC`. Skriver ut `Arc length: … Type: …`, sedan `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular frågar `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand följer pekaren tills ett klick eller {{key:Enter}}; `O` frågar `Select object` och `Reverse direction? [Yes/No] <N>` och gör objektet till molnet. `A` frågar `Specify the length of each arc`. `R`, `P` och `F` väljer typen för nästa moln. Resultatet är en sluten polylinje av bågar.

### MLEADER

Alias: `MLD`; eller {{ui:Hänvisning}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, sedan texten i rutan på plats (eller, utan den, `Enter text (an empty line ends)`). `Block` frågar först efter ett blocknamn, och flerhänvisningen visar det blocket i stället för text. Fler hänvisningslinjer: {{cmd:MLEADEREDIT}}. Sparas som en riktig flerhänvisning i DWG; DXF behåller linjerna, pilspetsen och texten den ritar.

### MLEADEREDIT

Alias: `MLE`. `Select a multileader`, sedan `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: varje punkt lägger till en hänvisningslinje från en ny pilspets till samma landning, tills Enter. `Remove leaders` tar sedan bort hänvisningslinjen du klickar på (en flerhänvisning behåller minst en). `Block content` frågar efter ett blocknamn och visar det blocket i stället för texten (dess attribut frågas efter); `Text content` sätter tillbaka text. Varje hänvisningslinje har sitt eget handtag. En DWG behåller varje hänvisningslinje och blocket i en flerhänvisning.

### MLEADERALIGN

Alias: `MLA`. `Select multileaders`, sedan `Select multileader to align to [Distribute/Spacing/Use current spacing]` och `Specify direction`. Flyttar de andra flerhänvisningarnas landningar (och deras text eller block) till linjen genom den valda landningen i den riktningen; pilspetsarna står kvar där de pekar. `Spacing` ger dem också lika avstånd; `Distribute` frågar två punkter och sprider dem jämnt mellan dem. Kräver minst två flerhänvisningar.

### MLEADERCOLLECT

Alias: `MLC`. `Select multileaders`, sedan `Specify collected multileader location [Vertical/Horizontal]` (Enter behåller den första flerhänvisningens plats). Gör en flerhänvisning av flera: blockinnehåll går i ett nytt block som håller varje block sida vid sida eller ett under det andra; textinnehåll blir en anteckning med en rad för varje. Den första flerhänvisningen behåller sina hänvisningslinjer; de andra tas bort. Avvisar en blandning av text- och blockinnehåll.

### TABLE

Alias: `TB`; eller {{ui:Notera}} › {{ui:Mer}} › {{ui:Tabell}}. Skapar en tabell: ett objekt som du flyttar, kopierar, roterar, skalar och plottar som vilket annat objekt, med sina celler sparade som data.

- `Number of data rows or [Paste/File/Style] <3>`, sedan `Number of columns <3>`, `Text height` och `Top left corner of the table`. Tabellen får en titelrad (en sammanslagen cell) och en rubrikrad ovanför dataraderna.
- `P`: en tabell av kalkylbladsceller på urklipp (text med en tabulator mellan cellerna). Att trycka på {{key:Ctrl+V}} med sådana celler på urklipp gör detsamma, om inte CadCrafts egen kopia är nyare (eller om CadCraft inte kan avgöra det: då klistrar den in sin egen kopia och säger det). `F`: en tabell av en `.csv`- eller tabbseparerad fil. Den första raden blir rubrikraden; kolumnbredderna passar texten.
- `S`: välj tabellstil för den här tabellen (se {{cmd:TABLESTYLE}}).
- Den avvisar ett rad- eller kolumnantal som inte är ett heltal, och fler celler än en tabell rymmer (2 000 rader, 200 kolumner, 40 000 celler).
- {{cmd:EXPLODE}} gör en tabell till linjer och text. Sparad som DWG är en tabell ett riktigt tabellobjekt som andra program kan redigera; sparad som DXF är den ett block som ritar den, och CadCraft öppnar den som tabell igen.

### TABLEDIT

Alias: `TABLEEDIT`, `TABEDIT`; eller dubbelklicka på en cell. Redigerar en tabell.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Klicka på en cell, eller skriv dess namn när en tabell är markerad (`B3`: kolumn B, rad 3; titelraden är rad 1). I webbläsaren öppnas en ruta över cellen: {{key:Enter}} behåller texten, {{key:Tab}} går till nästa cell, {{key:Alt+Enter}} startar en ny rad, {{key:Esc}} lämnar cellen som den var.
- En text som börjar med `=` är en formel: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, med `+ - * / ^`, parenteser och funktioner som `sqrt` och `round`. Cellen visar värdet; en formel som nämner sin egen cell, en cell utanför tabellen eller en cell utan tal visar `####` och kommandoraden säger varför.
- `R` / `C`: `Insert` eller `Delete` rader eller kolumner vid en vald cell (hur många, och ovanför eller under, till vänster eller höger). Formler följer de celler de nämner.
- `S`: kolumnens bredd och radens höjd. En rad är aldrig lägre än sin text kräver. En markerad tabell har också ett handtag på varje kolumns och varje rads kant.
- `M`: slå samman från en vald cell till en annan; `U`: ta isär. `A`: justering (`TL` uppe till vänster … `MC` mitten … `BR` nere till höger). `H`: denna cells egna texthöjd (0 = stilens). `K`: gör raden till en titel-, rubrik- eller datarad. `CL`: töm cellen.
- Den avvisar en tabell på ett låst lager, att ta bort varje rad eller kolumn, och en sammanslagning som skulle skära en annan sammanslagen cell i två.

### TABLESTYLE

Alias: `TS`. Listar tabellstilarna med hur många tabeller som använder var och en, sedan `Table style: [New/Set/Edit/Delete/Apply]`.

- En stil innehåller texthöjden och justeringen för titel-, rubrik- och dataraderna, cellmarginalen och vilka kanter som ritas (yttre, mellan rader, mellan kolumner).
- `N` gör en stil från den aktuella och gör den aktuell; `S` anger den aktuella stilen (nya tabeller tar den); `E` redigerar en: tabeller som använder den ritas om; `A` ger markerade tabeller den aktuella stilen; `D` tar bort en (inte Standard, inte den aktuella; tabeller som använde den behåller sitt utseende).
- Stilar sparas med ritningen (DWG och DXF).

### TABLEEXPORT

Sparar det en tabell visar som en CSV-fil (en formel som sitt värde). `Select a table`, eller markera en först. Textceller som börjar med `=`, `+`, `-` eller `@` får ett inledande `'` så att ett kalkylblad inte kör dem.

### TABLEPASTE

Alias: `PASTETABLE`. Skapar en tabell av kalkylbladsceller på urklipp, och frågar sedan efter dess övre vänstra hörn. Samma som {{cmd:TABLE}} › `Paste`.

### DATALINK

Alias: `DL`. `Data link: [New/List/Remove] <New>`. `N` frågar efter en CSV-fil, placerar en tabell av den och kommer ihåg filens namn; `L` listar länkarna med deras fil, storlek, när de lästes och hur många tabeller som använder dem; `R` tar bort en länk (dess tabeller finns kvar som vanliga tabeller).

### DATALINKUPDATE

Alias: `DLU`. Läser en datalänks fil igen och fyller på de tabeller som är länkade till den (rader och kolumner läggs till eller tas bort för att stämma). En webbläsare kan inte öppna en fil av sig själv, så den ber dig välja filen igen. Med flera länkar frågar den vilken.

### FIELD

Lägger ett fält i ritningen: text som räknar ut sig själv. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: nu, eller det sparade, skapade eller plottade datumet, och ett format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: filnamnet, med eller utan dess ändelse. `S`: bladets nummer, dess titel, eller hur många blad det finns. `P`: en ritningsegenskap efter namn (se {{cmd:DWGPROPS}}). `O`: välj ett objekt, sedan vad som ska läsas (yta, längd, omkrets, radie, diameter, lager, namn, x, y, text, rotation, färg) och decimalerna. `E`: en formel. `C`: en text med koder skrivna som de är, till exempel `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Sedan `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: en vald text får fältet tillagt efter det den innehåller; en tabellcell likaså; en blockreferens frågar vilket attribut; {{key:Enter}} frågar efter en höjd och en punkt för en ny text.
- På skärmen har ett fält en ljusgrå bakgrund; en utskrift och en PDF har aldrig den. Att skriva över fältets text för hand avslutar fältet. Ett fält som inte kan räknas ut visar `####`.
- Ett objekts fält hittar sitt objekt med nyckeln CadCraft behåller på objekt (Inställningar › CadCraft › Sammanfogningsvänliga filer); med nycklar avstängda avvisar det.

### UPDATEFIELD

Alias: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` anger när fälten uppdateras av sig själva: skriv bokstäverna för `O` open, `S` save, `P` plot, `R` regen (alla fyra att börja med), eller `NONE`.

### DWGPROPS

Alias: `DRAWINGPROPS`. Listar ritningens egenskaper, sedan `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. De sex första är de som panelen {{ui:Ritningsuppgifter}} visar; `U` lägger till ditt eget namn och värde, `R` tar bort ett. Fält läser dem (`%<prop:title>%`, `%<prop:Client>%`) och följer med direkt. Den avvisar ett eget namn som är ett av de inbyggda eller innehåller `%`, `<`, `>`, ett citattecken eller ett bakstreck.

## Parametrisk

Se [Villkora en ritning](topic:constraints) och [Använd parametrar och ekvationer](topic:parameters). Villkor fungerar på fliken {{ui:Modell}}.

### GEOMCONSTRAINT och GC-kommandona

Alias `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, sedan det kommandots frågor.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (den andra flyttas).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT och DC-kommandona

Alias `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (ett tal, ett uttryck, eller `namn=uttryck`).
- {{cmd:DCALIGNED}}: som ovan, med `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` frågar efter avstånds- och vinkeltoleranserna.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Select objects`; deras villkor försvinner.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Select objects [Showall/Hideall]`, sedan `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS och -PARAMETERS

{{cmd:PARAMETERS}} (alias `PAR`, `PARAM`) öppnar panelen {{ui:Parametrar}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Laddar ner ett makro (.swb) som bygger om modellen som en enda villkorad skiss i SolidWorks. Se [Flytta skisser till och från andra delmodellerare](topic:solidworks-sketches).

## Block

### ANNOSCALE

Alias: `CANNOSCALE`. Säger ritningens annoteringsskala och hur många annoterande objekt den innehåller, sedan frågar `New annotation scale`: skriv `1:50`, `1:100`, `2:1`, ett bart tal (`50` är 1:50) eller namnet på en av ritningens egna skalor. Varje annoterande text och mått storleksändras så att de skrivs ut i samma storlek vid den nya skalan, i ett ångra-steg; objekt som inte är annoterande lämnas i fred, och så gör ett objekt som har en lista över skalor utan den nya ({{cmd:OBJECTSCALE}}). Se [Enheter, papper och skalor](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Alias: `OBJSCALE`. `Select annotative objects`, sedan `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. En annoterande text eller ett annoterande mått har en lista över annoteringsskalor. `Add` och `Delete` frågar efter en skala (`1:50`, `2:1`, ett bart tal, eller namnet på en av ritningens egna skalor); `Current scale` lägger till ritningens annoteringsskala; `List` skriver ut varje objekts skalor. En vyport vars skala finns i ett objekts lista visar objektet i den storlek som skriver ut dess pappershöjd i den skalan, på skärmen och i utskrifter. Den sista skalan kan inte tas bort. Objekt som inte är annoterande utelämnas: sätt på Annoterande i Egenskaper först. Listorna sparas i DWG och DXF som CadCrafts egna data. Se [Enheter, papper och skalor](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Alias: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. On (när en ritning startar): ett annoterande objekt visas även i en vyport, eller i modellen, vars skala inte finns i dess lista, i den storlek det har. Off: det visas inte där, och kan inte väljas i modellen. Omkopplaren är ett ångra-steg; den sparas inte i filen.

### SCALELISTEDIT

Alias: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` tills {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit och Delete frågar efter skalans namn. Ritningens egna skalor ansluter till vyportens och utskriftens skallistor och sparas med ritningen. Se [Enheter, papper och skalor](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT och PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: punkter som kurvan går genom; `Close`, `Undo`, sedan `Start tangent` och `End tangent` (en punkt, eller {{key:Enter}}). Method › Control vertices frågar efter en grad (1 till 5) och ritar från en kontrollpolygon. Object gör polylinjer till splines genom deras hörn. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` för flera objekt; linjer, bågar och splines erbjuds först som polylinjer. Se [Splines och polylinjer](topic:splines).

### BLOCK

Alias: `B`, `BMAKE`.

- `Enter block name`. Om det finns: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. De ersätts av en referens till det nya blocket.

### WBLOCK

Alias: `W`, `-WBLOCK`. Skriver ett block, några objekt eller hela ritningen som en ny DWG- eller DXF-fil. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (den blir den nya ritningens origo), `Select objects`, sedan `File format [DWG/DXF/R12 DXF]` och `File name for the new drawing`, sedan `What to do with the objects [Retain/Convert to block/Delete]`. Convert ersätter dem med en referens till ett block med filens namn; Delete tar bort dem.
- **Block**: `Block to write out`. Blockets egna objekt, med dess basspunkt som origo, även nästlade block.
- **Entire drawing**: varje objekt i modellrummet. Blad skrivs inte; använd {{cmd:SAVEAS}} för en kopia som behåller dem.

Den nya filen innehåller bara de lager, linjetyper, text- och måttstilar och block som dess objekt använder, samt ritningens enheter. Versionen av en DWG är den {{cmd:SAVEAS}} senast använde. I webbläsaren laddas filen ned; i Studio öppnas dialogrutan för att spara.

### ATTDEF

Alias: `ATT`, `DDATTDEF`, `-ATTDEF`; eller {{ui:Block}} › {{ui:Mer}} › {{ui:Definiera attribut}}. Skriver ut lägena, sedan `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` när konstant), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} tar med attributdefinitioner in i blocket.

### EATTEDIT och ATTEDIT

`EATTEDIT` (`DDATTE`, eller dubbelklicka på en referens med attribut; {{ui:Block}} › {{ui:Mer}} › {{ui:Redigera attribut}}): `Select a block reference with attributes`, sedan dialogrutan {{ui:Redigera attribut}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): samma referens, sedan `<prompt> (<TAG>) <value>` för varje attribut; {{key:Enter}} behåller ett värde. Se [Attribut](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Värden behålls; nya attribut får sitt standardvärde, borttagna försvinner, placeringar återställs.

### BATTMAN

{{ui:Block}} › {{ui:Mer}} › {{ui:Attributhanterare}}. Dialogrutan: block, attribut (tagg, fråga, standardvärde, lägen, ordning), {{ui:Uppdatera referenserna (värden behålls)}}, {{ui:Verkställ}}.

### REFEDIT och REFCLOSE

{{ui:Block}} › {{ui:Mer}} › {{ui:Redigera på plats}}. `REFEDIT`: `Select the block reference to edit in place` (eller markeringen). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; fältets {{ui:Spara block}} och {{ui:Förkasta}} gör detsamma. Hela redigeringen är ett ångra-steg. Se [Attribut](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: om en pennstrecks tryck avgör linjetjockleken för det {{cmd:SKETCHFIX}} och {{cmd:SKETCHLIVE}} gör (på från början). Se [Skissa med penna](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Alias: `OFFSTD`. Säger vilken kontorsstandard som gäller för den här ritningen och varifrån den kommer: ritningens egna post, ditt teams delade, eller dina Standardpolicyer (texthöjder `all.anno.*`); utan någon används programmets egna storlekar. `[Import/Layers/Title block/Clear/eXit]`: `Import` läser en `cc-office-standard` .json (posten SuperCad och BimCraft skriver) in i den här ritningen, sparad med den i DWG och DXF; `Layers` lägger till de kontorslager ritningen saknar, i ett ångra-steg, och tar aldrig bort ett; `Title block` listar kontorets fält med den här ritningens egna värden; `Clear` tar bort ritningens egna post. Annoterande text- och måttshöjder följer standarden som gäller. Se [Enheter, papper och skalor](topic:units-papers-scales).

### BPARAMS

Alias: `BPM`, `BLOCKPARAMS`. Öppnar parameterhanteraren för blocket i blockredigeraren, för den markerade referensens block, eller för blocket du anger (`Block name`): parametrar med formler, flera synlighetsparametrar med deras tillstånd, och den markerade referensens egna värden och tillstånd. Se [Dina egna parametrar och synlighetstillstånd](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` gör detsamma på kommandoraden: `[Parameter/Visibility/State/Assign/Reference/Done]`.

### BEDIT och BCLOSE

`BE`; eller {{ui:Block}} › {{ui:Mer}} › {{ui:Redigera block}}. `Enter block name to edit <the selected reference's block>` öppnar blockredigeraren. `BCLOSE` frågar `Close the block editor on "…" [Save/Discard] <Save>`; bannerns {{ui:Spara block}} och {{ui:Förkasta ändringar}} gör detsamma. Allt som görs i redigeraren är ett ångra-steg.

### VIEWBASE

Alias: `FLATSHOT`. En platt 2D-vy av solider på fliken 3D: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, en skala (`1:20`, `2:1`; {{key:Enter}} tar den som passar bladet), sedan vyns mittpunkt. En blockreferens, med synliga kanter på VIEW-VISIBLE och dolda streckade på VIEW-HIDDEN. Se [Platta vyer på ett blad](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Alias: `-PUBLISH`; eller {{ui:Alla blad i en PDF}} i dialogrutan {{ui:Plotta till PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} plottar varje blad, `S` frågar efter namn separerade med kommatecken. En PDF, en sida och ett bokmärke per blad. Se [Varje blad i en PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Alias: `SSM`, `SHEETSETMANAGER`. För dig till avsnittet {{ui:Bladsamling}} i den vänstra panelen: blad från många ritningar, numrerade och titlade, deras ritningshuvuden ifyllda från samlingen, publicerade som en PDF. Se [Bladsamlingar](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): välj en DWG eller DXF, sedan dess infogningspunkt. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; med fler än en länk, välj en av dess referenser eller skriv `N` och dess namn. Se [Länkade ritningar](topic:files#linked-drawings-external-references).

### COUNT

Alias: `BCOUNT`; eller {{ui:Block}} › {{ui:Mer}} › {{ui:Räkna block}}. `Select a block reference to count, or [All/Export] (Enter: All)`: ett val markerar och räknar varje referens till det blocket i det här utrymmet; {{key:Enter}} eller `A` listar dem alla; `E` och sedan `C` (räkningar) eller `A` (attribut) laddar ner en CSV. Se [Räkna block och exportera en förteckning](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Alias: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (versaler och gemener spelar ingen roll). `F` frågar efter en DWG eller DXF, sedan hela ritningen eller ett av dess block; ett redan använt namn frågar {{ui:Behåll befintliga}} eller {{ui:Byt namn}}. `L` öppnar biblioteksbpanelen.
- `Specify insertion point [Scale/Rotate]`. `S` frågar `Specify scale factor`, `R` frågar `Specify rotation angle`; båda kommer ihåg.
- När blocket redan står intill objekt som upprepas någon annanstans utan det, säger en rad hur många platser som föreslås, och frågan får `suGgested`: `G` visar dem; klicka nära en för att placera blocket där, `A` för alla, {{key:Enter}} för att gå tillbaka. De tar rotationen från sina grannar och standardvärdena för attribut. Ritningar med över 20 000 objekt i det öppna utrymmet söks inte igenom.
- Sedan `Enter <prompt> (<TAG>) <default>` för varje attribut blocket frågar efter. Se [Blockattribut](topic:attributes).

### LIBRARY

Alias: `LIB`. Öppnar biblioteksbpanelen: placera objekt, sök efter uppdateringar, bibliotekets källangivelser. Inga frågor. Se [Infoga från en fil eller biblioteket](topic:insert-from-file-and-library).

### STEELMEMBER

Alias: `SMEMBER`; eller {{ui:3D-element}} på bibliotekets flik {{ui:Standard}}. `Section size <W12x26>` (som fliken listar den), sedan `Start point [Column]` och `End point`: ett solitt element på fliken 3D mellan de två punkterna, vilande på marken. `C` frågar efter pelarens basspunkt och dess höjd. Ett ångra-steg. Se [Placera stålprofiler och standarddelar](topic:steel-and-standard-parts).

### PARTSLIST

Alias: `PLIST`. `Top left corner of the parts list`, sedan `Text height <2.5>`: ritar en tabell över varje standarddel och stålprofil placerad från biblioteket (objektnummer, mängd, del, standard, storlek, längd, material, massa). Ett ångra-steg. Se [Placera stålprofiler och standarddelar](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Alias: `PU`. Tar bort blockdefinitioner som inget använder. Inga frågor.

### DELBLOCKS

Eller {{ui:Block}} › {{ui:Mer}} › {{ui:Ta bort block}}. `Select block to delete [Name/eXit]`: välj en blockreferens, eller `N` för listan över block med ett filter (välj flera), eller `X` / {{key:Enter}} för att avsluta. Varje referens går bort — i modellen, på varje blad och inuti andra block — och sedan definitionen, och kommandoraden säger vad som raderades och vad som inte kunde. Namnlösa block och länkade ritningar erbjuds inte. Prompten kommer tillbaka för nästa block; hela kommandot är ett ångra-steg.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} klistrar in det du kopierat ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) som ett block: välj infogningspunkten, så läggs en referens till ett nytt block dit, markerad. Blocket får ett eget namn (`A$C` och ett nummer); {{cmd:RENAME}} ger det ditt. Ett ångra-steg tar bort referensen och blocket.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} frågar efter blocket att ersätta och blocket att sätta i dess ställe (`?` listar blocken), och ändrar sedan varje referens i modellen, på varje blad och inuti andra block. Varje referens behåller sin plats, skala, rotation, lager och värdena för attribut som båda blocken har; attribut som bara det nya blocket har startar på sina standardvärden, och det säger vilka värden som släpptes. När inget längre använder det gamla blocket erbjuder den att ta bort det. Den avvisar länkade ritningar och en ersättning som skulle lägga ett block inuti sig självt. Ett ångra-steg.

### MINSERT

{{cmd:MINSERT}} placerar ett block i rader och kolumner: blocknamn, infogningspunkt, skala, rotation, antal rader och kolumner, och avstånden mellan dem. Hela uppsättningen vrids med rotationen. Varje är en egen referens (högst 10 000), så vilken som helst kan flyttas eller raderas efteråt.

### BLOCKSPALETTE

Alias: `BLOCKSPAL`; eller {{ui:Block}} › {{ui:Mer}} › {{ui:Blockpanel}}. Visar panelen {{ui:Block}} med markören i dess filter. Varje block har en liten bild; de senast placerade kommer först. De två knapparna bredvid filtret växlar mellan en lista och ett rutnät av bilder. Klicka på en bild (eller {{ui:Infoga}}) för att placera blocket med {{cmd:INSERT}}, eller dra det till ritningen för att placera det där du släpper det.

{{ui:Bibliotek}}, under listan: {{ui:Lägg till en ritning}} tar en egen DWG- eller DXF-fil och listar dess block med bilder, och hela ritningen som ett block. Att placera ett kopierar dess definition (och de block det nästlar, och deras lager) in i den här ritningen, som alternativet `File` i {{cmd:INSERT}} gör; ett block som redan finns här med samma definition används utan fråga, ett med samma namn men annan definition frågar {{ui:Behåll befintliga}} eller {{ui:Byt namn}}. I en webbläsare finns filen kvar tills sidan stängs. I CadCraft Studio listar {{ui:Lägg till en mapp}} ritningarna i en mapp, var och en öppnad när du klickar på den, och filer och mappar kommer ihåg. Den lilla x:en tar bort ett bibliotek från listan; filen rörs inte. Det delade {{ui:Bibliotek}} är något annat: se [Infoga från en fil eller biblioteket](topic:insert-from-file-and-library).

### BCONVERT

Eller {{ui:Block}} › {{ui:Mer}} › {{ui:Gör upprepningar till block}}. Hittar geometri som upprepas och gör varje kopia till en referens till ett block.

- `Select the objects that repeat, or [Block]`: objekten i en kopia. `B` anger ett befintligt block i stället, för att hitta lösa kopior av dess objekt.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` och `P` växlar vad som räknas som en kopia; {{key:Enter}} söker. Inställningarna kommer ihåg.
- `Name for the new block <Block1>`, sedan `Specify the block's base point` ({{key:Enter}} tar markeringens nedre vänstra hörn).
- Den säger hur många andra uppsättningar objekt som har samma geometri, markerar allt den skulle ersätta, och frågar `Yes/No`.

En kopia är samma objekt flyttade och vridna i valfri vinkel (och speglade eller skalade med en faktor när de är på): varje objekt måste ha sin motsvarighet, med en miljondel av markeringens storlek som tolerans. Varje referens får sin egen rotation och skala (en speglad en en negativ Y-skala), och lagret dess objekt delade. Den söker i det öppna utrymmet (modellen eller det öppna bladet). En mycket stor sökning stannar vid en arbetsgräns och säger det. Ett ångra-steg.

### BSEARCH

Eller {{ui:Block}} › {{ui:Mer}} › {{ui:Hitta block}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: en del av ett blocknamn, eller ett mönster med `*` och `?`. Listar varje block med dess referenser här och i hela ritningen.
- `A`: ett attributvärde, eller `TAG=value`. Listar de block vars referenser har det, med de värden som hittades. Konstanta attribut räknas.
- `G`: välj objekt, eller en blockreferens, så listas blocken vars form är minst 85 % lika, bäst först. Storlek, rotation och spegling räknas inte. Mätningen jämför avstånden mellan punkter utspridda längs konturerna, så den hittar likadana; använd {{cmd:BCONVERT}} för att hitta exakta kopior.

Referenserna som hittas i det öppna utrymmet markeras, redo för nästa kommando.

### BREPLACE

Eller {{ui:Block}} › {{ui:Mer}} › {{ui:Ersätt block}}. `Replace [Selected/All]`: `S` ersätter de blockreferenser du väljer med blocket du anger; `A` frågar efter ett block och dess ersättning och ändrar varje referens, som {{cmd:BLOCKREPLACE}} gör (samma kod). En referens behåller sin plats, skala, rotation, lager och värdena för attribut som båda blocken har; värden det nya blocket inte har någon plats för släpps och namnges. `?` listar blocken. Ett ångra-steg.

### DATAEXTRACTION

Alias: `EATTEXT`, `DX`; eller {{ui:Block}} › {{ui:Mer}} › {{ui:Dataextrahering}}. Listar block, deras attribut och objektegenskaper som en tabell eller en CSV-fil.

- Arbetar på markeringen, eller frågar `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` när markeringen innehåller båda. Namnlösa block, tabeller och stycklistor listas aldrig.
- Den skriver ut kolumnerna att välja bland (namn, typ, lager, X, Y, rotation, skala, längd, area, färg, linjetyp, utrymme, och en per attributtagg), sedan `Columns, by name or number with commas between`. {{key:Enter}} tar de markerade med stjärna: namnet och varje attribut för block; typ, lager och längd för objekt.
- `Put identical rows together with a count? [Yes/No] <Yes>`, sedan `Put the list in a: [Table/Csv] <Table>`. En tabell är en vanlig tabell ({{cmd:TABLEDIT}} redigerar den) och är inte levande: kör kommandot igen när ritningen ändrats.
- Den avvisar en kolumn som inte finns i listan. En tabell rymmer 1 999 rader med data; en CSV-fil tar dem alla.

### COUNTTABLE

Räknar blockreferenserna i markeringen (eller i det öppna utrymmet) och lägger räkningarna i en tabell (`Block`, `Count`) eller en CSV-fil. För en räkning som följer ritningen av sig själv, se {{cmd:BOMTABLE}}.

## Blad och utskrift

### LAYOUT

Alias: `LO`, `NEWLAYOUT`; eller knappen {{ui:+}} under ritningen. Ett nytt blad med en ram, ett ritningshuvud och en vyport, på ISO A3 (eller Tabloid för ritningar i tum eller fot). Inga frågor.

### MVIEW

Alias: `MV`. Endast på ett blad ({{cmd:VPORTS}} på ett blad gör detsamma).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. Vyporten visar hela modellen i en standardskala.
- `P` (Polygonal): klicka på konturens hörn (`Undo`, `Close`), {{key:Enter}} när du är klar. Den avvisar färre än tre hörn.
- `O` (Object): `Select a closed object for the viewport's outline`: en sluten polylinje, en cirkel eller en ellips på bladet. Vyporten tar dess form (kurvor som korta räta bitar); objektet står kvar som det var. Den avvisar ett objekt som inte är slutet.

### VPCLIP

Klipper en vyport som redan finns på bladet. `Select viewport to clip` (eller markera den först), sedan `Select the object to clip to [Polygonal/Delete]`:

- Klicka på en sluten polylinje, cirkel eller ellips, eller {{key:Enter}} (eller `P`) för att klicka på hörnen i en polygon.
- `D` (Delete, erbjuds när vyporten är klippt) gör den till en rektangel igen: rutan runt konturen den hade.
- Vad vyporten visar rör sig inte på papperet, och dess skala står kvar. Modellen ritas och skrivs ut bara inom konturen, och kanten följer den. Ett ångra-steg.
- En klippt vyport har ett handtag vid varje hörn av sin kontur, utöver sin mitt och de fyra hörnen av sin ruta (att dra i ett rutehörn töjer konturen med den). Egenskaper visar Kontur: Rektangel, eller Klippt med antalet hörn.
- DWG- och DXF 2000-filer behåller konturen för CadCraft. Andra program öppnar vyporten som rektangeln runt den; DXF R12 behåller bara rektangeln.
- På fliken Modell säger den att vyportar finns på blad.

### VPORTS

Alias: `VIEWPORTS`. {{cmd:SPLIT}} är detsamma även från ett blad, och {{ui:Vy}} › {{ui:Mer}} › {{ui:Dela sida vid sida}}, {{ui:Dela ovanpå varandra}}, {{ui:Fyra rutor}}, {{ui:En ruta}} kör det. På modellen: `Enter number of panes [SIngle/2/3/4] <3>`; `2` frågar `[Horizontal/Vertical] <Vertical>` (Vertical = sida vid sida), `3` frågar `[Left/Right] <Right>` (var den stora rutan hamnar). Varje ruta behåller sin egen vy och sitt eget utrymme; ett klick gör en ruta aktiv. På ett blad är det {{cmd:MVIEW}}. Se [Dela skärmen](topic:split-screen).

### VPVIEW

Inget alias. Endast på ett blad.

- `Select viewport` (hoppas över om en är markerad), sedan på modellen: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Inget alias. Ett koordinatsystem eget för dig; inte en redigering. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: en punkt är en ny origo, sedan `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: origo, en punkt på den positiva X-axeln, en punkt på den positiva Y-sidan. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` och ett namn. Vyn vrids så att den nya X-axeln är plan. Se [Vrid vyn och använd egna koordinater](topic:ucs-and-turned-view).

### PLAN

Inget alias. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: vrider den aktiva rutans vy så att UCS:ens X-axel (eller världens) är plan. Inget i ritningen flyttas.

### TURNLEFT, TURNRIGHT, TURNWORLD

Inget alias; eller {{ui:Vy}} › {{ui:Mer}} › {{ui:Vrid vyn 90° åt vänster}}, {{ui:Vrid vyn 90° åt höger}}, {{ui:Tillbaka till världen}}. Samma som `UCS Z -90`, `UCS Z 90` och `UCS W`, med vyn som följer.

### VPLAYER

Inget alias. På ett blad, eller inuti en vyport. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` frågar efter lagernamn (kommatecken, `*` och `?` som jokertecken), sedan `[All/Select/Current] <Current>` vyportar; Reset sätter varje lager tillbaka till sin standard "fruset i nya vyportar"; `V` anger den standarden (`[Frozen/Thawed]`), som {{cmd:MVIEW}} använder. `?` listar lagren som är frysta i den aktuella vyporten. Lagerpanelens vyportkolumn gör detsamma för en vyport. Se [Frys ett lager i en vyport](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Alias: `MS`; eller dubbelklicka inuti en vyport. Endast på ett blad. Arbeta på modellen genom en vyport: den som är markerad, den enda på bladet, eller `Click inside the viewport to work in`. Panorering och zoom inuti ändrar vyportens vy (en vy med låst bild behåller den och bladet flyttas i stället); den nya vyn skrivs som ett ångra-steg. Se [Arbeta på modellen genom en vyport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Alias: `PS`; eller dubbelklicka utanför vyporten, eller klicka på en flik under ritningen. Tillbaka till bladet.

### PLOT

Alias: `PRINT`, `PUBLISH`, `EXPORTPDF`; eller {{key:Mod+P}}. Öppnar dialogrutan {{ui:Plotta till PDF}}. Se [Plotta till PDF](topic:plot-pdf).

### PLOTSTYLES

Alias: `STYLESMANAGER`, `PSTABLES`; eller {{ui:Redigera tabeller…}} i dialogrutan {{ui:Plotta till PDF}}. Öppnar {{ui:Plottstilstabeller}}: vad varje färg skrivs ut som (färg, gråton, bläck, linjetjocklek), sparat med ritningen. Se [Plottstilstabeller](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} flyttar objekt mellan ett blad och modellen via en vyport, skalade och vridna så att de ser likadana ut från andra sidan. På ett blad: markera objekt, och de går till modellen (välj vyporten när bladet har fler än en). Medan du arbetar på modellen genom en vyport ({{cmd:MSPACE}}) kommer de markerade objekten till bladet. Den säger hur många gånger större eller mindre de blev. Vyportar stannar på sitt blad. Ett ångra-steg.

### ISODRAFT

{{cmd:ISODRAFT}} sätter isometrisk ritning `ON` eller `OFF`, eller går direkt till planet `Left`, `Top` eller `Right`. Medan den är på: Ortogonalt ({{key:F8}}) håller linjer längs planets två axlar (vänster: 90° och 150°; topp: 30° och 150°; höger: 30° och 90°), polär spårning ({{key:F10}}) följer samma axlar, fångst till rutnät ({{key:F9}}) använder det isometriska rutnätet, och rutnätet ({{key:F7}}) ritas med linjer på 30°, 90° och 150°. {{cmd:ELLIPSE}} får `Isocircle`: ange en mittpunkt och en radie (eller `Diameter`), så ritar den ellipsen en cirkel visas som på det aktuella planet. Ritningen förblir platt: det här är hjälpmedel för att rita en perspektivbild, inte en 3D-modell. Inställningen gäller för sessionen och sparas inte i filen.

### ISOPLANE

{{cmd:ISOPLANE}} väljer planet isometrisk ritning arbetar på: `Left`, `Top` eller `Right`. Enter går till nästa plan. Medan isometrisk ritning är på gör {{key:F5}} detsamma mitt i ett kommando; när den är av lämnas {{key:F5}} åt webbläsaren.

## Fråga

### CAL

Skriver ut värdet av en beräkning, så som den läses varhelst en längd skrivs.

- `Expression`: skriv den, till exempel `12'6"+3/4"` eller `(24'-0")/3`, och tryck på {{key:Enter}}. CadCraft skriver `= 12'-6 3/4"   (150.75 drawing units)`. Se [Aritmetik i ett skrivet värde](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Alias: `DI`; eller {{ui:Vy}} › {{ui:Mer}} › {{ui:Mät avstånd}}.

- `Specify first point`, `Specify second point`. Skriver ut avstånd, vinkel, Delta X och Delta Y.

### AREA

Alias: `AA`; eller {{ui:Vy}} › {{ui:Mer}} › {{ui:Area}}. Skriver ut arean och omkretsen.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Klicka eller skriv hörn; vid `Specify next point (Enter closes) [Undo]` trycker du på {{key:Enter}} för att sluta konturen. `U` tar tillbaka det senaste hörnet.
  - {{key:Enter}} eller `O`, sedan `Select object`: en cirkel (skriver ut dess omkrets), en ellips, en polylinje (en öppen sluts av en rak linje för arean, och dess längd skrivs ut) eller en skraffering (hål dras av).
  - `A` (Add area) och `S` (Subtract area) håller en löpande summa: frågan börjar med `(ADD mode)` eller `(SUBTRACT mode)`, varje area läggs till eller dras av, och `Total area = …` skrivs ut efter varje. I de lägena väljer `O` objekt tills {{key:Enter}}, och {{key:Enter}} vid första frågan avslutar kommandot.

### MEASUREGEOM

Alias: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; efter varje mätning frågar den igen, med `eXit` som standard.

`Quick` mäter runt pekaren när du rör den: avståndet till närmaste objekt åt höger, uppåt, vänster och nedåt (längs den aktuella UCS:ens axlar), ritat när du rör dig, och vinkeln där två av dessa grannar är räta och möts. Ett klick skriver de fyra avstånden, den fria bredden och höjden och vinklarna till historiken; Enter återgår till alternativen. Den läser det som finns på skärmen.

- `D`: två punkter, som {{cmd:DIST}}.
- `R`: `Select arc or circle`; skriver ut radien och diametern.
- `A`: en båge (dess omslutna vinkel), en linje och sedan en andra linje (vinkeln mellan dem, mot deras fjärrändar), eller {{key:Enter}} och tre punkter (hörnet, sedan de två ändarna).
- `AR`: som {{cmd:AREA}}, en area.

### ID

Inget alias. `Specify point`; skriver ut dess X och Y.

### LIST

Alias: `LI`, `LS`. `Select objects`; skriver ut varje objekts typ, lager och huvudmått.

### MASSPROP

{{cmd:MASSPROP}} ger tvärsnittsegenskaperna för de regioner och slutna objekt du väljer, tillsammans: area, omkrets, avgränsningsram, tyngdpunkt, tröghetsmoment kring X- och Y-axlarna genom origo, tröghetsprodukten, tröghetsradier, samma moment kring tyngdpunkten, och huvudmomenten med riktningarna för deras axlar. Hål i en region räknas som hål. Siffrorna är i ritningsenheter och exakta för konturer av linjer och bågar; ellipser och splines mäts som korta räta segment, och det säger det. Efter rapporten frågar den om den ska skriva den till en textfil. Objekt som inte är slutna lämnas utanför, och det säger hur många.

## Vy, fil och övrigt

### ZOOM

Alias: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Klicka två hörn för ett fönster. `E`, `A` eller Enter: hela ritningen.
- `P` (Previous, eller {{ui:Föregående}} i verktygsfältet) går tillbaka till vyn före, upp till 10 vyer per flik; en serie hjulsteg eller en panorering räknas som en vy.
- Ett tal som `2`, `2x` eller `0.5x` (eller `S` och sedan talet) zoomar in eller ut med den faktorn runt skärmens mitt.
- `C` frågar `Specify center point` och `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT och PDF-kommandona

Alias: `PDFATT` för {{cmd:PDFATTACH}}, `PDFIM` för {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} lägger en PDF-sida under ritningen (fil, sida, infogningspunkt, skala, rotation); {{cmd:PDFIMPORT}} gör en sidas linjer, kurvor, fyllningar och text till ritningsobjekt på lager som namnges efter PDF:en, i sann storlek, en angiven skala, eller skalade från två punkter och ett verkligt avstånd. {{cmd:PDFCLIP}} klipper ett underlägg, {{cmd:PDFADJUST}} sätter tona, kontrast, enfärgad eller stänger av det, {{cmd:PDFLAYERS}} växlar PDF:ens egna lager, och {{cmd:PDF}} ger CadCraft filerna en ritnings underlägg använder igen. Se [PDF-underlägg](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Ritningens automatiska komplettering: när inget kommando körs visar ett grått spöke vad din ritnings egna mönster säger kommer härnäst. {{cmd:AUTOCOMPLETE}} sätter den på `On` eller av `Off` (även Inställningar › CadCraft) eller `Show`ar vad den skulle föreslå nu. **Tab** ritar spöket som ett ångra-steg, **Esc** avfärdar det tills ritningen ändras. Den hittar tre saker i de nyaste objekten: nästa kopia av något som ritats två gånger eller fler med ett jämnt steg (reglar, pelare, en trappas steghöjd och steglängd), nästa steg i en polylinjetrappa, och den saknade sidan av ett rum eller en väggkedja. Mitt i {{cmd:LINE}} eller {{cmd:PLINE}} är spöket **nästa punkt**: nästa steg i en trappa (stegkant, steglängd, stegkant …), rektangelns fjärde hörn, punkten som sluter den, eller ytterligare ett lika steg. För markören nära den och tryck på **Tab**, som om du klickat där; fortsätt eller tryck Enter. Beräknas på den här datorn med regler, utan modell.

### AUTOSHEET

Alias: `ASH`. Blad som lägger upp sig själva. {{cmd:AUTOSHEET}} tar ritningens delar (dina namngivna vyer, eller de separata delarna av modellen, eller hela modellen), väljer en pappersstorlek (eller den du anger), ger varje del en standardskala (en skala för alla, eller den största varje kan ta) och lägger vyerna i rader på nya blad med ett ritningshuvud och en bildtext (namn och skala) under varje. Det som inte ryms på ett blad får ett eget blad. Ett ångra-steg. Beräknas på den här datorn med regler, utan modell.

### PHOTOSKETCH

Alias: `PSK`. Skissfoto till ritning. Välj ett foto (JPEG, PNG eller TIFF) av en handskiss på ett papper. {{cmd:PHOTOSKETCH}} hittar pappersarkets fyra hörn, rätar ut perspektivet, tar den pappersstorlek du anger (`Paper`, eller den närmaste standardstorleken) och `Scale` för skissen (1 : n), och spårar sedan pennlinjerna till linjer, bågar och cirklar, ett lager för varje pennfärg (svart, röd, blå, grön). Om den inte hittar papperets kant tar den hela fotot som bladet och säger det. Bokstäver lämnas bort. Ett ångra-steg. Görs på den här datorn med klassisk bildbehandling, utan modell, utan att något skickas någonstans. Se även kommandona för skannade ritningar.

### AUTODIM

Alias: `ADIM`. Automatisk måttsättning efter regler. {{cmd:AUTODIM}} måttsätter de markerade objekten (eller hela ritningen) utifrån deras jämna och lodräta kanter: en kedja av mått längs de sidor du väljer (`Sides`), ett totalmått utanför den, bredden på varje öppning (ett mellanrum mellan kollinjära väggslinjer), en diameter för varje hålstorlek, och med `Grid` avståndet mellan rutnätslinjer. Ett mått som redan finns görs inte om. Ett ångra-steg. Beräknas på den här datorn med regler, utan modell.

### GRIDMOVE

Alias: `GM`. Att flytta en rutnätslinje tar med sig resten. {{cmd:GRIDMOVE}} flyttar en rutnätslinje (en linje på ett lager vars namn säger rutnät eller axel) och det som hänger på den: väggar med en ände på linjen töjs för att följa den, väggar längs den flyttas hela, pelare (blockreferenser och cirklar på linjen), dess bubbla och tagg flyttas, och mått vars punkter ligger på den mäter det nya avståndet. Ge två punkter (bara den del som går tvärs linjen räknas) eller `Distance`. Ett ångra-steg tar tillbaka allt. Görs på den här datorn med regler.

### DETAILS

Alias: `DET`. Detaljer som hittar dig. {{cmd:DETAILS}} behåller ditt företags egna detaljer: `Add` lägger ett block från den här ritningen i listan, `List` och `Remove` sköter den, och `Find` rankar dem för det som är markerat (eller det du ritade senast) efter orden på dess lager, blocknamn, skraffmönster och anteckningar mot varje detaljs namn och anteckningar, så att en fönsterhuvudsdetalj hittar din fönsterbleck. Välj ett nummer och en punkt för att placera den. Med `Hint` på (även Inställningar › CadCraft) ger markering av något en detalj matchar en rad i statusfältet. Listan sparas i den här webbläsaren, på den här datorn, och den listan är den som söks. `Share` lägger den även i din dokumentmapp (`.cadcraft/firm-details.json`, med varje blocks ritning): `Pull` lägger till det ditt team har och du saknar, `Push` lägger till det du har och de saknar, `Both` gör båda, och inget tas bort från någondera sidan. Öppna dokumentmappen först ({{cmd:DOCUMENTS}}); när den mappen är en Team Cloud Plan-mapp delar hela teamet en lista. Ett detaljobjekt i biblioteksbpanelen har en knapp **Lägg till i mina företagsdetaljer** som lägger det i samma lista. Beräknas på den här datorn med ord, utan modell.

### SKETCHFIX

Alias: `SKF`. Pennskisser blir exakt geometri. Tryck och dra ett frihandsstreck i taget (penna, mus eller finger), sedan Enter. Varje streck läses som en linje, cirkel, båge, rektangel eller polylinje: nästan vågräta och lodräta linjer görs exakt vågräta och lodräta, ett slutet runt streck blir en cirkel, ett slutet streck med fyra räta hörn en rektangel, och strecken ändar dras ihop och till de ändar som redan finns i ritningen. Ett ångra-steg. Beräknas på den här datorn med regler, utan modell.

### SCANATTACH och kommandona för skannade ritningar

Alias: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} har inget. De arbetar på en bild, ett ångra-steg var. {{cmd:SCANATTACH}} infogar en PNG, JPEG, TIFF (en sida eller alla) eller en PDF-sida som är en bild. {{cmd:SCANSCALE}} skalar bladet från två valda punkter och det sanna avståndet. {{cmd:SCANALIGN}} flyttar och vrider det till två punkter (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} visar vinkeln på bladets långa linjer och vrider bladet när du `Accept`erar eller anger ett `Value`. {{cmd:SCANCLEAN}} gör det svartvitt (`Threshold` Auto/Adaptive/Level, `Specks`) och `Run`. {{cmd:SCANCROP}} behåller ett fönster. {{cmd:SCANERASE}} raderar en `Rectangle`, `Polygon` eller `Lasso`. {{cmd:SCANTRACE}} spårar linjer och bågar till ett nytt lager (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) och rapporterar vad den hittade och vad den lämnade som raster. {{cmd:SCANINFO}} listar den ursprungliga filen och stegen. {{cmd:RASTERSNAP}} sätter fångst till linjerna på skannade blad På eller Av. Se avsnittet Skannade ritningar och spårning.

### REGEN och REGENALL

Alias: `RE` för {{cmd:REGEN}}, `REA` för {{cmd:REGENALL}}. Bygger om det som ritas på skärmen från ritningen: {{cmd:REGEN}} fliken du tittar på (på ett blad, även modellen dess vyportar visar), {{cmd:REGENALL}} varje flik, varje rutan i delad skärm och varje öppen ritning. Använd dem när bilden ser inaktuell ut efter en skriptad eller mycket stor ändring, eller när en assistent redigerat ritningen; själva ritningen rörs inte, så det finns inget att ångra.

### NAMEDVIEW

Alias: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, sedan vyns namn. `S` sparar vyn på skärmen, `W` ett fönster du väljer, `R` visar en sparad vy, `D` tar bort en, `?` listar vyerna på den här fliken. Att spara under ett befintligt namn ersätter det; varje ändring är ett ångra-steg. Vyer tillhör fliken de sparades på. DWG- och DXF-filer behåller dem (VIEW-tabellen); ett blads vyer kommer tillbaka på det första bladet, eftersom filen inte anger vilket.

### UNDO och REDO

Alias: `U` för {{cmd:UNDO}}; {{cmd:REDO}} har inget. Även {{key:Mod+Z}} och {{key:Mod+Y}}.

### LAYER

Alias: `LA`. Hoppar till panelen {{ui:Lager}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` eller ett namn (`?` listar dem: Continuous, ritningens egna, och DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE med deras `2` (halv) och `X2` (dubbel) storlekar). {{cmd:LWEIGHT}} (`LW`): linjetjockleken för nya objekt i mm, eller `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): ritningens linjetypsskala (ångringsbar). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — samma som knappen {{ui:LWT}} i statusfältet. Se [Linjetjocklekar och linjetyper](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, sedan det nya namnet; objekt eller referenser följer med. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` tills {{key:Enter}}, sedan `Select object on target layer or [Name]` och `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, sedan `Y`: lagret och varje objekt på det försvinner (inte lager 0, DEFPOINTS eller det aktuella lagret). Ett ångra-steg vardera. Se [Ordna en ritning med lager](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Lager genom att välja objekt; även i panelen {{ui:Lager}}s meny {{ui:Verktyg}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, sedan {{key:Enter}}: varje annat lager stängs av. {{cmd:LAYUNISO}} slår på dem igen. {{cmd:LAYOFF}} och {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (eller frozen), om och om igen; `U` tar tillbaka det senaste, {{key:Enter}} avslutar. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} slår på alla lager, {{cmd:LAYTHW}} tinar alla lager. Varje kommando är ett ångra-steg. Se [Ordna en ritning med lager](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} startar en tom ritning och {{cmd:OPEN}} öppnar en DWG eller DXF, var och en i sin egen flik över ritningen (en orörd ny ritning används i stället för en ny flik). Att stänga en flik med osparade ändringar frågar först. Se [Dela skärmen](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, även {{key:Mod+S}}) laddar ner en kopia i ritningens format: DWG om den öppnades från en DWG, DXF om den kom från en DXF. En ny ritning använder formatet som senast valdes i Spara som i den här webbläsaren, annars DWG.

{{cmd:SAVEAS}} (även {{key:Mod+Shift+S}}) öppnar dialogrutan {{ui:Spara en kopia som}}: välj {{ui:DWG}} (och dess {{ui:Version}}), {{ui:DXF R12}} eller {{ui:DXF 2000}}, och sedan {{ui:Spara}}. Valet gäller för den här ritningen och för nya ritningar i den här webbläsaren.

{{cmd:DXFOUT}} laddar alltid ned en DXF R12-kopia, utan att ändra formatet som {{cmd:SAVE}} använder.

Se [Filer: vad som öppnas, vad som sparas](topic:files#saving).

### TOUR

Alias: `TUTORIAL`. Startar den sexstegs första-ritning-rundturen igen. Se [Kom igång](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Alias: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Se [Inställningar](topic:settings#toolbar-position).

### COMMANDLINE

Alias: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: docka eller frigör kommandoraden, gör den till en rad, frågar hur många historikrader som ska visas (0 till 12), eller öppnar historiken. Se [Inställningar](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: fälten ovanför ritningen som de var, eller kompakta. Se [Inställningar](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: steget som {{ui:Polär}}-spårningen radar upp på (mer än 0, upp till 180). Sparas i den här webbläsaren.

### UNITS

Alias: `UN`. Hur längder skrivs och matas in.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural och Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. De andra: `Enter number of decimal places (0 to 8)`.

Nya mått följer det. Ett ångra-steg. Samma som {{ui:Längdformat}} och {{ui:Precision}} i {{ui:Aktuella inställningar}}; se [Fot och tum](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Alias: `GDS`. Visa en IC-layout (en GDSII-strömfil): labbförsök, endast för visning och mätning.

- En filväljare tar en `.gds`-fil; med flera toppceller, `Enter the top cell to draw`.
- Varje lager och datatyp blir ett ritlager (`GDS 1`, `GDS 2/5`), referenser och matriser placeras platt, i filens användarenhet (vanligtvis mikrometer). Ett ångra-steg. Ingenting simuleras eller kontrolleras, och filen skrivs inte tillbaka.

### DIAGRAM

Alias: `TEXTDIAGRAM`, `T2D`. Ett diagram från text.

- En ruta tar texten (eller en rad med `;` mellan satserna på kommandoraden): ett Mermaid-flödesschema, ett PlantUML-komponentdiagram, D2 eller en från-till-lista.
- `Specify the top left corner of the diagram`, sedan `Specify the text height`.

Block och kopplingar är vanliga objekt på lagret `Diagram`, markerade när det är klart. Ett ångra-steg. Se [Rita ett diagram från text](topic:text-to-diagram).

### OLELIST

Alias: `OLES`. OLE-objekten en DWG bär som CadCraft inte kan placera själv.

- Listar var och en: nummer, typ, storlek, om den sparade en bild.
- `Enter an option [Place/eXit] <eXit>`: Place frågar efter numret, det nedre vänstra hörnet och bredden, och ritar en ram med bilden. Ett ångra-steg; det sparade objektet ändras inte. Se [Bilder](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Alias: `SHX`. Dina egna SHX-teckensnitt.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Mapp}} läser varje `.shx` i en mapp (CadCraft Studio; igen vid varje start), {{ui:Filer}} tar valda filer (webbläsaren), {{ui:Reverse}} lägger ett teckensnitts bokstäver sist först. Textstilar som anger ett inläst teckensnitt ritas i det. Se [Rita text i dina egna SHX-teckensnitt](topic:shx-fonts).

### LIMITS

Hur stor ritningen är tänkt att vara.

- `Specify lower left corner or [ON/OFF] <current>`: en punkt, `ON` eller `OFF`.
- `Specify upper right corner <current>`.

Rutnätet fyller gränserna, {{cmd:ZOOM}} Alla visar dem, och med gränserna ON avvisas en punkt utanför (`**Outside limits`). Ett ångra-steg; sparas i DWG och DXF. Se [Ställ in ritningens gränser](topic:drawing-limits).

### AUNITS

Alias: `ANGUNITS`. Hur vinklar visas och skrivs.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, eller för de andra två `Enter precision` (0 grader, 2 minuter, 4 sekunder, 5 till 8 decimaler av en sekund).

Ett ångra-steg; sparas i DWG och DXF. Samma som {{ui:Vinkelformat}} i {{ui:Aktuella inställningar}}. Se [Skriv och visa bäringar och vinklar](topic:bearings-and-angles).

### APPLOAD

Alias: `AP`; eller {{ui:Vy}} › {{ui:Mer}} › {{ui:Läs in program…}}. Dialogrutan {{ui:Läs in program}}: läs in `.lsp`-rutiner och `.dcl`-dialogfiler, avläs dem, läs in dem igen från historiken, och Startup Suite. En rutins `(defun c:NAME …)`-kommandon fungerar sedan som alla andra. Se [Läs in program](topic:load-applications) och [Kör LISP-rutiner](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (eller {{ui:Vy}} › {{ui:Mer}} › {{ui:Redigera alias…}}) öppnar din aliasfil (rader `ALIAS, *COMMAND`); {{ui:Spara}} tillämpar den. {{cmd:REINIT}} tillämpar den igen. Se [Redigera kommandoalias](topic:command-aliases).

### OPTIONKEYS

Alias: `OPTKEYS`; eller {{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Alternativbokstäver}} › {{ui:Redigera…}}. Öppnar din fil med alternativbokstäver (rader `COMMAND.OPTION, LETTERS`, till exempel `ARRAY.PO, P`); {{ui:Spara}} tillämpar den och {{cmd:REINIT}} tillämpar den igen. Se [Ge kommandoalternativ egna bokstäver](topic:option-letters).

### LISPEDIT

Alias: `VLIDE`; eller {{ui:Vy}} › {{ui:Mer}} › {{ui:LISP-redigerare}}. Öppnar LISP-redigeraren, ett fönster som ligger kvar bredvid ritningen.

- Texten: radnummer, parentesens par vid markören markerat (rött när det saknar ett), {{key:Enter}} indrar den nya raden under den öppna parentesen, {{key:Tab}} skriver två mellanslag, {{key:Esc}} lämnar texten.
- {{ui:Läs in i ritningen}} ({{key:Ctrl+Shift+Enter}}): läser varje form, som {{cmd:APPLOAD}} gör med filen, och gör dess `c:`-kommandon. Filen visas i {{cmd:APPLOAD}}s lista.
- {{ui:Kör markering}} ({{key:Ctrl+Enter}}): utvärderar de markerade formerna, eller formen där markören är.
- {{ui:Stopp}}: avslutar en rutin som körs.
- {{ui:Konsol}}: vad rutinen skrev ut, och varje fel med sin rad; klicka på ett fel för att gå dit. Texten körs en toppnivåform i taget, så raden är formens, eller inuti den raden som anropar funktionen felet nämner.
- {{ui:Nytt}}, {{ui:Öppna}}, {{ui:Spara}} ({{key:Ctrl+S}}): en `.lsp`-fil. Texten sparas även i den här webbläsaren, så att stänga fönstret inte förlorar den.
- Bredvid texten: funktionerna rutinen definierar, de den anropar som denna LISP inte har ännu, de den anropar som varken definieras i den eller är inbyggda, och hela listorna över vad som är inbyggt och vad som inte är det.

En text med en parentes som aldrig stängs, eller en sträng som aldrig tar slut, körs inte: raden namnges. Det finns ingen steg-för-steg-felsökare, ingen brytpunkt och inget bevakningsfönster. Se [Kör LISP-rutiner](topic:run-lisp).

### HELP

Alias: `?`. Skriver ut varje kommando, dess alias och en beskrivning på en rad i kommandoradens historik. Det öppnar inte den här hjälpen: tryck på {{key:F1}} eller klicka på {{ui:Hjälp}} för det.

## Prompten Välj objekt

Vid varje prompt `Select objects`: klicka på objekt, dra fönster (vänster till höger) och korsningar (höger till vänster) med två klick, eller tryck och dra ett lasso ({{key:Space}} medan du drar: fönster, korsning, staket), {{key:Shift}}+klick för att ta bort, och tryck på {{key:Enter}} för att avsluta. Du kan också skriva `ALL` (allt), `L` (det senaste objektet), `P` (Föregående: det senaste kommandot använde), `F` (Fence: objekt en linje av punkter korsar; `U` tar tillbaka en punkt), `W` (Window), `C` (Crossing), `R` (läget Ta bort: val tar bort objekt; prompten säger `Remove objects`) och `A` (Add igen). `?` listar dem. De visas inte i prompten. {{key:Tab}} över överlappande objekt markerar nästa; klicka för att välja det. Se [Välj objekt](topic:select-objects).

### ACCESS

Alias: `AX`. Rita utan syn. {{cmd:ACCESS}} slår på eller av Access (`On`, `Off`) och växlar fångstljud (`Sound`) och talade kommandon (`Voice`); den säger först vilket läge som gäller. Med Access på läses varje kommando och resultat upp via din skärmläsare, och ritytan har en tangentbordsmarkör. Hjälpavsnittet "Draft without sight" har tangenterna.

### DESCRIBE

Alias: `DESC`. Säg vad ritningen innehåller: hur många objekt, av vilken typ, hur stora, hur många lager, vad som är markerat. Läser bara; ändrar inget.

### WHEREAMI

Alias: `WHERE`. Säg var markören är, i ritningens enheter.

### NEARBY

Säg vad som ligger nära markören, närmast först, var och en med sitt avstånd och sidan den ligger på.

### SAYSEL

Säg vad som är markerat, en mening per objekt (linjens längd, ändar och vinkel; cirkelns radie och mitt; text så som den står).

### VOICE

Slå på eller av talade kommandon. De känns igen på den här datorn; där webbläsaren inte kan det förblir röst av om du inte väljer webbläsarens onlinetjänst i Inställningar.

### TOUCHCROSSHAIR

Alias: `TCX`. Det förskjutna korshåret för ritning med fingret, så att fingertoppen inte täcker punkten du väljer. Medan det är på väljer inte ett finger på ritningen: det flyttar ett korshår som sitter ovanför fingret och åt ena sidan. Objektfångster och spårning följer korshåret. Att lyfta fingret väljer inget och lämnar korshåret där det är. För att välja, tryck på knappen {{ui:Klicka}} i ritningens hörn, eller knacka var som helst på ritningen med ett andra finger. Håll {{ui:Klicka}} medan du flyttar det andra fingret för att dra (ett markeringsfönster, ett lasso, ett handtag). Ett finger som trycks ned och hålls stilla, eller knappen {{ui:Enter}}, är Enter. Två fingrar panorerar och zoomar som förut. Nära nedre kanten och den bortre sidokanten drar korshåret ihop sig mot fingret, så att varje del av ritningen går att nå. En penna och en mus väljer alltid direkt.

{{cmd:TOUCHCROSSHAIR}} säger läget och frågar `ON`, `OFF`, `Auto` (på bara där ett finger är den enda pekaren, så den är av på en dator med mus), `Distance` (hur långt korshåret sitter från fingret, 24 till 240 pixlar) eller `Side` (`Left`: uppåt och åt vänster, för högerhanden; `Right` för vänsterhanden; knapparna flyttar till det andra hörnet). Samma val finns i Inställningar › CadCraft, och på en enhet med pekskärm har statusfältet en omkopplare {{ui:Förskjutet korshår}}. Valen sparas i den här webbläsaren.

### WHOHAS

Säger vem som har en ritning öppen. I CadCraft Studio på en dator skriver en öppnad DWG eller DXF en liten låsfil bredvid sig (`Plan.dwg.cclock`: vem, sedan när, vilken version), uppdaterar den varje minut medan ritningen är öppen, och tar bort den när ritningen stängs. Att öppna en ritning som någon annan har öppen säger vem och sedan när, och erbjuder {{ui:Öppna skrivskyddad}} (Spara frågar då efter ett nytt namn), {{ui:Öppna ändå}} (den andra personen får veta vid sin nästa uppdatering) eller {{ui:Avbryt}}. Att spara över en fil som någon annan har öppen frågar först. Ett lås som inte uppdaterats på fem minuter sägs vara inaktuellt: den andra kopian stängdes utan att spara, eller datorn sover.

{{cmd:WHOHAS}} frågar `Current` (den öppna ritningen), `File` (välj en), `FOlder` (välj en mapp: varje ritning i den som är öppen någonstans listas), `Path` (skriv en fullständig sökväg) eller `Name` (namnet andra ser; ditt kontonamn när du är inloggad). Studio når bara mappar du har valt: för en ritning öppnad från en mapp som aldrig valts säger den en gång att den inte kan notera ritningen som öppen; `FOlder` väljer mappen, och lås fungerar där från då på. Låset är en notering för människor, inte ett hinder: ett annat program kan fortfarande skriva filen. I en webbläsare finns inga mappar att titta i, och kommandot säger det.

### OVERKILL

Tar bort dubblerade objekt och ordnar överlappande linjer och bågar, för ritningar som kommer fulla av dubblerade linjer. `Select objects to clean up`, {{key:Enter}}, sedan {{key:Enter}} igen för att städa med de visade inställningarna, eller ändra en först:

- `Tolerance`: hur nära två koordinater måste vara för att räknas som samma (0,000001 från början; 0 betyder exakt samma).
- `Ignore`: egenskaper som kan skilja sig mellan två objekt som annars är lika. Skriv ett namn för att växla det: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, eller `None` / `All`. {{key:Enter}} när du är klar.
- `Overlap`: på eller av. På: linjer längs en rak linje som överlappar blir en linje (en linje som ligger inuti en annan raderas helt), och bågar på en cirkel som överlappar blir en båge; bågar som sluter ett helt varv blir en cirkel, och en båge som ligger på en cirkel raderas.
- `Ends`: på eller av. På: linjer längs en rak linje och bågar på en cirkel som bara möts ände mot ände blir en bit.

Varje objekttyp kontrolleras för dubbletter: två objekt är dubbletter när deras geometri är densamma inom toleransen och deras lager, färg, linjetyp, linjetypsskala, linjetjocklek, tjocklek, genomskinlighet och höjd stämmer (minus dem du ignorerar). Linjer och öppna polylinjer matchar även när de ritats åt andra hållet. Det objekt som står först i ritordningen stannar och behåller sina egna egenskaper. Kommandot rapporterar hur många objekt det kontrollerade och raderade: dubbletter, sammanslagna överlappande bitar, bitar sammanfogade ände mot ände. Ett {{cmd:UNDO}} tar tillbaka allt. Inställningarna gäller tills du stänger ritningsfönstret.

Den lämnar orörda: objekt på låsta lager och dolda objekt. Den slår inte ihop linjer med en höjd (Z) (exakta dubbletter av dem försvinner ändå), och den rör inte segment inuti en polylinje (de tunnas inte ut), inte en linje som ligger på ett polylinjesegment, och inte en sluten polylinje som ritats åt andra hållet.

### DRAWORDER

Ändrar vilka objekt som ritas framför. `Select objects to re-order`, {{key:Enter}}, sedan `Above objects`, `Under objects`, `Front` eller `Back` ({{key:Enter}} = `Back`). `Above objects` och `Under objects` frågar efter referensobjekten: markeringen hamnar direkt framför det främsta av dem, eller direkt bakom det bakersta. De markerade objekten behåller sin inbördes ordning. Ett ångra-steg. Ordningen sparas med ritningen i DWG och DXF, där det är den ordning objekten skrivs i.

På skärmen ritas varje objekt i ritningens ordning, så som andra program som öppnar filen ritar den: en heltäckande skraffering, en bred polylinje eller en textmask täcker linjerna och texten bakom den, och det som ligger framför täcker den. Där en linje korsar en text syns båda. Bilder och bifogade PDF-sidor ligger under linjeverket. I en mycket stor ritning vars fyllningar och linjeverk överlappar och växlar fler än 256 gånger behålls ordningen för de första 256, och resten ritar sina fyllningar under linjerna, så att ritningen fortsatt ritas snabbt.

### TEXTTOFRONT

Tar fram text, mått och hänvisningar framför allt annat i det öppna utrymmet: `Text`, `Dimensions`, `Leaders` eller `All` ({{key:Enter}} = `All`). Ett ångra-steg. Säger det när det inte finns något, eller när de redan ligger främst.

### HATCHTOBACK

Skickar varje skraffering i det öppna utrymmet bakom allt annat, så att fyllningar slutar täcka linjeverk och text i den sparade filen. Inga frågor. Ett ångra-steg.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Visar bara de markerade objekten: allt annat i det öppna utrymmet går ur sikte tills {{cmd:UNISOLATEOBJECTS}}. Till skillnad från {{cmd:LAYISO}} fungerar den på de objekt du väljer, oavsett deras lager, och ändrar inga lager. Dolda objekt ritas inte, väljs inte, fångas inte, zoomas inte till och plottas inte, och kommandon som tar `ALL` hoppar över dem. Det du ritar medan objekt är isolerade visas som vanligt.

Detta gäller bara för sessionen: inget om det sparas med ritningen, det är inget ångra-steg, och när ritningen öppnas igen visas allt. Medan objekt är dolda visar statusfältet en knapp med deras antal; klicka på den för att visa dem igen.

### HIDEOBJECTS

Döljer de markerade objekten tills {{cmd:UNISOLATEOBJECTS}}. Samma regler som {{cmd:ISOLATEOBJECTS}}: bara för sessionen, inte sparad, inget ångra-steg.

### UNISOLATEOBJECTS

Alias: `UNISOLATE`, `UNHIDE`. Visar igen varje objekt som dolts av {{cmd:ISOLATEOBJECTS}} eller {{cmd:HIDEOBJECTS}}, och säger hur många som kom tillbaka.

### LAYLOCKFADE

Anger hur objekt på låsta lager ser ut, och om ett klick når dem. Den säger nuvarande läge och tar sedan:

- ett tal från 0 till 90: tonningen i procent (50 från början). 0 stänger av tonningen.
- `ON` eller `OFF`: tonning på eller av, med bevarad mängd.
- `Pick`, sedan `Yes` eller `No`: får ett klick markera objekt på låsta lager när inget kommando körs? `No` (standard): de kan inte väljas alls. `Yes`: ett klick eller ett fönster markerar dem så att {{ui:Egenskaper}} kan visa dem; de kan fortfarande inte ändras, och ett kommandos egen `Select objects` tar dem aldrig.

Objektfångster hittar objekt på låsta lager oavsett. Utskrifter tonas aldrig. Båda inställningarna är dina, inte ritningens, och finns även i {{ui:Inställningar}} under {{ui:Låsta lager}}.

### BURST

Spränger blockreferenser och behåller det attributen säger. `Select block references to burst`, {{key:Enter}}: varje referens ersätts av blockets objekt, och varje synligt attributs värde blir vanlig text på attributets eget lager (ett attribut på lager 0 hamnar på referensens lager, som blockets övriga objekt på lager 0). Osynliga attribut slängs. Ett block inuti blocket förblir en blockreferens. Ett ångra-steg; den rapporterar hur många referenser som sprängdes och hur många attributvärden som blev text.

Den avvisar en länkad ritning med namn (bind den först, eller kopiera från den med {{cmd:NCOPY}}), och lämnar andra markerade objekt ifred. För blockreferenser ger {{cmd:EXPLODE}} samma objekt; {{cmd:BURST}} tar bara blockreferenser och räknar attributtexten.

### TXT2MTXT

Alias: `T2M`. Förenar enradiga texter till en styckestext. `Select single-line text to join`, {{key:Enter}}, sedan `Paragraph` (raderna löper ihop och bryts vid den bredaste radens bredd) eller `Lines` (varje text förblir en egen rad); {{key:Enter}} tar det som användes senast. Raderna ordnas uppifrån och ned, sedan vänster till höger, längs riktningen för den översta texten. Stycket hänger från den översta textens övre vänstra hörn och tar dess höjd, rotation, stil, lager och färg. Ett ångra-steg.

Text som redan är styckestext, tom text och andra objekt i markeringen lämnas ifred, och kommandot säger hur många.

### NCOPY

Kopierar objekt från en blockreferens eller en länkad ritning in i ritningen, utan att spränga något. `Pick an object inside a block reference or a linked drawing`: objektet närmast ditt val kopieras där det syns, hur många block djupt det än sitter; välj fler, sedan {{key:Enter}}. Sedan `Base point to move the copies`: {{key:Enter}} lämnar dem på plats, eller ange en basispunkt och en andra punkt. Hela kommandot är ett ångra-steg.

En kopia tar det lager den syns på: ett objekt på lager 0 inuti ett block hamnar på lagret för referensen det satt i, och en ByBlock-färg blir referensens färg. Från en länkad ritning blir lagret `Plan|Walls` till `Plan$0$Walls` (namnet som länken ger det), gjort med det länkade lagrets färg, linjetyp och linjetjocklek. En attributs värde kopieras som text. Blockreferenser på låsta lager kan inte väljas.

### FLATTEN

Sätter höjden (Z) och tjockleken för de markerade objekten till 0. `Select objects to flatten`, {{key:Enter}}. Den platthar även objekten inuti blockdefinitionerna markeringen använder (och blocken inuti dem), så att varje referens till dessa block ändras; länkade ritningar lämnas som de är. Ett ångra-steg; den rapporterar hur många objekt som ändrades, och säger det när inget hade en höjd eller tjocklek.

Det CadCraft behåller av den tredje dimensionen i en 2D-ritning är: en höjd på cirklar, bågar, ellipser, punkter, text, blockreferenser, skraffer, hänvisningar och polylinjer (deras höjd över planet), en höjd vid varje ände av en linje, och en tjocklek på linjer, cirklar, bågar, polylinjer, punkter och text, så som filen hade dem. {{cmd:FLATTEN}} rensar exakt dessa. Den rör inte 3D-modellen på fliken 3D, 3D-ytor eller solider, och ett objekt ritat i ett lutande plan fördes redan in i ritningsplanet när filen öppnades.

### BREAKLINE

Ritar en linje med brytsymbol, för en vy som skurits av. Den säger den aktuella storleken och förlängningen, sedan `First point of the break line` (eller `Size` / `Extension` för att ändra dem först), `Second point`, och `Where the break symbol sits`: klicka längs linjen, eller {{key:Enter}} för mitten. Resultatet är en polylinje på det aktuella lagret: linjen, som går förbi varje punkt med förlängningen, med ett Z-format streck lika högt som storleken och hälften så långt.

`Size` och `Extension` kommer ihåg som dina inställningar (storleken startar på två gånger måttets texthöjd gånger måttskalan; förlängningen på hälften av storleken). {{key:Enter}} upprepar kommandot.

### AUDIT

Kontrollerar den öppna ritningen för skador och reparerar den. {{cmd:AUDIT}} tittar på varje objekt i modellen, på bladen och inuti block, och på lagertabellen, och listar vad den hittar per typ:

- tal som inte är ändliga eller är orimligt stora;
- objekt utan storlek: en linje utan längd, en cirkel utan radie, en polylinje med en punkt, text utan bokstäver eller höjd, en blockreferens med skala noll;
- objekt på ett lager ritningen inte har; referenser till ett block som inte finns; text- och måttstilsnamn samt linjetypsnamn som inte finns i ritningen;
- block som innehåller sig själva, direkt eller genom andra block;
- objekt som delar ett id, en nyckel eller ett filhandtag;
- mått utan de punkter de mäts från, och skraffer vars gräns inte är en sluten kontur.

Sedan frågar den `Fix them? [Yes/No]`. `No` ändrar ingenting. `Yes` reparerar allt i ett ångra-steg: det som inte kan ritas tas bort (felaktiga tal, ingen storlek, saknat block, trasigt mått, en skraffering utan användbar gräns, referensen som sluter en cirkel av block); ett saknat lager skapas; okända stil- och linjetypsnamn går tillbaka till standardvärdena; en delad nyckel ersätts. Den skriver ut hur många objekt som togs bort och hur många som reparerades. Samma resultat syns i panelen Problem, var och en med sin egen {{ui:Reparera}}.

Den vägrar inget, men den kontrollerar bara det CadCraft själv ritar: data som sparats för andra program (3D-solider, OLE-objekt) öppnas inte.

### RECOVER

Öppnar en skadad DXF eller DWG. {{cmd:RECOVER}} frågar efter filen, läser det som kan läsas i stället för att vägra filen, listar det den hoppade över eller antog, och kontrollerar sedan och reparerar ritningen som {{cmd:AUDIT}} gör med `Yes`.

- DXF: rader som inte är en del av ett kodpar med värde hoppas över tills paren stämmer igen; en sektion utan slut stängs; en fil som är avbruten läses upp till avbrottet; en binär DXF som är avbruten läses upp till sitt sista hela värde. När en sektion, ett block eller ett objekt fortfarande inte kan läsas lämnas det ut och namnges, och läsningen fortsätter förbi det.
- DWG: objekt som inte klarar sina kontroller eller inte kan avkodas lämnas ut, och en förlorad objektlista byggs om genom att gå igenom objektdatan.

Filen på disken ändras inte. Den återställda ritningen öppnas osparad: spara den under ett nytt namn. En fil som ingenting alls kan läsas ur vägras, med skälet.

### LEGACYTEXT

Konverterar text skriven med äldre 8-bitars vietnamesiska teckensnitt till Unicode. Kortnamnen `TEXTTOUNICODE` och `VNTEXT`.

Äldre vietnamesiska ritningar har sin text som västerländska tecken som bara teckensnittet gör om till vietnamesiska: TCVN3-text i ABC-teckensnitten (`.VnTime`, `.VnArial`, och teckensnitten med versaler vars namn slutar på `H`), och VNI-text i VNI-teckensnitten (`VNI-Times`). CadCraft visar sådan text så som den läses så snart ritningen öppnas, efter teckensnittet i dess textstil, i objektet, eller i en körning inuti styckestext; filen innehåller fortfarande de gamla tecknen.

{{cmd:LEGACYTEXT}} säger hur många texter den hittade i varje kodning och frågar `Convert … to Unicode?`. `Yes` skriver om varje (modell, blad, block, attributvärden och definitioner) och ger textstilarna ett Unicode-teckensnitt (Times New Roman, Arial eller Courier New efter det gamla teckensnittets slag), i ett ångra-steg. Formatering inuti styckestext behålls.

När ingen text använder ett känt teckensnitt (en stil som tappat sitt teckensnittsnamn) frågar den `Read selected texts as [Tcvn3/Vni/None]`: välj kodningen och markera texterna. Text som redan är Unicode lämnas ifred. Måttext som åsidosatts och text i flerhänvisningar konverteras inte.
