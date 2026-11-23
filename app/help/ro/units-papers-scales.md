---
title: Unități, formate de hârtie și scări
summary: Ce înseamnă unitățile de desen în CadCraft, formatele de hârtie pentru foi și trasări, fiecare scară standard și cum se leagă dimensiunile textului și ale cotelor de scara de trasare.
keywords: unități, milimetri, inci, picioare, picioare și inci, arhitectural, inginerie, fracționar, fracții, lunits, format lungime, precizie, metri, format hârtie, a3, a1, arch d, ansi, tabloid, letter, scară, 1:100, 1/4 inch, scară arhitecturală, scară de inginerie, insunits
from: 7dc9b62e
---

## Unități de desen

Desenați la dimensiune reală, în unități de desen. Ce înseamnă o unitate este setarea **Unități** a desenului:

1. Apăsați {{key:Esc}} ca să nu fie nimic selectat, pe fila {{ui:Model}}.
2. În {{ui:Setări curente}}, alegeți {{ui:Unități}}: {{ui:Fără unități}}, {{ui:Milimetri}}, {{ui:Centimetri}}, {{ui:Metri}}, {{ui:Inci}} sau {{ui:Picioare}}.

Cotele pot scrie lungimile în milimetri, centimetri, metri sau kilometri, oricare ar fi unitatea desenului: vedeți [Cote în mm, cm, m sau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Schimbarea unităților nu redimensionează nimic. Schimbă modul în care se citesc scările pe foi și în trasări și ce scări sunt oferite. Un desen deschis dintr-un DWG sau DXF păstrează unitățile salvate în fișier; secțiunea {{ui:Desen}} din panoul din stânga le arată.

Un desen {{ui:Fără unități}} este tratat ca fiind în unitatea hârtiei: milimetri pe hârtia ISO, inci pe hârtia americană.

## Picioare și inci, și fracții

Modul în care lungimile sunt **scrise și tastate** este o setare separată, formatul lungimii. Nu schimbă nicio geometrie, doar cum arată numerele și ce puteți tasta.

1. Apăsați {{key:Esc}} ca să nu fie nimic selectat, pe fila {{ui:Model}}.
2. În {{ui:Setări curente}}, alegeți {{ui:Format lungime}}: {{ui:Zecimal}} (`150.5`), {{ui:Arhitectural}} (`12'-6 1/2"`), {{ui:Inginerie}} (`12'-6.5"`), {{ui:Fracționar}} (`150 1/2`) sau {{ui:Științific}} (`1.505E+02`).
3. Alegeți {{ui:Precizie}}: zecimalele, sau cea mai mică fracție (1/16 este alegerea obișnuită pentru arhitectural).

Sau tastați {{cmd:UNITS}} (`UN`) și răspundeți la cele două întrebări.

Cu {{ui:Arhitectural}} sau {{ui:Inginerie}}, o unitate de desen este un inci, ca în AutoCAD: setați și {{ui:Unități}} pe {{ui:Inci}}. Puteți tasta lungimi în picioare și inci oriunde se cere o lungime și în casetele din {{ui:Proprietăți}}:

| Tastați | Înseamnă |
|---|---|
| `12'6"` sau `12'-6"` | 12 picioare 6 inci (150) |
| `12'6-1/2"` | 12 picioare și 6½ inci. Folosiți o liniuță înainte de fracție: {{key:Space}} este {{key:Enter}} în linia de comandă. |
| `12'` | 12 picioare |
| `6"` sau `6` | 6 inci: un număr simplu înseamnă inci |
| `1/2`, `6-1/2` | fracțiile merg în orice format |

Punctele primesc aceleași lungimi: `@12'6",0` sau `@10'<90`. Unghiurile rămân în grade.

Formatul apare în istoric ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: ariile ca inci pătrați și picioare pătrate), în {{ui:Proprietăți}}, în coordonatele din bara de stare și în **cotele noi**. Foile își păstrează unitățile de hârtie (milimetri sau inci) ca zecimale.

:::note
Formatul lungimii se salvează în fișierele DWG și DXF, iar fiecare cotă își păstrează propriul format: un desen salvat se deschide așa cum l-ați lăsat.
:::

## Formate de hârtie

Foile și trasările modelului folosesc aceste dimensiuni, în ambele orientări:

