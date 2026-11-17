---
title: Menüs, Tasten und Maus
summary: Wählen Sie einen Menüstil, der zu Ihrer gewohnten Arbeitsweise passt, geben Sie jedem Befehl eine eigene Taste oder eine Taste, die einen Befehl eingibt, verschieben Sie Befehle zwischen den Registerkarten des Menübands und legen Sie fest, was das Rad und die Maustasten tun.
keywords: Menüstil, Menüs, Menüband, Symbolleiste, Befehlszeile, Tastenkürzel, Hotkeys, Tasten, anpassen, neu belegen, Kurzbefehle, Textkürzel, Maus, Rad, umkehren, Zoomrichtung, mittlere Taste, rechte Taste, Pan, exportieren, importieren, Wechsel, vertraut, Klassisches Zeichnen
from: 8bbf4f88
---

Die Befehle von CadCraft sind gleich, auf welchem Weg Sie sie erreichen, und die Befehlszeile ist immer mit ihren Aliassen da (`L`, `C`, `TR` …). Ein **Menüstil** legt nur fest, wo die Schaltflächen auf dem Bildschirm sitzen, wie sie dort heißen und welche Tasten sie ausführen. Wählen Sie einen in {{ui:Einstellungen}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menüs, Tasten und Maus}}; die Änderung wirkt sofort, und dieser Browser merkt sie sich.

## Die drei Stile

| Stil | Was Sie erhalten |
|---|---|
| {{ui:CadCraft}} | Die eigene Symbolleiste von CadCraft: Datei, Zeichnen, Ändern, Beschriften, Parametrisch, Blöcke, Blätter, Bearbeiten und Ansicht, jeweils mit einem Menü {{ui:Mehr}}. Der Start. |
| {{ui:Klassisches Zeichnen}} | Ein Menüband, angeordnet wie bei klassischen 2D-Zeichenprogrammen: ein Menü {{ui:Datei}} und Schnellschaltflächen, dann die Registerkarten {{ui:Start}} (Zeichnen, Ändern, Beschriftung, Layer, Block, Eigenschaften, Hilfsprogramme, Zwischenablage), {{ui:Einfügen}}, {{ui:Beschriften}}, {{ui:Parametrisch}}, {{ui:Ansicht}}, {{ui:Verwalten}}, {{ui:Ausgabe}} und {{ui:3D}}. Geben Sie Befehle wie gewohnt ein. Die mittlere Taste führt Pan aus; ein Rechtsklick ist {{key:Enter}}, und Ziehen mit der rechten Taste bewirkt nichts. |
| {{ui:Menüband}} | Ein Menüband mit schlichten Aufgaben-Registerkarten: {{ui:Zeichnen}}, {{ui:Ändern}}, {{ui:Beschriften}}, {{ui:Parametrisch}}, {{ui:Blöcke}}, {{ui:Blätter}}, {{ui:Ansicht}}, {{ui:3D}} und {{ui:Werkzeuge}}, mit einem Menü {{ui:Datei}} und Schnellschaltflächen rechts. Die mittlere und die rechte Taste führen Pan aus, wie im eigenen Stil von CadCraft. |

Jeder Stil behält die Tasten von CadCraft bei: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, und {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} für die Zeichenhilfen. Buchstaben sind nie Tasten: CadCraft gibt sie in die Befehlszeile ein.

Die Menübänder enthalten auch die Werkzeuge des Layer-Panels und die Zeichenhilfen der Statusleiste. Die Registerkarte {{ui:3D}} füllt sich, sobald die 3D-Registerkarte unter der Zeichnung geöffnet wurde; ein 3D-Werkzeug, das auf der Registerkarte „Modell“ gewählt wird, öffnet zuerst die 3D-Registerkarte, und ein 2D-Werkzeug, das auf der 3D-Registerkarte gewählt wird, geht zuerst zur Registerkarte „Modell“ zurück.

:::tip
Eine Taste, die zum eigenen Layout von CadCraft gehört, aber in Ihrem Stil einem anderen Befehl zugewiesen wurde, tut nichts, und die Statusleiste zeigt, wohin ihr Befehl gewandert ist („In „Meine Tasten“ liegt Ortho auf Ctrl+Alt+O“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} und die Pfeiltasten behalten immer ihre Bedeutung. Während ein Befehl läuft oder während Buchstaben in die Befehlszeile getippt werden, gehören die Tasten der Befehlszeile.
:::

