---
title: Skedarët: çfarë hapet, çfarë ruhet
summary: Formatet që CadCraft hap, ruan dhe eksporton, çfarë mbahet ose konvertohet, dhe ku shkojnë skedarët.
keywords: xclip, clip, kufiri xclip, lidh të prerën, dwg, dxf, pdf, r12, hap, ruaj, eksporto, importo, formate, konvertim, shkarko, saveas, dxfout, ruaj si, ruajtja dwg, format, qsave, xref, xattach, vizatim i lidhur, referencë e jashtme, lidh, ringarko, shkëput
from: 6d68b34e
---

## Me një sy

| Formati | Hap | Ruaj | Shënime |
|---|---|---|---|
| DXF (tekst, çdo version) | Po | Po, si DXF R12 ose DXF 2000 | DXF binar refuzohet: ruaje më parë si DXF tekst. |
| DWG | Po | Po, si DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ose 2018) | Lexohet dhe shkruhet nga biblioteka DWG e vetë CadCraft (skedarë AutoCAD R13 deri 2018). DWG yt nuk ndryshohet kurrë. Skedarët e dëmtuar, ose versionet që lexuesi nuk i trajton, refuzohen me një mesazh. |
| PDF | Sjell një faqe: si nënshtresë ose si objekte ([Nënshtresat PDF](topic:pdf-underlay)) | Po, me printim | PDF vektorial i një fletë, ose i modelit në një shkallë. |

Çdo vizatim që hap (ose e nis me {{ui:E re}}) merr skedën e vet mbi zonën e vizatimit; një vizatim i ri që askush nuk e ka prekur ende përdoret në vend që të shtohet një skedë. Kliko një skedë për të ndërruar, {{ui:×}} për ta mbyllur (CadCraft pyet së pari nëse ka ndryshime të pa ruajtura), ose vendos vizatimet e hapura pranë njëri-tjetrit: shih [Ndaje ekranin](topic:split-screen).

## Hapja e një vizatimi

- Shtyp {{key:Mod+O}}, kliko {{ui:Hap}}, ose shkruaj `OPEN`, dhe zgjidh skedarin.
- Ose tërhiq një skedar `.dwg` ose `.dxf` mbi zonën e vizatimit.

Skedari lexohet brenda shfletuesit tënd. Nuk ngarkohet askund. Historiku raporton sa objekte dhe shtresa erdhën dhe sa zgjati, dhe seksioni {{ui:Vizatim}} i panelit të majtë tregon formatin, për shembull "DWG 2018 (AC1032)".

Lexuesi i DWG është pjesë e CadCraft dhe sillet me DWG-në e parë që hap pasi ngarkohet faqja (disa qindra KB), kështu që nuk ka shkarkim të veçantë për të pritur. Ai e lexon skedarin në sfond, kështu që faqja vazhdon të përgjigjet ndërsa një DWG i madh hapet.

### Çfarë hyn

