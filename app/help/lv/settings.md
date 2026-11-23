---
title: CadCraft iestatījumi
summary: Iestatījumi, kas pieder zīmēšanas lietotnei: kursora izmērs, no kurienes kursorā karājas ielīmēta kopija, ko klikšķis dara ar atlasi, cik rindas izmanto rīkjosla, kur atrodas komandrinda un cik augsta tā ir, kompakta augšējā josla un stūra indikators.
keywords: komandrinda, peldoša komandrinda, peldēt, piestiprināt, viena rinda, f2, komandu vēsture, commandline, cmdline, toparea, augšējā josla, kompakts, cursorsize, pilnekrāna krusts, pilnekrāna kursors, mala līdz malai, rīkjoslas rindas, rīkjoslas rādījums, ctrl f1, iestatījumi, preferences, opcijas, stūra indikators, skata kubs, ass ikona, ucs ikona, kursors, krusts, izvēles kaste, ielīmēšanas punkts, bāzes punkts, objektu klikšķināšana, atlase, pickadd, shift, atiestatīt
from: ae1a81db
---

Atveriet {{ui:Iestatījumi}} ar zobrata ikonu lietotņu joslā vai ar {{key:Mod+,}}. Pirmajā cilnē {{ui:CadCraft}} ir iestatījumi, kas pieder šai lietotnei; {{ui:Vispārīgi}} satur tos, ko kopīgi izmanto visas saimes lietotnes (motīvs, paneļa teksta izmērs un platumi, rīkjoslas izskats un secība). CadCraft iestatījumi pastāv tikai lietotnē: mainiet tos šeit, un šī pārlūkprogramma tos atceras. {{ui:Atiestatīt CadCraft iestatījumus}} atgriež katru no tiem sākuma stāvoklī.

## Kursors

**Mazs**, **Vidējs** (sākuma iestatījums), **Liels** vai **Pilnekrāns**: krusta un izvēles kastes izmērs rasējumā. Lielāka izvēles kaste izvēlas objektus arī no nedaudz lielāka attāluma, kas palīdz skārienekrānā vai ļoti smalkā rasējumā.

**Pilnekrāns** izvelk krusta divas līnijas no malas līdz malai pa visu rasējumu, arī tad, kad neviena komanda nedarbojas, lai jūs varētu ar aci pārbaudīt, vai divas lietas sakrīt pa visu skatu. Ja skats ir sadalīts, līnijas paliek tajā logā, kurā strādājat. Tas pats, kas AutoCAD {{cmd:CURSORSIZE}} 100: ierakstiet {{cmd:CURSORSIZE}} un 100 pilnekrānam; mazāks skaitlis izvēlas tuvāko izmēru (zem 5 — Mazs, no 5 līdz 9 — Vidējs, no 10 līdz 99 — Liels).

## Ielīmēšanas punkts

Vieta, kur ielīmēta kopija karājas no kursora pēc {{key:Mod+V}} ({{cmd:PASTECLIP}}), līdz noklikšķināt:

- **Apakšējais kreisais stūris** (sākuma iestatījums): kopēto objektu apakšējais kreisais stūris, kā AutoCAD.
- **Centrs**: viduspunkts to robežām. Noderīgi simbolam, ko novietojat ar aci.

Kopija, kas izveidota ar `COPYBASE`, vienmēr karājas no bāzes punkta, ko izvēlējāties. {{ui:Ielīmēt vietā}} ({{key:Mod+Shift+V}}) ignorē šo iestatījumu: tā saglabā sākotnējās koordinātas. Skatiet [Kopēt, ielīmēt un dublēt](topic:copy-paste).

## Objektu klikšķināšana

Ko klikšķis rasējumā dara ar atlasi, kad nedarbojas neviena komanda:

- **Pievieno atlasei** (sākuma iestatījums): katrs klikšķis vai logs pievieno objektus; {{key:Shift}}+klikšķis vai {{key:Shift}}+logs tos izņem.
- **Aizstāj atlasi**: klikšķis vai logs atlasa tikai to, ko tas izvēlas. {{key:Shift}}+klikšķis pievieno objektu vai izņem vienu, kas jau ir atlasīts; {{key:Shift}}+logs pievieno.

Uzvednē `Atlasiet objektus:` komandas iekšienē klikšķi vienmēr pievieno (un {{key:Shift}} noņem), neatkarīgi no šī iestatījuma. Skatiet [Atlasīt objektus](topic:select-objects).

## Klikšķis tukšā vietā

Ko klikšķis vietā, kur nav objekta, dara, kad neviena komanda nedarbojas. Jebkurā gadījumā tas sāk atlases logu (otrs klikšķis to pabeidz).

- **Notīra atlasi** (sākuma iestatījums): tas, kas bija atlasīts, tiek atlaists. Turiet {{key:Shift}}, klikšķinot, lai to paturētu.
- **Paglabā atlasi**: atlase paliek, kā citās zīmēšanas programmās; logs tai pievieno. Nospiediet {{key:Esc}}, lai notīrītu atlasi.

