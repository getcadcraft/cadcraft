---
title: Hașură și umplere a suprafețelor
summary: Umpleți o suprafață cu o culoare plină sau cu un model standard, făcând clic în interiorul ei sau alegând forme închise, stabiliți scara și unghiul modelului și modificați ulterior o hașură.
keywords: hașură, hatch, umplere, umplere plină, model, ansi31, ansi37, cărămidă, pământ, plasă, linii de secțiune, poché, insulă, contur, scară, unghi
from: 14399174
---

## Ce veți realiza

O secțiune de perete umplută cu modelul ANSI31, o coloană lăsată goală în interiorul ei și o umplere plină în coloană.

## Hașurare prin clic în interiorul unei suprafețe

1. Desenați un dreptunghi (`REC`, `0,0`, `@2000,1200`) și un cerc în interiorul lui (`C`, `1000,600`, `300`). Faceți clic pe {{ui:Extinderi}}.
2. Faceți clic pe {{ui:Hașură}} din grupul {{ui:Desen}} sau tastați `H` și apăsați {{key:Enter}}. Istoricul indică modelul curent, de exemplu `Current hatch: ANSI31, scale 1, angle 0°`.
3. Tastați `P` și apăsați {{key:Enter}}, tastați `ANSI31` și apăsați {{key:Enter}}.
4. Tastați `SC` și apăsați {{key:Enter}}, tastați `20` și apăsați {{key:Enter}}. Dimensiunile modelului sunt pe hârtie, deci un desen trasat la 1:20 necesită scara 20.
5. La `Pick internal point`, faceți clic în interiorul dreptunghiului, în afara cercului. Hașura apare ca previzualizare.
6. Apăsați {{key:Enter}}. Dreptunghiul este hașurat; cercul din interior rămâne gol, pentru că este o insulă.

Faceți clic în mai multe suprafețe înainte de a apăsa {{key:Enter}} pentru a le transforma într-o singură hașură. `U` anulează ultima suprafață.

## Umplere plină

1. Tastați `H` și apăsați {{key:Enter}}.
2. Tastați `P`, apăsați {{key:Enter}}, tastați `SOLID` și apăsați {{key:Enter}}.
3. Faceți clic în interiorul cercului, apoi apăsați {{key:Enter}}.

## Hașurarea formelor închise selectate

În loc să faceți clic în interior, tastați `S` (Selectare obiecte) la `Pick internal point` și selectați polilinii închise, cercuri sau elipse închise, apoi apăsați {{key:Enter}}. Formele aflate în interiorul altora rămân goale pe rând (cea exterioară este hașurată, următoarea rămâne goală și așa mai departe).

## Modele

Tastați `?` la întrebarea despre model pentru listă. Modelele standard sunt ANSI31 până la ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS și EARTH, precum și SOLID. Într-un desen cu unități în inch (sau cu picioare și inch ca format de lungime) se folosesc dimensiunile în inch ale modelelor, ca în AutoCAD; în caz contrar, cele în milimetri.

{{ui:Unghi}} (`A`) rotește întregul model: ANSI31 la 90° se înclină în sens invers.

**Fișiere de model.** Tastați `F` (Fișier de model) la `Pick internal point` și alegeți un fișier `.pat`. Modelele din acesta se adaugă la listă; dacă există mai multe, vi se cere să alegeți care să fie folosit. Un fișier fără modele pe care CadCraft nu le poate citi este semnalat, iar modelele omise sunt numărate. Dimensiunile dintr-un fișier `.pat` nu au unitate proprie, deci sunt citite în unitățile desenului. Au fost încercate doar fișiere scrise în formatul obișnuit `.pat`, niciunul realizat de alt program.

## Modificarea unei hașuri

Selectați-o (faceți clic pe una dintre linii). În {{ui:Proprietăți}}: {{ui:Model}}, {{ui:Scară model}} și {{ui:Unghi model}}. Hașurile din desenele deschise își afișează modelul atunci când acesta este unul standard; celelalte apar ca un ton deschis al culorii lor.

## Greșeli frecvente

- **„Nu există contur închis în jurul acestui punct.”** Există o întrerupere în contur sau o parte din el se află în afara ecranului: CadCraft verifică doar ce este pe ecran. Închideți golul (măriți zoomul pe colțuri) sau micșorați zoomul.
- **„Modelul este prea dens pentru a fi desenat la această scară.”** Liniile ar fi mai apropiate decât poate afișa desenul. Folosiți o scară mai mare: încercați scara de trasare (20 pentru 1:20).
- Modelul pare foarte mare sau foarte mic. Scara se exprimă în unități de desen pe unitate de model; vezi pasul 4 de mai sus.
- **Mutarea conturului nu mută hașura.** O hașură nu este legată de contur. Mutați ambele sau hașurați din nou.

## O hașură legată de contur

Hașura făcută cu `HATCH` reține ce o delimitează. Mutați, rotiți sau scalați conturul și hașura, împreună cu modelul ei, merg odată cu el. Trageți un mâner pentru a remodela conturul, iar hașura se recalculează. Mutați hașura singură și conturul o urmează, ca o formă umplută dintr-un program de desen.

Legătura se încheie, iar linia de comandă o anunță, dacă conturul nu mai este închis sau dacă remodelați manual hașura. Hașura în sine rămâne. Tastați `AS` în timpul hașurării pentru a crea hașuri independente. Copiați o hașură împreună cu conturul și copia are propria legătură.

`HATCHEDIT` (`HE`) schimbă modelul, scara, unghiul și originea unei hașuri și o leagă de un contur sau încheie legătura. Legătura este salvată în fișierele DWG și DXF 2000. Un fișier DXF R12 nu are obiect de hașură, iar legăturile făcute în alte programe nu sunt citite: pentru acestea folosiți `HATCHEDIT` și Legare.

O hașură care nu mai are contur (conturul a fost șters sau fișierul a fost primit fără el) își poate recupera conturul: `HATCHGENERATEBOUNDARY` (`HGB`) desenează o polilinie închisă în jurul fiecărei bucle a hașurii și, dacă răspundeți Da, leagă hașura de acestea.

## Umplere cu gradient

`GRADIENT` (`GD`) umple o suprafață cu un gradient în loc de un model: aceleași alegeri ca la `HATCH`, după ce întreabă tipul (liniar, cilindric, sferic, hemisferic, curbat și fiecare dintre acestea inversat), o culoare cu o nuanță sau două culori, unghiul și dacă este centrat sau nu. În `HATCH`, opțiunea `G` face același lucru. `HATCHEDIT` `G` sau {{ui:Proprietăți}}, sub Gradient, schimbă un gradient sau transformă orice hașură într-unul.

Un gradient se vede pe ecran și în trasări. Salvat ca DWG 2004 sau mai nou, alte programe primesc o hașură de gradient reală. DXF 2000 și DWG 2000 nu au gradient: acolo CadCraft îl păstrează pentru sine, iar celelalte programe văd o umplere plină cu prima culoare.

## Tăierea unei hașuri

`TRIM` taie o hașură ca orice alt obiect. Faceți clic pe hașură, de partea muchiei de tăiere pe care doriți să o eliminați: muchiile împart suprafața hașurată, iar bucata respectivă este eliminată. În modul Rapid, fiecare obiect este o muchie de tăiere; alegeți mai întâi muchiile (opțiunea `T`) când sunt multe. O hașură tăiată nu mai este legată de contur, deoarece nu mai îl umple.
