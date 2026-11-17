---
title: Amaphoyinti wezinhlelo ze-BIM
summary: Thumela amaphoyinti, namaphoyinti okufakwa kwamabhulokhi anencazelo, ku-CSV noma ifayela le-TXT okungeniswa yizinhlelo ze-BIM nezinhlelo zokuhlola.
keywords: exportpoints, export points, points, csv, txt, pnezd, penzd, xyz, survey points, coordinates, bim, setting out, point file, northing, easting, elevation, thumela amaphoyinti, amaphoyinti okuhlola, izixhumanisi, ifayela lephoyinti, northing, easting, ukuphakama
from: d80e2d53
---

## Okuzokwenza

Ifayela lamaphoyinti: umugqa owodwa ngephoyinti ngalinye, nenombolo yalo, i-northing, i-easting, ukuphakama nencazelo, okungeniswa yizinhlelo ze-BIM (i-Revit ne-Archicad phakathi kwazo) nezinhlelo zokuhlola ukuze kubekwe amaphoyinti okuhlola, amamaki esayithi noma izinto.

## Thumela amaphoyinti

1. Khetha amaphoyinti namareferensi wamabhulokhi ofuna amaphoyinti okufaka kuwo, noma ungakhethi lutho ukuthatha wonke amaphoyinti.
2. Bhala {{cmd:EXPORTPOINTS}} (noma `EXPPTS`, noma {{ui:Blocks}} › {{ui:More}} › {{ui:Export points}}) bese ucindezela {{key:Enter}}
   (cindezela {{key:Enter}} futhi ku-`Select points and blocks` uma kungakhethwanga lutho).
3. Uma ukhethe amabhulokhi anezici, i-CadCraft ibala amathegi awo: bhala elilodwa elinenani eliyincazelo (isibonelo `ITEM`), noma enye into ukuze usebenzise igama lebhulokhi ngalinye.
4. Khetha izikholomu: `PNEZD` (iphoyinti, i-northing, i-easting, ukuphakama, incazelo: evamile), `PENZD` (i-easting ngaphambi kwe-northing) noma `XYZ` (izixhumanisi kuphela).
5. Khetha iyunithi: `D` njengoba kudwetshiwe, `M` amamitha noma `F` amafithi (kuphela uma iyunithi zomdwebo zisethiwe: Properties ›
   {{ui:Units}} lapho kungakhethwanga lutho).
6. Uma i-UCS isethiwe, khetha `W` umhlaba noma `U` izixhumanisi ze-UCS (bona [I-UCS nokubuka okuphendulwe](topic:ucs-and-turned-view)).
7. Khetha `C` ye-`.csv` ehlukaniswe ngamakhefa noma `T` ye-`.txt` ehlukaniswe ngethebhu, nenombolo yephoyinti lokuqala.

Ifayela lilanda njenge `<drawing>-points.csv` (noma `.txt`), futhi umlando utshela ukuthi linamaphoyinti angaki.

## Okusefayeleni

- Iphoyinti elilodwa ngomugqa ngalinye, liphela ngokuphula umugqa (CR LF), amadesimali amathathu.
- Ukuphakama kwephoyinti kuyi-Z yalo (0 uma lingenalo). Iphoyinti lebhulokhi liyiphoyinti lokufaka lalo.
- Incazelo enekhefa (noma ethebhu ku-TXT) noma inkomba iphakanyiswa ngezinkomba ezimbili, nezinkomba zayo ziphindwe kabili.
- Le fomethi iyefomethi efanayo i-CivilCraft ayifundayo futhi ayibhalayo, ngakho nalo livulwa njengamaphoyinti lapho.

## Izinkinga ezivamile

- Kuphela `D` iyanikezwa yeyunithi: umdwebo awukasethwa iyunithi. Yisethe, noma uguqule kwenye inhlelo.
- Amaphoyinti akude nalapho olindele khona kwenye inhlelo: thumela izixhumanisi zomhlaba (`W`), noma i-UCS isephoyinti lokuhlola lomunye uhlelo lisebenzisa (`U`).
