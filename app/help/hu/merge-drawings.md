---
title: Két személy módosításainak összefésülése egy rajzon
summary: Hagyja, hogy a git, a Fossil vagy a Mercurial objektumonként összefésülje a DWG vagy DXF két példányát, a CadCraft minden objektumon tárolt kulcsát használva.
keywords: összefésülés, merge, git, fossil, mercurial, verziókezelés, diff, ütközés, háromutas, cadcraft merge, kulcs, gitattributes, DWG, DXF
from: 71482bf9
---

Két személy szerkeszti ugyanazt a rajzot. Ha különböző objektumokat módosítottak, az összefésülés automatikus lehet: nincs kézzel újra teendő.

## Mi teszi lehetővé

A CadCraft minden rajzolt objektumnak ad egy rövid **kulcsot**, amely soha nem változik, és soha nem kap két objektum. Ez a DWG- vagy DXF-fájlban az objektummal együtt tárolódik (extra adatként, amelyet más programok megtartanak). Az összefésülés a kulcs alapján keresi meg az objektumokat, nem a fájlbeli helyük alapján, mert minden program mentéskor újraszámozza a helyeket. Kikapcsolható a {{ui:Beállítások}} › CadCraft › Összefésülésbarát fájlok menüben, ha soha nem fésül össze; ekkor a fájlok körülbelül 10 százalékkal kisebbek lesznek.

A kulcsok előtt mentett rajz is összefésülhető: az objektumai kulcsot kapnak a fájlbeli helyük alapján, ugyanúgy mindenki számára, aki megnyitja.

## Beállítás

A gitnek egyszer, tárolónként két sor kell:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# egyszer, minden gépen
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Git nélkül kézzel futtassa: `cadcraft merge <base> <ours> <theirs> -o <result>`. A Fossil és a Mercurial ugyanezt a három fájlt kapja a saját összefésülőeszköz-beállításában.

## Szabályok

- Az csak az egyik oldalon módosított objektum átkerül. Ugyanaz a módosítás mindkét oldalon egyszer kerül át.
- Ha ugyanazt a tulajdonságot kétféleképpen módosították, az **ütközés**: az Ön oldala marad, és a jelentés mindkét értéket felsorolja. Nyissa meg az eredményt, nézze meg az objektumot, és javítsa kézzel.
- Bármelyik oldalon hozzáadott objektum megmarad. Az egyik oldalon törölt, a másikon érintetlen objektum törlődik. Az egyik oldalon törölt, a másikon módosított objektum: törlődik, és jelentésbe kerül.
- A rétegek, blokkok, szöveg- és méretezési stílusok, rajzlapok és elnevezett nézetek ugyanígy fésülődnek össze. A kényszerek a nevükben szereplő objektumokat követik.
- Az eredmény ugyanabban a fájlformátumban és verzióban íródik, mint az eredeti.

Nem fésülődik össze: a rajzolási sorrend az Öné, azután a másik oldal által hozzáadott objektumok. Ugyanazon blokkdefiníció módosításai mindkét oldalon ütközést okoznak, sosem keverednek. Semmi nem töltődik fel; minden az Ön számítógépén fut.
