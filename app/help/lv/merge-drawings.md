---
title: Divu cilvēku izmaiņu apvienošana vienā zīmējumā
summary: Ļaujiet git, Fossil vai Mercurial apvienot divas DWG vai DXF kopijas objektu pa objektam, izmantojot atslēgu, ko CadCraft glabā katram objektam.
keywords: apvienot, git, fossil, mercurial, versiju kontrole, diff, konflikts, trīs puses, cadcraft merge, atslēga, gitattributes, DWG, DXF
from: 71482bf9
---

Divi cilvēki rediģē vienu un to pašu zīmējumu. Ja viņi mainījuši dažādus objektus, apvienošana var notikt automātiski: nekas nav jāpārtaisa ar rokām.

## Kas to padara iespējamu

CadCraft katram zīmētam objektam piešķir īsu **atslēgu**, kas nekad nemainās un nekad netiek piešķirta diviem objektiem. Tā tiek saglabāta kopā ar objektu DWG vai DXF failā (kā papildu dati, ko citas programmas saglabā). Apvienošana meklē objektus pēc šīs atslēgas, nevis pēc to vietas failā, jo katra programma saglabājot pārnumurē vietas. Ja nekad neapvienojat, to var izslēgt sadaļā {{ui:Iestatījumi}} › CadCraft › Apvienošanai draudzīgi faili; tad failu izmērs samazinās par aptuveni 10 procentiem.

Zīmējums, kas saglabāts, pirms atslēgas vēl bija, joprojām tiek apvienots: tā objekti saņem atslēgu pēc vietas failā, tāpat visiem, kas to atver.

## Iestatiet

Git vienai repozitorijai vajadzīgas divas rindas vienreiz:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# vienreiz katrā datorā
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez git palaidiet to manuāli: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil un Mercurial pieņem tos pašus trīs failus savā apvienošanas rīka iestatījumā.

## Noteikumi

- Objekts, kas mainīts tikai vienā pusē, tiek ņemts. Viena un tā pati izmaiņa abās pusēs tiek ņemta vienreiz.
- Viena īpašība, kas mainīta divos veidos, ir **konflikts**: jūsu puse paliek, un pārskatā ir uzskaitītas abas vērtības. Atveriet rezultātu, apskatiet šo objektu un labojiet to ar roku.
- Objekts, kas pievienots jebkurā pusē, tiek saglabāts. Objekts, kas noņemts vienā pusē un nemainīts otrā, tiek noņemts. Noņemts vienā pusē un mainīts otrā: noņemts un ziņots.
- Slāņi, bloki, teksta un izmēru stili, lapas un nosauktie skati tiek apvienoti tādā pašā veidā. Ierobežojumi seko objektiem, ko tie nosauc.
- Rezultāts tiek ierakstīts tajā pašā failu formātā un versijā kā jūsu.

Netiek apvienots: objektu zīmēšanas secība paliek jūsu, tad seko objekti, ko pievienoja otra puse. Izmaiņas vienā un tajā pašā bloka definīcijā abās pusēs ir konflikts un nekad netiek sajauktas. Nekas netiek augšupielādēts; viss darbojas jūsu datorā.
