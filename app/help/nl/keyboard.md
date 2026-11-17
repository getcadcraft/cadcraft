---
title: Toetsenbord en muis
summary: Elke toets, muisactie en toets op de opdrachtregel van de tekenapp van CadCraft, zoals de code ze verwerkt.
keywords: toetsenbord, keyboard, sneltoetsen, shortcuts, toetsen, keys, muis, mouse, wiel, verschuiven, pan, zoomen, zoom, rechtermuisknop, middelste knop, f3, f7, f8, ctrl, commandotoets, sneltoetsen, kopiëren, knippen, plakken, dupliceren, klembord, alles selecteren
from: a2608a29
---

Sneltoetsen worden getoond voor uw computer. Op een Mac gebruikt elke {{key:Mod}}-sneltoets hieronder de Command-toets, en de Control-toets werkt ook. Hoe toetsen worden geschreven, en hoe u de F-toetsen op een Mac gebruikt, staat in [Toetsen, muizen en trackpads](common:keys).

## Opdrachten typen

| Toets | Wat het doet |
|---|---|
| Elke letter, cijfer of symbool | Gaat naar de opdrachtregel, waar de aanwijzer ook staat, tenzij een vak in een paneel de cursor heeft |
| {{key:Enter}} | Verstuurt wat u typte. Bij een lege prompt: herhaalt de laatste opdracht, beëindigt een opdracht, rondt een selectie af, of accepteert de standaard in `<…>` |
| {{key:Space}} | Hetzelfde als {{key:Enter}}, behalve wanneer CadCraft om tekst vraagt (tekst, blocknamen, maatvoeringtekst); dan typt het een spatie |
| {{key:Esc}} | Annuleert de opdracht. Zonder actieve opdracht: annuleert een grip-verplaatsing of een selectievak, en wist dan de selectie |
| {{key:Tab}} | Accepteert de voorgestelde opdracht rechts van de opdrachtregel. Met niets getypt en de aanwijzer boven overlappende objecten: markeert het volgende object daar (klik om het te kiezen) |
| {{key:Up}} {{key:Down}} | Bladert door de regels die u eerder typte (de laatste 100) |

## Tekenen en bewerken

| Toets | Wat het doet |
|---|---|
| {{key:Mod+Z}} | Maakt de laatste opdracht ongedaan |
| {{key:Mod+Y}} of {{key:Mod+Shift+Z}} | Opnieuw |
| {{key:Mod+A}} | Selecteert elk object dat u op het open tabblad kunt bewerken ({{cmd:SELECTALL}}). Als u iets op de opdrachtregel hebt getypt, selecteert het die tekst |
| {{key:Delete}} | Wist de geselecteerde objecten ({{cmd:ERASE}}), tenzij u iets op de opdrachtregel hebt getypt |
| {{key:Backspace}} | Wist de geselecteerde objecten wanneer de opdrachtregel de cursor niet heeft; op de opdrachtregel verwijdert het wat u typte |
| {{key:Esc}} | Zonder actieve opdracht: wist de selectie ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Slaat een kopie op in het formaat van de tekening (DWG of DXF) |
| {{key:Mod+Shift+S}} | Opslaan als: kies DWG of DXF, en sla dan een kopie op |
| {{key:Mod+O}} | Opent een DWG of DXF |
| {{key:Mod+P}} | Plotten naar PDF |

Ongedaan maken, opnieuw, alles selecteren en plotten doen niets zolang een opdracht actief is: druk eerst op {{key:Esc}}.

## Kopiëren, knippen en plakken

| Toets | Wat het doet |
|---|---|
| {{key:Mod+C}} | Kopieert de selectie naar het klembord ({{cmd:COPYCLIP}}). Niets geselecteerd: CadCraft vraagt om objecten |
| {{key:Mod+X}} | Knippen: kopieert de selectie en wist hem daarna ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Plakken: de kopie volgt de aanwijzer; klik, of typ een punt, om hem neer te zetten ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Plakken op dezelfde plaats: op de coördinaten waar hij vandaan is gekopieerd ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Dupliceren: een kopie van de selectie beweegt mee met de aanwijzer; klik om hem neer te zetten, {{key:Esc}} laat niets achter ({{cmd:DUPLICATE}}) |

Dezelfde acties staan in de groep {{ui:Edit}} van de werkbalk ({{ui:Copy}}, {{ui:Paste}}) en in het menu {{ui:More}}. Terwijl een andere opdracht actief is, rond die af of druk eerst op {{key:Esc}}; {{key:Mod+V}} of {{key:Mod+D}} opnieuw indrukken terwijl een kopie de aanwijzer volgt, begint opnieuw. Wanneer u iets op de opdrachtregel hebt getypt, of een opdracht om tekst vraagt, kopiëren, knippen en plakken deze toetsen die tekst. Zie [Kopiëren, plakken en dupliceren](topic:copy-paste).

## Schakelaars

| Toets | Schakelaar | Knop in de statusbalk |
|---|---|---|
| {{key:F3}} | Objectsnaps aan of uit | {{ui:Snap}} |
| {{key:F7}} | Raster aan of uit | {{ui:Grid}} |
| {{key:F8}} | Ortho aan of uit | {{ui:Ortho}} |
| {{key:F10}} | Polaire tracering aan of uit | {{ui:Polar}} |
| {{key:F11}} | Objectsnaptracering aan of uit | {{ui:Track}} |
| {{key:F12}} | Dynamische invoer aan of uit | {{ui:Dyn}} |

:::mac
Op een Mac zijn F3, F7 en F8 meestal Mission Control en mediatoetsen. Houd **fn** erbij ingedrukt, of zet standaard functietoetsen aan in Systeeminstellingen, zoals beschreven in [Toetsen, muizen en trackpads](common:keys). De knoppen in de statusbalk werken altijd.
:::

