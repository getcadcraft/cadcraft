---
title: Prerje dhe zgjatje
summary: Pres vijat prapa aty ku të tjerat i kryqëzojnë dhe zgjat ato për t'u takuar me të tjerat, një pjesë në çdo herë ose shumë njëherësh duke tërhequr një shteg përmes tyre.
keywords: trimextendmode, tërheqje dritareje, pres, zgjat, tr, ex, prerje e shpejtë, tërhiq, dorë e lirë, shteg, kornizë, kryqëzim, shift, skajet prerëse, skajet kufi, edgemode, mënyrë, standarde, e shpejtë, fshi, pamje paraprake, muret, pastrim
from: 25fbc5bd
---

## Çfarë do të mësosh

Si funksionojnë {{cmd:TRIM}} dhe {{cmd:EXTEND}}, dhe mënyrat e shpejta për t'i përdorur: tërhiq përmes shumë pjesësh njëherësh, mbaj {{key:Shift}} për të ndërruar midis prerjes dhe zgjatjes, dhe shiko çfarë do të largohet para se të klikosh.

## Pres një pjesë

1. Vizato një vijë horizontale të gjatë dhe dy vija të shkurtra që e kryqëzojnë.
2. Shkruaj `TR` dhe shtyp {{key:Enter}}. Historiku thotë `Cilësimet aktuale: mënyra e shpejtë, skajet: pa zgjatje`.
3. Rri me treguesin mbi vijën e gjatë midis dy të shkurtërve. Ajo pjesë bëhet gri dhe me vija: është ajo që do të largohet.
4. Kliko. Pjesa zhduket.
5. Shtyp {{key:Enter}} për të përfunduar komandën.

Në mënyrën e shpejtë (parazgjedhja) çdo objekt i dukshëm është një skaj prerës, kështu nuk zgjedh kurrë skajet më parë. Kliko pjesën që do të hiqet. Një objekt që asgjë nuk e kryqëzon fshihet tërësisht, dhe historiku e thotë këtë.

## Pres shumë pjesë me një tërheqje

1. Vizato një vijë horizontale të gjatë dhe dhjetë vija vertikale të shkurtra që e kryqëzojnë.
2. Shkruaj `TR` dhe shtyp {{key:Enter}}.
3. Shtyp butonin e mausit mbi vijën e gjatë, majtas nga vija e parë vertikale, dhe tërhiq përmes të dhjetave mbi vijën e gjatë.

Ndërsa tërheq, shtegu shfaqet si vijë me pika, dhe çdo pjesë që ka kaluar bëhet gri. Lëshoje: të dhjetë pjesët e sipërme priten në një hap. Shkruaj `U` dhe shtyp {{key:Enter}} për t'i kthyer të gjitha njëherësh.

:::tip
Mund të klikosh edhe dy pika bosh: vija midis tyre vepron si një shteg i tërhequr. Shkruaj [Gardh (F)] për të klikuar një seri pikash në vend të kësaj, pastaj shtyp {{key:Enter}}.
:::

:::touch
Tërhiq me gisht në të njëjtën mënyrë. Një prekje mbi një pjesë e pret atë.
:::

## Zgjat në vend të kësaj, me Shift

1. Vizato një vijë vertikale, dhe pesë vija horizontale të shkurtra në të majtë të saj që ndalen para saj.
2. Shkruaj `TR` dhe shtyp {{key:Enter}}.
3. Mbaj {{key:Shift}}. Rri me treguesin mbi një vijë të shkurtër: pjesa me të cilën do të rritej shfaqet gri dhe me vija.
4. Akoma duke mbajtur {{key:Shift}}, tërhiq poshtë përmes pesë vijave të shkurtra.

Të pesta tani zgjaten deri te vija vertikale. {{key:Shift}} funksionon ndryshe në {{cmd:EXTEND}} (`EX`): një klik zgjat, një klik me {{key:Shift}} pret. Zgjatja e zgjat skajin më të afërt me vendin ku klikon ose ku kalon shtegu.

## Pres brenda një dritareje

1. Shkruaj `TR` dhe shtyp {{key:Enter}}.
2. Shkruaj `C` dhe shtyp {{key:Enter}}.
3. Kliko dy cepa rreth pjesëve që do të heqësh.

