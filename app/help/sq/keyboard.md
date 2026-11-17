---
title: Tastiera dhe miu
summary: Çdo tast, veprim me miun dhe tast i rreshtit të komandës në aplikacionin e vizatimit CadCraft, ashtu si i trajton kodi.
keywords: tastiera, shkurtoret, tastet, miu, rrota, lëviz pamjen, zmadhim, klikimi i djathtë, butoni i mesit, f3, f7, f8, ctrl, tasti i komandës, shkurtoret e tastierës, kopjo, prit, ngjit, dyfisho, kujtesa e kopjimit, përzgjidh të gjitha
from: a2608a29
---

Shkurtoret shfaqen për kompjuterin tënd. Në një Mac, çdo shkurtore {{key:Mod}} më poshtë përdor tastin Command, dhe tasti Control gjithashtu funksionon. Si shkruhen tastet, dhe si të përdorësh tastet F në një Mac, është te [Tastet, miu dhe trackpad-et](common:keys).

## Shkrimi i komandave

| Tasti | Çfarë bën |
|---|---|
| Çdo shkronjë, shifër ose simbol | Shkon te rreshti i komandës, kudo qoftë treguesi, përveç rastit kur një kuti në një panel ka kursorin |
| {{key:Enter}} | Dërgon atë që shkrove. Te një kërkesë bosh: përsërit komandën e fundit, mbaron një komandë, përfundon një përzgjedhje, ose pranon parazgjedhjen në `<…>` |
| {{key:Space}} | Njëlloj si {{key:Enter}}, përveç kur CadCraft kërkon tekst (tekst, emra blloqesh, tekst përmasash), ku shkruan një hapësirë |
| {{key:Esc}} | Anulon komandën. Pa komandë që po ekzekutohet: anulon lëvizjen e një doreze ose një kutie përzgjedhjeje, pastaj heq përzgjedhjen |
| {{key:Tab}} | Pranon komandën e sugjeruar që shfaqet në të djathtë të rreshtit të komandës. Pa asgjë të shkruar dhe me treguesin mbi objekte që mbivendosen: thekson të radhës atje (kliko për ta zgjedhur) |
| {{key:Up}} {{key:Down}} | Lëviz nëpër rreshtat që ke shkruar më parë (100 të fundit) |

## Vizatimi dhe redaktimi

| Tasti | Çfarë bën |
|---|---|
| {{key:Mod+Z}} | Zhbën komandën e fundit |
| {{key:Mod+Y}} ose {{key:Mod+Shift+Z}} | Ribën |
| {{key:Mod+A}} | Përzgjedh çdo objekt që mund ta redaktosh në skedën e hapur ({{cmd:SELECTALL}}). Nëse ke shkruar diçka te rreshti i komandës, ai përzgjedh atë tekst |
| {{key:Delete}} | Fshin objektet e përzgjedhura ({{cmd:ERASE}}), përveç nëse ke shkruar diçka te rreshti i komandës |
| {{key:Backspace}} | Fshin objektet e përzgjedhura kur rreshti i komandës nuk ka kursorin; te rreshti i komandës fshin atë që shkrove |
| {{key:Esc}} | Pa komandë që po ekzekutohet: heq përzgjedhjen ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Ruan një kopje në formatin e vizatimit (DWG ose DXF) |
| {{key:Mod+Shift+S}} | Ruaj si: zgjidh DWG ose DXF, pastaj ruaj një kopje |
| {{key:Mod+O}} | Hap një DWG ose DXF |
| {{key:Mod+P}} | Nxirr në PDF |

Zhbëj, ribëj, përzgjidh të gjitha dhe nxirr nuk bëjnë asgjë ndërsa po ekzekutohet një komandë: shtyp {{key:Esc}} më parë.

## Kopjo, prit dhe ngjit

| Tasti | Çfarë bën |
|---|---|
| {{key:Mod+C}} | Kopjon përzgjedhjen në kujtesën e kopjimit ({{cmd:COPYCLIP}}). Asgjë e përzgjedhur: CadCraft kërkon objekte |
| {{key:Mod+X}} | Prit: kopjon përzgjedhjen, pastaj e fshin ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Ngjit: kopja ndjek kursorin; kliko, ose shkruaj një pikë, për ta vendosur ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Ngjit në vend: te koordinatat nga ku u kopjua ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Dyfisho: një kopje e përzgjedhjes lëviz me treguesin; kliko për ta vendosur, {{key:Esc}} nuk lë asgjë ({{cmd:DUPLICATE}}) |

