---
title: Stapla våningsplan i en ritning
summary: Rita första våningen över bottenvåningen vid samma koordinater och slå av varje våning, utan externa referenser.
keywords: våningsplan, våningar, FLOORS, FLR, FLOOR, FLOORLAYERS, nivå, stapla, designlager, modellrum, underlägg, xref
from: 7440fc87
---

Våningsplan låter dig stapla planer i ett modellrum. Varje våningsplan har sina egna objekt, och lager fungerar över alla. En vägg på `P-Walls` kan finnas på vilken våning som helst.

## Starta

Skriv `FLOORS` (`FLR`), eller välj {{ui:Våningsplan…}} i menyn {{ui:Mer}} i gruppen {{ui:Vy}}, och välj sedan {{ui:Börja med våningsplan}}. Det du ritat hittills hamnar på bottenvåningen.

## Rita på en våningsplan

Välj våningsplanet med den runda knappen i panelen. Nya objekt hamnar på det.

Andra våningsplan som är på visas tonade under det. Du kan fånga dem, så att första våningen linjerar upp med bottenvåningen, men du kan inte ändra dem förrän du gör dem till den aktiva våningen. Ögat stänger av en våningsplan. Väggar kopplas bara ihop med väggar på sin egen våning.

För att starta en våning från den under markerar du det du vill ha, väljer våningsplanet i panelen och klickar på {{ui:Kopiera dit}}.

## Lägg våningsplan på blad

Markera en vyport på ett blad och välj dess våningsplan under {{ui:Visad våning}} i Egenskaper. En vyport utan vald våning visar alla våningsplan som är på.

## Skicka filen till någon annan

Andra CAD-program känner inte till våningsplan, så de visar alla våningsplan tillsammans. Innan du skickar en fil väljer du {{ui:Gör våningsplan till lager}} i panelen, eller skriver `FLOORLAYERS`. Varje objekt flyttas till ett lager med namn efter sin våning, till exempel `Bottenvåning-P-Walls`, så att du fortfarande kan stänga av varje våning. Ångra tar tillbaka det. CadCraft behåller våningsplanen i den DWG- eller DXF-fil den sparar.
