---
title: Decalare, tăiere, prelungire, racordare și șanfrenare pentru pereți
summary: Transformați linii simple în pereți dubli cu Decalare, curățați colțurile cu Racordare și tăiați sau alungiți linii cu Tăiere și Prelungire.
keywords: decalare, offset, tăiere, trim, prelungire, extend, racordare, fillet, șanfren, chamfer, teșire, bevel, întrerupere, break, breakatpoint, alungire, lengthen, pereți, colț, paralel, rază, curățare
from: c6c5cbd0
---

## Ce veți realiza

O cameră mică cu pereți de 200 de grosime: fața interioară este desenată, fața exterioară este decalată, colțurile sunt curățate, iar o deschidere de ușă este tăiată într-un perete.

## Desenați fața interioară

1. Tastați `L` și apăsați {{key:Enter}}.
2. Tastați `0,0` și apăsați {{key:Enter}}.
3. Tastați `@5000,0` și apăsați {{key:Enter}}.
4. Tastați `@0,4000` și apăsați {{key:Enter}}.
5. Tastați `@-5000,0` și apăsați {{key:Enter}}.
6. Tastați `C` și apăsați {{key:Enter}}.
7. Faceți clic pe {{ui:Extinderi}}.

Aveți patru linii separate. (O polilinie închisă s-ar decala dintr-o dată; liniile separate arată cum Racordarea curăță colțurile.)

## Decalați fața exterioară

1. Tastați `O` și apăsați {{key:Enter}}. Promptul arată `Specificați distanța de decalare [Prin (T)] <Prin>:`.
2. Tastați `200` și apăsați {{key:Enter}}.
3. La `Selectați obiectul de decalat`, faceți clic pe linia de jos.
4. La `Specificați un punct pe partea de decalat`, faceți clic oriunde sub ea. Apare o linie paralelă la 200 sub ea.
5. Faceți clic pe linia din dreapta, apoi faceți clic în dreapta ei.
6. Faceți clic pe linia de sus, apoi faceți clic deasupra ei.
7. Faceți clic pe linia din stânga, apoi faceți clic în stânga ei.
8. Apăsați {{key:Enter}} pentru a încheia comanda.

Ar trebui să vedeți patru linii exterioare, fiecare de aceeași lungime ca linia interioară corespunzătoare, astfel încât colțurile exterioare nu se întâlnesc.

:::tip
Apăsați {{key:Enter}} la promptul distanței pentru a folosi din nou ultima distanță. Tastați `T` pentru Prin: atunci fiecare copie trece prin punctul pe care faceți clic, la orice distanță ar fi acesta.
:::

{{cmd:OFFSET}} lucrează pe linii, arce, cercuri și polilinii. Decalarea unei polilinii închise decalează întregul contur, cu colțurile cu tot.

## Curățați colțurile exterioare cu Racordare

{{cmd:FILLET}} unește două linii într-un colț: le taie sau le prelungește pe amândouă, ca să se întâlnească. Cu o rază de 0, colțul este drept.

1. Tastați `F` și apăsați {{key:Enter}}. Promptul arată `Selectați prima linie [Raza]:`.
2. Dacă ultima racordare pe care ați făcut-o a folosit o rază, tastați `R`, apăsați {{key:Enter}}, tastați `0` și apăsați {{key:Enter}}.
3. Faceți clic pe linia exterioară de jos, aproape de capătul ei din dreapta.
4. La `Selectați a doua linie`, faceți clic pe linia exterioară din dreapta, aproape de capătul ei de jos.

Cele două linii se întâlnesc acum într-un colț ascuțit, iar comanda se încheie.

5. Apăsați {{key:Enter}} pentru a repeta {{cmd:FILLET}}, și faceți următorul colț.
6. Repetați până când toate cele patru colțuri exterioare se întâlnesc.

Faceți clic pe fiecare linie pe porțiunea pe care doriți s-o **păstrați**. Cu o rază mai mare de 0, Racordarea adaugă în schimb un arc între linii.

:::tip
Tastați `M` la primul prompt pentru a face toate cele patru colțuri dintr-o dată, sau desenați fața exterioară ca o polilinie închisă și tastați `P`: fiecare colț se face deodată. Țineți apăsat {{key:Shift}} când faceți clic pe a doua linie pentru un colț ascuțit, fără să schimbați raza.
:::

## Teșiți un colț cu Șanfrenare

{{cmd:CHAMFER}} taie un colț cu o linie dreaptă.

1. Tastați `CHA` și apăsați {{key:Enter}}.
2. Tastați `D` și apăsați {{key:Enter}}. Tastați `300` și apăsați {{key:Enter}} pentru prima distanță, apoi apăsați {{key:Enter}} pentru a folosi 300 și pentru a doua.
3. Faceți clic pe linia interioară de sus, aproape de capătul ei din stânga, apoi pe linia interioară din stânga, aproape de capătul ei de sus.

Colțul este tăiat înapoi cu 300 de-a lungul fiecărei linii, iar o linie de teșire le unește. Tastați `A` în loc de `D` pentru a da o lungime pe prima linie și un unghi.

## Tăiați o deschidere cu Tăiere

Mai întâi desenați cei doi montanți de ușă peste peretele de jos, apoi tăiați liniile peretelui între ei.

