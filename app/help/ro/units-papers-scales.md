---
title: Unități, mărimi de hârtie și scări
summary: Ce înseamnă unitățile de desen în CadCraft, mărimile hârtiei pentru foi și trasări, fiecare scară standard și cum se raportează mărimea textului și a cotelor la scara de trasare.
keywords: unități, milimetri, inci, picioare, picioare și inci, arhitectural, inginerie, fracționar, fracții, lunits, format lungime, precizie, metri, mărime hârtie, a3, a1, arch d, ansi, tabloid, letter, scară, 1:100, 1/4 inch, scară arhitecturală, scară de inginerie, insunits
from: 8346236a
---

## Unități de desen

Desenați la mărime reală, în unități de desen. Ce reprezintă o unitate este setarea **Unități** a desenului:

1. Apăsați {{key:Esc}} ca să nu fie selectat nimic, pe fila {{ui:Model}}.
2. În {{ui:Setări curente}}, alegeți {{ui:Unități}}: {{ui:Fără unități}}, {{ui:Milimetri}}, {{ui:Centimetri}}, {{ui:Metri}}, {{ui:Inchi}} sau {{ui:Picioare}}.

Cotele își pot scrie lungimile în milimetri, centimetri, metri sau kilometri, indiferent de unitatea desenului: vezi [Cote în mm, cm, m sau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Schimbarea unităților nu redimensionează nimic. Schimbă modul în care sunt citite scările pe foi și în trasări, precum și scările oferite. Un desen deschis dintr-un DWG sau DXF păstrează unitățile stocate în fișier; secțiunea {{ui:Desen}} din panoul din stânga le arată.

Un desen {{ui:Fără unități}} este tratat ca fiind în unitatea hârtiei: milimetri pe hârtie ISO, inci pe hârtie US.

## Picioare și inci, și fracții

Modul în care lungimile sunt **scrise și tastate** este o setare separată, formatul lungimii. Nu schimbă geometria, doar cum arată numerele și ce puteți tasta.

1. Apăsați {{key:Esc}} ca să nu fie selectat nimic, pe fila {{ui:Model}}.
2. În {{ui:Setări curente}}, alegeți {{ui:Format lungime}}: {{ui:Zecimal}} (`150.5`), {{ui:Arhitectural}} (`12'-6 1/2"`), {{ui:Inginerie}} (`12'-6.5"`), {{ui:Fracționar}} (`150 1/2`) sau {{ui:Științific}} (`1.505E+02`).
3. Alegeți {{ui:Precizie}}: numărul de zecimale sau cea mai mică fracție (1/16 este alegerea obișnuită pentru arhitectural).

Sau tastați {{cmd:UNITS}} (`UN`) și răspundeți la cele două întrebări ale sale.

Cu {{ui:Arhitectural}} sau {{ui:Inginerie}}, o unitate de desen este un inci, ca în AutoCAD: setați și {{ui:Unități}} la {{ui:Inchi}}. Puteți atunci tasta lungimi în picioare și inci oriunde se cere o lungime și în casetele din {{ui:Proprietăți}}:

| Tastați | Înseamnă |
|---|---|
| `12'6"` sau `12'-6"` | 12 picioare și 6 inci (150) |
| `12'6-1/2"` | 12 picioare și 6½ inci. Folosiți o liniuță înainte de fracție: {{key:Space}} este {{key:Enter}} în linia de comandă. |
| `12'` | 12 picioare |
| `6"` sau `6` | 6 inci: un număr simplu înseamnă inci |
| `1/2`, `6-1/2` | fracțiile funcționează în orice format |

Punctele primesc aceleași lungimi: `@12'6",0` sau `@10'<90`. Unghiurile rămân în grade.

Formatul apare în istoric ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: ariile în inci pătrați și picioare pătrate), în {{ui:Proprietăți}}, în coordonatele din bara de stare și în **cotele noi**. Foile își păstrează unitățile hârtiei (milimetri sau inci) ca zecimale.

:::note
Formatul lungimii este salvat în fișierele DWG și DXF, iar fiecare cotă își păstrează propriul format: un desen salvat se deschide din nou așa cum l-ați lăsat.
:::

