---
title: Text und Beschriftungen hinzufügen
summary: Raumbeschriftungen mit einzeiligem Text setzen, umbrechende Notizen mit direkt im Plan eingegebenem Absatztext schreiben und Text anschließend bearbeiten.
keywords: Text, dtext, mtext, mleader, multileader, Führungslinie, revcloud, Revisionswolke, Wolke, suchen, ersetzen, Suchen und Ersetzen, Absatz, Umbruch, Zeilenabstand, Beschriftung, Notiz, Anmerkung, Höhe, Ausrichtung, textmask, Hintergrundmaske, Maske, Abdeckung, Drehung, Text bearbeiten, ddedit, textedit, Schrift
from: 4b76be99
---

## Was Sie erstellen

Zwei Raumbeschriftungen, zentriert in ihren Räumen, eine Notiz, die auf ihre Breite umbricht, und anschließend eine Korrektur an einer der Beschriftungen.

## Texthöhe und Zeichnungsmaßstab

Die Texthöhe wird in Zeichnungseinheiten angegeben. Bei einer Zeichnung in Millimetern, die im Maßstab 1:50 geplottet wird, muss Text, der auf dem Papier 2.5 mm hoch ist, im Modell 2.5 × 50 = 125 Einheiten hoch sein. Auf einer Blatt-Registerkarte zeichnen Sie in Papiereinheiten; dort bedeuten 2.5 eine Höhe von 2.5 mm auf dem Papier.

## Eine zentrierte Beschriftung setzen

1. Geben Sie `DT` ein und drücken Sie {{key:Enter}} (oder klicken Sie in der Symbolleiste auf {{ui:Text}}). Die Eingabeaufforderung lautet `Startpunkt des Textes angeben [Ausrichtung (J)]:`.
2. Geben Sie `J` ein und drücken Sie {{key:Enter}}.
3. Geben Sie bei `Option eingeben [Links/Zentrum/Rechts/Mitte/TL/MC] <L>:` `MC` ein und drücken Sie {{key:Enter}}.
4. Klicken Sie bei `Einfügepunkt des Textes angeben` in die Mitte eines Raums.
5. Geben Sie bei `Höhe angeben` `250` ein und drücken Sie {{key:Enter}}.
6. Drücken Sie bei `Drehwinkel des Textes angeben <0>` {{key:Enter}}.
7. Geben Sie bei `Text eingeben` `KÜCHE` ein und drücken Sie {{key:Enter}}.

Die Beschriftung erscheint, zentriert auf dem angeklickten Punkt.

8. Drücken Sie bei der leeren Eingabeaufforderung `Text eingeben` {{key:Enter}}, um den Befehl zu beenden.

## Eine umbrechende Notiz schreiben

Absatztext ({{cmd:MTEXT}}) bricht auf eine Breite um und wird direkt in die Zeichnung eingegeben.

1. Geben Sie `T` ein und drücken Sie {{key:Enter}}, oder klicken Sie in der Symbolleiste auf {{ui:Absatz}}.
2. Klicken Sie bei `Ersten Eckpunkt angeben` dort, wo die linke obere Ecke der Notiz liegen soll.
3. Um zuerst die Höhe zu ändern, geben Sie `H` ein, drücken Sie {{key:Enter}}, geben Sie `250` ein und drücken Sie {{key:Enter}}.
4. Klicken Sie bei `Gegenüberliegenden Eckpunkt angeben [Höhe/Ausrichtung (J)/Zeilenabstand (L)/Drehung (R)/Breite (W)]` rechts von der ersten Ecke. Die Breite zwischen den Ecken bestimmt, auf welche Breite der Text umbricht; wie weit Sie nach unten klicken, begrenzt sie nicht.
5. Es öffnet sich ein Feld über der Zeichnung, mit dem Cursor darin. Geben Sie `ALLE MASSE SIND IN MILLIMETER, SOFERN NICHT ANDERS VERMERKT` ein. Die Wörter brechen beim Schreiben an der Breite um.
6. Drücken Sie {{key:Enter}}, um einen neuen Absatz zu beginnen, und geben Sie `AUF DER BAUSTELLE PRÜFEN` ein.
7. Drücken Sie {{key:Mod+Enter}}, klicken Sie auf {{ui:OK}} oder klicken Sie irgendwo außerhalb des Feldes. Die Notiz ist ein einziges Objekt.

Die Leiste über dem Feld ändert beim Schreiben {{ui:Höhe}}, {{ui:Zeilenabstand}} (1 ist normal, 1.5 ist das Eineinhalbfache), {{ui:Breite}} (0 = kein Umbruch) und {{ui:Ausrichtung}}. {{key:Esc}} oder {{ui:Abbrechen}} schließt das Feld, ohne etwas hinzuzufügen.

