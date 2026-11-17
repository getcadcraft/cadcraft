---
title: Documente și revizii (vault)
summary: Un parcurs pas cu pas printr-un proiect real: puneți un dosar de proiect sub control, extrageți un desen, modificați-l, depuneți-l cu o notă, trimiteți-l spre verificare, aprobați și eliberați-l, vedeți istoricul și ce îl folosește, ce vede a doua persoană cât timp este blocat și cum funcționează cu dosarele din cloud.
keywords: vault, documente, parcurs, tutorial, extragere, depunere, revizie, eliberare, aprobare, blocare, istoric, unde este folosit, dosar în cloud, dosar de proiect, gestionarea documentelor, pdm, două persoane, dosar partajat
from: 3829528d
---

## Ce veți face

Sunteți Ana și lucrați la Clinica Riverside împreună cu un coleg, Ben. Desenele proiectului se află într-un singur dosar la care ajungeți amândoi (o unitate partajată, un dosar sincronizat sau un dosar din cloud). Până la capăt, un fișier trece de la prima copie la o revizie eliberată **A**, este schimbat din nou ca **B.1**, vedeți cine a făcut ce și vedeți ce vede Ben atunci când țineți fișierul.

Totul se păstrează într-un dosar ascuns `.ccvault` lângă fișiere: nu există server și nimic nu se încarcă (un dosar din cloud este excepția, vezi ultimul pas). Pentru fiecare buton și regulă, într-un singur loc, vezi subiectul *Documente: extragere, revizii și eliberare*, acolo unde îl are aplicația.

## 1. Stabiliți dosarul de proiect

1. Alegeți {{ui:Documente…}} din meniul {{ui:Mai multe}} de pe fila **Vizualizare** sau tastați `DOCUMENTS` (sau `DOCS`) și apăsați {{key:Enter}}.
2. Alegeți {{ui:Alegeți dosarul de proiect}} și selectați dosarul care conține desenele proiectului. (Dosarele de proiect funcționează în Studio și în browserele care pot deschide un dosar, precum Chrome și Edge. În alte browsere, panoul o spune.)
3. Alegeți {{ui:Schimbare}} lângă **Utilizator:** și tastați numele, `Ana` (dacă întreabă, și numele acestui calculator). Panoul spune acum *Utilizator: Ana pe* și numele calculatorului. Numele apare pe tot ce faceți.
4. Alegeți {{ui:Pornire depozit în acest dosar}} și tastați numele proiectului, `Riverside clinic`. Panoul spune *Depozit pornit pentru Riverside clinic.*

## 2. Puneți un fișier sub control

1. Deschideți **Fișiere care nu sunt în depozit** și alegeți {{ui:Adăugare (A)}} lângă `plans/A-101.dxf`.
2. Fișierul apare sub **Fișiere în depozit**, la revizia **A.1**, cu starea **În lucru**. A.1 este prima sa copie; depozitul păstrează câte o copie din fiecare revizie.

## 3. Extrageți, modificați, depuneți

1. Alegeți {{ui:Deschidere}} lângă `plans/A-101.dxf`. Desenul se deschide în CadCraft, iar panoul se închide ca să îl vedeți. Panoul rămâne la o comandă distanță: `DOCUMENTS`.
2. Deschideți din nou panoul și alegeți {{ui:Extragere}}. Rândul spune acum **Extras pentru utilizatorul curent**. A fost creat un fișier de blocare în `.ccvault/locks`; nimeni altcineva nu poate extrage acest fișier până nu îl depuneți.
3. Desenați ceva: adăugați o linie, mutați un perete. Nimic din ce faceți nu poate fi salvat peste fișierul din depozit decât dacă desenul este extras pentru utilizatorul curent; Salvarea ca funcționează mereu pentru o copie proprie.
4. Deschideți panoul, alegeți {{ui:Depunere}} și scrieți ce s-a schimbat (`Moved the door`). Panoul spune *depus ca A.2*. Fișierul din dosarul de proiect este acum desenul care era deschis, iar blocarea a dispărut. Depunerea fără nicio modificare păstrează revizia.

Dacă renunțați, {{ui:Anulare extragere}} returnează fișierul fără o revizie nouă.

## 4. Verificare și eliberare

1. Alegeți {{ui:Trimitere spre verificare}}. Starea devine **Spre verificare**, iar fișierul devine doar pentru citire.
2. Înainte de aprobare, alegeți {{ui:Setările proiectului}} și scrieți cine poate aproba (un nume pe rând), de exemplu `Ben` și `Carla`, și bifați regula ca aprobatorul să fie altcineva decât autorul. Alegeți {{ui:Salvare setări}}. Acum depozitul însuși refuză pe oricine altcineva.
3. Ben (sau Carla) alege {{ui:Aprobare}} și tastează numele aprobatorului. Starea devine **Eliberat**, iar revizia devine **A**, cu *aprobat de* și numele. Un fișier eliberat este doar pentru citire. {{ui:Returnare}} l-ar fi trimis înapoi la În lucru, cu un motiv.

