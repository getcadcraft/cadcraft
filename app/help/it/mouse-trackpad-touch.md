---
title: Mouse, trackpad e tocco
summary: Come ingrandire, spostare la vista, fare clic con il tasto destro e scegliere in CadCraft con un mouse a rotella, un trackpad Mac o PC, o uno schermo touch, e cosa cambia tra i browser.
keywords: trackpad, touchpad, magic mouse, tocco, tablet, ipad, pan, zoom, pizzico, clic destro, due dita, tasto centrale, browser, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft è pensato per un mouse con rotella. Tutto funziona anche con un trackpad, con alcune abitudini da acquisire. Gli schermi touch funzionano per la scelta, con dei limiti.

## Mouse con rotella

- **Zoom:** girare la rotella. Il disegno si ingrandisce o riduce attorno al mirino, quindi puntare su ciò che si vuole vedere.
- **Pan:** tenere premuta la rotella e trascinare, oppure trascinare con il tasto destro.
- **Zoom su tutto:** fare doppio clic sulla rotella, oppure fare clic su {{ui:Estensione}}.
- **Vista precedente:** fare clic su {{ui:Precedente}} nel gruppo Vista, oppure digitare `Z`, {{key:Enter}}, `P`, {{key:Enter}}. Una serie di scatti della rotella conta come una sola vista, quindi un solo {{ui:Precedente}} la annulla. Salvare le viste a cui si torna con {{cmd:NAMEDVIEW}} (`NV`).
- **Invio:** clic destro.

## Trackpad

:::mac
- **Pan:** muovere due dita sul trackpad, in qualsiasi direzione: il disegno segue le dita. È anche possibile trascinare tenendo premuto un clic con due dita (trascinamento con il tasto destro).
- **Zoom:** pizzicare con due dita. Lo zoom segue il mirino.
- **Clic destro (Invio):** fare clic con due dita. Se non fa nulla, attivare "Clic secondario" in **Impostazioni di Sistema**, poi **Trackpad**. Il clic con Control può essere considerato un clic normale in CadCraft anziché un clic destro, quindi usare il clic con due dita.
- **Zoom su un'area:** fare clic su {{ui:Finestra}} nel gruppo Vista e fare clic su due angoli.
:::

:::windows linux
- **Pan:** muovere due dita sul touchpad, in qualsiasi direzione: il disegno segue le dita. È anche possibile trascinare tenendo premuto il tasto destro.
- **Zoom:** pizzicare con due dita. Lo zoom segue il mirino.
- **Clic destro (Invio):** fare clic con due dita, oppure fare clic sull'angolo inferiore destro del touchpad, a seconda delle impostazioni del touchpad.
- **Zoom su un'area:** fare clic su {{ui:Finestra}} nel gruppo Vista e fare clic su due angoli.
:::

Tenere premuto {{key:Space}} e trascinare **non** sposta la vista in CadCraft: {{key:Space}} equivale a Invio.

La rotella del mouse continua a fare zoom, uno scatto alla volta. Un touchpad che invia lo scorrimento a scatti interi, come fa una rotella, fa zoom con lo scorrimento a due dita anziché spostare la vista: allontanarsi, puntare sull'area desiderata e tornare a ingrandire. La scheda 3D mantiene i propri movimenti da trackpad (vedere [Modello in 3D](topic:3d-solids#look-around)).

## Schermi touch e tablet

CadCraft legge un dito come un clic del mouse:

- Un tocco sceglie un punto o un oggetto, oppure seleziona.
- Trascinare un dito su uno spazio vuoto disegna un lazo (spostando prima a destra si ottiene una finestra, prima a sinistra un'intersezione; vedere [Selezione con lazo](topic:lasso-selection)).
- In {{cmd:TRIM}} e {{cmd:EXTEND}}, trascinare un dito attraverso dei pezzi li rifila o estende tutti.
- Trascinare la maniglia di un oggetto selezionato sposta la maniglia (maniglie e riquadro di selezione sono più grandi per un dito).
- **Pizzicare** con due dita per ingrandire attorno al punto tra di esse; muovere due dita insieme per **spostare** la vista. Un secondo dito annulla ciò che il primo ha iniziato, quindi un pizzico non lascia mai segni.
- Una **pressione prolungata** (tenere fermo per circa mezzo secondo) è un clic destro: {{key:Enter}}. Termina un comando, completa una selezione o ripete l'ultimo comando.

Sotto la riga di comando compare una **riga di tasti**: {{ui:Esc}}, Annulla, Ripristina, i caratteri che una tastiera da tablet nasconde (`@` `,` `<` `'` `"` `-`), {{ui:Snap}}, {{ui:Ortho}}, un pulsante tastiera e un grande {{ui:Invio}}. Toccare il pulsante tastiera (o la riga di comando) per digitare un comando o un numero.

Non esiste il passaggio del mouse, quindi i marcatori di aggancio compaiono solo dove si trova il dito.

:::touch
Si sta usando uno schermo touch. Per qualcosa di più di una rapida occhiata, una tastiera collegata e un mouse o trackpad rendono CadCraft molto più facile da usare.
:::

## Browser

CadCraft funziona allo stesso modo in Chrome, Edge, Firefox e Safari, su Mac, Windows e Linux. Le differenze sono minime:

| Argomento | Cosa sapere |
|---|---|
| Apertura di un DWG | I disegni grandi richiedono alcuni secondi per essere letti in ogni browser; nel frattempo la riga di stato mostra "Lettura …" |
| Download | Ogni browser decide dove vanno i download e se chiedere prima; vedere [Browser e computer](common:browsers) |
| Apri per stampare | Apre il PDF in una nuova scheda. Se il browser blocca le finestre pop-up, CadCraft scarica invece il PDF |
| F7 | Firefox può offrire la navigazione con cursore; scegliere No |
| Uscita con modifiche non salvate | Ogni browser mostra la propria domanda "Lasciare il sito?", che CadCraft non può modificare |

:::safari
In Safari, un PDF aperto con {{ui:Apri per stampare}} può comparire nella scheda senza stampare: usare **File**, poi **Stampa**.
:::

:::firefox
Firefox può chiedere cosa fare con ogni download. Scegliere di salvare il file, oppure modificare questa impostazione una volta sola nelle impostazioni di Firefox, alla voce Download.
:::
