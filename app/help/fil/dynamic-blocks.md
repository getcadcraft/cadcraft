---
title: "Dynamic block"
summary: "Ano ang ginagawa ng CadCraft sa dynamic block sa DWG: pinananatili nila ang totoong pangalan, ipinapakita ang estadong na-save, nililipat ang visibility state, ipinapakita ang iba pang value, at nananatiling dynamic kapag sinave."
keywords: dynamic block, mga dynamic block, visibility, visibility state, flip, stretch, lookup, parameter, custom, block properties, *U block, dynamic
from: 26b6aa80
---

## Ano ang gumagana

Ang DWG na gawa sa dynamic block ay nagbubukas na gumagana ang mga ito hanggang dito:

- **Ang totoong pangalan nila.** Nakalista ang dynamic block sa panel na {{ui:Mga Block}} sa sarili nitong pangalan ("Receptacle", "Sink"), hindi bilang walang pangalang `*U` block.
- **Ang estadong na-save sa kanila.** Ipinapakita ng bawat reference nang eksakto ang ipinakita ng ibang programa: ang visibility state na nakatakda, naka-stretch o naka-flip gaya ng pagkakasave.
- **Pagpalit ng visibility state.** Pumili ng isang reference (o ilang pareho ang block), buksan ang {{ui:Properties}}, at sa seksyong {{ui:Custom}} pumili ng ibang state mula sa listahang {{ui:Visibility}}. Agad ipinapakita ng reference ang state na iyon, pati ang mga attribute nito: nawawala ang mga itinatago ng state, at lumilitaw ang mga ipinapakita nito kasama ang kanilang value. Pinapanatili ng reference ang bawat value, kaya walang bumabalik na walang laman; nakalista sa {{ui:Properties}} ang mga nakatago na may markang "hidden". Ibinabalik ng {{key:Mod+Z}} ang lumang state sa isang hakbang.
- **Grips.** Ang napiling dynamic block ay nagpapakita ng sarili nitong grip kung nasaan ang mga parameter nito: maliit na tatsulok para sa visibility state (i-click para sa listahan ng mga state), mga arrow sa dulo ng distansya, dobleng arrow para sa flip. Ang visibility grip lang ang gumagana sa ngayon; sinasabi ng status bar ang iba.
- **Ang iba pang value, read only.** Sa ilalim ng listahan ng visibility, ipinapakita rin ng {{ui:Custom}} ang mga distansya, alignment angle, flip state at punto ng block gaya ng hawak ng drawing.
- **Pag-e-edit ng visibility state.** Buksan ang block gamit ang {{cmd:BEDIT}}: isang state ang ipinapakita ng editor, nakapangalan sa bar sa itaas ng drawing (pumili ng iba roon). I-type ang {{cmd:BVSTATE}} para lumipat, magdagdag (itinatago ang lahat, ipinapakita ang lahat, o pinananatili ang nakikita), palitan ang pangalan o burahin ang state; itinatago ng {{cmd:BVHIDE}} ang mga napiling object sa state na nakikita; ipinapakita ng {{cmd:BVSHOW}} ang mga nakatago na kupas para ma-click mo ang mga ibabalik. I-save ang block: ang mga reference na nakatakda sa pinalitang pangalang state ay mananatili rito sa bagong pangalan, at ang mga nakatakda sa binurang state ay magpapakita ng unang state.
- **Nananatiling dynamic.** Kapag na-save bilang DWG sa bersyong pinanggalingan ng drawing, nananatiling dynamic ang mga block, kasama ang state na pinili mo: binubuksan sila ng ibang programa bilang parehong dynamic block. Naka-save din ang mga visibility state na in-edit mo: ang mga bagong pangalan nila, ang mga state na idinagdag mo at kung ano ang ipinapakita ng bawat isa.

## Ano ang read only, o wala pa

| Wala pa | Sa ngayon |
|---|---|
| Pagbabago ng distansya, anggulo o flip (stretch, move, flip) | Read only ang ipinapakita sa {{ui:Custom}}; i-edit sa programang gumawa ng block. |
| Lookup, XY, rotation at polar na parameter | Hindi pa nababasa: ipinapakita ang reference gaya ng na-save. |
| Pag-drag sa distance, flip at point grip | Ipinapakita kung nasaan ang mga parameter; ang visibility grip at ang listahang {{ui:Visibility}} sa Properties ang nagpapalit ng state. |
| Paggawa ng dynamic block (pagdaragdag ng parameter, o visibility state sa block na wala nito) | Ang mga block na ginawa mo sa CadCraft ay simpleng block; sinasabi ito ng {{cmd:BPARAMETER}}. |
| Pagdaragdag o pagbura ng object ng block na may visibility state sa block editor | Sa gayon, ise-save ang block bilang simpleng block (sinasabi ito ng editor kapag nagsara). |
| Pananatiling dynamic sa ibang bersyon ng DWG o sa DXF | Ise-save sila bilang simpleng block na ipinapakita ang state na pinili mo, at sinasabi ito ng save. |

:::note
Ang paglipat o pagbabago ng object sa {{cmd:BEDIT}} ay nagpapanatiling dynamic sa block na may visibility state. Ang block na walang state, o ang block na nagdagdag o nagbura ng object sa editor, ay nagiging simpleng block.
:::
