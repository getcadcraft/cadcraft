---
title: Ange måttstorlekar, decimaler och skala
summary: Välj texthöjd, pilstorlek, decimaler och total skala för nya mått, ändra befintliga, och förstå hur måttstilar fungerar i CadCraft.
keywords: måttstil, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, total skala, decimaler, pilstorlek, noteringsskala, dimtextunit, enheter i texten, mm, cm, m, km, millimeter, meter, dimlfac, dimpost
from: 8ec82a07
---

## Vad du ska lära dig

Hur stor måttext och måttpilar är, hur du ställer in dem för en ritning som skrivs ut i 1:50 eller 1:100, och hur du ändrar mått du redan gjort.

## Så fungerar måttstorlekar

Varje mått bär sin egen uppsättning storlekar: texthöjd, pilstorlek, decimaler, mellanrummet runt texten, hur långt hjälplinjerna går förbi måttlinjen och hur långt från objektet de startar. Standardvärdena ligger nära den vanliga ISO-stilen:

| Inställning | Standard | Kommando |
|---|---|---|
| Texthöjd | 2.5 | {{cmd:DIMTXT}} |
| Pilstorlek | 2.5 | {{cmd:DIMASZ}} |
| Decimaler | 2 (efterföljande nollor tas bort) | {{cmd:DIMDEC}} |
| Mellanrum runt texten | 0.625 | {{cmd:DIMGAP}} |
| Hjälplinje förbi måttlinjen | 1.25 | {{cmd:DIMEXE}} |
| Avstånd från objektet | 0.625 | {{cmd:DIMEXO}} |
| Total skala | 1 | {{cmd:DIMSCALE}} |

Varje storlek multipliceras med **total skala**. Ange storlekarna som du vill ha dem på papperet (2.5 mm text), och ange total skala till utskriftsskalan (50 för 1:50). Texten blir då 2.5 × 50 = 125 ritningsenheter hög, vilket skrivs ut med 2.5 mm.

:::note
Namngivna måttstilar hanteras med {{cmd:DIMSTYLE}}: se avsnittet nedan. Varje mått behåller också de inställningar det gjordes med, så att du fortfarande kan ändra ett enskilt mått i {{ui:Egenskaper}}.
:::

## Ange storlekarna för nya mått

Båda sätten nedan ändrar bara mått du gör därefter.

### I panelen Aktuella inställningar

1. Tryck på {{key:Esc}} så att inget är markerat. På fliken {{ui:Modell}} står det {{ui:Aktuella inställningar}} i den högra panelen.
2. Rulla ned panelen till {{ui:Nya mått}}, förbi raderna för lager, färg, enheter och {{ui:Lager 0}} (på en liten skärm börjar den under den nedre kanten). Klicka i {{ui:Total skala}}, skriv `50` och tryck på {{key:Enter}}.
3. Ange {{ui:Texthöjd}}, {{ui:Pilstorlek}} och {{ui:Decimaler}} på samma sätt om du vill ha andra värden.

Statusfältet bekräftar varje värde, till exempel ”Total skala för nya mått: 50”.

### På kommandoraden

1. Skriv `DIMSCALE` och tryck på {{key:Enter}}.
2. Vid `Ange nytt värde för DIMSCALE <1>`, skriv `50` och tryck på {{key:Enter}}.

Historiken bekräftar ”DIMSCALE = 50. Nya mått använder det; markera befintliga för att ändra deras.” {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} och {{cmd:DIMEXO}} fungerar på samma sätt. Tryck på {{key:Enter}} vid frågan för att behålla det aktuella värdet.

### Fot och tum i mått

