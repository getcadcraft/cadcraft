---
title: Markera med lasso
summary: Tryck och dra en frihandskontur runt objekt för att markera dem, som fönster, korsande eller staket; byt med Space medan du drar.
keywords: lasso, lassomode, dra, frihand, markera, markering, fönster, korsande, staket, space, polygon, touch, penna, rektangel
from: 9ec6154d
---

## Vad du lär dig

Hur du markerar objekt genom att rita runt dem, och hur du får tillbaka rektangeln när du vill.

## Rita ett lasso

1. Rita några linjer och cirklar nära varandra.
2. När inget kommando körs trycker du musknappen på en tom plats och drar runt några av dem, och flyttar först åt **höger**.
3. Släpp.

Endast objekt som helt ligger inuti konturen markeras. Konturen ritas heldragen medan du drar: det här är ett fönsterlasso.

## Fönster, korsande och staket

Vilka objekt du får beror på den första rörelsen i ditt drag, och på {{key:Space}}:

| Du drar | Lasso | Markerar |
|---|---|---|
| Först åt höger | Fönster (heldragen kontur) | Endast objekt **helt inuti** |
| Först åt vänster | Korsande (streckad, grön) | Objekt inuti **och** objekt som konturen berör |
| Tryck {{key:Space}} medan du drar | Fönster, sedan korsande, sedan staket | Staket (en streckad linje, inte sluten): endast objekt som linjen korsar |

1. Tryck på en tom plats och dra runt några objekt, och flytta först åt **vänster**. Allt som konturen berör markeras också.
2. Tryck på {{key:Esc}}.
3. Tryck och dra igen; tryck {{key:Space}} en gång medan du fortfarande håller knappen nedtryckt. Konturen blir ett korsande lasso; tryck {{key:Space}} igen för ett staket.

{{key:Shift}} när du släpper tar i stället bort objekten från markeringen (med "Klicka på objekt: Lägg till" i Inställningar).

## Inuti ett kommando

Ett lasso fungerar överallt där CadCraft frågar `Select objects`: rita det och tryck sedan på {{key:Enter}} för att avsluta. {{cmd:STRETCH}} använder ett korsande lasso som sitt fönster, så att du kan sträcka en L-formad del av en ritning på en gång.

{{cmd:TRIM}} och {{cmd:EXTEND}} använder ett drag på annat sätt: där trimmas (eller förlängs) varje del som linjen korsar. Se [Trimma och förläng](topic:trim-and-extend).

## Rektangeln

Ett klick på tom yta, en förflyttning och ett andra klick ritar alltid rektangelfönstret (vänster till höger) eller det korsande (höger till vänster).

Om du vill att ett drag ska rita rektangeln igen öppnar du {{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Dra för att markera}} och väljer {{ui:Rektangel}}, eller skriver {{cmd:LASSOMODE}} och sedan `0`. Skriv {{cmd:LASSOMODE}} och sedan `1` för lassot. Valet sparas i den här webbläsaren.

:::touch
Dra med ett finger eller en penna på samma sätt. En knacka väljer fortfarande ett objekt.
:::

## Vanliga misstag

- **Inget markerades.** Lassot var ett fönster och inget låg helt inuti. Börja dra åt vänster, eller tryck {{key:Space}} medan du drar.
- **Draget flyttade ett handtag.** Om du trycker på handtaget till ett markerat objekt flyttas handtaget. Starta lassot på en tom plats.
- **Space avslutade kommandot.** {{key:Space}} byter lasso bara medan knappen hålls nedtryckt; annars fungerar den som {{key:Enter}}.
