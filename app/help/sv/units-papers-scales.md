---
title: Enheter, pappersstorlekar och skalor
summary: Vad ritningsenheter betyder i CadCraft, pappersstorlekarna för blad och utskrifter, varje standardskala, och hur text- och måttstorlekar förhåller sig till utskriftsskalan.
keywords: enheter, millimeter, tum, fot, fot och tum, arkitekt, teknisk, bråk, bråktal, lunits, längdformat, precision, meter, pappersstorlek, a3, a1, arch d, ansi, tabloid, letter, skala, 1:100, 1/4 tum, arkitektonisk skala, teknisk skala, insunits
from: 7dc9b62e
---

## Ritningsenheter

Du ritar i full storlek, i ritningsenheter. Vad en enhet betyder är ritningens inställning **Enheter**:

1. Tryck på {{key:Esc}} så att inget är markerat, på fliken {{ui:Modell}}.
2. Under {{ui:Aktuella inställningar}} väljer du {{ui:Enheter}}: {{ui:Enhetslös}}, {{ui:Millimeter}}, {{ui:Centimeter}}, {{ui:Meter}}, {{ui:Tum}} eller {{ui:Fot}}.

Mått kan skriva sina längder i millimeter, centimeter, meter eller kilometer oavsett ritningsenhet: se [Mått i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Att ändra enheter ändrar inga storlekar. Det ändrar hur skalor läses på blad och i utskrifter, och vilka skalor som erbjuds. En ritning som öppnats från en DWG eller DXF behåller de enheter som lagrats i filen; avsnittet {{ui:Ritning}} i den vänstra panelen visar dem.

En {{ui:Enhetslös}} ritning behandlas som om den var i pappersenheten: millimeter på ISO-papper, tum på amerikanskt papper.

## Fot och tum, och bråk

Hur längder **skrivs och matas in** är en separat inställning, längdformatet. Det ändrar ingen geometri, bara hur tal ser ut och vad du kan skriva.

1. Tryck på {{key:Esc}} så att inget är markerat, på fliken {{ui:Modell}}.
2. Under {{ui:Aktuella inställningar}} väljer du {{ui:Längdformat}}: {{ui:Decimal}} (`150.5`), {{ui:Arkitekt}} (`12'-6 1/2"`), {{ui:Teknisk}} (`12'-6.5"`), {{ui:Bråk}} (`150 1/2`) eller {{ui:Vetenskaplig}} (`1.505E+02`).
3. Välj {{ui:Precision}}: decimaler, eller den minsta bråkdelen (1/16 är det vanliga valet för arkitektur).

Eller skriv {{cmd:UNITS}} (`UN`) och svara på dess två frågor.

Med {{ui:Arkitekt}} eller {{ui:Teknisk}} motsvarar en ritningsenhet en tum, som i AutoCAD: ange även {{ui:Enheter}} till {{ui:Tum}}. Du kan då skriva längder i fot och tum var som helst en längd efterfrågas, och i rutorna i {{ui:Egenskaper}}:

| Du skriver | Betyder |
|---|---|
| `12'6"` eller `12'-6"` | 12 fot 6 tum (150) |
| `12'6-1/2"` | 12 fot 6½ tum. Använd ett bindestreck före bråket: {{key:Space}} är {{key:Enter}} på kommandoraden. |
| `12'` | 12 fot |
| `6"` eller `6` | 6 tum: ett vanligt tal är tum |
| `1/2`, `6-1/2` | bråk fungerar i vilket format som helst |

Punkter tar samma längder: `@12'6",0` eller `@10'<90`. Vinklar förblir i grader.

Formatet visas i historiken ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: areor som kvadrattum och kvadratfot), i {{ui:Egenskaper}}, i koordinaterna i statusfältet, och i **nya mått**. Blad behåller sina pappersenheter (millimeter eller tum) som decimaler.

:::note
Längdformatet sparas i DWG- och DXF-filer, och varje mått behåller sitt eget: en sparad ritning öppnas igen så som du lämnade den.
:::

## Pappersstorlekar

Blad och modellutskrifter använder dessa storlekar, i båda riktningarna:

