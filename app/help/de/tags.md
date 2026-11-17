---
title: "Tags: Attribute, die Listen speisen"
summary: Definieren Sie einen Tag (seine Art, die Werte, die er annehmen darf, und die Blöcke, auf die er zutrifft), setzen Sie ihn auf Blockreferenzen und listen Sie die Referenzen als Liste auf, die Sie als CSV speichern können.
keywords: Tags, Tag, Attribut, Liste, Datenextraktion, Eigenschaft, Brandwiderstand, Auswahlliste, Blockreferenz, TAGS, csv
from: 9b90bacc
---

Ein **Tag** ist ein Blockattribut mit einer Definition: Es legt fest, welche Art von Wert es enthält, welche Werte erlaubt sind und auf welche Blöcke es zutrifft. Die Werte sind gewöhnliche Blockattribute. Daher lesen andere Programme sie ebenfalls, und {{cmd:ATTEDIT}} zeigt sie an. Nur die Definitionen sind neu, und sie werden in der Zeichnung gespeichert.

## Definieren und setzen

Geben Sie {{cmd:TAGS}} ein und wählen Sie:

- {{ui:Definieren}}: einen Namen (Buchstaben, Ziffern, Leerzeichen, `_ . -`), eine Art (`text`, `number`, `integer`, `yesno`, `length`, `angle`), die zulässigen Werte, getrennt durch `;` (leer lassen für beliebige Werte), und die Blocknamen, auf die er zutrifft (`DOOR*` trifft auf jeden Block zu, dessen Name mit DOOR beginnt; leer bedeutet jeden Block).
- {{ui:Satz}}: Wählen Sie Blockreferenzen aus und geben Sie `FireRating=60 min; Width=850` ein. Ein Wert außerhalb der erlaubten Liste oder keine Zahl bei einem Zahl-Tag wird abgelehnt, und das wird gemeldet. Ein einziger Rückgängigschritt. Ein Block ohne das Attribut erhält es als verborgenes Attribut.
- {{ui:Liste (C)}}: jede Referenz auf einen Block, auf den ein Tag zutrifft, optional nach einem Tag oder nach Blocknamen gruppiert, gedruckt und als CSV gespeichert.
- {{ui:Entfernen (R)}}: vergisst eine Definition. Die Werte bleiben an den Referenzen.

Das Umbenennen eines Tags benennt seine Werte auf jeder Referenz um. Tag-Namen unterscheiden keine Groß- und Kleinschreibung, so wie Attributnamen es auch nicht tun.
