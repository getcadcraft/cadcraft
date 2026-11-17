---
title: Linee di costruzione e semirette
summary: Disegnare linee che proseguono senza fine (XLINE) o da un punto in una direzione (RAY) per allineare gli elementi, e tagliarle fino a trasformarle in linee normali.
keywords: xline, ray, linea di costruzione, linee di costruzione, linea infinita, linea guida, linea di riferimento, bisettrice, linea di offset, linee di layout, xl
from: b6c398bc
---

## Obiettivi

Come disegnare linee di costruzione per allineare gli elementi durante il disegno: per due punti, in piano o a piombo, con un angolo, a metà tra due direzioni, o a una distanza fissata da una linea. E come tagliarle fino a trasformarle in linee normali, quando hanno svolto il loro compito.

## Due tipi

- Una **linea di costruzione** ({{cmd:XLINE}}) prosegue senza fine in entrambe le direzioni.
- Una **semiretta** ({{cmd:RAY}}) parte da un punto e prosegue senza fine in una sola direzione.

Entrambe vengono disegnate su tutta l'area di disegno, qualunque sia lo zoom, in schermo diviso e nelle viewport di una tavola. {{ui:Estensione}} le esclude, così lo zoom sul disegno adatta comunque ciò che è stato disegnato.

## Disegnare linee di costruzione

1. Fare clic su {{ui:Disegna}} › {{ui:Altro}} › {{ui:Linea di costruzione}}, oppure digitare `XL` e premere {{key:Enter}}.
2. Fare clic su un punto. Ogni clic successivo aggiunge una linea di costruzione che passa per il primo punto e per quello su cui si è fatto clic.
3. Premere {{key:Enter}} per terminare.

Invece del primo punto è possibile digitare un'opzione:

| Opzione | Cosa fa |
|---|---|
| `H` (Oriz) | Linee orizzontali, una per ogni punto su cui si fa clic. |
| `V` (Vert) | Linee verticali passanti per ogni punto. |
| `A` (Ang) | Linee con un angolo digitato (in gradi, in senso antiorario dall'asse X), passanti per ogni punto. `R` (Riferimento) misura l'angolo da una linea scelta. |
| `B` (Bisett) | Fare clic sul vertice, poi su un punto lungo un lato: ogni punto su cui si fa clic lungo l'altro lato aggiunge la linea a metà tra i due. |
| `O` (Offset) | Digitare una distanza, scegliere una linea, poi fare clic sul lato: una linea di costruzione a quella distanza, parallela. `T` (Per) la fa invece passare per un punto su cui si fa clic. La distanza viene ricordata per la volta successiva. |

## Disegnare semirette

1. Fare clic su {{ui:Disegna}} › {{ui:Altro}} › {{ui:Semiretta}}, oppure digitare `RAY` e premere {{key:Enter}}.
2. Fare clic dove partono le semirette.
3. Fare clic su un punto per ogni semiretta che deve passarvi. Premere {{key:Enter}} per terminare.

## Agganciarle e tagliarle

Le linee di costruzione e le semirette accettano gli snap Punto più vicino, Perpendicolare e Intersezione. Non hanno estremità né punto medio, quindi Punto finale e Punto medio non trovano nulla su di esse.

Si tagliano e vengono tagliate come le altre linee con {{cmd:TRIM}} e {{cmd:BREAK}}:

- Tagliando un'estremità di una linea di costruzione, diventa una semiretta che parte dal taglio.
- Tagliando la parte lontana di una semiretta, diventa una linea normale.
- Spezzando una linea di costruzione in un punto, si ottengono due semirette.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} e {{cmd:STRETCH}} funzionano anche su di esse. Una selezione a finestra non le sceglie mai, perché nessuna finestra può contenere tutta una linea senza fine; lo fa una selezione a intersezione o un clic.

:::note
Un DWG (ogni versione) e un DXF 2000 le conservano come linee di costruzione. Il DXF R12 non ne prevede, quindi lì diventano linee che attraversano il disegno, e il salvataggio lo segnala. Una stampa o un PDF le disegna solo sull'area che stampa.
:::
