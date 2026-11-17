---
title: Dokumentumok és revíziók (a tár)
summary: Lépésről lépésre végigvezet egy valódi munkán: projektmappa irányítás alá vétele, egy rajz kivétele, módosítása, visszaadása megjegyzéssel, felülvizsgálatra küldése, jóváhagyása és kiadása, az előzmények és a felhasználás megtekintése, mit lát egy második személy, amíg a fájl le van zárva, és hogyan működik felhőmappákkal.
keywords: tár, dokumentumok, bemutató, oktatóanyag, kivétel, visszaadás, revízió, kiadás, jóváhagyás, zárolás, előzmények, hol használják, felhőmappa, projektmappa, dokumentumkezelés, pdm, két személy, megosztott mappa
from: 3829528d
---

## Amit csinálni fog

Ana vagy, a Riverside klinikán dolgozol egy kollégával, Benjel. A projekt rajzai egy mappában vannak, amelyet mindketten elértek (megosztott meghajtó, szinkronizált mappa vagy felhőmappa). A végére egy fájl az első másolatától a kiadott **A** revízióig jut, újra módosul **B.1**-ként, látja, ki mit csinált, és látja, mit lát Ben, amikor Ön tartja a fájlt.

Minden a fájlok mellett lévő rejtett `.ccvault` mappában tárolódik: nincs szerver, semmi sem töltődik fel (a felhőmappa a kivétel, lásd az utolsó lépést). Minden gombot és szabályt egy helyen lásd a *Dokumentumok: kivétel, revíziók és kiadás* témakörben, ahol az alkalmazásnak van.

## 1. A projektmappa beállítása

1. Válassza a {{ui:Dokumentumok…}} elemet a **Nézet** lap **Továbbiak** menüjében, vagy írja be a `DOCUMENTS` (vagy `DOCS`) parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. Válassza a {{ui:A projektmappa kiválasztása}} gombot, és jelölje ki azt a mappát, amely a projekt rajzait tartalmazza. (A projektmappák működnek a Studióban és olyan böngészőkben, amelyek meg tudnak nyitni egy mappát, például a Chrome-ban és az Edge-ben. Más böngészőkben a panel ezt jelzi.)
3. Válassza a **Név:** melletti {{ui:Módosítás}} gombot, és írja be a nevét, `Ana`-t (ha kéri, a számítógép nevét is). A panelen most ez áll: *Név: Ana, ezen a számítógépen*. A neve minden művelethez hozzákerül.
4. Válassza a {{ui:Tár indítása ebben a mappában}} gombot, és írja be a projekt nevét, `Riverside clinic`-et. A panelen ez áll: *A tár elindítva: Riverside clinic.*

## 2. Fájl irányítás alá vétele

1. Nyissa meg a **Fájlok, amelyek nincsenek a tárban** részt, és válassza a `plans/A-101.dxf` melletti {{ui:Hozzáadás}} gombot.
2. A fájl a **A tárban szereplő fájlok** alatt jelenik meg, **A.1** revízióval, **Munka folyamatban** állapotban. Az A.1 az első másolata; a tár minden revízióról őriz egy másolatot.

## 3. Kivétel, módosítás, visszaadás

1. Válassza a `plans/A-101.dxf` melletti {{ui:Megnyitás}} gombot. A rajz megnyílik a CadCraftban, és a panel bezárul, hogy látni lehessen. A panel továbbra is egy parancsnyira van: `DOCUMENTS`.
2. Nyissa meg újra a panelt, és válassza a {{ui:Kivétel}} gombot. A sor most **Önnél van kivéve** — *(Kivéve: saját)*. A `.ccvault/locks` mappában zárolási fájl készült; senki más nem vehet ki ezt a fájlt, amíg Ön vissza nem adja.
3. Rajzoljon valamit: adjon hozzá egy vonalat, mozgasson egy falat. Semmit nem menthet a tár fájlja fölé, hacsak a rajz nincs Önnél kivéve; a Mentés másként mindig működik egy saját másolathoz.
4. Nyissa meg a panelt, válassza a {{ui:Visszaadás}} gombot, és írja be, mi változott (`Moved the door`). A panel ezt mondja: *visszaadva A.2 néven*. A projektmappában lévő fájl most az a rajz, amelyet megnyitott, és a zárolás megszűnt. Változtatás nélküli visszaadás megtartja a revíziót.

Ha meggondolja magát, a {{ui:Kivétel visszavonása}} visszaadja a fájlt új revízió nélkül.

## 4. Felülvizsgálat és kiadás

1. Válassza a {{ui:Átküldés felülvizsgálatra}} gombot. Az állapot **Felülvizsgálatra vár** lesz, és a fájl csak olvasható.
2. Jóváhagyás előtt válassza a {{ui:Projektbeállítások}} gombot, és sorolja fel, kik hagyhatnak jóvá (soronként egy név), például `Ben` és `Carla`, és jelölje be azt a szabályt, hogy a jóváhagyónak a szerzőtől különbözőnek kell lennie. Válassza a {{ui:Beállítások mentése}} gombot. Mostantól maga a tár is elutasít bárki mást.
3. Ben (vagy Carla) válassza a {{ui:Jóváhagyás}} gombot, és írja be a jóváhagyó nevét. Az állapot **Kiadva** lesz, a revízió pedig **A**, a *jóváhagyta* sorral és a névvel. A kiadott fájl csak olvasható. A {{ui:Visszaküldés}} visszaküldte volna **Munka folyamatban** állapotba, indokkal együtt.

