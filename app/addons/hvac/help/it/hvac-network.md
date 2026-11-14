---
title: HVAC: pressione nell'intera rete di canali
summary: DUCTNET segue i canali disegnati a partire dal ventilatore, calcola la pressione persa verso ogni estremità libera, il percorso critico, la serranda necessaria a ogni altra estremità e la pressione del ventilatore.
keywords: rete, pressione, percorso critico, pressione del ventilatore, serranda, bilanciamento, perdita nei raccordi, DUCTNET, DNET, pressione statica, sistema
from: b6f568fe
---

{{cmd:DUCTSIZE}} dimensiona una sola tratta. {{cmd:DUCTNET}} (`DNET`) analizza l'intero sistema disegnato.

1. Assegnare a ogni sezione la sua portata (la {{ui:Portata}} del canale, in cfm o L/s). L'estremità libera di una tratta riceve la portata della sezione in quell'estremità.
2. Digitare {{cmd:DUCTNET}} e fare clic sull'estremità della tratta dove si collega il ventilatore o l'unità di trattamento aria. Le estremità che toccano un'altra tratta sono collegate; le diramazioni si trovano dove una tratta termina su un'altra.
3. Riporta ogni estremità libera con la sua portata e la pressione persa lungo il percorso dal ventilatore, il **percorso critico** (l'estremità che perde di più), la **serranda** che ogni altra estremità richiede per bilanciarsi, e la **pressione del ventilatore**: il percorso critico più la pressione di batterie e filtri digitata con l'opzione {{ui:Apparecchiatura}} (dai dati dei costruttori).

L'attrito deriva dalla stessa formula di Colebrook usata per il dimensionamento. I raccordi (curve, il punto in cui cambia la dimensione, le derivazioni) usano un breve elenco di coefficienti predefiniti arrotondati: sono indicati come predefiniti, non come un database dei raccordi, e l'effetto camino è trascurato. Verificare il risultato con il progettista prima di farne affidamento.

Le sezioni troppo piccole per la loro portata, troppo veloci o troppo piatte sono elencate per tratta. I circuiti chiusi sono ignorati (il calcolo segue un albero) e viene segnalato. {{ui:Metodo}} alterna il controllo delle dimensioni tra perdita costante e limite di velocità. {{ui:Esporta}} › Pressione della rete di canali scrive ogni sezione in un file CSV.
