---
title: Lägg villkor på en ritning
summary: Håll linjer horisontella, ändpunkter ihop och storlekar fasta med geometriska och måttbaserade villkor, och låt ritningen följa när du ändrar en storlek.
keywords: villkor, parametrisk, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, frihetsgrader, helt villkorad
from: f8f21fa4
---

## Vad du ska göra

En platta vars bredd du ändrar på ett ställe: dess sidor förblir räta, ett hörn förblir kvar, och höjden förblir hälften av bredden.

Villkor fungerar på linjer, polylinjer, cirklar, bågar och punkter på fliken {{ui:Modell}}. Varje villkor du lägger till är ett steg som går att ångra.

## Rita och villkora konturen

1. Skriv `REC` och tryck på {{key:Enter}}. Skriv `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}}.
2. Skriv `AUTOCONSTRAIN` och tryck på {{key:Enter}}. Skriv `ALL`, {{key:Enter}}, och tryck sedan på {{key:Enter}} igen.

   Historiken säger ”4 villkor tillämpades”. Små rutor med **H** och **V** visas bredvid sidorna: det är villkorsfälten.
3. Skriv `GCFIX` och tryck på {{key:Enter}}. Klicka nära nedre vänstra hörnet. En ruta med ⊕ visas: det hörnet står kvar där det är.

`AUTOCONSTRAIN` lägger till sammanfallande villkor där ändpunkter nästan möts och horisontella eller vertikala villkor där linjer är nästan plana eller lodräta. Skriv `S` vid dess fråga för att ändra hur nära (0.05 ritningsenheter och 1° från början).

## Lägg till måtten

1. Skriv `DCHORIZONTAL` och tryck på {{key:Enter}}.
2. Klicka nära nedre vänstra hörnet, och sedan nära nedre högra hörnet.
3. Klicka under rektangeln för måttlinjen.
4. Frågan visar `Måttext <d1=100>`. Skriv `width=120` och tryck på {{key:Enter}}.

   Rektangeln är nu 120 bred, och etiketten visar `width=120`.
5. Skriv `DCVERTICAL` och tryck på {{key:Enter}}, skriv `O` och tryck på {{key:Enter}}, klicka sedan på högra sidan.
6. Klicka till höger om den, skriv `width/2` och tryck på {{key:Enter}}.

   Den är 60 hög. Etiketten visar `fx: d1=width/2`: ett uttryck styr den.

Historiken säger nu att konturen är helt villkorad. Vill du ändra storleken, ändra `width` (se [Använd parametrar och ekvationer](topic:parameters)), eller dubbelklicka på etiketten `width=120`, skriv ett nytt värde och välj {{ui:Verkställ}}.

## Flytta villkorade objekt

Flytta, rotera, skala, handtag och panelen {{ui:Egenskaper}} behåller alla villkor: det du flyttar hålls kvar, och resten följer. När villkoren inte kan följa görs inte redigeringen, och historiken säger varför, till exempel ”Inte utförd: villkoren håller det objektet kvar där det är”. Att radera ett objekt tar bort dess villkor med det.

## Spegla och trimma villkorade objekt

- {{cmd:MIRROR}} kopierar villkoren mellan de objekt du speglar till kopiorna. Sidor (vilket håll en tangent tangerar, vilken sida ett avstånd mäts till) räknas om för den speglade kopian, och kopierade mått får egna namn, precis som vid en inklistring. Med `Radera källobjekt` `Y` ligger villkoren kvar på de speglade objekten. Historiken säger hur många som följde med.
- {{cmd:TRIM}} behåller en linjes eller bågs villkor på det som blir kvar: ett villkor på en ände går till biten som fortfarande har den änden, en regel om riktning ({{ui:Horisontell}}, {{ui:Vertikal}}, {{ui:Parallell}}, {{ui:Vinkelrät}}) gäller på varje bit, och ett mått mellan de två yttre ändarna fortsätter att mäta dem. Villkor som höll den bortskurna delen, eller en längd som skärningen ändrade ({{ui:Lika}}, en bågs svep), försvinner. En trimmad cirkel behåller sina villkor för centrum och radie. Trimmade polylinjer förlorar sina.

## Villkoren

| Kommando | Behåller |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | en linje eller ett segment horisontellt eller vertikalt (`2P`: två punkter horisontella eller vertikala) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | två linjer parallella, vinkelräta eller på en och samma linje |
| {{cmd:GCCOINCIDENT}} | två punkter ihop; `O`: en punkt på en linje, cirkel eller båge |
| {{cmd:GCTANGENT}} | en linje och en cirkel eller båge, eller två av dem, som tangerar varandra |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | två cirklar eller bågar med samma centrum; två längder eller två radier lika |
| {{cmd:GCSYMMETRIC}} | två punkter, linjer eller cirklar speglade över en linje |
| {{cmd:GCFIX}} | en punkt (klicka nära den) eller ett helt objekt (`O`) där det är |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | ett avstånd |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | en radie, en diameter, en vinkel mellan två linjer eller en bågs vinkel |

{{cmd:GEOMCONSTRAINT}} och {{cmd:DIMCONSTRAINT}} frågar vilket som avses; {{ui:Villkor}} och {{ui:Mått}} i gruppen {{ui:Parametrisk}} kör dem, och {{ui:Mer}} där listar var och en. Var du klickar avgör vilken del som väljs: ett klick nära en ände, mitten eller ett centrum tar den punkten; ett klick på en polylinje tar segmentet under det. Det första objektet står kvar och det andra flyttas för att mötas.

Ett villkor som krockar med andra, eller som inte lägger till något eftersom de andra redan innebär det, avvisas med ett meddelande och inget flyttas.

## Se, markera och ta bort

- Klicka på en ruta i ett villkorsfält (eller en sammanfallande ruta, eller en måttetikett) för att markera det villkoret; historiken anger vilket. Tryck på {{key:Delete}} för att ta bort det.
- {{cmd:DELCONSTRAINT}} tar bort alla villkor från de objekt du markerar.
- {{cmd:CONSTRAINTBAR}}: `S` visar alla fält, `H` döljer dem; markera objekt först för att visa eller dölja deras. {{ui:Mer}} har {{ui:Visa villkorsfält}} och {{ui:Dölj villkorsfält}}.
- {{cmd:DCDISPLAY}} visar eller döljer måttvillkoren. De skrivs aldrig ut.
- {{cmd:DCCONVERT}} gör om mått som ritats på linjer, cirklar och bågar till måttvillkor.

:::note
Om du har använt AutoCAD:s parametriska ritning är kommandonamnen och frågorna desamma. Villkor och parametrar sparas i DWG- och DXF-filer i ett format som andra program ignorerar; se [Filer](topic:files#constraints-in-files).
:::
