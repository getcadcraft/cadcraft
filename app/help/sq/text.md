---
title: Shto tekst dhe etiketa
summary: Vendos etiketa dhomash me tekst një rreshti, shkruaj shënime me rreshta të mbështjellë me tekst paragrafi të shkruar në vend, dhe redakto tekstin më pas.
keywords: tekst, dtext, mtext, mleader, multileader, udhëheqës, revcloud, re revizioni, re, gjej, zëvendëso, gjej dhe zëvendëso, paragraf, mbështjellje, hapësira e rreshtit, etiketë, shënim, anotim, lartësi, drejtim, textmask, maskë teksti, maskë, wipeout, rrotullim, redakto tekst, ddedit, textedit, font
from: 4b76be99
---

## Çfarë do të bësh

Dy etiketa dhomash, të qendërzuara në dhomat e tyre, një shënim që mbështillet sipas gjerësisë së tij, pastaj një korrigjim të një prej etiketave.

## Lartësia e tekstit dhe shkalla e vizatimit

Lartësia e tekstit është në njësi vizatimi. Në një vizatim në milimetra që do të nxirret në 1:50, teksti 2.5 mm i lartë në letër duhet të jetë 2.5 × 50 = 125 njësi i lartë në model. Në një skedë fletë vizaton në njësi letre, kështu 2.5 aty është 2.5 mm në letër.

## Vendos një etiketë të qendërzuar

1. Shkruaj `DT` dhe shtyp {{key:Enter}} (ose kliko {{ui:Text}} në shiritin e veglave). Kërkesa thotë `Cakto pikën e fillimit të tekstit [Drejtim (J)]:`.
2. Shkruaj `J` dhe shtyp {{key:Enter}}.
3. Te `Jep një opsion [Majtas (L)/Qendra (C)/Djathtas (R)/Mesi (M)/TL/MC] <L>:`, shkruaj `MC` dhe shtyp {{key:Enter}}.
4. Te `Cakto pikën e vendosjes së tekstit`, kliko mesin e një dhome.
5. Te `Cakto lartësinë`, shkruaj `250` dhe shtyp {{key:Enter}}.
6. Te `Cakto këndin e rrotullimit të tekstit <0>`, shtyp {{key:Enter}}.
7. Te `Shkruaj tekstin`, shkruaj `KUZHINA` dhe shtyp {{key:Enter}}.

Etiketa shfaqet, e qendërzuar te pika ku klikove.

8. Shtyp {{key:Enter}} te kërkesa `Shkruaj tekstin` bosh për të përfunduar komandën.

## Shkruaj një shënim që mbështillet

Teksti i paragrafit ({{cmd:MTEXT}}) mbështillet sipas një gjerësie dhe shkruhet drejtpërdrejt në vizatim.

1. Shkruaj `T` dhe shtyp {{key:Enter}}, ose kliko {{ui:Paragraph}} në shiritin e veglave.
2. Te `Cakto cepin e parë`, kliko ku duhet të shkojë cepi i sipërm i majtë i shënimit.
3. Për të ndryshuar lartësinë së pari, shkruaj `H`, shtyp {{key:Enter}}, shkruaj `250` dhe shtyp {{key:Enter}}.
4. Te `Cakto cepin e kundërt [Lartësia (H)/Drejtimi (J)/Hapësira e rreshtave (L)/Rrotullimi (R)/Gjerësia (W)]`, kliko djathtas nga cepi i parë. Distanca përgjatë është gjerësia me të cilën teksti mbështillet; sa poshtë kliko nuk e kufizon.
5. Një kuti hapet mbi vizatim me kursorin brenda. Shkruaj `TË GJITHA PËRMASAT JANË NË MILIMETRA PËRVEÇ KUR SHËNOHET ASHTU`. Fjalët mbështillen sipas gjerësisë ndërsa shkruan.
6. Shtyp {{key:Enter}} për të nisur një paragraf të ri dhe shkruaj `KONTROLLO NË VEND`.
7. Shtyp {{key:Mod+Enter}}, kliko {{ui:OK}}, ose kliko kudo jashtë kutisë. Shënimi është një objekt i vetëm.

Shiriti mbi kutinë ndryshon {{ui:Height}}, {{ui:Line spacing}} (1 është normal, 1.5 është gjysmë më shumë), {{ui:Width}} (0 = pa mbështjellje) dhe {{ui:Justify}} ndërsa shkruan. {{key:Esc}} ose {{ui:Cancel}} e mbyllin pa shtuar asgjë.

