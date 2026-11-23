---
title: Dynamic blocks
summary: Ano ang ginagawa ng CadCraft sa mga dynamic block sa DWG: pinananatili nila ang tunay nilang pangalan, ipinapakita ang estado kung saan sila na-save, nagpapalit ng visibility state, ipinapakita ang iba pa nilang halaga, at nananatiling dynamic kapag na-save.
keywords: dynamic block, dynamic blocks, visibility, visibility state, flip, stretch, lookup, parameters, custom, block properties, *u blocks, dynamic
from: dea2ee7c
---

## Ano ang gumagana

Ang DWG na may dynamic block ay bumubukas na may gumaganang mga ito hanggang sa puntong ito:

- **Ang tunay nilang pangalan.** Nakalista ang dynamic block sa panel na {{ui:Blocks}} sa sarili nitong pangalan ("Receptacle", "Sink"), hindi bilang walang pangalang block na `*U`.
- **Ang estadong kinalagyan nila nang i-save.** Ipinapakita ng bawat reference ang eksaktong ipinakita ng ibang program: ang visibility state na itinakda dito, na-stretch o na-flip gaya ng pagkaka-save.
- **Pagpapalit ng visibility state.** Pumili ng isang reference (o ilang reference ng iisang block), buksan ang {{ui:Properties}}, at sa seksyong {{ui:Custom}} pumili ng ibang state mula sa listahan ng {{ui:Visibility}}. Agad ipinapakita ng reference ang state na iyon, pati ang mga attribute nito: ang mga itinatago ng state ay nawawala, ang mga ipinapakita nito ay lumilitaw kasama ang kanilang mga halaga. Pinapanatili ng reference ang bawat halaga, kaya walang nababakanteng halaga; ang {{ui:Properties}} ay naglilista ng mga nakatagong may markang "hidden". Ibinabalik ng {{key:Mod+Z}} ang lumang state sa isang hakbang.
- **Mga grip.** Ang napiling dynamic block ay nagpapakita ng sarili nitong grip kung nasaan ang mga parameter nito: isang maliit na tatsulok para sa visibility state (i-click para sa listahan ng mga state), mga arrow sa dulo ng isang distansya, at dobleng arrow para sa flip. Ang visibility grip lamang ang gumagana ngayon; sinasabi ito ng status bar tungkol sa iba.
- **Ang iba pang halaga, read only.** Sa ilalim ng listahan ng visibility, ipinapakita rin ng {{ui:Custom}} ang mga distansya, anggulo ng pagkakahanay, flip state at punto ng block gaya ng hawak ng drawing.
- **Pag-edit ng visibility state.** Buksan ang block gamit ang {{cmd:BEDIT}}: ipinapakita ng editor ang isang state, na pinangalanan sa bar sa itaas ng drawing (pumili ng iba roon). I-type ang {{cmd:BVSTATE}} para magpalit, magdagdag (itinatago ang lahat, ipinapakita ang lahat, o pinananatili ang ipinapakita), palitan ang pangalan o burahin ang isang state; ang {{cmd:BVHIDE}} ay nagtatago ng mga napiling object sa state na kasalukuyang nakikita; ang {{cmd:BVSHOW}} ay nagpapakita ng mga nakatago na kulang ang kulay para ma-click mo ang mga ibabalik. I-save ang block: ang mga reference na nakatakda sa pinalitan-ng-pangalang state ay mananatili rito sa bagong pangalan, at ang mga nakatakda sa binurang state ay magpapakita ng unang state.
- **Nananatiling dynamic.** Kapag na-save bilang DWG sa bersyon kung saan dumating ang drawing, nananatiling dynamic ang mga block, kasama ang state na pinili mo: binubuksan sila ng ibang program bilang parehong dynamic block. Naka-save din ang mga visibility state na in-edit mo: ang mga bagong pangalan nila, ang mga state na idinagdag mo at ang ipinapakita ng bawat isa.

## Ano ang read only, o wala pa

