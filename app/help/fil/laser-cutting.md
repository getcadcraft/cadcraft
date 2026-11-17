---
title: Magpadala ng drawing sa laser
summary: Buksan ang Laser panel, piliin kung ano ang gagawin ng bawat layer (cut, score, engrave, fill, picture), i-preview ang mga galaw ng head, i-save ang GRBL laser-mode G-code, o ipadala ito mula sa browser pagkatapos i-frame ang job.
keywords: laser, laser cutter, laser engraver, GRBL, G-code, gcode, engrave, fill, dither, picture engraving, score, cut, Web Serial, i-frame ang job, power, bilis, pass, LASER, LASERCUT, CNC
from: 72b56db0
---

Ginagawang programa para sa isang laser na tumatakbo sa GRBL (karamihan ng hobby at maliit na shop na diode at CO2 controller) ang mga layer ng drawing ng {{ui:Laser}} panel. I-type ang `LASER` (o `LASERCUT`) at pindutin ang {{key:Enter}}, o piliin ang {{ui:Laser…}} sa {{ui:Higit pa}} menu ng {{ui:View}} group. Sa mga ribbon style, nasa {{ui:File}} menu ito at katabi ng {{ui:I-plot}}. Bumubukas ang panel sa ibabaw ng drawing at nananatiling bukas habang gumuguhit ka: sinusundan ng preview ang bawat pagbabago.

:::warning
Subukan muna ang bawat setting sa scrap. Magsuot ng eye protection na akma sa laser mo, panatilihing sarado ang takip kung mayroon, at huwag iwanang mag-isa ang laser na tumatakbo. Ang mga numerong sinisimulan ng bawat layer ay placeholder lamang, hindi rekomendasyon para sa anumang materyal.
:::

## Ano ang ipinapadala

Binabasa ng panel ang model (hindi ang mga sheet), sa mga layer na naka-on at naka-thaw:

- Mga linya, arc, bilog, polyline (nananatiling arc ang mga arc segment), ellipse at spline. Ang hugis na nagtatapos kung saan ito nagsimula ay binibilang na sarado.
- Binubuwag ang mga block: ang object sa layer 0 sa loob ng block ay sumasama sa layer ng block reference.
- Ang hatch ay nagpapadala ng boundary nito, kaya napupuno ang hatched na logo sa isang **Fill** layer.
- Ang picture (`IMAGEATTACH`) ay inuukit sa layer na nakatakda sa **Engrave picture**, kapag nakahanay ito nang tuwid (hindi naka-turn o nakahilig) at bukas sa CadCraft ang file nito.
- Hindi ipinapadala ang text, dimension, leader, point at construction line; sinasabi ng panel kung ilan ang iniwan. Para masunog ang text, iguhit ang mga letra bilang hugis o i-hatch ang mga ito.

Ipinapadala ang mga sukat sa millimeters mula sa unit ng drawing (`UNITS`): ang drawing sa inches ay minumultiply sa 25.4. Ang drawing na walang nakatakdang unit ay ipinapadala bilang isang unit sa isang millimeter. Lagyan ng tsek ang {{ui:Ang napiling object lang}} para ipadala ang bahagi lang ng drawing.

## Piliin kung ano ang gagawin ng bawat layer

Bawat layer na may laman ay isang row. Itinatakda ng {{ui:Gagawin}} ito sa **Cut**, **Score**, **Engrave lines**, **Fill shapes**, **Engrave picture** o **Not sent**, kasama ang {{ui:Power %}}, {{ui:Bilis mm/min}} at bilang ng {{ui:Pass}}. Ang bawat pagbabago ay isang undo step at naka-save sa drawing: pinananatili ng DWG (bawat bersyong sine-save ng CadCraft) at DXF ang mga setting, kaya bumubukas ang drawing kasama nila sa susunod. Binubuksan ng ibang programa ang file gaya ng dati; nakikita nila ang isang hindi ginagamit na block na pinangalanang CADCRAFT_LASER (ang pag-purge nito roon ay nag-aalis ng mga setting).

- **Fill** ay sinusunog ang loob ng mga saradong hugis sa mga linyang {{ui:Line spacing}} ang layo, sa isang {{ui:Anggulo}}, sa parehong direksyon o isa lang, na may overscan para nasa bilis na ang head kapag bumukas ang laser; ang cross-hatch ay nagdaragdag ng ikalawang pass sa 90°. Nananatiling bukas sa butas ang hugis na may butas.
- **Engrave picture** ay ginagawang tuldok ang isang picture (Floyd–Steinberg, Atkinson, ordered, o plain black and white sa isang threshold) o, sa *Grey levels*, ginagawang variable power.
- Ayos: mga picture at fill muna, saka line engraving, saka mga score, saka mga cut, para hindi gumalaw ang cut-out na piyesa habang inuukitan. Sa loob ng isang layer, tumatakbo ang mga path nang **inside-first** (ang butas bago ang plate na kinalalagyan nito), at ang susunod ay ang pinakamalapit.

## I-preview, saka i-save

Iginuguhit ng preview kung ano ang ginagawa ng head: ang mga linyang sinusunog sa kulay, ang mabilis na galaw sa abuhin, at isang berdeng kahon sa palibot ng lahat ng sinusunog. Sa ibaba nito ang laki, ang haba ng pagsunog at tinatayang oras (walang acceleration; mas matagal ang tunay na makina). Isinusulat ng {{ui:I-save ang G-code…}} ang GRBL laser-mode G-code: `$32=1`, `M4` (o `M3`) na may S value, mga galaw na `G0` at `G1`, at `M5` sa dulo. Ang X0 Y0 ay ang kaliwang ibabang sulok ng job maliban kung piliin mo ang origin ng drawing: itakda ang work zero ng makina mo roon.

## Ipadala mula sa browser

Sa Chrome at Edge, nagtatanong ang {{ui:Kumonekta…}} kung aling USB port ng laser ang pipiliin. Walang kumokonekta o nagpapadala hangga't hindi ka pumipindot ng button. Pindutin muna ang {{ui:I-frame ang job}}: ginuguhit ng head ang kahon ng job nang naka-**off** ang laser (o sa mababang power na itinakda mo para sa pointer) para makita mo kung saan ito susunog. Saka pa lang nagiging aktibo ang {{ui:Ipadala ang job}}, at papatayin ulit ito kapag may binago ka. Hahawakan ng {{ui:I-pause}} ang head, hahawakan din ito ng {{ui:Itigil}}, ire-reset ang controller (mamamatay ang laser) at magpapadala ng `M5`. Kung walang Web Serial (Firefox, Safari, at CadCraft Studio, na wala pang Web Serial) ang panel ay nag-aalok lang ng pag-save: i-save ang G-code at ipadala ito gamit ang sariling programa ng laser mo.

## Hindi pa ginagawa

Hindi pa ginagawa: ibang format ng controller (Ruida, Marlin laser, vendor file), tabs at lead-ins, kerf offset, material library, rotary at Z axis, camera alignment, text bilang outlines.
