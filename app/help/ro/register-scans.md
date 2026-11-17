---
title: Înregistrarea mai multor scanări într-una
summary: Plasați scanările făcute din poziții diferite într-un singur sistem de referință, prin perechi de puncte alese sau ținte introduse, rafinați-le cu ICP, salvați înregistrarea ca proiect și exportați norul înregistrat ca LAS sau E57. Comanda este REGISTERSCANS.
keywords: înregistrare, scanări, nor de puncte, ICP, cel mai apropiat punct iterativ, ținte, perechi de puncte, transformare rigidă, aliniere, îmbinare, E57, LAS, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Ce veți face

Mai multe scanări ale aceluiași loc (fiecare dintr-o poziție proprie a scanerului) pornesc în propriile coordonate. Înregistrați-le: dați fiecărei scanări o singură plasare, astfel încât toate să stea într-un singur sistem de referință, apoi salvați-l ca proiect și scrieți norul înregistrat într-un singur fișier LAS sau E57.

## Plasarea scanărilor

1. Deschideți caseta de dialog (tastați `REGISTERSCANS` (sau `REGSCAN`)). {{ui:Adăugare scanări…}} acceptă fișiere LAS, LAZ, E57, PLY, PCD, PTX, PTS sau XYZ, sau le puteți trage în caseta de dialog. Scanările care folosesc unități diferite sunt refuzate cu o notă: convertiți mai întâi una dintre ele.
2. Alegeți {{ui:Scanare de mutat}} și {{ui:Plasare față de}}. Imaginea arată fiecare scanare în sistemul de referință așa cum este acum, fiecare într-o culoare: {{ui:Plan}}, {{ui:Față}} sau {{ui:Lateral}}; trageți pentru a deplasa, folosiți rotița pentru zoom.
3. **Prin perechi de puncte.** Faceți clic pe {{ui:Alegeți o pereche}}, apoi pe un punct al scanării de mutat, apoi pe același loc din altă scanare (un colț, o țintă, baza unui stâlp). Repetați de cel puțin trei ori, cu puncte care nu sunt pe aceeași linie și sunt depărtate între ele. Faceți clic pe {{ui:Plasare pe perechi}}: scanarea este plasată printr-o potrivire prin cele mai mici pătrate, iar **Diferența rămasă** arată cât de departe rămâne fiecare pereche. O pereche cu un număr mare înseamnă o alegere proastă: eliminați-o cu crucea și plasați din nou.
4. **Prin ținte.** Dacă se cunosc coordonatele reale ale unui punct (ținte topografice), faceți clic pe {{ui:Alegeți, apoi introduceți ținta}}, faceți clic pe punctul din scanarea lui și introduceți X, Y și Z ale țintei în rând. Perechile și țintele introduse se pot combina liber.

## Rafinarea cu ICP

Perechile dau o plasare aproximativă. {{ui:Rafinare}} mută scanarea până când suprafețele ei se așază pe cele ale celeilalte scanări: întâi **punct la punct**, apoi **punct la plan**. Tabelul listează fiecare pas cu eroarea lui și cu numărul de puncte potrivite; linia de deasupra desenează scăderea erorii. {{ui:Oprire}} încheie rularea după pasul în curs și păstrează ce a atins. {{ui:Anulare}} ia înapoi toată rularea (sau ultima plasare); {{ui:Resetare}} readuce scanarea la coordonatele ei din fișier.

Ca să rămână rapid pe un laptop, ICP lucrează pe o parte rarefiată a punctelor ({{ui:Puncte folosite}}, între 5.000 și 60.000) și ignoră potrivirile mai depărtate decât {{ui:Distanța maximă de potrivire}} (implicit 5% din mărimea scanării, micșorându-se pe măsură ce se stabilizează). Are nevoie întâi de o plasare aproximativă: scanările care abia se suprapun raportează că nu pot fi potrivite. Suprafețele doar plane sau doar drepte nu pot fixa o poziție de-a lungul lor; în acest caz adăugați perechi.

## Salvarea și exportul

- {{ui:Salvare proiect}} scrie un fișier mic `.ccscans.json`: numele, mărimea și o amprentă a primilor 64 KB ai fiecărei scanări, cu transformarea ei. Nu conține puncte. {{ui:Deschidere proiect…}} caută fișierele de scanare după aceste referințe (fișierele trebuie adăugate mai întâi) și readuce fiecare transformare.
- {{ui:Exportare LAS}} și {{ui:Exportare E57}} scriu un singur fișier cu fiecare scanare în locul ei înregistrat. Punctele din originale nu sunt rescrise; transformarea se aplică la ieșire. Cu {{ui:Citește fiecare punct din fișiere}} activat, fiecare fișier este citit din nou pentru fiecare punct (până la 20 de milioane per scanare); dezactivat, se scriu doar punctele afișate în vizualizator.
- {{ui:Afișare nor înregistrat}} (CadCraft) scrie LAS-ul și îl atașează sub desen, la propriile coordonate, ca orice nor.

:::note
Nu se încarcă nimic. Înregistrarea lucrează în unitățile proprii ale fișierelor și păstrează mm: un LAS este scris cu o scară care se potrivește (până la 0.1 mm), iar un E57 în dublă precizie. Un sistem de coordonate se transportă în LAS doar când fiecare scanare indică același cod EPSG. Scriitorul E57 este propriu; este verificat prin recitirea fișierelor cu acest cititor și cu libE57Format.
:::
