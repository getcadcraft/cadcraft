---
title: Zgjidhja e problemeve
summary: Mesazhet që CadCraft shfaq dhe problemet që mund të hasësh, secili me shkakun dhe zgjidhjen e tij.
keywords: problem, gabim, nuk punon, mesazh, nuk hapet, komandë e panjohur, nuk ndodh asgjë, bllokuar, tastet nuk punojnë, bosh, mungon, rregullo
from: 8299b222
---

## Hapja e skedarëve

| Mesazhi ose simptoma | Shkaku | Zgjidhja |
|---|---|---|
| "CadCraft hap vizatime DWG dhe DXF. "…" nuk është asnjëra." | Skedari nuk është `.dwg` ose `.dxf`. | Hap vetë skedarin e vizatimit. Një PDF mund të sillet brenda (Hap pyet: importo ose bashkangjit, shih [Nënvizimet PDF](topic:pdf-underlay)); fotografitë shtohen me `IMAGEATTACH`. |
| "Ky DXF binar përfundon në mes të një objekti: skedari është prerë shkurt ose është dëmtuar." | DXF binar ndalon përpara fundit të tij. | Shkruaj RECOVER për të hapur atë që mund të lexohet, ose kërko skedarin përsëri. |
| "Ky skedar nuk është një DXF i lexueshëm (kod grupi i keq në rreshtin …)." | DXF është dëmtuar ose nuk është me të vërtetë DXF. | Kërko skedarin përsëri, ose një DWG. |
| "Ky vizatim nuk mund të lexohet. Mund të jetë dëmtuar, ose i ruajtur në një version që lexuesi nuk e trajton ende (…)." | Lexuesi DWG nuk e lexoi dot. | Kërko një DWG të ruajtur në një version më të vjetër, ose një DXF. |
| "Ky vizatim është nga AutoCAD R11 / R12 (DWG AC1009), më i vjetër se ç'lexon CadCraft …" | Skedarët DWG nga Release 12 e më poshtë përdorin një format që CadCraft nuk e lexon. | Në programin që e bëri, ruaje si DXF (çdo version) ose si DWG më të ri, dhe hape atë. Ruaj si i CadCraft ofron DXF R12 për programet që kërkojnë atë format të vjetër. |
| "Nuk u hap …" e ndjekur nga një mesazh rrjeti, te DWG i parë | Lexuesi DWG nuk mund të shkarkohej: je jashtë linje dhe CadCraft nuk është ruajtur për përdorim jashtë linje, ose lidhja u shkëput. | Kalo në linjë dhe provo përsëri, ose hap një DXF. Kliko {{ui:Save for offline}} dhe prit "Gati jashtë linje", që DWG të hapen jashtë linje herën tjetër. Shih [Puna jashtë linje](common:offline). |
| Butoni jashtë linje thotë "Nuk mund të ruhej" | Disa skedarë nuk u shkarkuan. | Kontrollo lidhjen dhe kliko butonin për të provuar përsëri. |
| Butoni jashtë linje thotë "Jashtë linje nuk është e disponueshme" | Dritaret private dhe disa kompjuterë të menaxhuar nuk mund të mbajnë një kopje jashtë linje. | Përdor një dritare normale, ose qëndro në linjë. |
| CadCraft nuk hapet pa lidhje | Nuk u ruajt për përdorim jashtë linje në këtë shfletues, ose shfletuesi e pastroi. | Herën tjetër që je në linjë, kliko {{ui:Save for offline}} dhe prit "Gati jashtë linje". |
| Vizatimi hapet, por disa pjesë mungojnë | Objekte që CadCraft nuk mund t'i vizatojë ende, ose shtresa që janë fikur ose ngrirë në skedar. | Lexo "Rreth këtij skedari" në panelin e majtë. Kontrollo panelin {{ui:Layers}}. |
| Teksti mbështillet në dy rreshta | CadCraft vizaton tekstin me një font të stilit Helvetica, më i gjerë se disa fonte CAD. | Shkurto tekstin te Vetitë, ose pranoje rreshtin shtesë. |
| Një rreth shfaqet si elips, ose teksti i pasqyruar lexohet në drejtimin e duhur | Objekti u vizatua në një plan të pjerrët, ose u pa nga poshtë, në programin që e bëri skedarin. CadCraft e shfaq si të parë nga lart, ashtu siç e shfaq pamja e planit të atij programi; teksti mbetet i lexueshëm. | Nuk ka çfarë për t'u rregulluar. Për ta parë në mënyrën e programit tjetër, kërko vizatimin të sheshuar, ose me objektet të vizatuara nga lart. |
| Një bllok, rreth ose përmasë ndodhet diku tjetër nga në programin që e bëri skedarin | Një rast vizatimi që CadCraft e lexon gabim. | Na e thuaj në Discord, me skedarin nëse mund ta ndash. |

