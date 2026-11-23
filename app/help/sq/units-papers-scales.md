---
title: Njësitë, madhësitë e letrës dhe shkallët
summary: Ç'do të thotë një njësi vizatimi në CadCraft, madhësitë e letrës për fletët dhe printimet, çdo shkallë standarde, dhe si lidhen madhësitë e tekstit dhe të përmasave me shkallën e printimit.
keywords: njësi, milimetra, inç, këmbë, këmbë dhe inç, arkitekturore, inxhinierike, thyesore, thyesa, lunits, format gjatësie, saktësi, metra, madhësi letre, a3, a1, arch d, ansi, tabloid, letter, shkallë, 1:100, 1/4 inç, shkallë arkitekturore, shkallë inxhinierike, insunits
from: 7dc9b62e
---

## Njësitë e vizatimit

Vizaton në madhësi të plotë, në njësi vizatimi. Atë që përfaqëson një njësi e cakton cilësimi **Njësitë** i vizatimit:

1. Shtyp {{key:Esc}} që të mos ketë asgjë të zgjedhur, te skeda {{ui:Modeli}}.
2. Te {{ui:Cilësimet aktuale}}, zgjidh {{ui:Njësitë}}: {{ui:Pa njësi}}, {{ui:Milimetra}}, {{ui:Centimetra}}, {{ui:Metra}}, {{ui:Inç}} ose {{ui:Këmbë}}.

Përmasat mund t'i shkruajnë gjatësitë e tyre në milimetra, centimetra, metra ose kilometra, çfarëdo që të jetë njësia e vizatimit: shih [Përmasat në mm, cm, m ose km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Ndryshimi i njësive nuk ndryshon madhësinë e asgjëje. Ndryshon mënyrën si lexohen shkallët në fletë dhe në printime, dhe cilat shkallë ofrohen. Një vizatim i hapur nga një DWG ose DXF mban njësitë e ruajtura në skedar; seksioni {{ui:Vizatim}} i panelit të majtë i shfaq.

Një vizatim {{ui:Pa njësi}} trajtohet si i të njëjtës njësi me letrën: milimetra në letrën ISO, inç në letrën amerikane.

## Këmbë dhe inç, dhe thyesat

Si shkruhen dhe si shtypen gjatësitë është një cilësim tjetër, formati i gjatësisë. Nuk ndryshon asnjë gjeometri, vetëm si duken numrat dhe çfarë mund të shtypësh.

1. Shtyp {{key:Esc}} që të mos ketë asgjë të zgjedhur, te skeda {{ui:Modeli}}.
2. Te {{ui:Cilësimet aktuale}}, zgjidh {{ui:Formati i gjatësisë}}: {{ui:Dhjetore}} (`150.5`), {{ui:Arkitekturore}} (`12'-6 1/2"`), {{ui:Inxhinierike}} (`12'-6.5"`), {{ui:Thyesore}} (`150 1/2`) ose {{ui:Shkencore}} (`1.505E+02`).
3. Zgjidh {{ui:Saktësia}}: vende dhjetore, ose thyesa më e vogël (1/16 është zgjedhja e zakonshme për arkitekturën).

Ose shkruaj {{cmd:UNITS}} (`UN`) dhe përgjigju dy pyetjeve të tij.

Me {{ui:Arkitekturore}} ose {{ui:Inxhinierike}}, një njësi vizatimi është një inç, si në AutoCAD: vendos {{ui:Njësitë}} edhe në {{ui:Inç}}. Atëherë mund të shkruash gjatësi në këmbë dhe inç kudo ku kërkohet një gjatësi, dhe te kutitë e {{ui:Vetitë}}:

| Shkruan | Do të thotë |
|---|---|
| `12'6"` ose `12'-6"` | 12 këmbë 6 inç (150) |
| `12'6-1/2"` | 12 këmbë 6½ inç. Përdor një vizë para thyesës: {{key:Space}} është {{key:Enter}} te rreshti i komandës. |
| `12'` | 12 këmbë |
| `6"` ose `6` | 6 inç: një numër i thjeshtë është inç |
| `1/2`, `6-1/2` | thyesat funksionojnë në çdo format |

Pikat marrin të njëjtat gjatësi: `@12'6",0` ose `@10'<90`. Këndet mbeten në gradë.

Formati shfaqet në historik ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: sipërfaqet si inç katrorë dhe këmbë katrore), në {{ui:Vetitë}}, në koordinatat e shiritit të statusit, dhe në **përmasat e reja**. Fletët mbajnë njësitë e tyre të letrës (milimetra ose inç) si dhjetore.

:::note
Formati i gjatësisë ruhet në skedarët DWG dhe DXF, dhe çdo përmasë mban formatin e vet: një vizatim i ruajtur hapet sërish ashtu si e le.
:::

