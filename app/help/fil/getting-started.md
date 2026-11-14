---
title: Pagsisimula sa CadCraft
summary: Ano ang ginagawa ng drafting app na CadCraft, saan ito tumatakbo, at ang iyong unang drawing mula sa blangkong screen hanggang sa na-save na file.
keywords: simula, pagsisimula, unang drawing, bago, buksan, i-save, save as, tutorial, panimula, mabilis na pagsisimula
from: 1a56c575
---

Ang CadCraft ay isang 2D drafting app. Gumuguhit at nag-e-edit ka ng linya, arko, polyline, teksto, dimension, at block; nagse-set up ka ng mga sheet na may title block at viewport, at ina-plot ang mga ito sa PDF. Nagbubukas ito ng DWG at DXF na drawing at nagsa-save ng mga ito bilang DWG o DXF.

Tumatakbo ito sa web browser mo. Walang kailangang i-install: ibinibigay ng site ang address, at ang buong app ay nilo-load sa page. Ang mga drawing mo ay binubuksan mula sa sarili mong computer at sine-save pabalik dito. **Walang ina-upload.**

Kung dati ka nang nag-drafting, basahin ang [Mula sa ibang drafting software](topic:coming-from) pagkatapos ng pahinang ito. Karamihan sa mga nakagawian mo ay dadalhin, at ang iilang hindi ay nakalista roon.

## Gusto mo ba ng gabay?

I-type ang `TOUR` (o i-click ang {{ui:Simulan ang tour}} sa start card, o {{ui:Mga setting}} › {{ui:CadCraft}} › {{ui:Ulitin ang tour}}). Anim na maikling hakbang sa isang kahon sa ibabaw ng drawing: gumuhit ng linya at bilog, ilipat ang mga ito, putulin ang isa, burahin ang isang bagay, at lagyan ng dimension. Natatapos ang bawat hakbang kapag nagawa mo ito, at maaari mong laktawan ang isang hakbang o ang buong tour. Kusa itong nagsisimula sa unang beses lang. Ang [cheat sheet](topic:cheat-sheet) ay may 40 command na pinakagagamitin mo, at ang [command map](topic:command-map) ay may bawat command.

## Ano ang kailangan mo

- Isang bagong Chrome, Edge, Firefox, o Safari sa computer na Mac, Windows, o Linux. Tingnan ang [Mga browser at platform](common:browsers).
- Mas komportable ang mouse na may wheel. Gumagana ang trackpad; tingnan ang [Mouse, trackpad at touch](topic:mouse-trackpad-touch).
- Keyboard. Pinapatakbo ang CadCraft ng mga na-type na command, gaya ng karamihan sa drafting program.

## Ang ideya sa isang talata

Nagta-type ka ng command (o ina-click ang button nito), at tinatanong ka ng command line sa ibaba ng isa-isa: "Tukuyin ang unang punto", "Tukuyin ang susunod na punto". Sinasagot mo ang bawat tanong sa pamamagitan ng pag-click sa drawing o pag-type ng value, saka pagpindot sa {{key:Enter}}. Ang pagpindot sa {{key:Esc}} ay nagkakansela. Iyon ang buong interaction model; ang lahat ng iba pa ay detalye.

## Ang unang drawing mo

Gagawa ka ng rectangle na 4000 by 3000 mula sa mga linya, maglalagay ng bilog sa gitna, at sine-save ang file.

1. Buksan ang CadCraft. Ipinapakita ng command line sa ibaba ang `Command:`, at ang drawing area ay nagpapakita ng maikling card na "Simulan ang drawing".
2. I-type ang `L` at pindutin ang {{key:Enter}}. Hindi mo kailangang i-click muna ang command line: kahit saan ka mag-type, doon ito mapupunta.
3. Nagbabago ang prompt sa `Specify first point:`. I-type ang `0,0` at pindutin ang {{key:Enter}}.
4. I-type ang `@4000,0` at pindutin ang {{key:Enter}}. Lumalabas ang isang linya, tumatakbo pakanan. Ang `@` ay nangangahulugang "mula sa huling punto".
5. I-type ang `@0,3000` at pindutin ang {{key:Enter}}.
6. I-type ang `@-4000,0` at pindutin ang {{key:Enter}}.
7. I-type ang `C` at pindutin ang {{key:Enter}}. Ang `C` ay ang opsyong Close: bumabalik ang huling linya sa unang punto at nagtatapos ang command.
8. I-click ang {{ui:Extents}} sa grupong View ng toolbar. Pumupuno sa screen ang rectangle.

