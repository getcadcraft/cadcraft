---
title: Stahlprofile und Normteile platzieren
summary: Zeichnen Sie Stahlprofile, Ansichten und 3D-Stäbe aus den veröffentlichten Profiltabellen, platzieren Sie Schrauben, Muttern, Scheiben, Stifte, Lager, Passfedern und Zahnräder nach ihren Normen und listen Sie sie in einer Stückliste auf.
keywords: Stahl, Abschnitt, Profil, Form, W-Profil, Breitflansch, I-Träger, U-Profil, Winkel, HSS, Rohr, IPE, HEA, HEB, UPN, Träger, Stütze, Stab, Ansicht, AISC, EN 10365, Schraube, Mutter, Scheibe, Stift, Passstift, Lager, Passfeder, Nut, Zahnrad, ISO 4017, ISO 4014, ISO 4032, ISO 7089, ISO 2338, ISO 15, DIN 6885, ASME, Normteile, Stückliste, Materialliste, BOM, steelmember, partslist
from: 547c1048
---

Die {{ui:Standard}}-Registerkarte der Bibliothek enthält zwei Arten von Objekten, die direkt hier aus veröffentlichten Tabellen erstellt werden (nichts wird heruntergeladen):

- **Stahlprofile**: 1.335 Größen. W, S, C, L, HSS und Pipe aus der AISC Shapes Database v16.0; IPE, HEA, HEB und UPN aus EN 10365:2017. DetailCraft verwendet dieselbe Tabelle.
- **Normteile**: Sechskantschrauben (ISO 4017), Sechskantbolzen (ISO 4014), Sechskantmuttern (ISO 4032), Unterlegscheiben (ISO 7089), Zoll-Sechskantbolzen und -muttern (ASME B18.2.1 und B18.2.2), Zylinderstifte (ISO 2338), Rillenkugellager (ISO 15), Parallelpassfedern (DIN 6885-1) und Stirnräder (Module nach ISO 54).

Alles hier wird unter CC0 geteilt: Sie können es für alles verwenden, ohne Quellenangabe.

## Ein Stahlprofil platzieren

1. Öffnen Sie die Bibliothek ({{ui:Bibliothek}} in der Gruppe Blöcke oder geben Sie `LIB` ein) und klicken Sie auf die Registerkarte {{ui:Standard}}.
2. Wählen Sie die Familie in der ersten Liste, zum Beispiel {{ui:W-Profile}}. Geben Sie im Suchfeld ein, um die Größen einzugrenzen: `W12` zeigt jedes W12.
3. Wählen Sie bei {{ui:Platzieren als}}:
   - {{ui:Schnitt}}: den Querschnitt, mit seinem Mittelpunkt am Einfügepunkt.
   - {{ui:Erhebung}}: den Stab von der Seite gesehen, so lang wie {{ui:Länge (mm)}} angibt, vom Mittelpunkt seines linken Endes aus.
   - {{ui:3D-Stab}}: ein Volumenkörper auf der 3D-Registerkarte (siehe unten).
4. Klicken Sie auf der Karte der Größe auf {{ui:Platzieren}} und dann auf die Stelle, wohin es soll, wie bei jedem Bibliothekselement.

Ein Schnitt oder eine Ansicht wird zu einem Block. Seine Attribute enthalten die Größe, die Tabelle, aus der sie stammt, die Länge (bei einer Ansicht) und einen Werkstoff, den Sie ausfüllen können.

:::note
S-Profile, U-Profile und UPN werden mit parallelen Flanschen in der mittleren Stärke gezeichnet, Winkel mit rechtwinkligen Ecken. Die echten Flansche sind geneigt und die Ecken abgerundet. W, IPE, HEA und HEB haben ihre Wurzelrundungen, HSS seine Eckrundungen.
:::

## Einen 3D-Stab erstellen

Wählen Sie {{ui:3D-Stab}} und klicken Sie auf {{ui:Platzieren}}, oder geben Sie {{cmd:STEELMEMBER}} (`SMEMBER`) an der Befehlszeile ein:

1. Bei `Section size` drücken Sie {{key:Enter}} für die angezeigte Größe oder geben eine ein, zum Beispiel `HSS6x6x1/4` oder `IPE300`.
2. Klicken Sie den Anfangspunkt und dann den Endpunkt an. Der Stab verläuft zwischen ihnen und steht auf dem Boden.
3. Für eine Stütze geben Sie `C` ein, klicken den Fußpunkt an und geben ihre Höhe ein.

Der Stab ist ein geschlossener Volumenkörper auf der 3D-Registerkarte. Verschieben oder kopieren Sie ihn dort wie jeden anderen Volumenkörper. {{key:Mod+Z}} nimmt ihn wieder weg.

## Ein Normteil platzieren

1. Wählen Sie auf der Registerkarte {{ui:Standard}} die Familie, zum Beispiel {{ui:Sechskantschrauben}}.
2. Für eine Schraube, einen Bolzen, einen Stift oder eine Passfeder geben Sie deren {{ui:Länge (mm)}} ein (bei den Zoll-Familien in Zoll). Für ein Zahnrad geben Sie die {{ui:Zähne}}, die {{ui:Zahnbreite (mm)}} und die {{ui:Bohrung (mm)}} ein. Lassen Sie ein Feld leer, um den üblichen Wert zu verwenden, der darin angezeigt wird.
3. Klicken Sie bei der Größe auf {{ui:Platzieren}} und klicken Sie dann auf die Stelle, wohin es soll.

Schrauben, Bolzen und Stifte werden von der Seite gezeichnet, mit der Auflagefläche des Kopfes am Einfügepunkt. Muttern, Scheiben, Lager und Zahnräder liegen flach, Passfedern von oben. Gewinde werden üblich dargestellt: der Kern als dünne Linie, das Gewindeende als dicke. Zahnräder werden als Kopfkreis, Teilkreis und Fußkreis gezeichnet, nicht Zahn für Zahn.

Der Block jedes Teils enthält seine Art, Norm, Größe, Länge und seinen Werkstoff als Attribute sowie sein Gewicht aus der Nennform in Stahl. Ändern Sie den Werkstoff im Bereich {{ui:Eigenschaften}}.

Dieselben Teile sind auch als Elemente in der Bibliothek enthalten. PartCraft öffnet sie als parametrische Teile ({{ui:Normteil}} in dessen Gruppe Datei).

## Eine Stückliste erstellen

- Klicken Sie in der Bibliothek auf {{ui:Stückliste}}: Sie erhalten jedes Normteil und jedes Stahlprofil der Zeichnung, gruppiert nach Art, Norm, Größe, Länge und Werkstoff, mit Menge und Positionsnummern. {{ui:CSV herunterladen}} speichert sie für eine Tabellenkalkulation.
- Um sie zu zeichnen, geben Sie {{cmd:PARTSLIST}} (`PLIST`) ein, klicken Sie auf die obere linke Ecke der Tabelle und drücken Sie {{key:Enter}} für die übliche Texthöhe oder geben Sie eine ein.

Die Liste wird aus den Attributen der Blöcke gelesen. Sie stimmt daher auch nach dem Speichern der Zeichnung als DWG oder DXF und erneutem Öffnen noch.

## Häufige Fehler

- **„Kein Stahlprofil heißt …“**: Geben Sie die Größe so ein, wie die Registerkarte {{ui:Standard}} sie auflistet: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **Der Stab liegt auf der 3D-Registerkarte, nicht im Grundriss.** {{cmd:STEELMEMBER}} erstellt einen Volumenkörper; öffnen Sie die 3D-Registerkarte, um ihn zu sehen. Um den Stahl im Grundriss zu zeigen, platzieren Sie zusätzlich einen {{ui:Schnitt}} oder eine {{ui:Erhebung}}.
- **Eine Länge außerhalb des Bereichs.** Ein Bolzen muss länger sein als sein Kopf, und eine Passfeder länger als breit. Die Zeile unter den Karten sagt, welcher Wert abgelehnt wurde.
