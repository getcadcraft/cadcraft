---
title: "Mga Default Policy: itakda kung ano ang sisimulan ng bagong drawing"
summary: Sabihin nang isang beses kung aling units, length format, precision, taas ng text at sheet paper ang sisimulan ng bagong drawing, para sa metric at imperial na trabaho, at ibahagi ang mga policy sa buong opisina bilang maliit na file.
keywords: default, defaults, default policies, policy, pamantayan ng opisina, default ng opisina, template, bagong drawing, units, insunits, length format, architectural, precision, luprec, taas ng text, sheet paper, a1, ibahagi, export, import, json
from: 7b80fd13
---

## Ano ang gagawin mo

Sabihin sa CadCraft kung ano ang dapat sisimulan ng bagong drawing, para hindi na kailangang patakbuhin ng sinuman sa opisina ang UNITS at baguhin ang parehong bagay sa bawat pagkakataon. Ito ay add-on: naka-off ito hanggang sa i-on mo, at ang policy na hindi mo itinakda ay nananatili sa sarili nitong default ng CadCraft.

:::note
Ito ang mga default para sa **bagong** drawing at **bagong** sheet. Hindi binabago ang drawing na nasimulan mo na, at hindi rin ang drawing na binuksan mo.
:::

## Mga hakbang

1. Buksan ang Mga setting, pumunta sa {{ui:Add-ons}} at i-on ang {{ui:Default Policies}}.
2. Sa Mga setting, buksan ang tab na **CadCraft** at piliin ang {{ui:Default Policies}} sa listahan sa kaliwa.
3. Itakda ang mga policy na gusto mo. Bawat isa ay nagsisimula sa **sariling default ng CadCraft**. Ang policy na may kahong **Metric** at **Imperial** ay tumatanggap ng isang value para sa bawat uri ng drawing; punan lang ang mga kailangan mo.
4. Walang Save button: bawat pagbabago ay sine-save habang ginagawa mo ito.
5. Magsimula ng bagong drawing. Mayroon itong units, length format, precision at taas ng text na itinakda mo, at ang unang bagong sheet nito ay nasa paper na pinili mo.

## Ang mga policy

- **Units ng bagong drawing**: wala, millimeters, centimeters, meters, inches o feet.
- **Length format** at **Length precision**: ang itinatakda ng command na UNITS, para sa bagong drawing.
- **Taas ng bagong text**, sa drawing units.
- **Paper ng bagong sheet**: ang paper na ginagamit ng New sheet.
- **Mga laki ng annotation sa paper** (Mga setting › Global › Default Policies): ang taas ng opisina sa millimeter gaya ng naka-print. Ginagamit ito ng CadCraft para sa mga note at label: itinatakda ng {{cmd:ANNOSCALE}} ang taas na sisimulan ng bagong text sa taas na iyon sa annotation scale. Tingnan ang [Units, papers at scales](topic:units-papers-scales#annotate-by-scale).

Ang drawing na nasa inches o feet ay gumagamit ng mga Imperial na value; ang ibang drawing ay gumagamit ng mga Metric. Ang drawing na walang units ay gumagamit ng unit system na nakatakda sa Mga setting › Global › Default Policies, o Metric kapag walang nakatakda.

## Ibahagi ito sa buong opisina

1. Sa Mga setting, buksan ang tab na **Global** at piliin ang {{ui:Default Policies}}.
2. I-click ang {{ui:Save to a file}}. Makakakuha ka ng maliit na file na nagtatapos sa `.ccdefaults.json`.
3. Sa ibang computer, i-on ang add-on, buksan ang parehong lugar at i-click ang {{ui:Load from a file}}. Papalitan ng mga policy ng file ang mga nasa computer na iyon.

Iisang file ang may hawak ng mga policy ng bawat app ng CadCraft, kaya gumagana rin ang parehong file sa BimCraft.

## Mabuting malaman

- Walang policy para sa scale ng sheet: ang view ng bagong sheet ay kinakasya sa drawing, at ikaw ang magtatakda ng scale nito sa sheet.
- Walang policy para sa dimension style: ang bagong drawing ay walang pinangalanang dimension style. Itakda ang mga dimension gamit ang DIMSTYLE, o magsimula sa drawing na mayroon ng sa iyo.
- Plain at bukas na JSON ang file. Ang policy na pinangalanan ng file na hindi alam ng bersyong ito ay hindi isasama at babanggitin sa mensahe; ang iba ay mag-lo-load pa rin.
- Nakatago ang mga policy sa browser na ito, hindi sa drawing. I-off ang add-on at babalik ang lahat sa sariling default ng CadCraft.
