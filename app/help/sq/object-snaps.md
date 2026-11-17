---
title: Kapu në pikat e objekteve
summary: Përdor kapjet e objekteve, Ortho dhe rrjetën për të zgjedhur me miun skajet, mesat, qendrat dhe pikat e prerjes saktësisht.
keywords: osnap, kapje objekti, skaj, mes, qendër, pikë prerjeje, pingule, kuadrant, më i afërti, nyje, futje, ortho, rrjetë, f3, f8, f7, gjurmim polar, polar, polarang, gjurmim kapjeje objekti, otrack, gjurmim, f10, f11
from: 3cf17f94
---

## Çfarë do të bësh

Një drejtkëndësh me dy diagonalet e tij, një rreth i qendërzuar aty ku ato kryqëzohen, dhe një vijë nga mesi i njërës anë katrore deri te rrethi. Çdo pikë zgjidhet me miun, dhe çdo pikë është e saktë.

## Si funksionon kapja

Ndërsa një komandë kërkon një pikë, CadCraft kërkon pika kapjeje brenda rreth 10 pikselësh nga kryqëzuesi. Kur gjen një, shfaqet një shenjues dhe një etiketë ("Skaj", "Pikë prerjeje"), dhe një klikim bie **saktësisht** mbi atë pikë, jo aty ku është kryqëzuesi.

Kapjet janë të ndezura kur {{ui:Kapje}} në shiritin e gjendjes është e shtypur. {{key:F3}} i ndez dhe i fik.

Kapjet që mund të përdorësh janë:

| Kapje | Ulet mbi |
|---|---|
| Skaj | Skajet e vijave, harqeve dhe segmenteve të polivijave |
| Mes | Mesi i vijave, harqeve dhe segmenteve të polivijave |
| Qendër | Qendra e rretheve dhe harqeve, dhe e segmenteve harkore të polivijave |
| Kuadrant | Pikat 0, 90, 180 dhe 270 gradë të rretheve dhe harqeve |
| Pikë prerjeje | Aty ku kryqëzohen dy objekte |
| Pingule | Pika mbi një objekt në kënd të drejtë me pikën e fundit (kërkon pikë bazë) |
| Tangjente | Pika mbi një rreth ose hark ku një vijë nga pika e fundit thjesht e prek. Pa pikë të fundit ende (pika e parë e një vije), shenjuesi thotë "e shtyrë": pika e prekjes llogaritet kur njihet pika tjetër, kështu që një vijë nga Tangjente te Tangjente prek të dy rrethet |
| Më i afërti | Pika më e afërt mbi çdo objekt |
| Nyje | Objektet pikë |
| Futje | Pika e futjes së teksteve dhe referencave të blloqeve |

Të gjitha janë të aktivizuara si parazgjedhje, përveç Tangjentes dhe Më të afërtit. Më i afërti zakonisht fiton kur do diçka tjetër; ndiz Tangjenten kur të duhet.

## Zgjidh kapjet

1. Kliko shigjetën e vogël pranë {{ui:Kapje}} në shiritin e gjendjes. Hapet lista {{ui:Kapjet e objekteve}}.
2. Shëno ose zhshëno kapjet. Ndryshimet zbatohen menjëherë.
3. Kliko shigjetën përsëri për ta mbyllur listën.

CadCraft mban mend zgjedhjen tënde, dhe cilësimet {{ui:Rrjetë}}, {{ui:Ortho}} dhe {{ui:Kapje}}, në këtë shfletues.

## Hapat

1. Shkruaj `REC` dhe shtyp {{key:Enter}}.
2. Shkruaj `0,0` dhe shtyp {{key:Enter}}.
3. Shkruaj `@4000,3000` dhe shtyp {{key:Enter}}. Shfaqet një drejtkëndësh.
4. Kliko {{ui:Shtrirje}}.
5. Shkruaj `L` dhe shtyp {{key:Enter}}.
6. Lëviz kryqëzuesin te qoshja e poshtme majtas. Shenjuesi shfaq "Skaj". Kliko.
7. Lëviz te qoshja e sipërme djathtas derisa të shfaqet "Skaj". Kliko.
8. Shtyp {{key:Enter}} për të përfunduar vijën.
9. Shtyp {{key:Enter}} sërish për të përsëritur {{cmd:LINE}}, dhe vizato diagonalen tjetër nga qoshja e poshtme djathtas te qoshja e sipërme majtas në të njëjtën mënyrë.
10. Shkruaj `C` dhe shtyp {{key:Enter}} për të nisur një rreth.
11. Lëviz kryqëzuesin aty ku kryqëzohen diagonalet. Shenjuesi shfaq "Pikë prerjeje". Kliko.
12. Shkruaj `800` dhe shtyp {{key:Enter}}.

Duhet të shohësh një rreth të qendërzuar saktësisht në kryqëzim.

13. Shkruaj `L` dhe shtyp {{key:Enter}}.
14. Lëviz te mesi i anës së majtë të drejtkëndëshit derisa të shfaqet "Mes". Kliko.
15. Lëviz kryqëzuesin mbi rreth, në anën e tij të majtë. Shenjuesi shfaq "Pingule" ose "Kuadrant"; këtu janë e njëjta pikë. Kliko.
16. Shtyp {{key:Enter}}.

Vija e re nis nga mesi i anës së majtë dhe ndalet saktësisht në rreth.

## Kalo një kapje për një klikim

