---
title: Panoul Proprietăți
summary: Vedeți și schimbați tot ce ține de obiectele selectate, multe deodată: coordonate cu Z, mărimi, text, setări de cotare, transparență și altele. Câmpurile acceptă expresii și lungimi cu unități.
keywords: totaluri, lungime totală, arie totală, sumă, lungimea selecției, proprietăți, paletă de proprietăți, ctrl+1, pr, ch, mo, ddmodify, variază, selectare rapidă, pickadd, coordonate, z, elevație, grosime, transparență, material, hiperlegătură, expresie, quickcalc, vârf, stil de cotare, toleranță, zecimale
from: 10d6a829
---

## Ce veți învăța

Cum deschideți panoul Proprietăți, cum schimbați un obiect sau o sută într-un singur pas, cum tastați coordonate exacte (cu Z), cum folosiți expresii și unități în orice câmp numeric și ce arată fiecare tip de obiect.

## Deschiderea

Panoul se află în dreapta. Ca să-l aduceți în față:

- Apăsați {{key:Mod+1}}, sau tastați {{cmd:PROPERTIES}} (sau `PR`, `CH`, `MO`).
- Faceți dublu clic pe un obiect (textul și multiliniile deschid editorul lor de text).

Panoul este un panou mobil ca celelalte: trageți-i mânerul ca să-l ancorați la stânga, dreapta sau jos, ori lăsați-l peste desen ca să-l detașați (vezi [Aranjarea panourilor și folosirea unui al doilea monitor](common:arrange-panels)).

### Retragerea lui

Butonul cu ac din colțul dreapta sus al panoului pornește **ascunderea automată**: panoul se restrânge la o bandă pe marginea dreaptă, iar desenul primește spațiul. Treceți cu cursorul peste bandă (sau apăsați {{key:Mod+1}}) și se deschide peste desen; plecați și se restrânge din nou. Faceți clic pe ac din nou ca să-l țineți deschis. {{cmd:PROPERTIESCLOSE}} îl restrânge de asemenea.

## Secțiuni

Proprietățile sunt grupate în secțiuni pe care le puteți plia: **General**, **Geometrie**, **Text**, **Linii și săgeți**, **Ajustare**, **Unități principale**, **Unități alternative**, **Toleranțe**, **Model**, **Diverse**, iar pentru blocuri **Atribute** și **Element de bibliotecă**. Faceți clic pe numele unei secțiuni ca s-o plieți sau s-o deschideți; CadCraft reține care le-ați pliat.

Trageți linia subțire dintre nume și valori ca să lărgiți sau să îngustați numele. Faceți dublu clic pe ea ca s-o puneți la loc. Cu tastatura, dați-i focusul și folosiți săgețile.

## Schimbarea unei valori

1. Faceți clic pe o linie. Titlul spune „Linie”.
2. Faceți clic în {{ui:Length}}. În timpul editării câmpul arată valoarea completă, nu cea rotunjită.
3. Tastați `2500` și apăsați {{key:Enter}}. Linia are acum lungimea 2500, păstrându-și punctul de început și unghiul.

{{key:Enter}} sau clic în altă parte aplică valoarea; {{key:Esc}} pune la loc vechea valoare. Fiecare modificare este un singur pas de anulare.

### Expresii și unități

Fiecare câmp numeric acceptă mai mult decât un număr simplu:

| Tastați | Obțineți |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (inch, într-un desen în picioare și inch) |
| `900mm`, `3.5m`, `2ft` | Convertite în unitățile desenului |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (câmpuri de unghi) |
| `0.5r`, `100g` | Radiani și grade centesimale, ca grade |

O lungime cu unitate cere ca desenul să aibă unități: setați mai întâi {{ui:Units}} la {{ui:New objects}} (cu nimic selectat). O intrare greșită este refuzată cu o notă sub panou, iar nimic nu se schimbă; nu se salvează niciodată ca 0. Funcții: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; unghiurile sunt în grade.

## Schimbarea mai multor obiecte deodată

1. Selectați mai multe obiecte, de exemplu 8 linii și 4 cote.
2. Titlul spune „12 obiecte”, iar o listă de sus oferă **Toate (12)**, **Linie (8)** și **Cotă (4)**.
3. **Toate** arată ce are fiecare obiect (strat, culoare, tip de linie...). Alegeți **Cotă (4)** ca să vedeți setările de cotare.
4. Schimbați o valoare, de exemplu {{ui:Decimals}} în `1`.

