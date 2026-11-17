---
title: I-edit gamit ang grips at Properties
summary: I-stretch, ilipat at baguhin ang laki ng mga object gamit ang kanilang grips, at mag-type ng eksaktong haba, radius, anggulo at coordinate sa Properties panel.
keywords: grips, properties, stretch, haba, radius, coordinates, edit, quick properties, properties palette, baguhin, layer, kulay, color
from: f22541ba
---

## Ano ang matututunan mo

Dalawang mabilis na paraan para baguhin ang isang object nang walang command: i-drag ang mga **grip** nito, o mag-type ng bagong value sa **Properties** panel sa kanan.

## Grips

Kapag pumili ka ng mga object (hanggang 200 sa isang pagkakataon) habang walang tumatakbong command, lumalabas ang maliliit na parisukat sa mga ito. Ito ang mga grip:

| Object | Grips |
|---|---|
| Line | Parehong dulo, at ang gitna (ginagalaw ang buong linya) |
| Circle | Ang center (ginagalaw ito) at apat na punto sa bilog (binabago ang radius) |
| Arc | Ang center, at parehong dulo (binabago kung saan ito nagsisimula at nagtatapos) |
| Polyline | Bawat vertex |
| Text, point, block reference | Ang insertion point |
| Ellipse | Ang center |
| Dimension | Ang mga defining point nito at ang posisyon ng dimension line |
| Viewport | Ang center (ginagalaw ito) at ang apat na sulok (binabago ang laki nito) |

### Ilipat ang isang grip

1. Gumuhit ng linya at i-click ito. Tatlong grip ang lalabas.
2. I-click ang grip sa isang dulo. Sinasabi ng status bar: "Click where this grip goes (Esc to cancel). Snaps and Ortho apply."
3. Galawin ang crosshair. May sumusunod na preview.
4. I-click ang bagong posisyon, o mag-snap sa isang punto sa ibang object at i-click ito.

Gumagalaw ang dulo at nananatili ang iba pang bahagi ng linya. Maaari ka ring pumindot sa grip at i-drag ito, saka bitawan kung saan ito dapat pumunta.

:::note
Hindi ka maaaring mag-type ng coordinate para sa grip. Para sa eksaktong posisyon, mag-snap sa isang punto, o i-type ang value sa Properties.
:::

Pindutin ang {{key:Esc}} o i-right-click para kanselahin ang paggalaw ng grip.

## Properties

Ipinapakita ng kanang panel ang properties ng napili.

1. I-click ang isang linya. Ang heading ng panel ay nagsasabing "Line".
2. I-click sa {{ui:Length}}, i-type ang `2500` at pindutin ang {{key:Enter}}.

Ang linya ay eksaktong 2500 ang haba, habang nananatili ang start point at anggulo nito. Ang {{key:Enter}} o pag-click sa ibang lugar ay naglalapat ng value; ang {{key:Esc}} ay ibinabalik ang lumang value. Bawat pagbabago ay isang undo step, pati kapag maraming object ang nagbago nang sabay.

Tumatanggap ang mga field ng expression (`=2*45`) at haba na may unit (`3'6"`, `900mm`), bawat punto ay may X, Y at Z, at maaaring baguhin nang sabay ang ilang object. Nasa [Ang Properties panel](topic:properties-panel) ang lahat ng ito.

## Mga karaniwang pagkakamali

- **Walang lumalabas na grip.** May tumatakbong command (pindutin ang {{key:Esc}}), o higit sa 200 object ang napili, o nasa naka-lock na layer ang object.
- **Napunta ang grip sa maling lugar.** May nag-snap dito. Hawakan ang {{key:Shift}} habang nagki-click para balewalain ang mga snap.
- **Walang nangyari sa pag-type sa Properties.** Pindutin ang {{key:Enter}} o mag-click sa ibang lugar para ilapat. Ang entry na hindi tinanggap (zero o negatibong haba at radius, text na hindi value) ay nagiging pula ang field at sinasabi kung bakit.
- **Napunta sa Properties field ang mga letrang na-type.** Habang may cursor ang isang field, doon napupunta ang mga key. Pindutin ang {{key:Enter}} o {{key:Esc}}, saka i-type ang command.
