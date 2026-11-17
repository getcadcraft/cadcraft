---
title: Setările CadCraft
summary: Setările care țin de aplicația de desen: dimensiunea cursorului, de unde atârnă o copie lipită de cursor, ce face un clic cu selecția, câte rânduri folosește bara de instrumente, unde stă linia de comandă și cât de înaltă este, o zonă de sus compactă și indicatorul din colț.
keywords: linie de comandă, linie de comandă plutitoare, plutire, ancorare, o linie, f2, istoric comenzi, commandline, cmdline, toparea, zona de sus, compact, cursorsize, cruce pe tot ecranul, cursor pe tot ecranul, margine la margine, rânduri bară de instrumente, afișare bară de instrumente, ctrl f1, setări, preferințe, opțiuni, indicator din colț, cub de vizualizare, pictograma axelor, pictograma SCU, cursor, cruce, casetă de alegere, punct de lipire, punct de bază, clic pe obiecte, selecție, pickadd, shift, resetare
from: 0896eb42
---

Deschideți {{ui:Setări}} cu roata dințată din bara aplicației sau cu {{key:Mod+,}}. Prima filă, {{ui:CadCraft}}, cuprinde setările care țin de această aplicație; {{ui:General}} cuprinde cele pe care le au în comun toate aplicațiile familiei (tema, dimensiunea și lățimile textului din panouri, aspectul și ordinea barei de instrumente). Setările CadCraft există doar în aplicație: le modificați aici, iar acest browser le reține. {{ui:Resetare setări CadCraft}} le readuce pe toate la început.

## Cursor

**Mic**, **Mediu** (de la început), **Mare** sau **Ecran complet**: dimensiunea crucii și a casetei de alegere din desen. O casetă de alegere mai mare alege obiecte și de la o distanță puțin mai mare, ceea ce ajută pe un ecran tactil sau pe un desen foarte fin.

**Ecran complet** face cele două linii ale crucii să treacă de la margine la margine prin desen, chiar și când nicio comandă nu rulează, ca să verificați cu ochiul că două lucruri sunt aliniate pe toată vederea. Cu vederea împărțită, liniile rămân în panoul în care lucrați. Același lucru ca {{cmd:CURSORSIZE}} 100 din AutoCAD: tastați {{cmd:CURSORSIZE}} și 100 pentru ecran complet; un număr mai mic alege cea mai apropiată dimensiune (sub 5 Mic, de la 5 la 9 Mediu, de la 10 la 99 Mare).

## Punctul de lipire

De unde atârnă o copie lipită de cursor după {{key:Mod+V}} ({{cmd:PASTECLIP}}), până faceți clic:

- **Colțul din stânga jos** (de la început): colțul din stânga jos al extinderilor obiectelor copiate, ca în AutoCAD.
- **Centru**: mijlocul extinderilor lor. Util ca să plasați un simbol cu ochiul.

O copie făcută cu `COPYBASE` atârnă mereu de punctul de bază ales. {{ui:Lipire în aceeași poziție}} ({{key:Mod+Shift+V}}) ignoră această setare: păstrează coordonatele originale. Vezi [Copiere, lipire și duplicare](topic:copy-paste).

## Clic pe obiecte

Ce face un clic în desen cu selecția, când nu rulează nicio comandă:

- **Adaugă la selecție** (de la început): fiecare clic sau fereastră adaugă obiecte; {{key:Shift}}+clic sau o fereastră cu {{key:Shift}} le scoate.
- **Înlocuiește selecția**: un clic sau o fereastră selectează doar ce alege. {{key:Shift}}+clic adaugă un obiect sau scoate unul deja selectat; o fereastră cu {{key:Shift}} adaugă.

La o solicitare `Selectați obiecte:` dintr-o comandă, clicurile adaugă mereu (iar {{key:Shift}} elimină), indiferent de această setare. Vezi [Selectarea obiectelor](topic:select-objects).

## Clic pe un loc gol

Ce face un clic unde nu există niciun obiect, când nu rulează nicio comandă. În ambele cazuri pornește o fereastră de selecție (al doilea clic o termină).

- **Golește selecția** (de la început): ce era selectat se pierde. Țineți {{key:Shift}} apăsat în timp ce faceți clic ca să o păstrați.
- **Păstrează selecția**: selecția rămâne, ca în alte programe de desen tehnic; fereastra se adaugă la ea. Apăsați {{key:Esc}} ca s-o goliți.

