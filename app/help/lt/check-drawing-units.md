---
title: Patikrinti, kokiais vienetais yra brėžinys
summary: Sužinokite, ar atidarytas brėžinys yra milimetrais, coliais ar kitais vienetais, patikrinkite matuodami ir sužinokite, kodėl kita programa tam pačiam DXF gali nurodyti kitus vienetus.
keywords: vienetai, kokie vienetai, kurie vienetai, tikrinti vienetus, milimetrai, mm, coliai, metrinė, anglosaksiška, DXF vienetai, STEP į DXF, neteisingi vienetai, coliai ar mm, INSUNITS, MEASUREMENT, brėžinio vienetai, PartCraft DXF
from: c0ee75bb
---

## Ką atliksite

Sužinosite, ką reiškia vienas atidaryto brėžinio vienetas, ir įsitikinsite, kad skaičiai, kuriuos skaitote, atitinka jūsų tikėtinus matmenis.

## Veiksmai

1. Atidarykite brėžinį, tada paspauskite {{key:Esc}}, kad nieko nebūtų pažymėta, skirtuke {{ui:Modelis}}.
2. Dešiniajame skydelyje, po {{ui:Dabartiniai nustatymai}}, perskaitykite {{ui:Vienetai}}. Ten nurodoma, ką reiškia vienas brėžinio vienetas: {{ui:Milimetrai}}, {{ui:Coliai}}, {{ui:Pėdos}} ir t. t. DXF, išsaugotas iš PartCraft, nurodo {{ui:Milimetrai}}.
3. Patikrinkite matuodami ką nors, kieno dydis jums žinomas. Įveskite {{cmd:DIST}} ir pasirinkite dvi briaunos ar skylės galines vietas. Jei žinoma 25 mm detalė rodo `25`, brėžinys yra milimetrais; jei rodo maždaug `0.98`, jis yra coliais.

{{ui:Be vienetų}} reiškia, kad failas to nenurodo. Tada CadCraft laiko, kad vienetas yra popieriaus vienetas (milimetrai ISO popieriuje, coliai JAV popieriuje), o skaičiai tiek tikslūs, kiek tiksli programa, kuri juos įrašė.

## Jei vienetai neteisingi

Keičiant {{ui:Vienetai}} **niekas nekeičiama pagal dydį**: skaičiai lieka tie patys, keičiasi tik jų reikšmė. Todėl nustatykite tik tai, kas iš tiesų yra brėžinyje. Jei skaičiai yra milimetrais, o {{ui:Vienetai}} rodo {{ui:Coliai}}, pasirinkite {{ui:Milimetrai}}. Jei geometriją reikia kitais vienetais, ją pakeiskite mastelio komanda {{cmd:SCALE}} (25.4 nuo colių į milimetrus, 1/25.4 atvirkščiai) ir tada nustatykite {{ui:Vienetai}}.

Kaip rašomi ilgiai (dešimtainiai, pėdos ir coliai, trupmenos) yra atskiras parametras, {{ui:Ilgio formatas}}: žr. [Vienetai, popieriaus dydžiai ir mastelis](topic:units-papers-scales).

## Kodėl kita programa gali rodyti colius

DXF nurodo savo vienetus antraštėje. Seniausias DXF tipas, R12, neturėjo jokio vienetų kintamojo, todėl programa, griežtai skaitanti R12, jį ignoruoja ir naudoja savo numatytuosius, dažnai colius. Failo geometrija abiem atvejais ta pati: skiriasi tik etiketė. PartCraft rašo DXF failus kaip R12 ir nurodo milimetrus dviem būdais (`$INSUNITS` 4 ir `$MEASUREMENT` 1), kad daugiau programų juos teisingai perskaitytų. Jei programa vis dar rodo colius, atidarydami failą nustatykite jos vienetus į milimetrus.

Brėžinio įtraukimas į brėžinį (o ne atidarymas) konvertuoja jo vienetus: žr. [Vienetai importuojant](topic:units-on-import).
