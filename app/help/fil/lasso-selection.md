---
title: Pagpili gamit ang lasso
summary: Pindutin at i-drag ang malayang outline sa paligid ng mga object para piliin ang mga ito, bilang window, crossing o fence; magpalit gamit ang Space habang nagdra-drag.
keywords: lasso, lassomode, i-drag, malayang guhit, piliin, pagpili, window, crossing, fence, space, polygon, touch, pen, rectangle
from: 9ec6154d
---

## Ano ang matututunan mo

Paano pumili ng mga object sa pamamagitan ng pagguhit sa paligid ng mga ito, at kung paano ibabalik ang rectangle kapag gusto mo.

## Gumuhit ng lasso

1. Gumuhit ng ilang linya at bilog na magkakalapit.
2. Kapag walang tumatakbong command, pindutin ang mouse button sa bakanteng lugar, at i-drag sa paligid ng ilan sa mga ito, gumagalaw muna sa **kanan**.
3. Bitawan.

Ang mga object lang na ganap na nasa loob ng outline ang napipili. Solid ang outline habang nagdra-drag: ito ay window lasso.

## Window, crossing at fence

Nakadepende kung aling mga object ang makukuha mo sa unang galaw ng iyong drag, at sa {{key:Space}}:

| Ang i-drag mo | Lasso | Pumipili |
|---|---|---|
| Pakanan muna | Window (solid na outline) | Mga object **na ganap na nasa loob** lang |
| Pakaliwa muna | Crossing (dashed, berde) | Mga object sa loob **at** mga object na nadadaanan ng outline |
| Pindutin ang {{key:Space}} habang nagdra-drag | Window, pagkatapos crossing, pagkatapos fence | Fence (dashed na landas, hindi sarado): mga object lang na tinatawid ng landas |

1. Pindutin sa bakanteng lugar at i-drag sa paligid ng ilang object, gumagalaw muna sa **kaliwa**. Lahat ng nadadaanan ng outline ay napipili rin.
2. Pindutin ang {{key:Esc}}.
3. Pindutin at i-drag muli; habang hawak pa rin ang button, pindutin ang {{key:Space}} nang isang beses. Magiging crossing ang outline; pindutin ulit ang {{key:Space}} para maging fence.

{{key:Shift}} habang binibitawan ay inaalis ang mga object sa pagpili (kasama ang "Clicking objects: Adds" sa {{ui:Settings}}).

## Sa loob ng command

Gumagana ang lasso saanman magtanong ang CadCraft ng `Select objects`: iguhit ito, pagkatapos pindutin ang {{key:Enter}} para tapusin. Kinukuha ng {{cmd:STRETCH}} ang crossing lasso bilang window nito, para ma-stretch mo ang L-shaped na bahagi ng drawing sa isang galaw.

{{cmd:TRIM}} at {{cmd:EXTEND}} ay iba ang gamit sa drag: doon, tinatrim (o pinapahaba) nito ang bawat piyesang tinatawid ng landas. Tingnan ang [I-trim at i-extend](topic:trim-and-extend).

## Ang rectangle

Ang click sa bakanteng espasyo, isang galaw, at pangalawang click ay laging gumuguhit ng rectangle window (kaliwa papuntang kanan) o crossing (kanan papuntang kaliwa).

Para gumuhit ulit ng rectangle ang drag, buksan ang {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Dragging to select}} at piliin ang {{ui:Rectangle}}, o i-type ang {{cmd:LASSOMODE}}, pagkatapos `0`. I-type ang {{cmd:LASSOMODE}}, pagkatapos `1` para sa lasso. Naka-save ang pinili sa browser na ito.

:::touch
I-drag gamit ang daliri o pen sa parehong paraan. Pipili pa rin ng isang object ang tap.
:::

## Mga karaniwang pagkakamali

- **Walang napili.** Window ang lasso at walang nasa loob nang ganap. Simulan ang drag pakaliwa, o pindutin ang {{key:Space}} habang nagdra-drag.
- **Gumalaw ang grip sa drag.** Ang pagpindot sa grip ng napiling object ay gumagalaw sa grip. Simulan ang lasso sa bakanteng lugar.
- **Tinapos ng Space ang command.** Pinapalitan lang ng {{key:Space}} ang lasso habang nakapindot ang button; kung hindi, Enter ito.
