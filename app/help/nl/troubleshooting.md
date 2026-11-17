---
title: Problemen oplossen
summary: Berichten die CadCraft toont en problemen die u kunt tegenkomen, elk met de oorzaak en de oplossing.
keywords: probleem, fout, werkt niet, bericht, kan niet openen, onbekend commando, gebeurt niets, vastgelopen, toetsen werken niet, leeg, ontbreekt, oplossing
from: 8299b222
---

## Bestanden openen

| Bericht of verschijnsel | Oorzaak | Oplossing |
|---|---|---|
| "CadCraft opent DWG- en DXF-tekeningen. "…" is geen van beide." | Het bestand is geen `.dwg` of `.dxf`. | Open het tekeningbestand zelf. Een PDF kan worden binnengehaald (Openen vraagt: importeren of koppelen, zie [PDF-onderlegger](topic:pdf-underlay)); afbeeldingen worden toegevoegd met `IMAGEATTACH`. |
| "Deze binaire DXF eindigt midden in een object: het bestand is afgekapt of beschadigd." | De binaire DXF stopt voor het einde. | Typ RECOVER om te openen wat gelezen kan worden, of vraag het bestand opnieuw aan. |
| "Dit is geen leesbare DXF (ongeldige groepscode op regel …)." | De DXF is beschadigd of is niet echt een DXF. | Vraag het bestand opnieuw aan, of vraag om een DWG. |
| "Deze tekening kon niet worden gelezen. Mogelijk is hij beschadigd, of opgeslagen in een versie die de DWG-lezer nog niet ondersteunt (…)." | De DWG-lezer kon hem niet lezen. | Vraag de DWG aan die in een oudere versie is opgeslagen, of een DXF. |
| "Deze tekening is van AutoCAD R11 / R12 (DWG AC1009), ouder dan wat CadCraft leest …" | DWG-bestanden van Release 12 en eerder gebruiken een formaat dat CadCraft niet leest. | Sla het op in het programma dat het heeft gemaakt, als DXF (elke versie) of als een nieuwere DWG, en open dat. Het eigen Opslaan als van CadCraft biedt DXF R12 aan voor programma's die dat oude formaat willen. |
| "Kon niet openen …" gevolgd door een netwerkbericht, bij de eerste DWG | De DWG-lezer kon niet worden gedownload: u bent offline en CadCraft is niet opgeslagen voor offlinegebruik, of de verbinding viel weg. | Ga online en probeer opnieuw, of open een DXF. Klik op {{ui:Opslaan voor offline gebruik}} en wacht op "Offline gereed", zodat DWG-bestanden de volgende keer ook offline openen. Zie [Offline werken](common:offline). |
| De offline-knop zegt "Kon niet opslaan" | Sommige bestanden zijn niet gedownload. | Controleer de verbinding en klik op de knop om het opnieuw te proberen. |
| De offline-knop zegt "Offline niet beschikbaar" | Privévensters en sommige beheerde computers kunnen geen offlinekopie bewaren. | Gebruik een normaal venster, of blijf online. |
| CadCraft opent niet zonder verbinding | Het is in deze browser niet opgeslagen voor offlinegebruik, of de browser heeft het gewist. | Klik de volgende keer dat u online bent op {{ui:Opslaan voor offline gebruik}} en wacht op "Offline gereed". |
| De tekening opent, maar er ontbreken onderdelen | Objecten die CadCraft nog niet kan tekenen, of lagen die in het bestand uit of bevroren staan. | Lees "Over dit bestand" in het linkerpaneel. Controleer het paneel {{ui:Lagen}}. |
| Tekst loopt op twee regels | CadCraft tekent tekst in een Helvetica-achtig lettertype, dat breder is dan sommige CAD-lettertypen. | Kort de tekst in bij Eigenschappen, of accepteer de extra regel. |
| Een cirkel wordt als ellips getoond, of gespiegelde tekst leest de goede kant op | Het object is getekend in een gekantelde vlak, of bekeken van onderaf, in het programma dat het bestand maakte. CadCraft toont het zoals van bovenaf gezien, zoals de plattegrondweergave van dat programma dat doet; tekst blijft leesbaar. | Niets te repareren. Om het op de manier van het andere programma te zien, vraagt u de tekening afgevlakt aan, of met de objecten van bovenaf getekend. |
| Een blok, cirkel of maatvoering staat ergens anders dan in het programma dat het bestand maakte | Een tekeningsituatie die CadCraft verkeerd leest. | Meld het ons op Discord, met het bestand als u het kunt delen. |

