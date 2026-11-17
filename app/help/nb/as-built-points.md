---
title: Kontroller oppmålte punkter
summary: Les punktene et måleparti har målt, og sammenlign dem med tegningens punkter og blokker. Se om de er innenfor eller utenfor en toleranse, ikke målt eller ekstra. Merk dem i tegningen og skriv en CSV-rapport.
keywords: as built, as-built, asbuilt, oppmålt, oppmåling, totalstasjon, utsetting, stake out, punktfil, csv, txt, pnezd, penzd, xyz, toleranse, avvik, kontroll, sammenlign, exportpoints, utsettingspunkter
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) er den andre halvdelen av {{cmd:EXPORTPOINTS}}. Du eksporterer tegningens punkter til felten. Målepartiet setter dem ut og måler det som er bygget. ASBUILT sammenligner filen deres med tegningen.

1. Skriv {{cmd:ASBUILT}} og velg de samme punktene og blokkene du eksporterte. Enter tar alle POINT, slik EXPORTPOINTS gjør.
2. **Par de oppmålte punktene etter** **Nummer** (målepartiet beholdt punktnumrene dine: oppgi det første nummeret du eksporterte fra), eller **Nærmeste** (de nummererte sine egne målinger: hvert konstruksjonspunkt får det nærmeste).
3. Oppgi filens enheter og koordinater slik du eksporterte dem (Tegning, Meter eller Fot; Verden eller BKS), og **toleransen** i tegningsenheter.
4. Velg målepartiets CSV- eller TXT-fil. CadCraft leser den slik CivilCraft gjør: komma, tabulatorer, semikolon eller mellomrom, en overskriftsrad som navngir kolonnene, eller PNEZD etter antall kolonner.

Kommandolinjen sier hvor mange punkter som ble parret, hvor mange som er innenfor toleransen, utenfor den, ikke målt og ekstra, og den største avstanden. **Merke dem i tegningen?** Ja legger dem på laget **AS-BUILT** som ett steg å angre: et punkt ved hvert målepunkt, med nummeret og avstanden ved siden av, og en rød linje fra konstruksjonspunktet til hvert målepunkt utenfor toleransen. En CSV-rapport lastes ned med alle punktene: konstruksjons- og oppmålte koordinater, forskjellene øst, nord og i høyde, og resultatet.

Se også [Punkter for BIM-programmer](topic:points-for-bim).
