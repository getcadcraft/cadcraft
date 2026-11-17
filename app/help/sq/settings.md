---
title: Cilësimet e CadCraft
summary: Cilësimet që i përkasin aplikacionit të hartimit: madhësia e kursorit, nga ku varet një kopje e ngjitur te kursori, çfarë bën një klikim me përzgjedhjen, sa rreshta përdor shiriti i veglave, ku ndodhet rreshti i komandës dhe sa i lartë është, një zonë e sipërme kompakte, dhe treguesi i qoshes.
keywords: rreshti i komandës, lundrues, ankoro, një rresht, f2, historiku i komandave, commandline, cmdline, toparea, zona e sipërme, kompakte, cursorsize, kryq ekran i plotë, kursor ekran i plotë, skaj më skaj, rreshta të shiritit të veglave, shfaqja e shiritit, ctrl f1, cilësimet, preferencat, opsionet, treguesi i qoshes, kubi i pamjes, ikona e boshtit, ucs, kursori, kryqi, kutia e zgjedhjes, pika e ngjitjes, pika bazë, klikimi i objekteve, përzgjedhja, pickadd, shift, rivendos
from: 0896eb42
---

Hap {{ui:Cilësimet}} me ingranazhin në shiritin e aplikacionit ose {{key:Mod+,}}. Skeda e parë, {{ui:CadCraft}}, mban cilësimet që i përkasin këtij aplikacioni; {{ui:Të përgjithshme}} mban ato që i ndajnë të gjitha aplikacionet e familjes (tema, madhësia dhe gjerësia e tekstit të panelit, pamja dhe renditja e shiritit të veglave). Cilësimet e CadCraft ekzistojnë vetëm në aplikacion: i ndryshoni këtu, dhe ky shfletues i mban mend. {{ui:Rivendos cilësimet e CadCraft}} i kthen të gjitha në gjendjen fillestare.

## Kursori

**Të vogël**, **Mesatar** (fillimi), **Të madh** ose **Ekran i plotë**: madhësia e kryqit dhe e kutisë së zgjedhjes në vizatim. Një kuti zgjedhjeje më e madhe zgjedh objekte edhe nga pak më larg, gjë që ndihmon në një ekran me prekje ose një vizatim shumë të imët.

**Ekran i plotë** shtrin dy vijat e kryqit nga skaji në skaj të vizatimit, edhe kur nuk po punon ndonjë komandë, që të kontrollosh me sy që dy gjëra janë në një vijë përgjatë gjithë pamjes. Me pamjen e ndarë, vijat mbeten në panelin ku punoni. Njëlloj si {{cmd:CURSORSIZE}} 100 të AutoCAD: shkruaj {{cmd:CURSORSIZE}} dhe 100 për ekran të plotë; një numër më i vogël zgjedh madhësinë më të afërt (nën 5 Të vogël, 5 deri 9 Mesatar, 10 deri 99 Të madh).

## Pika e ngjitjes

Nga ku varet një kopje e ngjitur te kursori pas {{key:Mod+V}} ({{cmd:PASTECLIP}}), deri sa të klikoni:

- **Qoshja e poshtme majtas** (fillimi): qoshja e poshtme majtas e shtrirjes së objekteve të kopjuara, si në AutoCAD.
- **Qendra**: mesi i shtrirjes së tyre. E dobishme për të vendosur një simbol me sy.

Një kopje e bërë me `COPYBASE` varet gjithmonë nga pika bazë që keni zgjedhur. {{ui:Ngjit në vend}} ({{key:Mod+Shift+V}}) e injoron këtë cilësim: ruan koordinatat origjinale. Shih [Kopjo, ngjit dhe dublo](topic:copy-paste).

## Klikimi i objekteve

Çfarë bën një klikim në vizatim me përzgjedhjen kur nuk po punon ndonjë komandë:

- **Shton te përzgjedhja** (fillimi): çdo klikim ose dritare shton objekte; {{key:Shift}}+klikim, ose një dritare me {{key:Shift}}, i heq ato.
- **Zëvendëson përzgjedhjen**: një klikim ose dritare përzgjedh vetëm atë që zgjedh. {{key:Shift}}+klikim shton një objekt, ose heq një që është tashmë i përzgjedhur; një dritare me {{key:Shift}} shton.

Te një kërkesë `Select objects:` brenda një komande, klikimet gjithmonë shtojnë (dhe {{key:Shift}} heq), çfarëdo që thotë ky cilësim. Shih [Përzgjidh objektet](topic:select-objects).

## Klikimi në një vend bosh

Çfarë bën një klikim aty ku nuk ka objekt kur nuk po punon ndonjë komandë. Në çdo rast nis një dritare përzgjedhjeje (klikimi i dytë e përfundon).

