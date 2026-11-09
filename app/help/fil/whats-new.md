---
title: Ano ang bago sa 0.8 at 0.8.1
summary: Isang ghost na nagtatapos ng iyong drawing, mga pen sketch at litrato ng sketch na ginawang geometry, mga sheet na kusang nag-aayos ng sarili, mga detalyeng iminumungkahi habang gumuguhit, GRIDMOVE at AUTODIM, mga tag, mga file na madaling i-merge, mga redline na ginawang revision, drafting nang walang paningin, mga limit ng drawing, bearing, mga SHX font, mga diagram mula sa teksto, at mga ayos sa 0.8.1.
keywords: ano ang bago, what's new, mga tala ng release, changelog, mga pagbabago, 0.8, 0.8.1, version, mga bagong feature, autocomplete, ghost, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, merge, git, fossil, access, drafting nang walang paningin, screen reader, limits, bearings, aunits, shx, diagram, ole, history, compare, sa mga salita, properties, feet at inches, stretch, mga wika, input device, mga problema, live, mga assistant
from: 9dd82db5
---

Ito ang mga nagbago sa CadCraft 0.8 at 0.8.1, kumpara sa 0.7. Ang 0.8 (1 Nobyembre 2026) ay nagdadagdag ng mga katulong sa pagguhit na gumagana mula sa sarili mong drawing, gamit ang mga patakaran sa iyong computer at walang model, at inaayos ng 0.8.1 (2 Nobyembre 2026) ang mga bug na iniulat pagkatapos nito.

## Bago

### Drawing na nagtatapos ng iyong ideya

- **Ipinapakita ng ghost kung ano ang susunod.** Kapag walang command na tumatakbo, ipinapakita ng kulay-abong may tuldok-tuldok na ghost kung ano ang sinasabi ng sarili mong mga pattern ng drawing na susunod: ang susunod na stud sa parehong spacing, ang susunod na hakbang ng hagdan, ang nawawalang pader ng isang silid. Pindutin ang {{key:Tab}} para iguhit ito bilang isang undo step, o ang {{key:Esc}} para alisin ito. Tumitingin lamang ito sa pinakabagong mga object, kaya nananatiling maayos ang takbo sa malaking drawing. I-off ito sa {{ui:Settings}} › {{ui:CadCraft}} o gamit ang {{cmd:AUTOCOMPLETE}} `Off`.
- **Ang susunod na punto habang gumuguhit ka ng linya.** Sa gitna ng {{cmd:LINE}} o {{cmd:PLINE}}, ang ghost ang magiging susunod na punto: ang susunod na hakbang ng hagdan, ang ikaapat na sulok ng rectangle, o ang puntong nagsasara nito. Ilapit ang cursor dito at pindutin ang {{key:Tab}}, na parang nag-click ka roon.
- **Ang mga pen sketch ay nagiging tumpak na geometry.** {{cmd:SKETCHFIX}}: gumuhit ng magaspang na stroke gamit ang panulat, mouse o daliri, at ang bawat isa ay nagiging malinis na linya, bilog, arko, rectangle o polyline, na nakakabit sa mga bagay na nakaguhit na. Tingnan ang [Mag-sketch gamit ang panulat at makakuha ng tumpak na geometry](topic:sketch-with-a-pen).
- **Ang litrato ng sketch ay nagiging drawing.** {{cmd:PHOTOSKETCH}} (`PSK`) hinahanap ang papel sa litrato, itinutuwid ang perspective, ina-apply ang laki ng papel at scale na ibibigay mo, at ini-trace ang mga linya ng panulat sa isang layer para sa bawat kulay ng panulat. Hindi na-trace ang mga lettering.
- **Dimension ayon sa mga patakaran.** {{cmd:AUTODIM}} (`ADIM`) gumagawa ng mga chain ng dimension sa mga gilid na pipiliin mo, ng kabuuang sukat, ng lapad ng mga opening, ng diyametro ng mga butas at, kasama ang `Grid`, ng spacing ng grid. Hindi nito inuulit ang dimension na mayroon na.
- **Ilipat ang isang grid line at susunod ang buong set.** {{cmd:GRIDMOVE}} (`GM`): ang mga pader na nagtatapos sa grid line ay humahaba kasama nito, ang mga pader sa tabi nito, mga haligi, ang bubble at tag nito ay gumagalaw, at ang mga dimension dito ay sumusukat sa bagong spacing. Isang undo step.

### Mga sheet, detalye at tag

