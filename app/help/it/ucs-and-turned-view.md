---
title: Ruotare la vista e usare coordinate proprie (UCS)
summary: Ruotare la vista di 90° o di un angolo qualsiasi senza spostare nulla nel disegno, e impostare un sistema di coordinate utente (UCS) in modo che punti, ortho, tracciamento polare, griglia e nuovo testo seguano gli assi propri di un edificio.
keywords: ucs, sistema di coordinate utente, pianta, ruota vista, rotazione vista, torsione vista, ucs z, ucs 3point, ucs oggetto, ucs globale, ucs con nome, ucsfollow, turnleft, turnright, turnworld, edificio inclinato, griglia ruotata
from: 6f152c65
---

## Cosa si imparerà

Come guardare un disegno ruotato, in modo che un edificio disegnato con un'inclinazione si legga dritto a schermo, e come digitare punti lungo i suoi assi propri. Niente nel disegno si sposta mentre lo si fa: gli oggetti mantengono le loro coordinate, una rotazione non è una modifica, e il disegno non viene segnato come modificato.

## Ruotare la vista di un quarto di giro

1. Fare clic su {{ui:Vista}} › {{ui:Altro}} › {{ui:Ruota la vista di 90° a sinistra}} oppure {{ui:Ruota la vista di 90° a destra}}.

Il disegno ruota a schermo attorno al centro dell'area di disegno. Ripetere per continuare a ruotare.

2. Fare clic su {{ui:Vista}} › {{ui:Altro}} › {{ui:Torna al globale}} per rimetterlo in piano.

I comandi dietro di essi sono {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} e {{cmd:TURNWORLD}}. Per assegnarne uno a un tasto, aggiungere una riga come `TL=TURNLEFT` agli alias con {{cmd:ALIASEDIT}}.

## Allinearsi con un edificio inclinato

1. Digitare `UCS` e premere {{key:Enter}}, poi `OB` e {{key:Enter}}.
2. Fare clic su una linea di parete vicino all'estremità che deve essere l'origine.

L'UCS ora parte da quell'estremità con l'asse X lungo la parete, e la vista ruota in modo che la parete sia in piano a schermo. L'icona degli assi nell'angolo in basso a sinistra mostra dove puntano gli assi dell'UCS.

3. Disegnare come al solito. Con l'UCS impostato:
   - `x,y` e `@dx,dy` sono misurati lungo gli assi dell'UCS; `d<a` misura l'angolo dall'asse X dell'UCS.
   - {{ui:Ortho}}, il tracciamento polare e la griglia seguono gli assi dell'UCS, e così il mirino.
   - Il nuovo testo e i nuovi paragrafi corrono lungo l'asse X dell'UCS; anche l'orizzontale e la verticale di {{cmd:DIMLINEAR}} lo seguono.
   - Le coordinate nella barra di stato e quelle di {{cmd:ID}} sono coordinate dell'UCS.
4. Per digitare un punto globale mentre un UCS è impostato, mettere `*` davanti: `*0,0` oppure `@*100,0`.
5. Digitare `UCS`, {{key:Enter}}, poi di nuovo {{key:Enter}} per tornare al globale.

## Altri modi per impostare un UCS

Al messaggio di {{cmd:UCS}}:

| Si digita | Cosa fa |
|---|---|
| un punto | Una nuova origine; poi fare clic su un punto del nuovo asse X, oppure premere {{key:Enter}} per mantenere l'angolo |
| `Z` | Ruota l'UCS attorno alla sua origine di un angolo che si digita (gradi, in senso antiorario) oppure che si sceglie |
| `3` (3point) | Un'origine, un punto lungo l'asse X positivo e un punto sul lato Y positivo |
| `OB` (OBject) | Da una linea, un arco, un cerchio, un segmento di polilinea, un testo, un riferimento a blocco, un punto o una linea di costruzione |
| `P` (Previous) | L'UCS precedente a questo (gli ultimi dieci vengono conservati mentre il disegno è aperto) |
| `W` (World) | Torna al globale |
| `NA` (NAmed) | `S` salva l'UCS corrente con un nome, `R` ne ripristina uno, `D` ne elimina uno, `?` li elenca |

Ogni modifica ruota la vista in modo che il nuovo asse X dell'UCS sia in piano. {{cmd:PLAN}} ruota la vista senza cambiare l'UCS: {{key:Enter}} per l'UCS corrente, `U` per uno salvato, `W` per il globale.

## Note utili

- Ogni riquadro di uno schermo diviso mantiene la propria rotazione. L'UCS appartiene al disegno.
- Le tavole lavorano in coordinate carta; impostare un UCS sulla scheda {{ui:Modello}}, oppure dentro una viewport.
- Le finestre di selezione trascinate in una vista ruotata selezionano ciò che si trova dentro di esse a schermo.
- Le routine LISP ricevono punti nell'UCS da `getpoint`, possono leggere `UCSORG`, `UCSXDIR`, `UCSYDIR` e `VIEWTWIST`, e `trans` converte tra globale, UCS e schermo.

:::note
Un file salvato conserverà l'UCS e la rotazione della vista in una versione successiva; fino ad allora durano finché il disegno è aperto.
:::
