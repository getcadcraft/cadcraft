---
title: Bemaßungsgrößen, Dezimalstellen und Maßstab festlegen
summary: Texthöhe, Pfeilgröße, Dezimalstellen und Gesamtmaßstab für neue Bemaßungen festlegen, vorhandene ändern und verstehen, wie Bemaßungsstile in CadCraft funktionieren.
keywords: Bemaßungsstil, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, Gesamtmaßstab, Dezimalstellen, Pfeilgröße, Beschriftungsmaßstab, Einheiten im Text, mm, cm, m, km, Millimeter, Meter, dimlfac, dimpost
from: 8ec82a07
---

## Was Sie lernen

Wie groß Bemaßungstext und Pfeile sind, wie Sie sie für eine Zeichnung im Maßstab 1:50 oder 1:100 festlegen und wie Sie Bemaßungen ändern, die Sie bereits erstellt haben.

## Wie Bemaßungsgrößen funktionieren

Jede Bemaßung trägt ihren eigenen Satz von Größen: Texthöhe, Pfeilgröße, Dezimalstellen, den Abstand um den Text, wie weit Maßhilfslinien über die Maßlinie hinauslaufen und wie weit sie vom Objekt beginnen. Die Vorgaben liegen nahe am üblichen ISO-Stil:

| Einstellung | Vorgabe | Befehl |
|---|---|---|
| Texthöhe | 2.5 | {{cmd:DIMTXT}} |
| Pfeilgröße | 2.5 | {{cmd:DIMASZ}} |
| Dezimalstellen | 2 (nachgestellte Nullen entfallen) | {{cmd:DIMDEC}} |
| Abstand um den Text | 0.625 | {{cmd:DIMGAP}} |
| Verlängerung über die Maßlinie | 1.25 | {{cmd:DIMEXE}} |
| Abstand vom Objekt | 0.625 | {{cmd:DIMEXO}} |
| Gesamtmaßstab | 1 | {{cmd:DIMSCALE}} |

Jede Größe wird mit dem **Gesamtmaßstab** multipliziert. Legen Sie die Größen so fest, wie Sie sie auf Papier wollen (2.5 mm Text), und setzen Sie den Gesamtmaßstab auf den Druckmaßstab (50 für 1:50). Der Text ist dann 2.5 × 50 = 125 Zeichnungseinheiten hoch, und er druckt sich mit 2.5 mm.

:::note
Benannte Bemaßungsstile verwalten Sie mit {{cmd:DIMSTYLE}}: siehe den Abschnitt unten. Jede Bemaßung behält außerdem die Einstellungen, mit denen sie erstellt wurde, sodass Sie eine einzelne Bemaßung noch in {{ui:Eigenschaften}} allein ändern können.
:::

## Die Größen für neue Bemaßungen festlegen

Beide Wege unten ändern nur Bemaßungen, die Sie danach erstellen.

### Im Bedienfeld Aktuelle Einstellungen

1. Drücken Sie {{key:Esc}}, damit nichts ausgewählt ist. Auf der Registerkarte {{ui:Modell}} zeigt das rechte Bedienfeld {{ui:Aktuelle Einstellungen}}.
2. Scrollen Sie das Bedienfeld bis zu {{ui:Neue Bemaßungen}}, vorbei an den Zeilen für Layer, Farbe, Einheiten und {{ui:Layer 0}} (auf einem kleinen Bildschirm beginnt es unterhalb des unteren Randes). Klicken Sie in {{ui:Gesamtmaßstab}}, geben `50` ein und drücken {{key:Enter}}.
3. Legen Sie {{ui:Texthöhe}}, {{ui:Pfeilgröße}} und {{ui:Dezimalstellen}} auf die gleiche Weise fest, wenn Sie andere Werte wollen.

Die Statusleiste bestätigt jeden davon, zum Beispiel „Gesamtmaßstab für neue Bemaßungen: 50“.

### An der Befehlszeile

1. Geben Sie `DIMSCALE` ein und drücken {{key:Enter}}.
2. Bei `Enter new value for DIMSCALE <1>` geben Sie `50` ein und drücken {{key:Enter}}.

Der Verlauf bestätigt „DIMSCALE = 50. Neue Bemaßungen verwenden ihn; wählen Sie vorhandene aus, um deren zu ändern.“ {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} und {{cmd:DIMEXO}} funktionieren genauso. Drücken Sie {{key:Enter}} an der Eingabeaufforderung, um den aktuellen Wert zu behalten.

### Fuß und Zoll bei Bemaßungen