## Trăgere pentru selecție

Ce desenează apăsarea și trăgerea pe un loc gol:

- **Lasou** (de la început): un contur de mână liberă. Dacă mutați întâi spre dreapta, se selectează ce se află complet în interior; dacă mutați întâi spre stânga, se selectează ce atinge. {{key:Space}} în timpul trăgerii comută între fereastră, intersectare și gard.
- **Dreptunghi**: caseta, desenată ca un clic urmat de un al doilea clic.

{{cmd:LASSOMODE}} `1` sau `0` setează același lucru. Vezi [Selecție cu lasou](topic:lasso-selection).

## Trăgere pentru tăiere și prelungire

Ce face apăsarea pe un loc gol și trăgerea în {{cmd:TRIM}} și {{cmd:EXTEND}}:

- **Un traseu** (de la început): un traseu de mână liberă; fiecare bucată pe care o traversează este tăiată (sau prelungită).
- **O fereastră**: o casetă; fiecare bucată pe care o atinge este tăiată, ca la opțiunea `C`.

Vezi [Tăiere și prelungire](topic:trim-and-extend).

## Poziția barei de instrumente

{{ui:CadCraft}} › {{ui:Poziția barei de instrumente}}: **Sus** (de la început, cum a fost mereu), **Jos**, **Stânga** sau **Dreapta**. Pe stânga sau pe dreapta, grupurile de instrumente se așază într-o coloană care se derulează când este mai înaltă decât fereastra, iar butoanele se așază câte două sau trei pe un rând. Alegerea se salvează cu setările, iar {{cmd:TOOLBARDOCK}} (`TBDOCK`) o setează din linia de comandă. {{ui:General}} › {{ui:Resetați aspectul}} readuce bara de instrumente sus.

Barele stilurilor cu meniu stau în bara de instrumente și se mută odată cu ea, dar stilul {{ui:Panglică}} este făcut să ruleze de-a lungul sus sau jos: pe o latură primește o coloană îngustă care se derulează. Pe telefon, bara de instrumente rămâne unde o pune aspectul telefonului.

## Rânduri ale barei de instrumente

Câte rânduri folosesc uneltele deasupra desenului, în bara de instrumente CadCraft și în stilurile {{ui:Desen clasic}} și {{ui:Panglică}}:

- **Încadrare automată** (de la început): uneltele se așază pe lățimea ferestrei.
- **2 rânduri**: cel mult două rânduri. Când uneltele se așază pe două rânduri sau mai puține la această lățime, doar se așază; altfel stau în două rânduri care se derulează lateral.
- **1 rând**: un rând care se derulează lateral, ceea ce lasă desenului cel mai mult spațiu.

{{key:Shift+Ctrl+F1}} parcurge cele trei variante, iar {{cmd:TOOLBARROWS}} setează una. Ce afișează butoanele (pictograme și text, doar pictograme sau doar text) este o setare din {{ui:General}} › {{ui:Bară de instrumente}}; {{key:Ctrl+F1}} parcurge variantele, iar {{cmd:TOOLBAR}} le setează.

## Linia de comandă

Linia de comandă poate rămâne andocată sub desen, cum a fost mereu, sau poate pluti peste el, și poate fi la fel de subțire ca un singur rând.

