---
title: Opdrachtenreferentie
summary: Elke opdracht in de CadCraft-tekenapp, met de aliassen, de vragen die hij stelt, de opties en de standaardwaarden.
keywords: opdrachten, aliassen, opdrachtenlijst, oppervlakte, omtrek, measuregeom, lijn, pline, cirkel, boog, bijsnijden, offset, dimlinear, blok, invoegen, indeling, plotten, zoomen, help, copyclip, cutclip, pasteclip, pasteorig, copybase, dupliceren, selectall
from: 7db2646b
---

Typ een opdrachtnaam of een alias en druk op {{key:Enter}} of {{key:Space}}. Hoofdletters maken niet uit, en een voorloop `_`, `-`, `.` of `'` wordt genegeerd. Typ `HELP` (of `?`) om in de geschiedenis van de opdrachtregel een korte lijst van elke opdracht af te drukken; druk op {{key:F1}} voor deze help.

Zo leest u de prompts: opties staan tussen vierkante haken, en u kiest er één door de hoofdletters ervan te typen (`D` voor Diameter). Een standaardwaarde staat tussen punthaken; druk op {{key:Enter}} om die te accepteren. Waar een punt wordt gevraagd, kunt u klikken of elk van de indelingen typen uit [Coördinaten en afstand invoeren](topic:coordinate-entry). Waar een afstand wordt gevraagd, kunt u een getal typen of twee punten aanklikken.

Drukken op {{key:Enter}} waar een punt of object vereist is en er geen standaardwaarde is, beëindigt de opdracht. {{key:Esc}} annuleert hem. Wat een opdracht doet, is één stap ongedaan maken.

## Tekenen

### LINE

Aliassen: `L`. Rechte segmenten, elk een eigen object.

- `Geef het eerste punt op` (Enter: begin bij het laatste punt dat u hebt opgegeven)
- `Geef het volgende punt op [Ongedaan maken (U)]`, herhaald. Na twee segmenten: `[Ongedaan maken (U)/Sluiten (C)]`.
- `U` neemt het laatste segment terug, `C` sluit naar het eerste punt en beëindigt. Enter beëindigt.

### PLINE

Aliassen: `PL`. Eén polylijn van lijn- en boogsegmenten.

- `Geef het beginpunt op`
- `Geef het volgende punt op [Boog/Sluiten (C)/Ongedaan maken (U)]` (Sluiten zodra er twee segmenten zijn)
- `A` schakelt over op bogen: `Geef het eindpunt van de boog op [Lijn/Sluiten (C)/Ongedaan maken (U)]`. Elke boog sluit raakvlak aan op het segment ervoor. `L` gaat terug naar lijnen, `CL` sluit met een boog.
- Enter beëindigt; de polylijn blijft open.

### CIRCLE

Aliassen: `C`.

- `Geef het middelpunt van de cirkel op [3P/2P/Ttr (raak raak straal)]`
- `Geef de straal van de cirkel op [Diameter] <laatste straal>`; `D` vraagt `Geef de diameter van de cirkel op`.
- `2P`: de twee uiteinden van een diameter. `3P`: drie punten op de cirkel.
- `T` (ook de opdracht `TTR`, en {{ui:Tekenen}} › {{ui:Meer}} › {{ui:Cirkel: raak, raak, straal}}): `Geef het punt op het object voor de eerste raaklijn van de cirkel op`, daarna de tweede, dan de straal (Enter: de laatste). De cirkel raakt beide objecten (lijnen, bogen, cirkels, segmenten van polylijnen, ook binnen blokken); van de cirkels die dat doen, is het de cirkel die het dichtst bij uw aanwijzingen raakt. "Cirkel bestaat niet" als er geen past.
- `TTT` (of {{ui:Tekenen}} › {{ui:Meer}} › {{ui:Cirkel: raak, raak, raak}}): drie objecten; de cirkel die alle drie raakt, het dichtst bij uw aanwijzingen (drie lijnen geven de binnenste cirkel of een buitenste, afhankelijk van waar u aanwijst).

### ARC

Aliassen: `A`.

- `Geef het beginpunt van de boog op [Midden]`, `Geef het tweede punt van de boog op`, `Geef het eindpunt van de boog op`: een boog door drie punten.
- `C`: `Geef het middelpunt van de boog op`, `Geef het beginpunt van de boog op`, `Geef het eindpunt van de boog op`. De boog loopt tegen de klok in van begin naar eind.

### RECTANG

Aliassen: `REC`, `RECTANGLE`. Een gesloten polylijn.

- `Geef het eerste hoekpunt op`, `Geef het andere hoekpunt op`. Typ `@breedte,hoogte` voor de tweede hoek.

### POLYGON

Aliassen: `POL`. Een regelmatige veelhoek als gesloten polylijn.

- `Voer het aantal zijden in <4>` (3 tot 1024)
- `Geef het middelpunt van de veelhoek op`
- `Voer een optie in [Ingeschreven in cirkel/Omgeschreven om cirkel] <I>`
- `Geef de straal van de cirkel op`: klik of typ een punt; de afstand bepaalt de grootte en de richting draait de veelhoek.

### ELLIPSE

Aliassen: `EL`.

- `Geef het eindpunt van de as van de ellips op [Midden]`, `Geef het andere eindpunt van de as op`, `Geef de afstand tot de andere as op`
- `C`: `Geef het middelpunt van de ellips op`, `Geef het eindpunt van de as op`, daarna de afstand tot de andere as.
- `I` (`Isocirkel`, alleen terwijl {{cmd:ISODRAFT}} aan staat): middelpunt, daarna straal of `Diameter`: de ellips die een cirkel toont op het huidige isometrische vlak.

### HATCH

Aliassen: `H`, `BH`, `BHATCH`; of {{ui:Arcering}} op de werkbalk. Drukt eerst het huidige patroon, de schaal en de hoek af.

- `Klik op een binnenpunt [Objecten selecteren/Patroon/Schaal/Hoek]`, herhaald (`Ongedaan maken` zodra er een gebied is): elke klik voegt het gesloten gebied eromheen toe, met de gesloten vormen erin als eilanden. Enter maakt één arcering van al die gebieden.
- `S`: `Selecteer gesloten objecten` (gesloten polylijnen, cirkels, gesloten ellipsen).
- `P`: `Voer een patroonnaam in, SOLID, of ? voor de lijst <huidig>`. `SC`: `Geef de patroonschaal op`. `A`: `Geef de patrooihoek op`.
- `G` (Verloop): de vulling is een verloop in plaats van een patroon. Zie {{cmd:GRADIENT}} voor de vragen daarvan.

Zie [Arcering en gevulde gebieden](topic:hatch).

### GRADIENT

Aliassen: `GD`. Vult een gebied met een verloop van één of twee kleuren. Het vraagt eerst het verloop en gaat dan verder zoals {{cmd:HATCH}} doet (`Klik op een binnenpunt`, `S` voor gesloten objecten, {{key:Enter}} om af te ronden).

- `Voer een verloopoptie in [Type/Eén kleur/TWee kleuren/Hoek/Gecentreerd/eXit] <X>`, herhaald; het toont het verloop zoals het er op dat moment uitziet.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, of een daarvan omgekeerd (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). De eerste letters zijn genoeg.
- `O`: één kleur, daarna de tint van 0 tot 1 (0 verduistert tot zwart, 0,5 is de kleur zelf, 1 tint tot wit). `TW`: de eerste en de tweede kleur. Een kleur is een getal van 1 tot 255, drie getallen zoals `255,128,0`, of `#rrggbb`.
- `A`: de hoek waaronder het verloop loopt. `C`: gecentreerd Ja of Nee (Nee verschuift het midden van het verloop naar één kant).
- Het weigert een kleur of type dat het niet kent, en een tint buiten 0 tot 1.

{{cmd:HATCHEDIT}} `G` en Eigenschappen (Verloop) wijzigen later een verloop, of maken elke arcering een verloop. Een verloop wordt op het scherm getekend en afgedrukt. DWG 2004 en later bewaren het als een echte verlooparcering; DXF 2000 en DWG 2000 bewaren het voor CadCraft, en andere programma's zien een effen vulling in de eerste kleur.

### HATCHGENERATEBOUNDARY

Aliassen: `HGB`. Maakt de grens opnieuw van een arcering die hem kwijt is. `Selecteer arceringen` (of selecteer ze eerst), daarna `Koppel elke arcering aan de nieuwe grens, zodat de arcering hem volgt? [Ja/Nee] <Ja>`.

- Elke lus van de arcering wordt een gesloten polylijn op de laag van de arcering; de nieuwe polylijnen blijven geselecteerd. Een gebogen rand komt terug als de korte rechte stukjes die de arcering houdt.
- Met Ja volgt de arcering zijn nieuwe grens, zoals een arcering die met {{cmd:HATCH}} is gemaakt. Eén stap ongedaan maken.
- Het zegt dat wanneer geen arcering was geselecteerd.

### POINT

Aliassen: `PO`; of {{ui:Tekenen}} › {{ui:Meer}} › {{ui:Punt}}. Puntobjecten, één per klik, tot Enter.

- `Geef een punt op`

### XLINE

Aliassen: `XL`; of {{ui:Tekenen}} › {{ui:Meer}} › {{ui:Hulplijn}}. Hulplijnen, aan beide kanten oneindig. Zie [Hulplijnen en stralen](topic:construction-lines).

- `Geef een punt op [Hor/Ver/Hoek/Bissectrice/Verschuiving]`, daarna `Geef een punt op waardoor de lijn gaat` voor elke lijn, tot Enter.
- `A`: `Voer de hoek van de hulplijn in [Referentie] <0>`; `R` vraagt eerst `Selecteer een lijnobject`.
- `B`: `Geef het hoekpunt van de hoek op`, `Geef het beginpunt van de hoek op`, daarna `Geef het eindpunt van de hoek op` voor elke lijn.
- `O`: `Geef de verschuivingsafstand op [Door] <Door>`, daarna `Selecteer een lijnobject` en `Geef de zijde op waarnaar verschoven moet worden` (of `Geef een punt op waardoor de lijn gaat`) voor elke lijn.

### RAY

Geen aliassen; of {{ui:Tekenen}} › {{ui:Meer}} › {{ui:Straal}}. `Geef het beginpunt op`, daarna `Geef een punt op waardoor de straal gaat` voor elke straal, tot Enter.

### TEXT

Aliassen: `DT`, `DTEXT`; of {{ui:Tekst}} op de werkbalk. Tekst op één regel; elke regel is een eigen object.

- `Geef het beginpunt van de tekst op [Uitlijnen]`
- `J`: `Voer een optie in [Links/Midden/Rechts/Halverwege/BL/MC] <L>`, daarna `Geef het invoegpunt van de tekst op`
- `Geef de hoogte op <huidige teksthoogte>`
- `Geef de rotatiehoek van de tekst op <0>`
- `Voer tekst in`, herhaald: elke Enter begint de volgende regel eronder. Enter op een lege regel beëindigt. {{key:Space}} typt hier een spatie.

### DIVIDE

Aliassen: `DIV`. {{cmd:DIVIDE}} zet markeringen op een lijn, boog, cirkel, polylijn, spline of ellips die hem in gelijke delen verdelen. Wijs het object aan, geef daarna het aantal delen op (2 tot 32767). Een open object krijgt één markering minder dan het aantal delen; een gesloten object krijgt ook een markering op zijn begin. Het object zelf wordt niet doorgesneden. De markeringen zijn punten; `Blok` vraagt in plaats daarvan om een blok van deze tekening en of het draait om het object te volgen. Lengten langs splines en ellipsen worden gemeten langs korte koorden. Het weigert tekst, arceringen en andere objecten zonder lengte.

### MEASURE

Aliassen: `ME`. {{cmd:MEASURE}} zet een markering op elke opgegeven lengte langs een lijn, boog, cirkel, polylijn, spline of ellips, vanaf het uiteinde dat het dichtst bij waar u aanwees ligt (een gesloten object: vanaf zijn begin). Geef de lengte op door hem te typen of met twee punten. Het verre einde van een open object krijgt geen markering. `Blok` plaatst een blok bij elke markering in plaats van een punt. Het weigert een lengte van 0, een lengte die langer is dan het object, en een lengte die meer dan 32767 markeringen zou maken.

### BOUNDARY

Aliassen: `BO`, `BPOLY`. {{cmd:BOUNDARY}} maakt een gesloten polylijn rond het gebied waarin het punt ligt dat u aanwijst, uit alle lijnen, bogen, cirkels, polylijnen en krommen die het op het scherm begrenzen. Stukken die op een boog of cirkel liggen, komen terug als bogensegmenten; stukken van ellipsen en splines komen terug als korte rechte segmenten. Met `Eilanden` aan (de startinstelling) krijgt elk gesloten gebied erbinnen ook een eigen polylijn. Blijf punten aanwijzen; Enter beëindigt. De objecten die het gebied begrenzen, blijven zoals ze zijn. Het zegt dat wanneer geen gesloten gebied het punt omvat.

### BLEND

{{cmd:BLEND}} tekent een spline tussen de uiteinden van twee open krommen. Wijs elke kromme nabij het uiteinde aan om te verbinden. `CONtinuity` kiest `Tangent` (de spline vertrekt en komt aan langs beide krommen) of `Smooth` (hij buigt ook zoals ze aan de uiteinden buigen); de keuze blijft voor de sessie bewaard. De twee krommen worden niet gewijzigd. Het weigert gesloten objecten en twee uiteinden die elkaar al raken.

### REGION

Aliassen: `REG`. {{cmd:REGION}} zet gesloten objecten om in regio's: vlakke gebieden die u kunt samenvoegen, snijden en meten. Selecteer cirkels, gesloten polylijnen, gesloten ellipsen of gesloten splines, of lijnen, bogen en open polylijnen die uiteinde aan uiteinde een lus sluiten; elke lus wordt één regio en vervangt de objecten waaruit hij kwam. Bogen blijven bogen; ellipsen en splines worden korte rechte segmenten. Wat niet gesloten is en geen lus sluit, blijft zoals het is, en het zegt hoeveel dat er zijn. In de tekening is een regio één of meer gesloten polylijnen die als niet-benoemde groep bij elkaar horen, zodat een klik de hele regio selecteert en een kopie een eigen regio is; andere programma's die het bestand openen, zien gesloten polylijnen.

Met regio's in de tekening werken {{cmd:UNION}}, {{cmd:SUBTRACT}} en {{cmd:INTERSECT}} op het 2D-tabblad op regio's: `UNION` voegt de geselecteerde regio's samen tot één (regio's die los van elkaar liggen worden één regio met meerdere contouren), `SUBTRACT` vraagt de regio's waarvan afgetrokken moet worden en daarna de regio's die worden afgetrokken (een gat blijft deel van de regio), `INTERSECT` behoudt het gebied dat ze allemaal delen. Elk toont het oppervlak van het resultaat en is één stap ongedaan maken. Ze weigeren wanneer er niets zou overblijven of niets gedeeld wordt. Op het 3D-tabblad, en in een tekening zonder regio's, werken dezelfde opdrachten op volumes zoals voorheen.

## Wijzigen

### MTEXT

Aliassen: `MT`, `T`; of {{ui:Alinea}} op de werkbalk. Alineatekst die op een breedte afbreekt, op de plek getypt.

- `Geef het eerste hoekpunt op`
- `Geef het tegenoverliggende hoekpunt op [Hoogte/Uitlijnen/Regelafstand/Rotatie/Breedte]`: de breedte over de twee hoeken is waar de tekst afbreekt. `H` vraagt `Geef de hoogte op`, `J` `Voer de uitlijning in [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Voer de factor voor de regelafstand in (0,25 tot 4)`, `R` `Geef de rotatiehoek op`, `W` `Geef de breedte op (0 voor geen afbreking)` en slaat het tweede hoekpunt over.
- Daarna opent zich een vak op de tekening: typ, {{key:Enter}} voor een nieuwe alinea, {{key:Mod+Enter}} of een klik buiten het vak om af te ronden, {{key:Esc}} om te annuleren. De balk ervan stelt hoogte, regelafstand, breedte en uitlijning in. Zie [Tekst en labels toevoegen](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliassen: `ED`, `DDEDIT`; of dubbelklik op een tekst. `Selecteer een tekst om te bewerken`, herhaald tot {{key:Enter}}: elke opent in hetzelfde vak. Gestart op een geselecteerde of dubbelgeklikte tekst, bewerkt hij die en eindigt.

### ERASE

Aliassen: `E`, `DELETE`; of druk op {{key:Delete}} met geselecteerde objecten.

- `Selecteer objecten` (overgeslagen wanneer objecten al geselecteerd zijn)

### MOVE

Aliassen: `M`.

- `Selecteer objecten`
- `Geef het basispunt op [Verplaatsing]`, `Geef het tweede punt op`
- `D`: `Geef de verplaatsing op`, getypt als `dx,dy`.

### COPY

Aliassen: `CO`, `CP`. Kopieën zo vaak als u punten geeft.

`Matrix` bij de prompt voor het tweede punt maakt in één keer een rij: geef het aantal items op (het origineel telt mee als één), daarna het punt waar de eerste kopie komt; de andere volgen met dezelfde tussenruimte. `Passend` maakt dat punt in plaats daarvan de plek van de laatste kopie, met de andere er gelijkmatig tussen.

- `Selecteer objecten`
- `Geef het basispunt op [Verplaatsing]`
- `Geef het tweede punt op [Ongedaan maken (U)]`, herhaald tot Enter. `U` neemt de laatste kopie terug.

### ROTATE

Aliassen: `RO`.

- `Selecteer objecten`, `Geef het basispunt op`
- `Geef de rotatiehoek op <laatste hoek>`: in graden, positief tegen de klok in; of klik een punt om ernaartoe te draaien.

### SCALE

Aliassen: `SC`.

- `Selecteer objecten`, `Geef het basispunt op`
- `Geef de schaalfactor op`: typ een factor zoals `0.5` of `2`. Een aangeklikt punt geeft zijn afstand tot het basispunt als factor.

### MIRROR

Aliassen: `MI`.

- `Selecteer objecten`
- `Geef het eerste punt van de spiegellijn op`, `Geef het tweede punt van de spiegellijn op`
- `Brongeobjecten wissen? [Ja/Nee] <N>`

### ALIGN

Aliassen: `AL`; of {{ui:Wijzigen}} › {{ui:Meer}} › {{ui:Uitlijnen}}.

- `Selecteer objecten`
- `Geef het eerste bronpunt op`, `Geef het eerste doelpunt op`
- `Geef het tweede bronpunt op (Enter om door te gaan)`, `Geef het tweede doelpunt op`
- `Geef het derde bronpunt op (Enter om door te gaan)`, `Geef het derde doelpunt op`
- Bij twee paren: `Objecten schalen op basis van uitlijningspunten? [Ja/Nee] <N>`

Zie [Objecten uitlijnen](topic:modify-objects#align-objects).

### ALIGNTO

- `Selecteer objecten` (of de selectie), `Uitlijnen [Links/Midden/Rechts/Boven/Midden verticaal/Onder] <Links>`, `Naar [Selectie/Eerste/Laatste/Punt] <Selectie>`; `P` vraagt om het punt. De selectie blijft.

### DISTRIBUTE

- `Selecteer objecten` (minstens drie), `Verdelen [Horizontaal/Verticaal] <Horizontaal>`, `Gelijkmatig verdelen [Middelpunten/Tussenruimten] <Tussenruimten>`. De buitenste twee blijven staan; de selectie blijft.

### ALIGNPANEL

Aliassen: `ALP`; of {{ui:Wijzigen}} › {{ui:Meer}} › {{ui:Uitlijnen en verdelen}}. Opent het paneel dat ALIGNTO en DISTRIBUTE uitvoert via klikken.

### LASER

Aliassen: `LASERCUT`; of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Laser…}}. Opent het paneel Laser over de tekening: wat elke laag doet (snijden, inkerven, graveren, vullen, afbeelding), het voorbeeld, GRBL G-code om op te slaan, en het kader en verzenden via Web Serial. Zie [Een tekening naar een lasersnijder sturen](topic:laser-cutting).

