---
title: Ayusin ang drawing gamit ang mga layer
summary: Gumawa ng mga layer para sa pader, pinto at notes, magtakda ng kulay, gawing kasalukuyan ang isang layer, at i-off, i-freeze, i-lock o pigilan sa pag-plot ang mga ito.
keywords: layer, layers, la, kasalukuyang layer, freeze, thaw, lock, off, on, plot, huwag i-plot, kulay, colour, color, properties ng layer, layiso, layuniso, ihiwalay, layoff, layfrz, laymcur, layon, laythw, rename, laymrg, merge, laydel, burahin ang layer
from: cd033591
---

## Ano ang gagawin mo

Tatlong layer, Walls, Doors at Notes, bawat isa ay may sariling kulay, may mga object na iginuhit sa bawat isa at inilipat sa pagitan nila.

## Ang panel ng Layers

Nasa panel sa kaliwa ang mga layer, sa ilalim ng {{ui:Layers}}. Ipinapakita ng bawat row, mula kaliwa pakanan:

- isang tuldok: puno para sa **kasalukuyang** layer, kung saan pumupunta ang mga bagong object;
- isang color swatch;
- ang pangalan ng layer;
- apat na button: on/off (mata), freeze (snowflake), lock (padlock) at plot (printer).

Ang bawat drawing ay may layer na tinatawag na `0`. Ang pag-type ng `LA` at pagpindot sa {{key:Enter}} ay pupunta sa panel.

## Gumawa ng mga layer

1. I-click ang {{ui:New layer}} sa itaas ng listahan. Magbubukas ang name box.
2. I-type ang `Walls` at pindutin ang {{key:Enter}} (o i-click ang {{ui:Add}}).

Sinasabi ng status bar: "Idinagdag ang layer na Walls at ginawang kasalukuyan." Ang bagong layer ay nakakuha ng kulay 7 (itim sa light na theme, puti sa dark).

3. I-click muli ang {{ui:New layer}}, i-type ang `Doors` at pindutin ang {{key:Enter}}.
4. I-click muli ang {{ui:New layer}}, i-type ang `Notes` at pindutin ang {{key:Enter}}.

Ngayon ang Notes ang kasalukuyang layer.

## Bigyan ang bawat layer ng kulay

1. I-click ang color swatch sa row ng Walls. Magbubukas ang color picker ng iyong system.
2. Pumili ng kulay at kumpirmahin.

Magbabago ang swatch at lahat ng nasa Walls na naka-kulay na {{ui:By layer}}.

:::note
Ang napiling kulay na tumutugma sa isa sa 255 standard CAD color ay naka-store bilang numerong iyon. Ang anumang ibang kulay ay eksaktong pinananatili sa CadCraft, pero sine-save bilang pinakamalapit na standard color sa DWG o DXF file.
:::

## Gumuhit sa isang layer

1. I-click ang pangalang **Walls** sa listahan. Pupunuin ang tuldok nito at sasabihin ng status bar: "Current layer: Walls".
2. Gumuhit ng rectangle (`REC`). Mapupunta ito sa Walls.
3. I-click ang **Doors**, at gumuhit ng arko (`A`). Mapupunta ito sa Doors.

Maaari mo ring piliin ang kasalukuyang layer sa {{ui:Current settings}} sa kanan (kapag walang napili), sa ilalim ng {{ui:Layer}}.

## Ilipat ang mga object sa ibang layer

1. Pumili ng mga object.
2. Sa kanang panel, piliin ang bagong layer sa {{ui:Layer}}.

Lilipat sila sa layer na iyon at kukunin ang kulay nito kung ang kulay nila ay {{ui:By layer}}.

## Off, freeze, lock at plot

| Button | Ano ang ginagawa |
|---|---|
| On/off (mata) | Itinatago ang mga object ng layer. Hindi na makikita, mapipili o masasnapan. |
| Freeze (snowflake) | Parehong epekto ng off sa CadCraft. Hiwalay ito dahil iba ang trato ng ibang program, at naka-save ang setting. |
| Lock (padlock) | Nananatiling nakikita ang mga object at maaari mo silang i-snap, pero hindi na mapipili o mababago. Maganda para sa background na tinatrasan mo. |
| Plot (printer) | Kapag pinindot, ipinapakita ang layer sa screen pero **hindi kasama sa mga plot** at PDF. Gamitin para sa construction line at notes para sa sarili mo. |

I-hover ang button para makita kung ano ang gagawin nito ("I-off", "Freeze", "Lock", "Huwag i-plot ang layer na ito").

Hindi mo maaaring i-off ang kasalukuyang layer: sinasabi ng status bar: "Ito ang kasalukuyang layer. Gawing kasalukuyan muna ang ibang layer." Ang pag-click sa pangalan ng layer para gawin itong kasalukuyan ay binubuksan at tinutunaw din ito.

Ang bawat pagbabago sa layer, sa panel man o sa pamamagitan ng command, ay isang undo step: ibinabalik ito ng {{key:Mod+Z}}.

## Magtrabaho sa mga layer sa pamamagitan ng pagpili ng object

Hindi mo kailangang malaman ang pangalan ng layer: pumili ng object dito. I-type ang command, o buksan ang {{ui:Tools}} sa itaas ng panel ng {{ui:Layers}}.

