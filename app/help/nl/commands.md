---
title: Opdrachtreferentie
summary: Elke opdracht in de tekenapp CadCraft, met de aliassen, de vragen die hij stelt, de opties en de standaardwaarden.
keywords: opdrachten, aliassen, opdrachtenlijst, oppervlakte, omtrek, measuregeom, lijn, pline, cirkel, boog, bijsnijden, offset, dimlinear, blok, invoegen, indeling, plotten, zoomen, help, copyclip, cutclip, pasteclip, pasteorig, copybase, dupliceren, selectall
from: 979ffe3b
---

Typ een opdrachtnaam of een alias en druk op {{key:Enter}} of {{key:Space}}. Hoofdletters maken niet uit, en een voorafgaande `_`, `-`, `.` of `'` wordt genegeerd. Typ `HELP` (of `?`) om een korte lijst van elke opdracht af te drukken in de geschiedenis van de opdrachtregel; druk op {{key:F1}} voor deze help.

Zo leest u de vragen: opties staan tussen vierkante haken, en u kiest er één door de hoofdletters ervan te typen (`D` voor Diameter). Een standaardwaarde staat tussen punthaken; druk op {{key:Enter}} om die te accepteren. Waar een punt wordt gevraagd, kunt u klikken of elk van de formaten typen uit [Coördinaten en afstanden invoeren](topic:coordinate-entry). Waar een afstand wordt gevraagd, kunt u een getal typen of twee punten aanklikken.

Druk op {{key:Enter}} waar een punt of object vereist is en er geen standaardwaarde is, dan eindigt de opdracht. {{key:Esc}} annuleert haar. Wat een opdracht heeft gedaan, is één ongedaan-maken-stap.

## Tekenen

### LINE

Aliassen: `L`. Rechte segmenten, elk een eigen object.

- `Specify first point` (Enter: begin vanaf het laatste punt dat u gaf)
- `Specify next point [Undo]`, herhaald. Na twee segmenten: `[Undo/Close]`.
- `U` neemt het laatste segment terug, `C` sluit naar het eerste punt en eindigt. Enter beëindigt.

### PLINE

Aliassen: `PL`. Eén polylijn van lijn- en boogsegmenten.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close zodra er twee segmenten zijn)
- `A` schakelt over op bogen: `Specify endpoint of arc [Line/CLose/Undo]`. Elke boog loopt raaklijn aan het vorige segment. `L` gaat terug naar lijnen, `CL` sluit met een boog.
- Enter beëindigt; de polylijn blijft open.

### CIRCLE

Aliassen: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` vraagt `Specify diameter of circle`.
- `2P`: twee uiteinden van een diameter. `3P`: drie punten op de cirkel.
- `T` (ook de opdracht `TTR`, en {{ui:Tekenen}} › {{ui:Meer}} › {{ui:Cirkel: raak, raak, straal}}): `Specify point on object for first tangent of circle`, dan de tweede, dan de straal (Enter: de laatste). De cirkel raakt beide objecten (lijnen, bogen, cirkels, segmenten van polylijnen, ook binnen blokken); van de cirkels die dat doen, is het de cirkel die het dichtst bij uw aanwijzingen raakt. "Circle does not exist" wanneer er geen past.
- `TTT` (of {{ui:Tekenen}} › {{ui:Meer}} › {{ui:Cirkel: raak, raak, raak}}): drie objecten; de cirkel die alle drie raakt, het dichtst bij uw aanwijzingen (drie lijnen geven de binnencirkel of een buitencirkel, afhankelijk van waar u aanwijst).

### ARC

Aliassen: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: een boog door drie punten.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. De boog loopt tegen de klok in van begin naar eind.

### RECTANG

Aliassen: `REC`, `RECTANGLE`. Een gesloten polylijn.

- `Specify first corner point`, `Specify other corner point`. Typ `@width,height` voor de tweede hoek.

### POLYGON

Aliassen: `POL`. Een regelmatige veelhoek als gesloten polylijn.

- `Enter number of sides <4>` (3 tot 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: klik of typ een punt; de afstand bepaalt de grootte en de richting draait de veelhoek.

### ELLIPSE

Aliassen: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, dan de afstand tot de andere as.
- `I` (`Isocircle`, alleen terwijl {{cmd:ISODRAFT}} aan staat): middelpunt, dan straal of `Diameter`: de ellips die een cirkel toont op het huidige isometrische vlak.

### HATCH

Aliassen: `H`, `BH`, `BHATCH`; of {{ui:Arcering}} in de werkbalk. Drukt eerst het huidige patroon, de schaal en de hoek af.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, herhaald (`Undo` zodra er een gebied is): elke klik voegt het gesloten gebied eromheen toe, met de gesloten vormen erbinnen als eilanden. Enter maakt van al die gebieden één arcering.
- `S`: `Select closed objects` (gesloten polylijnen, cirkels, gesloten ellipsen).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradiënt): de vulling is een verloop in plaats van een patroon. Zie {{cmd:GRADIENT}} voor de vragen.

Zie [Arcering en gevulde gebieden](topic:hatch).

### GRADIENT

Aliassen: `GD`. Vult een gebied met een verloop van één of twee kleuren. Het vraagt eerst het verloop, en gaat dan verder zoals {{cmd:HATCH}} doet (`Pick internal point`, `S` voor gesloten objecten, {{key:Enter}} om af te ronden).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, herhaald; het toont het verloop zoals het nu is, elke keer.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, of een van die omgekeerd (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). De eerste letters volstaan.
- `O`: één kleur, dan de tint ervan van 0 tot 1 (0 verduistert tot zwart, 0,5 is de kleur zelf, 1 verlicht tot wit). `TW`: de eerste en de tweede kleur. Een kleur is een getal van 1 tot 255, drie getallen zoals `255,128,0`, of `#rrggbb`.
- `A`: de hoek waaronder het verloop loopt. `C`: gecentreerd Yes of No (No verschuift het midden van het verloop naar één kant).
- Het weigert een kleur of type die het niet kent, en een tint buiten 0 tot 1.

{{cmd:HATCHEDIT}} `G` en Eigenschappen (Verloop) wijzigen later een verloop, of maken er van elke arcering een. Een verloop wordt op het scherm getekend en geplot. DWG 2004 en later bewaren het als een echte verloop-arcering; DXF 2000 en DWG 2000 bewaren het voor CadCraft, en andere programma's zien een volle vulling in de eerste kleur.

### HATCHGENERATEBOUNDARY

Aliassen: `HGB`. Maakt de begrenzing opnieuw uit een arcering die die kwijt is. `Select hatches` (of selecteer ze eerst), dan `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Elke lus van de arcering wordt een gesloten polylijn op de laag van de arcering; de nieuwe polylijnen blijven geselecteerd. Een gebogen rand komt terug als de korte rechte stukjes die de arcering houdt.
- Met Yes volgt de arcering zijn nieuwe begrenzing, zoals een arcering gemaakt met {{cmd:HATCH}} doet. Eén ongedaan-maken-stap.
- Het zegt dat wanneer geen arcering was geselecteerd.

### POINT

Aliassen: `PO`; of {{ui:Tekenen}} › {{ui:Meer}} › {{ui:Punt}}. Puntobjecten, één per klik, tot Enter.

- `Specify a point`

### XLINE

Aliassen: `XL`; of {{ui:Tekenen}} › {{ui:Meer}} › {{ui:Hulplijn}}. Hulplijnen, aan beide kanten oneindig. Zie [Hulplijnen en stralen](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, dan `Specify through point` voor elke lijn, tot Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` vraagt eerst `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, dan `Specify angle end point` voor elke lijn.
- `O`: `Specify offset distance [Through] <Through>`, dan `Select a line object` en `Specify side to offset` (of `Specify through point`) voor elke lijn.

### RAY

Geen aliassen; of {{ui:Tekenen}} › {{ui:Meer}} › {{ui:Straal}}. `Specify start point`, dan `Specify through point` voor elke straal, tot Enter.

### TEXT

Aliassen: `DT`, `DTEXT`; of {{ui:Tekst}} in de werkbalk. Enkelregelige tekst; elke regel is een eigen object.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, dan `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, herhaald: elke Enter begint de volgende regel eronder. Enter op een lege regel eindigt. {{key:Space}} typt hier een spatie.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} zet markeringen op een lijn, boog, cirkel, polylijn, spline of ellips die die in gelijke delen verdeelt. Kies het object, geef dan het aantal delen (2 tot 32767). Een open object krijgt één markering minder dan delen; een gesloten object krijgt ook een markering op zijn begin. Het object zelf wordt niet doorgesneden. De markeringen zijn punten; `Block` vraagt om een blok van deze tekening in plaats daarvan, en of het meedraait met het object. Lengtes langs splines en ellipsen worden gemeten langs korte koorden. Het weigert tekst, arceringen en andere objecten zonder lengte.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} zet op elke opgegeven lengte een markering langs een lijn, boog, cirkel, polylijn, spline of ellips, en telt vanaf het uiteinde dat het dichtst bij uw aanwijzing ligt (een gesloten object: vanaf zijn begin). Geef de lengte door hem te typen of met twee punten. Het verre uiteinde van een open object krijgt geen markering. `Block` plaatst bij elke markering een blok in plaats van een punt. Het weigert een lengte van 0, een lengte die langer is dan het object, en een lengte die meer dan 32767 markeringen zou maken.

### BOUNDARY

Aliassen: `BO`, `BPOLY`. {{cmd:BOUNDARY}} maakt een gesloten polylijn rond het gebied waarin het punt ligt dat u aanwijst, van de lijnen, bogen, cirkels, polylijnen en krommen die het op het scherm begrenzen. Stukken op een boog of cirkel komen terug als boogsegmenten; stukken van ellipsen en splines als korte rechte segmenten. Met `Islands` aan (de startinstelling) krijgt ook elk gesloten gebied erbinnen een eigen polylijn. Blijf punten aanwijzen; Enter eindigt. De objecten die het gebied begrenzen blijven zoals ze zijn. Het zegt dat wanneer geen gesloten gebied het punt bevat.

### BLEND

{{cmd:BLEND}} tekent een spline tussen de uiteinden van twee open krommen. Wijs elke kromme nabij het uiteinde aan om te verbinden. `CONtinuity` kiest `Tangent` (de spline vertrekt en komt aan langs beide krommen) of `Smooth` (hij buigt ook zoals ze aan de uiteinden buigen); de keuze blijft voor de sessie bewaard. De twee krommen worden niet gewijzigd. Het weigert gesloten objecten en twee uiteinden die elkaar al raken.

### REGION

Alias: `REG`. {{cmd:REGION}} zet gesloten objecten om in regio's: vlakke gebieden die u kunt samenvoegen, afsnijden en meten. Selecteer cirkels, gesloten polylijnen, gesloten ellipsen of gesloten splines, of lijnen, bogen en open polylijnen die uiteinde aan uiteinde een lus sluiten; elke lus wordt één regio en vervangt de objecten waaruit hij kwam. Bogen blijven bogen; ellipsen en splines worden korte rechte segmenten. Wat niet gesloten is en geen lus vormt, blijft zoals het is, en het zegt hoeveel dat er zijn. In de tekening is een regio één of meer gesloten polylijnen die als een naamloze groep bij elkaar worden gehouden, zodat één klik de hele regio selecteert en een kopie een eigen regio is; andere programma's die het bestand openen zien gesloten polylijnen.

Met regio's in de tekening werken {{cmd:UNION}}, {{cmd:SUBTRACT}} en {{cmd:INTERSECT}} op het tabblad 2D op regio's: `UNION` voegt de geselecteerde regio's tot één (regio's die los liggen, worden één regio met meerdere contouren), `SUBTRACT` vraagt de regio's waarvan wordt afgetrokken en daarna de regio's die worden weggenomen (een gat blijft deel van de regio), `INTERSECT` houdt het gebied dat ze allemaal delen. Elk meldt de oppervlakte van het resultaat en is één ongedaan-maken-stap. Ze weigeren wanneer er niets zou overblijven of niets gedeeld wordt. Op het 3D-tabblad, en in een tekening zonder regio's, werken dezelfde opdrachten op volumes zoals voorheen.

## Wijzigen

