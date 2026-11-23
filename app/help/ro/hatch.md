---
title: Hașuri și suprafețe de umplere
summary: Umpleți o suprafață cu o culoare plină sau cu un model standard, făcând clic în interior sau alegând forme închise, setați scara și unghiul modelului și modificați o hașură după aceea.
keywords: hașură, hatch, bhatch, umplere, umplere plină, model, ansi31, ansi37, cărămidă, pământ, plasă, linii de secțiune, poșe, insulă, contur, scară, unghi
from: e7feb344
---

## Ce veți realiza

O secțiune de perete umplută cu modelul ANSI31, un stâlp rămas gol în interiorul ei și o umplere plină în stâlp.

## Hașură făcând clic în interiorul unei suprafețe

1. Desenați un dreptunghi (`REC`, `0,0`, `@2000,1200`) și un cerc în interiorul lui (`C`, `1000,600`, `300`). Faceți clic pe {{ui:Extinderi}}.
2. Faceți clic pe {{ui:Hașură}} din grupul {{ui:Desen}}, sau tastați `H` și apăsați {{key:Enter}}. Istoricul arată care model este curent, de exemplu `Hașură curentă: ANSI31, scară 1, unghi 0°`.
3. Tastați `P` și apăsați {{key:Enter}}, apoi tastați `ANSI31` și apăsați {{key:Enter}}.
4. Tastați `SC` și apăsați {{key:Enter}}, apoi tastați `20` și apăsați {{key:Enter}}. Dimensiunile modelului sunt pe hârtie, astfel încât un desen tipărit la 1:20 are nevoie de scara 20.
5. La `Specificați punctul interior`, faceți clic în interiorul dreptunghiului, în afara cercului. Hașura apare ca previzualizare.
6. Apăsați {{key:Enter}}. Dreptunghiul este hașurat; cercul din interior rămâne gol, pentru că este o insulă.

Faceți clic în mai multe suprafețe înainte de a apăsa {{key:Enter}} ca să le faceți o singură hașură. `U` anulează ultima suprafață.

## O umplere plină

1. Tastați `H` și apăsați {{key:Enter}}.
2. Tastați `P`, apăsați {{key:Enter}}, tastați `SOLID` și apăsați {{key:Enter}}.
3. Faceți clic în interiorul cercului, apoi apăsați {{key:Enter}}.

## Hașurarea formelor închise alese

În loc să faceți clic în interior, tastați `S` (Selectare obiecte) la `Specificați punctul interior` și alegeți polilinii închise, cercuri sau elipse închise, apoi apăsați {{key:Enter}}. Formele aflate în interiorul altora rămân goale pe rând (cea exterioară este hașurată, cea următoare rămâne goală și așa mai departe).

## Modele

Tastați `?` la întrebarea despre model pentru listă. Modelele standard sunt ANSI31 până la ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS și EARTH, plus SOLID. Într-un desen în inci (sau cu picioare și inci ca format de lungime) se folosesc dimensiunile în inci ale modelelor, ca în AutoCAD; altfel, cele în milimetri.

{{ui:Unghi}} (`A`) rotește întregul model: ANSI31 la 90° se înclină în sens invers.

**Fișiere de model.** Tastați `F` (Fișier de model) la `Specificați punctul interior` și alegeți un fișier `.pat`. Modelele din el se adaugă la listă; dacă sunt mai multe, vi se cere să alegeți care. Un fișier fără model pe care CadCraft nu îl poate citi o spune, iar orice model omis se numără. Dimensiunile dintr-un fișier `.pat` nu au unitate proprie, astfel încât sunt citite în unitățile desenului. S-au încercat doar fișiere scrise în formatul obișnuit `.pat`; niciunul făcut de alt program.

## Modificarea unei hașuri

Selectați-o (faceți clic pe una dintre linii). În {{ui:Proprietăți}}: {{ui:Model}}, {{ui:Scară model}} și {{ui:Unghi model}}. Hașurile din desenele deschise își arată modelul când este unul dintre cele standard; celelalte apar ca un ton deschis al culorii lor.

