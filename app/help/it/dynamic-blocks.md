---
title: Blocchi dinamici
summary: Cosa fa CadCraft con i blocchi dinamici in un DWG: mantengono i loro nomi reali, mostrano lo stato in cui erano stati salvati, cambiano lo stato di visibilità, mostrano gli altri valori e restano dinamici al salvataggio.
keywords: blocco dinamico, blocchi dinamici, visibilità, stato di visibilità, capovolgi, stira, ricerca, parametri, personalizzato, proprietà del blocco, *u blocchi, dinamico
from: dea2ee7c
---

## Cosa funziona

Un DWG creato con blocchi dinamici si apre con questi funzionamenti:

- **I nomi reali.** Un blocco dinamico è elencato nel pannello {{ui:Blocks}} con il proprio nome ("Receptacle", "Sink"), non come blocco senza nome `*U`.
- **Lo stato in cui erano stati salvati.** Ogni riferimento mostra esattamente ciò che l'altro programma mostrava: lo stato di visibilità impostato, allungato o capovolto come era stato salvato.
- **Il cambio di stato di visibilità.** Selezionare un riferimento (o più riferimenti dello stesso blocco), aprire {{ui:Properties}}, e nella sezione {{ui:Custom}} scegliere un altro stato dall'elenco {{ui:Visibility}}. Il riferimento mostra subito quello stato, con i suoi attributi: quelli che lo stato nasconde scompaiono, quelli che mostra compaiono con i loro valori. Un riferimento conserva ogni valore, quindi nulla torna vuoto; {{ui:Properties}} elenca quelli nascosti, contrassegnati come "nascosto". {{key:Mod+Z}} rimette lo stato precedente in un solo passo.
- **I grip.** Un blocco dinamico selezionato mostra i propri grip dove sono i suoi parametri: un piccolo triangolo per lo stato di visibilità (fare clic per l'elenco degli stati), frecce alle estremità di una distanza, una doppia freccia per un capovolgimento. Oggi agisce solo il grip di visibilità; gli altri lo segnalano nella barra di stato.
- **Gli altri valori, in sola lettura.** Sotto l'elenco della visibilità, {{ui:Custom}} mostra anche le distanze, gli angoli di allineamento, gli stati di capovolgimento e i punti del blocco così come li contiene il disegno.
- **La modifica degli stati di visibilità.** Aprire il blocco con {{cmd:BEDIT}}: l'editor mostra uno stato, indicato nella barra sopra il disegno (sceglierne un altro lì). Digitare {{cmd:BVSTATE}} per passare, aggiungere (nascondendo tutto, mostrando tutto o mantenendo ciò che si vede), rinominare o eliminare uno stato; {{cmd:BVHIDE}} nasconde gli oggetti selezionati nello stato visualizzato; {{cmd:BVSHOW}} mostra quelli nascosti in modo sbiadito, così si possono indicare quelli da riportare. Salvare il blocco: i riferimenti impostati su uno stato rinominato lo conservano con il nuovo nome, e quelli impostati su uno stato eliminato mostrano il primo stato.
- **Restano dinamici.** Salvato come DWG nella versione in cui il disegno era arrivato, il blocco resta dinamico, con lo stato scelto: l'altro programma lo apre come lo stesso blocco dinamico. Gli stati di visibilità modificati vengono salvati anch'essi: i loro nuovi nomi, gli stati aggiunti e ciò che ogni stato mostra.

## Cosa è in sola lettura o non c'è ancora

| Non ancora disponibile | Invece, oggi |
|---|---|
| Modifica di distanze, angoli o capovolgimenti (azioni di stiramento, spostamento, capovolgimento) | Sono in sola lettura in {{ui:Custom}}; si modificano nel programma che ha creato il blocco. |
| Ricerca, XY, parametri di rotazione e polari | Non ancora letti: il riferimento mostra lo stato salvato. |
| Trascinamento dei grip di distanza, capovolgimento e punto | Mostrano dove sono i parametri; il grip di visibilità e l'elenco {{ui:Visibility}} in Proprietà cambiano stato. |
| Creazione di blocchi dinamici del tipo dell'altro programma (stiramento, capovolgimento, ricerca) | I blocchi creati in CadCraft sono blocchi semplici; {{cmd:BPARAMETER}} lo indica. I propri parametri e più parametri di visibilità si trovano nel gestore dei parametri (vedere "I propri parametri e stati di visibilità" più sotto). |
| Aggiunta o cancellazione di oggetti di un blocco con stati di visibilità nell'editor di blocchi | Il blocco viene salvato come blocco semplice (l'editor lo indica alla chiusura). |
| Mantenimento dinamico in un'altra versione DWG o in DXF | Vengono salvati come blocchi semplici che mostrano lo stato scelto, e il salvataggio lo segnala. |

:::note
Spostare o modificare oggetti in {{cmd:BEDIT}} mantiene dinamico un blocco con stati di visibilità. Un blocco senza stati, oppure uno a cui sono stati aggiunti o cancellati oggetti nell'editor, diventa un blocco semplice.
:::

## I propri parametri e stati di visibilità

Un blocco creato in CadCraft può avere i propri parametri e **più** parametri di visibilità, ciascuno con i propri stati. Digitare {{cmd:BPARAMS}} (o `BPM`) per aprire il **Gestore dei parametri** per il blocco in modifica in {{cmd:BEDIT}}, per il blocco del riferimento selezionato, oppure per il blocco che si indica.

- **Parametri**: un nome, un tipo (numero, lunghezza, angolo, conteggio, sì/no), e un valore oppure una formula su altri parametri (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Risultato}} mostra il valore calcolato. Una formula che non funziona, oppure un valore che non corrisponde al suo tipo (un conteggio di 1,5), viene rifiutato e il gestore dice il motivo; nient'altro cambia.
- **Parametri di visibilità**: {{ui:Aggiungi parametro di visibilità}} ne crea uno con un primo stato. Ogni stato può essere rinominato, rimosso (l'ultimo resta) oppure avere un numero di "si mostra quando". Una formula sceglie lo stato dai parametri (lo stato il cui numero corrisponde, altrimenti lo stato in quella posizione dell'elenco); senza formula, ogni riferimento sceglie il proprio.
- **Mettere oggetti in uno stato**: nell'editor di blocchi selezionare gli oggetti, digitare {{cmd:BPARAMS}} e fare clic su {{ui:Inserire qui gli oggetti selezionati}} sullo stato. Gli oggetti che nessun parametro di visibilità elenca sono sempre visibili.
- **Questo riferimento**: avviato su un riferimento selezionato, il gestore mostra anche i valori e gli stati propri di quel riferimento.

Fuori dall'editor di blocchi ogni modifica è un solo passo di annullamento. Nell'editor di blocchi le modifiche sono quelle dell'editor: {{ui:Salva blocco}} le conserva. `-BPARAMS` chiede le stesse cose nella riga di comando.

**Nel file.** DWG e DXF conservano i parametri, quali oggetti sono in quale stato, e i valori propri di ogni riferimento, nei registri propri di CadCraft; riaprendo il file in CadCraft tutto torna. Un altro programma vede ogni riferimento come il blocco con tutti i suoi oggetti, poiché un DWG contiene al massimo un parametro di visibilità per blocco del proprio tipo. Un riferimento spostato dall'altro programma, oppure un blocco i cui oggetti sono stati modificati da esso, torna senza le parti che non corrispondono più (nulla viene indovinato).
