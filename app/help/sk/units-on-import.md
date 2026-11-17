---
title: Jednotky pri importe: súbor uvádza svoje jednotky, alebo sa najprv spýtate
summary: Keď súbor, ktorý vkladáte do výkresu, uvádza svoje jednotky, CadCraft ho prevedie a povie to. Keď nie, CadCraft sa spýta skôr, než niečo umiestni, a zapamätá si vašu odpoveď pre daný súbor.
keywords: jednotky, import, vložiť, xref, pripojiť, XATTACH, INSERT, OBJ, DWG, DXF, oblak bodov, položka knižnice, milimetre, metre, palce, stopy, mierka, zlá veľkosť, príliš veľký, príliš malý, 1000-krát, opýtať sa, zapamätané, INSUNITS
from: 558f1293
---

## Čo urobíte

Vložte súbor do výkresu a uistite sa, že sa vloží v správnej veľkosti.

## Postup

1. Vložte súbor obvyklým spôsobom: `INSERT` › Súbor, {{cmd:XATTACH}}, {{cmd:POINTCLOUDATTACH}}, alebo {{ui:Súbory}} v paneli Knižnica.
2. Ak súbor uvádza svoje jednotky, nič sa nepýta. Príkazový riadok povie, aké jednotky súbor uvádza, a mierku, ktorá sa použije, keď sa líšia od jednotiek výkresu.
3. Ak nie, dialóg sa opýta **Jednotky súboru**. Zvoľte, čo predstavuje jedna jednotka v súbore, a kliknite na {{ui:Použiť tieto jednotky}}. Nič sa neumiestni, kým neodppoviete.
4. {{ui:Zrušiť}} (alebo {{key:Esc}}) nevloží nič.

## Ktoré súbory uvádzajú svoje jednotky

- **DWG a DXF**: vkladacie jednotky výkresu (`$INSUNITS`). Súbor bez nich sa pýta.
- **Oblaky bodov**: LAS a LAZ so súradnicovým systémom, E57, PTX a PLY svoje jednotky uvádzajú. Ostatné sa pýtajú.
- **OBJ**: nikdy neuvádza jednotky. Pýta sa vás.
- **glTF a GLB**: metre, podľa vlastného pravidla formátu.
- **Obrázky**: nemajú vlastnú veľkosť. {{cmd:IMAGEATTACH}} sa pýta na šírku a ponúkne šírku, akú ste tomuto súboru zadali predtým.
- **Skeny**: sken, ktorý uvádza svoju hustotu (bodov na palec), sa vloží v skutočnej veľkosti v jednotkách výkresu; {{cmd:SCANATTACH}} sa stále pýta na šírku.
- **Doplnok Oblaky bodov**: pýta sa, keď vytvárate oblak, ktorého súbor neuvádza jednotku, a označí čísla oblaku jednotkou, ktorú nesie.

## Dobré vedieť

- Otvorenie DWG alebo DXF ako samostatného výkresu sa nič nepýta: príkazový riadok povie, aké jednotky súbor uvádza, alebo že žiadne neuvádza. {{ui:Vlastnosti}} nastavuje jednotky výkresu.
- Keď výkres tiež nemá jednotky, súbor sa nedá previesť: umiestni sa číslo za číslom a príkazový riadok to povie.
- Odpoveď sa pre daný súbor zapamätá na tomto počítači vo všetkých aplikáciách CadCraft. Nabudúce, keď sa vloží, sa nepýta a príkazový riadok povie, že sa použili zapamätané jednotky.
- Ak sa chcete opýtať znova: paleta príkazov ({{key:Mod+K}}) › **Opýtať sa znova na jednotky importovaných súborov**.
