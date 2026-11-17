---
title: Blockattribut
summary: Se och ändra de värden en blockreferens bär, till exempel ett artikelnummer eller en tillverkare, och behåll dem när du sparar en kopia.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, titelblock, redigera på plats, attributredigerare, attdef, definiera attribut, bedit, blockredigerare, bclose, attribut, attributes, attrib, tagg, artikelnummer, värde, osynlig, konstant, block, egenskaper, lista, utrustningsmärkning
from: 34d307c7
---

## Vad attribut är

Ett attribut är ett namngivet värde som följer med en blockreferens: en utrustningsmärknings artikelnummer, ett rums namn, en dörrs brandklass. Blockets definition anger vilka attribut det har. Varje attribut har en **tagg**, en **frågetext**, ett **standardvärde** och en plats, storlek och vinkel för sin text. Varje referens till blocket bär sina egna värden.

Vissa attribut är **osynliga**: de innehåller data, till exempel en tillverkare eller ett modellnummer, men ritas aldrig. Vissa är **konstanta**: samma för varje referens, fastställda av blocket.

## Var attribut kommer ifrån

- Block i DWG- och DXF-filer du öppnar behåller sina attribut, med varje referens värden.
- Block du hämtar med {{cmd:INSERT}} och alternativet {{ui:Fil}} behåller sina. Se [Infoga från fil eller biblioteket](topic:insert-from-file-and-library).
- Biblioteksobjekt kommer in som block med attribut: ett synligt artikelnummer och objektets data, osynliga.
- Block du gör själv: definiera attribut med {{cmd:ATTDEF}} först (nedan), markera dem sedan tillsammans med de andra objekten när du skapar blocket.

## Definiera attribut för egna block

1. Rita blockets linjer, till exempel en rumsmärkning.
2. Välj {{ui:Block}} › {{ui:Mer}} › {{ui:Definiera attribut}}, eller skriv `ATT` och tryck på {{key:Enter}}.
3. Historiken visar lägena (`Invisible=No Constant=No Preset=No`). Skriv `I`, `C` eller `P` för att växla ett läge, och tryck på {{key:Enter}} när de är rätt. Osynliga värden behålls men ritas inte. Ett konstant värde är detsamma i varje referens. Ett förinställt värde frågas inte efter när du infogar blocket.
4. Skriv taggen (till exempel `ROOM_NO`: versaler, inga mellanslag), frågetexten (`Rumsnummer`) och ett standardvärde (`101`).
5. Klicka där värdet ska stå, och ange höjd och rotation. Taggen visas på ritningen.
6. Gör blocket med {{cmd:BLOCK}} och markera linjerna och attributdefinitionerna tillsammans. Referensen som ersätter dem får standardvärdena. Varje ny {{cmd:INSERT}} frågar efter värdena.

En markerad attributdefinition visar {{ui:Tagg}}, {{ui:Frågetext}}, {{ui:Standard}} och lägena i {{ui:Egenskaper}}.

## Ändra ett block: blockredigeraren

{{ui:Block}} › {{ui:Mer}} › {{ui:Redigera block}} ({{cmd:BEDIT}}, `BE`) öppnar ett block för sig självt: skriv dess namn (eller markera en referens först). Ett fält överst säger vilket block du redigerar. Rita, radera och ändra dess objekt med vanliga kommandon, och lägg till eller ändra attributdefinitioner. Klicka sedan på {{ui:Spara block}} (eller skriv {{cmd:BCLOSE}} och `S`): varje referens visar ändringen, och ett {{key:Mod+Z}} ångrar allt. {{ui:Förkasta ändringar}} ({{cmd:BCLOSE}}, `D`) lämnar blocket som det var.

När du lade till, tog bort eller ändrade attributdefinitioner, uppdaterar sparandet också varje referens: värden du skrivit behålls, ett nytt attribut får sitt standardvärde, ett borttaget försvinner, och varje attribut går tillbaka dit definitionen placerar det. Historiken säger hur många referenser som uppdaterades.

## Redigera ett titelblock där det står (REFEDIT)

Ett titelblock på ett blad sitter ofta inuti ett block. För att ändra dess linjer eller texter utan att lämna bladet:

1. Markera titelblocket, välj sedan {{ui:Block}} › {{ui:Mer}} › {{ui:Redigera på plats}} (eller skriv {{cmd:REFEDIT}}).
2. Dess innehåll blir vanliga objekt där de står. Allt annat tonas ned och kan inte ändras.
3. Ändra, radera eller rita: nya objekt blir en del av blocket.
4. Klicka på {{ui:Spara blocket}} i fältet överst (eller skriv {{cmd:REFCLOSE}} och `S`). Varje referens visar ändringen, och ett {{key:Mod+Z}} ångrar hela redigeringen. {{ui:Förkasta}} lämnar blocket som det var.

