---
title: Dokumentumok, kivétel, revíziók és kiadás
summary: Tartsa a projektmappa rajzait kézben, azaz vegyen ki egy fájlt, hogy más ne módosíthassa, adja vissza új revízióként, küldje felülvizsgálatra, és adja ki a jóváhagyó nevével. Előzmények, függőségek, anyagjegyzék és a revíziót mutató rajzfejek is tartoznak hozzá.
keywords: projektbeállítások, jóváhagyók, adminisztrátorok, revíziójelek, ASME, csak olvasható, revíziók összehasonlítása, másolat megnyitása, partcraft, bimcraft, documents, DOCUMENTS, DOCS, tár, vault, dokumentumkezelés, pdm, kivétel, visszaadás, check out, check in, checkout, checkin, zárolás, revízió, rev, revíziójel, kiadás, kiadott, jóváhagyás, felülvizsgálat, elavult, hol használják, bom, anyagjegyzék, rajzfej, revíziótábla, projektmappa
from: ee938722
---

## Amit létrehoz

Egy projektmappa, ahol minden rajznak van revíziója (A.1, A.2 … majd A, B …) és állapota (Munka folyamatban, Felülvizsgálat alatt, Kiadva, Elavult), ahol egyszerre csak egy személy módosíthat egy fájlt, és ahol minden kivétel, visszaadás, jóváhagyás és sikertelen kivétel fel van jegyezve: ki és mikor végezte.

Minden a mappában tárolódik, a rajzok mellett, egy rejtett `.ccvault` mappában. Megosztott meghajtón vagy szinkronizált mappában egy egész csapat is működhet vele. Nincs szerver, és semmi nem töltődik fel.

## A Dokumentumok megnyitása

Írja be a `DOCUMENTS` (vagy `DOCS`) parancsot, majd nyomja meg az {{key:Enter}} billentyűt. A panel a rajz mellett nyílik meg.

Válassza a {{ui:A projektmappa kiválasztása}} lehetőséget, és jelölje ki azt a mappát, amely a projekt rajzait tartalmazza. A projektmappák működnek a CadCraft Studióban és azokban a böngészőkben, amelyek meg tudnak nyitni mappát (Chrome, Edge). Más böngészőkben a panel ezt jelzi.

Először adja meg a nevét (ez minden művelethez rákerül), és ennek a számítógépnek a nevét. Ha be van jelentkezve, a neve már ott van.

## Tár indítása

Ha a mappa még nem tár, a {{ui:Tár indítása ebben a mappában}} lehetőséget kínálja. Írja be a projekt nevét. Ezután nyissa meg a {{ui:A tárban nem szereplő fájlok}} részt, és minden kezelésbe venni kívánt fájl mellett válassza a {{ui:Hozzáadás}} lehetőséget. A hozzáadott fájl **A.1** revízióval, Munka folyamatban állapotban indul.

## Rajz módosítása

1. Válassza a {{ui:Megnyitás}} lehetőséget a rajz mellett. A rajz a CadCraftban nyílik meg. Ha nincs a nevére kivéve, csak nézze meg, de ne módosítsa: a {{ui:Mentés}} nem írja felül, és megmondja az okát (a saját másolatához használja a {{ui:Mentés másként}} lehetőséget).
2. Válassza a {{ui:Kivétel}} lehetőséget. Most már senki más nem veheti ki; a panel megmutatja, ki tartja, melyik számítógépen és mióta.
3. Rajzoljon.
4. Válassza a {{ui:Visszaadás}} lehetőséget, és adja meg, mi változott. A megnyitott rajz a saját formátumában kerül a projektmappába, és ez lesz a következő revízió (A.1, majd A.2). Változtatás nélküli visszaadás megtartja a revíziót.

A {{ui:Kivétel visszavonása}} visszaadja a fájlt új revízió nélkül.

## Felülvizsgálat és kiadás

- {{ui:Átküldés felülvizsgálatra}}: a fájl csak olvasható, amíg felülvizsgálják.
- {{ui:Jóváhagyás}}: írja be a jóváhagyó nevét. Az A.3 **A** revízió lesz, Kiadva állapotban. A kiadott fájlok csak olvashatók.
- {{ui:Visszaküldés}}: vissza Munka folyamatban állapotba, az okkal együtt.
- Kiadott fájlon az {{ui:Új revízió}} a következő betűre veszi ki: az első visszaadása **B.1** lesz. Ezt megelőzően a {{ui:Kivétel visszavonása}} A szinten hagyja.
- Az {{ui:Elavulttá tétel}} kivon a forgalomból egy kiadott fájlt.

A projekt nyilvántarthatja, ki hagyhat jóvá, és előírhatja, hogy a jóváhagyó ne legyen az, aki a fájlt visszaadta (lásd lent: Projektbeállítások).

## Projektbeállítások

Nyissa meg a panelen a {{ui:Projektbeállítások}} részt:

