---
title: Trasare în PDF
summary: Creați un PDF al unei foi la dimensiune reală sau al modelului la o scară ori potrivit pe hârtie, imprimați-l din browser sau din Studio ori salvați-l ca PNG sau SVG.
keywords: trasare, imprimare, imprimantă, copii, png, svg, imagine, pdf, publicare, exportpdf, hârtie, scară, monocrom, nuanțe de gri, alb-negru, grosime de linie, creion, configurare pagină, fereastră de trasare, stil de trasare, tabel de stiluri de trasare, ctb, culoare dependentă, tramare, plotstyles, stylesmanager
from: a4752f83
---

## Ce veți crea

Un PDF al unei foi la dimensiune reală, apoi un PDF rapid al modelului la 1:100 și un imprimat.

PDF-ul se creează în browser; nimic nu este încărcat. Este un PDF vectorial: liniile rămân clare la orice zoom, iar textul poate fi căutat.

## Trasarea unei foi

1. Faceți clic pe fila foii de sub desen.
2. Apăsați {{key:Mod+P}}, faceți clic pe {{ui:Trasare}} sau tastați `PLOT` și apăsați {{key:Enter}}.

Se deschide caseta de dialog {{ui:Trasare în PDF}}. Ea spune ce foaie trasează și pe ce hârtie, „la dimensiune reală … așa cum o vedeți”. Previzualizarea din dreapta arată foaia.

