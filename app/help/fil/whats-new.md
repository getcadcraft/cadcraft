---
title: Ano ang bago sa 0.7
summary: Mga PDF underlay at PDF import, mga scanned drawing na may awtomatikong trace, totoong spline gamit ang SPLINE, SPLINEDIT, at PEDIT, isang dimension style manager, text na nagpapanatili ng formatting, WBLOCK at sarili mong scale, 3D solid mula sa ibang program, pagrerehistro ng scan, isang Laser panel, USD export, History at pag-print sa CadCraft Studio, isang gabay na unang drawing, ang toolbar sa anumang gilid o sa mas kaunting row, at higit pa para sa mga AI assistant.
keywords: ano ang bago, what's new, release notes, changelog, mga pagbabago, 0.7, bersyon, bagong feature, pdf, pdfattach, pdfimport, underlay, scan, scanattach, scantrace, trace, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatting, wblock, scalelistedit, listahan ng scale, acis, 3d solids, registerscans, pagrerehistro ng scan, icp, e57, las, laser, grbl, g-code, usd, usdout, history, mga bersyon, ihambing, print, printer, png, svg, plot style, linetype, tour, cheat sheet, command map, posisyon ng toolbar, mga row ng toolbar, toolbardock, regen, regenall, trackpad, swipe, code page, cyrillic, korean, chinese, japanese, electrical, rcd, p&id, pid, acad.lsp, acaddoc.lsp, support folder, mga assistant, mcp, units, portuguese
from: b9258ca6
---

Ito ang mga nagbago sa CadCraft 0.7, kumpara sa 0.6. Marami rito ang hiniling sa Discord. Nakapangkat ayon sa lugar ang listahan, at nauuna ang pinakamahalaga.

## Bago

### PDF at mga scanned drawing

