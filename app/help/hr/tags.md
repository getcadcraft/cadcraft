---
title: Oznake: atributi koji napajaju specifikacije
summary: Definirajte oznaku (njezinu vrstu, vrijednosti koje može poprimiti, blokove na koje se primjenjuje), postavite je na reference blokova i prikažite reference kao specifikaciju koju možete spremiti kao CSV.
keywords: oznake, oznaka, atribut, specifikacija, izvlačenje podataka, svojstvo, vatrootpornost, popis za odabir, referenca bloka, TAGS, csv
from: 9b90bacc
---

**Oznaka** je atribut bloka s definicijom: kakvu vrijednost drži, koje su vrijednosti dopuštene i na koje se blokove primjenjuje. Vrijednosti su obični atributi blokova, pa ih čita svaki drugi program, a {{cmd:ATTEDIT}} ih prikazuje. Nove su samo definicije, a čuvaju se u crtežu.

## Definirajte i postavite

Upišite {{cmd:TAGS}} i odaberite:

- {{ui:Definiraj}}: ime (slova, brojke, razmak, `_ . -`), vrstu (`text`, `number`, `integer`, `yesno`, `length`, `angle`), dopuštene vrijednosti odvojene s `;` (ostavite prazno za bilo koje) i imena blokova na koje se primjenjuje (`DOOR*` odgovara svakom bloku čije ime počinje s DOOR; prazno znači svaki blok).
- {{ui:Skup}}: uz odabrane reference blokova upišite `FireRating=60 min; Width=850`. Vrijednost izvan dopuštenog popisa ili nebroj za brojevnu oznaku se odbija i to se kaže. Jedan korak poništavanja. Blok koji nema atribut dobiva ga kao skriveni atribut.
- {{ui:Specifikacija (tablica) (C)}}: svaka referenca na blok na koji se oznaka primjenjuje, po izboru grupirana po oznaci ili po imenu bloka, ispisana i spremljena kao CSV.
- {{ui:Ukloni (R)}}: zaboravlja definiciju; vrijednosti ostaju na referencama.

Preimenovanje oznake preimenuje njezine vrijednosti na svakoj referenci. Imena oznaka ne razlikuju velika i mala slova, kao što ih ne razlikuju ni imena atributa.
