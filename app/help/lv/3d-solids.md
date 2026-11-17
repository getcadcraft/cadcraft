---
title: Modelēt 3D
summary: Skatiet rasējumu 3D cilnē un izveidojiet no tā vienkāršus cietos ķermeņus: ekstrudēt (ar konusu vai pa ceļu), rotēt, spiest un vilkt virsmas, veidot kastes, cilindrus un klinus; savienot, atņemt un krustot tos, pēc tam pārvietot, kopēt, pagriezt un dzēst, kā arī novietot lapā plakanus 2D skatus.
keywords: 3d, trīs d, ciets ķermenis, cietie ķermeņi, 3dsolid, reģions, ķermenis, acis, sat, sab, cietie ķermeņi no citām programmām, atvērt 3D rasējumu, extrude, ext, revolve, rev, sweep, konuss, ceļš, presspull, spiest vilkt, bīdīt, kaste, cilindrs, cyl, ķīlis, 3dorbit, orbīta, skats, vscurrent, vizuālais stils, ēnots, slēpta līnija, rāmis, rentgens, xray, iso, perspektīva, paralēls, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, skata kubs, savienot, uni, atņemt, su, krustot, in, bulas, kombinēt, savienot cietos ķermeņus, viewbase, flatshot, plakans skats, 2d skats, rasējuma skats, priekšskats, skats no augšas, sānskats, slēptas līnijas
from: 13060e71
---

## Ko jūs izveidosiet

1000 × 600 telpas plānu ekstrudēsiet par 400 augstu bloku, pacelsiet vienu virsmu un blakus novietosiet cilindru — pēc tam modeli saglabāsiet kopā ar rasējumu un eksportēsiet 3D skatītājam vai printerim.

Cilne {{ui:3D}} atrodas blakus {{ui:Modelis}} zem rasējuma. Tā rāda modelēšanas telpas rasējumu, kas guļ uz zemes savās slāņu krāsās (izslēgti vai iesaldēti slāņi paliek paslēpti), un izveidotos cietos ķermeņus. Pirmo reizi atverot, 3D skats ielādējas; pēc tam pārslēgšanās notiek uzreiz.

## Ekstrudēt formu