Opsionet te cepi i dytë: `H` lartësi, `J` drejtim (`TL` cepi i sipërm i majtë … `BR` cepi i poshtëm i djathtë: cepi ose mesi i kutisë që mbetet në vend), `L` hapësira e rreshtave, `R` rrotullim, `W` një gjerësi e shkruar në vend të cepit të dytë.

:::note
Ndërsa kutia është e hapur, {{key:Space}} shkruan një hapësirë dhe {{key:Enter}} nis një paragraf të ri. Një DWG i ruajtur mban tekstin e paragrafit si MTEXT; një DXF R12 nuk ka tekst paragrafi, kështu çdo rresht ruhet si tekst i veçantë.
:::

### Disa rreshta të veçantë në vend

{{cmd:TEXT}} (`DT`) kërkon një rresht në të njëjtën kohë: çdo {{key:Enter}} nis rreshtin tjetër, 1.667 herë lartësia e tekstit më poshtë, dhe çdo rresht është objekt i vetë. Shtyp {{key:Enter}} në një rresht bosh për të përfunduar.

## Opsionet e drejtimit

| Opsioni | Pika që klikon është |
|---|---|
| Majtas (parazgjedhur) | Skaji i majtë i bazës |
| Qendra | Mesi i bazës |
| Djathtas | Skaji i djathtë i bazës |
| Mesi, MC | Mesi i tekstit, si gjerësisht ashtu edhe lart e poshtë |
| TL | Cepi i sipërm i majtë |

## Redakto tekstin

1. Kliko dy herë mbi një objekt teksti. Hapet në të njëjtën kutizë si teksti i ri i paragrafit, me kursorin në fund.
2. Ndrysho fjalët.
3. Shtyp {{key:Mod+Enter}} ose kliko jashtë kutisë. Teksti në vizatim ndryshon; {{key:Esc}} e lë ashtu si ishte.

{{cmd:TEXTEDIT}} (`ED`) bën të njëjtën gjë: zgjidh një tekst pas tjetrit dhe shtyp {{key:Enter}} kur mbaron.

Zgjidh një tekst për ta ndryshuar në panelin e djathtë: {{ui:Text}}, {{ui:Height}}, {{ui:Wrap width}} (0 = pa mbështjellje), {{ui:Line spacing}}, {{ui:Rotation}}, pozicioni X dhe Y dhe {{ui:Justify}}. Lista {{ui:Justify}} ofron gjithashtu Poshtë majtas, të cilën e përdorin ndonjëherë tekstet nga programe të tjera.

## Formatimi brenda tekstit të paragrafit nga programe të tjera

Teksti i paragrafit në një DWG ose DXF mund të mbajë kode brenda: ngjyra për fjalë, të trasha dhe të pjerrëta, nënvizim, mbivizim dhe vijë përshkuese, thyesa të stivuara si 1/2, dhe një lartësi tjetër për një fjalë. CadCraft i mban ato, i vizaton (në ekran dhe në një PDF të nxjerrë) dhe i ruan përsëri të pandryshuara.

Kur redakton një tekst të tillë (klik dy herë, {{cmd:TEXTEDIT}}, fusha Tekst e panelit të djathtë, ose {{cmd:FIND}} me Zëvendëso), ti redakton fjalët e tij të thjeshta. Një fjalë që shkruan shkon te segmenti pranë saj dhe merr ngjyrën dhe stilin e tij; kodet e tjera mbeten aty ku janë. Nëse rishkruan numrat e një thyese të stivuar, ajo thyesë bëhet tekst i thjeshtë. Vendosja e gjithë tekstit nga fusha Tekst mban kodet vetëm aty ku mund të dallojë cilat fjalë mbetën.

Emrat e fonteve (`\F`) mbahen dhe ruhen, por gjithçka vizatohet me të njëjtin font të stilit Helvetica. Nuk ka ende shirit veglash për shkrimin e kodeve.

## Tregoj diçka: udhëheqës të shumëfishtë

{{ui:Leader}} te grupi {{ui:Annotate}} ({{cmd:MLEADER}}, `MLD`) vizaton një shigjetë, një vijë udhëheqëse, një mbërritje të shkurtër dhe një shënim, si një objekt i vetëm.

