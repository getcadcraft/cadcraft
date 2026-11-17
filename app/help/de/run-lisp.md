---
title: LISP-Routinen ausführen
summary: Was das LISP von CadCraft ausführt (Funktionen, Eingabeaufforderungen, Befehle, Objekte, Dialoge, vla-Objekte), wie Sie LISP in die Befehlszeile eingeben und was noch fehlt.
keywords: lisp, Routine, lsp, dcl, Dialog, Befehl, defun, entget, ssget, vla, vlax, vl, getpoint, Fehler, Kompatibilität, was funktioniert
from: 571bc077
---

## Was Sie erfahren

Was Sie erwarten dürfen, wenn Sie eine LISP-Routine laden, die für ein anderes CAD-Programm geschrieben wurde: welche Teile in CadCraft laufen und was noch fehlt.

CadCraft hat ein eigenes LISP. Es wurde anhand der öffentlichen AutoLISP-Referenz geschrieben, nicht aus dem Programm eines anderen Herstellers, daher laufen die meisten für AutoCAD geschriebenen Routinen unverändert. Wo etwas fehlt, nennt die Befehlszeile die Funktion, so dass Sie eine Lücke in CadCraft von einem Fehler in der Routine unterscheiden können.

## LISP in der Befehlszeile eingeben

Geben Sie einen Ausdruck ein, der mit `(` beginnt, und drücken Sie {{key:Enter}}: `(+ 1 2)` gibt `3` aus. `!name` gibt den Wert einer Variablen aus. Ein Ausdruck, der noch nicht geschlossen ist, wartet auf die nächste Zeile.

Bei einer Eingabeaufforderung beantwortet ein Ausdruck sie: Geben Sie bei „Radius angeben“ `(* 2 12.5)` ein, ergibt das 25.

## Was läuft

- **Die Sprache:** `defun` (mit lokalen Variablen nach `/`), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load` und `*error*` (eine lokale `*error*` funktioniert). Namen unterscheiden keine Groß- und Kleinschreibung; ganze Zahlen und reelle Zahlen unterscheiden sich, wie Sie es erwarten (`(/ 7 2)` ergibt 3).
- **Eingebaute Funktionen:** Mathematik, Listen (`car`, `cdr` und ihre Familie, `assoc`, `nth`, `member`, `subst`, `append`…), Zeichenketten (`strcat`, `substr`, `strcase`, `wcmatch`…), Umwandlungen (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), Geometrie (`polar`, `distance`, `angle`, `inters`) und Dateien (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Befehle:** `(defun c:NAME …)` erstellt einen Befehl. `(command …)` und `(command-s …)` steuern die eigenen Befehle von CadCraft, mit `pause` für Ihre Antwort.
- **Eingabeaufforderungen:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` mit `initget`-Schlüsselwörtern, `entsel`, `nentsel` und `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, mit Filterlisten und `-4`-Tests).
- **Objekte als Listen:** `entget`, `entmod`, `entmake` (auch Blöcke), `entdel`, `entlast`, `entnext` (die Attribute einer Blockreferenz folgen darauf als ATTRIBs, danach ein SEQEND, so dass Attributroutinen funktionieren), `handent`, Auswahlsätze, `tblsearch` und `tblnext`, `layoutlist`, `regapp`, `getvar` und `setvar` für die Einstellungen, die CadCraft hat.
- **Dialoge:** `.dcl`-Dateien mit `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog`. Schaltflächen, Eingabefelder, Listenfelder, Auswahllisten, Umschalter, Optionsschaltflächen, Zeilen, Spalten und Rahmen werden alle angezeigt. Eine Routine, die ihren Dialog in eine temporäre Datei schreibt, funktioniert ebenfalls.
- **Objekte:** `vl-load-com` (es tut nichts; nichts muss geladen werden), die `vl-`-Listen- und Zeichenkettenfunktionen, `vl-catch-all-apply`, sowie `vla-get-…`- und `vla-put-…`-Eigenschaften, `vla-…`-Methoden und `vlax-for` über die Sammlungen Blocks, Layers und Layouts, den Modellbereich und Blockdefinitionen, mit Varianten und Sicherheitsfeldern.

## Getestete Routinen

Die Tests von CadCraft laufen mit einer Reihe von Routinen, die für diese Prüfungen geschrieben wurden (Auswahlfilter, Eingabeaufforderungen, Befehle, Objekte, Fehlerbehandlung), und mit einer beliebten Routine, nach der Nutzer ausdrücklich gefragt haben: Lee Mac's DelBlocks, über seinen Dialog per Name und durch Anklicken eines Blocks. CadCraft hat außerdem einen eigenen {{cmd:DELBLOCKS}}, Sie brauchen dafür also keine Routine.

## Noch nicht umgesetzt

- `grread` (die Maus selbst verfolgen), Reaktoren (`vlr-…`), Kurvenfunktionen (`vlax-curve-…`), Wörterbücher und erweiterte Daten (`dictsearch`, xdata in `entget` und `entmake`) sowie die `acet-…`-Funktionen der Express Tools.
- Bilder und Folien in Dialogen werden als leere Rahmen angezeigt.
- Ein anderes Programm starten, die Windows-Registrierung und Dateien außerhalb derer, die Sie laden: Eine Routine kann eigene temporäre Dateien schreiben und lesen, die bis zum Schließen der Seite bestehen.

Wenn eine Routine auf eines davon stößt, zeigt die Befehlszeile „no function definition“ und den Namen an und weist darauf hin, dass CadCraft es noch nicht hat.

## Fehler vermeiden

- **Ein Befehl mit demselben Namen wie einer von CadCraft.** Der eigene Befehl von CadCraft bleibt bestehen. Rufen Sie den der Routine als `(c:NAME)` in der Befehlszeile auf.
- **LISP ausführen, dem Sie nicht vertrauen.** Eine Routine kann alles in der Zeichnung ändern, aber nichts außerhalb davon: Sie kommt nicht an Ihre Dateien, andere Seiten oder andere Apps heran.
