---
title: Tubazioni: abaco delle tubazioni e dei raccordi
summary: Tubazioni per materiale e dimensione con lunghezza e peso dell'acciaio, ogni raccordo e valvola, e le quote di ogni tratta — nel disegno, in CSV o in TakeoffCraft.
keywords: abaco, abaco delle tubazioni, raccordi, valvole, lunghezza, peso, csv, takeoffcraft, computo, pacchetto, quantità
from: c852343a
---

## Una tabella nel disegno

Digitare {{cmd:PIPESCHED}}; la riga di comando riporta i totali e gli eventuali scarichi troppo piatti; fare clic dove va la tabella. Elenca le tubazioni per materiale, classe e dimensione con la loro lunghezza (e il peso, per l'acciaio), poi ogni raccordo e valvola per tipo e dimensione con quanti sono, e un totale. Si aggiorna da sola quando cambiano le tratte, nella stessa operazione di annulla.

La lunghezza della tubazione è misurata da centro a centro attraverso i raccordi, lungo la pendenza. Il peso dell'acciaio è il peso a estremità lisce della ASME B36.10M: 10.69 × (D − t) × t libbre per piede (0.0246615 × (D − t) × t chilogrammi per metro), quindi 20 ft di Schedule 40 da 2 in pesano 73.1 lb.

## Un file CSV

{{cmd:EXPORT}} › {{ui:Abaco delle tubazioni (CSV)}} scrive le tubazioni (materiale, dimensione, lunghezza, peso), i raccordi e le valvole (quantità), e ogni tratta (etichetta, sistema, materiale, lunghezza, quota alle due estremità e pendenza).

## In TakeoffCraft

- {{cmd:EXPORT}} › {{ui:Tubazioni per TakeoffCraft (PDF con il computo incorporato)}} stampa la pianta su un foglio a una scala standard e inserisce il computo nel PDF. Aprirlo in TakeoffCraft: una voce lineare per ogni dimensione di tubo, con un segno lungo ogni tratto di mezzeria (le tratte in pendenza misurate lungo la pendenza); una voce a conteggio per ogni raccordo e per ogni valvola, con un segno dove si trova, ognuna con il proprio numero CSI MasterFormat per sistema; la composizione della tubazione in acciaio riporta il suo peso. Nessun prezzo unitario: quelli li inserisce l'utente.
- {{cmd:EXPORT}} › {{ui:Composizioni delle tubazioni per TakeoffCraft (pacchetto)}} scrive le stesse voci senza quantità, come pacchetto per {{ui:Libreria}} › {{ui:Pacchetti di categoria}} › {{ui:Apri un file di pacchetto}}.