- Vija, harqe, rrathë, polivija (me segmente harku), elipse, pika, tekst dhe tekst me shumë rreshta, solide, vijëzime (modelet standarde të vizatuara si vijat e tyre, të tjerat si ton i sheshtë), referenca blloqesh me atributet e tyre (vlera që mund t'i redaktosh; shih [Atributet e blloqeve](topic:attributes)), përmasa, dhe paraqitje me dritaret e tyre të pamjes.
- Splinet hyjnë si spline (shkalla, pikat e kontrollit, nyjet, peshat, pikat e përshtatjes); shih [Splinet dhe polivijat](topic:splines).
- Udhëheqësit e shumëfishtë me një vijë udhëheqëse dhe tekst hyjnë si shumë-udhëheqës CadCraft që mund t'i redaktosh (shih {{cmd:MLEADER}}). Të tjerët (me një bllok, disa vija udhëheqëse ose vija të lakuara) vizatohen ashtu si i vizatoi programi tjetër dhe lëvizin si një e tërë; historiku thotë sa janë.
- Figurat (imazhet) shfaqen si kornizë me emrin e skedarit të figurës derisa t'i japësh CadCraft skedarin me {{cmd:IMAGE}}: shih [Figurat në vizatim](topic:pictures#show-the-pictures-a-dwg-uses). Wipeout-et shfaqen si kornizë e tyre, dhe ajo që është poshtë tyre mbetet e dukshme.
- Tabelat në një DWG hyjnë ashtu si i vizatoi programi tjetër.
- Sipërfaqet 3D në hapësirën e modelit hyjnë në skedën {{ui:3D}}, jo si objekte 2D; po ashtu ato brenda blloqeve, një herë për çdo referencë bloku në model. Në një bllok dhe në një fletë vizatohen gjithashtu të sheshta, si kontura. Shih [Modeli në 3D](topic:3d-solids).
- Shtresat mbajnë ngjyrën, ndezur, ngrirë, kyçur dhe cilësimet e printimit. DEFPOINTS nuk printohet kurrë.
- Përmasat bëhen përmasa reale, të redaktueshme CadCraft aty ku mund të lexohen pikat e tyre. Fillimisht shfaqen saktësisht si i vizatoi programi tjetër; sapo ndryshon një, CadCraft e rivizaton me stilin e vet.
- Çdo paraqitje bëhet një skedë fletë. Në programin tjetër çdo paraqitje ka një dritare pamjeje të fshehur të parë që është vetë fleta; CadCraft e lë atë jashtë.

### Çfarë s'hyn ende

Çdo gjë që CadCraft s'mund ta vizatojë numërohet, nuk merret me supozim. Kutia "About this file" në panelin e majtë e liston si "Not shown yet:" pasuar nga çdo lloj objekti dhe sa janë. Rastet tipike janë tabelat në një DXF, rrjetat dhe solidet 3D brenda blloqeve. Solidet 3D, rajonet dhe trupat në hapësirën e modelit shfaqen te skeda 3D (shih [Modeli në 3D](topic:3d-solids#solids-from-other-programs)). Dritaret e pamjes të përdredhura në skedar shfaqen të rrotulluara, si atje, dhe e mbajnë përdredhjen kur ruan; po ashtu UCS-ja aktuale, UCS-të e emërtuara dhe një pamje e rrotulluar.

Teksti vizatohet me një shkronjë në stilin Helvetica. Një etiketë që përshtatet në një rresht në shkronjën më të ngushtë të programit origjinal mund të mbështillet në dy rreshta në CadCraft.

## Ruajtja

Ka tre mënyra për të ruajtur. Secila shkarkon një kopje.

- **Ruaj**: shtyp {{key:Mod+S}}, kliko {{ui:Ruaj}}, ose shkruaj `SAVE` (edhe `QSAVE`). Ruan në formatin e vizatimit: DWG nëse hape një DWG, DXF nëse hape një DXF. Një DWG mban versionin me të cilin erdhi (një skedar 2018 ruhet si 2018). Një vizatim i ri përdor formatin dhe versionin DWG që zgjodhe të fundit te {{ui:Ruaj si}} në këtë shfletues; nëse nuk zgjodhe kurrë, DWG në formatin AutoCAD 2000.
- **Ruaj si**: shtyp {{key:Mod+Shift+S}}, kliko {{ui:Ruaj si}}, ose shkruaj `SAVEAS`. Dialogu {{ui:Ruaj një kopje si}} ofron {{ui:DWG}}, me një listë {{ui:Versioni}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ose 2000), {{ui:DXF R12}} dhe {{ui:DXF 2000}}, secili me emrin e skedarit që do t'i japë, dhe formatin dhe versionin aktual të vizatimit të zgjedhur tashmë. Kliko {{ui:Ruaj}} për të shkarkuar, ose {{ui:Anulo}} (ose {{key:Esc}}) për të mos ruajtur asgjë; historiku thotë atëherë "Not saved." Ajo që zgjedh qëndron: {{key:Mod+S}} e përdor për këtë vizatim që nga atëherë, dhe vizatimet e reja në këtë shfletues fillojnë me të.
- **DXFOUT**: shkruaj `DXFOUT`. Shkarkon gjithmonë një kopje DXF R12, dhe {{key:Mod+S}} i radhës ruan sërish në formatin e vetë vizatimit.

Shfletuesi shkarkon `<emri i vizatimit>.dwg` ose `<emri i vizatimit>.dxf`. Çdo ruajtje është një **shkarkim i ri**; skedari që hape nuk mbishkruhet ose ndryshohet kurrë. Historiku e konfirmon, për shembull "Saved a copy as Plan.dwg (DWG (AutoCAD 2018)). Your original Plan.dxf is unchanged." Për një DXF thotë "(DXF R12, opens in any CAD program)". Rreshtat poshtë tij listojnë çdo gjë që u ndryshua gjatë rrugës.

Kur CadCraft punon në aplikacionin desktop, ruajtja funksionon si në programet e tjera desktop: {{key:Mod+S}} shkruan vizatimin përsëri te skedari që hape, në formatin dhe versionin e vet, dhe historiku thotë ku u ruajt. {{ui:Ruaj si}} dhe eksportet shfaqin dialogun e ruajtjes së sistemit, dhe një skedar `.dwg`, `.dxf` ose `.ccsheets` që hap me dy klikime hapet në CadCraft.

Për një PDF, printo në vend të kësaj (shih më poshtë).

## Çfarë mban dhe ndryshon një DWG

CadCraft e shkruan vetë DWG-në, brenda shfletuesit tënd, me të njëjtën bibliotekë DWG me të cilën e lexon. Zgjidh versionin te Ruaj si: formati AutoCAD 2000 (versioni i skedarit AC1015) hapet në shumicën e programeve, edhe ato të vjetra; formatet më të reja (2004, AC1018, deri 2018, AC1032) mbajnë edhe ngjyra reale. Asgjë nuk ngarkohet, dhe ruajtja e një DWG funksionon pa lidhje.

Çdo version kontrollohet duke i lexuar përsëri skedarët e ruajtur me lexuesit DWG të tre programeve të tjera dhe me vetë CadCraft. Një DWG i CadCraft nuk është hapur ende në vetë AutoCAD.

### Çfarë mban një DWG

- Vija, harqe, rrathë, elipse, pika dhe polivija me segmentet e tyre harku.
- Tekst me një rresht me drejtimin dhe faktorin e gjerësisë së tij.
- Tekst me shumë rreshta dhe të mbështjellë, si tekst me shumë rreshta. Programi tjetër e mbështjell përsëri nga e njëjta gjerësi.
- Ngjyrat e objekteve: sipas shtresës, sipas bllokut, 255 ngjyrat standarde, dhe ngjyra reale në formatin 2004 e më të ri.
- Shtresat me ngjyrën, llojin e vijës, gjerësinë e vijës dhe cilësimet e tyre ndezur, ngrirë, kyçur dhe printim; llojet e vijës së objekteve, gjerësitë dhe shkallët e llojit të vijës, modelet e llojeve të vijës dhe shkalla e llojit të vijës të vizatimit.
- Njësitë e vizatimit dhe formati i gjatësisë (decimal, këmbë dhe inç, thyesa…).
- Blloqet me pikën e tyre bazë dhe përcaktimet e atributeve, duke përfshirë ato të padukshme, konstante dhe të parapërcaktuara.
- Referencat e blloqeve me shkallën, rrotullimin dhe vlerat e atributeve të tyre.
- Mbushjet e ngurta, dhe vijëzimet me model me modelin, shkallën dhe kënddin e tyre (vetë vijat e modelit, që programet e tjera të vizatojnë të njëjtat vija si CadCraft).
- Përmasat, si përmasa reale: programet e tjera i rimatin kur shtrihen. Çdo një mban cilësimet e veta (lartësinë e tekstit, madhësinë e shigjetës, decimalet, formatin e gjatësisë) dhe tekstin e vet, dhe mbart kopjen e vizatuar që ka çdo përmasë DWG.
- Fletët (paraqitjet): çdo fletë me madhësinë e letrës dhe njësitë e saj, çfarë vizatohet mbi të, dhe dritaret e saj të pamjes me pamjen dhe shkallën e tyre.
- Pamjet e emërtuara.
- Udhëheqësit e shumëfishtë, si udhëheqës të shumëfishtë.
- Emrat e shtresave dhe blloqeve siç i shkrove, me shkronja të mëdha dhe të vogla. (DXF R12 i shkruan me shkronja të mëdha.)

### Çfarë ndryshon një DWG

Secila prej këtyre listohet në historik pasi ruan, kur zbatohet te vizatimi yt.

| Në CadCraft | Në DWG-në e ruajtur |
|---|---|
| Ngjyra reale (zgjedhur me zgjedhësin e ngjyrave), në formatin 2000 | Ngjyra standarde më e afërt: formati 2000 ka vetëm 255. Ruaje si 2004 ose më të ri për t'i mbajtur |
| Pamje të emërtuara të një fletë | Pamje në hapësirën e letrës: një DWG nuk thotë cilën fletë, kështu që kur CadCraft e hap sërish skedarin, i takojnë fletës së parë |
| Tekst me shumë rreshta me faktor gjerësie | Gjerësi normale shkronjash: në një DWG faktori i gjerësisë vlen vetëm për tekst me një rresht |
| Emrat e shtresave ose blloqeve me karaktere që DWG s'i lejon | Ndryshuar: një emër nga një vizatim i lidhur si `Base\|Walls` bëhet `Base$0$Walls` (mënyra si e emërton lidhja e vizatimit të lidhur), dhe karakteret e tjerë bëhen `_` |

### Pse R12, dhe çfarë konvertohet

Kur ruan si DXF, CadCraft shkruan DXF R12, versionin që çdo program CAD mund ta hapë. Është më i vjetër se disa veçori, kështu që disa gjëra shkruhen në formë më të thjeshtë:

| Në CadCraft | Në skedarin R12 të ruajtur |
|---|---|
| Tekst me shumë rreshta | Një objekt tekst për rresht |
| Elipset | Polivija që ndjekin elipsin |
| Vijëzimet (nga skedarë të hapur) | Vetëm konturet e tyre |
| Ngjyra reale (zgjedhur me zgjedhësin e ngjyrave) | Ngjyra standarde më e afërt |
| Gjerësitë e vijës, dhe shkallët e llojit të vijës të objekteve | Lënë jashtë: R12 nuk ka asnjërën (llojet e vijës mbahen) |
| Emrat e shtresave dhe blloqeve | Shkruhen me shkronja të mëdha; hapësirat dhe karakteret e tjerë bëhen `_`, dhe emrat pritën në 31 karaktere ("Title block" bëhet `TITLE_BLOCK`) |
| Shtresat e vendosura të mos printohen | Programet e tjera do t'i printojnë (CadCraft e mban mend cilësimin kur vizatimi ka një fletë) |
| Përmasat | Përmasa reale me bllokun e tyre të vizatuar, kështu që programet e tjera i shfaqin ashtu si i sheh ti |
| Udhëheqësit e shumëfishtë | Vijat, koka e shigjetës dhe teksti që vizatojnë |
| Pamjet e emërtuara | Mbahen, me emra me shkronja të mëdha; pamjet e një fletë kthehen te fleta e parë |
| Disa fletë | Fleta e parë është hapësira e letrës që çdo program e shfaq; të tjerat mbahen si blloqe me emrin `CCLAYOUT_1`, `CCLAYOUT_2` … që CadCraft i kthen në fletë kur hap skedarin |

Historiku liston secilën prej këtyre që u zbatuan te vizatimi yt.

:::tip
Për të punuar me një vizatim gjatë disa ditëve, ruaje si DXF dhe hape atë DXF herën tjetër. Gjithçka që CadCraft mund të vizatojë mbijeton kthimin, përfshirë përmasat, blloqet dhe të gjitha fletët.
:::

## Vizatimet e lidhura (referenca të jashtme)

{{cmd:XATTACH}} (`XA`, ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Lidh një vizatim (xref)}}) lidh një DWG ose DXF tjetër: zgjidh skedarin, pastaj kliko ku shkon ({{key:Enter}} e vendos në 0,0). Hyn si një bllok i vetëm me emrin e skedarit, në shkallën e duhur kur dy vizatimet kanë njësi të ndryshme. Shtresat dhe blloqet e tij mbajnë emrat e tyre me emrin e lidhjes përpara, si `Plan|Walls`, `Plan|Door`, kështu që nuk përzihen kurrë me tyret: ndiz dhe fik shtresat e lidhura, ngri ose kyç ato si shtresat e tua. Një lidhje është vetëm për lexim: ndrysho vizatimin tjetër dhe ringarkoje. Çfarë cakton për shtresat e një lidhjeje (ngjyrën, llojin e vijës, gjerësinë, ndezur/fikur, ngrirjen, kyçjen, printimin) mbahet kur e ringarkon, kur ruan vizatimin si DWG ndërsa lidhja është ende lidhje, dhe kur një vizatim tjetër lidh këtë.

