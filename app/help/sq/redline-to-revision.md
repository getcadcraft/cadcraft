---
title: Kthe një shënim në një rishikim
summary: Lexo paketën redline që shkruan MarkupCraft, prano ose refuzo çdo ndryshim, vendos një re rishikimi dhe një regjistër rishikimi mbi ato të pranuara, dhe ruaj skedarin e përgjigjeve që MarkupCraft e lexon përsëri.
keywords: redline, markup, rishikim, re rishikimi, regjistri i rishikimit, prano, refuzo, markupcraft, shqyrtim, paketë redline, përgjigje, REDLINE
from: cdb3fafe
---

Një shqyrtues shënon një grup planesh në MarkupCraft dhe të dërgon një **paketë redline**, një skedar që mbaron me `.redline.json`. Këtu e kalon ndryshim pas ndryshimi, dhe ato të pranuara bëhen re rishikimi mbi vizatim.

## Kalo nëpër ndryshime

Shkruaj {{cmd:REDLINE}} (`RDL`) dhe zgjidh paketën. Zgjidh:

- {{ui:Listë}}: çdo ndryshim me numrin e tij, gjendjen, fletën, llojin, kush e kërkoi dhe çfarë shkroi.
- {{ui:Prano}}, {{ui:Refuzo}}, {{ui:U krye}}: shkruaj numrat (`1,3-5`, ose `All`) dhe një shënim opsional për skedarin e përgjigjeve. {{ui:Rihap}} i kthen ndryshimet në të hapura.
- {{ui:Kornizë}}: pjesa e vizatimit që tregon fleta e shënuar. Kliko dy cepa; shtyp {{key:Enter}} për të gjithë vizatimin. Ndryshimet vendosen sipas vendit ku ishin në fletë; kjo është ajo që i rreshton.
- {{ui:Zbato}}: vizaton një re rishikimi (shtresa `REV-CLOUD`, me shkronjën e rishikimit) rreth çdo ndryshimi të pranuar ose të kryer, dhe një regjistër rishikimi, një tabelë e rreshtuar e asaj që u pranua me shënimet e tua (shtresa `REV-LOG`), në të djathtë të vizatimit. Një hap i vetëm zhbërjeje.
- {{ui:Ruaj}}: shkruan `<project>-<revision>.redline-answers.json`. Hape në MarkupCraft dhe shënimet mbyllen: Pranuar, Refuzuar ose Kryer, me shënimet e tua si koment.

## Çfarë duhet ditur

Ajo që shkroi shqyrtuesi shfaqet siç është shkruar. CadCraft nuk ndjek kurrë udhëzime që gjen në një paketë; vetëm ua tregon ty.

Refuzimet dhe ndryshimet e hapura nuk shtojnë asgjë në vizatim. Paketa lexohet në kompjuterin tënd; asgjë nuk ngarkohet.

Nëse asistenti yt është i lidhur, mund të lexojë një paketë, të regjistrojë vendimet dhe t'i zbatojë me mjetet `redline_read`, `redline_decide`, `redline_apply` dhe `redline_answers`; vizatimi ndryshon në një hap zhbërjeje, "Asistenti: Redline në rishikim".