Alias: `MT`, `T`; of {{ui:Alinea}} in de werkbalk. Alineatekst die op een breedte terugloopt, ter plaatse getypt.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: de breedte over de twee hoeken is waar de tekst terugloopt. `H` vraagt `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` en slaat de tweede hoek over.
- Dan opent er een vak op de tekening: typ, {{key:Enter}} voor een nieuwe alinea, {{key:Mod+Enter}} of een klik buiten het vak om af te ronden, {{key:Esc}} om te annuleren. De balk ervan stelt hoogte, regelafstand, breedte en uitlijning in. Zie [Tekst en labels toevoegen](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliassen: `ED`, `DDEDIT`; of dubbelklik op een tekst. `Select a text to edit`, herhaald tot {{key:Enter}}: elk opent in hetzelfde vak. Gestart op een geselecteerde of dubbelgeklikte tekst, bewerkt het die ene en eindigt.

### ERASE

Aliassen: `E`, `DELETE`; of druk op {{key:Delete}} met objecten geselecteerd.

- `Select objects` (overgeslagen wanneer objecten al geselecteerd zijn)

### MOVE

Aliassen: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, getypt als `dx,dy`.

### COPY

Aliassen: `CO`, `CP`. Kopieën zo vaak als u punten geeft.

`Array` bij de vraag naar het tweede punt maakt in één keer een rij: geef het aantal items (het origineel telt mee), dan het punt waar de eerste kopie komt; de andere volgen op dezelfde afstand. `Fit` maakt dat punt in plaats daarvan de plaats van de laatste kopie, met de andere er gelijkmatig tussen verdeeld.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, herhaald tot Enter. `U` neemt de laatste kopie terug.

### ROTATE

Aliassen: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: graden, tegen de klok in positief; of klik een punt om ernaartoe te draaien.

### SCALE

Aliassen: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: typ een factor zoals `0.5` of `2`. Een aangeklikt punt geeft zijn afstand tot het basispunt als factor.

### MIRROR

Aliassen: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Aliassen: `AL`; of {{ui:Wijzigen}} › {{ui:Meer}} › {{ui:Uitlijnen}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Bij twee paren: `Scale objects based on alignment points? [Yes/No] <N>`

Zie [Objecten uitlijnen](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (of de selectie), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` vraagt om het punt. De selectie blijft staan.

### DISTRIBUTE

- `Select objects` (minstens drie), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. De buitenste twee blijven staan; de selectie blijft staan.

### ALIGNPANEL

Aliassen: `ALP`; of {{ui:Wijzigen}} › {{ui:Meer}} › {{ui:Uitlijnen en verdelen}}. Opent het paneel dat ALIGNTO en DISTRIBUTE met klikken uitvoert.

### LASER

Aliassen: `LASERCUT`; of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Laser…}}. Opent het paneel Laser boven de tekening: wat elke laag doet (snijden, kerven, graveren, vullen, afbeelding), het voorbeeld, de GRBL G-code om op te slaan, en het kader en verzenden via Web Serial. Zie [Een tekening naar een laser sturen](topic:laser-cutting).

### STRETCH

Aliassen: `S`; of {{ui:Uitrekken}}. `Select objects to stretch`: sleep kruisvensters (of typ `C`) over de uiteinden om te verplaatsen. `Specify base point [Displacement]`, `Specify second point`. Punten binnen de vensters verplaatsen: lijnuiteinden, hoekpunten van polylijnen (boogsegmenten behouden hun hoogte), maatpunten; cirkels, ellipsen, tekst, punten en blokken verplaatsen als geheel wanneer hun middelpunt of invoegpunt erbinnen ligt. Een selectie die vóór de opdracht is gemaakt, houdt de kruisvensters (en lassos) die haar maakten, zodat ze op dezelfde manier worden uitgerekt. Zonder venster verplaatsen de objecten als geheel.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliassen: `AR`; of {{ui:Array}}. `Select objects`, dan `Enter array type [Rectangular/POlar] <Rectangular>` (alleen ARRAY).

- Rechthoekig begint met 4 kolommen × 3 rijen, met een afstand van 1,5 keer de grootte van de objecten, als voorbeeld getoond. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` vraagt kolommen en rijen, `S` de afstanden tussen kolommen en tussen rijen (negatief gaat naar links of omlaag), `COL` en `R` één richting per keer.
- Polair vraagt `Specify center point of array`, begint met 6 items rondom, gedraaid. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` items, `F` de hoek om te vullen (+ tegen de klok in, − met de klok mee), `ROT` Yes of No.
- {{key:Enter}} (eXit) maakt de kopieën, als gewone objecten. Eén ongedaan-maken-stap.
- `AS` (ASsociatief) schakelt tussen gewone kopieën en een array die bewerkbaar blijft: één object dat u later wijzigt met {{cmd:ARRAYEDIT}}, via zijn grips of in Eigenschappen. De keuze wordt onthouden ({{cmd:ARRAYASSOCIATIVITY}}); standaard begint het met gewone kopieën.

### ARRAYPATH

Kopieën langs een kromme. `Select objects`, dan `Select path curve`: een lijn, boog, cirkel, ellips, polylijn of spline (niet een van de objecten die worden gearrayd). Het pad begint bij het uiteinde dat het dichtst bij de objecten ligt, en het eerste item is de objecten waar ze staan.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, met een voorbeeld. `M`: `Divide` spreidt de items gelijkmatig over het hele pad, `Measure` zet er één op elke vaste afstand langs het pad. `I`: het aantal items (bij Measure betekent 0 zoveel als er passen; een getal voorbij het einde van het pad wordt beperkt tot wat past). `SP`: de afstand tussen items langs het pad (schakelt naar Measure). `AL`: Yes draait elk item mee met het pad, No houdt ze rechtop.
- `AS` zoals in {{cmd:ARRAY}}. Staat het aan, dan houdt de array een eigen kopie van de vorm van het pad: het later bewerken van de padkromme verplaatst de items niet.
- Het weigert een pad dat geen kromme is, en één item.

### ARRAYEDIT

Wijzigt een array die met ASsociatief is gemaakt. `Select array` (of selecteer hem eerst). Het toont hoe de array nu is, en vraagt dan tot {{key:Enter}}:

- Rechthoekig: `COL` kolommen en hun afstand, `R` rijen en hun afstand, `A` de hoek waaronder de kolommen lopen.
- Polair: `I` items, `F` de vulhoek, `ROT` items draaien Yes of No.
- Pad: `M` Divide of Measure, `I` items, `SP` afstand, `AL` uitlijnen met het pad.
- `S` (Source) opent de objecten die de array herhaalt, op zichzelf, zoals de blokeditor. Teken en bewerk daar; {{cmd:ARRAYCLOSE}} slaat op of verwerpt, en elk item volgt.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, dan klikt u op de items die vervangen moeten worden, en {{key:Enter}}. Die items tonen dan de vervanging; de vervangende objecten verlaten de tekening en leven in de array. `RES` (RESet) toont de brongobjecten in elk item weer.
- Elke wijziging is één ongedaan-maken-stap. Het weigert gewone kopieën, een gewone blokverwijzing en een array op een vergrendelde laag.

Dezelfde getallen staan in Eigenschappen onder Array, en de array heeft grips: het basispunt verplaatst hem, de grip bij het tweede item stelt de afstand in, de grip voorbij het laatste item stelt het aantal in (polair: het tweede item stelt het aantal items in, het laatste item de vulhoek). {{cmd:EXPLODE}} zet een array terug in gewone kopieën.

### ARRAYCLOSE

Beëindigt {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Het zegt dat wanneer geen brongobjecten van een array open zijn. {{cmd:BCLOSE}} doet hetzelfde.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Stelt in waarmee {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR en {{cmd:ARRAYPATH}} beginnen; hun optie `AS` wijzigt dezelfde instelling. Wordt in deze browser onthouden.

### OFFSET

Aliassen: `O`. Lijnen, bogen, cirkels en polylijnen.

Waar een polylijn naar buiten verschuift en zijn rechte segmenten bij een hoek uit elkaar komen, bepaalt {{cmd:OFFSETGAPTYPE}} hoe de opening wordt gesloten.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, dan `Specify point on side to offset` (of, met Through, `Specify through point`), herhaald tot Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: hoe {{cmd:OFFSET}} de openingen bij de buitenhoeken van een polylijn sluit. `0` verlengt de segmenten tot ze elkaar raken (de startinstelling), `1` verbindt ze met een boog rond de oude hoek, `2` met een rechte afsnijding. Binnenhoeken en boogsegmenten worden niet beïnvloed. Blijft voor deze sessie bewaard.

### EXTRIM

{{cmd:EXTRIM}} snijdt alles aan één kant van een rand bij. Kies de snijrand (een lijn, boog, cirkel, polylijn, ellips, spline of hulplijn), en kies dan een punt aan de kant die u wilt vrijmaken: elke lijn, boog, cirkel, polylijn en hulplijn die de rand kruist, verliest het deel aan die kant, waar het bij de rand begint. Terwijl u de kant kiest, volgen de stukken die zouden verdwijnen de aanwijzer. Bij een gesloten rand zijn de kanten binnen en buiten. Objecten die de rand alleen raken, en tekst, arceringen, splines en ellipsen die hem kruisen, blijven zoals ze zijn. Eén ongedaan-maken-stap.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: hoe {{cmd:TRIM}} en {{cmd:EXTEND}} beginnen. `1` Snel: elk object is een snijrand of begrenzing. `0` Standaard: ze vragen eerst om de randen. Ook `(setvar "TRIMEXTENDMODE" 0)` in LISP.

### TRIM

Aliassen: `TR`. Drukt eerst `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` af. In de modus Snel is elk zichtbaar object een snijrand, en een object waar niets iets kruist, wordt gewist; in de modus Standaard vraagt het eerst `Select cutting edges (Enter = every object)` en snijdt alleen bij die.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, herhaald: klik op het stuk dat u wilt verwijderen (het wordt grijs en gestippeld getoond zolang de aanwijzer erop rust), sleep een pad door meerdere stukken (ze gaan allemaal in één stap), of klik op twee lege plekken voor een hekje ertussen. {{key:Shift}} verlengt in plaats daarvan. `T` kiest snijranden (modus Standaard), `F` vraagt hekjespunten, `C` twee hoeken van een venster (stukken die er gedeeltelijk in liggen gaan mee), `O` vraagt `Enter a trim mode option [Quick/Standard]`, `E` vraagt `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` wist de objecten die u selecteert, `U` maakt de laatste keuze of sleep ongedaan. Enter eindigt. Zie [Bijsnijden en verlengen](topic:trim-and-extend).

- Een klik op een arcering snijdt de arcering: de snijranden splitsen het gearceerde gebied, en het stuk waar u op klikte wordt weggenomen (er blijft geen getekende omtrek achter waar het was). De arcering behoudt haar patroon of verloop; een arcering die aan haar begrenzing was gekoppeld, is daarna niet meer gekoppeld, omdat ze die niet meer vult. Het zegt dat wanneer geen snijrand de arcering daar splitst, wanneer de klik naast de arcering valt, en wanneer niets zou overblijven (gebruik dan {{cmd:ERASE}}). Een gesleept pad of hekje snijdt geen arceringen bij.

### EXTEND

Aliassen: `EX`. Hetzelfde als TRIM, maar omgekeerd: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Een klik verlengt het uiteinde dat het dichtst erbij ligt tot de volgende begrenzing; een gesleept pad of hekje verlengt elk object dat het kruist; {{key:Shift}} snijdt bij. `B` kiest begrenzingsranden (modus Standaard). Modus en Edge worden met TRIM gedeeld.

### LINKVIEWS

Aliassen: `SYNCVIEWS`; of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Weergaven van de vensters koppelen}}, of het koppelpictogram op de tekeningtabbladen. `Link the panes' views [ON/OFF]` (Enter kiest de andere stand): wanneer dit aan staat, verschuift of zoomt een verschuiving of zoom in het actieve venster elk venster dat dezelfde soort ruimte toont. Zie [Het scherm splitsen](topic:split-screen).

### OPENIN3D

Geen aliassen; of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Open in ModelCraft}} waar de 3D-modelleerapp een overgedragen tekening aanneemt. Opent hem daar in een nieuw tabblad, als DWG (er wordt niets geüpload). Blokkeert de browser het tabblad, dan zegt het dat.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: wat indrukken en slepen op een lege plek tekent. Hetzelfde als Instellingen › CadCraft › Slepen om te selecteren. Zie [Lasso-selectie](topic:lasso-selection).

### FILLET

Aliassen: `F`. Lijnen, bogen, cirkels en polylijnen. Drukt eerst `Current settings: Mode = TRIM, Radius = 0` af.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` vraagt `Specify fillet radius <last>`. `T` vraagt `Enter Trim mode option [Trim/No trim]`: met No trim blijven de objecten zoals ze zijn en wordt alleen de boog toegevoegd.
  - `M` laat de opdracht doorgaan voor meer hoeken tot {{key:Enter}}; `U` neemt de laatste hoek terug zonder de opdracht te verlaten.
  - `P` vraagt `Select 2D polyline [Radius]` en rondt elke hoek af waar twee rechte segmenten samenkomen. Afrondingen die er al zijn, worden vervangen door de nieuwe straal; straal 0 haalt ze weg. Hoeken waarvan de zijden te kort zijn voor de straal, blijven ongemoeid en worden geteld.
- `Select second object or shift-select to apply corner [Radius]`. Houd {{key:Shift}} ingedrukt terwijl u klikt voor een scherpe hoek, wat de straal ook is.

Klik elk object op het deel dat u wilt houden. Twee lijnen die niet samenkomen, worden verlengd. Twee evenwijdige lijnen krijgen een halve cirkel over de opening, aan het uiteinde van de eerste lijn dat het dichtst bij uw klik ligt. Een cirkel wordt nooit gesneden. Twee naast elkaar liggende segmenten van één polylijn krijgen de boog binnen de polylijn; een polylijn en een ander object werken wanneer de snede op het eerste of laatste segment van de polylijn valt.

### CHAMFER

Aliassen: `CHA`. Lijnen en de rechte segmenten van polylijnen. Drukt eerst de huidige afstanden af (of lengte en hoek).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` vraagt `Specify first chamfer distance <last>` en `Specify second chamfer distance <the first>`: de eerste wordt van de eerste lijn die u kiest afgesneden, de tweede van de andere.
  - `A` vraagt `Specify chamfer length on the first line` en `Specify chamfer angle from the first line`.
  - `E` (mEthod) kiest welke van de twee de volgende afschuining gebruikt. `T`, `M`, `U` en `P` werken zoals bij {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+klik maakt een scherpe hoek.

Een afstand die langer is dan de lijn, wordt geweigerd (`Distance is too large.`).

### BREAK en BREAKATPOINT

Aliassen: `BR`. `Select object` (waar u klikt, is het eerste punt), `Specify second break point [First point]`; `F` vraagt `Specify first break point` en `Specify second break point`. Het deel ertussen verdwijnt; bij een cirkel, tegen de klok in vanaf het eerste punt. BREAKATPOINT vraagt `Specify break point` en splitst het object daar in twee (geen cirkel).

### LENGTHEN

Aliassen: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: een keuze toont `Current length` (en de ingesloten hoek van een boog) en vraagt opnieuw. `DE` vraagt `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` sleept. Dan `Select an object to change [Undo]`, herhaald: het uiteinde dat het dichtst bij de klik ligt, verschuift. Lijnen, bogen en open polylijnen.

### JOIN

Aliassen: `J`. `Select objects to join`. Lijnen, bogen en open polylijnen die uiteinde aan uiteinde samenkomen worden polylijnen (gesloten wanneer de keten sluit); lijnen op één lijn worden één lijn; bogen van één cirkel worden één boog of de cirkel. De geschiedenis zegt hoeveel objecten er zijn samengevoegd en hoeveel niet.

### MATCHPROP

Aliassen: `MA`, `PAINTER`. `Select source object`, dan `Select destination objects [Settings]` en {{key:Enter}}. Kopieert laag en kleur, en tussen objecten van dezelfde soort de teksthoogte en breedte, de maatgroottes, of het arceringspatroon. `S` vraagt `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, herhaald tot {{key:Enter}}; de keuze wordt voor de sessie onthouden.

### EXPLODE

Aliassen: `X`. Polylijnen worden lijnen en bogen, blokverwijzingen worden hun objecten, maten worden lijnen, pijlpunten en tekst. Een array die bewerkbaar blijft ({{cmd:ARRAYEDIT}}) wordt gewone kopieën van zijn objecten.

- `Select objects`

### GROUP

Alias: `G`. {{cmd:GROUP}} geeft de geselecteerde objecten een naam die ze gemeen hebben. Selecteer de objecten, typ dan een naam (zonder spaties; `?` toont de groepen; Enter maakt een naamloze groep) en, voor een benoemde groep, een optionele beschrijving. Vanaf dan selecteert een klik op een van hen, of een venster dat er een opneemt, ze allemaal, zodat ze samen verplaatsen, kopiëren en worden gewist; elk object blijft een eigen object. Een object kan in meerdere groepen zitten. Een kopie van een hele groep is een nieuwe naamloze groep; een kopie van één lid op zichzelf voegt zich bij de groep. Groepen horen bij de ruimte waarin ze zijn gemaakt (het model of een blad). Ze blijven bewaard wanneer u opslaat als DWG of DXF en het bestand opnieuw opent in CadCraft; DXF 2000-bestanden dragen ze ook als groepsobjecten voor andere programma's, en groepen die in een ander programma zijn gemaakt, worden gelezen wanneer een DXF of DWG wordt geopend.

### UNGROUP

{{cmd:UNGROUP}} haalt groepen uit elkaar: selecteer objecten van de groepen (elke groep waar ze in zitten, wordt uit elkaar gehaald) of typ `Name` en de naam van de groep. De objecten blijven in de tekening. Eén ongedaan-maken-stap brengt de groepen terug.

### GROUPEDIT

{{cmd:GROUPEDIT}} wijzigt één groep. Wijs een van zijn objecten aan, of `Name` en zijn naam; een groep die al geselecteerd is, wordt zoals ze is genomen. Dan: `Add` objecten (één voor één aangewezen, niet groep voor groep), `Remove` objecten, `REName` de groep, wijzig zijn `Description`, of stel `Selectable` in (of een klik op één object de hele groep selecteert). `eXit` of Enter eindigt. Een groep zonder objecten meer verdwijnt.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: met `1` (de startinstelling) selecteert een klik of een venster op een gegroepeerd object de hele groep; met `0` afzonderlijke objecten, zodat u één lid kunt bewerken. Blijft voor deze sessie bewaard.

## Klembord

Het eigen klembord van CadCraft: het werkt binnen een tekening, tussen tekeningen en tussen CadCraft-tabbladen in deze browser. Zie [Kopiëren, plakken en dupliceren](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, of {{ui:Kopiëren}} in de groep {{ui:Wijzigen}}. Kopieert objecten naar het klembord, met de blokken en lagen die ze gebruiken. De objecten blijven geselecteerd.

- `Select objects to copy` (overgeslagen wanneer objecten al geselecteerd zijn)

### CUTCLIP

{{key:Mod+X}}, of {{ui:Knippen}} in het menu {{ui:Meer}}. Kopieert objecten naar het klembord en wist ze daarna (één ongedaan-maken-stap).

- `Select objects to cut` (overgeslagen wanneer objecten al geselecteerd zijn)

### COPYBASE

Kopieert objecten naar het klembord met een basispunt dat u kiest; plakken plaatst dat punt.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, of {{ui:Plakken}} in de groep {{ui:Wijzigen}}. De kopie volgt de cursor en hangt aan de linkeronderhoek van zijn omhullende (of aan het midden, of aan het punt van `COPYBASE`; zie [Instellingen van CadCraft](topic:settings)).

- `Specify insertion point`

De geplakte objecten zijn geselecteerd. Een blok dat de tekening al onder dezelfde naam heeft, behoudt de definitie van deze tekening.

Wanneer een gebied dat in MarkupCraft is gekopieerd nieuwer is dan wat CadCraft kopieerde (en jonger dan 6 uur), plakt {{key:Mod+V}} en `PASTECLIP` in plaats daarvan dat gebied: zie `PASTEAREA`.

### PASTEAREA

Aliassen: `PAREA`. {{ui:Gekopieerd gebied plakken}} in het menu {{ui:Meer}}. Plakt een gebied dat met {{ui:Gebied kopiëren}} in MarkupCraft is gekopieerd, als afbeelding op ware grootte. Zie [Afbeeldingen in een tekening](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (alleen wanneer het blad geen tekeningschaal had): een getal, {{key:Enter}} voor het papierformaat, of `P`, dan `First point on the pasted area`, `Second point on the pasted area` en hun ware afstand.

### PASTEORIG

{{key:Mod+Shift+V}}, of {{ui:Plakken op dezelfde plaats}} in het menu {{ui:Meer}}. Plakt op de coördinaten waar de objecten vandaan zijn gekopieerd. Vraagt niets.

### DUPLICATE

Aliassen: `DUP`. {{key:Mod+D}}, of {{ui:Dupliceren en verplaatsen}} in het menu {{ui:Meer}}. Een kopie van de objecten beweegt met de aanwijzer vanaf waar ze staan; {{key:Esc}} laat niets achter. Gebruikt het klembord niet.

- `Select objects to duplicate` (overgeslagen wanneer objecten al geselecteerd zijn)
- `Specify where the copy goes (Esc leaves nothing)`: klik, typ een punt, `@dx,dy` (vanaf waar de aanwijzer stond), of een afstand richting de cursor.

### SELECT

Vraagt `Select objects` (met elke optie hieronder) en laat wat u koos geselecteerd, voor de volgende opdracht of voor later `P`.

### QSELECT

Aliassen: `QS`. In de browser het dialoogvenster {{ui:Snelselectie}} (zie [Objecten selecteren](topic:select-objects#select-by-a-rule-quick-select)). Zonder dat vraagt de opdrachtregel `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` en `Enter value`. De treffers worden de selectie.

### SELECTSIMILAR

Aliassen: `SIM`. `Select objects [SEttings]` (of de huidige selectie): selecteert elk object van hetzelfde soort met dezelfde laag en kleur (en bloknaam, arceringspatroon). `SE` vraagt `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, herhaald tot {{key:Enter}}.

### FIND

Geen aliassen; of {{ui:Wijzigen}} › {{ui:Meer}} › {{ui:Zoeken en vervangen}}. In de browser het dialoogvenster {{ui:Zoeken en vervangen}} (zie [Tekst en labels toevoegen](topic:text#find-and-replace-words)). Zonder dat: `Enter text to find`, dan `Enter replacement text (Enter: select what is found)`. Zoekt in tekst, attribuutwaarden en maattekst, in het open tabblad of in de selectie.

### SELECTALL en DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) selecteert elk object dat u op het open tabblad kunt bewerken. `DESELECT` (aliassen `AI_DESELECT`, `SELECTNONE`; of {{key:Esc}}) wist de selectie.

## Maatvoering

### DIMLINEAR

Aliassen: `DLI`, `DIMLIN`. Horizontale of verticale afstand.

- `Specify first extension line origin [Select object]` (Enter of `S`: `Select object to dimension`, dan klikt u op een lijn, boog, cirkel of segment van een polylijn)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` vraagt om tekst (`<>` is de gemeten waarde), `H` en `V` leggen de richting vast, `R` vraagt `Specify angle of dimension line <0>`.

### DIMALIGNED

Aliassen: `DAL`, `DIMALI`. De ware afstand tussen twee punten.

- Oorsprongen zoals bij {{cmd:DIMLINEAR}}, dan `Specify dimension line location [Text]`.

### DIMANGULAR

Aliassen: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Boog: zijn hoek. Cirkel: `Specify second angle endpoint`. Lijn: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: klik binnen de hoek om te meten.

### DIMRADIUS en DIMDIAMETER

Aliassen: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, dan `Specify dimension line location [Text]`.

### DIMCONTINUE

Aliassen: `DCO`, `DIMCONT`. Gaat verder vanaf de laatste lineaire of uitgelijnde maat die gemaakt is (of vraagt `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, herhaald tot Enter.

### DIMBASELINE

Aliassen: `DBA`, `DIMBASE`. Zoals {{cmd:DIMCONTINUE}}, maar elke maat begint bij het eerste punt en wordt verder naar buiten gestapeld.

### DIMORDINATE

Aliassen: `DOR`, `DIMORD`. `Specify feature location`, dan `Specify leader endpoint [Xdatum/Ydatum/Text]`. Schrijft hoe ver het kenmerk van de oorsprong van het UCS ligt, langs X of langs Y, op een leider: een leider die vooral omhoog of omlaag loopt, leest X; een die zijdelings loopt, leest Y; `Xdatum` en `Ydatum` leggen dat vast. Stel eerst de oorsprong in met {{cmd:UCS}} (zonder die is het de 0,0 van de tekening). Grips verplaatsen het kenmerk, de oorsprong en het einde van de leider, en de waarde volgt. Wordt in DWG en DXF als echte ordinaatmaat bewaard. Weigert een leiderseinde op het kenmerk zelf.

### DIMARC

Aliassen: `DAR`. `Select arc or polyline arc segment`, dan `Specify arc length dimension location [Text]`. Meet langs de boog (niet de koorde) en schrijft het boogsymbool voor de waarde. Weigert een volledige cirkel, een lijn of een recht polylijnsegment. Een DWG bewaart het als maat van de booglengte; een DXF bewaart het als hoekmaat met de lengte als tekst, en CadCraft opent het weer als maat van de booglengte.

### DIMJOGGED

Aliassen: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Een stralenmaat voor een kromme waarvan het middelpunt ver weg of buiten het blad ligt: de maatlijn begint bij het punt dat u geeft in plaats van bij het middelpunt, met een knik erin, en de ware straal wordt nog steeds geschreven. Een DWG bewaart het als geknikte stralenmaat; een DXF bewaart het als stralenmaat, en CadCraft opent het weer geknikt.

### DIMJOGLINE

Aliassen: `DJL`. `Select dimension to add jog [Remove]`, dan `Specify jog location (or press Enter)`. Zet een knsiymbool op de lijn van een lineaire of uitgelijnde maat, om aan te geven dat de afstand niet op schaal is getekend; de waarde verandert niet. `Remove` haalt het weg. Weigert andere soorten maten.

### QDIM

Geen aliassen. `Select geometry to dimension`, dan `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Maatvoert meerdere objecten in één stap, vanaf de uiteinden van lijnen en polylijnsegmenten, middelpunten van cirkels en bogen, punten en blokverwijzingen. Een positie boven of onder de objecten meet erdoorheen, een positie ernaast meet omhoog. `Continuous` ketent de punten, `Baseline` meet alles vanaf het eerste, `Staggered` nest paren van het midden naar buiten, `Ordinate` geeft elk punt zijn afstand tot het nulpunt (`datumPoint` kiest een nieuw), `Radius` en `Diameter` maken een maat voor elke cirkel en boog die u aanwijst. De modus wordt onthouden. Alles wat het maakt, is één ongedaan-maken-stap. Het zegt het wanneer er minder dan twee punten zijn, of geen bogen of cirkels voor Radius en Diameter.

### DIMBREAK

Aliassen: `DBREAK`. `Select dimensions to add or remove breaks`, dan `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` laat een opening in de maatlijnen en maathulplijnen waar een ander object ze kruist, en berekent de openingen opnieuw wanneer die objecten of de maat verschuiven. `Manual` (één maat) vraagt twee punten en laat een opening ertussen. `Remove` haalt alle openingen weg. De opening is 1,5 keer de teksthoogte van de maat.

### DIMSPACE

Geen aliassen. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Verschuift de maatlijnen van evenwijdige lineaire en uitgelijnde maten (of hoekmaten rond dezelfde top) zodat ze even ver uit elkaar liggen, gemeten vanaf de basismaat, elk aan de kant waar het ligt. `0` lijnt ze uit met de basis; `Auto` is tweemaal de teksthoogte van de basismaat. Maten die niet evenwijdig aan de basis zijn, blijven ongemoeid.

### DIMINSPECT

Geen aliassen. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Tekent een kader rond de waarde met een label ervoor en de keuringsfrequentie erna. `remove` haalt het kader weg. Tolerantietekst blijft bij de waarde.

### DIMOVERRIDE

Aliassen: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, opnieuw tot Enter, dan `Select dimensions`. Wijzigt die instellingen alleen op de geselecteerde maten; de maatvoeringsstijl wordt niet gewijzigd. Neemt de variabelen die een getal of een schakelaar zijn (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` zet de geselecteerde maten terug op hun stijl. Weigert een naam die zo'n variabele niet is, en een waarde die hij niet kan aannemen.

### DIMREASSOCIATE

Aliassen: `DRE`, `DIMREASSOC`. `Select dimensions`, dan voor elke maat zijn maatlijnoorsprongen (`Specify first extension line origin on an object`: snap naar een uiteinde of het midden van een lijn, een hoek van een polylijn, een middelpunt; Enter houdt dat punt vrij), of voor een straal-, diameter-, geknikte stralen- of booglengtemaat `Select arc or circle`. De maat wordt dan aan die objecten gekoppeld: wanneer ze verschuiven of van grootte veranderen, volgt hij in dezelfde ongedaan-maken-stap en meet hij opnieuw. Een gekoppeld punt met de hand verplaatsen, of het object wissen, beëindigt die koppeling. De koppeling wordt in DWG en DXF 2000 bewaard als eigen gegevens van CadCraft; andere programma's zien een gewone maat.

### DIMDISASSOCIATE

Aliassen: `DDA`, `DIMDISASSOC`. `Select dimensions`. Maakt ze los van de objecten waaraan ze vastzitten; er verschuift niets.

### CENTERMARK

Aliassen: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, opnieuw tot Enter. Tekent een kruis in het middelpunt en vier middellijnen tot net voorbij de kromme (lijntype CENTER), als gewone lijnen op de actieve laag; afgestemd op de pijlgrootte en de totaalschaal van de huidige maatvoeringsinstellingen, gedraaid met het UCS. Ze volgen de cirkel niet als die verschuift.

### CENTERLINE

Aliassen: `CL`. `Select first line`, `Select second line`. Tekent een lijn halverwege tussen twee lijnen (langs de bissectrice als ze elkaar raken), iets langer dan ze zijn, in lijntype CENTER. Een gewone lijn: hij volgt de twee lijnen niet.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Geen aliassen. Elk vraagt `Enter new value for … <current>` en stelt die grootte in voor **nieuwe** maten: totaalschaal, teksthoogte, pijlgrootte, decimalen (tot 8), ruimte rond de tekst, verlenging voorbij de maatlijn, afstand vanaf de oorsprong. Zie [Maatgroottes instellen](topic:dimension-settings).

### DIMLUNIT

Maatvoeringsinstelling: het formaat van alleen nieuwe maten (1 wetenschappelijk, 2 decimaal, 3 engineering, 4 architectonisch, 5 breuk).

### DIMSTYLE en -DIMSTYLE

Aliassen: `DST`, `DDIM`, `D`. De beheerder van maatvoeringsstijlen: {{ui:Huidige instellen}}, {{ui:Nieuw…}}, {{ui:Wijzigen…}}, {{ui:Hernoemen…}}, {{ui:Verwijderen}}, {{ui:Vergelijken…}}, {{ui:Toepassen op selectie}}. `-DIMSTYLE` op de opdrachtregel: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Zie [Maatgroottes instellen](topic:dimension-settings#named-dimension-styles).

### DIMEDIT en DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, dan de maten (of die al geselecteerd zijn). New vraagt om de tekst (`<>` = de meting); Rotate om een hoek (0 zet de tekst terug); Oblique om de hoek van de maathulplijnen ten opzichte van de X-as (Enter = geen; alleen lineaire en uitgelijnde maten). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Zie [Maatgroottes instellen](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliassen: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, of met geselecteerde maten `Units in the text of the selected dimensions`. Schrijft de gemeten lengte in die eenheid, met de eenheid erachter (DIMLFAC en een DIMPOST-achtervoegsel); `D` gaat terug naar de eenheden van de tekening. Zie [Maten in mm, cm, m of km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliassen: `RC`. Drukt `Arc length: … Type: …` af, dan `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular vraagt `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand volgt de aanwijzer tot een klik of {{key:Enter}}; `O` vraagt `Select object` en `Reverse direction? [Yes/No] <N>` en maakt het object tot de wolk. `A` vraagt `Specify the length of each arc`. `R`, `P` en `F` kiezen het type voor de volgende wolk. Het resultaat is een gesloten polylijn van bogen.

### MLEADER

Aliassen: `MLD`; of {{ui:Leider}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, dan de tekst in het vak ter plaatse (of, zonder dat, `Enter text (an empty line ends)`). `Block` vraagt eerst een bloknaam en de multileider toont dat blok in plaats van tekst. Meer leiderlijnen: {{cmd:MLEADEREDIT}}. In DWG wordt het als echte multileider bewaard; DXF bewaart de lijnen, de pijlpunt en de tekst die het tekent.

### MLEADEREDIT

Aliassen: `MLE`. `Select a multileader`, dan `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: elk punt voegt een leiderlijn toe van een nieuwe pijlpunt naar dezelfde landingsplaats, tot Enter. `Remove leaders` haalt daarna de leiderlijn weg waarop u klikt (een multileider houdt minstens één). `Block content` vraagt een bloknaam en toont dat blok in plaats van de tekst (de attributen ervan worden gevraagd); `Text content` zet tekst terug. Elke leiderlijn heeft een eigen grip. Een DWG bewaart elke leiderlijn en het blok in één multileider.

### MLEADERALIGN

Aliassen: `MLA`. `Select multileaders`, dan `Select multileader to align to [Distribute/Spacing/Use current spacing]` en `Specify direction`. Verplaatst de landingsplaatsen van de andere multileiders (en hun tekst of blok) naar de lijn door de landingsplaats van de aangewezen multileider, in die richting; de pijlpunten blijven waar ze wijzen. `Spacing` zet ze ook op gelijke afstand; `Distribute` vraagt twee punten en spreidt ze daartussen gelijkmatig. Vereist minstens twee multileiders.

### MLEADERCOLLECT

Aliassen: `MLC`. `Select multileaders`, dan `Specify collected multileader location [Vertical/Horizontal]` (Enter houdt de plaats van de eerste). Maakt één multileider van meerdere: blokinhoud gaat in een nieuw blok dat ze allemaal naast elkaar of onder elkaar bevat; tekstinhoud wordt één notitie met een regel voor elk. De eerste multileider houdt zijn leiderlijnen; de andere worden verwijderd. Weigert een mengsel van tekst- en blokinhoud.

### TABLE

Aliassen: `TB`; of {{ui:Annoteren}} › {{ui:Meer}} › {{ui:Tabel}}. Maakt een tabel: één object dat u verplaatst, kopieert, draait, schaalt en plot zoals elk ander object, met de cellen als gegevens bewaard.

- `Number of data rows or [Paste/File/Style] <3>`, dan `Number of columns <3>`, `Text height` en `Top left corner of the table`. De tabel krijgt een titelrij (één samengevoegde cel) en een kop boven de datarijen.
- `P`: een tabel uit spreadsheetcellen op het klembord (tekst met een tab tussen de cellen). Ctrl+V met zulke cellen op het klembord doet hetzelfde, tenzij de eigen kopie van CadCraft de nieuwere is (of CadCraft het niet kan onderscheiden: dan plakt het zijn eigen kopie en zegt dat). `F`: een tabel uit een `.csv`- of tab-gescheiden bestand. De eerste rij wordt de kopregel; kolombreedtes passen zich aan de tekst aan.
- `S`: kies de tabelstijl voor deze tabel (zie {{cmd:TABLESTYLE}}).
- Het weigert een aantal rijen of kolommen dat geen geheel getal is, en meer cellen dan een tabel kan houden (2.000 rijen, 200 kolommen, 40.000 cellen).
- {{cmd:EXPLODE}} zet een tabel om in lijnen en tekst. Als DWG bewaard is een tabel een echt tabelobject dat andere programma's kunnen bewerken; als DXF bewaard is het een blok dat hem tekent, en CadCraft opent het weer als tabel.

### TABLEDIT

Aliassen: `TABLEEDIT`, `TABEDIT`; of dubbelklik op een cel. Bewerkt een tabel.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Klik op een cel, of typ, met een tabel geselecteerd, zijn naam (`B3`: kolom B, rij 3; de titelrij is rij 1). In de browser opent er een vak over de cel: {{key:Enter}} behoudt de tekst, {{key:Tab}} gaat naar de volgende cel, {{key:Alt+Enter}} begint een nieuwe regel, {{key:Esc}} laat de cel zoals ze was.
- Een tekst die met `=` begint, is een formule: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, met `+ - * / ^`, haakjes en functies zoals `sqrt` en `round`. De cel toont de waarde; een formule die naar zijn eigen cel verwijst, naar een cel buiten de tabel of naar een cel zonder getal, toont `####` en de opdrachtregel zegt waarom.
- `R` / `C`: `Insert` of `Delete` rijen of kolommen bij een aangewezen cel (hoeveel, en boven of onder, links of rechts). Formules volgen de cellen waarnaar ze verwijzen.
- `S`: de breedte van de kolom en de hoogte van de rij. Een rij is nooit lager dan haar tekst nodig heeft. Een geselecteerde tabel heeft ook een grip op de rand van elke kolom en elke rij.
- `M`: samenvoegen van de ene aangewezen cel tot de andere; `U`: splitsen. `A`: uitlijning (`TL` linksboven … `MC` midden … `BR` rechtsonder). `H`: de eigen teksthoogte van deze cel (0 = die van de stijl). `K`: maak de rij een titel-, kop- of datarij. `CL`: maak de cel leeg.
- Het weigert een tabel op een vergrendelde laag, het wissen van elke rij of kolom, en een samenvoeging die een andere samengevoegde cel doormidden zou snijden.

### TABLESTYLE

Aliassen: `TS`. Toont de tabelstijlen met hoeveel tabellen elk gebruiken, dan `Table style: [New/Set/Edit/Delete/Apply]`.

- Een stijl bevat de teksthoogte en uitlijning van de titel-, kop- en datarijen, de celmarge, en welke randen worden getekend (buiten, tussen rijen, tussen kolommen).
- `N` maakt een stijl op basis van de huidige en maakt hem actief; `S` stelt de actieve stijl in (nieuwe tabellen nemen hem); `E` bewerkt er één: tabellen die hem gebruiken, worden opnieuw getekend; `A` geeft de geselecteerde tabellen de actieve stijl; `D` verwijdert er één (niet Standaard, niet de actieve; tabellen die hem gebruikten behouden hun uiterlijk).
- Stijlen worden met de tekening bewaard (DWG en DXF).

### TABLEEXPORT

Slaat op wat een tabel toont als CSV-bestand (een formule als zijn waarde). `Select a table`, of selecteer er eerst één. Tekstcellen die met `=`, `+`, `-` of `@` beginnen, krijgen een voorafgaande `'`, zodat een spreadsheet ze niet uitvoert.

### TABLEPASTE

Aliassen: `PASTETABLE`. Maakt een tabel uit spreadsheetcellen op het klembord, en vraagt dan naar de linkerbovenhoek. Hetzelfde als {{cmd:TABLE}} › `Paste`.

### DATALINK

Aliassen: `DL`. `Data link: [New/List/Remove] <New>`. `N` vraagt om een CSV-bestand, plaatst er een tabel van en onthoudt de naam van het bestand; `L` toont de koppelingen met hun bestand, grootte, wanneer ze gelezen zijn en hoeveel tabellen ze gebruiken; `R` verwijdert een koppeling (haar tabellen blijven als gewone tabellen).

### DATALINKUPDATE

Aliassen: `DLU`. Leest het bestand van een gegevenskoppeling opnieuw en vult de tabellen die eraan gekoppeld zijn opnieuw (rijen en kolommen worden toegevoegd of verwijderd om te passen). Een browser kan zelf geen bestand openen, dus het vraagt u het bestand opnieuw te kiezen. Bij meerdere koppelingen vraagt het welke.

### FIELD

Plaatst een veld in de tekening: tekst die zichzelf berekent. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: nu, of de opgeslagen, aangemaakte of geplotte datum, en een formaat (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: de bestandsnaam, met of zonder extensie. `S`: het bladnummer, de titel, of hoeveel bladen er zijn. `P`: een tekeningeigenschap bij naam (zie {{cmd:DWGPROPS}}). `O`: kies een object, dan wat er gelezen wordt (oppervlakte, lengte, omtrek, straal, diameter, laag, naam, x, y, tekst, rotatie, kleur) en de decimalen. `E`: een formule. `C`: een tekst met codes zoals u ze typt, bijvoorbeeld `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Dan `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: een aangewezen tekst krijgt het veld erachter; een tabelcel evenzo; een blokverwijzing vraagt welk attribuut; {{key:Enter}} vraagt een hoogte en een punt voor een nieuwe tekst.
- Op het scherm heeft een veld een lichtgrijze achtergrond; een plot en een PDF hebben die nooit. Met de hand over de tekst van een veld typen beëindigt het veld. Een veld dat niet berekend kan worden, toont `####`.
- Het veld van een object zoekt zijn object via de sleutel die CadCraft aan objecten bewaart (Instellingen › CadCraft › Samenvoegbare bestanden); met sleutels uitgeschakeld weigert het.

### UPDATEFIELD

Aliassen: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` bepaalt wanneer velden zichzelf bijwerken: typ de letters van `O` open, `S` save, `P` plot, `R` regen (alle vier om mee te beginnen), of `NONE`.

### DWGPROPS

Aliassen: `DRAWINGPROPS`. Toont de eigenschappen van de tekening, dan `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. De eerste zes zijn die welke het paneel {{ui:Tekeninggegevens}} toont; `U` voegt uw eigen naam en waarde toe, `R` verwijdert er één. Velden lezen ze (`%<prop:title>%`, `%<prop:Client>%`) en volgen ze meteen. Het weigert een eigen naam die een van de ingebouwde is, of die `%`, `<`, `>`, een aanhalingsteken of een backslash bevat.

## Parametrisch

Zie [Een tekening beperken](topic:constraints) en [Parameters en vergelijkingen gebruiken](topic:parameters). Beperkingen werken op het tabblad {{ui:Model}}.

### GEOMCONSTRAINT en de GC-opdrachten

Alias `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, dan de vragen van die opdracht.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (het tweede verschuift).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT en de DC-opdrachten

Alias `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (een getal, een expressie, of `naam=expressie`).
- {{cmd:DCALIGNED}}: zoals hierboven, met `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` vraagt de tolerantie voor afstand en hoek.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Select objects`; hun beperkingen verdwijnen.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Select objects [Showall/Hideall]`, dan `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS en -PARAMETERS

{{cmd:PARAMETERS}} (aliassen `PAR`, `PARAM`) opent het paneel {{ui:Parameters}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Downloadt een macro (.swb) die het model in SolidWorks opnieuw opbouwt als één beperkte schets. Zie [Schetsen naar en van andere onderdelenmodelleerprogramma's verplaatsen](topic:solidworks-sketches).

## Blokken

### ANNOSCALE

Aliassen: `CANNOSCALE`. Zegt de annotatieschaal van de tekening en hoeveel annoterende objecten ze bevat, en vraagt dan `New annotation scale`: typ `1:50`, `1:100`, `2:1`, een kaal getal (`50` is 1:50) of de naam van een van de eigen schalen van de tekening. Elke annoterende tekst en maatvoering wordt zo verkleind of vergroot dat ze in de nieuwe schaal op dezelfde grootte print, in één ongedaan-maken-stap; objecten die niet annoterend zijn, blijven ongemoeid, en ook een object dat een lijst schalen bewaart zonder de nieuwe ({{cmd:OBJECTSCALE}}). Zie [Eenheden, papierformaten en schalen](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliassen: `OBJSCALE`. `Select annotative objects`, dan `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. Een annoterende tekst of maat bewaart een lijst van annotatieschalen. `Add` en `Delete` vragen om een schaal (`1:50`, `2:1`, een kaal getal, of de naam van een van de eigen schalen van de tekening); `Current scale` voegt de annotatieschaal van de tekening toe; `List` drukt de schalen van elk object af. De laatste schaal kan niet worden verwijderd. Objecten die niet annoterend zijn, worden overgeslagen: zet eerst Annoterend aan in Eigenschappen. De lijsten worden in DWG en DXF als eigen gegevens van CadCraft bewaard. Zie [Eenheden, papierformaten en schalen](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliassen: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Aan (zoals een tekening begint): een annoterend object wordt ook getoond in een viewport, of in het model, waarvan de schaal niet in zijn lijst staat, op de grootte die het heeft. Uit: het wordt daar niet getoond en kan in het model niet worden aangewezen. De schakelaar is één ongedaan-maken-stap; ze wordt niet in het bestand bewaard.

### SCALELISTEDIT

Aliassen: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` tot {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit en Delete vragen om de naam van de schaal. De eigen schalen van de tekening voegen zich bij de lijsten met viewport- en plotschalen en worden met de tekening bewaard. Zie [Eenheden, papierformaten en schalen](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT en PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: punten waar de kromme doorheen loopt; `Close`, `Undo`, dan `Start tangent` en `End tangent` (een punt, of {{key:Enter}}). Method › Control vertices vraagt een graad (1 tot 5) en tekent vanaf een besturingspolygoon. Object zet polylijnen om in splines door hun hoekpunten. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` voor meerdere objecten; lijnen, bogen en splines worden eerst als polylijnen aangeboden. Zie [Splines en polylijnen](topic:splines).

### BLOCK

Aliassen: `B`, `BMAKE`.

- `Enter block name`. Bestaat het: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Ze worden vervangen door één verwijzing naar het nieuwe blok.

### WBLOCK

Aliassen: `W`, `-WBLOCK`. Schrijft een blok, enkele objecten of de hele tekening als nieuw DWG- of DXF-bestand. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (het wordt de oorsprong van de nieuwe tekening), `Select objects`, dan `File format [DWG/DXF/R12 DXF]` en `File name for the new drawing`, dan `What to do with the objects [Retain/Convert to block/Delete]`. Convert vervangt ze door één verwijzing naar een blok met de naam van het bestand; Delete verwijdert ze.
- **Block**: `Block to write out`. De eigen objecten van het blok, met zijn basispunt als oorsprong, inclusief geneste blokken.
- **Entire drawing**: elk object in de modelruimte. Bladen worden niet geschreven; gebruik {{cmd:SAVEAS}} voor een kopie die ze behoudt.

Het nieuwe bestand bevat alleen de lagen, lijntypen, tekst- en maatvoeringsstijlen en blokken die zijn objecten gebruiken, en de eenheden van de tekening. De versie van een DWG is die welke {{cmd:SAVEAS}} het laatst gebruikte. In de browser wordt het bestand gedownload; in Studio opent het opslagvenster.

### ATTDEF

Aliassen: `ATT`, `DDATTDEF`, `-ATTDEF`; of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Kenmerk definiëren}}. Toont de modi, dan `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` bij constant), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} neemt attribuutdefinities in het blok op.

### EATTEDIT en ATTEDIT

`EATTEDIT` (`DDATTE`, of dubbelklik op een verwijzing met attributen; {{ui:Blokken}} › {{ui:Meer}} › {{ui:Attributen bewerken}}): `Select a block reference with attributes`, dan het dialoogvenster {{ui:Attributen bewerken}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): dezelfde verwijzing, dan `<prompt> (<TAG>) <value>` voor elk attribuut; {{key:Enter}} behoudt een waarde. Zie [Attributen](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Waarden blijven behouden; nieuwe attributen krijgen hun standaardwaarde, verwijderde gaan weg, plaatsingen worden teruggezet.

### BATTMAN

{{ui:Blokken}} › {{ui:Meer}} › {{ui:Attribuutbeheer}}. Het dialoogvenster: blok, attributen (tag, prompt, standaard, modi, volgorde), {{ui:De verwijzingen bijwerken (waarden behouden)}}, {{ui:Toepassen}}.

### REFEDIT en REFCLOSE

{{ui:Blokken}} › {{ui:Meer}} › {{ui:Ter plekke bewerken}}. `REFEDIT`: `Select the block reference to edit in place` (of de selectie). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; de balk-knoppen {{ui:Het blok opslaan}} en {{ui:Verwerpen}} doen hetzelfde. De hele bewerking is één ongedaan-maken-stap. Zie [Attributen](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: of de druk van een penstreek de lijndikte bepaalt van wat {{cmd:SKETCHFIX}} en {{cmd:SKETCHLIVE}} maken (standaard aan). Zie [Schetsen met een pen](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Alias: `OFFSTD`. Zegt welke kantoornorm voor deze tekening geldt en waar die vandaan komt: het eigen record van de tekening, de gedeelde norm van uw team, of uw Standaardbeleid (teksthoogten `all.anno.*`); zonder die is het de eigen maat van het programma. `[Import/Layers/Title block/Clear/eXit]`: `Import` leest een `cc-office-standard` .json (het record dat SuperCad en BimCraft schrijven) in deze tekening, en wordt er met de tekening in DWG en DXF bewaard; `Layers` voegt de kantoorlagen toe die de tekening mist, in één ongedaan-maken-stap, en verwijdert er nooit één; `Title block` toont de velden van het kantoor met de eigen waarden van deze tekening; `Clear` verwijdert het eigen record van de tekening. Hoogten van annoterende tekst en maatvoering volgen de norm die geldt. Zie [Eenheden, papierformaten en schalen](topic:units-papers-scales).

### BPARAMS

Aliassen: `BPM`, `BLOCKPARAMS`. Opent het beheer van parameters voor het blok in de blokeditor, het blok van de geselecteerde verwijzing, of het blok dat u noemt (`Block name`): parameters met formules, meerdere zichtbaarheidsparameters met hun statussen, en de eigen waarden en statussen van de geselecteerde verwijzing. Zie [Uw eigen parameters en zichtbaarheidsstatussen](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` doet hetzelfde op de opdrachtregel: `[Parameter/Visibility/State/Assign/Reference/Done]`.

### BEDIT en BCLOSE

`BE`; of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Blok bewerken}}. `Enter block name to edit <the selected reference's block>` opent de blokeditor. `BCLOSE` vraagt `Close the block editor on "…" [Save/Discard] <Save>`; de {{ui:Blok opslaan}} en {{ui:Wijzigingen verwerpen}} in de balk doen hetzelfde. Alles wat in de editor is gedaan, is één ongedaan-maken-stap.

### VIEWBASE

Alias: `FLATSHOT`. Een vlakke 2D-weergave van de volumes op het 3D-tabblad: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, een schaal (`1:20`, `2:1`; {{key:Enter}} neemt die die op het blad past), dan het middelpunt van de weergave. Eén blokverwijzing, zichtbare randen op VIEW-VISIBLE, verborgen randen gestippeld op VIEW-HIDDEN. Zie [Vlakke weergaven op een blad](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliassen: `-PUBLISH`; of {{ui:Alle bladen in één PDF}} in het dialoogvenster {{ui:Plotten naar PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} plot elk blad, `S` vraagt om namen gescheiden door komma's. Eén PDF, een pagina en een bladwijzer per blad. Zie [Elk blad in één PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliassen: `SSM`, `SHEETSETMANAGER`. Brengt u naar de sectie {{ui:Bladenset}} van het linker paneel: bladen uit vele tekeningen, genummerd en getiteld, hun titelblokken gevuld vanuit de set, als één PDF gepubliceerd. Zie [Bladensets](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): kies een DWG of DXF, dan het invoegpunt. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; bij meer dan één koppeling kiest u een van zijn verwijzingen of typt `N` en zijn naam. Zie [Gekoppelde tekeningen](topic:files#linked-drawings-external-references).

### COUNT

Aliassen: `BCOUNT`; of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Blokken tellen}}. `Select a block reference to count, or [All/Export] (Enter: All)`: een aanwijzing selecteert en telt elke verwijzing van dat blok in deze ruimte; {{key:Enter}} of `A` toont ze allemaal; `E` en dan `C` (aantallen) of `A` (attributen) downloadt een CSV. Zie [Blokken tellen en een lijst exporteren](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliassen: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (hoofdletters maken niet uit). `F` vraagt om een DWG of DXF, dan de hele tekening of een van zijn blokken; een naam die al in gebruik is, vraagt {{ui:Bestaande behouden}} of {{ui:Hernoemen}}. `L` opent het paneel Bibliotheek.
- `Specify insertion point [Scale/Rotate]`. `S` vraagt `Specify scale factor`, `R` vraagt `Specify rotation angle`; beide worden onthouden.
- Wanneer het blok al naast objecten staat die elders zonder het blok herhalen, zegt een regel hoeveel plekken worden voorgesteld, en krijgt de vraag `suGgested` erbij: `G` toont ze; klik nabij een ervan om het blok daar te plaatsen, `A` voor alle, {{key:Enter}} om terug te gaan. Ze nemen de rotatie van hun buren en de standaardwaarden van attributen over. Tekeningen met meer dan 20.000 objecten in de open ruimte worden niet doorzocht.
- Dan `Enter <prompt> (<TAG>) <default>` voor elk attribuut dat het blok vraagt. Zie [Blokattributen](topic:attributes).

### LIBRARY

Aliassen: `LIB`. Opent het paneel Bibliotheek: items plaatsen, controleren op updates, bronvermeldingen van de bibliotheek. Geen vragen. Zie [Invoegen uit een bestand of de bibliotheek](topic:insert-from-file-and-library).

### STEELMEMBER

Aliassen: `SMEMBER`; of {{ui:3D-staaf}} op het tabblad {{ui:Standaard}} van de bibliotheek. `Section size <W12x26>` (zoals het tabblad het toont), dan `Start point [Column]` en `End point`: een massieve staaf op het 3D-tabblad tussen de twee punten, op de grond. `C` vraagt het basispunt van de kolom en haar hoogte. Eén ongedaan-maken-stap. Zie [Staalprofielen en standaardonderdelen plaatsen](topic:steel-and-standard-parts).

### PARTSLIST

Aliassen: `PLIST`. `Top left corner of the parts list`, dan `Text height <2.5>`: tekent een tabel van elk standaardonderdeel en elk staalprofiel dat uit de bibliotheek is geplaatst (itemnummers, hoeveelheid, onderdeel, norm, maat, lengte, materiaal, massa). Eén ongedaan-maken-stap. Zie [Staalprofielen en standaardonderdelen plaatsen](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliassen: `PU`. Verwijdert blokdefinities die niet gebruikt worden. Geen vragen.

### DELBLOCKS

Of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Blokken verwijderen}}. `Select block to delete [Name/eXit]`: kies een blokverwijzing, of `N` voor de lijst met blokken met een filter (kies er meerdere), of `X` / {{key:Enter}} om te eindigen. Elke verwijzing gaat weg — in het model, op elk blad en binnen andere blokken — en daarna de definitie, en de opdrachtregel zegt wat is verwijderd en wat niet kon. Namenloze blokken en gekoppelde tekeningen worden niet aangeboden. De vraag komt terug voor het volgende blok; de hele opdracht is één ongedaan-maken-stap.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} plakt wat u kopieerde ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) als één blok: kies het invoegpunt en één verwijzing naar een nieuw blok komt daar, geselecteerd. Het blok krijgt een eigen naam (`A$C` en een nummer); {{cmd:RENAME}} geeft het de uwe. Eén ongedaan-maken-stap verwijdert de verwijzing en het blok.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} vraagt het blok dat vervangen wordt en het blok dat ervoor in de plaats komt (`?` toont de blokken), en wijzigt dan elke verwijzing in het model, op elk blad en binnen andere blokken. Elke verwijzing behoudt haar plaats, schaal, rotatie, laag en de waarden van attributen die beide blokken hebben; attributen die alleen het nieuwe blok heeft, beginnen op hun standaardwaarden, en het zegt welke waarden zijn verworpen. Wanneer niets het oude blok meer gebruikt, biedt het aan het te verwijderen. Het weigert gekoppelde tekeningen en een vervanging die een blok in zichzelf zou zetten. Eén ongedaan-maken-stap.

### MINSERT

{{cmd:MINSERT}} plaatst een blok in rijen en kolommen: bloknaam, invoegpunt, schaal, rotatie, aantal rijen en kolommen, en de afstanden ertussen. De hele reeks draait mee met de rotatie. Elk is een eigen verwijzing (10.000 ten hoogste), dus elk ervan kan achteraf worden verplaatst of gewist.

### BLOCKSPALETTE

Aliassen: `BLOCKSPAL`; of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Paneel Blokken}}. Toont het paneel {{ui:Blokken}} met de cursor in het filter. Elk blok heeft een klein voorbeeld; de laatst geplaatste komen eerst. De twee knoppen naast het filter schakelen tussen een lijst en een raster van voorbeelden. Klik op een voorbeeld (of op {{ui:Invoegen}}) om het blok met {{cmd:INSERT}} te plaatsen, of sleep het op de tekening om het te plaatsen waar u het loslaat.

{{ui:Bibliotheken}}, onder de lijst: {{ui:Een tekening toevoegen}} neemt een eigen DWG- of DXF-bestand en toont zijn blokken met voorbeelden, en de hele tekening als één blok. Bij het plaatsen van een ervan wordt zijn definitie (en de blokken die het nestelt, en hun lagen) in deze tekening gekopieerd, zoals de optie `File` van {{cmd:INSERT}} doet; een blok dat hier al staat met dezelfde definitie, wordt zonder vraag gebruikt; een met dezelfde naam maar een andere definitie vraagt {{ui:Bestaande behouden}} of {{ui:Hernoemen}}. In een browser blijft het bestand bestaan tot de pagina sluit. In CadCraft Studio toont {{ui:Een map toevoegen}} de tekeningen in een map, elk geopend wanneer u erop klikt, en bestanden en mappen worden onthouden. Het kleine kruisje verwijdert een bibliotheek uit de lijst; het bestand blijft ongemoeid. De gedeelde {{ui:Bibliotheek}} is iets anders: zie [Invoegen uit een bestand of de bibliotheek](topic:insert-from-file-and-library).

### BCONVERT

Of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Herhalingen omzetten naar blokken}}. Vindt geometrie die zich herhaalt en zet elke kopie om in een verwijzing naar één blok.

- `Select the objects that repeat, or [Block]`: de objecten van één kopie. `B` noemt in plaats daarvan een bestaand blok, om losse kopieën van zijn objecten te vinden.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` en `P` wisselen wat als kopie telt; {{key:Enter}} zoekt. De instellingen worden onthouden.
- `Name for the new block <Block1>`, dan `Specify the block's base point` ({{key:Enter}} neemt de linkeronderhoek van de selectie).
- Het zegt hoeveel andere sets objecten dezelfde geometrie hebben, markeert alles wat het zou vervangen, en vraagt `Yes/No`.

Een kopie is dezelfde objecten, verplaatst en gedraaid onder elke hoek (en gespiegeld of geschaald met één factor wanneer die aan staan): elk object moet zijn tegenhanger hebben, binnen een miljoenste van de grootte van de selectie. Elke verwijzing krijgt eigen rotatie en schaal (een gespiegelde een negatieve Y-schaal), en de laag die de objecten gemeen hadden. Objecten op vergrendelde lagen blijven ongemoeid en worden geteld. Het zoekt in de open ruimte (het model of het open blad). Een zeer grote zoektocht stopt bij een werkgrens en zegt dat. Eén ongedaan-maken-stap.

### BSEARCH

Of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Blokken zoeken}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: een deel van een bloknaam, of een patroon met `*` en `?`. Toont elk blok met zijn verwijzingen hier en in de hele tekening.
- `A`: een attribuutwaarde, of `TAG=value`. Toont de blokken waarvan de verwijzingen die bevatten, met de gevonden waarden. Constante attributen tellen mee.
- `G`: selecteer objecten, of één blokverwijzing, en de blokken waarvan de vorm voor minstens 85% gelijk is, worden vermeld, het beste eerst. Grootte, rotatie en spiegeling tellen niet mee. De maat vergelijkt de afstanden tussen punten die over de omtrekken zijn verdeeld, dus hij vindt verwante vormen; gebruik {{cmd:BCONVERT}} om exacte kopieën te vinden.

