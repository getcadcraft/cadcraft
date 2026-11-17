---
title: Nihuta, lõika, pikenda, ümarda ja faasi seinu
summary: Muuda üksikud jooned topeltseinaks nihutamisega, puhasta nurgad ümardamisega ning lõika ja pikenda jooni lõikamise ja pikendamisega.
keywords: nihuta, lõika, pikenda, ümarda, faas, kaldfaas, katkesta, breakatpoint, muuda pikkust, seinad, nurk, lõika, pikkus, paralleelne, raadius, puhastus
from: c6c5cbd0
---

## Mida sa valmistad

Väike ruum 200 paksuste seintega: sisemine külg joonistatakse, välimine külg nihutatakse, nurgad puhastatakse ja üks sein lõigatakse uksavaus läbi.

## Joonista sisemine külg

1. Sisesta `L` ja vajuta {{key:Enter}}.
2. Sisesta `0,0` ja vajuta {{key:Enter}}.
3. Sisesta `@5000,0` ja vajuta {{key:Enter}}.
4. Sisesta `@0,4000` ja vajuta {{key:Enter}}.
5. Sisesta `@-5000,0` ja vajuta {{key:Enter}}.
6. Sisesta `C` ja vajuta {{key:Enter}}.
7. Klõpsa {{ui:Ulatus}}.

Sul on neli eraldi joont. (Suletud murdjoon nihutataks ühe korraga; eraldi jooned näitavad, kuidas {{cmd:FILLET}} nurki puhastab.)

## Nihuta välimine külg

1. Sisesta `O` ja vajuta {{key:Enter}}. Küsimus on `Specify offset distance [Through] <Through>:`.
2. Sisesta `200` ja vajuta {{key:Enter}}.
3. Kohal `Select object to offset` klõpsa alumisel joonel.
4. Kohal `Specify point on side to offset` klõpsa kuhu tahes selle alla. Ilmub paralleelne joon 200 allapoole.
5. Klõpsa paremal joonel, seejärel klõpsa selle paremale.
6. Klõpsa ülemisel joonel, seejärel klõpsa selle kohal.
7. Klõpsa vasakul joonel, seejärel klõpsa selle vasakule.
8. Käsu lõpetamiseks vajuta {{key:Enter}}.

Peaksid nägema neli välimist joont, igaüks sama pikk kui sisemine joon, nii et välimised nurgad ei kohtu.

:::tip
Kauguse küsimuse juures vajuta {{key:Enter}}, et kasutada uuesti viimast kaugust. Sisesta `T` valiku „Läbi“ jaoks: siis läheb iga koopia läbi punkti, mida klõpsad, olenemata kaugusest.
:::

{{cmd:OFFSET}} töötab joontel, kaartel, ringidel ja murdjoontel. Suletud murdjoone nihutamine nihutab kogu kontuuri koos nurkadega.

## Puhasta välimised nurgad ümardusega

{{cmd:FILLET}} ühendab kaks joont nurgas: see lõikab või pikendab mõlemat, et need kohtuksid. Raadiusega 0 on nurk ruudukujuline.

1. Sisesta `F` ja vajuta {{key:Enter}}. Küsimus on `Select first line [Radius]:`.
2. Kui viimane ümardus, mida tegid, kasutas raadiust, sisesta `R`, vajuta {{key:Enter}}, sisesta `0` ja vajuta {{key:Enter}}.
3. Klõpsa välimisel alumisel joonel selle parema otsa lähedal.
4. Kohal `Select second line` klõpsa välimisel parempoolsel joonel selle alumise otsa lähedal.

Kaks joont kohtuvad nüüd terava nurgas ja käsk lõpeb.

5. Vajuta {{key:Enter}}, et korrata {{cmd:FILLET}}, ja tee järgmine nurk.
6. Korda, kuni kõik neli välimist nurka kohtuvad.

Klõpsa igal joonel osal, mida soovid **alles jätta**. Raadiusega üle 0 lisab ümardus joonte vahele hoopis kaare.

:::tip
Esimeses küsimuses sisesta `M`, et teha kõik neli nurka korraga, või joonista välimine külg ühe suletud murdjoonena ja sisesta `P`: iga nurk tehakse korraga. Hoia {{key:Shift}} all, kui klõpsad teisel joonel, et saada terav nurk ilma raadiust muutmata.
:::

## Faasi nurk

{{cmd:CHAMFER}} lõikab nurga ära sirge joonega.

1. Sisesta `CHA` ja vajuta {{key:Enter}}.
2. Sisesta `D` ja vajuta {{key:Enter}}. Sisesta esimese kauguse jaoks `300` ja vajuta {{key:Enter}}, seejärel vajuta {{key:Enter}}, et kasutada 300 ka teise jaoks.
3. Klõpsa sisemisel ülemisel joonel selle vasaku otsa lähedal, seejärel sisemisel vasakul joonel selle ülemise otsa lähedal.

Nurk lõigatakse iga joone järgi 300 võrra tagasi ja faasjoon ühendab need. Sisesta `A` `D` asemel, et anda esimesel joonel pikkus ja nurk.

## Lõika uksavaus käsuga Lõika

Joonista kõigepealt kaks uksepõsket alumise seina üle, seejärel lõika nende vahel olevad seinajooned.

