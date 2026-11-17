---
title: Lassoselectie
summary: Druk en sleep een vrije omtrek om objecten heen om ze te selecteren, als een venster, een kruisvenster of een hekje; wissel met Space terwijl u sleept.
keywords: lasso, lassomode, slepen, vrij, selecteren, selectie, venster, kruisvenster, hekje, Space, veelhoek, aanraken, pen, rechthoek
from: 9ec6154d
---

## Wat u leert

Hoe u objecten selecteert door er omheen te tekenen, en hoe u de rechthoek terugkrijgt wanneer u dat wilt.

## Een lasso tekenen

1. Teken een paar lijnen en cirkels dicht bij elkaar.
2. Zonder dat een opdracht loopt, drukt u de muisknop in op een lege plek en sleept u rond een aantal ervan, eerst **naar rechts**.
3. Laat los.

Alleen de objecten die volledig binnen de omtrek liggen, worden geselecteerd. De omtrek wordt als volle lijn getekend terwijl u sleept: dit is een venster-lasso.

## Venster, kruisvenster en hekje

Welke objecten u krijgt, hangt af van de eerste beweging van uw slepen en van {{key:Space}}:

| U sleept | Lasso | Selecteert |
|---|---|---|
| Eerst naar rechts | Venster (volle omtrek) | Alleen objecten **volledig binnen** |
| Eerst naar links | Kruisvenster (gestreept, groen) | Objecten binnen **en** objecten die de omtrek raakt |
| Druk op {{key:Space}} tijdens het slepen | Venster, dan kruisvenster, dan hekje | Hekje (een gestreept pad, niet gesloten): alleen de objecten die het pad kruist |

1. Druk op een lege plek en sleep rond een paar objecten, eerst **naar links**. Alles wat de omtrek raakt, wordt ook geselecteerd.
2. Druk op {{key:Esc}}.
3. Druk en sleep opnieuw; terwijl u de knop nog ingedrukt houdt, drukt u één keer op {{key:Space}}. De omtrek wordt een kruisvenster; druk nogmaals op {{key:Space}} voor een hekje.

{{key:Shift}} terwijl u loslaat, haalt de objecten juist uit de selectie (met "Objecten aanklikken: Toevoegen" in {{ui:Instellingen}}).

## Binnen een opdracht

Een lasso werkt overal waar CadCraft `Select objects` vraagt: teken hem en druk daarna op {{key:Enter}} om af te ronden. {{cmd:STRETCH}} gebruikt een kruisvenster-lasso als zijn venster, zodat u een L-vormig deel van een tekening in één keer kunt uitrekken.

{{cmd:TRIM}} en {{cmd:EXTEND}} gebruiken het slepen anders: daar snijdt het elk stuk bij dat het pad kruist bij (of verlengt het). Zie [Bijsnijden en verlengen](topic:trim-and-extend).

## De rechthoek

Een klik op lege ruimte, een verplaatsing en een tweede klik tekenen altijd het rechthoekige venster (van links naar rechts) of het kruisvenster (van rechts naar links).

Om slepen opnieuw een rechthoek te laten tekenen, opent u {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Slepen om te selecteren}} en kiest u {{ui:Rechthoek}}, of typt u {{cmd:LASSOMODE}} en daarna `0`. Typt u {{cmd:LASSOMODE}} en daarna `1`, dan krijgt u de lasso. De keuze wordt in deze browser bewaard.

:::touch
Sleep met een vinger of een pen op dezelfde manier. Een tik kiest nog steeds één object.
:::

## Veelgemaakte fouten

- **Er is niets geselecteerd.** De lasso was een venster en er lag niets volledig binnen. Begin het slepen naar links, of druk tijdens het slepen op {{key:Space}}.
- **Het slepen verplaatste een grip.** Drukken op de grip van een geselecteerd object verplaatst de grip. Begin de lasso op een lege plek.
- **{{key:Space}} beëindigde de opdracht.** {{key:Space}} wisselt de lasso alleen terwijl de knop is ingedrukt; anders is het {{key:Enter}}.
