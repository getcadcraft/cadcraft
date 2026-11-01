---
title: Dateien: was sich öffnen und speichern lässt
summary: Die Formate, die CadCraft öffnet, speichert und exportiert, was erhalten bleibt oder umgewandelt wird und wohin die Dateien gehen.
keywords: xclip, Clip, XCLIP-Begrenzung, Clip binden, DWG, DXF, PDF, R12, öffnen, speichern, exportieren, importieren, Formate, Umwandlung, Download, speichern unter, DXFOUT, Format, QSAVE, Xref, XATTACH, verknüpfte Zeichnung, externe Referenz, binden, neu laden, lösen
from: 6d68b34e
---

## Auf einen Blick

| Format | Öffnen | Speichern | Hinweise |
|---|---|---|---|
| DXF (Text, jede Version) | Ja | Ja, als DXF R12 oder DXF 2000 | Binäres DXF wird abgelehnt: zuerst als Text-DXF speichern. |
| DWG | Ja | Ja, als DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 oder 2018) | Gelesen und geschrieben von CadCrafts eigener DWG-Bibliothek (AutoCAD-Dateien R13 bis 2018). Ihre DWG wird nie verändert. Beschädigte Dateien oder Versionen, die der Leser nicht beherrscht, werden mit einer Meldung abgelehnt. |
| PDF | Holt eine Seite herein: als Unterlage oder als Objekte ([PDF-Unterlagen](topic:pdf-underlay)) | Ja, durch Plotten | Vektor-PDF eines Blatts oder des Modells in einem Maßstab. |

Jede Zeichnung, die Sie öffnen (oder mit {{ui:Neu}} beginnen), bekommt einen eigenen Tab über dem Zeichenbereich; eine neue Zeichnung, die noch niemand angefasst hat, wird verwendet, statt einen Tab hinzuzufügen. Einen Tab anklicken, um zu wechseln, sein {{ui:×}}, um ihn zu schließen (CadCraft fragt zuerst, wenn es nicht gespeicherte Änderungen gibt), oder die geöffneten Zeichnungen nebeneinander anordnen: siehe [Den Bildschirm teilen](topic:split-screen).

## Eine Zeichnung öffnen

- {{key:Mod+O}} drücken, auf {{ui:Öffnen}} klicken oder `OPEN` eingeben und dann die Datei wählen.
- Oder eine `.dwg`- oder `.dxf`-Datei auf den Zeichenbereich ziehen.

Die Datei wird in Ihrem Browser gelesen. Sie wird nirgendwohin hochgeladen. Der Verlauf meldet, wie viele Objekte und Layer hereingekommen sind und wie lange es gedauert hat, und der Abschnitt {{ui:Zeichnung}} des linken Bereichs zeigt das Format, zum Beispiel „DWG 2018 (AC1032)“.

Der DWG-Leser ist Teil von CadCraft und wird mit der ersten DWG geholt, die Sie nach dem Laden der Seite öffnen (einige hundert KB), es gibt also keinen separaten Download, auf den Sie warten müssten. Er liest die Datei im Hintergrund, sodass die Seite reagiert, während eine große DWG öffnet.

### Was hereinkommt

