---
title: Preverjanje točk dejanskega stanja
summary: Preberite točke, ki jih je izmerila geodetska ekipa, in jih primerjajte s točkami in bloki risbe: znotraj ali zunaj tolerance, neizmerjene, odvečne – označene v risbi in zapisane kot poročilo CSV.
keywords: dejansko stanje, as built, as-built, asbuilt, geodetska izmera, tahimeter, zakoličba, datoteka točk, csv, txt, pnezd, penzd, xyz, toleranca, odstopanje, preverjanje, primerjava, exportpoints, točke postavitve
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) je drugi del {{cmd:EXPORTPOINTS}}: točke risbe izvozite za teren, ekipa jih zakoliči in izmeri, kar je bilo zgrajeno, ASBUILT pa primerja njihovo datoteko z risbo.

1. Vnesite {{cmd:ASBUILT}} in izberite iste točke in bloke, ki ste jih izvozili (Enter vzame vse POINT, kot EXPORTPOINTS).
2. **Dejanske točke spojite** z možnostjo **Številka** (ekipa je ohranila vaše številke točk: navedite prvo številko, od katere ste izvozili) ali **Najbližja** (sami so oštevilčili svoje meritve: vsaka projektna točka vzame najbližjo).
3. Navedite enote in koordinate datoteke, kot ste jih izvozili (Risba, Metri ali Čevlji; Svet ali UCS), in **toleranco** v enotah risbe.
4. Izberite datoteko CSV ali TXT, ki jo je dala ekipa. CadCraft jo bere tako kot CivilCraft: vejice, tabulatorji, podpičja ali presledki, vrstica z imeni stolpcev ali PNEZD po številu stolpcev.

Ukazna vrstica pove, koliko točk je bilo sparjenih, koliko jih je znotraj tolerance, zunaj nje, neizmerjenih in odvečnih, ter največjo razdaljo. **Označim jih v risbi?** Odgovor **Da (Y)** jih postavi na sloj **AS-BUILT** kot en korak razveljavitve: točka pri vsaki meritvi, njena številka in razdalja ob njej ter rdeča črta od projektne točke do vsake meritve zunaj tolerance. Poročilo CSV se prenese z vsako točko: projektne in dejanske koordinate, razlike vzhod, sever in višina ter rezultat.

Glejte tudi [Točke za programe BIM](topic:points-for-bim).
