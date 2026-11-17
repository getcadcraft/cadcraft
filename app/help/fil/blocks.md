---
title: Gumawa at mag-insert ng block
summary: Gawing block ang iginuhit na pinto, ilagay itong muli sa ibang posisyon, scale at anggulo, at linisin ang mga block na hindi nagagamit.
keywords: block, bmake, insert, ddinsert, simbolo, purge, explode, redefine, base point, reference, count, bcount, iskedyul, csv, attributes, pagkuha ng data
from: 125a129d
---

## Ano ang gagawin mo

Isang door symbol na ginawang block na pinangalanang `DOOR-900`, at pagkatapos ay inilagay nang tatlong beses: gaya ng iginuhit, naka-turn ng 90 degree, at naka-mirror.

Ang block ay isang pangkat ng mga object na may pangalan. Iguguhit mo ito nang isang beses; ang bawat lugar na gagamitin mo ito ay isang **block reference** na tumuturo pabalik sa iisang definition. Nakalista sa seksyong {{ui:Mga Block}} ng kaliwang panel ang mga block sa drawing at kung ilang beses ginamit ang bawat isa.

## Iguhit ang pinto

1. I-type ang `L` at pindutin ang {{key:Enter}}.
2. I-type ang `0,0` at pindutin ang {{key:Enter}}.
3. I-type ang `@0,900` at pindutin ang {{key:Enter}}, pagkatapos pindutin ulit ang {{key:Enter}}. Ito ang dahon ng pinto.
4. I-type ang `A` at pindutin ang {{key:Enter}}.
5. I-type ang `C` at pindutin ang {{key:Enter}} para unahin ang center.
6. I-type ang `0,0` at pindutin ang {{key:Enter}} para sa center.
7. I-type ang `900,0` at pindutin ang {{key:Enter}} para sa start point.
8. I-type ang `0,900` at pindutin ang {{key:Enter}} para sa end point. Ito ang bukas ng pinto.
9. I-click ang {{ui:Extents}}.

Pumupunta ang arko nang counterclockwise mula sa start point papunta sa end point.

## Gawin ang block

1. I-type ang `B` at pindutin ang {{key:Enter}}, o i-click ang {{ui:Gumawa}} sa grupong Blocks.
2. Sa `Enter block name`, i-type ang `DOOR-900` at pindutin ang {{key:Enter}}.
3. Sa `Specify insertion base point`, i-type ang `0,0` at pindutin ang {{key:Enter}}. Ito ang hinge: ang punto na lalapat kung saan mo ilalagay ang block.
4. Sa `Select objects`, i-drag ang window sa paligid ng dahon at ng arko.
5. Pindutin ang {{key:Enter}}.

Sinasabi ng history ang `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` Ipinapakita ng panel na {{ui:Mga Block}} ang DOOR-900 na may `1×` sa tabi nito: isang reference. I-click ang pinto: pipiliin na ito ngayon bilang iisang object, isang "Block reference".

:::tip
Maaari mong piliin muna ang mga object at pagkatapos i-type ang `B`. Itatanong pa rin ng CadCraft ang pangalan at base point, pagkatapos gagamitin ang iyong pinili.
:::

## I-insert ang block

1. I-type ang `I` at pindutin ang {{key:Enter}}, o i-click ang {{ui:I-insert}} sa tabi ng DOOR-900 sa panel na {{ui:Mga Block}}.
2. Sa `Enter block name or [File/Library] <DOOR-900>`, pindutin ang {{key:Enter}}. (Ang button na {{ui:I-insert}} sa panel ang maglalagay ng pangalan para sa iyo.)
3. Susunod ang pinto sa crosshair. I-click kung saan dapat ang hinge.

Lumilitaw ang pangalawang pinto.

## I-insert na naka-turn o naka-scale

1. I-type ang `I` at pindutin ang {{key:Enter}}, pagkatapos pindutin ulit ang {{key:Enter}} para tanggapin ang pangalan.
2. Sa `Specify insertion point [Scale/Rotate]`, i-type ang `R` at pindutin ang {{key:Enter}}.
3. I-type ang `90` at pindutin ang {{key:Enter}}. Iikot ang preview.
4. I-click para ilagay.

I-type ang `S` sa halip para magtakda ng scale factor; naaangkop ito sa parehong direksyon. Naaalala ang scale at rotation para sa susunod na insert. Para i-mirror ang pinto, i-insert ito at pagkatapos gamitin ang {{cmd:MIRROR}} sa reference.

## Baguhin ang nailagay na block

Piliin ang block reference. Sa kanang panel, maaari mong baguhin ang {{ui:X}}, {{ui:Y}}, {{ui:Scale X}}, {{ui:Scale Y}} at {{ui:Rotation}} nito. Ang negatibong {{ui:Scale X}} ay nagfi-flip nito.

