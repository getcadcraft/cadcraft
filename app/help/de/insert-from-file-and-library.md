---
title: Aus Datei oder Bibliothek einfügen
summary: Einen Block oder eine ganze Zeichnung aus einer anderen DWG oder DXF einfügen und Elemente aus der Bibliothek, einer Datei oder einer anderen Bibliothek platzieren, mit ihren Quellenangaben und Aktualisierungen.
keywords: einfügen, insert, Datei, file, Bibliothek, library, librarycraft, Element, Ausrüstung, Block aus anderer Zeichnung, wblock, design center, Quellenangabe, Urheber, Lizenz, Aktualisierung, Feed, item.json
from: 316188d2
---

## Einen Block aus einer anderen Zeichnung einfügen

1. Geben Sie `I` ein und drücken Sie {{key:Enter}}, oder klicken Sie auf {{ui:Einfügen}} in der Gruppe Blöcke.
2. Geben Sie bei `Blockname eingeben oder [Datei (F)/Bibliothek (L)]` `F` ein und drücken Sie {{key:Enter}}.
3. Wählen Sie die DWG- oder DXF-Datei auf diesem Computer. Sie wird hier gelesen; sie wird nicht geöffnet, und nichts wird hochgeladen.
4. Wählen Sie im Dialogfeld {{ui:Einfügen aus}} einen Block aus der Liste (geben Sie in {{ui:Blöcke filtern}} ein, um ihn zu finden), oder behalten Sie {{ui:Die ganze Zeichnung}}. Klicken Sie auf {{ui:Einfügen}}.
5. Klicken Sie, wohin er soll, und füllen Sie alle Attribute aus, nach denen er fragt.

Die ganze Zeichnung wird als ein Block eingefügt, benannt nach der Datei. Die Blöcke innerhalb des gewählten Blocks kommen ebenfalls mit. Die Layer, die sie verwenden, werden dieser Zeichnung hinzugefügt.

Hat die andere Zeichnung andere Einheiten (etwa Zoll und Millimeter), skaliert CadCraft die Referenz passend dazu und meldet es im Verlauf.

### Wenn ein Name schon verwendet wird

Hat diese Zeichnung bereits einen Block mit demselben Namen, fragt CadCraft nach:

- {{ui:Vorhandene behalten}} verwendet den Block dieser Zeichnung mit diesem Namen.
- {{ui:Umbenennen}} fügt den neuen als `Name (2)` ein.

Das gesamte Einfügen ist ein Schritt: {{key:Mod+Z}} entfernt die Referenz und die kopierten Definitionen wieder.

## Die Bibliothek öffnen

Klicken Sie auf {{ui:Bibliothek…}} im Bereich {{ui:Blöcke}} oder auf {{ui:Bibliothek}} in der Gruppe Blöcke, oder geben Sie `LIB` ein. Bei der Eingabeaufforderung `INSERT` öffnet `L` sie ebenfalls.

Die Bibliothek hat vier Quellen, als Reiter:

- {{ui:Bibliothek}}: die CadCraft-Bibliothek. Suchen Sie nach Name, Hersteller oder Modell und filtern Sie nach Kategorie.
- {{ui:Dateien…}}: eine Elementdatei (`item.json`) aus einer beliebigen Bibliothek oder eine Zeichnung, Tabelle oder ein 3D-Modell, aus denen Sie Elemente machen: eine DWG oder DXF (jeder Block wird ein Element), eine CSV mit Spalten für Name und Größe oder ein glTF- oder OBJ-Modell. Nichts wird hochgeladen.
- {{ui:Standard}}: Stahlprofile (als Schnitte, Ansichten oder 3D-Stäbe) und Normteile wie Schrauben, Muttern und Lager, hier aus veröffentlichten Tabellen erstellt. Siehe [Stahlprofile und Normteile platzieren](topic:steel-and-standard-parts).
- {{ui:Andere Feeds}}: andere Bibliotheken, die auf dieselbe Weise antworten wie die Bibliothek. Tragen Sie ihre Adresse einmal ein; dieser Browser merkt sie sich.

Jede Karte zeigt eine Vorschau, den Namen, den Hersteller und das Modell, die Lizenz und die Version. Ein zurückgezogenes Element ist mit {{ui:Zurückgezogen}} und dem Grund markiert; CadCraft fragt nach, bevor Sie es platzieren.

## Ein Element platzieren

