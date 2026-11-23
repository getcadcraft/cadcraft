---
title: Inserire da un file o dalla libreria
summary: Portare un blocco, o un intero disegno, da un altro DWG o DXF, e posizionare elementi dalla Libreria, da un file o da un'altra libreria, con i loro crediti e aggiornamenti.
keywords: inserisci, file, libreria, librarycraft, elemento, attrezzatura, blocco da un altro disegno, wblock, centro di progettazione, crediti, attribuzione, licenza, aggiornamento, feed, item.json
from: f6e4e452
---

## Inserire un blocco da un altro disegno

1. Digitare `I` e premere {{key:Enter}}, oppure fare clic su {{ui:Insert}} nel gruppo Blocchi.
2. La riga di comando in fondo alla finestra chiede `Digitare il nome del blocco o [File/Libreria]`. Digitare `F` e premere {{key:Enter}}.
3. Scegliere il DWG o DXF sul computer. Viene letto qui; non viene aperto, e nulla viene caricato.
4. Nella finestra {{ui:Inserisci da}}, scegliere un blocco dall'elenco (digitare in {{ui:Filter blocks}} per trovarlo), oppure lasciare {{ui:L'intero disegno}}. Fare clic su {{ui:Insert}}.
5. Fare clic dove va, e completare gli attributi che chiede.

Si può anche partire dal pannello {{ui:Blocks}}: digitare `F` nella sua casella {{ui:Filter blocks}} e premere {{key:Enter}}, oppure digitare qualcosa che nessun blocco contiene e fare clic su {{ui:From a file…}}. `L` e {{ui:Library…}} aprono la libreria allo stesso modo. Prima della versione 0.10.1, una lettera digitata in {{ui:Filter blocks}} cercava solo i blocchi di questo disegno e rispondeva "Nessun blocco corrisponde al filtro."

Per tenere a portata di mano un disegno di blocchi propri, fare clic su {{ui:Add a drawing}} sotto {{ui:Libraries}} nel pannello {{ui:Blocks}} e scegliere il DWG o DXF. I suoi blocchi sono elencati con le anteprime; fare clic su uno per posizionarlo.

L'intero disegno entra come un unico blocco con il nome del file. Entrano anche i blocchi contenuti nel blocco scelto. I layer che usano vengono aggiunti a questo disegno.

Se l'altro disegno ha unità diverse (per esempio pollici e millimetri), CadCraft scala il riferimento di conseguenza e lo indica nella cronologia.

### Quando un nome è già usato

Se questo disegno ha già un blocco con lo stesso nome, CadCraft chiede:

- {{ui:Keep existing}} usa il blocco di questo disegno con quel nome.
- {{ui:Rename}} inserisce il nuovo come `Nome (2)`.

L'inserimento completo è un solo passo: {{key:Mod+Z}} elimina di nuovo il riferimento e le definizioni copiate.

## Aprire la libreria

Fare clic su {{ui:Library…}} nel pannello {{ui:Blocks}}, oppure su {{ui:Library}} nel gruppo Blocchi, oppure digitare `LIB`. Al prompt di `INSERT`, `L` la apre allo stesso modo.

La libreria ha quattro fonti, come schede:

- {{ui:Library}}: la libreria di CadCraft. Cercare per nome, produttore o modello, e filtrare per categoria.
- {{ui:Files…}}: un file di elemento (`item.json`) da una libreria qualsiasi, oppure un disegno, un foglio di calcolo o un modello 3D da cui ricavare elementi: un DWG o DXF (ogni blocco diventa un elemento), un CSV con colonne di nome e dimensione, oppure un modello glTF o OBJ. Nulla viene caricato.
- {{ui:Standard}}: profilati in acciaio (come sezioni, prospetti o aste 3D) e componenti standard come bulloni, dadi e cuscinetti, creati qui da tabelle pubblicate. Vedere [Posizionare profilati in acciaio e componenti standard](topic:steel-and-standard-parts).
- {{ui:Other feeds}}: altre librerie che rispondono come Library. Aggiungerne l'indirizzo una volta; questo browser lo ricorda.

Ogni scheda mostra un'anteprima, il nome, il produttore e il modello, la licenza e la versione. Un elemento ritirato è indicato con {{ui:Withdrawn}} e il motivo; CadCraft chiede conferma prima di posizionarlo.

## Posizionare un elemento

1. Fare clic su {{ui:Place}} su una scheda.
2. Fare clic dove va l'elemento. Digitare prima `R` per ruotarlo, oppure `S` per scalarlo.
3. Al prompt `Immettere il numero dell'elemento (CC-ITEM)`, premere {{key:Enter}} per il numero libero successivo, oppure digitarne uno proprio.

