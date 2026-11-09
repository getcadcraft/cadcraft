---
title: RLT: Druck im gesamten Kanalnetz
summary: DUCTNET verfolgt die gezeichneten Kanäle vom Ventilator aus, ermittelt den Druckverlust bis zu jedem freien Ende, den kritischen Pfad, die Klappe, die jedes andere Ende benötigt, und den Ventilatordruck.
keywords: Netz, Druck, kritischer Pfad, Ventilatordruck, Klappe, Abgleich, Formstückverlust, DUCTNET, DNET, statischer Druck, System
from: b6f568fe
---

{{cmd:DUCTSIZE}} bemisst einen Strang. {{cmd:DUCTNET}} (`DNET`) betrachtet das gesamte gezeichnete System.

1. Geben Sie jedem Abschnitt seinen Volumenstrom ({{ui:Volumenstrom}} des Kanals, in cfm oder L/s). Das freie Ende eines Strangs übernimmt den Volumenstrom des Abschnitts an diesem Ende.
2. Geben Sie {{cmd:DUCTNET}} ein und klicken Sie auf das Ende des Strangs, an dem der Ventilator oder das Lüftungsgerät angeschlossen ist. Enden, die einen anderen Strang berühren, werden verbunden; Abzweige werden dort gefunden, wo ein Strang auf einem anderen endet.
3. Es listet jedes freie Ende mit seinem Volumenstrom und dem Druckverlust auf dem Weg vom Ventilator auf, außerdem den **kritischen Pfad** (das Ende mit dem größten Verlust), die **Klappe**, die jedes andere Ende zum Abgleich benötigt, und den **Ventilatordruck**: den kritischen Pfad plus den Druck von Registern und Filtern, den Sie mit der Option {{ui:Einbauten}} eingeben (aus den Herstellerangaben).

Die Reibung stammt aus derselben Colebrook-Formel wie bei der Bemessung. Formstücke (Bögen, die Stelle, an der sich die Größe ändert, Abzweigungen) verwenden eine kurze Liste gerundeter Standardbeiwerte: Sie sind als Standardwerte gekennzeichnet, keine Formstückdatenbank, und der Kamineffekt wird ignoriert. Prüfen Sie das Ergebnis mit Ihrem Fachplaner, bevor Sie sich darauf verlassen.

Abschnitte, die für ihren Volumenstrom zu klein, zu schnell oder zu flach sind, werden nach Strang aufgelistet. Schleifen werden ignoriert (die Berechnung folgt einem Baum) und gemeldet. {{ui:Methode}} schaltet die Größenprüfung zwischen gleicher Reibung und einer Geschwindigkeitsgrenze um. {{ui:Exportieren}} › Kanalnetzdruck schreibt jeden Abschnitt in eine CSV-Datei.
