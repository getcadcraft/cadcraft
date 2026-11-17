---
title: Tags: mga attribute na nagpapakain sa schedule
summary: Magtakda ng tag (uri nito, mga value na maaari nitong kunin, mga block na sakop nito), itakda ito sa mga block reference, at ilista ang mga reference bilang schedule na maaari mong i-save bilang CSV.
keywords: tags, tag, attribute, schedule, data extraction, property, fire rating, pick list, block reference, TAGS, csv
from: 9b90bacc
---

Ang **tag** ay isang block attribute na may depinisyon: anong uri ng value ang hawak nito, aling mga value ang pinapayagan, at aling mga block ang sakop nito. Ordinaryong block attribute ang mga value, kaya nababasa ito ng ibang program at ipinapakita ito ng {{cmd:ATTEDIT}}. Mga depinisyon lamang ang bago, at nananatili ang mga ito sa drawing.

## I-define at itakda

I-type ang {{cmd:TAGS}} at piliin ang:

- {{ui:I-define}}: isang pangalan (letra, digit, space, `_ . -`), isang uri (`text`, `number`, `integer`, `yesno`, `length`, `angle`), ang mga pinapayagang value na pinaghihiwalay ng `;` (iwanang walang laman para sa anuman), at ang mga pangalan ng block na sakop nito (ang `DOOR*` ay tumutugma sa lahat ng block na nagsisimula sa DOOR; ang walang laman ay nangangahulugang lahat ng block).
- {{ui:Itakda}}: kasama ang mga block reference na napili, i-type ang `FireRating=60 min; Width=850`. Ang value na nasa labas ng pinapayagang listahan, o hindi numero para sa number tag, ay tinatanggihan at sinasabi. Isang undo step. Ang block na walang attribute ay nakakakuha nito bilang hidden attribute.
- **[Iskedyul (C)]**: bawat reference sa block na sakop ng tag, opsyonal na pinagpangkat ayon sa tag o pangalan ng block, naka-print at naka-save bilang CSV.
- {{ui:Alisin}}: kinakalimutan ang depinisyon; nananatili ang mga value sa mga reference.

Ang pagpapalit ng pangalan ng tag ay nagpapalit din ng pangalan ng mga value nito sa bawat reference. Hindi sensitibo sa case ang mga pangalan ng tag, gaya ng mga pangalan ng attribute.