## De opdrachtregel

| Bericht of verschijnsel | Oorzaak | Oplossing |
|---|---|---|
| "Onbekend commando "…". Typ HELP voor de lijst." | Geen commando of alias met die naam. | Typ `HELP`, of zie [Commandoverzicht](topic:commands). Sommige bekende commando's zijn [nog niet beschikbaar](topic:not-built-yet). |
| "Geen dergelijk commando" naast de opdrachtregel terwijl u typt | Wat u typt, komt nog met niets overeen. | Typ verder, of controleer de spelling. |
| "Punt- of optiesleutelwoord vereist." | Wat u typte is geen punt of optie. | Controleer de notatie: `x,y`, `@dx,dy`, `@d<a`, of een enkel getal. Zie [Coördinaten en afstanden invoeren](topic:coordinate-entry). |
| "Vereist een positief getal of twee punten." | Een afstand was negatief of geen getal. | Typ een positief getal, of klik op twee punten. |
| "Vereist een hoek in graden of twee punten." | De hoek was geen getal. | Typ graden als een gewoon getal. |
| "Vereist een getal." | Er werd een getal verwacht. | Typ alleen cijfers. |
| "Ongeldig optiesleutelwoord." | De letters komen niet overeen met een optie. | Typ de hoofdletters die tussen de vierkante haken staan. |
| `*Cancel*` | U drukte op {{key:Esc}}, of op {{key:Enter}} waar een punt vereist was. | Start het commando opnieuw. |
| Typen komt niet bij de opdrachtregel | Een vak in een paneel of dialoogvenster heeft de cursor. | Druk op {{key:Enter}} of {{key:Esc}}, of klik op de tekening. |
| Het commando gebruikt objecten die u niet had gekozen | Ze waren geselecteerd voordat u het commando startte. | Druk op {{key:Esc}} voordat u het commando start. |
| Een lijn ging naar een onverwachte plek | `x,y` is absoluut. | Gebruik `@dx,dy` voor relatieve punten. |
| "Beëindig of annuleer eerst het huidige commando (Esc)." | U drukte op {{key:Mod+S}} terwijl een commando liep. | Druk op {{key:Esc}} en sla dan op. |
| "Kan niet opslaan als DWG (AutoCAD 2000): … Probeer Opslaan als, daarna DXF." | Iets in de tekening kon niet als DWG worden geschreven. | Druk op {{key:Mod+Shift+S}}, kies {{ui:DXF R12}} en klik op {{ui:Opslaan}}. |
| "Niet opgeslagen." | U sloot het dialoogvenster {{ui:Een kopie opslaan als}} met {{ui:Annuleren}} of {{key:Esc}}. | Druk opnieuw op {{key:Mod+Shift+S}} en klik op {{ui:Opslaan}}. |

## Bewerken

