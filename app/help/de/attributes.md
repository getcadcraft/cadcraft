---
title: Blockattribute
summary: Sehen und ändern Sie die Werte, die eine Blockreferenz trägt, etwa eine Positionsnummer oder einen Hersteller, und behalten Sie sie, wenn Sie eine Kopie speichern.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, Schriftfeld, title block, direkt bearbeiten, edit in place, Attribut-Editor, attribute editor, attdef, Attribut definieren, define attribute, bedit, Blockeditor, block editor, bclose, Attribut, Attribute, attributes, attrib, Kennung, tag, Positionsnummer, item number, Wert, value, unsichtbar, invisible, konstant, constant, Block, Eigenschaften, properties, Liste, list, Gerätekennzeichnung, equipment tag
from: 34d307c7
---

## Was Attribute sind

Ein Attribut ist ein benannter Wert, der mit einer Blockreferenz mitreist: die Positionsnummer einer Gerätekennzeichnung, der Name einer Raumkennzeichnung, die Feuerwiderstandsklasse einer Tür. Die Blockdefinition legt fest, welche Attribute er hat (jedes hat eine **Kennung**, eine **Aufforderung**, einen **Standard** sowie eine Position, Größe und einen Winkel für seinen Text). Jede Referenz des Blocks trägt ihre eigenen Werte.

Manche Attribute sind **unsichtbar**: Sie enthalten Daten wie einen Hersteller oder eine Modellnummer, werden aber nie gezeichnet. Manche sind **konstant**: für jede Referenz gleich und vom Block festgelegt.

## Woher Attribute kommen

- Blöcke in DWG- und DXF-Dateien, die Sie öffnen, behalten ihre Attribute mit den Werten jeder Referenz.
- Blöcke, die Sie mit {{cmd:INSERT}} und der Option {{ui:File}} einfügen, behalten ihre. Siehe [Einfügen aus einer Datei oder der Bibliothek](topic:insert-from-file-and-library).
- Bibliothekselemente kommen als Blöcke mit Attributen herein: eine sichtbare Positionsnummer und die Daten des Elements, unsichtbar.

- Blöcke, die Sie selbst erstellen: Definieren Sie zuerst Attribute mit {{cmd:ATTDEF}} (unten) und wählen Sie sie dann zusammen mit den anderen Objekten aus, wenn Sie den Block erstellen.

## Attribute für eigene Blöcke definieren

1. Zeichnen Sie die Linien des Blocks, zum Beispiel eine Raumkennzeichnung.
2. Wählen Sie {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}} oder geben Sie `ATT` ein und drücken Sie {{key:Enter}}.
3. Der Verlauf zeigt die Modi (`Invisible=No Constant=No Preset=No`). Geben Sie `I`, `C` oder `P` ein, um einen umzuschalten, und drücken Sie {{key:Enter}}, wenn sie stimmen. Unsichtbare Werte bleiben erhalten, werden aber nicht gezeichnet; ein konstanter Wert hat in jeder Referenz denselben Wert; ein voreingestellter wird beim Einfügen des Blocks nicht abgefragt.
4. Geben Sie die Kennung ein (zum Beispiel `ROOM_NO`: Großbuchstaben, ohne Leerzeichen), die Aufforderung (`Raumnummer`) und einen Standardwert (`101`).
5. Klicken Sie, wo der Wert stehen soll, und geben Sie Höhe und Drehung an. Die Kennung wird in der Zeichnung angezeigt.
6. Erstellen Sie den Block mit {{cmd:BLOCK}} und wählen Sie die Linien und Attributdefinitionen gemeinsam aus. Die Referenz, die sie ersetzt, erhält die Standardwerte; jedes neue {{cmd:INSERT}} fragt danach ab.

Eine ausgewählte Attributdefinition zeigt {{ui:Tag}}, {{ui:Prompt}}, {{ui:Default}} und die Modi in {{ui:Properties}}.

## Block ändern: der Blockeditor

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}} ({{cmd:BEDIT}}, `BE`) öffnet einen Block für sich: Geben Sie seinen Namen ein (oder wählen Sie vorher eine Referenz). Eine Leiste oben zeigt, welchen Block Sie bearbeiten. Zeichnen, löschen und ändern Sie seine Objekte mit den üblichen Befehlen und fügen Sie Attributdefinitionen hinzu oder ändern sie. Klicken Sie dann auf {{ui:Save block}} (oder geben Sie {{cmd:BCLOSE}} und `S` ein): Jede Referenz zeigt die Änderung, und ein {{key:Mod+Z}} macht alles rückgängig. {{ui:Discard changes}} (`BCLOSE`, `D`) lässt den Block, wie er war.

Wenn Sie Attributdefinitionen hinzugefügt, entfernt oder geändert haben, gleicht das Speichern auch jede Referenz an: Von Ihnen eingegebene Werte bleiben erhalten, ein neues Attribut erhält seinen Standard, ein entferntes verschwindet, und jedes Attribut wird dorthin zurückgesetzt, wo die Definition es platziert. Der Verlauf nennt, wie viele Referenzen aktualisiert wurden.

## Schriftfeld an Ort und Stelle bearbeiten (REFEDIT)

Ein Schriftfeld auf einem Blatt steckt oft in einem Block. Um dessen Linien oder Texte zu ändern, ohne das Blatt zu verlassen:

1. Wählen Sie das Schriftfeld, dann {{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}} (oder geben Sie {{cmd:REFEDIT}} ein).
2. Sein Inhalt wird an seiner Stelle zu gewöhnlichen Objekten; alles andere wird verblasst und lässt sich nicht ändern.
3. Ändern, löschen oder zeichnen Sie: Neue Objekte werden Teil des Blocks.
4. Klicken Sie auf {{ui:Save the block}} in der Leiste oben (oder geben Sie {{cmd:REFCLOSE}} und `S` ein). Jede Referenz zeigt die Änderung, und ein {{key:Mod+Z}} macht die ganze Bearbeitung rückgängig. {{ui:Discard}} lässt den Block, wie er war.

