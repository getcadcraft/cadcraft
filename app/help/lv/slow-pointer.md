---
title: Rādītājs lec vai atpaliek pāri zīmējumam
summary: Ko darīt, ja krustiņš neseko peles kustībai vienmērīgi vecākā vai lēnākā datorā.
keywords: kursors lec, rādītāja kavēšanās, lēns krustiņš, saraustīts kursors, vecs dators, vecs grafikas adapteris, integrētā grafika, aparatūras paātrinājums, vienmērīgāks rādītājs, lēns klēpjdators
from: 39dc9057
---

CadCraft darbojas pārlūkprogrammā (CadCraft Studio arī ir pārlūka skats), tāpēc nekas tajā nav veidots konkrētai grafikas kartei. Krustiņu zīmē lietotne, kas nozīmē, ka tas var kustēties tikai tik ātri, cik ātri lietotne spēj uzzīmēt kadru.

## Ļaujiet CadCraft samazināt papildu efektus

1. Atveriet {{ui:Iestatījumi}} (zobrats augšējā labajā stūrī) un paliekiet cilnē {{ui:CadCraft}}.
2. Izvēlieties {{ui:Vienmērīgāks rādītājs vecākos datoros}}.
3. Izvēlieties {{ui:Ieslēgts}}.

Ar to ieslēgtu jūsu datora pašu krustiņa rādītājs tiek izmantots krustiņa un izvēles kvadrāta vietā (arī pilnekrāna krustiņa), un objekts zem rādītāja iezīmējas, kad rādītājs apstājas, nevis kustības laikā. Objektu piesaiste, izsekošana un gumijas josla darbojas kā iepriekš.

{{ui:Automātiski}} ir tas, kā CadCraft sākas: tas novēro, cik ilgi kadri tiek zīmēti, kamēr kustiniet rādītāju, un pats to ieslēdz, ja tie paliek lēni dažas sekundes. Tas to vienreiz paziņo. {{ui:Izslēgts}} patur zīmēto krustiņu neatkarīgi no ātruma.

## Ja joprojām lēni

- Pārbaudiet, vai pārlūkprogrammā ir ieslēgts aparatūras paātrinājums: jaunā cilnē atveriet `chrome://gpu` (vai `edge://gpu`). Ja pirmajās rindās ir "Software only" vai "Disabled", pārlūks zīmē bez grafikas kartes. Grafikas draivera atjaunināšana bieži to atjauno.
- Aizveriet citas smagas cilnes un programmas un izmēģiniet mazāku pārlūka logu.
- Pastāstiet mums caur {{ui:Palīdzība}} › {{ui:Ziņot par problēmu}}: norādiet, vai izmantojat pārlūkprogrammu vai CadCraft Studio, tā versiju un to, ko rāda gpu lapa.