| Bericht of verschijnsel | Oorzaak | Oplossing |
|---|---|---|
| Een object laat zich niet selecteren | De laag is vergrendeld, uit of bevroren; of u bent op een blad en het is het model binnen een viewport. | Ontgrendel de laag, of ga naar het tabblad {{ui:Model}}. |
| "Niets gevonden daar." | Geen object onder de klik. | Zoom in en klik op de lijn zelf. |
| "Niets snijdt dat object daar." | {{cmd:TRIM}} vond geen object dat het stuk kruist dat u koos. | Controleer dat de snijlijn het stuk echt kruist. |
| "Dat object kan niet worden bijgesneden." | Bijsnijden werkt op lijnen, bogen, cirkels en polylijnen. | Ontbind eerst blokken, of wis en teken opnieuw. |
| "Geen grens in die richting." | {{cmd:EXTEND}} vond niets om op aan te sluiten. | Kies dichter bij het uiteinde dat moet groeien. |
| "Dat object kan niet worden geoffset." | Offset werkt op lijnen, bogen, cirkels en polylijnen. | Ontbind het eerst, of teken een evenwijdige lijn. |
| "Die afstand kan niet worden geoffset." | De offset zou de vorm binnenstebuiten keren. | Gebruik een kleinere afstand. |
| "Straal is te groot." of "Afstand is te groot." | De afronding of afschuining zou voorbij het einde van een lijn lopen. | Stel een kleinere straal in met `R`, of kleinere afstanden met `D`. |
| "Alleen het eerste of laatste segment van een open polylijn kan worden ingekort." | De hoek zou in het midden van een polylijn snijden. | Kies twee naast elkaar liggende segmenten van de polylijn, of gebruik `P` voor elke hoek. |
| "Kies een tweede, andere lijn." | De tweede keuze was dezelfde lijn, of geen lijn. | Kies een andere lijn. |
| "Alleen polylijnen, blokverwijzingen en maatvoeringen worden ontbonden." | De selectie had niets om te ontbinden. | Selecteer een polylijn, blokverwijzing of maatvoering. |
| "Dat is de actieve laag. Maak eerst een andere laag actief." | U probeerde de actieve laag uit te zetten. | Klik op de naam van een andere laag, en zet dan deze uit. |
| "Er is al een laag met de naam …" | Laagnamen moeten uniek zijn. | Kies een andere naam. |
| "Niets om ongedaan te maken." | Er is niets meer om ongedaan te maken, of u opende of startte een tekening (dat wist de geschiedenis). | — |

## Maatvoering en blokken

| Bericht of verschijnsel | Oorzaak | Oplossing |
|---|---|---|
| Maatvoeringstekst en pijlen zijn heel klein of heel groot | De maten zijn in tekeningeenheden; de algemene schaal past niet bij de tekening. | Stel {{cmd:DIMSCALE}} in op de plotschaal; zie [Maatvoeringsgroottes instellen](topic:dimension-settings). |
| "Kies een punt binnen de hoek die u wilt meten." | De locatie van de hoekmaatvoering ligt op een been. | Klik binnen de hoek. |
| "Die lijnen zijn evenwijdig." | Evenwijdige lijnen hebben geen hoek tussen zich. | Kies twee lijnen die elkaar snijden. |
| "Kies een lineaire of uitgelijnde maatvoering." | {{cmd:DIMCONTINUE}} of {{cmd:DIMBASELINE}} heeft er een nodig om vanaf te beginnen. | Kies een lineaire of uitgelijnde maatvoering. |
| "Deze tekening heeft nog geen blokken: F voegt er een in uit een bestand, L uit de bibliotheek …" | De tekening heeft geen eigen blokken. | Typ `F` of `L`, of maak een blok met {{cmd:BLOCK}}. |
| "Geen blok genaamd "…"." | De naam is verkeerd. | Het bericht toont de blokken die er zijn. |
| "Een bloknaam kan niet beginnen met * of … gebruiken" gevolgd door een lijst tekens | De naam heeft een teken dat blokken niet kunnen gebruiken. | Gebruik letters, cijfers, `-` en `_`. |
| "Een blok kan zichzelf niet bevatten." | De selectie bevat een verwijzing naar het blok dat u maakt. | Laat die verwijzing weg. |
| "Geen objecten geselecteerd; niets gemaakt." | U drukte op {{key:Enter}} voordat u iets selecteerde. | Start {{cmd:BLOCK}} opnieuw en selecteer de objecten. |

## Bladen en plotten

