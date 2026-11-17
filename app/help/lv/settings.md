---
title: CadCraft iestatījumi
summary: Iestatījumi, kas pieder zīmēšanas lietotnei: kursora izmērs, kur no kursora karājas ielīmētā kopija, ko klikšķis dara ar atlasi, cik rindas izmanto rīkjosla, kur atrodas komandrinda un cik tā ir augsta, kompakta augšējā josla un stūra indikators.
keywords: komandrinda, peldoša komandrinda, peldēt, piestiprināt, viena rinda, f2, komandu vēsture, commandline, cmdline, toparea, augšējā josla, kompakts, cursorsize, pilnekrāna krustiņš, pilnekrāna kursors, malu līdz malai, rīkjoslas rindas, rīkjoslas attēlojums, ctrl f1, iestatījumi, izvēles, opcijas, stūra indikators, skata kubs, ass ikona, ucs ikona, kursors, krustiņš, izvēles kvadrāts, ielīmēšanas punkts, bāzes punkts, klikšķināšana uz objektiem, atlase, pickadd, shift, atiestatīt
from: 0896eb42
---

Atveriet {{ui:Iestatījumi}} ar zobratu lietotnes joslā vai ar {{key:Mod+,}}. Pirmajā cilnē, {{ui:CadCraft}}, ir šai lietotnei piederošie iestatījumi; {{ui:Vispārīgi}} satur tos, ko dala visas saimes lietotnes (tēma, paneļa teksta izmērs un platumi, rīkjoslas izskats un kārtība). CadCraft iestatījumi pastāv tikai lietotnē: tos mainiet šeit, un šī pārlūkprogramma tos atceras. {{ui:Atiestatīt CadCraft iestatījumus}} atjauno katru no tiem sākotnējā stāvoklī.

## Kursors

**Mazs**, **Vidējs** (sākuma), **Liels** vai **Pilnekrāns**: krustiņa un izvēles kvadrāta izmērs zīmējumā. Lielāks izvēles kvadrāts paņem objektus arī no nedaudz tālāk, kas palīdz uz skārienekrāna vai ļoti smalka zīmējuma.

**Pilnekrāns** liek krustiņa divām līnijām iet no malas līdz malai pāri zīmējumam arī tad, kad nedarbojas neviena komanda, lai varētu ar aci pārbaudīt, vai divas lietas sakrīt pāri visam skatam. Ja skats ir sadalīts, līnijas paliek tajā rūtī, ar kuru strādājat. Tas ir tas pats, kas AutoCAD {{cmd:CURSORSIZE}} 100: ierakstiet {{cmd:CURSORSIZE}} un 100 pilnekrānam; mazāks skaitlis izvēlas tuvāko izmēru (zem 5 Mazs, 5 līdz 9 Vidējs, 10 līdz 99 Liels).

## Ielīmēšanas punkts

Kur ielīmētā kopija karājas no kursora pēc {{key:Mod+V}} ({{cmd:PASTECLIP}}), līdz noklikšķināsiet:

- **Apakšējais kreisais stūris** (sākuma): kopēto objektu robežas apakšējais kreisais stūris, kā AutoCAD.
- **Centrs**: robežas viduspunkts. Noderīgi simbola novietošanai ar aci.

Kopija, kas izveidota ar `COPYBASE`, vienmēr karājas no bāzes punkta, ko izvēlējāties. {{ui:Ielīmēt vietā}} ({{key:Mod+Shift+V}}) ignorē šo iestatījumu: tā saglabā oriģinālās koordinātes. Skatiet [Kopēšana, ielīmēšana un dublēšana](topic:copy-paste).

## Klikšķināšana uz objektiem

Ko klikšķis zīmējumā dara ar atlasi, kad nedarbojas neviena komanda:

- **Pievieno atlasei** (sākuma): katrs klikšķis vai logs pievieno objektus; {{key:Shift}}+klikšķis vai {{key:Shift}}+logs tos izņem.
- **Aizstāj atlasi**: klikšķis vai logs atlasa tikai to, ko tas paņem. {{key:Shift}}+klikšķis pievieno objektu vai izņem to, kas jau ir atlasīts; {{key:Shift}}+logs pievieno.

Pie `Select objects:` uzvednes komandas iekšienē klikšķi vienmēr pievieno (un {{key:Shift}} izņem), neatkarīgi no šī iestatījuma. Skatiet [Objektu atlase](topic:select-objects).

## Klikšķis tukšā vietā

Ko klikšķis vietā, kur nav objekta, kad nedarbojas neviena komanda. Abos gadījumos tas sāk atlases logu (otrais klikšķis to pabeidz).

