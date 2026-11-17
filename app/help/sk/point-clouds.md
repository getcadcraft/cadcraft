---
title: Trasovanie skutočného stavu nad mračnom bodov
summary: Pripojte laserové skenovanie (LAS, LAZ, E57, PLY, PCD, PTX, PTS alebo XYZ) pod výkres, vytvorte rez pôdorysu a kreslite steny, dvere a stĺpy s prichytením na jeho body.
keywords: mračno bodov, pointcloudattach, pcattach, pointcloud, pc, laserové skenovanie, skenovanie, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, skutočné vyhotovenie, as-built, as built, prieskum, rez, rez pôdorysu, uzol, prichytenie, trasovanie, jestvujúce podmienky
from: b0e0aae5
---

## Čo vytvoríte

Skutočný pôdorys podlažia: múry naskenovanej budovy nakreslené ako čiary a lomené čiary presne na body skenu.

## Pripojenie mračna

1. Ak výkres nemá jednotky, najprv ich nastavte (pole {{ui:Jednotky}} v {{ui:Vlastnosti}} alebo {{cmd:UNITS}}): CadCraft prevedie mračno z jeho vlastných jednotiek na jednotky výkresu.
2. Napíšte {{cmd:POINTCLOUDATTACH}} (alebo `PCATTACH`) a stlačte {{key:Enter}}. Vyberte súbor `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` alebo `.xyz` (téma o formátoch mračien bodov vysvetľuje, čo každý prináša a čo exportovať zo softvéru skenera). Súbor môžete otvoriť aj tlačidlom {{ui:Otvoriť}}, pretiahnuť na stránku alebo odoslať z prehliadača BIM tlačidlom {{ui:Trasovať v CadCraft}}.
3. `Ľavý dolný roh mračna`: stlačte {{key:Enter}}, ak chcete zachovať vlastné súradnice súboru (sken zaregistrovaný k projektu sa zarovná s výkresom), alebo kliknite na miesto, kam má ľavý dolný roh mračna ísť.
4. Príkazový riadok ukáže, koľko bodov sa zobrazí. Pohľad sa priblíži k mračnu; mračno leží pod čiarami a každý bod je vidieť zhora.

## Rez pôdorysu a trasovanie

1. Napíšte {{cmd:POINTCLOUD}} (alebo `PC`) a potom `S` pre {{ui:Rez}}. Zobrazí sa iba tenký pás 1.2 m nad najnižším bodom mračna: steny, otvory dverí a stĺpy pôsobia ako pôdorys podlažia.
2. `H` nastaví výšku rezu, `T` jeho hrúbku (v jednotkách výkresu). {{key:Enter}} ukončí príkaz.
3. Zapnite prichytávanie na objekty ({{key:F3}}) s {{ui:Uzol}} medzi prichytávaniami. Kreslite pomocou {{cmd:LINE}} alebo {{cmd:PLINE}}: kurzor sa prichytí k bodom rezu, ktoré sú označené ako "Mračno bodov". Koncové body, stredy a stredy kružníc vlastného výkresu majú prednosť pred mračnom, takže uzavretie lomenej čiary sa prichytí na jej prvý bod.
4. Zmenou výšky rezu trasujte ďalšiu úroveň a potom rez vypnite (znova `S`), aby ste videli celé mračno.

## Ďalšie možnosti

V {{cmd:POINTCLOUD}}: `C` sfarbí body podľa farieb súboru, výšky, intenzity, triedy LiDAR alebo jednou farbou; `SI` nastaví veľkosť bodu; `V` skryje alebo zobrazí mračno; `Z` priblíži na mračno; `D` ho odpojí.

Karta 3D zobrazuje mračno tiež, s jeho najnižším bodom na zemi a s rovnakým rezom.

:::note
Mračno nie je súčasťou výkresu: neukladá sa do DWG ani DXF a vrátenie späť ho nemení. Pri ďalšom otvorení výkresu ho pripojte znova. Súbory sa čítajú na tomto počítači; nič sa nenahráva. Veľmi veľké skeny sa rovnomerne prerieďujú na 2 milióny bodov. Súbory E57 sa zatiaľ otvoria až do 6 miliónov bodov a 512 MB: väčšie skeny exportujte ako LAS alebo LAZ.
:::

## Vykreslenie

{{cmd:PLOT}} vytlačí mračno spolu s výkresom, pod čiarami: pri vykreslení modelu (v {{ui:Všetko}} je zahrnutá aj oblasť mračna) a vo všetkých výrezoch rozloženia, v PDF, PNG, SVG a v tom, čo odošlete do tlačiarne. Tlačí sa to, čo je na obrazovke: rez, ak je zapnutý, zvolené farby a skryté mračno, ak ste ho skryli. Na papieri sa body zmenia na malé štvorčeky, pričom najvyšší bod v každom z nich vyhráva, a vykreslenie zachová najviac asi 400 000 z nich (veľmi husté mračno sa vytlačí s väčšími štvorčekmi). Mračno sa vykresľuje iba vo výkrese, do ktorého bolo pripojené; nikdy sa netlačí priamo v priestore papiera, len cez výrez.

## Viacero skenov

Skeny z rôznych pozícií sa dajú zaregistrovať do jedného súradnicového rámca, spresniť metódou ICP a exportovať ako jeden LAS alebo E57: pozri [Zaregistrovanie viacerých skenov do jedného](topic:register-scans).
