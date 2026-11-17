---
title: Kontroller hvilke enheter en tegning er i
summary: Se om en åpnet tegning er i millimeter, tommer eller noe annet, kontroller det ved å måle, og forstå hvorfor et annet program kan oppgi andre enheter for samme DXF.
keywords: enheter, hvilke enheter, kontroller enheter, millimeter, mm, tommer, metrisk, imperisk, DXF-enheter, STEP til DXF, feil enheter, tommer eller mm, INSUNITS, MEASUREMENT, tegningsenheter, PartCraft DXF
from: c0ee75bb
---

## Hva du gjør

Finn ut hva én enhet i en åpnet tegning står for, og sørg for at tallene du leser, har den størrelsen du forventer.

## Steg

1. Åpne tegningen, og trykk deretter {{key:Esc}} slik at ingenting er valgt, på fanen {{ui:Modell}}.
2. I høyre panel, under {{ui:Gjeldende innstillinger}}, les {{ui:Enheter}}. Der står det hva én tegningsenhet betyr: {{ui:Millimeter}}, {{ui:Tommer}}, {{ui:Fot}} og så videre. En DXF lagret fra PartCraft står med {{ui:Millimeter}}.
3. Kontroller ved å måle noe du vet størrelsen på. Skriv {{cmd:DIST}} og velg de to endene på en kant eller et hull. Hvis en del du kjenner er 25 mm og viser `25`, er tegningen i millimeter. Viser den omtrent `0.98`, er den i tommer.

{{ui:Uten enhet}} betyr at filen ikke sier det. CadCraft behandler da den som papirets enhet (millimeter på ISO-papir, tommer på US-papir), og tallene er bare så riktige som programmet som skrev dem.

## Hvis enhetene er feil

Endring av {{ui:Enheter}} **endrer ikke størrelsen**: tallene blir stående, og bare hva de betyr, endres. Sett den derfor bare slik at den sier hva tegningen virkelig er. Hvis tallene er millimeter og {{ui:Enheter}} sier {{ui:Tommer}}, velg {{ui:Millimeter}}. Hvis du trenger selve geometrien i andre enheter, skalér den med {{cmd:SCALE}} (25.4 for tommer til millimeter, 1/25.4 den andre veien), og sett deretter {{ui:Enheter}}.

Hvordan lengder skrives (desimal, fot og tommer, brøker) er en egen innstilling, {{ui:Lengdeformat}}: se [Enheter, papirstørrelser og målestokker](topic:units-papers-scales).

## Hvorfor et annet program kan si tommer

En DXF oppgir enhetene sine i headeren. Den eldste typen DXF, R12, hadde ingen enhetsvariabel i det hele tatt. Et program som leser R12 strengt, ignorerer derfor det som står der, og bruker i stedet sin egen standard, som ofte er tommer. Geometrien i filen er den samme uansett: bare etiketten er forskjellig. PartCraft skriver DXF-filene sine som R12 og oppgir millimeter på to måter (`$INSUNITS` 4 og `$MEASUREMENT` 1), slik at flere programmer leser dem riktig. Hvis et program fortsatt sier tommer, sett enhetene til millimeter når du åpner filen.

Å hente en fil inn i en tegning (i stedet for å åpne den) konverterer enhetene: se [Enheter ved import](topic:units-on-import).
