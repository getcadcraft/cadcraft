---
title: Vincolare un disegno
summary: Mantenere le linee orizzontali, le estremità unite e le misure fisse con vincoli geometrici e dimensionali, e far seguire il disegno quando si cambia una misura.
keywords: vincolo, vincoli, parametrico, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, gradi di libertà, completamente vincolato
from: f8f21fa4
---

## Cosa si realizza

Una piastra la cui larghezza si cambia in un solo punto: i suoi lati restano squadrati, un angolo resta fermo, la sua altezza resta metà della larghezza.

È possibile applicare vincoli a linee, polilinee, cerchi, archi e punti nella scheda {{ui:Modello}}. Ogni vincolo aggiunto è un passo di annullamento.

## Disegnare e vincolare il contorno

1. Digitare `REC` e premere {{key:Enter}}. Digitare `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Digitare `AUTOCONSTRAIN` e premere {{key:Enter}}. Digitare `ALL`, {{key:Enter}}, poi di nuovo {{key:Enter}}.

   La cronologia riporta "4 vincoli applicati". Accanto ai lati compaiono piccole caselle con **H** e **V**: sono le barre dei vincoli.
3. Digitare `GCFIX` e premere {{key:Enter}}. Fare clic vicino all'angolo in basso a sinistra. Compare una casella con ⊕: quell'angolo resta dov'è.

`AUTOCONSTRAIN` aggiunge vincoli di coincidenza dove le estremità quasi si toccano, e vincoli orizzontali o verticali dove le linee sono quasi in piano o a piombo. Digitare `S` al suo prompt per cambiare la vicinanza richiesta (inizialmente 0.05 unità di disegno e 1°).

## Aggiungere le misure

1. Digitare `DCHORIZONTAL` e premere {{key:Enter}}.
2. Fare clic vicino all'angolo in basso a sinistra, poi vicino all'angolo in basso a destra.
3. Fare clic sotto il rettangolo per la linea di quota.
4. Il prompt mostra `Testo quota <d1=100>`. Digitare `width=120` e premere {{key:Enter}}.

   Il rettangolo ora è largo 120, e l'etichetta riporta `width=120`.
5. Digitare `DCVERTICAL` e premere {{key:Enter}}, digitare `O` e premere {{key:Enter}}, poi fare clic sul lato destro.
6. Fare clic a destra di esso, digitare `width/2` e premere {{key:Enter}}.

   È alto 60. L'etichetta riporta `fx: d1=width/2`: un'espressione lo controlla.

La cronologia ora dice che il contorno è completamente vincolato. Per cambiarne la misura, cambiare `width` (vedi [Usare parametri ed equazioni](topic:parameters)), oppure fare doppio clic sull'etichetta `width=120`, digitare un nuovo valore e scegliere {{ui:Applica}}.

## Spostare oggetti vincolati

Sposta, ruota, scala, grip e il pannello Proprietà mantengono i vincoli: ciò che viene spostato resta fermo, e il resto segue. Quando i vincoli non possono seguire, la modifica non viene eseguita e la cronologia spiega il motivo, per esempio "Non eseguito: i vincoli tengono quell'oggetto dove si trova". Cancellare un oggetto ne elimina anche i vincoli.

## Specchiare e rifilare oggetti vincolati

- {{cmd:MIRROR}} copia sulle copie i vincoli tra gli oggetti specchiati. I lati (da quale parte una tangente tocca, da quale lato si misura una distanza) vengono ricalcolati per la copia specchiata, e le quote copiate ricevono nomi propri, come accade con un incolla. Con `Cancella oggetti di origine` `Y`, i vincoli restano sugli oggetti specchiati. La cronologia riporta quanti ne sono stati trasferiti.
- {{cmd:TRIM}} mantiene i vincoli di una linea o di un arco su ciò che resta: un vincolo su un'estremità passa al pezzo che conserva quell'estremità, una regola di direzione ({{ui:Orizzontale}}, {{ui:Verticale}}, {{ui:Parallelo}}, {{ui:Perpendicolare}}) vale su ogni pezzo, e una quota tra le due estremità esterne continua a misurarle. Vanno persi i vincoli che tenevano la parte tagliata via, o una lunghezza che il taglio ha modificato ({{ui:Uguale}}, l'ampiezza di un arco). Un cerchio rifilato mantiene i vincoli di centro e raggio. Le polilinee rifilate perdono i propri.

## I vincoli

| Comando | Mantiene |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | una linea o un segmento orizzontale o a piombo (`2P`: due punti in piano o a piombo) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | due linee parallele, perpendicolari o sulla stessa retta |
| {{cmd:GCCOINCIDENT}} | due punti uniti; `O`: un punto su una linea, un cerchio o un arco |
| {{cmd:GCTANGENT}} | una linea e un cerchio o un arco, o due di essi, a contatto |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | due cerchi o archi con lo stesso centro; due lunghezze o due raggi uguali |
| {{cmd:GCSYMMETRIC}} | due punti, linee o cerchi specchiati rispetto a una linea |
| {{cmd:GCFIX}} | un punto (fare clic vicino) o un intero oggetto (`O`) dove si trova |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | una distanza |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | un raggio, un diametro, un angolo tra due linee o l'ampiezza di un arco |

{{cmd:GEOMCONSTRAINT}} e {{cmd:DIMCONSTRAINT}} chiedono quale usare; {{ui:Vincola}} e {{ui:Quota}} nel gruppo {{ui:Parametrico}} li eseguono, e {{ui:Altro}} elenca ciascuno. Dove si fa clic determina la parte: un clic vicino a un'estremità, al punto medio o a un centro prende quel punto; un clic su una polilinea prende il segmento sotto di esso. Il primo oggetto resta fermo e il secondo si sposta per incontrarlo.

Un vincolo in conflitto con altri, o che non aggiunge nulla perché gli altri ne implicano già l'effetto, viene rifiutato con un messaggio e nulla si sposta.

## Vedere, selezionare e rimuovere

- Fare clic su una casella di una barra dei vincoli (o su un quadratino di coincidenza, o su un'etichetta di quota) per selezionare quel vincolo; la cronologia ne riporta il nome. Premere {{key:Delete}} per rimuoverlo.
- {{cmd:DELCONSTRAINT}} rimuove tutti i vincoli dagli oggetti selezionati.
- {{cmd:CONSTRAINTBAR}}: `S` mostra tutte le barre, `H` le nasconde; selezionare prima gli oggetti per mostrare o nascondere le loro. {{ui:Altro}} contiene {{ui:Mostra barre dei vincoli}} e {{ui:Nascondi barre dei vincoli}}.
- {{cmd:DCDISPLAY}} mostra o nasconde i vincoli dimensionali. Non vengono mai stampati.
- {{cmd:DCCONVERT}} trasforma le quote disegnate su linee, cerchi e archi in vincoli dimensionali.

:::note
Se si è usato il disegno parametrico di AutoCAD, i nomi dei comandi e i prompt sono gli stessi. Vincoli e parametri vengono salvati in file DWG e DXF in una forma che gli altri programmi ignorano; vedi [File](topic:files#constraints-in-files).
:::
