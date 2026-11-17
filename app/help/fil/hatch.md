---
title: Hatch at punan ang mga lugar
summary: Punan ang isang lugar ng solid na kulay o standard na pattern sa pag-click sa loob nito o sa pagpili ng mga saradong hugis, itakda ang scale at anggulo ng pattern, at baguhin ang hatch pagkatapos.
keywords: hatch, bhatch, fill, solid fill, pattern, ansi31, ansi37, brick, earth, net, section lines, poché, island, boundary, scale, angle
from: 14399174
---

## Ang gagawin mo

Isang section ng pader na napunan ng pattern na ANSI31, isang haligi sa loob nito na iniwang walang laman, at isang solid fill sa haligi.

## Mag-hatch sa pag-click sa loob ng lugar

1. Gumuhit ng rectangle (`REC`, `0,0`, `@2000,1200`) at bilog sa loob nito (`C`, `1000,600`, `300`). I-click ang {{ui:Extents}}.
2. I-click ang {{ui:Hatch}} sa grupong {{ui:Draw}}, o i-type ang `H` at pindutin ang {{key:Enter}}. Sinasabi ng history kung alin ang kasalukuyang pattern, halimbawa `Current hatch: ANSI31, scale 1, angle 0°`.
3. I-type ang `P` at pindutin ang {{key:Enter}}, i-type ang `ANSI31` at pindutin ang {{key:Enter}}.
4. I-type ang `SC` at pindutin ang {{key:Enter}}, i-type ang `20` at pindutin ang {{key:Enter}}. Nasa papel ang laki ng mga pattern, kaya ang drawing na naka-plot sa 1:20 ay nangangailangan ng scale 20.
5. Sa `Pick internal point`, i-click ang loob ng rectangle, sa labas ng bilog. Lalabas ang hatch bilang preview.
6. Pindutin ang {{key:Enter}}. Napunan na ng hatch ang rectangle; ang bilog sa loob ay nananatiling walang laman, dahil ito ay isang island.

I-click ang loob ng ilang lugar bago pindutin ang {{key:Enter}} para gawing iisang hatch ang mga ito. Binabawi ng `U` ang huling lugar.

## Solid fill

1. I-type ang `H` at pindutin ang {{key:Enter}}.
2. I-type ang `P`, pindutin ang {{key:Enter}}, i-type ang `SOLID` at pindutin ang {{key:Enter}}.
3. I-click ang loob ng bilog, pagkatapos pindutin ang {{key:Enter}}.

## Mag-hatch ng mga saradong hugis na pipiliin mo

Sa halip na mag-click sa loob, i-type ang `S` (Select objects) sa `Pick internal point` at pumili ng mga saradong polyline, bilog o saradong ellipse, pagkatapos pindutin ang {{key:Enter}}. Ang mga hugis sa loob ng iba ay nananatiling walang laman nang paisa-isa (ang pinakalabas ang napupunan, ang susunod ay nananatiling walang laman, at iba pa).

## Mga pattern

I-type ang `?` sa tanong tungkol sa pattern para makita ang listahan. Ang mga standard na pattern ay ANSI31 hanggang ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS at EARTH, at SOLID. Sa drawing na nasa inches (o may feet and inches bilang format ng haba), ginagamit ang inch na laki ng mga pattern, gaya ng sa AutoCAD; kung hindi, ang millimeter na laki.

{{ui:Angle}} (`A`) ang umiikot sa buong pattern: ang ANSI31 sa 90° ay kumikiling sa kabilang direksyon.

**Mga pattern file.** I-type ang `F` (Pattern file) sa `Pick internal point` at pumili ng `.pat` na file. Idinadagdag sa listahan ang mga pattern dito; kung higit sa isa, tatanungin ka kung alin ang gagamitin. Ang file na walang pattern na kayang basahin ng CadCraft ay magsasabi nito, at bibilangin ang anumang pattern na nilaktawan. Ang laki sa `.pat` file ay walang sariling unit, kaya binabasa ang mga ito sa mga unit ng drawing. Ang mga file na nakasulat sa karaniwang `.pat` format lamang ang nasubukan; wala pang nasubukang file na ginawa ng ibang programa.

## Baguhin ang hatch

