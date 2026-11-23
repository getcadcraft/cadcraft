---
title: Dinamikus blokkok
summary: Mit tesz a CadCraft a dinamikus blokkokkal egy DWG-ben: megtartják valódi nevüket, a mentett állapotukat mutatják, láthatósági állapotot váltanak, mutatják egyéb értékeiket, és mentéskor dinamikusak maradnak.
keywords: dinamikus blokk, dinamikus blokkok, láthatóság, láthatósági állapot, tükrözés, nyújtás, keresés, paraméterek, egyéni, blokktulajdonságok, *u blokkok, dinamikus
from: dea2ee7c
---

## Mi működik

Egy dinamikus blokkokat tartalmazó DWG eddig ezen a szinten működik:

- **Valódi nevük.** A dinamikus blokk a {{ui:Blokkok}} panelen a saját nevén szerepel („Receptacle”, „Sink”), nem névtelen `*U` blokkként.
- **A mentett állapot.** Minden hivatkozás pontosan azt mutatja, amit a másik program mutatott: azt a láthatósági állapotot, amelyre be volt állítva, megnyújtva vagy tükrözve, ahogy el lett mentve.
- **Láthatósági állapot váltása.** Jelöljön ki egy hivatkozást (vagy több azonos blokkot), nyissa meg a {{ui:Tulajdonságok}} panelt, és a {{ui:Egyéni}} szakaszban válasszon másik állapotot a {{ui:Láthatóság}} listából. A hivatkozás azonnal azt az állapotot mutatja, attribútumaival együtt: az állapot által elrejtettek eltűnnek, a megjelenítettek megjelennek az értékeikkel. A hivatkozás minden értéket megtart, így semmi nem marad üresen; a {{ui:Tulajdonságok}} megjelöli a rejtetteket „rejtett” jelzéssel. A {{key:Mod+Z}} egy lépésben visszaállítja a régi állapotot.
- **Fogópontok.** A kijelölt dinamikus blokk a saját fogópontjait mutatja ott, ahol paraméterei vannak: egy kis háromszög a láthatósági állapothoz (kattintson rá az állapotlistáért), nyilak a távolság végein, kétirányú nyíl a tükrözéshez. Ma csak a láthatósági fogópont működik; a többi ezt az állapotsorban jelzi.
- **Egyéb értékek, csak olvashatóan.** A láthatósági lista alatt az {{ui:Egyéni}} szakasz megmutatja a blokk távolságait, igazítási szögeit, tükrözési állapotait és pontjait, ahogy a rajz tartalmazza őket.
- **Láthatósági állapotok szerkesztése.** Nyissa meg a blokkot a {{cmd:BEDIT}} paranccsal: a szerkesztő egy állapotot mutat, amelynek nevét a rajz fölötti sáv mutatja (ott másikat is választhat). Írja be a {{cmd:BVSTATE}} parancsot az állapot váltásához, hozzáadásához (elrejtve mindent, mindent megjelenítve, vagy megtartva azt, ami látszik), átnevezéséhez vagy törléséhez; a {{cmd:BVHIDE}} elrejti a kijelölt objektumokat a látható állapotban; a {{cmd:BVSHOW}} halványan mutatja a rejtetteket, hogy rájuk kattintva visszahozza őket. Mentse a blokkot: az átnevezett állapotra állított hivatkozások az új néven megtartják azt, a törölt állapotra állítottak az első állapotot mutatják.
- **Dinamikusan marad.** A DWG-ben mentve azon a verzión, amelyben a rajz érkezett, a blokkok dinamikusak maradnak, a kiválasztott állapottal: a másik program ugyanazokként a dinamikus blokkokként nyitja meg őket. A szerkesztett láthatósági állapotok is mentődnek: az új nevükkel, a hozzáadott állapotokkal és azzal, mit mutat mindegyik.

## Ami csak olvasható, vagy még nincs meg

