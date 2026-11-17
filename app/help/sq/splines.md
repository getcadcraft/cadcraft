---
title: Splines dhe polivijat: SPLINE, SPLINEDIT, PEDIT
summary: Vizato një kurbë të lëmuar përmes pikave ose nga një poligon kontrolli, përpuno përshtatjen dhe pikat e kontrollit të saj, dhe përpuno polivijat (bashko, mbyll, gjerësi, përshtat, spline, hiq kurbën) ose kthe një spline në polivijë.
keywords: spline, splinedit, spl, spe, pedit, pe, pika përshtatjeje, pika kontrolli, pesha, nurbs, përpunim polivijeje, bashko, kurbë e përshtatur, hiq kurbën, kthe në polivijë, saktësi, tangjente, kurbë, toleranca e përshtatjes
from: d31f72d8
---

## Çfarë do të bësh

Një kurbë përmes pesë pikash, pastaj e njëjta kurbë e përpunuar në tri mënyra, dhe një polivijë e ndërtuar nga tri vija.

## Vizato një spline përmes pikave

1. Shkruaj `SPL` dhe shtyp {{key:Enter}}.
2. Kliko ose shkruaj pikat që kurba duhet të kalojë: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Shtyp {{key:Enter}} pas të fundit.
3. {{ui:Tangjentja e fillimit}}: kliko një pikë nga e cila kurba duhet të largohet, ose shtyp {{key:Enter}} për ta lënë atë të vendosë. Bëj të njëjtën gjë për tangjenten e fundit.

Kurba kalon nga çdo pikë. Shkruaj `C` në vend të {{key:Enter}} për ta mbyllur (kurba kthehet te pika e parë). `[Zhbëj (U)]` heq pikën e fundit ndërsa vizatohet.

### Vizato nga një poligon kontrolli

Shkruaj `M` te kërkesa e parë, pastaj `[Kulmet e kontrollit (C)]` dhe një shkallë nga 1 në 5 (3 është e zakonshme). Tani pikat që zgjedh janë kulmet e një poligoni që e tërheq kurbën drejt tyre; kurba fillon te e para dhe mbaron te e fundit. Një kurbë e mbyllur mbështillet, pa kulm te bashkimi.

### Ktheje një polivije në spline

Te kërkesa e parë shkruaj `[Objekt (O)]` dhe zgjidh polivijat ose vijat. Ato bëhen spline përmes kulmeve të tyre; origjinalet largohen.

## Përpuno një spline

Zgjidhe dhe shkruaj `SPE` (ose shkruaj `SPE` dhe kliko mbi të). Dorezat tregojnë pikat e përshtatjes (ose pikat e kontrollit të një spline që nuk ka të tilla): tërhiq një për ta riformuar kurbën. Te kërkesa:

- **Të dhënat e përshtatjes** (spline i vizatuar përmes pikave): `A` shton një pikë përshtatjeje (kliko ku), `D` fshin një (kliko afër saj), `M` zhvendos një (kliko afër saj, pastaj kliko vendin e ri), `T` cakton tangjentet e fundit, `P` pastron pikat e përshtatjes, kështu që spline përpunohet nga pikat e kontrollit që nga ai moment.
- **Përpuno kulmin**: `A` shton një pikë kontrolli pa ndryshuar kurbën, `M` zhvendos një, `W` i jep një **peshë** (mbi 1 e tërheq kurbën më afër, nën 1 e lë të shkojë).
- **Hap** ose **Mbyll**, dhe **Kthe** (kurba shkon në drejtimin tjetër).
- **Konverto në polivijë** (`P`): spline bëhet polivijë; saktësia është sa segmente merr çdo hapësirë (10 është e zakonshme).
- **[Zhbëj (U)]** heq ndryshimin e fundit; **[Dil (X)]** përfundon.

{{ui:Vetitë}} shfaq shkallën e një spline-i, sa pika përshtatjeje dhe kontrolli ka, gjatësinë e tij, dhe të lejon ta hapësh ose mbyllësh.

## Përpuno një polivijë

Zgjidh një polivijë dhe shkruaj `PE`. Një vijë, hark ose spline që zgjedh i ofrohet së pari si polivijë për t'u kthyer (një spline kërkon saktësinë).

- **Mbyll** / **Hap** bashkon ose ndan skajet.
- **Bashko** shton vija, harqe dhe polivija, skajet e të cilave takohen me skajin e polivijës. `Fuzz distance` (distanca e tolerancës) është sa larg mund të jenë skajet dhe ende të bashkohen (0 do të thotë që duhet të takohen).
- **Gjerësi** i jep gjithë polivijës një gjerësi të vetme (0 e heq).
- **Përshtat** e zëvendëson polivijën me një kurbë të lëmuar që kalon nga kulmet e saj; **Spline** me një B-spline kubik që i ndjek (fillon dhe mbaron te kulmi i parë dhe i fundit dhe qëndron afër të tjerëve). Të dyja bëhen polivijë me segmente të shkurtra, dhe qoshet origjinale ruhen, kështu që **Hiq kurbën** i kthen ato.
- **Ltype gen** thotë nëse një lloj vije me pika vazhdon përgjatë gjithë polivijës ose fillon përsëri te çdo kulm.
- **Kthe** ndryshon rendin e kulmeve të saj. **Shumë** (`M` te kërkesa e parë) përpunon disa polivija me të njëjtat opsione.

Përpunimi i kulmeve të një polivije te {{ui:Vetitë}} ose me dorezat mbetet siç ishte: PEDIT nuk ka përpunues kulmesh.

## Në skedarë

DWG dhe DXF 2000 mbajnë një spline si spline: shkallën, pikat e kontrollit, nyjet, peshat, pikat e përshtatjes dhe tangjentet. Një spline që hap dhe nuk e ndryshon shkruhet përsëri saktësisht siç erdhi. DXF R12 nuk ka spline: ruhet si polivijë përgjatë kurbës, dhe historiku thotë sa.

Offset, trim, extend, fillet, break dhe join nuk funksionojnë mbi spline. {{cmd:EXPLODE}} një spline, ose {{cmd:PEDIT}} atë, për të marrë një polivijë që ato komanda e pranojnë.

## Gabimet e zakonshme

- **Kurba tejkalon mes pikave të afërta.** Një kurbë përmes pikash përkulet aty ku përkulen pikat. Përdor më pak pika, ose një poligon kontrolli.
- **"Ajo nuk është spline."** SPLINEDIT pranon vetëm spline; {{cmd:PEDIT}} përpunon polivijat.
- **Një spline i mbyllur me përshtatje ka formë pak të ndryshme në një program tjetër.** CadCraft e mbyll me një bashkim të vetëm të lëmuar te pika e parë; një program tjetër mund ta mbyllë me një kurbë periodike. Një spline i mbyllur me pika kontrolli është i njëjtë në të dy.
