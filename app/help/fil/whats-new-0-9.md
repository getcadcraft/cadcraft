---
title: Ano ang bago sa 0.9 (mas maaga)
summary: Mga hatch na sumusunod sa boundary nila, mga layer group, mga nakasalansang palapag, 2D na matalinong pader na may pinto at bintana, mga text style at editor ng formatted text, lumulutang na command line, grid snap, sampung paraan ng pagguhit ng arko, at ang panel ng Documents.
keywords: whats new 0.9, earlier release, whats new, 0.9, release notes, changelog, hatch, associative hatch, hatchedit, pat file, pattern file, layer groups, laygroup, floors, stacked floors, floorlayers, smart walls, wall, door, window, wall tools, text style, style, mtext editor, paragraph text, formatting, floating command line, command line, top area, compact, snap to grid, grid snap, f9, arc, documents panel, check out, uk steel sizes, draw.io, thai text, dxf r12, whats new, what's new, release notes, changelog, changes, 0.8, 0.8.1, version, new features, autocomplete, ghost, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, merge, git, fossil, access, draft without sight, screen reader, limits, bearings, aunits, shx, diagram, ole, history, compare, in words, properties, feet and inches, stretch, languages, input devices, problems, live, assistants
from: 3451e64c
---

Ito ang nagbago sa CadCraft 0.9, kumpara sa 0.8.1. Ang CadCraft ay ang 2D at 3D drawing app ng CadCraft Studio 0.9 at ng walong app nito. Tinatapos ng 0.9 ang plan drafting, nagdaragdag ng mga text style at tunay na text editor, at nagbibigay ng mas maraming espasyo sa screen.

## Bago

### Plan drafting

- **Mga hatch na sumusunod sa boundary nila.** Ang {{cmd:HATCH}} ay nagkokonekta sa kung ano ang nagbabalangkas dito. Ilipat, ikutin o i-scale ang boundary at susunod ang hatch at ang pattern nito; hubugin ito at muling kakalkulahin ang hatch. Binabago ng {{cmd:HATCHEDIT}} (`HE`) ang hatch pagkatapos, at gumagawa o nagtatapos ng ugnayan. Tingnan ang [Hatch at fill area](topic:hatch).
- **Mga file ng hatch pattern.** Sa tanong ng {{cmd:HATCH}} na `Pick internal point`, i-type ang `F` (Pattern file) at pumili ng `.pat` file. Tanging mga file na nakasulat sa karaniwang format ang nasubukan.
- **Mga layer group.** Sa {{ui:Mga tool}} sa panel na {{ui:Layers}}: {{ui:Bagong group}}, {{ui:Idagdag ang mga handa nang group}}, {{ui:Pagsamahin ayon sa pangalan}}, at {{ui:Maghanap ng layer}}; o i-type ang {{cmd:LAYGROUP}} (`LG`). Tingnan ang [Ayusin ang drawing gamit ang mga layer](topic:layers#group-layers).
- **Mga nakasalansang palapag.** {{cmd:FLOORS}} (`FLR`), o {{ui:Floors…}} sa menu na {{ui:More}} ng grupong {{ui:View}}. Ang viewport sa sheet ay maaaring magpakita ng isang palapag sa ilalim ng {{ui:Floor shown}} sa Properties. Ginagawang layer ng {{cmd:FLOORLAYERS}} ang mga palapag para sa file na ipapadala sa iba. Tingnan ang [Pagsalansang ng palapag sa iisang drawing](topic:floors).
- **2D na matalinong pader, pinto at bintana.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) at {{cmd:DELOPENING}}. Awtomatikong kinakalkula ang mga sulok, T join at tawiran. Nagtatago ang mga pader ng rekord kung paano sila nagdudugtong, at may Disallow join at start / at end, Location line, at maaaring i-edit na Length ang Properties. Tingnan ang [Gumuhit ng 2D na pader, pinto at bintana](topic:walls-2d).
- **Ang tool ng pader sa plan walls.** I-type ang {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} at ang iba pa. Wala pa silang toolbar button. Tingnan ang [Mga hugis, hiwa, offset at lock ng pader para sa 2D na pader](topic:wall-tools-2d).

