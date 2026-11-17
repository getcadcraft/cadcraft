---
title: Gescande tekeningen en de trace
summary: Een gescande tekening inbrengen, schalen en recht zetten, opschonen, delen ervan wissen, op de lijnen ervan snappen en die omzetten in lijnen en bogen.
keywords: scan, gescande tekening, raster, tiff, jpeg, png, schaal, uitlijnen, rechtzetten, stippen verwijderen, drempelwaarde, zwart-wit, bijsnijden, wissen, trace, vectoriseren, snap, bogen, arcering, papieren tekeningen, oude tekeningen, scanattach, scantrace
from: 36227e5b
---

## Van een papieren blad naar tekenobjecten

Een gescande tekening is een afbeelding. CadCraft bewaart de afbeelding die u hebt gegeven en wijzigt die nooit: elke opschoonstap maakt een nieuwe afbeelding, met één stap ongedaan maken per stap. {{cmd:SCANINFO}} toont het oorspronkelijke bestand en de stappen die sindsdien zijn gezet. Er wordt niets verstuurd en niets wordt geraden door een getraind model: het opschonen en de trace zijn gewone beeldverwerking, en ze draaien op uw computer.

1. **Voeg het in.** {{cmd:SCANATTACH}} leest een PNG, een JPEG, een TIFF (één pagina, of alle pagina's van een bestand met meerdere pagina's) of een PDF-pagina die een afbeelding is. Het vraagt naar de pagina, de linkerbenedenhoek en de breedte. Voor een PDF-pagina vraagt het ook op hoeveel pixels per inch de pagina moet worden getekend.
2. **Schaal het.** {{cmd:SCANSCALE}}: kies twee punten op de scan en typ daarna de echte afstand ertussen. Het blad wordt geschaald rond het eerste punt.
3. **Lijn het uit.** {{cmd:SCANALIGN}}: kies twee punten op de scan en de twee plekken waar ze bij horen. Het blad verschuift en draait om te passen, en schaalt ook, tenzij u Nee antwoordt.
4. **Zet het recht.** {{cmd:SCANDESKEW}} meet de hoek waaronder de lange lijnen van het blad liggen, en toont die met hoe zeker de meting is. Accepteer die, of typ uw eigen hoek, en het blad wordt gedraaid. Een blad met weinig lange lijnen krijgt een waarschuwing: controleer de hoek voordat u hem accepteert.
5. **Maak het schoon.** {{cmd:SCANCLEAN}} maakt het blad zwart-wit (Auto egaliseert eerst het papier; Adaptive volgt de veranderingen van het papier nauwkeuriger; Level is één getal voor het hele blad) en verwijdert vlekjes tot de grootte die u instelt.
6. **Snijd bij en wis.** {{cmd:SCANCROP}} houdt een venster over. {{cmd:SCANERASE}} wist een rechthoek, een veelhoek of een lasso (indrukken en slepen): stempels, notities, een koffievlek.

De opgeschoonde afbeelding is wat een opgeslagen DWG bevat (een IMAGE en zijn IMAGEDEF, met het bestand van de afbeelding naast de tekening, zoals bij elke afbeelding).

## Snappen op de lijnen van de scan

Met {{cmd:RASTERSNAP}} aan (de standaard) vinden objectsnaps ook de lijnen van een zwart-witscan: de uiteinden van lijnen, hun middelpunten, hoeken en kruisingen, getoond met de gebruikelijke snapmarkeringen. Het deel van het blad onder de aanwijzer wordt getraceerd terwijl u beweegt. Zoom ver genoeg in dat een pixel een paar schermpixels is. Een lijn die langer is dan het deel dat wordt getraceerd, wordt tot aan zijn uiteinden gevolgd.

## De trace

{{cmd:SCANTRACE}} zet de lijnen van het blad om in lijnen en bogen op een nieuwe laag (SCAN-TRACE), als één stap ongedaan maken, met de scan nog eronder. U stelt in:

- **Tolerantie:** hoe ver een getraceerde lijn of boog mag liggen van de lijnen op de scan, in tekeneenheden (het rapport geeft ook pixels). Een strakke tolerantie volgt elk wiebeltje; een ruime maakt minder, rechtere stukken.
- **Venster:** een hoek van het blad, of het hele blad.
- **Bogen:** uit maakt alleen lijnen.
- **Overblijfselen:** wat de trace heeft laten liggen, wordt getekend als kaders op een laag die u kunt uitzetten, of wordt niet getekend.

De trace vindt het midden van elke streek, volgt die, past rechte lijnen en cirkelbogen erop, voegt stukken samen die werden doorgesneden waar een andere lijn kruiste, maakt bijna horizontale en bijna loodrechte lijnen precies horizontaal en loodrecht, en sluit hoeken. **Tekst en arcering blijven als raster:** stukken ter grootte van letters worden opzijgezet, en bundels korte evenwijdige lijnen worden voor arcering aangezien en opzijgezet.

Wanneer de trace klaar is, meldt hij hoeveel lijnen en bogen hij heeft gemaakt, de tolerantie en hoeveel stukken als raster zijn gebleven. **Dat is wat de pixels gaven, binnen die tolerantie. Het is geen bewering dat het resultaat juist is.** Vergelijk het met het blad: een trace kan een zwakke lijn missen, twee lijnen die heel dicht bij elkaar liggen samenvoegen, of een lijn tekenen waar alleen een vlek is. Maak eerst de scan schoon (recht, zwart-wit, zonder vlekjes), dan is het resultaat veel beter.

## Wat niet wordt gelezen

TIFF-bestanden die in tegels zijn opgeslagen, BigTIFF, TIFF met JPEG- of deflatecompressie, Group 3-faxcodering en kleuren die in afzonderlijke vlakken zijn bewaard, worden met een melding geweigerd. Sla ze opnieuw op als strips met LZW, PackBits, Group 4 of zonder compressie. Geïnterlaceerde PNG-bestanden worden ook geweigerd. Bestanden groter dan 128 MB of 100 miljoen pixels worden geweigerd, en een traceervenster kan maximaal 64 miljoen pixels bevatten.