A jóváhagyó neve a panelen beírt név: a jóváhagyás nyilvántartása, nem személyazonosság-igazolás.

## 5. Új revízió

1. A kiadott fájlon válassza az {{ui:Új revízió}} gombot. A következő betűre foglalja le.
2. Módosítsa, majd válassza a {{ui:Visszaadás}} gombot. A revízió **B.1**, munka folyamatban. Adja ki ugyanúgy, és **B** lesz. Az első visszaadás előtti {{ui:Kivétel visszavonása}} **A**-n hagyja.

A revízió-betűk A, B … Z, AA, AB sorrendben követik egymást. Ha a szabványa kihagy betűket, a *Használja az ASME Y14.35 sorrendet* projektbeállítás a következő revíziókhoz kihagyja az I, O, Q, S, X és Z betűket.

## 6. Mi történt

Válassza a fájl nevét a részletek megnyitásához:

- **{{ui:Előzmények}}**: minden esemény, a legújabb elöl, azzal, hogy ki, melyik számítógépen és mikor: *Visszaadva A.2* Ana által, *Kiadva* Ben által, és így tovább.
- **{{ui:Revíziók}}**: a revízió-táblázat. Az {{ui:Másolat megnyitása}} a revíziót egyszerű másolatként nyitja meg, amely nem írhatja felül a tár fájlját; a {{ui:Összehasonlítás ezzel}} felsorolja, mi került hozzá, mi került el és mi változott a megelőző vagy bármely más revízióhoz képest.
- **{{ui:Használja}}**: a rajzok, amelyekre hivatkozik (xref-ek).
- **{{ui:Használja őt}}**: a Használja őt listázza a tárban lévő összes olyan másik rajzot, amely erre hivatkozik: ha egy alaprajzot módosít, tudja, mely lapokat kell ellenőrizni.

## Revízió a lapon

Ha a rajz meg van nyitva (és van benne elrendezés), válassza a {{ui:Revíziótábla}} gombot: a kiadott revíziók táblázata a lap jobb felső részén rajzolódik ki. A {{ui:Rajzfejek kitöltése}} gombbal a `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` vagy `APPROVED_BY` címkéjű rajzfej-attribútumokat tölti ki a fájl revíziójával, állapotával, dátumával és jóváhagyójával. Amikor jóváhagyja a következő kiadást, a revíziótábla frissül.

## 7. Mit lát Ben, amíg Ön tartja a fájlt

Most vegye ki újra a fájlt, és kérje meg Bent, hogy nyissa meg ugyanazt a projektmappát a saját számítógépén, és nyissa meg a panelt. A fájl sorában ezt látja: **Kivette: Ana, ezen a számítógépen, ettől:** az idő, és nincs {{ui:Kivétel}} gomb. Ha mégis megpróbálja, a tár elutasítja: a zárolás olyan fájl, amelyet a rendszer nem hoz létre kétszer, így két személy nem tarthatja egyszerre a fájlt, még ugyanabban a pillanatban sem, ha a mappa a lemezen van a Studióban. (Böngészőben a mappa csak legjobb igyekezetű védelmet ad, és a panel ezt jelzi a **Mappa** alatt.)

Ha Ana távol van, és Bennek szüksége van a fájlra, a {{ui:Kivétel feltörése}} felszabadítja. Indokot kell megadnia; ez bekerül a naplóba, Ana kivételével együtt. Ha a projekt adminisztrátorokat sorol fel, csak ők végezhetik el. A régi határnál (alapértelmezés szerint 14 nap) régebbi kivétel *hosszú ideje* jelölést kap. A feltörés után Ana későn érkező visszaadása elutasításra kerül, így nem írhatják felül egymás munkáját.

## 8. Felhőmappák

A felhőmappa a csapat felhőtárhelyén tárolt projektmappa, így a csapatnak nincs szüksége megosztott meghajtóra. A Studióban, a CadCraft-fiókjába bejelentkezve, a panelen a {{ui:A projektmappa kiválasztása}} mellett megjelenik az {{ui:Felhőmappa megnyitása}} gomb. Válassza ezt, és jelölje ki a mappát, amely munkaterület / mappa formában látszik. A mappát először a munkaterület tulajdonosa hozza létre, és a csapat felhőtárhelyének érvényesnek kell lennie. Minden fent leírt működik ugyanúgy; a zárolást a szerver hozza létre, és az személyek között is szigorú. Ha nincs bejelentkezve, a panel bejelentkezést kér. Egy általános böngészőlapon a felhőgomb nem érhető el; használja a Studiót.

## Próbálja ki

Végezze el a fenti nyolc lépést egy valódi fájl másolatával. A két személyes lépésekhez másik személy kell, vagy két ablak két névvel. Ha valódi megosztott mappával próbálja, a Közösségi tesztoldal tartalmaz egy ellenőrzést, amely pontosan ezt kéri, és az eredményeket fogadja.
