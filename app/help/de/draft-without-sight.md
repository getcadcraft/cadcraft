---
title: Zeichnen ohne Sicht
summary: Schalten Sie **Zugang** ein, und CadCraft spricht jeden Befehl und jedes Ergebnis über Ihren Bildschirmleser, beschreibt die Zeichnung und das, was nahe am Cursor liegt, lässt Sie den Cursor mit der Tastatur bewegen, spielt für jeden Fang und Griff einen Ton und nimmt Befehle per Sprache entgegen, wo Ihr Browser das auf Ihrem Computer kann.
keywords: Barrierefreiheit, Bildschirmleser, blind, Sehschwäche, NVDA, VoiceOver, JAWS, Orca, Tastaturcursor, Sprachbefehle, Sprache, Töne, Fangtöne, Zeichnung beschreiben, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Zugang** lässt Sie zeichnen, ohne den Bildschirm zu sehen. Er ist ausgeschaltet, bis Sie ihn einschalten, damit ihn niemand versehentlich erhält.

## Einschalten

Öffnen Sie **Einstellungen** (das Zahnrad oder Ctrl+,), suchen Sie **Zeichnen ohne Sicht** und wählen Sie **Ein**. Oder geben Sie `ACCESS` in der Befehlszeile ein und antworten Sie mit `On`. Die Einstellung wird auf diesem Computer gespeichert.

Bei eingeschaltetem Zugang:

- **Alles, was die Befehlszeile ausgibt, wird** über Ihren Bildschirmleser gesprochen: was Sie eingegeben haben, die Eingabeaufforderung, die Antwort und jeder Fehler. CadCraft nutzt eigene höfliche und dringende Live-Bereiche, daher braucht ein Bildschirmleser, der Live-Bereiche liest, keine zusätzliche Einrichtung. Fehler und Abbrüche unterbrechen; alles andere wartet der Reihe nach.
- **Die Zeichenfläche ist erreichbar.** Drücken Sie Tab, bis Sie „Zeichnung“ hören, oder drücken Sie Shift+Tab aus der Befehlszeile. Sie ist ein Bereich, der Tasten an CadCraft weiterleitet.

## Tasten auf der Zeichnung

| Taste | Wirkung |
|---|---|
| Pfeiltasten | Bewegen den Tastaturcursor. Ein Schritt ist etwa ein Hundertstel dessen, was der Bildschirm zeigt, gerundet auf 1, 2 oder 5. Shift bewegt zehnmal so weit, Ctrl ein Zehntel. |
| Enter | Wählt den Punkt unter dem Cursor, genau wie ein Klick. |
| Space | Drückt Enter in der Befehlszeile: beendet LINE, übernimmt den Standardwert. |
| Tab, Shift+Tab | Springt zum nächsten oder vorherigen Fangpunkt in der Nähe des Cursors, der nächstgelegene zuerst. |
| G | Durchläuft die Griffe der ausgewählten Objekte. |
| D | Beschreibt die Zeichnung: wie viele Objekte, welche Art, wie groß, was ausgewählt ist. |
| W | Sagt, wo der Cursor ist und wie weit er vom letzten Punkt entfernt ist. |
| N | Sagt, was nahe am Cursor liegt, das nächstgelegene zuerst, mit Abstand und Seite. |
| S | Beschreibt die ausgewählten Objekte. |
| R | Wiederholt das Letzte. |
| V | Sprache ein oder aus. |
| / | Wechselt zur Befehlszeile. |
| ? | Listet diese Tasten auf. |

Bewegen mit den Tasten sagt, wo Sie gelandet sind. Wartet ein Befehl auf einen Punkt, sagt es außerdem, wie weit und in welche Richtung Sie vom letzten Punkt entfernt sind, zum Beispiel „2400 vom letzten Punkt, nach rechts, bei 0 Grad“.

## Befehle

- {{cmd:ACCESS}} schaltet Zugang, Fangtöne und Sprache ein oder aus und sagt den Zustand.
- {{cmd:DESCRIBE}} sagt, was die Zeichnung enthält.
- {{cmd:WHEREAMI}} sagt, wo der Cursor ist.
- {{cmd:NEARBY}} sagt, was nahe beim Cursor liegt.
- {{cmd:SAYSEL}} sagt, was ausgewählt ist, ein Satz pro Objekt.
- {{cmd:VOICE}} schaltet gesprochene Befehle ein oder aus.

Diese fünf lesen die Zeichnung und geben eine Antwort aus; sie ändern nichts.

## Töne für Fang und Griff

Schalten Sie **Ton für Fang und Griff** in den Einstellungen ein. Jede Fangart hat eigene Tonhöhe und Klang, sodass Sie einen Endpunkt von einem Mittelpunkt, einem Zentrum, einem Schnittpunkt und den übrigen unterscheiden können; ein Griff hat einen doppelten Ton. Der Ton wandert nach links oder rechts, um dem Cursor über den Bildschirm zu folgen. Die Töne werden auf Ihrem Computer erzeugt; nichts wird heruntergeladen.

## Befehle per Sprache

Schalten Sie **Befehle per Sprache** in den Einstellungen ein. Sagen Sie einen Befehlsnamen („line“, „circle“, „move“) und dann Zahlen so, wie Sie sie vorlesen würden: „Punkt dreihundert Komma vierhundert“, „Abstand zwölfhundert“, „Winkel fünfundvierzig“. „Enter“, „cancel“, „undo“ und „redo“ tun, was sie sagen. Das Gehörte wird zurückgesprochen, und eine Wendung, die kein Befehl ist, wird gemeldet, nicht geraten.

**Wo die Sprache erkannt wird.** CadCraft hat keinen eigenen Spracherkennungsdienst und sendet kein Audio irgendwohin. Es bittet Ihren Browser, Sprache auf diesem Computer zu erkennen. Kann Ihr Browser das, lautet die Wahl **Auf diesem Computer**, und kein Audio verlässt ihn. Kann er es nicht, bleibt die Sprache aus, außer Sie wählen **Online-Dienst des Browsers**; dann darf der Browser Audio an den Sprachdienst seines Herstellers senden. Die Einstellungen zeigen, was zutrifft, bevor Sie entscheiden.

## Was es noch nicht tut

- Nur CadCraft hat Zugang. Die anderen sieben Apps folgen, mit denselben Tasten und Tönen.
- Text in einer Zeichnung (eine Notiz, ein Blockname) wird so vorgelesen, wie er geschrieben ist; er wird nie als Anweisung verstanden.
- Erprobt wurde mit synthetischen Prüfungen und den Browser-Tests; Handprüfungen mit NVDA, VoiceOver und einem blinden oder sehbehinderten Tester stehen noch aus. Wenn Sie es ausprobieren, sagen Sie uns bitte, was fehlt.
