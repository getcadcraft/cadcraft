---
title: CadCraft használata AI-asszisztenssel
summary: Engedje, hogy a saját AI-asszisztense vagy szkriptje dolgozzon a CadCraft-tal: mit tehet, hogyan kapcsolódhat hozzá bármely MCP-kliens, és hogyan maradhat kézben az irányítás (jogosultságok, visszavonás, tevékenységnapló, leválasztás).
keywords: ai, asszisztens, ügynök, mcp, modellkontextus-protokoll, szkript, automatizálás, parancssor, cli, json, token, jogosultságok, leválasztás, tevékenység, mappák, útvonalak, svg, köteg
from: 06ba4ef6
---

## Amit megtanul

Hogyan engedhető meg, hogy egy AI-asszisztens (vagy egy saját szkript) megnézzen egy rajzot, futtassa a CadCraft parancsait, plottoljon és mentsen, és hogyan dönthető el, mihez nyúlhat hozzá.

A CadCraft-nak **nincs saját AI-ja**, és semmit sem küld sehova. Az asszisztenst magának kell biztosítani: bármely olyan programot, amely beszéli a modellkontextus-protokollt (Model Context Protocol, MCP). A CadCraft csak eszközöket ad neki, a kiválasztás pedig a felhasználó dolga.

Két mód van a hozzáférésre:

- **A megnyitott rajz.** Az asszisztens ebben az ablakban dolgozik, a számítógépen futó CadCraft Studio-n keresztül. Ezt szolgálja a {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} beállítás.
- **Rajzok a számítógépen, az alkalmazás megnyitása nélkül.** A CadCraft MCP-kiszolgáló és a `cadcraft` parancssor a megadott mappákban lévő DWG- és DXF-fájlokat olvassa és írja. Lásd lent: „Fájlok kezelése a CadCraft megnyitása nélkül”.

## Bekapcsolás

1. Nyissa meg a {{ui:Settings}} ablakot (az alkalmazássávon a fogaskerék, vagy {{key:Mod+,}}), majd lépjen a {{ui:CadCraft}} lapra.
2. Az {{ui:Assistants}} résznél jelölje be a **Az AI-asszisztensek és szkriptek használhatják a CadCraft-ot** négyzetet. Addig ki van kapcsolva.
3. Válassza ki, mit tehet. Az **Olvasás** kezdetben be van jelölve; a többit csak szükség esetén jelölje be.

| Jogosultság | Mit tehet az asszisztens |
|---|---|
| Olvasás | Megnézi a rajzot: leírja, listázza és megkeresi az objektumokat, látja a kijelölést, leírja a nézetet és képet készít róla, ellenőrzi a réteg- és rajzolási szabályok szerint |
| Szerkesztés | Parancsokat futtat a rajzon, és módosítja a kijelölést. Minden művelet egy visszavonható lépés |
| Mentés | Menti a rajzot (asztali gépen a fájljába; böngészőben letöltésként) |
| Exportálás | PDF-be plottol, és más fájlokat is készít |

## Fájlok használata a kiválasztott mappákban

A CadCraft Studio-ban az asszisztens név szerint nyithat, menthet és plottolhat fájlokat a fájlpárbeszédpanelek használata helyett, de csak azokban a mappákban, amelyeket a következő helyen adtak hozzá: {{ui:Assistants}} › {{ui:Folders it may use}}:

1. Válassza a {{ui:Mappa hozzáadása…}} lehetőséget, és a Studio saját párbeszédpanelén jelölje ki a mappát.
2. Az asszisztens ezután listázhatja a fájlokat ott (`files_list`), megnyithat egy rajzot (`drawing_open`), menthet oda DWG-verzióban vagy DXF-ként, PDF- vagy SVG-fájlba plottolhat, betölthet egy LISP-fájlt, átadhatja a parancsnak a kért fájlt (`INSERT` `F`, `XATTACH`, egy pontfájl), vagy megadhatja, hová kerüljön egy parancs fájlja (a `COUNT` CSV-je, `PUBLISH`).
3. Az {{ui:Eltávolítás}} gomb azonnal visszaveszi a mappát. A máshol lévő útvonalakat a rendszer elutasítja, a már ott lévő fájlt pedig csak akkor cseréli le, ha az asszisztens ezt kéri, vagy ha ő írta a fájlt.

