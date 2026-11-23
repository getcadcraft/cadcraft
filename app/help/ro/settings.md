---
title: Setările CadCraft
summary: Setările aplicației de desenare: dimensiunea cursorului, de unde atârnă de cursor o copie lipită, ce face un clic asupra selecției, câte rânduri folosește bara de instrumente, unde stă linia de comandă și cât de înaltă este, o zonă de sus compactă și indicatorul din colț.
keywords: linie de comandă, linie de comandă plutitoare, plutire, ancorare, un rând, f2, istoric comenzi, commandline, cmdline, toparea, zonă de sus, compact, cursorsize, cursor ecran complet, cursor de la margine la margine, rânduri bară de instrumente, afișare bară de instrumente, ctrl f1, setări, preferințe, opțiuni, indicator colț, cub de vizualizare, pictogramă axe, pictogramă UCS, cursor, reticul, casetă de alegere, punct de lipire, punct de bază, clic pe obiecte, selecție, pickadd, shift, resetare
from: ae1a81db
---

Deschideți {{ui:Setări}} din roata din bara aplicației sau cu {{key:Mod+,}}. Prima filă, {{ui:CadCraft}}, conține setările acestei aplicații; {{ui:General}} conține cele pe care le împart toate aplicațiile familiei (tema, dimensiunea textului și lățimile panourilor, aspectul și ordinea barei de instrumente). Setările CadCraft există doar în aplicație: le schimbați aici, iar acest browser le ține minte. {{ui:Resetare setări CadCraft}} le readuce pe toate la început.

## Cursor

**Mic**, **Mediu** (implicit), **Mare** sau **Ecran complet**: dimensiunea reticulului și a casetei de alegere din desen. O casetă de alegere mai mare alege obiectele și de la o distanță mai mare, ceea ce ajută pe un ecran tactil sau într-un desen foarte fin.

**Ecran complet** trage cele două linii ale reticulului de la margine la margine a desenului, și când nu rulează nicio comandă, ca să verificați cu ochiul că două lucruri se aliniază pe toată vederea. Cu vederea împărțită, liniile rămân în panoul în care lucrați. La fel ca {{cmd:CURSORSIZE}} 100 din AutoCAD: tastați {{cmd:CURSORSIZE}} și 100 pentru ecran complet; un număr mai mic alege cea mai apropiată dimensiune (sub 5 Mic, 5 până la 9 Mediu, 10 până la 99 Mare).

## Punctul de lipire

Unde atârnă de cursor o copie lipită după {{key:Mod+V}} ({{cmd:PASTECLIP}}), până faceți clic:

- **Colțul din stânga jos** (implicit): colțul din stânga jos al extinderii obiectelor copiate, ca în AutoCAD.
- **Centru**: mijlocul extinderii lor. Util pentru a plasa un simbol cu ochiul.

O copie făcută cu `COPYBASE` atârnă mereu de punctul de bază pe care l-ați ales. {{ui:Lipire în aceeași poziție}} ({{key:Mod+Shift+V}}) ignoră această setare: păstrează coordonatele inițiale. Vedeți [Copiere, lipire și duplicare](topic:copy-paste).

## Clic pe obiecte

Ce face un clic în desen asupra selecției când nu rulează nicio comandă:

- **Adaugă la selecție** (implicit): fiecare clic sau fereastră adaugă obiecte; {{key:Shift}}+clic, sau o fereastră cu {{key:Shift}}, le scoate.
- **Înlocuiește selecția**: un clic sau o fereastră selectează doar ce alege. {{key:Shift}}+clic adaugă un obiect sau scoate unul care este deja selectat; o fereastră cu {{key:Shift}} adaugă.

La un prompt `Selectați obiecte:` dintr-o comandă, clicurile adaugă mereu (iar {{key:Shift}} elimină), indiferent ce spune această setare. Vedeți [Selectarea obiectelor](topic:select-objects).

## Clic pe un spațiu gol

Ce face un clic unde nu este niciun obiect când nu rulează nicio comandă. În ambele cazuri pornește o fereastră de selecție (un al doilea clic o încheie).

- **Golește selecția** (implicit): ce era selectat se anulează. Țineți {{key:Shift}} apăsat în timp ce faceți clic ca să o păstrați.
- **Păstrează selecția**: selecția rămâne, ca în alte programe de desenare; fereastra se adaugă la ea. Apăsați {{key:Esc}} ca să goliți selecția.

## Trăgând pentru selectare

