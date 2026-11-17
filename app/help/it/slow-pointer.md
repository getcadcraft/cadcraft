---
title: Il puntatore salta o rimane indietro sul disegno
summary: Cosa fare quando il mirino non segue il mouse in modo fluido, su un computer più vecchio o più lento.
keywords: salto del cursore, ritardo del puntatore, mirino lento, cursore a scatti, computer vecchio, scheda grafica vecchia, grafica integrata, accelerazione hardware, puntatore più fluido, portatile lento
from: 39dc9057
---

CadCraft funziona nel browser (anche CadCraft Studio è una vista nel browser), quindi nulla al suo interno è pensato per una scheda grafica piuttosto che per un'altra. Il mirino è disegnato dall'app, il che significa che può muoversi solo alla velocità con cui l'app riesce a disegnare un fotogramma.

## Lasciare che CadCraft riduca gli extra

1. Aprire {{ui:Impostazioni}} (l'ingranaggio in alto a destra) e restare sulla scheda {{ui:CadCraft}}.
2. Scegliere {{ui:Puntatore più fluido sui computer lenti}}.
3. Selezionare {{ui:Acceso}}.

Con l'opzione attiva, al posto del mirino e della casella di selezione disegnati (e anche del mirino a schermo intero) viene usato il puntatore a croce del computer, e l'oggetto sotto il puntatore si illumina quando il puntatore è fermo invece che mentre si muove. Gli snap a oggetto, il tracciamento e l'elastico funzionano come prima.

{{ui:Automatica}} è il modo in cui CadCraft si avvia: osserva quanto durano i fotogrammi mentre si sposta il puntatore e attiva questa opzione da sola quando restano lenti per alcuni secondi. Lo segnala una volta. {{ui:Spento}} mantiene il mirino disegnato, qualunque sia la velocità.

## Se è ancora lento

- Verificare che l'accelerazione hardware sia attiva nel browser: aprire `chrome://gpu` (oppure `edge://gpu`) in una nuova scheda. Se le prime righe dicono "Software only" o "Disabled", il browser sta disegnando senza la scheda grafica. Aggiornare il driver della scheda grafica spesso risolve.
- Chiudere le altre schede e i programmi pesanti, e provare una finestra del browser più piccola.
- Segnalarlo tramite {{ui:Guida}}, {{ui:Segnala un problema}}: indicare se si usa il browser o CadCraft Studio, la sua versione e che cosa dice la pagina gpu.
