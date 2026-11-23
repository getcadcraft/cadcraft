---
title: Dați opțiunilor comenzilor litere proprii
summary: Răspundeți la opțiunile unei comenzi cu litere alese, în orice limbă, dintr-un singur fișier text care poate fi editat, importat și exportat.
keywords: litere opțiuni, optionkeys, optkeys, cuvânt cheie opțiune, cheie, remapare, mapare, personalizare, litere proprii, limbă, traducere opțiuni, formă scurtă, import, export, ambiguu
from: 7c8328c6
---

## Ce veți învăța

Cum schimbați literele tastate pentru a răspunde la opțiunile unei comenzi. De exemplu, {{cmd:ARRAY}} întreabă `[Dreptunghiular (R)/POlar]` și acceptă `PO` pentru Polar; puteți face ca `P` sau alte litere să aibă același efect, în limba proprie, dacă doriți.

## Cum se răspunde la opțiuni

Când o comandă afișează opțiuni între paranteze drepte, literele mari sunt cele de tastat: `POlar` este `PO`, iar `Ieșire (X)` este `X`.

Puteți tasta și mai puține litere. Dacă ceea ce tastați se potrivește cu o singură opțiune afișată, CadCraft o acceptă: la `[Dreptunghiular (R)/POlar]`, un singur `P` înseamnă Polar. Dacă se potrivește cu două, linia de comandă le numește și întreabă din nou:

```
C ar putea fi COUnt, COLumns. Tastați mai multe litere.
```

Numerele nu sunt niciodată ghicite, astfel încât o distanță sau un număr tastat este întotdeauna citit ca număr.

## Adăugarea propriilor litere

Fiecare comandă își păstrează literele încorporate. Propriile litere se adaugă peste acestea, astfel încât lista conține doar ce ați schimbat.

1. Deschideți {{ui:Setări}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Litere pentru opțiuni}} și faceți clic pe {{ui:Editare…}}. Sau tastați {{cmd:OPTIONKEYS}} și apăsați {{key:Enter}}.
2. Sub {{ui:Comandă}}, alegeți comanda, de exemplu `ARRAY`. Lista conține fiecare comandă care cere opțiuni și pornește de la ultima comandă folosită.
3. Sub {{ui:Opțiune}}, alegeți opțiunea. Fiecare arată literele încorporate între paranteze, de exemplu `POlar (PO)`.
4. În {{ui:Literele proprii}}, tastați literele dorite, de exemplu `P`, și faceți clic pe {{ui:Adăugare (A)}}.
5. Opțiunea apare acum sub {{ui:Literele proprii}}, cu literele încorporate și cu cele proprii. Faceți clic pe {{ui:Salvare}}.

Porniți {{cmd:ARRAY}}, selectați un obiect și apăsați {{key:Enter}}. Promptul arată literele proprii după opțiune, `POlar (P)`, iar `P` răspunde la ea.

Pentru a elimina una, faceți clic pe x de la capătul rândului și apoi pe {{ui:Salvare}}. Opțiunea revine doar la literele încorporate.

## Litere care nu pot fi folosite

Editorul refuză literele care ar ascunde ceva ce linia de comandă citește deja și spune motivul:

- literele încorporate ale unei alte opțiuni a aceleiași comenzi (`R` pentru Polar în `ARRAY`, unde `R` este Dreptunghiular);
- un cuvânt de agățare la obiect de trei litere sau mai mult, cum ar fi `END`, `MID` sau `CEN`, și cuvintele `ALL` și `LAST`;
- aceleași litere pentru două opțiuni diferite ale aceleiași comenzi.

Cât timp ceva este listat cu roșu, {{ui:Salvare}} este dezactivat: corectați linia sau eliminați-o, și butonul revine. Literele încorporate ale unui prompt câștigă întotdeauna în fața celor proprii, astfel încât lista nu poate împiedica un răspuns încorporat să funcționeze. Literele care coincid cu numele unei comenzi, cum ar fi `L` sau `C`, sunt în regulă: la un prompt de opțiune, linia de comandă citește un răspuns, nu pornește o comandă.

Opțiunile listate pentru o comandă provin din comenzile care au aceleași prompturi, astfel încât, din când în când, o comandă listează o opțiune pe care o cere doar în anumite cazuri.

