---
title: Dynamiska block
summary: Vad CadCraft gör med dynamiska block i en DWG: de behåller sina riktiga namn, visar det tillstånd de sparades i, byter synlighetstillstånd, visar sina andra värden och förblir dynamiska när de sparas.
keywords: dynamiskt block, dynamiska block, synlighet, synlighetstillstånd, vänd, töj, uppslagning, parametrar, anpassat, blockegenskaper, *u-block, dynamisk
from: dea2ee7c
---

## Vad som fungerar

En DWG med dynamiska block öppnas med dem fungerande så här långt:

- **Deras riktiga namn.** Ett dynamiskt block listas i panelen {{ui:Block}} under sitt eget namn ("Receptacle", "Sink"), inte som ett namnlöst `*U`-block.
- **Tillståndet de sparades i.** Varje referens visar exakt det andra programmet visade: det synlighetstillstånd den var satt till, sträckt eller vänd som den sparades.
- **Byta synlighetstillstånd.** Markera en referens (eller flera av samma block), öppna {{ui:Egenskaper}} och välj ett annat tillstånd i avsnittet {{ui:Anpassat}} från listan {{ui:Synlighet}}. Referensen visar det tillståndet direkt, och dess attribut också: de som tillståndet döljer försvinner, de som det visar dyker upp med sina värden. En referens behåller varje värde, så ingenting kommer tillbaka tomt; {{ui:Egenskaper}} listar de dolda, märkta "dold". {{key:Mod+Z}} återställer det gamla tillståndet i ett steg.
- **Handtag.** Ett markerat dynamiskt block visar sina egna handtag där dess parametrar finns: en liten triangel för synlighetstillståndet (klicka för att se listan över tillstånd), pilar i ändarna av ett avstånd, en dubbelpil för en vändning. Endast synlighetshandtaget fungerar idag; de andra säger det i statusfältet.
- **De andra värdena, skrivskyddade.** Under synlighetslistan visar {{ui:Anpassat}} även blockets avstånd, justeringsvinklar, vändningstillstånd och punkter så som ritningen har dem.
- **Redigera synlighetstillstånd.** Öppna blocket med {{cmd:BEDIT}}: redigeraren visar ett tillstånd, namngivet i listen ovanför ritningen (välj ett annat där). Skriv {{cmd:BVSTATE}} för att byta, lägga till (dölj allt, visa allt, eller behåll det som visas), byta namn på eller ta bort ett tillstånd; {{cmd:BVHIDE}} döljer markerade objekt i det visade tillståndet; {{cmd:BVSHOW}} visar de dolda blekta så att du kan klicka på dem du vill få tillbaka. Spara blocket: referenser satta till ett omdöpt tillstånd behåller det under sitt nya namn, och de som är satta till ett borttaget tillstånd visar det första tillståndet.
- **Förblir dynamiska.** Sparad som DWG i den version ritningen kom in i, förblir blocken dynamiska, med det tillstånd du valt: det andra programmet öppnar dem som samma dynamiska block. Synlighetstillstånd du redigerat sparas också: deras nya namn, de tillstånd du lagt till och vad vart och ett visar.

## Vad som bara kan läsas, eller inte finns än

| Inte här ännu | I stället, idag |
|---|---|
| Ändra avstånd, vinklar eller vändningar (töj-, flytta- och vändåtgärder) | De visas skrivskyddade i {{ui:Anpassat}}; redigera dem i programmet som skapade blocket. |
| Uppslagnings-, XY-, rotations- och polära parametrar | Läses inte än: referensen visas som den sparades. |
| Dra i avstånds-, vänd- och punkthandtag | De visar var parametrarna finns; synlighetshandtaget och listan {{ui:Synlighet}} i Egenskaper byter tillstånd. |
| Skapa dynamiska block av det andra programmets slag (töj, vänd, uppslagning) | Block du gör i CadCraft är vanliga block; {{cmd:BPARAMETER}} säger det. Dina egna parametrar och flera synlighetsparametrar finns i parameterhanteraren (se "Dina egna parametrar och synlighetstillstånd" nedan). |
| Lägga till eller radera objekt i ett block med synlighetstillstånd i blockredigeraren | Blocket sparas då som ett vanligt block (redigeraren säger det när den stängs). |
| Behålla dem dynamiska i en annan DWG-version eller i DXF | De sparas som vanliga block som visar det tillstånd du valt, och sparningen säger det. |

:::note
Att flytta eller ändra objekt i {{cmd:BEDIT}} håller ett block med synlighetstillstånd dynamiskt. Ett block utan tillstånd, eller ett vars objekt lagts till eller raderats i redigeraren, blir ett vanligt block.
:::

## Dina egna parametrar och synlighetstillstånd

Ett block du gör i CadCraft kan bära sina egna parametrar och **flera** synlighetsparametrar, var och en med sina egna tillstånd. Skriv {{cmd:BPARAMS}} (eller `BPM`) för att öppna **parameterhanteraren** för blocket du redigerar i {{cmd:BEDIT}}, för den markerade referensens block, eller för blocket du anger.

- **Parametrar**: ett namn, en typ (tal, längd, vinkel, antal, ja/nej), och ett värde eller en formel över andra parametrar (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Blir}} visar resultatet. En formel som inte fungerar, eller ett värde som inte passar sin typ (ett antal på 1,5), avvisas och hanteraren säger varför; inget annat ändras.
- **Synlighetsparametrar**: {{ui:Lägg till synlighetsparameter}} skapar en med ett första tillstånd. Varje tillstånd kan byta namn, tas bort (det sista stannar) eller få ett "visas när"-nummer. En formel väljer tillståndet utifrån parametrarna (det tillstånd vars nummer stämmer, annars tillståndet på den platsen i listan); utan formel väljer varje referens sitt eget.
- **Lägga objekt i ett tillstånd**: i blockredigeraren markerar du objekten, skriver {{cmd:BPARAMS}} och klickar på {{ui:Lägg de markerade objekten här}} på tillståndet. Objekt som ingen synlighetsparameter listar visas alltid.
- **Den här referensen**: startad på en markerad referens visar hanteraren även den referensens egna värden och tillstånd.

Utanför blockredigeraren är varje ändring ett ångra-steg. I blockredigeraren är ändringarna redigerarens: {{ui:Spara block}} behåller dem. `-BPARAMS` frågar samma sak på kommandoraden.

**I filen.** DWG och DXF behåller parametrarna, vilka objekt som finns i vilket tillstånd, och varje referens egna värden, i CadCrafts egna poster; öppnar du filen igen i CadCraft är allt tillbaka. Ett annat program ser varje referens som blocket med alla dess objekt, eftersom en DWG bara håller en synlighetsparameter per block av sitt eget slag. En referens som ett annat program flyttat, eller ett block vars objekt det ändrat, kommer tillbaka utan de delar som inte längre stämmer (inget gissas).
