---
title: Dokumentet: marrja për redaktim, rishikimet dhe lëshimi
summary: Mbaji nën kontroll vizatimet e një dosjeje projekti: merr një skedar për redaktim, që askush tjetër ta ndryshojë, regjistroje si rishikim të ri, dërgoje për shqyrtim dhe lëshoje me emrin e miratuesit; historiku, çfarë përdor çfarë, një listë materialesh dhe blloqet e titullit që tregojnë rishikimin.
keywords: cilësimet e projektit, miratuesit, administratorët, shkronjat e rishikimit, ASME, vetëm për lexim, krahaso rishikimet, hap kopje, partcraft, bimcraft, documents, DOCUMENTS, DOCS, depo, menaxhimi i dokumenteve, pdm, merr për redaktim, regjistro, checkout, checkin, kyçje, rishikim, rev, shkronjë rishikimi, lëshim, lëshuar, miratoje, miratim, shqyrtim, vjetëroje, ku përdoret, bom, listë materialesh, bllok titulli, bllok rishikimi, dosje projekti
from: ee938722
---

## Çfarë do të bëni

Një dosje projekti ku çdo vizatim ka një rishikim (A.1, A.2 … pastaj A, B …) dhe një gjendje (Punë në vazhdim, Për shqyrtim, Lëshuar, I vjetëruar), ku vetëm një person në çdo kohë mund ta ndryshojë një skedar, dhe ku çdo marrje për redaktim, regjistrim, miratim dhe marrje e prishur shkruhet me kë e kur u bë.

Gjithçka ruhet brenda vetë dosjes, në një dosje të fshehur `.ccvault` pranë vizatimeve tuaja. Një dosje në një disk të përbashkët ose një dosje e sinkronizuar funksionon për një ekip të tërë. Nuk ka server dhe asgjë nuk ngarkohet.

## Hapni Dokumentet

Shkruani `DOCUMENTS` (ose `DOCS`) dhe shtypni {{key:Enter}}. Paneli hapet pranë vizatimit.

Zgjidhni {{ui:Zgjidh dosjen e projektit}} dhe përzgjidhni dosjen që mban vizatimet e projektit. Dosjet e projektit funksionojnë në CadCraft Studio dhe në shfletuesit që mund të hapin një dosje (Chrome, Edge). Në shfletuesit e tjerë paneli e thotë këtë.

Herën e parë, shkruani emrin tuaj (ai vendoset në çdo veprim që bëni) dhe emrin e këtij kompjuteri. Nëse jeni hyrë, emri juaj është tashmë aty.

## Krijoni një depo

Një dosje që ende nuk është depo shfaq {{ui:Krijo një depo në këtë dosje}}. Shkruani emrin e projektit. Pastaj hapni {{ui:Skedarë jashtë depos}} dhe zgjidhni {{ui:Shto (A)}} pranë çdo skedari që doni ta vendosni nën kontroll. Një skedar që shtoni fillon me rishikimin **A.1**, Punë në vazhdim.

## Ndryshoni një vizatim

1. Zgjidhni {{ui:Hap}} pranë një vizatimi. Ai hapet në CadCraft. Nëse nuk është marrë për redaktim nga ju, shikojeni por mos e ndryshoni: {{ui:Ruaj}} refuzon të shkruajë mbi të dhe e thotë arsyen (përdorni {{ui:Ruaj si}} për të mbajtur një kopje tuajën).
2. Zgjidhni {{ui:Merr për redaktim}}. Askush tjetër nuk mund ta marrë tani; paneli u tregon kush e ka, në cilin kompjuter dhe që kur.
3. Vizato.
4. Zgjidhni {{ui:Regjistro}} dhe thoni çfarë ndryshoi. Vizatimi që keni hapur ruhet në dosjen e projektit në formatin e vet dhe bëhet rishikimi i radhës (A.1, pastaj A.2). Regjistrimi pa asnjë ndryshim e ruan rishikimin.

{{ui:Zhbëj marrjen}} ia kthen skedarin pa rishikim të ri.

## Shqyrtimi dhe lëshimi

- {{ui:Dërgo për shqyrtim}}: skedari është vetëm për lexim gjatë shqyrtimit.
- {{ui:Miratoje}}: shkruani emrin e miratuesit. A.3 bëhet **A**, Lëshuar. Skedarët e lëshuar janë vetëm për lexim.
- {{ui:Ktheje}}: kthehet në Punë në vazhdim, me arsyen.
- {{ui:Rishikim i ri}} në një skedar të lëshuar e merr për redaktim për shkronjën e radhës: regjistrimi i parë i tij është **B.1**. {{ui:Zhbëj marrjen}} para kësaj e le në A.
- {{ui:Vjetëroje}} tërheq nga përdorimi një skedar të lëshuar.

Një projekt mund të mbajë një listë me ata që mund të miratojnë, dhe mund të kërkojë që miratuesi të mos jetë personi që e regjistroi skedarin (shih Cilësimet e projektit më poshtë).

