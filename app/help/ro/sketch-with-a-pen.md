---
title: Schițați cu un creion și obțineți geometrie precisă
summary: Desenați de mână cu un creion, mouse sau deget, iar fiecare traseu devine o linie, un cerc, un arc, un dreptunghi sau o polilinie curată când ridicați creionul, prinsă de ce este deja desenat, cu dimensiunea gata de suprascris.
keywords: schiță, creion, stylus, mână liberă, deget, curățare, precis, agățare, SKETCHLIVE, SKETCHFIX, dimensiune, suprascriere
from: cd87eb75
---

Pornește {{cmd:SKETCHLIVE}} (sau alege **Desen › Mai multe › Schițare cu un creion**) și desenați un traseu apăsând și trăgând. Când ridicați creionul, CadCraft interpretează ce ați vrut și îl pune în desen:

| Traseul desenat | Ce se obține |
|---|---|
| Aproape drept | O linie. O linie aproape orizontală sau verticală devine exact orizontală sau verticală. |
| Închis și rotund | Un cerc |
| Parte dintr-o formă rotundă | Un arc |
| Închis, cu patru colțuri drepte | Un dreptunghi |
| Orice altceva | O polilinie cu laturi drepte |

Capetele unui traseu sunt trase spre cel mai apropiat capăt din ce este deja desenat, astfel încât un perete schițat se întâlnește cu peretele de alături.

## Suprascrieți dimensiunea

După fiecare traseu, linia de comandă afișează dimensiunea sa (**lungimea** unei linii, **raza** unui cerc sau arc, **lățimea** unui dreptunghi) ca valoare implicită. Apăsați {{key:Enter}} ca s-o păstrați sau tastați un număr ori o lungime, de exemplu `12'6"`, ca s-o înlocuiți. O linie își păstrează primul capăt, un cerc centrul, un dreptunghi primul colț.

Apăsați {{key:Enter}} la un prompt gol ca să încheiați sau tastați `U` ca să anulați ultimul traseu. Întreaga sesiune este un singur pas de anulare.

## Curățarea mai multor trasee deodată

{{cmd:SKETCHFIX}} adună trasee și le face pe toate precise când apăsați {{key:Enter}}, ceea ce se potrivește unei schițe grosiere desenate rapid.

:::note
Totul se calculează pe calculator, după reguli, fără model și fără trimiterea a nimic nicăieri.
:::
