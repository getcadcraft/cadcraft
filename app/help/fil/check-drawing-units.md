---
title: Suriin kung anong unit ang drawing
summary: Tingnan kung ang nakabukas na drawing ay nasa milimetro, pulgada o iba pa, suriin ito sa pamamagitan ng pagsukat, at alamin kung bakit maaaring magpakita ng ibang unit ang ibang program para sa parehong DXF.
keywords: unit, anong unit, aling unit, suriin ang unit, milimetro, mm, pulgada, metric, imperial, DXF unit, STEP to DXF, maling unit, pulgada o mm, INSUNITS, MEASUREMENT, unit ng drawing, PartCraft DXF
from: c0ee75bb
---

## Ano ang gagawin mo

Alamin kung ano ang kinakatawan ng isang unit sa nakabukas na drawing, at siguraduhing ang mga numerong binabasa mo ay ang laki na inaasahan mo.

## Mga hakbang

1. Buksan ang drawing, pagkatapos pindutin ang {{key:Esc}} para walang napiling bagay, sa tab na {{ui:Model}}.
2. Sa kanang panel, sa ilalim ng {{ui:Kasalukuyang setting}}, basahin ang {{ui:Mga unit}}. Sinasabi nito kung ano ang kinakatawan ng isang drawing unit: {{ui:Milimetro}}, {{ui:Pulgada}}, {{ui:Talampakan}} at iba pa. Ang DXF na na-save mula sa PartCraft ay nagsasabing {{ui:Milimetro}}.
3. Suriin ito sa pamamagitan ng pagsukat ng bagay na alam mo ang laki. I-type ang {{cmd:DIST}} at piliin ang dalawang dulo ng isang gilid o butas. Kung ang bahaging alam mong 25 mm ay nagbabasa ng `25`, ang drawing ay nasa milimetro; kung nagbabasa ito ng mga `0.98`, nasa pulgada ito.

{{ui:Walang unit}} ay nangangahulugang hindi sinasabi ng file. Gagamitin ng CadCraft ang unit ng papel (milimetro sa ISO paper, pulgada sa US paper), at ang mga numero ay kasing-tama lamang ng program na sumulat nito.

## Kung mali ang mga unit

Ang pagpapalit ng {{ui:Mga unit}} ay **hindi nagre-resize ng anuman**: nananatili ang mga numero at ang kahulugan lamang nila ang nagbabago. Kaya itakda lamang ito para sabihin kung ano talaga ang drawing. Kung milimetro ang mga numero at nakasaad sa {{ui:Mga unit}} ang {{ui:Pulgada}}, piliin ang {{ui:Milimetro}}. Kung kailangan mo ang geometry mismo sa ibang unit, i-scale ito gamit ang {{cmd:SCALE}} (25.4 mula pulgada papuntang milimetro, 1/25.4 sa kabaligtaran) at pagkatapos ay itakda ang {{ui:Mga unit}}.

Ang paraan ng pagsulat ng haba (decimal, feet at inches, fraction) ay hiwalay na setting, ang {{ui:Length format}}: tingnan ang [Mga unit, laki ng papel at scale](topic:units-papers-scales).

## Bakit maaaring sabihin ng ibang program na pulgada

Sinasabi ng DXF ang mga unit nito sa header nito. Ang pinakalumang uri ng DXF, ang R12, ay walang variable para sa unit, kaya ang program na mahigpit na nagbabasa ng R12 ay binabalewala ang nakasulat doon at bumabalik sa sarili nitong default, na kadalasan ay pulgada. Pareho pa rin ang geometry sa file anuman ang mangyari: ang label lamang ang nagkakaiba. Isinusulat ng PartCraft ang DXF file nito bilang R12 at isinasaad ang milimetro sa dalawang paraan (`$INSUNITS` 4 at `$MEASUREMENT` 1) para mas maraming program ang tamang makabasa nito. Kung sinasabi pa rin ng isang program na pulgada, itakda ang mga unit nito sa milimetro kapag binuksan mo ang file.

Ang pagdadala ng file sa drawing (imbes na buksan ito) ay kino-convert ang mga unit nito: tingnan ang [Mga unit sa import](topic:units-on-import).
