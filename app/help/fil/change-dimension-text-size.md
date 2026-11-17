---
title: Baguhin ang laki ng teksto ng dimension
summary: Gawing mas malaki o mas maliit ang teksto ng dimension, para sa mga bagong dimension at para sa mga nasa drawing na.
keywords: laki ng dimension text, taas ng teksto, dimtxt, dimscale, dimension text masyadong maliit, dimension text masyadong malaki, mas malaking dimension text, annotation scale
from: 30e40633
---

## Para sa mga dimension na gagawin mo sa susunod

1. Pindutin ang {{key:Esc}} para walang napili: ang kanang panel ay nagbabasang {{ui:Kasalukuyang setting}}.
2. Mag-scroll pababa sa panel hanggang {{ui:Mga bagong dimension}}. I-type ang taas na gusto mo sa papel sa {{ui:Taas ng teksto}} (halimbawa `2.5` para sa 2.5 mm, o `3/32"`) at pindutin ang {{key:Enter}}.
3. Itakda ang {{ui:Kabuuang scale}} sa plot scale (`50` para sa 1:50, `48` para sa 1/4" = 1'-0"): dinarami nito ang bawat sukat.

Sa command line, itinatakda ng {{cmd:DIMTXT}} ang taas at itinatakda ng {{cmd:DIMSCALE}} ang kabuuang scale.

## Para sa mga dimension na nasa drawing na

1. Piliin ang mga dimension (isa, o ilan sa mga ito: pumili ng {{ui:Dimension}} sa listahan sa itaas ng Properties).
2. I-type ang bagong {{ui:Taas ng teksto}} (sa {{ui:Teksto}} na seksyon), o bagong {{ui:Kabuuang scale}} (sa {{ui:Fit}} na seksyon na mas nasa ibaba), at pindutin ang {{key:Enter}}.

Muling iginuguhit agad ang mga ito, sa isang undo step. Ang dimension mula sa file ng ibang program ay muling iginuguhit sa istilo ng CadCraft sa sandaling baguhin mo ito.

:::tip
Ang teksto na tama sa screen pero napakaliit sa nai-plot na sheet ay kadalasang nangangahulugang 1 ang kabuuang scale: itakda ito sa scale ng sheet.
:::

Tingnan ang [Set dimension sizes, decimals and scale](topic:dimension-settings) para sa bawat setting.
