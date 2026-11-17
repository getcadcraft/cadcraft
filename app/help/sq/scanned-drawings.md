---
title: Vizatimet e skanuara dhe gjurmimi
summary: Sill një fletë të skanuar, shkallëzoje dhe drejtoje, pastroje, fshi pjesë të saj, kapu te vijat e saj dhe gjurmoje në vija dhe harqe.
keywords: skanim, vizatim i skanuar, raster, tiff, jpeg, png, shkallë, rreshtim, drejtim, heqje pikash, prag, bardh e zi, prerje, fshi, gjurmim, vektorizim, kapje, harqe, vijëzim, vizatime letre, vizatime të vjetra, scanattach, scantrace
from: 36227e5b
---

## Nga një fletë letre te objektet e vizatimit

Një vizatim i skanuar është një imazh. CadCraft e mban imazhin që ia dhatë dhe s’e ndryshon kurrë: çdo hap pastrimi bën një imazh të ri, me një hap zhbërjeje secili, dhe {{cmd:SCANINFO}} liston skedarin origjinal dhe hapat e marrë që nga ai. Asgjë nuk dërgohet askund dhe asgjë nuk merret me supozim nga një model i trajnuar: pastrimi dhe gjurmimi janë përpunim i zakonshëm imazhi, dhe ekzekutohen në kompjuterin tuaj.

1. **Fute.** {{cmd:SCANATTACH}} lexon një PNG, një JPEG, një TIFF (një faqe, ose të gjitha faqet e një skedari me shumë faqe) ose një faqe PDF që është imazh. Kërkon faqen, qoshen e poshtme majtas dhe gjerësinë. Për një faqe PDF kërkon edhe sa piksele për inç të vizatohet faqja.
2. **Shkallëzoje.** {{cmd:SCANSCALE}}: zgjidh dy pika mbi skanimin, pastaj shkruaj distancën e vërtetë midis tyre. Fleta shkallëzohet rreth pikës së parë.
3. **Rreshtoje.** {{cmd:SCANALIGN}}: zgjidh dy pika mbi skanimin dhe dy vendet ku i takojnë; fleta lëviz dhe rrotullohet që të përshtatet, dhe shkallëzohet edhe ajo, përveç nëse përgjigjesh Jo.
4. **Drejtoje.** {{cmd:SCANDESKEW}} mat këndin ku shtrihen vijat e gjata të fletës dhe e shfaq, bashkë me sa i sigurt është. Pranoje, ose shkruaj vetë një të tillë, dhe fleta rrotullohet. Një fletë me pak vija të gjata merr një paralajmërim: kontrollo këndin para se ta pranosh.
5. **Pastroje.** {{cmd:SCANCLEAN}} e bën fletën bardh e zi (Auto e barazon fillimisht letrën; Adaptive ndjek më nga afër ndryshimet e letrës; Level është një numër për gjithë fletën) dhe heq pikat deri në madhësinë që vendos.
6. **Prije dhe fshi.** {{cmd:SCANCROP}} mban një dritare. {{cmd:SCANERASE}} fshin një drejtkëndësh, një shumëkëndësh ose një laso (shtyp dhe tërhiq): vula, shënime, një unazë kafeje.

Imazhi i pastruar është ai që mban një DWG i ruajtur (një IMAGE dhe IMAGEDEF i tij, me skedarin e imazhit pranë vizatimit, si për çdo imazh).

## Kapje te vijat e skanimit

Me {{cmd:RASTERSNAP}} të ndezur (si parazgjedhje), kapjet e objekteve gjejnë edhe vijat e një skanimi bardh e zi: skajet e vijave, mesin e tyre, qoshet dhe kryqëzimet, të shfaqura me shenjat e zakonshme të kapjes. Pjesa e fletës nën kursor gjurmohet ndërsa lëviz; zmadho aq sa një piksel të jetë disa piksele në ekran. Një vijë më e gjatë se pjesa që gjurmohet ndiqet deri te skajet e saj.

## Gjurmimi

{{cmd:SCANTRACE}} i kthen vijat e fletës në vija dhe harqe në një shtresë të re (SCAN-TRACE), si një hap zhbërjeje, me skanimin ende poshtë tyre. Ju caktoni:

- **Tolerancë:** sa larg mund të jetë një vijë ose hark i gjurmuar nga vijat e skanimit, në njësi vizatimi (raporti jep edhe piksele). Tolerancë e ngushtë ndjek çdo lëkundje; një e gjerë bën më pak pjesë, më të drejta.
- **Dritarja:** një qoshe e fletës, ose gjithë fleta.
- **Harqet:** fikur bën vetëm vija.
- **Mbetjet:** ajo që gjurmimi la pa prekur vizatohet si kuti në një shtresë që mund ta fikni, ose s’vizatohet.

Gjurmimi gjen qendrën e çdo vije, e ndjek, përshtat vija të drejta dhe harqe rrethore me të, bashkon segmentet që ishin prerë aty ku kalonte një vijë tjetër, i bën vijat pothuajse horizontale ose vertikale saktësisht horizontale ose vertikale, dhe mbyll qoshet. **Teksti dhe vijëzimi mbeten si raster:** pjesët sa një shkrim lihen mënjanë, dhe grupet e vijave të shkurtra paralele merren si vijëzim dhe lihen mënjanë.

Kur mbaron, thotë sa vija dhe harqe bëri, tolerancën, dhe sa pjesë la si raster. **Kjo është ajo që dhanë pikselët, me atë tolerancë, dhe nuk është pretendim që rezultati është i saktë.** Krahasojeni me fletën: një gjurmim mund të humbasë një vijë të zbehtë, të bashkojë dy vija që janë shumë afër, ose të vizatojë një vijë aty ku ka vetëm një njollë. Pastroni së pari skanimin (të drejtuar, bardh e zi, pa pika) dhe rezultati është shumë më i mirë.

## Çfarë nuk lexon

Skedarët TIFF të ruajtur në pllaka, BigTIFF, TIFF me kompresim JPEG ose deflate, kodimi faksi Group 3 dhe ngjyrat e mbajtura në plane të veçanta refuzohen me një mesazh; ruajini sërish si shirita me LZW, PackBits, Group 4 ose pa kompresim. Edhe skedarët PNG të ndërthurur refuzohen. Skedarët mbi 128 MB ose 100 milion piksele refuzohen, dhe një dritare gjurmimi mund të mbajë deri në 64 milion piksele.
