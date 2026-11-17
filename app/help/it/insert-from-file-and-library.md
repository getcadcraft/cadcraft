---
title: Inserire da un file o dalla libreria
summary: Portare un blocco, o un intero disegno, da un altro DWG o DXF, e posizionare elementi dalla Libreria, da un file o da un'altra libreria, con i crediti e gli aggiornamenti.
keywords: inserisci, file, libreria, librarycraft, elemento, attrezzatura, blocco da un altro disegno, wblock, design center, crediti, attribuzione, licenza, aggiornamento, feed, item.json
from: 316188d2
---

## Inserire un blocco da un altro disegno

1. Digitare `I` e premere {{key:Enter}}, oppure fare clic su {{ui:Inserisci}} nel gruppo Blocchi.
2. Alla richiesta `Digitare nome blocco o [File/Libreria]`, digitare `F` e premere {{key:Enter}}.
3. Scegliere il DWG o il DXF su questo computer. Viene letto qui: non viene aperto, e nulla viene caricato.
4. Nella finestra {{ui:Inserisci da}}, scegliere un blocco dall'elenco (digitare in {{ui:Filtra blocchi}} per trovarlo), oppure mantenere {{ui:Tutto il disegno}}. Fare clic su {{ui:Inserisci}}.
5. Fare clic dove va, e compilare gli attributi eventualmente richiesti.

L'intero disegno entra come un unico blocco con il nome del file. Entrano anche i blocchi contenuti nel blocco scelto. I layer che usano vengono aggiunti a questo disegno.

Se l'altro disegno è in unità diverse (pollici e millimetri, per esempio), CadCraft scala il riferimento per adattarlo e lo indica nella cronologia.

### Quando un nome è già usato

Se questo disegno ha già un blocco con lo stesso nome, CadCraft chiede:

- {{ui:Mantieni esistente}} usa il blocco di questo disegno con quel nome.
- {{ui:Rinomina}} inserisce il nuovo come `Nome (2)`.

L'intero inserimento è un solo passo: {{key:Mod+Z}} rimuove di nuovo il riferimento e le definizioni copiate.

## Aprire la libreria

Fare clic su {{ui:Libreria…}} nel pannello {{ui:Blocchi}}, oppure su {{ui:Libreria}} nel gruppo Blocchi, oppure digitare `LIB`. Alla richiesta di `INSERT`, anche `L` la apre.

La libreria ha quattro fonti, come schede:

- {{ui:Libreria}}: la libreria CadCraft. Cercare per nome, produttore o modello, e filtrare per categoria.
- {{ui:File…}}: un file di elemento (`item.json`) da qualsiasi libreria, oppure un disegno, un foglio di calcolo o un modello 3D da cui creare elementi: un DWG o DXF (ogni blocco diventa un elemento), un CSV con colonne di nome e dimensione, oppure un modello glTF o OBJ. Nulla viene caricato.
- {{ui:Standard}}: profilati in acciaio (come sezioni, prospetti o elementi 3D) e parti standard come bulloni, dadi e cuscinetti, creati qui da tabelle pubblicate. Vedere [Inserire profilati in acciaio e parti standard](topic:steel-and-standard-parts).
- {{ui:Altri feed}}: altre librerie che rispondono come la Libreria. Aggiungerne l'indirizzo una volta; questo browser lo ricorda.

Ogni scheda mostra un'anteprima, il nome, il produttore e il modello, la licenza e la versione. Un elemento ritirato è contrassegnato {{ui:Ritirato}} con il motivo; CadCraft chiede conferma prima di posizionarne uno.

## Posizionare un elemento

1. Fare clic su {{ui:Posiziona}} su una scheda.
2. Fare clic dove va l'elemento. Digitare prima `R` per ruotarlo, oppure `S` per scalarlo.
3. Alla richiesta `Digitare numero elemento (CC-ITEM)`, premere {{key:Enter}} per il numero libero successivo, oppure digitare un numero proprio.

L'elemento diventa un blocco chiamato `LIB_<nome>_v<versione>`, disegnato nelle unità di questo disegno. Se il disegno non ha unità, l'elemento entra in millimetri e la cronologia lo indica; impostare prima {{ui:Unità}} nel pannello di destra.

I suoi dati viaggiano come attributi invisibili: l'id e la versione dell'elemento, licenza e attribuzione, produttore, modello, categoria e dimensioni. Vedere [Attributi di blocco](topic:attributes).

## Elementi multilingua

Un elemento può avere nome e descrizione in altre lingue. Quando li ha nella lingua impostata in CadCraft (Impostazioni › Generali › Lingua), la scheda e il nome dell'elemento del blocco posizionato li usano. Il blocco stesso mantiene un nome ricavato dal nome dell'elemento, quindi un disegno ha un solo blocco per elemento, qualunque lingua sia stata usata per posizionarlo.

## Controllare gli aggiornamenti

1. Aprire la libreria.
2. Fare clic su {{ui:Controlla aggiornamenti}}.

Ogni elemento della libreria nel disegno è elencato con i suoi numeri di elemento e indica se è aggiornato, se ha una versione più recente (e cosa è cambiato), oppure se è stato ritirato. Fare clic su {{ui:Aggiorna}} su una riga, oppure su {{ui:Aggiorna tutto}}. Ogni riferimento passa al blocco della nuova versione e mantiene il suo numero di elemento, quantità, posizione, angolo e layer. {{key:Mod+Z}} annulla un aggiornamento.

## Riconoscere ciò che si è usato

Fare clic su {{ui:Crediti della libreria}}. Ogni elemento è elencato con la sua riga di attribuzione e la licenza.

- {{ui:Copia attribuzione}} copia la riga di un elemento; {{ui:Copia tutto}} copia ogni riga.
- {{ui:Scarica CSV}} salva l'elenco con i numeri di elemento, i produttori, i modelli, le licenze e le attribuzioni. Si apre in qualsiasi foglio di calcolo.

Licenze come CC BY chiedono di citare l'autore dove si usa l'opera. Inserire le righe nel disegno, nel capitolato o nelle note di progetto.

## Simboli e asset

La Libreria ha tre tipi di elemento: Simboli (convenzioni di disegno, 2D), Tipi (di cosa è fatto un elemento) e Asset (oggetti fisici). Nella scheda {{ui:Libreria}}, l'elenco {{ui:Tipo di elemento}} mostra Simboli e asset insieme, solo Simboli, oppure solo Asset. I Tipi sono ciò di cui è costruito un progetto BimCraft, quindi CadCraft non li elenca.

## Accedere alla libreria

Fare clic su {{ui:Accedi alla libreria}}. Si apre una piccola finestra sul sito; una volta effettuato l'accesso, CadCraft può mostrare gli elementi del team e registrare ciò che viene posizionato, così si viene avvisati quando un elemento usato cambia. L'accesso dura per questa scheda del browser. Può essere revocato in qualsiasi momento dalla pagina di sicurezza dell'account.

## Errori comuni

- **"Creare elementi da tipi IFC è in BimCraft."** I file IFC e di famiglia si leggono nell'app BimCraft. Creare l'elemento lì o nella Libreria, poi usarne il `item.json` qui.
- **"Impossibile raggiungere la libreria."** Si è offline, oppure la libreria non è disponibile. Gli elementi già presenti nel disegno non vengono toccati.
- **Un elemento è troppo grande o troppo piccolo.** Le unità del disegno sono sbagliate o non impostate. Annullare, impostare {{ui:Unità}} e posizionarlo di nuovo.
