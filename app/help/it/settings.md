---
title: Impostazioni di CadCraft
summary: Le impostazioni proprie dell'app di disegno: dimensione del cursore, da dove pende la copia incollata rispetto al cursore, cosa fa un clic alla selezione, quante righe usa la barra degli strumenti, dove si trova la riga di comando e la sua altezza, un'area superiore compatta e l'indicatore d'angolo.
keywords: riga di comando, riga di comando mobile, mobile, ancora, f2, cronologia comandi, commandline, cmdline, toparea, area superiore, compatta, cursorsize, mirino a schermo intero, cursore a schermo intero, da bordo a bordo, righe della barra degli strumenti, visualizzazione barra degli strumenti, ctrl f1, impostazioni, preferenze, opzioni, indicatore d'angolo, cubo di navigazione, icona degli assi, icona UCS, cursore, mirino, riquadro di selezione, punto di incollaggio, punto base, clic sugli oggetti, selezione, pickadd, shift, ripristina
from: 0896eb42
---

Aprire {{ui:Impostazioni}} con l'ingranaggio nella barra dell'app oppure {{key:Mod+,}}. La prima scheda, {{ui:CadCraft}}, contiene le impostazioni proprie di quest'app; {{ui:Generali}} contiene quelle che tutte le app della famiglia condividono (tema, dimensione del testo dei pannelli e larghezze, aspetto e ordine della barra degli strumenti). Le impostazioni di CadCraft valgono solo nell'app: si modificano qui, e questo browser le ricorda. {{ui:Reimposta impostazioni di CadCraft}} riporta ognuna al punto di partenza.

## Cursore

