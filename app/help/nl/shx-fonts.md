---
title: Tekst tekenen in uw eigen SHX-lettertypen
summary: Geef CadCraft een map met SHX-lettertypen (of kies de bestanden), dan worden de tekststijlen die ze noemen erin getekend, op het scherm en bij het plotten of in een PDF, met de hoogte, breedtefactor en schuinstand van de stijl.
keywords: shx, lettertypen, lettertype, vormlettertype, bigfont, grote lettertypen, unifont, legacy, perzisch, farsi, arabisch, tekststijl, ontbrekend lettertype, lettertype vervangen, SHXFONTS, map, omkeren, visuele volgorde, simplex, isocp
from: 14b0a4ab
---

Tekeningen van andere programma's noemen vaak **SHX-lettertypen** in hun tekststijlen, en een DWG bevat ze niet. Zonder het lettertype tekent CadCraft die tekst in zijn eigen letter. Dat is prima voor gewone Latijnse tekst, maar niet voor oude lettertypen die gewone tekencodes aan andere lettervormen koppelen, zoals oude Perzische annotatie.

Geeft u CadCraft de lettertypen, dan tekent het de tekst erin.

## De lettertypen laden

Typ {{cmd:SHXFONTS}} (`SHX`) en kies:

- {{ui:Map}} (CadCraft Studio): kies een map. Elk `.shx`-bestand erin wordt nu gelezen, en opnieuw elke keer dat CadCraft start.
- {{ui:Bestanden}} (de browser): kies één of meer `.shx`-bestanden. Ze blijven in deze browser bewaard en worden nooit geüpload.
- {{ui:Lijst}}: de lettertypen die geladen zijn, en de lettertypen die de geopende tekening noemt maar die u niet hebt geladen.
- {{ui:Verwijderen}} en {{ui:Wissen}}: vergeet één lettertype, of alle.

CadCraft kan lettertypen van derden niet meeleveren, dus het levert er nooit: ze komen van u. Een tekening noemt alleen haar lettertypen en bewaart er geen kopie van.

## Wat er gebeurt

De naam van het lettertype van een tekststijl wordt gekoppeld aan een geladen lettertype op basis van de naam, zonder hoofdlettergevoeligheid, de map en `.shx` (`SIMPLEX.SHX` vindt `simplex`). Een tekst in zo'n stijl wordt als lijnen getekend, op het scherm, bij het plotten en in een PDF, op de eigen plek, met de eigen hoogte, rotatie, breedtefactor en schuine hoek van de tekst. De breedte is die van het lettertype zelf, zodat uitlijning op {{ui:Middelpunt}} en {{ui:Rechts}}, regelafbreking en selecteren overeenkomen met wat u ziet. Een stijl waarvan het lettertype niet geladen is, houdt het ingebouwde lettertype. Wanneer u een tekening opent die lettertypen noemt die u niet hebt geladen, zegt de opdrachtregel dat.

De stijl Standard telt ook mee: een tekening waarvan de stijl Standard een eigen lettertype noemt, behoudt dat.

## Lettertypen die al in visuele volgorde staan

Veel oude Perzische en Arabische SHX-lettertypen bevatten letters die al voor het scherm zijn gevormd en van links naar rechts worden getekend. Een tekst die in logische volgorde is getypt, komt daardoor achterstevoren. Typ {{cmd:SHXFONTS}}, kies {{ui:Omkeren}} en noem het lettertype: de tekst wordt dan zo gelegd dat de laatste letter eerst komt. Voer het opnieuw uit om het ongedaan te maken. De schakelaar hoort bij het lettertype, wordt in deze browser bewaard en niet in de tekening opgeslagen.

## Wat nog niet is behandeld

- Tekst met inline opmaakcodes (kleuren, stapels in een MTEXT) blijft in het ingebouwde lettertype.
- Grote lettertypen (het type met dubbelebytetekens) vullen codes aan die het hoofdlettertype mist. Een tekst in een Oost-Aziatische codepagina die CadCraft al naar Unicode heeft omgezet, wordt echter niet terug gekoppeld aan de dubbelebytecodes van het lettertype.
- De lettertypelezer volgt de gepubliceerde beschrijving van het formaat en is getest met lettertypen die voor CadCraft zijn gemaakt. Als een van uw lettertypen verkeerd wordt getekend, stuur ons dan het lettertype en de tekening.
