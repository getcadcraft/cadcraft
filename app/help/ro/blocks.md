---
title: Crearea și inserarea blocurilor
summary: Transformați o ușă desenată într-un bloc, plasați-l din nou în alte poziții, scări și unghiuri și curățați blocurile nefolosite.
keywords: bloc, bmake, inserare, ddinsert, simbol, curățare, descompunere, redefinire, punct de bază, referință, numărare, bcount, tabel centralizator, csv, atribute, extragere de date
from: 125a129d
---

## Ce veți realiza

O simbolizare de ușă transformată într-un bloc numit `DOOR-900`, apoi plasată de trei ori: așa cum a fost desenată, rotită cu 90 de grade și oglindită.

Un bloc este un grup numit de obiecte. Îl desenați o singură dată; fiecare loc în care îl folosiți este o **referință la bloc** ce trimite la aceeași definiție unică. Secțiunea {{ui:Blocuri}} din panoul din stânga listează blocurile din desen și de câte ori este folosit fiecare.

## Desenarea ușii

1. Tastați `L` și apăsați {{key:Enter}}.
2. Tastați `0,0` și apăsați {{key:Enter}}.
3. Tastați `@0,900` și apăsați {{key:Enter}}, apoi apăsați din nou {{key:Enter}}. Aceasta este foaia ușii.
4. Tastați `A` și apăsați {{key:Enter}}.
5. Tastați `C` și apăsați {{key:Enter}} pentru a indica mai întâi centrul.
6. Tastați `0,0` și apăsați {{key:Enter}} pentru centru.
7. Tastați `900,0` și apăsați {{key:Enter}} pentru punctul de început.
8. Tastați `0,900` și apăsați {{key:Enter}} pentru punctul de sfârșit. Acesta este arcul de deschidere.
9. Faceți clic pe {{ui:Extinderi}}.

Arcele pornesc în sens invers acelor de ceasornic, de la punctul de început la cel de sfârșit.

## Crearea blocului

1. Tastați `B` și apăsați {{key:Enter}}, sau faceți clic pe {{ui:Creare}} din grupul Blocuri.
2. La `Enter block name`, tastați `DOOR-900` și apăsați {{key:Enter}}.
3. La `Specify insertion base point`, tastați `0,0` și apăsați {{key:Enter}}. Acesta este balamaua: punctul care ajunge acolo unde plasați blocul.
4. La `Select objects`, trageți un dreptunghi de selecție în jurul foii și al arcului.
5. Apăsați {{key:Enter}}.

Istoricul afișează `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` Panoul {{ui:Blocuri}} listează DOOR-900 cu `1×` alături: o singură referință. Faceți clic pe ușă: acum se selectează ca un singur obiect, o „Referință la bloc”.

:::tip
Puteți selecta mai întâi obiectele și apoi să tastați `B`. CadCraft tot cere numele și punctul de bază, apoi folosește selecția făcută.
:::

## Inserarea blocului

1. Tastați `I` și apăsați {{key:Enter}}, sau faceți clic pe {{ui:Inserare}} de lângă DOOR-900 în panoul {{ui:Blocuri}}.
2. La `Enter block name or [File/Library] <DOOR-900>`, apăsați {{key:Enter}}. (Butonul {{ui:Inserare}} din panou completează numele automat.)
3. Ușa urmărește cursorul. Faceți clic acolo unde trebuie să fie balamaua.

Apare o a doua ușă.

## Inserarea rotită sau scalată

1. Tastați `I` și apăsați {{key:Enter}}, apoi apăsați {{key:Enter}} pentru a accepta numele.
2. La `Specify insertion point [Scale/Rotate]`, tastați `R` și apăsați {{key:Enter}}.
3. Tastați `90` și apăsați {{key:Enter}}. Previzualizarea se rotește.
4. Faceți clic pentru a plasa blocul.

Tastați `S` în schimb, ca să setați un factor de scară; el se aplică pe ambele direcții. Scara și rotirea sunt reținute pentru următoarea inserare. Ca să oglindiți o ușă, inserați-o și apoi folosiți {{cmd:MIRROR}} pe referință.

## Modificarea unui bloc plasat

Selectați o referință la bloc. În panoul din dreapta puteți modifica {{ui:X}}, {{ui:Y}}, {{ui:Scară X}}, {{ui:Scară Y}} și {{ui:Rotire}}. O valoare negativă pentru {{ui:Scară X}} o oglindește.