De verwijzingen die in de open ruimte worden gevonden, worden geselecteerd, klaar voor de volgende opdracht.

### BREPLACE

Of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Blokken vervangen}}. `Replace [Selected/All]`: `S` vervangt de blokverwijzingen die u selecteert door het blok dat u noemt; `A` vraagt om een blok en zijn vervanging en wijzigt elke verwijzing, zoals {{cmd:BLOCKREPLACE}} doet (dezelfde code). Een verwijzing behoudt haar plaats, schaal, rotatie, laag en de waarden van attributen die beide blokken hebben; waarden waarvoor het nieuwe blok geen plaats heeft, vervallen en worden genoemd. `?` toont de blokken. Eén ongedaan-maken-stap.

### DATAEXTRACTION

Aliassen: `EATTEXT`, `DX`; of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Gegevensextractie}}. Toont blokken, hun attributen en objecteigenschappen als tabel of als CSV-bestand.

- Werkt op de selectie, of vraagt `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` wanneer de selectie beide bevat. Namenloze blokken, tabellen en materiaallijsten worden nooit getoond.
- Het drukt de kolommen af waaruit u kunt kiezen (naam, soort, laag, X, Y, rotatie, schaal, lengte, oppervlakte, kleur, lijntype, ruimte, en één per attribuut-tag), dan `Columns, by name or number with commas between`. {{key:Enter}} neemt de met een ster gemarkeerde: de naam en elk attribuut voor blokken; soort, laag en lengte voor objecten.
- `Put identical rows together with a count? [Yes/No] <Yes>`, dan `Put the list in a: [Table/Csv] <Table>`. Een tabel is een gewone tabel ({{cmd:TABLEDIT}} bewerkt hem) en is niet live: voer de opdracht opnieuw uit wanneer de tekening verandert.
- Het weigert een kolom die niet in de lijst staat. Een tabel houdt 1.999 datarijen; een CSV-bestand neemt ze allemaal.