- **Ilagay ang isang PDF page sa ilalim ng drawing.** {{cmd:PDFATTACH}} (`PDFATT`) ay naglalagay ng page sa totoong laki nito o sa scale na itina-type mo. Mag-snap sa mga linya nito, patingkarin ito, gawing monochrome ({{cmd:PDFADJUST}}), i-clip ({{cmd:PDFCLIP}}), at palitan ang sarili nitong layer ng PDF ({{cmd:PDFLAYERS}}). Nagpa-plot ito bilang mga linya, fill, at teksto, at pinapanatili ng DWG o DXF 2000 ito bilang link sa file. Kapag nagbukas ka ng PDF gamit ang {{ui:Buksan}}, nagtatanong ito kung ila-attach o ii-import. Tingnan ang [PDF underlay at PDF import](topic:pdf-underlay).
- **Gawing mga object ng drawing ang isang PDF page.** {{cmd:PDFIMPORT}} (`PDFIM`) ay gumagawa ng mga linya, polyline, bilog, arko, solid hatch, at teksto sa mga layer na pinangalanan ayon sa PDF, sa totoong laki, sa scale na itina-type mo, o sa scale mula sa dalawang punto at isang totoong distansya, sa iisang undo step. Tingnan ang [Mag-import ng page](topic:pdf-underlay#import-a-page).
- **Mga scanned drawing.** {{cmd:SCANATTACH}} ay nagdadala ng PNG, JPEG, o TIFF (isang page o lahat ng ito) o isang PDF page na picture. Pagkatapos, i-scale ito mula sa dalawang punto ({{cmd:SCANSCALE}}), i-align ito ({{cmd:SCANALIGN}}), ituwid ito mula sa sarili nitong mahahabang linya ({{cmd:SCANDESKEW}}), gawing itim at puti at alisin ang mga batik ({{cmd:SCANCLEAN}}), i-crop, at burahin ang ilang bahagi nito. Ang bawat hakbang ay isang undo step, at napapanatili ang orihinal na file. Tingnan ang [Mga scanned drawing at ang trace](topic:scanned-drawings).
- **I-trace ang scan papunta sa mga linya at arko.** {{cmd:SCANTRACE}} ay iginuguhit ang mga linya ng scan bilang mga linya at arko sa bagong layer, SCAN-TRACE, sa toleransiyang itinakda mo, at iniiwan ang teksto at hatching gaya ng mga ito. Sinasabi ng report kung ano ang nagawa nito at kung ano ang iniwan, at hindi ito pag-angkin na tama ang resulta: i-check ito laban sa sheet. Pinapayagan ng {{cmd:RASTERSNAP}} ang object snap na hanapin ang mga dulo, sulok, at tawiran ng scan. Walang ipinapadala kahit saan at walang ginagamit na trained model. Tingnan ang [Ang trace](topic:scanned-drawings#the-trace).

### Pagguhit at pag-e-edit

- **Totoong spline.** {{cmd:SPLINE}} (`SPL`) ay gumuguhit ng kurba sa mga punto o mula sa control point (degree 1 hanggang 5), na may end tangent; ang {{cmd:SPLINEDIT}} (`SPE`) ay naglilipat, nagdaragdag, at nagbubura ng fit o control point, nagse-set ng weight, nagbubukas, nagsasara, nagbabaliktad, o ginagawang polyline ang spline. Ang mga spline mula sa DWG at DXF na file ay bumubukas bilang spline, at sine-save ng DWG at DXF 2000 ang mga ito bilang spline. Tingnan ang [Mga spline at polyline](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) ay nagsasara at nagbubukas ng polyline, nagdudugtong ng linya at arko sa mga ito, nagse-set ng isang width, nagkakabit ng kurba sa mga vertex o spline sa kahabaan ng mga ito at binabawi ito gamit ang Decurve, nagbabaliktad, at nag-e-edit ng ilan nang sabay. Tingnan ang [I-edit ang polyline](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) ay sumusulat ng block, ilang object, o ang buong drawing sa bagong DWG o DXF na naglalaman lang ng mga layer, style, at block na ginagamit nila. Tingnan ang [Sumulat ng block o mga object sa sarili nilang file](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN at REGENALL.** {{cmd:REGEN}} (`RE`) ay muling iginuguhit ang tab na kinaroroonan mo mula sa drawing, at ang {{cmd:REGENALL}} (`REA`) ay ang bawat tab, pane, at bukas na drawing. Tingnan ang [REGEN at REGENALL](topic:commands#regen-and-regenall).

### Teksto at dimension

- **Pinapanatili ng text ang formatting nito.** Ang paragraph text mula sa ibang program ay nagpapanatili ng mga kulay ayon sa salita, bold at italic, underline, stacked fraction, at mga taas nito: iginuguhit ang mga ito sa screen at sa mga PDF, napapanatili kapag nag-e-edit ka ng mga salita, at naisusulat pabalik kapag nag-save. Tingnan ang [Formatting sa loob ng paragraph text mula sa ibang program](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Dimension style manager.** Ang {{cmd:DIMSTYLE}} (`D`) ay gumagawa, nagbabago, nagkukumpara, at nag-a-apply ng mga pinangalanang dimension style; ang pagbabago ng style ay nagbabago sa bawat dimension na gumagamit nito. Ang {{cmd:DIMEDIT}} (`DED`) ay nagbabalik ng teksto, nagta-type ng bagong teksto, nagpapaikot nito o nagpapahilig sa extension line; ang {{cmd:DIMTEDIT}} ay naglilipat ng teksto pakaliwa, pakanan, o sa gitna. Tingnan ang [Mga pinangalanang dimension style](topic:dimension-settings#named-dimension-styles).
- **Sarili mong scale.** Ang {{cmd:SCALELISTEDIT}} (`SCALELIST`) ay nagdaragdag ng mga scale gaya ng 1:75 sa mga listahan ng viewport at plot scale; sine-save ang mga ito sa drawing (DWG at DXF 2000), at ang drawing mula sa ibang program ay may sarili nitong listahan. Tingnan ang [Mga scale](topic:units-papers-scales#scales).
- **Teksto sa ibang alpabeto.** Ang mga DXF file na na-save sa Cyrillic, Korean, Chinese, Japanese, o Vietnamese code page ay bumubukas na ngayon kasama ang kanilang teksto, at ang teksto sa Chinese, Japanese, at Korean ay nao-print sa mga PDF (kumukuha ang plot ng mas malaking font sa unang beses na kailanganin nito). Tingnan ang [Font](topic:text#font).

### Pag-plot at pag-print

- **Higit pa sa mga plot style table.** Para sa bawat kulay, maaari na ring magtakda ang table ng linetype, ang dulo at join ng linya, at isang fill style na nagpi-print ng solid fill bilang hatch line; may sarili nang listahan ng lineweight ang table at isang linetype scale. Tingnan ang [Mga plot style table](topic:plot-pdf#plot-style-tables).
- **Print, at mga PNG at SVG na file.** May {{ui:I-print…}}, {{ui:I-download ang PNG}} (300 dpi), at {{ui:I-download ang SVG}} ang Plot dialog. Sa CadCraft Studio, inililista nito ang mga printer ng computer, ang kanilang papel, at ang bilang ng kopya. Tingnan ang [Print](topic:plot-pdf#print) at [Picture at SVG na file](topic:plot-pdf#picture-and-svg-files).

### 3D at point cloud

- **3D solid mula sa ibang program.** Ang solid, region, at body sa model space ng drawing ay lumalabas sa 3D tab, read-only, at ang pag-save bilang DWG ay isinusulat ang mga ito pabalik nang hindi nababago. Ang mga face sa surface na hindi pa iginuguhit ng CadCraft ay nakalista, hindi hinuhulaan. Tingnan ang [Mga solid mula sa ibang program](topic:3d-solids#solids-from-other-programs).
- **Irehistro ang ilang scan.** Ang {{cmd:REGISTERSCANS}} (`REGSCAN`) ay naglalagay ng mga scan na kinuha mula sa iba't ibang posisyon sa iisang frame, sa pamamagitan ng mga pares ng punto o mga itinype na target coordinate, pinipino ang mga ito gamit ang ICP, sine-save ang registration bilang maliit na project file, at isinusulat ang nairehistrong cloud bilang isang LAS o E57 na file. Tingnan ang [Irehistro ang ilang scan sa iisa](topic:register-scans).
- **USD export.** Ang {{cmd:USDOUT}}, o ang {{cmd:EXPORT3D}} › {{ui:USD}}, ay nagsusulat ng mga solid ng 3D tab bilang `.usda`, `.usdc`, o `.usdz`. Tingnan ang [I-export ang 3D model bilang USD](topic:usd).
- **Mga kalkulasyon sa 3D tab.** Sa mga tool ng 3D tab na humihingi ng distansya, maaari kang mag-type ng kalkulasyon, gaya ng sa command line. Tingnan ang [Aritmetika sa isang na-type na value](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Paggawa ng mga bagay

- **Magpadala ng drawing sa laser.** Ang {{cmd:LASER}}, o ang {{ui:View}} › {{ui:Higit pa}} › {{ui:Laser…}}, ay nagbubukas ng panel sa ibabaw ng drawing: ang bawat layer ay puputol, mag-i-score, mag-e-engrave ng mga linya, pupunan ang mga hugis, mag-e-engrave ng picture, o hindi ipapadala, kasama ang power, bilis, at mga pass nito. Sinusundan ng preview ang mga edit mo, ang {{ui:I-save ang G-code…}} ay sumusulat ng GRBL laser-mode G-code, at sa Chrome o Edge, kayang i-frame ng panel ang job at ipadala ito sa pamamagitan ng USB. Napapanatili sa drawing ang mga setting (DWG at DXF). Tingnan ang [Magpadala ng drawing sa laser](topic:laser-cutting).
- **Pagbuo ng installation symbol sa Electrical add-on.** Data, telephone, at TV outlet, key at time switch, thermostat, exit sign, detector, call point at sounder, fan, water heater, cooker, EV charging point, energy meter at sub-board, at mga RCD at RCBO symbol. Maaaring magdala ang isang circuit ng RCD, may RCD column ang panel schedule, at tinutukoy ng mga check ang mga socket circuit na walang RCD na 30 mA o mas mababa. Paalala ito sa pagpaplano, hindi code check.
- **Isang P&ID add-on.** Gumuguhit ang P&ID ng process diagram: mga symbol na may connection point, process at signal line, tag, line number, listahan ng line, equipment, instrument, at valve (CSV o workbook), at mga check. Kasama ito ng CadCraft at naka-off hanggang buksan mo ito sa {{ui:Mga setting}} › {{ui:General}} › {{ui:Mga Add-on}}. Gabay ito sa drafting, hindi engineering approval, at English lang muna ang mga salita nito.

### Pagsisimula at ang screen

- **Gabay na unang drawing.** Ang {{cmd:TOUR}} (o ang {{ui:Simulan ang tour}} sa start card) ay gumagabay sa iyo sa anim na hakbang sa aktwal na drawing: isang linya, isang bilog, isang move, isang trim, isang erase, at isang dimension. Kusa itong nagsisimula sa unang beses na magbukas ang CadCraft na walang laman. Tingnan ang [Gusto ng gabay?](topic:getting-started#prefer-to-be-guided)
- **Cheat sheet at command map.** Ang [cheat sheet](topic:cheat-sheet) ay may 40 karaniwang command sa iisang pahina, at available din bilang PDF na ipi-print. Ang [command map](topic:command-map) ay naglilista ng mga command kasama ang kanilang maikling pangalan, A hanggang Z.
- **Ang toolbar sa anumang gilid.** {{ui:Mga setting}} › {{ui:CadCraft}} › {{ui:Posisyon ng toolbar}}: itaas (gaya ng dati), ibaba, kaliwa, o kanan, o i-type ang {{cmd:TOOLBARDOCK}}. Tingnan ang [Posisyon ng toolbar](topic:settings#toolbar-position).
- **Mga row ng toolbar.** {{ui:Mga setting}} › {{ui:CadCraft}} › {{ui:Mga row ng toolbar}}: bumalot para magkasya, 2 row o 1 row, para sa toolbar ng CadCraft at sa mga istilong Drafting classic at Ribbon. Dinadaanan ng {{key:Shift+Ctrl+F1}} ang mga ito, dinadaanan ng {{key:Ctrl+F1}} ang ipinapakita ng mga button, at nagtatakda ng mga ito ang {{cmd:TOOLBARROWS}} at {{cmd:TOOLBAR}}. May close button ang start hint. Salamat kay GJoe2, na nagpadala nito bilang pull request. Tingnan ang [Mga row ng toolbar](topic:settings#toolbar-rows).

### Sa CadCraft Studio

- **History.** Ang {{cmd:HISTORY}} (`HIST`), o ang {{ui:View}} › {{ui:Higit pa}} › {{ui:History…}}: ang mga kopyang iniingatan ng Studio kapag nagbubukas at nagse-save ka ng drawing, at ang mga cloud version ng drawing kapag binuksan mo ito mula sa cloud. Magbukas o magbalik ng isa, o magkumpara ng dalawa, na ipinapakita ang idinagdag, inalis, at binago sa kulay. Tingnan ang [History](topic:history).
- **acad.lsp at acaddoc.lsp.** Pumili ng support folder sa {{cmd:APPLOAD}}: ang dalawang file na iyon ay nilo-load kapag nagsimula ang CadCraft (ang acaddoc.lsp muli para sa bawat bagong drawing tab), at tumatakbo ang `S::STARTUP` pagkatapos ng mga ito. Tingnan ang [Mag-load ng mga application](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Ang Plot dialog sa sarili nitong window.** Inilalagay ng button sa title bar nito ang dialog sa isang window na maaaring ilagay sa ibang monitor. Tingnan ang [Ilipat ang dialog](common:arrange-panels#move-a-dialog).

### Para sa mga AI assistant

- **Mga file ayon sa pangalan, sa mga folder na pipiliin mo.** Sa CadCraft Studio, kayang magbukas, mag-save, at mag-plot ng assistant ng mga file ayon sa pangalan, at magbigay sa isang command ng file na hinihingi nito (INSERT mula sa file, export ng COUNT, SAVEAS, PLOT), pero sa loob lang ng mga folder na idinagdag mo sa ilalim ng {{ui:Mga setting}} › {{ui:CadCraft}} › {{ui:Mga Assistant}} › {{ui:Mga folder na maaari nitong gamitin}}. Tingnan ang [Hayaang gamitin nito ang mga file sa mga folder na pipiliin mo](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Mas kaunting tawag.** Kayang mag-type ng assistant ng buong command line sa isang pagkakataon, panatilihing bukas ang isang command sa pagitan ng mga tawag nito, magbilang ng object ayon sa uri at layer nang hindi sila nililista, at maglagay ng block kasama ang mga attribute value nito sa isang hakbang.
- **Walang window.** Ang `cadcraft` command line ay nagsusulat ng SVG plot at nagko-convert, nagpa-plot, nagche-check, o naglalarawan ng maraming file nang sabay. Hindi pa nai-publish ang MCP package. Tingnan ang [Gumana sa mga file nang hindi binubuksan ang CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Binago

- **Nagpa-pan ang trackpad.** Ilipat ang dalawang daliri sa trackpad at susundan ito ng 2D view; ang pinch at ang mouse wheel ang nag-zo-zoom. Tingnan ang [Mouse, trackpad at touch](topic:mouse-trackpad-touch).
- **Napapanatili ang mga OLE object.** Ang mga naka-embed na object ng DXF ay lumalabas bilang kanilang picture o bilang may-label na frame, at isinusulat pabalik ng DXF 2000 kapag nag-save. Ang sa DWG ay napapanatili at isinusulat pabalik kapag nag-save ka bilang DWG, pero hindi pa naipapakita. Dati, nawawala ang mga ito kapag nag-save. Tingnan ang [Mga object mula sa ibang program (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Ang units ng bagong drawing** ay sumusunod sa unit na i-star mo sa {{ui:Mga setting}} › {{ui:General}} › {{ui:Mga unit}}.

## Naayos

- Ang mga layout na bumukas na walang laman, o nawalan ng viewport at ipinakita ang buong model sa halip, ay bumubukas na ngayon kasama ang totoong viewport nila. Ang layout na walang koneksyon sa mga nilalaman nito ay pinapanatili, at sinasabi ito ng open report.
- Ang mga DXF file sa mas lumang code page ay nagpakita ng sirang Cyrillic at Korean na teksto. Tama na itong nababasa ngayon.
- Nawawala ang formatting ng paragraph text mula sa ibang program kapag binuksan ito, at naisusulat itong walang format kapag na-save pabalik.

## Sa bawat app

- **Units.** Ang {{ui:Mga setting}} › {{ui:General}} › {{ui:Mga unit}} ay may isang listahan para sa haba, lawak, volume, anggulo, at slope, na may eksaktong laki na ibinibigay ng depinisyon ng mga unit (ang US survey foot ay sarili nitong unit). I-off ang mga unit na hindi mo kailanman ginagamit at aalis ang mga ito sa mga listahan ng unit; i-star ang isa at magsisimula ang bagong gawa rito. Palaging pinapanatili ng file ang sarili nitong unit. Sa CadCraft, ang star ang nagse-set ng units ng bagong drawing kapag ito ay unit na kayang dalhin ng drawing; ang sariling kahon ng {{ui:Mga unit}} ng CadCraft ay hindi pa sumusunod sa mga switch. Kapag may units na ang drawing, ang haba na itina-type mo ay maaaring may markang anumang unit. Tingnan ang [Mga unit, na-type na value, at mga listahan ng unit](common:unit-lists).
- **Mas siksik na layout at mga panel na nagtatago.** Ang {{ui:Mga setting}} › {{ui:General}} › {{ui:Density ng layout}} › {{ui:Siksik}} ay nagkakasya ng mas maraming bagay sa screen (nananatili sa malalaking button ang mga touch screen at phone). Ang bawat side panel ay may manipis na title bar: i-drag ito para i-dock o i-float ang panel, ihulog ito sa title bar ng ibang panel para magbahagi ng isang frame bilang mga tab, i-pin ito para dumulas papunta sa gilid, o itago ito at ibalik mula sa gilid. Tingnan ang [Ayusin ang mga panel](common:arrange-panels#make-the-layout-denser).
- **Gumagalaw ang mga dialog.** I-drag ang dialog sa pamamagitan ng title bar nito palayo sa drawing; bumabalik ito sa dating puwesto. I-double-click ang title bar para muling ilagay sa gitna. Tingnan ang [Ilipat ang dialog](common:arrange-panels#move-a-dialog).
- **Mga recipe para sa mga AI assistant.** Sampung ginawang request para sa sarili mong assistant (ayusin ang drawing, i-plot ang set, suriin ang mga drawing, magtanong sa model, i-total ang takeoff, subukan ang variant ng part…), bawat isa kasama ang mga tool na tinatawag nito at ang mga permiso na kailangan nito, at bawat isa ay muling pinapatakbo ng aming mga test. Walang AI ang mga app. Tingnan ang [Mga recipe para sa mga AI assistant](common:assistants-recipes).
- **Mga wika.** Ang **Português (Portugal)** ay bago sa {{ui:Mga setting}} › {{ui:General}} › {{ui:Wika}}. Ito, ang **Português (Brasil)**, **Español (México)**, at **Bahasa Indonesia** ay mayroon na ngayong bawat salita ng mga app, bilang mga draft na hindi pa nire-review ng native speaker. Nasa Ingles ang mga help topic.
- **CadCraft Studio** ay nagsasabi kung bakit pumalya ang update check (walang file para sa system mo pa, walang network, maling signature) sa halip na "Tapos na" lang, at tumitigil sa pagbabalik ng card na "Ano ang bago" na isinara mo hangga't walang mas bagong release.

## Wala pa sa bersyong ito

- **Hindi pa naka-code-sign ang 0.7.** Ang signing, at ang Microsoft Store package, ay inilipat sa 0.8 dahil hindi pa dumarating ang certificate validation. I-check ang SHA-256 sa tabi ng bawat file sa getcadcraft.com/download. Sa Windows, kung hihinto ang SmartScreen sa installer, piliin ang {{ui:Higit pang impormasyon}}, saka {{ui:Patakbuhin pa rin}}. Sa Mac, sa unang pagkakataon, i-right-click ang CadCraft Studio at piliin ang {{ui:Buksan}}. Wala pa ang CadCraft Studio sa app store, at wala pang build para sa iPad o iPhone.
- Ang angle at slope list sa {{ui:Mga unit}} ay sine-save, pero wala pang box na bumabasa sa mga ito.
- Ang mga OLE object ng DWG ay napapanatili pero hindi naipapakita, at hindi iginuguhit ang mga metafile picture sa loob ng mga OLE object.
- Ang pagbasa ng plot style table (CTB file) mula sa ibang program ay naghihintay ng sample file.
- Ang mas lumang Asian text na nakasulat bilang `\M+` code ay nababasa, pero hindi pa nasusuri laban sa file mula sa ibang program.
- PDF underlay: ang mga picture sa loob ng page ay ipinapakita sa screen pero hindi naipa-plot, hindi kasama sa plot ng assistant ang mga underlay, at hindi pa nasusuri sa ibang program kung paano nila binabasa ang na-save na clip at scale.
- History: hindi pa ipinapadala ng CadCraft sa cloud ang mga save nito, kaya ang mga cloud version ay ang mga na-save mula sa ibang device at sa web. Nasa CadCraft Studio lang ang History.
- Hindi pa nasusuri kung pinapanatili ng Studio ang acad.lsp support folder pagkatapos mag-restart; kung magtanong ito, piliin muli ang folder sa APPLOAD.
- Hindi pa nasusubukan ang Laser panel sa totoong laser: subukan ang bawat setting sa scrap. Walang Web Serial ang CadCraft Studio, kaya sa Studio, nagse-save lang ng G-code ang panel.
- Nasubukan na ang pagre-register ng scan sa mga gawang-gawang scan, pero hindi pa sa set ng totoong scanner.
- Nasubukan na ang two-finger panning gamit ang simulated na trackpad event, pero hindi pa sa totoong trackpad.
- Walang Edit vertex option ang {{cmd:PEDIT}} (gamitin ang grip o Properties). Hindi pa tumatanggap ng spline ang offset, trim, extend, fillet, break, at join; hindi napapanatili ang taas (Z) ng spline.
- Hindi pa maaaring bigyan ng formatting code ang bagong paragraph text, at ang mga SVG plot ay nagpapakita ng naka-format na teksto sa iisang kulay.
- Ang Entire drawing ng WBLOCK ay sumusulat ng model lang, hindi ng mga sheet. Hindi nase-save sa file ang kasalukuyang dimension style: bumubukas ang drawing na may Standard bilang kasalukuyan.
- Walang layer, color, o linetype list ang mga ribbon menu style: gamitin ang panel na {{ui:Mga Layer}} at {{ui:Properties}}.
- Hindi pa sine-save o naipa-plot sa drawing ang point cloud, at ang mga E57 file ay bumubukas hanggang 6 milyong punto at 512 MB.
- Hindi pa nasusuri sa mismong AutoCAD ang mga na-save na DWG file ng CadCraft.

Ang iba pa ay nasa [Hindi pa nagagawa](topic:not-built-yet).
