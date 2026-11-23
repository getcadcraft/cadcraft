---
title: Impostazioni di CadCraft
summary: Le impostazioni proprie dell'app di disegno: dimensione del cursore, da dove pende una copia incollata rispetto al cursore, cosa fa un clic alla selezione, quante righe usa la barra degli strumenti, dove sta la riga di comando e quanto è alta, un'area superiore compatta e l'indicatore d'angolo.
keywords: riga di comando, riga di comando mobile, mobile, ancora, una riga, f2, cronologia comandi, commandline, cmdline, toparea, area superiore, compatta, cursorsize, mirino a schermo intero, cursore a schermo intero, da bordo a bordo, righe della barra degli strumenti, visualizzazione barra degli strumenti, ctrl f1, impostazioni, preferenze, opzioni, indicatore d'angolo, cubo di vista, icona assi, icona UCS, cursore, mirino, casella di selezione, punto di incolla, punto base, clic sugli oggetti, selezione, pickadd, shift, reimposta
from: ae1a81db
---

Aprire {{ui:Settings}} con l'ingranaggio nella barra dell'app oppure con {{key:Mod+,}}. La prima scheda, {{ui:CadCraft}}, contiene le impostazioni proprie di questa app; {{ui:General}} contiene quelle che condividono tutte le app della famiglia (tema, dimensione del testo dei pannelli e larghezze, aspetto e ordine della barra degli strumenti). Le impostazioni di CadCraft esistono solo nell'app: si cambiano qui, e questo browser le ricorda. {{ui:Reset CadCraft settings}} riporta ciascuna al valore iniziale.

## Cursore

**Piccolo**, **Medio** (il valore iniziale), **Grande** o **Schermo intero**: la dimensione del mirino e della casella di selezione nel disegno. Una casella più grande seleziona anche oggetti un po' più lontani, il che aiuta su uno schermo tattile o in un disegno molto fine.

**Schermo intero** fa attraversare il disegno da bordo a bordo alle due linee del mirino, anche quando nessun comando è in corso, così si può controllare a occhio che due cose siano allineate su tutta la vista. Con la vista divisa, le linee restano nel riquadro in cui si lavora. È come {{cmd:CURSORSIZE}} 100 di AutoCAD: digitare {{cmd:CURSORSIZE}} e 100 per lo schermo intero; un numero più piccolo sceglie la dimensione più vicina (sotto 5 Piccolo, da 5 a 9 Medio, da 10 a 99 Grande).

## Punto di incolla

Dove pende una copia incollata dal cursore dopo {{key:Mod+V}} ({{cmd:PASTECLIP}}), finché non si fa clic:

- **Angolo in basso a sinistra** (il valore iniziale): l'angolo in basso a sinistra dell'ingombro degli oggetti copiati, come in AutoCAD.
- **Centro**: il centro del loro ingombro. Utile per collocare un simbolo a occhio.

Una copia fatta con `COPYBASE` pende sempre dal punto base indicato. {{ui:Paste in place}} ({{key:Mod+Shift+V}}) ignora questa impostazione: mantiene le coordinate originali. Vedere [Copiare, incollare e duplicare](topic:copy-paste).

## Clic sugli oggetti

Cosa fa un clic nel disegno alla selezione quando nessun comando è in corso:

- **Aggiunge alla selezione** (il valore iniziale): ogni clic o finestra aggiunge oggetti; {{key:Shift}}+clic, oppure una finestra con {{key:Shift}}, li toglie.
- **Sostituisce la selezione**: un clic o una finestra seleziona solo ciò che indica. {{key:Shift}}+clic aggiunge un oggetto, oppure toglie uno già selezionato; una finestra con {{key:Shift}} aggiunge.

A un prompt `Selezionare oggetti:` dentro un comando, i clic aggiungono sempre (e {{key:Shift}} toglie), qualunque cosa dica questa impostazione. Vedere [Selezionare oggetti](topic:select-objects).

## Clic su uno spazio vuoto

Cosa fa un clic dove non c'è un oggetto quando nessun comando è in corso. In entrambi i casi avvia una finestra di selezione (un secondo clic la completa).

- **Annulla la selezione** (il valore iniziale): ciò che era selezionato viene lasciato. Tenere premuto {{key:Shift}} mentre si fa clic per conservarlo.
- **Conserva la selezione**: la selezione resta, come in altri programmi di disegno; la finestra si aggiunge ad essa. Premere {{key:Esc}} per annullare la selezione.

