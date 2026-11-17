---
title: Sostituzioni di classe nel viewport
summary: In una tavola, nascondere una classe o assegnarle un altro colore, spessore di linea o riempimento in un solo viewport; il modello e gli altri viewport restano invariati.
keywords: viewport, sostituzione di classe, sostituzione viewport, nascondi classe nel viewport, tavola, layout, VPLAYER, stampa, Vectorworks
from: c1a2b51f
---

Una tavola spesso mostra più volte lo stesso modello: una pianta con gli arredi e una senza, oppure una pianta dell'illuminazione in cui solo le luci sono colorate. Una sostituzione di classe nel viewport cambia il modo in cui una [classe](topic:classes) appare **solo in quel viewport**.

1. Aprire la tavola e selezionare un viewport.
2. Aprire il pannello Classi (`CLASSES`) e scegliere la classe.
3. Sotto {{ui:Questo viewport}}, spuntare {{ui:Nascondi in questo viewport}}, oppure impostare {{ui:Colore qui}}, {{ui:Spessore di linea qui}} o {{ui:Riempimento qui}}.

L'elenco qui sotto mostra ogni classe che questo viewport modifica. {{ui:Cancella le sostituzioni di questo viewport}} le toglie tutte. Ogni modifica è un solo passo di annullamento.

## Che cosa cambia una sostituzione

- **Nascondi** nasconde la classe e tutte le classi sotto di essa in questo viewport.
- **Colore, spessore di linea e riempimento** cambiano gli oggetti della classe il cui valore non è impostato sull'oggetto stesso, cioè gli oggetti che lo prendono per classe o per layer. Un oggetto con un proprio colore lo mantiene, come accade con una sostituzione di layer nel viewport.

Le sostituzioni si vedono a schermo e nelle stampe e nei PDF, incluso un set di tavole pubblicato in PDF. Funzionano insieme ai layer congelati del viewport e alle sue sostituzioni di layer.

Le sostituzioni sono salvate nel disegno in DWG e DXF (con l'elenco delle classi, nel blocco `CADCRAFT_CLASSES`) e tornano sullo stesso viewport quando il file viene aperto in CadCraft.
