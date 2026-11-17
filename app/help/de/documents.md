---
title: Dokumente: Auschecken, Revisionen und Freigabe
summary: Die Zeichnungen eines Projektordners unter Kontrolle halten: eine Datei auschecken, damit niemand sie ändern kann, als neue Revision einchecken, zur Prüfung senden und mit dem Namen eines Genehmigers freigeben; außerdem Verlauf, Verwendungen, eine Stückliste und Schriftfelder, die die Revision anzeigen.
keywords: Projekteinstellungen, Genehmiger, Administratoren, Revisionsbuchstaben, ASME, schreibgeschützt, Revisionen vergleichen, Kopie öffnen, partcraft, bimcraft, documents, DOCUMENTS, DOCS, Tresor, Dokumentenverwaltung, pdm, auschecken, einchecken, checkout, checkin, sperren, Revision, rev, Revisionsbuchstabe, freigeben, freigegeben, genehmigen, Genehmigung, Prüfung, veraltet, Verwendungsstelle, bom, Stückliste, Schriftfeld, Revisionsblock, Projektordner
from: ee938722
---

## Was Sie erstellen

Ein Projektordner, in dem jede Zeichnung eine Revision (A.1, A.2 … dann A, B …) und einen Status (In Bearbeitung, Zur Prüfung, Freigegeben, Veraltet) hat, in dem jeweils nur eine Person gleichzeitig eine Datei ändern kann und in dem jedes Auschecken, Einchecken, jede Genehmigung und jedes abgebrochene Auschecken mit Person und Zeitpunkt festgehalten wird.

Alles wird im Ordner selbst gespeichert, in einem versteckten Ordner `.ccvault` neben Ihren Zeichnungen. Ein Ordner auf einem Netzlaufwerk oder einem synchronisierten Ordner funktioniert für ein ganzes Team. Es gibt keinen Server, und nichts wird hochgeladen.

## Dokumente öffnen

Geben Sie `DOCUMENTS` (oder `DOCS`) ein und drücken Sie {{key:Enter}}. Das Panel öffnet sich neben der Zeichnung.

Wählen Sie {{ui:Choose the project folder}} und den Ordner aus, der die Zeichnungen des Projekts enthält. Projektordner funktionieren in CadCraft Studio und in Browsern, die einen Ordner öffnen können (Chrome, Edge). In anderen Browsern weist das Panel darauf hin.

Beim ersten Mal geben Sie Ihren Namen ein (er steht bei allem, was Sie tun) und den Namen dieses Computers. Wenn Sie angemeldet sind, ist Ihr Name bereits eingetragen.

## Tresor anlegen

Ein Ordner, der noch kein Tresor ist, bietet {{ui:Start a vault in this folder}} an. Geben Sie den Namen des Projekts ein. Öffnen Sie dann {{ui:Files not in the vault}} und wählen Sie neben jeder Datei, die unter Kontrolle gebracht werden soll, {{ui:Add}}. Eine hinzugefügte Datei beginnt mit der Revision **A.1**, In Bearbeitung.

## Eine Zeichnung ändern

1. Wählen Sie neben einer Zeichnung {{ui:Open}}. Sie wird in CadCraft geöffnet. Ist sie nicht zu Ihren Gunsten ausgecheckt, sehen Sie sie nur an und ändern sie nicht: {{ui:Save}} verweigert das Überschreiben und nennt den Grund (verwenden Sie {{ui:Save as}}, um eine eigene Kopie zu behalten).
2. Wählen Sie {{ui:Check out}}. Niemand sonst kann sie jetzt auschecken; das Panel zeigt, wer sie hat, an welchem Computer und seit wann.
3. Zeichnen Sie.
4. Wählen Sie {{ui:Check in}} und beschreiben Sie, was sich geändert hat. Die geöffnete Zeichnung wird in ihrem eigenen Format im Projektordner gespeichert und wird zur nächsten Revision (A.1, dann A.2). Einchecken ohne Änderung behält die Revision bei.

{{ui:Undo check-out}} gibt die Datei ohne neue Revision zurück.

## Prüfen und freigeben

- {{ui:Send for review}}: Die Datei ist während der Prüfung schreibgeschützt.
- {{ui:Approve}}: Geben Sie den Namen des Genehmigers ein. A.3 wird **A**, Freigegeben. Freigegebene Dateien sind schreibgeschützt.
- {{ui:Send back}}: zurück zu In Bearbeitung, mit Begründung.
- {{ui:New revision}} bei einer freigegebenen Datei checkt sie für den nächsten Buchstaben aus: ihr erstes Einchecken ist **B.1**. {{ui:Undo check-out}} davor belässt sie bei A.
- {{ui:Make obsolete}} setzt eine freigegebene Datei außer Kraft.

Ein Projekt kann eine Liste führen, wer genehmigen darf, und verlangen, dass der Genehmiger nicht die Person ist, die die Datei eingecheckt hat (siehe Projekteinstellungen unten).

## Projekteinstellungen

Öffnen Sie {{ui:Project settings}} im Panel:

