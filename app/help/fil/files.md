---
title: Mga file: ano ang nabubuksan, ano ang nase-save
summary: Ang mga format na binubuksan, sine-save at ine-export ng CadCraft, kung ano ang napapanatili o nakokonberte, at kung saan napupunta ang mga file.
keywords: xclip, clip, hangganan ng xclip, i-bind ang clipped, dwg, dxf, pdf, r12, buksan, i-save, i-export, i-import, format, konbersyon, i-download, saveas, dxfout, save as, i-save bilang, dwg save, format, qsave, xref, xattach, naka-link na drawing, external reference, bind, reload, i-detach
from: b8c5778d
---

## Sa madaling sabi

| Format | Buksan | I-save | Mga tala |
|---|---|---|---|
| DXF (text o binary, anumang bersyon) | Oo | Oo, bilang DXF R12, DXF 2000 o DXF 2000 (binary) | Ang binary na DXF ay bumubukas na parang text at bumabalik na binary kapag na-save. |
| DWG | Oo | Oo, bilang DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 o 2018) | Binabasa at isinusulat ng sariling DWG library ng CadCraft (mga file ng AutoCAD R13 hanggang 2018). Hindi kailanman nababago ang iyong DWG. Ang mga sirang file, o mga bersyong hindi kayang basahin ng reader, ay tinatanggihan na may mensahe. |
| PDF | Nagdadala ng isang page: bilang underlay o bilang mga object ([PDF underlays](topic:pdf-underlay)) | Oo, sa pamamagitan ng pag-plot | Vector PDF ng sheet, o ng model sa isang scale. |

Ang bawat drawing na bubuksan mo (o sisimulan gamit ang {{ui:Bago}}) ay makakakuha ng sariling tab sa ibabaw ng drawing area; ang bagong drawing na wala pang hinahawakan ay gagamitin sa halip na magdagdag ng tab. I-click ang tab para lumipat, ang {{ui:×}} nito para isara (magtatanong muna ang CadCraft kung may hindi pa na-save na pagbabago), o ilatag nang magkatabi ang mga bukas na drawing: tingnan ang [Hatiin ang screen](topic:split-screen).

## Pagbubukas ng drawing

- Pindutin ang {{key:Mod+O}}, i-click ang {{ui:Buksan}}, o i-type ang `OPEN`, pagkatapos piliin ang file.
- O i-drag ang file na `.dwg` o `.dxf` papunta sa drawing area.

Binabasa ang file sa loob ng iyong browser. Hindi itoina-upload kahit saan. Iniuulat ng history kung ilang object at layer ang pumasok at kung gaano katagal ito, at ipinapakita ng seksyong {{ui:Drawing}} ng kaliwang panel ang format, halimbawa "DWG 2018 (AC1032)".

Bahagi ng CadCraft ang DWG reader at kinukuha ito kasabay ng unang DWG na bubuksan mo pagkatapos ma-load ang pahina (ilang daang KB), kaya walang hiwalay na download na hihintayin. Binabasa nito ang file sa background, kaya patuloy na tumutugon ang pahina habang nagbubukas ang malaking DWG.

Binabasa ang DXF sa mga piraso na mga 4 MB, hindi kailanman bilang isang buong text, kaya bumubukas din ang DXF na mahigit 512 MB. Ang naglilimita ay ang memory ng iyong computer: habang nagbubukas ang DXF, asahan na gagamit ito ng humigit-kumulang 16 hanggang 20 beses ng laki ng file (ang 100 MB na DXF na may mga 690,000 object ay gumamit ng mga 1.5 GB sa aming pagsubok).

### Ano ang pumapasok

