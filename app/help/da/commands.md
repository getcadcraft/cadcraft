---
title: Kommandoreference
summary: Hver kommando i CadCraft-tegneappen med dens korte navne, de spørgsmål den stiller, dens valgmuligheder og standarder.
keywords: kommandoer, aliasser, kommandoliste, areal, omkreds, measuregeom, linje, pline, cirkel, bue, trim, offset, dimlinear, blok, insert, layout, plot, zoom, hjælp, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 979ffe3b
---

Skriv et kommandonavn eller et alias og tryk {{key:Enter}} eller {{key:Space}}. Store og små bogstaver er ligegyldige, og et foranstillet `_`, `-`, `.` eller `'` ignoreres. Skriv `HELP` (eller `?`) for at få en kort liste over hver kommando i kommandolinjens historik; tryk {{key:F1}} for denne hjælp.

Sådan læses prompterne: valgmuligheder står i firkantede parenteser, og du vælger en ved at skrive dens store bogstaver (`D` for Diameter). En standard står i vinkelparenteser; tryk {{key:Enter}} for at acceptere den. Hvor der spørges efter et punkt, kan du klikke eller skrive et af formaterne i [Koordinat- og afstandsindtastning](topic:coordinate-entry). Hvor der spørges efter en afstand, kan du skrive et tal eller klikke to punkter.

Tryk {{key:Enter}} hvor der kræves et punkt eller et objekt, og der ikke er nogen standard, afslutter det kommandoen. {{key:Esc}} annullerer den. Det en kommando gjorde, er ét fortrydelsestrin.

## Tegn

### LINE

Aliaser: `L`. Lige segmenter, hvert sit eget objekt.

- `Specify first point` (Enter: start fra det sidste punkt du angav)
- `Specify next point [Undo]`, gentaget. Efter to segmenter: `[Undo/Close]`.
- `U` tager det sidste segment tilbage, `C` lukker til det første punkt og slutter. Enter slutter.

### PLINE

Aliaser: `PL`. En polylinje af linje- og bue-segmenter.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close når der er to segmenter)
- `A` skifter til buer: `Specify endpoint of arc [Line/CLose/Undo]`. Hver bue fortsætter tangentielt til segmentet før. `L` går tilbage til linjer, `CL` lukker med en bue.
- Enter slutter; polylinjen forbliver åben.

### CIRCLE

Aliaser: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` spørger `Specify diameter of circle`.
- `2P`: to ender af en diameter. `3P`: tre punkter på cirklen.
- `T` (også kommandoen `TTR`, og {{ui:Tegn}} › {{ui:Mere}} › {{ui:Cirkel: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`, derefter den anden, og så radius (Enter: den sidste). Cirklen rører begge objekter (linjer, buer, cirkler, polylinjesegmenter, også inde i blokke); af de cirkler der gør det, den der rører nærmest dine valg. »Circle does not exist« når ingen passer.
- `TTT` (eller {{ui:Tegn}} › {{ui:Mere}} › {{ui:Cirkel: Tan, Tan, Tan}}): tre objekter; cirklen der rører alle tre, nærmest dine valg (tre linjer giver den indre cirkel eller en ydre, afhængigt af hvor du vælger).

### ARC

Aliaser: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: en bue gennem tre punkter.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Buen løber mod uret fra start til slut.

### RECTANG

Aliaser: `REC`, `RECTANGLE`. En lukket polylinje.

- `Specify first corner point`, `Specify other corner point`. Skriv `@width,height` for det andet hjørne.

### POLYGON

Aliaser: `POL`. En regulær polygon som en lukket polylinje.

- `Enter number of sides <4>` (3 til 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: klik eller skriv et punkt; dets afstand sætter størrelsen, og dets retning drejer polygonen.

### ELLIPSE

Aliaser: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, derefter afstanden til den anden akse.
- `I` (`Isocircle`, kun mens {{cmd:ISODRAFT}} er til): centrum, derefter radius eller `Diameter`: ellipsen en cirkel viser på det aktuelle isometriske plan.

### HATCH

Aliaser: `H`, `BH`, `BHATCH`; eller {{ui:Skravering}} på værktøjslinjen. Udskriver først det aktuelle mønster, skala og vinkel.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, gentaget (`Undo` når der er et område): hvert klik tilføjer det lukkede område rundt om det, med de lukkede figurer indeni som øer. Enter laver én skravering af dem alle.
- `S`: `Select closed objects` (lukkede polylinjer, cirkler, lukkede ellipser).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): udfyldningen er et farveforløb i stedet for et mønster. Se {{cmd:GRADIENT}} for dets spørgsmål.

Se [Skravering og udfyldning af områder](topic:hatch).

### GRADIENT

Aliaser: `GD`. Udfylder et område med et farveforløb af én eller to farver. Den spørger først om farveforløbet og fortsætter derefter som {{cmd:HATCH}} gør (`Pick internal point`, `S` for lukkede objekter, {{key:Enter}} for at afslutte).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, gentaget; den udskriver farveforløbet, som det er nu, hver gang.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, eller en af dem vendt (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). De første bogstaver er nok.
- `O`: én farve, derefter dens tone fra 0 til 1 (0 mørkner den til sort, 0.5 er farven selv, 1 lyser den op til hvid). `TW`: den første og den anden farve. En farve er et tal fra 1 til 255, tre tal såsom `255,128,0`, eller `#rrggbb`.
- `A`: vinklen farveforløbet løber i. `C`: centreret Ja eller Nej (Nej flytter farveforløbets midte til den ene side).
- Den afviser en farve eller type den ikke kender, og en tone uden for 0 til 1.

{{cmd:HATCHEDIT}} `G` og {{ui:Egenskaber}} (Farveforløb) ændrer et farveforløb senere, eller gør en hvilken som helst skravering til et. Et farveforløb vises på skærmen og udskrives. DWG 2004 og senere gemmer det som en rigtig farveforløbsskravering; DXF 2000 og DWG 2000 gemmer det til CadCraft, og andre programmer ser en ensfarvet udfyldning i den første farve.

### HATCHGENERATEBOUNDARY

Aliaser: `HGB`. Laver konturen igen for en skravering, der har mistet den. `Select hatches` (eller vælg dem først), derefter `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Hver løkke i skraveringen bliver en lukket polylinje på skraveringens lag; de nye polylinjer forbliver valgt. En buet kant kommer tilbage som de korte lige stykker, skraveringen holder.
- Med Yes følger skraveringen sin nye kontur, som en skravering lavet med {{cmd:HATCH}} gør. Ét fortrydelsestrin.
- Den siger det, når ingen skravering blev valgt.

### POINT

Aliaser: `PO`; eller {{ui:Tegn}} › {{ui:Mere}} › {{ui:Punkt}}. Punktobjekter, ét pr. klik, indtil Enter.

- `Specify a point`

### XLINE

Aliaser: `XL`; eller {{ui:Tegn}} › {{ui:Mere}} › {{ui:Konstruktionslinje}}. Konstruktionslinjer, uendelige i begge retninger. Se [Konstruktionslinjer og stråler](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, derefter `Specify through point` for hver linje, indtil Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` spørger først `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, derefter `Specify angle end point` for hver linje.
- `O`: `Specify offset distance [Through] <Through>`, derefter `Select a line object` og `Specify side to offset` (eller `Specify through point`) for hver linje.

### RAY

Ingen aliaser; eller {{ui:Tegn}} › {{ui:Mere}} › {{ui:Stråle}}. `Specify start point`, derefter `Specify through point` for hver stråle, indtil Enter.

### TEXT

Aliaser: `DT`, `DTEXT`; eller {{ui:Tekst}} på værktøjslinjen. Enlinjet tekst; hver linje er sit eget objekt.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, derefter `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, gentaget: hver Enter starter næste linje nedenunder. Enter på en tom linje slutter. {{key:Space}} skriver et mellemrum her.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} sætter mærker på en linje, bue, cirkel, polylinje, spline eller ellipse, der deler den i lige store dele. Vælg objektet, og giv derefter antallet af dele (2 til 32767). Et åbent objekt får ét mærke mindre end dele; et lukket får også et mærke ved sin start. Selve objektet skæres ikke. Mærkerne er punkter; `Block` spørger i stedet efter en blok fra denne tegning og om den drejer, så den følger objektet. Længder langs splines og ellipser måles langs korte korder. Den afviser tekst, skraveringer og andre objekter, der ikke har en længde.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} sætter et mærke for hver given længde langs en linje, bue, cirkel, polylinje, spline eller ellipse og tæller fra enden nærmest, hvor du valgte den (et lukket objekt: fra dets start). Angiv længden ved at skrive den eller ved to punkter. Den fjerne ende af et åbent objekt får intet mærke. `Block` placerer en blok ved hvert mærke i stedet for et punkt. Den afviser en længde på 0, en der er længere end objektet, og en der ville give over 32767 mærker.

### BOUNDARY

Aliaser: `BO`, `BPOLY`. {{cmd:BOUNDARY}} laver en lukket polylinje rundt om det område, punktet du vælger ligger i, ud fra de linjer, buer, cirkler, polylinjer og kurver der afgrænser det på skærmen. Stykker der ligger på en bue eller cirkel kommer tilbage som buesegmenter; stykker af ellipser og splines kommer tilbage som korte lige segmenter. Med `Islands` til (startindstillingen) får hvert lukket område indeni også sin egen polylinje. Bliv ved med at vælge punkter; Enter slutter. De objekter der afgrænser området, lades være som de er. Den siger det, når intet lukket område indeholder punktet.

### BLEND

{{cmd:BLEND}} tegner en spline mellem enderne af to åbne kurver. Vælg hver kurve nær enden, der skal forbindes. `CONtinuity` vælger `Tangent` (splinen forlader og ankommer langs begge kurver) eller `Smooth` (den bøjer også, som kurverne bøjer i enderne); valget gemmes for sessionen. De to kurver ændres ikke. Den afviser lukkede objekter og to ender, der allerede mødes.

### REGION

Alias: `REG`. {{cmd:REGION}} gør lukkede objekter til regioner: flade områder du kan sammenføje, skære i og måle. Vælg cirkler, lukkede polylinjer, lukkede ellipser eller lukkede splines, eller linjer, buer og åbne polylinjer der lukker en løkke ende mod ende; hver løkke bliver til én region og erstatter de objekter, den kom fra. Buer forbliver buer; ellipser og splines bliver til korte lige segmenter. Det der ikke er lukket og ikke lukker en løkke, lades være som det er, og den siger hvor mange. I tegningen er en region en eller flere lukkede polylinjer holdt sammen som en unavngiven gruppe, så et klik vælger hele regionen, og en kopi er en region for sig selv; andre programmer, der åbner filen, ser lukkede polylinjer.

Med regioner i tegningen virker {{cmd:UNION}}, {{cmd:SUBTRACT}} og {{cmd:INTERSECT}} på fanen 2D på regioner: `UNION` sammenfører de valgte regioner til én (regioner der ligger adskilt, bliver til én region med flere konturer), `SUBTRACT` spørger efter de regioner der skal trækkes fra, og derefter dem der skal fjernes (et hul forbliver en del af regionen), `INTERSECT` beholder det område, de alle deler. Hver siger arealet af resultatet og er ét fortrydelsestrin. De afviser, når intet ville være tilbage, eller intet deles. På fanen 3D, og i en tegning uden regioner, virker de samme kommandoer på legemer som før.

## Rediger

