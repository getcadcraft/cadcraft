---
title: Gumuhit gamit ang coordinates
summary: Gumuhit ng eksaktong outline ng sahig sa pamamagitan ng pag-type ng absolute, relative at polar na coordinates, at sa direct distance entry.
keywords: line, pline, polyline, coordinates, relative, polar, absolute, direct distance, @, pag-type ng mga punto, eksakto, ortho
from: 19e82350
---

## Ano ang gagawin mo

Ang outline ng isang kuwartong hugis-L, 6000 by 4500 na may 2000 by 1500 na notch, na eksaktong iginuhit, kasama ang isang pader sa 30 degree. Gagamitin mo ang lahat ng apat na paraan ng pag-type ng punto. Magtrabaho sa milimetro: ang isang drawing unit ay katumbas ng isang milimetro.

Ang mabilisang sanggunian para sa bawat format ay nasa [Pag-enter ng coordinate at distance](topic:coordinate-entry).

## Bago ka magsimula

1. Buksan ang CadCraft. Kung may bukas na drawing, i-click muna ang {{ui:Bago}}.
2. Pindutin ang {{key:Esc}} para walang napiling anuman. Ang kanang panel ay nagbabasa ng {{ui:Kasalukuyang setting}}.
3. Itakda ang {{ui:Mga unit}} sa {{ui:Milimetro}}. Walang nire-resize; sinasabi lamang nito sa mga sheet at plot kung ano ang ibig sabihin ng isang unit.

## Absolute coordinates: ang unang punto

Ang absolute coordinate ay posisyong sinusukat mula sa origin, tina-type bilang `x,y`.

1. I-type ang `L` at pindutin ang {{key:Enter}}. Ang prompt ay nagbabasa ng `Specify first point:`.
2. I-type ang `0,0` at pindutin ang {{key:Enter}}.

Ang linya ay nagra-rubber band na ngayon mula sa origin papunta sa crosshair. Ang coordinates sa status bar ay nagpapakita ng distansya at anggulo mula sa start point habang gumagalaw ka.

## Relative coordinates: @dx,dy

Ang relative coordinate ay tina-type bilang `@dx,dy`: gaano kalayo sa gilid, gaano kalayo pataas, mula sa huling punto. Ang mga negatibong numero ay pakaliwa o pababa.

3. I-type ang `@6000,0` at pindutin ang {{key:Enter}}. Tatakbo ang 6000 na linya pakanan.
4. I-type ang `@0,3000` at pindutin ang {{key:Enter}}.
5. I-type ang `@-2000,0` at pindutin ang {{key:Enter}}.
6. I-type ang `@0,1500` at pindutin ang {{key:Enter}}.

Dapat makita mo ang apat na magkakabit na linya na umaakyat sa kanang bahagi ng kuwarto.

## Direct distance entry: isang simpleng numero

Kapag nag-type ka ng isang numero, pupunta ang CadCraft sa distansyang iyon sa direksyon ng crosshair. I-on ang Ortho para tumama ang direksyon sa pahalang o patayo.

7. Pindutin ang {{key:F8}}, o i-click ang {{ui:Ortho}} sa status bar. Sinasabi ng status bar na "Naka-on ang Ortho".
8. Ilipat ang crosshair sa kaliwa ng huling punto. Nananatiling pahalang ang rubber band.
9. I-type ang `4000` at pindutin ang {{key:Enter}}. Pupunta ang linya nang 4000 sa kaliwa.
10. Ilipat ang crosshair sa ibaba ng huling punto.
11. I-type ang `4500` at pindutin ang {{key:Enter}}. Bumalik ka sa start point.
12. Pindutin ang {{key:Enter}} sa walang lamang prompt para tapusin ang command.

:::mac
Maaaring kontrolin ng F8 ang media playback sa Mac keyboard. Pindutin nang hawak ang **fn** at pindutin ang F8, o i-click ang {{ui:Ortho}}. Tingnan ang [Mga key, mouse at trackpad](common:keys).
:::

Mayroon ka na ngayong sarado na outline na hugis-L, na binubuo ng anim na magkakahiwalay na linya.

13. I-click ang {{ui:Extents}} para makita ang lahat nito.

## Polar coordinates: @distance<angle

Ang polar coordinate ay tina-type bilang `@distance<angle`. Nasa degree ang mga anggulo, sinusukat counterclockwise mula sa positibong direksyon ng X: 0 ay kanan, 90 ay pataas, 180 ay kaliwa, 270 (o -90) ay pababa.