| Bericht of verschijnsel | Oorzaak | Oplossing |
|---|---|---|
| "Viewports horen op een indeling. Open eerst een bladtabblad (of maak er een met LAYOUT)." | {{cmd:MVIEW}} op het tabblad {{ui:Model}}. | Klik eerst op een bladtabblad. |
| "Open eerst de indeling met de viewport." | {{cmd:VPVIEW}} op het tabblad {{ui:Model}}. | Klik eerst op het bladtabblad. |
| Een viewportschaal lijkt tien keer verkeerd | De tekeningeenheden zijn verkeerd. | Stel {{ui:Eenheden}} in bij {{ui:Huidige instellingen}}. |
| "Er is nog niets om te plotten." | Het model is leeg. | Teken iets, of open een tekening. |
| "Kies het venster om te plotten." | {{ui:Een venster…}} is gekozen en er is geen venster gekozen. | Klik op {{ui:Selecteren}} en kies twee hoeken. |
| "… groter dan het papier: de randen worden afgesneden." | Het gebied past niet bij die schaal. | Kies een kleinere schaal, een groter papier, of {{ui:Passend op papier}}. |
| "De browser blokkeerde het nieuwe tabblad, dus de PDF is gedownload." | Pop-ups zijn voor de site geblokkeerd. | Open de gedownloade PDF, of sta pop-ups toe voor de site. |
| Tekens worden als "?" afgedrukt | De lettertypen van de PDF hebben geen letter ervoor (zeldzame ideogrammen, Hindi en andere schriften die complexe vormgeving nodig hebben, …), of het grotere lettertype kon niet worden opgehaald (offline). Europese schriften, Cyrillisch, Grieks, Hebreeuws, Arabisch, Perzisch, Urdu, Thai, Chinees, Japans en Koreaans worden zoals ze zijn afgedrukt. | Voor Arabisch-schrift, Thai, Chinees, Japans of Koreaans: plot opnieuw met een verbinding. Andere schriften zijn nog niet beschikbaar. |
| Constructielijnen staan in de PDF | Hun laag wordt geplot. | Klik op de printerknop van de laag. |
| Alle lijnen zijn even dik | Hun lijndikte is {{ui:Standaard}}, dus ze worden afgedrukt met de pendikte van het dialoogvenster. | Geef de lagen of objecten een {{ui:Lijndikte}} in het rechterpaneel, of kies een {{ui:Lijndikte}} in het dialoogvenster. Om lijndiktes op het scherm te zien, drukt u op {{ui:LWT}} in de statusbalk. |

## Toetsen en het scherm

| Verschijnsel | Oorzaak | Oplossing |
|---|---|---|
| F3, F7 of F8 verandert het volume of opent Mission Control | Mac-functietoetsen. | Houd **fn** ingedrukt, of gebruik de knoppen in de statusbalk. Zie [Toetsen, muizen en trackpads](common:keys). |
| F7 vraagt naar cursorbrowsen | Firefox' eigen gebruik van F7. | Kies Nee; gebruik de knop {{ui:Raster}}. |
| {{key:Mod+N}} opende een browservenster | De browser houdt die toets vast. | Klik op {{ui:Nieuw}} of typ `NEW`. |
| {{key:Mod+A}} selecteerde de tekst van de opdrachtregel | De opdrachtregel had de cursor. | Klik eerst op een object, of typ `ALL` bij een prompt `Select objects`. |
| {{key:Delete}} wist niet | De opdrachtregel had de cursor. | Typ `E` en druk op {{key:Enter}}. |
| Rechtermuisklik doet niets op een Mac-trackpad | Control-klik kan als een gewone klik tellen. | Klik met twee vingers. |
| Niets verschuift op een trackpad | Er is geen middelste knop, en Spatie verschuift niet. | Veeg met twee vingers: de 2D-weergave verschuift (knijpen en het muiswiel zoomen). Of sleep met de rechtermuisknop ingedrukt. |
| De eerste {{key:Esc}} verliet het volledige scherm | De browser gebruikt Esc om het volledige scherm te verlaten. | Druk nog eens op {{key:Esc}} om het commando te annuleren. |
| {{key:F1}} doet niets op een Mac | F1 is een helderheidstoets. | Houd **fn** ingedrukt, of klik op {{ui:Help}}. |
| Typen gaat naar het zoekvak van de help | Het helpvenster heeft de cursor. | Klik op de tekening. |
| De tekening werd leeg | U zoomde ver weg. | Klik op {{ui:Alles tonen}}, of dubbelklik op het wiel. |
| "Site verlaten?" bij het sluiten van het tabblad | Er zijn niet-opgeslagen wijzigingen. | Blijf, sla op met {{key:Mod+S}}, en sluit dan. |
