---
title: Spostare gli schizzi da e verso altri modellatori di parti
summary: Scrivere una macro che ricostruisce il disegno come un unico schizzo vincolato in un modellatore di parti, e aprire uno schizzo esportato da uno di questi.
keywords: schizzo, macro, swb, vba, esportazione, modellatore di parti, variabili globali, equazioni, relazioni, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks non è disponibile dove viene compilato CadCraft, quindi nessuna delle due direzioni è stata ancora verificata in SolidWorks. Ciò che CadCraft scrive viene controllato solo nella struttura. Verificare il risultato prima di fare affidamento su di esso.
:::

## Inviare un disegno come schizzo

1. Vincolare e quotare il disegno (vedi [Vincolare un disegno](topic:constraints)).
2. Nel gruppo {{ui:Parametrico}}, aprire {{ui:Altro}} e scegliere {{ui:Macro per SolidWorks (.swb)}}, oppure digitare {{cmd:SWBOUT}}.

   Viene scaricato un file con il nome del disegno e estensione `.swb`.
3. In SolidWorks, scegliere **Strumenti > Macro > Esegui** e selezionare quel file.

La macro crea una nuova parte dal modello di parte predefinito, apre uno schizzo sul piano Anteriore e vi disegna le linee, i cerchi, gli archi, i punti e le polilinee del modello, con:

- i vincoli come relazioni di schizzo,
- i vincoli dimensionali come quote con gli stessi nomi (`d1@Sketch1`),
- i propri parametri come variabili globali,
- ogni espressione come equazione.

La parte usa l'unità di lunghezza del disegno. Testo, blocchi, tratteggi, quote e tavole non fanno parte dello schizzo; la cronologia elenca ciò che è stato lasciato fuori. Le espressioni senza una forma di equazione (`if`, `min`, `max`, `round`, `%` e alcune altre) vengono scritte con il loro valore attuale, e la cronologia lo indica. Tutto ciò che la macro non riesce a creare viene scritto in un file di log accanto alla macro, e un messaggio riassume la situazione alla fine.

## Aprire uno schizzo da una parte

1. In SolidWorks, eseguire la macro di esportazione di CadCraft (da scaricare nell'app PartCraft: File > Esporta > Esporta macro per riportare le parti) sulla parte. Viene scritto un file `.json` nel formato `cadcraft-sw-export` accanto alla parte.
2. In CadCraft, scegliere {{ui:Apri}} e selezionare quel file `.json`.
3. Se la parte contiene più schizzi, sceglierne uno.

Lo schizzo diventa il disegno, in millimetri: le sue linee, archi, cerchi e punti, le sue relazioni come vincoli, le sue quote come vincoli dimensionali con i nomi originali (`D1`, `D2` …), le sue variabili globali come parametri, e le equazioni sulle sue quote come espressioni. La cronologia elenca ciò che non è stato trasferito, come le relazioni che CadCraft non prevede. La posizione dello schizzo nella parte non viene conservata: viene disegnato piatto, come appare sul suo piano.