### STRETCH

Aliassen: `S`; of {{ui:Uitrekken}}. `Selecteer objecten om uit te rekken`: sleep kruisvensters (of typ `C`) over de uiteinden om te verplaatsen. `Geef het basispunt op [Verplaatsing]`, `Geef het tweede punt op`. Punten binnen de vensters verschuiven: lijnuiteinden, polylijnhoekpunten (bogsegmenten behouden hun hoogte), maatvoeringspunten; cirkels, ellipsen, tekst, punten en blokken verschuiven als geheel wanneer hun middelpunt of invoegpunt erin ligt. Een selectie die vóór de opdracht is gemaakt, behoudt de kruisvensters (en lassoos) die haar maakten, zodat ze op dezelfde manier uitrekken. Zonder venster verschuiven de objecten als geheel.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliassen: `AR`; of {{ui:Array}}. `Selecteer objecten`, daarna `Voer het type array in [Rechthoekig/POlair] <Rechthoekig>` (alleen ARRAY).

- Rechthoekig begint met 4 kolommen × 3 rijen, met een tussenruimte van 1,5 keer de grootte van de objecten, getoond als voorbeeld. `Voer een optie in [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` vraagt kolommen en rijen, `S` de afstanden tussen kolommen en tussen rijen (negatief gaat naar links of omlaag), `COL` en `R` elk één richting.
- Polair vraagt `Geef het middelpunt van de array op`, begint met 6 items rondom, gedraaid. `Voer een optie in [Items/Vulhoek/ROTate items/eXit] <X>`: `I` items, `F` de hoek om te vullen (+ tegen de klok in, − met de klok mee), `ROT` Ja of Nee.
- {{key:Enter}} (eXit) maakt de kopieën, als gewone objecten. Eén stap ongedaan maken.
- `AS` (ASsociatief) schakelt tussen gewone kopieën en een array die bewerkbaar blijft: één object dat u later wijzigt met {{cmd:ARRAYEDIT}}, via zijn grips of in Eigenschappen. De keuze wordt onthouden ({{cmd:ARRAYASSOCIATIVITY}}); hij begint met gewone kopieën.

### ARRAYPATH

Kopieën langs een kromme. `Selecteer objecten`, daarna `Selecteer padkromme`: een lijn, boog, cirkel, ellips, polylijn of spline (niet een van de objecten die worden gearrayd). Het pad begint bij het uiteinde dat het dichtst bij de objecten ligt, en het eerste item is de objecten waar ze staan.

- `Voer een optie in [Methode/Items/SPacing/ALign/ASsociatief/eXit] <X>`, met een voorbeeld. `M`: `Verdelen` spreidt de items gelijkmatig over het hele pad, `Meten` zet er één om de zoveel langs het pad. `I`: het aantal items (bij Meten betekent 0 zoveel als er passen; een aantal voorbij het einde van het pad wordt beperkt tot wat past). `SP`: de afstand tussen items langs het pad (schakelt naar Meten). `AL`: Ja draait elk item mee met het pad, Nee houdt ze rechtop.
- `AS` zoals in {{cmd:ARRAY}}. Zolang die aan staat, houdt de array een eigen kopie van de vorm van het pad: het later wijzigen van de padkromme verschuift de items niet.
- Het weigert een pad dat geen kromme is, en één item.

### ARRAYEDIT

Wijzigt een array die met Associatief is gemaakt. `Selecteer array` (of selecteer hem eerst). Het toont hoe de array nu is en vraagt door tot {{key:Enter}}:

- Rechthoekig: `COL` kolommen en hun tussenruimte, `R` rijen en hun tussenruimte, `A` de hoek waaronder de kolommen lopen.
- Polair: `I` items, `F` de vulhoek, `ROT` items draaien Ja of Nee.
- Pad: `M` Verdelen of Meten, `I` items, `SP` tussenruimte, `AL` uitlijnen met het pad.
- `S` (Bron) opent de objecten die de array herhaalt, op zichzelf, zoals de blokeditor. Teken en bewerk daar; {{cmd:ARRAYCLOSE}} slaat op of verwerpt, en elk item volgt.
- `REP` (VERvangen): `Selecteer vervangende objecten`, `Geef het basispunt van de vervangende objecten op`, daarna de items klikken die vervangen moeten worden, {{key:Enter}}. Die items tonen dan de vervanger; de vervangende objecten verdwijnen uit de tekening en leven in de array. `RES` (HERSTELLEN) toont de brongeobjecten opnieuw in elk item.
- Elke wijziging is één stap ongedaan maken. Het weigert gewone kopieën, een gewone blokverwijzing en een array op een vergrendelde laag.

Dezelfde getallen staan in Eigenschappen onder Array, en de array heeft grips: zijn basispunt verplaatst hem, de grip bij het tweede item stelt de tussenruimte in, de grip voorbij het laatste item stelt het aantal in (polair: het tweede item stelt het aantal items in, het laatste item de vulhoek). {{cmd:EXPLODE}} zet een array terug in gewone kopieën.

### ARRAYCLOSE

Beëindigt {{cmd:ARRAYEDIT}} Bron: `Wijzigingen in de brongeobjecten van de array opslaan? [Opslaan/Verwerpen] <Opslaan>`. Het zegt dat wanneer geen brongeobjecten van een array open zijn. {{cmd:BCLOSE}} doet hetzelfde.

### ARRAYASSOCIATIVITY

`Voer een nieuwe waarde in voor ARRAYASSOCIATIVITY (1 = arrays blijven bewerkbaar, 0 = gewone kopieën)`. Stelt in waarmee {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR en {{cmd:ARRAYPATH}} beginnen; hun optie `AS` wijzigt dezelfde instelling. In deze browser onthouden.

### OFFSET

Aliassen: `O`. Lijnen, bogen, cirkels en polylijnen.

Wanneer een polylijn naar buiten verschuift en zijn rechte segmenten bij een hoek uit elkaar gaan, bepaalt {{cmd:OFFSETGAPTYPE}} hoe de opening wordt gesloten.

- `Geef de verschuivingsafstand op [Door] <laatste afstand, of Door>`
- `Selecteer het object om te verschuiven`, daarna `Geef het punt op de zijde waarnaar verschoven moet worden` (of, met Door, `Geef een punt op waardoor de lijn gaat`), herhaald tot Enter.

### OFFSETGAPTYPE

- `Verschuivingshoekopeningen: 0 verlengen, 1 afronden, 2 afschuinen`: hoe {{cmd:OFFSET}} de openingen op de buitenhoeken van een polylijn sluit. `0` verlengt de segmenten tot ze elkaar raken (de startinstelling), `1` verbindt ze met een boog rond de oude hoek, `2` met een rechte snede. Binnenhoeken en bogensegmenten worden niet beïnvloed. Blijft voor deze sessie bewaard.

### EXTRIM

{{cmd:EXTRIM}} snijdt alles aan één zijde van een rand bij. Kies de snijrand (een lijn, boog, cirkel, polylijn, ellips, spline of hulplijn), en wijs daarna een punt aan op de zijde die vrij moet worden: elke lijn, boog, cirkel, polylijn en hulplijn die de rand kruist, verliest zijn deel aan die zijde, waar het bij de rand begint. Terwijl u de zijde kiest, volgen de stukken die zouden verdwijnen de aanwijzer. Bij een gesloten rand zijn de zijden binnen en buiten. Objecten die de rand alleen raken, en tekst, arceringen, splines en ellipsen die hem kruisen, blijven zoals ze zijn. Eén stap ongedaan maken.

### TRIMEXTENDMODE

- `Voer een nieuwe waarde in voor TRIMEXTENDMODE (1 Snel, 0 Standaard)`: hoe {{cmd:TRIM}} en {{cmd:EXTEND}} beginnen. `1` Snel: elk object is een snijrand of grens. `0` Standaard: ze vragen eerst om de randen. Ook `(setvar "TRIMEXTENDMODE" 0)` in LISP.

### TRIM

Aliassen: `TR`. Drukt eerst `Huidige instellingen: Snelle modus (TRIMEXTENDMODE 1), randen: Niet verlengen, slepen tekent een pad` af. In de snelle modus is elk zichtbaar object een snijrand, en een object dat niets kruist, wordt gewist; in de standaardmodus vraagt het eerst `Selecteer snijranden (Enter = elk object)` en snijdt het alleen daar.

- `Selecteer het object om bij te snijden of Shift-selecteer om te verlengen [Snijranden/Hekje/Kruisen/Modus/Rand/Verwijderen/Ongedaan maken]`, herhaald: klik het stuk aan dat weg moet (het wordt grijs en gestippeld terwijl de aanwijzer erop rust), sleep een pad door meerdere stukken (alle gaan in één stap), of klik twee lege plekken voor een hekje ertussen. {{key:Shift}} verlengt in plaats daarvan. `T` kiest snijranden (standaardmodus), `F` vraagt hekjespunten, `C` twee vensterhoeken (stukken die er gedeeltelijk in liggen gaan mee), `O` vraagt `Voer een bijsnijdmodusoptie in [Snel/Standaard]`, `E` vraagt `Voer een impliciete randverlengingsmodus in [Verlengen/Niet verlengen]` (EDGEMODE), `R` wist objecten die u selecteert, `U` maakt de laatste keuze of sleep ongedaan. Enter beëindigt. Zie [Bijsnijden en verlengen](topic:trim-and-extend).

- Een klik op een arcering snijdt de arcering: de snijranden splitsen het gearceerde gebied, en het stuk waarop u klikte, verdwijnt (er blijft geen getekende omtrek achter). De arcering behoudt zijn patroon of verloop; een arcering die aan zijn grens was gekoppeld, is daarna niet meer gekoppeld, omdat hij die niet meer vult. Het zegt dat wanneer geen snijrand de arcering daar splitst, wanneer de klik naast de arcering valt, en wanneer er niets zou overblijven (gebruik dan {{cmd:ERASE}}). Een gesleept pad of hekje snijdt geen arceringen.

### EXTEND

Aliassen: `EX`. Hetzelfde als TRIM, maar omgekeerd: `Selecteer het object om te verlengen of Shift-selecteer om bij te snijden [Grensranden/Hekje/Kruisen/Modus/Rand/Ongedaan maken]`. Een klik verlengt het uiteinde dat het dichtst erbij ligt tot de volgende grens; een gesleept pad of hekje verlengt elk object dat het kruist; {{key:Shift}} snijdt bij. `B` kiest grensranden (standaardmodus). Modus en Rand worden gedeeld met TRIM.

### LINKVIEWS

Aliassen: `SYNCVIEWS`; of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Weergaven van de vensters koppelen}}, of het koppelpictogram op de tekentabbladen. `Weergaven van de vensters koppelen [AAN/UIT]` (Enter neemt de andere stand): zolang dit aan staat, verschuift of zoomt een actief venster elk venster dat hetzelfde soort ruimte toont. Zie [Het scherm splitsen](topic:split-screen).

### OPENIN3D

Geen aliassen; of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Openen in ModelCraft}} waar de 3D-modelleerapp een overgedragen tekening aanneemt. Opent hem daar in een nieuw tabblad, als DWG (er wordt niets geüpload). Als de browser het tabblad blokkeert, zegt het dat.

### LASSOMODE

`Voer een nieuwe waarde in voor LASSOMODE (1 = lasso, 0 = rechthoek)`: wat indrukken en slepen op een lege plek tekent. Hetzelfde als Instellingen › CadCraft › Slepen om te selecteren. Zie [Selecteren met lasso](topic:lasso-selection).

### FILLET

Aliassen: `F`. Lijnen, bogen, cirkels en polylijnen. Drukt eerst `Huidige instellingen: Modus = BIJSNIJDEN, Straal = 0` af.

- `Selecteer het eerste object [Ongedaan maken (U)/Polylijn/Radius/Bijsnijden/Meerdere]`
  - `R` vraagt `Geef de straal van de afronding op <laatste>`. `T` vraagt `Voer een bijsnijdmodusoptie in [Bijsnijden/Niet bijsnijden]`: met Niet bijsnijden blijven de objecten zoals ze zijn en wordt alleen de boog toegevoegd.
  - `M` houdt de opdracht gaande voor meer hoeken tot {{key:Enter}}; `U` neemt de laatste hoek terug zonder de opdracht te verlaten.
  - `P` vraagt `Selecteer 2D-polylijn [Radius]` en rondt elke hoek af waar twee rechte segmenten samenkomen. Afrondingen die er al zijn, worden vervangen door de nieuwe straal; straal 0 haalt ze weg. Hoeken waarvan de zijden te kort zijn voor de straal, blijven en worden geteld.
- `Selecteer het tweede object of Shift-selecteer om de hoek toe te passen [Radius]`. Houd {{key:Shift}} ingedrukt terwijl u klikt voor een scherpe hoek, wat de straal ook is.

Klik elk object op het deel dat u wilt houden. Twee lijnen die elkaar niet raken, worden verlengd. Twee evenwijdige lijnen krijgen een halve cirkel over de opening, aan het uiteinde van de eerste lijn dat het dichtst bij uw klik ligt. Een cirkel wordt nooit doorgesneden. Twee naast elkaar liggende segmenten van één polylijn krijgen de boog binnen de polylijn; een polylijn en een ander object werken wanneer de snede op het eerste of laatste segment van de polylijn valt.

### CHAMFER

Aliassen: `CHA`. Lijnen en de rechte segmenten van polylijnen. Drukt eerst de huidige afstanden af (of lengte en hoek).

- `Selecteer de eerste lijn [Ongedaan maken (U)/Polylijn/Afstand/Hoek/Bijsnijden/mEthode/Meerdere]`
  - `D` vraagt `Geef de eerste afschuiningsafstand op <laatste>` en `Geef de tweede afschuiningsafstand op <de eerste>`: de eerste wordt van de eerste lijn die u kiest afgesneden, de tweede van de andere.
  - `A` vraagt `Geef de lengte van de afschuining op de eerste lijn op` en `Geef de hoek van de afschuining vanaf de eerste lijn op`.
  - `E` (mEthode) kiest welke van de twee de volgende afschuining gebruikt. `T`, `M`, `U` en `P` werken zoals in {{cmd:FILLET}}.
- `Selecteer de tweede lijn of Shift-selecteer om de hoek toe te passen [Afstand/Hoek/mEthode]`. Shift+klik maakt een scherpe hoek.

Een afstand die langer is dan de lijn, wordt geweigerd (`Afstand is te groot.`).

### BREAK en BREAKATPOINT

Aliassen: `BR`. `Selecteer object` (waar u klikt is het eerste punt), `Geef het tweede breekpunt op [Eerste punt]`; `F` vraagt `Geef het eerste breekpunt op` en `Geef het tweede breekpunt op`. Het deel ertussen verdwijnt; op een cirkel, tegen de klok in vanaf het eerste punt. BREAKATPOINT vraagt `Geef het breekpunt op` en splitst het object daar in twee (geen cirkel).

### LENGTHEN

Aliassen: `LEN`. `Selecteer een object om te meten [Verschil/Percentage/Totaal/DYnamisch]`: een keuze toont `Huidige lengte` (en bij een boog de ingesloten hoek) en vraagt opnieuw. `DE` vraagt `Voer de lengteverandering in (negatief verkort) [Hoek]`, `P` `Voer het lengtepercentage in`, `T` `Geef de totale lengte op [Hoek]`, `DY` sleept. Daarna `Selecteer een object om te wijzigen [Ongedaan maken (U)]`, herhaald: het uiteinde dat het dichtst bij de klik ligt, verplaatst zich. Lijnen, bogen en open polylijnen.

### JOIN

Aliassen: `J`. `Selecteer objecten om samen te voegen`. Lijnen, bogen en open polylijnen die uiteinde aan uiteinde samenkomen, worden polylijnen (gesloten wanneer de keten sluit); lijnen op één lijn worden één lijn; bogen van één cirkel worden één boog of de cirkel. De geschiedenis zegt hoeveel objecten zijn samengevoegd en hoeveel niet.

### MATCHPROP

Aliassen: `MA`, `PAINTER`. `Selecteer bronobject`, daarna `Selecteer doelobjecten [Instellingen]` en {{key:Enter}}. Kopieert laag en kleur, en tussen objecten van dezelfde soort de teksthoogte en -breedte, de maatvoeringsafmetingen of het arceringspatroon. `S` vraagt `Zet een eigenschap aan of uit [Kleur/LAag/Tekst/Maatvoering/Arcering]`, herhaald tot {{key:Enter}}; de keuze wordt voor de sessie onthouden.

### EXPLODE

Aliassen: `X`. Polylijnen worden lijnen en bogen, blokverwijzingen worden hun objecten, maatvoeringen worden lijnen, pijlpunten en tekst. Een array die bewerkbaar blijft ({{cmd:ARRAYEDIT}}) wordt gewone kopieën van zijn objecten.

- `Selecteer objecten`

### GROUP

Aliassen: `G`. {{cmd:GROUP}} geeft de geselecteerde objecten een naam die ze gemeen hebben. Selecteer de objecten, typ daarna een naam (zonder spaties; `?` toont de groepen; Enter maakt een groep zonder naam) en, bij een benoemde groep, een optionele beschrijving. Vanaf dan selecteert een klik op een van hen, of een venster dat er een opneemt, ze allemaal, zodat ze samen verplaatsen, kopiëren en wissen; elk object blijft een eigen object. Een object kan in meerdere groepen zitten. Een kopie van een hele groep is een nieuwe groep zonder naam; een kopie van één lid op zichzelf voegt zich bij de groep. Groepen horen bij de ruimte waarin ze gemaakt zijn (het model of een blad). Ze blijven bewaard wanneer u opslaat als DWG of DXF en het bestand later opnieuw opent in CadCraft; DXF 2000-bestanden bevatten ze ook als groepsobjecten voor andere programma's, en groepen die in een ander programma zijn gemaakt, worden gelezen wanneer een DXF of DWG wordt geopend.

