---
title: Usare parametri ed equazioni
summary: Assegnare nomi alle quote, guidarle con espressioni come larghezza / 2, e digitare un numero su una quota guidata per modificare ciò che la guida.
keywords: parametri, par, gestore parametri, equazioni, espressioni, variabili, bidirezionale, intento di progetto, parametro utente, fx
from: 650b9844
---

## Una tabella per ogni quota

Il pannello {{ui:Parametri}} (il pulsante {{ui:Parametri}} nel gruppo {{ui:Parametrico}}, oppure digitare {{cmd:PARAMETERS}}) elenca ogni vincolo dimensionale (`d1`, `rad1`, `dia1`, `ang1`, oppure il nome che gli è stato dato) e i propri parametri insieme. Ogni nome può essere usato in qualsiasi espressione.

Ogni riga contiene:

- **Nome**: digitarne uno nuovo per rinominarla; ogni espressione che lo usa lo segue.
- **Espressione**: un numero (`40`) oppure un'espressione (`larghezza / 2 + spazio`). Digitare e premere {{key:Enter}}: il disegno si aggiorna.
- **Valore**: il risultato del calcolo. Su una riga guidata da un'espressione, è possibile digitare anche un numero qui: CadCraft calcola il parametro che sta dietro. Con `d1 = larghezza / 2`, digitare `30` nel valore di d1 imposta `larghezza` a 60.

Quando due parametri guidano un valore (`larghezza / 2 + spazio`), una finestra chiede quale modificare. Ogni modifica è un singolo passo di annullamento ({{key:Mod+Z}}).

## Aggiungere i propri

1. Aprire il pannello {{ui:Parametri}}.
2. Digitare un nome (`spazio`) e un valore (`10`), quindi scegliere {{ui:Aggiungi}}.
3. Usarlo: nell'espressione di d1, digitare `larghezza / 2 + spazio` e premere {{key:Enter}}.

I nomi iniziano con una lettera o `_` e contengono lettere, cifre e `_`. I nomi di funzione, `pi` e i nomi di unità non possono essere usati come nomi.

## Espressioni

| Scrivere | Significa |
|---|---|
| `+ - * / ^ %` | addizione, sottrazione, moltiplicazione, divisione, potenza, resto |
| `( )` | raggruppamento |
| `sin cos tan asin acos atan atan2` | trigonometria in gradi |
| `sqrt pow exp ln log abs sign` | radici, potenze, logaritmi |
| `ceil floor int round min max` | arrotondamenti e limiti |
| `if(a > b, x, y)` | una scelta |
| `pi` | 3.14159… |

I numeri possono avere un'unità: `25mm`, `1in`, `2'`, `90deg`. Le lunghezze con unità vengono convertite in millimetri, quindi usare le unità solo in disegni misurati in millimetri; altrove digitare numeri semplici.

## Dalla riga di comando

`-PARAMETERS` fa lo stesso senza il pannello: `N` nuovo, `E` modifica (anche un vincolo dimensionale), `R` rinomina, `D` elimina, `?` elenca.

## Cosa viene rifiutato

- Un'espressione che usa se stessa, direttamente o attraverso altre: "larghezza, d1 si usano a vicenda."
- Un valore che una quota non può accettare: una lunghezza negativa, un angolo oltre 180°.
- Un valore che il disegno non può accettare con gli altri vincoli: nulla cambia, e il messaggio indica i vincoli che bloccano.
- Eliminare un parametro che qualcosa usa: il pannello offre di scrivere prima il suo valore in quelli che lo usano. Il nome di un vincolo dimensionale viene eliminato eliminando il vincolo.