## Mărimile hârtiei

Foile și trasările modelului folosesc aceste mărimi, în oricare orientare:

| Hârtie | Mărime | Unitate pe foaie |
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

Foile noi pornesc de la ISO A3 pentru desenele metrice și fără unități și de la Tabloid pentru desenele în inci sau picioare. Trasările modelului pornesc de la ISO A4 sau Letter, în același fel, apoi rețin ultima alegere. Foile din fișierele deschise își păstrează propria mărime, afișată ca „Personalizată” când nu este una dintre acestea.

## Scări

O scară `1:n` înseamnă că o unitate pe hârtie arată n din aceeași unitate în model, deci 1:100 arată 1 m de clădire ca 10 mm de hârtie. CadCraft calculează asta din unitățile desenului și din unitatea hârtiei.

**Scări metrice**, oferite pentru fiecare desen: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Scări arhitecturale**, oferite când unitățile sunt inci sau picioare: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Scări de inginerie**, oferite când unitățile sunt inci sau picioare: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Scări proprii.** Tastați `SCALELISTEDIT` (sau `SCALELIST`) ca să adăugați o scară proprie, precum 1:75 sau o scară de șantier de 2 hârtie : 300 desen. `Add` cere un nume, apoi unitățile hârtiei și ale desenului (un nume precum `1:75` oferă propriile numere; apăsați {{key:Enter}} ca să le luați pe acestea). `Edit`, `Delete`, `List` și `Reset` lucrează cu aceeași listă; `Reset` revine la lista standard. Scările proprii apar după cele standard, în lista de scări a ferestrei din {{ui:Proprietăți}} și în caseta {{ui:Trasare în PDF}}; o fereastră la acea scară se citește cu numele ei. Scările sunt salvate în desen (DWG și DXF 2000) ca lista de scări a desenului. Un desen deschis dintr-un alt program își aduce lista; scările pe care le are și care corespund uneia standard nu apar de două ori.

Când o fereastră este orientată cu {{ui:Afișare întreg modelul}} sau {{ui:Alegeți o fereastră pe model…}}, CadCraft alege cea mai mare scară standard care încape. {{ui:Potrivire la tot modelul}} stabilește în schimb o scară exactă, care apare ca un raport simplu.

## Mărimile pe hârtie și în model

Mărimile textului și ale cotelor sunt în unitățile spațiului în care desenați.

| Doriți pe hârtie | Desenat pe o foaie | Desenat în model la 1:50 (desen în mm) | Desenat în model la 1/4" = 1'-0" (desen în inci) |
|---|---|---|---|
| text de 2.5 mm | 2.5 | 125 | — |
| text de 3/32" | 0.09375 | — | 4.5 |

Pentru cote, păstrați mărimile ca mărimi pe hârtie și setați scara globală a cotelor ({{cmd:DIMSCALE}}) la scara de trasare: 50 pentru 1:50, 48 pentru 1/4" = 1'-0". Vezi [Setarea mărimilor cotelor](topic:dimension-settings).

## Adnotarea după scară

Desenați modelul la mărime reală și lăsați CadCraft să facă calculele de mai sus.

1. Selectați textul sau cotele care trebuie să-și păstreze mărimea pe hârtie. În {{ui:Proprietăți}} bifați {{ui:Adnotativ}}. {{ui:Mărime pe hârtie}} arată atunci, de exemplu, `2.5 mm at 1:50`.
2. Tastați {{cmd:ANNOSCALE}} și scara la care va fi trasat desenul, precum `1:100`.

Fiecare text și fiecare cotă adnotativă sunt redimensionate astfel încât să se tipărească la aceeași mărime la noua scară: textul de 2.5 mm are înălțimea 125 într-un desen în milimetri la 1:50 și 250 la 1:100. Lățimea unui paragraf se schimbă odată cu el; textul, săgețile și spațiile unei cote se schimbă împreună (scara sa globală). Este un singur pas de anulare, iar obiectele care nu sunt adnotative nu sunt schimbate niciodată.

