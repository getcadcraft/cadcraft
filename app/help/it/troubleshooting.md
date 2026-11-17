---
title: Risoluzione dei problemi
summary: Messaggi che CadCraft mostra e problemi che si possono incontrare, ciascuno con la causa e la soluzione.
keywords: problema, errore, non funziona, messaggio, impossibile aprire, comando sconosciuto, non succede nulla, bloccato, tasti non funzionanti, vuoto, mancante, correggere
from: 8299b222
---

## Apertura dei file

| Messaggio o sintomo | Causa | Soluzione |
|---|---|---|
| "CadCraft apre disegni DWG e DXF. "…" non è né l'uno né l'altro." | Il file non è un `.dwg` o un `.dxf`. | Aprire il file del disegno stesso. Un PDF può essere importato (Apri chiede: importa o allega, vedi [Sottofondi PDF](topic:pdf-underlay)); le immagini si inseriscono con `IMAGEATTACH`. |
| "Questo DXF binario termina nel mezzo di un oggetto: il file è troncato o danneggiato." | Il DXF binario si interrompe prima della fine. | Digitare RECOVER per aprire ciò che può essere letto, oppure richiedere di nuovo il file. |
| "Questo file non è un DXF leggibile (codice di gruppo non valido alla riga …)." | Il DXF è danneggiato o non è realmente un DXF. | Richiedere di nuovo il file, oppure un DWG. |
| "Questo disegno non può essere letto. Potrebbe essere danneggiato, oppure salvato in una versione che il lettore non gestisce ancora (…)." | Il lettore DWG non è riuscito a leggerlo. | Richiedere il DWG salvato in una versione precedente, oppure un DXF. |
| "Questo disegno è di AutoCAD R11 / R12 (DWG AC1009), più vecchio di quanto CadCraft legga …" | I file DWG della Release 12 e precedenti usano un formato che CadCraft non legge. | Nel programma che lo ha creato, salvarlo come DXF (qualsiasi versione) oppure come DWG più recente, e aprire quello. Il Salva con nome di CadCraft offre il DXF R12 per i programmi che richiedono quel vecchio formato. |
| "Impossibile aprire …" seguito da un messaggio di rete, al primo DWG | Il lettore DWG non è stato scaricato: si è offline e CadCraft non è salvato per l'uso offline, oppure la connessione è caduta. | Collegarsi e riprovare, oppure aprire un DXF. Fare clic su {{ui:Salva per l'uso offline}} e attendere "Pronto per l'uso offline" in modo che i file DWG si aprano offline la volta successiva. Vedi [Uso offline](common:offline). |
| Il pulsante offline indica "Impossibile salvare" | Alcuni file non sono stati scaricati. | Controllare la connessione e fare clic sul pulsante per riprovare. |
| Il pulsante offline indica "Uso offline non disponibile" | Le finestre private e alcuni computer gestiti non possono conservare una copia offline. | Usare una finestra normale, oppure restare online. |
| CadCraft non si apre senza connessione | Non è stato salvato per l'uso offline in questo browser, oppure il browser lo ha cancellato. | La prossima volta che si è online, fare clic su {{ui:Salva per l'uso offline}} e attendere "Pronto per l'uso offline". |
| Il disegno si apre ma mancano delle parti | Oggetti che CadCraft non può ancora disegnare, oppure layer disattivati o congelati nel file. | Leggere "Informazioni su questo file" nel pannello di sinistra. Controllare il pannello {{ui:Layer}}. |
| Il testo va a capo su due righe | CadCraft disegna il testo con un carattere in stile Helvetica, più largo di alcuni caratteri CAD. | Accorciare il testo in Proprietà, oppure accettare la riga in più. |
| Un cerchio appare come un'ellisse, oppure il testo specchiato si legge nel verso giusto | L'oggetto è stato disegnato su un piano inclinato, oppure visto dal basso, nel programma che ha creato il file. CadCraft lo mostra come visto dall'alto, come lo mostra la vista in pianta di quel programma; il testo resta leggibile. | Nulla da correggere. Per vederlo come nell'altro programma, richiedere il disegno appiattito, oppure con gli oggetti disegnati dall'alto. |
| Un blocco, un cerchio o una quota si trova in un punto diverso rispetto al programma che ha creato il file | Un caso di disegno che CadCraft legge in modo errato. | Segnalarlo su Discord, allegando il file se si può condividerlo. |

