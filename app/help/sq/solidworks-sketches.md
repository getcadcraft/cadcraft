---
title: Zhvendos skicat në dhe nga modelues të tjerë pjesësh
summary: Shkruaj një makro që ndërton vizatimin tënd si një skicë të vetme të kufizuar në një modelues pjesësh, dhe hap një skicë të eksportuar nga një i tillë.
keywords: skicë, makro, swb, vba, eksport, modelues pjesësh, variabla globale, ekuacione, relacione, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks nuk është i disponueshëm atje ku ndërtohet CadCraft, kështu që asnjëra drejtim nuk është testuar ende në SolidWorks. Ajo që shkruan CadCraft kontrollohet vetëm për strukturë. Kontrollo rezultatin para se të mbështetesh në të.
:::

## Dërgo një vizatim si skicë

1. Kufizo dhe vendos përmasat e vizatimit (shih [Kufizo një vizatim](topic:constraints)).
2. Te grupi {{ui:Parametrike}}, hap {{ui:Më shumë}} dhe zgjidh {{ui:Makro për SolidWorks (.swb)}}, ose shkruaj {{cmd:SWBOUT}}.

   Një skedar me emrin e vizatimit, që përfundon me `.swb`, shkarkohet.
3. Në SolidWorks, zgjidh **Tools > Macro > Run** dhe zgjidh atë skedar.

Makro krijon një pjesë të re nga shablloni yt parazgjedhur i pjesës, hap një skicë në Front Plane dhe vizaton në të vijat, rrethet, harqet, pikat dhe polivijat e modelit, me:

- kufizimet e tua si relacione skice,
- kufizimet dimensionale si përmasa me të njëjtët emra (`d1@Sketch1`),
- parametrat e tu si variabla globale,
- çdo shprehje si ekuacion.

Pjesa përdor njësinë e gjatësisë të vizatimit. Teksti, blloqet, vijëzimet, përmasat dhe fletët nuk janë pjesë e skicës; historiku liston çfarë u la jashtë. Shprehjet pa formë ekuacioni atje (`if`, `min`, `max`, `round`, `%` dhe disa të tjera) shkruhen si vlera e tyre aktuale, dhe historiku thotë cilat. Çdo gjë që makro nuk mund ta bëjë shkruhet në një skedar regjistri pranë makros, dhe një mesazh përmbledh në fund.

## Hap një skicë nga një pjesë

1. Në SolidWorks, ekzekuto makron e eksportit të CadCraft (shkarkoje në aplikacionin PartCraft: File > Export > Export macro to bring parts back) mbi pjesën. Ajo shkruan një skedar `.json` në formatin `cadcraft-sw-export` pranë pjesës.
2. Në CadCraft, zgjidh {{ui:Hap}} dhe zgjidh atë skedar `.json`.
3. Kur pjesa ka disa skica, zgjidh një.

Skica bëhet vizatimi, në milimetra: vijat, harqet, rrethet dhe pikat e saj, relacionet si kufizime, përmasat si kufizime dimensionale me emrat e tyre të mëparshëm (`D1`, `D2` …), variablat e saj globale si parametra, dhe ekuacionet mbi përmasat si shprehjet e tyre. Historiku liston çfarë nuk u mbart, si relacionet që CadCraft nuk i ka. Vendi ku qëndron skica në pjesë nuk ruhet: vizatohet e sheshtë, ashtu si duket në planin e vet.
