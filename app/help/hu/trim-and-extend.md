---
title: Vágás és nyújtás
summary: Vágja vissza a vonalakat, ahol mások keresztezik azokat, és nyújtsa meg őket, hogy másokhoz érjenek, egyesével vagy sokat egyszerre, egy útvonal húzásával rajtuk keresztül.
keywords: trimextendmode, ablakhúzás, vágás, nyújtás, tr, ex, gyors vágás, húzás, szabadkézi, útvonal, kerítés, keresztező, shift, vágóélek, határélek, élmód, mód, szabványos, gyors, törlés, előnézet, falak, tisztítás
from: 25fbc5bd
---

## Amit megtanul

Hogyan működik a {{cmd:TRIM}} és az {{cmd:EXTEND}}, valamint a gyors használati módjai: húzzon át sok darabon egyszerre, tartsa lenyomva a {{key:Shift}} billentyűt a vágás és a nyújtás közötti váltáshoz, és lássa, mi fog eltűnni, mielőtt kattint.

## Egy darab levágása

1. Rajzoljon egy hosszú vízszintes vonalat és két rövid vonalat, amelyek átmetszik azt.
2. Írja be a `TR` parancsot, és nyomja meg az Entert. Az előzmények ezt írják: `Jelenlegi beállítások: Gyors mód, élek: Nincs nyújtás`.
3. Vigye a mutatót a hosszú vonalra a két rövid között. Az a darab szürkévé és szaggatottá válik: ez lesz az, ami eltűnik.
4. Kattintson. A darab eltűnik.
5. Nyomja meg az Entert a parancs befejezéséhez.

A Gyors módban (az alapérték) minden látható objektum vágóél, így sosem kell előbb éleket választania. Kattintson arra a darabra, amelyet el szeretne távolítani. Az az objektum, amelyet semmi nem metsz, egészben törlődik, és az előzmények ezt mondják.

## Sok darab egyetlen húzással

1. Rajzoljon egy hosszú vízszintes vonalat és tíz rövid függőleges vonalat, amelyek átmetszik azt.
2. Írja be a `TR` parancsot, és nyomja meg az Entert.
3. Nyomja le az egér gombját a hosszú vonal fölött, az első függőleges vonaltól balra, és húzzon át mind a tíz fölött, a hosszú vonal felett.

Húzás közben az útvonal szaggatott vonalként látszik, és minden darab, amelyen áthaladt, szürkévé válik. Engedje el: mind a tíz felső darab egy lépésben levágódik. Írja be az `U` betűt (Visszavonás), majd nyomja meg az Entert, hogy mindet egyszerre visszaállítsa.

:::tip
Két üres pontra is kattinthat: a köztük lévő vonal úgy működik, mint a húzott útvonal. Írja be az `F` betűt (Kerítés), hogy ehelyett egy pontsorozatra kattintson, majd nyomja meg az Entert.
:::

:::touch
Húzzon ujjal ugyanígy. A darabra koppintás levágja.
:::

## Nyújtás helyette, a Shift billentyűvel

1. Rajzoljon egy függőleges vonalat, és tőle balra öt rövid vízszintes vonalat, amelyek előtte megállnak.
2. Írja be a `TR` parancsot, és nyomja meg az Entert.
3. Tartsa lenyomva a {{key:Shift}} billentyűt. Vigye a mutatót egy rövid vonalra: az a rész, amennyivel megnőne, szürkén és szaggatottan látszik.
4. Még mindig lenyomva tartva a {{key:Shift}} billentyűt, húzzon lefelé az öt rövid vonalon.

Mind az öt most a függőleges vonalig fut. A {{key:Shift}} az {{cmd:EXTEND}} parancsban fordítva működik (`EX`): a kattintás nyújt, a {{key:Shift}}+kattintás vág. A nyújtás azt a véget hosszabbítja meg, amely a legközelebb van ahhoz a ponthoz, ahol kattintott, vagy ahol az útvonal átmetszi.

## Vágás egy ablakon belül

1. Írja be a `TR` parancsot, és nyomja meg az Entert.
2. Írja be a `C` betűt (Keresztező ablak), és nyomja meg az Entert.
3. Kattintson két sarokra az eltávolítandó darabok körül.