Toate cele patru cote se schimbă, într-un singur pas de anulare. Un câmp care arată **Variază** înseamnă că obiectele diferă; tastarea unei valori o setează la toate. Obiectele de pe straturi blocate rămân neschimbate, iar nota spune câte sunt.

## Totaluri ale unei selecții

Cu mai multe obiecte selectate, secțiunea {{ui:Totals}} de sus spune:

- **Obiecte**: câte din fiecare fel, de exemplu „8 linii, 2 polilinii, 1 cerc”.
- **Lungime totală**: liniile, arcele și polilinile adunate (și splinele se socotesc), și câte obiecte sunt.
- **Arie totală**: cele închise, adunate: cercurile, elipsele întregi, polilinii închise și hașurile (golurile unei hașuri se scad).

Sunt în formatul de lungime al desenului (picioare și inch când acesta le folosește; ariile sunt atunci în inch pătrați și picioare pătrate). Bara de stare arată aceeași lungime și arie ori de câte ori sunt obiecte selectate; {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Length and area of the selection}} › {{ui:Hidden}} o dezactivează. Pentru un singur obiect, {{ui:Geometry}} arată propria lungime și arie, ca înainte.

## Coordonate

Fiecare punct arată **X**, **Y** și **Z**: începutul și sfârșitul unei linii, centrele, punctele de inserare, pozițiile textului, vârful curent al polilinei. Liniile arată și **Delta X**, **Delta Y** și **Delta Z** (doar citire). Polilinile și hașurile au o **Elevație** (un singur Z pentru tot obiectul).

Butonul cu cruciuliță de lângă numele unui punct vă lasă să-l alegeți pe desen: faceți clic pe el, apoi pe noua poziție (agățările funcționează). Valorile sunt coordonate ale lumii.

## General

