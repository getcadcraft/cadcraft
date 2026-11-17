---
title: Modelare în 3D
summary: Vedeți desenul în 3D pe fila 3D și creați din el solide simple: extrudare (cu înclinare sau de-a lungul unui traseu), revoluție, împingerea și tragerea fețelor, cutii, cilindri și pene, unire, scădere și intersectare, apoi mutare, copiere, rotire și ștergere, și plasarea unor vederi 2D plate ale lor pe o foaie.
keywords: 3d, trei d, solid, solide, 3dsolid, regiune, corp, acis, sat, sab, solide din alte programe, deschidere desen 3D, extrudare, extrude, ext, revolve, rev, baleiere, sweep, înclinare, taper, traseu, path, presspull, împingere tragere, push pull, box, cutie, cilindru, cylinder, cyl, pană, wedge, 3dorbit, orbitare, orbit, vedere, vscurrent, stil vizual, umbrit, linie ascunsă, cadru de sârmă, raze x, xray, iso, perspectivă, paralelă, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, cub de vizualizare, uniune, uni, scădere, su, intersectare, in, boolean, combinare, unire solide, viewbase, flatshot, vedere plată, vedere 2D, vedere de desen, vedere de față, vedere de sus, vedere laterală, linii ascunse
from: 13060e71
---

## Ce veți crea

O amprentă de cameră de 1000 × 600 extrudată într-un bloc înalt de 400, o față trasă în sus și un cilindru alături — apoi modelul salvat împreună cu desenul și exportat pentru un vizualizator 3D sau o imprimantă.

Fila {{ui:3D}} stă lângă {{ui:Model}}, sub desen. Ea arată desenul din spațiul model, întins pe sol, în culorile straturilor (straturile oprite sau înghețate rămân ascunse), și solidele pe care le creați. Prima dată când se deschide, vederea 3D se încarcă; după aceea comută imediat.

## Extrudarea unei forme

