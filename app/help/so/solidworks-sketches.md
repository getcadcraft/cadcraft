---
title: U dhoofi naqshadaha qaybaha moodelada kale iyo ka soo celi
summary: Qor macro dib u dhisa naqshaddaada sida hal sawir xannibaad leh oo qayb moodel ah, oo fur sawir laga dhoofiyay mid.
keywords: sawir, macro, swb, vba, dhoofin, qayb moodel, doorsoomayaasha caalamiga ah, isleegyada, xiriirrada, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks ma jiro meesha CadCraft lagu dhisay, sidaas darteed labada jihood weli SolidWorks lama tijaabin. Waxa CadCraft qoro waxaa lagu hubiyaa qaab-dhismeedka oo keliya. Hubi natijada ka hor inta aadan ku tiirsanaanin.
:::

## U dhoofi naqshad sida sawir

1. Xannibi naqshadda oo cabbiri (eeg [Xannibi naqshadda](topic:constraints)).
2. Kooxda {{ui:Parametric}}, fur {{ui:More}} oo dooro {{ui:Macro for SolidWorks (.swb)}}, ama ku qor {{cmd:SWBOUT}}.

   Fayl magiciisu yahay magaca naqshadda, dhamaadkuna yahay `.swb`, ayaa la soo dejiyaa.
3. SolidWorks, dooro **Tools > Macro > Run** oo dooro faylkaas.

Macro-gu wuxuu sameeyaa qayb cusub oo ka soo baxda template-kaaga caadiga ah, wuxuu furaa sawir ku yaal Front Plane, wuxuuna ku sawiraa xariiqyada, goobaha, qaansooyinka, barooyinka iyo polilaynnada moodelka, oo leh:

- xannibaadyadaada sida xiriirro sawir,
- xannibaadyada cabbirka sida cabbirro leh magacyo isku mid ah (`d1@Sketch1`),
- cabbirradaada gaarka ah sida doorsoomayaal caalami ah,
- isleeg kasta sida equation.

Qaybtu wuxuu isticmaalaa unugga dhererka naqshadda. Qoraalka, blocks-ka, hatch-ka, cabbirrada iyo xaashiyada qayb kama ahan sawirka; taariikhdu waxay sheegtaa waxa laga tagay. Tilmaamaha aan halkaas lahayn qaab isleeg (`if`, `min`, `max`, `round`, `%` iyo kuwa kale) waxaa loo qoraa qiimahooda hadda, taariikhduna way sheegtaa. Wax kasta oo macro-gu aan samayn karin waxaa lagu qoraa faylka log-ga ee macro-ka ku xigta, fariinna wax walba soo koobaysa dhamaadka.

## Fur sawir qayb ka

1. SolidWorks, orod macro-ka dhoofinta CadCraft (soo deji PartCraft app: Fayl > Dhoofi > Dhoofi macro si qaybaha dib ugu soo celiso) qaybta. Wuxuu qori doonaa fayl `.json` oo ku yaal qaabka `cadcraft-sw-export` agtiisa, meesha qaybta ku taal.
2. CadCraft, dooro {{ui:Open}} oo dooro faylkaas `.json`.
3. Marka qaybtu leedahay sawiro dhowr ah, dooro mid.

Sawirku wuxuu noqdaa naqshadda, millimitir: xariiqyadiisa, qaansooyinkiisa, goobaha iyo barooyinka, xiriirradiisa sida xannibaad, cabbirradiisa sida xannibaadyo cabbiran oo magacyadooda sidii ay ahaayeen (`D1`, `D2` …), doorsoomayaashiisa caalamiga ah sida cabbirro, iyo isleegyada cabbirradiisa sida tilmaamayaashooda. Taariikhdu waxay sheegtaa waxa aan la soo gudbin, sida xiriirro CadCraft aan lahayn. Meesha sawirku ku yaal qaybta lama kaydiyo: wuxuu u rogan yahay sida loo arko diyaaradiisa.