### UNGROUP

{{cmd:UNGROUP}} haalt groepen uit elkaar: selecteer objecten van de groepen (elke groep waarin ze zitten, wordt uit elkaar gehaald) of typ `Naam` en de naam van de groep. De objecten blijven in de tekening. Eén stap ongedaan maken brengt de groepen terug.

### GROUPEDIT

{{cmd:GROUPEDIT}} wijzigt één groep. Wijs een van zijn objecten aan, of `Naam` en zijn naam; een groep die al geselecteerd is, wordt zoals hij is genomen. Daarna: `Toevoegen` objecten (één per keer aangewezen, niet groep per groep), `Verwijderen` objecten, `HERnoemen` de groep, zijn `Beschrijving` wijzigen, of `Selecteerbaar` instellen (of een klik op één object de hele groep selecteert). `eXit` of Enter beëindigt. Een groep zonder objecten meer verdwijnt.

### PICKSTYLE

- `Groepsselectie: 0 een klik selecteert één object, 1 de hele groep`: met `1` (de startinstelling) selecteert een klik of een venster op een gegroepeerd object de hele groep; met `0` enkele objecten, zodat u één lid kunt bewerken. Blijft voor deze sessie bewaard.

## Klembord

Het eigen klembord van CadCraft: het werkt binnen een tekening, tussen tekeningen en tussen CadCraft-tabbladen in deze browser. Zie [Kopiëren, plakken en dupliceren](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, of {{ui:Kopiëren}} in de groep {{ui:Bewerken}}. Kopieert objecten naar het klembord, met de blokken en lagen die ze gebruiken. De objecten blijven geselecteerd.

- `Selecteer objecten om te kopiëren` (overgeslagen wanneer objecten al geselecteerd zijn)

### CUTCLIP

{{key:Mod+X}}, of {{ui:Knippen}} in het menu {{ui:Meer}}. Kopieert objecten naar het klembord en wist ze daarna (één stap ongedaan maken).

- `Selecteer objecten om te knippen` (overgeslagen wanneer objecten al geselecteerd zijn)

### COPYBASE

Kopieert objecten naar het klembord met een basispunt dat u aanwijst; plakken plaatst dat punt.

- `Geef het basispunt op`
- `Selecteer objecten om te kopiëren`

### PASTECLIP

{{key:Mod+V}}, of {{ui:Plakken}} in de groep {{ui:Bewerken}}. De kopie volgt de cursor en hangt aan de linkerondergrens van zijn omvang (of aan zijn middelpunt, of het punt van `COPYBASE`; zie [Instellingen van CadCraft](topic:settings)).

- `Geef het invoegpunt op`

De geplakte objecten worden geselecteerd. Een blok dat de tekening al heeft onder dezelfde naam, behoudt de definitie van deze tekening.

Wanneer een gebied dat in MarkupCraft is gekopieerd nieuwer is dan wat CadCraft kopieerde (en minder dan 6 uur oud), plakken {{key:Mod+V}} en `PASTECLIP` in plaats daarvan dat gebied: zie `PASTEAREA`.

### PASTEAREA

Aliassen: `PAREA`. {{ui:Gekopieerd gebied plakken}} in het menu {{ui:Meer}}. Plakt een gebied dat in MarkupCraft is gekopieerd met {{ui:Gebied kopiëren}} als afbeelding op zijn werkelijke grootte. Zie [Afbeeldingen in een tekening](topic:pictures).

- `Geef de linkerondergrens van het gekopieerde gebied op`
- `Schaal de papiergrootte met (100 voor een blad van 1:100; Punten: twee punten erop en hun werkelijke afstand) [Punten] <1>` (alleen wanneer het blad geen tekenschaal had): een getal, {{key:Enter}} voor de papiergrootte, of `P`, daarna `Eerste punt op het geplakte gebied`, `Tweede punt op het geplakte gebied` en hun werkelijke afstand.

### PASTEORIG

{{key:Mod+Shift+V}}, of {{ui:Plakken op dezelfde plaats}} in het menu {{ui:Meer}}. Plakt op de coördinaten waarvandaan de objecten zijn gekopieerd. Vraagt niets.

### DUPLICATE

Aliassen: `DUP`. {{key:Mod+D}}, of {{ui:Dupliceren en verplaatsen}} in het menu {{ui:Meer}}. Een kopie van de objecten verplaatst zich met de aanwijzer vanaf waar ze staan; {{key:Esc}} laat niets achter. Gebruikt het klembord niet.

- `Selecteer objecten om te dupliceren` (overgeslagen wanneer objecten al geselecteerd zijn)
- `Geef op waar de kopie komt (Esc laat niets achter)`: klik, typ een punt, `@dx,dy` (vanaf waar de aanwijzer was), of een afstand naar de cursor toe.

### SELECT

Vraagt `Selecteer objecten` (met elke optie hieronder) en laat wat u koos geselecteerd voor de volgende opdracht of voor later `P`.

### QSELECT

Aliassen: `QS`. In de browser het dialoogvenster {{ui:Snelselectie}} (zie [Objecten selecteren](topic:select-objects#select-by-a-rule-quick-select)). Zonder dat vraagt de opdrachtregel `Voer het objecttype in`, `Voer een eigenschap in`, `Voer een operator in [=/<>/>/</*/Alles selecteren] <=>` en `Voer een waarde in`. De overeenkomsten worden de selectie.

### SELECTSIMILAR

Aliassen: `SIM`. `Selecteer objecten [INstellingen]` (of de huidige selectie): selecteert elk object van hetzelfde type met dezelfde laag en kleur (en bloknaam, arceringspatroon). `SE` vraagt `Zet een eigenschap aan of uit [LAag/KLeur/NAam/PAtroon/HOogte]`, herhaald tot {{key:Enter}}.

### FIND

Geen aliassen; of {{ui:Bewerken}} › {{ui:Meer}} › {{ui:Zoeken en vervangen}}. In de browser het dialoogvenster {{ui:Zoeken en vervangen}} (zie [Tekst en labels toevoegen](topic:text#find-and-replace-words)). Zonder dat: `Voer de tekst in om te zoeken`, daarna `Voer de vervangende tekst in (Enter: selecteer wat is gevonden)`. Zoekt in tekst, attribuutwaarden en maatvoeringstekst, op het open tabblad of in de selectie.

### SELECTALL en DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) selecteert elk object dat u op het open tabblad kunt bewerken. `DESELECT` (aliassen `AI_DESELECT`, `SELECTNONE`; of {{key:Esc}}) heft de selectie op.

## Maatvoering

### DIMLINEAR

Aliassen: `DLI`, `DIMLIN`. Horizontale of verticale afstand.

- `Geef het oorsprongspunt van de eerste hulplijn op [Object selecteren]` (Enter of `S`: `Selecteer het object om te meten`, daarna klik een lijn, boog, cirkel of polylijnsegment)
- `Geef het oorsprongspunt van de tweede hulplijn op`
- `Geef de plaats van de maatlijn op [Tekst/Horizontaal/Verticaal/Gedraaid]`. `T` vraagt om tekst (`<>` is de gemeten waarde), `H` en `V` leggen de richting vast, `R` vraagt `Geef de hoek van de maatlijn op <0>`.

### DIMALIGNED

Aliassen: `DAL`, `DIMALI`. De werkelijke afstand tussen twee punten.

- Oorsprongspunten zoals in {{cmd:DIMLINEAR}}, daarna `Geef de plaats van de maatlijn op [Tekst]`.

### DIMANGULAR

Aliassen: `DAN`, `DIMANG`.

- `Selecteer boog, cirkel of lijn, of Enter voor een hoekpunt`
- Boog: zijn hoek. Cirkel: `Geef het tweede eindpunt van de hoek op`. Lijn: `Selecteer de tweede lijn`. Enter: `Geef het hoekpunt op`, `Geef het eerste eindpunt van de hoek op`, `Geef het tweede eindpunt van de hoek op`.
- `Geef de plaats van de maatlijn op [Tekst]`: klik binnen de hoek die u wilt meten.

### DIMRADIUS en DIMDIAMETER

Aliassen: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Selecteer boog of cirkel`, daarna `Geef de plaats van de maatlijn op [Tekst]`.

### DIMCONTINUE

Aliassen: `DCO`, `DIMCONT`. Gaat verder vanaf de laatste lineaire of uitgelijnde maatvoering die is gemaakt (of vraagt `Selecteer lineaire of uitgelijnde maatvoering`).

- `Geef het oorsprongspunt van de tweede hulplijn op [Ongedaan maken (U)]`, herhaald tot Enter.

### DIMBASELINE

Aliassen: `DBA`, `DIMBASE`. Zoals {{cmd:DIMCONTINUE}}, maar elke maatvoering begint bij het eerste oorsprongspunt en wordt verder naar buiten opgestapeld.

### DIMORDINATE

Aliassen: `DOR`, `DIMORD`. `Geef de plaats van het kenmerk op`, daarna `Geef het eindpunt van de leider op [X-datum/Y-datum/Tekst]`. Schrijft hoe ver het kenmerk van de oorsprong van het UCS ligt, langs X of langs Y, op een leider: een leider die vooral omhoog of omlaag loopt, leest X; een die zijwaarts loopt, leest Y; `X-datum` en `Y-datum` leggen vast welke. Stel eerst de oorsprong in met {{cmd:UCS}} (zonder die is het de 0,0 van de tekening). Grips verplaatsen het kenmerk, de oorsprong en het eind van de leider, en de waarde volgt. Wordt in DWG en DXF als echte ordinaatmaatvoering opgeslagen. Weigert een leidereind op het kenmerk zelf.

### DIMARC

Aliassen: `DAR`. `Selecteer boog of boogsegment van een polylijn`, daarna `Geef de plaats van de maatvoering van de booglengte op [Tekst]`. Meet langs de boog (niet de koorde) en schrijft het boogsymbool voor de waarde. Weigert een volledige cirkel, een lijn of een recht polylijnsegment. Een DWG bewaart het als maatvoering van de booglengte; een DXF bewaart het als hoekmaatvoering met de lengte als tekst, en CadCraft opent het weer als maatvoering van de booglengte.

### DIMJOGGED

Aliassen: `DJO`, `JOG`. `Selecteer boog of cirkel`, `Geef de overschrijving van de plaats van het middelpunt op`, `Geef de plaats van de knik op`. Een stralingsmaatvoering voor een kromme waarvan het middelpunt ver weg of buiten het blad ligt: de maatlijn begint bij het punt dat u geeft in plaats van bij het middelpunt, met een knik erin, en toont toch de werkelijke straal. Een DWG bewaart het als geknikte stralingsmaatvoering; een DXF bewaart het als stralingsmaatvoering, en CadCraft opent het weer geknikt.

### DIMJOGLINE

Aliassen: `DJL`. `Selecteer maatvoering om knik toe te voegen [Verwijderen]`, daarna `Geef de plaats van de knik op (of druk op Enter)`. Zet een knipsymbool op de lijn van een lineaire of uitgelijnde maatvoering, om te tonen dat de afstand niet op schaal is getekend; de waarde verandert niet. `Verwijderen` haalt het weg. Weigert andere soorten maatvoering.

### QDIM

Geen aliassen. `Selecteer geometrie om van maatvoering te voorzien`, daarna `Geef de positie van de maatlijn op [Doorlopend/Afwisselend/Basislijn/Ordinaat/Radius/Diameter/datumPunt]`. Voorziet meerdere objecten in één stap van maatvoering, vanaf de uiteinden van lijnen en polylijnsegmenten, middelpunten van cirkels en bogen, punten en blokverwijzingen. Een positie boven of onder de objecten meet dwars erover, een positie ernaast meet omhoog. `Doorlopend` ketent de punten, `Basislijn` meet alles vanaf het eerste, `Afwisselend` nest paren van het midden naar buiten, `Ordinaat` geeft elk punt zijn afstand tot het datumpunt (`datumPunt` kiest een nieuwe), `Radius` en `Diameter` voorzien elke aangewezen cirkel en boog van maatvoering. De modus wordt onthouden. Alles wat het maakt, is één stap ongedaan maken. Zegt het wanneer er minder dan twee punten zijn, of geen bogen of cirkels voor Radius en Diameter.

### DIMBREAK

Aliassen: `DBREAK`. `Selecteer maatvoeringen om breuken toe te voegen of te verwijderen`, daarna `Breek waar andere objecten kruisen [Auto/Handmatig/Verwijderen] <Auto>`. `Auto` laat een opening in de maat- en hulplijnen waar een ander object ze kruist, en berekent de openingen opnieuw wanneer die objecten of de maatvoering verplaatsen. `Handmatig` (één maatvoering) vraagt twee punten en laat een opening tussen die. `Verwijderen` haalt alle openingen weg. De opening is 1,5 keer de teksthoogte van de maatvoering.

### DIMSPACE

Geen aliassen. `Selecteer basismaatvoering`, `Selecteer maatvoeringen om te verdelen`, `Voer een tussenruimtewaarde in of Auto <Auto>`. Verschuift de maatlijnen van evenwijdige lineaire en uitgelijnde maatvoeringen (of hoekige rond hetzelfde hoekpunt) zodat ze even ver uit elkaar liggen, geteld vanaf de basismaatvoering, elk aan de kant waar het ligt. `0` lijnt ze uit met de basis; `Auto` is tweemaal de teksthoogte van de basismaatvoering. Maatvoeringen die niet evenwijdig aan de basis zijn, blijven ongemoeid.

### DIMINSPECT

Geen aliassen. `Selecteer maatvoeringen`, `Vorm van het inspectiekader [Rond/Hoekig/Geen/verwijderen] <Rond>`, `Voer een label in`, `Voer het inspectiepercentage in <100%>`. Tekent een kader rond de waarde met een label ervoor en het inspectiepercentage erna. `verwijderen` haalt het kader weg. Tolerantietekst blijft bij de waarde.

### DIMOVERRIDE

Aliassen: `DOV`, `DIMOVER`. `Voer de naam van de maatvoeringsvariabele in om te overschrijven of Wissen`, `Voer een nieuwe waarde in voor …`, opnieuw tot Enter, daarna `Selecteer maatvoeringen`. Wijzigt die instellingen alleen op de geselecteerde maatvoeringen; de maatvoeringsstijl wordt niet gewijzigd. Neemt de variabelen die een getal of een schakelaar zijn (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Wissen` zet de geselecteerde maatvoeringen terug op hun stijl. Weigert een naam die zo'n variabele niet is, en een waarde die hij niet kan aannemen.

### DIMREASSOCIATE

Aliassen: `DRE`, `DIMREASSOC`. `Selecteer maatvoeringen`, daarna voor elk de oorsprongspunten van de hulplijnen (`Geef het oorsprongspunt van de eerste hulplijn op een object`: snap naar een uiteinde of het midden van een lijn, een hoekpunt van een polylijn, een middelpunt; Enter houdt dat punt vrij), of voor een straal-, diameter-, geknikte straal- of booglengtemaatvoering `Selecteer boog of cirkel`. De maatvoering wordt dan aan die objecten gekoppeld: wanneer ze verschuiven of van grootte veranderen, volgt hij in dezelfde stap ongedaan maken en meet hij opnieuw. Een gekoppeld punt met de hand verplaatsen, of het object wissen, beëindigt die koppeling. De koppeling wordt in DWG en DXF 2000 bewaard als de eigen gegevens van CadCraft; andere programma's zien een gewone maatvoering.

### DIMDISASSOCIATE

Aliassen: `DDA`, `DIMDISASSOC`. `Selecteer maatvoeringen`. Maakt ze los van de objecten waaraan ze vastzitten; niets verschuift.

### CENTERMARK

Aliassen: `CM`, `DIMCENTER`, `DCE`. `Selecteer cirkel of boog om middelpuntmarkering toe te voegen`, opnieuw tot Enter. Tekent een kruis in het midden en vier middellijnen tot net voorbij de kromme (lijntype CENTER), als gewone lijnen op de huidige laag; de grootte komt van de pijlgrootte en de totaalschaal van de huidige maatvoeringsinstellingen, en wordt met het UCS gedraaid. Ze volgen de cirkel niet als die verschuift.

### CENTERLINE

Aliassen: `CL`. `Selecteer de eerste lijn`, `Selecteer de tweede lijn`. Tekent een lijn halverwege tussen twee lijnen (langs de bissectrice wanneer ze elkaar raken), iets langer dan ze zijn, in lijntype CENTER. Een gewone lijn: hij volgt de twee lijnen niet.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Geen aliassen. Elk vraagt `Voer een nieuwe waarde in voor … <huidig>` en stelt die grootte in voor **nieuwe** maatvoeringen: totaalschaal, teksthoogte, pijlgrootte, decimalen (tot 8), afstand rond de tekst, verlenging voorbij de maatlijn, verschuiving vanaf de oorsprong. Zie [Maatvoeringsafmetingen instellen](topic:dimension-settings).

### DIMLUNIT

Maatvoeringsinstelling: het formaat van lengte van nieuwe maatvoeringen alleen (1 wetenschappelijk, 2 decimaal, 3 engineering, 4 architectonisch, 5 breuk).

### DIMSTYLE en -DIMSTYLE

Aliassen: `DST`, `DDIM`, `D`. De beheerder van maatvoeringsstijlen: {{ui:Huidige instellen}}, {{ui:Nieuw…}}, {{ui:Wijzigen…}}, {{ui:Hernoemen…}}, {{ui:Verwijderen}}, {{ui:Vergelijken…}}, {{ui:Toepassen op selectie}}. `-DIMSTYLE` op de opdrachtregel: `Maatvoeringsstijl [Herstellen/Opslaan/Verwijderen/Toepassen/Vergelijken/hernoemen/Lijst]`. Zie [Maatvoeringsafmetingen instellen](topic:dimension-settings#named-dimension-styles).

### DIMEDIT en DIMTEDIT

`DIMEDIT` (`DED`): `Maatvoeringsbewerking [Start/Nieuw/Roteren/Schuin] <Start>`, daarna de maatvoeringen (of die al geselecteerd zijn). Nieuw vraagt om de tekst (`<>` = de meting); Roteren om een hoek (0 zet de tekst terug); Schuin voor de hoek van de hulplijnen ten opzichte van de X-as (Enter = geen; alleen lineaire en uitgelijnde maatvoeringen). `DIMTEDIT` (`DIMTED`): `Maatvoeringstekst [Links/Rechts/Midden/Start/Hoek] <Midden>`. Zie [Maatvoeringsafmetingen instellen](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliassen: `DTU`. `Eenheden in de tekst van nieuwe maatvoeringen [Tekeningeenheden/mm/cm/m/km]`, of met geselecteerde maatvoeringen `Eenheden in de tekst van de geselecteerde maatvoeringen`. Schrijft de gemeten lengte in die eenheid met de eenheid erachter (DIMLFAC en een DIMPOST-achtervoegsel); `D` gaat terug naar de tekeningeenheden. Zie [Maatvoering in mm, cm, m of km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliassen: `RC`. Drukt `Booglengte: … Type: …` af, daarna `Geef het eerste punt op [Booglengte/Object/Rechthoekig/Veelhoek/Vrije vorm]`. Rechthoekig vraagt `Geef het tegenoverliggende hoekpunt op`; Veelhoek `Geef het volgende punt op (Enter sluit de wolk) [Ongedaan maken (U)]`; Vrije vorm volgt de aanwijzer tot een klik of {{key:Enter}}; `O` vraagt `Selecteer object` en `Richting omkeren? [Ja/Nee] <N>` en zet het object om in de wolk. `A` vraagt `Geef de lengte van elke boog op`. `R`, `P` en `F` kiezen het type voor de volgende wolk. Het resultaat is een gesloten polylijn van bogen.

### MLEADER

Aliassen: `MLD`; of {{ui:Leider}}. `Geef de plaats van de pijlpunt van de leider op [Grootte van pijlpunt/Afstand landing/Blok]`, `Geef de plaats van de landing van de leider op`, daarna de tekst in het vak op de plek (of, zonder dat, `Voer tekst in (een lege regel beëindigt)`). `Blok` vraagt eerst om een bloknaam, en de multileider toont dat blok in plaats van tekst. Meer leiderlijnen: {{cmd:MLEADEREDIT}}. Wordt in DWG als echte multileider bewaard; DXF bewaart de lijnen, pijlpunt en tekst die het tekent.

### MLEADEREDIT

Aliassen: `MLE`. `Selecteer een multileider`, daarna `Geef de plaats van de pijlpunt van de leider op [Leiders verwijderen/Blokinhoud/Tekstinhoud]`: elk punt voegt een leiderlijn toe van een nieuwe pijlpunt naar dezelfde landing, tot Enter. `Leiders verwijderen` neemt daarna de leiderlijn weg waarop u klikt (een multileider houdt minstens één). `Blokinhoud` vraagt een bloknaam en toont dat blok in plaats van de tekst (zijn attributen worden gevraagd); `Tekstinhoud` zet tekst terug. Elke leiderlijn heeft een eigen grip. Een DWG bewaart elke leiderlijn en het blok in één multileider.

### MLEADERALIGN

Aliassen: `MLA`. `Selecteer multileiders`, daarna `Selecteer de multileider om op uit te lijnen [Verdelen/Tussenruimte/Huidige tussenruimte gebruiken]` en `Geef de richting op`. Verplaatst de landingen van de andere multileiders (en hun tekst of blok) naar de lijn door de landing van de aangewezen multileider in die richting; de pijlpunten blijven waar ze wijzen. `Tussenruimte` zet ze ook op gelijke afstand; `Verdelen` vraagt twee punten en spreidt ze er gelijkmatig tussen. Er zijn minstens twee multileiders nodig.

### MLEADERCOLLECT

Aliassen: `MLC`. `Selecteer multileiders`, daarna `Geef de plaats van de verzamelde multileider op [Verticaal/Horizontaal]` (Enter houdt de plek van de eerste). Maakt één multileider van meerdere: blokinhoud gaat in een nieuw blok dat ze allemaal naast of onder elkaar houdt; tekstinhoud wordt één notitie met een regel per item. De eerste multileider behoudt zijn leiderlijnen; de andere worden verwijderd. Weigert een mengsel van tekst- en blokinhoud.

### TABLE

Aliassen: `TB`; of {{ui:Annoteren}} › {{ui:Meer}} › {{ui:Tabel}}. Maakt een tabel: één object dat u verplaatst, kopieert, roteert, schaalt en plot zoals elk ander object, met de cellen als gegevens bewaard.

- `Aantal gegevensrijen of [Plakken/Bestand/Stijl] <3>`, daarna `Aantal kolommen <3>`, `Teksthoogte` en `Linkerbovenhoek van de tabel`. De tabel krijgt een titelrij (één samengevoegde cel) en een kopregel boven de gegevensrijen.
- `P`: een tabel uit spreadsheetcellen op het klembord (tekst met een tab tussen de cellen). {{key:Ctrl+V}} met zulke cellen op het klembord doet hetzelfde, tenzij de eigen kopie van CadCraft de nieuwere is (of CadCraft kan het niet onderscheiden: dan plakt het zijn eigen kopie en zegt dat). `F`: een tabel uit een `.csv`- of tab-gescheiden bestand. De eerste rij wordt de kopregel; kolombreedten passen zich aan de tekst aan.
- `S`: kies de tabelstijl voor deze tabel (zie {{cmd:TABLESTYLE}}).
- Het weigert een aantal rijen of kolommen dat geen geheel getal is, en meer cellen dan een tabel kan bevatten (2.000 rijen, 200 kolommen, 40.000 cellen).
- {{cmd:EXPLODE}} zet een tabel om in lijnen en tekst. Opgeslagen als DWG is een tabel een echt tabelobject dat andere programma's kunnen bewerken; opgeslagen als DXF is het een blok dat hem tekent, en CadCraft opent hem weer als tabel.

### TABLEDIT

Aliassen: `TABLEEDIT`, `TABEDIT`; of dubbelklik op een cel. Bewerkt een tabel.

- `Kies een cel om in te typen (Enter om af te ronden) of [Rij/Kolom/Grootte/Samenvoegen/Splitsen/Uitlijnen/Hoogte/Soort/Wissen]`. Klik een cel aan, of typ, met een tabel geselecteerd, zijn naam (`B3`: kolom B, rij 3; de titelrij is rij 1). In de browser opent zich een vak over de cel: {{key:Enter}} behoudt de tekst, {{key:Tab}} gaat naar de volgende cel, {{key:Alt+Enter}} begint een nieuwe regel, {{key:Esc}} laat de cel zoals hij was.
- Een tekst die met `=` begint, is een formule: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, met `+ - * / ^`, haakjes en functies zoals `sqrt` en `round`. De cel toont de waarde; een formule die naar zijn eigen cel verwijst, naar een cel buiten de tabel of naar een cel zonder getal, toont `####` en de opdrachtregel zegt waarom.
- `R` / `C`: `Invoegen` of `Verwijderen` van rijen of kolommen bij een aangewezen cel (hoeveel, en boven of onder, links of rechts). Formules volgen de cellen waar ze naar verwijzen.
- `S`: de breedte van de kolom en de hoogte van de rij. Een rij is nooit lager dan zijn tekst nodig heeft. Een geselecteerde tabel heeft ook een grip op elke rand van kolom en rij.
- `M`: samenvoegen van de ene aangewezen cel tot de andere; `U`: splitsen. `A`: uitlijning (`TL` linksboven … `MC` midden … `BR` rechtsonder). `H`: de eigen teksthoogte van deze cel (0 = die van de stijl). `K`: de rij tot titel, kop- of gegevensrij maken. `CL`: de cel leegmaken.
- Het weigert een tabel op een vergrendelde laag, het verwijderen van elke rij of kolom, en een samenvoeging die een andere samengevoegde cel in tweeën zou snijden.

### TABLESTYLE

Aliassen: `TS`. Toont de tabelstijlen met hoeveel tabellen elk gebruiken, daarna `Tabelstijl: [Nieuw/Instellen/Bewerken/Verwijderen/Toepassen]`.

- Een stijl bepaalt de teksthoogte en uitlijning van de titel-, kop- en gegevensrijen, de celmarge, en welke randen worden getekend (buiten, tussen rijen, tussen kolommen).
- `N` maakt een stijl uit de huidige en maakt die huidig; `S` stelt de huidige stijl in (nieuwe tabellen krijgen die); `E` bewerkt er één: tabellen die hem gebruiken worden opnieuw getekend; `A` geeft geselecteerde tabellen de huidige stijl; `D` verwijdert er één (niet Standaard, niet de huidige; tabellen die hem gebruikten behouden hun uiterlijk).
- Stijlen worden met de tekening bewaard (DWG en DXF).

### TABLEEXPORT

Slaat op wat een tabel toont als CSV-bestand (een formule als zijn waarde). `Selecteer een tabel`, of selecteer er eerst één. Tekstcellen die met `=`, `+`, `-` of `@` beginnen, krijgen een voorafgaande `'`, zodat een spreadsheet ze niet uitvoert.

### TABLEPASTE

Aliassen: `PASTETABLE`. Maakt een tabel uit spreadsheetcellen op het klembord en vraagt daarna om de linkerbovenhoek. Hetzelfde als {{cmd:TABLE}} › `Plakken`.

### DATALINK

Aliassen: `DL`. `Gegevenskoppeling: [Nieuw/Lijst/Verwijderen] <Nieuw>`. `N` vraagt om een CSV-bestand, plaatst er een tabel van en onthoudt de naam van het bestand; `L` toont de koppelingen met hun bestand, grootte, wanneer ze zijn gelezen en hoeveel tabellen ze gebruiken; `R` verwijdert een koppeling (de tabellen blijven gewone tabellen).

### DATALINKUPDATE

Aliassen: `DLU`. Leest het bestand van een gegevenskoppeling opnieuw in en vult de tabellen die eraan gekoppeld zijn opnieuw (rijen en kolommen worden toegevoegd of verwijderd om te passen). Een browser kan zelf geen bestand openen, dus vraagt het u het bestand opnieuw te kiezen. Bij meerdere koppelingen vraagt het welke.

### FIELD

Zet een veld in de tekening: tekst die zichzelf uitrekent. `Veld: [Datum/Bestandsnaam/Blad/Eigenschap/Object/Expressie/Code] <Datum>`:

- `D`: nu, of de opgeslagen, aangemaakte of geplotte datum, en een formaat (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: de bestandsnaam, met of zonder extensie. `S`: het bladnummer, zijn titel, of hoeveel bladen er zijn. `P`: een tekeningeigenschap op naam (zie {{cmd:DWGPROPS}}). `O`: kies een object, daarna wat er gelezen moet worden (oppervlak, lengte, omtrek, straal, diameter, laag, naam, x, y, tekst, rotatie, kleur) en de decimalen. `E`: een formule. `C`: een tekst met codes zoals u ze typt, zoals `Blad %<sheetnumber>% van %<sheetcount>%`.
- Daarna `Selecteer een tekst, een tabelcel of een blok met attributen om het erin te zetten (Enter: een nieuwe tekst)`: een aangewezen tekst krijgt het veld erachter; een tabelcel evenzo; een blokverwijzing vraagt welk attribuut; {{key:Enter}} vraagt een hoogte en een punt voor een nieuwe tekst.
- Op het scherm heeft een veld een lichtgrijze achtergrond; een plot en een PDF hebben die nooit. Met de hand over de tekst van een veld typen beëindigt het veld. Een veld dat niet kan worden uitgerekend, toont `####`.
- Het veld van een object zoekt zijn object via de sleutel die CadCraft op objecten bewaart (Instellingen › CadCraft › Samenvoegbare bestanden); met de sleutels uitgeschakeld weigert het.

### UPDATEFIELD

Aliassen: `UPDATEFIELDS`. `Selecteer de objecten waarvan de velden moeten worden bijgewerkt (Enter: elk veld) of [Instellingen]`. `S` stelt in wanneer velden vanzelf worden bijgewerkt: typ de letters van `O` openen, `S` opslaan, `P` plotten, `R` opnieuw genereren (alle vier om mee te beginnen), of `GEEN`.

### DWGPROPS

Aliassen: `DRAWINGPROPS`. Toont de eigenschappen van de tekening, daarna `Wijzigen: [Titel/Onderwerp/Auteur/Bedrijf/Trefwoorden/opMerkingen/Eigen/Verwijderen/eXit]`. De eerste zes zijn die welke het paneel {{ui:Tekeningdetails}} toont; `U` voegt uw eigen naam en waarde toe, `R` verwijdert er één. Velden lezen ze (`%<prop:title>%`, `%<prop:Client>%`) en volgen ze direct. Het weigert een eigen naam die een ingebouwde is of `%`, `<`, `>`, een aanhalingsteken of een backslash bevat.

## Parametrisch

Zie [Een tekening beperken](topic:constraints) en [Parameters en vergelijkingen gebruiken](topic:parameters). Beperkingen werken op het tabblad {{ui:Model}}.

### GEOMCONSTRAINT en de GC-opdrachten

Alias `GCON`: `Voer het type beperking in [Horizontaal/Verticaal/Loodrecht/Evenwijdig/Raaklijn/Coïncident/CONcentrisch/COLlineair/Symmetrisch/Gelijk/Vastzetten] <Horizontaal>`, daarna de vragen van die opdracht.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Selecteer een object [2Punten] <2Punten>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Selecteer eerste object`, `Selecteer tweede object` (het tweede beweegt).
- {{cmd:GCCOINCIDENT}}: `Selecteer eerste punt [Object/Automatisch beperken] <Object>`, `Selecteer tweede punt [Object] <Object>`.
- {{cmd:GCFIX}}: `Selecteer punt [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Selecteer eerste object [2Punten] <2Punten>`, `Selecteer tweede object`, `Selecteer symmetrielijn`.

### DIMCONSTRAINT en de DC-opdrachten

Alias `DCON`: `Selecteer associatieve maatvoering om om te zetten [LIneair/Horizontaal/Verticaal/ALigned/ANgular/Radiaal/Diameter/Omzetten] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Geef het eerste beperkingspunt op [Object] <Object>`, `Geef het tweede beperkingspunt op`, `Geef de plaats van de maatlijn op`, `Maattekst <d1=40>` (een getal, een expressie, of `naam=expressie`).
- {{cmd:DCALIGNED}}: zoals hierboven, met `[Object/Punt & lijn/2Lijnen]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Selecteer boog of cirkel`. {{cmd:DCANGULAR}}: `Selecteer eerste lijn of boog`, `Selecteer tweede lijn`.
- {{cmd:DCCONVERT}}: `Selecteer maatvoeringen om om te zetten`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Selecteer objecten [Instellingen]`. `S` vraagt de tolerantie voor afstand en hoek.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Selecteer objecten`; hun beperkingen gaan weg.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Selecteer objecten [Alles tonen/Alles verbergen]`, daarna `[Tonen/Verbergen]`.
- {{cmd:DCDISPLAY}}: `Voer een optie in [Tonen/Verbergen]`.

### PARAMETERS en -PARAMETERS

{{cmd:PARAMETERS}} (aliassen `PAR`, `PARAM`) opent het paneel {{ui:Parameters}}. `-PARAMETERS`: `Voer een optie in [Nieuw/Bewerken/Hernoemen/Verwijderen/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Downloadt een macro (.swb) die het model in SolidWorks opnieuw opbouwt als één beperkte schets. Zie [Schetsen naar en van andere onderdeelmodelleerprogramma's verplaatsen](topic:solidworks-sketches).

## Blokken

### ANNOSCALE

Aliassen: `CANNOSCALE`. Zegt de annotatieschaal van de tekening en hoeveel annotatieve objecten die bevat, daarna vraagt `Nieuwe annotatieschaal`: typ `1:50`, `1:100`, `2:1`, een kaal getal (`50` is 1:50) of de naam van een van de eigen schalen van de tekening. Elke annotatieve tekst en maatvoering wordt zo vergroot of verkleind dat hij op de nieuwe schaal op dezelfde grootte wordt afgedrukt, in één stap ongedaan maken; objecten die niet annotatief zijn, blijven ongemoeid, en ook een object dat een lijst van schalen bewaart zonder de nieuwe, blijft ongemoeid ({{cmd:OBJECTSCALE}}). Zie [Eenheden, bladen en schalen](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliassen: `OBJSCALE`. `Selecteer annotatieve objecten`, daarna `Annotatieschalen van de geselecteerde objecten [Toevoegen/Verwijderen/Huidige schaal/Lijst/eXit] <Toevoegen>`. Een annotatieve tekst of maatvoering bewaart een lijst van annotatieschalen. `Toevoegen` en `Verwijderen` vragen een schaal (`1:50`, `2:1`, een kaal getal, of de naam van een van de eigen schalen van de tekening); `Huidige schaal` voegt de annotatieschaal van de tekening toe; `Lijst` toont de schalen van elk object. Een viewport waarvan de schaal in de lijst van een object staat, toont het object op de grootte die zijn papierhoogte bij die schaal afdrukt, op het scherm en in plots. De laatste schaal kan niet worden verwijderd. Objecten die niet annotatief zijn, vallen buiten de selectie: zet eerst Annotatief aan in Eigenschappen. De lijsten worden in DWG en DXF bewaard als de eigen gegevens van CadCraft. Zie [Eenheden, bladen en schalen](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliassen: `ANNOALL`. `Annotatieve objecten op alle schalen tonen [AAN/UIT]`. Aan (zoals een tekening begint): een annotatief object wordt ook getoond in een viewport, of in het model, waarvan de schaal niet in zijn lijst staat, op de grootte die het heeft. Uit: het wordt daar niet getoond en kan in het model niet worden aangewezen. De schakelaar is één stap ongedaan maken; hij wordt niet in het bestand bewaard.

### SCALELISTEDIT

Aliassen: `SCALELIST`. `Schaallijst [Toevoegen/Bewerken/Verwijderen/Lijst/Herstellen]` tot {{key:Enter}}. Toevoegen: `Schaalnaam`, `Papiereenheden`, `Tekeningeenheden`. Bewerken en Verwijderen vragen de naam van de schaal. De eigen schalen van de tekening komen in de lijsten met viewport- en plotschalen en worden met de tekening bewaard. Zie [Eenheden, bladen en schalen](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT en PEDIT

`SPLINE` (`SPL`): `Eerste punt van de spline [Methode/Object] (Passpunten)`. Passen: punten waar de kromme doorheen gaat; `Sluiten`, `Ongedaan maken`, daarna `Begintangens` en `Eindtangens` (een punt, of {{key:Enter}}). Methode › Besturingshoekpunten vraagt een graad (1 tot 5) en tekent vanuit een besturingsveelhoek. Object zet polylijnen om in splines door hun hoekpunten. `SPLINEDIT` (`SPE`): `[Passingsgegevens/Hoekpunt bewerken/naar Polylijn omzetten/Openen of Sluiten/Omkeren/Ongedaan maken/eXit]`; Passingsgegevens `[Toevoegen/Verwijderen/Verplaatsen/Opschonen/Tangens/eXit]`; Hoekpunt bewerken `[Besturingspunt toevoegen/Verplaatsen/Gewicht/eXit]`. `PEDIT` (`PE`): `[Sluiten/Openen/Samenvoegen/Breedte/Passen/Spline/Ontkrommen/Lijntype genereren/Omkeren/Ongedaan maken/eXit]`, `M` voor meerdere objecten; lijnen, bogen en splines worden eerst als polylijnen aangeboden. Zie [Splines en polylijnen](topic:splines).

### BLOCK

Aliassen: `B`, `BMAKE`.

- `Voer een bloknaam in`. Als die bestaat: `Blok "…" bestaat al. Opnieuw definiëren? [Ja/Nee] <N>`.
- `Geef het basispunt van het invoegen op`
- `Selecteer objecten`. Ze worden vervangen door één verwijzing naar het nieuwe blok.

### WBLOCK

Aliassen: `W`, `-WBLOCK`. Schrijft een blok, enkele objecten of de hele tekening weg als een nieuw DWG- of DXF-bestand. `WBLOCK bron [Blok/Hele tekening/Objecten] <Objecten>`:

- **Objecten**: `Geef het basispunt van het invoegen op` (het wordt de oorsprong van de nieuwe tekening), `Selecteer objecten`, daarna `Bestandsindeling [DWG/DXF/R12 DXF]` en `Bestandsnaam voor de nieuwe tekening`, dan `Wat moet er met de objecten gebeuren [Behouden/Omzetten naar blok/Verwijderen]`. Omzetten vervangt ze door één verwijzing naar een blok met de naam van het bestand; Verwijderen haalt ze weg.
- **Blok**: `Blok om weg te schrijven`. De eigen objecten van het blok, met zijn basispunt als oorsprong, geneste blokken inbegrepen.
- **Hele tekening**: elk object in de modelruimte. Bladen worden niet geschreven; gebruik {{cmd:SAVEAS}} voor een kopie die ze behoudt.

Het nieuwe bestand bevat alleen de lagen, lijntypen, tekst- en maatvoeringstijlen en blokken die zijn objecten gebruiken, en de eenheden van de tekening. De versie van een DWG is die welke {{cmd:SAVEAS}} het laatst gebruikte. In de browser wordt het bestand gedownload; in Studio opent het opslagvenster.

### ATTDEF

Aliassen: `ATT`, `DDATTDEF`, `-ATTDEF`; of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Kenmerk definiëren}}. Drukt de modi af, daarna `Voer een optie in om te wijzigen (Enter als u klaar bent) [Onzichtbaar/Constant/Vooraf ingesteld]`, `Voer de tagnaam van het attribuut in`, `Voer de prompt van het attribuut in`, `Voer de standaardwaarde van het attribuut in` (`Voer de waarde van het attribuut in` bij constant), `Geef het beginpunt van de tekst op`, `Geef de teksthoogte op`, `Geef de rotatiehoek van de tekst op`. {{cmd:BLOCK}} neemt attribuutdefinities in het blok op.

### EATTEDIT en ATTEDIT

`EATTEDIT` (`DDATTE`, of dubbelklik op een verwijzing met attributen; {{ui:Blokken}} › {{ui:Meer}} › {{ui:Attributen bewerken}}): `Selecteer een blokverwijzing met attributen`, daarna het dialoogvenster {{ui:Attributen bewerken}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): dezelfde verwijzing, daarna `<prompt> (<TAG>) <waarde>` voor elk attribuut; {{key:Enter}} behoudt een waarde. Zie [Attributen](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Werk de attributen bij van de verwijzingen van welk blok [Naam/Selecteren/Alle] <Selecteren>`. Waarden blijven behouden; nieuwe attributen krijgen hun standaardwaarde, verwijderde verdwijnen, plaatsingen worden teruggezet.

### BATTMAN

{{ui:Blokken}} › {{ui:Meer}} › {{ui:Attribuutbeheer}}. Het dialoogvenster: blok, attributen (tag, prompt, standaardwaarde, modi, volgorde), {{ui:De verwijzingen bijwerken (waarden behouden)}}, {{ui:Toepassen}}.

### REFEDIT en REFCLOSE

{{ui:Blokken}} › {{ui:Meer}} › {{ui:Ter plekke bewerken}}. `REFEDIT`: `Selecteer de blokverwijzing om ter plekke te bewerken` (of de selectie). `REFCLOSE`: `Wijzigingen in "…" opslaan? [Opslaan/Verwerpen] <Opslaan>`; de balk van {{ui:Het blok opslaan}} en {{ui:Verwerpen}} doen hetzelfde. De hele bewerking is één stap ongedaan maken. Zie [Attributen](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT en BCLOSE

`BE`; of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Blok bewerken}}. `Voer de naam van het blok in om te bewerken <het blok van de geselecteerde verwijzing>` opent de blokeditor. `BCLOSE` vraagt `Blokeditor voor "…" sluiten [Opslaan/Verwerpen] <Opslaan>`; de banner van {{ui:Blok opslaan}} en {{ui:Wijzigingen verwerpen}} doen hetzelfde. Alles wat in de editor wordt gedaan, is één stap ongedaan maken.

### VIEWBASE

Alias: `FLATSHOT`. Een vlakke 2D-weergave van de volumes op het 3D-tabblad: `Weergave [Voor/Boven/Rechts/Links/Achter/Onder/Iso]`, `Verborgen lijnen [Tonen/Verbergen]`, een schaal (`1:20`, `2:1`; {{key:Enter}} neemt die die op het blad past), daarna het middelpunt van de weergave. Eén blokverwijzing, zichtbare randen op VIEW-VISIBLE, verborgen randen gestippeld op VIEW-HIDDEN. Zie [Vlakke weergaven op een blad](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliassen: `-PUBLISH`; of {{ui:Alle bladen in één PDF}} in het dialoogvenster {{ui:Plotten naar PDF}}. `Te plotten bladen [Alle/Sommige]`: {{key:Enter}} plot elk blad, `S` vraagt namen gescheiden door komma's. Eén PDF, een pagina en een bladwijzer per blad. Zie [Elk blad in één PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliassen: `SSM`, `SHEETSETMANAGER`. Brengt u naar het gedeelte {{ui:Bladenset}} van het linkerpaneel: bladen van vele tekeningen, genummerd en getiteld, hun titelblokken gevuld vanuit de set, als één PDF gepubliceerd. Zie [Bladensets](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): kies een DWG of DXF, daarna het invoegpunt. {{cmd:XREF}} (`XR`, `-XREF`): `Gekoppelde tekeningen [?/Koppelen/Opnieuw laden/Binden/Loskoppelen] (Enter: ?)`; bij meer dan één koppeling kiest u een van de verwijzingen of typt u `N` en de naam ervan. Zie [Gekoppelde tekeningen](topic:files#linked-drawings-external-references).

### COUNT

Aliassen: `BCOUNT`; of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Blokken tellen}}. `Selecteer een blokverwijzing om te tellen, of [Alle/Exporteren] (Enter: Alle)`: een aanwijzing selecteert en telt elke verwijzing van dat blok in deze ruimte; {{key:Enter}} of `A` toont ze allemaal; `E` en daarna `C` (aantallen) of `A` (attributen) downloadt een CSV. Zie [Blokken tellen en een staat exporteren](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliassen: `I`, `DDINSERT`.

- `Voer een bloknaam in of [Bestand/Bibliotheek] <laatste blok>` (hoofdletters maken niet uit). `F` vraagt om een DWG- of DXF-bestand, daarna de hele tekening of een van zijn blokken; een al gebruikte naam vraagt {{ui:Bestaande behouden}} of {{ui:Hernoemen}}. `L` opent het paneel Bibliotheek.
- `Geef het invoegpunt op [Schaal/Roteren]`. `S` vraagt `Geef de schaalfactor op`, `R` vraagt `Geef de rotatiehoek op`; beide worden onthouden.
- Wanneer het blok al naast objecten staat die elders herhaald worden zonder het, meldt een regel hoeveel plekken worden voorgesteld, en krijgt de prompt `suGgested` erbij: `G` toont ze; klik dicht bij een ervan om het blok daar te plaatsen, `A` voor alle, {{key:Enter}} om terug te gaan. Ze nemen de rotatie van hun buren en de standaard attribuutwaarden over. Tekeningen met meer dan 20.000 objecten in de open ruimte worden niet doorzocht.
- Daarna `Voer <prompt> (<TAG>) <standaard> in` voor elk attribuut dat het blok vraagt. Zie [Blokattributen](topic:attributes).

### LIBRARY

Aliassen: `LIB`. Opent het paneel Bibliotheek: items plaatsen, op updates controleren, bronvermeldingen van de bibliotheek. Geen vragen. Zie [Invoegen uit een bestand of de bibliotheek](topic:insert-from-file-and-library).

### STEELMEMBER

Aliassen: `SMEMBER`; of {{ui:3D-staaf}} op het tabblad {{ui:Standaard}} van de bibliotheek. `Profielmaat <W12x26>` (zoals de lijst het toont), daarna `Beginpunt [Kolom]` en `Eindpunt`: een volume-staaf op het 3D-tabblad tussen de twee punten, op de grond. `C` vraagt het basispunt van de kolom en zijn hoogte. Eén stap ongedaan maken. Zie [Staalprofielen en standaardonderdelen plaatsen](topic:steel-and-standard-parts).

### PARTSLIST

Aliassen: `PLIST`. `Linkerbovenhoek van de onderdelenlijst`, daarna `Teksthoogte <2.5>`: tekent een tabel van elk standaardonderdeel en staalprofiel dat uit de bibliotheek is geplaatst (artikelnummers, aantal, onderdeel, norm, maat, lengte, materiaal, massa). Eén stap ongedaan maken. Zie [Staalprofielen en standaardonderdelen plaatsen](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliassen: `PU`. Verwijdert blokdefinities die niet worden gebruikt. Geen vragen.

### DELBLOCKS

Of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Blokken verwijderen}}. `Selecteer blok om te verwijderen [Naam/eXit]`: wijs een blokverwijzing aan, of `N` voor de lijst van blokken met een filter (kies er meerdere), of `X` / {{key:Enter}} om te beëindigen. Elke verwijzing gaat weg — in het model, op elk blad en binnen andere blokken — en daarna de definitie, en de opdrachtregel zegt wat is verwijderd en wat niet kon. Naamloze blokken en gekoppelde tekeningen worden niet aangeboden. De prompt komt terug voor het volgende blok; het hele commando is één stap ongedaan maken.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} plakt wat u kopieerde ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) als één blok: kies het invoegpunt en er komt één verwijzing naar een nieuw blok, geselecteerd. Het blok krijgt een eigen naam (`A$C` en een getal); {{cmd:RENAME}} geeft het de uwe. Eén stap ongedaan maken verwijdert de verwijzing en het blok.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} vraagt het blok dat vervangen moet worden en het blok dat ervoor in de plaats komt (`?` toont de blokken), en wijzigt daarna elke verwijzing in het model, op elk blad en binnen andere blokken. Elke verwijzing behoudt zijn plek, schaal, rotatie, laag en de waarden van de attributen die beide blokken hebben; attributen die alleen het nieuwe blok heeft, beginnen op hun standaardwaarden, en het laat u weten welke waarden zijn verworpen. Wanneer niets het oude blok meer gebruikt, biedt het aan het te verwijderen. Het weigert gekoppelde tekeningen en een vervanging die een blok in zichzelf zou zetten. Eén stap ongedaan maken.

### MINSERT

{{cmd:MINSERT}} plaatst een blok in rijen en kolommen: bloknaam, invoegpunt, schaal, rotatie, aantal rijen en kolommen, en de afstanden ertussen. De hele set draait mee met de rotatie. Elk is een eigen verwijzing (ten hoogste 10.000), dus elk ervan kan achteraf worden verplaatst of gewist.

### BLOCKSPALETTE

Aliassen: `BLOCKSPAL`; of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Blokkenpaneel}}. Toont het paneel {{ui:Blokken}} met de cursor in zijn filter. Elk blok heeft een klein beeld; de laatst geplaatste komen eerst. De twee knoppen naast het filter schakelen tussen een lijst en een raster van beelden. Klik op een beeld (of {{ui:Invoegen}}) om het blok met {{cmd:INSERT}} te plaatsen, of sleep het op de tekening om het te plaatsen waar u loslaat.

{{ui:Bibliotheken}}, onder de lijst: {{ui:Tekening toevoegen}} neemt een eigen DWG- of DXF-bestand en toont zijn blokken met beelden, en de hele tekening als één blok. Eén plaatsen kopieert zijn definitie (en de blokken die het nest, en hun lagen) naar deze tekening, zoals de optie `Bestand` van {{cmd:INSERT}} doet; een blok dat hier al staat met dezelfde definitie, wordt zonder vraag gebruikt, een met dezelfde naam maar een andere definitie vraagt {{ui:Bestaande behouden}} of {{ui:Hernoemen}}. In een browser blijft het bestand tot de pagina sluit. In CadCraft Studio toont {{ui:Map toevoegen}} de tekeningen in een map, elk geopend wanneer u erop klikt, en bestanden en mappen worden onthouden. Het kleine kruisje verwijdert een bibliotheek uit de lijst; het bestand blijft ongemoeid. De gedeelde {{ui:Bibliotheek}} is iets anders: zie [Invoegen uit een bestand of de bibliotheek](topic:insert-from-file-and-library).

### BCONVERT

Of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Herhalingen omzetten naar blokken}}. Zoekt geometrie die zich herhaalt en zet elke kopie om in een verwijzing naar één blok.

- `Selecteer de objecten die zich herhalen, of [Blok]`: de objecten van één kopie. `B` noemt in plaats daarvan een bestaand blok, om losse kopieën van zijn objecten te vinden.
- `Een kopie mag zijn: gespiegeld = Nee, geschaald = Nee; laag, kleur, lijntype en lijndikte = Overeenkomen … [Gespiegeld/Geschaald/Eigenschappen]`: `M`, `S` en `P` wisselen wat als kopie telt; {{key:Enter}} zoekt. De instellingen worden onthouden.
- `Naam voor het nieuwe blok <Blok1>`, daarna `Geef het basispunt van het blok op` ({{key:Enter}} neemt de linkerondergrens van de selectie).
- Het zegt hoeveel andere reeksen objecten dezelfde geometrie hebben, markeert alles wat het zou vervangen, en vraagt `Ja/Nee`.

Een kopie zijn dezelfde objecten die verplaatst en onder elke hoek gedraaid zijn (en gespiegeld of geschaald met één factor wanneer dat aan staat): elk object moet een tegenhanger hebben, tot binnen een miljoenste van de grootte van de selectie. Elke verwijzing krijgt zijn eigen rotatie en schaal (een gespiegelde een negatieve Y-schaal), en de laag die zijn objecten gemeen hadden. Objecten op vergrendelde lagen blijven ongemoeid en worden geteld. Het zoekt in de open ruimte (het model of het open blad). Een zeer grote zoektocht stopt bij een werklimiet en zegt dat. Eén stap ongedaan maken.

### BSEARCH

Of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Blokken zoeken}}. `Zoek blokken op [Naam/Attribuut/Geometrie] <Naam>`:

- `N`: een deel van een blokbnaam, of een patroon met `*` en `?`. Toont elk blok met zijn verwijzingen hier en in de hele tekening.
- `A`: een attribuutwaarde, of `TAG=waarde`. Toont de blokken waarvan de verwijzingen die hebben, met de gevonden waarden. Constante attributen tellen mee.
- `G`: selecteer objecten, of één blokverwijzing, en de blokken waarvan de vorm minstens 85% gelijk is, worden getoond, het beste eerst. Grootte, rotatie en spiegeling tellen niet mee. De maat vergelijkt de afstanden tussen punten verspreid langs de omtrekken, dus hij vindt gelijkenissen; gebruik {{cmd:BCONVERT}} om exacte kopieën te vinden.

De verwijzingen die in de open ruimte worden gevonden, worden geselecteerd, klaar voor de volgende opdracht.

### BREPLACE

Of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Blokken vervangen}}. `Vervangen [Geselecteerd/Alle]`: `S` vervangt de blokverwijzingen die u selecteert door het blok dat u noemt; `A` vraagt om een blok en zijn vervanging en wijzigt elke verwijzing, zoals {{cmd:BLOCKREPLACE}} doet (dezelfde code). Een verwijzing behoudt zijn plek, schaal, rotatie, laag en de waarden van attributen die beide blokken hebben; waarden waarvoor het nieuwe blok geen plek heeft, vervallen en worden genoemd. `?` toont de blokken. Eén stap ongedaan maken.

