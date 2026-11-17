---
title: Trimiterea unui desen către un laser
summary: Deschideți panoul Laser, alegeți ce face fiecare strat (tăiere, marcare, gravare, umplere, imagine), previzualizați mișcările capului și salvați codul G GRBL în modul laser, sau trimiteți-l din browser după încadrarea lucrării.
keywords: laser, tăietor laser, gravor laser, GRBL, cod G, gcode, gravare, umplere, tramare, gravare imagine, marcare, tăiere, Web Serial, încadrare lucrare, putere, viteză, treceri, LASER, LASERCUT, CNC
from: 72b56db0
---

Panoul {{ui:Laser}} transformă straturile unui desen într-un program pentru un laser care rulează GRBL (majoritatea controlerelor pentru hobby și pentru ateliere mici, cu diodă sau CO2). Tastați `LASER` (sau `LASERCUT`) și apăsați {{key:Enter}}, sau alegeți {{ui:Laser…}} din meniul {{ui:Mai multe}} al grupului {{ui:Vizualizare}}. În stilurile de panglică, este în meniul {{ui:Fișier}} și lângă {{ui:Trasare}}. Panoul se deschide peste desen și rămâne deschis cât desenați: previzualizarea urmează fiecare modificare.

:::warning
Testați fiecare setare pe material rebut mai întâi, purtați ochelari de protecție potriviți laserului, țineți capacul închis acolo unde există unul și nu lăsați niciodată un laser în funcțiune nesupravegheat. Valorile cu care pornește un strat sunt provizorii, nu recomandări pentru niciun material.
:::

## Ce se trimite

Panoul citește modelul (nu foile), pe straturile care sunt pornite și dezghețate:

- Linii, arce, cercuri, polilinii (segmentele de arc rămân arce), elipse și spline-uri. O formă care se termină unde a început este considerată închisă.
- Blocurile sunt desfăcute: un obiect de pe stratul 0 dintr-un bloc merge cu stratul referinței de bloc.
- O hașură trimite conturul ei, deci un logo hașurat pe un strat **Umplere** este umplut.
- O imagine (`IMAGEATTACH`) este gravată pe un strat setat la **Gravare imagine**, când stă drept (nu rotită sau înclinată) și când fișierul ei este deschis în CadCraft.
- Textul, cotele, liniile de indicație, punctele și liniile de construcție nu se trimit; panoul spune câte a lăsat deoparte. Ca să ardeți text, desenați literele ca forme sau hașurați-le.

Dimensiunile ies în milimetri din unitățile desenului (`UNITS`): un desen în inch se înmulțește cu 25.4. Un desen fără unități setate se trimite cu o unitate egală cu un milimetru. Bifați {{ui:Doar obiectele selectate}} ca să trimiteți o parte din desen.

## Alegeți ce face fiecare strat

Fiecare strat cu ceva pe el este un rând. {{ui:Face}} îl setează la **Tăiere**, **Marcare**, **Gravare linii**, **Umplere forme**, **Gravare imagine** sau **Nu se trimite**, cu {{ui:Putere %}}, {{ui:Viteză mm/min}} și un număr de {{ui:Treceri}}.

Fiecare modificare este un singur pas de anulare și este salvată în desen: DWG (orice versiune salvată de CadCraft) și DXF păstrează setările, astfel încât desenul se deschide cu ele data viitoare. Alte programe deschid fișierul ca înainte; ele văd un bloc neutilizat numit CADCRAFT_LASER (curățarea lui acolo înlătură setările).

- **Umplere** arde interiorul formelor închise prin linii, la distanța de {{ui:Interlinie}}, la un {{ui:Unghi}}, în ambele sensuri sau într-unul singur, cu o depășire astfel încât capul să fie la viteză când laserul se aprinde; hașurarea încrucișată adaugă o a doua trecere la 90°. O formă cu o gaură rămâne deschisă la gaură.
- **Gravare imagine** transformă o imagine în puncte (Floyd–Steinberg, Atkinson, ordonat sau simplu alb-negru la un prag) sau, cu *Niveluri de gri*, în putere variabilă.
- Ordinea: întâi imaginile și umplerile, apoi gravarea liniilor, apoi marcajele, apoi tăierile, astfel încât o piesă decupată să nu se mute cât timp este gravată. În interiorul unui strat, traseele merg **dinăuntru spre afară** (o gaură înainte de placa în care se află), apoi cel mai apropiat următor.

## Previzualizare, apoi salvare

Previzualizarea desenează ce face capul: liniile care ard în culoare, mișcările rapide în gri și un dreptunghi verde în jurul tuturor lucrurilor care ard. Sub ea sunt dimensiunea, lungimea arderii și o estimare de timp (fără accelerație; o mașină reală durează mai mult). {{ui:Salvare cod G…}} scrie cod G GRBL în modul laser: `$32=1`, `M4` (sau `M3`) cu valori S, mișcări `G0` și `G1`, `M5` la final. X0 Y0 este colțul din stânga jos al lucrării, dacă nu alegeți originea desenului: setați acolo zero-ul de lucru al mașinii.

## Trimiterea din browser

În Chrome și Edge, {{ui:Conectare…}} cere să alegeți portul USB al laserului. Nimic nu se conectează și nu trimite până nu apăsați un buton. Apăsați mai întâi {{ui:Încadrare job}}: capul trasează conturul lucrării cu laserul **oprit** (sau la puterea mică setată pentru un indicator), ca să vedeți unde va arde. Abia atunci se activează {{ui:Trimitere job}}, iar se dezactivează din nou dacă modificați ceva. {{ui:Pauză}} ține capul pe loc, iar {{ui:Oprire}} îl oprește, resetează controlerul (laserul se stinge) și trimite `M5`. Acolo unde lipsește Web Serial (Firefox, Safari și CadCraft Studio, care nu are încă Web Serial), panoul oferă doar salvarea: salvați codul G și trimiteți-l cu programul propriu al laserului.

## Încă nerealizat

Încă nerealizat: formatele altor controlere (Ruida, laseri Marlin, fișiere ale producătorilor), punți și racorduri de intrare, decalarea lățimii tăieturii (kerf), biblioteci de materiale, axele rotativă și Z, alinierea cu camera, text ca contururi.
