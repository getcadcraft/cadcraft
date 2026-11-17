---
title: Ang Properties panel
summary: Tingnan at baguhin ang lahat tungkol sa mga napiling object, marami nang sabay: coordinates kasama ang Z, mga sukat, teksto, dimension settings, transparency, at iba pa. Tumatanggap ang mga field ng expression at haba na may units.
keywords: kabuuan, kabuuang haba, kabuuang lawak, sum, haba ng selection, properties, properties palette, ctrl+1, pr, ch, mo, ddmodify, varies, quick select, pickadd, coordinates, z, elevation, thickness, transparency, materyal, hyperlink, expression, quickcalc, vertex, dimension style, tolerance, decimals
from: 10d6a829
---

## Ano ang matututunan mo

Paano buksan ang Properties panel, baguhin ang isang object o isandaan sa iisang hakbang, i-type ang eksaktong coordinates (kasama ang Z), gamitin ang expressions at units sa anumang number field, at kung ano ang ipinapakita ng bawat uri ng object.

## Buksan ito

Nasa kanan ang panel. Para ilabas ito sa harapan:

- Pindutin ang {{key:Mod+1}}, o i-type ang {{cmd:PROPERTIES}} (o `PR`, `CH`, `MO`).
- I-double-click ang object (ang teksto at multileader ay nagbubukas ng sarili nilang text editor).

Movable panel ang panel tulad ng iba: i-drag ang grip nito para i-dock sa kaliwa, kanan, o ibaba, o ihulog sa ibabaw ng drawing para lumutang (tingnan ang [Ayusin ang mga panel at gumamit ng pangalawang monitor](common:arrange-panels)).

### Itupi ito

Ang pin button sa kanang itaas ng panel ay nag-o-on ng **auto-hide**: ang panel ay tumutupi sa isang strip sa kanang gilid at nagbibigay ng espasyo sa drawing. Itutok ang pointer sa strip (o pindutin ang {{key:Mod+1}}) at bubukas ito sa ibabaw ng drawing; kapag lumayo ka, tutupi itong muli. I-click muli ang pin para manatiling bukas. Itinutupi rin ito ng {{cmd:PROPERTIESCLOSE}}.

## Mga seksyon

Nakagrupo ang mga property sa mga seksyong maaaring itupi: **Pangkalahatan**, **Geometry**, **Teksto**, **Mga linya at arrow**, **Fit**, **Pangunahing unit**, **Alternatibong unit**, **Tolerances**, **Pattern**, **Misc**, at para sa mga block ang **Attributes** at **Library item**. I-click ang pangalan ng seksyon para itupi o buksan ito; naaalala ng CadCraft kung alin ang itinupi mo.

I-drag ang manipis na linya sa pagitan ng mga pangalan at ng mga value para gawing mas malapad o mas makitid ang mga pangalan. I-double-click ito para bumalik sa dati. Gamit ang keyboard, i-focus ito at gamitin ang arrow keys.

## Baguhin ang value

1. I-click ang isang linya. Nakasulat sa heading ang "Line".
2. I-click sa {{ui:Haba}}. Habang nag-e-edit, ipinapakita ng field ang buong value, hindi ang nakabilog.
3. I-type ang `2500` at pindutin ang {{key:Enter}}. Ang linya ay 2500 na ang haba, pinananatili ang start point at anggulo nito.

Ina-apply ng {{key:Enter}} o pag-click sa ibang lugar ang value; ibinabalik ng {{key:Esc}} ang lumang value. Bawat pagbabago ay isang undo step.

### Expressions at units

Mas maraming bagay ang tinatanggap ng bawat number field kaysa sa simpleng numero:

| Ang i-type mo | Ang makukuha mo |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (pulgada, sa drawing na nasa paa at pulgada) |
| `900mm`, `3.5m`, `2ft` | Kino-convert sa units ng drawing |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (angle fields) |
| `0.5r`, `100g` | Radians at grads, bilang degrees |

Ang haba na may unit ay nangangailangan na may units ang drawing: itakda muna ang {{ui:Mga unit}} sa ilalim ng {{ui:Mga bagong object}} (walang napili). Ang maling entry ay tinatanggihan na may tala sa ilalim ng panel at walang nagbabago; hindi ito kailanman sine-save bilang 0. Mga function: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; ang mga anggulo ay nasa degrees.

## Baguhin ang maraming object nang sabay

