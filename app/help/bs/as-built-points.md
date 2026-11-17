---
title: Provjera tačaka izvedenog stanja
summary: Pročitajte tačke koje je geodetska ekipa izmjerila i uporedite ih sa tačkama i blokovima crteža: unutar ili van tolerancije, nije izmjereno, višak — označeno u crtežu i zapisano kao CSV izvještaj.
keywords: izvedeno stanje, as built, as-built, asbuilt, geodetsko snimanje, survey, totalna stanica, total station, iskolčavanje, setting out, stake out, datoteka tačaka, point file, csv, txt, pnezd, penzd, xyz, tolerancija, tolerance, odstupanje, deviation, provjeri, check, uporedi, compare, exportpoints, tačke iskolčavanja, layout points
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) je druga polovina {{cmd:EXPORTPOINTS}}: izvezete tačke crteža za teren, ekipa ih iskolči i izmjeri ono što je izgrađeno, a ASBUILT upoređuje njihovu datoteku sa crtežom.

1. Upišite {{cmd:ASBUILT}} i odaberite iste tačke i blokove koje ste izvezli (Enter uzima svaki POINT, kao i EXPORTPOINTS).
2. **Uparite tačke izvedenog stanja po** **Broju** (ekipa je zadržala vaše brojeve tačaka: unesite prvi broj s kojim ste počeli izvoz) ili **Najbližoj** (ekipa je sama numerisala svoja mjerenja: svaka projektna tačka uzima najbližu).
3. Unesite jedinice i koordinate datoteke onako kako ste ih izvezli (Crtež, Metri ili Stope; Svjetske ili UCS), te **toleranciju** u jedinicama crteža.
4. Izaberite CSV ili TXT datoteku ekipe. CadCraft je čita kao što je čita CivilCraft: zarezi, tabulatori, tačka-zarezi ili razmaci, red zaglavlja koji imenuje kolone, ili PNEZD prema broju kolona.

Komandna linija kaže koliko je tačaka upareno, koliko je unutar tolerancije, van nje, nije izmjereno i viška, te najveću udaljenost. **Označiti ih u crtežu?** Da ih stavlja na sloj **AS-BUILT** kao jedan korak poništavanja: tačka na svakom mjerenju, njen broj i udaljenost pored nje, te crvena linija od projektne tačke do svakog mjerenja van tolerancije. Preuzima se CSV izvještaj sa svim tačkama: projektne i izmjerene koordinate, razlike po istoku, sjeveru i visini, te rezultat.

Pogledajte i [Tačke za BIM programe](topic:points-for-bim).
