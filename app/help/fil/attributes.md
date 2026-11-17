---
title: Mga attribute ng block
summary: Tingnan at baguhin ang mga value na dala ng block reference, gaya ng item number o maker, at panatilihin ang mga ito kapag nag-save ka ng kopya.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, title block, edit in place, attribute editor, attdef, define attribute, bedit, block editor, bclose, attribute, attributes, attdef, attrib, tag, item number, value, invisible, constant, block, properties, list, equipment tag
from: 34d307c7
---

## Ano ang mga attribute

Ang attribute ay pinangalanang value na kasama ng block reference: item number ng equipment tag, pangalan ng room tag, fire rating ng pinto. Sinasabi ng definition ng block kung anong mga attribute ang mayroon ito (bawat isa ay may **tag**, **prompt**, **default** at lugar, laki at anggulo para sa teksto nito). Bawat reference sa block ay may sariling mga value.

Ang ilang attribute ay **invisible**: may hawak silang data, gaya ng maker o model number, pero hindi kailanman iginuguhit. Ang ilan ay **constant**: pareho para sa bawat reference, naayos ng block.

## Saan galing ang mga attribute

- Ang mga block sa DWG at DXF file na binubuksan mo ay pinapanatili ang mga attribute nila, kasama ang value ng bawat reference.
- Ang mga block na ini-insert mo gamit ang {{cmd:INSERT}} at ang opsyong {{ui:File}} ay pinapanatili rin ang sa kanila. Tingnan ang [Insert from a file or the library](topic:insert-from-file-and-library).
- Ang mga item ng library ay dumarating bilang block na may attribute: isang nakikitang item number at ang data ng item, invisible.

- Mga block na ikaw mismo ang gumagawa: magtakda muna ng attribute gamit ang {{cmd:ATTDEF}} (sa ibaba), saka piliin ang mga ito kasama ng ibang object kapag ginagawa mo ang block.

## Magtakda ng attribute para sa sarili mong block

1. Gumuhit ng mga linya ng block, halimbawa ng room tag.
2. Piliin ang {{ui:Mga Block}} › {{ui:More}} › {{ui:Magtakda ng attribute}}, o i-type ang `ATT` at pindutin ang {{key:Enter}}.
3. Ipinapakita ng history ang mga mode (`Invisible=No Constant=No Preset=No`). I-type ang `I`, `C` o `P` para palitan ang isa, at pindutin ang {{key:Enter}} kapag tama na ang mga ito. Ang invisible na value ay iniingatan pero hindi iginuguhit; ang constant ay pareho ang value sa bawat reference; ang preset ay hindi tinatanong kapag ini-insert ang block.
4. I-type ang tag (halimbawa `ROOM_NO`: malalaking titik, walang espasyo), ang prompt (`Room number`) at isang default value (`101`).
5. I-click kung saan pupunta ang value, at ibigay ang taas at ang rotation. Lumalabas ang tag sa drawing.
6. Gawin ang block gamit ang {{cmd:BLOCK}}, pinipili ang mga linya at attribute definition nang sabay. Ang reference na papalit sa mga ito ay kukuha ng mga default value; bawat bagong {{cmd:INSERT}} ay humihingi ng mga ito.

Ang napiling attribute definition ay nagpapakita ng {{ui:Tag}}, {{ui:Prompt}}, {{ui:Default}} at mga mode sa {{ui:Properties}}.

## Baguhin ang block: ang block editor

{{ui:Mga Block}} › {{ui:More}} › {{ui:I-edit ang block}} ({{cmd:BEDIT}}, `BE`) ay nagbubukas ng block nang mag-isa: i-type ang pangalan nito (o pumili muna ng reference). Ang bar sa itaas ay nagsasabi kung aling block ang ine-edit mo. Gumuhit, magbura at magbago ng mga object nito gamit ang mga karaniwang command, at magdagdag o magbago ng mga attribute definition. Pagkatapos, i-click ang {{ui:I-save ang block}} (o i-type ang {{cmd:BCLOSE}} at `S`): ipinapakita ng bawat reference ang pagbabago, at isang {{key:Mod+Z}} ang nag-u-undo ng lahat. Ang {{ui:Itapon ang mga pagbabago}} (`BCLOSE`, `D`) ay iniiwan ang block gaya ng dati.

Kapag nagdagdag, nag-alis o nagbago ka ng mga attribute definition, ini-a-align din ng pag-save ang bawat reference: ang mga value na itinype mo ay nananatili, ang bagong attribute ay kumukuha ng default nito, ang inalis ay nawawala, at bumabalik sa lugar na itinakda ng definition ang bawat attribute. Sinasabi ng history kung ilang reference ang na-update.

## I-edit ang title block kung nasaan ito (REFEDIT)

Madalas nasa loob ng block ang title block sa sheet. Para baguhin ang mga linya o teksto nito nang hindi umaalis sa sheet:

1. Piliin ang title block, saka {{ui:Mga Block}} › {{ui:More}} › {{ui:I-edit sa lugar}} (o i-type ang {{cmd:REFEDIT}}).
2. Ang mga laman nito ay nagiging ordinaryong object kung nasaan sila; lahat ng iba ay kumukupas at hindi maaaring baguhin.
3. Baguhin, burahin o gumuhit: ang mga bagong object ay nagiging bahagi ng block.
4. I-click ang {{ui:I-save ang block}} sa bar sa itaas (o i-type ang {{cmd:REFCLOSE}} at `S`). Ipinapakita ng bawat reference ang pagbabago, at isang {{key:Mod+Z}} ang nag-u-undo ng buong edit. Ang {{ui:Itapon}} ay iniiwan ang block gaya ng dati.

