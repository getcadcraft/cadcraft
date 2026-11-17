---
title: Vizato me koordinata
summary: Vizato një kontur të saktë dyshemeje duke shkruar koordinata absolute, relative dhe polare, dhe me hyrje direkte të distancës.
keywords: line, pline, polyline, koordinata, relative, polare, absolute, distancë direkte, @, shkrimi i pikave, saktë, ortho
from: 19e82350
---

## Çfarë do të bësh

Konturi i një dhome në formë L, 6000 me 4500 me një prerje 2000 me 1500, i vizatuar saktësisht, plus një mur me 30 gradë. Do të përdorësh të katër mënyrat e shkrimit të një pike. Puna është në milimetra: një njësi vizatimi përfaqëson një milimetër.

Referenca e shpejtë për çdo format është te [Hyrja e koordinatave dhe e distancave](topic:coordinate-entry).

## Para se të fillosh

1. Hap CadCraft. Nëse ka një vizatim të hapur, kliko {{ui:E re}} më parë.
2. Shtyp {{key:Esc}} që të mos ketë asgjë të përzgjedhur. Paneli i djathtë shkruan {{ui:Cilësimet aktuale}}.
3. Vendos {{ui:Njësitë}} në {{ui:Milimetra}}. Asgjë nuk ndryshon madhësi; kjo vetëm i tregon fletëve dhe printimeve se çfarë do të thotë një njësi.

## Koordinata absolute: pika e parë

Një koordinatë absolute është një pozicion i matur nga origjina, i shkruar si `x,y`.

1. Shkruaj `L` dhe shtyp {{key:Enter}}. Kërkesa shkruan `Cakto pikën e parë:`.
2. Shkruaj `0,0` dhe shtyp {{key:Enter}}.

Vija tani po lëkundet nga origjina deri te kryqëzuesi. Koordinatat në shiritin e gjendjes tregojnë distancën dhe kënd nga pika e fillimit ndërsa lëviz.

## Koordinata relative: @dx,dy

Një koordinatë relative shkruhet si `@dx,dy`: sa larg djathtas, sa lart, nga pika e fundit. Numrat negativë shkojnë majtas ose poshtë.

3. Shkruaj `@6000,0` dhe shtyp {{key:Enter}}. Një vijë 6000 shkon djathtas.
4. Shkruaj `@0,3000` dhe shtyp {{key:Enter}}.
5. Shkruaj `@-2000,0` dhe shtyp {{key:Enter}}.
6. Shkruaj `@0,1500` dhe shtyp {{key:Enter}}.

Duhet të shohësh katër vija të lidhura që ngjiten përgjatë anës së djathtë të dhomës.

## Hyrja direkte e distancës: një numër i vetëm

Kur shkruan një numër të vetëm, CadCraft shkon atë distancë në drejtimin e kryqëzuesit. Ndiz {{ui:Ortho}}, që drejtimi të ngjitet horizontalisht ose vertikalisht.

7. Shtyp {{key:F8}}, ose kliko {{ui:Ortho}} në shiritin e gjendjes. Shiriti thotë "Ortho aktive".
8. Lëviz kryqëzuesin majtas nga pika e fundit. Vija e lëvizshme mbetet horizontale.
9. Shkruaj `4000` dhe shtyp {{key:Enter}}. Vija shkon 4000 majtas.
10. Lëviz kryqëzuesin poshtë pikës së fundit.
11. Shkruaj `4500` dhe shtyp {{key:Enter}}. Je sërish në pikën e fillimit.
12. Shtyp {{key:Enter}} te kërkesa boshe për të përfunduar komandën.

:::mac
F8 mund të kontrollojë riprodhimin e medias në një tastierë Mac. Mbaj **fn** dhe shtyp F8, ose kliko {{ui:Ortho}}. Shih [Tastet, miu dhe trackpad-et](common:keys).
:::

Tani ke një kontur L të mbyllur, të bërë nga gjashtë vija të veçanta.

13. Kliko {{ui:Shtrirje}} për ta parë gjithë.

## Koordinata polare: @distancë<kënd

