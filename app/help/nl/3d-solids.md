---
title: Model in 3D
summary: Bekijk de tekening in 3D op het tabblad 3D en maak er eenvoudige volumes van: extruderen (met een taps toelopende hoek of langs een pad), omwentelen, vlakken duwen en trekken, dozen, cilinders en wiggen, ze samenvoegen, aftrekken en snijden, en daarna verplaatsen, kopiëren, roteren en wissen, en platte 2D-weergaven ervan op een blad plaatsen.
keywords: 3d, drie d, volume, volumes, 3dsolid, gebied, lichaam, acis, sat, sab, volumes uit andere programma's, 3D-tekening openen, extruderen, ext, omwentelen, rev, uitvegen, taps toelopend, pad, presspull, duwen en trekken, doos, cilinder, cyl, wig, 3dorbit, orbit, weergave, vscurrent, visuele stijl, gearceerd, verborgen lijn, draadmodel, röntgen, xray, iso, perspectief, parallel, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, weergavekubus, union, uni, aftrekken, su, snijden, in, boolean, combineren, volumes samenvoegen, viewbase, flatshot, platte weergave, 2D-weergave, tekeningweergave, vooraanzicht, bovenaanzicht, zijaanzicht, verborgen lijnen
from: 13060e71
---

## Wat u gaat maken

Een grondvlak van een ruimte van 1000 × 600, geëxtrudeerd tot een blok van 400 hoog, een vlak omhooggetrokken, en een cilinder ernaast — daarna wordt het model met de tekening opgeslagen en geëxporteerd voor een 3D-viewer of een printer.

Het tabblad {{ui:3D}} staat naast {{ui:Model}} onder de tekening. Het toont de tekening in modelruimte, die op de grond ligt in haar laagkleuren (lagen die uit staan of bevroren zijn blijven verborgen), en de volumes die u maakt. De eerste keer dat het opent, wordt de 3D-weergave geladen; daarna schakelt het direct.

## Een vorm extruderen

