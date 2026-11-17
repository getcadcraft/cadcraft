---
title: Mure: ofset, pritje, zgjatje, rrumbullim dhe skajzim
summary: Kthe vijat e vetme në mure të dyfishta me Ofset, pastro kthesat me Rrumbullim, dhe pri ose zgjat vija me Pritje dhe Zgjatje.
keywords: offset, trim, extend, fillet, chamfer, bevel, break, breakatpoint, lengthen, mure, kthesë, prerje, paralel, rreze, pastrim
from: c6c5cbd0
---

## Çfarë do të bësh

Një dhomë e vogël me mure 200 të trasha: fytyra e brendshme vizatohet, fytyra e jashtme ofsetohet, kthesat pastrohen, dhe një hyrje pritet në një mur.

## Vizato fytyrën e brendshme

1. Shkruaj `L` dhe shtyp {{key:Enter}}.
2. Shkruaj `0,0` dhe shtyp {{key:Enter}}.
3. Shkruaj `@5000,0` dhe shtyp {{key:Enter}}.
4. Shkruaj `@0,4000` dhe shtyp {{key:Enter}}.
5. Shkruaj `@-5000,0` dhe shtyp {{key:Enter}}.
6. Shkruaj `C` dhe shtyp {{key:Enter}}.
7. Kliko {{ui:Shtrirje}}.

Ke katër vija të veçanta. (Një polivijë e mbyllur do të ofsetohej në një lëvizje; vijat e veçanta tregojnë si Rrumbullimi pastron kthesat.)

## Ofseto fytyrën e jashtme

1. Shkruaj `O` dhe shtyp {{key:Enter}}. Kërkesa thotë `Specify offset distance [Through] <Through>:`.
2. Shkruaj `200` dhe shtyp {{key:Enter}}.
3. Te `Select object to offset`, kliko vijën e poshtme.
4. Te `Specify point on side to offset`, kliko kudo poshtë saj. Shfaqet një vijë paralele 200 poshtë.
5. Kliko vijën e djathtë, pastaj kliko djathtas saj.
6. Kliko vijën e sipërme, pastaj kliko mbi të.
7. Kliko vijën e majtë, pastaj kliko majtas saj.
8. Shtyp {{key:Enter}} për të mbaruar komandën.

Duhet të shohësh katër vija të jashtme, secila me gjatësinë e vijës së brendshme përkatëse, kështu që qoshet e jashtme nuk takohen.

:::tip
Shtyp {{key:Enter}} te kërkesa e distancës për të përdorur sërish distancën e fundit. Shkruaj `T` për Through: atëherë çdo kopje kalon nga pika që klikon, në çfarëdo distance qoftë ajo.
:::

{{cmd:OFFSET}} punon mbi vija, harqe, rrathë dhe polivijë. Ofsetimi i një polivijeje të mbyllur ofseton të gjithë konturin, duke përfshirë kthesat.

## Pastro qoshet e jashtme me Rrumbullim

{{cmd:FILLET}} bashkon dy vija në një kthesë: i pret ose i zgjat të dyja që të takohen. Me një rreze 0 kthesa është e drejtë.

1. Shkruaj `F` dhe shtyp {{key:Enter}}. Kërkesa thotë `Select first line [Radius]:`.
2. Nëse rrumbullimi i fundit që bëre përdori një rreze, shkruaj `R`, shtyp {{key:Enter}}, shkruaj `0` dhe shtyp {{key:Enter}}.
3. Kliko vijën e jashtme të poshtme pranë skajit të saj të djathtë.
4. Te `Select second line`, kliko vijën e jashtme të djathtë pranë skajit të saj të poshtëm.

Dy vijat takohen tani në një kthesë të mprehtë, dhe komanda mbaron.

5. Shtyp {{key:Enter}} për të përsëritur {{cmd:FILLET}}, dhe bëj kthesën tjetër.
6. Përsërit derisa të takohen të katër qoshet e jashtme.

Kliko çdo vijë mbi pjesën që dëshiron ta **mbash**. Me një rreze mbi 0, Rrumbullimi shton një hark midis vijave.

:::tip
Shkruaj `M` te kërkesa e parë për t'i bërë të katër kthesat në një lëvizje, ose vizato fytyrën e jashtme si një polivijë të mbyllur dhe shkruaj `P`: çdo kthesë bëhet njëherësh. Mbaj {{key:Shift}} ndërsa klikon vijën e dytë për një kthesë të mprehtë pa ndryshuar rrezen.
:::

## Skajzo një kthesë me Skajzim

{{cmd:CHAMFER}} pret një kthesë me një vijë të drejtë.

1. Shkruaj `CHA` dhe shtyp {{key:Enter}}.
2. Shkruaj `D` dhe shtyp {{key:Enter}}. Shkruaj `300` dhe shtyp {{key:Enter}} për distancën e parë, pastaj shtyp {{key:Enter}} për të përdorur 300 edhe për të dytën.
3. Kliko vijën e brendshme të sipërme pranë skajit të saj të majtë, pastaj vijën e brendshme të majtë pranë skajit të saj të sipërm.

Kthesa priet 300 mbrapsht përgjatë secilës vijë, dhe një vijë skajzimi i bashkon. Shkruaj `A` në vend të `D` për të dhënë një gjatësi në vijën e parë dhe një kënd.

## Pres një hyrje me Pritje

Fillimisht vizato dy kornizat e derës mbi murin e poshtëm, pastaj pri vijat e murit midis tyre.