A megnyitáshoz továbbra is kell az **Olvasás**, a rajz mentéséhez a **Mentés**, minden más fájlhoz pedig az **Exportálás**.

A nem bejelölt jogosultságokhoz tartozó eszközök nem kerülnek fel az asszisztensnek. Ha mégis kéri őket, a CadCraft elutasítja, és beírja a tevékenységnaplóba. A kapcsoló kikapcsolása azonnal megszakít minden kapcsolatot. A {{ui:CadCraft-beállítások visszaállítása}} is kikapcsolja.

## Asszisztens csatlakoztatása

Az asszisztensek a számítógépen futó **CadCraft Studio**-n keresztül csatlakoznak. A Studio egy kis kiszolgálót indít, amelyet csak ez a számítógép ér el (a `127.0.0.1` címen), és amelyet a Studio minden induláskor készült tokennel véd. Nyissa meg a Studio-t, válassza az {{ui:Asszisztens csatlakoztatása}} lehetőséget, és másolja ki a címet és a tokent.

- Az asszisztensben adjon hozzá HTTP típusú MCP-kiszolgálót a címmel (ilyen: `http://127.0.0.1:47615/mcp`), és ezt a fejlécet: `Authorization: Bearer <token>`. A Studio megmutatja a beillesztendő beállításokat.

A Studio-ban az {{ui:Új token}} minden csatlakoztatott asszisztenst újracsatlakoztat az új tokennel. A tokent soha ne ossza meg: aki birtokolja, a bekapcsolt alkalmazásokat használhatja, amíg a Studio fut.

:::note
A böngészőlap nem tud kapcsolatot nyitni egy asszisztensnek: a böngészős alkalmazásokban a kapcsoló addig nincs hatással, amíg nem használják a számítógépen futó CadCraft Studio-t.
:::

## Az irányítás megmarad

- **Minden művelet egy visszavonási lépés**, az asszisztens nevével megjelölve, például „Asszisztens: LINE”. Az asszisztens utolsó műveletét egészben a {{key:Mod+Z}} billentyűvel vonhatja vissza.
- **Látható, mit tesz.** Parancsai a parancselőzményekben jelennek meg, előttük **[Asszisztens]** jelöléssel, a rajz pedig a munka közben újrarajzolódik.
- **Megvárja a felhasználót.** Amíg parancs közepén áll a rajz, az asszisztens csak olvashat, nem módosíthatja; a parancs befejezése után újrapróbálkozásra kapja az utasítást.
- **Látszik, ha kapcsolódik.** Az alkalmazássávon egy gomb nevén nevezi meg az asszisztenst, amíg kapcsolódik. Kattintson rá, ha meg akarja nézni, mit tehet, vagy hogy **leválassza**.
- **Tevékenység.** A {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Assistants}} › {{ui:Activity}} listában minden hívás szerepel: mikor, melyik eszköz, sikeres vagy elutasított volt-e, és melyik visszavonási lépést hozta létre. A {{ui:A napló mentése}} gomb másolatot őriz.

## Mit kérhet egy asszisztens