{{cmd:XREF}} (`XR`): `?` liston lidhjet (të ngarkuara ose jo, cilin skedar, sa referenca); `A` bashkon; `R` ringarkon një lidhje nga skedari i vet (zgjidh sërish skedarin: shfletuesi nuk mund t'i arrijë dosjet e tua vetë); `B` e lidh (bëhet blloqe dhe shtresa të zakonshme me emrin `Plan$0$Walls`); `D` e shkëput (referencat dhe shtresat e saj zhduken). Secila është një hap zhbërjeje.

{{cmd:XCLIP}} (`XC`) pret referencat e blloqeve dhe lidhjet: zgjidhi, `N` për kufi të ri, pastaj `R` dhe dy qoshe ose `P` dhe pikat e një shumëkëndëshi ({{key:Enter}} e mbyll); `D` heq prerjen. Vetëm ajo që është brenda shfaqet dhe printohet, dhe prerja lëviz me referencën. DWG dhe DXF 2000 mbajnë prerjet; DXF R12 ruan referencën të plotë dhe e thotë këtë. Kur lidh një lidhje që ka referenca të prera, {{cmd:XREF}} `B` pyet: `A` lidh gjithçka, `C` mban vetëm pjesën e prerë të çdo reference (vijat dhe harqet priten në kufi; tekstet dhe blloqet e brendshme mbeten kur pika e tyre e futjes është brenda).

Një vizatim që hap mund të lidhë skedarë që CadCraft s'i sheh: thotë sa nuk janë ngarkuar. Përdor {{cmd:XREF}}, `R` dhe zgjidh çdo skedar për t'i parë.

Kur ruan, një lidhje e ngarkuar **lidhet** në skedar (programet e tjera shohin blloqe dhe shtresa të zakonshme me emrin `Plan$0$…`), dhe historiku e thotë këtë. Një lidhje që nuk është ngarkuar mbetet lidhje me skedarin e vet, në DWG dhe DXF.

## Hap në 3D

{{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Hap në ModelCraft}} ({{cmd:OPENIN3D}}) hap vizatimin në aplikacionin e modelimit 3D në një skedë të re, si DWG, pa e ngarkuar. Ndryshimet e bëra atje mbeten atje; ruaji ato atje. Elementi i menusë shfaqet vetëm aty ku ai aplikacion mund të marrë një vizatim të dorëzuar.

## Printimi i një PDF

Shtyp {{key:Mod+P}}, kliko {{ui:Printo}}, ose shkruaj `PLOT`. PDF-ja bëhet brenda shfletuesit dhe shkarkohet, ose hapet në një skedë të re për printim. Shih [Nxirr në PDF](topic:plot-pdf).

## Ku shkojnë skedarët

Çdo ruajtje dhe çdo printim është një shkarkim, kështu që skedarët zbresin kudo ku i vendos shfletuesi: zakonisht në dosjen Downloads. Për të zgjedhur një dosje çdo herë, ndrysho cilësimin e shkarkimit në shfletuesin tënd; [Shfletuesit dhe kompjuterat](common:browsers) tregon ku.

Asgjë që hap ose ruan nuk i dërgohet neve. Shih [Ku shkojnë skedarët e tu](common:your-files).

## Skedarët e projektit PLN dhe PLA

CadCraft hap vizatime DWG dhe DXF, jo skedarët e vetë Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Hapja e një prej tyre të thotë çfarë është. Në Archicad, ruaj pamjet ose paraqitjet që të duhen si DWG dhe hapi këtu, ose eksporto modelin si IFC dhe hape në BimCraft. Aty ku BimCraft mund ta marrë skedarin, CadCraft ofron {{ui:Hap në BimCraft}}.

## Nëse faqja mbyllet para se të ruash

CadCraft mban një kopje të çdo vizatimi që ndryshon, vetëm në këtë shfletues, pak pasi të ndalosh së redaktuari. Nëse skeda mbyllet, shfletuesi ndalon ose kompjuteri rinisët para se të ruash, CadCraft pyet **Recover your work?** herën tjetër që nis: {{ui:Rikupero}} hap sërish vizatimin, të pa ruajtur, në skedën e vet. Ruajtja e vizatimit heq kopjen e tij. Shih [Rikupero punën tënde](common:recover).

## Online dhe offline

Hapja, vizatimi, ruajtja (DWG dhe DXF) dhe printimi ndodhin të gjitha në kompjuterin tënd, kështu që funksionojnë pa lidhje pasi CadCraft të ngarkohet.

Për të përdorur CadCraft pa asnjë lidhje, kliko {{ui:Ruaje për jashtë linje}} te shiriti lart ndërsa je online. Etiketa numëron ("Saving 40 of 212") dhe mbaron në "Offline ready". Kopja e ruajtur përfshin lexuesin e DWG, rreth 5 MB gjithsej, kështu që **skedarët DWG hapen edhe offline** pasi të ruhet. Kliko përsëri butonin për {{ui:Ruaje përsëri (merr versionin më të ri)}} ose {{ui:Hiq kopjen jashtë linje}}. "Could not save" do të thotë se disa skedarë s'u shkarkuan: kontrollo lidhjen dhe kliko për të provuar përsëri. "Offline not available" do të thotë se kjo dritare shfletuesi s'mund të mbajë një kopje (dritare private dhe disa kompjuterë të administruar).

Pa një kopje të ruajtur, lexuesi i DWG shkarkohet herën e parë që hap një DWG pasi ngarkohet faqja, kështu që hapja e një DWG jashtë linje mund të dështojë; skedarët DXF s'e kanë nevojë kurrë. Mos e rifresko faqen jashtë linje nëse CadCraft s'është ruajtur.

Shih [Puna jashtë linje](common:offline) për detajet.

:::offline
Je jashtë linje tani. Vizatimet ruhen si DWG ose DXF dhe printohen normalisht, dhe skedarët DXF hapen. Skedarët DWG hapen nëse CadCraft shfaq "Offline ready", ose nëse lexuesi i DWG është ngarkuar tashmë në këtë skedë.
:::

## Kufizimet në skedarë

Kufizimet dhe parametrat (shih [Kufizo një vizatim](topic:constraints)) ruhen si në DWG ashtu edhe në DXF. Çdo objekt i kufizuar mban një shënim të vogël të CadCraft (të dhëna të zgjeruara), dhe një bllok i pa përdorur me emrin `CADCRAFT_PARAMETRIC` mban kufizimet dhe tabelën e parametrave. Programet e tjera e hapin vizatimin normalisht dhe i injorojnë të dyja; mund ta fshijnë blloqe të pa përdorur kur e pastrojnë. Shënimet u referohen objekteve me çelësin e tyre, jo me dorezat e skedarit, kështu që një program që riemëron dorezat nuk i prish. Kur një program tjetër ka fshirë ose ndryshuar një objekt të kufizuar, CadCraft heq kufizimet mbi të kur hap skedarin dhe thotë sa janë. Një skedar pa to hapet pa kufizime.

Një skicë e eksportuar nga një modelues pjesësh (`.json`) hapet gjithashtu: shih [Zhvendos skicat nga dhe për te modelues të tjerë pjesësh](topic:solidworks-sketches).

## Jo ende e disponueshme

- Udhëheqësit e shumëfishtë si objekte udhëheqësi të shumëfishtë në një DXF të ruajtur (R12 nuk ka asnjë: ruhen si ajo që vizatojnë).
- Figurat në një DXF të ruajtur (ruhen si kornizat e tyre; DWG i mban si figura), dhe wipeout-et që fshehin atë që është poshtë tyre.
- Ruajtja e një versioni DXF më të ri se 2000.
- Ruajtja në re dhe sinkronizimi mes kompjuterëve.

Shih [Jo ende e ndërtuar](topic:not-built-yet) për listën e plotë.
