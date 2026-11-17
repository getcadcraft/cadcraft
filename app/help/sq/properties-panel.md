---
title: Paneli i Vetive
summary: Shiko dhe ndrysho gjithçka rreth objekteve të zgjedhura, shumë njëherësh: koordinata me Z, madhësi, tekst, cilësime përmasash, tejdukshmëri dhe më shumë. Fushat pranojnë shprehje dhe gjatësi me njësi.
keywords: totals, gjatësia totale, sipërfaqja totale, shuma, gjatësia e përzgjedhjes, properties, paleta e vetive, ctrl+1, pr, ch, mo, ddmodify, ndryshon, përzgjedhje e shpejtë, pickadd, koordinata, z, lartësi, trashësi, tejdukshmëri, material, lidhje, shprehje, quickcalc, kulm, stili i përmasës, tolerancë, dhjetore
from: 10d6a829
---

## Çfarë do të mësosh

Si hapet Paneli i Vetive, si ndryshon një objekt ose njëqind në një hap, si shkruhen koordinatat e sakta (me Z), si përdoren shprehjet dhe njësitë në çdo fushë numerike, dhe çfarë shfaq secili lloj objekti.

## Hapja

Paneli ndodhet në të djathtë. Për ta sjellë përpara:

- Shtyp {{key:Mod+1}}, ose shkruaj {{cmd:PROPERTIES}} (ose `PR`, `CH`, `MO`).
- Kliko dy herë një objekt (teksti dhe multiudhëheqësit hapin redaktuesin e tyre të tekstit).

Paneli është një panel i lëvizshëm si të tjerët: tërhiqe dorezën për ta ankoruar majtas, djathtas ose poshtë, ose lëshoje mbi vizatim për ta bërë të plutur (shih [Rregullo panelet dhe përdor një monitor të dytë](common:arrange-panels)).

### Palose

Butoni me gozhdë në cepin e sipërm djathtas të panelit ndez **fshehjen automatike**: paneli palosët në një shirit në skajin djathtas, dhe vizatimi merr hapësirën. Vendos treguesin mbi shirit (ose shtyp {{key:Mod+1}}) dhe ai hapet mbi vizatim; largohu dhe palosët sërish. Kliko gozhdën përsëri për ta mbajtur të hapur. {{cmd:PROPERTIESCLOSE}} e palos gjithashtu.

## Seksionet

Vetitë grupohen në seksione që mund t'i palosësh: **Të përgjithshme**, **Gjeometria**, **Teksti**, **Vijat dhe shigjetat**, **Përshtatja**, **Njësitë kryesore**, **Njësitë alternative**, **Tolerancat**, **Motivi**, **Të ndryshme**, dhe për blloqet **Atributet** dhe **Artikulli i bibliotekës**. Kliko emrin e një seksioni për ta palosur ose hapur; CadCraft mban mend cilët i ke palosur.

Tërhiq vijën e hollë mes emrave dhe vlerave për t'i bërë emrat më të gjerë ose më të ngushtë. Kliko dy herë mbi të për ta kthyer si më parë. Me tastierë, fokusoje dhe përdor tastet me shigjetë.

## Ndrysho një vlerë

1. Kliko një rresht. Titulli thotë "Vijë".
2. Kliko te {{ui:Gjatësia}}. Gjatë redaktimit, fusha tregon vlerën e plotë, jo të rrumbullakosurën.
3. Shkruaj `2500` dhe shtyp {{key:Enter}}. Vija tani është 2500 e gjatë, duke mbajtur pikën e saj të fillimit dhe këndin.

{{key:Enter}} ose klikimi diku tjetër zbaton vlerën; {{key:Esc}} e kthen vlerën e vjetër. Çdo ndryshim është një hap zhbërjeje.

### Shprehjet dhe njësitë

Çdo fushë numerike pranon më shumë se një numër të thjeshtë:

| Shkruan | Merr |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (inç, në një vizatim në këmbë dhe inç) |
| `900mm`, `3.5m`, `2ft` | Konvertuar në njësitë e vizatimit |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (fusha këndore) |
| `0.5r`, `100g` | Radianë dhe gradë, si shkallë |

Një gjatësi me njësi kërkon që vizatimi të ketë njësi: vendos {{ui:Njësitë}} nën {{ui:Objektet e reja}} (pa asgjë të zgjedhur) së pari. Një hyrje e keqe refuzohet me një shënim nën panel, dhe asgjë nuk ndryshon; nuk ruhet kurrë si 0. Funksionet: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; këndet në shkallë.

## Ndrysho shumë objekte njëherësh

1. Zgjidh disa objekte, për shembull 8 vija dhe 4 përmasa.
2. Titulli thotë "12 objekte", dhe një listë në krye ofron **Të gjitha (12)**, **Vijë (8)** dhe **Përmasë (4)**.
3. **Të gjitha** tregon çfarë ka çdo objekt (shtresë, ngjyrë, lloj vije…). Zgjidh **Përmasë (4)** për të parë cilësimet e përmasave.
4. Ndrysho një vlerë, për shembull {{ui:Decimalet}} në `1`.

