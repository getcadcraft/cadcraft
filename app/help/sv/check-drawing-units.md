---
title: Kontrollera vilka enheter en ritning har
summary: Se om en öppnad ritning är i millimeter, tum eller något annat, kontrollera det genom att mäta, och förstå varför ett annat program kan ange andra enheter för samma DXF.
keywords: enheter, vilka enheter, vilken enhet, kontrollera enheter, millimeter, mm, tum, metriskt, imperiskt, DXF-enheter, STEP till DXF, fel enheter, tum eller mm, INSUNITS, MEASUREMENT, ritningsenheter, PartCraft DXF
from: c0ee75bb
---

## Vad du gör

Ta reda på vad en enhet i en öppnad ritning motsvarar, och se till att talen du läser har den storlek du förväntar dig.

## Steg

1. Öppna ritningen och tryck sedan på {{key:Esc}} så att inget är markerat, på fliken {{ui:Modell}}.
2. I högerpanelen, under {{ui:Aktuella inställningar}}, läs {{ui:Enheter}}. Där anges vad en ritningsenhet motsvarar: {{ui:Millimeter}}, {{ui:Tum}}, {{ui:Fot}} och så vidare. En DXF som sparats från PartCraft anger {{ui:Millimeter}}.
3. Kontrollera genom att mäta något vars storlek du känner till. Skriv {{cmd:DIST}} och välj de två ändarna på en kant eller ett hål. Om en del du vet är 25 mm och visar `25`, är ritningen i millimeter; om den visar ungefär `0.98`, är den i tum.

{{ui:Enhetslös}} betyder att filen inte anger något. CadCraft behandlar då enheten som pappersenheten (millimeter på ISO-papper, tum på US-papper), och talen är bara så korrekta som programmet som skrev dem.

## Om enheterna är fel

Att ändra {{ui:Enheter}} **ändrar ingen storlek**: talen förblir desamma och bara det de betyder ändras. Ange därför bara det som faktiskt stämmer för ritningen. Om talen är millimeter och {{ui:Enheter}} säger {{ui:Tum}}, välj {{ui:Millimeter}}. Om du behöver geometrin själv i andra enheter, skala den med {{cmd:SCALE}} (25.4 från tum till millimeter, 1/25.4 åt andra hållet) och ställ sedan in {{ui:Enheter}}.

Hur längder skrivs (decimal, fot och tum, bråk) är en separat inställning, {{ui:Längdformat}}: se [Enheter, pappersstorlekar och skalor](topic:units-papers-scales).

## Varför ett annat program kan säga tum

En DXF anger sina enheter i sitt huvud. Den äldsta typen av DXF, R12, hade ingen variabel för enheter alls, så ett program som läser R12 strikt ignorerar den som skrivits där och använder sin egen standard, som ofta är tum. Geometrin i filen är densamma i båda fallen: bara etiketten skiljer sig. PartCraft skriver sina DXF-filer som R12 och anger millimeter på två sätt (`$INSUNITS` 4 och `$MEASUREMENT` 1) så att fler program läser dem rätt. Om ett program fortfarande säger tum, ställ dess enheter till millimeter när du öppnar filen.

Att föra in en fil i en ritning (i stället för att öppna den) konverterar dess enheter: se [Enheter vid import](topic:units-on-import).
