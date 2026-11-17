---
title: "Standardregler: angi hva en ny tegning starter med"
summary: Angi én gang hvilke enheter, lengdeformat, presisjon, teksthøyde og arkpapir en ny tegning starter med, for metrisk og for imperisk arbeid, og del reglene på kontoret som en liten fil.
keywords: standard, standardverdier, standardregler, regel, kontorstandard, kontorstandardverdier, mal, ny tegning, enheter, insunits, lengdeformat, arkitekt, presisjon, luprec, teksthøyde, arkpapir, a1, del, eksporter, importer, json
from: 7b80fd13
---

## Hva du gjør

Fortell CadCraft hva en ny tegning skal starte med, slik at ingen på kontoret må kjøre UNITS og endre de samme tingene hver gang. Dette er et tillegg: det er av til du slår det på, og en regel du ikke angir, beholder CadCrafts egen standard akkurat som den er.

:::note
Dette er standarder for **nye** tegninger og **nye** ark. En tegning du allerede har startet, endres ikke, og heller ikke en tegning du åpner.
:::

## Steg

1. Åpne Innstillinger, gå til {{ui:Tillegg}} og slå på {{ui:Standardregler}}.
2. I Innstillinger åpner du fanen **CadCraft** og velger {{ui:Standardregler}} i listen til venstre.
3. Angi reglene du vil ha. Hver starter på **CadCrafts egen**. En regel med en **Metrisk**- og en **Imperisk**-boks tar én verdi for hver type tegning; fyll inn bare de du trenger.
4. Det finnes ingen Lagre-knapp: hver endring lagres når du gjør den.
5. Start en ny tegning. Den har enhetene, lengdeformatet, presisjonen og teksthøyden du angav, og det første nye arket ligger på papiret du valgte.

## Reglene

- **Enheter for en ny tegning**: ingen, millimeter, centimeter, meter, tommer eller fot.
- **Lengdeformat** og **Lengdepresisjon**: det UNITS-kommandoen setter, for en ny tegning.
- **Høyde på ny tekst**, i tegningsenheter.
- **Papir for et nytt ark**: papiret som Nytt ark bruker.
- **Annoteringsstørrelser på papir** (Innstillinger › Global › Standardregler): kontorets høyder i millimeter slik de skrives ut. CadCraft bruker den for merknader og etiketter: {{cmd:ANNOSCALE}} setter høyden ny tekst starter med til den høyden ved annoteringsskalaen. Se [Enheter, papir og skala](topic:units-papers-scales#annotate-by-scale).

En tegning i tommer eller fot bruker de imperiske verdiene; enhver annen tegning bruker de metriske. En tegning uten enheter bruker enhetssystemet som er satt i Innstillinger › Global › Standardregler, eller metrisk når ingen er satt.

## Del dem på kontoret

1. I Innstillinger åpner du fanen **Global** og velger {{ui:Standardregler}}.
2. Klikk {{ui:Lagre til fil}}. Du får en liten fil som slutter på `.ccdefaults.json`.
3. På en annen datamaskin: slå på tillegget, åpne samme sted og klikk {{ui:Last inn fra fil}}. Filens regler erstatter dem på den datamaskinen.

Én fil holder reglene for alle CadCraft-appene, så den samme filen virker i BimCraft.

## Greit å vite

- Det finnes ingen regel for et arks skala: visningen av et nytt ark tilpasses tegningen, og du angir skalaen på arket.
- Det finnes ingen regel for en måltilsettingsstil: en ny tegning har ingen navngitte måltilsettingsstiler. Sett opp mål med DIMSTYLE, eller start fra en tegning som har dine.
- Filen er vanlig, åpen JSON. En regel filen nevner som ikke denne versjonen kjenner, utelates og nevnes i meldingen; resten lastes likevel.
- Reglene lagres i denne nettleseren, ikke i tegningen. Slår du tillegget av, er alt CadCrafts egen igjen.
