---
title: Mutare, copiere, rotire, scalare, oglindire, întindere și matrice
summary: Așezați mobilă într-o cameră cu comenzile de bază de modificare, folosind puncte de bază, distanțe tastate și anulare.
keywords: mutare, copiere, rotire, scalare, oglindire, întindere, matrice, unire, matchprop, potrivire proprietăți, pensulă, arrayrect, arraypolar, matrice polară, ștergere, descompunere, anulare, refacere, punct de bază, deplasare, modificare, aliniere, distribuire, aliniere pe o linie, distribuire uniformă
from: 8eaeee6c
---

## Ce veți crea

Un tabel cu un scaun, copiat în jurul mesei, rotit, oglindit și redimensionat. Pe parcurs folosiți {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} și {{cmd:UNDO}}.

## Desenați piesele

1. Tastați `REC` și apăsați {{key:Enter}}, tastați `0,0` și apăsați {{key:Enter}}, apoi tastați `@1800,900` și apăsați {{key:Enter}}. Aceasta este masa.
2. Tastați `REC` și apăsați {{key:Enter}}, tastați `300,-700` și apăsați {{key:Enter}}, apoi tastați `@450,450` și apăsați {{key:Enter}}. Acesta este un scaun, sub masă.
3. Faceți clic pe {{ui:Extinderi}}.

## Mutare: punct de bază, apoi al doilea punct

Fiecare mutare, copiere, rotire și scalare pornește de la un **punct de bază**: punctul care este dus mai departe sau în jurul căruia se rotește.

1. Faceți clic pe scaun pentru a-l selecta.
2. Tastați `M` și apăsați {{key:Enter}}. Istoricul arată `1 găsit`.
3. La `Specificați punctul de bază`, agățați de colțul din stânga sus al scaunului (Capăt) și faceți clic.
4. La `Specificați al doilea punct`, tastați `@0,200` și apăsați {{key:Enter}}.

Scaunul urcă cu 200, mai aproape de masă.

:::tip
Pentru a da în schimb o deplasare, tastați `D` la `Specificați punctul de bază`: CadCraft întreabă apoi `Specificați deplasarea`, iar apoi tastați cât de departe pe orizontală și pe verticală, de exemplu `0,200` (fără `@`).
:::

## Copiere, de câte ori doriți

1. Faceți clic pe scaun.
2. Tastați `CO` și apăsați {{key:Enter}}.
3. Agățați de colțul din stânga jos al scaunului și faceți clic ca punct de bază.
4. Tastați `@600,0` și apăsați {{key:Enter}}. Apare o copie la 600 spre dreapta.
5. Tastați din nou `@600,0` și apăsați {{key:Enter}}. Apare o a doua copie, la 1200 spre dreapta de original.
6. Apăsați {{key:Enter}} pentru a încheia comanda.

{{cmd:COPY}} continuă până apăsați {{key:Enter}}. Fiecare copie este plasată la distanța de la punctul de bază până la punctul pe care îl dați. Un punct `@` se măsoară de la ultimul punct introdus, care după prima copie este punctul acelei copii, astfel că `@600,0` de două ori dă copii la 600 și 1200. Tastați `U` și apăsați {{key:Enter}} pentru a anula ultima copie fără a părăsi comanda.

Ar trebui să vedeți trei scaune una lângă alta, sub masă.

:::tip
{{cmd:COPY}} este pentru copii în interiorul unui desen, plasate după un punct de bază. Pentru a duce obiecte într-un alt desen sau într-o altă filă, ori pentru a le lipi mai târziu, folosiți clipboard-ul: {{key:Mod+C}}, apoi {{key:Mod+V}}. {{key:Mod+D}} face o singură copie care se mută odată cu indicatorul. Vezi [Copiere, lipire și duplicare](topic:copy-paste).
:::

## Oglindiți rândul pe cealaltă parte

1. Trageți o fereastră de intersectare (de la dreapta spre stânga) peste cele trei scaune, fără să atingeți masa.
2. Tastați `MI` și apăsați {{key:Enter}}.
3. La `Specificați primul punct al liniei de oglindire`, agățați de Mijlocul laturii stângi a mesei și faceți clic.
4. La `Specificați al doilea punct al liniei de oglindire`, agățați de Mijlocul laturii drepte a mesei și faceți clic.
5. La `Ștergeți obiectele sursă? [Da (Y)/Nu (N)] <N>`, apăsați {{key:Enter}} pentru a le păstra.

