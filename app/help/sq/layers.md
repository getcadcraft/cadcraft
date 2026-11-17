---
title: Organizo një vizatim me shtresa
summary: Krijoni shtresa për muret, dyert dhe shënimet, vendosni ngjyrat, bëni një shtresë aktuale, dhe fikni, ngrini, kyçni ose ndaloni printimin e shtresave.
keywords: shtresë, shtresa, la, shtresa aktuale, ngrij, shkrij, kyç, fik, ndiz, printim, pa printim, ngjyrë, vetitë e shtresës, layiso, layuniso, izolo, layoff, layfrz, laymcur, layon, laythw, riemëro, laymrg, bashko, laydel, fshi shtresën
from: cd033591
---

## Çfarë do të krijoni

Tri shtresa, Walls, Doors dhe Notes, secila me ngjyrën e vet, me objekte të vizatuara në çdo shtresë dhe të zhvendosura midis tyre.

## Paneli i shtresave

Shtresat ndodhen në panelin në të majtë, nën {{ui:Shtresat}}. Çdo rresht tregon, nga e majta në të djathtë:

- një pikë: e mbushur për shtresën **aktuale**, ku shkojnë objektet e reja;
- një mostër ngjyre;
- emrin e shtresës;
- katër butona: ndiz/fik (sy), ngrij (dëborë), kyç (dry) dhe printim (printer).

Çdo vizatim ka një shtresë të quajtur `0`. Shkrimi i `LA` dhe shtypja e {{key:Enter}} e kalon fokusin te paneli.

## Krijoni shtresa

1. Klikoni {{ui:Shtresë e re}} mbi listë. Hapet një kutizë emri.
2. Shkruani `Walls` dhe shtypni {{key:Enter}} (ose klikoni {{ui:Shto}}).

Shiriti i statusit thotë "Shtresa Walls u shtua dhe u bë aktuale." Shtresa e re merr ngjyrën 7 (e zezë në temën e çelët, e bardhë në temën e errët).

3. Klikoni sërish {{ui:Shtresë e re}}, shkruani `Doors` dhe shtypni {{key:Enter}}.
4. Klikoni sërish {{ui:Shtresë e re}}, shkruani `Notes` dhe shtypni {{key:Enter}}.

Tani Notes është aktuale.

## Vendosni një ngjyrë për secilën shtresë

1. Klikoni mostrën e ngjyrës në rreshtin Walls. Hapet zgjedhësi i ngjyrave i sistemit tuaj.
2. Zgjidhni një ngjyrë dhe konfirmoni.

Mostra dhe çdo gjë në Walls që është e ngjyrosur {{ui:Sipas shtresës}} ndryshojnë.

:::note
Një ngjyrë e zgjedhur që përputhet me një nga 255 ngjyrat standarde CAD ruhet si ai numër. Çdo ngjyrë tjetër ruhet saktësisht në CadCraft, por në një skedar DWG ose DXF ruhet si ngjyra standarde më e afërt.
:::

## Vizatoni në një shtresë

1. Klikoni emrin **Walls** në listë. Pika e tij mbushet dhe shiriti i statusit thotë "Shtresa aktuale: Walls".
2. Vizatoni një drejtkëndësh (`REC`). Ai shkon në Walls.
3. Klikoni **Doors**, dhe vizatoni një hark (`A`). Ai shkon në Doors.

Mund ta zgjidhni edhe shtresën aktuale te {{ui:Cilësimet aktuale}} në të djathtë (kur nuk ka objekt të përzgjedhur), nën {{ui:Layer}}.

## Zhvendosni objekte në një shtresë tjetër

1. Përzgjidhni objektet.
2. Në panelin e djathtë, zgjidhni shtresën e re te {{ui:Layer}}.

Ato zhvendosen në atë shtresë dhe marrin ngjyrën e saj nëse ngjyra e tyre është {{ui:Sipas shtresës}}.

## Fik, ngrij, kyç dhe printim

| Buton | Çfarë bën |
|---|---|
| Ndiz/fik (sy) | Fsheh objektet e shtresës. Ata nuk mund të shihen, përzgjidhen ose kapen. |
| Ngrij (dëborë) | Të njëjtin efekt si fik në CadCraft. Mbahet i ndarë sepse programet e tjera i trajtojnë ndryshe, dhe cilësimi ruhet. |
| Kyç (dry) | Objektet mbeten të dukshme dhe mund të kapni pikat e tyre, por nuk mund të përzgjidhen ose ndryshohen. E mirë për një sfond mbi të cilin gjurmoni. |
| Printim (printer) | Kur është shtypur, shtresa shfaqet në ekran, por **lihet jashtë printimeve** dhe PDF-ve. Përdoreni për vija ndërtimi dhe shënime për vete. |

Vendosni miun mbi një buton për të parë çfarë bën ("Fik", "Ngrij", "Kyç", "Mos e printo këtë shtresë").

Nuk mund ta fikni shtresën aktuale: shiriti i statusit thotë "Ky është shtresa aktuale. Bëni fillimisht aktuale një shtresë tjetër." Klikimi mbi emrin e një shtrese për ta bërë aktuale e ndez dhe e shkrin gjithashtu.

Çdo ndryshim i shtresave, në panel ose me një komandë, është një hap i vetëm zhbërjeje: {{key:Mod+Z}} e kthen prapa.

## Punoni me shtresat duke zgjedhur objekte

Nuk ju duhet të dini emrin e një shtrese: zgjidhni një objekt që ndodhet në të. Shkruani komandën, ose hapni {{ui:Mjetet}} në krye të panelit {{ui:Shtresat}}.

