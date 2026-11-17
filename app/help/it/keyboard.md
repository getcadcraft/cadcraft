---
title: Tastiera e mouse
summary: Ogni tasto, azione del mouse e tasto della riga di comando nell'app di disegno CadCraft, così come il codice li gestisce.
keywords: tastiera, scorciatoie, tasti, mouse, rotella, pan, zoom, clic destro, pulsante centrale, f3, f7, f8, ctrl, tasto comando, tasti rapidi, copia, taglia, incolla, duplica, appunti, seleziona tutto
from: a2608a29
---

Le scorciatoie sono mostrate per il proprio computer. Su un Mac, ogni scorciatoia {{key:Mod}} qui sotto usa il tasto Command, ma funziona anche il tasto Control. Come si scrivono i tasti, e come usare i tasti F su un Mac, è descritto in [Tasti, mouse e trackpad](common:keys).

## Digitare i comandi

| Tasto | Cosa fa |
|---|---|
| Qualsiasi lettera, cifra o simbolo | Va alla riga di comando, ovunque sia il puntatore, a meno che una casella di un pannello abbia il cursore |
| {{key:Enter}} | Invia ciò che è stato digitato. Su un prompt vuoto: ripete l'ultimo comando, termina un comando, completa una selezione, oppure accetta il valore predefinito in `<…>` |
| {{key:Space}} | Come {{key:Enter}}, tranne quando CadCraft chiede un testo (testo, nomi di blocchi, testo di quota), dove digita uno spazio |
| {{key:Esc}} | Annulla il comando. Senza comando in corso: annulla uno spostamento di grip o un riquadro di selezione, poi cancella la selezione |
| {{key:Tab}} | Accetta il comando suggerito mostrato a destra della riga di comando. Con nulla digitato e il puntatore su oggetti sovrapposti: evidenzia il successivo lì (fare clic per sceglierlo) |
| {{key:Up}} {{key:Down}} | Scorre le righe digitate prima (le ultime 100) |

## Disegno e modifica

| Tasto | Cosa fa |
|---|---|
| {{key:Mod+Z}} | Annulla l'ultimo comando |
| {{key:Mod+Y}} oppure {{key:Mod+Shift+Z}} | Ripristina |
| {{key:Mod+A}} | Seleziona ogni oggetto modificabile sulla scheda aperta ({{cmd:SELECTALL}}). Se è stato digitato qualcosa nella riga di comando, seleziona quel testo |
| {{key:Delete}} | Cancella gli oggetti selezionati ({{cmd:ERASE}}), a meno che non sia stato digitato qualcosa nella riga di comando |
| {{key:Backspace}} | Cancella gli oggetti selezionati quando la riga di comando non ha il cursore; nella riga di comando elimina ciò che è stato digitato |
| {{key:Esc}} | Senza comando in corso: cancella la selezione ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Salva una copia nel formato del disegno (DWG o DXF) |
| {{key:Mod+Shift+S}} | Salva con nome: scegliere DWG o DXF, poi salvare una copia |
| {{key:Mod+O}} | Apre un DWG o DXF |
| {{key:Mod+P}} | Stampa in PDF |

Annulla, ripristina, seleziona tutto e stampa non fanno nulla mentre un comando è in corso: premere prima {{key:Esc}}.

## Copia, taglia e incolla

| Tasto | Cosa fa |
|---|---|
| {{key:Mod+C}} | Copia la selezione negli Appunti ({{cmd:COPYCLIP}}). Nulla selezionato: CadCraft chiede gli oggetti |
| {{key:Mod+X}} | Taglia: copia la selezione, poi la cancella ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Incolla: la copia segue il puntatore; fare clic, oppure digitare un punto, per posarla ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Incolla nella stessa posizione: alle coordinate da cui è stata copiata ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Duplica: una copia della selezione segue il puntatore; fare clic per posarla, {{key:Esc}} non lascia nulla ({{cmd:DUPLICATE}}) |

Le stesse azioni sono nel gruppo {{ui:Modifica}} della barra degli strumenti ({{ui:Copia}}, {{ui:Incolla}}) e nel suo menu {{ui:Altro}}. Mentre un altro comando è in corso, completarlo oppure premere prima {{key:Esc}}; premere di nuovo {{key:Mod+V}} o {{key:Mod+D}} mentre una copia segue il cursore ricomincia. Quando si è digitato qualcosa nella riga di comando, o un comando chiede un testo, questi tasti copiano, tagliano e incollano quel testo. Vedere [Copia, incolla e duplica](topic:copy-paste).

## Interruttori

| Tasto | Interruttore | Pulsante della barra di stato |
|---|---|---|
| {{key:F3}} | Snap a oggetto attivo o disattivo | {{ui:Snap}} |
| {{key:F7}} | Griglia attiva o disattiva | {{ui:Griglia}} |
| {{key:F8}} | Ortho attivo o disattivo | {{ui:Ortho}} |
| {{key:F10}} | Tracciamento polare attivo o disattivo | {{ui:Polare}} |
| {{key:F11}} | Tracciamento snap a oggetto attivo o disattivo | {{ui:Traccia}} |
| {{key:F12}} | Input dinamico attivo o disattivo | {{ui:Dinam.}} |

:::mac
Su un Mac, F3, F7 e F8 sono di solito tasti di Mission Control e tasti multimediali. Tenere premuto **fn** insieme ad essi, oppure attivare i tasti funzione standard nelle Impostazioni di Sistema, come descritto in [Tasti, mouse e trackpad](common:keys). I pulsanti della barra di stato funzionano sempre.
:::