## La riga di comando

| Messaggio o sintomo | Causa | Soluzione |
|---|---|---|
| "Comando sconosciuto "…". Digitare HELP per l'elenco." | Nessun comando o alias con quel nome. | Digitare `HELP`, oppure vedere [Riferimento dei comandi](topic:commands). Alcuni comandi noti sono [non ancora implementati](topic:not-built-yet). |
| "Nessun comando corrispondente" accanto alla riga di comando durante la digitazione | Quello che si digita non corrisponde ancora a nulla. | Continuare a digitare, oppure controllare l'ortografia. |
| "Richiesto un punto o una parola chiave di opzione." | Quello che si è digitato non è un punto né un'opzione. | Controllare il formato: `x,y`, `@dx,dy`, `@d<a`, oppure un singolo numero. Vedi [Inserimento di coordinate e distanze](topic:coordinate-entry). |
| "Richiesto un numero positivo oppure due punti." | Una distanza era negativa o non un numero. | Digitare un numero positivo, oppure fare clic su due punti. |
| "Richiesto un angolo in gradi oppure due punti." | L'angolo non era un numero. | Digitare i gradi come numero semplice. |
| "Richiesto un numero." | Era atteso un numero. | Digitare solo cifre. |
| "Parola chiave di opzione non valida." | Le lettere non corrispondono a un'opzione. | Digitare le lettere maiuscole mostrate tra le parentesi quadre. |
| `*Annulla*` | Si è premuto {{key:Esc}}, oppure Invio dove era richiesto un punto. | Riavviare il comando. |
| La digitazione non raggiunge la riga di comando | Una casella in un pannello o in una finestra di dialogo ha il cursore. | Premere Invio o {{key:Esc}}, oppure fare clic sul disegno. |
| Il comando usa oggetti che non si sono scelti | Erano selezionati prima di avviare il comando. | Premere {{key:Esc}} prima del comando. |
| Una linea è finita in un punto inatteso | `x,y` è assoluto. | Usare `@dx,dy` per i punti relativi. |
| "Terminare o annullare prima il comando in corso (Esc)." | Si è premuto {{key:Mod+S}} mentre un comando era in esecuzione. | Premere {{key:Esc}}, poi salvare. |
| "Impossibile salvare come DWG (AutoCAD 2000): … Provare Salva con nome, poi DXF." | Qualcosa nel disegno non può essere scritto come DWG. | Premere {{key:Mod+Shift+S}}, scegliere {{ui:DXF R12}} e fare clic su {{ui:Salva}}. |
| "Non salvato." | Si è chiusa la finestra {{ui:Salva una copia con nome}} con {{ui:Annulla}} oppure {{key:Esc}}. | Premere di nuovo {{key:Mod+Shift+S}} e fare clic su {{ui:Salva}}. |

## Modifica

