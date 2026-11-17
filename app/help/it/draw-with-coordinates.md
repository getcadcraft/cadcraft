---
title: Disegnare con le coordinate
summary: Disegnare il contorno esatto di un pavimento digitando coordinate assolute, relative e polari, e con l'immissione diretta della distanza.
keywords: linea, pline, polilinea, coordinate, relativa, polare, assoluta, distanza diretta, @, digitazione punti, esatto, ortho
from: 19e82350
---

## Cosa si realizza

Il contorno di una stanza a L, 6000 per 4500 con un rientro di 2000 per 1500, disegnato con precisione, più una parete a 30 gradi. Si useranno tutti e quattro i modi per digitare un punto. Lavorare in millimetri: un'unità di disegno corrisponde a un millimetro.

La guida rapida per ogni formato è in [Inserimento di coordinate e distanze](topic:coordinate-entry).

## Prima di iniziare

1. Aprire CadCraft. Se è aperto un disegno, fare clic su {{ui:Nuova}} prima di tutto.
2. Premere {{key:Esc}} in modo che non sia selezionato nulla. Il pannello di destra mostra {{ui:Impostazioni correnti}}.
3. Impostare {{ui:Unità}} su {{ui:Millimetri}}. Non si ridimensiona nulla: questo serve solo a dire alle tavole e alle stampe cosa vale un'unità.

## Coordinate assolute: il primo punto

Una coordinata assoluta è una posizione misurata dall'origine, digitata come `x,y`.

1. Digitare `L` e premere {{key:Enter}}. Il prompt riporta `Specificare il primo punto:`.
2. Digitare `0,0` e premere {{key:Enter}}.

La linea ora è elastica: va dall'origine al mirino. Le coordinate nella barra di stato mostrano la distanza e l'angolo dal punto iniziale mentre ci si sposta.

## Coordinate relative: @dx,dy

Una coordinata relativa si digita come `@dx,dy`: quanto in orizzontale, quanto in verticale, a partire dall'ultimo punto. I numeri negativi vanno a sinistra o in basso.

3. Digitare `@6000,0` e premere {{key:Enter}}. Una linea di 6000 va a destra.
4. Digitare `@0,3000` e premere {{key:Enter}}.
5. Digitare `@-2000,0` e premere {{key:Enter}}.
6. Digitare `@0,1500` e premere {{key:Enter}}.

Si vedono quattro linee collegate che salgono lungo il lato destro della stanza.

## Immissione diretta della distanza: un numero semplice

Quando si digita un solo numero, CadCraft percorre quella distanza nella direzione del mirino. Attivare {{ui:Ortho}} in modo che la direzione si agganci all'orizzontale o alla verticale.

7. Premere {{key:F8}}, oppure fare clic su {{ui:Ortho}} nella barra di stato. La barra di stato dice "Ortho acceso".
8. Spostare il mirino a sinistra dell'ultimo punto. La linea elastica resta orizzontale.
9. Digitare `4000` e premere {{key:Enter}}. La linea va 4000 a sinistra.
10. Spostare il mirino sotto l'ultimo punto.
11. Digitare `4500` e premere {{key:Enter}}. Si è tornati al punto iniziale.
12. Premere {{key:Enter}} sul prompt vuoto per terminare il comando.

:::mac
F8 può controllare la riproduzione multimediale su una tastiera Mac. Tenere premuto **fn** e premere F8, oppure fare clic su {{ui:Ortho}}. Vedere [Tasti, mouse e trackpad](common:keys).
:::

Ora c'è un contorno a L chiuso fatto di sei linee separate.

13. Fare clic su {{ui:Estensione}} per vederlo tutto.

## Coordinate polari: @distanza<angolo

Una coordinata polare si digita come `@distanza<angolo`. Gli angoli sono in gradi, misurati in senso antiorario dalla direzione X positiva: 0 è a destra, 90 in alto, 180 a sinistra, 270 (o -90) in basso.

14. Digitare `L` e premere {{key:Enter}}.
15. Digitare `6000,0` e premere {{key:Enter}} per partire dall'angolo in basso a destra.
16. Digitare `@2500<-30` e premere {{key:Enter}}. Una linea di 2500 parte dall'angolo e va in basso a destra, con un angolo di 30 gradi sotto l'orizzontale.
17. Premere {{key:Enter}} per terminare il comando.

Una coordinata polare senza `@`, come `2500<30`, è misurata dall'origine invece che dall'ultimo punto.

## Lo stesso contorno come una polilinea

Sei linee separate vanno bene per molti lavori, ma una polilinea è un unico oggetto: si fa offset, si misura e si seleziona come un tutt'uno. Usare {{cmd:PLINE}} con lo stesso inserimento.

1. Digitare `PL` e premere {{key:Enter}}.
2. Digitare `0,-6000` e premere {{key:Enter}} per partire sotto il primo contorno.
3. Digitare `@6000,0`, poi premere {{key:Enter}}.
4. Digitare `@0,3000`, poi premere {{key:Enter}}.
5. Digitare `@-2000,0`, poi premere {{key:Enter}}.
6. Digitare `@0,1500`, poi premere {{key:Enter}}.
7. Digitare `@-4000,0`, poi premere {{key:Enter}}.
8. Digitare `C` e premere {{key:Enter}}. La polilinea si chiude e il comando termina.
9. Fare clic sul nuovo contorno. Il pannello di destra mostra "Polilinea", i suoi {{ui:Vertici}}, {{ui:Lunghezza}} e, poiché è chiusa, la sua {{ui:Area}}.

L'area dovrebbe indicare 24000000 (millimetri quadrati, cioè 24 metri quadrati).

## Opzioni durante il disegno

- In {{cmd:LINE}} e {{cmd:PLINE}}, digitare `U` e premere {{key:Enter}} per annullare l'ultimo segmento senza uscire dal comando.
- In {{cmd:LINE}}, `C` chiude il contorno sul primo punto quando ci sono almeno due segmenti.
- In {{cmd:PLINE}}, `A` passa ai segmenti ad arco (ogni arco prosegue in modo continuo dal segmento precedente), e `L` torna alle linee. In modalità arco, l'opzione di chiusura è `CL`.
- Premendo {{key:Enter}} al prompt `Specificare il primo punto:` in {{cmd:LINE}}, si riparte dall'ultimo punto indicato, così si può proseguire da dove ci si era fermati.

## Errori comuni

- **Digitare `6000,0` quando si voleva `@6000,0`.** Senza `@`, il punto è misurato dall'origine, non dall'ultimo punto, quindi la linea finisce in un punto inatteso. In CadCraft, `x,y` è sempre assoluto. Premere `U` e {{key:Enter}} per annullarla.
- **Una virgola digitata come punto decimale.** I decimali usano il punto: `1250.5`. La virgola separa sempre X da Y.
- **La distanza diretta è andata nel verso sbagliato.** Un numero semplice segue il mirino. Spostare il mirino dal lato desiderato prima di premere {{key:Enter}}, e attivare {{ui:Ortho}} per le linee rette.
- **"Richiesto un punto o una parola chiave di opzione."** CadCraft non ha capito quanto digitato. Controllare la presenza di spazi nel numero o una virgola mancante, e digitarlo di nuovo.
- **Piedi e pollici.** CadCraft legge solo numeri semplici. Digitare `150` per 12'-6" in un disegno in pollici, o `12.5` in un disegno in piedi.
