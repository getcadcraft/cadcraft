---
title: Modellér i 3D
summary: Se tegningen i 3D på fanen 3D og lav enkle massive legemer af den: ekstrudér (med en udtræksvinkel eller langs en bane), drej, skub og træk flader, bokse, cylindre og kiler, sammenføj, subtraher og skær dem, flyt, kopiér, roter og slet dem, og placér flade 2D-visninger af dem på et ark.
keywords: 3d, tre d, solid, solids, massivt legeme, 3dsolid, region, body, acis, sat, sab, massive legemer fra andre programmer, åbn 3D-tegning, extrude, ext, revolve, rev, sweep, udtræksvinkel, bane, presspull, press pull, skub træk, boks, cylinder, cyl, kile, 3dorbit, orbit, visning, vscurrent, visuel stil, skygget, skjult linje, trådmodel, røntgen, xray, iso, perspektiv, parallel, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, view cube, union, uni, subtract, su, intersect, in, boolesk, kombinér, sammenføj massive legemer, viewbase, flatshot, fladt billede, 2d-visning, tegningsvisning, frontvisning, topvisning, sidevisning, skjulte linjer
from: 13060e71
---

## Hvad du laver

Et rumareal på 1000 × 600 ekstruderes til en blok på 400 høj, en flade trækkes op, og en cylinder placeres ved siden af den. Derefter gemmes modellen sammen med tegningen og eksporteres til en 3D-fremviser eller en printer.

Fanen {{ui:3D}} ligger ved siden af {{ui:Model}} under tegningen. Den viser modelrumstegningen liggende på jorden i sine lagfarver (lag der er slukket eller frosset forbliver skjult) og de massive legemer du laver. Første gang fanen åbnes, indlæses 3D-visningen; derefter skifter den med det samme.

## Ekstrudér en form

