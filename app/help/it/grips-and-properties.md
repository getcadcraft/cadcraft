---
title: Modificare con grip e Proprietà
summary: Allungare, spostare e ridimensionare oggetti tramite i loro grip, e digitare lunghezze, raggi, angoli e coordinate esatte nel pannello Proprietà.
keywords: grip, proprietà, allunga, lunghezza, raggio, coordinate, modifica, proprietà rapide, tavolozza proprietà, cambia, layer, colore, color
from: f22541ba
---

## Obiettivo

Due modi rapidi per cambiare un oggetto senza un comando: trascinare i suoi **grip**, oppure digitare nuovi valori nel pannello **Proprietà** a destra.

## Grip

Quando si selezionano oggetti (fino a 200 alla volta) senza un comando in corso, su di essi compaiono piccoli quadratini. Questi sono i grip:

| Oggetto | Grip |
|---|---|
| Linea | Entrambe le estremità e il punto medio (sposta l'intera linea) |
| Cerchio | Il centro (lo sposta) e quattro punti sulla circonferenza (cambiano il raggio) |
| Arco | Il centro e le due estremità (cambiano dove inizia e finisce) |
| Polilinea | Ogni vertice |
| Testo, punto, riferimento a blocco | Il punto di inserimento |
| Ellisse | Il centro |
| Quota | I suoi punti di definizione e la posizione della linea di quota |
| Viewport | Il centro (lo sposta) e i quattro angoli (lo ridimensionano) |

### Spostare un grip

1. Disegnare una linea e fare clic su di essa. Compaiono tre grip.
2. Fare clic sul grip a un'estremità. La barra di stato indica "Fare clic dove deve andare questo grip (Esc per annullare). Snap e Ortho sono attivi."
3. Spostare il mirino. Un'anteprima lo segue.
4. Fare clic sulla nuova posizione, oppure agganciarsi a un punto di un altro oggetto e fare clic.

L'estremità si sposta e il resto della linea resta fermo. Si può anche premere su un grip e trascinarlo, poi rilasciarlo dove deve andare.

:::note
Non è possibile digitare una coordinata per un grip. Per una posizione esatta, agganciarsi a un punto oppure digitare il valore in Proprietà.
:::

Premere {{key:Esc}} o fare clic con il pulsante destro per annullare lo spostamento di un grip.

## Proprietà

Il pannello a destra mostra le proprietà di ciò che è selezionato.

1. Fare clic su una linea. L'intestazione del pannello riporta "Linea".
2. Fare clic in {{ui:Lunghezza}}, digitare `2500` e premere {{key:Enter}}.

La linea ora è lunga esattamente 2500, mantenendo il punto iniziale e l'angolo. {{key:Enter}} oppure un clic altrove applica un valore; {{key:Esc}} ripristina il valore precedente. Ogni modifica è un solo passo di annullamento, anche quando cambiano molti oggetti insieme.

I campi accettano espressioni (`=2*45`) e lunghezze con unità (`3'6"`, `900mm`), ogni punto ha X, Y e Z, e più oggetti possono essere modificati insieme. Tutto questo è descritto in [Il pannello Proprietà](topic:properties-panel).

## Errori comuni

- **Non compaiono grip.** È in corso un comando (premere {{key:Esc}}), oppure sono selezionati più di 200 oggetti, oppure l'oggetto è su un layer bloccato.
- **Il grip è finito nel punto sbagliato.** Uno snap l'ha agganciato. Tenere premuto {{key:Shift}} mentre si fa clic per ignorare gli snap.
- **Digitare in Proprietà non ha fatto nulla.** Premere {{key:Enter}} oppure fare clic altrove per applicare. Un valore non accettato (lunghezze e raggi zero o negativi, testo che non è un valore) rende rosso il campo e indica il motivo.
- **I caratteri digitati sono finiti in un campo Proprietà.** Mentre un campo ha il cursore, i tasti scrivono lì. Premere {{key:Enter}} oppure {{key:Esc}}, poi digitare il comando.
