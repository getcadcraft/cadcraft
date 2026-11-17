---
title: Mga unit, laki ng papel at scale
summary: Ano ang ibig sabihin ng mga drawing unit sa CadCraft, ang mga laki ng papel para sa sheet at plot, bawat standard na scale, at kung paano nauugnay ang laki ng teksto at dimension sa plot scale.
keywords: units, milimetro, pulgada, talampakan, talampakan at pulgada, architectural, engineering, fractional, fractions, lunits, length format, precision, metro, laki ng papel, a3, a1, arch d, ansi, tabloid, letter, scale, 1:100, 1/4 inch, architectural scale, engineering scale, insunits
from: 8346236a
---

## Mga drawing unit

Gumuguhit ka sa buong laki, sa mga drawing unit. Ang katumbas ng isang unit ay nakadepende sa setting na **Units** ng drawing:

1. Pindutin ang {{key:Esc}} para walang napiling anuman, sa {{ui:Model}} tab.
2. Sa {{ui:Kasalukuyang setting}}, piliin ang {{ui:Mga unit}}: {{ui:Walang unit}}, {{ui:Milimetro}}, {{ui:Sentimetro}}, {{ui:Metro}}, {{ui:Pulgada}} o {{ui:Talampakan}}.

Maaaring isulat ng mga dimension ang kanilang haba sa milimetro, sentimetro, metro o kilometro anuman ang drawing unit: tingnan ang [Mga dimension sa mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Walang nire-resize kapag binago ang mga unit. Binabago nito kung paano binabasa ang mga scale sa sheet at sa plot, at kung aling mga scale ang iniaalok. Pinananatili ng drawing na binuksan mula sa DWG o DXF ang mga unit na nakaimbak sa file; ipinapakita ng seksyong {{ui:Drawing}} ng kaliwang panel ang mga ito.

Ang drawing na {{ui:Walang unit}} ay itinuturing na nasa unit ng papel: milimetro sa ISO na papel, pulgada sa US na papel.

## Talampakan at pulgada, at mga fraction

Ang paraan ng **pagsulat at pag-type** ng haba ay hiwalay na setting, ang length format. Hindi nito binabago ang geometry, kundi kung paano lumalabas ang mga numero at kung ano ang maaari mong i-type.

1. Pindutin ang {{key:Esc}} para walang napiling anuman, sa {{ui:Model}} tab.
2. Sa {{ui:Kasalukuyang setting}}, piliin ang {{ui:Length format}}: {{ui:Decimal}} (`150.5`), {{ui:Architectural}} (`12'-6 1/2"`), {{ui:Engineering}} (`12'-6.5"`), {{ui:Fractional}} (`150 1/2`) o {{ui:Scientific}} (`1.505E+02`).
3. Piliin ang {{ui:Precision}}: mga decimal place, o ang pinakamaliit na fraction (1/16 ang karaniwang pinipili para sa architectural).

O i-type ang {{cmd:UNITS}} (`UN`) at sagutin ang dalawa nitong tanong.

Kapag {{ui:Architectural}} o {{ui:Engineering}}, ang isang drawing unit ay isang pulgada, gaya sa AutoCAD: itakda rin ang {{ui:Mga unit}} sa {{ui:Pulgada}}. Maaari ka nang mag-type ng haba sa talampakan at pulgada saanman hinihingi ang haba, at sa mga kahon ng {{ui:Properties}}:

| Ito-type mo | Ibig sabihin |
|---|---|
| `12'6"` o `12'-6"` | 12 talampakan 6 pulgada (150) |
| `12'6-1/2"` | 12 talampakan 6½ pulgada. Gumamit ng gitling bago ang fraction: ang {{key:Space}} ay {{key:Enter}} sa command line. |
| `12'` | 12 talampakan |
| `6"` o `6` | 6 pulgada: ang simpleng numero ay pulgada |
| `1/2`, `6-1/2` | gumagana ang mga fraction sa anumang format |

Ganoon din ang haba para sa mga punto: `@12'6",0` o `@10'<90`. Nananatili sa degree ang mga anggulo.

Lumalabas ang format sa history ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: ang mga area bilang square inch at square feet), sa {{ui:Properties}}, sa mga coordinate sa status bar, at sa **mga bagong dimension**. Pinananatili ng mga sheet ang kanilang unit ng papel (milimetro o pulgada) bilang decimal.

:::note
Nase-save sa mga file ng DWG at DXF ang length format, at may kanya-kanyang setting ang bawat dimension: bumubukas muli ang na-save na drawing gaya ng iniwan mo ito.
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

