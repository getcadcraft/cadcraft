---
title: Enheter vid import: en fil anger sina enheter, eller så frågas du först
summary: När en fil du hämtar in i en ritning anger sina enheter, omvandlar CadCraft den och säger det. När den inte gör det frågar CadCraft innan något placeras, och minns ditt svar för den filen.
keywords: enheter, import, infoga, externreferens, bifoga, XATTACH, INSERT, OBJ, DWG, DXF, punktmoln, biblioteksobjekt, millimeter, meter, tum, fot, skala, fel storlek, för stor, för liten, 1000 gånger, fråga, kom ihåg, INSUNITS
from: 558f1293
---

## Vad du gör

Hämta in en fil i en ritning och se till att den kommer in i rätt storlek.

## Steg

1. Hämta in filen som vanligt: `INSERT` › Fil, `XATTACH`, `POINTCLOUDATTACH`, eller {{ui:Filer}} i panelen Bibliotek.
2. Om filen anger sina enheter frågas ingenting. Kommandoraden säger vilka enheter filen anger, och skalan som används när de skiljer sig från ritningens.
3. Om den inte gör det frågar en dialogruta efter **Enheter för** filen. Välj vad en enhet i filen är och klicka på {{ui:Använd dessa enheter}}. Inget placeras innan du svarat.
4. {{ui:Avbryt}} (eller {{key:Esc}}) hämtar in ingenting.

## Vilka filer anger sina enheter

- **DWG och DXF**: ritningens infogningsenheter (`$INSUNITS`). En fil utan dem frågas om.
- **Punktmoln**: LAS och LAZ med ett koordinatsystem, E57, PTX och PLY anger sina. Andra frågas om.
- **OBJ**: anger aldrig enheter. Du frågas.
- **glTF och GLB**: meter, enligt formatets egen regel.
- **Bilder**: har ingen egen storlek. `IMAGEATTACH` frågar efter bredden och erbjuder bredden du angav för den filen tidigare.
- **Skanningar**: en skanning som anger sin densitet (punkter per tum) kommer in i sin sanna storlek i ritningens enheter. `SCANATTACH` frågar fortfarande efter bredden.
- **Tillägget Punktmoln**: frågar när du bygger ett moln vars fil inte anger någon enhet, och märker molnets siffror med den enhet det bär.

## Bra att veta

- Att öppna en DWG eller DXF som egen ritning frågar ingenting. Kommandoraden säger vilka enheter filen anger, eller att den inte anger några. Egenskaper ställer in en ritnings enheter.
- När den här ritningen inte heller har några enheter kan en fil inte omvandlas. Den placeras siffra för siffra, och kommandoraden säger det.
- Svaret minns för den filen på den här datorn, i varje CadCraft-app. Nästa gång den kommer in frågas du inte, och kommandoraden säger att de sparade enheterna användes.
- För att bli frågad igen: kommandopaletten ({{key:Mod+K}}) › **Fråga igen efter enheterna för importerade filer**.
