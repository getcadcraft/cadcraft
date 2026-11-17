---
title: Rekja eins og byggt línur yfir punktský
summary: Tengdu leysiskönnun (LAS, LAZ, E57, PLY, PCD, PTX, PTS eða XYZ) undir teikninguna, skerðu grunnsnið í gegnum hana og teiknaðu veggi, hurðir og súlur með smellifestingu á punktum hennar.
keywords: punktský, pointcloudattach, pcattach, pointcloud, pc, leysiskönnun, skönnun, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, eins og byggt, as-built, mæling, sneið, grunnsnið, hnútur, smellifesting, rekja, núverandi aðstæður
from: b0e0aae5
---

## Hvað þú býrð til

Grunnmynd af hæð eins og byggt var: veggir skannaðrar byggingar teiknaðir sem línur og fjöllínur nákvæmlega á punktum skönnunarinnar.

## Tengja skýið

1. Stilltu einingar teikningarinnar fyrst ef hún hefur þær ekki ({{ui:Einingar}} reitinn í {{ui:Eiginleikar}}, eða {{cmd:UNITS}}): CadCraft breytir skýinu úr eigin einingum í einingar teikningarinnar.
2. Skrifaðu {{cmd:POINTCLOUDATTACH}} (eða `PCATTACH`) og ýttu á {{key:Enter}}. Veldu skrá `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` eða `.xyz` (efnið um skráarsnið punktskýja segir hvað hvert þeirra ber með sér og hvað eigi að flytja út úr hugbúnaði skanna). Þú getur líka opnað skrána með {{ui:Opna}}, dregið hana á síðuna eða sent hana úr BIM-skoðaranum með {{ui:Rekja í CadCraft}}.
3. `Neðra vinstra horn skýsins`: ýttu á {{key:Enter}} til að halda eigin hnitum skrárinnar (skönnun sem er skráð inn í verkefnið fellur að teikningunni), eða smelltu þar sem neðra vinstra horn hennar á að vera.
4. Skipanalínan segir hversu margir punktar birtast. Sýnin aðdráttar að skýinu; það liggur undir línuverkinu, og hver punktur sést ofan frá.

## Skera grunnsnið og rekja

1. Skrifaðu {{cmd:POINTCLOUD}} (eða `PC`) og síðan `S` fyrir {{ui:Sneið}}. Aðeins þunnt band 1.2 m ofan lægsta punkts skýsins birtist: veggir, hurðaop og súlur lesast eins og grunnmynd.
2. `H` stillir hæð sniðsins, `T` þykktina (í einingum teikningar). {{key:Enter}} lýkur skipuninni.
3. Kveiktu á smellifestingu ({{key:F3}}) með {{ui:Hnútur}} meðal festinga. Teiknaðu með {{cmd:LINE}} eða {{cmd:PLINE}}: bendillinn festist við punkta sneiðarinnar, merkta „Punktský“. Eigin endapunktar, miðpunktar og miðjur teikningarinnar ganga fyrir skýinu, þannig að þegar fjöllínu er lokað lendir hún á fyrsta punkti sínum.
4. Breyttu hæð sniðsins til að rekja aðra hæð, og slökktu síðan á sneiðinni (`S` aftur) til að sjá allt skýið.

## Fleiri valkostir

Í {{cmd:POINTCLOUD}}: `C` litar punktana eftir litum skrárinnar, hæð, styrkleika, LiDAR-flokki eða einum lit; `SI` stillir stærð punkta; `V` felur eða sýnir skýið; `Z` aðdráttar að því; `D` aftengir það.

3D-flipinn sýnir skýið líka, með lægsta punkt þess á jörðinni og sömu sneið.

:::note
Skýið er ekki hluti af teikningunni: það er ekki vistað í DWG eða DXF, og afturköllun breytir því ekki. Tengdu það aftur þegar þú opnar teikninguna síðar. Skrárnar eru lesnar á þessari tölvu; ekkert er sent upp. Mjög stórar skannanir eru jafnt grisjaðar niður í 2 milljónir punkta. E57-skrár opnast með allt að 6 milljónum punkta og 512 MB í bili: fluttu út stærri skannanir sem LAS eða LAZ.
:::

## Prenta það

{{cmd:PLOT}} prentar skýið með teikningunni, undir línuverkinu: í líkanprentun ({{ui:Allt}} nær yfir svæði skýsins) og í hverjum útlitsglugga, í PDF, PNG, SVG og því sem sent er á prentara. Það prentar það sem er á skjánum: sneiðina ef hún er á, litina sem þú valdir, og felur ef þú faldir það. Á pappír verða punktarnir að litlum ferningum, þar sem hæsti punkturinn vinnur hvern reit, og prentun geymir í mesta lagi um 400.000 þeirra (mjög þétt ský prentast með stærri ferningum). Skýið er aðeins prentað í teikningunni sem það var tengt við; það prentast aldrei í pappírsrýminu sjálfu, aðeins í gegnum glugga.

## Nokkrar skannanir

Skannanir teknar frá mismunandi stöðum má skrá í einn ramma, betrumbæta með ICP og flytja út sem eina LAS eða E57: sjá [Skráðu nokkrar skannanir í eina](topic:register-scans).
