---
title: In PDF plotten
summary: Erstellen Sie eine PDF-Datei eines Blatts in voller Größe oder des Modells in einem Maßstab oder an das Papier angepasst, drucken Sie sie aus dem Browser oder aus Studio, oder speichern Sie sie als PNG oder SVG.
keywords: plotten, drucken, Drucker, Kopien, PNG, SVG, Bild, PDF, veröffentlichen, exportpdf, Papier, Maßstab, monochrom, Graustufen, Schwarzweiß, Linienstärke, Stift, Seiteneinrichtung, Plotfenster, Plotstil, Plotstiltabelle, ctb, farbabhängig, Rasterung, plotstyles, stylesmanager
from: a4752f83
---

## Was Sie erstellen

Eine PDF-Datei eines Blatts in voller Größe, danach eine schnelle PDF-Datei des Modells im Maßstab 1:100 und ein Ausdruck.

Die PDF-Datei wird in Ihrem Browser erstellt; es wird nichts hochgeladen. Es ist eine Vektor-PDF: Linien bleiben bei jeder Zoomstufe scharf, und Text lässt sich durchsuchen.

## Ein Blatt plotten

1. Klicken Sie unter der Zeichnung auf die Registerkarte des Blatts.
2. Drücken Sie {{key:Mod+P}}, klicken Sie auf {{ui:Plotten}}, oder geben Sie `PLOT` ein und drücken Sie {{key:Enter}}.

Das Dialogfeld {{ui:In PDF plotten}} wird geöffnet. Es zeigt an, welches Blatt auf welches Papier geplottet wird, „in voller Größe … so wie Sie es sehen“. Die Vorschau rechts zeigt das Blatt.