### DATAEXTRACTION

Aliassen: `EATTEXT`, `DX`; of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Gegevensextractie}}. Toont blokken, hun attributen en objecteigenschappen als tabel of CSV-bestand.

- Werkt op de selectie, of vraagt `Selecteer objecten (Enter: alles in deze ruimte)`.
- `Lijst: [Blokken/Objecten/Alle]` wanneer de selectie beide bevat. Naamloze blokken, tabellen en materiaallijsten worden nooit getoond.
- Het drukt de kolommen af waaruit u kunt kiezen (naam, type, laag, X, Y, rotatie, schaal, lengte, oppervlak, kleur, lijntype, ruimte, en één per attribuutlabel), daarna `Kolommen, op naam of nummer met komma's ertussen`. {{key:Enter}} neemt de met een ster gemarkeerde: de naam en elk attribuut voor blokken; type, laag en lengte voor objecten.
- `Zet identieke rijen samen met een aantal? [Ja/Nee] <Ja>`, daarna `Zet de lijst in een: [Tabel/Csv] <Tabel>`. Een tabel is een gewone tabel ({{cmd:TABLEDIT}} bewerkt hem) en is niet live: voer de opdracht opnieuw uit wanneer de tekening verandert.
- Het weigert een kolom die niet in de lijst staat. Een tabel bevat 1.999 gegevensrijen; een CSV-bestand neemt ze allemaal.

### COUNTTABLE

Telt de blokverwijzingen van de selectie (of van de open ruimte) en zet de aantallen in een tabel (`Blok`, `Aantal`) of een CSV-bestand. Voor een telling die zichzelf bijwerkt met de tekening, zie {{cmd:BOMTABLE}}.

## Bladen en plotten

### LAYOUT

Aliassen: `LO`, `NEWLAYOUT`; of de knop {{ui:+}} onder de tekening. Een nieuw blad met een rand, een titelblok en één viewport, op ISO A3 (of Tabloid voor tekeningen in inches of voet). Geen vragen.

### MVIEW

Aliassen: `MV`. Alleen op een blad ({{cmd:VPORTS}} op een blad doet hetzelfde).

- `Geef de hoek van het viewport op [Veelhoek/Object]`, `Geef de tegenoverliggende hoek op`. Het viewport toont het hele model op een standaardschaal.
- `P` (Veelhoek): klik de hoeken van de omtrek (`Ongedaan maken`, `Sluiten`), {{key:Enter}} als u klaar bent. Het weigert minder dan drie hoeken.
- `O` (Object): `Selecteer een gesloten object voor de omtrek van het viewport`: een gesloten polylijn, een cirkel of een ellips op het blad. Het viewport neemt zijn vorm aan (krommen als korte rechte stukjes); het object blijft zoals het was. Het weigert een object dat niet gesloten is.

### VPCLIP

