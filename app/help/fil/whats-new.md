---
title: Ano ang bago sa 0.9
summary: Mga hatch na sumusunod sa kanilang hangganan, mga layer group, mga nakasalansang sahig, 2D na matatalinong pader na may pinto at bintana, mga text style at formatted na text editor, lumulutang na command line, grid snap, sampung paraan ng pagguhit ng arko, at ang panel ng Documents.
keywords: ano ang bago, 0.9, release notes, changelog, hatch, associative hatch, hatchedit, pat file, pattern file, layer groups, laygroup, floors, stacked floors, floorlayers, smart walls, pader, pinto, bintana, wall tools, text style, style, mtext editor, paragraph text, formatting, floating command line, command line, top area, compact, snap to grid, grid snap, f9, arc, documents panel, check out, uk steel sizes, draw.io, thai text, dxf r12, whats new, what's new, release notes, changelog, mga pagbabago, 0.8, 0.8.1, bersyon, mga bagong feature, autocomplete, ghost, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, merge, git, fossil, access, draft without sight, screen reader, limits, bearings, aunits, shx, diagram, ole, history, compare, in words, properties, feet and inches, stretch, languages, input devices, problems, live, assistants
from: 8b6dea0b
---

Ito ang mga nagbago sa CadCraft 0.9, kumpara sa 0.8.1. Ang CadCraft ang 2D at 3D na app sa pagguhit ng CadCraft Studio 0.9 at ng walong app nito. Tinatapos ng 0.9 ang pagguguhit ng plano, nagdaragdag ng mga text style at isang totoong text editor, at nagbibigay ng mas maraming espasyo sa screen.

## Bago

### Pagguhit ng plano

- **Mga hatch na sumusunod sa kanilang hangganan.** Naka-link sa mga hangganan nito ang {{cmd:HATCH}}. Kapag ginalaw, pinaikot o in-scale ang hangganan, sumusunod ang hatch at ang pattern nito; kapag muling hinubog ang hangganan, muling kinukuwenta ang hatch. Binabago ng {{cmd:HATCHEDIT}} (`HE`) ang hatch pagkatapos at gumagawa o nagtatapos ng link. Tingnan ang [Hatch at mga fill area](topic:hatch).
- **Mga file ng hatch pattern.** Sa tanong ng {{cmd:HATCH}} na `Pick internal point`, i-type ang `F` (Pattern file) at pumili ng file na `.pat`. Sinubukan lamang ang mga file na nakasulat sa karaniwang format.
- **Mga layer group.** Sa {{ui:Mga tool}} sa panel ng {{ui:Mga Layer}}: {{ui:Bagong group}}, {{ui:Magdagdag ng mga handa nang group}}, {{ui:Pagsamahin ayon sa pangalan}}, at {{ui:Maghanap ng layer}}; o i-type ang {{cmd:LAYGROUP}} (`LG`). Tingnan ang [Ayusin ang drawing gamit ang mga layer](topic:layers#group-layers).
- **Mga nakasalansang sahig.** {{cmd:FLOORS}} (`FLR`), o {{ui:Mga Sahig…}} sa menu na {{ui:Higit pa}} ng pangkat na {{ui:View}}. Puwedeng magpakita ang isang viewport sa sheet ng isang sahig sa ilalim ng {{ui:Sahig na ipinapakita}} sa Properties. Ginagawang mga layer ng {{cmd:FLOORLAYERS}} ang mga sahig para sa file na ipapadala sa iba. Tingnan ang [Pagsalansanin ang mga sahig sa iisang drawing](topic:floors).
- **2D na matatalinong pader, pinto at bintana.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) at {{cmd:DELOPENING}}. Kinukuwenta para sa iyo ang mga sulok, T na pagdugtong at tawiran. Nagtatago ng tala ang mga pader ng kung paano sila nagdurugtong, at may Huwag i-join sa simula / sa dulo, Linya ng lokasyon at mae-edit na Haba ang Properties. Tingnan ang [Gumuhit ng 2D na pader, pinto at bintana](topic:walls-2d).
- **Ang tool ng pader sa mga pader ng plano.** I-type ang {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} at ang iba pa. Wala pa silang button sa toolbar. Tingnan ang [Mga hugis ng pader, hiwa, offset at lock para sa 2D na pader](topic:wall-tools-2d).

