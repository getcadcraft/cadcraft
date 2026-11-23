---
title: Aus einer Datei oder der Bibliothek einfügen
summary: Einen Block oder eine ganze Zeichnung aus einer anderen DWG oder DXF einfügen und Elemente aus der Bibliothek, einer Datei oder einer anderen Bibliothek platzieren, mit ihren Quellenangaben und Aktualisierungen.
keywords: einfügen, Datei, Bibliothek, librarycraft, Element, Ausstattung, Block aus anderer Zeichnung, wblock, Design Center, Quellenangaben, Urheber, Lizenz, Aktualisierung, Feed, item.json
from: f6e4e452
---

## Einen Block aus einer anderen Zeichnung einfügen

1. Geben Sie `I` ein und drücken Sie {{key:Enter}}, oder klicken Sie auf {{ui:Einfügen}} in der Gruppe Blöcke.
2. Die Befehlszeile unten im Fenster fragt `Blockname eingeben oder [Datei/Bibliothek]`. Geben Sie dort `F` ein und drücken Sie {{key:Enter}}.
3. Wählen Sie die DWG oder DXF auf diesem Computer. Sie wird hier gelesen; sie wird nicht geöffnet, und nichts wird hochgeladen.
4. Wählen Sie im Dialogfeld {{ui:Einfügen aus}} einen Block aus der Liste (geben Sie in {{ui:Blöcke filtern}} ein, um ihn zu finden), oder behalten Sie {{ui:Ganze Zeichnung}}. Klicken Sie auf {{ui:Einfügen}}.
5. Klicken Sie, wohin er soll, und füllen Sie alle Attribute aus, nach denen er fragt.

Sie können auch im Bereich {{ui:Blöcke}} beginnen: Geben Sie `F` in dessen Feld {{ui:Blöcke filtern}} ein und drücken Sie {{key:Enter}}, oder geben Sie etwas ein, das kein Block trifft, und klicken Sie auf {{ui:Aus Datei…}}. `L` und {{ui:Bibliothek…}} öffnen die Bibliothek auf dieselbe Weise. Vor Version 0.10.1 suchte ein Buchstabe im Feld {{ui:Blöcke filtern}} nur in den Blöcken dieser Zeichnung und antwortete „Kein Block passt zum Filter.“.

Um eine Zeichnung mit eigenen Blöcken griffbereit zu haben, klicken Sie im Bereich {{ui:Blöcke}} unter {{ui:Bibliotheken}} auf {{ui:Zeichnung hinzufügen}} und wählen Sie die DWG oder DXF. Ihre Blöcke werden mit Bildern aufgelistet; klicken Sie auf einen, um ihn zu platzieren.

Die ganze Zeichnung kommt als ein Block herein, der nach der Datei benannt ist. Blöcke innerhalb des gewählten Blocks kommen ebenfalls. Die Layer, die sie verwenden, werden dieser Zeichnung hinzugefügt.

Wenn die andere Zeichnung andere Einheiten hat (etwa Zoll und Millimeter), skaliert CadCraft die Referenz passend und meldet es im Verlauf.

### Wenn ein Name schon verwendet wird

Hat diese Zeichnung bereits einen Block mit demselben Namen, fragt CadCraft:

- {{ui:Vorhandene behalten}} verwendet den Block dieser Zeichnung mit diesem Namen.
- {{ui:Umbenennen}} fügt den neuen als `Name (2)` ein.

Das ganze Einfügen ist ein einziger Schritt: {{key:Mod+Z}} entfernt die Referenz und die kopierten Definitionen wieder.

## Die Bibliothek öffnen

Klicken Sie auf {{ui:Bibliothek…}} im Bereich {{ui:Blöcke}} oder auf {{ui:Bibliothek}} in der Gruppe Blöcke, oder geben Sie `LIB` ein. Bei der Eingabeaufforderung von `INSERT` öffnet `L` sie ebenfalls.

