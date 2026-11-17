---
title: Enheter, pappersstorlekar och skalor
summary: Vad ritningsenheter betyder i CadCraft, pappersstorlekarna för blad och utskrifter, varje standardskala, och hur text- och måttsättningsstorlekar förhåller sig till utskriftsskalan.
keywords: enheter, millimeter, tum, fot, fot och tum, arkitekt, teknisk, bråk, bråkdelar, lunits, längdformat, precision, meter, pappersstorlek, a3, a1, arch d, ansi, tabloid, letter, skala, 1:100, 1/4 tum, arkitektonisk skala, teknisk skala, insunits
from: 8346236a
---

## Ritningsenheter

Du ritar i full storlek, i ritningsenheter. Vad en enhet står för är ritningens **Enheter**-inställning:

1. Tryck på {{key:Esc}} så att inget är markerat, på fliken {{ui:Modell}}.
2. Under {{ui:Aktuella inställningar}}, välj {{ui:Enheter}}: {{ui:Enhetslös}}, {{ui:Millimeter}}, {{ui:Centimeter}}, {{ui:Meter}}, {{ui:Tum}} eller {{ui:Fot}}.

Måttsättningar kan skriva sina längder i millimeter, centimeter, meter eller kilometer oavsett ritningsenhet: se [Måttsättningar i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Att ändra enheter ändrar ingen storlek. Det ändrar hur skalor läses på blad och i utskrifter, och vilka skalor som erbjuds. En ritning som öppnats från en DWG eller DXF behåller enheterna som lagrats i filen; avsnittet {{ui:Ritning}} i vänster panel visar dem.

En {{ui:Enhetslös}} ritning behandlas som om den vore i pappersenheten: millimeter på ISO-papper, tum på amerikanskt papper.

## Fot och tum, och bråk

Hur längder **skrivs och anges** är en separat inställning: längdformatet. Det ändrar ingen geometri, bara hur siffror ser ut och vad du kan skriva.

1. Tryck på {{key:Esc}} så att inget är markerat, på fliken {{ui:Modell}}.
2. Under {{ui:Aktuella inställningar}}, välj {{ui:Längdformat}}: {{ui:Decimal}} (`150.5`), {{ui:Arkitekt}} (`12'-6 1/2"`), {{ui:Teknisk}} (`12'-6.5"`), {{ui:Bråk}} (`150 1/2`) eller {{ui:Vetenskaplig}} (`1.505E+02`).
3. Välj {{ui:Precision}}: decimaler, eller den minsta bråkdelen (1/16 är det vanliga valet för arkitektoniskt).

Eller skriv {{cmd:UNITS}} (`UN`) och svara på dess två frågor.

Med {{ui:Arkitekt}} eller {{ui:Teknisk}} är en ritningsenhet en tum, som i AutoCAD: ange även {{ui:Enheter}} till {{ui:Tum}}. Du kan då skriva längder i fot och tum var som helst en längd efterfrågas, och i rutorna i {{ui:Egenskaper}}:

| Du skriver | Betyder |
|---|---|
| `12'6"` eller `12'-6"` | 12 fot 6 tum (150) |
| `12'6-1/2"` | 12 fot 6½ tum. Använd ett bindestreck före bråket: {{key:Space}} är {{key:Enter}} på kommandoraden. |
| `12'` | 12 fot |
| `6"` eller `6` | 6 tum: ett rent tal är tum |
| `1/2`, `6-1/2` | bråk fungerar i alla format |

Punkter tar samma längder: `@12'6",0` eller `@10'<90`. Vinklar är kvar i grader.

Formatet visas i historiken ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: areor som kvadrattum och kvadratfot), i {{ui:Egenskaper}}, i koordinaterna på statusfältet, och i **nya måttsättningar**. Blad behåller sina pappersenheter (millimeter eller tum) som decimaler.

:::note
Längdformatet sparas i DWG- och DXF-filer, och varje måttsättning behåller sitt eget: en sparad ritning öppnas igen så som du lämnade den.
:::

## Pappersstorlekar

Blad och modellutskrifter använder dessa storlekar, i båda orienteringarna:

| Papper | Storlek | Enhet på bladet |
|---|---|---|
| ISO A4 | 297 × 210 mm | millimeter |
| ISO A3 | 420 × 297 mm | millimeter |
| ISO A2 | 594 × 420 mm | millimeter |
| ISO A1 | 841 × 594 mm | millimeter |
| ISO A0 | 1189 × 841 mm | millimeter |
| Letter | 11 × 8.5 in | tum |
| Legal | 14 × 8.5 in | tum |
| Tabloid / ANSI B | 17 × 11 in | tum |
| ANSI C | 22 × 17 in | tum |
| ANSI D | 34 × 22 in | tum |
| ARCH C | 24 × 18 in | tum |
| ARCH D | 36 × 24 in | tum |
| ARCH E | 48 × 36 in | tum |

Nya blad börjar på ISO A3 för metriska och enhetslösa ritningar, och på Tabloid för ritningar i tum eller fot. Modellutskrifter börjar på ISO A4 eller Letter på samma sätt, och minns sedan ditt senaste val. Blad från öppnade filer behåller sin egen storlek, visad som ”Anpassad” när den inte är en av dessa.

## Skalor

En skala `1:n` betyder att en enhet på papperet visar n av samma enhet i modellen, så 1:100 visar 1 m byggnad som 10 mm papper. CadCraft räknar ut det från ritningsenheterna och pappersenheten.

**Metriska skalor**, erbjudna för alla ritningar: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arkitektoniska skalor**, erbjudna när enheterna är tum eller fot: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Tekniska skalor**, erbjudna när enheterna är tum eller fot: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Egna skalor.** Skriv {{cmd:SCALELISTEDIT}} (eller {{cmd:SCALELIST}}) för att lägga till en egen skala, till exempel 1:75 eller en platsskala 2 papper : 300 ritning. `Lägg till (A)` frågar efter ett namn, sedan pappersenheterna och ritningsenheterna (ett namn som `1:75` erbjuder sina egna tal; tryck på {{key:Enter}} för att använda dem). `Redigera (E)`, `Ta bort (D)`, `Lista` och `Återställ (R)` arbetar med samma lista; `Återställ (R)` går tillbaka till standardlistan. Dina skalor visas efter standardskalorna i listan över vyportskalor i {{ui:Egenskaper}} och i dialogrutan {{ui:Plotta till PDF}}, en vyport i den skalan visas med sitt namn, och de sparas i ritningen (DWG och DXF 2000) som ritningens skallista. En ritning som öppnats från ett annat program tar med sin lista; skalor den har som matchar en standard visas inte två gånger.

När en vyport riktas med {{ui:Visa hela modellen}} eller {{ui:Välj ett fönster på modellen…}} väljer CadCraft den största standardskalan som får plats. {{ui:Anpassa till hela modellen}} sätter i stället en exakt skala, som visas som ett rent förhållande.

## Storlekar på papper och i modellen

Text- och måttsättningsstorlekar anges i enheterna för det utrymme du ritar i.

| Du vill ha på papper | Ritad på ett blad | Ritad i modellen i 1:50 (mm-ritning) | Ritad i modellen i 1/4" = 1'-0" (tumritning) |
|---|---|---|---|
| 2.5 mm text | 2.5 | 125 | — |
| 3/32" text | 0.09375 | — | 4.5 |

För måttsättningar, behåll storlekarna som pappersstorlekar och ställ in den övergripande skalan ({{cmd:DIMSCALE}}) till utskriftsskalan: 50 för 1:50, 48 för 1/4" = 1'-0". Se [Ange måttsättningsstorlekar](topic:dimension-settings).

## Annotera efter skala

Rita modellen i full storlek och låt CadCraft göra beräkningarna ovan åt dig.

1. Markera texten eller måttsättningarna som ska behålla sin storlek på papper. Bocka för {{ui:Annoterande}} i {{ui:Egenskaper}}. {{ui:Storlek på papper}} visar då till exempel `2.5 mm at 1:50`.
2. Skriv {{cmd:ANNOSCALE}} och skalan som ritningen kommer att skrivas ut i, till exempel `1:100`.

