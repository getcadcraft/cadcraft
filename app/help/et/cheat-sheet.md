---
title: Kiirviide: 40 igapäevast käsku
summary: Üks leht 40 kõige sagedamini kasutatava käsuga, nende lühinimedega ja klahvidega, mis säästavad aega. Laadi see PDF-ina alla ja prindi.
keywords: kiirviide, kiirjuhend, käsud, lühinimed, alias, algaja, kustuta, lõika, prindi, pdf, otseteed
from: 2d40edc4
---

Sisesta lühinimi (alias) ja vajuta {{key:Enter}} või klõpsa tööriista. {{key:Esc}} tühistab. Tühjal real {{key:Enter}} kordab viimast käsku.

**Prindi:** [cheat-sheet.pdf](https://getcadcraft.com/assets/apps/cadcraft/current/cheat-sheet.pdf) (üks A4 leht; Letter-paberile prinditakse valikuga „sobita lehele“).

## Joonistamine

| Tüüp | Käsk | Mida see teeb |
|---|---|---|
| `L` | {{cmd:LINE}} | Sirgete joonte joonistamine |
| `PL` | {{cmd:PLINE}} | Ühendatud joone ja kaare ahela joonistamine |
| `C` | {{cmd:CIRCLE}} | Ringi joonistamine (keskpunkt ja raadius) |
| `A` | {{cmd:ARC}} | Kaare joonistamine |
| `REC` | {{cmd:RECTANG}} | Ristküliku joonistamine kahe nurga järgi |
| `POL` | {{cmd:POLYGON}} | Korrapärase hulknurga joonistamine |
| `EL` | {{cmd:ELLIPSE}} | Ellipsi joonistamine |
| `DT` | {{cmd:TEXT}} | Ühe rea teksti kirjutamine |
| `T` | {{cmd:MTEXT}} | Murduva teksti kirjutamine (lõik) |
| `H` | {{cmd:HATCH}} | Ala täitmine mustriga |

## Muutmine

| Tüüp | Käsk | Mida see teeb |
|---|---|---|
| `M` | {{cmd:MOVE}} | Objektide teisaldamine |
| `CO` | {{cmd:COPY}} | Objektide kopeerimine |
| `RO` | {{cmd:ROTATE}} | Objektide pööramine punkti ümber |
| `SC` | {{cmd:SCALE}} | Objektide suurendamine või vähendamine |
| `MI` | {{cmd:MIRROR}} | Objektide peegeldamine joone suhtes |
| `O` | {{cmd:OFFSET}} | Paralleelkoopia joonistamine kindla kauguse tagant |
| `TR` | {{cmd:TRIM}} | Objektide lõikamine kuni nende ristumiskohani teistega |
| `EX` | {{cmd:EXTEND}} | Objektide pikendamine teisteni |
| `F` | {{cmd:FILLET}} | Nurga ümardamine kaarega |
| `CHA` | {{cmd:CHAMFER}} | Nurga faasimine sirge lõiguga |
| `E` | {{cmd:ERASE}} | Objektide kustutamine |
| `X` | {{cmd:EXPLODE}} | Ploki või murdjoone lahutamine osadeks |
| `S` | {{cmd:STRETCH}} | Otspunktide nihutamine ristuva akna sees |
| `AR` | {{cmd:ARRAY}} | Kopeerimine ruudustikku või ringi |
| `J` | {{cmd:JOIN}} | Joonte ja kaarte ühendamine üheks objektiks |
| `BR` | {{cmd:BREAK}} | Objekti lõhkumine kaheks või tüki eemaldamine |

## Mõõtmine

| Tüüp | Käsk | Mida see teeb |
|---|---|---|
| `DLI` | {{cmd:DIMLINEAR}} | Horisontaalse või vertikaalse mõõdu lisamine |
| `DAL` | {{cmd:DIMALIGNED}} | Mõõtmine kaldjoone suunas |
| `DRA` | {{cmd:DIMRADIUS}} | Raadiuse mõõtmine |
| `DAN` | {{cmd:DIMANGULAR}} | Nurga mõõtmine |

## Plokid ja kihid

| Tüüp | Käsk | Mida see teeb |
|---|---|---|
| `B` | {{cmd:BLOCK}} | Plokk objektidest |
| `I` | {{cmd:INSERT}} | Ploki paigutamine |
| `LA` | {{cmd:LAYER}} | Kihtide avamine |

## Vaade ja päringud

| Tüüp | Käsk | Mida see teeb |
|---|---|---|
| `Z` | {{cmd:ZOOM}} | Suumimine sisse, välja või kogu joonisele (E) |
| `DI` | {{cmd:DIST}} | Kauguse ja nurga mõõtmine |
| `LI` | {{cmd:LIST}} | Objekti üksikasjade näitamine |
| `MA` | {{cmd:MATCHPROP}} | Ühe objekti välimuse kopeerimine teistele |

## Fail

| Tüüp | Käsk | Mida see teeb |
|---|---|---|
| `U` | {{cmd:UNDO}} | Viimase käsu tagasivõtmine |
| `SAVE` | {{cmd:SAVE}} | Joonise salvestamine |
| `PLOT` | {{cmd:PLOT}} | PDF-iks trükkimine |

## Klahvid

Ctrl (Macis Cmd): Z võta tagasi · Y tee uuesti · S salvesta · P prindi.  F3 objektihaake · F8 ortho · F10 polaar.  Tühik või Enter kordab viimast käsku · hiireratas suumib · ratta lohistamine nihutab vaadet

Esmakordselt joonistamas? Sisesta `TOUR`, et saada juhendatud esimene joonis, loe [Alustamine](topic:getting-started) või vaata kõiki käske jaotisest [Käsud](topic:commands). Tulid teisest joonistustarkvarast? [Teisest joonistustarkvarast tulijale](topic:coming-from) ja [käskude kaart](topic:command-map).
