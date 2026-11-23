---
title: Cilësimet e CadCraft
summary: Cilësimet që i takojnë aplikacionit të vizatimit: madhësia e kryqëzores, ku varet një kopje e ngjitur nga kursori, çfarë bën një klikim me zgjedhjen, sa rreshta përdor shiriti i veglave, ku ndodhet rreshti i komandës dhe sa i lartë është, një zonë e sipërme kompakte, dhe treguesi i qoshes.
keywords: rreshti i komandës, rresht lundrues, lundro, ankoro, një rresht, f2, historiku i komandave, commandline, cmdline, toparea, zona e sipërme, kompakte, cursorsize, kryqëzore ekrani i plotë, kursor ekran i plotë, skaj më skaj, rreshtat e shiritit të veglave, shfaqja e shiritit të veglave, ctrl f1, cilësimet, preferencat, opsionet, treguesi i qoshes, kubi i pamjes, ikona e boshtit, ikona ucs, kursori, kryqëzorja, kutia e zgjedhjes, pika e ngjitjes, pika bazë, klikimi i objekteve, zgjedhja, pickadd, shift, rivendos
from: ae1a81db
---

Hap {{ui:Cilësimet}} me ingranazhin në shiritin e aplikacionit ose me {{key:Mod+,}}. Skeda e parë, {{ui:CadCraft}}, përmban cilësimet që i takojnë këtij aplikacioni; {{ui:Të përgjithshme}} përmban ato që i ndajnë të gjitha aplikacionet e familjes (tema, madhësia dhe gjerësia e tekstit të paneleve, pamja dhe renditja e shiritit të veglave). Cilësimet e CadCraft ekzistojnë vetëm në aplikacion: i ndryshon këtu, dhe ky shfletues i mban mend. {{ui:Rivendos cilësimet e CadCraft}} i kthen të gjitha në fillim.

## Kryqëzorja

**E vogël**, **Mesatare** (fillimi), **E madhe** ose **Ekran i plotë**: madhësia e kryqëzores dhe e kutisë së zgjedhjes në vizatim. Një kuti zgjedhjeje më e madhe zgjedh objekte edhe nga pak më larg, gjë që ndihmon në ekran me prekje ose në një vizatim shumë të imët.

**Ekran i plotë** i nxjerr dy vijat e kryqëzores nga skaji në skaj të vizatimit, edhe kur nuk po punon ndonjë komandë, që të kontrollosh me sy se dy gjëra janë në rresht në gjithë pamjen. Kur pamja është e ndarë, vijat qëndrojnë në panelin ku punon. E njëjta gjë si {{cmd:CURSORSIZE}} 100 të AutoCAD: shkruaj {{cmd:CURSORSIZE}} dhe 100 për ekran të plotë; një numër më i vogël zgjedh madhësinë më të afërt (nën 5 E vogël, 5 deri 9 Mesatare, 10 deri 99 E madhe).

## Pika e ngjitjes

Ku varet një kopje e ngjitur nga kursori pas {{key:Mod+V}} ({{cmd:PASTECLIP}}), deri sa klikon:

- **Qoshja e poshtme majtas** (fillimi): qoshja e poshtme majtas e shtrirjes së objekteve të kopjuara, si në AutoCAD.
- **Qendra**: mesi i shtrirjes së tyre. E dobishme për të vendosur një simbol me sy.

Një kopje e bërë me `COPYBASE` varet gjithmonë nga pika bazë që zgjodhe. {{ui:Ngjit në vend}} ({{key:Mod+Shift+V}}) e injoron këtë cilësim: mban koordinatat origjinale. Shih [Kopjo, ngjit dhe dublo](topic:copy-paste).

## Klikimi i objekteve

Çfarë bën një klikim në vizatim me zgjedhjen kur nuk po punon ndonjë komandë:

- **Shton te zgjedhja** (fillimi): çdo klikim ose dritare shton objekte; {{key:Shift}}+klikim, ose {{key:Shift}}+dritare, i heq.
- **Zëvendëson zgjedhjen**: një klikim ose dritare zgjedh vetëm atë që kap. {{key:Shift}}+klikim shton një objekt, ose heq një që është tashmë i zgjedhur; {{key:Shift}}+dritare shton.

Te një kërkesë `Select objects:` brenda një komande, klikimet shtojnë gjithmonë (dhe {{key:Shift}} heq), pavarësisht ç'thotë ky cilësim. Shih [Zgjidh objektet](topic:select-objects).

## Klikimi në një vend bosh

Çfarë bën një klikim aty ku nuk ka objekt kur nuk po punon ndonjë komandë. Në çdo rast nis një dritare zgjedhjeje (një klikim i dytë e përfundon).

- **Pastron zgjedhjen** (fillimi): ajo që ishte zgjedhur lëshohet. Mbaj {{key:Shift}} ndërsa klikon për ta mbajtur.
- **Mban zgjedhjen**: zgjedhja mbetet, ashtu si në programe të tjera vizatimi; dritarja shton te ajo. Shtyp {{key:Esc}} për ta pastruar zgjedhjen.

