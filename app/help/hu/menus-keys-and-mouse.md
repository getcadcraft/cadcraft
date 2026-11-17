---
title: Menük, billentyűk és egér
summary: Válasszon olyan menüstílust, amely illeszkedik a megszokott munkamódjához, rendeljen bármely parancshoz saját billentyűt vagy olyan billentyűt, amely parancsot ír be, mozgassa a parancsokat a szalag lapjai között, és állítsa be, mit csinál a görgő és az egér gombjai.
keywords: menüstílus, menük, szalag, eszköztár, parancssor, billentyűparancsok, gyorsbillentyűk, billentyűk, testreszabás, újrakiosztás, szövegbillentyűk, egér, görgő, megfordítás, nagyítási irány, középső gomb, jobb gomb, eltolás, exportálás, importálás, váltás, ismerős, klasszikus rajzoló
from: 8bbf4f88
---

A CadCraft parancsai ugyanúgy érhetők el, bárhonnan is indítja őket, és a parancssor mindig ott van az aliasaival (`L`, `C`, `TR` …). A **menüstílus** csak azt dönti el, hol vannak a gombok a képernyőn, milyen nevük van ott, és melyik billentyű futtatja őket. Válassza ki a {{ui:Beállítások}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menük, billentyűk és egér}} menüpontban; a változás azonnal érvénybe lép, és a böngésző megjegyzi.

## A három stílus

| Stílus | Mit kap |
|---|---|
| {{ui:CadCraft}} | A CadCraft saját eszköztára: Fájl, Rajzolás, Módosítás, Feliratozás, Parametrikus, Blokkok, Rajzlapok, Szerkesztés és Nézet, mindegyikhez egy {{ui:Továbbiak}} menüvel. Ez a kiindulópont. |
| {{ui:Klasszikus rajzoló}} | Olyan szalag, amelyet úgy rendeztek el, mint a klasszikus 2D-s rajzolóprogramokat: egy {{ui:Fájl}} menü és gyorsgombok, majd a lapok: {{ui:Kezdőlap}} (Rajzolás, Módosítás, Feliratozás, Rétegek, Blokk, Tulajdonságok, Segédeszközök, Vágólap), {{ui:Beszúrás}}, {{ui:Feliratozás}}, {{ui:Parametrikus}}, {{ui:Nézet}}, {{ui:Kezelés}}, {{ui:Kimenet}} és {{ui:3D}}. A parancsokat továbbra is beírja. A középső gomb eltolja a rajzot; a jobb kattintás {{key:Enter}}, a jobb gombbal történő húzás nem csinál semmit. |
| {{ui:Szalag}} | Egyszerű feladatlapos szalag: {{ui:Rajzolás}}, {{ui:Módosítás}}, {{ui:Feliratozás}}, {{ui:Parametrikus}}, {{ui:Blokkok}}, {{ui:Rajzlapok}}, {{ui:Nézet}}, {{ui:3D}} és {{ui:Eszközök}} lapokkal, egy {{ui:Fájl}} menüvel és gyorsgombokkal a jobb oldalon. A középső és a jobb gomb eltol, a CadCraft saját stílusához hasonlóan. |

Minden stílus megtartja a CadCraft billentyűit: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, valamint az {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} billentyűk a rajzolási segédeszközökhöz. A betűk soha nem billentyűk: a CadCraft a parancssorba írja be őket.

A szalagok tartalmazzák a Rétegek panel eszközeit és az állapotsor rajzolási segédeszközeit is. A {{ui:3D}} lap akkor töltődik fel, miután a rajz alatti 3D lapot megnyitotta; a Modell lapon kiválasztott 3D eszköz előbb megnyitja a 3D lapot, a 3D lapon kiválasztott 2D eszköz pedig előbb visszavált a Modell lapra.

