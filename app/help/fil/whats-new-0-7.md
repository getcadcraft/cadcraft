---
title: Ano ang bago sa 0.7 (mas maaga)
summary: PDF underlay at pag-import ng PDF, mga na-scan na drawing na may awtomatikong trace, totoong spline gamit ang SPLINE, SPLINEDIT at PEDIT, isang tagapamahala ng dimension style, tekstong nagpapanatili ng format nito, WBLOCK at sarili mong mga scale, mga 3D solid mula sa ibang program, pag-rehistro ng mga scan, isang panel ng Laser, USD export, History at pag-print sa CadCraft Studio, isang gabay na unang drawing, ang toolbar sa alinmang gilid o sa mas kaunting row, at marami pa para sa mga AI assistant.
keywords: ano ang bago 0.7, naunang release, release notes, changelog, mga pagbabago, 0.7, bersyon, mga bagong feature, pdf, pdfattach, pdfimport, underlay, scan, scanattach, scantrace, trace, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatting, wblock, scalelistedit, listahan ng scale, acis, 3d solids, registerscans, register scans, icp, e57, las, laser, grbl, g-code, usd, usdout, history, versions, compare, print, printer, png, svg, plot style, linetype, tour, cheat sheet, command map, posisyon ng toolbar, mga row ng toolbar, toolbardock, regen, regenall, trackpad, swipe, code page, cyrillic, korean, chinese, japanese, electrical, rcd, p&id, pid, acad.lsp, acaddoc.lsp, support folder, assistants, mcp, mga unit, portuguese
from: d07ca034
---

Ito ang mga nagbago sa CadCraft 0.7, kumpara sa 0.6. Marami rito ay hiniling sa Discord. Nakapangkat ang listahan ayon sa bahagi, at nauuna ang pinakamahalaga.

## Bago

### Mga PDF at na-scan na drawing

