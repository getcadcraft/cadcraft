---
title: De aanwijzer springt of hapert over de tekening
summary: Wat u moet doen wanneer het kruisdraad de muis niet soepel volgt, op een oudere of tragere computer.
keywords: cursor springt, aanwijzer hapert, kruisdraad traag, schokkerige cursor, oude computer, oude grafische kaart, geïntegreerde grafische kaart, hardwareversnelling, vloeiendere aanwijzer, trage laptop
from: 39dc9057
---

CadCraft draait in de browser (CadCraft Studio is ook een browserweergave), dus niets erin is gemaakt voor de ene of de andere grafische kaart. Het kruisdraad wordt door de app getekend, wat betekent dat het alleen zo snel kan bewegen als de app een beeld kan tekenen.

## Laat CadCraft de extra's uitzetten

1. Open {{ui:Instellingen}} (het tandwiel rechtsboven) en blijf op het tabblad {{ui:CadCraft}}.
2. Kies {{ui:Vloeiendere aanwijzer op langzamere computers}}.
3. Kies {{ui:Aan}}.

Met deze optie aan wordt het eigen kruisdraad van uw computer gebruikt in plaats van het getekende kruisdraad en vakje (ook het kruisdraad op volledig scherm), en het object onder de aanwijzer licht op wanneer de aanwijzer stilstaat in plaats van terwijl hij beweegt. Objectsnaps, tracering en de gummiband werken zoals voorheen.

{{ui:Automatisch}} is hoe CadCraft start: het let op hoe lang beelden duren terwijl u de aanwijzer beweegt, en zet deze optie zelf aan wanneer ze enkele seconden traag blijven. Het meldt dit één keer. {{ui:Uit}} houdt het getekende kruisdraad, wat de snelheid ook is.

## Als het nog traag is

- Controleer of hardwareversnelling aan staat in uw browser: open `chrome://gpu` (of `edge://gpu`) in een nieuw tabblad. Als de eerste regels "Software only" of "Disabled" tonen, tekent de browser zonder de grafische kaart. Een update van het stuurprogramma van de grafische kaart helpt vaak.
- Sluit andere zware tabbladen en programma's af, en probeer een kleiner browservenster.
- Meld het via {{ui:Help}}, {{ui:Een probleem melden}}: vermeld of u de browser of CadCraft Studio gebruikt, de versie ervan, en wat de gpu-pagina zegt.
