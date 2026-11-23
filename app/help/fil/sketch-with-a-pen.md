---
title: Mag-sketch gamit ang panulat at makakuha ng tumpak na geometry
summary: Gumuhit nang malaya gamit ang panulat, mouse o daliri at nagiging malinis na linya, bilog, arko, rectangle o polyline ang bawat stroke pagkaangat ng panulat, nakadikit sa kung ano na ang nakaguhit, at may sukat na handang i-type ibabaw.
keywords: sketch, pen, stylus, freehand, finger, linisin, tumpak, snap, SKETCHLIVE, SKETCHFIX, sukat, i-type ibabaw, pressure, lineweight, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Simulan ang {{cmd:SKETCHLIVE}} (o piliin ang **Draw › More › Sketch with a pen**) at gumuhit ng stroke sa pamamagitan ng pagpindot at pag-drag. Kapag inangat mo ang panulat, binabasa ng CadCraft kung ano ang ibig mong sabihin at inilalagay ito sa drawing:

| Ang stroke mo | Ang makukuha mo |
|---|---|
| Halos tuwid | Isang linya. Ang halos pahalang o patayong linya ay ginagawang eksaktong pahalang o patayo. |
| Sarado at bilog | Isang bilog |
| Bahagi ng bilog na hugis | Isang arko |
| Sarado na may apat na tamang-anggulong sulok | Isang rectangle |
| Iba pa | Isang polyline na may tuwid na gilid |

Ang mga dulo ng stroke ay hinihila sa pinakamalapit na dulo ng nakaguhit na, kaya ang nasketch na pader ay nagtatagpo sa pader sa tabi nito.

## I-type ibabaw ang sukat

Pagkatapos ng bawat stroke, ipinapakita ng command line ang sukat nito (ang **haba** ng linya, ang **radius** ng bilog o arko, ang **lapad** ng rectangle) bilang default. Pindutin ang {{key:Enter}} para itago ito, o mag-type ng numero o haba gaya ng `12'6"` para palitan ito. Pinapanatili ng linya ang una nitong dulo, ang bilog ang gitna nito, ang rectangle ang una nitong sulok.

Pindutin ang {{key:Enter}} sa walang laman na prompt para tapusin, o i-type ang `U` para bawiin ang huling stroke. Ang buong session ay iisang hakbang ng undo.

## Paglinis ng ilang stroke nang sabay-sabay

Kinokolekta ng {{cmd:SKETCHFIX}} ang mga stroke at ginagawang tumpak ang lahat ng ito kapag pinindot mo ang {{key:Enter}}, na angkop sa magaspang na layout na mabilis na iginuhit.

:::note
Kinakalkula ang lahat sa computer mo ayon sa mga patakaran, walang modelo at walang ipinapadala kahit saan.
:::

## Ang presyon ang nagtatakda ng lineweight

Kung saan naka-on ang panulat para sa mga app (Settings › Global › Input devices › Pen), ang stroke na iginuhit gamit ang panulat ay nagdadala ng bawat puntong ibinigay ng panulat at ng presyon nito. Ang magaang stroke ay gumagawa ng manipis na object at ang matigas ay makapal: ang average na presyon ng stroke ay pumipili ng 0.18, 0.25, 0.35 o 0.50 mm, at sinasabi ng command line kung alin. Ang mga stroke na iginuhit gamit ang mouse o daliri ay kumukuha ng kasalukuyang lineweight gaya ng dati. Pinapatay ito ng {{cmd:PENPRESSURE}} (o muling pinapaandar); naka-save ang pinili sa browser na ito.