## Greșeli frecvente

- **„Niciun contur închis în jurul acelui punct.”** Există un gol în contur, sau o parte este în afara ecranului: CadCraft se uită doar la ce este pe ecran. Închideți golul (măriți colțurile) sau micșorați.
- **„Modelul este prea dens ca să fie desenat la această scară.”** Liniile ar fi mai apropiate decât poate arăta desenul. Folosiți o scară mai mare: încercați scara de trasare (20 pentru 1:20).
- **Modelul pare foarte mare sau foarte mic.** Scara este în unități de desen pe unitate de model; vedeți pasul 4 de mai sus.
- **Hașura nu mai urmărește conturul.** O hașură făcută cu {{cmd:HATCH}} rămâne legată de obiectele din care a fost făcută: mutați, întoarceți sau scalați conturul și hașura merge cu el; remodelați-o cu un mâner și hașura se recalculează. Legătura se oprește când conturul nu mai este închis, când remodelați singur hașura sau când o tăiați, iar linia de comandă o spune. Nimic nu se pierde: hașurați din nou suprafața pentru a o lega din nou.

## O hașură care rămâne legată de contur

O hașură făcută cu `HATCH` ține minte ce o mărginește. Mutați, întoarceți sau scalați conturul și hașura, cu modelul ei, merg cu el. Trageți un mâner ca să remodelați conturul și hașura se recalculează. Mutați hașura singură și conturul ei vine și el, ca o formă umplută într-un program de desen.

Legătura se oprește, iar linia de comandă o spune, dacă conturul nu mai este închis sau dacă remodelați hașura manual. Hașura rămâne. Tastați `AS` în timpul hașurării pentru a face hașuri independente. Copiați o hașură împreună cu conturul ei, iar copia are propria legătură.

`HATCHEDIT` (`HE`) schimbă modelul, scara, unghiul și originea unei hașuri și o leagă de un contur sau îi oprește legătura. Legătura se salvează în fișierele DWG și DXF 2000. Un fișier DXF R12 nu are obiect hașură, iar legăturile făcute în alte programe nu sunt citite: folosiți `HATCHEDIT` și Legare pentru acestea.

O hașură care nu mai are contur (conturul a fost șters sau fișierul a venit fără el) îi poate primi înapoi: `HATCHGENERATEBOUNDARY` (`HGB`) desenează o polilinie închisă în jurul fiecărei bucle a hașurii și, dacă răspundeți Da, leagă hașura de ele.

## O umplere cu gradient

`GRADIENT` (`GD`) umple o suprafață cu un gradient în loc de un model: aceleași alegeri ca la `HATCH`, după ce întreabă tipul (liniar, cilindric, sferic, emisferic, curbat și fiecare dintre acestea inversat), o culoare cu nuanță sau două culori, unghiul și dacă este centrat. În `HATCH`, opțiunea `G` face același lucru. `HATCHEDIT` `G`, sau {{ui:Proprietăți}} sub Gradient, schimbă un gradient sau transformă orice hașură în unul.

Un gradient se vede pe ecran și în trasări. Salvat ca DWG 2004 sau mai nou, celelalte programe primesc o hașură de gradient reală. DXF 2000 și DWG 2000 nu au gradient: acolo CadCraft îl păstrează pentru sine, iar celelalte programe văd o umplere plină cu prima culoare.

## Tăierea unei hașuri

`TRIM` taie o hașură ca orice alt obiect. Faceți clic pe hașură de partea muchiei de tăiere pe care o doriți eliminată: muchiile împart suprafața hașurată, iar bucata respectivă este eliminată. În modul Selectare rapidă fiecare obiect este o muchie de tăiere; alegeți muchiile întâi (opțiunea `T`) când sunt multe. O hașură tăiată nu mai este legată de contur, pentru că nu mai o umple.