1. Sisesta `L` ja vajuta {{key:Enter}}.
2. Sisesta `1000,200` ja vajuta {{key:Enter}}.
3. Sisesta `@0,-600` ja vajuta {{key:Enter}}, seejärel vajuta {{key:Enter}} uuesti.
4. Vajuta {{key:Enter}}, et korrata {{cmd:LINE}}.
5. Sisesta `1900,200` ja vajuta {{key:Enter}}.
6. Sisesta `@0,-600` ja vajuta {{key:Enter}}, seejärel vajuta {{key:Enter}} uuesti.

Nüüd on sul kaks lühikest joont, mis ristuvad alumise seinaga 900 kaugusel teineteisest.

7. Sisesta `TR` ja vajuta {{key:Enter}}. Ajalugu ütleb `Current settings: Quick mode, edges: No extend`.
8. Klõpsa sisemisel alumisel joonel kahe uksepõse vahel. See tükk kaob. (Hoia enne kursor sellel: tükk, mis kaob, muutub halliks ja katkendlikuks.)
9. Klõpsa välimisel alumisel joonel kahe uksepõse vahel. Ka see tükk kaob.
10. Klõpsa iga uksepõse osal, mis ulatub seinast üle, ja osal sellest all.
11. Käsu lõpetamiseks vajuta {{key:Enter}}.

Peaksid nägema alumises seinas 900 avausust, uksepõsed sulgevad seina otsad.

Kiirrežiimis (vaikimisi) ei küsi {{cmd:TRIM}} enne lõikeservi: iga nähtav objekt on lõikeserv. Vali tükk, mis soovid kadunud, või lohista tee mitme tüki läbi, et need kõik korraga lõigata. Sisesta `U` ja vajuta {{key:Enter}}, et tagasi võtta viimane valik või lohistus, lahkumata käsust. Piirjoon, ristaken, valitud servad ja {{key:Shift}} pikendamiseks on jaotises [Lõika ja pikenda](topic:trim-and-extend).

## Pikenda joon kohtuma teisega

{{cmd:EXTEND}} pikendab joont, kaart või murdjoone otsa, kuni see kohtub järgmise objektiga selles suunas.

1. Sisesta `L` ja vajuta {{key:Enter}}.
2. Sisesta `1000,2000` ja vajuta {{key:Enter}}.
3. Sisesta `@2000,0` ja vajuta {{key:Enter}}, seejärel vajuta {{key:Enter}} uuesti. Joon peatub 2000 paremast seinast lühema kohta.
4. Sisesta `EX` ja vajuta {{key:Enter}}.
5. Klõpsa uuel joonel selle parema otsa lähedal.
6. Käsu lõpetamiseks vajuta {{key:Enter}}.

Joon ulatub nüüd parema seina sisemise pinnani. Iga nähtav objekt on piir; vali selle otsa lähedal, mis peaks kasvama. Käsus {{cmd:TRIM}} teeb {{key:Shift}}+klõps sama.

## Katkesta ja muuda pikkust

{{cmd:BREAK}} (`BR` või {{ui:Muuda}} › {{ui:Veel}} › {{ui:Katkesta}}) lõikab vahe ilma lõikeservata: klõpsa objektil, kust vahe algab (see klõps on esimene punkt), seejärel klõpsa kohal, kus see lõpeb. Ringil läheb vastupäeva esimesest punktist teiseni jääv osa. Teise küsimuse juures `F` lubab anda esimese punkti uuesti ja {{cmd:BREAKATPOINT}} jagab objekti kaheks ühes punktis ilma vaheta.

{{cmd:LENGTHEN}} (`LEN`) muudab pikkust ühes otsas:

1. Sisesta `LEN` ja vajuta {{key:Enter}}. Klõpsa joonel, et näha selle praegust pikkust; küsimus küsib uuesti.
2. Vali viis: `DE` (Delta: lisatav kogus, negatiivne võtab ära; `A` kaare nurga jaoks), `P` (Percent: 50 poolitab selle), `T` (Total: pikkus, mis peaks olema) või `DY` (Dynamic: lohista otsa).
3. Klõpsa igal objektil otsa lähedal, mis peaks liikuma. `U` võtab viimase tagasi; {{key:Enter}} lõpetab.

Jooni, kaari ja avatud murdjooni (nende otsalõiku) saab pikendada.

## Levinud vead

- **Terve joon kadus.** Keegi ei ristunud sellega, seega kustutas kiirrežiim selle. Sisesta `U`, et see tagasi tuua; kontrolli, et lõikejoon tõesti ristub sellega (suumi sisse) ja et see pole kihil, mis on väljas.
- **„Selles suunas pole piiri.“** Pikenda ei leidnud, mille sisse joosta. Vali lähemal otsale, mis peaks kasvama.
- **„Raadius on liiga suur.“** Kaar läheks ühe joone otsast üle. Kasuta väiksemat raadiust.
- **„Avatud murdjoone tagasi lõigata saab ainult esimest või viimast lõiku.“** Vali murdjoone kaks kõrvuti asetsevat lõiku või sisesta `P`, et ümardada kõik selle nurgad.
- **Nihutus läks vales suunas.** Pool on see, kuhu klõpsad pärast objekti valimist. Võta tagasi {{key:Mod+Z}} ja klõpsa teisel pool.
- **„Nii kaugele ei saa nihutada.“** Nihutus pööraks kaare, ringi või murdjoone pahupidi. Kasuta väiksemat kaugust.