## Vilkšana atlasei

Ko dara nospiešana un vilkšana tukšā vietā:

- **Lasso** (sākuma iestatījums): brīvroku kontūra. Ja vispirms velkat pa labi, tiek atlasīts viss, kas ir tās iekšpusē; ja pa kreisi — viss, ko tā skar. {{key:Space}} vilkšanas laikā pārslēdz starp logu, krustojumu un žogu.
- **Taisnstūris**: kaste, ko zīmē klikšķis un otrs klikšķis.

{{cmd:LASSOMODE}} `1` vai `0` iestata to pašu. Skatiet [Lasso atlase](topic:lasso-selection).

## Vilkšana apgriešanai un pagarināšanai

Ko dara nospiešana uz tukšas vietas un vilkšana {{cmd:TRIM}} un {{cmd:EXTEND}} komandās:

- **Ceļš** (sākuma iestatījums): brīvroku ceļš; katrs gabals, ko tas krusto, tiek apgriezts (vai pagarināts).
- **Logs**: kaste; katrs gabals, ko tā skar, tiek apgriezts, tāpat kā dara opcija `C`.

Skatiet [Apgriezt un pagarināt](topic:trim-and-extend).

## Rīkjoslas novietojums

{{ui:CadCraft}} › {{ui:Rīkjoslas novietojums}}: **Augšā** (sākuma iestatījums, kā vienmēr bijis), **Apakšā**, **Pa kreisi** vai **Pa labi**. Kreisajā vai labajā pusē rīku grupas tiek sakrautas kolonnā, kas ritina, ja tā ir augstāka par logu, un pogas ietinas pa divām vai trim rindā. Izvēle tiek saglabāta kopā ar jūsu iestatījumiem, un {{cmd:TOOLBARDOCK}} (`TBDOCK`) to iestata no komandrindas. {{ui:Vispārīgi}} › {{ui:Atiestatīt izkārtojumu}} novieto rīkjoslu atpakaļ augšā.

Izvēlņu stilu joslas atrodas rīkjoslā un pārvietojas kopā ar to, bet stils {{ui:Lente}} ir paredzēts stiepties augšā vai apakšā: sānos tam ir šaura kolonna, kas ritina. Tālrunī rīkjosla paliek tur, kur to novieto tālruņa izkārtojums.

## Rīkjoslas rindas

Cik rindu rīki izmanto virs rasējuma, CadCraft rīkjoslā un stilos {{ui:Klasiskais zīmēšanas stils}} un {{ui:Lente}}:

- **Ietīt, lai ietilptu** (sākuma iestatījums): rīki ietinas loga platumā.
- **2 rindas**: ne vairāk kā divas rindas. Ja rīki šajā platumā ietinas divās rindās vai mazāk, tie vienkārši ietinas; citādi tie stāv divās rindās, kas ritina sāniski.
- **1 rinda**: viena rinda, kas ritina sāniski, kas atstāj rasējumam vislielāko vietu.

{{key:Shift+Ctrl+F1}} pārslēdz starp trim, un {{cmd:TOOLBARROWS}} iestata vienu. Ko rāda pogas (ikonas un tekstu, tikai ikonas vai tikai tekstu), iestata {{ui:Vispārīgi}} › {{ui:Rīkjosla}}; {{key:Ctrl+F1}} pārslēdz to, un {{cmd:TOOLBAR}} to iestata.

## Komandrinda

Komandrinda var palikt piestiprināta zem rasējuma, kā vienmēr, vai peldēt pāri tam, un tā var būt tik plāna kā viena rinda.

- **Padariet to peldošu.** Velciet rokturi tās kreisajā galā rasējuma virzienā vai izvēlieties {{ui:Peldēt pāri rasējumam}} tās izvēlnē {{ui:Komandrindas opcijas}} (trīs punkti labajā galā). Velciet rokturi vēlreiz, lai to pārvietotu; tā vieta tiek saglabāta, kad mainās loga izmērs. Velciet tās labo malu, lai to padarītu platāku vai šaurāku. Nometiet to statusa joslā vai izvēlieties {{ui:Piestiprināt apakšā}}, lai to atkal piestiprinātu.
- **Padariet to plānāku vai augstāku.** Velciet tās augšējo malu: katrs solis ir viena vēstures rinda. Līdz nullei rindu tā ir **vienrindas komandrinda**: tikai uzvedne un tas, ko ierakstāt, un jauns ziņojums uz brīdi parādās virs tās. Dubultklikšķis uz augšējās malas pārslēdz starp vienu rindu un augstumu, kāds jums bija.
- **Vēsture.** {{key:F2}} vai pulksteņa poga komandrindā ({{ui:Komandu vēsture (F2)}}) atver visu vēsturi virs rindas (zem tās, kad peldošā rinda atrodas loga augšdaļā). Rakstīšana joprojām iet uz komandrindu; {{key:PageUp}} un {{key:PageDown}} ritina vēsturi, un {{key:Esc}}, {{key:F2}} vai klikšķis citur to aizver. Jūsu pašu taustiņš uz F2 uzvar šo.
- **No tastatūras.** Rokturis ir poga: kad tas ir fokusēts, bultiņas pārvieto peldošu komandrindu (ar {{key:Shift}} lielākos soļos); {{key:Up}} padara piestiprinātu peldošu, un {{key:Down}} pie apakšējās malas to piestiprina. Augšējā mala ir atdalītājs: {{key:Up}} un {{key:Down}} pievieno vai atņem rindu, {{key:Home}} padara to vienrindas, {{key:End}} — visaugstāko. Ekrāna lasītāji joprojām dzird katru ziņojumu, arī vienrindas komandrindā.

