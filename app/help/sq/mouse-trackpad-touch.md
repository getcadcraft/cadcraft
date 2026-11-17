---
title: Maus, prekës dhe prekje
summary: Si të zmadhosh, lëviz pamjen, bësh klikim të djathtë dhe zgjedhje në CadCraft me një maus me rrotë, një prekës Mac ose PC, ose një ekran me prekje, dhe çfarë ndryshon midis shfletuesve.
keywords: prekës, touchpad, magic mouse, prekje, tablet, ipad, lëviz pamjen, zmadhim, pan, zoom, pinch, klikim i djathtë, dy gishta, buton i mesit, shfletues, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft është projektuar për një maus me rrotë. Gjithçka funksionon edhe me një prekës, me disa zakone për t'u mësuar. Ekranet me prekje funksionojnë për zgjedhje, me kufizime.

## Maus me rrotë

- **Zmadhim:** rrotullo rrotën. Vizatimi zmadhohet rreth kryqit, pra shiko aty ku dëshiron të shohësh.
- **Lëvizje e pamjes:** mbaj rrotën të shtypur dhe tërhiq, ose tërhiq me butonin e djathtë.
- **Zmadho gjithçka:** kliko dy herë rrotën, ose kliko {{ui:Shtrirje}}.
- **Kthehu te pamja e mëparshme:** kliko {{ui:Paraprake}} te grupi Pamje, ose shkruaj `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Një seri hapash të rrotës llogaritet si një pamje, kështu që një {{ui:Paraprake}} e zhbën tërësisht. Ruaj pamjet ku do të kthehesh me {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** klikim i djathtë.

## Prekësi

:::mac
- **Lëvizje e pamjes:** lëviz dy gishta mbi prekës, në çdo drejtim: vizatimi ndjek gishtat. Mund të tërheqësh edhe me një klikim me dy gishta të mbajtur (tërheqje me butonin e djathtë).
- **Zmadhim:** shtrëngo me dy gishta. Zmadhimi ndjek kryqin.
- **Klikim i djathtë (Enter):** kliko me dy gishta. Aktivizo "Secondary click" te **Cilësimet e sistemit**, pastaj **Prekësi**, nëse nuk bën asgjë. Klikimi me Control mund të numërohet si klikim i zakonshëm në CadCraft e jo si klikim i djathtë, prandaj përdor klikimin me dy gishta.
- **Zmadhim në një zonë:** kliko {{ui:Dritare (W)}} te grupi Pamje, dhe kliko dy qoshe.
:::

:::windows linux
- **Lëvizje e pamjes:** lëviz dy gishta mbi prekësin, në çdo drejtim: vizatimi ndjek gishtat. Mund të tërheqësh edhe me butonin e djathtë të mbajtur.
- **Zmadhim:** shtrëngo me dy gishta. Zmadhimi ndjek kryqin.
- **Klikim i djathtë (Enter):** kliko me dy gishta, ose kliko qoshen e poshtme djathtas të prekësit, sipas cilësimeve të prekësit.
- **Zmadhim në një zonë:** kliko {{ui:Dritare (W)}} te grupi Pamje, dhe kliko dy qoshe.
:::

Mbajtja e {{key:Space}} dhe tërheqja **nuk** lëviz pamjen në CadCraft: {{key:Space}} është Enter.

Një rrotë mausi zmadhon akoma, një hap në një herë. Një prekës që dërgon lëvizjen e tij në hapa të plotë, si një rrotë, zmadhon me lëvizje dy gishtash në vend që të lëvizë pamjen: zvogëlo, shiko zonën që do dhe zmadho përsëri. Skeda 3D mban lëvizjet e veta me prekës (shih [Modelimi në 3D](topic:3d-solids#look-around)).

## Ekrane me prekje dhe tablete

CadCraft e lexon gishtin si klikim mausi:

- Një prekje zgjedh një pikë ose një objekt, ose përzgjedh.
- Tërheqja e një gishti në hapësirë bosh vizaton një lasso (tërheqja djathtas e para është dritare, majtas e para është kryqëzim; shih [Përzgjedhja me lasso](topic:lasso-selection)).
- Te {{cmd:TRIM}} dhe {{cmd:EXTEND}}, tërheqja e një gishti nëpër copa i pret ose i zgjat të gjitha.
- Tërheqja e një doreze të objektit të përzgjedhur e zhvendos dorezën (dorezat dhe kutia e zgjedhjes janë më të mëdha për një gisht).
- **Shtrëngim** me dy gishta për të zmadhuar rreth pikës ndërmjet tyre; lëviz dy gishta bashkë për të **lëvizur pamjen**. Gishti i dytë anulon atë që filloi i pari, kështu që një shtrëngim nuk lë kurrë gjurmë.
- Një **prekje e gjatë** (mbaj të palëvizur rreth gjysmë sekondë) është klikim i djathtë: {{key:Enter}}. Ajo mbyll një komandë, përfundon një përzgjedhje, ose përsërit komandën e fundit.

Nën rreshtin e komandave shfaqet një **rresht tastesh**: {{ui:Esc}}, Zhbëj, Ribëj, karakteret që tastiera e tabletit i fsheh (`@` `,` `<` `'` `"` `-`), {{ui:Kapje}}, {{ui:Ortho}}, një buton tastiere dhe një {{ui:Enter}} të madh. Prek butonin e tastierës (ose rreshtin e komandave) për të shkruar një komandë ose numër.

Nuk ka hover, kështu që shenjat e kapjes shfaqen vetëm aty ku është gishti yt.

:::touch
Po përdor një ekran me prekje. Për diçka më shumë se një shikim të shpejtë, një tastierë e lidhur dhe një maus ose prekës e bëjnë CadCraft shumë më të lehtë për t'u përdorur.
:::

## Shfletuesit

CadCraft punon njësoj në Chrome, Edge, Firefox dhe Safari, në Mac, Windows dhe Linux. Ndryshimet janë të vogla:

| Tema | Çfarë duhet ditur |
|---|---|
| Hapja e një DWG | Vizatimet e mëdha marrin disa sekonda për t'u lexuar në çdo shfletues; rreshti i gjendjes tregon "Po lexohet …" ndërkohë |
| Shkarkimet | Çdo shfletues vendos ku shkojnë shkarkimet dhe nëse pyet para; shih [Shfletuesit dhe kompjuterat](common:browsers) |
| Hap për printim | Hap PDF-në në një skedë të re. Nëse shfletuesi bllokon dritaret e reja, CadCraft shkarkon PDF-në në vend të kësaj |
| F7 | Firefox mund të ofrojë shfletimin me caret; zgjidh No |
| Largimi me ndryshime të paruajtura | Çdo shfletues shfaq pyetjen e vet "Largohu nga faqja?", të cilën CadCraft nuk mund ta ndryshojë |

:::safari
Në Safari, një PDF i hapur me {{ui:Hap për printim}} mund të shfaqet në skedë pa u printuar: përdor **Skedar**, pastaj **Printo**.
:::

:::firefox
Firefox mund të pyesë çfarë të bëhet me çdo shkarkim. Zgjidh ta ruash skedarin, ose ndrysho këtë një herë te cilësimet e Firefox nën **Shkarkimet**.
:::