Neue Bemaßungen verwenden das Längenformat der Zeichnung: Setzen Sie es mit {{ui:Längenformat}} in {{ui:Aktuelle Einstellungen}} oder mit {{cmd:UNITS}} (siehe [Fuß und Zoll](topic:units-papers-scales#feet-and-inches-and-fractions)), und die nächste Bemaßung zeigt `12'-6 1/2"`. {{cmd:DIMLUNIT}} setzt nur das Format der Bemaßungen (2 Dezimal, 3 Ingenieur, 4 Architektur, 5 Bruch). Für eine bereits erstellte Bemaßung wählen Sie sie aus und wählen {{ui:Format}} in {{ui:Eigenschaften}}; bei einem Bruchformat nimmt das Feld {{ui:Bruch}} die Zweierpotenz (4 = 1/16).

## Bemaßungen in mm, cm, m oder km

Eine Bemaßung misst in Zeichnungseinheiten. Sie kann diese Länge stattdessen in Millimetern, Zentimetern, Metern oder Kilometern schreiben, mit der Einheit nach der Zahl: Eine 1250 mm lange Wand zeigt `1250 mm`, `125 cm`, `1.25 m` oder `0.00125 km`.

1. Legen Sie zuerst die {{ui:Einheiten}} der Zeichnung in {{ui:Aktuelle Einstellungen}} fest (siehe [Einheiten, Papierformate und Maßstäbe](topic:units-papers-scales#drawing-units)), damit CadCraft weiß, was eine Zeichnungseinheit ist. Eine Zeichnung ohne Einheiten wird als Millimeter gelesen, und {{cmd:DIMTEXTUNIT}} sagt das.
2. Für neue Bemaßungen: Drücken Sie {{key:Esc}}, damit nichts ausgewählt ist, und wählen unter {{ui:Neue Bemaßungen}} {{ui:Einheiten im Text}}: {{ui:Zeichnungseinheiten}}, `mm`, `cm`, `m` oder `km`.
3. Für bereits erstellte Bemaßungen: Wählen Sie sie aus und wählen in {{ui:Eigenschaften}} › {{ui:Primäreinheiten}} die Option {{ui:Einheiten im Text}}.

Oder geben Sie {{cmd:DIMTEXTUNIT}} (`DTU`) ein und antworten mit `D`, `MM`, `CM`, `M` oder `KM`: Bei ausgewählten Bemaßungen ändert es diese (ein Schritt für {{ui:Rückgängig}}), ohne Auswahl setzt es neue Bemaßungen.

{{ui:Dezimalstellen}} ({{cmd:DIMDEC}}) legt weiterhin fest, wie viele Nachkommastellen erscheinen: Bei Metern und 3 Dezimalstellen zeigt 1234 mm `1.234 m`. Der Text wird als Dezimalzahl geschrieben. Auf einem Blatt messen Bemaßungen in der Papiereinheit des Blatts (Millimeter oder Zoll).

Eine gespeicherte DWG oder DXF behält die Wahl als Messfaktor der Bemaßung (DIMLFAC) und als Suffix (DIMPOST, ` m`), damit andere Programme denselben Text zeigen. Ändern Sie später die {{ui:Einheiten}} der Zeichnung, werden Bemaßungen in mm, cm, m oder km neu angepasst, sodass sie weiterhin die richtige Länge angeben. {{ui:Von Hand gesetzt (Faktor oder Suffix)}} bedeutet, dass der {{ui:Messfaktor}} oder das Suffix der Bemaßung auf anderem Weg gesetzt wurde; wählen Sie eine Einheit, um sie zu ersetzen.

## Vorhandene Bemaßungen ändern

1. Klicken Sie eine Bemaßung an. Die Überschrift des rechten Bedienfelds lautet {{ui:Bemaßung}}.
2. Die Einstellungen sind in Abschnitten; scrollen Sie nach unten, um die späteren zu erreichen:
   - {{ui:Allgemein}}: {{ui:Bemaßungsstil}}
   - {{ui:Geometrie}}: {{ui:Art}} und {{ui:Messwert}} (nur lesbar)
   - {{ui:Text}}: {{ui:Textersetzung}} und {{ui:Texthöhe}}
   - {{ui:Linien und Pfeile}}: {{ui:Pfeilgröße}}
   - {{ui:Anpassung}}: {{ui:Gesamtmaßstab}}
   - {{ui:Primäreinheiten}}: {{ui:Dezimalstellen}}
3. Geben Sie einen neuen Wert ein und drücken {{key:Enter}}.

Die Bemaßung wird sofort neu gezeichnet. Bei Winkelbemaßungen legt {{ui:Dezimalstellen (°)}} die Nachkommastellen des Winkels fest.

:::note
Sind mehrere Bemaßungen ausgewählt, zeigt das Bedienfeld die Zeilen, die sie gemeinsam haben, und ein Wert, der sich zwischen ihnen unterscheidet, lautet {{ui:Verschieden}}. Ein Wert, den Sie eingeben, ändert jede ausgewählte Bemaßung in einem Schritt, sodass ein {{key:Mod+Z}} alle zurücksetzt.
:::

## Bemaßungen aus geöffneten Zeichnungen

Eine Bemaßung aus einer geöffneten DWG oder DXF wird genau so gezeigt, wie das andere Programm sie gezeichnet hat. Ihr Bedienfeld sagt: „So gezeigt, wie das Programm, das sie erstellt hat, sie gezeichnet hat. Ändern Sie sie, und CadCraft zeichnet sie im eigenen Stil neu.“ Sobald Sie einen Wert ändern, einen Griff verschieben oder die Bemaßung verschieben, zeichnet CadCraft sie mit eigenen Pfeilspitzen und eigener Schrift neu, mit den Größen, die es aus der Datei gelesen hat.

Einige Bemaßungen lassen sich nur so lesen, wie sie gezeichnet wurden, nicht als bearbeitbare Bemaßungen; das Bedienfeld zeigt dann „Gezeichnet aus“ und einen Blocknamen, und das Feld „Über diese Datei“ zählt sie.

## Häufige Fehler

- **Das Ändern von DIMSCALE hat auf dem Bildschirm nichts verändert.** Die Einstellung gilt für neue Bemaßungen. Wählen Sie vorhandene aus und ändern {{ui:Gesamtmaßstab}} im Bedienfeld.
- **Die Dezimalstellen zeigen weniger Stellen als eingestellt.** Nachgestellte Nullen entfallen: Bei 2 Dezimalstellen zeigt sich `1250` und `1250.5`, nicht `1250.00`.
- **Der Text hat auf Papier in einem Ansichtsfenster die richtige Höhe, im Modelldruck aber die falsche.** Der Gesamtmaßstab muss zu dem Maßstab passen, in dem Sie drucken. Druckt man auf „Auf Papier einpassen“, ergibt sich ein krummer Maßstab; wählen Sie im Druckdialog einen Standardmaßstab.
- **Einheiten wie mm oder m im Text.** Wählen Sie {{ui:Einheiten im Text}} (siehe [Bemaßungen in mm, cm, m oder km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Für jedes andere Wort nach der Zahl geben Sie es in einer Ersetzung ein: `<> TYP.`.

## Benannte Bemaßungsstile

Geben Sie `DIMSTYLE` (`D`) ein, um den {{ui:Bemaßungsstil-Manager}} zu öffnen. Er listet die Stile der Zeichnung, wie viele Bemaßungen jeden verwenden, und welcher aktuell ist. **Standard** ist immer vorhanden.

- {{ui:Aktuell setzen}}: Neue Bemaßungen verwenden die Einstellungen dieses Stils und tragen seinen Namen.
- {{ui:Neu…}}: ein neuer Stil, der als Kopie eines von Ihnen gewählten beginnt.
- {{ui:Ändern…}}: dieselben Felder wie der Bemaßungsbereich von {{ui:Eigenschaften}} (Linien und Pfeile, Text, Anpassung, Einheiten, alternative Einheiten, Toleranzen). Drücken Sie {{ui:OK}}, dann ändert sich der Stil **und jede Bemaßung, die ihn verwendet, ändert sich mit**, Einstellung für Einstellung. Eine Einstellung, die Sie an einer einzelnen Bemaßung geändert haben, bleibt, wie sie ist, solange der Stil diese Einstellung nicht ändert.
- {{ui:Umbenennen…}} und {{ui:Löschen}}: Standard kann nicht umbenannt oder gelöscht werden, ebenso wenig der aktuelle Stil oder einer, den Bemaßungen verwenden.
- {{ui:Vergleichen…}}: was sich zwischen zwei Stilen unterscheidet.
- {{ui:Auf Auswahl anwenden}}: Wählen Sie zuerst Bemaßungen aus; sie übernehmen die Einstellungen des Stils und seinen Namen.

`-DIMSTYLE` tut dasselbe an der Befehlszeile: `Restore`, `Save` (die aktuellen Einstellungen, einschließlich dessen, was Sie mit {{cmd:DIMTXT}} und den anderen eingegeben haben, unter einem Namen), `Delete`, `Apply`, `Compare`, `reName`, `List`.

Die Stile werden in einer DWG oder DXF gespeichert (in deren Bemaßungsstiltabelle) und aus den Dateien gelesen, die Sie öffnen. Der *aktuelle* Stil wird nicht gespeichert: Eine Zeichnung öffnet sich mit Standard als aktuell. Standard behält seine eigenen Einstellungen, während ein anderer Stil aktuell ist.

## Bemaßungstext und Hilfslinien ändern

{{cmd:DIMEDIT}} (`DED`) wirkt auf die Bemaßungen, die Sie auswählen: **Start** setzt den Text dorthin zurück, wohin der Stil ihn legt, **Neu** schreibt anderen Text (`<>` steht für den Messwert), **Drehen** dreht den Text, **Schräg** neigt die Maßhilfslinien von linearen und ausgerichteten Bemaßungen um einen Winkel, den Sie eingeben (drücken Sie {{key:Enter}} für keinen). {{cmd:DIMTEDIT}} verschiebt den Text nach **Links**, **Rechts** oder **Mitte** der Maßlinie, oder dreht ihn (**Winkel**), oder setzt ihn auf **Start**. Der Text liegt immer auf der Maßlinie: Er kann nicht an eine freie Stelle gezogen werden.
