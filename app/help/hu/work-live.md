---
title: Egy rajzon együtt dolgozni a Live TeamWork-kel
summary: Mi változik a CadCraft-ban, amikor a CadCraft Studio-ból Live TeamWork munkamenetben van: mások kurzorai és kijelölései, szerkesztés alatt álló objektumok, a házigazda zárai, a saját visszavonás, és csatlakozás böngészőből ugyanazon a hálózaton.
keywords: live, live teamwork, studio live, együtt, együttműködés, közös szerkesztés, munkamenet, megosztás élőben, csatlakozás, kurzor, tartás, szerkesztés, zár, livelock, liveunlock, livehold, réteg tartása, terület tartása, lakat, visszavonás, házigazda, asszisztens, azonos fájl, sok ember, lassú, korlát, ki módosította, legutóbbi módosítások, szerkesztési napló
from: 0497d2a3
---

## Amit megtanul

Amit lát, és mi történik a szerkesztéseivel, amikor többen egyszerre dolgoznak ugyanazon a rajzon. A CadCraft Studio indítja és csatlakoztatja a Live TeamWork munkamenetet (Élő megosztás, Csatlakozás); ez az oldal magáról a rajzról szól.

## Mindenki egyszerre rajzol

Rajzoljon és szerkesszen a szokásos módon. A saját szerkesztések azonnal megjelennek, még mielőtt a többiek megkapnák őket, a többiek módosításai pedig pillanatokkal azután jelennek meg, hogy megtették. Minden parancs működik: rajzolás, módosítás, rétegek, blokkok, lapok, méretek, kényszerek.

Két ember ugyanazt az objektumot is módosíthatja. Ha különböző dolgokat módosítanak, például egy vonal színét és egyik végpontját, mindkét módosítás megmarad. Ha ugyanazt módosítják, a későbbi módosítás érvényesül.

Csak a saját munkamenetükben maradnak meg: az aktuális réteg, az új objektumok színe és szövegmagassága, a méretezési beállítások, a nézet, az osztott képernyő és az UCS. A rajz közös; az, ahogyan nézik, nem.

## Mások a rajzán

- **Kurzorok:** mindenki mutatója a nevével és a saját színével jelenik meg, a futtatott parancsával együtt. Azoknak a kurzorait látja, akik a képernyőjén lévő rész közelében dolgoznak.
- **Kijelölések:** amit valaki kijelölt, az a saját színével van körvonalazva.
- **Szerkesztés alatt:** egy objektumon, amelyet valaki kijelölt, olyan címke van, mint „Ana szerkeszti”. Színét még módosíthatja vagy mozgathatja, de nem törölheti, nem bonthatja fel, és nem írhatja újra be, amíg el nem engedik. A kijelölés megmondja, kinél van.
- **Ki módosította utoljára:** jelöljön ki egy objektumot, amelyet valaki más módosított ebben a munkamenetben, és a parancssor megmondja, ki és mit módosított („Ben módosította utoljára: CIRCLE.”). A Studio Live panelje minden legutóbbi szerkesztést listáz a {{ui:Legutóbbi módosítások}} alatt. Ebből semmi nem mentődik a rajzba: a munkamenet végéig tart.

## Réteg vagy terület tartása munka közben

Nagy rajzon, több emberrel, jelölje meg, melyik rész az övé egyelőre:

1. Írja be a `LIVEHOLD` parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. Válassza az `L`-t, és írjon be egy rétegnevet (az Enter megtartja az aktuális réteget), vagy válassza az `A`-t, és jelöljön ki egy terület két sarkát.
3. Mások szerkesztéseit azon a rétegen, illetve az adott területen lévő objektumokon visszavonják, és értesítést kapnak arról, hogy ott dolgoznak. A tartott terület szaggatott keretként látszik; mások a tartó színében és nevével látják, a tartott rétegek pedig a rajzuk bal felső sarkában listázódnak.
4. A `LIVEHOLD`, majd az `R` minden tartást feloldja. A munkamenetből való kilépés is feloldja.

Bárki tarthat a munkamenetben, a házigazda is; a házigazda zárai ezen felül is érvényesek maradnak. A tartás soha nem mentődik a fájlba.

## Amikor egy szerkesztés visszavonásra kerül

A házigazda példánya a rajzról minden szerkesztést ellenőriz. Néhányat nem lehet befogadni; ezeket a CadCraft visszavonja a képernyőn, és a parancssorban megmondja az okát, például:

- valaki közvetlenül a szerkesztés előtt törölte az objektumot, vagy a hozzá szükséges réteget vagy blokkot;
- valaki szerkeszti azt az objektumot, vagy tartja annak rétegét vagy területét;
- a házigazda zárolta;
- az elhelyezni kívánt blokkot kitisztították, vagy a törölni kívánt rétegen még vannak objektumok.

