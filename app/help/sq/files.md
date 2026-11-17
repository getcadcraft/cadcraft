---
title: Skedarët: çfarë hapet, çfarë ruhet
summary: Formatet që CadCraft i hap, i ruan dhe i eksporton, çfarë mbahet ose konvertohet, dhe ku shkojnë skedarët.
keywords: xclip, clip, kufi xclip, bind clipped, dwg, dxf, pdf, r12, hap, ruaj, eksporto, importo, formate, konvertim, shkarkim, saveas, dxfout, ruaj si, dwg save, format, qsave, xref, xattach, vizatim i lidhur, referencë e jashtme, bind, reload, detach
from: b8c5778d
---

## Me një sy

| Format | Hap | Ruaj | Shënime |
|---|---|---|---|
| DXF (tekst ose binar, çdo version) | Po | Po, si DXF R12, DXF 2000 ose DXF 2000 (binar) | Një DXF binar hapet si një tekst dhe ruhet përsëri si binar. |
| DWG | Po | Po, si DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 ose 2018) | Lexohet dhe shkruhet nga biblioteka e vet DWG e CadCraft (skedarë AutoCAD R13 deri 2018). DWG-ja jote nuk ndryshohet kurrë. Skedarët e dëmtuar, ose versionet që lexuesi nuk i trajton, refuzohen me një mesazh. |
| PDF | Sjell një faqe: si nënshtresë ose si objekte ([Nënshtresat PDF](topic:pdf-underlay)) | Po, me printim | PDF vektoriale e një fletë, ose e modelit në një shkallë. |

Çdo vizatim që hap (ose e nis me {{ui:E re}}) merr skedën e vet mbi zonën e vizatimit; një vizatim i ri që askush nuk e ka prekur ende përdoret në vend që të shtohet një skedë. Kliko një skedë për të ndërruar, {{ui:×}} për ta mbyllur (CadCraft pyet më parë nëse ka ndryshime të paruajtura), ose vendos vizatimet e hapura njëri pranë tjetrit: shih [Ndaj ekranin](topic:split-screen).

## Hapja e një vizatimi

- Shtyp {{key:Mod+O}}, kliko {{ui:Hap}}, ose shkruaj `OPEN`, pastaj zgjidh skedarin.
- Ose tërhiq një skedar `.dwg` ose `.dxf` mbi zonën e vizatimit.

Skedari lexohet brenda shfletuesit tënd. Nuk ngarkohet askund. Historiku raporton sa objekte dhe shtresa hynë dhe sa kohë zgjati, dhe seksioni {{ui:Vizatim}} i panelit të majtë tregon formatin, për shembull "DWG 2018 (AC1032)".

Lexuesi DWG është pjesë e CadCraft dhe shkarkohet me DWG-në e parë që hap pasi faqja ngarkohet (disa qindra KB), kështu që nuk ka shkarkim të veçantë për të pritur. Ai e lexon skedarin në sfond, kështu që faqja vazhdon të përgjigjet ndërsa një DWG i madh hapet.

Një DXF lexohet në copa rreth 4 MB, kurrë si një bllok i vetëm teksti, kështu që një DXF mbi 512 MB hapet gjithashtu. Ajo që e kufizon është memoria e kompjuterit tënd: ndërsa një DXF hapet, prit që të përdorë rreth 16 deri 20 herë madhësinë e skedarit (një DXF 100 MB me rreth 690.000 objekte përdori rreth 1,5 GB në testin tonë).

### Çfarë hyn

