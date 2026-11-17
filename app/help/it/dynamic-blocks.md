---
title: Blocchi dinamici
summary: Cosa fa CadCraft con i blocchi dinamici in un DWG: mantengono i loro nomi reali, mostrano lo stato con cui sono stati salvati, cambiano stato di visibilità, mostrano gli altri valori e restano dinamici quando vengono salvati.
keywords: blocco dinamico, blocchi dinamici, visibilità, stato di visibilità, capovolgimento, stiramento, ricerca, parametri, personalizzato, proprietà del blocco, blocchi *U, dinamico
from: 26b6aa80
---

## Cosa funziona

Un DWG creato con blocchi dinamici si apre con questi funzionanti fino a questo punto:

- **I loro nomi reali.** Un blocco dinamico è elencato nel pannello {{ui:Blocchi}} con il proprio nome ("Presa", "Lavello"), non come blocco `*U` senza nome.
- **Lo stato con cui sono stati salvati.** Ogni riferimento mostra esattamente ciò che l'altro programma mostrava: lo stato di visibilità impostato, allungato o capovolto come era stato salvato.
- **Cambio dello stato di visibilità.** Selezionare un riferimento (o più riferimenti dello stesso blocco), aprire {{ui:Proprietà}} e, nella sezione {{ui:Personalizzato}}, scegliere un altro stato dall'elenco {{ui:Visibilità}}. Il riferimento mostra subito quello stato, anche i suoi attributi: quelli che lo stato nasconde scompaiono, quelli che mostra compaiono con i loro valori. Un riferimento conserva ogni valore, quindi nulla torna vuoto; {{ui:Proprietà}} elenca quelli nascosti, contrassegnati come "nascosto". {{key:Mod+Z}} rimette in un solo passo lo stato precedente.
- **Grip.** Un blocco dinamico selezionato mostra i propri grip dove si trovano i suoi parametri: un piccolo triangolo per lo stato di visibilità (fare clic per l'elenco degli stati), frecce agli estremi di una distanza, una doppia freccia per un capovolgimento. Oggi agisce solo il grip di visibilità; gli altri lo segnalano nella barra di stato.
- **Gli altri valori, in sola lettura.** Sotto l'elenco della visibilità, {{ui:Personalizzato}} mostra anche distanze, angoli di allineamento, stati di capovolgimento e punti come sono nel disegno.
- **Modifica degli stati di visibilità.** Aprire il blocco con {{cmd:BEDIT}}: l'editor mostra uno stato, indicato nella barra sopra il disegno (sceglierne un altro lì). Digitare {{cmd:BVSTATE}} per cambiare stato, aggiungerne uno (nascondendo tutto, mostrando tutto o mantenendo ciò che è visibile), rinominarlo o eliminarlo; {{cmd:BVHIDE}} nasconde gli oggetti selezionati nello stato visualizzato; {{cmd:BVSHOW}} mostra quelli nascosti in tono sbiadito, così si possono cliccare quelli da riportare visibili. Salvare il blocco: i riferimenti impostati su uno stato rinominato lo mantengono con il nuovo nome, e quelli impostati su uno stato eliminato mostrano il primo stato.
- **Restano dinamici.** Salvati come DWG nella versione con cui è arrivato il disegno, i blocchi restano dinamici, con lo stato scelto: l'altro programma li apre come gli stessi blocchi dinamici. Anche gli stati di visibilità modificati vengono salvati: i nuovi nomi, gli stati aggiunti e ciò che ciascuno mostra.

## Sola lettura, o non ancora presente

| Non ancora presente | Invece, oggi |
|---|---|
| Modifica di distanze, angoli o capovolgimenti (azioni di stiramento, spostamento, capovolgimento) | Sono mostrati in sola lettura in {{ui:Personalizzato}}; modificarli nel programma che ha creato il blocco. |
| Parametri di ricerca, XY, rotazione e polari | Non ancora letti: il riferimento viene mostrato come salvato. |
| Trascinamento dei grip di distanza, capovolgimento e punto | Mostrano dove si trovano i parametri; il grip di visibilità e l'elenco {{ui:Visibilità}} in Proprietà cambiano stato. |
| Creazione di blocchi dinamici (aggiunta di parametri o di stati di visibilità a un blocco che non ne ha) | I blocchi creati in CadCraft sono blocchi normali; {{cmd:BPARAMETER}} lo dice. |
| Aggiunta o cancellazione di oggetti di un blocco con stati di visibilità nell'editor dei blocchi | Il blocco viene salvato come blocco normale (l'editor lo segnala alla chiusura). |
| Mantenerli dinamici in un'altra versione DWG o in DXF | Vengono salvati come blocchi normali che mostrano lo stato scelto, e il salvataggio lo segnala. |

:::note
Spostare o modificare oggetti in {{cmd:BEDIT}} mantiene dinamico un blocco con stati di visibilità. Un blocco senza stati, o uno i cui oggetti sono stati aggiunti o cancellati nell'editor, diventa un blocco normale.
:::
