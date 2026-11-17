---
title: Bekezdésszöveg formázása
summary: Módosítsa egy megjegyzés egy részének betűtípusát, méretét, félkövér és dőlt stílusát, színét és igazítását, és írjon be fokjelet, plusz-mínusz és átmérőjelet a bekezdésszöveg-mezőben.
keywords: MTEXT szerkesztő, bekezdésszöveg, szöveg formázása, félkövér, dőlt, aláhúzás, áthúzás, szín, color, betűméret, igazítás, fokjel, plusz-mínusz, átmérő, textedit, ddedit, szövegdoboz
from: 8e173666
---

## Amit tenni fog

Írjon egy megjegyzést, tegyen egy szót félkövérré és pirossá, módosítsa a méretét, adjon hozzá egy fokjelet, és fejezze be.

## Lépések

1. Írja be a {{cmd:MTEXT}} parancsot, és nyomja meg a(z) {{key:Enter}} billentyűt, vagy kattintson duplán egy meglévő szövegre, vagy írja be a {{cmd:TEXTEDIT}} parancsot, és válassza ki. A szövegdoboz megnyílik, fölötte a formázósorral.
2. Írja be a megjegyzést. A(z) {{key:Enter}} billentyű új bekezdést kezd.
3. Jelöljön ki egy szót az egérrel, vagy a(z) {{key:Shift+Right}} billentyűkombinációval.
4. A formázósorban a {{ui:Betűtípus}} mezővel adja meg a betűtípust, a {{ui:Méret}} mezővel a kijelölés méretét, a {{ui:Félkövér}}, {{ui:Dőlt}}, {{ui:Aláhúzás}} és {{ui:Áthúzás}} gombokkal a stílust, a {{ui:Szín}} gombbal pedig a színt. Ha nincs kijelölés, a {{ui:Méret}} az összes szöveget módosítja.
5. Az igazításhoz használja a {{ui:Balra igazítás}}, a {{ui:Középpont}} vagy a {{ui:Jobbra igazítás}} gombot.
6. Szimbólum beírásához helyezze a kurzort oda, ahová kerülnie kell, majd válassza a {{ui:Fokjel}}, a {{ui:Plusz-mínusz jel}} vagy az {{ui:Átmérőjel}} gombot.
7. A szöveg mentéséhez válassza a(z) {{ui:OK}} gombot, vagy nyomja meg a(z) {{key:Ctrl+Enter}} billentyűkombinációt. A(z) {{ui:Mégse}} gomb vagy a(z) {{key:Esc}} billentyű az eredeti állapotot hagyja meg.

## Megjegyzések

- A doboz rendelkezik a {{ui:Magasság}}, {{ui:Sortávolság}}, {{ui:Szélesség}} (0 = nincs sortörés) és {{ui:Igazítás}} beállításokkal is.
- A formázás bekezdésszöveg-kódokként íródik a sima szavakkal együtt, így a keresés, a fogás, a DXF és a DWG tovább működik. A teljes megjegyzések betűtípusát egy [szövegstílussal](topic:text-styles) állítsa be.
- Még nincsenek felsorolásjelek vagy számozott listák, tabulátorvonalzó vagy sorkizárt bekezdések.
- A plottolt PDF-ek szövegét Helvetica betűtípus szedi.