### Teksto

- **Mga text style.** {{cmd:STYLE}} (`ST`), o {{ui:Text style}} sa toolbar na {{ui:Draw}}: mga pinangalanang style na may font, taas, lapad factor at slant. Tingnan ang [Itakda ang font at laki ng teksto gamit ang mga text style](topic:text-styles).
- **Isang formatted na paragraph text editor.** Ang {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} o double-click sa teksto ay nagbubukas ng kahon na may font, laki, bold, italic, underline, strike-through, kulay, pagkakahanay, at ang mga simbolo ng degree, plus-minus at diameter, kasama ang {{ui:OK}} at {{ui:Cancel}}. Tingnan ang [I-format ang paragraph text](topic:format-paragraph-text).
- **Diagram mula sa draw.io XML.** Binabasa rin ng {{cmd:DIAGRAM}} (`T2D`) ang na-paste na draw.io XML. Tingnan ang [Gumuhit ng diagram mula sa teksto](topic:text-to-diagram).
- **Thai na teksto sa PDF plot.** Dati ay lumalabas itong mga tandang pananong.

### Mas maraming espasyo at tulong sa pagguhit

- **Lumulutang at mas manipis na command line, at compact na top area.** I-drag ang grip ng command line para ito'y lumutang, i-drag ang itaas na gilid nito para sa mas kaunting linya, at binubuksan ng {{key:F2}} ang history. Ang {{ui:Mga setting}} › {{ui:CadCraft}} › {{ui:Command line}} at ang mga pagpipilian sa top area ay may parehong setting. Tingnan ang [Mga setting](topic:settings#command-line).
- **Menu ng object snap.** I-right-click ang {{ui:Snap}} sa status bar, o i-type ang {{cmd:OSNAP}}.
- **Snap sa grid.** Ang button na {{ui:Grid snap}} sa status bar, o {{key:F9}}: ang mga pinipiling punto ay napupunta sa pinakamalapit na punto ng grid kapag walang object snap na kumuha sa punto.
- **Arko sa sampung paraan, at Continue.** {{ui:Arc}} sa toolbar na {{ui:Draw}} o {{cmd:ARC}}: 3-point, ang pamilyang Start/Center/End at ang pamilyang Center/Start/End, at Continue (pindutin ang {{key:Enter}} sa start point) mula sa huling linya, arko o polyline.
- **Ang panel ng Documents.** {{cmd:DOCUMENTS}} (`DOCS`) o {{ui:Documents…}} sa menu na {{ui:More}} ng grupong {{ui:View}}: revision, state at check-out para sa bawat drawing sa isang folder ng proyekto. Bumubukas ito bilang dialog sa gitna. Tingnan ang [Documents](topic:documents).

### Mga file

- **Mga laki ng bakal sa UK.** 976 na section sa panel na Standard, tinatype gaya ng nasa drawing (halimbawa `305x165x40 UB`).
- **Mga pakete ng South Africa** (kasanayan sa pagguhit at mga regulasyon sa gusali) bilang mga pakete ng add-on na Building regulations. Hindi pa beripikado ang mga numero.
- **Mga add-on para sa CadCraft,** idinadagdag kapag hiniling at naka-off bbilang default: disenyo ng ilaw sa loob, disenyo ng chip (HDL papuntang layout), router carving, circuit simulation, roller chain sprockets, at mga country pack ng Building regulations.

## Naayos

