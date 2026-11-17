---
title: "Politikat e parazgjedhura: cakto me çfarë fillon një vizatim"
summary: Thuaj një herë me cilat njësi, format gjatësie, saktësi, lartësi teksti dhe letër fletësh nis një vizatim i ri, për punë metrike dhe imperiale, dhe ndaj politikat me gjithë zyrën si një skedar i vogël.
keywords: parazgjedhje, politikë, politika, standard zyre, parazgjedhjet e zyrës, shabllon, vizatim i ri, njësi, insunits, format gjatësie, arkitekturore, saktësi, luprec, lartësi teksti, letra e fletës, a1, ndaj, eksporto, importo, json
from: 7b80fd13
---

## Çfarë do të bëni

I thoni CadCraft-it me çfarë duhet të nisë një vizatim i ri, që askush në zyrë të mos duhet të ekzekutojë UNITS dhe të ndryshojë të njëjtat gjëra çdo herë. Kjo është një shtojcë: është e fikur derisa ta ndizni, dhe një politikë që nuk e caktoni e lë parazgjedhjen e vetë CadCraft pikërisht siç është.

:::note
Këto janë parazgjedhje për vizatime **të reja** dhe fletë **të reja**. Një vizatim që e keni nisur tashmë nuk ndryshon, as një vizatim që hapni.
:::

## Hapat

1. Hapni Cilësimet, shkoni te {{ui:Shtojcat}} dhe ndizni {{ui:Politikat e parazgjedhura}}.
2. Te Cilësimet, hapni skedën **CadCraft** dhe zgjidhni {{ui:Politikat e parazgjedhura}} në listën në të majtë.
3. Caktoni politikat që dëshironi. Çdo politikë fillon te **të CadCraft-it**. Një politikë me një kuti **Metrike** dhe një **Imperiale** merr një vlerë për secilin lloj vizatimi; plotësoni vetëm ato që ju duhen.
4. Nuk ka buton Ruaj: çdo ndryshim ruhet ndërsa e bëni.
5. Nisni një vizatim të ri. Ai ka njësitë, formatin e gjatësisë, saktësinë dhe lartësinë e tekstit që caktuat, dhe fleta e tij e parë e re është në letrën që zgjodhët.

## Politikat

- **Njësitë e një vizatimi të ri**: asnjë, milimetra, centimetra, metra, inç ose këmbë.
- **Formati i gjatësisë** dhe **Saktësia e gjatësisë**: ajo që cakton komanda UNITS, për një vizatim të ri.
- **Lartësia e tekstit të ri**, në njësi vizatimi.
- **Letra e një fletë të re**: letra që përdor {{ui:Fletë e re}}.
- **Madhësitë e shënimeve në letër** (Cilësimet › Global › Politikat e parazgjedhura): lartësitë e zyrës në milimetra, siç printohen. CadCraft përdor atë për shënime dhe etiketa: {{cmd:ANNOSCALE}} e cakton lartësinë me të cilën nis teksti i ri, te ajo lartësi në shkallën e shënimit. Shihni [Njësitë, letrat dhe shkallët](topic:units-papers-scales#annotate-by-scale).

Një vizatim në inç ose këmbë përdor vlerat Imperiale; çdo vizatim tjetër përdor ato Metrike. Një vizatim pa njësi përdor sistemin e njësive të caktuar te Cilësimet › Global › Politikat e parazgjedhura, ose Metrik kur nuk është caktuar asnjë.

## Ndajini me gjithë zyrën

1. Te Cilësimet, hapni skedën **Global** dhe zgjidhni {{ui:Politikat e parazgjedhura}}.
2. Klikoni {{ui:Ruaj në skedar}}. Merrni një skedar të vogël që mbaron me `.ccdefaults.json`.
3. Në një kompjuter tjetër, ndizni shtojcën, hapni të njëjtin vend dhe klikoni {{ui:Ngarko nga skedari}}. Politikat e skedarit zëvendësojnë ato të atij kompjuteri.

Një skedar mban politikat e çdo aplikacioni CadCraft, kështu që i njëjti skedar punon edhe në BimCraft.

## Mirë për t'uditur

- Nuk ka politikë për shkallën e një fletë: pamja e një fletë të re përshtatet me vizatimin, dhe shkallën e vendosni vetë në fletë.
- Nuk ka politikë për stilin e përmasës: një vizatim i ri nuk ka stile të emërtuara përmasash. Caktoni përmasat me DIMSTYLE, ose nisuni nga një vizatim që ka tuajin.
- Skedari është JSON i thjeshtë dhe i hapur. Një politikë që skedari e emëron, e cila nuk njihet nga kjo version, lihet jashtë dhe emërtohet në mesazh; pjesa tjetër ngarkohet.
- Politikat mbahen në këtë shfletues, jo në vizatim. Fikni shtojcën dhe gjithçka kthehet të vetat e CadCraft.
