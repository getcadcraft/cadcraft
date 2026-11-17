---
title: Dokumente und Revisionen (der Tresor)
summary: Eine Schritt-für-Schritt-Anleitung zu einem echten Auftrag: einen Projektordner unter Kontrolle bringen, eine Zeichnung auschecken, ändern, mit einer Notiz einchecken, zur Prüfung senden, genehmigen und freigeben, den Verlauf und die Verwendung ansehen, was eine zweite Person sieht, während die Datei gesperrt ist, und wie es mit Cloud-Ordnern funktioniert.
keywords: Tresor, Dokumente, Anleitung, Lernprogramm, Auschecken, Einchecken, Revision, Freigabe, genehmigen, sperren, Verlauf, Verwendung, Cloud-Ordner, Projektordner, Dokumentenverwaltung, pdm, zwei Personen, geteilter Ordner
from: 3829528d
---

## Was Sie tun

Sie sind Ana und arbeiten mit einem Kollegen, Ben, am Riverside Clinic. Die Zeichnungen des Projekts liegen in einem Ordner, den Sie beide erreichen (ein geteiltes Laufwerk, ein synchronisierter Ordner oder ein Cloud-Ordner). Am Ende hat eine Datei den Weg von ihrer ersten Kopie zur freigegebenen Revision **A** genommen, wurde als **B.1** erneut geändert, Sie haben gesehen, wer was getan hat, und Sie haben gesehen, was Ben sieht, wenn Sie die Datei halten.

Alles wird in einem versteckten Ordner `.ccvault` neben Ihren Dateien gehalten: kein Server, nichts wird hochgeladen (ein Cloud-Ordner ist die Ausnahme, siehe den letzten Schritt). Für jede Schaltfläche und jede Regel an einer Stelle siehe das Thema *Dokumente: Auschecken, Revisionen und Freigabe*, wo Ihre App es hat.

## 1. Den Projektordner einrichten

1. Wählen Sie {{ui:Dokumente…}} im Menü {{ui:Mehr}} der Registerkarte **Ansicht** oder geben `DOCUMENTS` (oder `DOCS`) ein und drücken {{key:Enter}}.
2. Wählen Sie {{ui:Den Projektordner wählen}} und den Ordner, der die Zeichnungen des Projekts enthält. (Projektordner funktionieren in Studio und in Browsern, die einen Ordner öffnen können, etwa Chrome und Edge. In anderen Browsern sagt das Bedienfeld es.)
3. Wählen Sie {{ui:Ändern}} neben **Sie:** und geben Ihren Namen ein, `Ana` (falls gefragt, auch den Namen dieses Computers). Das Bedienfeld zeigt nun *Sie: Ana auf* und Ihren Computer. Ihr Name steht bei allem, was Sie tun.
4. Wählen Sie {{ui:Einen Tresor in diesem Ordner beginnen}} und geben den Namen des Projekts ein, `Riverside clinic`. Das Bedienfeld zeigt *Tresor für Riverside clinic gestartet.*

## 2. Eine Datei unter Kontrolle bringen

1. Öffnen Sie **Dateien nicht im Tresor** und wählen {{ui:Hinzufügen}} neben `plans/A-101.dxf`.
2. Sie erscheint unter **Dateien im Tresor** mit der Revision **A.1** und dem Status **In Bearbeitung**. A.1 ist ihre erste Kopie; der Tresor behält eine Kopie jeder Revision.

## 3. Auschecken, ändern, einchecken

1. Wählen Sie {{ui:Öffnen}} neben `plans/A-101.dxf`. Die Zeichnung öffnet sich in CadCraft, und das Bedienfeld schließt sich, damit Sie sie sehen. Das Bedienfeld ist weiterhin einen Befehl entfernt: `DOCUMENTS`.
2. Öffnen Sie das Bedienfeld erneut und wählen {{ui:Auschecken}}. Die Zeile zeigt nun **Ihnen ausgecheckt**. Eine Sperrdatei wurde in `.ccvault/locks` angelegt; niemand sonst kann diese Datei auschecken, bis Sie sie einchecken.
3. Zeichnen Sie etwas: Fügen Sie eine Linie hinzu, verschieben Sie eine Wand. Nichts, was Sie tun, kann über die Datei des Tresors gespeichert werden, außer die Zeichnung ist Ihnen ausgecheckt; {{ui:Speichern unter}} funktioniert immer für eine Kopie Ihrer eigenen.
4. Öffnen Sie das Bedienfeld, wählen {{ui:Einchecken}} und tippen ein, was sich geändert hat (`Tür verschoben`). Das Bedienfeld meldet *eingecheckt als A.2*. Die Datei im Projektordner ist nun die Zeichnung, die Sie offen hatten, und die Sperre ist weg. Einchecken ohne Änderung behält die Revision bei.

Wenn Sie es sich anders überlegen, gibt {{ui:Auschecken rückgängig}} die Datei zurück, ohne eine neue Revision zu erzeugen.

## 4. Prüfen und freigeben

1. Wählen Sie {{ui:Zur Prüfung senden}}. Der Status wird **Zur Prüfung** und die Datei ist schreibgeschützt.
2. Wählen Sie vor dem Genehmigen {{ui:Projekteinstellungen}} und listen auf, wer genehmigen darf (ein Name pro Zeile), zum Beispiel `Ben` und `Carla`, und setzen das Häkchen bei der Regel, dass der Genehmigende jemand anderes als der Autor sein muss. Wählen Sie {{ui:Einstellungen speichern}}. Nun lehnt der Tresor selbst alle anderen ab.
3. Ben (oder Carla) wählt {{ui:Genehmigen}} und tippt den Namen des Genehmigenden ein. Der Status wird **Freigegeben** und die Revision wird **A**, mit *genehmigt von* und dem Namen. Eine freigegebene Datei ist schreibgeschützt. {{ui:Zurücksenden}} hätte sie mit einem Grund zurück in **In Bearbeitung** gesetzt.