- **Pastron përzgjedhjen** (fillimi): ajo që ishte përzgjedhur lihet e lirë. Mbaje {{key:Shift}} teksa klikoni për ta mbajtur.
- **Mban përzgjedhjen**: përzgjedhja mbetet, si në programe të tjera hartimi; dritarja shton në të. Shtyp {{key:Esc}} për ta pastruar.

## Tërheqja për përzgjedhje

Çfarë vizaton shtypja dhe tërheqja në një vend bosh:

- **Laso** (fillimi): një kontur i lirë. Lëvizja e parë djathtas përzgjedh atë që është tërësisht brenda, e para majtas atë që prek; {{key:Space}} gjatë tërheqjes ndërron midis dritares, kryqëzimit dhe gardhit.
- **Drejtkëndësh**: kutia, siç e vizaton një klikim dhe një klikim i dytë.

{{cmd:LASSOMODE}} `1` ose `0` vendos të njëjtën gjë. Shih [Përzgjedhja me laso](topic:lasso-selection).

## Tërheqja për prerje dhe zgjatje

Çfarë bën shtypja në një vend bosh dhe tërheqja në {{cmd:TRIM}} dhe {{cmd:EXTEND}}:

- **Një shteg** (fillimi): një shteg i lirë; çdo pjesë që kalon pritet (ose zgjatet).
- **Një dritare**: një kuti; çdo pjesë që prek pritet, si bën opsioni `C`.

Shih [Prerje dhe zgjatje](topic:trim-and-extend).

## Pozicioni i shiritit të veglave

{{ui:CadCraft}} › {{ui:Pozicioni i shiritit të veglave}}: **Lart** (fillimi, siç ka qenë gjithmonë), **Poshtë**, **Majtas** ose **Djathtas**. Majtas ose djathtas grupet e veglave renditen në një kolonë që lëviz kur është më e lartë se dritarja, dhe butonat palosen dy ose tre në një rresht. Zgjedhja ruhet me cilësimet tuaja, dhe {{cmd:TOOLBARDOCK}} (`TBDOCK`) e vendos nga rreshti i komandës. {{ui:Të përgjithshme}} › {{ui:Rivendos paraqitjen}} e kthen shiritin lart.

Shiritat e stileve të menusë qëndrojnë brenda shiritit të veglave dhe lëvizin me të, por stili {{ui:Shirit}} është bërë për të shtrirë sipër ose poshtë: në një anë merr një kolonë të ngushtë që lëviz. Në telefon, shiriti i veglave mbetet aty ku e vendos paraqitja e telefonit.

## Rreshtat e shiritit të veglave

Sa rreshta përdorin veglat mbi vizatim, në shiritin e CadCraft dhe te stilet {{ui:Hartim klasik}} dhe {{ui:Shirit}}:

- **Palos për t’u përshtatur** (fillimi): veglat palosen sipas gjerësisë së dritares.
- **2 rreshta**: më së shumti dy rreshta. Kur veglat palosen në dy rreshta ose më pak me këtë gjerësi, thjesht palosen; ndryshe qëndrojnë në dy rreshta që lëvizin anash.
- **1 rresht**: një rresht që lëviz anash, që i lë vizatimit hapësirën më të madhe.

{{key:Shift+Ctrl+F1}} kalon nëpër të tre, dhe {{cmd:TOOLBARROWS}} vendos një të tillë. Çfarë shfaqin butonat (ikona dhe tekst, vetëm ikona, ose vetëm tekst) është një cilësim i {{ui:Të përgjithshme}} › {{ui:Shiriti i mjeteve}}; {{key:Ctrl+F1}} kalon nëpër të dhe {{cmd:TOOLBAR}} e vendos.

## Rreshti i komandës

Rreshti i komandës mund të qëndrojë i ankoruar nën vizatim, siç ka qenë gjithmonë, ose të lundrojë mbi të, dhe mund të jetë aq i hollë sa një rresht.

- **Bëje lundrues.** Tërhiq dorezën në skajin e majtë të tij në vizatim, ose zgjidh {{ui:Vendose mbi vizatimin}} në menynë e vet {{ui:Opsionet e rreshtit të komandës}} (tre pikat në skajin e djathtë). Tërhiq dorezën sërish për ta zhvendosur; vendi i tij ruhet kur ndryshon madhësia e dritares. Tërhiq skajin e djathtë për ta bërë më të gjerë ose më të ngushtë. Lëshoje në shiritin e statusit, ose zgjidh {{ui:Vendose në fund}}, për ta ankoruar sërish.
- **Bëje më të hollë ose më të lartë.** Tërhiq skajin e sipërm: çdo hap është një rresht historiku. Deri në zero rreshta bëhet një **rresht komande me një rresht**: vetëm kërkesa dhe ajo që shkruani, dhe një mesazh i ri shfaqet mbi të për një çast. Një klikim i dyfishtë në skajin e sipërm kalon midis një rreshti dhe lartësisë që kishit.
- **Historiku.** {{key:F2}}, ose butoni i orës në rreshtin e komandës ({{ui:Historiku i komandave (F2)}}), hap gjithë historikun mbi rresht (nën të kur rreshti lundron afër pjesës së sipërme të dritares). Shkrimi vazhdon të shkojë te rreshti i komandës; {{key:PageUp}} dhe {{key:PageDown}} lëvizin historikun, dhe {{key:Esc}}, {{key:F2}} ose një klikim gjetkë e mbyll. Një çelës i juaji vetjak te F2 e mposht këtë.
- **Nga tastiera.** Doreza është një buton: kur ka fokus, tastet me shigjeta lëvizin një rresht komande lundrues (me {{key:Shift}}, me hapa më të mëdhenj); {{key:Up}} e bën lundrues një që është i ankoruar, dhe {{key:Down}} te skaji i poshtëm e ankoron. Skaji i sipërm është një ndarës: {{key:Up}} dhe {{key:Down}} shtojnë ose heqin një rresht, {{key:Home}} e bën një rresht, {{key:End}} më të lartin. Lexuesit e ekranit dëgjojnë ende çdo mesazh, edhe në rreshtin e komandës me një rresht.

