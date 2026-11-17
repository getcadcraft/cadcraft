---
title: Punoni bashkë mbi një vizatim me Live TeamWork
summary: Çfarë ndryshon në CadCraft kur jeni në një sesion Live TeamWork nga CadCraft Studio: kursorët dhe përzgjedhjet e të tjerëve, objektet që dikush i redakton, kyçjet e pritësit, anulimi juaj, dhe bashkimi nga një shfletues në të njëjtin rrjet.
keywords: live, live teamwork, studio live, së bashku, bashkëpunim, bashkëredaktim, sesion, ndaj live, bashkohu, kursor, mbajtur, redaktim, kyçje, livelock, liveunlock, livehold, mbaj shtresën, mbaj zonën, katenac, zhbëj, pritës, asistent, i njëjti skedar, shumë njerëz, ngadalë, kufi, kush ndryshoi, ndryshimet e fundit, regjistri i redaktimeve
from: 0497d2a3
---

## Çfarë do të mësoni

Çfarë shihni dhe çfarë ndodh me redaktimet tuaja ndërsa disa persona punojnë në të njëjtin vizatim njëkohësisht. CadCraft Studio fillon dhe bashkohet me sesionin Live TeamWork (Ndaj live, Bashkohu); kjo faqe ka të bëjë me vetë vizatimin.

## Të gjithë vizatojnë njëkohësisht

Vizatoni dhe redaktoni si zakonisht. Redaktimet tuaja shfaqen menjëherë, edhe para se të tjerët t'i kenë, dhe të tjerat shfaqen në ekranin tuaj pak pas kohës që i bëjnë. Çdo komandë punon: vizatim, modifikim, shtresa, bllokje, fletë, përmasa, kufizime.

Dy persona mund të ndryshojnë të njëjtin objekt. Kur ndryshoni gjëra të ndryshme, si ngjyra dhe një pikë fundi të një vije, të dyja ndryshimet mbahen. Kur ndryshoni të njëjtën gjë, ndryshimi i fundit fiton.

Çfarë mbetet vetëm e juaja: shtresa aktuale, ngjyra dhe lartësia e tekstit për objekte të reja, cilësimet tuaja të përmasave, pamja juaj, ndarja e ekranit dhe UCS. Vizatimi është i përbashkët; mënyra si e shikoni nuk është.

## Të tjerët në vizatimin tuaj

- **Kursorët:** treguesi i çdo personi shfaqet me emrin e tij në ngjyrën e vet, dhe komanda që po ekzekuton. Shihni kursorët e atyre që punojnë pranë asaj që është në ekranin tuaj.
- **Përzgjedhjet:** ajo që dikush ka përzgjedhur konturohet me ngjyrën e tij.
- **Duke u redaktuar:** një objekt që dikush e ka përzgjedhur mban një etiketë si "Ana po e redakton". Mund ta ndryshoni ngjyrën ose ta zhvendosni, por nuk mund ta fshini, ta shpërbëni ose ta ridaktoni derisa ta lëshojë. Përzgjedhja e tij ju thotë kush e ka.
- **Kush e ndryshoi të fundit:** përzgjidhni një objekt që dikush tjetër e ka ndryshuar në këtë sesion dhe rreshti i komandës thotë kush, dhe çfarë ishte ndryshimi ("Ben e ndryshoi këtë së fundi: CIRCLE."). Paneli Live i Studio liston çdo redaktim të fundit nën {{ui:Ndryshimet e fundit}}. Asgjë nga kjo nuk ruhet në vizatim: zgjat sa sesioni.

## Mbani një shtresë ose një zonë ndërsa punoni aty

Në një vizatim të madh me disa persona, thoni cila pjesë është tuajja për tani:

1. Shkruani `LIVEHOLD` dhe shtypni {{key:Enter}}.
2. Zgjidhni `L` dhe shkruani një emër shtrese (Enter mban shtresën aktuale), ose zgjidhni `A` dhe klikoni dy këndet e një zone.
3. Redaktimet e të tjerëve në atë shtresë, ose te objektet në atë zonë, merren mbrapsht dhe u thuhet se po punoni aty. Ju e shihni zonën tuaj si kornizë me vija; të tjerët e shohin me ngjyrën tuaj dhe emrin tuaj, dhe shtresat që mbani listohen lart majtas në vizatimin e tyre.
4. `LIVEHOLD`, pastaj `R`, lëshon çdo gjë që mbani. Largimi nga sesioni e lëshon edhe ai.

Kushdo në sesion mund të mbajë, përfshirë pritësin; kyçjet e pritësit zbatohen përveç kësaj. Një mbajtje nuk ruhet kurrë në skedar.

## Kur një redaktim merret mbrapsht

Kopja e pritësit e vizatimit kontrollon çdo redaktim. Disa nuk mund të hyjnë, dhe CadCraft i merr mbrapsht në ekranin tuaj dhe thotë arsyen te rreshti i komandës, për shembull:

- dikush fshiu objektin, ose shtresën ose blloku që i duhet, pak para jush;
- dikush po e redakton atë objekt, ose mban shtresën e tij ose zonën ku ndodhet;
- pritësi e kyçi;
- blloku që vendosni u pastrua, ose një shtresë që fshini ka ende objekte mbi të.

## Zhbëni zhbën punën tuaj

{{key:Mod+Z}} dhe {{ui:Zhbëj}} zhbëjnë komandën tuaj të fundit, të gjithën, dhe lënë punën e të tjerëve të paprekur. Kur dikush e ka ndryshuar të njëjtën gjë që atëherë, asgjë nuk zhbëhet dhe rreshti i komandës thotë kush e ndryshoi. {{key:Mod+Y}} ribën.

## Kyçjet (pritësi)

Pritësi mund t'i mbrojë objektet ose një shtresë të tërë, që askush të mos i ndryshojë, përfshirë pritësin, derisa të zhkyçen:

1. Përzgjidhni objektet, pastaj shkruani `LIVELOCK` dhe shtypni {{key:Enter}}. Ose shkruani `LIVELOCK` pa asgjë të përzgjedhur dhe zgjidhni `L` për të kyçur një shtresë me emër: objektet e shtuara më vonë në atë shtresë kyçen gjithashtu.
2. Objektet e kyçura vizatohen me vija të ndërprera dhe etiketën "Kyçur nga pritësi" në ekranin e të gjithëve.
3. `LIVEUNLOCK` i zhkyç në të njëjtën mënyrë.

Kyçjet i përkasin sesionit: mbarojnë kur mbaron ai dhe nuk ruhen kurrë në skedar.

## Bashkohuni me të njëjtin skedar

Nëse e hapët të njëjtin skedar që hapi pritësi (nga një dosje e përbashkët ose e njëjta kopje), bashkohuni nga dritarja juaj CadCraft në Studio: hapni panelin {{ui:Live}} dhe përdorni {{ui:Bashkohu këtu}} me kodin e pritësit. Udhëtojnë vetëm ndryshimet e bëra që kur pritësi e hapi, kështu që një vizatim i madh është gati menjëherë. Nëse skedari juaj është një tjetër, vizatimi i pritësit zëvendëson atë në ekranin tuaj (skedari juaj mbetet ashtu siç është). Kjo punon vetëm ndërsa vizatimi juaj nuk është ndryshuar që kur e hapët.

## Asistentët në një sesion live

Një asistent i lidhur me dritaren tuaj CadCraft (shih ndihmën për punën me asistentët AI) bashkohet me sesionin si pjesëmarrës i vet, i shfaqur për të gjithë si "Asistent (nëpërmjet <emri juaj>)". Pritësi e lejon të hyjë, si për një person; asistenti i pritësit bashkohet menjëherë. Ndryshimet e tij kanë anulimin e tyre: {{key:Mod+Z}} juaj zhbën punën tuaj, dhe zhbërja e asistentit zhbën vetëm veprimet e vetë. Largohet nga sesioni kur e shkëputni ose largoheni, dhe mund të punojë në sesion vetëm ndërsa ju mund të redaktoni.

## Bashkohuni nga një shfletues

Një bashkëpunëtor pa Studio mund të skanojë figurën me kodin e pritësit me një telefon, tablet ose kompjuter në të njëjtin rrjet. CadCraft hapet në shfletues, kërkon emrin tuaj në rreshtin e komandës, dhe mbushet me vizatimin e pritësit sapo pritësi ju lejon të hyni. Një lidhje ftese e lejon dikë të bashkohet nga një rrjet tjetër: pritësi ka nevojë për një vend Team Cloud Plan për aplikacionin, të tjerët bashkohen falas, dhe lidhja punon vetëm ndërsa sesioni i pritësit është i hapur.

## Shumë njerëz në një vizatim

Çdo redaktim shkon te të gjithë në sesion, kështu që sa më shumë persona të jenë, aq më shumë kohë i duhet çdo ndryshimi për të arritur te secili prej tyre, dhe laptopët dhe lidhjet më të ngadalta mbeten pas të parët. Madhësia e zakonshme e një sesioni është 20 persona; pritësi mund të lejojë më shumë për një sesion (shihni ndihmën për punën bashkë live). Nëse vizatimi ndihet i ngadaltë me shumë persona, më pak persona, më pak prej tyre që redaktojnë njëkohësisht, ose një lidhje më e mirë ndihmojnë.

## Kur mbaron sesioni

Vetëm pritësi e ruan vizatimin. Kur pritësi mbyll sesionin, të tjerët mbajnë një kopje të pa ruajtur: ruajeni nëse doni ta mbani.

:::note
Diçka e marrë mbrapsht vizatohet mbi objektet përreth në ekranin tuaj deri sa ta rihapni vizatimin. Hatch-et dhe objektet e mbushur që mbivendosen mund të duken ndryshe nga kopja e pritësit; vetë vizatimi është i njëjtë.
:::
