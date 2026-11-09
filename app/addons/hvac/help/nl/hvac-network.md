---
title: HVAC: drukverlies in het hele kanaalnetwerk
summary: DUCTNET volgt de getekende kanalen vanaf de ventilator, bepaalt het drukverlies naar elk vrij uiteinde, het kritieke traject, de spjeld die elk ander uiteinde nodig heeft en de ventilatordruk.
keywords: netwerk, druk, kritiek traject, ventilatordruk, spjeld, afregelen, drukverlies fitting, DUCTNET, DNET, statische druk, systeem
from: b6f568fe
---

{{cmd:DUCTSIZE}} dimensioneert één strang. {{cmd:DUCTNET}} (`DNET`) kijkt naar het hele getekende systeem.

1. Geef elke sectie zijn luchtdebiet ({{ui:Luchtstroom}} van het kanaal, in cfm of L/s). Het vrije uiteinde van een strang krijgt het luchtdebiet van de sectie aan dat uiteinde.
2. Typ {{cmd:DUCTNET}} en klik op het uiteinde van de strang waar de ventilator of luchtbehandelingskast aansluit. Uiteinden die een andere strang raken, worden verbonden; aftakkingen worden gevonden waar een strang op een andere eindigt.
3. Het toont elk vrij uiteinde met zijn luchtdebiet en het drukverlies onderweg vanaf de ventilator, het **kritieke traject** (het uiteinde dat het meeste verliest), de **spjeld** die elk ander uiteinde nodig heeft om af te regelen, en de **ventilatordruk**: het kritieke traject plus de druk van batterijen en filters die u typt met de optie {{ui:Apparatuur}} (uit de gegevens van de fabrikanten).

Wrijving komt uit dezelfde Colebrook-formule als bij het dimensioneren. Fittingen (bochten, de draai waar een maat verandert, aftakstukken) gebruiken een korte lijst afgeronde standaardcoëfficiënten: ze zijn als standaardwaarden aangeduid, geen fittingdatabase, en het schoorsteeneffect wordt genegeerd. Controleer het resultaat met uw ingenieur voordat u erop vertrouwt.

Secties die te klein zijn voor hun luchtdebiet, te snel of te vlak, worden per strang vermeld. Lussen worden genegeerd (de berekening volgt een boom) en dat wordt gemeld. {{ui:Methode}} schakelt de maatcontrole tussen gelijke wrijving en een snelheidsgrens. {{ui:Exporteren}} › Kanaalnetwerkdruk schrijft elke sectie naar CSV.