- Vija, harqe, rrethe, polivija (me segmente harku), elipsa, pika, tekst dhe tekst me shumë rreshta, solide, vijëzime (modelet standarde si vijat e tyre, të tjerat si ton të sheshtë), referenca blloqesh me atributet e tyre (vlera që mund t'i redaktosh; shih [Atributet e blloqeve](topic:attributes)), përmasa, dhe paraqitje me dritaret e tyre.
- Splinat hyjnë si spline (shkallë, pika kontrolli, nyje, pesha, pika përshtatjeje); shih [Splinat dhe polivijat](topic:splines).
- Multidrejtimet me një vijë udhëheqëse dhe tekst hyjnë si multidrejtime CadCraft që mund t'i redaktosh (shih {{cmd:MLEADER}}). Të tjerat (me bllok, disa vija udhëheqëse ose vija të lakuara) vizatohen si i vizatoi programi tjetër dhe lëvizin si një tërësi; historiku thotë sa janë.
- Imazhet (pictures) shfaqen si një kornizë me emrin e skedarit të imazhit, derisa t'i japësh CadCraft skedarin me {{cmd:IMAGE}}: shih [Imazhet në një vizatim](topic:pictures#show-the-pictures-a-dwg-uses). Dritaret e heqjes shfaqen si kornizat e tyre, dhe ajo që është nën to mbetet e dukshme.
- Tabelat në një DWG hyjnë si i vizatoi programi tjetër.
- Faqet 3D në hapësirën e modelit hyjnë në skedën {{ui:3D}}, jo si objekte 2D; po kështu ato brenda blloqeve, një herë për çdo referencë blloku në model. Brenda një blloku dhe në një fletë vizatohen gjithashtu të sheshtë, si kontura. Shih [Modeli në 3D](topic:3d-solids).
- Shtresat ruajnë ngjyrën, hapjen/mbylljen, ngrirjen, kyçjen dhe cilësimet e printimit. DEFPOINTS kurrë nuk printohet.
- Përmasat bëhen përmasa reale, të redaktueshme të CadCraft aty ku pikat e tyre mund të lexohen. Fillimisht shfaqen saktësisht si i vizatoi programi tjetër; sapo ndryshon një, CadCraft e rivizaton me stilin e vet.
- Çdo paraqitje bëhet një skedë fletë. Në programin tjetër çdo paraqitje ka një dritare të fshehur të parë që është vetë fleta; CadCraft e lë atë jashtë.

### Çfarë nuk hyn ende

Çdo gjë që CadCraft nuk mund ta vizatojë numërohet, jo merret me hamendje. Kutia "About this file" në panelin e majtë e liston si "Not shown yet:" pastaj çdo lloj objekti dhe sa janë. Rastet tipike janë tabelat në DXF, rrjetat dhe solidet 3D brenda blloqeve. Solidet 3D, rajonet dhe trupat në hapësirën e modelit shfaqen në skedën 3D (shih [Modeli në 3D](topic:3d-solids#solids-from-other-programs)). Dritaret e përdredhura në skedar shfaqen të rrotulluara, si atje, dhe e mbajnë përdredhjen kur ruhen; po kështu UCS aktuale, UCS-të e emërtuara dhe një pamje e rrotulluar.

Teksti vizatohet me një shkronjë të vetme stil Helvetica. Një etiketë që nxë në një rresht me shkronjën më të ngushtë të programit origjinal mund të thyhet në dy rreshta në CadCraft.

## Ruajtja

Ka tre mënyra për të ruajtur. Secila shkarkon një kopje.

- **Ruaj**: shtyp {{key:Mod+S}}, kliko {{ui:Ruaj}}, ose shkruaj `SAVE` (edhe `QSAVE`). Ruan në formatin e vizatimit: DWG nëse hape një DWG, DXF nëse hape një DXF. Një DWG e mban versionin me të cilin erdhi (një skedar 2018 ruhet si 2018). Një vizatim i ri përdor formatin dhe versionin DWG që zgjodhe të fundit te {{ui:Ruaj si}} në këtë shfletues; nëse nuk zgjodhe kurrë, DWG në formatin AutoCAD 2000.
- **Ruaj si**: shtyp {{key:Mod+Shift+S}}, kliko {{ui:Ruaj si}}, ose shkruaj `SAVEAS`. Dialogu {{ui:Ruaj një kopje si}} ofron {{ui:DWG}}, me një listë {{ui:Version}} (AutoCAD 2018, 2013, 2010, 2007, 2004 ose 2000), {{ui:DXF R12}} dhe {{ui:DXF 2000}}, secili me emrin e skedarit që do t'i japë, dhe formatin dhe versionin aktual të vizatimit të zgjedhur tashmë. Kliko {{ui:Ruaj}} për të shkarkuar, ose {{ui:Anulo}} (ose {{key:Esc}}) për të mos ruajtur asgjë; historiku atëherë thotë "Not saved." Ajo që zgjedh qëndron: {{key:Mod+S}} e përdor për këtë vizatim që nga atëherë, dhe vizatimet e reja në këtë shfletues fillojnë me të.
- **DXFOUT**: shkruaj `DXFOUT`. Shkarkon gjithmonë një kopje DXF R12, dhe {{key:Mod+S}} i radhës ruan përsëri në formatin e vizatimit.

Shfletuesi shkarkon `<emri i vizatimit>.dwg` ose `<emri i vizatimit>.dxf`. Çdo ruajtje është një **shkarkim i ri**; skedari që hape nuk mbishkruhet ose ndryshohet kurrë. Historiku e konfirmon, për shembull "Saved a copy as Plan.dwg (DWG (AutoCAD 2018)). Your original Plan.dxf is unchanged." Për një DXF thotë "(DXF R12, opens in any CAD program)". Rreshtat nën të listojnë çdo gjë që u ndryshua gjatë rrugës.

Kur CadCraft funksionon në aplikacionin desktop, ruajtja punon si në programet e tjera desktop: {{key:Mod+S}} shkruan vizatimin përsëri në skedarin që hape, në formatin dhe versionin e vet, dhe historiku thotë ku u ruajt. {{ui:Ruaj si}} dhe eksportet shfaqin dialogun e ruajtjes së sistemit, dhe një skedar `.dwg`, `.dxf` ose `.ccsheets` që klikon dy herë hapet në CadCraft.

Për një PDF, printo në vend të kësaj (shih më poshtë).

## Çfarë mban dhe çfarë ndryshon një DWG

CadCraft shkruan vetë DWG-në, brenda shfletuesit tënd, me të njëjtën bibliotekë DWG me të cilën lexon. Zgjidh versionin te {{ui:Ruaj si}}: formati AutoCAD 2000 (version skedari AC1015) hapet në shumicën e programeve, edhe të vjetrit; formatet më të reja (2004, AC1018, deri 2018, AC1032) mbajnë edhe ngjyra të vërteta. Asgjë nuk ngarkohet, dhe ruajtja e një DWG punon jashtë linje.

Çdo version kontrollohet duke lexuar përsëri skedarët e ruajtur me lexuesit DWG të tre programeve të tjera dhe me vetë CadCraft. Një DWG i CadCraft nuk është hapur ende në vetë AutoCAD.

### Çfarë mban një DWG

- Vija, harqe, rrethe, elipsa, pika dhe polivija me segmentet e tyre harkore.
- Tekst me një rresht me drejtimin dhe faktorin e gjerësisë.
- Tekst me shumë rreshta dhe të mbështjellë, si tekst me shumë rreshta. Programi tjetër e mbështjell përsëri nga e njëjta gjerësi.
- Ngjyrat e objekteve: sipas shtresës, sipas blloku, 255 ngjyrat standarde, dhe ngjyra të vërteta në formatin 2004 e më tej.
- Shtresat me ngjyrën, llojin e vijës, trashësinë dhe cilësimet e tyre hapje/mbyllje, ngrirje, kyçje dhe printim; trashësitë dhe llojet e vijave të vetë objekteve, shkallët e tyre, modelet e llojeve të vijave dhe shkallën e llojit të vijës së vizatimit.
- Njësitë e vizatimit dhe formati i gjatësisë (dhjetore, këmbë dhe inç, thyesa…).
- Blloqet me pikën e tyre bazë dhe përcaktimet e atributeve, duke përfshirë ato të padukshme, konstante dhe të paracaktuara.
- Referencat e blloqeve me shkallën, rrotullimin dhe vlerat e atributeve.
- Mbushjet e ngurta dhe vijëzimet me model, me modelin, shkallën dhe këndin e tyre (vijat e vetë modelit, që programet e tjera t'i vizatojnë të njëjtat vija që vizaton CadCraft).
- Përmasat, si përmasa reale: programet e tjera i rimatin kur shtrihen. Secila mban cilësimet e veta (lartësinë e tekstit, madhësinë e shigjetës, dhjetoret, formatin e gjatësisë) dhe tekstin e saj, dhe mbart kopjen e vizatuar që ka çdo përmasë DWG.
- Fletët (paraqitjet): secila fletë me madhësinë e letrës dhe njësitë e saj, çfarë vizatohet në të, dhe dritaret e saj me pamjen dhe shkallën.
- Pamjet e emërtuara.
- Multidrejtimet, si multidrejtime.
- Emrat e shtresave dhe blloqeve siç i shkrove, me shkronja të mëdha dhe të vogla. (DXF R12 i shkruan me shkronja të mëdha.)

### Çfarë ndryshon një DWG

Secili prej këtyre listohet në historik pasi ruan, kur zbatohet për vizatimin tënd.

| Në CadCraft | Në DWG-në e ruajtur |
|---|---|
| Ngjyra të vërteta (të zgjedhura me zgjedhësin e ngjyrës), në formatin 2000 | Ngjyra standarde më e afërt: formati 2000 ka vetëm 255. Ruaje si 2004 ose më të ri për t'i mbajtur |
| Pamjet e emërtuara të një fletë | Pamje në hapësirën e letrës: një DWG nuk thotë cilës fletë i përket, kështu që kur CadCraft e hap sërish skedarin, i përkasin fletës së parë |
| Tekst me shumë rreshta me faktor gjerësie | Gjerësi normale shkronje: në një DWG faktori i gjerësisë zbatohet vetëm për tekstin me një rresht |
| Emrat e shtresave ose blloqeve me karaktere që DWG nuk i lejon | Ndryshuar: një emër nga një vizatim i lidhur si `Base\|Walls` bëhet `Base$0$Walls` (mënyra si e emëron lidhja kur lidhet), dhe karakteret e tjera bëhen `_` |

### Pse R12 dhe çfarë konvertohet

Kur ruan si DXF, CadCraft shkruan DXF R12, versionin që çdo program CAD mund ta hapë. Është më i vjetër se disa veçori, kështu që disa gjëra shkruhen në formë më të thjeshtë:

| Në CadCraft | Në skedarin e ruajtur R12 |
|---|---|
| Tekst me shumë rreshta | Një objekt teksti për rresht |
| Elipsat | Polivija që ndjekin elipsën |
| Vijëzimet (nga skedarët e hapur) | Vetëm konturet e tyre |
| Ngjyra të vërteta (të zgjedhura me zgjedhësin e ngjyrës) | Ngjyra standarde më e afërt |
| Trashësitë e vijave dhe shkallët e llojeve të vijave të objekteve | Lënë jashtë: R12 nuk ka asnjërën (llojet e vijave mbahen) |
| Emrat e shtresave dhe blloqeve | Shkruhen me shkronja të mëdha; hapësirat dhe karakteret e tjera bëhen `_`, dhe emrat pritën në 31 karaktere ("Title block" bëhet `TITLE_BLOCK`) |
| Shtresat e vendosura të mos printohen | Programet e tjera do t'i printojnë (CadCraft e mban mend cilësimin kur vizatimi ka një fletë) |
| Përmasat | Përmasa reale me bllokun e tyre të vizatuar, kështu që programet e tjera i shfaqin si i sheh ti |
| Multidrejtimet | Vijat, koka e shigjetës dhe teksti që vizatojnë |
| Pamjet e emërtuara | Mbahen, me emra me shkronja të mëdha; pamjet e një fletë kthehen te fleta e parë |
| Disa fletë | Fleta e parë është hapësira e letrës që çdo program shfaq; të tjerat mbahen si blloqe të emërtuar `CCLAYOUT_1`, `CCLAYOUT_2` … që CadCraft i kthen përsëri në fletë kur hap skedarin |

Historiku liston secilin prej këtyre që u zbatua për vizatimin tënd.

:::tip
Për të punuar me një vizatim gjatë disa ditësh, ruaje si DXF dhe hape atë DXF herën tjetër. Çdo gjë që CadCraft mund ta vizatojë mbijeton ciklin e plotë, duke përfshirë përmasat, blloqet dhe të gjitha fletët.
:::

## Vizatimet e lidhura (referenca të jashtme)

{{cmd:XATTACH}} (`XA`, ose {{ui:Blloqe}} › {{ui:Më shumë}} › {{ui:Lidh një vizatim (xref)}}) lidh një DWG ose DXF tjetër: zgjidh skedarin, pastaj kliko ku duhet të shkojë ({{key:Enter}} e vendos në 0,0). Hyn si një bllok i vetëm i emërtuar sipas skedarit, në shkallën e duhur kur dy vizatimet kanë njësi të ndryshme. Shtresat dhe blloqet e tij mbajnë emrat e tyre me emrin e lidhjes përpara, si `Plan|Walls`, `Plan|Door`, kështu që nuk përzihen kurrë me tëndat: ndiz dhe fik, ngri ose kyç shtresat e lidhura si të tuat. Një lidhje është vetëm për lexim: ndrysho vizatimin tjetër dhe ngarkoje sërish. Ajo që cakton për shtresat e një lidhjeje (ngjyrën, llojin e vijës, trashësinë, hapje/mbyllje, ngrirje, kyçje, printim) ruhet kur e ngarkon sërish, kur e ruan vizatimin si DWG ndërsa lidhja është ende lidhje, dhe kur një vizatim tjetër lidh këtë.

{{cmd:XREF}} (`XR`): `?` liston lidhjet (të ngarkuara ose jo, cili skedar, sa referenca); `A` bashkon; `R` e ngarkon përsëri nga skedari i saj (zgjidh skedarin sërish: shfletuesi nuk mund t'i arrijë dosjet e tua vetë); `B` e lidh (bëhet blloqe dhe shtresa të zakonshme me emra si `Plan$0$Walls`); `D` e heq (referencat dhe shtresat e saj zhduken). Secila është një hap zhbërjeje.

{{cmd:XCLIP}} (`XC`) pret referencat e blloqeve dhe lidhjet: përzgjidh ato, `N` për një kufi të ri, pastaj `R` dhe dy qoshe ose `P` dhe pikat e një shumëkëndëshi ({{key:Enter}} e mbyll); `D` heq prerjen. Vetëm ajo që është brenda shfaqet dhe printohet, dhe prerja lëviz me referencën. DWG dhe DXF 2000 mbajnë prerjet; DXF R12 e ruan referencën të plotë dhe e thotë këtë. Kur lidh një lidhje që ka referenca të prera, {{cmd:XREF}} `B` pyet: `A` lidh gjithçka, `C` mban vetëm pjesën e prerë të secilës referencë (vijat dhe harqet priten te kufiri; tekstet dhe blloqet e futura qëndrojnë kur pika e tyre e futjes është brenda).

Një vizatim që hap mund të lidhë skedarë që CadCraft nuk i sheh: ai thotë sa nuk janë ngarkuar. Përdor {{cmd:XREF}}, `R` dhe zgjidh secilin skedar për t'i parë.

Kur ruan, një lidhje e ngarkuar **lidhet** brenda skedarit (programet e tjera shohin blloqe dhe shtresa të zakonshme të emërtuara `Plan$0$…`), dhe historiku e thotë këtë. Një lidhje që nuk është ngarkuar mbetet lidhje me skedarin e saj, në DWG dhe DXF.

## Hap në 3D

{{ui:Pamja}} › {{ui:Më shumë}} › {{ui:Hap në ModelCraft}} ({{cmd:OPENIN3D}}) hap vizatimin në aplikacionin e modelimit 3D, në një skedë të re, si DWG, pa e ngarkuar. Ndryshimet e bëra atje mbeten atje; ruaji ato atje. Artikulli i menusë shfaqet vetëm aty ku ai aplikacion mund të marrë një vizatim të dorëzuar.

## Printimi i një PDF

Shtyp {{key:Mod+P}}, kliko {{ui:Printo}}, ose shkruaj `PLOT`. PDF bëhet brenda shfletuesit dhe shkarkohet, ose hapet në një skedë të re për printim. Shih [Printo në PDF](topic:plot-pdf).

## Ku shkojnë skedarët

Çdo ruajtje dhe çdo printim është një shkarkim, kështu që skedarët shkojnë kudo ku i dërgon shfletuesi shkarkimet: zakonisht dosja Downloads. Për të zgjedhur një dosje çdo herë, ndrysho cilësimin e shkarkimit në shfletuesin tënd; [Shfletuesit dhe kompjuterët](common:browsers) tregon ku.

Asgjë që hap ose ruan nuk dërgohet tek ne. Shih [Ku shkojnë skedarët e tu](common:your-files).

## Skedarët e projekteve PLN dhe PLA

CadCraft hap vizatime DWG dhe DXF, jo skedarët e vetë Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Hapja e një prej tyre të thotë çfarë është. Në Archicad, ruaj pamjet ose paraqitjet që të duhen si DWG dhe hapi këtu, ose eksporto modelin si IFC dhe hape në BimCraft. Aty ku BimCraft mund ta marrë skedarin, CadCraft ofron {{ui:Hap në BimCraft}}.

## Nëse faqja mbyllet përpara se të ruash

CadCraft mban një kopje të çdo vizatimi që ndryshon, vetëm në këtë shfletues, pak pas pushimit të redaktimit. Nëse skeda mbyllet, shfletuesi ndalon ose kompjuteri rinisët përpara se të ruash, CadCraft pyet **Rikupero punën tënde?** herën tjetër që niset: {{ui:Rikupero}} e hap vizatimin përsëri, të paruajtur, në skedën e vet. Ruajtja e vizatimit heq kopjen e tij. Shih [Rikupero punën tënde](common:recover).

## Online dhe offline

Hapja, vizatimi, ruajtja (DWG dhe DXF) dhe printimi ndodhin të gjitha në kompjuterin tënd, kështu që punojnë pa lidhje sapo CadCraft të jetë ngarkuar.

Për të përdorur CadCraft pa asnjë lidhje, kliko {{ui:Ruaje për jashtë linje}} në shiritin lart ndërsa je në linjë. Etiketa numëron ("Saving 40 of 212") dhe mbaron me "Offline ready" (Gati jashtë linje). Kopja e ruajtur përfshin lexuesin DWG, rreth 5 MB gjithsej, kështu që **skedarët DWG hapen edhe jashtë linje** pasi të jetë ruajtur. Kliko butonin sërish për {{ui:Ruaje përsëri (merr versionin më të ri)}} ose {{ui:Hiq kopjen jashtë linje}}. "Could not save" do të thotë se disa skedarë nuk u shkarkuan: kontrollo lidhjen dhe kliko për të provuar sërish. "Offline not available" do të thotë se kjo dritare shfletuesi nuk mund të mbajë një kopje (dritaret private dhe disa kompjuterë të menaxhuar).

Pa një kopje të ruajtur, lexuesi DWG shkarkohet herën e parë që hap një DWG pasi faqja ngarkohet, kështu që hapja e një DWG jashtë linje mund të dështojë; skedarët DXF nuk kanë nevojë kurrë për të. Mos e rifresko faqen jashtë linje nëse CadCraft nuk është ruajtur.

Shih [Puna jashtë linje](common:offline) për detajet.

:::offline
Je jashtë linje tani. Vizatimet ruhen si DWG ose DXF dhe printohen normalisht, dhe skedarët DXF hapen. Skedarët DWG hapen nëse CadCraft shfaq "Offline ready", ose nëse lexuesi DWG ishte ngarkuar tashmë në këtë skedë.
:::

## Kufizimet në skedarë

Kufizimet dhe parametrat (shih [Kufizo një vizatim](topic:constraints)) ruhen si në DWG ashtu edhe në DXF. Çdo objekt i kufizuar mban një shënim të vogël të CadCraft (të dhëna të zgjeruara), dhe një bllok i pa përdorur me emrin `CADCRAFT_PARAMETRIC` mban kufizimet dhe tabelën e parametrave. Programet e tjera e hapin vizatimin normalisht dhe i injorojnë të dyja; mund ta fshijnë blokun e pa përdorur kur e pastrojnë. Shënimet u referohen objekteve me çelësin e vet, jo me dorezat e skedarit, kështu që një program që rinumëron dorezat nuk i prish ato. Kur një program tjetër ka fshirë ose ndryshuar një objekt të kufizuar, CadCraft heq kufizimet mbi të kur hap skedarin dhe thotë sa. Një skedar pa to hapet pa kufizime.

Një skicë e eksportuar nga një modelues pjesësh (`.json`) hapet gjithashtu: shih [Zhvendos skicat nga dhe për te modelues të tjerë pjesësh](topic:solidworks-sketches).

## Ende jo i disponueshëm

- Multidrejtimet si objekte multidrejtimi në një DXF të ruajtur (R12 nuk ka; ruhen si ajo që vizatojnë).
- Imazhet në një DXF të ruajtur (ruhen si kornizat e tyre; DWG i mban si imazhe), dhe dritaret e heqjes që fshehin ajo që është nën to.
- Ruajtja e një versioni DXF më të ri se 2000.
- Ruajtja në cloud dhe sinkronizimi mes kompjuterëve.

Shih [Ende nuk është ndërtuar](topic:not-built-yet) për listën e plotë.
