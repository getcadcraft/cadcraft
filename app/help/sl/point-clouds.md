---
title: Obrisovanje črt kot zgrajeno nad oblakom točk
summary: Pripnite laserski posnetek (LAS, LAZ, E57, PLY, PCD, PTX, PTS ali XYZ) pod risbo, prerežite tloris skozi njega in narišite zidove, vrata in stebre z lovljenjem objektov na njegove točke.
keywords: oblak točk, pointcloudattach, pcattach, pointcloud, pc, laserski posnetek, posnetek, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, kot zgrajeno, dejansko stanje, izmera, rez, rez tlorisa, vozlišče, lovljenje, obris, obstoječe stanje
from: b0e0aae5
---

## Kaj boste naredili

Tloris zgrajenega stanja: zidovi skenirane stavbe, narisani kot črte in polilinije natanko na točkah posnetka.

## Pripnite oblak

1. Najprej nastavite enote risbe, če jih nima (polje {{ui:Enote}} v {{ui:Lastnosti}} ali {{cmd:UNITS}}): CadCraft pretvori oblak iz njegovih enot v enote risbe.
2. Vnesite {{cmd:POINTCLOUDATTACH}} (ali `PCATTACH`) in pritisnite {{key:Enter}}. Izberite datoteko `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ali `.xyz` (tema o formatih oblakov točk pove, kaj prinese vsaka od njih in kaj izvoziti iz programske opreme skenerja). Datoteko lahko odprete tudi z {{ui:Odpri}}, jo spustite na stran ali pošljete iz pregledovalnika BIM z {{ui:Obriši v CadCraft}}.
3. `Spodnji levi kot oblaka`: pritisnite {{key:Enter}}, da ohranite lastne koordinate datoteke (posnetek, registriran v projekt, se poravna z risbo), ali kliknite, kamor naj pride spodnji levi kot.
4. Ukazna vrstica pove, koliko točk je prikazanih. Pogled se približa oblaku; ta leži pod črtami, vsaka točka je vidna z zgornje strani.

## Prerežite tloris in obrišite

1. Vnesite {{cmd:POINTCLOUD}} (ali `PC`), nato `S` za {{ui:Rez}}. Vidi se samo tanek pas 1.2 m nad najnižjo točko oblaka: zidovi, odprtine za vrata in stebri so videti kot tloris.
2. `H` nastavi višino reza, `T` pa njegovo debelino (v enotah risbe). {{key:Enter}} konča ukaz.
3. Vklopite lovljenje objektov ({{key:F3}}) z {{ui:Vozlišče}} med lovljenji. Rišite z {{cmd:LINE}} ali {{cmd:PLINE}}: kazalec se bo privzel na točke reza, označene z „Oblak točk“. Krajišča, razpolovišča in središča risbe imajo prednost pred oblakom, zato se sklenitev polilinije ustavi na njeni prvi točki.
4. Spremenite višino reza, da obrišete drugo raven, nato izklopite rez (ponovno `S`), da vidite ves oblak.

## Dodatne možnosti

V {{cmd:POINTCLOUD}}: `C` pobarva točke z barvami datoteke, višino, intenzivnostjo, razredom LiDAR ali eno barvo; `SI` nastavi velikost točk; `V` skrije ali prikaže oblak; `Z` ga poveča na pogled; `D` ga loči.

Zavihek 3D prav tako prikaže oblak, z njegovo najnižjo točko na tleh, in z istim rezom.

:::note
Oblak ni del risbe: ni shranjen v DWG ali DXF, razveljavitev ga ne spremeni. Ob naslednjem odprtju risbe ga znova pripnite. Datoteke se berejo na tem računalniku; nič se ne naloži. Zelo veliki posnetki so enakomerno zmanjšani na 2 milijona točk. Datoteke E57 se za zdaj odprejo do 6 milijonov točk in 512 MB: večje posnetke izvozite kot LAS ali LAZ.
:::

## Izris

{{cmd:PLOT}} natisne oblak skupaj z risbo, pod črtami: v izrisu modela ({{ui:Vse}} vključuje območje oblaka) in v vsakem poglednem oknu postavitve, v PDF, PNG, SVG ter v to, kar pošljete na tiskalnik. Natisne, kar je na zaslonu: rez, če je rez vklopljen, barve, ki ste jih izbrali, in oblak ne, če ste ga skrili. Na papirju se točke spremenijo v majhne kvadratke, pri čemer v vsakem zmaga najvišja točka; izris hrani največ okoli 400.000 točk (zelo gost oblak se natisne z večjimi kvadratki). Oblak se izriše samo v risbi, ki ji je bil pripet; nikoli se ne natisne v samem papirnem prostoru, ampak samo prek pogleda.

## Več posnetkov

Posnetki, zajeti z različnih položajev, se lahko registrirajo v en okvir, izboljšajo z ICP in izvozijo kot en LAS ali E57: glejte [Registrirajte več posnetkov v enega](topic:register-scans).
