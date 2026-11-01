---
title: Ekrani i CadCraft
summary: Një tur i çdo shiriti, paneli dhe skede të aplikacionit të vizatimit, sipas emrit që ka në ekran.
keywords: ekran, ndërfaqe, shiriti i veglave, ribbon, panele, rreshti i komandave, shiriti i gjendjes, skeda, skedat e fletës, vetitë, paneli i shtresave, tur
from: b5a33388
---

Ekrani ka shtatë pjesë. Nga lart poshtë: shiriti i aplikacionit, shiriti i veglave, zona e vizatimit me një panel në çdo anë, skedat nën vizatim, rreshti i komandave dhe shiriti i gjendjes.

## Shiriti i aplikacionit

Shiriti i hollë në krye i takon faqes, jo vizatimit. Ai shfaq shenjën CadCraft, emrin e aplikacionit, versionin që po përdor, një lidhje me faqen e aplikacionit, një buton {{ui:Ndihmë}} (ose {{key:F1}}), një buton {{ui:Ruaje për jashtë linje}}, një buton {{ui:Ekran i plotë}} dhe dy butona temash, {{ui:Letra}} dhe {{ui:Modeli}}.

Butoni {{ui:Cilësimet}} (ingranazhi) mban cilësimet e vetë CadCraft dhe ato që ndajnë të gjitha aplikacionet: shih [Cilësimet e CadCraft](topic:settings).

{{ui:Ruaje për jashtë linje}} mban një kopje të CadCraft, duke përfshirë lexuesin e DWG, në këtë shfletues, që të hapet pa lidhje. Etiketa tregon gjendjen: "Duke ruajtur N nga M", "Gati jashtë linje", "Nuk u ruajt" ose "Jashtë linje s'disponohet". Shih [Puna jashtë linje](common:offline).

:::note
Butonat {{ui:Letra}} dhe {{ui:Modeli}} te shiriti i aplikacionit ndryshojnë vetëm ngjyrat e ekranit: {{ui:Letra}} është një temë e çelët, {{ui:Modeli}} një e errët. Nuk kanë lidhje me skedën {{ui:Modeli}} nën vizatim, që kalon mes vizatimit dhe fletëve të tij.
:::

Butoni {{ui:Ekran i plotë}}, ose {{key:Ctrl+Shift+F}} (tasti Control në çdo kompjuter, përfshirë Mac), kalon mes tre mënyrave të ekranit: normal, ekran i plotë, dhe ekran i plotë me shiritat e fshehur. Me shiritat të fshehur, lëviz treguesin te skaji i sipërm i ekranit për t'i kthyer.

## Shiriti i veglave

Nën shiritin e aplikacionit është shiriti i veglave. Çdo buton ekzekuton një komandë, saktësisht sikur ta kishe shkruar, kështu që rreshti i komandave bën të njëjtat pyetje në të dy rastet. Kalo mbi një buton për të parë aliasin e komandës. Grupet janë:

| Grupi | Butonat |
|---|---|
| Skedar | {{ui:E re}}, {{ui:Hap}}, {{ui:Ruaj}}, {{ui:Ruaj si}}, {{ui:Printo}} |
| Vizato | {{ui:Vijë}}, {{ui:Polivijë}}, {{ui:Rreth}}, {{ui:Hark}}, {{ui:Drejtkëndësh}}, {{ui:Shumëkëndësh}}, {{ui:Elips}}, {{ui:Tekst}}, {{ui:Paragraf}}, {{ui:Vijëzim}}, dhe {{ui:Më shumë}}: {{ui:Pikë}}, {{ui:Vijë ndihmëse}} dhe {{ui:Rreze}} (shih [Vijat ndihmëse dhe rrezet](topic:construction-lines)) |
| Ndrysho | {{ui:Zhvendos}}, {{ui:Kopjo}}, {{ui:Rrotullo}}, {{ui:Shkalla}}, {{ui:Pasqyro}}, {{ui:Shtrij}}, {{ui:Ofset}}, {{ui:Prerje}}, {{ui:Zgjat}}, {{ui:Rrumbullakim}}, {{ui:Pjerrëtim}}, {{ui:Shpërbëj}}, {{ui:Fshi}}, dhe {{ui:Më shumë}}: {{ui:Grup}}, {{ui:Bashko}}, {{ui:Përputh vetitë}}, {{ui:Ndaj}} dhe {{ui:Zgjat}} |
| Shënime | {{ui:Lineare}}, {{ui:I paralel}}, {{ui:Kënd}}, {{ui:Rreze}}, {{ui:Diametri}} (përmasat), {{ui:Udhëheqës}} (shënim me udhëheqës), dhe {{ui:Më shumë}}: {{ui:Vazhdo përmasën}}, {{ui:Përmasë me bazë}} dhe {{ui:Re revizioni}} |
| Parametrik | {{ui:Auto}}, {{ui:Kufizo}}, {{ui:Përmasa}}, {{ui:Parametrat}}, dhe {{ui:Më shumë}} me çdo kufizim (shih [Kufizo një vizatim](topic:constraints)) |
| Blloqe | {{ui:Bëj}}, {{ui:Fut}}, {{ui:Biblioteka}}, dhe {{ui:Më shumë}}: {{ui:Redakto bllokun}} dhe {{ui:Përcakto atributin}} |
| Fletët | {{ui:Fletë e re}}, {{ui:Dritare pamjeje}} |
| Redakto | {{ui:Zhbëj}}, {{ui:Ribëj}}, {{ui:Kopjo}} (në clipboard), {{ui:Ngjit}}, dhe {{ui:Më shumë}}: një menu me {{ui:Prit}}, {{ui:Kopjo}}, {{ui:Ngjit}}, {{ui:Ngjit në vend}}, {{ui:Dublo dhe zhvendos}}, {{ui:Fshi}}, {{ui:Përzgjidh të gjitha}}, {{ui:Mos përzgjidh asnjë}}, {{ui:Përzgjedhje e shpejtë}}, {{ui:Përzgjidh të ngjashmet}} dhe {{ui:Gjej dhe zëvendëso}}, secila me tastin e vet |
| Pamja | {{ui:Shtrirje}}, {{ui:Dritare (W)}}, {{ui:Paraprake}}, dhe {{ui:Më shumë}}: {{ui:Mat distancën}}, {{ui:Sipërfaqe}}, {{ui:Mat (rreze, kënd …)}}, dhe ndarja e ekranit: {{ui:Ndaj anash për anë}}, {{ui:Ndaj një mbi tjetrin}}, {{ui:Katër panele}}, {{ui:Një panel}} (shih [Ndaje ekranin](topic:split-screen)), dhe {{ui:Kthe pamjen 90° majtas}}, {{ui:Kthe pamjen 90° djathtas}}, {{ui:Kthehu te bota}} (shih [Rrotullo pamjen](topic:ucs-and-turned-view)) |

{{ui:Kopjo}} te grupi {{ui:Ndrysho}} është komanda {{cmd:COPY}} (pika bazë, pastaj ku shkon çdo kopje); {{ui:Kopjo}} te grupi {{ui:Redakto}} vendos objektet në clipboard për {{ui:Ngjit}}. Shih [Kopjo, ngjit dhe dublo](topic:copy-paste). Butoni i komandës që po punon mbetet i theksuar derisa komanda të mbarojë. Etiketat e kursorit emërtojnë shkurtoret e Windows ("Ctrl+O"); në Mac, {{key:Mod+O}} funksionon gjithashtu.

Në një dritare të shkurtër (një laptop me ekranin e shkallëzuar në 125 % ose më shumë, për shembull) shiriti i veglave nuk e zë kurrë vendin e vizatimit: kur vizatimi do të kishte shumë pak lartësi, butonat lënë jashtë fjalët nën ikonat dhe emrat e grupeve (kalo mbi një buton për emrin e tij), dhe nëse kjo s'mjafton, shiriti bëhet një rresht që rrëshqet anash. Një dritare më e lartë i kthen fjalët.

## Paneli i majtë

Paneli në të majtë ka tre seksione.

