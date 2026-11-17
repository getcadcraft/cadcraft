---
title: Kommandoreferens
summary: Varje kommando i CadCraft-ritappen, med sina alias, frågorna det ställer, dess alternativ och standardvärden.
keywords: kommandon, alias, kommandolista, area, omkrets, measuregeom, linje, pline, cirkel, båge, trimma, förskjut, dimlinear, block, infoga, layout, plotta, zoom, hjälp, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicera, selectall
from: 7db2646b
---

Skriv ett kommandonamn eller ett alias och tryck {{key:Enter}} eller {{key:Space}}. Versaler och gemener spelar ingen roll, och ett inledande `_`, `-`, `.` eller `'` ignoreras. Skriv `HELP` (eller `?`) för att skriva ut en kort lista över varje kommando i kommandoradens historik; tryck {{key:F1}} för den här hjälpen.

Så läser du frågorna: alternativen står inom hakparenteser, och du väljer ett genom att skriva dess versala bokstäver (`D` för Diameter). Ett standardvärde står inom vinkelparenteser; tryck {{key:Enter}} för att godta det. Där en punkt efterfrågas kan du klicka eller skriva något av formaten i [Koordinat- och avståndsinmatning](topic:coordinate-entry). Där ett avstånd efterfrågas kan du skriva ett tal eller klicka två punkter.

Att trycka {{key:Enter}} där en punkt eller ett objekt krävs, utan standardvärde, avslutar kommandot. {{key:Esc}} avbryter det. Allt ett kommando gjorde är ett ångra-steg.

## Rita

### LINE

Alias: `L`. Raka segment, vart och ett ett eget objekt.

- `Ange första punkten` (Enter: starta från den senaste punkten du angav)
- `Ange nästa punkt [Ångra (U)]`, upprepas. Efter två segment: `[Ångra (U)/Stäng (C)]`.
- `U` tar tillbaka det senaste segmentet, `C` stänger till den första punkten och avslutar. Enter avslutar.

### PLINE

Alias: `PL`. En polylinje av linje- och bågsegment.

- `Ange startpunkt`
- `Ange nästa punkt [Båge (A)/Stäng (C)/Ångra (U)]` (Stäng när det finns två segment)
- `A` växlar till bågar: `Ange slutpunkt för båge [Linje (L)/Stäng (C)/Ångra (U)]`. Varje båge fortsätter tangentiellt från segmentet före. `L` går tillbaka till linjer, `CL` stänger med en båge.
- Enter avslutar; polylinjen förblir öppen.

### CIRCLE

Alias: `C`.

- `Ange cirkelns centrumpunkt [3P/2P/Ttr (tan tan radie)]`
- `Ange cirkelns radie [Diameter] <senaste radien>`; `D` frågar `Ange cirkelns diameter`.
- `2P`: två ändar av en diameter. `3P`: tre punkter på cirkeln.
- `T` (även kommandot `TTR`, och {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Ange punkt på objekt för första tangenten till cirkeln`, sedan den andra, sedan radien (Enter: den senaste). Cirkeln tangerar båda objekten (linjer, bågar, cirklar, polylinjesegment, även inuti block); av de cirklar som gör det är den som tangerar närmast dina val. ”Cirkeln finns inte” när ingen passar.
- `TTT` (eller {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): tre objekt; cirkeln som tangerar alla tre, närmast dina val (tre linjer ger den inre cirkeln eller en yttre, beroende på var du väljer).

### ARC

Alias: `A`.

- `Ange bågens startpunkt [Centrum]`, `Ange bågens andra punkt`, `Ange bågens slutpunkt`: en båge genom tre punkter.
- `C`: `Ange bågens centrumpunkt`, `Ange bågens startpunkt`, `Ange bågens slutpunkt`. Bågen går moturs från start till slut.

### RECTANG

Alias: `REC`, `RECTANGLE`. En sluten polylinje.

- `Ange första hörnpunkten`, `Ange andra hörnpunkten`. Skriv `@bredd,höjd` för det andra hörnet.

### POLYGON

Alias: `POL`. En regelbunden polygon som en sluten polylinje.

- `Ange antal sidor <4>` (3 till 1024)
- `Ange polygonens centrum`
- `Ange ett alternativ [Inskriven i cirkel/Omskriven kring cirkel] <I>`
- `Ange cirkelns radie`: klicka eller skriv en punkt; dess avstånd bestämmer storleken och dess riktning vrider polygonen.

### ELLIPSE

Alias: `EL`.

- `Ange axelns ändpunkt för ellips [Centrum]`, `Ange axelns andra ändpunkt`, `Ange avståndet till den andra axeln`
- `C`: `Ange ellipsens centrum`, `Ange axelns ändpunkt`, sedan avståndet till den andra axeln.
- `I` (`Isocirkel`, endast medan {{cmd:ISODRAFT}} är på): centrum, sedan radie eller `Diameter`: ellipsen som en cirkel visar sig som i det aktuella isometriska planet.

### HATCH

Alias: `H`, `BH`, `BHATCH`; eller {{ui:Hatch}} i verktygsfältet. Skriver först ut det aktuella mönstret, skalan och vinkeln.

- `Välj intern punkt [Välj objekt/Mönster/SKala/Vinkel]`, upprepas (`Ångra (U)` när det finns ett område): varje klick lägger till det slutna område runt det, med de slutna former som ligger inuti det som öar. Enter gör en skraffering av alla.
- `S`: `Välj slutna objekt` (slutna polylinjer, cirklar, slutna ellipser).
- `P`: `Ange ett mönsternamn, SOLID, eller ? för listan <aktuellt>`. `SC`: `Ange mönsterskala`. `A`: `Ange mönstervinkel`.
- `G` (Övertoning): fyllningen är en övertoning i stället för ett mönster. Se {{cmd:GRADIENT}} för dess frågor.

Se [Skraffering och fyllda områden](topic:hatch).

### GRADIENT

Alias: `GD`. Fyller ett område med en övertoning av en eller två färger. Den frågar först efter övertoningen, sedan fortsätter den som {{cmd:HATCH}} gör (`Välj intern punkt`, `S` för slutna objekt, {{key:Enter}} för att avsluta).

- `Ange ett övertoningsalternativ [Typ/En färg/TWo colors/Vinkel/Centrerad/eXit] <X>`, upprepas; den skriver ut övertoningen som den är nu varje gång.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, eller någon av dem inverterad (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). De första bokstäverna räcker.
- `O`: en färg, sedan dess ton från 0 till 1 (0 skuggar den till svart, 0,5 är själva färgen, 1 tonar den till vitt). `TW`: den första och den andra färgen. En färg är ett tal från 1 till 255, tre tal som `255,128,0`, eller `#rrggbb`.
- `A`: vinkeln övertoningen går i. `C`: centrerad Ja eller Nej (Nej flyttar övertoningens mitt till en sida).
- Den vägrar en färg eller typ den inte känner till, och en ton utanför 0 till 1.

{{cmd:HATCHEDIT}} `G` och Egenskaper (Övertoning) ändrar en övertoning senare, eller gör vilken skraffering som helst till en. En övertoning ritas på skärmen och skrivs ut. DWG 2004 och senare behåller den som en riktig övertoningsskraffering; DXF 2000 och DWG 2000 behåller den för CadCraft, och andra program ser en heltäckande fyllning i den första färgen.

### HATCHGENERATEBOUNDARY

Alias: `HGB`. Gör konturen igen från en skraffering som tappat den. `Välj skrafferingar` (eller markera dem först), sedan `Koppla varje skraffering till dess nya kontur, så att skrafferingen följer den? [Ja/Nej] <Ja>`.

- Varje slinga i skraffering blir en sluten polylinje på skrafferingens lager; de nya polylinjerna lämnas markerade. En böjd kant kommer tillbaka som de korta raka bitar skrafferingen behåller.
- Med Ja följer skrafferingen sin nya kontur, som en skraffering gjord med {{cmd:HATCH}} gör. Ett ångra-steg.
- Den säger det när ingen skraffering var markerad.

### POINT

Alias: `PO`; eller {{ui:Draw}} › {{ui:More}} › {{ui:Point}}. Punktobjekt, ett per klick, tills Enter.

- `Ange en punkt`

### XLINE

Alias: `XL`; eller {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}. Konstruktionslinjer, obegränsade åt båda hållen. Se [Konstruktionslinjer och strålar](topic:construction-lines).

- `Ange en punkt [Hor/Ver/Ang/Bisect/Offset]`, sedan `Ange genomgående punkt` för varje linje, tills Enter.
- `A`: `Ange vinkel för konstruktionslinje [Referens] <0>`; `R` frågar `Välj ett linjeobjekt` först.
- `B`: `Ange vinkelns hörnpunkt`, `Ange vinkelns startpunkt`, sedan `Ange vinkelns slutpunkt` för varje linje.
- `O`: `Ange förskjutningsavstånd [Genom] <Genom>`, sedan `Välj ett linjeobjekt` och `Ange sida att förskjuta åt` (eller `Ange genomgående punkt`) för varje linje.

### RAY

Ingen alias; eller {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}. `Ange startpunkt`, sedan `Ange genomgående punkt` för varje stråle, tills Enter.

### TEXT

Alias: `DT`, `DTEXT`; eller {{ui:Text}} i verktygsfältet. Text på en rad; varje rad är ett eget objekt.

- `Ange textens startpunkt [Justera]`
- `J`: `Ange ett alternativ [Vänster/Centrum/Höger/Mitt/TL/MC] <L>`, sedan `Ange textens infogningspunkt`
- `Ange höjd <aktuell texthöjd>`
- `Ange textens rotationsvinkel <0>`
- `Ange text`, upprepas: varje Enter startar nästa rad under. Enter på en tom rad avslutar. {{key:Space}} skriver ett mellanslag här.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} sätter markeringar på en linje, båge, cirkel, polylinje, spline eller ellips som delar den i lika delar. Välj objektet, ange sedan antalet delar (2 till 32767). Ett öppet objekt får en markering mindre än antalet delar; ett slutet får även en markering vid sin start. Objektet själv klipps inte. Markeringarna är punkter; `Block` frågar i stället efter ett block i den här ritningen och om det vrids för att följa objektet. Längder längs splines och ellipser mäts längs korta korda. Den vägrar text, skraffering och andra objekt som inte har någon längd.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} sätter en markering för varje angiven längd längs en linje, båge, cirkel, polylinje, spline eller ellips, räknat från änden närmast där du klickade (ett slutet objekt: från dess start). Ange längden genom att skriva den eller med två punkter. Det öppna objektets bortre ände får ingen markering. `Block` placerar ett block vid varje markering i stället för en punkt. Den vägrar en längd på 0, en längd som är längre än objektet, och en som skulle ge fler än 32767 markeringar.

### BOUNDARY

Alias: `BO`, `BPOLY`. {{cmd:BOUNDARY}} gör en sluten polylinje runt området som punkten du väljer ligger i, av de linjer, bågar, cirklar, polylinjer och kurvor som avgränsar det på skärmen. Bitar som ligger på en båge eller cirkel kommer tillbaka som bågsegment; bitar av ellipser och splines kommer tillbaka som korta raka segment. Med `Öar` på (startinställningen) får varje slutet område inuti det en egen polylinje också. Fortsätt välja punkter; Enter avslutar. Objekten som avgränsar området lämnas som de är. Den säger det när inget slutet område innehåller punkten.

### BLEND

{{cmd:BLEND}} ritar en spline mellan ändarna på två öppna kurvor. Välj varje kurva nära änden som ska förenas. `CONtinuity` väljer `Tangent` (splinen lämnar och anländer längs båda kurvorna) eller `Smooth` (den böjer sig även som de gör vid ändarna); valet behålls för sessionen. De två kurvorna ändras inte. Den vägrar slutna objekt och två ändar som redan möts.

### REGION

Alias: `REG`. {{cmd:REGION}} gör slutna objekt till regioner: platta områden du kan förena, klippa och mäta. Välj cirklar, slutna polylinjer, slutna ellipser eller slutna splines, eller linjer, bågar och öppna polylinjer som sluter en slinga ände mot ände; varje slinga blir en region och ersätter de objekt den kom från. Bågar förblir bågar; ellipser och splines blir korta raka segment. Det som inte är slutet och inte sluter någon slinga lämnas som det är, och det säger hur många. I ritningen är en region en eller flera slutna polylinjer hållna samman som en onamngiven grupp, så ett klick markerar hela regionen och en kopia är en egen region; andra program som öppnar filen ser slutna polylinjer.

När det finns regioner i ritningen arbetar {{cmd:UNION}}, {{cmd:SUBTRACT}} och {{cmd:INTERSECT}} på fliken 2D med regioner: `UNION` förenar de markerade regionerna till en (regioner som ligger åtskilda blir en region med flera konturer), `SUBTRACT` frågar efter regionerna att subtrahera från och sedan dem som ska bort (ett hål förblir en del av regionen), `INTERSECT` behåller det område de alla delar. Var och en säger resultatets area och är ett ångra-steg. De vägrar när inget skulle finnas kvar eller inget delas. På fliken 3D, och i en ritning utan regioner, fungerar samma kommandon på solider som förut.

## Ändra

Alias: `MT`, `T`; eller {{ui:Paragraph}} i verktygsfältet. Styckestext som bryts till en bredd, skriven på plats.

