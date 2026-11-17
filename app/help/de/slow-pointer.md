---
title: Der Zeiger springt oder hinkt über der Zeichnung
summary: Was zu tun ist, wenn das Fadenkreuz nicht gleichmäßig der Maus folgt, auf einem älteren oder langsameren Computer.
keywords: Cursor springt, Zeigerverzögerung, Fadenkreuz langsam, ruckelnder Cursor, alter Computer, alte Grafikkarte, integrierte Grafik, Hardwarebeschleunigung, flüssigerer Zeiger, langsamer Laptop
from: 39dc9057
---

CadCraft läuft im Browser (auch CadCraft Studio ist eine Browseransicht), daher ist nichts darin auf eine bestimmte Grafikkarte ausgelegt. Das Fadenkreuz wird von der App gezeichnet. Es kann sich daher nur so schnell bewegen, wie die App einen Frame zeichnen kann.

## CadCraft die Zusatzeffekte reduzieren lassen

1. Öffnen Sie {{ui:Einstellungen}} (das Zahnrad oben rechts) und bleiben Sie auf der Registerkarte {{ui:CadCraft}}.
2. Wählen Sie {{ui:Flüssigerer Zeiger auf langsameren Computern}}.
3. Wählen Sie {{ui:Ein}}.

Bei eingeschalteter Option wird anstelle des gezeichneten Fadenkreuzes und Auswahlkästchens der eigene Mauszeiger Ihres Computers verwendet (auch das Vollbild-Fadenkreuz). Das Objekt unter dem Zeiger leuchtet auf, wenn der Zeiger ruht, statt während er sich bewegt. Objektfang, Spur und Gummiband funktionieren wie bisher.

{{ui:Automatisch}} ist die Einstellung, mit der CadCraft startet: Sie beobachtet, wie lange Frames beim Bewegen des Zeigers brauchen, und schaltet diese Option selbstständig ein, wenn sie einige Sekunden langsam bleiben. Dabei wird Sie einmal benachrichtigt. {{ui:Aus}} behält das gezeichnete Fadenkreuz bei, unabhängig von der Geschwindigkeit.

## Wenn es immer noch langsam ist

- Prüfen Sie, ob die Hardwarebeschleunigung in Ihrem Browser eingeschaltet ist: Öffnen Sie `chrome://gpu` (oder `edge://gpu`) in einem neuen Tab. Wenn in den ersten Zeilen "Software only" oder "Disabled" steht, zeichnet der Browser ohne die Grafikkarte. Eine Aktualisierung des Grafiktreibers bringt es oft wieder in Ordnung.
- Schließen Sie andere speicherintensive Tabs und Programme, und probieren Sie ein kleineres Browserfenster.
- Melden Sie es uns über {{ui:Hilfe}}, {{ui:Problem melden}}: Geben Sie an, ob Sie den Browser oder CadCraft Studio nutzen, welche Version Sie haben und was auf der GPU-Seite steht.
