---
title: Brzi pregled: 40 komandi za svakodnevni rad
summary: Jedna stranica sa 40 komandi koje ćete najviše koristiti, njihovim kratkim nazivima i tipkama koje štede vrijeme. Preuzmite je kao PDF za štampanje.
keywords: brzi pregled, brza referenca, komande, aliasi, kratki nazivi, početnik, izbriši, skrati, štampaj, pdf, prečice
from: 2d40edc4
---

Upišite kratki naziv (alias) i pritisnite Enter, ili kliknite alat. Esc otkazuje. Enter na praznom redu ponavlja posljednju komandu.

**Štampaj je:** [cheat-sheet.pdf](https://getcadcraft.com/assets/apps/cadcraft/current/cheat-sheet.pdf) (jedna A4 stranica; na papiru Letter štampajte uz opciju prilagođavanja stranici).

## Crtanje

| Skraćenica | Komanda | Šta radi |
|---|---|---|
| `L` | {{cmd:LINE}} | Crta prave linije |
| `PL` | {{cmd:PLINE}} | Crta povezani lanac linija i lukova |
| `C` | {{cmd:CIRCLE}} | Crta krug (centar i poluprečnik) |
| `A` | {{cmd:ARC}} | Crta luk |
| `REC` | {{cmd:RECTANG}} | Crta pravougaonik iz dva ugla |
| `POL` | {{cmd:POLYGON}} | Crta pravilan poligon |
| `EL` | {{cmd:ELLIPSE}} | Crta elipsu |
| `DT` | {{cmd:TEXT}} | Upisuje jedan red teksta |
| `T` | {{cmd:MTEXT}} | Upisuje tekst koji se prelama (pasus) |
| `H` | {{cmd:HATCH}} | Popunjava površinu uzorkom |

## Izmjena

| Skraćenica | Komanda | Šta radi |
|---|---|---|
| `M` | {{cmd:MOVE}} | Pomjera objekte |
| `CO` | {{cmd:COPY}} | Kopira objekte |
| `RO` | {{cmd:ROTATE}} | Okreće objekte oko tačke |
| `SC` | {{cmd:SCALE}} | Povećava ili smanjuje objekte |
| `MI` | {{cmd:MIRROR}} | Preklapa objekte preko linije |
| `O` | {{cmd:OFFSET}} | Crta paralelnu kopiju na razmaku |
| `TR` | {{cmd:TRIM}} | Skraćuje objekte do mjesta gdje ih sijeku drugi |
| `EX` | {{cmd:EXTEND}} | Produžava objekte do drugih |
| `F` | {{cmd:FILLET}} | Zaobljuje ugao lukom |
| `CHA` | {{cmd:CHAMFER}} | Odsijeca ugao ravnom ivicom |
| `E` | {{cmd:ERASE}} | Briše objekte |
| `X` | {{cmd:EXPLODE}} | Rastavlja blok ili polilinije na dijelove |
| `S` | {{cmd:STRETCH}} | Pomjera krajeve unutar prozora presijecanja |
| `AR` | {{cmd:ARRAY}} | Kopira u mreži ili krugu |
| `J` | {{cmd:JOIN}} | Spaja linije i lukove u jedan objekat |
| `BR` | {{cmd:BREAK}} | Presijeca objekat na dva, ili izvadi dio |

## Kota

| Skraćenica | Komanda | Šta radi |
|---|---|---|
| `DLI` | {{cmd:DIMLINEAR}} | Kotira vodoravno ili uspravno |
| `DAL` | {{cmd:DIMALIGNED}} | Kotira duž kose linije |
| `DRA` | {{cmd:DIMRADIUS}} | Kotira poluprečnik |
| `DAN` | {{cmd:DIMANGULAR}} | Kotira ugao |

## Blokovi i slojevi

| Skraćenica | Komanda | Šta radi |
|---|---|---|
| `B` | {{cmd:BLOCK}} | Pravi blok od objekata |
| `I` | {{cmd:INSERT}} | Postavlja blok |
| `LA` | {{cmd:LAYER}} | Otvara slojeve |

## Pogled i upiti

| Skraćenica | Komanda | Šta radi |
|---|---|---|
| `Z` | {{cmd:ZOOM}} | Zumira unutra, van ili na sve, opcija [Sve (E)] |
| `DI` | {{cmd:DIST}} | Mjeri razmak i ugao |
| `LI` | {{cmd:LIST}} | Prikazuje detalje objekta |
| `MA` | {{cmd:MATCHPROP}} | Prenosi izgled jednog objekta na druge |

## Datoteka

| Skraćenica | Komanda | Šta radi |
|---|---|---|
| `U` | {{cmd:UNDO}} | Poništava posljednju komandu |
| `SAVE` | {{cmd:SAVE}} | Spašava crtež |
| `PLOT` | {{cmd:PLOT}} | Štampa u PDF |

## Tipke

Ctrl (Cmd na Mac-u): Z poništi · Y ponovi · S spasi · P štampaj.  F3 hvatanje objekata · F8 ortogonalno · F10 polarno.  Space ili Enter ponavlja posljednju komandu · točkić zumira · prevlačenje točkića pomjera pogled

Novi u crtanju? Upišite `TOUR` za vođeni prvi crtež, pročitajte [Početak rada](topic:getting-started), ili pogledajte svaku komandu u [Komandama](topic:commands). Dolazite iz drugog softvera za crtanje? Pogledajte [Dolazak iz drugog softvera za crtanje](topic:coming-from) i [kartu komandi](topic:command-map).