Varje annoterande text och måttsättning ändras i storlek så att den skrivs ut i samma storlek i den nya skalan: 2.5 mm text är 125 hög i en millimeterritning i 1:50 och 250 hög i 1:100. En styckes bredd ändras med det; en måttsättnings text, pilar och mellanrum ändras tillsammans (dess övergripande skala). Det är ett enda steg att ångra, och objekt som inte är annoterande ändras aldrig.

Inställningen sparas i DWG och DXF: andra program läser den annoterande flaggan, och CadCraft behåller också skalan varje objekt är dimensionerat för.

Om ditt kontor sätter pappershöjder i tillägget Default Policies (Inställningar › Global › Default Policies › Annoteringsstorlekar på papper), sätter {{cmd:ANNOSCALE}} också höjden som ny text börjar med till kontorets höjd för anteckningar i den skalan. Se [Default Policies](topic:default-policies).

### Ett objekt i flera skalor

Ett blad visar ofta samma plan i 1:100 och en del av den i 1:50. Ge anteckningarna och måttsättningarna båda skalorna, så visar varje vyport dem i deras pappersstorlek:

1. Markera de annoterande texterna och måttsättningarna och skriv `OBJECTSCALE`.
2. Välj `Lägg till (A)` och skriv skalan, till exempel `1:50`. (`Aktuell skala (C)` lägger till ritningens annoteringsskala; `Lista` visar vad varje objekt behåller; `Ta bort (D)` tar bort en.)

En vyport vars skala finns i ett objekts lista visar det i storleken för den skalan: 2.5 mm text ritas 250 hög genom en 1:100-vyport och 125 hög genom en 1:50-vyport, både på skärmen och i utskriften. Objektet står kvar där det är; bara storleken skiljer. I en vyport i en skala som inte finns i ett objekts lista visas objektet i den storlek det har, tills du skriver `ANNOALLVISIBLE` och väljer `OFF`: då utelämnas det där. {{cmd:ANNOSCALE}} ändrar storlek på objekt som listar den nya skalan och lämnar de övriga som de är.

Listorna sparas i DWG och DXF som CadCraft:s egna data. Ett annat program ser varje objekt som annoterande, med den enda skala det är dimensionerat för. Växeln ANNOALLVISIBLE sparas inte i filen.

## Linjetjocklekar och linjetyper

Ett lager, eller ett objekt, kan ha en **linjetjocklek** (0.05 till 2.11 mm) och en **linjetyp** (streckad, dold, central, fantom, prick …). Ange dem i den högra panelen: med inget markerat är {{ui:Linjetyp}} och {{ui:Linjetjocklek}} under {{ui:Aktuella inställningar}} vad nya objekt får ({{ui:Enligt lager}} för att följa deras lager), och de två under {{ui:Lager …}} är det aktuella lagrets egna. Med objekt markerade ändrar samma två rader, och {{ui:Linjetypsskala}}, de objekten. Kommandona är {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) och {{cmd:LTSCALE}} (`LTS`).

Linjetyper visas på skärmen och i utskrifter. Deras streck är i ritningsenheter: en metrisk ritning använder ISO-storlekarna (DASHED: 12.7 mm streck), en tumritning de tumstorlekarna (0.5"). Om strecken ser för små eller för stora ut, ändra ritningens {{ui:Linjetypsskala}} (LTSCALE): varje streck och mellanrum multipliceras med den; ett objekts egen skala multiplicerar den igen. Ett mönster som är för fint för att synas alls ritas som en heldragen linje.

Linjetjocklekar skrivs ut i utskrifter, i mm på papperet oavsett skala. Linjer med standardlinjetjockleken {{ui:Standard}} använder pennbredden som valts i dialogrutan {{ui:Plotta till PDF}} (0.13 till 0.70 mm; från början 0.25 mm); en linjetjocklek på 0 skrivs ut som den tunnaste linjen. På skärmen är varje linje en pixel bred tills du trycker på {{ui:LWT}} i statusfältet (eller skriver {{cmd:LWDISPLAY}}): då ritas en linjetjocklek över 0.25 mm bredare (0.5 mm = 2 pixlar) i modellen, och i sin verkliga bredd på papperet på ett blad. Valet behålls i den här webbläsaren.