Minden darab, amely legalább részben az ablakba esik, levágódik.

Ha csak húzással szeretne ablakot kapni, a `C` beírása nélkül: {{ui:Beállítások}} › {{ui:CadCraft}} › {{ui:Húzás vágáshoz és nyújtáshoz}} › {{ui:Ablak}}. Ekkor egy üres helyen lenyomva és húzva doboz rajzolódik, és minden darab, amelyet érint, levágódik (vagy megnyúlik az {{cmd:EXTEND}} parancsban, vagy a {{key:Shift}} billentyűvel). Az {{ui:Útvonal}} visszahozza a szabadkézi útvonalat. A TRIM elején lévő beállítási sor megmondja, melyik van bekapcsolva.

## Vágóélek kiválasztása (Szabványos mód)

Néha csak egy vonal vágjon, például egy falfelület, amelyet sok más vonal keresztez.

1. Írja be a `TR` parancsot, és nyomja meg az Entert.
2. Írja be az `O` betűt (mód), nyomja meg az Entert, majd írja be az `S` betűt (Szabványos), és nyomja meg az Entert.
3. A `Vágóélek kiválasztása` kérdésnél kattintson az élvonalakra (vagy húzzon ablakot), majd nyomja meg az Entert. Ha semmi nincs kijelölve, és az Entert nyomja meg, minden objektum él lesz.
4. Kattintson vagy húzzon át a levágandó darabokon.

Csak a kiválasztott élek vágnak, és az az objektum, amelyet egyetlen él sem metsz, érintetlen marad. A mód addig marad, amíg be nem zárja a lapot; a visszaváltáshoz írja be az `O` betűt, majd a `Q` betűt (Gyors). A {{cmd:TRIMEXTENDMODE}} a kezdés előtt állítja be, mint az ugyanilyen nevű változó máshol: `0` Szabványos, `1` Gyors. A `T` (vágóélek, cuTting edges) bármikor új éleket választ; az {{cmd:EXTEND}} parancsban ez a `B` (határélek, Boundary edges).

## Élek, amelyek elérnének

1. Írja be a `TR` parancsot, és nyomja meg az Entert.
2. Írja be az `E` betűt (él), nyomja meg az Entert, majd az `E` betűt (nyújtás), és nyomja meg az Entert.

Most egy vágóvonal vagy ív, amely rövidebb, mint kellene, úgy számít, mintha folytatódna: egy rövid vonal ott vág, ahol hosszabban keresztezné. A visszaváltáshoz írja be az `E` betűt, majd az `N` betűt (Nincs nyújtás). Ez ugyanaz, mint az EDGEMODE 1 és 0 értéke.

## Törlés kilépés nélkül

Írja be az `R` betűt (törlés, eRase), nyomja meg az Entert, jelölje ki a törlendő objektumokat, és nyomja meg az Entert. A TRIM folytatódik.

## Gyakori hibák

- **Egy egész vonal eltűnt.** A Gyors módban az az objektum, amelyet semmi nem metsz, törlődik. Írja be az `U` betűt (Visszavonás) a visszaállításhoz, vagy váltson Szabványos módra (`O`, `S`).
- **„Ott nincs mit vágni: a kiválasztott élek közül egy sem metszi azt az objektumot.”** A Szabványos mód csak a kiválasztott élekben vág. Írja be a `T` betűt az élek újbóli kiválasztásához.
- **„Ebben az irányban nincs határ.”** A nyújtás nem talált semmit előtte. Kattintson a közelebbi végre, amelynek nőnie kell, vagy kapcsolja be az `E` (Él, Nyújtás) lehetőséget a rövid határokhoz.
- **A húzás lasszót rajzolt.** A húzás csak akkor vág, ha a TRIM vagy az EXTEND objektumot kér. Ha nem fut parancs, a húzás kijelöl (lásd [Lasszóos kijelölés](topic:lasso-selection)).
- **Csak vonalak, ívek, körök és polivonalak vághatók.** Először bontsa fel a blokkot, hogy a vonalai vághatóak legyenek.