- Ang pag-ginalaw, pag-ikot o pag-scale ng hatch ay nag-iiwan ng pattern nito.
- Ang {{cmd:GRIDMOVE}} ay nagdadala ng buong pader ng plano na nagsisimula lamang sa linya ng grid. Ngayon ay hinuhusgahan na ang pader ayon sa mga dulo nito.
- Ang grid ay nakikita lamang sa loob ng limits ng drawing kahit naka-off ang limits.
- Ang listahan ng block sa side panel ay nagsa-scroll, at ang pangalang walang tugmang block ay naglilista ng mga block na nagsisimula sa pangalang iyon ("Did you mean").
- Ang mga DXF R12 file na tinanggihan ng AutoCAD ("Unknown group 1001 for table") ay bumubukas na dito.
- Ang napakalaking file (mga 70,000 entity pataas) ay nabigo sa pagbukas na may "Maximum call stack size exceeded".
- Ang mga DWG file mula sa AutoCAD 2018 pataas na may mataas na maintenance version ay nabigo sa pagbukas na may "bad BITLONG code 11".
- Sa kahon ng paragraph text, ang bagong laki na na-type para sa napiling bahagi ay nananatili ang pagpili.

## Sa bawat app

Mga Bootstrap tooltip sa bawat kontrol na may tulong, isang start tip na maisasara mo, mga tab strip na nagsa-scroll kapag hindi kasya, at ang pamagat ng browser tab na sumusunod sa bukas na drawing (`<drawing> - CadCraft | CadCraft`). Ang {{ui:Mga setting}} › {{ui:Layout}} ay isa nang drop-down ng mga pagpipiliang may dalawang linya. Mas mahaba na ang listahan ng wika sa {{ui:Mga setting}} kaysa sa 0.8. Nakalarawan sa mga tala ng Studio ang live co-editing, mga koleksyon ng Library at mga unit ng timbang at temperatura.

## Mga tunay na limitasyon

- Walang bullet o numbered list, tab ruler o justify ang paragraph text. Itinatakda ng mga naplot na PDF ang teksto sa Helvetica.
- Tuwid ang mga pader sa plano, kaya ang arko ay iginuguhit bilang maiikling pader. Nakabinbin pa ang pagsusuri ng komunidad sa tool ng pader.
- Hindi isinusulat ang mga layer group sa sariling format ng AutoCAD, kaya flat na listahan ang nakikita ng AutoCAD. Ipinapakita ng ibang program ang lahat ng palapag nang magkakasama, maliban kung patakbuhin mo ang {{cmd:FLOORLAYERS}}.
- Hindi pa nasubukan ng dalawang tao sa totoong share ang panel ng Documents. Walang totoong makina pang napatakbuhan ang router carving. Ang pagtantya ng ilaw ay sinuri laban sa photon trace, hindi sa ibang program. Ang mga engineering add-on ay mga pantulong sa pagsusuri, hindi kapalit ng pagsusuri ng engineer.
- Ang mga wikang iba sa English ay mga makinang burador, at ang ilan sa mga bagong salita ay English lamang.

## Mas maaga: 0.8 at 0.8.1

Ito ang nagbago sa CadCraft 0.8 at 0.8.1, kumpara sa 0.7. Nagdaragdag ang 0.8 (1 Nobyembre 2026) ng mga pantulong sa pagguhit na gumagana mula sa sarili mong drawing, sa pamamagitan ng mga patakaran sa computer mo at walang modelo, at inaayos ng 0.8.1 (2 Nobyembre 2026) ang mga bug na iniulat pagkatapos nito.

### Bago

**Drawing na tumatapos sa iniisip mo**