Eine externe Referenz (Xref), ein dynamischer Block oder eine Referenz, die in X- und Y-Richtung unterschiedlich skaliert ist, lässt sich nicht direkt bearbeiten: Verwenden Sie {{cmd:BEDIT}} (oder öffnen Sie die externe Zeichnung).

:::note
Speichern oder verwerfen Sie im Blockeditor, bevor Sie die Zeichnung speichern: Eine Datei, die bei geöffnetem Editor gespeichert wird, hat den Block so, wie er vorher war.
:::

## Werte eintragen, wenn Sie einen Block platzieren

1. Geben Sie `I` ein und drücken Sie {{key:Enter}}, geben Sie den Blocknamen ein und drücken Sie {{key:Enter}}.
2. Klicken Sie, wo er hinkommt.
3. CadCraft fragt jeden Wert ab, zum Beispiel `Enter Item number (ITEM) <>`. Geben Sie den Wert ein und drücken Sie {{key:Enter}}, oder drücken Sie {{key:Enter}}, um den Standard zu behalten, der in spitzen Klammern angezeigt wird.

Werte, die der Block als voreingestellt kennzeichnet, und konstante Werte werden nicht abgefragt. Sie übernehmen ihren Standard.

## Werte sehen und ändern

1. Klicken Sie auf eine Blockreferenz.
2. Im rechten Bereich hat unter {{ui:Attributes}} jede Kennung ihren Wert. Unsichtbare zeigen `hidden`.
3. Klicken Sie auf einen Wert, geben Sie den neuen ein und drücken Sie {{key:Enter}}.

Die Zeichnung zeigt den neuen Wert sofort. Jede Änderung ist ein Schritt: {{key:Mod+Z}} macht sie rückgängig.

**Der Attribut-Editor.** Doppelklicken Sie auf eine Referenz mit Attributen (oder {{cmd:EATTEDIT}}): Das Dialogfeld {{ui:Edit attributes}} listet jede Kennung mit ihrer Aufforderung und ihrem Wert auf. Geben Sie neue Werte ein; klicken Sie auf eine Zeile, um die {{ui:Height}}, {{ui:Rotation}}, {{ui:Width factor}}, {{ui:Justify}}, {{ui:Layer}}, {{ui:Color}} und {{ui:Invisible}} dieses Attributs nur für diese Referenz zu ändern. {{ui:Apply}} lässt das Dialogfeld offen; {{ui:OK}} übernimmt und schließt. Jedes {{ui:Apply}} oder {{ui:OK}} ist ein Rückgängig-Schritt.

**In der Befehlszeile** fragt {{cmd:ATTEDIT}} jeden Wert nacheinander ab: Geben Sie einen neuen ein oder drücken Sie {{key:Enter}}, um ihn zu behalten.

## Attributdefinitionen ändern (BATTMAN, ATTSYNC)

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}} ({{cmd:BATTMAN}}) listet die Attribute eines Blocks auf: Ändern Sie eine Kennung, Aufforderung oder einen Standard, setzen Sie einen Haken bei {{ui:Invisible}}, {{ui:Constant}} oder {{ui:Preset}}, und verschieben Sie sie nach oben oder unten (die Reihenfolge, in der Werte abgefragt werden). Mit gesetztem Haken bei {{ui:Update the references (values kept)}} bringt {{ui:Apply}} außerdem jede Referenz in Einklang; eine umbenannte Kennung behält ihre Werte. Jedes {{ui:Apply}} ist ein Rückgängig-Schritt.

{{cmd:ATTSYNC}} gleicht Referenzen von Hand an die Definitionen ihres Blocks an: `S` wählt eine Referenz, `N` benennt einen Block, `A` macht alle Blöcke. Werte bleiben erhalten.

Die Werte der eigenen Felder eines Bibliothekselements (seine ID, Version, Lizenz und Quellenangabe) werden angezeigt, lassen sich aber nicht bearbeiten, damit die Prüfung auf Updates weiter funktioniert. Seine Positionsnummer und Menge dürfen Sie ändern.

## Auflisten

Wählen Sie Referenzen aus und geben Sie `LI` ein (für {{cmd:LIST}}). Der Verlauf zeigt jedes Attribut als `TAG = value`, mit `(invisible)` oder `(constant)`, wo das zutrifft.

## Verschieben, Drehen und Zerlegen

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} und {{cmd:MIRROR}} behalten die Werte; der Text bewegt sich mit dem Block und bleibt lesbar.
- {{cmd:EXPLODE}} macht die sichtbaren Attribute zu normalem Text mit ihren Werten. Die unsichtbaren fallen weg.

## Speichern

Eine gespeicherte DWG und eine gespeicherte DXF behalten jedes Attribut: die Definitionen jedes Blocks (auch unsichtbare, konstante und voreingestellte) und die Werte jeder Referenz. Andere CAD-Programme lesen sie als gewöhnliche Blockattribute.

In einer DXF R12 wird ein Wert mit mehr als 255 Zeichen auf 255 gekürzt, und der Verlauf meldet das.

## Häufige Fehler

- **Ein Wert erscheint nicht in der Zeichnung.** Er ist unsichtbar oder leer. Unsichtbare Werte erscheinen weiterhin im rechten Bereich.
- **Der Wert, den ich eingegeben habe, ist in der Befehlszeile gelandet.** Klicken Sie zuerst in das Wertfeld im rechten Bereich.
