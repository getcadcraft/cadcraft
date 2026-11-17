---
title: Caricare applicazioni (APPLOAD)
summary: Caricare routine LISP e i relativi file di dialogo, scaricarle, ricaricarle dalla cronologia e conservare quelle usate nella Suite di avvio.
keywords: appload, ap, carica applicazione, lisp, lsp, dcl, routine, suite di avvio, scarica, cronologia, trascina, carica, personalizza, gestisci
from: 89e0ee95
---

## Cosa si apprende

Come caricare una routine LISP (un file `.lsp`) perché i suoi comandi funzionino in CadCraft, come scaricarla e come fare in modo che si carichi ogni volta che CadCraft si avvia.

## Caricare una routine

1. Aprire {{ui:Vista}} › {{ui:Altro}} › {{ui:Carica applicazione…}}, oppure digitare {{cmd:APPLOAD}} (o `AP`) e premere {{key:Enter}}.
2. Fare clic su {{ui:Carica un file…}} e scegliere uno o più file `.lsp`. Una routine che apre una finestra di dialogo di solito è accompagnata da un file `.dcl`: scegliere anche questo.
3. La finestra di dialogo indica che cosa ha creato ciascun file, per esempio "Caricato delblocks.lsp: 1 comando, DELBLOCKS."
4. Fare clic su {{ui:Chiudi}}, digitare il comando della routine e premere {{key:Enter}}.

È possibile anche trascinare i file `.lsp` e `.dcl` sul disegno o sulla finestra Carica applicazioni: vengono caricati subito.

Il file viene letto qui, nel browser. Non viene inviato nulla.

:::tip
Premere {{key:Enter}} su una riga di comando vuota per eseguire di nuovo il comando della routine, come per qualsiasi altro comando. Anche gli alias dei comandi possono raggiungerlo: vedere "Modifica alias dei comandi".
:::

## Scaricare una routine

In {{ui:Carica applicazioni}}, sotto {{ui:Applicazioni caricate}}, fare clic su {{ui:Scarica}} accanto al file. I comandi che ha creato non sono più disponibili finché non si carica di nuovo.

## Caricare una routine a ogni avvio di CadCraft

1. Caricare la routine.
2. Sotto {{ui:Applicazioni caricate}}, fare clic su {{ui:Aggiungi alla Suite di avvio}} accanto alla routine.

Da ora in poi viene caricata automaticamente ogni volta che CadCraft si avvia in questo browser. Per interromperlo, fare clic su {{ui:Rimuovi}} accanto alla routine, sotto Suite di avvio.

La Suite di avvio conserva una copia di ogni file nella memoria di questo browser. Se si modifica la routine, caricare il nuovo file e aggiungerlo di nuovo.

## Caricare acad.lsp e acaddoc.lsp da una cartella di supporto (Studio)

In CadCraft Studio, {{ui:Cartella di supporto}} nella finestra {{ui:Carica applicazioni}} prende una cartella del computer. Fare clic su {{ui:Scegli cartella…}}. All'avvio, CadCraft legge `acad.lsp` e poi `acaddoc.lsp` da quella cartella (indipendentemente dalle maiuscole dei nomi), li carica, e poi carica la Suite di avvio. `acaddoc.lsp` viene letto di nuovo ogni volta che si apre una nuova scheda di disegno. Nient'altro nella cartella viene letto, e un file di oltre 2 MB viene saltato con un messaggio.

Se un file definisce una funzione chiamata `S::STARTUP`, viene eseguita una volta dopo il caricamento dei file (anche dopo la Suite di avvio). {{ui:Carica ora}} fa lo stesso su richiesta; {{ui:Cancella}} dimentica la cartella.

Nel browser una pagina non può conservare una cartella, quindi non esiste una cartella di supporto: usare la Suite di avvio descritta sopra. I file compilati `.fas` e `.vlx` e i programmi nativi restano rifiutati.

## Caricare di nuovo un file dalla cronologia

{{ui:Cronologia}} elenca i file caricati in questo browser, dal più recente. Fare clic su {{ui:Carica}} accanto a uno di essi per caricarlo di nuovo, senza cercarlo sul computer.

## File che CadCraft non può caricare

| File | Che cos'è | Cosa fare |
|---|---|---|
| `.fas`, `.vlx` | LISP compilato o protetto | caricare invece il sorgente `.lsp` |
| `.arx`, `.crx`, `.dbx` | programmi Windows nativi | non è possibile eseguire questi file in CadCraft |
| `.dvb` | un progetto VBA | non è possibile eseguire questi file in CadCraft |
| `.craft`, `.lua`, `.py` | script CraftScript | aprirli nell'area di lavoro Script di PartCraft |

La finestra Carica applicazioni indica di quale tipo è un file quando lo si sceglie.

## Interrompere una routine

Premere {{key:Esc}}. A una richiesta della routine, Esc la annulla nel modo previsto dalla routine (viene eseguita la sua pulizia). Se è occupata e non chiede nulla, Esc la interrompe del tutto e lo segnala; le routine caricate restano caricate.

:::note
Tutto ciò che una routine modifica nel disegno è un solo passo: un {{key:Mod+Z}} lo annulla tutto.
:::
