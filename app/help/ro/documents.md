---
title: Documente, extragere, revizii și lansare
summary: Țineți sub control desenele unui dosar de proiect. Extrageți un fișier ca nimeni altcineva să nu-l modifice, depuneți-l ca revizie nouă, trimiteți-l spre verificare și lansați-l cu numele unui aprobator. Istoric, ce folosește ce, listă de materiale și cartușe care arată revizia.
keywords: setările proiectului, aprobatori, administratori, litere de revizie, ASME, doar citire, compararea reviziilor, deschidere copie, partcraft, bimcraft, documents, DOCUMENTS, DOCS, depozit, gestionarea documentelor, pdm, extragere, depunere, checkout, checkin, blocare, revizie, rev, literă de revizie, lansare, lansat, aprobare, verificare, învechit, unde este folosit, bom, listă de materiale, cartuș, bloc de revizii, dosar de proiect
from: ee938722
---

## Ce se realizează

Un dosar de proiect în care fiecare desen are o revizie (A.1, A.2 … apoi A, B …) și o stare (În lucru, Pentru verificare, Lansat, Învechit), în care o singură persoană o dată poate modifica un fișier și în care fiecare extragere, depunere, aprobare și extragere întreruptă este consemnată cu cine a făcut-o și când.

Totul este păstrat în dosarul în sine, într-un dosar ascuns `.ccvault` lângă desene. Un dosar de pe o unitate partajată sau un dosar sincronizat funcționează pentru o întreagă echipă. Nu există server și nimic nu este încărcat.

## Deschiderea Documente

Tastați `DOCUMENTS` (sau `DOCS`) și apăsați {{key:Enter}}. Panoul se deschide lângă desen.

Alegeți {{ui:Alegeți dosarul de proiect}} și selectați dosarul care conține desenele proiectului. Dosarele de proiect funcționează în CadCraft Studio și în browserele care pot deschide un dosar (Chrome, Edge). În celelalte browsere, panoul spune acest lucru.

Prima dată, introduceți numele (acesta apare la tot ce faceți) și numele acestui calculator. Dacă sunteți conectat, numele este deja completat.

## Pornirea unui depozit

Un dosar care nu este încă depozit oferă {{ui:Pornire depozit în acest dosar}}. Introduceți numele proiectului. Apoi deschideți {{ui:Fișiere care nu sunt în depozit}} și alegeți {{ui:Adăugare (A)}} lângă fiecare fișier pe care doriți să-l puneți sub control. Un fișier adăugat începe la revizia **A.1**, În lucru.

## Modificarea unui desen

1. Alegeți {{ui:Deschidere}} lângă un desen. Se deschide în CadCraft. Dacă nu este extras pe numele utilizatorului curent, desenul poate fi doar vizualizat: {{ui:Salvare}} refuză să-l suprascrie și spune de ce (folosiți {{ui:Salvare ca}} ca să păstrați o copie proprie).
2. Alegeți {{ui:Extragere}}. Nimeni altcineva nu îl mai poate extrage acum; panoul arată cine îl are, de pe ce calculator și din ce moment.
3. Desenați.
4. Alegeți {{ui:Depunere}} și precizați ce s-a schimbat. Desenul deschis este salvat în dosarul de proiect, în propriul său format, și devine următoarea revizie (A.1, apoi A.2). Depunerea fără nicio modificare păstrează revizia.

{{ui:Anulare extragere}} returnează fișierul fără o revizie nouă.

## Verificare și lansare

- {{ui:Trimitere spre verificare}}: fișierul este doar pentru citire cât timp este verificat.
- {{ui:Aprobare}}: introduceți numele aprobatorului. A.3 devine **A**, Lansat. Fișierele lansate sunt doar pentru citire.
- {{ui:Returnare}}: revine la În lucru, cu motivul.
- {{ui:Revizie nouă}} la un fișier lansat îl extrage pentru litera următoare: prima sa depunere este **B.1**. {{ui:Anulare extragere}} înainte de aceasta îl lasă la A.
- {{ui:Marcare ca învechit}} retrage un fișier lansat.

Un proiect poate păstra o listă cu cine poate aproba și poate cere ca aprobatorul să nu fie persoana care a depus fișierul (vezi Setările proiectului mai jos).