Aliaser: `MT`, `T`; eller {{ui:Afsnit}} på værktøjslinjen. Afsnitstekst der brydes til en bredde, skrevet på stedet.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: bredden over de to hjørner er der, teksten brydes. `H` spørger `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` og springer det andet hjørne over.
- Derefter åbnes en boks på tegningen: skriv, {{key:Enter}} for et nyt afsnit, {{key:Mod+Enter}} eller et klik udenfor for at afslutte, {{key:Esc}} for at annullere. Dens bjælke sætter højde, linjeafstand, bredde og justering. Se [Tilføj tekst og etiketter](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliaser: `ED`, `DDEDIT`; eller dobbeltklik på en tekst. `Select a text to edit`, gentaget indtil {{key:Enter}}: hver åbnes i samme boks. Startet på en valgt eller dobbeltklikket tekst redigerer den den ene og slutter.

### ERASE

Aliaser: `E`, `DELETE`; eller tryk {{key:Delete}} med objekter valgt.

- `Select objects` (springes over, når objekter allerede er valgt)

### MOVE

Aliaser: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, skrevet som `dx,dy`.

### COPY

Aliaser: `CO`, `CP`. Kopierer så mange gange du giver punkter.

`Array` ved prompten for andet punkt laver en række på én gang: giv antallet af elementer (originalen tæller som ét), derefter punktet hvor den første kopi går; de andre følger med samme afstand. `Fit` gør det punkt til stedet for den sidste kopi i stedet, med de andre fordelt jævnt imellem.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, gentaget indtil Enter. `U` tager den sidste kopi tilbage.

### ROTATE

Aliaser: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: grader, positiv mod uret; eller klik på et punkt for at dreje mod det.

### SCALE

Aliaser: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: skriv en faktor såsom `0.5` eller `2`. Et klikket punkt giver sin afstand fra basispunktet som faktor.

### MIRROR

Aliaser: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Aliaser: `AL`; eller {{ui:Rediger}} › {{ui:Mere}} › {{ui:Justér}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Med to par: `Scale objects based on alignment points? [Yes/No] <N>`

Se [Justér objekter](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (eller markeringen), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` spørger efter punktet. Markeringen bliver.

### DISTRIBUTE

- `Select objects` (mindst tre), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. De yderste to bliver; markeringen bliver.

### ALIGNPANEL

Aliaser: `ALP`; eller {{ui:Rediger}} › {{ui:Mere}} › {{ui:Justér og fordel}}. Åbner panelet, der kører ALIGNTO og DISTRIBUTE med klik.

### LASER

Aliaser: `LASERCUT`; eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Laser…}}. Åbner panelet Laser over tegningen: hvad hvert lag gør (skær, rids, gravér, udfyld, billede), forhåndsvisningen, GRBL G-kode at gemme, og rammesætning og afsendelse over Web Serial. Se [Send en tegning til en laser](topic:laser-cutting).

### STRETCH

Aliaser: `S`; eller {{ui:Stræk}}. `Select objects to stretch`: træk krydsvinduer (eller skriv `C`) over enderne for at flytte. `Specify base point [Displacement]`, `Specify second point`. Punkter inde i vinduerne flytter sig: linjeender, polylinjehjørner (buesegmenter beholder deres højde), målsætningspunkter; cirkler, ellipser, tekst, punkter og blokke flytter sig hele, når deres centrum eller indsætningspunkt er inde. En markering lavet før kommandoen beholder de krydsvinduer (og lassoer), der lavede den, så de strækker på samme måde. Uden et vindue flytter objekterne sig hele.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliaser: `AR`; eller {{ui:Array}}. `Select objects`, derefter `Enter array type [Rectangular/POlar] <Rectangular>` (kun ARRAY).

- Rectangular starter med 4 kolonner × 3 rækker, med afstand 1.5 gange objekternes størrelse, vist som en forhåndsvisning. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` spørger kolonner og rækker, `S` afstandene mellem kolonner og mellem rækker (negativ går til venstre eller ned), `COL` og `R` en retning hver.
- Polar spørger `Specify center point of array`, starter med 6 elementer hele vejen rundt, drejet. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` elementer, `F` vinklen der fyldes (+ mod uret, − med uret), `ROT` Yes eller No.
- {{key:Enter}} (eXit) laver kopierne som almindelige objekter. Ét fortrydelsestrin.
- `AS` (ASsociative) skifter mellem simple kopier og et array der forbliver redigerbart: ét objekt, du ændrer senere med {{cmd:ARRAYEDIT}}, med dets greb eller i {{ui:Egenskaber}}. Valget huskes ({{cmd:ARRAYASSOCIATIVITY}}); det starter på simple kopier.

### ARRAYPATH

Kopier langs en kurve. `Select objects`, derefter `Select path curve`: en linje, bue, cirkel, ellipse, polylinje eller spline (ikke et af de objekter, der arrays). Stien starter i dens ende nærmest objekterne, og det første element er objekterne, der hvor de er.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, med en forhåndsvisning. `M`: `Divide` spreder elementerne jævnt over hele stien, `Measure` sætter et hver så langt langs den. `I`: antallet af elementer (med Measure betyder 0 så mange som der passer; et tal forbi stiens ende holdes til det, der passer). `SP`: afstanden mellem elementer langs stien (skifter til Measure). `AL`: Yes drejer hvert element, så det følger stien; No holder dem lodrette.
- `AS` som i {{cmd:ARRAY}}. Med den til beholder arrayet sin egen kopi af stiens form: at redigere stikurven bagefter flytter ikke elementerne.
- Den afviser en sti, der ikke er en kurve, og ét element.

### ARRAYEDIT

Ændrer et array lavet med ASsociative. `Select array` (eller vælg det først). Den udskriver, hvad arrayet er nu, og spørger derefter, indtil {{key:Enter}}:

- Rectangular: `COL` kolonner og deres afstand, `R` rækker og deres afstand, `A` vinklen kolonnerne løber i.
- Polar: `I` elementer, `F` udfyldningsvinklen, `ROT` drej elementer Yes eller No.
- Path: `M` Divide eller Measure, `I` elementer, `SP` afstand, `AL` flugt med stien.
- `S` (Source) åbner de objekter, arrayet gentager, alene, ligesom blokeditoren. Tegn og redigér der; {{cmd:ARRAYCLOSE}} gemmer eller kasserer, og hvert element følger.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, derefter klik på de elementer der skal erstattes, {{key:Enter}}. Disse elementer viser erstatningen i stedet; erstatningsobjekterne forlader tegningen og lever i arrayet. `RES` (RESet) viser kildeobjekterne i hvert element igen.
- Hver ændring er ét fortrydelsestrin. Den afviser simple kopier, en simpel blokreference og et array på et låst lag.

De samme tal står i {{ui:Egenskaber}} under Array, og arrayet har greb: dets basispunkt flytter det, grebet ved det andet element sætter afstanden, grebet efter det sidste element sætter antallet (polar: det andet element sætter hvor mange elementer, det sidste elementet udfyldningsvinklen). {{cmd:EXPLODE}} gør et array tilbage til simple kopier.

### ARRAYCLOSE

Afslutter {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Den siger det, når intet arrays kildeobjekter er åbne. {{cmd:BCLOSE}} gør det samme.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Angiver hvad {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR og {{cmd:ARRAYPATH}} starter på; deres valgmulighed `AS` ændrer den samme indstilling. Huskes i denne browser.

### OFFSET

Aliaser: `O`. Linjer, buer, cirkler og polylinjer.

Hvor en polylinje flytter sig udad, og dens lige segmenter går fra hinanden ved et hjørne, afgør {{cmd:OFFSETGAPTYPE}}, hvordan mellemrummet lukkes.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, derefter `Specify point on side to offset` (eller, med Through, `Specify through point`), gentaget indtil Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: hvordan {{cmd:OFFSET}} lukker mellemrummene ved en polylinjes ydre hjørner. `0` forlænger segmenterne, indtil de mødes (startindstillingen), `1` forbinder dem med en bue rundt om det gamle hjørne, `2` med et lige snit. Indre hjørner og buesegmenter berøres ikke. Gemmes for denne session.

### EXTRIM

{{cmd:EXTRIM}} beskærer alt på den ene side af en kant. Vælg skærekanten (en linje, bue, cirkel, polylinje, ellipse, spline eller konstruktionslinje), og vælg derefter et punkt på siden, der skal ryddes: hver linje, bue, cirkel, polylinje og konstruktionslinje, der krydser kanten, mister sin del på den side, hvor den starter ved kanten. Mens du vælger siden, følger de stykker, der ville gå, markøren. For en lukket kant er siderne inde og ude. Objekter der kun rører kanten, og tekst, skraveringer, splines og ellipser der krydser den, lades være, som de er. Ét fortrydelsestrin.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: hvordan {{cmd:TRIM}} og {{cmd:EXTEND}} starter. `1` Quick: hvert objekt er en skærekant eller grænse. `0` Standard: de spørger først om kanterne. Også `(setvar "TRIMEXTENDMODE" 0)` i LISP.

### TRIM

Aliaser: `TR`. Udskriver `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` først. I hurtigtilstand er hvert synligt objekt en skærekant, og et objekt intet krydser slettes; i standardtilstand spørger den `Select cutting edges (Enter = every object)` først og skærer kun ved dem.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, gentaget: klik på stykket der skal fjernes (det vises grråt og stiplet, mens markøren står på det), træk en sti gennem flere stykker (alle går i ét trin), eller klik to tomme steder for et hegn mellem dem. {{key:Shift}} forlænger i stedet. `T` vælger skærekanter (standardtilstand), `F` spørger efter hegnspunkter, `C` to vinduehjørner (stykker der delvist er indeni, går), `O` spørger `Enter a trim mode option [Quick/Standard]`, `E` spørger `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` sletter objekter du vælger, `U` fortryder det sidste valg eller træk. Enter slutter. Se [Beskær og forlæng](topic:trim-and-extend).

- Et klik på en skravering skærer skraveringen: skærekanterne deler det skraverede område, og stykket du klikkede på, tages væk (ingen tegnet kontur bliver tilbage, der hvor den var). Skraveringen beholder sit mønster eller farveforløb; en skravering der var forbundet til sin kontur, er ikke længere forbundet bagefter, fordi den ikke længere udfylder den. Den siger det, når ingen skærekant deler skraveringen dér, når klikket er udenfor skraveringen, og når intet ville være tilbage (brug {{cmd:ERASE}}). En trukket sti eller et hegn skærer ikke skraveringer.

### EXTEND

Aliaser: `EX`. Det samme som TRIM den anden vej: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Et klik forlænger enden nærmest det til den næste grænse; en trukket sti eller et hegn forlænger hvert objekt, det krydser; {{key:Shift}} beskærer. `B` vælger grænsekanter (standardtilstand). Mode og Edge deles med TRIM.

### LINKVIEWS

Aliaser: `SYNCVIEWS`; eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Kobl ruderes visninger}}, eller linkikonet på tegnefanerne. `Link the panes' views [ON/OFF]` (Enter tager den anden tilstand): mens den er til, flytter en panorering eller zoom i den aktive rude hver rude, der viser samme slags rum. Se [Del skærmen](topic:split-screen).

### OPENIN3D

Ingen aliaser; eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Åbn i ModelCraft}}, hvor 3D-modelleringsappen tager en overdraget tegning. Åbner den der i en ny fane, som en DWG (intet uploades). Hvis browseren blokerer fanen, siger den det.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: hvad tryk og træk på et tomt sted tegner. Det samme som {{ui:Indstillinger}} › {{ui:CadCraft}} › Træk for at vælge. Se [Lassovalg](topic:lasso-selection).

### FILLET

Aliaser: `F`. Linjer, buer, cirkler og polylinjer. Udskriver `Current settings: Mode = TRIM, Radius = 0` først.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` spørger `Specify fillet radius <last>`. `T` spørger `Enter Trim mode option [Trim/No trim]`: med No trim bliver objekterne, som de er, og kun buen tilføjes.
  - `M` holder kommandoen i gang for flere hjørner, indtil {{key:Enter}}; `U` tager det sidste hjørne tilbage uden at forlade kommandoen.
  - `P` spørger `Select 2D polyline [Radius]` og runder hvert hjørne, hvor to lige segmenter mødes. Afrundinger den allerede har, erstattes af den nye radius; radius 0 fjerner dem. Hjørner hvis sider er for korte til radius, lades være og tælles.
- `Select second object or shift-select to apply corner [Radius]`. Hold {{key:Shift}} mens du klikker for et skarpt hjørne, uanset radius.

Klik på hvert objekt på den del, du vil beholde. To linjer der ikke mødes, forlænges. To parallelle linjer får en halvcirkel hen over mellemrummet, ved enden af den første linje nærmest dit klik. En cirkel bliver aldrig skåret. To segmenter af samme polylinje ved siden af hinanden får buen inde i polylinjen; en polylinje og et andet objekt virker, når snittet lander på polylinjens første eller sidste segment.

### CHAMFER

Aliaser: `CHA`. Linjer og polylinjers lige segmenter. Udskriver de aktuelle afstande (eller længde og vinkel) først.

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` spørger `Specify first chamfer distance <last>` og `Specify second chamfer distance <the first>`: den første skæres fra den første linje du vælger, den anden fra den anden.
  - `A` spørger `Specify chamfer length on the first line` og `Specify chamfer angle from the first line`.
  - `E` (mEthod) vælger, hvilken af de to den næste affasning bruger. `T`, `M`, `U` og `P` virker som i {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+klik laver et skarpt hjørne.

En afstand længere end linjen afvises (`Distance is too large.`).

### BREAK og BREAKATPOINT

Aliaser: `BR`. `Select object` (hvor du klikker, er det første punkt), `Specify second break point [First point]`; `F` spørger `Specify first break point` og `Specify second break point`. Stykket imellem går; på en cirkel mod uret fra det første punkt. BREAKATPOINT spørger `Specify break point` og deler objektet i to dér (ikke en cirkel).

### LENGTHEN

Aliaser: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: et valg udskriver `Current length` (og en buens inkluderede vinkel) og spørger igen. `DE` spørger `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` trækker. Derefter `Select an object to change [Undo]`, gentaget: enden nærmest klikket flytter sig. Linjer, buer og åbne polylinjer.

### JOIN

Aliaser: `J`. `Select objects to join`. Linjer, buer og åbne polylinjer, der mødes ende mod ende, bliver til polylinjer (lukkede, når kæden lukkes); linjer på én linje bliver til én linje; buer på én cirkel bliver til én bue eller cirklen. Historikken siger, hvor mange objekter der blev sammenføjet, og hvor mange der ikke blev.

### MATCHPROP

Aliaser: `MA`, `PAINTER`. `Select source object`, derefter `Select destination objects [Settings]` og {{key:Enter}}. Kopierer lag og farve, og mellem objekter af samme slags teksthøjden og -bredden, målsætningsstørrelserne eller skraveringsmønsteret. `S` spørger `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, gentaget indtil {{key:Enter}}; valget huskes for sessionen.

### EXPLODE

Aliaser: `X`. Polylinjer bliver til linjer og buer, blokreferencer bliver til deres objekter, målsætninger bliver til linjer, pile og tekst. Et array der forbliver redigerbart ({{cmd:ARRAYEDIT}}) bliver til simple kopier af sine objekter.

- `Select objects`

### GROUP

Alias: `G`. {{cmd:GROUP}} giver de valgte objekter et navn, de deler. Vælg objekterne, skriv derefter et navn (ingen mellemrum; `?` lister grupperne; Enter laver en gruppe uden navn) og, for en navngiven gruppe, en valgfri beskrivelse. Fra da af vælger et klik på et af dem, eller et vindue der rammer et, dem alle, så de flytter, kopieres og slettes sammen; hvert objekt er stadig sit eget objekt. Et objekt kan være i flere grupper. En kopi af en hel gruppe er en ny gruppe uden navn; en kopi af ét medlem alene går ind i gruppen. Grupper hører til det rum, de blev lavet i (modellen eller et ark). De bevares, når du gemmer som DWG eller DXF og åbner filen igen i CadCraft; DXF 2000-filer bærer dem også som gruppeobjekter til andre programmer, og grupper lavet i et andet program læses, når en DXF eller DWG åbnes.

### UNGROUP

{{cmd:UNGROUP}} tager grupper fra hinanden: vælg objekter i grupperne (hver gruppe de er i, tages fra hinanden) eller skriv `Name` og gruppens navn. Objekterne bliver i tegningen. Ét fortrydelsestrin bringer grupperne tilbage.

### GROUPEDIT

{{cmd:GROUPEDIT}} ændrer én gruppe. Vælg et af dens objekter, eller `Name` og dets navn; en gruppe der allerede er valgt, tages som den er. Derefter: `Add` objekter (valgt et ad gangen, ikke gruppe for gruppe), `Remove` objekter, `REName` gruppen, ændr dens `Description`, eller angiv `Selectable` (om et klik på et objekt vælger hele gruppen). `eXit` eller Enter slutter. En gruppe uden objekter tilbage er væk.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: med `1` (startindstillingen) vælger et klik eller et vindue på et grupperet objekt hele dets gruppe; med `0` enkelte objekter, så du kan redigere ét medlem. Gemmes for denne session.

## Udklipsholder

CadCrafts egen udklipsholder: den virker inden for en tegning, mellem tegninger og mellem CadCraft-faner i denne browser. Se [Kopiér, sæt ind og duplikér](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, eller {{ui:Kopiér}} i gruppen {{ui:Redigér}}. Kopierer objekter til udklipsholderen med de blokke og lag, de bruger. Objekterne forbliver valgt.

- `Select objects to copy` (springes over, når objekter allerede er valgt)

### CUTCLIP

{{key:Mod+X}}, eller {{ui:Klip}} i menuen {{ui:Mere}}. Kopierer objekter til udklipsholderen og sletter dem derefter (ét fortrydelsestrin).

- `Select objects to cut` (springes over, når objekter allerede er valgt)

### COPYBASE

Kopierer objekter til udklipsholderen med et basispunkt, du vælger; indsættelse placerer det punkt.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, eller {{ui:Sæt ind}} i gruppen {{ui:Redigér}}. Kopien følger markøren, hængende fra det nederste venstre hjørne af dens udstrækning (eller dens centrum, eller `COPYBASE`-punktet; se [CadCraft-indstillinger](topic:settings)).

- `Specify insertion point`

De indsatte objekter er valgt. En blok, tegningen allerede har under samme navn, beholder denne tegnings definition.

Når et areal kopieret i MarkupCraft er nyere end det CadCraft kopierede (og er mindre end 6 timer gammelt), indsætter {{key:Mod+V}} og `PASTECLIP` det areal i stedet: se `PASTEAREA`.

### PASTEAREA

Aliaser: `PAREA`. {{ui:Sæt et kopieret areal ind}} i menuen {{ui:Mere}}. Indsætter et areal kopieret med {{ui:Kopiér areal}} i MarkupCraft som et billede i sin rigtige størrelse. Se [Billeder i en tegning](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (kun når arket ikke havde en tegningsskala): et tal, {{key:Enter}} for papirstørrelsen, eller `P`, derefter `First point on the pasted area`, `Second point on the pasted area` og deres rigtige afstand.

### PASTEORIG

{{key:Mod+Shift+V}}, eller {{ui:Sæt ind på samme sted}} i menuen {{ui:Mere}}. Indsætter ved de koordinater, objekterne blev kopieret fra. Spørger ikke om noget.

### DUPLICATE

Aliaser: `DUP`. {{key:Mod+D}}, eller {{ui:Duplikér og flyt}} i menuen {{ui:Mere}}. En kopi af objekterne flytter sig med markøren fra der, hvor de er; {{key:Esc}} efterlader intet. Bruger ikke udklipsholderen.

- `Select objects to duplicate` (springes over, når objekter allerede er valgt)
- `Specify where the copy goes (Esc leaves nothing)`: klik, skriv et punkt, `@dx,dy` (fra hvor markøren var), eller en afstand mod markøren.

### SELECT

Spørger `Select objects` (med alle valgmulighederne nedenfor) og lader det, du valgte, forblive valgt, til næste kommando eller til `P` senere.

### QSELECT

Aliaser: `QS`. I browseren dialogen {{ui:Hurtigvalg}} (se [Vælg objekter](topic:select-objects#select-by-a-rule-quick-select)). Uden den spørger kommandolinjen `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` og `Enter value`. Træffene bliver markeringen.

### SELECTSIMILAR

Aliaser: `SIM`. `Select objects [SEttings]` (eller den aktuelle markering): vælger hvert objekt af samme type med samme lag og farve (og blokkens navn, skraveringsmønster). `SE` spørger `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, gentaget indtil {{key:Enter}}.

### FIND

Ingen aliaser; eller {{ui:Redigér}} › {{ui:Mere}} › {{ui:Find og erstat}}. I browseren dialogen {{ui:Find og erstat}} (se [Tilføj tekst og etiketter](topic:text#find-and-replace-words)). Uden den: `Enter text to find`, derefter `Enter replacement text (Enter: select what is found)`. Den søger i tekst, attributværdier og målsætningstekst, på den åbne fane eller i markeringen.

### SELECTALL og DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) vælger hvert objekt, du kan redigere på den åbne fane. `DESELECT` (aliaser `AI_DESELECT`, `SELECTNONE`; eller {{key:Esc}}) rydder markeringen.

## Målsætninger

### DIMLINEAR

Aliaser: `DLI`, `DIMLIN`. Vandret eller lodret afstand.

- `Specify first extension line origin [Select object]` (Enter eller `S`: `Select object to dimension`, derefter klik på et linje-, bue-, cirkel- eller polylinjesegment)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` spørger efter tekst (`<>` er den målte værdi), `H` og `V` fastlægger retningen, `R` spørger `Specify angle of dimension line <0>`.

### DIMALIGNED

Aliaser: `DAL`, `DIMALI`. Den sande afstand mellem to punkter.

- Udgangspunkter som i {{cmd:DIMLINEAR}}, derefter `Specify dimension line location [Text]`.

### DIMANGULAR

Aliaser: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Bue: dens vinkel. Cirkel: `Specify second angle endpoint`. Linje: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: klik inde i vinklen for at måle den.

### DIMRADIUS og DIMDIAMETER

Aliaser: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, derefter `Specify dimension line location [Text]`.

### DIMCONTINUE

Aliaser: `DCO`, `DIMCONT`. Fortsætter fra den sidste lineære eller justerede målsætning, der blev lavet (eller spørger `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, gentaget indtil Enter.

### DIMBASELINE

Aliaser: `DBA`, `DIMBASE`. Ligesom {{cmd:DIMCONTINUE}}, men hver målsætning starter fra det første udgangspunkt og stables længere ude.

### DIMORDINATE

Aliaser: `DOR`, `DIMORD`. `Specify feature location`, derefter `Specify leader endpoint [Xdatum/Ydatum/Text]`. Skriver, hvor langt elementet er fra UCS-oprindelsen langs X eller langs Y, på en henvisning: en henvisning, der løber mest op eller ned, læses som X; en der løber til siden, læses som Y; `Xdatum` og `Ydatum` fastlægger hvilken. Angiv oprindelsen først med {{cmd:UCS}} (uden en er det tegningens 0,0). Greb flytter elementet, oprindelsen og henvisningens ende, og værdien følger med. Gemmes som en rigtig ordinatmålsætning i DWG og DXF. Afviser en henvisningsende, der ligger på selve elementet.

### DIMARC

Aliaser: `DAR`. `Select arc or polyline arc segment`, derefter `Specify arc length dimension location [Text]`. Måler langs buen (ikke korden) og skriver buesymbolet foran værdien. Afviser en hel cirkel, en linje eller et lige polylinjesegment. En DWG gemmer den som en buelængdemålsætning; en DXF gemmer den som en vinkelmålsætning med længden som tekst, og CadCraft åbner den igen som en buelængdemålsætning.

### DIMJOGGED

Aliaser: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. En radiusmålsætning for en kurve, hvis centrum er langt væk eller uden for arket: målelinjen starter i det punkt, du angiver i stedet for centrum, med et knæk i, og viser stadig den rigtige radius. En DWG gemmer den som en knækket radiusmålsætning; en DXF gemmer den som en radiusmålsætning, og CadCraft åbner den knækket igen.

### DIMJOGLINE

Aliaser: `DJL`. `Select dimension to add jog [Remove]`, derefter `Specify jog location (or press Enter)`. Sætter et knæksymbol på linjen i en lineær eller justeret målsætning, for at vise at afstanden ikke er tegnet i skala; værdien ændrer sig ikke. `Remove` tager det af. Afviser andre slags målsætninger.

### QDIM

Ingen aliaser. `Select geometry to dimension`, derefter `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Målsætter flere objekter på ét trin, ud fra linjers og polylinjesegmenters ender, cirklers og buers centre, punkter og blokreferencer. En position over eller under objekterne måler på tværs, en ved siden af dem måler op. `Continuous` kæder punkterne, `Baseline` måler alle fra det første, `Staggered` indlejrer par fra midten og udefter, `Ordinate` giver hvert punkt sin afstand fra grundlinjen (`datumPoint` vælger en ny), `Radius` og `Diameter` målsætter hver cirkel og bue, du vælger. Tilstanden huskes. Alt det laver, er ét fortrydelsestrin. Den siger det, når der er færre end to punkter, eller ingen buer eller cirkler til Radius og Diameter.

### DIMBREAK

Aliaser: `DBREAK`. `Select dimensions to add or remove breaks`, derefter `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` efterlader et mellemrum i mål- og hjælpelinjerne, hvor et andet objekt krydser dem, og regner mellemrummene ud igen, når de andre objekter eller målsætningen flyttes. `Manual` (én målsætning) spørger om to punkter og efterlader et mellemrum mellem dem. `Remove` fjerner alle mellemrum. Mellemrummet er 1.5 gange målsætningens teksthøjde.

### DIMSPACE

Ingen aliaser. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Flytter målelinjerne for parallelle lineære og justerede målsætninger (eller vinkelmålsætninger om samme hjørne), så de står lige langt fra hinanden, talt fra grundmålsætningen, hver på den side, den er. `0` flugter dem med grundmålsætningen; `Auto` er to gange grundmålsætningens teksthøjde. Målsætninger der ikke er parallelle med grunden, lades være.

### DIMINSPECT

Ingen aliaser. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Tegner en ramme rundt om værdien med en etiket foran den og kontrolraten efter. `remove` tager rammen af. Tolerancetekst bliver sammen med værdien.

### DIMOVERRIDE

Aliaser: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, igen indtil Enter, derefter `Select dimensions`. Ændrer disse indstillinger på de valgte målsætninger alene; målsætningsstilen ændres ikke. Tager de variable, der er et tal eller en kontakt (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` sætter de valgte målsætninger tilbage på deres stil. Afviser et navn, der ikke er sådan en variabel, og en værdi den ikke kan tage.

### DIMREASSOCIATE

Aliaser: `DRE`, `DIMREASSOC`. `Select dimensions`, derefter for hver af dem dens udgangspunkter for hjælpelinjerne (`Specify first extension line origin on an object`: fang til en ende eller midten af en linje, et polylinjehjørne, et centrum; Enter holder punktet frit), eller for en radius-, diameter-, knækket radius- eller buelængdemålsætning `Select arc or circle`. Målsætningen bindes så til disse objekter: når de flytter sig eller ændrer størrelse, følger den med i samme fortrydelsestrin og måler igen. At flytte et bundet punkt i hånden, eller slette objektet, afbryder bindingen. Bindingen gemmes i DWG og DXF 2000 som CadCrafts egne data; andre programmer ser en almindelig målsætning.

### DIMDISASSOCIATE

Aliaser: `DDA`, `DIMDISASSOC`. `Select dimensions`. Frigør dem fra de objekter, de er bundet til; intet flytter sig.

### CENTERMARK

Aliaser: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, igen indtil Enter. Tegner et kryds i centrum og fire centerlinjer til lige udenfor kurven (linjetype CENTER), som almindelige linjer på det aktuelle lag; størrelsen følger pilestørrelsen og den samlede skala i de aktuelle målsætningsindstillinger, og de drejes med UCS. De følger ikke cirklen, hvis den flyttes.

### CENTERLINE

Aliaser: `CL`. `Select first line`, `Select second line`. Tegner en linje midt imellem to linjer (langs halveringslinjen, når de mødes), lidt længere end de er, i linjetype CENTER. En almindelig linje: den følger ikke de to linjer.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Ingen aliaser. Hver spørger `Enter new value for … <current>` og angiver den størrelse for **nye** målsætninger: samlet skala, teksthøjde, pilestørrelse, decimaler (op til 8), mellemrum rundt om teksten, forlængelse ud over målelinjen, forskydning fra oprindelsen. Se [Angiv målsætningsstørrelser](topic:dimension-settings).

### DIMLUNIT

Målsætningsindstilling: formatet for nye målsætninger alene (1 videnskabelig, 2 decimal, 3 ingeniør, 4 arkitekt, 5 brøk).

### DIMSTYLE og -DIMSTYLE

Aliaser: `DST`, `DDIM`, `D`. Målsætningsstil-administratoren: {{ui:Gør aktuel}}, {{ui:Ny…}}, {{ui:Redigér…}}, {{ui:Omdøb…}}, {{ui:Slet}}, {{ui:Sammenlign…}}, {{ui:Anvend på valgte}}. `-DIMSTYLE` på kommandolinjen: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Se [Angiv målsætningsstørrelser](topic:dimension-settings#named-dimension-styles).

### DIMEDIT og DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, derefter målsætningerne (eller dem der allerede er valgt). New spørger efter teksten (`<>` = målingen); Rotate for en vinkel (0 sætter teksten tilbage); Oblique for hjælpelinjernes vinkel fra X-aksen (Enter = ingen; kun lineære og justerede målsætninger). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Se [Angiv målsætningsstørrelser](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliaser: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, eller med målsætninger valgt `Units in the text of the selected dimensions`. Skriver den målte længde i den enhed med enheden efter (DIMLFAC og et DIMPOST-suffiks); `D` går tilbage til tegningens enheder. Se [Målsætninger i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliaser: `RC`. Udskriver `Arc length: … Type: …`, derefter `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular spørger `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand følger markøren, indtil et klik eller {{key:Enter}}; `O` spørger `Select object` og `Reverse direction? [Yes/No] <N>` og gør objektet til skyen. `A` spørger `Specify the length of each arc`. `R`, `P` og `F` vælger typen for den næste sky. Resultatet er en lukket polylinje af buer.

### MLEADER

Aliaser: `MLD`; eller {{ui:Henvisning}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, derefter teksten i boksen på stedet (eller, uden den, `Enter text (an empty line ends)`). `Block` spørger først om et blocknavn, og multihenvisningen viser den blok i stedet for tekst. Flere henvisningslinjer: {{cmd:MLEADEREDIT}}. Gemmes som en rigtig multihenvisning i DWG; DXF gemmer de linjer, pilespids og tekst, den tegner.

### MLEADEREDIT

Aliaser: `MLE`. `Select a multileader`, derefter `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: hvert punkt tilføjer en henvisningslinje fra en ny pilespids til samme landingssted, indtil Enter. `Remove leaders` tager så den henvisningslinje, du klikker på, af (en multihenvisning beholder mindst én). `Block content` spørger efter et blocknavn og viser den blok i stedet for teksten (dens attributter spørges efter); `Text content` sætter teksten tilbage. Hver henvisningslinje har sit eget greb. En DWG beholder hver henvisningslinje og blokken i én multihenvisning.

### MLEADERALIGN

Aliaser: `MLA`. `Select multileaders`, derefter `Select multileader to align to [Distribute/Spacing/Use current spacing]` og `Specify direction`. Flytter de andre multihenvisningers landingssteder (og deres tekst eller blok) hen på linjen gennem den valgte henvisnings landingssted i den retning; pilespidserne bliver, hvor de peger. `Spacing` sætter dem også lige langt fra hinanden; `Distribute` spørger om to punkter og fordeler dem jævnt imellem. Kræver mindst to multihenvisninger.

### MLEADERCOLLECT

Aliaser: `MLC`. `Select multileaders`, derefter `Specify collected multileader location [Vertical/Horizontal]` (Enter beholder den første multihenvisnings plads). Laver én multihenvisning ud af flere: blokindhold går ind i en ny blok, der holder hver blok side om side eller under hinanden; tekstindhold bliver til én note med en linje for hver. Den første multihenvisning beholder sine henvisningslinjer; de andre fjernes. Afviser en blanding af tekst- og blokindhold.

### TABLE

Aliaser: `TB`; eller {{ui:Notér}} › {{ui:Mere}} › {{ui:Tabel}}. Laver en tabel: ét objekt, du flytter, kopierer, roterer, skalerer og plotter som ethvert andet, med dens celler gemt som data.

- `Number of data rows or [Paste/File/Style] <3>`, derefter `Number of columns <3>`, `Text height` og `Top left corner of the table`. Tabellen får en titelrække (én sammenlagt celle) og en overskriftsrække over datarækkerne.
- `P`: en tabel af regnearksceller på udklipsholderen (tekst med et tabulatortegn mellem cellerne). At trykke {{key:Ctrl+V}} med sådanne celler på udklipsholderen gør det samme, medmindre CadCrafts egen kopi er den nyeste (eller CadCraft ikke kan se forskel: så indsætter den sin egen kopi og siger det). `F`: en tabel fra en `.csv`- eller tabulatorsepareret fil. Den første række bliver overskriftsrækken; kolonnebredderne passer til teksten.
- `S`: vælg tabelstilen for denne tabel (se {{cmd:TABLESTYLE}}).
- Den afviser et række- eller kolonneantal, der ikke er et helt tal, og flere celler end en tabel kan rumme (2,000 rækker, 200 kolonner, 40,000 celler).
- {{cmd:EXPLODE}} gør en tabel til linjer og tekst. Gemt som DWG er en tabel et rigtigt tabelobjekt, som andre programmer kan redigere; gemt som DXF er den en blok, der tegner den, og CadCraft åbner den igen som en tabel.

### TABLEDIT

Aliaser: `TABLEEDIT`, `TABEDIT`; eller dobbeltklik på en celle. Redigerer en tabel.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Klik på en celle, eller skriv dens navn med en tabel valgt (`B3`: kolonne B, række 3; titelrækken er række 1). I browseren åbnes en boks over cellen: {{key:Enter}} beholder teksten, {{key:Tab}} går til næste celle, {{key:Alt+Enter}} starter en ny linje, {{key:Esc}} efterlader cellen, som den var.
- En tekst der starter med `=`, er en formel: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, med `+ - * / ^`, parenteser og funktioner såsom `sqrt` og `round`. Cellen viser værdien; en formel der nævner sin egen celle, en celle udenfor tabellen eller en celle uden et tal viser `####`, og kommandolinjen siger hvorfor.
- `R` / `C`: `Insert` eller `Delete` rækker eller kolonner ved en valgt celle (hvor mange, og over eller under, til venstre eller højre). Formler følger de celler, de nævner.
- `S`: kolonnens bredde og rækkens højde. En række er aldrig lavere end sin tekst kræver. En valgt tabel har også et greb på hver kolonnes og hver rækkes kant.
- `M`: sammenlæg fra en valgt celle til en anden; `U`: ophæv sammenlægning. `A`: justering (`TL` øverst venstre … `MC` midt centrum … `BR` nederst højre). `H`: cellens egen teksthøjde (0 = stilens). `K`: gør rækken til en titel-, overskrifts- eller datarække. `CL`: tøm cellen.
- Den afviser en tabel på et låst lag, sletning af hver række eller kolonne, og en sammenlægning der ville skære en anden sammenlagt celle over.

### TABLESTYLE

Aliaser: `TS`. Lister tabelstilene med, hvor mange tabeller der bruger hver, derefter `Table style: [New/Set/Edit/Delete/Apply]`.

- En stil har teksthøjden og justeringen for titel-, overskrifts- og datarækker, cellemargenen og hvilke kanter der tegnes (ydre, mellem rækker, mellem kolonner).
- `N` laver en stil ud fra den aktuelle og gør den aktuel; `S` angiver den aktuelle stil (nye tabeller tager den); `E` redigerer en: tabeller der bruger den, tegnes igen; `A` giver valgte tabeller den aktuelle stil; `D` sletter en (ikke Standard, ikke den aktuelle; tabeller der brugte den, beholder deres udseende).
- Stilene gemmes med tegningen (DWG og DXF).

### TABLEEXPORT

Gemmer det en tabel viser som en CSV-fil (en formel som sin værdi). `Select a table`, eller vælg én først. Tekstceller der starter med `=`, `+`, `-` eller `@` får et foranstillet `'`, så et regneark ikke kører dem.

### TABLEPASTE

Aliaser: `PASTETABLE`. Laver en tabel af regnearksceller på udklipsholderen, derefter spørges efter dens øverste venstre hjørne. Det samme som {{cmd:TABLE}} › `Paste`.

### DATALINK

Aliaser: `DL`. `Data link: [New/List/Remove] <New>`. `N` spørger efter en CSV-fil, placerer en tabel af den og husker filens navn; `L` lister forbindelserne med deres fil, størrelse, hvornår den blev læst, og hvor mange tabeller der bruger den; `R` fjerner en forbindelse (dens tabeller bliver almindelige tabeller).

### DATALINKUPDATE

Aliaser: `DLU`. Læser et datalinks fil igen og fylder de tabeller, der er knyttet til den, igen (rækker og kolonner tilføjes eller fjernes, så de passer). En browser kan ikke åbne en fil af sig selv, så den beder dig vælge filen igen. Med flere forbindelser spørger den, hvilken.

### FIELD

Sætter et felt ind i tegningen: tekst, der regner sig selv ud. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: nu, eller den gemte, oprettede eller plottede dato, og et format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: filnavnet, med eller uden dens endelse. `S`: arkets nummer, dets titel eller hvor mange ark der er. `P`: en tegningsegenskab efter navn (se {{cmd:DWGPROPS}}). `O`: vælg et objekt, derefter hvad der skal læses (areal, længde, omkreds, radius, diameter, lag, navn, x, y, tekst, rotation, farve) og decimalerne. `E`: en formel. `C`: en tekst med koder skrevet, som de er, såsom `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Derefter `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: en valgt tekst får feltet føjet til efter det, den indeholder; en tabelcelle ligeså; en blokreference spørger, hvilken attribut; {{key:Enter}} spørger om en højde og et punkt til en ny tekst.
- På skærmen har et felt en lys grå baggrund; et plot og en PDF har den aldrig. At skrive over feltets tekst i hånden afslutter feltet. Et felt der ikke kan regnes ud, viser `####`.
- Et objekts felt finder sit objekt ved den nøgle, CadCraft gemmer på objekter ({{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Filer der kan flettes}}); med nøgler slået fra afvises det.

### UPDATEFIELD

Aliaser: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` angiver, hvornår felter opdaterer sig selv: skriv bogstaverne i `O` open, `S` save, `P` plot, `R` regen (alle fire til at starte med), eller `NONE`.

### DWGPROPS

Aliaser: `DRAWINGPROPS`. Lister tegningens egenskaber, derefter `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. De første seks er dem, panelet {{ui:Tegningsdetaljer}} viser; `U` tilføjer dit eget navn og din værdi, `R` fjerner et. Felter læser dem (`%<prop:title>%`, `%<prop:Client>%`) og følger med med det samme. Den afviser et brugerdefineret navn, der er et af de indbyggede eller indeholder `%`, `<`, `>`, et citationstegn eller en backslash.

## Parametrisk

Se [Begræns en tegning](topic:constraints) og [Brug parametre og ligninger](topic:parameters). Begrænsninger virker på fanen {{ui:Model}}.

### GEOMCONSTRAINT og GC-kommandoerne

Alias `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, derefter den kommandos prompter.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (den anden flytter sig).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT og DC-kommandoerne

Alias `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (et tal, et udtryk, eller `name=expression`).
- {{cmd:DCALIGNED}}: som ovenfor, med `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` spørger efter afstands- og vinkeltolerancerne.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Select objects`; deres begrænsninger forsvinder.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Select objects [Showall/Hideall]`, derefter `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS og -PARAMETERS

{{cmd:PARAMETERS}} (aliaser `PAR`, `PARAM`) åbner panelet {{ui:Parametre}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Downloader en makro (.swb), der genopbygger modellen som én begrænset skitse i SolidWorks. Se [Flyt skitser til og fra andre delmodelleringsprogrammer](topic:solidworks-sketches).

## Blokke

### ANNOSCALE

Aliaser: `CANNOSCALE`. Siger tegningens annoteringsskala og hvor mange annotative objekter den har, og spørger derefter `New annotation scale`: skriv `1:50`, `1:100`, `2:1`, et enkelt tal (`50` er 1:50) eller navnet på en af tegningens egne skalaer. Hver annotativ tekst og målsætning ændres i størrelse, så den udskrives i samme størrelse i den nye skala, i ét fortrydelsestrin; objekter der ikke er annotative, lades være, og det samme gælder et objekt, der har en liste af skalaer uden den nye ({{cmd:OBJECTSCALE}}). Se [Enheder, papir og skalaer](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliaser: `OBJSCALE`. `Select annotative objects`, derefter `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. En annotativ tekst eller målsætning har en liste af annoteringsskalaer. `Add` og `Delete` spørger efter en skala (`1:50`, `2:1`, et enkelt tal, eller navnet på en af tegningens egne skalaer); `Current scale` tilføjer tegningens annoteringsskala; `List` udskriver hvert objekts skalaer. En viewport, hvis skala er på et objekts liste, viser objektet i den størrelse, der udskriver dets papirhøjde i den skala, på skærmen og i plots. Den sidste skala kan ikke slettes. Objekter der ikke er annotative, udelades: slå {{ui:Annotativ}} til i {{ui:Egenskaber}} først. Listerne gemmes i DWG og DXF som CadCrafts egne data. Se [Enheder, papir og skalaer](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliaser: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Til (som en tegning starter): et annotativt objekt vises også i en viewport eller i modellen, hvis skala ikke er på dets liste, i den størrelse det har. Fra: det vises ikke der, og kan ikke vælges i modellen. Omskifteren er ét fortrydelsestrin; den gemmes ikke i filen.

### SCALELISTEDIT

Aliaser: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` indtil {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit og Delete spørger efter skalaens navn. Tegningens egne skalaer føjes til viewport- og plotskalalisterne og gemmes med tegningen. Se [Enheder, papir og skalaer](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT og PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: punkter splinen går igennem; `Close`, `Undo`, derefter `Start tangent` og `End tangent` (et punkt, eller {{key:Enter}}). Method › Control vertices spørger efter en grad (1 til 5) og tegner ud fra en kontrolpolygon. Object gør polylinjer til splines gennem deres hjørner. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` for flere objekter; linjer, buer og splines tilbydes først som polylinjer. Se [Splines og polylinjer](topic:splines).

### BLOCK

Aliaser: `B`, `BMAKE`.

- `Enter block name`. Findes den: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. De erstattes af én reference til den nye blok.

### WBLOCK

Aliaser: `W`, `-WBLOCK`. Skriver en blok, nogle objekter eller hele tegningen til en ny DWG- eller DXF-fil. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (det bliver den nye tegnings oprindelse), `Select objects`, derefter `File format [DWG/DXF/R12 DXF]` og `File name for the new drawing`, derefter `What to do with the objects [Retain/Convert to block/Delete]`. Convert erstatter dem med én reference til en blok med filens navn; Delete fjerner dem.
- **Block**: `Block to write out`. Blokkens egne objekter, med dens basispunkt som oprindelse, indlejrede blokke medregnet.
- **Entire drawing**: hvert objekt i modelrummet. Ark skrives ikke; brug {{cmd:SAVEAS}} for en kopi, der beholder dem.

Den nye fil indeholder kun de lag, linjetyper, tekst- og målsætningsstile og blokke, som dens objekter bruger, og tegningens enheder. Versionen af en DWG er den, {{cmd:SAVEAS}} sidst brugte. I browseren downloades filen; i Studio åbnes gemmedialogen.

### ATTDEF

Aliaser: `ATT`, `DDATTDEF`, `-ATTDEF`; eller {{ui:Blokke}} › {{ui:Mere}} › {{ui:Definér attribut}}. Udskriver tilstandene, derefter `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value`, når den er konstant), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} tager attributdefinitioner med ind i blokken.

### EATTEDIT og ATTEDIT

`EATTEDIT` (`DDATTE`, eller dobbeltklik på en reference med attributter; {{ui:Blokke}} › {{ui:Mere}} › {{ui:Redigér attributter}}): `Select a block reference with attributes`, derefter dialogen {{ui:Redigér attributter}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): den samme reference, derefter `<prompt> (<TAG>) <value>` for hver attribut; {{key:Enter}} beholder en værdi. Se [Attributter](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Værdier beholdes; nye attributter får deres standard, fjernede går, og placeringer nulstilles.

### BATTMAN

{{ui:Blokke}} › {{ui:Mere}} › {{ui:Attributadministrator}}. Dialogen: blok, attributter (mærke, prompt, standard, tilstande, rækkefølge), {{ui:Opdatér referencerne (værdier bevaret)}}, {{ui:Anvend}}.

### REFEDIT og REFCLOSE

{{ui:Blokke}} › {{ui:Mere}} › {{ui:Redigér på stedet}}. `REFEDIT`: `Select the block reference to edit in place` (eller markeringen). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; banderollens {{ui:Gem blokken}} og {{ui:Kassér}} gør det samme. Hele redigeringen er ét fortrydelsestrin. Se [Attributter](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: om en pennestregs tryk sætter linjetykkelsen for det, {{cmd:SKETCHFIX}} og {{cmd:SKETCHLIVE}} laver (til som standard). Se [Skitsér med en pen](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Alias: `OFFSTD`. Siger, hvilken kontorstandard der gælder for denne tegning, og hvor den kommer fra: tegningens egen post, dit teams fælles standard eller dine Standardpolitikker (teksthøjder `all.anno.*`); uden nogen bruger programmets egne størrelser. `[Import/Layers/Title block/Clear/eXit]`: `Import` læser en `cc-office-standard` .json (den post SuperCad og BimCraft skriver) ind i denne tegning, og gemmes med den i DWG og DXF; `Layers` tilføjer de kontorlag, tegningen mangler, i ét fortrydelsestrin og fjerner aldrig et; `Title block` lister kontorets felter med denne tegnings egne værdier; `Clear` fjerner tegningens egen post. Annotative tekst- og målsætningshøjder følger den gældende standard. Se [Enheder, papir og skalaer](topic:units-papers-scales).

### BPARAMS

Aliaser: `BPM`, `BLOCKPARAMS`. Åbner Parameteradministratoren for blokken i blokeditoren, den valgte references blok, eller den blok du navngiver (`Block name`): parametre med formler, flere synlighedsparametre med deres tilstande, og den valgte references egne værdier og tilstande. Se [Dine egne parametre og synlighedstilstande](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` gør det samme på kommandolinjen: `[Parameter/Visibility/State/Assign/Reference/Done]`.

### BEDIT og BCLOSE

`BE`; eller {{ui:Blokke}} › {{ui:Mere}} › {{ui:Redigér blok}}. `Enter block name to edit <the selected reference's block>` åbner blokeditoren. `BCLOSE` spørger `Close the block editor on "…" [Save/Discard] <Save>`; banderollens {{ui:Gem blok}} og {{ui:Kassér ændringer}} gør det samme. Alt, der laves i editoren, er ét fortrydelsestrin.

### VIEWBASE

Alias: `FLATSHOT`. En flad 2D-visning af legemerne på 3D-fanen: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, en skala (`1:20`, `2:1`; {{key:Enter}} tager den, der passer til arket), derefter visningens centrum. En blokreference, med synlige kanter på VIEW-VISIBLE og skjulte stiplet på VIEW-HIDDEN. Se [Flade visninger på et ark](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliaser: `-PUBLISH`; eller {{ui:Alle ark i én PDF}} i dialogen {{ui:Plot til PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} plotter hvert ark, `S` spørger efter navne adskilt af kommaer. Én PDF, en side og et bogmærke pr. ark. Se [Alle ark i én PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliaser: `SSM`, `SHEETSETMANAGER`. Bringer dig til afsnittet {{ui:Arksæt}} i venstre panel: ark fra mange tegninger, nummereret og titlet, med deres tegningshoveder udfyldt fra sættet, udgivet som én PDF. Se [Arksæt](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): vælg en DWG eller DXF, derefter dens indsætningspunkt. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; med mere end ét link vælger du en af dens referencer, eller skriver `N` og dens navn. Se [Tilknyttede tegninger](topic:files#linked-drawings-external-references).

### COUNT

Aliaser: `BCOUNT`; eller {{ui:Blokke}} › {{ui:Mere}} › {{ui:Tæl blokke}}. `Select a block reference to count, or [All/Export] (Enter: All)`: et valg markerer og tæller hver reference af den blok i dette rum; {{key:Enter}} eller `A` lister dem alle; `E` derefter `C` (optællinger) eller `A` (attributter) downloader en CSV. Se [Tæl blokke og eksportér et skema](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliaser: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (store og små bogstaver er ligegyldige). `F` spørger efter en DWG eller DXF, derefter hele tegningen eller én af dens blokke; et navn der allerede er i brug, spørger {{ui:Behold eksisterende}} eller {{ui:Omdøb}}. `L` åbner biblioteksruden.
- `Specify insertion point [Scale/Rotate]`. `S` spørger `Specify scale factor`, `R` spørger `Specify rotation angle`; begge huskes.
- Når blokken allerede står ved siden af objekter, der gentages andre steder uden den, siger en linje, hvor mange steder der foreslås, og prompten får `suGgested`: `G` viser dem; klik nær et for at placere blokken der, `A` for alle, {{key:Enter}} for at gå tilbage. De tager rotationen fra deres naboer og standardværdier for attributter. Tegninger med over 20,000 objekter i det åbne rum søges ikke igennem.
- Derefter `Enter <prompt> (<TAG>) <default>` for hver attribut blokken beder om. Se [Blokattributter](topic:attributes).

### LIBRARY

Aliaser: `LIB`. Åbner biblioteksruden: placér elementer, søg efter opdateringer, bibliotekets kildeangivelser. Ingen spørgsmål. Se [Indsæt fra en fil eller biblioteket](topic:insert-from-file-and-library).

### STEELMEMBER

Aliaser: `SMEMBER`; eller {{ui:3D-profil}} på bibliotekets fane {{ui:Standard}}. `Section size <W12x26>` (som fanen lister den), derefter `Start point [Column]` og `End point`: et massivt stålprofil på 3D-fanen mellem de to punkter, stående på jorden. `C` spørger efter søjlens basispunkt og dens højde. Ét fortrydelsestrin. Se [Placér stålprofiler og standarddele](topic:steel-and-standard-parts).

### PARTSLIST

Aliaser: `PLIST`. `Top left corner of the parts list`, derefter `Text height <2.5>`: tegner en tabel over hver standarddel og stålprofil placeret fra biblioteket (elementnumre, antal, del, standard, størrelse, længde, materiale, masse). Ét fortrydelsestrin. Se [Placér stålprofiler og standarddele](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliaser: `PU`. Fjerner blokdefinitioner, som intet bruger. Ingen spørgsmål.

### DELBLOCKS

Eller {{ui:Blokke}} › {{ui:Mere}} › {{ui:Slet blokke}}. `Select block to delete [Name/eXit]`: vælg en blokreference, eller `N` for listen over blokke med et filter (vælg flere), eller `X` / {{key:Enter}} for at slutte. Hver reference går — i modellen, på hvert ark og inde i andre blokke — og derefter definitionen, og kommandolinjen siger, hvad der blev slettet, og hvad der ikke kunne. Unavngivne blokke og tilknyttede tegninger tilbydes ikke. Prompten kommer tilbage til den næste blok; hele kommandoen er ét fortrydelsestrin.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} indsætter det, du kopierede ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}), som én blok: vælg indsætningspunktet, og én reference til en ny blok lægges der, valgt. Blokken får et eget navn (`A$C` og et tal); {{cmd:RENAME}} giver den dit. Ét fortrydelsestrin fjerner referencen og blokken.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} spørger efter blokken, der skal erstattes, og blokken, der skal sættes i dens sted (`?` lister blokkene), og ændrer derefter hver reference i modellen, på hvert ark og inde i andre blokke. Hver reference beholder sit sted, sin skala, rotation, lag og værdierne for de attributter, begge blokke har; attributter kun den nye blok har, starter på deres standarder, og den fortæller, hvilke værdier der blev fjernet. Når intet længere bruger den gamle blok, tilbyder den at fjerne den. Den afviser tilknyttede tegninger og en erstatning, der ville sætte en blok inde i sig selv. Ét fortrydelsestrin.

### MINSERT

{{cmd:MINSERT}} placerer en blok i rækker og kolonner: blokkens navn, indsætningspunkt, skala, rotation, antal rækker og kolonner, og afstandene mellem dem. Hele sættet drejer med rotationen. Hver er sin egen reference (10,000 højst), så enhver af dem kan flyttes eller slettes bagefter.

### BLOCKSPALETTE

Aliaser: `BLOCKSPAL`; eller {{ui:Blokke}} › {{ui:Mere}} › {{ui:Blokpanel}}. Viser panelet {{ui:Blokke}} med markøren i dets filter. Hver blok har et lille billede; de senest placerede kommer først. De to knapper ved siden af filteret skifter mellem en liste og et gitter af billeder. Klik på et billede (eller {{ui:Indsæt}}) for at placere blokken med {{cmd:INSERT}}, eller træk det ind på tegningen for at placere den, der hvor du slipper.

{{ui:Biblioteker}}, under listen: {{ui:Tilføj en tegning}} tager en DWG- eller DXF-fil af din egen og lister dens blokke med billeder, og hele tegningen som én blok. Placeres en, kopieres dens definition (og de blokke den indlejrer, og deres lag) ind i denne tegning, som {{cmd:INSERT}}s valgmulighed `File` gør; en blok der allerede er her med samme definition, bruges uden spørgsmål, og en med samme navn der er anderledes, spørger {{ui:Behold eksisterende}} eller {{ui:Omdøb}}. I en browser bliver filen til siden lukkes. I CadCraft Studio lister {{ui:Tilføj en mappe}} tegningerne i en mappe, hver åbnet når du klikker på den, og filer og mapper huskes. Det lille x fjerner et bibliotek fra listen; filen berøres ikke. Det fælles {{ui:Bibliotek}} er noget andet: se [Indsæt fra en fil eller biblioteket](topic:insert-from-file-and-library).

### BCONVERT

Eller {{ui:Blokke}} › {{ui:Mere}} › {{ui:Konvertér gentagelser til blokke}}. Finder geometri, der gentages, og gør hver kopi til en reference til én blok.

- `Select the objects that repeat, or [Block]`: objekterne i én kopi. `B` navngiver i stedet en eksisterende blok, for at finde løse kopier af dens objekter.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` og `P` skifter, hvad der tæller som en kopi; {{key:Enter}} søger. Indstillingerne huskes.
- `Name for the new block <Block1>`, derefter `Specify the block's base point` ({{key:Enter}} tager markeringens nederste venstre hjørne).
- Den siger, hvor mange andre sæt objekter der har samme geometri, fremhæver alt, den ville erstatte, og spørger `Yes/No`.

En kopi er de samme objekter flyttet og drejet i en vilkårlig vinkel (og spejlet eller skaleret med én faktor, når det er slået til): hvert objekt skal have sin modpart, inden for en milliontedel af markeringens størrelse. Hver reference får sin egen rotation og skala (en spejlet en negativ Y-skala), og det lag objekterne delte. Objekter på låste lag lades være og tælles. Den søger i det åbne rum (modellen eller det åbne ark). En meget stor søgning stopper ved en arbejdsgrænse og siger det. Ét fortrydelsestrin.

### BSEARCH

Eller {{ui:Blokke}} › {{ui:Mere}} › {{ui:Find blokke}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: en del af et blocknavn, eller et mønster med `*` og `?`. Lister hver blok med dens referencer her og i hele tegningen.
- `A`: en attributværdi, eller `TAG=value`. Lister de blokke, hvis referencer har den, med de fundne værdier. Konstante attributter tæller.
- `G`: vælg objekter, eller én blokreference, og de blokke, hvis form er mindst 85 % ens, listes, bedste først. Størrelse, rotation og spejling tæller ikke. Målet sammenligner afstandene mellem punkter spredt langs konturerne, så det finder ligende; brug {{cmd:BCONVERT}} til at finde nøjagtige kopier.

De referencer, der findes i det åbne rum, vælges, klar til næste kommando.

### BREPLACE

Eller {{ui:Blokke}} › {{ui:Mere}} › {{ui:Erstat blokke}}. `Replace [Selected/All]`: `S` erstatter de blokreferencer, du vælger, med den blok du navngiver; `A` spørger efter en blok og dens erstatning og ændrer hver reference, som {{cmd:BLOCKREPLACE}} gør (den samme kode). En reference beholder sit sted, sin skala, rotation, lag og værdierne for attributter, som begge blokke har; værdier den nye blok ikke har plads til, fjernes og navngives. `?` lister blokkene. Ét fortrydelsestrin.

### DATAEXTRACTION

Aliaser: `EATTEXT`, `DX`; eller {{ui:Blokke}} › {{ui:Mere}} › {{ui:Dataudtræk}}. Lister blokke, deres attributter og objektegenskaber som en tabel eller en CSV-fil.

- Virker på markeringen, eller spørger `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]`, når markeringen rummer begge. Unavngivne blokke, tabeller og materiallister listes aldrig.
- Den udskriver de kolonner, du kan vælge (navn, type, lag, X, Y, rotation, skala, længde, areal, farve, linjetype, rum og én pr. attributmærke), derefter `Columns, by name or number with commas between`. {{key:Enter}} tager de med stjerne: navnet og hver attribut for blokke; type, lag og længde for objekter.
- `Put identical rows together with a count? [Yes/No] <Yes>`, derefter `Put the list in a: [Table/Csv] <Table>`. En tabel er en almindelig tabel ({{cmd:TABLEDIT}} redigerer den) og er ikke levende: kør kommandoen igen, når tegningen ændres.
- Den afviser en kolonne, der ikke er på listen. En tabel rummer 1,999 datarækker; en CSV-fil rummer dem alle.

### COUNTTABLE

Tæller blokreferencerne i markeringen (eller i det åbne rum) og lægger optællingerne i en tabel (`Block`, `Count`) eller en CSV-fil. For en optælling, der følger tegningen af sig selv, se {{cmd:BOMTABLE}}.

## Ark og plot

### LAYOUT

Aliaser: `LO`, `NEWLAYOUT`; eller {{ui:+}}-knappen under tegningen. Et nyt ark med en ramme, et tegningshoved og én viewport, på ISO A3 (eller Tabloid for tegninger i tommer eller fod). Ingen spørgsmål.

### MVIEW

Aliaser: `MV`. Kun på et ark ({{cmd:VPORTS}} på et ark gør det samme).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. Viewporten viser hele modellen i en standardskala.
- `P` (Polygonal): klik på konturens hjørner (`Undo`, `Close`), {{key:Enter}} når du er færdig. Den afviser færre end tre hjørner.
- `O` (Object): `Select a closed object for the viewport's outline`: en lukket polylinje, en cirkel eller en ellipse på arket. Viewporten får dens form (kurver som korte lige stykker); objektet bliver, som det var. Den afviser et objekt, der ikke er lukket.

### VPCLIP

Klipper en viewport, der allerede er på arket. `Select viewport to clip` (eller vælg den først), derefter `Select the object to clip to [Polygonal/Delete]`:

- Klik på en lukket polylinje, cirkel eller ellipse, eller {{key:Enter}} (eller `P`) for at klikke på hjørnerne af en polygon.
- `D` (Delete, tilbudt når viewporten er klippet) gør den til et rektangel igen: boksen rundt om den kontur, den havde.
- Det viewporten viser, flytter sig ikke på papiret, og dens skala bliver. Modellen tegnes og plottes kun inden for konturen, og rammen følger den. Ét fortrydelsestrin.
- En klippet viewport har et greb ved hvert hjørne af sin kontur, ud over sit centrum og de fire hjørner af dens boks (at trække et boks-hjørne strækker konturen med). {{ui:Egenskaber}} viser Outline: Rectangle, eller Clipped med antallet af hjørner.
- DWG- og DXF 2000-filer gemmer konturen for CadCraft. Andre programmer åbner viewporten som det rektangel, der er omkring den; DXF R12 gemmer kun rektanglet.
- På modelfanen siger den, at viewports er på ark.

### VPORTS

Aliaser: `VIEWPORTS`. {{cmd:SPLIT}} er det samme fra et ark også, og {{ui:Visning}} › {{ui:Mere}} › {{ui:Del side om side}}, {{ui:Del stablet}}, {{ui:Fire ruder}}, {{ui:Én rude}} kører den. På modellen: `Enter number of panes [SIngle/2/3/4] <3>`; `2` spørger `[Horizontal/Vertical] <Vertical>` (Vertical = side om side), `3` spørger `[Left/Right] <Right>` (hvor den store rude går). Hver rude beholder sin egen visning og sit eget rum; et klik gør en rude aktiv. På et ark er det {{cmd:MVIEW}}. Se [Del skærmen](topic:split-screen).

### VPVIEW

Ingen aliaser. Kun på et ark.

- `Select viewport` (springes over, hvis en er valgt), derefter på modellen: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Ingen aliaser. Et koordinatsystem af dit eget; ikke en redigering. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: et punkt er en ny oprindelse, derefter `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: oprindelse, et punkt på den positive X-akse, et punkt på den positive Y-side. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` og et navn. Visningen drejer, så den nye X-akse er vandret. Se [Drej visningen og brug dine egne koordinater](topic:ucs-and-turned-view).

### PLAN

Ingen aliaser. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: drejer den aktive rudes visning, så UCS' X-akse (eller verdenens) er vandret. Intet i tegningen flytter sig.

### TURNLEFT, TURNRIGHT, TURNWORLD

Ingen aliaser; eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Drej visningen 90° til venstre}}, {{ui:Drej visningen 90° til højre}}, {{ui:Tilbage til verden}}. Det samme som `UCS Z -90`, `UCS Z 90` og `UCS W`, med visningen, der følger.

### VPLAYER

Ingen aliaser. På et ark, eller inde i en viewport. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` spørger efter lagnavne (kommaer, og `*` og `?` som jokertegn), derefter `[All/Select/Current] <Current>` viewports; Reset sætter hvert lag tilbage til sin standard "frosset i nye viewports"; `V` angiver den standard (`[Frozen/Thawed]`), som {{cmd:MVIEW}} bruger. `?` lister lagene, der er frosset i den aktuelle viewport. Lagpanelets viewport-kolonne gør det samme for én viewport. Se [Frys et lag i én viewport](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliaser: `MS`; eller dobbeltklik inde i en viewport. Kun på et ark. Arbejd på modellen gennem en viewport: den valgte, den eneste på arket, eller `Click inside the viewport to work in`. Panorering og zoom inde i den ændrer viewportens visning (en skærmlåst beholder den, og arket flytter sig i stedet); den nye visning skrives som ét fortrydelsestrin. Se [Arbejd på modellen gennem en viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliaser: `PS`; eller dobbeltklik udenfor viewporten, eller klik på en fane under tegningen. Tilbage til arket.

### PLOT

Aliaser: `PRINT`, `PUBLISH`, `EXPORTPDF`; eller {{key:Mod+P}}. Åbner dialogen {{ui:Plot til PDF}}. Se [Plot til PDF](topic:plot-pdf).

### PLOTSTYLES

Aliaser: `STYLESMANAGER`, `PSTABLES`; eller {{ui:Redigér tabeller…}} i dialogen {{ui:Plot til PDF}}. Åbner {{ui:Plotstiltabeller}}: hvad hver farve udskrives som (farve, gråtone, blæk, linjetykkelse), gemt med tegningen. Se [Plotstiltabeller](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} flytter objekter mellem et ark og modellen gennem en viewport, skaleret og drejet, så de ser ens ud fra den anden side. På et ark vælger du objekter, og de går til modellen (vælg viewporten, når arket har flere). Mens du arbejder på modellen gennem en viewport ({{cmd:MSPACE}}), kommer de valgte objekter til arket. Den siger, hvor mange gange større eller mindre de blev. Viewports bliver på deres ark. Ét fortrydelsestrin.

### ISODRAFT

{{cmd:ISODRAFT}} slår isometrisk tegning `ON` eller `OFF`, eller går direkte ind på planet `Left`, `Top` eller `Right`. Mens den er til: Ortogonal ({{key:F8}}) holder linjer langs planets to akser (venstre: 90° og 150°; top: 30° og 150°; højre: 30° og 90°), polar sporing ({{key:F10}}) følger de samme akser, fang til gitter ({{key:F9}}) bruger det isometriske gitter, og gitteret ({{key:F7}}) tegnes med linjer i 30°, 90° og 150°. {{cmd:ELLIPSE}} får `Isocircle`: giv et centrum og en radius (eller `Diameter`), og den tegner ellipsen, en cirkel viser på det aktuelle plan. Tegningen forbliver flad: det er hjælpemidler til at tegne et perspektivisk billede, ikke en 3D-model. Indstillingen gælder for denne session og gemmes ikke i filen.

### ISOPLANE

{{cmd:ISOPLANE}} vælger det plan, isometrisk tegning arbejder på: `Left`, `Top` eller `Right`. Enter går til det næste plan. Mens isometrisk tegning er til, gør {{key:F5}} det samme midt i en kommando; mens den er fra, er {{key:F5}} overladt til browseren.

## Forespørgsel

### CAL

Udskriver værdien af en beregning, som den ville læses, hvor som helst en længde skrives.

- `Expression`: skriv den, for eksempel `12'6"+3/4"` eller `(24'-0")/3`, og tryk {{key:Enter}}. CadCraft udskriver `= 12'-6 3/4"   (150.75 drawing units)`. Se [Regning i en skrevet værdi](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliaser: `DI`; eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Mål afstand}}.

- `Specify first point`, `Specify second point`. Udskriver afstand, vinkel, Delta X og Delta Y.

### AREA

Aliaser: `AA`; eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Areal}}. Udskriver areal og omkreds.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Klik eller skriv hjørner; ved `Specify next point (Enter closes) [Undo]` trykker du {{key:Enter}} for at lukke konturen. `U` tager det sidste hjørne tilbage.
  - {{key:Enter}} eller `O`, derefter `Select object`: en cirkel (udskriver dens omkreds), en ellipse, en polylinje (en åben lukkes af en lige linje for arealet, og dens længde udskrives) eller en skravering (huller trækkes fra).
  - `A` (Add area) og `S` (Subtract area) holder en løbende total: prompten starter med `(ADD mode)` eller `(SUBTRACT mode)`, hvert areal lægges til eller trækkes fra, og `Total area = …` udskrives efter hvert. I disse tilstande vælger `O` objekter, indtil {{key:Enter}}, og {{key:Enter}} ved den første prompt afslutter kommandoen.

### MEASUREGEOM

Aliaser: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; efter hver måling spørger den igen, med `eXit` som standard.

`Quick` måler rundt om markøren, mens du flytter den: afstanden til det nærmeste objekt til højre, over, til venstre og under (langs akserne i det aktuelle UCS), tegnet undervejs; og vinklen, hvor to af disse naboer er lige og mødes. Et klik skriver de fire afstande, den frie bredde og højde og vinklerne til historikken; Enter går tilbage til valgmulighederne. Den læser det, der er på skærmen.

- `D`: to punkter, som {{cmd:DIST}}.
- `R`: `Select arc or circle`; udskriver radius og diameter.
- `A`: en bue (dens inkluderede vinkel), en linje og så en anden linje (vinklen mellem dem, mod deres fjerne ender), eller {{key:Enter}} og tre punkter (hjørnet, derefter de to ender).
- `AR`: som {{cmd:AREA}}, ét areal.

### ID

Ingen aliaser. `Specify point`; udskriver dets X og Y.

### LIST

Aliaser: `LI`, `LS`. `Select objects`; udskriver hvert objekts type, lag og hovedmål.

### MASSPROP

{{cmd:MASSPROP}} giver tværsnitsegenskaberne for de regioner og lukkede objekter, du vælger, samlet: areal, omkreds, afgrænsningsboks, tyngdepunkt, inertimomenter om X- og Y-akserne gennem oprindelsen, produktet af inertia, gyrationsradier, de samme momenter om tyngdepunktet og hovedmomenterne med retningerne af deres akser. Huller i en region tæller som huller. Tal er i tegningsenheder og præcise for konturer lavet af linjer og buer; ellipser og splines måles som korte lige segmenter, og det siger den. Efter rapporten spørger den, om den skal skrive den til en tekstfil. Objekter der ikke er lukkede, lades være, og den siger, hvor mange.

## Visning, fil og øvrigt

### ZOOM

Aliaser: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Klik to hjørner for et vindue. `E`, `A` eller Enter: hele tegningen.
- `P` (Previous, eller {{ui:Forrige}} på værktøjslinjen) går tilbage til visningen før, op til 10 visninger pr. fane; en række hjulskridt eller ét panorering tæller som én visning.
- Et tal såsom `2`, `2x` eller `0.5x` (eller `S` og så tallet) zoomer ind eller ud med den faktor omkring midten af skærmen.
- `C` spørger `Specify center point` og `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT og PDF-kommandoerne

Aliaser: `PDFATT` for {{cmd:PDFATTACH}}, `PDFIM` for {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} lægger en PDF-side under tegningen (fil, side, indsætningspunkt, skala, rotation); {{cmd:PDFIMPORT}} gør en sides linjer, kurver, udfyldninger og tekst til tegningsobjekter på lag, der er navngivet efter PDF'en, i rigtig størrelse, en angivet skala eller skaleret ud fra to punkter og en reel afstand. {{cmd:PDFCLIP}} klipper et underlag, {{cmd:PDFADJUST}} sætter dæmpning, kontrast, monokrom eller slår det fra, {{cmd:PDFLAYERS}} skifter PDF'ens egne lag, og {{cmd:PDF}} giver CadCraft de filer, en tegnings underlag bruger, igen. Se [PDF-underlag](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Tegnings-autofuldførelse: uden en kommando kørende viser et grågråt spøgelse, hvad din tegnings egne mønstre siger, kommer næste. {{cmd:AUTOCOMPLETE}} slår det `On` eller `Off` (også {{ui:Indstillinger}} › {{ui:CadCraft}}) eller `Show`'er, hvad det ville foreslå nu. **Tab** tegner spøgelset som ét fortrydelsestrin, **Esc** afviser det, indtil tegningen ændrer sig. Det finder tre ting i de nyeste objekter: den næste kopi af noget tegnet to gange eller mere i et lige trin (stolper, søjler, en trappes stigtrin og trin), de næste trin i en polylinjetrappe, og den manglende side af et rum eller en vægkæde. Midt i {{cmd:LINE}} eller {{cmd:PLINE}} er spøgelset det **næste punkt**: det næste trin i en trappe (stigtrin, trin, stigtrin …), det fjerde hjørne i et rektangel, punktet der lukker det, eller endnu et lige trin. Før markøren tæt på det og tryk **Tab**, som om du havde klikket der; fortsæt eller tryk Enter. Regnet ud på denne computer efter regler, uden model.

### AUTOSHEET

Alias: `ASH`. Ark der lægger sig selv ud. {{cmd:AUTOSHEET}} tager tegningens dele (dine navngivne visninger, eller de adskilte dele af modellen, eller hele modellen), vælger en papirstørrelse (eller den du angiver), giver hver del en standardskala (én skala for alle, eller den største hver kan tage), og placerer visningerne i rækker på nye ark med et tegningshoved og en billedtekst (navn og skala) under hver. Det der ikke passer på ét ark, får sit eget ark. Ét fortrydelsestrin. Regnet ud på denne computer efter regler, uden model.

### PHOTOSKETCH

Alias: `PSK`. Skitsefoto til tegning. Vælg et foto (JPEG, PNG eller TIFF) af en håndtegning på et ark papir. {{cmd:PHOTOSKETCH}} finder arkets fire hjørner, retter perspektivet, tager den papirstørrelse du navngiver (`Paper`, eller den nærmeste standard) og skitsens `Scale` (1 : n), derefter sporer pennelinjerne til linjer, buer og cirkler, med et lag for hver pennefarve (sort, rød, blå, grøn). Hvis den ikke kan finde papirets kant, tager den hele fotoet som arket og siger det. Skrift lades være. Ét fortrydelsestrin. Gjort på denne computer med klassisk billedbehandling, uden model, og intet sendes nogen steder hen. Se også de scannede-tegning-kommandoerne.

### AUTODIM

Alias: `ADIM`. Automatisk målsætning efter regler. {{cmd:AUTODIM}} målsætter de valgte objekter (eller hele tegningen) ud fra deres vandrette og lodrette kanter: en kæde af målsætninger langs de sider du vælger (`Sides`), én samlet målsætning udenfor den, bredden af hver åbning (et mellemrum mellem kollineære vægliner), en diameter for hver størrelse hul, og med `Grid` afstanden mellem gitterlinjer. En målsætning, der allerede er der, laves ikke igen. Ét fortrydelsestrin. Regnet ud på denne computer efter regler, uden model.

### GRIDMOVE

Alias: `GM`. At flytte en gitterlinje fører sættet med. {{cmd:GRIDMOVE}} flytter en gitterlinje (en linje på et lag, hvis navn siger grid eller axis) og det, der hænger på den: vægge med en ende på linjen strækkes for at følge den, vægge langs den flytter sig hele, søjler (blokreferencer og cirkler på linjen), dens boble og mærke flytter sig, og målsætninger, hvis punkter ligger på den, måler den nye afstand. Giv to punkter (kun den del, der går tværs over linjen, tæller) eller `Distance`. Ét fortrydelsestrin fører det hele tilbage. Gjort efter regler på denne computer.

### DETAILS

Alias: `DET`. Detaljer der finder dig. {{cmd:DETAILS}} gemmer dit firmas egne detaljer: `Add` sætter en blok fra denne tegning på listen, `List` og `Remove` administrerer den, og `Find` rangerer dem for det, der er valgt (eller det du tegnede sidst), efter ordene på dets lag, bloknavne, skraveringsmønstre og noter sammenlignet med hver detaljes navn og noter, så en vinduesramme finder din vandbrætsbeklædning. Vælg et nummer og et punkt for at placere den. Med `Hint` slået til (også {{ui:Indstillinger}} › {{ui:CadCraft}}) giver valg af noget, en detalje matcher, en linje i statuslinjen. Listen gemmes i denne browser, på denne computer, og det er den liste, der søges i. `Share` sætter den også i din Dokumenter-mappe (`.cadcraft/firm-details.json`, med hver blok og dens tegning): `Pull` tilføjer det, dit team har og du mangler, `Push` tilføjer det, du har og de mangler, `Both` gør begge, og intet fjernes fra nogen af siderne. Åbn Dokumenter-mappen først ({{cmd:DOCUMENTS}}); når den mappe er en Team Cloud Plan-mappe, deler hele teamet én liste. Et detaljeelement i panelet {{ui:Bibliotek}} har en knap **Tilføj til mit firms detaljer**, der lægger den i samme liste. Regnet ud på denne computer efter ord, uden model.

### SKETCHFIX

Alias: `SKF`. Pennetegninger bliver til præcis geometri. Tryk og træk én frihåndsstreg ad gangen (pen, mus eller finger), og derefter Enter. Hver streg læses som en linje, cirkel, bue, rektangel eller polylinje: næsten vandrette og lodrette linjer gøres præcis vandrette og lodrette, en lukket rund streg bliver til en cirkel, en lukket streg med fire retvinklede hjørner til et rektangel, og strègernes ender trækkes sammen og hen på de ender, der allerede er i tegningen. Ét fortrydelsestrin. Regnet ud på denne computer efter regler, uden model.

### SCANATTACH og de scannede-tegning-kommandoer

Aliaser: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} har ingen. De virker på et billede, ét fortrydelsestrin hver. {{cmd:SCANATTACH}} indsætter en PNG, JPEG, TIFF (én side eller alle) eller en PDF-side, der er et billede. {{cmd:SCANSCALE}} skalerer arket ud fra to valgte punkter og den rigtige afstand. {{cmd:SCANALIGN}} flytter og drejer det til to punkter (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} viser vinklen på arkets lange linjer og drejer arket, når du `Accept` eller giver en `Value`. {{cmd:SCANCLEAN}} gør det sort-hvidt (`Threshold` Auto/Adaptive/Level, `Specks`) og `Run`. {{cmd:SCANCROP}} beholder et vindue. {{cmd:SCANERASE}} sletter et `Rectangle`, `Polygon` eller `Lasso`. {{cmd:SCANTRACE}} sporer linjer og buer over på et nyt lag (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) og rapporterer, hvad den fandt, og hvad den lod være som raster. {{cmd:SCANINFO}} lister den oprindelige fil og trinene. {{cmd:RASTERSNAP}} slår fangning til linjerne i scannede ark til eller fra. Se emnet Scannede tegninger og sporing.

### REGEN og REGENALL

Aliaser: `RE` for {{cmd:REGEN}}, `REA` for {{cmd:REGENALL}}. Genopbygger det, der tegnes på skærmen fra tegningen: {{cmd:REGEN}} den fane du kigger på (på et ark også de modeller dens viewports viser), {{cmd:REGENALL}} hver fane, hver delt rude og hver åben tegning. Brug dem, når billedet ser forældet ud efter en scriptet eller meget stor ændring, eller en assistent redigerede tegningen; selve tegningen berøres ikke, så der er intet at fortryde.

### NAMEDVIEW

Aliaser: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, derefter visningens navn. `S` gemmer visningen på skærmen, `W` et vindue du vælger, `R` viser en gemt visning, `D` sletter en, `?` lister visningerne på denne fane. At gemme under et eksisterende navn erstatter det; hver ændring er ét fortrydelsestrin. Visninger hører til den fane, de blev gemt på. DWG- og DXF-filer gemmer dem (VIEW-tabellen); et arks visninger kommer tilbage på det første ark, da filen ikke siger, hvilket.

### UNDO og REDO

Aliaser: `U` for {{cmd:UNDO}}; {{cmd:REDO}} har ingen. Også {{key:Mod+Z}} og {{key:Mod+Y}}.

### LAYER

Aliaser: `LA`. Hopper til panelet {{ui:Lag}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` eller et navn (`?` lister dem: Continuous, tegningens egne, og DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE med deres `2` (halv) og `X2` (dobbelt) størrelser). {{cmd:LWEIGHT}} (`LW`): linjetykkelsen for nye objekter i mm, eller `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): tegningens linjetypeskala (kan fortrydes). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — det samme som knappen {{ui:LWT}} i statuslinjen. Se [Linjetykkelser og linjetyper](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, derefter det nye navn; objekter eller referencer følger med. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` indtil {{key:Enter}}, derefter `Select object on target layer or [Name]` og `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, derefter `Y`: laget og hvert objekt på det går (ikke lag 0, DEFPOINTS eller det aktuelle lag). Ét fortrydelsestrin hver. Se [Organisér en tegning med lag](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Lag ved at vælge objekter; også i panelet {{ui:Lag}}s menu {{ui:Værktøjer}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, derefter {{key:Enter}}: alle andre lag slås fra. {{cmd:LAYUNISO}} slår dem til igen. {{cmd:LAYOFF}} og {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (eller frosset), igen og igen; `U` tager det sidste tilbage, {{key:Enter}} slutter. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} slår alle lag til, {{cmd:LAYTHW}} tøer alle lag op. Hver kommando er ét fortrydelsestrin. Se [Organisér en tegning med lag](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} starter en tom tegning, og {{cmd:OPEN}} åbner en DWG eller DXF, hver i sin egen fane over tegningen (en urørt ny tegning bruges i stedet for en ny fane). Lukkes en fane med ikke-gemte ændringer, spørges der først. Se [Del skærmen](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, også {{key:Mod+S}}) downloader en kopi i tegningens format: DWG, hvis den blev åbnet fra en DWG, DXF, hvis fra en DXF. En ny tegning bruger det format, der sidst blev valgt i {{ui:Gem en kopi som}} i denne browser, ellers DWG.

{{cmd:SAVEAS}} (også {{key:Mod+Shift+S}}) åbner dialogen {{ui:Gem en kopi som}}: vælg {{ui:DWG}} (og dens {{ui:Version}}), {{ui:DXF R12}} eller {{ui:DXF 2000}}, derefter {{ui:Gem}}. Valget huskes for denne tegning og for nye tegninger i denne browser.

{{cmd:DXFOUT}} downloader altid en DXF R12-kopi, uden at ændre det format, {{cmd:SAVE}} bruger.

Se [Filer: hvad der åbnes, hvad der gemmes](topic:files#saving).

### TOUR

Aliaser: `TUTORIAL`. Starter den seks-trins rundvisning i første tegning igen. Se [Kom i gang](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliaser: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Se [Indstillinger](topic:settings#toolbar-position).

### COMMANDLINE

Aliaser: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: fastgør eller frigør kommandolinjen, gør den til én linje, spørger hvor mange historiklinjer der vises (0 til 12), eller åbner historikken. Se [Indstillinger](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: bjælkerne over tegningen, som de var, eller kompakte. Se [Indstillinger](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: det trin, {{ui:Polar}} sporingslinjerne flugter med (mere end 0, op til 180). Huskes i denne browser.

### UNITS

Aliaser: `UN`. Hvordan længder skrives og indtastes.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural og Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. De andre: `Enter number of decimal places (0 to 8)`.

Nye målsætninger følger det. Ét fortrydelsestrin. Det samme som {{ui:Længdeformat}} og {{ui:Præcision}} under {{ui:Aktuelle indstillinger}}; se [Fod og tommer](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliaser: `GDS`. Vis en IC-layout (en GDSII-stream-fil): labforsøg, kun til visning og måling.

- En filvælger tager en `.gds`-fil; med flere topceller `Enter the top cell to draw`.
- Hvert lag og datatype bliver til et tegningslag (`GDS 1`, `GDS 2/5`), referencer og arrays placeres fladt, i filens brugerenhed (normalt mikrometer). Ét fortrydelsestrin. Intet simuleres eller kontrolleres, og filen skrives ikke tilbage.

### DIAGRAM

Aliaser: `TEXTDIAGRAM`, `T2D`. Et diagram ud fra tekst.

- En boks tager teksten (eller én linje med `;` mellem udsagn på kommandolinjen): et Mermaid-flowdiagram, et PlantUML-komponentdiagram, D2 eller en fra-til-liste.
- `Specify the top left corner of the diagram`, derefter `Specify the text height`.

Blokke og forbindelser er almindelige objekter på laget `Diagram`, valgt når det slutter. Ét fortrydelsestrin. Se [Tegn et diagram ud fra tekst](topic:text-to-diagram).

### OLELIST

Aliaser: `OLES`. De OLE-objekter en DWG bærer, som CadCraft ikke selv kan placere.

- Lister hver enkelt: nummer, type, størrelse, om den gemte et billede.
- `Enter an option [Place/eXit] <eXit>`: Place spørger efter nummeret, det nederste venstre hjørne og bredden, og tegner en ramme med billedet. Ét fortrydelsestrin; det gemte objekt ændres ikke. Se [Billeder](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliaser: `SHX`. Dine egne SHX-skrifttyper.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Mappe}} læser hver `.shx` i en mappe (CadCraft Studio; igen ved hver start), {{ui:Filer}} tager valgte filer (browseren), {{ui:Vend om}} lægger en skrifts bogstaver ud bagfra. Tekststile der nævner en indlæst skrift, tegnes i den. Se [Tegn tekst i dine egne SHX-skrifttyper](topic:shx-fonts).

### LIMITS

Hvor stor tegningen er tænkt at være.

- `Specify lower left corner or [ON/OFF] <current>`: et punkt, `ON` eller `OFF`.
- `Specify upper right corner <current>`.

Gitteret udfylder grænserne, {{cmd:ZOOM}} All viser dem, og med grænserne ON afvises et punkt udenfor (`**Outside limits`). Ét fortrydelsestrin; gemmes i DWG og DXF. Se [Angiv tegningsgrænser](topic:drawing-limits).

### AUNITS

Aliaser: `ANGUNITS`. Hvordan vinkler vises og skrives.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, eller for de to andre `Enter precision` (0 grader, 2 minutter, 4 sekunder, 5 til 8 decimaler af et sekund).

Ét fortrydelsestrin; gemmes i DWG og DXF. Det samme som {{ui:Vinkelformat}} under {{ui:Aktuelle indstillinger}}. Se [Skriv og vis pejlinger og vinkler](topic:bearings-and-angles).

### APPLOAD

Aliaser: `AP`; eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Indlæs program…}}. Dialogen {{ui:Indlæs programmer}}: indlæs `.lsp`-rutiner og `.dcl`-dialogfiler, fjern dem, indlæs dem igen fra historikken, og Startup Suite. En rutines `(defun c:NAME …)`-kommandoer virker så som alle andre. Se [Indlæs programmer](topic:load-applications) og [Kør LISP-rutiner](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Redigér aliasser…}}) åbner din aliasfil (`ALIAS, *COMMAND`-linjer); {{ui:Gem}} anvender den. {{cmd:REINIT}} anvender den igen. Se [Rediger kommandoaliasser](topic:command-aliases).

### OPTIONKEYS

Aliaser: `OPTKEYS`; eller {{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Valgmulighedernes bogstaver}} › {{ui:Redigér…}}. Åbner din fil med valgmulighedsbogstaver (`COMMAND.OPTION, LETTERS`-linjer, såsom `ARRAY.PO, P`); {{ui:Gem}} anvender den, og {{cmd:REINIT}} anvender den igen. Se [Giv kommandoens valgmuligheder egne bogstaver](topic:option-letters).

### LISPEDIT

Aliaser: `VLIDE`; eller {{ui:Visning}} › {{ui:Mere}} › {{ui:LISP-editor}}. Åbner LISP-editoren, et vindue, der bliver åbent ved siden af tegningen.

- Teksten: linjenumre, parentesens makker ved markøren markeret (rød, når der ikke er en), {{key:Enter}} indrykker den nye linje under den åbne parentes, {{key:Tab}} skriver to mellemrum, {{key:Esc}} forlader teksten.
- {{ui:Indlæs i tegningen}} ({{key:Ctrl+Shift+Enter}}): læser hver form, som {{cmd:APPLOAD}} gør med filen, og laver dens `c:`-kommandoer. Filen vises i {{cmd:APPLOAD}}s liste.
- {{ui:Kør markering}} ({{key:Ctrl+Enter}}): evaluerer de valgte former, eller formen markøren står i.
- {{ui:Stop}}: afslutter en rutine, der kører.
- {{ui:Konsol}}: hvad rutinen udskrev, og hver fejl med sin linje; klik på en fejl for at gå dertil. Teksten køres én form på øverste niveau ad gangen, så linjen er formens, eller inde i den linjen, der kalder den funktion, fejlen navngiver.
- {{ui:Ny}}, {{ui:Åbn}}, {{ui:Gem}} ({{key:Ctrl+S}}): en `.lsp`-fil. Teksten gemmes også i denne browser, så lukning af vinduet ikke mister den.

Ved siden af teksten: de funktioner rutinen definerer, dem den kalder, som denne LISP ikke har endnu, dem den kalder, der hverken er defineret i den eller indbygget, og de fulde lister over, hvad der er bygget, og hvad der ikke er.

En tekst med en parentes, der aldrig lukkes, eller en streng, der aldrig slutter, køres ikke: linjen navngives. Der er ingen trin-for-trin-debugger, brudpunkter eller overvågningsvindue. Se [Kør LISP-rutiner](topic:run-lisp).

### HELP

Aliaser: `?`. Udskriver hver kommando, dens aliaser og en beskrivelse på én linje i kommandolinjens historik. Den åbner ikke denne hjælp: tryk {{key:F1}} eller klik på {{ui:Hjælp}} for det.

## Prompten Vælg objekter

Ved enhver `Select objects`-prompt: klik på objekter, tegn vinduer (fra venstre mod højre) og kryds (fra højre mod venstre) med to klik, eller tryk og træk et lasso ({{key:Space}} mens du trækker: vindue, kryds, hegn), {{key:Shift}}+klik for at fjerne, og tryk {{key:Enter}} for at afslutte. Du kan også skrive `ALL` (alt), `L` (det sidste objekt), `P` (Previous: det den sidste kommando brugte), `F` (Fence: objekter en linje af punkter krydser; `U` tager et punkt tilbage), `W` (Window), `C` (Crossing), `R` (Remove mode: valg tager objekter væk; prompten siger `Remove objects`) og `A` (Add again). `?` lister dem. De vises ikke i prompten. {{key:Tab}} over overlappende objekter fremhæver det næste; klik for at vælge det. Se [Vælg objekter](topic:select-objects).

### ACCESS

Alias: `AX`. Tegning uden syn. {{cmd:ACCESS}} slår Access til eller fra (`On`, `Off`) og skifter fangelyde (`Sound`) og talte kommandoer (`Voice`); den siger tilstanden først. Med Access til læses hver kommando og hvert resultat op via din skærmlæser, og tegneområdet har en tastaturmarkør. Hjælpeemnet "Draft without sight" har tasterne.

### DESCRIBE

Alias: `DESC`. Sig, hvad tegningen indeholder: hvor mange objekter, af hvilken slags, hvor store, hvor mange lag, hvad der er valgt. Læser kun; ændrer intet.

### WHEREAMI

Alias: `WHERE`. Sig, hvor markøren er, i tegningens enheder.

### NEARBY

Sig, hvad der ligger tæt på markøren, nærmeste først, hver med sin afstand og den side, den er på.

### SAYSEL

Sig, hvad der er valgt, én sætning pr. objekt (linjens længde, ender og vinkel; cirklens radius og centrum; tekst som skrevet).

### VOICE

Slå talte kommandoer til eller fra. De genkendes på denne computer; hvor browseren ikke kan det, forbliver tale slået fra, medmindre du vælger browserens onlinetjeneste i indstillingerne.

### TOUCHCROSSHAIR

Alias: `TCX`. Det forskudte markørkors til tegning med en finger, så fingerspidsen ikke dækker det punkt, du vælger. Mens den er til, vælger én finger på tegningen ikke: den flytter et markørkors, der sidder over fingeren og til den ene side. Fangninger og sporing følger markørkorset. At løfte fingeren vælger intet og lader markørkorset blive. For at vælge trykker du på knappen {{ui:Klik}} i tegningens hjørne, eller trykker hvor som helst på tegningen med en anden finger. Hold {{ui:Klik}} nede, mens du flytter den anden finger, for at trække (et valgvindue, et lasso, et greb). En finger, der holdes stille, eller knappen {{ui:Enter}}, er Enter. To fingre panorerer og zoomer som før. Nær den nederste kant og den fjerne sidekant trækker markørkorset sig ind mod fingeren, så hele tegningen kan nås. En pen og en mus vælger altid direkte.

{{cmd:TOUCHCROSSHAIR}} siger tilstanden og spørger `ON`, `OFF`, `Auto` (kun hvor en finger er den eneste markør, så den er fra på en computer med mus), `Distance` (hvor langt markørkorset står fra fingeren, 24 til 240 pixel) eller `Side` (`Left`: op og til venstre, for højrehånden; `Right` for venstrehånden; knapperne flytter sig til det andet hjørne). De samme valg findes i {{ui:Indstillinger}} › {{ui:CadCraft}}, og på en enhed med touchskærm har statuslinjen en kontakt {{ui:Forskudt markørkors}}. Valgene huskes i denne browser.

### WHOHAS

Siger, hvem der har en tegning åben. I CadCraft Studio på en computer skriver en åbnet DWG eller DXF en lille låsefil ved siden af sig (`Plan.dwg.cclock`: hvem, siden hvornår, hvilken version), opdaterer den hvert minut, mens tegningen er åben, og fjerner den, når tegningen lukkes. Åbnes en tegning, som en anden har åben, siger den hvem og siden hvornår, og tilbyder {{ui:Åbn skrivebeskyttet}} (Gem spørger så om et nyt navn), {{ui:Åbn alligevel}} (den anden person får besked ved deres næste opdatering) eller {{ui:Annuller}}. Gemmes der over en fil, som en anden har åben, spørges der først. En lås, der ikke er opdateret i fem minutter, siges at være forældet: den anden kopi blev lukket uden at gemme, eller computeren sover.

{{cmd:WHOHAS}} spørger `Current` (den åbne tegning), `File` (vælg en), `FOlder` (vælg en mappe: hver tegning i den, der er åben et sted, listes), `Path` (skriv en fuld sti) eller `Name` (det navn andre ser; dit kontonavn, når du er logget ind). Studio kan kun nå mapper, du har valgt: for en tegning åbnet fra en mappe, der aldrig blev valgt, siger den én gang, at den ikke kan notere tegningen som åben; `FOlder` vælger mappen, og låse virker der fra da af. Låsen er en note til folk, ikke en spærring: et andet program kan stadig skrive filen. I en browser findes der ingen mapper at kigge i, og kommandoen siger det.

### OVERKILL

Sletter dublerede objekter og rydder op i overlappende linjer og buer, til tegninger der kommer fulde af dobbelte linjer. `Select objects to clean up`, {{key:Enter}}, derefter {{key:Enter}} igen for at rydde op med de viste indstillinger, eller ændr én først:

- `Tolerance`: hvor tæt to koordinater skal være for at tælle som ens (0.000001 til at starte med; 0 betyder helt ens).
- `Ignore`: egenskaber der må være forskellige mellem to ellers ens objekter. Skriv et navn for at skifte det: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, eller `None` / `All`. {{key:Enter}}, når du er færdig.
- `Overlap`: til eller fra. Til: linjer langs én ret linje, der overlapper, bliver til én linje (en linje, der ligger inde i en anden, slettes simpelt hen), og buer på én cirkel, der overlapper, bliver til én bue; buer, der lukker en hel omdrejning, bliver til en cirkel, og en bue, der ligger på en cirkel, slettes.
- `Ends`: til eller fra. Til: linjer langs én ret linje og buer på én cirkel, der kun rører ende mod ende, bliver til ét stykke.

Hver type objekt tjekkes for dubletter: to objekter er dubletter, når deres geometri er den samme inden for tolerancen, og deres lag, farve, linjetype, linjetypeskala, linjetykkelse, tykkelse, gennemsigtighed og højde passer (minus dem, du ignorerer). Linjer og åbne polylinjer matcher også, når de er tegnet den modsatte vej. Det første objekt i tegnerækkefølgen bliver, og beholder sine egne egenskaber. Kommandoen rapporterer, hvor mange objekter den tjekkede, og slettede: dubletter, sammenlagte overlappende stykker, stykker sat sammen ende mod ende. Ét {{cmd:UNDO}} fører det hele tilbage. Indstillingerne gælder, indtil du lukker tegningsvinduet.

Den lader være: objekter på låste lag og skjulte objekter. Den sammenlægger ikke linjer med en højde (Z) (rene dubletter af dem går stadig), og den rører ikke segmenter inde i en polylinje (de tyndes ikke), en linje, der ligger på et polylinjesegment, og en lukket polylinje tegnet den modsatte vej.

### DRAWORDER

Ændrer, hvilke objekter der tegnes forrest. `Select objects to re-order`, {{key:Enter}}, derefter `Above objects`, `Under objects`, `Front` eller `Back` ({{key:Enter}} = `Back`). `Above objects` og `Under objects` spørger efter referenceobjekterne: markeringen går lige forrest foran det forreste af dem, eller lige bag det bageste. De valgte objekter beholder deres egen rækkefølge indbyrdes. Ét fortrydelsestrin. Rækkefølgen gemmes med tegningen i DWG og DXF, hvor det er den rækkefølge, objekterne skrives i.

På skærmen tegnes hvert objekt i tegningens rækkefølge, som andre programmer, der åbner filen, tegner det: en massiv skravering, en bred polylinje eller en tekstmaske dækker linjer og tekst bag den, og det, der er foran den, dækker den. Hvor en linje krydser en tekst, vises begge. Billeder og vedhæftede PDF-sider bliver under linjearbejdet. I en meget stor tegning, hvor udfyldninger og linjearbejde overlapper og skifter mere end 256 gange, beholder de første 256 deres rækkefølge, og resten tegner deres udfyldninger under linjerne, så tegningen tegnes hurtigt.

### TEXTTOFRONT

Bringer tekst, målsætninger og henvisninger foran alt andet i det åbne rum: `Text`, `Dimensions`, `Leaders` eller `All` ({{key:Enter}} = `All`). Ét fortrydelsestrin. Den siger det, når der ingen er, eller når de allerede er forrest.

### HATCHTOBACK

Sender hver skravering i det åbne rum bag alt andet, så udfyldninger holder op med at dække linjearbejde og tekst i den gemte fil. Ingen prompter. Ét fortrydelsestrin.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Viser kun de valgte objekter: alt andet i det åbne rum forsvinder fra synet, indtil {{cmd:UNISOLATEOBJECTS}}. I modsætning til {{cmd:LAYISO}} virker den på de objekter, du vælger, uanset deres lag, og ændrer ingen lag. Skjulte objekter tegnes ikke, vælges ikke, fanges ikke til, zoomes ikke til og plottes ikke, og kommandoer der tager `ALL` springer dem over. Det du tegner, mens objekter er isoleret, vises som sædvanligt.

Det gælder kun for sessionen: intet om det gemmes med tegningen, det er ikke et fortrydelsestrin, og når tegningen åbnes igen, vises alt. Mens objekter er skjult, viser statuslinjen en knap med deres antal; klik på den for at vise dem igen.

### HIDEOBJECTS

Skjuler de valgte objekter, indtil {{cmd:UNISOLATEOBJECTS}}. Samme regler som {{cmd:ISOLATEOBJECTS}}: kun for sessionen, ikke gemt, ikke et fortrydelsestrin.

### UNISOLATEOBJECTS

Aliaser: `UNISOLATE`, `UNHIDE`. Viser hvert objekt, der er skjult af {{cmd:ISOLATEOBJECTS}} eller {{cmd:HIDEOBJECTS}}, igen, og siger, hvor mange der kom tilbage.

### LAYLOCKFADE

Angiver, hvordan objekter på låste lag ser ud, og om et klik når dem. Den siger den aktuelle tilstand og tager derefter:

- et tal fra 0 til 90: falmningens mængde i procent (50 til at starte med). 0 slår falmningen fra.
- `ON` eller `OFF`: falmning til eller fra, og beholder mængden.
- `Pick`, derefter `Yes` eller `No`: må et klik vælge objekter på låste lag, mens ingen kommando kører? `No` (standard): de kan slet ikke vælges. `Yes`: et klik eller et vindue vælger dem, så {{ui:Egenskaber}} kan vise dem; de kan stadig ikke ændres, og en kommandos egen `Select objects` tager dem aldrig.

Objektfang finder objekter på låste lag under begge indstillinger. Plots falmes aldrig. Begge indstillinger er dine, ikke tegningens, og findes også i {{ui:Indstillinger}} under {{ui:Låste lag}}.

### BURST

Eksploderer blokreferencer og beholder det, attributterne siger. `Select block references to burst`, {{key:Enter}}: hver reference erstattes af blokkens objekter, og hver synlig attributs værdi bliver til almindelig tekst på attributtens eget lag (en attribut på lag 0 havner på referencens lag, ligesom blokkens andre objekter på lag 0). Usynlige attributter forsvinder. En blok inde i blokken forbliver en blokreference. Ét fortrydelsestrin; den rapporterer, hvor mange referencer der blev brudt, og hvor mange attributværdier der blev til tekst.

Den afviser en tilknyttet tegning ved navn (bind den først, eller kopiér fra den med {{cmd:NCOPY}}), og lader andre valgte objekter være. For blokreferencer giver {{cmd:EXPLODE}} de samme objekter; {{cmd:BURST}} tager kun blokreferencer og tæller attributteksten.

### TXT2MTXT

Alias: `T2M`. Samler enlinjede tekster til én afsnitstekst. `Select single-line text to join`, {{key:Enter}}, derefter `Paragraph` (linjerne løber sammen og brydes ved den bredeste linjes bredde) eller `Lines` (hver tekst forbliver sin egen linje); {{key:Enter}} tager den, der blev brugt sidst. Linjerne ordnes øverst til nederst, derefter venstre mod højre, langs retningen af den øverste tekst. Afsnittet hænger fra den øverste tekst's øverste venstre hjørne og tager dens højde, rotation, stil, lag og farve. Ét fortrydelsestrin.

Tekst der allerede er afsnitstekst, tom tekst og andre objekter i markeringen lades være, og kommandoen siger, hvor mange.

### NCOPY

Kopierer objekter ud af en blokreference eller en tilknyttet tegning ind i tegningen, uden at eksplodere noget. `Pick an object inside a block reference or a linked drawing`: objektet nærmest dit valg kopieres der, hvor det vises, uanset hvor mange blokke dybt det sidder; vælg flere, og tryk derefter {{key:Enter}}. Næste: `Base point to move the copies`: {{key:Enter}} lader dem blive på plads, eller giv et basispunkt og et andet punkt. Hele kommandoen er ét fortrydelsestrin.

En kopi tager det lag, den vises på: et objekt på lag 0 inde i en blok havner på laget for den reference, det sad i, og en ByBlock-farve bliver til referencens farve. Fra en tilknyttet tegning bliver lag `Plan|Walls` til `Plan$0$Walls` (det navn linket giver det), lavet med det tilknyttede lags farve, linjetype og linjetykkelse. En attributs værdi kopieres som tekst. Blokreferencer på låste lag kan ikke vælges.

### FLATTEN

Sætter højden (Z) og tykkelsen af de valgte objekter til 0. `Select objects to flatten`, {{key:Enter}}. Den flader også objekterne inde i de blokdefinitioner, markeringen bruger (og blokke inde i dem), så hver reference til disse blokke ændres; tilknyttede tegninger lades være. Ét fortrydelsestrin; den rapporterer, hvor mange objekter der ændrede sig, og siger det, når ingen havde en højde eller tykkelse.

Det CadCraft gemmer af den tredje dimension i en 2D-tegning er: en højde på cirkler, buer, ellipser, punkter, tekst, blokreferencer, skraveringer, henvisninger og polylinjer (deres kote), en højde ved hver ende af en linje, og en tykkelse på linjer, cirkler, buer, polylinjer, punkter og tekst, som filen havde dem. {{cmd:FLATTEN}} rydder netop dem. Den rører ikke 3D-modellen på 3D-fanen, 3D-flader eller legemer, og et objekt tegnet i et skævt plan blev allerede bragt ind i tegningens plan, da filen blev åbnet.

### BREAKLINE

Tegner en linje med et brudsymbol, til en visning der er skåret kort af. Den siger den aktuelle størrelse og forlængelse, derefter `First point of the break line` (eller `Size` / `Extension` for at ændre dem først), `Second point`, og `Where the break symbol sits`: klik langs linjen, eller {{key:Enter}} for midten. Resultatet er én polylinje på det aktuelle lag: linjen, der løber forbi hvert punkt med forlængelsen, med en Z-formet streg lige så høj som størrelsen og halvt så lang.

`Size` og `Extension` huskes som dine indstillinger (størrelsen starter på to gange målsætningens teksthøjde gange målsætningens skala; forlængelsen på halvdelen af størrelsen). {{key:Enter}} gentager kommandoen.

### AUDIT

Kontrollerer den åbne tegning for skader og reparerer den. {{cmd:AUDIT}} ser på hvert objekt i modellen, på arkene og inde i blokke, og på lagtabellen, og lister, hvad den finder, efter slags:

- tal der ikke er endelige, eller urimeligt store;
- objekter uden størrelse: en linje uden længde, en cirkel uden radius, en polylinje med ét punkt, tekst uden bogstaver eller højde, en blokreference med nulskala;
- objekter på et lag tegningen ikke har; referencer til en blok der ikke findes; tekst- og målsætningsstilnavne og linjetypenavne der ikke er i tegningen;
- blokke der indeholder sig selv, direkte eller gennem andre blokke;
- objekter der deler et id, en nøgle eller et filhåndtag;
- målsætninger uden de punkter, de måles fra, og skraveringer hvis kontur ikke er en lukket kontur.

Derefter spørger den `Fix them? [Yes/No]`. `No` ændrer intet. `Yes` retter alt i ét fortrydelsestrin: det, der ikke kan tegnes, fjernes (dårlige tal, ingen størrelse, manglende blok, ødelagt målsætning, en skravering uden brugbar kontur, referencen der lukker en cirkel af blokke); et manglende lag oprettes; ukendte stil- og linjetypenavne går tilbage til standarderne; en delt nøgle udskiftes. Den udskriver, hvor mange objekter der blev fjernet, og hvor mange der blev rettet. De samme fund vises i panelet {{ui:Problemer}}, hver med sin egen {{ui:Reparér}}.

Den afviser intet, men den tjekker kun det, CadCraft selv tegner: data gemt til andre programmer (3D-legemer, OLE-objekter) åbnes ikke.

### RECOVER

Åbner en beskadiget DXF eller DWG. {{cmd:RECOVER}} spørger efter filen, læser det, der kan læses, i stedet for at afvise filen, lister, hvad den sprang over eller antog, og kontrollerer og reparerer derefter tegningen, som {{cmd:AUDIT}} gør med `Yes`.

- DXF: linjer der ikke er et par af kode og værdi, springes over, indtil parrene igen passer; en sektion uden slutning lukkes; en fil der er skåret over, læses op til snittet; en binær DXF der er skåret over, læses op til sin sidste hele værdi. Når en sektion, en blok eller et objekt stadig ikke kan læses, udelades det og navngives, og læsningen fortsætter forbi det.
- DWG: objekter der ikke består deres kontrol eller ikke kan afkodes, udelades, og en tabt objektliste genopbygges ved at gå gennem objektdataene.

Filen på disken ændres ikke. Den genoprettede tegning åbnes ikke-gemt: gem den under et nyt navn. En fil, hvorfra intet overhovedet kan læses, afvises med årsagen.

### LEGACYTEXT

Konverterer tekst skrevet med gamle 8-bit vietnamesiske skrifttyper til Unicode. Korte navne `TEXTTOUNICODE` og `VNTEXT`.

Ældre vietnamesiske tegninger har deres tekst som vestlige tegn, som kun skrifttypen gør til vietnamesisk: TCVN3-tekst i ABC-skrifttyperne (`.VnTime`, `.VnArial`, og de skrifttyper med store bogstaver, hvis navne ender på `H`), og VNI-tekst i VNI-skrifttyperne (`VNI-Times`). CadCraft viser sådan tekst, som den læses, så snart tegningen er åben, efter skrifttypen i dens tekststil, i objektet, eller i et løb inde i afsnitstekst; filen indeholder stadig de gamle tegn.

{{cmd:LEGACYTEXT}} siger, hvor mange tekster den fandt i hver kodning, og spørger `Convert … to Unicode?`. `Yes` omskriver hver enkelt (model, ark, blokke, attributværdier og definitioner) og giver tekststilene en Unicode-skrifttype (Times New Roman, Arial eller Courier New efter den gamle skrifttypes slags), i ét fortrydelsestrin. Formatering inde i afsnitstekst bevares.

Når ingen tekst bruger en kendt skrifttype (en stil der har mistet sit skriftnavn), spørger den `Read selected texts as [Tcvn3/Vni/None]`: vælg kodningen og vælg teksterne. Tekst der allerede er Unicode, lades være. Målsætningstekst-overskrivninger og multihenvisningstekst konverteres ikke.