## O alegere pentru fiecare comandă

Sub {{ui:Comandă}}, alegeți {{ui:Fiecare comandă}}. Opțiunile sunt atunci toate opțiunile pe care le are vreo comandă, cum ar fi `Ieșire (X)` sau `Anulare (U)`. Literele adăugate acolo răspund la opțiunea respectivă oriunde o oferă o comandă. Literele adăugate pentru o singură comandă au prioritate față de acestea.

## Litere în limba proprie

Literele pot fi din orice alfabet, astfel încât puteți răspunde la opțiuni fără să schimbați tastatura: adăugați `З` pentru Închidere sub {{ui:Fiecare comandă}}, sau `П` pentru POlar în `ARRAY`.

CadCraft se livrează doar cu literele din engleză. Lista proprie este modul în care biroul sau cei care împărtășesc aceeași limbă configurează restul, iar {{ui:Exportare}} creează un fișier care poate fi transmis mai departe.

## Editare ca text

{{ui:Editare ca text}} din editor arată aceeași listă ca linii de text, câte una pentru fiecare opțiune, iar acesta este și ce salvează {{ui:Exportare}}:

```
ARRAY.PO,  P
*.X,       Q
```

Fiecare linie este comanda, un punct, literele încorporate ale opțiunii, o virgulă și literele proprii. O steluță în locul comenzii înseamnă fiecare comandă. O linie care începe cu `;` este o notă.

## Ce rămâne la fel

- Literele încorporate continuă să funcționeze alături de cele proprii.
- Rutinele și butoanele din bara de instrumente continuă să folosească literele încorporate, astfel încât nimic din ce ați încărcat nu se strică. Pentru a tasta singur literele încorporate acolo unde literele proprii ar sta în cale, puneți mai întâi o liniuță de subliniere: `_PO`.
- Prescurtarea unei comenzi este altceva: vedeți [Editarea aliasurilor de comenzi](topic:command-aliases).

## Liniile refuzate de CadCraft

Când editați ca text sau importați un fișier, editorul listează fiecare problemă cu numărul liniei:

- comanda nu există (un alias al unei comenzi este în regulă: `AR.PO` se citește ca `ARRAY.PO`);
- linia nu are forma `COMMAND.OPTION, LETTERS`;
- literele conțin un spațiu sau un semn (doar litere și cifre, cel mult 16);
- aceleași litere răspund la două opțiuni diferite ale aceleiași comenzi.

## Import și export

{{ui:Exportare}} salvează literele proprii ca fișier text, pentru păstrare sau pentru a fi dat altcuiva. {{ui:Importare…}} citește un astfel de fișier. Ambele se află în editor și în {{ui:Setări}} › {{ui:CadCraft}} › {{ui:Litere pentru opțiuni}}.

În Setări, {{ui:Importare…}} înlocuiește fișierul cu cel ales. Un fișier cu o linie care intră în conflict sau nu poate fi folosit nu este preluat; deschideți editorul și importați-l acolo pentru a vedea liniile. În editor, importul doar completează caseta: nimic nu se schimbă până când nu faceți clic pe {{ui:Salvare}}.

## Reîncărcare sau eliminare

Tastați {{cmd:REINIT}} și apăsați {{key:Enter}} pentru a aplica din nou fișierul. Pentru a elimina o literă, ștergeți linia ei și faceți clic pe {{ui:Salvare}}.

## Literele urmează contul

Când sunteți conectat la getcadcraft.com, literele dumneavoastră sunt păstrate în cont. Deschideți CadCraft într-un alt browser sau pe alt computer, cu același cont, și ele sosesc singure; linia de comandă afișează `Litere pentru opțiuni din contul propriu`. Dacă au fost modificate în două locuri, copia cea mai nouă are prioritate, iar cea înlocuită se păstrează o dată.

{{ui:Setări}} › {{ui:CadCraft}} › {{ui:Litere pentru opțiuni}} arată starea lor. Fără conectare sau offline, ele rămân în acest browser și ajung în cont la următoarea salvare, când sunteți conectat.

Înrudite: [Editarea aliasurilor de comenzi](topic:command-aliases) · [Setările CadCraft](topic:settings) · [Comenzi](topic:commands)