Die Bibliothek hat vier Quellen, als Registerkarten:

- {{ui:Bibliothek}}: die Bibliothek von CadCraft. Suchen Sie nach Name, Hersteller oder Modell und filtern Sie nach Kategorie.
- {{ui:Dateien…}}: eine Elementdatei (`item.json`) aus einer beliebigen Bibliothek oder eine Zeichnung, Tabelle oder ein 3D-Modell, aus dem Elemente entstehen: eine DWG oder DXF (jeder Block wird ein Element), eine CSV mit Spalten für Name und Größe oder ein glTF- oder OBJ-Modell. Nichts wird hochgeladen.
- {{ui:Standard}}: Stahlprofile (als Schnitte, Ansichten oder 3D-Stäbe) und Normteile wie Schrauben, Muttern und Lager, hier aus veröffentlichten Tabellen erstellt. Siehe [Stahlprofile und Normteile platzieren](topic:steel-and-standard-parts).
- {{ui:Andere Feeds}}: andere Bibliotheken, die so antworten wie Bibliothek. Tragen Sie ihre Adresse einmal ein; dieser Browser merkt sie sich.

Jede Karte zeigt eine Vorschau, den Namen, Hersteller und Modell, die Lizenz und die Version. Ein zurückgezogenes Element ist mit {{ui:Zurückgezogen}} und dem Grund gekennzeichnet; CadCraft fragt, bevor Sie es platzieren.

## Ein Element platzieren

1. Klicken Sie auf einer Karte auf {{ui:Platzieren}}.
2. Klicken Sie, wohin das Element soll. Geben Sie zuerst `R` ein, um es zu drehen, oder `S`, um es zu skalieren.
3. Bei `Elementnummer eingeben (CC-ITEM)` drücken Sie {{key:Enter}} für die nächste freie Nummer oder geben Sie Ihre eigene ein.

Das Element wird zu einem Block namens `LIB_<name>_v<version>`, gezeichnet in den Einheiten dieser Zeichnung. Hat die Zeichnung keine Einheiten, wird das Element in Millimetern eingefügt, und der Verlauf sagt es; stellen Sie vorher {{ui:Einheiten}} im rechten Bereich ein.

Seine Daten reisen als unsichtbare Attribute mit: die ID und Version des Elements, Lizenz und Quellenangabe, Hersteller, Modell, Kategorie und Größen. Siehe [Blockattribute](topic:attributes).

## Elemente in Ihrer Sprache

Ein Element kann seinen Namen und seine Beschreibung in anderen Sprachen tragen. Hat es sie in der Sprache, auf die CadCraft eingestellt ist (Einstellungen › Allgemein › Sprache), verwenden Karte und der Name des platzierten Blocks diese. Der Block selbst behält einen Namen, der aus dem eigenen Namen des Elements gebildet wird, sodass eine Zeichnung je Element einen Block hat, egal welche Sprache es platziert hat.

## Auf Aktualisierungen prüfen

1. Öffnen Sie die Bibliothek.
2. Klicken Sie auf {{ui:Nach Updates suchen}}.

Jedes Bibliothekselement in der Zeichnung wird mit seinen Elementnummern aufgelistet, und ob es aktuell ist, eine neuere Version hat (und was sich geändert hat) oder zurückgezogen wurde. Klicken Sie in einer Zeile auf {{ui:Aktualisieren}} oder auf {{ui:Alle aktualisieren}}. Jede Referenz wechselt zum Block der neuen Version und behält ihre Elementnummer, Menge, Position, ihren Winkel und ihren Layer. {{key:Mod+Z}} macht eine Aktualisierung rückgängig.

## Quellen angeben, die Sie verwendet haben

Klicken Sie auf {{ui:Bibliothekshinweise}}. Jedes Element wird mit seiner Quellenangabe und Lizenz aufgelistet.

