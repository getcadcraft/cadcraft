---
title: Rajzlapok automatikus elrendezése
summary: Helyezze el a rajz részeit automatikusan rajzlapokra: a CadCraft papírméretet és egy ahhoz illeszkedő szabványos méretarányt választ, minden részt címmel és alatta a méretaránnyal helyez el, és mindent szerkeszthetőn hagy.
keywords: rajzlap, rajzlapok, elrendezés, elrendezések, papír, méretarány, automatikus, AUTOSHEET, rajzfej, nézetablakok, elnevezett nézetek
from: 7f315dff
---

Válassza a **Nézet › Továbbiak › Rajzlapok automatikus elrendezése** menüpontot (vagy írja be a {{cmd:AUTOSHEET}} parancsot). A CadCraft megkeresi a rajz részeit (az elnevezett nézeteit vagy a modell különálló csoportjait), választ egy papírméretet és egy szabványos méretarányt, amelyben azok elférnek, majd új rajzlapokra helyezi őket: mindegyiken rajzfej, felirat és a méretarány van.

A futtatás előtt megváltoztathatja, mit csináljon: **Részek** (elnevezett nézetek, csoportok, az egész rajz, vagy a program döntése), **Papír** (automatikus, vagy egy méret, például `iso-a1`), **Méretarány** (egy közös mindenre, vagy mindegyik részé a saját) és **Rajzlapok** (hány rész kerül egy rajzlapra).

A rajzlapok közönséges rajzlapok: a nézetablakot áthelyezheti, méretarányát megváltoztathatja, vagy a rajzlapot szokás szerint törölheti. Az összes új rajzlap visszavonásához nyomja meg egyszer a {{key:Ctrl+Z}} billentyűkombinációt.

## Jelmagyarázatok

A {{cmd:AUTOSHEET}} parancsban válassza a **Jelmagyarázat** lehetőséget, hogy minden rajzlap nézetei alatt számozott jelmagyarázat jelenjen meg. Ez a nézetekben látható rétegeket sorolja fel, soronként egy számmal, sima szövegként, amelyet úgy szerkeszthet, mint bármely más szöveget. Válassza a **Fájl** lehetőséget a saját jelmagyarázat-listájának beolvasásához (soronként egy szám és a hozzá tartozó szöveg, tabulátorral, vesszővel vagy pontosvesszővel elválasztva): ha egy réteg neve megegyezik a listában szereplő számmal, az a hozzá tartozó szöveget kapja. Az alkalmazással nem érkezik jelmagyarázat-lista.
