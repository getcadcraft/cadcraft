---
title: Organizarea unui desen cu clase
summary: Clasele ordonează obiectele a doua oară, peste straturi (Lighting-Fixtures-Spot): le afișați și le ascundeți, le dați o culoare, un tip de linie, o grosime de linie, o umplere și un stil de text pe care obiectele le pot prelua „după clasă” și stabiliți clasa în care intră obiectele noi.
keywords: clasă, clase, CLASSES, CLS, CLASS, după clasă, ByClass, clasă activă, utilizare la creare, Fără clasă, strat de proiectare, scară strat, elevație, Vectorworks
from: 672de9cb
---

Straturile indică *unde* aparține un obiect în desen; clasele indică *ce* este el. Un perete de pe stratul `Level 1` poate fi în clasa `Walls-Exterior`, iar un corp de iluminat de tavan de pe stratul `Ceiling` poate fi în clasa `Lighting-Fixtures-Spot`. Puteți ascunde toate corpurile de iluminat de pe toate straturile deodată sau puteți trasa mai gros toți pereții exteriori, fără să mutați nimic între straturi.

Fiecare obiect începe în clasa **Fără clasă**. Un desen fără clase proprii funcționează exact ca înainte.

## Deschideți panoul Clase

Tastați `CLASSES` (sau `CLS`) și apăsați {{key:Enter}}, ori alegeți {{ui:Clase…}} din meniul {{ui:Mai multe}} al grupului {{ui:Vizualizare}}. Panoul se deschide peste desen și rămâne deschis cât desenați.

- **Adăugați o clasă:** tastați numele ei în caseta de sus și apăsați {{key:Enter}}. Un `-` face un nivel: `Lighting-Fixtures-Spot` se află sub `Lighting-Fixtures`, care se află sub `Lighting`; nivelurile lipsă se adaugă automat.
- **Afișare sau ascundere:** ochiul de lângă o clasă. Ascunderea unei clase ascunde toate clasele aflate sub ea, pe ecran și pe hârtie.
- **Clasa activă:** butonul rotund. Obiectele noi pe care le desenați intră în clasa activă.
- **Alegeți o clasă:** faceți clic pe numele ei. Butoanele și setările de sub listă lucrează apoi asupra ei.

Numărul de la capătul fiecărui rând este câte obiecte sunt în clasa respectivă (în model, pe foi și în interiorul definițiilor de blocuri).

## Puneți obiecte într-o clasă

Selectați obiectele, alegeți o clasă în panou și faceți clic pe {{ui:Setare clasă}}. Bifați mai întâi {{ui:După clasă}} ca ele să-și ia culoarea, tipul de linie, grosimea, umplerea și stilul de text din clasă. Puteți și:

- tastați `CLASS` cu obiectele selectate și introduceți un nume de clasă (un nume nou creează clasa);
- tastați `CLASS` fără nimic selectat ca să setați clasa activă; `?` listează clasele cu numărul lor;
- folosiți secțiunea {{ui:Clasă}} din panoul Proprietăți: clasa, și un comutator {{ui:… După clasă}} pentru culoare, tip de linie și grosime (umplere pentru hașuri, stil de text pentru text);
- selectați după clasă cu `QSELECT`: alegeți proprietatea {{ui:Clasă}}.

{{ui:Selectare obiectelor sale}} selectează fiecare obiect din clasa aleasă de pe foaia deschisă (sau din model).

## Cum se desenează un obiect: obiect, clasă, strat

Culoarea, tipul de linie, grosimea, umplerea și stilul de text ale unui obiect pot fi **după clasă**, la fel cum pot fi după strat. CadCraft caută în această ordine:

1. Valoarea proprie a obiectului, dacă aceasta nu este după clasă.
2. Valoarea clasei, când obiectul o ia după clasă și clasa are una.
3. Valoarea stratului.

O clasă a cărei culoare (sau tip de linie …) este {{ui:Nedefinită}} lasă obiectul să treacă la stratul lui. Alegeți o clasă și setați-i {{ui:Culoare}}, {{ui:Tip de linie}}, {{ui:Grosime de linie}}, {{ui:Umplere (hașuri)}} și {{ui:Stil de text}} sub butoane. Bifați {{ui:Utilizare la creare}} ca obiectele noi desenate în acea clasă să ia toate acestea după clasă.

Fiecare modificare din panou este un singur pas de {{ui:Anulare}}.

## Redenumire și ștergere

{{ui:Redenumire}} editează numele pe loc: apăsați {{key:Enter}} ca să-l păstrați, {{key:Esc}} ca să renunțați. Clasele aflate sub ea urmează (`Lighting-Spot` devine `Light-Spot` când `Lighting` devine `Light`), la fel și obiectele lor și orice înlocuiri pe ferestre de vizualizare.

{{ui:Ștergere}} elimină clasa și toate clasele aflate sub ea. Obiectele lor trec în **Fără clasă**. Un {{ui:Anulare}} le readuce pe toate. **Fără clasă** nu poate fi redenumită sau ștearsă.

## Straturi de proiectare

Sub {{ui:Straturi de proiectare}}, fiecare strat poate avea o scară (`1:50`) și o elevație. Un strat de proiectare este un strat obișnuit: spațiul model și foile funcționează ca înainte, iar scara și elevația sunt păstrate în desen pentru uneltele care le vor folosi.

## În fișierele DWG și DXF

Clasele sunt păstrate în fiecare versiune DWG pe care CadCraft o salvează și în DXF (R12 și 2000). Clasa fiecărui obiect este propriile lui date extinse (aplicația `CADCRAFT_CLASS`), deci AutoCAD și alte programe o păstrează împreună cu obiectul. Lista de clase, culorile și vizibilitatea sunt păstrate într-un bloc nefolosit, numit `CADCRAFT_CLASSES`; dacă alt program șterge acel bloc (purge), CadCraft tot găsește clasa fiecărui obiect, iar clasele revin cu setările implicite.

Alte programe nu știu despre clase: ele desenează fiecare obiect cu valorile proprii sau ale stratului său.

Vezi și [Înlocuiri de clasă pe ferestre de vizualizare](topic:viewport-overrides) și [Organizarea unui desen cu straturi](topic:layers).