En länkad ritning, ett dynamiskt block eller en referens som skalats olika i sidled och höjd kan inte redigeras på plats. Använd {{cmd:BEDIT}} i stället, eller öppna den länkade ritningen.

:::note
Spara eller förkasta i blockredigeraren innan du sparar ritningen. En fil som sparats medan redigeraren är öppen har blocket som det var före ändringen.
:::

## Fyll i värdena när du placerar ett block

1. Skriv `I` och tryck på {{key:Enter}}, skriv blockets namn och tryck på {{key:Enter}}.
2. Klicka där blocket ska ligga.
3. CadCraft frågar efter varje värde, till exempel `Enter Item number (ITEM) <>`. Skriv värdet och tryck på {{key:Enter}}, eller tryck bara på {{key:Enter}} för att behålla standardvärdet inom vinkelparenteserna.

Värden som blocket markerar som förinställda, och konstanta värden, frågas inte efter. De får sina standardvärden.

## Se och ändra värdena

1. Klicka på en blockreferens.
2. I den högra panelen, under {{ui:Attribut}}, har varje tagg sitt värde. Osynliga värden visar `hidden`.
3. Klicka på ett värde, skriv det nya och tryck på {{key:Enter}}.

Ritningen visar det nya värdet direkt. Varje ändring är ett steg: {{key:Mod+Z}} ångrar den.

**Attributredigeraren.** Dubbelklicka på en referens med attribut (eller använd {{cmd:EATTEDIT}}). Dialogrutan {{ui:Redigera attribut}} listar varje tagg med sin frågetext och sitt värde. Skriv nya värden. Klicka på en rad för att ändra attributets {{ui:Höjd}}, {{ui:Rotation}}, {{ui:Breddfaktor}}, {{ui:Justera}}, {{ui:Lager}}, {{ui:Färg}} och {{ui:Osynlig}}, men bara för den här referensen. {{ui:Verkställ}} håller dialogrutan öppen. {{ui:OK}} verkställer och stänger den. Varje {{ui:Verkställ}} eller {{ui:OK}} är ett ångra-steg.

**På kommandoraden** frågar {{cmd:ATTEDIT}} efter varje värde i tur och ordning. Skriv ett nytt, eller tryck på {{key:Enter}} för att behålla det.

## Ändra attributdefinitionerna (BATTMAN, ATTSYNC)

{{ui:Block}} › {{ui:Mer}} › {{ui:Attributhanterare}} ({{cmd:BATTMAN}}) listar ett blocks attribut. Ändra en tagg, frågetext eller standard, kryssa i {{ui:Osynlig}}, {{ui:Konstant}} eller {{ui:Förinställd}}, och flytta dem upp eller ned (i den ordning värdena frågas efter). Med {{ui:Uppdatera referenserna (värden behålls)}} ikryssat för {{ui:Verkställ}} uppdateras också varje referens. En omdöpt tagg behåller sina värden. Varje {{ui:Verkställ}} är ett ångra-steg.

{{cmd:ATTSYNC}} för referenserna i takt med deras blocks definitioner för hand: `S` väljer en referens, `N` namnger ett block och `A` gör alla block. Värden behålls.

Värdena i ett biblioteksobjekts egna fält (dess id, version, licens och källangivelse) visas men kan inte ändras, så att kontroll av uppdateringar fortsätter att fungera. Dess artikelnummer och antal är dina att ändra.

## Lista dem

Markera referenser och skriv `LI` (för {{cmd:LIST}}). Historiken visar varje attribut som `TAG = värde`, med `(osynlig)` eller `(konstant)` där det gäller.

## Flytta, vrida och spränga

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} och {{cmd:MIRROR}} behåller värdena. Texten flyttas med blocket och förblir läsbar.
- {{cmd:EXPLODE}} gör de synliga attributen till vanlig text med sina värden. De osynliga försvinner.

## Spara

En sparad DWG och en sparad DXF behåller båda varje attribut: varje blocks definitioner (även de osynliga, konstanta och förinställda) och varje referens värden. Andra CAD-program läser dem som vanliga blockattribut.

I en DXF R12 kapas ett värde som är längre än 255 tecken till 255, och historiken säger det.

## Vanliga misstag

- **Ett värde visas inte på ritningen.** Det är osynligt, eller så är det tomt. Osynliga värden visas fortfarande i den högra panelen.
- **Värdet jag skrev hamnade på kommandoraden.** Klicka först i värdefältet i den högra panelen.
