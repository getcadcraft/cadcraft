---
title: Modeli në 3D
summary: Shiko vizatimin në 3D te skeda 3D dhe bëj trupa të thjeshtë nga ai: ekstrudo (me konicitet ose përgjatë një shtegu), rrotullo, shtyp dhe tërhiq faqet, kuti, cilindra dhe kunj, bashko, zbrit dhe prit trupat, pastaj zhvendos, kopjo, rrotullo dhe fshi ata, dhe vendos pamje të sheshta 2D të tyre në një fletë.
keywords: 3d, tre d, trup, trupa, 3dsolid, rajon, korpus, acis, sat, sab, trupa nga programe të tjera, hap vizatim 3D, ekstrudo, ext, rrotullo, rev, zvarrit, konicitet, shteg, presspull, shtyp tërhiq, shtyj tërhiq, kuti, cilindër, cyl, kunj, 3dorbit, orbitë, pamje, vscurrent, stil vizual, me hije, vijë e fshehur, tel kornize, rreze x, xray, iso, perspektivë, paralele, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, kubi i pamjes, bashkim, uni, zbritje, su, kryqëzim, in, bulean, kombino, bashko trupat, viewbase, flatshot, pamje e sheshtë, pamje 2D, pamje vizatimi, pamje nga përpara, pamje nga lart, pamje anësore, vijat e fshehura
from: 13060e71
---

## Çfarë do të bësh

Një bazë dhome 1000 × 600 e ekstrudar në një bllok 400 të lartë, një faqe e ngritur lart, dhe një cilindër pranë saj — pastaj modeli ruhet bashkë me vizatimin dhe eksportohet për një shikues 3D ose një printer.

Skeda {{ui:3D}} ndodhet pranë {{ui:Modeli}} nën vizatim. Ajo shfaq vizatimin e hapësirës së modelit të shtrirë mbi tokë me ngjyrat e shtresave (shtresat që janë fikur ose ngrirë mbeten të fshehura) dhe trupat që bën. Herën e parë që hapet, pamja 3D ngarkohet; pas kësaj ndërrohet menjëherë.

## Ekstrudo një formë

