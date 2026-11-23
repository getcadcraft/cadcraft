---
title: Organizo një vizatim me shtresa
summary: Krijo shtresa për muret, dyert dhe shënimet, cakto ngjyra, bëje një shtresë aktuale, dhe fik, ngrij, kyç ose hiqi nga printimi shtresat.
keywords: shtresë, shtresa, la, shtresa aktuale, ngrij, shkrij, kyç, fik, ndiz, printo, mos printo, ngjyrë, veti shtrese, layiso, layuniso, izolo, layoff, layfrz, laymcur, layon, laythw, riemëro, laymrg, bashko, laydel, fshi shtresën
from: ba9f0617
---

## Çfarë do të bësh

Tri shtresa, Walls, Doors dhe Notes, secila me ngjyrën e vet, me objekte të vizatuara në çdo shtresë dhe të zhvendosura mes tyre.

## Paneli i shtresave

Shtresat jetojnë në panelin në të majtë, nën {{ui:Shtresat}}. Çdo rresht shfaq, nga e majta në të djathtë:

- një pikë: e mbushur për shtresën **aktuale**, ku shkojnë objektet e reja;
- një mostër ngjyre;
- emrin e shtresës;
- katër butona: ndezur/fikur (sy), ngrirë (flok bore), kyçur (katenaci) dhe printimi (printer).

Çdo vizatim ka një shtresë të quajtur `0`. Shkruaj `LA` dhe shtyp {{key:Enter}} për të shkuar te paneli.

## Krijo shtresa

1. Kliko {{ui:Shtresë e re}} mbi listë. Hapet një kuti emri.
2. Shkruaj `Walls` dhe shtyp {{key:Enter}} (ose kliko {{ui:Shto (A)}}).

Rreshti i statusit thotë "Added layer Walls and made it current." Shtresa e re merr ngjyrën 7 (e zezë në temën e çelët, e bardhë në atë të errët).

3. Kliko {{ui:Shtresë e re}} përsëri, shkruaj `Doors` dhe shtyp {{key:Enter}}.
4. Kliko {{ui:Shtresë e re}} përsëri, shkruaj `Notes` dhe shtyp {{key:Enter}}.

Tani Notes është aktuale.

## Jep një ngjyrë çdo shtrese

1. Kliko mostrën e ngjyrës te rreshti Walls. Hapet zgjedhësi i ngjyrave i sistemit tënd.
2. Zgjidh një ngjyrë dhe konfirmo.

Mostra dhe çdo gjë në Walls që është me ngjyrë {{ui:Sipas shtresës}} ndryshojnë.

:::note
Një ngjyrë e zgjedhur që përputhet me një nga 255 ngjyrat standarde CAD ruhet si ai numër. Çdo ngjyrë tjetër mbahet saktësisht në CadCraft, por ruhet si ngjyra standarde më e afërt në një skedar DWG ose DXF.
:::

## Vizato në një shtresë

1. Kliko emrin **Walls** në listë. Pika e tij mbushet dhe rreshti i statusit thotë "Current layer: Walls".
2. Vizato një drejtkëndësh (`REC`). Ai shkon në Walls.
3. Kliko **Doors**, dhe vizato një hark (`A`). Ai shkon në Doors.

Mund të zgjedhësh shtresën aktuale edhe te {{ui:Cilësimet aktuale}} në të djathtë (kur nuk ka asgjë të zgjedhur), nën {{ui:Shtresa}}.

## Zhvendos objekte në një shtresë tjetër

1. Zgjidh objektet.
2. Në panelin e djathtë, zgjidh shtresën e re te {{ui:Shtresa}}.

Ato zhvendosen te ajo shtresë dhe marrin ngjyrën e saj nëse ngjyra e tyre është {{ui:Sipas shtresës}}.

## Fik, ngrij, kyç dhe printo

| Buton | Çfarë bën |
|---|---|
| Ndezur/fikur (sy) | Fsheh objektet e shtresës. Nuk mund të shihen, zgjidhen ose kapen. |
| Ngrij (flok bore) | Efekti është si fikja në CadCraft. Mbahet e veçuar sepse programet e tjera i trajtojnë ndryshe, dhe cilësimi ruhet. |
| Kyç (katenaci) | Objektet mbeten të dukshme dhe mund t'u kapësh, por nuk mund të zgjidhen ose ndryshohen. Mirë për një sfond që gjurmon. |
| Printo (printer) | Kur është shtypur, shtresa shfaqet në ekran por **lihet jashtë printimeve** dhe PDF-ve. Përdore për vija ndihmëse dhe shënime për vete. |

Qëndro mbi një buton për të parë çfarë bën ("Turn off", "Freeze", "Lock", "Do not plot this layer").

Nuk mund ta fikësh shtresën aktuale: rreshti i statusit thotë "That is the current layer. Make another layer current first." Kur kliko emrin e një shtrese për ta bërë aktuale, ajo ndizet dhe shkrihet gjithashtu.

Çdo ndryshim i shtresës, në panel ose me komandë, është një hap zhbërjeje: {{key:Mod+Z}} e kthen.

## Punoni me shtresat duke zgjedhur objekte

Nuk ke nevojë ta dish emrin e një shtrese: zgjidh një objekt mbi të. Shkruaj komandën, ose hap {{ui:Mjetet}} në krye të panelit {{ui:Shtresat}}.