| Hârtie | Dimensiune | Unitatea pe foaie |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimetri |
| ISO A3 | 420 × 297 mm | milimetri |
| ISO A2 | 594 × 420 mm | milimetri |
| ISO A1 | 841 × 594 mm | milimetri |
| ISO A0 | 1189 × 841 mm | milimetri |
| Letter | 11 × 8.5 in | inci |
| Legal | 14 × 8.5 in | inci |
| Tabloid / ANSI B | 17 × 11 in | inci |
| ANSI C | 22 × 17 in | inci |
| ANSI D | 34 × 22 in | inci |
| ARCH C | 24 × 18 in | inci |
| ARCH D | 36 × 24 in | inci |
| ARCH E | 48 × 36 in | inci |

Foile noi încep pe ISO A3 pentru desenele metrice și fără unități, iar pe Tabloid pentru desenele în inci sau picioare. Trasările modelului încep pe ISO A4 sau Letter în același fel, apoi rețin ultima alegere. Foile din fișierele deschise își păstrează propria dimensiune, arătată ca „Personalizat” când nu este una dintre acestea.

## Scări

O scară `1:n` înseamnă că o unitate pe hârtie arată n din aceeași unitate în model, astfel încât 1:100 arată 1 m de clădire ca 10 mm de hârtie. CadCraft calculează asta din unitățile desenului și din unitatea hârtiei.

**Scări metrice**, oferite pentru orice desen: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Scări arhitecturale**, oferite când unitățile sunt inci sau picioare: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Scări de inginerie**, oferite când unitățile sunt inci sau picioare: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Propriile scări.** Tastați {{cmd:SCALELISTEDIT}} (sau `SCALELIST`) ca să adăugați o scară proprie, precum 1:75 sau o scară de șantier de 2 paper : 300 drawing. `Adăugare` cere un nume, apoi unitățile de hârtie și de desen (un nume ca `1:75` oferă propriile numere; apăsați {{key:Enter}} ca să le luați). `Editare`, `Ștergere`, `Listă` și `Resetare` lucrează pe aceeași listă; `Resetare` revine la lista standard. Scările proprii apar după cele standard în lista de scări a ferestrelor de vizualizare din Proprietăți și în dialogul {{ui:Trasare în PDF}}; o fereastră de vizualizare la acea scară se citește cu numele ei, iar scările se salvează în desen (DWG și DXF 2000) ca lista de scări a desenului. Un desen deschis dintr-un alt program își aduce lista; scările pe care le are și care se potrivesc cu una standard nu apar de două ori.

Când o fereastră este orientată cu {{ui:Afișare întreg modelul}} sau {{ui:Alegeți o fereastră pe model…}}, CadCraft alege cea mai mare scară standard care încape. {{ui:Potrivire la tot modelul}} stabilește în schimb o scară exactă, care se citește ca un raport simplu.

## Dimensiuni pe hârtie și în model

Dimensiunile textului și ale cotelor sunt în unitățile spațiului în care desenați.

| Doriți pe hârtie | Desenat pe o foaie | Desenat în model la 1:50 (desen în mm) | Desenat în model la 1/4" = 1'-0" (desen în inci) |
|---|---|---|---|
| text de 2.5 mm | 2.5 | 125 | — |
| text de 3/32" | 0.09375 | — | 4.5 |

Pentru cote, păstrați dimensiunile ca dimensiuni de hârtie și setați scara generală ({{cmd:DIMSCALE}}) la scara de trasare: 50 pentru 1:50, 48 pentru 1/4" = 1'-0". Vedeți [Setarea dimensiunilor cotelor](topic:dimension-settings).

## Adnotarea după scară

Desenați modelul la dimensiune reală și lăsați CadCraft să facă calculele de mai sus.

1. Selectați textul sau cotele care trebuie să-și păstreze dimensiunea pe hârtie. În Proprietăți bifați {{ui:Adnotativ}}. {{ui:Mărime pe hârtie}} arată atunci, de exemplu, `2.5 mm la 1:50`.
2. Tastați {{cmd:ANNOSCALE}} și scara la care va fi tipărit desenul, de exemplu `1:100`.

Fiecare text și cotă adnotativă se redimensionează ca să se tipărească la aceeași dimensiune la noua scară: textul de 2.5 mm are înălțimea 125 într-un desen în milimetri la 1:50 și 250 la 1:100. Lățimea unui paragraf se schimbă odată cu el; textul, săgețile și spațiile unei cote se schimbă împreună (scara sa generală). Este un pas de anulare, iar obiectele care nu sunt adnotative nu sunt schimbate niciodată.

Setarea se salvează în DWG și DXF: celelalte programe citesc semnul adnotativ, iar CadCraft păstrează și scara pentru care este dimensionat fiecare obiect.