Të katër përmasat ndryshojnë, në një hap zhbërjeje. Një fushë që shkruan **Ndryshon** do të thotë se objektet ndryshojnë; shkrimi i një vlere e vendos në të gjithë. Objektet në shtresa të kyçura lihen ashtu si janë, dhe shënimi thotë sa janë.

## Totalet e një përzgjedhjeje

Kur janë zgjedhur disa objekte, seksioni {{ui:Totalet}} në krye thotë:

- **Objektet**: sa të secilit lloj, për shembull "8 vija, 2 polivija, 1 rreth".
- **Gjatësia totale**: vijat, harqet dhe polivijat të mbledhura (edhe splinat llogariten), dhe sa objekte janë.
- **Sipërfaqja totale**: ato të mbyllura të mbledhura: rrathët, elipset e plota, polivijat e mbyllura dhe vijëzimet (vrimat e një vijëzimi zbriten).

Ato janë në formatin e gjatësisë të vizatimit (këmbë dhe inç kur përdoret; sipërfaqet atëherë në inç katror dhe këmbë katrore). Rreshti i statusit tregon të njëjtën gjatësi dhe sipërfaqe sa herë që janë zgjedhur objekte; {{ui:Cilësimet}} › {{ui:CadCraft}} › {{ui:Gjatësia dhe sipërfaqja e përzgjedhjes}} › {{ui:Të fshehura}} e fik këtë. Për një objekt, {{ui:Gjeometria}} shfaq gjatësinë dhe sipërfaqen e vet, si më parë.

## Koordinatat

Çdo pikë shfaq **X**, **Y** dhe **Z**: fillimi dhe fundi i një vije, qendrat, pikat e futjes, pozicionet e tekstit, kulmi aktual i polivijës. Vijat shfaqin edhe **Delta X**, **Delta Y** dhe **Delta Z** (vetëm për lexim). Polivijat dhe vijëzimet kanë një **Lartësi** (një Z për të gjithë objektin).

Butoni me kryqëzim pranë emrit të një pike të lejon ta zgjedhësh në vizatim: kliko, pastaj kliko pozicionin e ri (kapjet funksionojnë). Vlerat janë koordinata botërore.

## Të përgjithshme