| Eszköz | Jogosultság | Mit csinál |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Olvasás | A rajz neve, mértékegységei, rétegei, blokkjai, lapjai; mi látszik a képernyőn |
| `files_list`, `drawing_open` | Olvasás | Studio: a fájlok a mappáiban; egyet megnyit ebben az ablakban |
| `objects_list`, `object_get`, `selection_get` | Olvasás | Objektumok geometriával, hosszal és területtel (vagy csak darabszámmal típus és réteg szerint); a kijelölés |
| `drawing_check` | Olvasás | Szabályok, például engedélyezett rétegek, semmi a 0. rétegen, színek rétegről, szövegmagasságok |
| `view_screenshot` | Olvasás | A rajz képe, ahogy látszik |
| `command_run` | Szerkesztés | A parancssorba gépel: `LINE 0,0 @100,0 @0,50 ` úgy olvasódik, ahogy egy ember gépelné (a szóköz lezárja a választ), vagy válaszonként egy listát. Nyitva hagyhatja a parancsot, és a következő hívásában folytatja |
| `script_run` | Szerkesztés | Szkriptet (`.scr`) vagy LISP-fájlt futtat, ahogy a {{ui:APPLOAD}} betölti |
| `block_insert` | Szerkesztés | Egy lépésben elhelyez egy blokkot az attribútumértékeivel |
| `selection_set`, `undo` | Szerkesztés | Kijelöli az objektumokat a következő parancshoz; visszavonja a saját lépéseit |
| `drawing_save` | Mentés | A CadCraft saját {{ui:Mentés}} lehetőségét, vagy a {{ui:Mentés másként}} műveletet az egyik mappába |
| `drawing_plot` | Exportálás | PDF vagy SVG egy lapról vagy a modellről, léptékben vagy illesztve (a PDF-alátéteket így még nem nyomtatja) |

Amíg az asszisztens fut egy parancsot, a CadCraft a kérdéseit a parancssorban teszi fel, nem párbeszédpanelben (például, hogy az egész rajzot vagy csak egy blokkot szúrja-e be), így az asszisztens tud válaszolni rájuk. A könyvtár és a Keresés továbbra is a felhasználóra vár; az asszisztensnek szólni kell, hogy kérdezzen.

## Fájlok kezelése a CadCraft megnyitása nélkül

A CadCraft MCP-kiszolgáló (`cadcraft-mcp`) és parancssora (`cadcraft`) a CadCraft saját rajzkódját futtatja Node.js-ben, ablak nélkül. Node.js 20-as vagy újabb verzió kell hozzájuk.

- **Az MCP-kiszolgáló** csak a megnevezett mappákban dolgozik, és csak azokkal a jogosultságokkal, amelyeket megkap: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. `--root` nélkül nem nyit meg fájlt; `--allow` nélkül csak olvas. Olvashat IFC-modelleket, mennyiségkimutatásokat és a PDF-készletek jelöléseit is.
- **A parancssor** a saját szkriptekhez való: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Több fájl egyszerre: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Adja hozzá a `--json` kapcsolót, ha olyan kimenetet kér, amelyet program tud olvasni.

:::note
Ha az `npx @getcadcraft/mcp` azt írja, hogy a csomag nem található, az még nincs közzétéve. A getcadcraft.com hírei megmondják, amikor lesz.
:::

## Ha valami nem működik

- **Az asszisztens nem lát CadCraft-eszközöket:** ellenőrizze, hogy a kapcsoló be van-e kapcsolva ebben az ablakban, és hogy az ablak nyitva van-e a Studio-ban.
- **„needs the edit permission”:** jelölje be a **Szerkesztés** jogosultságot az {{ui:Assistants}} résznél, majd kérdezzen újra.
- **„outside the folders assistants may use”:** adja hozzá a mappát a {{ui:Assistants}} › {{ui:Folders it may use}} résznél, vagy kérje meg az asszisztenst, hogy egy már hozzáadott mappában lévő fájlt használjon.
- **„401” vagy „token” hibák:** a token megváltozott (újraindult a Studio, vagy volt {{ui:Új token}}). Az új tokent másolja be az asszisztens beállításaiba.
- **Az asszisztens módosítása hibás volt:** nyomja meg a {{key:Mod+Z}} billentyűt. Egy lenyomás egy teljes asszisztens-műveletet visszavon.

## Lásd még

- [Receptek AI-asszisztenseknek](common:assistants-recipes): kidolgozott példák, mindegyik a hívott eszközeivel.
