---
title: Spoor as-gebou-lyne oor 'n puntwolk
summary: Heg 'n laserskandering (LAS, LAZ, E57, PLY, PCD, PTX, PTS of XYZ) onder die tekening aan, sny 'n plansnit daardeur, en teken mure, deure en kolomme met voorwerpsnap op sy punte.
keywords: puntwolk, pointcloudattach, pcattach, pointcloud, pc, laserskandering, skandering, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-gebou, as gebou, opmeting, snit, plansnit, knoop, snap, spoor, bestaande toestande
from: b0e0aae5
---

## Wat jy gaan maak

'n As-gebou-vloerplan: die mure van 'n geskandeerde gebou, getekend as lyne en polilyne presies op die skandering se punte.

## Heg die wolk aan

1. Stel die tekening se eenhede eerste as dit geen het nie (die {{ui:Eenhede}}-kassie in {{ui:Eienskappe}}, of {{cmd:UNITS}}): CadCraft skakel die wolk van sy eie eenhede na dié van die tekening om.
2. Tik {{cmd:POINTCLOUDATTACH}} (of `PCATTACH`) en druk {{key:Enter}}. Kies 'n `.las`-, `.laz`-, `.e57`-, `.ply`-, `.pcd`-, `.ptx`-, `.pts`- of `.xyz`-lêer (die onderwerp oor puntwolkformate sê wat elkeen bring, en wat uit 'n skandeerder se eie sagteware uitgevoer moet word). Jy kan die lêer ook met {{ui:Maak oop}} oopmaak, dit op die bladsy laat val, of dit vanaf die BIM-kyker se {{ui:Spoor in CadCraft}} stuur.
3. `Onderste linkerhoek van die wolk`: druk {{key:Enter}} om die lêer se eie koördinate te behou (’n skandering wat na die projek geregistreer is, pas by die tekening), of klik waar die onderste linkerhoek moet kom.
4. Die opdragreël sê hoeveel punte wys. Die aansig zoem na die wolk; dit lê onder die lynwerk, met elke punt van bo af gesien.

## Sny 'n plansnit en spoor

1. Tik {{cmd:POINTCLOUD}} (of `PC`), en dan `S` vir {{ui:Snit}}. Slegs 'n dun band 1.2 m bo die wolk se laagste punt wys: mure, deuropeninge en kolomme lees soos 'n vloerplan.
2. `H` stel die hoogte van die snit, en [Dikte (T)] die dikte (in tekeningeenhede). {{key:Enter}} beëindig die opdrag.
3. Skakel voorwerpsnap ({{key:F3}}) aan met {{ui:Knoop}} onder die snaps. Teken met {{cmd:LINE}} of {{cmd:PLINE}}: die wyser snap na die snit se punte, wat as "Puntwolk" gemerk word. Die tekening se eie eindpunte, middelpunte en sentrums wen bo die wolk, so sluit 'n polilyn op sy eerste punt.
4. Verander die snithoogte om 'n ander vlak te spoor, en skakel dan die snit af (`S` weer) om die hele wolk te sien.

## Meer opsies

In {{cmd:POINTCLOUD}}: [Kleur (C)] kleur die punte volgens die lêer se kleure, hoogte, intensiteit, LiDAR-klas of een kleur; [Puntgrootte (SI)] stel die puntgrootte; `V` versteek of wys die wolk; `Z` zoem na die wolk; [Ontkoppel (D)] ontkoppel dit.

Die 3D-oortjie wys die wolk ook, met sy laagste punt op die grond, en met dieselfde snit.

:::note
Die wolk is nie deel van die tekening nie: dit word nie in die DWG of DXF gestoor nie, en ontdoen verander dit nie. Heg dit weer aan wanneer jy die tekening later oopmaak. Lêers word op hierdie rekenaar gelees; niks word opgelaai nie. Baie groot skanderings word eweredig tot 2 miljoen punte uitgedun. E57-lêers maak tot 6 miljoen punte en 512 MB vir nou oop: voer groter skanderings as LAS of LAZ uit.
:::

## Druk dit

{{cmd:PLOT}} druk die wolk saam met die tekening, onder die lynwerk: in 'n modeldruk ({{ui:Alles}} sluit die wolk se gebied in) en in elke uitlegvenster, in die PDF, die PNG, die SVG en wat jy na 'n drukker stuur. Dit druk wat op die skerm is: die snit as die snit aan is, die kleure wat jy gekies het, en versteek as jy dit versteek het. Op papier word die punte klein vierkante, met die hoogste punt wat elk wen, en 'n druk hou op die meeste ongeveer 400,000 daarvan (’n baie digte wolk druk met groter vierkante). Die wolk word net gedruk in die tekening waaraan dit geheg is; dit druk nooit in papierruimte self nie, net deur 'n uitlegvenster.

## Verskeie skanderings

Skanderings wat van verskillende posisies af geneem is, kan in een raamwerk geregistreer, met ICP verfyn en as een LAS of E57 uitgevoer word: sien [Registreer verskeie skanderings tot een](topic:register-scans).
