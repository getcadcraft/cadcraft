---
title: Tag: attributi che alimentano gli abachi
summary: Definire un tag (il suo tipo, i valori ammessi, i blocchi a cui si applica), impostarlo sui riferimenti a blocco ed elencare i riferimenti come abaco da salvare in CSV.
keywords: tag, attributo, abaco, estrazione dati, proprietà, resistenza al fuoco, elenco di scelta, riferimento a blocco, TAGS, csv
from: 9b90bacc
---

Un **tag** è un attributo di blocco con una definizione: che tipo di valore contiene, quali valori sono ammessi e a quali blocchi si applica. I valori sono normali attributi di blocco, quindi qualsiasi altro programma li legge e {{cmd:ATTEDIT}} li mostra. Sono nuove soltanto le definizioni, che vengono conservate nel disegno.

## Definire e impostare

Digitare {{cmd:TAGS}} e scegliere:

- {{ui:Definisci}}: un nome (lettere, cifre, spazio, `_ . -`), un tipo (`text`, `number`, `integer`, `yesno`, `length`, `angle`), i valori ammessi separati da `;` (lasciare vuoto per qualsiasi valore), e i nomi dei blocchi a cui si applica (`DOOR*` corrisponde a ogni blocco che inizia con DOOR; vuoto significa ogni blocco).
- {{ui:Set}}: con riferimenti a blocco selezionati, digitare `FireRating=60 min; Width=850`. Un valore fuori dall'elenco ammesso, o un valore non numerico per un tag numerico, viene rifiutato e segnalato. Un'unica operazione di annulla. Un blocco che non ha l'attributo lo riceve come attributo nascosto.
- {{ui:Abaco}}: ogni riferimento a un blocco a cui si applica un tag, facoltativamente raggruppato per tag o per nome di blocco, stampato e salvato in CSV.
- {{ui:Rimuovi}}: dimentica una definizione; i valori restano sui riferimenti.

Rinominare un tag rinomina i suoi valori su ogni riferimento. I nomi dei tag non distinguono maiuscole e minuscole, come non le distinguono i nomi degli attributi.
