---
title: Geschiedenis: versies en wat er veranderde
summary: Bekijk de versies van een tekening (kopieën die Studio bewaart wanneer u opslaat, en die van de cloud), open of herstel er een, en vergelijk twee met de wijzigingen in kleur.
keywords: geschiedenis, history, versies, versiegeschiedenis, herstellen, vorige versie, opslaan ongedaan maken, vergelijken, tekeningen vergelijken, dwgcompare, wijzigingen, toegevoegd, verwijderd, gewijzigd, momentopname, back-up, cloudversies
from: 141d37b3
---

## Wat u gaat maken

Een blik op een eerdere versie van een tekening, en een lijst van wat er nu anders is: wat is toegevoegd, wat is verwijderd en wat is gewijzigd, in kleur aangegeven op de tekening.

## Geschiedenis openen

Typ `HISTORY` (of `HIST`) en druk op {{key:Enter}}, of kies {{ui:History…}} in het menu {{ui:More}} van de groep {{ui:View}}. Het paneel opent naast de tekening en blijft open terwijl u werkt, zodat u de tekening met de kleuren erop kunt verschuiven en zoomen.

Geschiedenis werkt in CadCraft Studio. In een browser zegt het paneel alleen dat.

## Waar de versies vandaan komen

- **Op deze computer.** Elke keer dat u een tekening uit een bestand opent in Studio, en elke keer dat u hem opslaat, bewaart Studio een kopie van het bestand in zijn eigen opslag op deze computer. De eerste kopie is {{ui:As opened}}: het bestand zoals het was vóór uw eerste opslaan erover. Studio bewaart de nieuwste 25 kopieën van elke tekening, en de oudste gaan eerst weg wanneer alle kopieën samen 400 MB overschrijden. Een opslag die niets verandert, bewaart niets. Er wordt niets geüpload.
- **In de cloud.** Wanneer u een tekening uit uw cloudbestanden opent in Studio, toont het paneel ook {{ui:In the cloud}}: elke versie die de cloud bewaart, met het nummer, wie hem opsloeg en de notitie. Het paneel leest ze alleen. CadCraft stuurt zijn eigen opslagen nog niet naar de cloud, dus dit zijn de versies die vanaf andere apparaten en het web zijn opgeslagen. Meld u opnieuw aan in Studio als het zegt dat de aanmelding is verlopen.

Een tekening die u nog niet hebt opgeslagen, heeft geen kopieën: sla hem eerst op.

## Een versie openen of herstellen

- {{ui:Open}} zet die versie in een eigen tabblad. Uw tekening blijft ongemoeid.
- {{ui:Restore}} vervangt deze tekening door die versie. Er wordt eerst om bevestiging gevraagd. Studio bewaart een kopie van de tekening zoals hij nu is in Geschiedenis (gemarkeerd als {{ui:Before a restore}}) voordat het dat doet, en er wordt niets naar het bestand geschreven tot u opslaat. Een herstel kan niet met {{key:Mod+Z}} ongedaan worden gemaakt; gebruik die kopie.

## Vergelijken

1. Klik op {{ui:Compare}} bij een versie. Die wordt vergeleken met {{ui:The drawing as it is now}}; om hem met een andere versie te vergelijken, kies eerst die versie in {{ui:Compare with}}.
2. Lees het resultaat onder de lijst: hoeveel objecten zijn toegevoegd, verwijderd en gewijzigd, en een lijst daarvan. Klik op een item in de lijst om het beeld ernaartoe te verplaatsen.
3. Op de tekening:
   - **groene** objecten zijn toegevoegd,
   - **rode** objecten zijn verwijderd (ze staan alleen in de oudere versie),
   - **oranje** objecten zijn gewijzigd: de nieuwe vorm is doorgetrokken en de oude gestreept.
4. {{ui:Show on the drawing}} zet de kleuren aan en uit; {{ui:Clear the colours}} haalt het resultaat weg. Het sluiten van het paneel wist ze ook.

De lijst zegt wat er in een gewijzigd object is veranderd: de tekst, dat het is verplaatst, de vorm, de laag, kleur, lijntype of lijndikte. Elk blad wordt apart vergeleken; de kleuren zijn zichtbaar op het blad dat open is.

:::note
Een tekening heeft geen blijvend nummer per object, dus CadCraft herkent objecten aan wat ze zijn: hetzelfde object aan beide kanten is ongewijzigd; een object van hetzelfde type en dezelfde laag dat binnen zijn eigen afmeting ligt van een oud object, is hetzelfde object, gewijzigd; wat overblijft is toegevoegd of verwijderd. Een object dat ver is verplaatst, verschijnt als verwijderd op de ene plek en als toegevoegd op de andere. Een blokverwijzing telt de inhoud van zijn blok mee.
:::

## Veelvoorkomende fouten

- **"Nog geen kopieën."** Studio bewaart een kopie bij elke opening en elke opslag van een tekening die een bestand op deze computer heeft. Een tekening die is geopend vanuit een browsertabblad of die nooit is opgeslagen, heeft er geen.
- **De cloudlijst ontbreekt.** Die verschijnt voor een tekening die in Studio uit de cloud is geopend; een bestand dat van schijf is geopend, is geen cloudtekening.
- **Alles lijkt gewijzigd.** Twee versies die door verschillende programma's zijn opgeslagen, schrijven dezelfde tekening op verschillende manieren (namen van anonieme blokken, afronding). Vergelijk versies die door CadCraft zijn opgeslagen.
