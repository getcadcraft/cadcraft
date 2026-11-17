---
title: Dynamiska block
summary: Vad CadCraft gör med dynamiska block i en DWG: de behåller sina riktiga namn, visar det läge de sparades i, byter synlighetstillstånd, visar sina övriga värden och förblir dynamiska när de sparas.
keywords: dynamiskt block, dynamiska block, synlighet, synlighetstillstånd, vänd, töj, uppslag, parametrar, anpassat, blockegenskaper, *U-block, dynamisk
from: 26b6aa80
---

## Vad som fungerar

En DWG som gjorts med dynamiska block öppnas med att de fungerar så här långt:

- **Deras riktiga namn.** Ett dynamiskt block listas i panelen {{ui:Block}} under sitt eget namn ("Receptacle", "Sink"), inte som ett namnlöst `*U`-block.
- **Det läge de sparades i.** Varje referens visar exakt det som det andra programmet visade: det synlighetstillstånd den var satt till, sträckt eller vänd som den sparades.
- **Byte av synlighetstillstånd.** Markera en referens (eller flera av samma block), öppna {{ui:Egenskaper}} och välj ett annat tillstånd i listan {{ui:Synlighet}} i avsnittet {{ui:Anpassat}}. Referensen visar det tillståndet direkt, och dess attribut också: de som tillståndet döljer försvinner, och de som det visar dyker upp med sina värden. En referens behåller varje värde, så ingenting kommer tillbaka tomt. {{ui:Egenskaper}} listar de dolda, markerade "dold". {{key:Mod+Z}} sätter tillbaka det gamla tillståndet i ett steg.
- **Handtag.** Ett markerat dynamiskt block visar sina egna handtag där dess parametrar finns: en liten triangel för synlighetstillståndet (klicka på den för listan över tillstånd), pilar i ändarna av ett avstånd och en dubbelpil för en vändning. Bara synlighetshandtaget verkar i dag; de övriga säger det i statusfältet.
- **De övriga värdena, skrivskyddade.** Under synlighetslistan visar {{ui:Anpassat}} också blockets avstånd, justeringsvinklar, vändtillstånd och punkter så som ritningen har dem.
- **Redigera synlighetstillstånd.** Öppna blocket med {{cmd:BEDIT}}: redigeraren visar ett tillstånd, med namnet i fältet ovanför ritningen (välj ett annat där). Skriv {{cmd:BVSTATE}} för att byta, lägga till (dölj allt, visa allt eller behåll det som visas), byta namn på eller ta bort ett tillstånd. {{cmd:BVHIDE}} döljer markerade objekt i det tillstånd som visas. {{cmd:BVSHOW}} visar de dolda tonade, så att du kan klicka på dem du vill få tillbaka. Spara blocket: referenser som är satta till ett omdöpt tillstånd behåller det under sitt nya namn, och de som är satta till ett borttaget tillstånd visar det första tillståndet.
- **Förblir dynamiska.** Sparat som DWG i den version ritningen kom in i förblir blocken dynamiska, med det tillstånd du valde. Det andra programmet öppnar dem som samma dynamiska block. Synlighetstillstånd du redigerat sparas också: deras nya namn, de tillstånd du lagt till och vad vart och ett visar.

## Det som är skrivskyddat eller inte finns ännu

| Finns inte ännu | I stället, idag |
|---|---|
| Ändring av avstånd, vinklar eller vändningar (sträck, flytta, vänd) | De visas skrivskyddade i {{ui:Anpassat}}. Redigera i programmet som gjorde blocket. |
| Uppslag-, XY-, rotations- och polära parametrar | Läses ännu inte: referensen visas som den sparades. |
| Att dra i avstånds-, vänd- och punkthandtagen | De visar var parametrarna finns. Synlighetshandtaget och listan {{ui:Synlighet}} i Egenskaper byter tillstånd. |
| Att skapa dynamiska block (lägga till parametrar, eller synlighetstillstånd till ett block som saknar dem) | Block du gör i CadCraft är vanliga block. {{cmd:BPARAMETER}} säger det. |
| Att lägga till eller radera objekt i ett block med synlighetstillstånd i blockredigeraren | Blocket sparas då som ett vanligt block. Redigeraren säger det när den stängs. |
| Att behålla dem dynamiska i en annan DWG-version eller i DXF | De sparas som vanliga block som visar det tillstånd du valde, och sparandet säger det. |

:::note
Att flytta eller ändra objekt i {{cmd:BEDIT}} behåller ett block med synlighetstillstånd dynamiskt. Ett block utan tillstånd, eller ett vars objekt lagts till eller raderats i redigeraren, blir ett vanligt block.
:::
