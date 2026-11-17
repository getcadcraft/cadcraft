---
title: Përmaso një plan
summary: Shto përmasa lineare, të paralela, këndore, rrezeje dhe diametri, lidhi me Vazhdo dhe Me bazë, dhe mbishkruaj tekstin.
keywords: përmasë, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, zinxhir, varg, shëno, mjet përmasash, ku, gjej, shiriti i veglave, mat, mm, cm, m, km, njësi
from: 9ee65123
---

## Çfarë do të bëni

Një dhomë me përmasa: gjerësi dhe lartësi të përgjithshme, një varg përmasash përgjatë një muri, një mur me kënd, një qoshe të lakuar dhe një kënd.

Para se të filloni, lexoni [Cakto madhësitë e përmasave](topic:dimension-settings) nëse vizatimi juaj është i madh: teksti i përmasës është 2.5 njësi vizatimi i lartë si parazgjedhje, që është shumë i vogël në një vizatim të matur në milimetra. Për hapat më poshtë, shkruani `DIMSCALE`, shtypni {{key:Enter}}, shkruani `50` dhe shtypni {{key:Enter}} fillimisht.

## Ku janë veglat e përmasave

Me stilin e menusë CadCraft (ai me të cilin nis CadCraft), veglat e përmasave janë në shiritin e veglave mbi vizatim, te grupi {{ui:Shëno}}: {{ui:Lineare}}, {{ui:I paralel}}, {{ui:Kënd}}, {{ui:Rreze}} dhe {{ui:Diametri}}. Menyja {{ui:Më shumë}} e grupit ka {{ui:Vazhdo përmasën}} dhe {{ui:Përmasë me bazë}}. Mbani treguesin mbi një buton për të parë çfarë bën.

- Me menunë {{ui:Hartim klasik}} ose {{ui:Shirit}}, hapni skedën {{ui:Shëno}}: veglat janë te paneli i saj {{ui:Përmasat}}. {{ui:Hartim klasik}} ka edhe {{ui:Lineare}} te skeda {{ui:Kryefaqja}}, nën {{ui:Shënimet}}. Shihni [Menutë, tastet dhe mausi](topic:menus-keys-and-mouse).
- Ose shkruani komandën në linjën e komandave nën vizatim dhe shtypni {{key:Enter}}: `DLI` (lineare), `DAL` (e paralel), `DAN` (këndore), `DRA` (rreze), `DDI` (diametër), `DCO` (vazhdo), `DBA` (me bazë).
- Në ekran të ngushtë shiriti i veglave është në një rresht: rrëshqiteni anash për të arritur {{ui:Shëno}}.

