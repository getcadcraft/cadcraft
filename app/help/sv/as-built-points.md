---
title: Kontrollera uppmätta punkter
summary: Läs de punkter en mätgrupp mätt in och jämför dem med ritningens punkter och block: inom eller utanför en tolerans, ej uppmätta, extra. Markeras i ritningen och skrivs som en CSV-rapport.
keywords: as built, as-built, asbuilt, uppmätt, mätning, totalstation, utsättning, sätta ut, punktfil, csv, txt, pnezd, penzd, xyz, tolerans, avvikelse, kontrollera, jämför, exportpoints, utsättningspunkter
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) är den andra halvan av {{cmd:EXPORTPOINTS}}: du exporterar ritningens punkter till fältet, mätgruppen sätter ut dem och mäter vad som byggts. ASBUILT jämför sedan deras fil med ritningen.

1. Skriv {{cmd:ASBUILT}} och markera samma punkter och block som du exporterade. Enter tar alla POINT, som EXPORTPOINTS gör.
2. **Para ihop de uppmätta punkterna efter** **Nummer** (mätgruppen behöll dina punktnummer: ange det första numret du exporterade från) eller **Närmaste** (de numrerade sina egna skott: varje konstruktionspunkt tar den närmaste).
3. Ange filens enheter och koordinater som du exporterade dem (Ritning, Meter eller Fot; Värld eller UCS), och **toleransen** i ritningsenheter.
4. Välj mätgruppens CSV- eller TXT-fil. CadCraft läser den på samma sätt som CivilCraft: kommatecken, tabbar, semikolon eller mellanslag, en rubrikrad som namnger kolumnerna, eller PNEZD efter kolumnantal.

Kommandoraden säger hur många punkter som parats, hur många som ligger inom toleransen, utanför den, ej uppmätta och extra, samt det största avståndet. **Markera dem i ritningen?** Ja lägger dem på lagret **AS-BUILT** som ett enda ångra-steg: en punkt vid varje skott, dess nummer och avstånd bredvid, och en röd linje från konstruktionspunkten till varje skott utanför toleransen. En CSV-rapport laddas ner med varje punkt: konstruktions- och uppmätta koordinater, skillnaderna öst, nord och i höjd, samt resultatet.

Se även [Punkter för BIM-program](topic:points-for-bim).