### COUNTTABLE

Telt de blokverwijzingen van de selectie (of van de open ruimte) en zet de aantallen in een tabel (`Block`, `Count`) of een CSV-bestand. Voor een telling die zichzelf bijwerkt met de tekening, zie {{cmd:BOMTABLE}}.

## Bladen en plotten

### LAYOUT

Aliassen: `LO`, `NEWLAYOUT`; of de knop {{ui:+}} onder de tekening. Een nieuw blad met een rand, een titelblok en één viewport, op ISO A3 (of Tabloid voor tekeningen in inches of voet). Geen vragen.

### MVIEW

Aliassen: `MV`. Alleen op een blad ({{cmd:VPORTS}} op een blad doet hetzelfde).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. De viewport toont het hele model op een standaardschaal.
- `P` (Polygonal): klik de hoeken van de omtrek (`Undo`, `Close`), {{key:Enter}} als u klaar bent. Het weigert minder dan drie hoeken.
- `O` (Object): `Select a closed object for the viewport's outline`: een gesloten polylijn, cirkel of ellips op het blad. De viewport neemt zijn vorm aan (bogen als korte rechte stukken); het object blijft zoals het was. Het weigert een object dat niet gesloten is.

### VPCLIP

Knipt een viewport bij die al op het blad staat. `Select viewport to clip` (of selecteer hem eerst), dan `Select the object to clip to [Polygonal/Delete]`:

