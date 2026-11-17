---
title: Skata loga klašu izmaiņas
summary: Lapā paslēpt klasi vai piešķirt tai citu krāsu, līnijas biezumu vai aizpildījumu tikai vienā skata logā; modelis un citi skata logi paliek, kādi bija.
keywords: skata logs, skata loga izmaiņa, klases izmaiņa, paslēpt klasi skata logā, lapa, izkārtojums, VPLAYER, plotēt, Vectorworks
from: c1a2b51f
---

Lapā bieži tas pats modelis tiek rādīts vairāk nekā vienu reizi: plāns ar mēbelēm un plāns bez tām, vai apgaismojuma plāns, kur krāsā ir tikai gaismekļi. Skata loga klases izmaiņa maina, kā viena [klase](topic:classes) tiek rādīta **tikai šajā skata logā**.

1. Atveriet lapu un atlasiet vienu skata logu.
2. Atveriet klašu paneli (`CLASSES`) un izvēlieties klasi.
3. Sadaļā {{ui:Šis skata logs}} atzīmējiet {{ui:Hide in this viewport}} vai iestatiet {{ui:Color here}}, {{ui:Lineweight here}} vai {{ui:Fill here}}.

Zemāk redzams saraksts ar visām klasēm, ko šis skata logs maina. {{ui:Clear this viewport's overrides}} noņem tās visas. Katra izmaiņa ir viens atsaukšanas solis.

## Ko maina izmaiņa

- **Paslēpt** paslēpj klasi un katru klasi, kas atrodas zem tās, šajā skata logā.
- **Krāsa, līnijas biezums un aizpildījums** maina klases objektus, kuru vērtība nav iestatīta pašam objektam, tas ir, objektus, kas to pārņem pēc klases vai slāņa. Objekts ar savu krāsu to paturēs, tāpat kā ar skata loga slāņa izmaiņu.

Izmaiņas redzamas ekrānā un plotos un PDF failos, arī lapu komplektā, kas publicēts PDF formātā. Tās darbojas kopā ar skata loga iesaldētajiem slāņiem un slāņu izmaiņām.

Izmaiņas tiek saglabātas rasējumā DWG un DXF formātā (kopā ar klašu sarakstu blokā `CADCRAFT_CLASSES`) un atgriežas tajā pašā skata logā, kad fails tiek atvērts CadCraft.