- **May multo na nagpapakita kung ano ang susunod.** Kapag walang tumatakbong command, may kulay-abong may tuldok na multo na nagpapakita kung ano ang sinasabi ng sarili mong mga pattern ng drawing na susunod: ang susunod na stud sa parehong agwat, ang susunod na hakbang ng hagdan, ang nawawalang pader ng kuwarto. Pindutin ang {{key:Tab}} para iguhit ito bilang isang hakbang ng undo, o ang {{key:Esc}} para alisin ito. Tumitingin lamang ito sa pinakabagong object, kaya nananatiling maayos sa malaking drawing. I-off ito sa {{ui:Mga setting}} › {{ui:CadCraft}} o gamit ang {{cmd:AUTOCOMPLETE}} `Off`.
- **Ang susunod na punto habang gumuguhit ng linya.** Sa gitna ng {{cmd:LINE}} o {{cmd:PLINE}}, ang multo ay ang susunod na punto: ang susunod na hakbang ng hagdan, ang ikaapat na sulok ng rectangle, o ang puntong nagsasara nito. Ilapit ang cursor dito at pindutin ang {{key:Tab}}, na parang nag-click ka roon.
- **Ang sketch gamit ang panulat ay nagiging tumpak na geometry.** {{cmd:SKETCHFIX}}: gumuhit ng magaspang na stroke gamit ang panulat, mouse o daliri at ang bawat isa ay nagiging malinis na linya, bilog, arko, rectangle o polyline, nakadikit sa nakaguhit na. Tingnan ang [Mag-sketch gamit ang panulat at makakuha ng tumpak na geometry](topic:sketch-with-a-pen).
- **Ang larawan ng sketch ay nagiging drawing.** {{cmd:PHOTOSKETCH}} (`PSK`) ay hinahanap ang papel sa larawan, itinutuwid ang perspektiba, ina-apply ang laki ng papel at scale na ibibigay mo, at tinatrace ang mga linya ng panulat sa isang layer para sa bawat kulay ng panulat. Hindi tinatrace ang sulat-kamay.
- **Dimension ayon sa mga patakaran.** {{cmd:AUTODIM}} (`ADIM`) ay gumagawa ng mga kadena ng dimension sa mga gilid na pipiliin mo, isang overall na sukat, lapad ng bukas, diyametro ng butas, at, sa `Grid`, agwat ng grid. Hindi nito inuulit ang dimension na naroon na.
- **Ilipat ang linya ng grid at susunod ang set.** {{cmd:GRIDMOVE}} (`GM`): ang mga pader na nagtatapos sa linya ng grid ay humahaba kasama nito, ang mga pader sa kahabaan nito, mga column, ang bubble at tag nito ay gumagalaw, at ang mga dimension dito ay sumusukat sa bagong agwat. Isang hakbang ng undo.

**Mga sheet, detalye at tag**

- **Mga sheet na kusang nag-aayos ng sarili.** {{cmd:AUTOSHEET}} ay kumukuha ng mga pinangalanang view mo (o ang hiwalay na piraso ng model), pumipili ng laki ng papel at standard na scale, at inilalagay ang mga view sa mga bagong sheet na may title block at caption ng pangalan at scale. Nananatiling maaaring i-edit ang lahat. Tingnan ang [Ayusin ang mga sheet para sa akin](topic:lay-out-sheets-for-me).
- **Mga detalye ng iyong kompanya, iniaalok habang gumuguhit ka.** {{cmd:DETAILS}} (`DET`) ay nagtatago ng sarili mong mga detalyeng block. Kapag tumugma ang napili mo sa isa ayon sa mga salita sa layer, pangalan ng block at tala nito, sinasabi ito ng status bar; piliin ito at ilagay. Ibinabahagi ng {{cmd:DETAILS}} › Share ang listahan mo sa folder ng Documents mo at kinukuha ang idinagdag ng team mo. Pinapatay ng Settings ang mga alok.
- **Mga tag sa block.** {{cmd:TAGS}} ay nagtatakda ng tag (uri nito, mga halagang maaari nitong kunin, mga block na sakop nito), itinatakda ito sa mga napiling block reference, at inililista ang mga ito bilang iskedyul na maaari mong i-save bilang CSV. Nakaimbak ang mga kahulugan sa DWG. Tingnan ang [Mga tag](topic:tags).
- **Limits ng drawing.** {{cmd:LIMITS}} ay nagtatakda ng rectangle para sa drawing: pinupuno ito ng grid, at ipinapakita ito ng zoom All. Ipinapakita ang limits bilang outline at naka-save sa DWG at DXF, kasama ang limits ng papel. Tingnan ang [Itakda ang limits ng drawing](topic:drawing-limits).

**Pakikipagtrabaho sa ibang tao at ibang program**

