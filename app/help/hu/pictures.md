---
title: Képek egy rajzban
summary: Helyezzen el PNG- vagy JPEG-képet, vágja le téglalapra vagy sokszögre, mutassa meg a DWG által használt képeket, és plottolja őket élesen.
keywords: pastearea, parea, területmásolás, másolt terület, markupcraft, valódi méret, valós méret, fedvény, ole, ole2frame, beágyazott objektum, kép beillesztése, képernyőkép, ctrl+v, vágólapi kép, képernyőkép, kép, image, imageattach, iat, kép, imageclip, clip, png, jpeg, jpg, logó, fénykép, raszter, imagedef, xref, plottolás, pdf, felbontás
from: 4025ac97
---

## Mit fog létrehozni

Egy cégbeli logó egy rajzfejbe helyezve, a kívánt részére levágva, és egy PDF, amelyben saját felbontásában nyomtatódik.

## Kép elhelyezése

1. Írja be: {{cmd:IMAGEATTACH}} (vagy `IAT`), majd nyomja meg az {{key:Enter}} billentyűt. Válasszon ki egy PNG vagy JPEG fájlt.
2. A `Specify the lower-left corner` kérésnél kattintson, vagy írjon be egy pontot.
3. A `Specify its width` kérésnél add meg a szélességet rajzegységben. Az {{key:Enter}} megtartja a felajánlott szélességet: egy egység pixelenként, vagy azt a szélességet, amelyet ehhez a fájlhoz legutóbb megadott (a kérés megmondja, melyiket).
4. A `Specify its rotation angle` kérésnél az {{key:Enter}} billentyű nem forgat.

A kép egyetlen objektum: keretével jelölje ki, és mozgassa, másolja, forgassa, méretezze vagy törölje, mint bármely blokkot.

:::note
A képfájl a megnyitott rajzhoz kötődik. A mentett DWG megnevezi a fájlt, ahogy más programok is; a képpontokat nem tartalmazza. A képet tartsa a rajz mellett.
:::

## Képernyőkép vagy másolt kép beillesztése

1. Másolja ki a képet (képernyőkép a {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=a képernyőkép-készítő eszköze}} használatával, vagy a Kép másolása egy másik programban vagy böngészőben).
2. Mutasson arra a helyre a rajzon, ahová kerüljön, és nyomja meg az {{key:Mod+V}} billentyűt.

A kép bal alsó sarka a mutatóra kerül (vagy a nézet közepére), szélessége a látható rész 40%-a; mozgassa, méretezze és vágja le, mint bármely képet. Neve a rajz nevével lesz, `-picture-1.png` végződéssel (majd `-2`, …), az előzmények ezt is megmondják. Az {{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Kép beillesztése}} ugyanezt végzi a menüből (a böngésző előbb rákérdezhet).

A DWG csak a kép fájlnevét tárolja, így a rajz mentésekor a kép is külön fájlként mentődik. A kettőt tartsa ugyanabban a mappában: a rajz onnan mutatja a képet. A böngészőben ez egy második letöltés, az előzmények ezt is jelzik. Ha a vágólapon csak CadCraft-objektumok vannak, a {{key:Mod+V}} ezeket illeszti be, mint korábban.

## Másolt terület beillesztése a MarkupCraftból

A MarkupCraftban a {{ui:Terület másolása}} a rajzlap egy részét olyan képként másolja, amely tudja a saját méretét. A CadCraft ezen a méreten illeszti be.

1. A MarkupCraftban másolja a területet (téglalap, kör vagy szabad alakzat; a {{ui:Másolás fedvényként}} akkor, ha a rajzot át akarja látni rajta).
2. A CadCraftban nyomja meg az {{key:Mod+V}} billentyűt, vagy írja be: {{cmd:PASTEAREA}} (vagy `PAREA`), vagy válassza a {{ui:Szerkesztés}} › {{ui:Továbbiak}} › {{ui:Másolt terület beillesztése}} menüpontot.
3. A `Specify the lower-left corner of the copied area` kérésnél kattintson, vagy írjon be egy pontot. A másolt terület méretével azonos keret követi a mutatót.

Így lesz a mérete:

- **A rajzlapnak volt rajzléptéke:** valós méretében, a rajz egységeiben (egy 1:50-es, 2 m hosszú lépcső részlete egy méteres rajzban 2 m hosszú, egy hüvelykes rajzban 78,74). Több kérdés nincs.
- **A rajzlapnak nem volt léptéke:** a CadCraft kiírja a papíron mért méretét, és léptéket kér: írja be a `100`-at egy 1:100-as rajzlaphoz, nyomja meg az {{key:Enter}} billentyűt a papírmérethez, vagy írja be: `P`, kattintson két pontra a beillesztett képen, és írja be, mennyire vannak egymástól valójában (ahogy a {{cmd:SCANSCALE}} teszi). A másolt terület bal alsó sarka ott marad, ahová tette.

