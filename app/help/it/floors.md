---
title: Sovrapporre i piani in un unico disegno
summary: Disegnare il primo piano sopra il piano terra alle stesse coordinate e spegnere ciascun piano, senza riferimenti esterni (xref).
keywords: piano, piani, FLOORS, FLR, FLOOR, FLOORLAYERS, livello, sovrapposizione, layer di progetto, spazio modello, sottofondo, xref
from: 7440fc87
---

I piani consentono di sovrapporre le planimetrie in un unico spazio modello. Ogni piano ha i propri oggetti, e i layer continuano a funzionare su tutti. Una parete su `P-Walls` può trovarsi su un qualsiasi piano.

## Avvio

Digitare `FLOORS` (`FLR`), oppure scegliere {{ui:Piani…}} nel menu {{ui:Altro}} del gruppo {{ui:Vista}}, poi scegliere {{ui:Inizia con i piani}}. Ciò che è stato disegnato finora finisce al piano terra.

## Disegnare su un piano

Scegliere il piano con il pulsante tondo nel pannello. I nuovi oggetti vanno su di esso.

Gli altri piani accesi appaiono sbiaditi sotto di esso. Si può usare lo snap su di essi, così il primo piano si allinea al piano terra, ma non si possono modificare finché non lo si rende il piano attivo. L'occhio spegne un piano. Le pareti si uniscono solo alle pareti del proprio piano.

Per avviare un piano a partire da quello sottostante, selezionare ciò che si vuole, scegliere il piano nel pannello e premere {{ui:Copia lì}}.

## Mettere i piani sulle tavole

Selezionare una viewport su una tavola e scegliere il suo piano sotto {{ui:Piano visualizzato}} in Proprietà. Una viewport senza piano scelto mostra tutti i piani accesi.

## Inviare il file ad altri

Gli altri programmi CAD non conoscono i piani, quindi mostrano tutti i piani insieme. Prima di inviare un file, scegliere {{ui:Trasforma i piani in layer}} nel pannello, oppure digitare `FLOORLAYERS`. Ogni oggetto passa su un layer che prende il nome del suo piano, per esempio `Piano terra-P-Walls`, così si può ancora spegnere ciascun piano. Annulla torna indietro. CadCraft conserva i piani nel file DWG o DXF che salva.