- **Jóváhagyók**: soronként egy név. Ha van ilyen, csak ők hagyhatnak jóvá kiadást.
- **A jóváhagyónak a szerzőtől eltérő személynek kell lennie**: a „négy szem” szabály.
- **Adminisztrátorok**: soronként egy név. Ha van ilyen, csak ők törhetik fel más kivételét, vagy módosíthatják ezeket a beállításokat.
- **Kihagyandó revíziós betűk**: a {{ui:Az ASME Y14.35 sorrend használata}} kihagyja az I, O, Q, S, X és Z betűket, vagy írja be a saját betűit. A már kiosztott betűk megmaradnak; a választás a következő revíziókra vonatkozik.
- **A kivétel elavultnak számít ennyi nap után**: a napok száma (alapértelmezés szerint 14).

Válassza a {{ui:Beállítások mentése}} lehetőséget. A módosítás a naplóba kerül, a módosító nevével együtt.

## Valaki kivételben hagyta a fájlt

A {{ui:Kivétel feltörése}} felszabadít egy olyan fájlt, amelyet más vett ki (távol van, vagy a számítógépe meghibásodott). Meg kell adnia az okot: a napló rögzíti, és azt is, kinek a kivételéről volt szó. Ha a projektnek vannak adminisztrátorai, csak ők végezhetik el. A 14 napnál régebbi kivétel „régi” jelölést kap.

## Előzmények, revíziók, használja, használja őt

Válassza egy fájl nevét, ha az alábbiakat szeretné látni:

- {{ui:Előzmények}}: minden esemény, a legújabb elöl, azzal, hogy ki, melyik számítógépen és mikor végezte.
- {{ui:Revíziók}}: minden megőrzött revízió. Minden revízióról másolat van a tárban (az azonos tartalom egyszer tárolódik). A {{ui:Másolat megnyitása}} a revíziót egyszerű másolatként nyitja meg, amely nem írhatja felül a tár fájlját. Az {{ui:Összehasonlítás ezzel}} felsorolja, mi került hozzá, mi került el és mi módosult az adott revízió és az azt megelőző (vagy bármely más, Ön által választott) között, és színezi a rajzon.
- {{ui:Használja}}: a rajzok, amelyekre hivatkozik (külső hivatkozások, xref), a dokumentumok, amelyekre egy IFC-modell mutat, és a PartCraft-összeállítás alkatrészei.
- {{ui:Használja őt}}: a tár minden olyan fájlja, amely ezt használja.

Az {{ui:Anyagjegyzék (CSV)}} elmenti a fájl által használt összes elem listáját szintenként, mennyiségekkel, revíziókkal és állapotokkal, táblázatkezelőhöz.

## Revíziótábla a lapon

Ha olyan rajz van megnyitva, amelynek van elrendezése, válassza a {{ui:Revíziótábla}} lehetőséget. A kiadott revíziók táblázata (revízió, dátum, készítő, jóváhagyó, leírás) a megtekintett lap jobb felső sarkában jelenik meg. Kiadás jóváhagyásakor a táblázat frissül.

## Revízió a rajzfejben

Rendeljen a rajzfej attribútumaihoz az alábbi címkék valamelyikét, majd a megnyitott rajzon válassza a {{ui:Rajzfejek kitöltése}} lehetőséget:

| Címke | Kitöltése |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | a revízió (B, vagy B.2, amíg dolgoznak rajta) |
| `VAULT.STATE` | az állapot (Kiadva …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | a legutóbbi revízió dátuma |
| `VAULT.APPROVER`, `APPROVED_BY` | a legutóbbi kiadást ki hagyta jóvá |

## PartCraft és BimCraft

A PartCraft és a BimCraft ugyanazt a Dokumentumok panelt használja a saját fájljaihoz: alkatrészek és összeállítások a PartCraftban, IFC-modellek a BimCraftban. A visszaadás a megnyitott modellt a projektmappába menti, az összeállítás pedig megmutatja, mely alkatrészeket használja, és az anyagjegyzéket.

## Jó tudni

- Két ember nem veheti ki egyszerre ugyanazt a fájlt ugyanabban a megosztott mappában: a kivétel olyan fájl, amelyet a rendszer nem enged kétszer létrehozni. Böngészőben, és olyan Studióban, amelynek a héja régebbi, mint ez a funkció, ez csak annyira szigorú, amennyire a mappa engedi: két kivétel ugyanazon a pillanaton belül mindkettő sikeres lehet. A panel megmondja, melyik érvényes.
- A `.ccvault` mappát ne szerkessze és ne törölje kézzel. A benne lévő napló a nyilvántartás; a tár szükség esetén ebből építi újra a listáját.
- Ha a mappában fájlt kivétel nélkül módosítanak, az {{ui:Kivétel nélkül módosult a mappában}} jelzéssel jelenik meg.
