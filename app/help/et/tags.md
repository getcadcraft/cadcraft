---
title: Sildid: atribuudid, mis toidavad loendeid
summary: Määratle silt (selle liik, väärtused, mida ta võib võtta, plokid, millele ta kehtib), sea see plokiviidetele ja loetle viited loendina, mille saad salvestada CSV-failina.
keywords: sildid, silt, atribuut, loend, andmete väljavõte, omadus, tulepüsivus, valikunimekiri, plokiviide, TAGS, csv
from: 9b90bacc
---

**Silt** on plokiatribuut koos määratlusega: mis liiki väärtust see hoiab, millised väärtused on lubatud ja millistele plokkidele see kehtib. Väärtused on tavalised plokiatribuudid, nii et iga muu programm neid loeb ja {{cmd:ATTEDIT}} näitab neid. Uued on ainult määratlused, need hoitakse joonises.

## Määratle ja sea

Kirjuta {{cmd:TAGS}} ja vali:

- {{ui:Määratle}}: nimi (tähed, numbrid, tühik, `_ . -`), liik (`text`, `number`, `integer`, `yesno`, `length`, `angle`), lubatud väärtused eraldatuna märgiga `;` (tühjaks jätmisel mistahes väärtus) ja plokkide nimed, millele see kehtib (`DOOR*` vastab kõigile plokkidele, mis algavad sõnaga DOOR; tühi tähendab kõiki plokke).
- {{ui:Komplekt}}: vali plokiviited ja kirjuta `FireRating=60 min; Width=850`. Väärtus, mis on väljaspool lubatud loendit või mis ei ole number numbrisildi puhul, lükatakse tagasi ja öeldakse, miks. Üks tagasivõtmise samm. Plokk, millel atribuuti pole, saab selle peidetud atribuudina.
- {{ui:Loend}}: iga viide plokile, millele mõni silt kehtib, valikuliselt grupeeritud sildi või plokinime järgi, trükitud ja salvestatud CSV-na.
- {{ui:Eemalda}}: unustab määratluse; väärtused jäävad viidetele alles.

Sildi ümbernimetamine nimetab selle väärtused ümber igal viitel. Siltide nimed ei ole tõstutundlikud, nagu ei ole seda atribuutide nimedki.