## Rreshti i komandave

| Mesazhi ose simptoma | Shkaku | Zgjidhja |
|---|---|---|
| "Komandë e panjohur "…". Shkruaj HELP për listën." | Nuk ka komandë ose alias me atë emër. | Shkruaj `HELP`, ose shih [Referenca e komandave](topic:commands). Disa komanda të njohura [nuk janë ndërtuar ende](topic:not-built-yet). |
| "Nuk ekziston një komandë e tillë" pranë rreshtit të komandave gjatë shkrimit | Ajo që shkruan nuk përputhet me asgjë ende. | Vazhdo të shkruash, ose kontrollo drejtshkrimin. |
| "Kërkohet një pikë ose fjalë kyçe opsioni." | Ajo që shkruan nuk është pikë ose opsion. | Kontrollo formatin: `x,y`, `@dx,dy`, `@d<a`, ose një numër i vetëm. Shih [Shkrimi i koordinatave dhe distancave](topic:coordinate-entry). |
| "Kërkohet një distancë pozitive ose dy pika." | Një distancë ishte negative ose nuk ishte numër. | Shkruaj një numër pozitiv, ose kliko dy pika. |
| "Kërkohet një kënd në gradë ose dy pika." | Këndi nuk ishte numër. | Shkruaj gradët si numër të thjeshtë. |
| "Kërkohet një numër." | Pritej një numër. | Shkruaj vetëm shifra. |
| "Fjala kyçe e opsionit është e pavlefshme." | Shkronjat nuk përputhen me një opsion. | Shkruaj shkronjat e mëdha që shfaqen në kllapat katrore. |
| `*Cancel*` | Shtype {{key:Esc}}, ose {{key:Enter}} ku kërkohej një pikë. | Nis komandën përsëri. |
| Shkrimi nuk arrin rreshtin e komandave | Një kuti në një panel ose dialog ka kursorin. | Shtyp {{key:Enter}} ose {{key:Esc}}, ose kliko në vizatim. |
| Komanda përdor objekte që nuk zgjodhe | Ato u zgjodhën para se ta nisje. | Shtyp {{key:Esc}} para komandës. |
| Një vijë shkoi diku të papritur | `x,y` është absolute. | Përdor `@dx,dy` për pika relative. |
| "Përfundo ose anulo komandën aktuale më parë (Esc)." | Shtype {{key:Mod+S}} ndërsa po punonte një komandë. | Shtyp {{key:Esc}}, pastaj ruaj. |
| "Nuk mund të ruhet si DWG (AutoCAD 2000): … Provo Ruaj si, pastaj DXF." | Diçka në vizatim nuk mund të shkruhej si DWG. | Shtyp {{key:Mod+Shift+S}}, zgjidh {{ui:DXF R12}} dhe kliko {{ui:Save}}. |
| "Nuk u ruajt." | Mbylle dialogun {{ui:Save a copy as}} me {{ui:Cancel}} ose {{key:Esc}}. | Shtyp {{key:Mod+Shift+S}} përsëri dhe kliko {{ui:Save}}. |

## Redaktimi