- **Faceți-o plutitoare.** Trageți mânerul din capătul ei stâng în desen, sau alegeți {{ui:Plutire peste desen}} din meniul {{ui:Opțiuni linie de comandă}} (cele trei puncte din capătul drept). Trageți din nou mânerul ca s-o mutați; locul ei se păstrează când se schimbă dimensiunea ferestrei. Trageți marginea dreaptă ca s-o faceți mai lată sau mai îngustă. Lăsați-o pe bara de stare, sau alegeți {{ui:Ancorare jos}}, ca s-o andocați din nou.
- **Faceți-o mai subțire sau mai înaltă.** Trageți marginea de sus: fiecare pas este un rând de istoric. Până la zero rânduri devine o **linie de comandă dintr-un singur rând**: doar solicitarea și ce tastați, iar un mesaj nou apare deasupra ei pentru un moment. Un dublu clic pe marginea de sus trece între un singur rând și înălțimea pe care o aveați.
- **Istoricul.** {{key:F2}}, sau butonul cu ceas de pe linia de comandă ({{ui:Istoric comenzi (F2)}}), deschide tot istoricul deasupra liniei (sub ea, când linia pluteșete aproape de partea de sus a ferestrei). Tastarea merge în continuare spre linia de comandă; {{key:PageUp}} și {{key:PageDown}} derulează istoricul, iar {{key:Esc}}, {{key:F2}} sau un clic în altă parte îl închide. O tastă proprie pe F2 are prioritate.
- **De la tastatură.** Mânerul este un buton: când are focalizarea, tastele săgeți mută o linie de comandă plutitoare (cu {{key:Shift}}, în pași mai mari); {{key:Up}} face plutitoare una andocată, iar {{key:Down}} la marginea de jos o andochează. Marginea de sus este un separator: {{key:Up}} și {{key:Down}} adaugă sau scot un rând, {{key:Home}} o face un singur rând, iar {{key:End}} cea mai înaltă. Cititoarele de ecran aud în continuare fiecare mesaj, inclusiv pe linia de comandă dintr-un singur rând.

{{ui:CadCraft}} › {{ui:Linie de comandă}} are aceleași alegeri: {{ui:Ancorată în partea de jos}} sau {{ui:Plutitoare}}, {{ui:Linii din istoric afișate}} (0 până la 12) și {{ui:Înălțime standard}}. {{cmd:COMMANDLINE}} (`CMDLINE`) le setează din linia de comandă. Locul și înălțimea se păstrează pentru CadCraft în acest browser, împreună cu restul aspectului, astfel încât un mediu de lucru salvat le transportă; {{ui:General}} › {{ui:Resetați aspectul}} andochează linia de comandă la înălțimea standard. Pe telefon linia de comandă rămâne andocată cu un rând de istoric; butonul istoricului funcționează și acolo.

Când fereastra este scurtă și verificarea aspectului propune un aspect mai strâns, {{ui:Da}} trece și linia de comandă pe un singur rând, dacă desenul rămâne scurt după bare de instrumente.

## Zona de sus

{{ui:CadCraft}} › {{ui:Zona de sus}}: **Standard** (de la început) sau **Compactă**. Compactă face barele de deasupra desenului mici în orice stil de meniu: numele grupurilor și cuvintele de sub pictograme dispar (sfaturile și cititoarele de ecran le păstrează), iar butoanele sunt mai strânse. Funcționează împreună cu [Rânduri ale barei de instrumente](topic:settings#toolbar-rows): Compactă și **1 rând** lasă desenului cel mai mult spațiu. {{cmd:TOPAREA}} o setează.

## Indicatorul din colț

Ce stă în colțul desenului:

- **Automat** (de la început): pictograma axelor pe fila {{ui:Model}} și cubul de vizualizare pe fila {{ui:3D}}.
- **Pictograma axelor**: marcajul X și Y din colțul stânga jos al filei {{ui:Model}}, și un mic marcaj X, Y și Z pe fila {{ui:3D}}.
- **Cub de vizualizare**: un cub în colțul din dreapta sus al ambelor file. Pe fila {{ui:Model}} arată desenul de sus, iar un clic pe altă față, muchie sau colț deschide fila {{ui:3D}} privind de acolo. Pe fila 3D se rotește odată cu vederea: faceți clic ca să priviți dintr-o latură, trageți ca să orbitați, iar căsuța revine la vederea izometrică. Vezi [Modelul în 3D](topic:3d-solids).
- **Niciuna**: nimic în colț.

Planșele nu arată niciuna dintre ele.

## Lungimea și aria selecției

- **În bara de stare** (de la început): cu obiecte selectate, bara de stare arată lungimea lor totală și aria totală a celor închise. Vezi [Totalurile unei selecții](topic:properties-panel#totals-of-a-selection).
- **Ascunse**: bara de stare nu le arată. Proprietățile le arată totuși pentru mai multe obiecte.

## Grilă, ortogonal și agățări

Acestea nu sunt în casetă: butoanele {{ui:Grilă}}, {{ui:Ortogonal}} și {{ui:Agățare}} din bara de stare (sau {{key:F7}}, {{key:F8}}, {{key:F3}}) și lista de agățări la obiecte de lângă ele sunt reținute pe măsură ce le lăsați. Vezi [Agățarea la puncte de pe obiecte](topic:object-snaps).
