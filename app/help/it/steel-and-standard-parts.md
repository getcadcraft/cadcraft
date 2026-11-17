---
title: Inserire profili in acciaio e parti standard
summary: Disegnare profili in acciaio, sezioni e aste 3D dalle tabelle dei profili pubblicate, inserire bulloni, dadi, rondelle, spine, cuscinetti, linguette e ingranaggi dalle loro norme, ed elencarli in una distinta dei componenti.
keywords: acciaio, profilo, sezione, forma, profilo W, trave a flange larghe, trave a I, canale, angolare, hss, tubo, ipe, hea, heb, upn, trave, pilastro, asta, prospetto, aisc, en 10365, bullone, vite, dado, rondella, spina, perno, cuscinetto, linguetta, sede della linguetta, ingranaggio, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, parti standard, distinta dei componenti, distinta base, bom, steelmember, partslist
from: 547c1048
---

La scheda {{ui:Standard}} della libreria contiene due tipi di elementi, creati qui dalle tabelle pubblicate (nulla viene scaricato):

- **Profili in acciaio**: 1,335 misure. W, S, C, L, HSS e Pipe dall'AISC Shapes Database v16.0; IPE, HEA, HEB e UPN da EN 10365:2017. DetailCraft usa la stessa tabella.
- **Parti standard**: viti a testa esagonale (ISO 4017), bulloni esagonali (ISO 4014), dadi esagonali (ISO 4032), rondelle piane (ISO 7089), bulloni e dadi esagonali in pollici (ASME B18.2.1 e B18.2.2), spine parallele (ISO 2338), cuscinetti radiali a sfere (ISO 15), linguette parallele (DIN 6885-1) e ruote dentate cilindriche (moduli da ISO 54).

Tutto è condiviso sotto CC0: si può usarlo per qualsiasi scopo, senza attribuzione.

## Inserire un profilo in acciaio

1. Aprire la libreria ({{ui:Libreria}} nel gruppo Blocchi, oppure digitare `LIB`) e fare clic sulla scheda {{ui:Standard}}.
2. Scegliere la famiglia nel primo elenco, per esempio {{ui:Profili W}}. Digitare nella casella di ricerca per restringere le misure: `W12` mostra tutti i W12.
3. In {{ui:Colloca come}}, scegliere:
   - {{ui:Sezione}}: la sezione trasversale, con il centro sul punto di inserimento.
   - {{ui:Quota}}: l'asta vista di lato, lunga quanto indica {{ui:Lunghezza (mm)}}, a partire dal centro della sua estremità sinistra.
   - {{ui:Asta 3D}}: un solido nella scheda 3D (sotto).
4. Fare clic su {{ui:Posiziona}} sulla scheda della misura, poi fare clic dove va, come per qualsiasi elemento della libreria.

Una sezione o una quota diventa un blocco. I suoi attributi riportano la misura, la tabella di provenienza, la lunghezza (per una quota) e un materiale da compilare.

:::note
Le sezioni S, i canali e le UPN sono disegnati con ali parallele di spessore medio, e gli angolari con spigoli squadrati: le ali reali sono inclinate e gli spigoli arrotondati. W, IPE, HEA e HEB hanno i raccordi alla radice, e gli HSS i raggi d'angolo.
:::

## Creare un'asta 3D

Scegliere {{ui:Asta 3D}} e fare clic su {{ui:Posiziona}}, oppure digitare {{cmd:STEELMEMBER}} (`SMEMBER`) nella riga di comando:

1. Al prompt `Dimensione sezione`, premere {{key:Enter}} per la misura mostrata, oppure digitarne una, per esempio `HSS6x6x1/4` o `IPE300`.
2. Fare clic sul punto iniziale, poi sul punto finale. L'asta corre tra i due, appoggiata sul terreno.
3. Per un pilastro, digitare `C`, fare clic sul suo punto base e digitare la sua altezza.

L'asta è un solido chiuso nella scheda 3D. Spostarla o copiarla lì come qualsiasi altro solido. {{key:Mod+Z}} la rimuove di nuovo.

## Inserire una parte standard

1. Nella scheda {{ui:Standard}}, scegliere la famiglia, per esempio {{ui:Viti a testa esagonale}}.
2. Per una vite, un bullone, una spina o una linguetta, digitare la sua {{ui:Lunghezza (mm)}} (in pollici per le famiglie in pollici). Per un ingranaggio, digitare {{ui:Denti}}, {{ui:Larghezza della faccia (mm)}} e {{ui:Foro (mm)}}. Lasciare vuoto un campo per il valore usuale che vi è mostrato.
3. Fare clic su {{ui:Posiziona}} sulla misura e fare clic dove va.

Viti, bulloni e spine sono disegnati di lato, con la faccia d'appoggio della testa nel punto di inserimento; dadi, rondelle, cuscinetti e ingranaggi sono disegnati di fronte; le linguette dall'alto. I filetti sono disegnati nel modo usuale: la radice come linea sottile, la fine del filetto come linea spessa. Gli ingranaggi sono disegnati come cerchio di testa, cerchio primitivo e cerchio di fondo, non dente per dente.

Ogni blocco della parte riporta come attributi il suo tipo, la norma, la misura, la lunghezza e il materiale, e il suo peso dalla forma nominale in acciaio. Cambiare il materiale nel pannello {{ui:Proprietà}}.

Le stesse parti sono anche nella Libreria come elementi, e PartCraft le apre come parti parametriche ({{ui:Parte standard}} nel suo gruppo File).

## Creare una distinta dei componenti

- Nella libreria, fare clic su {{ui:Distinta dei componenti}}: ogni parte standard e profilo in acciaio del disegno, raggruppati per tipo, norma, misura, lunghezza e materiale, con la quantità e i numeri di voce. {{ui:Scarica CSV}} la salva per un foglio di calcolo.
- Per disegnarla, digitare {{cmd:PARTSLIST}} (`PLIST`), fare clic sull'angolo in alto a sinistra della tabella e premere {{key:Enter}} per l'altezza del testo usuale, oppure digitarne una.

L'elenco viene letto dagli attributi dei blocchi, quindi resta corretto anche dopo aver salvato il disegno come DWG o DXF e averlo riaperto.

## Errori comuni

- **"Nessun profilo in acciaio si chiama …"**: digitare la misura come la elenca la scheda {{ui:Standard}}: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **L'asta è nella scheda 3D, non nella pianta.** {{cmd:STEELMEMBER}} crea un solido; aprire la scheda 3D per vederlo. Per mostrare l'acciaio nella pianta, inserire anche una {{ui:Sezione}} o una {{ui:Quota}}.
- **Una lunghezza fuori intervallo.** Un bullone deve essere più lungo della sua testa, e una linguetta più lunga della sua larghezza. La riga sotto le schede indica quale valore è stato rifiutato.
