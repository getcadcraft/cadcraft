---
title: Een DWG openen, bewerken en een kopie opslaan
summary: Open een tekening die iemand u heeft gestuurd, controleer wat er binnenkwam, maak een wijziging en stuur een kopie terug als DWG of DXF.
keywords: dwg, dxf, openen, importeren, exporteren, opslaan, r12, heen-en-weer, adviseur, xref, tekening controleren, saveas, opslaan als, dwg opslaan, bestandsformaat
from: 49de4bf6
---

## Wat u gaat doen

Open een DWG van een adviseur, controleer wat CadCraft wel en niet kon tonen, voeg een notitie toe, plot een blad naar PDF en sla een kopie op om terug te sturen, als DWG of DXF.

## Het bestand openen

1. Druk op {{key:Mod+O}}, of klik op {{ui:Openen}}.
2. Kies het `.dwg`-bestand.

De statusregel toont "Bezig met lezen …" terwijl de tekening wordt gelezen. Als dat klaar is, vult de tekening het scherm, en de geschiedenis zegt bijvoorbeeld "Geopend plan.dwg: 18,240 objecten op 64 lagen", met de tijd die het kostte.

:::offline
U bent offline. Als de knop {{ui:Opslaan voor offline gebruik}} "Klaar voor offline gebruik" zegt, openen DWG-bestanden normaal. Zo niet, en er is in dit tabblad nog geen DWG geopend, dan kan het openen van een DWG mislukken, omdat de DWG-lezer van CadCraft met de eerste DWG wordt opgehaald. Open dan een DXF, of sla CadCraft de volgende keer dat u online bent op voor offline gebruik. Zie [Offline werken](common:offline).
:::

## Controleren wat er binnenkwam

1. Kijk naar de sectie {{ui:Tekening}} van het linkerpaneel: indeling en versie, eenheden, aantal objecten en lagen, en bladen.
2. Lees het vak "Over dit bestand" eronder, als er een is.

Het vak somt op:

- **Nog niet getoond:** objecten die CadCraft nog niet kan tekenen, per soort en aantal. Ze worden weggelaten, niet geraden.
- **Indelingen (bladen) zijn binnengekomen:** open ze met de tabbladen onder de tekening.
- **Maatvoeringen die alleen zoals getekend konden worden gelezen.**

3. Klik door de tabbladen onder de tekening om elk blad te zien.
4. Controleer {{ui:Eenheden}} in {{ui:Huidige instellingen}} (niets geselecteerd, tabblad {{ui:Model}}). Als er {{ui:Zonder eenheid}} staat, maar u weet dat de tekening in millimeters is, stel die dan in, zodat de bladschalen en plotschalen goed worden gelezen.

:::tip
Als u een deel van de tekening verwachtte en het niet ziet, controleer dan het paneel {{ui:Lagen}}: de laag kan in het bestand uit of bevroren zijn. Klik op de naam om hem actief te maken; dat zet hem aan.
:::

## Uw wijziging maken

1. Maak een laag voor uw notities: klik op {{ui:Nieuwe laag}}, typ `NOTES` en druk op {{key:Enter}}.
2. Typ `DT` en druk op {{key:Enter}}.
3. Klik waar de notitie komt.
4. Typ een teksthoogte die bij de tekening past (zie [Tekst en labels toevoegen](topic:text)) en druk op {{key:Enter}}.
5. Druk op {{key:Enter}} om de rotatie op 0 te houden.
6. Typ uw notitie en druk op {{key:Enter}}.
7. Druk nogmaals op {{key:Enter}} om te eindigen.

Bewerkingen aan geïmporteerde maatvoeringen zijn in orde: zodra u er een wijzigt, tekent CadCraft hem opnieuw in zijn eigen stijl.

## Een blad plotten voor controle

1. Klik op het tabblad van het blad.
2. Druk op {{key:Mod+P}}.
3. Klik op {{ui:PDF downloaden}}.

Zie [Plotten naar PDF](topic:plot-pdf).

## Een kopie opslaan

1. Druk op {{key:Mod+S}}, of klik op {{ui:Opslaan}}.

U hebt een DWG geopend, dus de browser downloadt `<name>.dwg`, in de versie waarin de DWG binnenkwam. De geschiedenis zegt bijvoorbeeld "Kopie opgeslagen als Plan.dwg (DWG (AutoCAD 2018))." en somt op de regels eronder alles op wat onderweg is veranderd.