1. Typ op het tabblad {{ui:Model}} `REC` en druk op {{key:Enter}}. Typ `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Klik op het tabblad {{ui:3D}}. De werkbalk toont de groep {{ui:3D}} in plaats van de tekengroepen.
3. Klik op {{ui:Extruderen}} (of typ {{cmd:EXTRUDE}}, `EXT`). Klik binnen de rechthoek en druk op {{key:Enter}}.
4. Typ `400` en druk op {{key:Enter}}. De geschiedenis zegt "1 volume geëxtrudeerd, 400 hoog" met het volume erbij.

Gesloten polylijnen (ook met bogen), rechthoeken, veelhoeken, cirkels en ellipsen worden geëxtrudeerd; lijnen en open polylijnen niet, en de geschiedenis zegt waarom. U kunt ook eerst de vormen selecteren op het tabblad {{ui:Model}} en daar `EXTRUDE` typen. In plaats van de hoogte te typen, kunt u er ook op klikken: de contour volgt de cursor omhoog en omlaag. Een negatieve hoogte gaat omlaag. Typ `D` bij de prompt voor de hoogte om de 2D-vormen na het extruderen te verwijderen (`D` nogmaals houdt ze).

Bij de prompt voor de hoogte vraagt `T` (Taps toelopende hoek) om een hoek in graden: de zijkanten helling er met die hoek naar binnen, zodat de bovenkant kleiner is (een negatieve hoek maakt hem groter); een hoek die te steil is voor de vorm wordt geweigerd. `P` (Pad) veegt de vormen in plaats daarvan langs een pad (zie hieronder).

## Omwentelen en uitvegen

- {{cmd:REVOLVE}} (`REV`, of {{ui:Meer}} › {{ui:Omwentelen om een as}}): selecteer gesloten vormen, druk op {{key:Enter}}, klik dan op de twee uiteinden van de as (of typ `X` of `Y` voor de as van de tekening door 0,0), en typ daarna een hoek, of druk op {{key:Enter}} voor een volledige draai. De vorm draait om de as en staat omhoog uit de grond: teken de helft van de contour van een vaas naast een lijn en draai hem om die lijn. De vorm mag de as raken maar niet kruisen. Een volledige draai heeft 48 stappen.
- {{cmd:SWEEP}} (of {{ui:Meer}} › {{ui:Vegen langs een pad}}, of `P` bij de prompt voor de hoogte van EXTRUDE): selecteer gesloten vormen (het profiel), druk op {{key:Enter}}, klik dan op het pad: een lijn, polylijn, boog, cirkel of ellips. Het profiel staat dwars op het pad, met zijn midden erop, en loopt er langs; hoeken worden verstekhoeken, en een gesloten pad maakt een ring. Een kleine rechthoek langs de contour van een ruimte wordt een plint; een cirkel langs een polylijn wordt een buis.

## Een vlak duwen en trekken

1. Klik op {{ui:Duwen/trekken}} (of typ {{cmd:PRESSPULL}}).
2. Klik op het bovenvlak van het blok.
3. Typ `100` en druk op {{key:Enter}}, of verplaats de cursor en klik. Het blok is nu 500 hoog.

## Dozen, cilinders en wiggen

- {{cmd:BOX}}: klik of typ twee hoeken, dan een hoogte.
- {{cmd:CYLINDER}} (`CYL`): het middelpunt, de straal, dan een hoogte. Cilinders en geëxtrudeerde cirkels hebben 48 zijden, met een gladde schaduw.
- {{cmd:WEDGE}} (`WE`): twee hoeken en een hoogte. Bij de eerste hoek is hij volledig hoog, en hij loopt af tot niets bij de andere.

Op het tabblad 3D komt een klik op het vlak of de rand onder de cursor, anders op de grond, zodat een doos op een ander volume kan staan.

## Volumes verplaatsen, kopiëren, roteren en wissen

Op het tabblad 3D selecteert een klik een volume; sleep van links naar rechts voor een venster, van rechts naar links voor een kruisvenster. Daarna:

- {{cmd:MOVE}}: klik een basispunt en waar het naartoe moet, of typ `<100,0,0>` (of `@100,0`) voor een afstand langs X, Y en Z.
- {{cmd:COPY}}: hetzelfde, maar het origineel blijft staan.
- {{cmd:ROTATE}}: typ een hoek (het draait om het midden van de selectie, rond Z), of klik het middelpunt, een startpunt en de hoek.
- {{cmd:ERASE}} of {{key:Delete}}.

## Volumes samenvoegen, aftrekken en snijden

Open {{ui:Meer}} in de 3D-werkbalk, of typ de opdracht:

- {{cmd:UNION}} (`UNI`): selecteer de volumes, druk op {{key:Enter}}: ze worden één volume.
- {{cmd:SUBTRACT}} (`SU`): selecteer de volumes die u wilt houden en druk op {{key:Enter}}, dan de volumes die weg moeten en druk op {{key:Enter}}. Een gat door een blok: teken een cilinder erdoorheen en trek de cilinder af.
- {{cmd:INTERSECT}} (`IN`): selecteer de volumes, druk op {{key:Enter}}: alleen wat ze allemaal gemeen hebben blijft over.

De geschiedenis zegt het volume van het resultaat. Elk is één stap ongedaan te maken. De eerste keer dat u er een uitvoert, laadt de booleaanse 3D-engine (ongeveer 0.5 MB; inbegrepen bij {{ui:Opslaan voor offline gebruik}}). Alleen gesloten volumes kunnen worden gecombineerd: een volume met open randen (van losse 3D-vlakken uit een ander programma) wordt geweigerd, met die reden. Het resultaat is één volume; gebogen vlakken blijven opgebouwd uit platte facetten, zoals de cilinder dat was.

Dubbelklik op een volume om zijn vlakken en randen apart te bewerken; {{key:Esc}} sluit dat weer. Elke 3D-wijziging is één stap ongedaan te maken in dezelfde geschiedenis als de tekening: {{key:Mod+Z}} maakt het laatste ongedaan wat u op beide tabbladen deed.

## Platte weergaven op een blad

1. Open een bladtabblad (of blijf op {{ui:Model}}), typ dan {{cmd:VIEWBASE}} (of `FLATSHOT`).
2. Kies de weergave: {{key:Enter}} voor het vooraanzicht, of `T` (boven), `R` (rechts), `L` (links), `BA` (achter), `BO` (onder), `I` (isometrisch).
3. {{key:Enter}} toont verborgen lijnen, gestreept; `H` laat ze weg.
4. {{key:Enter}} neemt de schaal die CadCraft voorstelt: op een blad de grootste standaardschaal (zoals 1:20) waarbij de weergave past in minder dan de helft van het papier. Of typ er een: `1:50`, `2:1`.
5. Klik, of typ, waar het midden van de weergave komt.

De weergave is één blokverwijzing, `VIEW-FRONT-1` enzovoort: zichtbare randen op laag VIEW-VISIBLE (0.5 mm), verborgen randen op VIEW-HIDDEN (gestreept, 0.25 mm). Verplaats, voorzie van maatvoering en plot haar zoals elke andere tekening. Het is een beeld van de volumes op het moment dat u haar maakte: wis na het wijzigen van de volumes de weergave en voer {{cmd:VIEWBASE}} opnieuw uit. Voor meer weergaven voert u het één keer per weergave uit.

## Rondkijken

Sleep met het wiel om te draaien, {{key:Shift}} + slepen met het wiel of de rechtermuisknop om te verschuiven, en draai aan het wiel om bij de cursor te zoomen. Op een trackpad draaien twee vingers en zoomt knijpen. Een rechtsklik zonder slepen is {{key:Enter}}, zoals op de andere tabbladen. 3DORBIT laat de linkermuisknop draaien tot u op {{key:Enter}} of {{key:Esc}} drukt.

- {{ui:Aanzichten}} (of {{cmd:VIEW}}): Iso, Boven, Onder, Voor, Achter, Links, Rechts, Perspectief of Parallel, en Zoomen naar alles.
- {{ui:Stijl}} (of {{cmd:VSCURRENT}}, `VS`): Gearceerd, Gearceerd met randen, Verborgen lijnen, Draadmodel of Röntgen.

Punten die u aanklikt snappen naar de volumes (hoeken, randen, vlakken) en naar de 2D-tekening op de grond: de uiteinden en middens van de lijnen en bogen, en punten langs die. De 2D-lijnen worden op het tabblad 3D nooit geselecteerd. Wanneer een opdracht om 2D-objecten vraagt (EXTRUDE, REVOLVE, SWEEP), kiest een klik er één, een sleep van links naar rechts neemt wat volledig binnen het venster ligt, en een sleep van rechts naar links neemt wat het kruist, zoals op het tabblad {{ui:Model}}.

Een weergavekubus staat rechtsboven op het tabblad 3D: klik op een vlak, een rand of een hoek om vanaf daar te kijken, sleep hem om te draaien, en de huisknop gaat terug naar de isometrische weergave. Dat is {{ui:Automatisch}}, het begin van {{ui:Hoekindicator}} in [CadCraft-instellingen](topic:settings). Ingesteld op {{ui:Weergavekubus}}, toont het tabblad {{ui:Model}} ook een kubus, die van bovenaf kijkt; klikken op een andere zijde opent het tabblad 3D vanaf die kant. Ingesteld op {{ui:Assenpictogram}}, tonen beide tabbladen in plaats daarvan het assenpictogram.

## Volumes uit andere programma's

Een tekening uit een ander programma kan 3D-volumes, gebieden en lichamen bevatten (3DSOLID, REGION, BODY: het andere programma bewaart hun vorm als ACIS-gegevens). CadCraft toont de volumes in modelruimte op het tabblad 3D, in de kleur van hun laag en met hun eigen randen, de eerste keer dat u het tabblad opent; de opdrachtregel zegt dan hoeveel er zijn getekend.

- Ze worden getoond zoals ze zijn: u kunt ze niet selecteren, verplaatsen of wijzigen. Lagen die uit staan of bevroren zijn, verbergen ze.
- Opslaan als DWG schrijft elk ervan ongewijzigd terug, in elke DWG-versie, zodat het andere programma ze weer krijgt. DXF-bestanden bewaren ze niet: CadCraft schrijft ze alleen in DWG, en meldt dat wanneer u opslaat als DXF.
- Getekend worden: platte vlakken, en vlakken op cilinders, kegels, bollen, torussen en eenvoudige spline-oppervlakken, met rechte, ronde en spline-randen. Een vlak op een ander soort oppervlak, of een vlak dat CadCraft niet kan uitwerken, wordt niet geraden: het wordt weggelaten en vermeld, bijvoorbeeld "Nog niet getekend (3D-volumes): 2 vlakken op spline-surface (sweepsur), een oppervlak dat nog niet getekend is."
- Volumes binnen blokken worden nog niet getoond; "Over dit bestand" telt ze.

Gebogen vlakken worden getekend als kleine platte stukjes, ongeveer 7.5° uit elkaar, dus een gebogen volume ziet er van dichtbij een beetje gefacetteerd uit.

## Opslaan en exporteren

Opslaan bewaart het 3D-model, in DWG en in DXF. Elk vlak gaat erin als een 3D-vlak op laag `CC-3D`, zodat andere programma's de volumes tonen. CadCraft bewaart zijn eigen exacte kopie in het bestand, die het weer inleest wanneer u de tekening opnieuw opent, met de 3D-weergave zoals die was (camera, projectie en visuele stijl). 3D-vlakken van andere programma's komen op het tabblad 3D binnen als losse vlakken, samen als één groep. Een 3D-vlak in een blok komt één keer binnen voor elke verwijzing naar dat blok in het model, geplaatst en gedraaid zoals de verwijzing; in het blok zelf, en op een blad, wordt een 3D-vlak plat getekend, als zijn contour.

{{ui:Exporteren}} in de 3D-groep downloadt alleen de volumes: GLB voor viewers en het web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) of STL voor 3D-printen, in millimeters ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} vraagt welke.

:::note
Het 3D-model heeft ware grootte. Een tekening zonder eenheden telt als millimeters, dus `1000` is één meter. Als u later de eenheden van de tekening wijzigt (Eigenschappen, met niets geselecteerd), worden de volumes mee geschaald zodat ze op de tekening blijven, en de geschiedenis zegt dat. Eén {{key:Mod+Z}} maakt de wijziging van eenheden en het schalen samen ongedaan.
:::
