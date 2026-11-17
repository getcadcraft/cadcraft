---
title: Kontrollér hvilke enheder en tegning er i
summary: Se om en åbnet tegning er i millimeter, tommer eller noget andet, kontrollér det ved at måle, og forstå hvorfor et andet program kan angive andre enheder for samme DXF.
keywords: enheder, hvad er enheden, hvilken enhed, kontrollér enheder, millimeter, mm, tommer, metrisk, imperial, DXF-enheder, STEP til DXF, forkerte enheder, tommer eller mm, INSUNITS, MEASUREMENT, tegningsenheder, PartCraft DXF
from: c0ee75bb
---

## Hvad du skal gøre

Find ud af hvad én enhed i en åbnet tegning står for, og sørg for at de tal, du læser, har den størrelse, du forventer.

## Trin

1. Åbn tegningen, og tryk derefter på {{key:Esc}}, så intet er valgt, på fanen {{ui:Model}}.
2. I højre panel under {{ui:Aktuelle indstillinger}}, læs {{ui:Enheder}}. Der står, hvad én tegningsenhed står for: {{ui:Millimeter}}, {{ui:Tommer}}, {{ui:Fod}} og så videre. En DXF gemt fra PartCraft siger {{ui:Millimeter}}.
3. Kontrollér det ved at måle noget, hvis størrelse du kender. Skriv {{cmd:DIST}}, og vælg de to ender af en kant eller et hul. Hvis en del, du kender, er 25 mm og vises som `25`, er tegningen i millimeter; hvis den vises som ca. `0.98`, er den i tommer.

{{ui:Uden enheder}} betyder, at filen ikke siger det. CadCraft behandler den så som papirets enhed (millimeter på ISO-papir, tommer på US-papir), og tallene er kun så rigtige som det program, der skrev dem.

## Hvis enhederne er forkerte

Ændring af {{ui:Enheder}} **ændrer ikke størrelsen**: tallene forbliver de samme, og kun hvad de betyder, ændres. Vælg derfor kun det, der faktisk beskriver tegningen. Hvis tallene er millimeter, og {{ui:Enheder}} siger {{ui:Tommer}}, vælg {{ui:Millimeter}}. Hvis du har brug for selve geometrien i andre enheder, skalér den med {{cmd:SCALE}} (25.4 fra tommer til millimeter, 1/25.4 den anden vej), og sæt derefter {{ui:Enheder}}.

Hvordan længder skrives (decimal, fod og tommer, brøker) er en separat indstilling, {{ui:Længdeformat}}: se [Enheder, papirstørrelser og målestokke](topic:units-papers-scales).

## Hvorfor et andet program kan sige tommer

En DXF angiver sine enheder i sin header. Den ældste slags DXF, R12, havde slet ingen enhedsvariabel, så et program, der læser R12 strengt, ignorerer den, der er skrevet, og falder tilbage til sin egen standard, som ofte er tommer. Geometrien i filen er den samme i begge tilfælde: kun mærkatet er forskelligt. PartCraft skriver sine DXF-filer som R12 og angiver millimeter på to måder (`$INSUNITS` 4 og `$MEASUREMENT` 1), så flere programmer læser dem korrekt. Hvis et program stadig siger tommer, så sæt dets enheder til millimeter, når du åbner filen.

Hvis du indsætter en fil i en tegning (i stedet for at åbne den), konverteres dens enheder: se [Enheder ved import](topic:units-on-import).
