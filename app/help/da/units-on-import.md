---
title: Enheder ved import: en fil angiver sine enheder, eller du bliver spurgt først
summary: Når en fil, du henter ind i en tegning, angiver sine enheder, konverterer CadCraft den og siger det. Når den ikke gør, spørger CadCraft, før noget placeres, og husker dit svar for den fil.
keywords: enheder, import, indsæt, xref, vedhæft, XATTACH, INSERT, OBJ, DWG, DXF, punktsky, biblioteksemne, millimeter, meter, tommer, fod, skala, forkert størrelse, for stor, for lille, 1000 gange, spørg, husket, INSUNITS
from: 558f1293
---

## Hvad du gør

Hent en fil ind i en tegning, og sørg for, at den kommer ind i den rigtige størrelse.

## Trin

1. Hent filen ind som sædvanligt: `INSERT` › Fil, `XATTACH`, `POINTCLOUDATTACH`, eller {{ui:Filer}} i bibliotekspanelet.
2. Hvis filen angiver sine enheder, spørges der ikke. Kommandolinjen siger, hvilke enheder filen angiver, og skalaen der bruges, når de afviger fra tegningens.
3. Hvis den ikke gør, spørger en dialog **Enheder for** filen. Vælg, hvad én enhed i filen er, og klik {{ui:Brug disse enheder}}. Intet placeres, før du svarer.
4. {{ui:Annuller}} (eller {{key:Esc}}) henter intet ind.

## Hvilke filer angiver deres enheder

- **DWG og DXF**: tegningens indsætningsenheder (`$INSUNITS`). En fil uden dem spørges der om.
- **Punktskyer**: LAS og LAZ med et koordinatsystem, E57, PTX og PLY angiver deres. Andre spørges der om.
- **OBJ**: angiver aldrig enheder. Du bliver spurgt.
- **glTF og GLB**: meter, efter formatets egen regel.
- **Billeder**: har ingen størrelse i sig selv. `IMAGEATTACH` spørger efter bredden og tilbyder den bredde, du gav den fil før.
- **Scanninger**: en scanning, der angiver sin tæthed (punkter pr. tomme), kommer ind i sin rigtige størrelse i tegningens enheder. `SCANATTACH` spørger stadig efter bredden.
- **Add-on'et Punktskyer**: spørger, når du bygger en sky, hvis filen ikke angiver nogen enhed, og mærker skyens tal med den enhed, den bærer.

## Godt at vide

- Åbner du en DWG eller DXF som sin egen tegning, spørges der ikke. Kommandolinjen siger, hvilke enheder filen angiver, eller at den ikke angiver nogen. Egenskaber angiver en tegnings enheder.
- Når denne tegning heller ikke har enheder, kan en fil ikke konverteres. Den placeres tal for tal, og kommandolinjen siger det.
- Svaret huskes for den fil på denne computer, i alle CadCraft-apps. Næste gang den hentes ind, spørges der ikke, og kommandolinjen siger, at de huskede enheder blev brugt.
- For at blive spurgt igen: kommandopaletten ({{key:Mod+K}}) › **Spørg igen om enheder for importerede filer**.
