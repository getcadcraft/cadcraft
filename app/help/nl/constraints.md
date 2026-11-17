---
title: Een tekening beperken
summary: Houd lijnen horizontaal, uiteinden samen en maten vast met geometrische en dimensionele beperkingen, en laat de tekening meebewegen wanneer u een maat wijzigt.
keywords: beperking, beperkingen, parametrisch, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, vrijheidsgraden, volledig beperkt
from: f8f21fa4
---

## Wat u gaat maken

Een plaat waarvan u de breedte op één plek wijzigt: de zijden blijven haaks, één hoek blijft op zijn plaats en de hoogte blijft de helft van de breedte.

Beperkingen werken op lijnen, polylijnen, cirkels, bogen en punten op het tabblad {{ui:Model}}. Elke beperking die u toevoegt, is één stap ongedaan maken.

## De omtrek tekenen en beperken

1. Typ `REC` en druk op {{key:Enter}}. Typ `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Typ `AUTOCONSTRAIN` en druk op {{key:Enter}}. Typ `ALL`, {{key:Enter}}, en daarna nogmaals {{key:Enter}}.

   De geschiedenis zegt "4 beperkingen toegepast". Kleine vakjes met **H** en **V** verschijnen naast de zijden: dit zijn de beperkingsbalken.
3. Typ `GCFIX` en druk op {{key:Enter}}. Klik in de buurt van de linkerbenedenhoek. Er verschijnt een vakje met ⊕: die hoek blijft waar hij is.

`AUTOCONSTRAIN` voegt samenvallende beperkingen toe waar uiteinden bijna samenkomen, en horizontale of verticale beperkingen waar lijnen bijna waterpas of loodrecht staan. Typ `S` bij de prompt om te wijzigen hoe dichtbij (in het begin 0.05 tekeneenheden en 1°).

## De maten toevoegen

1. Typ `DCHORIZONTAL` en druk op {{key:Enter}}.
2. Klik in de buurt van de linkerbenedenhoek en daarna in de buurt van de rechterbenedenhoek.
3. Klik onder de rechthoek voor de maatlijn.
4. De prompt toont `Maattekst <d1=100>`. Typ `width=120` en druk op {{key:Enter}}.

   De rechthoek is nu 120 breed, en het label luidt `width=120`.
5. Typ `DCVERTICAL` en druk op {{key:Enter}}, typ `O` en druk op {{key:Enter}}, en klik daarna op de rechterzijde.
6. Klik rechts ervan, typ `width/2` en druk op {{key:Enter}}.

   Hij is 60 hoog. Het label luidt `fx: d1=width/2`: een expressie stuurt de maat aan.

De geschiedenis meldt nu dat de omtrek volledig beperkt is. Om de grootte te wijzigen, wijzigt u `width` (zie [Parameters en vergelijkingen gebruiken](topic:parameters)), of dubbelklikt u op het label `width=120`, typt u een nieuwe waarde en kiest u {{ui:Toepassen}}.

## Beperkte objecten verplaatsen

Verplaatsen, roteren, schalen, grips en het paneel Eigenschappen behouden alle de beperkingen: wat u verplaatst, wordt vastgehouden, en de rest volgt. Wanneer de beperkingen niet kunnen volgen, wordt de bewerking niet uitgevoerd en de geschiedenis zegt waarom, bijvoorbeeld "Niet gedaan: de beperkingen houden dat object op zijn plaats". Een object wissen verwijdert zijn beperkingen mee.

## Beperkte objecten spiegelen en bijsnijden

- {{cmd:MIRROR}} kopieert de beperkingen tussen de objecten die u spiegelt naar de kopieën. Kanten (aan welke kant een raaklijn raakt, aan welke kant een afstand wordt gemeten) worden opnieuw bepaald voor de gespiegelde kopie, en gekopieerde maten krijgen hun eigen namen, zoals bij plakken. Met `Brondobjecten wissen` `Y` blijven de beperkingen op de gespiegelde objecten. De geschiedenis meldt hoeveel er zijn meegekomen.
- {{cmd:TRIM}} houdt de beperkingen van een lijn of boog op wat overblijft: een beperking op een uiteinde gaat naar het stuk dat dat uiteinde nog heeft, een regel over richting ({{ui:Horizontaal}}, {{ui:Verticaal}}, {{ui:Evenwijdig}}, {{ui:Loodrecht}}) geldt voor elk stuk, en een maat tussen de twee buitenste uiteinden blijft die meten. Beperkingen die het weggesneden deel vasthielden, of een lengte die door de snede is veranderd ({{ui:Gelijk}}, de openingshoek van een boog), vervallen. Een bijgesneden cirkel behoudt zijn middelpunt- en radiusbeperkingen. Bijgesneden polylijnen verliezen de hunne.

## De beperkingen

| Opdracht | Houdt vast |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | een lijn of segment waterpas of loodrecht (`2P`: twee punten waterpas of loodrecht) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | twee lijnen evenwijdig, haaks of op één lijn |
| {{cmd:GCCOINCIDENT}} | twee punten samen; `O`: een punt op een lijn, cirkel of boog |
| {{cmd:GCTANGENT}} | een lijn en een cirkel of boog, of twee ervan, die elkaar raken |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | twee cirkels of bogen met één middelpunt; twee lengten of twee stralen gelijk |
| {{cmd:GCSYMMETRIC}} | twee punten, lijnen of cirkels gespiegeld over een lijn |
| {{cmd:GCFIX}} | een punt (klik in de buurt) of een heel object (`O`) op zijn plaats |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | een afstand |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | een radius, een diameter, een hoek tussen twee lijnen of de hoek van een boog |

{{cmd:GEOMCONSTRAINT}} en {{cmd:DIMCONSTRAINT}} vragen welke er bedoeld is; {{ui:Beperken}} en {{ui:Maatvoering}} in de groep {{ui:Parametrisch}} voeren ze uit, en {{ui:Meer}} toont er elk. Waar u klikt, bepaalt het deel: een klik in de buurt van een uiteinde, het midden of een middelpunt neemt dat punt; een klik op een polylijn neemt het segment eronder. Het eerste object blijft staan en het tweede beweegt om erop aan te sluiten.

Een beperking die met andere in strijd is, of niets toevoegt omdat de andere die al impliceren, wordt geweigerd met een melding en er beweegt niets.

## Zien, selecteren en verwijderen

- Klik op een vakje in een beperkingsbalk (of een samenvallend vierkantje, of een maatlabel) om die beperking te selecteren; de geschiedenis noemt haar. Druk op {{key:Delete}} om haar te verwijderen.
- {{cmd:DELCONSTRAINT}} verwijdert elke beperking van de objecten die u selecteert.
- {{cmd:CONSTRAINTBAR}}: `S` toont alle balken, `H` verbergt ze; selecteer eerst objecten om die van hen te tonen of te verbergen. {{ui:Meer}} heeft {{ui:Beperkingsbalken tonen}} en {{ui:Beperkingsbalken verbergen}}.
- {{cmd:DCDISPLAY}} toont of verbergt de dimensionele beperkingen. Ze worden nooit geplot.
- {{cmd:DCCONVERT}} zet maten die op lijnen, cirkels en bogen zijn getekend om in dimensionele beperkingen.

:::note
Als u de parametrische tekenfunctie van AutoCAD hebt gebruikt, zijn de opdrachtnamen en prompts hetzelfde. Beperkingen en parameters worden opgeslagen in DWG- en DXF-bestanden in een vorm die andere programma's negeren; zie [Bestanden](topic:files#constraints-in-files).
:::