Mértékegység nélküli rajz milliméterben kezelődik, ahogy a PDF-háttérrajz is. A fedvény papírja áttetsző marad, és olyan halványan indul, amilyen halvány volt másoláskor; a körön vagy szabad alakzaton kívül is áttetsző. A beillesztett terület egy kép, mint bármely más: mozgatható, forgatható, méretezhető, vágható vagy törölhető, az egész beillesztés pedig egy visszavonási lépés. DWG-ként mentve IMAGE, megtartva halványítását és átlátszóságát.

Az {{key:Mod+V}} akkor illeszti be a területet, ha a vágólapon lévő kép a területé, vagy ha a terület a CadCraftban másolt bármi után lett másolva (és az elmúlt 6 órában). Ellenkező esetben a korábbi módon illeszt be. A {{cmd:PASTEAREA}} bármikor beilleszti az utoljára másolt területet.

## Egy DWG által használt képek megjelenítése

A DWG csak azt tárolja, hol voltak a képei, így a CadCraft mindegyiket a fájlnevével ellátott keretként mutatja.

1. Írja be: {{cmd:IMAGE}} (vagy `IM`). A parancssor felsorolja az egyes képfájlokat, és azt, hogy látszanak-e.
2. Válassza ki a fájlokat (egyszerre többet is). Az a fájl is számít, amelynek neve tartalmazza a rajzban megnevezettet, mert az exportok gyakran projektprefixet adnak hozzá.

## Kép kivágása

1. Írja be: {{cmd:IMAGECLIP}} (vagy `ICL`), és jelölje ki a képet.
2. Válassza az `R` lehetőséget, és kattintson két sarokra, vagy a `P`-t és egy sokszög pontjait, majd nyomja meg az {{key:Enter}} billentyűt. A `D` eltávolítja a vágást.

## Képek plottolása

A képek képként kerülnek a PDF-be, saját felbontásukban és a vonalak alatt. A {{ui:Plottolás}} párbeszédpanelen a {{ui:Képek}} 600, 300 vagy 150 dpi-re korlátozhatja őket, hogy a fájl kisebb legyen. A JPEG változatlanul kerül be.

## Mentés helye szerint

| Formátum | Képek |
|---|---|
| DWG (minden verzió) | Képként (IMAGE), a vágással együtt |
| DXF | Keretként, a fájlnévvel; a mentés ezt jelzi |

## Más programok objektumai (OLE)

Egy rajz tartalmazhat más program által készített objektumokat, például egy rajzolóprogramból származó képet vagy egy táblázatkezelő tartományát (OLE-objektumok). A CadCraft ezeket nem futtatja és nem szerkeszti, újakat sem tud beszúrni. Ezt teszi:

- **DXF-ben** az OLE-objektum keretként nyílik meg. Ha az objektum elmentett egy képet magáról, és az bitkép, a kép a keretben rajzolódik; egyébként a keret címkét hordoz az objektum típusával, például „Microsoft Excel Worksheet (OLE)”. A keretet úgy mozgathatja, másolhatja és törölheti, mint egy blokkot. A {{cmd:SAVEAS}} DXF 2000-be az OLE-objektumot újra OLE-objektumként írja, adatai változatlanok.
- **DWG-ben** az objektumok megmaradnak, és DWG-ként mentéskor byte-ra pontosan visszaíródnak, de **nem jelennek meg**: a DWG az objektum helyét a saját adatain belül tárolja, a CadCraft ezt még nem olvassa. Az előzmények megadják, hány maradt meg. Írja be a {{cmd:OLELIST}} parancsot, hogy lássa, mik ezek (típus, méret, van-e elmentett képük), és egy kép másolatát tegye oda, ahová szeretné: a **Helyezés** kéri a számot, a bal alsó sarkot és a szélességet, és a képpel együtt keretet rajzol. Ez a másolat egy keret, amelyet mozgathat vagy törölhet; maga az objektum a rajzban marad, és mentéskor továbbra is visszaíródik.
- Egy DXF-ből származó objektum DWG-ben csak a keretével és címkéjével mentődik; az előzmények ezt jelzik. Az objektumot magát a DXF 2000 mentésével őrizheti meg.
- A metafájlként mentett képek (amit sok program ment) nem rajzolódnak: helyette a keret és a címke látszik.

## Gyakori hibák

| Mit lát | Miért | Javítás |
|---|---|---|
| Keret fájlnévvel | A CadCraft nem rendelkezik a fájllal | {{cmd:IMAGE}}, majd válassza ki a fájlt |
| „Ez nem kép.” | A kiválasztott objektum nem kép | Jelölje ki a kép keretét |