## Cilësimet e projektit

Hapni {{ui:Cilësimet e projektit}} në panel:

- **Miratuesit**: një emër për rresht. Kur ka të tillë, vetëm ata mund të miratojnë një lëshim.
- **Miratuesi duhet të jetë dikush tjetër nga autori**: rregulli "katër sy".
- **Administratorët**: një emër për rresht. Kur ka të tillë, vetëm ata mund të thyejnë marrjen e dikujt tjetër ose të ndryshojnë këto cilësime.
- **Shkronjat e rishikimit për t'i lënë jashtë**: {{ui:Përdor sekuencën ASME Y14.35}} heq I, O, Q, S, X dhe Z, ose shkruani shkronjat tuaja. Shkronjat që janë dhënë mbeten; zgjedhja zbatohet për rishikimet e ardhshme.
- **Një marrje për redaktim bëhet e vjetëruar pas**: numri i ditëve (14 si parazgjedhje).

Zgjidhni {{ui:Ruaj cilësimet}}. Ndryshimi shkruhet në regjistër me emrin e atij që e bëri.

## Dikush la një skedar të marrë për redaktim

{{ui:Thyeje marrjen}} e liron një skedar që e ka marrë dikush tjetër (është larg, ose kompjuteri i tij u prish). Duhet të shkruani një arsye: ajo shkruhet në regjistër me emrin e atij që e kishte marrjen. Kur projekti ka administratorë, vetëm ata mund ta bëjnë këtë. Një marrje më e vjetër se 14 ditë shënohet si marrje e gjatë.

## Historiku, rishikimet, përdorimet, përdoret nga

Zgjidhni emrin e një skedari për të parë:

- {{ui:Historiku}}: çdo ngjarje, më e reja e para, me kë, cilin kompjuter dhe kur.
- {{ui:Rishikimet}}: çdo rishikim i ruajtur. Një kopje e çdo rishikimi ndodhet në depo (i njëjti përmbajtje ruhet vetëm një herë). {{ui:Hap kopje}} e hap atë rishikim si një kopje e thjeshtë që nuk mund ta mbishkruajë skedarin e depos. {{ui:Krahaso me}} tregon çfarë u shtua, u hoq dhe u ndryshua midis atij rishikimi dhe të mëparshmit (ose çdo tjetri që zgjidhni), dhe e ngjyros atë në vizatim.
- {{ui:Përdor}}: vizatimet që ai lidh (xref), dokumentet ku tregon një model IFC, pjesët e një montimi PartCraft.
- {{ui:Përdoret nga}}: çdo skedar në depo që e përdor këtë.

{{ui:Listë materialesh (CSV)}} ruan listën e gjithçkaje që përdor një skedar, nivel pas niveli, me sasitë, rishikimet dhe gjendjet, për një fletëllogaritëse.

## Një bllok rishikimi në fletë

Me një vizatim të hapur që ka një paraqitje, zgjidhni {{ui:Blloku i revizionit}}. Një tabelë e rishikimeve të lëshuara (rishikimi, data, nga, miratuar, përshkrimi) vizatohet në krye të djathtë të fletës që po shikoni. Kur miratoni një lëshim, tabela përditësohet.

## Rishikimi në bllokun e titullit

Jepini atributeve të bllokut të titullit një nga këto etiketa dhe zgjidhni {{ui:Plotëso kornizat e titullit}} në vizatimin e hapur:

| Etiketa | Mbushet me |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | rishikimin (B, ose B.2 ndërsa punohet) |
| `VAULT.STATE` | gjendjen (Lëshuar …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | datën e rishikimit më të fundit |
| `VAULT.APPROVER`, `APPROVED_BY` | kush miratoi lëshimin më të fundit |

## PartCraft dhe BimCraft

PartCraft dhe BimCraft kanë të njëjtin panel Dokumentet për skedarët e tyre: pjesë dhe montime në PartCraft, modele IFC në BimCraft. Regjistrimi ruan modelin që është hapur në dosjen e projektit, dhe një montim tregon cilat pjesë përdor dhe një listë materialesh.

## Të mirëdijë

- Dy persona në të njëjtën dosje të përbashkët nuk mund ta marrin të dy për redaktim të njëjtin skedar: marrja është një skedar që sistemi refuzon ta krijojë dy herë. Në një shfletues, dhe në një Studio me një bërthamë më të vjetër se kjo veçori, kjo është aq e rreptë sa lejon dosja: dy marrje në të njëjtën pjesë sekonde mund të shkojnë të dyja mirë. Paneli tregon cili zbatohet.
- Mos e ndryshoni ose fshini dosjen `.ccvault` me dorë. Regjistri brenda saj është të dhënat; depo rindërton listën e saj nga ai nëse nevojitet.
- Ndryshimi i një skedari në dosje pa e marrë për redaktim shfaqet si {{ui:Ndryshuar në dosje pa marrje për redaktim}}.