- Klik op een gesloten polylijn, cirkel of ellips, of {{key:Enter}} (of `P`) om de hoeken van een veelhoek aan te klikken.
- `D` (Delete, aangeboden wanneer de viewport is bijgesneden) maakt hem weer een rechthoek: het kader rond de omtrek die hij had.
- Wat de viewport toont, beweegt niet op het papier, en zijn schaal blijft. Het model wordt alleen binnen de omtrek getekend en geplot, en de rand volgt die. Eén ongedaan-maken-stap.
- Een bijgesneden viewport heeft een grip bij elke hoek van zijn omtrek, naast zijn middelpunt en de vier hoeken van zijn kader (het verslepen van een hoek van het kader rekt de omtrek mee uit). Eigenschappen toont Omtrek: Rechthoek, of Bijgesneden met het aantal hoeken.
- DWG- en DXF 2000-bestanden bewaren de omtrek voor CadCraft. Andere programma's openen de viewport als de rechthoek eromheen; DXF R12 bewaart alleen de rechthoek.
- Op het tabblad Model zegt het dat viewports op bladen staan.

### VPORTS

Aliassen: `VIEWPORTS`. {{cmd:SPLIT}} is hetzelfde, ook vanaf een blad, en {{ui:Weergave}} › {{ui:Meer}} › {{ui:Naast elkaar splitsen}}, {{ui:Onder elkaar splitsen}}, {{ui:Vier vensters}} en {{ui:Eén venster}} voeren het uit. In het model: `Enter number of panes [SIngle/2/3/4] <3>`; `2` vraagt `[Horizontal/Vertical] <Vertical>` (Vertical = naast elkaar), `3` vraagt `[Left/Right] <Right>` (waar het grote venster komt). Elk venster behoudt zijn eigen weergave en ruimte; een klik maakt een venster actief. Op een blad is het {{cmd:MVIEW}}. Zie [Het scherm splitsen](topic:split-screen).

### VPVIEW

Geen aliassen. Alleen op een blad.

- `Select viewport` (overgeslagen wanneer er één is geselecteerd), dan in het model: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Geen aliassen. Een eigen coördinatenstelsel; geen bewerking. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: een punt is een nieuwe oorsprong, dan `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: oorsprong, een punt op de positieve X-as, een punt aan de positieve Y-kant. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` en een naam. De weergave draait zodat de nieuwe X-as horizontaal ligt. Zie [De weergave draaien en uw eigen coördinaten gebruiken](topic:ucs-and-turned-view).

### PLAN

Geen aliassen. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: draait de weergave van het actieve venster zodat de X-as van het UCS (of van de wereld) horizontaal ligt. Er verschuift niets in de tekening.

### TURNLEFT, TURNRIGHT, TURNWORLD

Geen aliassen; of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Weergave 90° linksom draaien}}, {{ui:Weergave 90° rechtsom draaien}}, {{ui:Terug naar wereld}}. Hetzelfde als `UCS Z -90`, `UCS Z 90` en `UCS W`, met de weergave die meedraait.

### VPLAYER

