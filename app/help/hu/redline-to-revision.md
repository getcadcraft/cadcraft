---
title: Jelölésből revízió készítése
summary: A MarkupCraft által írt piros jelölési csomag beolvasása, minden változtatás elfogadása vagy elutasítása, revíziófelhő és revíziónapló készítése az elfogadottakra, és a válaszfájl mentése, amelyet a MarkupCraft visszaolvas.
keywords: redline, jelölés, revízió, felhő, revíziófelhő, revíziónapló, elfogadás, elutasítás, markupcraft, felülvizsgálat, redline-csomag, válaszok, REDLINE
from: cdb3fafe
---

A felülvizsgáló a MarkupCraftban jelöli meg a tervkészletet, és küld egy **redline-csomagot**, amely `.redline.json` végződésű fájl. Itt minden változtatáson végigmegy, az elfogadottak pedig revíziófelhőkké válnak a rajzon.

## A változtatások átnézése

Írja be a {{cmd:REDLINE}} (`RDL`) parancsot, és válassza ki a csomagot. Válassza:

- {{ui:Lista}}: minden változtatás a számával, állapotával, lapjával, fajtájával, azzal, aki kérte, és azzal, amit írt.
- {{ui:Elfogadás}}, {{ui:Elutasítás}}, {{ui:Kész}}: írja be a számokat (`1,3-5`, vagy `All`) és egy opcionális megjegyzést a válaszfájlhoz. A {{ui:Újranyitás}} visszaállítja a változtatásokat nyitottra.
- {{ui:Keret}}: a rész a rajzon, amit a jelölt lap mutat. Kattintson két sarokra; az egész rajzhoz nyomja meg az {{key:Enter}} billentyűt. A változtatások ahhoz igazodnak, ahol a lapon voltak, ezzel igazodnak helyesen.
- {{ui:Alkalmaz}}: revíziófelhőt rajzol (`REV-CLOUD` réteg, a revíziós betűjelével) minden elfogadott vagy kész változtatás köré, és egy revíziónaplót (vonalazott táblázatot az elfogadottakról az Ön megjegyzéseivel, `REV-LOG` réteg) a rajz jobb oldalára. Egy visszavonási lépés.
- {{ui:Mentés}}: a `<project>-<revision>.redline-answers.json` fájlt írja. Ha ezt a MarkupCraftban megnyitja, a jelölések bezáródnak: Elfogadva, Elutasítva vagy Befejezve állapotban, az Ön megjegyzéseivel megjegyzésként.

## Tudnivalók

Amit a felülvizsgáló írt, az úgy jelenik meg, ahogy írta. A CadCraft soha nem követ a csomagban talált utasításokat; csak megjeleníti azokat Önnek.

Az elutasított és nyitott változtatások nem adnak semmit a rajzhoz. A csomagot az Ön számítógépén olvassa be; semmi nem töltődik fel.

Ha az asszisztense csatlakoztatva van, beolvashat egy csomagot, rögzítheti a döntéseket, és alkalmazhatja azokat a `redline_read`, `redline_decide`, `redline_apply` és `redline_answers` eszközökkel; a rajz egy visszavonási lépésben változik, „Asszisztens: Jelölésből revízió” néven.