| Papper | Storlek | Enhet på bladet |
|---|---|---|
| ISO A4 | 297 × 210 mm | millimeter |
| ISO A3 | 420 × 297 mm | millimeter |
| ISO A2 | 594 × 420 mm | millimeter |
| ISO A1 | 841 × 594 mm | millimeter |
| ISO A0 | 1189 × 841 mm | millimeter |
| Letter | 11 × 8,5 tum | tum |
| Legal | 14 × 8,5 tum | tum |
| Tabloid / ANSI B | 17 × 11 tum | tum |
| ANSI C | 22 × 17 tum | tum |
| ANSI D | 34 × 22 tum | tum |
| ARCH C | 24 × 18 tum | tum |
| ARCH D | 36 × 24 tum | tum |
| ARCH E | 48 × 36 tum | tum |

Nya blad startar på ISO A3 för metriska och enhetslösa ritningar, och på Tabloid för ritningar i tum eller fot. Modellutskrifter startar på ISO A4 eller Letter på samma sätt, och kommer sedan ihåg ditt senaste val. Blad från öppnade filer behåller sin egen storlek, visad som "Anpassad" när den inte är en av dessa.

## Skalor

En skala `1:n` betyder att en enhet på papper visar n av samma enhet i modellen, så 1:100 visar 1 m byggnad som 10 mm papper. CadCraft räknar ut detta från ritningsenheterna och pappersenheten.

**Metriska skalor**, erbjuds för varje ritning: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arkitektoniska skalor**, erbjuds när enheterna är tum eller fot: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Tekniska skalor**, erbjuds när enheterna är tum eller fot: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Egna skalor.** Skriv `SCALELISTEDIT` (eller `SCALELIST`) för att lägga till en egen skala, till exempel 1:75 eller en platsskala på 2 pappersenheter : 300 ritningsenheter. `Add` frågar efter ett namn, sedan papperenheterna och ritningsenheterna (ett namn som `1:75` erbjuder sina egna tal; tryck på {{key:Enter}} för att ta dem). `Edit`, `Delete`, `List` och `Reset` arbetar med samma lista; `Reset` går tillbaka till standardlistan. Dina skalor visas efter standardskalorna i vyportskallistan i Egenskaper och i dialogrutan {{ui:Plotta till PDF}}, och en vyport i den skalan visas med sitt namn; de sparas i ritningen (DWG och DXF 2000) som ritningens skallista. En ritning som öppnats från ett annat program tar med sin lista; skalor den har som motsvarar en standardskala visas inte två gånger.

När en vyport riktas med {{ui:Visa hela modellen}} eller {{ui:Välj ett fönster på modellen…}} väljer CadCraft den största standardskalan som passar. {{ui:Anpassa till hela modellen}} sätter en exakt skala i stället, som läses som ett rent förhållande.

## Storlekar på papper och i modellen

Text- och måttstorlekar ligger i enheterna för det utrymme du ritar i.

| Du vill ha på papper | Ritat på ett blad | Ritat i modellen vid 1:50 (ritning i mm) | Ritat i modellen vid 1/4" = 1'-0" (ritning i tum) |
|---|---|---|---|
| 2,5 mm text | 2,5 | 125 | — |
| 3/32" text | 0,09375 | — | 4,5 |

För mått, behåll storlekarna som pappersstorlekar och ange totalskalan ({{cmd:DIMSCALE}}) till utskriftsskalan: 50 för 1:50, 48 för 1/4" = 1'-0". Se [Ange måttstorlekar](topic:dimension-settings).

## Annotera efter skala

Rita modellen i full storlek och låt CadCraft göra beräkningarna ovan åt dig.

1. Markera texten eller måtten som ska behålla sin storlek på papper. Under Egenskaper bockar du i {{ui:Annoterande}}. {{ui:Storlek på papper}} visar då till exempel `2.5 mm at 1:50`.
2. Skriv {{cmd:ANNOSCALE}} och den skala ritningen ska skrivas ut i, till exempel `1:100`.

Varje annoterande text och mått storleksändras så att den skrivs ut i samma storlek vid den nya skalan: 2,5 mm text är 125 hög i en millimeterritning vid 1:50 och 250 hög vid 1:100. Ett styckes bredd ändras med den; ett måts text, pilar och mellanrum ändras tillsammans (dess totalskala). Det är ett ångra-steg, och objekt som inte är annoterande ändras aldrig.

Inställningen sparas i DWG och DXF: andra program läser den annoterande flaggan, och CadCraft behåller även skalan varje objekt är dimensionerat för.

