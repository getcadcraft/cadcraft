---
title: Hubi unugyada naqshadda
summary: Ogow in naqshadda furan ay tahay millimitir, inji ama wax kale, hubi adigoo cabbiraya, oo ogow sababta barnaamij kale u sheegi karo unugyo kala duwan isla DXF-ka.
keywords: unugyada, unugyo ahaan, unugyo intee, hubi unugyada, millimitir, mm, inji, metrik, imperiyal, unugyada DXF, STEP to DXF, unugyo qaldan, inji ama mm, INSUNITS, MEASUREMENT, unugyada naqshadda, PartCraft DXF
from: c0ee75bb
---

## Waxa aad samayn doontid

Ogow micnaha hal unug naqshadda furan, oo hubi in lambarada aad akhrinayso ay yihiin cabbirka aad filayso.

## Tallaabooyinka

1. Fur naqshadda, kadibna riix {{key:Esc}} si wax aan la doorán, tab-ka {{ui:Moodeel}}.
2. Guddiga midig, hoosta {{ui:Dejinta hadda jirta}}, akhri {{ui:Unugyada}}. Waxay sheegaysaa hal unug naqshadda micnaheeda: {{ui:Millimitir}}, {{ui:Inji}}, {{ui:Fiit}} iwm. DXF ka keydsan PartCraft wuxuu leeyahay {{ui:Millimitir}}.
3. Hubi adigoo wax cabbiraya oo cabbirkiisa aad ogtahay. Ku qor {{cmd:DIST}} oo dooro labada dhamaad ee geesta ama godka. Haddii qayb aad ogtahay 25 mm ay akhrinayso `25`, naqshaddu waa millimitir; haddii ay akhrinayso qiyaastii `0.98`, waa inji.

{{ui:Aan unug lahayn}} macnaheedu waa faylku ma sheego. Markaas CadCraft wuxuu u qaataa unugga warqadda (millimitir warqadda ISO, inji warqadda US), lambarada waxay yihiin sax sida barnaamijka qoray oo kale.

## Haddii unugyadu qaldan yihiin

Beddelidda {{ui:Unugyada}} **ma beddesho cabbir**: lambarada way isku taagan yihiin, kaliya macnaha ayaa isbeddela. Sidaas darteed u deji kaliya si ay u sheegto waxa naqshaddu runtii tahay. Haddii lambarada ay yihiin millimitir oo {{ui:Unugyada}} uu sheegayo {{ui:Inji}}, dooro {{ui:Millimitir}}. Haddii aad u baahan tahay joometriga laftiisa unug kale, u cabbir {{cmd:SCALE}} (25.4 inji ilaa millimitir, 1/25.4 dhinaca kale) kadibna deji {{ui:Unugyada}}.

Sida dherarka loo qoro (aqoolaha, fiit iyo inji, jajab) waa dejin kale, {{ui:Qaabka dherarka}}: eeg [Unugyada, cabbirrada warqadda iyo miisaanka](topic:units-papers-scales).

## Sababta barnaamij kale uu inji u sheegi karo

DXF wuxuu sheegaa unugyadiisa madaxa (header) dhexdiisa. DXF-ka ugu da' weyn, R12, ma lahayn doorsoome unug oo gaar ah, sidaas darteed barnaamij akhriya R12 si adag wuu iska indha tiraa qiimaha halkaas lagu qoray oo wuxuu isticmaalaa default-kiisa, kaas oo badanaa ah inji. Joogtaynta faylku waa isku mid labada xaaladood: kaliya calaamaddu way kala duwan tahay. PartCraft wuxuu qoraa DXF-kiisa R12 wuxuuna sheegaa millimitir laba siyaabood (`$INSUNITS` 4 iyo `$MEASUREMENT` 1) si barnaamijyo badani u akhriyaan sax. Haddii barnaamij weli inji sheegayo, deji unugyadiisa millimitir markaad faylka furayso.

Soo gelinta fayl naqshad (halkii la furi lahaa) waxay beddeshaa unugyadiisa: eeg [Unugyada markii la soo geliyo](topic:units-on-import).
