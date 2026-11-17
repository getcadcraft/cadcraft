---
title: I-sketch gamit ang panulat at makakuha ng tumpak na geometry
summary: Gumuhit nang freehand gamit ang panulat, mouse o daliri, at bawat stroke ay nagiging malinis na linya, bilog, arko, rectangle o polyline pagkaangat ng panulat, naka-snap sa kung ano na ang nakaguhit, at handa na ang sukat nito para i-type ang bago.
keywords: sketch, panulat, stylus, freehand, daliri, linisin, tumpak, snap, SKETCHLIVE, SKETCHFIX, sukat, i-type sa ibabaw
from: cd87eb75
---

Simulan ang {{cmd:SKETCHLIVE}} (o piliin ang **Draw › Higit pa › I-sketch gamit ang panulat**) at gumuhit ng stroke sa pamamagitan ng pagpindot at pag-drag. Kapag inangat mo ang panulat, binabasa ng CadCraft kung ano ang ibig mong iguhit at inilalagay ito sa drawing:

| Ang iyong stroke | Ang makukuha mo |
|---|---|
| Halos tuwid | Isang linya. Ang halos pahalang o patayong linya ay ginagawang eksaktong pahalang o patayo. |
| Sarado at bilog | Isang bilog |
| Bahagi ng bilog na hugis | Isang arko |
| Sarado na may apat na tamang anggulong sulok | Isang rectangle |
| Iba pa | Isang polyline na may tuwid na gilid |

Ang mga dulo ng stroke ay hinihila papunta sa pinakamalapit na dulo ng nakaguhit na, kaya ang na-sketch na pader ay dumidikit sa katabing pader.

## I-type ang bagong sukat

Pagkatapos ng bawat stroke, ipinapakita ng command line ang sukat nito (ang **haba** ng linya, ang **radius** ng bilog o arko, ang **lapad** ng rectangle) bilang default. Pindutin ang {{key:Enter}} para itago ito, o i-type ang numero o haba gaya ng `12'6"` para palitan ito. Pinapanatili ng linya ang unang dulo nito, ang bilog ang sentro nito, at ang rectangle ang unang sulok nito.

Pindutin ang {{key:Enter}} sa walang lamang prompt para tapusin, o i-type ang `U` para bawiin ang huling stroke. Isang undo step ang buong session.

## Paglilinis ng ilang stroke nang sabay

{{cmd:SKETCHFIX}} ang nangangalap ng mga stroke at ginagawang tumpak ang lahat ng ito kapag pinindot mo ang {{key:Enter}}, na angkop sa magaspang na layout na mabilis iginuhit.

:::note
Lahat ng ito ay kinakalkula sa iyong computer gamit ang mga patakaran, walang modelo at walang ipinapadala kahit saan.
:::
