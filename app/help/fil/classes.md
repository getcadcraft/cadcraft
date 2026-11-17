---
title: Ayusin ang drawing gamit ang mga class
summary: Inaayos ng class ang mga object sa ikalawang paraan, sa ibabaw ng mga layer (Lighting-Fixtures-Spot): ipakita at itago ang mga ito, bigyan ng kulay, linetype, lineweight, fill at istilo ng teksto na maaaring kunin ng mga object na "ayon sa class", at itakda ang class kung saan mapupunta ang mga bagong object.
keywords: class, classes, CLASSES, CLS, CLASS, ayon sa class, ByClass, aktibong class, gamitin sa paggawa, Wala, design layer, layer scale, elevation, Vectorworks
from: 672de9cb
---

Sinasabi ng mga layer kung *saan* nabibilang ang isang object sa drawing; sinasabi ng mga class kung *ano* ito. Ang wall sa layer `Level 1` ay maaaring nasa class `Walls-Exterior`, at ang spot light sa layer `Ceiling` ay maaaring nasa class `Lighting-Fixtures-Spot`. Maaari mong itago ang bawat ilaw sa bawat layer nang sabay-sabay, o gawing mas makapal sa plot ang bawat exterior wall, nang hindi inililipat ang alinman sa pagitan ng mga layer.

Ang bawat object ay nagsisimula sa class na **Wala**. Ang drawing na walang sarili nitong class ay gumagana nang eksaktong gaya ng dati.

## Buksan ang panel na Classes

I-type ang `CLASSES` (o `CLS`) at pindutin ang {{key:Enter}}, o piliin ang {{ui:Mga Class…}} sa menu na {{ui:Higit pa}} ng pangkat na {{ui:View}}. Bumubukas ang panel sa ibabaw ng drawing at nananatiling bukas habang gumuguhit ka.

- **Magdagdag ng class:** i-type ang pangalan nito sa kahon sa itaas at pindutin ang {{key:Enter}}. Ang `-` ay gumagawa ng antas: ang `Lighting-Fixtures-Spot` ay nasa ilalim ng `Lighting-Fixtures`, na nasa ilalim ng `Lighting`; idinadagdag ang mga nawawalang antas para sa iyo.
- **Ipakita o itago:** ang mata sa tabi ng class. Ang pagtatago ng class ay nagtatago ng bawat class sa ilalim nito, sa screen at sa papel.
- **Aktibong class:** ang bilog na button. Ang mga bagong object na iginuguhit mo ay mapupunta sa aktibong class.
- **Pumili ng class:** i-click ang pangalan nito. Ang mga button at setting sa ibaba ng listahan ay gagana na dito.

Ang numero sa dulo ng bawat hanay ay kung ilang object ang nasa class na iyon (sa model, sa mga sheet at sa loob ng mga block definition).

## Ilagay ang mga object sa class

Piliin ang mga object, pumili ng class sa panel at piliin ang {{ui:Itakda ang class}}. Lagyan muna ng tsek ang {{ui:Ayon sa class}} para makuha nila ang kulay, linetype, lineweight, fill at istilo ng teksto mula sa class. Maaari mo ring:

- i-type ang `CLASS` habang may napiling object at maglagay ng pangalan ng class (ang bagong pangalan ay gagawa ng class);
- i-type ang `CLASS` habang walang napili para itakda ang aktibong class; ang `?` ay naglilista ng mga class kasama ang bilang ng mga ito;
- gamitin ang seksyong {{ui:Class}} ng panel na Properties: ang class, at isang switch na {{ui:… ayon sa class}} para sa kulay, linetype at lineweight (fill para sa mga hatch, istilo ng teksto para sa teksto);
- pumili ayon sa class gamit ang `QSELECT`: piliin ang property na {{ui:Class}}.

Pinipili ng {{ui:Piliin ang mga object nito}} ang bawat object ng napiling class sa bukas na sheet (o sa model).

## Paano gumuguhit ang isang object: object, class, layer

Ang kulay, linetype, lineweight, fill at istilo ng teksto ng isang object ay maaaring **ayon sa class**, gaya ng pagiging ayon sa layer. Tinitingnan ng CadCraft ang sumusunod na pagkakasunod-sunod:

1. Ang sariling value ng object, maliban kung ang value na iyon ay ayon sa class.
2. Ang value ng class, kapag ang object ay kumukuha nito ayon sa class at may value ang class.
3. Ang value ng layer.

Ang class na ang kulay (o linetype …) ay {{ui:Hindi nakatakda}} ay ipinapasa ang object sa layer nito. Pumili ng class at itakda ang {{ui:Kulay}}, {{ui:Linetype}}, {{ui:Lineweight}}, {{ui:Fill (mga hatch)}} at {{ui:Istilo ng teksto}} sa ibaba ng mga button. Lagyan ng tsek ang {{ui:Gamitin sa paggawa}} para ang mga bagong object na iginuguhit sa class na iyon ay kunin ang lahat ng ito ayon sa class.

Ang bawat pagbabago sa panel ay isang undo step.

## Palitan ang pangalan at burahin

Ang {{ui:Palitan ang pangalan}} ay nag-e-edit ng pangalan sa mismong lugar: pindutin ang {{key:Enter}} para panatilihin ito, {{key:Esc}} para umalis. Sumusunod ang mga class sa ilalim nito (ang `Lighting-Spot` ay nagiging `Light-Spot` kapag ang `Lighting` ay naging `Light`), at gayundin ang kanilang mga object at anumang viewport override.

Ang {{ui:Burahin}} ay nag-aalis ng class at ng bawat class sa ilalim nito. Mapupunta sa **Wala** ang kanilang mga object. Ibinabalik ng isang {{ui:I-undo}} ang lahat. Hindi maaaring palitan ang pangalan o burahin ang **Wala**.

## Design layer

Sa ilalim ng {{ui:Design layer}}, ang bawat layer ay maaaring magdala ng scale (`1:50`) at elevation. Ang design layer ay isang karaniwang layer: gumagana pa rin ang model space at mga sheet gaya ng dati, at pinananatili ng drawing ang scale at elevation para sa mga tool na gagamit nito.

## Sa mga DWG at DXF file

Pinananatili ang mga class sa bawat bersyon ng DWG na sine-save ng CadCraft at sa DXF (R12 at 2000). Ang class ng bawat object ay sarili nitong extended data (application `CADCRAFT_CLASS`), kaya pinananatili ito ng AutoCAD at iba pang program kasama ng object. Ang listahan ng class, mga kulay at visibility ay nasa iisang hindi nagamit na block na pinangalanang `CADCRAFT_CLASSES`; kung buburahin ito ng ibang program, hahanapin pa rin ng CadCraft ang class ng bawat object at babalik ang mga class na may default na setting.

Hindi alam ng ibang program ang tungkol sa mga class: ginuguhit nila ang bawat object gamit ang sarili nitong value o ang value ng layer nito.

Tingnan din ang [Mga override ng viewport class](topic:viewport-overrides) at [Ayusin ang drawing gamit ang mga layer](topic:layers).