:::firefox
F7 in Firefox kan ook vragen om cursorbrowsen in te schakelen. Kies **Nee**, en gebruik de knop {{ui:Grid}} als het blijft vragen.
:::

## Help

| Toets | Wat het doet |
|---|---|
| {{key:F1}} | Opent of sluit deze help, naast de tekening. Het werkt zelfs terwijl een opdracht actief is, en bereikt nooit de opdrachtregel. |
| {{key:Esc}} | Met de cursor in het helppaneel: wist de zoekopdracht, of sluit het paneel |

De knop {{ui:Help}} in de balk bovenaan doet hetzelfde als {{key:F1}}. Terwijl u in het zoekvak van de help typt, bereikt niets de opdrachtregel. Klik op de tekening om de toetsen weer aan CadCraft te geven; het paneel blijft ernaast open.

:::mac
Houd op een Mac-toetsenbord **fn** ingedrukt en druk op F1, of klik op {{ui:Help}}.
:::

## Scherm

| Toets | Wat het doet |
|---|---|
| {{key:Ctrl+Shift+F}} | Wisselt tussen normaal, volledig scherm en volledig scherm met verborgen balken. Dit gebruikt op elke computer de Control-toets, ook op een Mac. |
| {{key:Left}} {{key:Right}} | Met een tabblad onder de tekening in focus: het vorige of volgende tabblad |

In volledig scherm kan de browser de eerste {{key:Esc}} gebruiken om het volledig scherm te verlaten. Druk nogmaals op {{key:Esc}} om een opdracht te annuleren.

## Dialoogvensters

| Toets | Wat het doet |
|---|---|
| {{key:Esc}} | Sluit het dialoogvenster ({{ui:Plot to PDF}}, of een vraag zoals "Niet-opgeslagen wijzigingen", waar het {{ui:Cancel}} betekent) |
| {{key:Tab}} | Verplaatst tussen de instellingen en knoppen van het dialoogvenster |

Terwijl een dialoogvenster open is, zijn de sneltoetsen van de tekening uitgeschakeld.

## Velden in panelen

In een vak in het rechter- of linkerpaneel:

| Toets | Wat het doet |
|---|---|
| {{key:Enter}} | Past de waarde toe en verlaat het vak |
| {{key:Esc}} | Zet de oude waarde terug en verlaat het vak |
| {{key:Tab}} | Past toe en gaat naar het volgende vak |

Terwijl een vak de cursor heeft, typt u daarin, niet in de opdrachtregel.

## Muis

| Actie | Wat het doet |
|---|---|
| Klik | Kiest een punt wanneer een opdracht om een punt vraagt; kiest een object wanneer die om objecten vraagt; anders selecteert het een object of een grip |
| Shift+klik | Verwijdert een geselecteerd object uit de selectie (met {{ui:Clicking objects}} ingesteld op {{ui:Replaces the selection}} in [Instellingen](topic:settings): voegt het toe). Bij het kiezen van een punt: negeert objectsnaps voor die klik |
| Klik op lege ruimte, klik dan opnieuw | Een selectievak: van links naar rechts is een venster, van rechts naar links een kruisvenster |
| Slepen op lege ruimte | Een lasso: eerst naar rechts is een venster, eerst naar links een kruisvenster; {{key:Space}} tijdens het slepen wisselt tussen venster, kruisvenster en hekje; {{key:Esc}} laat hem vallen (LASSOMODE 0, of Instellingen, maakt het weer de rechthoek) |
| Slepen door stukken in TRIM of EXTEND | Snijdt (of verlengt) elk stuk dat het pad kruist; houd {{key:Shift}} ingedrukt voor de andere |
| Slepen van een grip | Verplaatst de grip (of klik op de grip, en klik dan waar hij naartoe moet) |
| Dubbelklik op tekst | Selecteert hem en zet de cursor in zijn vak {{ui:Text}} in het rechterpaneel |
| Rechtermuisknop | Enter. Tijdens een grip-verplaatsing of een selectievak: annuleert het |
| Slepen met de rechtermuisknop | Verschuift |
| Wiel | Zoomt in en uit rond het kruisdraad |
| Slepen met het wiel (middelste knop) | Verschuift |
| Dubbelklik op het wiel | Zoomt naar de hele tekening (extents) |
| Een DWG of DXF op de tekening slepen | Opent hem |

Voor een trackpad of touchscreen, zie [Muis, trackpad en aanraken](topic:mouse-trackpad-touch).

## Toetsen die de browser behoudt

{{key:Mod+N}}, {{key:Mod+W}} en {{key:Mod+T}} horen altijd bij de browser. CadCraft gebruikt ze niet: gebruik {{ui:New}} of typ `NEW` voor een nieuwe tekening. Het klembord van CadCraft is van zichzelf: {{key:Mod+C}} en {{key:Mod+V}} kopiëren objecten tussen CadCraft-tekeningen en -tabbladen, niet van of naar andere programma's.

:::mac
Als {{key:Mod+Y}} de geschiedenis van uw browser opent in plaats van opnieuw te doen, gebruik dan {{key:Mod+Shift+Z}} of de knop {{ui:Redo}}.
:::

## Waar verplaatsen staat

Verplaatsen is de opdracht `MOVE` (toets M): kies de objecten, dan een basispunt en een tweede punt of een getypte afstand. `ALIGN` en `DISTRIBUTE` zijn er ook. BimCraft gebruikt dezelfde namen voor dezelfde taken op bouwelementen, maar zijn {{key:M}} is Meten: zijn Verplaatsen is {{key:Shift+M}}.