Mbaj {{key:Shift}} ndërsa klikon. Kapjet e objekteve injorohen për atë klikim, dhe pika shkon saktësisht aty ku është kryqëzuesi (ose sipas drejtimit të Ortho, nëse Ortho është e ndezur).

## Ortho

{{ui:Ortho}} ({{key:F8}}) mban pikën e radhës drejt horizontalisht ose vertikalisht nga pika bazë. Zbatohet për klikimet dhe për hyrjen direkte të distancës (një numër i vetëm i shkruar te kërkesa). Kapjet e objekteve fitojnë mbi Ortho: nëse shfaqet një shenjues kapjeje, klikimi shkon te kapja.

## Gjurmimi polar

{{ui:Polar}} ({{key:F10}}) është Ortho në më shumë kënde. Ndërsa një komandë ka një pikë bazë (pika e fundit e një vije, ose pika bazë e një zhvendosjeje), treguesi rreshtohet kur afrohet te një rreze nga ajo pikë në një shumëfish të hapit polar: shfaqet një vijë me pika, dhe një etiketë pranë kryqëzuesit thotë `Polar: 1200 < 30°`. Kliko për të përdorur atë pikë, ose shkruaj një distancë: `1200` shkon saktësisht 1200 përgjatë rrezes.

Hapi është 90° derisa ta ndryshosh: shkruaj {{cmd:POLARANG}}, shtyp {{key:Enter}}, dhe shkruaj `30` (ose 45, 22.5, 15 …). Polar dhe Ortho përjashtojnë njëra-tjetrën: ndezja e njërës e fik tjetrën.

## Gjurmimi i kapjes së objekteve

{{ui:Gjurmo}} ({{key:F11}}) rreshton treguesin me pikat e kapjes ku ke ndalur, që të zgjedhësh një pikë në nivelin e një qoshe dhe mbi një tjetër pa vizatuar vija ndihmëse.

1. Ndiz {{ui:Kapje}} dhe {{ui:Gjurmo}}, dhe nis një komandë që kërkon një pikë (`L`).
2. Ndale treguesin mbi një pikë kapjeje, si një qoshe, për gjysmë sekondë, pa klikuar. Një kryq i vogël e shënon: është "marrë". Ndale sërish mbi të për ta hequr.
3. Lëviz treguesin drejt, horizontalisht ose vertikalisht, larg saj. Një vijë me pika ndjek treguesin dhe etiketa thotë `Track: 600 < 90°`. Kliko, ose shkruaj një distancë.
4. Merr një pikë të dytë, dhe lëviz aty ku vertikalja nga njëra takohet me horizontalen nga tjetra: treguesi kapet te ai kryqëzim (`Track: where two lines meet`).

Me {{ui:Polar}} të ndezur gjithashtu, pikat e marra gjurmohen në çdo kënd polar. Mbahen deri në shtatë pika, derisa të përfundojë komanda. {{key:Shift}} e fik gjurmimin për një klikim, si kapjet.

## Rrjeta

{{ui:Rrjetë}} ({{key:F7}}) shfaq një rrjetë vijash prapa vizatimit, me vija më të trasha çdo të pestën; hapësira ndryshon kur zmadhon. Është vetëm një udhëzues derisa ndez {{ui:Kapje në rrjetë}} ({{key:F9}}): atëherë klikimet bien mbi pikën më të afërt të rrjetës, përveç nëse një kapje objekti e merr pikën më parë.

## Tastet e funksionit në kompjuterin tënd

{{key:F9}} është Kapja në rrjetë, {{key:F10}} është Polar dhe {{key:F11}} është Gjurmo.

:::mac
Në Mac, F3, F7, F8 dhe F9 zakonisht kontrollojnë Mission Control dhe medien. Mbaj **fn** me tastin, ose ndiz tastet standarde të funksionit, siç përshkruhet te [Tastet, miu dhe trackpad-et](common:keys). Butonat e shiritit të gjendjes funksionojnë gjithmonë.
:::

:::firefox
Në Firefox, F7 është gjithashtu tasti për shfletimin me kursor. Nëse Firefox pyet nëse do ta ndezësh shfletimin me kursor, zgjidh **No**. Përdor butonin {{ui:Rrjetë}} nëse pyetja vazhdon të kthehet.
:::

:::touch
Në një ekran me prekje nuk ka hover, kështu që shenjuesi i kapjes shfaqet vetëm aty ku prek gishti. Zmadho shumë për objektiva të vegjël, ose shkruaj koordinata.
:::

## Gabimet e zakonshme

- **Klikimi shkoi te pika e gabuar.** Shiko etiketën e shenjuesit përpara se të klikosh: Skaji fiton mbi Mesin kur të dyja janë afër. Zmadho, ose zhshëno kapjet që nuk të duhen.
- **Nuk shfaqet asnjë shenjues.** {{ui:Kapje}} është e fikur, ose kapja që do është e zhshënuar, ose objekti është në një shtresë që është e fikur ose e ngrirë.
- **Kapjet kapin gjënë e gabuar në një vizatim të ngarkuar.** Zmadho. Distanca e kapjes matet në piksela ekrani, kështu që zmadhimi e bën më të vogël mbi vizatimin.
- **Shpresë që Shift të japë një vijë të drejtë.** Në CadCraft, Shift fik kapjet për një klikim. Përdor {{ui:Ortho}} për vija të drejta.
- **Shpresë që pikat të bien mbi pikat e rrjetës.** Ndiz {{ui:Kapje në rrjetë}} ({{key:F9}}), ose shkruaj koordinata për numra të rrumbullakët.
