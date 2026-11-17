---
title: Mag-snap sa mga punto sa object
summary: Gamitin ang object snap, Ortho at grid para pumili nang eksakto ng endpoint, midpoint, center at intersection gamit ang mouse.
keywords: osnap, object snap, endpoint, midpoint, center, intersection, perpendicular, quadrant, nearest, node, insertion, ortho, grid, f3, f8, f7, polar tracking, polar, polarang, object snap tracking, otrack, tracking, f10, f11
from: 3cf17f94
---

## Ano ang gagawin mo

Isang rectangle na may dalawang diagonal, isang bilog na nakasentro kung saan nagsasalubong ang mga ito, at isang linya mula sa gitna ng isang gilid na parisukat papunta sa bilog. Bawat punto ay pinipili gamit ang mouse, at bawat punto ay eksakto.

## Paano gumagana ang snap

Habang humihingi ng punto ang isang command, naghahanap ang CadCraft ng mga snap point sa loob ng mga 10 pixel mula sa crosshair. Kapag may nakita ito, lilitaw ang isang marker at label (gaya ng "Endpoint", "Intersection"), at ang click ay tatama nang **eksakto** sa puntong iyon, hindi kung nasaan ang crosshair.

Naka-on ang mga snap kapag nakapindot ang {{ui:Snap}} sa status bar. Ino-on at ino-off ito ng {{key:F3}}.

Ang mga snap na maaari mong gamitin ay:

| Snap | Tumatama sa |
|---|---|
| Endpoint | Ang mga dulo ng linya, arko at segment ng polyline |
| Midpoint | Ang gitna ng mga linya, arko at segment ng polyline |
| Center | Ang center ng mga bilog at arko, at ng arc segment ng polyline |
| Quadrant | Ang 0, 90, 180 at 270 degree na punto ng mga bilog at arko |
| Intersection | Kung saan nagsasalubong ang dalawang object |
| Perpendicular | Ang punto sa object na patayo sa huling punto (kailangan ng base point) |
| Tangent | Ang punto sa bilog o arko kung saan dumadampi ang linya mula sa huling punto. Kapag wala pang huling punto (unang punto ng linya), sinasabi ng marker na "deferred": kinukuwenta ang punto ng pagdampi kapag alam na ang susunod na punto, kaya ang linyang mula Tangent papuntang Tangent ay dumadampi sa parehong bilog |
| Nearest | Ang pinakamalapit na punto sa anumang object |
| Node | Mga punto |
| Insertion | Ang insertion point ng teksto at block reference |

Lahat ng mga ito ay naka-on bilang default maliban sa Tangent at Nearest. Madalas manalo ang Nearest kapag may iba kang gustong piliin; i-on ang Tangent kapag kailangan mo ito.

## Piliin ang mga snap

1. I-click ang maliit na arrow sa tabi ng {{ui:Snap}} sa status bar. Bubukas ang listahang {{ui:Object snaps}}.
2. Lagyan ng check o alisin ang check ng mga snap. Agad na nalalapat ang mga pagbabago.
3. I-click muli ang arrow para isara ang listahan.

Naaalala ng CadCraft ang iyong pinili, at ang mga setting ng {{ui:Grid}}, {{ui:Ortho}} at {{ui:Snap}}, sa browser na ito.

## Mga hakbang

1. I-type ang `REC` at pindutin ang {{key:Enter}}.
2. I-type ang `0,0` at pindutin ang {{key:Enter}}.
3. I-type ang `@4000,3000` at pindutin ang {{key:Enter}}. Lilitaw ang rectangle.
4. I-click ang {{ui:Extents}}.
5. I-type ang `L` at pindutin ang {{key:Enter}}.
6. Ilipat ang crosshair sa kaliwang-ibabang sulok. Ipinapakita ng marker ang "Endpoint". I-click.
7. Ilipat sa kanang-itaas na sulok hanggang lumitaw ang "Endpoint". I-click.
8. Pindutin ang {{key:Enter}} para tapusin ang linya.
9. Pindutin muli ang {{key:Enter}} para ulitin ang {{cmd:LINE}}, at iguhit ang kabilang diagonal mula sa kanang-ibabang sulok papunta sa kaliwang-itaas na sulok sa parehong paraan.
10. I-type ang `C` at pindutin ang {{key:Enter}} para magsimula ng bilog.
11. Ilipat ang crosshair kung saan nagsasalubong ang mga diagonal. Ipinapakita ng marker ang "Intersection". I-click.
12. I-type ang `800` at pindutin ang {{key:Enter}}.

Dapat makita mo ang bilog na eksaktong nakasentro sa salubungan.

13. I-type ang `L` at pindutin ang {{key:Enter}}.
14. Ilipat sa gitna ng kaliwang gilid ng rectangle hanggang lumitaw ang "Midpoint". I-click.
15. Ilipat ang crosshair sa bilog, sa kaliwang bahagi nito. Ipinapakita ng marker ang "Perpendicular" o "Quadrant"; parehong punto ang mga ito dito. I-click.
16. Pindutin ang {{key:Enter}}.

Ang bagong linya ay tumatakbo mula sa gitna ng kaliwang gilid at humihinto nang eksakto sa bilog.

## Laktawan ang snap para sa isang click

Pindutin nang hawak ang {{key:Shift}} habang nag-click ka. Hindi papansinin ang object snap para sa click na iyon, at ang punto ay eksaktong mapupunta kung nasaan ang crosshair (o sa direksyon ng Ortho, kung naka-on ang Ortho).

