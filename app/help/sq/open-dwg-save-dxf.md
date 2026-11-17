---
title: Hap një DWG, redakto dhe ruaj një kopje
summary: Hap një vizatim që të dërgoi dikush, kontrollo çfarë hyri, bëj një ndryshim, dhe dërgo një kopje mbrapsht si DWG ose DXF.
keywords: dwg, dxf, hap, importo, eksporto, ruaj, r12, cikël i plotë, konsulent, xref, kontrollo vizatimin, saveas, ruaj si, ruajtje dwg, format
from: 49de4bf6
---

## Çfarë do të bësh

Hap një DWG nga një konsulent, kontrollo çfarë mund të shfaqte CadCraft dhe çfarë jo, shto një shënim, nxirr një fletë në PDF dhe ruaj një kopje për ta kthyer si DWG ose DXF.

## Hap skedarin

1. Shtyp {{key:Mod+O}}, ose kliko {{ui:Hap}}.
2. Zgjidh skedarin `.dwg`.

Rreshti i gjendjes thotë "Reading …" ndërsa vizatimi lexohet. Kur mbaron, vizatimi mbush ekranin, dhe historiku thotë, për shembull, "U hap plan.dwg: 18,240 objects on 64 layers", me kohën që u desh.

:::offline
Je jashtë linje. Nëse butoni {{ui:Ruaje për jashtë linje}} shkruan "Gati jashtë linje", skedarët DWG hapen normalisht. Nëse jo, dhe asnjë DWG nuk është hapur ende në këtë skedë, hapja e një DWG mund të dështojë sepse lexuesi DWG i CadCraft ngarkohet me DWG-në e parë: hap një DXF në vend të kësaj, ose ruaje CadCraft për përdorim jashtë linje herën tjetër kur je në linjë. Shih [Puna jashtë linje](common:offline).
:::

## Kontrollo çfarë hyri

1. Shiko seksionin {{ui:Vizatim}} në panelin e majtë: formati dhe versioni, njësitë, numri i objekteve dhe shtresave, dhe fletët.
2. Lexo kutinë "Rreth këtij skedari" nën të, nëse ka një.

Kutia liston:

- **Nuk shfaqet ende:** objekte që CadCraft nuk mund t'i vizatojë ende, sipas llojit dhe numrit. Lihen jashtë, nuk merren me hamendje.
- **Fletët (layout-et) erdhën:** hapi ato me skedat nën vizatim.
- **Përmasat që mund të lexoheshin vetëm siç u vizatuan.**

3. Kalo me skedat nën vizatim për të parë çdo fletë.
4. Kontrollo {{ui:Njësitë}} te {{ui:Cilësimet aktuale}} (asgjë e përzgjedhur, skeda {{ui:Modeli}}). Nëse thotë {{ui:Pa njësi}} por e di që vizatimi është në milimetra, vendose, që shkallët e fletës dhe të printimit të lexohen saktë.

:::tip
Nëse prisje një pjesë të vizatimit dhe nuk e sheh, kontrollo panelin {{ui:Shtresat}}: shtresa mund të jetë e fikur ose e ngrirë në skedar. Kliko emrin e saj për ta bërë aktuale; kjo e ndez.
:::

## Bëj ndryshimin tënd

1. Bëj një shtresë për shënimet: kliko {{ui:Shtresë e re}}, shkruaj `NOTES` dhe shtyp {{key:Enter}}.
2. Shkruaj `DT` dhe shtyp {{key:Enter}}.
3. Kliko aty ku shkon shënimi.
4. Shkruaj një lartësi teksti që i përshtatet vizatimit (shih [Shto tekst dhe etiketa](topic:text)) dhe shtyp {{key:Enter}}.
5. Shtyp {{key:Enter}} për të mbajtur rrotullimin 0.
6. Shkruaj shënimin dhe shtyp {{key:Enter}}.
7. Shtyp {{key:Enter}} përsëri për të mbaruar.

Ndryshimet te përmasat e importuara janë në rregull: sapo ndryshon një, CadCraft e rivizaton me stilin e vet.

## Nxirr një fletë për shqyrtim

1. Kliko skedën e fletës.
2. Shtyp {{key:Mod+P}}.
3. Kliko {{ui:Shkarko PDF}}.

Shih [Nxirr në PDF](topic:plot-pdf).

## Ruaj një kopje

1. Shtyp {{key:Mod+S}}, ose kliko {{ui:Ruaj}}.

Ke hapur një DWG, kështu që shfletuesi shkarkon `<name>.dwg`, në versionin me të cilin erdhi DWG-ja. Historiku thotë, për shembull, "U ruajt një kopje si Plan.dwg (DWG (AutoCAD 2018))." dhe liston, në rreshtat nën të, çdo gjë që ndryshoi gjatë rrugës.