Ar trebui să vedeți trei scaune sub masă și trei scaune oglindite deasupra ei. Textul dintr-o selecție oglindită rămâne lizibil: este plasat oglindit, dar nu scris invers.

## Rotiți un scaun

1. Faceți clic pe scaunul cel mai din dreapta, de sub masă.
2. Tastați `RO` și apăsați {{key:Enter}}.
3. Agățați de colțul din dreapta jos al scaunului și faceți clic ca punct de bază.
4. Tastați `90` și apăsați {{key:Enter}}.

Scaunul se rotește cu 90 de grade în sens invers acelor de ceasornic, în jurul punctului de bază. Un unghi negativ rotește în sensul acelor de ceasornic. În loc să tastați, puteți face clic pe un al doilea punct: unghiul se măsoară de la punctul de bază până la acel punct.

## Scalați masa

1. Selectați masa.
2. Tastați `SC` și apăsați {{key:Enter}}.
3. Agățați de colțul din stânga jos al mesei și faceți clic ca punct de bază.
4. Tastați `1.2` și apăsați {{key:Enter}}.

Masa este cu 20% mai mare, crescând depărtându-se de punctul de bază. Un factor sub 1 o face mai mică.

:::note
Dacă faceți clic pe un punct în loc să tastați factorul de scalare, factorul este distanța de la punctul de bază până la acel punct. Un clic la o unitate de desen distanță dă un factor de 1. De obicei, tastarea numărului este ceea ce doriți.
:::

## Anulare și refacere

- {{key:Mod+Z}}, butonul {{ui:Anulare}} sau `U` apoi {{key:Enter}} anulează ultima comandă. O comandă întreagă este un singur pas: anularea unei {{cmd:COPY}} care a făcut cinci copii elimină toate cele cinci.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, butonul {{ui:Refacere}} sau `REDO` o aduc înapoi.
- Istoricul spune ce a fost anulat („S-a anulat COPY”).

CadCraft păstrează ultimii 500 de pași. Setările straturilor (activ, înghețare, blocare, culoare) sunt setări, nu modificări, și nu sunt anulate.

## Lărgiți o cameră

{{cmd:STRETCH}} (`S`, sau {{ui:Întindere}}) mută doar ce se află în interiorul unei ferestre de intersectare: colțurile și capetele de linii aflate în interior se mută, restul rămâne pe loc, astfel că încăperea se lărgește în loc să se deplaseze.

1. Tastați `S` și apăsați {{key:Enter}}.
2. Trageți o fereastră de la dreapta spre stânga peste peretele din dreapta, astfel încât să acopere colțurile peretelui și capetele oricărui lucru care îl atinge.
3. Apăsați {{key:Enter}}.
4. Faceți clic pe un punct de bază, apoi tastați `@600,0` și apăsați {{key:Enter}}.

Dreptunghiul este cu 600 mai lat; liniile care se terminau pe perete rămân terminate pe el. Un arc cu un capăt în interior își păstrează înălțimea, cercurile și textul se mută când centrul sau punctul de inserare este în interior, iar o cotă își măsoară noua lungime. Obiectele alese unul câte unul, fără fereastră, pur și simplu se mută.

Puteți selecta și înainte: trageți fereastra de intersectare (sau un lasou de intersectare) peste perete fără nicio comandă în derulare, apoi tastați `S`. STRETCH preia această selecție și întinde ce conțin ferestrele sale, exact ca și cum le-ați fi tras la propriul său prompt.

## Matrice: rânduri și coloane, sau în jurul unui centru

{{cmd:ARRAY}} (`AR`, sau {{ui:Matrice}}) copiază selecția într-o grilă sau într-un cerc.

1. Selectați un scaun, tastați `AR` și apăsați {{key:Enter}}. Apăsați {{key:Enter}} pentru Dreptunghiular.
2. Apare o previzualizare cu 4 coloane și 3 rânduri. Tastați `COU`, apăsați {{key:Enter}}, apoi `5` pentru coloane și `2` pentru rânduri.
3. Tastați `S`, apăsați {{key:Enter}}, apoi `600` între coloane și `-900` între rânduri (negativ înseamnă în jos).
4. Apăsați {{key:Enter}} pentru a face copiile.

Pentru un inel de scaune în jurul unei mese, alegeți în schimb `PO` (Polar), faceți clic pe centrul mesei și setați `I` (Elemente), `F` (Unghi de umplere: 360 pentru tot cercul, 180 pentru jumătate) și `ROT` (dacă copiile se rotesc spre centru). {{cmd:ARRAYRECT}} și {{cmd:ARRAYPOLAR}} sar peste întrebare.

