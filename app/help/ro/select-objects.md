---
title: Selectarea obiectelor
summary: Alegeți obiecte unul câte unul, cu o fereastră sau o intersectare, înainte sau în timpul unei comenzi, și scoateți obiecte din selecție.
keywords: selectare, selecție, fereastră, intersectare, substantiv-verb, alegere, toate, ultimul, precedentul, gard, eliminare, adăugare, tab, ciclare, suprapus, qselect, selectare rapidă, filtru, selectare obiecte similare, selectsimilar, shift, anulare selecție, ctrl+a, pickfirst
from: 676508c7
---

## Ce veți învăța

Cum alegeți obiectele asupra cărora lucrează o comandă. CadCraft are două moduri de lucru, și amândouă sunt bune:

- **Selectați întâi, apoi comanda** (substantiv-verb). Selectați obiectele, apoi tastați `M` pentru Mutare. Comanda preia selecția și trece direct la următoarea întrebare.
- **Comanda întâi, apoi selectați** (verb-substantiv). Tastați `M`; comanda cere `Selectați obiecte:`; selectați, apoi apăsați {{key:Enter}}.

## Alegerea câte unui obiect

1. Fără nicio comandă în derulare, faceți clic pe o linie. Este evidențiată și apar mânerele ei (pătrățele mici). Panoul din dreapta arată proprietățile ei.
2. Faceți clic pe alt obiect. Este adăugat la selecție.
3. Țineți apăsat {{key:Shift}} și faceți clic pe un obiect selectat. Este scos din selecție.
4. Apăsați {{key:Esc}}. Nimic nu mai este selectat.

## Fereastră și intersectare

Faceți clic o dată pe spațiu gol, mutați cursorul și faceți clic din nou: se obține un dreptunghi. Apăsarea și trăgerea desenează în schimb un lasou de mână liberă, cu aceleași două tipuri (vezi [Selecție cu lasou](topic:lasso-selection); Setările pot face ca o tragere să deseneze dreptunghiul). Ce obiecte obțineți depinde de direcție:

| Mutați | Casetă | Selectează |
|---|---|---|
| De la stânga la dreapta | Fereastră | Doar obiectele **complet în interiorul** casetei |
| De la dreapta la stânga | Intersectare | Obiectele din interiorul casetei **și** cele pe care le atinge |

1. Desenați câteva linii și cercuri care se suprapun.
2. Faceți clic pe spațiu gol în stânga unor obiecte, mutați spre dreapta și faceți clic din nou. Sunt selectate doar obiectele complet înăuntru.
3. Apăsați {{key:Esc}}.
4. Faceți clic pe spațiu gol în dreapta, mutați spre stânga peste câteva obiecte și faceți clic din nou. Este selectat tot ce atinge caseta.
5. Țineți apăsat {{key:Shift}} și trageți o casetă sau un lasou peste câteva obiecte selectate. Ies din selecție.

## Selectați, apoi rulați o comandă

1. Selectați două cercuri.
2. Tastați `M` și apăsați {{key:Enter}}.

Istoricul spune `2 găsite`, iar solicitarea trece direct la `Specificați punctul de bază`. Terminați mutarea (vezi [Mutare, copiere, rotire, scalare și oglindire](topic:modify-objects)).

Când se încheie o comandă, selecția este golită, astfel încât următoarea comandă pornește de la zero.

Comenzile care iau o selecție în acest fel: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} și {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} și {{cmd:CHAMFER}} cer întotdeauna să alegeți obiecte unul câte unul; {{cmd:TRIM}} și {{cmd:EXTEND}} acceptă un clic sau un traseu pe care îl trageți prin bucăți (vezi [Tăiere și prelungire](topic:trim-and-extend)).

## Comandă întâi, apoi selectați

1. Asigurați-vă că nu este nimic selectat ({{key:Esc}}).
2. Tastați `E` și apăsați {{key:Enter}}. Solicitarea spune `Selectați obiecte:`.
3. Faceți clic pe obiecte, sau trageți ferestre și intersectări. Istoricul numără fiecare alegere (`1 găsit`, `3 găsite`).
4. Apăsați {{key:Enter}}, {{key:Space}} sau faceți clic dreapta ca să încheiați selectarea.

Obiectele sunt șterse, iar istoricul spune câte.

La o solicitare `Selectați obiecte:` mai puteți tasta și:

- `ALL`, apoi {{key:Enter}}: fiecare obiect pe care îl puteți modifica în fila deschisă.
- `L` (sau `LAST`), apoi {{key:Enter}}: cel mai recent desenat obiect.
- `P` (Precedent): obiectele asupra cărora a lucrat ultima comandă, dacă mai există.
- `F` (Gard): faceți clic sau tastați puncte de-a lungul unei linii; se adaugă fiecare obiect pe care îl taie linia. Apăsați {{key:Enter}} ca să încheiați gardul; `U` ia înapoi ultimul punct.
- `W` (Fereastră) sau `C` (Intersectare): două colțuri, în orice direcție trageți.
- `R` (Eliminare): de acum, clicurile, ferestrele și gardurile scot obiecte **din** selecție. Solicitarea spune `Eliminați obiecte:`. `A` (Adăugare) revine.
- `?`: lista acestora în istoric.

Aceste opțiuni nu apar în solicitare, ca în AutoCAD.

## Alegerea unuia dintre mai multe obiecte suprapuse

Unde obiectele se suprapun sau se ating, un clic ia cel mai apropiat. Ca să luați altul:

1. Țineți cursorul nemișcat peste locul respectiv.
2. Apăsați {{key:Tab}}. Următorul obiect de acolo este evidențiat, iar bara de stare spune care este („2 din 3: Linie pe stratul Walls”).
3. Apăsați {{key:Tab}} din nou până este evidențiat cel dorit, apoi faceți clic fără să mutați.

