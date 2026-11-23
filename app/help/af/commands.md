---
title: Opdragverwysing
summary: Elke opdrag in die CadCraft-tekenprogram, met sy aliasse, die vrae wat dit vra, sy opsies en verstekke.
keywords: opdragte, aliasse, opdraglys, oppervlakte, omtrek, measuregeom, lyn, pline, sirkel, boog, knip, afset, dimlinear, blok, voeg in, uitleg, druk, zoem, help, copyclip, cutclip, pasteclip, pasteorig, copybase, dupliseer, selectall
from: 979ffe3b
---

Tik 'n opdragnaam of 'n alias en druk {{key:Enter}} of {{key:Space}}. Hoofletters maak nie saak nie, en 'n voorafgaande `_`, `-`, `.` of `'` word geïgnoreer. Tik `HELP` (of `?`) om 'n kort lys van elke opdrag in die opdragreëlgeskiedenis te druk; druk {{key:F1}} vir hierdie hulp.

Hoe om die prompts te lees: opsies is in vierkantige hakies, en jy kies een deur sy hoofletters te tik (`D` vir Deursnee). 'n Verstek is in punthakies; druk {{key:Enter}} om dit te aanvaar. Waar 'n punt gevra word, kan jy klik of enige van die formate tik in [Koördinaat- en afstandinvoer](topic:coordinate-entry). Waar 'n afstand gevra word, kan jy 'n getal tik of twee punte klik.

Druk {{key:Enter}} waar 'n punt of 'n voorwerp nodig is, en daar geen verstek is nie, beëindig die opdrag. {{key:Esc}} kanselleer dit. Wat 'n opdrag ook al gedoen het, is een ontdoen-stap.

## Teken

### LINE

Aliasse: `L`. Reguit segmente, elkeen sy eie voorwerp.

- `Specify first point` (Enter: begin vanaf die laaste punt wat jy gegee het)
- `Specify next point [Undo]`, herhaal. Ná twee segmente: `[Undo/Close]`.
- `U` neem die laaste segment terug, `C` sluit na die eerste punt en eindig. Enter eindig.

### PLINE

Aliasse: `PL`. Een polilyn van lyn- en boogsegmente.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close sodra daar twee segmente is)
- `A` skakel oor na boë: `Specify endpoint of arc [Line/CLose/Undo]`. Elke boog gaan raaklyn voort aan die segment voor dit. `L` gaan terug na lyne, `CL` sluit met 'n boog.
- Enter eindig; die polilyn bly oop.

### CIRCLE

Aliasse: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` vra `Specify diameter of circle`.
- `2P`: twee eindes van 'n deursnee. `3P`: drie punte op die sirkel.
- `T` (ook die opdrag `TTR`, en {{ui:Teken}} › {{ui:Meer}} › {{ui:Sirkel: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`, dan die tweede, dan die radius (Enter: die laaste een). Die sirkel raak albei voorwerpe (lyne, boë, sirkels, polilynsegmente, ook binne blokke); van die sirkels wat dit doen, die een wat die naaste aan jou keuses raak. "Circle does not exist" wanneer niks pas nie.
- `TTT` (of {{ui:Teken}} › {{ui:Meer}} › {{ui:Sirkel: Tan, Tan, Tan}}): drie voorwerpe; die sirkel wat alle drie raak, die naaste aan jou keuses (drie lyne gee die binnesirkel of 'n buitesirkel, afhangend waar jy kies).

### ARC

Aliasse: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: 'n boog deur drie punte.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Die boog loop teen die klok in van begin na einde.

### RECTANG

Aliasse: `REC`, `RECTANGLE`. 'n Geslote polilyn.

- `Specify first corner point`, `Specify other corner point`. Tik `@width,height` vir die tweede hoek.

### POLYGON

Aliasse: `POL`. 'n Gereelde veelhoek as 'n geslote polilyn.

- `Enter number of sides <4>` (3 tot 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: klik of tik 'n punt; sy afstand bepaal die grootte en sy rigting draai die veelhoek.

### ELLIPSE

Aliasse: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, dan die afstand na die ander as.
- `I` (`Isocircle`, net terwyl {{cmd:ISODRAFT}} aan is): middelpunt, dan radius of `Diameter`: die ellips wat 'n sirkel op die huidige isometriese vlak wys.

### HATCH

Aliasse: `H`, `BH`, `BHATCH`; of {{ui:Arsering}} op die nutsbalk. Druk eers die huidige patroon, skaal en hoek.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, herhaal (`Undo` sodra daar 'n gebied is): elke klik voeg die geslote gebied daarom by, met die geslote vorms binne dit as eilande. Enter maak een arsering van almal.
- `S`: `Select closed objects` (geslote polilyne, sirkels, geslote ellipse).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradiënt): die vul is 'n gradiënt in plaas van 'n patroon. Sien {{cmd:GRADIENT}} vir die vrae.

Sien [Arsering en vulgebiede](topic:hatch).

### GRADIENT

Aliasse: `GD`. Vul 'n gebied met 'n gradiënt van een of twee kleure. Dit vra eers die gradiënt, dan gaan dit voort soos {{cmd:HATCH}} (`Pick internal point`, `S` vir geslote voorwerpe, {{key:Enter}} om klaar te maak).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, herhaal; dit druk die gradiënt soos dit nou is elke keer.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, of een van hulle omgekeer (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Die eerste letters is genoeg.
- `O`: een kleur, dan sy tint van 0 tot 1 (0 verdonker tot swart, 0.5 is die kleur self, 1 tint dit tot wit). `TW`: die eerste en die tweede kleur. 'n Kleur is 'n getal van 1 tot 255, drie getalle soos `255,128,0`, of `#rrggbb`.
- `A`: die hoek waarteen die gradiënt loop. `C`: gesentreer Ja of Nee (Nee skuif die middel van die gradiënt na een kant).
- Dit weier 'n kleur of 'n tipe wat dit nie ken nie, en 'n tint buite 0 tot 1.

{{cmd:HATCHEDIT}} `G` en Eienskappe (Gradiënt) verander 'n gradiënt later, of maak enige arsering een. 'n Gradiënt word op die skerm geteken en gedruk. DWG 2004 en later hou dit as 'n werklike gradiëntarsering; DXF 2000 en DWG 2000 hou dit vir CadCraft, en ander programme sien 'n soliede vul in die eerste kleur.

### HATCHGENERATEBOUNDARY

Aliasse: `HGB`. Maak die grens weer uit 'n arsering wat dit verloor het. `Select hatches` (of kies hulle eerste), dan `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Elke lus van die arsering word 'n geslote polilyn op die arsering se laag; die nuwe polilyne bly gekies. 'n Geboë rand kom terug as die kort reguit stukke wat die arsering hou.
- Met Yes volg die arsering sy nuwe grens, soos 'n arsering wat met {{cmd:HATCH}} gemaak is. Een ontdoen-stap.
- Dit sê so wanneer geen arsering gekies is nie.

### POINT

Aliasse: `PO`; of {{ui:Teken}} › {{ui:Meer}} › {{ui:Punt}}. Puntvoorwerpe, een per klik, tot Enter.

- `Specify a point`

### XLINE

Aliasse: `XL`; of {{ui:Teken}} › {{ui:Meer}} › {{ui:Konstruksielyn}}. Konstruksielyne, eindeloos aan albei kante. Sien [Konstruksielyne en strale](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, dan `Specify through point` vir elke lyn, tot Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` vra eers `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, dan `Specify angle end point` vir elke lyn.
- `O`: `Specify offset distance [Through] <Through>`, dan `Select a line object` en `Specify side to offset` (of `Specify through point`) vir elke lyn.

### RAY

Geen aliasse nie; of {{ui:Teken}} › {{ui:Meer}} › {{ui:Straal}}. `Specify start point`, dan `Specify through point` vir elke straal, tot Enter.

### TEXT

Aliasse: `DT`, `DTEXT`; of {{ui:Teks}} op die nutsbalk. Enkelreël-teks; elke reël is sy eie voorwerp.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, dan `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, herhaal: elke Enter begin die volgende reël onder. Enter op 'n leë reël eindig. {{key:Space}} tik hier 'n spasie.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} plaas merkers op 'n lyn, boog, sirkel, polilyn, spline of ellips wat dit in gelyke dele verdeel. Kies die voorwerp, dan gee die aantal dele (2 tot 32767). 'n Oop voorwerp kry een merker minder as dele; 'n geslote een kry ook 'n merker by sy begin. Die voorwerp self word nie gesny nie. Die merkers is punte; `Block` vra eerder vir 'n blok van hierdie tekening en of dit draai om die voorwerp te volg. Lengtes langs splines en ellipse word langs kort koorde gemeet. Dit weier teks, arserings en ander voorwerpe wat geen lengte het nie.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} plaas 'n merker elke gegewe lengte langs 'n lyn, boog, sirkel, polilyn, spline of ellips, en tel vanaf die einde naaste aan waar jy gekies het (by 'n geslote voorwerp: vanaf sy begin). Gee die lengte deur dit te tik of met twee punte. Die verre einde van 'n oop voorwerp kry geen merker nie. `Block` plaas 'n blok by elke merker in plaas van 'n punt. Dit weier 'n lengte van 0, een wat langer is as die voorwerp, en een wat meer as 32767 merkers sou maak.

### BOUNDARY

Aliasse: `BO`, `BPOLY`. {{cmd:BOUNDARY}} maak 'n geslote polilyn rondom die gebied wat die punt wat jy kies hou, uit enige lyne, boë, sirkels, polilyne en krommes wat dit op die skerm omlyn. Stukke wat op 'n boog of sirkel lê, kom terug as boogsegmente; stukke van ellipse en splines kom terug as kort reguit segmente. Met `Islands` aan (die beginstelling) kry elke geslote gebied binne dit ook sy eie polilyn. Hou punte kies; Enter eindig. Die voorwerpe wat die gebied omlyn bly soos hulle is. Dit sê so wanneer geen geslote gebied die punt hou nie.

### BLEND

{{cmd:BLEND}} teken 'n spline tussen die eindes van twee oop krommes. Kies elke kromme naby die einde om saam te voeg. `CONtinuity` kies `Tangent` (die spline vertrek en kom aan langs albei krommes) of `Smooth` (dit buig ook soos hulle aan die eindes buig); die keuse word vir die sessie gehou. Die twee krommes word nie verander nie. Dit weier geslote voorwerpe en twee eindes wat reeds ontmoet.

### REGION

Alias: `REG`. {{cmd:REGION}} maak geslote voorwerpe in streke: plat gebiede wat jy kan saamvoeg, sny en meet. Kies sirkels, geslote polilyne, geslote ellipse of geslote splines, of lyne, boë en oop polilyne wat 'n lus end-tot-end sluit; elke lus word een streek en vervang die voorwerpe waaruit dit gekom het. Boë bly boë; ellipse en splines word kort reguit segmente. Wat nie gesluit is nie en geen lus sluit nie, bly soos dit is, en dit sê hoeveel. In die tekening is 'n streek een of meer geslote polilyne wat as 'n naamlose groep bymekaar gehou word, so 'n klik kies die hele streek en 'n afskrif is 'n streek op sy eie; ander programme wat die lêer oopmaak, sien geslote polilyne.

Met streke in die tekening werk {{cmd:UNION}}, {{cmd:SUBTRACT}} en {{cmd:INTERSECT}} op die 2D-oortjie op streke: `UNION` voeg die gekose streke in een saam (streke wat uitmekaar is, word een streek van verskeie omtrekke), `SUBTRACT` vra eers vir die streke om van af te trek en dan die wat weggeneem word ('n gat bly deel van die streek), `INTERSECT` hou die gebied wat hulle almal deel. Elkeen sê die oppervlakte van die resultaat en is een ontdoen-stap. Hulle weier wanneer niks sou oorbly nie of niks gedeel word nie. Op die 3D-oortjie, en in 'n tekening sonder streke, werk dieselfde opdragte soos voorheen op soliede liggame.

## Wysig

### TEXTEDIT

Aliasse: `ED`, `DDEDIT`; of dubbelklik 'n teks. `Select a text to edit`, herhaal tot {{key:Enter}}: elkeen maak in dieselfde boks oop. Begin op 'n gekose of dubbelgeklikte teks, redigeer dit een en eindig.

### MTEXT

Aliasse: `MT`, `T`; of {{ui:Paragraaf}} op die nutsbalk. Paragraafteks wat by 'n breedte omslaan, op die plek getik.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: die breedte oor die twee hoeke is waar die teks omslaan. `H` vra `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` en slaan die tweede hoek oor.
- Dan open 'n boks op die tekening: tik, {{key:Enter}} vir 'n nuwe paragraaf, {{key:Mod+Enter}} of 'n klik buite om klaar te maak, {{key:Esc}} om te kanselleer. Die balk daarvan stel hoogte, reëlafstand, breedte en belyning. Sien [Voeg teks en etikette by](topic:text#write-a-note-that-wraps).

### ERASE

Aliasse: `E`, `DELETE`; of druk {{key:Delete}} met voorwerpe gekies.

- `Select objects` (oorgeslaan wanneer voorwerpe reeds gekies is)

### MOVE

Aliasse: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, getik as `dx,dy`.

### COPY

Aliasse: `CO`, `CP`. Kopieë soveel keer as jy punte gee.

`Array` by die tweede-punt-prompt maak in een slag 'n ry: gee die aantal items (die oorspronklike tel as een), dan die punt waar die eerste kopie gaan; die ander volg teen dieselfde spasiëring. `Fit` maak daardie punt die plek van die laaste kopie, met die ander eweredig tussenin.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, herhaal tot Enter. `U` neem die laaste kopie terug.

### ROTATE

Aliasse: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: grade, teen die klok in positief; of klik 'n punt om na dit toe te draai.

### SCALE

Aliasse: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: tik 'n faktor soos `0.5` of `2`. 'n Geklikte punt gee sy afstand van die basispunt as die faktor.

### MIRROR

Aliasse: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Aliasse: `AL`; of {{ui:Wysig}} › {{ui:Meer}} › {{ui:Belyn}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Met twee pare: `Scale objects based on alignment points? [Yes/No] <N>`

Sien [Belyn voorwerpe](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (of die seleksie), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` vra vir die punt. Die seleksie bly.

### DISTRIBUTE

- `Select objects` (ten minste drie), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Die buitenste twee bly; die seleksie bly.

### ALIGNPANEL

Aliasse: `ALP`; of {{ui:Wysig}} › {{ui:Meer}} › {{ui:Belyn en versprei}}. Maak die paneel oop wat ALIGNTO en DISTRIBUTE met klikke uitvoer.

### LASER

Aliasse: `LASERCUT`; of {{ui:Aansig}} › {{ui:Meer}} › {{ui:Laser…}}. Maak die Laser-paneel oor die tekening oop: wat elke laag doen (sny, krap, graveer, vul, prent), die voorskou, GRBL G-kode om te stoor, en raam en stuur oor Web Serial. Sien [Stuur 'n tekening na 'n laser](topic:laser-cutting).

### STRETCH

Aliasse: `S`; of {{ui:Rek}}. `Select objects to stretch`: sleep kruisvensters (of tik `C`) oor die eindes om te skuif. `Specify base point [Displacement]`, `Specify second point`. Punte binne die vensters skuif: lyneindes, polilynhoekpunte (boogsegmente hou hul hoogte), maatlynpunte; sirkels, ellipse, teks, punte en blokke skuif heel wanneer hul middelpunt of invoegpunt binne is. 'n Seleksie wat voor die opdrag gemaak is, hou die kruisvensters (en lassos) wat dit gemaak het, sodat hulle dieselfde manier rek. Sonder 'n venster skuif die voorwerpe heel.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliasse: `AR`; of {{ui:Skikking}}. `Select objects`, dan `Enter array type [Rectangular/POlar] <Rectangular>` (slegs ARRAY).

- Rectangular begin by 4 kolomme × 3 rye, gespasieer op 1.5 keer die voorwerpe se grootte, as 'n voorskou gewys. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` vra kolomme en rye, `S` die afstande tussen kolomme en tussen rye (negatief gaan links of af), `COL` en `R` elk een rigting.
- Polar vra `Specify center point of array`, begin by 6 items heeltemal rondom, gedraai. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` items, `F` die hoek om te vul (+ teen die klok in, − met die klok mee), `ROT` Ja of Nee.
- {{key:Enter}} (eXit) maak die kopieë, as gewone voorwerpe. Een ontdoen-stap.
- `AS` (ASsociative) skakel tussen gewone kopieë en 'n skikking wat redigeerbaar bly: een voorwerp wat jy later met {{cmd:ARRAYEDIT}} verander, deur sy handvatpunte of in Eienskappe. Die keuse word onthou ({{cmd:ARRAYASSOCIATIVITY}}); dit begin met gewone kopieë.

### ARRAYPATH

Kopieë langs 'n kromme. `Select objects`, dan `Select path curve`: 'n lyn, boog, sirkel, ellips, polilyn of spline (nie een van die voorwerpe wat gerangskik word nie). Die pad begin by sy einde wat die voorwerpe die naaste is, en die eerste item is die voorwerpe waar hulle is.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, met 'n voorskou. `M`: `Divide` versprei die items eweredig oor die hele pad, `Measure` plaas een elke so ver langs dit. `I`: die aantal items (met Measure beteken 0 soveel as wat pas; 'n getal verby die einde van die pad word gehou tot wat pas). `SP`: die afstand tussen items langs die pad (skakel na Measure). `AL`: Ja draai elke item om die pad te volg, Nee hou hulle regop.
- `AS` soos in {{cmd:ARRAY}}. Met dit aan hou die skikking sy eie afskrif van die pad se vorm: die kromme later wysig, skuif die items nie.
- Dit weier 'n pad wat nie 'n kromme is nie, en een item.

### ARRAYEDIT

Verander 'n skikking wat met ASsociative gemaak is. `Select array` (of kies dit eers). Dit druk wat die skikking nou is, en vra dan tot {{key:Enter}}:

- Rectangular: `COL` kolomme en hul spasiëring, `R` rye en hul spasiëring, `A` die hoek waarteen die kolomme loop.
- Polar: `I` items, `F` die vulhoek, `ROT` draai items Ja of Nee.
- Path: `M` Divide of Measure, `I` items, `SP` spasiëring, `AL` belyn met die pad.
- `S` (Source) maak die voorwerpe oop wat die skikking herhaal, op hul eie, soos die blokredigeerder. Teken en wysig daar; {{cmd:ARRAYCLOSE}} stoor of gooi weg, en elke item volg.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, dan klik die items om te vervang, {{key:Enter}}. Daardie items wys die vervanging in plaas daarvan; die vervangingsvoorwerpe verlaat die tekening en leef in die skikking. `RES` (RESet) wys die bronvoorwerpe weer in elke item.
- Elke verandering is een ontdoen-stap. Dit weier gewone kopieë, 'n gewone blokverwysing en 'n skikking op 'n gesluite laag.

Dieselfde getalle is in Eienskappe onder Skikking, en die skikking het handvatpunte: sy basispunt skuif dit, die handvatpunt by die tweede item stel die spasiëring, die handvatpunt verby die laaste item stel die telling (polar: die tweede item stel hoeveel items, die laaste item die vulhoek). {{cmd:EXPLODE}} draai 'n skikking terug in gewone kopieë.

### ARRAYCLOSE

Beëindig {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Dit sê so wanneer geen skikking se bronvoorwerpe oop is nie. {{cmd:BCLOSE}} doen dieselfde.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Stel waarmee {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR en {{cmd:ARRAYPATH}} begin; hul opsie `AS` verander dieselfde instelling. Onthou in hierdie blaaier.

### OFFSET

Aliasse: `O`. Lyne, boë, sirkels en polilyne.

Waar 'n polilyn uitwaarts beweeg en sy reguit segmente by 'n hoek uitmekaar kom, bepaal {{cmd:OFFSETGAPTYPE}} hoe die gaping gesluit word.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, dan `Specify point on side to offset` (of, met Through, `Specify through point`), herhaal tot Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: hoe {{cmd:OFFSET}} die gapings by die buitenste hoeke van 'n polilyn sluit. `0` verleng die segmente tot hulle ontmoet (die beginstelling), `1` voeg hulle met 'n boog om die ou hoek, `2` met 'n reguit snit. Binnehoeke en boogsegmente word nie geraak nie. Vir hierdie sessie onthou.

### EXTRIM

{{cmd:EXTRIM}} knip alles aan een kant van 'n rand. Kies die snykant ('n lyn, boog, sirkel, polilyn, ellips, spline of konstruksielyn), dan kies 'n punt aan die kant om skoon te maak: elke lyn, boog, sirkel, polilyn en konstruksielyn wat die rand kruis, verloor sy deel aan daardie kant, waar dit by die rand begin. Terwyl jy die kant kies, volg die stukke wat sou verdwyn die wyser. Vir 'n geslote rand is die kante binne en buite. Voorwerpe wat net die rand raak, en teks, arserings, splines en ellipse wat dit kruis, bly soos hulle is. Een ontdoen-stap.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: hoe {{cmd:TRIM}} en {{cmd:EXTEND}} begin. `1` Vinnig: elke voorwerp is 'n snykant of grens. `0` Standaard: hulle vra eers vir die kante. Ook `(setvar "TRIMEXTENDMODE" 0)` in LISP.

### TRIM

Aliasse: `TR`. Druk eers `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. In Vinnige modus is elke sigbare voorwerp 'n snykant, en 'n voorwerp wat niks kruis nie, word uitgevee; in Standaard modus vra dit eers `Select cutting edges (Enter = every object)` en knip net daarby.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, herhaal: klik die stuk om te verwyder (dit wys grys en gestippel terwyl die wyser daarop rus), sleep 'n pad deur verskeie stukke (almal gaan in een stap), of klik twee leë plekke vir 'n heining tussen hulle. {{key:Shift}} verleng eerder. `T` kies snykante (Standaard modus), `F` vra heiningpunte, `C` twee vensterhoeke (stukke wat gedeeltelik binne is, gaan), `O` vra `Enter a trim mode option [Quick/Standard]`, `E` vra `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` vee voorwerpe uit wat jy kies, `U` ontdoen die laaste keuse of sleep. Enter eindig. Sien [Knip en verleng](topic:trim-and-extend).

- 'n Klik op 'n arsering knip die arsering: die snykante verdeel die gearseerde gebied, en die stuk wat jy geklik het, word weggeneem (geen getekende omtrek bly waar dit was nie). Die arsering hou sy patroon of gradiënt; 'n arsering wat aan sy grens geskakel was, is daarna nie meer geskakel nie, omdat dit dit nie meer vul nie. Dit sê so wanneer geen snykant die arsering daar verdeel nie, wanneer die klik buite die arsering is, en wanneer niks sou oorbly nie (gebruik {{cmd:ERASE}}). 'n Gesleepte pad of heining knip nie arserings nie.

### EXTEND

Aliasse: `EX`. Dieselfde as TRIM omgekeerd: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. 'n Klik verleng die einde naaste daaraan tot die volgende grens; 'n gesleepte pad of heining verleng elke voorwerp wat dit kruis; {{key:Shift}} knip. `B` kies grensrande (Standaard modus). Modus en Rand word met TRIM gedeel.

### LINKVIEWS

Aliasse: `SYNCVIEWS`; of {{ui:Aansig}} › {{ui:Meer}} › {{ui:Skakel die ruite se aansigte}}, of die skakelikoon op die tekening-oortjies. `Link the panes' views [ON/OFF]` (Enter neem die ander toestand): terwyl dit aan is, skuif of zoem 'n pan in die aktiewe ruit elke ruit wat dieselfde soort ruimte wys. Sien [Verdeel die skerm](topic:split-screen).

### OPENIN3D

Geen aliasse nie; of {{ui:Aansig}} › {{ui:Meer}} › {{ui:Maak in ModelCraft oop}} waar die 3D-modelleringsprogram 'n oorhandigde tekening neem. Maak dit daar oop in 'n nuwe oortjie, as 'n DWG (niks word opgelaai nie). As die blaaier die oortjie blokkeer, sê dit so.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: wat druk en sleep op 'n leë plek teken. Dieselfde as Instellings › CadCraft › Sleep om te kies. Sien [Lasso-seleksie](topic:lasso-selection).

### FILLET

Aliasse: `F`. Lyne, boë, sirkels en polilyne. Druk eers `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` vra `Specify fillet radius <last>`. `T` vra `Enter Trim mode option [Trim/No trim]`: met No trim bly die voorwerpe soos hulle is en word net die boog bygevoeg.
  - `M` hou die opdrag aan vir meer hoeke tot {{key:Enter}}; `U` neem die laaste hoek terug sonder om die opdrag te verlaat.
  - `P` vra `Select 2D polyline [Radius]` en rond elke hoek af waar twee reguit segmente ontmoet. Afronding wat dit reeds het, word deur die nuwe radius vervang; radius 0 haal hulle uit. Hoeke waarvan die sye te kort is vir die radius, word gelaat en getel.
- `Select second object or shift-select to apply corner [Radius]`. Hou {{key:Shift}} vas terwyl jy klik vir 'n skerp hoek, wat ook al die radius is.

Klik elke voorwerp op die deel wat jy wil hou. Twee lyne wat nie ontmoet nie, word verleng. Twee ewewydige lyne kry 'n halwe sirkel oor die gaping, aan die einde van die eerste lyn naaste aan jou klik. 'n Sirkel word nooit gesny nie. Twee segmente van een polilyn langs mekaar kry die boog binne die polilyn; 'n polilyn en 'n ander voorwerp werk wanneer die snit op die polilyn se eerste of laaste segment land.

### CHAMFER

Aliasse: `CHA`. Lyne en die reguit segmente van polilyne. Druk eers die huidige afstande (of lengte en hoek).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` vra `Specify first chamfer distance <last>` en `Specify second chamfer distance <the first>`: die eerste word van die eerste lyn wat jy kies gesny, die tweede van die ander.
  - `A` vra `Specify chamfer length on the first line` en `Specify chamfer angle from the first line`.
  - `E` (mEthod) kies watter van die twee die volgende skuinsing gebruik. `T`, `M`, `U` en `P` werk soos in {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+klik maak 'n skerp hoek.

'n Afstand langer as die lyn word geweier (`Distance is too large.`).

### BREAK en BREAKATPOINT

Aliasse: `BR`. `Select object` (waar jy klik is die eerste punt), `Specify second break point [First point]`; `F` vra `Specify first break point` en `Specify second break point`. Die deel tussenin gaan weg; op 'n sirkel, teen die klok in vanaf die eerste punt. BREAKATPOINT vra `Specify break point` en verdeel die voorwerp daar in twee (nie 'n sirkel nie).

### LENGTHEN

Aliasse: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: 'n keuse druk `Current length` (en 'n boog se ingeslote hoek) en vra weer. `DE` vra `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` sleep. Dan `Select an object to change [Undo]`, herhaal: die einde naaste aan die klik skuif. Lyne, boë en oop polilyne.

### JOIN

Aliasse: `J`. `Select objects to join`. Lyne, boë en oop polilyne wat end-tot-end ontmoet word polilyne (geslote wanneer die ketting sluit); lyne op een lyn word een lyn; boë van een sirkel word een boog of die sirkel. Die geskiedenis sê hoeveel voorwerpe saamgevoeg is en hoeveel nie.

### MATCHPROP

Aliasse: `MA`, `PAINTER`. `Select source object`, dan `Select destination objects [Settings]` en {{key:Enter}}. Kopieer laag en kleur, en tussen voorwerpe van dieselfde soort die teksHoogte en -breedte, die maatgroottes, of die arseringspatroon. `S` vra `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, herhaal tot {{key:Enter}}; die keuse word vir die sessie onthou.

### EXPLODE

Aliasse: `X`. Polilyne word lyne en boë, blokverwysings word hul voorwerpe, maatlyne word lyne, pylpunte en teks. 'n Skikking wat redigeerbaar bly ({{cmd:ARRAYEDIT}}) word gewone kopieë van sy voorwerpe.

- `Select objects`

### GROUP

Alias: `G`. {{cmd:GROUP}} gee die gekose voorwerpe 'n naam wat hulle deel. Kies die voorwerpe, tik dan 'n naam (geen spasies nie; `?` lys die groepe; Enter maak 'n naamlose groep) en, vir 'n benoemde groep, 'n opsionele beskrywing. Van dan af kies 'n klik op een van hulle, of 'n venster wat een neem, hulle almal, so hulle skuif, kopieer en word saam uitgevee; elke voorwerp is steeds sy eie voorwerp. 'n Voorwerp kan in verskeie groepe wees. 'n Afskrif van 'n hele groep is 'n nuwe naamlose groep; 'n afskrif van een lid op sy eie voeg by die groep. Groepe behoort aan die ruimte waarin hulle gemaak is (die model of 'n blad). Hulle word bewaar wanneer jy as DWG of DXF stoor en die lêer weer in CadCraft oopmaak; DXF 2000-lêers dra hulle ook as groepvoorwerpe vir ander programme, en groepe wat in 'n ander program gemaak is, word gelees wanneer 'n DXF of DWG oopgemaak word.

### UNGROUP

{{cmd:UNGROUP}} haal groepe uitmekaar: kies voorwerpe van die groepe (elke groep waarin hulle is, word uitmekaar gehaal) of tik `Name` en die groep se naam. Die voorwerpe bly in die tekening. Een ontdoen-stap bring die groepe terug.

### GROUPEDIT

{{cmd:GROUPEDIT}} verander een groep. Kies een van sy voorwerpe, of `Name` en sy naam; 'n groep wat reeds gekies is, word soos dit is geneem. Dan: `Add` voorwerpe (een op 'n slag gekies, nie groep vir groep nie), `Remove` voorwerpe, `REName` die groep, verander sy `Description`, of stel `Selectable` (of 'n klik op een voorwerp die hele groep kies). `eXit` of Enter eindig. 'n Groep sonder voorwerpe oor is weg.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: met `1` (die beginstelling) kies 'n klik of venster op 'n gegroepeerde voorwerp sy hele groep; met `0` enkele voorwerpe, sodat jy een lid kan wysig. Vir hierdie sessie onthou.

## Knipbord

CadCraft se eie knipbord: dit werk binne 'n tekening, tussen tekeninge en tussen CadCraft-oortjies in hierdie blaaier. Sien [Kopieer, plak en dupliseer](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, of {{ui:Kopieer}} in die {{ui:Wysig}}-groep. Kopieer voorwerpe na die knipbord, met die blokke en lae wat hulle gebruik. Die voorwerpe bly gekies.

- `Select objects to copy` (oorgeslaan wanneer voorwerpe reeds gekies is)

### CUTCLIP

{{key:Mod+X}}, of {{ui:Sny}} in die {{ui:Meer}}-kieslys. Kopieer voorwerpe na die knipbord, en vee dit dan uit (een ontdoen-stap).

- `Select objects to cut` (oorgeslaan wanneer voorwerpe reeds gekies is)

### COPYBASE

Kopieer voorwerpe na die knipbord met 'n basispunt wat jy kies; plak plaas daardie punt.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, of {{ui:Plak}} in die {{ui:Wysig}}-groep. Die kopie volg die kursor, hang vanaf die onderkant-linkerhoek van sy omvang (of sy middel, of die {{cmd:COPYBASE}}-punt; sien [CadCraft-instellings](topic:settings)).

- `Specify insertion point`

Die geplakte voorwerpe is gekies. 'n Blok wat die tekening reeds onder dieselfde naam het, hou hierdie tekening se definisie.

Wanneer 'n gebied wat in MarkupCraft gekopieer is nuwer is as wat CadCraft gekopieer het (en minder as 6 uur oud), plak {{key:Mod+V}} en `PASTECLIP` daardie gebied eerder: sien `PASTEAREA`.

### PASTEAREA

Aliasse: `PAREA`. {{ui:Plak 'n gekopieerde gebied}} in die {{ui:Meer}}-kieslys. Plak 'n gebied wat met {{ui:Kopieer gebied}} in MarkupCraft gekopieer is as 'n prent op sy ware grootte. Sien [Prente in 'n tekening](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (slegs wanneer die blad geen tekeningskaal gehad het nie): 'n getal, {{key:Enter}} vir die papiergrootte, of `P`, dan `First point on the pasted area`, `Second point on the pasted area` en hul ware afstand.

### PASTEORIG

{{key:Mod+Shift+V}}, of {{ui:Plak op dieselfde plek}} in die {{ui:Meer}}-kieslys. Plak by die koördinate waaruit die voorwerpe gekopieer is. Vra niks.

### DUPLICATE

Aliasse: `DUP`. {{key:Mod+D}}, of {{ui:Dupliseer en skuif}} in die {{ui:Meer}}-kieslys. 'n Kopie van die voorwerpe beweeg met die wyser vanaf waar dit is; {{key:Esc}} laat niks nie. Gebruik nie die knipbord nie.

- `Select objects to duplicate` (oorgeslaan wanneer voorwerpe reeds gekies is)
- `Specify where the copy goes (Esc leaves nothing)`: klik, tik 'n punt, `@dx,dy` (vanaf waar die wyser was), of 'n afstand na die kursor toe.

### SELECT

Vra `Select objects` (met elke opsie hieronder) en laat wat jy gekies het gekies, vir die volgende opdrag of vir `P` later.

### QSELECT

Aliasse: `QS`. In die blaaier, die dialoog {{ui:Vinnige keuse}} (sien [Kies voorwerpe](topic:select-objects#select-by-a-rule-quick-select)). Sonder dit vra die opdragreël `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` en `Enter value`. Die treffers word die seleksie.

### SELECTSIMILAR

Aliasse: `SIM`. `Select objects [SEttings]` (of die huidige seleksie): kies elke voorwerp van dieselfde soort met dieselfde laag en kleur (en bloknaam, arseringspatroon). `SE` vra `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, herhaal tot {{key:Enter}}.

### FIND

Geen aliasse nie; of {{ui:Wysig}} › {{ui:Meer}} › {{ui:Soek en vervang}}. In die blaaier, die dialoog {{ui:Soek en vervang}} (sien [Voeg teks en etikette by](topic:text#find-and-replace-words)). Sonder dit: `Enter text to find`, dan `Enter replacement text (Enter: select what is found)`. Soek in teks, attribuutwaardes en maatlynteks, op die oop oortjie of in die seleksie.

### SELECTALL en DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) kies elke voorwerp wat jy op die oop oortjie kan wysig. `DESELECT` (aliasse `AI_DESELECT`, `SELECTNONE`; of {{key:Esc}}) maak die seleksie leeg.

## Maatlyne

### DIMLINEAR

Aliasse: `DLI`, `DIMLIN`. Horisontale of vertikale afstand.

- `Specify first extension line origin [Select object]` (Enter of `S`: `Select object to dimension`, dan klik 'n lyn, boog, sirkel of polilynsegment)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` vra vir teks (`<>` is die gemete waarde), `H` en `V` vas die rigting, `R` vra `Specify angle of dimension line <0>`.

### DIMALIGNED

Aliasse: `DAL`, `DIMALI`. Die ware afstand tussen twee punte.

- Oorsprong soos in {{cmd:DIMLINEAR}}, dan `Specify dimension line location [Text]`.

### DIMANGULAR

Aliasse: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Boog: sy hoek. Sirkel: `Specify second angle endpoint`. Lyn: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: klik binne die hoek om te meet.

### DIMRADIUS en DIMDIAMETER

Aliasse: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, dan `Specify dimension line location [Text]`.

### DIMCONTINUE

Aliasse: `DCO`, `DIMCONT`. Gaan voort vanaf die laaste lineêre of belynde maatlyn wat gemaak is (of vra `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, herhaal tot Enter.

### DIMBASELINE

Aliasse: `DBA`, `DIMBASE`. Soos {{cmd:DIMCONTINUE}}, maar elke maatlyn begin vanaf die eerste oorsprong en word verder uitgestapel.

### DIMORDINATE

Aliasse: `DOR`, `DIMORD`. `Specify feature location`, dan `Specify leader endpoint [Xdatum/Ydatum/Text]`. Skryf hoe ver die kenmerk van die UCS-oorsprong langs X of langs Y is, op 'n leier: 'n leier wat meestal op of af loop lees X, een wat sywaarts loop lees Y; `Xdatum` en `Ydatum` vas wat. Stel eers die oorsprong met {{cmd:UCS}} (sonder een is dit die tekening se 0,0). Handvatpunte skuif die kenmerk, die oorsprong en die leier se einde, en die waarde volg. Gestoor as 'n werklike ordinaatmaatlyn in DWG en DXF. Weier 'n leiereinde op die kenmerk self.

### DIMARC

Aliasse: `DAR`. `Select arc or polyline arc segment`, dan `Specify arc length dimension location [Text]`. Meet langs die boog (nie die koord nie) en skryf die boogsimbool voor die waarde. Weier 'n volle sirkel, 'n lyn of 'n reguit polilynsegment. 'n DWG hou dit as 'n boogslengte-maatlyn; 'n DXF hou dit as 'n hoekmaatlyn met die lengte as sy teks, en CadCraft open dit weer as 'n boogslengte-maatlyn.

### DIMJOGGED

Aliasse: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. 'n Radiusmaatlyn vir 'n kromme wie se middelpunt ver is of buite die blad: die maatlyn begin by die punt wat jy gee in plaas van die middelpunt, met 'n breek daarin, en skryf steeds die ware radius. 'n DWG hou dit as 'n gebreekte radiusmaatlyn; 'n DXF hou dit as 'n radiusmaatlyn, en CadCraft open dit weer gebreek.

### DIMJOGLINE

Aliasse: `DJL`. `Select dimension to add jog [Remove]`, dan `Specify jog location (or press Enter)`. Plaas 'n breeksimbool op die lyn van 'n lineêre of belynde maatlyn, om te wys die afstand is nie op skaal geteken nie; die waarde verander nie. `Remove` haal dit af. Weier ander soorte maatlyn.

### QDIM

Geen aliasse nie. `Select geometry to dimension`, dan `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Dimensioneer verskeie voorwerpe in een stap, vanaf die eindes van lyne en polilynsegmente, middelpunte van sirkels en boë, punte en blokverwysings. 'n Posisie bo of onder die voorwerpe meet oor, een langs hulle meet op. `Continuous` ketting die punte, `Baseline` meet almal vanaf die eerste, `Staggered` nes pare vanaf die middel uit, `Ordinate` gee elke punt sy afstand vanaf die datum (`datumPoint` kies 'n nuwe een), `Radius` en `Diameter` dimensioneer elke sirkel en boog wat gekies word. Die modus word onthou. Alles wat dit maak is een ontdoen-stap. Sê so wanneer daar minder as twee punte is, of geen boë of sirkels vir Radius en Deursnee nie.

### DIMBREAK

Aliasse: `DBREAK`. `Select dimensions to add or remove breaks`, dan `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` laat 'n gaping in die maat- en verlengingslyne waar 'n ander voorwerp hulle kruis, en werk die gapings weer uit wanneer daardie voorwerpe of die maatlyn beweeg. `Manual` (een maatlyn) vra twee punte en laat 'n gaping tussen hulle. `Remove` haal elke gaping af. Die gaping is 1.5 keer die maatlyn se teksHoogte.

### DIMSPACE

Geen aliasse nie. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Skuif die maatlyne van ewewydige lineêre en belynde maatlyne (of hoekmaatlyne rondom dieselfde hoekpunt) sodat hulle dieselfde afstand uitmekaar is, gemeet vanaf die basismaatlyn, elk aan die kant waar dit is. `0` belyn hulle met die basis; `Auto` is twee keer die basismaatlyn se teksHoogte. Maatlyne wat nie ewewydig met die basis is nie, word met rus gelaat.

### DIMINSPECT

Geen aliasse nie. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Teken 'n raam rondom die waarde met 'n etiket ervoor en die inspeksiekoers daarna. `remove` haal die raam af. Toleransieteks bly by die waarde.

### DIMOVERRIDE

Aliasse: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, weer tot Enter, dan `Select dimensions`. Verander daardie instellings op die gekose maatlyne alleen; die maatstyl verander nie. Neem die veranderlikes wat 'n getal of 'n skakelaar is (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` sit die gekose maatlyne terug op hul styl. Weier 'n naam wat nie so 'n veranderlike is nie, en 'n waarde wat dit nie kan neem nie.

### DIMREASSOCIATE

Aliasse: `DRE`, `DIMREASSOC`. `Select dimensions`, dan vir elkeen sy verlengingslynoorsprong (`Specify first extension line origin on an object`: snap na 'n einde of die middel van 'n lyn, 'n polilynhoek, 'n middelpunt; Enter hou daardie punt vry), of vir 'n radius-, deursnee-, gebreekte radius- of boogslengte-maatlyn `Select arc or circle`. Die maatlyn word dan aan daardie voorwerpe gebind: wanneer hulle beweeg of van grootte verander, volg dit in dieselfde ontdoen-stap en meet weer. Met die hand 'n gebonde punt skuif, of die voorwerp uitvee, beëindig daardie binding. Die binding word in DWG en DXF 2000 as CadCraft se eie data gestoor; ander programme sien 'n gewone maatlyn.

### DIMDISASSOCIATE

Aliasse: `DDA`, `DIMDISASSOC`. `Select dimensions`. Maak hulle vry van die voorwerpe waaraan hulle gebind is; niks skuif nie.

### CENTERMARK

Aliasse: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, weer tot Enter. Teken 'n kruis in die middel en vier middellyne tot net verby die kromme (lyntipe CENTER), as gewone lyne op die huidige laag; die grootte kom uit die pylgrootte en algemene skaal van die huidige maatinstellings, gedraai met die UCS. Hulle volg nie die sirkel as dit skuif nie.

### CENTERLINE

Aliasse: `CL`. `Select first line`, `Select second line`. Teken 'n lyn halfpad tussen twee lyne (langs die halveerlyn as hulle ontmoet), 'n bietjie langer as hulle, in lyntipe CENTER. 'n Gewone lyn: dit volg nie die twee lyne nie.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Geen aliasse nie. Elkeen vra `Enter new value for … <current>` en stel daardie grootte vir **nuwe** maatlyne: algemene skaal, teksHoogte, pylgrootte, desimale plekke (tot 8), gaping rondom die teks, verlenging verby die maatlyn, afset vanaf die oorsprong. Sien [Stel maatlyngroottes](topic:dimension-settings).

### DIMLUNIT

Maatinstelling: die formaat van nuwe maatlyne alleen (1 wetenskaplik, 2 desimaal, 3 ingenieurs, 4 argitektonies, 5 breuk).

### DIMSTYLE en -DIMSTYLE

Aliasse: `DST`, `DDIM`, `D`. Die maatstylbestuurder: {{ui:Stel as huidig}}, {{ui:Nuwe…}}, {{ui:Wysig…}}, {{ui:Hernoem…}}, {{ui:Skrap}}, {{ui:Vergelyk…}}, {{ui:Pas op gekose toe}}. `-DIMSTYLE` op die opdragreël: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Sien [Stel maatgroottes](topic:dimension-settings#named-dimension-styles).

### DIMEDIT en DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, dan die maatlyne (of die wat reeds gekies is). New vra vir die teks (`<>` = die meting); Rotate vir 'n hoek (0 sit die teks terug); Oblique vir die verlengingslyne se hoek vanaf die X-as (Enter = geen; net lineêre en belynde maatlyne). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Sien [Stel maatgroottes](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliasse: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, of met maatlyne gekies `Units in the text of the selected dimensions`. Skryf die gemete lengte in daardie eenheid met die eenheid daarna (DIMLFAC en 'n DIMPOST-agtervoegsel); `D` gaan terug na tekeningeenhede. Sien [Maatlyne in mm, cm, m of km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliasse: `RC`. Druk `Arc length: … Type: …`, dan `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular vra `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freehand volg die wyser tot 'n klik of {{key:Enter}}; `O` vra `Select object` en `Reverse direction? [Yes/No] <N>` en draai die voorwerp in die wolk. `A` vra `Specify the length of each arc`. `R`, `P` en `F` kies die tipe vir die volgende wolk. Die resultaat is 'n geslote polilyn van boë.

### MLEADER

Aliasse: `MLD`; of {{ui:Leier}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, dan die teks in die plek-boks (of, sonder dit, `Enter text (an empty line ends)`). `Block` vra eers 'n bloknaam en die multileier wys daardie blok in plaas van teks. Meer leierlyne: {{cmd:MLEADEREDIT}}. Gestoor as 'n werklike multileier in DWG; DXF hou die lyne, pylpunt en teks wat dit teken.

### MLEADEREDIT

Aliasse: `MLE`. `Select a multileader`, dan `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: elke punt voeg 'n leierlyn by vanaf 'n nuwe pylpunt na dieselfde landingspunt, tot Enter. `Remove leaders` haal dan die leierlyn af wat jy klik ('n multileier hou ten minste een). `Block content` vra 'n bloknaam en wys daardie blok in plaas van die teks (die attribute daarvan word gevra); `Text content` sit teks terug. Elke leierlyn het sy eie handvatpunt. 'n DWG hou elke leierlyn en die blok in een multileier.

### MLEADERALIGN

Aliasse: `MLA`. `Select multileaders`, dan `Select multileader to align to [Distribute/Spacing/Use current spacing]` en `Specify direction`. Skuif die ander multileiers se landingspunte (en hul teks of blok) op die lyn deur die gekose een se landingspunt in daardie rigting; die pylpunte bly waar hulle wys. `Spacing` stel hulle ook op 'n gelyke afstand; `Distribute` vra twee punte en versprei hulle eweredig tussenin. Dit vereis ten minste twee multileiers.

### MLEADERCOLLECT

Aliasse: `MLC`. `Select multileaders`, dan `Specify collected multileader location [Vertical/Horizontal]` (Enter hou die eerste een se plek). Maak een multileier uit verskeie: blokinhoud gaan in 'n nuwe blok wat elke blok langs mekaar of onder mekaar hou; teksinhoud word een nota met 'n reël vir elk. Die eerste multileier hou sy leierlyne; die ander word verwyder. Weier 'n mengsel van teks- en blokinhoud.

### TABLE

Aliasse: `TB`; of {{ui:Annoteer}} › {{ui:Meer}} › {{ui:Tabel}}. Maak 'n tabel: een voorwerp wat jy skuif, kopieer, draai, skaal en druk soos enige ander, met sy selle as data gehou.

- `Number of data rows or [Paste/File/Style] <3>`, dan `Number of columns <3>`, `Text height` en `Top left corner of the table`. Die tabel kry 'n titelry (een samegevoegde sel) en 'n kopry bo die datarye.
- `P`: 'n tabel uit sigbladselle op die knipbord (teks met 'n tab tussen selle). Om {{key:Ctrl+V}} met so selle op die knipbord doen dieselfde, tensy CadCraft se eie kopie die nuwer een is (of CadCraft kan nie sê nie: dan plak dit sy eie kopie en sê so). `F`: 'n tabel uit 'n `.csv`- of tab-geskeide lêer. Die eerste ry word die kopry; kolombreedtes pas by die teks.
- `S`: kies die tabelstyl vir hierdie tabel (sien {{cmd:TABLESTYLE}}).
- Dit weier 'n ry- of kolomtelling wat nie 'n heelgetal is nie, en meer selle as 'n tabel hou (2 000 rye, 200 kolomme, 40 000 selle).
- {{cmd:EXPLODE}} maak 'n tabel in lyne en teks. Gestoor as DWG is 'n tabel 'n werklike tabelvoorwerp wat ander programme kan wysig; gestoor as DXF is dit 'n blok wat dit teken, en CadCraft open dit weer as 'n tabel.

### TABLEDIT

Aliasse: `TABLEEDIT`, `TABEDIT`; of dubbelklik 'n sel. Wysig 'n tabel.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Klik 'n sel, of met 'n tabel gekies tik sy naam (`B3`: kolom B, ry 3; die titelry is ry 1). In die blaaier maak 'n boks oor die sel oop: {{key:Enter}} hou die teks, {{key:Tab}} gaan na die volgende sel, {{key:Alt+Enter}} begin 'n nuwe reël, {{key:Esc}} laat die sel soos dit was.
- 'n Teks wat met `=` begin, is 'n formule: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, met `+ - * / ^`, hakies en funksies soos `sqrt` en `round`. Die sel wys die waarde; 'n formule wat sy eie sel noem, 'n sel buite die tabel of 'n sel sonder 'n getal wys `####` en die opdragreël sê hoekom.
- `R` / `C`: `Insert` of `Delete` rye of kolomme by 'n gekose sel (hoeveel, en bo of onder, links of regs). Formules volg die selle wat hulle noem.
- `S`: die kolom se breedte en die ry se hoogte. 'n Ry is nooit laer as sy teks nodig het nie. 'n Gekose tabel het ook 'n handvatpunt op elke kolom- en ry-rand.
- `M`: samevoeg van een gekose sel na 'n ander; `U`: ontsamevoeg. `A`: belyning (`TL` linksbo … `MC` middel-middel … `BR` regsonder). `H`: hierdie sel se eie teksHoogte (0 = die styl s'n). `K`: maak die ry 'n titel-, kop- of datary. `CL`: maak die sel leeg.
- Dit weier 'n tabel op 'n gesluite laag, om elke ry of kolom uit te vee, en 'n samevoeging wat 'n ander samegevoegde sel in twee sou sny.

### TABLESTYLE

Aliasse: `TS`. Lys die tabelstyle met hoeveel tabelle elkeen gebruik, dan `Table style: [New/Set/Edit/Delete/Apply]`.

- 'n Styl hou die teksHoogte en belyning van titel-, kop- en datarye, die selkantlyn, en watter rande geteken word (buite, tussen rye, tussen kolomme).
- `N` maak 'n styl uit die huidige een en maak dit huidig; `S` stel die huidige styl (nuwe tabelle neem dit); `E` wysig een: tabelle wat dit gebruik word hertekend; `A` gee gekose tabelle die huidige styl; `D` skrap een (nie Standaard nie, nie die huidige een nie; tabelle wat dit gebruik het, behou hul voorkoms).
- Style word met die tekening gestoor (DWG en DXF).

### TABLEEXPORT

Stoor wat 'n tabel wys as 'n CSV-lêer ('n formule as sy waarde). `Select a table`, of kies een eerste. Teksselle wat met `=`, `+`, `-` of `@` begin, kry 'n voorafgaande `'` sodat 'n sigblad hulle nie uitvoer nie.

### TABLEPASTE

Aliasse: `PASTETABLE`. Maak 'n tabel uit sigbladselle op die knipbord, dan vra dit sy linkerbo-hoek. Dieselfde as {{cmd:TABLE}} › `Paste`.

### DATALINK

Aliasse: `DL`. `Data link: [New/List/Remove] <New>`. `N` vra vir 'n CSV-lêer, plaas 'n tabel daarvan en onthou die lêer se naam; `L` lys die skakels met hul lêer, grootte, wanneer dit gelees is en hoeveel tabelle dit gebruik; `R` verwyder 'n skakel (sy tabelle bly as gewone tabelle).

### DATALINKUPDATE

Aliasse: `DLU`. Lees 'n datakoppeling se lêer weer en vul die tabelle wat daaraan gekoppel is weer (rye en kolomme word bygevoeg of verwyder om te pas). 'n Blaaier kan nie self 'n lêer oopmaak nie, so dit vra jou om die lêer weer te kies. Met verskeie skakels vra dit watter een.

### FIELD

Sit 'n veld in die tekening: teks wat homself uitwerk. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: nou, of die gestoorde, geskepte of gedrukte datum, en 'n formaat (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: die lêernaam, met of sonder sy uitbreiding. `S`: die blad se nommer, sy titel, of hoeveel blaaie daar is. `P`: 'n tekeningeienskap volgens naam (sien {{cmd:DWGPROPS}}). `O`: kies 'n voorwerp, dan wat om te lees (oppervlakte, lengte, omtrek, radius, deursnee, laag, naam, x, y, teks, rotasie, kleur) en die desimale. `E`: 'n formule. `C`: 'n teks met kodes soos getik, soos `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Dan `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: 'n gekose teks kry die veld daarby ná wat dit hou; 'n tabelsel net so; 'n blokverwysing vra watter attribuut; {{key:Enter}} vra 'n hoogte en 'n punt vir 'n nuwe teks.
- Op die skerm het 'n veld 'n ligte grys agtergrond; 'n druk en 'n PDF het dit nooit nie. Om oor 'n veld se teks met die hand te tik, beëindig die veld. 'n Veld wat nie uitgewerk kan word nie, wys `####`.
- 'n Objekveld vind sy voorwerp deur die sleutel wat CadCraft op voorwerpe hou (Instellings › CadCraft › Samevoegvriendelike lêers); met sleutels afgeskakel weier dit.

### UPDATEFIELD

Aliasse: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` stel wanneer velde hulself opdateer: tik die letters van `O` oop, `S` stoor, `P` druk, `R` herbou (almal vier om mee te begin), of `NONE`.

### DWGPROPS

Aliasse: `DRAWINGPROPS`. Lys die tekening se eienskappe, dan `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. Die eerste ses is dié wat die {{ui:Tekeningbesonderhede}}-paneel wys; `U` voeg jou eie naam en waarde by, `R` verwyder een. Velde lees hulle (`%<prop:title>%`, `%<prop:Client>%`) en volg dadelik. Dit weier 'n eie naam wat een van die ingeboude is of `%`, `<`, `>`, 'n aanhaling of 'n agterwaartse skuinsstreep bevat.

## Parametries

Sien [Beperk 'n tekening](topic:constraints) en [Gebruik parameters en vergelykings](topic:parameters). Beperkings werk op die {{ui:Model}}-oortjie.

### GEOMCONSTRAINT en die GC-opdragte

Alias `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, dan daardie opdrag se prompts.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (die tweede een beweeg).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT en die DC-opdragte

Alias `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` ('n getal, 'n uitdrukking, of `name=expression`).
- {{cmd:DCALIGNED}}: soos bo, met `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` vra die afstand- en hoektoleransies.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Select objects`; hul beperkings gaan.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Select objects [Showall/Hideall]`, dan `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS en -PARAMETERS

{{cmd:PARAMETERS}} (aliasse `PAR`, `PARAM`) maak die {{ui:Parameters}}-paneel oop. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Laai 'n makro (.swb) af wat die model as een beperkte skets in SolidWorks herbou. Sien [Skuif skets na en van ander onderdeelmodelleerders](topic:solidworks-sketches).

## Blokke

### ANNOSCALE

Aliasse: `CANNOSCALE`. Sê die tekening se annotasieskaal en hoeveel annoterende voorwerpe dit hou, dan vra `New annotation scale`: tik `1:50`, `1:100`, `2:1`, 'n kaal getal (`50` is 1:50) of die naam van een van die tekening se eie skale. Elke annoterende teks en maatlyn word hergrootte sodat dit op dieselfde grootte by die nuwe skaal druk, in een ontdoen-stap; voorwerpe wat nie annoterend is nie word met rus gelaat, en so ook 'n voorwerp wat 'n lys skale hou sonder die nuwe een ({{cmd:OBJECTSCALE}}). Sien [Eenhede, papier en skale](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliasse: `OBJSCALE`. `Select annotative objects`, dan `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. 'n Annoterende teks of maatlyn hou 'n lys van annotasieskale. `Add` en `Delete` vra 'n skaal (`1:50`, `2:1`, 'n kaal getal, of die naam van een van die tekening se eie skale); `Current scale` voeg die tekening se annotasieskaal by; `List` druk elke voorwerp se skale. 'n Aansigvenster waarvan die skaal in 'n voorwerp se lys is, wys die voorwerp op die grootte wat sy papierhoogte by daardie skaal druk, op die skerm en in drukke. Die laaste skaal kan nie geskrap word nie. Voorwerpe wat nie annoterend is nie, word weggelaat: skakel eers Annoterend aan in Eienskappe. Die lyste word in DWG en DXF as CadCraft se eie data gestoor. Sien [Eenhede, papier en skale](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliasse: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. Aan (soos 'n tekening begin): 'n annoterende voorwerp wys ook in 'n aansigvenster, of in die model, waarvan die skaal nie in sy lys is nie, op die grootte wat dit het. Af: dit word daar nie gewys nie, en kan nie in die model gekies word nie. Die skakelaar is een ontdoen-stap; dit word nie in die lêer gehou nie.

### SCALELISTEDIT

Aliasse: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` tot {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit en Delete vra vir die skaal se naam. Die tekening se eie skale sluit by die aansigvenster- en druikskaallyste aan en word met die tekening gestoor. Sien [Eenhede, papier en skale](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT en PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: punte waardeur die kromme gaan; `Close`, `Undo`, dan `Start tangent` en `End tangent` ('n punt, of {{key:Enter}}). Method › Control vertices vra 'n graad (1 tot 5) en teken vanaf 'n beheerveelhoek. Object verander polilyne in splines deur hul hoekpunte. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` vir verskeie voorwerpe; lyne, boë en splines word eers as polilyne aangebied. Sien [Splines en polilyne](topic:splines).

### BLOCK

Aliasse: `B`, `BMAKE`.

- `Enter block name`. As dit bestaan: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Hulle word vervang deur een verwysing na die nuwe blok.

### WBLOCK

Aliasse: `W`, `-WBLOCK`. Skryf 'n blok, sommige voorwerpe of die hele tekening as 'n nuwe DWG- of DXF-lêer. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (dit word die nuwe tekening se oorsprong), `Select objects`, dan `File format [DWG/DXF/R12 DXF]` en `File name for the new drawing`, dan `What to do with the objects [Retain/Convert to block/Delete]`. Convert vervang hulle met een verwysing na 'n blok van die lêer se naam; Delete verwyder hulle.
- **Block**: `Block to write out`. Die blok se eie voorwerpe, met sy basispunt as die oorsprong, ook geneste blokke.
- **Entire drawing**: elke voorwerp in die modelruimte. Blaaie word nie geskryf nie; gebruik {{cmd:SAVEAS}} vir 'n afskrif wat hulle hou.

Die nuwe lêer hou net die lae, lyntipes, teks- en maatstyle en blokke wat sy voorwerpe gebruik, en die tekening se eenhede. Die weergawe van 'n DWG is die een wat {{cmd:SAVEAS}} laas gebruik het. In die blaaier laai die lêer af; in Studio open die stoor-dialoog.

### ATTDEF

Aliasse: `ATT`, `DDATTDEF`, `-ATTDEF`; of {{ui:Blokke}} › {{ui:Meer}} › {{ui:Definieer attribuut}}. Druk die modusse, dan `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` wanneer konstant), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} neem attribuutdefinisies in die blok op.

### EATTEDIT en ATTEDIT

`EATTEDIT` (`DDATTE`, of dubbelklik 'n verwysing met attribute; {{ui:Blokke}} › {{ui:Meer}} › {{ui:Wysig attribute}}): `Select a block reference with attributes`, dan die {{ui:Wysig attribute}}-dialoog. `ATTEDIT` (`ATE`, `-ATTEDIT`): dieselfde verwysing, dan `<prompt> (<TAG>) <value>` vir elke attribuut; {{key:Enter}} hou 'n waarde. Sien [Attribute](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Waardes behou; nuwe attribute kry hul verstek, verwyderde gaan, plasings word teruggestel.

### BATTMAN

{{ui:Blokke}} › {{ui:Meer}} › {{ui:Attribuutbestuurder}}. Die dialoog: blok, attribute (etiket, aanwysing, verstek, modusse, volgorde), {{ui:Dateer die verwysings op (waardes behou)}}, {{ui:Pas toe}}.

### REFEDIT en REFCLOSE

{{ui:Blokke}} › {{ui:Meer}} › {{ui:Wysig ter plaatse}}. `REFEDIT`: `Select the block reference to edit in place` (of die seleksie). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; die balk se {{ui:Stoor die blok}} en {{ui:Gooi weg}} doen dieselfde. Die hele wysiging is een ontdoen-stap. Sien [Attribute](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: of 'n penstreep se druk die lynwydte van wat {{cmd:SKETCHFIX}} en {{cmd:SKETCHLIVE}} maak, bepaal (aan by die begin). Sien [Skets met 'n pen](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Alias: `OFFSTD`. Sê watter kantoorstandaard vir hierdie tekening van krag is en waarvandaan dit kom: die tekening se eie rekord, jou span se gedeelde een, of jou Verstekbeleide (teksHoogtes `all.anno.*`); met geen een nie, die program se eie groottes. `[Import/Layers/Title block/Clear/eXit]`: `Import` lees 'n `cc-office-standard` .json (die rekord wat SuperCad en BimCraft skryf) in hierdie tekening, saam daarmee gestoor in DWG en DXF; `Layers` voeg die kantoorlae by wat die tekening ontbreek, in een ontdoen-stap, en verwyder nooit een nie; `Title block` lys die kantoor se velde met hierdie tekening se eie waardes; `Clear` verwyder die tekening se eie rekord. Annoterende teks- en maathoogtes volg die standaard wat van krag is. Sien [Eenhede, papier en skale](topic:units-papers-scales).

### BPARAMS

Aliasse: `BPM`, `BLOCKPARAMS`. Maak die Parameterbestuurder oop vir die blok in die blokredigeerder, die gekose verwysing se blok, of die blok wat jy noem (`Block name`): parameters met formules, verskeie sigbaarheidsparameters met hul toestande, en die gekose verwysing se eie waardes en toestande. Sien [Jou eie parameters en sigbaarheidstoestande](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` doen dieselfde op die opdragreël: `[Parameter/Visibility/State/Assign/Reference/Done]`.

### BEDIT en BCLOSE

`BE`; of {{ui:Blokke}} › {{ui:Meer}} › {{ui:Wysig blok}}. `Enter block name to edit <the selected reference's block>` maak die blokredigeerder oop. `BCLOSE` vra `Close the block editor on "…" [Save/Discard] <Save>`; die banier se {{ui:Stoor blok}} en {{ui:Gooi veranderinge weg}} doen dieselfde. Alles wat in die redigeerder gedoen word, is een ontdoen-stap.

### VIEWBASE

Alias: `FLATSHOT`. 'n Plat 2D-aansig van die soliede liggame op die 3D-oortjie: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, 'n skaal (`1:20`, `2:1`; {{key:Enter}} neem die een wat by die blad pas), dan die aansig se middelpunt. Een blokverwysing, sigbare rande op VIEW-VISIBLE, verborge gestippel op VIEW-HIDDEN. Sien [Plat aansigte op 'n blad](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliasse: `-PUBLISH`; of {{ui:Alle blaaie in een PDF}} in die {{ui:Druk uit na PDF}}-dialoog. `Sheets to plot [All/Some]`: {{key:Enter}} druk elke blad, `S` vra vir name geskei deur kommas. Een PDF, een bladsy en 'n boekmerk per blad. Sien [Elke blad in een PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliasse: `SSM`, `SHEETSETMANAGER`. Bring jou na die {{ui:Bladstel}}-afdeling van die linkerpaneel: blaaie uit baie tekeninge, genommer en getitel, hul titelblokke gevul uit die stel, gepubliseer as een PDF. Sien [Bladstelle](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): kies 'n DWG of DXF, dan sy invoegpunt. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; met meer as een skakel, kies een van sy verwysings of tik `N` en sy naam. Sien [Gekoppelde tekeninge](topic:files#linked-drawings-external-references).

### COUNT

Aliasse: `BCOUNT`; of {{ui:Blokke}} › {{ui:Meer}} › {{ui:Tel blokke}}. `Select a block reference to count, or [All/Export] (Enter: All)`: 'n keuse kies en tel elke verwysing van daardie blok in hierdie ruimte; {{key:Enter}} of `A` lys hulle almal; `E` dan `C` (tellings) of `A` (attribute) laai 'n CSV af. Sien [Tel blokke en voer 'n skedule uit](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliasse: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (hoofletters maak nie saak nie). `F` vra vir 'n DWG of DXF, dan die hele tekening of een van sy blokke; 'n naam wat reeds gebruik word, vra {{ui:Hou bestaande}} of {{ui:Hernoem}}. `L` maak die biblioteekpaneel oop.
- `Specify insertion point [Scale/Rotate]`. `S` vra `Specify scale factor`, `R` vra `Specify rotation angle`; albei word onthou.
- Wanneer die blok reeds naas voorwerpe staan wat elders sonder dit herhaal, sê 'n reël hoeveel plekke voorgestel word, en die prompt kry `suGgested`: `G` wys hulle; klik naby een om die blok daar te plaas, `A` vir almal, {{key:Enter}} om terug te gaan. Hulle neem die rotasie van hul bure en die verstek-attribuutwaardes. Tekeninge met meer as 20 000 voorwerpe in die oop ruimte word nie deursoek nie.
- Dan `Enter <prompt> (<TAG>) <default>` vir elke attribuut wat die blok vra. Sien [Blokattribute](topic:attributes).

### LIBRARY

Aliasse: `LIB`. Maak die biblioteekpaneel oop: plaas items, soek opdaterings, biblioteekerkennings. Geen vrae nie. Sien [Voeg in uit 'n lêer of die biblioteek](topic:insert-from-file-and-library).

### STEELMEMBER

Aliasse: `SMEMBER`; of {{ui:3D-lid}} op die biblioteek se {{ui:Standaard}}-oortjie. `Section size <W12x26>` (soos die oortjie dit lys), dan `Start point [Column]` en `End point`: 'n soliede lid op die 3D-oortjie tussen die twee punte, op die grond. `C` vra vir die kolom se basispunt en sy hoogte. Een ontdoen-stap. Sien [Plaas staalprofiele en standaardonderdele](topic:steel-and-standard-parts).

### PARTSLIST

Aliasse: `PLIST`. `Top left corner of the parts list`, dan `Text height <2.5>`: teken 'n tabel van elke standaardonderdeel en staalprofiel wat uit die biblioteek geplaas is (itemnommers, hoeveelheid, onderdeel, standaard, grootte, lengte, materiaal, massa). Een ontdoen-stap. Sien [Plaas staalprofiele en standaardonderdele](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliasse: `PU`. Verwyder blokdefinisies wat niks gebruik nie. Geen vrae nie.

### DELBLOCKS

Of {{ui:Blokke}} › {{ui:Meer}} › {{ui:Skrap blokke}}. `Select block to delete [Name/eXit]`: kies 'n blokverwysing, of `N` vir die lys van blokke met 'n filter (kies verskeie), of `X` / {{key:Enter}} om te eindig. Elke verwysing gaan — in die model, op elke blad en binne ander blokke — en dan die definisie, en die opdragreël sê wat geskrap is en wat nie kon nie. Naamlose blokke en gekoppelde tekeninge word nie aangebied nie. Die prompt kom terug vir die volgende blok; die hele opdrag is een ontdoen-stap.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} plak wat jy gekopieer het ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) as een blok: kies die invoegpunt en een verwysing na 'n nuwe blok gaan daar, gekies. Die blok kry sy eie naam (`A$C` en 'n nommer); {{cmd:RENAME}} gee dit joune. Een ontdoen-stap verwyder die verwysing en die blok.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} vra vir die blok om te vervang en die blok wat in sy plek kom (`?` lys die blokke), dan verander elke verwysing in die model, op elke blad en binne ander blokke. Elke verwysing hou sy plek, skaal, rotasie, laag en die waardes van attribute wat albei blokke het; attribute wat net die nuwe blok het, begin by hul verstekke, en dit sê vir jou watter waardes laat val is. Wanneer niks die ou blok meer gebruik nie, bied dit aan om dit te verwyder. Dit weier gekoppelde tekeninge en 'n vervanging wat 'n blok binne homself sou plaas. Een ontdoen-stap.

### MINSERT

{{cmd:MINSERT}} plaas 'n blok in rye en kolomme: bloknaam, invoegpunt, skaal, rotasie, aantal rye en kolomme, en die afstande tussen hulle. Die hele stel draai met die rotasie. Elkeen is sy eie verwysing (10 000 op die meeste), so enige van hulle kan daarna geskuif of uitgevee word.

### BLOCKSPALETTE

Aliasse: `BLOCKSPAL`; of {{ui:Blokke}} › {{ui:Meer}} › {{ui:Blokkepaneel}}. Wys die {{ui:Blokke}}-paneel met die kursor in sy filter. Elke blok het 'n klein prent; die onlangs geplaastes kom eerste. Die twee knoppies langs die filter wissel tussen 'n lys en 'n rooster van prente. Klik 'n prent (of {{ui:Voeg in}}) om die blok met {{cmd:INSERT}} te plaas, of sleep dit op die tekening om dit waar jy laat val te plaas.

{{ui:Biblioteke}}, onder die lys: {{ui:Voeg 'n tekening by}} neem 'n DWG- of DXF-lêer van jou eie en lys sy blokke met prente, en die hele tekening as een blok. As jy een plaas, kopieer dit sy definisie (en die blokke wat dit nes, en hul lae) in hierdie tekening, soos {{cmd:INSERT}} se `File`-opsie doen; 'n blok wat reeds hier is met dieselfde definisie word sonder 'n vraag gebruik, een met dieselfde naam wat verskil vra {{ui:Hou bestaande}} of {{ui:Hernoem}}. In 'n blaaier bly die lêer tot die bladsy sluit. In CadCraft Studio lys {{ui:Voeg 'n vouer by}} die tekeninge in 'n vouer, elk oopgemaak wanneer jy dit klik, en lêers en vouers word onthou. Die klein x verwyder 'n biblioteek uit die lys; die lêer word nie aangeraak nie. Die gedeelde {{ui:Biblioteek}} is iets anders: sien [Voeg in uit 'n lêer of die biblioteek](topic:insert-from-file-and-library).

### BCONVERT

Of {{ui:Blokke}} › {{ui:Meer}} › {{ui:Skakel herhalings om na blokke}}. Vind meetkunde wat herhaal en maak elke kopie 'n verwysing na een blok.

- `Select the objects that repeat, or [Block]`: die voorwerpe van een kopie. `B` noem eerder 'n bestaande blok, om los kopieë van sy voorwerpe te vind.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` en `P` wissel wat as 'n kopie tel; {{key:Enter}} soek. Die instellings word onthou.
- `Name for the new block <Block1>`, dan `Specify the block's base point` ({{key:Enter}} neem die onderkant-linkerhoek van die seleksie).
- Dit sê hoeveel ander stelle voorwerpe dieselfde meetkunde is, merk alles wat dit sou vervang, en vra `Yes/No`.

'n Kopie is dieselfde voorwerpe, verskuif en gedraai onder enige hoek (en gespieël of geskaal deur een faktor wanneer dit aan is): elke voorwerp moet sy eweknie hê, binne een miljoenste van die seleksie se grootte. Elke verwysing kry sy eie rotasie en skaal ('n gespieëlde een 'n negatiewe Y-skaal), en die laag wat sy voorwerpe gedeel het. Voorwerpe op gesluite lae word met rus gelaat en getel. Dit soek in die oop ruimte (die model of die oop blad). 'n Baie groot soektog stop by 'n werkgrens en sê so. Een ontdoen-stap.

### BSEARCH

Of {{ui:Blokke}} › {{ui:Meer}} › {{ui:Vind blokke}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: deel van 'n blok se naam, of 'n patroon met `*` en `?`. Lys elke blok met sy verwysings hier en in die hele tekening.
- `A`: 'n attribuutwaarde, of `TAG=value`. Lys die blokke waarvan die verwysings dit hou, met die waardes wat gevind is. Konstante attribute tel.
- `G`: kies voorwerpe, of een blokverwysing, en die blokke waarvan die vorm ten minste 85% eenders is, word gelys, beste eerste. Grootte, rotasie en spieëling tel nie. Die maatstaf vergelyk die afstande tussen punte wat langs die omtrekke versprei is, so dit vind eenders-lykende; gebruik {{cmd:BCONVERT}} om presiese kopieë te vind.

Die verwysings wat in die oop ruimte gevind word, word gekies, gereed vir die volgende opdrag.

### BREPLACE

Of {{ui:Blokke}} › {{ui:Meer}} › {{ui:Vervang blokke}}. `Replace [Selected/All]`: `S` vervang die blokverwysings wat jy kies met die blok wat jy noem; `A` vra vir 'n blok en sy vervanging en verander elke verwysing, soos {{cmd:BLOCKREPLACE}} doen (dieselfde kode). 'n Verwysing hou sy plek, skaal, rotasie, laag en die waardes van attribute wat albei blokke het; waardes waarvoor die nuwe blok geen plek het nie, word laat val en genoem. `?` lys die blokke. Een ontdoen-stap.

### DATAEXTRACTION

Aliasse: `EATTEXT`, `DX`; of {{ui:Blokke}} › {{ui:Meer}} › {{ui:Dataonttrekking}}. Lys blokke, hul attribute en voorwerpeienskappe as 'n tabel of 'n CSV-lêer.

- Werk op die seleksie, of vra `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` wanneer die seleksie albei hou. Naamlose blokke, tabelle en materiaallyste word nooit gelys nie.
- Dit druk die kolomme om uit te kies (naam, tipe, laag, X, Y, rotasie, skaal, lengte, oppervlakte, kleur, lyntipe, ruimte, en een per attribuutetiket), dan `Columns, by name or number with commas between`. {{key:Enter}} neem die met sterretjies: die naam en elke attribuut vir blokke; tipe, laag en lengte vir voorwerpe.
- `Put identical rows together with a count? [Yes/No] <Yes>`, dan `Put the list in a: [Table/Csv] <Table>`. 'n Tabel is 'n gewone tabel ({{cmd:TABLEDIT}} wysig dit) en is nie lewend nie: loop die opdrag weer wanneer die tekening verander.
- Dit weier 'n kolom wat nie in die lys is nie. 'n Tabel hou 1 999 datarye; 'n CSV-lêer neem hulle almal.

### COUNTTABLE

Tel die blokverwysings van die seleksie (of van die oop ruimte) en sit die tellings in 'n tabel (`Block`, `Count`) of 'n CSV-lêer. Vir 'n telling wat homself by die tekening hou, sien {{cmd:BOMTABLE}}.

## Blaaie en druk

### LAYOUT

Aliasse: `LO`, `NEWLAYOUT`; of die {{ui:+}}-knoppie onder die tekening. 'n Nuwe blad met 'n rand, 'n titelblok en een aansigvenster, op ISO A3 (of Tabloid vir tekeninge in duim of voet). Geen vrae nie.

### MVIEW

Aliasse: `MV`. Net op 'n blad ({{cmd:VPORTS}} op 'n blad doen dieselfde).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. Die aansigvenster wys die hele model op 'n standaardskaal.
- `P` (Polygonal): klik die hoeke van die omtrek (`Undo`, `Close`), {{key:Enter}} wanneer klaar. Dit weier minder as drie hoeke.
- `O` (Object): `Select a closed object for the viewport's outline`: 'n geslote polilyn, 'n sirkel of 'n ellips op die blad. Die aansigvenster neem sy vorm (krommes as kort reguit stukke); die voorwerp bly soos dit was. Dit weier 'n voorwerp wat nie gesluit is nie.

### VPCLIP

Knip 'n aansigvenster wat reeds op die blad is. `Select viewport to clip` (of kies dit eers), dan `Select the object to clip to [Polygonal/Delete]`:

- Klik 'n geslote polilyn, sirkel of ellips, of {{key:Enter}} (of `P`) om die hoeke van 'n veelhoek te klik.
- `D` (Delete, aangebied wanneer die aansigvenster geknip is) maak dit weer 'n reghoek: die boks rondom die omtrek wat dit gehad het.
- Wat die aansigvenster wys, beweeg nie op die papier nie, en sy skaal bly. Die model word net binne die omtrek geteken en gedruk, en die rand volg dit. Een ontdoen-stap.
- 'n Geknipte aansigvenster het 'n handvatpunt by elke hoek van sy omtrek, benewens sy middel en die vier hoeke van sy boks (sleep 'n boekshoek rek die omtrek saam daarmee). Eienskappe wys Omtrek: Reghoek, of Geknip met die aantal hoeke.
- DWG- en DXF 2000-lêers hou die omtrek vir CadCraft. Ander programme open die aansigvenster as die reghoek daaromheen; DXF R12 hou net die reghoek.
- Op die modeloortjie sê dit aansigvensters is op blaaie.

### VPORTS

Aliasse: `VIEWPORTS`. {{cmd:SPLIT}} is dieselfde vanaf 'n blad ook, en {{ui:Aansig}} › {{ui:Meer}} › {{ui:Verdeel langs mekaar}}, {{ui:Verdeel gestapel}}, {{ui:Vier paneele}}, {{ui:Een paneel}} loop dit. Op die model: `Enter number of panes [SIngle/2/3/4] <3>`; `2` vra `[Horizontal/Vertical] <Vertical>` (Vertical = langs mekaar), `3` vra `[Left/Right] <Right>` (waar die groot paneel gaan). Elke paneel hou sy eie aansig en ruimte; 'n klik maak 'n paneel aktief. Op 'n blad is dit {{cmd:MVIEW}}. Sien [Verdeel die skerm](topic:split-screen).

### VPVIEW

Geen aliasse nie. Net op 'n blad.

- `Select viewport` (oorgeslaan as een gekies is), dan op die model: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Geen aliasse nie. 'n Koördinaatstelsel van jou eie; nie 'n wysiging nie. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: 'n punt is 'n nuwe oorsprong, dan `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: oorsprong, 'n punt op die positiewe X-as, 'n punt aan die positiewe Y-kant. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` en 'n naam. Die aansig draai sodat die nuwe X-as gelyk is. Sien [Draai die aansig en gebruik jou eie koördinate](topic:ucs-and-turned-view).

### PLAN

Geen aliasse nie. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: draai die aktiewe paneel se aansig sodat die UCS se X-as (of die wêreld s'n) gelyk is. Niks in die tekening skuif nie.

### TURNLEFT, TURNRIGHT, TURNWORLD

Geen aliasse nie; of {{ui:Aansig}} › {{ui:Meer}} › {{ui:Draai aansig 90° links}}, {{ui:Draai aansig 90° regs}}, {{ui:Terug na wêreld}}. Dieselfde as `UCS Z -90`, `UCS Z 90` en `UCS W`, met die aansig wat volg.

### VPLAYER

Geen aliasse nie. Op 'n blad, of binne 'n aansigvenster. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` vra vir laagnaam (kommas, `*` en `?` jokertekens), dan `[All/Select/Current] <Current>` aansigvensters; Reset sit elke laag terug op sy "bevrore in nuwe aansigvensters" verstek; `V` stel dié verstek (`[Frozen/Thawed]`), wat {{cmd:MVIEW}} gebruik. `?` lys die lae wat in die huidige aansigvenster bevries is. Die Lae-paneel se aansigvensterkolom doen dieselfde vir een aansigvenster. Sien [Vries 'n laag in een aansigvenster](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliasse: `MS`; of dubbelklik binne 'n aansigvenster. Net op 'n blad. Werk op die model deur 'n aansigvenster: die een wat gekies is, die enigste een op die blad, of `Click inside the viewport to work in`. Pan en zoem binne verander die aansigvenster se aansig ('n vertoon-geslote een hou dit en die blad beweeg eerder); die nuwe aansig word as een ontdoen-stap geskryf. Sien [Werk op die model deur 'n aansigvenster](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliasse: `PS`; of dubbelklik buite die aansigvenster, of klik 'n oortjie onder die tekening. Terug na die blad.

### PLOT

Aliasse: `PRINT`, `PUBLISH`, `EXPORTPDF`; of {{key:Mod+P}}. Maak die {{ui:Druk uit na PDF}}-dialoog oop. Sien [Druk uit na PDF](topic:plot-pdf).

### PLOTSTYLES

Aliasse: `STYLESMANAGER`, `PSTABLES`; of {{ui:Wysig tabelle…}} in die {{ui:Druk uit na PDF}}-dialoog. Maak {{ui:Plotstyltabelle}} oop: wat elke kleur as druk (kleur, grys, ink, lynwydte), met die tekening gehou. Sien [Plotstyltabelle](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} skuif voorwerpe tussen 'n blad en die model deur 'n aansigvenster, geskaal en gedraai sodat hulle van die ander kant af eenders lyk. Op 'n blad, kies voorwerpe en hulle gaan na die model (kies die aansigvenster wanneer die blad meer as een het). Terwyl jy op die model deur 'n aansigvenster werk ({{cmd:MSPACE}}), kom die gekose voorwerpe na die blad. Dit sê hoeveel keer groter of kleiner hulle geword het. Aansigvensters bly op hul blad. Een ontdoen-stap.

### ISODRAFT

{{cmd:ISODRAFT}} skakel isometriese tekening `ON` of `OFF` aan of af, of gaan reguit na die `Left`-, `Top`- of `Right`-vlak. Terwyl dit aan is: Ortho ({{key:F8}}) hou lyne langs die vlak se twee asse (links: 90° en 150°; bo: 30° en 150°; regs: 30° en 90°), poolspoor ({{key:F10}}) volg dieselfde asse, vaslegging aan rooster ({{key:F9}}) gebruik die isometriese rooster, en die rooster ({{key:F7}}) word met lyne op 30°, 90° en 150° geteken. {{cmd:ELLIPSE}} kry `Isocircle`: gee 'n middelpunt en 'n radius (of `Diameter`) en dit teken die ellips wat 'n sirkel op die huidige vlak wys. Die tekening bly plat: dit is hulpmiddels vir die teken van 'n piktoriale aansig, nie 'n 3D-model nie. Die instelling is vir hierdie sessie en word nie in die lêer gestoor nie.

### ISOPLANE

{{cmd:ISOPLANE}} kies die vlak waarop isometriese tekening werk: `Left`, `Top` of `Right`. Enter gaan na die volgende vlak. Terwyl isometriese tekening aan is, doen {{key:F5}} dieselfde in die middel van 'n opdrag; terwyl dit af is, word {{key:F5}} aan die blaaier oorgelaat.

## Navraag

### CAL

Druk die waarde van 'n berekening, soos dit oral gelees sou word waar 'n lengte getik word.

- `Expression`: tik dit, byvoorbeeld `12'6"+3/4"` of `(24'-0")/3`, en druk {{key:Enter}}. CadCraft druk `= 12'-6 3/4"   (150.75 drawing units)`. Sien [Rekenkunde in 'n getikte waarde](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliasse: `DI`; of {{ui:Aansig}} › {{ui:Meer}} › {{ui:Meet afstand}}.

- `Specify first point`, `Specify second point`. Druk afstand, hoek, Delta X en Delta Y.

### AREA

Aliasse: `AA`; of {{ui:Aansig}} › {{ui:Meer}} › {{ui:Oppervlakte}}. Druk die oppervlakte en omtrek.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Klik of tik hoeke; by `Specify next point (Enter closes) [Undo]` druk {{key:Enter}} om die omtrek te sluit. `U` neem die laaste hoek terug.
  - {{key:Enter}} of `O`, dan `Select object`: 'n sirkel (druk sy omtrek), 'n ellips, 'n polilyn ('n oop een word vir die oppervlakte deur 'n reguit lyn gesluit, en sy lengte word gedruk), of 'n arsering (gate word afgetrek).
  - `A` (Voeg oppervlakte by) en `S` (Trek oppervlakte af) hou 'n lopende totaal: die prompt begin met `(ADD mode)` of `(SUBTRACT mode)`, elke oppervlakte word bygevoeg of afgetrek, en `Total area = …` word na elkeen gedruk. In hierdie modusse kies `O` voorwerpe tot {{key:Enter}}, en {{key:Enter}} by die eerste prompt beëindig die opdrag.

### MEASUREGEOM

Aliasse: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; ná elke meting vra dit weer, met `eXit` die verstek.

`Quick` meet rondom die wyser soos jy dit beweeg: die afstand na die naaste voorwerp na regs, bo, links en onder (langs die asse van die huidige UCS), getrek soos jy gaan, en die hoek waar twee van daardie bure reguit is en ontmoet. 'n Klik skryf die vier afstande, die duidelike breedte en hoogte en die hoeke na die geskiedenis; Enter gaan terug na die opsies. Dit lees wat op die skerm is.

- `D`: twee punte, soos {{cmd:DIST}}.
- `R`: `Select arc or circle`; druk die radius en deursnee.
- `A`: 'n boog (sy ingeslote hoek), 'n lyn en dan 'n tweede lyn (die hoek tussen hulle, na hul verre eindes toe), of {{key:Enter}} en drie punte (hoekpunt, dan die twee eindes).
- `AR`: soos {{cmd:AREA}}, een oppervlakte.

### ID

Geen aliasse nie. `Specify point`; druk sy X en Y.

### LIST

Aliasse: `LI`, `LS`. `Select objects`; druk elke voorwerp se soort, laag en hoofmate.

### MASSPROP

{{cmd:MASSPROP}} gee die snitvoorwerpeienskappe van die streke en geslote voorwerpe wat jy kies, saam geneem: oppervlakte, omtrek, begrensingsboks, middelpunt, traagheidsmomente om die X- en Y-as deur die oorsprong, die produk van traagheid, traagheidsradiusse, dieselfde momente om die middelpunt, en die hoofmomente met die rigtings van hul asse. Gate in 'n streek tel as gate. Figure is in tekeningeenhede en presies vir omtrekke van lyne en boë; ellipse en splines word as kort reguit segmente gemeet, en dit sê so. Ná die verslag vra dit of dit na 'n tekslêer geskryf moet word. Voorwerpe wat nie gesluit is nie word weggelaat, en dit sê hoeveel.

## Aansig, lêer en ander

### ZOOM

Aliasse: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Klik twee hoeke vir 'n venster. `E`, `A` of Enter: die hele tekening.
- `P` (Vorige, of {{ui:Vorige}} op die nutsbalk) gaan terug na die aansig voor, tot 10 aansigte per oortjie; 'n reeks wiel-stappe of een pan tel as een aansig.
- 'n Getal soos `2`, `2x` of `0.5x` (of `S` en dan die getal) zoem in of uit met daardie faktor rondom die middel van die skerm.
- `C` vra `Specify center point` en `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT en die PDF-opdragte

Aliasse: `PDFATT` vir {{cmd:PDFATTACH}}, `PDFIM` vir {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} plaas 'n PDF-bladsy onder die tekening (lêer, bladsy, invoegpunt, skaal, rotasie); {{cmd:PDFIMPORT}} maak 'n bladsy se lyne, krommes, vulsels en teks tot tekeninvoorwerpe op lae wat na die PDF genoem is, op ware grootte, 'n getikte skaal, of geskaal uit twee punte en 'n werklike afstand. {{cmd:PDFCLIP}} knip 'n onderlêer, {{cmd:PDFADJUST}} stel verbleiking, kontras, monochroom of skakel dit af, {{cmd:PDFLAYERS}} skakel die PDF se eie lae aan en af, en {{cmd:PDF}} gee CadCraft weer die lêers wat 'n tekening se onderlêers gebruik. Sien [PDF-onderlêers](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Tekening-outovoltooiing: met geen opdrag wat loop nie, wys 'n grys spook wat jou tekening se eie patrone sê volgende kom. {{cmd:AUTOCOMPLETE}} skakel dit `On` of `Off` aan of af (ook Instellings › CadCraft) of `Show`s wat dit nou sou voorstel. **Tab** teken die spook as een ontdoen-stap, **Esc** verwerp dit totdat die tekening verander. Dit vind drie dinge in die nuutste voorwerpe: die volgende kopie van iets wat twee keer of meer op 'n gelyke stap geteken is (stutte, kolomme, 'n trap se stoot en trede), die volgende trede van 'n polilyn-trap, en die ontbrekende kant van 'n kamer of muurketting. Midde-in {{cmd:LINE}} of {{cmd:PLINE}} is die spook die **volgende punt**: die volgende trapstap (stoot, trede, stoot…), die vierde hoek van 'n reghoek, die punt wat dit sluit, of nog een gelyke stap. Bring die kursor naby en druk **Tab**, asof jy daar geklik het; gaan voort of druk Enter. Uitgewerk op hierdie rekenaar deur reëls, sonder 'n model.

### AUTOSHEET

Alias: `ASH`. Blaaie wat hulself uitlê. {{cmd:AUTOSHEET}} neem die stukke van die tekening (jou benoemde aansigte, of die afsonderlike stukke van die model, of die hele model), kies 'n papiergrootte (of die een wat jy gee), gee elke stuk 'n standaardskaal (een skaal vir almal, of die grootste wat elkeen kan neem), en plaas die aansigte in rye op nuwe blaaie met 'n titelblok en 'n onderskrif (naam en skaal) onder elk. Wat nie op een blad pas nie, kry 'n blad vir homself. Een ontdoen-stap. Uitgewerk op hierdie rekenaar deur reëls, sonder 'n model.

### PHOTOSKETCH

Alias: `PSK`. Skets-foto na tekening. Kies 'n foto (JPEG, PNG of TIFF) van 'n handskets op 'n vel papier. {{cmd:PHOTOSKETCH}} vind die vel se vier hoeke, reguit die perspektief, neem die papiergrootte wat jy noem (`Paper`, of die naaste standaard een) en die `Scale` van die skets (1 : n), en trek dan die penlyne in lyne, boë en sirkels, 'n laag vir elke pen-kleur (swart, rooi, blou, groen). As dit nie die papier se rand kan vind nie, neem dit die hele foto as die blad en sê so. Letters word uitgelaat. Een ontdoen-stap. Gedoen op hierdie rekenaar met klassieke beeldverwerking, sonder 'n model, niks word êrens gestuur nie. Sien ook die ingeskandeerde-tekening-opdragte.

### AUTODIM

Alias: `ADIM`. Outo-dimensioneer volgens reëls. {{cmd:AUTODIM}} dimensioneer die gekose voorwerpe (of die hele tekening) vanaf hul vlak en lood-rande: 'n ketting van maatlyne langs die kante wat jy kies (`Sides`), een algemene maat buite dit, die wydte van elke opening ('n gaping tussen ko-liniêre muurlyne), 'n deursnee vir elke gatgrootte, en met `Grid` die afstand tussen roosterlyne. 'n Maatlyn wat reeds daar is, word nie weer gemaak nie. Een ontdoen-stap. Uitgewerk op hierdie rekenaar deur reëls, sonder 'n model.

### GRIDMOVE

Alias: `GM`. Om 'n roosterlyn te skuif dra die stel saam. {{cmd:GRIDMOVE}} skuif 'n roosterlyn ('n lyn op 'n laag waarvan die naam roos of as-lyn sê) en wat daaraan hang: mure met 'n einde op die lyn rek om dit te volg, mure langs dit skuif heel, kolomme (blokverwysings en sirkels op die lyn), die bel en etiket skuif, en maatlyne waarvan die punte op dit sit, meet die nuwe afstand. Gee twee punte (net die deel dwars oor die lyn tel) of `Distance`. Een ontdoen-stap neem alles terug. Gedoen volgens reëls op hierdie rekenaar.

### DETAILS

Alias: `DET`. Details wat jou vind. {{cmd:DETAILS}} hou jou firma se eie details: `Add` plaas 'n blok van hierdie tekening in die lys, `List` en `Remove` bestuur dit, en `Find` rangskik hulle vir wat gekies is (of wat jy laas geteken het) volgens die woorde op sy lae, blok name, arseringspatrone en notas teen elke detail se naam en notas, sodat 'n vensterkop jou vensterbank-flashing vind. Kies 'n nommer en 'n punt om dit te plaas. Met `Hint` aan (ook Instellings › CadCraft), wanneer jy iets kies wat 'n detail pas, kry die statusbalk een reël. Die lys word in hierdie blaaier, op hierdie rekenaar gehou, en daardie lys is die een wat deursoek word. `Share` sit dit ook in jou Dokumentevouer (`.cadcraft/firm-details.json`, met elke blok se tekening): `Pull` voeg by wat jou span het en jy nie, `Push` voeg by wat jy het en hulle nie, `Both` doen albei, en niks word ooit uit enige kant verwyder nie. Maak eers die Dokumentevouer oop ({{cmd:DOCUMENTS}}); wanneer dit 'n Team Cloud Plan-vouer is, deel die hele span een lys. 'n Detail-item in die Biblioteek-paneel het 'n knoppie **Voeg by my firma se details** wat dit in dieselfde lys sit. Uitgewerk op hierdie rekenaar deur woorde, sonder 'n model.

### SKETCHFIX

Alias: `SKF`. Pen-skette word presiese meetkunde. Druk en sleep een vryhandstreep op 'n slag (pen, muis of vinger), dan Enter. Elke streep word gelees as 'n lyn, sirkel, boog, reghoek of polilyn: amper gelyke en loodregte lyne word presies gelyk en loodreg gemaak, 'n geslote ronde streep word 'n sirkel, 'n geslote streep met vier regshoekige hoeke 'n reghoek, en die eindes van die strepe word saamgetrek en op die eindes wat reeds in die tekening is. Een ontdoen-stap. Uitgewerk op hierdie rekenaar deur reëls, sonder 'n model.

### SCANATTACH en die opdragte vir ingeskandeerde tekeninge

Aliasse: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} het geen. Hulle werk op 'n prent, een ontdoen-stap elk. {{cmd:SCANATTACH}} voeg 'n PNG, JPEG, TIFF (een bladsy of alle) of 'n PDF-bladsy wat 'n prent is, in. {{cmd:SCANSCALE}} skaal die blad uit twee gekose punte en die ware afstand. {{cmd:SCANALIGN}} skuif en draai dit op twee punte (`Scale the sheet to fit` Yes/No). {{cmd:SCANDESKEW}} wys die hoek van die blad se lang lyne en draai die blad sodra jy `Accept` of 'n `Value` gee. {{cmd:SCANCLEAN}} maak dit swart-en-wit (`Threshold` Auto/Adaptive/Level, `Specks`) en `Run`. {{cmd:SCANCROP}} hou 'n venster. {{cmd:SCANERASE}} vee 'n `Rectangle`, `Polygon` of `Lasso` uit. {{cmd:SCANTRACE}} trek lyne en boë op 'n nuwe laag (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) en rapporteer wat dit gevind het en wat dit as raster gelaat het. {{cmd:SCANINFO}} lys die oorspronklike lêer en die stappe. {{cmd:RASTERSNAP}} skakel vasvang aan die lyne van ingeskandeerde blaaie Aan of Af. Sien die onderwerp Ingeskandeerde tekeninge en die spoor.

### REGEN en REGENALL

Aliasse: `RE` vir {{cmd:REGEN}}, `REA` vir {{cmd:REGENALL}}. Bou weer wat op die skerm geteken is uit die tekening: {{cmd:REGEN}} die oortjie waarna jy kyk (op 'n blad, die model wat sy aansigvensters ook wys), {{cmd:REGENALL}} elke oortjie, elke verdeelde-skerm-ruit en elke oop tekening. Gebruik hulle wanneer die prent verouderd lyk ná 'n geskrifte of baie groot verandering, of 'n assistent die tekening gewysig het; die tekening self word nie aangeraak nie, so daar is niks om te ontdoen nie.

### NAMEDVIEW

Aliasse: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, dan die aansig se naam. `S` stoor die aansig op die skerm, `W` 'n venster wat jy kies, `R` wys 'n gestoorde aansig, `D` skrap een, `?` lys die aansigte van hierdie oortjie. Stoor onder 'n bestaande naam vervang dit; elke verandering is een ontdoen-stap. Aansigte behoort aan die oortjie waarop hulle gestoor is. DWG- en DXF-lêers hou hulle (die VIEW-tabel); 'n blad se aansigte kom terug op die eerste blad, omdat die lêer nie sê watter nie.

### UNDO en REDO

Aliasse: `U` vir {{cmd:UNDO}}; {{cmd:REDO}} het geen. Ook {{key:Mod+Z}} en {{key:Mod+Y}}.

### LAYER

Aliasse: `LA`. Spring na die {{ui:Lae}}-paneel.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` of 'n naam (`?` lys hulle: Continuous, die tekening se eie, en DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE met hul `2` (half) en `X2` (dubbel) groottes). {{cmd:LWEIGHT}} (`LW`): die lynwydte vir nuwe voorwerpe in mm, of `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): die tekening se lyntipeskaal (ontdoenbaar). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — dieselfde as die {{ui:LWT}}-knoppie op die statusbalk. Sien [Lynwydtes en lyntipes](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, dan die nuwe naam; voorwerpe of verwysings volg. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` tot {{key:Enter}}, dan `Select object on target layer or [Name]` en `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, dan `Y`: die laag en elke voorwerp daarop gaan (nie laag 0, DEFPOINTS of die huidige laag nie). Een ontdoen-stap elk. Sien [Organiseer 'n tekening met lae](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Lae deur voorwerpe te kies; ook in die {{ui:Lae}}-paneel se {{ui:Gereedskap}}-kieslys. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, dan {{key:Enter}}: elke ander laag gaan af. {{cmd:LAYUNISO}} skakel hulle weer aan. {{cmd:LAYOFF}} en {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (of bevries), oor en oor; `U` neem die laaste een terug, {{key:Enter}} eindig. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} skakel elke laag aan, {{cmd:LAYTHW}} ontvries elke laag. Elke opdrag is een ontdoen-stap. Sien [Organiseer 'n tekening met lae](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} begin 'n leë tekening en {{cmd:OPEN}} maak 'n DWG of DXF oop, elk in sy eie oortjie oor die tekening ('n onaangeraakte nuwe tekening word eerder gebruik as 'n nuwe oortjie). Om 'n oortjie met ongestoorde veranderinge te sluit, vra eers. Sien [Verdeel die skerm](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, ook {{key:Mod+S}}) laai 'n afskrif in die tekening se formaat af: DWG as dit uit 'n DWG oopgemaak is, DXF as uit 'n DXF. 'n Nuwe tekening gebruik die formaat wat laas in Stoor as in hierdie blaaier gekies is, anders DWG.

{{cmd:SAVEAS}} (ook {{key:Mod+Shift+S}}) maak die dialoog {{ui:Stoor 'n kopie as}} oop: kies {{ui:DWG}} (en sy {{ui:Weergawe}}), {{ui:DXF R12}} of {{ui:DXF 2000}}, dan {{ui:Stoor}}. Die keuse bly vir hierdie tekening en vir nuwe tekeninge in hierdie blaaier.

{{cmd:DXFOUT}} laai altyd 'n DXF R12-afskrif af, sonder om die formaat wat {{cmd:SAVE}} gebruik te verander.

Sien [Lêers: wat oopmaak, wat stoor](topic:files#saving).

### TOUR

Aliasse: `TUTORIAL`. Begin die ses-stap eerste-tekening-toer weer. Sien [Aan die gang kom](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliasse: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Sien [Instellings](topic:settings#toolbar-position).

### COMMANDLINE

Aliasse: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: heg of laat die opdragreël swewe, maak dit een reël, vra hoeveel geskiedenisreëls om te wys (0 tot 12), of maak die geskiedenis oop. Sien [Instellings](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: die balke bo die tekening soos hulle was, of kompak. Sien [Instellings](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: die stap waarop {{ui:Polêr}}-spoorlyne belyn (meer as 0, tot 180). In hierdie blaaier bewaar.

### UNITS

Aliasse: `UN`. Hoe lengtes geskryf en getik word.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Argitektonies en Breuk: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. Die ander: `Enter number of decimal places (0 to 8)`.

Nuwe maatlyne volg dit. Een ontdoen-stap. Dieselfde as {{ui:Lengteformaat}} en {{ui:Presisie}} in {{ui:Huidige instellings}}; sien [Voet en duim](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliasse: `GDS`. Kyk na 'n IC-uitleg (’n GDSII-stroomlêer): laboratoriumproef, net om te kyk en te meet.

- 'n Lêerkieser neem 'n `.gds`-lêer; met verskeie boonste selle, `Enter the top cell to draw`.
- Elke laag en datatipe word 'n tekeninglaag (`GDS 1`, `GDS 2/5`), verwysings en skikkings word plat geplaas, in die lêer se gebruikerseenheid (gewoonlik mikrometer). Een ontdoen-stap. Niks word gesimuleer of nagegaan nie en die lêer word nie teruggeskryf nie.

### DIAGRAM

Aliasse: `TEXTDIAGRAM`, `T2D`. 'n Diagram uit teks.

- 'n Boks neem die teks (of een reël met `;` tussen stellings op die opdragreël): 'n Mermaid-vloeidiagram, 'n PlantUML-komponentdiagram, D2 of 'n van-na-lys.
- `Specify the top left corner of the diagram`, dan `Specify the text height`.

Blokke en verbindings is gewone voorwerpe op laag `Diagram`, gekies wanneer dit eindig. Een ontdoen-stap. Sien [Teken 'n diagram uit teks](topic:text-to-diagram).

### OLELIST

Aliasse: `OLES`. Die OLE-voorwerpe wat 'n DWG dra wat CadCraft nie self kan plaas nie.

- Lys elkeen: nommer, soort, grootte, of dit 'n prent gestoor het.
- `Enter an option [Place/eXit] <eXit>`: Place vra vir die nommer, die linkeronderhoek en die breedte, en teken 'n raam met die prent. Een ontdoen-stap; die gehoue voorwerp word nie verander nie. Sien [Prente](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliasse: `SHX`. Jou eie SHX-lettertipes.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Vouer}} lees elke `.shx` in 'n vouer (CadCraft Studio; weer by elke begin), {{ui:Lêers}} neem gekose lêers (die blaaier), {{ui:Omkeer}} lê een lettertipe se letters laaste eerste uit. Teksstyle wat 'n gelaaide lettertipe noem, teken daarin. Sien [Teken teks in jou eie SHX-lettertipes](topic:shx-fonts).

### LIMITS

Hoe groot die tekening bedoel is.

- `Specify lower left corner or [ON/OFF] <current>`: 'n punt, `ON` of `OFF`.
- `Specify upper right corner <current>`.

Die rooster vul die limiete, {{cmd:ZOOM}} Alles wys hulle, en met hulle AAN word 'n punt buite hulle geweier (`**Outside limits`). Een ontdoen-stap; gestoor in DWG en DXF. Sien [Stel die tekeninglimiete](topic:drawing-limits).

### AUNITS

Aliasse: `ANGUNITS`. Hoe hoeke gewys en getik word.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, of vir die ander twee `Enter precision` (0 grade, 2 minute, 4 sekondes, 5 tot 8 desimale van 'n sekonde).

Een ontdoen-stap; gestoor in DWG en DXF. Dieselfde as {{ui:Hoekformaat}} in {{ui:Huidige instellings}}. Sien [Tik en wys rigtings en hoeke](topic:bearings-and-angles).

### APPLOAD

Aliasse: `AP`; of {{ui:Aansig}} › {{ui:Meer}} › {{ui:Laai toepassing…}}. Die dialoog {{ui:Laai toepassings}}: laai `.lsp`-roetines en `.dcl`-dialoogmlêers, laai hulle af, laai hulle weer uit die geskiedenis, en die Opstartsuite. 'n Roetine se `(defun c:NAME …)`-opdragte werk dan soos enige ander. Sien [Laai toepassings](topic:load-applications) en [Voer LISP-roetines uit](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (of {{ui:Aansig}} › {{ui:Meer}} › {{ui:Wysig aliasse…}}) maak jou aliaslêer oop (`ALIAS, *COMMAND`-reëls); {{ui:Stoor}} pas dit toe. {{cmd:REINIT}} pas dit weer toe. Sien [Wysig opdragaliasse](topic:command-aliases).

### OPTIONKEYS

Aliasse: `OPTKEYS`; of {{ui:Instellings}} › {{ui:CadCraft}} › {{ui:Opsieletters}} › {{ui:Wysig…}}. Maak jou opsieletterlêer oop (`COMMAND.OPTION, LETTERS`-reëls, soos `ARRAY.PO, P`); {{ui:Stoor}} pas dit toe en {{cmd:REINIT}} pas dit weer toe. Sien [Gee opdragopsies jou eie letters](topic:option-letters).

### LISPEDIT

Aliasse: `VLIDE`; of {{ui:Aansig}} › {{ui:Meer}} › {{ui:LISP-redigeerder}}. Maak die LISP-redigeerder oop, 'n venster wat langs die tekening oop bly.

- Die teks: reëlnommers, die maat van die hakie by die kursor gemerk (rooi as dit geen het nie), {{key:Enter}} laat die nuwe reël onder die oop hakie inspring, {{key:Tab}} tik twee spasies, {{key:Esc}} verlaat die teks.
- {{ui:Laai in die tekening}} ({{key:Ctrl+Shift+Enter}}): lees elke vorm, soos {{cmd:APPLOAD}} dit met die lêer doen, en maak sy `c:`-opdragte. Die lêer wys in {{cmd:APPLOAD}} se lys.
- {{ui:Voer seleksie uit}} ({{key:Ctrl+Enter}}): evalueer die gekose vorms, of die vorm waarin die kursor is.
- {{ui:Stop}}: beëindig 'n roetine wat loop.
- {{ui:Konsole}}: wat die roetine gedruk het, en elke fout met sy reël; klik 'n fout om daarheen te gaan. Die teks word een boonste-vlak vorm op 'n slag uitgevoer, so die reël is die vorm s'n, of binne dit die reël wat die funksie roep wat die fout noem.
- {{ui:Nuut}}, {{ui:Oop}}, {{ui:Stoor}} ({{key:Ctrl+S}}): 'n `.lsp`-lêer. Die teks word ook in hierdie blaaier gehou, so die venster toe te maak verloor niks nie.

Langs die teks: die funksies wat die roetine definieer, dié wat dit roep wat hierdie LISP nog nie het nie, dié wat dit roep wat nie in dit gedefinieer of ingebou is nie, en die volledige lyste van wat ingebou is en wat nie is nie.

'n Teks met 'n hakie wat nooit gesluit word nie, of 'n string wat nooit eindig nie, word nie uitgevoer nie: die reël word genoem. Daar is geen stap-vir-stap-ontfouter, breekpunte of kykvenster nie. Sien [Voer LISP-roetines uit](topic:run-lisp).

### HELP

Aliasse: `?`. Druk elke opdrag, sy aliasse en 'n een-reël beskrywing in die opdragreël-geskiedenis. Dit maak nie hierdie hulp oop nie: druk {{key:F1}} of klik {{ui:Help}} daarvoor.

## Kies voorwerpe-prompt

By enige `Select objects`-prompt: klik voorwerpe, teken vensters (links na regs) en kruisings (regs na links) met twee klikke, of druk en sleep 'n lasso ({{key:Space}} terwyl jy sleep: venster, kruising, heining), {{key:Shift}}+klik om te verwyder, en druk {{key:Enter}} om klaar te maak. Jy kan ook `ALL` (alles), `L` (die laaste voorwerp), `P` (Vorige: wat die laaste opdrag gebruik het), `F` (Heining: voorwerpe wat 'n lyn punte kruis; `U` neem 'n punt terug), `W` (Venster), `C` (Kruising), `R` (Verwyder-modus: keuses haal voorwerpe uit; die prompt lees `Remove objects`) en `A` (Voeg weer by) tik. `?` lys hulle. Hulle word nie in die prompt gewys nie. {{key:Tab}} oor oorvleuelende voorwerpe merk die volgende een; klik om dit te kies. Sien [Kies voorwerpe](topic:select-objects).

### ACCESS

Alias: `AX`. Teken sonder sig. {{cmd:ACCESS}} skakel Access aan of af (`On`, `Off`) en skakel snapklanke (`Sound`) en gepraatte opdragte (`Voice`) om; dit sê eers die toestand. Met Access aan, word elke opdrag en resultaat deur jou skermleser gepraat en het die tekengebied 'n sleutelbord-kursor. Die hulponderwerp "Teken sonder sig" het die sleutels.

### DESCRIBE

Alias: `DESC`. Sê wat die tekening hou: hoeveel voorwerpe, van watter soort, hoe groot, hoeveel lae, wat gekies is. Lees net; verander niks.

### WHEREAMI

Alias: `WHERE`. Sê waar die kursor is, in die tekening se eenhede.

### NEARBY

Sê wat naby die kursor lê, die naaste eerste, elkeen met sy afstand en die kant waarop dit is.

### SAYSEL

Sê wat gekies is, een sin per voorwerp (lyn se lengte, eindes en hoek; sirkel se radius en middelpunt; teks soos geskryf).

### VOICE

Skakel gepraatte opdragte aan of af. Hulle word op hierdie rekenaar herken; waar die blaaier dit nie kan doen nie, bly stem af tensy jy die blaaier se aanlyndiens in Instellings kies.

### TOUCHCROSSHAIR

Alias: `TCX`. Die verskuifde kruisdraad vir tekening met 'n vinger, sodat die vingerpunt nie die punt wat jy kies bedek nie. Terwyl dit aan is, kies een vinger op die tekening nie: dit beweeg 'n kruisdraad wat bo die vinger en aan een kant sit. Voorwerpvaslegging en spoor volg die kruisdraad. Die vinger optel kies niks en laat die kruisdraad waar dit is. Om te kies, druk die {{ui:Klik}}-knoppie in die hoek van die tekening, of tik enige plek op die tekening met 'n tweede vinger. Hou {{ui:Klik}} vas terwyl jy die ander vinger beweeg om te sleep ('n seleksievenster, 'n lasso, 'n handvatpunt). 'n Vinger wat stil vasgehou word, of die {{ui:Enter}}-knoppie, is Enter. Twee vingers zoem en pan soos vantevore. Naby die onderrand en die verre sykant trek die kruisdraad na die vinger toe, sodat elke deel van die tekening bereikbaar is. 'n Pen en 'n muis kies altyd direk.

{{cmd:TOUCHCROSSHAIR}} sê die toestand en vra `ON`, `OFF`, `Auto` (aan net waar 'n vinger die enigste wyser is, so dit is af op 'n rekenaar met 'n muis), `Distance` (hoe ver die kruisdraad van die vinger sit, 24 tot 240 pixels) of `Side` (`Left`: boontoe en links, vir die regterhand; `Right` vir die linkerhand; die knoppies skuif na die ander hoek). Dieselfde keuses is in Instellings › CadCraft, en op 'n toestel met 'n aanraakskerm het die statusbalk 'n {{ui:Verskuifde kruisdraad}}-skakelaar. Die keuses word in hierdie blaaier gehou.

### WHOHAS

Sê wie 'n tekening oop het. In CadCraft Studio op 'n rekenaar skryf die oopmaak van 'n DWG of DXF 'n klein slotlêer langsaan (`Plan.dwg.cclock`: wie, sedert wanneer, watter weergawe), vernuwe dit elke minuut terwyl die tekening oop is, en verwyder dit wanneer die tekening gesluit word. Om 'n tekening wat iemand anders oop het oop te maak, sê wie en sedert wanneer, en bied {{ui:Open read-only}} aan (Stoor vra dan vir 'n nuwe naam), {{ui:Open anyway}} (die ander persoon word by hul volgende vernuwing ingelig) of {{ui:Cancel}}. Stoor oor 'n lêer wat iemand anders oop het, vra eers. 'n Slot wat vyf minute lank nie vernuwe is nie, word as verouderd gesê: die ander kopie is sonder stoor gesluit of die rekenaar slaap.

{{cmd:WHOHAS}} vra `Current` (die oop tekening), `File` (kies een), `FOlder` (kies 'n vouer: elke tekening daarin wat êrens oop is, word gelys), `Path` (tik 'n volledige pad) of `Name` (die naam wat ander sien; jou rekening se naam wanneer jy aangemeld is). Studio kan net vouers bereik wat jy gekies het: vir 'n tekening wat uit 'n vouer oopgemaak is wat nooit gekies is nie, sê dit een keer dat dit nie die tekening as oop kan aanteken nie; `FOlder` kies die vouer, en slotte werk daar van dan af. Die slot is 'n nota vir mense, nie 'n versperring nie: 'n ander program kan die lêer steeds skryf. In 'n blaaier is daar geen vouers om in te kyk nie, en die opdrag sê so.

### OVERKILL

Verwyder duplikaat-voorwerpe en maak oorvleuelende lyne en boë netjies, vir tekeninge wat vol dubbele lynwerk aankom. `Select objects to clean up`, {{key:Enter}}, dan weer {{key:Enter}} om op te ruim met die getoonde instellings, of verander eers een:

- `Tolerance`: hoe na twee koördinate moet wees om as dieselfde te tel (0.000001 om mee te begin; 0 beteken presies dieselfde).
- `Ignore`: eienskappe wat tussen twee voorwerpe mag verskil wat andersins dieselfde is. Tik 'n naam om dit te wissel: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, of `None` / `All`. {{key:Enter}} wanneer klaar.
- `Overlap`: aan of af. Aan: lyne langs een reguit lyn wat oorvleuel word een lyn ('n lyn wat binne 'n ander lê, word eenvoudig uitgevee), en boë op een sirkel wat oorvleuel word een boog; boë wat 'n volle draai sluit word 'n sirkel, en 'n boog op 'n sirkel word uitgevee.
- `Ends`: aan of af. Aan: lyne langs een reguit lyn en boë op een sirkel wat net end-tot-end raak word een stuk.

Elke soort voorwerp word vir duplikate nagegaan: twee voorwerpe is duplikate wanneer hul meetkunde dieselfde is binne die toleransie en hul laag, kleur, lyntipe, lyntipeskaal, lynwydte, dikte, deurskynendheid en hoogte pas (minus die wat jy ignoreer). Lyne en oop polilyne pas ook wanneer hulle andersom geteken is. Die eerste voorwerp in die tekenvolgorde bly en hou sy eie eienskappe. Die opdrag rapporteer hoeveel voorwerpe dit nagegaan en geskrap het: duplikate, oorvleuelende stukke wat saamgevoeg is, stukke wat end-tot-end saamgevoeg is. Een {{cmd:UNDO}} neem alles terug. Die instellings hou tot jy die tekenvenster sluit.

Dit laat met rus: voorwerpe op gesluite lae en versteekte voorwerpe. Dit voeg nie lyne met 'n hoogte (Z) saam nie (presiese duplikate daarvan gaan wel), en dit raak nie segmente binne 'n polilyn aan nie (hulle word nie uitgedun nie), 'n lyn wat op 'n polilynsegment lê nie, en 'n geslote polilyn wat andersom geteken is nie.

### DRAWORDER

Verander watter voorwerpe voor geteken word. `Select objects to re-order`, {{key:Enter}}, dan `Above objects`, `Under objects`, `Front` of `Back` ({{key:Enter}} = `Back`). `Above objects` en `Under objects` vra vir die verwysingsvoorwerpe: die seleksie gaan net voor die voorste van hulle, of net agter die agterste. Die gekose voorwerpe hou hul eie volgorde onder mekaar. Een ontdoen-stap. Die volgorde word met die tekening gestoor in DWG en DXF, waar dit die volgorde is waarin die voorwerpe geskryf word.

Op die skerm word elke voorwerp in die tekening se volgorde geteken, soos ander programme die lêer oopmaak en teken: 'n soliede arsering, 'n breë polilyn of 'n teksmasker bedek die lyne en teks agter dit, en wat voor dit is, bedek dit. Waar 'n lyn 'n teks kruis, wys albei. Prente en aangehegte PDF-bladsye bly onder die lynwerk. In 'n baie groot tekening waarvan die vulsels en lynwerk meer as 256 keer oorvleuel en wissel, hou die eerste 256 hul volgorde, en die res teken hul vulsels onder die lyne, sodat hertekening vinnig bly.

### TEXTTOFRONT

Bring teks, maatlyne en leiers voor alles anders in die oop ruimte: `Text`, `Dimensions`, `Leaders` of `All` ({{key:Enter}} = `All`). Een ontdoen-stap. Sê so wanneer daar geen is nie, of wanneer hulle reeds vooraan is.

### HATCHTOBACK

Stuur elke arsering van die oop ruimte agter alles anders, sodat vulsels ophou om lynwerk en teks in die gestoorde lêer te bedek. Geen vrae nie. Een ontdoen-stap.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Wys net die gekose voorwerpe: alles anders in die oop ruimte gaan uit sig totdat {{cmd:UNISOLATEOBJECTS}}. Anders as {{cmd:LAYISO}} werk dit op die voorwerpe wat jy kies, ongeag hul lae, en verander geen laag nie. Versteekte voorwerpe word nie geteken, gekies, gevasvang, gezoem of gedruk nie, en opdragte wat `ALL` neem slaan hulle oor. Wat jy teken terwyl voorwerpe geïsoleer is, wys soos gewoonlik.

Dit is net vir die sessie: niks daarvan word met die tekening gestoor nie, dit is nie 'n ontdoen-stap nie, en as jy die tekening weer oopmaak, wys alles. Terwyl voorwerpe versteek is, wys die statusbalk 'n knoppie met hul getal; klik dit om hulle weer te wys.

### HIDEOBJECTS

Versteek die gekose voorwerpe totdat {{cmd:UNISOLATEOBJECTS}}. Dieselfde reëls as {{cmd:ISOLATEOBJECTS}}: vir die sessie net, nie gestoor nie, nie 'n ontdoen-stap nie.

### UNISOLATEOBJECTS

Aliasse: `UNISOLATE`, `UNHIDE`. Wys elke voorwerp wat deur {{cmd:ISOLATEOBJECTS}} of {{cmd:HIDEOBJECTS}} versteek is weer, en sê hoeveel teruggekom het.

### LAYLOCKFADE

Stel hoe voorwerpe op gesluite lae lyk en of 'n klik hulle bereik. Dit sê die huidige toestand, dan neem dit:

- 'n getal van 0 tot 90: die verbleikingshoeveelheid in persent (50 om mee te begin). 0 skakel die verbleiking af.
- `ON` of `OFF`: verbleiking aan of af, die hoeveelheid behoue.
- `Pick`, dan `Yes` of `No`: mag 'n klik voorwerpe op gesluite lae kies terwyl geen opdrag loop nie? `No` (die verstek): hulle kan glad nie gekies word nie. `Yes`: 'n klik of venster kies hulle sodat {{ui:Eienskappe}} hulle kan wys; hulle kan steeds nie verander word nie, en 'n opdrag se eie `Select objects` neem hulle nooit nie.

Voorwerpvaslegging vind voorwerpe op gesluite lae in albei gevalle. Drukke word nooit verbleik nie. Albei instellings is joune, nie die tekening s'n nie, en is ook in {{ui:Instellings}} onder {{ui:Gesluite lae}}.

### BURST

Ontbind blokverwysings en hou wat hul attribute sê. `Select block references to burst`, {{key:Enter}}: elke verwysing word vervang deur die blok se voorwerpe, en elke sigbare attribuut se waarde word gewone teks op daardie attribuut se eie laag ('n attribuut op laag 0 beland op die verwysing se laag, soos die blok se ander voorwerpe op laag 0). Onsigbare attribute word laat val. 'n Blok binne die blok bly 'n blokverwysing. Een ontdoen-stap; dit rapporteer die verwysings wat gebars is en die attribuutwaardes wat in teks verander is.

Dit weier 'n gekoppelde tekening by naam (bind dit eers, of kopieer daaruit met {{cmd:NCOPY}}), en laat ander gekose voorwerpe met rus. Vir blokverwysings gee {{cmd:EXPLODE}} dieselfde voorwerpe; {{cmd:BURST}} neem net blokverwysings en tel die attribuuttekst.

### TXT2MTXT

Alias: `T2M`. Voeg enkelreël-tekste in een paragraafteks saam. `Select single-line text to join`, {{key:Enter}}, dan `Paragraph` (die reëls loop saam en breek by die breedste reël se breedte) of `Lines` (elke teks bly sy eie reël); {{key:Enter}} neem die een wat laas gebruik is. Die reëls word bo na onder gerangskik, dan links na regs, langs die rigting van die boonste teks. Die paragraaf hang vanaf die boonste teks se linkerbo-hoek en neem sy hoogte, rotasie, styl, laag en kleur. Een ontdoen-stap.

Teks wat reeds paragraafteks is, lee teks en ander voorwerpe in die seleksie word met rus gelaat, en die opdrag sê hoeveel.

### NCOPY

Kopieer voorwerpe uit 'n blokverwysing of 'n gekoppelde tekening in die tekening, sonder om iets te ontbind. `Pick an object inside a block reference or a linked drawing`: die voorwerp naaste aan die keuse word gekopieer waar dit wys, hoe diep ook al binne blokke dit sit; kies meer, dan {{key:Enter}}. Volgende `Base point to move the copies`: {{key:Enter}} laat hulle op hul plek, of gee 'n basispunt en 'n tweede punt. Die hele opdrag is een ontdoen-stap.

'n Afskrif neem die laag waarop dit wys: 'n voorwerp op laag 0 binne 'n blok beland op die laag van die verwysing waarin dit gesit het, en 'n ByBlock-kleur word daardie verwysing se kleur. Vanaf 'n gekoppelde tekening word laag `Plan|Walls` `Plan$0$Walls` (die naam wat die skakel gee), gemaak met die gekoppelde laag se kleur, lyntipe en lynwydte. 'n Attribuut se waarde word as teks gekopieer. Blokverwysings op gesluite lae kan nie gekies word nie.

### FLATTEN

Stel die hoogte (Z) en die dikte van die gekose voorwerpe op 0. `Select objects to flatten`, {{key:Enter}}. Dit maak ook die voorwerpe binne die blokdefinisies plat wat die seleksie gebruik (en die blokke binne daardie), sodat elke verwysing na daardie blokke verander; gekoppelde tekeninge word gelaat soos hulle is. Een ontdoen-stap; dit rapporteer hoeveel voorwerpe verander het, en sê so wanneer geen een 'n hoogte of dikte gehad het nie.

Wat CadCraft van die derde dimensie in 'n 2D-tekening hou, is: 'n hoogte op sirkels, boë, ellipse, punte, teks, blokverwysings, arserings, leiers en polilyne (hul hoogte), 'n hoogte by elke einde van 'n lyn, en 'n dikte op lyne, sirkels, boë, polilyne, punte en teks, soos die lêer dit gehad het. {{cmd:FLATTEN}} maak presies daardie skoon. Dit raak nie die 3D-model op die 3D-oortjie, 3D-vlakke of soliede liggame aan nie, en 'n voorwerp wat in 'n skuins vlak geteken is, is reeds in die tekenvlak gebring toe die lêer oopgemaak is.

### BREAKLINE

Teken 'n lyn met 'n breeksimbool, vir 'n aansig wat kort gesny is. Dit sê die huidige grootte en verlenging, dan `First point of the break line` (of `Size` / `Extension` om dit eers te verander), `Second point`, en `Where the break symbol sits`: klik langs die lyn, of {{key:Enter}} vir die middel. Die resultaat is een polilyn op die huidige laag: die lyn, wat elke punt met die verlenging verbygaan, met 'n Z-vormige streep so hoog as die grootte en half so lank.

`Size` en `Extension` word as jou instellings onthou (die grootte begin op twee keer die teksHoogte van die maat keer die maatskaal; die verlenging op die helfte van die grootte). {{key:Enter}} herhaal die opdrag.

### AUDIT

Kontroleer die oop tekening vir skade en herstel dit. {{cmd:AUDIT}} kyk na elke voorwerp in die model, op die blaaie en binne blokke, en na die laagtabel, en lys wat dit vind volgens soort:

- getalle wat nie eindig is nie of belaglik groot is;
- voorwerpe sonder grootte: 'n lyn van geen lengte, 'n sirkel van geen radius, 'n polilyn met een plek, teks sonder letters of hoogte, 'n blokverwysing van nul skaal;
- voorwerpe op 'n laag wat die tekening nie het nie; verwysings na 'n blok wat nie daar is nie; teks- en maatstylnaam en lyntipenaam wat nie in die tekening is nie;
- blokke wat hulself bevat, direk of deur ander blokke;
- voorwerpe wat 'n id, 'n sleutel of 'n lêerhandvatsel deel;
- maatlyne sonder die punte waarvandaan hulle gemeet word, en arserings waarvan die grens nie 'n geslote omtrek is nie.

Dan vra dit `Fix them? [Yes/No]`. `No` verander niks nie. `Yes` herstel alles in een ontdoen-stap: wat nie getek kan word nie, word verwyder (slegte getalle, geen grootte, ontbrekende blok, gebroke maat, 'n arsering sonder bruikbare grens, die verwysing wat 'n sirkel van blokke sluit); 'n ontbrekende laag word gemaak; onbekende styl- en lyntipenamme gaan terug na die verstekke; 'n gedeelde sleutel word vervang. Dit druk hoeveel voorwerpe verwyder is en hoeveel herstel. Dieselfde bevindings verskyn in die Probleme-paneel, elk met sy eie {{ui:Herstel}}.

Dit weier niks nie, maar dit kyk net na wat CadCraft self teken: data wat vir ander programme gehou word (3D-soliede liggame, OLE-voorwerpe) word nie oopgemaak nie.

### RECOVER

Maak 'n beskadigde DXF of DWG oop. {{cmd:RECOVER}} vra vir die lêer, lees wat gelees kan word in plaas van die lêer te weier, lys wat oorgeslaan of aangeneem is, en kontroleer en herstel dan die tekening soos {{cmd:AUDIT}} met `Yes` doen.

- DXF: lyne wat nie deel van 'n kode-en-waarde-paar is nie, word oorgeslaan totdat die pare weer pas; 'n afdeling sonder 'n einde word gesluit; 'n lêer wat kort afgesny is, word tot die afsnit gelees; 'n binêre DXF wat kort afgesny is, word tot sy laaste heelwaarde gelees. Wanneer 'n afdeling, 'n blok of 'n voorwerp steeds nie gelees kan word nie, word dit weggelaat en by naam genoem, en die lees gaan verby dit.
- DWG: voorwerpe wat hul kontroles druk of nie gedekodeer kan word nie, word weggelaat, en 'n verlore voorwerplys word herbou deur die voorwerpdata na te loop.

Die lêer op die skyf word nie verander nie. Die herstelde tekening maak ongestoor oop: stoor dit onder 'n nuwe naam. 'n Lêer waaruit niks heeltemal gelees kan word nie, word geweier, met die rede.

### LEGACYTEXT

Skakel teks wat met ou 8-bis Viëtnamese lettertipes getik is om na Unicode. Kort name `TEXTTOUNICODE` en `VNTEXT`.

Ouer Viëtnamese tekeninge hou hul teks as Westerse karakters wat net die lettertipe in Viëtnamees verander: TCVN3-teks in die ABC-lettertipes (`.VnTime`, `.VnArial`, en die hoofletter-lettertipes wie se name op `H` eindig), en VNI-teks in die VNI-lettertipes (`VNI-Times`). CadCraft wys so teks soos dit lees sodra die tekening oop is, deur die lettertipe van sy teksstyl, van die voorwerp, of van 'n lopie binne paragraafteks; die lêer hou steeds die ou karakters.

{{cmd:LEGACYTEXT}} sê hoeveel tekste dit in elke kodering gevind het en vra `Convert … to Unicode?`. `Yes` herskryf elkeen (model, blaaie, blokke, attribuutwaardes en definisies) en gee die teksstyle 'n Unicode-lettertipe (Times New Roman, Arial of Courier New volgens die ou lettertipe se soort), in een ontdoen-stap. Formatering binne paragraafteks word behou.

Wanneer geen teks 'n bekende lettertipe gebruik nie ('n styl wat sy lettertipenaam verloor het), vra dit `Read selected texts as [Tcvn3/Vni/None]`: kies die kodering en kies die tekste. Teks wat reeds Unicode is, word met rus gelaat. Maatteks-oorskrywings en multileier-teks word nie omgeskakel nie.