Nagsisimula ang mga bagong sheet sa ISO A3 para sa metric at unitless na drawing, at sa Tabloid para sa drawing na nasa pulgada o talampakan. Nagsisimula ang mga model plot sa ISO A4 o Letter sa parehong paraan, pagkatapos naaalala ang huli mong pinili. Pinananatili ng mga sheet mula sa binuksang file ang sarili nilang laki, ipinapakitang "Custom" kapag hindi ito isa sa mga ito.

## Mga scale

Ang scale na `1:n` ay nangangahulugang ang isang unit sa papel ay nagpapakita ng n na kaparehong unit sa model, kaya ang 1:100 ay nagpapakita ng 1 m ng gusali bilang 10 mm ng papel. Kinukuwenta ito ng CadCraft mula sa mga drawing unit at sa unit ng papel.

**Mga metric na scale**, iniaalok para sa bawat drawing: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Mga architectural na scale**, iniaalok kapag ang unit ay pulgada o talampakan: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Mga engineering na scale**, iniaalok kapag ang unit ay pulgada o talampakan: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Sarili mong mga scale.** I-type ang `SCALELISTEDIT` (o `SCALELIST`) para magdagdag ng sarili mong scale, gaya ng 1:75 o site scale na 2 paper : 300 drawing. Humihingi ang `Add` ng pangalan, pagkatapos ng mga unit ng papel at ng drawing (ang pangalang gaya ng `1:75` ay nag-aalok ng sarili nitong mga numero; pindutin ang {{key:Enter}} para tanggapin ang mga iyon). Ang `Edit`, `Delete`, `List` at `Reset` ay gumagana sa parehong listahan; ibinabalik ng `Reset` sa standard na listahan. Lumalabas ang mga scale mo pagkatapos ng mga standard sa listahan ng scale ng viewport sa Properties at sa dialog na {{ui:I-plot sa PDF}}; ang viewport na nasa scale na iyon ay binabasa sa pangalan nito, at nase-save ang mga ito sa drawing (DWG at DXF 2000) bilang listahan ng scale ng drawing. Ang drawing na binuksan mula sa ibang programa ay dala ang listahan nito; ang mga scale na tumutugma sa standard ay hindi ipinapakitang dalawang beses.

Kapag itinutok ang viewport gamit ang {{ui:Ipakita ang buong model}} o {{ui:Pumili ng window sa model…}}, pinipili ng CadCraft ang pinakamalaking standard na scale na kasya. Sa halip, nagtatakda ang {{ui:I-fit ang buong model}} ng eksaktong scale, na mababasa bilang simpleng ratio.

## Mga laki sa papel at sa model

Nasa mga unit ng espasyong pinaguguhitan mo ang laki ng teksto at dimension.

| Gusto mo sa papel | Iginuhit sa sheet | Iginuhit sa model sa 1:50 (drawing na mm) | Iginuhit sa model sa 1/4" = 1'-0" (drawing na pulgada) |
|---|---|---|---|
| Teksto na 2.5 mm | 2.5 | 125 | — |
| Teksto na 3/32" | 0.09375 | — | 4.5 |

Para sa mga dimension, panatilihin ang mga laki bilang laki sa papel at itakda ang pangkalahatang scale ({{cmd:DIMSCALE}}) sa plot scale: 50 para sa 1:50, 48 para sa 1/4" = 1'-0". Tingnan ang [Itakda ang laki ng dimension](topic:dimension-settings).

## Mag-annotate ayon sa scale

Iguhit ang model sa buong laki at hayaang gawin ng CadCraft ang mga kuwentang nasa itaas para sa iyo.

1. Piliin ang teksto o mga dimension na dapat panatilihin ang laki nila sa papel. Sa Properties, lagyan ng check ang {{ui:Annotative}}. Pagkatapos, ang {{ui:Laki sa papel}} ay magbabasa, halimbawa, ng `2.5 mm at 1:50`.
2. I-type ang {{cmd:ANNOSCALE}} at ang scale kung saan iimprenta ang drawing, gaya ng `1:100`.

Bawat annotative na teksto at dimension ay nire-resize para mag-print sa parehong laki sa bagong scale: ang teksto na 2.5 mm ay 125 ang taas sa drawing na milimetro sa 1:50 at 250 ang taas sa 1:100. Nagbabago kasabay nito ang lapad ng talata; ang teksto, arrow at puwang ng dimension ay sabay na nagbabago (ang kabuuang scale nito). Isang undo step ito, at hindi kailanman binabago ang mga object na hindi annotative.