Mutarea cursorului începe totul din nou. Funcționează fără nicio comandă, la `Selectați obiecte:` și oriunde o comandă cere să alegeți un obiect.

## Selectare după o regulă: Selectare rapidă

{{cmd:QSELECT}} (`QS`, sau {{ui:Editare}} › {{ui:Mai multe}} › {{ui:Selectare rapidă}}) selectează fiecare obiect care corespunde unei reguli, de exemplu fiecare cerc cu raza sub 50 sau fiecare referință de bloc numită DOOR-900.

1. Deschideți {{ui:Selectare rapidă}}.
2. Alegeți {{ui:Tip de obiect}} (lista numără fiecare tip), apoi {{ui:Proprietate}}: {{ui:Strat}}, {{ui:Culoare}} și, pentru unele tipuri, {{ui:Lungime}}, {{ui:Raza}}, {{ui:Arie}}, {{ui:Înălțime text}}, {{ui:Conținut text}}, {{ui:Nume bloc}} sau {{ui:Model hașură}}.
3. Alegeți {{ui:Operator}} și {{ui:Valoare}}. `*` potrivește cu metacaractere (`DOOR-*`); {{ui:Selectare totală}} ia fiecare obiect din tipul respectiv; numărul din partea de jos arată câte corespund, pe măsură ce alegeți.
4. {{ui:Mod de aplicare}}: includeți corespondențele sau tot restul. {{ui:Aplicare la}} {{ui:Selecția curentă}} restrânge ce aveați selectat; {{ui:Adăugare la selecția curentă}} adaugă la ea.
5. Faceți clic pe {{ui:Selectare}}. Apoi rulați comanda dorită: o folosește pe selecție.

## Selectare obiecte similare

Selectați unul sau mai multe obiecte și tastați {{cmd:SELECTSIMILAR}} (`SIM`), sau alegeți {{ui:Editare}} › {{ui:Mai multe}} › {{ui:Selectare obiecte similare}}. Este selectat fiecare obiect de același tip, pe același strat și cu aceeași culoare; referințele de bloc cer și același bloc, iar hașurile același model. Tastați `SE` la solicitarea `Selectați obiecte` ca să alegeți ce trebuie să corespundă.

## Selectați acum, folosiți mai târziu

Tastați `SELECT` și apăsați {{key:Enter}}, alegeți obiecte cu oricare dintre modurile de mai sus și apăsați {{key:Enter}}. Rămân selectate pentru următoarea comandă, iar `P` le alege din nou la o solicitare `Selectați obiecte:` ulterioară.

## Selectați tot

Fără nicio comandă în derulare, apăsați {{key:Mod+A}}, sau alegeți {{ui:Selectare totală}} din meniul {{ui:Editare}} › {{ui:Mai multe}} din bara de instrumente, ca să selectați fiecare obiect pe care îl puteți modifica în fila deschisă. Dacă ați tastat ceva pe linia de comandă, {{key:Mod+A}} selectează textul acela: apăsați întâi {{key:Esc}} ca să îl ștergeți. La o solicitare `Selectați obiecte:`, tastați `ALL`. {{ui:Anularea selecției}} din același meniu, sau {{key:Esc}}, golește selecția.

:::tip
Dacă preferați ca fiecare clic să înlocuiască selecția (iar {{key:Shift}} să adauge), setați {{ui:Clic pe obiecte}} la {{ui:Înlocuiește selecția}} în [Setările CadCraft](topic:settings).
:::

## Ce nu poate fi selectat

- Obiectele de pe un strat **oprit**, **înghețat** sau **blocat**. Obiectele blocate rămân vizibile, și puteți folosi agățarea la ele, dar nu le puteți selecta sau modifica.
- Pe o filă de planșă, modelul afișat într-o fereastră de vizualizare. Selectați obiectele proprii ale planșei (cartușul, notele, cadrele ferestrelor de vizualizare). Ca să modificați modelul, mergeți la fila {{ui:Model}}.

## Ștergere rapidă

Selectați obiecte, apoi apăsați {{key:Delete}} (sau {{key:Backspace}} când linia de comandă nu are cursorul). Pe o tastatură Mac, tasta etichetată delete funcționează după ce ați făcut clic în desen; cât timp linia de comandă are cursorul, apăsați fn și delete împreună. Aceasta rulează {{cmd:ERASE}} pe selecție. Dacă nu se întâmplă nimic, ați tastat ceva pe linia de comandă: apăsați {{key:Esc}}, sau tastați `E` și apăsați {{key:Enter}} în schimb.

## Greșeli frecvente

- **Fereastra a luat prea puțin.** Ați tras de la stânga la dreapta, ceea ce ia doar ce este complet înăuntru. Trageți de la dreapta la stânga pentru o intersectare.
- **Un clic pe spațiu gol a început o casetă.** Un clic pe spațiu gol începe o fereastră; al doilea clic o termină. Apăsați {{key:Esc}} sau faceți clic dreapta ca s-o renunțați.
- **Un clic pe spațiu gol a eliberat selecția.** Se întâmplă, dacă nu țineți {{key:Shift}}. Ca să păstrați selecția la un astfel de clic și s-o goliți doar cu {{key:Esc}}, setați {{ui:Clic pe un loc gol}} la {{ui:Păstrează selecția}} în [Setările CadCraft](topic:settings#clicking-an-empty-spot).
- **Comanda a folosit obiecte pe care nu le aveați în vedere.** Ceva era încă selectat când ați pornit-o. Apăsați {{key:Esc}} înainte de o comandă ca să porniți cu nimic selectat.
- **Nimic nu este selectat după o comandă.** Asta este intenționat: o comandă încheiată golește selecția.
