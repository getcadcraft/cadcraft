---
title: Athuga mælingarpunkta eins og byggt var
summary: Lestu punktana sem mælingaráhöfn mældi og berðu þá saman við punkta og blokkir teikningarinnar: innan eða utan vikmarka, ómældir, umframpunktar — merktir á teikningunni og skrifaðir sem CSV-skýrsla.
keywords: eins og byggt var, as-built, asbuilt, mæling, heildarstöð, útsetning, setja út, punktaskrá, csv, txt, pnezd, penzd, xyz, vikmörk, frávik, athuga, bera saman, exportpoints, útsetningarpunktar
from: f7c35208
---

{{cmd:ASBUILT}} (samheiti ASB) er hinn helmingur {{cmd:EXPORTPOINTS}}: þú flytur út punkta teikningarinnar fyrir vettvanginn, áhöfnin setur þá út og mælir það sem var byggt, og ASBUILT ber skrá þeirra saman við teikninguna.

1. Skrifaðu {{cmd:ASBUILT}} og veldu sömu punkta og blokkir og þú fluttir út (Enter tekur alla POINT, eins og EXPORTPOINTS gerir).
2. Paraðu punktana eins og byggt var eftir **Númer** (áhöfnin hélt punktanúmerunum þínum: gefðu upp fyrsta númerið sem þú fluttir út frá) eða **Næsti** (þeir númeruðu sín eigin mælingarskot: hver hönnunarpunktur fær þann næsta).
3. Gefðu upp einingar skráarinnar og hnitin eins og þú fluttir þau út (Teikning, Metrar eða Fet; Heimur eða UCS), og **vikmörkin** í einingum teikningarinnar.
4. Veldu CSV- eða TXT-skrá áhafnarinnar. CadCraft les hana eins og CivilCraft gerir: kommur, tabbar, semíkommur eða bil, hausröð sem nefnir dálkana sína, eða PNEZD eftir dálkafjölda.

Skipanalínan segir hversu mörgum punktum var parað, hversu margir eru innan vikmarka, utan þeirra, ómældir og umframpunktar, og stærsta fjarlægð. **Merkja þá á teikningunni?** Já setur þá á lagið **AS-BUILT** sem eitt skref í afturköllun: punkt við hvert skot, númer hans og fjarlægð við hlið hans, og rauð lína frá hönnunarpunktinum að hverju skoti utan vikmarka. CSV-skýrsla sækist með öllum punktum: hönnunar- og eins-byggð hnit, mismunurinn í austur, norður og hæð, og niðurstaðan.

Sjá einnig [Punktar fyrir BIM-forrit](topic:points-for-bim).
