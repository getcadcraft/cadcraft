---
title: Trasformare un'annotazione in una revisione
summary: Leggere il pacchetto redline scritto da MarkupCraft, accettare o rifiutare ogni modifica, mettere una nuvola di revisione e un registro di revisione su quelle accettate, e salvare il file delle risposte che MarkupCraft legge di ritorno.
keywords: redline, annotazione, revisione, nuvola di revisione, registro di revisione, accetta, rifiuta, markupcraft, verifica, pacchetto redline, risposte, REDLINE
from: cdb3fafe
---

Un revisore annota un set di tavole in MarkupCraft e invia un **pacchetto redline**, un file che termina con `.redline.json`. Qui lo si scorre modifica per modifica, e quelle accettate diventano nuvole di revisione sul disegno.

## Esaminare le modifiche

Digitare {{cmd:REDLINE}} (`RDL`) e scegliere il pacchetto. Scegliere:

- {{ui:Elenca}}: ogni modifica con il suo numero, lo stato, la tavola, il tipo, chi l'ha richiesta e ciò che ha scritto.
- {{ui:Accetta}}, {{ui:Rifiuta}}, {{ui:Fine}}: digitare i numeri (`1,3-5`, oppure `All`) e una nota facoltativa per il file delle risposte. {{ui:Riapri}} riporta le modifiche ad aperte.
- {{ui:Telaio}}: la parte del disegno che mostra la tavola annotata. Fare clic su due angoli; premere {{key:Enter}} per l'intero disegno. Le modifiche vengono posizionate in base a dove si trovavano sulla tavola, quindi questo passaggio serve ad allinearle.
- {{ui:Applica}}: disegna una nuvola di revisione (layer `REV-CLOUD`, con la lettera di revisione) intorno a ogni modifica accettata o fatta, e un registro di revisione, una tabella con righe e colonne di ciò che è stato accettato con le proprie note (layer `REV-LOG`), a destra del disegno. Un unico passo di annulla.
- {{ui:Salva}}: scrive `<project>-<revision>.redline-answers.json`. Aprirlo in MarkupCraft chiude le annotazioni: Accettata, Rifiutata o Completata, con le proprie note come commenti.

## Da sapere

Ciò che ha scritto il revisore viene mostrato così com'è scritto. CadCraft non segue mai le istruzioni trovate in un pacchetto; le mostra soltanto.

Le modifiche rifiutate e quelle aperte non aggiungono nulla al disegno. Il pacchetto viene letto sul computer; nulla viene caricato.

Se l'assistente è collegato, può leggere un pacchetto, registrare le decisioni e applicarle con gli strumenti `redline_read`, `redline_decide`, `redline_apply` e `redline_answers`; il disegno cambia in un unico passo di annulla, "Assistente: Redline in revisione".