Dapat ay nakikita mo na ngayon ang apat na linyang bumubuo ng rectangle, at nakalista sa history sa itaas ng command line ang mga na-type mo.

9. I-type ang `C` at pindutin ang {{key:Enter}} para simulan ang command ng bilog.
10. I-type ang `2000,1500` at pindutin ang {{key:Enter}} para sa center.
11. I-type ang `500` at pindutin ang {{key:Enter}} para sa radius.

Lumalabas ang isang bilog sa gitna ng rectangle.

12. Pindutin ang {{key:Mod+S}}, o i-click ang {{ui:I-save}} sa grupong File.

Dina-download ng browser ang `Drawing1.dwg` sa karaniwang folder ng downloads mo, at sinasabi ng history na nag-save ito ng kopya bilang DWG. Nabubuksan muli ang file na iyon sa CadCraft, at sa karamihan ng iba pang CAD program. (Kung pumili ka ng DXF sa {{ui:I-save bilang}} dati, sa browser na ito, ang bagong drawing ay sine-save bilang `Drawing1.dxf` sa halip.)

:::tip
Pindutin ang {{key:Enter}} sa walang lamang command line para ulitin ang huling command. Pindutin ang {{key:Space}} sa halip na {{key:Enter}} kung mas gusto mo: sa labas ng teksto, pareho ang ginagawa nito.
:::

## Magbukas ng umiiral na drawing

1. Pindutin ang {{key:Mod+O}}, o i-click ang {{ui:Buksan}}.
2. Pumili ng `.dwg` o `.dxf` na file sa file picker.

Maaari ka ring mag-drag ng DWG o DXF na file mula sa {{pick:mac=Finder|windows=File Explorer|linux=ang file manager mo}} at i-drop ito sa drawing area. Binabasa ang file sa loob ng page; hindi ito umaalis sa computer mo kailanman.

Tingnan ang [Mga file: ano ang nabubuksan, ano ang nase-save](topic:files) para sa kung ano ang pinapanatili at kung ano ang nako-convert.

## Pag-save: ano ang aasahan

Iba ang pag-save sa browser kaysa sa desktop program:

- Laging **nagda-download ng bagong kopya** ang {{ui:I-save}}. Hindi nito ino-overwrite ang file na binuksan mo. Kung may file na may parehong pangalan na nasa folder ng downloads mo, kadalasan ay nagdadagdag ang browser ng numero, gaya ng `Drawing1 (1).dwg`.
- Ginagamit ng {{ui:I-save}} ang format ng drawing: DWG kung DWG ang binuksan mo, DXF kung DXF. Para pumili, pindutin ang {{key:Mod+Shift+S}} o i-click ang {{ui:I-save bilang}}, saka piliin ang {{ui:DWG}} (at ang bersyon nito), {{ui:DXF R12}} o {{ui:DXF 2000}}. Tingnan ang [Pag-save](topic:files#saving).
- Hindi nababago ang file na binuksan mo.
- Ang pagbukas ng ibang file, o ng {{ui:Bago}}, ay naglalagay nito sa sarili nitong tab sa ibabaw ng drawing, kaya walang nasasara sa mga bukas mo. Kung isinasara mo ang tab ng drawing o umaalis sa page na may hindi pa na-save na pagbabago, magtatanong muna ang CadCraft: {{ui:I-save muna ang kopya}}, i-discard, o {{ui:Kanselahin}}. Ang pagsasara ng browser tab ay nagpapakita ng sariling tanong ng browser na "Leave site?" sa halip.

Hindi pa available ang cloud saving. Ipinapaliwanag sa [Ang mga file mo at privacy](common:your-files) kung saan napupunta ang mga file mo at kung bakit nananatiling pribado ang mga ito.

## Saan pupunta pagkatapos

Pindutin ang {{key:F1}} o i-click ang {{ui:Tulong}} sa bar sa itaas para buksan ang help na ito sa tabi ng drawing anumang oras. Gumagana ito nang walang koneksyon.

- [Ang screen ng CadCraft](topic:workspace) ay nagpapangalan sa bawat bar at panel.
- [Gumuhit gamit ang coordinates](topic:draw-with-coordinates) ang pinakamagandang unang walkthrough.
- [Keyboard at mouse](topic:keyboard) ay naglilista ng bawat key.
- I-type ang `HELP` sa command line para sa listahan ng bawat command, o basahin ang [Sanggunian ng command](topic:commands).
