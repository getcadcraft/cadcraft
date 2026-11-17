---
title: Modeller i 3D
summary: Se tegningen i 3D på 3D-fanen og lag enkle volumlegemer av den: ekstruder (med avsmalning eller langs en bane), roter, trykk og trekk flater, bokser, sylindre og kiler, slå sammen, trekk fra og finn felles del av dem, flytt, kopier, roter og slett dem, og plasser flate 2D-visninger av dem på et ark.
keywords: 3d, tre d, volumlegeme, volumlegemer, 3dsolid, region, legeme, acis, sat, sab, volumlegemer fra andre programmer, åpne 3D-tegning, extrude, ext, revolve, rev, sweep, avsmalning, bane, presspull, trykk trekk, push pull, boks, sylinder, cyl, kile, 3dorbit, orbit, visning, vscurrent, visuell stil, skygget, skjult linje, trådramme, røntgen, xray, iso, perspektiv, parallell, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, view cube, union, uni, subtract, su, intersect, in, boolean, kombiner, slå sammen volumlegemer, viewbase, flatshot, flat visning, 2d-visning, tegningsvisning, forfra-visning, ovenfra-visning, sidevisning, skjulte linjer
from: 13060e71
---

## Hva du skal lage

Et rom på 1000 × 600 ekstrudert til en blokk 400 høy, en flate trukket opp, og en sylinder ved siden av. Deretter lagres modellen sammen med tegningen og eksporteres for en 3D-visning eller en skriver.

{{ui:3D}}-fanen ligger ved siden av {{ui:Modell}} under tegningen. Den viser tegningen i modellrommet liggende på bakken i lagfargene sine (lag som er av eller frosset, holdes skjult), og volumlegemene du lager. Første gang fanen åpnes, lastes 3D-visningen. Etter det byttes den øyeblikkelig.

## Ekstruder en form