L'elemento diventa un blocco di nome `LIB_<nome>_v<versione>`, disegnato nelle unità di questo disegno. Se il disegno non ha unità, l'elemento entra in millimetri e la cronologia lo indica; impostare prima {{ui:Units}} nel pannello di destra.

I suoi dati vengono portati con sé come attributi invisibili: id e versione dell'elemento, licenza e attribuzione, produttore, modello, categoria e dimensioni. Vedere [Attributi di blocco](topic:attributes).

## Elementi nella propria lingua

Un elemento può avere nome e descrizione in altre lingue. Quando li ha nella lingua impostata in CadCraft (Impostazioni › Generali › Lingua), la scheda e il nome dell'elemento del blocco usano quelli. Il blocco stesso conserva un nome ricavato dal nome dell'elemento, così un disegno ha un blocco per elemento, qualunque lingua lo abbia posizionato.

## Controllare gli aggiornamenti

1. Aprire la libreria.
2. Fare clic su {{ui:Check for updates}}.

Ogni elemento di libreria nel disegno è elencato con i suoi numeri di elemento e indica se è aggiornato, se ha una versione più recente (e che cosa è cambiato), oppure se è stato ritirato. Fare clic su {{ui:Update}} su una riga, oppure su {{ui:Update all}}. Ogni riferimento passa al blocco della nuova versione e conserva il suo numero di elemento, la quantità, la posizione, l'angolo e il layer. {{key:Mod+Z}} annulla un aggiornamento.

## Citare ciò che si è usato

Fare clic su {{ui:Library credits}}. Ogni elemento è elencato con la sua riga di attribuzione e la sua licenza.

- {{ui:Copy attribution}} copia la riga di un elemento; {{ui:Copy all}} copia ogni riga.
- {{ui:Download CSV}} salva l'elenco con i numeri di elemento, i produttori, i modelli, le licenze e le attribuzioni. Si apre con qualsiasi foglio di calcolo.

Licenze come CC BY chiedono di citare l'autore dove si usa l'opera. Riportare le righe nel disegno, nel capitolato o nelle note di progetto.

## Simboli e risorse

La Libreria ha tre tipi di elemento: Simboli (convenzioni di disegno, in 2D), Tipi (di cosa è fatto un elemento) e Risorse (oggetti fisici). Nella scheda {{ui:Library}}, l'elenco {{ui:Kind of item}} mostra Simboli e risorse insieme, solo Simboli, oppure solo Risorse. I Tipi sono ciò di cui è costruito un progetto BimCraft, quindi CadCraft non li elenca.

## Accedere alla libreria

Fare clic su {{ui:Sign in to the library}}. Si apre una piccola finestra sul sito; una volta fatto l'accesso lì, CadCraft può mostrare gli elementi del team e registrare ciò che si posiziona, così si viene avvisati quando un elemento usato cambia. L'accesso vale per questa scheda del browser. Lo si può revocare in qualsiasi momento dalla pagina di sicurezza del proprio account.

## Conservare i propri oggetti in I miei oggetti

{{ui:My objects}} è un elenco privato nella Libreria che solo l'utente può vedere. Non è nella libreria pubblica, non è nella ricerca, e non è mostrato al team; segue l'account su ogni computer in cui si accede alla libreria.

1. Nel pannello Libreria, fare clic su {{ui:Files…}} e leggere un file.
2. Sull'elemento che si vuole riavere, fare clic su {{ui:Keep in my objects}}.
3. Più tardi, fare clic su {{ui:My objects}} e poi su {{ui:Place}}. Si posiziona come qualsiasi elemento di libreria, e {{ui:Check for updates}} lo copre.
4. {{ui:Remove from my objects}} lo toglie dall'elenco. Le copie già posizionate nei disegni restano.

Bisogna avere eseguito l'accesso alla libreria. Leggere un file non carica nulla; conservare un elemento invia solo quell'elemento al proprio account.

:::note
I miei oggetti è in fase di prova e potrebbe non essere ancora aperto per il proprio account. Se compare "I miei oggetti non è ancora aperto per questo account", si possono comunque posizionare elementi dai propri file con {{ui:Files…}}.
:::

## Errori comuni

- **"Creare elementi da tipi IFC è in BimCraft."** I file IFC e di famiglia si leggono nell'app BimCraft. Creare l'elemento lì o nella Libreria, poi usare il suo `item.json` qui.
- **"Non è stato possibile raggiungere la libreria."** Si è offline, oppure la libreria è non disponibile. Gli elementi già nel disegno non ne sono toccati.
- **Un elemento è troppo grande o troppo piccolo.** Le unità del disegno sono sbagliate o non impostate. Annullare, impostare {{ui:Units}} e posizionarlo di nuovo.