Knipt een viewport die al op het blad staat. `Selecteer viewport om te knippen` (of selecteer het eerst), daarna `Selecteer het object om op te knippen [Veelhoek/Verwijderen]`:

- Klik een gesloten polylijn, cirkel of ellips, of {{key:Enter}} (of `P`) om de hoeken van een veelhoek aan te klikken.
- `D` (Verwijderen, aangeboden wanneer het viewport geknipt is) maakt het weer een rechthoek: het kader rond de omtrek die het had.
- Wat het viewport toont, verschuift niet op het papier, en zijn schaal blijft. Het model wordt alleen binnen de omtrek getekend en geplot, en de rand volgt die. Eén stap ongedaan maken.
- Een geknipt viewport heeft een grip op elke hoek van zijn omtrek, naast zijn middelpunt en de vier hoeken van zijn kader (het slepen van een kaderhoek rekt de omtrek mee uit). Eigenschappen toont Omtrek: Rechthoek, of Geknipt met het aantal hoeken.
- DWG- en DXF 2000-bestanden bewaren de omtrek voor CadCraft. Andere programma's openen het viewport als de rechthoek eromheen; DXF R12 bewaart alleen de rechthoek.
- Op het modeltabblad zegt het dat viewports op bladen staan.

### VPORTS

Aliassen: `VIEWPORTS`. {{cmd:SPLIT}} is hetzelfde ook vanaf een blad, en {{ui:Weergave}} › {{ui:Meer}} › {{ui:Naast elkaar splitsen}}, {{ui:Onder elkaar splitsen}}, {{ui:Vier vensters}}, {{ui:Eén venster}} voeren het uit. Op het model: `Voer het aantal vensters in [Enkel/2/3/4] <3>`; `2` vraagt `[Horizontaal/Verticaal] <Verticaal>` (Verticaal = naast elkaar), `3` vraagt `[Links/Rechts] <Rechts>` (waar het grote venster komt). Elk venster behoudt zijn eigen weergave en ruimte; een klik maakt een venster actief. Op een blad is het {{cmd:MVIEW}}. Zie [Het scherm splitsen](topic:split-screen).

### VPVIEW

Geen aliassen. Alleen op een blad.

- `Selecteer viewport` (overgeslagen als er één is geselecteerd), daarna op het model: `Geef de eerste hoek van het venster op dat moet worden getoond`, `Geef de tegenoverliggende hoek op`.

### UCS

Geen aliassen. Een eigen coördinatenstelsel; geen bewerking. `Geef de oorsprong van het UCS op [Benoemd/Object/Vorige/Wereld/Z/3punten] <Wereld>`: een punt wordt een nieuwe oorsprong, daarna `Geef een punt op de X-as op (Enter houdt de hoek)`. `Z`: `Geef de rotatiehoek om de Z-as op <90>`. `3`: oorsprong, een punt op de positieve X-as, een punt aan de positieve Y-kant. `OB`: `Selecteer object om UCS uit te lijnen`. `NA`: `[Herstellen/Opslaan/Verwijderen/?]` en een naam. De weergave draait zodat de nieuwe X-as horizontaal staat. Zie [De weergave draaien en uw eigen coördinaten gebruiken](topic:ucs-and-turned-view).

### PLAN

Geen aliassen. `Voer een optie in [Huidig ucs/Ucs/Wereld] <Huidig ucs>`: draait de weergave van het actieve venster zodat de X-as van het UCS (of die van de wereld) horizontaal staat. Niets in de tekening verschuift.

### TURNLEFT, TURNRIGHT, TURNWORLD

Geen aliassen; of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Weergave 90° linksom draaien}}, {{ui:Weergave 90° rechtsom draaien}}, {{ui:Terug naar wereld}}. Hetzelfde als `UCS Z -90`, `UCS Z 90` en `UCS W`, met de weergave die meevolgt.

### VPLAYER

Geen aliassen. Op een blad, of binnen een viewport. `Voer een optie in [?/Bevriezen/Ontdooien/Herstellen/Vpvisdflt]`: `F`, `T`, `R` vragen om laagnamen (komma's, `*` en `?` als jokertekens), daarna `[Alle/Selecteren/Huidig] <Huidig>` viewports; Herstellen zet elke laag terug op zijn standaard "bevroren in nieuwe viewports"; `V` stelt die standaard in (`[Bevroren/Ontdooid]`), wat {{cmd:MVIEW}} gebruikt. `?` toont de lagen die in het huidige viewport bevroren zijn. De kolom viewport van het paneel Lagen doet hetzelfde voor één viewport. Zie [Een laag in één viewport bevriezen](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliassen: `MS`; of dubbelklik binnen een viewport. Alleen op een blad. Werk op het model via een viewport: de geselecteerde, de enige op het blad, of `Klik binnen het viewport om in te werken`. Verschuiven en zoomen binnenin wijzigt de weergave van het viewport (een viewport met vergrendelde weergave behoudt die, en het blad verschuift in plaats daarvan); de nieuwe weergave wordt als één stap ongedaan maken geschreven. Zie [Op het model werken via een viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliassen: `PS`; of dubbelklik buiten het viewport, of klik een tabblad onder de tekening. Terug naar het blad.

### PLOT

Aliassen: `PRINT`, `PUBLISH`, `EXPORTPDF`; of {{key:Mod+P}}. Opent het dialoogvenster {{ui:Plotten naar PDF}}. Zie [Plotten naar PDF](topic:plot-pdf).

### PLOTSTYLES

Aliassen: `STYLESMANAGER`, `PSTABLES`; of {{ui:Tabellen bewerken…}} in het dialoogvenster {{ui:Plotten naar PDF}}. Opent {{ui:Plotstijltabellen}}: wat elke kleur afdrukt als (kleur, grijs, inkt, lijndikte), bewaard met de tekening. Zie [Plotstijltabellen](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} verplaatst objecten tussen een blad en het model via een viewport, geschaald en gedraaid zodat ze er vanaf de andere kant hetzelfde uitzien. Op een blad selecteert u objecten en ze gaan naar het model (kies het viewport wanneer het blad er meer dan één heeft). Terwijl u op het model via een viewport werkt ({{cmd:MSPACE}}), komen de geselecteerde objecten op het blad. Het zegt hoeveel keer groter of kleiner ze zijn geworden. Viewports blijven op hun blad. Eén stap ongedaan maken.

### ISODRAFT

{{cmd:ISODRAFT}} zet isometrisch tekenen `ON` of `OFF`, of gaat rechtstreeks naar het vlak `Links`, `Boven` of `Rechts`. Zolang het aan staat: Ortho ({{key:F8}}) houdt lijnen langs de twee assen van het vlak (links: 90° en 150°; boven: 30° en 150°; rechts: 30° en 90°), polaire tracering ({{key:F10}}) volgt dezelfde assen, snappen naar het raster ({{key:F9}}) gebruikt het isometrische raster, en het raster ({{key:F7}}) wordt getekend met lijnen op 30°, 90° en 150°. {{cmd:ELLIPSE}} krijgt `Isocirkel`: geef een middelpunt en een straal (of `Diameter`) en hij tekent de ellips die een cirkel toont op het huidige vlak. De tekening blijft vlak: dit zijn hulpmiddelen voor het tekenen van een perspectiefweergave, geen 3D-model. De instelling geldt voor deze sessie en wordt niet in het bestand bewaard.

### ISOPLANE

{{cmd:ISOPLANE}} kiest het vlak waarop isometrisch tekenen werkt: `Links`, `Boven` of `Rechts`. Enter gaat naar het volgende vlak. Zolang isometrisch tekenen aan staat, doet {{key:F5}} hetzelfde midden in een opdracht; terwijl het uit staat, wordt {{key:F5}} aan de browser overgelaten.

## Onderzoek

### CAL

Drukt de waarde van een berekening af, zoals die overal wordt gelezen waar een lengte wordt getypt.

- `Expressie`: typ bijvoorbeeld `12'6"+3/4"` of `(24'-0")/3`, en druk op {{key:Enter}}. CadCraft drukt `= 12'-6 3/4"   (150.75 tekeningeenheden)` af. Zie [Rekenen in een getypte waarde](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliassen: `DI`; of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Afstand meten}}.

- `Geef het eerste punt op`, `Geef het tweede punt op`. Drukt afstand, hoek, Delta X en Delta Y af.

### AREA

Aliassen: `AA`; of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Oppervlakte}}. Drukt oppervlak en omtrek af.

- `Geef het eerste hoekpunt op [Object/Oppervlak toevoegen/Oppervlak aftrekken] <Object>`
  - Klik of typ hoeken; bij `Geef het volgende punt op (Enter sluit) [Ongedaan maken (U)]` drukt u op {{key:Enter}} om de omtrek te sluiten. `U` neemt de laatste hoek terug.
  - {{key:Enter}} of `O`, daarna `Selecteer object`: een cirkel (drukt de omtrek af), een ellips, een polylijn (een open wordt voor het oppervlak met een rechte lijn gesloten, en de lengte wordt afgedrukt) of een arcering (gaten worden eraf getrokken).
  - `A` (Oppervlak toevoegen) en `S` (Oppervlak aftrekken) houden een lopend totaal bij: de prompt begint met `(TOEVOEGEN-modus)` of `(AFTREKKEN-modus)`, elk oppervlak wordt opgeteld of afgetrokken, en `Totaal oppervlak = …` wordt na elk afgedrukt. In deze modi kiest `O` objecten tot {{key:Enter}}, en {{key:Enter}} bij de eerste prompt beëindigt de opdracht.

### MEASUREGEOM

Aliassen: `MEA`. `Voer een optie in [Afstand/Radius/Hoek/OPpervlak] <Afstand>`; na elke meting vraagt het opnieuw, met `eXit` als standaard.

`Snel` meet rond de aanwijzer terwijl u hem beweegt: de afstand tot het dichtstbijzijnde object naar rechts, boven, links en onder (langs de assen van het huidige UCS), getekend terwijl u beweegt, en de hoek waar twee van die buren recht zijn en samenkomen. Een klik schrijft de vier afstanden, de vrije breedte en hoogte en de hoeken naar de geschiedenis; Enter gaat terug naar de opties. Het leest wat op het scherm staat.

- `D`: twee punten, zoals {{cmd:DIST}}.
- `R`: `Selecteer boog of cirkel`; drukt de straal en de diameter af.
- `A`: een boog (de ingesloten hoek), een lijn en daarna een tweede lijn (de hoek tussen beide, naar hun verre uiteinden toe), of {{key:Enter}} en drie punten (hoekpunt, daarna de twee uiteinden).
- `AR`: zoals {{cmd:AREA}}, één oppervlak.

### ID

Geen aliassen. `Geef een punt op`; drukt zijn X en Y af.

### LIST

Aliassen: `LI`, `LS`. `Selecteer objecten`; drukt het type, de laag en de belangrijkste maten van elk object af.

### MASSPROP

{{cmd:MASSPROP}} geeft de doorsnede-eigenschappen van de regio's en gesloten objecten die u selecteert, samen genomen: oppervlak, omtrek, omhullende rechthoek, zwaartepunt, traagheidsmomenten om de X- en Y-as door de oorsprong, het traagheidsproduct, draaistralen, dezelfde momenten om het zwaartepunt, en de hoofdmomenten met de richtingen van hun assen. Gaten in een regio tellen als gaten. De cijfers zijn in tekeningeenheden en exact voor contouren van lijnen en bogen; ellipsen en splines worden gemeten als korte rechte segmenten, en het zegt dat. Na het rapport vraagt het of het naar een tekstbestand moet worden geschreven. Objecten die niet gesloten zijn, vallen buiten de meting, en het zegt hoeveel dat er zijn.

## Weergave, bestand en overig

### ZOOM

Aliassen: `Z`.

- `Geef de hoek van het venster op, voer een schaalfactor in (nX) [Alles tonen/Alle/Venster/Vorige/Schaal/Midden]`. Klik twee hoeken voor een venster. `E`, `A` of Enter: de hele tekening.
- `P` (Vorige, of {{ui:Vorige}} op de werkbalk) gaat terug naar de weergave ervoor, tot 10 weergaven per tabblad; een reeks scrollstappen of één verschuiving telt als één weergave.
- Een getal zoals `2`, `2x` of `0.5x` (of `S` en daarna het getal) zoomt in of uit met die factor rond het midden van het scherm.
- `C` vraagt `Geef het middelpunt op` en `Voer de hoogte of vergroting in (nX)`.

### PDFATTACH, PDFIMPORT en de PDF-opdrachten

Aliassen: `PDFATT` voor {{cmd:PDFATTACH}}, `PDFIM` voor {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} plaatst een PDF-pagina onder de tekening (bestand, pagina, invoegpunt, schaal, rotatie); {{cmd:PDFIMPORT}} zet de lijnen, krommen, vlakken en tekst van een pagina om in tekenobjecten op lagen die naar de PDF zijn genoemd, op ware grootte, op een getypte schaal, of geschaald vanaf twee punten en een werkelijke afstand. {{cmd:PDFCLIP}} knipt een onderlegger, {{cmd:PDFADJUST}} stelt vervaging, contrast en zwart-wit in of schakelt hem uit, {{cmd:PDFLAYERS}} schakelt de eigen lagen van de PDF aan en uit, en {{cmd:PDF}} geeft CadCraft opnieuw de bestanden die de onderleggers van een tekening gebruiken. Zie [PDF-onderleggers](topic:pdf-underlay).

### AUTOCOMPLETE

Aliassen: `AUTOC`. Automatisch aanvullen van de tekening: zonder dat een opdracht loopt, toont een grijs spookbeeld wat de eigen patronen van uw tekening als volgende zeggen. {{cmd:AUTOCOMPLETE}} zet het `On` of `Off` (ook Instellingen › CadCraft) of `Show`t wat het nu zou voorstellen. **Tab** tekent het spookbeeld als één stap ongedaan maken, **Esc** verwerpt het tot de tekening verandert. Het vindt drie dingen in de nieuwste objecten: de volgende kopie van iets dat twee keer of vaker op een gelijke stap is getekend (stijlen, kolommen, de opstap en tree van een trap), de volgende stappen van een polylijntrap, en de ontbrekende zijde van een kamer of wandketting. Midden in {{cmd:LINE}} of {{cmd:PLINE}} is het spookbeeld het **volgende punt**: de volgende stap van een trap (opstap, tree, opstap…), de vierde hoek van een rechthoek, het punt dat hem sluit, of nog een gelijke stap. Breng de cursor ernaartoe en druk op **Tab**, alsof u daar had geklikt; ga door of druk op Enter. Berekend op deze computer met regels, zonder model.

### AUTOSHEET

Aliassen: `ASH`. Bladen die zichzelf indelen. {{cmd:AUTOSHEET}} neemt de onderdelen van de tekening (uw benoemde weergaven, of de losse onderdelen van het model, of het hele model), kiest een papierformaat (of het formaat dat u geeft), geeft elk onderdeel een standaardschaal (één schaal voor alles, of de grootste die elk aankan) en plaatst de aanzichten in rijen op nieuwe bladen, met een titelblok en een bijschrift (naam en schaal) eronder. Wat niet op één blad past, krijgt een eigen blad. Eén stap ongedaan maken. Berekend op deze computer met regels, zonder model.

### PHOTOSKETCH

Aliassen: `PSK`. Schetsfoto naar tekening. Kies een foto (JPEG, PNG of TIFF) van een handschets op een vel papier. {{cmd:PHOTOSKETCH}} vindt de vier hoeken van het vel, rechtzet het perspectief, neemt het papierformaat dat u noemt (`Papier`, of het dichtstbijzijnde standaardformaat) en de `Schaal` van de schets (1 : n), en traceert daarna de pennenlijnen in lijnen, bogen en cirkels, met een laag per pennenkleur (zwart, rood, blauw, groen). Als het de rand van het papier niet vindt, neemt het de hele foto als het blad en zegt dat. Lettering blijft buiten beschouwing. Eén stap ongedaan maken. Gedaan op deze computer met klassieke beeldverwerking, zonder model, en niets wordt ergens naartoe gestuurd. Zie ook de opdrachten voor gescande tekeningen.

### AUTODIM

Aliassen: `ADIM`. Automatische maatvoering volgens regels. {{cmd:AUTODIM}} voorziet de geselecteerde objecten (of de hele tekening) van maatvoering op basis van hun niveau- en loodrechte randen: een keten van maatvoeringen langs de zijden die u kiest (`Zijden`), één totaalmaat erbuiten, de breedte van elke opening (een tussenruimte tussen collineaire wandlijnen), een diameter voor elke maat gat, en met `Raster` de afstand tussen rasterlijnen. Een maatvoering die er al is, wordt niet opnieuw gemaakt. Eén stap ongedaan maken. Berekend op deze computer met regels, zonder model.

### GRIDMOVE

Aliassen: `GM`. Een rasterlijn verplaatsen neemt de set mee. {{cmd:GRIDMOVE}} verplaatst een rasterlijn (een lijn op een laag waarvan de naam raster of as zegt) en wat eraan hangt: wanden met een uiteinde op de lijn rekken mee uit, wanden langs de lijn verschuiven als geheel, kolommen (blokverwijzingen en cirkels op de lijn), de bol en tag verschuiven mee, en maatvoeringen waarvan de punten erop liggen meten de nieuwe tussenruimte. Geef twee punten (alleen het deel dwars op de lijn telt) of `Afstand`. Eén stap ongedaan maken neemt alles terug. Gedaan op deze computer met regels.

### DETAILS

Aliassen: `DET`. Details die u vinden. {{cmd:DETAILS}} bewaart de eigen details van uw bureau: `Toevoegen` zet een blok van deze tekening in de lijst, `Lijst` en `Verwijderen` beheren die, en `Zoeken` rangschikt ze voor wat is geselecteerd (of voor wat u het laatst tekende) op de woorden in zijn lagen, blokknamen, arceringspatronen en notities, tegenover de naam en notities van elk detail, zodat een raamlijst uw dorpelafdichting vindt. Kies een nummer en een punt om het te plaatsen. Met `Hint` aan (ook Instellingen › CadCraft) zet het selecteren van iets waar een detail bij past één regel in de statusbalk. De lijst wordt in deze browser op deze computer bewaard, en die lijst is degene die wordt doorzocht. `Delen` zet hem ook in uw map Documenten (`.cadcraft/firm-details.json`, met de tekening van elk blok): `Ophalen` voegt toe wat uw team heeft en u mist, `Verzenden` voegt toe wat u heeft en zij missen, `Beide` doet beide, en niets wordt ooit van beide kanten verwijderd. Open eerst de map Documenten ({{cmd:DOCUMENTS}}); wanneer die map een map van Team Cloud Plan is, deelt het hele team één lijst. Een detailitem in het paneel Bibliotheek heeft een knop **Toevoegen aan de details van mijn bureau** die het in dezelfde lijst zet. Berekend op deze computer door woorden, zonder model.

### SKETCHFIX

