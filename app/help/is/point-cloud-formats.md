---
title: Punktaskýjasnið: hvað festist og hvað á að flytja út
summary: Hvaða skrár af leysiskönnun festast undir teikninguna, hverjar eru eigið snið skannaframleiðanda, og hvað á að flytja út úr hugbúnaði skannans svo skönnunin festist hér.
keywords: punktaský, pointcloudattach, pcattach, leysiskönnun, skönnun, snið, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, útflutningur, get ekki opnað, ekki lesið
from: 20a5f4ee
---

## Hvað festist hér

Festu þessar með {{cmd:POINTCLOUDATTACH}}, {{ui:Opna}} eða með því að sleppa þeim á síðuna (sjá efnið um að rekja byggingarlínur yfir punktaský):

| Snið | Viðbót | Hvað er lesið |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punktar, litir, styrkleiki, LiDAR-flokkar, hnitakerfið og einingar þess. LAZ allt að 1 GB. |
| E57 | `.e57` | Hver skönnun í skránni, hver staðsett eftir stöðu sinni; litir, eða styrkleiki þegar skráin hefur enga liti; metrar. Myndir í skránni eru skildar eftir (sagt er frá því). Allt að 6 milljónir punkta og 512 MB í bili: fluttu stærri skannanir út sem LAS eða LAZ. |
| PLY | `.ply` | Texti og tvíundir (báðar bætaraðir): x y z hnúta, litir og styrkleiki. Fletir eru skildir eftir (sagt er frá því). |
| PCD | `.pcd` | Texti og tvíundir: x y z, pakkaðir eða aðskildir litir, styrkleiki. Þjappaðar PCD-skrár eru ekki lesnar enn: vistaðu þær sem tvíundir eða texta. |
| PTX | `.ptx` | Ein eða fleiri skannanir, hver staðsett eftir eigin umbreytingu; punktar sem skanninn mældi ekki eru skildir eftir. Metrar. |
| PTS, XYZ | `.pts`, `.xyz` | Texti: x y z, með styrkleika og litum þegar dálkarnir eru til staðar. |

## Skrár sem aðeins hugbúnaður skannans les

Sumar skannaskrár eru eigið snið skannaframleiðanda, án birtrar lýsingar og án opins lesara. CadCraft getur ekki lesið þær: þegar þú festir eina segir það hvað hún er og hvað á að gera á skipanalínunni. Fluttu skönnunina út úr hugbúnaði framleiðandans sem E57 eða LAS (eða PTX, PTS), og festu síðan útfluttu skrána.

| Skrá | Viðbót | Fluttu út úr |
|---|---|---|
| ReCap-verkefni | `.rcp` | ReCap: opnaðu verkefnið og fluttu það út. Verkefnið vísar aðeins á skannanir sínar, svo afritun á `.rcp` eingöngu gefur enga punkta. |
| ReCap-skönnun | `.rcs` | ReCap: opnaðu verkefnið sem skönnunin tilheyrir og fluttu það út. |
| FARO-skönnun | `.fls` | FARO SCENE. |
| Leica-skönnun | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-skönnun | `.tzf` | Trimble RealWorks eða Trimble Business Center. |
| Z+F-skönnun | `.zfs` | Z+F LaserControl. |

:::tip
Þegar útflutningurinn spyr um snið heldur LAS eða LAZ öllu sem CadCraft notar (litum, styrkleika, flokkum, hnitakerfinu og einingum þess) í minnstu skránni.
:::

## Af hverju þessar skrár eru ekki lesnar

Þessi snið eru ekki birt, og eina leiðin til að lesa þau er bókasafn hugbúnaðar hvers framleiðanda, samkvæmt eigin skilmálum. CadCraft les aðeins snið sem það getur lesið með eigin kóða á tölvunni þinni, þannig að skönnun þarf aldrei að vera send neitt til að festa hana.