Die Optionen am zweiten Eckpunkt: `H` Höhe, `J` Ausrichtung (`TL` oben links … `BR` unten rechts: die Ecke oder Mitte des Feldes, die stehen bleibt), `L` Zeilenabstand, `R` Drehung, `W` eine eingegebene Breite statt des zweiten Eckpunkts.

:::note
Solange das Feld geöffnet ist, fügt {{key:Space}} ein Leerzeichen ein und {{key:Enter}} beginnt einen neuen Absatz. Eine gespeicherte DWG behält Absatztext als MTEXT; eine DXF R12 kennt keinen Absatztext, daher wird jede Zeile als eigener Text gespeichert.
:::

### Stattdessen mehrere einzelne Zeilen

{{cmd:TEXT}} (`DT`) fragt jeweils nach einer Zeile: Jedes {{key:Enter}} beginnt die nächste Zeile, 1.667-mal die Texthöhe tiefer, und jede Zeile ist ein eigenes Objekt. Drücken Sie {{key:Enter}} in einer leeren Zeile, um den Vorgang zu beenden.

## Ausrichtungsoptionen

| Option | Der angeklickte Punkt ist |
|---|---|
| Links (Standard) | Das linke Ende der Grundlinie |
| Zentrum | Die Mitte der Grundlinie |
| Rechts | Das rechte Ende der Grundlinie |
| Mitte, MC | Die Mitte des Textes, horizontal und vertikal |
| TL | Die obere linke Ecke |

## Text bearbeiten

1. Doppelklicken Sie auf ein Textobjekt. Es öffnet sich im selben Feld wie neuer Absatztext, mit dem Cursor am Ende.
2. Ändern Sie die Wörter.
3. Drücken Sie {{key:Mod+Enter}} oder klicken Sie außerhalb des Feldes. Der Text in der Zeichnung ändert sich; {{key:Esc}} lässt ihn unverändert.

{{cmd:TEXTEDIT}} (`ED`) macht dasselbe: Wählen Sie nacheinander einen Text nach dem anderen aus und drücken Sie {{key:Enter}}, wenn Sie fertig sind.

Um einen Text stattdessen im rechten Bereich zu ändern, wählen Sie ihn aus: {{ui:Text}}, {{ui:Höhe}}, {{ui:Umbruchbreite}} (0 = kein Umbruch), {{ui:Zeilenabstand}}, {{ui:Drehung}}, die X- und Y-Position und {{ui:Ausrichtung}}. Die Liste {{ui:Ausrichtung}} bietet außerdem Unten links an, das Text aus anderen Programmen manchmal verwendet.

## Formatierung in Absatztext aus anderen Programmen

Absatztext in einer DWG oder DXF kann Codes enthalten: Farben je Wort, fett und kursiv, Unterstreichung, Überstreichung und Durchstreichung, gestapelte Brüche wie 1/2 und eine andere Höhe für ein Wort. CadCraft behält diese Codes, zeichnet sie (auf dem Bildschirm und in einer geplotteten PDF) und speichert sie unverändert zurück.

Wenn Sie einen solchen Text bearbeiten (Doppelklick, {{cmd:TEXTEDIT}}, das Feld Text im rechten Bereich oder {{cmd:FIND}} mit Ersetzen), bearbeiten Sie seine reinen Wörter. Ein eingegebenes Wort kommt in den benachbarten Textabschnitt und übernimmt dessen Farbe und Stil; die übrigen Codes bleiben an ihrer Stelle. Wenn Sie die Zahlen eines gestapelten Bruchs neu eingeben, wird dieser Bruch zu einfachem Text. Wenn Sie den gesamten Text über das Feld Text setzen, bleiben die Codes nur dort erhalten, wo erkennbar ist, welche Wörter gleich geblieben sind.

Schriftnamen (`\F`) bleiben erhalten und werden gespeichert, aber alles wird in der einen Helvetica-ähnlichen Schrift gezeichnet. Eine Symbolleiste zur Eingabe von Codes gibt es noch nicht.

## Auf etwas zeigen: Mehrfachführungslinien

{{ui:Führungslinie}} in der Gruppe {{ui:Beschriften}} ({{cmd:MLEADER}}, `MLD`) zeichnet einen Pfeil, eine Führungslinie, eine kurze Landelinie und eine Notiz als ein einziges Objekt.

