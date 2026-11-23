---
title: Assegnare alle opzioni dei comandi lettere proprie
summary: Rispondere alle opzioni di un comando con lettere scelte, in qualsiasi lingua, da un unico file di testo modificabile, importabile ed esportabile.
keywords: lettere delle opzioni, optionkeys, optkeys, parola chiave opzione, parola chiave, rimappa, mappatura, personalizza, lettere personalizzate, polare, serie, P, PO, lingua, traduci opzioni, forma breve, importa, esporta, ambiguo
from: 7c8328c6
---

## Cosa si impara

Come cambiare le lettere da digitare per rispondere alle opzioni di un comando. Per esempio, {{cmd:ARRAY}} chiede `[Rettangolare/POlare]` e accetta `PO` per Polare; si può fare in modo che `P`, oppure altre lettere, facciano lo stesso, anche nella propria lingua.

## Come si rispondono le opzioni

Quando un comando mostra opzioni tra parentesi quadre, le lettere maiuscole sono quelle da digitare: `POlare` è `PO`, `eXit` è `X`.

Si possono anche digitare meno lettere. Se ciò che si digita corrisponde a una sola delle opzioni mostrate, CadCraft la prende: con `[Rettangolare/POlare]`, una `P` da sola è Polare. Se corrisponde a due, la riga di comando le elenca e chiede di nuovo:

```
C potrebbe essere COUnt, COLumns. Digitare più lettere.
```

I numeri non vengono mai indovinati: una distanza o un conteggio digitati vengono sempre letti come numeri.

## Aggiungere lettere proprie

Ogni comando mantiene le proprie lettere predefinite. Se ne aggiungono di proprie, sopra quelle, così la lista contiene solo ciò che si è cambiato.

1. Aprire {{ui:Settings}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Option letters}} e fare clic su {{ui:Edit…}}. Oppure digitare {{cmd:OPTIONKEYS}} e premere {{key:Enter}}.
2. Sotto {{ui:Command}}, scegliere il comando, per esempio `ARRAY`. L'elenco contiene ogni comando che chiede opzioni, e parte dal comando usato per ultimo.
3. Sotto {{ui:Option}}, scegliere l'opzione. Ognuna mostra le proprie lettere predefinite tra parentesi, per esempio `POlare (PO)`.
4. In {{ui:Your letters}}, digitare le lettere desiderate, per esempio `P`, e fare clic su {{ui:Add}}.
5. L'opzione ora compare sotto {{ui:Your letters}} con le lettere predefinite e le proprie. Fare clic su {{ui:Save}}.

Avviare {{cmd:ARRAY}}, selezionare un oggetto e premere {{key:Enter}}. Il prompt mostra le proprie lettere dopo l'opzione, `POlare (P)`, e `P` risponde.

Per toglierne una, fare clic sulla x alla fine della sua riga, poi su {{ui:Save}}. L'opzione torna alle sole lettere predefinite.

## Lettere che non si possono usare

L'editor rifiuta le lettere che nasconderebbero qualcosa che la riga di comando già legge, e dice perché:

- le lettere predefinite di un'altra opzione dello stesso comando (`R` per Polare in `ARRAY`, dove `R` è Rettangolare);
- una parola di snap a oggetto di tre lettere o più, come `END`, `MID` o `CEN`, e le parole `ALL` e `LAST`;
- le stesse lettere per due opzioni diverse di un comando.

Finché qualcosa è elencato in rosso, {{ui:Save}} è disattivato: correggere la riga o rimuoverla, e torna attivo. I caratteri predefiniti di un prompt prevalgono sempre sui propri, quindi la propria lista non può impedire a una risposta predefinita di funzionare. Le lettere che coincidono con il nome di un comando, come `L` o `C`, vanno bene: a un prompt di opzione la riga di comando sta leggendo una risposta, non avviando un comando.

Le opzioni elencate per un comando provengono dai comandi che condividono i suoi prompt, quindi ogni tanto un comando elenca un'opzione che chiede solo in certi casi.

## Una scelta per ogni comando

Sotto {{ui:Command}}, scegliere {{ui:Every command}}. Le opzioni sono allora tutte quelle che ha un comando qualsiasi, come eXit o Undo. Le lettere aggiunte lì rispondono a quell'opzione ovunque un comando la offra. Le lettere aggiunte per un comando specifico prevalgono su queste.

## Lettere nella propria lingua

Le lettere possono provenire da qualsiasi alfabeto, quindi si possono rispondere le opzioni senza cambiare la tastiera: aggiungere `È` per Chiudi sotto {{ui:Every command}}, oppure `À` per POlare in `ARRAY`.

CadCraft viene fornito solo con le lettere inglesi. La propria lista è il modo in cui chi lavora con la stessa lingua, o il proprio studio, completa il resto, e {{ui:Export}} crea un file da passare ad altri.

## Modificare come testo

{{ui:Edit as text}} nell'editor mostra la stessa lista come righe di testo, una per opzione, che è anche ciò che {{ui:Export}} salva:

```
ARRAY.PO,  P
*.X,       Q
```

Ogni riga è il comando, un punto, le lettere predefinite dell'opzione, una virgola e le proprie lettere. Un asterisco al posto del comando significa ogni comando. Una riga che inizia con `;` è una nota.

## Cosa resta uguale

- Le lettere predefinite continuano a funzionare accanto alle proprie.
- Le routine e i pulsanti della barra usano le lettere predefinite, quindi nulla di ciò che si è caricato si rompe. Per digitare le lettere predefinite dove le proprie darebbero fastidio, mettere prima un trattino basso: `_PO`.
- Il nome breve di un comando è un'altra cosa: vedere [Modificare gli alias dei comandi](topic:command-aliases).

## Righe rifiutate da CadCraft

Quando si modifica come testo o si importa un file, l'editor elenca ogni problema con il numero di riga:

- il comando non esiste (un alias di comando va bene: `AR.PO` viene letto come `ARRAY.PO`);
- la riga non è nel formato `COMANDO.OPZIONE, LETTERE`;
- le lettere contengono uno spazio o un segno (solo lettere e cifre, al massimo 16);
- le stesse lettere rispondono a due opzioni diverse dello stesso comando.

## Importare ed esportare

{{ui:Export}} salva le proprie lettere come file di testo, da conservare oppure da dare a qualcun altro. {{ui:Import…}} legge un file del genere. Entrambi si trovano nell'editor e in {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}}.

Nelle Impostazioni, {{ui:Import…}} sostituisce il proprio file con quello scelto. Un file con una riga in conflitto o inutilizzabile non viene accettato; aprire l'editor e importarlo lì per vedere le righe. Nell'editor riempie solo la casella: nulla cambia finché non si fa clic su {{ui:Save}}.

## Ricaricare o rimuovere

Digitare {{cmd:REINIT}} e premere {{key:Enter}} per applicare di nuovo il proprio file. Per togliere una lettera, eliminarne la riga e fare clic su {{ui:Save}}.

## Le proprie lettere seguono il proprio account

Quando si è connessi a getcadcraft.com, le proprie lettere sono conservate con l'account. Aprendo CadCraft in un altro browser o su un altro computer con lo stesso account arrivano da sole; la riga di comando dice `Option letters from your account`. Se le si modifica in due posti, vince la copia più recente e quella sostituita viene conservata una volta.

{{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}} indica a che punto sono. Senza connessione o non connessi, restano in questo browser e vanno all'account la volta successiva in cui le si salva mentre si è connessi.

Collegati: [Modificare gli alias dei comandi](topic:command-aliases) · [Impostazioni di CadCraft](topic:settings) · [Comandi](topic:commands)