Për të shfaqur gjatësitë në milimetra, centimetra, metra ose kilometra, shihni [Përmasat në mm, cm, m ose km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Vizatoni diçka për ta përmasuar

1. Shkruani `PL` dhe shtypni {{key:Enter}}.
2. Shkruani `0,0` dhe shtypni {{key:Enter}}.
3. Shkruani `@6000,0` dhe shtypni {{key:Enter}}.
4. Shkruani `@1500<60` dhe shtypni {{key:Enter}}.
5. Shkruani `@0,2700` dhe shtypni {{key:Enter}}.
6. Shkruani `@-6750,0` dhe shtypni {{key:Enter}}.
7. Shkruani `C` dhe shtypni {{key:Enter}}. Kontura mbyllet.
8. Shkruani `C` dhe shtypni {{key:Enter}} për të nisur një rreth.
9. Klikoni brenda dhomës, larg mureve, për qendrën.
10. Shkruani `600` dhe shtypni {{key:Enter}}. Kjo është një kolonë.
11. Klikoni {{ui:Shtrirje}}.

## Lineare: horizontale ose vertikale

1. Shkruani `DLI` dhe shtypni {{key:Enter}}.
2. Te `Specify first extension line origin`, kapni qoshen e poshtme majtas (Endpoint) dhe klikoni.
3. Te `Specify second extension line origin`, kapni qoshen e poshtme djathtas dhe klikoni.
4. Lëvizni kryqëzimin poshtë dhomës. Përmasa ndjek, horizontale.
5. Klikoni për të vendosur vijën e përmasës.

Historiku thotë `Dimension text = 6000`.

Ku vendosni vijën përcakton drejtimin: poshtë ose lart jep një përmasë horizontale, majtas ose djathtas një vertikale. Për ta detyruar, shkruani `H` (horizontale), `V` (vertikale) ose `R` (e rrotulluar, pastaj një kënd) përpara se ta vendosni.

:::tip
Shtypni {{key:Enter}} te kërkesa e parë në vend të zgjedhjes së një pike, pastaj klikoni një vijë, hark, rreth ose segment polivijeje. CadCraft i merr të dy skajet për ju.
:::

## Vazhdo: një varg përmasash

{{cmd:DIMCONTINUE}} ({{ui:Shëno}} › {{ui:Më shumë}} › {{ui:Vazhdo përmasën}}, ose `DCO`) vazhdon nga përmasa e fundit lineare ose e paralele që bëtë, dhe çdo e re nis aty ku mbaroi e mëparshmja.

1. Shkruani `DLI` dhe shtypni {{key:Enter}}.
2. Shkruani `0,0` dhe shtypni {{key:Enter}} për origjinën e parë.
3. Shkruani `2000,0` dhe shtypni {{key:Enter}} për origjinën e dytë.
4. Klikoni poshtë dhomës për ta vendosur.
5. Shkruani `DCO` dhe shtypni {{key:Enter}}.
6. Shkruani `4500,0` dhe shtypni {{key:Enter}}. Një përmasë e dytë vazhdon nga e para, në të njëjtën vijë.
7. Kapni qoshen e poshtme djathtas dhe klikoni. Një e tretë e plotëson vargun.
8. Shtypni {{key:Enter}} për të mbaruar komandën.

:::note
Këtu pikat janë shkruar me koordinata absolute me qëllim. Një pikë me `@` numëron nga pika e fundit që dhatë, dhe pika e fundit është aty ku vendosët vijën e përmasës së mëparshme, jo fundi i përmasës. Pikat absolute, kapjet ose një distancë e drejtpërdrejtë me {{ui:Ortho}} të ndezur janë më të sigurta në një varg përmasash.
:::

Shkruani `U` dhe shtypni {{key:Enter}} për të hequr përmasën e fundit të vargut pa e lënë komandën.

## Me bazë: përmasa të renditura nga një vijë

{{cmd:DIMBASELINE}} ({{ui:Shëno}} › {{ui:Më shumë}} › {{ui:Përmasë me bazë}}, ose `DBA`) mat çdo përmasë të re nga origjina e parë e së fundit, dhe e rreshton çdo një një hap më larg.

1. Shkruani `DLI` dhe shtypni {{key:Enter}}.
2. Kapni qoshen e poshtme majtas dhe klikoni.
3. Kapni qoshen e sipërme majtas dhe klikoni.
4. Lëvizni kryqëzimin majtas të dhomës dhe klikoni. Shfaqet një përmasë vertikale.
5. Shkruani `DBA` dhe shtypni {{key:Enter}}.
6. Kapni skajin e sipërm të murit 60-gradë (Endpoint) dhe klikoni. Shfaqet një përmasë e dytë vertikale, një hap më larg se e para.
7. Shtypni {{key:Enter}} për të mbaruar.

## E paralel: gjatësia e vërtetë e një vije të pjerrët

1. Shkruani `DAL` dhe shtypni {{key:Enter}}.
2. Shtypni {{key:Enter}} për të zgjedhur një objekt.
3. Klikoni murin 60-gradë.
4. Lëvizni jashtë dhe klikoni për ta vendosur.

Teksti lexon 1500: gjatësia e vërtetë, e matur përgjatë murit.

## Rreze dhe diametër

1. Shkruani `DRA` dhe shtypni {{key:Enter}}.
2. Klikoni rrethin e kolonës.
3. Lëvizni kryqëzimin. Udhëzuesi tregon nga qendra drejt kryqëzimit.
4. Klikoni për të vendosur tekstin.

Teksti lexon `R600`. {{cmd:DIMDIAMETER}} (`DDI`) bën të njëjtën gjë me shenjën ⌀ dhe diametrin.

## Këndore

Muret këtu janë një polivijë e vetme, kështu që këndin e matim nga kulmi i tij. (Mes dy vijave të veçanta, mund të klikoni vijat në vend të kësaj.)

1. Shkruani `DAN` dhe shtypni {{key:Enter}}.
2. Te `Select arc, circle or line, or Enter for a vertex`, shtypni {{key:Enter}}.
3. Te `Specify angle vertex`, kapni qoshen e poshtme djathtas dhe klikoni.
4. Te `Specify first angle endpoint`, kapni qoshen e poshtme majtas dhe klikoni.
5. Te `Specify second angle endpoint`, kapni skajin e sipërm të murit 60-gradë dhe klikoni.
6. Lëvizni kryqëzimin brenda dhomës, afër qoshes, dhe klikoni.

Teksti lexon `120°`, këndi i brendshëm i qoshes. Nëse vendoset në anën tjetër të qoshes, përmasa mat këndin e asaj ane. Klikoni një hark te kërkesa e parë për të matur këndin që shtrihet, ose klikoni dy vija për të matur këndin mes tyre.

## Ndryshoni tekstin

Për të shkruar tekstin tuaj, shkruani `T` dhe shtypni {{key:Enter}} përpara se ta vendosni përmasën, pastaj shkruani tekstin. Në tekstin tuaj, `<>` përfaqëson vlerën e matur: `<> TYP.` jep `6000 TYP.`. Shtypni {{key:Enter}} në një rresht bosh për ta mbajtur vlerën e matur.

Për të ndryshuar një përmasë ekzistuese:

1. Klikoni mbi të.
2. Në panelin e djathtë, shkruani te {{ui:Teksti}}. Lëreni bosh për vlerën e matur.
3. Shtypni {{key:Enter}}.

## Përmasat ndjekin gjeometrinë

Një përmasë mban mend pikat e saj. Tërhiqni një nga grip-et e saj, ose zhvendoseni, rrotulloni ose shkallëzoni me objektet që mat, dhe ajo matet sërish. Nëse e shtrini gjeometrinë pa e zhvendosur përmasën, përmasa nuk ndjek: mban pikat e veta.

## Gabime të zakonshme

- **Teksti dhe shigjetat janë shumë të vogla ose shumë të mëdha.** Caktoni shkallën e përgjithshme: shihni [Cakto madhësitë e përmasave](topic:dimension-settings).
- **"Zgjidhni një pikë brenda këndit që doni të matni."** Pika që klikuat për një përmasë këndore ndodhet mbi një nga krahët. Lëvizeni brenda këndit.
- **Vazhdo nisi nga përmasa e gabuar.** Ai vazhdon gjithmonë nga përmasa e fundit lineare ose e paralele e bërë në këtë sesion. Bëni (ose ribëni) më parë atë nga e cila duhet të vazhdohet.
- **Përmasa doli vertikale.** E vendosët anash. Shkruani `H` përpara se ta vendosni.
- **Këmbë dhe inç.** Caktoni fillimisht formatin e gjatësisë së vizatimit në {{ui:Arkitekturore}}, ose {{ui:Formatin}} e një përmase te {{ui:Vetitë}}: shihni [Këmbët dhe inçat te përmasat](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Numrat nuk janë në njësinë që dëshironi.** Zgjidhni {{ui:Njësitë në tekst}}: shihni [Përmasat në mm, cm, m ose km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