Ce desenează apăsarea și trăgerea pe un spațiu gol:

- **Lasou** (implicit): un contur liber. Dacă trageți mai întâi spre dreapta, se selectează ce se află în întregime în interior; dacă trageți mai întâi spre stânga, se selectează ce atinge. {{key:Space}} în timp ce trageți comută între fereastră, intersectare și gard.
- **Dreptunghi**: caseta, așa cum se desenează printr-un clic și un al doilea clic.

{{cmd:LASSOMODE}} `1` sau `0` setează același lucru. Vedeți [Selecția cu lasou](topic:lasso-selection).

## Trăgând pentru tăiere și prelungire

Ce face apăsarea pe un spațiu gol și trăgerea în {{cmd:TRIM}} și {{cmd:EXTEND}}:

- **O cale** (implicit): o cale liberă; fiecare bucată pe care o traversează este tăiată (sau prelungită).
- **O fereastră**: o casetă; fiecare bucată pe care o atinge este tăiată, ca la opțiunea `C`.

Vedeți [Tăierea și prelungirea](topic:trim-and-extend).

## Poziția barei de instrumente

{{ui:CadCraft}} › {{ui:Poziția barei de instrumente}}: **Sus** (implicit, cum a fost mereu), **Jos**, **Stânga** sau **Dreapta**. Pe stânga sau dreapta, grupurile de instrumente se așază într-o coloană care derulează când este mai înaltă decât fereastra, iar butoanele se așază câte două sau trei pe linie. Alegerea se salvează cu setările, iar {{cmd:TOOLBARDOCK}} (`TBDOCK`) o setează din linia de comandă. {{ui:General}} › {{ui:Resetați aspectul}} pune bara de instrumente din nou sus.

Barele stilurilor de meniu stau în bara de instrumente și se mută cu ea, dar stilul {{ui:Panglică}} este gândit să meargă de-a lungul sus sau jos: pe o latură primește o coloană îngustă care derulează. Pe telefon, bara de instrumente rămâne unde o pune aspectul de telefon.

## Rândurile barei de instrumente

Câte rânduri folosesc instrumentele deasupra desenului, în bara CadCraft și în stilurile {{ui:Desen clasic}} și {{ui:Panglică}}:

- **Încadrare** (implicit): instrumentele se încadrează în lățimea ferestrei.
- **2 rânduri**: cel mult două rânduri. Când instrumentele se încadrează în două rânduri sau mai puține la această lățime, doar se așază; altfel stau în două rânduri care derulează lateral.
- **1 rând**: un rând care derulează lateral, ceea ce lasă desenului cel mai mult spațiu.

{{key:Shift+Ctrl+F1}} trece prin cele trei, iar {{cmd:TOOLBARROWS}} setează una. Ce arată butoanele (pictograme și text, doar pictograme sau doar text) este o setare din {{ui:General}} › {{ui:Bară de instrumente}}; {{key:Ctrl+F1}} trece prin ea, iar {{cmd:TOOLBAR}} o setează.

## Linia de comandă

Linia de comandă poate rămâne ancorată sub desen, cum a fost mereu, sau poate pluti peste el, și poate fi subțire cât un singur rând.

- **Plutire.** Trageți mânerul din capătul din stânga în desen, sau alegeți {{ui:Plutire peste desen}} din meniul {{ui:Opțiuni linie de comandă}} (cele trei puncte din capătul din dreapta). Trageți din nou mânerul ca s-o mutați; locul ei se păstrează când se schimbă dimensiunea ferestrei. Trageți marginea din dreapta ca s-o faceți mai lată sau mai îngustă. Lăsați-o pe bara de stare, sau alegeți {{ui:Ancorare jos}}, ca s-o ancorați din nou.
- **Mai subțire sau mai înaltă.** Trageți marginea de sus: fiecare pas este un rând de istoric. Până la zero rânduri devine o **linie de comandă dintr-un rând**: doar promptul și ce tastați, iar un mesaj nou apare deasupra ei pentru o clipă. Un dublu clic pe marginea de sus trece între un rând și înălțimea pe care o aveați.
- **Istoricul.** {{key:F2}}, sau butonul cu ceas de pe linia de comandă ({{ui:Istoric comenzi (F2)}}), deschide întregul istoric deasupra liniei (sub ea, când linia pluteste aproape de partea de sus a ferestrei). Tastarea merge tot în linia de comandă; {{key:PageUp}} și {{key:PageDown}} derulează istoricul, iar {{key:Esc}}, {{key:F2}} sau un clic în altă parte îl închid. O tastă proprie pe F2 are prioritate față de aceasta.
- **Din tastatură.** Mânerul este un buton: când are focalizarea, tastele cu săgeți mută o linie de comandă plutitoare (cu {{key:Shift}}, în pași mai mari); {{key:Up}} face plutitoare una ancorată, iar {{key:Down}} la marginea de jos o ancorează. Marginea de sus este un separator: {{key:Up}} și {{key:Down}} adaugă sau scot un rând, {{key:Home}} o face un rând, iar {{key:End}} cea mai înaltă. Cititoarele de ecran aud în continuare fiecare mesaj, inclusiv în linia de comandă dintr-un rând.

