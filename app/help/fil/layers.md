---
title: Ayusin ang drawing gamit ang mga layer
summary: Gumawa ng mga layer para sa pader, pinto at notes, magtakda ng kulay, gawing kasalukuyan ang isang layer, at patayin, i-freeze, i-lock o pigilan sa pag-plot ang mga layer.
keywords: layer, layers, la, kasalukuyang layer, freeze, thaw, lock, off, on, plot, no plot, kulay, colour, color, layer properties, layiso, layuniso, isolate, layoff, layfrz, laymcur, layon, laythw, rename, laymrg, merge, laydel, delete layer
from: ba9f0617
---

## Ano ang gagawin mo

Tatlong layer, ang Walls, Doors at Notes, bawat isa ay may sariling kulay, na may mga object na iginuhit sa bawat isa at inililipat sa pagitan nila.

## Ang panel ng Layers

Nasa panel sa kaliwa, sa ilalim ng {{ui:Layers}}, ang mga layer. Ipinapakita ng bawat row, mula kaliwa pakanan:

- isang tuldok: puno para sa **kasalukuyang** layer, kung saan pumupunta ang mga bagong object;
- isang kulay na swatch;
- ang pangalan ng layer;
- apat na button: on/off (mata), freeze (snowflake), lock (kandado) at plot (printer).

May layer ang bawat drawing na tinatawag na `0`. Ang pag-type ng `LA` at pagpindot sa {{key:Enter}} ay pupunta sa panel.

## Gumawa ng mga layer

1. I-click ang {{ui:New layer}} sa ibabaw ng listahan. Magbubukas ang kahon ng pangalan.
2. I-type ang `Walls` at pindutin ang {{key:Enter}} (o i-click ang {{ui:Idagdag}}).

Sinasabi ng status bar na "Added layer Walls and made it current." Nakakakuha ang bagong layer ng kulay 7 (itim sa light na tema, puti sa dark).

3. I-click muli ang {{ui:New layer}}, i-type ang `Doors` at pindutin ang {{key:Enter}}.
4. I-click muli ang {{ui:New layer}}, i-type ang `Notes` at pindutin ang {{key:Enter}}.

Kasalukuyan na ang Notes.

## Bigyan ng kulay ang bawat layer

1. I-click ang color swatch sa row ng Walls. Magbubukas ang color picker ng system mo.
2. Pumili ng kulay at kumpirmahin.

Magbabago ang swatch at ang lahat sa Walls na may kulay na {{ui:By layer}}.

:::note
Ang napiling kulay na tugma sa isa sa 255 na standard na kulay ng CAD ay itinatabi bilang numerong iyon. Ang anumang ibang kulay ay eksaktong itinatabi sa CadCraft, pero sine-save bilang pinakamalapit na standard na kulay sa DWG o DXF file.
:::

## Gumuhit sa isang layer

1. I-click ang pangalang **Walls** sa listahan. Pupunuin ang tuldok nito at sasabihin ng status bar na "Current layer: Walls".
2. Gumuhit ng rectangle (`REC`). Mapupunta ito sa Walls.
3. I-click ang **Doors**, at gumuhit ng arko (`A`). Mapupunta ito sa Doors.

Puwede ka ring pumili ng kasalukuyang layer sa {{ui:Kasalukuyang setting}} sa kanan (walang napili), sa ilalim ng {{ui:Layer}}.

## Ilipat ang mga object sa ibang layer

1. Pumili ng mga object.
2. Sa kanang panel, piliin ang bagong layer sa {{ui:Layer}}.

Lilipat sila sa layer na iyon at kukuha ng kulay nito kung {{ui:By layer}} ang kulay nila.

## Off, freeze, lock at plot

| Button | Ano ang ginagawa nito |
|---|---|
| On/off (mata) | Itinatago ang mga object ng layer. Hindi na sila makikita, mapipili o masasnapan. |
| Freeze (snowflake) | Parehong epekto ng off sa CadCraft. Hiwalay ito dahil magkaiba ang pakikitungo ng ibang program dito, at naka-save ang setting. |
| Lock (kandado) | Nananatiling nakikita ang mga object at masasnapan mo, pero hindi sila mapipili o mababago. Mainam para sa background na tinatrasuhan mo. |
| Plot (printer) | Kapag pinindot, ipinapakita ang layer sa screen pero **iniiwan sa mga plot** at PDF. Gamitin ito para sa construction lines at notes para sa sarili mo. |

I-hover ang button para makita kung ano ang gagawin nito ("Turn off", "Freeze", "Lock", "Do not plot this layer").

Hindi mo maaaring patayin ang kasalukuyang layer: sinasabi ng status bar na "That is the current layer. Make another layer current first." Ang pag-click sa pangalan ng layer para gawin itong kasalukuyan ay binubuksan at tinatanggal din ang freeze nito.

Bawat pagbabago sa layer, sa panel man o sa command, ay iisang hakbang ng undo: ibinabalik ito ng {{key:Mod+Z}}.

## Magtrabaho sa mga layer sa pamamagitan ng pagpili ng object

Hindi mo kailangang malaman ang pangalan ng layer: pumili ng object dito. I-type ang command, o buksan ang {{ui:Mga tool}} sa itaas ng panel na {{ui:Layers}}.

