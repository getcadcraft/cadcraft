---
title: Sudėti aukštus viename brėžinyje
summary: Nubraižykite pirmąjį aukštą virš žemės aukšto tomis pačiomis koordinatėmis ir išjunkite kiekvieną aukštą, be išorinių nuorodų (xref).
keywords: aukštas, aukštai, FLOORS, FLR, FLOOR, FLOORLAYERS, lygis, aukštų sudėjimas, projekto sluoksnis, modelio erdvė, pagrindas, xref
from: 7440fc87
---

Aukštai leidžia sudėti planus vienoje modelio erdvėje. Kiekvienas aukštas turi savo objektus, o sluoksniai veikia visuose jų. Siena sluoksnyje `P-Walls` gali būti bet kuriame aukšte.

## Pradėti

Įveskite `FLOORS` (`FLR`) arba pasirinkite {{ui:Aukštai…}} meniu {{ui:Daugiau}} grupėje {{ui:Vaizdas}}, tada pasirinkite {{ui:Pradėti nuo aukštų}}. Tai, ką jau nubraižėte, lieka žemės aukšte.

## Piešti ant aukšto

Pasirinkite aukštą skydelio apvaliu mygtuku. Nauji objektai patenka į jį.

Kiti įjungti aukštai rodomi išblukę po juo. Galite prisitraukti prie jų, kad pirmasis aukštas sutaptų su žemės aukštu, bet negalite jų keisti, kol jų nepadarysite aktyviais. Akis išjungia aukštą. Sienos jungiasi tik su sienomis savo aukšte.

Norėdami pradėti aukštą nuo žemiau esančio, pažymėkite, ko norite, pasirinkite aukštą skydelyje ir paspauskite {{ui:Kopijuoti ten}}.

## Aukštai lapuose

Pažymėkite vaizdo sritį lape ir Ypatybėse, skiltyje {{ui:Rodomas aukštas}}, pasirinkite jos aukštą. Vaizdo sritis, kurioje aukštas nepasirinktas, rodo visus įjungtus aukštus.

## Siųsti failą kitam

Kitos CAD programos aukštų nežino, todėl rodo juos visus kartu. Prieš siųsdami failą, skydelyje pasirinkite {{ui:Paversti aukštus sluoksniais}} arba įveskite `FLOORLAYERS`. Kiekvienas objektas perkeliamas į sluoksnį, pavadintą pagal savo aukštą, pavyzdžiui `Žemės aukštas-P-Walls`, todėl vis tiek galima išjungti kiekvieną aukštą. Anuliuoti tai atšaukia. CadCraft išsaugo aukštus DWG ar DXF faile, kurį įrašo.
