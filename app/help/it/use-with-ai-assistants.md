---
title: Usare CadCraft con un assistente IA
summary: Far lavorare con CadCraft un assistente IA o uno script di propria scelta: che cosa può fare, come collegare un client MCP qualsiasi e come restare al comando (permessi, annullamento, registro attività, Disconnetti).
keywords: ia, assistente, agente, mcp, model context protocol, script, automazione, riga di comando, cli, json, token, permessi, disconnetti, attività, cartelle, percorsi, svg, batch
from: 06ba4ef6
---

## Cosa si impara

Come far guardare un disegno a un assistente IA (o a uno script scritto dall'utente), far eseguire i comandi di CadCraft, stampare e salvare, e stabilire che cosa è autorizzato a modificare.

CadCraft non ha **un'IA propria** e non invia nulla a nessuno. L'assistente si porta da fuori: qualsiasi programma che parla il Model Context Protocol (MCP). CadCraft gli mette a disposizione solo degli strumenti, e la scelta di quali spetta all'utente.

Ci sono due modi per accedere:

- **Il disegno aperto.** L'assistente lavora in questa finestra, accanto all'utente, tramite CadCraft Studio sul computer. È la funzione di {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:Assistenti}}.
- **Disegni sul computer, senza aprire l'app.** Il server MCP di CadCraft e il comando `cadcraft` leggono e scrivono file DWG e DXF nelle cartelle indicate. Vedere "Lavorare sui file senza aprire CadCraft" più avanti.

## Attivarlo

1. Aprire {{ui:Impostazioni}} (l'ingranaggio nella barra dell'app, oppure {{key:Mod+,}}) e andare alla scheda {{ui:CadCraft}}.
2. Sotto {{ui:Assistenti}}, spuntare **Consenti agli assistenti IA e agli script di usare CadCraft**. È disattivato finché non lo si fa.
3. Scegliere che cosa può fare. **Lettura** è selezionata all'inizio; spuntare le altre solo quando servono.

| Permesso | Che cosa può fare l'assistente |
|---|---|
| Lettura | Guardare il disegno: descriverlo, elencare e trovare oggetti, vedere la selezione, descrivere la vista e farne un'immagine, verificarlo rispetto alle regole di layer e di disegno |
| Modifica | Eseguire comandi sul disegno e cambiare la selezione. Ogni azione è un passo annullabile |
| Salva | Salvare il disegno (sul desktop, nel suo file; nel browser, come download) |
| Esporta | Stampare in PDF e creare altri file |

## Consentirgli di usare file nelle cartelle scelte

In CadCraft Studio un assistente può aprire, salvare e stampare file per nome invece di usare le finestre di dialogo dei file, ma solo all'interno delle cartelle aggiunte in {{ui:Assistenti}} › {{ui:Cartelle che possono usare}}:

1. Scegliere {{ui:Aggiungi una cartella…}} e selezionare la cartella nella finestra di dialogo di Studio.
2. L'assistente può ora elencare i file presenti (`files_list`), aprire un disegno (`drawing_open`), salvarlo lì in una versione DWG o come DXF, stampare in un file PDF o SVG, caricare un file LISP, e fornire a un comando il file che richiede (`INSERT` `F`, `XATTACH`, un file di punti) oppure indicare dove va il file di un comando (il CSV di `COUNT`, `PUBLISH`).
3. {{ui:Rimuovi}} toglie subito una cartella. I percorsi esterni vengono rifiutati, e un file già presente viene sostituito solo se l'assistente lo chiede o se è stato lui a scriverlo.

L'apertura richiede **Lettura**; la scrittura di un disegno richiede **Salva**; qualsiasi altro file richiede **Esporta**.

Gli strumenti fuori dai permessi selezionati non vengono offerti all'assistente, e se lui ne chiede uno comunque, CadCraft lo rifiuta e lo annota nel registro attività. Spegnere l'interruttore chiude subito tutte le connessioni. {{ui:Reimposta impostazioni di CadCraft}} lo spegne anch'esso.

## Collegare l'assistente

Gli assistenti si collegano tramite **CadCraft Studio** sul computer: Studio avvia un piccolo server raggiungibile solo da questo computer (indirizzo `127.0.0.1`), protetto da un token che Studio genera a ogni avvio. Aprire Studio, scegliere {{ui:Collega un assistente}}, e copiare l'indirizzo e il token.

- Nell'assistente aggiungere un server MCP di tipo HTTP con l'indirizzo (ha questo aspetto: `http://127.0.0.1:47615/mcp`) e l'intestazione `Authorization: Bearer <token>`. Studio mostra le impostazioni da incollare.

{{ui:Nuovo token}} in Studio fa riconnettere tutti gli assistenti collegati con il nuovo token. Non condividere mai il token: chiunque lo possieda può usare le app attivate, finché Studio è in esecuzione.

:::note
Una scheda del browser non può aprire una connessione per un assistente: nelle app del browser l'interruttore non ha effetto finché non si usa CadCraft Studio sul computer.
:::

