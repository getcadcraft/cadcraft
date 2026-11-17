---
title: Mga listahan ng materyales ayon sa zone
summary: Markahan ang mga bahagi ng drawing bilang zone at maglagay ng table para sa bawat isa na nagbibilang ng mga block sa loob nito. Sumusunod ang mga table sa drawing habang nagtatrabaho ka, at pinipili mo kung aling mga column ang ipinapakita ng bawat isa.
keywords: listahan ng materyales, BOM, parts list, iskedyul, zone, lawak, table, bilang, dami, attribute, mga column, item number, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

Ang **zone** ay pinangalanang bahagi ng drawing. Ang **bill of materials table** ay naglilista ng nasa loob ng isang zone, o ng buong drawing: bawat block kasama ang quantity nito at ang mga value ng attribute nito. Maaaring magkaroon ang isang drawing ng kasing-dami ng zone at table na kailangan mo, at maaaring magkaroon ng ilang table na may magkakaibang column ang iisang zone.

Nasa tab na Blocks, sa ilalim ng {{ui:Listahan ng materyales}}, sa More menu ng Blocks group ang mga tool, at maaari silang i-type.

## Gumawa ng zone

I-type ang {{cmd:BOMZONE}} at alinman sa:

- i-click ang dalawang magkasalungat na sulok para sa isang rectangle,
- piliin ang {{ui:Polygon}}, i-click ang bawat sulok at pindutin ang Enter para isara ito, o
- piliin ang {{ui:Object}} at pumili ng closed polyline, bilog, ellipse o closed spline. Kinokopya ang outline nito; nananatili ang object gaya ng dati.

Pagkatapos, i-type ang pangalan ng zone. Iginuguhit ang zone bilang dashed na outline na may pangalan nito sa itaas ng kaliwang sulok, sa layer na `BOM-ZONES`, na hindi ipina-plot. I-on ang plotting para sa layer na iyon kung gusto mong may mga zone sa papel.

Ang zone ay isang ordinaryong closed polyline: ilipat ito, i-stretch, o i-drag ang mga grip nito, at sumusunod ang pangalan nito. Para palitan ang pangalan ng zone, i-edit ang teksto ng pangalan, o gamitin ang {{cmd:BOMZONE}} at ang {{ui:Palitan ang pangalan}}. Inililista ng {{ui:Mga zone}} ang bawat zone at kung ilang table ang mayroon ito.

## Maglagay ng table

I-type ang {{cmd:BOMTABLE}} (o {{cmd:BOM}}), piliin ang outline ng zone o ang pangalan nito, ibigay ang taas ng teksto, at i-click kung saan pupunta ang kaliwang sulok sa itaas ng table. Pindutin ang Enter sa halip na pumili ng zone, o piliin ang {{ui:Buo}}, para sa table ng buong drawing.

Ang bagong table ay nagpapakita ng item number, ang quantity, ang pangalan ng block, at isang column para sa bawat attribute na dala ng mga block (ang unang anim; ang iba ay iniaalok na hindi naka-tsek). Ang mga block na may parehong pangalan at parehong value ng attribute ay nagbabahagi ng iisang row.

## Ano ang binibilang bilang nasa loob

- Nabibilang ang block sa zone na naglalaman ng **insertion point** nito.
- Nabibilang nang **buo** ang linya, arko, bilog, polyline, ellipse, spline o hatch sa zone na naglalaman ng gitna ng extents nito (para sa linya, ang midpoint nito). Hindi pinuputol ang haba nito sa gilid ng zone.
- Nasa loob ang punto na eksaktong nasa gilid.
- Maaaring mag-overlap ang mga zone. Binibilang ng bawat zone ang sarili nito, kaya nasa parehong table ang object sa overlap.

## Sumusunod ang mga table sa drawing

Kapag nagdagdag, nag-move, nag-copy o nagbura ka ng block, nag-edit ng attribute, o nag-reshape o nag-move ng zone, muling iginuguhit ang bawat table sa parehong hakbang. Binabawi ng undo ang edit mo at ang pagbabago ng table nang sabay.

Para pigilan ang isang table sa pagsunod, lagyan ng tsek ang {{ui:Naka-freeze}} sa settings nito. Nagbabago lamang ang naka-freeze na table kapag in-edit mo ang settings nito o nag-type ka ng {{cmd:BOMUPDATE}}, na ina-update ang bawat table ngayon.

## Piliin ang mga column

Pumili ng table at i-type ang {{cmd:BOMEDIT}}. Sa dialog:

- **Mga column**: lagyan ng tsek ang mga ipapakita (item, quantity, name, layer, length, area, remarks at bawat attribute), i-type ang sarili mong heading para sa alinman sa mga ito, at ilipat sila pataas o pababa.
- {{ui:Pagpangkatin ang mga row ayon sa}}: pangalan ng block at mga value ng attribute, pangalan ng block lamang, layer, o isang attribute. Sa pinagsamang row, ang value na nag-iiba sa pagitan ng mga block ay nagsasabing "nag-iiba".
- {{ui:Ayusin ayon sa}} alinmang column, pataas o pababa.
- {{ui:Pamagat}}, {{ui:Ipakita ang title}} at {{ui:Row ng kabuuan}}.
- {{ui:Bilangin ang linework ayon sa layer}} ay nagdaragdag ng isang row bawat layer, na may bilang ng mga object nito, kabuuang haba, at, para sa closed na mga hugis, kabuuang lawak, sa drawing units.
- **Remarks**: lagyan ng tsek ang Remarks column, saka i-type ang remark para sa alinmang row sa table, sa ibaba ng dialog.

Bawat table ay nagtatago ng sarili nitong mga pinili.

## Mga item number

Pinapanatili ng row ang item number nito hangga't nasa table ito. Ang bagong row ay kumukuha ng susunod na libreng numero, at ang numerong naibigay na ay hindi na muling ginagamit, para manatiling tama ang mga balloon at note na nagbabanggit ng numero. Ang {{ui:I-renumber ang mga item}} ay nagnunumero ng mga ito mula 1 ayon sa pagkakasunod na ipinapakita.

Kilala ang isang row sa pamamagitan ng pinagpapangkatan nito: palitan ang paraan ng pagpapangkat, o palitan ang value ng attribute na ginagamit ng pagpapangkat, at ituturing na bagong row ang row.

## Export at ibang program

Ang {{cmd:BOMEXPORT}}, o ang {{ui:I-export ang CSV}} sa dialog, ay nagse-save ng table bilang .csv file para sa spreadsheet.

Sa DWG o DXF file, ang table ay ordinaryong block ng mga linya at teksto, kaya nakikita at naiplo-plot ito ng ibang program gaya ng pagkakaguhit nito. Hindi ito table object doon, at hindi ito nag-a-update sa ibang program. Nananatili sa file ang link nito sa zone bilang extension data na binabasa pabalik ng CadCraft, kaya muling nagiging live ang table kapag binuksan mo muli ang drawing sa CadCraft. Ang R12 DXF ng drawing na walang sheet ay hindi nagtatago ng setting na "hindi ina-plot" ng layer ng zone.

Ang pag-explode ng table ay ginagawa itong maluwag na mga linya at teksto at tinatapos ang link.
