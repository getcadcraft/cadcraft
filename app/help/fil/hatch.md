---
title: Hatch at mga fill na area
summary: Punan ang isang area ng solid na kulay o standard na pattern sa pag-click sa loob nito o sa pagpili ng mga saradong hugis, itakda ang scale at anggulo ng pattern, at baguhin ang hatch pagkatapos.
keywords: hatch, bhatch, fill, solid fill, pattern, ansi31, ansi37, brick, earth, net, section lines, poché, island, boundary, scale, angle
from: e7feb344
---

## Ano ang gagawin mo

Isang seksyon ng pader na pinunan ng pattern na ANSI31, may haliging iniwang walang laman, at isang solid na fill sa haligi.

## Hatch sa pag-click sa loob ng area

1. Gumuhit ng rectangle (`REC`, `0,0`, `@2000,1200`) at isang bilog sa loob nito (`C`, `1000,600`, `300`). I-click ang {{ui:Extents}}.
2. I-click ang {{ui:Hatch}} sa grupong {{ui:Draw}}, o i-type ang `H` at pindutin ang {{key:Enter}}. Sinasabi ng history kung aling pattern ang kasalukuyan, halimbawa `Current hatch: ANSI31, scale 1, angle 0°`.
3. I-type ang `P` at pindutin ang {{key:Enter}}, i-type ang `ANSI31` at pindutin ang {{key:Enter}}.
4. I-type ang `SC` at pindutin ang {{key:Enter}}, i-type ang `20` at pindutin ang {{key:Enter}}. Ang laki ng pattern ay nasa papel, kaya ang drawing na naka-plot sa 1:20 ay nangangailangan ng scale na 20.
5. Sa `Pick internal point`, mag-click sa loob ng rectangle, sa labas ng bilog. Makikita ang hatch bilang preview.
6. Pindutin ang {{key:Enter}}. Nahatch ang rectangle; ang bilog sa loob ay nananatiling walang laman, dahil ito ay isang island.

Mag-click sa loob ng ilang area bago pindutin ang {{key:Enter}} para gawing iisang hatch ang mga ito. Binabawi ng `U` ang huling area.

## Solid na fill

1. I-type ang `H` at pindutin ang {{key:Enter}}.
2. I-type ang `P`, pindutin ang {{key:Enter}}, i-type ang `SOLID` at pindutin ang {{key:Enter}}.
3. Mag-click sa loob ng bilog, pagkatapos pindutin ang {{key:Enter}}.

## Hatch sa mga saradong hugis na pipiliin mo

Sa halip na mag-click sa loob, i-type ang `S` (Select objects) sa `Pick internal point` at pumili ng mga saradong polyline, bilog o saradong ellipse, pagkatapos pindutin ang {{key:Enter}}. Ang mga hugis sa loob ng iba ay nananatiling walang laman nang salit-salit (ang panlabas ay nahahatch, ang susunod ay walang laman, at iba pa).

## Mga pattern

I-type ang `?` sa tanong ng pattern para sa listahan. Ang mga standard ay ANSI31 hanggang ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS at EARTH, at SOLID. Sa drawing na nasa pulgada (o may feet at inches bilang length format), ginagamit ang mga sukat ng pattern sa pulgada, gaya ng sa AutoCAD; kung hindi, ginagamit ang mga sukat sa milimetro.

Ang {{ui:Anggulo}} (`A`) ay umiikot sa buong pattern: ang ANSI31 sa 90° ay nakahilig sa kabilang direksyon.

**Mga file ng pattern.** I-type ang `F` (Pattern file) sa `Pick internal point` at pumili ng `.pat` file. Ang mga pattern dito ay sasama sa listahan; kapag higit sa isa, tatanungin ka kung alin ang gagamitin. Ang file na walang pattern na nababasa ng CadCraft ay sinasabi ito, at bibilangin ang anumang pattern na nilaktawan nito. Ang mga sukat sa file na `.pat` ay walang sariling unit, kaya binabasa ang mga ito sa unit ng drawing. Tanging mga file na nakasulat sa karaniwang format na `.pat` ang nasubukan; wala pang ginawa ng ibang program.

## Baguhin ang hatch

Piliin ito (i-click ang isa sa mga linya nito). Sa {{ui:Properties}}: {{ui:Pattern}}, {{ui:Pattern scale}} at {{ui:Pattern angle}}. Ang mga hatch mula sa mga binuksang drawing ay ipinapakita ang pattern nila kapag isa ito sa mga standard; ang iba ay lumalabas bilang mapusyaw na tono ng kulay nila.

