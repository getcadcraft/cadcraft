---
title: "Standaardbeleid: bepaal waarmee een nieuwe tekening begint"
summary: Bepaal eenmaal met welke eenheden, lengteformaat, precisie, teksthoogte en bladpapier een nieuwe tekening begint, voor metrisch en voor imperiaal werk, en deel het beleid over het kantoor als een klein bestand.
keywords: standaard, standaarden, standaardbeleid, beleid, kantoornorm, kantoorstandaarden, sjabloon, nieuwe tekening, eenheden, insunits, lengteformaat, architectonisch, precisie, luprec, teksthoogte, bladpapier, a1, delen, exporteren, importeren, json
from: 7b80fd13
---

## Wat u gaat doen

Vertel CadCraft waarmee een nieuwe tekening moet beginnen, zodat niemand op kantoor UNITS hoeft te draaien en dezelfde dingen elke keer moet wijzigen. Dit is een add-on: die staat uit totdat u hem aanzet, en een beleid dat u niet instelt, laat de standaard van CadCraft zelf precies zoals die is.

:::note
Dit zijn standaarden voor **nieuwe** tekeningen en **nieuwe** bladen. Een tekening die u al bent begonnen, wordt niet gewijzigd, en ook een tekening die u opent niet.
:::

## Stappen

1. Open Instellingen, ga naar {{ui:Add-ons}} en zet {{ui:Standaardbeleid}} aan.
2. Open in Instellingen het tabblad **CadCraft** en kies {{ui:Standaardbeleid}} in de lijst links.
3. Stel de beleidsregels in die u wilt. Elk begint op **CadCraft-standaard**. Een beleid met een vakje **Metrisch** en een vakje **Imperiaal** neemt één waarde voor elk soort tekening; vul alleen de waarden in die u nodig hebt.
4. Er is geen knop Opslaan: elke wijziging wordt meteen opgeslagen.
5. Start een nieuwe tekening. Die heeft de eenheden, het lengteformaat, de precisie en de teksthoogte die u hebt ingesteld, en het eerste nieuwe blad staat op het papier dat u koos.

## De beleidsregels

- **Eenheden van een nieuwe tekening**: geen, millimeter, centimeter, meter, inch of voet.
- **Lengteformaat** en **Lengteprecisie**: wat de opdracht UNITS instelt, voor een nieuwe tekening.
- **Hoogte van nieuwe tekst**, in tekeneenheden.
- **Papier van een nieuw blad**: het papier dat Nieuw blad gebruikt.
- **Annotatiegroottes op papier** (Instellingen › Algemeen › Standaardbeleid): de hoogtes van het kantoor in millimeters, zoals ze worden afgedrukt. CadCraft gebruikt die voor notities en labels: {{cmd:ANNOSCALE}} stelt de hoogte in waarmee nieuwe tekst begint, bij de annotatieschaal. Zie [Eenheden, papieren en schalen](topic:units-papers-scales#annotate-by-scale).

Een tekening in inch of voet gebruikt de imperiale waarden; elke andere tekening gebruikt de metrische. Een tekening zonder eenheden gebruikt het eenhedenstelsel dat is ingesteld in Instellingen › Algemeen › Standaardbeleid, of metrisch als er geen is ingesteld.

## Delen binnen het kantoor

1. Open in Instellingen het tabblad **Algemeen** en kies {{ui:Standaardbeleid}}.
2. Klik op {{ui:Opslaan naar bestand}}. U krijgt een klein bestand dat eindigt op `.ccdefaults.json`.
3. Zet op een andere computer de add-on aan, open dezelfde plek en klik op {{ui:Laden uit bestand}}. De beleidsregels van het bestand vervangen die op die computer.

Eén bestand bevat de beleidsregels van elke CadCraft-app, dus hetzelfde bestand werkt in BimCraft.

## Goed om te weten

- Er is geen beleid voor de schaal van een blad: het beeld van een nieuw blad wordt op de tekening gepast, en u stelt de schaal op het blad zelf in.
- Er is geen beleid voor een maatvoeringsstijl: een nieuwe tekening heeft geen benoemde maatvoeringsstijlen. Stel maatvoering in met DIMSTYLE, of begin met een tekening die de uwe heeft.
- Het bestand is gewone, open JSON. Een beleidsregel in het bestand die deze versie niet kent, wordt weggelaten en in de melding genoemd; de rest laadt wel.
- Beleidsregels worden in deze browser bewaard, niet in de tekening. Zet de add-on uit, dan is alles weer de standaard van CadCraft.