Aliassen: `SKF`. Pennenschetsen worden nauwkeurige geometrie. Druk en sleep één vrije streek per keer (pen, muis of vinger), daarna Enter. Elke streek wordt gelezen als een lijn, cirkel, boog, rechthoek of polylijn: bijna horizontale en loodrechte lijnen worden precies horizontaal en loodrecht gemaakt, een gesloten ronde streek wordt een cirkel, een gesloten streek met vier rechte hoeken een rechthoek, en de uiteinden van de streken worden samengetrokken en op de uiteinden die al in de tekening staan gelegd. Eén stap ongedaan maken. Berekend op deze computer met regels, zonder model.

### SCANATTACH en de opdrachten voor gescande tekeningen

Aliassen: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} heeft er geen. Ze werken op een afbeelding, elk één stap ongedaan maken. {{cmd:SCANATTACH}} voegt een PNG, JPEG, TIFF (één pagina of alle) of een PDF-pagina die een afbeelding is in. {{cmd:SCANSCALE}} schaalt het blad vanaf twee aangewezen punten en de werkelijke afstand. {{cmd:SCANALIGN}} verplaatst en draait het op twee punten (`Het blad op maat schalen` Ja/Nee). {{cmd:SCANDESKEW}} toont de hoek van de lange lijnen van het blad en draait het blad zodra u `Accepteren` of een `Waarde` geeft. {{cmd:SCANCLEAN}} maakt het zwart-wit (`Drempel` Auto/Adaptief/Niveau, `Vlekjes`) en `Uitvoeren`. {{cmd:SCANCROP}} behoudt een venster. {{cmd:SCANERASE}} wist een `Rechthoek`, `Veelhoek` of `Lasso`. {{cmd:SCANTRACE}} trekt lijnen en bogen over op een nieuwe laag (`Tolerantie`, `Venster`, `Bogen`, `Restanten`, `Uitvoeren`) en meldt wat het vond en wat het als raster liet. {{cmd:SCANINFO}} toont het oorspronkelijke bestand en de stappen. {{cmd:RASTERSNAP}} zet snappen naar de lijnen van gescande bladen Aan of Uit. Zie het onderwerp Gescande tekeningen en het overtrekken.

### REGEN en REGENALL

Aliassen: `RE` voor {{cmd:REGEN}}, `REA` voor {{cmd:REGENALL}}. Bouwt wat op het scherm wordt getekend opnieuw op uit de tekening: {{cmd:REGEN}} het tabblad waar u naar kijkt (op een blad ook het model dat zijn viewports tonen), {{cmd:REGENALL}} elk tabblad, elk venster bij gesplitst scherm en elke geopende tekening. Gebruik ze wanneer het beeld verouderd lijkt na een gescripte of zeer grote wijziging, of wanneer een assistent de tekening heeft bewerkt; de tekening zelf wordt niet aangeraakt, dus er is niets ongedaan te maken.

### NAMEDVIEW

Aliassen: `NV`, `VIEWS`. `Voer een optie in [?/Herstellen/Opslaan/Venster/Verwijderen] <Herstellen>`, daarna de naam van de weergave. `S` slaat de weergave op het scherm op, `W` een venster dat u aanwijst, `R` toont een opgeslagen weergave, `D` verwijdert er één, `?` toont de weergaven van dit tabblad. Opslaan onder een bestaande naam vervangt die; elke wijziging is één stap ongedaan maken. Weergaven horen bij het tabblad waarop ze zijn opgeslagen. DWG- en DXF-bestanden bewaren ze (de VIEW-tabel); de weergaven van een blad komen terug op het eerste blad, omdat het bestand niet zegt welke.

### UNDO en REDO

Aliassen: `U` voor {{cmd:UNDO}}; {{cmd:REDO}} heeft er geen. Ook {{key:Mod+Z}} en {{key:Mod+Y}}.

### LAYER

