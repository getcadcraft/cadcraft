---
title: Njësitë, madhësitë e letrës dhe shkallët
summary: Çfarë do të thonë njësitë e vizatimit në CadCraft, madhësitë e letrës për fletë dhe printime, çdo shkallë standarde, dhe si lidhen madhësitë e tekstit dhe të përmasave me shkallën e printimit.
keywords: njësi, milimetra, inç, këmbë, këmbë dhe inç, arkitekturore, inxhinierike, thyesore, thyesa, lunits, formati i gjatësisë, saktësia, metra, madhësia e letrës, a3, a1, arch d, ansi, tabloid, letër, shkallë, 1:100, 1/4 inç, shkallë arkitekturore, shkallë inxhinierike, insunits
from: 8346236a
---

## Njësitë e vizatimit

Vizaton në madhësi të plotë, në njësi vizatimi. Atë që përfaqëson një njësi e cakton cilësimi **Units** i vizatimit:

1. Shtyp {{key:Esc}} që të mos ketë asgjë të përzgjedhur, te skeda {{ui:Model}}.
2. Te {{ui:Current settings}}, zgjidh {{ui:Units}}: {{ui:Unitless}}, {{ui:Millimeters}}, {{ui:Centimeters}}, {{ui:Meters}}, {{ui:Inches}} ose {{ui:Feet}}.

Përmasat mund t'i shkruajnë gjatësitë në milimetra, centimetra, metra ose kilometra çfarëdo që të jetë njësia e vizatimit: shih [Përmasat në mm, cm, m ose km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Ndryshimi i njësive nuk ndryshon asgjë në madhësi. Ndryshon mënyrën si lexohen shkallët në fletë dhe në printime, dhe cilat shkallë ofrohen. Një vizatim i hapur nga një DWG ose DXF mban njësitë e ruajtura në skedar; seksioni {{ui:Drawing}} i panelit të majtë i shfaq ato.

Një vizatim {{ui:Unitless}} trajtohet si në njësinë e letrës: milimetra në letër ISO, inç në letër US.

## Këmbë dhe inç, dhe thyesa

Si shkruhen dhe jepen gjatësitë është një cilësim i veçantë, formati i gjatësisë. Nuk ndryshon asnjë gjeometri, vetëm si duken numrat dhe çfarë mund të shkruash.

1. Shtyp {{key:Esc}} që të mos ketë asgjë të përzgjedhur, te skeda {{ui:Model}}.
2. Te {{ui:Current settings}}, zgjidh {{ui:Length format}}: {{ui:Decimal}} (`150.5`), {{ui:Architectural}} (`12'-6 1/2"`), {{ui:Engineering}} (`12'-6.5"`), {{ui:Fractional}} (`150 1/2`) ose {{ui:Scientific}} (`1.505E+02`).
3. Zgjidh {{ui:Precision}}: vende dhjetore, ose thyesa më e vogël (1/16 është zgjedhja e zakonshme për arkitekturore).

Ose shkruaj {{cmd:UNITS}} (`UN`) dhe përgjigju dy pyetjet e tij.

Me {{ui:Architectural}} ose {{ui:Engineering}}, një njësi vizatimi është një inç, si në AutoCAD: vendos {{ui:Units}} edhe në {{ui:Inches}}. Mund të shkruash atëherë gjatësi në këmbë dhe inç kudo ku kërkohet një gjatësi, dhe në kutitë e {{ui:Properties}}:

| Shkruan | Do të thotë |
|---|---|
| `12'6"` ose `12'-6"` | 12 këmbë 6 inç (150) |
| `12'6-1/2"` | 12 këmbë 6½ inç. Përdor një vizë para thyesës: {{key:Space}} është {{key:Enter}} te rreshti i komandës. |
| `12'` | 12 këmbë |
| `6"` ose `6` | 6 inç: një numër i thjeshtë është inç |
| `1/2`, `6-1/2` | thyesat punojnë në çdo format |

Pikat marrin të njëjtat gjatësi: `@12'6",0` ose `@10'<90`. Këndet mbeten në gradë.

Formati shfaqet në historik ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: sipërfaqet si inç katrorë dhe këmbë katrore), në {{ui:Properties}}, në koordinatat e shiritit të gjendjes, dhe në **përmasat e reja**. Fletët mbajnë njësitë e tyre të letrës (milimetra ose inç) si dhjetore.

:::note
Formati i gjatësisë ruhet në skedarët DWG dhe DXF, dhe secila përmasë mban të vetën: një vizatim i ruajtur hapet sërish ashtu si e le.
:::

## Madhësitë e letrës

Fletët dhe printimet e modelit përdorin këto madhësi, në secilën orientim:

| Letër | Madhësia | Njësia në fletë |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimetra |
| ISO A3 | 420 × 297 mm | milimetra |
| ISO A2 | 594 × 420 mm | milimetra |
| ISO A1 | 841 × 594 mm | milimetra |
| ISO A0 | 1189 × 841 mm | milimetra |
| Letter | 11 × 8.5 in | inç |
| Legal | 14 × 8.5 in | inç |
| Tabloid / ANSI B | 17 × 11 in | inç |
| ANSI C | 22 × 17 in | inç |
| ANSI D | 34 × 22 in | inç |
| ARCH C | 24 × 18 in | inç |
| ARCH D | 36 × 24 in | inç |
| ARCH E | 48 × 36 in | inç |

Fletët e reja fillojnë në ISO A3 për vizatimet metrike dhe pa njësi, dhe në Tabloid për vizatimet në inç ose këmbë. Printimet e modelit fillojnë në ISO A4 ose Letter në të njëjtën mënyrë, pastaj mbajnë zgjedhjen e fundit. Fletët nga skedarët e hapur mbajnë madhësinë e tyre, e shfaqur si "Custom" kur nuk është një nga këto.

## Shkallët

Një shkallë `1:n` do të thotë që një njësi në letër shfaq n të së njëjtës njësi në model, kështu që 1:100 shfaq 1 m ndërtese si 10 mm letër. CadCraft e llogarit këtë nga njësitë e vizatimit dhe njësia e letrës.

