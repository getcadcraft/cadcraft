---
title: Pulsanti personalizzati (I miei strumenti)
summary: Aggiungere pulsanti della barra degli strumenti che eseguono le proprie macro, assegnare loro tasti di scelta rapida, condividerli come file e importare pulsanti da un file di personalizzazione CUIx.
keywords: i miei strumenti, pulsanti personalizzati, barra degli strumenti, macro, cui, cuix, personalizza, menu, tasti di scelta rapida, scorciatoie da tastiera, diesel, ^c^c, importa pulsanti, esporta pulsanti
from: 36618802
---

## Cosa si impara

Come mettere pulsanti personalizzati nella barra degli strumenti, ciascuno che esegue una macro scritta come le scrive AutoCAD, come assegnare un tasto a un pulsante e come importare i pulsanti di un file CUIx.

## Aggiungere un pulsante

1. Aprire {{ui:Impostazioni}} ({{key:Mod+,}}) e restare nella scheda {{ui:CadCraft}}. Scorrere fino a {{ui:I miei strumenti}}.
2. Fare clic su {{ui:Aggiungi un pulsante…}}.
3. Compilare la casella:
   - {{ui:Gruppo}}: il gruppo della barra degli strumenti in cui inserirlo, ad esempio `I miei strumenti`. Un nuovo nome crea un nuovo gruppo.
   - {{ui:Etichetta}}: le parole sul pulsante.
   - {{ui:Macro}}: ciò che digita, ad esempio `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Tasto di scelta rapida}}: fare clic nella casella e premere i tasti, ad esempio {{key:Ctrl+Alt+B}}.
   - {{ui:Icona}}: un'immagine PNG o SVG di al massimo 64 KB, oppure nessuna (compare una stella).
4. Fare clic su {{ui:Salva}}.

Il pulsante compare alla fine della barra degli strumenti, nel suo gruppo. Fare clic su di esso, oppure premere il suo tasto, per eseguirlo. {{ui:Modifica}} ed {{ui:Elimina}} nell'elenco cambiano o rimuovono il pulsante.

## Scrivere una macro

Una macro è ciò che si digiterebbe nella riga di comando, con alcuni segni:

| Segno | Significa |
|---|---|
| `^C` | Annulla qualunque cosa sia in esecuzione (`^C^C` è l'inizio abituale) |
| `;` o uno spazio | {{key:Enter}} |
| `\` | Attende l'utente: un clic o una risposta digitata, poi la macro prosegue |
| `_` o `.` prima di un comando | Accettato e ignorato (nomi internazionali e integrati) |
| `*` all'inizio assoluto | Esegue di nuovo ogni volta che termina, finché non si preme {{key:Esc}} |
| `^O`, `^G` | Attiva o disattiva Ortho e la griglia |
| `$M=` | Il resto è DIESEL. Vengono letti solo `$(if,…)`, `$(getvar,…)`, `$(=,…)` e `$(eq,…)`; un pulsante che usa altro lo segnala e non fa nulla |

Esempi:

- `^C^C_line;0,0;@100,0;;` disegna una linea lunga 100 dall'origine.
- `^C^C_circle;\25;` chiede il centro, quindi disegna lì un cerchio di raggio 25.
- `^C^C_turnright` ruota la vista di 90° verso destra.

## Tasti di scelta rapida

Un tasto richiede {{key:Mod}} (Ctrl, o Cmd su Mac) oppure {{key:Alt}} con una lettera o una cifra, oppure uno dei tasti funzione liberi {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. Le lettere da sole vanno alla riga di comando. I tasti che CadCraft, l'applicazione o il browser già usano (come {{key:Ctrl+S}} o {{key:Ctrl+Z}}) e i tasti già assegnati a un altro pulsante vengono rifiutati, e la casella indica il motivo.

## Condividere i pulsanti

- {{ui:Esporta…}} salva ogni gruppo e pulsante (con icone e tasti) come `my-tools.json`.
- {{ui:Importa…}} aggiunge i gruppi di un file del genere dopo i propri. Un nome di gruppo già in uso riceve "(2)"; un tasto che creerebbe un conflitto viene escluso, e il pannello lo segnala.

## Importare pulsanti da un file CUIx

1. Fare clic su {{ui:Importa CUIx…}} e scegliere il file `.cuix`.

Le sue barre degli strumenti e i suoi pannelli della barra multifunzione diventano gruppi, ciascun pulsante con la sua macro e la sua immagine (PNG, oppure BMP convertito in PNG). I suoi tasti di scelta rapida arrivano in un gruppo a parte, ciascun pulsante con il proprio tasto; gli eventuali alias di comando arrivano in un gruppo {{ui:Alias}}. Il pannello elenca ciò che è stato importato.

:::note
Il file viene solo letto. I comandi che CadCraft non ha vengono elencati per nome, senza tentare di indovinarli: i loro pulsanti lo segnalano quando vengono premuti. DIESEL oltre alle poche funzioni sopra, menu, tasti del mouse e aree di lavoro non vengono letti.
:::

## Da sapere

- I pulsanti sono conservati in questo browser (o in questa app desktop), non nei disegni.
- Un pulsante viene eseguito tramite la riga di comando, quindi è annullabile come qualsiasi cosa digitata: un {{key:Mod+Z}} per ogni comando eseguito.
