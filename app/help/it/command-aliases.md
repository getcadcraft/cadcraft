---
title: Modificare gli alias dei comandi
summary: Conservare i propri alias dei comandi in un unico file di testo nel formato familiare, importare ed esportare un file .pgp e ricaricarlo con REINIT.
keywords: alias, pgp, scorciatoia, nome breve, reinit, tastiera, personalizza, modifica alias
from: 6ab6fa0e
---

## Cosa si imparerà

Come aggiungere nomi brevi propri per i comandi, per esempio `LL` per {{cmd:LINE}}, tutti in un unico file di testo.

## Aggiungere un alias

1. Aprire {{ui:Vista}} › {{ui:Altro}} › {{ui:Modifica alias…}}, oppure digitare {{cmd:ALIASEDIT}} e premere {{key:Enter}}.
2. Aggiungere una riga con l'alias, una virgola e il comando dopo un asterisco:

```
LL,     *LINE
```

3. Fare clic su {{ui:Salva}}. La riga di comando indica quanti alias propri sono in uso.
4. Digitare `LL` e premere {{key:Enter}}: parte LINE.

I propri alias si sovrappongono a quelli di CadCraft. Una riga propria prevale su un alias integrato con lo stesso nome; eliminando la riga, torna quello integrato.

## Righe che CadCraft rifiuta

L'editor elenca ogni problema con il numero di riga mentre si digita:

- il comando non esiste;
- l'alias è già il nome di un comando (`LINE, *CIRCLE` nasconderebbe LINE);
- la riga non è nel formato `ALIAS, *COMMAND`;
- lo stesso alias è su due righe (vince quella successiva).

Le righe che avviano un programma sul computer, come `NOTEPAD, START, 1, *File to edit: ,`, vengono saltate con una nota: un'app nel browser non può avviare programmi.

## Portare gli alias da un altro programma

1. Nell'editor degli alias, fare clic su {{ui:Importa .pgp…}} e scegliere il file. È anche possibile trascinare un file `.pgp` sul disegno.
2. Verificare i problemi elencati (i comandi che CadCraft non ha vengono rifiutati, gli altri funzionano).
3. Fare clic su {{ui:Salva}}.

{{ui:Esporta .pgp}} salva in un unico file, nello stesso formato, gli alias di CadCraft e i propri.

## Ricaricare il file

Digitare {{cmd:REINIT}} e premere {{key:Enter}} per applicare di nuovo il file degli alias. Viene conservato in questo browser; l'app desktop lo conserverà nella propria cartella, e il servizio cloud lo sincronizzerà.

## Scorciatoie da tastiera per qualsiasi comando

Un alias si digita; una scorciatoia è un tasto. Per assegnare a un comando un tasto proprio:

1. Fare clic su {{ui:Vista}} › {{ui:Altro}} › {{ui:Scorciatoie da tastiera…}}, oppure digitare `KEYS` e premere {{key:Enter}}.
2. Fare clic sulla casella {{ui:Tasto}} e premere i tasti, per esempio {{key:Alt+Shift+C}}.
3. In {{ui:Esegue}}, scrivere il comando e, se serve, ciò che va digitato dopo: `CIRCLE`, oppure `ZOOM E`.
4. Fare clic su {{ui:Aggiungi}}.

Un tasto richiede {{key:Mod}} o {{key:Alt}} con una lettera o una cifra, oppure un tasto funzione libero ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). I tasti già usati da CadCraft, dall'app o dal browser, e quelli di un pulsante Strumenti propri (vedere [Pulsanti propri](topic:my-tools)), vengono rifiutati, e la casella indica il motivo. Le scorciatoie sono conservate in questo browser (o nell'app desktop); {{ui:Rimuovi}} ne elimina una.