Të njëjtat veprime janë në grupin {{ui:Redakto}} të shiritit të veglave ({{ui:Kopjo}}, {{ui:Ngjit}}) dhe te menyja e tij {{ui:Më shumë}}. Ndërsa po ekzekutohet një komandë tjetër, përfundoje ose shtyp {{key:Esc}} më parë; shtypja e {{key:Mod+V}} ose {{key:Mod+D}} përsëri, ndërsa një kopje ndjek kursorin, e nis nga e para. Kur ke shkruar diçka te rreshti i komandës, ose kur një komandë kërkon tekst, këta taste kopjojnë, presin dhe ngjitin atë tekst. Shih [Kopjo, ngjit dhe dyfisho](topic:copy-paste).

## Ndërrimet

| Tasti | Ndërrimi | Buton në shiritin e statusit |
|---|---|---|
| {{key:F3}} | Kapjet e objekteve ndezur ose fikur | {{ui:Kapje}} |
| {{key:F7}} | Rrjeta ndezur ose fikur | {{ui:Rrjetë}} |
| {{key:F8}} | Ortho ndezur ose fikur | {{ui:Ortho}} |
| {{key:F10}} | Gjurmimi polar ndezur ose fikur | {{ui:Polar}} |
| {{key:F11}} | Gjurmimi i kapjes së objekteve ndezur ose fikur | {{ui:Gjurmo}} |
| {{key:F12}} | Hyrja dinamike ndezur ose fikur | {{ui:Dyn}} |

:::mac
Në një Mac, F3, F7 dhe F8 janë zakonisht Mission Control dhe tastet e medias. Mbaj **fn** me to, ose ndiz tastet standarde të funksionit te System Settings, siç përshkruhet te [Tastet, miu dhe trackpad-et](common:keys). Butonat e shiritit të statusit funksionojnë gjithmonë.
:::

:::firefox
F7 në Firefox mund të kërkojë gjithashtu të ndezë navigimin me kursor. Zgjidh **No**, dhe përdor butonin {{ui:Rrjetë}} nëse vazhdon të pyesë.
:::

## Ndihma

| Tasti | Çfarë bën |
|---|---|
| {{key:F1}} | Hap ose mbyll këtë ndihmë, pranë vizatimit. Funksionon edhe ndërsa po ekzekutohet një komandë, dhe nuk arrin kurrë te rreshti i komandës. |
| {{key:Esc}} | Me kursorin te paneli i ndihmës: pastron kërkimin, ose mbyll panelin |

Butoni {{ui:Ndihmë}} te shiriti lart bën të njëjtën gjë si {{key:F1}}. Ndërsa shkruan në kutinë e kërkimit të ndihmës, asgjë nuk arrin te rreshti i komandës. Kliko në vizatim për t'i kthyer tastet CadCraft-it; paneli mbetet i hapur pranë tij.

:::mac
Në një tastierë Mac, mbaj **fn** dhe shtyp F1, ose kliko {{ui:Ndihmë}}.
:::

## Ekrani

| Tasti | Çfarë bën |
|---|---|
| {{key:Ctrl+Shift+F}} | Ndërron mes normal, ekran të plotë dhe ekran të plotë me shiritat të fshehur. Përdor tastin Control në çdo kompjuter, përfshirë Mac-un. |
| {{key:Left}} {{key:Right}} | Me një skedë nën vizatim të fokusuar: skeda e mëparshme ose e radhës |

Në ekran të plotë, shfletuesi mund ta përdorë {{key:Esc}} e parë për të dalë nga ekrani i plotë. Shtyp {{key:Esc}} përsëri për të anuluar një komandë.

## Dialogët

| Tasti | Çfarë bën |
|---|---|
| {{key:Esc}} | Mbyll dialogun ({{ui:Nxirr në PDF}}, ose një pyetje si "Ndryshime të paruajtura", ku do të thotë {{ui:Anulo}}) |
| {{key:Tab}} | Lëviz mes cilësimeve dhe butonave të dialogut |

