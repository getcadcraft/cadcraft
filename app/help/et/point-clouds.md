---
title: Joonista tegelik teostus punktipilve kohale
summary: Lisa laserskaneering (LAS, LAZ, E57, PLY, PCD, PTX, PTS või XYZ) joonise alla, lõika sellest välja plaanilõige ja joonista seinad, uksed ja postid selle punktide objektihaarangu abil.
keywords: punktipilv, pointcloudattach, pcattach, pointcloud, pc, laserskaneering, skaneering, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, tegelik teostus, mõõdistus, lõige, plaanilõige, sõlm, haarang, jälgi, olemasolev olukord
from: b0e0aae5
---

## Mida sa valmistad

Tegelik korruseplaan: skaneeritud hoone seinad joonistatud joonte ja murdjoontena täpselt skaneeringu punktide kohale.

## Lisa pilv

1. Kui joonisel pole ühikuid, määra need esimesena ({{ui:Ühikud}} kast jaotises {{ui:Omadused}} või {{cmd:UNITS}}): CadCraft teisendab pilve enda ühikud joonise ühikuteks.
2. Sisesta {{cmd:POINTCLOUDATTACH}} (või `PCATTACH`) ja vajuta {{key:Enter}}. Vali fail laiendiga `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` või `.xyz` (teema punktipilve formaatide kohta selgitab, mida iga formaat toob ning mida skanneri enda tarkvarast eksportida). Faili saab avada ka käsuga {{ui:Ava}}, lohistada lehele või saata BIM-vaatajast käsuga {{ui:Jälgi CadCraftis}}.
3. `Punktipilve vasakpoolne alumine nurk`: vajuta {{key:Enter}}, et säilitada faili enda koordinaadid (projektiga ühtlustatud skaneering joondub joonisega), või klõpsa kohta, kuhu pilve vasakpoolne alumine nurk peab jääma.
4. Käsurealt näed, mitu punkti kuvatakse. Vaade suumib pilvele; see jääb joonte alla ja iga punkt on näha ülevalt.

## Lõika plaanilõige ja jälgi

1. Sisesta {{cmd:POINTCLOUD}} (või `PC`) ning seejärel `S` käsule {{ui:Lõige}}. Nähtav on ainult kitsas riba 1,2 m pilve madalaimast punktist kõrgemal: seinad, uksavad ja postid loevad nagu korrusplaan.
2. `H` määrab lõike kõrguse, `T` selle paksuse (joonise ühikutes). {{key:Enter}} lõpetab käsu.
3. Lülita sisse objektihaarang ({{key:F3}}) ja vali haaratavate hulgast {{ui:Sõlm}}. Joonista käsuga {{cmd:LINE}} või {{cmd:PLINE}}: kursor haardub lõike punktidele, mida tähistatakse sildiga „Punktipilv“. Joonise enda lõpp-, keskpunktid ja keskmed on tähtsamad kui pilv, seega murdjoone sulgemisel haarab see esimesse punkti.
4. Muuda lõike kõrgust, et jälgida teist korrust, ja lülita lõige välja (uuesti `S`), et näha kogu pilve.

## Veel valikuid

Käsus {{cmd:POINTCLOUD}}: `C` värvib punktid faili värvide, kõrguse, intensiivsuse, LiDAR-klassi või ühe värviga; `SI` määrab punkti suuruse; `V` peidab või näitab pilve; `Z` suumib pilvele; `D` eemaldab pilve joonisest.

Vahekaart 3D näitab pilve samuti, madalaim punkt maapinnal, sama lõikega.

:::note
Pilv ei ole osa joonisest: seda ei salvestata DWG- ega DXF-faili ning tagasivõtmine seda ei muuda. Pilv tuleb joonise hilisemal avamisel uuesti lisada. Faile loetakse sellest arvutist; midagi ei laadita üles. Väga suured skaneeringud õhutatakse ühtlaselt 2 miljonile punktile. E57-failid avanevad praegu kuni 6 miljoni punkti ja 512 MB ulatuses: suuremad skaneeringud ekspordi LAS- või LAZ-vormingus.
:::

## Prindi see

{{cmd:PLOT}} prindib pilve koos joonisega, joonte alla: mudeli printimisel ({{ui:Kõik}} hõlmab pilve ala) ja igas paigutuse vaateaknas, PDF-is, PNG-s, SVG-s ning printerile saadetavas väljundis. Prinditakse see, mis on ekraanil: lõige, kui lõige on sisse lülitatud, sinu valitud värvid ning peidetud pilv jääb välja. Paberil muutuvad punktid väikesteks ruutudeks, kusjuures igas ruudus loeb kõrgeim punkt, ja printimisel jäetakse alles kuni umbes 400,000 punkti (väga tihe pilv prindib suuremate ruutudega). Pilv prinditakse ainult joonises, kuhu see lisati; see ei prindi kunagi paberiruumis endas, vaid ainult vaateakna kaudu.

## Mitu skaneeringut

Erinevatest asukohtadest tehtud skaneeringud saab ühendada ühte koordinaatsüsteemi, täpsustada ICP-ga ja eksportida ühe LAS- või E57-failina: vaata [Ühenda mitu skaneeringut üheks](topic:register-scans).
