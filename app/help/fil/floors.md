---
title: "Pagsalansan ng floor sa iisang drawing"
summary: "Iguhit ang unang floor sa ibabaw ng ground floor sa parehong coordinate, at i-off ang bawat floor, nang walang Xref."
keywords: floor, mga floor, FLOORS, FLR, FLOOR, FLOORLAYERS, palapag, level, salansan, design layer, model space, underlay, xref
from: 7440fc87
---

Hinahayaan ka ng Floor na salansan ang mga plano sa iisang model space. May sariling mga object ang bawat floor, at patuloy na gumagana ang mga layer sa lahat ng ito. Puwedeng nasa anumang floor ang pader sa `P-Walls`.

## Simulan

I-type ang `FLOORS` (`FLR`), o piliin ang {{ui:Mga Sahig…}} sa menu na {{ui:Higit pa}} ng grupong {{ui:View}}, tapos piliin ang {{ui:Magsimula sa mga sahig}}. Ang iginuhit mo hanggang ngayon ay mapupunta sa ground floor.

## Gumuhit sa floor

Pumili ng floor gamit ang bilog na button sa panel. Doon mapupunta ang mga bagong object.

Ang iba pang floor na nakabukas ay nakikitang kupas sa ilalim nito. Puwede kang mag-snap sa mga ito, kaya tutugma ang unang floor sa ground floor, pero hindi mo sila mababago hangga't hindi mo ginagawang aktibong floor. Ina-off ng icon na mata ang isang floor. Ang pader ay nagdudugtong lang sa pader sa sarili nitong floor.

Para magsimula ng floor mula sa nasa ibaba, piliin ang gusto mo, piliin ang floor sa panel, at pindutin ang {{ui:Kopyahin doon}}.

## Ilagay ang floor sa mga sheet

Piliin ang viewport sa isang sheet at piliin ang floor nito sa ilalim ng {{ui:Sahig na ipinapakita}} sa Properties. Ang viewport na walang napiling floor ay nagpapakita ng lahat ng floor na nakabukas.

## Ipadala ang file sa iba

Hindi alam ng ibang CAD program ang tungkol sa floor, kaya ipinapakita nila ang lahat ng floor nang sabay-sabay. Bago magpadala ng file, piliin ang {{ui:Gawing layer ang mga sahig}} sa panel, o i-type ang `FLOORLAYERS`. Lilipat ang bawat object sa layer na pinangalanan ayon sa floor nito, gaya ng `Ground floor-P-Walls`, para magagawa pa rin nilang i-off ang bawat floor. Ibinabalik ito ng Undo. Pinapanatili ng CadCraft ang mga floor sa DWG o DXF na file na sine-save nito.