### Teksto

- **Mga text style.** {{cmd:STYLE}} (`ST`), o {{ui:Istilo ng teksto}} sa toolbar na {{ui:Draw}}: mga pinangalanang style na may font, taas, width factor at slant. Tingnan ang [Itakda ang font at laki ng teksto gamit ang mga text style](topic:text-styles).
- **Isang formatted na paragraph text editor.** Ang {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} o double-click sa teksto ay nagbubukas ng kahon na may font, laki, bold, italic, underline, strike-through, kulay, alignment at mga simbolo ng degree, plus-minus at diameter, kasama ang {{ui:OK}} at {{ui:Kanselahin}}. Tingnan ang [I-format ang paragraph text](topic:format-paragraph-text).
- **Diagram mula sa draw.io XML.** Binabasa rin ng {{cmd:DIAGRAM}} (`T2D`) ang na-paste na draw.io XML. Tingnan ang [Gumuhit ng diagram mula sa teksto](topic:text-to-diagram).
- **Thai na teksto sa PDF plot.** Dati, lumalabas itong mga tandang pananong sa pag-print.

### Higit na espasyo at mga tulong sa pagguhit

- **Lumulutang at mas manipis na command line, at compact na itaas na bahagi.** I-drag ang grip ng command line para gawin itong lumulutang, i-drag ang itaas nitong gilid para sa mas kaunting linya, at binubuksan ng {{key:F2}} ang history. Ang {{ui:Mga setting}} › {{ui:CadCraft}} › {{ui:Command line}} at ang mga pagpipilian sa itaas na bahagi ay may parehong setting. Tingnan ang [Mga setting](topic:settings#command-line).
- **Menu ng object snap.** I-right-click ang {{ui:Snap}} sa status bar, o i-type ang {{cmd:OSNAP}}.
- **Snap sa grid.** Ang button na {{ui:Grid snap}} sa status bar, o {{key:F9}}: ang mga napiling punto ay pupunta sa pinakamalapit na punto ng grid kapag walang object snap na kumuha ng punto.
- **Arko sa sampung paraan, at Continue.** {{ui:Arko}} sa toolbar na {{ui:Draw}} o {{cmd:ARC}}: 3-point, ang pamilyang Start/Center/End at ang pamilyang Center/Start/End, at Continue (pindutin ang {{key:Enter}} sa start point) mula sa huling linya, arko o polyline.
- **Ang panel ng Documents.** {{cmd:DOCUMENTS}} (`DOCS`) o {{ui:Documents…}} sa menu na {{ui:Higit pa}} ng pangkat na {{ui:View}}: revision, state at check-out para sa bawat drawing sa isang project folder. Bumubukas ito bilang dialog sa gitna. Tingnan ang [Documents](topic:documents).

### Mga file

- **Mga laki ng UK steel.** 976 na seksyon sa Standard panel, na itina-type gaya ng nasa drawing (halimbawa `305x165x40 UB`).
- **Mga South African pack** (kasanayan sa drawing at mga regulasyon sa gusali) bilang mga pack ng add-on na Building regulations. Hindi pa napatutunayan ang mga numero.
- **Mga add-on para sa CadCraft,** idinaragdag kapag hiniling at naka-off bbilang default: disenyo ng interior lighting, chip design (HDL papuntang layout), router carving, circuit simulation, roller chain sprocket, at mga country pack ng Building regulations.

## Naayos

- Ang paglipat, pag-rotate o pag-scale ng hatch ay nag-iiwan ng pattern nito.
- Dinadala ng {{cmd:GRIDMOVE}} ang buong pader ng plano na nagsisimula lamang sa linya ng grid. Ngayon, sa mga dulo na nito hinuhusgahan ang pader.
- Ipinakita lamang ng grid ang loob ng limits ng drawing kahit naka-off ang limits.
- Nagsi-scroll ang listahan ng block sa side panel, at ang pangalang hindi block ay naglilista ng mga block na nagsisimula rito ("Did you mean").
- Ngayon ay nagbubukas na ang mga DXF R12 file na tinatanggihan ng AutoCAD ("Unknown group 1001 for table").
- Ang napakalalaking file (mga 70,000 entity pataas) ay hindi nagbubukas, at nagkakaroon ng "Maximum call stack size exceeded".
- Ang mga DWG file mula sa AutoCAD 2018 pataas na may mataas na maintenance version ay hindi nagbubukas, at nagkakaroon ng "bad BITLONG code 11".
- Sa kahon ng paragraph text, ang bagong laki na na-type para sa napiling bahagi ay nananatiling napili.

## Sa bawat app

Mga bootstrap tooltip sa bawat kontrol na may hint, isang start tip na maaari mong isara, mga tab strip na nag-scroll kapag hindi magkasya, at ang pamagat ng tab ng browser na sumusunod sa bukas na drawing (`<drawing> - CadCraft | CadCraft`). Ang {{ui:Mga setting}} › {{ui:Layout}} ay isa nang drop-down ng dalawang-linyang pagpipilian. Mas mahaba na ang listahan ng wika sa {{ui:Mga setting}} kaysa sa 0.8. Tinatalakay sa mga tala ng Studio ang live co-editing, mga koleksyon ng Library, at mga unit ng timbang at temperatura.

## Mga tapat na limitasyon

- Walang bullet o numbered list, tab ruler o justify ang paragraph text. Sa mga naka-plot na PDF, nakatakda ang teksto sa Helvetica.
- Tuwid ang mga pader ng plano, kaya ang arko ay iginuguhit bilang maiikling pader. Nakabinbin pa ang pagsusuri ng komunidad sa tool ng pader.
- Hindi nakasulat sa sariling format ng AutoCAD ang mga layer group, kaya patag na listahan ang ipinapakita ng AutoCAD. Ipinapakita ng ibang program ang lahat ng sahig nang sabay maliban kung patakbuhin mo ang {{cmd:FLOORLAYERS}}.
- Hindi pa nasusubukan ng dalawang tao ang panel ng Documents sa totoong shared na folder. Hindi pa nagagamit sa totoong makina ang router carving. Nasuri ang lighting estimate laban sa photon trace, hindi laban sa ibang program. Mga tulong sa pagsusuri ang mga add-on sa engineering, hindi kapalit ng pagsusuri ng isang engineer.
- Ang mga wikang iba sa Ingles ay mga draft ng makina, at ang ilan sa mga bagong salita ay nasa Ingles lamang.

## Mas maaga: 0.8 at 0.8.1

Ito ang mga nagbago sa CadCraft 0.8 at 0.8.1, kumpara sa 0.7. Nagdaragdag ang 0.8 (1 Nobyembre 2026) ng mga katulong sa pagguhit na gumagana mula sa sarili mong drawing, sa pamamagitan ng mga patakaran sa sarili mong computer at walang model. Inaayos ng 0.8.1 (2 Nobyembre 2026) ang mga bug na iniulat pagkatapos nito.

### Bago

**Drawing na tinatapos ang iniisip mo**

- **Ipinapakita ng ghost kung ano ang susunod.** Kapag walang command na tumatakbo, may kulay-abong ghost na may tuldok na linya na nagpapakita kung ano ang sinasabi ng sarili mong mga pattern ng drawing na susunod: ang susunod na stud sa parehong agwat, ang susunod na hakbang ng hagdan, ang nawawalang pader ng isang silid. Pindutin ang {{key:Tab}} para iguhit ito bilang isang hakbang na puwedeng i-undo, o {{key:Esc}} para itago ito. Ang mga pinakabagong object lamang ang tinitingnan nito, kaya nananatiling makinis ito sa malaking drawing. I-off ito sa {{ui:Mga setting}} › {{ui:CadCraft}} o gamit ang {{cmd:AUTOCOMPLETE}} `Off`.
- **Ang susunod na punto habang gumuguhit ka ng linya.** Sa gitna ng {{cmd:LINE}} o {{cmd:PLINE}}, ang ghost ang susunod na punto: ang susunod na hakbang ng hagdan, ang ikaapat na sulok ng rectangle, o ang punto na nagsasara nito. Ilapit ang cursor dito at pindutin ang {{key:Tab}}, na parang nag-click ka roon.
- **Ang mga sketch ng panulat ay nagiging tumpak na geometry.** {{cmd:SKETCHFIX}}: gumuhit ng magagaspang na guhit gamit ang panulat, mouse o daliri at bawat isa ay nagiging malinis na linya, bilog, arko, rectangle o polyline, na nakadikit sa kung ano na ang nakaguhit. Tingnan ang [Mag-sketch gamit ang panulat at makakuha ng tumpak na geometry](topic:sketch-with-a-pen).
- **Ang larawan ng sketch ay nagiging drawing.** {{cmd:PHOTOSKETCH}} (`PSK`) ay hinahanap ang papel sa larawan, itinutuwid ang perspektiba, ina-apply ang laki ng papel at scale na ibibigay mo, at tinatrace ang mga linya ng panulat sa isang layer para sa bawat kulay ng panulat. Hindi tinatrace ang sulat-kamay.
- **Dimension ayon sa mga patakaran.** {{cmd:AUTODIM}} (`ADIM`) ay gumagawa ng mga kadena ng dimension sa mga gilid na pipiliin mo, isang kabuuang laki, mga lapad ng bukana, mga diameter ng butas at, kasama ang `Grid`, agwat ng grid. Hindi nito inuulit ang dimension na naroon na.
- **Ilipat ang grid line at susunod ang buong set.** {{cmd:GRIDMOVE}} (`GM`): ang mga pader na nagtatapos sa grid line ay humahatak kasama nito, ang mga pader na nasa kahabaan nito, ang mga column, bubble at tag nito ay gumagalaw, at ang mga dimension dito ay sumusukat ng bagong agwat. Isang hakbang na puwedeng i-undo.

**Mga sheet, detalye at tag**

- **Mga sheet na kusang nag-aayos ng sarili.** {{cmd:AUTOSHEET}} ay kinukuha ang mga pinangalanang view mo (o ang magkakahiwalay na bahagi ng model), pumipili ng laki ng papel at karaniwang scale, at inilalagay ang mga view sa mga bagong sheet na may title block at caption na pangalan at scale. Nananatiling maeedit ang lahat. Tingnan ang [Ayusin ang mga sheet para sa akin](topic:lay-out-sheets-for-me).
- **Ang mga detalye ng firm mo, iniaalok habang gumuguhit ka.** {{cmd:DETAILS}} (`DET`) ay nagtatago ng sarili mong mga detail block. Kapag ang napili mo ay tumugma sa isa sa pamamagitan ng mga salita sa layer, pangalan ng block at tala nito, sinasabi ito ng status bar; piliin ito at ilagay. Ang {{cmd:DETAILS}} › Share ay naglalagay ng listahan mo sa Documents folder mo at nagdadala ng idinagdag ng iyong team. Pinapatay ng Settings ang mga alok.
- **Mga tag sa mga block.** {{cmd:TAGS}} ay nagtatakda ng tag (uri nito, mga value na puwede nitong kunin, ang mga block na tinatapatan nito), itinatakda ito sa mga block reference na pipiliin mo, at inililista ang mga ito bilang iskedyul na maaari mong i-save bilang CSV. Nasa DWG ang mga kahulugan. Tingnan ang [Mga tag](topic:tags).
- **Mga limit ng drawing.** {{cmd:LIMITS}} ay nagtatakda ng parihaba para sa drawing: pupunuin ng grid ang loob nito at ipinapakita ng zoom All ito. Ipinapakita ang mga limit bilang balangkas at nise-save sa DWG at DXF, kasama ang mga paper limit. Tingnan ang [Itakda ang mga limit ng drawing](topic:drawing-limits).

**Pakikipagtulungan sa ibang tao at sa ibang program**

- **Gawing revision ang isang markup.** {{cmd:REDLINE}} ay binabasa ang package na isinusulat ng MarkupCraft at inililista ang bawat pagbabago. Tanggapin o tanggihan ang bawat isa gamit ang tala; ang mga tinanggap ay nakakakuha ng revision cloud at revision log sa iisang hakbang na puwedeng i-undo, at ise-save mo ang answers file na nagsasara sa mga markup sa MarkupCraft. Tingnan ang [Gawing revision ang isang markup](topic:redline-to-revision).
- **Mga drawing na kayang i-merge ng git at Fossil.** Kapag naka-on ang {{ui:Mga file na madaling i-merge}} sa {{ui:Mga setting}} › {{ui:CadCraft}}, may susi na hindi nagbabago ang bawat object (mga 10 porsyentong mas malaki ang mga file). Ang `cadcraft merge base ours theirs` ay pinagsasama ang mga edit ng dalawang tao sa isang DWG o DXF object kada object, at iniuulat lamang kung saan nagbago ang dalawang tao sa iisang bagay. Tingnan ang [Pagsamahin ang mga edit ng dalawang tao sa iisang drawing](topic:merge-drawings).
- **Ano ang nagbago, sa mga salita.** Sa History, nagbibigay ang Compare ng malinaw na listahan: kung saan nagbago ang mga bagay, gaano kalaki ang mga lugar, ano ang idinagdag, inalis o binago, at ang tekstong na-edit. Tingnan ang [Sabihin sa mga salita kung ano ang nagbago](topic:changes-in-words).
- **Mga bearing at anggulo.** I-type ang direksyon bilang bearing ng surveyor gaya ng N45°23'30"E, o sa degree, minuto at segundo, saanman hinihingi ang anggulo; itinatakda ng AUNITS kung paano ipinapakita ang mga anggulo. Tingnan ang [I-type at ipakita ang mga bearing at anggulo](topic:bearings-and-angles).
- **Sarili mong SHX font.** Bigyan ang CadCraft ng folder ng mga SHX font, at iginuguhit sa mga ito ang mga text style na nagpapangalan sa mga ito, sa screen at sa mga plot. Tingnan ang [Gumuhit ng teksto sa sarili mong SHX font](topic:shx-fonts).
- **Diagram mula sa teksto.** Binabasa ng {{cmd:DIAGRAM}} ang Mermaid flowchart, PlantUML component diagram, D2 o listahan ng from-to, at gumuguhit ng mga block at connector na maaari mong i-edit. Tingnan ang [Gumuhit ng diagram mula sa teksto](topic:text-to-diagram).
- **Mga OLE object sa DWG.** Inililista ng {{cmd:OLELIST}} ang mga OLE object na dala ng DWG na hindi kayang ilagay ng CadCraft nang mag-isa, at naglalagay ng kopya ng larawan kung saan mo sabihin. Tingnan ang [Mga larawan](topic:pictures#objects-from-other-programs-ole).
- **Nananatili sa drawing ang mga kalkulasyon mo.** Ang mga calc sheet at dahilan ng disenyo ay nakalagay sa DWG kasama ng talaan ng class.

**Pagguhit nang walang paningin**

- I-on ang {{ui:Pagguhit nang walang paningin}} sa {{ui:Mga setting}} (o i-type ang {{cmd:ACCESS}} at sagutin ang `On`). Binibigkas ng CadCraft ang bawat command at resulta sa pamamagitan ng iyong screen reader, inilalarawan ang drawing at kung ano ang malapit sa cursor, hinahayaan kang ilipat ang cursor at pumili ng mga punto gamit ang keyboard, at tumutugtog ng tunog para sa bawat snap at grip. Kung saan kayang kilalanin ng browser mo ang pagsasalita sa computer mo, puwedeng bigkasin ang mga command. Tingnan ang [Gumuhit nang walang paningin](topic:draft-without-sight).

**Sa bawat app**

- **Mga wika.** 54 na wika; sampu ang bago (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili, Uzbek). Ang mga wikang higit sa Ingles ay mga draft ng makina hanggang masuri ng katutubong nagsasalita.
- **Mga input device.** Mga kontrol ng trackpad, panulat, 3D mouse, game controller at MIDI.
- **Mga toolbar row at property grid.** Ang {{ui:Mga setting}} › {{ui:General}} › {{ui:Mga row ng toolbar}} ay nag-aalok ng Wrap, 2 row o 1 row sa ibang app. Sariling setting ang CadCraft sa {{ui:Mga setting}} › {{ui:CadCraft}} (tingnan ang [Mga row ng toolbar](topic:settings#toolbar-rows)). Nasa tatlong ibang app ang shared na property grid, hindi sa CadCraft.
- **Mga Problem, Live at add-on.** Isang shared na panel ng Problems na nagbababala sa bawat app, isang Live view kung sino ang nasaan sa CadCraft Studio (tingnan ang [Magtrabaho nang sabay sa iisang drawing](topic:work-live)), at listahan ng add-on.
- **Ikonekta ang iyong AI.** Isang koneksyon mula sa CadCraft Studio papunta sa lahat ng walong app, may antas na read-only, suggest o edit bawat app, at log na nasa simpleng salita ng ginawa ng assistant. Walang sariling AI ang CadCraft, at ang Ask sa bawat app ay gumagamit ng AI na ikinonekta mo.

### Naayos sa 0.8.1

- **Ipinakita ng Properties ang 150 sa halip na 12'-6"** sa mga drawing na feet-and-inches. Ang mga field na sariling binabasa ng app ay nagpapanatili muli ng kanilang teksto.
- **Ang mga DWG file na ang seksyon ng classes ay nabasa bilang maling uri** (GitHub cadcraft#5) ay nagbubukas na ngayon nang tama.
- **Hindi na nakikita ang crosshair sa likod ng mga pop-up.**
- **Maaaring magpalit ng wika habang tumatakbo ang Studio at ang mga naka-pack na edisyon.** Dati, Ingles lamang. Hindi pa nasusubukan sa bawat platform: sabihin sa amin kung hindi nagbabago ang wika.
- **Ang mga tablet sa portrait** ay nagbibigay ng natitirang taas ng grid sa canvas, at ang sheets mode ay nagsisimula sa 760 px o mas mababa.
- **Ang STRETCH na may tumatawid na window, at LIMITS,** ay iniulat sa Studio 0.8.0 at tama na sa 0.8 web build; mas luma ang installer ng nag-ulat. Dala na ng Studio 0.8.1 ang mga ito.

### Wala pa sa bersyong ito

- **Hindi naka-code-sign ang 0.8 at 0.8.1.** Maaaring magbabala ang Windows (piliin ang {{ui:Higit pang impormasyon}}, saka {{ui:Patakbuhin pa rin}}); sa Mac, i-right-click ang CadCraft Studio at piliin ang {{ui:Buksan}}. Naka-hold ang mga store build, at hindi muling ginawa ang build ng iPad at iPhone para sa 0.8.1.
- **Ang mga sketch ng panulat at larawan ng sketch** ay nasubukan lamang sa mga gawa-gawang larawan at mouse, hindi pa sa totoong panulat, touch screen o sketch sa papel.
- **Ang pagguhit nang walang paningin** ay nasubukan sa mga awtomatikong check, hindi pa sa screen reader o sa bulag na tester.
- **Ang pagbabahagi ng mga detalye** ay hindi pa nasuri ng dalawang tao, at ang Team Cloud Plan folder bilang Documents folder ay hindi pa nagagawa.
- **Ang pagsasama (merge)** ay gumagana para sa mga DWG at DXF file ng CadCraft; ang parehong para sa mga file ng ibang app ay hindi pa nagagawa.
- **Undo sa iba't ibang window:** iniuulat ng CadCraft ang bawat tapos na hakbang, pero walang iisang Undo ang Studio para sa lahat ng app; bawat app ay nag-u-undo ng sarili nitong mga hakbang.
- **Ang mga OLE object ng DWG** ay nananatili pero hindi iginuguhit sa kinalalagyan nila.
- **Ang pagbasa ng mga plot style table (CTB file)** mula sa ibang program ay nagawa na pero hindi pa nasusuri laban sa file mula sa ibang program.
- **Ikonekta ang iyong AI:** ang one-click connect sa Studio, ang hosted connector para sa browser AI, ang sarili mong API key sa loob ng Studio, at ang nailathalang MCP package ay hindi ipinapangako sa release na ito.

Para sa bersyon bago nito, tingnan ang [Ano ang bago sa 0.7](topic:whats-new-0-7).