Geen aliassen. Op een blad, of binnen een viewport. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` vragen om laagnamen (komma's, en `*` en `?` als jokertekens), dan `[All/Select/Current] <Current>` viewports; Reset zet elke laag terug op haar standaard "bevroren in nieuwe viewports"; `V` stelt die standaard in (`[Frozen/Thawed]`), die {{cmd:MVIEW}} gebruikt. `?` toont de lagen die in de huidige viewport bevroren zijn. De viewportkolom van het paneel Lagen doet hetzelfde voor één viewport. Zie [Een laag in één viewport bevriezen](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliassen: `MS`; of dubbelklik binnen een viewport. Alleen op een blad. Werk op het model via een viewport: de geselecteerde, de enige op het blad, of `Click inside the viewport to work in`. Verschuiven en zoomen binnen de viewport verandert de weergave van de viewport (een viewport met vergrendelde weergave behoudt die en het blad beweegt in plaats daarvan); de nieuwe weergave wordt als één ongedaan-maken-stap geschreven. Zie [Op het model werken via een viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliassen: `PS`; of dubbelklik buiten de viewport, of klik op een tabblad onder de tekening. Terug naar het blad.

### PLOT

Aliassen: `PRINT`, `PUBLISH`, `EXPORTPDF`; of {{key:Mod+P}}. Opent het dialoogvenster {{ui:Plotten naar PDF}}. Zie [Plotten naar PDF](topic:plot-pdf).

### PLOTSTYLES

Aliassen: `STYLESMANAGER`, `PSTABLES`; of {{ui:Tabellen bewerken…}} in het dialoogvenster {{ui:Plotten naar PDF}}. Opent {{ui:Plotstijltabellen}}: wat elke kleur afdrukt als (kleur, grijs, inkt, lijndikte), bewaard bij de tekening. Zie [Plotstijltabellen](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} verplaatst objecten tussen een blad en het model via een viewport, geschaald en gedraaid zodat ze van de andere kant hetzelfde lijken. Op een blad selecteert u objecten en ze gaan naar het model (kies de viewport wanneer het blad er meer dan één heeft). Terwijl u op het model via een viewport werkt ({{cmd:MSPACE}}), komen de geselecteerde objecten op het blad. Het zegt hoeveel keer groter of kleiner ze zijn geworden. Viewports blijven op hun blad. Eén ongedaan-maken-stap.

### ISODRAFT

{{cmd:ISODRAFT}} zet isometrisch tekenen `ON` of `OFF`, of gaat rechtstreeks naar het vlak `Left`, `Top` of `Right`. Terwijl het aan staat: Ortho ({{key:F8}}) houdt lijnen langs de twee assen van het vlak (links: 90° en 150°; boven: 30° en 150°; rechts: 30° en 90°), polaire tracering ({{key:F10}}) volgt dezelfde assen, snappen aan het raster ({{key:F9}}) gebruikt het isometrische raster, en het raster ({{key:F7}}) wordt getekend met lijnen op 30°, 90° en 150°. {{cmd:ELLIPSE}} krijgt `Isocircle`: geef een middelpunt en een straal (of `Diameter`) en hij tekent de ellips die een cirkel toont op het huidige vlak. De tekening blijft vlak: dit zijn hulpmiddelen om een pictoriaal beeld te tekenen, geen 3D-model. De instelling geldt voor deze sessie en wordt niet in het bestand bewaard.

### ISOPLANE

{{cmd:ISOPLANE}} kiest het vlak waarop isometrisch tekenen werkt: `Left`, `Top` of `Right`. Enter gaat naar het volgende vlak. Terwijl isometrisch tekenen aan staat, doet {{key:F5}} hetzelfde midden in een opdracht; terwijl het uit staat, wordt {{key:F5}} aan de browser overgelaten.

## Onderzoek

### CAL

Toont de waarde van een berekening, zoals die wordt gelezen waar overal een lengte wordt getypt.

- `Expression`: typ hem, bijvoorbeeld `12'6"+3/4"` of `(24'-0")/3`, en druk op {{key:Enter}}. CadCraft toont `= 12'-6 3/4"   (150.75 drawing units)`. Zie [Rekenen in een getypte waarde](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliassen: `DI`; of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Afstand meten}}.

- `Specify first point`, `Specify second point`. Drukt afstand, hoek, Delta X en Delta Y af.

### AREA

Aliassen: `AA`; of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Oppervlakte}}. Drukt de oppervlakte en omtrek af.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Klik of typ hoeken; bij `Specify next point (Enter closes) [Undo]` drukt u op {{key:Enter}} om de omtrek te sluiten. `U` neemt de laatste hoek terug.
  - {{key:Enter}} of `O`, dan `Select object`: een cirkel (drukt de omtrek ervan af), een ellips, een polylijn (een open polylijn wordt voor de oppervlakte met een rechte lijn gesloten, en zijn lengte wordt afgedrukt), of een arcering (gaten worden eraf getrokken).
  - `A` (Add area) en `S` (Subtract area) houden een lopend totaal bij: de vraag begint met `(ADD mode)` of `(SUBTRACT mode)`, elke oppervlakte wordt toegevoegd of afgetrokken, en `Total area = …` wordt na elke afgedrukt. In deze modi kiest `O` objecten tot {{key:Enter}}, en {{key:Enter}} bij de eerste vraag beëindigt de opdracht.

### MEASUREGEOM

Aliassen: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; na elke meting vraagt het opnieuw, met `eXit` als standaard.

`Quick` meet rond de aanwijzer terwijl u hem beweegt: de afstand tot het dichtstbijzijnde object rechts, boven, links en onder (langs de assen van het huidige UCS), getekend terwijl u beweegt, en de hoek waar twee van die buren recht zijn en samenkomen. Een klik schrijft de vier afstanden, de vrije breedte en hoogte en de hoeken naar de geschiedenis; Enter gaat terug naar de opties. Het leest wat op het scherm staat.

- `D`: twee punten, zoals {{cmd:DIST}}.
- `R`: `Select arc or circle`; drukt de straal en diameter af.
- `A`: een boog (zijn ingesloten hoek), een lijn en dan een tweede lijn (de hoek ertussen, richting hun verre uiteinden), of {{key:Enter}} en drie punten (hoekpunt, dan de twee uiteinden).
- `AR`: zoals {{cmd:AREA}}, één oppervlakte.

### ID

Geen aliassen. `Specify point`; drukt zijn X en Y af.

### LIST

Aliassen: `LI`, `LS`. `Select objects`; drukt van elk object het soort, de laag en de belangrijkste maten af.

### MASSPROP

{{cmd:MASSPROP}} geeft de doorsnede-eigenschappen van de regio's en gesloten objecten die u selecteert, samen genomen: oppervlakte, omtrek, omhullende, zwaartepunt, momenten van traagheid om de X- en Y-as door de oorsprong, het traagheidsproduct, draaistralen, dezelfde momenten om het zwaartepunt, en de hoofdmomenten met de richtingen van hun assen. Gaten in een regio tellen als gaten. De getallen zijn in tekeneenheden en exact voor omtrekken van lijnen en bogen; ellipsen en splines worden als korte rechte segmenten gemeten, en het zegt dat. Na het rapport vraagt het of het naar een tekstbestand moet worden geschreven. Objecten die niet gesloten zijn, worden overgeslagen, en het zegt hoeveel.

## Weergave, bestand en overig

### ZOOM

Aliassen: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Klik twee hoeken voor een venster. `E`, `A` of Enter: de hele tekening.
- `P` (Previous, of {{ui:Vorige}} in de werkbalk) gaat terug naar de weergave ervoor, tot 10 weergaven per tabblad; een reeks wielstappen of één verschuiving telt als één weergave.
- Een getal zoals `2`, `2x` of `0.5x` (of `S` en dan het getal) zoomt in of uit met die factor rond het midden van het scherm.
- `C` vraagt `Specify center point` en `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT en de PDF-opdrachten

Aliassen: `PDFATT` voor {{cmd:PDFATTACH}}, `PDFIM` voor {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} plaatst een PDF-pagina onder de tekening (bestand, pagina, invoegpunt, schaal, rotatie); {{cmd:PDFIMPORT}} zet de lijnen, krommen, vullingen en tekst van een pagina om in tekenobjecten op lagen die naar de PDF zijn genoemd, op ware grootte, op een opgegeven schaal, of geschaald vanaf twee punten en een echte afstand. {{cmd:PDFCLIP}} knipt een onderlegger bij, {{cmd:PDFADJUST}} stelt vervagen, contrast, zwart-wit in of zet hem uit, {{cmd:PDFLAYERS}} schakelt de eigen lagen van de PDF, en {{cmd:PDF}} geeft CadCraft opnieuw de bestanden die de onderleggers van een tekening gebruiken. Zie [PDF-onderleggers](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Tekenautocomplete: wanneer geen opdracht loopt, toont een grijze schim wat de patronen van uw tekening zeggen dat er komt. {{cmd:AUTOCOMPLETE}} zet het `On` of `Off` (ook Instellingen › CadCraft) of `Show`t wat het nu zou voorstellen. **Tab** tekent de schim als één ongedaan-maken-stap, **Esc** verwerpt hem tot de tekening verandert. Het vindt drie dingen in de nieuwste objecten: de volgende kopie van iets dat twee keer of vaker op een gelijke stap is getekend (stijlen, kolommen, het opstaan en de tree van een trap), de volgende treden van een polylijntrap, en de ontbrekende zijde van een kamer of wandketen. Midden in {{cmd:LINE}} of {{cmd:PLINE}} is de schim het **volgende punt**: de volgende stap van een trap (opstap, tree, opstap…), de vierde hoek van een rechthoek, het punt dat hem sluit, of nog een gelijke stap. Breng de cursor ernaartoe en druk op **Tab**, alsof u daar had geklikt; ga door of druk op Enter. Berekend op deze computer met regels, zonder model.

### AUTOSHEET

Alias: `ASH`. Bladen die zichzelf indelen. {{cmd:AUTOSHEET}} neemt de delen van de tekening (uw benoemde weergaven, of de afzonderlijke delen van het model, of het hele model), kiest een papierformaat (of het formaat dat u geeft), geeft elk deel een standaardschaal (één schaal voor alles, of de grootste die elk kan hebben) en plaatst de weergaven in rijen op nieuwe bladen met een titelblok en onder elk een onderschrift (naam en schaal). Wat niet op één blad past, krijgt een eigen blad. Eén ongedaan-maken-stap. Berekend op deze computer met regels, zonder model.

### PHOTOSKETCH

Alias: `PSK`. Schetsfoto naar tekening. Kies een foto (JPEG, PNG of TIFF) van een handschets op een vel papier. {{cmd:PHOTOSKETCH}} vindt de vier hoeken van het vel, trekt het perspectief recht, neemt het papierformaat dat u noemt (`Paper`, of het dichtstbijzijnde standaardformaat) en de `Scale` van de schets (1 : n), en traceert de pennenlijnen in lijnen, bogen en cirkels, met een laag voor elke pennenkleur (zwart, rood, blauw, groen). Als het de rand van het papier niet kan vinden, neemt het de hele foto als het vel en zegt dat. Letters worden weggelaten. Eén ongedaan-maken-stap. Gedaan op deze computer met klassieke beeldverwerking, zonder model, en niets wordt ergens naartoe gestuurd. Zie ook de opdrachten voor gescande tekeningen.

### AUTODIM

Alias: `ADIM`. Automatische maatvoering volgens regels. {{cmd:AUTODIM}} voorziet de geselecteerde objecten (of de hele tekening) van maten op basis van hun vlakke en loodrechte randen: een keten van maten langs de zijden die u kiest (`Sides`), één totaalmaat erbuiten, de breedte van elke opening (een afstand tussen collineaire wandlijnen), een diameter voor elke maat gat, en met `Grid` de afstand tussen rasterlijnen. Een maat die er al staat, wordt niet opnieuw gemaakt. Eén ongedaan-maken-stap. Berekend op deze computer met regels, zonder model.

### GRIDMOVE

Alias: `GM`. Een rasterlijn verplaatsen neemt de set mee. {{cmd:GRIDMOVE}} verplaatst een rasterlijn (een lijn op een laag waarvan de naam raster of as zegt) en wat eraan hangt: wanden met een uiteinde op de lijn rekken mee, wanden langs de lijn verschuiven als geheel, kolommen (blokverwijzingen en cirkels op de lijn), de bol en tag verschuiven, en maten waarvan de punten erop liggen, meten de nieuwe afstand. Geef twee punten (alleen het deel dwars op de lijn telt) of `Distance`. Eén ongedaan-maken-stap haalt alles terug. Gedaan volgens regels op deze computer.

### DETAILS

Alias: `DET`. Details die u vinden. {{cmd:DETAILS}} bewaart de eigen details van uw bureau: `Add` zet een blok van deze tekening in de lijst, `List` en `Remove` beheren hem, en `Find` rangschikt ze voor wat geselecteerd is (of voor wat u het laatst tekende) op de woorden in de lagen, bloknamen, arceringspatronen en notities van het object, tegen de naam en notities van elk detail; zo vindt een raamkozijn uw dorpelafwerking. Kies een nummer en een punt om het te plaatsen. Met `Hint` aan (ook Instellingen › CadCraft) zet het selecteren van iets waar een detail bij past, één regel in de statusbalk. De lijst wordt in deze browser bewaard, op deze computer, en die lijst wordt doorzocht. `Share` zet hem ook in uw map Documenten (`.cadcraft/firm-details.json`, met de tekening van elk blok): `Pull` voegt toe wat uw team heeft en u mist, `Push` voegt toe wat u heeft en zij missen, `Both` doet beide, en er wordt nooit iets uit een van beide kanten verwijderd. Open eerst de map Documenten ({{cmd:DOCUMENTS}}); als die map een Team Cloud Plan-map is, deelt het hele team één lijst. Een detail-item in het paneel Bibliotheek heeft een knop **Toevoegen aan de details van mijn bureau** die het in dezelfde lijst zet. Gedaan op deze computer op basis van woorden, zonder model.

### SKETCHFIX

Alias: `SKF`. Pennenschetsen worden precieze geometrie. Druk op een vrije streek per keer en sleep (pen, muis of vinger), en dan Enter. Elke streek wordt gelezen als een lijn, cirkel, boog, rechthoek of polylijn: bijna horizontale en loodrechte lijnen worden precies horizontaal en loodrecht gemaakt, een gesloten ronde streek wordt een cirkel, een gesloten streek met vier rechte hoeken een rechthoek, en de uiteinden van de streken worden samengetrokken en op de uiteinden die al in de tekening staan getrokken. Eén ongedaan-maken-stap. Berekend op deze computer met regels, zonder model.

### SCANATTACH en de opdrachten voor gescande tekeningen

Aliassen: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} heeft er geen. Ze werken op een afbeelding, elk als één ongedaan-maken-stap. {{cmd:SCANATTACH}} voegt een PNG, JPEG, TIFF (één pagina of alle) of een PDF-pagina die een afbeelding is in. {{cmd:SCANSCALE}} schaalt het blad vanaf twee aangewezen punten en de ware afstand. {{cmd:SCANALIGN}} verplaatst en draait het op twee punten (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} toont de hoek van de lange lijnen van het blad en draait het blad zodra u `Accept` kiest of een `Value` geeft. {{cmd:SCANCLEAN}} maakt het zwart-wit (`Threshold` Auto/Adaptive/Level, `Specks`) en `Run`. {{cmd:SCANCROP}} houdt een venster. {{cmd:SCANERASE}} wist een `Rectangle`, `Polygon` of `Lasso`. {{cmd:SCANTRACE}} traceert lijnen en bogen op een nieuwe laag (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) en meldt wat het vond en wat het als raster liet. {{cmd:SCANINFO}} toont het oorspronkelijke bestand en de stappen. {{cmd:RASTERSNAP}} zet het snappen aan de lijnen van gescande bladen aan of uit. Zie het onderwerp Gescande tekeningen en het traceren.

### REGEN en REGENALL

Aliassen: `RE` voor {{cmd:REGEN}}, `REA` voor {{cmd:REGENALL}}. Bouwt op het scherm opnieuw op wat uit de tekening wordt getekend: {{cmd:REGEN}} het tabblad waarnaar u kijkt (op een blad ook het model dat zijn viewports tonen), {{cmd:REGENALL}} elk tabblad, elk gesplitst venster en elke geopende tekening. Gebruik ze wanneer het beeld verouderd lijkt na een gescripte of zeer grote wijziging, of wanneer een assistent de tekening heeft bewerkt; de tekening zelf wordt niet aangeraakt, dus er is niets ongedaan te maken.

### NAMEDVIEW

Aliassen: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, dan de naam van de weergave. `S` bewaart de weergave op het scherm, `W` een venster dat u kiest, `R` toont een bewaarde weergave, `D` verwijdert er één, `?` toont de weergaven van dit tabblad. Bewaren onder een bestaande naam vervangt die; elke wijziging is één ongedaan-maken-stap. Weergaven horen bij het tabblad waarop ze zijn bewaard. DWG- en DXF-bestanden bewaren ze (de VIEW-tabel); de weergaven van een blad komen terug op het eerste blad, omdat het bestand niet zegt welk.

### UNDO en REDO

Aliassen: `U` voor {{cmd:UNDO}}; {{cmd:REDO}} heeft er geen. Ook {{key:Mod+Z}} en {{key:Mod+Y}}.

### LAYER