## Madhësitë e letrës

Fletët dhe printimet e modelit përdorin këto madhësi, në çdo orientim:

| Letra | Madhësia | Njësia në fletë |
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

Fletët e reja fillojnë me ISO A3 për vizatimet metrike dhe pa njësi, dhe me Tabloid për vizatime në inç ose këmbë. Printimet e modelit fillojnë me ISO A4 ose Letter në të njëjtën mënyrë, pastaj mbajnë mend zgjedhjen tënde të fundit. Fletët nga skedarët e hapur mbajnë madhësinë e tyre, e shfaqur si "Custom" kur nuk është një nga këto.

## Shkallët

Një shkallë `1:n` do të thotë se një njësi në letër tregon n të së njëjtës njësi në model, kështu 1:100 tregon 1 m ndërtese si 10 mm letër. CadCraft e llogarit këtë nga njësitë e vizatimit dhe nga njësia e letrës.

**Shkallët metrike**, të ofruara për çdo vizatim: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Shkallët arkitekturore**, të ofruara kur njësitë janë inç ose këmbë: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Shkallët inxhinierike**, të ofruara kur njësitë janë inç ose këmbë: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Shkallët e tua.** Shkruaj `SCALELISTEDIT` (ose `SCALELIST`) për të shtuar një shkallë tënden, si 1:75 ose një shkallë sit prej 2 letër : 300 vizatim. `Add` kërkon një emër, pastaj njësitë e letrës dhe të vizatimit (një emër si `1:75` ofron numrat e vet; shtyp {{key:Enter}} për t'i marrë). `Edit`, `Delete`, `List` dhe `Reset` punojnë në të njëjtën listë; `Reset` kthehet te lista standarde. Shkallët e tua shfaqen pas atyre standarde në listën e shkallës së pamjes te Vetitë dhe në dialogun {{ui:Nxirr në PDF}}; një pamje me atë shkallë lexohet me emrin e saj, dhe ruhen në vizatim (DWG dhe DXF 2000) si lista e shkallëve të vizatimit. Një vizatim i hapur nga një program tjetër sjell listën e tij; shkallët që përputhen me një standarde nuk shfaqen dy herë.

Kur një pamje përshtatet me {{ui:Shfaq gjithë modelin}} ose {{ui:Zgjidh një dritare mbi modelin…}}, CadCraft zgjedh shkallën më të madhe standarde që përshtatet. {{ui:Përshtat gjithë modelin}} vendos një shkallë të saktë, që lexohet si raport i thjeshtë.

## Madhësitë në letër dhe në model

Madhësitë e tekstit dhe të përmasave janë në njësitë e hapësirës ku vizaton.

| Do në letër | Vizatuar në fletë | Vizatuar në model 1:50 (vizatim në mm) | Vizatuar në model 1/4" = 1'-0" (vizatim në inç) |
|---|---|---|---|
| tekst 2.5 mm | 2.5 | 125 | — |
| tekst 3/32" | 0.09375 | — | 4.5 |

Për përmasat, mbaji madhësitë si madhësi letre dhe vendos shkallën e përgjithshme ({{cmd:DIMSCALE}}) në shkallën e printimit: 50 për 1:50, 48 për 1/4" = 1'-0". Shih [Vendos madhësitë e përmasave](topic:dimension-settings).

## Shëno sipas shkallës

Vizato modelin në madhësi të plotë dhe lëre CadCraft të bëjë llogaritjet më lart për ty.

1. Zgjidh tekstin ose përmasat që duhet të mbajnë madhësinë e tyre në letër. Te Vetitë shëno {{ui:Anotative}}. {{ui:Madhësia në letër}} lexohet, për shembull, `2.5 mm at 1:50`.
2. Shkruaj {{cmd:ANNOSCALE}} dhe shkallën me të cilën do të printohet vizatimi, si `1:100`.

Çdo tekst dhe përmasë anotative riçmohet që të printohet në të njëjtën madhësi në shkallën e re: teksti 2.5 mm është 125 i lartë në një vizatim në milimetra në 1:50 dhe 250 i lartë në 1:100. Gjerësia e një paragrafi ndryshon me të; teksti, shigjetat dhe hapësirat e një përmase ndryshojnë bashkë (shkalla e saj e përgjithshme). Është një hap zhbërjeje, dhe objektet që nuk janë anotative nuk preken kurrë.

Cilësimi ruhet në DWG dhe DXF: programet e tjera e lexojnë shenjën anotative, dhe CadCraft mban gjithashtu shkallën për të cilën është madhësuar çdo objekt.

Nëse zyra jote vendos lartësi letre në shtojcën Default Policies (Cilësimet › Global › Default Policies › Annotation sizes on paper), {{cmd:ANNOSCALE}} vendos gjithashtu lartësinë me të cilën fillon teksti i ri, sipas asaj të zyrës për shënime në atë shkallë. Shih [Default Policies](topic:default-policies).

### Një objekt në disa shkallë

Një fletë shpesh tregon të njëjtin plan në 1:100 dhe një pjesë të tij në 1:50. Jepu shënimeve dhe përmasave të dyja shkallët dhe çdo pamje i shfaq në madhësinë e tyre në letër:

1. Zgjidh tekstin dhe përmasat anotative dhe shkruaj `OBJECTSCALE`.
2. Zgjidh `Add` dhe shkruaj shkallën, për shembull `1:50`. (`Current scale` shton shkallën e anotimit të vizatimit; `List` shfaq çfarë mban secili objekt; `Delete` heq një.)

Një pamje ku shkalla është në listën e një objekti e shfaq atë në madhësinë për atë shkallë: teksti 2.5 mm vizatohet 250 i lartë përmes një pamjeje 1:100 dhe 125 i lartë përmes asaj 1:50, në ekran dhe në printim. Objekti mbetet aty ku është; vetëm madhësia e tij ndryshon. Në një pamje me një shkallë që nuk është në listën e objektit, objekti shfaqet në madhësinë që ka, derisa shkruan `ANNOALLVISIBLE` dhe zgjedh `OFF`: atëherë lihet jashtë atje. {{cmd:ANNOSCALE}} i madhëson objektet që e listojnë shkallën e re dhe i lë të tjerët ashtu si janë.

Listat ruhen në DWG dhe DXF si të dhënat e vetë CadCraft. Një program tjetër e sheh çdo objekt si anotativ, në shkallën e vetme për të cilën është madhësuar. Çelësi ANNOALLVISIBLE nuk ruhet në skedar.

## Trashësitë e vijave dhe llojet e vijave

Një shtresë, ose një objekt, mund të ketë një **trashësi vije** (0.05 deri 2.11 mm) dhe një **lloj vije** (me viza, e fshehur, qendër, fantazmë, pika…). Vendosi në panelin e djathtë: kur nuk ka asgjë të zgjedhur, {{ui:Lloji i vijës}} dhe {{ui:Trashësia e vijës}} te {{ui:Cilësimet aktuale}} janë ato që marrin objektet e reja ({{ui:Sipas shtresës}} për t'i ndjekur shtresat e tyre), dhe dy të tjerat te {{ui:Shtresa …}} janë të shtresës aktuale. Me objekte të zgjedhura, të njëjtat dy rreshta dhe {{ui:Shkalla e vijës}} i ndryshojnë ato objekte. Komandat janë {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) dhe {{cmd:LTSCALE}} (`LTS`).

Llojet e vijave shfaqen në ekran dhe në printime. Vijat e tyre janë në njësi vizatimi: një vizatim metrik përdor madhësitë ISO (DASHED: viza 12.7 mm), një vizatim në inç ato në inç (0.5"). Nëse vijat duken shumë të vogla ose shumë të mëdha, ndrysho {{ui:Shkalla e vijës}} të vizatimit (LTSCALE): çdo vijë dhe hapësirë shumëzohet me të; shkalla e vetë objektit shumëzon edhe një herë. Një model shumë i hollë për t'u parë shfaqet si vijë e ngurtë.

Trashësitë e vijave printohen në milimetra në letër, pavarësisht shkallës. Vijat me trashësinë {{ui:Paracaktuar}} përdorin gjerësinë e stilolapsit të zgjedhur te dialogu {{ui:Nxirr në PDF}} (0.13 deri 0.70 mm; fillimisht 0.25 mm); një trashësi 0 printohet si vija më e hollë. Në ekran çdo vijë është një piksel e gjerë derisa shtyp {{ui:LWT}} në shiritin e statusit (ose shkruan {{cmd:LWDISPLAY}}): atëherë një trashësi mbi 0.25 mm vizatohet më e gjerë (0.5 mm = 2 piksela) në model, dhe në gjerësinë e saj reale në letër, në një fletë. Zgjedhja mbahet në këtë shfletues.

## Standardi i zyrës

Një zyrë mund të mbajë lartësitë e tekstit në letër, shtresat, fushat e blokut të titullit dhe shablloanet në një regjistrim të vetëm, standardin e zyrës. CadCraft e lexon në këtë renditje: regjistrimin e vizatimit (vendosur me {{cmd:OFFICESTANDARD}} › `Import`, i ruajtur në skedar), standardin e përbashkët të ekipit tënd, pastaj Default Policies. Tekstet dhe përmasat anotative marrin lartësinë e tyre në letër nga ai në shkallën e anotimit. Një standard bosh nuk ndryshon asgjë. {{cmd:OFFICESTANDARD}} › `Layers` shton shtresat e zyrës që i mungojnë një vizatimi.