| Câmp | Ce este |
|---|---|
| {{ui:Layer}}, {{ui:Color}}, {{ui:Linetype}}, {{ui:Linetype scale}}, {{ui:Lineweight}} | Ca în panoul straturilor; {{ui:By layer}} urmează stratul |
| {{ui:Transparency}} | DupăStrat, DupăBloc sau 0 până la 90 % |
| {{ui:Thickness}} | Cât se extind liniile, cercurile, arcele, polilinile, punctele și textul pe Z |
| {{ui:Material}} | DupăStrat, DupăBloc, Global sau un nume adus de un desen |
| {{ui:Plot style}} | Doar citire: desenele se trasează după culoare, prin [tabelul de stiluri de trasare](topic:plot-pdf#plot-style-tables) al foii |
| {{ui:Hyperlink}} | O adresă web păstrată cu obiectul |

## Ce arată fiecare tip

| Selectat | Puteți schimba |
|---|---|
| Linie | X, Y, Z de început și de sfârșit; lungime; unghi |
| Cerc | Centru; rază; diametru; circumferință; arie (fiecare setează raza) |
| Arc | Centru; rază; unghi de început și de sfârșit; unghi total; coardă (arată lungimea arcului și aria) |
| Elipsă | Centru; raza mare și raza mică; raport de raze; unghiul axei mari; unghi de început și de sfârșit |
| Polilinie | Răsfoitorul de vârfuri (mai jos); lățime globală; elevație; închisă; arie când e închisă (o scalează față de centrul ei) |
| Text | Conținut; stil; justificare; înălțime; rotire; factor de lățime; unghi de înclinare; lățime definită; interlinie; adnotativ; poziție |
| Referință la bloc | Punct de inserare; rotire; scară X, Y, Z și scară uniformă; valorile atributelor |
| Hașură | Model; scară; unghi; origine; asociativă; detectarea insulelor; culoarea de fond; elevație |
| Cotă | Vezi mai jos |
| Multiliniu | Text; înălțime; lățime; latura textului; mărimea vârfului de săgeată; distanța de aterizare; punctul vârfului de săgeată |
| Fereastră de vizualizare | Scară; centru și mărime pe foaie; centrul vederii în model; pornită; afișare blocată |

### Vârfurile polilinei

{{ui:Current vertex}} arată ce vârf aparțin câmpurile de sub el. Folosiți butoanele cu săgeți sau tastați un număr ca să treceți la alt vârf; nu există limită a numărului lor. Fiecare vârf are X, Y, lățimea segmentului de început și de sfârșit și bombarea segmentului care începe acolo (0 = drept).

## Cote

O cotă arată **Stilul de cotare**, ce măsoară, punctele sale și fiecare setare:

- **Linii și săgeți:** vârful de săgeată pentru fiecare capăt, mărimea săgeții, mărimea liniuței, culorile și grosimile liniei de cotă și ale liniilor de ghidaj, ascunderea oricărei jumătăți sau a oricărei linii de ghidaj, decalajul și prelungirea liniei de ghidaj.
- **Text:** înlocuire (lăsați gol pentru valoarea măsurată; `<>` o reprezintă în textul propriu), stil, culoare, înălțime, decalaj, poziția verticală și orizontală, mereu orizontal, rotire, umplere de fundal.
- **Ajustare:** scară generală, distanța dintre liniile de bază, ce se mută când lipsește spațiul, mișcarea textului.
- **Unități principale:** format, zecimale, rotunjire, prefix, sufix, scara de măsurare, separatorul zecimal, suprimarea zerourilor de început și de sfârșit; pentru unghiuri, formatul și zecimalele unghiului.
- **Unități alternative:** pornite sau oprite, format, zecimale, multiplicator (25.4 transformă inch-ii în milimetri), rotunjire, prefix și sufix.
- **Toleranțe:** niciuna, simetrice, abatere, limite sau de bază, cu valorile superioară și inferioară, zecimale, înălțime și poziție.

Schimbarea oricăreia dintre ele la o cotă deschisă elimină desenul pe care l-a făcut celălalt program, iar CadCraft îl desenează din nou.

:::note
Poziția orizontală a textului (lângă prima sau a doua linie de ghidaj) și textul sub linie se desenează pe cotele liniare și aliniate; pe celelalte cote sunt păstrate și salvate, dar încă nedesenate. Setările Ajustare sunt păstrate și salvate, dar încă nedesenate: CadCraft plasează textul după regula sa (deasupra liniei, în afară dacă nu încape).
:::

## Nimic selectat

Cu nimic selectat, panoul arată:

- **Obiecte noi:** stratul, culoarea, tipul de linie, grosimea și înălțimea textului pe care le primesc obiectele noi; unitățile desenului și formatul de lungime; tipul de linie și grosimea stratului curent; mărimile pentru cotele noi. Pe o foaie, numele foii, hârtia și orientarea vin primele.
- **Vedere:** centrul, înălțimea și lățimea celor de pe ecran. Tastați o valoare ca să mutați vederea acolo.
- **Diverse:** pictograma SCU pornită sau oprită, SCU (mereu Global: CadCraft nu are încă sisteme de coordonate utilizator) și scara de adnotare.

## Butoanele de sus

| Buton | Face |
|---|---|
| Pâlnie | {{cmd:QSELECT}}: selectează după tip și proprietate |
| Săgeată | {{cmd:SELECT}}: selectează obiectele în linia de comandă |
| Plus sau 1 | Dacă un clic adaugă la selecție (plus) sau o înlocuiește (1); aceeași setare ca în {{ui:Settings}}, {{ui:CadCraft}} |
| Ac | Ascundere automată, mai sus |

## Greșeli frecvente

- **Scrierea într-un câmp nu a făcut nimic.** Apăsați {{key:Enter}} sau faceți clic în altă parte ca s-o aplicați. Un câmp roșu și o notă înseamnă că intrarea a fost refuzată.
- **O lungime cu unitate este refuzată.** Desenul nu are unități. Setați {{ui:Units}} cu nimic selectat.
- **Se arată doar Strat și Culoare.** Sunt selectate mai multe tipuri de obiecte și este aleasă **Toate**. Alegeți un singur tip din lista de sus.
- **Unele obiecte nu s-au schimbat.** Sunt pe un strat blocat. Deblocați stratul din panoul straturilor.
- **Literele tastate au intrat într-un câmp.** Cât timp un câmp are cursorul, tastele scriu acolo. Apăsați {{key:Enter}} sau {{key:Esc}}, apoi tastați comanda.