2. Lexo ato rreshta përpara se të dërgosh skedarin. [Çfarë mban dhe ndryshon një DWG](topic:files#what-a-dwg-keeps-and-changes) shpjegon secilin prej tyre.

DWG-ja jote origjinale nuk ndryshohet kurrë. Çdo ruajtje është një shkarkim i ri.

## Ruaj si DWG ose DXF

Për të zgjedhur formatin vetë:

1. Shtyp {{key:Mod+Shift+S}}, ose kliko {{ui:Ruaj si}}.

Dialogu {{ui:Ruaj një kopje si}} hapet me katër zgjedhje, secila me emrin e skedarit që do t'i japë: {{ui:DWG}}, me listën e vet {{ui:Versioni}}, {{ui:DXF R12}}, {{ui:DXF 2000}} dhe {{ui:DXF 2000 (binar)}}. Formati dhe versioni aktual i vizatimit janë zgjedhur tashmë.

2. Kliko formatin që do. Për DWG, zgjidh versionin që përdor zyra tjetër, ose një version më të vjetër: AutoCAD 2018, 2013, 2010, 2007, 2004 ose 2000.
3. Kliko {{ui:Ruaj}}.

Kopja shkarkohet. Që tani, {{key:Mod+S}} e ruan këtë vizatim në atë format, dhe vizatimet e reja fillojnë edhe ato me të, në këtë shfletues. {{ui:Anulo}} ose {{key:Esc}} nuk ruan asgjë, dhe historiku thotë "Nuk u ruajt."

Cilin të zgjedhësh:

- **DWG** mban më së shumti: fletët me dritaret e tyre të pamjes, përmasat e vërteta, modelet e vijëzimit, emrat e shtresave dhe blloqeve siç i shkruan, dhe tekstin me shumë rreshta si tekst me shumë rreshta. Versioni AutoCAD 2000 hapet në më shumë programe; 2004 dhe më të rinjtë mbajnë edhe ngjyrat e vërteta.
- **DXF 2000** është një skedar tekst që mban pothuajse atë që mban një DWG: çdo fletë si layout me dritaret e saj, përmasa të vërteta, modele vijëzimi, ngjyra të vërteta, trashësi vijash, tipe vijash, dhe emra siç i shkruan. Hapet në AutoCAD 2000 dhe më të rinj dhe në shumicën e programeve CAD. Multiudhëheqësit bëhen vijat, shigjetat dhe teksti që vizatojnë. Një DXF i hapur në versionin 2000 ose më të ri ruhet si DXF 2000.
- **DXF 2000 (binar)** mban të njëjtën përmbajtje si DXF 2000, në formën binare të formatit: një skedar më i vogël që mban çdo numër saktësisht. Skedarët DXF binarë nga programe të tjera hapen si ata tekst, dhe një vizatim i hapur nga një DXF binar ruhet përsëri si binar.
- **DXF R12** hapet në pothuajse çdo program CAD. Mban fletën e parë me dritaren e saj, dhe fletët e tjera të CadCraft. Thjeshton gjërat më të reja, si tekstin me shumë rreshta dhe vijëzimet.

## Çfarë do të shohë zyra tjetër

Në një DWG:

- Vija, harqe, rrathë, elipse, polivijë, tekst, tekst me shumë rreshta, blloqe me atributet e tyre, mbushje të ngurta, modele vijëzimi dhe shtresa siç i sheh ti.
- Përmasa të vërteta: programi tjetër i rimat kur shtrihen.
- Çdo fletë, me letrën dhe dritaret e saj.
- Multiudhëheqësit si multiudhëheqës. Në versionin AutoCAD 2000, ngjyrat e vërteta bëhen ngjyra standarde më të afërta.

Në një DXF R12:

- Vija, harqe, rrathë, polivijë, tekst, referenca blloqesh dhe përmasa siç i sheh ti. Përmasat mbeten përmasa të vërteta.
- Emrat e shtresave me shkronja të mëdha, me hapësirat të kthyera në `_`.
- Fleta e parë si hapësirë letre e vizatimit, me dritaret e saj. Fletët e mëtejshme vijnë si blloqe me emrat `CCLAYOUT_1` e kështu me radhë; nëse u duhen të gjitha fletët si layout, nxirr PDF për çdo fletë edhe për ta.
- Teksti me shumë rreshta si rreshta të veçantë, elipsat si polivijë, vijëzimet si kontura.

Në çdo rast, çdo gjë që ishte shënuar si "Nuk shfaqet ende" kur hape DWG-në **nuk** është në kopje, përveç nëse historiku thotë se u mbajt: objektet OLE të një DWG dhe solidet e tij 3D në hapësirën e modelit shkruhen përsëri kur ruan si DWG. Thuaju, dhe dërgo edhe një PDF.

## Gabime të zakonshme

- **"CadCraft opens DWG and DXF drawings."** Skedari ka një zgjatje tjetër. Kontrollo që është `.dwg` ose `.dxf`.
- **"This drawing could not be read."** DWG-ja është e dëmtuar ose në një version që lexuesi nuk e trajton. Kërko një DXF, ose DWG-në e ruajtur në një version më të vjetër.
- **"This binary DXF ends in the middle of an object."** Skedari është prerë ose i dëmtuar. Shkruaj RECOVER për të hapur atë që mund të lexohet, ose kërko skedarin sërish.
- **Skedari i ruajtur quhet `name (1).dwg` ose `name (1).dxf`.** Shfletuesi e bën këtë kur një skedar me të njëjtin emër është tashmë në dosje.
- **Kanë një program më të vjetër që nuk e hap DWG-në.** Ruaj si DWG me {{ui:Versioni}} {{ui:AutoCAD 2000}}, ose si {{ui:DXF R12}}: pothuajse çdo program CAD e hap.
- **Pjesë të vizatimit mungojnë.** Vizatimet e lidhura (xref) nuk ngarkohen derisa zgjedh skedarët e tyre ({{cmd:XREF}}, `R`), dhe imazhet shfaqen si korniza me emrat e skedarëve të tyre.