| Komanda | Çfarë bën |
|---|---|
| {{cmd:LAYISO}} | Zgjidh objekte, shtyp {{key:Enter}}: vetëm shtresat e tyre mbeten të ndezura, çdo shtresë tjetër fiket. Nëse shtresa aktuale fiket, një nga shtresat e izoluara bëhet aktuale. |
| {{cmd:LAYUNISO}} | Ndez sërish shtresat që fiki {{cmd:LAYISO}} e fundit, dhe kthen shtresën aktuale që ndryshoi. |
| {{cmd:LAYOFF}} | Kliko objekte njëri pas tjetrit: shtresa e secilit fiket. Shkruaj `U` për ta marrë mbrapsht të fundit, {{key:Enter}} për të përfunduar. |
| {{cmd:LAYFRZ}} | E njëjta gjë, por duke ngrirë çdo shtresë. |
| {{cmd:LAYMCUR}} | Kliko një objekt: shtresa e tij bëhet aktuale (dhe ndizet dhe shkrihet). Me një objekt të zgjedhur, përdoret ai. |
| {{cmd:LAYON}} | Ndez çdo shtresë. |
| {{cmd:LAYTHW}} | Shkrin çdo shtresë. |

Shtresa aktuale nuk fiket apo ngrihet kurrë në këtë mënyrë: historiku e thotë këtë, dhe mund ta bësh një shtresë tjetër aktuale me {{cmd:LAYMCUR}} më parë. Kur zgjedh një referencë bllokut, përdoret shtresa e vetë referencës.

## Riemëro, bashko dhe fshi shtresa

- {{cmd:RENAME}}: shkruaj `LA`, emrin e vjetër dhe atë të ri. Çdo objekt i shtresës e ndjek. (`B` riemëron një bllok në të njëjtën mënyrë, me çdo referencë të tij.)
- {{cmd:LAYMRG}}: kliko një objekt në çdo shtresë për t'i bashkuar (ose shkruaj `N` dhe një emër), shtyp {{key:Enter}}, pastaj zgjidh shtresën e synimit dhe përgjigju `Y`. Objektet zhvendosen te synimi, në model, në fletë dhe brenda blloqeve, dhe shtresat e bashkuara zhduken.
- {{cmd:LAYDEL}}: zgjidh një objekt në shtresë (ose `N` dhe emrin e saj) dhe përgjigju `Y`. Shtresa shkon **me çdo objekt mbi të**, kudo. Shtresa 0, DEFPOINTS dhe shtresa aktuale nuk mund të fshihen.

Secila është një hap zhbërjeje. Të tria janë te {{ui:Mjetet}} në krye të panelit {{ui:Shtresat}}.

1. Kliko një vijë muri, pastaj shkruaj `LAYISO` dhe shtyp {{key:Enter}}. Vetëm Walls mbetet e ndezur.
2. Vizato ose ndrysho ç'të duhet në Walls.
3. Shkruaj `LAYUNISO` dhe shtyp {{key:Enter}}. Doors dhe Notes kthehen.

## Gabime të zakonshme

- **Vijat e reja u futën në shtresën e gabuar.** Kontrollo cila pikë është e mbushur para se të vizatosh. Një shtresë e re bëhet aktuale sapo e shton.
- **Një objekt nuk zgjidhet.** Shtresa e tij është e kyçur, e fikur ose e ngrirë.
- **Shtresa akoma printohet në një program tjetër.** DXF R12 nuk mund ta ruajë "mos printo". CadCraft e mban cilësimin për vete kur vizatimi ka një fletë, por programet e tjera do ta printojnë atë shtresë.
- **Emrat e shtresave me shkronja të mëdha pas ruajtjes.** DXF R12 i ruan emrat me shkronja të mëdha, kështu `Walls` kthehet si `WALLS`, dhe hapësirat bëhen `_`. Një DWG i ruajtur i mban emrat ashtu si i shkrove.
- **Riemërimi, bashkimi ose fshirja e një shtrese.** Përdor {{cmd:RENAME}}, {{cmd:LAYMRG}} ose {{cmd:LAYDEL}} (edhe te {{ui:Mjetet}}): shih më poshtë.

## Grupo shtresat

Mbaje listën të shkurtër duke vendosur shtresat në dosje, si Ekzistuese, E propozuar dhe Shërbime. Çdo dosje palosët, dhe çelësat e saj i ndezin ose i fikin të gjitha shtresat e saj, i ngrijnë ose i kyçin bashkë. Shtresa aktuale nuk fiket kurrë.

Te {{ui:Mjetet}} në panelin Shtresat, zgjidh {{ui:Shto grupe të gatshme}} për një set të bërë për punë të vogël banimi, {{ui:Grupo sipas emrit}} për të grupuar shtresat që kanë të njëjtin prefiks (`E-Walls`, `E-Doors`), ose {{ui:Grup i ri}}. Zvarrit një shtresë mbi një dosje, ose përdor listën mbi shtresat për shtresën aktuale. Shkruaj te {{ui:Gjej një shtresë}} për ta ngushtuar listën. `LAYGROUP` (`LG`) bën të njëjtën gjë në rreshtin e komandës.

Për të riemëruar një grup, kliko dy herë emrin e tij (ose zgjidhe dhe shtyp {{key:F2}}), shkruaj emrin e ri dhe shtyp {{key:Enter}}; {{key:Esc}} mban të vjetrin, dhe {{cmd:UNDO}} e kthen. {{ui:Grup i ri}} është te {{ui:Mjetet}} në panelin Shtresat.

Shtresat vetë nuk ndryshojnë, kështu që programet e tjera CAD i shohin si një listë të thjeshtë. CadCraft i mban grupet në skedar.
