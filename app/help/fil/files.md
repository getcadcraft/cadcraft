---
title: Mga file: ano ang nabubuksan, ano ang nase-save
summary: Ang mga format na binubuksan, sine-save, at ine-export ng CadCraft, kung ano ang nananatili o nako-convert, at kung saan napupunta ang mga file.
keywords: xclip, clip, hangganan ng xclip, i-bind ang clipped, dwg, dxf, pdf, r12, buksan, i-save, i-export, import, format, conversion, download, saveas, dxfout, i-save bilang, i-save ang dwg, qsave, xref, xattach, naka-link na drawing, external reference, bind, i-reload, detach
from: 6d68b34e
---

## Sa isang sulyap

| Format | Buksan | I-save | Mga tala |
|---|---|---|---|
| DXF (text, anumang bersyon) | Oo | Oo, bilang DXF R12 o DXF 2000 | Hindi tinatanggap ang binary DXF: i-save muna ito bilang text DXF. |
| DWG | Oo | Oo, bilang DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 o 2018) | Binabasa at sinusulat ng sariling DWG library ng CadCraft (mga file ng AutoCAD R13 hanggang 2018). Hindi kailanman nababago ang DWG mo. Ang mga sirang file, o mga bersyong hindi kayang basahin ng reader, ay tinatanggihan na may mensahe. |
| PDF | Nagdadala ng isang pahina: bilang underlay o bilang mga object ([PDF underlays](topic:pdf-underlay)) | Oo, sa pamamagitan ng plot | Vector PDF ng isang sheet, o ng model sa isang scale. |

Ang bawat drawing na bubuksan mo (o sisimulan gamit ang {{ui:Bago}}) ay may sariling tab sa ibabaw ng drawing area; ang bagong drawing na wala pang nagagalaw ay ginagamit sa halip na magdagdag ng tab. I-click ang tab para lumipat, ang {{ui:×}} nito para isara ito (magtatanong muna ang CadCraft kung may hindi pa na-save na pagbabago), o ilatag nang magkatabi ang mga bukas na drawing: tingnan ang [Hatiin ang screen](topic:split-screen).

## Pagbubukas ng drawing

- Pindutin ang {{key:Mod+O}}, i-click ang {{ui:Buksan}}, o i-type ang `OPEN`, saka piliin ang file.
- O i-drag ang file na `.dwg` o `.dxf` papunta sa drawing area.

Binabasa ang file sa loob ng browser mo. Hindi ito ina-upload kahit saan. Ipinapakita ng history kung ilang object at layer ang pumasok at gaano katagal ito inabot, at ang seksyong {{ui:Drawing}} ng kaliwang panel ang nagpapakita ng format, halimbawa "DWG 2018 (AC1032)".

Ang DWG reader ay bahagi ng CadCraft at kinukuha kasama ng unang DWG na bubuksan mo pagkatapos mag-load ng page (ilang daang KB), kaya walang hiwalay na download na hihintayin. Binabasa nito ang file sa background, kaya patuloy na tumutugon ang page habang bumubukas ang malaking DWG.

### Ano ang pumapasok

