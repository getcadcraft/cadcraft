---
title: Podsjetnik: 40 svakodnevnih naredbi
summary: Jedna stranica s 40 naredbi koje ćete najčešće koristiti, njihovim kratkim nazivima i tipkama koje štede vrijeme. Preuzmite je kao PDF za ispis.
keywords: podsjetnik, brza referenca, naredbe, aliasi, kratki nazivi, početnik, izbriši, skrati, ispis, pdf, prečaci
from: 2d40edc4
---

Upišite kratki naziv (alias) i pritisnite Enter ili kliknite alat. Esc odustaje. Enter na praznom retku ponavlja posljednju naredbu.

**Ispišite je:** [cheat-sheet.pdf](https://getcadcraft.com/assets/apps/cadcraft/current/cheat-sheet.pdf) (jedna A4 stranica; na papiru Letter ispišite je s „prilagodi stranici“).

## Crtanje

| Upišite | Naredba | Što radi |
|---|---|---|
| `L` | {{cmd:LINE}} | Crta ravne linije |
| `PL` | {{cmd:PLINE}} | Crta povezan lanac linija i lukova |
| `C` | {{cmd:CIRCLE}} | Crta kružnicu (središte i radijus) |
| `A` | {{cmd:ARC}} | Crta luk |
| `REC` | {{cmd:RECTANG}} | Crta pravokutnik iz dva kuta |
| `POL` | {{cmd:POLYGON}} | Crta pravilan poligon |
| `EL` | {{cmd:ELLIPSE}} | Crta elipsu |
| `DT` | {{cmd:TEXT}} | Piše jedan redak teksta |
| `T` | {{cmd:MTEXT}} | Piše tekst koji se prelama (odlomak) |
| `H` | {{cmd:HATCH}} | Ispunjava područje uzorkom |

## Izmjena

| Upišite | Naredba | Što radi |
|---|---|---|
| `M` | {{cmd:MOVE}} | Pomiče objekte |
| `CO` | {{cmd:COPY}} | Kopira objekte |
| `RO` | {{cmd:ROTATE}} | Zakreće objekte oko točke |
| `SC` | {{cmd:SCALE}} | Povećava ili smanjuje objekte |
| `MI` | {{cmd:MIRROR}} | Zrcali objekte preko linije |
| `O` | {{cmd:OFFSET}} | Crta paralelnu kopiju na udaljenosti |
| `TR` | {{cmd:TRIM}} | Skraćuje objekte do mjesta gdje ih drugi sijeku |
| `EX` | {{cmd:EXTEND}} | Produžuje objekte do drugih |
| `F` | {{cmd:FILLET}} | Zaobljuje kut lukom |
| `CHA` | {{cmd:CHAMFER}} | Skošuje kut ravnim bridom |
| `E` | {{cmd:ERASE}} | Briše objekte |
| `X` | {{cmd:EXPLODE}} | Rastavlja blok ili poliliniju na dijelove |
| `S` | {{cmd:STRETCH}} | Pomiče krajeve unutar prozora križanja |
| `AR` | {{cmd:ARRAY}} | Kopira u mrežu ili kružno |
| `J` | {{cmd:JOIN}} | Spaja linije i lukove u jedan objekt |
| `BR` | {{cmd:BREAK}} | Prekida objekt na dva dijela ili izuzima komad |

## Kotiranje

| Upišite | Naredba | Što radi |
|---|---|---|
| `DLI` | {{cmd:DIMLINEAR}} | Kotira vodoravno ili okomito |
| `DAL` | {{cmd:DIMALIGNED}} | Kotira uz kosu liniju |
| `DRA` | {{cmd:DIMRADIUS}} | Kotira radijus |
| `DAN` | {{cmd:DIMANGULAR}} | Kotira kut |

## Blokovi i slojevi

| Upišite | Naredba | Što radi |
|---|---|---|
| `B` | {{cmd:BLOCK}} | Izrađuje blok od objekata |
| `I` | {{cmd:INSERT}} | Postavlja blok |
| `LA` | {{cmd:LAYER}} | Otvara slojeve |

## Prikaz i upiti

| Upišite | Naredba | Što radi |
|---|---|---|
| `Z` | {{cmd:ZOOM}} | Zumira unutra, van ili na sve (E) |
| `DI` | {{cmd:DIST}} | Mjeri udaljenost i kut |
| `LI` | {{cmd:LIST}} | Prikazuje pojedinosti objekta |
| `MA` | {{cmd:MATCHPROP}} | Kopira izgled jednog objekta na druge |

## Datoteka

| Upišite | Naredba | Što radi |
|---|---|---|
| `U` | {{cmd:UNDO}} | Poništava posljednju naredbu |
| `SAVE` | {{cmd:SAVE}} | Sprema crtež |
| `PLOT` | {{cmd:PLOT}} | Plotira u PDF |

## Tipke

Ctrl (Cmd na Macu): Z poništi · Y ponovi · S spremi · P plotaj.  F3 hvatanje objekata · F8 ortogonalno · F10 polarno.  Space ili Enter ponavlja posljednju naredbu · kotačić zumira · povlačenje kotačića pomiče prikaz

Novi ste u crtanju? Upišite `TOUR` za vođeni prvi crtež, pročitajte [Prvi koraci](topic:getting-started) ili pogledajte svaku naredbu u [Naredbama](topic:commands). Dolazite iz drugog softvera za crtanje: [Dolazite iz drugog softvera za crtanje](topic:coming-from) i [karta naredbi](topic:command-map).