1. Klicken Sie auf einer Karte auf {{ui:Platzieren}}.
2. Klicken Sie, wohin das Element soll. Geben Sie zuerst `R` ein, um es zu drehen, oder `S`, um es zu skalieren.
3. Bei `Elementnummer eingeben (CC-ITEM)` drücken Sie {{key:Enter}} für die nächste freie Nummer oder geben Ihre eigene ein.

Das Element wird ein Block namens `LIB_<name>_v<version>`, gezeichnet in den Einheiten dieser Zeichnung. Hat die Zeichnung keine Einheiten, wird das Element in Millimetern eingefügt, und der Verlauf meldet es; stellen Sie vorher {{ui:Einheiten}} im rechten Bereich ein.

Die Daten reisen als unsichtbare Attribute mit: ID und Version des Elements, Lizenz und Quellenangabe, Hersteller, Modell, Kategorie und Maße. Siehe [Blockattribute](topic:attributes).

## Elemente in Ihrer Sprache

Ein Element kann seinen Namen und seine Beschreibung in anderen Sprachen mitführen. Hat es sie in der Sprache, auf die CadCraft eingestellt ist (Einstellungen › Allgemein › Sprache), verwenden die Karte und der Elementname des platzierten Blocks diese. Der Block selbst behält einen Namen aus dem eigenen Namen des Elements, sodass eine Zeichnung pro Element einen Block hat, egal welche Sprache es platziert hat.

## Auf Aktualisierungen prüfen

1. Öffnen Sie die Bibliothek.
2. Klicken Sie auf {{ui:Nach Updates suchen}}.

Jedes Bibliothekselement in der Zeichnung wird mit seinen Elementnummern aufgeführt und mit der Angabe, ob es aktuell ist, eine neuere Version hat (und was sich geändert hat) oder zurückgezogen wurde. Klicken Sie in einer Zeile auf {{ui:Aktualisieren}} oder auf {{ui:Alle aktualisieren}}. Jede Referenz wechselt zum Block der neuen Version und behält ihre Elementnummer, Menge, Position, Winkel und ihren Layer. {{key:Mod+Z}} macht eine Aktualisierung rückgängig.

## Verwendete Quellen angeben

Klicken Sie auf {{ui:Bibliothekshinweise}}. Jedes Element wird mit seiner Quellenangabe und Lizenz aufgeführt.

- {{ui:Quellenangabe kopieren}} kopiert die Zeile eines Elements; {{ui:Alle kopieren}} kopiert jede Zeile.
- {{ui:CSV herunterladen}} speichert die Liste mit Elementnummern, Herstellern, Modellen, Lizenzen und Quellenangaben. Sie öffnet sich in jeder Tabellenkalkulation.

Lizenzen wie CC BY verlangen, dass Sie den Urheber dort nennen, wo Sie das Werk verwenden. Setzen Sie die Zeilen auf die Zeichnung, in die Leistungsbeschreibung oder in die Projektnotizen.

## Symbole und Assets

Die Bibliothek hat drei Arten von Elementen: Symbole (Zeichenkonventionen, 2D), Typen (woraus ein Element besteht) und Assets (physische Objekte). Im Reiter {{ui:Bibliothek}} zeigt die Liste {{ui:Art des Elements}} Symbole und Assets zusammen, nur Symbole oder nur Assets. Typen sind das, woraus ein BimCraft-Projekt aufgebaut ist; daher listet CadCraft sie nicht.

## Bei der Bibliothek anmelden

Klicken Sie auf {{ui:An der Bibliothek anmelden}}. Ein kleines Fenster öffnet sich auf der Website. Sobald Sie dort angemeldet sind, kann CadCraft die Elemente Ihres Teams anzeigen und erfassen, was Sie platzieren, damit Sie erfahren, wenn sich ein verwendetes Element ändert. Die Anmeldung gilt für diesen Browser-Tab. Widerrufen Sie sie jederzeit auf der Sicherheitsseite Ihres Kontos.

## Häufige Fehler

- **„Das Erstellen von Elementen aus IFC-Typen erfolgt in BimCraft.“** IFC- und Familiendateien werden in der App BimCraft gelesen. Erstellen Sie das Element dort oder in der Bibliothek und verwenden Sie dann seine `item.json` hier.
- **„Die Bibliothek konnte nicht erreicht werden.“** Sie sind offline, oder die Bibliothek ist nicht erreichbar. Elemente, die bereits in der Zeichnung sind, sind nicht betroffen.
- **Ein Element ist viel zu groß oder zu klein.** Die Einheiten der Zeichnung sind falsch oder nicht gesetzt. Machen Sie es rückgängig, stellen Sie {{ui:Einheiten}} ein und platzieren Sie es erneut.
