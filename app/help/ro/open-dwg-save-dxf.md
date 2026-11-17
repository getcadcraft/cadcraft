---
title: Deschideți un DWG, editați-l și salvați o copie
summary: Deschideți un desen trimis de cineva, verificați ce a intrat, faceți o modificare și trimiteți înapoi o copie ca DWG sau DXF.
keywords: dwg, dxf, deschidere, import, export, salvare, r12, dus și întors, consultant, xref, verificare desen, saveas, salvare ca, salvare dwg, format
from: 49de4bf6
---

## Ce veți face

Deschideți un DWG de la un consultant, verificați ce a putut CadCraft să arate și ce nu, adăugați o notă, trasați o foaie în PDF și salvați o copie de trimis înapoi, ca DWG sau DXF.

## Deschideți fișierul

1. Apăsați {{key:Mod+O}}, sau faceți clic pe {{ui:Deschidere}}.
2. Alegeți fișierul `.dwg`.

Linia de stare arată „Se citește …” cât timp desenul este citit. Când s-a terminat, desenul umple ecranul, iar istoricul spune, de exemplu, „Deschis plan.dwg: 18,240 de obiecte pe 64 de straturi”, împreună cu cât a durat.

:::offline
Sunteți offline. Dacă butonul {{ui:Salvare pentru offline}} arată „Pregătit pentru offline”, fișierele DWG se deschid normal. Dacă nu, și niciun DWG nu a fost deschis încă în acest tab, deschiderea unui DWG poate eșua, pentru că cititorul DWG al CadCraft se descarcă odată cu primul DWG: deschideți un DXF, sau salvați CadCraft pentru utilizare offline data viitoare când sunteți online. Vezi [Lucrul offline](common:offline).
:::

## Verificați ce a intrat

1. Priviți secțiunea {{ui:Desen}} din panoul din stânga: formatul și versiunea, unitățile, numărul de obiecte și de straturi și foile.
2. Citiți caseta „Despre acest fișier” de sub ea, dacă există.

Caseta listează:

- **Încă neafișate:** obiecte pe care CadCraft nu le poate desena încă, după tip și număr. Sunt lăsate deoparte, nu ghicite.
- **Foile (layout-urile) au venit:** deschideți-le cu filele de sub desen.
- **Cote care au putut fi citite doar cum sunt desenate.**

3. Treceți prin filele de sub desen ca să vedeți fiecare foaie.
4. Verificați {{ui:Unități}} din {{ui:Setări curente}} (nimic selectat, fila {{ui:Model}}). Dacă scrie {{ui:Fără unități}}, dar știți că desenul este în milimetri, setați-le, ca scările foii și ale trasării să fie citite corect.

:::tip
Dacă așteptați o parte din desen și nu o vedeți, verificați panoul {{ui:Straturi}}: stratul poate fi oprit sau înghețat în fișier. Faceți clic pe numele lui ca să-l faceți curent; asta îl pornește.
:::

## Faceți modificarea

1. Creați un strat pentru notele dvs.: faceți clic pe {{ui:Strat nou}}, tastați `NOTES` și apăsați {{key:Enter}}.
2. Tastați `DT` și apăsați {{key:Enter}}.
3. Faceți clic unde merge nota.
4. Tastați o înălțime de text potrivită desenului (vezi [Adăugarea textului și a etichetelor](topic:text)) și apăsați {{key:Enter}}.
5. Apăsați {{key:Enter}} ca să păstrați rotația 0.
6. Tastați nota și apăsați {{key:Enter}}.
7. Apăsați din nou {{key:Enter}} ca să terminați.

Modificările cotelor importate sunt în regulă: de îndată ce modificați una, CadCraft o redesenează în stilul propriu.

## Trasați o foaie pentru revizuire

1. Faceți clic pe fila foii.
2. Apăsați {{key:Mod+P}}.
3. Faceți clic pe {{ui:Descărcare PDF}}.

Vezi [Trasare în PDF](topic:plot-pdf).

## Salvați o copie

1. Apăsați {{key:Mod+S}}, sau faceți clic pe {{ui:Salvare}}.

Ați deschis un DWG, deci browserul descarcă `<nume>.dwg`, în versiunea în care a venit DWG-ul. Istoricul spune, de exemplu, „Copie salvată ca Plan.dwg (DWG (AutoCAD 2018)).” și listează, pe rândurile de sub el, tot ce s-a schimbat pe drum.

