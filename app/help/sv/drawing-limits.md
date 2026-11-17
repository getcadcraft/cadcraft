---
title: Ange ritningsgränser
summary: LIMITS sätter en rektangel för ritningen. Rutnätet fyller den, ZOOM Alla visar den, och med gränserna på nekas punkter utanför den. De sparas i DWG- och DXF-filer.
keywords: gränser, ritningsgränser, LIMITS, LIMMIN, LIMMAX, LIMCHECK, rutnät, utanför gränserna, bladstorlek, ritningsyta, zooma alla, avgränsning
from: 9e97b30d
---

**Ritningsgränser** är en rektangel som anger hur stor ritningen är tänkt att vara: ytan du planerar att rita på, till exempel ett blad 420 × 297. En ny ritning har inga, så rutnätet och ritytan är obegränsade, som förut.

## Ange dem

Skriv {{cmd:LIMITS}} och svara:

- `Ange nedre vänstra hörn eller [ON/OFF] <0,0>`: en punkt, eller {{key:Enter}} för att behålla den nuvarande.
- `Ange övre högra hörn <420,297>`: en punkt, eller {{key:Enter}} för att behålla den nuvarande. Den måste ligga ovanför och till höger om den första.

Eller skriv `ON` eller `OFF` vid den första frågan för att slå på eller av kontrollen utan att ändra rektangeln. Att ange hörnen går att ångra i ett steg, och så är varje ON och OFF.

## Vad de gör

- **Rutnätet fyller gränserna** och stannar vid deras kant. Det är en bild av ytan, så slå på {{ui:Rutnät}} för att se den.
- **ZOOM Alla** ({{cmd:ZOOM}}, sedan {{ui:Alla}}) visar gränserna och ritningen tillsammans. {{ui:Utsträckning}} visar fortfarande bara ritningen.
- **Med gränserna PÅ** nekas en punkt du skriver eller klickar utanför dem: `**Utanför gränserna`, och prompten står kvar. Det gäller de kommandon som skapar objekt: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, måttkommandona och några till. Kommandon som bara flyttar, markerar eller mäter begränsas inte, och det gör inte heller infogning, ett handtagsdrag eller ett objekt som en LISP-rutin skapar. Gränserna är en vägledning för ritning, inte en mur. Med gränserna AV nekas ingenting.
- Objekt som redan ligger utanför står kvar där de är.

## I filer och LISP

De sparas i DWG och DXF som `$LIMMIN`, `$LIMMAX` och `$LIMCHECK`. En fil från ett annat program som bara har det programmets standardgränser (0,0 till 12,9 eller 420,297, med kontrollen av) öppnas utan några, så att dess rutnät inte pressas in i en liten rektangel. En fil med egna gränser, eller med kontrollen på, behåller dem. I LISP läser `(getvar "LIMMIN")`, `LIMMAX` och `LIMCHECK` dem, och `setvar` skriver dem, som ett steg i ångra.

Gränserna hör till modellen. En layout har sin egen pappersstorlek.
