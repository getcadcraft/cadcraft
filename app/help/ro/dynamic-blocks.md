---
title: Blocuri dinamice
summary: Ce face CadCraft cu blocurile dinamice dintr-un DWG: își păstrează numele reale, arată starea în care au fost salvate, schimbă stările de vizibilitate, arată celelalte valori și rămân dinamice la salvare.
keywords: bloc dinamic, blocuri dinamice, vizibilitate, stare de vizibilitate, întoarcere, întindere, căutare, parametri, personalizat, proprietăți bloc, blocuri *u, dinamic
from: dea2ee7c
---

## Ce funcționează

Un DWG făcut cu blocuri dinamice se deschide cu acestea funcționând până aici:

- **Numele lor reale.** Un bloc dinamic apare în panoul {{ui:Blocuri}} sub propriul nume („Receptacle”, „Sink”), nu ca bloc `*U` fără nume.
- **Starea în care au fost salvate.** Fiecare referință arată exact ce arăta celălalt program: starea de vizibilitate la care era setată, întinsă sau întoarsă cum a fost salvată.
- **Schimbarea stării de vizibilitate.** Selectați o referință (sau mai multe din același bloc), deschideți {{ui:Proprietăți}} și, în secțiunea {{ui:Personalizat}}, alegeți altă stare din lista {{ui:Vizibilitate}}. Referința arată imediat acea stare, la fel și atributele ei: cele pe care le ascunde starea dispar, cele pe care le arată apar cu valorile lor. O referință păstrează toate valorile, astfel încât nimic nu revine gol; {{ui:Proprietăți}} listează cele ascunse, marcate „ascuns”. {{key:Mod+Z}} readuce starea veche dintr-un pas.
- **Mânerele.** Un bloc dinamic selectat arată propriile mânere acolo unde se află parametrii: un mic triunghi pentru starea de vizibilitate (faceți clic pentru lista stărilor), săgeți la capetele unei distanțe, o săgeată dublă pentru o întoarcere. Doar mânerul de vizibilitate acționează acum; celelalte spun asta în bara de stare.
- **Celelalte valori, doar citire.** Sub lista de vizibilitate, {{ui:Personalizat}} arată și distanțele, unghiurile de aliniere, stările de întoarcere și punctele blocului, așa cum le are desenul.
- **Editarea stărilor de vizibilitate.** Deschideți blocul cu {{cmd:BEDIT}}: editorul arată o stare, numită în bara de deasupra desenului (alegeți alta acolo). Tastați {{cmd:BVSTATE}} pentru a comuta, adăuga (ascunzând totul, arătând totul sau păstrând ce se vede), redenumi sau șterge o stare; {{cmd:BVHIDE}} ascunde obiectele selectate în starea care se vede; {{cmd:BVSHOW}} arată obiectele ascunse, estompate, ca să faceți clic pe cele care trebuie readuse. Salvați blocul: referințele setate pe o stare redenumită o păstrează sub noul nume, iar cele setate pe o stare ștearsă arată prima stare.
- **Rămân dinamice.** Salvate ca DWG în versiunea în care a venit desenul, blocurile rămân dinamice, cu starea aleasă: celălalt program le deschide ca aceleași blocuri dinamice. Stările de vizibilitate editate se salvează și ele: noile nume, stările adăugate și ce arată fiecare.

## Ce este doar citire sau încă nu există

| Încă nu există | În schimb, azi |
|---|---|
| Schimbarea distanțelor, unghiurilor sau întoarcerilor (acțiuni de întindere, mutare, întoarcere) | Apar doar pentru citire în {{ui:Personalizat}}; se editează în programul care a creat blocul. |
| Parametrii de căutare, XY, de rotație și polari | Nu sunt citiți încă: referința apare așa cum a fost salvată. |
| Tragerea mânerelor de distanță, de întoarcere și de punct | Ele arată unde sunt parametrii; mânerul de vizibilitate și lista {{ui:Vizibilitate}} din Proprietăți schimbă stările. |
| Crearea blocurilor dinamice de tipul celuilalt program (întindere, întoarcere, căutare) | Blocurile făcute în CadCraft sunt blocuri simple; {{cmd:BPARAMETER}} o spune. Parametrii proprii și mai mulți parametri de vizibilitate se află în managerul de parametri (vedeți „Parametrii și stările de vizibilitate proprii” de mai jos). |
| Adăugarea sau ștergerea obiectelor unui bloc cu stări de vizibilitate în editorul de blocuri | Blocul se salvează atunci ca bloc simplu (editorul o spune la închidere). |
| Păstrarea lor dinamice într-o altă versiune DWG sau în DXF | Se salvează ca blocuri simple care arată starea aleasă, iar salvarea o spune. |

:::note
Mutarea sau modificarea obiectelor în {{cmd:BEDIT}} păstrează un bloc cu stări de vizibilitate dinamic. Un bloc fără stări, sau unul ale cărui obiecte au fost adăugate sau șterse în editor, devine bloc simplu.
:::

## Parametrii și stările de vizibilitate proprii

Un bloc făcut în CadCraft poate avea propriii parametri și **mai mulți** parametri de vizibilitate, fiecare cu propriile stări. Tastați {{cmd:BPARAMS}} (sau `BPM`) ca să deschideți **managerul de parametri** pentru blocul editat în {{cmd:BEDIT}}, pentru blocul referinței selectate sau pentru blocul pe care îl numiți.

- **Parametri**: un nume, un tip (număr, lungime, unghi, număr întreg, da/nu) și o valoare sau o formulă peste alți parametri (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Rezultă}} arată rezultatul. O formulă care nu funcționează sau o valoare care nu se potrivește tipului său (o cantitate de 1.5) este refuzată, iar managerul spune de ce; nimic altceva nu se schimbă.
- **Parametri de vizibilitate**: {{ui:Adăugare parametru de vizibilitate}} creează unul cu o primă stare. Fiecare stare poate fi redenumită, eliminată (ultima rămâne) sau primi un număr „se arată când”. O formulă alege starea după parametri (starea al cărei număr se potrivește, altfel starea de la locul ei din listă); fără formulă, fiecare referință își alege singură starea.
- **Punerea obiectelor într-o stare**: în editorul de blocuri selectați obiectele, tastați {{cmd:BPARAMS}} și faceți clic pe {{ui:Puneți obiectele selectate aici}} de pe stare. Obiectele pe care nici un parametru de vizibilitate nu le listează se arată mereu.
- **Această referință**: pornit de la o referință selectată, managerul arată și valorile și stările proprii ale acelei referințe.

În afara editorului de blocuri, fiecare modificare este un pas de anulare. În editorul de blocuri, modificările aparțin editorului: {{ui:Salvare bloc}} le păstrează. `-BPARAMS` cere același lucru în linia de comandă.

**În fișier.** DWG și DXF păstrează parametrii, obiectele care sunt în fiecare stare și valorile proprii ale fiecărei referințe, în înregistrările proprii ale CadCraft; deschideți din nou fișierul în CadCraft și totul revine. Un alt program vede fiecare referință ca blocul cu toate obiectele sale, deoarece un DWG are cel mult un parametru de vizibilitate pe bloc din tipul său. O referință pe care alt program a mutat-o, sau un bloc ale cărui obiecte le-a modificat, revine fără părțile care nu mai se potrivesc (nimic nu este ghicit).