Një koordinatë polare shkruhet si `@distancë<kënd`. Këndet janë në gradë, të matura në drejtim të kundërt të akrepave të orës nga drejtimi pozitiv i X: 0 është djathtas, 90 lart, 180 majtas, 270 (ose -90) poshtë.

14. Shkruaj `L` dhe shtyp {{key:Enter}}.
15. Shkruaj `6000,0` dhe shtyp {{key:Enter}} për të nisur nga qoshja e poshtme djathtas.
16. Shkruaj `@2500<-30` dhe shtyp {{key:Enter}}. Një vijë 2500 nis nga qoshja, duke shkuar poshtë dhe djathtas me 30 gradë nën horizontale.
17. Shtyp {{key:Enter}} për të përfunduar komandën.

Një koordinatë polare pa `@`, si `2500<30`, matet nga origjina në vend të pikës së fundit.

## I njëjti kontur si një polivijë

Gjashtë vija të veçanta janë në rregull për shumë punë, por një polivijë është një objekt i vetëm: zhvendoset, matet dhe përzgjidhet si tërësi. Përdor {{cmd:PLINE}} me të njëjtën hyrje.

1. Shkruaj `PL` dhe shtyp {{key:Enter}}.
2. Shkruaj `0,-6000` dhe shtyp {{key:Enter}} për të nisur nën konturin e parë.
3. Shkruaj `@6000,0`, pastaj shtyp {{key:Enter}}.
4. Shkruaj `@0,3000`, pastaj shtyp {{key:Enter}}.
5. Shkruaj `@-2000,0`, pastaj shtyp {{key:Enter}}.
6. Shkruaj `@0,1500`, pastaj shtyp {{key:Enter}}.
7. Shkruaj `@-4000,0`, pastaj shtyp {{key:Enter}}.
8. Shkruaj `C` dhe shtyp {{key:Enter}}. Polivija mbyllet dhe komanda përfundon.
9. Kliko konturin e ri. Paneli i djathtë shfaq "Polivijë", {{ui:Kulmet}}, {{ui:Gjatësia}} dhe, sepse është e mbyllur, {{ui:Sipërfaqe}}.

Sipërfaqja duhet të shfaqë 24000000 (milimetra katrorë, që janë 24 metra katrorë).

## Opsionet gjatë vizatimit

- Te {{cmd:LINE}} dhe {{cmd:PLINE}}, shkruaj `U` dhe shtyp {{key:Enter}} për të hequr segmentin e fundit pa dalë nga komanda.
- Te {{cmd:LINE}}, `C` kthehet përsëri te pika e parë kur ka të paktën dy segmente.
- Te {{cmd:PLINE}}, `A` kalon në segmente harku (çdo hark vazhdon butësisht nga segmenti i mëparshëm), dhe `L` kthehet te vijat. Në modalitetin e harkut, opsioni i mbylljes është `CL`.
- Shtypja e {{key:Enter}} te `Cakto pikën e parë:` në {{cmd:LINE}} nis nga pika e fundit që dhe, kështu që mund të vazhdosh aty ku ke ndalur.

## Gabimet e zakonshme

- **Shkruan `6000,0` kur do të thoje `@6000,0`.** Pa `@`, pika matet nga origjina, jo nga pika e fundit, kështu që vija shkon diku të papritur. Në CadCraft, `x,y` është gjithmonë absolute. Shkruaj `U` dhe {{key:Enter}} për ta marrë mbrapsht.
- **Presja e shkruar si pikë dhjetore.** Dhjetoret përdorin pikën: `1250.5`. Presja gjithmonë ndan X nga Y.
- **Distanca direkte shkoi në drejtimin e gabuar.** Një numër i vetëm ndjek kryqëzuesin. Lëviz kryqëzuesin në anën që dëshiron para se të shtypësh {{key:Enter}}, dhe ndiz {{ui:Ortho}} për vija të drejta.
- **"Point or option keyword required."** CadCraft nuk e kuptoi atë që shkrove: kërkohet një pikë ose një fjalë opsioni. Kontrollo për hapësira brenda numrit ose një presje që mungon, dhe shkruaje sërish.
- **Këmbë dhe inç.** CadCraft lexon vetëm numra të thjeshtë. Shkruaj `150` për 12'-6" në një vizatim me inç, ose `12.5` në një vizatim me këmbë.
