---
title: Hindi pa nagagawa
summary: Ang hindi pa kayang gawin ng build na ito ng CadCraft drafting app, at ang gagawin sa halip ngayon.
keywords: nawawala, mga limitasyon, ctb, stb, plot style, properties, ucs, annotative, dynamic block, spline, roadmap, hindi suportado, dwg save, hatch, stretch, array, join, matchprop, break, lengthen, linetype, lineweight, xref, cloud, 3d, solids, booleans, multileader, wipeout
from: 87e56521
---

Nasa development pa ang CadCraft. Nakalista sa pahinang ito ang hindi kayang gawin ng kasalukuyang build, para hindi mo na ito hanapin. Nakasaad sa bawat item kung ano ang gagawin sa halip ngayon.

## Mga file at pag-save

| Hindi pa nagagawa | Sa halip, ngayon |
|---|---|
| Isang CadCraft DWG na na-check sa mismong AutoCAD | Bawat na-save na bersyon ay binabasa ulit ng tatlong iba pang program na may DWG reader at ng CadCraft. Tingnan ang [Ano ang iniingatan at binabago ng isang DWG](topic:files#what-a-dwg-keeps-and-changes). |
| Pag-save ng DXF na mas bago sa 2000 | I-save bilang DXF 2000, o bilang DWG hanggang AutoCAD 2018. |
| Pag-overwrite sa binuksang file sa browser | Bawat save ay nagda-download ng bagong kopya; palitan mo nang manu-mano ang lumang file kung gusto mo. Sa CadCraft Studio, ang {{key:Mod+S}} ay sumusulat pabalik sa file na binuksan mo. |
| Pag-save sa cloud at pag-sync sa pagitan ng mga computer | Hindi pa ipinapadala ng CadCraft ang mga save nito sa cloud: itago ang iyong mga DWG at DXF file sa sarili mong mga folder. Sa CadCraft Studio, inililista ng [History](topic:history) ang mga bersyon sa cloud ng drawing na na-save mula sa ibang lugar, at ang mga kopya ng sarili mong save sa computer na ito. |
| Overlay, at pag-edit ng naka-link na drawing sa mismong lugar | I-attach ang drawing bilang link at i-reload ito pagkatapos mong baguhin ang kabilang drawing. Mananatiling link ang link kapag nag-save ka bilang DWG, at ang {{cmd:XCLIP}} ay nagpuputol dito. |
| Mga larawan sa DXF; mga wipeout na nagtatago ng nasa ilalim nila | Pinapanatili ng DXF ang larawan bilang frame nito na may pangalan ng file; pinapanatili ito ng DWG bilang larawan. Tingnan ang [Mga larawan sa drawing](topic:pictures). Lumalabas ang wipeout bilang frame nito. |
| Pag-edit ng multileader na may kurbadang leader line, may leader line sa magkabilang gilid ng nilalaman, o may block na naikiling o naiskala nang hindi pantay | Iginuguhit sila ng kabilang program kung paano nila ito iginuhit, at gumagalaw bilang isa. Ang mga multileader na may tuwid na leader line papunta sa isang landing, at teksto o block bilang nilalaman, ay nagiging editable ({{cmd:MLEADEREDIT}}). |
| Sa mga table mula sa ibang program: cell na may hawak na block, format ng teksto sa loob ng cell, per-cell na border at kulay ng table ng DXF, table na hinati sa mga column | Nagbubukas ang table bilang editable na table ({{cmd:TABLEDIT}}) at ipinapakita kung paano ito iginuhit ng kabilang program hanggang i-edit mo. Pagkatapos, ire-redraw ito ng CadCraft mula sa mga cell nito: plain text, formula gaya ng `=G3*H3` at `=Sum(I3:I9)`, alignment at taas ng teksto. Nagiging walang laman ang block cell. Ang DWG table na hindi ginalaw ay isinusulat pabalik kasama ang cell data na dala nito. |
| Totoong table object sa na-save na DXF | Iniingatan ng DWG ang table bilang table na maaaring i-edit ng ibang program. Iniingatan ito ng DXF bilang block na gumuguhit dito, kasama ang sariling record ng CadCraft: muling binubuksan ito ng CadCraft bilang table, at block lang ang nakikita ng ibang program. Ang table na na-mirror o hindi pantay ang scale ay ganoon din ang pag-save sa DWG. |
| Copy at paste sa ibang program | Gumagana ang clipboard ng CadCraft sa pagitan ng mga drawing at tab ng CadCraft sa iisang browser, hindi sa ibang program. I-save bilang DWG o DXF at buksan ito roon. Tingnan ang [Kopyahin, i-paste at i-duplicate](topic:copy-paste). |

## Pagguhit at pag-edit

| Hindi pa nagagawa | Sa halip, ngayon |
|---|---|
| Hatch pattern na wala sa CadCraft, at gradient fill na eksaktong ipininta ng ibang program | Ang mga binuksang hatch na may pattern na wala sa CadCraft ay lumalabas bilang isang tono. Ang gradient fill ({{cmd:GRADIENT}}) ay ipinipinta ng sariling paraan ng CadCraft para sa bawat uri: katulad ng sa ibang program sa uri, hindi punto por punto. Iniingatan ito ng DWG 2004 pataas bilang totoong gradient hatch; sa DXF 2000 o DWG 2000 na file, binabasa ito pabalik ng CadCraft lamang at solid fill ang nakikita ng ibang program. Nilo-load ang mga pattern mula sa `.pat` na file, at ang hatch ay maaaring i-link sa hangganan nito at susunod dito. Tingnan ang [Hatch at mga fill area](topic:hatch). |
| Linetype na may hugis o teksto, at lineweight sa na-save na DXF R12 | Ang mga hugis at teksto sa linetype ng file ay hindi isasama sa mga dash nito; i-save bilang DWG para mapanatili ang lineweight. |
| Hatch na may pattern sa na-save na DXF | Walang hatch ang R12: nise-save sila bilang kanilang outline. I-save bilang DWG para mapanatili ang pattern. |
| Mga array na ginawa ng ibang program o maaaring i-edit nito; mga row at level sa path at polar array; array na sumusunod sa curve ng path nito | Ang array na ginawa gamit ang associative ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; binabago gamit ang {{cmd:ARRAYEDIT}}) ay nise-save bilang block reference na may sariling numero ng CadCraft: nakikita, nailipat, na-plot at na-explode ito ng ibang program, ngunit hindi nila mababago ang bilang nito. Ang array na ginawa sa ibang program ay nagbubukas dito bilang simpleng block reference. Ang path array ay nagtatago ng kopya ng path nito: ang pag-edit ng curve pagkatapos ay hindi gumagalaw sa mga item. |
| Mga na-clip na sheet viewport papunta at mula sa ibang program | Ang viewport na na-clip gamit ang {{cmd:VPCLIP}} o ginawa gamit ang {{cmd:MVIEW}} Polygonal o Object ay nise-save na may sariling outline ng CadCraft: binubuksan ito ng ibang program bilang rectangle sa paligid nito, at ang viewport na na-clip sa ibang program ay bumubukas dito bilang rectangle nito. Ang DXF R12 ay nagpapanatili lamang ng rectangle. |
| {{cmd:STRETCH}} na may crossing polygon | Gumamit ng isa o higit pang crossing window. |
| {{cmd:PEDIT}} Edit vertex (isang vertex sa isang pagkakataon sa command line) | Grips, at ang vertex browser sa Properties (bawat vertex, mga lapad at bulge nito). Nagawa na ang natitirang bahagi ng PEDIT. Tingnan ang [Spline at polyline](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} at {{cmd:JOIN}} sa ellipse at spline | {{cmd:EXPLODE}} ang spline (o i-{{cmd:PEDIT}} ito) para makakuha ng polyline na kayang gamitin ng mga command na ito. |
| Fillet at chamfer sa pagitan ng arc segment ng isang polyline at ng segment sa tabi nito; fillet na nagdurugtong ng linya sa isang polyline | {{cmd:EXPLODE}} ang polyline, saka i-fillet ang mga piraso. Idinadagdag ang fillet arc bilang sarili nitong object. |
| Trim at extend: ang opsyong Project (3D) at ang pag-extend sa dulo ng arc ng polyline | I-trim sa eroplano ng drawing; para sa dulo ng arc, i-explode ang polyline o iguhit muli ang arc. |
| Mga OLE object: pagpasok, pagpapatakbo o pag-edit sa mga ito; pagpapakita ng mga nasa DWG kung saan ito inilagay ng file; mga metafile na larawan | Tingnan ang [Mga larawan](topic:pictures#objects-from-other-programs-ole). Ang mga object ng DXF ay lumalabas bilang bitmap o may label na frame; ang sa DWG ay pinapanatili, hindi iginuguhit sa mismong lugar (inililista ng OLELIST ang mga ito at naglalagay ng kopya ng larawan kung saan mo sabihin). |
| Pag-type ng formatting code (bold, stacked fraction, kulay bawat salita) sa paragraph text; font na iba sa isang Helvetica-style na font; column | Ang formatting na dumating sa file ay pinapanatili, iginuguhit at sine-save (tingnan ang Teksto). Ang bagong paragraph text ay may iisang taas at kulay. |
| Paragraph text na inedit habang nakaikot | Bubukas ang editor nang level; pinapanatili ng teksto ang pag-ikot nito. |
| Multileader na nise-save bilang multileader object sa DXF | Iniingatan ng DWG ang mga ito bilang multileader, kasama ang bawat leader line at block bilang nilalaman. Iniingatan ng DXF ang iginuguhit nila (mga linya, arrowhead, at ang teksto o block). |
| Sa mga table ({{cmd:TABLE}}): tekstong bumabalot sa loob ng cell, mga table na nahahati sa bahagi, sariling text style ng table style at mga kulay bawat uri ng row sa dialog, data link sa spreadsheet file (`.xlsx`) o link na mismong nagbabasa ng file | Naghihiwalay lang ang teksto ng cell kung saan mo ito hinati ({{key:Alt+Enter}}); palakihin ang column. Binabasa ng {{cmd:DATALINK}} ang file na `.csv`, at hinihingi ng {{cmd:DATALINKUPDATE}} na piliin mo ulit ang file. Ang {{cmd:DATAEXTRACTION}} at {{cmd:COUNTTABLE}} ay gumagawa ng table na hindi sumusunod sa drawing nang mag-isa: patakbuhin muli ang mga ito (live na bilang: {{cmd:BOMTABLE}}). |
| Mga attribute definition na iniingatan nang hiwalay sa na-save na file (labas ng block), mga attribute na maraming linya | Ilagay ang mga attribute definition sa loob ng block bago mag-save: kapag nag-iisa, ise-save sila bilang teksto na nagpapakita ng tag. |
| Layer state (pag-save at pagbalik sa aling mga layer ang naka-on) | Gamitin ang {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, o i-on at i-off ang mga layer nang manu-mano. |
| Pagpili gamit ang window polygon at crossing polygon, at mga naka-save na selection filter | Fence (`F`), Window, Crossing, Remove (`R`), {{cmd:QSELECT}} para sa isang patakaran. |


## Ang panel na Properties

| Hindi pa nagagawa | Sa halip, ngayon |
|---|---|
| Pagguhit ng mga pagpipiliang Fit, at ang pahalang na posisyon ng teksto at teksto sa ibaba ng linya sa mga dimension maliban sa linear at aligned | Nakalagay ang mga ito sa object, lumalabas sa Properties at nise-save. Inilalagay ng CadCraft ang teksto ayon sa sarili nitong panuntunan. |
| Mga materyal na nakikita ng ibang program | Ine-save ng file ang pangalan ng materyal para sa CadCraft; ipinapakita ng ibang program ang materyal ng layer. |
| Transparency sa DWG 2000 at DXF file | Ipinapakita ng ibang program na solid ang mga object na iyon; pinapanatili ng CadCraft ang transparency. I-save bilang DWG 2004 o mas bago para sa lahat. |
| Hatch link na ginawa sa ibang program | Sarili nitong link ng CadCraft ang sine-save sa DWG at DXF 2000 na file; hindi binabasa ang mga link na ginawa sa ibang program. Gamitin ang `HATCHEDIT` at Link. Tingnan ang [Hatch at mga fill area](topic:hatch). |
| Mga coordinate sa Properties sa UCS | Ipinapakita ng Properties ang world coordinate; ipinapakita ng status bar at {{cmd:ID}} ang mga UCS. Tingnan ang [Paikutin ang view at gamitin ang sarili mong coordinate](topic:ucs-and-turned-view). |
| Hiwalay na posisyon para sa annotative object sa bawat scale nito; pagbasa sa per-scale na record na itinatago ng ibang program | Ang annotative na teksto o dimension ay may listahan ng scale ({{cmd:OBJECTSCALE}}), at ipinapakita ito ng bawat viewport sa laki para sa scale nito, sa parehong lugar. Ang listahan ay nise-save bilang sariling data ng CadCraft: nakikita ng ibang program ang object sa isang scale lamang na pinagsukatan nito, at hindi nababasa ang listahang ginawa sa ibang program. Tingnan ang [Mga unit, papel at scale](topic:units-papers-scales#annotate-by-scale). |
| Pagbabago sa distansya, anggulo o flip ng dynamic block; mga dynamic block na nananatiling dynamic kapag nag-save ka sa ibang bersyon ng DWG o bilang DXF | Palitan ang visibility state nito sa Properties › {{ui:Custom}}; read-only lang na lumalabas doon ang iba pang halaga nito. Nananatili itong dynamic kapag ini-save mo ito bilang DWG sa bersyon kung saan dumating ang drawing. Tingnan ang [Mga dynamic block](topic:dynamic-blocks). |
| Fit tolerance ng spline, spline na degree 6 pataas, 3D spline | Nagawa na ang fit at control point, degree 1 hanggang 5 at weight. Tingnan ang [Spline at polyline](topic:splines). Hindi napapanatili ang taas (Z) ng spline. |
## Mga pantulong sa katumpakan

| Hindi pa nagagawa | Sa halip, ngayon |
|---|---|
| Tracking mula sa mga punto sa iba't ibang command, at ang dialog ng tracking setting (relative polar angle, dagdag na anggulo) | Itinatakda ng {{cmd:POLARANG}} ang hakbang; kunin muli ang mga punto sa susunod na command. |
| Snap sa grid | I-type ang coordinate; visual gabay lang ang grid. |
| Mga opsyong Arc at Length habang pumipili ng mga sulok ng area, at MEASUREGEOM Volume | Iguhit ang outline gamit ang {{cmd:PLINE}} (kasama ang mga arko), saka {{cmd:AREA}} `O`. |
| Dynamic input para sa grip, at listahan ng opsyon nito (ang pababang arrow) | Ipinapakita ng command line ang mga opsyon. |
| Mga anggulo sa degree-minute-second, grad o surveyor's bearing | I-type ang decimal degree: `30.5` para sa 30°30'. |
| Dialog ng view manager; mga pinangalanang view ng isang sheet na bumabalik sa sheet na iyon | Inililista at ibinabalik ng {{cmd:NAMEDVIEW}} ang mga view. Iniingatan ng naka-save na file ang mga ito, pero bumabalik ang view ng sheet sa unang sheet. |

## Mga sheet, dimension at pag-plot

| Hindi pa nagagawa | Sa halip, ngayon |
|---|---|
| Mga field para sa scale ng viewport, pinangalanang object gaya ng layer o block, hyperlink, at sheet set field maliban sa numero at pangalan ng sheet; mga field na isinulat bilang field object na ina-update ng ibang program | Ang {{cmd:FIELD}} ay may petsa, pangalan ng file, numero, pangalan at bilang ng sheet, ang mga property ng drawing ({{cmd:DWGPROPS}}), ang lawak, haba at iba pang property ng isang object, at mga formula, sa teksto, attribute at table cell. Ipinapakita ng ibang program ang field ng CadCraft bilang tekstong huli nitong nabasa. Binabasa ng CadCraft ang petsa, pangalan ng file, property, sheet at expression field ng ibang program, at iniiwan ang ibang uri bilang teksto. Ang scale ng viewport ay tina-type nang manu-mano. |
| Pag-save kung aling dimension style ang kasalukuyan; teksto ng dimension na inilipat sa malayang lugar | Bubukas ang drawing na may kasalukuyang Standard. Nasa dimension line ang teksto (DIMTEDIT Left / Right / Center). Tingnan ang [Itakda ang laki ng dimension](topic:dimension-settings). |
| Mga editable na two-line angular dimension mula sa mga binuksang file na hindi kayang kalkulahin ng CadCraft | Ipinapakita sila gaya ng pagkakaguhit sa file. Ang ordinate, arc length at jogged radius dimension ay bumubukas bilang dimension na maaari mong i-edit. |
| Pagsusuri ng CTB reader laban sa file mula sa ibang program (nagawa na ito, mula sa nailathalang paglalarawan), pinangalanang plot style (STB), dither, pen number, grayscale mula sa CTB at adaptive linetype adjustment sa plot style | Gumawa ng table sa {{ui:Plot style tables}} (kulay, gray, ink, lineweight, linetype, dulo at join ng linya, at fill style bawat kulay). Tingnan ang [Mga plot style table](topic:plot-pdf#plot-style-tables). |
| Mga page setup | Pumili ng papel, scale at plot style sa dialog na {{ui:Plot to PDF}}; pinapanatili ng sheet ang plot style nito. |
| Hindi at iba pang script na nangangailangan ng komplikadong shaping sa PDF, at bihirang ideograph (mga European script, Cyrillic, Greek, Hebrew, Arabic, Persian, Urdu, Thai, Chinese, Japanese at Korean na print) | Lumalabas sila bilang "?". |
| Teksto sa Arabic script at Chinese, Japanese o Korean sa iisang na-plot na PDF | Iisang font lang ang dala ng isang plot: isa sa dalawang script ay lumalabas bilang "?". |
| Tahasang direction mark sa teksto (embedding, override, isolate) | Hindi ito pinapansin: inaayos ang bawat linya ayon lamang sa mga letra nito. |
| Mga larawan sa loob ng naka-attach na PDF page, sa isang plot | Lumalabas ang mga linya, fill at teksto ng page. Ang page na larawan lamang ay ipinapasok gamit ang {{cmd:SCANATTACH}}, at lumalabas ang mga larawan. Tingnan ang [PDF underlay](topic:pdf-underlay#plot-and-save). |
| Pagpapadala ng job sa laser mula sa CadCraft Studio (walang Web Serial ang Studio) | I-save ang G-code at ipadala ito gamit ang sarili mong program ng laser, o ipadala mula sa Chrome o Edge. Tingnan ang [Ipadala ang drawing sa laser](topic:laser-cutting#send-from-the-browser). |

## Mga constraint at parameter

| Hindi pa nagagawa | Sa halip, ngayon |
|---|---|
| Mga constraint sa sheet, sa block, sa ellipse, spline o teksto | Mag-constrain sa tab na {{ui:Model}}, sa mga linya, polyline, bilog, arko at punto. |
| Smooth (G2), at direktang pag-constrain sa bulge ng arko ng polyline | Tangent at equal; sumusunod ang isang arc segment sa dalawa nitong dulo. |
| Reference (driven) na dimensional constraint, at `3Point` sa {{cmd:DCANGULAR}} | Ang plain na dimension (DIMLINEAR …) ay nagpapakita ng halaga nang hindi ito kinokontrol. |
| Dimensional constraint na may nakapirming laki sa papel, at ang pag-plot nito | Sa screen lang sila lumalabas; magdagdag ng plain na dimension para sa plot. |
| Mga constraint na pinapanatili sa pamamagitan ng EXPLODE, BREAK, JOIN at iba pang command na gumagawa ng bagong object, at sa mga na-trim na polyline | I-constrain muli sila (nakakatulong ang AUTOCONSTRAIN). Pinapanatili ng {{cmd:MIRROR}} at {{cmd:TRIM}} ng mga linya, arko at bilog ang mga ito. |
| Design table (configuration) sa CadCraft | Baguhin ang mga parameter sa panel. |
| Nasubukang round trip sa SolidWorks | Suriin ang sketch na ginawa ng macro bago mo ito pagkatiwalaan. |

## 3D

| Hindi pa nagagawa | Sa halip, ngayon |
|---|---|
| Fillet, chamfer, shell at loft; sweep sa path na pataas (3D path) | I-extrude ang mga outline na may arko, itulak at hilain ang mga face, mag-revolve at mag-sweep sa mga flat na path. |
| Mag-extrude sa ibang direksyon maliban sa pataas | Iguhit ang hugis sa lupa at i-extrude ito pataas o pababa (may taper o sa kahabaan ng path kung gusto mo); i-rotate ang solid pagkatapos. |
| Elevation at kapal ng 2D object | Nakahiga ang drawing sa lupa (taas 0) sa 3D tab. |
| Pag-edit ng solid, region at body mula sa ibang program; pagpapakita ng mga iyon sa loob ng block; ang kanilang face sa swept, lofted o iba pang freeform na surface; polyface at polygon mesh | Lumalabas ang model-space solid sa 3D tab gaya ng mga ito at ibinabalik nang hindi binabago sa DWG; nakalista ang hindi iginuhit kapag bumukas ang 3D tab. Hilingin ang mesh bilang 3D face sa model space. Tingnan ang [Mga solid mula sa ibang program](topic:3d-solids#solids-from-other-programs). |
| Copy at paste ng solid | Sa 3D tab, gamitin ang {{cmd:COPY}}. 2D object lang ang hawak ng clipboard. |
| Section, view na sumusunod sa mga susunod na pagbabago sa solid, at shaded na solid sa na-plot na sheet | Naglalagay ang {{cmd:VIEWBASE}} ng flat na view (isang snapshot); patakbuhin itong muli pagkatapos baguhin ang mga solid. |
| Mga materyal, texture at lighting setting | Ang visual style: shaded, edges, hidden line, wireframe, X-ray. |
| Map layer na na-plot, sa viewport ng sheet at sa 3D tab; mga larawan mula sa file na naka-save kasama ng drawing; lokasyon ng drawing na isinulat para sa ibang program sa DWG 2000–2007 at DXF R12 | Lumalabas ang map layer sa ilalim ng model space sa screen; naka-save kasama ng drawing ang system at listahan ng layer. Tingnan ang [Mga map layer sa ilalim ng drawing](topic:map-layers). |
| E57 scan na lampas sa 6 milyong punto o 512 MB, sariling file ng mga gumawa ng scanner (RCP, RCS, FLS, LGS, TZF, ZFS), point cloud na naka-save kasama ng drawing o na-plot, snap sa cloud sa 3D tab, tuwid na (section) hiwa sa Model tab | I-export ang malalaki o sariling scan ng mga gumawa bilang LAS o LAZ ([Mga format ng point cloud](topic:point-cloud-formats)); i-attach ang cloud sa bawat pagbukas ng drawing; mag-trace mula sa plan slice sa Model tab. Tingnan ang [I-trace ang as-built na linya sa ibabaw ng point cloud](topic:point-clouds). |
| Pagrehistro ng scan: awtomatikong paghahanap ng target (sphere, checkerboard) sa scan, sabay-sabay na paglutas sa lahat ng scan (bundle adjustment), scale, pagrehistro laban sa model | Pumili ng magkatugmang punto o i-type ang coordinate ng target, saka pinuhin ang isang scan sa isang pagkakataon gamit ang ICP. Tingnan ang [Irehistro ang ilang scan sa isa](topic:register-scans). |

## Mga routine at pag-customize

| Hindi pa nagagawa | Sa halip, ngayon |
|---|---|
| Naka-compile o protektadong LISP (.fas, .vlx), native na program (.arx, .crx, .dbx) at VBA (.dvb) | I-load ang .lsp source ng routine gamit ang {{cmd:APPLOAD}}. |
| `grread` ng LISP, reactor (`vlr-…`), curve function (`vlax-curve-…`), dictionary at extended data, ang `acet-…` ng Express Tools | Gumagana ang natitirang bahagi ng wika. Tingnan ang [Patakbuhin ang mga routine ng LISP](topic:run-lisp). Pinangalanan ng command line ang function na nawawala kapag naabot ito ng routine. |
| Mga larawan at slide sa dialog ng routine | Lumalabas silang blangkong frame; gumagana ang natitirang bahagi ng dialog. |
| CraftScript (.craft), Lua at Python sa CadCraft | Patakbuhin ang mga ito sa Script workspace ng PartCraft. |
| Mga listahan ng layer, kulay at linetype sa loob ng ribbon menu style | Gamitin ang panel na {{ui:Layers}} at {{ui:Properties}}. |
| Ang Startup Suite at mga alias na iniingatan sa computer mo o naka-sync | Iniingatan ang mga ito sa browser na ito; ang desktop app at ang cloud service ang magtatago nito para sa iyo. Sa Studio, binabasa ang `acad.lsp` at `acaddoc.lsp` mula sa support folder na pipiliin mo (I-load ang mga application). |

## Tulong

Inilalarawan ng tulong ang build na ito. Kapag may idinagdag, inililipat ito mula sa pahinang ito papunta sa mga walkthrough.
