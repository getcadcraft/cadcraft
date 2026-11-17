---
title: Bijsnijden en verlengen
summary: Snij lijnen terug waar andere ze kruisen en verleng ze tot ze andere raken, één stuk tegelijk of veel tegelijk door een pad door ze heen te slepen.
keywords: trimextendmode, vensterslepen, bijsnijden, verlengen, tr, ex, snel bijsnijden, slepen, vrije hand, pad, hekje, kruisvenster, shift, snijkanten, grensranden, edgemode, modus, standaard, snel, wissen, voorbeeld, wanden, opschonen
from: 25fbc5bd
---

## Wat u leert

Hoe {{cmd:TRIM}} en {{cmd:EXTEND}} werken, en de snelle manieren om ze te gebruiken: sleep door veel stukken tegelijk, houd {{key:Shift}} ingedrukt om te wisselen tussen bijsnijden en verlengen, en zie wat er verdwijnt voordat u klikt.

## Eén stuk bijsnijden

1. Teken een lange horizontale lijn en twee korte lijnen die er doorheen gaan.
2. Typ `TR` en druk op {{key:Enter}}. De geschiedenis zegt `Huidige instellingen: Snelle modus, randen: Niet verlengen`.
3. Plaats de aanwijzer op de lange lijn tussen de twee korte. Dat stuk wordt grijs en gestreept: het is wat verdwijnt.
4. Klik. Het stuk verdwijnt.
5. Druk op {{key:Enter}} om de opdracht te beëindigen.

In de snelle modus (de standaard) is elk zichtbaar object een snijkant, dus u kiest nooit eerst de randen. Klik op het stuk dat weg moet. Een object dat niets kruist wordt helemaal gewist, en de geschiedenis zegt dat.

## Veel stukken in één sleep bijsnijden

1. Teken een lange horizontale lijn en tien korte verticale lijnen die er doorheen gaan.
2. Typ `TR` en druk op {{key:Enter}}.
3. Druk de muisknop in boven de lange lijn, links van de eerste verticale lijn, en sleep over alle tien boven de lange lijn.

Terwijl u sleept, toont het pad zich als gestreepte lijn, en wordt elk stuk dat het kruist grijs. Laat los: alle tien bovenste stukken worden in één stap bijgesneden. Typ `U` en druk op {{key:Enter}} om ze allemaal in één keer terug te zetten.

:::tip
U kunt ook op twee lege plekken klikken: de lijn ertussen werkt als een gesleept pad. Typ `F` (Hekje) om in plaats daarvan een reeks punten aan te klikken, en druk daarna op {{key:Enter}}.
:::

:::touch
Sleep met een vinger op dezelfde manier. Eén tik op een stuk snijdt het bij.
:::

## In plaats daarvan verlengen, met Shift

1. Teken een verticale lijn, en vijf korte horizontale lijnen links ervan die ervoor stoppen.
2. Typ `TR` en druk op {{key:Enter}}.
3. Houd {{key:Shift}} ingedrukt. Plaats de aanwijzer op een korte lijn: het deel waarmee hij zou groeien, wordt grijs en gestreept.
4. Houd {{key:Shift}} nog steeds ingedrukt en sleep omlaag door de vijf korte lijnen.

Alle vijf lopen nu door tot de verticale lijn. {{key:Shift}} werkt andersom in {{cmd:EXTEND}} (`EX`): een klik verlengt, een {{key:Shift}}+klik snijdt bij. Verlengen verlengt het uiteinde dat het dichtst bij waar u klikt of waar het pad kruist ligt.

## Bijsnijden binnen een venster

1. Typ `TR` en druk op {{key:Enter}}.
2. Typ `C` en druk op {{key:Enter}}.
3. Klik op twee hoeken rond de stukken die weg moeten.

Elk stuk dat minstens gedeeltelijk binnen het venster ligt, wordt bijgesneden.

Om een venster alleen door te slepen, zonder `C` te typen: {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Slepen om bij te snijden en te verlengen}} › {{ui:Een venster}}. Dan opent slepen vanaf een lege plek een vak, en elk stuk dat het raakt wordt bijgesneden (of verlengd, bij {{cmd:EXTEND}}, of met {{key:Shift}}). {{ui:Een pad}} (de standaard) brengt het vrije pad terug. De instellingenregel aan het begin van TRIM zegt welke van de twee aan staat.

## De snijkanten kiezen (Standaardmodus)

Soms moet maar één lijn snijden, zoals een muurvlak waar veel andere lijnen doorheen gaan.

1. Typ `TR` en druk op {{key:Enter}}.
2. Typ `O` (mOdus) en druk op {{key:Enter}}, typ dan `S` (Standaard) en druk op {{key:Enter}}.
3. Bij `Selecteer snijkanten` klikt u op de randlijnen (of sleept u een venster), en drukt u op {{key:Enter}}. Druk op {{key:Enter}} met niets geselecteerd maakt elk object een kant.
4. Klik of sleep door de stukken die weg moeten.

Alleen de gekozen randen snijden bij, en een object dat geen rand kruist blijft met rust. De modus blijft tot u de pagina sluit; typ `O`, dan `Q` om terug te gaan naar Snel. {{cmd:TRIMEXTENDMODE}} zet hem vooraf, zoals de variabele met die naam elders doet: `0` Standaard, `1` Snel. `T` (snijkanten) kiest op elk moment nieuwe randen; in {{cmd:EXTEND}} is dat `B` (Grensranden).

## Randen die zouden raken

1. Typ `TR` en druk op {{key:Enter}}.
2. Typ `E` (Rand) en druk op {{key:Enter}}, dan `E` (Verlengen) en druk op {{key:Enter}}.

Nu telt een snijlijn of boog die te kort stopt alsof hij doorliep: een korte lijn snijdt waar hij zou kruisen als hij langer was. Typ `E`, dan `N` (Niet verlengen) om terug te schakelen. Dit is hetzelfde als EDGEMODE 1 en 0.

## Wissen zonder te stoppen

Typ `R` (wissen) en druk op {{key:Enter}}, kies de objecten die gewist moeten worden, en druk op {{key:Enter}}. TRIM gaat door.

## Veelgemaakte fouten

- **Een hele lijn is verdwenen.** In de snelle modus wordt een object dat niets kruist gewist. Typ `U` om het terug te zetten, of schakel over naar de standaardmodus (`O`, `S`).
- **"Hier valt niets bij te snijden: geen gekozen rand kruist dat object."** De standaardmodus snijdt alleen bij de randen die u koos. Typ `T` om ze opnieuw te kiezen.
- **"Geen grens in die richting."** Verlengen vond niets vooruit. Klik dichter bij het uiteinde dat moet groeien, of zet `E` (Rand, Verlengen) aan voor grenzen die te kort stoppen.
- **De sleep tekende een lasso.** Een sleep snijdt alleen bij terwijl TRIM of EXTEND om een object vraagt. Zonder lopende opdracht selecteert een sleep (zie [Lasso-selectie](topic:lasso-selection)).
- **Alleen lijnen, bogen, cirkels en polylijnen kunnen worden bijgesneden.** Ontbind eerst een blok om zijn lijnen bij te snijden.