14. I-type ang `L` at pindutin ang {{key:Enter}}.
15. I-type ang `6000,0` at pindutin ang {{key:Enter}} para magsimula sa kanang-ibabang sulok.
16. I-type ang `@2500<-30` at pindutin ang {{key:Enter}}. Aalis mula sa sulok ang 2500 na linya, pababa at pakanan sa 30 degree sa ilalim ng pahalang.
17. Pindutin ang {{key:Enter}} para tapusin ang command.

Ang polar coordinate na walang `@`, gaya ng `2500<30`, ay sinusukat mula sa origin sa halip na mula sa huling punto.

## Ang parehong outline bilang isang polyline

Maayos ang anim na magkakahiwalay na linya para sa maraming gawain, pero ang polyline ay isang object: ito ay nao-offset, nasusukat at napipili nang buo. Gamitin ang {{cmd:PLINE}} na may parehong input.

1. I-type ang `PL` at pindutin ang {{key:Enter}}.
2. I-type ang `0,-6000` at pindutin ang {{key:Enter}} para magsimula sa ibaba ng unang outline.
3. I-type ang `@6000,0`, pagkatapos pindutin ang {{key:Enter}}.
4. I-type ang `@0,3000`, pagkatapos pindutin ang {{key:Enter}}.
5. I-type ang `@-2000,0`, pagkatapos pindutin ang {{key:Enter}}.
6. I-type ang `@0,1500`, pagkatapos pindutin ang {{key:Enter}}.
7. I-type ang `@-4000,0`, pagkatapos pindutin ang {{key:Enter}}.
8. I-type ang `C` at pindutin ang {{key:Enter}}. Magsasara ang polyline at matatapos ang command.
9. I-click ang bagong outline. Ipinapakita ng kanang panel ang "Polyline", ang {{ui:Mga vertex}} nito, ang {{ui:Haba}} nito at, dahil sarado ito, ang {{ui:Lawak}} nito.

Dapat nakasulat na 24000000 ang area (milimetro kuwadrado, na katumbas ng 24 metro kuwadrado).

## Mga opsyon habang gumuguhit

- Sa {{cmd:LINE}} at {{cmd:PLINE}}, i-type ang `U` at pindutin ang {{key:Enter}} para bawiin ang huling segment nang hindi lumalabas sa command.
- Sa {{cmd:LINE}}, isinasara ng `C` pabalik sa unang punto kapag may kahit dalawang segment na.
- Sa {{cmd:PLINE}}, inililipat ng `A` sa arc segment (ang bawat arko ay tuloy-tuloy na nagpapatuloy mula sa naunang segment), at ibinabalik ng `L` sa mga linya. Sa arc mode, ang close option ay `CL`.
- Ang pagpindot ng {{key:Enter}} sa `Specify first point:` sa {{cmd:LINE}} ay nagsisimula sa huling punto na ibinigay mo, kaya maaari kang magpatuloy kung saan ka tumigil.

## Mga karaniwang pagkakamali

- **Pag-type ng `6000,0` kung ang ibig mo ay `@6000,0`.** Kapag walang `@`, sinusukat ang punto mula sa origin, hindi mula sa huling punto, kaya lilipad ang linya sa hindi inaasahang lugar. Sa CadCraft, laging absolute ang `x,y`. Pindutin ang `U` at {{key:Enter}} para bawiin ito.
- **Kuwit na na-type bilang decimal point.** Gumagamit ng tuldok ang decimal: `1250.5`. Palaging naghihiwalay ng X at Y ang kuwit.
- **Lumihis sa maling direksyon ang direct distance.** Sumusunod sa crosshair ang simpleng numero. Ilipat ang crosshair sa gustong panig bago pindutin ang {{key:Enter}}, at i-on ang {{ui:Ortho}} para sa tuwid na linya.
- **"Kinakailangan ang punto o keyword ng opsyon."** Hindi naintindihan ng CadCraft ang na-type mo. Tingnan kung may espasyo sa loob ng numero o kulang na kuwit, at i-type muli.
- **Talampakan at pulgada.** Mga plain na numero lang ang binabasa ng CadCraft. I-type ang `150` para sa 12'-6" sa drawing na nasa pulgada, o `12.5` sa drawing na nasa talampakan.
