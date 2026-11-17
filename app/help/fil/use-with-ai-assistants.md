---
title: Gamitin ang CadCraft kasama ng AI assistant
summary: Hayaan ang sarili mong AI assistant o script na gumana sa CadCraft: ano ang maaari nitong gawin, paano kumonekta ng anumang MCP client, at paano ka nananatiling may kontrol (mga pahintulot, undo, activity log, Disconnect).
keywords: ai, assistant, agent, mcp, model context protocol, script, automation, command line, cli, json, token, pahintulot, i-disconnect, aktibidad, mga folder, mga path, svg, batch
from: 06ba4ef6
---

## Ano ang matututunan mo

Paano payagan ang AI assistant (o script na isinulat mo) na tingnan ang isang drawing, patakbuhin ang mga command ng CadCraft, mag-plot at mag-save, at magpasya kung ano ang puwede nitong galawin.

Walang sariling AI ang CadCraft at wala itong ipinapadala kahit saan. Ikaw ang magdadala ng assistant: anumang program na nagsasalita ng Model Context Protocol (MCP). Binibigyan lang ng CadCraft ito ng mga tool, at ikaw ang pumipili kung alin.

May dalawang paraan para makapasok:

- **Ang drawing na bukas sa iyo.** Gumagana ang assistant sa window na ito, sa tabi mo, sa pamamagitan ng CadCraft Studio sa iyong computer. Ito ang para sa {{ui:Mga setting}} › {{ui:CadCraft}} › {{ui:Mga Assistant}}.
- **Mga drawing sa iyong computer, nang hindi binubuksan ang app.** Binabasa at isinusulat ng CadCraft MCP server at ng `cadcraft` command line ang mga file na DWG at DXF sa mga folder na tinukoy mo. Tingnan ang "Gumawa sa mga file nang hindi binubuksan ang CadCraft" sa ibaba.

## I-on ito

1. Buksan ang {{ui:Mga setting}} (ang gear sa app bar, o {{key:Mod+,}}) at pumunta sa tab na {{ui:CadCraft}}.
2. Sa ilalim ng {{ui:Mga Assistant}}, lagyan ng tsek ang **Payagan ang mga AI assistant at script na gumamit ng CadCraft**. Naka-off ito hanggang gawin mo ito.
3. Piliin kung ano ang puwede nitong gawin. Naka-tsek na ang **Basahin** sa simula; lagyan ng tsek ang iba kapag kailangan lang.

| Pahintulot | Ano ang maaaring gawin ng assistant |
|---|---|
| Basahin | Tingnan ang drawing: ilarawan ito, ilista at hanapin ang mga object, tingnan ang selection, ilarawan ang view at kumuha ng larawan nito, suriin ito ayon sa mga patakaran ng layer at drafting |
| I-edit | Magpatakbo ng mga command sa drawing at baguhin ang selection. Bawat aksyon ay isang hakbang na puwede mong i-undo |
| I-save | I-save ang drawing (sa desktop, sa file nito; sa browser, bilang download) |
| I-export | Mag-plot sa PDF at gumawa ng iba pang file |

## Hayaan itong gumamit ng mga file sa mga folder na pipiliin mo

Sa CadCraft Studio, puwedeng magbukas, mag-save at mag-plot ng mga file ayon sa pangalan ang assistant sa halip na gamitin ang mga file dialog, pero sa loob lamang ng mga folder na idadagdag mo sa ilalim ng {{ui:Mga Assistant}} › {{ui:Mga folder na maaari nitong gamitin}}:

1. Piliin ang {{ui:Magdagdag ng folder…}} at piliin ang folder sa sariling dialog ng Studio.
2. Puwede nang ilista ng assistant ang mga file doon (`files_list`), magbukas ng drawing (`drawing_open`), i-save ito roon sa bersyon ng DWG o bilang DXF, mag-plot sa file na PDF o SVG, mag-load ng LISP file, at bigyan ng file ang isang command na humihingi nito (`INSERT` `F`, `XATTACH`, isang point file), o sabihin kung saan mapupunta ang file ng isang command (ang CSV ng `COUNT`, `PUBLISH`).
3. Inaalis agad ng {{ui:Alisin}} ang isang folder. Tinatanggihan ang mga path kahit saan pa, at papalitan lamang ang file na naroon na kapag hiniling iyon ng assistant o ito ang sumulat ng file.