Anger ditt kontor pappershöjder i tillägget Standardpolicyer (Inställningar › Global › Standardpolicyer › Annoteringsstorlekar på papper), sätter {{cmd:ANNOSCALE}} även höjden nya texter startar med till kontorets höjd för noteringar i den skalan. Se [Standardpolicyer](topic:default-policies).

### Ett objekt i flera skalor

Ett blad visar ofta samma plan i 1:100 och en del av den i 1:50. Ge noteringarna och måtten båda skalorna, så visar varje vyport dem i sin pappersstorlek:

1. Markera de annoterande texterna och måtten och skriv `OBJECTSCALE`.
2. Välj `Add` och skriv skalan, till exempel `1:50`. (`Current scale` lägger till ritningens annoteringsskala; `List` visar vilka skalor varje objekt behåller; `Delete` tar bort en.)

En vyport vars skala finns i ett objekts lista visar det i storleken för den skalan: 2,5 mm text ritas 250 hög genom en 1:100-vyport och 125 hög genom en 1:50-vyport, på skärmen och i utskriften. Objektet står kvar där det är; bara dess storlek skiljer sig. I en vyport vars skala inte finns i ett objekts lista visas objektet i den storlek det har, tills du skriver `ANNOALLVISIBLE` och väljer `OFF`: då utelämnas det där. {{cmd:ANNOSCALE}} storleksändrar objekten som listar den nya skalan och lämnar de andra som de är.

Listorna sparas i DWG och DXF som CadCrafts egna data. Ett annat program ser varje objekt som annoterande, i den enda skala det är dimensionerat för. Omkopplaren ANNOALLVISIBLE sparas inte i filen.

## Linjetjocklekar och linjetyper

Ett lager, eller ett objekt, kan ha en **linjetjocklek** (0,05 till 2,11 mm) och en **linjetyp** (streckad, dold, mitt, fantom, prick …). Ställ in dem i den högra panelen: när inget är markerat är {{ui:Linjetyp}} och {{ui:Linjetjocklek}} under {{ui:Aktuella inställningar}} vad nya objekt får ({{ui:Enligt lager}} för att följa deras lager), och de två under {{ui:Lager …}} är det aktuella lagrets egna. När objekt är markerade ändrar samma två rader, plus {{ui:Linjetypsskala}}, de objekten. Kommandona är {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) och {{cmd:LTSCALE}} (`LTS`).

Linjetyper visas på skärmen och i utskrifter. Deras streck är i ritningsenheter: en metrisk ritning använder ISO-storlekarna (DASHED: 12,7 mm streck), en tumritning tumstorlekarna (0,5"). Om strecken ser för små eller för stora ut, ändra ritningens {{ui:Linjetypsskala}} (LTSCALE): varje streck och mellanrum multipliceras med den; ett objekts egen skala multiplicerar den igen. Ett mönster som är för fint för att synas alls ritas som en heldragen linje.

Linjetjocklekar skrivs ut i utskrifter, i mm på papperet oavsett skala. Linjer med linjetjockleken {{ui:Standard}} använder pennbredden som valts i dialogrutan {{ui:Plotta till PDF}} (0,13 till 0,70 mm; till att börja med 0,25 mm); en linjetjocklek på 0 skrivs ut som den tunnaste linjen. På skärmen är varje linje en pixel bred tills du trycker på {{ui:LWT}} i statusfältet (eller skriver {{cmd:LWDISPLAY}}): då ritas en linjetjocklek över 0,25 mm bredare (0,5 mm = 2 pixlar) i modellen, och i sin sanna bredd på papperet på ett blad. Valet sparas i den här webbläsaren.

## Kontorsstandarden

Ett kontor kan behålla sina pappers-texthöjder, lager, fält i ritningshuvudet och mallar i en post: kontorsstandarden. CadCraft läser den i den här ordningen: ritningens egna post (satt med {{cmd:OFFICESTANDARD}} › `Import`, sparad i filen), ditt teams delade standard, sedan dina Standardpolicyer. Annoterande text och mått tar sin pappershöjd från den vid annoteringsskalan. En tom standard ändrar ingenting. {{cmd:OFFICESTANDARD}} › `Layers` lägger till de kontorslager en ritning saknar.