Çdo pjesë që shtrihet të paktën pjesërisht brenda dritares priten.

Për të marrë një dritare vetëm duke tërhequr, pa shkruar `C`: {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Dragging to trim and extend}} › {{ui:A window}}. Atëherë shtypja mbi një vend bosh dhe tërheqja vizaton një kuti, dhe çdo pjesë që ajo prek priten (ose zgjaten, në {{cmd:EXTEND}}, ose me {{key:Shift}}). {{ui:A path}} (fillimi) e kthen shtegun me dorë të lirë. Rreshti i cilësimeve në fillim të TRIM tregon cili është aktiv.

## Zgjidh skajet prerëse (mënyra Standarde)

Ndonjëherë vetëm një vijë duhet të presë, si fytyra e një muri me shumë vija që e kryqëzojnë.

1. Shkruaj `TR` dhe shtyp {{key:Enter}}.
2. Shkruaj `O` ([Mënyra (O)]) dhe shtyp {{key:Enter}}, pastaj `S` ([Standarde (S)]) dhe shtyp {{key:Enter}}.
3. Te `Zgjidh skajet prerëse`, kliko vijat kufi (ose tërhiq një dritare), pastaj shtyp {{key:Enter}}. Shtypja e {{key:Enter}} pa asgjë të zgjedhur bën çdo objekt skaj.
4. Kliko ose tërhiq përmes pjesëve që do të hiqen.

Vetëm skajet e zgjedhura presin, dhe një objekt që asnjë skaj nuk e kryqëzon mbetet i paprekur. Mënyra mbahet deri sa mbyll faqen; shkruaj `O`, pastaj `Q` për t'u kthyer në mënyrën e shpejtë.

{{cmd:TRIMEXTENDMODE}} e vendos para se të nisësh, si variablë me të njëjtin emër në pjesë të tjera: `0` Standarde, `1` E shpejtë. `T` ([Skaje prerëse (T)]) zgjedh skaje të reja në çdo kohë; në {{cmd:EXTEND}} është `B` ([Skaje kufi (B)]).

## Skaje që do të arrinin

1. Shkruaj `TR` dhe shtyp {{key:Enter}}.
2. Shkruaj `E` ([Skaj (E)]) dhe shtyp {{key:Enter}}, pastaj `E` ([Zgjat (E)]) dhe shtyp {{key:Enter}}.

Tani një vijë ose hark prerës që ndalet shkurt llogaritet sikur të vazhdonte: një vijë e shkurtër pret aty ku do të kryqëzohej po të ishte më e gjatë. Shkruaj `E`, pastaj `N` ([Pa zgjatje (N)]), për të kthyer. Kjo është e njëjtë me EDGEMODE 1 dhe 0.

## Fshi pa u larguar

Shkruaj `R` ([Fshi (R)]) dhe shtyp {{key:Enter}}, zgjidh objektet për t'i fshirë, dhe shtyp {{key:Enter}}. TRIM vazhdon.

## Gabimet e zakonshme

- **Një vijë e tërë u zhduk.** Në mënyrën e shpejtë një objekt që asgjë nuk e kryqëzon fshihet. Shkruaj `U` për ta kthyer, ose kalo në mënyrën Standarde (`O`, `S`).
- **"Nuk ka asgjë për të prerë këtu: asnjë skaj i zgjedhur nuk e kryqëzon atë objekt."** Mënyra Standarde pret vetëm te skajet që zgjodhe. Shkruaj `T` për t'i zgjedhur përsëri.
- **"Nuk ka kufi në atë drejtim."** Zgjatja nuk gjeti asgjë përpara. Kliko më afër skajit që duhet të rritet, ose ndiz `E` ([Skaj, Zgjat (E)]) për kufij që ndalen shkurt.
- **Tërheqja vizatoi një lak në vend të kësaj.** Një tërheqje pret vetëm ndërsa TRIM ose EXTEND kërkon një objekt. Pa një komandë aktive, një tërheqje zgjedh (shih [Zgjedhja me lak](topic:lasso-selection)).
- **Vetëm vijat, harqet, rrethet dhe polivijat mund të priten.** Shpërbëj një bllok më parë për të prerë vijat e tij.
