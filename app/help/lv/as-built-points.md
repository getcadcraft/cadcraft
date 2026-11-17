---
title: Pārbaudīt izpildmērījuma punktus
summary: Nolasiet punktus, ko mērnieku brigāde izmērīja, un salīdziniet tos ar rasējuma punktiem un blokiem: tolerances robežās vai ārpus tām, nenomērīts, papildu — atzīmēts rasējumā un saglabāts kā CSV atskaite.
keywords: izpildmērījums, as built, as-built, asbuilt, mērījums, kopējā stacija, nospraušana, punktu fails, csv, txt, pnezd, penzd, xyz, tolerance, novirze, pārbaude, salīdzināt, exportpoints, izkārtojuma punkti
from: f7c35208
---

{{cmd:ASBUILT}} (aizstājvārds ASB) ir otra puse {{cmd:EXPORTPOINTS}}: jūs eksportējat rasējuma punktus lauka darbam, brigāde tos nospraudīs un izmērīs, ko uzbūvēja, un ASBUILT salīdzina viņu failu ar rasējumu.

1. Ierakstiet {{cmd:ASBUILT}} un atlasiet tos pašus punktus un blokus, ko eksportējāt (Enter ņem katru POINT, kā dara EXPORTPOINTS).
2. **Saistīt izpildmērījuma punktus pēc** **Numura** (brigāde saglabāja jūsu punktu numurus: ievadiet pirmo numuru, no kura eksportējāt) vai **Tuvākā** (viņi numurēja savus mērījumus paši: katrs projektētais punkts saņem tuvāko).
3. Ievadiet faila mērvienības un koordinātas tādas, kādas eksportējāt (Rasējums, Metri vai Pēdas; Pasaule vai UCS), un **toleranci** rasējuma vienībās.
4. Izvēlieties brigādes CSV vai TXT failu. CadCraft to nolasa tāpat kā CivilCraft: komatus, tabulācijas, semikolus vai atstarpes, galvenes rindu ar kolonnu nosaukumiem vai PNEZD pēc kolonnu skaita.

Komandrindā parādās, cik punktu savienoti pa pāriem, cik ir tolerances robežās, ārpus tām, nenomērīti un papildu, kā arī lielākais attālums. **Atzīmēt tos rasējumā?** Jā ievieto tos slānī **AS-BUILT** kā vienu atsaukšanas soli: punkts katrā mērījumā, tā numurs un attālums blakus, un sarkana līnija no projektētā punkta līdz katram mērījumam ārpus tolerances. CSV atskaite lejupielādējas ar katru punktu: projektētās un izpildītās koordinātas, starpības pa austrumiem, ziemeļiem un augstumā, un rezultāts.

Skatīt arī [Punkti BIM programmām](topic:points-for-bim).
