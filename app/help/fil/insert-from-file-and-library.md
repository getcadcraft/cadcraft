---
title: Mag-insert mula sa file o sa library
summary: Dalhin ang isang block, o isang buong drawing, mula sa ibang DWG o DXF, at maglagay ng mga item mula sa Library, file o ibang library, kasama ang kanilang credits at update.
keywords: insert, file, library, librarycraft, item, equipment, block mula sa ibang drawing, wblock, design center, credits, attribution, license, update, feed, item.json
from: f6e4e452
---

## Mag-insert ng block mula sa ibang drawing

1. I-type ang `I` at pindutin ang {{key:Enter}}, o i-click ang {{ui:I-insert}} sa grupong Blocks.
2. Sinasabi ng command line sa ilalim ng window ang `Enter block name or [File/Library]`. I-type ang `F` doon at pindutin ang {{key:Enter}}.
3. Piliin ang DWG o DXF sa computer na ito. Binabasa ito dito; hindi ito binubuksan, at walang ina-upload.
4. Sa dialog na {{ui:I-insert mula sa}}, pumili ng block mula sa listahan (mag-type sa {{ui:I-filter ang mga block}} para hanapin ito), o panatilihin ang {{ui:Ang buong drawing}}. I-click ang {{ui:I-insert}}.
5. I-click kung saan ito ilalagay, at punan ang anumang attribute na hinihingi nito.

Puwede ka ring magsimula sa panel na {{ui:Blocks}}: i-type ang `F` sa kahon nitong {{ui:I-filter ang mga block}} at pindutin ang {{key:Enter}}, o mag-type ng bagay na walang tutugmang block at i-click ang {{ui:Mula sa file…}}. Binubuksan ng `L` at ng {{ui:Library…}} ang library sa parehong paraan. Bago ang bersyon 0.10.1, ang letrang tina-type sa {{ui:I-filter ang mga block}} ay naghahanap lamang ng mga block ng drawing na ito at sumasagot ng "No block matches the filter."

Para panatilihin ang drawing ng sarili mong mga block sa malapit, i-click ang {{ui:Magdagdag ng drawing}} sa ilalim ng {{ui:Libraries}} sa panel na {{ui:Blocks}} at piliin ang DWG o DXF. Nakalista ang mga block nito kasama ang mga larawan; i-click ang isa para ilagay ito.

Papasok ang buong drawing bilang isang block na pinangalanan ayon sa file. Papasok din ang mga block sa loob ng block na pinili mo. Idinadagdag sa drawing na ito ang mga layer na ginagamit nila.

Kung nasa ibang unit ang kabilang drawing (halimbawa, pulgada at milimetro), ini-scale ng CadCraft ang reference para magtugma at sinasabi ito sa history.

### Kapag may ginamit nang pangalan

Kung may block na ang drawing na ito na may parehong pangalan, nagtatanong ang CadCraft:

- Ang {{ui:Panatilihin ang umiiral}} ay gagamit ng block ng drawing na ito na may pangalang iyon.
- Ang {{ui:Palitan ang pangalan}} ay magpapasok ng bago bilang `Name (2)`.

Iisang hakbang ang buong insert: tinatanggal ng {{key:Mod+Z}} ang reference at ang mga kinopyang kahulugan.

## Buksan ang library

I-click ang {{ui:Library…}} sa panel na {{ui:Blocks}}, o ang {{ui:Library}} sa grupong Blocks, o i-type ang `LIB`. Sa prompt ng `INSERT`, binubuksan din ito ng `L`.

May apat na pinagmulan ang library, bilang mga tab:

- {{ui:Library}}: ang library ng CadCraft. Maghanap ayon sa pangalan, gumawa o modelo, at mag-filter ayon sa kategorya.
- {{ui:Mga file…}}: isang item file (`item.json`) mula sa anumang library, o isang drawing, spreadsheet o 3D model na gagawan ng mga item: isang DWG o DXF (bawat block ay nagiging item), isang CSV na may column na pangalan at laki, o isang glTF o OBJ model. Walang ina-upload.
- {{ui:Standard}}: mga steel section (bilang section, elevation o 3D member) at mga standard na piyesa gaya ng bolt, nut at bearing, na ginawa rito mula sa mga nailathalang talahanayan. Tingnan ang [Ilagay ang mga steel section at standard na piyesa](topic:steel-and-standard-parts).
- {{ui:Ibang feeds}}: ibang library na sumasagot nang pareho sa Library. Idagdag ang address nila minsan; naaalala ito ng browser na ito.

Nagpapakita ang bawat card ng preview, ang pangalan, ang gumawa at modelo, ang license at ang bersyon. Ang item na binawi ay minamarkahan ng {{ui:Withdrawn}} kasama ang dahilan; nagtatanong muna ang CadCraft bago mo ito ilagay.

## Maglagay ng item

1. I-click ang {{ui:Ilagay}} sa isang card.
2. I-click kung saan pupunta ang item. I-type muna ang `R` para iikot ito, o ang `S` para i-scale ito.
3. Sa `Enter Item number (CC-ITEM)`, pindutin ang {{key:Enter}} para sa susunod na bakanteng numero, o i-type ang sarili mo.