1. På {{ui:Modell}}-fanen skriver du `REC` og trykker {{key:Enter}}. Skriv `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Klikk på {{ui:3D}}-fanen. Verktøylinjen viser gruppen {{ui:3D}} i stedet for tegningsgruppene.
3. Klikk {{ui:Ekstruder}} (eller skriv {{cmd:EXTRUDE}}, `EXT`). Klikk inne i rektangelet, og trykk deretter {{key:Enter}}.
4. Skriv `400` og trykk {{key:Enter}}. Historikken sier «Ekstrudert 1 volumlegeme, 400 høy» med volumet.

Lukkede polylinjer (også med buer), rektangler, mangekanter, sirkler og ellipser kan ekstruderes. Linjer og åpne polylinjer kan ikke det, og historikken sier hvorfor. Du kan også velge formene på {{ui:Modell}}-fanen først og skrive `EXTRUDE` der. I stedet for å skrive høyden kan du klikke den: konturen følger markøren opp og ned. En negativ høyde går nedover. Skriv `D` ved høydeledeteksten for å slette 2D-formene etter ekstrudering (`D` igjen beholder dem).

Ved høydeledeteksten spør `T` (Avsmalningsvinkel) etter en vinkel i grader. Sidene lener seg inn med den, slik at toppen blir mindre (en negativ vinkel gjør den større). En vinkel som er for bratt for formen, avvises. `P` (Bane) sveiper formene langs en bane i stedet (se nedenfor).

## Roter og sveip

- {{cmd:REVOLVE}} (`REV`, eller {{ui:Mer}} › {{ui:Roter rundt en akse}}): velg lukkede former, trykk {{key:Enter}}, klikk deretter de to endene av aksen (eller skriv `X` eller `Y` for tegningens akse gjennom 0,0), og skriv en vinkel eller trykk {{key:Enter}} for en full runde. Formen dreies om aksen og reiser seg opp fra bakken. Tegn halve konturen av en vase ved siden av en linje, og roter den om linjen. Formen kan berøre aksen, men ikke krysse den. En full runde har 48 trinn.
- {{cmd:SWEEP}} (eller {{ui:Mer}} › {{ui:Sveip langs en bane}}, eller `P` ved høydeledeteksten i EXTRUDE): velg lukkede former (profilet), trykk {{key:Enter}}, og klikk deretter banen: en linje, polylinje, bue, sirkel eller ellipse. Profilet reiser seg på tvers av banen, med midten på den, og løper langs den. Hjørner får gjæring, og en lukket bane gir en ring. Et lite rektangel sveipet langs romkonturen blir en fotlist. En sirkel langs en polylinje blir et rør.

## Trykk og trekk en flate

1. Klikk {{ui:Trykk/trekk}} (eller skriv {{cmd:PRESSPULL}}).
2. Klikk på toppflaten av blokken.
3. Skriv `100` og trykk {{key:Enter}}, eller flytt markøren og klikk. Blokken er nå 500 høy.

## Bokser, sylindre og kiler

- {{cmd:BOX}}: klikk eller skriv to hjørner, og deretter en høyde.
- {{cmd:CYLINDER}} (`CYL`): sentrum, radius, og deretter en høyde. Sylindre og ekstruderte sirkler har 48 sider, med glatt skygge.
- {{cmd:WEDGE}} (`WE`): to hjørner og en høyde. Kilen er full høyde ved første hjørne og skråner ned til null ved det andre.

På 3D-fanen treffer et klikk flaten eller kanten under markøren, ellers bakken. Da kan en boks stå på et annet volumlegeme.

## Flytt, kopier, roter og slett volumlegemer

På 3D-fanen velger et klikk et volumlegeme. Dra fra venstre mot høyre for et vindu, og fra høyre mot venstre for en kryssing. Deretter:

- {{cmd:MOVE}}: klikk et basispunkt og hvor det skal, eller skriv `<100,0,0>` (eller `@100,0`) for en avstand langs X, Y og Z.
- {{cmd:COPY}}: det samme, men originalen blir stående.
- {{cmd:ROTATE}}: skriv en vinkel (den dreier om midten av utvalget, rundt Z), eller klikk sentrum, et startpunkt og vinkelen.
- {{cmd:ERASE}} eller {{key:Delete}}.

## Slå sammen, trekk fra og finn felles del av volumlegemer

Åpne {{ui:Mer}} i 3D-verktøylinjen, eller skriv kommandoen:

- {{cmd:UNION}} (`UNI`): velg volumlegemene, og trykk {{key:Enter}}. De blir ett volumlegeme.
- {{cmd:SUBTRACT}} (`SU`): velg volumlegemene som skal beholdes, og trykk {{key:Enter}}. Velg deretter dem som skal fjernes, og trykk {{key:Enter}}. Et hull gjennom en blokk: tegn en sylinder gjennom den, og trekk deretter fra sylinderen.
- {{cmd:INTERSECT}} (`IN`): velg volumlegemene, og trykk {{key:Enter}}. Bare det de har felles, blir igjen.

Historikken sier volumet av resultatet. Hver kommando er ett steg å angre. Den første du kjører, laster den booleske 3D-motoren (ca. 0.5 MB; inkludert i {{ui:Lagre for frakoblet bruk}}). Bare lukkede volumlegemer kan kombineres. Et volumlegeme med åpne kanter (fra løse 3D-flater i et annet program) avvises, med begrunnelsen. Resultatet er ett volumlegeme. Buede flater består fortsatt av flate fasetter, slik sylinderen gjorde.

Dobbeltklikk på et volumlegeme for å redigere flatene og kantene alene. {{key:Esc}} lukker det igjen. Hver 3D-endring er ett steg å angre, i samme historikk som tegningen: {{key:Mod+Z}} angrer det siste du gjorde på en av fanene.

## Flate visninger på et ark

1. Åpne en arkfane (eller bli på {{ui:Modell}}), og skriv {{cmd:VIEWBASE}} (eller `FLATSHOT`).
2. Velg visningen: {{key:Enter}} for forfra, eller `T` (ovenfra), `R` (høyre), `L` (venstre), `BA` (bakfra), `BO` (nedenfra), `I` (isometrisk).
3. {{key:Enter}} viser skjulte linjer, stiplet. `H` utelater dem.
4. {{key:Enter}} tar målestokken CadCraft foreslår: på et ark den største standardmålestokken (for eksempel 1:20) der visningen får plass på under halvparten av papiret. Eller skriv en: `1:50`, `2:1`.
5. Klikk, eller skriv, hvor visningens senter skal.

Visningen er én blokkreferanse, `VIEW-FRONT-1` og så videre. Synlige kanter ligger på laget VIEW-VISIBLE (0.5 mm), og skjulte på VIEW-HIDDEN (stiplet, 0.25 mm). Flytt den, sett mål på den og plott den som all annen tegning. Den er et bilde av volumlegemene slik de var da du laget den. Etter å ha endret dem, slett visningen og kjør {{cmd:VIEWBASE}} på nytt. For flere visninger kjører du kommandoen én gang per visning.

## Se deg rundt

Dra med hjulet for å kretse rundt, {{key:Shift}} + dra med hjulet, eller høyre knapp, for å panorere. Drei hjulet for å zoome ved markøren. På en styreplate kretser to fingre, og en klype zoomer. Et høyreklikk uten å dra er {{key:Enter}}, som på de andre fanene. 3DORBIT lar venstre knapp kretse til du trykker {{key:Enter}} eller {{key:Esc}}.

- {{ui:Visninger}} (eller {{cmd:VIEW}}): Iso, Topp, Bunn, Forfra, Bakfra, Venstre, Høyre, Perspektiv eller Parallell, og Zoom til alt.
- {{ui:Stil}} (eller {{cmd:VSCURRENT}}, `VS`): Skygget, Skygget med kanter, Skjult linje, Trådramme eller Røntgen.

Punkter du klikker, fester seg til volumlegemene (hjørner, kanter, flater) og til 2D-tegningen på bakken: endene og midtpunktene av linjene og buene, og punkter langs dem. 2D-linjene velges aldri på 3D-fanen. Når en kommando ber om 2D-objekter (EXTRUDE, REVOLVE, SWEEP), velger et klikk ett objekt. En dra fra venstre mot høyre tar det som er helt innenfor vinduet, og en dra fra høyre mot venstre tar det vinduet krysser. Dette er som på {{ui:Modell}}-fanen.

En visningskube sitter øverst til høyre på 3D-fanen. Klikk en flate, kant eller et hjørne for å se derfra, og dra den for å kretse. Husknappen går tilbake til isovisningen. Dette er {{ui:Automatisk}}, starten på {{ui:Hjørneindikator}} i [CadCraft-innstillinger](topic:settings). Satt til {{ui:ViewCube}} viser {{ui:Modell}}-fanen også en kube, sett ovenfra. Et klikk på en annen side åpner 3D-fanen og ser derfra. Satt til {{ui:Akseikon}} viser begge fanene aksemerket i stedet.

## Volumlegemer fra andre programmer

En tegning fra et annet program kan inneholde 3D-volumlegemer, regioner og legemer (3DSOLID, REGION, BODY). Det andre programmet beholder formen som ACIS-data. CadCraft viser de som er i modellrommet, på 3D-fanen, i lagets farge og med sine egne kanter, første gang du åpner fanen. Kommandolinjen sier deretter hvor mange som ble tegnet.

- De vises slik de er: du kan ikke velge, flytte eller endre dem. Lag som er av eller frosset, skjuler dem.
- Lagres som DWG, skrives hvert og ett tilbake uendret, i hvilken som helst DWG-versjon, slik at det andre programmet får dem igjen. DXF-filer beholder dem ikke. CadCraft skriver dem bare til DWG, og sier fra om det når du lagrer som DXF.
- Tegnet: flate flater, og flater på sylindre, kjegler, kuler, torus og enkle splineflater, med rette, runde og splinekanter. En flate på en annen type flate, eller en CadCraft ikke kan legge ut, blir ikke gjettet på. Den utelates og listes, for eksempel «Ikke tegnet ennå (3D-volumlegemer): 2 flater på spline-surface (sweepsur), en flate som ikke er tegnet ennå.»
- Volumlegemer inne i blokker vises ikke ennå. «Om denne filen» teller dem.

Buede flater tegnes som små flate biter, ca. 7.5° fra hverandre. Et buet volumlegeme ser derfor litt fasettert ut på nært hold.

## Lagre og eksporter

Lagring beholder 3D-modellen, både i DWG og i DXF. Hver flate kommer inn som en 3D-flate på laget `CC-3D`, slik at andre programmer viser volumlegemene. CadCraft beholder sin egen eksakte kopi i filen, og leser den tilbake når du åpner tegningen igjen, med 3D-visningen slik den var (kamera, projeksjon og visuell stil). 3D-flater laget av andre programmer kommer inn på 3D-fanen som løse flater, samlet som én gruppe. En 3D-flate inne i en blokk kommer inn én gang for hver referanse til blokken i modellen, plassert og dreid slik referansen er. I selve blokken, og på et ark, tegnes en 3D-flate flatt, som konturen sin.

{{ui:Eksporter}} i 3D-gruppen laster ned volumlegemene alene: GLB for visninger og nettet ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) eller STL for 3D-utskrift, i millimeter ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} spør hvilken du vil ha.

:::note
3D-modellen har virkelig størrelse. En tegning uten enheter regnes som millimeter, så `1000` er én meter. Hvis du endrer tegningens enheter senere (Egenskaper, med ingenting valgt), skaleres volumlegemene med dem, slik at de blir liggende på tegningen. Historikken sier det. Ett {{key:Mod+Z}} angrer endringen av enheter og skaleringen samtidig.
:::