{{ui:CadCraft}} › {{ui:Rreshti i komandës}} ka të njëjtat zgjedhje: {{ui:Ankoruar në fund}} ose {{ui:Lundrues}}, {{ui:Rreshta historiku të shfaqur}} (0 deri 12) dhe {{ui:Lartësi standarde}}. {{cmd:COMMANDLINE}} (`CMDLINE`) i vendos nga rreshti i komandës. Vendi dhe lartësia ruhen për CadCraft në këtë shfletues bashkë me pjesën tjetër të paraqitjes, kështu që një mjedis pune i ruajtur i mban ato; {{ui:Të përgjithshme}} › {{ui:Rivendos paraqitjen}} e ankoron sërish rreshtin e komandës me lartësinë standarde. Në telefon, rreshti i komandës mbetet i ankoruar me një rresht historiku; butoni i historikut punon edhe atje.

Kur dritarja është e shkurtër dhe kontrolli i paraqitjes ofron një paraqitje më të ngjeshur, {{ui:Po}} i kthen gjithashtu rreshtin e komandës në një rresht nëse vizatimi është ende i shkurtër pas shiritave të veglave.

## Zona e sipërme

{{ui:CadCraft}} › {{ui:Zona e sipërme}}: **Standard** (fillimi) ose **Kompakte**. Kompakte i mban shiritat mbi vizatim të vegjël në çdo stil menuje: emrat e grupeve dhe fjalët nën ikona hiqen (përshkrimet dhe lexuesit e ekranit i kanë akoma) dhe butonat janë më të ngjeshur. Punon me [Rreshtat e shiritit të veglave](topic:settings#toolbar-rows): Kompakte dhe **1 rresht** i lënë vizatimit hapësirën më të madhe. {{cmd:TOPAREA}} e vendos.

## Treguesi i qoshes

Çfarë qëndron në qoshen e vizatimit:

- **Automatik** (fillimi): ikona e boshtit te skeda {{ui:Modeli}} dhe kubi i pamjes te skeda {{ui:3D}}.
- **Ikona e boshtit**: shenja X dhe Y në qoshen e poshtme majtas të skedës {{ui:Modeli}}, dhe një shenjë e vogël X, Y dhe Z te skeda {{ui:3D}}.
- **Kubi i pamjes**: një kub në qoshen e sipërme djathtas të të dyja skedave. Te skeda {{ui:Modeli}} shfaq vizatimin nga lart, dhe klikimi i një faqeje, skaji ose qoshe tjetër hap skedën {{ui:3D}} duke parë nga aty. Te skeda 3D rrotullohet me pamjen: kliko për të parë nga një anë, tërhiq për të orbituar, dhe shtëpia kthehet te pamja izometrike. Shih [Modeli në 3D](topic:3d-solids).
- **Asnjë**: asgjë në qoshe.

Fletët nuk shfaqin asnjërin.

## Gjatësia dhe sipërfaqja e përzgjedhjes

- **Në shiritin e statusit** (fillimi): kur ka objekte të përzgjedhura, shiriti i statusit shfaq gjatësinë totale të tyre dhe sipërfaqen totale të atyre të mbyllura. Shih [Totalet e një përzgjedhjeje](topic:properties-panel#totals-of-a-selection).
- **Fshehur**: shiriti i statusit i lë jashtë. Vetitë i shfaqin ende për disa objekte.

## Rrjeta, Ortho dhe kapjet

Këto nuk janë në dialog: butonat {{ui:Rrjetë}}, {{ui:Ortho}} dhe {{ui:Kapje}} në shiritin e statusit (ose {{key:F7}}, {{key:F8}}, {{key:F3}}) dhe lista e kapjeve të objekteve pranë tyre mbahen mend kur i lini. Shih [Kapje te pikat e objekteve](topic:object-snaps).
