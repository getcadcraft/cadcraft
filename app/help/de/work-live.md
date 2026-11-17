---
title: Gemeinsam an einer Zeichnung arbeiten mit Live TeamWork
summary: Was sich in CadCraft ändert, während Sie in einer Live-TeamWork-Sitzung aus CadCraft Studio sind: Cursor und Auswahlen anderer Personen, Objekte, die jemand bearbeitet, die Sperren des Hosts, Ihr eigenes Rückgängig und das Beitreten aus einem Browser im selben Netzwerk.
keywords: live, live teamwork, studio live, gemeinsam, zusammenarbeiten, gleichzeitig bearbeiten, sitzung, live teilen, beitreten, cursor, gehalten, bearbeiten, sperre, livelock, liveunlock, livehold, layer halten, bereich halten, vorhängeschloss, rückgängig, host, assistent, gleiche datei, viele personen, langsam, grenze, wer hat geändert, letzte änderungen, änderungsprotokoll
from: 0497d2a3
---

## Was Sie lernen werden

Was Sie sehen und was mit Ihren Änderungen passiert, während mehrere Personen gleichzeitig an einer Zeichnung arbeiten. CadCraft Studio startet und tritt der Live-TeamWork-Sitzung bei (Live teilen, Verbinden). Diese Seite handelt von der Zeichnung selbst.

## Alle zeichnen gleichzeitig

Zeichnen und bearbeiten Sie wie gewohnt. Ihre eigenen Änderungen erscheinen sofort, noch bevor die anderen sie haben, und deren Änderungen erscheinen auf Ihrem Bildschirm einen Moment nach ihrer Aktion. Jeder Befehl funktioniert: Zeichnen, Ändern, Layer, Blöcke, Blätter, Bemaßungen, Abhängigkeiten.

Zwei Personen können dasselbe Objekt ändern. Wenn Sie verschiedene Dinge ändern, etwa die Farbe und einen Endpunkt einer Linie, bleiben beide Änderungen erhalten. Ändern Sie dasselbe, gewinnt die spätere Änderung.

Nur Ihnen gehören: der aktuelle Layer, Farbe und Texthöhe für neue Objekte, Ihre Bemaßungseinstellungen, Ihre Ansicht, der geteilte Bildschirm und Ihr BKS. Die Zeichnung wird geteilt; wie Sie sie betrachten, nicht.

## Andere Personen auf Ihrer Zeichnung

- **Cursor:** Der Zeiger jeder Person zeigt ihren Namen in ihrer eigenen Farbe und den Befehl, den sie ausführt. Sie sehen die Cursor der Personen, die nahe bei dem arbeiten, was auf Ihrem Bildschirm ist.
- **Auswahlen:** Was jemand ausgewählt hat, wird in dessen Farbe umrandet.
- **Wird bearbeitet:** Ein Objekt, das jemand ausgewählt hat, trägt eine Beschriftung wie „Ana bearbeitet“. Sie können seine Farbe ändern oder es verschieben, aber nicht löschen, zerlegen oder neu eingeben, bis die Person es loslässt. Wenn Sie es auswählen, sagt Ihnen CadCraft, wer es hat.
- **Wer es zuletzt geändert hat:** Wählen Sie ein Objekt aus, das jemand anderes in dieser Sitzung geändert hat, und die Befehlszeile sagt, wer es war und was die Änderung war („Ben hat das zuletzt geändert: CIRCLE.“). Der Live-Bereich von Studio listet jede letzte Änderung unter {{ui:Letzte Änderungen}}. Nichts davon wird in der Zeichnung gespeichert: Es gilt nur für die Dauer der Sitzung.

## Eine Gruppe oder einen Bereich halten, während Sie dort arbeiten

Bei einer großen Zeichnung mit mehreren Personen sagen Sie, welcher Teil für den Moment Ihrer ist:

1. Tippen Sie `LIVEHOLD` und drücken Sie {{key:Enter}}.
2. Wählen Sie `L` und tippen Sie einen Layernamen ein (Enter behält den aktuellen Layer), oder wählen Sie `A` und klicken Sie zwei Ecken eines Bereichs an.
3. Änderungen anderer Personen auf diesem Layer oder an Objekten in diesem Bereich werden zurückgenommen, und sie erfahren, dass Sie dort arbeiten. Ihren Bereich sehen Sie als gestrichelten Rahmen. Andere sehen ihn in Ihrer Farbe mit Ihrem Namen, und die Layer, die Sie halten, sind oben links in ihrer Zeichnung aufgelistet.
4. `LIVEHOLD`, dann `R`, gibt alles frei, was Sie halten. Das Verlassen der Sitzung gibt es ebenfalls frei.

Jede Person in der Sitzung kann halten, auch der Host; die Sperren des Hosts gelten zusätzlich. Eine Haltung wird nie in der Datei gespeichert.

## Wenn eine Änderung zurückgenommen wird

Die Kopie der Zeichnung beim Host prüft jede Änderung. Einige können nicht übernommen werden. CadCraft nimmt sie auf Ihrem Bildschirm zurück und sagt in der Befehlszeile, warum, zum Beispiel:

- jemand hat das Objekt gelöscht, oder den Layer oder Block, den es braucht, kurz vor Ihnen;
- jemand bearbeitet dieses Objekt oder hält dessen Layer oder den Bereich, in dem es liegt;
- der Host hat es gesperrt;
- der Block, den Sie platzieren, wurde bereinigt, oder ein Layer, den Sie löschen, hat noch Objekte.

## Rückgängig macht nur Ihre eigene Arbeit

{{key:Mod+Z}} und {{ui:Rückgängig}} machen Ihren letzten Befehl rückgängig, vollständig, und lassen die Arbeit aller anderen unberührt. Hat jemand seitdem dasselbe geändert, wird nichts rückgängig gemacht, und die Befehlszeile sagt, wer es geändert hat. {{key:Mod+Y}} wiederholt.

## Sperren (der Host)

Der Host kann Objekte oder einen ganzen Layer schützen, sodass niemand sie ändert, auch der Host selbst nicht, bis sie entsperrt sind:

1. Wählen Sie die Objekte aus, tippen Sie `LIVELOCK` und drücken Sie {{key:Enter}}. Oder tippen Sie `LIVELOCK` ohne Auswahl und wählen `L`, um einen Layer nach Namen zu sperren. Objekte, die später zu diesem Layer hinzukommen, werden ebenfalls gesperrt.
2. Gesperrte Objekte werden gestrichelt gezeichnet, mit der Beschriftung „Vom Host gesperrt“ auf allen Bildschirmen.
3. `LIVEUNLOCK` entsperrt sie auf dieselbe Weise.

Sperren gehören zur Sitzung: Sie enden, wenn sie endet, und werden nie in der Datei gespeichert.

## Mit derselben Datei beitreten

Wenn Sie genau die Datei öffnen, die der Host geöffnet hat (aus einem freigegebenen Ordner oder derselben Kopie), treten Sie aus Ihrem eigenen CadCraft-Fenster in Studio bei. Öffnen Sie dazu den Bereich {{ui:Nutzlast}} und nutzen Sie {{ui:Hier verbinden}} mit dem Code des Hosts. Es werden nur die Änderungen übertragen, die seit dem Öffnen durch den Host gemacht wurden, daher ist eine große Zeichnung sofort bereit. Ist Ihre Datei eine andere, ersetzt die Zeichnung des Hosts sie auf Ihrem Bildschirm (Ihre Datei bleibt unverändert). Das funktioniert nur, solange Ihre Zeichnung seit dem Öffnen unverändert ist.

## Assistenten in einer Live-Sitzung

Ein Assistent, der mit Ihrem CadCraft-Fenster verbunden ist (siehe die Hilfe zum Arbeiten mit KI-Assistenten), tritt der Sitzung als eigener Teilnehmer bei. Alle sehen ihn als „Assistent (über <Ihr Name>)“. Der Host lässt ihn wie eine Person ein; der eigene Assistent des Hosts tritt sofort bei. Seine Änderungen haben ein eigenes Rückgängig: Ihr {{key:Mod+Z}} macht Ihre Arbeit rückgängig, und das Rückgängig des Assistenten macht nur seine eigene. Er verlässt die Sitzung, wenn Sie ihn trennen oder selbst gehen, und er kann in der Sitzung nur arbeiten, solange Sie bearbeiten dürfen.

## Aus einem Browser beitreten

Ein Teammitglied ohne Studio kann den Code aus dem Bild des Hosts mit einem Telefon, Tablet oder Computer im selben Netzwerk scannen. CadCraft öffnet sich im Browser, fragt in der Befehlszeile nach Ihrem Namen und füllt sich mit der Zeichnung des Hosts, sobald der Host Sie einlässt. Ein Einladungslink lässt jemanden aus einem anderen Netzwerk beitreten: Der Host braucht einen Arbeitsplatz im Team-Cloud-Plan für die App, alle anderen treten kostenlos bei, und der Link funktioniert nur, solange die Sitzung des Hosts offen ist.

## Viele Personen an einer Zeichnung

Jede Änderung geht an alle in der Sitzung. Mit mehr Personen dauert es daher länger, bis jede Änderung bei jeder ankommt, und langsamere Laptops und Verbindungen fallen zuerst zurück. Die übliche Größe einer Sitzung ist 20 Personen. Der Host kann für eine Sitzung mehr erlauben (siehe die Hilfe zum gemeinsamen Arbeiten live). Fühlt sich die Zeichnung mit vielen Personen langsam an, helfen weniger Personen, weniger davon, die gleichzeitig bearbeiten, oder eine bessere Verbindung.

## Wenn die Sitzung endet

Nur der Host speichert die Zeichnung. Wenn der Host die Sitzung beendet, behalten alle anderen eine nicht gespeicherte Kopie. Speichern Sie sie, wenn Sie sie behalten wollen.

:::note
Eine zurückgenommene Änderung wird auf Ihrem eigenen Bildschirm über die Objekte gezeichnet, die sie umgeben, bis Sie die Zeichnung erneut öffnen. Schraffuren und gefüllte Objekte, die sich überlappen, können anders aussehen als die Kopie des Hosts. Die Zeichnung selbst ist dieselbe.
:::