- Linien, Bögen, Kreise, Polylinien (mit Bogensegmenten), Ellipsen, Punkte, Text und mehrzeiliger Text, Solids, Schraffuren (die Standardmuster als ihre Linien gezeichnet, andere als flacher Ton), Blockreferenzen mit ihren Attributen (Werte, die Sie bearbeiten können; siehe [Blockattribute](topic:attributes)), Bemaßungen und Layouts mit ihren Ansichtsfenstern.
- Splines kommen als Splines herein (Grad, Kontrollpunkte, Knoten, Gewichte, Anpasspunkte); siehe [Splines und Polylinien](topic:splines).
- Multi-Führungslinien mit einer Führungslinie und Text kommen als bearbeitbare CadCraft-Multi-Führungslinien herein (siehe {{cmd:MLEADER}}). Andere (mit einem Block, mehreren Führungslinien oder gekrümmten Linien) werden so gezeichnet, wie das andere Programm sie gezeichnet hat, und bewegen sich als eine Einheit; der Verlauf sagt, wie viele.
- Bilder (Rasterbilder) erscheinen als Rahmen mit dem Dateinamen des Bilds, bis Sie CadCraft mit {{cmd:IMAGE}} die Datei geben: siehe [Bilder in einer Zeichnung](topic:pictures#show-the-pictures-a-dwg-uses). Abdeckungen erscheinen als ihr Rahmen, und was darunter liegt, bleibt sichtbar.
- Tabellen in einer DWG kommen so herein, wie das andere Programm sie gezeichnet hat.
- 3D-Flächen im Modellbereich kommen auf den Tab {{ui:3D}}, nicht als 2D-Objekte; ebenso die in Blöcken, einmal je Blockreferenz im Modell. In einem Block und auf einem Blatt werden sie zusätzlich flach als Umrisse gezeichnet. Siehe [In 3D modellieren](topic:3d-solids).
- Layer behalten ihre Farbe sowie die Einstellungen für ein, gefroren, gesperrt und plotten. DEFPOINTS wird nie geplottet.
- Bemaßungen werden zu echten, bearbeitbaren CadCraft-Bemaßungen, wo ihre Punkte gelesen werden können. Zuerst werden sie genau so gezeigt, wie das andere Programm sie gezeichnet hat; sobald Sie eine ändern, zeichnet CadCraft sie in seinem eigenen Stil neu.
- Jedes Layout wird zu einem Blatt-Tab. Im anderen Programm hat jedes Layout ein verstecktes erstes Ansichtsfenster, das das Blatt selbst ist; CadCraft lässt dieses weg.

### Was noch nicht hereinkommt

Alles, was CadCraft nicht zeichnen kann, wird gezählt, nicht geraten. Das Feld „Über diese Datei“ im linken Bereich listet es als „Noch nicht angezeigt:“ auf, gefolgt von jeder Objektart und ihrer Anzahl. Typische Fälle sind Tabellen in einer DXF, Netze und 3D-Volumenkörper in Blöcken. 3D-Volumenkörper, Regionen und Körper im Modellbereich erscheinen auf dem Tab 3D (siehe [In 3D modellieren](topic:3d-solids#solids-from-other-programs)). In der Datei verdrehte Ansichtsfenster erscheinen wie dort verdreht und behalten beim Speichern ihre Verdrehung; ebenso das aktuelle BKS, die benannten BKS und eine gedrehte Ansicht.

Text wird in einer einzigen Schrift im Stil von Helvetica gezeichnet. Eine Beschriftung, die in der schmaleren Schrift des Ausgangsprogramms in eine Zeile passt, kann in CadCraft auf zwei Zeilen umbrechen.

## Speichern

Es gibt drei Wege zu speichern. Jeder lädt eine Kopie herunter.

- **Speichern**: {{key:Mod+S}} drücken, auf {{ui:Speichern}} klicken oder `SAVE` (auch `QSAVE`) eingeben. Es speichert im Format der Zeichnung: DWG, wenn Sie eine DWG geöffnet haben, DXF bei einer DXF. Eine DWG behält die Version, in der sie kam (eine 2018-Datei wird als 2018 gespeichert). Eine neue Zeichnung verwendet das Format und die DWG-Version, die Sie zuletzt unter Speichern unter in diesem Browser gewählt haben; haben Sie nie eines gewählt, DWG im Format AutoCAD 2000.
- **Speichern unter**: {{key:Mod+Shift+S}} drücken, auf {{ui:Speichern unter}} klicken oder `SAVEAS` eingeben. Der Dialog {{ui:Kopie speichern unter}} bietet {{ui:DWG}} mit einer Liste {{ui:Version}} (AutoCAD 2018, 2013, 2010, 2007, 2004 oder 2000), {{ui:DXF R12}} und {{ui:DXF 2000}}, jeweils mit dem Dateinamen, den es vergibt, und mit bereits gewähltem aktuellem Format und aktueller Version der Zeichnung. Auf {{ui:Speichern}} klicken zum Herunterladen oder auf {{ui:Abbrechen}} (oder {{key:Esc}}), um nichts zu speichern; der Verlauf sagt dann „Nicht gespeichert.“ Ihre Wahl bleibt: {{key:Mod+S}} verwendet sie fortan für diese Zeichnung, und neue Zeichnungen in diesem Browser beginnen damit.
- **DXFOUT**: `DXFOUT` eingeben. Es lädt immer eine DXF-R12-Kopie herunter, und das nächste {{key:Mod+S}} speichert weiterhin im eigenen Format der Zeichnung.

Der Browser lädt `<Zeichnungsname>.dwg` oder `<Zeichnungsname>.dxf` herunter. Jedes Speichern ist ein **neuer Download**; die geöffnete Datei wird nie überschrieben oder verändert. Der Verlauf bestätigt es, zum Beispiel „Kopie als Plan.dwg (DWG (AutoCAD 2018)) gespeichert. Ihr Original Plan.dxf ist unverändert.“ Bei einer DXF steht dort „(DXF R12, öffnet sich in jedem CAD-Programm)“. Die Zeilen darunter listen alles auf, was sich unterwegs geändert hat.

Läuft CadCraft in der Desktop-App, funktioniert das Speichern wie in anderen Desktop-Programmen: {{key:Mod+S}} schreibt die Zeichnung in die geöffnete Datei zurück, in ihrem eigenen Format und ihrer Version, und der Verlauf sagt, wo sie gespeichert wurde. {{ui:Speichern unter}} und die Exporte zeigen den Speicherdialog des Systems, und eine `.dwg`-, `.dxf`- oder `.ccsheets`-Datei, die Sie doppelklicken, öffnet sich in CadCraft.

Für ein PDF stattdessen plotten (siehe unten).

## Was eine DWG behält und ändert

CadCraft schreibt die DWG selbst, in Ihrem Browser, mit derselben DWG-Bibliothek, mit der es liest. Wählen Sie die Version unter Speichern unter: Das Format AutoCAD 2000 (Dateiversion AC1015) öffnet sich in den meisten Programmen, auch alten; die neueren Formate (2004, AC1018, bis 2018, AC1032) behalten zusätzlich True Colors. Es wird nichts hochgeladen, und das Speichern einer DWG funktioniert offline.

Jede Version wird geprüft, indem die gespeicherten Dateien mit den DWG-Lesern dreier anderer Programme und mit CadCraft selbst zurückgelesen werden. Eine CadCraft-DWG wurde noch nicht in AutoCAD selbst geöffnet.

### Was eine DWG behält

- Linien, Bögen, Kreise, Ellipsen, Punkte und Polylinien mit ihren Bogensegmenten.
- Einzeiliger Text mit Ausrichtung und Breitenfaktor.
- Mehrzeiliger und umbrechender Text, als mehrzeiliger Text. Das andere Programm bricht ihn aus derselben Breite neu um.
- Objektfarben: VonLayer, VonBlock, die 255 Standardfarben und True Colors im Format 2004 und später.
- Layer mit ihrer Farbe, ihrem Linientyp, ihrer Linienstärke und ihren Einstellungen für ein, gefroren, gesperrt und plotten; die eigenen Linientypen, Linienstärken und Linientypfaktoren der Objekte, die Linientypmuster und der Linientypfaktor der Zeichnung.
- Die Zeichnungseinheiten und das Längenformat (dezimal, Fuß und Zoll, Brüche …).
- Blöcke mit ihrem Basispunkt und ihren Attributdefinitionen, auch unsichtbaren, konstanten und voreingestellten.
- Blockreferenzen mit Skalierung, Drehung und Attributwerten.
- Vollflächen und gemusterte Schraffuren mit Muster, Maßstab und Winkel (die eigenen Linien des Musters, damit andere Programme dieselben Linien zeichnen wie CadCraft).
- Bemaßungen, als echte Bemaßungen: Andere Programme messen sie beim Strecken neu. Jede behält ihre eigenen Einstellungen (Texthöhe, Pfeilgröße, Dezimalstellen, Längenformat) und ihren Text und trägt die gezeichnete Kopie, die jede DWG-Bemaßung hat.
- Blätter (Layouts): jedes Blatt mit Papierformat und Einheiten, dem, was darauf gezeichnet ist, und seinen Ansichtsfenstern mit Ansicht und Maßstab.
- Benannte Ansichten.
- Multi-Führungslinien, als Multi-Führungslinien.
- Layer- und Blocknamen, wie Sie sie getippt haben, in Groß- und Kleinschreibung. (DXF R12 schreibt sie in Großbuchstaben.)

### Was eine DWG ändert

Jedes davon wird nach dem Speichern im Verlauf aufgelistet, wenn es Ihre Zeichnung betrifft.

| In CadCraft | In der gespeicherten DWG |
|---|---|
| True Colors (mit der Farbauswahl gewählt), im Format 2000 | Die nächstliegende Standardfarbe: Das Format 2000 hat nur die 255. Als 2004 oder später speichern, um sie zu behalten |
| Benannte Ansichten eines Blatts | Ansichten im Papierbereich: Eine DWG sagt nicht, welches Blatt, deshalb gehören sie beim erneuten Öffnen in CadCraft zum ersten Blatt |
| Mehrzeiliger Text mit Breitenfaktor | Normale Zeichenbreite: In einer DWG gilt der Breitenfaktor nur für einzeiligen Text |
| Layer- oder Blocknamen mit Zeichen, die DWG nicht erlaubt | Geändert: Ein Name aus einer verknüpften Zeichnung wie `Base\|Walls` wird zu `Base$0$Walls` (so benennt das Binden einer verknüpften Zeichnung), andere Zeichen werden zu `_` |

### Warum R12, und was umgewandelt wird

Beim Speichern als DXF schreibt CadCraft DXF R12, die Version, die jedes CAD-Programm öffnen kann. Sie ist älter als einige Funktionen, daher werden manche Dinge einfacher geschrieben:

| In CadCraft | In der gespeicherten R12-Datei |
|---|---|
| Mehrzeiliger Text | Ein Textobjekt je Zeile |
| Ellipsen | Polylinien, die der Ellipse folgen |
| Schraffuren (aus geöffneten Dateien) | Nur ihre Umrisse |
| True Colors (mit der Farbauswahl gewählt) | Die nächstliegende Standardfarbe |
| Linienstärken und eigene Linientypfaktoren der Objekte | Weggelassen: R12 kennt beides nicht (Linientypen bleiben erhalten) |
| Layer- und Blocknamen | In Großbuchstaben geschrieben; Leerzeichen und andere Zeichen werden zu `_`, und Namen werden auf 31 Zeichen gekürzt („Title block“ wird zu `TITLE_BLOCK`) |
| Layer, die nicht plotten sollen | Andere Programme plotten sie (CadCraft merkt sich die Einstellung, wenn die Zeichnung ein Blatt hat) |
| Bemaßungen | Echte Bemaßungen mit ihrem eigenen gezeichneten Block, damit andere Programme sie so zeigen, wie Sie sie sehen |
| Multi-Führungslinien | Die Linien, die Pfeilspitze und der Text, die sie zeichnen |
| Benannte Ansichten | Erhalten, mit Namen in Großbuchstaben; die Ansichten eines Blatts kommen auf dem ersten Blatt zurück |
| Mehrere Blätter | Das erste Blatt ist der Papierbereich, den jedes Programm zeigt; die anderen bleiben als Blöcke namens `CCLAYOUT_1`, `CCLAYOUT_2` … erhalten, die CadCraft beim Öffnen der Datei wieder in Blätter verwandelt |

Der Verlauf listet jedes davon auf, das Ihre Zeichnung betraf.

:::tip
Um mehrere Tage an einer Zeichnung weiterzuarbeiten, als DXF speichern und beim nächsten Mal diese DXF öffnen. Alles, was CadCraft zeichnen kann, übersteht den Hin-und-zurück-Weg, auch Bemaßungen, Blöcke und alle Blätter.
:::

## Verknüpfte Zeichnungen (externe Referenzen)

{{cmd:XATTACH}} (`XA`, oder {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Eine Zeichnung verknüpfen (Xref)}}) verknüpft eine andere DWG oder DXF: die Datei wählen, dann klicken, wohin sie kommt ({{key:Enter}} setzt sie auf 0,0). Sie kommt als ein nach der Datei benannter Block herein, im richtigen Maßstab, wenn die beiden Zeichnungen unterschiedliche Einheiten haben. Ihre Layer und Blöcke behalten ihre Namen mit dem Namen der Verknüpfung davor — `Plan|Walls`, `Plan|Door` —, damit sie sich nie mit Ihren mischen: Die verknüpften Layer lassen sich wie Ihre eigenen ein- und ausschalten, frieren oder sperren. Eine Verknüpfung ist schreibgeschützt: Die andere Zeichnung ändern und neu laden. Was Sie an den Layern einer Verknüpfung einstellen (Farbe, Linientyp, Linienstärke, ein/aus, frieren, sperren, plotten), bleibt erhalten, wenn Sie sie neu laden, wenn Sie die Zeichnung als DWG speichern, solange die Verknüpfung noch eine Verknüpfung ist, und wenn eine andere Zeichnung diese verknüpft.

{{cmd:XREF}} (`XR`): `?` listet die Verknüpfungen auf (geladen oder nicht, welche Datei, wie viele Referenzen); `A` verknüpft; `R` lädt eine aus ihrer Datei neu (die Datei erneut wählen: Der Browser kommt nicht von selbst an Ihre Ordner); `B` bindet eine (sie wird zu gewöhnlichen Blöcken und Layern namens `Plan$0$Walls`); `D` löst eine (ihre Referenzen und Layer verschwinden). Jedes ist ein Schritt für Rückgängig.

{{cmd:XCLIP}} (`XC`) beschneidet Blockreferenzen und Verknüpfungen: wählen, `N` für eine neue Begrenzung, dann `R` und zwei Ecken oder `P` und die Punkte eines Polygons ({{key:Enter}} schließt es); `D` entfernt den Clip. Nur was innen liegt, wird gezeigt und geplottet, und der Clip bewegt sich mit der Referenz. DWG und DXF 2000 behalten Clips; DXF R12 speichert die Referenz vollständig und sagt das. Wenn Sie eine Verknüpfung mit beschnittenen Referenzen binden, fragt {{cmd:XREF}} `B`: `A` bindet alles, `C` behält nur den beschnittenen Teil jeder Referenz (Linien und Bögen werden an der Begrenzung geschnitten; Texte und verschachtelte Blöcke bleiben, wenn ihr Einfügepunkt innen liegt).

Eine Zeichnung, die Sie öffnen, kann Dateien verknüpfen, die CadCraft nicht sehen kann: Es sagt, wie viele nicht geladen sind. Mit {{cmd:XREF}}, `R` und der Wahl jeder Datei sehen Sie sie.

Beim Speichern wird eine geladene Verknüpfung in die Datei **gebunden** (andere Programme sehen gewöhnliche Blöcke und Layer namens `Plan$0$…`), und der Verlauf sagt das. Eine nicht geladene Verknüpfung bleibt eine Verknüpfung zu ihrer Datei, in DWG und DXF.

## In 3D öffnen

{{ui:Ansicht}} › {{ui:Mehr}} › {{ui:In ModelCraft öffnen}} ({{cmd:OPENIN3D}}) öffnet die Zeichnung in der 3D-Modellier-App in einem neuen Tab, als DWG, ohne sie hochzuladen. Dort vorgenommene Änderungen bleiben dort; speichern Sie sie dort. Der Menüeintrag erscheint nur dort, wo diese App eine übergebene Zeichnung annehmen kann.

## Ein PDF plotten

{{key:Mod+P}} drücken, auf {{ui:Plotten}} klicken oder `PLOT` eingeben. Das PDF wird im Browser erzeugt und heruntergeladen oder zum Drucken in einem neuen Tab geöffnet. Siehe [In PDF plotten](topic:plot-pdf).

## Wohin die Dateien gehen

Jedes Speichern und jedes Plotten ist ein Download, die Dateien landen also dort, wo Ihr Browser Downloads ablegt: meist im Ordner Downloads. Um jedes Mal einen Ordner zu wählen, die Download-Einstellung Ihres Browsers ändern; [Browser und Computer](common:browsers) zeigt, wo.

Nichts, was Sie öffnen oder speichern, wird an uns gesendet. Siehe [Wohin Ihre Dateien gehen](common:your-files).

## PLN- und PLA-Projektdateien

CadCraft öffnet DWG- und DXF-Zeichnungen, nicht die eigenen Dateien von Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Beim Öffnen einer solchen Datei erfahren Sie, was sie ist. Speichern Sie in Archicad die benötigten Ansichten oder Layouts als DWG und öffnen Sie diese hier, oder exportieren Sie das Modell als IFC und öffnen Sie es in BimCraft. Wo BimCraft die Datei übernehmen kann, bietet CadCraft {{ui:In BimCraft öffnen}} an.

## Wenn die Seite sich schließt, bevor Sie speichern

CadCraft hält von jeder geänderten Zeichnung einen Augenblick nach dem Ende der Bearbeitung eine Kopie, nur in diesem Browser. Schließt sich der Tab, hält der Browser an oder startet der Computer neu, bevor Sie speichern, fragt CadCraft beim nächsten Start **Ihre Arbeit wiederherstellen?**: {{ui:Wiederherstellen}} öffnet die Zeichnung wieder, ungespeichert, in einem eigenen Tab. Das Speichern der Zeichnung entfernt ihre Kopie. Siehe [Ihre Arbeit wiederherstellen](common:recover).

## Online und offline

Öffnen, Zeichnen, Speichern (DWG und DXF) und Plotten finden alle auf Ihrem Computer statt und funktionieren daher ohne Verbindung, sobald CadCraft geladen ist.

Um CadCraft ganz ohne Verbindung zu nutzen, klicken Sie online in der Leiste oben auf {{ui:Für Offline speichern}}. Die Beschriftung zählt hoch („Speichere 40 von 212“) und endet bei „Offline bereit“. Die gespeicherte Kopie enthält den DWG-Leser, insgesamt etwa 5 MB, sodass **DWG-Dateien nach dem Speichern auch offline öffnen**. Auf die Schaltfläche erneut klicken für {{ui:Erneut speichern (neueste Version holen)}} oder {{ui:Offline-Kopie entfernen}}. „Speichern nicht möglich“ heißt, dass einige Dateien nicht heruntergeladen wurden: Verbindung prüfen und zum erneuten Versuch klicken. „Offline nicht verfügbar“ heißt, dass dieses Browserfenster keine Kopie behalten kann (private Fenster und einige verwaltete Computer).

Ohne gespeicherte Kopie wird der DWG-Leser beim ersten Öffnen einer DWG nach dem Laden der Seite geholt, sodass das Öffnen einer DWG offline scheitern kann; DXF-Dateien brauchen ihn nie. Laden Sie die Seite offline nicht neu, wenn CadCraft nicht gespeichert ist.

Einzelheiten unter [Offline arbeiten](common:offline).

:::offline
Sie sind jetzt offline. Zeichnungen werden als DWG oder DXF gespeichert und normal geplottet, und DXF-Dateien öffnen sich. DWG-Dateien öffnen sich, wenn CadCraft „Offline bereit“ zeigt oder der DWG-Leser in diesem Tab bereits geladen wurde.
:::

## Abhängigkeiten in Dateien

Abhängigkeiten und Parameter (siehe [Eine Zeichnung mit Abhängigkeiten festlegen](topic:constraints)) werden sowohl in DWG als auch in DXF gespeichert. Jedes festgelegte Objekt trägt eine kleine CadCraft-Notiz (erweiterte Daten), und ein ungenutzter Block namens `CADCRAFT_PARAMETRIC` enthält die Abhängigkeiten und die Parametertabelle. Andere Programme öffnen die Zeichnung normal und ignorieren beides; sie können den ungenutzten Block beim Bereinigen löschen. Die Notizen verweisen auf Objekte über deren eigenen Schlüssel, nicht über die Handles der Datei, sodass ein Programm, das Handles neu nummeriert, sie nicht kaputt macht. Hat ein anderes Programm ein festgelegtes Objekt gelöscht oder geändert, verwirft CadCraft die Abhängigkeiten daran beim Öffnen der Datei und sagt, wie viele. Eine Datei ohne sie öffnet sich ohne Abhängigkeiten.

Eine aus einem Bauteilmodellierer exportierte Skizze (`.json`) öffnet sich ebenfalls: siehe [Skizzen zu und von anderen Bauteilmodellierern übertragen](topic:solidworks-sketches).

## Noch nicht vorhanden

- Multi-Führungslinien als Multi-Führungslinien-Objekte in einer gespeicherten DXF (R12 kennt keine: Sie werden als das gespeichert, was sie zeichnen).
- Bilder in einer gespeicherten DXF (sie werden als ihre Rahmen gespeichert; DWG behält sie als Bilder) und Abdeckungen, die verbergen, was darunter liegt.
- Das Speichern einer neueren DXF-Version als 2000.
- Speichern in der Cloud und Synchronisieren zwischen Computern.

Die vollständige Liste unter [Noch nicht vorhanden](topic:not-built-yet).
