---
title: Liste de materiale pe zone
summary: Marcați zone ale desenului și plasați pentru fiecare un tabel care numără blocurile din interior. Tabelele urmează desenul pe măsură ce lucrați, iar dvs. alegeți ce coloane afișează fiecare.
keywords: listă de materiale, bill of materials, BOM, listă de piese, parts list, tabel centralizator, schedule, zonă, zone, arie, area, tabel, table, numărare, count, cantitate, quantity, atribut, attribute, coloane, columns, număr de articol, item number, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

O **zonă** este o arie denumită a desenului. Un **tabel de listă de materiale** listează ce se află în interiorul unei zone, sau în tot desenul: fiecare bloc cu cantitatea sa și valorile atributelor. Un desen poate avea câte zone și tabele aveți nevoie, iar o zonă poate avea mai multe tabele cu coloane diferite.

Uneltele se află pe fila Blocuri, sub {{ui:Bill of materials}}, în meniul {{ui:More}} al grupului Blocuri, și pot fi tastate.

## Crearea unei zone

Tastați {{cmd:BOMZONE}} și fie

- faceți clic pe două colțuri opuse pentru un dreptunghi,
- alegeți {{ui:Polygon}}, faceți clic pe fiecare colț și apăsați Enter ca să-l închideți, sau
- alegeți {{ui:Object}} și indicați o polilinie închisă, un cerc, o elipsă sau o spline închisă. Conturul său este copiat; obiectul rămâne cum este.

Apoi tastați numele zonei. Zona se desenează ca un contur punctat, cu numele deasupra colțului din stânga sus, pe stratul `BOM-ZONES`, care nu se trasează. Activați trasarea pentru acel strat dacă doriți zonele pe hârtie.

O zonă este o polilinie închisă obișnuită: o mutați, o întindeți sau îi trageți mânerele, iar numele ei o urmează. Ca să o redenumiți, editați textul numelui sau folosiți {{cmd:BOMZONE}} și {{ui:Rename}}. {{ui:Zones}} listează fiecare zonă și câte tabele are.

## Plasarea unui tabel

Tastați {{cmd:BOMTABLE}} (sau {{cmd:BOM}}), alegeți conturul zonei sau numele ei, indicați înălțimea textului și faceți clic unde ajunge colțul din stânga sus al tabelului. Apăsați {{key:Enter}} în loc să alegeți o zonă, sau alegeți {{ui:Whole}}, pentru un tabel al întregului desen.

Un tabel nou arată numărul articolului, cantitatea, numele blocului și o coloană pentru fiecare atribut pe care îl poartă blocurile (primele șase; celelalte sunt oferite nebifate). Blocurile cu același nume și aceleași valori de atribute împart un rând.

## Ce înseamnă „în interior”

- Un bloc contează în zona care conține **punctul său de inserare**.
- O linie, un arc, un cerc, o polilinie, o elipsă, o spline sau o hașură contează **în întregime** în zona care conține mijlocul extinderii sale (pentru o linie, mijlocul ei). Lungimea sa nu se taie la marginea zonei.
- Un punct exact pe margine este în interior.
- Zonele se pot suprapune. Fiecare zonă se numără pentru sine, deci un obiect din suprapunere se află în ambele tabele.

## Tabelele urmează desenul

Când adăugați, mutați, copiați sau ștergeți un bloc, editați un atribut sau reconturați ori mutați o zonă, fiecare tabel se redesenează în același pas. Anularea revine asupra modificării dvs. și asupra schimbării tabelului, împreună.

Ca să opriți un tabel din urmărire, bifați {{ui:Frozen}} în setările sale. Un tabel înghețat se schimbă doar când vă editați setările sau tastați {{cmd:BOMUPDATE}}, care actualizează acum fiecare tabel.

## Alegerea coloanelor

Selectați un tabel și tastați {{cmd:BOMEDIT}}. În caseta de dialog:

- **Coloane**: bifați-le pe cele de afișat (articol, cantitate, nume, strat, lungime, arie, observații și fiecare atribut), tastați propriul titlu pentru oricare și mutați-le în sus sau în jos.
- {{ui:Group rows by}}: numele blocului și valorile atributelor, doar numele blocului, stratul sau un singur atribut. Într-un rând îmbinat, o valoare care diferă între blocuri apare ca „variază”.
- {{ui:Sort by}} orice coloană, crescător sau descrescător.
- {{ui:Title}}, {{ui:Show the title}} și {{ui:Totals row}}.
- {{ui:Count linework by layer}} adaugă un rând pentru fiecare strat, cu numărul de obiecte, lungimea lor totală și, pentru forme închise, aria lor totală, în unități de desen.
- **Observații**: bifați coloana Observații, apoi tastați o observație pentru orice rând, în tabelul din partea de jos a casetei de dialog.

Fiecare tabel își păstrează propriile alegeri.

## Numerele articolelor

Un rând își păstrează numărul de articol cât timp este în tabel. Un rând nou ia următorul număr liber, iar un număr deja dat nu se mai refolosește, astfel încât baloanele și notele care citează un număr rămân corecte. {{ui:Renumber items}} le numerotează de la 1, în ordinea afișată.

Un rând este recunoscut după ceea ce grupează: schimbați modul de grupare sau o valoare de atribut pe care o folosește gruparea, și rândul este considerat unul nou.

## Export și alte programe

{{cmd:BOMEXPORT}}, sau {{ui:Export CSV}} din caseta de dialog, salvează un tabel ca fișier .csv pentru o foaie de calcul.

Într-un fișier DWG sau DXF, un tabel este un bloc obișnuit de linii și text, deci alte programe îl arată și îl trasează așa cum a fost desenat. Acolo nu este un obiect tabel și nu se actualizează în alte programe. Legătura cu zona sa se păstrează în fișier ca date de extensie, pe care CadCraft le citește, astfel că tabelul redevine activ când redeschideți desenul în CadCraft. Un DXF R12 al unui desen fără foaie nu păstrează setarea „netrasat” a stratului zonei.

Descompunerea unui tabel îl transformă în linii și text separate și încheie legătura.
