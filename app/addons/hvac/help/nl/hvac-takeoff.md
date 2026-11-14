---
title: HVAC: kanalen in TakeoffCraft
summary: Stuur de kanaalstaat als items naar TakeoffCraft: een PDF van het plan met de opmeting erin, of de samenstellingen als pakket voor uw prijsbibliotheek.
keywords: takeoffcraft, opmeten, raming, hoeveelheden, items, pakket, prijsbibliotheek, plaatwerk, pdf
from: 7289df5d
---

## Een PDF met de opmeting erin

{{cmd:EXPORT}} › {{ui:Kanalen voor TakeoffCraft (pdf met de opmeting erin)}} plot het plan op één blad (ARCH D of ISO A1, op de grootste standaardschaal die past) en zet een TakeoffCraft-opmeting in de PDF. Open de PDF in TakeoffCraft en die biedt de opmeting aan:

- één **lineair item** per kanaalvorm, maat en materiaal, met een markering langs elk recht stuk;
- één **telitem** per fitting en maat, met een markering waar elk ervan staat;
- de samenstelling van elk item heeft zijn **plaatwerk**: de omtrek van het kanaal × L, of het oppervlak van de fitting × N.

TakeoffCraft meet de markeringen op de schaal van het blad, dus de lengten zijn die van de kanaalstaat, en u ziet op het blad wat elk is. De schaal wordt ingesteld en gecontroleerd aan het langste stuk kanaal. Items hebben geen tarieven: een tarief is aan u om in te stellen.

## De samenstellingen als pakket

{{cmd:EXPORT}} › {{ui:Kanaalsamenstellingen voor TakeoffCraft (pakket)}} schrijft dezelfde items zonder hoeveelheden als een TakeoffCraft-pakket (een `.json`-bestand). Open in TakeoffCraft {{ui:Bibliotheek}} › {{ui:Vakpakketten}} › {{ui:Een pakketbestand openen}} om ze aan uw prijsbibliotheek toe te voegen. Elk item vermeldt de hoeveelheid die het in de tekening had.
