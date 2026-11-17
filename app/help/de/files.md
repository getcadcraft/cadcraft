---
title: Dateien: was sich öffnen und speichern lässt
summary: Die Formate, die CadCraft öffnet, speichert und exportiert, was erhalten bleibt oder umgewandelt wird und wohin die Dateien gehen.
keywords: xclip, clip, xclip boundary, bind clipped, dwg, dxf, pdf, r12, öffnen, speichern, exportieren, importieren, Formate, Umwandlung, herunterladen, saveas, dxfout, speichern unter, DWG speichern, Format, qsave, xref, xattach, verknüpfte Zeichnung, externe Referenz, binden, neu laden, trennen
from: b8c5778d
---

## Auf einen Blick

| Format | Öffnen | Speichern | Hinweise |
|---|---|---|---|
| DXF (Text oder binär, jede Version) | Ja | Ja, als DXF R12, DXF 2000 oder DXF 2000 (binär) | Eine binäre DXF öffnet sich wie eine Textdatei und wird wieder als binär gespeichert. |
| DWG | Ja | Ja, als DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 oder 2018) | Wird mit der eigenen DWG-Bibliothek von CadCraft gelesen und geschrieben (Dateien von AutoCAD R13 bis 2018). Ihre DWG wird nie verändert. Beschädigte Dateien oder Versionen, die der Leser nicht verarbeitet, werden mit einer Meldung abgelehnt. |
| PDF | Holt eine Seite als Unterlage oder als Objekte ([PDF-Unterlagen](topic:pdf-underlay)) | Ja, durch Plotten | PDF-Vektordatei eines Blatts oder des Modells in einem Maßstab. |

Jede Zeichnung, die Sie öffnen (oder mit {{ui:Neu}} starten), erhält einen eigenen Reiter über dem Zeichenbereich; eine neue Zeichnung, die noch niemand berührt hat, wird stattdessen verwendet. Klicken Sie auf einen Reiter, um zu wechseln, auf sein {{ui:×}}, um ihn zu schließen (CadCraft fragt zuerst, wenn es nicht gespeicherte Änderungen gibt), oder ordnen Sie die geöffneten Zeichnungen nebeneinander an: siehe [Bildschirm teilen](topic:split-screen).

## Eine Zeichnung öffnen

- Drücken Sie {{key:Mod+O}}, klicken Sie auf {{ui:Öffnen}} oder geben Sie `OPEN` ein und wählen Sie dann die Datei.
- Oder ziehen Sie eine `.dwg`- oder `.dxf`-Datei in den Zeichenbereich.

Die Datei wird im Browser gelesen. Sie wird nirgendwohin hochgeladen. Der Verlauf meldet, wie viele Objekte und Layer hereinkamen und wie lange es dauerte, und der Abschnitt {{ui:Zeichnung}} im linken Bereich zeigt das Format, zum Beispiel „DWG 2018 (AC1032)“.

Der DWG-Leser ist Teil von CadCraft und wird mit der ersten DWG geladen, die Sie nach dem Laden der Seite öffnen (einige hundert KB). Es gibt also keinen separaten Download, auf den Sie warten müssen. Er liest die Datei im Hintergrund, sodass die Seite beim Öffnen einer großen DWG weiter reagiert.

Eine DXF wird in Teilen von etwa 4 MB gelesen, nie als ein einziger Textblock, sodass sich auch eine DXF über 512 MB öffnet. Begrenzt wird sie durch den Arbeitsspeicher Ihres Computers: Beim Öffnen einer DXF sollten Sie etwa das 16- bis 20-Fache der Dateigröße einplanen (eine 100 MB große DXF mit rund 690,000 Objekten benötigte in unserem Test etwa 1.5 GB).

### Was hereinkommt