| Mesazhi ose simptoma | Shkaku | Zgjidhja |
|---|---|---|
| Një objekt nuk zgjidhet | Shtresa e tij është e kyçur, e fikur ose e ngrirë; ose je në një fletë dhe është modeli brenda një dritareje pamjeje. | Zhbllokoje shtresën, ose shko te skeda {{ui:Model}}. |
| "Nuk u gjet asgjë atje." | Asnjë objekt nën klikim. | Zmadho dhe kliko mbi vijën vetë. |
| "Asgjë nuk kryqëzon atë objekt atje." | {{cmd:TRIM}} nuk gjeti objekt që të kryqëzojë pjesën që zgjodhe. | Kontrollo që vija prerëse ta kryqëzojë vërtet. |
| "Nuk mund të priset ai objekt." | Prerja punon vetëm në vija, harqe, rrathë dhe polivija. | Shpërbëj bllokun më parë, ose fshi dhe rivizato. |
| "Nuk ka kufi në atë drejtim." | {{cmd:EXTEND}} nuk gjeti asgjë për t'u takuar. | Zgjidh skajin më të afërt që duhet të rritet. |
| "Nuk mund të zhvendoset paralelisht ai objekt." | Zhvendosja paralele punon vetëm në vija, harqe, rrathë dhe polivija. | Shpërbëje më parë, ose vizato një vijë paralele. |
| "Nuk mund të zhvendoset paralelisht kaq larg." | Zhvendosja do ta kthente formën nga brenda jashtë. | Përdor një distancë më të vogël. |
| "Rrezja është shumë e madhe." ose "Distanca është shumë e madhe." | Mbushja ose prerja e cepit do të kalonte skajin e një vije. | Vendos një rreze më të vogël me `R`, ose distanca më të vogla me `D`. |
| "Vetëm segmenti i parë ose i fundit i një polivije të hapur mund të priset prapa." | Cepi do të priste në mes të polivijës. | Zgjidh dy segmente të polivijës pranë njëri-tjetrit, ose përdor `P` për çdo cep. |
| "Zgjidh një vijë tjetër, të ndryshme." | E dyta ishte e njëjta vijë, ose nuk ishte vijë. | Zgjidh një vijë tjetër. |
| "Vetëm polivijat, referencat e blloqeve dhe përmasat shpërbëhen." | Zgjedhja nuk kishte asgjë për të shpërbërë. | Zgjidh një polivijë, referencë blloku ose përmasë. |
| "Kjo është shtresa aktuale. Bëje tjetër shtresë aktuale më parë." | Provove ta fikësh shtresën aktuale. | Kliko emrin e një shtrese tjetër, pastaj fike këtë. |
| "Ekziston tashmë një shtresë me emrin …" | Emrat e shtresave duhet të jenë unikë. | Zgjidh një emër tjetër. |
| "Nuk ka asgjë për të zhbërë." | Nuk ka mbetur asgjë për të zhbërë, ose hape ose nise një vizatim (kjo pastron historikun). | — |

## Përmasat dhe blloqet

| Mesazhi ose simptoma | Shkaku | Zgjidhja |
|---|---|---|
| Teksti dhe shigjetat e përmasës janë shumë të vogla ose shumë të mëdha | Madhësitë janë në njësi vizatimi; shkalla e përgjithshme nuk përshtatet me vizatimin. | Vendos {{cmd:DIMSCALE}} në shkallën e nxjerrjes; shih [Vendos madhësitë e përmasave](topic:dimension-settings). |
| "Zgjidh një pikë brenda këndit që do të matësh." | Vendndodhja e përmasës këndore është mbi një krah. | Kliko brenda këndit. |
| "Ato vija janë paralele." | Vijat paralele nuk kanë kënd midis tyre. | Zgjidh dy vija që takohen. |
| "Zgjidh një përmasë lineare ose të përafruar." | {{cmd:DIMCONTINUE}} ose {{cmd:DIMBASELINE}} kanë nevojë për një nga këto për të nisur. | Zgjidh një përmasë lineare ose të përafruar. |
| "Ky vizatim nuk ka ende blloqe: F fut një bllok nga një skedar, L nga biblioteka …" | Vizatimi nuk ka blloqe të vetat. | Shkruaj `F` ose `L`, ose krijo një bllok me {{cmd:BLOCK}}. |
| "Nuk ka bllok me emrin "…"." | Emri është i gabuar. | Mesazhi liston blloqet që ka. |
| "Emri i bllokut nuk mund të nisë me * ose të përdorë …" e ndjekur nga një listë karakteresh | Emri ka një karakter që blloqet nuk e pranojnë. | Përdor shkronja, shifra, `-` dhe `_`. |
| "Një bllok nuk mund të përmbajë veten." | Zgjedhja mban një referencë te blloku që po krijohet. | Hiq atë referencë. |
| "Nuk u zgjodh asnjë objekt; asgjë nuk u krijua." | Shtype {{key:Enter}} para se të zgjedhësh. | Nis {{cmd:BLOCK}} përsëri dhe zgjidh objektet. |

## Fletët dhe nxjerrja

