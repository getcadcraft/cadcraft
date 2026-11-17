---
title: Nastavitev mej risbe
summary: LIMITS nastavi pravokotnik za risbo: mreža ga zapolni, ZOOM All ga prikaže, z vklopljenimi mejami pa so točke zunaj zavrnjene. Shranjene so v datotekah DWG in DXF.
keywords: meje, meje risbe, LIMITS, LIMMIN, LIMMAX, LIMCHECK, mreža, zunaj mej, velikost lista, območje risbe, zoom all, obroba
from: 9e97b30d
---

**Meje risbe** so pravokotnik, ki pove, kako velika naj bi bila risba: območje, v katerem nameravate risati, na primer list 420 × 297. Nova risba jih nima, zato sta mreža in območje risbe neomejena, kot prej.

## Nastavite jih

Vpišite {{cmd:LIMITS}} in odgovorite:

- `Določite spodnji levi kot ali [ON/OFF] <0,0>`: točko ali {{key:Enter}}, da ohranite trenutno.
- `Določite zgornji desni kot <420,297>`: točko ali {{key:Enter}}, da ohranite trenutno. Mora biti nad prvim in desno od njega.

Ali vpišite `ON` ali `OFF` pri prvem vprašanju, da preklopite preverjanje, ne da bi spremenili pravokotnik. Nastavitev vogalov je en korak za razveljavitev, prav tako je vsak ON in OFF.

## Kaj počnejo

- **Mreža zapolni meje** in se ustavi na njihovem robu. Je slika območja, zato {{ui:Mreža}} vklopite, da jo vidite.
- **ZOOM All** ({{cmd:ZOOM}}, nato {{ui:Vse}}) prikaže meje in risbo skupaj; {{ui:Obseg}} še vedno prikaže samo risbo.
- **Z vklopljenimi mejami** je točka, ki jo vpišete ali kliknete zunaj njih, zavrnjena z `**Zunaj mej` in poziv ostane. Velja za ukaze, ki ustvarjajo objekte: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, ukaze za kotiranje in še nekaj drugih. Ukazi, ki samo premikajo, izbirajo ali merijo, niso omejeni, prav tako ne lepljenje, vlečenje ročice ali objekt, ki ga ustvari rutina LISP: meje so vodilo za risanje, ne zid. Z izklopljenimi mejami ničesar ne zavrne.
- Objekti, ki so že zunaj, ostanejo, kjer so.

## V datotekah in LISP

Shranjene so v DWG in DXF kot `$LIMMIN`, `$LIMMAX` in `$LIMCHECK`. Datoteka iz drugega programa, ki ima samo privzete meje tega programa (0,0 do 12,9 ali 420,297, preverjanje izklopljeno), se odpre brez njih, da njena mreža ni stisnjena v majhen pravokotnik; datoteka z lastnimi mejami ali z vklopljenim preverjanjem jih ohrani. V LISP `(getvar "LIMMIN")`, `LIMMAX` in `LIMCHECK` jih preberejo, `setvar` pa jih zapiše kot en korak za razveljavitev.

Meje pripadajo modelu. List (postavitev) ima svojo velikost papirja.
