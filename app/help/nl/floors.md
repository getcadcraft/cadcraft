---
title: Vloeren stapelen in één tekening
summary: Teken de eerste verdieping over de begane grond op dezelfde coördinaten en zet elke vloer uit, zonder xrefs.
keywords: vloer, vloeren, FLOORS, FLR, FLOOR, FLOORLAYERS, verdieping, niveau, stapelen, ontwerplaag, modelruimte, onderlegger, xref
from: 7440fc87
---

Met vloeren kunt u plattegronden in één modelruimte stapelen. Elke vloer heeft zijn eigen objecten, en lagen werken over alle vloeren heen. Een wand op `P-Walls` kan op elke vloer staan.

## Starten

Typ `FLOORS` (`FLR`), of kies {{ui:Vloeren…}} in het menu {{ui:Meer}} van de groep {{ui:Weergave}}, en kies daarna {{ui:Begin met vloeren}}. Wat u tot nu toe hebt getekend, komt op de begane grond.

## Op een vloer tekenen

Kies de vloer met de ronde knop in het paneel. Nieuwe objecten komen erop.

Andere vloeren die aan staan, worden eronder vervaagd getoond. U kunt erop snappen, zodat de eerste vloer op één lijn ligt met de begane grond, maar u kunt ze niet wijzigen tot u ze de actieve vloer maakt. Het oogje schakelt een vloer uit. Wanden sluiten alleen aan op wanden op dezelfde vloer.

Om een vloer te beginnen vanaf de vloer eronder, selecteert u wat u wilt, kiest u de vloer in het paneel en drukt u op {{ui:Hier kopiëren}}.

## Vloeren op bladen zetten

Selecteer een viewport op een blad en kies de vloer onder {{ui:Getoonde vloer}} in Eigenschappen. Een viewport zonder gekozen vloer toont alle vloeren die aan staan.

## Het bestand naar iemand anders sturen

Andere CAD-programma's kennen geen vloeren en tonen daarom alle vloeren samen. Kies voordat u een bestand verstuurt {{ui:Vloeren omzetten in lagen}} in het paneel, of typ `FLOORLAYERS`. Elk object gaat naar een laag die is genoemd naar zijn vloer, zoals `Ground floor-P-Walls`, zodat u elke vloer nog steeds kunt uitzetten. Ongedaan maken haalt het terug. CadCraft bewaart vloeren in het DWG- of DXF-bestand dat het opslaat.
