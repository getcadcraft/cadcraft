---
title: Cotarea unui plan
summary: Adăugați cote liniare, aliniate, unghiulare, de rază și de diametru, înlănțuiți-le cu Cotare continuă și Cotare de bază și înlocuiți textul.
keywords: cotare, cotă, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, dco, dba, lanț, șir, adnotare, unealtă de cotare, unde, găsire, bară de instrumente, măsurare, mm, cm, m, km, unități
from: 9ee65123
---

## Ce veți realiza

O cameră cotată: lățimea și înălțimea totale, un șir de cote de-a lungul unui perete, un perete înclinat, un colț rotunjit și un unghi.

Înainte să începeți, citiți [Stabilirea dimensiunilor cotelor](topic:dimension-settings) dacă desenul este mare: textul cotelor are implicit 2.5 unități de desen înălțime, ceea ce este minuscul într-un desen măsurat în milimetri. Pentru pașii de mai jos, tastați mai întâi `DIMSCALE`, apăsați {{key:Enter}}, tastați `50` și apăsați {{key:Enter}}.

## Unde sunt uneltele de cotare

Cu stilul de meniu CadCraft (cel cu care pornește CadCraft), uneltele de cotare sunt în bara de instrumente de deasupra desenului, în grupul {{ui:Adnotare}}: {{ui:Liniară}}, {{ui:Aliniată}}, {{ui:Unghi}}, {{ui:Raza}} și {{ui:Diametru}}. Meniul {{ui:Mai multe}} al grupului are {{ui:Cotare continuă}} și {{ui:Cotare de bază}}. Țineți indicatorul deasupra unui buton ca să vedeți ce face.

- Cu stilul de meniu {{ui:Desen clasic}} sau {{ui:Panglică}}, deschideți fila {{ui:Adnotare}}: uneltele sunt în panoul său {{ui:Cotare}}. {{ui:Desen clasic}} are și {{ui:Liniară}} pe fila {{ui:Acasă}}, sub {{ui:Adnotare}}. Vezi [Meniuri, taste și mouse](topic:menus-keys-and-mouse).
- Sau tastați comanda în linia de comandă de sub desen și apăsați {{key:Enter}}: `DLI` (liniară), `DAL` (aliniată), `DAN` (unghiulară), `DRA` (rază), `DDI` (diametru), `DCO` (continuă), `DBA` (de bază).
- Pe un ecran îngust, bara de instrumente are un singur rând: glisați-o lateral ca să ajungeți la {{ui:Adnotare}}.