- **{{ui:Shtresat}}.** Çdo shtresë në vizatim, me një pikë të mbushur te ajo aktuale. Kliko një emër për ta bërë atë shtresë aktuale. Çdo rresht ka një mostër ngjyre (kliko për të zgjedhur një ngjyrë) dhe katër butona: ndezur/fikur (sy), ngrirë (copë bore), kyçur (bravë) dhe printim (printer). {{ui:Shtresë e re}} hap një kuti për të shtuar një. Shih [Organizo një vizatim me shtresa](topic:layers).
- **{{ui:Blloqe}}.** Blloqet e përcaktuara në vizatim, sa herë përdoret secili, dhe një buton {{ui:Fut}} për secilin. Shih [Bëj dhe fut blloqe](topic:blocks).
- **{{ui:Vizatim}}.** Fakte për skedarin e hapur: emri (me "(ndryshuar)" kur ka ndryshime të pa ruajtura), formati, madhësia, njësitë, numri i objekteve, shtresave, blloqeve dhe fletëve. Pasi hap një skedar, një kuti "Rreth këtij skedari" liston çfarë s'mund të shfaqë CadCraft ose duhej të konvertonte.

## Zona e vizatimit

Mesi i ekranit është vizatimi. Treguesi është një kryq. Kur CadCraft kërkon një pikë, një shenjues i vogël dhe një etiketë ("Pika fundore", "Pika e mesit") tregojnë ku do të zbresë një kapje objekti. Kur kërkon objekte, kryqi ka një kuti zgjedhjeje, dhe objektet nën të ndriçojnë.

Kur vizatimi është bosh, një kartelë "Fillo vizatimin" shfaq disa komanda të para. Ajo zhduket sapo nis një komandë ose hap një skedar. Mund të lësh një skedar DWG ose DXF kudo në këtë zonë për ta hapur.

## Skedat nën vizatim

Nën vizatim janë skedat: {{ui:Modeli}} së pari, pastaj {{ui:3D}}, pastaj një skedë për çdo fletë (paraqitje), pastaj një buton {{ui:+}}.