1. Te skeda {{ui:Modeli}}, shkruaj `REC` dhe shtyp {{key:Enter}}. Shkruaj `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Kliko skedën {{ui:3D}}. Shiriti i veglave tregon grupin {{ui:3D}} në vend të grupeve të vizatimit.
3. Kliko {{ui:Ekstrudim}} (ose shkruaj {{cmd:EXTRUDE}}, `EXT`). Kliko brenda drejtkëndëshit, pastaj shtyp {{key:Enter}}.
4. Shkruaj `400` dhe shtyp {{key:Enter}}. Historiku thotë "Ekstrudua 1 trup, 400 e lartë" me vëllimin e tij.

Polivijet e mbyllura (duke përfshirë harqet), drejtkëndëshat, shumëkëndëshat, rrethet dhe elipset ekstrudohen; vijat dhe polivijet e hapura nuk ekstrudohen, dhe historiku thotë pse. Mund të zgjedhësh edhe format te skeda {{ui:Modeli}} më parë dhe të shkruash `EXTRUDE` aty. Në vend që të shkruash lartësinë, mund ta klikosh: kontura ndjek kursorin lart e poshtë. Një lartësi negative shkon poshtë. Shkruaj `D` te kërkesa e lartësisë për të fshirë format 2D pas ekstrudimit (`D` përsëri i mban ato).

Te kërkesa e lartësisë, `T` (Këndi i konicitetit) kërkon një kënd në gradë: anët priren brenda për atë kënd, kështu që maja është më e vogël (një kënd negativ e bën më të madhe); një kënd shumë i pjerrët për formën refuzohet. `P` (Shteg) i zvarrit format përgjatë një shtegu në vend të kësaj (shih më poshtë).

## Rrotullo dhe zvarrit

- {{cmd:REVOLVE}} (`REV`, ose {{ui:Më shumë}} › {{ui:Rrotullo rreth një boshti}}): përzgjidh format e mbyllura, shtyp {{key:Enter}}, pastaj kliko dy skajet e boshtit (ose shkruaj `X` ose `Y` për boshtin e vizatimit përmes 0,0), pastaj shkruaj një kënd ose shtyp {{key:Enter}} për rrotullim të plotë. Forma rrotullohet rreth boshtit dhe ngrihet nga toka: vizato gjysmën e konturit të një vazoje pranë një vije, pastaj rrotulloje rreth vijës. Forma mund ta prekë boshtin, por nuk mund ta kalojë. Një rrotullim i plotë ka 48 hapa.
- {{cmd:SWEEP}} (ose {{ui:Më shumë}} › {{ui:Zvarrit përgjatë një shtegu}}, ose `P` te kërkesa e lartësisë së EXTRUDE): përzgjidh format e mbyllura (profilin), shtyp {{key:Enter}}, pastaj kliko shtegun: një vijë, polivijë, hark, rreth ose elips. Profili ngrihet tërthor mbi shtegun, mesi i tij mbi të, dhe shkon përgjatë tij; cepat pritën me kënd, dhe një shteg i mbyllur bën një unazë. Një drejtkëndësh i vogël i zvarritur përgjatë konturit të një dhome bëhet një zokth; një rreth përgjatë një polivije bëhet një tub.

## Shtyp dhe tërhiq një faqe

1. Kliko {{ui:Shtyp/tërhiq}} (ose shkruaj {{cmd:PRESSPULL}}).
2. Kliko faqen e sipërme të bllokut.
3. Shkruaj `100` dhe shtyp {{key:Enter}}, ose lëviz kursorin dhe kliko. Blloku është 500 i lartë.

## Kuti, cilindra dhe kunj

- {{cmd:BOX}}: kliko ose shkruaj dy cepa, pastaj një lartësi.
- {{cmd:CYLINDER}} (`CYL`): qendra, rrezja, pastaj një lartësi. Cilindrat dhe rrethet e ekstruduara kanë 48 faqe, të hijezuara të lëmuara.
- {{cmd:WEDGE}} (`WE`): dy cepa dhe një lartësi. Është me lartësi të plotë te cepi i parë dhe bie deri në zero te tjetri.

Te skeda 3D, një klik bie mbi faqen ose brinjën nën kursor, përndryshe mbi tokë, kështu që një kuti mund të qëndrojë mbi një trup tjetër.

## Zhvendos, kopjo, rrotullo dhe fshi trupa

Te skeda 3D, një klik përzgjedh një trup; tërhiq nga e majta në të djathtë për një dritare, nga e djathta në të majtë për një kryqëzim. Pastaj:

- {{cmd:MOVE}}: kliko një pikë baze dhe ku shkon, ose shkruaj `<100,0,0>` (ose `@100,0`) për një distancë përgjatë X, Y dhe Z.
- {{cmd:COPY}}: e njëjta gjë, duke lënë origjinalin.
- {{cmd:ROTATE}}: shkruaj një kënd (rrotullohet rreth mesit të përzgjedhjes, rreth Z), ose kliko qendrën, një pikë fillimi dhe këndin.
- {{cmd:ERASE}} ose {{key:Delete}}.

## Bashko, zbrit dhe prit trupa

Hap {{ui:Më shumë}} te shiriti i veglave 3D, ose shkruaj komandën:

- {{cmd:UNION}} (`UNI`): përzgjidh trupat, shtyp {{key:Enter}}: bëhen një trup i vetëm.
- {{cmd:SUBTRACT}} (`SU`): përzgjidh trupat që do të mbash dhe shtyp {{key:Enter}}, pastaj ata që do të heqësh dhe shtyp {{key:Enter}}. Një vrimë përmes një blloku: vizato një cilindër që kalon nëpër të, pastaj zbrit cilindrin.
- {{cmd:INTERSECT}} (`IN`): përzgjidh trupat, shtyp {{key:Enter}}: mbetet vetëm ajo që kanë të gjithë të përbashkët.

Historiku thotë vëllimin e rezultatit. Secila është një hap zhbërjeje. Operacioni i parë që kryen ngarkon motorin bulean 3D (rreth 0.5 MB; përfshihet te {{ui:Ruaje për jashtë linje}}). Vetëm trupat e mbyllur mund të kombinohen: një trup me brinjë të hapura (nga faqet 3D të lira të një programi tjetër) refuzohet, me arsyen e tij. Rezultati është një trup i vetëm; faqet e lakuara mbeten të përbëra nga facetë të sheshta, ashtu si ishte cilindri.

Kliko dy herë një trup për të redaktuar faqet dhe brinjët e tij veç e veç; {{key:Esc}} e mbyll përsëri. Çdo ndryshim 3D është një hap zhbërjeje në të njëjtin historik me vizatimin: {{key:Mod+Z}} zhbën gjënë e fundit që bëre në të dy skedat.

## Pamje të sheshta në një fletë

1. Hap një skedë fletë (ose qëndro te {{ui:Modeli}}), pastaj shkruaj {{cmd:VIEWBASE}} (ose `FLATSHOT`).
2. Zgjidh pamjen: {{key:Enter}} për përpara, ose `T` (lart), `R` (djathtas), `L` (majtas), `BA` (prapa), `BO` (poshtë), `I` (izometrike).
3. {{key:Enter}} shfaq vijat e fshehura, me viza; `H` i lë jashtë.
4. {{key:Enter}} merr shkallën që sugjeron CadCraft: në një fletë, shkallën standarde më të madhe (si 1:20) me të cilën pamja përshtatet nën gjysmën e letrës. Ose shkruaj një: `1:50`, `2:1`.
5. Kliko, ose shkruaj, ku shkon qendra e pamjes.

Pamja është një referencë bllok e vetme, `VIEW-FRONT-1` e kështu me radhë: brinjët e dukshme në shtresën VIEW-VISIBLE (0.5 mm), ato të fshehura në VIEW-HIDDEN (me viza, 0.25 mm). Zhvendose, vendosi përmasa dhe printoje si çdo vizatim tjetër. Është një foto e trupave në momentin kur e bëre; pasi t'i ndryshosh, fshi pamjen dhe ekzekuto {{cmd:VIEWBASE}} përsëri. Për pamje të tjera, ekzekuto komandën një herë për çdo pamje.

## Shiko përreth

Tërhiq me rrotën për të orbituar, {{key:Shift}} + tërheqje me rrotën ose butonin e djathtë për të lëvizur, dhe rrotullo rrotën për zmadhim te kursori. Te një sipërfaqe prekëse, dy gishtat orbitojnë dhe pinch zmadhon. Një klik me butonin e djathtë pa tërhequr është {{key:Enter}}, si në skedat e tjera. 3DORBIT e lejon butonin e majtë të orbitojë derisa shtyp {{key:Enter}} ose {{key:Esc}}.

- {{ui:Pamjet}} (ose {{cmd:VIEW}}): Izometrike, Lart, Poshtë, Përpara, Prapa, Majtas, Djathtas, Perspektivë ose Paralele, dhe Zmadho te çdo gjë.
- {{ui:Stili}} (ose {{cmd:VSCURRENT}}, `VS`): Me hije, Me hije dhe brinjë, Vijë e fshehur, Tel kornize ose Rreze X.

Pikat që klikon kapen te trupat (kënde, brinjë, faqe) dhe te vizatimi 2D në tokë: skajet dhe mesi i vijave dhe harqeve të tij, dhe pikat përgjatë tyre. Vijat 2D nuk përzgjidhen kurrë te skeda 3D. Kur një komandë kërkon objekte 2D (EXTRUDE, REVOLVE, SWEEP), një klik zgjedh një, një tërheqje nga e majta në të djathtë merr ato që janë tërësisht brenda dritares, dhe një tërheqje nga e djathta në të majtë merr ato që kryqëzon, ashtu si te skeda {{ui:Modeli}}.

Një kub pamjeje ndodhet në krye djathtas të skedës 3D: kliko një faqe, brinjë ose cep për të parë nga aty, tërhiqe për të orbituar, dhe butoni me shtëpi kthehet te pamja izometrike. Ky është {{ui:Automatike}}, fillimi i {{ui:Treguesi i këndit}} te [cilësimet e CadCraft](topic:settings). Kur vendoset te {{ui:Kubi i pamjes}}, skeda {{ui:Modeli}} shfaq gjithashtu një kub, që shikon nga lart; kliko çdo anë tjetër dhe hapet skeda 3D që shikon nga aty. Kur vendoset te {{ui:Ikona e boshtit}}, të dyja skedat shfaqin në vend të kësaj shenjuesin e boshtit.

## Trupa nga programe të tjera

Një vizatim nga një program tjetër mund të mbajë trupa 3D, rajone dhe korpuse (3DSOLID, REGION, BODY: programi tjetër i mban format e tyre si të dhëna ACIS). CadCraft i shfaq ato në hapësirën e modelit te skeda 3D, me ngjyrën e shtresës së tyre dhe me brinjët e tyre, herën e parë që hap skedën; vija e komandës pastaj thotë sa u vizatuan.

- Shfaqen ashtu siç janë: nuk mund t'i përzgjedhësh, zhvendosësh ose ndryshosh. Shtresat që janë fikur ose ngrirë i fshehin.
- Ruajtja si DWG shkruan secilin prapë pa ndryshim, në çdo version DWG, që programi tjetër t'i marrë përsëri. Skedarët DXF nuk i mbajnë: CadCraft i shkruan vetëm në DWG, dhe e thotë këtë kur ruan si DXF.
- Vizatohen: faqe të sheshta, dhe faqe mbi cilindra, konusë, sfera, torusë dhe sipërfaqe spline të thjeshta, me brinjë të drejta, të rrumbullakëta dhe spline. Një faqe mbi çdo lloj tjetër sipërfaqeje, ose një që CadCraft nuk mund ta vendosë, nuk merret me hamendje: lihet jashtë dhe listohet, për shembull "Nuk është vizatuar ende (trupa 3D): 2 faqe mbi sipërfaqe spline (sweepsur), një sipërfaqe që nuk vizatohet ende."
- Trupat brenda blloqeve nuk shfaqen ende; "Rreth këtij skedari" i numëron ata.

Faqet e lakuara vizatohen si copa të vogla të sheshta, rreth 7.5° larg njëra-tjetrës, kështu që një trup i lakuar duket pak i facetuar nga afër.

## Ruaj dhe eksporto

Ruajtja mban modelin 3D, si në DWG ashtu edhe në DXF. Çdo faqe hyn si faqe 3D në shtresën `CC-3D`, kështu që programet e tjera shfaqin trupat, dhe CadCraft mban kopjen e vet të saktë në skedar, që e lexon përsëri kur hap vizatimin përsëri, me pamjen 3D si ishte (kamera, projeksioni dhe stili vizual). Faqet 3D të bëra nga programe të tjera hyjnë në skedën 3D si faqe të lira, të mbajtura bashkë si një grup. Një faqe 3D brenda një bllok hyn një herë për çdo referencë të atij blloku në model, e vendosur dhe e rrotulluar si është referenca; në vetë bllokun, dhe në një fletë, një faqe 3D vizatohet e sheshtë, si kontura e saj.

{{ui:Eksporto}} te grupi 3D shkarkon vetëm trupat: GLB për shikues dhe web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) ose STL për printim 3D, në milimetra ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} pyet cilin.

:::note
Modeli 3D është në madhësi reale. Një vizatim pa njësi llogaritet si milimetra, kështu që `1000` është një metër. Nëse ndryshon më vonë njësitë e vizatimit (Vetitë, me asgjë të përzgjedhur), trupat shkallëzohen me to që të mbeten në vizatim, dhe historiku e thotë këtë. Një {{key:Mod+Z}} zhbën ndryshimin e njësive dhe shkallëzimin bashkë.
:::