Kailangan pa rin ng **Basahin** para magbukas; ang pagsulat ng drawing ay nangangailangan ng **I-save**; anumang ibang file ay nangangailangan ng **I-export**.

Hindi inaalok sa assistant ang mga tool na nasa labas ng mga pahintulot na hindi mo nilagyan ng tsek, at kung humingi pa rin ito ng isa, tinatanggihan ito ng CadCraft at isinusulat sa activity log. Ang pag-off ng switch ay agad na nagtatapos sa lahat ng koneksyon. Pinapatay din ito ng {{ui:I-reset ang mga setting ng CadCraft}}.

## Ikonekta ang iyong assistant

Kumokonekta ang mga assistant sa pamamagitan ng **CadCraft Studio** sa iyong computer: nagpapatakbo ito ng maliit na server na tanging ang computer na ito lang ang makakaabot (address `127.0.0.1`), at protektado ng token na ginagawa ng Studio sa bawat pagsisimula nito. Buksan ang Studio, piliin ang {{ui:Ikonekta ang assistant}}, at kopyahin ang address at ang token.

- Sa iyong assistant, magdagdag ng MCP server na uri ng HTTP gamit ang address (mukha itong `http://127.0.0.1:47615/mcp`) at ang header na `Authorization: Bearer <token>`. Ipinapakita ng Studio ang mga setting na idi-paste.

Ang {{ui:Bagong token}} sa Studio ay nagpapakonekta muli sa bawat konektadong assistant gamit ang bagong token. Huwag kailanman ibahagi ang token: ang sinumang may hawak nito ay puwedeng gumamit ng mga app na in-on mo, habang tumatakbo ang Studio.

:::note
Hindi makabukas ng koneksyon para sa assistant ang isang browser tab: sa mga app sa browser, walang epekto ang switch hangga't hindi mo ginagamit ang CadCraft Studio sa iyong computer.
:::

## Ikaw pa rin ang may kontrol

- **Bawat aksyon ay isang hakbang na puwedeng i-undo**, na may label na pangalan ng assistant para dito, halimbawa "Assistant: LINE". Pindutin ang {{key:Mod+Z}} para bawiin nang buo ang huling aksyon ng assistant.
- **Nakikita mo kung ano ang ginagawa nito.** Lumalabas ang mga command nito sa command history na may **[Assistant]** sa unahan, at muling iginuguhit ang drawing habang gumagana ito.
- **Naghihintay ito sa iyo.** Habang nasa gitna ka ng isang command, puwedeng magbasa ang assistant pero hindi nito mababago ang drawing; sasabihan itong subukan muli kapag tapos ka na.
- **Alam mo kapag may nakakonekta.** Pinapangalanan ng isang button sa app bar ang assistant habang nakakonekta ito. I-click ito para makita kung ano ang puwede nitong gawin, o para **I-disconnect** ito.
- **Aktibidad.** Inililista ng {{ui:Mga setting}} › {{ui:CadCraft}} › {{ui:Mga Assistant}} › {{ui:Aktibidad}} ang bawat tawag: kailan, anong tool, tapos o tinanggihan, at ang hakbang ng undo na nagawa nito. Itinatago ng {{ui:I-save ang log}} ang isang kopya.

## Ano ang maaaring hilingin ng assistant

