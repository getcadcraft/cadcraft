---
title: Blöcke erstellen und einfügen
summary: Eine gezeichnete Tür in einen Block verwandeln, sie an anderen Positionen, Maßstäben und Winkeln erneut platzieren und ungenutzte Blöcke aufräumen.
keywords: Block, bmake, einfügen, ddinsert, Symbol, purge, zerlegen, neu definieren, Basispunkt, Referenz, zählen, bcount, Liste, csv, Attribute, Datenextraktion
from: 125a129d
---

## Was Sie erstellen

Ein Türsymbol, das zu einem Block mit dem Namen `DOOR-900` gemacht und dann dreimal platziert wird: wie gezeichnet, um 90 Grad gedreht und gespiegelt.

Ein Block ist eine benannte Gruppe von Objekten. Sie zeichnen ihn einmal; an jeder Stelle, an der Sie ihn verwenden, entsteht eine **Blockreferenz**, die auf die eine Definition verweist. Der Abschnitt {{ui:Blöcke}} im linken Bereich listet die Blöcke der Zeichnung und zeigt, wie oft jeder verwendet wird.

## Tür zeichnen

1. Geben Sie `L` ein und drücken Sie {{key:Enter}}.
2. Geben Sie `0,0` ein und drücken Sie {{key:Enter}}.
3. Geben Sie `@0,900` ein, drücken Sie {{key:Enter}} und dann noch einmal {{key:Enter}}. Dies ist das Türblatt.
4. Geben Sie `A` ein und drücken Sie {{key:Enter}}.
5. Geben Sie `C` ein und drücken Sie {{key:Enter}}, um zuerst den Mittelpunkt anzugeben.
6. Geben Sie `0,0` ein und drücken Sie {{key:Enter}} für den Mittelpunkt.
7. Geben Sie `900,0` ein und drücken Sie {{key:Enter}} für den Startpunkt.
8. Geben Sie `0,900` ein und drücken Sie {{key:Enter}} für den Endpunkt. Dies ist der Öffnungsbogen.
9. Klicken Sie auf {{ui:Grenzen}}.

Bögen verlaufen gegen den Uhrzeigersinn vom Startpunkt zum Endpunkt.

## Block erstellen

1. Geben Sie `B` ein und drücken Sie {{key:Enter}}, oder klicken Sie in der Gruppe Blöcke auf {{ui:Erstellen}}.
2. Geben Sie bei `Blockname eingeben` `DOOR-900` ein und drücken Sie {{key:Enter}}.
3. Geben Sie bei `Einfügebasispunkt angeben` `0,0` ein und drücken Sie {{key:Enter}}. Dies ist das Scharnier: der Punkt, der an der Stelle liegt, an die Sie den Block setzen.
4. Ziehen Sie bei `Objekte wählen` ein Fenster um das Türblatt und den Bogen.
5. Drücken Sie {{key:Enter}}.

Der Verlauf meldet `Block „DOOR-900“ aus 2 Objekten erstellt, und sie wurden durch eine Referenz darauf ersetzt.` Das Panel {{ui:Blöcke}} listet DOOR-900 mit `1×` daneben: eine Referenz. Klicken Sie auf die Tür: Sie wird nun als ein Objekt ausgewählt, eine „Blockreferenz“.

:::tip
Sie können die Objekte zuerst wählen und dann `B` eingeben. CadCraft fragt trotzdem nach Name und Basispunkt und verwendet dann Ihre Auswahl.
:::

## Block einfügen

1. Geben Sie `I` ein und drücken Sie {{key:Enter}}, oder klicken Sie im Panel {{ui:Blöcke}} neben DOOR-900 auf {{ui:Einfügen}}.
2. Drücken Sie bei `Blockname oder [Datei (F)/Bibliothek (L)] <DOOR-900>` {{key:Enter}}. (Die Schaltfläche {{ui:Einfügen}} im Panel trägt den Namen für Sie ein.)
3. Die Tür folgt dem Fadenkreuz. Klicken Sie dorthin, wo das Scharnier hin soll.

Eine zweite Tür erscheint.

## Gedreht oder skaliert einfügen

1. Geben Sie `I` ein und drücken Sie {{key:Enter}}, dann noch einmal {{key:Enter}}, um den Namen zu übernehmen.
2. Geben Sie bei `Einfügepunkt angeben [Skalieren/Drehen (R)]` `R` ein und drücken Sie {{key:Enter}}.
3. Geben Sie `90` ein und drücken Sie {{key:Enter}}. Die Vorschau dreht sich.
4. Klicken Sie, um es zu platzieren.

Geben Sie stattdessen `S` ein, um einen Skalierungsfaktor festzulegen; er gilt für beide Richtungen. Maßstab und Drehung werden für das nächste Einfügen gespeichert. Um eine Tür zu spiegeln, fügen Sie sie ein und verwenden Sie dann {{cmd:MIRROR}} auf der Referenz.

## Platzierten Block ändern

