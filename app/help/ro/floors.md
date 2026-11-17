---
title: Suprapunerea etajelor într-un singur desen
summary: Desenați primul etaj peste parter, la aceleași coordonate, și porniți sau opriți fiecare etaj, fără referințe externe (Xref).
keywords: etaj, etaje, FLOORS, FLR, FLOOR, FLOORLAYERS, nivel, suprapunere, strat de proiectare, spațiu model, substrat, xref
from: 7440fc87
---

Etajele permit suprapunerea planurilor într-un singur spațiu model. Fiecare etaj are propriile obiecte, iar straturile funcționează în continuare pe toate. Un perete de pe `P-Walls` poate fi pe orice etaj.

## Pornirea

Tastați `FLOORS` (`FLR`), sau alegeți {{ui:Etaje…}} din meniul {{ui:Mai multe}} al grupului {{ui:Vizualizare}}, apoi alegeți {{ui:Începeți cu etaje}}. Ce ați desenat până acum merge la parter.

## Desenarea pe un etaj

Alegeți etajul cu butonul rotund din panou. Obiectele noi merg pe el.

Celelalte etaje care sunt afișate apar estompate sub el. Puteți agăța de ele, astfel încât primul etaj să se alinieze cu parterul, dar nu le puteți modifica până nu le faceți etajul activ. Ochiul oprește un etaj. Pereții se unesc doar cu pereții de pe același etaj.

Ca să porniți un etaj de la cel de dedesubt, selectați ce doriți, alegeți etajul în panou și apăsați {{ui:Copiere acolo}}.

## Puneți etajele pe foi

Selectați o fereastră de vizualizare de pe o foaie și alegeți etajul ei sub {{ui:Etaj afișat}} în {{ui:Proprietăți}}. O fereastră fără etaj ales arată toate etajele pornite.

## Trimiterea fișierului altcuiva

Alte programe CAD nu cunosc etajele, deci le arată pe toate împreună. Înainte să trimiteți un fișier, alegeți {{ui:Transformare etaje în straturi}} din panou sau tastați `FLOORLAYERS`. Fiecare obiect trece pe un strat numit după etajul său, precum `Parter-P-Walls`, ca să poată fi oprit în continuare fiecare etaj. Anularea îl readuce. CadCraft păstrează etajele în fișierul DWG sau DXF pe care îl salvează.