- Linya, arko, bilog, polyline (na may arc segment), ellipse, punto, teksto at multi-line text, solid, hatch (ang mga standard pattern ay iginuguhit bilang sarili nilang linya, ang iba bilang flat na tono), block reference na may attribute (mga value na maaari mong i-edit; tingnan ang [Mga attribute ng block](topic:attributes)), dimension, at layout na may kanilang viewport.
- Ang mga spline ay pumapasok bilang spline (degree, control point, knot, weight, fit point); tingnan ang [Mga spline at polyline](topic:splines).
- Ang multileader na may isang leader line at teksto ay pumapasok bilang CadCraft multileader na maaari mong i-edit (tingnan ang {{cmd:MLEADER}}). Ang iba (may block, maraming leader line, o kurbadong linya) ay iginuguhit gaya ng pagkakaguhit ng kabilang program at gumagalaw bilang isa; sinasabi ng history kung ilan.
- Ang mga picture (image) ay lumalabas bilang frame na may pangalan ng file ng picture hanggang maibigay mo sa CadCraft ang file gamit ang {{cmd:IMAGE}}: tingnan ang [Mga picture sa drawing](topic:pictures#show-the-pictures-a-dwg-uses). Ang wipeout ay lumalabas bilang kanilang frame, at nananatiling nakikita ang nasa ilalim nila.
- Ang table sa DWG ay pumapasok gaya ng pagkakaguhit ng kabilang program.
- Ang 3D face sa model space ay pumapasok sa tab na {{ui:3D}}, hindi bilang 2D object; gayundin ang mga nasa loob ng block, isang beses sa bawat block reference sa model. Sa block at sa sheet, iginuguhit din sila nang flat, bilang outline. Tingnan ang [Model sa 3D](topic:3d-solids).
- Pinapanatili ng mga layer ang kanilang kulay, on, frozen, locked, at plot setting. Hindi kailanman nagpa-plot ang DEFPOINTS.
- Nagiging totoo at nae-edit na CadCraft dimension ang mga dimension kung saan mababasa ang kanilang mga punto. Unang ipinapakita ang mga ito nang eksakto gaya ng pagkakaguhit ng kabilang program; kapag binago mo ang isa, muling iginuguhit ito ng CadCraft sa sarili nitong istilo.
- Bawat layout ay nagiging sheet tab. Sa kabilang program, bawat layout ay may nakatagong unang viewport na siyang sheet mismo; hindi ito isinasama ng CadCraft.

### Ano ang hindi pa pumapasok

Ang anumang hindi kayang iguhit ng CadCraft ay binibilang, hindi hinuhulaan. Nakalista ito sa kahon na "Tungkol sa file na ito" sa kaliwang panel bilang "Hindi pa naipapakita:" na sinusundan ng bawat uri ng object at kung ilan ito. Mga karaniwang kaso ang table sa DXF, mesh, at 3D solid sa loob ng block. Ang 3D solid, region, at body sa model space ay lumalabas sa 3D tab (tingnan ang [Model sa 3D](topic:3d-solids#solids-from-other-programs)). Ang mga viewport na baluktot sa file ay lumalabas na nakabaluktot, gaya ng doon, at pinapanatili ang kanilang baluktot kapag nag-save ka; gayundin ang kasalukuyang UCS, ang mga named UCS, at ang nakaikot na view.

Ang teksto ay iginuguhit sa isang font na Helvetica-style. Ang label na kasya sa isang linya sa mas makitid na font ng orihinal na program ay maaaring bumalot sa dalawang linya sa CadCraft.

## Pag-save

May tatlong paraan para mag-save. Bawat isa ay nagda-download ng kopya.

- **Save**: pindutin ang {{key:Mod+S}}, i-click ang {{ui:I-save}}, o i-type ang `SAVE` (o `QSAVE`). Sine-save ito sa format ng drawing: DWG kung DWG ang binuksan mo, DXF kung DXF. Pinapanatili ng DWG ang bersyong pinanggalingan nito (ang file na 2018 ay sine-save bilang 2018). Ang bagong drawing ay gumagamit ng format at DWG version na huli mong pinili sa {{ui:I-save bilang}} sa browser na ito; kung wala ka pang napiling isa, DWG sa format ng AutoCAD 2000.
- **Save as**: pindutin ang {{key:Mod+Shift+S}}, i-click ang {{ui:I-save bilang}}, o i-type ang `SAVEAS`. Nag-aalok ang dialog na {{ui:I-save ang kopya bilang}} ng {{ui:DWG}}, may listahang {{ui:Bersyon}} (AutoCAD 2018, 2013, 2010, 2007, 2004 o 2000), {{ui:DXF R12}} at {{ui:DXF 2000}}, bawat isa kasama ang pangalan ng file na ibibigay nito, at nakapili na ang kasalukuyang format at bersyon ng drawing. I-click ang {{ui:I-save}} para mag-download, o ang {{ui:Kanselahin}} (o {{key:Esc}}) para huwag mag-save ng kahit ano; sasabihin ng history ang "Hindi na-save." Nananatili ang pinili mo: ginagamit ito ng {{key:Mod+S}} para sa drawing na ito mula noon, at ang mga bagong drawing sa browser na ito ay nagsisimula rito.
- **DXFOUT**: i-type ang `DXFOUT`. Laging nagda-download ito ng kopyang DXF R12, at ang susunod na {{key:Mod+S}} ay sine-save pa rin sa sariling format ng drawing.

Ang browser ay nagda-download ng `<drawing name>.dwg` o `<drawing name>.dxf`. Bawat save ay isang **bagong download**; hindi kailanman na-o-overwrite o nababago ang file na binuksan mo. Kinukumpirma ito ng history, halimbawa "Na-save ang kopya bilang Plan.dwg (DWG (AutoCAD 2018)). Hindi nabago ang orihinal mong Plan.dxf." Para sa DXF, sinasabi nito "(DXF R12, mabubuksan sa anumang CAD program)". Nakalista sa ilalim nito ang anumang nabago sa daan.

Kapag tumatakbo ang CadCraft sa desktop app, gumagana ang pag-save gaya ng sa ibang desktop program: isinusulat ng {{key:Mod+S}} ang drawing pabalik sa file na binuksan mo, sa sarili nitong format at bersyon, at sinasabi ng history kung saan ito na-save. Ipinapakita ng {{ui:I-save bilang}} at ng mga export ang save dialog ng sistema, at ang file na `.dwg`, `.dxf`, o `.ccsheets` na i-double-click mo ay bubuksan sa CadCraft.

Para sa PDF, i-plot ito sa halip (tingnan sa ibaba).

## Ano ang pinapanatili at binabago ng DWG

Ang CadCraft mismo ang sumusulat ng DWG sa loob ng browser mo, gamit ang parehong DWG library na ginagamit nito sa pagbasa. Piliin ang bersyon sa {{ui:I-save bilang}}: ang format ng AutoCAD 2000 (file version AC1015) ay nabubuksan sa pinakamaraming program, pati na ang mga luma; ang mas bagong format (2004, AC1018, hanggang 2018, AC1032) ay nagpapanatili rin ng true color. Walang ina-upload, at gumagana ang pag-save ng DWG offline.

Bawat bersyon ay sinusuri sa pamamagitan ng pagbasa muli ng mga na-save na file gamit ang DWG reader ng tatlong ibang program at ng CadCraft mismo. Hindi pa nabubuksan sa mismong AutoCAD ang DWG na gawa ng CadCraft.

### Ano ang pinapanatili ng DWG

- Linya, arko, bilog, ellipse, punto, at polyline na may kanilang arc segment.
- Single-line text na may alignment at width factor nito.
- Multi-line at bumabalot na teksto, bilang multi-line text. Muling binabalot ito ng kabilang program mula sa parehong lapad.
- Kulay ng object: ayon sa layer, ayon sa block, ang 255 na standard color, at true color sa format na 2004 pataas.
- Layer na may kulay, linetype, lineweight, at kanilang on, frozen, locked, at plot setting; ang sariling linetype, lineweight, at linetype scale ng mga object, ang linetype pattern, at ang linetype scale ng drawing.
- Ang drawing units at ang length format (decimal, feet at inches, fraction…).
- Block na may base point at attribute definition, kasama ang invisible, constant, at preset.
- Block reference na may scale, rotation, at attribute value.
- Solid fill, at patterned hatch na may pattern, scale, at angle (ang sariling linya ng pattern, kaya iginuguhit ng ibang program ang parehong linya na iginuguhit ng CadCraft).
- Dimension, bilang totoong dimension: sinusukat ulit ng ibang program ang mga ito kapag ini-stretch. Bawat isa ay nagpapanatili ng sarili nitong setting (taas ng teksto, laki ng arrow, decimals, length format) at teksto, at dala ang iginuhit na kopyang mayroon ang bawat DWG dimension.
- Sheet (layout): bawat sheet na may laki ng papel at units nito, ang iginuhit dito, at ang mga viewport nito na may view at scale.
- Named view.
- Multileader, bilang multileader.
- Mga pangalan ng layer at block gaya ng itinype mo, sa malaki at maliit na titik. (Isinusulat ng DXF R12 ang mga ito sa malalaking titik.)

### Ano ang binabago ng DWG

Bawat isa rito ay nakalista sa history pagkatapos mong mag-save, kapag may naaangkop sa drawing mo.

| Sa CadCraft | Sa na-save na DWG |
|---|---|
| True color (pinili gamit ang color picker), sa format na 2000 | Ang pinakamalapit na standard color: ang format na 2000 ay may 255 lang. I-save bilang 2004 o mas bago para mapanatili ang mga ito |
| Named view ng isang sheet | Paper-space view: hindi sinasabi ng DWG kung aling sheet ang mga ito; kaya kapag muling binuksan ng CadCraft ang file, nabibilang ang mga ito sa unang sheet |
| Multi-line text na may width factor | Normal na lapad ng letra: sa DWG, nalalapat lang ang width factor sa single-line text |
| Pangalan ng layer o block na may karakter na hindi pinapayagan ng DWG | Binago: ang pangalang galing sa naka-link na drawing gaya ng `Base\|Walls` ay nagiging `Base$0$Walls` (ang paraan ng pagpapangalan kapag binind ang naka-link na drawing), at ang ibang karakter ay nagiging `_` |

### Bakit R12, at ano ang nagko-convert

Kapag nag-save ka bilang DXF, isinusulat ng CadCraft ang DXF R12, ang bersyong kayang buksan ng bawat CAD program. Mas luma ito kaysa sa ilang feature, kaya may ilang bagay na isinusulat sa mas simpleng anyo:

| Sa CadCraft | Sa na-save na R12 file |
|---|---|
| Multi-line text | Isang text object bawat linya |
| Ellipse | Mga polyline na sumusunod sa ellipse |
| Hatch (mula sa mga binuksang file) | Ang kanilang outline lang |
| True color (pinili gamit ang color picker) | Ang pinakamalapit na standard color |
| Lineweight, at ang sariling linetype scale ng mga object | Iniiwan: walang lineweight at linetype scale ang R12 (napapanatili ang linetype) |
| Pangalan ng layer at block | Isinusulat sa malalaking titik; ang mga espasyo at ibang karakter ay nagiging `_`, at pinuputol ang mga pangalan sa 31 karakter ("Title block" ay nagiging `TITLE_BLOCK`) |
| Layer na nakatakdang hindi i-plot | Ipi-plot ng ibang program (naaalala ng CadCraft ang setting kapag may sheet ang drawing) |
| Dimension | Totoong dimension na may sariling iginuhit na block, kaya ipinapakita sila ng ibang program gaya ng nakikita mo |
| Multileader | Ang mga linya, arrowhead, at teksto na iginuguhit nila |
| Named view | Napapanatili, may mga pangalang nasa malalaking titik; bumabalik sa unang sheet ang mga view ng sheet |
| Ilang sheet | Ang unang sheet ang paper space na ipinapakita ng bawat program; ang iba ay pinapanatili bilang mga block na pinangalanang `CCLAYOUT_1`, `CCLAYOUT_2` … na ibinabalik ng CadCraft bilang mga sheet kapag binuksan ang file |

Nililista ng history ang bawat isa rito na naaangkop sa drawing mo.

:::tip
Para magpatuloy sa pagtatrabaho sa isang drawing sa loob ng ilang araw, i-save bilang DXF at buksan ang DXF na iyon sa susunod. Nananatili ang lahat ng kayang iguhit ng CadCraft sa round trip, kasama ang dimension, block, at lahat ng sheet.
:::

## Mga naka-link na drawing (external reference)

{{cmd:XATTACH}} (`XA`, o {{ui:Mga Block}} › {{ui:Higit pa}} › {{ui:Mag-link ng drawing (xref)}}) ay nagli-link ng ibang DWG o DXF: piliin ang file, saka i-click kung saan ito ilalagay ({{key:Enter}} ang naglalagay nito sa 0,0). Pumapasok ito bilang isang block na ipinangalan sa file, sa tamang scale kapag magkaiba ang units ng dalawang drawing. Ang mga layer at block nito ay pinapanatili ang pangalan nila na may pangalan ng link sa unahan: `Plan|Walls`, `Plan|Door`, kaya hindi sila nagkakahalo sa iyo: i-on at i-off, i-freeze, o i-lock ang mga naka-link na layer gaya ng sa sarili mo. Read-only ang link: kapag binago mo ang kabilang drawing, i-reload ito. Ang mga itinakda mo sa mga layer ng link (kulay, linetype, lineweight, on/off, freeze, lock, plot) ay napapanatili kapag nag-reload ka, kapag nag-save ka ng drawing bilang DWG habang link pa rin ang link, at kapag may ibang drawing na nagli-link sa isang ito.

{{cmd:XREF}} (`XR`): ang `?` ay naglilista ng mga link (naka-load man o hindi, aling file, ilang reference); ang `A` ay nag-a-attach; ang `R` ay nag-re-reload ng isa mula sa file nito (piliin muli ang file: hindi maabot ng browser ang mga folder mo nang mag-isa); ang `B` ay nagbi-bind ng isa (nagiging ordinaryong block at layer na pinangalanang `Plan$0$Walls`); ang `D` ay nagde-detach ng isa (mawawala ang mga reference at layer nito). Bawat isa ay isang undo step.

{{cmd:XCLIP}} (`XC`) ay pumuputol ng block reference at link: piliin ang mga ito, `N` para sa bagong boundary, saka `R` at dalawang sulok o `P` at ang mga punto ng polygon ({{key:Enter}} ang nagsasara nito); inaalis ng `D` ang clip. Tanging ang nasa loob ang nakikita at napi-plot, at gumagalaw ang clip kasama ng reference. Pinapanatili ng DWG at DXF 2000 ang mga clip; sine-save ng DXF R12 ang reference nang buo at sinasabi ito. Kapag binind mo ang link na may mga clipped reference, nagtatanong ang {{cmd:XREF}} `B`: ang `A` ay bi-bind ang lahat, ang `C` ay pinapanatili lang ang clipped na bahagi ng bawat reference (ang mga linya at arko ay pinuputol sa boundary; nananatili ang mga teksto at nested block kapag nasa loob ang kanilang insertion point).

Ang drawing na bubuksan mo ay maaaring mag-link ng mga file na hindi nakikita ng CadCraft: sinasabi nito kung ilan ang hindi na-load. Gamitin ang {{cmd:XREF}}, `R`, at piliin ang bawat file para makita ang mga ito.

Kapag nag-save ka, ang na-load na link ay **binibind** sa file (nakikita ng ibang program ang ordinaryong block at layer na pinangalanang `Plan$0$…`), at sinasabi ito ng history. Ang link na hindi na-load ay nananatiling link sa file nito, sa DWG at DXF.

## Buksan sa 3D

{{ui:View}} › {{ui:Higit pa}} › {{ui:Buksan sa ModelCraft}} ({{cmd:OPENIN3D}}) ay bumubukas ng drawing sa 3D modeling app sa bagong tab, bilang DWG, nang hindi ina-upload. Nananatili roon ang mga pagbabagong gagawin doon; i-save ang mga ito roon. Lumalabas ang menu item kung saan kayang tanggapin ng app na iyon ang ibinigay na drawing.

## Pag-plot ng PDF

Pindutin ang {{key:Mod+P}}, i-click ang {{ui:I-plot}}, o i-type ang `PLOT`. Ginagawa ang PDF sa loob ng browser at dina-download, o binubuksan sa bagong tab para i-print. Tingnan ang [I-plot sa PDF](topic:plot-pdf).

## Saan napupunta ang mga file

Bawat save at bawat plot ay isang download, kaya napupunta ang mga file kung saan inilalagay ng browser mo ang mga download: kadalasan sa folder na Downloads. Para pumili ng folder sa bawat pagkakataon, baguhin ang download setting sa browser mo; ipinapakita ng [Mga browser at computer](common:browsers) kung paano.

Walang anumang binubuksan o sine-save mo ang ipinapadala sa amin. Tingnan ang [Saan napupunta ang mga file mo](common:your-files).

## Mga project file na PLN at PLA

Nagbubukas ang CadCraft ng mga DWG at DXF na drawing, hindi ng sariling file ng Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Kapag may binuksan kang ganoon, sasabihin nito kung ano iyon. Sa Archicad, i-save ang mga view o layout na kailangan mo bilang DWG at buksan ang mga iyon dito, o i-export ang model bilang IFC at buksan ito sa BimCraft. Kapag kayang kunin ng BimCraft ang file, nag-aalok ang CadCraft ng {{ui:Buksan sa BimCraft}}.

## Kung magsara ang page bago ka mag-save

Nagtatago ang CadCraft ng kopya ng bawat drawing na binago mo, sa browser na ito lang, ilang sandali pagkatapos mong tumigil sa pag-edit. Kung magsara ang tab, huminto ang browser, o mag-restart ang computer bago ka mag-save, magtatanong ang CadCraft ng **I-recover ang trabaho mo?** sa susunod na pagsisimula nito: binubuksan ng {{ui:I-recover}} ang drawing muli, hindi pa na-save, sa sarili nitong tab. Inaalis ng pag-save ng drawing ang kopya nito. Tingnan ang [I-recover ang trabaho mo](common:recover).

## Online at offline

Ang pagbubukas, pagguhit, pag-save (DWG at DXF), at pag-plot ay nangyayari lahat sa computer mo, kaya gumagana ang mga ito nang walang koneksyon kapag na-load na ng CadCraft.

Para gamitin ang CadCraft nang walang koneksyon, i-click ang {{ui:I-save para sa offline}} sa bar sa itaas habang online ka. Nagbibilang pataas ang label ("Sine-save 40 sa 212") at nagtatapos sa "Handa offline". Kasama sa na-save na kopya ang DWG reader, humigit-kumulang 5 MB sa kabuuan, kaya **nabubuksan din offline ang mga DWG file** kapag na-save na ito. I-click muli ang button para sa {{ui:I-save ulit (kunin ang pinakabagong bersyon)}} o {{ui:Alisin ang offline copy}}. Ang "Hindi na-save" ay nangangahulugang may ilang file na hindi na-download: suriin ang koneksyon at i-click para subukan muli. Ang "Hindi available ang offline" ay nangangahulugang hindi kayang magtago ng kopya ang browser window na ito (mga private window at ilang managed computer).

Kung walang na-save na kopya, kinukuha ang DWG reader sa unang beses na magbukas ka ng DWG pagkatapos mag-load ng page, kaya maaaring pumalya ang pagbubukas ng DWG offline; hindi kailanman kailangan ng DXF ito. Huwag i-reload ang page habang offline maliban kung na-save na ang CadCraft.

Tingnan ang [Pagtatrabaho offline](common:offline) para sa detalye.

:::offline
Offline ka ngayon. Nase-save ang mga drawing bilang DWG o DXF at normal na nagpa-plot, at nabubuksan ang mga DXF file. Nabubuksan ang mga DWG file kung ipinapakita ng CadCraft ang "Handa offline", o kung na-load na ng tab na ito ang DWG reader.
:::

## Mga constraint sa mga file

Ang mga constraint at parameter (tingnan ang [Mag-constrain ng drawing](topic:constraints)) ay sine-save sa DWG at DXF pareho. Bawat constrained object ay may maliit na tala ng CadCraft (extended data), at ang isang hindi ginagamit na block na pinangalanang `CADCRAFT_PARAMETRIC` ay naglalaman ng mga constraint at ng parameter table. Binubuksan nang normal ng ibang program ang drawing at binabalewala ang pareho; maaari nilang burahin ang hindi ginagamit na block kapag nag-purge sila. Ang mga tala ay tumutukoy sa mga object sa sarili nilang key, hindi sa mga handle ng file, kaya hindi nasisira ng program na nagre-renumber ng mga handle ang mga ito. Kapag binura o binago ng ibang program ang isang constrained object, inaalis ng CadCraft ang mga constraint dito kapag binuksan nito ang file at sinasabi kung ilan. Ang file na walang ito ay bumubukas nang walang constraint.

Bumubukas din ang sketch na na-export mula sa part modeler (`.json`): tingnan ang [Ilipat ang mga sketch papunta at mula sa ibang part modeler](topic:solidworks-sketches).

## Hindi pa available

- Multileader bilang multileader object sa na-save na DXF (walang ganoon ang R12: sine-save sila bilang kung ano ang iginuguhit nila).
- Picture sa na-save na DXF (sine-save sila bilang kanilang frame; pinapanatili ng DWG ang mga ito bilang picture), at wipeout na nagtatago ng nasa ilalim nila.
- Pag-save ng mas bagong DXF version kaysa 2000.
- Cloud saving at sync sa pagitan ng mga computer.

Tingnan ang [Hindi pa nagagawa](topic:not-built-yet) para sa buong listahan.
