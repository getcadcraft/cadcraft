---
title: Mät en planritning
summary: Lägg till linjära, justerade, vinkel-, radie- och diametermått, kedja dem med Fortsatt mått och Basmått, och skriv över texten.
keywords: mått, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, kedja, serie, notera, måttverktyg, var, hitta, verktygsfält, mät, mm, cm, m, km, enheter
from: 9ee65123
---

## Vad du ska göra

Ett måttsatt rum: total bredd och höjd, en serie mått längs en vägg, en vinklad vägg, ett krökt hörn och en vinkel.

Innan du börjar, läs [Ange måttstorlekar](topic:dimension-settings) om din ritning är stor: måttext är 2.5 ritningsenheter hög som standard, vilket är litet i en ritning mätt i millimeter. För stegen nedan, skriv `DIMSCALE`, tryck på {{key:Enter}}, skriv `50` och tryck på {{key:Enter}} först.

## Var måttverktygen finns

Med menystilen CadCraft (den som CadCraft startar med) finns måttverktygen i verktygsfältet ovanför ritningen, i gruppen {{ui:Notera}}: {{ui:Linjärt}}, {{ui:Justerat}}, {{ui:Vinkel}}, {{ui:Radie}} och {{ui:Diameter}}. Gruppens meny {{ui:Mer}} har {{ui:Fortsatt mått}} och {{ui:Basmått}}. Håll pekaren över en knapp för att se vad den gör.

- Med menystilen {{ui:Klassisk ritning}} eller {{ui:Menyflik}} öppnar du fliken {{ui:Notera}}: verktygen finns i dess panel {{ui:Mått}}. {{ui:Klassisk ritning}} har också {{ui:Linjärt}} på fliken {{ui:Start}}, under {{ui:Notering}}. Se [Menyer, tangenter och mus](topic:menus-keys-and-mouse).
- Eller skriv kommandot på kommandoraden under ritningen och tryck på {{key:Enter}}: `DLI` (linjärt), `DAL` (justerat), `DAN` (vinkel), `DRA` (radie), `DDI` (diameter), `DCO` (fortsatt), `DBA` (bas).
- På en smal skärm är verktygsfältet en rad: dra det åt sidan för att nå {{ui:Notera}}.

