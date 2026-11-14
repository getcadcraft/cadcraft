---
title: Puska: a 40 leggyakoribb parancs
summary: Egy oldal a leggyakrabban használt 40 paranccsal, azok rövid nevével és az időt spóroló billentyűkkel. Töltse le PDF-ként nyomtatáshoz.
keywords: puska, gyorsreferencia, parancsok, álnevek, rövid nevek, kezdő, törlés, vágás, nyomtatás, pdf, billentyűparancsok
from: 2d40edc4
---

Írja be a rövid nevet (az álnevet), és nyomja meg az Entert, vagy kattintson az eszközre. Az Esc megszakít. Az Enter üres soron az utolsó parancsot ismétli.

**Nyomtassa ki:** [cheat-sheet.pdf](https://getcadcraft.com/assets/apps/cadcraft/current/cheat-sheet.pdf) (egy A4-es oldal; Letter papíron nyomtassa „oldalhoz igazítva”).

## Rajzolás

| Beírandó | Parancs | Mit csinál |
|---|---|---|
| `L` | {{cmd:LINE}} | Egyenes vonalak rajzolása |
| `PL` | {{cmd:PLINE}} | Összefüggő vonal- és ívlánc rajzolása |
| `C` | {{cmd:CIRCLE}} | Kör rajzolása (középpont és sugár) |
| `A` | {{cmd:ARC}} | Ív rajzolása |
| `REC` | {{cmd:RECTANG}} | Téglalap rajzolása két sarokból |
| `POL` | {{cmd:POLYGON}} | Szabályos sokszög rajzolása |
| `EL` | {{cmd:ELLIPSE}} | Ellipszis rajzolása |
| `DT` | {{cmd:TEXT}} | Egy sor szöveg írása |
| `T` | {{cmd:MTEXT}} | Tördelődő szöveg írása (bekezdés) |
| `H` | {{cmd:HATCH}} | Terület kitöltése mintával |

## Módosítás

| Beírandó | Parancs | Mit csinál |
|---|---|---|
| `M` | {{cmd:MOVE}} | Objektumok mozgatása |
| `CO` | {{cmd:COPY}} | Objektumok másolása |
| `RO` | {{cmd:ROTATE}} | Objektumok forgatása egy pont körül |
| `SC` | {{cmd:SCALE}} | Objektumok nagyítása vagy kicsinyítése |
| `MI` | {{cmd:MIRROR}} | Objektumok tükrözése egy vonalra |
| `O` | {{cmd:OFFSET}} | Párhuzamos másolat rajzolása adott távolságra |
| `TR` | {{cmd:TRIM}} | Objektumok visszavágása addig, ahol mások keresztezik őket |
| `EX` | {{cmd:EXTEND}} | Objektumok hosszabbítása másokig |
| `F` | {{cmd:FILLET}} | Sarok lekerekítése ívvel |
| `CHA` | {{cmd:CHAMFER}} | Sarok levágása egyenes éllel |
| `E` | {{cmd:ERASE}} | Objektumok törlése |
| `X` | {{cmd:EXPLODE}} | Blokk vagy polivonal felbontása részeire |
| `S` | {{cmd:STRETCH}} | A keresztező ablakon belüli végek mozgatása |
| `AR` | {{cmd:ARRAY}} | Másolás rácsban vagy körben |
| `J` | {{cmd:JOIN}} | Vonalak és ívek egyesítése egy objektummá |
| `BR` | {{cmd:BREAK}} | Objektum kettévágása, vagy egy darab kivétele |

## Méretezés

| Beírandó | Parancs | Mit csinál |
|---|---|---|
| `DLI` | {{cmd:DIMLINEAR}} | Méretezés vízszintesen vagy függőlegesen |
| `DAL` | {{cmd:DIMALIGNED}} | Méretezés ferde vonal mentén |
| `DRA` | {{cmd:DIMRADIUS}} | Sugár méretezése |
| `DAN` | {{cmd:DIMANGULAR}} | Szög méretezése |

## Blokkok és rétegek

| Beírandó | Parancs | Mit csinál |
|---|---|---|
| `B` | {{cmd:BLOCK}} | Blokk készítése objektumokból |
| `I` | {{cmd:INSERT}} | Blokk elhelyezése |
| `LA` | {{cmd:LAYER}} | A rétegek megnyitása |

## Nézet és lekérdezés

| Beírandó | Parancs | Mit csinál |
|---|---|---|
| `Z` | {{cmd:ZOOM}} | Nagyítás, kicsinyítés vagy mindenre nagyítás (E) |
| `DI` | {{cmd:DIST}} | Távolság és szög mérése |
| `LI` | {{cmd:LIST}} | Egy objektum részleteinek megjelenítése |
| `MA` | {{cmd:MATCHPROP}} | Egy objektum megjelenésének másolása másokra |

## Fájl

| Beírandó | Parancs | Mit csinál |
|---|---|---|
| `U` | {{cmd:UNDO}} | Az utolsó parancs visszavonása |
| `SAVE` | {{cmd:SAVE}} | A rajz mentése |
| `PLOT` | {{cmd:PLOT}} | Plottolás PDF-be |

## Billentyűk

Ctrl (Macen Cmd): Z visszavonás · Y ismétlés · S mentés · P plottolás.  F3 objektumfogás · F8 ortho · F10 polár.  A szóköz vagy az Enter az utolsó parancsot ismétli · a görgő nagyít · a görgő húzása eltol

Új a rajzolásban? Írja be: `TOUR` a vezetett első rajzhoz, olvassa el az [Első lépések](topic:getting-started) témakört, vagy nézze meg az összes parancsot a [Parancsok](topic:commands) között. Más rajzolóprogramokból érkezőknek: [Más rajzolóprogramokból érkezőknek](topic:coming-from) és a [parancstérkép](topic:command-map).
