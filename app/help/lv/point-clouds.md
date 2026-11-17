---
title: Izsekot as-built līnijas pār punktu mākoni
summary: Pievienojiet lāzerskenējumu (LAS, LAZ, E57, PLY, PCD, PTX, PTS vai XYZ) rasējuma pamatā, izgrieziet plāna griezumu caur to un zīmējiet sienas, durvis un kolonnas, izmantojot objektu piesaisti tā punktiem.
keywords: punktu mākonis, pointcloudattach, pcattach, pointcloud, pc, lāzerskenēšana, skenēšana, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, uzmērījums, griezums, plāna griezums, mezgls, piesaiste, izsekot, esošais stāvoklis
from: b0e0aae5
---

## Ko izveidosiet

Izpildrasējuma stāva plāns: skenētas ēkas sienas, zīmētas kā līnijas un polilīnijas tieši uz skenējuma punktiem.

## Mākoņa pievienošana

1. Ja rasējumam vēl nav mērvienību, vispirms iestatiet tās ({{ui:Vienības}} lodziņš sadaļā {{ui:Rekvizīti}} vai {{cmd:UNITS}}): CadCraft pārveido mākoni no tā vienībām uz rasējuma vienībām.
2. Ierakstiet {{cmd:POINTCLOUDATTACH}} (vai `PCATTACH`) un nospiediet {{key:Enter}}. Izvēlieties `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` vai `.xyz` failu (tēmā par punktu mākoņu formātiem ir norādīts, ko katrs no tiem ievieto un ko eksportēt no skenera pašu programmatūras). Failu var atvērt arī ar {{ui:Atvērt}}, nomest lapā vai nosūtīt no BIM skatītāja {{ui:Izsekot programmā CadCraft}}.
3. `Mākoņa apakšējais kreisais stūris`: nospiediet {{key:Enter}}, lai saglabātu faila paša koordinātes (projektam reģistrēts skenējums saskan ar rasējumu), vai noklikšķiniet, kur jānovieto tā apakšējais kreisais stūris.
4. Komandrindā parādīts, cik punktu ir redzams. Skats tuvinās mākonim; tas atrodas zem līnijdarba, un visi punkti ir redzami no augšas.

## Plāna griezuma izgriešana un izsekošana

1. Ierakstiet {{cmd:POINTCLOUD}} (vai `PC`), pēc tam `S` opcijai {{ui:Griezums (S)}}. Redzama tikai plāna josla 1.2 m virs mākoņa zemākā punkta: sienas, durvju atveres un kolonnas izskatās kā stāva plāns.
2. `[Augstums (H)]` iestata griezuma augstumu, `[Biezums (T)]` tā biezumu (rasējuma vienībās). {{key:Enter}} beidz komandu.
3. Ieslēdziet objektu piesaisti ({{key:F3}}) ar {{ui:Mezgls}} starp piesaistēm. Zīmējiet ar {{cmd:LINE}} vai {{cmd:PLINE}}: kursors piesaistās griezuma punktiem, kas apzīmēti ar "Punktu mākonis". Paša rasējuma galapunkti, viduspunkti un centri ir svarīgāki par mākoni, tāpēc polilīnijas aizvēršana nonāk tās pirmajā punktā.
4. Mainiet griezuma augstumu, lai izsekotu citam līmenim, un izslēdziet griezumu (vēlreiz `S`), lai redzētu visu mākoni.

## Papildu opcijas

Komandā {{cmd:POINTCLOUD}}: `[Krāsa (C)]` krāso punktus pēc faila krāsām, augstuma, intensitātes, LiDAR klases vai vienas krāsas; `[Punkta izmērs (SI)]` iestata punktu izmēru; `[Slēpt/Rādīt (V)]` slēpj vai rāda mākoni; `[Tālummaiņa (Z)]` tuvina tam; `[Atdalīt (D)]` atdala to.

Cilnē 3D mākonis arī ir redzams, ar zemāko punktu uz zemes un ar to pašu griezumu.

:::note
Mākonis nav daļa no rasējuma: tas netiek saglabāts DWG vai DXF failā, un atsaukšana to nemaina. Pievienojiet to vēlreiz, kad vēlāk atverat rasējumu. Faili tiek nolasīti šajā datorā; nekas netiek augšupielādēts. Ļoti lieli skenējumi vienmērīgi tiek retināti līdz 2 miljoniem punktu. E57 faili pašlaik tiek atvērti līdz 6 miljoniem punktu un 512 MB: lielākus skenējumus eksportējiet kā LAS vai LAZ.
:::

## Drukāšana

{{cmd:PLOT}} izdrukā mākoni kopā ar rasējumu zem līnijdarba: modeļa drukā ({{ui:Viss}} ietver mākoņa laukumu) un katrā lapas skatu logā, PDF, PNG, SVG un tajā, ko nosūtāt printerim. Tiek drukāts tas, kas redzams ekrānā: griezums, ja tas ir ieslēgts, izvēlētās krāsas, un nekas, ja mākonis ir paslēpts. Uz papīra punkti kļūst par maziem kvadrātiem, un katrā kvadrātā paliek augstākais punkts; drukā ir ne vairāk kā aptuveni 400 000 punktu (ļoti blīvs mākonis tiek drukāts ar lielākiem kvadrātiem). Mākonis tiek drukāts tikai rasējumā, kurā tas ir pievienots; papīra telpā tas nekad netiek drukāts tieši, bet tikai caur skatu logu.

## Vairāki skenējumi

Skenējumus, kas uzņemti no dažādām pozīcijām, var reģistrēt vienā koordinātu sistēmā, precizēt ar ICP un eksportēt kā vienu LAS vai E57: skatiet [Vairāku skenējumu reģistrēšana vienotā sistēmā](topic:register-scans).
