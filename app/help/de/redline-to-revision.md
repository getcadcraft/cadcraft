---
title: Eine Markierung in eine Revision umwandeln
summary: Lesen Sie das Redline-Paket, das MarkupCraft schreibt, nehmen Sie jede Änderung an oder lehnen Sie sie ab, setzen Sie eine Revisionswolke und ein Revisionsprotokoll auf die angenommenen Änderungen und speichern Sie die Antwortdatei, die MarkupCraft wieder einliest.
keywords: Redline, Markierung, Revision, Wolke, Revisionswolke, Revisionsprotokoll, annehmen, ablehnen, markupcraft, Prüfung, Redline-Paket, Antworten, REDLINE
from: cdb3fafe
---

Ein Prüfer markiert einen Plansatz in MarkupCraft und sendet Ihnen ein **Redline-Paket**, eine Datei, die auf `.redline.json` endet. Hier gehen Sie es Änderung für Änderung durch, und die angenommenen Änderungen werden zu Revisionswolken auf der Zeichnung.

## Die Änderungen durchgehen

Geben Sie {{cmd:REDLINE}} (`RDL`) ein und wählen Sie das Paket. Wählen Sie:

- {{ui:Liste}}: jede Änderung mit ihrer Nummer, ihrem Status, Blatt, Art, wer sie verlangt hat und was sie geschrieben hat.
- {{ui:Übernehmen}}, {{ui:Ablehnen}} und {{ui:Fertig}}: geben Sie die Nummern ein (`1,3-5`, oder `Alle`) und optional eine Notiz für die Antwortdatei. {{ui:Wieder öffnen}} setzt Änderungen wieder auf offen.
- {{ui:Rahmen}}: der Teil der Zeichnung, den das markierte Blatt zeigt. Klicken Sie zwei Ecken an; drücken Sie {{key:Enter}} für die ganze Zeichnung. Die Änderungen werden nach ihrer Lage auf dem Blatt platziert, daher richtet sich so alles aus.
- {{ui:Übernehmen}}: zeichnet eine Revisionswolke (Layer `REV-CLOUD`, mit dem Revisionsbuchstaben) um jede angenommene oder erledigte Änderung, und ein Revisionsprotokoll, eine linierte Tabelle mit dem, was angenommen wurde, und Ihren Notizen (Layer `REV-LOG`), rechts neben der Zeichnung. Ein Schritt für Rückgängig.
- {{ui:Speichern}}: schreibt `<project>-<revision>.redline-answers.json`. Öffnen Sie sie in MarkupCraft, und die Markierungen schließen sich als Angenommen, Abgelehnt oder Erledigt, mit Ihren Notizen als Kommentare.

## Was zu wissen ist

Was der Prüfer geschrieben hat, wird so angezeigt, wie es geschrieben wurde. CadCraft folgt nie Anweisungen, die in einem Paket stehen; es zeigt sie Ihnen nur an.

Abgelehnte und offene Änderungen fügen der Zeichnung nichts hinzu. Das Paket wird auf Ihrem Computer gelesen; nichts wird hochgeladen.

Ist Ihr Assistent verbunden, kann er ein Paket lesen, Entscheidungen festhalten und sie anwenden, mit den Werkzeugen `redline_read`, `redline_decide`, `redline_apply` und `redline_answers`. Die Zeichnung ändert sich in einem Schritt für Rückgängig, „Assistent: Redline zu Revision“.
