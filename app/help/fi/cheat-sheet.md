---
title: Pikaohje: 40 arkikomentoa
summary: Yksi sivu 40 eniten käyttämästäsi komennosta, niiden lyhyistä nimistä ja aikaa säästävistä näppäimistä. Lataa se PDF:nä tulostettavaksi.
keywords: pikaohje, pikaopas, komennot, aliakset, lyhyet nimet, aloittelija, poista, typistä, tulosta, pdf, pikanäppäimet
from: 2d40edc4
---

Kirjoita lyhyt nimi (alias) ja paina Enter tai napsauta työkalua. Esc peruuttaa. Enter tyhjällä rivillä toistaa viimeisen komennon.

**Tulosta se:** [cheat-sheet.pdf](https://getcadcraft.com/assets/apps/cadcraft/current/cheat-sheet.pdf) (yksi A4-sivu; Letter-paperille tulosta valinnalla "sovita sivulle").

## Piirrä

| Kirjoita | Komento | Mitä se tekee |
|---|---|---|
| `L` | {{cmd:LINE}} | Piirtää suoria viivoja |
| `PL` | {{cmd:PLINE}} | Piirtää yhtenäisen viiva- ja kaariketjun |
| `C` | {{cmd:CIRCLE}} | Piirtää ympyrän (keskipiste ja säde) |
| `A` | {{cmd:ARC}} | Piirtää kaaren |
| `REC` | {{cmd:RECTANG}} | Piirtää suorakulmion kahdesta kulmasta |
| `POL` | {{cmd:POLYGON}} | Piirtää säännöllisen monikulmion |
| `EL` | {{cmd:ELLIPSE}} | Piirtää ellipsin |
| `DT` | {{cmd:TEXT}} | Kirjoittaa yhden tekstirivin |
| `T` | {{cmd:MTEXT}} | Kirjoittaa rivittyvää tekstiä (kappale) |
| `H` | {{cmd:HATCH}} | Täyttää alueen kuviolla |

## Muokkaa

| Kirjoita | Komento | Mitä se tekee |
|---|---|---|
| `M` | {{cmd:MOVE}} | Siirtää kohteita |
| `CO` | {{cmd:COPY}} | Kopioi kohteita |
| `RO` | {{cmd:ROTATE}} | Kiertää kohteita pisteen ympäri |
| `SC` | {{cmd:SCALE}} | Suurentaa tai pienentää kohteita |
| `MI` | {{cmd:MIRROR}} | Kääntää kohteet viivan yli |
| `O` | {{cmd:OFFSET}} | Piirtää yhdensuuntaisen kopion etäisyydelle |
| `TR` | {{cmd:TRIM}} | Typistää kohteet kohtaan, jossa toiset leikkaavat ne |
| `EX` | {{cmd:EXTEND}} | Pidentää kohteet toisiin asti |
| `F` | {{cmd:FILLET}} | Pyöristää kulman kaarella |
| `CHA` | {{cmd:CHAMFER}} | Katkaisee kulman suoralla särmällä |
| `E` | {{cmd:ERASE}} | Poistaa kohteita |
| `X` | {{cmd:EXPLODE}} | Hajottaa lohkon tai murtoviivan osiinsa |
| `S` | {{cmd:STRETCH}} | Siirtää leikkaavan ikkunan sisällä olevat päät |
| `AR` | {{cmd:ARRAY}} | Kopioi ruudukkona tai ympyränä |
| `J` | {{cmd:JOIN}} | Yhdistää viivat ja kaaret yhdeksi kohteeksi |
| `BR` | {{cmd:BREAK}} | Katkaisee kohteen kahtia tai poistaa palan |

## Mitoita

| Kirjoita | Komento | Mitä se tekee |
|---|---|---|
| `DLI` | {{cmd:DIMLINEAR}} | Mitoittaa vaaka- tai pystysuunnassa |
| `DAL` | {{cmd:DIMALIGNED}} | Mitoittaa vinoa viivaa pitkin |
| `DRA` | {{cmd:DIMRADIUS}} | Mitoittaa säteen |
| `DAN` | {{cmd:DIMANGULAR}} | Mitoittaa kulman |

## Lohkot ja tasot

| Kirjoita | Komento | Mitä se tekee |
|---|---|---|
| `B` | {{cmd:BLOCK}} | Tekee lohkon kohteista |
| `I` | {{cmd:INSERT}} | Sijoittaa lohkon |
| `LA` | {{cmd:LAYER}} | Avaa tasot |

## Näkymä ja kysely

| Kirjoita | Komento | Mitä se tekee |
|---|---|---|
| `Z` | {{cmd:ZOOM}} | Zoomaa lähemmäs, kauemmas tai kaikkeen (E) |
| `DI` | {{cmd:DIST}} | Mittaa etäisyyden ja kulman |
| `LI` | {{cmd:LIST}} | Näyttää kohteen tiedot |
| `MA` | {{cmd:MATCHPROP}} | Kopioi yhden kohteen ulkoasun muihin |

## Tiedosto

| Kirjoita | Komento | Mitä se tekee |
|---|---|---|
| `U` | {{cmd:UNDO}} | Kumoaa viimeisen komennon |
| `SAVE` | {{cmd:SAVE}} | Tallentaa piirustuksen |
| `PLOT` | {{cmd:PLOT}} | Plottaa PDF:ksi |

## Näppäimet

Ctrl (Macilla Cmd): Z kumoa · Y tee uudelleen · S tallenna · P plottaa.  F3 kohteen tartunta · F8 ortogonaali · F10 napa.  Space tai Enter toistaa viimeisen komennon · rulla zoomaa · rullan vetäminen panoroi

Oletko uusi piirtäjä? Kirjoita `TOUR` saadaksesi ohjatun ensimmäisen piirustuksen, lue [Aloitusopas](topic:getting-started) tai katso kaikki komennot aiheesta [Komennot](topic:commands). Jos tulet muista piirto-ohjelmista: [Tulossa muista piirto-ohjelmista](topic:coming-from) ja [komentokartta](topic:command-map).
