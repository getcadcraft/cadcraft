---
title: I-insert mula sa file o sa library
summary: Ilabas ang block, o isang buong drawing, mula sa ibang DWG o DXF, at maglagay ng mga item mula sa Library, file o ibang library, kasama ang kanilang credits at update.
keywords: insert, file, library, librarycraft, item, equipment, block mula sa ibang drawing, wblock, design center, credits, attribution, license, update, feed, item.json
from: 316188d2
---

## I-insert ang block mula sa ibang drawing

1. I-type ang `I` at pindutin ang {{key:Enter}}, o i-click ang {{ui:Insert}} sa Blocks group.
2. Sa `Ilagay ang block name o [File/Library]`, i-type ang `F` at pindutin ang {{key:Enter}}.
3. Piliin ang DWG o DXF sa computer na ito. Binabasa ito rito; hindi ito binubuksan, at walang ina-upload.
4. Sa dialog na {{ui:I-insert mula sa}}, pumili ng block sa listahan (mag-type sa {{ui:I-filter ang mga block}} para hanapin ito), o panatilihin ang {{ui:Ang buong drawing}}. I-click ang {{ui:Insert}}.
5. I-click kung saan ito ilalagay, at punan ang anumang attribute na hinihingi nito.

Ang buong drawing ay papasok bilang isang block na pinangalanan ayon sa file. Kasama rin ang mga block sa loob ng block na pinili mo. Idinadagdag sa drawing na ito ang mga layer na ginagamit nila.

Kung iba ang unit ng ibang drawing (halimbawa inches at millimeters), ini-scale ng CadCraft ang reference para tumugma at sinasabi ito sa history.

### Kapag may pangalan nang ginagamit

Kapag may block na may parehong pangalan na ang drawing na ito, nagtatanong ang CadCraft:

- {{ui:Panatilihin ang umiiral}} ay ginagamit ang block ng drawing na ito na may ganoong pangalan.
- {{ui:Palitan ang pangalan}} ay ipinapasok ang bago bilang `Name (2)`.

Iisang hakbang ang buong insert: ang {{key:Mod+Z}} ay inaalis ulit ang reference at ang mga kinopyang definition.

## Buksan ang library

I-click ang {{ui:Library…}} sa {{ui:Blocks}} panel, o ang {{ui:Library}} sa Blocks group, o i-type ang `LIB`. Sa `INSERT` prompt, binubuksan din ito ng `L`.

Apat ang pinagmumulan ng library, bilang mga tab:

- {{ui:Library}}: ang CadCraft library. Maghanap ayon sa pangalan, maker o model, at mag-filter ayon sa category.
- {{ui:Mga file…}}: isang item file (`item.json`) mula sa anumang library, o isang drawing, spreadsheet o 3D model na gagawan ng mga item: isang DWG o DXF (bawat block ay nagiging item), isang CSV na may name at size column, o isang glTF o OBJ model. Walang ina-upload.
- {{ui:Standard}}: mga steel section (bilang section, elevation o 3D member) at mga standard part gaya ng bolt, nut at bearing, na ginawa rito mula sa mga nailathalang talaan. Tingnan ang [Maglagay ng steel section at standard part](topic:steel-and-standard-parts).
- {{ui:Other feeds}}: ibang library na sumasagot nang gaya ng Library. Idagdag ang address nila nang isang beses; naaalala ito ng browser na ito.

Ipinapakita ng bawat card ang preview, ang pangalan, ang maker at model, ang license at ang version. Ang item na binawi na ay minarkahang {{ui:Binawi}} kasama ang dahilan; nagtatanong muna ang CadCraft bago ka maglagay nito.

## Maglagay ng item

1. I-click ang {{ui:Ilagay}} sa isang card.
2. I-click kung saan ilalagay ang item. I-type muna ang `R` para paikutin ito, o ang `S` para baguhin ang laki nito.
3. Sa `Ilagay ang Item number (CC-ITEM)`, pindutin ang {{key:Enter}} para sa susunod na bakanteng numero, o i-type ang sarili mong numero.