1. Kliko {{ui:Leader}}. Te `Cakto vendndodhjen e shigjetës së udhëheqësit`, kliko çfarë ka lidhje shënimi.
2. Te `Cakto vendndodhjen e mbërritjes së udhëheqësit`, kliko ku shkon shënimi. Mbërritja kthehet nga ana ku klikove.
3. Shkruaj shënimin në kutinë që hapet dhe shtyp {{key:Mod+Enter}}.

`A` dhe `L` te pyetja e parë vendosin madhësinë e shigjetës dhe gjatësinë e mbërritjes; lartësia e tekstit vjen nga {{ui:Text height}} për përmasat e reja, shumëzuar me {{ui:Overall scale}}. Kliko dy herë një udhëheqës për të ndryshuar fjalët e tij. Dorezat zhvendosin shigjetën dhe mbërritjen; shënimi ndjek mbërritjen. Te {{ui:Properties}}: {{ui:Text}}, {{ui:Height}}, {{ui:Wrap width}}, {{ui:Arrowhead size}} dhe {{ui:Landing distance}}.

:::note
Udhëheqësit e shumëfishtë ruhen si udhëheqës të vërtetë në DWG. DXF nuk ka udhëheqës të shumëfishtë në R12 ose 2000, kështu atje ruhen si vijat, shigjeta dhe teksti që vizatojnë.
:::

## Shëno ndryshimet me një re revizioni

{{ui:Annotate}} › {{ui:More}} › {{ui:Revision cloud}} ({{cmd:REVCLOUD}}, `RC`) vizaton një re harqesh rreth asaj që ka ndryshuar. Historiku tregon gjatësinë e harkut dhe llojin që do të përdorë.

- **Drejtkëndëshe** (hera e parë): kliko dy cepa.
- `P` **Shumëkëndore**: kliko cepat, {{key:Enter}} mbyll resë.
- `F` **Dorë e lirë**: kliko ku nis, pastaj lëviz treguesin rreth zonës pa klikuar; shtohet një hark çdo gjatësi harku. Kliko ose shtyp {{key:Enter}} për ta mbyllur.
- `O` **Objekt**: zgjidh një polivijë të mbyllur, rreth ose elips (ose një vijë, hark ose polivijë të hapur); ajo bëhet re. `Kthe drejtimin?` `Y` i kthen harqet brenda.
- `A` **Gjatësia e harkut**: gjatësia e secilit hark. Zgjidh një që i përshtatet shkallës së nxjerrjes.

Re është një polivijë e mbyllur harqesh, kështu ruhet në çdo format.

## Gjej dhe zëvendëso fjalë

{{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}} ({{cmd:FIND}}) kërkon në tekst, në vlerat e atributeve të blloqeve dhe në tekstin e përmasave në skedën e hapur (ose vetëm te objektet e zgjedhura).

1. Shkruaj fjalët në {{ui:Find}}. Lista tregon çdo vend ku janë dhe numrin.
2. Zgjidh {{ui:Match case}}, {{ui:Whole words only}} ose {{ui:Use wildcards (* and ?)}} nëse të duhen, dhe hiq shenjën nga ato ku nuk do të kërkosh.
3. Kliko {{ui:Select found}} për të zgjedhur ato objekte, ose shkruaj fjalët e reja në {{ui:Replace with}} (lista tregon çfarë bëhet nga secila) dhe kliko {{ui:Replace all}}. Një {{key:Mod+Z}} zhbën çdo zëvendësim.

Vlera e matur e një përmase nuk është tekst, kështu nuk zëvendësohet kurrë: në `<> TYP.`, vetëm `TYP.` mund të zëvendësohet.

## Fshih vijat pas një etikete

1. Zgjidh tekstet, shkruaj {{cmd:TEXTMASK}} dhe shtyp {{key:Enter}}.
2. `B` vizaton sfondin e vizatimit pas tyre; `C` kërkon një numër ngjyre. `O` e heq maskën.
3. `Faktori i zhvendosjes së kufirit`: {{key:Enter}} mban 1.5, gjysmë lartësie teksti rreth tekstit.

Maska mbulon vijat nën tekst, në ekran dhe kur nxirret. DWG 2004 ose më të reja dhe DXF 2000 e mbajnë; formati DWG 2000 dhe DXF R12 nuk mund, dhe ruajtja e thotë këtë.