1. Shkruaj `L` dhe shtyp {{key:Enter}}.
2. Shkruaj `1000,200` dhe shtyp {{key:Enter}}.
3. Shkruaj `@0,-600` dhe shtyp {{key:Enter}}, pastaj shtyp {{key:Enter}} përsëri.
4. Shtyp {{key:Enter}} për të përsëritur {{cmd:LINE}}.
5. Shkruaj `1900,200` dhe shtyp {{key:Enter}}.
6. Shkruaj `@0,-600` dhe shtyp {{key:Enter}}, pastaj shtyp {{key:Enter}} përsëri.

Tani ke dy vija të shkurtra që kryqëzojnë murin e poshtëm 900 larg njëra-tjetrës.

7. Shkruaj `TR` dhe shtyp {{key:Enter}}. Historiku thotë `Current settings: Quick mode, edges: No extend`.
8. Kliko vijën e brendshme të poshtme midis dy kornizave. Ajo copë zhduket. (Fillimisht lëre treguesin mbi të: pjesa që do të hiqet bëhet gri dhe me pika.)
9. Kliko vijën e jashtme të poshtme midis dy kornizave. Edhe ajo copë zhduket.
10. Kliko pjesën e secilës kornizë që del mbi mur, dhe pjesën poshtë saj.
11. Shtyp {{key:Enter}} për të mbaruar komandën.

Duhet të shohësh një hapje 900 në murin e poshtëm, me kornizat që mbyllin skajet e murit.

Në modalitetin Quick (parazgjedhje) Pritja nuk kërkon të zgjedhësh fillimisht skajet prerëse: çdo objekt i dukshëm është skaj prerës. Zgjidh copën që dëshiron të zhdukësh, ose tërhiq një shteg nëpër disa copa për t'i prerë të gjitha njëherësh. Shkruaj `U` dhe shtyp {{key:Enter}} për të rikthyer zgjedhjen ose tërheqjen e fundit pa dalë nga komanda. Gardh (F), kryqëzimi, skajet e zgjedhura dhe {{key:Shift}} për zgjatje janë te [Pritja dhe zgjatja](topic:trim-and-extend).

## Zgjat një vijë deri te një tjetër

{{cmd:EXTEND}} zgjat një vijë, hark ose skaj polivijeje derisa të takojë objektin tjetër në atë drejtim.

1. Shkruaj `L` dhe shtyp {{key:Enter}}.
2. Shkruaj `1000,2000` dhe shtyp {{key:Enter}}.
3. Shkruaj `@2000,0` dhe shtyp {{key:Enter}}, pastaj shtyp {{key:Enter}} përsëri. Vija ndalet 2000 larg murit të djathtë.
4. Shkruaj `EX` dhe shtyp {{key:Enter}}.
5. Kliko vijën e re pranë skajit të saj të djathtë.
6. Shtyp {{key:Enter}} për të mbaruar komandën.

Vija shkon tani deri te fytyra e brendshme e murit të djathtë. Çdo objekt i dukshëm është kufi; kliko pranë skajit që duhet të rritet. Brenda {{cmd:TRIM}}, klikimi me {{key:Shift}} bën të njëjtën gjë.

## Thyej dhe zgjat

{{cmd:BREAK}} (`BR`, ose {{ui:Modify}} › {{ui:More}} › {{ui:Break}}) pret një boshllëk pa skaj prerës: kliko objektin ku fillon boshllëku (ai klikim është pika e parë), pastaj kliko ku përfundon. Te një rreth, pjesa në drejtim të kundërt të akrepave nga pika e parë deri te e dyta shkon. `F` te pyetja e dytë të lejon të japësh përsëri pikën e parë, dhe {{cmd:BREAKATPOINT}} e ndan një objekt në dy në një pikë, pa boshllëk.

{{cmd:LENGTHEN}} (`LEN`) ndryshon një gjatësi në një skaj:

1. Shkruaj `LEN` dhe shtyp {{key:Enter}}. Kliko një vijë për të parë gjatësinë e saj aktuale; kërkesa pyet përsëri.
2. Zgjidh mënyrën: `DE` (Delta: një sasi për të shtuar, negative për të hequr; `A` për këndin e harkut), `P` (Percent: 50 e përgjysmon), `T` (Total: gjatësia që duhet të ketë) ose `DY` (Dynamic: tërhiq skajin).
3. Kliko çdo objekt pranë skajit që duhet të lëvizë. `U` heq të fundit; {{key:Enter}} mbaron.

Vijat, harqet dhe polivijat e hapura (segmenti i tyre i fundit) mund të zgjaten.

## Gabime të zakonshme

- **Një vijë e tërë u zhduk.** Asgjë nuk e kryqëzonte, kështu që modaliteti Quick e fshiu. Shkruaj `U` për ta kthyer; kontrollo që vija prerëse me të vërtetë e kryqëzon (zmadho) dhe që nuk është në një shtresë të fikur.
- **"No boundary in that direction."** Zgjatja nuk gjeti asgjë për të takuar. Kliko më afër skajit që duhet të rritet.
- **"Radius is too large."** Harku do të kalonte skajin e një prej vijave. Përdor një rreze më të vogël.
- **"Only the first or last segment of an open polyline can be cut back."** Zgjidh dy segmente pranë njëri-tjetrit, ose shkruaj `P` për të rrumbullosur çdo kthesë të saj.
- **Ofseti shkoi në anën e gabuar.** Ana është aty ku klikon pasi zgjedh objektin. Zhbëje me {{key:Mod+Z}} dhe kliko në anën tjetër.
- **"Cannot offset that far."** Ofseti do ta kthente harkun, rrethin ose polivijën nga brenda jashtë. Përdor një distancë më të vogël.
