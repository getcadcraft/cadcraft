---
title: Agganciare punti sugli oggetti
summary: Usare gli snap a oggetto, Ortho e la griglia per scegliere con il mouse punti finali, punti medi, centri e intersezioni esatti.
keywords: osnap, snap a oggetto, punto finale, punto medio, centro, intersezione, perpendicolare, quadrante, punto più vicino, nodo, inserimento, ortho, griglia, f3, f8, f7, tracciamento polare, polare, polarang, tracciamento snap a oggetto, otrack, traccia, f10, f11
from: 3cf17f94
---

## Cosa si realizza

Un rettangolo con le sue due diagonali, un cerchio centrato dove si incrociano, e una linea dal punto medio di un lato del rettangolo fino al cerchio. Ogni punto si sceglie con il mouse, e ogni punto è esatto.

## Come funziona l'aggancio

Mentre un comando chiede un punto, CadCraft cerca punti di aggancio entro circa 10 pixel dal mirino. Quando ne trova uno, compaiono un marcatore e un'etichetta ("Punto finale", "Intersezione"), e un clic cade **esattamente** su quel punto, non dove si trova il mirino.

Gli snap sono attivi quando {{ui:Snap}} nella barra di stato è premuto. {{key:F3}} li attiva e disattiva.

Gli snap utilizzabili sono:

| Snap | Si aggancia a |
|---|---|
| Punto finale | Le estremità di linee, archi e segmenti di polilinea |
| Punto medio | Il punto di mezzo di linee, archi e segmenti di polilinea |
| Centro | Il centro di cerchi e archi, e dei segmenti ad arco di polilinea |
| Quadrante | I punti a 0, 90, 180 e 270 gradi di cerchi e archi |
| Intersezione | Dove due oggetti si incrociano |
| Perpendicolare | Il punto sull'oggetto perpendicolare all'ultimo punto (richiede un punto base) |
| Tangente | Il punto su un cerchio o un arco in cui una linea dall'ultimo punto lo tocca appena. Senza un ultimo punto (primo punto di una linea), il marcatore dice "differito": il punto di contatto viene calcolato quando si conosce il punto successivo, così una linea da Tangente a Tangente tocca entrambi i cerchi |
| Punto più vicino | Il punto più vicino su un oggetto qualsiasi |
| Nodo | Oggetti punto |
| Inserimento | Il punto di inserimento di testo e riferimenti a blocco |

Tutti sono attivi per impostazione predefinita, tranne Tangente e Punto più vicino. Punto più vicino tende a prevalere quando si vuole altro: attivare Tangente quando serve.

## Scegliere gli snap

1. Fare clic sulla piccola freccia accanto a {{ui:Snap}} nella barra di stato. Si apre l'elenco {{ui:Snap a oggetto}}.
2. Selezionare o deselezionare gli snap. Le modifiche valgono subito.
3. Fare di nuovo clic sulla freccia per chiudere l'elenco.

CadCraft ricorda la scelta, e le impostazioni di {{ui:Griglia}}, {{ui:Ortho}} e {{ui:Snap}}, in questo browser.

## Passi

1. Digitare `REC` e premere {{key:Enter}}.
2. Digitare `0,0` e premere {{key:Enter}}.
3. Digitare `@4000,3000` e premere {{key:Enter}}. Compare un rettangolo.
4. Fare clic su {{ui:Estensione}}.
5. Digitare `L` e premere {{key:Enter}}.
6. Spostare il mirino sull'angolo in basso a sinistra. Il marcatore mostra "Punto finale". Fare clic.
7. Spostarsi sull'angolo in alto a destra finché compare "Punto finale". Fare clic.
8. Premere {{key:Enter}} per terminare la linea.
9. Premere di nuovo {{key:Enter}} per ripetere {{cmd:LINE}}, e disegnare l'altra diagonale dall'angolo in basso a destra all'angolo in alto a sinistra allo stesso modo.
10. Digitare `C` e premere {{key:Enter}} per avviare un cerchio.
11. Spostare il mirino dove le diagonali si incrociano. Il marcatore mostra "Intersezione". Fare clic.
12. Digitare `800` e premere {{key:Enter}}.

Si dovrebbe vedere un cerchio centrato esattamente sull'incrocio.

13. Digitare `L` e premere {{key:Enter}}.
14. Spostarsi al punto medio del lato sinistro del rettangolo finché compare "Punto medio". Fare clic.
15. Spostare il mirino sul cerchio, sul suo lato sinistro. Il marcatore mostra "Perpendicolare" o "Quadrante"; qui sono lo stesso punto. Fare clic.
16. Premere {{key:Enter}}.

La nuova linea parte dal punto medio del lato sinistro e si ferma esattamente sul cerchio.

## Saltare uno snap per un clic

Tenere premuto {{key:Shift}} mentre si fa clic. Gli snap a oggetto vengono ignorati per quel clic, e il punto va esattamente dove è il mirino (o lungo la direzione di Ortho, se Ortho è attivo).

