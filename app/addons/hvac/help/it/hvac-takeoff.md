---
title: HVAC: canali in TakeoffCraft
summary: Inviare l'abaco dei canali a TakeoffCraft come voci — un PDF della pianta con il computo incorporato, oppure le composizioni come pacchetto per il prezziario.
keywords: takeoffcraft, computo, stima, quantità, voci, pacchetto, prezziario, lamiera, pdf
from: 7289df5d
---

## Un PDF con il computo incorporato

{{cmd:EXPORT}} › {{ui:Canali per TakeoffCraft (PDF con il computo incorporato)}} stampa la pianta su un unico foglio (ARCH D o ISO A1, alla scala standard più grande che entra) e inserisce nel PDF un computo di TakeoffCraft. Aprire il PDF in TakeoffCraft: il programma propone il computo:

- una **voce lineare** per ogni forma, dimensione e materiale di canale, con un segno lungo ogni tratto rettilineo;
- una **voce a conteggio** per ogni raccordo e dimensione, con un segno dove si trova ciascuno;
- la **composizione** di ogni voce ha la sua **lamiera**: il perimetro del canale × L, oppure l'area del raccordo × N.

TakeoffCraft misura i segni alla scala del foglio, quindi le sue lunghezze sono quelle dell'abaco, e sul foglio si vede che cosa rappresenta ciascuna. La scala viene impostata e verificata sul tratto di canale più lungo. Le voci non hanno prezzi unitari: il prezzo va impostato dall'utente.

## Le composizioni come pacchetto

{{cmd:EXPORT}} › {{ui:Composizioni dei canali per TakeoffCraft (pacchetto)}} scrive le stesse voci senza quantità come pacchetto di TakeoffCraft (un file `.json`). In TakeoffCraft, aprire {{ui:Libreria}} › {{ui:Pacchetti di categoria}} › {{ui:Apri un file pacchetto}} per aggiungerle al prezziario. Ogni voce riporta la quantità che aveva nel disegno.
