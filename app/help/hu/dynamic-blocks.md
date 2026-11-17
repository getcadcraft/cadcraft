---
title: Dinamikus blokkok
summary: Mit tesz a CadCraft a DWG-ben lévő dinamikus blokkokkal, megtartják valódi nevüket, megmutatják a mentett állapotot, váltanak láthatósági állapotot, megmutatják egyéb értékeiket, és mentéskor dinamikusak maradnak.
keywords: dinamikus blokk, dinamikus blokkok, láthatóság, láthatósági állapot, tükrözés, nyújtás, keresés, paraméterek, egyéni, blokktulajdonságok, *u blokkok, dinamikus
from: 26b6aa80
---

## Ami működik

A dinamikus blokkokat tartalmazó DWG eddig a pontig működve nyílik meg:

- **Valódi nevük.** A dinamikus blokk a {{ui:Blokkok}} panelen a saját nevén szerepel („Receptacle”, „Sink”), nem névtelen `*U` blokkként.
- **A mentett állapotuk.** Minden hivatkozás pontosan azt mutatja, amit a másik program: azt a láthatósági állapotot, amelyre be volt állítva, nyújtva vagy tükrözve, ahogy mentve volt.
- **Láthatósági állapot váltása.** Jelöljön ki egy hivatkozást (vagy ugyanazon blokk több hivatkozását), nyissa meg a {{ui:Tulajdonságok}} panelt, és a {{ui:Egyéni}} szakaszban a {{ui:Láthatóság}} listából válasszon másik állapotot. A hivatkozás azonnal megmutatja ezt az állapotot, az attribútumaival együtt: az állapot által elrejtettek eltűnnek, a megjelenítettek értékeikkel együtt előkerülnek. A hivatkozás minden értéket megtart, így semmi nem tér vissza üresen; a {{ui:Tulajdonságok}} felsorolja a rejtetteket, „rejtett” megjelöléssel. A {{key:Mod+Z}} egy lépésben visszaállítja a régi állapotot.
- **Fogópontok.** A kijelölt dinamikus blokk a paraméterei helyén mutatja saját fogópontjait: kis háromszög a láthatósági állapothoz (kattintson rá az állapotlistáért), nyilak a távolság végein, dupla nyíl a tükrözéshez. Ma csak a láthatósági fogópont működik; a többiről ezt az állapotsor jelzi.
- **Az egyéb értékek, csak olvasható módon.** A láthatósági lista alatt a {{ui:Egyéni}} rész a blokk távolságait, igazítási szögeit, tükrözési állapotait és pontjait is megmutatja, úgy, ahogy a rajz tartalmazza.
- **Láthatósági állapotok szerkesztése.** Nyissa meg a blokkot a {{cmd:BEDIT}} paranccsal: a szerkesztő egy állapotot mutat, amelynek a neve a rajz felett lévő sávban látható (ott válasszon másikat). Írja be a {{cmd:BVSTATE}} parancsot az átváltáshoz, hozzáadáshoz (minden elrejtése, minden megjelenítése vagy a látható elemek megtartása), átnevezéshez vagy állapot törléséhez; a {{cmd:BVHIDE}} elrejti a kijelölt objektumokat a látható állapotban; a {{cmd:BVSHOW}} a rejtetteket halványan megjeleníti, hogy rákattintva visszahozhassa a kiválasztottakat. Mentse a blokkot: az átnevezett állapotra állított hivatkozások az új néven őrzik meg, a törölt állapotra állítottak pedig az első állapotot mutatják.
- **Dinamikusan megtartva.** A rajz eredeti verziójában DWG-ként mentve a blokkok dinamikusak maradnak, a kiválasztott állapottal: a másik program ugyanazokként, dinamikus blokkokként nyitja meg őket. A szerkesztett láthatósági állapotok is mentődnek: új nevükkel, a hozzáadott állapotokkal és azzal, hogy mit mutat mindegyik.

## Ami csak olvasható, vagy még nincs meg

| Még nincs meg | Helyette most |
|---|---|
| Távolságok, szögek vagy tükrözések módosítása (nyújtás, mozgatás, tükrözés műveletek) | Az {{ui:Egyéni}} részben csak olvashatóan jelennek meg; a blokkot létrehozó programban szerkessze. |
| Keresés, XY, forgatás és poláris paraméterek | Még nincs beolvasva: a hivatkozás mentett állapotában jelenik meg. |
| Távolság-, tükrözés- és pontfogópontok húzása | A paraméterek helyét mutatják; a láthatósági fogópont és a Tulajdonságok panel {{ui:Láthatóság}} listája vált állapotot. |
| Dinamikus blokkok létrehozása (paraméterek vagy láthatósági állapotok hozzáadása olyan blokkhoz, amelynek nincs) | A CadCraftban létrehozott blokkok egyszerű blokkok; ezt a {{cmd:BPARAMETER}} jelzi. |
| Objektumok hozzáadása vagy törlése láthatósági állapotokkal rendelkező blokkban a blokkszerkesztőben | A blokk ekkor egyszerű blokkként mentődik (a szerkesztő bezáráskor ezt jelzi). |
| Dinamikusan tartás más DWG-verzióban vagy DXF-ben | Egyszerű blokkként mentődnek, a kiválasztott állapotot mutatva, és a mentés ezt jelzi. |

:::note
A {{cmd:BEDIT}} parancsban objektumok mozgatása vagy módosítása megtartja a láthatósági állapotokkal rendelkező blokkot dinamikusnak. Állapotok nélküli blokk, vagy olyan blokk, amelynek objektumait a szerkesztőben hozzáadták vagy törölték, egyszerű blokká válik.
:::