Nya mått använder ritningens längdformat: ange det med {{ui:Längdformat}} i {{ui:Aktuella inställningar}} eller med {{cmd:UNITS}} (se [Fot och tum](topic:units-papers-scales#feet-and-inches-and-fractions)), så visar nästa mått till exempel `12'-6 1/2"`. {{cmd:DIMLUNIT}} ställer bara in måttens format (2 decimaler, 3 teknisk, 4 arkitekt, 5 bråk). För ett mått du redan gjort, markera det och välj {{ui:Format}} i {{ui:Egenskaper}}; med ett bråkformat tar rutan {{ui:Bråk}} två-potensen (4 = 1/16).

## Mått i mm, cm, m eller km

Ett mått mäter i ritningsenheter. Det kan skriva den längden i millimeter, centimeter, meter eller kilometer i stället, med enheten efter talet: en 1250 mm vägg visar `1250 mm`, `125 cm`, `1.25 m` eller `0.00125 km`.

1. Ange ritningens {{ui:Enheter}} i {{ui:Aktuella inställningar}} först (se [Enheter, pappersstorlekar och skalor](topic:units-papers-scales#drawing-units)), så att CadCraft vet vad en ritningsenhet är. En ritning utan enheter läses som millimeter, och {{cmd:DIMTEXTUNIT}} säger det.
2. För nya mått: tryck på {{key:Esc}} så att inget är markerat, och under {{ui:Nya mått}} väljer du {{ui:Enheter i texten}}: {{ui:Ritningsenheter}}, `mm`, `cm`, `m` eller `km`.
3. För mått du redan gjort: markera dem, och i {{ui:Egenskaper}} › {{ui:Primära enheter}} väljer du {{ui:Enheter i texten}}.

Eller skriv {{cmd:DIMTEXTUNIT}} (`DTU`) och svara `D`, `MM`, `CM`, `M` eller `KM`: med mått markerade ändrar det dem (ett steg som går att ångra), med inget markerat ställer det in nya mått.

{{ui:Decimaler}} ({{cmd:DIMDEC}}) anger fortfarande hur många decimaler som visas: med meter och 3 decimaler visar 1234 mm `1.234 m`. Texten skrivs som ett decimaltal. På ett blad mäter mått i bladets pappersenhet (millimeter eller tum).

En sparad DWG eller DXF behåller valet som måttets mätskala (DIMLFAC) och ett suffix (DIMPOST, ` m`), så att andra program visar samma text. Om du ändrar ritningens {{ui:Enheter}} senare, anpassas mått skrivna i mm, cm, m eller km om, så att de fortsätter säga rätt längd. {{ui:Angivet för hand (skala eller suffix)}} betyder att måttets {{ui:Mätskala}} eller suffix angavs på något annat sätt; välj en enhet för att ersätta dem.

## Ändra mått du redan gjort

1. Klicka på ett mått. Den högra panelens rubrik säger {{ui:Mått}}.
2. Inställningarna står i avsnitt; rulla ned panelen för att nå de senare:
   - {{ui:Allmänt}}: {{ui:Måttstil}}
   - {{ui:Geometri}}: {{ui:Sort}} och {{ui:Mätvärde}} (endast läsning)
   - {{ui:Text}}: {{ui:Textersättning}} och {{ui:Texthöjd}}
   - {{ui:Linjer och pilar}}: {{ui:Pilstorlek}}
   - {{ui:Passning}}: {{ui:Total skala}}
   - {{ui:Primära enheter}}: {{ui:Decimaler}}
3. Skriv ett nytt värde och tryck på {{key:Enter}}.

Måttet ritas om direkt. För vinkelmått anger {{ui:Decimaler (°)}} vinkelns decimaler.

:::note
Med flera mått markerade visar panelen de rader de har gemensamt, och ett värde som skiljer sig mellan dem står som {{ui:Varierar}}. Ett värde du skriver ändrar varje markerat mått i ett steg, så ett enda {{key:Mod+Z}} återställer alla.
:::

## Mått från öppnade ritningar

Ett mått från en öppnad DWG eller DXF visas exakt så som det andra programmet ritade det. Dess panel säger ”Visas som programmet som skapade det ritade det. Ändrar du det ritar CadCraft om det i sin egen stil.” Så snart du ändrar ett värde, flyttar ett handtag eller flyttar måttet, ritar CadCraft om det med sina egna pilspetsar och sitt eget teckensnitt, med de storlekar det läste från filen.

Vissa mått kan bara läsas som ritade, inte som redigerbara mått; panelen visar då ”Ritad från” och ett blocknamn, och rutan ”Om filen” räknar dem.

## Vanliga misstag

- **Att ändra DIMSCALE gjorde ingenting på skärmen.** Inställningen gäller nya mått. Markera befintliga och ändra {{ui:Total skala}} i panelen.
- **Decimaler visar färre siffror än inställt.** Efterföljande nollor tas bort: 2 decimaler visar `1250` och `1250.5`, inte `1250.00`.
- **Texten har rätt höjd på papperet i en vyport men fel i en modellutskrift.** Den totala skalan måste matcha skalan du skriver ut i. Utskrift med Anpassa till papper ger en udda skala; välj en standardskala i utskriftsdialogen.
- **Enheter som mm eller m i texten.** Välj {{ui:Enheter i texten}} (se [Mått i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). För ett annat ord efter talet, skriv det i en ersättning: `<> TYP.`.

## Namngivna måttstilar

Skriv `DIMSTYLE` (`D`) för att öppna {{ui:Måttstilshanterare}}. Den listar ritningens stilar, hur många mått som använder varje, och vilken som är aktuell. **Standard** finns alltid.

- {{ui:Gör aktuell}}: nya mått använder den stilens inställningar och bär dess namn.
- {{ui:Ny…}}: en ny stil som börjar som en kopia av en du väljer.
- {{ui:Ändra…}}: samma fält som måttavsnittet i {{ui:Egenskaper}} (linjer och pilar, text, passning, enheter, alternativa enheter, toleranser). Tryck på {{ui:OK}} och stilen ändras, **och varje mått som använder den ändras med den**, inställning för inställning. En inställning du ändrat på ett enskilt mått förblir som den är, om inte stilen ändrade just den inställningen.
- {{ui:Byt namn…}} och {{ui:Ta bort}}: Standard kan inte byta namn eller tas bort, och inte heller den aktuella stilen eller en stil som mått använder.
- {{ui:Jämför…}}: vad som skiljer två stilar åt.
- {{ui:Verkställ på markerade}}: markera mått först; de tar stilens inställningar och dess namn.

`-DIMSTYLE` gör samma sak på kommandoraden: `Restore`, `Save` (de aktuella inställningarna, inklusive det du skrev med {{cmd:DIMTXT}} och de andra, under ett namn), `Delete`, `Apply`, `Compare`, `reName` och `List`.

Stilarna sparas i en DWG eller DXF (dess tabell för måttstilar) och läses från filerna du öppnar. Den *aktuella* stilen sparas inte: en ritning öppnas med Standard som aktuell. Standard behåller sina egna inställningar medan en annan stil är aktuell.

## Ändra måttext och hjälplinjer

{{cmd:DIMEDIT}} (`DED`) arbetar på de mått du markerar: **Home** flyttar tillbaka texten dit stilen placerar den, **New** skriver annan text (`<>` står för mätvärdet), **Rotate** vrider texten, **Oblique** lutar hjälplinjerna för linjära och justerade mått i en vinkel du skriver (tryck på {{key:Enter}} för ingen). {{cmd:DIMTEDIT}} flyttar texten till **Left**, **Right** eller **Center** av måttlinjen, eller vrider den (**Angle**), eller skickar den **Home**. Texten sitter alltid på måttlinjen: den kan inte dras till en fri plats.