- **Gawing revision ang markup.** {{cmd:REDLINE}} ay binabasa ang package na isinusulat ng MarkupCraft at inililista ang bawat pagbabago. Tanggapin o tanggihan ang bawat isa na may tala; ang mga tinanggap ay nakakakuha ng revision cloud at revision log sa iisang hakbang ng undo, at isasave mo ang answers file na nagsasara ng mga markup sa MarkupCraft. Tingnan ang [Gawing revision ang markup](topic:redline-to-revision).
- **Mga drawing na kayang pagsamahin ng git at Fossil.** Kapag naka-on ang {{ui:Merge-friendly files}} sa {{ui:Mga setting}} › {{ui:CadCraft}}, may susi ang bawat object na hindi nagbabago (mga 10 porsiyentong mas malaki ang mga file). Pinagsasama ng `cadcraft merge base ours theirs` ang mga binago ng dalawang tao sa isang DWG o DXF, object-by-object, at iniuulat lamang kung saan binago ng dalawa ang parehong bagay. Tingnan ang [Pagsamahin ang mga binago ng dalawang tao sa isang drawing](topic:merge-drawings).
- **Ano ang nagbago, sa mga salita.** Sa History, nagbibigay ang Compare ng simpleng listahan: kung saan nagbago ang mga bagay, gaano kalaki ang mga lugar, ano ang idinagdag, inalis o binago, at ang tekstong in-edit. Tingnan ang [Sabihin sa mga salita kung ano ang nagbago](topic:changes-in-words).
- **Mga bearing at anggulo.** I-type ang direksyon bilang bearing ng surveyor gaya ng N45°23'30"E, o sa degree, minuto at segundo, saanman hinihingi ang anggulo; itinatakda ng AUNITS kung paano ipinapakita ang mga anggulo. Tingnan ang [I-type at ipakita ang mga bearing at anggulo](topic:bearings-and-angles).
- **Sarili mong SHX font.** Bigyan ang CadCraft ng folder ng SHX font, at ang mga text style na nagpapangalan sa mga ito ay iguguhit sa mga iyon, sa screen at sa mga plot. Tingnan ang [Gumuhit ng teksto sa sarili mong SHX font](topic:shx-fonts).
- **Diagram mula sa teksto.** Binabasa ng {{cmd:DIAGRAM}} ang Mermaid flowchart, PlantUML component diagram, D2 o listahang from-to at gumuguhit ng mga block at konektor na maaari mong i-edit. Tingnan ang [Gumuhit ng diagram mula sa teksto](topic:text-to-diagram).
- **Mga OLE object sa DWG.** Inililista ng {{cmd:OLELIST}} ang mga OLE object na dala ng DWG na hindi kayang ilagay ng CadCraft nang mag-isa, at naglalagay ng kopya ng larawan kung saan mo sabihin. Tingnan ang [Mga larawan](topic:pictures#objects-from-other-programs-ole).
- **Nananatili sa drawing ang mga kalkulasyon mo.** Ang calc sheet at mga dahilan ng disenyo ay naka-save sa DWG kasama ng class table.

**Pagguhit nang walang paningin**

- I-on ang {{ui:Drafting without sight}} sa {{ui:Mga setting}} (o i-type ang {{cmd:ACCESS}} at sagutin ang `On`). Binibigkas ng CadCraft ang bawat command at resulta sa pamamagitan ng screen reader mo, inilalarawan ang drawing at kung ano ang malapit sa cursor, hinahayaan kang ilipat ang cursor at pumili ng punto gamit ang keyboard, at nagpapatugtog ng tunog para sa bawat snap at grip. Kung kayang kilalanin ng browser mo ang pananalita sa computer mo, puwedeng bigkasin ang mga command. Tingnan ang [Gumuhit nang walang paningin](topic:draft-without-sight).

**Sa bawat app**

- **Mga wika.** 54 na wika; sampu ang bago (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili, Uzbek). Ang mga wikang higit sa English ay mga makinang burador hanggang basahin ng katutubong nagsasalita.
- **Mga input device.** Trackpad, panulat, 3D mouse, game controller at MIDI control.
- **Mga row ng toolbar at ng property grid.** Nag-aalok ang {{ui:Mga setting}} › {{ui:General}} › {{ui:Toolbar rows}} ng Wrap, 2 rows o 1 row sa ibang app. Sariling setting ang inilalagay ng CadCraft sa {{ui:Mga setting}} › {{ui:CadCraft}} (tingnan ang [Mga row ng toolbar](topic:settings#toolbar-rows)). Nasa tatlong ibang app ang shared na property grid, hindi sa CadCraft.
- **Problems, Live at mga add-on.** Isang shared na panel ng Problems na nagbababala sa bawat app, isang Live view ng kung nasaan ang bawat isa sa CadCraft Studio (tingnan ang [Magtrabaho sa isang drawing nang sabay](topic:work-live)), at listahan ng add-on.
- **Ikonekta ang AI mo.** Isang koneksyon mula sa CadCraft Studio papunta sa lahat ng walong app, may antas na read-only, suggest o edit bawat app, at log sa simpleng salita ng ginawa ng assistant. Walang sariling AI ang CadCraft, at ang Ask sa bawat app ay gumagamit ng AI na ikinonekta mo.

### Naayos sa 0.8.1

- **Ipinakita ng Properties ang 150 sa halip na 12'-6"** sa mga drawing na feet at inches. Muling nananatili ang tekstong binabasa ng app mismo sa mga field.
- **Mga DWG file na ang seksyon ng classes ay nabasa bilang maling uri** (GitHub cadcraft#5) ay bumubukas na nang tama.
- **Hindi na lumalabas ang crosshair sa likod ng mga pop-up.**
- **Mapapalitan ng wika habang tumatakbo ang Studio at ang mga nakabalot na edisyon.** Dati, English lamang. Hindi pa nasusubok sa bawat platform: sabihin sa amin kung hindi nagbabago ang wika.
- **Mga tablet nang patayo** ay nagbibigay ng espasyo sa grid sa canvas, at nagsisimula ang sheets mode sa 760 px o mas mababa.
- **STRETCH na may crossing window, at LIMITS,** ay iniulat sa Studio 0.8.0 at tama na sa 0.8 web build; mas luma ang installer ng nag-ulat. Dala na ng Studio 0.8.1 ang mga ito.

### Wala pa sa bersyong ito

- **Hindi naka-code-sign ang 0.8 at 0.8.1.** Maaaring magbabala ang Windows (piliin ang {{ui:More info}}, pagkatapos {{ui:Run anyway}}); sa Mac, i-right-click ang CadCraft Studio at piliin ang {{ui:Open}}. Naka-hold ang mga store build, at hindi muling ginawa ang build para sa iPad at iPhone para sa 0.8.1.
- **Ang mga sketch gamit ang panulat at larawan ng sketch** ay nasubukan lamang sa gawa-gawang larawan at mouse, hindi pa sa totoong panulat, touch screen o sketch-kamay sa papel.
- **Ang pagguhit nang walang paningin** ay nasubukan sa mga awtomatikong tseke, hindi pa sa screen reader o bulag na tagasubok.
- **Ang pagbabahagi ng mga detalye** ay hindi pa dumaan sa pagsusuri ng dalawang tao, at ang folder ng Team Cloud Plan bilang folder ng Documents ay hindi pa nagagawa.
- **Ang pagsasama** ay gumagana para sa mga DWG at DXF ng CadCraft; ang parehong para sa mga file ng ibang app ay hindi pa nagagawa.
- **Undo sa iba't ibang window:** iniuulat ng CadCraft ang bawat tapos na hakbang, pero wala pang iisang Undo ang Studio para sa lahat ng app; bawat app ay nag-u-undo ng sarili nitong mga hakbang.
- **Ang mga OLE object ng DWG** ay nananatili pero hindi iginuguhit sa kinalalagyan nila.
- **Ang pagbasa ng plot style table (CTB files)** mula sa ibang program ay nagawa na pero hindi pa nasusuri laban sa file mula sa ibang program.
- **Ikonekta ang AI mo:** ang one-click connect sa Studio, ang hosted connector para sa browser AI, ang sarili mong API key sa loob ng Studio, at ang nailathalang MCP package ay hindi ipinangako sa release na ito.

Para sa bersyong bago rito, tingnan ang [Ano ang bago sa 0.7](topic:whats-new-0-7).