- **Mga sheet na kusang nag-aayos ng sarili.** {{cmd:AUTOSHEET}} kinukuha ang mga pinangalanang view mo (o ang hiwalay na bahagi ng model), pumipili ng laki ng papel at standard na scale, at inilalagay ang mga view sa mga bagong sheet na may title block at caption na pangalan at scale. Nananatiling maaaring i-edit ang lahat. Tingnan ang [I-layout ang mga sheet para sa akin](topic:lay-out-sheets-for-me).
- **Mga detalye ng iyong firm, iminumungkahi habang gumuguhit.** {{cmd:DETAILS}} (`DET`) iniingatan ang sarili mong detail block. Kapag ang pinili mo ay tumutugma sa isa ayon sa mga salita sa mga layer nito, pangalan ng block at mga note, sinasabi ito ng status bar; piliin ito at ilagay. {{cmd:DETAILS}} › Share inilalagay ang listahan mo sa folder na Documents mo at dinadala ang idinagdag ng iyong team. Pinapatay ng Settings ang mga mungkahi.
- **Mga tag sa block.** {{cmd:TAGS}} nagtatakda ng tag (ang uri nito, ang mga value na maaari nitong kunin, ang mga block na sakop nito), itinatakda ito sa mga block reference na pinili mo, at inililista ang mga ito bilang iskedyul na maaari mong i-save bilang CSV. Nakatago sa DWG ang mga kahulugan. Tingnan ang [Mga tag](topic:tags).
- **Mga limit ng drawing.** {{cmd:LIMITS}} nagtatakda ng rectangle para sa drawing: pinupuno ito ng grid at ipinapakita ito ng zoom All. Ipinapakita ang mga limit bilang outline at nise-save sa DWG at DXF, kasama ang mga limit ng papel. Tingnan ang [Itakda ang mga limit ng drawing](topic:drawing-limits).

### Pakikipagtulungan sa ibang tao at sa ibang program

