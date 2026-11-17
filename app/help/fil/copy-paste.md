---
title: Kopyahin, i-paste at i-duplicate
summary: Kopyahin ang mga bagay sa clipboard ng CadCraft, i-paste ang mga ito kung saan ka mag-click o sa mismong lugar, i-duplicate gamit ang pointer, at dalhin ang gawa mula sa ibang drawing o tab.
keywords: copy, cut, paste, paste in place, duplicate, clipboard, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, sa pagitan ng drawing, ibang tab, base point
from: 4b9f29d3
---

## Ano ang matututunan mo

Paano kopyahin ang mga bagay sa clipboard, i-paste ang mga ito kung saan ka mag-click, i-paste sa sarili nilang coordinate, i-duplicate gamit ang pointer, i-cut ang mga ito, at dalhin sa ibang drawing. Nasa toolbar group na {{ui:Edit}} ang lahat ng ito: {{ui:Copy}}, {{ui:Paste}} at ang menu na {{ui:More}}.

## Kopyahin at i-paste kung saan ka mag-click

1. Pumili ng mga bagay: i-click ang mga ito, o mag-drag ng window.
2. Pindutin ang {{key:Mod+C}}, o i-click ang {{ui:Copy}} sa grupong {{ui:Edit}}. Sinasabi ng command line kung ilang bagay ang nakopya. Nananatiling napili ang mga ito.
3. Pindutin ang {{key:Mod+V}}, o i-click ang {{ui:Paste}}. Lalabas ang kopya sa cursor, nakabitin mula sa ibabang kaliwang sulok ng mga nakopyang bagay.
4. Mag-click kung saan dapat pumunta ang sulok na iyon, o mag-type ng punto gaya ng `2000,500` at pindutin ang {{key:Enter}}. Gumagana ang object snap at Ortho gaya ng dati.

Napipili ang mga na-paste na bagay, kaya agad mo itong mailipat o mabago. Inaalis ng isang {{key:Mod+Z}} ang buong paste.

:::tip
Gusto mo bang nakabitin ang kopya sa puntong pipiliin mo, gaya ng sulok ng pader? I-type ang `COPYBASE`, mag-click sa base point, piliin ang mga bagay, at pindutin ang {{key:Enter}}. Ilalagay ng paste ang puntong iyon kung saan ka mag-click. Para ang bawat kopya ay nakabitin sa sentro nito sa halip na sa ibabang kaliwang sulok, baguhin ang {{ui:Paste point}} sa [mga setting ng CadCraft](topic:settings).
:::

## I-paste sa mismong lugar

Pindutin ang {{key:Mod+Shift+V}}, o piliin ang {{ui:Paste in place}} sa menu na {{ui:More}}. Ilalagay ang kopya sa eksaktong coordinate kung saan ito kinopya, nang walang click. Gamitin ito para dalhin ang mga bagay sa ibang drawing sa parehong lugar, o mula sa isang sheet papunta sa ibang sheet.

## I-duplicate at ilipat

1. Pumili ng mga bagay.
2. Pindutin ang {{key:Mod+D}}, o piliin ang {{ui:Duplicate and move}} sa menu na {{ui:More}}.
3. Nasa ibabaw ng orihinal ang isang kopya at gumagalaw ito kasabay ng pointer. Mag-click kung saan ito dapat pumunta. Puwede ka ring mag-type ng displacement gaya ng `@0,-600`, o distansya papunta sa cursor.

Ang {{key:Esc}} bago ang click ay hindi nag-iiwan ng kahit ano. Isang undo step ang duplicate at hindi nito ginagalaw ang clipboard.

## Cut

Pindutin ang {{key:Mod+X}}, o piliin ang {{ui:Cut}} sa menu na {{ui:More}}. Mapupunta ang mga bagay sa clipboard at mabubura sa drawing, sa isang undo step. Ibalik ang mga ito gamit ang {{key:Mod+V}} o {{key:Mod+Shift+V}}.

## Sa pagitan ng mga drawing at tab

Pinapanatili ng clipboard ang kopya nito kapag nagbukas ka ng ibang drawing, at ibinabahagi ito ng bawat tab ng CadCraft sa browser na ito. Kopyahin sa isang tab, tapos pindutin ang {{key:Mod+V}} sa ibang tab.

- Kasama ng mga bagay ang mga block na ginagamit nila. Kung may block na may parehong pangalan na ang drawing na pinagpe-paste-an, gagamitin ang sarili nitong definition, gaya ng ginagawa ng AutoCAD.
- Idinadagdag ang mga layer na ginagamit ng mga bagay, kasama ang kulay at settings na mayroon sila.
- Hindi ini-rescale ang kopya kapag magkaiba ang units ng dalawang drawing: sinasabi ito ng CadCraft, at puwede mong gamitin ang {{cmd:SCALE}} pagkatapos.
- Nananatili ang mga viewport sa sheet nila; hindi sila kasama sa kopya.

:::note
Sariling clipboard ng CadCraft ito. Hindi mo maipi-paste ang mga bagay ng CadCraft sa ibang program, at hindi ka makakapag-paste mula sa ibang program papunta sa CadCraft: i-save bilang DWG o DXF sa halip. Maaaring masyadong malaki ang sobrang laking kopya para maibahagi sa pagitan ng mga tab; sasabihin ng command line na ang tab na ito lang ang makakapag-paste nito.
:::

## Mga karaniwang pagkakamali

- **Nag-paste ng text ang {{key:Mod+V}} sa command line.** May na-type ka na roon, kaya gumana ang mga key sa text. Pindutin ang {{key:Esc}} para burahin ito, tapos pindutin ulit ang {{key:Mod+V}}.
- **Walang nangyari, at sinasabi ng status bar na tapusin ang kasalukuyang command.** May tumatakbong ibang command. Pindutin muna ang {{key:Esc}}.
- **Napunta sa malayo ang paste.** Nakabitin ito mula sa ibabang kaliwang sulok ng kinopya mo, na maaaring isang malayong bagay na napili mo nang hindi sinasadya. Gamitin ang {{ui:Paste in place}}, o kopyahin gamit ang `COPYBASE`.
- **"Nothing pasted" na may kasamang dahilan.** Hindi nabasa ang iniwan ng ibang tab sa clipboard (sira ito, o binago nang manu-mano). Kopyahin ulit ang mga bagay.

Tingnan ang buong listahan ng mga key sa [Keyboard at mouse](topic:keyboard), at bawat prompt sa [Command reference](topic:commands#clipboard).
