---
title: Címkék: attribútumok, amelyek a kimutatásokat táplálják
summary: Határozzon meg egy címkét (fajtáját, megengedett értékeit és a blokkokat, amelyekre vonatkozik), állítsa be blokkhivatkozásokon, és sorolja fel a hivatkozásokat kimutatásként, amelyet CSV-ként menthet.
keywords: címkék, címke, attribútum, kimutatás, adatkinyerés, tulajdonság, tűzállósági besorolás, választólista, blokkhivatkozás, TAGS, csv
from: 9b90bacc
---

A **címke** olyan blokkattribútum, amelynek definíciója van: meghatározza, milyen fajta értéket tartalmaz, mely értékek engedélyezettek, és mely blokkokra vonatkozik. Az értékek közönséges blokkattribútumok, így bármely más program beolvassa őket, a {{cmd:ATTEDIT}} pedig megjeleníti őket. Csak a definíciók újak, és azokat a rajz tárolja.

## Definiálás és beállítás

Gépelje be a {{cmd:TAGS}} parancsot, és válassza ki:

- {{ui:Definiálás}}: egy név (betűk, számjegyek, szóköz, `_ . -`), egy fajta (`text`, `number`, `integer`, `yesno`, `length`, `angle`), a megengedett értékek `;` jellel elválasztva (üresen hagyva bármely), és az a blokknév, amelyre vonatkozik (a `DOOR*` minden olyan blokkra illeszkedik, amely DOOR-ral kezdődik; üres mező minden blokkot jelent).
- {{ui:Készlet}}: a blokkhivatkozások kijelölése után gépelje be: `FireRating=60 min; Width=850`. A megengedett listán kívüli értéket, vagy számtag esetén nem számot a program elutasítja, és ezt közli. Egy visszavonási lépés. Ha egy blokknak nincs meg az attribútuma, rejtett attribútumként kapja meg.
- {{ui:Kimutatás (C)}}: minden olyan blokkhivatkozás, amelyre egy címke vonatkozik, opcionálisan címke vagy blokknév szerint csoportosítva, nyomtatva és CSV-ként mentve.
- {{ui:Eltávolítás}}: elfelejti a definíciót; az értékek a hivatkozásokon maradnak.

Egy címke átnevezése minden hivatkozáson átnevezi az értékeit. A címkenevek nem különböztetik meg a kis- és nagybetűt, ahogy az attribútumnevek sem.
