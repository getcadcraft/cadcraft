---
title: Dokumentet dhe rishikimet (depoja)
summary: Një udhëzues hap pas hapi mbi një punë reale: vër një dosje projekti nën kontroll, merr një vizatim për redaktim, ndryshoje, regjistroje me një shënim, dërgoje për shqyrtim, mirato dhe lësho, shiko historikun dhe çfarë e përdor, çfarë shikon një person tjetër ndërsa është i kyçur, dhe si punon me dosjet në cloud.
keywords: depo, dokumente, udhëzues, mësim, merr për redaktim, regjistro, rishikim, lëshim, miratim, kyçje, historik, ku përdoret, dosje cloud, dosje projekti, menaxhim dokumentesh, pdm, dy persona, dosje e përbashkët
from: 3829528d
---

## Çfarë do të bëni

Ju jeni Ana, duke punuar te Klinika Riverside me një koleg, Ben. Vizatimet e projektit jetojnë në një dosje që të dy e arrini (një disk i përbashkët, një dosje e sinkronizuar, ose një dosje cloud). Në fund, një skedar ka kaluar nga kopja e parë në një rishikim të lëshuar **A**, është ndryshuar sërish si **B.1**, keni parë kush bëri çfarë, dhe keni parë çfarë shikon Ben kur e mban ju skedarin.

Gjithçka mbahet në një dosje të fshehur `.ccvault` pranë skedarëve tuaj: pa server, pa asgjë të ngarkuar (dosja cloud është përjashtimi, shihni hapin e fundit). Për çdo buton dhe rregull në një vend, shihni temën *Dokumentet: merr për redaktim, rishikimet dhe lëshimi* aty ku e ka aplikacioni juaj.

## 1. Caktoni dosjen e projektit

1. Zgjidhni {{ui:Dokumentet…}} te menyja {{ui:Më shumë}} e skedës **Pamje**, ose shkruani `DOCUMENTS` (ose `DOCS`) dhe shtypni {{key:Enter}}.
2. Zgjidhni {{ui:Zgjidh dosjen e projektit}} dhe zgjidhni dosjen që mban vizatimet e projektit. (Dosjet e projektit funksionojnë në Studio dhe në shfletues që mund të hapin një dosje, si Chrome dhe Edge. Në shfletues të tjerë paneli e thotë këtë.)
3. Zgjidhni {{ui:Ndrysho}} pranë **Ti:** dhe shkruani emrin tuaj, `Ana` (nëse pyet, edhe emrin e këtij kompjuteri). Paneli tani thotë *Ti: Ana në* dhe kompjuterin tuaj. Emri juaj shkon mbi çdo gjë që bëni.
4. Zgjidhni {{ui:Krijo një depo në këtë dosje}} dhe shkruani emrin e projektit, `Klinika Riverside`. Paneli thotë *Depoja u nis për Klinika Riverside.*

## 2. Vër një skedar nën kontroll

1. Hapni **Skedarët jashtë depos** dhe zgjidhni {{ui:Shto (A)}} pranë `plans/A-101.dxf`.
2. Ai shfaqet nën **Skedarët në depo** me rishikimin **A.1**, gjendja **Punë në vazhdim**. A.1 është kopja e tij e parë; depoja mban një kopje të çdo rishikimi.

## 3. Merr për redaktim, ndrysho, regjistro

1. Zgjidhni {{ui:Hap}} pranë `plans/A-101.dxf`. Vizatimi hapet në CadCraft dhe paneli mbyllet që ta shihni. Paneli është akoma një komandë larg: `DOCUMENTS`.
2. Hapeni sërish panelin dhe zgjidhni {{ui:Merr për redaktim}}. Rreshti tani thotë **Marrë për redaktim nga ju**. Një skedar kyçjeje është krijuar në `.ccvault/locks`; askush tjetër nuk mund ta marrë këtë skedar për redaktim deri sa ta regjistroni.
3. Vizatoni diçka: shtoni një vijë, zhvendosni një mur. Asgjë që bëni nuk mund të ruhet mbi skedarin e depos përveç nëse vizatimi është marrë për redaktim nga ju; Ruaj si gjithmonë funksionon për një kopje tuajën.
4. Hapeni panelin, zgjidhni {{ui:Regjistro}} dhe shkruani çfarë ndryshoi (`Zhvendosa derën`). Paneli thotë *u regjistrua si A.2*. Skedari në dosjen e projektit është tani vizatimi që kishit hapur, dhe kyçja hiqet. Regjistrimi pa asnjë ndryshim e mban rishikimin.

Nëse ndryshoni mendje, {{ui:Zhbëj marrjen}} ia kthen skedarin pa rishikim të ri.

## 4. Shqyrtim dhe lëshim

1. Zgjidhni {{ui:Dërgo për shqyrtim}}. Gjendja bëhet **Për shqyrtim** dhe skedari bëhet vetëm për lexim.
2. Përpara miratimit, zgjidhni {{ui:Cilësimet e projektit}} dhe listoni kush mund të miratojë (një emër për rresht), për shembull `Ben` dhe `Carla`, dhe shënoni rregullin që miratuesi duhet të jetë dikush tjetër nga autori. Zgjidhni {{ui:Ruaj cilësimet}}. Tani vetë depoja refuzon të tjerët.
3. Ben (ose Carla) zgjedh {{ui:Miratoje}} dhe shkruan emrin e miratuesit. Gjendja bëhet **E lëshuar** dhe rishikimi bëhet **A**, me *miratuar nga* dhe emrin. Një skedar i lëshuar është vetëm për lexim. {{ui:Ktheje}} do ta kthente në Punë në vazhdim, me një arsye.

