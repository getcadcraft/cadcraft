---
title: Zjednodušená príručka: 40 bežných príkazov
summary: Jedna strana so 40 príkazmi, ktoré použijete najčastejšie, s ich krátkymi názvami a klávesmi, ktoré šetria čas. Stiahnite si ju ako PDF na tlač.
keywords: zjednodušená príručka, rýchly prehľad, príkazy, aliasy, krátke názvy, začiatočník, zmazať, orezať, tlač, pdf, skratky
from: 2d40edc4
---

Napíšte krátky názov (alias) a stlačte Enter alebo kliknite na nástroj. Esc zruší príkaz. Enter na prázdnom riadku zopakuje posledný príkaz.

**Vytlačte si ju:** [cheat-sheet.pdf](https://getcadcraft.com/assets/apps/cadcraft/current/cheat-sheet.pdf) (jedna strana A4; na papier Letter tlačte s voľbou „prispôsobiť stránke“).

## Kreslenie

| Napíšte | Príkaz | Čo robí |
|---|---|---|
| `L` | {{cmd:LINE}} | Kreslí rovné úsečky |
| `PL` | {{cmd:PLINE}} | Kreslí súvislý reťazec úsečiek a oblúkov |
| `C` | {{cmd:CIRCLE}} | Kreslí kružnicu (stred a polomer) |
| `A` | {{cmd:ARC}} | Kreslí oblúk |
| `REC` | {{cmd:RECTANG}} | Kreslí obdĺžnik z dvoch rohov |
| `POL` | {{cmd:POLYGON}} | Kreslí pravidelný mnohouholník |
| `EL` | {{cmd:ELLIPSE}} | Kreslí elipsu |
| `DT` | {{cmd:TEXT}} | Napíše jeden riadok textu |
| `T` | {{cmd:MTEXT}} | Napíše text so zalamovaním (odsek) |
| `H` | {{cmd:HATCH}} | Vyplní plochu vzorom |

## Úpravy

| Napíšte | Príkaz | Čo robí |
|---|---|---|
| `M` | {{cmd:MOVE}} | Presunie objekty |
| `CO` | {{cmd:COPY}} | Skopíruje objekty |
| `RO` | {{cmd:ROTATE}} | Otočí objekty okolo bodu |
| `SC` | {{cmd:SCALE}} | Zväčší alebo zmenší objekty |
| `MI` | {{cmd:MIRROR}} | Preklopí objekty podľa čiary |
| `O` | {{cmd:OFFSET}} | Nakreslí rovnobežnú kópiu v zadanej vzdialenosti |
| `TR` | {{cmd:TRIM}} | Odreže objekty tam, kde ich pretínajú iné |
| `EX` | {{cmd:EXTEND}} | Predĺži objekty až po iné |
| `F` | {{cmd:FILLET}} | Zaoblí roh oblúkom |
| `CHA` | {{cmd:CHAMFER}} | Zrazí roh rovnou hranou |
| `E` | {{cmd:ERASE}} | Zmaže objekty |
| `X` | {{cmd:EXPLODE}} | Rozloží blok alebo lomenú čiaru na časti |
| `S` | {{cmd:STRETCH}} | Presunie konce vnútri prekrížiaceho okna |
| `AR` | {{cmd:ARRAY}} | Kopíruje do mriežky alebo do kruhu |
| `J` | {{cmd:JOIN}} | Spojí úsečky a oblúky do jedného objektu |
| `BR` | {{cmd:BREAK}} | Rozdelí objekt na dva alebo z neho vyberie kus |

## Kótovanie

| Napíšte | Príkaz | Čo robí |
|---|---|---|
| `DLI` | {{cmd:DIMLINEAR}} | Okótuje vodorovne alebo zvisle |
| `DAL` | {{cmd:DIMALIGNED}} | Okótuje pozdĺž šikmej čiary |
| `DRA` | {{cmd:DIMRADIUS}} | Okótuje polomer |
| `DAN` | {{cmd:DIMANGULAR}} | Okótuje uhol |

## Bloky a hladiny

| Napíšte | Príkaz | Čo robí |
|---|---|---|
| `B` | {{cmd:BLOCK}} | Vytvorí blok z objektov |
| `I` | {{cmd:INSERT}} | Vloží blok |
| `LA` | {{cmd:LAYER}} | Otvorí hladiny |

## Zobrazenie a dotazy

| Napíšte | Príkaz | Čo robí |
|---|---|---|
| `Z` | {{cmd:ZOOM}} | Priblíži, oddiali alebo zobrazí všetko (E) |
| `DI` | {{cmd:DIST}} | Zmeria vzdialenosť a uhol |
| `LI` | {{cmd:LIST}} | Zobrazí podrobnosti objektu |
| `MA` | {{cmd:MATCHPROP}} | Prenesie vzhľad jedného objektu na iné |

## Súbor

| Napíšte | Príkaz | Čo robí |
|---|---|---|
| `U` | {{cmd:UNDO}} | Vráti posledný príkaz |
| `SAVE` | {{cmd:SAVE}} | Uloží výkres |
| `PLOT` | {{cmd:PLOT}} | Vykreslí do PDF |

## Klávesy

Ctrl (na Macu Cmd): Z späť · Y znova · S uložiť · P vykresliť.  F3 uchopenie objektu · F8 ortho · F10 polárne.  Space alebo Enter zopakuje posledný príkaz · koliesko mení zväčšenie · ťahanie kolieskom posúva pohľad

Ste v kreslení nový? Napíšte `TOUR` pre prvý výkres s vedením, prečítajte si [Začíname](topic:getting-started) alebo si pozrite všetky príkazy v [Príkazoch](topic:commands). Ak prichádzate z iného kresliaceho softvéru: [Ak prichádzate z iného kresliaceho softvéru](topic:coming-from) a [mapa príkazov](topic:command-map).
