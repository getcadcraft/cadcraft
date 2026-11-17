---
title: Hlela umdwebo ngamaklasi
summary: Amaklasi ahlela izinto ngendlela yesibili, kuwo wonke amangqimba (Lighting-Fixtures-Spot): wabonisa futhi wawafihla, wawanikeza umbala, uhlobo lomugqa, ukuthungwa, ubukhulu bomugqa kanye nesitayela sombhalo izinto ezingawuthatha "ngeklasi", futhi usethe iklasi izinto ezintsha okuyo.
keywords: iklasi, amaklasi, CLASSES, CLS, CLASS, ngeklasi, ByClass, iklasi esebenzayo, sebenzisa ekudalweni, None, ungqimba lokuklama, isikali sungqimba, ukuphakama, Vectorworks
from: 672de9cb
---

Amangqimba athi *lapho* into ingena khona emdwebeni; amaklasi athi *yini* leyo nto. Udonga oseqhule `Level 1` lungaba eklasini `Walls-Exterior`, nesibani esiphezulu esiseqhule `Ceiling` singaba eklasini `Lighting-Fixtures-Spot`. Ungafihla zonke izibani kuzo zonke amangqimba ngesikhathi esisodwa, noma ushicilele zonke izindonga zangaphandle zibe nzima kakhudlwana, ngaphandle kokuthutha lutho phakathi kwamangqimba.

Yonke into iqala ku-**None**. Umdwebo ongenaziklasi zawo usebenza njengakuqala.

## Vula ipaneli yamaklasi

Thayipha `CLASSES` (noma `CLS`) bese ucindezela {{key:Enter}}, noma khetha {{ui:Classes…}} ku-menyu ye-{{ui:More}} yeqoqo le-{{ui:View}}. Ipaneli ivula phezu komdwebo futhi ihlala ivuliwe lapho udweba.

- **Engeza iklasi:** thayipha igama layo kubhokisi phezulu bese ucindezela {{key:Enter}}. Ichashazi `-` yenza izinga: `Lighting-Fixtures-Spot` iphansi kwe-`Lighting-Fixtures`, ephansi kwe-`Lighting`; izinga elingekho lengezwa wena.
- **Bonisa noma fihla:** iso eduze neklasi. Ukufihla iklasi kufihla zonke amaklasi ephansi kwayo, esikrinini nasephepheni.
- **Iklasi esebenzayo:** inkinobho eyindilinga. Izinto ozidweba zingena eklasini esebenzayo.
- **Khetha iklasi:** chofoza igama layo. Izinkinobho nezilungiselelo ezingaphansi kohlu zisebenza kuyo.

Inombolo ekugcineni kwemugqa ngamunye iwukuthi zingaki izinto ezisemaklasini (emodelini, phezu kwamashidi nangaphakathi kwezincazelo zamabhulokhi).

## Faka izinto eklasini

Khetha izinto, khetha iklasi ephaneli bese ukhetha {{ui:Set class}}. Qala ubhake {{ui:By class}} ukuze zithathe umbala, uhlobo lomugqa, ubukhulu bomugqa, ukugcwaliswa nesitayela sombhalo weklasi. Ungenza futhi:

- thayipha `CLASS` ngezinto ezikhethiwe bese ufaka igama leklasi (igama elisha lenza iklasi);
- thayipha `CLASS` ngaphandle kokukhetha lutho ukuze usethe iklasi esebenzayo; `?` ibala amaklasi nezinombolo zawo;
- sebenzisa isigaba se-{{ui:Class}} kuphaneli yezakhiwo: iklasi, nesiguquli se-{{ui:… by class}} sombala, uhlobo lomugqa nobukhulu bomugqa (ukugcwaliswa kwamahetshi, isitayela sombhalo kulokhu);
- khetha ngeklasi ngo-`QSELECT`: khetha isakhiwo {{ui:Class}}.

{{ui:Select its objects}} ikhetha zonke izinto zeklasi ekhethiwe kuphepha elivulekile (noma emodelini).

## Indlela into edweba ngayo: into, iklasi, ungqimba

Umbala, uhlobo lomugqa, ubukhulu bomugqa, ukugcwaliswa nesitayela sombhalo sento kungaba **ngeklasi**, njengokuba kungaba ngomugqa. I-CadCraft ibheka ngalolu hlobo:

1. Inani lento uqobo, uma lingelona elingeklasi.
2. Inani leklasi, uma into iwuthatha ngeklasi futhi iklasi linalo.
3. Inani likangqimba.

Iklasi umbala (noma uhlobo lomugqa …) wawo ungu-{{ui:Not set}} udlulisela into kungqimba wayo. Khetha iklasi bese usetha i-{{ui:Color}}, i-{{ui:Linetype}}, i-{{ui:Lineweight}}, i-{{ui:Fill (hatches)}} ne-{{ui:Text style}} ngaphansi kwezinkinobho. Bhaka {{ui:Use at creation}} ukuze izinto ezidwetshwe kuleyo klasi zithathe konke ngeklasi.

Yonke into oyishintsha kuphaneli ingunyathelo elilodwa le-undo.

## Qamba kabusha nesula

{{ui:Rename}} ihlela igama endaweni: cindezela {{key:Enter}} ukuze ulondoloze, {{key:Esc}} ukuze ushiye. Amaklasi angaphansi kwalo ayalandela (`Lighting-Spot` iba `Light-Spot` uma `Lighting` iba `Light`), futhi kanjalo nezinto zawo nanoma yiziphi izincazelo zokubuka zomfanekiso (viewport).

{{ui:Delete}} isusa iklasi namaklasi onke aphansi kwayo. Izinto zawo zidlulela ku-**None**. Isinyathelo se-{{ui:Undo}} esisodwa sibuyisela konke. **None** ayikwazi ukuqanjwa kabusha noma ukususwa.

## Amangqimba okuklama

Ngaphansi kwe-{{ui:Design layers}} ungqimba ngamunye ungathwala isikali (`1:50`) nokuphakama. Ungqimba lokuklama ungqimba ojwayelekile: isikhala somodeli namashidi asebenza njengakuqala, futhi isikali nokuphakama kugcinwa kanye nomdwebo wamathuluzi azosisebenzisa.

## Emafayeleni e-DWG ne-DXF

Amaklasi agcinwa kuwo wonke amanguqulo e-DWG e-CadCraft elondoloza kanye ne-DXF (R12 nowe-2000). Iklasi yento ngayinye iyidatha yayo eyengeziwe (uhlelo `CADCRAFT_CLASS`), ngakho i-AutoCAD nezinye izinhlelo ziyigcina nento. Uhlu lwamaklasi, imibala nokubonakala kugcinwa ebhulokhini elilodwa elingasetshenziswa elibizwa ngokuthi `CADCRAFT_CLASSES`; uma enye inhlelo iyisula leli bhulokhi, i-CadCraft isathola iklasi yento ngayinye futhi amaklasi abuyela ezilungiselelweni zawo zokuzenzakalela.

Ezinye izinhlelo azazi ngamaklasi: zidweba into ngayinye ngamanani ayo noma awangqimba wayo.

Bona futhi [Ukwehlukanisa okubonakalayo kweklasi](topic:viewport-overrides) kanye [Hlela umdwebo ngamangqimba](topic:layers).