1. Cilnē {{ui:Modelis}} ierakstiet `REC` un nospiediet {{key:Enter}}. Ierakstiet `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Noklikšķiniet uz cilnes {{ui:3D}}. Rīkjoslā {{ui:3D}} grupa atrodas rasējuma grupu vietā.
3. Noklikšķiniet {{ui:Ekstrudēt}} (vai ierakstiet {{cmd:EXTRUDE}}, `EXT`). Noklikšķiniet taisnstūra iekšpusē un nospiediet {{key:Enter}}.
4. Ierakstiet `400` un nospiediet {{key:Enter}}. Vēsturē parādās "Ekstrudēts 1 ciets ķermenis, 400 augstumā" ar tā tilpumu.

Slēgtas polilīnijas (arī ar lokiem), taisnstūri, daudzstūri, riņķi un elipses tiek ekstrudēti; līnijas un atvērtās polilīnijas nē, un vēsture norāda iemeslu. Varat arī vispirms atlasīt formas cilnē {{ui:Modelis}} un tur ierakstīt `EXTRUDE`. Augstuma vietā varat to noklikšķināt: kontūra seko kursoram uz augšu un uz leju. Negatīvs augstums iet uz leju. Augstuma uzvednē ierakstiet `D`, lai pēc ekstrudēšanas dzēstu 2D formas (vēlreiz `D` tās paturēs).

Augstuma uzvednē `T` (konusa leņķis) pieprasa leņķi grādos: malas noliecas uz iekšu, tāpēc augšdaļa ir mazāka (negatīvs leņķis to padara lielāku); pārāk stāvs leņķis formai tiek noraidīts. `P` (ceļš) bīda formas pa ceļu (skatīt zemāk).

## Rotēt un bīdīt

- {{cmd:REVOLVE}} (`REV`, vai {{ui:Vairāk}} › {{ui:Rotēt ap asi}}): atlasiet slēgtas formas, nospiediet {{key:Enter}}, tad noklikšķiniet abus ass galus (vai ierakstiet `X` vai `Y` rasējuma asij caur 0,0), tad ierakstiet leņķi vai nospiediet {{key:Enter}}, lai pagrieztu pilnu apli. Forma pagriežas ap asi un paceļas no zemes: uzzīmējiet pusi vāzes kontūras blakus līnijai un rotējiet to ap šo līniju. Forma var pieskarties asij, bet nedrīkst to šķērsot. Pilns apgrieziens ir 48 soļi.
- {{cmd:SWEEP}} (vai {{ui:Vairāk}} › {{ui:Bīdīt pa ceļu}}, vai `P` EXTRUDE augstuma uzvednē): atlasiet slēgtas formas (profilu), nospiediet {{key:Enter}}, tad noklikšķiniet ceļu: līniju, polilīniju, loku, riņķi vai elipsi. Profils paceļas šķērsām pār ceļu, ar savu vidu uz tā, un iet pa to; stūri tiek nogriezti zem leņķa, un slēgts ceļš veido gredzenu. Neliels taisnstūris, kas bīdīts pa telpas kontūru, veido plinti; riņķis pa polilīniju veido cauruli.

## Spiest un vilkt virsmu

1. Noklikšķiniet {{ui:Spiest/vilkt}} (vai ierakstiet {{cmd:PRESSPULL}}).
2. Noklikšķiniet bloka augšējo virsmu.
3. Ierakstiet `100` un nospiediet {{key:Enter}}, vai pārvietojiet kursoru un noklikšķiniet. Bloks kļūst 500 augsts.

## Kastes, cilindri un kīļi

- {{cmd:BOX}}: noklikšķiniet vai ierakstiet divus stūrus, tad augstumu.
- {{cmd:CYLINDER}} (`CYL`): centrs, rādiuss, tad augstums. Cilindriem un ekstrudētiem riņķiem ir 48 malas, ēnotas vienmērīgi.
- {{cmd:WEDGE}} (`WE`): divi stūri un augstums. Pirmajā stūrī tas ir pilnā augstumā un nogāzīsies līdz nullei otrā.

Cilnē 3D klikšķis nolaižas uz virsmas vai malas zem kursora, citādi uz zemes, tāpēc kaste var stāvēt uz cita cieta ķermeņa.

## Pārvietot, kopēt, pagriezt un dzēst cietos ķermeņus

Cilnē 3D klikšķis atlasa cietu ķermeni; velciet no kreisās uz labo, lai izveidotu logu, un no labās uz kreiso, lai izveidotu krustojumu. Pēc tam:

- {{cmd:MOVE}}: noklikšķiniet bāzes punktu un vietu, uz kurieni tas jāpārvieto, vai ierakstiet `<100,0,0>` (vai `@100,0`) attālumam pa X, Y un Z.
- {{cmd:COPY}}: tas pats, bet oriģināls paliek.
- {{cmd:ROTATE}}: ierakstiet leņķi (tas pagriežas ap atlases vidu, ap Z), vai noklikšķiniet centru, sākuma punktu un leņķi.
- {{cmd:ERASE}} vai {{key:Delete}}.

## Savienot, atņemt un krustot cietos ķermeņus

Atveriet {{ui:Vairāk}} 3D rīkjoslā vai ierakstiet komandu:

- {{cmd:UNION}} (`UNI`): atlasiet cietos ķermeņus, nospiediet {{key:Enter}}: tie kļūst par vienu cietu ķermeni.
- {{cmd:SUBTRACT}} (`SU`): atlasiet cietos ķermeņus, ko paturēt, un nospiediet {{key:Enter}}, tad tos, ko atņemt, un nospiediet {{key:Enter}}. Caurums caur bloku: uzzīmējiet cilindru caur to un tad atņemiet cilindru.
- {{cmd:INTERSECT}} (`IN`): atlasiet cietos ķermeņus, nospiediet {{key:Enter}}: paliek tikai tas, kas visiem ir kopīgs.

Vēsture rāda rezultāta tilpumu. Katra no tām ir viens atsaukšanas solis. Pirmā, ko palaižat, ielādē 3D bulu dzinēju (apmēram 0,5 MB; iekļauts {{ui:Saglabāt bezsaistei}}). Savienot var tikai slēgtus cietos ķermeņus: ciets ķermenis ar atvērtām malām (no citas programmas brīvām 3D virsmām) tiek noraidīts ar šo iemeslu. Rezultāts ir viens ciets ķermenis; izliektas virsmas paliek veidotas no plakaniem facetiem, kā bija cilindrs.

Veiciet dubultklikšķi uz cieta ķermeņa, lai rediģētu tā virsmas un malas atsevišķi; {{key:Esc}} to aizver. Katra 3D izmaiņa ir viens atsaukšanas solis tajā pašā vēsturē kopā ar rasējumu: {{key:Mod+Z}} atsauc pēdējo darbību jebkurā cilnē.

## Plakani skati lapā

1. Atveriet lapas cilni (vai paliciet pie {{ui:Modelis}}), tad ierakstiet {{cmd:VIEWBASE}} (vai `FLATSHOT`).
2. Izvēlieties skatu: {{key:Enter}} priekšskatam vai `T` (augša), `R` (labā), `L` (kreisā), `BA` (aizmugure), `BO` (apakša), `I` (izometrija).
3. {{key:Enter}} rāda slēptās līnijas punktētas; `H` tās neiekļauj.
4. {{key:Enter}} pieņem mērogu, ko iesaka CadCraft: lapā lielāko standarta mērogu (piemēram, 1:20), kurā skats iekļaujas mazāk nekā pusē no papīra. Vai ierakstiet kādu: `1:50`, `2:1`.
5. Noklikšķiniet vai ierakstiet, kur jāatrodas skata centram.

Skats ir viena bloka atsauce, `VIEW-FRONT-1` un tā tālāk: redzamās malas slānī VIEW-VISIBLE (0,5 mm), slēptās VIEW-HIDDEN (punktētas, 0,25 mm). Pārvietojiet, izmēriet un drukājiet to kā jebkuru citu rasējuma objektu. Tas ir cieto ķermeņu attēls brīdī, kad to izveidojāt: pēc to mainīšanas dzēsiet skatu un palaidiet {{cmd:VIEWBASE}} vēlreiz. Vairākiem skatiem palaidiet to vienu reizi katram skatam.

## Skatīties apkārt

Velciet ar ritenīti, lai orbitētu, {{key:Shift}} + ritenīša velkšana vai labā poga panoramēšanai, un griezt ritenīti, lai tuvinātu kursora vietā. Uz skārienpaliktņa divi pirksti orbitē, bet saspiešana tuvina. Labais klikšķis bez vilkšanas ir {{key:Enter}}, kā citās cilnēs. 3DORBIT ļauj kreisajai pogai orbitēt, līdz nospiežat {{key:Enter}} vai {{key:Esc}}.

- {{ui:Skati}} (vai {{cmd:VIEW}}): Izometrija, Augša, Apakša, Priekšpuse, Aizmugure, Kreisā, Labā, Perspektīva vai Paralēls, un Tuvināt visu.
- {{ui:Stils}} (vai {{cmd:VSCURRENT}}, `VS`): Ēnots, Ēnots ar malām, Slēpta līnija, Rāmis vai Rentgens.

Punkti, uz kuriem noklikšķināt, piesaistās cietajiem ķermeņiem (stūriem, malām, virsmām) un 2D rasējumam uz zemes: līniju un loku galiem un viduspunktiem, un punktiem gar tiem. 2D līnijas cilnē 3D nekad netiek atlasītas. Kad komanda pieprasa 2D objektus (EXTRUDE, REVOLVE, SWEEP), klikšķis izvēlas vienu, velkot no kreisās uz labo, ņem visu, kas pilnībā atrodas logā, un velkot no labās uz kreiso, ņem visu, ko tas šķērso, kā cilnē {{ui:Modelis}}.

Skata kubs atrodas cilnes 3D augšējā labajā stūrī: noklikšķiniet uz virsmas, malas vai stūra, lai skatītos no turienes, velciet to, lai orbitētu, un mājiņas poga atgriež izometrisko skatu. Tas ir {{ui:Automātiski}}, sākums {{ui:Stūra indikators}} [CadCraft iestatījumos](topic:settings). Ja iestatīts uz {{ui:Skata kubs}}, cilnē {{ui:Modelis}} tiek rādīts arī kubs, skatoties no augšas; noklikšķinot uz citas puses, atveras cilne 3D, skatoties no turienes. Ja iestatīts uz {{ui:Ass ikona}}, abās cilnēs tā vietā tiek rādīts ass marķieris.

## Cietie ķermeņi no citām programmām

Rasējumā no citas programmas var būt 3D cietie ķermeņi, reģioni un ķermeņi (3DSOLID, REGION, BODY: otra programma glabā to formu kā ACIS datus). CadCraft tos rāda modelēšanas telpā cilnē 3D, to slāņa krāsā un ar savām malām, pirmo reizi atverot cilni; komandrinda pēc tam parāda, cik tika uzzīmēti.

- Tie tiek rādīti tādi, kādi ir: tos nevar atlasīt, pārvietot vai mainīt. Slāņi, kas izslēgti vai iesaldēti, tos paslēpj.
- Saglabājot kā DWG, katrs tiek rakstīts atpakaļ nemainīts, jebkurā DWG versijā, lai otra programma tos saņemtu atkārtoti. DXF failos tie netiek saglabāti: CadCraft tos raksta tikai DWG, un par to paziņo, saglabājot kā DXF.
- Uzzīmēts: plakanas virsmas un virsmas uz cilindriem, konusiem, sfērām, torusiem un vienkāršām spline virsmām, ar taisnām, apaļām un spline malām. Virsma uz jebkura cita veida virsmas vai tāda, ko CadCraft nevar izkārtot, netiek minēta: tā tiek izlaista un uzskaitīta, piemēram, "Vēl nav uzzīmēts (3D cietie ķermeņi): 2 virsmas uz spline-surface (sweepsur), virsmas veids vēl nav uzzīmēts."
- Bloku iekšienē esošie cietie ķermeņi vēl netiek rādīti; "Par šo failu" tos saskaita.

Izliektas virsmas tiek zīmētas kā mazi plakani gabali, aptuveni 7,5° soļos, tāpēc izliekts ciets ķermenis no tuva skata izskatās nedaudz facetēts.

## Saglabāšana un eksports

Saglabājot, 3D modelis tiek paturēts gan DWG, gan DXF. Katra virsma tiek ierakstīta kā 3D virsma slānī `CC-3D`, lai citas programmas rādītu cietos ķermeņus, un CadCraft paturē savu precīzo kopiju failā, ko atverot rasējumu nolasa atpakaļ, ar 3D skatu tādu, kāds tas bija (kamera, projekcija un vizuālais stils). Citu programmu 3D virsmas cilnē 3D ienāk kā brīvas virsmas, kopā turētas kā viena grupa. 3D virsma bloka iekšienē ienāk vienreiz katrai atsaucei uz šo bloku modelī, novietota un pagriezta tāpat kā atsauce; pašā blokā un lapā 3D virsma tiek zīmēta plakana, kā tās kontūra.

{{ui:Eksportēt}} 3D grupā lejupielādē tikai cietos ķermeņus: GLB skatītājiem un tīmeklim ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) vai STL 3D drukai milimetros ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} jautā, kuru.

:::note
3D modelis ir īstā izmērā. Rasējums bez mērvienībām tiek skaitīts kā milimetri, tāpēc `1000` ir viens metrs. Ja vēlāk mainīsiet rasējuma mērvienības (Rekvizīti, ar neko neatlasītu), cietie ķermeņi tiek mērogoti kopā ar tām, lai paliktu uz rasējuma, un vēsture par to paziņo. Viens {{key:Mod+Z}} atsauc mērvienību maiņu un mērogošanu kopā.
:::