1. Klicken Sie auf {{ui:Führungslinie}}. Klicken Sie bei `Pfeilspitzenposition der Führungslinie angeben` auf das, worum es in der Notiz geht.
2. Klicken Sie bei `Position der Landelinie der Führungslinie angeben`, wo die Notiz stehen soll. Die Landelinie richtet sich zu der Seite, auf die Sie geklickt haben.
3. Geben Sie die Notiz in das sich öffnende Feld ein und drücken Sie {{key:Mod+Enter}}.

`A` und `L` bei der ersten Frage legen die Pfeilspitzengröße und die Länge der Landelinie fest; die Texthöhe kommt aus der {{ui:Texthöhe}} für neue Bemaßungen, multipliziert mit dem {{ui:Gesamtmaßstab}}. Doppelklicken Sie auf eine Mehrfachführungslinie, um ihre Wörter zu ändern. Griffe verschieben die Pfeilspitze und die Landelinie; die Notiz folgt der Landelinie. In {{ui:Eigenschaften}}: {{ui:Text}}, {{ui:Höhe}}, {{ui:Umbruchbreite}}, {{ui:Pfeilspitzengröße}} und {{ui:Landelinienabstand}}.

:::note
Mehrfachführungslinien werden in DWG als echte Mehrfachführungslinien gespeichert. DXF kennt in R12 oder 2000 keine Mehrfachführungslinien; dort werden sie als die Linien, die Pfeilspitze und der Text gespeichert, die sie zeichnen.
:::

## Änderungen mit einer Revisionswolke markieren

{{ui:Beschriften}} › {{ui:Mehr}} › {{ui:Revisionswolke}} ({{cmd:REVCLOUD}}, `RC`) zeichnet eine Wolke aus Bögen um die Änderung. Der Verlauf zeigt die Bogenlänge und den Typ, den die Wolke verwendet.

- **Rechteckig** (beim ersten Mal): Klicken Sie zwei Ecken an.
- `P` **Polygonal**: Klicken Sie die Ecken an; {{key:Enter}} schließt die Wolke.
- `F` **Freihand**: Klicken Sie, wo sie beginnt, und bewegen Sie den Zeiger um den Bereich, ohne zu klicken; bei jeder Bogenlänge wird ein Bogen ergänzt. Klicken Sie oder drücken Sie {{key:Enter}}, um sie zu schließen.
- `O` **Objekt**: Wählen Sie eine geschlossene Polylinie, einen Kreis oder eine Ellipse (oder eine Linie, einen Bogen oder eine offene Polylinie); sie wird zur Wolke. `Richtung umkehren?` `Y` kehrt die Bögen nach innen.
- `A` **Bogenlänge**: die Länge jedes Bogens. Wählen Sie eine, die zum Plotmaßstab passt.

Die Wolke ist eine geschlossene Polylinie aus Bögen und wird daher in allen Formaten gespeichert.

## Wörter suchen und ersetzen

{{ui:Bearbeiten}} › {{ui:Mehr}} › {{ui:Suchen und Ersetzen}} ({{cmd:FIND}}) durchsucht Text, die Werte von Blockattributen und Bemaßungstext auf der geöffneten Registerkarte (oder nur in den ausgewählten Objekten).

1. Geben Sie die Wörter in {{ui:Suchen}} ein. Die Liste zeigt jede Fundstelle und die Anzahl.
2. Wählen Sie bei Bedarf {{ui:Groß-/Kleinschreibung beachten}}, {{ui:Nur ganze Wörter}} oder {{ui:Platzhalter verwenden (* und ?)}} und deaktivieren Sie, was nicht durchsucht werden soll.
3. Klicken Sie auf {{ui:Gefundene wählen}}, um diese Objekte auszuwählen, oder geben Sie die neuen Wörter in {{ui:Ersetzen durch}} ein (die Liste zeigt, was aus jedem wird) und klicken Sie auf {{ui:Alle ersetzen}}. Ein {{key:Mod+Z}} macht jede Ersetzung rückgängig.

Der gemessene Wert einer Bemaßung ist kein Text und wird daher nie ersetzt: In `<> TYP.` kann nur `TYP.` ersetzt werden.

## Linien hinter einer Beschriftung ausblenden

1. Wählen Sie die Texte aus, geben Sie {{cmd:TEXTMASK}} ein und drücken Sie {{key:Enter}}.
2. `B` malt den Zeichnungshintergrund hinter sie; `C` fragt nach einer Farbnummer. `O` entfernt die Maske.
3. `Randabstandsfaktor`: {{key:Enter}} behält 1.5 bei, eine halbe Texthöhe rund um den Text.

Die Maske verdeckt Linien unter dem Text, auf dem Bildschirm und beim Plotten. DWG 2004 oder neuer und DXF 2000 behalten sie; das DWG-Format 2000 und DXF R12 können sie nicht, und beim Speichern wird darauf hingewiesen.