| Command | Ano ang ginagawa |
|---|---|
| {{cmd:LAYISO}} | Pumili ng mga object, pindutin ang {{key:Enter}}: ang mga layer lang nila ang mananatiling naka-on, papatayin ang bawat ibang layer. Kung naka-off ang kasalukuyang layer, isa sa mga nahiwalay na layer ang magiging kasalukuyan. |
| {{cmd:LAYUNISO}} | Ibinabalik ang mga layer na pinatay ng huling {{cmd:LAYISO}}, at ibinabalik ang kasalukuyang layer na binago nito. |
| {{cmd:LAYOFF}} | I-click ang mga object isa-isa: papatayin ang layer ng bawat isa. I-type ang `U` para bawiin ang huli, {{key:Enter}} para tapusin. |
| {{cmd:LAYFRZ}} | Pareho, pero fi-freeze ang bawat layer. |
| {{cmd:LAYMCUR}} | I-click ang isang object: magiging kasalukuyan ang layer nito (at bubuksan at tutunawin). Kapag may isang object nang napili, iyon ang gagamitin. |
| {{cmd:LAYON}} | Binubuksan ang lahat ng layer. |
| {{cmd:LAYTHW}} | Tinutunaw ang lahat ng layer. |

Hindi kailanman pinapatay o pinafreeze ang kasalukuyang layer sa ganitong paraan: sinasabi ito ng history, at maaari mo munang gawing kasalukuyan ang ibang layer gamit ang {{cmd:LAYMCUR}}. Ang pagpili ng block reference ay gumagamit ng sariling layer ng reference.

## Palitan ang pangalan, pagsamahin at burahin ang mga layer

- {{cmd:RENAME}}: i-type ang `LA`, ang lumang pangalan at ang bago. Susunod ang bawat object sa layer. (Ang `B` ay nagpapalit ng pangalan ng block sa parehong paraan, kasama ang bawat reference nito.)
- {{cmd:LAYMRG}}: i-click ang object sa bawat layer na pagsasamahin (o i-type ang `N` at pangalan), pindutin ang {{key:Enter}}, pagkatapos piliin ang target na layer at sagutin ang `Y`. Lilipat ang mga object sa target (sa model, sa sheet at sa loob ng mga block), at mawawala ang mga pinagsamang layer.
- {{cmd:LAYDEL}}: pumili ng object sa layer (o `N` at pangalan nito) at sagutin ang `Y`. Mawawala ang layer **kasama ang bawat object dito**, saanman. Hindi mabubura ang Layer 0, DEFPOINTS at ang kasalukuyang layer.

Ang bawat isa ay isang undo step. Ang tatlo ay nasa {{ui:Tools}} sa itaas ng panel ng {{ui:Layers}}.

1. I-click ang isang linya ng pader, pagkatapos i-type ang `LAYISO` at pindutin ang {{key:Enter}}. Naka-on lang ang Walls.
2. Gumuhit o baguhin ang kailangan mo sa Walls.
3. I-type ang `LAYUNISO` at pindutin ang {{key:Enter}}. Babalik ang Doors at Notes.

## Mga karaniwang pagkakamali

- **Napunta sa maling layer ang mga bagong linya.** Tingnan kung aling tuldok ang puno bago gumuhit. Nagiging kasalukuyan ang bagong layer sa sandaling idagdag mo ito.
- **Hindi mapipili ang isang object.** Naka-lock, naka-off o naka-freeze ang layer nito.
- **Nagpa-plot pa rin ang layer sa ibang program.** Hindi kayang i-store ng DXF R12 ang "do not plot". Itinatago ng CadCraft ang setting para sa sarili nito kapag may sheet ang drawing, pero ipa-plot pa rin ng ibang program ang layer na iyon.
- **Naka-capital ang mga pangalan ng layer pagkatapos i-save.** Iniimbak ng DXF R12 ang mga pangalan sa capitals, kaya babalik ang `Walls` bilang `WALLS`, at magiging `_` ang mga space. Pinapanatili ng naka-save na DWG ang mga pangalan gaya ng pagta-type mo.
- **Pagpapalit ng pangalan, pagsasama o pagbura ng layer.** Gamitin ang {{cmd:RENAME}}, {{cmd:LAYMRG}} o {{cmd:LAYDEL}} (nasa {{ui:Tools}} din): tingnan sa ibaba.

## Pagpangkat ng mga layer

Panatilihing maikli ang listahan sa pamamagitan ng paglalagay ng mga layer sa mga folder, gaya ng Existing, Proposed at Services. Natutupi ang bawat folder, at ang mga switch nito ay nagbubukas o nagpapatay ng lahat ng layer nito, nagfi-freeze o nagla-lock sa mga ito nang sabay. Hindi kailanman pinapatay ang kasalukuyang layer.

Sa {{ui:Tools}} sa panel ng Layers, piliin ang {{ui:Add ready-made groups}} para sa set na ginawa para sa maliit na residential na trabaho, {{ui:Group by name}} para pagsamahin ang mga layer na may iisang prefix (`E-Walls`, `E-Doors`), o {{ui:New group}}. I-drag ang layer papunta sa folder, o gamitin ang listahan sa itaas ng mga layer para sa kasalukuyang layer. Mag-type sa {{ui:Find a layer}} para paliitin ang listahan. Ginagawa rin ng `LAYGROUP` (`LG`) ang parehong bagay sa command line.

Hindi nagbabago ang mga layer mismo, kaya nakikita sila ng ibang CAD program bilang ordinaryong flat list. Iniingatan ng CadCraft ang mga grupo sa file.
