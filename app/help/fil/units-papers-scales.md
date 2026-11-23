---
title: Mga unit, laki ng papel at scale
summary: Ano ang ibig sabihin ng mga drawing unit sa CadCraft, ang mga laki ng papel para sa sheet at plot, bawat standard na scale, at kung paano nauugnay ang laki ng teksto at dimension sa plot scale.
keywords: units, millimeters, inches, feet, feet and inches, architectural, engineering, fractional, fractions, lunits, length format, precision, meters, paper size, a3, a1, arch d, ansi, tabloid, letter, scale, 1:100, 1/4 inch, architectural scale, engineering scale, insunits
from: 7dc9b62e
---

## Mga drawing unit

Gumuguhit ka sa buong laki, sa mga drawing unit. Ang ibig sabihin ng isang unit ay nasa setting na **Units** ng drawing:

1. Pindutin ang {{key:Esc}} para walang napili, sa tab na {{ui:Model}}.
2. Sa {{ui:Kasalukuyang setting}}, piliin ang {{ui:Units}}: {{ui:Walang unit}}, {{ui:Milimetro}}, {{ui:Sentimetro}}, {{ui:Metro}}, {{ui:Pulgada}} o {{ui:Talampakan}}.

Puwedeng isulat ng mga dimension ang haba nila sa milimetro, sentimetro, metro o kilometro anuman ang unit ng drawing: tingnan ang [Mga dimension sa mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Ang pagpapalit ng unit ay walang binabago sa laki. Binabago lamang nito kung paano binabasa ang mga scale sa sheet at sa plot, at kung aling mga scale ang iniaalok. Ang drawing na binuksan mula sa DWG o DXF ay nananatili sa mga unit na nakaimbak sa file; ipinapakita ito ng seksyong {{ui:Drawing}} sa kaliwang panel.

Ang drawing na {{ui:Walang unit}} ay tinatrato bilang nasa unit ng papel: milimetro sa ISO na papel, pulgada sa US na papel.

## Feet at inches, at mga fraction

Paano isinusulat at tinatype ang mga haba ay hiwalay na setting, ang length format. Hindi nito binabago ang anumang geometry, tanging kung paano lumalabas ang mga numero at kung ano ang puwede mong i-type.

1. Pindutin ang {{key:Esc}} para walang napili, sa tab na {{ui:Model}}.
2. Sa {{ui:Kasalukuyang setting}}, piliin ang {{ui:Length format}}: {{ui:Decimal}} (`150.5`), {{ui:Architectural}} (`12'-6 1/2"`), {{ui:Engineering}} (`12'-6.5"`), {{ui:Fractional}} (`150 1/2`) o {{ui:Scientific}} (`1.505E+02`).
3. Piliin ang {{ui:Precision}}: mga decimal place, o ang pinakamaliit na fraction (1/16 ang karaniwang pinipili para sa architectural).

O i-type ang {{cmd:UNITS}} (`UN`) at sagutin ang dalawang tanong nito.

Sa {{ui:Architectural}} o {{ui:Engineering}}, ang isang drawing unit ay isang pulgada, gaya ng sa AutoCAD: itakda rin ang {{ui:Units}} sa {{ui:Inches}}. Maaari mo nang i-type ang haba sa feet at inches saanman hinihingi ang haba, at sa mga kahon ng {{ui:Properties}}:

| Ang tina-type mo | Ibig sabihin |
|---|---|
| `12'6"` o `12'-6"` | 12 feet 6 inches (150) |
| `12'6-1/2"` | 12 feet 6½ inches. Gumamit ng gitling bago ang fraction: ang {{key:Space}} ay {{key:Enter}} sa command line. |
| `12'` | 12 feet |
| `6"` o `6` | 6 inches: ang simpleng numero ay pulgada |
| `1/2`, `6-1/2` | gumagana ang fraction sa anumang format |

Ang mga punto ay tumatanggap ng parehong haba: `@12'6",0` o `@10'<90`. Nananatili sa degree ang mga anggulo.

Ipinapakita ng format ang sarili nito sa history ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: ang mga lawak ay nasa square inches at square feet), sa {{ui:Properties}}, sa mga coordinate sa status bar, at sa **mga bagong dimension**. Pinapanatili ng mga sheet ang unit ng papel nila (milimetro o pulgada) bilang decimal.

:::note
Naka-save sa mga DWG at DXF file ang length format, at may sariling format ang bawat dimension: bumubukas muli ang na-save na drawing gaya ng iniwan mo ito.
:::

## Mga laki ng papel

Ginagamit ng mga sheet at model plot ang mga laking ito, sa alinmang oryentasyon:

| Papel | Laki | Unit sa sheet |
|---|---|---|
| ISO A4 | 297 × 210 mm | milimetro |
| ISO A3 | 420 × 297 mm | milimetro |
| ISO A2 | 594 × 420 mm | milimetro |
| ISO A1 | 841 × 594 mm | milimetro |
| ISO A0 | 1189 × 841 mm | milimetro |
| Letter | 11 × 8.5 in | pulgada |
| Legal | 14 × 8.5 in | pulgada |
| Tabloid / ANSI B | 17 × 11 in | pulgada |
| ANSI C | 22 × 17 in | pulgada |
| ANSI D | 34 × 22 in | pulgada |
| ARCH C | 24 × 18 in | pulgada |
| ARCH D | 36 × 24 in | pulgada |
| ARCH E | 48 × 36 in | pulgada |