Der Name des Genehmigenden ist der Name, den Sie im Bedienfeld eingetippt haben; er ist ein Nachweis, wer abgezeichnet hat, kein Identitätsnachweis.

## 5. Eine neue Revision

1. Wählen Sie bei der freigegebenen Datei {{ui:Neue Revision}}. Sie reservieren sie für den nächsten Buchstaben.
2. Ändern Sie sie, dann {{ui:Einchecken}}. Die Revision ist **B.1**, In Bearbeitung. Geben Sie sie auf dieselbe Weise frei, und sie wird **B**. {{ui:Auschecken rückgängig}} vor dem ersten Einchecken lässt sie bei **A**.

Revisionsbuchstaben laufen A, B … Z, AA, AB. Lässt Ihr Standard einige Buchstaben aus, überspringt die Projekteinstellung *Die Reihenfolge nach ASME Y14.35 verwenden* für die nächsten Revisionen I, O, Q, S, X und Z.

## 6. Nachsehen, was passiert ist

Wählen Sie den Namen der Datei, um ihre Details zu öffnen:

- **{{ui:Verlauf}}**: jedes Ereignis, das neueste zuerst, mit wem, auf welchem Computer und wann: *Eingecheckt A.2* von Ana, *Freigegeben* von Ben, und so weiter.
- **{{ui:Revisionen}}**: die Revisionstabelle. {{ui:Kopie öffnen}} öffnet eine Revision als einfache Kopie, die die Datei des Tresors nicht überschreiben kann; {{ui:Vergleichen mit}} listet auf, was gegenüber der Revision davor oder einer anderen hinzugefügt, entfernt und geändert wurde.
- **{{ui:Verwendet}}**: die Zeichnungen, auf die sie verweist (Xrefs).
- **{{ui:Verwendet von}}**: listet jede andere Zeichnung im Tresor auf, die auf diese verweist: Ändern Sie einen Basisplan, und Sie wissen, welche Blätter zu prüfen sind.

## Revision auf dem Blatt

Mit geöffneter Zeichnung (und einem Layout darin) wählen Sie {{ui:Revisionsblock}}: Eine Tabelle der freigegebenen Revisionen wird oben rechts auf dem Blatt gezeichnet. Wählen Sie {{ui:Schriftfelder füllen}}, um Schriftfeld-Attribute zu füllen, die mit `REV`, `VAULT.REV`, `VAULT.STATE`, `VAULT.DATE` oder `APPROVED_BY` markiert sind, mit der Revision, dem Status, dem Datum und dem Genehmigenden der Datei. Wenn Sie die nächste Freigabe genehmigen, wird der Revisionsblock aktualisiert.

## 7. Was Ben sieht, während Sie die Datei halten

Checken Sie die Datei nun erneut aus und bitten Ben, denselben Projektordner auf seinem Computer zu öffnen und das Bedienfeld zu öffnen. In der Zeile der Datei sieht er **Ausgecheckt von Ana auf** Ihrem Computer **seit** der Zeit, und keine Schaltfläche {{ui:Auschecken}}. Versucht er es trotzdem, lehnt der Tresor ab: Die Sperre ist eine Datei, die das System nicht doppelt anlegt, sodass zwei Personen die Datei nicht beide halten können, selbst im selben Sekundenbruchteil, wenn der Ordner in Studio auf der Festplatte liegt. (In einem Browser erlaubt der Ordner nur eine Sperre nach bestem Bemühen, und das Bedienfeld sagt es unter **Ordner**.)

Wenn Ana abwesend ist und Ben die Datei braucht, gibt {{ui:Auschecken aufheben}} sie frei. Er muss einen Grund eintippen; er geht ins Protokoll, zusammen mit dem Namen, dem der Auscheckvorgang gehörte. Wenn das Projekt Administratoren auflistet, können nur sie es. Ein Auscheckvorgang, der älter als die Grenze für veraltete Auscheckungen ist (standardmäßig 14 Tage), wird als *lange* markiert. Nach dem Aufheben wird Anas verspätetes Einchecken abgelehnt, sodass Sie einander nicht überschreiben können.

## 8. Cloud-Ordner

Ein Cloud-Ordner ist ein Projektordner, der im Cloud-Speicher Ihres Teams liegt, sodass das Team kein geteiltes Laufwerk braucht. In Studio, angemeldet bei Ihrem CadCraft-Konto, zeigt das Bedienfeld {{ui:Cloud-Ordner öffnen}} neben {{ui:Den Projektordner wählen}}. Wählen Sie es und dann den Ordner, aufgeführt als Arbeitsbereich / Ordner. Ein Eigentümer des Arbeitsbereichs legt den Ordner zuerst an, und der Cloud-Speicher des Teams muss gelten. Alles oben funktioniert gleich; der Server erzeugt die Sperre, die über Personen hinweg streng ist. Sind Sie nicht angemeldet, fordert das Bedienfeld Sie zur Anmeldung auf. In einem gewöhnlichen Browser-Tab wird die Cloud-Schaltfläche nicht angeboten; verwenden Sie Studio.

## Ausprobieren

Führen Sie die acht Schritte oben mit einer Kopie einer echten Datei aus. Für die Schritte mit zwei Personen brauchen Sie eine andere Person oder zwei Fenster mit zwei Namen. Wenn Sie es mit einem echten geteilten Ordner probieren, listet die Seite Community-Test eine Prüfung, die genau dies abfragt, und nimmt Ergebnisse entgegen.