- **Genehmiger**: ein Name pro Zeile. Gibt es welche, können nur sie eine Freigabe genehmigen.
- **Der Genehmiger muss eine andere Person als der Autor sein**: die Vier-Augen-Regel.
- **Administratoren**: ein Name pro Zeile. Gibt es welche, können nur sie das Auschecken einer anderen Person aufheben oder diese Einstellungen ändern.
- **Auszulassende Revisionsbuchstaben**: {{ui:Use the ASME Y14.35 sequence}} überspringt I, O, Q, S, X und Z, oder Sie geben Ihre eigenen Buchstaben ein. Bereits vergebene Buchstaben bleiben; die Auswahl gilt für die nächsten Revisionen.
- **Ein Auschecken gilt als veraltet nach**: die Anzahl der Tage (standardmäßig 14).

Wählen Sie {{ui:Save settings}}. Die Änderung wird mit Angabe der Person im Protokoll festgehalten.

## Jemand hat eine Datei ausgecheckt gelassen

{{ui:Break check-out}} gibt eine Datei frei, die jemand anderes ausgecheckt hat (die Person ist abwesend oder ihr Computer ist ausgefallen). Sie müssen einen Grund eingeben: Er wird mit dem Namen der Person, deren Auschecken es war, im Protokoll festgehalten. Hat das Projekt Administratoren, können nur sie dies tun. Ein Auschecken, das älter als 14 Tage ist, wird als lange bestehend markiert.

## Verlauf, Revisionen, Verwendet, Verwendet von

Wählen Sie den Namen einer Datei, um zu sehen:

- {{ui:History}}: jedes Ereignis, das neueste zuerst, mit Person, Computer und Zeitpunkt.
- {{ui:Revisions}}: jede gespeicherte Revision. Eine Kopie jeder Revision liegt im Tresor (gleicher Inhalt wird nur einmal gespeichert). {{ui:Open copy}} öffnet diese Revision als einfache Kopie, die die Datei im Tresor nicht überschreiben kann. {{ui:Compare with}} listet auf, was zwischen dieser Revision und der davor (oder einer anderen, die Sie wählen) hinzugefügt, entfernt und geändert wurde, und hebt es in der Zeichnung farbig hervor.
- {{ui:Uses}}: die Zeichnungen, auf die sie verweist (Xrefs), die Dokumente, auf die ein IFC-Modell zeigt, die Teile einer PartCraft-Baugruppe.
- {{ui:Used by}}: jede Datei im Tresor, die diese verwendet.

{{ui:Bill of materials (CSV)}} speichert die Liste aller Elemente, die eine Datei verwendet, Ebene für Ebene, mit Mengen, Revisionen und Status, für eine Tabellenkalkulation.

## Ein Revisionsblock auf dem Blatt

Wenn Sie eine Zeichnung mit einem Layout geöffnet haben, wählen Sie {{ui:Revision block}}. Eine Tabelle der freigegebenen Revisionen (Revision, Datum, Person, Genehmigt, Beschreibung) wird oben rechts auf dem Blatt gezeichnet, das Sie gerade ansehen. Wenn Sie eine Freigabe genehmigen, wird die Tabelle aktualisiert.

## Revision im Schriftfeld

Geben Sie den Attributen Ihres Schriftfelds eines dieser Tags und wählen Sie in der geöffneten Zeichnung {{ui:Fill title blocks}}:

| Tag | Gefüllt mit |
|---|---|
| `VAULT.REV`, `REV`, `REVISION`, `REV_NO` | die Revision (B, oder B.2, während daran gearbeitet wird) |
| `VAULT.STATE` | der Status (Freigegeben …) |
| `VAULT.DATE`, `REV_DATE`, `REVDATE` | das Datum der letzten Revision |
| `VAULT.APPROVER`, `APPROVED_BY` | wer die letzte Freigabe genehmigt hat |

## PartCraft und BimCraft

PartCraft und BimCraft haben dasselbe Dokumente-Panel für ihre eigenen Dateien: Teile und Baugruppen in PartCraft, IFC-Modelle in BimCraft. Einchecken speichert das geöffnete Modell im Projektordner, und eine Baugruppe zeigt, welche Teile sie verwendet, sowie eine Stückliste.

## Gut zu wissen

- Zwei Personen im selben gemeinsamen Ordner können eine Datei nicht beide auschecken: Das Auschecken ist eine Datei, die das System kein zweites Mal anlegt. Im Browser und in einem Studio mit einer Shell, die älter ist als diese Funktion, ist dies so streng, wie der Ordner es zulässt: Zwei Auscheckvorgänge im selben Sekundenbruchteil könnten beide gelingen. Das Panel zeigt, welcher Fall zutrifft.
- Den Ordner `.ccvault` nicht von Hand bearbeiten oder löschen. Das Protokoll darin ist die Aufzeichnung; der Tresor baut seine Liste bei Bedarf daraus neu auf.
- Eine Änderung an einer Datei im Ordner ohne Auschecken wird als {{ui:Changed in the folder without a check-out}} angezeigt.
