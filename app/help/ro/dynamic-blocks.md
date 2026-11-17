---
title: Blocuri dinamice
summary: Ce face CadCraft cu blocurile dinamice dintr-un DWG. Își păstrează numele adevărate, arată starea în care au fost salvate, comută stările de vizibilitate, arată celelalte valori și rămân dinamice la salvare.
keywords: bloc dinamic, blocuri dinamice, vizibilitate, stare de vizibilitate, răsturnare, întindere, căutare, parametri, personalizat, proprietăți bloc, *u blocuri, dinamic
from: 26b6aa80
---

## Ce funcționează

Un DWG făcut cu blocuri dinamice se deschide cu acestea funcționând până aici:

- **Numele lor adevărate.** Un bloc dinamic apare în panoul {{ui:Blocuri}} sub propriul nume („Receptacle”, „Sink”), nu ca un bloc nenumit `*U`.
- **Starea în care au fost salvate.** Fiecare referință arată exact ce arăta celălalt program: starea de vizibilitate la care era setată, întinsă sau răsturnată, așa cum a fost salvată.
- **Comutarea stării de vizibilitate.** Selectați o referință (sau mai multe ale aceluiași bloc), deschideți {{ui:Proprietăți}} și, în secțiunea {{ui:Personalizat}}, alegeți altă stare din lista {{ui:Vizibilitate}}. Referința arată acea stare imediat, la fel și atributele ei: cele pe care le ascunde starea dispar, cele pe care le arată apar cu valorile lor. O referință păstrează toate valorile, deci nimic nu revine gol; {{ui:Proprietăți}} listează cele ascunse, marcate „ascuns”. {{key:Mod+Z}} readuce starea veche într-un singur pas.
- **Mânerele.** Un bloc dinamic selectat arată propriile mânere acolo unde sunt parametrii lui: un mic triunghi pentru starea de vizibilitate (faceți clic pe el pentru lista stărilor), săgeți la capetele unei distanțe, o săgeată dublă pentru o răsturnare. Doar mânerul de vizibilitate acționează astăzi; celelalte o spun în bara de stare.
- **Celelalte valori, doar citire.** Sub lista de vizibilitate, {{ui:Personalizat}} arată și distanțele blocului, unghiurile de aliniere, stările de răsturnare și punctele, așa cum le are desenul.
- **Editarea stărilor de vizibilitate.** Deschideți blocul cu {{cmd:BEDIT}}: editorul arată o stare, numită în bara de deasupra desenului (alegeți alta acolo). Tastați {{cmd:BVSTATE}} ca să comutați, să adăugați (ascunzând totul, arătând totul sau păstrând ce se vede), să redenumiți sau să ștergeți o stare. {{cmd:BVHIDE}} ascunde obiectele selectate în starea care se vede; {{cmd:BVSHOW}} arată cele ascunse, estompate, ca să faceți clic pe cele de readus. Salvați blocul: referințele setate la o stare redenumită o păstrează sub noul nume, iar cele setate la o stare ștearsă arată prima stare.
- **Rămân dinamice.** Salvate ca DWG în versiunea în care a venit desenul, blocurile rămân dinamice, cu starea aleasă; celălalt program le deschide ca aceleași blocuri dinamice. Stările de vizibilitate editate sunt salvate și ele: noile nume, stările adăugate și ce arată fiecare.

## Ce este doar citire sau încă nu există

| Încă nu există | Între timp |
|---|---|
| Modificarea distanțelor, unghiurilor sau răsturnărilor (acțiuni de întindere, mutare, răsturnare) | Se afișează doar citire în {{ui:Personalizat}}; editați în programul care a făcut blocul. |
| Parametrii de căutare, XY, de rotație și polari | Nu sunt citiți încă: referința apare așa cum a fost salvată. |
| Tragerea mânerelor de distanță, răsturnare și punct | Arată unde sunt parametrii; mânerul de vizibilitate și lista {{ui:Vizibilitate}} din Proprietăți comută stările. |
| Crearea blocurilor dinamice (adăugarea parametrilor sau a stărilor de vizibilitate unui bloc care nu le are) | Blocurile făcute în CadCraft sunt blocuri simple; {{cmd:BPARAMETER}} o spune. |
| Adăugarea sau ștergerea obiectelor unui bloc cu stări de vizibilitate în editorul de blocuri | Blocul este atunci salvat ca bloc simplu (editorul o spune la închidere). |
| Păstrarea lor dinamice într-o altă versiune DWG sau în DXF | Sunt salvate ca blocuri simple, care arată starea aleasă, iar salvarea o spune. |

:::note
Mutarea sau modificarea obiectelor în {{cmd:BEDIT}} păstrează dinamic un bloc cu stări de vizibilitate. Un bloc fără stări, sau cu obiecte adăugate sau șterse în editor, devine bloc simplu.
:::