## I-redefine ang block

Para baguhin ang bawat pinto nang sabay-sabay, gumawa ng block na may parehong pangalan:

1. Iguhit ang bagong bersyon ng pinto.
2. I-type ang `B` at pindutin ang {{key:Enter}}, at i-type ang `DOOR-900`.
3. Sa `Block "DOOR-900" already exists. Redefine it?`, i-type ang `Y` at pindutin ang {{key:Enter}}.
4. Ibigay ang base point at piliin ang mga bagong object, gaya ng dati.

Makikita na ngayon sa bawat reference ng DOOR-900 ang bagong bersyon.

O i-edit mismo ang block: ang {{ui:Mga Block}} › {{ui:Higit pa}} › {{ui:I-edit ang block}} ({{cmd:BEDIT}}) ay bubukas dito nang mag-isa, at ibabalik ito ng {{ui:I-save ang block}}. Tingnan ang [Mga attribute ng block](topic:attributes#change-a-block-the-block-editor).

## Bilangin ang block at i-export ang iskedyul

I-type ang {{cmd:COUNT}} (o {{ui:Mga Block}} › {{ui:Higit pa}} › {{ui:Bilangin ang block}}), pagkatapos:

- i-click ang isang pinto: pipiliin ang bawat pinto sa space na ito, at sinasabi ng history kung ilan ang narito at sa buong drawing;
- o pindutin ang {{key:Enter}}: ililista ng history ang bawat block kasama ang bilang nito, pinakamarami muna;
- o i-type ang `E`, pagkatapos `C` para sa CSV ng mga bilang (sa model, sa mga sheet, sa kabuuan) o `A` para sa isang hanay bawat reference, kasama ang layer, posisyon, rotation at bawat attribute value nito — isang iskedyul na mabubuksan mo sa spreadsheet.

Hindi binibilang ang mga block na walang pangalan (dimension, table) at ang mga reference sa loob ng ibang block. Ang mga cell na nagsisimula na parang formula (`=`, `+`, `-`, `@`) ay binibigyan ng nangungunang `'` para ipakita ito ng spreadsheet bilang teksto.

## Explode at purge

- Ang {{cmd:EXPLODE}} (`X`) ay ginagawang hiwa-hiwalay na object muli ang napiling block reference. Nananatili ang definition.
- Tinatanggal ng {{cmd:PURGE}} (`PU`) ang mga block definition na hindi na ginagamit ng anuman. Sinasabi ng history kung ilan ang natanggal.

## Mga pangalan ng block

Hanggang 255 character ang pangalan at maaaring may espasyo, pero hindi ito maaaring magsimula sa asterisk, at hindi maaaring maglaman ng `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` o backtick. Kapag nag-save ka ng DXF R12, isinusulat ang mga pangalan sa malalaking titik, ang ibang character maliban sa mga letra, digit, `$`, `_` at `-` ay nagiging `_`, at pinuputol sa 31 character ang mga pangalan; sinasabi ng history kung ilan ang nabago. Ang maiikling pangalan sa malalaking titik, digit at gitling, gaya ng `DOOR-900`, ay nananatiling hindi nagbabago. Ang na-save na DWG ay nagpapanatili ng mga pangalan gaya ng pagkaka-type mo, malaki at maliit na titik; ang mga character lamang na hindi pinapayagan ng DWG ang nagbabago (ang `|` ay nagiging `$0$`, ang iba ay nagiging `_`).

## Isulat ang block o mga object sa sarili nilang file

I-type ang `W` ({{cmd:WBLOCK}}) at pumili ng **Objects**, **Block** o **Buong drawing**. Ang resulta ay bagong DWG o DXF na naglalaman lamang ng mga layer, style at block na ginagamit nito, na may base point mo bilang origin. Para sa mga object, maaari mo itong panatilihin, gawing block, o burahin sa drawing na ito.

## Mga karaniwang pagkakamali

- **Malayo sa crosshair ang nalagay na block.** Wala sa mga object ang base point. Gawin muli ang block na may base point sa sulok o sa hinge.
- **"Walang napiling object; walang nagawa."** Pinindot mo ang {{key:Enter}} bago pumili ng kahit ano.
- **"Wala pang block ang drawing na ito: F ang mag-iinsert mula sa file, L mula sa library (o gumawa gamit ang BLOCK)."** I-type ang `F` para magdala ng block mula sa ibang drawing, o `L` para sa library. Tingnan ang [I-insert mula sa file o library](topic:insert-from-file-and-library).
- **"Hindi maaaring nasa loob ng block ang viewport."** Huwag isama sa pagpili ang mga frame ng viewport.