1. Tastați `L` și apăsați {{key:Enter}}.
2. Tastați `1000,200` și apăsați {{key:Enter}}.
3. Tastați `@0,-600` și apăsați {{key:Enter}}, apoi apăsați din nou {{key:Enter}}.
4. Apăsați {{key:Enter}} pentru a repeta {{cmd:LINE}}.
5. Tastați `1900,200` și apăsați {{key:Enter}}.
6. Tastați `@0,-600` și apăsați {{key:Enter}}, apoi apăsați din nou {{key:Enter}}.

Acum aveți două linii scurte care traversează peretele de jos, la 900 distanță.

7. Tastați `TR` și apăsați {{key:Enter}}. Istoricul spune `Setări curente: mod rapid, margini: fără prelungire`.
8. Faceți clic pe linia interioară de jos între cei doi montanți. Piesa aceea dispare. (Opriți-vă mai întâi cu cursorul pe ea: piesa care va dispărea devine gri și punctată.)
9. Faceți clic pe linia exterioară de jos între cei doi montanți. Și această piesă dispare.
10. Faceți clic pe porțiunea fiecărui montant care iese peste perete, și pe cea de sub el.
11. Apăsați {{key:Enter}} pentru a încheia comanda.

Ar trebui să vedeți o deschidere de 900 în peretele de jos, cu montanții închizând capetele peretelui.

În modul rapid (implicit), Tăierea nu cere mai întâi să alegeți muchiile de tăiere: fiecare obiect vizibil este o muchie de tăiere. Alegeți piesa care trebuie să dispară sau trageți un traseu peste mai multe piese, ca să le tăiați pe toate dintr-o dată. Tastați `U` și apăsați {{key:Enter}} pentru a readuce ultima alegere sau tragere fără să părăsiți comanda. Gardul, intersectarea, muchiile alese și {{key:Shift}} pentru a prelungi sunt în [Tăiere și prelungire](topic:trim-and-extend).

## Prelungiți o linie până la alta

{{cmd:EXTEND}} alungește o linie, un arc sau un capăt de polilinie până întâlnește următorul obiect în acea direcție.

1. Tastați `L` și apăsați {{key:Enter}}.
2. Tastați `1000,2000` și apăsați {{key:Enter}}.
3. Tastați `@2000,0` și apăsați {{key:Enter}}, apoi apăsați din nou {{key:Enter}}. Linia se oprește cu 2000 înainte de peretele din dreapta.
4. Tastați `EX` și apăsați {{key:Enter}}.
5. Faceți clic pe linia nouă, aproape de capătul ei din dreapta.
6. Apăsați {{key:Enter}} pentru a încheia comanda.

Linia ajunge acum până la fața interioară a peretelui din dreapta. Fiecare obiect vizibil este o limită; alegeți aproape de capătul care trebuie să crească. În {{cmd:TRIM}}, {{key:Shift}}+clic face același lucru.

## Întrerupere și alungire

{{cmd:BREAK}} (`BR`, sau {{ui:Modificare}} › {{ui:Mai multe}} › {{ui:Întrerupere}}) taie un gol fără muchie de tăiere: faceți clic pe obiect acolo unde începe golul (acel clic este primul punct), apoi faceți clic unde se termină. Pe un cerc, partea din sens invers acelor de ceasornic de la primul punct la al doilea este cea care dispare. `F` la a doua întrebare vă lasă să dați din nou primul punct, iar {{cmd:BREAKATPOINT}} împarte un obiect în două la un punct, fără gol.

{{cmd:LENGTHEN}} (`LEN`) schimbă o lungime la un capăt:

1. Tastați `LEN` și apăsați {{key:Enter}}. Faceți clic pe o linie ca să vedeți lungimea ei curentă; promptul întreabă din nou.
2. Alegeți modul: `DE` (Delta: o cantitate de adăugat, negativă ca să se scoată; `A` pentru unghiul unui arc), `P` (Procent: 50 o înjumătățește), `T` (Total: lungimea pe care trebuie s-o aibă) sau `DY` (Dinamic: trageți capătul).
3. Faceți clic pe fiecare obiect aproape de capătul care trebuie să se miște. `U` ia înapoi ultimul; {{key:Enter}} încheie.

Liniile, arcele și polilinile deschise (segmentul lor de capăt) pot fi alungite.

## Greșeli frecvente

- **A dispărut o linie întreagă.** Nimic nu o traversa, așa că modul rapid a șters-o. Tastați `U` ca s-o readuceți; verificați că linia de tăiere chiar o traversează (măriți) și că nu este pe un strat oprit.
- **„Nicio limită în direcția aceea.”** Prelungirea n-a găsit nimic în care să intre. Alegeți mai aproape de capătul care trebuie să crească.
- **„Raza este prea mare.”** Arcul ar trece peste capătul uneia dintre linii. Folosiți o rază mai mică.
- **„Doar primul sau ultimul segment al unei polilinii deschise poate fi tăiat înapoi.”** Alegeți două segmente ale polilinei unul lângă altul, sau tastați `P` pentru a rotunji fiecare colț al ei.
- **Decalarea a mers de cealaltă parte.** Partea este unde faceți clic după ce ați ales obiectul. Anulați cu {{key:Mod+Z}} și faceți clic pe cealaltă parte.
- **„Nu se poate decala atât de departe.”** Decalarea ar întoarce pe dos arcul, cercul sau polilinia. Folosiți o distanță mai mică.