## Ortho

{{ui:Ortho}} ({{key:F8}}) mantiene il punto successivo dritto in orizzontale o in verticale rispetto al punto base. Vale per i clic e per l'immissione diretta della distanza (un numero semplice digitato al prompt). Gli snap a oggetto hanno la precedenza su Ortho: se compare un marcatore di snap, il clic va allo snap.

## Tracciamento polare

{{ui:Polare}} ({{key:F10}}) è Ortho a più angoli. Mentre un comando ha un punto base (l'ultimo punto di una linea, il punto base di uno spostamento), il puntatore si allinea quando si avvicina a una semiretta dal punto base a un multiplo del passo polare: compare una linea tratteggiata, e un'etichetta accanto al mirino riporta `Polare: 1200 < 30°`. Fare clic per usare quel punto, oppure digitare una distanza: `1200` va esattamente 1200 lungo la semiretta.

Il passo è 90° finché non lo si cambia: digitare {{cmd:POLARANG}}, premere {{key:Enter}}, e digitare `30` (oppure 45, 22.5, 15 …). Polare e Ortho si escludono a vicenda: attivarne uno disattiva l'altro.

## Tracciamento snap a oggetto

{{ui:Traccia}} ({{key:F11}}) allinea il puntatore ai punti di snap su cui ci si è fermati, così si può scegliere un punto alla stessa altezza di un angolo e sopra un altro senza disegnare linee di supporto.

1. Attivare {{ui:Snap}} e {{ui:Traccia}}, e avviare un comando che chiede un punto (`L`).
2. Fermare il puntatore su un punto di snap, come un angolo, per mezzo secondo, senza fare clic. Compare una piccola croce che lo segna: è acquisito. Fermarsi di nuovo sopra per rilasciarlo.
3. Spostare il puntatore in linea retta da esso, in orizzontale o in verticale. Una linea tratteggiata segue il puntatore e l'etichetta riporta `Traccia: 600 < 90°`. Fare clic, oppure digitare una distanza.
4. Acquisire un secondo punto, e spostarsi dove la verticale dall'uno incontra l'orizzontale dall'altro: il puntatore si aggancia a quell'incrocio (`Traccia: dove due linee si incontrano`).

Con {{ui:Polare}} attivo, i punti acquisiti tracciano a ogni angolo polare. Vengono conservati fino a sette punti, finché il comando non termina. {{key:Shift}} disattiva il tracciamento per un clic, come per gli snap.

## Griglia

{{ui:Griglia}} ({{key:F7}}) mostra una griglia di linee dietro il disegno, con linee più marcate ogni quinta linea; la spaziatura cambia con lo zoom. È solo una guida finché non si attiva {{ui:Snap a griglia}} ({{key:F9}}): allora i clic cadono sul punto di griglia più vicino, a meno che uno snap a oggetto non prenda prima il punto.

## Tasti funzione sul computer

{{key:F9}} è {{ui:Snap a griglia}}, {{key:F10}} è {{ui:Polare}} e {{key:F11}} è {{ui:Traccia}}.

:::mac
Su un Mac, F3, F7, F8 e F9 di solito controllano Mission Control e la riproduzione multimediale. Tenere premuto **fn** con il tasto, oppure attivare i tasti funzione standard, come descritto in [Tasti, mouse e trackpad](common:keys). I pulsanti della barra di stato funzionano sempre.
:::

:::firefox
In Firefox, F7 è anche il tasto per la navigazione con cursore. Se Firefox chiede se attivare la navigazione con cursore, scegliere **No**. Usare il pulsante {{ui:Griglia}} se la domanda continua a comparire.
:::

:::touch
Su uno schermo touch non esiste il passaggio del mouse, quindi il marcatore di snap compare solo dove il dito tocca. Ingrandire molto per i bersagli piccoli, oppure digitare le coordinate.
:::

## Errori comuni

- **Il clic è andato al punto sbagliato.** Guardare l'etichetta del marcatore prima di fare clic: Punto finale ha la precedenza su Punto medio quando sono entrambi vicini. Ingrandire, oppure deselezionare gli snap che non servono.
- **Non compare nessun marcatore.** {{ui:Snap}} è disattivato, oppure lo snap desiderato è deselezionato, oppure l'oggetto è su un layer spento o congelato.
- **Gli snap agganciano la cosa sbagliata in un disegno affollato.** Ingrandire. La distanza di snap è misurata in pixel dello schermo, quindi ingrandendo si riduce sul disegno.
- **Aspettarsi che Shift dia una linea retta.** In CadCraft, Shift disattiva gli snap per un clic. Usare {{ui:Ortho}} per le linee rette.
- **Aspettarsi che i punti cadano sui punti di griglia.** Attivare {{ui:Snap a griglia}} ({{key:F9}}), oppure digitare le coordinate per numeri tondi.