| Komanda | Çfarë bën |
|---|---|
| {{cmd:LAYISO}} | Përzgjidhni objekte, shtypni {{key:Enter}}: vetëm shtresat e tyre mbeten të ndezura, çdo shtresë tjetër fiket. Nëse shtresa aktuale është fikur, një nga shtresat e izoluara bëhet aktuale. |
| {{cmd:LAYUNISO}} | Ndez përsëri shtresat që fiku {{cmd:LAYISO}} i fundit, dhe i kthen shtresën aktuale që ndryshoi. |
| {{cmd:LAYOFF}} | Klikoni objekte një nga një: shtresa e secilit fiket. Shkruani `U` për ta marrë mbrapsht të fundit, {{key:Enter}} për ta përfunduar. |
| {{cmd:LAYFRZ}} | E njëjta gjë, por duke ngrirë secilën shtresë. |
| {{cmd:LAYMCUR}} | Klikoni një objekt: shtresa e tij bëhet aktuale (dhe ndizet dhe shkrihet). Me një objekt të zgjedhur tashmë, përdoret ai. |
| {{cmd:LAYON}} | Ndez çdo shtresë. |
| {{cmd:LAYTHW}} | Shkrin çdo shtresë. |

Shtresa aktuale nuk fiket apo ngrihet kurrë në këtë mënyrë: historiku e thotë këtë, dhe mund të bëni një shtresë tjetër aktuale me {{cmd:LAYMCUR}} më parë. Kur zgjidhet një referencë blloku, përdoret shtresa e vetë referencës.

## Riemërtoni, bashkoni dhe fshini shtresa

- {{cmd:RENAME}}: shkruani `LA`, emrin e vjetër dhe atë të ri. Çdo objekt në shtresë ndjek emrin. (`B` riemëron një bllok në të njëjtën mënyrë, me çdo referencë ndaj tij.)
- {{cmd:LAYMRG}}: klikoni një objekt në çdo shtresë për t'u bashkuar (ose shkruani `N` dhe një emër), shtypni {{key:Enter}}, pastaj zgjidhni shtresën e synuar dhe përgjigjuni `Y`. Objektet zhvendosen në shtresën e synuar — në model, në fletë dhe brenda blloqeve — dhe shtresat e bashkuara fshihen.
- {{cmd:LAYDEL}}: zgjidhni një objekt në shtresë (ose `N` dhe emrin e saj) dhe përgjigjuni `Y`. Shtresa fshihet **me çdo objekt që ka brenda**, kudo. Shtresa 0, DEFPOINTS dhe shtresa aktuale nuk mund të fshihen.

Çdo veprim është një hap i vetëm zhbërjeje. Të tre janë në {{ui:Mjetet}} në krye të panelit {{ui:Shtresat}}.

1. Klikoni një vijë muri, pastaj shkruani `LAYISO` dhe shtypni {{key:Enter}}. Vetëm Walls mbetet e ndezur.
2. Vizatoni ose ndryshoni ç'ju nevojitet në Walls.
3. Shkruani `LAYUNISO` dhe shtypni {{key:Enter}}. Doors dhe Notes kthehen.

## Gabimet e zakonshme

- **Vijat e reja shkuan në shtresën e gabuar.** Kontrolloni cila pikë është e mbushur para se të vizatoni. Një shtresë e re bëhet aktuale sapo e shtoni.
- **Një objekt nuk përzgjidhet.** Shtresa e tij është e kyçur, e fikur ose e ngrirë.
- **Shtresa ende printohet në një program tjetër.** DXF R12 nuk mund të ruajë "mos e printo". CadCraft e mban cilësimin për vete kur vizatimi ka një fletë, por programet e tjera do ta printojnë atë shtresë.
- **Emrat e shtresave me shkronja të mëdha pas ruajtjes.** DXF R12 i ruan emrat me shkronja të mëdha, kështu që `Walls` kthehet si `WALLS`, dhe hapësirat bëhen `_`. Një DWG i ruajtur mban emrat ashtu siç i shkruat.
- **Riemërtimi, bashkimi ose fshirja e një shtrese.** Përdorni {{cmd:RENAME}}, {{cmd:LAYMRG}} ose {{cmd:LAYDEL}} (edhe në {{ui:Mjetet}}): shihni më poshtë.

## Gruponi shtresat

Mbajeni listën të shkurtër duke vendosur shtresat në dosje, si Existing, Proposed dhe Services. Çdo dosje palosët, dhe ndërprerësit e saj ndezin ose fikin, ngrijnë ose kyçin të gjitha shtresat e saj së bashku. Shtresa aktuale nuk fiket kurrë.

Te {{ui:Mjetet}} në panelin e Shtresave, zgjidhni {{ui:Shto grupe të gatshme}} për një set të bërë për punë të vogla banesash, {{ui:Grupo sipas emrit}} për të grupuar shtresat që kanë të njëjtin prefiks (`E-Walls`, `E-Doors`), ose {{ui:Grup i ri}}. Tërhiqni një shtresë mbi një dosje, ose përdorni listën mbi shtresat për shtresën aktuale. Shkruani te {{ui:Gjej një shtresë}} për ta ngushtuar listën. `LAYGROUP` (`LG`) bën të njëjtën gjë në rreshtin e komandave.

Vetë shtresat nuk ndryshojnë, kështu që programet e tjera CAD i shohin si një listë e thjeshtë të zakonshme. CadCraft i mban grupet në skedar.
