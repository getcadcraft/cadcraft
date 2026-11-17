---
title: I-dimension ang plano
summary: Magdagdag ng linear, aligned, angular, radius at diameter na dimension, ikadena ang mga ito gamit ang Continue at Baseline, at i-override ang text.
keywords: dimension, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, chain, string, annotate, dimension tool, nasaan, hanapin, toolbar, sukatin, mm, cm, m, km, units
from: 9ee65123
---

## Ano ang gagawin mo

Isang dimensioned na kuwarto: kabuuang lapad at taas, isang string ng dimension sa isang pader, isang pader na may anggulo, isang kurbadong sulok at isang anggulo.

Bago ka magsimula, basahin ang [Itakda ang laki ng dimension](topic:dimension-settings) kung malaki ang drawing mo: ang text ng dimension ay 2.5 drawing unit ang taas bilang default, na napakaliit sa drawing na nasa millimeter. Para sa mga hakbang sa ibaba, i-type muna ang `DIMSCALE`, pindutin ang {{key:Enter}}, i-type ang `50` at pindutin ang {{key:Enter}}.

## Nasaan ang mga dimension tool

Sa menu style ng CadCraft (ang sinisimulan ng CadCraft), nasa toolbar sa itaas ng drawing ang mga dimension tool, sa grupong {{ui:Annotate}}: {{ui:Linear}}, {{ui:Aligned}}, {{ui:Angle}}, {{ui:Radius}} at {{ui:Diameter}}. Ang menu na {{ui:More}} ng grupo ay may {{ui:Continue dimension}} at {{ui:Baseline dimension}}. Ituro ang pointer sa isang button para makita kung ano ang ginagawa nito.

- Sa menu style na {{ui:Drafting classic}} o {{ui:Ribbon}}, buksan ang tab na {{ui:Annotate}}: nasa panel nitong {{ui:Dimensions}} ang mga tool. Mayroon ding {{ui:Linear}} ang {{ui:Drafting classic}} sa tab na {{ui:Home}}, sa ilalim ng {{ui:Annotation}}. Tingnan ang [Menu, keys at mouse](topic:menus-keys-and-mouse).
- O i-type ang command sa command line sa ilalim ng drawing at pindutin ang {{key:Enter}}: `DLI` (linear), `DAL` (aligned), `DAN` (angular), `DRA` (radius), `DDI` (diameter), `DCO` (continue), `DBA` (baseline).
- Sa makitid na screen, isang row lang ang toolbar: i-swipe ito sa gilid para maabot ang {{ui:Annotate}}.

