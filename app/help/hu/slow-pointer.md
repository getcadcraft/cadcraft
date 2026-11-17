---
title: A mutató ugrál vagy késik a rajzon
summary: Teendők, ha a kereszthajszál nem követi simán az egeret egy régebbi vagy lassúbb számítógépen.
keywords: kurzor ugrál, mutató késése, lassú kereszthajszál, akadozó kurzor, régi számítógép, régi grafikus kártya, integrált grafika, hardveres gyorsítás, simább mutató, lassú laptop
from: 39dc9057
---

A CadCraft a böngészőben fut (a CadCraft Studio is böngészőben megjelenő nézet), ezért semmi benne nincs egy adott grafikus kártyához igazítva. A kereszthajszálat az alkalmazás rajzolja ki, ami azt jelenti, hogy csak olyan gyorsan mozdulhat, amilyen gyorsan az alkalmazás egy képkockát ki tud rajzolni.

## Hagyja, hogy a CadCraft csökkentse a többletterhelést

1. Nyissa meg a {{ui:Beállítások}} elemet (a fogaskerék a jobb felső sarokban), és maradjon a {{ui:CadCraft}} lapon.
2. Válassza a {{ui:Simább mutató lassabb számítógépeken}} lehetőséget.
3. Válassza a {{ui:Be}} lehetőséget.

Bekapcsolt állapotban a számítógép saját kereszthajszál-mutatója használatos a kirajzolt kereszthajszál és a kijelölődoboz helyett (a teljes képernyős kereszthajszál is), a mutató alatti objektum pedig akkor világít ki, amikor a mutató megáll, nem pedig mozgás közben. Az objektumfogás, a követés és a gumiszalag a korábbiak szerint működik.

A {{ui:Automatikus}} a CadCraft kezdő beállítása: figyeli, mennyi ideig tart egy-egy képkocka, miközben mozgatja a mutatót, és ha néhány másodpercig lassúnak bizonyulnak, magától bekapcsolja ezt. Ezt egyszer jelzi is. A {{ui:Ki}} a sebességtől függetlenül megtartja a kirajzolt kereszthajszálat.

## Ha még mindig lassú

- Ellenőrizze, hogy a böngészőben be van-e kapcsolva a hardveres gyorsítás: nyissa meg a `chrome://gpu` (vagy `edge://gpu`) címet új lapon. Ha az első sorok „Software only” vagy „Disabled” szöveget mutatnak, a böngésző a grafikus kártya nélkül rajzol. A grafikus illesztőprogram frissítése gyakran segít.
- Zárjon be más nagy terhelésű lapokat és programokat, és próbáljon kisebb böngészőablakot.
- Jelezze felénk a {{ui:Súgó}}, {{ui:Probléma jelentése}} menüponton keresztül: írja meg, hogy böngészőt vagy a CadCraft Studio-t használja, annak verzióját, és azt, mit mutat a gpu oldal.
