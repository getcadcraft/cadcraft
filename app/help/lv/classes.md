---
title: Rasējuma kārtošana ar klasēm
summary: Klases kārto objektus otrā veidā, pāri slāņiem (Lighting-Fixtures-Spot): rādiet un slēpiet tās, piešķiriet krāsu, līniju tipu, līnijas platumu, aizpildījumu un teksta stilu, ko objekti var ņemt "pēc klases", un iestatiet klasi, kurā ievieto jaunus objektus.
keywords: klase, klases, CLASSES, CLS, CLASS, pēc klases, ByClass, aktīvā klase, lietot veidojot, None, projektēšanas slānis, slāņa mērogs, augstuma atzīme, Vectorworks
from: 672de9cb
---

Slāņi norāda, *kur* objekts atrodas rasējumā; klases norāda, *kas* tas ir. Siena slānī `Level 1` var atrasties klasē `Walls-Exterior`, bet griestu slānī `Ceiling` esošs punktveida gaismeklis — klasē `Lighting-Fixtures-Spot`. Jūs varat vienlaikus paslēpt visus gaismekļus visos slāņos vai izdrukāt visas ārsienas treknāk, nepārvietojot neko starp slāņiem.

Katrs objekts sākas klasē **None**. Rasējums bez savām klasēm darbojas tieši kā agrāk.

## Atveriet klašu paneli

Ierakstiet `CLASSES` (vai `CLS`) un nospiediet {{key:Enter}}, vai izvēlieties {{ui:Klases…}} izvēlnē {{ui:Vairāk}} grupā {{ui:Skats}}. Panelis atveras pāri rasējumam un paliek atvērts, kamēr zīmējat.

- **Pievienot klasi:** ierakstiet tās nosaukumu augšējā lodziņā un nospiediet {{key:Enter}}. `-` veido līmeni: `Lighting-Fixtures-Spot` atrodas zem `Lighting-Fixtures`, kas atrodas zem `Lighting`; trūkstošie līmeņi tiek pievienoti automātiski.
- **Rādīt vai slēpt:** acs blakus klasei. Klases slēpšana paslēpj visas zem tās esošās klases, ekrānā un papīrā.
- **Aktīvā klase:** apaļā poga. Jauni objekti, ko zīmējat, nonāk aktīvajā klasē.
- **Izvēlēties klasi:** noklikšķiniet uz tās nosaukuma. Pogas un iestatījumi zem saraksta tad darbojas ar to.

Katras rindas beigās esošais skaitlis rāda, cik objektu ir šajā klasē (modelī, lapās un bloku definīcijās).

## Ievietot objektus klasē

Atlasiet objektus, izvēlieties klasi panelī un noklikšķiniet {{ui:Iestatīt klasi}}. Vispirms atzīmējiet {{ui:Pēc klases}}, lai tie krāsu, līniju tipu, līnijas platumu, aizpildījumu un teksta stilu ņemtu no klases. Varat arī:

- ierakstīt `CLASS`, kad objekti ir atlasīti, un ievadīt klases nosaukumu (jauns nosaukums izveido klasi);
- ierakstīt `CLASS`, kad nekas nav atlasīts, lai iestatītu aktīvo klasi; `?` uzskaita klases ar to skaitu;
- izmantot sadaļu {{ui:Klase (C)}} rekvizītu panelī: klasi un slēdzi {{ui:… pēc klases}} krāsai, līniju tipam un līnijas platumam (aizpildījumam — svītrojumiem, teksta stilam — tekstam);
- atlasīt pēc klases ar `QSELECT`: izvēlieties īpašību {{ui:Klase (C)}}.

{{ui:Atlasīt tās objektus}} atlasa katru objektu izvēlētajā klasē atvērtajā lapā (vai modelī).

## Kā objekts tiek zīmēts: objekts, klase, slānis

Objekta krāsa, līniju tips, līnijas platums, aizpildījums un teksta stils var būt **pēc klases**, tāpat kā var būt pēc slāņa. CadCraft meklē šādā secībā:

1. Objekta pašu vērtību, ja vien tā nav pēc klases.
2. Klases vērtību, ja objekts to ņem pēc klases un klasei tāda ir.
3. Slāņa vērtību.

Klase, kuras krāsa (vai līniju tips …) ir {{ui:Nav iestatīts}}, objektu nodod slānim. Izvēlieties klasi un zem pogām iestatiet tās {{ui:Krāsa}}, {{ui:Līniju tips}}, {{ui:Līnijas platums}}, {{ui:Aizpildījums (svītrojumi)}} un {{ui:Teksta stils}}. Atzīmējiet {{ui:Lietot veidojot}}, lai jauni objekti, kas zīmēti šajā klasē, ņemtu visus šos iestatījumus pēc klases.

Katra izmaiņa panelī ir viens atsaukšanas solis.

## Pārdēvēt un dzēst

{{ui:Pārdēvēt}} rediģē nosaukumu vietā: nospiediet {{key:Enter}}, lai to paturētu, un {{key:Esc}}, lai atstātu. Klases zem tās seko (`Lighting-Spot` kļūst par `Light-Spot`, kad `Lighting` kļūst par `Light`), tāpat seko to objekti un jebkuri skata logu pārrakstījumi.

{{ui:Dzēst}} noņem klasi un visas zem tās esošās klases. To objekti pāriet uz **None**. Viens {{ui:Atsaukt}} atjauno visu. **None** nevar pārdēvēt vai dzēst.

## Projektēšanas slāņi

Zem {{ui:Projektēšanas slāņi}} katrs slānis var saturēt mērogu (`1:50`) un augstuma atzīmi. Projektēšanas slānis ir parasts slānis: modeļa telpa un lapas darbojas kā līdz šim, bet mērogs un augstuma atzīme tiek saglabāti rasējumā rīkiem, kas tos izmantos.

## DWG un DXF failos

Klases tiek saglabātas katrā DWG versijā, ko CadCraft saglabā, un DXF (R12 un 2000). Katra objekta klase ir tā paša paplašinātie dati (lietojumprogramma `CADCRAFT_CLASS`), tāpēc AutoCAD un citas programmas to saglabā kopā ar objektu. Klašu saraksts, krāsas un redzamība tiek glabāti vienā neizmantotā blokā ar nosaukumu `CADCRAFT_CLASSES`; ja cita programma šo bloku iztīra (purge), CadCraft joprojām atrod katra objekta klasi, un klases atgriežas ar noklusējuma iestatījumiem.

Citas programmas klases nepazīst: tās zīmē katru objektu ar tā paša vai sava slāņa vērtībām.

Skatiet arī [Skata logu klašu pārrakstījumi](topic:viewport-overrides) un [Rasējuma kārtošana ar slāņiem](topic:layers).
