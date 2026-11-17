---
title: Attributi dei blocchi
summary: Vedere e modificare i valori che un riferimento a blocco contiene, come un numero d'ordine o un costruttore, e conservarli quando si salva una copia.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, cartiglio, modifica sul posto, editor attributi, attdef, definisci attributo, bedit, editor blocchi, bclose, attributo, attributi, attdef, attrib, etichetta, numero di voce, valore, invisibile, costante, blocco, proprietà, elenco, etichetta di apparecchiatura
from: 34d307c7
---

## Che cosa sono gli attributi

Un attributo è un valore con nome che accompagna un riferimento a blocco: il numero di voce di un'etichetta di apparecchiatura, il nome di un'etichetta di locale, la classe di resistenza al fuoco di una porta. La definizione del blocco indica quali attributi possiede (ciascuno ha una **etichetta**, una **richiesta**, un **predefinito** e una posizione, dimensione e angolo per il suo testo). Ogni riferimento al blocco porta con sé i propri valori.

Alcuni attributi sono **invisibili**: contengono dati, come un costruttore o un numero di modello, ma non vengono mai disegnati. Alcuni sono **costanti**: sono uguali per ogni riferimento, fissati dal blocco.

## Da dove provengono gli attributi

- I blocchi nei file DWG e DXF che aprite conservano i propri attributi, con i valori di ciascun riferimento.
- I blocchi inseriti con {{cmd:INSERT}} e l'opzione {{ui:File}} conservano i propri. Vedere [Inserire da un file o dalla libreria](topic:insert-from-file-and-library).
- Gli elementi della libreria arrivano come blocchi con attributi: un numero di voce visibile e i dati dell'elemento, invisibili.

- Blocchi creati da voi: definire gli attributi con {{cmd:ATTDEF}} prima (sotto), poi selezionarli insieme agli altri oggetti quando si crea il blocco.

## Definire gli attributi per i propri blocchi

1. Disegnare le linee del blocco, ad esempio un'etichetta di locale.
2. Scegliere {{ui:Blocchi}} › {{ui:Altro}} › {{ui:Definisci attributo}}, oppure digitare `ATT` e premere Invio.
3. La cronologia mostra le modalità (`Invisible=No Constant=No Preset=No`). Digitare `I`, `C` o `P` per cambiarne una, e premere Invio quando sono corrette. I valori invisibili vengono conservati ma non disegnati; un valore costante è uguale in ogni riferimento; un valore preimpostato non viene richiesto quando si inserisce il blocco.
4. Digitare l'etichetta (ad esempio `ROOM_NO`: maiuscole, senza spazi), la richiesta (`Numero locale`) e un valore predefinito (`101`).
5. Fare clic dove deve andare il valore, e indicare altezza e rotazione. L'etichetta viene mostrata sul disegno.
6. Creare il blocco con {{cmd:BLOCK}}, selezionando insieme le linee e le definizioni degli attributi. Il riferimento che li sostituisce riceve i valori predefiniti; ogni nuovo {{cmd:INSERT}} li richiede.

Una definizione di attributo selezionata mostra {{ui:Etichetta}}, {{ui:Richiesta}}, {{ui:Predefinito}} e le modalità in {{ui:Proprietà}}.

## Modificare un blocco: l'editor dei blocchi

{{ui:Blocchi}} › {{ui:Altro}} › {{ui:Modifica blocco}} ({{cmd:BEDIT}}, `BE`) apre un blocco da solo: digitare il suo nome (oppure selezionare prima un riferimento). Una barra in alto indica quale blocco si sta modificando. Disegnare, eliminare e modificare i suoi oggetti con i comandi abituali, e aggiungere o cambiare le definizioni degli attributi. Poi fare clic su {{ui:Salva blocco}} (oppure digitare {{cmd:BCLOSE}} e `S`): ogni riferimento mostra la modifica, e un {{key:Mod+Z}} annulla tutto. {{ui:Scarta modifiche}} (`BCLOSE`, `D`) lascia il blocco com'era.

Quando si aggiungono, rimuovono o modificano definizioni di attributi, il salvataggio allinea anche ogni riferimento: i valori digitati vengono conservati, un nuovo attributo riceve il suo predefinito, un attributo rimosso scompare, e ciascun attributo torna dove lo colloca la definizione. La cronologia indica quanti riferimenti sono stati aggiornati.

## Modificare un cartiglio dove si trova (REFEDIT)

Un cartiglio su una tavola spesso si trova all'interno di un blocco. Per modificarne linee o testi senza uscire dalla tavola:

1. Selezionare il cartiglio, poi {{ui:Blocchi}} › {{ui:Altro}} › {{ui:Modifica sul posto}} (oppure digitare {{cmd:REFEDIT}}).
2. Il suo contenuto diventa oggetti normali nel punto in cui si trova; tutto il resto viene attenuato e non può essere modificato.
3. Modificare, eliminare o disegnare: i nuovi oggetti entrano a far parte del blocco.
4. Fare clic su {{ui:Salva il blocco}} nella barra in alto (oppure digitare {{cmd:REFCLOSE}} e `S`). Ogni riferimento mostra la modifica, e un {{key:Mod+Z}} annulla l'intera modifica. {{ui:Scarta}} lascia il blocco com'era.

