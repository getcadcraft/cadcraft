---
title: Álnevek szerkesztése
summary: Tartsa a saját parancs-álneveit egy szövegfájlban a megszokott formátumban, importálja és exportálja a .pgp fájlt, és töltse be újra a REINIT paranccsal.
keywords: álnév, álnevek, aliasedit, pgp, parancsikon, rövid név, reinit, billentyűzet, testreszabás, álnevek szerkesztése
from: 2282d36f
---

## Amit megtanul

Hogyan adhat saját rövid neveket a parancsokhoz, például `LL` nevet a {{cmd:LINE}} parancshoz, mindezt egyetlen szövegfájlban.

## Álnév hozzáadása

1. Nyissa meg a {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Álnevek szerkesztése…}} menüpontot, vagy írja be a {{cmd:ALIASEDIT}} parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. Adjon hozzá egy sort: az álnév, vessző, majd a parancs csillag után:

```
LL,     *LINE
```

3. Kattintson a {{ui:Mentés}} gombra. A parancssor kiírja, hány álnevét használják.
4. Írja be az `LL` parancsot, és nyomja meg az {{key:Enter}} billentyűt: elindul a LINE.

Az álnevei a CadCraft saját álnevei fölött állnak. Az Ön sora felülírja a beépített, azonos nevű álnevet; ha törli a sorát, a beépített álnév újra működik.

## Sorok, amelyeket a CadCraft elutasít

A szerkesztő gépelés közben minden problémát a sorszámával együtt jelez:

- a parancs nem létezik;
- az álnév maga egy parancs neve (a `LINE, *CIRCLE` elrejtené a LINE parancsot);
- a sor nem `ÁLNÉV, *PARANCS` alakú;
- ugyanaz az álnév két sorban szerepel (a későbbi sor érvényes).

A számítógépén programot indító sorok, mint a `NOTEPAD, START, 1, *File to edit: ,`, kimaradnak, és megjegyzés jelzi ezt: a böngészőben futó alkalmazás nem tud programot indítani.

## Álnevek átvétele másik programból

1. Az álnevek szerkesztőjében kattintson az {{ui:.pgp importálása…}} gombra, és válassza ki a fájlt. A `.pgp` fájlt a rajzra is húzhatja.
2. Ellenőrizze a felsorolt problémákat (a CadCraft által nem ismert parancsok kimaradnak, a többi működik).
3. Kattintson a {{ui:Mentés}} gombra.

Az {{ui:.pgp exportálása}} ugyanabban a formátumban menti egy fájlba a CadCraft álneveit és az Önéit.

## A fájl újratöltése

Írja be a {{cmd:REINIT}} parancsot, és nyomja meg az {{key:Enter}} billentyűt, hogy az álnévfájl újra érvényesüljön. A fájl ebben a böngészőben marad meg; az asztali alkalmazás a saját mappájában tárolja majd, a felhőszolgáltatás pedig szinkronizálja.

## Opcióbetűk egy parancshoz

Az álnév egy parancsot nevez meg. Ha a parancs opcióira adott betűket szeretné megváltoztatni (például a `P` a Polár opcióra az {{cmd:ARRAY}} parancsban), lásd: [Saját betűk megadása a parancsopciókhoz](topic:option-letters).

## Billentyűparancsok bármely parancshoz

Az álnevet beírják, a billentyűparancs egy billentyű. Ha saját billentyűt szeretne egy parancshoz rendelni:

1. Kattintson a {{ui:Nézet}} › {{ui:Továbbiak}} › {{ui:Billentyűparancsok…}} menüpontra, vagy írja be a `KEYS` parancsot, és nyomja meg az {{key:Enter}} billentyűt.
2. Kattintson a {{ui:Billentyű}} mezőre, és nyomja le a billentyűket, például {{key:Alt+Shift+C}}.
3. A {{ui:Futtatja}} mezőbe írja be a parancsot, és ha szeretné, azt is, amit utána kell beírni: `CIRCLE`, vagy `ZOOM E`.
4. Kattintson a {{ui:Hozzáadás}} gombra.

A billentyűparancshoz {{key:Mod}} vagy {{key:Alt}} szükséges egy betűvel vagy számjeggyel, vagy egy szabad funkcióbillentyű ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). A CadCraft, az alkalmazás vagy a böngésző által már használt billentyűk, valamint a saját eszközök gombjainak billentyűi (lásd: [Saját gombok](topic:my-tools)) nem fogadhatók el, és a mező megmondja, miért. A billentyűparancsok ebben a böngészőben (vagy az asztali alkalmazásban) maradnak meg; az {{ui:Eltávolítás}} gombbal törölheti őket.
