---
title: Disegnare il testo con i propri font SHX
summary: Indicare a CadCraft una cartella di font SHX (o sceglierne i file) e gli stili di testo che li nominano vengono disegnati con essi, a schermo e in stampa o PDF, con altezza, fattore di larghezza e inclinazione dello stile.
keywords: shx, font, font a forme, big font, bigfont, unifont, legacy, persiano, farsi, arabo, stile di testo, font mancante, font sostituito, SHXFONTS, cartella, inverti, ordine visivo, simplex, isocp
from: 14b0a4ab
---

Molti disegni di altri programmi nominano **font SHX** negli stili di testo, e un DWG non ne contiene le copie. Senza il font, CadCraft disegna quel testo con il proprio carattere, il che va bene per il testo latino ordinario ma non per i vecchi font che associano codici di caratteri semplici ad altre forme di lettere, come le vecchie annotazioni in persiano.

Fornire a CadCraft i font, e lui li userà per disegnare il testo.

## Caricare i propri font

Digitare {{cmd:SHXFONTS}} (`SHX`) e scegliere:

- {{ui:Cartella}} (CadCraft Studio): scegliere una cartella. Ogni file `.shx` in essa viene letto subito, e di nuovo a ogni avvio di CadCraft.
- {{ui:File}} (il browser): scegliere uno o più file `.shx`. Restano in questo browser e non vengono mai caricati.
- {{ui:Elenca}}: i font caricati, e quelli che il disegno aperto nomina ma che non sono stati caricati.
- {{ui:Rimuovi}} e {{ui:Cancella}}: dimenticare un font, oppure tutti.

CadCraft non può includere font di terze parti, quindi non ne fornisce mai: vengono dall'utente. Un disegno si limita a nominare i propri font, e non ne conserva una copia.

## Cosa succede

Il nome del font di uno stile di testo viene abbinato a un font caricato per nome, senza considerare maiuscole, cartella e `.shx` (`SIMPLEX.SHX` trova `simplex`). Un testo in uno stile del genere viene disegnato come linee, a schermo, in stampa e in PDF, nella sua posizione, altezza, rotazione, fattore di larghezza e angolo di inclinazione. La sua larghezza è quella del font, quindi l'allineamento {{ui:Centro}} e {{ui:Destra}}, il ritorno a capo e la selezione corrispondono a ciò che si vede. Uno stile il cui font non è caricato mantiene il carattere integrato, e quando si apre un disegno che nomina font non caricati, la riga di comando lo segnala.

Anche lo stile Standard conta: un disegno il cui stile Standard nomina un font proprio lo mantiene.

## Font già in ordine visivo

Molti vecchi font SHX persiani e arabi contengono lettere già formate per lo schermo e disegnate da sinistra a destra, quindi un testo digitato nell'ordine logico esce al contrario. Digitare {{cmd:SHXFONTS}}, scegliere {{ui:Inverti}} e indicare il font: il suo testo viene poi disposto con l'ultima lettera per prima. Eseguirlo di nuovo per annullare. L'impostazione appartiene al font, viene conservata in questo browser e non viene salvata nel disegno.

## Cosa non è ancora coperto

- Il testo con codici di formato in linea (colori, pile in un MTEXT) resta nel carattere integrato.
- I big font (del tipo a doppio byte) sostituiscono i codici che il font principale non ha, ma un testo in una pagina di codice dell'Asia orientale che CadCraft ha già convertito in Unicode non viene riportato ai codici a doppio byte del font.
- Il lettore dei font segue la descrizione pubblicata del formato ed è stato provato su font fatti per CadCraft. Se uno dei propri disegna in modo errato, inviare il font e il disegno al supporto.