Ndërsa një dialog është i hapur, tastet e vizatimit janë të fikura.

## Fusha të panelit

Në një kuti të panelit të djathtë ose të majtë:

| Tasti | Çfarë bën |
|---|---|
| {{key:Enter}} | Zbaton vlerën dhe del nga kutia |
| {{key:Esc}} | Kthen vlerën e vjetër dhe del nga kutia |
| {{key:Tab}} | Zbaton dhe kalon te kutia e radhës |

Ndërsa një kuti ka kursorin, shkronjat shkruhen aty, jo te rreshti i komandës.

## Miu

| Veprimi | Çfarë bën |
|---|---|
| Kliko | Zgjedh një pikë kur një komandë kërkon një pikë; zgjedh një objekt kur kërkon objekte; përndryshe përzgjedh një objekt, ose një dorezë |
| Shift+kliko | Heq një objekt të përzgjedhur nga përzgjedhja (me {{ui:Klikimi i objekteve}} të vendosur te {{ui:Zëvendëson përzgjedhjen}} te [Cilësimet](topic:settings): e shton). Ndërsa zgjedh një pikë: injoron kapjet e objekteve për atë klikim |
| Kliko në hapësirë boshe, pastaj kliko përsëri | Një kuti përzgjedhjeje: nga e majta në të djathtë është dritare, nga e djathta në të majtë është kryqëzim |
| Tërhiq në hapësirë boshe | Një lasso: nëse lëviz së pari djathtas është dritare, nëse së pari majtas është kryqëzim; {{key:Space}} gjatë tërheqjes ndërron mes dritares, kryqëzimit dhe gardhit; {{key:Esc}} e lëshon (LASSOMODE 0, ose Cilësimet, e bën përsëri drejtkëndësh) |
| Tërhiq nëpër pjesë në TRIM ose EXTEND | Pret (ose zgjat) çdo pjesë që kalon shtegu; mbaje {{key:Shift}} për tjetrën |
| Tërhiq një dorezë | Lëviz dorezën (ose kliko dorezën, pastaj kliko ku shkon) |
| Kliko dy herë tekstin | E zgjedh dhe e vendos kursorin te kutia {{ui:Tekst}} në panelin e djathtë |
| Kliko djathtas | Enter. Gjatë lëvizjes së një doreze ose një kutie përzgjedhjeje: e anulon |
| Tërhiq me butonin e djathtë | Lëviz pamjen |
| Rrota | Zmadhon dhe zvogëlon rreth kryqëzuesit |
| Tërhiq me rrotën (butoni i mesit) | Lëviz pamjen |
| Kliko dy herë rrotën | Zmadhon te i gjithë vizatimi (shtrirja) |
| Lëshon një DWG ose DXF mbi vizatim | E hap |

Në një trackpad ose ekran prekës, shih [Miu, trackpad-i dhe prekja](topic:mouse-trackpad-touch).

## Tastet që mban shfletuesi

{{key:Mod+N}}, {{key:Mod+W}} dhe {{key:Mod+T}} i përkasin gjithmonë shfletuesit. CadCraft nuk i përdor: përdor {{ui:E re}} ose shkruaj `NEW` për një vizatim të ri. Kujtesa e kopjimit e CadCraft-it është e vetja: {{key:Mod+C}} dhe {{key:Mod+V}} kopjojnë objekte midis vizatimeve dhe skedave CadCraft, jo nga ose drejt programeve të tjera.

:::mac
Nëse {{key:Mod+Y}} hap historikun e shfletuesit në vend që të ribëjë, përdor {{key:Mod+Shift+Z}} ose butonin {{ui:Ribëj}}.
:::

## Ku gjendet Zhvendos

Zhvendos është komanda `MOVE` (tasti {{key:M}}): zgjidh objektet, pastaj një pikë bazë dhe një pikë të dytë ose një distancë të shkruar. `ALIGN` dhe `DISTRIBUTE` janë gjithashtu aty. BimCraft përdor të njëjtat emra për të njëjtat punë mbi elementët e ndërtesës, por tasti i saj {{key:M}} është Matje: Zhvendosja e saj është {{key:Shift+M}}.
