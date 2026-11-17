---
title: Teisalda visandid teistesse detailimodelleerijatesse ja tagasi
summary: Kirjuta makro, mis koostab sinu joonise ühe seotud visandina detailimodelleerijas, ja ava seal eksporditud visand.
keywords: visand, makro, swb, vba, eksport, detailimodelleerija, globaalsed muutujad, võrrandid, seosed, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks ei ole saadaval kohas, kus CadCraft ehitatakse, seega ei ole kumbagi suunda SolidWorksis veel testitud. CadCraft'i kirjutatut kontrollitakse ainult struktuuri järgi. Enne kui sellele tugineda, kontrolli tulemust.
:::

## Saada joonis visandina

1. Seo ja mõõtmesta joonis (vt [Joonise sidumine](topic:constraints)).
2. Rühmas {{ui:Parameetriline}} ava {{ui:Veel}} ja vali {{ui:SolidWorksi makro (.swb)}}, või kirjuta {{cmd:SWBOUT}}.

   Laaditakse alla fail, mis on nimetatud joonise järgi ja lõpeb `.swb`-ga.
3. SolidWorksis vali **Tools > Macro > Run** ja vali see fail.

Makro teeb uue detaili sinu vaikedetailimallist, avab visandi Front Plane'il ja joonistab sinna mudeli jooned, ringid, kaared, punktid ja murdjooned, koos:

- sinu piirangud visandi seostena,
- sinu mõõtmepiirangud mõõtmetena samade nimedega (`d1@Sketch1`),
- sinu enda parameetrid globaalsete muutujatena,
- iga avaldis võrrandina.

Detail kasutab joonise pikkusühikut. Tekst, plokid, viirutused, mõõtmed ja lehed ei kuulu visandisse; ajalugu loetleb, mis jäeti välja. Avaldised, millel pole seal võrrandikuju (`if`, `min`, `max`, `round`, `%` ja mõned muud), kirjutatakse praeguse väärtusena ning ajalugu ütleb, millised need on. Kõik, mida makro ei suuda luua, kirjutatakse makro kõrvale asuvasse logifaili ning lõpus on kokkuvõttev teade.

## Ava visand detailist

1. SolidWorksis käivita detailil CadCraft'i eksportmakro (laadi see alla PartCraft-rakendusest: File > Export > Export macro to bring parts back). See kirjutab detaili kõrvale faili `.json` vormingus `cadcraft-sw-export`.
2. CadCraftis vali {{ui:Ava}} ja vali see `.json`-fail.
3. Kui detailis on mitu visandit, vali üks.

Visand saab joonise millimeetrites: selle jooned, kaared, ringid ja punktid, seosed piirangutena, mõõtmed mõõtmepiirangutena nende algsete nimedega (`D1`, `D2` …), globaalsed muutujad parameetritena ja mõõtmete võrrandid nende avaldistena. Ajalugu loetleb, mis ei kandunud üle, näiteks seosed, mida CadCraftil ei ole. Visandi asukoht detailis ei jää alles: see joonistatakse lamedalt, nii nagu see oma tasapinnal paistab.