**Piccolo**, **Medio** (l'inizio), **Grande** o **Schermo intero**: la dimensione del mirino e del riquadro di selezione nel disegno. Un riquadro di selezione più grande sceglie anche oggetti da un po' più lontano, il che aiuta su uno schermo tattile o in un disegno molto fine.

**Schermo intero** fa correre le due linee del mirino da bordo a bordo del disegno, anche quando nessun comando è in corso, così si può verificare a occhio che due cose siano allineate su tutta la vista. Con la vista divisa, le linee restano nel riquadro in cui si lavora. Equivale a {{cmd:CURSORSIZE}} 100 di AutoCAD: digitare {{cmd:CURSORSIZE}} e 100 per lo schermo intero; un numero inferiore sceglie la dimensione più vicina (sotto 5 Piccolo, da 5 a 9 Medio, da 10 a 99 Grande).

## Punto di incollaggio

Da dove pende dal cursore una copia incollata dopo {{key:Mod+V}} ({{cmd:PASTECLIP}}), finché non si fa clic:

- **Angolo in basso a sinistra** (l'inizio): l'angolo in basso a sinistra dell'estensione degli oggetti copiati, come in AutoCAD.
- **Centro**: il centro della loro estensione. Utile per posizionare a occhio un simbolo.

Una copia fatta con `COPYBASE` pende sempre dal punto base scelto. {{ui:Incolla nella stessa posizione}} ({{key:Mod+Shift+V}}) ignora questa impostazione: mantiene le coordinate originali. Vedere [Copia, incolla e duplica](topic:copy-paste).

## Clic sugli oggetti

Cosa fa un clic nel disegno alla selezione quando nessun comando è in corso:

- **Aggiunge alla selezione** (l'inizio): ogni clic o finestra aggiunge oggetti; {{key:Shift}}+clic, oppure una finestra con {{key:Shift}}, li toglie.
- **Sostituisce la selezione**: un clic o una finestra seleziona solo ciò che sceglie. {{key:Shift}}+clic aggiunge un oggetto, oppure ne toglie uno già selezionato; una finestra con {{key:Shift}} aggiunge.

Al prompt `Selezionare oggetti:` di un comando, i clic aggiungono sempre (e {{key:Shift}} rimuove), qualunque cosa dica questa impostazione. Vedere [Selezionare oggetti](topic:select-objects).

## Clic su un punto vuoto

Cosa fa un clic dove non c'è oggetto quando nessun comando è in corso. In entrambi i casi avvia una finestra di selezione (un secondo clic la completa).

- **Cancella la selezione** (l'inizio): ciò che era selezionato viene lasciato. Tenere premuto {{key:Shift}} mentre si fa clic per mantenerlo.
- **Mantiene la selezione**: la selezione resta, come in altri programmi di disegno; la finestra si aggiunge ad essa. Premere {{key:Esc}} per cancellare la selezione.

## Trascinare per selezionare

Cosa disegna premere e trascinare su uno spazio vuoto:

- **Lazo** (l'inizio): un contorno a mano libera. Spostandosi prima a destra si seleziona ciò che sta interamente dentro, prima a sinistra ciò che tocca; {{key:Space}} mentre si trascina passa tra finestra, incrocio e recinto.
- **Rettangolo**: il riquadro, come lo disegnano un clic e un secondo clic.

{{cmd:LASSOMODE}} `1` o `0` imposta lo stesso. Vedere [Selezione a lazo](topic:lasso-selection).

## Trascinare per rifilare ed estendere

Cosa fa premere su uno spazio vuoto e trascinare in {{cmd:TRIM}} ed {{cmd:EXTEND}}:

- **Un percorso** (l'inizio): un percorso a mano libera; ogni pezzo che attraversa viene rifilato (o esteso).
- **Una finestra**: un riquadro; ogni pezzo che tocca viene rifilato, come fa l'opzione `C`.

Vedere [Rifila ed estendi](topic:trim-and-extend).

## Posizione della barra degli strumenti

{{ui:CadCraft}} › {{ui:Posizione della barra degli strumenti}}: **In alto** (l'inizio, come è sempre stato), **In basso**, **A sinistra** o **A destra**. A sinistra o a destra i gruppi di strumenti si impilano in una colonna che scorre quando è più alta della finestra, e i pulsanti vanno a capo su due o tre righe. La scelta viene salvata con le impostazioni, e {{cmd:TOOLBARDOCK}} (`TBDOCK`) la imposta dalla riga di comando. {{ui:Generali}} › {{ui:Reimposta il layout}} riporta la barra degli strumenti in alto.

Le barre degli stili di menu stanno dentro la barra degli strumenti e si spostano con essa, ma lo stile {{ui:Barra multifunzione}} è pensato per scorrere in alto o in basso: su un lato riceve una colonna stretta che scorre. Su un telefono la barra degli strumenti resta dove la dispone il layout del telefono.

## Righe della barra degli strumenti

Quante righe usano gli strumenti sopra il disegno, nella barra degli strumenti di CadCraft e negli stili {{ui:Disegno classico}} e {{ui:Barra multifunzione}}:

- **Adatta alla larghezza** (l'inizio): gli strumenti vanno a capo secondo la larghezza della finestra.
- **2 righe**: al massimo due righe. Quando gli strumenti vanno a capo su due righe o meno a questa larghezza, vanno semplicemente a capo; altrimenti stanno su due righe che scorrono lateralmente.
- **1 riga**: una riga che scorre lateralmente, che lascia più spazio al disegno.

{{key:Shift+Ctrl+F1}} passa tra le tre, e {{cmd:TOOLBARROWS}} ne imposta una. Ciò che i pulsanti mostrano (icone e testo, solo icone o solo testo) è un'impostazione di {{ui:Generali}} › {{ui:Barra degli strumenti}}; {{key:Ctrl+F1}} passa tra le opzioni, e {{cmd:TOOLBAR}} ne imposta una.

## Riga di comando

La riga di comando può restare agganciata sotto il disegno, come sempre, oppure fluttuare sopra di esso, e può essere sottile quanto una sola riga.

- **Renderla mobile.** Trascinare la maniglia all'estremità sinistra nel disegno, oppure scegliere {{ui:Mobile sopra il disegno}} nel suo menu {{ui:Opzioni della riga di comando}} (i tre punti all'estremità destra). Trascinare di nuovo la maniglia per spostarla; la sua posizione si conserva quando cambia la dimensione della finestra. Trascinare il suo bordo destro per allargarla o restringerla. Rilasciarla sulla barra di stato, oppure scegliere {{ui:Ancora in basso}}, per riagganciarla.
- **Renderla più sottile o più alta.** Trascinare il suo bordo superiore: ogni passo è una riga di cronologia. Fino a zero righe diventa una **riga di comando a una sola riga**: solo il prompt e ciò che si digita, e un nuovo messaggio compare sopra per un momento. Un doppio clic sul bordo superiore alterna tra una riga e l'altezza che si aveva.
- **La cronologia.** {{key:F2}}, oppure il pulsante dell'orologio sulla riga di comando ({{ui:Cronologia comandi (F2)}}), apre tutta la cronologia sopra la riga (sotto, quando la riga è mobile vicino alla parte alta della finestra). La digitazione va ancora alla riga di comando; {{key:PageUp}} e {{key:PageDown}} fanno scorrere la cronologia, e {{key:Esc}}, {{key:F2}} o un clic altrove la chiudono. Un tasto proprio su F2 ha la precedenza su questo.
- **Dalla tastiera.** La maniglia è un pulsante: quando ha il focus, i tasti freccia spostano una riga di comando mobile (con {{key:Shift}}, a passi più grandi); {{key:Up}} rende mobile una riga agganciata e {{key:Down}} sul bordo inferiore la riaggancia. Il bordo superiore è un separatore: {{key:Up}} e {{key:Down}} aggiungono o tolgono una riga, {{key:Home}} la riduce a una riga, {{key:End}} la porta al massimo. I lettori di schermo sentono comunque ogni messaggio, anche nella riga di comando a una sola riga.

{{ui:CadCraft}} › {{ui:Riga di comando}} offre le stesse scelte: {{ui:Ancorata in basso}} o {{ui:Mobile}}, {{ui:Righe della cronologia visualizzate}} (da 0 a 12) e {{ui:Altezza standard}}. {{cmd:COMMANDLINE}} (`CMDLINE`) le imposta dalla riga di comando. La posizione e l'altezza sono conservate per CadCraft in questo browser insieme al resto del layout, quindi un ambiente di lavoro salvato le porta con sé; {{ui:Generali}} › {{ui:Reimposta il layout}} riaggancia la riga di comando alla sua altezza standard. Su un telefono la riga di comando resta agganciata con una riga di cronologia; anche il pulsante della cronologia funziona lì.

Quando la finestra è bassa e il controllo del layout propone un layout più compatto, il suo {{ui:Sì}} porta anche la riga di comando a una sola riga, se il disegno resta corto dopo le barre degli strumenti.

## Area superiore

{{ui:CadCraft}} › {{ui:Area superiore}}: **Standard** (l'inizio) oppure **Compatta**. Compatta mantiene piccole le barre sopra il disegno in ogni stile di menu: spariscono i nomi dei gruppi e le parole sotto le icone (le descrizioni comandi e i lettori di schermo le hanno ancora), e i pulsanti sono più stretti. Funziona insieme a [Righe della barra degli strumenti](topic:settings#toolbar-rows): Compatta e **1 riga** lasciano più spazio al disegno. {{cmd:TOPAREA}} la imposta.

## Indicatore d'angolo

Cosa si trova nell'angolo del disegno:

- **Automatico** (l'inizio): l'icona degli assi sulla scheda {{ui:Modello}} e il cubo di navigazione sulla scheda {{ui:3D}}.
- **Icona degli assi**: il segno X e Y in basso a sinistra della scheda {{ui:Modello}}, e un piccolo segno X, Y e Z sulla scheda {{ui:3D}}.
- **Cubo di navigazione**: un cubo in alto a destra su entrambe le schede. Sulla scheda {{ui:Modello}} mostra il disegno dall'alto, e facendo clic su un'altra faccia, spigolo o vertice si apre la scheda {{ui:3D}} guardando da lì. Sulla scheda 3D ruota con la vista: fare clic per guardare da un lato, trascinare per orbitare, e la casetta riporta alla vista isometrica. Vedere [Modello in 3D](topic:3d-solids).
- **Nessuno**: nulla nell'angolo.

Le tavole non mostrano né l'uno né l'altro.

## Lunghezza e area della selezione

- **Nella barra di stato** (l'inizio): con oggetti selezionati, la barra di stato mostra la loro lunghezza totale e l'area totale di quelli chiusi. Vedere [Totali di una selezione](topic:properties-panel#totals-of-a-selection).
- **Nascosta**: la barra di stato li omette. {{ui:Proprietà}} li mostra comunque per più oggetti.

## Griglia, Ortho e snap

Non sono nella finestra di dialogo: i pulsanti {{ui:Griglia}}, {{ui:Ortho}} e {{ui:Snap}} nella barra di stato (oppure {{key:F7}}, {{key:F8}}, {{key:F3}}) e l'elenco degli snap a oggetto accanto ad essi vengono ricordati così come si lasciano. Vedere [Snap ai punti degli oggetti](topic:object-snaps).
