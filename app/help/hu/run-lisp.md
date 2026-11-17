---
title: LISP-rutinok futtatása
summary: Mit futtat a CadCraft LISP-je (függvények, promptok, parancsok, objektumok, párbeszédpanelek, vla-objektumok), hogyan írjon LISP-et a parancssorba, és mi nincs még benne.
keywords: lisp, rutin, lsp, dcl, párbeszédpanel, parancs, defun, entget, ssget, vla, vlax, vl, getpoint, hiba, kompatibilitás, mi működik
from: 571bc077
---

## Mit fog megtanulni

Mire számíthat, ha egy másik CAD-programhoz írt LISP-rutint tölt be: mely részei futnak a CadCraft környezetében, és mely részek még nincsenek meg.

A CadCraftnak saját LISP-je van. A nyilvános AutoLISP-referencia alapján készült, nem valamely más program alapján, így a legtöbb AutoCAD-hez írt rutin változtatás nélkül fut. Ahol valami hiányzik, a parancssor megnevezi a függvényt, így meg tudja különböztetni a CadCraft hiányosságát a rutin hibájától.

## LISP beírása a parancssorba

Írjon be egy kifejezést, amely `(`-val kezdődik, majd nyomja meg az {{key:Enter}} billentyűt: a `(+ 1 2)` kiírja a `3`-at. A `!név` kiírja egy változó értékét. A még le nem zárt kifejezés a következő sort várja.

Egy prompton a kifejezés válaszol: a „Adja meg a sugarat” kérdésnél a `(* 2 12.5)` beírása 25-öt ad.

## Mi fut

- **A nyelv:** `defun` (a helyi változók a `/` után), `setq`, `lambda`, `if`, `cond`, `while`, `repeat`, `foreach`, `progn`, `and`, `or`, `quote`, `apply`, `mapcar`, `eval`, `read`, `load`, és `*error*` (a helyi `*error*` is működik). A nevek nem érzékenyek a kis- és nagybetűkre; az egész és a valós számok különböznek, ahogy elvárható (`(/ 7 2)` értéke 3).
- **Beépített függvények:** matematika, listák (`car`, `cdr` és családjuk, `assoc`, `nth`, `member`, `subst`, `append`…), szövegek (`strcat`, `substr`, `strcase`, `wcmatch`…), átalakítások (`rtos`, `atof`, `itoa`, `angtos`, `distof`, `cvunit`), geometria (`polar`, `distance`, `angle`, `inters`) és fájlok (`open`, `read-line`, `write-line`, `close`, `findfile`).
- **Parancsok:** a `(defun c:NAME …)` parancsot hoz létre. A `(command …)` és a `(command-s …)` a CadCraft saját parancsait vezérli, a `pause` a válaszára vár.
- **Promptok:** `getpoint`, `getcorner`, `getdist`, `getangle`, `getreal`, `getint`, `getstring`, `getkword` az `initget` kulcsszavakkal, `entsel`, `nentsel` és `ssget` (`W`, `C`, `F`, `WP`, `CP`, `P`, `L`, `X`, szűrőlistákkal és `-4` tesztekkel).
- **Objektumok listaként:** `entget`, `entmod`, `entmake` (a blokkokkal is), `entdel`, `entlast`, `entnext` (a blokkhivatkozás attribútumai utána következnek ATTRIB-ként, majd egy SEQEND, így az attribútum-rutinok működnek), `handent`, kijelölési készletek, `tblsearch` és `tblnext`, `layoutlist`, `regapp`, `getvar` és `setvar` a CadCraft beállításaihoz.
- **Párbeszédpanelek:** `.dcl` fájlok a `load_dialog`, `new_dialog`, `action_tile`, `set_tile`, `get_tile`, `start_list`, `start_dialog`, `done_dialog` függvényekkel. A gombok, szövegmezők, listadobozok, legördülő listák, kapcsolók, rádiógombok, sorok, oszlopok és dobozok mind megjelennek. Az a rutin is működik, amely a párbeszédpanelét ideiglenes fájlba írja.
- **Objektumok:** `vl-load-com` (nem csinál semmit; nincs betöltendő), a `vl-` lista- és szövegfüggvények, `vl-catch-all-apply`, valamint a `vla-get-…` / `vla-put-…` tulajdonságok, a `vla-…` metódusok és a `vlax-for` a Blocks, Layers és Layouts gyűjteményekben, a modelltérben és a blokkdefiníciókban, variánsokkal és biztonságos tömbökkel.

## Tesztelt rutinok

A CadCraft tesztjei ezekre az ellenőrzésekre írt rutinkészletet futtatnak (kijelölési szűrők, promptok, parancsok, objektumok, hibakezelők), valamint egy népszerű rutint, amelyet a felhasználók név szerint kértek: Lee Mac DelBlocks rutinját, név szerint a párbeszédpanelén keresztül és blokk kiválasztásával. A CadCraftnak saját {{cmd:DELBLOCKS}} parancsa is van, így ahhoz nincs szükség rutinra.

## Még nincs megvalósítva

- A `grread` (az egér saját követése), a reaktorok (`vlr-…`), a görbefüggvények (`vlax-curve-…`), a szótárak és a kiterjesztett adatok (`dictsearch`, xdata az `entget`-ben és az `entmake`-ben), valamint az Express Tools `acet-…` függvényei.
- A párbeszédpanelekben lévő képek és diák üres keretként jelennek meg.
- Más program futtatása, a Windows rendszerleíró adatbázisa és a betöltött fájlokon kívüli fájlok: egy rutin a saját ideiglenes fájljait írhatja és olvashatja, amelyek addig maradnak meg, amíg be nem zárja az oldalt.

Ha egy rutin ezek valamelyikéhez ér, a parancssor a „Nincs függvénydefiníció” üzenetet és a nevet jeleníti meg, és közli, hogy a CadCraftnak ez még nincs meg.

## Kerülendő hibák

- **A CadCraft egyik parancsával azonos nevű parancs.** A CadCraft saját parancsa megmarad. A rutin parancsát a parancssorban `(c:NAME)` alakban futtassa.
- **Nem megbízható LISP futtatása.** Egy rutin bármit megváltoztathat a rajzban, de rajzon kívül semmit: nem fér hozzá a fájljaihoz, más webhelyekhez vagy más alkalmazásokhoz.