3. La {{ui:Stil de trasare}}, alegeți {{ui:Monocrom (negru)}} pentru linii negre, {{ui:Culoare (așa cum este desenată)}} pentru a păstra culorile, {{ui:Nuanțe de gri}} sau un tabel propriu (vezi [Tabele de stiluri de trasare](topic:plot-pdf#plot-style-tables)). Foaia păstrează această alegere: ea se salvează împreună cu desenul.
4. La {{ui:Grosime de linie}}, alegeți o grosime de creion între 0.13 mm și 0.70 mm. Liniile cu grosimea implicită se imprimă la această grosime; liniile cu propria grosime (de strat sau de obiect, ori creionul culorii lor din tabel) se imprimă la aceasta.
5. Faceți clic pe {{ui:Descărcare PDF}}.

Browserul descarcă un PDF denumit după desen și foaie, de exemplu `Drawing1-A-101 Plan.pdf`. Istoricul indică dimensiunea în octeți și formatul hârtiei în milimetri.

O foaie se trasează întotdeauna la 1:1 pe propria hârtie. Pentru a schimba hârtia, modificați-o pe foaia însăși (vezi [Configurarea unei foi](topic:sheets-and-viewports)). Straturile setate să nu se traseze sunt lăsate deoparte, la fel și cadrele ferestrelor de vizualizare.

## Toate foile într-un singur PDF

Cu două sau mai multe foi, caseta de dialog {{ui:Trasare în PDF}} are {{ui:Toate foile într-un singur PDF}}; sau tastați {{cmd:PUBLISH}}. {{key:Enter}} ia toate foile; `Unele (S)` cere numele lor, separate prin virgule. Se descarcă un singur PDF, cu câte o pagină pentru fiecare foaie, în ordinea filelor, fiecare la propria dimensiune a hârtiei, și cu câte un semn de carte pentru fiecare foaie, cu numele ei. Fiecare foaie se trasează cu propriul tabel de stiluri de trasare; o foaie fără niciunul ales folosește cel ales ultima dată în caseta de dialog, precum și grosimea de linie aleasă ultima dată.

## Trasarea modelului

1. Faceți clic pe fila {{ui:Model}}.
2. Apăsați {{key:Mod+P}}.

Caseta de dialog spune că trasează modelul pe o foaie de hârtie și afișează mai multe setări:

3. La {{ui:Arie}}, alegeți ce să se traseze:
   - {{ui:Tot (extinderi)}}: întregul desen.
   - {{ui:Ce este pe ecran}}: zona pe care o vedeți acum în desen.
   - {{ui:O fereastră…}}: apoi faceți clic pe {{ui:Alegere}}, faceți clic pe două colțuri din desen, iar caseta de dialog revine.
4. La {{ui:Hârtie}}, alegeți o dimensiune: ISO A4 până la A0, Letter, Legal, Tabloid și ANSI C și D, sau ARCH C, D și E.
5. La {{ui:Orientare}}, alegeți {{ui:Peisaj}} sau {{ui:Portret}}.
6. La {{ui:Scară}}, alegeți {{ui:Potrivire la hârtie}} sau o scară precum `1:100`.

Sub setări, o linie indică scara și dimensiunea pe care o are zona pe hârtie. Dacă este mai mare decât hârtia, o spune: marginile sunt tăiate. Alegeți o scară mai mică, o hârtie mai mare sau {{ui:Potrivire la hârtie}}.

7. Faceți clic pe {{ui:Descărcare PDF}}.

Trasarea modelului lasă o margine de 5 mm în jurul paginii, deoarece majoritatea imprimantelor nu pot imprima până la margine. {{ui:Potrivire la hârtie}} dă o scară neobișnuită (istoricul și linia de informații spun „(potrivit)”); alegeți o scară standard când desenul trebuie să aibă dimensiuni reale.

:::note
Scările se citesc în unități reale. Pentru ca 1:100 să fie corect, setați {{ui:Unități}} din {{ui:Setări curente}} la ceea ce reprezintă o unitate de desen. Un desen fără unități este considerat în milimetri.
:::

## Tabele de stiluri de trasare

Un tabel de stiluri de trasare indică modul în care se imprimă fiecare dintre cele 255 de culori standard de desen, așa cum face un tabel de stiluri de trasare dependent de culoare (CTB) în alte programe CAD. Trei sunt integrate:

| Tabel | Imprimă |
|---|---|
| {{ui:Culoare (așa cum este desenată)}} | Fiecare obiect în propria culoare. |
| {{ui:Monocrom (negru)}} | Fiecare culoare în negru: alegerea obișnuită pentru desene. |
| {{ui:Nuanțe de gri}} | Fiecare culoare ca nuanța ei de gri, astfel încât culorile rămân distincte pe o imprimantă alb-negru. |

Pentru a crea un tabel propriu, de exemplu liniile roșii groase și negre, restul subțiri:

1. În caseta de dialog {{ui:Trasare în PDF}}, faceți clic pe {{ui:Editare tabele…}} (sau tastați {{cmd:PLOTSTYLES}}).
2. Faceți clic pe {{ui:Nou}} și tastați un nume, de exemplu `office`, în {{ui:Nume}}. Pentru a porni de la un tabel integrat, alegeți-l în {{ui:Tabel}} și faceți clic pe {{ui:Copiere}}.
3. Faceți clic pe o culoare din grilă. {{key:Shift}}+clic selectează o serie de culori, {{key:Mod}}+clic adaugă încă una, iar {{ui:Selectați toate culorile}} le selectează pe toate.
4. Stabiliți cum se imprimă culorile selectate:
   - {{ui:Se imprimă în}}: {{ui:Culoarea proprie}}, {{ui:Negru}} sau {{ui:Altă culoare…}}.
   - {{ui:Ca nuanță de gri}}: culoarea ca nuanța ei de gri.
   - {{ui:Cerneală (%)}}: 100 este cerneală plină, 50 este la jumătatea drumului spre alb (tramare), pentru linii de fundal.
   - {{ui:Grosime de linie}}: {{ui:Grosimea proprie a liniei}} păstrează grosimea obiectului sau a stratului; o valoare imprimă fiecare linie de acea culoare la acea grosime.
   - {{ui:Tip de linie}}: imprimă fiecare linie de acea culoare cu alt tip de linie (de exemplu, toate liniile roșii întrerupte); {{ui:Utilizare tip de linie al obiectului}} le lasă așa cum sunt.
   - {{ui:Capăt de linie}} și {{ui:Îmbinare linii}}: capete plate, pătrate sau rotunjite și colțuri ascuțite, teșite sau rotunjite (rotunjite, ca înainte, când nu setați nimic).
   - {{ui:Stil de umplere}}: o umplere plină de acea culoare se imprimă ca linii de hașură (bare orizontale sau verticale, diagonale, hașură încrucișată, romburi, puncte pătrate) în loc de cerneală, pentru imprimante și planuri unde cerneala plină este prea grea.
   Tabelul are două setări în plus: {{ui:Grosimi de linie}}, lățimile pe care le cunoaște (o linie tipărită ajunge la cea mai apropiată dintre ele), și {{ui:Scară tip de linie}}, un factor aplicat liniuțelor oricărui tip de linie care nu este ISO.
5. Faceți clic pe {{ui:Gata}}. Tabelul este păstrat în desen, iar foaia (sau modelul) se trasează acum cu el. {{ui:Anulare}} renunță la modificări.

O culoare cu propria setare de trasare afișează un punct în colț, iar un punct jos când setează o grosime de linie. Un obiect cu culoare reală (nu una dintre cele 255) folosește setarea culorii standard cea mai apropiată.

Desenul își păstrează tabelele și alegerea fiecărei foi când salvați ca DWG (2000 până la 2018) sau DXF (R12 sau 2000), și se deschide din nou cu ele. Alte programe văd numele din configurarea paginii fiecărei foi (`office.ctb`), nu tabelul în sine. Un desen dintr-un alt program a cărui configurare a paginii numește un tabel, de exemplu `monochrome.ctb`, se trasează cu tabelul integrat cu acest nume; pentru orice alt nume, caseta de dialog spune că desenul nu îl are și trasează culorile desenului până când alegeți un tabel sau creați unul cu acest nume.

Pentru a folosi un tabel într-un alt desen, faceți clic pe {{ui:Exportare}} din {{ui:Tabele de stiluri de trasare}} (salvează `office.plotstyle.json`), apoi pe {{ui:Importare…}} în celălalt desen. {{ui:Importare…}} acceptă și un fișier `.ctb` dintr-un alt program: acesta este citit din descrierea publicată a formatului și **nu a fost încă verificat pe un fișier real**. Se citesc culoarea, tramarea și grosimea de linie ale fiecărei culori; nu se citesc nuanțele de gri, numerele de trasare, tipurile de linii, capetele și îmbinările de linii și stilurile de umplere, iar un tabel cu nume (`.stb`) este refuzat. Comparați prima trasare cu ce așteptați și trimiteți-ne fișierul dacă este greșit.

## Imprimare

**În browser**, faceți clic pe {{ui:Imprimare…}}. CadCraft creează PDF-ul și deschide pentru el caseta de dialog de imprimare a browserului. Alegeți acolo „Dimensiune reală” sau 100% (nu „Potrivire”) pentru a păstra scara. Dacă browserul nu poate imprima din pagină, PDF-ul se deschide într-o filă nouă: imprimați-l de acolo cu {{key:Mod+P}}.

Puteți face clic și pe {{ui:Deschidere pentru imprimare}}: PDF-ul se deschide într-o filă nouă a browserului, iar de acolo îl imprimați.

:::safari
Safari poate afișa PDF-ul și așteaptă să folosiți **Fișier**, apoi **Imprimare**.
:::

Dacă browserul blochează fila nouă, CadCraft descarcă PDF-ul și o spune în istoric. Permiteți ferestrele pop-up pentru sit, ca data viitoare să îl deschidă într-o filă.

**În CadCraft Studio**, caseta de dialog {{ui:Trasare în PDF}} listează imprimantele calculatorului. Alegeți {{ui:Imprimantă}}, {{ui:Hârtia din imprimantă}} și numărul de {{ui:Copii}}, apoi faceți clic pe {{ui:Imprimare…}}. {{ui:Ca la trasare}} alege hârtia imprimantei care are dimensiunea foii (A3 pentru o foaie A3); când imprimanta nu are niciuna, folosește propria hârtie și potrivește foaia pe ea. Pe Windows, foaia se trimite ca imagine de 300 dpi, deoarece Windows nu poate imprima un PDF fără un program PDF; pe Linux și macOS, PDF-ul în sine merge la serviciul de imprimare al sistemului. Nimic nu părăsește calculatorul.

## Fișiere imagine și SVG

{{ui:Descărcare PNG}} salvează foaia trasată ca imagine de 300 dpi (redusă doar când o foaie foarte mare ar fi mai mare decât poate genera browserul; istoricul o spune). {{ui:Descărcare SVG}} o salvează ca desen scalabil în milimetri, cu liniile și textul trasării. Ambele provin din aceeași trasare ca PDF-ul, cu același stil de trasare, aceeași grosime de linie și aceeași zonă. Imaginile plasate în desen sunt doar în PDF; istoricul spune câte au fost lăsate deoparte.

## Imagini

Imaginile se imprimă la propria rezoluție, sub linii. {{ui:Imagini}} din caseta de dialog le limitează la 600, 300 sau 150 dpi, pentru un fișier mai mic. Liniile, textul și hașurile rămân întotdeauna clare (vectorial), iar transparența rămâne transparență. Vezi [Imagini în desen](topic:pictures).

## Setări reținute

Caseta de dialog reține ultima hârtie, orientarea, scara și grosimea de linie alese în acest browser. Tabelul de stiluri de trasare este păstrat cu fiecare foaie din desen; o foaie fără niciunul ales începe cu cel ales ultima dată. Fereastra aleasă se păstrează până la reîncărcarea paginii; după aceea caseta de dialog pornește la {{ui:Tot (extinderi)}}.

## Greșeli frecvente

- **PDF-ul este gol sau butoanele sunt cenușii.** Nu există nimic de trasat (un model gol), sau este ales {{ui:O fereastră…}} și încă nu a fost aleasă nicio fereastră („Alegeți fereastra pentru trasare.”).
- **Textul apare cu „?” în PDF.** Textul în poloneză, cehă, chirilic, greacă și celelalte scripturi din Europa se imprimă ca atare: PDF-ul conține atunci literele necesare (din fontul Liberation Sans, care are lățimile Helvetica), iar textul poate fi în continuare selectat și căutat. Textul în chineză, japoneză și coreeană se imprimă tot ca atare: când un desen îl conține, trasarea descarcă un font mai mare (aproximativ 10 MB, o singură dată), iar PDF-ul conține doar caracterele folosite, deci are nevoie de o conexiune prima dată (nu într-o copie offline salvată înainte). Textul în ebraică se imprimă din același font încorporat ca textul latin, iar textul în arabă, persană și urdu face ca trasarea să descarce încă un font (sub 1 MB, o singură dată); liniile de la dreapta la stânga sunt ordonate și literele unite (vezi [Text](topic:text)). Ideogramele rare din afara acestor fonturi și scripturile care necesită o formare complexă, precum hindi, se imprimă ca „?”, iar istoricul le numără.
- **Toate liniile au aceeași grosime.** Grosimea lor este cea implicită: dați straturilor sau obiectelor o {{ui:Grosime de linie}} în panoul din dreapta (vezi [Grosimi de linie și tipuri de linii](topic:units-papers-scales#line-weights-and-linetypes)) sau setați grosimile pe culoare într-un [tabel de stiluri de trasare](topic:plot-pdf#plot-style-tables).
- **„(nu este în acest desen)” lângă stilul de trasare.** Desenul provine dintr-un alt program și numește un tabel pe care nu îl include. Alegeți unul dintre tabele sau creați unul cu acel nume.
- **Liniile de construcție s-au imprimat.** Setați stratul lor să nu se traseze: faceți clic pe butonul său de imprimantă din panoul {{ui:Straturi}}.
- **Imprimatul are dimensiunea greșită.** Imprimanta l-a scalat. Imprimați la dimensiune reală.
- **{{key:Mod+P}} a deschis caseta de dialog de imprimare a browserului.** Cursorul era într-un câmp din panoul din dreapta sau era deschisă o altă casetă de dialog. Apăsați {{key:Enter}} sau {{key:Esc}} pentru a ieși din câmp, apoi încercați din nou sau faceți clic pe {{ui:Trasare}}.
- **{{key:Mod+P}} nu a făcut nimic.** Rulează o comandă. Apăsați mai întâi {{key:Esc}}.
