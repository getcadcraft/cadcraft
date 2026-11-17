---
title: Kopēšana, ielīmēšana un dublēšana
summary: Kopējiet objektus CadCraft starpliktuvē, ielīmējiet tos tur, kur noklikšķiniet, vai vietā, dublējiet ar peles kursoru un pārnesiet darbu no cita zīmējuma vai cilnes.
keywords: kopēt, izgriezt, ielīmēt, ielīmēt vietā, dublēt, starpliktuve, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, starp zīmējumiem, cita cilne, bāzes punkts
from: 4b9f29d3
---

## Ko jūs iemācīsieties

Kā kopēt objektus starpliktuvē, ielīmēt tos tur, kur noklikšķināt, ielīmēt tos to pašu koordinātu vietā, dublēt tos ar kursoru, izgriezt un pārnest uz citu zīmējumu. Viss šeit ir arī rīkjoslas grupā {{ui:Edit}} (Rediģēt): {{ui:Copy}} (Kopēt), {{ui:Paste}} (Ielīmēt) un izvēlne {{ui:More}} (Vairāk).

## Kopējiet un ielīmējiet, kur noklikšķināt

1. Atlasiet objektus: noklikšķiniet tos vai velciet logu.
2. Nospiediet {{key:Mod+C}} vai noklikšķiniet {{ui:Copy}} grupā {{ui:Edit}}. Komandrindā teikts, cik objekti nokopēti. Tie paliek atlasīti.
3. Nospiediet {{key:Mod+V}} vai noklikšķiniet {{ui:Paste}}. Kopija parādās kursorā, karājoties no kopēto objektu apakšējā kreisā stūra.
4. Noklikšķiniet, kur šim stūrim jānonāk, vai ierakstiet punktu, piemēram, `2000,500`, un nospiediet {{key:Enter}}. Objektu piesaiste un Ortho darbojas kā parasti.

Ielīmētie objekti ir atlasīti, tāpēc tos varat uzreiz pārvietot vai mainīt. Viens {{key:Mod+Z}} noņem visu ielīmēšanu.

:::tip
Vai vēlaties, lai kopija karātos no punkta, ko izvēlaties, piemēram, sienas stūra? Ierakstiet `COPYBASE`, noklikšķiniet bāzes punktu, atlasiet objektus un nospiediet {{key:Enter}}. Tad ielīmēšana novieto šo punktu tur, kur noklikšķiniet. Lai katra kopija karātos no sava centra, nevis apakšējā kreisā stūra, mainiet {{ui:Paste point}} sadaļā [CadCraft iestatījumi](topic:settings).
:::

## Ielīmēt vietā

Nospiediet {{key:Mod+Shift+V}} vai izvēlieties {{ui:Paste in place}} izvēlnē {{ui:More}}. Kopija tiek ielikta tieši tajās koordinātās, no kurām tā nokopēta, bez klikšķa. Izmantojiet to, lai pārnestu objektus uz citu zīmējumu tajā pašā vietā vai no lapas uz citu lapu.

## Dublējiet un pārvietojiet

1. Atlasiet objektus.
2. Nospiediet {{key:Mod+D}} vai izvēlieties {{ui:Duplicate and move}} izvēlnē {{ui:More}}.
3. Kopija atrodas virs oriģināla un pārvietojas kopā ar kursoru. Noklikšķiniet, kur tai jānonāk. Varat arī ierakstīt pārvietojumu, piemēram, `@0,-600`, vai attālumu virzienā uz kursoru.

{{key:Esc}} pirms klikšķa neatstāj nekā. Dublikāts ir viens atsaukšanas solis un neskar starpliktuvi.

## Izgriezt

Nospiediet {{key:Mod+X}} vai izvēlieties {{ui:Cut}} izvēlnē {{ui:More}}. Objekti tiek ielikti starpliktuvē un izdzēsti no zīmējuma vienā atsaukšanas solī. Ielīmējiet tos atpakaļ ar {{key:Mod+V}} vai {{key:Mod+Shift+V}}.

## Starp zīmējumiem un cilnēm

Starpliktuve saglabā kopiju, kad atverat citu zīmējumu, un to kopīgi izmanto visas CadCraft cilnes šajā pārlūkprogrammā. Kopējiet vienā cilnē, tad nospiediet {{key:Mod+V}} citā.

- Bloki, ko izmanto objekti, nāk līdzi. Ja zīmējumā, kurā ielīmējat, jau ir bloks ar tādu pašu nosaukumu, tiek izmantota tā paša definīcija, kā to dara AutoCAD.
- Slāņi, ko izmanto objekti, tiek pievienoti ar krāsu un iestatījumiem, kādi tiem bija.
- Kopija netiek pārmērogota, ja abos zīmējumos ir atšķirīgas vienības: CadCraft to pasaka, un pēc tam varat izmantot {{cmd:SCALE}}.
- Skata logi paliek savā lapā; tie netiek iekļauti kopijā.

:::note
Starpliktuve ir CadCraft pašas. CadCraft objektus nevar ielīmēt citā programmā, kā arī citas programmas objektus nevar ielīmēt CadCraft: saglabājiet kā DWG vai DXF. Ļoti liela kopija var būt pārāk liela, lai to kopīgotu starp cilnēm; tad komandrindā teikts, ka to var ielīmēt tikai šajā cilnē.
:::

## Biežākās kļūdas

- **{{key:Mod+V}} ielīmēja tekstu komandrindā.** Jūs tur jau bijāt kaut ko ierakstījis, tāpēc taustiņi darbojās ar tekstu. Nospiediet {{key:Esc}}, lai to notīrītu, un tad vēlreiz nospiediet {{key:Mod+V}}.
- **Nekas nenotika, un statusa joslā teikts pabeigt pašreizējo komandu.** Darbojas cita komanda. Vispirms nospiediet {{key:Esc}}.
- **Ielīmējums nonāca tālu.** Tas karājas no kopētā apakšējā kreisā stūra, kas var būt tāls objekts, ko atlasījāt nejauši. Izmantojiet {{ui:Paste in place}} vai kopējiet ar `COPYBASE`.
- **"Nekas netika ielīmēts" ar iemeslu.** To, ko cita cilne atstāja starpliktuvē, nevarēja nolasīt (tas bija bojāts vai mainīts ar roku). Kopējiet objektus vēlreiz.

Visus taustiņus skatiet sadaļā [Tastatūra un pele](topic:keyboard), bet katru uzvedni [Komandu atsauces](topic:commands#clipboard) sadaļā.