2. Citiți acele rânduri înainte să trimiteți fișierul. [Ce păstrează și ce modifică un DWG](topic:files#what-a-dwg-keeps-and-changes) explică fiecare.

Originalul DWG nu se modifică niciodată. Fiecare salvare este o descărcare nouă.

## Salvați ca DWG sau DXF

Ca să alegeți formatul singur:

1. Apăsați {{key:Mod+Shift+S}}, sau faceți clic pe {{ui:Salvare ca}}.

Caseta {{ui:Salvare copie ca}} se deschide cu patru alegeri, fiecare cu numele de fișier pe care îl va primi: {{ui:DWG}}, cu lista ei {{ui:Versiune}}, {{ui:DXF R12}}, {{ui:DXF 2000}} și {{ui:DXF 2000 (binary)}}. Formatul și versiunea curente ale desenului sunt deja alese.

2. Faceți clic pe formatul dorit. Pentru DWG, alegeți versiunea pe care o folosește celălalt birou, sau una mai veche: AutoCAD 2018, 2013, 2010, 2007, 2004 sau 2000.
3. Faceți clic pe {{ui:Salvare}}.

Copia se descarcă. De acum înainte, {{key:Mod+S}} salvează acest desen în acel format, iar desenele noi încep și ele cu el, în acest browser. {{ui:Anulare}} sau {{key:Esc}} nu salvează nimic, iar istoricul spune „Nesalvat.”

Alegeți astfel:

- **DWG** păstrează cel mai mult: foi cu ferestrele lor de vizualizare, cote reale, modele de hașură, nume de straturi și blocuri așa cum le-ați scris, și text pe mai multe rânduri ca text pe mai multe rânduri. Versiunea AutoCAD 2000 se deschide în cele mai multe programe; 2004 și mai nou păstrează și culorile reale.
- **DXF 2000** este un fișier text care păstrează aproape tot ce păstrează un DWG: fiecare foaie ca layout cu ferestrele ei, cote reale, modele de hașură, culori reale, grosimi de linie, tipuri de linii și nume așa cum le-ați scris. Se deschide în AutoCAD 2000 și mai nou și în majoritatea programelor CAD. Liniile de indicație multiple devin liniile, vârfurile de săgeată și textul pe care le desenează. Un DXF deschis în versiunea 2000 sau mai nouă se salvează ca DXF 2000.
- **DXF 2000 (binary)** conține același conținut ca DXF 2000, în forma binară a formatului: un fișier mai mic, care păstrează fiecare număr exact. Fișierele DXF binare de la alte programe se deschid ca cele text, iar un desen deschis dintr-un DXF binar se salvează înapoi ca binar.
- **DXF R12** se deschide în aproape orice program CAD. Păstrează prima foaie cu ferestrele ei de vizualizare, plus celelalte foi ale CadCraft. Simplifică lucrurile mai noi, precum textul pe mai multe rânduri și hașurile.

## Ce va vedea celălalt birou

Într-un DWG:

- Linii, arce, cercuri, elipse, polilinii, text, text pe mai multe rânduri, blocuri cu atributele lor, umpleri pline, modele de hașură și straturi așa cum le vedeți.
- Cote reale: celălalt program le măsoară din nou când sunt întinse.
- Fiecare foaie, cu hârtia și ferestrele ei de vizualizare.
- Liniile de indicație multiple ca linii de indicație multiple. În versiunea AutoCAD 2000, culorile reale devin cea standard cea mai apropiată.

Într-un DXF R12:

- Linii, arce, cercuri, polilinii, text, referințe de bloc și cote așa cum le vedeți. Cotele rămân cote reale.
- Numele straturilor cu majuscule, cu spațiile înlocuite cu `_`.
- Prima foaie ca spațiu hârtie al desenului, cu ferestrele ei. Celelalte foi sosesc ca blocuri numite `CCLAYOUT_1` și așa mai departe; dacă au nevoie de fiecare foaie ca layout, trimiteți-le și PDF-uri trasate ale fiecărei foi.
- Text pe mai multe rânduri ca linii separate, elipse ca polilinii, hașuri ca contururi.

Oricum ar fi, orice este listat ca „Încă neafișate” când ați deschis DWG-ul **nu** este în copie, decât dacă istoricul spune că a fost păstrat: obiectele OLE ale unui DWG și solidele 3D din spațiul modelului sunt scrise înapoi când salvați ca DWG. Spuneți-le acest lucru și trimiteți și un PDF.

## Greșeli frecvente

- **„CadCraft deschide desene DWG și DXF.”** Fișierul are altă extensie. Verificați că este `.dwg` sau `.dxf`.
- **„Acest desen nu a putut fi citit.”** DWG-ul este deteriorat sau este într-o versiune pe care cititorul nu o gestionează. Cereți un DXF, sau DWG-ul salvat într-o versiune mai veche.
- **„Acest DXF binar se termină în mijlocul unui obiect.”** Fișierul este tăiat sau deteriorat. Tastați RECOVER ca să deschideți ce se poate citi, sau cereți fișierul din nou.
- **Fișierul salvat se numește `nume (1).dwg` sau `nume (1).dxf`.** Browserul face asta când un fișier cu același nume există deja în dosar.
- **Au un program mai vechi care nu poate deschide DWG-ul.** Salvați ca DWG cu {{ui:Versiune}} {{ui:AutoCAD 2000}}, sau ca {{ui:DXF R12}}: aproape orice program CAD îl deschide.
- **Lipsesc părți din desen.** Desenele legate (xref-urile) nu se încarcă până nu alegeți fișierele lor ({{cmd:XREF}}, `R`), iar imaginile apar ca cadre cu numele fișierelor lor.