Setarea este salvată în DWG și DXF: celelalte programe citesc indicatorul de adnotare, iar CadCraft păstrează și scara pentru care este dimensionat fiecare obiect.

Dacă biroul stabilește înălțimile pe hârtie în suplimentul Politici implicite (Setări › Global › Politici implicite › Dimensiuni de adnotare pe hârtie), {{cmd:ANNOSCALE}} stabilește și înălțimea cu care pornește textul nou, la înălțimea biroului pentru note la acea scară. Vezi [Politici implicite](topic:default-policies).

### Un obiect la mai multe scări

Pe o foaie, același plan apare adesea la 1:100, iar o parte a lui la 1:50. Dați notelor și cotelor ambele scări, iar fiecare fereastră le arată la mărimea lor pe hârtie:

1. Selectați textul și cotele adnotative și tastați `OBJECTSCALE`.
2. Alegeți `Add` și tastați scara, de exemplu `1:50`. (`Current scale` adaugă scara de adnotare a desenului; `List` arată ce păstrează fiecare obiect; `Delete` scoate una.)

O fereastră a cărei scară este în lista unui obiect îl arată la mărimea pentru acea scară: textul de 2.5 mm este desenat cu înălțimea 250 printr-o fereastră la 1:100 și cu înălțimea 125 printr-una la 1:50, pe ecran și în trasare. Obiectul rămâne unde este; doar mărimea diferă. Într-o fereastră a cărei scară nu este în lista obiectului, obiectul se afișează la mărimea pe care o are, până tastați `ANNOALLVISIBLE` și alegeți `OFF`: atunci este lăsat deoparte acolo. {{cmd:ANNOSCALE}} redimensionează obiectele care au în listă scara nouă și le lasă pe celelalte cum sunt.

Listele sunt salvate în DWG și DXF ca date proprii ale CadCraft. Un alt program vede fiecare obiect ca adnotativ, la scara unică pentru care este dimensionat. Comutatorul ANNOALLVISIBLE nu este păstrat în fișier.

## Grosimi de linie și tipuri de linii

Un strat sau un obiect poate avea o **grosime de linie** (0.05 până la 2.11 mm) și un **tip de linie** (întrerupt, ascuns, axă, fantomă, punct…). Setați-le în panoul din dreapta: fără nimic selectat, {{ui:Tip de linie}} și {{ui:Grosime de linie}} de sub {{ui:Setări curente}} sunt cele pe care le primesc obiectele noi ({{ui:DupăStrat}} ca să urmeze stratul lor), iar cele două de sub {{ui:Strat …}} sunt ale stratului curent. Cu obiecte selectate, aceleași două rânduri și {{ui:Scară tip de linie}} modifică acele obiecte. Comenzile sunt {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) și {{cmd:LTSCALE}} (`LTS`).

Tipurile de linii se văd pe ecran și în trasări. Liniuțele lor sunt în unități de desen: un desen metric folosește dimensiunile ISO (DASHED: liniuțe de 12.7 mm), iar un desen în inci pe cele în inci (0.5"). Dacă liniuțele par prea mici sau prea mari, schimbați {{ui:Scară tip de linie}} (LTSCALE) al desenului: fiecare liniuță și fiecare spațiu sunt înmulțite cu ea; scara proprie a unui obiect o înmulțește din nou. Un model prea fin ca să fie văzut deloc este desenat ca linie continuă.

Grosimile de linie se tipăresc în trasări, în mm pe hârtie, oricare ar fi scara. Liniile cu grosimea {{ui:Implicit}} folosesc lățimea peniței aleasă în caseta {{ui:Trasare în PDF}} (0.13 până la 0.70 mm; 0.25 mm la început); o grosime de linie 0 se tipărește cea mai subțire. Pe ecran, fiecare linie are un pixel lățime până apăsați {{ui:LWT}} în bara de stare (sau tastați {{cmd:LWDISPLAY}}): atunci o grosime peste 0.25 mm se desenează mai lat (0.5 mm = 2 pixeli) în model și, pe o foaie, la lățimea ei reală pe hârtie. Alegerea este reținută în acest browser.