Ang item ay nagiging block na pinangalanang `LIB_<name>_v<version>`, na iginuhit sa unit ng drawing na ito. Kung walang unit ang drawing, ilalagay ang item sa millimeters at sinasabi ito ng history; itakda muna ang {{ui:Mga unit}} sa kanang panel.

Ang data nito ay kasama bilang mga invisible attribute: ang id at version ng item, license at attribution, maker, model, category at mga sukat. Tingnan ang [Block attributes](topic:attributes).

## Mga item sa iyong wika

Maaaring may pangalan at paglalarawan ang isang item sa ibang mga wika. Kapag mayroon sila sa wikang nakatakda sa CadCraft (Mga setting › General › Wika), ginagamit ng card at ng pangalan ng item ng nailagay na block ang mga ito. Ang block mismo ay nananatili sa pangalang ginawa mula sa sariling pangalan ng item, kaya iisa ang block bawat item sa drawing, anuman ang wikang ginamit sa paglalagay.

## Tingnan ang mga update

1. Buksan ang library.
2. I-click ang {{ui:Tingnan ang mga update}}.

Nakalista ang bawat library item sa drawing kasama ang mga item number nito at kung ito ay napapanahon, may mas bagong bersyon (at kung ano ang nagbago), o binawi na. I-click ang {{ui:I-update}} sa isang row, o ang {{ui:I-update lahat}}. Lilipat ang bawat reference sa block ng bagong bersyon at mananatili ang item number, dami, lugar, anggulo at layer nito. Binabawi ng {{key:Mod+Z}} ang update.

## Kilalanin ang ginamit mo

I-click ang {{ui:Credits ng library}}. Nakalista ang bawat item kasama ang linya ng attribution at license nito.

- {{ui:Kopyahin ang attribution}} ay kinokopya ang linya ng isang item; ang {{ui:Kopyahin lahat}} ay kinokopya ang bawat linya.
- {{ui:I-download ang CSV}} ay nagsa-save ng listahan kasama ang mga item number, maker, model, license at attribution. Nabubukan ito sa anumang spreadsheet.

Ang mga license gaya ng CC BY ay humihingi na kilalanin mo ang may-akda kung saan mo ginagamit ang gawa. Ilagay ang mga linya sa drawing, sa specification o sa mga project note.

## Mga simbolo at asset

May tatlong uri ng item ang Library: Symbols (mga convention sa pagguhit, 2D), Types (kung ano ang binubuo ng isang elemento) at Assets (mga pisikal na bagay). Sa {{ui:Library}} tab, ipinapakita ng {{ui:Uri ng item}} na listahan ang Symbols at Assets nang magkasama, Symbols lang, o Assets lang. Ang Types ang binubuuan ng isang BimCraft project, kaya hindi sila inililista ng CadCraft.

## Mag-sign in sa library

I-click ang {{ui:Mag-sign in sa library}}. Bumubukas ang maliit na window sa site; kapag naka-sign in ka na roon, maipapakita ng CadCraft ang mga item ng team mo at maire-register ang mga inilagay mo, para malaman mo kapag nagbago ang item na nagamit mo. Tumatagal ang sign-in para sa browser tab na ito. Maaari mo itong bawiin anumang oras mula sa security page ng account mo.

## Mga karaniwang pagkakamali

- **"Making items from IFC types is in BimCraft."** Ang paggawa ng item mula sa IFC types ay nasa BimCraft. Binabasa ang IFC at family file sa BimCraft app. Gawin ang item doon o sa Library, saka gamitin ang `item.json` nito rito.
- **"The library could not be reached."** Hindi maabot ang library. Offline ka, o down ang library. Hindi naaapektuhan ang mga item na nasa drawing na.
- **Sobrang laki o sobrang liit ng item.** Mali o hindi nakatakda ang unit ng drawing. I-undo, itakda ang {{ui:Mga unit}}, at ilagay ulit ang item.