| Fusha | Çfarë është |
|---|---|
| {{ui:Shtresa}}, {{ui:Ngjyra}}, {{ui:Lloji i vijës}}, {{ui:Shkalla e vijës}}, {{ui:Trashësia e vijës}} | Si në panelin e shtresave; {{ui:Sipas shtresës}} ndjek shtresën |
| {{ui:Tejdukshmëria}} | Sipas shtresës, sipas bllokut, ose 0 deri 90% |
| {{ui:Trashësia}} | Sa larg zgjatën vijat, rrathët, harqet, polivijat, pikat dhe teksti në Z |
| {{ui:Materiali}} | Sipas shtresës, sipas bllokut, Global ose një emër që ka sjellë një vizatim |
| {{ui:Stili i printimit}} | Vetëm për lexim: vizatimet printohen sipas ngjyrës, përmes [tabelës së stilit të printimit](topic:plot-pdf#plot-style-tables) të fletës |
| {{ui:Lidhja}} | Një adresë interneti e mbajtur me objektin |

## Çfarë shfaq çdo lloj

| Zgjedhur | Mund të ndryshosh |
|---|---|
| Vijë | Pikën e fillimit dhe fundit X, Y, Z; gjatësinë; këndin |
| Rreth | Qendrën; rrezen; diametrin; perimetrin; sipërfaqen (secili cakton rrezen) |
| Hark | Qendrën; rrezen; këndin e fillimit dhe të fundit; këndin total; kordën (shfaq gjatësinë e harkut dhe sipërfaqen) |
| Elipsë | Qendrën; rrezen kryesore dhe të vogël; raportin e rrezeve; këndin e boshtit kryesor; këndin e fillimit dhe të fundit |
| Polivijë | Shfletuesin e kulmeve (më poshtë); gjerësinë globale; lartësinë; të mbyllur; sipërfaqen kur është e mbyllur (e shkallëzon rreth qendrës së saj) |
| Tekst | Përmbajtjen; stilin; drejtimin; lartësinë; rrotullimin; faktorin e gjerësisë; këndin e pjerrësisë; gjerësinë e përcaktuar; hapësirën e rreshtave; shënuesin; pozicionin |
| Referencë blloku | Pikën e futjes; rrotullimin; shkallën X, Y, Z dhe shkallën uniforme; vlerat e atributeve |
| Vijëzim | Motivin; shkallën; këndin; origjinën; asociativ; zbulimin e ishujve; ngjyrën e sfondit; lartësinë |
| Përmasë | Shih më poshtë |
| Multiudhëheqës | Tekstin; lartësinë; gjerësinë; anën e tekstit; madhësinë e shigjetës; largësinë e uljes; pikën e shigjetës |
| Dritare pamjeje | Shkallën; qendrën dhe madhësinë në fletë; qendrën e pamjes në model; të ndezur; kyçjen e shfaqjes |

### Kulmet e polivijës

{{ui:Kulmi aktual}} tregon cilit kulm i takojnë fushat poshtë tij. Përdor butonat me shigjetë, ose shkruaj një numër, për të kaluar në një kulm tjetër; nuk ka kufi sa. Çdo kulm ka X, Y, gjerësinë e segmentit në fillim dhe në fund, dhe bulge-in e segmentit që fillon aty (0 = drejt).

## Përmasat

Një përmasë shfaq **Stilin e përmasës** të saj, çfarë mat, pikat e saj, dhe çdo cilësim:

- **Vijat dhe shigjetat:** shigjeta për secilin skaj, madhësia e shigjetës, madhësia e vulës, ngjyrat dhe trashësitë e vijave të përmasës dhe zgjatimit, fshehja e secilës anë ose secilës vijë zgjatimi, shtrirja dhe zgjatja e vijës zgjatuese.
- **Teksti:** zëvendësimi (lëre bosh për vlerën e matur; `<>` përfaqëson atë brenda tekstit tënd), stili, ngjyra, lartësia, largësia, pozicioni vertikal dhe horizontal, gjithmonë horizontal, rrotullimi, mbushja e sfondit.
- **Përshtatja:** shkalla e përgjithshme, hapësira e vijës bazë, çfarë lëviz kur mungon hapësira, lëvizja e tekstit.
- **Njësitë kryesore:** formati, dhjetoret, rrumbullimi, parashtesa, prapashtesa, shkalla e matjes, ndarësi dhjetor, fshehja e zerove të para dhe të fundit; për këndet formati i këndit dhe dhjetoret.
- **Njësitë alternative:** i ndezur ose i fikur, formati, dhjetoret, shumëzuesi (25.4 i kthen inçët në milimetra), rrumbullimi, parashtesa dhe prapashtesa.
- **Tolerancat:** asnjë, simetrike, devijim, kufij ose bazë, me vlerat sipër dhe poshtë, dhjetoret, lartësia dhe pozicioni.

Ndryshimi i ndonjërit prej tyre në një përmasë të hapur heq vizatimin që programi tjetër bëri prej saj, dhe CadCraft e vizaton sërish.

:::note
Pozicioni horizontal i tekstit (pranë zgjatimit të parë ose të dytë) dhe teksti poshtë vijës vizatohen te përmasat lineare dhe të përshtatura; te përmasat e tjera ruhen dhe mbahen, por nuk vizatohen ende. Zgjedhjet e Përshtatjes ruhen dhe mbahen, por nuk vizatohen ende: CadCraft e vendos tekstin sipas rregullit të vet (mbi vijë, jashtë kur nuk përshtatet).
:::

## Asgjë e zgjedhur

Pa asgjë të zgjedhur paneli shfaq:

- **Objektet e reja:** shtresën, ngjyrën, llojin e vijës, trashësinë e vijës dhe lartësinë e tekstit që marrin objektet e reja; njësitë dhe formatin e gjatësisë së vizatimit; llojin dhe trashësinë e vijës së shtresës aktuale; madhësitë për përmasat e reja. Te një fletë, emri, letra dhe orientimi i fletës vijnë të parat.
- **Pamja:** qendra, lartësia dhe gjerësia e asaj që shihet në ekran. Shkruaj një vlerë për ta zhvendosur pamjen aty.
- **Të ndryshme:** ndezja ose fikja e ikonës UCS, UCS (gjithmonë Botë: CadCraft nuk ka ende sisteme koordinatash të përdoruesit), dhe shkalla e shënimeve.

## Butonat në krye

| Buton | Bën |
|---|---|
| Hinka | {{cmd:QSELECT}}: përzgjidh sipas tipit dhe vetisë |
| Treguesi | {{cmd:SELECT}}: përzgjidh objekte në rreshtin e komandës |
| Plus ose 1 | Nëse një klikim shton te përzgjedhja (plus) ose e zëvendëson (1); i njëjti cilësim si te {{ui:Cilësimet}}, {{ui:CadCraft}} |
| Gozhda | Fshehja automatike, më lart |

## Gabime të zakonshme

- **Shkrimi në një fushë nuk bëri asgjë.** Shtyp {{key:Enter}} ose kliko diku tjetër për ta zbatuar. Një fushë e kuqe dhe një shënim do të thotë se hyrja u refuzua.
- **Një gjatësi me njësi refuzohet.** Vizatimi nuk ka njësi. Vendos {{ui:Njësitë}} me asgjë të zgjedhur.
- **Shfaqen vetëm Shtresa dhe Ngjyra.** Janë zgjedhur disa lloje objektesh dhe është zgjedhur **Të gjitha**. Zgjidh një lloj në listën në krye.
- **Disa objekte nuk u ndryshuan.** Janë në një shtresë të kyçur. Hiq kyçjen e shtresës te paneli i shtresave.
- **Shkronjat që shkrove shkuan në një fushë.** Ndërsa një fushë ka kursorin, tastet shkruhen atje. Shtyp {{key:Enter}} ose {{key:Esc}}, pastaj shkruaj komandën.