2. Lees die regels voordat u het bestand verstuurt. [Wat een DWG bewaart en wijzigt](topic:files#what-a-dwg-keeps-and-changes) legt elk ervan uit.

Uw oorspronkelijke DWG wordt nooit gewijzigd. Elke opslag is een nieuwe download.

## Opslaan als DWG of DXF

Om het formaat zelf te kiezen:

1. Druk op {{key:Mod+Shift+S}}, of klik op {{ui:Opslaan als}}.

Het dialoogvenster {{ui:Een kopie opslaan als}} opent met vier keuzes, elk met de bestandsnaam die het krijgt: {{ui:DWG}}, met de lijst {{ui:Versie}}, {{ui:DXF R12}}, {{ui:DXF 2000}} en {{ui:DXF 2000 (binary)}}. Het huidige formaat en de huidige versie van de tekening zijn al gekozen.

2. Klik op het formaat dat u wilt. Kies voor DWG de versie die het andere kantoor gebruikt, of een oudere: AutoCAD 2018, 2013, 2010, 2007, 2004 of 2000.
3. Klik op {{ui:Opslaan}}.

De kopie wordt gedownload. Vanaf nu slaat {{key:Mod+S}} deze tekening in dat formaat op, en nieuwe tekeningen beginnen er ook mee, in deze browser. {{ui:Annuleren}} of {{key:Esc}} slaat niets op, en de geschiedenis zegt "Niet opgeslagen."

Welke u kiest:

- **DWG** bewaart het meest: bladen met hun viewports, echte maatvoeringen, arceringspatronen, laag- en bloknamen zoals u ze typte, en tekst met meerdere regels als tekst met meerdere regels. De AutoCAD 2000-versie opent in de meeste programma's; 2004 en later bewaren ook ware kleuren.
- **DXF 2000** is een tekstbestand dat bijna alles bewaart wat een DWG bewaart: elk blad als indeling met zijn viewports, echte maatvoeringen, arceringspatronen, ware kleuren, lijndikten, lijntypen, en namen zoals u ze typte. Het opent in AutoCAD 2000 en later en in de meeste CAD-programma's. Multileiders worden de lijnen, pijlpunten en tekst die ze tekenen. Een DXF die in versie 2000 of later is geopend, wordt opgeslagen als DXF 2000.
- **DXF 2000 (binary)** bevat dezelfde inhoud als DXF 2000, in de binaire vorm van het formaat: een kleiner bestand dat elk getal exact bewaart. Binaire DXF-bestanden van andere programma's openen net als tekstbestanden, en een tekening die uit een binaire DXF is geopend, wordt weer als binair opgeslagen.
- **DXF R12** opent in vrijwel elk CAD-programma. Het bewaart het eerste blad met zijn viewports, en de andere bladen van CadCraft. Het vereenvoudigt nieuwere zaken, zoals tekst met meerdere regels en arceringen.

## Wat het andere kantoor zal zien

In een DWG:

- Lijnen, bogen, cirkels, ellipsen, polylijnen, tekst, tekst met meerdere regels, blokken met hun attributen, volle vullingen, arceringspatronen en lagen zoals u ze ziet.
- Echte maatvoeringen: het andere programma meet ze opnieuw op wanneer ze worden uitgerekt.
- Elk blad, met zijn papier en zijn viewports.
- Multileiders als multileiders. In de AutoCAD 2000-versie worden ware kleuren de dichtstbijzijnde standaardkleur.

In een DXF R12:

- Lijnen, bogen, cirkels, polylijnen, tekst, blokverwijzingen en maatvoeringen zoals u ze ziet. Maatvoeringen blijven echte maatvoeringen.
- Laagnamen in hoofdletters, met spaties vervangen door `_`.
- Het eerste blad als papierruimte van de tekening, met zijn viewports. Verdere bladen komen aan als blokken met de namen `CCLAYOUT_1` enzovoort; als ze elk blad als indeling nodig hebben, plot daarvoor ook PDF's van elk blad.
- Tekst met meerdere regels als losse regels, ellipsen als polylijnen, arceringen als contouren.

Hoe dan ook zit alles wat bij het openen van de DWG als "Nog niet getoond" stond, **niet** in de kopie, tenzij de geschiedenis zegt dat het is bewaard. De OLE-objecten van een DWG en de 3D-volumes in de modelruimte worden wel teruggeschreven als u opslaat als DWG. Vertel het de ontvanger, en stuur ook een PDF.

## Veelgemaakte fouten

- **"CadCraft opent DWG- en DXF-tekeningen."** Het bestand heeft een andere extensie. Controleer of het een `.dwg` of `.dxf` is.
- **"Deze tekening kon niet worden gelezen."** De DWG is beschadigd of in een versie die de lezer niet aankan. Vraag om een DXF, of om de DWG opgeslagen in een oudere versie.
- **"Dit binaire DXF eindigt midden in een object."** Het bestand is afgekapt of beschadigd. Typ RECOVER om te openen wat gelezen kan worden, of vraag het bestand opnieuw aan.
- **Het opgeslagen bestand heet `name (1).dwg` of `name (1).dxf`.** De browser doet dat wanneer er al een bestand met dezelfde naam in de map staat.
- **De ontvanger heeft een ouder programma dat de DWG niet kan openen.** Sla op als DWG met {{ui:Versie}} {{ui:AutoCAD 2000}}, of als {{ui:DXF R12}}: vrijwel elk CAD-programma opent dat.
- **Delen van de tekening ontbreken.** Gekoppelde tekeningen (xrefs) worden niet geladen totdat u hun bestanden kiest ({{cmd:XREF}}, `R`), en afbeeldingen worden getoond als kaders met hun bestandsnamen.