Un disegno collegato, un blocco dinamico o un riferimento scalato in modo diverso in orizzontale e in verticale non possono essere modificati sul posto: usare {{cmd:BEDIT}} (oppure aprire il disegno collegato).

:::note
Salvare o scartare nell'editor dei blocchi prima di salvare il disegno: un file salvato mentre l'editor è aperto contiene il blocco com'era prima.
:::

## Compilare i valori quando si colloca un blocco

1. Digitare `I` e premere Invio, digitare il nome del blocco e premere Invio.
2. Fare clic dove deve andare.
3. CadCraft chiede ciascun valore, ad esempio `Immettere Numero di voce (ITEM) <>`. Digitare il valore e premere Invio, oppure premere Invio per mantenere il predefinito indicato tra parentesi angolari.

I valori che il blocco contrassegna come preimpostati, e quelli costanti, non vengono richiesti. Prendono il loro predefinito.

## Vedere e modificare i valori

1. Fare clic su un riferimento a blocco.
2. Nel pannello destro, sotto {{ui:Attributi}}, ogni etichetta ha il proprio valore. Quelli invisibili mostrano `hidden`.
3. Fare clic su un valore, digitare quello nuovo e premere Invio.

Il disegno mostra subito il nuovo valore. Ogni modifica è un passo: {{key:Mod+Z}} lo annulla.

**L'editor degli attributi.** Fare doppio clic su un riferimento con attributi (oppure {{cmd:EATTEDIT}}): la finestra {{ui:Modifica attributi}} elenca ogni etichetta con la sua richiesta e il suo valore. Digitare i nuovi valori; fare clic su una riga per modificare {{ui:Altezza}}, {{ui:Rotazione}}, {{ui:Fattore di larghezza}}, {{ui:Allineamento}}, {{ui:Layer}}, {{ui:Colore}} e {{ui:Invisibile}} di quell'attributo, solo per questo riferimento. {{ui:Applica}} mantiene aperta la finestra; {{ui:OK}} applica e chiude. Ogni {{ui:Applica}} o {{ui:OK}} è un passo di annullamento.

**Dalla riga di comando**, {{cmd:ATTEDIT}} chiede ciascun valore in sequenza: digitarne uno nuovo, oppure premere Invio per mantenerlo.

## Modificare le definizioni degli attributi (BATTMAN, ATTSYNC)

{{ui:Blocchi}} › {{ui:Altro}} › {{ui:Gestore attributi}} ({{cmd:BATTMAN}}) elenca gli attributi di un blocco: modificare un'etichetta, una richiesta o un predefinito, spuntare {{ui:Invisibile}}, {{ui:Costante}} o {{ui:Preimpostato}}, e spostarli su o giù (l'ordine in cui vengono richiesti i valori). Con {{ui:Aggiorna i riferimenti (valori mantenuti)}} spuntato, {{ui:Applica}} allinea anche ogni riferimento; un'etichetta rinominata conserva i propri valori. Ogni {{ui:Applica}} è un passo di annullamento.

{{cmd:ATTSYNC}} allinea a mano i riferimenti alle definizioni del loro blocco: `S` sceglie un riferimento, `N` indica un blocco, `A` esegue tutti i blocchi. I valori vengono conservati.

I valori dei campi di un elemento della libreria (il suo identificativo, la versione, la licenza e l'attribuzione) vengono mostrati ma non sono modificabili, così che il controllo degli aggiornamenti continui a funzionare. Il suo numero di voce e la quantità sono invece modificabili.

## Elencarli

Selezionare i riferimenti e digitare `LI` (per {{cmd:LIST}}). La cronologia mostra ogni attributo come `TAG = valore`, con `(invisible)` o `(constant)` dove applicabile.

## Spostare, ruotare ed esplodere

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} e {{cmd:MIRROR}} conservano i valori; il testo si sposta con il blocco e resta leggibile.
- {{cmd:EXPLODE}} trasforma gli attributi visibili in testo semplice con i loro valori. Quelli invisibili vengono eliminati.

## Salvataggio

Un DWG e un DXF salvati conservano ogni attributo: le definizioni di ciascun blocco (anche quelle invisibili, costanti e preimpostate) e i valori di ciascun riferimento. Altri programmi CAD li leggono come normali attributi di blocco.

In un DXF R12, un valore più lungo di 255 caratteri viene troncato a 255, e la cronologia lo segnala.

## Errori comuni

- **Un valore non appare sul disegno.** È invisibile, oppure è vuoto. I valori invisibili vengono comunque mostrati nel pannello destro.
- **Il valore che ho digitato è finito nella riga di comando.** Fare prima clic nella casella del valore nel pannello destro.
