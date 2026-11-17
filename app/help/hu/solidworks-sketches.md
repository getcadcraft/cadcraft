---
title: Vázlatok mozgatása más alkatrész-modellezők felé és onnan
summary: Írjon makrót, amely a rajzát egyetlen korlátozott vázlatként újraépíti egy alkatrész-modellezőben, és nyisson meg onnan exportált vázlatot.
keywords: vázlat, makró, swb, vba, exportálás, alkatrész-modellező, globális változók, egyenletek, kapcsolatok, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
A SolidWorks nem érhető el ott, ahol a CadCraft készül, ezért egyik irányt sem teszteltük még SolidWorksben. A CadCraft által írt fájl csak szerkezetileg van ellenőrizve. Ellenőrizze az eredményt, mielőtt támaszkodna rá.
:::

## Rajz küldése vázlatként

1. Korlátozza és méretezze a rajzot (lásd: [Rajz korlátozása](topic:constraints)).
2. A {{ui:Parametrikus}} csoportban nyissa meg a {{ui:Továbbiak}} elemet, és válassza a {{ui:Makró SolidWorkshöz (.swb)}} lehetőséget, vagy gépelje be a {{cmd:SWBOUT}} parancsot.

   A rajz nevéről elnevezett, `.swb` kiterjesztésű fájl letöltődik.
3. A SolidWorksben válassza a **Tools > Macro > Run** menüpontot, és válassza ki ezt a fájlt.

A makró az alapértelmezett alkatrészsablonból új alkatrészt készít, megnyit egy vázlatot a Front Plane síkján, és belerajzolja a modell vonalait, köreit, íveit, pontjait és polivonalait, a következőkkel:

- a korlátozásai vázlati kapcsolatokként,
- a méretkorlátozásai azonos nevű méretekként (`d1@Sketch1`),
- a saját paraméterei globális változókként,
- minden kifejezés egyenletként.

Az alkatrész a rajz hosszmértékegységét használja. A szöveg, a blokkok, a sraffozások, a méretek és a rajzlapok nem részei a vázlatnak; az előzmények felsorolják, mi maradt ki. Azok a kifejezések, amelyeknek nincs egyenletalakjuk (`if`, `min`, `max`, `round`, `%` és néhány további), az aktuális értékükkel íródnak ki, és az előzmények ezt jelzik. Amit a makró nem tud elkészíteni, az a makró melletti naplófájlba íródik, a végén pedig egy üzenet összegzi.

## Vázlat megnyitása alkatrészből

1. A SolidWorksben futtassa az alkatrészen a CadCraft exportáló makróját (a PartCraft alkalmazásból tölthető le: Fájl > Exportálás > Makró exportálása az alkatrészek visszahozásához). Ez a `cadcraft-sw-export` formátumú `.json` fájlt az alkatrész mellé írja.
2. A CadCraftban válassza a {{ui:Megnyitás}} elemet, és válassza ki azt a `.json` fájlt.
3. Ha az alkatrésznek több vázlata van, válasszon egyet.

A vázlat milliméterben rajzzá válik: vonalai, ívei, körei és pontjai, kapcsolatai korlátozásként, méretei méretkorlátozásként az eredeti nevükön (`D1`, `D2` …), globális változói paraméterként, a méreteken lévő egyenletek pedig kifejezésként. Az előzmények felsorolják, mi nem került át, például azokat a kapcsolatokat, amelyeket a CadCraft nem ismer. Hogy a vázlat hol helyezkedik el az alkatrészben, nem marad meg: lapos síkban rajzolódik ki, úgy, ahogy a saját síkján látszik.
