---
title: Ilipat ang mga sketch papunta at mula sa ibang part modeler
summary: Sumulat ng macro na muling bumubuo ng iyong drawing bilang isang constrained sketch sa part modeler, at magbukas ng sketch na na-export mula roon.
keywords: sketch, macro, swb, vba, export, part modeler, global variables, equations, relations, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
Hindi available ang SolidWorks kung saan ginagawa ang CadCraft, kaya hindi pa nasusubukan ang alinmang direksyon sa SolidWorks. Istruktura lamang ang sinusuri sa isinusulat ng CadCraft. Suriin ang resulta bago ito gamitin.
:::

## Magpadala ng drawing bilang sketch

1. I-constrain at lagyan ng dimension ang drawing (tingnan ang [I-constrain ang drawing](topic:constraints)).
2. Sa grupong {{ui:Parametric}}, buksan ang {{ui:Higit pa}} at piliin ang {{ui:Macro para sa SolidWorks (.swb)}}, o i-type ang {{cmd:SWBOUT}}.

   Bumababa ang isang file na ipinangalan sa drawing, na nagtatapos sa `.swb`.
3. Sa SolidWorks, piliin ang **Tools > Macro > Run** at piliin ang file na iyon.

Gumagawa ang macro ng bagong part mula sa iyong default na part template, nagbubukas ng sketch sa Front Plane, at iginuguhit dito ang mga linya, bilog, arko, punto at polyline ng model, kasama ang:

- ang iyong mga constraint bilang sketch relations,
- ang iyong mga dimensional constraint bilang dimension na may parehong pangalan (`d1@Sketch1`),
- ang iyong sariling parameter bilang global variables,
- bawat expression bilang equation.

Ginagamit ng part ang length unit ng drawing. Ang text, block, hatch, dimension at sheet ay hindi bahagi ng sketch; nakalista sa history ang naiwan. Ang mga expression na walang equation form doon (`if`, `min`, `max`, `round`, `%` at ilan pa) ay isinusulat bilang kasalukuyang value nito, at sinasabi ng history kung alin. Anumang hindi magawa ng macro ay isinusulat sa log file sa tabi ng macro, at may mensaheng bubuod sa dulo.

## Magbukas ng sketch mula sa part

1. Sa SolidWorks, patakbuhin ang CadCraft export macro (i-download ito sa PartCraft app: File > Export > Export macro para maibalik ang mga part) sa part. Nagsusulat ito ng `.json` file sa `cadcraft-sw-export` format sa tabi ng part.
2. Sa CadCraft, piliin ang {{ui:Buksan}} at piliin ang `.json` file na iyon.
3. Kapag maraming sketch ang part, pumili ng isa.

Nagiging drawing ang sketch, sa millimetro: ang mga linya, arko, bilog at punto nito, ang mga relation nito bilang constraint, ang mga dimension nito bilang dimensional constraint na pinangalanan gaya ng dati (`D1`, `D2` …), ang mga global variable nito bilang parameter, at ang mga equation sa mga dimension nito bilang expression. Nakalista sa history ang hindi naisama, gaya ng mga relation na walang katumbas sa CadCraft. Hindi nananatili kung nasaan ang sketch sa part: iginuguhit ito nang patag, gaya ng nakikita sa eroplano nito.
