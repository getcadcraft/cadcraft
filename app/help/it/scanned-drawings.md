---
title: Disegni scansionati e tracciamento
summary: Inserire un foglio scansionato, scalarlo e squadrarlo, ripulirlo, cancellarne parti, agganciarsi alle sue linee e tracciarlo in linee e archi.
keywords: scansione, disegno scansionato, raster, tiff, jpeg, png, scala, allinea, raddrizza, elimina macchie, soglia, bianco e nero, ritaglia, cancella, traccia, vettorializza, snap, archi, tratteggio, disegni su carta, disegni vecchi, scanattach, scantrace
from: 36227e5b
---

## Da un foglio di carta a oggetti di disegno

Un disegno scansionato è un'immagine. CadCraft conserva l'immagine fornita e non la modifica mai: ogni passo di pulizia crea una nuova immagine, con un passo di annulla per ciascuno, e {{cmd:SCANINFO}} elenca il file originale e i passi compiuti da allora. Non si invia nulla da nessuna parte e nulla viene stimato da un modello addestrato: la pulizia e il tracciamento sono normale elaborazione delle immagini, eseguita sul proprio computer.

1. **Inserirlo.** {{cmd:SCANATTACH}} legge un PNG, un JPEG, un TIFF (una pagina, oppure tutte le pagine di un file multipagina) o una pagina PDF che sia un'immagine. Chiede la pagina, l'angolo in basso a sinistra e la larghezza. Per una pagina PDF chiede anche quanti pixel per pollice usare per disegnare la pagina.
2. **Scalarlo.** {{cmd:SCANSCALE}}: scegliere due punti sulla scansione, poi digitare la distanza reale tra di essi. Il foglio viene scalato rispetto al primo punto.
3. **Allinearlo.** {{cmd:SCANALIGN}}: scegliere due punti sulla scansione e i due punti in cui devono trovarsi; il foglio si sposta e ruota per adattarsi, e viene scalato anche, a meno di rispondere No.
4. **Squadrarlo.** {{cmd:SCANDESKEW}} misura l'angolo con cui giacciono le linee lunghe del foglio, lo mostra insieme a quanto è sicuro. Accettarlo, oppure digitarne uno proprio, e il foglio viene ruotato. Un foglio con poche linee lunghe riceve un avviso: verificare l'angolo prima di accettarlo.
5. **Pulirlo.** {{cmd:SCANCLEAN}} rende il foglio in bianco e nero (Automatico uniforma prima la carta; Adattivo segue più da vicino le variazioni della carta; Livello usa un solo numero per tutto il foglio) e rimuove le macchie fino alla dimensione impostata.
6. **Ritagliarlo e cancellarne parti.** {{cmd:SCANCROP}} mantiene una finestra. {{cmd:SCANERASE}} cancella un rettangolo, un poligono o un lazo (premere e trascinare): timbri, note, un alone di caffè.

L'immagine pulita è ciò che un DWG salvato contiene (un IMAGE e il suo IMAGEDEF, con il file dell'immagine accanto al disegno, come per qualsiasi immagine).

## Agganciarsi alle linee della scansione

Con {{cmd:RASTERSNAP}} attivo (predefinito), anche gli snap a oggetto trovano le linee di una scansione in bianco e nero: estremità delle linee, loro punti medi, angoli e incroci, mostrati con i soliti segni di snap. La parte del foglio sotto il puntatore viene tracciata mentre ci si muove; ingrandire quanto basta perché un pixel corrisponda a pochi pixel dello schermo. Una linea più lunga della parte in tracciamento viene seguita fino alle sue estremità.

## Il tracciamento

{{cmd:SCANTRACE}} trasforma le linee del foglio in linee e archi su un nuovo layer (SCAN-TRACE), come un unico passo di annulla, con la scansione ancora sotto. Si impostano:

- **Tolleranza:** quanto una linea o un arco tracciato può discostarsi dalle linee della scansione, in unità di disegno (il rapporto riporta anche i pixel). Una tolleranza stretta segue ogni tremolio; una larga produce meno pezzi, più diritti.
- **Finestra:** un angolo del foglio, oppure l'intero foglio.
- **Archi:** disattivato produce solo linee.
- **Residui:** ciò che il tracciamento ha lasciato invariato viene disegnato come riquadri su un layer che si può spegnere, oppure non viene disegnato.

Il tracciamento trova il centro di ciascun tratto, lo segue, adatta ad esso linee rette e archi circolari, unisce i tratti che sono stati interrotti dove passava un'altra linea, rende esattamente orizzontali e verticali le linee quasi tali, e chiude gli angoli. **Testo e tratteggi restano raster:** i pezzi di dimensione simile a quella delle scritte vengono messi da parte, e i fasci di linee corte parallele vengono considerati tratteggio e messi da parte.

Al termine indica quante linee e archi sono stati creati, la tolleranza e quanti pezzi sono rimasti come raster. **Questo è ciò che i pixel hanno dato, con quella tolleranza; non è un'affermazione che il risultato sia corretto.** Confrontarlo con il foglio: un tracciamento può perdere una linea sbiadita, unire due linee molto vicine, o disegnare una linea dove c'è solo una macchia. Pulire prima la scansione (squadrata, in bianco e nero, senza macchie) e il risultato migliora molto.

## Cosa non legge

I file TIFF memorizzati a riquadri, i BigTIFF, i TIFF con compressione JPEG o deflate, la codifica fax Group 3 e i colori memorizzati su piani separati vengono rifiutati con un messaggio: salvarli di nuovo come strisce con compressione LZW, PackBits, Group 4 o senza compressione. Anche i file PNG interlacciati vengono rifiutati. I file oltre 128 MB o 100 milioni di pixel vengono rifiutati, e una finestra di tracciamento può contenere al massimo 64 milioni di pixel.
