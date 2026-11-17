---
title: Szerkesztés fogópontokkal és a Tulajdonságokkal
summary: Objektumokat a fogópontjaikkal nyújthat, mozgathat és átméretezhet, a Tulajdonságok panelen pedig pontos hosszakat, sugarakat, szögeket és koordinátákat adhat meg.
keywords: fogópontok, tulajdonságok, nyújtás, hossz, sugár, koordináták, szerkesztés, gyors tulajdonságok, tulajdonságok panel, módosítás, réteg, szín, color
from: f22541ba
---

## Amit megtanul

Kétféle gyors módon módosíthat egy objektumot parancs nélkül: húzhatja a **fogópontjait**, vagy új értékeket írhat be a jobb oldali **Tulajdonságok** panelen.

## Fogópontok

Ha parancs nem fut, és objektumokat jelöl ki (egyszerre legfeljebb 200-at), kis négyzetek jelennek meg rajtuk. Ezek a fogópontok:

| Objektum | Fogópontok |
|---|---|
| Vonal | Mindkét vég és a közepe (az egész vonalat mozgatja) |
| Kör | A középpont (mozgatja) és a körön lévő négy pont (a sugár módosítására) |
| Ív | A középpont és mindkét vég (a kezdő- és végpont módosítására) |
| Polivonal | Minden csúcspont |
| Szöveg, pont, blokkhivatkozás | A beszúrási pont |
| Ellipszis | A középpont |
| Méret | Meghatározó pontjai és a méretvonal helye |
| Nézetablak | A középpont (mozgatja) és a négy sarok (átméretezi) |

### Fogópont mozgatása

1. Rajzoljon egy vonalat, és kattintson rá. Három fogópont jelenik meg.
2. Kattintson az egyik végén lévő fogópontra. Az állapotsor ezt írja: „Kattintson a fogópont új helyére (megszakítás: Esc). A fogások és az Ortho érvényesek.”
3. Mozgassa a kurzort. Az előnézet követi.
4. Kattintson az új pozícióra, vagy fogjon meg egy pontot egy másik objektumon, és kattintson rá.

A vég megmozdul, a vonal többi része helyben marad. Fogópontra nyomva és húzva is elmozdíthatja, majd ott engedje el, ahová kerülnie kell.

:::note
Fogópont koordinátáját nem írhatja be. Pontos helyzethez fogjon meg egy pontot, vagy írja be az értéket a Tulajdonságok panelen.
:::

A fogópont mozgatását a(z) {{key:Esc}} billentyűvel vagy a jobb kattintással szakíthatja meg.

## Tulajdonságok

A jobb oldali panel a kijelölt objektum tulajdonságait mutatja.

1. Kattintson egy vonalra. A panel fejléce: „Vonal”.
2. Kattintson a(z) {{ui:Hossz}} mezőbe, írja be: `2500`, és nyomja meg a(z) {{key:Enter}} billentyűt.

A vonal pontosan 2500 hosszú lesz, a kezdőpontját és a szögét megtartva. A(z) {{key:Enter}} billentyű vagy egy másik helyre kattintás alkalmazza az értéket; a(z) {{key:Esc}} visszaállítja a régi értéket. Minden módosítás egy visszavonási lépés, akkor is, ha sok objektum változik egyszerre.

A mezők kifejezéseket (`=2*45`) és mértékegységgel megadott hosszakat (`3'6"`, `900mm`) fogadnak el, minden pontnak van X, Y és Z értéke, és több objektum egyszerre is módosítható. Mindez a [Tulajdonságok panel](topic:properties-panel) leírásában található.

## Gyakori hibák

- **Nem jelennek meg fogópontok.** Parancs fut (nyomja meg a(z) {{key:Esc}} billentyűt), vagy 200-nál több objektum van kijelölve, vagy az objektum zárolt rétegen van.
- **A fogópont rossz helyre került.** Egy fogás megfogta. Kattintás közben tartsa nyomva a {{key:Shift}} billentyűt, hogy a fogásokat figyelmen kívül hagyja.
- **A Tulajdonságok mezőbe írás nem tett semmit.** Nyomja meg a(z) {{key:Enter}} billentyűt, vagy kattintson máshová az alkalmazáshoz. Az elfogadhatatlan bevitel (nulla vagy negatív hossz és sugár, nem érték szöveg) pirosra váltja a mezőt, és megmondja az okát.
- **A beírt betűk a Tulajdonságok mezőbe kerültek.** Amíg a mezőben van a kurzor, a billentyűk oda írnak. Nyomja meg a(z) {{key:Enter}} vagy a(z) {{key:Esc}} billentyűt, majd írja be a parancsot.
