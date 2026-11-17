---
title: Përgatit një fletë me bllok titulli dhe dritare pamjeje
summary: Bëj një fletë (paraqitje) me kufi dhe bllok titulli, cakto shkallën e dritares së pamjes, shto një dritare të dytë për një detaj, dhe plotëso bllokun e titullit.
keywords: layout, fletë, hapësirë letre, dritare pamjeje, mview, vpview, bllok titulli, shkallë, madhësi letre, kufi, vports, shkallë printimi, mspace, pspace, hapësirë modeli, hyr në dritare pamjeje, kliko dy herë dritaren e pamjes
from: 45a45de8
---

## Çfarë do të bësh

Një fletë A3 me bllok titulli, i gjithë plani në një dritare pamjeje 1:100, dhe një dritare pamjeje e dytë që shfaq një kënd 1:20.

## Modeli dhe fletët

Vizaton ndërtesën te skeda {{ui:Model}}, në madhësi të plotë: një mur 6 m është 6000 njësi i gjatë në milimetra. Një **fletë** (paraqitje) është një copë letre, e matur në milimetra ose inç. Një **dritare pamjeje** është një dritare e prerë në fletë që shfaq modelin në një shkallë.

## Para se të fillosh

1. Hap ose vizato një plan te skeda {{ui:Model}}.
2. Shtyp {{key:Esc}} që të mos ketë asgjë të përzgjedhur.
3. Te {{ui:Current settings}}, vendos {{ui:Units}} në njësinë me të cilën vizatove, për shembull {{ui:Millimeters}}.

Njësitë kanë rëndësi: një shkallë dritareje si 1:100 do të thotë që një milimetër në letër shfaq 100 milimetra reale, kështu që CadCraft duhet të dijë çfarë është një njësi vizatimi. Një vizatim i lënë si {{ui:Unitless}} merret si në njësinë e letrës (milimetra në letër ISO, inç në letër US).

## Bëj fletën

1. Kliko butonin {{ui:+}} në të djathtë të skedave nën vizatim, ose shkruaj `LAYOUT` dhe shtyp {{key:Enter}}, ose kliko {{ui:New sheet}}.

Hapet një skedë e re, `Layout1`. Sheh një fletë mbi një desktop më të errët: një kufi, një bllok titulli në qoshen e poshtme djathtas dhe një dritare pamjeje mbi të që shfaq të gjithë modelin në shkallën standarde më të madhe që përshtatet. Historiku e emëron letrën: ISO A3 për vizatimet metrike dhe pa njësi, Tabloid (ANSI B) për vizatimet në inç ose këmbë.

2. Kliko {{ui:Extents}} për të përshtatur fletën në ekran.

## Zgjidh letrën

1. Shtyp {{key:Esc}} që të mos ketë asgjë të përzgjedhur. Titulli i panelit të djathtë shkruan "Sheet: Layout1".
2. Te {{ui:Name}}, shkruaj `A-101 Plan` dhe shtyp {{key:Enter}}. Skeda riemërohet.
3. Te {{ui:Paper}}, zgjidh një madhësi.
4. Te {{ui:Orientation}}, zgjidh {{ui:Landscape}} ose {{ui:Portrait}}.

:::warning
Ndryshimi i letrës nuk zhvendos as nuk ndryshon madhësinë e asaj që është tashmë në fletë. Pasi ta ndryshosh, kontrollo që kufiri, blloku i titullit dhe dritarja e pamjes ende përshtaten, dhe zhvendosi ose ndrysho madhësinë e tyre me dorezat. Kalimi midis letrës milimetrike dhe asaj me inç mban numrat, kështu që çdo gjë ndryshon madhësi: shiriti i gjendjes të paralajmëron.
:::

## Cakto shkallën e dritares së pamjes

1. Kliko kornizën e dritares së pamjes (kufirin e saj). Titulli i panelit shkruan "Viewport".
2. Te {{ui:Scale}}, zgjidh `1:100`.

