---
title: Cheat sheet: ang 40 karaniwang command
summary: Isang pahina na may 40 command na pinakagagamitin mo, ang kanilang maikling pangalan, at ang mga key na nakakatipid ng oras. I-download ito bilang PDF para i-print.
keywords: cheat sheet, mabilis na sanggunian, commands, alias, maikling pangalan, baguhan, burahin, trim, print, pdf, shortcuts
from: 2d40edc4
---

I-type ang maikling pangalan (ang alias) at pindutin ang Enter, o i-click ang tool. Kinakansela ng Esc. Ang Enter sa walang lamang linya ay inuulit ang huling command.

**I-print ito:** [cheat-sheet.pdf](https://getcadcraft.com/assets/apps/cadcraft/current/cheat-sheet.pdf) (isang A4 na pahina; sa Letter na papel, i-print ito gamit ang "fit to page").

## Gumuhit

| I-type | Command | Ginagawa |
|---|---|---|
| `L` | {{cmd:LINE}} | Gumuhit ng tuwid na linya |
| `PL` | {{cmd:PLINE}} | Gumuhit ng magkakadikit na linya at arko |
| `C` | {{cmd:CIRCLE}} | Gumuhit ng bilog (center at radius) |
| `A` | {{cmd:ARC}} | Gumuhit ng arko |
| `REC` | {{cmd:RECTANG}} | Gumuhit ng rectangle mula sa dalawang sulok |
| `POL` | {{cmd:POLYGON}} | Gumuhit ng regular na polygon |
| `EL` | {{cmd:ELLIPSE}} | Gumuhit ng ellipse |
| `DT` | {{cmd:TEXT}} | Magsulat ng isang linya ng teksto |
| `T` | {{cmd:MTEXT}} | Magsulat ng tekstong bumabalot (paragraph) |
| `H` | {{cmd:HATCH}} | Punan ang isang lugar ng pattern |

## Modify

| I-type | Command | Ginagawa |
|---|---|---|
| `M` | {{cmd:MOVE}} | Ilipat ang mga object |
| `CO` | {{cmd:COPY}} | Kopyahin ang mga object |
| `RO` | {{cmd:ROTATE}} | Ikutin ang mga object sa isang punto |
| `SC` | {{cmd:SCALE}} | Gawing mas malaki o mas maliit ang mga object |
| `MI` | {{cmd:MIRROR}} | I-flip ang mga object sa kabila ng isang linya |
| `O` | {{cmd:OFFSET}} | Gumuhit ng parallel na kopya sa layong itinakda |
| `TR` | {{cmd:TRIM}} | Putulin ang mga object hanggang sa tawiran ng iba |
| `EX` | {{cmd:EXTEND}} | Pahabain ang mga object hanggang sa iba |
| `F` | {{cmd:FILLET}} | Bilugan ang sulok gamit ang arko |
| `CHA` | {{cmd:CHAMFER}} | Putulin ang sulok gamit ang tuwid na gilid |
| `E` | {{cmd:ERASE}} | Burahin ang mga object |
| `X` | {{cmd:EXPLODE}} | Hatiin ang block o polyline sa mga bahagi nito |
| `S` | {{cmd:STRETCH}} | Ilipat ang mga dulo sa loob ng crossing window |
| `AR` | {{cmd:ARRAY}} | Kopyahin sa grid o sa bilog |
| `J` | {{cmd:JOIN}} | Pagdugtungin ang mga linya at arko sa isang object |
| `BR` | {{cmd:BREAK}} | Putulin ang isang object sa dalawa, o tanggalin ang isang bahagi nito |

## Dimension

| I-type | Command | Ginagawa |
|---|---|---|
| `DLI` | {{cmd:DIMLINEAR}} | Mag-dimension pahalang o patayo |
| `DAL` | {{cmd:DIMALIGNED}} | Mag-dimension kasunod ng hilig na linya |
| `DRA` | {{cmd:DIMRADIUS}} | Mag-dimension ng radius |
| `DAN` | {{cmd:DIMANGULAR}} | Mag-dimension ng anggulo |

## Mga Block at layer

| I-type | Command | Ginagawa |
|---|---|---|
| `B` | {{cmd:BLOCK}} | Gumawa ng block mula sa mga object |
| `I` | {{cmd:INSERT}} | Ilagay ang block |
| `LA` | {{cmd:LAYER}} | Buksan ang mga layer |

## View at impormasyon

| I-type | Command | Ginagawa |
|---|---|---|
| `Z` | {{cmd:ZOOM}} | Mag-zoom in, out, o sa lahat (E) |
| `DI` | {{cmd:DIST}} | Sukatin ang distansya at anggulo |
| `LI` | {{cmd:LIST}} | Ipakita ang detalye ng object |
| `MA` | {{cmd:MATCHPROP}} | Kopyahin ang itsura ng isang object sa iba |

## File

| I-type | Command | Ginagawa |
|---|---|---|
| `U` | {{cmd:UNDO}} | Bawiin ang huling command |
| `SAVE` | {{cmd:SAVE}} | I-save ang drawing |
| `PLOT` | {{cmd:PLOT}} | I-plot sa PDF |

## Mga key

Ctrl (Cmd sa Mac): Z I-undo · Y I-redo · S I-save · P I-plot.  F3 object snap · F8 ortho · F10 polar.  Ang Space o Enter ay umuulit ng huling command · ang wheel ay nagzu-zoom · ang pag-drag sa wheel ay nagpa-pan

Bago sa drafting? I-type ang `TOUR` para sa gabay na unang drawing, basahin ang [Pagsisimula](topic:getting-started), o tingnan ang bawat command sa [Mga command](topic:commands). Galing ka sa ibang drafting software? Tingnan ang [Mula sa ibang drafting software](topic:coming-from) at ang [command map](topic:command-map).
