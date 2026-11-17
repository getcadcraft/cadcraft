---
title: Verificare in quali unità è espresso un disegno
summary: Verificare se un disegno aperto è in millimetri, pollici o altro, controllarlo misurando e capire perché un altro programma può indicare unità diverse per lo stesso DXF.
keywords: unità, quali unità, quale unità, verifica unità, millimetri, mm, pollici, metrico, imperiale, unità DXF, da STEP a DXF, unità errate, pollici o mm, INSUNITS, MEASUREMENT, unità del disegno, DXF di PartCraft
from: c0ee75bb
---

## Cosa farai

Scoprire cosa rappresenta un'unità in un disegno aperto e verificare che i numeri che si leggono abbiano la dimensione prevista.

## Passi

1. Aprire il disegno, poi premere {{key:Esc}} perché non sia selezionato nulla, nella scheda {{ui:Modello}}.
2. Nel pannello di destra, sotto {{ui:Impostazioni correnti}}, leggere {{ui:Unità}}. Indica cosa rappresenta un'unità del disegno: {{ui:Millimetri}}, {{ui:Pollici}}, {{ui:Piedi}} e così via. Un DXF salvato da PartCraft indica {{ui:Millimetri}}.
3. Verificare misurando qualcosa di cui si conosce la dimensione. Digitare {{cmd:DIST}} e indicare i due estremi di uno spigolo o di un foro. Se una parte di cui si conosce la misura di 25 mm risulta `25`, il disegno è in millimetri; se risulta circa `0.98`, è in pollici.

{{ui:Senza unità}} significa che il file non lo dichiara. CadCraft tratta allora l'unità del formato carta (millimetri sui formati ISO, pollici sui formati US), e i numeri sono corretti solo quanto lo è il programma che li ha scritti.

## Se le unità sono errate

Modificare {{ui:Unità}} **non ridimensiona nulla**: i numeri restano uguali e cambia solo ciò che rappresentano. Quindi impostarlo solo per dichiarare cosa è davvero il disegno. Se i numeri sono in millimetri e {{ui:Unità}} indica {{ui:Pollici}}, scegliere {{ui:Millimetri}}. Se serve la geometria stessa in altre unità, scalarla con {{cmd:SCALE}} (25.4 per passare da pollici a millimetri, 1/25.4 nel senso opposto) e poi impostare {{ui:Unità}}.

Come sono scritte le lunghezze (decimali, piedi e pollici, frazioni) è un'impostazione a parte, {{ui:Formato delle lunghezze}}: vedere [Unità, formati di carta e scale](topic:units-papers-scales).

## Perché un altro programma può indicare i pollici

Un DXF dichiara le sue unità nella propria intestazione. Il DXF più vecchio, R12, non aveva affatto una variabile per le unità, quindi un programma che legge R12 in modo rigoroso ignora quella scritta e usa un proprio valore predefinito, spesso i pollici. La geometria del file è la stessa in entrambi i casi: cambia solo l'etichetta. PartCraft scrive i suoi file DXF in formato R12 e dichiara i millimetri in due modi (`$INSUNITS` 4 e `$MEASUREMENT` 1), perché più programmi li leggano correttamente. Se un programma indica ancora i pollici, impostare le sue unità su millimetri all'apertura del file.

Portare un file in un disegno (anziché aprirlo) converte le sue unità: vedere [Unità all'importazione](topic:units-on-import).
