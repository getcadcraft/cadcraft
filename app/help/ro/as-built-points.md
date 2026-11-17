---
title: Verificarea punctelor as-built
summary: Citiți punctele măsurate de o echipă de topografie și comparați-le cu punctele și blocurile desenului: în sau în afara unei toleranțe, nemăsurate, în plus — marcate în desen și scrise ca raport CSV.
keywords: as built, as-built, asbuilt, topografie, survey, stație totală, total station, trasare, setting out, stake out, fișier de puncte, point file, csv, txt, pnezd, penzd, xyz, toleranță, tolerance, abatere, deviation, verificare, check, comparare, compare, exportpoints, puncte de proiect, layout points
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) este cealaltă jumătate a {{cmd:EXPORTPOINTS}}: exportați punctele desenului pentru teren, echipa le trasează și măsoară ce a fost construit, iar ASBUILT compară fișierul lor cu desenul.

1. Tastați {{cmd:ASBUILT}} și selectați aceleași puncte și blocuri pe care le-ați exportat (Enter ia fiecare POINT, ca EXPORTPOINTS).
2. **Asociați punctele as-built după** **Număr** (echipa a păstrat numerele punctelor dvs.: indicați primul număr exportat) sau **Cel mai apropiat** (ei și-au numerotat propriile măsurători: fiecare punct de proiect ia cel mai apropiat).
3. Indicați unitățile și coordonatele fișierului așa cum le-ați exportat (Desen, Metri sau Picioare; Global sau SCU) și **toleranța** în unități de desen.
4. Alegeți fișierul CSV sau TXT al echipei. CadCraft îl citește ca CivilCraft: virgule, tabulatori, punct și virgulă sau spații, un rând de antet care denumește coloanele, sau PNEZD după numărul de coloane.

Linia de comandă spune câte puncte au fost asociate, câte sunt în toleranță, câte în afara ei, câte nemăsurate și câte în plus, și cea mai mare distanță. **Le marcați în desen?** Da le plasează pe stratul **AS-BUILT** ca un singur pas de anulare: un punct la fiecare măsurătoare, cu numărul și distanța alăturate, și o linie roșie de la punctul de proiect la fiecare măsurătoare din afara toleranței. Se descarcă un raport CSV cu toate punctele: coordonatele de proiect și as-built, diferențele Est, Nord și în cotă, și rezultatul.

Vezi și [Puncte pentru programele BIM](topic:points-for-bim).