## Mga karaniwang pagkakamali

- **"No closed boundary round that point."** May puwang sa outline, o may bahaging wala sa screen: tumitingin lamang ang CadCraft sa nakikita sa screen. Isara ang puwang (mag-zoom in sa mga sulok), o mag-zoom out.
- **"The pattern is too dense to draw at this scale."** Mas magkakalapit ang mga linya kaysa kayang ipakita ng drawing. Gumamit ng mas malaking scale: subukan ang plot scale (20 para sa 1:20).
- **Sobrang laki o sobrang liit ng pattern.** Ang scale ay nasa mga unit ng drawing bawat unit ng pattern; tingnan ang hakbang 4 sa itaas.
- **Hindi na sinusunod ng hatch ang outline nito.** Ang hatch na ginawa gamit ang {{cmd:HATCH}} ay nananatiling kasama ng mga object na pinagmulan nito: ilipat, ikutin o i-scale ang outline at kasama nitong sasama ang hatch; hubugin ito gamit ang grip at muling kinakalkula ang hatch. Nagtatapos ang ugnayan kapag hindi na nagsasara ang outline, kapag ikaw mismo ang humubog ulit sa hatch, o kapag itinrim mo ito, at sinasabi ito ng command line. Walang nawawala: i-hatch muli ang area para muling iugnay ito.

## Hatch na nananatili sa boundary nito

Ang hatch na ginawa mo gamit ang `HATCH` ay naaalala kung ano ang nagbabalangkas dito. Ilipat, ikutin o i-scale ang boundary at kasama nitong sasama ang hatch at ang pattern nito. I-drag ang grip para humubog ulit sa boundary at muling kakalkulahin ang hatch. Ilipat ang hatch nang mag-isa at kasama nitong sasama ang boundary nito, gaya ng pinunong hugis sa programa ng drawing.

Nagtatapos ang ugnayan, at sinasabi ito ng command line, kung hindi na nagsasara ang boundary o kung hinubog mo ulit ang hatch nang mano-mano. Nananatili ang hatch mismo. I-type ang `AS` habang nagha-hatch para gumawa ng hatch na nakatayo nang mag-isa. Ang kopya ng hatch na kasama ng boundary nito ay may sariling ugnayan.

Ang `HATCHEDIT` (`HE`) ay nagbabago ng pattern, scale, anggulo at origin ng hatch, at nag-uugnay nito sa boundary o nagtatapos sa ugnayan. Naka-save ang ugnayan sa mga DWG at DXF 2000 file. Walang hatch object ang DXF R12 file, at hindi nababasa ang mga ugnayang ginawa sa ibang program: gamitin ang `HATCHEDIT` at Link para sa mga iyon.

Ang hatch na wala nang boundary (naburang boundary, o dumating ang file na wala nito) ay maibabalik: ang `HATCHGENERATEBOUNDARY` (`HGB`) ay gumuguhit ng saradong polyline sa paligid ng bawat loop ng hatch at, kung sasagot ka ng Yes, ikinokonekta ang hatch sa mga ito.

## Gradient na fill

Ang `GRADIENT` (`GD`) ay pumupuno ng area ng gradient sa halip na pattern: ang parehong pagpili gaya ng `HATCH`, pagkatapos nitong itanong ang uri (linear, cylindrical, spherical, hemispherical, curved, at ang bawat isa na baligtad), isang kulay na may tint o dalawang kulay, ang anggulo, at kung nasa gitna o hindi. Sa `HATCH`, ginagawa rin ng opsyong `G` ang parehong bagay. Binabago ng `HATCHEDIT` `G`, o ng {{ui:Properties}} sa ilalim ng Gradient, ang isang gradient o ginagawang gradient ang anumang hatch.

Nakikita ang gradient sa screen at sa mga plot. I-save bilang DWG 2004 o mas bago at makakakuha ng tunay na gradient hatch ang ibang program. Walang gradient ang DXF 2000 at DWG 2000: doon, itinatabi ito ng CadCraft para sa sarili nito, at ang ibang program ay nakikita ang solid na fill sa unang kulay.

## I-trim ang hatch

Pinuputol ng `TRIM` ang hatch gaya ng anumang object. I-click ang hatch sa gilid ng cutting edge na gusto mong alisin: hinahati ng mga edge ang hatched na area at inaalis ang piraso. Sa Quick mode, bawat object ay cutting edge; pumili muna ng mga edge (opsyong `T`) kapag marami. Ang na-trim na hatch ay hindi na nakakonekta sa boundary nito, dahil hindi na nito pinupunan ang boundary.
