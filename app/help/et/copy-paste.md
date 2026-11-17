---
title: Kopeerimine, kleepimine ja dubleerimine
summary: Kopeeri objektid CadCraft'i lõikelauale, kleebi need sinna, kuhu klõpsad, või kohale, dubleeri hiirega ja too töö teisest joonisest või vahekaardilt.
keywords: kopeeri, lõika, kleebi, kleebi kohale, dubleeri, lõikelaud, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, joonistuste vahel, teine vahekaart, baaspunkt
from: 4b9f29d3
---

## Mida sa õpid

Kuidas kopeerida objekte lõikelauale, kleepida need sinna, kuhu klõpsad, kleepida need nende enda koordinaatidesse, dubleerida need hiirega, lõigata need ja viia teise joonistusse. Kõik see on ka tööriistariba grupis {{ui:Redigeeri}}: {{ui:Kopeeri}}, {{ui:Kleebi}} ja {{ui:Veel}} menüü.

## Kopeeri ja kleebi sinna, kuhu klõpsad

1. Vali objektid: klõpsa neid või lohista aken.
2. Vajuta {{key:Mod+C}} või klõpsa grupis {{ui:Redigeeri}} nuppu {{ui:Kopeeri}}. Käsurida ütleb, mitu objekti kopeeriti. Need jäävad valituks.
3. Vajuta {{key:Mod+V}} või klõpsa {{ui:Kleebi}}. Koopia ilmub kursorile, rippudes kopeeritud objektide vasakust alumisest nurgast.
4. Klõpsa koht, kuhu see nurk läheb, või tipi punkt, näiteks `2000,500`, ja vajuta {{key:Enter}}. Objektihaakumised ja Ortho töötavad tavapäraselt.

Kleebitud objektid on valitud, nii et saad need kohe teisaldada või muuta. Üks {{key:Mod+Z}} võtab kogu kleepimise tagasi.

:::tip
Kas tahad, et koopia ripuks valitud punktist, näiteks seina nurgast? Tipi `COPYBASE`, klõpsa baaspunkt, vali objektid ja vajuta {{key:Enter}}. Kleepimine paigutab siis selle punkti sinna, kuhu klõpsad. Et iga koopia ripuks keskpunktist, mitte vasakust alumisest nurgast, muuda {{ui:Kleebimispunkt}} sätetes [CadCraft-i sätted](topic:settings).
:::

## Kleebi kohale

Vajuta {{key:Mod+Shift+V}} või vali menüüst {{ui:Veel}} {{ui:Kleebi kohale}}. Koopia läheb täpselt samadesse koordinaatidesse, kust see kopeeriti, ilma klõpsuta. Kasuta seda objektide viimiseks teise joonistusse samasse kohta või lehelt teisele lehele.

## Dubleeri ja teisalda

1. Vali objektid.
2. Vajuta {{key:Mod+D}} või vali menüüst {{ui:Veel}} {{ui:Dubleeri ja teisalda}}.
3. Koopia on originaali peal ja liigub koos osutiga. Klõpsa koht, kuhu see läheb. Saad ka tipida nihke, näiteks `@0,-600`, või kauguse kursori suunas.

{{key:Esc}} enne klõpsu ei jäta midagi maha. Dublikaat on üks tagasivõtmise samm ega puuduta lõikelauda.

## Lõika

Vajuta {{key:Mod+X}} või vali menüüst {{ui:Veel}} {{ui:Lõika}}. Objektid lähevad lõikelauale ja kustutatakse joonisest ühe tagasivõtmise sammuga. Kleebi need tagasi {{key:Mod+V}} või {{key:Mod+Shift+V}} abil.

## Joonistuste ja vahekaartide vahel

Lõikelaud säilitab oma koopia, kui avad teise joonistuse, ja seda jagavad kõik CadCraft'i vahekaardid selles brauseris. Kopeeri ühes vahekaardis, seejärel vajuta {{key:Mod+V}} teises.

- Blokid, mida objektid kasutavad, tulevad kaasa. Kui joonistusel, kuhu kleebid, on juba sama nimega plokk, kasutatakse selle enda definitsiooni, nagu teeb AutoCAD.
- Kihid, mida objektid kasutavad, lisatakse oma värvi ja sätetega.
- Koopiat ei skaleerita ümber, kui kahel joonistusel on erinevad ühikud: CadCraft ütleb sellest ning pärast saad kasutada käsku {{cmd:SCALE}}.
- Vaateaknad jäävad oma lehele; need jäetakse koopiast välja.

:::note
Lõikelaud on CadCraft'i enda oma. CadCraft'i objekte ei saa kleepida teise programmi ega teisest programmist CadCraft'i: salvesta selle asemel DWG või DXF-ina. Väga suur koopia võib olla liiga suur, et seda vahekaartide vahel jagada; siis ütleb käsurida, et ainult see vahekaart saab selle kleepida.
:::

## Tavalised vead

- **{{key:Mod+V}} kleepis teksti käsuritta.** Sa olid sinna midagi tippinud, seega klahvid töötasid tekstil. Tühjenda vajutades {{key:Esc}}, seejärel vajuta {{key:Mod+V}} uuesti.
- **Midagi ei juhtunud ja olekuriba ütleb, et lõpeta praegune käsk.** Töötab teine käsk. Vajuta esmalt {{key:Esc}}.
- **Kleepimine maandus kaugele.** See ripub kopeeritu vasakust alumisest nurgast, mis võib olla kaugel asuv objekt, mille valisid kogemata. Kasuta {{ui:Kleebi kohale}} või kopeeri käsuga `COPYBASE`.
- **„Midagi ei kleebitud“ koos põhjusega.** See, mida teine vahekaart lõikelauale jättis, ei saanud lugeda (see oli kahjustatud või muudetud käsitsi). Kopeeri objektid uuesti.

Kõigi klahvide loend on jaotises [Klaviatuur ja hiir](topic:keyboard) ning iga viip jaotises [Käskude viide](topic:commands#clipboard).