Nagiging block ang item na pinangalanang `LIB_<name>_v<version>`, na iginuhit sa mga unit ng drawing na ito. Kung walang unit ang drawing, inilalagay ang item sa milimetro at sinasabi ito ng history; itakda muna ang {{ui:Units}} sa kanang panel.

Dala-dala ang datos nito bilang mga hindi nakikitang attribute: ang id at bersyon ng item, license at attribution, gumawa, modelo, kategorya at mga laki. Tingnan ang [Mga attribute ng block](topic:attributes).

## Mga item sa sarili mong wika

Puwedeng magdala ang item ng pangalan at deskripsyon nito sa ibang wika. Kapag may mga ito sa wikang nakatakda sa CadCraft (Settings › General › Language), ginagamit ng card at ng pangalan ng item ng block na nailagay ang mga ito. Ang block mismo ay may pangalang galing sa sariling pangalan ng item, kaya iisang block bawat item ang nasa drawing anuman ang wikang ginamit sa paglalagay.

## Tingnan ang mga update

1. Buksan ang library.
2. I-click ang {{ui:Tingnan ang mga update}}.

Nakalista ang bawat item ng library sa drawing kasama ang mga numero ng item nito at kung napapanahon ito, may mas bagong bersyon (at kung ano ang nagbago), o binawi na. I-click ang {{ui:I-update}} sa isang row, o ang {{ui:I-update lahat}}. Lilipat ang bawat reference sa block ng bagong bersyon at pananatilihin ang numero ng item, dami, puwesto, anggulo at layer nito. Binabawi ng {{key:Mod+Z}} ang isang update.

## Magbigay ng kredito sa ginamit mo

I-click ang {{ui:Credits ng library}}. Nakalista ang bawat item kasama ang linya ng attribution at license nito.

- {{ui:Kopyahin ang attribution}} ay kinokopya ang linya ng isang item; {{ui:Kopyahin lahat}} ay kinokopya ang bawat linya.
- {{ui:I-download ang CSV}} ay nagse-save ng listahan kasama ang mga numero ng item, gumawa, modelo, license at attribution. Nagbubukas ito sa anumang spreadsheet.

Ang mga license gaya ng CC BY ay humihiling na bigyan mo ng kredito ang may-akda kung saan mo ginagamit ang gawa. Ilagay ang mga linya sa drawing, sa specification o sa mga tala ng proyekto.

## Mga simbolo at asset

May tatlong uri ng item ang Library: Symbols (kumbensyon ng drawing, 2D), Types (kung ano ang gawa ng isang elemento) at Assets (pisikal na bagay). Sa tab na {{ui:Library}}, ipinapakita ng listahang {{ui:Uri ng item}} ang Symbols at assets nang magkasama, Symbols lamang, o Assets lamang. Ang Types ang bumubuo sa isang proyekto ng BimCraft, kaya hindi sila nakalista ng CadCraft.

## Mag-sign in sa library

I-click ang {{ui:Mag-sign in sa library}}. Bumubukas ang maliit na window sa site; kapag naka-sign in ka na doon, maipapakita ng CadCraft ang mga item ng team mo at maire-rehistro ang mga inilagay mo, para malaman mo kapag nagbago ang item na ginamit mo. Tumatagal ang sign-in sa tab na ito ng browser. Puwede mo itong bawiin anumang oras mula sa security page ng account mo.

## Panatilihin ang sarili mong mga object sa My objects

Ang {{ui:Mga object ko}} ay pribadong listahan sa Library na ikaw lamang ang makakakita. Wala ito sa pampublikong library, wala sa paghahanap, at hindi ipinapakita sa team mo, at sumusunod ito sa account mo sa bawat computer kung saan ka nag-sign in sa library.

1. Sa panel ng Library, i-click ang {{ui:Mga file…}} at basahin ang isang file.
2. Sa item na gusto mong balikan, i-click ang {{ui:Itago sa mga object ko}}.
3. Mamaya, i-click ang {{ui:Mga object ko}} at i-click ang {{ui:Ilagay}}. Ilalagay ito gaya ng anumang item ng library, at sakop ito ng {{ui:Tingnan ang mga update}}.
4. Inaalis ng {{ui:Alisin sa mga object ko}} ito sa listahan. Nananatili ang mga kopyang nailagay na sa mga drawing.

Kailangan kang naka-sign in sa library. Walang ina-upload ang pagbabasa ng file; ang pag-iingat ng item ay nagpapadala lamang ng item na iyon sa account mo.

:::note
Sinusubok pa lang ang My objects at maaaring hindi pa bukas para sa account mo. Kung sinasabi nitong "My objects is not open for this account yet", maaari ka pa ring maglagay ng mga item mula sa sarili mong file gamit ang {{ui:Mga file…}}.
:::

## Mga karaniwang pagkakamali

- **"Making items from IFC types is in BimCraft."** Binabasa ang mga IFC at family file sa app ng BimCraft. Gawin ang item doon o sa Library, pagkatapos gamitin ang `item.json` nito dito.
- **"The library could not be reached."** Offline ka, o nakababa ang library. Hindi apektado ang mga item na nasa drawing na.
- **Sobrang laki o sobrang liit ng item.** Mali o hindi nakatakda ang mga unit ng drawing. I-undo, itakda ang {{ui:Units}}, at ilagay muli.
