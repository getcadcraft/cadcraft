---
title: HVAC: kanalen dimensioneren
summary: Dimensionering van kanalen op gelijke wrijving op basis van het luchtdebiet, de formules die de add-on gebruikt en waar ze vandaan komen, en de kanaalcalculator.
keywords: dimensioneren, gelijke wrijving, wrijvingsverlies, luchtdebiet, cfm, snelheid, colebrook, darcy, equivalente diameter, huebscher, platovaal, ashrae, calculator
from: c739aec8
---

## Gelijke wrijving

Elke sectie wordt gedimensioneerd voor hetzelfde drukverlies per lengte — het wrijvingsverlies. Stel het verlies in bij {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:HVAC}}: 0.1 in. w.g. per 100 ft of 0.8 Pa/m als startpunt (een gangbaar startpunt, geen regel). Geef een sectie zijn luchtdebiet ({{cmd:DUCT}} › {{ui:Luchtstroom}}, of {{cmd:DUCTSIZE}}) en de add-on:

1. zoekt de ronde diameter die precies dat verlies geeft bij dat luchtdebiet;
2. rondt die **omhoog** af naar een standaardmaat, zodat het kanaal niet meer verliest dan het verlies: ronde kanalen in stappen van 1 in tot 10 in, daarna van 2 in; metrisch 63, 80, 100, 125, 160, 200, 250, 315, 355, 400 mm en zo verder;
3. houdt bij een rechthoekig of platovaal kanaal de hoogte aan die u instelde (12 in of 300 mm, tenzij u dit wijzigt) en verbreedt in stappen van 2 in of 50 mm tot de equivalente diameter minstens de ronde is.

Het meldt daarna de maat, de snelheid en het wrijvingsverlies dat het werkelijk heeft. Een rechthoekig kanaal met zijden van meer dan 4 op 1 wordt gemarkeerd.

## De formules

De methode en de cijfers zijn de openbare uit het hoofdstuk over kanaalontwerp in het ASHRAE Handbook—Fundamentals (2021):

- Wrijvingsverlies (Darcy–Weisbach): Δp/L = (f / D) × ρV²/2.
- De wrijvingsfactor uit de Colebrook-vergelijking: 1/√f = −2 log₁₀(ε / 3.7D + 2.51 / (Re √f)), opgelost door iteratie.
- Standaardlucht: dichtheid 1.204 kg/m³ en kinematische viscositeit 1.51 × 10⁻⁵ m²/s (20 °C, zeeniveau); Re = V × D / ν.
- Ruwheid: glad 0.03 mm (aluminium, PVC, roestvrij staal), halfglad 0.09 mm (gegalvaniseerd staal), halfruw 0.9 mm (glasvezelkanaalplaat), ruw 3.0 mm (flexibel kanaal, volledig uitgetrokken). Kies het materiaal bij {{ui:Instellingen}} of {{ui:Eigenschappen}}.
- Rechthoekige kanalen: de cirkelvormige equivalent voor gelijke wrijving en luchtdebiet, Huebscher (1948): De = 1.30 (a × b)^0.625 / (a + b)^0.25.
- Platovale kanalen: Heyt en Diaz (1975): De = 1.55 A^0.625 / P^0.25, met A = πb²/4 + b(a − b) en P = πb + 2(a − b).

Uitgewerkte voorbeelden waartegen de add-on wordt getest: 1000 cfm in een rond kanaal van 12 in stroomt met 1273 fpm en verliest 0.189 in. w.g. per 100 ft; 24 × 12 in komt overeen met 18.3 in rond; 1000 cfm bij 0.1 in. w.g. per 100 ft heeft precies 13.66 in nodig, dus 14 in rond of 14 × 12 in rechthoekig.

## De kanaalcalculator

{{cmd:DUCTCALC}} vraagt om een luchtdebiet en een wrijvingsverlies en geeft de exacte ronde diameter, daarna de standaard ronde, rechthoekige en platovale maten met hun snelheid en wrijving. Het verandert niets in de tekening.

## Wat dimensioneren niet doet

Het telt geen fittingverliezen op, balanceert geen aftakkingen en controleert de ventilator niet: het dimensioneert elke sectie op zichzelf op wrijvingsverlies. Controleer de snelheden aan de geluidsgrenzen van uw project.