Aliassen: `LA`. Springt naar het paneel {{ui:Lagen}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` of een naam (`?` toont ze: Continuous, die van de tekening, en DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE met hun `2` (half) en `X2` (dubbel) groottes). {{cmd:LWEIGHT}} (`LW`): de lijndikte voor nieuwe objecten in mm, of `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): de lijntypeschaal van de tekening (ongedaan te maken). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — hetzelfde als de knop {{ui:LWT}} in de statusbalk. Zie [Lijndiktes en lijntypen](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, dan de nieuwe naam; objecten of verwijzingen volgen. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` tot {{key:Enter}}, dan `Select object on target layer or [Name]` en `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, dan `Y`: de laag en elk object erop gaan weg (niet laag 0, DEFPOINTS of de actieve laag). Elk is één ongedaan-maken-stap. Zie [Een tekening ordenen met lagen](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Lagen door objecten aan te wijzen; ook in het menu {{ui:Hulpmiddelen}} van het paneel {{ui:Lagen}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, dan {{key:Enter}}: elke andere laag gaat uit. {{cmd:LAYUNISO}} zet ze weer aan. {{cmd:LAYOFF}} en {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (of bevroren), telkens opnieuw; `U` neemt de laatste terug, {{key:Enter}} eindigt. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} zet elke laag aan, {{cmd:LAYTHW}} ontdooit elke laag. Elke opdracht is één ongedaan-maken-stap. Zie [Een tekening ordenen met lagen](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} start een lege tekening en {{cmd:OPEN}} opent een DWG of DXF, elk in een eigen tabblad over de tekening (een onaangeroerde nieuwe tekening wordt gebruikt in plaats van een nieuw tabblad). Een tabblad sluiten met niet-opgeslagen wijzigingen vraagt eerst. Zie [Het scherm splitsen](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, ook {{key:Mod+S}}) downloadt een kopie in het formaat van de tekening: DWG als ze uit een DWG is geopend, DXF als ze uit een DXF is geopend. Een nieuwe tekening gebruikt het formaat dat het laatst bij Opslaan als in deze browser is gekozen, anders DWG.

{{cmd:SAVEAS}} (ook {{key:Mod+Shift+S}}) opent het dialoogvenster {{ui:Een kopie opslaan als}}: kies {{ui:DWG}} (en zijn {{ui:Versie}}), {{ui:DXF R12}} of {{ui:DXF 2000}}, dan {{ui:Opslaan}}. De keuze blijft voor deze tekening en voor nieuwe tekeningen in deze browser.

{{cmd:DXFOUT}} downloadt altijd een kopie in DXF R12, zonder het formaat te wijzigen dat {{cmd:SAVE}} gebruikt.

Zie [Bestanden: wat opent, wat slaat op](topic:files#saving).

### TOUR

Aliassen: `TUTORIAL`. Start de rondleiding van zes stappen voor de eerste tekening opnieuw. Zie [Aan de slag](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliassen: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Zie [Instellingen](topic:settings#toolbar-position).

### COMMANDLINE

Aliassen: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: zet de opdrachtregel vast of laat hem zweven, maakt hem één regel, vraagt hoeveel geschiedenisregels getoond worden (0 tot 12), of opent de geschiedenis. Zie [Instellingen](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: de balken boven de tekening zoals ze waren, of compact. Zie [Instellingen](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: de stap waarop de polaire tracering uitlijnt (meer dan 0, tot 180). Blijft in deze browser bewaard.

### UNITS

Aliassen: `UN`. Hoe lengtes worden geschreven en getypt.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectonisch en Breuk: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. De andere: `Enter number of decimal places (0 to 8)`.

Nieuwe maten volgen het. Eén ongedaan-maken-stap. Hetzelfde als {{ui:Lengteformaat}} en {{ui:Precisie}} in {{ui:Huidige instellingen}}; zie [Voet en inch, en breuken](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliassen: `GDS`. Bekijk een IC-layout (een GDSII-streambestand): labproef, alleen voor bekijken en meten.

- Een bestandskiezer neemt een `.gds`-bestand; bij meerdere topcellen: `Enter the top cell to draw`.
- Elke laag en datatype wordt een tekenlaag (`GDS 1`, `GDS 2/5`); verwijzingen en arrays worden vlak geplaatst, in de gebruikerseenheid van het bestand (meestal micrometers). Eén ongedaan-maken-stap. Er wordt niets gesimuleerd of gecontroleerd, en het bestand wordt niet teruggeschreven.

### DIAGRAM

Aliassen: `TEXTDIAGRAM`, `T2D`. Een diagram uit tekst.

- Een kader neemt de tekst (of één regel met `;` tussen de instructies op de opdrachtregel): een Mermaid-stroomschema, een PlantUML-componentdiagram, D2 of een van-naar-lijst.
- `Specify the top left corner of the diagram`, dan `Specify the text height`.

Blokken en verbindingen zijn gewone objecten op laag `Diagram`, en worden geselecteerd wanneer het eindigt. Eén ongedaan-maken-stap. Zie [Een diagram uit tekst tekenen](topic:text-to-diagram).

### OLELIST

Aliassen: `OLES`. De OLE-objecten die een DWG bevat en die CadCraft niet zelf kan plaatsen.

- Toont elk: nummer, soort, grootte, of het een afbeelding heeft bewaard.
- `Enter an option [Place/eXit] <eXit>`: Place vraagt het nummer, de linkeronderhoek en de breedte, en tekent een kader met de afbeelding. Eén ongedaan-maken-stap; het bewaarde object verandert niet. Zie [Afbeeldingen](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliassen: `SHX`. Uw eigen SHX-lettertypen.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Map}} leest elk `.shx`-bestand in een map (CadCraft Studio; bij elke start opnieuw), {{ui:Bestanden}} neemt gekozen bestanden (de browser), {{ui:Omkeren}} legt de letters van één lettertype van achteren naar voren. Tekststijlen die een geladen lettertype noemen, tekenen ermee. Zie [Tekst tekenen in uw eigen SHX-lettertypen](topic:shx-fonts).

### LIMITS

Hoe groot de tekening bedoeld is.

- `Specify lower left corner or [ON/OFF] <current>`: een punt, `ON` of `OFF`.
- `Specify upper right corner <current>`.

Het raster vult de grenzen, {{cmd:ZOOM}} All toont ze, en met de grenzen AAN wordt een punt erbuiten geweigerd (`**Outside limits`). Eén ongedaan-maken-stap; bewaard in DWG en DXF. Zie [De grenzen van de tekening instellen](topic:drawing-limits).

### AUNITS

Aliassen: `ANGUNITS`. Hoe hoeken worden getoond en getypt.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, of voor de twee andere `Enter precision` (0 graden, 2 minuten, 4 seconden, 5 tot 8 decimalen van een seconde).

Eén ongedaan-maken-stap; bewaard in DWG en DXF. Hetzelfde als {{ui:Hoeknotatie}} in {{ui:Huidige instellingen}}. Zie [Richtingen en hoeken typen en tonen](topic:bearings-and-angles).

### APPLOAD

Aliassen: `AP`; of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Applicatie laden…}}. Het dialoogvenster {{ui:Applicaties laden}}: laad `.lsp`-routines en `.dcl`-dialoogbestanden, ontlaad ze, laad ze opnieuw uit de geschiedenis, en de Opstartsuite. De opdrachten `(defun c:NAME …)` van een routine werken daarna als elke andere. Zie [Applicaties laden](topic:load-applications) en [LISP-routines uitvoeren](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Aliassen bewerken…}}) opent uw aliasbestand (`ALIAS, *COMMAND`-regels); {{ui:Opslaan}} past het toe. {{cmd:REINIT}} past het opnieuw toe. Zie [Opdrachtaliassen bewerken](topic:command-aliases).

### OPTIONKEYS

Aliassen: `OPTKEYS`; of {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Optieletters}} › {{ui:Bewerken…}}. Opent uw bestand met optieletters (`COMMAND.OPTION, LETTERS`-regels, zoals `ARRAY.PO, P`); {{ui:Opslaan}} past het toe en {{cmd:REINIT}} past het opnieuw toe. Zie [Geef opdrachtopties uw eigen letters](topic:option-letters).

### LISPEDIT

Aliassen: `VLIDE`; of {{ui:Weergave}} › {{ui:Meer}} › {{ui:LISP-editor}}. Opent de LISP-editor, een venster dat naast de tekening open blijft.

- De tekst: regelnummers, het tegenhaakje van het haakje bij de cursor gemarkeerd (rood als het er geen heeft), {{key:Enter}} laat de nieuwe regel inspringen onder het open haakje, {{key:Tab}} typt twee spaties, {{key:Esc}} verlaat de tekst.
- {{ui:Laden in de tekening}} ({{key:Ctrl+Shift+Enter}}): leest elk formulier, zoals {{cmd:APPLOAD}} het bestand doet, en maakt zijn `c:`-opdrachten. Het bestand verschijnt in de lijst van {{cmd:APPLOAD}}.
- {{ui:Selectie uitvoeren}} ({{key:Ctrl+Enter}}): evalueert de geselecteerde formulieren, of het formulier waarin de cursor staat.
- {{ui:Stop}}: beëindigt een lopende routine.
- {{ui:Console}}: wat de routine heeft afgedrukt, en elke fout met zijn regel; klik op een fout om er naartoe te gaan. De tekst wordt per formulier op het hoogste niveau uitgevoerd, dus de regel is die van het formulier, of binnen het formulier de regel die de functie aanroept die de fout noemt.
- {{ui:Nieuw}}, {{ui:Openen}}, {{ui:Opslaan}} ({{key:Ctrl+S}}): een `.lsp`-bestand. De tekst wordt ook in deze browser bewaard, dus het sluiten van het venster verliest hem niet.
- Naast de tekst: de functies die de routine definieert, de functies die ze aanroept die deze LISP nog niet heeft, de functies die ze aanroept die niet in de routine zelf en ook niet ingebouwd zijn, en de volledige lijsten van wat is ingebouwd en wat niet.

Een tekst met een haakje dat nooit wordt gesloten, of een tekenreeks die nooit eindigt, wordt niet uitgevoerd: de regel wordt genoemd. Er is geen stap-voor-stap-debugger, geen breekpunten en geen controlevenster. Zie [LISP-routines uitvoeren](topic:run-lisp).

### HELP

Aliassen: `?`. Drukt elke opdracht, zijn aliassen en een beschrijving van één regel af in de geschiedenis van de opdrachtregel. Het opent deze help niet: druk op {{key:F1}} of klik op {{ui:Help}} daarvoor.

## Vraag om objecten te selecteren

Bij elke vraag `Select objects`: klik op objecten, teken vensters (van links naar rechts) en kruisvensters (van rechts naar links) met twee klikken, of druk en sleep een lasso ({{key:Space}} tijdens het slepen: venster, kruisvenster, hekje), {{key:Shift}}+klik om te verwijderen, en druk op {{key:Enter}} om af te ronden. U kunt ook `ALL` typen (alles), `L` (het laatste object), `P` (Previous: wat de laatste opdracht gebruikte), `F` (Fence: objecten die een lijn van punten kruist; `U` neemt een punt terug), `W` (Window), `C` (Crossing), `R` (modus Verwijderen: aanwijzingen nemen objecten weg; de vraag luidt `Remove objects`) en `A` (Add again). `?` toont ze. Ze worden niet in de vraag getoond. {{key:Tab}} over overlappende objecten markeert het volgende; klik om het te kiezen. Zie [Objecten selecteren](topic:select-objects).

### ACCESS

Alias: `AX`. Tekenen zonder zicht. {{cmd:ACCESS}} zet Toegang aan of uit (`On`, `Off`) en schakelt snapgeluiden (`Sound`) en spraakopdrachten (`Voice`) om; het zegt eerst de stand. Met Toegang aan wordt elke opdracht en elk resultaat via uw schermlezer voorgelezen en heeft het tekengebied een toetsenbordcursor. Het help-onderwerp "Tekenen zonder zicht" beschrijft de toetsen.

### DESCRIBE

Alias: `DESC`. Zegt wat de tekening bevat: hoeveel objecten, van welke soort, hoe groot, hoeveel lagen, wat is geselecteerd. Leest alleen; wijzigt niets.

### WHEREAMI

Alias: `WHERE`. Zegt waar de cursor staat, in de eenheden van de tekening.

### NEARBY

Zegt wat er dicht bij de cursor ligt, het dichtstbijzijnde eerst, elk met zijn afstand en de kant waar het ligt.

### SAYSEL

Zegt wat is geselecteerd, één zin per object (lengte van een lijn, uiteinden en hoek; straal en middelpunt van een cirkel; tekst zoals ze is geschreven).

### VOICE

Spraakopdrachten aan of uit zetten. Ze worden op deze computer herkend; waar de browser dat niet kan, blijft spraak uit tenzij u de online dienst van de browser kiest in Instellingen.

### TOUCHCROSSHAIR

Alias: `TCX`. Het verschoven kruisdraad voor tekenen met een vinger, zodat de vingertop het punt dat u kiest niet bedekt. Terwijl het aan staat, kiest één vinger op de tekening niet: hij verplaatst een kruisdraad dat boven de vinger en opzij ervan staat. Objectsnaps en tracering volgen het kruisdraad. De vinger optillen kiest niets en laat het kruisdraad waar het is. Om te kiezen, drukt u op de knop {{ui:Klik}} in de hoek van de tekening, of tikt u met een tweede vinger ergens op de tekening. Houd {{ui:Klik}} ingedrukt terwijl u de andere vinger beweegt om te slepen (een selectievenster, een lasso, een grip). Een vinger die stil wordt ingedrukt gehouden, of de knop {{ui:Enter}}, is Enter. Twee vingers verschuiven en zoomen zoals voorheen. Dicht bij de onderrand en de verre zijrand trekt het kruisdraad naar de vinger toe, zodat elk deel van de tekening bereikbaar is. Een pen en een muis kiezen altijd rechtstreeks.

{{cmd:TOUCHCROSSHAIR}} zegt de stand en vraagt `ON`, `OFF`, `Auto` (alleen aan waar een vinger de enige aanwijzer is, dus uit op een computer met een muis), `Distance` (hoe ver het kruisdraad van de vinger zit, 24 tot 240 pixels) of `Side` (`Left`: omhoog en naar links, voor de rechterhand; `Right` voor de linkerhand; de knoppen verhuizen naar de andere hoek). Dezelfde keuzes staan in Instellingen › CadCraft, en op een apparaat met een aanraakscherm heeft de statusbalk een schakelaar {{ui:Verschoven kruisdraad}}. De keuzes worden in deze browser bewaard.

### WHOHAS

Zegt wie een tekening open heeft. In CadCraft Studio op een computer schrijft het openen van een DWG of DXF een klein vergrendelbestand ernaast (`Plan.dwg.cclock`: wie, sinds wanneer, welke versie), ververst het elke minuut zolang de tekening open is, en verwijdert het wanneer de tekening wordt gesloten. Een tekening openen die iemand anders al open heeft, zegt wie en sinds wanneer, en biedt {{ui:Alleen-lezen openen}} aan (Opslaan vraagt dan om een nieuwe naam), {{ui:Toch openen}} (de andere persoon hoort dat bij de volgende verversing) of {{ui:Annuleren}}. Opslaan over een bestand dat iemand anders open heeft, vraagt eerst. Een vergrendeling die vijf minuten niet is ververst, heet verouderd: de andere kopie is gesloten zonder op te slaan, of de computer slaapt.

{{cmd:WHOHAS}} vraagt `Current` (de geopende tekening), `File` (kies er één), `FOlder` (kies een map: elke tekening erin die ergens open is, wordt getoond), `Path` (typ een volledig pad) of `Name` (de naam die anderen zien; uw accountnaam wanneer u bent aangemeld). Studio kan alleen mappen bereiken die u hebt gekozen: voor een tekening die uit een map is geopend die nooit is gekozen, zegt het één keer dat het de tekening niet als open kan noteren; `FOlder` kiest de map, en vergrendelingen werken daar vanaf dan. De vergrendeling is een notitie voor mensen, geen barrière: een ander programma kan het bestand nog steeds schrijven. In een browser zijn er geen mappen om in te kijken, en de opdracht zegt dat.

### OVERKILL

Verwijdert dubbele objecten en ordent overlappende lijnen en bogen, voor tekeningen die vol dubbele lijnen binnenkomen. `Select objects to clean up`, {{key:Enter}}, dan nogmaals {{key:Enter}} om op te ruimen met de getoonde instellingen, of een ervan eerst te wijzigen:

- `Tolerance`: hoe dicht twee coördinaten bij elkaar moeten liggen om als gelijk te gelden (0,000001 om mee te beginnen; 0 betekent precies gelijk).
- `Ignore`: eigenschappen die mogen verschillen tussen twee objecten die verder gelijk zijn. Typ een naam om hem te wisselen: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, of `None` / `All`. {{key:Enter}} als u klaar bent.
- `Overlap`: aan of uit. Aan: lijnen op één rechte lijn die elkaar overlappen worden één lijn (een lijn die in een andere ligt, wordt gewoon verwijderd), en bogen op één cirkel die elkaar overlappen worden één boog; bogen die een volledige omwenteling sluiten, worden een cirkel, en een boog die op een cirkel ligt, wordt verwijderd.
- `Ends`: aan of uit. Aan: lijnen op één rechte lijn en bogen op één cirkel die alleen uiteinde aan uiteinde raken, worden één stuk.

Elk type object wordt op dubbelen gecontroleerd: twee objecten zijn dubbel wanneer hun geometrie binnen de tolerantie gelijk is en hun laag, kleur, lijntype, lijntypeschaal, lijndikte, dikte, transparantie en hoogte overeenkomen (min de eigenschappen die u negeert). Lijnen en open polylijnen komen ook overeen wanneer ze de andere kant op zijn getekend. Het eerste object in de tekenvolgorde blijft en behoudt zijn eigen eigenschappen. De opdracht meldt hoeveel objecten zijn gecontroleerd en verwijderd: dubbelen, samengevoegde overlappende stukken, stukken die uiteinde aan uiteinde zijn verbonden. Eén {{cmd:UNDO}} haalt alles terug. De instellingen blijven gelden tot u het tekenvenster sluit.

Het laat met rust: objecten op vergrendelde lagen en verborgen objecten. Het voegt geen lijnen met een hoogte (Z) samen (exacte dubbelen ervan gaan wel weg), en het raakt geen segmenten binnen een polylijn aan (ze worden niet uitgedund), geen lijn die op een segment van een polylijn ligt, en geen gesloten polylijn die de andere kant op is getekend.

### DRAWORDER

Verandert welke objecten vooraan worden getekend. `Select objects to re-order`, {{key:Enter}}, dan `Above objects`, `Under objects`, `Front` of `Back` ({{key:Enter}} = `Back`). `Above objects` en `Under objects` vragen om de referentieobjecten: de selectie komt direct voor het voorste ervan, of direct achter het achterste. De geselecteerde objecten behouden hun onderlinge volgorde. Eén ongedaan-maken-stap. De volgorde wordt met de tekening bewaard in DWG en DXF, waar het de volgorde is waarin de objecten worden geschreven.

Op het scherm wordt elk object getekend in de volgorde van de tekening, zoals andere programma's die het bestand openen het tekenen: een volle arcering, een brede polylijn of een tekstmasker bedekt de lijnen en tekst erachter, en wat ervoor staat, bedekt het. Waar een lijn een tekst kruist, zijn beide zichtbaar. Afbeeldingen en bijgevoegde PDF-pagina's blijven onder de lijnwerk. In een zeer grote tekening waarin vullingen en lijnwerk meer dan 256 keer overlappen en wisselen, behouden de eerste 256 hun volgorde, en worden de rest van de vullingen onder de lijnen getekend, zodat het opnieuw tekenen snel blijft.

### TEXTTOFRONT

Brengt tekst, maten en leiders voor alles wat er in de open ruimte verder is: `Text`, `Dimensions`, `Leaders` of `All` ({{key:Enter}} = `All`). Eén ongedaan-maken-stap. Het zegt dat wanneer er niets is, of wanneer ze al vooraan staan.

### HATCHTOBACK

Stuurt elke arcering van de open ruimte achter al het andere, zodat vullingen geen lijnwerk en tekst meer bedekken in het opgeslagen bestand. Geen vragen. Eén ongedaan-maken-stap.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Toont alleen de geselecteerde objecten: al het andere in de open ruimte verdwijnt uit het zicht tot {{cmd:UNISOLATEOBJECTS}}. In tegenstelling tot {{cmd:LAYISO}} werkt het op de objecten die u kiest, wat hun lagen ook zijn, en het verandert geen laag. Verborgen objecten worden niet getekend, niet aangewezen, niet gesnapt, niet naar gezoomd en niet geplot, en opdrachten die `ALL` nemen slaan ze over. Wat u tekent terwijl objecten geïsoleerd zijn, wordt gewoon getoond.

Dit geldt alleen voor de sessie: er wordt niets ervan met de tekening bewaard, het is geen ongedaan-maken-stap, en het opnieuw openen van de tekening toont alles. Zolang objecten verborgen zijn, toont de statusbalk een knop met hun aantal; klik erop om ze weer te tonen.

### HIDEOBJECTS

Verbergt de geselecteerde objecten tot {{cmd:UNISOLATEOBJECTS}}. Dezelfde regels als {{cmd:ISOLATEOBJECTS}}: alleen voor de sessie, niet bewaard, geen ongedaan-maken-stap.

### UNISOLATEOBJECTS

Aliassen: `UNISOLATE`, `UNHIDE`. Toont elk object dat door {{cmd:ISOLATEOBJECTS}} of {{cmd:HIDEOBJECTS}} verborgen is weer, en zegt hoeveel er terugkwamen.

### LAYLOCKFADE

Stelt in hoe objecten op vergrendelde lagen eruitzien en of een klik ze bereikt. Het zegt de huidige stand en neemt daarna:

- een getal van 0 tot 90: de mate van vervaging in procent (50 om mee te beginnen). 0 zet de vervaging uit.
- `ON` of `OFF`: vervaging aan of uit, de mate blijft behouden.
- `Pick`, dan `Yes` of `No`: mag een klik objecten op vergrendelde lagen selecteren terwijl geen opdracht loopt? `No` (de standaard): ze kunnen helemaal niet worden aangewezen. `Yes`: een klik of venster selecteert ze zodat {{ui:Eigenschappen}} ze kan tonen; ze kunnen nog steeds niet worden gewijzigd, en de eigen `Select objects` van een opdracht neemt ze nooit.

Objectsnaps vinden objecten op vergrendelde lagen in beide gevallen. Plots worden nooit vervaagd. Beide instellingen zijn van u, niet van de tekening, en staan ook in {{ui:Instellingen}} onder {{ui:Vergrendelde lagen}}.

### BURST

Ontbindt blokverwijzingen en behoudt wat hun attributen zeggen. `Select block references to burst`, {{key:Enter}}: elke verwijzing wordt vervangen door de objecten van het blok, en de waarde van elk zichtbaar attribuut wordt gewone tekst op de eigen laag van dat attribuut (een attribuut op laag 0 komt op de laag van de verwijzing, zoals de andere objecten van het blok op laag 0). Onzichtbare attributen vervallen. Een blok binnen het blok blijft een blokverwijzing. Eén ongedaan-maken-stap; het meldt de verbrande verwijzingen en de attribuutwaarden die tekst zijn geworden.

Het weigert een gekoppelde tekening bij naam (eerst binden, of kopiëren met {{cmd:NCOPY}}), en laat andere geselecteerde objecten ongemoeid. Voor blokverwijzingen geeft {{cmd:EXPLODE}} dezelfde objecten; {{cmd:BURST}} neemt alleen blokverwijzingen en telt de attribuuttekst.

### TXT2MTXT

Alias: `T2M`. Voegt enkelregelige teksten samen tot één alineatekst. `Select single-line text to join`, {{key:Enter}}, dan `Paragraph` (de regels lopen in elkaar en breken op de breedte van de breedste regel) of `Lines` (elke tekst blijft een eigen regel); {{key:Enter}} neemt de laatst gebruikte. De regels worden geordend van boven naar beneden, en dan van links naar rechts, langs de richting van de bovenste tekst. De alinea hangt aan de linkerbovenhoek van de bovenste tekst en neemt zijn hoogte, rotatie, stijl, laag en kleur over. Eén ongedaan-maken-stap.

Tekst die al alineatekst is, lege tekst en andere objecten in de selectie blijven ongemoeid, en de opdracht zegt hoeveel.

### NCOPY

Kopieert objecten uit een blokverwijzing of een gekoppelde tekening naar de tekening, zonder iets te ontbinden. `Pick an object inside a block reference or a linked drawing`: het object dat het dichtst bij de aanwijzing ligt, wordt gekopieerd waar het zichtbaar is, hoe diep het ook in blokken zit; wijs er meer aan, dan {{key:Enter}}. Dan `Base point to move the copies`: {{key:Enter}} laat ze op hun plaats, of geef een basispunt en een tweede punt. De hele opdracht is één ongedaan-maken-stap.

Een kopie neemt de laag over waarop ze zichtbaar is: een object op laag 0 binnen een blok komt op de laag van de verwijzing waarin het zat, en een ByBlock-kleur wordt de kleur van die verwijzing. Uit een gekoppelde tekening wordt laag `Plan|Walls` `Plan$0$Walls` (de naam die de koppeling eraan geeft), gemaakt met de kleur, het lijntype en de lijndikte van de gekoppelde laag. De waarde van een attribuut wordt als tekst gekopieerd. Blokverwijzingen op vergrendelde lagen kunnen niet worden aangewezen.

### FLATTEN

Zet de hoogte (Z) en de dikte van de geselecteerde objecten op 0. `Select objects to flatten`, {{key:Enter}}. Het vlakt ook de objecten binnen de blokdefinities die de selectie gebruikt (en de blokken binnen die), zodat elke verwijzing naar die blokken verandert; gekoppelde tekeningen blijven zoals ze zijn. Eén ongedaan-maken-stap; het meldt hoeveel objecten veranderden, en zegt het wanneer er geen een hoogte of dikte had.

Wat CadCraft van de derde dimensie in een 2D-tekening bewaart: een hoogte op cirkels, bogen, ellipsen, punten, tekst, blokverwijzingen, arceringen, leiders en polylijnen (hun hoogteligging), een hoogte aan elk uiteinde van een lijn, en een dikte op lijnen, cirkels, bogen, polylijnen, punten en tekst, zoals het bestand ze had. {{cmd:FLATTEN}} wist precies die. Het raakt het 3D-model op het 3D-tabblad niet aan, noch 3D-vlakken of volumes; en een object dat in een gekanteld vlak was getekend, werd al in het tekenvlak gebracht toen het bestand werd geopend.

### BREAKLINE

Tekent een lijn met een breeksymbool, voor een weergave die is ingekort. Het zegt de huidige grootte en verlenging, dan `First point of the break line` (of `Size` / `Extension` om ze eerst te wijzigen), `Second point`, en `Where the break symbol sits`: klik langs de lijn, of {{key:Enter}} voor het midden. Het resultaat is één polylijn op de actieve laag: de lijn, die elk punt met de verlenging voorbijloopt, met een Z-vormige streep die even hoog is als de grootte en half zo lang.

`Size` en `Extension` worden als uw instellingen onthouden (de grootte begint op twee keer de teksthoogte van de maat maal de maatschaal; de verlenging op de helft van de grootte). {{key:Enter}} herhaalt de opdracht.

### AUDIT

Controleert de geopende tekening op beschadigingen en herstelt ze. {{cmd:AUDIT}} kijkt naar elk object in het model, op de bladen en binnen blokken, en naar de lagentabel, en somt wat het vindt op per soort:

- getallen die niet eindig zijn of absurd groot zijn;
- objecten zonder grootte: een lijn zonder lengte, een cirkel zonder straal, een polylijn met één punt, tekst zonder letters of hoogte, een blokverwijzing met schaal nul;
- objecten op een laag die de tekening niet heeft; verwijzingen naar een blok dat er niet is; namen van tekst- en maatvoeringsstijlen en lijntypen die niet in de tekening staan;
- blokken die zichzelf bevatten, rechtstreeks of via andere blokken;
- objecten die een id, een sleutel of een bestandsverwijzing delen;
- maten zonder de punten waarvan ze gemeten worden, en arceringen waarvan de begrenzing geen gesloten omtrek is.

Dan vraagt het `Fix them? [Yes/No]`. `No` verandert niets. `Yes` repareert alles in één ongedaan-maken-stap: wat niet getekend kan worden, wordt verwijderd (slechte getallen, geen grootte, ontbrekend blok, gebroken maat, arcering zonder bruikbare begrenzing, de verwijzing die een cirkel van blokken sluit); een ontbrekende laag wordt gemaakt; onbekende namen van stijlen en lijntypen gaan terug naar de standaard; een gedeelde sleutel wordt vervangen. Het meldt hoeveel objecten zijn verwijderd en hoeveel er zijn hersteld. Dezelfde bevindingen verschijnen in het paneel Problemen, elk met zijn eigen {{ui:Repareren}}.

Het weigert niets, maar het controleert alleen wat CadCraft zelf tekent: gegevens die voor andere programma's worden bewaard (3D-volumes, OLE-objecten) worden niet geopend.

### RECOVER

Opent een beschadigd DXF- of DWG-bestand. {{cmd:RECOVER}} vraagt om het bestand, leest wat gelezen kan worden in plaats van het bestand te weigeren, somt op wat is overgeslagen of aangenomen, en controleert en herstelt daarna de tekening zoals {{cmd:AUDIT}} doet met `Yes`.

- DXF: regels die geen deel zijn van een code- en waardepaar worden overgeslagen tot de paren weer kloppen; een sectie zonder einde wordt gesloten; een bestand dat is afgebroken, wordt gelezen tot het afbreekpunt; een binair DXF dat is afgebroken, wordt gelezen tot de laatste hele waarde. Wanneer een sectie, een blok of een object nog steeds niet gelezen kan worden, wordt het weggelaten en bij naam genoemd, en gaat het lezen verder erna.
- DWG: objecten die hun controles niet halen of niet gedecodeerd kunnen worden, worden weggelaten, en een verloren objectenlijst wordt herbouwd door de objectgegevens te doorlopen.

Het bestand op de schijf verandert niet. De hersteld tekening opent als niet-opgeslagen: sla haar op onder een nieuwe naam. Een bestand waaruit helemaal niets gelezen kan worden, wordt geweigerd, met de reden.

### LEGACYTEXT

Zet tekst die is getypt met oude 8-bits Vietnamese lettertypen om naar Unicode. Korte namen `TEXTTOUNICODE` en `VNTEXT`.

Oudere Vietnamese tekeningen bevatten hun tekst als westerse tekens die alleen het lettertype in Vietnamees verandert: TCVN3-tekst in de ABC-lettertypen (`.VnTime`, `.VnArial`, en de hoofdletterlettertypen waarvan de namen op `H` eindigen), en VNI-tekst in de VNI-lettertypen (`VNI-Times`). CadCraft toont zulke tekst zoals ze gelezen wordt zodra de tekening open is, op basis van het lettertype van de tekststijl, van het object, of van een stuk binnen alineatekst; het bestand bevat nog steeds de oude tekens.

{{cmd:LEGACYTEXT}} zegt hoeveel teksten het in elke codering vond en vraagt `Convert … to Unicode?`. `Yes` herschrijft elke een (model, bladen, blokken, attribuutwaarden en -definities) en geeft de tekststijlen een Unicode-lettertype (Times New Roman, Arial of Courier New, naar soort van het oude lettertype), in één ongedaan-maken-stap. Opmaak binnen alineatekst blijft behouden.

Wanneer geen tekst een bekend lettertype gebruikt (een stijl die zijn lettertypenaam kwijt is), vraagt het `Read selected texts as [Tcvn3/Vni/None]`: kies de codering en selecteer de teksten. Tekst die al Unicode is, blijft ongemoeid. Overschrijvingen van maattekst en multileidertekst worden niet omgezet.