## Ortho

Pinananatili ng {{ui:Ortho}} ({{key:F8}}) na tuwid pakanan o tuwid pataas at pababa mula sa base point ang susunod na punto. Naaangkop ito sa mga click at sa direct distance entry (simpleng numerong na-type sa prompt). Nananalo ang object snap laban sa Ortho: kapag may lumitaw na snap marker, mapupunta ang click sa snap.

## Polar tracking

Ang {{ui:Polar}} ({{key:F10}}) ay Ortho sa mas maraming anggulo. Habang may base point ang command (ang huling punto ng linya, o base point ng move), nagla-line up ang pointer kapag lumalapit ito sa ray mula roon sa multiple ng polar step: may lumalabas na tuldok-tuldok na linya, at ang label sa tabi ng crosshair ay nagbabasa ng `Polar: 1200 < 30°`. I-click para gamitin ang puntong iyon, o mag-type ng distansya: ang `1200` ay eksaktong pupunta ng 1200 sa kahabaan ng ray.

Ang step ay 90° hangga't hindi mo ito binabago: i-type ang {{cmd:POLARANG}}, pindutin ang {{key:Enter}}, at i-type ang `30` (o 45, 22.5, 15 …). Nagbubukod ang Polar at Ortho: ang pag-on ng isa ay nag-o-off ng isa pa.

## Object snap tracking

Inilalinya ng {{ui:Track}} ({{key:F11}}) ang pointer sa mga snap point na pinagpahingahan mo, para makapili ka ng punto na kapantay ng isang sulok at nasa itaas ng isa pa nang hindi gumuguhit ng helper na linya.

1. I-on ang {{ui:Snap}} at {{ui:Track}}, at simulan ang command na humihingi ng punto (`L`).
2. Ipahinga ang pointer sa isang snap point, gaya ng sulok, nang kalahating segundo, nang hindi nag-click. May maliit na krus na magmamarka rito: nakuha na ito. Ipahinga muli dito para bitawan ito.
3. Ilipat ang pointer nang tuwid palayo rito, pahalang o patayo. Susunod sa pointer ang tuldok-tuldok na linya at ang label ay nagbabasa ng `Track: 600 < 90°`. I-click, o mag-type ng distansya.
4. Kumuha ng ikalawang punto, at ilipat sa lugar kung saan nagtatagpo ang patayo mula sa isa at ang pahalang mula sa kabila: mag-sa-snap ang pointer sa salubungang iyon (`Track: where two lines meet`).

Kapag naka-on rin ang {{ui:Polar}}, sumusubaybay ang mga nakuhang punto sa bawat polar angle. Hanggang pitong punto ang pinananatili, hanggang matapos ang command. Ino-off ng {{key:Shift}} ang tracking para sa isang click, gaya ng sa mga snap.

## Grid

Ipinapakita ng {{ui:Grid}} ({{key:F7}}) ang grid ng mga linya sa likod ng drawing, na may mas makapal na linya kada ikalimang linya; nagbabago ang espasyo habang nag-zo-zoom ka. Gabay lamang ito hanggang i-on mo ang {{ui:Grid snap}} ({{key:F9}}): kapag naka-on, tatama ang mga click sa pinakamalapit na grid point, maliban kung kukunin muna ng object snap ang punto.

## Mga function key sa iyong computer

Ang {{key:F9}} ay Grid snap, ang {{key:F10}} ay Polar at ang {{key:F11}} ay Track.

:::mac
Sa Mac, karaniwang kinokontrol ng F3, F7, F8 at F9 ang Mission Control at media. Pindutin nang hawak ang **fn** kasama ang key, o i-on ang standard na function key, gaya ng inilarawan sa [Mga key, mouse at trackpad](common:keys). Laging gumagana ang mga button sa status bar.
:::

:::firefox
Sa Firefox, ang F7 ay key din para sa caret browsing. Kung magtanong ang Firefox kung ii-on ang caret browsing, piliin ang **No**. Gamitin ang button na {{ui:Grid}} kung paulit-ulit lumalabas ang tanong.
:::

:::touch
Sa touch screen ay walang hover, kaya lumilitaw ang snap marker lamang kung saan dumadampi ang daliri mo. Mag-zoom in nang malapitan para sa maliliit na target, o mag-type na lang ng coordinates.
:::

## Mga karaniwang pagkakamali

- **Napunta sa maling punto ang click.** Tingnan ang label ng marker bago ka mag-click: nananalo ang Endpoint laban sa Midpoint kapag parehong malapit. Mag-zoom in, o alisin ang check ng mga snap na hindi mo kailangan.
- **Walang lumalabas na marker.** Naka-off ang {{ui:Snap}}, o naka-untick ang snap na gusto mo, o nasa layer na naka-off o frozen ang object.
- **Maling bagay ang nahahawakan ng snap sa masikip na drawing.** Mag-zoom in. Sinusukat sa screen pixel ang snap distance, kaya ang pag-zoom in ay nagpapaliit nito sa drawing.
- **Inaasahang magbibigay ng tuwid na linya ang Shift.** Sa CadCraft, ino-off ng Shift ang mga snap para sa isang click. Gamitin ang {{ui:Ortho}} para sa tuwid na linya.
- **Inaasahang tatama ang mga punto sa grid point.** I-on ang {{ui:Grid snap}} ({{key:F9}}), o mag-type ng coordinates para sa mga buong numero.