För att visa längder i millimeter, centimeter, meter eller kilometer, se [Mått i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Rita något att mäta

1. Skriv `PL` och tryck på {{key:Enter}}.
2. Skriv `0,0` och tryck på {{key:Enter}}.
3. Skriv `@6000,0` och tryck på {{key:Enter}}.
4. Skriv `@1500<60` och tryck på {{key:Enter}}.
5. Skriv `@0,2700` och tryck på {{key:Enter}}.
6. Skriv `@-6750,0` och tryck på {{key:Enter}}.
7. Skriv `C` och tryck på {{key:Enter}}. Konturen sluts.
8. Skriv `C` och tryck på {{key:Enter}} för att starta en cirkel.
9. Klicka inne i rummet, bort från väggarna, för centrum.
10. Skriv `600` och tryck på {{key:Enter}}. Detta är en pelare.
11. Klicka på {{ui:Utsträckning}}.

## Linjärt: horisontellt eller vertikalt

1. Skriv `DLI` och tryck på {{key:Enter}}.
2. Vid `Ange första hjälplinjens startpunkt`, fäst på nedre vänstra hörnet (Ändpunkt) och klicka.
3. Vid `Ange andra hjälplinjens startpunkt`, fäst på nedre högra hörnet och klicka.
4. Flytta korshåret under rummet. Måttet följer, horisontellt.
5. Klicka för att placera måttlinjen.

Historiken säger `Måttext = 6000`.

Var du placerar linjen avgör riktningen: under eller över ger ett horisontellt mått, till vänster eller höger ger ett vertikalt. För att tvinga fram en riktning, skriv `H` (horisontell), `V` (vertikal) eller `R` (vriden, sedan en vinkel) innan du placerar måttet.

:::tip
Tryck på {{key:Enter}} vid första frågan i stället för att välja en punkt, och klicka sedan på en linje, båge, cirkel eller polylinjesegment. CadCraft tar båda ändarna åt dig.
:::

## Fortsatt: en serie mått

{{cmd:DIMCONTINUE}} ({{ui:Notera}} › {{ui:Mer}} › {{ui:Fortsatt mått}}, eller `DCO`) fortsätter från det senaste linjära eller justerade måttet du gjorde, och varje nytt mått startar där det förra slutade.

1. Skriv `DLI` och tryck på {{key:Enter}}.
2. Skriv `0,0` och tryck på {{key:Enter}} för första startpunkten.
3. Skriv `2000,0` och tryck på {{key:Enter}} för andra startpunkten.
4. Klicka under rummet för att placera det.
5. Skriv `DCO` och tryck på {{key:Enter}}.
6. Skriv `4500,0` och tryck på {{key:Enter}}. Ett andra mått följer efter det första, på samma linje.
7. Fäst på nedre högra hörnet och klicka. Ett tredje mått avslutar serien.
8. Tryck på {{key:Enter}} för att avsluta kommandot.

:::note
Här skrivs punkterna som absoluta koordinater med avsikt. En `@`-punkt räknar från den senaste punkt du angav, och den senaste punkten är där du placerade föregående måttlinje, inte måttets slut. Absoluta punkter, fångster eller ett blott avstånd med {{ui:Ortogonalt}} på är säkrare i en måttserie.
:::

Skriv `U` och tryck på {{key:Enter}} för att ta tillbaka det senaste måttet i serien utan att lämna kommandot.

## Bas: mått staplade från en linje

{{cmd:DIMBASELINE}} ({{ui:Notera}} › {{ui:Mer}} › {{ui:Basmått}}, eller `DBA`) mäter varje nytt mått från den första startpunkten på det sista, och staplar varje mått ett steg längre ut.

1. Skriv `DLI` och tryck på {{key:Enter}}.
2. Fäst på nedre vänstra hörnet och klicka.
3. Fäst på övre vänstra hörnet och klicka.
4. Flytta korshåret till vänster om rummet och klicka. Ett vertikalt mått visas.
5. Skriv `DBA` och tryck på {{key:Enter}}.
6. Fäst på den övre änden av väggen i 60-gradersvinkeln (Ändpunkt) och klicka. Ett andra vertikalt mått visas, ett steg längre ut än det första.
7. Tryck på {{key:Enter}} för att avsluta.

## Justerat: verklig längd på en lutande linje

1. Skriv `DAL` och tryck på {{key:Enter}}.
2. Tryck på {{key:Enter}} för att välja ett objekt.
3. Klicka på 60-gradersväggen.
4. Flytta utåt och klicka för att placera.

Texten visar 1500: den verkliga längden, mätt längs väggen.

## Radie och diameter

1. Skriv `DRA` och tryck på {{key:Enter}}.
2. Klicka på pelarens cirkel.
3. Flytta korshåret. Hänvisningen pekar från centrum mot korshåret.
4. Klicka för att placera texten.

Texten visar `R600`. {{cmd:DIMDIAMETER}} (`DDI`) gör detsamma med ett ⌀-tecken och diametern.

## Vinkel

Väggarna här är en polylinje, så mät hörnet via dess spets. (Mellan två separata linjer kan du klicka på linjerna i stället.)

1. Skriv `DAN` och tryck på {{key:Enter}}.
2. Vid `Välj båge, cirkel eller linje, eller Enter för en spets`, tryck på {{key:Enter}}.
3. Vid `Ange vinkelspets`, fäst på nedre högra hörnet och klicka.
4. Vid `Ange första vinkeländpunkten`, fäst på nedre vänstra hörnet och klicka.
5. Vid `Ange andra vinkeländpunkten`, fäst på den övre änden av väggen i 60-gradersvinkeln och klicka.
6. Flytta korshåret inne i rummet, nära hörnet, och klicka.

Texten visar `120°`, hörnets inre vinkel. Placerat på andra sidan av hörnet mäter måttet vinkeln på den sidan i stället. Klicka på en båge vid första frågan för att mäta vinkeln den spänner, eller klicka på två linjer för att mäta vinkeln mellan dem.

## Ändra texten

För att skriva egen text, skriv `T` och tryck på {{key:Enter}} innan du placerar måttet, skriv sedan texten. I din text står `<>` för det uppmätta värdet: `<> TYP.` ger `6000 TYP.`. Tryck på {{key:Enter}} på en tom rad för att behålla det uppmätta värdet.

För att ändra ett befintligt mått:

1. Klicka på det.
2. I den högra panelen, skriv i {{ui:Text}}. Lämna tomt för det uppmätta värdet.
3. Tryck på {{key:Enter}}.

## Mått följer geometrin

Ett mått minns sina punkter. Dra i ett av dess handtag, eller flytta, rotera eller skala det tillsammans med objekten det mäter, så mäter det om. Om du töjer geometrin utan att flytta måttet följer det inte: det behåller sina egna punkter.

## Vanliga misstag

- **Texten och pilarna är mikroskopiska eller enorma.** Ange total skala: se [Ange måttstorlekar](topic:dimension-settings).
- **”Välj en punkt inuti vinkeln du vill mäta.”** Punkten du klickade för ett vinkelmått ligger på ett av benen. Flytta den in i vinkeln.
- **Fortsatt startade från fel mått.** Det fortsätter alltid från det senaste linjära eller justerade måttet som gjordes i den här sessionen. Gör (eller gör om) det mått du ska fortsätta från först.
- **Måttet blev vertikalt.** Du placerade det åt sidan. Skriv `H` innan du placerar det.
- **Fot och tum.** Ange ritningens längdformat till {{ui:Arkitekt}} först, eller ett måttets {{ui:Format}} i {{ui:Egenskaper}}: se [Fot och tum i mått](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Talen är inte i den enhet du vill ha.** Välj {{ui:Enheter i texten}}: se [Mått i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