| Mesazhi ose simptoma | Shkaku | Zgjidhja |
|---|---|---|
| "Dritaret e pamjes shkojnë në një paraqitje. Hap një skedë paraqitjeje (ose krijo një me LAYOUT) më parë." | {{cmd:MVIEW}} në skedën {{ui:Model}}. | Kliko një skedë fletë më parë. |
| "Hap paraqitjen me dritaren e pamjes më parë." | {{cmd:VPVIEW}} në skedën {{ui:Model}}. | Kliko skedën e fletës më parë. |
| Shkalla e një dritareje pamjeje duket dhjetë herë e gabuar | Njësitë e vizatimit janë të gabuara. | Vendos {{ui:Units}} te {{ui:Current settings}}. |
| "Nuk ka asgjë për të nxjerrë ende." | Modeli është bosh. | Vizato diçka, ose hap një vizatim. |
| "Zgjidh dritaren për të nxjerrë." | {{ui:A window…}} është zgjedhur dhe nuk u zgjodh asnjë dritare. | Kliko {{ui:Pick}} dhe zgjidh dy cepa. |
| "… më i madh se letra: skajet janë prerë." | Zona nuk përshtatet në atë shkallë. | Zgjidh një shkallë më të vogël, një letër më të madhe, ose {{ui:Fit to paper}}. |
| "Shfletuesi bllokoi skedën e re, kështu PDF u shkarkua në vend." | Dritaret kërcyese janë bllokuar për sajtin. | Hap PDF-in e shkarkuar, ose lejo dritaret kërcyese për sajtin. |
| Karakteret shtypen si "?" | Fontet e PDF-it nuk kanë shkronjë për to (ideogramet e rralla, hindi dhe gjuhë të tjera që kërkojnë formim të ndërlikuar, …), ose fonti më i madh nuk u shkarkua (jashtë linje). Shkrimet evropiane, cirilik, grek, hebraik, arabisht, persisht, urdu, tajlandez, kinez, japonez dhe koreanë shtypen si vetvetja. | Për arabisht, tajlandez, kinez, japonez ose koreanë, nxirr përsëri me lidhje. Shkrimet e tjera nuk janë ndërtuar ende. |
| Vijat e ndërtimit shfaqen në PDF | Shtresa e tyre nxirret. | Kliko butonin e printerit të shtresës. |
| Të gjitha vijat janë njësoj të trasha | Trashësia e tyre është {{ui:Default}}, kështu shtypen me gjerësinë e penës së dialogut. | Jep shtresave ose objekteve një {{ui:Lineweight}} në panelin e djathtë, ose zgjidh një {{ui:Line weight}} në dialog. Për të parë trashësitë në ekran, shtyp {{ui:LWT}} në shiritin e gjendjes. |

## Tastet dhe ekrani

| Simptoma | Shkaku | Zgjidhja |
|---|---|---|
| F3, F7 ose F8 ndryshon volumin ose hap Mission Control | Tastet funksionale të Mac. | Mbaj **fn**, ose përdor butonat e shiritit të gjendjes. Shih [Tastet, miu dhe trackpad-et](common:keys). |
| F7 pyet për caret browsing | Përdorimi i vetë Firefox-it për F7. | Zgjidh No; përdor butonin {{ui:Grid}}. |
| {{key:Mod+N}} hapi një dritare shfletuesi | Shfletuesi e mban atë tast. | Kliko {{ui:New}} ose shkruaj `NEW`. |
| {{key:Mod+A}} zgjodhi tekstin e rreshtit të komandave | Rreshti i komandave kishte kursorin. | Kliko një objekt më parë, ose shkruaj `ALL` te kërkesa `Zgjidh objektet`. |
| {{key:Delete}} nuk fshin | Rreshti i komandave kishte kursorin. | Shkruaj `E` dhe shtyp {{key:Enter}}. |
| Klikimi me butonin e djathtë nuk bën asgjë në trackpad Mac | Control-klikimi mund të numërohet si klikim i zakonshëm. | Kliko me dy gishta. |
| Asgjë nuk lëviz në trackpad | Nuk ka buton të mesit, dhe Space nuk lëviz. | Rrëshqit me dy gishta: pamja 2D lëviz (pinch dhe rrota e miut zmadhojnë). Ose tërhiq me butonin e djathtë të mbajtur. |
| {{key:Esc}} i parë la ekranin e plotë | Shfletuesi përdor Esc për të dalë nga ekrani i plotë. | Shtyp {{key:Esc}} përsëri për të anuluar komandën. |
| {{key:F1}} nuk bën asgjë në Mac | F1 është tast ndriçimi. | Mbaj **fn**, ose kliko {{ui:Help}}. |
| Shkrimi shkon te kutia e kërkimit të ndihmës | Paneli i ndihmës ka kursorin. | Kliko në vizatim. |
| Vizatimi u bë bosh | Ke zmadhuar shumë larg. | Kliko {{ui:Extents}}, ose kliko dy herë rrotën. |
| "Të largohem nga sajti?" kur mbyll skedën | Ka ndryshime të paruajtura. | Qëndro, ruaj me {{key:Mod+S}}, pastaj mbyll. |
