---
title: Atributele blocurilor
summary: Vedeți și schimbați valorile pe care le poartă o referință de bloc, cum ar fi un număr de articol sau un producător, și păstrați-le la salvarea unei copii.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, bloc de titlu, title block, editare pe loc, edit in place, editor de atribute, attribute editor, attdef, definire atribut, define attribute, bedit, editor de blocuri, block editor, bclose, atribut, atribute, attributes, attrib, etichetă, tag, număr de articol, item number, valoare, value, invizibil, invisible, constant, bloc, block, proprietăți, properties, listă, list, etichetă de echipament, equipment tag
from: 34d307c7
---

## Ce sunt atributele

Un atribut este o valoare denumită care călătorește cu o referință de bloc: numărul de articol al unei etichete de echipament, numele unei etichete de cameră, rezistența la foc a unei uși. Definiția blocului spune ce atribute are (fiecare are o **etichetă**, un **mesaj**, o **valoare implicită** și un loc, o dimensiune și un unghi pentru text). Fiecare referință a blocului poartă propriile valori.

Unele atribute sunt **invizibile**: conțin date, cum ar fi un producător sau un model, dar nu se desenează niciodată. Unele sunt **constante**: sunt aceleași pentru fiecare referință, fixate de bloc.

## De unde vin atributele

- Blocurile din fișierele DWG și DXF pe care le deschideți își păstrează atributele, cu valorile fiecărei referințe.
- Blocurile aduse cu {{cmd:INSERT}} și opțiunea {{ui:File}} își păstrează atributele. Vezi [Inserare dintr-un fișier sau din bibliotecă](topic:insert-from-file-and-library).
- Elementele din bibliotecă intră ca blocuri cu atribute: un număr de articol vizibil și datele elementului, invizibile.
- Blocurile pe care le faceți singuri: definiți mai întâi atributele cu {{cmd:ATTDEF}} (mai jos), apoi selectați-le împreună cu celelalte obiecte când faceți blocul.

## Definirea atributelor pentru propriile blocuri

1. Desenați liniile blocului, de exemplu o etichetă de cameră.
2. Alegeți {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Definire atribut}}, sau tastați `ATT` și apăsați {{key:Enter}}.
3. Istoricul arată modurile (`Invisible=No Constant=No Preset=No`). Tastați `I`, `C` sau `P` ca să comutați unul și apăsați {{key:Enter}} când sunt corecte. Valorile invizibile se păstrează, dar nu se desenează; una constantă are aceeași valoare în fiecare referință; una presetată nu se cere la inserarea blocului.
4. Tastați eticheta (de exemplu `ROOM_NO`: majuscule, fără spații), mesajul (`Numărul camerei`) și o valoare implicită (`101`).
5. Faceți clic unde ajunge valoarea și indicați înălțimea și rotația. Eticheta apare în desen.
6. Creați blocul cu {{cmd:BLOCK}}, selectând liniile și definițiile de atribute împreună. Referința care le înlocuiește primește valorile implicite; fiecare {{cmd:INSERT}} nou le cere.

O definiție de atribut selectată arată {{ui:Tag}}, {{ui:Prompt}}, {{ui:Default}} și modurile în {{ui:Properties}}.

## Modificarea unui bloc: editorul de blocuri

{{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Modificare bloc}} ({{cmd:BEDIT}}, `BE`) deschide un bloc de sine stătător: tastați numele lui (sau selectați mai întâi o referință). O bară de sus spune ce bloc editați. Desenați, ștergeți și modificați obiectele lui cu comenzile obișnuite și adăugați sau modificați definiții de atribute. Apoi faceți clic pe {{ui:Salvare bloc}} (sau tastați {{cmd:BCLOSE}} și `S`): fiecare referință arată modificarea, iar un {{key:Mod+Z}} anulează totul. {{ui:Renunțare la modificări}} ({{cmd:BCLOSE}}, `D`) lasă blocul cum era.

Când ați adăugat, eliminat sau modificat definiții de atribute, salvarea aduce și toate referințele la zi: valorile pe care le-ați tastat se păstrează, un atribut nou primește valoarea implicită, unul eliminat dispare, iar fiecare atribut revine la locul pe care i-l dă definiția. Istoricul spune câte referințe au fost actualizate.

## Editarea unui bloc de titlu pe loc (REFEDIT)

Un bloc de titlu de pe o foaie stă adesea într-un bloc. Ca să-i schimbați liniile sau textele fără să părăsiți foaia:

1. Selectați blocul de titlu, apoi {{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Editare pe loc}} (sau tastați {{cmd:REFEDIT}}).
2. Conținutul său devine obiecte obișnuite acolo unde se află; restul este estompat și nu poate fi modificat.
3. Modificați, ștergeți sau desenați: obiectele noi devin parte din bloc.
4. Faceți clic pe {{ui:Salvare bloc}} din bara de sus (sau tastați {{cmd:REFCLOSE}} și `S`). Fiecare referință arată modificarea, iar un {{key:Mod+Z}} anulează toată editarea. {{ui:Renunțare}} lasă blocul cum era.