Emri i miratuesit është emri i shkruar në panel; është një regjistrim i kujt e nënshkroi, jo një provë identiteti.

## 5. Një rishikim i ri

1. Te skedari i lëshuar, zgjidhni {{ui:Rishikim i ri}}. E mbani për shkronjën e radhës.
2. Ndryshoni, pastaj {{ui:Regjistro}}. Rishikimi është **B.1**, punë në vazhdim. Lëshojeni në të njëjtën mënyrë dhe bëhet **B**. {{ui:Zhbëj marrjen}} para regjistrimit të parë e lë në **A**.

Shkronjat e rishikimit ndjekin A, B … Z, AA, AB. Nëse standardi juaj heq disa shkronja, cilësimi i projektit *Përdor sekuencën ASME Y14.35* kalon I, O, Q, S, X dhe Z për rishikimet e ardhshme.

## 6. Shihni çfarë ndodhi

Zgjidhni emrin e skedarit për të hapur detajet e tij:

- **{{ui:Historiku}}**: çdo ngjarje, më e reja e para, me kush, cili kompjuter dhe kur: *Regjistruar A.2* nga Ana, *Lëshuar* nga Ben, e kështu me radhë.
- **{{ui:Rishikimet}}**: tabela e rishikimeve. {{ui:Hap kopje}} hap një rishikim si kopje të thjeshtë që nuk mund ta mbishkruajë skedarin e depos; {{ui:Krahaso me}} liston çfarë u shtua, u hoq dhe u ndryshua krahasuar me rishikimin para tij, ose me çfarëdo tjetër.
- **{{ui:Përdor}}**: vizatimet me të cilat lidhet (xref).
- **{{ui:Përdoret nga}}**: lista e çdo vizatimi tjetër në depo që lidhet me këtë: ndryshoni një plan bazë dhe e dini cilat fletë duhet të kontrolloni.

## Rishikimi në fletë

Me vizatimin e hapur (dhe me një paraqitje brenda), zgjidhni {{ui:Blloku i revizionit}}: një tabelë e rishikimeve të lëshuara vizatohet lart djathtas të fletës. Zgjidhni {{ui:Plotëso kornizat e titullit}} për të plotësuar atributet e kornizës së titullit të etiketuara `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` ose `APPROVED_BY` me rishikimin, gjendjen, datën dhe miratuesin e skedarit. Kur miratoni lëshimin e radhës, blloku i rishikimit përditësohet.

## 7. Çfarë shikon Ben ndërsa e mban ju skedarin

Tani merrni sërish skedarin për redaktim, dhe i kërkoni Ben-it të hapë të njëjtën dosje projekti në kompjuterin e tij dhe të hapë panelin. Te rreshti i skedarit ai sheh **Marrë për redaktim nga Ana** në kompjuterin tuaj **që nga** ora, dhe nuk ka buton {{ui:Merr për redaktim}}. Nëse provon ta bëjë edhe pse, depoja e refuzon: kyçja është një skedar që sistemi nuk e krijon dy herë, kështu që dy persona nuk mund ta mbajnë skedarin njëkohësisht, edhe në të njëjtën pjesë sekonde, kur dosja është në disk në Studio. (Në një shfletues, dosja lejon vetëm një përpjekje të mirëfilltë, dhe paneli e thotë këtë te **Dosja**.)

Nëse Ana është larg dhe Ben ka nevojë për skedarin, {{ui:Thyeje marrjen}} e liron. Ai duhet të shkruajë një arsye; ajo shkon te regjistri bashkë me emrin e kujt ishte marrja. Kur projekti liston administratorë, vetëm ata mund ta bëjnë këtë. Një marrje më e vjetër se kufiri i vjetërsisë (14 ditë si parazgjedhje) shënohet *shumë kohë*. Pas thyerjes, regjistrimi i vonuar i Anës refuzohet, kështu që ju dy nuk mund ta mbishkruani njëri-tjetrin.

## 8. Dosjet në cloud

Një dosje cloud është një dosje projekti e mbajtur në hapësirën cloud të ekipit tuaj, kështu që ekipi nuk ka nevojë për disk të përbashkët. Në Studio, i kyçur në llogarinë tuaj CadCraft, paneli shfaq {{ui:Hap një dosje në cloud}} pranë {{ui:Zgjidh dosjen e projektit}}. Zgjidheni dhe zgjidhni dosjen, e listuar si hapësirë pune / dosje. Pronari i hapësirës së punës e krijon dosjen së pari, dhe hapësira cloud e ekipit duhet të jetë aktive. Gjithçka më sipër funksionon njësoj; serveri e krijon kyçjen, e cila është e rreptë mes personave. Nëse nuk jeni kyçur, paneli ju thotë të kyçeni. Në një skedë shfletuesi të zakonshme butoni i cloud nuk ofrohet; përdorni Studio.

## Provojeni

Bëni tetë hapat më sipër me një kopje të një skedari real. Për hapat me dy persona ju duhet një person tjetër, ose dy dritare me dy emra. Nëse e provoni me një dosje të vërtetë të përbashkët, faqja e testimit të komunitetit ka një kontroll që kërkon pikërisht këtë, dhe pranon rezultatet.