Ca să arătați lungimile în milimetri, centimetri, metri sau kilometri, vezi [Cote în mm, cm, m sau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Desenați ceva de cotat

1. Tastați `PL` și apăsați {{key:Enter}}.
2. Tastați `0,0` și apăsați {{key:Enter}}.
3. Tastați `@6000,0` și apăsați {{key:Enter}}.
4. Tastați `@1500<60` și apăsați {{key:Enter}}.
5. Tastați `@0,2700` și apăsați {{key:Enter}}.
6. Tastați `@-6750,0` și apăsați {{key:Enter}}.
7. Tastați `C` și apăsați {{key:Enter}}. Conturul se închide.
8. Tastați `C` și apăsați {{key:Enter}} ca să începeți un cerc.
9. Faceți clic în interiorul camerei, departe de pereți, pentru centru.
10. Tastați `600` și apăsați {{key:Enter}}. Acesta este un stâlp.
11. Faceți clic pe {{ui:Extinderi}}.

## Liniară: orizontală sau verticală

1. Tastați `DLI` și apăsați {{key:Enter}}.
2. La `Specify first extension line origin`, agățați-vă de colțul din stânga-jos (Capăt) și faceți clic.
3. La `Specify second extension line origin`, agățați-vă de colțul din dreapta-jos și faceți clic.
4. Mutați cursorul sub cameră. Cota urmează, orizontală.
5. Faceți clic pentru a plasa linia de cotă.

Istoricul spune `Dimension text = 6000`.

Locul unde plasați linia decide direcția: sub sau deasupra dă o cotă orizontală, în stânga sau în dreapta dă una verticală. Ca s-o forțați, tastați `H` (orizontal), `V` (vertical) sau `R` (rotit, apoi un unghi) înainte să o plasați.

:::tip
Apăsați {{key:Enter}} la primul pas în loc să alegeți un punct, apoi faceți clic pe o linie, un arc, un cerc sau un segment de polilinie. CadCraft ia singur ambele capete.
:::

## Continuare: un șir de cote

{{cmd:DIMCONTINUE}} ({{ui:Adnotare}} › {{ui:Mai multe}} › {{ui:Cotare continuă}}, sau `DCO`) continuă de la ultima cotă liniară sau aliniată făcută, fiecare cotă nouă pornind de unde s-a încheiat cea precedentă.

1. Tastați `DLI` și apăsați {{key:Enter}}.
2. Tastați `0,0` și apăsați {{key:Enter}} pentru prima origine.
3. Tastați `2000,0` și apăsați {{key:Enter}} pentru a doua origine.
4. Faceți clic sub cameră ca s-o plasați.
5. Tastați `DCO` și apăsați {{key:Enter}}.
6. Tastați `4500,0` și apăsați {{key:Enter}}. O a doua cotă urmează pe prima, pe aceeași linie.
7. Agățați-vă de colțul din dreapta-jos și faceți clic. O a treia încheie șirul.
8. Apăsați {{key:Enter}} ca să încheiați comanda.

:::note
Aici punctele sunt tastate intenționat ca coordonate absolute. Un punct cu `@` numără de la ultimul punct dat, iar ultimul punct este locul unde ați plasat linia cotei precedente, nu capătul cotei. Punctele absolute, agățările sau o distanță directă cu {{ui:Ortogonal}} activat sunt mai sigure într-un șir de cote.
:::

Tastați `U` și apăsați {{key:Enter}} ca să luați înapoi ultima cotă din șir, fără să părăsiți comanda.

## De bază: cote înșirate de la o linie

{{cmd:DIMBASELINE}} ({{ui:Adnotare}} › {{ui:Mai multe}} › {{ui:Cotare de bază}}, sau `DBA`) măsoară fiecare cotă nouă de la prima origine a ultimei și o înșiră cu un pas mai departe.

1. Tastați `DLI` și apăsați {{key:Enter}}.
2. Agățați-vă de colțul din stânga-jos și faceți clic.
3. Agățați-vă de colțul din stânga-sus și faceți clic.
4. Mutați cursorul în stânga camerei și faceți clic. Apare o cotă verticală.
5. Tastați `DBA` și apăsați {{key:Enter}}.
6. Agățați-vă de capătul de sus al peretelui de 60 de grade (Capăt) și faceți clic. Apare a doua cotă verticală, cu un pas mai departe decât prima.
7. Apăsați {{key:Enter}} ca să încheiați.

## Aliniată: lungimea reală a unei linii înclinate

1. Tastați `DAL` și apăsați {{key:Enter}}.
2. Apăsați {{key:Enter}} ca să selectați un obiect.
3. Faceți clic pe peretele de 60 de grade.
4. Mutați spre exterior și faceți clic pentru a plasa cota.

Textul spune 1500: lungimea reală, măsurată de-a lungul peretelui.

## Rază și diametru

1. Tastați `DRA` și apăsați {{key:Enter}}.
2. Faceți clic pe cercul stâlpului.
3. Mutați cursorul. Indicatorul pornește din centru spre cursor.
4. Faceți clic pentru a plasa textul.

Textul spune `R600`. {{cmd:DIMDIAMETER}} (`DDI`) face același lucru, cu semnul ⌀ și cu diametrul.

## Unghiular

Pereții de aici formează o singură polilinie, deci măsurați colțul după vârf. (Între două linii separate puteți face clic pe linii.)

1. Tastați `DAN` și apăsați {{key:Enter}}.
2. La `Select arc, circle or line, or Enter for a vertex`, apăsați {{key:Enter}}.
3. La `Specify angle vertex`, agățați-vă de colțul din dreapta-jos și faceți clic.
4. La `Specify first angle endpoint`, agățați-vă de colțul din stânga-jos și faceți clic.
5. La `Specify second angle endpoint`, agățați-vă de capătul de sus al peretelui de 60 de grade și faceți clic.
6. Mutați cursorul în interiorul camerei, lângă colț, și faceți clic.

Textul spune `120°`, unghiul interior al colțului. Plasată de cealaltă parte a colțului, cota măsoară unghiul de acolo. Faceți clic pe un arc la prima solicitare ca să cotați unghiul pe care îl acoperă, sau pe două linii ca să cotați unghiul dintre ele.

## Schimbați textul

Ca să scrieți propriul text, tastați `T` și apăsați {{key:Enter}} înainte să plasați cota, apoi tastați textul. În text, `<>` reprezintă valoarea măsurată: `<> TYP.` dă `6000 TYP.`. Apăsați {{key:Enter}} pe un rând gol ca să păstrați valoarea măsurată.

Pentru a schimba o cotă existentă:

1. Faceți clic pe ea.
2. În panoul din dreapta, tastați în {{ui:Text}}. Lăsați-l gol pentru valoarea măsurată.
3. Apăsați {{key:Enter}}.

## Cotele urmează geometria

O cotă își ține minte punctele. Trageți unul dintre mânerele sale sau mutați, rotiți ori scalați-o împreună cu obiectele pe care le măsoară, iar ea se măsoară din nou. Dacă întindeți geometria fără să mutați cota, cota nu urmează: își păstrează propriile puncte.

## Greșeli frecvente

- **Textul și săgețile sunt microscopice sau uriașe.** Setați scara generală: vezi [Stabilirea dimensiunilor cotelor](topic:dimension-settings).
- **„Alegeți un punct în interiorul unghiului pe care doriți să îl măsurați.”** Punctul dat pentru o cotă unghiulară stă pe unul dintre brațe. Mutați-l în interiorul unghiului.
- **Continuarea a pornit de la altă cotă.** Ea continuă mereu de la ultima cotă liniară sau aliniată făcută în această sesiune. Faceți mai întâi (sau refaceți) cota de la care să continue.
- **Cota a ieșit verticală.** Ați plasat-o pe lateral. Tastați `H` înainte s-o plasați.
- **Picioare și inci.** Setați mai întâi formatul de lungime al desenului la {{ui:Arhitectural}}, sau {{ui:Format}} al cotei din {{ui:Proprietăți}}: vezi [Picioare și inci în cote](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Numerele nu sunt în unitatea dorită.** Alegeți {{ui:Unități în text}}: vezi [Cote în mm, cm, m sau km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
