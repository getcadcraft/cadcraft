---
title: Text in Ihren eigenen SHX-Schriften zeichnen
summary: Geben Sie CadCraft einen Ordner mit SHX-Schriften (oder wählen Sie die Dateien), und die Textstile, die diese Schriften nennen, werden darin gezeichnet, auf dem Bildschirm sowie beim Plotten und in der PDF, mit der Höhe, dem Breitenfaktor und der Schräge des Stils.
keywords: shx, Schriften, Schrift, Formschrift, Big Font, bigfont, unifont, Legacy, Persisch, Farsi, Arabisch, Textstil, fehlende Schrift, ersetzte Schrift, SHXFONTS, Ordner, umkehren, visuelle Reihenfolge, simplex, isocp
from: 14b0a4ab
---

Zeichnungen aus anderen Programmen nennen in ihren Textstilen oft **SHX-Schriften**, und eine DWG enthält sie nicht. Ohne die Schrift zeichnet CadCraft diesen Text in seiner eigenen Schrift. Das ist für gewöhnlichen lateinischen Text in Ordnung, aber nicht für alte Schriften, die einfache Zeichencodes auf andere Buchstabenformen abbilden, etwa ältere persische Anmerkungsschriften.

Geben Sie CadCraft die Schriften, dann zeichnet es den Text darin.

## Ihre Schriften laden

Geben Sie {{cmd:SHXFONTS}} (`SHX`) ein und wählen Sie:

- {{ui:Ordner}} (CadCraft Studio): Wählen Sie einen Ordner. Jede `.shx`-Datei darin wird sofort gelesen und jedes Mal erneut, wenn CadCraft startet.
- {{ui:Dateien}} (im Browser): Wählen Sie eine oder mehrere `.shx`-Dateien. Sie werden in diesem Browser aufbewahrt und nie hochgeladen.
- {{ui:Liste}}: die geladenen Schriften und die, die die geöffnete Zeichnung nennt, Sie aber nicht geladen haben.
- {{ui:Entfernen (R)}} und {{ui:Leeren}}: eine Schrift vergessen oder alle.

CadCraft kann keine Schriften von Drittanbietern mitliefern, daher liefert es nie welche aus: Sie kommen von Ihnen. Eine Zeichnung nennt nur ihre Schriften und behält keine Kopie davon.

## Was passiert

Der Schriftname eines Textstils wird einer geladenen Schrift über ihren Namen zugeordnet, ohne Beachtung von Groß- und Kleinschreibung, Ordner und `.shx` (`SIMPLEX.SHX` findet `simplex`). Ein Text in einem solchen Stil wird als Linien gezeichnet, auf dem Bildschirm, beim Plotten und in der PDF, an der Stelle des Textes, mit seiner Höhe, Drehung, seinem Breitenfaktor und seinem Schrägwinkel. Seine Breite ist die der Schrift selbst, daher passen {{ui:Zentrum}}- und {{ui:Rechts}}-Ausrichtung, Umbruch und Auswahl zu dem, was Sie sehen. Ein Stil, dessen Schrift nicht geladen ist, behält die eingebaute Schrift. Öffnen Sie eine Zeichnung, die Schriften nennt, die Sie nicht geladen haben, sagt die Befehlszeile es.

Der Standardstil zählt auch: Eine Zeichnung, deren Standardstil eine eigene Schrift nennt, behält sie.

## Schriften bereits in visueller Reihenfolge

Viele alte persische und arabische SHX-Schriften enthalten Buchstaben, die schon für den Bildschirm geformt und von links nach rechts gezeichnet sind. Daher kommt ein Text, der in logischer Reihenfolge getippt wurde, verkehrt heraus. Geben Sie {{cmd:SHXFONTS}} ein, wählen Sie {{ui:Umkehren}} und nennen Sie die Schrift: Ihr Text wird dann mit dem letzten Buchstaben zuerst angeordnet. Führen Sie es erneut aus, um es rückgängig zu machen. Der Schalter gehört zur Schrift, wird in diesem Browser gespeichert und nicht in der Zeichnung.

## Was noch nicht abgedeckt ist

- Text mit Formatierungscodes im Text (Farben, Stapel in einem MTEXT) bleibt in der eingebauten Schrift.
- Große Schriften (Big Fonts, die Doppelbyte-Art) springen für Codes ein, die die Hauptschrift nicht hat. Ein Text in einer ostasiatischen Codepage, den CadCraft schon in Unicode umgewandelt hat, wird aber nicht zurück auf die Doppelbyte-Codes der Schrift abgebildet.
- Der Schriftleser folgt der veröffentlichten Beschreibung des Formats und wurde mit Schriften getestet, die für CadCraft gemacht wurden. Zeichnet eine Ihrer Schriften falsch, schicken Sie uns die Schrift und die Zeichnung.