## Zvarritja për zgjedhje

Çfarë vizaton shtypja dhe zvarritja në një vend bosh:

- **Lasso** (fillimi): një kontur i lirë me dorë. Lëvizja fillimisht djathtas zgjedh atë që është krejt brenda, fillimisht majtas atë që e prek. {{key:Space}} ndërsa zvarritet ndërron mes dritares, kalimit dhe gardhit.
- **Drejtkëndësh**: kutia, si një klikim dhe një klikim i dytë e vizatojnë.

{{cmd:LASSOMODE}} `1` ose `0` vendos të njëjtën gjë. Shih [Zgjedhja me lasso](topic:lasso-selection).

## Zvarritja për prerje dhe zgjatje

Çfarë bën shtypja në një vend bosh dhe zvarritja te {{cmd:TRIM}} dhe {{cmd:EXTEND}}:

- **Një shteg** (fillimi): një shteg i lirë me dorë; çdo pjesë që e kalon prehet (ose zgjatet).
- **Një dritare**: një kuti; çdo pjesë që e prek prehet, ashtu si bën opsioni `C`.

Shih [Prit dhe zgjat](topic:trim-and-extend).

## Pozicioni i shiritit të veglave

{{ui:CadCraft}} › {{ui:Pozicioni i shiritit të veglave}}: **Lart** (fillimi, si ka qenë gjithmonë), **Poshtë**, **Majtas** ose **Djathtas**. Majtas ose djathtas grupet e veglave renditen në një kolonë që lëviz kur është më e lartë se dritarja, dhe butonat mbështillen dy ose tre për rresht. Zgjedhja ruhet me cilësimet e tua, dhe {{cmd:TOOLBARDOCK}} (`TBDOCK`) e vendos nga rreshti i komandës. {{ui:Të përgjithshme}} › {{ui:Rivendos paraqitjen}} e kthen shiritin lart.

Shiritat e stileve të menusë qëndrojnë brenda shiritit të veglave dhe lëvizin me të, por stili {{ui:Shirit}} është bërë për të shtrirë përgjatë krye ose fundit: në një anë merr një kolonë të ngushtë që lëviz. Në telefon shiriti qëndron aty ku e vendos paraqitja e telefonit.

## Rreshtat e shiritit të veglave

Sa rreshta përdorin veglat mbi vizatim, në shiritin e veglave CadCraft dhe në stilet {{ui:Hartim klasik}} dhe {{ui:Shirit}}:

- **Mbështill për t'u përshtatur** (fillimi): veglat mbështillen sipas gjerësisë së dritares.
- **2 rreshta**: më së shumti dy rreshta. Kur veglat mbështillen në dy rreshta ose më pak me këtë gjerësi, thjesht mbështillen; ndryshe qëndrojnë në dy rreshta që lëvizin anash.
- **1 rresht**: një rresht që lëviz anash, gjë që i jep vizatimit hapësirën më të madhe.

{{key:Shift+Ctrl+F1}} i kalon të tre, dhe {{cmd:TOOLBARROWS}} vendos një. Ç'shfaqin butonat (ikona dhe tekst, vetëm ikona, ose vetëm tekst) është një cilësim i {{ui:Të përgjithshme}} › {{ui:Shiriti i mjeteve}}; {{key:Ctrl+F1}} e kalon dhe {{cmd:TOOLBAR}} e vendos.

## Rreshti i komandës

Rreshti i komandës mund të qëndrojë i ankoruar nën vizatim, si gjithmonë, ose të lundrojë mbi të, dhe mund të jetë i hollë deri në një rresht.

- **Lundroje.** Zvarrit dorezën në majën e majtë të tij në vizatim, ose zgjidh {{ui:Vendose mbi vizatimin}} te menuja {{ui:Opsionet e rreshtit të komandës}} (tri pikat në skajin e djathtë). Zvarrit dorezën sërish për ta lëvizur; vendi i tij ruhet kur dritarja ndryshon madhësi. Zvarrit skajin e djathtë për ta bërë më të gjerë ose më të ngushtë. Lëshoje mbi shiritin e statusit, ose zgjidh {{ui:Vendose në fund}}, për ta ankoruar përsëri.
- **Bëje më të hollë ose më të lartë.** Zvarrit skajin e sipërm: çdo hap është një rresht historiku. Deri në zero rreshta bëhet një **rresht i vetëm i komandës**: vetëm kërkesa dhe ajo që shkruan, dhe një mesazh i ri shfaqet mbi të për një çast. Një dyklikim te skaji i sipërm kalon mes një rreshti dhe lartësisë që kishe.
- **Historiku.** {{key:F2}}, ose butoni i orës në rreshtin e komandës ({{ui:Historiku i komandave (F2)}}), hap gjithë historikun mbi rresht (poshtë tij kur rreshti lundron afër majës së dritares). Shkrimi vazhdon te rreshti i komandës; {{key:PageUp}} dhe {{key:PageDown}} lëvizin historikun, dhe {{key:Esc}}, {{key:F2}} ose një klikim gjetkë e mbyllin. Një tast yti te F2 fiton mbi këtë.
- **Nga tastiera.** Doreza është një buton: kur është e fokusuar, tastet me shigjeta lëvizin rreshtin lundrues (me {{key:Shift}}, me hapa më të mëdhenj); {{key:Up}} e bën lundrues një rresht të ankoruar, dhe {{key:Down}} te skaji i fundit e ankoron. Skaji i sipërm është një ndarës: {{key:Up}} dhe {{key:Down}} shtojnë ose heqin një rresht, {{key:Home}} e bën një rresht, {{key:End}} më të lartin. Lexuesit e ekranit dëgjojnë çdo mesazh, edhe në rreshtin e vetëm të komandës.

