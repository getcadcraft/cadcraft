---
title: Rajzolás látás nélkül
summary: Kapcsolja be az Access funkciót, és a CadCraft minden parancsot és eredményt felolvas a képernyőolvasón keresztül, leírja a rajzot és a kurzor közelében lévő elemeket, lehetővé teszi a kurzor billentyűzettel való mozgatását, hangot játszik le minden fogásnál és fogópontnál, és hangparancsokat fogad el ott, ahol a böngészője ezt a számítógépén meg tudja tenni.
keywords: akadálymentesítés, képernyőolvasó, vak, gyengénlátó, NVDA, VoiceOver, JAWS, Orca, billentyűs kurzor, hangparancsok, beszéd, hangok, fogáshangok, rajz leírása, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

Az **Access** lehetővé teszi a rajzolást anélkül, hogy látná a képernyőt. Addig ki van kapcsolva, amíg be nem kapcsolja, így senki sem kapja meg véletlenül.

## Bekapcsolás

Nyissa meg a **Beállításokat** (a fogaskereket vagy a Ctrl+,), keresse meg a **Rajzolás látás nélkül** elemet, és válassza a **Be** lehetőséget. Vagy írja be a parancssorba az `ACCESS` parancsot, és válaszoljon `Be`-vel. A beállítás ezen a számítógépen megmaradt.

Ha az Access be van kapcsolva:

- **A parancssor minden kimenete felolvasásra kerül** a képernyőolvasón keresztül: amit beírt, a kérdés, amelyet a program feltesz, a válasz és minden hiba. A CadCraft saját, udvarias és sürgős élő régióit használja, így az élő régiókat olvasó képernyőolvasónak nincs szüksége külön beállításra. A hibák és a megszakítások félbeszakítanak; minden más sorra vár.
- **A rajzterület elérhető.** Nyomja meg a Tab billentyűt, amíg a „Rajz” szót nem hallja, vagy a parancssorból a Shift+Tab billentyűt. Ez egy olyan régió, amely a billentyűket továbbítja a CadCraftnak.

## Billentyűk a rajzon

| Billentyű | Mit tesz |
|---|---|
| Nyílbillentyűk | Mozgatja a billentyűs kurzort. Egy lépés a képernyőn látható méret nagyjából egyszázada, 1, 2 vagy 5-re kerekítve. A Shift tízszer olyan messzire mozgat, a Ctrl a tizedét. |
| Enter | Kijelöli a kurzor alatti pontot, pontosan úgy, mintha kattintana. |
| Space | A parancssorban az Enter megnyomása: a LINE befejezése, az alapértelmezett érték elfogadása. |
| Tab, Shift+Tab | Ugrás a kurzor közeli következő vagy előző fogáspontra, a legközelebbitől kezdve. |
| G | A kijelölt objektumok fogópontjai között léptet. |
| D | Rajz leírása: hány objektum van, milyen fajtájúak, mekkoraak, mi van kijelölve. |
| W | Felolvassa, hol van a kurzor, és milyen messze van az utolsó ponttól. |
| N | Felolvassa, mi van a kurzor közelében, a legközelebbi elöl, a távolsággal és az oldallal együtt. |
| S | A kijelölt objektumok leírása. |
| R | Megismétli az utolsó dolgot. |
| V | Hang be- vagy kikapcsolása. |
| / | Ugrás a parancssorra. |
| ? | Felsorolja ezeket a billentyűket. |

A billentyűkkel való mozgás felolvassa, hova érkezett. Ha egy parancs pontra vár, azt is felolvassa, milyen messze és milyen irányban van az utolsó ponttól, például: „2400 az utolsó ponttól, jobbra, 0 fokos szögben”.

## Parancsok

- A {{cmd:ACCESS}} be- vagy kikapcsolja az Accesst, a fogáshangokat és a hangot, és felolvassa az állapotot.
- A {{cmd:DESCRIBE}} felolvassa, mit tartalmaz a rajz.
- A {{cmd:WHEREAMI}} felolvassa, hol van a kurzor.
- A {{cmd:NEARBY}} felolvassa, mi van a kurzor közelében.
- A {{cmd:SAYSEL}} felolvassa, mi van kijelölve, objektumonként egy mondatban.
- A {{cmd:VOICE}} be- vagy kikapcsolja a hangparancsokat.

Ez az öt parancs a rajzot olvassa, és választ ad; semmit nem változtat meg.

## Hangok fogáshoz és fogópontokhoz

Kapcsolja be a **Fogás- és fogópont-hangokat** a Beállításokban. Minden fogástípusnak saját hangmagassága és hangja van, így meg tudja különböztetni a végpontot a felezőponttól, a középponttól, a metszésponttól és a többitől; a fogópont dupla kattanást ad. A hang a kurzor mozgását követve balra vagy jobbra húzódik a képernyőn. A hangokat a számítógépén állítja elő; semmi nem töltődik le.

## Hangparancsok

Kapcsolja be a **Hangparancsokat** a Beállításokban. Mondja ki a parancs nevét („vonal”, „kör”, „mozgatás”), majd a számokat úgy, ahogy felolvasná őket: „pont háromszáz vessző négyszáz”, „távolság tizenkétszáz”, „szög negyvenöt”. Az „Enter”, a „Mégse”, a „Visszavonás” és az „Ismétlés” azt teszi, amit mond. A felismert szöveget visszaolvassa, a parancsnak nem minősülő kifejezésről pedig jelentést ad, nem találgat.

**Hol történik a beszédfelismerés.** A CadCraftnak nincs saját beszédszolgáltatása, és hangot sehová sem küld. Megkéri a böngészőjét, hogy ismerje fel a beszédet ezen a számítógépen. Ha a böngésző erre képes, a választás **Ezen a számítógépen** lesz, és hang nem hagyja el a gépet. Ha nem képes, a hangparancsok kikapcsolva maradnak, hacsak nem választja a **Böngésző online szolgáltatása** lehetőséget, amely lehetővé teszi, hogy a böngésző a hangot a gyártója beszédszolgáltatásának küldje. A Beállítások megmondja, melyik érvényes, mielőtt dönt.

## Ami még nem működik

- Csak a CadCraftban van Access. A másik hét alkalmazás követi, ugyanazokkal a billentyűkkel és hangokkal.
- A rajz szövegét (megjegyzés, blokknév) úgy olvassa fel, ahogy le van írva; soha nem tekinti utasításnak.
- Szintetikus ellenőrzésekkel és a böngészőtesztekkel próbálták ki; az NVDA-val, a VoiceOverrel és vak vagy gyengén látó tesztelővel végzett kézi ellenőrzések még hátra vannak. Ha kipróbálja, jelezze nekünk, mi hiányzik.