## Font

Gjithë teksti vizatohet me një font të stilit Helvetica, në ekran dhe në PDF. Teksti nga vizatimet e hapura mban fjalët, lartësinë dhe pozicionin e tij, por jo fontin origjinal (emri i një fonti brenda tekstit të paragrafit ruhet në skedar, shih më sipër).

Në PDF-të e nxjerra, teksti në çdo shkrim evropian, cirilik ose grek shtypet si vetvetja (PDF mban shkronjat që i duhen, dhe ti mund ta zgjedhësh dhe kërkosh akoma tekstin). Teksti kinez, japonez dhe koreanë shtypet gjithashtu si vetvetja (nxjerrja merr një font më të madh herën e parë që nevojitet). Teksti arabisht, persisht, urdu dhe hebraisht shtypet gjithashtu si vetvetja (shih seksionin tjetër). Karakteret për të cilat asnjë font nuk ka shkronjë shtypen si "?", dhe historiku thotë sa ishin.

## Tekst nga e djathta në të majtë: arabisht, persisht, urdu, hebraisht

Shkruaj tekstin si kudo tjetër: {{cmd:TEXT}} dhe {{cmd:MTEXT}} vizatojnë çdo rresht sipas renditjes së leximit. Një rresht ku shkronja e parë është arabe ose hebraike lexohet nga e djathta në të majtë; numrat dhe fjalët latine brenda tij mbajnë renditjen e tyre nga e majta në të djathtë, dhe shkronjat me shkrim arab lidhen. Një rresht që fillon me një shkronjë latine mbetet nga e majta në të djathtë, me fjalët nga e djathta në të majtë në vendin e tyre brenda. Çdo paragraf i një teksti me shumë rreshta ka drejtimin e vet, dhe një paragraf i mbështjellë e mban drejtimin në çdo rresht.

Teksti ruhet ashtu siç e shkruan, kështu skedarët DWG dhe DXF e shkëmbejnë me programe të tjera pa ndryshim. Pika e futjes dhe drejtimi ({{ui:Left}}, {{ui:Center}}, {{ui:Right}}) kanë të njëjtën anë si çdo tekst tjetër: një shënim nga e djathta në të majtë që duhet të varet nga skaji i tij i djathtë ka nevojë për {{ui:Right}}.

Në ekran, shkronjat vijnë nga fontet e sistemit tënd. Në një PDF të nxjerrë, hebraishtja përdor të njëjtin font të integruar si teksti latin; teksti me shkrim arab bën që nxjerrja të marrë edhe një font tjetër (nën 1 MB, një herë), dhe pastaj i gjithë PDF-i shtypet me atë font. Ai font nuk ka formë të vetën për tre karaktere urdu (heh goal, yeh barree dhe pikën e plotë urdu): ato shtypen me formën e shkronjës arabe më të afërt. Një vizatim që ka tekst me shkrim arab dhe kinez, japonez ose koreanë shtyp një nga të dyja si "?", sepse një nxjerrje mban një font. Teksti në një font SHX të ngarkuar renditet dhe lidhet kur fonti i mban shkronjat në vendet e tyre Unicode; për fontet e vjetra, shkronjat e të cilave janë formuar tashmë, përdor {{ui:Reverse}} në {{cmd:SHXFONTS}} si më parë.

## Gabimet e zakonshme

- **Teksti është shumë i vogël për t'u parë.** Lartësia është në njësi vizatimi. Në një vizatim të madh, përdor një lartësi të madhe (shih më sipër), ose zmadho.
- **Komanda mbaroi pas një rreshti.** Shtyp {{key:Enter}} në një rresht bosh te {{cmd:TEXT}}. Nisu përsëri, ose përdor tekst paragrafi (`T`), ku {{key:Enter}} nis një paragraf të ri.
- **`T` hapi një kuti në vend që të kërkojë një rresht.** Si në AutoCAD, `T` është tekst paragrafi ({{cmd:MTEXT}}); teksti një rreshti është `DT`.
- **Teksti mbështillet në një vend tjetër se në AutoCAD.** CadCraft mbështillet me gjerësitë e Helvetica; një font tjetër mund të nxjerrë një fjalë më shumë ose më pak në një rresht.
- **Tekst në një kopje të pasqyruar.** Vendoset i pasqyruar, por mbetet i lexueshëm nga e majta në të djathtë.
