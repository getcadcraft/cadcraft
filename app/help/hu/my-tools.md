---
title: Saját gombok (Saját eszközök)
summary: Adjon hozzá eszköztári gombokat, amelyek saját makróit futtatják, rendeljen hozzájuk billentyűparancsokat, ossza meg őket fájlként, és hozzon át gombokat egy CUIx testreszabó fájlból.
keywords: saját eszközök, egyéni gombok, eszköztári gombok, makró, makrók, cui, cuix, testreszabás, menü, billentyűparancsok, billentyűkombinációk, diesel, ^c^c, gombok importálása, gombok exportálása
from: 36618802
---

## Amit megtanul

Hogyan helyezzen saját gombokat az eszköztárra, amelyek mindegyike az AutoCAD módjára írt makrót futtat, hogyan rendeljen egy gombhoz billentyűt, és hogyan hozza át egy CUIx-fájl gombjait.

## Gomb hozzáadása

1. Nyissa meg a {{ui:Settings}} ({{key:Mod+,}}) lapot, és maradjon a {{ui:CadCraft}} lapon. Görgessen a {{ui:My tools}} részig.
2. Kattintson az {{ui:Add a button…}} gombra.
3. Töltse ki a mezőket:
   - {{ui:Group}}: az eszköztári csoport, amelybe a gomb kerül, például `Saját eszközök`. Új név új csoportot hoz létre.
   - {{ui:Label}}: a gombon lévő szöveg.
   - {{ui:Macro}}: amit a gomb beír, például `^C^C_rectang;0,0;@100,50;`.
   - {{ui:Shortcut key}}: kattintson a mezőbe, és nyomja meg a billentyűket, például a {{key:Ctrl+Alt+B}}t.
   - {{ui:Icon}}: legfeljebb 64 KB méretű PNG vagy SVG kép, vagy semmi (ekkor csillag jelenik meg).
4. Kattintson a {{ui:Save}} gombra.

A gomb az eszköztár végén jelenik meg, a csoportjában. Kattintson rá, vagy nyomja meg a billentyűjét a futtatáshoz. A listában az {{ui:Edit}} és a {{ui:Delete}} módosítja vagy eltávolítja.

## Makró írása

A makró az, amit a parancssorba írna be, néhány jellel kiegészítve:

| Jel | Jelentése |
|---|---|
| `^C` | Megszakítja a futó műveletet (a `^C^C` a szokásos kezdés) |
| `;` vagy szóköz | {{key:Enter}} |
| `\` | Vár Önre: egy kattintásra vagy begépelt válaszra, utána a makró folytatódik |
| `_` vagy `.` parancs előtt | Elfogadja és figyelmen kívül hagyja (nemzetközi és beépített nevek) |
| `*` a legelején | Újra fut, valahányszor véget ér, amíg meg nem nyomja az {{key:Esc}} billentyűt |
| `^O`, `^G` | Be- vagy kikapcsolja az Orthot, illetve a rácsot |
| `$M=` | A többi DIESEL. Csak a `$(if,…)`, `$(getvar,…)`, `$(=,…)` és `$(eq,…)` olvasódik; a más funkciót használó gomb ezt jelzi, és nem tesz semmit |

Példák:

- `^C^C_line;0,0;@100,0;;` a nullpontból egy 100 hosszú vonalat rajzol.
- `^C^C_circle;\25;` kéri a középpontot, majd ott egy 25 sugarú kört rajzol.
- `^C^C_turnright` a nézetet 90°-kal jobbra fordítja.

## Billentyűparancsok

A billentyűparancshoz {{key:Mod}} (Ctrl, Macen a Cmd) vagy {{key:Alt}} kell egy betűvel vagy számjeggyel, illetve az egyik szabad funkcióbillentyű: {{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}. A betűk önmagukban a parancssorba mennek. A CadCraft, az alkalmazás vagy a böngésző által már használt billentyűk (például a {{key:Ctrl+S}} vagy a {{key:Ctrl+Z}}), valamint az, amelyet már másik gomb használ, nem fogadható el, és a doboz megmondja, miért.

## Gombjai megosztása

- Az {{ui:Export…}} minden csoportot és gombot elment (ikonokkal és billentyűkkel együtt) `my-tools.json` néven.
- Az {{ui:Import…}} hozzáadja egy ilyen fájl csoportjait az Önéi után. Ha már használt csoportnevet ad meg, az „(2)” utótagot kap; a már foglalt billentyű kimarad, és a panel ezt jelzi.

## Gombok átvétele egy CUIx-fájlból

1. Kattintson az {{ui:Import CUIx…}} gombra, és válassza ki a `.cuix` fájlt.

Eszköztárai és szalagpanelei csoportokká válnak, minden gomb a makrójával és a képével (PNG, vagy PNG-vé alakított BMP). Billentyűparancsai saját csoportba kerülnek, minden gomb a billentyűjével; az esetleg hordozott parancsálneveket az {{ui:Aliases}} csoport kapja. A panel felsorolja, mi érkezett át.

:::note
A fájl csak olvasásra kerül. A CadCraftban nem létező parancsokat név szerint sorolja fel, nem találgat: a gombjaik kattintásra jelzik ezt. A fentieken túli DIESEL-funkciók, a menük, az egérgombok és a munkaterületek nem olvasódnak be.
:::

## Jó tudni

- A gombok ebben a böngészőben (vagy ebben az asztali alkalmazásban) maradnak meg, nem a rajzokban.
- A gomb a parancssoron keresztül fut, így úgy vonható vissza, mint bármi, amit beír: futtatott parancsonként egy {{key:Mod+Z}}.
