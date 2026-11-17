---
title: Unire le modifiche di due persone allo stesso disegno
summary: Consentire a git, Fossil o Mercurial di unire due copie di un DWG o DXF oggetto per oggetto, usando la chiave che CadCraft conserva su ogni oggetto.
keywords: unisci, git, fossil, mercurial, controllo di versione, diff, conflitto, tre vie, unione CadCraft, chiave, gitattributes, DWG, DXF
from: 71482bf9
---

Due persone modificano lo stesso disegno. Se hanno cambiato oggetti diversi, l'unione può essere automatica: non c'è nulla da rifare a mano.

## Come funziona

CadCraft assegna a ogni oggetto disegnato una breve **chiave** che non cambia mai e non viene mai assegnata a due oggetti. Viene salvata con l'oggetto nel DWG o DXF (come dati aggiuntivi che gli altri programmi conservano). L'unione cerca gli oggetti tramite quella chiave, non in base alla loro posizione nel file, perché ogni programma rinumera le posizioni quando salva. Disattivare questa opzione in {{ui:Impostazioni}} › CadCraft › File compatibili con l'unione se non si esegue mai un'unione; i file diventano circa il 10 per cento più piccoli.

Un disegno salvato prima che esistessero le chiavi può comunque essere unito: i suoi oggetti ricevono una chiave in base alla loro posizione nel file, uguale per chiunque lo apra.

## Configurazione

Git richiede due righe una volta per repository:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# una sola volta, su ogni computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Senza git, eseguirlo a mano: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil e Mercurial usano gli stessi tre file nella propria impostazione dello strumento di unione.

## Le regole

- Un oggetto modificato solo da una parte viene preso. La stessa modifica da entrambe le parti viene presa una sola volta.
- La stessa proprietà modificata in due modi è un **conflitto**: resta la propria versione e il rapporto elenca entrambi i valori. Aprire il risultato, controllare quell'oggetto e correggerlo a mano.
- Un oggetto aggiunto da una delle due parti viene conservato. Un oggetto eliminato da una parte e non modificato dall'altra viene eliminato. Eliminato da una parte e modificato dall'altra: viene eliminato e segnalato.
- Layer, blocchi, stili di testo e di quotatura, tavole e viste salvate si uniscono allo stesso modo. I vincoli seguono gli oggetti che indicano.
- Il risultato viene scritto nello stesso formato e versione del file originale.

Non vengono uniti: l'ordine di disegno degli oggetti è quello della propria copia, seguito dagli oggetti aggiunti dall'altra parte. Modifiche alla stessa definizione di blocco su entrambe le parti sono un conflitto e non vengono mai mescolate. Non viene inviato nulla; tutto viene eseguito sul proprio computer.