Nase-save ang setting sa DWG at DXF: binabasa ng ibang programa ang annotative flag, at pinananatili rin ng CadCraft ang scale na kinakailangan ng bawat object.

Kung nagtatakda ang iyong opisina ng taas sa papel sa Default Policies add-on (Mga setting › Global › Default Policies › Mga laki ng annotation sa papel), itinatakda rin ng {{cmd:ANNOSCALE}} ang taas na sisimulan ng bagong teksto sa taas ng opisina para sa mga note sa scale na iyon. Tingnan ang [Default Policies](topic:default-policies).

### Isang object sa maraming scale

Kadalasang nagpapakita ang sheet ng parehong plano sa 1:100 at isang bahagi nito sa 1:50. Bigyan ang mga note at dimension ng dalawang scale at ipinapakita ito ng bawat viewport sa laki nila sa papel:

1. Piliin ang annotative na teksto at dimension at i-type ang `OBJECTSCALE`.
2. Piliin ang `Add` at i-type ang scale, halimbawa `1:50`. (Idinadagdag ng `Current scale` ang annotation scale ng drawing; ipinapakita ng `List` kung ano ang pinananatili ng bawat object; inaalis ng `Delete` ang isa.)

Ang viewport na ang scale ay nasa listahan ng object ay ipinapakita ito sa laki para sa scale na iyon: ang teksto na 2.5 mm ay iginuguhit na 250 ang taas sa pamamagitan ng 1:100 na viewport at 125 ang taas sa 1:50, sa screen at sa plot. Nananatili sa lugar nito ang object; ang laki lamang ang nagkakaiba. Sa viewport na nasa scale na wala sa listahan, ipinapakita ang object sa laki na mayroon ito, hanggang i-type mo ang `ANNOALLVISIBLE` at piliin ang `OFF`: pagkatapos, iniiwan ito roon. Nire-resize ng {{cmd:ANNOSCALE}} ang mga object na naglilista ng bagong scale at iniiwan ang iba gaya ng mga ito.

Nase-save ang mga listahan sa DWG at DXF bilang sariling data ng CadCraft. Nakikita ng ibang programa ang bawat object bilang annotative, sa iisang scale na nakalaan dito. Hindi pinapanatili sa file ang ANNOALLVISIBLE switch.

## Lineweight at linetype

Ang layer, o object, ay maaaring magkaroon ng **lineweight** (0.05 hanggang 2.11 mm) at **linetype** (dashed, hidden, center, phantom, dot…). Itakda ang mga ito sa kanang panel: kapag walang napili, ang {{ui:Linetype}} at {{ui:Lineweight}} sa ilalim ng {{ui:Kasalukuyang setting}} ang nakukuha ng mga bagong object ({{ui:Ayon sa layer}} para sundin ang layer nila), at ang dalawa sa ilalim ng {{ui:Layer …}} ay ang sariling setting ng kasalukuyang layer. Kapag may napiling object, binabago ng parehong dalawang hanay at ng {{ui:Linetype scale}} ang mga object na iyon. Ang mga command ay {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) at {{cmd:LTSCALE}} (`LTS`).

Nakikita sa screen at sa mga plot ang mga linetype. Nasa mga drawing unit ang mga gitling nito: ang metric na drawing ay gumagamit ng ISO na laki (DASHED: 12.7 mm na gitling), ang drawing na pulgada ng mga pulgadang laki (0.5"). Kung masyadong maliit o malaki ang mga gitling, baguhin ang {{ui:Linetype scale}} (LTSCALE) ng drawing: pinarami nito ang bawat gitling at puwang; pinaparami muli ito ng sariling scale ng object. Ang pattern na napakapino para makita ay iginuguhit bilang solidong linya.

Naka-print sa mga plot ang lineweight, sa mm sa papel anuman ang scale. Ang mga linyang may {{ui:Default}} na lineweight ay gumagamit ng lapad ng panulat na pinili sa dialog na {{ui:I-plot sa PDF}} (0.13 hanggang 0.70 mm; 0.25 mm sa simula); ang lineweight na 0 ay naka-print bilang pinakamanipis na linya. Sa screen, isang pixel ang lapad ng bawat linya hanggang pindutin mo ang {{ui:LWT}} sa status bar (o i-type ang {{cmd:LWDISPLAY}}): pagkatapos, ang lineweight na higit sa 0.25 mm ay iginuguhit nang mas malapad (0.5 mm = 2 pixel) sa model, at sa totoong lapad nito sa papel sa sheet. Nananatili sa browser na ito ang pagpili.
