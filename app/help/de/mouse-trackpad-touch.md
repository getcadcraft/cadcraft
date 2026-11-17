---
title: Maus, Trackpad und Touch
summary: Wie Sie in CadCraft mit einer Rad-Maus, einem Mac- oder PC-Trackpad oder einem Touchscreen zoomen, schwenken, rechtsklicken und wählen und was sich zwischen den Browsern unterscheidet.
keywords: trackpad, touchpad, magic mouse, touch, tablet, ipad, pan, zoom, zusammenziehen, rechtsklick, zwei Finger, mittlere Taste, browser, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft ist für eine Maus mit Rad ausgelegt. Alles funktioniert auch mit einem Trackpad, mit ein paar Gewohnheiten, die man lernen muss. Touchscreens eignen sich mit Einschränkungen zum Wählen.

## Rad-Maus

- **Zoomen:** am Rad drehen. Die Zeichnung zoomt um das Fadenkreuz, zeigen Sie also auf das, was Sie sehen möchten.
- **Schwenken:** das Rad gedrückt halten und ziehen, oder mit der rechten Taste ziehen.
- **Alles zoomen:** Doppelklick auf das Rad oder klicken Sie auf {{ui:Grenzen}}.
- **Zurück zur vorherigen Ansicht:** klicken Sie in der Gruppe Ansicht auf {{ui:Vorherige (P)}}, oder geben Sie `Z`, {{key:Enter}}, `P`, {{key:Enter}} ein. Eine Folge von Radschritten zählt als eine Ansicht, ein {{ui:Vorherige (P)}} macht sie also zusammen rückgängig. Speichern Sie Ansichten, zu denen Sie zurückkehren, mit {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** Rechtsklick.

## Trackpad

:::mac
- **Schwenken:** bewegen Sie zwei Finger auf dem Trackpad in eine beliebige Richtung: Die Zeichnung folgt Ihren Fingern. Sie können auch mit gehaltenem Zwei-Finger-Klick ziehen (ein Ziehen mit der rechten Taste).
- **Zoomen:** mit zwei Fingern zusammenziehen oder auseinanderziehen. Das Zoomen folgt dem Fadenkreuz.
- **Rechtsklick (Enter):** mit zwei Fingern klicken. Aktivieren Sie „Sekundärklick“ in **Systemeinstellungen** unter **Trackpad**, falls das nichts bewirkt. Control-Klick kann in CadCraft als gewöhnlicher Klick statt als Rechtsklick zählen, verwenden Sie also den Zwei-Finger-Klick.
- **Auf einen Bereich zoomen:** klicken Sie in der Gruppe Ansicht auf {{ui:Fenster (W)}} und klicken Sie auf zwei Ecken.
:::

:::windows linux
- **Schwenken:** bewegen Sie zwei Finger auf dem Touchpad in eine beliebige Richtung: Die Zeichnung folgt Ihren Fingern. Sie können auch mit gehaltener rechter Taste ziehen.
- **Zoomen:** mit zwei Fingern zusammenziehen oder auseinanderziehen. Das Zoomen folgt dem Fadenkreuz.
- **Rechtsklick (Enter):** mit zwei Fingern klicken oder unten rechts auf das Touchpad tippen, je nach Touchpad-Einstellungen.
- **Auf einen Bereich zoomen:** klicken Sie in der Gruppe Ansicht auf {{ui:Fenster (W)}} und klicken Sie auf zwei Ecken.
:::

Die Leertaste gedrückt halten und ziehen schwenkt in CadCraft **nicht**: {{key:Space}} ist Enter.

Eine Rad-Maus zoomt weiterhin Schritt für Schritt. Ein Trackpad, das sein Scrollen in ganzen Schritten sendet wie ein Rad, zoomt mit einem Zwei-Finger-Scrollen statt zu schwenken: herauszoomen, auf den gewünschten Bereich zeigen und wieder hineinzoomen. Der 3D-Tab behält seine eigenen Trackpad-Bewegungen (siehe [Modell in 3D](topic:3d-solids#look-around)).

## Touchscreens und Tablets

CadCraft liest einen Finger als Mausklick:

- Ein Tippen wählt einen Punkt oder ein Objekt aus oder markiert.
- Ein Ziehen mit dem Finger auf leerer Fläche zeichnet ein Lasso (nach rechts zuerst ein Fenster, nach links zuerst ein Kreuzungsfenster; siehe [Lasso-Auswahl](topic:lasso-selection)).
- In {{cmd:TRIM}} und {{cmd:EXTEND}} stutzt oder dehnt ein Ziehen mit dem Finger über mehrere Teile alle auf einmal.
- Ein Ziehen am Griff eines gewählten Objekts verschiebt den Griff. Griffe und Auswahlfeld sind für einen Finger größer.
- **Zusammen- oder Auseinanderziehen** mit zwei Fingern zoomt um den Punkt zwischen ihnen. Zwei Finger gemeinsam bewegen, um zu **schwenken**. Ein zweiter Finger bricht ab, was der erste begonnen hat, sodass eine solche Geste nie eine Spur hinterlässt.
- Ein **langer Druck** (ungefähr eine halbe Sekunde still halten) ist ein Rechtsklick: {{key:Enter}}. Er beendet einen Befehl, schließt eine Auswahl ab oder wiederholt den letzten Befehl.

Unter der Befehlszeile erscheint eine **Tastenzeile**: {{ui:Esc}}, {{ui:Rückgängig}}, {{ui:Wiederholen}}, die Zeichen, die eine Tablet-Tastatur verbirgt (`@` `,` `<` `'` `"` `-`), {{ui:Fang}}, {{ui:Ortho}}, eine Tastaturschaltfläche und ein großes {{ui:Enter}}. Tippen Sie auf die Tastaturschaltfläche (oder auf die Befehlszeile), um einen Befehl oder eine Zahl einzugeben.

Es gibt kein Hover-Verhalten. Fangmarkierungen erscheinen deshalb nur dort, wo Ihr Finger ist.

:::touch
Sie verwenden einen Touchscreen. Für mehr als einen kurzen Blick machen eine angeschlossene Tastatur und eine Maus oder ein Trackpad CadCraft viel einfacher zu bedienen.
:::

## Browser

CadCraft funktioniert gleich in Chrome, Edge, Firefox und Safari, auf Mac, Windows und Linux. Die Unterschiede sind gering:

| Thema | Was Sie wissen sollten |
|---|---|
| Öffnen einer DWG | Große Zeichnungen brauchen in jedem Browser einige Sekunden zum Einlesen. Die Statuszeile zeigt währenddessen „Lesen …“ |
| Downloads | Jeder Browser entscheidet, wohin Downloads gehen und ob er vorher fragt. Siehe [Browser und Computer](common:browsers) |
| Zum Drucken öffnen | Öffnet die PDF in einem neuen Tab. Wenn der Browser Pop-ups blockiert, lädt CadCraft stattdessen die PDF herunter |
| F7 | Firefox bietet möglicherweise die Cursor-Navigation an; wählen Sie Nein |
| Verlassen mit nicht gespeicherten Änderungen | Jeder Browser zeigt seine eigene Frage „Seite verlassen?“, die CadCraft nicht ändern kann |

:::safari
In Safari wird eine PDF, die mit {{ui:Zum Drucken öffnen}} geöffnet wurde, möglicherweise im Tab angezeigt, ohne zu drucken: Verwenden Sie **Ablage**, dann **Drucken**.
:::

:::firefox
Firefox fragt möglicherweise bei jedem Download, was damit geschehen soll. Wählen Sie, die Datei zu speichern, oder ändern Sie das einmal in den Firefox-Einstellungen unter Downloads.
:::
