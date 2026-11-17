---
title: Folosirea parametrilor și a ecuațiilor
summary: Denumiți dimensiunile, conduceți-le cu expresii precum width / 2 și tastați un număr pe o dimensiune condusă pentru a schimba ce o conduce.
keywords: parametri, par, manager de parametri, ecuații, expresii, variabile, bidirecțional, intenția de proiectare, parametru utilizator, fx
from: 650b9844
---

## Un tabel pentru fiecare dimensiune

Panoul {{ui:Parametri}} (butonul {{ui:Parametri}} din grupul {{ui:Parametric}}, sau tastați {{cmd:PARAMETERS}}) listează fiecare constrângere dimensională (`d1`, `rad1`, `dia1`, `ang1`, sau numele pe care i l-ați dat) și parametrii proprii, împreună. Orice nume poate fi folosit în orice expresie.

Fiecare rând are:

- **Nume**: tastați unul nou pentru a-l redenumi; fiecare expresie care îl folosește urmează.
- **Expresie**: un număr (`40`) sau o expresie (`width / 2 + gap`). Tastați în ea și apăsați {{key:Enter}}: desenul urmează.
- **Valoare**: ce rezultă din calcul. Pe un rând pe care îl conduce o expresie, puteți tasta aici și un număr: CadCraft calculează parametrul din spatele ei. Cu `d1 = width / 2`, tastarea lui `30` în valoarea lui d1 setează `width` la 60.

Când doi parametri conduc o valoare (`width / 2 + gap`), o casetă de dialog întreabă care să fie schimbat. Fiecare schimbare este un singur pas de anulare ({{key:Mod+Z}}).

## Adăugați propriul parametru

1. Deschideți panoul {{ui:Parametri}}.
2. Tastați un nume (`gap`) și o valoare (`10`), apoi alegeți {{ui:Adăugare (A)}}.
3. Folosiți-l: în expresia lui d1, tastați `width / 2 + gap` și apăsați {{key:Enter}}.

Numele încep cu o literă sau `_` și conțin litere, cifre și `_`. Numele de funcții, `pi` și numele de unități nu pot fi nume.

## Expresii

| Scrieți | Înseamnă |
|---|---|
| `+ - * / ^ %` | adunare, scădere, înmulțire, împărțire, putere, rest |
| `( )` | grupare |
| `sin cos tan asin acos atan atan2` | trigonometrie în grade |
| `sqrt pow exp ln log abs sign` | rădăcini, puteri, logaritmi |
| `ceil floor int round min max` | rotunjiri și limite |
| `if(a > b, x, y)` | o alegere |
| `pi` | 3.14159… |

Numerele pot avea o unitate: `25mm`, `1in`, `2'`, `90deg`. Lungimile cu unitate sunt convertite în milimetri, deci folosiți unități doar în desene măsurate în milimetri; în rest, tastați numere simple.

## În linia de comandă

`-PARAMETERS` face același lucru fără panou: `N` Nou, `E` Editare (și o constrângere dimensională), `R` Redenumire, `D` Ștergere, `?` Listă.

## Ce este refuzat

- O expresie care se folosește pe sine, direct sau prin altele: „width, d1 se folosesc reciproc.”
- O valoare pe care o dimensiune nu o poate lua: o lungime negativă, un unghi peste 180°.
- O valoare pe care desenul nu o poate lua împreună cu celelalte constrângeri: nimic nu se schimbă, iar mesajul numește constrângerile din cale.
- Ștergerea unui parametru folosit de altceva: panoul oferă să scrie mai întâi valoarea lui în locurile respective. Numele unei constrângeri dimensionale se șterge ștergând constrângerea.