Ang naka-link na drawing, dynamic block, o reference na naka-scale nang iba sa pahalang at pataas ay hindi maaaring i-edit nang nasa lugar: gamitin ang {{cmd:BEDIT}} (o buksan ang naka-link na drawing).

:::note
I-save o itapon sa block editor bago i-save ang drawing: ang file na na-save habang bukas ang editor ay may block na gaya ng bago ang pagbabago.
:::

## Punan sila kapag naglalagay ng block

1. I-type ang `I` at pindutin ang {{key:Enter}}, i-type ang pangalan ng block at pindutin ang {{key:Enter}}.
2. I-click kung saan pupunta ito.
3. Humihingi ang CadCraft ng bawat value, halimbawa `Ilagay ang Item number (ITEM) <>`. I-type ang value at pindutin ang {{key:Enter}}, o pindutin ang {{key:Enter}} para panatilihin ang default na nakikita sa angle brackets.

Ang mga value na minarkahan ng block bilang preset, at ang mga constant, ay hindi tinatanong. Kumukuha sila ng default nila.

## Tingnan at baguhin ang mga value

1. I-click ang block reference.
2. Sa kanang panel, sa ilalim ng {{ui:Mga attribute}}, bawat tag ay may value nito. Ang mga invisible ay nagsasabing `hidden`.
3. I-click ang value, i-type ang bago, at pindutin ang {{key:Enter}}.

Agad ipinapakita ng drawing ang bagong value. Bawat pagbabago ay isang hakbang: ang {{key:Mod+Z}} ang nag-u-undo nito.

**Ang attribute editor.** I-double-click ang reference na may mga attribute (o {{cmd:EATTEDIT}}): ang dialog na {{ui:I-edit ang mga attribute}} ay naglilista ng bawat tag kasama ang prompt at value nito. I-type ang mga bagong value; i-click ang isang row para baguhin ang {{ui:Taas}}, {{ui:Rotation}}, {{ui:Width factor}}, {{ui:Justify}}, {{ui:Layer}}, {{ui:Kulay}} at {{ui:Invisible}} ng attribute na iyon para sa reference na ito lamang. Pinapanatiling bukas ng {{ui:I-apply}} ang dialog; isinasara ng {{ui:OK}} ang dialog pagkatapos ilapat. Bawat {{ui:I-apply}} o {{ui:OK}} ay isang undo step.

**Sa command line**, ang {{cmd:ATTEDIT}} ay nagtatanong ng bawat value nang sunod-sunod: mag-type ng bago, o pindutin ang {{key:Enter}} para panatilihin ito.

## Baguhin ang mga attribute definition (BATTMAN, ATTSYNC)

{{ui:Mga Block}} › {{ui:More}} › {{ui:Attribute manager}} ({{cmd:BATTMAN}}) ay naglilista ng mga attribute ng block: baguhin ang tag, prompt o default, lagyan ng tsek ang {{ui:Invisible}}, {{ui:Constant}} o {{ui:Preset}}, at ilipat sila pataas o pababa (ang pagkakasunod ang tinatanong ng mga value). Kapag naka-tsek ang {{ui:I-update ang mga reference (nanatili ang mga value)}}, ang {{ui:I-apply}} ay isinasabay din ang bawat reference; ang pinalitang pangalan ng tag ay nananatili ang mga value nito. Bawat {{ui:I-apply}} ay isang undo step.

Isinasabay ng {{cmd:ATTSYNC}} ang mga reference sa mga definition ng block nila nang manu-mano: ang `S` ay pumipili ng reference, ang `N` ay nagbibigay ng pangalan sa block, ang `A` ay ginagawa ang bawat block. Nananatili ang mga value.

Ang mga value ng sariling field ng library item (id, version, license at attribution nito) ay ipinapakita pero hindi maaaring i-edit, para gumana pa rin ang pagsuri ng update. Ang item number at quantity nito ay sa iyo na baguhin.

## Ilista sila

Pumili ng mga reference at i-type ang `LI` (para sa {{cmd:LIST}}). Ipinapakita ng history ang bawat attribute bilang `TAG = value`, na may `(invisible)` o `(constant)` kung naaangkop.

## Paglipat, pag-ikot at pag-explode

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} at {{cmd:MIRROR}} ay pinapanatili ang mga value; ang teksto ay gumagalaw kasama ng block at nananatiling nababasa.
- {{cmd:EXPLODE}} ay ginagawang ordinaryong teksto ang mga nakikitang attribute kasama ang mga value nila. Ang mga invisible ay inaalis.

## Pag-save

Ang na-save na DWG at ang na-save na DXF ay parehong pinapanatili ang bawat attribute: ang mga definition ng bawat block (pati ang invisible, constant at preset) at ang mga value ng bawat reference. Binabasa ng ibang CAD program ang mga ito bilang ordinaryong block attribute.

Sa DXF R12, ang value na lampas 255 karakter ay pinuputol sa 255, at sinasabi ito ng history.

## Mga karaniwang pagkakamali

- **Hindi lumalabas sa drawing ang isang value.** Invisible ito, o walang laman. Ipinapakita pa rin ng kanang panel ang mga invisible na value.
- **Napunta sa command line ang value na itinype ko.** I-click muna ang value box sa kanang panel.