| Még nincs meg | Helyette, ma |
|---|---|
| Távolságok, szögek vagy tükrözések módosítása (nyújtás, mozgatás, tükrözés műveletei) | Csak olvashatóan mutatják a {{ui:Egyéni}} részben; a blokkot készítő programban szerkessze. |
| Keresés, XY, forgatás és poláris paraméterek | Még nem olvassa be: a hivatkozás úgy látszik, ahogy el lett mentve. |
| A távolság-, tükrözés- és pontfogópontok húzása | Megmutatják, hol vannak a paraméterek; a láthatósági fogópont és a Tulajdonságok {{ui:Láthatóság}} listája vált állapotot. |
| A másik program fajtájú dinamikus blokkok készítése (nyújtás, tükrözés, keresés) | A CadCraftban készített blokkok sima blokkok; a {{cmd:BPARAMETER}} ezt jelzi. Az Ön saját paraméterei és több láthatósági paramétere a Paraméterkezelőben vannak (lásd lent: „Saját paraméterek és láthatósági állapotok”). |
| Objektumok hozzáadása vagy törlése láthatósági állapotokkal rendelkező blokkból a blokkszerkesztőben | A blokk ekkor sima blokként mentődik (a szerkesztő ezt jelzi, amikor bezáródik). |
| Dinamikus megtartása másik DWG-verzióban vagy DXF-ben | Sima blokként mentődnek, a kiválasztott állapotot mutatva, és a mentés ezt jelzi. |

:::note
A {{cmd:BEDIT}}-ben végzett mozgatás vagy objektum-módosítás láthatósági állapotokkal rendelkező blokkot dinamikusan tart. Az állapotok nélküli blokk, vagy amelynek objektumait a szerkesztőben hozzáadták vagy törölték, sima blokk lesz.
:::

## Saját paraméterek és láthatósági állapotok

A CadCraftban készített blokk hordozhat saját paramétereket és **több** láthatósági paramétert, mindegyiknek saját állapotaival. Írja be a {{cmd:BPARAMS}} (vagy `BPM`) parancsot, hogy megnyissa a **Paraméterkezelőt** a blokkhoz, amelyet a {{cmd:BEDIT}}-ben szerkeszt, a kijelölt hivatkozás blokkjához, vagy a megnevezett blokkhoz.

- **Paraméterek**: név, típus (szám, hossz, szög, darabszám, igen/nem), és érték vagy képlet más paraméterek felett (`w * 2`, `if(n > 3, 1, 0)`). Az {{ui:Eredmény}} mutatja az értéket. A nem működő képletet, vagy a típusába nem illő értéket (1,5 darabszám) a kezelő elutasítja, és megmondja, miért; más nem változik.
- **Láthatósági paraméterek**: az {{ui:Láthatósági paraméter hozzáadása}} gombbal egy paramétert készít egy első állapottal. Minden állapot átnevezhető, eltávolítható (az utolsó megmarad), vagy kaphat egy „ekkor látszik” számot. Egy képlet választja ki az állapotot a paraméterekből (az az állapot, amelynek száma egyezik, különben a listában azon a helyen lévő állapot); képlet nélkül minden hivatkozás maga választ.
- **Objektumok egy állapotba helyezése**: a blokkszerkesztőben jelölje ki az objektumokat, írja be a {{cmd:BPARAMS}} parancsot, és kattintson az állapoton a {{ui:Kijelölt objektumok ide helyezése}} gombra. Az objektumokat, amelyeket egyetlen láthatósági paraméter sem sorol fel, mindig látni.
- **Ez a hivatkozás**: ha a kijelölt hivatkozáson indította, a kezelő megmutatja az adott hivatkozás saját értékeit és állapotait is.

A blokkszerkesztőn kívül minden módosítás egy visszavonási lépés. A blokkszerkesztőben a módosítások a szerkesztőé: a {{ui:Blokk mentése}} megtartja őket. A `-BPARAMS` ugyanezt kérdezi a parancssorban.

**A fájlban.** A DWG és a DXF megtartja a paramétereket, azt, mely objektum melyik állapotban van, és minden hivatkozás saját értékeit, a CadCraft saját nyilvántartásaiban; nyissa meg újra a fájlt a CadCraftban, és minden visszakerül. Egy másik program minden hivatkozást a blokkként látja az összes objektumával, mivel a DWG egy blokkon belül a saját fajtájából legfeljebb egy láthatósági paramétert tart. Egy hivatkozás, amelyet egy másik program mozgatott, vagy egy blokk, amelynek objektumait megváltoztatta, azok nélkül a részek nélkül jön vissza, amelyek már nem illenek össze (semmi nem kerül kitalálásra).
