---
title: Leidingwerk: de leiding- en fittingstaat
summary: Leiding per materiaal en maat met lengte en staalgewicht, elke fitting en klep, en de hoogtes per strang — in de tekening, als CSV of in TakeoffCraft.
keywords: staat, leidingstaat, fittingen, kleppen, lengte, gewicht, csv, takeoffcraft, opmeten, pakket, hoeveelheden
from: c852343a
---

## Een tabel in de tekening

Typ {{cmd:PIPESCHED}}; de opdrachtregel geeft de totalen en eventuele te vlakke afvoeren; klik waar de tabel moet komen. Ze somt leiding op per materiaal, klasse en maat met lengte (en gewicht, voor staal), daarna elke fitting en klep per soort en maat met hoeveel er zijn, en een totaal. Ze houdt zichzelf bij wanneer de strangen veranderen, in dezelfde stap van ongedaan maken.

De lengte van leiding wordt van hartlijn tot hartlijn door de fittingen gemeten, langs de helling. Het gewicht van staal is het gewicht met vlakke uiteinden volgens ASME B36.10M: 10.69 × (D − t) × t pond per foot (0.0246615 × (D − t) × t kilogram per meter), dus 20 ft van 2 in Schedule 40 weegt 73.1 lb.

## Een CSV-bestand

{{cmd:EXPORT}} › {{ui:Leidingstaat (CSV)}} schrijft de leiding (materiaal, maat, lengte, gewicht), de fittingen en kleppen (aantal), en elke strang (tag, systeem, materiaal, lengte, de hoogte aan beide uiteinden en de helling).

## In TakeoffCraft

- {{cmd:EXPORT}} › {{ui:Leidingen voor TakeoffCraft (pdf met de opmeting erin)}} tekent het plan op één blad op een standaardschaal en zet de opmeting in de pdf. Open het in TakeoffCraft: één lineair item per leidingmaat met een markering langs elk stuk hartlijn (strangen met helling worden langs hun helling gemeten), één telpost per fitting en per klep met een markering waar ze zit, elk met zijn CSI MasterFormat-nummer per systeem; de samenstelling van stalen leiding draagt het gewicht. Geen eenheidsprijzen: die vult u zelf in.
- {{cmd:EXPORT}} › {{ui:Leidingsamenstellingen voor TakeoffCraft (pakket)}} schrijft dezelfde posten zonder hoeveelheden als pakket voor {{ui:Bibliotheek}} › {{ui:Vakpakketten}} › {{ui:Een pakketbestand openen}}.