3. Wählen Sie bei {{ui:Plotstil}} {{ui:Monochrom (Schwarz)}} für schwarze Linien, {{ui:Farbe (wie gezeichnet)}}, um die Farben zu behalten, {{ui:Graustufen}} oder eine eigene Tabelle (siehe [Plotstiltabellen](topic:plot-pdf#plot-style-tables)). Das Blatt behält diese Wahl: Sie wird mit der Zeichnung gespeichert.
4. Wählen Sie bei {{ui:Linienstärke}} eine Stiftbreite von 0.13 mm bis 0.70 mm. Linien mit der Standard-Linienstärke werden in dieser Breite gedruckt; Linien mit eigener Linienstärke (Layer oder Objekt oder der Stift ihrer Farbe in der Tabelle) werden in dieser gedruckt.
5. Klicken Sie auf {{ui:PDF herunterladen}}.

Der Browser lädt eine PDF-Datei herunter, die nach der Zeichnung und dem Blatt benannt ist, zum Beispiel `Drawing1-A-101 Plan.pdf`. Der Verlauf zeigt ihre Größe in Bytes und ihr Papierformat in Millimetern an.

Ein Blatt wird immer im Maßstab 1:1 auf seinem eigenen Papier geplottet. Um das Papier zu ändern, ändern Sie es am Blatt selbst (siehe [Blatt einrichten](topic:sheets-and-viewports)). Layer, die nicht geplottet werden sollen, bleiben weg, ebenso die Rahmen der Ansichtsfenster.

## Alle Blätter in einer PDF

Bei zwei oder mehr Blättern hat das Dialogfeld {{ui:In PDF plotten}} die Option {{ui:Alle Blätter in einer PDF}}; oder geben Sie {{cmd:PUBLISH}} ein. {{key:Enter}} nimmt alle Blätter; Einige (`S`) fragt nach ihren Namen, durch Kommas getrennt. Eine PDF-Datei wird mit einer Seite pro Blatt heruntergeladen, in der Registerkartenreihenfolge, jede in ihrem eigenen Papierformat, und mit einem Lesezeichen pro Blatt mit dessen Namen. Jedes Blatt wird mit seiner eigenen Plotstiltabelle geplottet; ein Blatt ohne Auswahl verwendet die Tabelle, die Sie zuletzt im Dialogfeld gewählt haben, und die Stiftbreite, die Sie zuletzt gewählt haben.

## Das Modell plotten

1. Klicken Sie auf die Registerkarte {{ui:Modell}}.
2. Drücken Sie {{key:Mod+P}}.

Das Dialogfeld zeigt an, dass das Modell auf ein Blatt Papier geplottet wird, und zeigt weitere Einstellungen:

3. Wählen Sie bei {{ui:Fläche}}, was geplottet werden soll:
   - {{ui:Alles (Grenzen)}}: die gesamte Zeichnung.
   - {{ui:Was auf dem Bildschirm ist}}: der Bereich, den Sie jetzt in der Zeichnung sehen.
   - {{ui:Ein Fenster…}}: klicken Sie dann auf {{ui:Wählen}}, klicken Sie zwei Ecken in der Zeichnung an, und das Dialogfeld erscheint wieder.
4. Wählen Sie bei {{ui:Papier}} ein Format: ISO A4 bis A0, Letter, Legal, Tabloid und ANSI C und D oder ARCH C, D und E.
5. Wählen Sie bei {{ui:Ausrichtung}} {{ui:Querformat}} oder {{ui:Hochformat}}.
6. Wählen Sie bei {{ui:Maßstab (S)}} {{ui:An Papier anpassen}} oder einen Maßstab wie `1:100`.

Unter den Einstellungen zeigt eine Zeile den Maßstab und die Größe des Bereichs auf dem Papier an. Ist er größer als das Papier, wird das angezeigt: Die Ränder werden abgeschnitten. Wählen Sie einen kleineren Maßstab, ein größeres Papier oder {{ui:An Papier anpassen}}.

7. Klicken Sie auf {{ui:PDF herunterladen}}.

Ein Modellplot lässt einen Rand von 5 mm umlaufend frei, weil die meisten Drucker nicht bis an den Rand drucken können. {{ui:An Papier anpassen}} ergibt einen krummen Maßstab (der Verlauf und die Infozeile sagen „(angepasst)“); wählen Sie einen Standardmaßstab, wenn die Zeichnung maßgetreu sein muss.

:::note
Maßstäbe beziehen sich auf reale Einheiten. Damit 1:100 stimmt, stellen Sie {{ui:Einheiten}} unter {{ui:Aktuelle Einstellungen}} auf die Größe einer Zeichnungseinheit ein. Eine Zeichnung ohne Einheit wird als Millimeter angenommen.
:::

## Plotstiltabellen

Eine Plotstiltabelle legt fest, wie jede der 255 Standard-Zeichnungsfarben gedruckt wird, so wie eine farbabhängige Plotstiltabelle (CTB) in anderen CAD-Programmen. Drei sind eingebaut:

| Tabelle | Druckt |
|---|---|
| {{ui:Farbe (wie gezeichnet)}} | Jedes Objekt in seiner eigenen Farbe. |
| {{ui:Monochrom (Schwarz)}} | Jede Farbe schwarz: die übliche Wahl für Zeichnungen. |
| {{ui:Graustufen}} | Jede Farbe als ihr Grauton, damit Farben auf einem Schwarzweißdrucker getrennt bleiben. |

Um eigene zu erstellen, zum Beispiel rote Linien dick und schwarz, alles andere dünn:

1. Klicken Sie im Dialogfeld {{ui:In PDF plotten}} auf {{ui:Tabellen bearbeiten…}} (oder geben Sie {{cmd:PLOTSTYLES}} ein).
2. Klicken Sie auf {{ui:Neu}} und geben Sie einen Namen wie `office` bei {{ui:Name}} ein. Um stattdessen von einer eingebauten Tabelle auszugehen, wählen Sie sie bei {{ui:Tabelle}} und klicken Sie auf {{ui:Kopieren}}.
3. Klicken Sie eine Farbe im Raster an. {{key:Shift}}+Klicken wählt einen Bereich von Farben, {{key:Mod}}+Klicken fügt eine weitere hinzu, und {{ui:Jede Farbe auswählen}} nimmt alle.
4. Legen Sie fest, wie die ausgewählten Farben gedruckt werden:
   - {{ui:Druckt in}}: {{ui:Eigene Farbe}}, {{ui:Schwarz}} oder {{ui:Andere Farbe…}}.
   - {{ui:Als Grauton}}: die Farbe als ihr Grauton.
   - {{ui:Tinte (%)}}: 100 ist volle Tinte, 50 ist halb zu Weiß (Rasterung), für Hintergrundlinien.
   - {{ui:Linienstärke}}: {{ui:Eigene Linienstärke}} behält die Linienstärke des Objekts oder Layers bei; ein Wert druckt jede Linie dieser Farbe in dieser Breite.
   - {{ui:Linientyp}}: jede Linie dieser Farbe mit einem anderen Linientyp drucken (zum Beispiel alles Rote gestrichelt); {{ui:Linientyp des Objekts verwenden}} lässt sie unverändert.
   - {{ui:Linienende}} und {{ui:Linienverbindung}}: stumpfe, eckige oder runde Enden sowie Gehrung, Fase oder runde Ecken (rund, wie bisher, wenn Sie nichts einstellen).
   - {{ui:Füllstil}}: eine Vollfläche dieser Farbe wird statt mit Tinte als Schraffurlinien gedruckt (waagerechte oder senkrechte Balken, Diagonalen, Kreuzschraffur, Rauten, quadratische Punkte), für Drucker und Pläne, bei denen flache Tinte zu schwer wirkt.
   Die Tabelle selbst hat zwei weitere Einstellungen: {{ui:Linienstärken}}, die Breiten, die sie kennt (eine gedruckte Linie wird auf die nächstliegende gesetzt), und {{ui:Linientypfaktor}}, ein Faktor auf die Striche jedes Linientyps, der kein ISO-Linientyp ist.
5. Klicken Sie auf {{ui:Fertig}}. Die Tabelle wird in der Zeichnung gespeichert, und das Blatt (oder das Modell) wird nun damit geplottet. {{ui:Abbrechen}} verwirft die Änderungen.

Eine Farbe mit eigenem Stift zeigt einen Punkt in ihrer Ecke, und einen Punkt unten, wenn sie eine Linienstärke festlegt. Ein Objekt mit einer echten Farbe (nicht eine der 255) verwendet den Stift der nächstliegenden Standardfarbe.

Die Zeichnung behält ihre Tabellen und die Wahl jedes Blatts, wenn Sie als DWG (2000 bis 2018) oder DXF (R12 oder 2000) speichern, und öffnet sie damit wieder. Andere Programme sehen den Namen in der Seiteneinrichtung jedes Blatts (`office.ctb`), nicht die Tabelle selbst. Eine Zeichnung aus einem anderen Programm, deren Seiteneinrichtung eine Tabelle wie `monochrome.ctb` nennt, wird mit der eingebauten Tabelle dieses Namens geplottet; bei jedem anderen Namen sagt das Dialogfeld, dass die Zeichnung ihn nicht hat, und plottet die Zeichnungsfarben, bis Sie eine Tabelle wählen oder eine mit diesem Namen erstellen.

Um eine Tabelle in einer anderen Zeichnung zu verwenden, klicken Sie bei {{ui:Plotstiltabellen}} auf {{ui:Exportieren}} (es wird `office.plotstyle.json` gespeichert) und dann in der anderen Zeichnung auf {{ui:Importieren…}}. {{ui:Importieren…}} nimmt auch eine `.ctb`-Datei aus einem anderen Programm an: Sie wird aus der veröffentlichten Beschreibung des Formats gelesen und **noch nicht an einer echten Datei geprüft**. Die Farbe, die Rasterung und die Linienstärke jeder Farbe werden gelesen; Graustufen, Stiftnummern, Linientypen, Linienenden und -verbindungen sowie Füllstile werden nicht gelesen, und eine benannte Tabelle (`.stb`) wird abgelehnt. Vergleichen Sie den ersten Plot mit Ihren Erwartungen, und senden Sie uns die Datei, wenn sie falsch ist.

## Drucken

**Im Browser** klicken Sie auf {{ui:Drucken…}}. CadCraft erstellt die PDF-Datei und öffnet dafür das eigene Druckdialogfeld des Browsers. Wählen Sie dort „Tatsächliche Größe“ oder 100 % (nicht „Anpassen“), um den Maßstab zu behalten. Wenn der Browser nicht von der Seite drucken kann, wird stattdessen die PDF-Datei in einem neuen Tab geöffnet: Drucken Sie sie dort mit {{key:Mod+P}}.

Sie können auch auf {{ui:Zum Drucken öffnen}} klicken: Die PDF-Datei öffnet sich in einem neuen Browser-Tab, und Sie drucken sie von dort aus.

:::safari
Safari zeigt die PDF-Datei möglicherweise an und wartet, bis Sie **Datei** und dann **Drucken** verwenden.
:::

Wenn Ihr Browser den neuen Tab blockiert, lädt CadCraft stattdessen die PDF-Datei herunter und meldet dies im Verlauf. Erlauben Sie Pop-ups für die Seite, damit sie beim nächsten Mal in einem Tab geöffnet wird.

**In CadCraft Studio** listet das Dialogfeld {{ui:In PDF plotten}} die Drucker des Computers auf. Wählen Sie den {{ui:Drucker}}, das {{ui:Papier im Drucker}} und die Anzahl der {{ui:Kopien}}, und klicken Sie dann auf {{ui:Drucken…}}. {{ui:Wie beim Plot}} wählt das Papier des Druckers, das die Größe des Blatts hat (A3 für ein A3-Blatt); hat der Drucker keines, verwendet er sein eigenes Papier und passt das Blatt daran an. Unter Windows wird das Blatt als Bild mit 300 dpi gesendet, weil Windows eine PDF-Datei ohne PDF-Programm nicht drucken kann; unter Linux und macOS geht die PDF-Datei selbst an den Druckdienst des Systems. Nichts verlässt den Computer.

## Bild- und SVG-Dateien

{{ui:PNG herunterladen}} speichert das geplottete Blatt als Bild mit 300 dpi (nur gesenkt, wenn ein sehr großes Blatt größer würde, als der Browser erzeugen kann; der Verlauf sagt dies). {{ui:SVG herunterladen}} speichert es als skalierbare Zeichnung in Millimetern, mit den Linien und Texten des Plots. Beide stammen aus demselben Plot wie die PDF-Datei, mit derselben Plotstil, Linienstärke und demselben Bereich. In der Zeichnung platzierte Bilder sind nur in der PDF enthalten; der Verlauf zeigt an, wie viele ausgelassen wurden.

## Bilder

Bilder werden mit ihrer eigenen Auflösung unter den Linien gedruckt. {{ui:Bilder}} im Dialogfeld begrenzt sie auf 600, 300 oder 150 dpi für eine kleinere Datei. Linien, Text und Schraffuren bleiben immer scharf (Vektor), und Transparenz bleibt Transparenz. Siehe [Bilder in einer Zeichnung](topic:pictures).

## Gespeicherte Einstellungen

Das Dialogfeld merkt sich Ihr letztes Papier, die Ausrichtung, den Maßstab und die Linienstärke in diesem Browser. Die Plotstiltabelle wird bei jedem Blatt in der Zeichnung gespeichert; ein Blatt ohne Auswahl beginnt mit der Tabelle, die Sie zuletzt gewählt haben. Ein gewähltes Fenster bleibt erhalten, bis Sie die Seite neu laden; danach beginnt das Dialogfeld mit {{ui:Alles (Grenzen)}}.

## Häufige Fehler

- **Die PDF-Datei ist leer, oder die Schaltflächen sind grau.** Es gibt nichts zu plotten (ein leeres Modell), oder {{ui:Ein Fenster…}} ist gewählt, aber noch kein Fenster ist gewählt („Fenster zum Plotten wählen.“).
- **Der Text zeigt „?“ in der PDF.** Text auf Polnisch, Tschechisch, Kyrillisch, Griechisch und den anderen Schriften Europas wird als er selbst gedruckt: Die PDF-Datei enthält dann die benötigten Buchstaben (aus der Schrift Liberation Sans, die die Breiten von Helvetica hat), und der Text lässt sich weiterhin auswählen und durchsuchen. Chinesischer, japanischer und koreanischer Text wird ebenfalls als er selbst gedruckt: Wenn eine Zeichnung ihn enthält, lädt der Plot eine größere Schrift nach (etwa 10 MB, einmal), und die PDF-Datei enthält nur die verwendeten Zeichen; deshalb wird beim ersten Mal eine Verbindung benötigt (nicht bei einer Offline-Kopie, die zuvor gespeichert wurde). Hebräisch wird mit derselben eingebetteten Schrift wie lateinischer Text gedruckt, und arabischer, persischer und Urdu-Text lässt den Plot eine weitere Schrift nachladen (unter 1 MB, einmal); Zeilen von rechts nach links werden geordnet und ihre Buchstaben verbunden (siehe [Text](topic:text)). Seltene Ideogramme außerhalb dieser Schriften sowie Schriften, die komplexes Shaping benötigen, wie Hindi, werden als „?“ gedruckt, und der Verlauf zählt sie.
- **Alle Linien haben dieselbe Stärke.** Ihre Linienstärke ist der Standardwert: Geben Sie Layern oder Objekten eine {{ui:Linienstärke}} im rechten Bereich (siehe [Linienstärken und Linientypen](topic:units-papers-scales#line-weights-and-linetypes)), oder legen Sie Linienstärken pro Farbe in einer [Plotstiltabelle](topic:plot-pdf#plot-style-tables) fest.
- **„(nicht in dieser Zeichnung)“ neben dem Plotstil.** Die Zeichnung stammt aus einem anderen Programm und nennt eine Tabelle, die sie nicht enthält. Wählen Sie eine der Tabellen oder erstellen Sie eine mit diesem Namen.
- **Konstruktionslinien wurden gedruckt.** Stellen Sie ihren Layer so ein, dass er nicht geplottet wird: Klicken Sie im Bereich {{ui:Layer}} auf seine Drucker-Schaltfläche.
- **Der Ausdruck hat die falsche Größe.** Der Drucker hat ihn skaliert. Drucken Sie in tatsächlicher Größe.
- **{{key:Mod+P}} hat das Druckdialogfeld des Browsers geöffnet.** Der Cursor stand in einem Feld im rechten Bereich, oder ein anderes Dialogfeld war offen. Drücken Sie {{key:Enter}} oder {{key:Esc}}, um das Feld zu verlassen, und versuchen Sie es dann erneut, oder klicken Sie auf {{ui:Plotten}}.
- **{{key:Mod+P}} hat nichts bewirkt.** Ein Befehl läuft. Drücken Sie zuerst {{key:Esc}}.
