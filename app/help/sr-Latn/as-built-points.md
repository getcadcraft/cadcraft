---
title: Proverite stvarno izvedene tačke
summary: Pročitajte tačke koje je ekipa izmerila na terenu i uporedite ih s tačkama i blokovima crteža: unutar ili van tolerancije, nije izmereno, višak — označeno na crtežu i upisano u CSV izveštaj.
keywords: stvarno izvedeno, as-built, asbuilt, geodetsko snimanje, totalna stanica, iskolčavanje, obeležavanje, datoteka tačaka, csv, txt, pnezd, penzd, xyz, tolerancija, odstupanje, provera, uporedi, exportpoints, tačke za iskolčavanje
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) je druga polovina {{cmd:EXPORTPOINTS}}: izvezete tačke crteža za teren, ekipa ih obeleži na terenu i izmeri šta je izgrađeno, a ASBUILT upoređuje njihovu datoteku sa crtežom.

1. Ukucajte {{cmd:ASBUILT}} i izaberite iste tačke i blokove koje ste izvezli (Enter uzima svaku POINT, kao i EXPORTPOINTS).
2. Uparite stvarno izvedene tačke po **Broju** (ekipa je zadržala vaše brojeve tačaka: unesite prvi broj koji ste izvezli) ili po **Najbližoj** (oni su numerisali sopstvena merenja: svaka projektovana tačka dobija najbliže).
3. Unesite jedinice i koordinate datoteke kako ste ih izvezli (Crtež, Metri ili Stope; Svet ili UCS), i **toleranciju** u jedinicama crteža.
4. Izaberite CSV ili TXT datoteku ekipe. CadCraft je čita kao što čita CivilCraft: zarezi, tabulatori, tačka-zarezi ili razmaci, red zaglavlja koji imenuje kolone, ili PNEZD po broju kolona.

Komandna linija kaže koliko je tačaka upareno, koliko je unutar tolerancije, van nje, nije izmereno i viška, i najveću udaljenost. **Označiti ih na crtežu?** Da ih stavlja na sloj **AS-BUILT** kao jedan korak poništavanja: tačka za svako merenje, njen broj i udaljenost pored, i crvena linija od projektovane tačke do svakog merenja van tolerancije. CSV izveštaj se preuzima sa svim tačkama: projektovane i stvarne koordinate, razlike istok, sever i visina, i rezultat.

Pogledajte i [Tačke za BIM programe](topic:points-for-bim).