Wählen Sie eine Blockreferenz aus. Im rechten Bereich können Sie ihre {{ui:X}}, {{ui:Y}}, {{ui:Maßstab X}}, {{ui:Maßstab Y}} und {{ui:Drehung}} ändern. Ein negatives {{ui:Maßstab X}} spiegelt sie.

## Block neu definieren

Um alle Türen auf einmal zu ändern, erstellen Sie einen Block mit demselben Namen:

1. Zeichnen Sie die neue Version der Tür.
2. Geben Sie `B` ein, drücken Sie {{key:Enter}} und geben Sie `DOOR-900` ein.
3. Bei `Block „DOOR-900“ ist bereits vorhanden. Neu definieren?` geben Sie `Y` ein und drücken Sie {{key:Enter}}.
4. Geben Sie den Basispunkt an und wählen Sie die neuen Objekte aus, wie zuvor.

Jede Referenz auf DOOR-900 zeigt nun die neue Version.

Oder bearbeiten Sie den Block selbst: {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Block bearbeiten}} ({{cmd:BEDIT}}) öffnet ihn allein, und {{ui:Block speichern}} schreibt ihn zurück. Siehe [Blockattribute](topic:attributes#change-a-block-the-block-editor).

## Blöcke zählen und eine Liste exportieren

Geben Sie {{cmd:COUNT}} ein (oder {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Blöcke zählen}}), dann:

- klicken Sie auf eine Tür: Jede Tür in diesem Bereich wird ausgewählt, und der Verlauf nennt, wie viele es hier und in der ganzen Zeichnung gibt;
- oder drücken Sie {{key:Enter}}: Der Verlauf listet jeden Block mit seiner Anzahl, die größte zuerst;
- oder geben Sie `E` ein, dann `C` für eine CSV-Datei mit den Anzahlen (im Modell, auf Blättern, insgesamt) oder `A` für eine Zeile pro Referenz mit Layer, Position, Drehung und jedem Attributwert: eine Liste, die Sie in einer Tabellenkalkulation öffnen können.

Unbenannte Blöcke (Bemaßungen, Tabellen) und Referenzen innerhalb anderer Blöcke werden nicht gezählt. Zellen, die wie eine Formel beginnen (`=`, `+`, `-`, `@`), erhalten ein vorangestelltes `'`, damit eine Tabellenkalkulation sie als Text anzeigt.

## Zerlegen und bereinigen

- {{cmd:EXPLODE}} (`X`) macht eine ausgewählte Blockreferenz wieder zu einzelnen Objekten. Die Definition bleibt.
- {{cmd:PURGE}} (`PU`) entfernt Blockdefinitionen, die nichts mehr verwenden. Der Verlauf meldet, wie viele entfernt wurden.

## Blocknamen

Ein Name darf bis zu 255 Zeichen lang sein und Leerzeichen enthalten, darf aber nicht mit einem Sternchen beginnen und nicht die Zeichen `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` oder einen Backtick enthalten. Beim Speichern als DXF R12 werden Namen in Großbuchstaben geschrieben, andere Zeichen als Buchstaben, Ziffern, `$`, `_` und `-` werden zu `_`, und Namen werden auf 31 Zeichen gekürzt; der Verlauf meldet, wie viele geändert wurden. Kurze Namen aus Großbuchstaben, Ziffern und Bindestrichen wie `DOOR-900` bleiben unverändert. Eine gespeicherte DWG behält Namen so, wie Sie sie eingegeben haben, mit Groß- und Kleinschreibung; nur Zeichen, die DWG nicht erlaubt, ändern sich (ein `|` wird zu `$0$`, andere werden zu `_`).

## Einen Block oder Objekte in eine eigene Datei schreiben

Geben Sie `W` ({{cmd:WBLOCK}}) ein und wählen Sie **Objekte**, **Block** oder **Gesamte Zeichnung**. Das Ergebnis ist eine neue DWG oder DXF, die nur die Layer, Stile und Blöcke enthält, die sie verwendet, mit Ihrem Basispunkt als Ursprung. Bei Objekten können Sie sie behalten, in einen Block umwandeln oder aus dieser Zeichnung löschen.

## Häufige Fehler

- **Der Block landete weit vom Fadenkreuz entfernt.** Der Basispunkt lag nicht auf den Objekten. Erstellen Sie den Block erneut, mit dem Basispunkt auf einer Ecke oder einem Scharnier.
- **„Keine Objekte gewählt; nichts erstellt.“** Sie haben {{key:Enter}} gedrückt, bevor Sie etwas ausgewählt haben.
- **„Diese Zeichnung hat noch keine Blöcke: F fügt einen aus einer Datei ein, L aus der Bibliothek (oder erstellen Sie einen mit BLOCK).“** Geben Sie `F` ein, um einen Block aus einer anderen Zeichnung zu holen, oder `L` für die Bibliothek. Siehe [Aus Datei oder Bibliothek einfügen](topic:insert-from-file-and-library).
- **„Ein Ansichtsfenster kann nicht in einen Block.“** Lassen Sie die Rahmen der Ansichtsfenster aus der Auswahl heraus.