1. På fanen {{ui:Model}} skriver du `REC` og trykker {{key:Enter}}. Skriv `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Klik på fanen {{ui:3D}}. Værktøjslinjen viser gruppen {{ui:3D}} i stedet for tegningsgrupperne.
3. Klik på {{ui:Ekstruder}} (eller skriv {{cmd:EXTRUDE}}, `EXT`). Klik inde i rektanglet, og tryk derefter {{key:Enter}}.
4. Skriv `400` og tryk {{key:Enter}}. Historikken siger »1 massivt legeme ekstruderet, 400 høj« med dets volumen.

Lukkede polylinjer (buer inklusive), rektangler, polygoner, cirkler og ellipser kan ekstruderes; linjer og åbne polylinjer kan ikke, og historikken forklarer hvorfor. Du kan også vælge formerne på fanen {{ui:Model}} først og skrive `EXTRUDE` dér. I stedet for at skrive højden kan du klikke den: konturen følger markøren op og ned. En negativ højde går nedad. Skriv `D` ved højde-prompten for at slette 2D-formerne efter ekstrudering (`D` igen beholder dem).

Ved højde-prompten beder `T` (Taper angle) om en vinkel i grader: siderne hælder ind med den, så toppen bliver mindre (en negativ vinkel gør den større). En vinkel der er for stejl for formen afvises. `P` (Path) fejer formerne langs en bane i stedet (se nedenfor).

## Drej og sweep

- {{cmd:REVOLVE}} (`REV`, eller {{ui:Mere}} › {{ui:Drej om en akse}}): vælg lukkede former, tryk {{key:Enter}}, klik derefter på aksens to ender (eller skriv `X` eller `Y` for tegningens akse gennem 0,0), og skriv en vinkel, eller tryk {{key:Enter}} for en fuld omgang. Formen drejes om aksen og rejser sig op fra jorden: tegn halvdelen af en vases kontur ved siden af en linje, og drej den om linjen. Formen må berøre aksen, men ikke krydse den. En fuld omgang har 48 trin.
- {{cmd:SWEEP}} (eller {{ui:Mere}} › {{ui:Sweep langs en bane}}, eller `P` ved EXTRUDE's højde-prompt): vælg lukkede former (profilen), tryk {{key:Enter}}, og klik derefter på banen: en linje, polylinje, bue, cirkel eller ellipse. Profilen rejses hen over banen med sin midte på den og løber langs den. Hjørner skæres i geringer, og en lukket bane giver en ring. Et lille rektangel fejet langs et rums kontur bliver til en fodliste; en cirkel langs en polylinje bliver til et rør.

## Skub og træk en flade

1. Klik på {{ui:Skub/træk}} (eller skriv {{cmd:PRESSPULL}}).
2. Klik på blokkens øverste flade.
3. Skriv `100` og tryk {{key:Enter}}, eller flyt markøren og klik. Blokken er nu 500 høj.

## Bokse, cylindre og kiler

- {{cmd:BOX}}: klik eller skriv to hjørner, og derefter en højde.
- {{cmd:CYLINDER}} (`CYL`): centrum, radius, derefter en højde. Cylindre og ekstruderede cirkler har 48 sider, skygget glat.
- {{cmd:WEDGE}} (`WE`): to hjørner og en højde. Den har fuld højde i det første hjørne og skråner ned til ingenting i det andet.

På fanen 3D lander et klik på fladen eller kanten under markøren, ellers på jorden, så en boks kan stå oven på et andet massivt legeme.

## Flyt, kopiér, roter og slet massive legemer

På fanen 3D vælger et klik et massivt legeme. Træk fra venstre mod højre for et vindue, fra højre mod venstre for et kryds. Derefter:

- {{cmd:MOVE}}: klik et basispunkt og hvor det skal hen, eller skriv `<100,0,0>` (eller `@100,0`) for en afstand langs X, Y og Z.
- {{cmd:COPY}}: det samme, men originalen bliver.
- {{cmd:ROTATE}}: skriv en vinkel (den drejer om midten af valget, omkring Z), eller klik centrum, et startpunkt og vinklen.
- {{cmd:ERASE}} eller {{key:Delete}}.

## Sammenføj, subtraher og skær massive legemer

Åbn {{ui:Mere}} i 3D-værktøjslinjen, eller skriv kommandoen:

- {{cmd:UNION}} (`UNI`): vælg legemerne, og tryk {{key:Enter}}: de bliver til ét massivt legeme.
- {{cmd:SUBTRACT}} (`SU`): vælg de legemer der skal beholdes, og tryk {{key:Enter}}. Vælg derefter dem der skal fjernes, og tryk {{key:Enter}}. Et hul gennem en blok: tegn en cylinder gennem den, og subtraher derefter cylinderen.
- {{cmd:INTERSECT}} (`IN`): vælg legemerne, og tryk {{key:Enter}}: kun det som de alle har til fælles, bliver tilbage.

Historikken siger resultatets volumen. Hver er ét fortryd-trin. Den første du kører, indlæser 3D-boolesk-motoren (ca. 0,5 MB; inkluderet i {{ui:Gem til offline brug}}). Kun lukkede legemer kan kombineres: et legeme med åbne kanter (fra et andet programs løse 3D-flader) afvises med årsagen. Resultatet er ét massivt legeme; buede flader består stadig af flade facetter, ligesom cylinderen gjorde.

Dobbeltklik på et massivt legeme for at redigere dets flader og kanter alene; {{key:Esc}} lukker det igen. Hver 3D-ændring er ét fortryd-trin i samme historik som tegningen: {{key:Mod+Z}} fortryder det sidste du gjorde på en af fanerne.

## Flade visninger på et ark

1. Åbn en arkfane (eller bliv på {{ui:Model}}), og skriv derefter {{cmd:VIEWBASE}} (eller `FLATSHOT`).
2. Vælg visningen: {{key:Enter}} for forfra, eller `T` (top), `R` (højre), `L` (venstre), `BA` (bagside), `BO` (bund), `I` (isometrisk).
3. {{key:Enter}} viser skjulte linjer, stiplet. `H` udelader dem.
4. {{key:Enter}} bruger den målestok CadCraft foreslår: på et ark den største standardmålestok (f.eks. 1:20), hvor visningen passer inden for under halvdelen af papiret. Eller skriv en: `1:50`, `2:1`.
5. Klik, eller skriv, hvor visningens centrum skal ligge.

Visningen er én blokreference, `VIEW-FRONT-1` og så videre: synlige kanter på laget VIEW-VISIBLE (0.5 mm), skjulte på VIEW-HIDDEN (stiplet, 0.25 mm). Flyt den, sæt mål på den og plot den som enhver anden tegning. Den er et billede af de massive legemer da du lavede den. Efter at have ændret dem, slet visningen og kør {{cmd:VIEWBASE}} igen. For flere visninger kører du den én gang per visning.

## Kig rundt

Træk med hjulet for at kredse, {{key:Shift}} + træk med hjulet eller med højre knap for at panorere, og drej hjulet for at zoome ved markøren. På en touchpad kredser to fingre, og et nyp zoomer. Et højreklik uden træk er {{key:Enter}}, som på de andre faner. `3DORBIT` lader venstre knap kredse, indtil du trykker {{key:Enter}} eller {{key:Esc}}.

- {{ui:Visninger}} (eller {{cmd:VIEW}}): Isometrisk, Top, Bund, Forside, Bagside, Venstre, Højre, Perspektiv eller Parallel, og Zoom til alt.
- {{ui:Stil}} (eller {{cmd:VSCURRENT}}, `VS`): Skygget, Skygget med kanter, Skjult linje, Trådmodel eller Røntgen.

Punkter du klikker på, fanger til de massive legemer (hjørner, kanter, flader) og til 2D-tegningen på jorden: enderne og midterne af dens linjer og buer, og punkter langs dem. De 2D-linjer vælges aldrig på fanen 3D. Når en kommando beder om 2D-objekter (EXTRUDE, REVOLVE, SWEEP), vælger et klik ét. Et træk fra venstre mod højre tager det der ligger helt inde i vinduet, og et træk fra højre mod venstre tager det det krydser, ligesom på fanen {{ui:Model}}.

En visningskube sidder øverst til højre på fanen 3D: klik på en flade, kant eller et hjørne for at se fra dér, træk den for at kredse, og husknappen går tilbage til isometrisk visning. Det er {{ui:Automatisk}}, starten af {{ui:Hjørneindikator}} i [CadCraft-indstillinger](topic:settings). Sat til {{ui:ViewCube}} viser fanen {{ui:Model}} også en kube, set fra oven; et klik på en anden side åbner fanen 3D og ser fra dér. Sat til {{ui:Akseikon}} viser begge faner i stedet aksemarkøren.

## Massive legemer fra andre programmer

En tegning fra et andet program kan indeholde 3D-legemer, regioner og bodies (3DSOLID, REGION, BODY: det andet program gemmer deres form som ACIS-data). CadCraft viser dem i modelrummet på fanen 3D, i deres lags farve og med deres egne kanter, første gang du åbner fanen. Kommandolinjen siger derefter hvor mange der blev tegnet.

- De vises som de er: du kan ikke vælge, flytte eller ændre dem. Lag der er slukket eller frosset skjuler dem.
- Gemmes som DWG, skrives hver enkelt tilbage uændret, i enhver DWG-version, så det andet program får dem igen. DXF-filer gemmer dem ikke: CadCraft skriver dem kun til DWG og siger det, når du gemmer som DXF.
- Tegnet: flade flader, og flader på cylindre, kegler, kugler, tori og enkle spline-overflader, med lige, runde og spline-kanter. En flade på en anden type overflade, eller en CadCraft ikke kan lægge ud, gættes der ikke på: den udelades og listes, f.eks. »Ikke tegnet endnu (3D-legemer): 2 flader på spline-surface (sweepsur), en overflade der ikke er tegnet endnu.«
- Legemer inde i blokke vises ikke endnu; »Om denne fil« tæller dem.

Buede flader tegnes som små flade stykker, ca. 7.5° fra hinanden, så et buet legeme ser lidt facetteret ud tæt på.

## Gem og eksportér

Gemning bevarer 3D-modellen, både i DWG og i DXF. Hver flade gemmes som en 3D-flade på laget `CC-3D`, så andre programmer viser de massive legemer. CadCraft gemmer sin egen nøjagtige kopi i filen, som den læser tilbage når du åbner tegningen igen, med 3D-visningen som den var (kamera, projektion og visuel stil). 3D-flader lavet af andre programmer kommer ind på fanen 3D som løse flader, samlet i én gruppe. En 3D-flade i en blok kommer ind én gang for hver reference til blokken i modellen, placeret og drejet som referencen er. I selve blokken og på et ark tegnes en 3D-flade fladt, som sin kontur.

{{ui:Eksportér}} i 3D-gruppen downloader kun de massive legemer: GLB til fremvisere og nettet ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) eller STL til 3D-print, i millimeter ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} spørger hvilken.

:::note
3D-modellen har virkelig størrelse. En tegning uden enheder tælles som millimeter, så `1000` er én meter. Hvis du senere ændrer tegningens enheder (Egenskaber, med intet valgt), skaleres de massive legemer med dem, så de bliver på tegningen, og historikken siger det. Ét {{key:Mod+Z}} fortryder ændringen af enheder og skaleringen samtidig.
:::