## Restare al comando

- **Ogni azione è un solo passo di annullamento**, etichettato con il nome dell'assistente, ad esempio "Assistente: LINE". Premere {{key:Mod+Z}} per annullare nel complesso l'ultima azione dell'assistente.
- **Si vede che cosa fa.** I suoi comandi compaiono nella cronologia dei comandi con **[Assistente]** davanti, e il disegno si ridisegna mentre lavora.
- **Attende l'utente.** Mentre si è nel mezzo di un comando, l'assistente può leggere ma non modificare il disegno; gli viene detto di riprovare quando si ha finito.
- **Si sa quando è collegato.** Un pulsante nella barra dell'app indica il nome dell'assistente mentre è collegato. Cliccarlo per vedere che cosa può fare, oppure per **Disconnetti**.
- **Attività.** {{ui:Impostazioni}} › {{ui:CadCraft}} › {{ui:Assistenti}} › {{ui:Attività}} elenca ogni chiamata: quando, quale strumento, eseguita o rifiutata, e il passo di annullamento che ha creato. {{ui:Salva il registro}} ne conserva una copia.

## Che cosa può chiedere un assistente

| Strumento | Permesso | Che cosa fa |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Lettura | Il nome del disegno, le unità, i layer, i blocchi, le tavole; che cosa è visibile sullo schermo |
| `files_list`, `drawing_open` | Lettura | Studio: i file nelle proprie cartelle; aprirne uno in questa finestra |
| `objects_list`, `object_get`, `selection_get` | Lettura | Oggetti con geometria, lunghezza e area (oppure solo quanti, per tipo e layer); la selezione |
| `drawing_check` | Lettura | Regole come i layer ammessi, nulla sul layer 0, colori DaLayer, altezze del testo |
| `view_screenshot` | Lettura | Un'immagine del disegno come visualizzato |
| `command_run` | Modifica | Digita sulla riga di comando: `LINE 0,0 @100,0 @0,50 ` si legge come lo si digiterebbe (uno spazio chiude una risposta), oppure un elenco con una risposta per ciascuno. Può lasciare un comando aperto e proseguire alla chiamata successiva |
| `script_run` | Modifica | Uno script (`.scr`) o un file LISP, come lo carica {{ui:APPLOAD}} |
| `block_insert` | Modifica | Inserisce un blocco con i suoi valori di attributo in un solo passo |
| `selection_set`, `undo` | Modifica | Seleziona oggetti per il comando successivo; annulla i propri passi |
| `drawing_save` | Salva | {{ui:Salva}} di CadCraft, oppure {{ui:Salva con nome}} in una delle proprie cartelle |
| `drawing_plot` | Esporta | Un PDF o SVG di una tavola o del modello, a una scala o adattato (i sottofondi PDF non vengono ancora stampati in questo modo) |

Mentre un assistente esegue un comando, CadCraft pone le sue domande sulla riga di comando invece che in una finestra di dialogo (ad esempio se inserire un intero disegno o un solo blocco), in modo che l'assistente possa rispondere. Libreria e Trova richiedono ancora l'intervento dell'utente; all'assistente viene detto di chiedere.

## Lavorare sui file senza aprire CadCraft

Il server MCP di CadCraft (`cadcraft-mcp`) e la riga di comando (`cadcraft`) eseguono il codice di disegno di CadCraft in Node.js, senza finestra. Richiedono Node.js 20 o successivo.

- **Il server MCP** lavora solo nelle cartelle indicate, e solo con i permessi concessi: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Senza `--root` non può aprire alcun file; senza `--allow` può solo leggere. Può anche leggere modelli IFC, computi e le annotazioni nei set PDF.
- **La riga di comando** serve per i propri script: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Più file insieme: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Aggiungere `--json` per un output leggibile da un programma.

:::note
Se `npx @getcadcraft/mcp` segnala che il pacchetto non è stato trovato, non è ancora stato pubblicato. Le novità su getcadcraft.com indicheranno quando lo sarà.
:::

## Se qualcosa non funziona

- **L'assistente non vede gli strumenti di CadCraft:** verificare che l'interruttore sia acceso in questa finestra e che la finestra sia aperta in Studio.
- **"needs the edit permission":** spuntare **Modifica** sotto {{ui:Assistenti}}, poi chiedere di nuovo.
- **"outside the folders assistants may use":** aggiungere quella cartella in {{ui:Assistenti}} › {{ui:Cartelle che possono usare}}, oppure chiedere all'assistente di usare un file in una cartella già aggiunta.
- **Errori "401" o "token":** il token è cambiato (Studio è stato riavviato, oppure è stato usato {{ui:Nuovo token}}). Copiare il nuovo token nelle impostazioni dell'assistente.
- **La modifica dell'assistente è sbagliata:** premere {{key:Mod+Z}}. Una pressione annulla un'intera azione dell'assistente.

## Vedere anche

- [Ricette per assistenti IA](common:assistants-recipes): esempi svolti, ciascuno con gli strumenti che chiama.