:::tip
Az a billentyű, amely a CadCraft saját elrendezéséhez tartozik, de a stílusában más parancsnak lett adva, nem tesz semmit, és az állapotsor megmondja, hová került a parancsa („A Saját billentyűk között az ortogonális mód: Ctrl+Alt+O”). A {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} és a nyilak mindig megtartják a jelentésüket. Amíg parancs fut, vagy amíg betűket írnak a parancssorba, a billentyűk a parancssorhoz tartoznak.
:::

## Saját készítésű stílus

1. Válassza ki a legközelebbi stílust, majd kattintson a {{ui:Testreszabás…}} gombra.
2. A {{ui:Billentyűk és menük}} lapon keressen egy parancsot (a keresőmező segít). Kattintson a {{ui:Billentyű hozzáadása}} gombra, és nyomja meg a billentyűt. Egy billentyűre kattintva eltávolítja.
3. Szalagnál a {{ui:Hol van}} beállítással a parancsot másik lapra és panelre, a {{ui:Fájl}} menübe, vagy a {{ui:Csak billentyűk}} lehetőséghez helyezheti át.
4. Az {{ui:Egér}} lapon állítsa be a görgőt és azokat a gombokat, amelyek a rajzot eltolják.
5. Adjon nevet, és kattintson a {{ui:Mentés}} gombra.

A beépített stílus mentése saját másolatot készít („Saját Klasszikus rajzoló”); a beépített stílus soha nem változik. Ha egy billentyű két parancshoz van rendelve, pirossal jelenik meg, és mentés előtt javítani kell.

## Parancsot beíró billentyűk

A {{cmd:SHORTCUTS}} (Nézet › Továbbiak › {{ui:Billentyűparancsok…}}) egy egész parancssort rendel egy billentyűhöz, például a {{key:Ctrl+Alt+L}} a `LINE`-t, az {{key:F9}} a `ZOOM E`-t. Ezek a billentyűk az éppen használt stílushoz tartoznak: a verzió első megnyitásakor a régebbi verzióban készített billentyűi egyszer átkerülnek a „Saját CadCraft billentyűk” nevű stílusba, és a korábbiak szerint működnek. A stílus exportálásakor ezek is vele mennek.

## Egér

- **Egérgörgő**: {{ui:A felfelé görgetés nagyít}} (a kiindulás) vagy {{ui:A felfelé görgetés kicsinyít}}, és hogy milyen gyorsan. A touchpad csippentése mindig az ujjai mozgásának irányában nagyít.
- **A rajz eltolása ezzel**: a középső gomb, a jobb gomb vagy mindkettő. A jobb kattintás húzás nélkül mindig {{key:Enter}}. A bal gomb a CadCraftban mindig kiválaszt és rajzol, így ennek bejelölése itt nem változtat semmit.
- **Húzás a 3D nézetekben**: a 3D lap minden stílusban a saját gombjait tartja meg (a bal gomb forgat, a középső és a jobb eltol).

## Magával viheti

{{ui:Exportálás}} a használt stílust egy kis `.ccinput.json` fájlba menti; az {{ui:Importálás…}} hozzáad egyet, másik számítógépről vagy kollégától. Az importált fájl csak a CadCraft saját parancsaira mutathat: minden más benne marad, és az állapotsorban megszámlálódik. Az {{ui:Ennek a stílusnak a törlése}} eltávolítja valamelyik saját stílusát.

:::note
Ezek a beállítások ebben a böngészőben maradnak. A stíluskártyák alatti {{ui:Ennek a stílusnak a használata minden alkalmazásban}} gomb minden alkalmazást a hozzá tartozó stílusban nyit meg (saját eszköztár, szalag vagy Klasszikus rajzoló), az egyes alkalmazásokban tett módosításokkal együtt. A CadCraftnak nincs menüsoros stílusa: ha egy másik alkalmazás menüsora van kiválasztva minden alkalmazásra, a CadCraft megtartja a saját eszköztárát.
:::

Kapcsolódó: [Billentyűzet és egér](topic:keyboard) · [A CadCraft beállításai](topic:settings) · [Áttérés más tervezőszoftverről](topic:coming-from) · [Parancsaliasok](topic:command-aliases)
