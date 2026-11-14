---
title: Leidingwerk: stroming en druk in een watertoevoer
summary: PIPENET volgt de getekende toevoerleidingen vanaf de bron, telt de aansluitwaarden op die u bij elk vrij uiteinde opgeeft, en bepaalt de stroming, snelheid en het drukverlies naar elk sanitair toestel.
keywords: toevoer, water, aansluitwaarden, vraag, stroming, snelheid, drukverlies, hazen-williams, PIPENET, PNET, statische opvoerhoogte, warm, koud
from: ece38a8e
---

Typ {{cmd:PIPENET}} (`PNET`) en klik op het uiteinde van een leidingstrang waar de toevoer binnenkomt.

Voor elk vrij uiteinde vraagt het wat er zit: een soort sanitair toestel (`wc`, `lav`, `sink`, `shower`, `laundry`, `bath`, `dishwasher`) of een aantal aansluitwaarden (0 voor niets). De antwoorden worden onthouden voor die plek; {{ui:Wissen}} vergeet ze. {{ui:Druk}} neemt de toevoerdruk bij de bron en de druk die een sanitair toestel nodig heeft, in kPa.

Het geeft voor elk sanitair toestel de aansluitwaarden die het draagt, het drukverlies vanaf de bron (wrijving volgens Hazen–Williams, fittingen, en de stijging of daling van de leiding: een leiding die langs de getekende weg daalt, krijgt drukwinst als ze vanaf haar lage uiteinde wordt gevoed) en wat er van de toevoerdruk overblijft. Leidingstrangen die te klein zijn voor hun stroming (te snel) worden vermeld.

**Vraag** gebruikt een standaardcurve van aansluitwaarden naar stroming; die is een gelabeld voorbeeld. Typ de curve van de geldende code in de instellingen van de engine voordat u op de stromingen vertrouwt. Fittingverliezen zijn afgeronde standaardwaarden. Lussen worden genegeerd. Controleer de resultaten met uw ingenieur. {{ui:Exporteren}} › Watertoevoernetwerk schrijft elke leidingstrang naar CSV.
