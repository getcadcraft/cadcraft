---
title: I-turn ang view at gamitin ang sarili mong coordinates (UCS)
summary: I-turn ang view ng 90° o sa anumang anggulo nang hindi ginagalaw ang anuman sa drawing, at magtakda ng user coordinate system (UCS) para ang mga point, ortho, polar tracking, grid at bagong text ay sumunod sa sariling axes ng gusali.
keywords: ucs, user coordinate system, plan, i-turn ang view, i-rotate ang view, view twist, ucs z, ucs 3point, ucs object, ucs world, named ucs, ucsfollow, turnleft, turnright, turnworld, gusaling nakatagilid, naka-rotate na grid
from: 6f152c65
---

## Ano ang matututunan mo

Paano tingnan ang drawing na naka-turn para ang gusaling iginuhit sa anggulo ay lumitaw nang tuwid sa screen, at paano mag-type ng mga point kasunod ng sarili nitong axes. Walang gumagalaw sa drawing habang ginagawa mo ito: pinananatili ng mga object ang kanilang coordinates, hindi edit ang pag-turn, at hindi minamarkahang nabago ang drawing.

## I-turn ang view ng isang quarter

1. I-click ang {{ui:View}} › {{ui:More}} › {{ui:Ikot ng view 90° pakaliwa}} o {{ui:Ikot ng view 90° pakanan}}.

Umiikot ang drawing sa screen sa paligid ng gitna ng drawing area. Ulitin ito para magpatuloy sa pag-ikot.

2. I-click ang {{ui:View}} › {{ui:More}} › {{ui:Bumalik sa world}} para ibalik ito sa pagkakapantay.

Ang mga command sa likod ng mga ito ay {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} at {{cmd:TURNWORLD}}. Para bigyan ang isa ng key, magdagdag ng linya gaya ng `TL=TURNLEFT` sa iyong aliases gamit ang {{cmd:ALIASEDIT}}.

## Pumantay sa nakatagilid na gusali

1. I-type ang `UCS` at pindutin ang {{key:Enter}}, pagkatapos ang `OB` at {{key:Enter}}.
2. I-click ang isang linya ng pader malapit sa dulong dapat maging origin.

Ngayon ang UCS ay nagsisimula sa dulong iyon, na ang X axis ay kasunod ng pader, at nagtuturn ang view para pantay ang pader sa screen. Ipinapakita ng axis icon sa kaliwang ibabang sulok kung saan nakaturo ang mga axis ng UCS.

3. Gumuhit gaya ng dati. Kapag may UCS na nakatakda:
   - Ang `x,y` at `@dx,dy` ay sinusukat kasunod ng mga axis ng UCS; ang `d<a` ay sumusukat ng anggulo mula sa X axis ng UCS.
   - Ang {{ui:Ortho}}, polar tracking at grid ay sumusunod sa mga axis ng UCS, at gayon din ang crosshair.
   - Ang bagong text at bagong paragraph ay tumatakbo kasunod ng X axis ng UCS; sumusunod din dito ang pahalang at patayo ng {{cmd:DIMLINEAR}}.
   - Ang mga coordinate sa status bar at mula sa {{cmd:ID}} ay mga UCS coordinate.
4. Para mag-type ng world point habang may nakatakdang UCS, ilagay ang `*` sa unahan: `*0,0` o `@*100,0`.
5. I-type ang `UCS`, {{key:Enter}}, pagkatapos {{key:Enter}} muli para bumalik sa world.

## Iba pang paraan para magtakda ng UCS

Sa prompt ng {{cmd:UCS}}:

| Ang tinype mo | Ang ginagawa nito |
|---|---|
| isang point | Bagong origin; pagkatapos i-click ang isang point sa bagong X axis, o pindutin ang {{key:Enter}} para panatilihin ang anggulo |
| `Z` | Iikot ang UCS sa paligid ng origin nito ayon sa anggulong itatype mo (degrees, counter-clockwise) o pipiliin |
| `3` (3point) | Isang origin, isang point sa positibong X axis, at isang point sa positibong-Y na gilid |
| `OB` (OBject) | Mula sa linya, arc, bilog, segment ng polyline, text, block reference, point o construction line |
| `P` (Previous) | Ang UCS bago ito (ang huling sampu ay pinananatili habang bukas ang drawing) |
| `W` (World) | Pabalik sa world |
| `NA` (NAmed) | `S` ini-save ang kasalukuyang UCS sa isang pangalan, `R` ibinabalik ang isa, `D` binubura ang isa, `?` inililista sila |

Bawat pagbabago ay nagtuturn ng view para pantay ang bagong X axis ng UCS. Iniikot ng {{cmd:PLAN}} ang view nang hindi binabago ang UCS: {{key:Enter}} para sa kasalukuyang UCS, `U` para sa naka-save, `W` para sa world.

## Mabuting malaman

- Ang bawat pane ng split screen ay may sariling turn. Nabibilang ang UCS sa drawing.
- Ang mga sheet ay gumagana sa paper coordinates; magtakda ng UCS sa tab na {{ui:Model}}, o sa loob ng viewport.
- Ang mga selection window na idinrag sa naka-turn na view ay pumipili ng nasa loob nila sa screen.
- Tumatanggap ang LISP routines ng point sa UCS mula sa `getpoint`, nababasa ang `UCSORG`, `UCSXDIR`, `UCSYDIR` at `VIEWTWIST`, at nagko-convert ang `trans` sa pagitan ng world, UCS at display.

:::note
Pinananatili ng na-save na file ang UCS at ang turn ng view sa mas bagong build; hanggang doon, tumatagal ang mga ito habang bukas ang drawing.
:::
