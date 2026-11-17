---
title: Egér, érintőpad és érintés
summary: Hogyan nagyítson, tolja el a rajzot, kattintson jobb gombbal és válasszon a CadCraftban görgős egérrel, Mac vagy PC érintőpaddal vagy érintőképernyővel, és mi tér el a böngészők között.
keywords: érintőpad, trackpad, magic mouse, érintés, tablet, ipad, eltolás, nagyítás, csíptetés, jobb kattintás, kétujjas, középső gomb, böngésző, chrome, firefox, safari, edge
from: 73d0954a
---

A CadCraft egérhez görgővel készült. Minden működik érintőpaddal is, néhány megszokással. Az érintőképernyők a kiválasztásra alkalmasak, korlátozottan.

## Görgős egér

- **Nagyítás:** forgassa a görgőt. A rajz a kereszt körül nagyít, ezért arra mutasson, amit látni szeretne.
- **Eltolás:** tartsa lenyomva a görgőt és húzzon, vagy húzzon a jobb gombbal.
- **Nagyítás mindenre:** kattintson duplán a görgőre, vagy kattintson a {{ui:Extents}} gombra.
- **Vissza az előző nézethez:** kattintson a Nézet csoport {{ui:Previous}} gombjára, vagy írja be a `Z`-t, nyomja meg az {{key:Enter}}t, írja be a `P`-t, és nyomja meg az {{key:Enter}}t. A görgetési lépések sorozata egy nézetnek számít, így egy {{ui:Previous}} mindet visszavonja. A gyakran használt nézeteket a {{cmd:NAMEDVIEW}} (`NV`) paranccsal mentse el.
- **Enter:** kattintson jobb gombbal.

## Érintőpad

:::mac
- **Eltolás:** mozgassa két ujját az érintőpadon bármely irányba: a rajz követi az ujjait. Húzhat is úgy, hogy két ujjal kattint és tartja (jobb gombos húzás).
- **Nagyítás:** csíptessen két ujjal. A nagyítás a kereszt körül történik.
- **Jobb kattintás (Enter):** kattintson két ujjal. Ha nem történik semmi, kapcsolja be a „Másodlagos kattintás” opciót a **Rendszerbeállításokban**, majd a **Trackpad** részben. A Control-kattintás a CadCraftban egyszerű kattintásnak számíthat, nem jobb kattintásnak, ezért használja a kétujjas kattintást.
- **Terület nagyítása:** kattintson a Nézet csoport {{ui:Window}} gombjára, majd két sarokra.
:::

:::windows linux
- **Eltolás:** mozgassa két ujját az érintőpadon bármely irányba: a rajz követi az ujjait. Húzhat is úgy, hogy a jobb gombot tartja lenyomva.
- **Nagyítás:** csíptessen két ujjal. A nagyítás a kereszt körül történik.
- **Jobb kattintás (Enter):** kattintson két ujjal, vagy az érintőpad jobb alsó sarkára, az érintőpad beállításaitól függően.
- **Terület nagyítása:** kattintson a Nézet csoport {{ui:Window}} gombjára, majd két sarokra.
:::

A {{key:Space}} lenyomva tartása és húzás **nem** tolja el a rajzot a CadCraftban: a {{key:Space}} az Enter.

Az egérgörgő továbbra is nagyít, lépésenként. Ha az érintőpad a görgetést egész lépésekben küldi, mint a görgő, akkor a kétujjas görgetés nagyít az eltolás helyett: kicsinyítsen, mutasson arra a területre, amelyet látni szeretne, majd nagyítson vissza. A 3D lap megtartja saját érintőpados mozdulatait (lásd: [Modell 3D-ben](topic:3d-solids#look-around)).

## Érintőképernyők és táblagépek

A CadCraft az ujjat egérkattintásként kezeli:

- A koppintás pontot vagy objektumot választ ki, vagy kijelöl.
- Az üres területen ujjal húzva lasszót rajzol (jobbra húzva először ablak, balra először keresztező; lásd [Lasszós kijelölés](topic:lasso-selection)).
- A {{cmd:TRIM}} és az {{cmd:EXTEND}} parancsban az ujjal darabokon áthúzva mindet levágja vagy meghosszabbítja.
- Egy kijelölt objektum fogópontját ujjal húzva a fogópont mozog (a fogópontok és a kiválasztó doboz nagyobbak ujjhoz).
- **Csíptetés** két ujjal a két ujj közötti pont körül nagyít; két ujj együttes mozgatása **eltol**. A második ujj megszakítja azt, amit az első elkezdett, így a csíptetés soha nem hagy nyomot.
- A **hosszú nyomás** (kb. fél másodpercig mozdulatlanul tartva) jobb kattintás: {{key:Enter}}. Véget vet egy parancsnak, befejez egy kijelölést, vagy megismétli az utolsó parancsot.

A parancssor alatt megjelenik egy **billentyűsor**: {{ui:Esc}}, {{ui:Undo}}, {{ui:Redo}}, azok a karakterek, amelyeket a táblagép billentyűzete elrejt (`@` `,` `<` `'` `"` `-`), {{ui:Snap}}, {{ui:Ortho}}, egy billentyűzet-gomb és egy nagy {{ui:Enter}}. Koppintson a billentyűzet-gombra (vagy a parancssorra), hogy parancsot vagy számot írjon be.

Nincs egérrávitel, ezért a fogásjelölők csak ott jelennek meg, ahol az ujja van.

:::touch
Érintőképernyőt használ. A gyors áttekintésnél többhez egy csatlakoztatott billentyűzet, egér vagy érintőpad sokkal könnyebbé teszi a CadCraft használatát.
:::

## Böngészők

A CadCraft ugyanúgy működik a Chrome, az Edge, a Firefox és a Safari böngészőben, Macen, Windowson és Linuxon. A különbségek kicsik:

| Témakör | Tudnivaló |
|---|---|
| DWG megnyitása | Nagy rajzok néhány másodpercig olvasódnak be minden böngészőben; az állapotsor ezalatt a „Beolvasás …” szöveget mutatja |
| Letöltések | Minden böngésző maga dönti el, hova mennek a letöltések, és hogy kérdezzen-e előbb; lásd [Böngészők és számítógépek](common:browsers) |
| Megnyitás nyomtatáshoz | A PDF új lapon nyílik meg. Ha a böngésző blokkolja a felugró ablakokat, a CadCraft a PDF-et letölti |
| F7 | A Firefox felajánlhatja a kurzoros böngészést; válassza a Nem lehetőséget |
| Kilépés nem mentett módosításokkal | Minden böngésző a saját „Elhagyja az oldalt?” kérdését mutatja, amelyet a CadCraft nem tud megváltoztatni |

:::safari
A Safariban a {{ui:Open to print}} gombbal megnyitott PDF megjelenhet a lapon nyomtatás nélkül: használja a **Fájl**, majd a **Nyomtatás** menüpontot.
:::

:::firefox
A Firefox minden letöltésnél megkérdezheti, mit kezdjen a fájllal. Válassza a fájl mentését, vagy módosítsa ezt egyszer a Firefox beállításaiban, a Letöltések részben.
:::
