---
title: Provjera točaka izvedenog stanja
summary: Pročitajte točke koje je ekipa izmjerila i usporedite ih s točkama i blokovima crteža: unutar ili izvan tolerancije, nije izmjereno, višak. Označite ih u crtežu i zapišite kao CSV izvještaj.
keywords: izvedeno stanje, as built, as-built, asbuilt, geodetska izmjera, ukupna stanica, iskolčenje, datoteka točaka, csv, txt, pnezd, penzd, xyz, tolerancija, odstupanje, provjera, usporedba, exportpoints, točke za iskolčenje
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) druga je polovica naredbe {{cmd:EXPORTPOINTS}}: izvezete točke crteža za teren, ekipa ih iskolči i izmjeri što je izvedeno, a ASBUILT uspoređuje njihovu datoteku s crtežom.

1. Upišite {{cmd:ASBUILT}} i odaberite iste točke i blokove koje ste izvezli (Enter uzima svaki POINT, kao i EXPORTPOINTS).
2. **Uparite točke izvedenog stanja po** **Broju** (ekipa je zadržala vaše brojeve točaka: navedite prvi broj od kojeg ste izvezli) ili po **najbližoj** točki (ekipa je sama numerirala svoja mjerenja: svaka projektna točka uzima najbližu).
3. Navedite jedinice i koordinate datoteke kako ste ih izvezli (Crtež, Metri ili Stope; World ili UCS), te **toleranciju** u jedinicama crteža.
4. Odaberite CSV ili TXT datoteku ekipe. CadCraft je čita kao što je čita CivilCraft: zarezi, tabulatori, točka-zarezi ili razmaci, redak zaglavlja koji imenuje stupce, ili PNEZD prema broju stupaca.

Redak naredbi kaže koliko je točaka upareno, koliko ih je unutar tolerancije, izvan nje, nije izmjereno i višak, te najveću udaljenost. **Označiti ih u crtežu?** Da: stavlja ih na sloj **AS-BUILT** kao jedan korak poništavanja, s točkom na svakom mjerenju, njezinim brojem i udaljenosti pokraj nje te crvenom linijom od projektne točke do svakog mjerenja izvan tolerancije. CSV izvještaj se preuzima sa svakom točkom: projektne i izvedene koordinate, razlike istok, sjever i u visini te rezultat.

Vidi također [Točke za BIM programe](topic:points-for-bim).