{{ui:CadCraft}} › {{ui:Linie de comandă}} are aceleași alegeri: {{ui:Ancorată în partea de jos}} sau {{ui:Plutitoare}}, {{ui:Linii din istoric afișate}} (0 până la 12) și {{ui:Înălțime standard}}. {{cmd:COMMANDLINE}} (`CMDLINE`) le setează din linia de comandă. Locul și înălțimea se țin pentru CadCraft în acest browser, împreună cu restul aspectului, astfel încât un mediu de lucru salvat le păstrează; {{ui:General}} › {{ui:Resetați aspectul}} ancorează din nou linia de comandă la înălțimea standard. Pe telefon, linia de comandă rămâne ancorată cu un rând de istoric; butonul de istoric funcționează și acolo.

{{ui:CadCraft}} › {{ui:Litere pentru opțiuni}} păstrează literele alese pentru opțiunile comenzilor: {{ui:Editare…}} deschide fișierul, {{ui:Importare…}} îl înlocuiește cu unul ales, iar {{ui:Exportare}} îl salvează. Vedeți [Dați opțiunilor comenzilor litere proprii](topic:option-letters).

Când fereastra este scurtă și verificarea aspectului propune un aspect mai strâns, {{ui:Da}} al ei transformă și linia de comandă într-un singur rând, dacă desenul rămâne scurt după bare de instrumente.

## Zona de sus

{{ui:CadCraft}} › {{ui:Zona de sus}}: **Standard** (implicit) sau **Compactă**. Compactă păstrează barele de deasupra desenului mici în orice stil de meniu: dispar numele grupurilor și cuvintele de sub pictograme (sfaturile și cititoarele de ecran le au în continuare), iar butoanele devin mai strânse. Funcționează cu [Rândurile barei de instrumente](topic:settings#toolbar-rows): Compactă și **1 rând** lasă desenului cel mai mult spațiu. {{cmd:TOPAREA}} o setează.

## Indicatorul din colț

Ce stă în colțul desenului:

- **Automat** (implicit): pictograma axelor pe fila {{ui:Model}} și cubul de vizualizare pe fila {{ui:3D}}.
- **Pictograma axelor**: marcajul X și Y din colțul din stânga jos al filei {{ui:Model}}, și un mic marcaj X, Y și Z pe fila {{ui:3D}}.
- **Cub de vizualizare** (ViewCube): un cub în colțul din dreapta sus al ambelor file. Pe fila {{ui:Model}} arată desenul de sus, iar un clic pe altă față, muchie sau colț deschide fila {{ui:3D}} privind de acolo. Pe fila 3D se rotește odată cu vederea: faceți clic ca să priviți dintr-o latură, trageți ca să orbitați, iar casa revine la vederea izometrică. Vedeți [Modelul în 3D](topic:3d-solids).
- **Niciuna**: nimic în colț.

Foile nu arată niciuna.

## Lungimea și aria selecției

- **În bara de stare** (implicit): cu obiecte selectate, bara de stare arată lungimea totală și aria totală a celor închise. Vedeți [Totalurile unei selecții](topic:properties-panel#totals-of-a-selection).
- **Ascunse**: bara de stare le lasă afară. {{ui:Proprietăți}} le arată în continuare pentru mai multe obiecte.

## Grilă, ortogonal și agățări

Acestea nu sunt în casetă: butoanele {{ui:Grilă}}, {{ui:Ortogonal}} și {{ui:Agățare}} din bara de stare (sau {{key:F7}}, {{key:F8}}, {{key:F3}}) și lista agățărilor de obiecte de lângă ele sunt reținute pe măsură ce le părăsiți. Vedeți [Agățarea de punctele obiectelor](topic:object-snaps).
