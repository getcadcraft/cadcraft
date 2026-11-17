---
title: Plasarea profilelor de oțel și a pieselor standard
summary: Desenați profile de oțel, elevații și bare 3D din tabelele de profile publicate, plasați șuruburi, piulițe, șaibe, știfturi, rulmenți, pene și roți dințate după standardele lor și listați-le într-o listă de piese.
keywords: oțel, secțiune, profil, formă, profil W, flanșă lată, grindă I, canal, cornier, HSS, tub, țeavă, ipe, hea, heb, upn, grindă, stâlp, bară, elevație, aisc, en 10365, șurub, bulon, piuliță, șaibă, știft, rulment, pană, canal de pană, roată dințată, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, piese standard, listă de piese, listă de materiale, bom, steelmember, partslist
from: 547c1048
---

Fila {{ui:Standard}} din bibliotecă are două feluri de lucruri, făcute chiar aici din tabele publicate (nimic nu se descarcă):

- **Profile de oțel**: 1,335 de dimensiuni. W, S, C, L, HSS și Pipe din AISC Shapes Database v16.0; IPE, HEA, HEB și UPN din EN 10365:2017. DetailCraft folosește același tabel.
- **Piese standard**: șuruburi cu cap hexagonal (ISO 4017), șuruburi hexagonale (ISO 4014), piulițe hexagonale (ISO 4032), șaibe simple (ISO 7089), șuruburi și piulițe hexagonale în țoli (ASME B18.2.1 și B18.2.2), știfturi paralele (ISO 2338), rulmenți radiali cu bile (ISO 15), pene paralele (DIN 6885-1) și roți dințate cilindrice (module din ISO 54).

Totul de aici este partajat sub CC0: îl puteți folosi oricum, fără a fi nevoie de menționarea autorului.

## Plasați un profil de oțel

1. Deschideți biblioteca ({{ui:Bibliotecă}} în grupul Blocuri, sau tastați `LIB`) și faceți clic pe fila {{ui:Standard}}.
2. Alegeți familia din prima listă, de exemplu {{ui:Profile W}}. Tastați în caseta de căutare ca să restrângeți dimensiunile: `W12` arată toate W12.
3. La {{ui:Plasare ca}}, alegeți:
   - {{ui:Secțiune}}: secțiunea transversală, cu centrul în punctul de inserare.
   - {{ui:Elevație}}: bara văzută din lateral, cu lungimea din {{ui:Lungime (mm)}}, din mijlocul capătului ei stâng.
   - {{ui:Bară 3D}}: un solid pe fila 3D (mai jos).
4. Faceți clic pe {{ui:Plasare}} de pe cardul dimensiunii, apoi faceți clic unde trebuie, ca pentru orice element din bibliotecă.

O secțiune sau o elevație devine un bloc. Atributele sale păstrează dimensiunea, tabelul din care provine, lungimea (pentru o elevație) și un material pe care îl puteți completa.

:::note
Profilele S, canalele și UPN sunt desenate cu tălpi paralele de grosime medie, iar cornierele cu colțuri drepte: tălpile reale sunt înclinate, iar colțurile rotunjite. W, IPE, HEA și HEB au razele de racordare la rădăcină, iar HSS razele colțurilor.
:::

## Creați o bară 3D

Alegeți {{ui:Bară 3D}} și faceți clic pe {{ui:Plasare}}, sau tastați {{cmd:STEELMEMBER}} (`SMEMBER`) în linia de comandă:

1. La `Dimensiune secțiune`, apăsați {{key:Enter}} pentru dimensiunea afișată sau tastați una, de exemplu `HSS6x6x1/4` sau `IPE300`.
2. Faceți clic pe punctul de început, apoi pe punctul de sfârșit. Bara merge între ele, așezată pe sol.
3. Pentru un stâlp, tastați `C`, faceți clic pe punctul de bază și tastați înălțimea sa.

Bara este un solid închis pe fila 3D. Mutați-o sau copiați-o acolo ca pe orice alt solid. {{key:Mod+Z}} o elimină din nou.

## Plasați o piesă standard

1. Pe fila {{ui:Standard}}, alegeți familia, de exemplu {{ui:Șuruburi cu cap hexagonal}}.
2. Pentru un șurub, bulon, știft sau pană, tastați {{ui:Lungime (mm)}} (în țoli pentru familiile în țoli). Pentru o roată dințată, tastați {{ui:Dinți}}, {{ui:Lățime tălpi (mm)}} și {{ui:Alezaj (mm)}}. Lăsați o casetă goală pentru valoarea obișnuită afișată în ea.
3. Faceți clic pe {{ui:Plasare}} de pe dimensiune și faceți clic unde trebuie.

Șuruburile, buloanele și știfturile sunt desenate din lateral, cu fața de sprijin a capului în punctul de inserare; piulițele, șaibele, rulmenții și roțile dințate sunt privite din față; penele, de sus. Filetele sunt desenate în mod obișnuit: rădăcina ca linie subțire, capătul filetului ca linie groasă. Roțile dințate sunt desenate ca cercul vârfurilor, cercul de divizare și cercul rădăcinii, nu dinte cu dinte.

Blocul fiecărei piese are ca atribute tipul, standardul, dimensiunea, lungimea și materialul, iar greutatea sa se calculează din forma nominală în oțel. Schimbați materialul în panoul {{ui:Proprietăți}}.

Aceleași piese există în bibliotecă și ca elemente, iar PartCraft le deschide ca piese parametrice ({{ui:Piesă standard}} din grupul său Fișier).

## Creați o listă de piese

- În bibliotecă, faceți clic pe {{ui:Listă de piese}}: fiecare piesă standard și profil de oțel din desen, grupate pe tip, standard, dimensiune, lungime și material, cu cantitatea și numerele de element. {{ui:Descărcare CSV}} o salvează pentru o foaie de calcul.
- Pentru a o desena, tastați {{cmd:PARTSLIST}} (`PLIST`), faceți clic în colțul stânga sus al tabelului și apăsați {{key:Enter}} pentru înălțimea obișnuită a textului sau tastați una.

Lista se citește din atributele blocurilor, deci rămâne corectă și după ce desenul este salvat ca DWG sau DXF și deschis din nou.

## Greșeli frecvente

- **„Niciun profil de oțel nu se numește …”**: tastați dimensiunea cum o listează fila {{ui:Standard}}: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Bara este pe fila 3D, nu în plan.** {{cmd:STEELMEMBER}} creează un solid; deschideți fila 3D ca s-o vedeți. Ca să arătați oțelul în plan, plasați și o {{ui:Secțiune}} sau o {{ui:Elevație}}.
- **O lungime în afara intervalului.** Un bulon trebuie să fie mai lung decât capul său, iar o pană mai lungă decât este lată. Linia de sub carduri spune ce valoare a fost refuzată.