## Uniți piesele într-o singură polilinie

{{cmd:JOIN}} (`J`, sau {{ui:Modificare}} › {{ui:Mai multe}} › {{ui:Unire}}): selectați linii, arce și polilinii deschise ale căror capete se întâlnesc, apoi apăsați {{key:Enter}}. Ele devin o singură polilinie, închisă dacă fac tot înconjurul, pe care apoi o puteți decala dintr-o dată. Liniile aflate pe aceeași dreaptă devin o singură linie, chiar dacă au goluri între ele; arcele aceluiași cerc devin un singur arc, sau cercul.

## Potrivire proprietăți

{{cmd:MATCHPROP}} (`MA`, sau {{ui:Modificare}} › {{ui:Mai multe}} › {{ui:Potrivire proprietăți}}): faceți clic pe obiectul al cărui aspect îl doriți, apoi selectați obiectele de modificat și apăsați {{key:Enter}}. Ele preiau stratul și culoarea lui; un text preia înălțimea lui, o cotă dimensiunile lui, o hașură modelul ei. Tastați `S` (Setări) la a doua întrebare pentru a dezactiva oricare dintre acestea.

## Aliniere obiecte

**După puncte.** {{cmd:ALIGN}} (`AL`, sau {{ui:Modificare}} › {{ui:Mai multe}} › {{ui:Aliniere}}): selectați obiectele și apăsați {{key:Enter}}, apoi faceți clic pe un punct de pe ele (sursa) și pe locul unde trebuie să ajungă (destinația).

- O pereche le mută. Apăsați {{key:Enter}} la `Specificați al doilea punct sursă` pentru a opri aici.
- Două perechi le și rotesc, astfel încât linia dintre cele două puncte sursă să stea de-a lungul liniei dintre cele două puncte de destinație. CadCraft întreabă apoi `Scalați obiectele pe baza punctelor de aliniere? [Da (Y)/Nu (N)]`: răspunsul `Y` le face și pe atât de mari sau de mici.
- O a treia pereche le oglindește când cele două puncte ale sale sunt de o parte și de alta a acelei linii.

**Margini și spațiere.** {{ui:Modificare}} › {{ui:Mai multe}} › {{ui:Aliniere și distribuire}} (sau `ALIGNPANEL`) deschide un panou mic peste desen. Selectați obiectele, apoi:

- alegeți cu ce să aliniați în {{ui:Aliniere la}} (întreaga selecție, primul sau ultimul obiect ales ori un punct pe care faceți clic) și faceți clic pe {{ui:Stânga}}, {{ui:Centru}}, {{ui:Dreapta}}, {{ui:Sus}}, {{ui:Mijloc}} sau {{ui:Jos}};
- sau alegeți {{ui:Spații egale}} ori {{ui:Centre egale}} și faceți clic pe {{ui:Pe orizontală}} sau {{ui:Pe verticală}}: cele două obiecte extreme rămân pe loc, iar restul sunt distribuite uniform între ele (cel puțin trei obiecte).

Fiecare clic este un pas de anulare, iar selecția rămâne, așa că puteți încerca altă variantă. Fiecare obiect se măsoară după cutia sa de încadrare, în SCU atunci când este setat unul. În linia de comandă, același lucru este {{cmd:ALIGNTO}} și {{cmd:DISTRIBUTE}}.

## Ștergere și descompunere

- {{cmd:ERASE}} (`E`, sau {{key:Delete}}) elimină obiectele selectate.
- {{cmd:EXPLODE}} (`X`) descompune o polilinie în linii și arce, o referință la bloc în obiectele sale, iar o cotă în linii, vârfuri de săgeată și text. Cotele descompuse nu se mai măsoară singure.

## Greșeli frecvente

- **Tastarea unei distanțe fără `@` la al doilea punct.** `600,0` este punctul absolut 600,0, nu „600 spre dreapta”. Folosiți `@600,0`, sau doar `600` cu cursorul orientat în direcția dorită.
- **Rotirea s-a făcut în sens greșit.** Unghiurile pozitive rotesc în sens invers acelor de ceasornic.
- **Anularea a șters mai mult decât se aștepta.** O anulare ia înapoi întreaga ultimă comandă, inclusiv fiecare copie pe care a făcut-o.
- **Comanda nu a cerut să selectați obiecte.** Obiectele erau deja selectate, așa că le-a folosit. Apăsați mai întâi {{key:Esc}} pentru a începe fără nimic selectat.
