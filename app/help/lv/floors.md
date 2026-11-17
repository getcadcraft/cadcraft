---
title: Stāvu sakraušana vienā rasējumā
summary: Zīmējiet pirmo stāvu virs pirmā stāva tajās pašās koordinātās un izslēdziet katru stāvu, bez ārējām atsaucēm (Xref).
keywords: stāvs, stāvi, FLOORS, FLR, FLOOR, FLOORLAYERS, stāvs, līmenis, sakraut, projektēšanas slānis, modeļa telpa, pamatslānis, xref
from: 7440fc87
---

Stāvi ļauj sakraut plānus vienā modeļa telpā. Katram stāvam ir savi objekti, un slāņi turpina darboties visos. Siena uz `P-Walls` var būt jebkurā stāvā.

## Sākt

Ierakstiet `FLOORS` (`FLR`) vai izvēlieties {{ui:Floors…}} grupas {{ui:View}} izvēlnē {{ui:More}}, tad izvēlieties {{ui:Start with floors}}. Viss, ko esat zīmējis līdz šim, paliek uz pirmā stāva.

## Zīmēt uz stāva

Izvēlieties stāvu ar apaļo pogu panelī. Jauni objekti tiek novietoti uz tā.

Citi rādītie stāvi tiek rādīti izbalināti zem tā. Uz tiem var piesaistīties, tāpēc pirmais stāvs var sakrist ar pirmo stāvu, bet tos nevar mainīt, kamēr nepadarāt tos par aktīvo stāvu. Acs ikona izslēdz stāvu. Sienas savienojas tikai ar sienām savā stāvā.

Lai sāktu stāvu no zemākā, izvēlieties to, ko vēlaties, izvēlieties stāvu panelī un nospiediet {{ui:Copy there}}.

## Stāvi uz lapām

Izvēlieties skatlogu uz lapas un izvēlieties tā stāvu sadaļā {{ui:Floor shown}} Properties. Skatlogs bez izvēlēta stāva rāda visus ieslēgtos stāvus.

## Failu sūtīšana citam

Citas CAD programmas nezina par stāviem, tāpēc tās rāda visus stāvus kopā. Pirms faila sūtīšanas panelī izvēlieties {{ui:Turn floors into layers}} vai ierakstiet `FLOORLAYERS`. Katrs objekts tiek pārvietots uz slāni, kas nosaukts pēc tā stāva, piemēram, `Ground floor-P-Walls`, lai katru stāvu joprojām varētu izslēgt. Atsaukšana to atjauno. CadCraft stāvus saglabā DWG vai DXF failā, ko tā saglabā.