| Messaggio o sintomo | Causa | Soluzione |
|---|---|---|
| Un oggetto non si seleziona | Il suo layer è bloccato, disattivato o congelato; oppure si è su un foglio e si tratta del modello dentro una viewport. | Sbloccare il layer, oppure passare alla scheda {{ui:Modello}}. |
| "Nessun elemento trovato in quel punto." | Nessun oggetto sotto il clic. | Ingrandire e fare clic sulla linea stessa. |
| "Nessun oggetto interseca quell'oggetto in quel punto." | {{cmd:TRIM}} non ha trovato oggetti che intersecano il tratto scelto. | Controllare che la linea di taglio lo intersechi davvero. |
| "Impossibile rifilare quell'oggetto." | Rifila lavora su linee, archi, cerchi e polilinee. | Esplodere prima i blocchi, oppure cancellare e ridisegnare. |
| "Nessun limite in quella direzione." | {{cmd:EXTEND}} non ha trovato nulla da raggiungere. | Scegliere più vicino all'estremità che deve allungarsi. |
| "Impossibile creare un offset di quell'oggetto." | Offset lavora su linee, archi, cerchi e polilinee. | Esplodere prima l'oggetto, oppure disegnare una linea parallela. |
| "Impossibile creare un offset così lontano." | L'offset farebbe girare la forma al contrario. | Usare una distanza più piccola. |
| "Il raggio è troppo grande." oppure "La distanza è troppo grande." | Il raccordo o lo smusso andrebbe oltre l'estremità di una linea. | Impostare un raggio più piccolo con `R`, oppure distanze più piccole con `D`. |
| "È possibile tagliare indietro solo il primo o l'ultimo segmento di una polilinea aperta." | L'angolo taglierebbe nel mezzo della polilinea. | Scegliere due segmenti della polilinea vicini tra loro, oppure usare `P` per ogni angolo. |
| "Scegliere una seconda linea diversa." | La seconda scelta era la stessa linea, oppure non una linea. | Scegliere un'altra linea. |
| "Solo polilinee, riferimenti a blocchi e quote possono essere esplosi." | La selezione non conteneva nulla da esplodere. | Selezionare una polilinea, un riferimento a blocco o una quota. |
| "Questo è il layer corrente. Rendere prima corrente un altro layer." | Si è tentato di disattivare il layer corrente. | Fare clic sul nome di un altro layer, poi disattivare questo. |
| "Esiste già un layer chiamato …" | I nomi dei layer devono essere unici. | Scegliere un altro nome. |
| "Nulla da annullare." | Non c'è più nulla da annullare, oppure si è aperto o avviato un disegno (questo cancella la cronologia). | — |

## Quote e blocchi

| Messaggio o sintomo | Causa | Soluzione |
|---|---|---|
| Il testo e le frecce delle quote sono minuscoli o enormi | Le dimensioni sono in unità di disegno; la scala complessiva non si adatta al disegno. | Impostare {{cmd:DIMSCALE}} sulla scala di stampa; vedi [Imposta le dimensioni delle quote](topic:dimension-settings). |
| "Scegliere un punto all'interno dell'angolo da misurare." | La posizione della quota angolare si trova su un lato. | Fare clic all'interno dell'angolo. |
| "Quelle linee sono parallele." | Le linee parallele non hanno angolo tra loro. | Scegliere due linee che si incontrano. |
| "Scegliere una quota lineare o allineata." | {{cmd:DIMCONTINUE}} o {{cmd:DIMBASELINE}} richiede una quota da cui partire. | Scegliere una quota lineare o allineata. |
| "Questo disegno non ha ancora blocchi: F inserisce un blocco da un file, L dalla libreria …" | Il disegno non ha blocchi propri. | Digitare `F` o `L`, oppure creare un blocco con {{cmd:BLOCK}}. |
| "Nessun blocco chiamato "…"." | Il nome è sbagliato. | Il messaggio elenca i blocchi presenti. |
| "Il nome di un blocco non può iniziare con * né usare …" seguito da un elenco di caratteri | Il nome contiene un carattere che i blocchi non possono usare. | Usare lettere, cifre, `-` e `_`. |
| "Un blocco non può contenere se stesso." | La selezione contiene un riferimento al blocco che si sta creando. | Escludere quel riferimento. |
| "Nessun oggetto selezionato; nulla creato." | Si è premuto Invio prima di selezionare. | Eseguire di nuovo {{cmd:BLOCK}} e selezionare gli oggetti. |

## Tavole e stampa

