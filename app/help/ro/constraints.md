---
title: Constrângerea unui desen
summary: Mențineți liniile orizontale, capetele unite și dimensiunile fixe cu constrângeri geometrice și dimensionale, iar desenul urmează când schimbați o dimensiune.
keywords: constrângere, constrângeri, parametric, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, grade de libertate, complet constrâns
from: f8f21fa4
---

## Ce veți realiza

O placă a cărei lățime o schimbați într-un singur loc: laturile ei rămân perpendiculare, un colț rămâne pe loc, iar înălțimea rămâne jumătate din lățime.

Constrângerile lucrează pe linii, polilinii, cercuri, arce și puncte din fila {{ui:Model}}. Fiecare constrângere adăugată reprezintă un pas de anulare.

## Desenați și constrângeți conturul

1. Tastați `REC` și apăsați {{key:Enter}}. Tastați `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Tastați `AUTOCONSTRAIN` și apăsați {{key:Enter}}. Tastați `ALL`, {{key:Enter}}, apoi apăsați din nou {{key:Enter}}.

   Istoricul spune „4 constrângeri aplicate”. Pe laturi apar casete mici cu **H** și **V**: sunt barele de constrângere.
3. Tastați `GCFIX` și apăsați {{key:Enter}}. Faceți clic lângă colțul din stânga-jos. Apare o casetă cu ⊕: colțul acela rămâne unde este.

`AUTOCONSTRAIN` adaugă constrângeri de coincidență acolo unde capetele aproape se întâlnesc și constrângeri orizontale sau verticale acolo unde liniile sunt aproape pe orizontală sau pe verticală. Tastați `S` la solicitarea sa ca să schimbați cât de aproape (0.05 unități de desen și 1° la început).

## Adăugați dimensiunile

1. Tastați `DCHORIZONTAL` și apăsați {{key:Enter}}.
2. Faceți clic lângă colțul din stânga-jos, apoi lângă colțul din dreapta-jos.
3. Faceți clic sub dreptunghi pentru linia de cotă.
4. Solicitarea arată `Dimension text <d1=100>`. Tastați `width=120` și apăsați {{key:Enter}}.

   Dreptunghiul are acum lățimea 120, iar eticheta arată `width=120`.
5. Tastați `DCVERTICAL` și apăsați {{key:Enter}}, tastați `O` și apăsați {{key:Enter}}, apoi faceți clic pe latura din dreapta.
6. Faceți clic în dreapta ei, tastați `width/2` și apăsați {{key:Enter}}.

   Înălțimea este 60. Eticheta arată `fx: d1=width/2`: o expresie o controlează.

Istoricul spune acum că
 conturul este complet constrâns. Pentru a schimba dimensiunea, modificați `width` (vezi [Utilizarea parametrilor și a ecuațiilor](topic:parameters)), sau faceți dublu clic pe eticheta `width=120`, tastați o valoare nouă și alegeți {{ui:Aplicare}}.

## Mutarea obiectelor constrânse

Mutarea, rotirea, scalarea, mânerele și panoul Proprietăți păstrează toate constrângerile: ce mutați este reținut, iar restul urmează. Când constrângerile nu pot urma, modificarea nu se face, iar istoricul spune de ce, de exemplu „Not done: the constraints hold that object where it is”. Ștergerea unui obiect îi șterge și constrângerile.

## Oglindiți și tăiați obiectele constrânse

- {{cmd:MIRROR}} copiază constrângerile dintre obiectele oglindite pe copii. Sensurile (cum atinge o tangentă, de ce parte se măsoară o distanță) sunt recalculate pentru copia oglindită, iar cotele copiate primesc nume proprii, ca la o lipire. Cu `Erase source objects` `Y`, constrângerile rămân pe obiectele oglindite. Istoricul spune câte au venit odată cu ele.
- {{cmd:TRIM}} păstrează constrângerile unei linii sau ale unui arc pe porțiunea rămasă: o constrângere pe un capăt trece la bucata care mai are acel capăt, o regulă de direcție ({{ui:Orizontal}}, {{ui:Vertical}}, {{ui:Paralel}}, {{ui:Perpendicular}}) se păstrează pe fiecare bucată, iar o cotă între cele două capete exterioare continuă să le măsoare. Constrângerile care țineau partea tăiată sau o lungime pe care tăierea a schimbat-o ({{ui:Egal}}, deschiderea unui arc) dispar. Un cerc tăiat își păstrează constrângerile de centru și rază. Polilinile tăiate își pierd constrângerile.

## Constrângerile

| Comandă | Menține |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | o linie sau un segment orizontal ori vertical (`2P`: două puncte orizontale sau verticale) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | două linii paralele, perpendiculare sau pe aceeași dreaptă |
| {{cmd:GCCOINCIDENT}} | două puncte reunite; `O`: un punct pe o linie, un cerc sau un arc |
| {{cmd:GCTANGENT}} | o linie și un cerc sau un arc, sau două dintre ele, în contact |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | două cercuri sau arce cu același centru; două lungimi sau două raze egale |
| {{cmd:GCSYMMETRIC}} | două puncte, linii sau cercuri oglindite față de o linie |
| {{cmd:GCFIX}} | un punct (faceți clic lângă el) sau un obiect întreg (`O`) pe loc |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | o distanță |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | o rază, un diametru, un unghi între două linii sau unghiul unui arc |

{{cmd:GEOMCONSTRAINT}} și {{cmd:DIMCONSTRAINT}} întreabă care; {{ui:Constrângere}} și {{ui:Cotă}} din grupul {{ui:Parametric}} le lansează, iar {{ui:Mai multe}} le listează pe fiecare. Locul unde faceți clic alege partea: un clic lângă un capăt, la mijloc sau la un centru ia acel punct; un clic pe o polilinie ia segmentul de sub el. Primul obiect rămâne pe loc, iar al doilea se mută până la el.

O constrângere care intră în conflict cu altele sau care nu adaugă nimic, pentru că celelalte o implică deja, este refuzată cu un mesaj, iar nimic nu se mută.

## Vedeți, selectați și eliminați

- Faceți clic pe o casetă dintr-o bară de constrângere (sau pe un pătrat de coincidență, ori pe o etichetă de cotă) ca să selectați acea constrângere; istoricul îi spune numele. Apăsați {{key:Delete}} ca să o eliminați.
- {{cmd:DELCONSTRAINT}} elimină toate constrângerile de la obiectele selectate.
- {{cmd:CONSTRAINTBAR}}: `S` afișează toate barele, `H` le ascunde; selectați mai întâi obiectele ca să afișați sau să ascundeți barele lor. {{ui:Mai multe}} are {{ui:Afișare bare de constrângere}} și {{ui:Ascundere bare de constrângere}}.
- {{cmd:DCDISPLAY}} afișează sau ascunde constrângerile dimensionale. Acestea nu se trasează niciodată.
- {{cmd:DCCONVERT}} transformă cotele desenate pe linii, cercuri și arce în constrângeri dimensionale.

:::note
Dacă ați folosit desenul parametric din AutoCAD, numele comenzilor și solicitările sunt aceleași. Constrângerile și parametrii sunt salvați în fișiere DWG și DXF într-o formă pe care alte programe o ignoră; vezi [Fișiere](topic:files#constraints-in-files).
:::