- **Maglagay ng pahina ng PDF sa ilalim ng drawing.** Naglalagay ang {{cmd:PDFATTACH}} (`PDFATT`) ng pahina sa totoong laki nito o sa scale na itina-type mo. Mag-snap sa mga linya nito, gawing malabo ito, gawing monochrome ({{cmd:PDFADJUST}}), i-clip ({{cmd:PDFCLIP}}), at palitan ang sariling layer ng PDF ({{cmd:PDFLAYERS}}). Nagp-plot ito bilang mga linya, fill at teksto, at pinananatili ng DWG o DXF 2000 ito bilang link sa file. Kapag nagbukas ka ng PDF gamit ang {{ui:Buksan}}, itinatanong kung i-attach o i-import ito. Tingnan ang [PDF underlay at pag-import ng PDF](topic:pdf-underlay).
- **Gawing mga object ng drawing ang pahina ng PDF.** Ginagawa ng {{cmd:PDFIMPORT}} (`PDFIM`) ang mga linya, polyline, bilog, arko, solid na hatch at teksto sa mga layer na ipinangalan sa PDF, sa totoong laki, sa na-type na scale, o sukat mula sa dalawang punto at totoong distansya, sa iisang hakbang na puwedeng i-undo. Tingnan ang [Mag-import ng pahina](topic:pdf-underlay#import-a-page).
- **Mga na-scan na drawing.** Ikinakarga ng {{cmd:SCANATTACH}} ang PNG, JPEG o TIFF (isang pahina o lahat ng ito) o pahina ng PDF na larawan. Pagkatapos, i-scale ito mula sa dalawang punto ({{cmd:SCANSCALE}}), i-align ({{cmd:SCANALIGN}}), itama ang anggulo mula sa sarili nitong mahahabang linya ({{cmd:SCANDESKEW}}), gawing itim at puti at alisin ang mga tuldok ({{cmd:SCANCLEAN}}), i-crop, at burahin ang mga bahagi nito. Isang hakbang na puwedeng i-undo ang bawat isa, at nananatili ang orihinal na file. Tingnan ang [Mga na-scan na drawing at ang trace](topic:scanned-drawings).
- **I-trace ang scan sa mga linya at arko.** Iginuguhit ng {{cmd:SCANTRACE}} ang mga linya ng scan bilang mga linya at arko sa bagong layer, SCAN-TRACE, ayon sa toleransyang itinakda mo, at iniiwan ang teksto at hatching gaya ng mga ito. Sinasabi ng ulat kung ano ang nagawa nito at kung ano ang iniwan, at hindi ito pagsasabing tama ang resulta: suriin ito laban sa sheet. Pinapahintulutan ng {{cmd:RASTERSNAP}} ang mga object snap na hanapin ang mga dulo, sulok at tawiran ng scan. Walang ipinapadala kahit saan at walang trained na model na ginagamit. Tingnan ang [Ang trace](topic:scanned-drawings#the-trace).

### Pagguhit at pag-edit

- **Totoong spline.** Gumuguhit ang {{cmd:SPLINE}} (`SPL`) ng kurba sa mga punto o mula sa control point (degree 1 hanggang 5), na may dulong tangent. Ang {{cmd:SPLINEDIT}} (`SPE`) ay naglilipat, nagdaragdag at nagbubura ng fit o control point, nagtatakda ng weight, nagbubukas, nagsasara, nagbabaliktad, o ginagawang polyline ang spline. Nagbubukas bilang spline ang mga spline mula sa mga file na DWG at DXF, at sine-save ng DWG at DXF 2000 ang mga ito bilang spline. Tingnan ang [Mga spline at polyline](topic:splines).
- **PEDIT.** Isinasara at binubuksan ng {{cmd:PEDIT}} (`PE`) ang mga polyline, ikinakabit dito ang mga linya at arko, nagtatakda ng iisang lapad, nagkakabit ng kurba sa mga vertex o spline sa kahabaan nito at binabawi ito gamit ang Decurve, nagbabaliktad, at nag-e-edit ng ilan nang sabay. Tingnan ang [I-edit ang polyline](topic:splines#edit-a-polyline).
- **WBLOCK.** Isinusulat ng {{cmd:WBLOCK}} (`W`) ang isang block, ilang object o ang buong drawing sa bagong DWG o DXF na naglalaman lamang ng mga layer, style at block na ginagamit nila. Tingnan ang [Sumulat ng block o mga object sa sariling file](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN at REGENALL.** Muling iginuguhit ng {{cmd:REGEN}} (`RE`) ang tab na kinaroroonan mo mula sa drawing, at ng {{cmd:REGENALL}} (`REA`) ang bawat tab, pane at bukas na drawing. Tingnan ang [REGEN at REGENALL](topic:commands#regen-and-regenall).

### Teksto at dimension

- **Napapanatili ng teksto ang format nito.** Pinapanatili ng paragraph text mula sa ibang program ang kulay bawat salita, bold at italic, underline, mga stacked na fraction at taas. Iginuguhit ang mga ito sa screen at sa mga PDF, napapanatili kapag in-edit mo ang mga salita, at ibinabalik sa pag-save. Tingnan ang [Format sa loob ng paragraph text mula sa ibang program](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Tagapamahala ng dimension style.** Gumagawa, nagbabago, naghahambing at naglalapat ang {{cmd:DIMSTYLE}} (`D`) ng mga pinangalanang dimension style; kapag binago ang isang style, nagbabago ang bawat dimension na gumagamit nito. Ibinabalik ng {{cmd:DIMEDIT}} (`DED`) ang teksto, nagta-type ng bagong teksto, pinapaikot ito o pinapahilig ang extension line; inililipat ng {{cmd:DIMTEDIT}} ang teksto sa kaliwa, kanan o sa gitna. Tingnan ang [Mga pinangalanang dimension style](topic:dimension-settings#named-dimension-styles).
- **Sarili mong scale.** Nagdaragdag ang {{cmd:SCALELISTEDIT}} (`SCALELIST`) ng mga scale gaya ng 1:75 sa listahan ng scale ng viewport at plot. Nise-save ang mga ito sa drawing (DWG at DXF 2000), at may sariling listahan ang drawing mula sa ibang program. Tingnan ang [Mga scale](topic:units-papers-scales#scales).
- **Teksto sa ibang alpabeto.** Nagbubukas na ngayon nang may kanilang teksto ang mga file na DXF na naka-save sa code page na Cyrillic, Korean, Chinese, Japanese o Vietnamese, at naipi-print sa mga PDF ang tekstong Chinese, Japanese at Korean (kumukuha ang plot ng mas malaking font sa unang beses na kailangan nito). Tingnan ang [Font](topic:text#font).

### Pag-plot at pag-print

- **Higit pa sa plot style table.** Para sa bawat kulay, puwede na ring itakda ng table ang linetype, ang dulo ng linya at ang pagdudugtong ng linya, at isang fill style na nagpi-print ng solid na fill bilang hatch line. May sariling listahan ng lineweight at linetype scale ang table. Tingnan ang [Mga plot style table](topic:plot-pdf#plot-style-tables).
- **Print, at mga file na PNG at SVG.** May {{ui:I-print…}}, {{ui:I-download ang PNG}} (300 dpi) at {{ui:I-download ang SVG}} ang dialog ng Plot. Sa CadCraft Studio, inililista nito ang mga printer ng computer, ang papel nito at ang bilang ng kopya. Tingnan ang [Print](topic:plot-pdf#print) at [Larawan at mga file na SVG](topic:plot-pdf#picture-and-svg-files).

### 3D at point cloud

- **3D solid mula sa ibang program.** Lumalabas ang mga solid, region at body sa model space ng drawing sa 3D tab, read-only, at ang pag-save bilang DWG ay isinusulat ang mga ito pabalik nang hindi nagbabago. Nakalista, hindi hinuhula, ang mga face sa surface na hindi pa iginuguhit ng CadCraft. Tingnan ang [Mga solid mula sa ibang program](topic:3d-solids#solids-from-other-programs).
- **I-rehistro ang maraming scan.** Inilalagay ng {{cmd:REGISTERSCANS}} (`REGSCAN`) ang mga scan na kinuha mula sa iba't ibang posisyon sa iisang frame, ayon sa pares ng punto o na-type na target na coordinate. Pinipino ang mga ito gamit ang ICP, sine-save ang rehistro bilang maliit na project file, at isinusulat ang nairehistrong cloud bilang isang file na LAS o E57. Tingnan ang [I-rehistro ang maraming scan sa iisa](topic:register-scans).
- **Export sa USD.** Isinusulat ng {{cmd:USDOUT}}, o ng {{cmd:EXPORT3D}} › {{ui:USD}}, ang mga solid ng 3D tab bilang `.usda`, `.usdc` o `.usdz`. Tingnan ang [I-export ang 3D model bilang USD](topic:usd).
- **Mga kalkulasyon sa 3D tab.** Kung saan humihingi ng distansya ang mga tool ng 3D tab, puwede kang mag-type ng kalkulasyon, gaya sa command line. Tingnan ang [Aritmetika sa na-type na value](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Paggawa

- **Ipadala ang drawing sa laser.** Ang {{cmd:LASER}}, o ang {{ui:View}} › {{ui:Higit pa}} › {{ui:Laser…}}, ay nagbubukas ng panel sa ibabaw ng drawing: bawat layer ay puputulin, mamarkahan, ii-engrave ang mga linya, pupunuin ang mga hugis, ii-engrave ang larawan, o hindi ipapadala, kasama ang lakas, bilis at pass nito. Sinusundan ng preview ang mga edit mo, isinusulat ng {{ui:I-save ang G-code…}} ang G-code ng GRBL laser-mode, at sa Chrome o Edge, puwedeng i-frame ng panel ang trabaho at ipadala ito sa pamamagitan ng USB. Nise-save ang mga setting sa drawing (DWG at DXF). Tingnan ang [Ipadala ang drawing sa laser](topic:laser-cutting).
- **Mga simbolo ng installation ng gusali sa Electrical add-on.** Mga outlet ng data, telepono at TV, key at time switch, thermostat, exit sign, detector, call point at sounder, fan, water heater, cooker, EV charging point, energy meter at sub-board, at mga simbolo ng RCD at RCBO. Puwedeng magdala ng RCD ang isang circuit, may kolum ng RCD ang panel schedule, at pinangalanan ng mga check ang socket circuit na walang RCD na 30 mA o mas mababa. Paalala sa pagpaplano ito, hindi pagsusuri ng code.
- **Add-on na P&ID.** Gumuguhit ang P&ID ng process diagram: mga simbolo na may connection point, process at signal line, tag, numero ng linya, listahan ng linya, equipment, instrument at valve (CSV o workbook) at mga check. Kasama ito ng CadCraft at naka-off hanggang i-on mo ito sa {{ui:Mga setting}} › {{ui:General}} › {{ui:Mga Add-on}}. Tulong ito sa drafting, hindi pag-apruba sa engineering, at English lamang muna ang mga salita nito.

### Pagsisimula at ang screen

- **Gabay na unang drawing.** Ginagabayan ka ng {{cmd:TOUR}} (o ang {{ui:Simulan ang tour}} sa start card) sa anim na hakbang sa totoong drawing: isang linya, isang bilog, isang paglipat, isang trim, isang pagbura at isang dimension. Kusa itong nagsisimula sa unang pagbukas ng CadCraft na walang laman. Tingnan ang [Gusto mo bang may gabay?](topic:getting-started#prefer-to-be-guided)
- **Cheat sheet at mapa ng command.** Nasa isang pahina ang 40 karaniwang command sa [cheat sheet](topic:cheat-sheet), at may PDF din itong maaaring i-print. Ang [mapa ng command](topic:command-map) ay naglilista ng mga command kasama ang maikling pangalan nila, mula A hanggang Z.
- **Toolbar sa alinmang gilid.** {{ui:Mga setting}} › {{ui:CadCraft}} › {{ui:Posisyon ng toolbar}}: sa itaas (gaya ng dati), sa ibaba, sa kaliwa o sa kanan, o i-type ang {{cmd:TOOLBARDOCK}}. Tingnan ang [Posisyon ng toolbar](topic:settings#toolbar-position).
- **Mga row ng toolbar.** {{ui:Mga setting}} › {{ui:CadCraft}} › {{ui:Mga row ng toolbar}}: bumalot para magkasya, 2 row o 1 row, para sa toolbar ng CadCraft at sa istilong Drafting classic at Ribbon. Dinadaanan ng {{key:Shift+Ctrl+F1}} ang mga ito, ng {{key:Ctrl+F1}} ang ipinapakita ng mga button, at itinatakda ang mga ito ng {{cmd:TOOLBARROWS}} at {{cmd:TOOLBAR}}. May close button ang start hint. Salamat kay GJoe2, na nagpadala nito bilang pull request. Tingnan ang [Mga row ng toolbar](topic:settings#toolbar-rows).

### Sa CadCraft Studio

- **History.** {{cmd:HISTORY}} (`HIST`), o {{ui:View}} › {{ui:Higit pa}} › {{ui:History…}}: ang mga kopyang iniingatan ng Studio kapag binubuksan at sine-save mo ang drawing, at ang mga cloud version ng drawing kapag binuksan mo ito mula sa cloud. Magbukas o magbalik ng isa, o maghambing ng dalawa, na ipinapakita sa kulay ang idinagdag, inalis at binago. Tingnan ang [History](topic:history).
- **acad.lsp at acaddoc.lsp.** Pumili ng support folder sa {{cmd:APPLOAD}}: ikinakarga ang dalawang file na iyon kapag nagsimula ang CadCraft (muling ikinakarga ang acaddoc.lsp para sa bawat bagong tab ng drawing), at tumatakbo ang `S::STARTUP` pagkatapos ng mga ito. Tingnan ang [Mag-load ng mga application](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Ang dialog ng Plot sa sarili nitong window.** Ang isang button sa title bar nito ay inililipat ito sa isang window na maaari mong ilagay sa ibang monitor. Tingnan ang [Ilipat ang dialog](common:arrange-panels#move-a-dialog).

### Para sa mga AI assistant

- **Mga file ayon sa pangalan, sa mga folder na pipiliin mo.** Sa CadCraft Studio, puwedeng magbukas, mag-save at mag-plot ng mga file ayon sa pangalan ang assistant, at magbigay sa command ng file na hinihingi nito (INSERT mula sa file, export ng COUNT, SAVEAS, PLOT), pero sa loob lamang ng mga folder na idadagdag mo sa ilalim ng {{ui:Mga setting}} › {{ui:CadCraft}} › {{ui:Mga Assistant}} › {{ui:Mga folder na maaari nitong gamitin}}. Tingnan ang [Hayaan itong gumamit ng mga file sa mga folder na pipiliin mo](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Mas kaunting tawag.** Puwedeng mag-type ng buong command line nang sabay-sabay ang assistant, panatilihing bukas ang isang command sa pagitan ng mga tawag nito, magbilang ng object ayon sa uri at layer nang hindi sila nililista, at maglagay ng block kasama ang mga value ng attribute nito sa isang hakbang.
- **Nang walang window.** Nagsusulat ng SVG plot at nagko-convert, nagp-plot, nagsusuri o naglalarawan ng maraming file nang sabay-sabay ang command line na `cadcraft`. Hindi pa nailalathala ang MCP package. Tingnan ang [Gumawa sa mga file nang hindi binubuksan ang CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Mga binago

- **Pumapan ang trackpad.** I-galaw ang dalawang daliri sa trackpad at susundan ng 2D view ang mga ito. Ang pinch at ang gulong ng mouse ang nagzo-zoom. Tingnan ang [Mouse, trackpad at touch](topic:mouse-trackpad-touch).
- **Napapanatili ang mga OLE object.** Lumalabas ang mga naka-embed na object ng DXF bilang larawan nila o bilang may label na frame, at ibinabalik sa pag-save ng DXF 2000. Napapanatili ang sa DWG at isinusulat pabalik kapag nag-save ka bilang DWG, pero hindi pa ipinapakita. Dati, nawawala ang mga ito sa pag-save. Tingnan ang [Mga object mula sa ibang program (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Ang mga unit ng bagong drawing** ay sumusunod sa unit na i-star mo sa {{ui:Mga setting}} › {{ui:General}} › {{ui:Mga unit}}.

## Naayos

- Ang mga layout na nagbubukas na walang laman, o nawalan ng viewport at nagpakita ng buong modelo sa lugar nito, ay nagbubukas na ngayon kasama ang totoo nilang viewport. Pinananatili ang layout na walang link sa mga nilalaman nito, at sinasabi ito ng ulat sa pagbubukas.
- Ang mga file na DXF sa mas lumang code page ay nagpakita ng sirang tekstong Cyrillic at Korean. Tama na ang pagbasa ng mga ito ngayon.
- Nawawala ang format ng paragraph text mula sa ibang program kapag binuksan, at na-save pabalik na payak.

## Sa bawat app

- **Mga unit.** Ang {{ui:Mga setting}} › {{ui:General}} › {{ui:Mga unit}} ay may isang listahan para sa haba, lawak, volume, anggulo at slope, na may eksaktong laki ayon sa kahulugan ng mga unit (ang US survey foot ay sarili nitong unit). Patayin ang mga unit na hindi mo kailanman ginagamit at aalisin sila sa mga listahan ng unit; i-star ang isa at magsisimula ang bagong gawa rito. Laging pinapanatili ng isang file ang sarili nitong unit. Sa CadCraft, itinatakda ng star ang mga unit ng bagong drawing kapag ito ay unit na kayang dalhin ng drawing. Hindi pa sumusunod sa mga switch ang sarili nitong kahon ng {{ui:Mga unit}} ng CadCraft. Kapag may unit na ang drawing, puwedeng dalhin ng haba na ita-type mo ang marka ng kahit anong unit. Tingnan ang [Mga unit, na-type na value at mga listahan ng unit](common:unit-lists).
- **Mas siksik na layout at mga panel na nagliligpit sa sarili.** Mas maraming magkakasya sa screen ang {{ui:Mga setting}} › {{ui:General}} › {{ui:Density ng layout}} › {{ui:Compact}} (nananatili ang malalaking button ng mga touch screen at telepono). May makitid na title bar ang bawat side panel: i-drag ito para i-dock o gawing lumulutang ang panel, ihulog ito sa bar ng ibang panel para magbahagi ng isang frame bilang mga tab, i-pin ito para madulas palabas sa gilid, o itago ito at ibalik mula sa gilid. Tingnan ang [Ayusin ang mga panel](common:arrange-panels#make-the-layout-denser).
- **Gumagalaw ang mga dialog.** I-drag ang dialog sa pamamagitan ng title bar nito palayo sa drawing; bumabalik ito sa pinanggalingan mo. I-double-click ang title bar para ibalik sa gitna. Tingnan ang [Ilipat ang dialog](common:arrange-panels#move-a-dialog).
- **Mga recipe para sa AI assistant.** Sampung halimbawang hiling para sa sarili mong assistant (ayusin ang drawing, mag-plot ng set, suriin ang mga drawing, magtanong sa model, pagsamahin ang takeoff, subukan ang variant ng part…), bawat isa ay may tool na tinatawag nito at pahintulot na kailangan, at bawat isa ay inuulit ng aming mga test. Walang AI ang mga app. Tingnan ang [Mga recipe para sa AI assistant](common:assistants-recipes).
- **Mga wika.** Ang **Português (Portugal)** ay bago sa {{ui:Mga setting}} › {{ui:General}} › {{ui:Wika}}. Ito, ang **Português (Brasil)**, **Español (México)** at **Bahasa Indonesia** ay mayroon na ngayong bawat salita ng mga app, bilang mga draft na hindi pa nasusuri ng katutubong nagsasalita. Nasa Ingles ang mga paksa ng tulong.
- **Sinasabi ng CadCraft Studio** kung bakit nabigo ang pagsusuri ng update (wala pang file para sa iyong system, walang network, maling signature) sa halip na "Tapos na" lamang, at hindi na ibinabalik ang card na Ano ang bago na isinara mo hanggang may mas bagong release.

## Wala pa sa bersyong ito

- **Hindi naka-code-sign ang 0.7.** Inilipat sa 0.8 ang pag-sign at ang package ng Microsoft Store, dahil hindi pa dumarating ang pagpapatunay ng sertipiko. Suriin ang SHA-256 sa tabi ng bawat file sa getcadcraft.com/download. Sa Windows, kung pinipigilan ng SmartScreen ang installer, piliin ang {{ui:Higit pang impormasyon}}, saka {{ui:Patakbuhin pa rin}}. Sa Mac, sa unang pagkakataon, i-right-click ang CadCraft Studio at piliin ang {{ui:Buksan}}. Wala pa sa app store ang CadCraft Studio, at wala pang build para sa iPad o iPhone.
- Naka-save ang mga listahan ng anggulo at slope sa {{ui:Mga unit}}, pero wala pang kahon na bumabasa nito.
- Napapanatili ang mga OLE object ng DWG pero hindi ipinapakita, at hindi iginuguhit ang mga metafile na larawan sa loob ng mga OLE object.
- Naghihintay ng sample file ang pagbasa ng mga plot style table (CTB file) mula sa ibang program.
- Nababasa ang mas lumang tekstong Asian na nakasulat bilang code na `\M+`, pero hindi pa ito nasusuri laban sa file mula sa ibang program.
- PDF underlay: ipinapakita sa screen ang mga larawan sa loob ng pahina pero hindi naipi-plot. Hindi isinasama ng plot ng assistant ang mga underlay, at hindi pa nasusuri kung paano binabasa ng ibang program ang na-save na clip at scale.
- History: hindi pa nagpapadala ng mga save sa cloud ang CadCraft, kaya ang mga cloud version ay yaong na-save mula sa ibang device at sa web. Nasa CadCraft Studio lamang ang History.
- Hindi pa nasusuri kung pinapanatili ng Studio ang support folder na acad.lsp pagkatapos mag-restart. Kung humingi ito, piliin muli ang folder sa APPLOAD.
- Hindi pa nasusubukan ang panel ng Laser sa totoong laser: subukan ang bawat setting sa scrap. Walang Web Serial ang CadCraft Studio, kaya sa Studio, G-code lamang ang sine-save ng panel.
- Nasubukan ang pag-rehistro ng scan sa mga gawa-gawang scan, hindi pa sa totoong set ng scanner.
- Nasubukan ang two-finger panning sa mga simulate na trackpad event, hindi pa sa totoong trackpad.
- Walang opsyong I-edit ang vertex ang {{cmd:PEDIT}} (gamitin ang grip o Properties). Hindi pa tumatanggap ng spline ang offset, trim, extend, fillet, break at join. Hindi pinapanatili ang taas (Z) ng spline.
- Hindi pa maaaring bigyan ng format code ang bagong paragraph text, at ipinapakita ng mga SVG plot ang naka-format na teksto sa iisang kulay.
- Modelo lamang ang isinusulat ng "Buong drawing" ng WBLOCK, hindi ang mga sheet. Hindi naka-save sa file ang kasalukuyang dimension style: nagbubukas ang drawing na may Standard na kasalukuyan.
- Wala pang listahan ng layer, kulay o linetype ang mga istilo ng ribbon menu: gamitin ang panel na {{ui:Mga Layer}} at {{ui:Properties}}.
- Hindi pa rin nise-save sa drawing o naipi-plot ang mga point cloud, at ang mga file na E57 ay nagbubukas hanggang 6 milyong punto at 512 MB.
- Hindi pa nasusuri sa mismong AutoCAD ang mga na-save na DWG file ng CadCraft.

Ang iba pa ay nasa [Hindi pa nagagawa](topic:not-built-yet).