Piliin ito (i-click ang isa sa mga linya nito). Sa {{ui:Properties}}: {{ui:Pattern}}, {{ui:Pattern scale}} at {{ui:Pattern angle}}. Ang mga hatch mula sa mga binuksang drawing ay ipinapakita ang pattern nila kapag isa ito sa mga standard; ang iba ay ipinapakita bilang mapusyaw na tono ng kanilang kulay.

## Mga karaniwang pagkakamali

- **"Walang saradong hangganan sa paligid ng puntong iyon."** May puwang sa outline, o may bahagi nito sa labas ng screen: tumitingin lang ang CadCraft sa nasa screen. Isara ang puwang (mag-zoom in sa mga sulok), o mag-zoom out.
- **"Masyadong siksik ang pattern para iguhit sa scale na ito."** Mas magkakalapit ang mga linya kaysa kayang ipakita ng drawing. Gumamit ng mas malaking scale: subukan ang plot scale (20 para sa 1:20).
- **Mukhang sobrang laki o liit ang pattern.** Ang scale ay nasa drawing units bawat pattern unit; tingnan ang hakbang 4 sa itaas.
- **Ang paglipat ng outline ay hindi naglilipat ng hatch.** Hindi nakatali ang hatch sa hangganan nito. Ilipat ang pareho, o mag-hatch ulit.

## Hatch na nananatili sa hangganan nito

Ang hatch na ginawa mo gamit ang `HATCH` ay naaalala kung ano ang nagbabatas dito. Ilipat, paikutin o i-scale ang hangganan at kasama nitong gagalaw ang hatch at ang pattern nito. I-drag ang grip para baguhin ang hugis ng hangganan at muling kakalkulahin ang hatch. Ilipat ang hatch nang mag-isa at kasama nitong gagalaw ang hangganan nito, tulad ng isang napunang hugis sa ibang drawing program.

Nagtatapos ang link, at sinasabi ito ng command line, kapag hindi na nagsasara ang hangganan o binago mo nang manu-mano ang hugis ng hatch. Nananatili ang hatch mismo. I-type ang `AS` habang nag-hatch para makagawa ng hatch na nakatayo nang mag-isa. Kapag kinopya mo ang hatch kasama ang hangganan nito, may sarili nang link ang kopya.

`HATCHEDIT` (`HE`) ay bumabago ng pattern, scale, anggulo at origin ng hatch, at ikinakabit ito sa hangganan o tinatapos ang link. Nise-save ang link sa DWG at DXF 2000 na mga file. Walang hatch object ang DXF R12 na file, at hindi nababasa ang mga link na ginawa sa ibang programa: gamitin ang `HATCHEDIT` at Link para sa mga iyon.

Ang hatch na wala nang hangganan (nabura ang hangganan, o walang kasamang hangganan ang file) ay maibabalik: ang `HATCHGENERATEBOUNDARY` (`HGB`) ay gumuguhit ng saradong polyline sa paligid ng bawat loop ng hatch at, kung sasagot ka ng Yes, ikinakabit ang hatch sa mga ito.

## Gradient fill

`GRADIENT` (`GD`) ay pumupuno ng lugar ng gradient sa halip na pattern: ang parehong pagpili gaya ng `HATCH`, pagkatapos nitong itanong ang uri (linear, cylindrical, spherical, hemispherical, curved, at ang bawat isa na naka-invert), isang kulay na may tint o dalawang kulay, ang anggulo, at kung centered o hindi. Sa `HATCH`, ginagawa ng opsyong `G` ang parehong bagay. Ang `HATCHEDIT` `G`, o ang {{ui:Properties}} sa ilalim ng Gradient, ay bumabago ng gradient o nagiging gradient ang anumang hatch.

Lumalabas ang gradient sa screen at sa mga plot. I-save bilang DWG 2004 o mas bago at makakakuha ng tunay na gradient hatch ang ibang programa. Walang gradient ang DXF 2000 at DWG 2000: doon, itinatago ito ng CadCraft para sa sarili nito, at ang nakikita ng ibang programa ay solid fill sa unang kulay.

## I-trim ang hatch

Pinuputol ng `TRIM` ang hatch tulad ng ibang object. I-click ang hatch sa gilid ng cutting edge na gusto mong alisin: hinahati ng mga gilid ang napunang lugar at inaalis ang piraso na iyon. Sa Quick mode, bawat object ay cutting edge; piliin muna ang mga gilid (opsyong `T`) kapag marami. Ang na-trim na hatch ay hindi na nakakabit sa hangganan nito, dahil hindi na nito napupunan ang hangganan.
