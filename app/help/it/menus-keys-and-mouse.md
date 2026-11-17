---
title: Menu, tasti e mouse
summary: Scegliere uno stile di menu adatto al proprio modo di lavorare, assegnare a un comando un tasto proprio o un tasto che digita un comando, spostare i comandi tra le schede della barra multifunzione e impostare cosa fanno la rotellina e i pulsanti del mouse.
keywords: stile menu, menu, barra multifunzione, barra degli strumenti, riga di comando, scorciatoie da tastiera, tasti di scelta rapida, tasti, personalizza, riassegna, scorciatoie, tasti di testo, mouse, rotellina, inverti, direzione zoom, pulsante centrale, pulsante destro, pan, esporta, importa, passaggio, familiare, disegno classico
from: 8bbf4f88
---

I comandi di CadCraft sono gli stessi qualunque sia il modo in cui vi si accede, e la riga di comando è sempre disponibile con i suoi alias (`L`, `C`, `TR` …). Uno **stile di menu** decide soltanto dove si trovano i pulsanti sullo schermo, come si chiamano e quali tasti li eseguono. Sceglierne uno in {{ui:Impostazioni}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menu, tasti e mouse}}: la modifica è immediata e questo browser la ricorda.

## I tre stili

| Stile | Cosa si ottiene |
|---|---|
| {{ui:CadCraft}} | La barra degli strumenti propria di CadCraft: File, {{ui:Disegna}}, {{ui:Modifica}}, {{ui:Annotazioni}}, {{ui:Parametrico}}, {{ui:Blocchi}}, {{ui:Tavole}}, Modifica e {{ui:Vista}}, ciascuno con un menu {{ui:Altro}}. Lo stile iniziale. |
| {{ui:Disegno classico}} | Una barra multifunzione disposta come nei classici programmi di disegno 2D: un menu {{ui:File}} e pulsanti rapidi, poi le schede {{ui:Home}} (Disegna, Modifica, Annotazione, Layer, Blocco, Proprietà, Utilità, Appunti), {{ui:Inserisci}}, {{ui:Annotazioni}}, {{ui:Parametrico}}, {{ui:Vista}}, {{ui:Gestisci}}, {{ui:Uscita}} e {{ui:3D}}. Digitare i comandi come sempre. Il pulsante centrale sposta la vista; un clic destro equivale a {{key:Enter}}, e trascinare con il pulsante destro non fa nulla. |
| {{ui:Barra multifunzione}} | Una barra multifunzione di semplici schede di attività: {{ui:Disegna}}, {{ui:Modifica}}, {{ui:Annotazioni}}, {{ui:Parametrico}}, {{ui:Blocchi}}, {{ui:Tavole}}, {{ui:Vista}}, {{ui:3D}} e {{ui:Strumenti}}, con un menu {{ui:File}} e pulsanti rapidi a destra. I pulsanti centrale e destro spostano la vista, come nello stile proprio di CadCraft. |

Ogni stile mantiene i tasti di CadCraft: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, e {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} per gli ausili al disegno. Le lettere non sono mai tasti: CadCraft le digita nella riga di comando.

Le barre multifunzione contengono anche gli strumenti del pannello Layer e gli ausili al disegno della barra di stato. La scheda {{ui:3D}} si riempie quando è stata aperta la scheda 3D sotto il disegno; uno strumento 3D scelto nella scheda Modello apre prima la scheda 3D, e uno strumento 2D scelto nella scheda 3D torna prima alla scheda Modello.

:::tip
Un tasto che appartiene al layout proprio di CadCraft ma che lo stile ha assegnato a un altro comando non fa nulla, e la barra di stato indica dove è finito il suo comando ("In I miei tasti, Ortho è Ctrl+Alt+O"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e le frecce mantengono sempre il loro significato. Mentre un comando è in esecuzione, o mentre si digitano lettere nella riga di comando, i tasti appartengono alla riga di comando.
:::

## Personalizzare

1. Scegliere lo stile più vicino a ciò che si desidera, poi fare clic su {{ui:Personalizza…}}.
2. In {{ui:Tasti e menu}}, trovare un comando (la casella di ricerca aiuta). Fare clic su {{ui:Aggiungi un tasto}} e premere il tasto. Fare clic su un tasto per rimuoverlo.
3. Con una barra multifunzione, {{ui:Dove si trova}} sposta il comando in un'altra scheda e pannello, nel menu {{ui:File}}, oppure in {{ui:Solo tasti}}.
4. In {{ui:Mouse}}, impostare la rotellina e i pulsanti che spostano il disegno.
5. Dare un nome e fare clic su {{ui:Salva}}.

Salvare uno stile integrato crea una propria copia ("Il mio Disegno classico"); quello integrato non cambia mai. Un tasto assegnato a due comandi viene mostrato in rosso e va corretto prima di poter salvare.

## Tasti che digitano un comando

{{cmd:SHORTCUTS}} ({{ui:Vista}} › {{ui:Altro}} › {{ui:Scorciatoie da tastiera…}}) assegna a un tasto un'intera riga di comando, come {{key:Ctrl+Alt+L}} per `LINE` o {{key:F9}} per `ZOOM E`. Questi tasti appartengono allo stile in uso: la prima volta che questa versione si apre, i tasti creati in una versione precedente vengono riportati nello stile "I miei tasti CadCraft", una sola volta, e funzionano come prima. Esportare lo stile li include.

## Mouse

- **Rotellina del mouse**: {{ui:Scorrere in avanti ingrandisce}} (l'impostazione iniziale) oppure {{ui:Scorrere in avanti riduce}}, e la velocità. Il pizzico sul trackpad ingrandisce sempre nel modo in cui si muovono le dita.
- **Spostare il disegno con**: il pulsante centrale, il pulsante destro, o entrambi. Un clic destro senza trascinamento è sempre {{key:Enter}}. Il pulsante sinistro seleziona e disegna sempre in CadCraft, quindi spuntarlo non cambia nulla qui.
- **Trascinare nelle viste 3D**: la scheda 3D mantiene i propri pulsanti in ogni stile (il sinistro fa orbitare la vista, il centrale e il destro la spostano).

## Portarlo con sé

{{ui:Esporta}} salva lo stile in uso come piccolo file `.ccinput.json`; {{ui:Importa…}} ne aggiunge uno, da un altro computer o da un collega. Un file importato può puntare solo ai comandi propri di CadCraft: tutto il resto viene escluso e conteggiato nella barra di stato. {{ui:Elimina questo stile}} rimuove uno dei propri.

:::note
Queste impostazioni restano in questo browser. {{ui:Usa questo stile in ogni app}} sotto le schede degli stili fa aprire ogni app nel proprio stile corrispondente (la propria barra degli strumenti, una barra multifunzione o Disegno classico), con le modifiche fatte in ciascuna app. CadCraft non ha uno stile con barra dei menu: quando per tutte le app si sceglie la barra dei menu di un'altra app, CadCraft mantiene la propria barra degli strumenti.
:::

Correlati: [Tastiera e mouse](topic:keyboard) · [Impostazioni di CadCraft](topic:settings) · [Passare da altri software di disegno](topic:coming-from) · [Alias dei comandi](topic:command-aliases)