| Wala pa | Sa halip, ngayon |
|---|---|
| Pagbabago ng mga distansya, anggulo o flip (stretch, move, flip action) | Lumalabas na read only sa {{ui:Custom}}; i-edit sa program na gumawa ng block. |
| Lookup, XY, rotation at polar na parameter | Hindi pa nababasa: ipinapakita ng reference gaya ng pagkaka-save. |
| Pag-drag sa distansya, flip at point grip | Ipinapakita kung nasaan ang mga parameter; ang visibility grip at ang listahan ng {{ui:Visibility}} sa Properties ang nagpapalit ng state. |
| Paggawa ng dynamic block ng uri ng ibang program (stretch, flip, lookup) | Ang mga block na gawa mo sa CadCraft ay karaniwang block; sinasabi ito ng {{cmd:BPARAMETER}}. Ang sarili mong mga parameter at maraming visibility parameter ay nasa Parameters manager (tingnan ang "Your own parameters and visibility states" sa ibaba). |
| Pagdagdag o pagbura ng mga object ng block na may visibility state sa block editor | Pagkatapos ay sine-save ang block bilang karaniwang block (sinasabi ito ng editor kapag nagsara ito). |
| Pananatiling dynamic sa ibang bersyon ng DWG o sa DXF | Sine-save ang mga ito bilang karaniwang block na nagpapakita ng state na pinili mo, at sinasabi ito ng pag-save. |

:::note
Ang paglipat o pagbabago ng mga object sa {{cmd:BEDIT}} ay nagpapanatili ng dynamic na block na may visibility state. Ang block na walang state, o ang block na may object na idinagdag o binura sa editor, ay nagiging karaniwang block.
:::

## Sarili mong mga parameter at visibility state

Ang block na gawa mo sa CadCraft ay maaaring magdala ng sarili nitong mga parameter at **maraming** visibility parameter, bawat isa may sariling mga state. I-type ang {{cmd:BPARAMS}} (o `BPM`) para buksan ang **Parameters manager** para sa block na ina-edit mo sa {{cmd:BEDIT}}, para sa block ng napiling reference, o para sa block na pinangalanan mo.

- **Mga parameter**: pangalan, uri (numero, haba, anggulo, bilang, oo/hindi), at halaga o formula sa ibabaw ng ibang parameter (`w * 2`, `if(n > 3, 1, 0)`). Ipinapakita ng {{ui:Comes to}} ang resulta. Tinatanggihan ang formula na hindi gumagana, o ang halagang hindi tugma sa uri nito (bilang na 1.5), at sinasabi ng manager kung bakit; walang ibang nagbabago.
- **Mga visibility parameter**: gumagawa ang {{ui:Add visibility parameter}} ng isa na may unang state. Maaaring palitan ng pangalan, alisin (nananatili ang huli) o bigyan ng numerong "shows when" ang bawat state. Pumipili ang isang formula ng state mula sa mga parameter (ang state na may tugmang numero, o kung wala, ang state sa lugar na iyon sa listahan); kapag walang formula, pumipili ang bawat reference ng sarili nitong state.
- **Paglalagay ng mga object sa isang state**: sa block editor, pumili ng mga object, i-type ang {{cmd:BPARAMS}}, at i-click ang {{ui:Ilagay dito ang mga napiling object}} sa state. Laging ipinapakita ang mga object na hindi nakalista ng anumang visibility parameter.
- **Ang reference na ito**: kapag sinimulan sa napiling reference, ipinapakita rin ng manager ang sarili nitong mga halaga at state ng reference na iyon.

Sa labas ng block editor, bawat pagbabago ay isang hakbang ng undo. Sa block editor, ang mga pagbabago ay sa editor: pinananatili sila ng {{ui:I-save ang block}}. Ang `-BPARAMS` ay humihingi ng parehong bagay sa command line.

**Sa file.** Iniimbak ng DWG at DXF ang mga parameter, kung aling object ang nasa aling state, at ang sariling halaga ng bawat reference, sa sarili nilang rekord ng CadCraft; buksan muli ang file sa CadCraft at bumabalik ang lahat. Nakikita ng ibang program ang bawat reference bilang block na kasama ang lahat ng object nito, dahil ang DWG ay may hanggang isang visibility parameter lamang bawat block ng sarili nitong uri. Ang reference na ginalaw ng ibang program, o ang block na binago ang mga object, ay bumabalik nang walang mga bahaging hindi na tumutugma (walang hinuhulaan).