Aliassen: `LA`. Springt naar het paneel {{ui:Lagen}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Voer het lijntype voor nieuwe objecten in` — `ByLayer` (Op laag), `ByBlock` (Op blok) of een naam (`?` toont ze: Continu, die van de tekening zelf, en DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE met hun grootten `2` (half) en `X2` (dubbel)). {{cmd:LWEIGHT}} (`LW`): de lijndikte voor nieuwe objecten in mm, of `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): de lijntypeschaal van de tekening (ongedaan te maken). {{cmd:LWDISPLAY}} (`LWT`): `Lijndiktes tonen [AAN/UIT]` — hetzelfde als de knop {{ui:LWT}} in de statusbalk. Zie [Lijndiktes en lijntypen](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Voer het objecttype in om te hernoemen [LAag/Blok]`, `Voer de oude naam in`, daarna de nieuwe naam; objecten of verwijzingen volgen. {{cmd:LAYMRG}}: `Selecteer object op laag om samen te voegen of [Naam]` tot {{key:Enter}}, daarna `Selecteer object op doellaag of [Naam]` en `J`. {{cmd:LAYDEL}}: `Selecteer object op laag om te verwijderen of [Naam]`, daarna `J`: de laag en elk object erop gaan weg (niet laag 0, DEFPOINTS of de huidige laag). Elk één stap ongedaan maken. Zie [Een tekening ordenen met lagen](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Lagen via het aanwijzen van objecten; ook in het menu {{ui:Hulpmiddelen}} van het paneel {{ui:Lagen}}. {{cmd:LAYISO}}: `Selecteer objecten op de laag(en) die geïsoleerd moeten worden`, daarna {{key:Enter}}: elke andere laag gaat uit. {{cmd:LAYUNISO}} zet ze weer aan. {{cmd:LAYOFF}} en {{cmd:LAYFRZ}}: `Selecteer een object op de laag die uitgezet (of bevroren) moet worden`, steeds opnieuw; `U` neemt de laatste terug, {{key:Enter}} beëindigt. {{cmd:LAYMCUR}}: `Selecteer object waarvan de laag actief wordt`. {{cmd:LAYON}} zet elke laag aan, {{cmd:LAYTHW}} ontdooit elke laag. Elke opdracht is één stap ongedaan maken. Zie [Een tekening ordenen met lagen](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} start een lege tekening en {{cmd:OPEN}} opent een DWG of DXF, elk in een eigen tabblad boven de tekening (een onaangeroerde nieuwe tekening wordt gebruikt in plaats van een nieuw tabblad). Een tabblad sluiten met niet-opgeslagen wijzigingen vraagt eerst. Zie [Het scherm splitsen](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, ook {{key:Mod+S}}) downloadt een kopie in het formaat van de tekening: DWG als ze uit een DWG is geopend, DXF als ze uit een DXF is geopend. Een nieuwe tekening gebruikt het formaat dat het laatst is gekozen bij Opslaan als in deze browser, anders DWG.

{{cmd:SAVEAS}} (ook {{key:Mod+Shift+S}}) opent het dialoogvenster {{ui:Een kopie opslaan als}}: kies {{ui:DWG}} (en zijn {{ui:Versie}}), {{ui:DXF R12}} of {{ui:DXF 2000}}, en dan {{ui:Opslaan}}. De keuze blijft voor deze tekening en voor nieuwe tekeningen in deze browser.

{{cmd:DXFOUT}} downloadt altijd een kopie in DXF R12, zonder het formaat te wijzigen dat {{cmd:SAVE}} gebruikt.

Zie [Bestanden: wat opent, wat slaat op](topic:files#saving).

### TOUR

Aliassen: `TUTORIAL`. Start de rondleiding van zes stappen voor de eerste tekening opnieuw. Zie [Aan de slag](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliassen: `TBDOCK`. `Positie van de werkbalk [Boven/Onder/Links/Rechts]`. Zie [Instellingen](topic:settings#toolbar-position).

### COMMANDLINE

Aliassen: `CMDLINE`. `Opdrachtregel [Onderaan vastgezet/Zwevend/Één regel/Getoonde geschiedenisregels/Opdrachtgeschiedenis (F2)]`: zet de opdrachtregel vast of maakt hem zwevend, maakt hem één regel, vraagt hoeveel geschiedenisregels getoond moeten worden (0 tot 12), of opent de geschiedenis. Zie [Instellingen](topic:settings#command-line).

### TOPAREA

`Bovenste gebied [Standaard/Compact]`: de balken boven de tekening zoals ze waren, of compact. Zie [Instellingen](topic:settings#top-area).

### POLARANG

`Voer de stap van de polaire hoek in graden in <90>`: de stap waarop de lijnen van de {{ui:Polair}}-tracering worden uitgelijnd (meer dan 0, tot 180). In deze browser bewaard.

### UNITS

Aliassen: `UN`. Hoe lengten worden geschreven en getypt.

- `Voer het lengteformaat in [Wetenschappelijk/Decimaal/Engineering/Architectonisch/Breuk] <huidig>`
- Architectonisch en Breuk: `Voer de noemer van de kleinste weer te geven breuk in (1, 2, 4, 8, 16, 32, 64, 128 of 256)`. De andere: `Voer het aantal decimalen in (0 tot 8)`.

Nieuwe maatvoeringen volgen het. Eén stap ongedaan maken. Hetzelfde als {{ui:Lengteformaat}} en {{ui:Precisie}} in {{ui:Huidige instellingen}}; zie [Voet en duim](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliassen: `GDS`. Een IC-layout bekijken (een GDSII-streambestand): labspike, alleen voor bekijken en meten.

- Een bestandskiezer neemt een `.gds`-bestand; bij meerdere topcellen: `Voer de topcel in om te tekenen`.
- Elke laag en datatype wordt een tekenlaag (`GDS 1`, `GDS 2/5`), verwijzingen en arrays worden vlak geplaatst, in de gebruikerseenheid van het bestand (meestal micrometers). Eén stap ongedaan maken. Niets wordt gesimuleerd of gecontroleerd en het bestand wordt niet teruggeschreven.

### DIAGRAM

Aliassen: `TEXTDIAGRAM`, `T2D`. Een diagram uit tekst.

- Een vak neemt de tekst (of één regel met `;` tussen de instructies op de opdrachtregel): een Mermaid-stroomschema, een PlantUML-componentdiagram, D2 of een van-naarlijst.
- `Geef de linkerbovenhoek van het diagram op`, daarna `Geef de teksthoogte op`.

Blokken en verbindingen zijn gewone objecten op laag `Diagram`, geselecteerd wanneer het eindigt. Eén stap ongedaan maken. Zie [Een diagram uit tekst tekenen](topic:text-to-diagram).

### OLELIST

Aliassen: `OLES`. De OLE-objecten die een DWG bevat en die CadCraft niet zelf kan plaatsen.

- Toont elk: nummer, type, grootte, of het een afbeelding heeft bewaard.
- `Voer een optie in [Plaatsen/eXit] <eXit>`: Plaatsen vraagt het nummer, de linkerondergrens en de breedte, en tekent een kader met de afbeelding. Eén stap ongedaan maken; het bewaarde object wordt niet gewijzigd. Zie [Afbeeldingen](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliassen: `SHX`. Uw eigen SHX-lettertypen.

- `Voer een SHX-lettertypeoptie in [Map/Bestanden/Lijst/Verwijderen/Omkeren/Wissen] <Lijst>`

{{ui:Map}} leest elk `.shx`-bestand in een map (CadCraft Studio; opnieuw bij elke start), {{ui:Bestanden}} neemt gekozen bestanden (de browser), {{ui:Omkeren}} legt de letters van één lettertype van achteren naar voren. Tekststijlen die een geladen lettertype noemen, tekenen ermee. Zie [Tekst tekenen in uw eigen SHX-lettertypen](topic:shx-fonts).

### LIMITS

Hoe groot de tekening bedoeld is.

- `Geef de linkerondergrens op of [AAN/UIT] <huidig>`: een punt, `AAN` of `UIT`.
- `Geef de rechterbovengrens op <huidig>`.

Het raster vult de grenzen, {{cmd:ZOOM}} Alle toont ze, en met de grenzen AAN wordt een punt erbuiten geweigerd (`**Buiten de grenzen`). Eén stap ongedaan maken; opgeslagen in DWG en DXF. Zie [De grenzen van de tekening instellen](topic:drawing-limits).

### AUNITS

Aliassen: `ANGUNITS`. Hoe hoeken worden getoond en getypt.

- `Voer het hoekformaat in [Decimale graden/Graden-minuten-seconden/Landmeterrichtingen] <huidig>`
- `Voer het aantal decimalen in (0 tot 8)`, of voor de andere twee `Voer de precisie in` (0 graden, 2 minuten, 4 seconden, 5 tot 8 decimalen van een seconde).

Eén stap ongedaan maken; opgeslagen in DWG en DXF. Hetzelfde als {{ui:Hoeknotatie}} in {{ui:Huidige instellingen}}. Zie [Richtingen en hoeken typen en tonen](topic:bearings-and-angles).

### APPLOAD

Aliassen: `AP`; of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Applicatie laden…}}. Het dialoogvenster {{ui:Applicaties laden}}: `.lsp`-routines en `.dcl`-dialoogbestanden laden, ze ontladen, ze opnieuw laden uit de geschiedenis, en de Opstartsuite. De opdrachten `(defun c:NAAM …)` van een routine werken daarna als elke andere. Zie [Applicaties laden](topic:load-applications) en [LISP-routines uitvoeren](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Aliassen bewerken…}}) opent uw aliasbestand (regels `ALIAS, *COMMAND`); {{ui:Opslaan}} past het toe. {{cmd:REINIT}} past het opnieuw toe. Zie [Opdrachtaliassen bewerken](topic:command-aliases).

### LISPEDIT

Aliassen: `VLIDE`; of {{ui:Weergave}} › {{ui:Meer}} › {{ui:LISP-editor}}. Opent de LISP-editor, een venster dat naast de tekening open blijft.

- De tekst: regelnummers, het bijbehorende haakje bij de cursor gemarkeerd (rood wanneer het er geen heeft), {{key:Enter}} laat de nieuwe regel inspringen onder het open haakje, {{key:Tab}} typt twee spaties, {{key:Esc}} verlaat de tekst.
- {{ui:Laden in de tekening}} ({{key:Ctrl+Shift+Enter}}): leest elk onderdeel, zoals {{cmd:APPLOAD}} met het bestand doet, en maakt de `c:`-opdrachten ervan. Het bestand verschijnt in de lijst van {{cmd:APPLOAD}}.
- {{ui:Selectie uitvoeren}} ({{key:Ctrl+Enter}}): voert de geselecteerde onderdelen uit, of het onderdeel waar de cursor staat.
- {{ui:Stoppen}}: beëindigt een lopende routine.
- {{ui:Console}}: wat de routine heeft afgedrukt, en elke fout met zijn regel; klik een fout aan om er naartoe te gaan. De tekst wordt één onderdeel op het hoogste niveau per keer uitgevoerd, dus de regel is die van het onderdeel, of binnen het onderdeel de regel die de functie aanroept die in de fout staat.
- {{ui:Nieuw}}, {{ui:Openen}}, {{ui:Opslaan}} ({{key:Ctrl+S}}): een `.lsp`-bestand. De tekst wordt ook in deze browser bewaard, dus het sluiten van het venster verliest niets.
- Naast de tekst: de functies die de routine definieert, de functies die ze aanroept en die deze LISP nog niet heeft, de functies die ze aanroept en die niet in de routine zelf zijn gedefinieerd en ook niet ingebouwd zijn, en de volledige lijsten van wat ingebouwd is en wat niet.

Een tekst met een haakje dat nooit wordt gesloten, of een tekenreeks die nooit eindigt, wordt niet uitgevoerd: de regel wordt genoemd. Er is geen stap-voor-stap-debugger, geen breekpunten en geen watchvenster. Zie [LISP-routines uitvoeren](topic:run-lisp).

### HELP

Aliassen: `?`. Drukt elke opdracht, zijn aliassen en een beschrijving van één regel af in de geschiedenis van de opdrachtregel. Het opent deze help niet: druk op {{key:F1}} of klik {{ui:Help}} daarvoor.

## Prompt Objecten selecteren

Bij elke prompt `Selecteer objecten`: klik objecten aan, teken vensters (van links naar rechts) en kruisvensters (van rechts naar links) met twee klikken, of druk en sleep een lasso ({{key:Space}} terwijl u sleept: venster, kruisvenster, hekje), {{key:Shift}}+klik om te verwijderen, en druk op {{key:Enter}} om af te ronden. U kunt ook `ALL` (alles), `L` (het laatste object), `P` (Vorige: wat de laatste opdracht gebruikte), `F` (Hekje: objecten die een lijn van punten kruist; `U` neemt een punt terug), `W` (Venster), `C` (Kruisvenster), `R` (Verwijdermodus: aanwijzingen halen objecten uit de selectie; de prompt luidt `Objecten verwijderen`) en `A` (Opnieuw toevoegen) typen. `?` toont ze. Ze worden niet in de prompt getoond. {{key:Tab}} over overlappende objecten markeert het volgende; klik om het te kiezen. Zie [Objecten selecteren](topic:select-objects).

### ACCESS

Alias: `AX`. Tekenen zonder zicht. {{cmd:ACCESS}} zet Toegankelijkheid aan of uit (`On`, `Off`) en schakelt snapgeluiden (`Sound`) en spraakopdrachten (`Voice`) om; het zegt eerst de stand. Met Toegankelijkheid aan wordt elke opdracht en elk resultaat via uw schermlezer voorgelezen, en heeft het tekengebied een toetsenbordcursor. Het help-onderwerp "Tekenen zonder zicht" beschrijft de toetsen.

### DESCRIBE

Alias: `DESC`. Zegt wat de tekening bevat: hoeveel objecten, van welke soort, hoe groot, hoeveel lagen, wat is geselecteerd. Leest alleen; verandert niets.

### WHEREAMI

Alias: `WHERE`. Zegt waar de cursor is, in de eenheden van de tekening.

### NEARBY

Zegt wat dicht bij de cursor ligt, het dichtstbijzijnde eerst, elk met zijn afstand en de kant waarop het ligt.

### SAYSEL

Zegt wat is geselecteerd, één zin per object (lengte van de lijn, uiteinden en hoek; straal en middelpunt van een cirkel; tekst zoals hij is geschreven).

### VOICE

Gesproken opdrachten aan of uit zetten. Ze worden op deze computer herkend; waar de browser dat niet kan, blijft spraak uit tenzij u in Instellingen de online dienst van de browser kiest.

### TOUCHCROSSHAIR

Alias: `TCX`. Het verschoven kruisdraad voor tekenen met een vinger, zodat de vingertop het punt dat u kiest niet bedekt. Zolang het aan staat, kiest één vinger op de tekening niets: het verplaatst een kruisdraad dat boven de vinger en naast hem zit. Objectsnaps en tracering volgen het kruisdraad. Een vinger optillen kiest niets en laat het kruisdraad waar het is. Om te kiezen, drukt u op de knop {{ui:Klik}} in de hoek van de tekening, of tikt u met een tweede vinger ergens op de tekening. Houd {{ui:Klik}} ingedrukt terwijl u de andere vinger verplaatst om te slepen (een selectievenster, een lasso, een grip). Een vinger die stil ingedrukt wordt gehouden, of de knop {{ui:Enter}}, is Enter. Twee vingers verschuiven en zoomen zoals voorheen. Nabij de onderrand en de verre zijrand sluit het kruisdraad zich bij de vinger, zodat elk deel van de tekening bereikbaar is. Een pen en een muis kiezen altijd direct.

{{cmd:TOUCHCROSSHAIR}} zegt de stand en vraagt `ON`, `OFF`, `Auto` (alleen aan waar een vinger de enige aanwijzer is, dus uit op een computer met muis), `Distance` (hoe ver het kruisdraad van de vinger staat, 24 tot 240 pixels) of `Side` (`Left`: omhoog en naar links, voor de rechterhand; `Right` voor de linkerhand; de knoppen gaan naar de andere hoek). Dezelfde keuzes staan in Instellingen › CadCraft, en op een apparaat met touchscreen heeft de statusbalk een schakelaar {{ui:Verschoven kruisdraad}}. De keuzes worden in deze browser bewaard.

### WHOHAS

Zegt wie een tekening open heeft. In CadCraft Studio op een computer schrijft het openen van een DWG of DXF een klein vergrendelbestand ernaast (`Plan.dwg.cclock`: wie, sinds wanneer, welke versie), het ververst dat elke minuut terwijl de tekening open is, en verwijdert het wanneer de tekening wordt gesloten. Het openen van een tekening die iemand anders open heeft, zegt wie en sinds wanneer, en biedt {{ui:Openen als alleen-lezen}} (Opslaan vraagt dan om een nieuwe naam), {{ui:Toch openen}} (de andere persoon wordt bij de volgende verversing op de hoogte gebracht) of {{ui:Annuleren}}. Opslaan over een bestand dat iemand anders open heeft, vraagt eerst. Een vergrendeling die vijf minuten niet is ververst, heet verouderd: de andere kopie is gesloten zonder op te slaan, of de computer is in de slaapstand.

{{cmd:WHOHAS}} vraagt `Huidig` (de geopende tekening), `Bestand` (kies er één), `Map` (kies een map: elke tekening erin die ergens open is, wordt getoond), `Pad` (typ een volledig pad) of `Naam` (de naam die anderen zien; uw accountnaam wanneer u bent aangemeld). Studio kan alleen mappen bereiken die u hebt gekozen: voor een tekening die is geopend uit een map die nooit is gekozen, zegt het één keer dat het de tekening niet als open kan noteren; `Map` kiest de map, en vergrendelingen werken daar vanaf dan. De vergrendeling is een notitie voor mensen, geen barrière: een ander programma kan het bestand nog steeds schrijven. In een browser zijn er geen mappen om in te kijken, en het commando zegt dat.


### OVERKILL

Verwijdert dubbele objecten en ordent overlappende lijnen en bogen, voor tekeningen die vol dubbele lijnwerk binnenkomen. `Selecteer objecten om op te schonen`, {{key:Enter}}, daarna nog een {{key:Enter}} om op te schonen met de getoonde instellingen, of er eerst één te wijzigen:

- `Tolerantie`: hoe dicht twee coördinaten bij elkaar moeten liggen om als gelijk te gelden (0,000001 om mee te beginnen; 0 betekent precies gelijk).
- `Negeren`: eigenschappen die tussen twee anders gelijke objecten mogen verschillen. Typ een naam om hem te schakelen: `Kleur`, `LAag`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, of `Geen` / `Alles`. {{key:Enter}} als u klaar bent.
- `Overlap`: aan of uit. Aan: lijnen op één rechte lijn die overlappen worden één lijn (een lijn die in een andere ligt, wordt eenvoudig verwijderd), en bogen op één cirkel die overlappen worden één boog; bogen die een volledige omwenteling sluiten worden een cirkel, en een boog op een cirkel wordt verwijderd.
- `Uiteinden`: aan of uit. Aan: lijnen op één rechte lijn en bogen op één cirkel die alleen uiteinde aan uiteinde raken worden één stuk.

Elk type object wordt op dubbelen gecontroleerd: twee objecten zijn dubbel wanneer hun geometrie binnen de tolerantie gelijk is en hun laag, kleur, lijntype, lijntypeschaal, lijndikte, dikte, transparantie en hoogte overeenkomen (min de eigenschappen die u negeert). Lijnen en open polylijnen komen ook overeen wanneer ze andersom getekend zijn. Het eerste object in de tekenvolgorde blijft en behoudt zijn eigen eigenschappen. De opdracht meldt hoeveel objecten hij heeft gecontroleerd en verwijderd: dubbelen, samengevoegde overlappende stukken, stukken die uiteinde aan uiteinde zijn samengevoegd. Eén {{cmd:UNDO}} neemt alles terug. De instellingen blijven gelden tot u het tekeningvenster sluit.

Het laat met rust: objecten op vergrendelde lagen en verborgen objecten. Het voegt lijnen met een hoogte (Z) niet samen (exacte dubbelen ervan verdwijnen wel), en het raakt segmenten binnen een polylijn niet aan (die worden niet uitgedund), een lijn op een segment van een polylijn, en een gesloten polylijn die andersom is getekend.

### DRAWORDER

Wijzigt welke objecten voorop worden getekend. `Selecteer objecten om opnieuw te ordenen`, {{key:Enter}}, daarna `Boven objecten`, `Onder objecten`, `Voorgrond` of `Achtergrond` ({{key:Enter}} = `Achtergrond`). `Boven objecten` en `Onder objecten` vragen om de referentieobjecten: de selectie komt direct voor het voorste ervan, of direct achter het achterste. De geselecteerde objecten houden hun eigen volgorde onder elkaar. Eén stap ongedaan maken. De volgorde wordt met de tekening in DWG en DXF bewaard, waar het de volgorde is waarin de objecten worden geschreven.

Op het scherm tekent CadCraft gevulde vlakken (effen arceringen, brede polylijnen, maskers) eerst, dan de lijnen, dan de tekst, dus tekst leest altijd over een vulling heen; de tekenvolgorde toont zich tussen gevulde objecten en tussen afbeeldingen. Andere programma's die het bestand openen, tekenen elk object in de opgeslagen volgorde.

### TEXTTOFRONT

Brengt tekst, maatvoeringen en leiders voor alles andere in de open ruimte: `Tekst`, `Maatvoeringen`, `Leiders` of `Alles` ({{key:Enter}} = `Alles`). Eén stap ongedaan maken. Het zegt dat wanneer er geen is, of wanneer ze al vooraan staan.

### HATCHTOBACK

Stuurt elke arcering van de open ruimte achter alles andere, zodat vullingen de lijnen en tekst niet meer bedekken in het opgeslagen bestand. Geen prompts. Eén stap ongedaan maken.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Toont alleen de geselecteerde objecten: al het andere in de open ruimte verdwijnt uit het zicht tot {{cmd:UNISOLATEOBJECTS}}. In tegenstelling tot {{cmd:LAYISO}} werkt het op de objecten die u aanwijst, wat hun lagen ook zijn, en het wijzigt geen laag. Verborgen objecten worden niet getekend, niet aangewezen, niet gesnapt, niet naar toe gezoomd en niet geplot, en opdrachten die `ALL` nemen slaan ze over. Wat u tekent terwijl objecten geïsoleerd zijn, verschijnt zoals gewoonlijk.

Dit geldt alleen voor de sessie: niets erover wordt met de tekening bewaard, het is geen stap ongedaan maken, en het opnieuw openen van de tekening toont alles. Terwijl objecten verborgen zijn, toont de statusbalk een knop met hun aantal; klik erop om ze weer te tonen.

### HIDEOBJECTS

Verbergt de geselecteerde objecten tot {{cmd:UNISOLATEOBJECTS}}. Dezelfde regels als {{cmd:ISOLATEOBJECTS}}: alleen voor de sessie, niet bewaard, geen stap ongedaan maken.

### UNISOLATEOBJECTS

Aliassen: `UNISOLATE`, `UNHIDE`. Toont elk object dat door {{cmd:ISOLATEOBJECTS}} of {{cmd:HIDEOBJECTS}} is verborgen weer, en zegt hoeveel er terugkwamen.

### LAYLOCKFADE

Stelt in hoe objecten op vergrendelde lagen eruitzien en of een klik ze bereikt. Het zegt de huidige stand, en neemt daarna:

- een getal van 0 tot 90: de mate van vervaging in procent (50 om mee te beginnen). 0 zet de vervaging uit.
- `ON` of `OFF`: vervaging aan of uit, met behoud van de mate.
- `Pick`, daarna `Yes` of `No`: mag een klik objecten op vergrendelde lagen selecteren terwijl geen opdracht loopt? `No` (de standaard): ze kunnen helemaal niet worden aangewezen. `Yes`: een klik of een venster selecteert ze zodat {{ui:Eigenschappen}} ze kan tonen; ze kunnen nog steeds niet worden gewijzigd, en de eigen `Selecteer objecten` van een opdracht neemt ze nooit.

Objectsnaps vinden objecten op vergrendelde lagen in beide gevallen. Plots worden nooit vervaagd. Beide instellingen zijn van u, niet van de tekening, en staan ook in {{ui:Instellingen}} onder {{ui:Vergrendelde lagen}}.

### BURST

Ontbindt blokverwijzingen en behoudt wat hun attributen zeggen. `Selecteer blokverwijzingen om uiteen te laten vallen`, {{key:Enter}}: elke verwijzing wordt vervangen door de objecten van het blok, en de waarde van elk zichtbaar attribuut wordt gewone tekst op de eigen laag van dat attribuut (een attribuut op laag 0 komt op de laag van de verwijzing, zoals de andere objecten van het blok op laag 0). Onzichtbare attributen vervallen. Een blok binnen het blok blijft een blokverwijzing. Eén stap ongedaan maken; het meldt de verwijzingen die uiteen zijn gevallen en de attribuutwaarden die tekst zijn geworden.

Het weigert een gekoppelde tekening bij naam (bind die eerst, of kopieer ervan met {{cmd:NCOPY}}), en laat andere geselecteerde objecten met rust. Voor blokverwijzingen geeft {{cmd:EXPLODE}} dezelfde objecten; {{cmd:BURST}} neemt alleen blokverwijzingen en telt de attribuuttekst.

### TXT2MTXT

Alias: `T2M`. Voegt teksten op één regel samen tot één alineatekst. `Selecteer teksten op één regel om samen te voegen`, {{key:Enter}}, daarna `Alinea` (de regels lopen in elkaar over en breken af op de breedte van de breedste regel) of `Regels` (elke tekst blijft een eigen regel); {{key:Enter}} neemt de laatst gebruikte. De regels worden van boven naar beneden geordend, daarna van links naar rechts, langs de richting van de bovenste tekst. De alinea hangt aan de linkerbovenhoek van de bovenste tekst en neemt zijn hoogte, rotatie, stijl, laag en kleur over. Eén stap ongedaan maken.

Tekst die al alineatekst is, lege tekst en andere objecten in de selectie blijven ongemoeid, en de opdracht zegt hoeveel dat er zijn.

### NCOPY

Kopieert objecten uit een blokverwijzing of een gekoppelde tekening in de tekening, zonder iets te ontbinden. `Wijs een object binnen een blokverwijzing of een gekoppelde tekening aan`: het object dat het dichtst bij de aanwijzing ligt, wordt gekopieerd waar het zichtbaar is, hoe vele blokken diep het ook zit; wijs meer aan, en daarna {{key:Enter}}. Daarna `Basispunt om de kopieën te verplaatsen`: {{key:Enter}} laat ze op hun plek, of geef een basispunt en een tweede punt. De hele opdracht is één stap ongedaan maken.

Een kopie neemt de laag over waarop hij zichtbaar is: een object op laag 0 binnen een blok komt op de laag van de verwijzing waarin het zat, en een ByBlock-kleur wordt de kleur van die verwijzing. Vanuit een gekoppelde tekening wordt laag `Plan|Walls` `Plan$0$Walls` (de naam die de koppeling eraan geeft), gemaakt met de kleur, het lijntype en de lijndikte van de gekoppelde laag. De waarde van een attribuut wordt als tekst gekopieerd. Blokverwijzingen op vergrendelde lagen kunnen niet worden aangewezen.

### FLATTEN

Zet de hoogte (Z) en de dikte van de geselecteerde objecten op 0. `Selecteer objecten om plat te maken`, {{key:Enter}}. Het maakt ook de objecten binnen de blokdefinities die de selectie gebruikt plat (en de blokken daarbinnen), zodat elke verwijzing naar die blokken verandert; gekoppelde tekeningen blijven zoals ze zijn. Eén stap ongedaan maken; het meldt hoeveel objecten zijn veranderd, en zegt wanneer geen ervan een hoogte of dikte had.

Wat CadCraft van de derde dimensie in een 2D-tekening bewaart, is: een hoogte op cirkels, bogen, ellipsen, punten, tekst, blokverwijzingen, arceringen, leiders en polylijnen (hun hoogteligging), een hoogte aan elk uiteinde van een lijn, en een dikte op lijnen, cirkels, bogen, polylijnen, punten en tekst, zoals het bestand ze had. {{cmd:FLATTEN}} wist precies die. Het raakt het 3D-model op het 3D-tabblad, 3D-vlakken of volumes niet aan, en een object dat in een gekanteld vlak was getekend, was al in het tekenvlak gebracht toen het bestand werd geopend.

### BREAKLINE

Tekent een lijn met een brekingssymbool, voor een weergave die is ingekort. Het zegt de huidige grootte en verlenging, daarna `Eerste punt van de breeklijn` (of `Grootte` / `Verlenging` om ze eerst te wijzigen), `Tweede punt`, en `Waar het brekingssymbool staat`: klik langs de lijn, of {{key:Enter}} voor het midden. Het resultaat is één polylijn op de huidige laag: de lijn, die elk punt voorbijloopt met de verlenging, met een Z-vormige streep die zo hoog is als de grootte en half zo lang.

`Grootte` en `Verlenging` worden als uw instellingen onthouden (de grootte begint op tweemaal de teksthoogte van de maatvoering maal de totaalschaal van de maatvoering; de verlenging op de helft van de grootte). {{key:Enter}} herhaalt de opdracht.

### AUDIT

Controleert de geopende tekening op beschadigingen en herstelt ze. {{cmd:AUDIT}} kijkt naar elk object in het model, op de bladen en binnen blokken, en naar de lagentabel, en toont wat het vindt per soort:

- getallen die niet eindig zijn of absurd groot zijn;
- objecten zonder afmeting: een lijn zonder lengte, een cirkel zonder straal, een polylijn met één punt, tekst zonder letters of hoogte, een blokverwijzing met schaal nul;
- objecten op een laag die de tekening niet heeft; verwijzingen naar een blok dat er niet is; namen van tekst- en maatvoeringstijlen en lijntypen die niet in de tekening staan;
- blokken die zichzelf bevatten, rechtstreeks of via andere blokken;
- objecten die een id, een sleutel of een bestandsverwijzing delen;
- maatvoeringen zonder de punten waarvandaan ze worden gemeten, en arceringen waarvan de grens geen gesloten contour is.

Daarna vraagt het `Herstellen? [Ja/Nee]`. `Nee` verandert niets. `Ja` herstelt alles in één stap ongedaan maken: wat niet getekend kan worden, wordt verwijderd (slechte getallen, geen afmeting, ontbrekend blok, gebroken maatvoering, een arcering zonder bruikbare grens, de verwijzing die een cirkel van blokken sluit); een ontbrekende laag wordt gemaakt; onbekende stijl- en lijntypenamen gaan terug naar de standaardwaarden; een gedeelde sleutel wordt vervangen. Het meldt hoeveel objecten er zijn verwijderd en hoeveel er zijn hersteld. Dezelfde bevindingen verschijnen in het paneel Problemen, elk met zijn eigen {{ui:Herstellen}}.

Het weigert niets, maar het controleert alleen wat CadCraft zelf tekent: gegevens die voor andere programma's zijn bewaard (3D-volumes, OLE-objecten) worden niet geopend.


### RECOVER

Opent een beschadigde DXF of DWG. {{cmd:RECOVER}} vraagt om het bestand, leest wat gelezen kan worden in plaats van het bestand te weigeren, toont wat is overgeslagen of aangenomen, en controleert en herstelt daarna de tekening zoals {{cmd:AUDIT}} doet met `Ja`.

- DXF: regels die geen deel van een code-en-waarde-paar zijn, worden overgeslagen totdat de paren weer kloppen; een sectie zonder einde wordt gesloten; een bestand dat is afgebroken, wordt gelezen tot de afbreuk; een binair DXF dat is afgebroken, wordt gelezen tot zijn laatste hele waarde. Wanneer een sectie, een blok of een object nog steeds niet gelezen kan worden, wordt het weggelaten en genoemd, en gaat het lezen erachter verder.
- DWG: objecten die hun controles niet halen of niet gedecodeerd kunnen worden, worden weggelaten, en een verloren objectenlijst wordt opnieuw opgebouwd door de objectgegevens te doorlopen.

Het bestand op schijf wordt niet gewijzigd. De herstelde tekening opent als niet-opgeslagen: sla hem op onder een nieuwe naam. Een bestand waaruit helemaal niets gelezen kan worden, wordt geweigerd, met de reden.


### LEGACYTEXT

Zet tekst die is getypt met oude 8-bits Vietnamese lettertypen om naar Unicode. Korte namen `TEXTTOUNICODE` en `VNTEXT`.

Oudere Vietnamese tekeningen bewaren hun tekst als westerse tekens die alleen het lettertype in Vietnamees verandert: TCVN3-tekst in de ABC-lettertypen (`.VnTime`, `.VnArial`, en de lettertypen in hoofdletters waarvan de naam op `H` eindigt), en VNI-tekst in de VNI-lettertypen (`VNI-Times`). CadCraft toont zulke tekst zoals hij leest zodra de tekening open is, via het lettertype van de tekststijl, van het object, of van een deel van alineatekst; het bestand bewaart nog steeds de oude tekens.

{{cmd:LEGACYTEXT}} zegt hoeveel teksten het in elke codering vond en vraagt `Converteren … naar Unicode?`. `Ja` herschrijft elke tekst (model, bladen, blokken, attribuutwaarden en -definities) en geeft de tekststijlen een Unicode-lettertype (Times New Roman, Arial of Courier New, naar de soort van het oude lettertype), in één stap ongedaan maken. Opmaak binnen alineatekst blijft behouden.

Wanneer geen tekst een bekend lettertype gebruikt (een stijl die zijn lettertypenaam kwijt is), vraagt het `Lees geselecteerde teksten als [Tcvn3/Vni/Geen]`: kies de codering en selecteer de teksten. Tekst die al Unicode is, blijft ongemoeid. Tekst van maatvoeringen die de tekst overschrijft en multileidertekst worden niet omgezet.
