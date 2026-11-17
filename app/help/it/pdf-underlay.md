---
title: Sottofondi PDF e importazione PDF
summary: Mettere una pagina PDF sotto il disegno per tracciarla e stamparla, oppure trasformare linee e testo della pagina in oggetti del disegno.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, sottofondo, traccia, importa pdf, scansione, pianta, sfuma, ritaglio, layer, snap, apri pdf
from: aa301d0f
---

## Due modi per portare una pagina PDF nel disegno

- **Allega** ({{cmd:PDFATTACH}}) mantiene il PDF come immagine sotto il disegno. Si traccia sopra di esso, ci si aggancia con snap alle sue linee, lo si sfuma, lo si ritaglia, e viene stampato insieme alla tavola. Il disegno conserva solo il nome del file.
- **Importa** ({{cmd:PDFIMPORT}}) trasforma le linee, le curve, i riempimenti e il testo della pagina in normali oggetti del disegno, su layer con il nome del PDF. Sono modificabili, e dopo non serve più il PDF.

Aprendo un PDF con {{ui:Apri}} viene chiesto quale dei due usare.

## Allegare una pagina

1. Digitare `PDFATTACH` (o `PDFATT`) e scegliere il PDF. Se ha più pagine, digitare il numero della pagina.
2. Fare clic sul punto di inserimento (l'angolo inferiore sinistro della pagina).
3. Premere {{key:Enter}} per la dimensione reale della pagina, oppure digitare la scala: unità di disegno per punto PDF (un punto è 1/72 di pollice, quindi 0.3528 in un disegno in millimetri).
4. Premere {{key:Enter}} per nessuna rotazione, oppure digitare un angolo.

La pagina è un oggetto come un riferimento a blocco: si può spostare, ruotare, scalare, copiare, cancellare e mettere su un layer. Spegnendo il suo layer, scompare. Ingrandendo, la pagina viene ridisegnata nitida.

## Tracciare

Con {{ui:Snap}} attivo, il cursore si aggancia alle linee del PDF: punti finali, punti medi e intersezioni (e {{ui:Più vicino}} quando quello snap è attivo). Il testo disegnato come lettere sulla pagina non viene agganciato.

## Regolare

- `PDFADJUST`: **Sfumatura** (da 0 a 80 per cento), **Contrasto** (da 0 a 100), **Monocromatico**, e **Onoff** per nasconderlo senza cancellarlo.
- `PDFCLIP`: mostra solo un rettangolo o un poligono della pagina; **Elimina** rimuove il ritaglio.
- `PDFLAYERS`: un PDF può avere propri layer. Il comando li elenca; digitare un numero per attivare o disattivare quel layer solo per questo sottofondo. I layer che nel file risultano spenti partono spenti.

## Stampare e salvare

PLOT stampa la pagina come linee, riempimenti e testo (così resta nitida e ricercabile). Le immagini contenute nel PDF vengono mostrate a schermo ma non sono ancora stampate.

Un DWG o un DXF 2000 conserva il sottofondo come collegamento: il nome del file, la pagina, la posizione, la scala, la rotazione, il ritaglio, la sfumatura e il contrasto. Il PDF stesso non è nel disegno. Riaprire il disegno, digitare `PDF` e scegliere di nuovo il file; fino ad allora le pagine sono mostrate come cornici, e prendono la loro dimensione reale solo in quel momento. Il DXF più vecchio (R12) non ha sottofondi: conserva la cornice e il nome. Non è ancora stato verificato come altri programmi leggono il ritaglio e la scala salvati.

## Importare una pagina

1. Digitare `PDFIMPORT` (o `PDFIM`) e scegliere il PDF e la pagina.
2. Fare clic dove va l'angolo inferiore sinistro della pagina.
3. Premere {{key:Enter}} per la dimensione reale, digitare una scala, oppure scegliere **Due punti**: la pagina viene disegnata in dimensione reale, poi si fanno clic su due punti a una distanza nota e si digita la distanza reale; tutto viene scalato di conseguenza.

Le linee diventano linee e polilinee, cerchi e archi vengono riconosciuti, le forme piene diventano tratteggi solidi, e il testo diventa testo su un layer che termina con `-TEXT`. È un'unica operazione di annulla. Le immagini nel PDF non vengono importate: allegare invece la pagina. Una scansione (una pagina che è solo un'immagine) non ha linee da importare.

I PDF sono letti come file non attendibili: non viene eseguito alcuno script, e una pagina molto grande viene troncata, con un avviso.
