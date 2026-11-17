---
title: Beolvasott rajzok és a nyomkövetés
summary: Hozzon be egy beolvasott lapot, méretezze és egyenesítse, tisztítsa meg, törölje részeit, fogjon a vonalaihoz, és alakítsa vonalakká és ívekké.
keywords: beolvasás, beolvasott rajz, raszter, tiff, jpeg, png, léptékezés, igazítás, egyenesítés (deskew), pöttyök eltávolítása (despeckle), küszöbérték, fekete-fehér, kivágás, törlés, nyomkövetés, vektorizálás, fogás, ívek, sraffozás, papíralapú rajzok, régi rajzok, scanattach, scantrace
from: 36227e5b
---

## A papírlaptól a rajzelemekig

A beolvasott rajz kép. A CadCraft megtartja a megadott képet, és soha nem módosítja: minden tisztítási lépés új képet hoz létre, lépésenként egy visszavonási lépés, a {{cmd:SCANINFO}} pedig felsorolja az eredeti fájlt és az azóta megtett lépéseket. Semmi sem kerül feltöltésre, és semmit sem találgat betanított modell: a tisztítás és a nyomkövetés hagyományos képfeldolgozás, a saját számítógépén fut.

1. **Beszúrás.** A {{cmd:SCANATTACH}} PNG-, JPEG-, TIFF-fájlt (egy oldalt, vagy egy többoldalas fájl összes oldalát) vagy képként megjelenő PDF-oldalt olvas be. Megkérdezi az oldalt, a bal alsó sarkot és a szélességet. PDF-oldal esetén azt is megkérdezi, hány pixel/hüvelyk legyen az oldal rajzolásakor.
2. **Léptékezés.** {{cmd:SCANSCALE}}: jelöljön ki két pontot a letapogatáson, majd írja be a köztük lévő valódi távolságot. A lap az első pont körül lesz léptékezve.
3. **Igazítás.** {{cmd:SCANALIGN}}: jelöljön ki két pontot a letapogatáson, és a két helyet, ahová tartoznak; a lap mozdul és elfordul, hogy illeszkedjen, és léptéket is vált, hacsak nem válaszol Nem-mel.
4. **Egyenesítés.** A {{cmd:SCANDESKEW}} megméri a lap hosszú vonalainak szögét, megjeleníti azt, és azt is, mennyire biztos benne. Fogadja el, vagy írjon be sajátot, és a lap elfordul. Kevés hosszú vonalat tartalmazó lap figyelmeztetést kap: ellenőrizze a szöget, mielőtt elfogadja.
5. **Tisztítás.** A {{cmd:SCANCLEAN}} feketére és fehérre alakítja a lapot (az Auto előbb kiegyenlíti a papírt; az Adaptív jobban követi a papír változásait; a Szint egyetlen szám az egész lapra), és eltávolítja a beállított méretig a pöttyöket.
6. **Kivágás és törlés.** A {{cmd:SCANCROP}} egy ablakot tart meg. A {{cmd:SCANERASE}} téglalapot, sokszöget vagy lasszót töröl (nyomja le és húzza): bélyegzőket, megjegyzéseket, kávéfoltot.

A megtisztított kép az, amit a mentett DWG tartalmaz (egy IMAGE és egy IMAGEDEF, a kép fájljával a rajz mellett, mint minden képnél).

## Fogás a letapogatás vonalaira

A {{cmd:RASTERSNAP}} bekapcsolt állapotában (alapértelmezés) az objektumfogások a fekete-fehér letapogatás vonalait is megtalálják: a vonalak végpontjait, felezőpontjait, sarkait és metszéspontjait, a szokásos fogásjelekkel. A mutató alatti lapterület a mozgatás közben követésre kerül; nagyítson eléggé, hogy egy pixel néhány képernyőpixel legyen. A kijelölt résznél hosszabb vonalat a végpontjáig követi.

## A nyomkövetés

A {{cmd:SCANTRACE}} a lap vonalait vonalakká és ívekké alakítja egy új rétegen (SCAN-TRACE), egyetlen visszavonási lépésként, a letapogatás továbbra is alattuk marad. Beállítja:

- **Tűrés:** milyen messze lehet a követett vonal vagy ív a letapogatás vonalaitól, rajzegységben (a jelentés pixelben is megadja). A szoros tűrés minden hullámot követ; a laza kevesebb, egyenesebb darabot készít.
- **Ablak:** a lap egy sarka, vagy az egész lap.
- **Ívek:** kikapcsolva csak vonalakat készít.
- **Maradékok:** amit a nyomkövetés kihagyott, dobozokként rajzolódik egy rétegen, amelyet ki lehet kapcsolni, vagy nem rajzolódik ki.

A nyomkövetés megkeresi minden vonás közepét, követi azt, egyenes vonalakat és köríves íveket illeszt rá, összeköti azokat a szakaszokat, amelyeket egy másik vonal metszése szakított meg, a közel vízszintes és közel függőleges vonalakat pontosan vízszintessé és függőlegessé teszi, és lezárja a sarkokat. **A szöveg és a sraffozás raszter marad:** a betűméretű darabok félre lesznek téve, a rövid párhuzamos vonalak csoportjai pedig sraffozásnak minősülnek, és félre lesznek téve.

Befejezéskor közli, hány vonalat és ívet készített, a tűrést, és hány darabot hagyott rasterként. **Ez az, amit a pixelek adtak a megadott tűréssel, és nem állítja, hogy az eredmény helyes.** Hasonlítsa össze a lappal: a nyomkövetés elveszíthet egy halvány vonalat, összekapcsolhat két nagyon közeli vonalat, vagy rajzolhat vonalat ott, ahol csak folt van. Előbb tisztítsa meg a letapogatást (egyenesítve, fekete-fehéren, pöttyök nélkül), és az eredmény sokkal jobb lesz.

## Amit nem olvas be

A csempékben tárolt TIFF-fájlokat, a BigTIFF-et, a JPEG- vagy deflate-tömörítésű TIFF-et, a Group 3 faxkódolást és a külön síkokban tárolt színeket üzenettel elutasítja; mentse újra őket csíkokként LZW, PackBits, Group 4 vagy tömörítés nélkül. A lépcsőzetes (interlaced) PNG-fájlokat is elutasítja. A 128 MB-nál vagy 100 millió pixelnél nagyobb fájlokat elutasítja, a nyomkövetési ablak pedig legfeljebb 64 millió pixelt tartalmazhat.
