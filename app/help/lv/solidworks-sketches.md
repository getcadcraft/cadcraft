---
title: Pārvietojiet skices uz citiem detaļu modelētājiem un no tiem
summary: Uzrakstiet makro, kas no jūsu rasējuma atjauno vienu ierobežotu skici detaļu modelētājā, un atveriet tur eksportētu skici.
keywords: skice, makro, swb, vba, eksports, detaļu modelētājs, globālie mainīgie, vienādojumi, sakarības, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks nav pieejams vietā, kur CadCraft tiek veidots, tāpēc neviens virziens vēl nav pārbaudīts SolidWorks. Tas, ko raksta CadCraft, tiek pārbaudīts tikai struktūras ziņā. Pārbaudiet rezultātu, pirms uz to paļaujaties.
:::

## Nosūtiet rasējumu kā skici

1. Ierobežojiet un izmēriet rasējumu (skatiet [Ierobežot rasējumu](topic:constraints)).
2. Grupā {{ui:Parametriskais}} atveriet {{ui:Vairāk}} un izvēlieties {{ui:Makro SolidWorks (.swb)}}, vai ierakstiet {{cmd:SWBOUT}}.

   Lejupielādējas fails ar nosaukumu pēc rasējuma, kas beidzas ar `.swb`.
3. SolidWorks izvēlieties **Tools > Macro > Run** un norādiet šo failu.

Makro izveido jaunu detaļu no jūsu noklusējuma detaļas šablona, atver skici plaknē Front Plane un tajā zīmē modeļa līnijas, riņķus, lokus, punktus un polilīnijas ar:

- jūsu ierobežojumiem kā skices sakarībām,
- jūsu izmēru ierobežojumiem kā izmēriem ar tādiem pašiem nosaukumiem (`d1@Sketch1`),
- jūsu pašiem parametriem kā globālajiem mainīgajiem,
- katru izteiksmi kā vienādojumu.

Detaļa izmanto rasējuma garuma vienību. Teksts, bloki, svītrojumi, izmēri un lapas nav daļa no skices; vēsture uzskaita, kas tika izlaists. Izteiksmes, kurām tur nav vienādojuma formas (`if`, `min`, `max`, `round`, `%` un dažas citas), tiek rakstītas kā to pašreizējā vērtība, un vēsture norāda, kuras. Viss, ko makro nevar izveidot, tiek ierakstīts žurnālfailā blakus makro, un beigās parādās kopsavilkuma ziņojums.

## Atveriet skici no detaļas

1. SolidWorks palaidiet CadCraft eksporta makro (lejupielādējiet to lietotnē PartCraft: Fails > Eksportēt > Eksportēt makro, lai atgrieztu detaļas) uz detaļas. Tas blakus detaļai uzraksta `.json` failu `cadcraft-sw-export` formātā.
2. CadCraft izvēlieties {{ui:Atvērt}} un norādiet šo `.json` failu.
3. Ja detaļai ir vairākas skices, izvēlieties vienu.

Skice kļūst par rasējumu milimetros: tās līnijas, loki, riņķi un punkti, tās sakarības kā ierobežojumi, tās izmēru ierobežojumi ar saglabātiem nosaukumiem (`D1`, `D2` …), tās globālie mainīgie kā parametri un vienādojumi pie tās izmēriem kā to izteiksmes. Vēsture uzskaita, kas nav pārnests, piemēram, sakarības, kādu CadCraft nav. Vieta, kur skice atrodas detaļā, netiek saglabāta: tā tiek zīmēta plakanā veidā, kā redzams tās plaknē.