Modeli brenda dritares së pamjes vizatohet sërish në 1:100, i qendërzuar aty ku ishte. Lista ofron shkallët metrike nga 10:1 deri 1:10000; vizatimet në inç ose këmbë marrin edhe shkallë arkitekturore (1/4" = 1'-0" dhe të ngjashme) dhe shkallë inxhinierike (1" = 20' dhe të ngjashme). {{ui:Fit the whole model}} cakton një shkallë të saktë, jo standarde, që përshtat gjithçka.

3. Nëse plani nuk është më i qendërzuar, ndrysho {{ui:X}} dhe {{ui:Y}} nën {{ui:View center (model)}} në panelin e djathtë: janë pika e modelit që shfaqet në mes të dritares së pamjes.

## Shfaq një pjesë të modelit në një dritare pamjeje

1. Me dritaren e pamjes të përzgjedhur, kliko {{ui:Pick a window on the model…}} në panelin e djathtë (ose shkruaj `VPVIEW` dhe shtyp {{key:Enter}}).
2. CadCraft kalon te skeda {{ui:Model}}. Kliko një qoshe të zonës për ta shfaqur.
3. Kliko qoshen e kundërt.

Je sërish në fletë, dhe dritarja e pamjes shfaq atë zonë në shkallën standarde më të madhe që përshtatet; historiku thotë cila. {{ui:Show the whole model}} kthen te i gjithë plani në një shkallë standarde.

## Shto një dritare pamjeje të dytë për një detaj

1. Hap vend në fletë: përzgjidh dritaren e parë të pamjes dhe tërhiq një dorezë qoshe për ta bërë më të vogël.
2. Shkruaj `MV` dhe shtyp {{key:Enter}}, ose kliko {{ui:Viewport}} te grupi Sheets.
3. Kliko një qoshe të dritares së re të pamjes në fletë.
4. Kliko qoshen e kundërt.

Dritarja e re e pamjes shfaq gjithë modelin. Historiku thotë shkallën e saj.

5. Kliko kornizën e dritares së re të pamjes.
6. Kliko {{ui:Pick a window on the model…}} dhe zgjidh një zonë të vogël rreth një qoshe të planit.
7. Te {{ui:Scale}}, zgjidh `1:20`.

Kornizat e dritareve të pamjes janë në shtresën `Viewports`, e cila është vendosur të mos printohet, kështu që kornizat shfaqen në ekran, por jo në PDF.

## Plotëso bllokun e titullit

Blloku i titullit është bërë nga vija dhe tekst të zakonshëm në shtresën `Title block`. Fillon me emrin e vizatimit, shkallën e dritares së parë të pamjes, datën e sotme dhe numrin e fletës.

1. Kliko dy herë tekstin e madh të titullit. Hapet një kuti redaktimi mbi të.
2. Shkruaj titullin e fletës.
3. Kliko {{ui:OK}}, ose shtyp {{key:Mod+Enter}}.

Bëj të njëjtën gjë për fushat e tjera. Përdor {{cmd:TEXT}} për të shkruar në qelizën bosh "DRAWN BY". Teksti SCALE nuk përditësohet vetvetiu kur ndryshon shkallën e një dritareje pamjeje: redakto me dorë.

## Vizato në fletë

Çdo gjë që vizaton në një skedë fletë është në letër, në njësi letre: teksti 3.5 i lartë është 3.5 mm i lartë në një fletë ISO. Shënimet, shigjetat e veriut dhe kufijtë e fletës i takojnë këtu.

Për të ndryshuar vetë planin, shko te skeda {{ui:Model}}, ose punoje përmes një dritareje pamjeje (seksioni tjetër); çdo dritare pamjeje shfaq ndryshimin.

## Punoje modelin përmes një dritareje pamjeje

1. Kliko dy herë brenda një dritareje pamjeje, larg kornizës së saj. Ose shkruaj `MS` dhe shtyp {{key:Enter}}: me një dritare të vetme në fletë hyn drejt e; me disa, kliko brenda atë që do.

Korniza vizatohet më e trashë, historiku thotë që je brenda, dhe skeda e fletës mbetet e përzgjedhur. Çdo gjë që vizaton ose ndryshon tani është në model, në njësi modeli, si në skedën {{ui:Model}}: një vijë e vizatuar brenda një dritareje pamjeje 1:100 është në milimetra reale. Shtresat e ngrira në këtë dritare pamjeje nuk mund të zgjidhen këtu.

2. Kthe rrotën ose tërhiq me butonin e mesit për të zmadhuar dhe lëvizur atë që shfaq dritarja e pamjes. Fleta mbetet aty ku është.
3. Kliko dy herë kudo jashtë kornizës, ose shkruaj `PS` dhe shtyp {{key:Enter}}.

Je sërish në fletë. Dritarja e pamjes e mban pamjen me të cilën e le; {{key:Mod+Z}} e kthen pamjen e vjetër në një hap. Klikimi i çdo skede nën vizatim gjithashtu të nxjerr jashtë dritares së pamjes.

:::note
Një dritare pamjeje shfaqja e së cilës është e kyçur ({{ui:Display locked}} te Properties) mban pamjen e vet: brenda saj, lëvizja dhe zmadhimi lëvizin fletën e tërë. Një dritare pamjeje që është fikur nuk mund të hyhet.
:::

## Etiketo një pamje me emrin e saj

Një titull pamjeje nën një dritare pamjeje mund të shfaqë emrin e pamjes së dritares dhe ta ndjekë atë:

1. Jep pamjes një emër: zgjidh kornizën e dritares së pamjes dhe plotëso {{ui:View name}} te Properties; ose ruaje pamjen te skeda {{ui:Model}} me {{cmd:NAMEDVIEW}} dhe, me dritaren e pamjes të përzgjedhur, shkruaj `VPVIEW`, `V` dhe emrin e pamjes: dritarja shfaq atë pamje dhe e merr emrin e saj.
2. Shkruaj `VIEWLABEL` (`VL`) dhe shtyp {{key:Enter}}, pastaj kliko ku duhet të shkojë etiketa ({{key:Enter}} e vendos nën qoshen e poshtme majtas të dritares së pamjes).

Kur ndryshon emri i pamjes, etiketa ndryshon me të, në të njëjtin hap zhbërjeje.

## Ngri një shtresë në një dritare pamjeje

Për të fshehur një shtresë në një dritare pamjeje por jo në të tjerat (mobilje në një detaj, për shembull):

1. Zgjidh kornizën e dritares së pamjes, ose punoje brenda saj (kliko dy herë).

Paneli {{ui:Layers}} merr edhe një buton në secilin rresht, dhe një rresht mbi listë e thotë këtë.

2. Kliko atë buton te rreshti i shtresës.

Shtresa zhduket vetëm nga ajo dritare pamjeje. Kliko përsëri për ta zbrazur; {{key:Mod+Z}} zhbën secilën. Për disa shtresa ose dritare pamjeje njëherësh, shkruaj `VPLAYER`: `F` (Freeze) ose `T` (Thaw), emrat e shtresave (`A-*` merr çdo shtresë që fillon me A-), pastaj `C` (Current), `A` (All) ose `S` (Select). `VPLAYER` `V` (Vpvisdflt) zgjedh shtresat që dritaret e reja i fillojnë të ngrira.

## Më shumë fleta

Çdo {{ui:+}} shton një fletë tjetër (`Layout2`, `Layout3` …) me numrin e radhës së fletës. Për të fshirë fletën e hapur, shtyp {{key:Esc}} dhe kliko {{ui:Delete this sheet}} në panelin e djathtë. Ajo fshihet pa pyetur; {{key:Mod+Z}} e kthen.

Printo një fletë me {{ui:Plot this sheet}} ose {{key:Mod+P}}; shih [Printo në PDF](topic:plot-pdf).

## Gabimet e zakonshme

- **Dritarja e pamjes nuk shfaq asgjë.** Modeli është bosh, ose pamja është drejtuar diku tjetër. Zgjidh kornizën dhe kliko {{ui:Show the whole model}}.
- **Lista e shkallëve shfaq vetëm raporte dhe asnjë shkallë këmbë-inç.** Vendos {{ui:Units}} në {{ui:Inches}} ose {{ui:Feet}} te skeda {{ui:Model}}.
- **1:100 duket dhjetë herë më i madh ose më i vogël.** Njësitë e vizatimit janë të gabuara. Vendos {{ui:Units}} në atë që është në të vërtetë një njësi.
- **Klikimi i planit brenda dritares së pamjes nuk zgjedh asgjë.** Në një fletë zgjedh objektet e vetë fletës. Kliko dy herë brenda dritares së pamjes më parë për të punuar mbi planin përmes saj.
- **Klikimet jashtë dritares së pamjes nuk bëjnë asgjë.** Je brenda një dritareje pamjeje: kliko dy herë jashtë saj, ose shkruaj `PS`, për të punuar sërish mbi fletën.
- **"Viewports go on a layout. Open a layout tab (or make one with LAYOUT) first."** Dritaret e pamjes vendosen në një fletë. Hap një skedë fletë (ose bëje një me LAYOUT) më parë. {{cmd:MVIEW}} punon vetëm në një skedë fletë.
