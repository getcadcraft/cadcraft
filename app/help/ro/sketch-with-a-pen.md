---
title: Schițați cu un creion și obțineți geometrie precisă
summary: Desenați liber cu un creion, mouse sau deget, iar fiecare traseu devine o linie, un cerc, un arc, un dreptunghi sau o polilinie curată la ridicarea creionului, lipită de ce este deja desenat, cu dimensiunea gata de suprascris.
keywords: schiță, creion, stilus, mână liberă, deget, curățare, precis, agățare, SKETCHLIVE, SKETCHFIX, dimensiune, suprascriere, presiune, grosime de linie, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Porniți {{cmd:SKETCHLIVE}} (sau alegeți **Desen › Mai multe › Schițare cu creionul**) și desenați un traseu apăsând și trăgând. La ridicarea creionului, CadCraft înțelege ce ați vrut și îl pune în desen:

| Traseul desenat | Ce se obține |
|---|---|
| Aproape drept | O linie. O linie aproape orizontală sau verticală devine exact orizontală sau verticală. |
| Închis și rotund | Un cerc |
| Parte dintr-o formă rotundă | Un arc |
| Închis cu patru colțuri drepte | Un dreptunghi |
| Orice altceva | O polilinie cu laturi drepte |

Capetele unui traseu sunt trase spre cel mai apropiat capăt al celor deja desenate, astfel încât un perete schițat se întâlnește cu peretele de alături.

## Suprascrierea dimensiunii

După fiecare traseu, linia de comandă arată dimensiunea sa ca valoare implicită (**lungimea** unei linii, **raza** unui cerc sau a unui arc, **lățimea** unui dreptunghi). Apăsați {{key:Enter}} pentru a o păstra sau tastați un număr ori o lungime, cum ar fi `12'6"`, pentru a o înlocui. O linie își păstrează primul capăt, un cerc centrul, un dreptunghi primul colț.

Apăsați {{key:Enter}} la un prompt gol pentru a încheia sau tastați `U` pentru a anula ultimul traseu. Întreaga sesiune este un singur pas de anulare.

## Curățarea mai multor trasee deodată

{{cmd:SKETCHFIX}} adună trasee și le face toate precise la apăsarea lui {{key:Enter}}, ceea ce se potrivește unei dispoziții aproximative desenate repede.

:::note
Totul se calculează pe computer, după reguli, fără model și fără să se trimită nimic nicăieri.
:::

## Presiunea stabilește grosimea liniei

Acolo unde creionul este activat pentru aplicații (Setări › General › Dispozitive de intrare › Creion), un traseu desenat cu creionul păstrează fiecare punct dat de creion și presiunea sa. Un traseu ușor face un obiect subțire, iar unul apăsat unul gros: presiunea medie a traseului alege 0.18, 0.25, 0.35 sau 0.50 mm, iar linia de comandă spune care. Traseele desenate cu mouse-ul sau cu degetul iau grosimea curentă a liniei, ca înainte. {{cmd:PENPRESSURE}} oprește aceasta (sau o pornește din nou); alegerea se păstrează în acest browser.