Numele aprobatorului este numele tastat în panou; este o evidență a cine a semnat, nu o dovadă a identității.

## 5. O revizie nouă

1. Pe fișierul eliberat, alegeți {{ui:Revizie nouă}}. Îl rezervați pentru litera următoare.
2. Modificați-l, apoi alegeți {{ui:Depunere}}. Revizia devine **B.1**, în lucru. Eliberați-o în același fel și devine **B**. {{ui:Anulare extragere}} înainte de prima depunere o lasă la **A**.

Literele de revizie merg A, B … Z, AA, AB. Dacă standardul folosit sare peste unele litere, setarea de proiect *Folosește secvența ASME Y14.35* sare peste I, O, Q, S, X și Z pentru reviziile următoare.

## 6. Vedeți ce s-a întâmplat

Alegeți numele fișierului ca să deschideți detaliile sale:

- **{{ui:Istoric}}**: fiecare eveniment, cel mai nou primul, cu cine, de pe ce calculator și când: *Depus A.2* de Ana, *Eliberat* de Ben și așa mai departe.
- **{{ui:Revizii}}**: tabelul reviziilor. {{ui:Deschidere copie}} deschide o revizie ca o copie simplă, care nu poate suprascrie fișierul din depozit; {{ui:Comparare cu}} listează ce a fost adăugat, șters și schimbat față de revizia dinainte sau față de oricare alta.
- **{{ui:Utilizări}}**: desenele la care leagă (xref-uri).
- **{{ui:Folosit de}}**: Folosit de listează fiecare alt desen din depozit care leagă de acesta: schimbați un plan de bază și știți ce foi să verificați.

## Revizia pe foaie

Cu desenul deschis (și cu o aranjare în pagină (Layout) în el), alegeți {{ui:Bloc de revizii}}: un tabel al reviziilor eliberate este desenat în colțul din dreapta-sus al foii. Alegeți {{ui:Completare cartușe}} ca să completați atributele cartușului marcate `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` sau `APPROVED_BY` cu revizia, starea, data și aprobatorul fișierului. Când aprobați următoarea eliberare, blocul de revizii se actualizează.

## 7. Ce vede Ben cât timp țineți fișierul

Acum extrageți din nou fișierul și rugați-l pe Ben să deschidă același dosar de proiect pe calculatorul lui și să deschidă panoul. Pe rândul fișierului el vede **Extras de Ana pe** calculatorul ei **din** momentul respectiv și nu vede niciun buton {{ui:Extragere}}. Dacă încearcă oricum, depozitul refuză: blocarea este un fișier pe care sistemul nu îl poate crea de două ori, deci două persoane nu pot ține amândouă fișierul, nici chiar în aceeași fracțiune de secundă, atunci când dosarul este pe disc în Studio. (Într-un browser, dosarul permite doar o încercare cât mai bună, iar panoul o spune la **Dosar**.)

Dacă Ana lipsește și Ben are nevoie de fișier, {{ui:Întrerupere extragere}} îl eliberează. El trebuie să scrie un motiv; acesta intră în jurnal împreună cu cine avea extragerea. Când proiectul are administratori enumerați, doar ei pot. O extragere mai veche decât limita de expirare (implicit 14 zile) este marcată *de mult timp*. După întrerupere, depunerea târzie a Anei este refuzată, astfel încât cei doi nu se pot suprascrie unul pe altul.

## 8. Dosare din cloud

Un dosar din cloud este un dosar de proiect păstrat în spațiul de stocare în cloud al echipei, astfel că echipa nu are nevoie de o unitate partajată. În Studio, conectat la contul CadCraft, panoul afișează {{ui:Deschideți un dosar în cloud}} lângă {{ui:Alegeți dosarul de proiect}}. Alegeți-l și selectați dosarul, listat ca spațiu de lucru / dosar. Proprietarul spațiului de lucru creează dosarul întâi, iar spațiul de stocare în cloud al echipei trebuie să fie activ. Totul de mai sus funcționează la fel; serverul face blocarea, iar aceasta este strictă între persoane. Dacă nu sunteți conectat, panoul cere să vă conectați. Într-un tab de browser obișnuit, butonul de cloud nu este oferit; folosiți Studio.

## Încercați

Parcurgeți cei opt pași de mai sus cu o copie a unui fișier real. Pentru pașii cu două persoane aveți nevoie de altă persoană sau de două ferestre cu două nume. Dacă încercați cu un dosar partajat real, pagina de testare comunitară are o verificare care cere exact asta și primește rezultate.