## Trascinamento per selezionare

Cosa disegna premere e trascinare su uno spazio vuoto:

- **Lazo** (il valore iniziale): un contorno a mano libera. Un movimento verso destra seleziona ciò che sta interamente dentro, verso sinistra ciò che tocca; {{key:Space}} mentre si trascina passa tra finestra, attraversamento e recinto.
- **Rettangolo**: il riquadro, come un clic e un secondo clic lo disegnano.

{{cmd:LASSOMODE}} `1` o `0` imposta lo stesso. Vedere [Selezione con lazo](topic:lasso-selection).

## Trascinamento per rifilare ed estendere

Cosa fa premere su uno spazio vuoto e trascinare in {{cmd:TRIM}} e {{cmd:EXTEND}}:

- **Un percorso** (il valore iniziale): un percorso a mano libera; ogni pezzo che attraversa viene rifilato (o esteso).
- **Una finestra**: un riquadro; ogni pezzo che tocca viene rifilato, come fa l'opzione `C`.

Vedere [Rifilare ed estendere](topic:trim-and-extend).

## Posizione della barra degli strumenti

{{ui:CadCraft}} › {{ui:Toolbar position}}: **Sopra** (il valore iniziale, come è sempre stato), **Sotto**, **Sinistra** o **Destra**. A sinistra o a destra i gruppi di strumenti si impilano in una colonna che scorre quando è più alta della finestra, e i pulsanti vanno a capo due o tre per riga. La scelta viene salvata con le impostazioni, e {{cmd:TOOLBARDOCK}} (`TBDOCK`) la imposta dalla riga di comando. {{ui:General}} › {{ui:Reset the layout}} riporta la barra in alto.

Le barre degli stili a menu stanno dentro la barra degli strumenti e si spostano con essa, ma lo stile {{ui:Ribbon}} è fatto per correre in alto o in basso: su un lato riceve una colonna stretta che scorre. Su un telefono la barra resta dove la pone il layout del telefono.

## Righe della barra degli strumenti

Quante righe usano gli strumenti sopra il disegno, nella barra CadCraft e negli stili {{ui:Drafting classic}} e {{ui:Ribbon}}:

- **A capo per adattarsi** (il valore iniziale): gli strumenti vanno a capo secondo la larghezza della finestra.
- **2 righe**: al massimo due righe. Quando gli strumenti stanno in due righe o meno a questa larghezza vanno semplicemente a capo; altrimenti stanno su due righe che scorrono di lato.
- **1 riga**: una sola riga che scorre di lato, che lascia più spazio al disegno.

{{key:Shift+Ctrl+F1}} passa tra le tre, e {{cmd:TOOLBARROWS}} ne imposta una. Ciò che mostrano i pulsanti (icone e testo, solo icone, oppure solo testo) è un'impostazione di {{ui:General}} › {{ui:Toolbar}}; {{key:Ctrl+F1}} passa tra le modalità e {{cmd:TOOLBAR}} ne imposta una.

## Riga di comando

La riga di comando può restare ancorata sotto il disegno, come è sempre stato, oppure fluttuare sopra di esso, e può essere sottile quanto una sola riga.

- **Renderla mobile.** Trascinare la maniglia all'estremità sinistra nel disegno, oppure scegliere {{ui:Float over the drawing}} nel suo menu {{ui:Command line options}} (i tre puntini all'estremità destra). Trascinare di nuovo la maniglia per spostarla; il suo posto viene conservato quando la finestra cambia dimensione. Trascinare il suo bordo destro per allargarla o restringerla. Rilasciarla sulla barra di stato, oppure scegliere {{ui:Dock at the bottom}}, per riancorarla.
- **Renderla più sottile o più alta.** Trascinare il suo bordo superiore: ogni passo è una riga di cronologia. Fino a zero righe diventa una **riga di comando su una sola riga**: solo il prompt e ciò che si digita, e un nuovo messaggio appare sopra per un momento. Un doppio clic sul bordo superiore alterna tra una riga e l'altezza che si aveva.
- **La cronologia.** {{key:F2}}, oppure il pulsante orologio sulla riga di comando ({{ui:Command history (F2)}}), apre tutta la cronologia sopra la riga (sotto, quando la riga è mobile vicino alla parte alta della finestra). La digitazione va ancora alla riga di comando; {{key:PageUp}} e {{key:PageDown}} scorrono la cronologia, e {{key:Esc}}, {{key:F2}} o un clic altrove la chiudono. Un tasto proprio su F2 prevale su questo.
- **Dalla tastiera.** La maniglia è un pulsante: quando ha il focus, i tasti freccia spostano una riga di comando mobile (con {{key:Shift}}, a passi più grandi); {{key:Up}} rende mobile una riga ancorata e {{key:Down}} sul bordo inferiore la riancora. Il bordo superiore è un separatore: {{key:Up}} e {{key:Down}} aggiungono o tolgono una riga, {{key:Home}} la porta a una riga, {{key:End}} alla più alta. Gli screen reader leggono ancora ogni messaggio, anche nella riga di comando su una sola riga.