1. Pumili ng ilang object, halimbawa 8 linya at 4 na dimension.
2. Nakasulat sa heading ang "12 objects", at may listahan sa itaas na nag-aalok ng **All (12)**, **Line (8)** at **Dimension (4)**.
3. Ang **All** ay nagpapakita ng mayroon ang bawat object (layer, kulay, linetype…). Piliin ang **Dimension (4)** para makita ang dimension settings.
4. Baguhin ang value, halimbawa ang {{ui:Decimals}} sa `1`.

Nagbabago ang lahat ng apat na dimension, sa isang undo step. Ang field na nagsasabing **Iba-iba** ay nangangahulugang magkakaiba ang mga object; ang pag-type ng value ay itinatakda ito sa lahat. Ang mga object sa naka-lock na layer ay hindi ginagalaw, at sinasabi ng tala kung ilan.

## Kabuuan ng isang selection

Kapag may ilang object na napili, sinasabi ng seksyong {{ui:Kabuuan}} sa itaas:

- **Objects**: ilan bawat uri, halimbawa "8 linya, 2 polyline, 1 bilog".
- **Total length**: ang mga linya, arko, at polyline na pinagsama (kasama rin ang splines), at kung ilang object iyon.
- **Total area**: ang mga sarado na pinagsama: bilog, buong ellipse, saradong polyline, at hatch (ibinabawas ang mga butas ng hatch).

Nasa haba format ng drawing ang mga iyon (paa at pulgada kapag iyon ang gamit nito; ang lawak ay nasa square inches at square feet noon).

Ang status bar ay nagpapakita ng parehong haba at lawak tuwing may napiling object; ang {{ui:Mga setting}} › {{ui:CadCraft}} › {{ui:Haba at lawak ng selection}} › {{ui:Nakatago}} ang nag-o-off nito. Para sa isang object, ipinapakita ng {{ui:Geometry}} ang sarili nitong haba at lawak, gaya ng dati.

## Coordinates

Ipinapakita ng bawat point ang **X**, **Y** at **Z**: start at end ng linya, center, insertion point, posisyon ng teksto, ang kasalukuyang polyline vertex. Ipinapakita rin ng mga linya ang **Delta X**, **Delta Y** at **Delta Z** (read-only). Ang polyline at hatch ay may **Elevation** (isang Z para sa buong object).

Ang crosshair button sa tabi ng pangalan ng point ay nagbibigay-daan na piliin ito sa drawing: i-click ito, saka i-click ang bagong posisyon (gumagana ang snaps). Ang mga value ay world coordinates.

## Pangkalahatan

