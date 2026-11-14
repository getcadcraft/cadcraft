---
title: Rohrleitungen: Durchfluss und Druck in einer Wasserversorgung
summary: PIPENET folgt den gezeichneten Versorgungsrohren von der Quelle, addiert die Entnahmeeinheiten, die Sie an jedem freien Ende nennen, und ermittelt Durchfluss, Geschwindigkeit und den Druckverlust zu jedem Sanitärobjekt.
keywords: Versorgung, Wasser, Entnahmeeinheiten, Bedarf, Durchfluss, Geschwindigkeit, Druckverlust, hazen-williams, PIPENET, PNET, statische Höhe, warm, kalt
from: ece38a8e
---

{{cmd:PIPENET}} (`PNET`) eingeben und auf das Ende eines Rohrstrangs klicken, an dem die Versorgung einläuft.

Für jedes freie Ende fragt es, was dort ist: eine Art von Sanitärobjekt (`wc`, `lav`, `sink`, `shower`, `laundry`, `bath`, `dishwasher`) oder eine Anzahl Entnahmeeinheiten (0 für nichts). Die Antworten werden für diese Stelle gespeichert; {{ui:Zurücksetzen}} verwirft sie. {{ui:Druck}} nimmt den Versorgungsdruck an der Quelle und den Druck, den ein Sanitärobjekt braucht, in kPa auf.

Es gibt für jedes Sanitärobjekt aus: die Entnahmeeinheiten, die es führt, den Druckverlust ab der Quelle (Reibung nach Hazen–Williams, Formstücke sowie Steigen oder Fallen des Rohrs: ein Rohr, das entlang seiner Zeichenrichtung fällt, gewinnt Druck, wenn es an seinem tiefen Ende gespeist wird) und den verbleibenden Versorgungsdruck. Rohrstränge, die für ihren Durchfluss zu klein sind (zu schnell durchströmt), werden aufgelistet.

**Bedarf** verwendet eine Standardkurve von Entnahmeeinheiten zu Durchfluss, die ein gekennzeichnetes Beispiel ist. Geben Sie die Kurve der geltenden Vorschrift in den Einstellungen der Engine ein, bevor Sie sich auf die Durchflüsse verlassen. Formstückverluste sind gerundete Standardwerte. Schleifen werden ignoriert. Prüfen Sie die Ergebnisse mit Ihrem Ingenieur. {{ui:Exportieren}} › {{ui:Versorgungsnetz}} schreibt jeden Rohrstrang in eine CSV-Datei.
