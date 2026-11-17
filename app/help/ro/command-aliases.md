---
title: Editarea aliasurilor de comenzi
summary: Păstrați aliasurile proprii ale comenzilor într-un singur fișier text, în formatul familiar, importați și exportați un fișier .pgp și reîncărcați-l cu REINIT.
keywords: alias, aliasuri, aliasedit, pgp, scurtătură, nume scurt, reinit, tastatură, personalizare, editare aliasuri
from: 6ab6fa0e
---

## Ce veți învăța

Cum adăugați propriile nume scurte pentru comenzi, de exemplu `LL` pentru {{cmd:LINE}}, toate într-un singur fișier text.

## Adăugarea unui alias

1. Deschideți {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Editare aliasuri…}}, sau tastați {{cmd:ALIASEDIT}} și apăsați {{key:Enter}}.
2. Adăugați o linie cu aliasul, o virgulă și comanda după o stea:

```
LL,     *LINE
```

3. Faceți clic pe {{ui:Salvare}}. Linia de comandă arată câte aliasuri sunt în uz.
4. Tastați `LL` și apăsați {{key:Enter}}: LINE pornește.

Aliasurile proprii stau peste cele ale CadCraft. O linie proprie câștigă în fața unui alias încorporat cu același nume; eliminați linia și cel încorporat revine.

## Linii pe care CadCraft le refuză

Editorul listează fiecare problemă cu numărul liniei în timp ce tastați:

- comanda nu există;
- aliasul este chiar numele unei comenzi (`LINE, *CIRCLE` ar ascunde LINE);
- linia nu este `ALIAS, *COMANDĂ`;
- același alias apare pe două linii (cea de-a doua câștigă).

Liniile care pornesc un program de pe calculator, ca `NOTEPAD, START, 1, *File to edit: ,`, sunt omise cu o notă: o aplicație din browser nu poate porni programe.

## Aduceți aliasurile din alt program

1. În editorul de aliasuri, faceți clic pe {{ui:Import .pgp…}} și alegeți fișierul. Puteți și să trageți un fișier `.pgp` peste desen.
2. Verificați problemele listate (comenzile pe care CadCraft nu le are sunt refuzate, restul funcționează).
3. Faceți clic pe {{ui:Salvare}}.

{{ui:Export .pgp}} salvează aliasurile CadCraft și pe cele proprii ca un singur fișier, în același format.

## Reîncărcarea fișierului

Tastați {{cmd:REINIT}} și apăsați {{key:Enter}} ca să aplicați din nou fișierul de aliasuri. Acesta este păstrat în acest browser; aplicația desktop îl va păstra în propriul dosar, iar serviciul cloud îl va sincroniza.

## Taste de scurtătură pentru orice comandă

Un alias se tastează; o scurtătură este o tastă. Ca să dați unei comenzi o tastă proprie:

1. Faceți clic pe {{ui:Vizualizare}} › {{ui:Mai multe}} › {{ui:Comenzi rapide de la tastatură…}}, sau tastați `KEYS` și apăsați {{key:Enter}}.
2. Faceți clic pe caseta {{ui:Tastă}} și apăsați tastele, de exemplu {{key:Alt+Shift+C}}.
3. În {{ui:Execută}}, scrieți comanda și, dacă doriți, ce să tastați după ea: `CIRCLE` sau `ZOOM E`.
4. Faceți clic pe {{ui:Adăugare (A)}}.

O tastă are nevoie de {{key:Mod}} sau {{key:Alt}} cu o literă sau o cifră, ori de o tastă de funcție liberă ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Tastele deja folosite de CadCraft, de aplicație sau de browser, precum și cele pe care le are un buton de Instrumente proprii (vezi [Butoane proprii](topic:my-tools)), sunt refuzate, iar caseta spune de ce. Scurtăturile sunt păstrate în acest browser (sau în aplicația desktop); {{ui:Eliminare (R)}} înlătură una.
