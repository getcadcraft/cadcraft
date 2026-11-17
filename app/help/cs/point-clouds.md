---
title: Obkreslit skutečné provedení nad mračnem bodů
summary: Připojte laserový sken (LAS, LAZ, E57, PLY, PCD, PTX, PTS nebo XYZ) pod výkres, proveďte jeho řez půdorysem a kreslete stěny, dveře a sloupy s uchopením k jeho bodům.
keywords: mračno bodů, pointcloudattach, pcattach, pointcloud, pc, laserový sken, sken, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, skutečné provedení, as-built, zaměření, řez, řez půdorysem, uzel, uchopení, obkreslit, stávající stav
from: b0e0aae5
---

## Co vytvoříte

Skutečný půdorys podlaží: stěny naskenované budovy nakreslené jako úsečky a mnohočáry přesně na body skenu.

## Připojení mračna

1. Pokud výkres nemá jednotky, nejprve je nastavte (pole {{ui:Jednotky}} v {{ui:Vlastnosti}} nebo {{cmd:UNITS}}): CadCraft převede mračno z jeho vlastních jednotek na jednotky výkresu.
2. Napište {{cmd:POINTCLOUDATTACH}} (nebo `PCATTACH`) a stiskněte {{key:Enter}}. Vyberte soubor `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` nebo `.xyz` (téma o formátech mračen bodů popisuje, co každý přináší a co exportovat z vlastního softwaru skeneru). Soubor můžete otevřít také tlačítkem {{ui:Otevřít}}, přetáhnout na stránku nebo odeslat z prohlížeče BIM tlačítkem {{ui:Obkreslit v CadCraft}}.
3. `Levý dolní roh mračna`: stiskněte {{key:Enter}} pro zachování vlastních souřadnic souboru (sken zaregistrovaný k projektu zapadne do výkresu), nebo klikněte, kam má levý dolní roh patřit.
4. Příkazový řádek uvede, kolik bodů se zobrazí. Pohled se přiblíží k mračnu; leží pod čárovou kresbou a každý bod je vidět shora.

## Řez půdorysem a obkreslení

1. Napište {{cmd:POINTCLOUD}} (nebo `PC`) a poté `S` pro {{ui:Řez}}. Zobrazí se jen tenký pás 1.2 m nad nejnižším bodem mračna: stěny, otvory dveří a sloupy čitelně připomínají půdorys.
2. `H` nastaví výšku řezu, `T` jeho tloušťku (v jednotkách výkresu). {{key:Enter}} ukončí příkaz.
3. Zapněte uchopení ({{key:F3}}) s možností {{ui:Uzel}} mezi uchopeními. Kreslete pomocí {{cmd:LINE}} nebo {{cmd:PLINE}}: kurzor se přichytí k bodům řezu, označeným „Mračno bodů“. Koncové body, středy a středové body výkresu mají přednost před mračnem, takže uzavření mnohočáry přichytí k jejímu prvnímu bodu.
4. Změňte výšku řezu a obkreslete další podlaží; poté řez vypněte (znovu `S`) a uvidíte celé mračno.

## Další možnosti

V příkazu {{cmd:POINTCLOUD}}: `C` obarví body podle barev souboru, výšky, intenzity, třídy LiDAR nebo jednou barvou; `SI` nastaví velikost bodu; `V` mračno skryje nebo zobrazí; `Z` na něj přiblíží; `D` ho odpojí.

Karta 3D zobrazuje mračno také, jeho nejnižší bod na zemi, se stejným řezem.

:::note
Mračno není součástí výkresu: neukládá se do DWG ani DXF a vrácení zpět ho nemění. Při dalším otevření výkresu jej připojte znovu. Soubory se čtou na tomto počítači; nic se nenahrává. Velmi velké skeny se rovnoměrně proředí na 2 miliony bodů. Soubory E57 se zatím otevřou až se 6 miliony bodů a 512 MB: větší skeny exportujte jako LAS nebo LAZ.
:::

## Vykreslení

{{cmd:PLOT}} vykreslí mračno spolu s výkresem, pod čárovou kresbou: při vykreslení modelu ({{ui:Vše}} zahrnuje oblast mračna) i v každém výřezu rozvržení, v PDF, PNG, SVG i v tom, co odešlete na tiskárnu. Tiskne se to, co je na obrazovce: řez, pokud je zapnutý, vámi zvolené barvy, a skryté mračno zůstane skryté. Na papíře se body změní na malé čtverečky, přičemž u každého vyhrává nejvyšší bod, a vykreslení jich zachová nejvýše zhruba 400 000 (velmi husté mračno se vytiskne většími čtverečky). Mračno se vykresluje jen ve výkresu, ke kterému bylo připojeno; v prostoru Papír se nikdy netiskne samo, jen přes výřez.

## Více skenů

Skeny pořízené z různých pozic lze zaregistrovat do jednoho rámce, zpřesnit metodou ICP a exportovat jako jeden soubor LAS nebo E57: viz [Zaregistrovat více skenů do jednoho](topic:register-scans).
