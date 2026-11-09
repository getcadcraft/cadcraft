---
title: HVAC: de kanaalstaat
summary: Recht kanaal per maat en materiaal, elke fitting en het plaatwerkoppervlak van elk, als tabel in de tekening of als CSV-bestand.
keywords: staat, kanaalstaat, plaatwerk, oppervlakte, square feet, fittingen, csv, hoeveelheden, lengte
from: a5764fca
---

## Een tabel in de tekening

Typ {{cmd:DUCTSCHED}}. De opdrachtregel geeft de totalen; klik waar de tabel moet komen (de linkerbovenhoek). De tabel toont:

- **recht kanaal** per vorm, maat en materiaal, met zijn lengte en plaatwerkoppervlak;
- **fittingen** — bochten, verlopen en reducers, T-stukken, aftakstukken en zijtakken — per soort en maat, met het aantal en hun plaatwerk;
- een totaal.

De tabel houdt zichzelf bij: elke wijziging aan een kanaalstrang past hem in dezelfde stap aan ({{cmd:UNDO}} neemt beide terug). Zijn teksthoogte stelt u in bij {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:HVAC}}.

## Hoe het plaatwerk wordt berekend

- Recht kanaal: de omtrek × de lengte. Een kanaal van 24 × 12 in van 10 ft lang heeft 6 ft × 10 ft = 60 ft².
- Bochten: de omtrek × de lengte van de hartlijn. Voor een radiusbocht is dit exact: de twee zijwanden, de hiel en de keel tellen precies hierop op. Een bocht van 90° van 24 × 12 in met een radius van 24 in heeft 18.85 ft².
- Rechthoekige verlopen: hun vier vlakke zijden, elk exact berekend.
- Ronde en gemengde verlopen: de gemiddelde omtrek × de schuine lengte (exact voor een rond verloop dat in beide einden is gecentreerd, benaderd voor de rest).
- Het aftakstuk of T-stuk van een vertakking: zijn kraag, de omtrek van de vertakking × 2 in (50 mm).

Naden, overlappingen en verlies zijn niet inbegrepen: voeg ze toe in TakeoffCraft als verlies, of volgens de eigen regel van uw werkplaats.

## Een CSV-bestand

{{cmd:EXPORT}} › {{ui:Kanaalstaat (CSV)}} schrijft drie tabellen: het rechte kanaal (vorm, maat, materiaal, lengte, omtrek, oppervlak), de fittingen (aantal, oppervlak per stuk, oppervlak) en elke sectie (tag, systeem, maat, lengte, luchtdebiet, snelheid, wrijving).

Om op basis van de staat een raming op te stellen, zie [Kanalen in TakeoffCraft](topic:hvac-takeoff).
