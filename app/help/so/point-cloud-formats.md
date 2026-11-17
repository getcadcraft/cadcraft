---
title: Qaababka daruurta barta: maxay ku lifaaqmaan, iyo maxaa la dhoofiyaa
summary: Faylasha iskaanka laser ee hoosta naqshadda lifaaqma, kuwa ah qaabka gaarka ah ee soo-saaraha iskaanka, iyo waxa laga dhoofiyo software-ka iskaanka si iskaanku halkan ugu lifaaqmo.
keywords: daruurta barta, pointcloudattach, pcattach, iskaan laser, iskaan, qaababka, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, dhoofin, ma furmo, lama akhrin
from: 20a5f4ee
---

## Waxa halkan lagu lifaaqi karo

Lifaaq kuwan {{cmd:POINTCLOUDATTACH}}, {{ui:Fur}} ama ku dhig bogga (eeg mawduuca ku saabsan raad-raaca xariiqyada as-built ee daruurta barta):

| Qaabka | Fidinta | Waxa la akhriyo |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: barta, midabyada, iftiinka (intensity), fasallada LiDAR, nidaamka isku-xidhka iyo unugyadiisa. LAZ ilaa 1 GB. |
| E57 | `.e57` | Iskaan kasta oo faylka ku jira, mid kasta waxaa lagu meeleeyay booskiisa; midabyada, ama iftiinka haddii faylku midab lahayn; mitir. Sawirrada faylka ku jira waa la ka saaray (waa la sheegay). Ilaa 6 milyan barta iyo 512 MB hadda: dhoofi iskaanada waaweyn sida LAS ama LAZ. |
| PLY | `.ply` | Qoraal iyo binary (labada habka byte-ka): vertex-yada x y z, midabyada iyo iftiinka. Wejiyada waa la ka saaray (waa la sheegay). |
| PCD | `.pcd` | Qoraal iyo binary: x y z, midabyo isku-dhafan ama kala-go'an, iftiin. PCD la cadaysay weli lama akhriyo: kaydi binary ama qoraal. |
| PTX | `.ptx` | Hal iskaan ama dhowr, mid kasta waxaa lagu meeleeyay isbeddelkiisa; barta uusan iskaanku cabbirin waa la ka saaray. Mitir. |
| PTS, XYZ | `.pts`, `.xyz` | Qoraal: x y z, iftiin iyo midab marka tiirarku jiraan. |

## Faylasha software-ka iskaanka kaliya akhrisa

Qaar ka mid ah faylasha iskaanka waa qaab gaar ah oo soo-saaraha iskaanka leeyahay, oo aan lahayn qeexitaan la daabacay ama akhriste furan. CadCraft ma akhrin karo: lifaaqidda mid ka mid ah wuxuu ku daabacaa waxa uu yahay iyo waxa la sameeyo amarka. Iskaanka ka dhoofi software-ka soo-saaraha sida E57 ama LAS (ama PTX, PTS), kadibna lifaaq faylka la dhoofiyey.

| Faylka | Fidinta | Ka dhoofi |
|---|---|---|
| ReCap project | `.rcp` | ReCap: fur mashruuca oo dhoofi. Mashruucu wuxuu kaliya u tilmaamaa iskaannadiisa, sidaas awgeed koobiyeynta `.rcp` keliya ma siiso barta. |
| ReCap scan | `.rcs` | ReCap: fur mashruuca uu iskaanku ka tirsan yahay oo dhoofi. |
| FARO scan | `.fls` | FARO SCENE. |
| Leica scan | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble scan | `.tzf` | Trimble RealWorks ama Trimble Business Center. |
| Z+F scan | `.zfs` | Z+F LaserControl. |

:::tip
Marka dhoofintu ay qaab weydiiso, LAS ama LAZ waxay ilaaliyaan wax kasta oo CadCraft isticmaalo (midabyada, iftiinka, fasallada, nidaamka isku-xidhka iyo unugyadiisa) faylka ugu yar.
:::

## Sababta faylashan lama akhriyo

Qaababkaas lama daabicin, habka kaliya ee loo akhriyo waa maktabadda software-ka soo-saare kasta, oo waxay ku imanaysaa shuruudihiisa. CadCraft wuxuu kaliya akhriyaa qaababka uu akhriyi karo koodkiisa gaarka ah kombiyuutarkaaga, sidaas awgeed iskaanka looma baahna in loo diro meel kale si loo lifaaqo.