| Messaggio o sintomo | Causa | Soluzione |
|---|---|---|
| "Le viewport vanno su un layout. Aprire prima una scheda di layout (oppure crearne una con LAYOUT)." | {{cmd:MVIEW}} sulla scheda {{ui:Modello}}. | Fare prima clic su una scheda foglio. |
| "Aprire prima il layout con la viewport." | {{cmd:VPVIEW}} sulla scheda {{ui:Modello}}. | Fare clic prima sulla scheda foglio. |
| La scala di una viewport appare dieci volte sbagliata | Le unità di disegno sono sbagliate. | Impostare {{ui:Unità}} in {{ui:Impostazioni correnti}}. |
| "Non c'è ancora nulla da stampare." | Il modello è vuoto. | Disegnare qualcosa, oppure aprire un disegno. |
| "Scegliere la finestra da stampare." | È scelto {{ui:Una finestra…}} ma non è stata scelta alcuna finestra. | Fare clic su {{ui:Scegli}} e scegliere due angoli. |
| "… più grande della carta: i bordi sono tagliati." | L'area non entra in quella scala. | Scegliere una scala più piccola, un formato di carta più grande, oppure {{ui:Adatta alla carta}}. |
| "Il browser ha bloccato la nuova scheda, quindi il PDF è stato scaricato." | I pop-up sono bloccati per il sito. | Aprire il PDF scaricato, oppure consentire i pop-up per il sito. |
| I caratteri vengono stampati come "?" | I caratteri del PDF non hanno lettere per essi (ideogrammi rari, hindi e altre scritture che richiedono una composizione complessa, …), oppure il carattere più ampio non è stato scaricato (offline). Le scritture europee, cirillico, greco, ebraico, arabo, persiano, urdu, thai, cinese, giapponese e coreano vengono stampati come sono. | Per arabo, thai, cinese, giapponese o coreano, stampare di nuovo con una connessione. Le altre scritture non sono ancora implementate. |
| Le linee di costruzione compaiono nel PDF | Il loro layer viene stampato. | Fare clic sul pulsante di stampa del layer. |
| Tutte le linee hanno lo stesso spessore | Il loro spessore è {{ui:Predefinito}}, quindi vengono stampate con lo spessore penna della finestra di dialogo. | Assegnare ai layer o agli oggetti uno {{ui:Spessore di linea}} nel pannello di destra, oppure scegliere un {{ui:Spessore di linea}} nella finestra di dialogo. Per vedere gli spessori a schermo, premere {{ui:LWT}} nella barra di stato. |

## Tasti e schermo

| Sintomo | Causa | Soluzione |
|---|---|---|
| F3, F7 o F8 cambiano il volume o aprono Mission Control | Tasti funzione del Mac. | Tenere premuto **fn**, oppure usare i pulsanti della barra di stato. Vedi [Tasti, mouse e trackpad](common:keys). |
| F7 chiede del navigazione con cursore | L'uso di F7 da parte di Firefox. | Scegliere No; usare il pulsante {{ui:Griglia}}. |
| {{key:Mod+N}} ha aperto una finestra del browser | Il browser riserva quel tasto. | Fare clic su {{ui:Nuova}} oppure digitare `NEW`. |
| {{key:Mod+A}} ha selezionato il testo della riga di comando | La riga di comando aveva il cursore. | Fare prima clic su un oggetto, oppure digitare `ALL` a un prompt `Selezionare oggetti`. |
| {{key:Delete}} non cancella | La riga di comando aveva il cursore. | Digitare `E` e premere Invio. |
| Il clic destro non fa nulla su un trackpad Mac | Il clic con Control può essere considerato un normale clic. | Fare clic con due dita. |
| Non si sposta la vista con il trackpad | Non c'è un pulsante centrale, e Spazio non sposta la vista. | Scorrere con due dita: la vista 2D si sposta (il pizzico e la rotella del mouse fanno zoom). Oppure trascinare tenendo premuto il clic destro. |
| Il primo {{key:Esc}} ha lasciato lo schermo intero | Il browser usa Esc per uscire dallo schermo intero. | Premere di nuovo {{key:Esc}} per annullare il comando. |
| {{key:F1}} non fa nulla su un Mac | F1 è un tasto di luminosità. | Tenere premuto **fn**, oppure fare clic su {{ui:Guida}}. |
| La digitazione va nella casella di ricerca della guida | Il pannello della guida ha il cursore. | Fare clic sul disegno. |
| Il disegno è diventato vuoto | Si è ingrandito molto lontano. | Fare clic su {{ui:Estensione}}, oppure fare doppio clic sulla rotella. |
| "Lasciare il sito?" alla chiusura della scheda | Ci sono modifiche non salvate. | Restare, salvare con {{key:Mod+S}}, poi chiudere. |
