---
title: Modificare gli alias dei comandi
summary: Conservare i propri alias dei comandi in un unico file di testo nel formato consueto, importare ed esportare un file .pgp e ricaricarlo con REINIT.
keywords: alias, aliasedit, pgp, scorciatoia, nome breve, reinit, tastiera, personalizzare, modifica alias
from: 2282d36f
---

## Cosa si impara

Come aggiungere nomi brevi propri per i comandi, per esempio `LL` per {{cmd:LINE}}, tutti in un unico file di testo.

## Aggiungere un alias

1. Aprire {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}, oppure digitare {{cmd:ALIASEDIT}} e premere {{key:Enter}}.
2. Aggiungere una riga con l'alias, una virgola e il comando dopo un asterisco:

```
LL,     *LINE
```

3. Fare clic su {{ui:Save}}. La riga di comando indica quanti alias sono in uso.
4. Digitare `LL` e premere {{key:Enter}}: si avvia LINE.

Gli alias propri si sovrappongono a quelli di CadCraft. Una riga propria prevale su un alias predefinito con lo stesso nome; eliminando la riga, torna quello predefinito.

## Righe rifiutate da CadCraft

L'editor elenca ogni problema con il numero di riga mentre si digita:

- il comando non esiste;
- l'alias è il nome di un comando (`LINE, *CIRCLE` nasconderebbe LINE);
- la riga non è nel formato `ALIAS, *COMANDO`;
- lo stesso alias compare in due righe (vince quella successiva).

Le righe che avviano un programma sul computer, come `NOTEPAD, START, 1, *File da modificare: ,`, vengono saltate con una nota: un'app nel browser non può avviare programmi.

## Importare alias da un altro programma

1. Nell'editor degli alias, fare clic su {{ui:Import .pgp…}} e scegliere il file. Si può anche trascinare un file `.pgp` sul disegno.
2. Controllare i problemi elencati (i comandi che CadCraft non ha vengono rifiutati, gli altri funzionano).
3. Fare clic su {{ui:Save}}.

{{ui:Export .pgp}} salva in un unico file, nello stesso formato, gli alias di CadCraft e quelli propri.

## Ricaricare il file

Digitare {{cmd:REINIT}} e premere {{key:Enter}} per applicare di nuovo il file degli alias. Il file è conservato in questo browser; l'app desktop lo terrà nella propria cartella, e il servizio cloud lo sincronizzerà.

## Lettere per le opzioni di un comando

Un alias indica un comando. Per cambiare le lettere che rispondono alle opzioni di un comando (`P` per Polare in {{cmd:ARRAY}}), vedere [Assegnare alle opzioni dei comandi lettere proprie](topic:option-letters).

## Scorciatoie da tastiera per qualsiasi comando

Un alias si digita; una scorciatoia è un tasto. Per assegnare a un comando un tasto proprio:

1. Fare clic su {{ui:View}} › {{ui:More}} › {{ui:Keyboard shortcuts…}}, oppure digitare `KEYS` e premere {{key:Enter}}.
2. Fare clic sulla casella {{ui:Key}} e premere i tasti, per esempio {{key:Alt+Shift+C}}.
3. In {{ui:Runs}}, scrivere il comando e, se lo si vuole, ciò che va digitato dopo: `CIRCLE`, oppure `ZOOM E`.
4. Fare clic su {{ui:Add}}.

Una scorciatoia richiede {{key:Mod}} o {{key:Alt}} con una lettera o una cifra, oppure un tasto funzione libero ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). I tasti già usati da CadCraft, dall'app o dal browser, e quelli di un pulsante Strumenti personali (vedere [Pulsanti propri](topic:my-tools)), vengono rifiutati, e la casella ne spiega il motivo. Le scorciatoie sono conservate in questo browser (o nell'app desktop); {{ui:Remove}} ne elimina una.
