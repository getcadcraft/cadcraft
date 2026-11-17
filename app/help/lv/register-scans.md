---
title: Vairāku skenējumu reģistrēšana vienā
summary: Novietojiet no dažādām pozīcijām uzņemtus skenējumus vienā koordinātu sistēmā, izmantojot atlasītus punktu pārus vai ievadītus mērķus, precizējiet tos ar ICP, saglabājiet reģistrāciju kā projektu un eksportējiet reģistrēto mākoni kā LAS vai E57. Komanda ir REGISTERSCANS.
keywords: reģistrācija, skenējumi, punktu mākonis, icp, iteratīvais tuvākais punkts, mērķi, punktu pāri, stingā transformācija, saskaņot, apvienot, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Ko jūs darīsiet

Vairāki vienas vietas skenējumi (katrs no savas skenera pozīcijas) sākas savās koordinātēs. Reģistrējiet tos: piešķiriet katram skenējumam vienu novietojumu, lai visi atrastos vienā koordinātu sistēmā, tad saglabājiet to kā projektu un ierakstiet reģistrēto mākoni kā vienu LAS vai E57 failu.

## Novietojiet skenējumus

1. Atveriet dialogu (ierakstiet `REGISTERSCANS` (vai `REGSCAN`)). {{ui:Pievienot skenējumus…}} pieņem LAS, LAZ, E57, PLY, PCD, PTX, PTS vai XYZ failus, vai arī tos var ievilkt dialogā. Skenējumi ar atšķirīgām mērvienībām tiek noraidīti ar paziņojumu: vispirms pārvērtiet vienu no tiem.
2. Izvēlieties {{ui:Skenējums, ko pārvietot}} un {{ui:Novietot pret}}. Attēlā redzami visi skenējumi kadrā tādā stāvoklī, kāds tie ir tagad, katrs savā krāsā: {{ui:Plāns}}, {{ui:Priekšskats}} vai {{ui:Sānskats}}; velciet, lai pārvietotos, izmantojiet ritentiņu tālummaiņai.
3. **Pēc punktu pāriem.** Noklikšķiniet uz {{ui:Izvēlēties pāri}}, tad uz punkta skenējumā, ko pārvietot, un pēc tam uz tās pašas vietas citā skenējumā (stūris, mērķis, kolonnas pamats). Dariet to vismaz trīs reizes, ar punktiem, kas nav uz vienas līnijas un ir izkliedēti. Noklikšķiniet uz {{ui:Novietot pēc pāriem}}: skenējums tiek novietots ar mazāko kvadrātu piemērošanu, un **Atlikums** rāda, cik lielu neatbilstību katrs pāris vēl atstāj. Pārim ar lielu skaitli ir slikti izvēlēts punkts: noņemiet to ar krustiņu un novietojiet vēlreiz.
4. **Pēc mērķiem.** Ja punktu patiesās koordinātes ir zināmas (uzmērītie mērķi), noklikšķiniet uz {{ui:Izvēlēties, tad ierakstīt mērķi}}, noklikšķiniet uz punkta tā skenējumā un ierakstiet mērķa X, Y un Z attiecīgajā rindā. Pārus un ierakstītos mērķus var brīvi jaukt.

## Precizēšana ar ICP

Pāri dod aptuvenu novietojumu. {{ui:Precizēt}} pārvieto skenējumu, līdz tā virsmas sakrīt ar otra skenējuma virsmām: vispirms **punkts līdz punktam**, tad **punkts līdz plaknei**. Tabulā ir uzskaitīts katrs solis ar kļūdu un to punktu skaitu, kas sakrita; līnija virs tās parāda kļūdas samazināšanos. {{ui:Pārtraukt}} beidz izpildi pēc pašreizējā soļa un saglabā sasniegto. {{ui:Atsaukt}} atceļ visu izpildi (vai pēdējo novietojumu); {{ui:Atiestatīt}} novieto skenējumu atpakaļ tā faila koordinātēs.

Lai strādātu ātri uz klēpjdatora, ICP darbojas ar samazinātu punktu kopu ({{ui:Izmantotie punkti}}, no 5 000 līdz 60 000) un ignorē sakritības, kas atrodas tālāk par {{ui:Lielākais atbilstības attālums}} (pēc noklusējuma 5 % no skenējuma izmēra, samazinoties, kad tas nostabilizējas). Vispirms nepieciešams aptuvens novietojums: skenējumi, kas gandrīz nepārklājas, ziņo, ka tos nevar saskaņot. Virsmas, kas ir tikai plakanas vai tikai taisnas, nevar fiksēt pozīciju pa sevi; šādā gadījumā pievienojiet pārus.

## Saglabāšana un eksportēšana

- {{ui:Saglabāt projektu}} ieraksta nelielu `.ccscans.json` failu: katra skenējuma nosaukumu, izmēru un tā pirmo 64 KB kontrolparaksts, kā arī tā transformāciju. Punktu tajā nav. {{ui:Atvērt projektu…}} atrod skenējumu failus pēc šīm atsaucēm (failiem jābūt vispirms pievienotiem) un atjauno katru transformāciju.
- {{ui:Eksportēt LAS}} un {{ui:Eksportēt E57}} ieraksta vienu failu, kurā ir visi skenējumi to reģistrētajā vietā. Oriģinālos punkti nekad netiek pārrakstīti; transformācija tiek piemērota izvades laikā. Ja ir ieslēgts {{ui:Lasīt katru punktu no failiem}}, katrs fails tiek lasīts no jauna katram punktam (līdz 20 miljoniem katram skenējumam); ja izslēgts, tiek ierakstīti tikai skatītājā redzamie punkti.
- {{ui:Rādīt reģistrēto mākoni}} (CadCraft) ieraksta LAS un pievieno to zem zīmējuma tajās pašās koordinātēs, kā jebkuru mākoni.

:::note
Nekas netiek augšupielādēts. Reģistrācija notiek failu paša mērvienībās un saglabā milimetrus: LAS tiek ierakstīts ar mērogu, kas atbilst (līdz 0,1 mm), E57 ar double. Koordinātu sistēma tiek ierakstīta LAS tikai tad, ja visi skenējumi norāda vienu un to pašu EPSG kodu. E57 rakstītājs ir mūsu pašu; tas tiek pārbaudīts, nolasot tā failus atpakaļ ar šo lasītāju un ar libE57Format.
:::
