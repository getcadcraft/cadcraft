---
title: Maglagay ng steel section at mga standard part
summary: Gumuhit ng steel section, elevation at 3D member mula sa mga nailathalang section table, maglagay ng bolt, nut, washer, pin, bearing, key at gear ayon sa kanilang pamantayan, at ilista ang mga ito sa parts list.
keywords: bakal, section, profile, shape, w shape, wide flange, i-beam, channel, angle, hss, tube, pipe, ipe, hea, heb, upn, biga, beam, haligi, column, member, elevation, aisc, en 10365, bolt, screw, nut, washer, pin, dowel, bearing, key, keyway, gear, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, standard parts, listahan ng parts, parts list, bill of materials, bom, steelmember, partslist
from: 547c1048
---

Ang tab na {{ui:Standard}} ng library ay may dalawang uri ng bagay, na ginawa rito mismo mula sa mga nailathalang table (walang dina-download):

- **Steel section**: 1,335 na laki. W, S, C, L, HSS at Pipe mula sa AISC Shapes Database v16.0; IPE, HEA, HEB at UPN mula sa EN 10365:2017. Gumagamit ang DetailCraft ng parehong table.
- **Standard part**: hex head screw (ISO 4017), hex bolt (ISO 4014), hex nut (ISO 4032), plain washer (ISO 7089), inch hex bolt at nut (ASME B18.2.1 at B18.2.2), parallel pin (ISO 2338), deep groove ball bearing (ISO 15), parallel key (DIN 6885-1) at spur gear (module mula sa ISO 54).

Lahat ng ito ay ibinabahagi sa ilalim ng CC0: gamitin ito para sa kahit ano, walang kailangang credit.

## Maglagay ng steel section

1. Buksan ang library ({{ui:Library}} sa grupong Blocks, o i-type ang `LIB`) at i-click ang tab na {{ui:Standard}}.
2. Pumili ng family sa unang listahan, halimbawa {{ui:W shapes}}. I-type sa search box para paliitin ang mga laki: ang `W12` ay nagpapakita ng lahat ng W12.
3. Sa {{ui:Ilagay bilang}}, piliin ang:
   - {{ui:Section}}: ang cross-section, na ang sentro ay nasa insertion point.
   - {{ui:Elevation}}: ang member na nakikita mula sa gilid, ayon sa {{ui:Haba (mm)}}, mula sa gitna ng kaliwang dulo nito.
   - {{ui:3D member}}: solid sa 3D tab (sa ibaba).
4. I-click ang {{ui:Ilagay}} sa card ng laki, pagkatapos i-click kung saan ito ilalagay, gaya ng sa anumang item ng library.

Ang section o elevation ay nagiging block. Dala ng mga attribute nito ang laki, ang table na pinanggalingan nito, ang haba (para sa elevation) at isang materyal na maaari mong punan.

:::note
Ang S shape, channel at UPN ay iginuguhit na may parallel na flange ng karaniwang kapal, at ang angle ay may tuwid na sulok: ang totoong flange ay nakahilig at bilog ang sulok. Ang W, IPE, HEA at HEB ay may root fillet, at ang HSS ay may corner radius.
:::

## Gumawa ng 3D member

Piliin ang {{ui:3D member}} at i-click ang {{ui:Ilagay}}, o i-type ang {{cmd:STEELMEMBER}} (`SMEMBER`) sa command line:

1. Sa `Section size`, pindutin ang {{key:Enter}} para sa ipinakitang laki, o i-type ang isa, halimbawa `HSS6x6x1/4` o `IPE300`.
2. I-click ang start point, pagkatapos ang end point. Tatakbo ang member sa pagitan nila, nakapatong sa lupa.
3. Para sa column, i-type ang `C`, i-click ang base point nito at i-type ang taas nito.

Ang member ay isang saradong solid sa 3D tab. Ilipat o kopyahin ito roon gaya ng ibang solid. Inaalis ito ng {{key:Mod+Z}} muli.

## Maglagay ng standard part

1. Sa tab na {{ui:Standard}}, piliin ang family, halimbawa {{ui:Hex head screws}}.
2. Para sa screw, bolt, pin o key, i-type ang {{ui:Haba (mm)}} nito (inch para sa mga inch family). Para sa gear, i-type ang {{ui:Ngipin}}, ang {{ui:Lapad ng mukha (mm)}} at ang {{ui:Bore (mm)}}. Iwanang walang laman ang kahon para sa karaniwang value na ipinapakita roon.
3. I-click ang {{ui:Ilagay}} sa laki at i-click kung saan ito ilalagay.

Ang screw, bolt at pin ay iginuguhit mula sa gilid, na ang bearing face ng ulo ay nasa insertion point; ang nut, washer, bearing at gear ay nakaharap nang patag; ang key ay mula sa itaas. Iginuguhit ang thread sa karaniwang paraan: ang root bilang manipis na linya, ang dulo ng thread bilang makapal. Iginuguhit ang gear bilang tip circle, pitch circle at root circle, hindi ngipin-por-ngipin.

Ang block ng bawat part ay nagdadala ng type, standard, laki, haba at materyal nito bilang attribute, at ng timbang nito mula sa nominal na hugis sa bakal. Baguhin ang materyal sa panel na {{ui:Properties}}.

Nasa Library rin bilang item ang mga parehong part, at binubuksan sila ng PartCraft bilang parametric part ({{ui:Standard part}} sa grupong File nito).

## Gumawa ng parts list

- Sa library, i-click ang {{ui:Listahan ng parts}}: bawat standard part at steel section sa drawing, pinagpangkat ayon sa type, standard, laki, haba at materyal, kasama ang dami at item number. Sine-save ng {{ui:I-download ang CSV}} ito para sa spreadsheet.
- Para iguhit ito, i-type ang {{cmd:PARTSLIST}} (`PLIST`), i-click ang kaliwang itaas na sulok ng table, at pindutin ang {{key:Enter}} para sa karaniwang taas ng teksto o i-type ang isa.

Binabasa ang listahan mula sa mga attribute ng block, kaya tama pa rin ito pagkatapos i-save ang drawing bilang DWG o DXF at buksan muli.

## Mga karaniwang pagkakamali

- **"Walang steel section na tinatawag na …"**: i-type ang laki gaya ng nakalista sa tab na {{ui:Standard}}: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Nasa 3D tab ang member, wala sa plano.** Gumagawa ang {{cmd:STEELMEMBER}} ng solid; buksan ang 3D tab para makita ito. Para ipakita ang steel sa plano, maglagay din ng {{ui:Section}} o {{ui:Elevation}}.
- **Wala sa saklaw ang haba.** Dapat mas mahaba ang bolt kaysa sa ulo nito, at ang key ay mas mahaba kaysa sa lapad nito. Sinasabi ng linya sa ilalim ng mga card kung aling value ang tinanggihan.
