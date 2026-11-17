---
title: Kontrollér opmålte punkter
summary: Læs de punkter et opmålingshold har målt, og sammenlign dem med tegningens punkter og blokke: inden for eller uden for en tolerance, ikke målt, ekstra, markeret i tegningen og skrevet som en CSV-rapport.
keywords: as built, as-built, asbuilt, opmåling, totalstation, udsætning, udstikning, punktfil, csv, txt, pnezd, penzd, xyz, tolerance, afvigelse, kontrol, sammenlign, exportpoints, layoutpunkter
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) er den anden halvdel af {{cmd:EXPORTPOINTS}}: du eksporterer tegningens punkter til marken, holdet udsætter dem og måler det der er bygget, og ASBUILT sammenligner deres fil med tegningen.

1. Skriv {{cmd:ASBUILT}} og vælg de samme punkter og blokke som du eksporterede (Enter tager alle POINT, ligesom EXPORTPOINTS gør).
2. **Par de opmålte punkter efter** **Number** (holdet beholdt dine punktnumre: angiv det første nummer du eksporterede fra) eller **Nearest** (de nummererede deres egne målinger: hvert designpunkt får det nærmeste).
3. Angiv filens enheder og koordinater, som du eksporterede dem (Tegning, Meter eller Fod; World eller UCS), og **tolerancen** i tegningens enheder.
4. Vælg holdets CSV- eller TXT-fil. CadCraft læser den ligesom CivilCraft gør: komma, tabulator, semikolon eller mellemrum, en overskriftsrække der navngiver kolonnerne, eller PNEZD efter antal kolonner.

Kommandolinjen siger hvor mange punkter der blev parret, hvor mange der er inden for tolerancen, uden for den, ikke målt og ekstra, og den største afstand. **Markér dem i tegningen?** Ja lægger dem på laget **AS-BUILT** som ét fortryd-trin: et punkt ved hver måling, dens nummer og afstand ved siden af, og en rød linje fra designpunktet til hver måling uden for tolerancen. En CSV-rapport downloades med alle punkter: design- og opmålte koordinater, forskellene i øst, nord og i højde, og resultatet.

Se også [Punkter til BIM-programmer](topic:points-for-bim).