| Tool | Pahintulot | Ano ang ginagawa nito |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Basahin | Pangalan ng drawing, mga unit, layer, block, sheet; kung ano ang nasa screen |
| `files_list`, `drawing_open` | Basahin | Studio: ang mga file sa iyong mga folder; magbukas ng isa sa window na ito |
| `objects_list`, `object_get`, `selection_get` | Basahin | Mga object na may geometry, haba at lawak nila (o kung ilan lamang, ayon sa uri at layer); ang selection |
| `drawing_check` | Basahin | Mga patakaran gaya ng pinapayagang layer, walang laman ang layer 0, kulay na ByLayer, taas ng teksto |
| `view_screenshot` | Basahin | Larawan ng drawing gaya ng nakikita |
| `command_run` | I-edit | Nagta-type sa command line: ang `LINE 0,0 @100,0 @0,50 ` ay binabasa gaya ng pagta-type mo rito (ang espasyo ay nagtatapos ng sagot), o isang listahan na may isang sagot bawat isa. Puwede nitong iwanang bukas ang isang command at ituloy ito sa susunod nitong tawag |
| `script_run` | I-edit | Isang script (`.scr`) o LISP file, gaya ng pag-load nito ng {{ui:APPLOAD}} |
| `block_insert` | I-edit | Naglalagay ng block kasama ang mga value ng attribute nito sa isang hakbang |
| `selection_set`, `undo` | I-edit | Pumipili ng mga object para sa susunod na command; ina-undo ang sarili nitong mga hakbang |
| `drawing_save` | I-save | Ang sariling {{ui:I-save}} ng CadCraft, o {{ui:I-save bilang}} sa isa sa iyong mga folder |
| `drawing_plot` | I-export | PDF o SVG ng isang sheet o ng modelo, sa isang scale o kasya sa pahina (hindi pa naipi-print ang mga PDF underlay sa ganitong paraan) |

Habang nagpapatakbo ng command ang assistant, itinatanong ng CadCraft ang mga tanong nito sa command line sa halip na sa dialog (halimbawa, kung ilalagay ang buong drawing o isang block lamang), para masagot ng assistant ang mga ito. Kailangan pa rin ang iyong tulong sa Library at sa Find; sinasabihan ang assistant na magtanong sa iyo.

## Gumawa sa mga file nang hindi binubuksan ang CadCraft

Pinapatakbo ng CadCraft MCP server (`cadcraft-mcp`) at ng command line (`cadcraft`) ang sariling drawing code ng CadCraft sa Node.js, nang walang window. Kailangan nila ang Node.js 20 o mas bago.

- **Ang MCP server** ay gumagana lamang sa loob ng mga folder na tinukoy mo, at sa mga pahintulot lamang na ibibigay mo rito: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Kapag walang `--root`, hindi ito makakabukas ng anumang file; kapag walang `--allow`, babasa lamang ito. Puwede rin nitong basahin ang mga modelong IFC, takeoff, at ang mga markup sa mga set ng PDF.
- **Ang command line** ay para sa sarili mong mga script: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Ilang file nang sabay-sabay: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Magdagdag ng `--json` para sa output na mababasa ng isang program.

:::note
Kung sinasabi ng `npx @getcadcraft/mcp` na hindi mahanap ang package, hindi pa ito nailalathala. Ipapaalam ng balita sa getcadcraft.com kapag nailathala na ito.
:::

## Kung may hindi gumana

- **Walang nakikitang tool ng CadCraft ang assistant:** tiyaking naka-on ang switch sa window na ito, at bukas ang window sa Studio.
- **"kailangan ang pahintulot na I-edit":** lagyan ng tsek ang **I-edit** sa ilalim ng {{ui:Mga Assistant}}, saka muling humiling.
- **"nasa labas ng mga folder na maaaring gamitin ng assistant":** idagdag ang folder na iyon sa ilalim ng {{ui:Mga Assistant}} › {{ui:Mga folder na maaari nitong gamitin}}, o hilingin sa assistant na gamitin ang file sa folder na naidagdag mo na.
- **Mga error na "401" o "token":** nagbago ang token (nag-restart ang Studio, o {{ui:Bagong token}}). Kopyahin ang bago sa mga setting ng assistant.
- **Mali ang binago nito:** pindutin ang {{key:Mod+Z}}. Isang pindot ang magbabawi ng isang buong aksyon ng assistant.

## Tingnan din

- [Mga recipe para sa AI assistant](common:assistants-recipes): mga halimbawang may ginawang hakbang, bawat isa ay may tool na tinatawag nito.
