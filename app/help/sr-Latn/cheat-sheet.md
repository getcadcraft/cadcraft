---
title: Brzi pregled: 40 svakodnevnih komandi
summary: Jedna strana sa 40 komandi koje ćete najčešće koristiti, njihovim kratkim nazivima i tasterima koji štede vreme. Preuzmite je kao PDF za štampanje.
keywords: brzi pregled, brza referenca, komande, aliasi, kratki nazivi, početnik, izbriši, obreži, štampanje, pdf, prečice
from: 2d40edc4
---

Ukucajte kratki naziv (alias) i pritisnite Enter, ili kliknite alatku. Esc otkazuje. Enter na praznom redu ponavlja poslednju komandu.

**Štampajte ga:** [cheat-sheet.pdf](https://getcadcraft.com/assets/apps/cadcraft/current/cheat-sheet.pdf) (jedna A4 strana; na papiru Letter štampajte uz „prilagodi stranici“).

## Crtanje

| Unos | Komanda | Šta radi |
|---|---|---|
| `L` | {{cmd:LINE}} | Crtaj prave linije |
| `PL` | {{cmd:PLINE}} | Crtaj povezan lanac linija i lukova |
| `C` | {{cmd:CIRCLE}} | Crtaj krug (centar i poluprečnik) |
| `A` | {{cmd:ARC}} | Crtaj luk |
| `REC` | {{cmd:RECTANG}} | Crtaj pravougaonik od dva ugla |
| `POL` | {{cmd:POLYGON}} | Crtaj pravilan poligon |
| `EL` | {{cmd:ELLIPSE}} | Crtaj elipsu |
| `DT` | {{cmd:TEXT}} | Napiši jedan red teksta |
| `T` | {{cmd:MTEXT}} | Napiši tekst koji se prelama (pasus) |
| `H` | {{cmd:HATCH}} | Popuni površinu uzorkom |

## Uređivanje

| Unos | Komanda | Šta radi |
|---|---|---|
| `M` | {{cmd:MOVE}} | Premesti objekte |
| `CO` | {{cmd:COPY}} | Kopiraj objekte |
| `RO` | {{cmd:ROTATE}} | Okreni objekte oko tačke |
| `SC` | {{cmd:SCALE}} | Učini objekte većim ili manjim |
| `MI` | {{cmd:MIRROR}} | Preslikaj objekte preko linije |
| `O` | {{cmd:OFFSET}} | Nacrtaj paralelnu kopiju na rastojanju |
| `TR` | {{cmd:TRIM}} | Skrati objekte do mesta gde ih seku drugi |
| `EX` | {{cmd:EXTEND}} | Produži objekte do drugih |
| `F` | {{cmd:FILLET}} | Zaobli ugao lukom |
| `CHA` | {{cmd:CHAMFER}} | Odseci ugao pravom ivicom |
| `E` | {{cmd:ERASE}} | Izbriši objekte |
| `X` | {{cmd:EXPLODE}} | Rastavi blok ili polilinije na delove |
| `S` | {{cmd:STRETCH}} | Pomeri krajeve unutar prozora ukrštanja |
| `AR` | {{cmd:ARRAY}} | Kopiraj u mreži ili krugu |
| `J` | {{cmd:JOIN}} | Spoji linije i lukove u jedan objekat |
| `BR` | {{cmd:BREAK}} | Preseci objekat na dva dela ili izvadi deo |

## Kotiranje

| Unos | Komanda | Šta radi |
|---|---|---|
| `DLI` | {{cmd:DIMLINEAR}} | Kotiraj vodoravno ili uspravno |
| `DAL` | {{cmd:DIMALIGNED}} | Kotiraj duž koso postavljene linije |
| `DRA` | {{cmd:DIMRADIUS}} | Kotiraj poluprečnik |
| `DAN` | {{cmd:DIMANGULAR}} | Kotiraj ugao |

## Blokovi i slojevi

| Unos | Komanda | Šta radi |
|---|---|---|
| `B` | {{cmd:BLOCK}} | Napravi blok od objekata |
| `I` | {{cmd:INSERT}} | Postavi blok |
| `LA` | {{cmd:LAYER}} | Otvori slojeve |

## Pogled i merenje

| Unos | Komanda | Šta radi |
|---|---|---|
| `Z` | {{cmd:ZOOM}} | Zumiraj unutra, spolja ili na sve (E) |
| `DI` | {{cmd:DIST}} | Izmeri rastojanje i ugao |
| `LI` | {{cmd:LIST}} | Prikaži podatke o objektu |
| `MA` | {{cmd:MATCHPROP}} | Prenesi izgled jednog objekta na druge |

## Datoteka

| Unos | Komanda | Šta radi |
|---|---|---|
| `U` | {{cmd:UNDO}} | Opozovi poslednju komandu |
| `SAVE` | {{cmd:SAVE}} | Sačuvaj crtež |
| `PLOT` | {{cmd:PLOT}} | Štampaj u PDF |

## Tasteri

Ctrl (Cmd na Mac-u): Z opozovi · Y ponovi · S sačuvaj · P štampaj.  F3 hvatanje objekta · F8 ortogonalno · F10 polarno.  Space ili Enter ponavlja poslednju komandu · točkić miša zumira · prevlačenje točkića pomera pogled

Novi ste u crtanju? Ukucajte `TOUR` za vođeni prvi crtež, pročitajte [Početak rada](topic:getting-started), ili pogledajte svaku komandu u [Komandama](topic:commands). Dolazite iz drugog softvera za crtanje: [Dolazak iz drugog softvera za crtanje](topic:coming-from) i [mapa komandi](topic:command-map).