## Eigene Belegung

1. Wählen Sie den Stil, der Ihren Wünschen am nächsten kommt, und klicken Sie auf {{ui:Anpassen…}}.
2. Suchen Sie unter {{ui:Tasten und Menüs}} einen Befehl (das Suchfeld hilft). Klicken Sie auf {{ui:Taste hinzufügen}} und drücken Sie die Taste. Klicken Sie auf eine Taste, um sie zu entfernen.
3. Bei einem Menüband verschiebt {{ui:Wo er steht}} den Befehl auf eine andere Registerkarte und einen anderen Bereich, in das Menü {{ui:Datei}} oder zu {{ui:Nur Tasten}}.
4. Stellen Sie unter {{ui:Maus}} das Rad und die Tasten ein, mit denen der Ausschnitt verschoben wird.
5. Geben Sie ihm einen Namen und klicken Sie auf {{ui:Speichern}}.

Das Speichern eines eingebauten Stils erzeugt Ihre eigene Kopie („Mein Klassisches Zeichnen“); der eingebaute ändert sich nie. Eine Taste, die zwei Befehlen zugewiesen ist, wird rot angezeigt und muss korrigiert werden, bevor Sie speichern können.

## Tasten, die einen Befehl eingeben

{{cmd:SHORTCUTS}} (Ansicht › Mehr › {{ui:Tastenkürzel…}}) gibt einer Taste eine ganze Befehlszeile, zum Beispiel {{key:Ctrl+Alt+L}} für `LINE` oder {{key:F9}} für `ZOOM E`. Diese Tasten gehören zum verwendeten Stil: Beim ersten Öffnen dieser Version werden die Tasten, die Sie in einer älteren Version angelegt haben, einmalig in Ihren eigenen Stil „Meine CadCraft-Tasten“ übernommen und funktionieren wie zuvor. Beim Exportieren des Stils werden sie mitgenommen.

## Maus

- **Mausrad**: {{ui:Nach oben scrollen vergrößert}} (Standard) oder {{ui:Nach oben scrollen verkleinert}}, und wie schnell. Eine Trackpad-Geste zum Zusammen- oder Auseinanderziehen zoomt immer in die Richtung, in der sich Ihre Finger bewegen.
- **Ausschnitt verschieben mit**: der mittleren Taste, der rechten Taste oder beiden. Ein Rechtsklick ohne Ziehen ist immer {{key:Enter}}. Die linke Taste wählt und zeichnet in CadCraft immer; sie hier anzukreuzen ändert nichts.
- **Ziehen in den 3D-Ansichten**: Die 3D-Registerkarte behält in jedem Stil ihre eigenen Schaltflächen (links: Orbit; mittlere und rechte: Pan).

## Mitnehmen

{{ui:Exportieren}} speichert den verwendeten Stil als kleine `.ccinput.json`-Datei; {{ui:Importieren…}} fügt eine solche Datei hinzu, etwa von einem anderen Computer oder aus dem Team. Eine importierte Datei kann nur auf Befehle von CadCraft verweisen: Alles andere darin wird weggelassen und in der Statusleiste gezählt. {{ui:Diesen Stil löschen}} entfernt einen eigenen.

:::note
Diese Einstellungen bleiben in diesem Browser. {{ui:Diesen Stil in jeder App verwenden}} unter den Stilkarten lässt jede App im passenden Stil öffnen (ihre eigene Symbolleiste, ein Menüband oder Klassisches Zeichnen), mit den Änderungen, die Sie in jeder App gemacht haben. CadCraft hat keinen Menüleisten-Stil: Wenn für alle Apps die Menüleiste einer anderen App gewählt wird, behält CadCraft seine eigene Symbolleiste.
:::

Siehe auch: [Tastatur und Maus](topic:keyboard) · [Einstellungen von CadCraft](topic:settings) · [Umstieg von anderer CAD-Software](topic:coming-from) · [Befehlsaliasse](topic:command-aliases)