Nagsisimula ang mga bagong sheet sa ISO A3 para sa metric at walang-unit na drawing, at sa Tabloid para sa mga drawing sa pulgada o feet. Nagsisimula ang mga model plot sa ISO A4 o Letter sa parehong paraan, at pagkatapos ay naaalala ang huli mong pinili. Ang mga sheet mula sa binuksang file ay pinapanatili ang sarili nilang laki, na ipinapakita bilang "Custom" kapag hindi ito isa sa mga ito.

## Mga scale

Ang scale na `1:n` ay nangangahulugang ang isang unit sa papel ay nagpapakita ng n na kaparehong unit sa model, kaya ang 1:100 ay nagpapakita ng 1 m ng gusali bilang 10 mm sa papel. Kinakalkula ito ng CadCraft mula sa mga unit ng drawing at sa unit ng papel.

**Metric na scale**, iniaalok sa bawat drawing: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Architectural na scale**, iniaalok kapag pulgada o feet ang mga unit: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Engineering na scale**, iniaalok kapag pulgada o feet ang mga unit: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Sarili mong mga scale.** I-type ang `SCALELISTEDIT` (o `SCALELIST`) para magdagdag ng sarili mong scale, gaya ng 1:75 o site scale na 2 papel : 300 drawing. Hihingi ng pangalan ang `Add`, pagkatapos ang unit ng papel at ang unit ng drawing (ang pangalang tulad ng `1:75` ay nag-aalok ng sarili nitong numero; pindutin ang {{key:Enter}} para kunin ang mga ito). Gumagana sa parehong listahan ang `Edit`, `Delete`, `List` at `Reset`; ibinabalik ng `Reset` ang standard na listahan. Lumalabas ang mga scale mo pagkatapos ng mga standard sa listahan ng viewport scale sa Properties at sa dialog na {{ui:I-plot sa PDF}}; ang viewport sa scale na iyon ay binabasa ayon sa pangalan nito, at naka-save ang mga ito sa drawing (DWG at DXF 2000) bilang listahan ng scale ng drawing. Ang drawing na galing sa ibang program ay dinadala ang listahan nito; ang mga scale na tumutugma sa standard ay hindi ipinapakita nang dalawang beses.

Kapag itinutok ang viewport gamit ang {{ui:Ipakita ang buong model}} o {{ui:Pumili ng window sa model…}}, pinipili ng CadCraft ang pinakamalaking standard na scale na kasya. Ang {{ui:I-fit ang buong model}} ay nagtatakda ng eksaktong scale, na lumalabas bilang simpleng ratio.

## Laki sa papel at sa model

Ang laki ng teksto at dimension ay nasa mga unit ng espasyong pinagguguhitan mo.

| Gusto mo sa papel | Iginuhit sa sheet | Iginuhit sa model sa 1:50 (drawing sa mm) | Iginuhit sa model sa 1/4" = 1'-0" (drawing sa pulgada) |
|---|---|---|---|
| 2.5 mm na teksto | 2.5 | 125 | — |
| 3/32" na teksto | 0.09375 | — | 4.5 |

Para sa mga dimension, panatilihin ang mga laki bilang laki sa papel at itakda ang overall scale ({{cmd:DIMSCALE}}) sa plot scale: 50 para sa 1:50, 48 para sa 1/4" = 1'-0". Tingnan ang [Itakda ang laki ng dimension](topic:dimension-settings).

## Mag-annotate ayon sa scale

Iguhit ang model sa buong laki at hayaan ang CadCraft na gawin ang mga kalkulasyon sa itaas para sa iyo.

1. Piliin ang teksto o mga dimension na dapat manatili ang laki nila sa papel. Sa Properties, lagyan ng tsek ang {{ui:Annotative}}. Pagkatapos, ang {{ui:Size on paper}} ay magbabasa, halimbawa, `2.5 mm at 1:50`.
2. I-type ang {{cmd:ANNOSCALE}} at ang scale na ipi-print ang drawing, gaya ng `1:100`.

Bawat annotative na teksto at dimension ay ina-resize para mag-print sa parehong laki sa bagong scale: ang 2.5 mm na teksto ay 125 ang taas sa drawing sa milimetro sa 1:50 at 250 ang taas sa 1:100. Nagbabago kasabay nito ang lapad ng talata; ang teksto, arrow at gap ng dimension ay sabay na nagbabago (ang overall scale nito). Iisang hakbang ito ng undo, at hindi kailanman ginagalaw ang mga object na hindi annotative.

Naka-save ang setting sa DWG at DXF: binabasa ng ibang program ang annotative flag, at pinananatili rin ng CadCraft ang scale na sinukatan ng bawat object.