## Redefinirea unui bloc

Ca să schimbați toate ușile deodată, creați un bloc cu același nume:

1. Desenați noua versiune a ușii.
2. Tastați `B` și apăsați {{key:Enter}}, apoi tastați `DOOR-900`.
3. La `Block "DOOR-900" already exists. Redefine it?`, tastați `Y` și apăsați {{key:Enter}}.
4. Indicați punctul de bază și selectați noile obiecte, ca înainte.

Fiecare referință la DOOR-900 arată acum noua versiune.

Sau modificați chiar blocul: {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Modificare bloc}} ({{cmd:BEDIT}}) îl deschide separat, iar {{ui:Salvare bloc}} îl salvează înapoi în desen. Vezi [Atributele blocurilor](topic:attributes#change-a-block-the-block-editor).

## Numărarea blocurilor și exportul unui tabel

Tastați {{cmd:COUNT}} (sau {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Numărare blocuri}}), apoi:

- faceți clic pe o ușă: sunt selectate toate ușile din acest spațiu, iar istoricul spune câte sunt aici și în întregul desen;
- sau apăsați {{key:Enter}}: istoricul listează fiecare bloc cu numărul său, cele mai multe primele;
- sau tastați `E`, apoi `C` pentru un CSV cu numărătorile (în model, pe foi, în total), ori `A` pentru câte un rând pentru fiecare referință, cu stratul, poziția, rotirea și fiecare valoare de atribut: un tabel centralizator pe care îl puteți deschide într-un program de calcul tabelar.

Blocurile fără nume (cote, tabele) și referințele din interiorul altor blocuri nu sunt numărate. Celulele care încep ca o formulă (`=`, `+`, `-`, `@`) primesc un `'` în față, ca programul de calcul tabelar să le afișeze ca text.

## Descompunerea și curățarea

- {{cmd:EXPLODE}} (`X`) transformă o referință la bloc selectată înapoi în obiecte separate. Definiția rămâne.
- {{cmd:PURGE}} (`PU`) șterge definițiile de blocuri pe care nimic nu le mai folosește. Istoricul spune câte a șters.

## Nume de blocuri

Un nume poate avea până la 255 de caractere și poate conține spații, dar nu poate începe cu asterisc și nu poate conține `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` sau caracterul accent grav. Când salvați DXF R12, numele sunt scrise cu litere mari, caracterele care nu sunt litere, cifre, `$`, `_` sau `-` devin `_`, iar numele sunt tăiate la 31 de caractere; istoricul spune câte s-au schimbat. Numele scurte cu litere mari, cifre și liniuțe, precum `DOOR-900`, rămân nemodificate. Un DWG salvat păstrează numele așa cum le-ați tastat, cu litere mari și mici; se modifică doar caracterele pe care DWG nu le admite (un `|` devine `$0$`, celelalte devin `_`).

## Scrierea unui bloc sau a obiectelor într-un fișier separat

Tastați `W` ({{cmd:WBLOCK}}) și alegeți **Obiecte**, **Bloc** sau **Întregul desen**. Rezultatul este un fișier DWG sau DXF nou, care conține doar straturile, stilurile și blocurile pe care le folosește, cu punctul dvs. de bază drept origine. Pentru obiecte le puteți păstra, le puteți transforma într-un bloc sau le puteți șterge din acest desen.

## Greșeli frecvente

- **Blocul a aterizat departe de cursor.** Punctul de bază nu era pe obiecte. Creați blocul din nou, cu punctul de bază pe un colț sau pe o balama.
- **„Nu s-a selectat niciun obiect; nimic nu a fost creat.”** Ați apăsat {{key:Enter}} înainte de a selecta ceva.
- **„Acest desen nu are încă blocuri: F inserează unul dintr-un fișier, L din bibliotecă (sau creați unul cu BLOCK).”** Tastați `F` ca să aduceți un bloc dintr-un alt desen sau `L` pentru bibliotecă. Vezi [Inserarea dintr-un fișier sau din bibliotecă](topic:insert-from-file-and-library).
- **„O fereastră de vizualizare nu poate intra într-un bloc.”** Lăsați cadrele ferestrelor de vizualizare în afara selecției.