**Shkallët metrike**, të ofruara për çdo vizatim: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Shkallët arkitekturore**, të ofruara kur njësitë janë inç ose këmbë: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Shkallët inxhinierike**, të ofruara kur njësitë janë inç ose këmbë: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Shkallët e tua.** Shkruaj `SCALELISTEDIT` (ose `SCALELIST`) për të shtuar një shkallë tënden, si 1:75 ose një shkallë sitësh 2 letër : 300 vizatim. `Add` kërkon një emër, pastaj njësitë e letrës dhe njësitë e vizatimit (një emër si `1:75` ofron numrat e vet; shtyp {{key:Enter}} për t'i marrë ato). `Edit`, `Delete`, `List` dhe `Reset` punojnë mbi të njëjtën listë; `Reset` kthehet te lista standarde. Shkallët e tua shfaqen pas atyre standarde në listën e shkallës së dritares së pamjes te Properties dhe në dialogun {{ui:Plot to PDF}}; një dritare pamjeje në atë shkallë lexohet me emrin e vet, dhe ruhen në vizatim (DWG dhe DXF 2000) si lista e shkallëve të vizatimit. Një vizatim i hapur nga një program tjetër sjell listën e vet; shkallët që ka dhe që përputhen me një standard nuk shfaqen dy herë.

Kur një dritare pamjeje drejtohet me {{ui:Show the whole model}} ose {{ui:Pick a window on the model…}}, CadCraft zgjedh shkallën standarde më të madhe që përshtatet. {{ui:Fit the whole model}} cakton në vend të kësaj një shkallë të saktë, që lexohet si raport i thjeshtë.

## Madhësitë në letër dhe në model

Madhësitë e tekstit dhe të përmasave janë në njësitë e hapësirës ku vizaton.

| Dëshiron në letër | Vizatuar në një fletë | Vizatuar në model 1:50 (vizatim në mm) | Vizatuar në model 1/4" = 1'-0" (vizatim në inç) |
|---|---|---|---|
| tekst 2.5 mm | 2.5 | 125 | — |
| tekst 3/32" | 0.09375 | — | 4.5 |

Për përmasat, mbaji madhësitë si madhësi letre dhe cakto shkallën e përgjithshme ({{cmd:DIMSCALE}}) në shkallën e printimit: 50 për 1:50, 48 për 1/4" = 1'-0". Shih [Cakto madhësitë e përmasave](topic:dimension-settings).

## Anotim sipas shkallës

Vizato modelin në madhësi të plotë dhe lëre CadCraft të bëjë llogaritjet e lartpërmendura për ty.

1. Zgjidh tekstin ose përmasat që duhet të mbajnë madhësinë e tyre në letër. Te Properties shëno {{ui:Annotative}}. {{ui:Size on paper}} atëherë shkruan, për shembull, `2.5 mm at 1:50`.
2. Shkruaj {{cmd:ANNOSCALE}} dhe shkallën me të cilën do të printohet vizatimi, si `1:100`.

Çdo tekst dhe përmasë anotative ndryshon madhësi që të printohet në të njëjtën madhësi në shkallën e re: teksti 2.5 mm është 125 i lartë në një vizatim në milimetra në 1:50 dhe 250 i lartë në 1:100. Gjerësia e një paragrafi ndryshon me të; teksti i një përmase, shigjetat dhe hapësirat ndryshojnë bashkë (shkalla e saj e përgjithshme). Është një hap zhbërjeje, dhe objektet që nuk janë anotative nuk ndryshohen kurrë.

Cilësimi ruhet në DWG dhe DXF: programet e tjera e lexojnë shenjën anotative, dhe CadCraft mban gjithashtu shkallën për të cilën është dimensionuar çdo objekt.

Nëse zyra jote cakton lartësitë e letrës te shtojca Default Policies (Settings › Global › Default Policies › Annotation sizes on paper), {{cmd:ANNOSCALE}} gjithashtu vendos lartësinë me të cilën fillon teksti i ri në lartësinë e zyrës për shënime në atë shkallë. Shih [Default Policies](topic:default-policies).

### Një objekt në disa shkallë

Një fletë shpesh shfaq të njëjtin plan në 1:100 dhe një pjesë të tij në 1:50. Jepi shënimeve dhe përmasave të dyja shkallët dhe çdo dritare pamjeje i shfaq në madhësinë e tyre në letër:

1. Zgjidh tekstin dhe përmasat anotative dhe shkruaj `OBJECTSCALE`.
2. Zgjidh `Add` dhe shkruaj shkallën, për shembull `1:50`. (`Current scale` shton shkallën e anotimit të vizatimit; `List` shfaq çfarë mban secili objekt; `Delete` heq një.)

Një dritare pamjeje shkalla e së cilës është në listën e një objekti e shfaq atë në madhësinë për atë shkallë: teksti 2.5 mm vizatohet 250 i lartë përmes një dritareje 1:100 dhe 125 i lartë përmes një 1:50, në ekran dhe në printim. Objekti mbetet aty ku është; vetëm madhësia e tij ndryshon. Në një dritare pamjeje me një shkallë që nuk është në listë, objekti shfaqet në madhësinë që ka, derisa shkruan `ANNOALLVISIBLE` dhe zgjedh `OFF`: atëherë lihet jashtë atje. {{cmd:ANNOSCALE}} ndryshon madhësinë e objekteve që e listojnë shkallën e re dhe i lë të tjerët ashtu siç janë.

Listat ruhen në DWG dhe DXF si të dhënat e veta të CadCraft. Një program tjetër e sheh çdo objekt si anotativ, në atë shkallë të vetme për të cilën është dimensionuar. Ndërrimi ANNOALLVISIBLE nuk ruhet në skedar.

## Trashësitë dhe llojet e vijave

Një shtresë, ose një objekt, mund të ketë një **trashësi vije** (0.05 deri 2.11 mm) dhe një **lloj vije** (me pika, e fshehur, qendër, fantazmë, pikash…). Vendosi në panelin e djathtë: kur nuk ka asgjë të përzgjedhur, {{ui:Linetype}} dhe {{ui:Lineweight}} nën {{ui:Current settings}} janë ato që marrin objektet e reja ({{ui:By layer}} për t'i ndjekur shtresat e tyre), dhe të dyja nën {{ui:Layer …}} janë të shtresës aktuale. Me objekte të përzgjedhura, të njëjtat dy rreshta dhe {{ui:Linetype scale}} i ndryshojnë ato objekte. Komandat janë {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) dhe {{cmd:LTSCALE}} (`LTS`).

Llojet e vijave shfaqen në ekran dhe në printime. Vijat e tyre janë në njësi vizatimi: një vizatim metrik përdor madhësitë ISO (DASHED: vija 12.7 mm), një vizatim me inç ato me inç (0.5"). Nëse vijat duken shumë të vogla ose shumë të mëdha, ndrysho {{ui:Linetype scale}} të vizatimit (LTSCALE): çdo vijë dhe hapësirë shumëzohet me të; shkalla e vetë objektit shumëzohet edhe një herë. Një model shumë i imët për t'u parë fare vizatohet si vijë e vazhdueshme.

Trashësitë e vijave printohen në printime, në mm në letër, çfarëdo shkalle. Vijat me trashësinë {{ui:Default}} përdorin gjerësinë e stilolapsit të zgjedhur në dialogun {{ui:Plot to PDF}} (0.13 deri 0.70 mm; fillimisht 0.25 mm); një trashësi vije 0 printohet si vija më e hollë. Në ekran çdo vijë është një piksel e gjerë derisa shtyp {{ui:LWT}} në shiritin e gjendjes (ose shkruan {{cmd:LWDISPLAY}}): atëherë një trashësi vije mbi 0.25 mm vizatohet më gjerë (0.5 mm = 2 piksel) në model, dhe në gjerësinë e vërtetë në letër në një fletë. Zgjedhja mbahet në këtë shfletues.
