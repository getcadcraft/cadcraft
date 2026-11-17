---
title: Etichete: atribute care alimentează tabelele
summary: Definiți o etichetă (tipul ei, valorile pe care le poate lua, blocurile la care se aplică), setați-o pe referințe de bloc și listați referințele ca un tabel centralizator pe care îl puteți salva ca CSV.
keywords: etichete, etichetă, atribut, tabel centralizator, extragere de date, proprietate, rezistență la foc, listă de alegere, referință de bloc, TAGS, csv
from: 9b90bacc
---

O **etichetă** este un atribut de bloc cu o definiție: ce fel de valoare conține, ce valori sunt permise și la ce blocuri se aplică. Valorile sunt atribute obișnuite ale blocului, deci orice alt program le citește, iar {{cmd:ATTEDIT}} le arată. Doar definițiile sunt noi, iar ele sunt păstrate în desen.

## Definiți și setați

Tastați {{cmd:TAGS}} și alegeți:

- {{ui:Definire}}: un nume (litere, cifre, spațiu, `_ . -`), un tip (`text`, `number`, `integer`, `yesno`, `length`, `angle`), valorile permise separate prin `;` (lăsați gol pentru oricare) și numele blocurilor la care se aplică (`DOOR*` se potrivește cu fiecare bloc al cărui nume începe cu DOOR; gol înseamnă fiecare bloc).
- {{ui:Set}}: cu referințe de bloc selectate, tastați `FireRating=60 min; Width=850`. O valoare din afara listei permise, sau o valoare care nu este număr pentru o etichetă numerică, este refuzată și se spune. Un pas de anulare. Un bloc care nu are atributul îl primește ca atribut ascuns.
- {{ui:Tabel centralizator}}: fiecare referință la un bloc la care se aplică o etichetă, opțional grupată după o etichetă sau după numele blocului, tipărită și salvată ca CSV.
- {{ui:Eliminare (R)}}: uită o definiție; valorile rămân pe referințe.

Redenumirea unei etichete redenumește valorile sale pe fiecare referință. Numele etichetelor nu fac distincție între majuscule și minuscule, la fel ca numele atributelor.