{{ui:CadCraft}} › {{ui:Command line}} ha le stesse scelte: {{ui:Docked at the bottom}} o {{ui:Floating}}, {{ui:History lines shown}} (da 0 a 12) e {{ui:Standard height}}. {{cmd:COMMANDLINE}} (`CMDLINE`) le imposta dalla riga di comando. Posizione e altezza sono conservate per CadCraft in questo browser insieme al resto del layout, quindi un ambiente di lavoro salvato le porta con sé; {{ui:General}} › {{ui:Reset the layout}} riancora la riga di comando alla sua altezza standard. Su un telefono la riga di comando resta ancorata con una riga di cronologia; anche il pulsante della cronologia funziona lì.

{{ui:CadCraft}} › {{ui:Option letters}} conserva le lettere scelte per le opzioni dei comandi: {{ui:Edit…}} apre il file, {{ui:Import…}} lo sostituisce con un file scelto e {{ui:Export}} lo salva. Vedere [Assegnare alle opzioni dei comandi lettere proprie](topic:option-letters).

Quando la finestra è bassa e il controllo del layout propone un layout più compatto, il suo {{ui:Yes}} porta anche la riga di comando a una sola riga, se il disegno è ancora corto dopo le barre degli strumenti.

## Area superiore

{{ui:CadCraft}} › {{ui:Top area}}: **Standard** (il valore iniziale) oppure **Compatta**. Compatta mantiene piccole le barre sopra il disegno in ogni stile di menu: i nomi dei gruppi e le parole sotto le icone scompaiono (i suggerimenti e gli screen reader li hanno ancora), e i pulsanti sono più stretti. Funziona con [Righe della barra degli strumenti](topic:settings#toolbar-rows): Compatta e **1 riga** lasciano più spazio al disegno. {{cmd:TOPAREA}} lo imposta.

## Indicatore d'angolo

Cosa sta nell'angolo del disegno:

- **Automatico** (il valore iniziale): l'icona degli assi sulla scheda {{ui:Model}} e il cubo di vista sulla scheda {{ui:3D}}.
- **Icona degli assi**: il contrassegno X e Y in basso a sinistra della scheda {{ui:Model}}, e un piccolo contrassegno X, Y e Z sulla scheda {{ui:3D}}.
- **Cubo di vista**: un cubo in alto a destra su entrambe le schede. Sulla scheda {{ui:Model}} mostra il disegno dall'alto, e fare clic su un'altra faccia, spigolo o angolo apre la scheda {{ui:3D}} guardando da lì. Sulla scheda 3D ruota con la vista: fare clic per guardare da un lato, trascinare per orbitare, e la casetta riporta alla vista isometrica. Vedere [Modello in 3D](topic:3d-solids).
- **Nessuno**: nulla nell'angolo.

Le tavole non mostrano né l'uno né l'altro.

## Lunghezza e area della selezione

- **Nella barra di stato** (il valore iniziale): con oggetti selezionati, la barra di stato mostra la lunghezza totale e l'area totale di quelli chiusi. Vedere [Totali di una selezione](topic:properties-panel#totals-of-a-selection).
- **Nascosto**: la barra di stato li omette. Proprietà li mostra comunque per più oggetti.

## Griglia, Ortho e snap

Non sono nella finestra di dialogo: i pulsanti {{ui:Grid}}, {{ui:Ortho}} e {{ui:Snap}} nella barra di stato (oppure {{key:F7}}, {{key:F8}}, {{key:F3}}), e l'elenco degli snap a oggetto accanto ad essi, vengono ricordati come si lasciano. Vedere [Agganciarsi a punti sugli oggetti](topic:object-snaps).
