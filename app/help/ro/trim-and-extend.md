---
title: Tăiere și prelungire
summary: Tăiați liniile până la cele pe care le intersectează și prelungiți-le până ating altele, câte una sau mai multe deodată, trăgând o cale prin ele.
keywords: trimextendmode, tragere cu fereastră, tăiere, prelungire, tr, ex, tăiere rapidă, tragere, mână liberă, cale, gard, intersectare, shift, muchii de tăiere, muchii de delimitare, edgemode, mod, standard, rapid, ștergere, previzualizare, pereți, curățare
from: 25fbc5bd
---

## Ce veți învăța

Cum funcționează {{cmd:TRIM}} și {{cmd:EXTEND}} și modurile rapide de a le folosi: trageți prin multe piese deodată, țineți apăsat {{key:Shift}} pentru a comuta între tăiere și prelungire și vedeți ce va dispărea înainte să faceți clic.

## Tăierea unei piese

1. Desenați o linie orizontală lungă și două linii scurte care o traversează.
2. Tastați `TR` și apăsați {{key:Enter}}. Istoricul spune `Setări curente: mod rapid, muchii: fără prelungire`.
3. Plasați indicatorul pe linia lungă, între cele două scurte. Piesa respectivă devine gri și punctată: ea este cea care va dispărea.
4. Faceți clic. Piesa dispare.
5. Apăsați {{key:Enter}} pentru a încheia comanda.

În modul rapid (implicit), fiecare obiect vizibil este o muchie de tăiere, deci nu trebuie să alegeți mai întâi muchiile. Faceți clic pe piesa pe care o doriți eliminată. Un obiect pe care nimic nu îl intersectează este șters întreg, iar istoricul o spune.

## Tăierea multor piese dintr-o tragere

1. Desenați o linie orizontală lungă și zece linii verticale scurte care o traversează.
2. Tastați `TR` și apăsați {{key:Enter}}.
3. Apăsați butonul mouse-ului deasupra liniei lungi, la stânga primei linii verticale, și trageți peste toate cele zece, deasupra liniei lungi.

În timp ce trageți, calea apare ca o linie punctată, iar fiecare piesă traversată devine gri. Eliberați: toate cele zece piese de sus sunt tăiate dintr-un singur pas. Tastați `U` și apăsați {{key:Enter}} pentru a le pune pe toate la loc deodată.

:::tip
Puteți și să faceți clic pe două locuri goale: linia dintre ele funcționează ca o cale trasă. Tastați `F` (Gard) pentru a face clic pe o serie de puncte în schimb, apoi apăsați {{key:Enter}}.
:::

:::touch
Trageți cu degetul în același mod. O atingere pe o piesă o taie.
:::

## Prelungirea în schimb, cu Shift

1. Desenați o linie verticală și cinci linii orizontale scurte în stânga ei, care se opresc înainte de ea.
2. Tastați `TR` și apăsați {{key:Enter}}.
3. Țineți apăsat {{key:Shift}}. Plasați indicatorul pe o linie scurtă: partea cu care ar crește se arată gri și punctată.
4. Tot ținând {{key:Shift}}, trageți în jos prin cele cinci linii scurte.

Toate cinci ajung acum la linia verticală. {{key:Shift}} funcționează invers în {{cmd:EXTEND}} (`EX`): un clic prelungește, un clic cu {{key:Shift}} taie. Prelungirea alungește capătul cel mai apropiat de locul unde faceți clic sau unde traseul intersectează.

## Tăierea într-o fereastră

1. Tastați `TR` și apăsați {{key:Enter}}.
2. Tastați `C` și apăsați {{key:Enter}}.
3. Faceți clic pe două colțuri în jurul pieselor de eliminat.

Fiecare piesă care se află cel puțin parțial în fereastră este tăiată.

Pentru a obține o fereastră doar trăgând, fără să tastați `C`: {{ui:Setări}} › {{ui:CadCraft}} › {{ui:Trăgere pentru tăiere și prelungire}} › {{ui:O fereastră}}. Apoi, apăsând pe un loc gol și trăgând, se desenează o casetă, iar fiecare piesă pe care o atinge este tăiată (sau prelungită, în {{cmd:EXTEND}}, sau cu {{key:Shift}}). {{ui:O cale}} (cea de la început) readuce calea trasată de mână liberă. Linia de setări de la începutul lui TRIM spune care dintre ele este activă.

## Alegerea muchiilor de tăiere (modul Standard)

Uneori doar o linie trebuie să taie, de exemplu fața unui perete pe care se intersectează multe alte linii.

1. Tastați `TR` și apăsați {{key:Enter}}.
2. Tastați `O` (mOd) și apăsați {{key:Enter}}, apoi tastați `S` (Standard) și apăsați {{key:Enter}}.
3. La `Selectați muchiile de tăiere`, faceți clic pe liniile muchie (sau trageți o fereastră), apoi apăsați {{key:Enter}}. Apăsarea {{key:Enter}} fără nimic selectat face din fiecare obiect o muchie.
4. Faceți clic sau trageți prin piesele de eliminat.

Doar muchiile alese taie, iar un obiect pe care nicio muchie nu-l intersectează rămâne neatins. Modul rămâne până închideți pagina; tastați `O`, apoi `Q` pentru a reveni la rapid. {{cmd:TRIMEXTENDMODE}} îl stabilește înainte să începeți, ca variabila cu același nume din alte părți: `0` Standard, `1` Rapid. `T` alege muchii de tăiere noi în orice moment; în {{cmd:EXTEND}} este `B` (muchii de delimitare).

## Muchii care ar ajunge

1. Tastați `TR` și apăsați {{key:Enter}}.
2. Tastați `E` (Muchie) și apăsați {{key:Enter}}, apoi `E` (Prelungire) și apăsați {{key:Enter}}.

Acum o linie sau un arc de tăiere care se oprește mai devreme contează ca și cum ar continua: o linie scurtă taie unde s-ar intersecta dacă ar fi mai lungă. Tastați `E`, apoi `N` (Fără prelungire), pentru a reveni. Este același lucru cu EDGEMODE 1 și 0.

## Ștergere fără a ieși

Tastați `R` (Ștergere) și apăsați {{key:Enter}}, alegeți obiectele de șters și apăsați {{key:Enter}}. TRIM continuă.

## Greșeli frecvente

- **O linie întreagă a dispărut.** În modul rapid, un obiect pe care nimic nu-l intersectează este șters. Tastați `U` pentru a-l pune la loc sau treceți în modul Standard (`O`, `S`).
- **„Nimic de tăiat aici: nicio muchie aleasă nu intersectează obiectul.”** Modul Standard taie doar la muchiile alese. Tastați `T` pentru a le alege din nou.
- **„Nicio delimitare în direcția aceea.”** Prelungirea n-a găsit nimic înainte. Faceți clic mai aproape de capătul care trebuie să crească sau activați `E` (Muchie, Prelungire) pentru delimitările care se opresc mai devreme.
- **Tragerea a desenat un lasou în schimb.** O tragere taie doar cât timp TRIM sau EXTEND cere un obiect. Fără nicio comandă în derulare, o tragere selectează (vezi [Selectare cu lasou](topic:lasso-selection)).
- **Doar liniile, arcele, cercurile și polilinii pot fi tăiate.** Descompuneți mai întâi un bloc pentru a-i tăia liniile.