Kung nagtatakda ang opisina mo ng taas sa papel sa add-on na Default Policies (Settings › Global › Default Policies › Annotation sizes on paper), itinatakda rin ng {{cmd:ANNOSCALE}} ang taas kung saan nagsisimula ang bagong teksto sa taas na itinakda ng opisina para sa mga tala sa scale na iyon. Tingnan ang [Default Policies](topic:default-policies).

### Isang object sa maraming scale

Madalas magpakita ang sheet ng parehong plano sa 1:100 at isang bahagi nito sa 1:50. Bigyan ng parehong scale ang mga tala at dimension, at ipinapakita ng bawat viewport ang mga ito sa laki ng papel nila:

1. Piliin ang annotative na teksto at mga dimension at i-type ang `OBJECTSCALE`.
2. Piliin ang `Add` at i-type ang scale, halimbawa `1:50`. (Idinaragdag ng `Current scale` ang annotation scale ng drawing; ipinapakita ng `List` ang scale ng bawat object; inaalis ng `Delete` ang isa.)

Ang viewport na ang scale ay nasa listahan ng isang object ay ipinapakita ito sa laki para sa scale na iyon: ang 2.5 mm na teksto ay iginuguhit na 250 ang taas sa viewport na 1:100 at 125 ang taas sa 1:50, sa screen at sa plot. Nananatili ang object sa puwesto nito; iba lamang ang laki. Sa viewport na nasa scale na wala sa listahan ng object, ipinapakita ito sa laki na mayroon ito, hanggang i-type mo ang `ANNOALLVISIBLE` at piliin ang `OFF`: pagkatapos ay hindi na ito ipinapakita roon. Binabago lamang ng {{cmd:ANNOSCALE}} ang laki ng mga object na nakalista ang bagong scale, at iniiwan ang iba gaya ng mga ito.

Naka-save ang mga listahan sa DWG at DXF bilang sariling datos ng CadCraft. Nakikita ng ibang program ang bawat object bilang annotative, sa iisang scale na sinukatan dito. Hindi naka-save sa file ang switch na ANNOALLVISIBLE.

## Lineweight at linetype

Ang layer o object ay maaaring magkaroon ng **lineweight** (0.05 hanggang 2.11 mm) at **linetype** (dashed, hidden, center, phantom, dot…). Itakda ang mga ito sa kanang panel: kapag walang napili, ang {{ui:Linetype}} at {{ui:Lineweight}} sa ilalim ng {{ui:Kasalukuyang setting}} ang ibinibigay sa mga bagong object ({{ui:By layer}} para sundin ang layer nila), at ang dalawa sa ilalim ng {{ui:Layer …}} ay para sa sariling layer ng kasalukuyan. Kapag may napiling object, binabago ng parehong dalawang row at ng {{ui:Linetype scale}} ang mga object na iyon. Ang mga command ay {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) at {{cmd:LTSCALE}} (`LTS`).

Nakikita ang mga linetype sa screen at sa mga plot. Nasa unit ng drawing ang mga dash nila: ang metric na drawing ay gumagamit ng mga sukat ng ISO (DASHED: 12.7 mm na dash), ang drawing sa pulgada ay gumagamit ng mga sukat sa pulgada (0.5"). Kung sobrang liit o sobrang laki ang tingin ng mga dash, baguhin ang {{ui:Linetype scale}} (LTSCALE) ng drawing: pinaparami nito ang bawat dash at puwang; pinaparami ulit ng sariling scale ng object ang halagang iyon. Ang pattern na sobrang pino para makita ay iginuguhit bilang solidong linya.

Nagpi-print ang mga lineweight sa mga plot, sa mm sa papel anuman ang scale. Ang mga linyang may lineweight na {{ui:Default}} ay gumagamit ng lapad ng panulat na pinili sa dialog na {{ui:I-plot sa PDF}} (0.13 hanggang 0.70 mm; 0.25 mm sa simula); ang lineweight na 0 ay nagpi-print bilang pinakamanipis na linya. Sa screen, isang pixel ang bawat linya hanggang pindutin mo ang {{ui:LWT}} sa status bar (o i-type ang {{cmd:LWDISPLAY}}): pagkatapos, ang lineweight na higit sa 0.25 mm ay gumuguhit nang mas malapad (0.5 mm = 2 pixel) sa model, at sa tunay nitong lapad sa papel sa isang sheet. Naka-save sa browser na ito ang pinili.

## Ang pamantayan ng opisina

Maaaring itago ng isang opisina ang taas ng teksto sa papel, mga layer, field ng title block at mga template sa iisang rekord, ang pamantayan ng opisina. Binabasa ito ng CadCraft ayon sa ganitong pagkakasunod: ang sariling rekord ng drawing (itinakda gamit ang {{cmd:OFFICESTANDARD}} › `Import`, nakaimbak sa file), ang shared na pamantayan ng team mo, at pagkatapos ang iyong Default Policies. Kinukuha ng annotative na teksto at dimension ang taas nila sa papel mula rito sa annotation scale. Walang binabago ang walang laman na pamantayan. Ang {{cmd:OFFICESTANDARD}} › `Layers` ay nagdadagdag ng mga layer ng opisina na wala sa drawing.
