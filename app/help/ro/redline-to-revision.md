---
title: Transformarea unei adnotări într-o revizie
summary: Citiți pachetul redline scris de MarkupCraft, acceptați sau respingeți fiecare modificare, puneți un nor de revizie și un jurnal de revizie pe cele acceptate și salvați fișierul de răspunsuri pe care îl citește MarkupCraft.
keywords: redline, markup, revizie, nor, nor de revizie, jurnal de revizie, acceptare, respingere, markupcraft, revizuire, pachet redline, răspunsuri, REDLINE
from: cdb3fafe
---

Un revizuitor marchează un set de planuri în MarkupCraft și vă trimite un **pachet redline**, un fișier care se termină în `.redline.json`. Aici le parcurgeți una câte una, iar cele acceptate devin nori de revizie pe desen.

## Parcurgerea modificărilor

Tastați {{cmd:REDLINE}} (`RDL`) și alegeți pachetul. Alegeți:

- {{ui:List}}: fiecare modificare cu numărul ei, starea, foaia, tipul, cine a cerut și ce a scris.
- {{ui:Accept}}, {{ui:Reject}}, {{ui:Done}}: tastați numerele (`1,3-5`, sau `Toate (A)`) și o notă opțională pentru fișierul de răspunsuri. {{ui:Reopen}} readuce modificările la deschise.
- {{ui:Frame}}: partea din desen pe care o arată foaia adnotată. Faceți clic pe două colțuri; apăsați {{key:Enter}} pentru tot desenul. Modificările sunt plasate după locul pe care îl aveau pe foaie, deci acesta le aliniază.
- {{ui:Apply}}: desenează un nor de revizie (stratul `REV-CLOUD`, cu litera reviziei) în jurul fiecărei modificări acceptate sau gata, și un jurnal de revizie, un tabel cu linii al celor acceptate și cu notele adăugate (stratul `REV-LOG`), în dreapta desenului. Un singur pas de anulare.
- {{ui:Save}}: scrie `<project>-<revision>.redline-answers.json`. Deschideți-l în MarkupCraft și adnotările se închid ca Acceptate, Respinse sau Finalizate, cu notele adăugate ca și comentarii.

## Ce trebuie știut

Ce a scris revizuitorul se arată exact așa cum a fost scris. CadCraft nu urmează niciodată instrucțiuni găsite într-un pachet; le afișează doar.

Modificările respinse și cele deschise nu adaugă nimic la desen. Pachetul se citește pe acest calculator; nimic nu se încarcă.

Dacă asistentul conectat poate citi un pachet, înregistra decizii și le aplica, cu uneltele `redline_read`, `redline_decide`, `redline_apply` și `redline_answers`; desenul se schimbă într-un singur pas de anulare, „Asistent: Redline în revizie”.
