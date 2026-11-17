---
title: Model in 3D
summary: Sien die tekening in 3D op die {{ui:3D}}-oortjie en maak eenvoudige soliede daaruit: ekstrudeer (met taps of langs 'n pad), draai om 'n as, druk en trek vlakke, bokse, silinders en wiggies, voeg saam, trek af en snyding, skuif, kopieer, draai en vee hulle uit, en plaas plat 2D-aansigte daarvan op 'n blad.
keywords: 3d, drie d, soliede, solid, 3dsolid, streek, liggaam, acis, sat, sab, soliede uit ander programme, oop 3D-tekening, ekstrudeer, ext, draai, rev, vee, taps, pad, presspull, druk trek, druk en trek, boks, silinder, cyl, wig, 3dorbit, wentel, aansig, vscurrent, visuele styl, geskadu, verborge lyn, draadraamwerk, x-ray, xray, iso, perspektief, parallel, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, aansigkubus, unie, uni, aftrek, su, snyding, in, boolean, kombineer, soliede saamvoeg, viewbase, flatshot, plat aansig, 2d-aansig, tekeningaansig, vooraansig, bo-aansig, syaansig, verborge lyne
from: 13060e71
---

## Wat jy gaan maak

'n Vertrek se grondplan van 1000 × 600 wat ge-ekstrudeer word tot 'n blok 400 hoog, 'n vlak wat opgetrek word, en 'n silinder langsaan — daarna die model saam met die tekening gestoor en uitgevoer vir 'n 3D-kyker of 'n drukker.

Die {{ui:3D}}-oortjie staan langs {{ui:Model}} onder die tekening. Dit wys die modelruimte-tekening wat op die grond lê, in sy laagkleure (lae wat af is of gevries is, bly verborge), en die soliede wat jy maak. Die eerste keer as dit oopmaak, laai die 3D-aansig; daarna skakel dit dadelik.

## Ekstrudeer 'n vorm

1. Op die {{ui:Model}}-oortjie, tik `REC` en druk {{key:Enter}}. Tik `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Klik die {{ui:3D}}-oortjie. Die nutsbalk wys die {{ui:3D}}-groep in plaas van die tekengroepe.
3. Klik {{ui:Ekstrudeer}} (of tik {{cmd:EXTRUDE}}, `EXT`). Klik binne die reghoek, en druk dan {{key:Enter}}.
4. Tik `400` en druk {{key:Enter}}. Die geskiedenis sê "Extruded 1 solid, 400 high" met sy volume.

Geslote polilyne (insluitend bôë), reghoeke, veelhoeke, sirkels en ellipse ekstrudeer; lyne en oop polilyne nie, en die geskiedenis sê hoekom. Jy kan ook eers die vorms op die {{ui:Model}}-oortjie kies en daar `EXTRUDE` tik. In plaas daarvan om die hoogte te tik, kan jy dit klik: die buitelyn volg die wyser op en af. 'n Negatiewe hoogte gaan af. Tik `D` by die hoogte-vraag om die 2D-vorms na ekstrudering uit te vee (`D` weer hou hulle).

By die hoogte-vraag vra `T` (Taps-hoek) vir 'n hoek in grade: die sye buig daarmee in, sodat die bo kleiner is ('n negatiewe hoek maak dit groter); 'n hoek wat te steil is vir die vorm, word geweier. `P` (Pad) vee die vorms langs 'n pad (sien hieronder).

## Draai en vee

- {{cmd:REVOLVE}} (`REV`, of {{ui:Meer}} › {{ui:Draai om 'n as}}): kies geslote vorms, druk {{key:Enter}}, klik dan die twee punte van die as (of tik `X` of `Y` vir die tekening se as deur 0,0), tik dan 'n hoek of druk {{key:Enter}} vir 'n volle draai. Die vorm draai om die as en staan uit die grond op: teken die helfte van 'n vaas se buitelyn langs 'n lyn, en draai dit om die lyn. Die vorm mag die as raak maar nie oorsteek nie. 'n Volle draai het 48 stappe.
- {{cmd:SWEEP}} (of {{ui:Meer}} › {{ui:Vee langs 'n pad}}, of `P` by EXTRUDE se hoogte-vraag): kies geslote vorms (die profiel), druk {{key:Enter}}, klik dan die pad: 'n lyn, polilyn, boog, sirkel of ellips. Die profiel staan dwars oor die pad, met sy middel daarop, en loop langs dit; hoeke word gemiter, en 'n geslote pad maak 'n ring. 'n Klein reghoek wat langs 'n vertrek se buitelyn gevee word, maak 'n plint; 'n sirkel langs 'n polilyn maak 'n pyp.

## Druk en trek 'n vlak

1. Klik {{ui:Druk/trek}} (of tik {{cmd:PRESSPULL}}).
2. Klik die boonste vlak van die blok.
3. Tik `100` en druk {{key:Enter}}, of beweeg die wyser en klik. Die blok is nou 500 hoog.

## Bokse, silinders en wiggies

- {{cmd:BOX}}: klik of tik twee hoeke, dan 'n hoogte.
- {{cmd:CYLINDER}} (`CYL`): die middelpunt, die radius, dan 'n hoogte. Silinders en ge-ekstrudeerde sirkels het 48 sye, glad geskadu.
- {{cmd:WEDGE}} (`WE`): twee hoeke en 'n hoogte. Dit is volle hoogte by die eerste hoek en hel af tot niks by die ander.

Op die 3D-oortjie beland 'n klik op die vlak of rand onder die wyser, anders op die grond, sodat 'n boks op 'n ander soliede kan staan.

## Skuif, kopieer, draai en vee soliede uit

Op die 3D-oortjie kies 'n klik 'n soliede; sleep van links na regs vir 'n venster, van regs na links vir 'n kruising. Dan:

- {{cmd:MOVE}}: klik 'n basispunt en waarheen dit gaan, of tik `<100,0,0>` (of `@100,0`) vir 'n afstand langs X, Y en Z.
- {{cmd:COPY}}: dieselfde, maar die oorspronklike bly.
- {{cmd:ROTATE}}: tik 'n hoek (dit draai om die middel van die keuse, om Z), of klik die middelpunt, 'n beginpunt en die hoek.
- {{cmd:ERASE}} of {{key:Delete}}.

## Voeg soliede saam, trek af en snyding

Open {{ui:Meer}} op die 3D-nutsbalk, of tik die opdrag:

- {{cmd:UNION}} (`UNI`): kies die soliede, druk {{key:Enter}}: hulle word een soliede.
- {{cmd:SUBTRACT}} (`SU`): kies die soliede wat behou moet word en druk {{key:Enter}}, dan die wat weggeneem moet word en druk {{key:Enter}}. 'n Gat deur 'n blok: teken 'n silinder daardeur, trek dan die silinder af.
- {{cmd:INTERSECT}} (`IN`): kies die soliede, druk {{key:Enter}}: net wat hulle almal gemeen het, bly oor.

Die geskiedenis sê die volume van die resultaat. Elkeen is een ontdoen-stap. Die eerste keer wat jy een uitvoer, laai die 3D-booleaanse enjin (ongeveer 0.5 MB; ingesluit by {{ui:Stoor vir vanlyn}}). Net geslote soliede kan gekombineer word: 'n soliede met oop rande (uit 'n ander program se losse 3D-vlakke) word met daardie rede geweier. Die resultaat is een soliede; geboë vlakke bly uit plat facette, soos die silinder was.

Dubbelklik op 'n soliede om sy vlakke en rande op hul eie te wysig; {{key:Esc}} maak dit weer toe. Elke 3D-verandering is een ontdoen-stap in dieselfde geskiedenis as die tekening: {{key:Mod+Z}} ontdoen die laaste ding wat jy op enige oortjie gedoen het.

## Plat aansigte op 'n blad

1. Open 'n bladoortjie (of bly op {{ui:Model}}), tik dan {{cmd:VIEWBASE}} (of `FLATSHOT`).
2. Kies die aansig: {{key:Enter}} vir die voorkant, of `T` (bo), `R` (regs), `L` (links), `BA` (agter), `BO` (onder), `I` (isometries).
3. {{key:Enter}} wys verborge lyne, gestippel; `H` laat hulle weg.
4. {{key:Enter}} neem die skaal wat CadCraft voorstel: op 'n blad die grootste standaardskaal (soos 1:20) waarby die aansig in minder as die helfte van die papier pas. Of tik een: `1:50`, `2:1`.
5. Klik, of tik, waar die aansig se middelpunt moet kom.

Die aansig is een blokverwysing, `VIEW-FRONT-1` en so aan: sigbare rande op laag VIEW-VISIBLE (0.5 mm), verborge op VIEW-HIDDEN (gestippel, 0.25 mm). Skuif, meet en plot dit soos enige ander tekeningwerk. Dit is 'n prent van die soliede soos dit was toe jy dit gemaak het: ná verandering daarvan, vee die aansig uit en voer {{cmd:VIEWBASE}} weer uit. Vir meer aansigte, voer dit een keer per aansig uit.

## Kyk rond

Sleep met die wiel om te wentel, {{key:Shift}} + wielsleep of die regterknop om te pan, en draai die wiel om by die wyser te zoem. Op 'n sensorpaneel draai twee vingers, en 'n knyp zoem. 'n Regsklik sonder sleep is {{key:Enter}}, soos op die ander oortjies. `3DORBIT` laat die linkerknop wentel totdat jy {{key:Enter}} of {{key:Esc}} druk.

- {{ui:Aansigte}} (of {{cmd:VIEW}}): Iso, Bo, Onder, Voor, Agter, Links, Regs, Perspektief of Parallel, en Zoem na alles.
- {{ui:Styl}} (of {{cmd:VSCURRENT}}, `VS`): Geskadu, Geskadu met rande, Verborge lyn, Draadraamwerk of X-straal.

Punte waarop jy klik, val by die soliede vas (hoeke, rande, vlakke) en by die 2D-tekening op die grond: die eindes en middels van sy lyne en bo, en punte daarlangs. Die 2D-lyne word nooit op die 3D-oortjie gekies nie. Wanneer 'n opdrag 2D-voorwerpe vra (EXTRUDE, REVOLVE, SWEEP), kies 'n klik een, 'n sleep van links na regs neem wat heeltemal binne die venster is, en 'n sleep van regs na links neem wat dit kruis, soos op die {{ui:Model}}-oortjie.

'n Aansigkubus sit bo regs op die 3D-oortjie: klik 'n vlak, rand of hoek om van daar af te kyk, sleep dit om te wentel, en die huisknoppie gaan terug na die isometriese aansig. Dit is {{ui:Outomaties}}, die begin van {{ui:Hoekaanwyser}} in [CadCraft-instellings](topic:settings). Op {{ui:Aansigkubus}} wys die {{ui:Model}}-oortjie ook 'n kubus, van bo gesien; klik enige ander kant en die 3D-oortjie maak oop en kyk van daar af. Op {{ui:Asikoon}} wys albei oortjies eerder die asmerker.

## Soliede uit ander programme

'n Tekening van 'n ander program kan 3D-soliede, streke en liggame bevat (3DSOLID, REGION, BODY: die ander program hou hul vorm as ACIS-data). CadCraft wys die wat in modelruimte is op die 3D-oortjie, in hul laag se kleur en met hul eie rande, die eerste keer as jy die oortjie oopmaak; die opdragreël sê dan hoeveel getrek is.

- Hulle wys soos hulle is: jy kan hulle nie kies, skuif of verander nie. Lae wat af is of gevries is, verberg hulle.
- Stoor as DWG skryf elkeen onveranderd terug, in enige DWG-weergawe, sodat die ander program hulle weer kry. DXF-lêers hou hulle nie: CadCraft skryf hulle net in DWG, en sê dit wanneer jy as DXF stoor.
- Getrek: plat vlakke, en vlakke op silinders, kegels, sfere, torusse en eenvoudige spline-oppervlakke, met reguit, ronde en spline-rande. 'n Vlak op enige ander soort oppervlak, of een wat CadCraft nie kan uitlê nie, word nie geraai nie: dit word weggelaat en gelys, byvoorbeeld "Not drawn yet (3D solids): 2 faces on spline-surface (sweepsur), a surface not drawn yet."
- Soliede binne blokke word nog nie gewys nie; "Oor hierdie lêer" tel hulle.

Geboë vlakke word as klein plat stukkies getrek, ongeveer 7.5° uitmekaar, so 'n geboë soliede lyk 'n bietjie veelvlakkig van naby.

## Stoor en voer uit

Stoor hou die 3D-model, in DWG en in DXF. Elke vlak gaan in as 'n 3D-vlak op die laag `CC-3D`, sodat ander programme die soliede wys, en CadCraft hou sy eie presiese kopie in die lêer, wat dit weer lees wanneer jy die tekening oopmaak, met die 3D-aansig soos dit was (kamera, projeksie en visuele styl). 3D-vlakke wat ander programme gemaak het, kom op die 3D-oortjie as losse vlakke, saam as een groep. 'n 3D-vlak binne 'n blok kom een keer in vir elke verwysing na daardie blok in die model, geplaas en gedraai soos die verwysing; in die blok self, en op 'n blad, word 'n 3D-vlak plat as sy buitelyn getrek.

{{ui:Voer uit}} in die 3D-groep laai net die soliede af: GLB vir kykers en die web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) of STL vir 3D-druk, in millimeter ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} vra watter een.

:::note
Die 3D-model is ware grootte. 'n Tekening sonder eenhede tel as millimeter, dus is `1000` een meter. As jy later die tekening se eenhede verander (Eienskappe, met niks gekies nie), word die soliede saam daarmee geskaal sodat hulle op die tekening bly, en die geskiedenis sê so. Een {{key:Mod+Z}} ontdoen die eenheidsverandering en die skaal saam.
:::
