---
title: Venind de la alt software de desen
summary: Cum se corespund comenzile, tastele și obiceiurile cunoscute cu CadCraft și diferențele care încurcă desenatorii cu experiență.
keywords: trecere, diferențe, migrare, obiceiuri, aliasuri, introducere dinamică, pickfirst, pickadd, qsave, saveas, salvare ca, mtext, ctb, urmărire polară, xref, comenzi rapide de la tastatură, familiar, copyclip, pasteclip, pasteorig, copybase, clipboard
from: b58688e7
---

Dacă ați folosit AutoCAD sau un program construit pe același model, cea mai mare parte din ce știți funcționează aici: linia de comandă, aliasuri precum `L`, `C`, `TR` și `O`, Enter sau Space ca să repetați, selecția prin fereastră și prin intersecție, agățările la obiect pe F3, Ortogonal pe F8, spațiul model cu layout-uri și ferestre de vizualizare. Această pagină listează ce se corespunde direct și apoi diferențele care îi prind pe oameni nepregătiți. Citiți a doua jumătate chiar dacă parcurgeți prima.

## Ce se corespunde direct

| Obicei | În CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Aceleași comenzi, aceiași aliasi |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | La fel |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Aceleași comenzi de cotare |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` tastate în linia de comandă | La fel, pentru cotele noi |
| `B` ca să faceți un bloc, `I` ca să inserați, `PU` ca să curățați | La fel (curățarea elimină doar blocurile nefolosite) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` urmat de `E` sau `W` | La fel |
| Tastarea `_LINE` sau `-LAYER` dintr-un script sau dintr-un obicei | Caracterele `_`, `-`, `.` sau `'` de la început sunt ignorate |
| Enter sau Space la o solicitare goală repetă ultima comandă | La fel |
| Esc anulează; Esc din nou golește selecția | La fel |
| `@dx,dy`, `@d<a`, unghiuri tastate în sens invers acelor de ceas de la est | La fel |
| Fereastră de la stânga la dreapta, intersecție de la dreapta la stânga, clic-clic; apăsați și trageți pentru lasou, Space trece între fereastră / intersecție / gard (LASSOMODE) | La fel |
| Selectați întâi, apoi comanda (substantiv-verb) | La fel; o comandă terminată golește selecția |
| `ALL` și `L` la Select objects | La fel |
| Shift+clic scoate din selecție | La fel. Setările pot face ca un clic să înlocuiască selecția, ca PICKADD 0: vezi [Setările CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Aceleași comenzi și taste; lipirea așază copia după colțul ei din stânga jos, ca PASTECLIP |
| Agățare la obiect pe F3, grilă pe F7, Ortogonal pe F8 | Aceleași taste |
| Dublu clic pe rotiță ca să măriți la extinderi | La fel |
| Textul oglindit rămâne lizibil | La fel (ca la MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | La fel; pe Mac, Command funcționează și el |

[Referința comenzilor](topic:commands) listează fiecare comandă și alias.

:::tip
Dacă vă place panglica din AutoCAD, alegeți stilul de meniu {{ui:Desen clasic}} din {{ui:Setări}} › {{ui:CadCraft}} › {{ui:Meniuri, taste și mouse}}: filele Pornire, Inserare, Adnotare, Parametric, Vizualizare, Gestionare și Ieșire peste aceeași linie de comandă, iar butonul din mijloc panoramează, în timp ce clicul dreapta este Enter. Vezi [Meniuri, taste și mouse](topic:menus-keys-and-mouse).
:::

[Harta comenzilor](topic:command-map) listează fiecare comandă pe care o are CadCraft cu numele ei scurte, iar [foaia de referință rapidă](topic:cheat-sheet) cuprinde cele 40 pe care le veți folosi cel mai mult (și ca PDF pe o pagină).

## Diferențe care încurcă oamenii

### Punctele tastate sunt absolute

Cu introducerea dinamică activată, celălalt program tratează un `100,0` tastat pentru un al doilea punct ca relativ. **Linia de comandă a CadCraft nu face asta:** acolo, `x,y` se măsoară întotdeauna de la origine. Cu {{ui:Dyn}} ({{key:F12}}) activat, folosiți în schimb câmpurile sale: distanța, {{key:Tab}}, unghiul. Folosiți `@100,0` pentru „100 spre dreapta față de ultimul punct” sau mutați cursorul în direcția potrivită și tastați doar `100`.

### Shift omite agățările; nu activează Ortogonal

Ținând Shift apăsat în timp ce faceți clic, se ignoră agățările la obiect pentru acel clic. Nu comută temporar Ortogonal. Folosiți F8 sau butonul {{ui:Ortogonal}}.

### Clicul dreapta este întotdeauna Enter

Nu există meniu la clic dreapta. Un clic dreapta în desen este Enter: încheie o comandă, finalizează o selecție sau repetă ultima comandă. În timpul unei mutări cu mânere sau al unei casete de selecție, anulează în schimb. Trageți cu butonul dreapta ca să panoramați.

### Fără panoramare cu bara de spațiu

Space este Enter, deci ținerea apăsată a Space și tragerea nu panoramează. Panoramați cu butonul din mijloc sau cu cel din dreapta ori măriți și micșorați din nou în alt loc, cu rotița.

### Tăiere și Prelungire

Tăierea și Prelungirea pornesc în modul Rapid: fiecare obiect vizibil este o muchie de tăiere sau o limită, piesa de sub indicator arată ce va dispărea, o cale trasă taie fiecare piesă pe care o traversează, iar un obiect pe care nu-l traversează nimic este șters. {{key:Shift}} comută între tăiere și prelungire. `O` trece în modul Standard (alegeți întâi muchiile), `F` și `C` sunt gard și intersecție, `E` este EDGEMODE, `R` șterge. Nu există opțiunea `P` (Project): CadCraft taie în planul desenului.

### Racordare și șanfrenare

{{cmd:FILLET}} și {{cmd:CHAMFER}} acceptă opțiunile pe care le cunoașteți: Anulare (U), Polilinie (P), Raza (R) (sau Distanță (D), Unghi (A) și Metodă (E)), Tăiere (T) și Multiplu (M), iar {{key:Shift}}+clic pentru un colț ascuțit. O racordare între o polilinie și o linie adaugă arcul ca obiect separat, în loc să-l unească în polilinie, iar colțurile polilinie de lângă un segment de arc sunt lăsate așa cum sunt.

### Text paragraf și text pe un singur rând

`T`, `MT` și `MTEXT` sunt text paragraf tastat direct, cu lățime, interlinie și aliniere; `DT` și `DTEXT` sunt text pe un singur rând, așa cum îl cunoașteți. Nu există stiluri de text sau coloane, iar formatarea din text (îngroșat, fracții suprapuse) încă nu poate fi tastată; formatarea care vine dintr-un fișier este păstrată, desenată și salvată (vezi [Adăugarea textului și a etichetelor](topic:text#formatting-inside-paragraph-text-from-other-programs)). Totul se desenează cu un font de tip Helvetica.

### Salvarea înseamnă „descărcați o copie”

{{key:Mod+S}}, `SAVE` și `QSAVE` descarcă o copie în formatul desenului: un DWG deschis se salvează ca DWG, un DXF ca DXF. În browser nimic nu este suprascris pe loc, iar fișierele deschise nu se schimbă niciodată. În CadCraft Studio, {{key:Mod+S}} scrie înapoi în fișierul deschis.

`SAVEAS` ({{key:Mod+Shift+S}}) este o casetă de dialog mică, nu un explorator de fișiere: alegeți {{ui:DWG}} (cu {{ui:Versiune}} lui, de la AutoCAD 2000 până la 2018), {{ui:DXF R12}} sau {{ui:DXF 2000}} și faceți clic pe {{ui:Salvare}}. Browserul decide unde ajunge descărcarea. `DXFOUT` descarcă întotdeauna DXF R12.

Un DWG deschis se salvează în versiunea în care a venit; un desen nou se salvează în formatul AutoCAD 2000, dacă nu alegeți altceva. Foile, cotele și modelele de hașură sunt păstrate. Vezi [Fișiere: ce se deschide, ce se salvează](topic:files#saving).

### Straturi: mai simplu

- Fiecare modificare de strat (activare, înghețare, blocare, culoare, trasare, tip de linie, grosime de linie, strat curent) este un singur pas de {{ui:Anulare}}.
- Dezactivarea și înghețarea au același efect în CadCraft.
- Straturile pe care un desen le îngheață într-o fereastră rămân înghețate acolo: pe ecran, în trasări și când îl salvați ca DWG sau DXF.
- O fereastră care arată un strat în propria lui culoare, tip de linie, grosime sau transparență păstrează asta pe ecran, în trasări și într-un DWG salvat (DXF păstrează setările proprii ale stratului; salvarea o spune). Modificarea acestor lucruri pe fiecare fereastră încă nu este realizată.
- Nu există manager de proprietăți ale straturilor și nu există stări de straturi; {{cmd:RENAME}}, {{cmd:LAYMRG}} și {{cmd:LAYDEL}} redenumesc, îmbină și șterg straturi. Tipurile și grosimile de linie se setează în panoul din dreapta (vezi [Grosimi și tipuri de linie](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} și {{cmd:LAYMCUR}} funcționează prin alegere.
- Salvarea în DXF R12 scrie numele straturilor cu majuscule. Un DWG le păstrează așa cum le-ați tastat.

### Stiluri de cotare

`DIMSTYLE` deschide un manager pentru stiluri numite (nou, modificare, stabilire ca curent, comparare, aplicare). `DIMSCALE` și celelalte setări schimbă tot ce folosesc cotele noi, iar fiecare cotă își păstrează propriile dimensiuni, pe care le puteți schimba și în panoul Proprietăți. Stilul curent nu este salvat în fișier. Cotele urmează formatul de lungime al desenului (zecimal, sau picioare și inchi cu {{cmd:UNITS}}), ori propriul {{ui:Format}}. Vezi [Stabilirea dimensiunilor cotelor](topic:dimension-settings).

### Trasarea este mai simplă

Tabelele de stiluri de trasare funcționează după culoare, ca fișierele CTB: Monocrom, Culoare și Nuanțe de gri sunt incluse, puteți face propriile tabele, iar fiecare foaie își păstrează tabelul. Citirea fișierelor CTB este construită după descrierea publicată și a fost încercată doar pe fișiere făcute de noi; tabelele de stiluri de trasare cu nume (STB) și configurările paginii încă nu sunt realizate. Liniile se trasează la grosimea lor de linie, celelalte la o singură grosime de peniță. Foile se trasează la 1:1 pe propriul format de hârtie; modelul se trasează la o scară aleasă sau potrivită. Vezi [Trasarea în PDF](topic:plot-pdf).

### Lucrul într-o fereastră de vizualizare

Cum vă așteptați: faceți dublu clic în interiorul unei ferestre de vizualizare (sau tastați {{cmd:MSPACE}}) ca să lucrați pe model prin ea, și faceți dublu clic în afara ei (sau {{cmd:PSPACE}}) ca să reveniți la foaie. În interior, panoramarea și zoomul schimbă ce arată fereastra, dacă afișarea ei nu este blocată; altfel mută foaia. Un clic pe o filă de sub desen iese și el din fereastra de vizualizare. Vezi [Lucrul pe model printr-o fereastră de vizualizare](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Urmărire și introducere dinamică da, agățare la grilă încă nu

Grila este doar pentru privit; punctele nu se agață de ea (nu există modul de agățare F9). Urmărirea polară ({{key:F10}}, cu pasul setat prin {{cmd:POLARANG}}) și urmărirea agățărilor la obiect ({{key:F11}}: stați pe un punct de agățare ca să-l preluați) funcționează cum le cunoașteți; vezi [Agățarea la obiecte](topic:object-snaps#polar-tracking). Introducerea dinamică ({{key:F12}}) arată distanța și unghiul (sau X și Y) lângă cursor; vezi [Introducerea coordonatelor și a distanțelor](topic:coordinate-entry#dynamic-input).

### Picioare și inchi

Alegeți {{ui:Format lungime}} {{ui:Arhitectural}} sau {{ui:Inginerie}} (sau tastați {{cmd:UNITS}}) și tastați lungimile cum le cunoașteți: `12'6"`, `12'6-1/2"`. Folosiți cratimă, nu spațiu, înaintea unei fracții: {{key:Space}} este {{key:Enter}}. Setați și {{ui:Unități}} la {{ui:Inchi}}, ca foile și trasările să ofere scări arhitecturale. Formatul este păstrat în fișierele DWG și DXF salvate. Vezi [Picioare și inchi](topic:units-papers-scales#feet-and-inches-and-fractions).

### Copierea și lipirea rămân în CadCraft

{{key:Mod+C}}, {{key:Mod+X}} și {{key:Mod+V}} copiază, decupează și lipesc obiecte într-un desen, între desene și între filele CadCraft din același browser. Clipboard-ul este propriu CadCraft: nu puteți lipi obiecte CadCraft într-un alt program, nici obiecte dintr-un alt program în CadCraft. Lipirea dintr-un desen în alte unități nu rescalează: folosiți apoi {{cmd:SCALE}}. {{key:Mod+D}} este o duplicare care se mută odată cu indicatorul, o adăugire a CadCraft. Vezi [Copiere, lipire și duplicare](topic:copy-paste).

### Taste ale browserului pe care nu le puteți folosi

O pagină web nu poate prelua {{key:Mod+N}}, {{key:Mod+W}} sau {{key:Mod+T}} de la browser: acestea deschid și închid ferestre și file. Folosiți butonul {{ui:Nou}} sau tastați `NEW`. Vezi [Taste, mouse și touchpad-uri](common:keys).

## Comenzi încă nerealizate pe care le-ați căuta

{{cmd:TABLE}} este încă nerealizată. Tastarea ei afișează „Comandă necunoscută”. ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} și {{cmd:XREF}} sunt realizate.) [Încă nerealizat](topic:not-built-yet) listează ce să faceți în schimb, astăzi.