- **Gawing revision ang isang markup.** {{cmd:REDLINE}} binabasa ang package na isinusulat ng MarkupCraft at inililista ang bawat pagbabago. Tanggapin o tanggihan ang bawat isa, na may note; ang mga tinanggap ay nakakakuha ng revision cloud at revision log sa isang undo step, at isine-save mo ang answers file na nagsasara sa mga markup sa MarkupCraft. Tingnan ang [Gawing revision ang isang markup](topic:redline-to-revision).
- **Mga drawing na kayang i-merge ng git at Fossil.** Kapag naka-on ang {{ui:Merge-friendly files}} sa {{ui:Settings}} › {{ui:CadCraft}}, may susi na hindi nagbabago ang bawat object (mga 10 porsiyentong mas malaki ang mga file). Ang `cadcraft merge base ours theirs` ay nagme-merge ng mga pagbabagong ginawa ng dalawang tao sa isang DWG o DXF, object por object, at nag-uulat lamang kung saan binago ng dalawang tao ang iisang bagay. Tingnan ang [I-merge ang mga pagbabago ng dalawang tao sa isang drawing](topic:merge-drawings).
- **Ano ang nagbago, sa mga salita.** Sa History, nagbibigay ang Compare ng malinaw na listahan: kung saan nagbago ang mga bagay, gaano kalaki ang mga lugar, ano ang idinagdag, inalis o binago, at ang tekstong na-edit. Tingnan ang [Sabihin sa mga salita kung ano ang nagbago](topic:changes-in-words).
- **Mga bearing at anggulo.** I-type ang direksyon bilang bearing ng surveyor gaya ng N45°23'30"E, o sa degree, minuto at segundo, saanman hinihingi ang anggulo; itinatakda ng AUNITS kung paano ipinapakita ang mga anggulo. Tingnan ang [I-type at ipakita ang mga bearing at anggulo](topic:bearings-and-angles).
- **Sarili mong mga SHX font.** Bigyan ang CadCraft ng folder ng mga SHX font, at ang mga text style na nagbabanggit sa mga ito ay iguguhit gamit ang mga ito, sa screen at sa mga plot. Tingnan ang [Mag-drawing ng teksto gamit ang sarili mong mga SHX font](topic:shx-fonts).
- **Diagram mula sa teksto.** Binabasa ng {{cmd:DIAGRAM}} ang Mermaid flowchart, PlantUML component diagram, D2 o listahan ng from-to, at gumuguhit ng mga block at connector na maaari mong i-edit. Tingnan ang [Mag-drawing ng diagram mula sa teksto](topic:text-to-diagram).
- **Mga OLE object sa isang DWG.** Inililista ng {{cmd:OLELIST}} ang mga OLE object na dala ng isang DWG na hindi kayang ilagay ng CadCraft nang mag-isa, at naglalagay ng kopya ng larawan kung saan mo sabihin. Tingnan ang [Mga larawan](topic:pictures#objects-from-other-programs-ole).
- **Nananatili sa drawing ang iyong mga kalkulasyon.** Ang mga calc sheet at dahilan ng disenyo ay nakatago sa DWG kasama ang class table.

### Drafting nang walang paningin

- I-on ang {{ui:Drafting without sight}} sa {{ui:Settings}} (o i-type ang {{cmd:ACCESS}} at sagutin ang `On`). Binibigkas ng CadCraft ang bawat command at resulta sa pamamagitan ng iyong screen reader, inilalarawan ang drawing at kung ano ang malapit sa cursor, hinahayaan kang igalaw ang cursor at pumili ng punto gamit ang keyboard, at nagpapatugtog ng tunog para sa bawat snap at grip. Kung kayang kilalanin ng iyong browser ang pagsasalita sa iyong computer, maaaring bigkasin ang mga command. Tingnan ang [Mag-draft nang walang paningin](topic:draft-without-sight).

### Sa bawat app

- **Mga wika.** 54 na wika; sampu ang bago (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili, Uzbek). Ang mga wikang lampas sa English ay machine draft hangga't hindi ito nababasa ng isang native speaker.
- **Mga input device.** Trackpad, panulat, 3D mouse, game controller at MIDI control.
- **Mga toolbar row at property grid.** Nag-aalok ang {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} ng Wrap, 2 rows o 1 row sa iba pang app. May sarili itong setting ang CadCraft sa {{ui:Settings}} › {{ui:CadCraft}} (tingnan ang [Toolbar rows](topic:settings#toolbar-rows)). Nasa tatlong iba pang app ang shared property grid, hindi sa CadCraft.
- **Mga problema, Live at add-on.** Isang shared na Problems panel na nagbababala sa bawat app, isang Live view kung nasaan ang bawat isa sa CadCraft Studio (tingnan ang [Magtrabaho sa iisang drawing nang magkasama](topic:work-live)), at listahan ng mga add-on.
- **Ikonekta ang iyong AI.** Isang koneksyon mula sa CadCraft Studio papunta sa lahat ng walong app, na may antas na read-only, suggest o edit sa bawat app, at isang log sa simpleng salita ng ginawa ng assistant. Walang sariling AI ang CadCraft, at ang Ask sa bawat app ay gumagamit ng AI na ikinonekta mo.

## Naayos sa 0.8.1

- **Ipinakita ng Properties ang 150 sa halip na 12'-6"** sa mga drawing na feet at inches. Muling bumabalik ang teksto ng mga field na sariling binabasa ng app.
- **Mga DWG file na ang seksyon ng classes ay nabasa bilang maling uri** (GitHub cadcraft#5) ay bumubukas na nang tama.
- **Hindi na lumalabas ang crosshair sa likod ng mga pop-up.**
- **Maaaring magpalit ng wika habang tumatakbo ang Studio at ang mga naka-package na edisyon.** Dati, English lamang ang mga ito. Hindi pa nasusubukan sa bawat platform: sabihan kami kung hindi nagbabago ang wika.
- **Tablet na patayo** ay nagbibigay ng natitirang taas ng grid sa canvas, at nagsisimula ang sheets mode sa 760 px o mas mababa.
- **STRETCH na may tumatawid na window, at LIMITS,** ay iniulat sa Studio 0.8.0 at tama na sa 0.8 web build; mas luma ang installer ng nag-ulat. Dala na ng Studio 0.8.1 ang mga ito.

## Hindi pa sa bersyong ito

- **Hindi code-signed ang 0.8 at 0.8.1.** Maaaring magbabala ang Windows (piliin ang {{ui:More info}}, pagkatapos ay {{ui:Run anyway}}); sa Mac, i-right-click ang CadCraft Studio at piliin ang {{ui:Open}}. Naka-hold pa ang mga store build, at hindi muling na-build ang iPad at iPhone build para sa 0.8.1.
- **Ang mga pen sketch at litrato ng sketch** ay nasubukan lamang sa mga gawa-gawang litrato at mouse, hindi pa sa tunay na panulat, touch screen o sketch sa kamay sa papel.
- **Ang drafting nang walang paningin** ay nasubukan sa mga awtomatikong check, hindi pa sa screen reader o sa bulag na tester.
- **Ang pagbabahagi ng mga detalye** ay wala pang check ng dalawang tao, at hindi pa nabuo ang Team Cloud Plan folder bilang Documents folder.
- **Ang pag-merge** ay gumagana para sa mga DWG at DXF file ng CadCraft; hindi pa nabuo ang para sa mga file ng ibang app.
- **Undo sa pagitan ng mga window:** iniuulat ng CadCraft ang bawat natapos na hakbang, ngunit wala pang iisang Undo ang Studio para sa lahat ng app; sariling hakbang lamang ang na-undo ng bawat app.
- **Ang mga OLE object ng DWG** ay pinananatili ngunit hindi iginuguhit sa dating posisyon.
- **Ang pagbasa ng mga plot style table (CTB file)** mula sa ibang program ay nagawa na ngunit hindi pa nasusuri laban sa file mula sa ibang program.
- **Ikonekta ang iyong AI:** ang one-click connect sa Studio, ang hosted connector para sa browser AI, ang sarili mong API key sa loob ng Studio at ang nalathalang MCP package ay hindi ipinangako sa release na ito.

Para sa bersyon bago nito, tingnan ang [Ano ang bago sa 0.7](topic:whats-new-0-7).