- {{ui:Quellenangabe kopieren}} kopiert die Zeile eines Elements; {{ui:Alle kopieren}} kopiert jede Zeile.
- {{ui:CSV herunterladen}} speichert die Liste mit Elementnummern, Herstellern, Modellen, Lizenzen und Quellenangaben. Sie öffnet sich in jeder Tabellenkalkulation.

Lizenzen wie CC BY verlangen, dass Sie den Urheber nennen, wo Sie das Werk verwenden. Setzen Sie die Zeilen auf die Zeichnung, in die Leistungsbeschreibung oder in die Projektnotizen.

## Symbole und Assets

Die Bibliothek hat drei Arten von Elementen: Symbole (zeichnerische Konventionen, 2D), Typen (woraus ein Element besteht) und Assets (physische Objekte). Im Reiter {{ui:Bibliothek}} zeigt die Liste {{ui:Art des Elements}} Symbole und Assets zusammen, nur Symbole oder nur Assets. Typen sind das, woraus ein BimCraft-Projekt besteht, daher listet CadCraft sie nicht auf.

## In der Bibliothek anmelden

Klicken Sie auf {{ui:An der Bibliothek anmelden}}. Ein kleines Fenster öffnet sich auf der Website; sobald Sie dort angemeldet sind, kann CadCraft die Elemente Ihres Teams zeigen und registrieren, was Sie platzieren, damit Sie erfahren, wenn sich ein verwendetes Element ändert. Die Anmeldung gilt für diesen Browser-Tab. Widerrufen Sie sie jederzeit auf der Sicherheitsseite Ihres Kontos.

## Ihre eigenen Objekte in Meine Objekte behalten

{{ui:Meine Objekte}} ist eine private Liste in der Bibliothek, die nur Sie sehen. Sie steht nicht in der öffentlichen Bibliothek, nicht in der Suche und wird nicht Ihrem Team gezeigt; sie folgt Ihrem Konto auf jeden Computer, auf dem Sie sich an der Bibliothek anmelden.

1. Klicken Sie im Bereich Bibliothek auf {{ui:Dateien…}} und lesen Sie eine Datei.
2. Klicken Sie beim Element, das Sie wieder wollen, auf {{ui:In Meine Objekte behalten}}.
3. Klicken Sie später auf {{ui:Meine Objekte}} und dann auf {{ui:Platzieren}}. Es platziert sich wie jedes Bibliothekselement, und {{ui:Nach Updates suchen}} umfasst es.
4. {{ui:Aus Meine Objekte entfernen}} entfernt es aus der Liste. Bereits in Zeichnungen platzierte Kopien bleiben.

Sie müssen an der Bibliothek angemeldet sein. Das Lesen einer Datei lädt nichts hoch; das Behalten eines Elements sendet nur dieses eine Element an Ihr Konto.

:::note
Meine Objekte wird gerade getestet und ist für Ihr Konto möglicherweise noch nicht freigeschaltet. Sagt es „Meine Objekte ist für dieses Konto noch nicht freigeschaltet“, können Sie Elemente aus Ihren eigenen Dateien weiterhin über {{ui:Dateien…}} platzieren.
:::

## Häufige Fehler

- **„Das Erstellen von Elementen aus IFC-Typen ist in BimCraft.“** IFC- und Familiendateien werden in der App BimCraft gelesen. Erstellen Sie das Element dort oder in der Bibliothek und verwenden Sie dann seine `item.json` hier.
- **„Die Bibliothek ist nicht erreichbar.“** Sie sind offline, oder die Bibliothek ist nicht verfügbar. Elemente, die bereits in der Zeichnung sind, sind nicht betroffen.
- **Ein Element ist viel zu groß oder zu klein.** Die Einheiten der Zeichnung sind falsch oder nicht festgelegt. Machen Sie es rückgängig, stellen Sie {{ui:Einheiten}} ein und platzieren Sie es erneut.