- **Notīra atlasi** (sākuma): atlasītais tiek atlaists. Turiet {{key:Shift}}, klikšķinot, lai to paturētu.
- **Atstāj atlasi**: atlase paliek, kā citās zīmēšanas programmās; logs tai pievienojas. Nospiediet {{key:Esc}}, lai notīrītu atlasi.

## Velkot, lai atlasītu

Ko dara nospiešana un velkšana tukšā vietā:

- **Lasso** (sākuma): brīvroku kontūra. Ja pirmā kustība ir pa labi, atlasa to, kas ir pilnībā iekšā; ja pa kreisi, to, kam tas pieskaras; {{key:Space}} velkot pārslēdz starp logu, krustojumu un žogu.
- **Taisnstūris**: rāmis, kā to zīmē klikšķis un otrais klikšķis.

{{cmd:LASSOMODE}} `1` vai `0` iestata to pašu. Skatiet [Laso atlase](topic:lasso-selection).

## Velkot, lai apgrieztu un pagarinātu

Ko nospiešana tukšā vietā un velkšana dara {{cmd:TRIM}} un {{cmd:EXTEND}}:

- **Ceļš** (sākuma): brīvroku ceļš; katrs gabals, ko tas šķērso, tiek apgriezts (vai pagarināts).
- **Logs**: rāmis; katrs gabals, kam tas pieskaras, tiek apgriezts, kā to dara `C` opcija.

Skatiet [Apgriešana un pagarināšana](topic:trim-and-extend).

## Rīkjoslas novietojums

{{ui:CadCraft}} › {{ui:Rīkjoslas novietojums}}: **Augšā** (sākuma, kā tas vienmēr ir bijis), **Apakšā**, **Pa kreisi** vai **Pa labi**. Kreisajā vai labajā pusē rīku grupas sakrājas kolonnā, kas ritina, ja tā ir augstāka par logu, un pogas ietinas divās vai trīs rindās. Izvēle tiek saglabāta kopā ar jūsu iestatījumiem, un {{cmd:TOOLBARDOCK}} (`TBDOCK`) to iestata no komandrindas. {{ui:Vispārīgi}} › {{ui:Atiestatīt izkārtojumu}} novieto rīkjoslu augšā.

Izvēlņu stilu joslas atrodas rīkjoslas iekšienē un pārvietojas kopā ar to, bet stils {{ui:Lente}} ir veidots, lai stiepjas pāri augšai vai apakšai: sānos tas iegūst šauru kolonnu, kas ritina. Telefonā rīkjosla paliek tur, kur to novieto tālruņa izkārtojums.

## Rīkjoslas rindas

Cik rindu rīki aizņem virs zīmējuma, CadCraft rīkjoslā un stilos {{ui:Klasiskais zīmēšanas stils}} un {{ui:Lente}}:

- **Ietīt, lai ietilptu** (sākuma): rīki ietinas loga platumā.
- **2 rindas**: ne vairāk kā divas rindas. Ja rīki šajā platumā ietinas divās rindās vai mazāk, tie vienkārši ietinas; citādi tie stāv divās rindās, kas ritina sānis.
- **1 rinda**: viena rinda, kas ritina sānis, kas atstāj zīmējumam visvairāk vietas.

{{key:Shift+Ctrl+F1}} pārslēdz starp trim, un {{cmd:TOOLBARROWS}} iestata vienu. Ko pogas rāda (ikonas un tekstu, tikai ikonas vai tikai tekstu), to nosaka {{ui:Vispārīgi}} › {{ui:Rīkjosla}} iestatījums; {{key:Ctrl+F1}} pārslēdz to, un {{cmd:TOOLBAR}} iestata.

## Komandrinda

Komandrinda var palikt piestiprināta zem zīmējuma, kā vienmēr, vai peldēt pāri tam, un tā var būt tik plāna kā viena rinda.