| Command | Ano ang ginagawa nito |
|---|---|
| {{cmd:LAYISO}} | Pumili ng mga object, pindutin ang {{key:Enter}}: ang layer lamang nila ang mananatiling bukas, ang bawat ibang layer ay papatayin. Kung naka-off ang kasalukuyang layer, isa sa mga na-isolate na layer ang magiging kasalukuyan. |
| {{cmd:LAYUNISO}} | Ibinabalik ang mga layer na pinatay ng huling {{cmd:LAYISO}}, at ibinabalik ang kasalukuyang layer na binago nito. |
| {{cmd:LAYOFF}} | I-click ang mga object nang isa-isa: papatayin ang layer ng bawat isa. I-type ang `U` para bawiin ang huli, ang {{key:Enter}} para tapusin. |
| {{cmd:LAYFRZ}} | Pareho, pero nagfi-freeze ng bawat layer. |
| {{cmd:LAYMCUR}} | I-click ang isang object: magiging kasalukuyan ang layer nito (at bubuksan at tatanggalan ng freeze). Kapag may isang object nang napili, ito ang gagamitin. |
| {{cmd:LAYON}} | Binubuksan ang bawat layer. |
| {{cmd:LAYTHW}} | Tinatanggalan ng freeze ang bawat layer. |

Hindi kailanman pinapatay o pinafa-freeze ang kasalukuyang layer sa ganitong paraan: sinasabi ito ng history, at puwede kang gumawa muna ng ibang layer na kasalukuyan gamit ang {{cmd:LAYMCUR}}. Ang pagpili ng block reference ay gumagamit ng sariling layer ng reference.

## Palitan ang pangalan, pagsamahin at burahin ang mga layer

- {{cmd:RENAME}}: i-type ang `LA`, ang lumang pangalan at ang bago. Susunod ang bawat object sa layer. (Ang `B` ay nagpapalit ng pangalan ng block sa parehong paraan, kasama ang bawat reference nito.)
- {{cmd:LAYMRG}}: mag-click ng object sa bawat layer na pagsasamahin (o i-type ang `N` at isang pangalan), pindutin ang {{key:Enter}}, pagkatapos piliin ang target na layer at sagutin ang `Y`. Lilipat ang mga object sa target — sa model, sa mga sheet at sa loob ng mga block — at mawawala ang mga pinagsamang layer.
- {{cmd:LAYDEL}}: pumili ng object sa layer (o `N` at ang pangalan nito) at sagutin ang `Y`. Mawawala ang layer **kasama ang bawat object dito**, saanman. Hindi maaaring burahin ang layer 0, ang DEFPOINTS at ang kasalukuyang layer.

Bawat isa ay iisang hakbang ng undo. Lahat ng tatlo ay nasa {{ui:Mga tool}} sa itaas ng panel na {{ui:Layers}}.

1. I-click ang isang linya ng pader, pagkatapos i-type ang `LAYISO` at pindutin ang {{key:Enter}}. Ang Walls lamang ang mananatiling bukas.
2. Gumuhit o baguhin ang kailangan mo sa Walls.
3. I-type ang `LAYUNISO` at pindutin ang {{key:Enter}}. Babalik ang Doors at Notes.

## Mga karaniwang pagkakamali

- **Napunta sa maling layer ang mga bagong linya.** Tingnan kung aling tuldok ang puno bago gumuhit. Nagiging kasalukuyan kaagad ang bagong layer pagkatapos mong idagdag ito.
- **Hindi mapili ang isang object.** Naka-lock, naka-off o naka-freeze ang layer nito.
- **Nagpi-print pa rin ang layer sa ibang program.** Hindi kayang itago ng DXF R12 ang "do not plot". Itinatabi ito ng CadCraft para sa sarili nito kapag may sheet ang drawing, pero ipi-print ng ibang program ang layer na iyon.
- **Mga pangalan ng layer sa malalaking titik pagkatapos mag-save.** Iniimbak ng DXF R12 ang mga pangalan sa malalaking titik, kaya ang `Walls` ay babalik bilang `WALLS`, at ang mga espasyo ay nagiging `_`. Pinapanatili ng naka-save na DWG ang mga pangalan gaya ng pagkata-type mo.
- **Pagpapalit ng pangalan, pagsasama o pagbura ng layer.** Gamitin ang {{cmd:RENAME}}, {{cmd:LAYMRG}} o {{cmd:LAYDEL}} (nasa {{ui:Mga tool}} din): tingnan sa ibaba.

## Pagpapangkat ng mga layer

Panatilihing maikli ang listahan sa pamamagitan ng paglalagay ng mga layer sa folder, gaya ng Existing, Proposed at Services. Natutupi ang bawat folder, at ang mga switch nito ay nagbubukas o nagpapatay ng lahat ng layer nito, nagfi-freeze o nagla-lock sila nang sabay. Hindi kailanman napapatay ang kasalukuyang layer.

Sa {{ui:Mga tool}} sa panel na Layers, piliin ang {{ui:Idagdag ang mga handa nang group}} para sa set na ginawa para sa maliliit na residential na trabaho, ang {{ui:Pagsamahin ayon sa pangalan}} para pagsamahin ang mga layer na may parehong unlapi (`E-Walls`, `E-Doors`), o ang {{ui:Bagong group}}. I-drag ang layer papunta sa folder, o gamitin ang listahan sa itaas ng mga layer para sa kasalukuyang layer. I-type sa {{ui:Maghanap ng layer}} para paliitin ang listahan. Ginagawa rin ng `LAYGROUP` (`LG`) ang parehong bagay sa command line.

Para palitan ang pangalan ng group, i-double-click ang pangalan nito (o piliin ito at pindutin ang {{key:F2}}), i-type ang bagong pangalan at pindutin ang {{key:Enter}}; pinananatili ng {{key:Esc}} ang luma, at ibinabalik ito ng {{cmd:UNDO}}. Nasa {{ui:Mga tool}} sa panel ng Layers ang {{ui:Bagong group}}.

Hindi nagbabago ang mga layer mismo, kaya nakikita sila ng ibang CAD program bilang karaniwang patag na listahan. Itinatabi ng CadCraft ang mga group sa file.
