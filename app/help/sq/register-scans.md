---
title: Regjistro disa skanime në një
summary: Vendos skanime të marra nga pozicione të ndryshme në një kornizë të vetme, me çifte pikash të zgjedhura me kokë ose synime të shkruara, rafino them me ICP, ruaje regjistrimin si projekt dhe eksporto renditjen e regjistruar si LAS ose E57. Komanda është REGISTERSCANS.
keywords: regjistrim, skanime, renditje pikash, icp, pika më e afërt përsëritëse, synime, çifte pikash, transformim i ngurtë, rreshtim, bashkim, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Çfarë do të bëni

Disa skanime të të njëjtit vend (secili nga pozicioni i vet i skanerit) fillojnë në koordinatat e tyre. Regjistroji: jepni çdo skanimi një vendosje të vetme, që të gjitha të jenë në një kornizë të vetme, pastaj ruajeni këtë si projekt dhe shkruajeni renditjen e regjistruar si një skedar të vetëm LAS ose E57.

## Vendos skanimet

1. Hap dialogun (shkruaj `REGISTERSCANS` (ose `REGSCAN`)). {{ui:Shto skanime…}} pranon skedarë LAS, LAZ, E57, PLY, PCD, PTX, PTS ose XYZ, ose lëshoji ato mbi dialog. Skanimet që përdorin njësi të ndryshme refuzohen me një shënim: konvertoje një prej tyre së pari.
2. Zgjidh {{ui:Skanimi për t’u zhvendosur}} dhe {{ui:Vendos kundrejt}}. Pamja tregon çdo skanim në kornizë siç është tani, me një ngjyrë për secilin: {{ui:Planimetri}}, {{ui:Para}} ose {{ui:Anësore}}; tërhiq për të lëvizur pamjen, përdor rrotën për zmadhim.
3. **Me çifte pikash.** Kliko {{ui:Zgjidh një çift}}, pastaj një pikë në skanimin që do të zhvendoset, pastaj i njëjti vend në një skanim tjetër (një qoshe, një synimi, bazës së një kolone). Bëje të paktën tri herë, me pika që nuk janë në një vijë dhe janë të shpërndara. Kliko {{ui:Vendos sipas çifteve}}: skanimi vendoset me një përshtatje me katrorët më të vegjël, dhe **Mbetur** tregon sa është ende e gabuar çdo çift. Një çift me numër të madh është zgjedhje e keqe: hiqe me kryqin dhe vendose sërish.
4. **Me synime.** Nëse njihen koordinatat e vërteta të një pike (synime të matura me topografi), kliko {{ui:Zgjidh, pastaj shkruaj synimin}}, kliko pikën në skanimin e vet, dhe shkruaj X, Y dhe Z të synimit në rresht. Çiftet dhe synimet e shkruara mund të përzihen lirshëm.

## Rafino me ICP

Çiftet japin një vendosje të përafërt. {{ui:Rafino}} lëviz skanimin derisa sipërfaqet e tij të përputhen me ato të skanimit tjetër: fillimisht **pikë me pikë**, pastaj **pikë me plan**. Tabela liston çdo hap me gabimin e vet dhe sa pika u përputhën; vija mbi të tregon gabimin që bie. {{ui:Ndalo}} e përfundon ekzekutimin pas hapit që po bëhet dhe mban atë që arriti. {{ui:Zhbëj}} merr mbrapsht gjithë ekzekutimin (ose vendosjen e fundit); {{ui:Rivendos}} e kthen skanimin te koordinatat e skedarit të vet.

Për ta mbajtur të shpejtë në një laptop, ICP punon mbi një pjesë të pikave të zvogëluara ({{ui:Pikat e përdorura}}, 5,000 deri 60,000) dhe injoron përputhjet më të largëta se {{ui:Distanca më e madhe e përputhjes}} (si parazgjedhje 5% e madhësisë së skanimit, që zvogëlohet ndërsa stabilizohet). Kërkon fillimisht një vendosje të përafërt: skanimet që pothuajse nuk mbivendosen raportojnë se nuk mund të përputhen. Sipërfaqet që janë vetëm të sheshta ose vetëm të drejta nuk mund ta fiksojnë pozicionin përgjatë vetes; shto çifte në atë rast.

## Ruaj dhe eksporto

- {{ui:Ruaj projektin}} shkruan një skedar të vogël `.ccscans.json`: emrin, madhësinë dhe një shenjë identifikimi të 64 KB të parë të çdo skanimi, bashkë me transformimin e tij. Nuk mban pika. {{ui:Hap projektin…}} i gjen skedarët e skanimeve sipas këtyre referencave (skedarët duhet të shtohen më parë) dhe rikthen çdo transformim.
- {{ui:Eksporto LAS}} dhe {{ui:Eksporto E57}} shkruajnë një skedar me çdo skanim në vendin e tij të regjistruar. Pikat në origjinale nuk rishkruhen kurrë; transformimi zbatohet gjatë daljes. Me {{ui:Lexo çdo pikë nga skedarët}} të ndezur, çdo skedar lexohet sërish për çdo pikë (deri në 20 milion për skanim); të fikur, shkruhen vetëm pikat që shihen në shfaqës.
- {{ui:Shfaq renditjen e regjistruar}} (CadCraft) shkruan LAS dhe e bashkangjit nën vizatim me koordinatat e vet, si çdo renditje tjetër.

:::note
Asgjë nuk ngarkohet. Regjistrimi punon me njësitë e vetë skedarëve dhe ruan milimetrat: një LAS shkruhet me një shkallë që përshtatet (deri në 0.1 mm), një E57 me numra me saktësi të dyfishtë. Një sistem koordinativ kalon në LAS vetëm kur çdo skanim emron të njëjtin kod EPSG. Shkruesi E57 është i yni; kontrollohet duke i lexuar skedarët sërish me këtë lexues dhe me libE57Format.
:::