{{ui:CadCraft}} › {{ui:Rreshti i komandës}} ka të njëjtat zgjedhje: {{ui:Ankoruar në fund}} ose {{ui:Lundrues}}, {{ui:Rreshta historiku të shfaqur}} (0 deri 12) dhe {{ui:Lartësi standarde}}. {{cmd:COMMANDLINE}} (`CMDLINE`) i vendos nga rreshti i komandës. Vendi dhe lartësia mbahen për CadCraft në këtë shfletues me pjesën tjetër të paraqitjes, kështu që një mjedis i ruajtur e mban; {{ui:Të përgjithshme}} › {{ui:Rivendos paraqitjen}} e ankoron rreshtin e komandës sërish në lartësinë standarde. Në telefon rreshti i komandës mbetet i ankoruar me një rresht historiku; butoni i historikut funksionon edhe atje.

{{ui:CadCraft}} › {{ui:Shkronjat e opsioneve}} mban shkronjat që zgjodhe për opsionet e komandave: {{ui:Redakto…}} hap skedarin, {{ui:Importo…}} e zëvendëson me një skedar që zgjedh ti, dhe {{ui:Eksporto}} e ruan. Shih [Jep opsioneve të komandave shkronjat e tua](topic:option-letters).

Kur dritarja është e shkurtër dhe kontrolli i paraqitjes ofron një paraqitje më të ngjeshur, {{ui:Po}} i tij gjithashtu e kthen rreshtin e komandës në një rresht nëse vizatimi është akoma i shkurtër pas shiritave të veglave.

## Zona e sipërme

{{ui:CadCraft}} › {{ui:Zona e sipërme}}: **Standarde** (fillimi) ose **Kompakte**. Kompakte i mban shiritat mbi vizatim të vegjël në çdo stil menuje: emrat e grupeve dhe fjalët nën ikona zhduken (majat e miut dhe lexuesit e ekranit i kanë akoma), dhe butonat janë më të ngjeshur. Punon me [Rreshtat e shiritit të veglave](topic:settings#toolbar-rows): Kompakte dhe **1 rresht** e lënë vizatimin me hapësirën më të madhe. {{cmd:TOPAREA}} e vendos.

## Treguesi i qoshes

Ç'ndodhet në qoshen e vizatimit:

- **Automatik** (fillimi): ikona e boshtit te skeda {{ui:Modeli}}, dhe kubi i pamjes te skeda {{ui:3D}}.
- **Ikona e boshtit**: shënuesi X dhe Y në qoshen e poshtme majtas të skedës {{ui:Modeli}}, dhe një shënues i vogël X, Y dhe Z te skeda 3D.
- **Kubi i pamjes**: një kub në qoshen e sipërme djathtas të të dyja skedave. Te skeda {{ui:Modeli}} tregon vizatimin nga lart, dhe një klikim në një tjetër faqe, skaj ose qoshe hap skedën {{ui:3D}} duke parë nga aty. Te skeda 3D rrotullohet me pamjen: kliko për të parë nga një anë, zvarrit për të rrotulluar, dhe shtëpia kthehet te pamja iso. Shih [Modeli në 3D](topic:3d-solids).
- **Asgjë**: asgjë në qoshe.

Fletët nuk shfaqin asnjërin.

## Gjatësia dhe sipërfaqja e zgjedhjes

- **Në shiritin e statusit** (fillimi): me objekte të zgjedhura, shiriti i statusit shfaq gjatësinë totale dhe sipërfaqen totale të atyre të mbyllura. Shih [Totalet e një zgjedhjeje](topic:properties-panel#totals-of-a-selection).
- **Fshehur**: shiriti i statusit i lë jashtë. Vetitë i shfaqin akoma për disa objekte.

## Rrjeta, Ortho dhe kapjet

Këto nuk janë në dialog: butonat {{ui:Rrjetë}}, {{ui:Ortho}} dhe {{ui:Kapje}} në shiritin e statusit (ose {{key:F7}}, {{key:F8}}, {{key:F3}}) dhe lista e kapjeve të objekteve pranë tyre mbahen mend kur i lë. Shih [Kap pikat mbi objekte](topic:object-snaps).