| Field | Ano ito |
|---|---|
| {{ui:Layer}}, {{ui:Kulay}}, {{ui:Linetype}}, {{ui:Linetype scale}}, {{ui:Lineweight}} | Gaya ng nasa layers panel; ang {{ui:Ayon sa layer}} ay sumusunod sa layer |
| {{ui:Transparency}} | Ayon sa layer, ayon sa block, o 0 hanggang 90% |
| {{ui:Thickness}} | Gaano kalayo ang inaabot ng mga linya, bilog, arko, polyline, point, at teksto sa Z |
| {{ui:Materyal}} | Ayon sa layer, ayon sa block, Global, o pangalan na dinala ng drawing |
| {{ui:Plot style}} | Read-only: nagpa-plot ang drawing ayon sa kulay, sa pamamagitan ng [plot style table](topic:plot-pdf#plot-style-tables) ng sheet |
| {{ui:Hyperlink}} | Web address na kasama ng object |

## Ano ang ipinapakita ng bawat uri

| Napili | Mababago mo |
|---|---|
| Line | Start at end X, Y, Z; haba; anggulo |
| Circle | Center; radius; diameter; circumference; area (bawat isa ay nagtatakda ng radius) |
| Arc | Center; radius; start at end angle; total angle; chord (ipinapakita ang haba ng arc at lawak) |
| Ellipse | Center; major at minor radius; radius ratio; anggulo ng major axis; start at end angle |
| Polyline | Ang vertex browser (sa ibaba); global width; elevation; closed; lawak kapag sarado (ina-scale ito palibot sa center nito) |
| Text | Nilalaman; style; justify; taas; rotation; width factor; oblique angle; defined width; line spacing; annotative; posisyon |
| Block reference | Insertion point; rotation; scale X, Y, Z at uniform scale; attribute values |
| Hatch | Pattern; scale; anggulo; origin; associative; island detection; background color; elevation |
| Dimension | Tingnan sa ibaba |
| Multileader | Teksto; taas; lapad; text side; laki ng arrowhead; landing distance; arrowhead point |
| Viewport | Scale; center at laki sa sheet; view center sa model; on; display locked |

### Mga polyline vertex

Ang {{ui:Kasalukuyang vertex}} ang nagpapakita kung aling vertex ang kinabibilangan ng mga field sa ibaba nito. Gamitin ang mga arrow button, o i-type ang numero, para lumipat sa ibang vertex; walang limitasyon kung ilan. Bawat vertex ay may X, Y, lapad ng start at end segment, at ang bulge ng segment na nagsisimula roon (0 = tuwid).

## Mga dimension

Ipinapakita ng dimension ang **Dimension style** nito, kung ano ang sinusukat nito, ang mga point nito, at bawat setting:

- **Mga linya at arrow:** arrowhead para sa bawat dulo, laki ng arrow, laki ng tick, kulay at lineweight ng dimension at extension lines, pagtatago sa alinmang kalahati o alinmang extension line, offset at haba ng extension line.
- **Teksto:** override (iwanang walang laman para sa sinukat na value; ang `<>` ang kumakatawan dito sa sarili mong teksto), style, kulay, taas, offset, vertical at horizontal na posisyon, laging horizontal, rotation, background fill.
- **Fit:** overall scale, baseline spacing, ano ang gumagalaw kapag kulang ang espasyo, at galaw ng teksto.
- **Pangunahing unit:** format, decimals, round off, prefix, suffix, measurement scale, decimal separator, pagtatago ng nangunguna at sumusunod na zero; para sa anggulo, ang angle format at decimals.
- **Alternatibong unit:** on o off, format, decimals, multiplier (25.4 ang nagpapalit ng pulgada sa milimetro), round off, prefix at suffix.
- **Tolerances:** wala, symmetrical, deviation, limits o basic, kasama ang upper at lower values, decimals, taas at posisyon.

Ang pagbabago sa alinman sa mga ito sa isang nabuksang dimension ay nagtatanggal ng drawing na ginawa ng ibang program para dito, at ginuguhit itong muli ng CadCraft.

:::note
Ang horizontal na posisyon ng teksto (sa tabi ng una o ikalawang extension line) at teksto sa ibaba ng linya ay iginuguhit sa linear at aligned na dimension; sa ibang dimension, pinananatili at sine-save ang mga ito pero hindi pa iginuguhit. Ang mga pagpili sa Fit ay pinananatili at sine-save pero hindi pa iginuguhit: inilalagay ng CadCraft ang teksto ayon sa sarili nitong tuntunin (nasa ibabaw ng linya, sa labas kapag hindi ito kasya).
:::

## Walang napili

Kapag walang napili, ipinapakita ng panel ang:

- **Mga bagong object:** ang layer, kulay, linetype, lineweight, at taas ng teksto na makukuha ng mga bagong object; ang units at format ng haba ng drawing; ang linetype at lineweight ng kasalukuyang layer; mga laki para sa mga bagong dimension. Sa sheet, nauuna ang pangalan, papel, at oryentasyon ng sheet.
- **View:** ang center, taas, at lapad ng nakikita sa screen. Mag-type ng value para ilipat doon ang view.
- **Misc:** naka-on o naka-off ang UCS icon, ang UCS (laging World: wala pang user coordinate system ang CadCraft), at ang annotation scale.

## Ang mga button sa itaas

| Button | Ginagawa |
|---|---|
| Funnel | {{cmd:QSELECT}}: pumili ayon sa uri at property |
| Pointer | {{cmd:SELECT}}: pumili ng object sa command line |
| Plus o 1 | Kung ang click ay nagdaragdag sa selection (plus) o pumapalit dito (1); ang parehong setting ng {{ui:Mga setting}}, {{ui:CadCraft}} |
| Pin | Auto-hide, nasa itaas |

## Mga karaniwang pagkakamali

- **Walang nangyari sa pag-type sa field.** Pindutin ang {{key:Enter}} o i-click sa ibang lugar para ma-apply. Ang pulang field at tala ay nangangahulugang tinanggihan ang entry.
- **Tinanggihan ang haba na may unit.** Walang units ang drawing. Itakda ang {{ui:Mga unit}} nang walang napili.
- **Tanging Layer at Kulay ang lumalabas.** Maraming uri ng object ang napili at **All** ang napili. Pumili ng isang uri sa listahan sa itaas.
- **Hindi nagbago ang ilang object.** Nasa naka-lock na layer sila. I-unlock ang layer sa layers panel.
- **Napunta sa field ang mga tinype na letra.** Habang nasa field ang cursor, doon napupunta ang mga key. Pindutin ang {{key:Enter}} o {{key:Esc}}, saka i-type ang command.
