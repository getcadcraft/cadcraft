---
title: Digitare e mostrare direzioni e angoli in gradi, primi e secondi
summary: Digitare una direzione come azimut da topografo, ad esempio N45°23'30"E, o come gradi-primi-secondi ovunque venga richiesto un angolo, e scegliere con AUNITS come il disegno mostra gli angoli.
keywords: direzione, direzioni, topografo, azimut di quadrante, N45E, gradi primi secondi, DMS, angolo, direzione, lotto, lotti, tracciamento, poligonale, AUNITS, ANGUNITS, formato angolo, polare, distanza diretta, DIST
from: af805567
---

Ovunque CadCraft chieda un **angolo o una direzione**, è possibile digitare un **azimut di quadrante** oppure un angolo in **gradi, primi e secondi**, oltre a un semplice numero di gradi.

## Direzioni (azimut di quadrante)

Una direzione indica nord o sud, un angolo fino a 90°, poi est o ovest:

| Si digita | Direzione |
|---|---|
| `N45°23'30"E` oppure `N45d23'30"E` | 45°23'30" da nord verso est |
| `S10-30-00W` oppure `S 10 30 W` | 10°30' da sud verso ovest (trattini o spazi tra le parti) |
| `N45.5E` | 45,5° da nord verso est |
| `N`, `E`, `S`, `W` | esattamente nord, est, sud, ovest |

Le lettere possono essere in qualsiasi maiuscolo o minuscolo. In spagnolo, `O` indica anche ovest (oeste). `d` e `°` hanno lo stesso significato; `'` indica i primi e `"` i secondi.

Per tracciare una linea di lotto lunga 20 m a N45°23'E, avviare {{cmd:LINE}} e digitare il primo punto, poi `@20<N45d23'E`. Lo stesso vale alla richiesta di angolo di {{cmd:ROTATE}} e in ogni altra richiesta che chieda un angolo, e nella casella dell'angolo di {{ui:Input dinamico}}.

## Gradi, primi, secondi

`45°23'30"`, `45d23'30"`, `45d30'` oppure `45d` è un angolo rispetto all'asse X, in senso antiorario. Il segno `°` o la lettera `d` sono necessari: `45-23-30` viene letto come operazione aritmetica (45 − 23 − 30). Primi e secondi devono essere inferiori a 60. Un semplice numero, con operazioni aritmetiche (`360/7`), funziona ancora.

## Come vengono mostrati gli angoli

Digitare {{cmd:AUNITS}} (oppure scegliere {{ui:Formato dell'angolo}} in {{ui:Proprietà}} › {{ui:Impostazioni correnti}}) e scegliere:

- **Gradi decimali** (predefinito): `44.6083°`.
- **Gradi, primi e secondi**: `44°36'30"`.
- **Azimut da topografo**: `N45°23'30"E`.

La precisione segue ciò che si digita per {{cmd:AUNITS}}: 0 mostra i gradi, 2 i primi, 4 i secondi, e da 5 a 8 aggiungono decimali di secondo. Il formato viene mostrato in {{cmd:DIST}}, nella barra di stato, nell'input dinamico e nei suggerimenti di tracciamento, e nelle caselle degli angoli di {{ui:Proprietà}} (una casella modificata accetta una qualsiasi delle forme sopra). È un passo di annullamento e viene salvato nei file DWG e DXF (`$AUNITS`, `$AUPREC`); LISP li legge e scrive come `AUNITS` e `AUPREC`.