1. Pe fila {{ui:Model}}, tastați `REC` și apăsați {{key:Enter}}. Tastați `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Faceți clic pe fila {{ui:3D}}. Bara de instrumente afișează grupul {{ui:3D}} în locul grupurilor de desen.
3. Faceți clic pe {{ui:Extrudare}} (sau tastați {{cmd:EXTRUDE}}, `EXT`). Faceți clic în interiorul dreptunghiului, apoi apăsați {{key:Enter}}.
4. Tastați `400` și apăsați {{key:Enter}}. Istoricul spune „Extrudat 1 solid, înălțime 400” și volumul său.

Polilinii închise (inclusiv cu arce), dreptunghiuri, poligoane, cercuri și elipse se extrudează; liniile și polilinii deschise nu, iar istoricul spune de ce. Puteți selecta formele mai întâi pe fila {{ui:Model}} și apoi tasta `EXTRUDE` acolo. În loc să tastați înălțimea, o puteți indica prin clic: conturul urmărește cursorul în sus și în jos. O înălțime negativă coboară. Tastați `D` la solicitarea înălțimii ca să ștergeți formele 2D după extrudare (`D` din nou le păstrează).

La solicitarea înălțimii, `T` (Unghi de înclinare) cere un unghi în grade: laturile se înclină cu el, deci partea de sus este mai mică (un unghi negativ o mărește); un unghi prea abrupt pentru formă este refuzat. `P` (Traseu) baleiază formele de-a lungul unui traseu în loc (vezi mai jos).

## Revoluție și baleiere

- {{cmd:REVOLVE}} (`REV`, sau {{ui:Mai multe}} › {{ui:Revoluție în jurul unei axe}}): selectați forme închise, apăsați {{key:Enter}}, apoi faceți clic pe cele două capete ale axei (sau tastați `X` ori `Y` pentru axa desenului prin 0,0), apoi tastați un unghi sau apăsați {{key:Enter}} pentru rotație completă. Forma se rotește în jurul axei și se ridică din sol: desenați jumătate din conturul unei vaze alături de o linie, apoi faceți revoluție în jurul liniei. Forma poate atinge axa, dar nu o poate traversa. O rotație completă are 48 de pași.
- {{cmd:SWEEP}} (sau {{ui:Mai multe}} › {{ui:Baleiere de-a lungul unui traseu}}, sau `P` la solicitarea înălțimii din EXTRUDE): selectați forme închise (profilul), apăsați {{key:Enter}}, apoi faceți clic pe traseu: o linie, o polilinie, un arc, un cerc sau o elipsă. Profilul se ridică transversal pe traseu, cu mijlocul pe el, și se întinde de-a lungul lui; colțurile sunt îmbinate la bisectoare, iar un traseu închis face un inel. Un dreptunghi mic baleiat de-a lungul conturului unei camere face o plintă; un cerc de-a lungul unei polilinii face o țeavă.

## Împingerea și tragerea unei fețe

1. Faceți clic pe {{ui:Împinge/Trage}} (sau tastați {{cmd:PRESSPULL}}).
2. Faceți clic pe fața de sus a blocului.
3. Tastați `100` și apăsați {{key:Enter}}, sau mutați cursorul și faceți clic. Blocul are acum 500 de înălțime.

## Cutii, cilindri și pene

- {{cmd:BOX}}: faceți clic sau tastați două colțuri, apoi o înălțime.
- {{cmd:CYLINDER}} (`CYL`): centrul, raza, apoi o înălțime. Cilindrii și cercurile extrudate au 48 de laturi, umbrite neted.
- {{cmd:WEDGE}} (`WE`): două colțuri și o înălțime. Are înălțimea completă în primul colț și scade până la zero în celălalt.

Pe fila {{ui:3D}}, un clic cade pe fața sau muchia de sub cursor, altfel pe sol, astfel încât o cutie poate sta pe alt solid.

## Mutarea, copierea, rotirea și ștergerea solidelor

Pe fila {{ui:3D}}, un clic selectează un solid; trageți de la stânga la dreapta pentru fereastră, de la dreapta la stânga pentru intersectare. Apoi:

- {{cmd:MOVE}}: faceți clic pe un punct de bază și pe locul unde ajunge, sau tastați `<100,0,0>` (sau `@100,0`) pentru o distanță pe X, Y și Z.
- {{cmd:COPY}}: la fel, lăsând originalul.
- {{cmd:ROTATE}}: tastați un unghi (se rotește în jurul centrului selecției, în jurul lui Z), sau faceți clic pe centru, un punct de pornire și unghiul.
- {{cmd:ERASE}} sau {{key:Delete}}.

## Unirea, scăderea și intersectarea solidelor

Deschideți {{ui:Mai multe}} din bara 3D, sau tastați comanda:

- {{cmd:UNION}} (`UNI`): selectați solidele, apăsați {{key:Enter}}: devin un singur solid.
- {{cmd:SUBTRACT}} (`SU`): selectați solidele de păstrat și apăsați {{key:Enter}}, apoi pe cele de îndepărtat și apăsați din nou {{key:Enter}}. O gaură printr-un bloc: desenați un cilindru prin el, apoi scădeți cilindrul.
- {{cmd:INTERSECT}} (`IN`): selectați solidele, apăsați {{key:Enter}}: rămâne doar ce au în comun toate.

Istoricul spune volumul rezultatului. Fiecare operație este un pas de anulare. Prima pe care o executați încarcă motorul booleean 3D (circa 0,5 MB; inclus în {{ui:Salvare pentru offline}}). Pot fi combinate doar solide închise: un solid cu muchii deschise (din fețe 3D izolate ale altui program) este refuzat, cu motivul. Rezultatul este un singur solid; fețele curbe rămân alcătuite din fațete plate, ca și cilindrul.

Faceți dublu clic pe un solid ca să-i editați fețele și muchiile separat; {{key:Esc}} îl închide din nou. Orice modificare 3D este un pas de anulare în același istoric cu desenul: {{key:Mod+Z}} anulează ultimul lucru făcut pe oricare filă.

## Vederi plate pe o foaie

1. Deschideți o filă de foaie (sau rămâneți pe {{ui:Model}}), apoi tastați {{cmd:VIEWBASE}} (sau `FLATSHOT`).
2. Alegeți vederea: {{key:Enter}} pentru față, sau `T` (Sus), `R` (Dreapta), `L` (Stânga), `BA` (Spate), `BO` (Jos), `I` (Izometrică).
3. {{key:Enter}} afișează liniile ascunse, punctat; `H` le lasă afară.
4. {{key:Enter}} ia scara propusă de CadCraft: pe o foaie, cea mai mare scară standard (de exemplu 1:20) la care vederea încape în mai puțin de jumătate din hârtie. Sau tastați una: `1:50`, `2:1`.
5. Faceți clic, sau tastați, unde ajunge centrul vederii.

Vederea este o singură referință de bloc, `VIEW-FRONT-1` și așa mai departe: muchiile vizibile pe stratul VIEW-VISIBLE (0.5 mm), cele ascunse pe VIEW-HIDDEN (punctat, 0.25 mm). Mutați-o, cotați-o și trasați-o ca orice alt desen. Este o imagine a solidelor de la momentul creării; după ce le modificați, ștergeți vederea și rulați din nou {{cmd:VIEWBASE}}. Pentru mai multe vederi, rulați comanda câte o dată pentru fiecare.

## Privirea în jur

Trageți cu rotița pentru orbitare, {{key:Shift}} + tragere cu rotița sau cu butonul dreapta pentru panoramare, iar rotița pentru zoom la cursor. Pe touchpad, două degete orbitează, iar un ciupit face zoom. Un clic dreapta fără tragere este {{key:Enter}}, ca pe celelalte file. `3DORBIT` lasă butonul stâng să orbiteze până apăsați {{key:Enter}} sau {{key:Esc}}.

- {{ui:Vederi}} (sau {{cmd:VIEW}}): Izometrică, Sus, Jos, Față, Spate, Stânga, Dreapta, Perspectivă sau Paralelă, și Zoom la tot.
- {{ui:Stil}} (sau {{cmd:VSCURRENT}}, `VS`): Umbrit, Umbrit cu muchii, Linie ascunsă, Cadru de sârmă sau Raze X.

Punctele pe care faceți clic se agață de solide (colțuri, muchii, fețe) și de desenul 2D de pe sol: capetele și mijloacele liniilor și arcelor lui și punctele de pe ele. Liniile 2D nu se selectează niciodată pe fila 3D. Când o comandă cere obiecte 2D (EXTRUDE, REVOLVE, SWEEP), un clic alege unul, o tragere de la stânga la dreapta ia ce se află în întregime în fereastră, iar una de la dreapta la stânga ia ce intersectează, ca pe fila {{ui:Model}}.

Un cub de vizualizare se află în dreapta sus a filei 3D: faceți clic pe o față, muchie sau colț ca să priviți de acolo, trageți ca să orbitați, iar butonul casă revine la vederea izometrică. Aceasta este {{ui:Automată}}, începutul {{ui:Indicator de colț}} din [Setările CadCraft](topic:settings). Setat la {{ui:Cub de vizualizare}}, fila {{ui:Model}} afișează și ea un cub, privind de sus; un clic pe orice altă latură deschide fila 3D privind de acolo. Setat la {{ui:Pictograma axelor}}, ambele file arată în schimb marcajul axelor.

## Solide din alte programe

Un desen dintr-un alt program poate conține solide 3D, regiuni și corpuri (3DSOLID, REGION, BODY: celălalt program își păstrează forma ca date ACIS). CadCraft le arată pe fila 3D pe cele din spațiul model, în culoarea stratului lor și cu propriile muchii, la prima deschidere a filei; linia de comandă spune apoi câte au fost desenate.

- Se afișează așa cum sunt: nu le puteți selecta, muta sau modifica. Straturile oprite sau înghețate le ascund.
- Salvarea ca DWG le scrie înapoi neschimbate, în orice versiune DWG, ca celălalt program să le primească din nou. Fișierele DXF nu le păstrează: CadCraft le scrie doar în DWG și spune asta la salvarea ca DXF.
- Desenate: fețe plate și fețe pe cilindri, conuri, sfere, tori și suprafețe spline simple, cu muchii drepte, rotunde și spline. O față pe orice alt tip de suprafață, sau una pe care CadCraft nu o poate așeza, nu este ghicită: este lăsată deoparte și listată, de exemplu „Încă nedesenate (solide 3D): 2 fețe pe suprafață spline (sweepsur), o suprafață încă nerealizată.”
- Solidele din interiorul blocurilor nu se afișează încă; „Despre acest fișier” le numără.

Fețele curbe sunt desenate ca bucăți plate mici, la circa 7.5° una de alta, așa că un solid curb arată ușor fațetat de aproape.

## Salvare și export

Salvarea păstrează modelul 3D, în DWG și în DXF. Fiecare față intră ca față 3D pe stratul `CC-3D`, astfel că alte programe arată solidele, iar CadCraft își păstrează propria copie exactă în fișier, pe care o citește la redeschiderea desenului, cu vederea 3D așa cum era (cameră, proiecție și stil vizual). Fețele 3D făcute de alte programe apar pe fila 3D ca fețe izolate, păstrate împreună ca un singur grup. O față 3D dintr-un bloc intră o dată pentru fiecare referință a blocului din model, plasată și rotită ca referința; în bloc în sine, și pe o foaie, o față 3D se desenează plat, ca un contur.

{{ui:Exportare}} din grupul 3D descarcă doar solidele: GLB pentru vizualizatoare și web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) sau STL pentru imprimare 3D, în milimetri ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} întreabă care.

:::note
Modelul 3D are dimensiunea reală. Un desen fără unități se consideră în milimetri, deci `1000` înseamnă un metru. Dacă schimbați ulterior unitățile desenului (Proprietăți, fără nimic selectat), solidele se scalează odată cu ele ca să rămână pe desen, iar istoricul spune asta. Un {{key:Mod+Z}} anulează împreună schimbarea unităților și scalarea.
:::