## A visszavonás a saját munkáját vonja vissza

A {{key:Mod+Z}} és a {{ui:Visszavonás}} a saját utolsó parancsát vonja vissza, egészében, mások munkáját érintetlenül hagyva. Ha azóta valaki ugyanazt a dolgot módosította, semmi nem vonódik vissza, és a parancssor megmondja, ki módosította. A {{key:Mod+Y}} ismétel.

## Zárak (a házigazda)

A házigazda védheti az objektumokat vagy egy egész réteget, hogy senki ne módosíthassa őket, a házigazdát is beleértve, amíg fel nem oldják a zárat:

1. Jelölje ki az objektumokat, majd írja be a `LIVELOCK` parancsot, és nyomja meg az {{key:Enter}} billentyűt. Vagy írja be a `LIVELOCK` parancsot kijelölés nélkül, és válassza az `L`-t, hogy egy réteget név szerint zároljon: az arra a rétegre később hozzáadott objektumok is zárolva lesznek.
2. A zárolt objektumok szaggatottan rajzolódnak ki, és mindenki képernyőjén „A házigazda zárolta” címke látszik.
3. A `LIVEUNLOCK` ugyanígy feloldja őket.

A zárak a munkamenethez tartoznak: a munkamenet végével megszűnnek, és soha nem mentődnek a fájlba.

## Csatlakozás ugyanazzal a fájllal

Ha ugyanazt a fájlt nyitotta meg, amelyet a házigazda (megosztott mappából vagy ugyanabból a példányból), a saját CadCraft-ablakából a Studio-ban csatlakozzon: nyissa meg a {{ui:Live}} panelt, és a házigazda kódjával használja a Csatlakozás ide gombot. Csak azok a módosítások utaznak, amelyek azóta történtek, hogy a házigazda megnyitotta, így egy nagy rajz azonnal kész. Ha a fájl más, a házigazda rajza felülírja a képernyőn (a fájl változatlan marad). Ez csak addig működik, amíg a rajz azóta nem változott, hogy megnyitották.

## Asszisztensek élő munkamenetben

Az egy CadCraft-ablakhoz csatlakoztatott asszisztens (lásd az AI-asszisztensekkel való munka súgóját) saját résztvevőként csatlakozik a munkamenethez, mindenki számára „Asszisztens (<a saját neve> révén)” néven látható. A házigazda beengedi, ahogy egy személyt; a házigazda saját asszisztense azonnal csatlakozik. Változásainak saját visszavonása van: a {{key:Mod+Z}} a saját munkáját vonja vissza, az asszisztens visszavonása pedig csak a sajátját. A munkamenetből akkor lép ki, amikor leválasztják vagy amikor kilépnek, és csak akkor tud a munkamenetben dolgozni, amikor szerkeszthető.

## Csatlakozás böngészőből

Egy csapattag Studio nélkül is beolvashatja a házigazda kódja alatti képet telefonnal, táblagéppel vagy számítógéppel ugyanazon a hálózaton. A CadCraft a böngészőben nyílik meg, a parancssorban megkérdezi a nevet, és amint a házigazda beengedi, a házigazda rajzával töltődik fel. Egy meghívó hivatkozással valaki másik hálózatról is csatlakozhat: a házigazdának Team Cloud Plan licencelt hely kell az alkalmazáshoz, mindenki más ingyen csatlakozik, és a hivatkozás csak addig működik, amíg a házigazda munkamenete nyitva van.

## Sokan egy rajzon

Minden szerkesztés eljut a munkamenet mindenkihez, így minél többen vannak, annál tovább ér el minden módosítás mindenkihez, és a lassabb laptopok és kapcsolatok maradnak le elsőként. Egy munkamenet szokásos mérete 20 fő; a házigazda egy munkamenetre többet is engedélyezhet (lásd az élő együttműködésről szóló súgót). Ha sok emberrel lassúnak érződik a rajz, segít, ha kevesebben vannak, kevesebben szerkesztenek ugyanabban a pillanatban, vagy jobb a kapcsolat.

## Amikor a munkamenet véget ér

A rajzot csak a házigazda menti. Amikor a házigazda befejezi a munkamenetet, a többiek egy nem mentett példányt kapnak: ha meg akarják tartani, mentsék el.

:::note
A visszavont elem a saját képernyőn a környező objektumok fölé rajzolódik, amíg a rajzot újra meg nem nyitják. Az átfedő sraffozások és kitöltött objektumok a házigazda példányától eltérően nézhetnek ki; maga a rajz ugyanaz.
:::
