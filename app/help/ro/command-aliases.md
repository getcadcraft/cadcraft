---
title: Editarea aliasurilor de comenzi
summary: Păstrați propriile aliasuri de comenzi într-un singur fișier text, în formatul obișnuit, importați și exportați un fișier .pgp și reîncărcați-l cu REINIT.
keywords: alias, aliasuri, aliasedit, pgp, scurtătură, nume scurt, reinit, tastatură, personalizare, editare aliasuri
from: 2282d36f
---

## Ce veți învăța

Cum adăugați propriile nume scurte pentru comenzi, de exemplu `LL` pentru {{cmd:LINE}}, toate într-un singur fișier text.

## Adăugarea unui alias

1. Deschideți {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Editare aliasuri…}}, sau tastați {{cmd:ALIASEDIT}} și apăsați {{key:Enter}}.
2. Adăugați o linie cu aliasul, o virgulă și comanda după o steluță:

```
LL,     *LINE
```

3. Faceți clic pe {{ui:Salvare}}. Linia de comandă arată câte aliasuri sunt folosite.
4. Tastați `LL` și apăsați {{key:Enter}}: pornește LINE.

Aliasurile proprii se află peste cele ale CadCraft. O linie proprie are prioritate față de un alias încorporat cu același nume; ștergeți linia și cel încorporat revine.

## Liniile refuzate de CadCraft

Editorul listează fiecare problemă cu numărul liniei, pe măsură ce tastați:

- comanda nu există;
- aliasul este chiar numele unei comenzi (`LINE, *CIRCLE` ar ascunde LINE);
- linia nu are forma `ALIAS, *COMMAND`;
- același alias se află pe două linii (cea de după câștigă).

Liniile care pornesc un program de pe computer, ca `NOTEPAD, START, 1, *File to edit: ,`, sunt ignorate, cu o notă: o aplicație din browser nu poate porni programe.

## Aducerea aliasurilor dintr-un alt program

1. În editorul de aliasuri, faceți clic pe {{ui:Importare .pgp…}} și alegeți fișierul. Puteți și trage un fișier `.pgp` pe desen.
2. Verificați problemele listate (comenzile pe care CadCraft nu le are sunt refuzate, restul funcționează).
3. Faceți clic pe {{ui:Salvare}}.

{{ui:Exportare .pgp}} salvează aliasurile CadCraft și pe cele proprii ca un singur fișier, în același format.

## Reîncărcarea fișierului

Tastați {{cmd:REINIT}} și apăsați {{key:Enter}} pentru a aplica din nou fișierul cu aliasuri. Fișierul se păstrează în acest browser; aplicația desktop îl va păstra în dosarul ei, iar serviciul cloud îl va sincroniza.

## Litere pentru opțiunile unei comenzi

Un alias denumește o comandă. Pentru a schimba literele care răspund la opțiunile unei comenzi (`P` pentru Polar în {{cmd:ARRAY}}), vedeți [Dați opțiunilor comenzilor litere proprii](topic:option-letters).

## Comenzi rapide de la tastatură pentru orice comandă

Un alias se tastează; o comandă rapidă este o tastă. Pentru a da unei comenzi o tastă proprie:

1. Faceți clic pe {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Comenzi rapide de la tastatură…}}, sau tastați `KEYS` și apăsați {{key:Enter}}.
2. Faceți clic în caseta {{ui:Tastă}} și apăsați tastele, de exemplu {{key:Alt+Shift+C}}.
3. În {{ui:Execută}}, scrieți comanda și, dacă doriți, ce să tastați după ea: `CIRCLE`, sau `ZOOM E`.
4. Faceți clic pe {{ui:Adăugare (A)}}.

O tastă trebuie să fie {{key:Mod}} sau {{key:Alt}} împreună cu o literă sau o cifră, ori o tastă de funcție liberă ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Tastele deja folosite de CadCraft, de aplicație sau de browser, și tastele atribuite unui buton Instrumentele mele (vedeți [Butoane proprii](topic:my-tools)), sunt refuzate, iar caseta spune motivul. Comenzile rapide se păstrează în acest browser (sau în aplicația desktop); {{ui:Eliminare (R)}} elimină una.