Dacă biroul stabilește înălțimile hârtiei în suplimentul Politici implicite (Setări › General › Politici implicite › Dimensiuni de adnotare pe hârtie), {{cmd:ANNOSCALE}} setează și înălțimea cu care începe textul nou la înălțimea biroului pentru notele la acea scară. Vedeți [Politici implicite](topic:default-policies).

### Un obiect la mai multe scări

O foaie arată adesea același plan la 1:100 și o parte din el la 1:50. Dați notelor și cotelor ambele scări, iar fiecare fereastră de vizualizare le arată la dimensiunea lor pe hârtie:

1. Selectați textul și cotele adnotative și tastați `OBJECTSCALE`.
2. Alegeți `Adăugare` și tastați scara, de exemplu `1:50`. (`Scara curentă` adaugă scara de adnotare a desenului; `Listă` arată ce păstrează fiecare obiect; `Ștergere` scoate una.)

O fereastră de vizualizare a cărei scară este în lista unui obiect îl arată la dimensiunea pentru acea scară: textul de 2.5 mm se desenează înalt de 250 printr-o fereastră la 1:100 și de 125 printr-una la 1:50, pe ecran și în trasare. Obiectul rămâne unde este; doar dimensiunea diferă. Într-o fereastră a cărei scară nu este în lista obiectului, acesta se arată la dimensiunea pe care o are, până tastați `ANNOALLVISIBLE` și alegeți `OFF`: atunci este lăsat afară acolo. {{cmd:ANNOSCALE}} redimensionează obiectele a căror listă conține scara nouă și lasă celelalte neschimbate.

Listele se salvează în DWG și DXF ca date proprii CadCraft. Un alt program vede fiecare obiect ca adnotativ, la scara unică pentru care este dimensionat. Comutatorul ANNOALLVISIBLE nu se păstrează în fișier.

## Grosimi de linie și tipuri de linie

Un strat sau un obiect poate avea o **grosime de linie** (0.05 până la 2.11 mm) și un **tip de linie** (întrerupt, ascuns, axă, fantomă, punct…). Setați-le în panoul din dreapta: când nu este nimic selectat, {{ui:Tip de linie}} și {{ui:Grosime de linie}} sub {{ui:Setări curente}} sunt ce primesc obiectele noi ({{ui:DupăStrat}} ca să urmeze stratul lor), iar cele două de sub {{ui:Strat}} sunt ale stratului curent. Cu obiecte selectate, aceleași două rânduri și {{ui:Scară tip de linie}} schimbă acele obiecte. Comenzile sunt {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) și {{cmd:LTSCALE}} (`LTS`).

Tipurile de linie se arată pe ecran și în trasări. Liniuțele lor sunt în unități de desen: un desen metric folosește dimensiunile ISO (DASHED: liniuțe de 12.7 mm), iar un desen în inci pe cele în inci (0.5"). Dacă liniuțele par prea mici sau prea mari, schimbați {{ui:Scară tip de linie}} (LTSCALE) al desenului: fiecare liniuță și spațiu se înmulțește cu ea; scara proprie a unui obiect o înmulțește din nou. Un model prea fin ca să fie văzut se desenează ca linie plină.

Grosimile de linie se tipăresc în trasări, în mm pe hârtie indiferent de scară. Liniile cu grosimea {{ui:Implicit}} folosesc lățimea peniței alese în dialogul {{ui:Trasare în PDF}} (0.13 până la 0.70 mm; 0.25 mm la început); o grosime de 0 se tipărește ca cea mai subțire linie. Pe ecran fiecare linie are un pixel lățime până apăsați {{ui:LWT}} în bara de stare (sau tastați {{cmd:LWDISPLAY}}): atunci o grosime peste 0.25 mm se desenează mai lată (0.5 mm = 2 pixeli) în model, iar pe foaie la lățimea ei reală pe hârtie. Alegerea se păstrează în acest browser.

## Standardul de birou

Un birou poate păstra înălțimile textului pe hârtie, straturile, câmpurile cartușului și șabloanele într-o singură înregistrare, standardul de birou. CadCraft îl citește în această ordine: înregistrarea desenului (setată cu {{cmd:OFFICESTANDARD}} › `Importare`, păstrată în fișier), apoi standardul comun al echipei, apoi Politicile implicite. Textul și cotele adnotative își iau înălțimea pe hârtie din el, la scara de adnotare. Un standard gol nu schimbă nimic. {{cmd:OFFICESTANDARD}} › `Straturi` adaugă straturile de birou pe care le lipsesc unui desen.