Para ipakita ang haba sa millimeter, centimeter, metro o kilometro, tingnan ang [Mga dimension sa mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Gumuhit ng bagay na idi-dimension

1. I-type ang `PL` at pindutin ang {{key:Enter}}.
2. I-type ang `0,0` at pindutin ang {{key:Enter}}.
3. I-type ang `@6000,0` at pindutin ang {{key:Enter}}.
4. I-type ang `@1500<60` at pindutin ang {{key:Enter}}.
5. I-type ang `@0,2700` at pindutin ang {{key:Enter}}.
6. I-type ang `@-6750,0` at pindutin ang {{key:Enter}}.
7. I-type ang `C` at pindutin ang {{key:Enter}}. Magsasara ang outline.
8. I-type ang `C` at pindutin ang {{key:Enter}} para magsimula ng bilog.
9. Mag-click sa loob ng kuwarto, malayo sa mga pader, para sa center.
10. I-type ang `600` at pindutin ang {{key:Enter}}. Ito ay isang column.
11. I-click ang {{ui:Extents}}.

## Linear: pahalang o patayo

1. I-type ang `DLI` at pindutin ang {{key:Enter}}.
2. Sa `Specify first extension line origin`, i-snap sa ibabang kaliwang sulok (Endpoint) at mag-click.
3. Sa `Specify second extension line origin`, i-snap sa ibabang kanang sulok at mag-click.
4. Igalaw ang crosshair sa ibaba ng kuwarto. Susunod ang dimension, pahalang.
5. Mag-click para ilagay ang dimension line.

Sinasabi ng history na `Dimension text = 6000`.

Kung saan mo ilalagay ang linya ang nagpapasya ng direksyon: sa ibaba o sa itaas ay nagbibigay ng pahalang na dimension, sa kaliwa o kanan ay patayo. Para pilitin ito, i-type ang `H` (horizontal), `V` (vertical) o `R` (rotated, tapos isang anggulo) bago mo ilagay.

:::tip
Pindutin ang {{key:Enter}} sa unang prompt sa halip na pumili ng punto, tapos mag-click sa linya, arko, bilog o segment ng polyline. Kukunin ng CadCraft ang parehong dulo para sa iyo.
:::

## Continue: string ng dimension

{{cmd:DIMCONTINUE}} ({{ui:Annotate}} › {{ui:More}} › {{ui:Continue dimension}}, o `DCO`) ay nagpapatuloy mula sa huling linear o aligned na dimension na nagawa mo, at ang bawat bagong dimension ay nagsisimula kung saan natapos ang huli.

1. I-type ang `DLI` at pindutin ang {{key:Enter}}.
2. I-type ang `0,0` at pindutin ang {{key:Enter}} para sa unang origin.
3. I-type ang `2000,0` at pindutin ang {{key:Enter}} para sa ikalawang origin.
4. Mag-click sa ibaba ng kuwarto para ilagay ito.
5. I-type ang `DCO` at pindutin ang {{key:Enter}}.
6. I-type ang `4500,0` at pindutin ang {{key:Enter}}. Susunod ang ikalawang dimension sa una, sa parehong linya.
7. I-snap sa ibabang kanang sulok at mag-click. Kukumpleto ng ikatlo ang string.
8. Pindutin ang {{key:Enter}} para tapusin ang command.

:::note
Dito, sadyang tinype ang mga punto bilang absolute coordinate. Binibilang ng `@` na punto mula sa huling punto na ibinigay mo, at ang huling punto ay kung saan mo inilagay ang nakaraang dimension line, hindi ang dulo ng dimension. Mas ligtas sa dimension string ang mga absolute na punto, snap, o bare na distansya na may {{ui:Ortho}} na naka-on.
:::

I-type ang `U` at pindutin ang {{key:Enter}} para bawiin ang huling dimension sa string nang hindi umaalis sa command.

## Baseline: mga dimension na nakasalansan mula sa isang linya

{{cmd:DIMBASELINE}} ({{ui:Annotate}} › {{ui:More}} › {{ui:Baseline dimension}}, o `DBA`) ay sinusukat ang bawat bagong dimension mula sa unang origin ng huli, at isinasalansan ang bawat isa nang isang hakbang pa palabas.

1. I-type ang `DLI` at pindutin ang {{key:Enter}}.
2. I-snap sa ibabang kaliwang sulok at mag-click.
3. I-snap sa itaas na kaliwang sulok at mag-click.
4. Igalaw ang crosshair sa kaliwa ng kuwarto at mag-click. May lalabas na patayong dimension.
5. I-type ang `DBA` at pindutin ang {{key:Enter}}.
6. I-snap sa itaas na dulo ng 60-degree na pader (Endpoint) at mag-click. May lalabas na ikalawang patayong dimension, isang hakbang pa palabas sa una.
7. Pindutin ang {{key:Enter}} para tapusin.

## Aligned: totoong haba ng nakahilig na linya

1. I-type ang `DAL` at pindutin ang {{key:Enter}}.
2. Pindutin ang {{key:Enter}} para pumili ng bagay.
3. Mag-click sa 60-degree na pader.
4. Gumalaw palabas at mag-click para ilagay.

Ang text ay magbabasang 1500: ang totoong haba, sinukat sa kahabaan ng pader.

## Radius at diameter

1. I-type ang `DRA` at pindutin ang {{key:Enter}}.
2. Mag-click sa bilog ng column.
3. Igalaw ang crosshair. Ang leader ay tumuturo mula sa center papunta sa crosshair.
4. Mag-click para ilagay ang text.

Ang text ay magbabasang `R600`. Ginagawa ng {{cmd:DIMDIAMETER}} (`DDI`) ang parehong bagay gamit ang simbolong ⌀ at ang diameter.

## Angular

Iisang polyline ang mga pader dito, kaya sukatin ang sulok sa pamamagitan ng vertex nito. (Sa pagitan ng dalawang magkahiwalay na linya, puwede mo na lang i-click ang mga linya.)

1. I-type ang `DAN` at pindutin ang {{key:Enter}}.
2. Sa `Select arc, circle or line, or Enter for a vertex`, pindutin ang {{key:Enter}}.
3. Sa `Specify angle vertex`, i-snap sa ibabang kanang sulok at mag-click.
4. Sa `Specify first angle endpoint`, i-snap sa ibabang kaliwang sulok at mag-click.
5. Sa `Specify second angle endpoint`, i-snap sa itaas na dulo ng 60-degree na pader at mag-click.
6. Igalaw ang crosshair sa loob ng kuwarto, malapit sa sulok, at mag-click.

Ang text ay magbabasang `120°`, ang panloob na anggulo ng sulok. Kapag inilagay sa kabilang panig ng sulok, ang dimension ay susukat ng anggulo sa panig na iyon sa halip. Mag-click ng arko sa unang prompt para i-dimension ang anggulong sakop nito, o mag-click ng dalawang linya para i-dimension ang anggulo sa pagitan ng mga ito.

## Baguhin ang text

Para magsulat ng sarili mong text, i-type ang `T` at pindutin ang {{key:Enter}} bago ilagay ang dimension, tapos i-type ang text. Sa iyong text, ang `<>` ay kumakatawan sa sinukat na value: ang `<> TYP.` ay magbibigay ng `6000 TYP.`. Pindutin ang {{key:Enter}} sa walang lamang linya para panatilihin ang sinukat na value.

Para baguhin ang umiiral na dimension:

1. I-click ito.
2. Sa kanang panel, mag-type sa {{ui:Text}}. Iwanan itong walang laman para sa sinukat na value.
3. Pindutin ang {{key:Enter}}.

## Sumusunod ang dimension sa geometry

Naaalala ng dimension ang mga punto nito. I-drag ang isa sa mga grip nito, o i-move, i-rotate o i-scale ito kasama ng mga bagay na sinusukat nito, at susukatin ulit ito. Kung iu-stretch mo ang geometry nang hindi ginagalaw ang dimension, hindi ito susunod: pananatilihin nito ang sarili nitong mga punto.

## Mga karaniwang pagkakamali

- **Napakaliit o napakalaki ang text at arrow.** Itakda ang overall scale: tingnan ang [Itakda ang laki ng dimension](topic:dimension-settings).
- **"Pick a point inside the angle you want to measure."** Ang puntong iniclick mo para sa angular na dimension ay nasa isa sa mga binti. Ilipat ito papasok sa anggulo.
- **Nagsimula ang Continue sa maling dimension.** Palagi itong nagpapatuloy mula sa huling linear o aligned na dimension na nagawa sa session na ito. Gawin (o gawin ulit) muna ang dimension na pagpapatuloyan.
- **Lumabas na patayo ang dimension.** Inilagay mo ito sa gilid. I-type ang `H` bago ilagay ito.
- **Feet at inches.** Itakda muna ang length format ng drawing sa {{ui:Architectural}}, o ang {{ui:Format}} ng dimension sa {{ui:Properties}}: tingnan ang [Feet at inches sa dimension](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Hindi nasa unit na gusto mo ang mga numero.** Piliin ang {{ui:Units in the text}}: tingnan ang [Mga dimension sa mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
