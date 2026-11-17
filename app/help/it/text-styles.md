---
title: Impostare carattere e dimensione del testo con gli stili di testo
summary: Creare stili di testo con nome, con carattere, altezza, larghezza e inclinazione, impostarne uno corrente per il nuovo testo, e cambiare uno stile per cambiare tutto il testo che lo usa.
keywords: stile testo, stile, STYLE, ST, TEXTSTYLE, -STYLE, carattere, altezza testo, fattore di larghezza, obliquo, inclinazione, cambia carattere, stile standard, applica stile, DDSTYLE
from: bd5a4883
---

## Che cosa si fa

Creare uno stile di testo chiamato `Notes` con un proprio carattere e una propria altezza, usarlo per il nuovo testo, e in seguito cambiare lo stile in modo che ogni nota che lo usa cambi insieme.

## Passaggi

1. Digitare {{cmd:STYLE}} (`ST`) e premere {{key:Enter}}, oppure fare clic su {{ui:Stile testo}} nella barra {{ui:Disegna}}. La finestra {{ui:Stile testo}} elenca gli stili del disegno. Ogni disegno ha `Standard`.
2. Fare clic su {{ui:Nuovo…}}, digitare `Notes` come nome del nuovo stile e fare clic su {{ui:OK}}. La riga di stato dice "Stile di testo Notes creato e impostato come corrente."
3. In {{ui:Carattere}}, scegliere o digitare un nome di carattere. Impostare {{ui:Altezza (0 = su richiesta ogni volta)}} su un numero, per esempio `2.5`, così ogni nuovo testo avrà quell'altezza. Lasciarlo a `0` per chiedere l'altezza ogni volta.
4. Impostare {{ui:Fattore di larghezza}} e {{ui:Angolo di inclinazione (°)}} se si vogliono lettere più strette, più larghe o inclinate. La riga di esempio mostra il risultato.
5. Fare clic su {{ui:Chiudi}}. Disegnare il testo con {{cmd:TEXT}} o {{cmd:MTEXT}}: il nuovo testo prende lo stile corrente.
6. Per usare uno stile già creato, riaprire la finestra, sceglierlo nell'elenco e fare clic su {{ui:Imposta corrente}}.
7. Per applicare uno stile a un testo già disegnato, selezionare il testo, aprire la finestra, scegliere lo stile e fare clic su {{ui:Applica al testo selezionato}}.

## Cambiare uno stile in seguito

Cambiare il carattere, l'altezza, la larghezza o l'inclinazione di uno stile nella finestra fa seguire ogni testo che lo usa, in un'unica operazione di annulla ({{key:Mod+Z}}). La riga di stato indica quanti testi hanno seguito la modifica.

## Note

- {{ui:Elimina}} non accetta `Standard`, né uno stile ancora usato da un testo: cambiare prima quel testo in un altro stile.
- Gli stili sono salvati nella tabella STYLE del disegno, quindi i file DXF e DWG li conservano.
- Nella riga di comando, `-STYLE` fa lo stesso con opzioni (Corrente, Nuovo, Carattere, Altezza, Larghezza, Obliquo, Elimina, Elenco).
- Un carattere non installato sul computer che apre il disegno viene mostrato con un altro carattere.