Un desen legat, un bloc dinamic sau o referință scalată diferit pe orizontală și verticală nu pot fi editate pe loc: folosiți {{cmd:BEDIT}} (sau deschideți desenul legat).

:::note
Salvați sau renunțați în editorul de blocuri înainte de a salva desenul: un fișier salvat cu editorul deschis are blocul cum era înainte.
:::

## Completarea valorilor la plasarea unui bloc

1. Tastați `I` și apăsați {{key:Enter}}, tastați numele blocului și apăsați {{key:Enter}}.
2. Faceți clic unde trebuie să ajungă.
3. CadCraft cere fiecare valoare, de exemplu `Introduceți Numărul articolului (ITEM) <>`. Tastați valoarea și apăsați {{key:Enter}}, sau apăsați {{key:Enter}} ca să păstrați valoarea implicită afișată între paranteze unghiulare.

Valorile pe care blocul le marchează ca presetate, și cele constante, nu se cer. Ele primesc valoarea implicită.

## Vedeți și schimbați valorile

1. Faceți clic pe o referință de bloc.
2. În panoul din dreapta, sub {{ui:Attributes}}, fiecare etichetă are valoarea sa. Cele invizibile spun `hidden`.
3. Faceți clic pe o valoare, tastați-o pe cea nouă și apăsați {{key:Enter}}.

Desenul arată imediat noua valoare. Fiecare modificare este un pas: {{key:Mod+Z}} o anulează.

**Editorul de atribute.** Faceți dublu clic pe o referință cu atribute (sau tastați {{cmd:EATTEDIT}}): caseta {{ui:Edit attributes}} listează fiecare etichetă cu mesajul și valoarea sa. Tastați valori noi; faceți clic pe un rând ca să schimbați {{ui:Height}}, {{ui:Rotation}}, {{ui:Width factor}}, {{ui:Justify}}, {{ui:Layer}}, {{ui:Color}} și {{ui:Invisible}} ale acelui atribut, doar pentru această referință. {{ui:Apply}} lasă caseta deschisă; {{ui:OK}} aplică și închide. Fiecare {{ui:Apply}} sau {{ui:OK}} este un pas de anulare.

**În linia de comandă**, {{cmd:ATTEDIT}} cere pe rând fiecare valoare: tastați una nouă sau apăsați {{key:Enter}} ca să o păstrați.

## Schimbarea definițiilor de atribute (BATTMAN, ATTSYNC)

{{ui:Blocuri}} › {{ui:Mai multe}} › {{ui:Attribute manager}} ({{cmd:BATTMAN}}) listează atributele unui bloc: schimbați o etichetă, un mesaj sau o valoare implicită, bifați {{ui:Invisible}}, {{ui:Constant}} sau {{ui:Preset}} și mutați-le în sus sau în jos (ordinea în care sunt cerute valorile). Cu {{ui:Update the references (values kept)}} bifat, {{ui:Apply}} aduce și toate referințele la zi; o etichetă redenumită își păstrează valorile. Fiecare {{ui:Apply}} este un pas de anulare.

{{cmd:ATTSYNC}} aduce manual referințele la zi cu definițiile blocului lor: `S` alege o referință, `N` numește un bloc, `A` face fiecare bloc. Valorile se păstrează.

Valorile câmpurilor proprii ale unui element din bibliotecă (identificatorul, versiunea, licența și atribuirea) se afișează, dar nu pot fi editate, ca verificarea actualizărilor să funcționeze în continuare. Numărul de articol și cantitatea sunt ale dvs. de modificat.

## Listarea lor

Selectați referințe și tastați `LI` (pentru {{cmd:LIST}}). Istoricul arată fiecare atribut ca `TAG = value`, cu `(invisible)` sau `(constant)` acolo unde se aplică.

## Mutarea, rotirea și descompunerea

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} și {{cmd:MIRROR}} păstrează valorile; textul se mută odată cu blocul și rămâne lizibil.
- {{cmd:EXPLODE}} transformă atributele vizibile în text simplu, cu valorile lor. Cele invizibile se pierd.

## Salvarea

Un DWG salvat și un DXF salvat păstrează fiecare atribut: definițiile fiecărui bloc (și cele invizibile, constante și presetate) și valorile fiecărei referințe. Alte programe CAD le citesc ca atribute obișnuite de bloc.

Într-un DXF R12, o valoare mai lungă de 255 de caractere se taie la 255, iar istoricul spune asta.

## Greșeli frecvente

- **O valoare nu apare în desen.** Este invizibilă sau goală. Valorile invizibile apar totuși în panoul din dreapta.
- **Valoarea pe care am tastat-o a ajuns în linia de comandă.** Faceți clic mai întâi în caseta valorii din panoul din dreapta.