## Setările proiectului

Deschideți {{ui:Setările proiectului}} în panou:

- **Aprobatori**: un nume pe rând. Dacă există, doar ei pot aproba o lansare.
- **Aprobatorul trebuie să fie altcineva decât autorul**: regula „patru ochi”.
- **Administratori**: un nume pe rând. Dacă există, doar ei pot întrerupe extragerea altcuiva sau pot modifica aceste setări.
- **Litere de revizie de omis**: {{ui:Utilizare secvență ASME Y14.35}} sare peste I, O, Q, S, X și Z, sau introduceți propriile litere. Literele deja date rămân; alegerea se aplică reviziilor următoare.
- **O extragere devine veche după**: numărul de zile (implicit 14).

Alegeți {{ui:Salvare setări}}. Modificarea este scrisă în jurnal, împreună cu cine a făcut-o.

## Cineva a lăsat un fișier extras

{{ui:Întrerupere extragere}} eliberează un fișier extras de altcineva (este plecat sau calculatorul i s-a defectat). Trebuie să introduceți un motiv: el este scris în jurnal, împreună cu extragerea căreia îi aparține. Când proiectul are administratori, doar ei pot face acest lucru. O extragere mai veche de 14 zile este marcată ca fiind veche.

## Istoric, revizii, utilizări, folosit de

Alegeți numele unui fișier pentru a vedea:

- {{ui:Istoric}}: fiecare eveniment, cel mai recent primul, cu cine, pe ce calculator și când.
- {{ui:Revizii}}: fiecare revizie păstrată. O copie a fiecărei revizii se află în depozit (același conținut este păstrat o singură dată). {{ui:Deschidere copie}} deschide acea revizie ca o copie simplă, care nu poate suprascrie fișierul din depozit. {{ui:Comparare cu}} listează ce a fost adăugat, eliminat și modificat între acea revizie și cea dinaintea ei (sau oricare alta pe care o alegeți) și îl colorează pe desen.
- {{ui:Utilizări}}: desenele la care se leagă (xref), documentele la care indică un model IFC, piesele unui ansamblu PartCraft.
- {{ui:Folosit de}}: fiecare fișier din depozit care folosește acesta.

{{ui:Listă de materiale (CSV)}} salvează lista tuturor elementelor folosite de un fișier, nivel cu nivel, cu cantități, revizii și stări, pentru o foaie de calcul.

## Un bloc de revizii pe foaie

Cu un desen deschis care are o aranjare în pagină (Layout), alegeți {{ui:Bloc de revizii}}. Un tabel cu reviziile lansate (revizie, dată, de către, aprobat, descriere) este desenat în colțul din dreapta sus al foii pe care o vizualizați. Când aprobați o lansare, tabelul este actualizat.

## Revizia în cartuș

Dați atributelor cartușului unul dintre aceste etichete și alegeți {{ui:Completare cartușe}} pe desenul deschis:

| Etichetă | Completată cu |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | revizia (B, sau B.2 cât timp este lucrată) |
| `VAULT.STATE` | starea (Lansat …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | data ultimei revizii |
| `VAULT.APPROVER`, `APPROVED_BY` | cine a aprobat ultima lansare |

## PartCraft și BimCraft

PartCraft și BimCraft au același panou Documente pentru fișierele lor: piese și ansambluri în PartCraft, modele IFC în BimCraft. Depunerea salvează modelul deschis în dosarul de proiect, iar un ansamblu arată ce piese folosește și o listă de materiale.

## De reținut

- Două persoane din același dosar partajat nu pot extrage amândouă același fișier: extragerea este un fișier pe care sistemul refuză să-l creeze de două ori. Într-un browser, și într-un Studio a cărui versiune este mai veche decât această funcție, aceasta este atât de strictă cât permite dosarul: două extrageri în aceeași fracțiune de secundă ar putea reuși amândouă. Panoul spune care dintre situații se aplică.
- Nu editați și nu ștergeți manual dosarul `.ccvault`. Jurnalul din el este evidența; depozitul își reface lista din el, dacă este nevoie.
- Modificarea unui fișier din dosar fără extragere este afișată ca {{ui:Modificat în dosar fără extragere}}.
