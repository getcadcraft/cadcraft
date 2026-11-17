---
title: Parancsálnevek szerkesztése
summary: Saját parancsálneveit egyetlen szövegfájlban tartsa a megszokott formátumban, importálja és exportálja a .pgp fájlt, és a REINIT paranccsal töltse újra.
keywords: álnév, álnevek, aliasedit, pgp, billentyűparancs, rövid név, reinit, billentyűzet, testreszabás, álnevek szerkesztése
from: 6ab6fa0e
---

## Amit megtanul

Hogyan adhat hozzá saját rövid neveket a parancsokhoz, például `LL`-t a {{cmd:LINE}} parancshoz, mindezt egyetlen szövegfájlban.

## Álnév hozzáadása

1. Nyissa meg a {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Álnevek szerkesztése…}} menüpontot, vagy írja be a {{cmd:ALIASEDIT}} parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. Adjon hozzá egy sort: az álnevet, vesszőt, majd a parancsot egy csillag után:

```
LL,     *LINE
```

3. Kattintson a {{ui:Mentés}} gombra. A parancssor megmondja, hány álnevét használják.
4. Írja be a `LL` parancsot, és nyomja meg az {{key:Enter}} billentyűt: indul a LINE.

Az álnevei a CadCraft saját álnevei fölött állnak. Az Ön sora felülírja a beépített álnevet, ha azonos nevű; törölje a sorát, és a beépített álnév visszatér.

## Sorok, amelyeket a CadCraft elutasít

A szerkesztő beírás közben minden hibát a sorszámával együtt listáz:

- a parancs nem létezik;
- az álnév maga egy parancs neve (a `LINE, *CIRCLE` elrejtené a LINE-t);
- a sor nem `ALIAS, *COMMAND` alakú;
- ugyanaz az álnév két sorban szerepel (a későbbi érvényesül).

A számítógépén programot indító sorok, mint a `NOTEPAD, START, 1, *File to edit: ,`, megjegyzéssel kimaradnak: a böngészőben futó alkalmazás nem indíthat programokat.

## Álnevek átvétele más programból

1. Az álnevek szerkesztőjében kattintson a {{ui:.pgp importálása…}} gombra, és válassza ki a fájlt. A `.pgp` fájlt a rajzra is húzhatja.
2. Ellenőrizze a felsorolt problémákat (a CadCraft által nem ismert parancsok elutasításra kerülnek, a többi működik).
3. Kattintson a {{ui:Mentés}} gombra.

A {{ui:.pgp exportálása}} a CadCraft álneveit és az Önéit egy fájlba menti, ugyanabban a formátumban.

## A fájl újratöltése

Írja be a {{cmd:REINIT}} parancsot, és nyomja meg az {{key:Enter}} billentyűt, hogy az álnévfájl ismét érvényesüljön. Ez a böngészőben marad meg; az asztali alkalmazás a saját mappájában tartja majd, a felhős szolgáltatás pedig szinkronizálja.

## Billentyűparancsok bármely parancshoz

Az álnevet be kell gépelni; a billentyűparancs egy billentyű. Ha saját billentyűt szeretne egy parancshoz rendelni:

1. Kattintson a {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Billentyűparancsok…}} menüpontra, vagy írja be a `KEYS` parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. Kattintson a {{ui:Billentyű}} mezőre, és nyomja le a billentyűket, például {{key:Alt+Shift+C}}.
3. A {{ui:Futtatja}} mezőbe írja be a parancsot, és ha szeretné, azt is, amit utána kell beírni: `CIRCLE`, vagy `ZOOM E`.
4. Kattintson a {{ui:Hozzáadás}} gombra.

A billentyűhöz {{key:Mod}} vagy {{key:Alt}} szükséges egy betűvel vagy számjeggyel, vagy egy szabad funkcióbillentyű ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). A CadCraft, az alkalmazás vagy a böngésző által már használt billentyűket, valamint azokat, amelyeket egy Saját eszközök gomb használ (lásd: [Saját gombok](topic:my-tools)), elutasítjuk, a doboz pedig megmondja, miért. A billentyűparancsok ebben a böngészőben (vagy az asztali alkalmazásban) maradnak meg; az {{ui:Eltávolítás}} gomb eltávolít egyet.