- Mga linya, arko, bilog, polyline (kasama ang arc segment), ellipse, punto, teksto at multi-line na teksto, solid, hatch (ang mga karaniwang pattern na iginuhit bilang kanilang mga linya, ang iba bilang patag na tono), block reference kasama ang kanilang mga attribute (mga value na maaari mong i-edit; tingnan ang [Mga attribute ng block](topic:attributes)), mga dimension, at mga layout kasama ang kanilang viewport.
- Ang spline ay pumapasok bilang spline (degree, control point, knot, weight, fit point); tingnan ang [Spline at polyline](topic:splines).
- Ang mga multileader na may isang leader line at teksto ay pumapasok bilang CadCraft multileader na maaari mong i-edit (tingnan ang {{cmd:MLEADER}}). Ang iba (na may block, maraming leader line o kurbadong linya) ay iginuguhit gaya ng pagguhit ng ibang programa at gumagalaw bilang iisa; sinasabi ng history kung ilan.
- Ang mga picture (image) ay ipinapakitang may frame na may pangalan ng file ng picture hanggang maibigay mo sa CadCraft ang file gamit ang {{cmd:IMAGE}}: tingnan ang [Mga picture sa drawing](topic:pictures#show-the-pictures-a-dwg-uses). Ang mga wipeout ay ipinapakita bilang kanilang frame, at nananatiling nakikita ang nasa ilalim nila.
- Ang mga table sa DWG ay pumapasok gaya ng pagguhit ng ibang programa.
- Ang mga 3D face sa model space ay pumapasok sa {{ui:3D}} tab, hindi bilang 2D object; gayundin ang mga nasa loob ng block, minsan kada block reference sa model. Sa loob ng block at sa sheet, iginuguhit din ang mga ito nang patag, bilang outline. Tingnan ang [Model sa 3D](topic:3d-solids).
- Pinapanatili ng mga layer ang kanilang kulay, on, frozen, locked at mga setting ng plot. Hindi kailanman nagpa-plot ang DEFPOINTS.
- Nagiging totoo at maaaring i-edit na dimension ng CadCraft ang mga dimension kung saan nababasa ang kanilang mga punto. Unang ipinapakita ang mga ito nang eksakto gaya ng pagguhit ng ibang programa; sa sandaling baguhin mo ang isa, muling iguguhit ito ng CadCraft sa sarili nitong estilo.
- Bawat layout ay nagiging sheet tab. Sa ibang programa, bawat layout ay may nakatagong unang viewport na siya mismo ang sheet; hindi ito isinasama ng CadCraft.

### Ano ang hindi pa pumapasok

Anumang hindi kayang iguhit ng CadCraft ay binibilang, hindi hinuhulaan. Inilalista ito ng kahong "Tungkol sa file na ito" sa kaliwang panel bilang "Hindi pa naipapakita:" kasunod ng bawat uri ng object at kung ilan ang mga ito. Mga karaniwang kaso ang mga table sa DXF, mesh, at 3D solid sa loob ng block. Ipinapakita sa 3D tab ang mga 3D solid, region at body sa model space (tingnan ang [Model sa 3D](topic:3d-solids#solids-from-other-programs)). Ang mga viewport na baluktot sa file ay ipinapakitang nakabaluktot, gaya roon, at pinananatili ang kanilang pagbaluktot kapag nag-save ka; gayundin ang kasalukuyang UCS, ang mga pinangalanang UCS at ang nakabaling view.

Iginuguhit ang teksto sa iisang font na estilong Helvetica. Ang label na kasya sa isang linya sa mas makitid na font ng orihinal na programa ay maaaring bumalot sa dalawang linya sa CadCraft.

## Pag-save

May tatlong paraan para mag-save. Bawat isa ay nagda-download ng kopya.

- **Save**: pindutin ang {{key:Mod+S}}, i-click ang {{ui:I-save}}, o i-type ang `SAVE` (o `QSAVE`). Nagse-save ito sa format ng drawing: DWG kung nagbukas ka ng DWG, DXF kung nagbukas ka ng DXF. Pinapanatili ng DWG ang bersyon na dala nito (ang file na 2018 ay nase-save bilang 2018). Ang bagong drawing ay gumagamit ng format at bersyon ng DWG na huli mong pinili sa I-save bilang sa browser na ito; kung wala ka pang napiling anuman, DWG sa format na AutoCAD 2000.
- **I-save bilang**: pindutin ang {{key:Mod+Shift+S}}, i-click ang {{ui:I-save bilang}}, o i-type ang `SAVEAS`. Nag-aalok ang dialog na {{ui:I-save ang kopya bilang}} ng {{ui:DWG}}, may listahang {{ui:Bersyon}} (AutoCAD 2018, 2013, 2010, 2007, 2004 o 2000), {{ui:DXF R12}} at {{ui:DXF 2000}}, bawat isa kasama ang pangalan ng file na ibibigay nito, at nakapili na ang kasalukuyang format at bersyon ng drawing. I-click ang {{ui:Save}} para mag-download, o ang {{ui:Kanselahin}} (o {{key:Esc}}) para huwag mag-save ng anuman; sasabihin ng history na "Hindi na-save." Ang pinili mo ay nananatili: ginagamit ito ng {{key:Mod+S}} para sa drawing na ito mula noon, at nagsisimula sa ganoon ang mga bagong drawing sa browser na ito.
- **DXFOUT**: i-type ang `DXFOUT`. Laging nagda-download ito ng kopyang DXF R12, at ang susunod na {{key:Mod+S}} ay nagse-save pa rin sa sariling format ng drawing.

Dina-download ng browser ang `<drawing name>.dwg` o `<drawing name>.dxf`. Bawat save ay isang **bagong download**; hindi kailanman na-o-overwrite o nababago ang file na binuksan mo. Kinukumpirma ito ng history, halimbawa "Na-save ang kopya bilang Plan.dwg (DWG (AutoCAD 2018)). Hindi nagbago ang orihinal mong Plan.dxf." Para sa DXF, sinasabi nito ang "(DXF R12, nabubuksan sa anumang CAD program)". Nakalista sa ilalim nito ang anumang nagbago sa daan.

Kapag tumatakbo ang CadCraft sa desktop app, gumagana ang pag-save gaya ng sa ibang desktop program: isinusulat ng {{key:Mod+S}} pabalik ang drawing sa file na binuksan mo, sa sarili nitong format at bersyon, at sinasabi ng history kung saan ito na-save. Ipinapakita ng {{ui:I-save bilang}} at ng mga export ang save dialog ng sistema, at ang file na `.dwg`, `.dxf` o `.ccsheets` na i-double-click mo ay bubukas sa CadCraft.

Para sa PDF, mag-plot na lang (tingnan sa ibaba).

## Ano ang pinapanatili at binabago ng DWG

Ang CadCraft mismo ang sumusulat ng DWG, sa loob ng iyong browser, gamit ang parehong DWG library na ginagamit nito sa pagbasa. Piliin ang bersyon sa I-save bilang: ang format na AutoCAD 2000 (file version AC1015) ay nabubuksan sa pinakamaraming program, kasama ang mga luma; ang mas bagong format (2004, AC1018, hanggang 2018, AC1032) ay nagpapanatili rin ng true colors. Walang ina-upload, at gumagana offline ang pag-save ng DWG.

Sinusuri ang bawat bersyon sa pamamagitan ng pagbabasa ng mga na-save na file gamit ang tatlong DWG reader ng ibang programa at ng CadCraft mismo. Hindi pa nabubuksan sa mismong AutoCAD ang isang DWG ng CadCraft.

### Ano ang pinapanatili ng DWG

- Mga linya, arko, bilog, ellipse, punto, at polyline kasama ang kanilang arc segment.
- Single-line na teksto kasama ang alignment at width factor nito.
- Multi-line at nakabalot na teksto, bilang multi-line na teksto. Muling binabalot ito ng ibang programa mula sa parehong lapad.
- Kulay ng object: ayon sa layer, ayon sa block, ang 255 standard na kulay, at true colors sa format na 2004 at mas bago.
- Mga layer kasama ang kanilang kulay, linetype, lineweight at ang kanilang on, frozen, locked at mga setting ng plot; ang sariling linetype, lineweight at linetype scale ng mga object, ang mga pattern ng linetype, at ang linetype scale ng drawing.
- Ang mga unit ng drawing at ang length format (decimal, talampakan at pulgada, fraction…).
- Mga block kasama ang kanilang base point at attribute definition, kasama ang nakatago, constant at preset na mga ito.
- Mga block reference kasama ang kanilang scale, rotation at attribute value.
- Solid na punan, at patterned na hatch kasama ang kanilang pattern, scale at anggulo (ang sariling linya ng pattern, kaya iginuguhit ng ibang programa ang parehong mga linyang iginuguhit ng CadCraft).
- Mga dimension, bilang totoong dimension: muling sinusukat ng ibang programa ang mga ito kapag ini-stretch. Pinapanatili ng bawat isa ang sarili nitong setting (taas ng teksto, laki ng arrow, decimal, length format) at ang teksto nito, at dala ang iginuhit na kopya na taglay ng bawat DWG dimension.
- Mga sheet (layout): bawat sheet na may laki ng papel at mga unit nito, ang iginuhit dito, at ang mga viewport nito kasama ang view at scale.
- Mga pinangalanang view.
- Mga multileader, bilang multileader.
- Mga pangalan ng layer at block gaya ng pagkaka-type mo, malaki at maliit na titik. (Isinusulat ng DXF R12 ang mga ito sa malalaking titik.)

### Ano ang binabago ng DWG

Bawat isa rito ay nakalista sa history pagkatapos mong mag-save, kapag naaangkop ito sa iyong drawing.

| Sa CadCraft | Sa na-save na DWG |
|---|---|
| True colors (pinili gamit ang color picker), sa format na 2000 | Ang pinakamalapit na standard na kulay: ang format na 2000 ay may 255 lamang. I-save bilang 2004 o mas bago para panatilihin ang mga ito |
| Mga pinangalanang view ng sheet | Paper-space na view: hindi sinasabi ng DWG kung aling sheet ang mga ito, kaya kapag muling binuksan ng CadCraft ang file, sa unang sheet na sila kabilang |
| Multi-line na teksto na may width factor | Normal na lapad ng letra: sa DWG, para lamang sa single-line na teksto ang width factor |
| Mga pangalan ng layer o block na may character na hindi pinapayagan ng DWG | Nabago: ang pangalan mula sa naka-link na drawing gaya ng `Base\|Walls` ay nagiging `Base$0$Walls` (ang paraan ng pagpapangalan kapag na-bind ang naka-link na drawing), at ang ibang character ay nagiging `_` |

### Bakit R12, at ano ang nakokonberte

Kapag nag-save ka bilang DXF, isinusulat ng CadCraft ang DXF R12, ang bersyong nabubuksan ng bawat CAD program. Mas luma ito kaysa sa ilang feature, kaya may ilang bagay na isinusulat sa mas simpleng anyo:

| Sa CadCraft | Sa na-save na R12 file |
|---|---|
| Multi-line na teksto | Isang text object bawat linya |
| Ellipse | Mga polyline na sumusunod sa ellipse |
| Hatch (mula sa mga binuksang file) | Ang kanilang outline lamang |
| True colors (pinili gamit ang color picker) | Ang pinakamalapit na standard na kulay |
| Lineweight, at sariling linetype scale ng mga object | Inalis: walang alinman sa dalawa ang R12 (pinananatili ang mga linetype) |
| Mga pangalan ng layer at block | Isinusulat sa malalaking titik; ang mga espasyo at ibang character ay nagiging `_`, at pinuputol sa 31 character ang mga pangalan ("Title block" ay nagiging `TITLE_BLOCK`) |
| Mga layer na nakatakdang hindi mag-plot | Ipa-plot ng ibang programa ang mga ito (naaalala ng CadCraft ang setting kapag may sheet ang drawing) |
| Mga dimension | Totoong dimension na may sarili nilang iginuhit na block, kaya ipinapakita ng ibang programa ang mga ito gaya ng nakikita mo |
| Mga multileader | Ang mga linya, arrowhead at teksto na iginuguhit nila |
| Mga pinangalanang view | Pinananatili, na may pangalan sa malalaking titik; bumabalik sa unang sheet ang mga view ng sheet |
| Maraming sheet | Ang unang sheet ang paper space na ipinapakita ng bawat programa; ang iba ay pinananatili bilang mga block na may pangalang `CCLAYOUT_1`, `CCLAYOUT_2` … na ibinabalik ng CadCraft na mga sheet kapag binuksan ang file |

Inililista ng history ang bawat isa rito na naaangkop sa iyong drawing.

:::tip
Para magpatuloy sa pagtatrabaho sa isang drawing sa loob ng ilang araw, i-save bilang DXF at buksan ang DXF na iyon sa susunod. Lahat ng kayang iguhit ng CadCraft ay nananatili sa buong ikot, kasama ang mga dimension, block at lahat ng sheet.
:::

## Mga naka-link na drawing (external reference)

Ang {{cmd:XATTACH}} (`XA`, o {{ui:Mga Block}} › {{ui:Higit pa}} › {{ui:Mag-link ng drawing (xref)}}) ay nagli-link ng ibang DWG o DXF: piliin ang file, pagkatapos i-click kung saan ito ilalagay ({{key:Enter}} ay inilalagay ito sa 0,0). Pumapasok ito bilang isang block na ang pangalan ay galing sa file, sa tamang scale kapag magkaiba ang unit ng dalawang drawing. Pinapanatili ng mga layer at block nito ang kanilang pangalan, na may pangalan ng link sa unahan — `Plan|Walls`, `Plan|Door` — kaya hindi sila nagkakahalo sa iyo: i-on at i-off, i-freeze o i-lock ang mga naka-link na layer gaya ng sa sarili mo. Read-only ang link: baguhin ang ibang drawing at i-reload ito. Ang anumang itinakda mo sa mga layer ng link (kulay, linetype, lineweight, on/off, freeze, lock, plot) ay napapanatili kapag nire-reload mo ito, kapag nag-save ka ng drawing bilang DWG habang link pa rin ito, at kapag ibang drawing ang nag-link dito.

Ang {{cmd:XREF}} (`XR`): `?` ang naglilista ng mga link (naka-load man o hindi, anong file, ilang reference); `A` ang nag-a-attach; `R` ang nagre-reload ng isa mula sa file nito (piliin muli ang file: hindi maaabot ng browser ang mga folder mo nang mag-isa); `B` ang nag-b-bind ng isa (nagiging ordinaryong block at layer na pinangalanang `Plan$0$Walls`); `D` ang nagde-detach ng isa (mawawala ang mga reference at layer nito). Bawat isa ay isang undo step.

Ang {{cmd:XCLIP}} (`XC`) ay nag-c-clip ng mga block reference at link: piliin ang mga ito, `N` para sa bagong boundary, pagkatapos `R` at dalawang sulok o `P` at ang mga punto ng polygon ({{key:Enter}} ang nagsasara nito); `D` ang nag-aalis ng clip. Tanging ang nasa loob ang nakikita at nai-plot, at gumagalaw ang clip kasama ng reference. Pinapanatili ng DWG at DXF 2000 ang mga clip; buong isinasave ng DXF R12 ang reference at sinasabi ito. Kapag nag-bind ka ng link na may mga naka-clip na reference, nagtatanong ang {{cmd:XREF}} `B`: `A` ang nagbi-bind ng lahat, `C` ang nagpapanatili lamang ng naka-clip na bahagi ng bawat reference (ang mga linya at arko ay pinuputol sa hangganan; nananatili ang mga teksto at nested block kapag nasa loob ang insertion point nila).

Maaaring may naka-link ang drawing na binuksan mo na hindi makikita ng CadCraft; sinasabi nito kung ilan ang hindi na-load. Gamitin ang {{cmd:XREF}}, `R` at piliin ang bawat file para makita ang mga ito.

Kapag nag-save ka, ang naka-load na link ay **nira-bind** sa file (nakikita ng ibang programa ang mga ordinaryong block at layer na pinangalanang `Plan$0$…`), at sinasabi ito ng history. Ang link na hindi naka-load ay nananatiling link sa file nito, sa DWG at DXF.

## Buksan sa 3D

{{ui:View}} › {{ui:Higit pa}} › {{ui:Buksan sa ModelCraft}} ({{cmd:OPENIN3D}}) ang nagbubukas ng drawing sa 3D modeling app sa bagong tab, bilang DWG, nang hindi ina-upload. Ang mga pagbabagong ginawa roon ay mananatili roon; i-save ang mga ito roon. Makikita ang item ng menu kung saan lamang tumatanggap ng ipinasa na drawing ang app na iyon.

## Pag-plot ng PDF

Pindutin ang {{key:Mod+P}}, i-click ang {{ui:I-plot}}, o i-type ang `PLOT`. Ginagawa ang PDF sa loob ng browser at dina-download, o binubuksan sa bagong tab para sa pag-print. Tingnan ang [I-plot sa PDF](topic:plot-pdf).

## Kung saan napupunta ang mga file

Bawat save at plot ay isang download, kaya napupunta ang mga file kung saan inilalagay ng browser ang mga download: kadalasan sa folder na Downloads. Para pumili ng folder sa bawat pagkakataon, baguhin ang setting ng download sa browser mo; ipinapakita ng [Mga browser at computer](common:browsers) kung saan ito.

Walang ipinapadala sa amin ang anumang binubuksan o sine-save mo. Tingnan ang [Saan napupunta ang iyong mga file](common:your-files).

## Mga PLN at PLA project file

Hindi binubuksan ng CadCraft ang sariling file ng Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`), kundi DWG at DXF lamang. Kapag may binuksan kang isa, sinasabi nito kung ano ito. Sa Archicad, i-save bilang DWG ang mga view o layout na kailangan mo at buksan ang mga iyon dito, o i-export ang model bilang IFC at buksan ito sa BimCraft. Kapag kayang tanggapin ng BimCraft ang file, nag-aalok ang CadCraft ng {{ui:Buksan sa BimCraft}}.

## Kung nagsara ang pahina bago ka mag-save

Nagtatago ang CadCraft ng kopya ng bawat drawing na binago mo, sa browser na ito lamang, ilang sandali pagkatapos mong huminto sa pag-edit. Kung magsara ang tab, huminto ang browser o mag-restart ang computer bago ka mag-save, magtatanong ang CadCraft ng **I-recover ang iyong trabaho?** sa susunod na pagbukas nito: bubuksan muli ng {{ui:I-recover}} ang drawing, hindi pa na-save, sa sarili nitong tab. Kapag na-save ang drawing, mawawala ang kopya nito. Tingnan ang [I-recover ang iyong trabaho](common:recover).

## Online at offline

Ang pagbubukas, pagguhit, pag-save (DWG at DXF) at pag-plot ay nangyayari lahat sa iyong computer, kaya gumagana ang mga ito nang walang koneksyon kapag na-load na ang CadCraft.

Para magamit ang CadCraft nang walang anumang koneksyon, i-click ang {{ui:I-save para sa offline}} sa bar sa itaas habang online ka. Bibilang pataas ang label ("Sine-save 40 sa 212") at magtatapos sa "Handa offline". Kasama sa na-save na kopya ang DWG reader, mga 5 MB sa kabuuan, kaya **nabubuksan din offline ang mga DWG file** kapag na-save na ito. I-click muli ang button para sa {{ui:I-save ulit (kunin ang pinakabagong bersyon)}} o {{ui:Alisin ang offline copy}}. Ang "Could not save" ay nangangahulugang may hindi na-download na file: tingnan ang koneksyon at i-click para subukan muli. Ang "Offline not available" ay nangangahulugang hindi kayang magtago ng kopya ng window ng browser na ito (mga private window at ilang managed na computer).

Kapag walang na-save na kopya, ang DWG reader ay kinukuha sa unang beses na magbukas ka ng DWG pagkatapos ma-load ang pahina, kaya maaaring pumalpak ang pagbubukas ng DWG offline; hindi kailanman kailangan ng DXF ang reader na iyon. Huwag i-reload ang pahina habang offline maliban kung na-save na ang CadCraft.

Tingnan ang [Pagtatrabaho nang offline](common:offline) para sa mga detalye.

:::offline
Offline ka ngayon. Nase-save ang mga drawing bilang DWG o DXF at normal na nagpa-plot, at bumubukas ang mga DXF file. Bumubukas ang mga DWG file kapag ipinakita ng CadCraft ang "Handa offline", o kung na-load na ng tab na ito ang DWG reader.
:::

## Mga constraint sa mga file

Ang mga constraint at parameter (tingnan ang [Constrain ang isang drawing](topic:constraints)) ay nase-save sa DWG at DXF. May kaunting CadCraft na tala (extended data) ang bawat constrained na object, at ang isang hindi ginagamit na block na pinangalanang `CADCRAFT_PARAMETRIC` ay naglalaman ng mga constraint at talahanayan ng parameter. Binubuksan ng ibang programa ang drawing nang normal at binabalewala ang pareho; maaari nilang burahin ang hindi ginagamit na block kapag nag-purge sila. Ang mga tala ay tumutukoy sa mga object gamit ang sarili nilang key, hindi ang mga handle ng file, kaya hindi ito masisira ng program na nire-renumber ang mga handle. Kapag binura o binago ng ibang programa ang isang constrained na object, inaalis ng CadCraft ang mga constraint dito sa pagbukas ng file at sinasabi kung ilan. Ang file na walang mga ito ay bumubukas nang walang constraint.

Bumubukas din ang sketch na in-export mula sa part modeler (`.json`): tingnan ang [Ilipat ang mga sketch papunta at mula sa ibang part modeler](topic:solidworks-sketches).

## Hindi pa available

- Mga multileader bilang multileader object sa na-save na DXF (walang ganoon ang R12: sine-save ang mga ito bilang kung ano ang iginuguhit nila).
- Mga picture sa na-save na DXF (sine-save ang mga ito bilang kanilang frame; pinapanatili ng DWG ang mga ito bilang picture), at mga wipeout na nagtatago ng nasa ilalim nila.
- Pag-save ng mas bagong DXF na bersyon kaysa 2000.
- Cloud saving at sync sa pagitan ng mga computer.

Tingnan ang [Hindi pa nagagawa](topic:not-built-yet) para sa kumpletong listahan.