## Schrift

Aller Text wird in einer Helvetica-ähnlichen Schrift gezeichnet, auf dem Bildschirm und in PDFs. Text aus geöffneten Zeichnungen behält seine Wörter, Höhe und Position, aber nicht seine ursprüngliche Schrift (der Name einer Schrift innerhalb von Absatztext bleibt in der Datei erhalten, siehe oben).

In geplotteten PDFs wird Text in jeder europäischen Schrift, in Kyrillisch oder Griechisch so gedruckt, wie er ist (die PDF enthält die nötigen Buchstaben, und Sie können den Text weiterhin auswählen und durchsuchen). Chinesischer, japanischer und koreanischer Text wird ebenfalls so gedruckt (beim ersten Bedarf lädt der Plot eine größere Schrift nach). Arabischer, persischer, Urdu- und hebräischer Text wird ebenfalls so gedruckt (siehe nächster Abschnitt). Zeichen, für die keine Schrift einen Buchstaben hat, werden als „?“ gedruckt, und der Verlauf nennt, wie viele es waren.

## Rechts-nach-links-Text: Arabisch, Persisch, Urdu, Hebräisch

Geben Sie den Text so ein, wie Sie es überall tun: {{cmd:TEXT}} und {{cmd:MTEXT}} zeichnen jede Zeile in Leserichtung. Eine Zeile, deren erster Buchstabe arabisch oder hebräisch ist, wird von rechts nach links gelesen; Zahlen und lateinische Wörter darin behalten ihre eigene Reihenfolge von links nach rechts, und arabische Buchstaben werden verbunden. Eine Zeile, die mit einem lateinischen Buchstaben beginnt, bleibt von links nach rechts, wobei die Wörter von rechts nach links an ihrer Stelle darin stehen. Jeder Absatz eines mehrzeiligen Textes hat seine eigene Richtung, und ein umbrochener Absatz behält sie in jeder Zeile bei.

Der Text wird so gespeichert, wie Sie ihn eingegeben haben; DWG- und DXF-Dateien tauschen ihn daher unverändert mit anderen Programmen aus. Der Einfügepunkt und die Ausrichtung ({{ui:Links}}, {{ui:Zentrum}}, {{ui:Rechts}}) bedeuten dieselbe Seite wie bei jedem anderen Text; eine Rechts-nach-links-Notiz, die von ihrem rechten Ende hängen soll, braucht {{ui:Rechts}}.

Auf dem Bildschirm stammen die Buchstaben aus den Schriften Ihres Systems. In einer geplotteten PDF verwendet Hebräisch dieselbe eingebettete Schrift wie lateinischer Text; arabischer Text lässt den Plot eine weitere Schrift nachladen (unter 1 MB, einmalig), und die gesamte PDF wird dann in dieser Schrift gedruckt. Diese Schrift hat keine eigene Form für drei Urdu-Zeichen (heh goal, yeh barree und den Urdu-Vollpunkt): sie werden in der Form des nächstliegenden arabischen Buchstabens gedruckt. Eine Zeichnung mit arabischem und chinesischem, japanischem oder koreanischem Text druckt eines der beiden als „?“, weil ein Plot nur eine Schrift führt. Text in einer geladenen SHX-Schrift wird geordnet und verbunden, wenn die Schrift die Buchstaben an ihren Unicode-Stellen enthält; bei alten Schriften, deren Buchstaben bereits geformt sind, verwenden Sie wie bisher {{ui:Umkehren}} in {{cmd:SHXFONTS}}.

## Häufige Fehler

- **Der Text ist zu klein zum Sehen.** Die Höhe wird in Zeichnungseinheiten angegeben. Verwenden Sie bei einer großen Zeichnung eine große Höhe (siehe oben) oder zoomen Sie hinein.
- **Der Befehl endete nach einer Zeile.** Sie haben in {{cmd:TEXT}} eine leere Zeile mit {{key:Enter}} bestätigt. Starten Sie den Befehl neu oder verwenden Sie Absatztext (`T`), bei dem {{key:Enter}} einen neuen Absatz beginnt.
- **`T` öffnete ein Feld, statt nach einer Zeile zu fragen.** Wie in AutoCAD ist `T` Absatztext ({{cmd:MTEXT}}); einzeiliger Text ist `DT`.
- **Der Text bricht in AutoCAD an einer anderen Stelle um.** CadCraft bricht mit Helvetica-Breiten um; eine andere Schrift passt ein Wort mehr oder weniger in eine Zeile.
- **Text in einer gespiegelten Kopie.** Er wird gespiegelt platziert, bleibt aber von links nach rechts lesbar.