- Linien, Bögen, Kreise, Polylinien (mit Bogensegmenten), Ellipsen, Punkte, Text und mehrzeiliger Text, Volumenkörper, Schraffuren (die Standardmuster als ihre Linien, andere als flache Fläche), Blockreferenzen mit ihren Attributen (Werte, die Sie bearbeiten können; siehe [Blockattribute](topic:attributes)), Bemaßungen und Layouts mit ihren Ansichtsfenstern.
- Splines kommen als Splines herein (Grad, Kontrollpunkte, Knoten, Gewichte, Passpunkte); siehe [Splines und Polylinien](topic:splines).
- Multi-Führungslinien mit einer Führungslinie und Text kommen als bearbeitbare CadCraft-Multi-Führungslinien herein (siehe {{cmd:MLEADER}}). Andere (mit einem Block, mehreren Führungslinien oder gekrümmten Linien) werden so gezeichnet, wie das andere Programm sie gezeichnet hat, und bewegen sich als Ganzes. Der Verlauf nennt, wie viele es sind.
- Bilder erscheinen als Rahmen mit dem Dateinamen des Bildes, bis Sie CadCraft die Datei mit {{cmd:IMAGE}} geben: siehe [Bilder in einer Zeichnung](topic:pictures#show-the-pictures-a-dwg-uses). Abdeckungen erscheinen als ihr Rahmen, und was darunter liegt, bleibt sichtbar.
- Tabellen in einer DWG kommen so herein, wie das andere Programm sie gezeichnet hat.
- 3D-Flächen im Modellbereich kommen auf dem Reiter {{ui:3D}} herein, nicht als 2D-Objekte; ebenso die in Blöcken, einmal pro Blockreferenz im Modell. In einem Block und auf einem Blatt werden sie ebenfalls flach als Umrisse gezeichnet. Siehe [Modell in 3D](topic:3d-solids).
- Layer behalten ihre Farbe sowie ihre Ein-, Frier-, Sperr- und Plot-Einstellungen. DEFPOINTS wird nie geplottet.
- Bemaßungen werden zu echten, bearbeitbaren CadCraft-Bemaßungen, wo ihre Punkte gelesen werden können. Sie werden zuerst genau so angezeigt, wie das andere Programm sie gezeichnet hat; sobald Sie eine ändern, zeichnet CadCraft sie in seinem eigenen Stil neu.
- Jedes Layout wird zu einem Blattreiter. In dem anderen Programm hat jedes Layout ein verborgenes erstes Ansichtsfenster, das das Blatt selbst ist; CadCraft lässt dieses weg.

### Was noch nicht hereinkommt

Alles, was CadCraft nicht zeichnen kann, wird gezählt, nicht geraten. Das Feld „Über diese Datei“ im linken Bereich listet es als „Noch nicht angezeigt:“ mit jeder Objektart und ihrer Anzahl auf. Typische Fälle sind Tabellen in einer DXF, Netze und 3D-Volumenkörper in Blöcken. 3D-Volumenkörper, Regionen und Körper im Modellbereich erscheinen auf dem 3D-Reiter (siehe [Modell in 3D](topic:3d-solids#solids-from-other-programs)). Ansichtsfenster, die in der Datei verdreht sind, werden verdreht angezeigt, wie dort, und behalten ihre Drehung beim Speichern; ebenso das aktuelle BKS, die benannten BKS und eine gedrehte Ansicht.

Text wird in einer Schrift im Stil von Helvetica gezeichnet. Eine Beschriftung, die in der schmaleren Schrift des Originalprogramms auf eine Zeile passt, kann in CadCraft auf zwei Zeilen umbrechen.

## Speichern

Es gibt drei Möglichkeiten zu speichern. Jede lädt eine Kopie herunter.

- **Speichern**: Drücken Sie {{key:Mod+S}}, klicken Sie auf {{ui:Speichern}} oder geben Sie `SAVE` ein (auch `QSAVE`). Es speichert im Format der Zeichnung: DWG, wenn Sie eine DWG geöffnet haben, DXF, wenn Sie eine DXF geöffnet haben. Eine DWG behält die Version, in der sie kam (eine Datei von 2018 wird als 2018 gespeichert). Eine neue Zeichnung verwendet das Format und die DWG-Version, die Sie zuletzt unter {{ui:Speichern unter}} in diesem Browser gewählt haben. Wenn Sie keine gewählt haben, ist es DWG im Format AutoCAD 2000.
- **Speichern unter**: Drücken Sie {{key:Mod+Shift+S}}, klicken Sie auf {{ui:Speichern unter}} oder geben Sie `SAVEAS` ein. Der Dialog {{ui:Kopie speichern unter}} bietet {{ui:DWG}} mit einer Liste {{ui:Version}} (AutoCAD 2018, 2013, 2010, 2007, 2004 oder 2000), {{ui:DXF R12}} und {{ui:DXF 2000}}, jeweils mit dem Dateinamen, den sie vergibt, und dem aktuellen Format und der Version der Zeichnung bereits ausgewählt. Klicken Sie auf {{ui:Speichern}} zum Herunterladen oder auf {{ui:Abbrechen}} (oder {{key:Esc}}), um nichts zu speichern; der Verlauf meldet dann „Nicht gespeichert.“. Ihre Wahl bleibt bestehen: {{key:Mod+S}} verwendet sie ab dann für diese Zeichnung, und neue Zeichnungen in diesem Browser beginnen damit.
- **DXFOUT**: Geben Sie `DXFOUT` ein. Es lädt immer eine Kopie als DXF R12 herunter, und das nächste {{key:Mod+S}} speichert weiterhin im eigenen Format der Zeichnung.

Der Browser lädt `<Zeichnungsname>.dwg` oder `<Zeichnungsname>.dxf` herunter. Jedes Speichern ist ein **neuer Download**; die geöffnete Datei wird nie überschrieben oder verändert. Der Verlauf bestätigt es, zum Beispiel „Kopie gespeichert als Plan.dwg (DWG (AutoCAD 2018)). Ihre Originaldatei Plan.dxf bleibt unverändert.“ Bei einer DXF heißt es „(DXF R12, lässt sich in jedem CAD-Programm öffnen)“. Die Zeilen darunter listen alles auf, was dabei geändert wurde.

Wenn CadCraft in der Desktop-App läuft, funktioniert das Speichern wie in anderen Desktop-Programmen: {{key:Mod+S}} schreibt die Zeichnung zurück in die geöffnete Datei, in ihrem eigenen Format und ihrer Version, und der Verlauf zeigt, wo sie gespeichert wurde. {{ui:Speichern unter}} und die Exporte zeigen den Speichern-Dialog des Systems, und eine `.dwg`-, `.dxf`- oder `.ccsheets`-Datei, die Sie doppelklicken, öffnet sich in CadCraft.

Für ein PDF plotten Sie stattdessen (siehe unten).

## Was eine DWG behält und verändert

CadCraft schreibt die DWG selbst, im Browser, mit derselben DWG-Bibliothek, mit der es liest. Wählen Sie die Version unter {{ui:Speichern unter}}: Das Format AutoCAD 2000 (Dateiversion AC1015) öffnet sich in den meisten Programmen, auch in alten. Die neueren Formate (2004, AC1018, bis 2018, AC1032) behalten zusätzlich Echtfarben. Nichts wird hochgeladen, und das Speichern einer DWG funktioniert offline.

Jede Version wird geprüft, indem die gespeicherten Dateien mit den DWG-Lesern dreier anderer Programme und mit CadCraft selbst zurückgelesen werden. Eine von CadCraft gespeicherte DWG wurde noch nicht in AutoCAD selbst geöffnet.

### Was eine DWG behält

- Linien, Bögen, Kreise, Ellipsen, Punkte und Polylinien mit ihren Bogensegmenten.
- Einzeiliger Text mit seiner Ausrichtung und seinem Breitenfaktor.
- Mehrzeiligen und umgebrochenen Text als mehrzeiligen Text. Das andere Programm bricht ihn anhand derselben Breite erneut um.
- Objektfarben: nach Layer, nach Block, die 255 Standardfarben und Echtfarben ab dem Format 2004.
- Layer mit ihrer Farbe, ihrem Linientyp, ihrer Linienstärke und ihren Ein-, Frier-, Sperr- und Plot-Einstellungen; eigene Linientypen, Linienstärken und Linientypfaktoren der Objekte, die Linientypmuster und der Linientypfaktor der Zeichnung.
- Die Zeicheneinheiten und das Längenformat (dezimal, Fuß und Zoll, Brüche …).
- Blöcke mit ihrem Basispunkt und ihren Attributdefinitionen, einschließlich unsichtbarer, konstanter und voreingestellter.
- Blockreferenzen mit ihrem Maßstab, ihrer Drehung und ihren Attributwerten.
- Vollflächen und gemusterte Schraffuren mit ihrem Muster, Maßstab und Winkel (die eigenen Linien des Musters, sodass andere Programme dieselben Linien zeichnen wie CadCraft).
- Bemaßungen als echte Bemaßungen: Andere Programme messen sie neu, wenn sie gestreckt werden. Jede behält ihre eigenen Einstellungen (Texthöhe, Pfeilgröße, Dezimalstellen, Längenformat) und ihren Text und enthält die gezeichnete Kopie, die jede DWG-Bemaßung hat.
- Blätter (Layouts): jedes Blatt mit seiner Papiergröße und seinen Einheiten, was darauf gezeichnet ist, und seine Ansichtsfenster mit Ansicht und Maßstab.
- Benannte Ansichten.
- Multi-Führungslinien als Multi-Führungslinien.
- Layer- und Blocknamen so, wie Sie sie eingegeben haben, mit Groß- und Kleinschreibung. (DXF R12 schreibt sie in Großbuchstaben.)

### Was eine DWG verändert

Jeder dieser Punkte wird nach dem Speichern im Verlauf aufgeführt, wenn er auf Ihre Zeichnung zutrifft.

| In CadCraft | In der gespeicherten DWG |
|---|---|
| Echtfarben (mit dem Farbwähler gewählt), im Format 2000 | Die nächstliegende Standardfarbe: Das Format 2000 hat nur die 255. Speichern Sie als 2004 oder später, um sie zu behalten |
| Benannte Ansichten eines Blatts | Papierbereich-Ansichten: Eine DWG sagt nicht, welches Blatt; wenn CadCraft die Datei erneut öffnet, gehören sie zum ersten Blatt |
| Mehrzeiliger Text mit Breitenfaktor | Normale Buchstabenbreite: In einer DWG gilt der Breitenfaktor nur für einzeiligen Text |
| Layer- oder Blocknamen mit Zeichen, die DWG nicht erlaubt | Geändert: Ein Name aus einer verknüpften Zeichnung wie `Base\|Walls` wird zu `Base$0$Walls` (so benennt es das Binden einer verknüpften Zeichnung), und andere Zeichen werden zu `_` |

### Warum R12, und was sich umwandelt

Wenn Sie als DXF speichern, schreibt CadCraft DXF R12, die Version, die jedes CAD-Programm öffnen kann. Sie ist älter als manche Funktionen, daher werden einige Dinge in einfacherer Form geschrieben:

| In CadCraft | In der gespeicherten R12-Datei |
|---|---|
| Mehrzeiliger Text | Ein Textobjekt pro Zeile |
| Ellipsen | Polylinien, die der Ellipse folgen |
| Schraffuren (aus geöffneten Dateien) | Nur ihre Umrisse |
| Echtfarben (mit dem Farbwähler gewählt) | Die nächstliegende Standardfarbe |
| Linienstärken und eigene Linientypfaktoren der Objekte | Weggelassen: R12 kennt beides nicht (Linientypen bleiben erhalten) |
| Layer- und Blocknamen | In Großbuchstaben geschrieben; Leerzeichen und andere Zeichen werden zu `_`, und Namen werden auf 31 Zeichen gekürzt („Schriftfeld“ wird zu `SCHRIFTFELD`) |
| Layer, die nicht plotten sollen | Andere Programme plotten sie (CadCraft merkt sich die Einstellung, wenn die Zeichnung ein Blatt hat) |
| Bemaßungen | Echte Bemaßungen mit eigenem gezeichneten Block, damit andere Programme sie so zeigen, wie Sie sie sehen |
| Multi-Führungslinien | Die Linien, Pfeilspitze und Text, die sie zeichnen |
| Benannte Ansichten | Erhalten, mit Namen in Großbuchstaben; die Ansichten eines Blatts kehren auf dem ersten Blatt zurück |
| Mehrere Blätter | Das erste Blatt ist der Papierbereich, den jedes Programm zeigt; die anderen bleiben als Blöcke mit den Namen `CCLAYOUT_1`, `CCLAYOUT_2` … erhalten, die CadCraft beim Öffnen der Datei wieder in Blätter umwandelt |

Der Verlauf listet jede dieser Umwandlungen auf, die auf Ihre Zeichnung zutraf.

:::tip
Um über mehrere Tage an einer Zeichnung weiterzuarbeiten, speichern Sie als DXF und öffnen Sie diese DXF beim nächsten Mal. Alles, was CadCraft zeichnen kann, übersteht den Hin- und Rückweg, einschließlich Bemaßungen, Blöcke und aller Blätter.
:::

## Verknüpfte Zeichnungen (externe Referenzen)

{{cmd:XATTACH}} (`XA`, oder {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Eine Zeichnung verknüpfen (Xref)}}) verknüpft eine andere DWG oder DXF: Wählen Sie die Datei und klicken Sie dann, wo sie hingehört ({{key:Enter}} setzt sie auf 0,0). Sie kommt als ein Block herein, benannt nach der Datei, im richtigen Maßstab, wenn die beiden Zeichnungen unterschiedliche Einheiten haben. Ihre Layer und Blöcke behalten ihre Namen, mit dem Namen der Verknüpfung davor: `Plan|Walls`, `Plan|Door`. So vermischen sie sich nie mit Ihren eigenen. Schalten Sie die verknüpften Layer ein und aus, frieren Sie sie ein oder sperren Sie sie wie Ihre eigenen. Eine Verknüpfung ist schreibgeschützt: Ändern Sie die andere Zeichnung und laden Sie sie neu. Was Sie an den Layern einer Verknüpfung einstellen (Farbe, Linientyp, Linienstärke, Ein/Aus, Einfrieren, Sperren, Plotten), bleibt erhalten, wenn Sie sie neu laden, wenn Sie die Zeichnung als DWG speichern, während die Verknüpfung noch eine Verknüpfung ist, und wenn eine andere Zeichnung diese verknüpft.

{{cmd:XREF}} (`XR`): `?` listet die Verknüpfungen auf (geladen oder nicht, welche Datei, wie viele Referenzen); `A` verknüpft; `R` lädt eine aus ihrer Datei neu (wählen Sie die Datei erneut, denn der Browser kann Ihre Ordner nicht selbst erreichen); `B` bindet eine (sie wird zu gewöhnlichen Blöcken und Layern mit Namen wie `Plan$0$Walls`); `D` löst eine (ihre Referenzen und Layer verschwinden). Jede ist ein einzelner Schritt für Rückgängig.

{{cmd:XCLIP}} (`XC`) beschneidet Blockreferenzen und Verknüpfungen: Wählen Sie sie aus, `N` für eine neue Begrenzung, dann `R` und zwei Ecken oder `P` und die Punkte eines Polygons ({{key:Enter}} schließt es); `D` entfernt den Zuschnitt. Nur was innerhalb liegt, wird angezeigt und geplottet, und der Zuschnitt bewegt sich mit der Referenz. DWG und DXF 2000 behalten Zuschnitte; DXF R12 speichert die Referenz ganz und sagt das. Wenn Sie eine Verknüpfung mit zugeschnittenen Referenzen binden, fragt {{cmd:XREF}} `B`: `A` bindet alles, `C` behält nur den zugeschnittenen Teil jeder Referenz (Linien und Bögen werden an der Begrenzung geschnitten; Texte und verschachtelte Blöcke bleiben, wenn ihr Einfügepunkt innen liegt).

Eine Zeichnung, die Sie öffnen, kann Verknüpfungen auf Dateien enthalten, die CadCraft nicht sehen kann: Es sagt, wie viele nicht geladen sind. Verwenden Sie {{cmd:XREF}}, `R` und wählen Sie jede Datei, um sie zu sehen.

Beim Speichern wird eine geladene Verknüpfung **gebunden** in die Datei geschrieben (andere Programme sehen gewöhnliche Blöcke und Layer mit Namen `Plan$0$…`), und der Verlauf sagt es. Eine nicht geladene Verknüpfung bleibt eine Verknüpfung zu ihrer Datei, in DWG und DXF.

## In 3D öffnen

{{ui:Ansicht}} › {{ui:Mehr}} › {{ui:In ModelCraft öffnen}} ({{cmd:OPENIN3D}}) öffnet die Zeichnung im 3D-Modellierungsprogramm in einem neuen Reiter, als DWG, ohne sie hochzuladen. Änderungen, die dort vorgenommen werden, bleiben dort; speichern Sie sie dort. Der Menüpunkt erscheint nur dort, wo diese App eine übergebene Zeichnung übernehmen kann.

## Ein PDF plotten

Drücken Sie {{key:Mod+P}}, klicken Sie auf {{ui:Plotten}} oder geben Sie `PLOT` ein. Das PDF wird im Browser erstellt und heruntergeladen oder in einem neuen Reiter zum Drucken geöffnet. Siehe [In PDF plotten](topic:plot-pdf).

## Wohin die Dateien gehen

Jedes Speichern und jeder Plot ist ein Download. Die Dateien landen also dort, wohin Ihr Browser Downloads legt: meist im Ordner Downloads. Um jedes Mal einen Ordner zu wählen, ändern Sie die Download-Einstellung in Ihrem Browser; [Browser und Computer](common:browsers) zeigt, wo.

Nichts, was Sie öffnen oder speichern, wird an uns gesendet. Siehe [Wo Ihre Dateien landen](common:your-files).

## PLN- und PLA-Projektdateien

CadCraft öffnet DWG- und DXF-Zeichnungen, nicht die eigenen Dateien von Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Beim Öffnen einer solchen Datei wird Ihnen gesagt, was sie ist. Speichern Sie in Archicad die Ansichten oder Layouts, die Sie brauchen, als DWG und öffnen Sie diese hier, oder exportieren Sie das Modell als IFC und öffnen Sie es in BimCraft. Wo BimCraft die Datei übernehmen kann, bietet CadCraft {{ui:In BimCraft öffnen}} an.

## Wenn die Seite schließt, bevor Sie speichern

CadCraft behält eine Kopie jeder Zeichnung, die Sie ändern, nur in diesem Browser, kurz nachdem Sie aufhören zu bearbeiten. Wenn der Tab schließt, der Browser beendet wird oder der Computer neu startet, bevor Sie speichern, fragt CadCraft beim nächsten Start **Ihre Arbeit wiederherstellen?**: {{ui:Wiederherstellen}} öffnet die Zeichnung erneut, ungespeichert, in einem eigenen Reiter. Das Speichern der Zeichnung entfernt ihre Kopie. Siehe [Ihre Arbeit wiederherstellen](common:recover).

## Online und offline

Öffnen, Zeichnen, Speichern (DWG und DXF) und Plotten finden alle auf Ihrem Computer statt, sodass sie ohne Verbindung funktionieren, sobald CadCraft geladen ist.

Um CadCraft ganz ohne Verbindung zu verwenden, klicken Sie, während Sie online sind, auf {{ui:Für Offline speichern}} in der Leiste oben. Die Anzeige zählt hoch („Speichern 40 von 212“) und endet mit „Offline bereit“. Die gespeicherte Kopie enthält den DWG-Leser, insgesamt etwa 5 MB. Deshalb öffnen sich **DWG-Dateien auch offline**, sobald sie gespeichert ist. Klicken Sie erneut auf die Schaltfläche für {{ui:Erneut speichern (neueste Version holen)}} oder {{ui:Offline-Kopie entfernen}}. „Konnte nicht gespeichert werden“ bedeutet, dass einige Dateien nicht heruntergeladen wurden: Prüfen Sie die Verbindung und klicken Sie, um es erneut zu versuchen. „Offline nicht verfügbar“ bedeutet, dass dieses Browserfenster keine Kopie behalten kann (private Fenster und manche verwalteten Computer).

Ohne gespeicherte Kopie wird der DWG-Leser beim ersten Öffnen einer DWG nach dem Laden der Seite nachgeladen. Daher kann das Öffnen einer DWG offline fehlschlagen; DXF-Dateien brauchen ihn nie. Laden Sie die Seite offline nicht neu, solange CadCraft nicht gespeichert ist.

Details finden Sie unter [Offline arbeiten](common:offline).

:::offline
Sie sind jetzt offline. Zeichnungen werden als DWG oder DXF gespeichert und normal geplottet, und DXF-Dateien öffnen sich. DWG-Dateien öffnen sich, wenn CadCraft „Offline bereit“ anzeigt oder wenn der DWG-Leser bereits in diesem Tab geladen ist.
:::

## Abhängigkeiten in Dateien

Abhängigkeiten und Parameter (siehe [Zeichnung mit Abhängigkeiten versehen](topic:constraints)) werden sowohl in DWG als auch in DXF gespeichert. Jedes abhängige Objekt trägt eine kleine CadCraft-Notiz (erweiterte Daten), und ein ungenutzter Block namens `CADCRAFT_PARAMETRIC` enthält die Abhängigkeiten und die Parametertabelle. Andere Programme öffnen die Zeichnung normal und ignorieren beides; sie können den ungenutzten Block beim Bereinigen löschen. Die Notizen verweisen auf Objekte über deren eigenen Schlüssel, nicht über die Handles der Datei. Ein Programm, das Handles neu nummeriert, beschädigt sie also nicht. Wenn ein anderes Programm ein abhängiges Objekt gelöscht oder verändert hat, verwirft CadCraft die Abhängigkeiten darauf beim Öffnen der Datei und sagt, wie viele es waren. Eine Datei ohne sie öffnet sich ohne Abhängigkeiten.

Eine aus einem Bauteil-Modellierer exportierte Skizze (`.json`) öffnet sich ebenfalls: siehe [Skizzen von und zu anderen Bauteil-Modellierern verschieben](topic:solidworks-sketches).

## Noch nicht verfügbar

- Multi-Führungslinien als Multi-Führungsobjekte in einer gespeicherten DXF (R12 kennt sie nicht: Sie werden als das gespeichert, was sie zeichnen).
- Bilder in einer gespeicherten DXF (sie werden als ihre Rahmen gespeichert; DWG behält sie als Bilder) und Abdeckungen, die darunter Liegendes verbergen.
- Speichern einer neueren DXF-Version als 2000.
- Cloud-Speicherung und Synchronisierung zwischen Computern.

Die vollständige Liste finden Sie unter [Noch nicht umgesetzt](topic:not-built-yet).