{{ui:CadCraft}} › {{ui:Komandrinda}} ir tādas pašas izvēles: {{ui:Piestiprināta apakšā}} vai {{ui:Peldoša}}, {{ui:Rādāmās vēstures rindas}} (no 0 līdz 12) un {{ui:Standarta augstums}}. {{cmd:COMMANDLINE}} (`CMDLINE`) tos iestata no komandrindas. Vieta un augstums tiek saglabāti CadCraft šajā pārlūkprogrammā kopā ar pārējo izkārtojumu, tāpēc saglabāta darba vide tos nes līdzi; {{ui:Vispārīgi}} › {{ui:Atiestatīt izkārtojumu}} piestiprina komandrindu atkal pie tās standarta augstuma. Tālrunī komandrinda paliek piestiprināta ar vienu vēstures rindu; arī vēstures poga tur darbojas.

{{ui:CadCraft}} › {{ui:Opciju burti}} glabā burtus, ko izvēlējāties komandu opcijām: {{ui:Rediģēt…}} atver failu, {{ui:Importēt…}} to aizstāj ar izvēlētu failu, un {{ui:Eksportēt}} to saglabā. Skatiet [Piešķiriet komandu opcijām savus burtus](topic:option-letters).

Kad logs ir īss un izkārtojuma pārbaude piedāvā kompaktāku izkārtojumu, tās {{ui:Jā}} arī pārslēdz komandrindu uz vienu rindu, ja rasējums pēc rīkjoslām joprojām ir īss.

## Augšējā josla

{{ui:CadCraft}} › {{ui:Augšējā josla}}: **Standarta** (sākuma iestatījums) vai **Kompakta**. Kompakta padara joslas virs rasējuma mazas katrā izvēlņu stilā: grupu nosaukumi un vārdi zem ikonām pazūd (rīka padomi un ekrāna lasītāji tos joprojām saņem), un pogas ir blīvākas. Tā darbojas kopā ar [Rīkjoslas rindas](topic:settings#toolbar-rows): Kompakta un **1 rinda** atstāj rasējumam vislielāko vietu. {{cmd:TOPAREA}} to iestata.

## Stūra indikators

Kas atrodas rasējuma stūrī:

- **Automātiski** (sākuma iestatījums): ass ikona cilnē {{ui:Modelis}} un skata kubs cilnē {{ui:3D}}.
- **Ass ikona**: X un Y marķieris apakšējā kreisajā stūrī cilnē {{ui:Modelis}}, un neliels X, Y un Z marķieris cilnē {{ui:3D}}.
- **Skata kubs**: kubs augšējā labajā stūrī abās cilnēs. Cilnē {{ui:Modelis}} tas rāda rasējumu no augšas, un noklikšķinot uz citas sejas, malas vai stūra, atveras cilne {{ui:3D}}, kas skatās no turienes. Cilnē 3D tas pagriežas kopā ar skatu: noklikšķiniet, lai skatītos no sāniem, velciet, lai riņķotu, un māja atgriežas izometriskajā skatā. Skatiet [Modelis 3D](topic:3d-solids).
- **Nav**: nekas stūrī.

Lapas nerāda nevienu no tiem.

## Atlases garums un laukums

- **Statusa joslā** (sākuma iestatījums): kad objekti ir atlasīti, statusa joslā tiek rādīts to kopējais garums un slēgto objektu kopējais laukums. Skatiet [Atlases kopsummas](topic:properties-panel#totals-of-a-selection).
- **Paslēpts**: statusa josla tos neietver. Rekvizīti joprojām tos rāda vairākiem objektiem.

## Režģis, ortogonālais režīms un piesaistes

Tie nav dialogā: pogas {{ui:Režģis}}, {{ui:Ortogonāli}} un {{ui:Piesaiste}} statusa joslā (vai {{key:F7}}, {{key:F8}}, {{key:F3}}) un objektu piesaistes saraksts blakus tām tiek atcerēti, kad tos atstājat. Skatiet [Piesaiste punktiem uz objektiem](topic:object-snaps).