:::firefox
F7 in Firefox può anche chiedere di attivare la navigazione con cursore. Scegliere **No**, e usare il pulsante {{ui:Griglia}} se continua a chiederlo.
:::

## Guida

| Tasto | Cosa fa |
|---|---|
| {{key:F1}} | Apre o chiude questa guida, accanto al disegno. Funziona anche mentre un comando è in corso, e non raggiunge mai la riga di comando. |
| {{key:Esc}} | Con il cursore nel pannello della guida: cancella la ricerca, oppure chiude il pannello |

Il pulsante {{ui:Guida}} nella barra in alto fa lo stesso di {{key:F1}}. Mentre si digita nella casella di ricerca della guida, nulla arriva alla riga di comando. Fare clic sul disegno per restituire i tasti a CadCraft; il pannello resta aperto accanto ad esso.

:::mac
Su una tastiera Mac, tenere premuto **fn** e premere F1, oppure fare clic su {{ui:Guida}}.
:::

## Schermo

| Tasto | Cosa fa |
|---|---|
| {{key:Ctrl+Shift+F}} | Passa tra normale, schermo intero e schermo intero con le barre nascoste. Si usa il tasto Control su ogni computer, anche sul Mac. |
| {{key:Left}} {{key:Right}} | Con una scheda sotto il disegno attiva: la scheda precedente o successiva |

A schermo intero, il browser può usare il primo {{key:Esc}} per uscire dallo schermo intero. Premere di nuovo {{key:Esc}} per annullare un comando.

## Finestre di dialogo

| Tasto | Cosa fa |
|---|---|
| {{key:Esc}} | Chiude la finestra di dialogo ({{ui:Stampa in PDF}}, oppure una domanda come "Modifiche non salvate", dove significa {{ui:Annulla}}) |
| {{key:Tab}} | Si sposta tra le impostazioni e i pulsanti della finestra di dialogo |

Mentre una finestra di dialogo è aperta, i tasti del disegno sono disattivati.

## Campi del pannello

In una casella del pannello destro o sinistro:

| Tasto | Cosa fa |
|---|---|
| {{key:Enter}} | Applica il valore e lascia la casella |
| {{key:Esc}} | Ripristina il valore precedente e lascia la casella |
| {{key:Tab}} | Applica e passa alla casella successiva |

Mentre una casella ha il cursore, le lettere vengono scritte lì, non nella riga di comando.

## Mouse

| Azione | Cosa fa |
|---|---|
| Clic | Sceglie un punto quando un comando lo chiede; sceglie un oggetto quando chiede oggetti; altrimenti seleziona un oggetto o un grip |
| Shift+clic | Rimuove dalla selezione un oggetto selezionato (con {{ui:Clic sugli oggetti}} impostato su {{ui:Sostituisce la selezione}} in [Impostazioni](topic:settings): lo aggiunge). Mentre si sceglie un punto: ignora gli snap a oggetto per quel clic |
| Clic su spazio vuoto, poi clic di nuovo | Un riquadro di selezione: da sinistra a destra è una finestra, da destra a sinistra un'intersezione |
| Trascinare su spazio vuoto | Un lazo: andare prima a destra è una finestra, prima a sinistra un'intersezione; {{key:Space}} mentre si trascina scorre tra finestra, intersezione e recinto; {{key:Esc}} lo lascia cadere (LASSOMODE 0, oppure Impostazioni, lo riporta a rettangolo) |
| Trascinare attraverso pezzi in TRIM o EXTEND | Taglia (o estende) ogni pezzo attraversato dal percorso; tenere premuto {{key:Shift}} per l'altra operazione |
| Trascinare un grip | Sposta il grip (oppure fare clic sul grip, poi fare clic dove va) |
| Doppio clic sul testo | Lo seleziona e pone il cursore nella sua casella {{ui:Testo}} nel pannello destro |
| Clic destro | Invio. Durante lo spostamento di un grip o un riquadro di selezione: lo annulla |
| Trascinare con il pulsante destro | Sposta la vista (pan) |
| Rotella | Ingrandisce e riduce attorno al mirino |
| Trascinare con la rotella (pulsante centrale) | Sposta la vista (pan) |
| Doppio clic sulla rotella | Ingrandisce all'intero disegno (estensione) |
| Trascinare un DWG o DXF sul disegno | Lo apre |

Su trackpad o schermo tattile, vedere [Mouse, trackpad e tocco](topic:mouse-trackpad-touch).

## Tasti che il browser mantiene

{{key:Mod+N}}, {{key:Mod+W}} e {{key:Mod+T}} appartengono sempre al browser. CadCraft non li usa: usare {{ui:Nuovo}} oppure digitare `NEW` per un nuovo disegno. Gli Appunti di CadCraft sono propri: {{key:Mod+C}} e {{key:Mod+V}} copiano oggetti tra disegni e schede di CadCraft, non da o verso altri programmi.

:::mac
Se {{key:Mod+Y}} apre la cronologia del browser invece di ripristinare, usare {{key:Mod+Shift+Z}} oppure il pulsante {{ui:Ripristina}}.
:::

## Dove si trova Sposta

Sposta è il comando `MOVE` (tasto {{key:M}}): scegliere gli oggetti, poi un punto base e un secondo punto oppure una distanza digitata. Ci sono anche `ALIGN` e `DISTRIBUTE`. BimCraft usa gli stessi nomi per gli stessi scopi sugli elementi di edificio, ma il suo {{key:M}} è Misura: il suo Sposta è {{key:Shift+M}}.