- `Ange första hörnet`
- `Ange motsatt hörn [Höjd/Justera/Radavstånd/Rotation/Bredd]`: bredden mellan de två hörnen är där texten bryts. `H` frågar `Ange höjd`, `J` `Ange justering [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Ange radavståndsfaktor (0,25 till 4)`, `R` `Ange rotationsvinkel`, `W` `Ange bredd (0 för ingen brytning)` och hoppar över det andra hörnet.
- Sedan öppnas en ruta på ritningen: skriv, {{key:Enter}} för ett nytt stycke, {{key:Mod+Enter}} eller ett klick utanför för att avsluta, {{key:Esc}} för att avbryta. Dess fält anger höjd, radavstånd, bredd och justering. Se [Lägg till text och etiketter](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Alias: `ED`, `DDEDIT`; eller dubbelklicka en text. `Välj en text att redigera`, upprepas tills {{key:Enter}}: varje öppnas i samma ruta. Startad på en markerad eller dubbelklickad text redigerar den den och avslutas.

### ERASE

Alias: `E`, `DELETE`; eller tryck {{key:Delete}} med objekt markerade.

- `Välj objekt` (hoppas över när objekt redan är markerade)

### MOVE

Alias: `M`.

- `Välj objekt`
- `Ange basspunkt [Förskjutning]`, `Ange andra punkt`
- `D`: `Ange förskjutning`, skriven som `dx,dy`.

### COPY

Alias: `CO`, `CP`. Kopierar så många gånger du anger punkter.

`Matris` vid den andra punktfrågan gör en rad i ett svep: ange antalet objekt (originalet räknas som ett), sedan punkten där första kopian ska hamna; de andra följer med samma avstånd. `Passa` gör den punkten till platsen för den sista kopian i stället, med de andra jämnt utspridda mellan.

- `Välj objekt`
- `Ange basspunkt [Förskjutning]`
- `Ange andra punkt [Ångra (U)]`, upprepas tills Enter. `U` tar tillbaka den senaste kopian.

### ROTATE

Alias: `RO`.

- `Välj objekt`, `Ange basspunkt`
- `Ange rotationsvinkel <senaste vinkeln>`: grader, moturs positivt; eller klicka en punkt för att rotera mot den.

### SCALE

Alias: `SC`.

- `Välj objekt`, `Ange basspunkt`
- `Ange skalfaktor`: skriv en faktor som `0.5` eller `2`. En klickad punkt ger sitt avstånd från basspunkten som faktor.

### MIRROR

Alias: `MI`.

- `Välj objekt`
- `Ange spegellinjens första punkt`, `Ange spegellinjens andra punkt`
- `Radera källobjekt? [Ja/Nej] <N>`

### ALIGN

Alias: `AL`; eller {{ui:Modify}} › {{ui:More}} › {{ui:Align}}.

- `Välj objekt`
- `Ange första källpunkten`, `Ange första målpunkten`
- `Ange andra källpunkten (Enter för att fortsätta)`, `Ange andra målpunkten`
- `Ange tredje källpunkten (Enter för att fortsätta)`, `Ange tredje målpunkten`
- Med två par: `Skala objekt utifrån justeringspunkterna? [Ja/Nej] <N>`

Se [Justera objekt](topic:modify-objects#align-objects).

### ALIGNTO

- `Välj objekt` (eller markeringen), `Justera [Vänster/Centrum/Höger/Topp/Mitt/Botten] <Vänster>`, `Mot [Markering/Första/Sista/Punkt] <Markering>`; `P` frågar efter punkten. Markeringen står kvar.

### DISTRIBUTE

- `Välj objekt` (minst tre), `Fördela [Vågrätt/Lodrätt] <Vågrätt>`, `Fördela jämnt [Centrum/Mellanrum] <Mellanrum>`. De yttre två står kvar; markeringen står kvar.

### ALIGNPANEL

Alias: `ALP`; eller {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}. Öppnar panelen som kör ALIGNTO och DISTRIBUTE med klick.

### LASER

Alias: `LASERCUT`; eller {{ui:View}} › {{ui:More}} › {{ui:Laser…}}. Öppnar panelen Laser över ritningen: vad varje lager gör (skär, rita linjer, gravera, fyll, bild), förhandsvisningen, GRBL G-kod att spara, och inramning och sändning över Web Serial. Se [Skicka en ritning till en laser](topic:laser-cutting).

### STRETCH

Alias: `S`; eller {{ui:Stretch}}. `Välj objekt att töja`: dra korsande fönster (eller skriv `C`) över ändarna för att flytta. `Ange basspunkt [Förskjutning]`, `Ange andra punkt`. Punkter inuti fönstren flyttas: linjeändar, polylinjehörn (bågsegment behåller sin höjd), måttpunkter; cirklar, ellipser, text, punkter och block flyttas hela när deras centrum eller infogningspunkt ligger inuti. En markering gjord före kommandot behåller de korsande fönster (och lasson) som gjorde den, så att de töjs på samma sätt. Utan fönster flyttas objekten hela.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Alias: `AR`; eller {{ui:Array}}. `Välj objekt`, sedan `Ange matristyp [Rektangulär/POlar] <Rektangulär>` (endast ARRAY).

- Rektangulär börjar med 4 kolumner × 3 rader, med ett avstånd på 1,5 gånger objektens storlek, visad som förhandsvisning. `Ange ett alternativ [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` frågar kolumner och rader, `S` avstånden mellan kolumner och mellan rader (negativt går åt vänster eller ned), `COL` och `R` en riktning vardera.
- Polar frågar `Ange matrisens centrumpunkt`, börjar med 6 objekt runt hela vägen, roterade. `Ange ett alternativ [Objekt/Fyllningsvinkel/ROTate items/eXit] <X>`: `I` objekt, `F` vinkeln att fylla (+ moturs, − medurs), `ROT` Ja eller Nej.
- {{key:Enter}} (eXit) gör kopiorna, som vanliga objekt. Ett ångra-steg.
- `AS` (ASsociative) växlar mellan vanliga kopior och en matris som går att redigera: ett objekt du ändrar senare med {{cmd:ARRAYEDIT}}, med dess grepp eller i Egenskaper. Valet kommer ihåg ({{cmd:ARRAYASSOCIATIVITY}}); det startar på vanliga kopior.

### ARRAYPATH

Kopior längs en kurva. `Välj objekt`, sedan `Välj banans kurva`: en linje, båge, cirkel, ellips, polylinje eller spline (inte något av objekten som kopieras). Banan börjar vid sin ände närmast objekten, och det första objektet är objekten där de står.

- `Ange ett alternativ [Metod/Antal/SPacing/ALign/ASsociative/eXit] <X>`, med en förhandsvisning. `M`: `Dela` sprider objekten jämnt över hela banan, `Mät` sätter ett var så långt längs den. `I`: antalet objekt (med Mät betyder 0 så många som ryms; ett tal förbi banans slut begränsas till det som ryms). `SP`: avståndet mellan objekt längs banan (växlar till Mät). `AL`: Ja vrider varje objekt så att det följer banan, Nej håller dem upprätt.
- `AS` som i {{cmd:ARRAY}}. Med den på behåller matrisen sin egen kopia av bankurvans form: att redigera banans kurva efteråt flyttar inte objekten.
- Den vägrar en bana som inte är en kurva, och ett objekt.

### ARRAYEDIT

Ändrar en matris gjord med ASsociative. `Välj matris` (eller markera den först). Den skriver ut vad matrisen är nu, och frågar sedan tills {{key:Enter}}:

- Rektangulär: `COL` kolumner och deras avstånd, `R` rader och deras avstånd, `A` vinkeln kolumnerna går i.
- Polar: `I` objekt, `F` fyllningsvinkeln, `ROT` rotera objekt Ja eller Nej.
- Bana: `M` Dela eller Mät, `I` objekt, `SP` avstånd, `AL` justera mot banan.
- `S` (Källa) öppnar de objekt matrisen upprepar, för sig själva, som i blockredigeraren. Rita och redigera där; {{cmd:ARRAYCLOSE}} sparar eller förkastar, och varje objekt följer.
- `REP` (REPlace): `Välj ersättningsobjekt`, `Ange basspunkt för ersättningsobjekten`, sedan klicka på de objekt som ska ersättas, {{key:Enter}}. De objekten visar ersättningen i stället; ersättningsobjekten lämnar ritningen och lever i matrisen. `RES` (RESet) visar källobjekten i varje objekt igen.
- Varje ändring är ett ångra-steg. Den vägrar vanliga kopior, en vanlig blockreferens och en matris på ett låst lager.

Samma tal finns i Egenskaper under Matris, och matrisen har grepp: dess basspunkt flyttar den, greppet vid det andra objektet ställer in avståndet, greppet efter det sista objektet ställer in antalet (polar: det andra objektet anger hur många objekt, det sista fyllningsvinkeln). {{cmd:EXPLODE}} gör en matris till vanliga kopior igen.

### ARRAYCLOSE

Avslutar {{cmd:ARRAYEDIT}} Källa: `Spara ändringarna i matrisens källobjekt? [Spara/Förkasta] <Spara>`. Det säger det när inga matrisers källobjekt är öppna. {{cmd:BCLOSE}} gör samma sak.

### ARRAYASSOCIATIVITY

`Ange nytt värde för ARRAYASSOCIATIVITY (1 = matriser går att redigera, 0 = vanliga kopior)`. Ställer in vad {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR och {{cmd:ARRAYPATH}} startar på; deras alternativ `AS` ändrar samma inställning. Kommer ihåg i den här webbläsaren.

### OFFSET

Alias: `O`. Linjer, bågar, cirklar och polylinjer.

Där en polylinje rör sig utåt och dess raka segment går isär i ett hörn, avgör {{cmd:OFFSETGAPTYPE}} hur gapet stängs.

- `Ange förskjutningsavstånd [Genom] <senaste avståndet, eller Genom>`
- `Välj objekt att förskjuta`, sedan `Ange punkt på sidan att förskjuta åt` (eller, med Genom, `Ange genomgående punkt`), upprepas tills Enter.

### OFFSETGAPTYPE

- `Förskjutningens hörngap: 0 förläng, 1 rund av, 2 fasa`: hur {{cmd:OFFSET}} stänger gapen vid polylinjens yttre hörn. `0` förlänger segmenten tills de möts (startinställningen), `1` förenar dem med en båge runt det gamla hörnet, `2` med ett rakt snitt. Inre hörn och bågsegment påverkas inte. Sparas för den här sessionen.

### EXTRIM

{{cmd:EXTRIM}} trimmar allt på ena sidan av en kant. Välj skärkanten (en linje, båge, cirkel, polylinje, ellips, spline eller konstruktionslinje), välj sedan en punkt på sidan att rensa: varje linje, båge, cirkel, polylinje och konstruktionslinje som korsar kanten förlorar sin del på den sidan, där den börjar vid kanten. Medan du väljer sidan följer de bitar som skulle försvinna pekaren. För en sluten kant är sidorna insidan och utsidan. Objekt som bara rör kanten, och text, skraffering, splines och ellipser som korsar den, lämnas som de är. Ett ångra-steg.

### TRIMEXTENDMODE

- `Ange nytt värde för TRIMEXTENDMODE (1 Snabb, 0 Standard)`: hur {{cmd:TRIM}} och {{cmd:EXTEND}} startar. `1` Snabb: varje objekt är en skärkant eller gräns. `0` Standard: de frågar efter kanterna först. Även `(setvar "TRIMEXTENDMODE" 0)` i LISP.

### TRIM

Alias: `TR`. Skriver först ut `Aktuella inställningar: Snabbläge (TRIMEXTENDMODE 1), kanter: Förläng inte, dra ritar en bana`. I snabbläget är varje synligt objekt en skärkant, och ett objekt som inget korsar raderas; i standardläget frågar den först `Välj skärkanter (Enter = varje objekt)` och klipper bara vid dem.

- `Välj objekt att trimma eller shift-markera för att förlänga [Skärkanter/Staket/Korsande/Läge/Kant/raDera/Ångra]`, upprepas: klicka på biten att ta bort (den visas grå och streckad medan pekaren vilar på den), dra en bana genom flera bitar (alla går i ett steg), eller klicka två tomma platser för ett staket mellan dem. {{key:Shift}} förlänger i stället. `T` väljer skärkanter (standardläge), `F` frågar efter staketpunkter, `C` två fönsterhörn (bitar som delvis ligger inuti går), `O` frågar `Ange ett trimningsläge [Snabb/Standard]`, `E` frågar `Ange ett läge för underförstådd kantförlängning [Förläng/Förläng inte]` (EDGEMODE), `R` raderar objekt du väljer, `U` ångrar det senaste valet eller draget. Enter avslutar. Se [Trimma och förlänga](topic:trim-and-extend).

- Ett klick på en skraffering klipper skrafferingen: skärkanterna delar det skraffierade området, och biten du klickade tas bort (ingen ritad kontur lämnas kvar där den var). Skrafferingen behåller sitt mönster eller sin övertoning; en skraffering som var kopplad till sin kontur är inte kopplad efteråt, eftersom den inte längre fyller den. Den säger det när ingen skärkant delar skrafferingen där, när klicket ligger utanför skrafferingen, och när inget skulle finnas kvar (använd {{cmd:ERASE}}). En dragen bana eller ett staket klipper inte skraffering.

### EXTEND

Alias: `EX`. Samma som TRIM åt andra hållet: `Välj objekt att förlänga eller shift-markera för att trimma [Gränskanter/Staket/Korsande/Läge/Kant/Ångra]`. Ett klick förlänger änden närmast det till nästa gräns; en dragen bana eller ett staket förlänger varje objekt det korsar; {{key:Shift}} trimmar. `B` väljer gränskanter (standardläge). Läge och Kant delas med TRIM.

### LINKVIEWS

Alias: `SYNCVIEWS`; eller {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, eller länkikonen på ritningsflikarna. `Länka rutornas vyer [ON/OFF]` (Enter växlar till det andra läget): medan den är på flyttar en panorering eller zoom i den aktiva rutan varje ruta som visar samma sorts utrymme. Se [Dela skärmen](topic:split-screen).

### OPENIN3D

Ingen alias; eller {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} där 3D-modelleringsappen tar emot en överlämnad ritning. Öppnar den där i en ny flik, som en DWG (inget laddas upp). Om webbläsaren blockerar fliken säger den det.

### LASSOMODE

`Ange nytt värde för LASSOMODE (1 = lasso, 0 = rektangel)`: vad det blir när du trycker och drar på en tom plats. Samma som Inställningar › CadCraft › Dra för att markera. Se [Lassomarkering](topic:lasso-selection).

### FILLET

Alias: `F`. Linjer, bågar, cirklar och polylinjer. Skriver först ut `Aktuella inställningar: Läge = TRIM, Radie = 0`.

- `Välj första objekt [Ångra (U)/Polylinje/Radie/Trimma/Flera]`
  - `R` frågar `Ange filéradie <senaste>`. `T` frågar `Ange trimningsläge [Trimma/Trimma inte]`: med Trimma inte förblir objekten som de är och bara bågen läggs till.
  - `M` låter kommandot fortsätta för fler hörn tills {{key:Enter}}; `U` tar tillbaka det senaste hörnet utan att lämna kommandot.
  - `P` frågar `Välj 2D-polylinje [Radie]` och rundar av varje hörn där två raka segment möts. Filéer som den redan har ersätts av den nya radien; radie 0 tar bort dem. Hörn vars sidor är för korta för radien lämnas och räknas.
- `Välj andra objektet eller shift-markera för att tillämpa hörnet [Radie]`. Håll {{key:Shift}} när du klickar för ett vasst hörn, oavsett radie.

Klicka på varje objekt på den del du vill behålla. Två linjer som inte möts förlängs. Två parallella linjer får en halvcirkel över gapet, vid den första linjens ände närmast ditt klick. En cirkel klipps aldrig. Två segment i samma polylinje bredvid varandra får bågen inne i polylinjen; en polylinje och ett annat objekt fungerar när snittet hamnar på polylinjens första eller sista segment.

### CHAMFER

Alias: `CHA`. Linjer och de raka segmenten i polylinjer. Skriver först ut de aktuella avstånden (eller längd och vinkel).

- `Välj första linjen [Ångra (U)/Polylinje/Avstånd/Vinkel/Trimma/mEtod/Flera]`
  - `D` frågar `Ange första fasavstånd <senaste>` och `Ange andra fasavstånd <det första>`: det första skärs från den första linjen du väljer, det andra från den andra.
  - `A` frågar `Ange fasens längd på den första linjen` och `Ange fasens vinkel från den första linjen`.
  - `E` (mEtod) väljer vilket av de två den nästa fasningen använder. `T`, `M`, `U` och `P` fungerar som i {{cmd:FILLET}}.
- `Välj andra linjen eller shift-markera för att tillämpa hörnet [Avstånd/Vinkel/mEtod]`. Shift+klick gör ett vasst hörn.

Ett avstånd längre än linjen vägras (`Avståndet är för stort.`).

### BREAK och BREAKATPOINT

Alias: `BR`. `Välj objekt` (där du klickar är första punkten), `Ange andra brytpunkten [Första punkt]`; `F` frågar `Ange första brytpunkten` och `Ange andra brytpunkten`. Delen mellan dem tas bort; på en cirkel, moturs från första punkten. BREAKATPOINT frågar `Ange brytpunkt` och delar objektet i två där (inte en cirkel).

### LENGTHEN

Alias: `LEN`. `Välj ett objekt att mäta [DElta/Procent/Total/DYnamic]`: ett val skriver ut `Aktuell längd` (och en bågs omslutna vinkel) och frågar igen. `DE` frågar `Ange ändring av längd (negativ förkortar) [Vinkel]`, `P` `Ange längd i procent`, `T` `Ange total längd [Vinkel]`, `DY` drar. Sedan `Välj ett objekt att ändra [Ångra (U)]`, upprepas: änden närmast klicket flyttas. Linjer, bågar och öppna polylinjer.

### JOIN

Alias: `J`. `Välj objekt att förena`. Linjer, bågar och öppna polylinjer som möts ände mot ände blir polylinjer (slutna när kedjan sluter sig); linjer på samma linje blir en linje; bågar på en cirkel blir en båge eller cirkeln. Historiken säger hur många objekt som förenades och hur många som inte gjorde det.

### MATCHPROP

Alias: `MA`, `PAINTER`. `Välj källobjekt`, sedan `Välj målobjekt [Inställningar]` och {{key:Enter}}. Kopierar lager och färg, och mellan objekt av samma sort texthöjden och -bredden, måttstorlekarna, eller skrafferingsmönstret. `S` frågar `Slå på eller av en egenskap [Färg/LAyer/Text/Dimension/Hatch]`, upprepas tills {{key:Enter}}; valet kommer ihåg för sessionen.

### EXPLODE

Alias: `X`. Polylinjer blir linjer och bågar, blockreferenser blir sina objekt, mått blir linjer, pilspetsar och text. En matris som går att redigera ({{cmd:ARRAYEDIT}}) blir vanliga kopior av sina objekt.

- `Välj objekt`

### GROUP

Alias: `G`. {{cmd:GROUP}} ger de markerade objekten ett namn de delar. Markera objekten, skriv sedan ett namn (inga mellanslag; `?` listar grupperna; Enter gör en grupp utan namn) och, för en namngiven grupp, en valfri beskrivning. Från då på markerar ett klick på ett av dem, eller ett fönster som tar en av dem, alla, så att de flyttas, kopieras och raderas tillsammans; varje objekt är fortfarande ett eget objekt. Ett objekt kan vara i flera grupper. En kopia av en hel grupp är en ny grupp utan namn; en kopia av en medlem ensam går med i gruppen. Grupper hör till utrymmet de gjordes i (modellen eller ett blad). De behålls när du sparar som DWG eller DXF och öppnar filen igen i CadCraft; DXF 2000-filer bär dem också som gruppobjekt för andra program, och grupper gjorda i ett annat program läses när en DXF eller DWG öppnas.

### UNGROUP

{{cmd:UNGROUP}} tar isär grupper: välj objekt i grupperna (varje grupp de ingår i tas isär) eller skriv `Namn` och gruppens namn. Objekten finns kvar i ritningen. Ett ångra-steg återställer grupperna.

### GROUPEDIT

{{cmd:GROUPEDIT}} ändrar en grupp. Välj ett av dess objekt, eller `Namn` och dess namn; en grupp som redan är markerad tas som den är. Sedan: `Lägg till` objekt (ett i taget, inte grupp för grupp), `Ta bort` objekt, `Byt namn` på gruppen (REName), ändra dess `Beskrivning`, eller ange `Markerbar` (om ett klick på ett objekt markerar hela gruppen). `eXit` eller Enter avslutar. En grupp utan objekt kvar försvinner.

### PICKSTYLE

- `Gruppmarkering: 0 ett klick markerar ett objekt, 1 hela dess grupp`: med `1` (startinställningen) markerar ett klick eller ett fönster på ett grupperat objekt hela gruppen; med `0` enskilda objekt, så att du kan redigera en medlem. Sparas för den här sessionen.

## Urklipp

CadCraft:s eget urklipp: det fungerar inom en ritning, mellan ritningar och mellan CadCraft-flikar i den här webbläsaren. Se [Kopiera, klistra in och duplicera](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, eller {{ui:Copy}} i gruppen {{ui:Edit}}. Kopierar objekt till urklipp, med de block och lager de använder. Objekten förblir markerade.

- `Välj objekt att kopiera` (hoppas över när objekt redan är markerade)

### CUTCLIP

{{key:Mod+X}}, eller {{ui:Cut}} i menyn {{ui:More}}. Kopierar objekt till urklipp, och raderar dem sedan (ett ångra-steg).

- `Välj objekt att klippa ut` (hoppas över när objekt redan är markerade)

### COPYBASE

Kopierar objekt till urklipp med en basspunkt du väljer; inklistring placerar den punkten.

- `Ange basspunkt`
- `Välj objekt att kopiera`

### PASTECLIP

{{key:Mod+V}}, eller {{ui:Paste}} i gruppen {{ui:Edit}}. Kopian följer markören, hängande från det nedre vänstra hörnet av dess utsträckning (eller dess centrum, eller punkten från `COPYBASE`; se [CadCraft-inställningar](topic:settings)).

- `Ange infogningspunkt`

De inklistrade objekten markeras. Ett block som ritningen redan har under samma namn behåller den här ritningens definition.

När ett område kopierat i MarkupCraft är nyare än det CadCraft kopierade (och yngre än 6 timmar) klistrar {{key:Mod+V}} och `PASTECLIP` in det området i stället: se `PASTEAREA`.

### PASTEAREA

Alias: `PAREA`. {{ui:Paste a copied area}} i menyn {{ui:More}}. Klistrar in ett område kopierat med {{ui:Copy area}} i MarkupCraft som en bild i sin verkliga storlek. Se [Bilder i en ritning](topic:pictures).

- `Ange det nedre vänstra hörnet av det kopierade området`
- `Skala dess pappersstorlek med (100 för ett blad 1:100; Punkter: två punkter på det och deras verkliga avstånd) [Punkter] <1>` (endast när bladet inte hade någon ritningsskala): ett tal, {{key:Enter}} för pappersstorleken, eller `P`, sedan `Första punkten på det inklistrade området`, `Andra punkten på det inklistrade området` och deras verkliga avstånd.

### PASTEORIG

{{key:Mod+Shift+V}}, eller {{ui:Paste in place}} i menyn {{ui:More}}. Klistrar in på de koordinater objekten kopierades från. Frågar inget.

### DUPLICATE

Alias: `DUP`. {{key:Mod+D}}, eller {{ui:Duplicate and move}} i menyn {{ui:More}}. En kopia av objekten flyttas med pekaren från där de står; {{key:Esc}} lämnar ingenting. Använder inte urklippet.

- `Välj objekt att duplicera` (hoppas över när objekt redan är markerade)
- `Ange var kopian ska hamna (Esc lämnar ingenting)`: klicka, skriv en punkt, `@dx,dy` (från där pekaren var), eller ett avstånd mot markören.

### SELECT

Frågar `Välj objekt` (med alla alternativen nedan) och lämnar det du valde markerat, för nästa kommando eller för `P` senare.

### QSELECT

Alias: `QS`. I webbläsaren dialogrutan {{ui:Quick select}} (se [Välj objekt](topic:select-objects#select-by-a-rule-quick-select)). Utan den frågar kommandoraden `Ange objekttyp`, `Ange egenskap`, `Ange operator [=/<>/>/</*/Välj alla] <=>` och `Ange värde`. Träffarna blir markeringen.

### SELECTSIMILAR

Alias: `SIM`. `Välj objekt [SEttings]` (eller den aktuella markeringen): markerar varje objekt av samma typ med samma lager och färg (och blocknamn, skrafferingsmönster). `SE` frågar `Slå på eller av en egenskap [LAyer/COlor/NAme/PAttern/HEight]`, upprepas tills {{key:Enter}}.

### FIND

Ingen alias; eller {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}. I webbläsaren dialogrutan {{ui:Find and replace}} (se [Lägg till text och etiketter](topic:text#find-and-replace-words)). Utan den: `Ange text att söka efter`, sedan `Ange ersättningstext (Enter: markera det som hittas)`. Letar i text, attributvärden och måttext, i den öppna fliken eller i markeringen.

### SELECTALL och DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) markerar varje objekt du kan redigera på den öppna fliken. `DESELECT` (alias `AI_DESELECT`, `SELECTNONE`; eller {{key:Esc}}) rensar markeringen.

## Mått

### DIMLINEAR

Alias: `DLI`, `DIMLIN`. Horisontellt eller vertikalt avstånd.

- `Ange hjälplinjens första startpunkt [Välj objekt]` (Enter eller `S`: `Välj objekt att måttsätta`, klicka sedan en linje, båge, cirkel eller polylinjesegment)
- `Ange hjälplinjens andra startpunkt`
- `Ange måttlinjens läge [Text/Horisontell/Vertikal/Roterad]`. `T` frågar efter text (`<>` är det uppmätta värdet), `H` och `V` låser riktningen, `R` frågar `Ange måttlinjens vinkel <0>`.

### DIMALIGNED

Alias: `DAL`, `DIMALI`. Det verkliga avståndet mellan två punkter.

- Startpunkter som i {{cmd:DIMLINEAR}}, sedan `Ange måttlinjens läge [Text]`.

### DIMANGULAR

Alias: `DAN`, `DIMANG`.

- `Välj båge, cirkel eller linje, eller Enter för ett hörn`
- Båge: dess vinkel. Cirkel: `Ange andra vinkelns slutpunkt`. Linje: `Välj andra linjen`. Enter: `Ange vinkelns hörn`, `Ange första vinkelns slutpunkt`, `Ange andra vinkelns slutpunkt`.
- `Ange måttlinjens läge [Text]`: klicka inuti vinkeln som ska mätas.

### DIMRADIUS och DIMDIAMETER

Alias: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Välj båge eller cirkel`, sedan `Ange måttlinjens läge [Text]`.

### DIMCONTINUE

Alias: `DCO`, `DIMCONT`. Fortsätter från det senaste linjära eller justerade måttet som gjorts (eller frågar `Välj linjärt eller justerat mått`).

- `Ange andra hjälplinjens startpunkt [Ångra (U)]`, upprepas tills Enter.

### DIMBASELINE

Alias: `DBA`, `DIMBASE`. Som {{cmd:DIMCONTINUE}}, men varje mått startar från den första startpunkten och staplas längre ut.

### DIMORDINATE

Alias: `DOR`, `DIMORD`. `Ange detaljens läge`, sedan `Ange hänvisningens slutpunkt [Xdatum/Ydatum/Text]`. Skriver hur långt detaljen ligger från UCS-origo längs X eller längs Y, på en hänvisning: en hänvisning som går mest uppåt eller nedåt läser X, en som går åt sidan läser Y; `Xdatum` och `Ydatum` låser vilket. Ange origo först med {{cmd:UCS}} (utan den är det ritningens 0,0). Greppen flyttar detaljen, origo och hänvisningens slut, och värdet följer. Sparas som ett riktigt ordinatmått i DWG och DXF. Vägrar en hänvisningsände på detaljen själv.

### DIMARC

Alias: `DAR`. `Välj båge eller polylinjebågssegment`, sedan `Ange bågens längdmåttets läge [Text]`. Mäter längs bågen (inte korden) och skriver bågsymbolen före värdet. Vägrar en hel cirkel, en linje eller ett rakt polylinjesegment. En DWG behåller det som ett bågmått; en DXF behåller det som ett vinkelmått med längden som text, och CadCraft öppnar det igen som ett bågmått.

### DIMJOGGED

Alias: `DJO`, `JOG`. `Välj båge eller cirkel`, `Ange mittpunktens placeringsöverskrivning`, `Ange brytningens läge`. Ett radiemått för en kurva vars centrum ligger långt bort eller utanför bladet: måttlinjen startar vid punkten du anger i stället för centrum, med en brytning i sig, och skriver ändå den verkliga radien. En DWG behåller det som ett radiemått med brytning; en DXF behåller det som ett radiemått, och CadCraft öppnar det med brytning igen.

### DIMJOGLINE

Alias: `DJL`. `Välj mått att lägga till brytning [Ta bort]`, sedan `Ange brytningens läge (eller tryck Enter)`. Sätter en brytsymbol på linjen för ett linjärt eller justerat mått, för att visa att avståndet inte är ritat i skala; värdet ändras inte. `Ta bort` tar bort den. Vägrar andra sorters mått.

### QDIM

Ingen alias. `Välj geometri att måttsätta`, sedan `Ange måttlinjens position [Kontinuerlig/Förskjuten/Baslinje/Ordinat/Radie/Diameter/datumPunkt]`. Måttsätter flera objekt i ett steg, från ändarna av linjer och polylinjesegment, centrum på cirklar och bågar, punkter och blockreferenser. En position ovanför eller under objekten mäter tvärs över, en bredvid dem mäter uppåt. `Continuous` kedjar punkterna, `Baseline` mäter alla från den första, `Staggered` nästlar par från mitten och utåt, `Ordinate` ger varje punkt dess avstånd från datumet (`datumPoint` väljer ett nytt), `Radius` och `Diameter` måttsätter varje cirkel och båge du väljer. Läget kommer ihåg. Allt det gör är ett ångra-steg. Säger det när det finns färre än två punkter, eller inga bågar eller cirklar för Radie och Diameter.

### DIMBREAK

Alias: `DBREAK`. `Välj mått för att lägga till eller ta bort brytningar`, sedan `Bryt där andra objekt korsar [Auto/Manuell/Ta bort] <Auto>`. `Auto` lämnar ett gap i mått- och hjälplinjerna där ett annat objekt korsar dem, och räknar ut gapen igen när de objekten eller måttet flyttas. `Manuell` (ett mått) frågar två punkter och lämnar ett gap mellan dem. `Ta bort` tar bort alla gap. Gapet är 1,5 gånger måttets texthöjd.

### DIMSPACE

Ingen alias. `Välj basmått`, `Välj mått att fördela`, `Ange avståndsvärde eller Auto <Auto>`. Flyttar måttlinjerna för parallella linjära och justerade mått (eller vinkelmått kring samma hörn) så att de står lika långt från varandra, räknat från basmåttet, var och en på den sida den ligger. `0` radar upp dem med basen; `Auto` är två gånger basmåttets texthöjd. Mått som inte är parallella med basen lämnas.

### DIMINSPECT

Ingen alias. `Välj mått`, `Kontrollramens form [Rund/Vinkelrät/Ingen/ta bort] <Rund>`, `Ange etikett`, `Ange kontrollfrekvens <100%>`. Ritar en ram runt värdet med en etikett före det och kontrollfrekvensen efter. `ta bort` tar bort ramen. Toleranstexten stannar med värdet.

### DIMOVERRIDE

Alias: `DOV`, `DIMOVER`. `Ange namn på måttvariabel att åsidosätta eller Clear`, `Ange nytt värde för …`, igen tills Enter, sedan `Välj mått`. Ändrar de inställningarna på de markerade måtten endast; måttstilen ändras inte. Tar de variabler som är ett tal eller en omkopplare (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` sätter tillbaka de markerade måtten på deras stil. Vägrar ett namn som inte är en sådan variabel och ett värde den inte kan ta.

### DIMREASSOCIATE

Alias: `DRE`, `DIMREASSOC`. `Välj mått`, sedan för varje ett dess hjälplinjestartpunkter (`Ange första hjälplinjens startpunkt på ett objekt`: fånga en ände eller mitten av en linje, ett polylinjehörn, ett centrum; Enter håller den punkten fri), eller för en radie, diameter, radie med brytning eller bågmått `Välj båge eller cirkel`. Måttet kopplas sedan till de objekten: när de flyttas eller ändrar storlek följer det i samma ångra-steg och mäter om. Att flytta en kopplad punkt för hand, eller radera objektet, avslutar kopplingen. Kopplingen sparas i DWG och DXF 2000 som CadCraft:s egna data; andra program ser ett vanligt mått.

### DIMDISASSOCIATE

Alias: `DDA`, `DIMDISASSOC`. `Välj mått`. Frigör dem från de objekt de är kopplade till; inget flyttas.

### CENTERMARK

Alias: `CM`, `DIMCENTER`, `DCE`. `Välj cirkel eller båge att lägga till centrummarkering`, igen tills Enter. Ritar ett kors i centrum och fyra centrumlinjer till strax utanför kurvan (linjetyp CENTER), som vanliga linjer på aktuellt lager; storleken tas från pilstorleken och den totala skalan i de aktuella måttinställningarna, och vrids med UCS. De följer inte cirkeln om den flyttas.

### CENTERLINE

Alias: `CL`. `Välj första linjen`, `Välj andra linjen`. Ritar en linje mitt emellan två linjer (längs bisektrisen när de möts), något längre än de är, i linjetyp CENTER. En vanlig linje: den följer inte de två linjerna.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Ingen alias. Var och en frågar `Ange nytt värde för … <aktuellt>` och ställer in den storleken för **nya** mått: total skala, texthöjd, pilstorlek, decimaler (upp till 8), mellanrum runt texten, förlängning bortom måttlinjen, förskjutning från origo. Se [Ställ in måttstorlekar](topic:dimension-settings).

### DIMLUNIT

Måttinställning: formatet för nya mått endast (1 vetenskapligt, 2 decimal, 3 teknisk, 4 arkitektoniskt, 5 bråk).

### DIMSTYLE och -DIMSTYLE

Alias: `DST`, `DDIM`, `D`. Måttstilshanteraren: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}. `-DIMSTYLE` på kommandoraden: `Måttstil [Återställ/Spara/Ta bort/Tillämpa/Jämför/Byt namn/Lista]`. Se [Ställ in måttstorlekar](topic:dimension-settings#named-dimension-styles).

### DIMEDIT och DIMTEDIT

`DIMEDIT` (`DED`): `Måttredigering [Hem/Ny/Rotera/Snett] <Hem>`, sedan måtten (eller de som redan är markerade). Ny frågar efter texten (`<>` = mätvärdet); Rotera efter en vinkel (0 sätter tillbaka texten); Snett för hjälplinjernas vinkel från X-axeln (Enter = ingen; endast linjära och justerade mått). `DIMTEDIT` (`DIMTED`): `Måttext [Vänster/Höger/Centrum/Hem/Vinkel] <Centrum>`. Se [Ställ in måttstorlekar](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Alias: `DTU`. `Enheter i texten för nya mått [Ritningsenheter/mm/cm/m/km]`, eller med mått markerade `Enheter i texten för de markerade måtten`. Skriver den uppmätta längden i den enheten med enheten efter (DIMLFAC och ett DIMPOST-suffix); `D` går tillbaka till ritningsenheter. Se [Mått i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Alias: `RC`. Skriver ut `Bågens längd: … Typ: …`, sedan `Ange första punkten [Bågens längd/Objekt/Rektangulär/Polygonal/Frihand]`. Rektangulär frågar `Ange motsatt hörn`; Polygonal `Ange nästa punkt (Enter stänger molnet) [Ångra (U)]`; Frihand följer pekaren tills ett klick eller {{key:Enter}}; `O` frågar `Välj objekt` och `Vänd riktning? [Ja/Nej] <N>` och gör objektet till molnet. `A` frågar `Ange längden på varje båge`. `R`, `P` och `F` väljer typ för nästa moln. Resultatet är en sluten polylinje av bågar.

### MLEADER

Alias: `MLD`; eller {{ui:Leader}}. `Ange flerhänvisningens pilspetsplacering [Pilspetsstorlek/Landningsavstånd/Block]`, `Ange flerhänvisningens landningsplats`, sedan texten i rutan på plats (eller, utan den, `Ange text (en tom rad avslutar)`). `Block` frågar först efter ett blocknamn, och flerhänvisningen visar det blocket i stället för text. Fler hänvisningslinjer: {{cmd:MLEADEREDIT}}. Sparas som en riktig flerhänvisning i DWG; DXF behåller linjerna, pilspetsen och texten den ritar.

### MLEADEREDIT

Alias: `MLE`. `Välj en flerhänvisning`, sedan `Ange flerhänvisningens pilspetsplacering [Ta bort hänvisningar/Blockinnehåll/Textinnehåll]`: varje punkt lägger till en hänvisningslinje från en ny pilspets till samma landning, tills Enter. `Ta bort hänvisningar` tar sedan bort hänvisningslinjen du klickar (en flerhänvisning behåller minst en). `Blockinnehåll` frågar efter ett blocknamn och visar det blocket i stället för texten (dess attribut frågas efter); `Textinnehåll` sätter tillbaka text. Varje hänvisningslinje har ett eget grepp. En DWG behåller varje hänvisningslinje och blocket i en flerhänvisning.

### MLEADERALIGN

Alias: `MLA`. `Välj flerhänvisningar`, sedan `Välj flerhänvisning att rikta in mot [Fördela/Avstånd/Använd aktuellt avstånd]` och `Ange riktning`. Flyttar de andra flerhänvisningarnas landningar (och deras text eller block) till linjen genom den valda landningen i den riktningen; pilspetsarna står kvar där de pekar. `Avstånd` ställer även in lika avstånd mellan dem; `Fördela` frågar två punkter och sprider dem jämnt mellan. Kräver minst två flerhänvisningar.

### MLEADERCOLLECT

Alias: `MLC`. `Välj flerhänvisningar`, sedan `Ange samlad flerhänvisnings läge [Vertikal/Horisontell]` (Enter behåller den första flerhänvisningens plats). Gör en flerhänvisning av flera: blockinnehåll läggs i ett nytt block som håller varje block sida vid sida eller under varandra; textinnehåll blir en anteckning med en rad för vardera. Den första flerhänvisningen behåller sina hänvisningslinjer; de andra tas bort. Vägrar en blandning av text- och blockinnehåll.

### TABLE

Alias: `TB`; eller {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}. Gör en tabell: ett objekt som du flyttar, kopierar, roterar, skalar och plottar som vilket annat som helst, med sina celler sparade som data.

- `Antal datarader eller [Klistra in/Fil/Stil] <3>`, sedan `Antal kolumner <3>`, `Texthöjd` och `Tabellens övre vänstra hörn`. Tabellen får en titelrad (en sammanslagen cell) och en rubrikrad ovanför dataraderna.
- `P`: en tabell av kalkylbladsceller på urklipp (text med en tabb mellan cellerna). Att trycka {{key:Ctrl+V}} med sådana celler på urklipp gör detsamma, om inte CadCraft:s egen kopia är nyare (eller om CadCraft inte kan avgöra det: då klistrar den in sin egen kopia och säger det). `F`: en tabell av en `.csv`- eller tabbseparerad fil. Den första raden blir rubrikraden; kolumnbredderna passar texten.
- `S`: välj tabellstilen för den här tabellen (se {{cmd:TABLESTYLE}}).
- Den vägrar ett rad- eller kolumnantal som inte är ett heltal, och fler celler än en tabell rymmer (2 000 rader, 200 kolumner, 40 000 celler).
- {{cmd:EXPLODE}} gör en tabell till linjer och text. Sparad som DWG är en tabell ett riktigt tabellobjekt som andra program kan redigera; sparad som DXF är den ett block som ritar den, och CadCraft öppnar den som tabell igen.

### TABLEDIT

Alias: `TABLEEDIT`, `TABEDIT`; eller dubbelklicka en cell. Redigerar en tabell.

- `Välj en cell att skriva i (Enter för att avsluta) eller [Rad/Kolumn/Storlek/Sammanfoga/Upphäv sammanfogning/Justera/Höjd/Typ/Rensa]`. Klicka en cell, eller skriv dess namn med en tabell markerad (`B3`: kolumn B, rad 3; titelraden är rad 1). I webbläsaren öppnas en ruta över cellen: {{key:Enter}} behåller texten, {{key:Tab}} går till nästa cell, {{key:Alt+Enter}} startar en ny rad, {{key:Esc}} lämnar cellen som den var.
- En text som börjar med `=` är en formel: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, med `+ - * / ^`, parenteser och funktioner som `sqrt` och `round`. Cellen visar värdet; en formel som namnger sin egen cell, en cell utanför tabellen eller en cell utan ett tal visar `####` och kommandoraden säger varför.
- `R` / `C`: `Infoga` eller `Ta bort` rader eller kolumner vid en vald cell (hur många, och ovanför eller under, till vänster eller höger). Formler följer de celler de namnger.
- `S`: kolumnens bredd och radens höjd. En rad är aldrig lägre än sin text kräver. En markerad tabell har dessutom ett grepp på varje kolumns och varje rads kant.
- `M`: slå samman från en vald cell till en annan; `U`: upphäv sammanslagning. `A`: justering (`TL` överst till vänster … `MC` mitten centrerad … `BR` nederst till höger). `H`: denna cells egna texthöjd (0 = stilens). `K`: gör raden till en titel-, rubrik- eller dataremsa. `CL`: töm cellen.
- Den vägrar en tabell på ett låst lager, att ta bort varje rad eller kolumn, och en sammanslagning som skulle dela en annan sammanslagen cell.

### TABLESTYLE

Alias: `TS`. Listar tabellstilarna med hur många tabeller som använder var och en, sedan `Tabellstil: [Ny/Ange/Redigera/Ta bort/Tillämpa]`.

- En stil håller texthöjden och justeringen för rubrik-, sidhuvuds- och dataraderna, cellmarginalen och vilka kanter som ritas (yttre, mellan rader, mellan kolumner).
- `N` gör en stil från den aktuella och gör den aktuell; `S` anger den aktuella stilen (nya tabeller tar den); `E` redigerar en: tabeller som använder den ritas om; `A` ger markerade tabeller den aktuella stilen; `D` tar bort en (inte Standard, inte den aktuella; tabeller som använde den behåller sitt utseende).
- Stilar sparas med ritningen (DWG och DXF).

### TABLEEXPORT

Sparar det en tabell visar som en CSV-fil (en formel som sitt värde). `Välj en tabell`, eller markera en först. Textceller som börjar med `=`, `+`, `-` eller `@` får ett inledande `'` så att ett kalkylblad inte kör dem.

### TABLEPASTE

Alias: `PASTETABLE`. Gör en tabell av kalkylbladsceller på urklipp, och frågar sedan efter dess övre vänstra hörn. Samma som {{cmd:TABLE}} › `Klistra in`.

### DATALINK

Alias: `DL`. `Datalänk: [Ny/Lista/Ta bort] <Ny>`. `N` frågar efter en CSV-fil, placerar en tabell av den och kommer ihåg filens namn; `L` listar länkarna med deras fil, storlek, när de lästes och hur många tabeller som använder dem; `R` tar bort en länk (dess tabeller blir kvar som vanliga tabeller).

### DATALINKUPDATE

Alias: `DLU`. Läser en datalänks fil igen och fyller på de tabeller som är kopplade till den (rader och kolumner läggs till eller tas bort för att passa). En webbläsare kan inte öppna en fil av sig själv, så den frågar dig att välja filen igen. Med flera länkar frågar den vilken.

### FIELD

Lägger ett fält i ritningen: text som räknar ut sig själv. `Fält: [Datum/Filnamn/Blad/Egenskap/Objekt/Uttryck/Kod] <Datum>`:

- `D`: nu, eller det sparade, skapade eller plottade datumet, och ett format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: filnamnet, med eller utan dess tillägg. `S`: bladets nummer, dess titel, eller hur många blad det finns. `P`: en ritningsegenskap med namn (se {{cmd:DWGPROPS}}). `O`: välj ett objekt, sedan vad som ska läsas (area, längd, omkrets, radie, diameter, lager, namn, x, y, text, rotation, färg) och decimalerna. `E`: en formel. `C`: en text med koder skrivna som de är, till exempel `Blad %<sheetnumber>% av %<sheetcount>%`.
- Sedan `Välj en text, en tabellcell eller ett block med attribut att lägga det i (Enter: en ny text)`: en vald text får fältet tillagt efter det den innehåller; en tabellcell likaså; en blockreferens frågar vilket attribut; {{key:Enter}} frågar efter en höjd och en punkt för en ny text.
- På skärmen har ett fält en ljusgrå bakgrund; en plottning och en PDF har det aldrig. Att skriva över ett fälts text för hand avslutar fältet. Ett fält som inte kan räknas ut visar `####`.
- Ett objekts fält hittar sitt objekt med den nyckel CadCraft behåller på objekt (Inställningar › CadCraft › Sammanfogningsvänliga filer); med nycklar avstängda vägrar den.

### UPDATEFIELD

Alias: `UPDATEFIELDS`. `Välj objekten vars fält ska uppdateras (Enter: varje fält) eller [Inställningar]`. `S` ställer in när fälten uppdateras av sig själva: skriv bokstäverna för `O` öppna, `S` spara, `P` plotta, `R` regen (alla fyra för att börja med), eller `NONE`.

### DWGPROPS

Alias: `DRAWINGPROPS`. Listar ritningens egenskaper, sedan `Ändra: [Titel/Ämne/Författare/Företag/Nyckelord/coMments/cUstom/Ta bort/eXit]`. De sex första är dem panelen {{ui:Drawing details}} visar; `U` lägger till ditt eget namn och värde, `R` tar bort ett. Fält läser dem (`%<prop:title>%`, `%<prop:Client>%`) och följer dem direkt. Den vägrar ett eget namn som är ett av de inbyggda, eller som innehåller `%`, `<`, `>`, ett citattecken eller ett snedstreck bakåt.

## Parametrisk

Se [Villkora en ritning](topic:constraints) och [Använd parametrar och ekvationer](topic:parameters). Villkor fungerar på fliken {{ui:Model}}.

### GEOMCONSTRAINT och GC-kommandona

Alias `GCON`: `Ange villkorstyp [Horisontell/Vertikal/Vinkelrät/PArallell/Tangent/Samfallande/CONcentrisk/COLlinear/Symmetrisk/Lika/Fixera] <Horisontell>`, sedan det kommandots frågor.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Välj ett objekt [2Punkter] <2Punkter>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Välj första objektet`, `Välj andra objektet` (det andra flyttas).
- {{cmd:GCCOINCIDENT}}: `Välj första punkten [Objekt/Autovillkora] <Objekt>`, `Välj andra punkten [Objekt] <Objekt>`.
- {{cmd:GCFIX}}: `Välj punkt [Objekt] <Objekt>`.
- {{cmd:GCSYMMETRIC}}: `Välj första objektet [2Punkter] <2Punkter>`, `Välj andra objektet`, `Välj symmetrilinje`.

### DIMCONSTRAINT och DC-kommandona

Alias `DCON`: `Välj associativt mått att konvertera [LInjärt/Horisontellt/Vertikalt/ALigned/ANgular/Radiell/Diameter/Konvertera] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Ange första villkorspunkten [Objekt] <Objekt>`, `Ange andra villkorspunkten`, `Ange måttlinjens läge`, `Måttext <d1=40>` (ett tal, ett uttryck, eller `namn=uttryck`).
- {{cmd:DCALIGNED}}: som ovan, med `[Objekt/Punkt och linje/2Linjer]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Välj båge eller cirkel`. {{cmd:DCANGULAR}}: `Välj första linjen eller bågen`, `Välj andra linjen`.
- {{cmd:DCCONVERT}}: `Välj mått att konvertera`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Välj objekt [Inställningar]`. `S` frågar efter avstånds- och vinkeltoleranserna.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Välj objekt`; deras villkor försvinner.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Välj objekt [Visa alla/Dölj alla]`, sedan `[Visa/Dölj]`.
- {{cmd:DCDISPLAY}}: `Ange ett alternativ [Visa/Dölj]`.

### PARAMETERS och -PARAMETERS

{{cmd:PARAMETERS}} (alias `PAR`, `PARAM`) öppnar panelen {{ui:Parameters}}. `-PARAMETERS`: `Ange ett alternativ [Ny/Redigera/Byt namn/Ta bort/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Laddar ner ett makro (.swb) som bygger om modellen som en enda villkorad skiss i SolidWorks. Se [Flytta skisser till och från andra delmodellerare](topic:solidworks-sketches).

## Block

### ANNOSCALE

Alias: `CANNOSCALE`. Säger ritningens annoteringsskala och hur många annoterande objekt den innehåller, sedan frågar `Ny annoteringsskala`: skriv `1:50`, `1:100`, `2:1`, ett bart tal (`50` är 1:50) eller namnet på en av ritningens egna skalor. Varje annoterande text och mått ändras så att det skrivs ut i samma storlek i den nya skalan, i ett ångra-steg; objekt som inte är annoterande lämnas, och så gör objekt som har en lista över skalor utan den nya (se {{cmd:OBJECTSCALE}}). Se [Enheter, papper och skalor](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Alias: `OBJSCALE`. `Välj annoterande objekt`, sedan `Annoteringsskalor för de markerade objekten [Lägg till/Ta bort/Aktuell skala/Lista/eXit] <Lägg till>`. En annoterande text eller ett annoterande mått håller en lista över annoteringsskalor. `Lägg till` och `Ta bort` frågar efter en skala (`1:50`, `2:1`, ett bart tal, eller namnet på en av ritningens egna skalor); `Aktuell skala` lägger till ritningens annoteringsskala; `Lista` skriver ut varje objekts skalor. En vyport vars skala finns i ett objekts lista visar objektet i den storlek som skriver ut dess pappershöjd i den skalan, på skärmen och i plottar. Den sista skalan kan inte tas bort. Objekt som inte är annoterande lämnas utanför: slå på Annoterande i Egenskaper först. Listorna sparas i DWG och DXF som CadCraft:s egna data. Se [Enheter, papper och skalor](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Alias: `ANNOALL`. `Visa annoterande objekt i alla skalor [ON/OFF]`. På (så som en ritning startar): ett annoterande objekt visas också i en vyport, eller i modellen, vars skala inte finns i dess lista, i den storlek det har. Av: det visas inte där, och kan inte väljas i modellen. Omkopplingen är ett ångra-steg; den sparas inte i filen.

### SCALELISTEDIT

Alias: `SCALELIST`. `Skalalista [Lägg till/Redigera/Ta bort/Lista/Återställ]` tills {{key:Enter}}. Lägg till: `Skalnamn`, `Pappersenheter`, `Ritningsenheter`. Redigera och Ta bort frågar efter skalans namn. Ritningens egna skalor ansluter till vyportens och plottskalornas listor och sparas med ritningen. Se [Enheter, papper och skalor](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT och PEDIT

`SPLINE` (`SPL`): `Första punkten på splinen [Metod/Objekt] (Anpassningspunkter)`. Anpassa: punkter som kurvan går genom; `Stäng`, `Ångra`, sedan `Starttangent` och `Sluttangent` (en punkt, eller {{key:Enter}}). Metod › Kontrollhörn frågar efter en grad (1 till 5) och ritar från en kontrollpolygon. Objekt gör polylinjer till splines genom deras hörn. `SPLINEDIT` (`SPE`): `[Anpassningsdata/Redigera hörn/konvertera till Polylinje/Öppna eller Stäng/Vänd/Ångra/eXit]`; Anpassningsdata `[Lägg till/Ta bort/Flytta/Rensa/Tangenter/eXit]`; Redigera hörn `[Lägg till kontrollpunkt/Flytta/Vikt/eXit]`. `PEDIT` (`PE`): `[Stäng/Öppna/Förena/Bredd/Anpassa/Spline/Avkurva/Linjetypsgenerering/Vänd/Ångra/eXit]`, `M` för flera objekt; linjer, bågar och splines erbjuds först som polylinjer. Se [Splines och polylinjer](topic:splines).

### BLOCK

Alias: `B`, `BMAKE`.

- `Ange blocknamn`. Om det finns: `Blocket ”…” finns redan. Definiera om? [Ja/Nej] <N>`.
- `Ange infogningens basspunkt`
- `Välj objekt`. De ersätts av en referens till det nya blocket.

### WBLOCK

Alias: `W`, `-WBLOCK`. Skriver ett block, några objekt eller hela ritningen som en ny DWG- eller DXF-fil. `WBLOCK-källa [Block/Hela ritningen/Objekt] <Objekt>`:

- **Objekt**: `Ange infogningens basspunkt` (den blir den nya ritningens origo), `Välj objekt`, sedan `Filformat [DWG/DXF/R12 DXF]` och `Filnamn för den nya ritningen`, sedan `Vad ska göras med objekten [Behåll/Konvertera till block/Ta bort]`. Konvertera ersätter dem med en referens till ett block med filens namn; Ta bort tar bort dem.
- **Block**: `Block att skriva ut`. Blockets egna objekt, med dess basspunkt som origo, även kapslade block.
- **Hela ritningen**: varje objekt i modellutrymmet. Blad skrivs inte; använd {{cmd:SAVEAS}} för en kopia som behåller dem.

Den nya filen innehåller endast de lager, linjetyper, text- och måttstilar och block som dess objekt använder, och ritningens enheter. Versionen av en DWG är den {{cmd:SAVEAS}} senast använde. I webbläsaren laddas filen ner; i Studio öppnas spardialogen.

### ATTDEF

Alias: `ATT`, `DDATTDEF`, `-ATTDEF`; eller {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}. Skriver ut lägena, sedan `Ange ett alternativ att ändra (Enter när klar) [Osynlig/Konstant/Förinställd]`, `Ange attributtaggens namn`, `Ange attributets fråga`, `Ange standardvärde för attributet` (`Ange attributvärde` när det är konstant), `Ange textens startpunkt`, `Ange texthöjd`, `Ange textens rotationsvinkel`. {{cmd:BLOCK}} tar med attributdefinitionerna in i blocket.

### EATTEDIT och ATTEDIT

`EATTEDIT` (`DDATTE`, eller dubbelklicka en referens med attribut; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Välj en blockreferens med attribut`, sedan dialogrutan {{ui:Edit attributes}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): samma referens, sedan `<fråga> (<TAG>) <värde>` för varje attribut; {{key:Enter}} behåller ett värde. Se [Attribut](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Uppdatera attributen för vilket blocks referenser [Namn/Välj/Alla] <Välj>`. Värden behålls; nya attribut får sitt standardvärde, borttagna försvinner, placeringar återställs.

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}. Dialogrutan: block, attribut (tagg, fråga, standardvärde, lägen, ordning), {{ui:Update the references (values kept)}}, {{ui:Apply}}.

### REFEDIT och REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. `REFEDIT`: `Välj blockreferensen att redigera på plats` (eller markeringen). `REFCLOSE`: `Spara ändringarna i ”…” [Spara/Förkasta] <Spara>`; fältets {{ui:Save the block}} och {{ui:Discard}} gör samma sak. Hela redigeringen är ett ångra-steg. Se [Attribut](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT och BCLOSE

`BE`; eller {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}. `Ange blocknamn att redigera <den markerade referensens block>` öppnar blockredigeraren. `BCLOSE` frågar `Stäng blockredigeraren för ”…” [Spara/Förkasta] <Spara>`; bannerns {{ui:Save block}} och {{ui:Discard changes}} gör samma sak. Allt som görs i redigeraren är ett ångra-steg.

### VIEWBASE

Alias: `FLATSHOT`. En platt 2D-vy av solider på fliken 3D: `Vy [Framifrån/Uppifrån/Höger/Vänster/Bak/Undersida/Iso]`, `Dolda linjer [Visa/Dölj]`, en skala (`1:20`, `2:1`; {{key:Enter}} tar den som passar bladet), sedan vyns centrum. En blockreferens, synliga kanter på VIEW-VISIBLE, dolda streckade på VIEW-HIDDEN. Se [Platta vyer på ett blad](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Alias: `-PUBLISH`; eller {{ui:All sheets in one PDF}} i dialogrutan {{ui:Plot to PDF}}. `Blad att plotta [Alla/Några]`: {{key:Enter}} plottar varje blad, `S` frågar efter namn avdelade med kommatecken. En PDF, en sida och ett bokmärke per blad. Se [Alla blad i en PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Alias: `SSM`, `SHEETSETMANAGER`. För dig till avsnittet {{ui:Sheet set}} i den vänstra panelen: blad från många ritningar, numrerade och titlade, deras ritningshuvuden ifyllda från samlingen, publicerade som en PDF. Se [Bladsamlingar](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): välj en DWG eller DXF, sedan dess infogningspunkt. {{cmd:XREF}} (`XR`, `-XREF`): `Länkade ritningar [?/Bifoga/Ladda om/Binda/Koppla bort] (Enter: ?)`; med fler än en länk, välj en av dess referenser eller skriv `N` och dess namn. Se [Länkade ritningar](topic:files#linked-drawings-external-references).

### COUNT

Alias: `BCOUNT`; eller {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}. `Välj en blockreferens att räkna, eller [Alla/Export] (Enter: Alla)`: ett val markerar och räknar varje referens till det blocket i det här utrymmet; {{key:Enter}} eller `A` listar alla; `E` och sedan `C` (antal) eller `A` (attribut) laddar ner en CSV. Se [Räkna block och exportera en förteckning](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Alias: `I`, `DDINSERT`.

- `Ange blocknamn eller [Fil/Bibliotek] <senaste blocket>` (versaler och gemener spelar ingen roll). `F` frågar efter en DWG- eller DXF-fil, sedan hela ritningen eller ett av dess block; ett namn som redan används frågar {{ui:Keep existing}} eller {{ui:Rename}}. `L` öppnar biblioteksfönstret.
- `Ange infogningspunkt [Skala/Rotera]`. `S` frågar `Ange skalfaktor`, `R` frågar `Ange rotationsvinkel`; båda kommer ihåg.
- När blocket redan står bredvid objekt som upprepas någon annanstans utan det, säger en rad hur många platser som föreslås och frågan får `suGgested`: `G` visar dem; klicka nära en för att placera blocket där, `A` för alla, {{key:Enter}} för att gå tillbaka. De tar grannarnas rotation och standardvärden för attribut. Ritningar med över 20 000 objekt i det öppna utrymmet söks inte.
- Sedan `Ange <fråga> (<TAG>) <standard>` för varje attribut blocket frågar efter. Se [Blockattribut](topic:attributes).

### LIBRARY

Alias: `LIB`. Öppnar biblioteksfönstret: placera objekt, leta efter uppdateringar, biblioteksbidrag. Inga frågor. Se [Infoga från en fil eller biblioteket](topic:insert-from-file-and-library).

### STEELMEMBER

Alias: `SMEMBER`; eller {{ui:3D member}} på bibliotekets flik {{ui:Standard}}. `Profilstorlek <W12x26>` (som fliken listar den), sedan `Startpunkt [Pelare]` och `Slutpunkt`: en solid balk på fliken 3D mellan de två punkterna, stående på marken. `C` frågar efter pelarens basspunkt och dess höjd. Ett ångra-steg. Se [Placera stålprofiler och standarddelar](topic:steel-and-standard-parts).

### PARTSLIST

Alias: `PLIST`. `Övre vänstra hörnet på delförteckningen`, sedan `Texthöjd <2.5>`: ritar en tabell över varje standarddel och stålprofil placerad från biblioteket (artikelnummer, antal, del, standard, storlek, längd, material, massa). Ett ångra-steg. Se [Placera stålprofiler och standarddelar](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Alias: `PU`. Tar bort blockdefinitioner som inget använder. Inga frågor.

### DELBLOCKS

Eller {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}. `Välj block att ta bort [Namn/eXit]`: välj en blockreferens, eller `N` för listan med block med ett filter (välj flera), eller `X` / {{key:Enter}} för att avsluta. Varje referens försvinner — i modellen, på varje blad och inuti andra block — sedan definitionen, och kommandoraden säger vad som togs bort och vad som inte kunde tas bort. Namnlösa block och länkade ritningar erbjuds inte. Frågan kommer tillbaka för nästa block; hela kommandot är ett ångra-steg.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} klistrar in det du kopierade ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) som ett block: välj infogningspunkten och en referens till ett nytt block läggs dit, markerad. Blocket får ett eget namn (`A$C` och ett nummer); {{cmd:RENAME}} ger det ditt. Ett ångra-steg tar bort referensen och blocket.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} frågar efter blocket att ersätta och blocket att sätta i dess ställe (`?` listar blocken), och ändrar sedan varje referens i modellen, på varje blad och inuti andra block. Varje referens behåller sin plats, skala, rotation, lager och värdena för attribut som båda blocken har; attribut som bara det nya blocket har börjar på sina standardvärden, och den säger vilka värden som släpptes. När inget längre använder det gamla blocket erbjuder den att ta bort det. Den vägrar länkade ritningar och en ersättning som skulle lägga ett block inuti sig självt. Ett ångra-steg.

### MINSERT

{{cmd:MINSERT}} placerar ett block i rader och kolumner: blocknamn, infogningspunkt, skala, rotation, antal rader och kolumner, och avstånden mellan dem. Hela uppsättningen vrids med rotationen. Varje är en egen referens (högst 10 000), så vilken som helst kan flyttas eller raderas efteråt.

### BLOCKSPALETTE

Alias: `BLOCKSPAL`; eller {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}. Visar panelen {{ui:Blocks}} med markören i dess filter. Varje block har en liten bild; de som placerades senast kommer först. De två knapparna bredvid filtret växlar mellan en lista och ett rutnät med bilder. Klicka en bild (eller {{ui:Insert}}) för att placera blocket med {{cmd:INSERT}}, eller dra det till ritningen för att placera det där du släpper det.

{{ui:Libraries}}, under listan: {{ui:Add a drawing}} tar en egen DWG- eller DXF-fil och listar dess block med bilder, och hela ritningen som ett block. Att placera ett kopierar dess definition (och de block den kapslar, och deras lager) in i den här ritningen, som alternativet `Fil` i {{cmd:INSERT}} gör; ett block som redan finns här med samma definition används utan fråga, ett med samma namn som skiljer sig frågar {{ui:Keep existing}} eller {{ui:Rename}}. I en webbläsare finns filen kvar tills sidan stängs. I CadCraft Studio listar {{ui:Add a folder}} ritningarna i en mapp, var och en öppnad när du klickar på den, och filer och mappar kommer ihåg. Det lilla x:et tar bort ett bibliotek från listan; filen rörs inte. Det delade {{ui:Library}} är något annat: se [Infoga från en fil eller biblioteket](topic:insert-from-file-and-library).

### BCONVERT

Eller {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}. Hittar geometri som upprepas och gör varje kopia till en referens till ett block.

- `Välj objekten som upprepas, eller [Block]`: objekten i en kopia. `B` anger ett befintligt block i stället, för att hitta lösa kopior av dess objekt.
- `En kopia får vara: speglad = Nej, skalad = Nej; lager, färg, linjetyp och linjetjocklek = Matcha … [Speglad/Skalad/Egenskaper]`: `M`, `S` och `P` växlar vad som räknas som kopia; {{key:Enter}} söker. Inställningarna kommer ihåg.
- `Namn på det nya blocket <Block1>`, sedan `Ange blockets basspunkt` ({{key:Enter}} tar markeringens nedre vänstra hörn).
- Den säger hur många andra uppsättningar objekt som har samma geometri, markerar allt den skulle ersätta, och frågar `Ja/Nej`.

En kopia är samma objekt flyttade och vridna i valfri vinkel (och speglade eller skalade med en faktor när de är på): varje objekt måste ha sin motsvarighet, med en miljondel av markeringens storlek som tolerans. Varje referens får sin egen rotation och skala (en speglad en en negativ Y-skala), och lagret som dess objekt delade. Objekt på låsta lager lämnas och räknas. Den söker i det öppna utrymmet (modellen eller det öppna bladet). En mycket stor sökning stannar vid en arbetsgräns och säger det. Ett ångra-steg.

### BSEARCH

Eller {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}. `Hitta block efter [Namn/Attribut/Geometri] <Namn>`:

- `N`: en del av ett blocknamn, eller ett mönster med `*` och `?`. Listar varje block med dess referenser här och i hela ritningen.
- `A`: ett attributvärde, eller `TAG=värde`. Listar de block vars referenser har det, med de värden som hittades. Konstanta attribut räknas.
- `G`: välj objekt, eller en blockreferens, så listas de block vars form är minst 85 % lika, bäst först. Storlek, rotation och spegling räknas inte. Måttet jämför avstånden mellan punkter utspridda längs konturerna, så det hittar liknande former; använd {{cmd:BCONVERT}} för att hitta exakta kopior.

Referenserna som hittas i det öppna utrymmet markeras, redo för nästa kommando.

### BREPLACE

Eller {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}. `Ersätt [Markerade/Alla]`: `S` ersätter de blockreferenser du väljer med blocket du anger; `A` frågar efter ett block och dess ersättning och ändrar varje referens, som {{cmd:BLOCKREPLACE}} gör (samma kod). En referens behåller sin plats, skala, rotation, lager och värdena för attribut som båda blocken har; värden som det nya blocket inte har plats för tas bort och namnges. `?` listar blocken. Ett ångra-steg.

### DATAEXTRACTION

Alias: `EATTEXT`, `DX`; eller {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}. Listar block, deras attribut och objektegenskaper som en tabell eller en CSV-fil.

- Arbetar på markeringen, eller frågar `Välj objekt (Enter: allt i det här utrymmet)`.
- `Lista: [Block/Objekt/Alla]` när markeringen innehåller båda. Namnlösa block, tabeller och stycklistor listas aldrig.
- Den skriver ut kolumnerna att välja mellan (namn, typ, lager, X, Y, rotation, skala, längd, area, färg, linjetyp, utrymme, och en per attributtagg), sedan `Kolumner, med namn eller nummer med kommatecken emellan`. {{key:Enter}} tar de markerade: namnet och varje attribut för block; typ, lager och längd för objekt.
- `Lägg identiska rader tillsammans med en räkning? [Ja/Nej] <Ja>`, sedan `Lägg listan i en: [Tabell/Csv] <Tabell>`. En tabell är en vanlig tabell ({{cmd:TABLEDIT}} redigerar den) och är inte levande: kör kommandot igen när ritningen ändras.
- Den vägrar en kolumn som inte finns i listan. En tabell rymmer 1 999 datarader; en CSV-fil tar alla.

### COUNTTABLE

Räknar blockreferenserna i markeringen (eller i det öppna utrymmet) och lägger antalen i en tabell (`Block`, `Antal`) eller en CSV-fil. För ett antal som följer ritningen av sig själv, se {{cmd:BOMTABLE}}.

## Blad och plottning

### LAYOUT

Alias: `LO`, `NEWLAYOUT`; eller {{ui:+}}-knappen under ritningen. Ett nytt blad med ram, ritningshuvud och en vyport, på ISO A3 (eller Tabloid för ritningar i tum eller fot). Inga frågor.

### MVIEW

Alias: `MV`. Endast på ett blad ({{cmd:VPORTS}} på ett blad gör detsamma).

- `Ange vyportens hörn [Polygonal/Objekt]`, `Ange motsatt hörn`. Vyporten visar hela modellen i en standardskala.
- `P` (Polygonal): klicka hörnen på konturen (`Ångra`, `Stäng`), {{key:Enter}} när du är klar. Den vägrar färre än tre hörn.
- `O` (Objekt): `Välj ett slutet objekt för vyportens kontur`: en sluten polylinje, en cirkel eller en ellips på bladet. Vyporten tar dess form (kurvor som korta raka bitar); objektet lämnas som det var. Den vägrar ett objekt som inte är slutet.

### VPCLIP

Klipper en vyport som redan finns på bladet. `Välj vyport att klippa` (eller markera den först), sedan `Välj objektet att klippa till [Polygonal/Ta bort]`:

- Klicka en sluten polylinje, cirkel eller ellips, eller {{key:Enter}} (eller `P`) för att klicka hörnen på en polygon.
- `D` (Ta bort, erbjuds när vyporten är klippt) gör den till en rektangel igen: rutan runt konturen den hade.
- Det vyporten visar rör sig inte på papperet, och dess skala består. Modellen ritas och plottas endast inne i konturen, och ramen följer den. Ett ångra-steg.
- En klippt vyport har ett grepp vid varje hörn på sin kontur, utöver sitt centrum och de fyra hörnen i sin ruta (att dra ett rutahörn sträcker konturen med det). Egenskaper visar Kontur: Rektangel, eller Klippt med antalet hörn.
- DWG- och DXF 2000-filer behåller konturen för CadCraft. Andra program öppnar vyporten som rektangeln runt den; DXF R12 behåller endast rektangeln.
- På fliken för modellen säger den att vyportar finns på blad.

### VPORTS

Alias: `VIEWPORTS`. {{cmd:SPLIT}} är detsamma även från ett blad, och {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} kör det. På modellen: `Ange antal rutor [SIngle/2/3/4] <3>`; `2` frågar `[Vågrätt/Lodrätt] <Lodrätt>` (Lodrätt = sida vid sida), `3` frågar `[Vänster/Höger] <Höger>` (var den stora rutan hamnar). Varje ruta behåller sin egen vy och sitt eget utrymme; ett klick gör en ruta aktiv. På ett blad är det {{cmd:MVIEW}}. Se [Dela skärmen](topic:split-screen).

### VPVIEW

Ingen alias. Endast på ett blad.

- `Välj vyport` (hoppas över om en är markerad), sedan på modellen: `Ange första hörnet på fönstret att visa`, `Ange motsatt hörn`.

### UCS

Ingen alias. Ett koordinatsystem av egen tillverkning; inte en redigering. `Ange UCS-origo [NAmngiven/OBjekt/Föregående/Värld/Z/3punkt] <Värld>`: en punkt är en ny origo, sedan `Ange punkt på X-axeln (Enter behåller vinkeln)`. `Z`: `Ange rotationsvinkel kring Z-axeln <90>`. `3`: origo, en punkt på den positiva X-axeln, en punkt på den positiva Y-sidan. `OB`: `Välj objekt att rikta in UCS mot`. `NA`: `[Återställ/Spara/Ta bort/?]` och ett namn. Vyn vrids så att den nya X-axeln ligger plant. Se [Vrid vyn och använd egna koordinater](topic:ucs-and-turned-view).

### PLAN

Ingen alias. `Ange ett alternativ [Aktuell ucs/Ucs/Värld] <Aktuell ucs>`: vrider den aktiva rutans vy så att UCS:ens X-axel (eller världens) ligger plant. Inget i ritningen flyttas.

### TURNLEFT, TURNRIGHT, TURNWORLD

Ingen alias; eller {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}. Samma som `UCS Z -90`, `UCS Z 90` och `UCS W`, med vyn som följer.

### VPLAYER

Ingen alias. På ett blad, eller inne i en vyport. `Ange ett alternativ [?/Frys/Tina/Återställ/Vpvisdflt]`: `F`, `T`, `R` frågar efter lagernamn (kommatecken, jokertecknen `*` och `?`), sedan [Alla/Välj/Aktuell] <Aktuell> vyportar; Återställ sätter varje lager tillbaka till sitt standardvärde ”fryst i nya vyportar”; `V` ställer in det standardvärdet (`[Fryst/Tinad]`), som {{cmd:MVIEW}} använder. `?` listar lagren som är frysta i den aktuella vyporten. Kolumnen för vyportar i panelen Lager gör detsamma för en vyport. Se [Frys ett lager i en vyport](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Alias: `MS`; eller dubbelklicka inne i en vyport. Endast på ett blad. Arbeta på modellen genom en vyport: den som är markerad, den enda på bladet, eller `Klicka inuti vyporten att arbeta i`. Panorering och zoom inne i den ändrar vyportens vy (en vy med låst skärm behåller den och bladet flyttas i stället); den nya vyn skrivs som ett ångra-steg. Se [Arbeta på modellen genom en vyport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Alias: `PS`; eller dubbelklicka utanför vyporten, eller klicka en flik under ritningen. Tillbaka till bladet.

### PLOT

Alias: `PRINT`, `PUBLISH`, `EXPORTPDF`; eller {{key:Mod+P}}. Öppnar dialogrutan {{ui:Plot to PDF}}. Se [Plotta till PDF](topic:plot-pdf).

### PLOTSTYLES

Alias: `STYLESMANAGER`, `PSTABLES`; eller {{ui:Edit tables…}} i dialogrutan {{ui:Plot to PDF}}. Öppnar {{ui:Plot style tables}}: vad varje färg skrivs ut som (färg, grå, bläck, linjetjocklek), sparas med ritningen. Se [Plottstilstabeller](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} flyttar objekt mellan ett blad och modellen genom en vyport, skalade och vridna så att de ser likadana ut från andra sidan. På ett blad: markera objekt så går de till modellen (välj vyporten när bladet har fler än en). Medan du arbetar på modellen genom en vyport ({{cmd:MSPACE}}) kommer de markerade objekten till bladet. Den säger hur många gånger större eller mindre de blev. Vyportar stannar på sitt blad. Ett ångra-steg.

### ISODRAFT

{{cmd:ISODRAFT}} slår isometrisk ritning `ON` eller `OFF`, eller går direkt till planet `Left`, `Top` eller `Right`. Medan den är på: Ortho ({{key:F8}}) håller linjer längs planets två axlar (vänster: 90° och 150°; topp: 30° och 150°; höger: 30° och 90°), polär spårning ({{key:F10}}) följer samma axlar, fångst till rutnät ({{key:F9}}) använder det isometriska rutnätet, och rutnätet ({{key:F7}}) ritas med linjer vid 30°, 90° och 150°. {{cmd:ELLIPSE}} får `Isocirkel`: ange ett centrum och en radie (eller `Diameter`) och den ritar ellipsen som en cirkel visar sig som i det aktuella planet. Ritningen förblir platt: dessa är hjälpmedel för att rita en bildlik vy, inte en 3D-modell. Inställningen gäller för den här sessionen och sparas inte i filen.

### ISOPLANE

{{cmd:ISOPLANE}} väljer planet isometrisk ritning arbetar på: `Left`, `Top` eller `Right`. Enter går till nästa plan. Medan isometrisk ritning är på gör {{key:F5}} detsamma mitt i ett kommando; medan den är av lämnas {{key:F5}} till webbläsaren.

## Förfrågningar

### CAL

Skriver ut värdet av en beräkning, så som det skulle läsas var som helst där en längd skrivs.

- `Uttryck`: skriv det, till exempel `12'6"+3/4"` eller `(24'-0")/3`, och tryck {{key:Enter}}. CadCraft skriver ut `= 12'-6 3/4"   (150.75 ritningsenheter)`. Se [Aritmetik i ett skrivet värde](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Alias: `DI`; eller {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}.

- `Ange första punkten`, `Ange andra punkten`. Skriver ut avstånd, vinkel, delta X och delta Y.

### AREA

Alias: `AA`; eller {{ui:View}} › {{ui:More}} › {{ui:Area}}. Skriver ut arean och omkretsen.

- `Ange första hörnpunkten [Objekt/Lägg till area/Subtrahera area] <Objekt>`
  - Klicka eller skriv hörn; vid `Ange nästa punkt (Enter stänger) [Ångra (U)]` trycker du {{key:Enter}} för att stänga konturen. `U` tar tillbaka det senaste hörnet.
  - {{key:Enter}} eller `O`, sedan `Välj objekt`: en cirkel (skriver ut dess omkrets), en ellips, en polylinje (en öppen stängs med en rak linje för arean, och dess längd skrivs ut) eller en skraffering (hål dras av).
  - `A` (Lägg till area) och `S` (Subtrahera area) håller en löpande summa: frågan börjar med `(ADD-läge)` eller `(SUBTRACT-läge)`, varje area läggs till eller dras av, och `Total area = …` skrivs ut efter varje. I dessa lägen väljer `O` objekt tills {{key:Enter}}, och {{key:Enter}} vid första frågan avslutar kommandot.

### MEASUREGEOM

Alias: `MEA`. `Ange ett alternativ [Avstånd/Radie/Vinkel/ARea] <Avstånd>`; efter varje mätning frågar den igen, med `eXit` som standard.

`Quick` mäter runt pekaren när du flyttar den: avståndet till närmaste objekt åt höger, uppåt, vänster och nedåt (längs den aktuella UCS:ens axlar), ritat när du rör dig, och vinkeln där två av grannarna är raka och möts. Ett klick skriver de fyra avstånden, den fria bredden och höjden och vinklarna till historiken; Enter går tillbaka till alternativen. Den läser det som finns på skärmen.

- `D`: två punkter, som {{cmd:DIST}}.
- `R`: `Välj båge eller cirkel`; skriver ut radien och diametern.
- `A`: en båge (dess omslutna vinkel), en linje och sedan en andra linje (vinkeln mellan dem, mot deras långa ändar), eller {{key:Enter}} och tre punkter (hörn, sedan de två ändarna).
- `AR`: som {{cmd:AREA}}, en area.

### ID

Ingen alias. `Ange punkt`; skriver ut dess X och Y.

### LIST

Alias: `LI`, `LS`. `Välj objekt`; skriver ut varje objekts typ, lager och huvudmått.

### MASSPROP

{{cmd:MASSPROP}} ger tvärsnittsegenskaperna för de regioner och slutna objekt du väljer, sammantagna: area, omkrets, omslutande ruta, tyngdpunkt, tröghetsmoment kring X- och Y-axlarna genom origo, tröghetsprodukten, tröghetsradier, samma moment kring tyngdpunkten, och huvudmomenten med riktningarna för deras axlar. Hål i en region räknas som hål. Siffrorna är i ritningsenheter och exakta för konturer av linjer och bågar; ellipser och splines mäts som korta raka segment, och det säger det. Efter rapporten frågar den om den ska skrivas till en textfil. Objekt som inte är slutna lämnas utanför, och den säger hur många.

## Vy, fil och övrigt

### ZOOM

Alias: `Z`.

- `Ange hörn på fönster, ange en skalfaktor (nX) [Utsträckning/Alla/Fönster/Föregående/Skala/Centrum]`. Klicka två hörn för ett fönster. `E`, `A` eller Enter: hela ritningen.
- `P` (Föregående, eller {{ui:Previous}} i verktygsfältet) går tillbaka till vyn före, upp till 10 vyer per flik; en serie hjulsteg eller en panorering räknas som en vy.
- Ett tal som `2`, `2x` eller `0.5x` (eller `S` och sedan talet) zoomar in eller ut med den faktorn runt mitten av skärmen.
- `C` frågar `Ange centrumpunkt` och `Ange höjd eller förstoring (nX)`.

### PDFATTACH, PDFIMPORT och PDF-kommandona

Alias: `PDFATT` för {{cmd:PDFATTACH}}, `PDFIM` för {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} placerar en PDF-sida under ritningen (fil, sida, infogningspunkt, skala, rotation); {{cmd:PDFIMPORT}} gör en sidas linjer, kurvor, fyllningar och text till ritningsobjekt på lager med namn efter PDF:en, i verklig storlek, en angiven skala, eller skalade från två punkter och ett verkligt avstånd. {{cmd:PDFCLIP}} klipper ett underlägg, {{cmd:PDFADJUST}} anger tonning, kontrast, monokrom eller stänger av det, {{cmd:PDFLAYERS}} slår PDF:ens egna lager på och av, och {{cmd:PDF}} ger CadCraft filerna som en ritnings underlägg använder igen. Se [PDF-underlägg](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Automatisk komplettering i ritningen: när inget kommando körs visar ett grått spöke vad ritningens egna mönster säger kommer härnäst. {{cmd:AUTOCOMPLETE}} slår den `On` eller `Off` (även Inställningar › CadCraft) eller `Show`ar vad den skulle föreslå nu. **Tab** ritar spöket som ett ångra-steg, **Esc** avfärdar det tills ritningen ändras. Den hittar tre saker i de nyaste objekten: nästa kopia av något som ritats två gånger eller fler med ett jämnt steg (pelare, reglar, en trappas stegsteg och trädsteg), nästa steg i en polylinjetrappa, och den saknade sidan av ett rum eller en väggkedja. Mitt i {{cmd:LINE}} eller {{cmd:PLINE}} är spöket **nästa punkt**: nästa steg i en trappa (stegsteg, trädsteg, stegsteg…), det fjärde hörnet i en rektangel, punkten som stänger den, eller ytterligare ett lika steg. För markören nära den och tryck **Tab**, som om du klickat där; fortsätt eller tryck Enter. Räknas ut på den här datorn med regler, utan någon modell.

### AUTOSHEET

Alias: `ASH`. Blad som lägger ut sig själva. {{cmd:AUTOSHEET}} tar ritningens delar (dina namngivna vyer, eller de separata delarna av modellen, eller hela modellen), väljer en pappersstorlek (eller den du anger), ger varje del en standardskala (en skala för alla, eller den största var och en klarar) och placerar vyerna i rader på nya blad med ett ritningshuvud och en bildtext (namn och skala) under varje. Det som inte ryms på ett blad får ett eget blad. Ett ångra-steg. Räknas ut på den här datorn med regler, utan någon modell.

### PHOTOSKETCH

Alias: `PSK`. Fotoskiss till ritning. Välj ett foto (JPEG, PNG eller TIFF) av en handskiss på ett pappersark. {{cmd:PHOTOSKETCH}} hittar arkets fyra hörn, räta upp perspektivet, tar den pappersstorlek du anger (`Paper`, eller den närmaste standardstorleken) och skissens `Scale` (1 : n), och spårar sedan pennlinjerna till linjer, bågar och cirklar, med ett lager för varje pennfärg (svart, röd, blå, grön). Om den inte hittar papperets kant tar den hela fotot som bladet och säger det. Text lämnas bort. Ett ångra-steg. Görs på den här datorn med klassisk bildbehandling, ingen modell, inget skickas någonstans. Se även kommandona för skannade ritningar.

### AUTODIM

Alias: `ADIM`. Automatisk måttsättning efter regler. {{cmd:AUTODIM}} måttsätter de markerade objekten (eller hela ritningen) utifrån deras nivå- och lodkanter: en kedja av mått längs de sidor du väljer (`Sides`), ett totalmått utanför den, bredden på varje öppning (ett gap mellan kollinjära väggar), en diameter för varje hålstorlek, och med `Grid` avståndet mellan rutnätslinjerna. Ett mått som redan finns görs inte igen. Ett ångra-steg. Räknas ut på den här datorn med regler, utan någon modell.

### GRIDMOVE

Alias: `GM`. Att flytta en rutnätslinje tar med sig resten. {{cmd:GRIDMOVE}} flyttar en rutnätslinje (en linje på ett lager vars namn säger grid eller axis) och det som hänger på den: väggar med en ände på linjen sträcks för att följa den, väggar längs den flyttas hela, pelare (blockreferenser och cirklar på linjen), dess bubbla och tagg flyttas, och mått vars punkter ligger på den mäter det nya avståndet. Ge två punkter (endast den del som går tvärs linjen räknas) eller `Distance`. Ett ångra-steg tar tillbaka allt. Görs med regler på den här datorn.

### DETAILS

Alias: `DET`. Detaljer som hittar dig. {{cmd:DETAILS}} håller ditt företags egna detaljer: `Add` lägger ett block från den här ritningen i listan, `List` och `Remove` hanterar den, och `Find` rangordnar dem för det som är markerat (eller för det du ritade senast) efter orden på dess lager, blocknamn, skrafferingsmönster och anteckningar mot varje detaljs namn och anteckningar, så att en fönsteröverstycke hittar din fönsterbleck. Välj ett nummer och en punkt för att placera det. Med `Hint` på (även Inställningar › CadCraft) ger markering av något en detalj matchar en rad i statusfältet. Listan sparas i den här webbläsaren, på den här datorn, och den listan är den som söks. `Share` lägger den även i din mapp Dokument (`.cadcraft/firm-details.json`, med varje blocks ritning): `Pull` lägger till det ditt team har och du saknar, `Push` lägger till det du har och de saknar, `Both` gör båda, och ingenting tas någonsin bort från någon sida. Öppna mappen Dokument först ({{cmd:DOCUMENTS}}); när den mappen är en Team Cloud Plan-mapp delar hela teamet en lista. Ett detaljobjekt i panelen Bibliotek har en knapp **Lägg till i mitt företags detaljer** som lägger det i samma lista. Räknas ut på den här datorn med ord, utan någon modell.

### SKETCHFIX

Alias: `SKF`. Penn-skisser blir exakt geometri. Tryck och dra ett frihandsstreck i taget (penna, mus eller finger), sedan Enter. Varje streck läses som en linje, cirkel, båge, rektangel eller polylinje: nästan vågräta och lodräta linjer görs exakt vågräta och lodräta, ett stängt runt streck blir en cirkel, ett stängt streck med fyra räta hörn en rektangel, och strecken ändar dras ihop och till de ändar som redan finns i ritningen. Ett ångra-steg. Räknas ut på den här datorn med regler, utan någon modell.

### SCANATTACH och kommandona för skannade ritningar

Alias: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} har ingen. De arbetar på en bild, ett ångra-steg var. {{cmd:SCANATTACH}} infogar en PNG, JPEG, TIFF (en sida eller alla) eller en PDF-sida som är en bild. {{cmd:SCANSCALE}} skalar bladet från två valda punkter och det verkliga avståndet. {{cmd:SCANALIGN}} flyttar och vrider det mot två punkter (`Skala bladet så att det passar` Ja/Nej). {{cmd:SCANDESKEW}} visar vinkeln på bladets långa linjer och vrider bladet när du `Accept` eller anger ett `Value`. {{cmd:SCANCLEAN}} gör det svartvitt (`Threshold` Auto/Adaptive/Level, `Specks`) och `Run`. {{cmd:SCANCROP}} behåller ett fönster. {{cmd:SCANERASE}} raderar en `Rectangle`, `Polygon` eller `Lasso`. {{cmd:SCANTRACE}} följer linjer och bågar till ett nytt lager (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) och rapporterar vad den hittade och vad den lämnade som raster. {{cmd:SCANINFO}} listar den ursprungliga filen och stegen. {{cmd:RASTERSNAP}} slår fångst till linjerna på skannade blad På eller Av. Se ämnet Skannade ritningar och spårningen.

### REGEN och REGENALL

Alias: `RE` för {{cmd:REGEN}}, `REA` för {{cmd:REGENALL}}. Bygger om det som ritas på skärmen från ritningen: {{cmd:REGEN}} fliken du tittar på (på ett blad även modellen dess vyportar visar), {{cmd:REGENALL}} varje flik, varje delad skärmruta och varje öppen ritning. Använd dem när bilden ser gammal ut efter en skriptad eller mycket stor ändring, eller om en assistent redigerat ritningen; ritningen i sig rörs inte, så det finns inget att ångra.

### NAMEDVIEW

Alias: `NV`, `VIEWS`. `Ange ett alternativ [?/Återställ/Spara/Fönster/Ta bort] <Återställ>`, sedan vyns namn. `S` sparar vyn på skärmen, `W` ett fönster du väljer, `R` visar en sparad vy, `D` tar bort en, `?` listar vyerna på fliken. Att spara under ett befintligt namn ersätter den; varje ändring är ett ångra-steg. Vyer hör till fliken de sparades på. DWG- och DXF-filer behåller dem (VIEW-tabellen); ett bladets vyer kommer tillbaka på det första bladet, eftersom filen inte säger vilket.

### UNDO och REDO

Alias: `U` för {{cmd:UNDO}}; {{cmd:REDO}} har ingen. Även {{key:Mod+Z}} och {{key:Mod+Y}}.

### LAYER

Alias: `LA`. Hoppar till panelen {{ui:Layers}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Ange linjetyp för nya objekt` — `ByLayer`, `ByBlock` eller ett namn (`?` listar dem: Continuous, ritningens egna, och DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE med sina storlekar `2` (halv) och `X2` (dubbel)). {{cmd:LWEIGHT}} (`LW`): linjetjockleken för nya objekt i mm, eller `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): ritningens linjetypsskala (ångringsbar). {{cmd:LWDISPLAY}} (`LWT`): `Visa linjetjocklekar [ON/OFF]` — samma som knappen {{ui:LWT}} i statusfältet. Se [Linjetjocklekar och linjetyper](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Ange objekttyp att byta namn på [LAyer/Block]`, `Ange gammalt namn`, sedan det nya namnet; objekt eller referenser följer med. {{cmd:LAYMRG}}: `Välj objekt på lagret att slå ihop eller [Namn]` tills {{key:Enter}}, sedan `Välj objekt på målagret eller [Namn]` och `Y`. {{cmd:LAYDEL}}: `Välj objekt på lagret att ta bort eller [Namn]`, sedan `Y`: lagret och varje objekt på det försvinner (inte lager 0, DEFPOINTS eller det aktuella lagret). Ett ångra-steg vardera. Se [Ordna en ritning med lager](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Lager genom att välja objekt; även i menyn {{ui:Tools}} i panelen {{ui:Layers}}. {{cmd:LAYISO}}: `Välj objekt på lagret/lagren att isolera`, sedan {{key:Enter}}: varje annat lager stängs av. {{cmd:LAYUNISO}} slår på dem igen. {{cmd:LAYOFF}} och {{cmd:LAYFRZ}}: `Välj ett objekt på lagret att stänga av` (eller frysa), om och om igen; `U` tar tillbaka det senaste, {{key:Enter}} avslutar. {{cmd:LAYMCUR}}: `Välj objekt vars lager ska bli aktuellt`. {{cmd:LAYON}} slår på alla lager, {{cmd:LAYTHW}} tinar alla lager. Varje kommando är ett ångra-steg. Se [Ordna en ritning med lager](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} startar en tom ritning och {{cmd:OPEN}} öppnar en DWG eller DXF, var och en i sin egen flik över ritningen (en orörd ny ritning används i stället för en ny flik). Att stänga en flik med osparade ändringar frågar först. Se [Dela skärmen](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, även {{key:Mod+S}}) laddar ner en kopia i ritningens format: DWG om den öppnades från en DWG, DXF om från en DXF. En ny ritning använder det format som senast valdes i Spara som i den här webbläsaren, annars DWG.

{{cmd:SAVEAS}} (även {{key:Mod+Shift+S}}) öppnar dialogrutan {{ui:Save a copy as}}: välj {{ui:DWG}} (och dess {{ui:Version}}), {{ui:DXF R12}} eller {{ui:DXF 2000}}, sedan {{ui:Save}}. Valet gäller för den här ritningen och för nya ritningar i den här webbläsaren.

{{cmd:DXFOUT}} laddar alltid ner en DXF R12-kopia, utan att ändra det format {{cmd:SAVE}} använder.

Se [Filer: vad som öppnas, vad som sparas](topic:files#saving).

### TOUR

Alias: `TUTORIAL`. Startar den sexstegs första ritningsrundturen igen. Se [Komma igång](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Alias: `TBDOCK`. `Verktygsfältets position [Överst/Nederst/Vänster/Höger]`. Se [Inställningar](topic:settings#toolbar-position).

### COMMANDLINE

Alias: `CMDLINE`. `Kommandorad [Dockad längst ner/Frigjord/En rad/Visade historikrader/Kommandohistorik (F2)]`: dockar eller frigör kommandoraden, gör den till en rad, frågar hur många historikrader som ska visas (0 till 12), eller öppnar historiken. Se [Inställningar](topic:settings#command-line).

### TOPAREA

`Toppområde [Standard/Kompakt]`: fälten ovanför ritningen som de var, eller kompakta. Se [Inställningar](topic:settings#top-area).

### POLARANG

`Ange steg för polär vinkel i grader <90>`: steget som {{ui:Polar}}-spårningens linjer riktas in på (mer än 0, upp till 180). Sparas i den här webbläsaren.

### UNITS

Alias: `UN`. Hur längder skrivs och anges.

- `Ange längdformat [Vetenskaplig/Decimal/Teknisk/Arkitektonisk/Bråk] <aktuell>`
- Arkitektonisk och Bråk: `Ange nämnare för minsta bråk att visa (1, 2, 4, 8, 16, 32, 64, 128 eller 256)`. De andra: `Ange antal decimaler (0 till 8)`.

Nya mått följer det. Ett ångra-steg. Samma som {{ui:Length format}} och {{ui:Precision}} i {{ui:Current settings}}; se [Fot och tum](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Alias: `GDS`. Visa en IC-layout (en GDSII-strömfil): labbförsök, endast för visning och mätning.

- En filväljare tar en `.gds`-fil; med flera övre celler, `Ange den övre cellen att rita`.
- Varje lager och datatyp blir ett ritningslager (`GDS 1`, `GDS 2/5`), referenser och matriser placeras platt, i filens användarenhet (vanligtvis mikrometer). Ett ångra-steg. Ingenting simuleras eller kontrolleras, och filen skrivs inte tillbaka.

### DIAGRAM

Alias: `TEXTDIAGRAM`, `T2D`. Ett diagram från text.

- En ruta tar texten (eller en rad med `;` mellan satser på kommandoraden): ett Mermaid-flödesschema, ett PlantUML-komponentdiagram, D2 eller en från-till-lista.
- `Ange det övre vänstra hörnet av diagrammet`, sedan `Ange texthöjden`.

Block och kopplingar är vanliga objekt på lagret `Diagram`, markerade när den är klar. Ett ångra-steg. Se [Rita ett diagram från text](topic:text-to-diagram).

### OLELIST

Alias: `OLES`. De OLE-objekt en DWG bär på som CadCraft inte kan placera själv.

- Listar varje ett: nummer, typ, storlek, och om det sparade en bild.
- `Ange ett alternativ [Placera/eXit] <eXit>`: Placera frågar efter numret, det nedre vänstra hörnet och bredden, och ritar en ram med bilden. Ett ångra-steg; det sparade objektet ändras inte. Se [Bilder](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Alias: `SHX`. Dina egna SHX-typsnitt.

- `Ange ett SHX-typsnittsalternativ [Mapp/Filer/Lista/Ta bort/Vänd/Rensa] <Lista>`

{{ui:Folder}} läser varje `.shx` i en mapp (CadCraft Studio; på nytt vid varje start), {{ui:Files}} tar valda filer (webbläsaren), {{ui:Reverse}} lägger ut ett typsnitts bokstäver baklänges. Textstilar som anger ett inläst typsnitt ritas med det. Se [Rita text med egna SHX-typsnitt](topic:shx-fonts).

### LIMITS

Hur stor ritningen är tänkt att vara.

- `Ange nedre vänstra hörnet eller [ON/OFF] <aktuell>`: en punkt, `ON` eller `OFF`.
- `Ange övre högra hörnet <aktuell>`.

Rutnätet fyller gränserna, {{cmd:ZOOM}} Alla visar dem, och med dem ON avvisas en punkt utanför (`**Utanför gränserna`). Ett ångra-steg; sparas i DWG och DXF. Se [Ange ritningens gränser](topic:drawing-limits).

### AUNITS

Alias: `ANGUNITS`. Hur vinklar visas och skrivs.

- `Ange vinkelformat [Decimalgrader/Grader-minuter-sekunder/Lantmäterbäringar] <aktuell>`
- `Ange antal decimaler (0 till 8)`, eller för de två andra `Ange precision` (0 grader, 2 minuter, 4 sekunder, 5 till 8 decimaler av en sekund).

Ett ångra-steg; sparas i DWG och DXF. Samma som {{ui:Angle format}} i {{ui:Current settings}}. Se [Skriv och visa bäringar och vinklar](topic:bearings-and-angles).

### APPLOAD

Alias: `AP`; eller {{ui:View}} › {{ui:More}} › {{ui:Load application…}}. Dialogrutan {{ui:Load applications}}: läs in `.lsp`-rutiner och `.dcl`-dialogfiler, ta bort dem, läs in dem igen från historiken, och startsviten. En rutins `(defun c:NAME …)`-kommandon fungerar sedan som vilka andra som helst. Se [Läs in program](topic:load-applications) och [Kör LISP-rutiner](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (eller {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) öppnar din aliasfil (rader `ALIAS, *COMMAND`); {{ui:Save}} tillämpar den. {{cmd:REINIT}} tillämpar den igen. Se [Redigera kommandoalias](topic:command-aliases).

### LISPEDIT

Alias: `VLIDE`; eller {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}. Öppnar LISP-redigeraren, ett fönster som ligger kvar bredvid ritningen.

- Texten: radnummer, parentesens par vid markören markerat (rött när det saknar ett), {{key:Enter}} indrar den nya raden under den öppna parentesen, {{key:Tab}} skriver två mellanslag, {{key:Esc}} lämnar texten.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): läser varje form, precis som {{cmd:APPLOAD}} gör med filen, och skapar dess `c:`-kommandon. Filen visas i {{cmd:APPLOAD}}s lista.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): utvärderar de markerade formerna, eller formen markören står i.
- {{ui:Stop}}: avslutar en rutin som körs.
- {{ui:Console}}: vad rutinen skrev ut, och varje fel med sin rad; klicka på ett fel för att gå dit. Texten körs en toppnivåform i taget, så raden är formens, eller inne i den raden som anropar funktionen felet anger.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): en `.lsp`-fil. Texten sparas även i den här webbläsaren, så att stängning av fönstret inte förlorar den.
- Bredvid texten: funktionerna rutinen definierar, de den anropar som denna LISP inte har ännu, de den anropar som varken är definierade i den eller inbyggda, och de fullständiga listorna över vad som är inbyggt och vad som inte är det.

En text med en parentes som aldrig stängs, eller en sträng som aldrig slutar, körs inte: raden anges. Det finns ingen steg-för-steg-felsökare, brytpunkter eller bevakningsfönster. Se [Kör LISP-rutiner](topic:run-lisp).

### HELP

Alias: `?`. Skriver ut varje kommando, dess alias och en beskrivning på en rad i kommandoradens historik. Det öppnar inte den här hjälpen: tryck {{key:F1}} eller klicka {{ui:Help}} för det.

## Prompten Välj objekt

Vid varje prompt `Välj objekt`: klicka objekt, dra fönster (vänster till höger) och korsningar (höger till vänster) med två klick, eller tryck och dra ett lasso ({{key:Space}} medan du drar: fönster, korsning, staket), {{key:Shift}}+klick för att ta bort, och tryck {{key:Enter}} för att avsluta. Du kan även skriva `ALL` (allt), `L` (det sista objektet), `P` (Föregående: det som senaste kommandot använde), `F` (Staket: objekt som en linje av punkter korsar; `U` tar tillbaka en punkt), `W` (Fönster), `C` (Korsning), `R` (Borttagningsläge: val tar bort objekt; prompten lyder `Ta bort objekt`) och `A` (Lägg till igen). `?` listar dem. De visas inte i prompten. {{key:Tab}} över överlappande objekt markerar nästa; klicka för att välja det. Se [Välj objekt](topic:select-objects).

### ACCESS

Alias: `AX`. Rita utan syn. {{cmd:ACCESS}} slår Åtkomst på eller av (`On`, `Off`) och växlar fångstljud (`Sound`) och röstkommandon (`Voice`); den säger tillståndet först. Med Åtkomst på läses varje kommando och resultat upp via din skärmläsare, och ritningsytan har en tangentbordsmarkör. Hjälpämnet ”Rita utan syn” har tangenterna.

### DESCRIBE

Alias: `DESC`. Säg vad ritningen innehåller: hur många objekt, av vilken sort, hur stora, hur många lager, vad som är markerat. Läser endast; ändrar ingenting.

### WHEREAMI

Alias: `WHERE`. Säg var markören är, i ritningens enheter.

### NEARBY

Säg vad som ligger nära markören, närmast först, var och en med sitt avstånd och sidan den ligger på.

### SAYSEL

Säg vad som är markerat, en mening per objekt (linjens längd, ändar och vinkel; cirkelns radie och centrum; text så som den är skriven).

### VOICE

Slå talade kommandon på eller av. De känns igen på den här datorn; där webbläsaren inte kan göra det förblir röst av om du inte väljer webbläsarens onlinetjänst i Inställningar.

### TOUCHCROSSHAIR

Alias: `TCX`. Det förskjutna korset för ritning med fingret, så att fingertoppen inte täcker punkten du väljer. Medan den är på väljer ett finger på ritningen inte: det flyttar ett kors som sitter ovanför fingret och åt ena sidan. Objektfångst och spårning följer korset. Att lyfta fingret väljer inget och lämnar korset där det är. För att välja, tryck knappen {{ui:Click}} i ritningens hörn, eller knacka var som helst på ritningen med ett andra finger. Håll {{ui:Click}} medan du flyttar det andra fingret för att dra (ett markeringsfönster, ett lasso, ett grepp). Ett finger som trycks och hålls stilla, eller knappen {{ui:Enter}}, är Enter. Två fingrar panorerar och zoomar som förut. Nära den nedre kanten och den bortre sidokanten drar sig korset in mot fingret, så att varje del av ritningen kan nås. En penna och en mus väljer alltid direkt.

{{cmd:TOUCHCROSSHAIR}} säger tillståndet och frågar `ON`, `OFF`, `Auto` (på endast där ett finger är den enda pekaren, så den är av på en dator med mus), `Distance` (hur långt korset sitter från fingret, 24 till 240 pixlar) eller `Side` (`Left`: uppåt och åt vänster, för högerhanden; `Right` för vänsterhanden; knapparna flyttar till det andra hörnet). Samma val finns i Inställningar › CadCraft, och på en enhet med pekskärm har statusfältet en omkopplare {{ui:Offset crosshair}}. Valen sparas i den här webbläsaren.

### WHOHAS

Säger vem som har en ritning öppen. I CadCraft Studio på en dator skriver öppning av en DWG eller DXF en liten låsfil bredvid den (`Plan.dwg.cclock`: vem, sedan när, vilken version), uppdaterar den varje minut medan ritningen är öppen, och tar bort den när ritningen stängs. Att öppna en ritning som någon annan har öppen säger vem och sedan när, och erbjuder {{ui:Open read-only}} (Spara frågar då efter ett nytt namn), {{ui:Open anyway}} (den andra personen får veta vid nästa uppdatering) eller {{ui:Cancel}}. Att spara över en fil som någon annan har öppen frågar först. Ett lås som inte uppdaterats på fem minuter sägs vara inaktuellt: den andra kopian stängdes utan att spara, eller datorn sover.

{{cmd:WHOHAS}} frågar `Aktuell` (den öppna ritningen), `Fil` (välj en), `Mapp` (välj en mapp: varje ritning i den som är öppen någonstans listas), `Sökväg` (skriv en fullständig sökväg) eller `Namn` (namnet andra ser; ditt kontonamn när du är inloggad). Studio når endast mappar du har valt: för en ritning öppnad från en mapp som aldrig valdes säger den en gång att den inte kan notera ritningen som öppen; `Mapp` väljer mappen, och lås fungerar där från då. Låset är en anteckning för människor, inte en spärr: ett annat program kan fortfarande skriva filen. I en webbläsare finns inga mappar att titta i, och kommandot säger det.

### OVERKILL

Tar bort dubblettobjekt och städar överlappande linjer och bågar, för ritningar som kommer fulla av dubblerade linjer. `Välj objekt att städa upp`, {{key:Enter}}, sedan {{key:Enter}} igen för att städa upp med de visade inställningarna, eller ändra en först:

- `Tolerance`: hur nära två koordinater måste vara för att räknas som samma (0,000001 från början; 0 betyder exakt samma).
- `Ignore`: egenskaper som kan skilja sig mellan två annars lika objekt. Skriv ett namn för att växla det: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, eller `None` / `All`. {{key:Enter}} när du är klar.
- `Overlap`: på eller av. På, då blir överlappande linjer på en rak linje en linje (en linje som ligger inuti en annan raderas helt), och överlappande bågar på en cirkel blir en båge; bågar som sluter ett helt varv blir en cirkel, och en båge som ligger på en cirkel raderas.
- `Ends`: på eller av. På, då blir linjer på en rak linje och bågar på en cirkel som bara möts ände mot ände en bit.

Varje objekttyp kontrolleras för dubbletter: två objekt är dubbletter när deras geometri är densamma inom toleransen och deras lager, färg, linjetyp, linjetypsskala, linjetjocklek, tjocklek, transparens och höjd stämmer (minus de du ignorerar). Linjer och öppna polylinjer matchar även när de ritats åt andra hållet. Det första objektet i ritordningen står kvar och behåller sina egna egenskaper. Kommandot rapporterar hur många objekt det kontrollerade och raderade: dubbletter, överlappande bitar som slogs ihop, bitar som sammanfogades ände mot ände. Ett {{cmd:UNDO}} tar tillbaka allt. Inställningarna gäller tills du stänger ritningsfönstret.

Det lämnar orörda: objekt på låsta lager och dolda objekt. Det slår inte ihop linjer med en höjd (Z) (exakta dubbletter av dem försvinner ändå), och det rör inte segment inne i en polylinje (de tunnas inte), en linje som ligger på en polylinjes segment, och en sluten polylinje ritad åt andra hållet.

### DRAWORDER

Ändrar vilka objekt som ritas framför. `Välj objekt att ordna om`, {{key:Enter}}, sedan `Ovanför objekt`, `Under objekt`, `Främst` eller `Bakåt` ({{key:Enter}} = `Bakåt`). `Ovanför objekt` och `Under objekt` frågar efter referensobjekten: markeringen hamnar precis framför det främsta av dem, eller precis bakom det bakersta. De markerade objekten behåller sin inbördes ordning. Ett ångra-steg. Ordningen sparas med ritningen i DWG och DXF, där det är den ordning objekten skrivs i.

På skärmen ritar CadCraft fyllda områden (heltäckande skraffering, breda polylinjer, masker) först, sedan linjer, sedan text, så att text alltid syns över en fyllning; ritordningen visas bland fyllda objekt och bland bilder. Andra program som öppnar filen ritar varje objekt i den sparade ordningen.

### TEXTTOFRONT

För text, mått och hänvisningar framför allt annat i det öppna utrymmet: `Text`, `Mått`, `Hänvisningar` eller `Alla` ({{key:Enter}} = `Alla`). Ett ångra-steg. Säger det när det inte finns något, eller när de redan är främst.

### HATCHTOBACK

Skickar varje skraffering i det öppna utrymmet bakom allt annat, så att fyllningar slutar täcka linjer och text i den sparade filen. Inga frågor. Ett ångra-steg.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Visar endast de markerade objekten: allt annat i det öppna utrymmet försvinner ur sikte tills {{cmd:UNISOLATEOBJECTS}}. Till skillnad från {{cmd:LAYISO}} arbetar den på de objekt du väljer, oavsett deras lager, och ändrar inget lager. Dolda objekt ritas inte, väljs inte, fångas inte, zoomas inte till och plottas inte, och kommandon som tar `ALL` går förbi dem. Det du ritar medan objekt är isolerade visas som vanligt.

Detta gäller bara sessionen: inget om det sparas med ritningen, det är inte ett ångra-steg, och när du öppnar ritningen igen visas allt. Medan objekt är dolda visar statusfältet en knapp med deras antal; klicka den för att visa dem igen.

### HIDEOBJECTS

Döljer de markerade objekten tills {{cmd:UNISOLATEOBJECTS}}. Samma regler som {{cmd:ISOLATEOBJECTS}}: endast för sessionen, inte sparat, inget ångra-steg.

### UNISOLATEOBJECTS

Alias: `UNISOLATE`, `UNHIDE`. Visar varje objekt som dolts av {{cmd:ISOLATEOBJECTS}} eller {{cmd:HIDEOBJECTS}} igen, och säger hur många som kom tillbaka.

### LAYLOCKFADE

Anger hur objekt på låsta lager ser ut och om ett klick når dem. Den säger det aktuella läget, och tar sedan:

- ett tal från 0 till 90: tonningens mängd i procent (50 från början). 0 stänger av tonningen.
- `ON` eller `OFF`: tonning på eller av, mängden behålls.
- `Pick`, sedan `Yes` eller `No`: får ett klick välja objekt på låsta lager medan inget kommando körs? `No` (standard): de går inte att välja alls. `Yes`: ett klick eller ett fönster väljer dem så att {{ui:Properties}} kan visa dem; de går fortfarande inte att ändra, och ett kommandos egna `Välj objekt` tar dem aldrig.

Objektfångst hittar objekt på låsta lager oavsett. Plottar tonas aldrig. Båda inställningarna är dina, inte ritningens, och finns även i {{ui:Settings}} under {{ui:Locked layers}}.

### BURST

Spränger blockreferenser och behåller vad deras attribut säger. `Välj blockreferenser att spränga`, {{key:Enter}}: varje referens ersätts av blockets objekt, och varje synligt attributs värde blir vanlig text på attributets eget lager (ett attribut på lager 0 hamnar på referensens lager, som blockets andra objekt på lager 0). Osynliga attribut tas bort. Ett block inuti blocket förblir en blockreferens. Ett ångra-steg; den rapporterar hur många referenser som sprängdes och hur många attributvärden som blev text.

Den vägrar en länkad ritning med namn (bind den först, eller kopiera från den med {{cmd:NCOPY}}), och lämnar andra markerade objekt orörda. För blockreferenser ger {{cmd:EXPLODE}} samma objekt; {{cmd:BURST}} tar endast blockreferenser och räknar attributtexten.

### TXT2MTXT

Alias: `T2M`. Sammanfogar enradstexter till en styckestext. `Välj enradstexter att sammanfoga`, {{key:Enter}}, sedan `Stycke` (raderna löper ihop och bryts vid den bredaste radens bredd) eller `Lines` (varje text förblir en egen rad); {{key:Enter}} tar det som användes senast. Raderna ordnas uppifrån och ned, sedan vänster till höger, längs riktningen för den översta texten. Stycket hänger från den översta textens övre vänstra hörn och tar dess höjd, rotation, stil, lager och färg. Ett ångra-steg.

Text som redan är styckestext, tom text och andra objekt i markeringen lämnas, och kommandot säger hur många.

### NCOPY

Kopierar objekt ut ur en blockreferens eller en länkad ritning till ritningen, utan att spränga något. `Välj ett objekt inuti en blockreferens eller en länkad ritning`: objektet närmast valet kopieras där det visas, hur många block djupt det än sitter; välj fler, sedan {{key:Enter}}. Nästa `Basspunkt för att flytta kopiorna`: {{key:Enter}} lämnar dem på plats, eller ange en basspunkt och en andra punkt. Hela kommandot är ett ångra-steg.

En kopia tar det lager den visas på: ett objekt på lager 0 inuti ett block hamnar på lagret för referensen det satt i, och en ByBlock-färg blir referensens färg. Från en länkad ritning blir lagret `Plan|Walls` till `Plan$0$Walls` (namnet som länken ger det), skapat med det länkade lagrets färg, linjetyp och linjetjocklek. Ett attributs värde kopieras som text. Blockreferenser på låsta lager kan inte väljas.

### FLATTEN

Sätter höjden (Z) och tjockleken för de markerade objekten till 0. `Välj objekt att platta till`, {{key:Enter}}. Den plattar även till objekten inuti blockdefinitionerna markeringen använder (och blocken inuti dem), så att varje referens till de blocken ändras; länkade ritningar lämnas som de är. Ett ångra-steg; den rapporterar hur många objekt som ändrades, och säger det när inget hade en höjd eller tjocklek.

Det CadCraft behåller av den tredje dimensionen i en 2D-ritning är: en höjd på cirklar, bågar, ellipser, punkter, text, blockreferenser, skrafferingar, hänvisningar och polylinjer (deras elevation), en höjd vid varje ände på en linje, och en tjocklek på linjer, cirklar, bågar, polylinjer, punkter och text, så som filen hade dem. {{cmd:FLATTEN}} rensar exakt dessa. Den rör inte 3D-modellen på fliken 3D, 3D-ytor eller solider, och ett objekt ritat i ett lutande plan fördes redan in i ritplanet när filen öppnades.

### BREAKLINE

Ritar en linje med brytsymbol, för en vy som skurits av. Den säger den aktuella storleken och förlängningen, sedan `Första punkten på brytlinjen` (eller `Storlek` / `Förlängning` för att ändra dem först), `Andra punkten`, och `Var brytsymbolen sitter`: klicka längs linjen, eller {{key:Enter}} för mitten. Resultatet är en polylinje på aktuellt lager: linjen, som sträcker sig förbi varje punkt med förlängningen, med ett Z-format streck lika högt som storleken och hälften så långt.

`Storlek` och `Förlängning` kommer ihåg som dina inställningar (storleken startar på två gånger måttets texthöjd gånger måttskalan; förlängningen på hälften av storleken). {{key:Enter}} upprepar kommandot.

### AUDIT

Kontrollerar den öppna ritningen efter skador och reparerar den. {{cmd:AUDIT}} tittar på varje objekt i modellen, på bladen och inuti block, samt på lagertabellen, och listar vad den hittar efter typ:

- tal som inte är ändliga eller är orimligt stora;
- objekt utan storlek: en linje utan längd, en cirkel utan radie, en polylinje med en punkt, text utan bokstäver eller höjd, en blockreferens med skala noll;
- objekt på ett lager som ritningen inte har; referenser till ett block som inte finns; text- och måttstilsnamn och linjetypsnamn som inte finns i ritningen;
- block som innehåller sig själva, direkt eller genom andra block;
- objekt som delar ett id, en nyckel eller en filhandtag;
- mått utan de punkter de mäts från, och skrafferingar vars kontur inte är en sluten kontur.

Sedan frågar den `Åtgärda dem? [Ja/Nej]`. `Nej` ändrar ingenting. `Ja` reparerar allt i ett ångra-steg: det som inte kan ritas tas bort (dåliga tal, ingen storlek, saknat block, trasigt mått, en skraffering utan användbar kontur, referensen som sluter en cirkel av block); ett saknat lager skapas; okända stil- och linjetypsnamn går tillbaka till standard; en delad nyckel ersätts. Den skriver ut hur många objekt som togs bort och hur många som reparerades. Samma resultat visas i panelen Problem, var och en med sin egen {{ui:Repair}}.

Den vägrar ingenting, men den kontrollerar endast det CadCraft självt ritar: data som behålls för andra program (3D-solider, OLE-objekt) öppnas inte.

### RECOVER

Öppnar en skadad DXF eller DWG. {{cmd:RECOVER}} frågar efter filen, läser det som kan läsas i stället för att vägra filen, listar vad som hoppades över eller antogs, och kontrollerar sedan och reparerar ritningen som {{cmd:AUDIT}} gör med `Ja`.

- DXF: rader som inte är en del av ett kod- och värdepar hoppas över tills paren stämmer igen; en sektion utan slut stängs; en fil som kapats läses till kapet; en binär DXF som kapats läses till sitt sista hela värde. När en sektion, ett block eller ett objekt fortfarande inte kan läsas, lämnas det ut och namnges, och läsningen fortsätter förbi det.
- DWG: objekt som inte klarar sina kontroller eller inte kan avkodas lämnas ut, och en förlorad objektlista byggs om genom att gå igenom objektdatan.

Filen på disken ändras inte. Den återställda ritningen öppnas osparad: spara den under ett nytt namn. En fil som inte alls kan läsas vägras, med skälet.

### LEGACYTEXT

Konverterar text skriven med gamla 8-bitars vietnamesiska typsnitt till Unicode. Korta namn `TEXTTOUNICODE` och `VNTEXT`.

Äldre vietnamesiska ritningar har sin text som västerländska tecken som bara typsnittet gör om till vietnamesiska: TCVN3-text i ABC-typsnitten (`.VnTime`, `.VnArial`, och versaltypsnitten vars namn slutar på `H`), och VNI-text i VNI-typsnitten (`VNI-Times`). CadCraft visar sådan text så som den läses så snart ritningen öppnas, efter typsnittet i dess textstil, i objektet, eller i en del av styckestext; filen har fortfarande de gamla tecknen.

{{cmd:LEGACYTEXT}} säger hur många texter den hittade i varje kodning och frågar `Konvertera … till Unicode?`. `Ja` skriver om varje (modell, blad, block, attributvärden och definitioner) och ger textstilarna ett Unicode-typsnitt (Times New Roman, Arial eller Courier New efter det gamla typsnittets sort), i ett ångra-steg. Formatering inuti styckestext behålls.

När ingen text använder ett känt typsnitt (en stil som tappat sitt typsnittsnamn), frågar den `Läs markerade texter som [Tcvn3/Vni/None]`: välj kodningen och markera texterna. Text som redan är Unicode lämnas. Måttextöverskrivningar och flerhänvisningstext konverteras inte.
