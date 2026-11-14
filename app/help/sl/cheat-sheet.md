---
title: Hitri pregled: 40 vsakdanjih ukazov
summary: Ena stran z 40 ukazi, ki jih boste uporabljali najpogosteje, njihovimi kratkimi imeni in tipkami, ki prihranijo čas. Prenesite jo kot PDF za tiskanje.
keywords: hitri pregled, referenca, ukazi, aliasi, kratka imena, začetnik, izbriši, prirezi, natisni, pdf, bližnjice
from: 2d40edc4
---

Vnesite kratko ime (alias) in pritisnite Enter ali kliknite orodje. Esc prekliče. Enter v prazni vrstici ponovi zadnji ukaz.

**Natisnite ga:** [cheat-sheet.pdf](https://getcadcraft.com/assets/apps/cadcraft/current/cheat-sheet.pdf) (ena stran A4; na papirju Letter ga natisnite z možnostjo „prilagodi na stran“).

## Riši

| Kratica | Ukaz | Kaj naredi |
|---|---|---|
| `L` | {{cmd:LINE}} | Riše ravne črte |
| `PL` | {{cmd:PLINE}} | Riše povezano verigo črt in lokov |
| `C` | {{cmd:CIRCLE}} | Riše krožnico (središče in polmer) |
| `A` | {{cmd:ARC}} | Riše lok |
| `REC` | {{cmd:RECTANG}} | Riše pravokotnik iz dveh oglišč |
| `POL` | {{cmd:POLYGON}} | Riše pravilni mnogokotnik |
| `EL` | {{cmd:ELLIPSE}} | Riše elipso |
| `DT` | {{cmd:TEXT}} | Napiše eno vrstico besedila |
| `T` | {{cmd:MTEXT}} | Napiše besedilo, ki se prelama (odstavek) |
| `H` | {{cmd:HATCH}} | Zapolni območje z vzorcem |

## Spreminjanje

| Kratica | Ukaz | Kaj naredi |
|---|---|---|
| `M` | {{cmd:MOVE}} | Premakne objekte |
| `CO` | {{cmd:COPY}} | Kopira objekte |
| `RO` | {{cmd:ROTATE}} | Zasuče objekte okoli točke |
| `SC` | {{cmd:SCALE}} | Poveča ali pomanjša objekte |
| `MI` | {{cmd:MIRROR}} | Zrcali objekte čez črto |
| `O` | {{cmd:OFFSET}} | Riše vzporedno kopijo na razdalji |
| `TR` | {{cmd:TRIM}} | Prireže objekte do mesta, kjer jih sekajo drugi |
| `EX` | {{cmd:EXTEND}} | Podaljša objekte do drugih |
| `F` | {{cmd:FILLET}} | Zaobli oglišče z lokom |
| `CHA` | {{cmd:CHAMFER}} | Posname oglišče z ravnim robom |
| `E` | {{cmd:ERASE}} | Izbriše objekte |
| `X` | {{cmd:EXPLODE}} | Razstavi blok ali polilinijo na dele |
| `S` | {{cmd:STRETCH}} | Premakne krajišča znotraj okna sekanja |
| `AR` | {{cmd:ARRAY}} | Kopira v mreži ali krogu |
| `J` | {{cmd:JOIN}} | Združi črte in loke v en objekt |
| `BR` | {{cmd:BREAK}} | Prereže objekt na dva dela ali odstrani kos |

## Kotiranje

| Kratica | Ukaz | Kaj naredi |
|---|---|---|
| `DLI` | {{cmd:DIMLINEAR}} | Koti vodoravno ali navpično |
| `DAL` | {{cmd:DIMALIGNED}} | Koti vzdolž poševne črte |
| `DRA` | {{cmd:DIMRADIUS}} | Koti polmer |
| `DAN` | {{cmd:DIMANGULAR}} | Koti kot |

## Bloki in sloji

| Kratica | Ukaz | Kaj naredi |
|---|---|---|
| `B` | {{cmd:BLOCK}} | Ustvari blok iz objektov |
| `I` | {{cmd:INSERT}} | Vstavi blok |
| `LA` | {{cmd:LAYER}} | Odpre sloje |

## Pogled in poizvedba

| Kratica | Ukaz | Kaj naredi |
|---|---|---|
| `Z` | {{cmd:ZOOM}} | Povečava, pomanjšava ali prikaz vsega: Obseg (E) |
| `DI` | {{cmd:DIST}} | Izmeri razdaljo in kot |
| `LI` | {{cmd:LIST}} | Prikaže podrobnosti objekta |
| `MA` | {{cmd:MATCHPROP}} | Prenese videz enega objekta na druge |

## Datoteka

| Kratica | Ukaz | Kaj naredi |
|---|---|---|
| `U` | {{cmd:UNDO}} | Razveljavi zadnji ukaz |
| `SAVE` | {{cmd:SAVE}} | Shrani risbo |
| `PLOT` | {{cmd:PLOT}} | Izris v PDF |

## Tipke

Ctrl (Cmd na Macu): Z razveljavi · Y uveljavi · S shrani · P izris.  F3 lovljenje objektov · F8 ortogonalno · F10 polarno.  Space ali Enter ponovi zadnji ukaz · kolesce povečuje · vlečenje kolesca pomika

Ste novi pri risanju? Vnesite `TOUR` za vodeno prvo risbo, preberite [Začetek dela](topic:getting-started) ali poglejte vse ukaze v [Ukazi](topic:commands). Prihajate iz drugega programa za risanje? Oglejte si [Prihod iz drugega programa za risanje](topic:coming-from) in [zemljevid ukazov](topic:command-map).
