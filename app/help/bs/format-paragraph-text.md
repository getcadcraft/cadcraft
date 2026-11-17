---
title: Oblikovanje teksta pasusa
summary: Promijeni font, veličinu, podebljano, kurziv, boju i poravnanje dijela napomene, te upiši znakove za stepen, plus-minus i prečnik u polje teksta pasusa.
keywords: mtext uređivač, tekst pasusa, oblikovanje teksta, podebljano, kurziv, podvučeno, precrtano, boja, veličina fonta, poravnanje, znak stepena, plus-minus, prečnik, textedit, ddedit, polje teksta
from: 8e173666
---

## Šta ćete uraditi

Napišite napomenu, učinite jednu riječ podebljanom i crvenom, promijenite joj veličinu, dodajte znak stepena i završite.

## Koraci

1. Upišite {{cmd:MTEXT}} i pritisnite {{key:Enter}}, ili dvaput kliknite postojeći tekst, ili upišite {{cmd:TEXTEDIT}} i odaberite ga. Polje za tekst se otvara sa redom za oblikovanje iznad njega.
2. Upišite napomenu. {{key:Enter}} počinje novi pasus.
3. Odaberite riječ mišem ili pomoću {{key:Shift+Right}}.
4. U redu za oblikovanje koristite {{ui:Font}} za font, {{ui:Size}} za veličinu odabranog, dugmad {{ui:Bold}}, {{ui:Italic}}, {{ui:Underline}} i {{ui:Strike-through}}, te {{ui:Colour}} za izbor boje. Bez odabira, {{ui:Size}} mijenja sav tekst.
5. Koristite {{ui:Align left}}, {{ui:Centre}} ili {{ui:Align right}} za poravnanje.
6. Da upišete simbol, postavite kursor tamo gdje ide i kliknite {{ui:Degree sign}}, {{ui:Plus-minus sign}} ili {{ui:Diameter sign}}.
7. Kliknite {{ui:OK}} ili pritisnite {{key:Ctrl+Enter}} da spasite tekst. {{ui:Cancel}} ili {{key:Esc}} ostavlja tekst kakav je bio.

## Napomene

- Polje ima i {{ui:Height}}, {{ui:Line spacing}}, {{ui:Width}} (0 = bez prelamanja) i {{ui:Justify}}.
- Oblikovanje se zapisuje kao kodovi teksta pasusa zajedno sa običnim riječima, pa pretraga, hvatanje, DXF i DWG nastavljaju raditi. Font cijelih napomena postavite pomoću [stila teksta](topic:text-styles).
- Još nema nabrajanja sa tačkama ni brojevima, lenjira tabulatora ni poravnatih pasusa.
- Ispisani PDF-ovi postavljaju tekst u fontu Helvetica.