- {{ui:Modeli}} është vetë vizatimi, në madhësi të plotë, në njësi vizatimi.
- {{ui:3D}} shfaq vizatimin të shtrirë në tokë dhe solidet e krijuara prej tij. Ndërsa shfaqet, shiriti i veglave ka një grup {{ui:3D}} në vend të grupeve të vizatimit. Shih [Modeli në 3D](topic:3d-solids).
- Çdo skedë fletë është një fletë letre me një bllok titulli dhe dritare pamjeje drejt modelit. Ajo që vizaton atje është në njësi letre (milimetra ose inç). Kliko dy herë brenda një dritareje pamjeje për të punuar në model përmes saj (shih [Puno në model përmes një dritareje pamjeje](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Një emër i gjatë fletë preket në skedën e vet; kalo mbi skedë për emrin e plotë. Me shumë fletë, {{ui:Cilësimet}} › {{ui:CadCraft}} › {{ui:Skedat e fletës}} › {{ui:Vetëm numrat e fletëve}} shfaq vetëm numrin e secilës fletë (A-101) në skedën e vet.
- {{ui:+}} krijon një fletë të re me kufi, bllok titulli dhe një dritare pamjeje. Është e njëjtë me komandën {{cmd:LAYOUT}}.
- Kliko dy herë një skedë fletë për ta riemërtuar. Me një skedë të fokusuar, {{key:Left}} dhe {{key:Right}} lëvizin mes skedave.

Çdo skedë mban zmadhimin dhe lëvizjen e vet. Shih [Përgatit një fletë](topic:sheets-and-viewports).

## Paneli i djathtë: Vetitë

Paneli në të djathtë ndryshon sipas asaj që është zgjedhur.

- **Asgjë nuk është zgjedhur, te skeda {{ui:Modeli}}:** titulli thotë {{ui:Cilësimet aktuale}}. Këtu cakton {{ui:Shtresa}}, {{ui:Ngjyra}} dhe {{ui:Lartësia e tekstit}} për objektet e reja, njësitë e vizatimit {{ui:Njësitë}}, dhe madhësitë për përmasat e reja ({{ui:Lartësia e tekstit}}, {{ui:Madhësia e shigjetës}}, {{ui:Decimalet}}, {{ui:Shkalla e përgjithshme}}).
- **Asgjë nuk është zgjedhur, te një fletë:** titulli thotë "Fletë:" dhe emri i fletës. Mund ta riemërtosh fletën, të ndryshosh {{ui:Letra}} dhe {{ui:Orientimi}} të saj, {{ui:Printo këtë fletë}} ose {{ui:Fshi këtë fletë}}. Cilësimet për objektet e reja vijojnë më poshtë.
- **Një objekt i zgjedhur:** lloji i tij si titull (Vijë, Rreth, Tekst, Përmasë, Dritare pamjeje …), pastaj shtresa, ngjyra dhe gjeometria e tij. Shkruaj një vlerë të re dhe shtyp {{key:Enter}} për ta ndryshuar.
- **Disa objekte të zgjedhura:** sa janë, dhe {{ui:Shtresa}} dhe {{ui:Ngjyra}} e përbashkët. Ndryshimi i njërës prej tyre i ndryshon të gjitha. "Ndryshon" do të thotë që ato ndryshojnë.

Shih [Redakto me grips dhe Vetitë](topic:grips-and-properties).

Më poshtë, paneli {{ui:Parametrat}} hapet kur zgjedh {{ui:Parametrat}} ose shkruan {{cmd:PARAMETERS}}: çdo parametër dhe kufizim përmasor në një tabelë të vetme. Shih [Përdor parametra dhe ekuacione](topic:parameters).

## Rreshti i komandave

Në fund është rreshti i komandave: historiku i asaj që ke bërë, dhe nën të rreshti i pyetjes.

- Etiketa e pyetjes thotë `Command:` kur s'ka asgjë që po punon. Ndërsa një komandë punon, shfaq pyetjen, opsionet e saj në kllapa katrore dhe parazgjedhjen në kllapa këndore, për shembull `Cakto rrezen e rrethit [Diametri] <500>:`.
- Ndërsa shkruan emrin e një komande, një ndihmë në të djathtë sugjeron komandat që përputhen. Shtyp {{key:Tab}} për ta pranuar të parën. "Nuk ka një komandë të tillë" do të thotë që asgjë nuk përputhet.
- {{key:Up}} dhe {{key:Down}} kthejnë rreshtat që shkrove më parë.
- Historiku mban 400 rreshtat e fundit. Mesazhet e komandave, matjet nga {{cmd:DIST}} dhe {{cmd:LIST}}, dhe raportet e ruajtjes dhe printimit shfaqen këtu.

## Shiriti i gjendjes

Rreshti më i poshtë është shiriti i gjendjes.

- **Koordinatat** majtas: X dhe Y e kryqit. Ndërsa një komandë ka një pikë bazë, shfaq edhe distancën dhe këndin nga ajo, për shembull `Δ 1200 < 90°`.
- **Mesazhet** në mes, si "Ortho aktiv" ose "Shtresa aktuale: Walls". Zhduken pas disa sekondash.
- **{{ui:Rrjetë}}**, **{{ui:Ortho}}**, **{{ui:Polar}}**, **{{ui:Kapje}}**, **{{ui:Gjurmo}}**, **{{ui:Dyn}}** dhe **{{ui:LWT}}** në të djathtë. Çdo një është një ndërrues; një buton i shtypur është ndezur. {{ui:LWT}} shfaq gjerësitë e vijave në ekran (shih [Gjerësitë e vijave dhe llojet e vijave](topic:units-papers-scales#line-weights-and-linetypes)). Shigjeta e vogël pranë {{ui:Kapje}} hap {{ui:Kapjet e objekteve}}, ku shënon cilat kapje janë aktive. Shih [Kap në pika mbi objekte](topic:object-snaps).

## Dialogu Nxirr në PDF

{{ui:Printo}} (ose {{key:Mod+P}}) hap dialogun {{ui:Nxirr në PDF}}, me cilësimet në të majtë dhe një pamje paraprake të drejtpërdrejtë në të djathtë. Shih [Nxirr në PDF](topic:plot-pdf).

## Ndihma

{{key:F1}} ose butoni {{ui:Ndihmë}} hap këtë ndihmë si panel anësor; vizatimi mbetet i përdorshëm pranë saj. Punon pa lidhje. {{key:F1}} sërish, ose {{key:Esc}} brenda panelit, e mbyll. Shih [Përdorimi i kësaj ndihme](common:help).
