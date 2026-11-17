---
title: Nga programe të tjera vizatimi
summary: Si komandat, tastet dhe zakonet e njohura shkojnë te CadCraft, dhe ndryshimet që i ngatërrojnë vizatuesit me përvojë.
keywords: kalim, ndryshime, migrim, zakone, aliase, hyrje dinamike, pickfirst, pickadd, qsave, saveas, ruaj si, mtext, ctb, gjurmim polar, xref, tastet e shkurtores, të njohura, copyclip, pasteclip, pasteorig, copybase, clipboard
from: b58688e7
---

Nëse ke përdorur AutoCAD, ose një program të ndërtuar mbi të njëjtin model, shumica e asaj që di funksionon këtu: rreshti i komandave, aliase si `L`, `C`, `TR` dhe `O`, Enter ose Space për të përsëritur, përzgjedhja me dritare dhe me kryqëzim, kapjet e objekteve në F3, Ortho në F8, hapësira e modelit me layout-e dhe dritare pamjeje. Kjo faqe liston çfarë përkon drejtpërdrejt, dhe pastaj ndryshimet që të bëjnë të gabosh. Lexo gjysmën e dytë edhe nëse e shfletoj vetëm gjysmën e parë.

## Çfarë përkon drejtpërdrejt

| Zakoni | Në CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Të njëjtat komanda, të njëjtët aliase |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Të njëjtat |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Të njëjtat komanda përmasash |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` të shkruara në rreshtin e komandave | Të njëjtat, për përmasat e reja |
| `B` për të bërë një bllok, `I` për ta futur, `PU` për ta pastruar | Të njëjtat (purge heq vetëm blloqet e papërdorura) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` pastaj `E` ose `W` | Të njëjtat |
| Shkrimi i `_LINE` ose `-LAYER` nga një skript ose zakon | Shenja `_`, `-`, `.` ose `'` në fillim injorohet |
| Enter ose Space në një kërkesë bosh përsërit komandën e fundit | Njësoj |
| Esc anulon; Esc përsëri pastron përzgjedhjen | Njësoj |
| `@dx,dy`, `@d<a`, këndet e shkruara në drejtim kundërt akrepave nga lindja | Njësoj |
| Dritare nga e majta në të djathtë, kryqëzim nga e djathta në të majtë, klikim-klikim; shtyp dhe zvarrit për lasso, Space ndërron dritare / kryqëzim / gardh (LASSOMODE) | Njësoj |
| Zgjidh së pari, pastaj komandën (emër-folje) | Njësoj; një komandë e përfunduar pastron përzgjedhjen |
| `ALL` dhe `L` te Select objects | Njësoj |
| Shift+klikim heq nga përzgjedhja | Njësoj. Cilësimet mund ta bëjnë një klikim ta zëvendësojë përzgjedhjen, si e bën PICKADD 0: shih [Cilësimet e CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Të njëjtat komanda dhe tastet; ngjitja e vendos kopjen sipas këndit të saj të poshtëm majtas, si e bën PASTECLIP |
| F3 kapje objekti, F7 rrjet, F8 Ortho | Të njëjtët taste |
| Dy herë klikim në rrotë për zmadhim në shtrirjen maksimale | Njësoj |
| Teksti i pasqyruar mbetet i lexueshëm | Njësoj (si me MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Njësoj; në Mac, Command funksionon gjithashtu |

[Referenca e komandave](topic:commands) liston çdo komandë dhe alias.

:::tip
Nëse të pëlqen shiriti i AutoCAD, zgjidh stilin e menysë {{ui:Hartim klasik}} te {{ui:Cilësimet}} › {{ui:CadCraft}} › {{ui:Menutë, tastet dhe miu}}: skedat Home, Insert, Annotate, Parametric, View, Manage dhe Output mbi të njëjtin rresht komandash, dhe butoni i mesit lëviz pamjen ndërsa klikimi me të djathtën është Enter. Shih [Menutë, tastet dhe miu](topic:menus-keys-and-mouse).
:::

[Harta e komandave](topic:command-map) liston çdo komandë që ka CadCraft me emrat e shkurtër, dhe [fletëmbajtësi](topic:cheat-sheet) liston 40 që do të përdorësh më shpesh (edhe si PDF një faqe).

## Ndryshimet që të gabojnë

### Pikat e shkruara janë absolute

Me hyrjen dinamike të ndezur, programi tjetër e trajton një `100,0` të shkruar si pikë të dytë si relative. **Rreshti i komandave i CadCraft nuk e bën këtë:** aty, `x,y` matet gjithmonë nga origjina. Me {{ui:Dyn}} ({{key:F12}}) të ndezur, përdor fushat e tij në vend: distanca, {{key:Tab}}, këndi. Përdor `@100,0` për "100 djathtas nga pika e fundit", ose lëviz kryqëzën në drejtimin e duhur dhe shkruaj një `100` të thjeshtë.

### Shift kalon kapjet; nuk jep Ortho

Mbajtja e Shift ndërsa klikon injoron kapjet e objekteve për atë klikim. Nuk e ndërron përkohësisht Ortho. Përdor F8 ose butonin {{ui:Ortho}}.

### Klikimi me të djathtën është gjithmonë Enter

Nuk ka menu me klikim të djathtë. Një klikim me të djathtën në vizatim është Enter: përfundon një komandë, përfundon një përzgjedhje, ose e përsërit komandën e fundit. Gjatë lëvizjes me kapëse ose një kutie përzgjedhjeje, anulon në vend të kësaj. Zvarrit me butonin e djathtë për të lëvizur pamjen.

### Pa lëvizje me tastin e hapësirës

Space është Enter, prandaj mbajtja e Space dhe zvarritja nuk e lëviz pamjen. Lëvize me butonin e mesit ose të djathtë, ose zvogëlo dhe rrit përsëri në një pikë tjetër me rrotën.

### Trim dhe Extend

Trim dhe Extend fillojnë në modalitetin Quick: çdo objekt i dukshëm është një skaj prerjeje ose kufi, pjesa nën tregues tregon çfarë do të largohet, një shteg i zvarritur pret çdo pjesë që kalon, dhe një objekt që asgjë nuk e pret fshihet. {{key:Shift}} ndërron midis trim dhe extend. `O` kalon në modalitetin Standard (zgjidh së pari skajet), `F` dhe `C` janë gardh dhe kryqëzim, `E` është EDGEMODE, `R` fshin. Nuk ka opsionin `P` (Project): CadCraft pret në planin e vizatimit.

### Fillet dhe chamfer

{{cmd:FILLET}} dhe {{cmd:CHAMFER}} marrin opsionet që njeh: Undo, Polyline, Radius (ose Distance, Angle dhe mEthod), Trim dhe Multiple, dhe {{key:Shift}}+klikim për kënd të mprehtë. Një fillet midis një polivijeje dhe një vije e shton harkun si objekt të vetë në vend që t'i bashkojë në polivijë, dhe kthesat e polivijës pranë një segmenti harku lihen ashtu siç janë.

### Tekst paragrafi dhe tekst me një rresht

`T`, `MT` dhe `MTEXT` janë tekst paragrafi i shkruar në vend, me gjerësi, hapësirë rreshtash dhe drejtim; `DT` dhe `DTEXT` janë tekst me një rresht, ashtu si e njeh. Nuk ka stile teksti as kolona, dhe nuk mund të shkruash formatim brenda tekstit (të trashë, thyesa të grumbulluara) akoma; formatimi që vjen në një skedar ruhet, vizatohet dhe ruhet (shih [Shto tekst dhe etiketa](topic:text#formatting-inside-paragraph-text-from-other-programs)). Gjithçka vizatohet me një shkronjë të stilit Helvetica.

### Ruaj do të thotë "shkarko një kopje"

{{key:Mod+S}}, `SAVE` dhe `QSAVE` shkarkojnë një kopje në formatin e vizatimit: një DWG që hape ruhet si DWG, një DXF si DXF. Në shfletues asgjë nuk mbishkruhet në vend, dhe skedarët e hapur nuk ndryshohen kurrë. Në CadCraft Studio, {{key:Mod+S}} shkruan përsëri te skedari që hape.

`SAVEAS` ({{key:Mod+Shift+S}}) është një dialog i vogël, jo një shfletues skedarësh: zgjidh {{ui:DWG}} (me {{ui:Versioni}}, AutoCAD 2000 deri 2018), {{ui:DXF R12}} ose {{ui:DXF 2000}} dhe kliko {{ui:Ruaj}}. Shfletuesi vendos ku shkon shkarkimi. `DXFOUT` shkarkon gjithmonë DXF R12.

Një DWG që hape ruhet në versionin me të cilin erdhi; një vizatim i ri ruhet në formatin AutoCAD 2000 përveç nëse zgjedh një tjetër. Fletët, përmasat dhe modelet e vijëzimit ruhen. Shih [Skedarët: çfarë hapet, çfarë ruhet](topic:files#saving).

### Shtresat: më të thjeshta

- Çdo ndryshim i shtresës (on, freeze, lock, color, plot, linetype, lineweight, current layer) është një hap i vetëm {{ui:Zhbëj}}.
- Off dhe freeze kanë të njëjtin efekt në CadCraft.
- Shtresat që një vizatim i ngrin në një dritare pamjeje mbeten të ngrira atje: në ekran, në nxirrje dhe kur e ruan si DWG ose DXF.
- Një dritare pamjeje që shfaq një shtresë me ngjyrën, llojin e vijës, trashësinë ose transparencën e vet e mban këtë në ekran, në nxirrje dhe në një DWG të ruajtur (DXF mban cilësimet e vetë të shtresës; ruajtja e thotë këtë). Ndryshimi i tyre për çdo dritare pamjeje nuk është ndërtuar akoma.
- Nuk ka menaxher vetish të shtresave dhe nuk ka gjendje shtresash; {{cmd:RENAME}}, {{cmd:LAYMRG}} dhe {{cmd:LAYDEL}} riemërojnë, bashkojnë dhe fshijnë shtresa. Llojet e vijave dhe trashësitë caktohen në panelin e djathtë (shih [Trashësitë e vijave dhe llojet](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} dhe {{cmd:LAYMCUR}} punojnë me zgjedhje.
- Ruajtja në DXF R12 i shkruan emrat e shtresave me shkronja të mëdha. Një DWG i mban ashtu siç i shkrove.

### Stilet e përmasave

`DIMSTYLE` hap një menaxher për stile të emërtuara (të reja, ndrysho, cakto aktualen, krahaso, apliko). `DIMSCALE` dhe cilësimet e tjera ende ndryshojnë atë që përdorin përmasat e reja, dhe çdo përmasë mban madhësitë e veta, të cilat mund t'i ndryshosh edhe në panelin e Vetive. Stili aktual nuk ruhet në skedar. Përmasat ndjekin formatin e gjatësisë së vizatimit (decimal, ose këmbë dhe inç me {{cmd:UNITS}}), ose {{ui:Formati}} të tyre. Shih [Cakto madhësitë e përmasave](topic:dimension-settings).

### Nxirrja është më e thjeshtë

Tabelat e stilit të printimit punojnë sipas ngjyrës, ashtu si skedarët CTB: Monochrome, Colour dhe Grayscale janë të integruara, ti mund të bësh të tuajat, dhe çdo fletë mban tabelën e vet. Leximi i skedarëve CTB është ndërtuar nga përshkrimi i publikuar dhe është provuar vetëm me skedarë që kemi bërë ne; tabelat e emërtuara të stilit të printimit (STB) dhe konfigurimet e faqes nuk janë ndërtuar akoma. Vijat nxirren me trashësinë e tyre, të tjerat me një trashësi penne. Fletët nxirren 1:1 në letrën e tyre; modeli nxirret në një shkallë të zgjedhur ose të përshtatur. Shih [Nxirr në PDF](topic:plot-pdf).

### Punimi brenda një dritareje pamjeje

Siç e njeh: kliko dy herë brenda një dritareje pamjeje (ose shkruaj {{cmd:MSPACE}}) për të punuar në model përmes saj, dhe kliko dy herë jashtë saj (ose {{cmd:PSPACE}}) për t'u kthyer te fleta. Brenda, lëvizja dhe zmadhimi ndryshojnë atë që shfaq dritarja e pamjes, përveç nëse shfaqja e saj është e kyçur; atëherë ato lëvizin fletën. Klikimi në një skedë nën vizatim gjithashtu të nxjerr nga dritarja e pamjes. Shih [Puno në model përmes një dritareje pamjeje](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Gjurmimi dhe hyrja dinamike po, kapja në rrjet ende jo

Rrjeti është vetëm për t'u parë; pikat nuk kapen në të (nuk ka modalitet kapjeje F9). Gjurmimi polar ({{key:F10}}, hapi i vendosur me {{cmd:POLARANG}}) dhe gjurmimi i kapjes në objekte ({{key:F11}}: qëndro mbi një pikë kapjeje për ta marrë) funksionojnë ashtu si i njeh; shih [Kap në objekte](topic:object-snaps#polar-tracking). Hyrja dinamike ({{key:F12}}) tregon distancën dhe këndin (ose X dhe Y) pranë kryqëzës; shih [Hyrja e koordinatave dhe e distancës](topic:coordinate-entry#dynamic-input).

### Këmbë dhe inç

Zgjidh {{ui:Formati i gjatësisë}} {{ui:Arkitekturore}} ose {{ui:Inxhinierike}} (ose shkruaj {{cmd:UNITS}}), dhe shkruaj gjatësitë ashtu si i njeh: `12'6"`, `12'6-1/2"`. Përdor vizë lidhëse, jo hapësirë, përpara një thyese: {{key:Space}} është {{key:Enter}}. Vendos edhe {{ui:Njësitë}} në {{ui:Inç}}, që fletët dhe nxirrjet të ofrojnë shkallë arkitekturore. Formati mbahet në skedarët DWG dhe DXF të ruajtur. Shih [Këmbë dhe inç](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopjimi dhe ngjitja qëndrojnë brenda CadCraft

{{key:Mod+C}}, {{key:Mod+X}} dhe {{key:Mod+V}} kopjojnë, presin dhe ngjisin objekte brenda një vizatimi, midis vizatimeve dhe midis skedave CadCraft në të njëjtin shfletues. Clipboard-i është i CadCraft: nuk mund të ngjitësh objekte CadCraft në një program tjetër, ose objekte nga një program tjetër në CadCraft. Ngjitja nga një vizatim me njësi të tjera nuk ripërmasohet: përdor {{cmd:SCALE}} më pas. {{key:Mod+D}} është një dublikim që lëviz me treguesin, një shtesë e CadCraft. Shih [Kopjo, ngjit dhe dublo](topic:copy-paste).

### Taste të shfletuesit që nuk mund t'i përdorësh

Një faqe web nuk mund t'i marrë {{key:Mod+N}}, {{key:Mod+W}} ose {{key:Mod+T}} nga shfletuesi: ato hapin dhe mbyllin dritare dhe skeda. Përdor butonin {{ui:E re}} ose shkruaj `NEW`. Shih [Tastet, miu dhe trackpad-et](common:keys).

## Komanda që mund të kërkosh, por që nuk janë këtu akoma

{{cmd:TABLE}} nuk është ndërtuar. Ta shkruash thotë "Unknown command". ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} dhe {{cmd:XREF}} janë ndërtuar.) [Nuk është ndërtuar akoma](topic:not-built-yet) liston çfarë të bësh në vend të tyre sot.