- **Padariet to peldošu.** Velciet tās kreisā gala rokturi zīmējumā, vai izvēlieties {{ui:Peldēt pāri rasējumam}} tās {{ui:Komandrindas opcijas}} izvēlnē (trīs punkti labajā galā). Velciet rokturi vēlreiz, lai to pārvietotu; tās vieta tiek saglabāta, kad logs maina izmēru. Velciet tās labo malu, lai padarītu platāku vai šaurāku. Nometiet to uz statusa joslas vai izvēlieties {{ui:Piestiprināt apakšā}}, lai atkal piestiprinātu.
- **Padariet to plānāku vai augstāku.** Velciet tās augšējo malu: katrs solis ir viena vēstures rinda. Līdz nullei tā ir **vienrindas komandrinda**: tikai uzvedne un tas, ko ierakstāt, un jauns ziņojums uz brīdi parādās virs tās. Dubultklikšķis uz augšējās malas pārslēdz starp vienu rindu un augstumu, kāds jums bija.
- **Vēsture.** {{key:F2}} vai pulksteņa poga komandrindā ({{ui:Komandu vēsture (F2)}}) atver visu vēsturi virs līnijas (zem tās, ja līnija peld tuvu loga augšai). Rakstīšana joprojām iet uz komandrindu; {{key:PageUp}} un {{key:PageDown}} ritina vēsturi, un {{key:Esc}}, {{key:F2}} vai klikšķis citur to aizver. Taustiņš, ko esat piešķīris F2, to uzvar.
- **No tastatūras.** Rokturis ir poga: kad tas ir fokusēts, bultiņu taustiņi pārvieto peldošu komandrindu (ar {{key:Shift}} lielākos soļos); {{key:Up}} padara piestiprinātu peldošu, un {{key:Down}} pie apakšējās malas to piestiprina. Augšējā mala ir atdalītājs: {{key:Up}} un {{key:Down}} pievieno vai atņem rindu, {{key:Home}} padara to vienrindas, {{key:End}} — visaugstāko. Ekrāna lasītāji joprojām dzird katru ziņojumu, arī vienrindas komandrindā.

{{ui:CadCraft}} › {{ui:Komandrinda}} ir tās pašas izvēles: {{ui:Piestiprināta apakšā}} vai {{ui:Peldoša}}, {{ui:Rādāmās vēstures rindas}} (0 līdz 12) un {{ui:Standarta augstums}}. {{cmd:COMMANDLINE}} (`CMDLINE`) tās iestata no komandrindas. Vieta un augstums tiek saglabāti CadCraft šajā pārlūkprogrammā kopā ar pārējo izkārtojumu, tāpēc saglabāta darba vide tos ietver; {{ui:Vispārīgi}} › {{ui:Atiestatīt izkārtojumu}} piestiprina komandrindu atkal pie standarta augstuma. Telefonā komandrinda paliek piestiprināta ar vienu vēstures rindu; vēstures poga strādā arī tur.

Ja logs ir īss un izkārtojuma pārbaude piedāvā blīvāku izkārtojumu, tās {{ui:Jā}} arī pārslēdz komandrindu uz vienu rindu, ja zīmējums pēc rīkjoslām joprojām ir īss.

## Augšējā josla

{{ui:CadCraft}} › {{ui:Augšējā josla}}: **Standarta** (sākuma) vai **Kompakta**. Kompakta padara joslas virs zīmējuma mazas visos izvēlņu stilos: grupu nosaukumi un vārdi zem ikonām pazūd (rīku padomi un ekrāna lasītāji tos joprojām saņem), un pogas ir blīvākas. Tā darbojas kopā ar [Rīkjoslas rindas](topic:settings#toolbar-rows): Kompakta un **1 rinda** atstāj zīmējumam visvairāk vietas. {{cmd:TOPAREA}} to iestata.

## Stūra indikators

Kas atrodas zīmējuma stūrī:

- **Automātiski** (sākuma): ass ikona {{ui:Modelis}} cilnē un skata kubs {{ui:3D}} cilnē.
- **Ass ikona**: X un Y marķieris apakšējā kreisajā stūrī {{ui:Modelis}} cilnē un mazs X, Y un Z marķieris {{ui:3D}} cilnē.
- **Skata kubs**: kubs augšējā labajā stūrī abās cilnēs. {{ui:Modelis}} cilnē tas rāda zīmējumu no augšas, un, noklikšķinot uz citas sejas, malas vai stūra, atveras {{ui:3D}} cilne, kas skatās no turienes. {{ui:3D}} cilnē tas griežas kopā ar skatu: noklikšķiniet, lai skatītos no malas, velciet, lai orbitētu, un mājas poga atgriež izometrisko skatu. Skatiet [Modelis 3D](topic:3d-solids).
- **Nav**: nekas stūrī.

Lapas nerāda nevienu no tiem.

## Atlases garums un laukums

- **Statusa joslā** (sākuma): kad objekti ir atlasīti, statusa josla rāda to kopējo garumu un slēgto objektu kopējo laukumu. Skatiet [Atlases kopsummas](topic:properties-panel#totals-of-a-selection).
- **Paslēpts**: statusa josla tos izlaiž. Rekvizīti joprojām tos rāda vairākiem objektiem.

## Režģis, ortogonāli un piesaistes

Tās nav dialogā: pogas {{ui:Režģis}}, {{ui:Ortogonāli}} un {{ui:Piesaiste}} statusa joslā (vai {{key:F7}}, {{key:F8}}, {{key:F3}}) un objektu piesaistes saraksts blakus tām tiek atcerēti, kad tos atstājat. Skatiet [Piesaiste objektu punktiem](topic:object-snaps).
