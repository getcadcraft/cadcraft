---
title: Fäst mot punkter på objekt
summary: Använd objektfångst, ortogonalt läge och rutnätet för att välja exakta ändpunkter, mittpunkter, centrum och skärningar med musen.
keywords: osnap, objektfångst, ändpunkt, mittpunkt, centrum, skärning, vinkelrät, kvadrant, närmaste, nod, infogning, ortogonalt, rutnät, f3, f8, f7, polär spårning, polär, polarang, objektfångstspårning, otrack, spårning, f10, f11
from: 3cf17f94
---

## Det du ska skapa

En rektangel med sina två diagonaler, en cirkel med centrum där de korsas, och en linje från mitten av en sida till cirkeln. Varje punkt väljs med musen, och varje punkt är exakt.

## Så fungerar fångsten

När ett kommando frågar efter en punkt letar CadCraft efter fångstpunkter inom cirka 10 pixlar från korshåret. När den hittar en visas en markör och en etikett (”Ändpunkt”, ”Skärning”), och ett klick träffar **exakt** den punkten, inte där korshåret är.

Fångsterna är på när {{ui:Fångst}} i statusfältet är nedtryckt. {{key:F3}} slår på och av dem.

Fångsterna du kan använda är:

| Fångst | Träffar |
|---|---|
| Ändpunkt | Ändarna på linjer, bågar och polylinjesegment |
| Mittpunkt | Mitten av linjer, bågar och polylinjesegment |
| Centrum | Centrum på cirklar och bågar, och på polylinjens bågsegment |
| Kvadrant | 0-, 90-, 180- och 270-gradspunkterna på cirklar och bågar |
| Skärning | Där två objekt korsar varandra |
| Vinkelrät | Punkten på ett objekt vinkelrät mot den senaste punkten (kräver en baspunkt) |
| Tangent | Punkten på en cirkel eller båge där en linje från den senaste punkten precis tangerar den. Utan någon senaste punkt än (en linjes första punkt) säger markören ”uppskjuten”: tangeringspunkten räknas ut när nästa punkt är känd, så att en linje från Tangent till Tangent tangerar båda cirklarna |
| Närmaste | Den närmaste punkten på vilket objekt som helst |
| Nod | Punktobjekt |
| Infogningspunkt | Infogningspunkten för text och blockreferenser |

Alla är på som standard utom Tangent och Närmaste. Närmaste vinner ofta när du vill ha något annat; slå på Tangent när du behöver den.

## Välj dina fångster

1. Klicka på den lilla pilen bredvid {{ui:Fångst}} i statusfältet. Listan {{ui:Objektfångster}} öppnas.
2. Bocka för eller av fångster. Ändringarna gäller direkt.
3. Klicka på pilen igen för att stänga listan.

CadCraft kommer ihåg ditt val, och inställningarna {{ui:Rutnät}}, {{ui:Ortogonalt}} och {{ui:Fångst}}, i den här webbläsaren.

## Steg

1. Skriv `REC` och tryck på {{key:Enter}}.
2. Skriv `0,0` och tryck på {{key:Enter}}.
3. Skriv `@4000,3000` och tryck på {{key:Enter}}. En rektangel visas.
4. Klicka på {{ui:Utsträckning}}.
5. Skriv `L` och tryck på {{key:Enter}}.
6. Flytta korshåret till det nedre vänstra hörnet. Markören visar ”Ändpunkt”. Klicka.
7. Flytta till det övre högra hörnet tills ”Ändpunkt” visas. Klicka.
8. Tryck på {{key:Enter}} för att avsluta linjen.
9. Tryck på {{key:Enter}} igen för att upprepa {{cmd:LINE}}, och rita den andra diagonalen från det nedre högra hörnet till det övre vänstra hörnet på samma sätt.
10. Skriv `C` och tryck på {{key:Enter}} för att starta en cirkel.
11. Flytta korshåret dit diagonalerna korsar varandra. Markören visar ”Skärning”. Klicka.
12. Skriv `800` och tryck på {{key:Enter}}.

Du ska se en cirkel med centrum exakt i korsningen.

13. Skriv `L` och tryck på {{key:Enter}}.
14. Flytta till mitten av rektangelns vänstra sida tills ”Mittpunkt” visas. Klicka.
15. Flytta korshåret till cirkeln, på dess vänstra sida. Markören visar ”Vinkelrät” eller ”Kvadrant”; båda är samma punkt här. Klicka.
16. Tryck på {{key:Enter}}.

Den nya linjen går från mitten av den vänstra sidan och stannar exakt på cirkeln.

## Hoppa över en fångst för ett klick

Håll ned {{key:Shift}} medan du klickar. Objektfångster ignoreras för det klicket, och punkten hamnar exakt där korshåret är (eller längs ortogonalriktningen, om {{ui:Ortogonalt}} är på).

## Ortogonalt

{{ui:Ortogonalt}} ({{key:F8}}) håller nästa punkt rakt över eller rakt upp och ned från baspunkten. Det gäller klick och direkt avståndsangivelse (ett rent tal som skrivs vid prompten). Objektfångster går före ortogonalt: om en fångstmarkör visas går klicket till fångsten.

## Polär spårning

{{ui:Polär}} ({{key:F10}}) är ortogonalt läge i fler vinklar. När ett kommando har en baspunkt (den senaste punkten på en linje, en flyttningsbaspunkt), linjeras pekaren så snart den kommer nära en stråle från den i en multipel av polärsteget: en prickad linje visas, och en etikett bredvid korshåret läser `Polär: 1200 < 30°`. Klicka för att använda den punkten, eller skriv ett avstånd: `1200` går exakt 1200 längs strålen.

Steget är 90° tills du ändrar det: skriv {{cmd:POLARANG}}, tryck på {{key:Enter}} och skriv `30` (eller 45, 22.5, 15 …). Polär och Ortogonalt utesluter varandra: slår du på det ena stängs det andra av.

## Objektfångstspårning

{{ui:Spår}} ({{key:F11}}) linjerar pekaren med fångstpunkter du har vilat på, så att du kan välja en punkt i samma nivå som ett hörn och över en annan utan att rita hjälplinjer.

1. Slå på {{ui:Fångst}} och {{ui:Spår}}, och starta ett kommando som frågar efter en punkt (`L`).
2. Vila pekaren på en fångstpunkt, till exempel ett hörn, i en halv sekund, utan att klicka. Ett litet kors markerar den: den är fångad. Vila på den igen för att släppa den.
3. Flytta pekaren rakt bort från den, vågrätt eller lodrätt. En prickad linje följer pekaren och etiketten läser `Spår: 600 < 90°`. Klicka, eller skriv ett avstånd.
4. Fånga en andra punkt, och flytta dit där den lodräta genom den ena möter den vågräta genom den andra: pekaren fångar den korsningen (`Spår: där två linjer möts`).

Med {{ui:Polär}} påslagen spåras fångade punkter i varje polär vinkel. Upp till sju punkter behålls, tills kommandot avslutas. {{key:Shift}} stänger av spårningen för ett klick, precis som fångster.

## Rutnät

{{ui:Rutnät}} ({{key:F7}}) visar ett rutnät av linjer bakom ritningen, med tjockare linjer var femte linje; avståndet ändras när du zoomar. Det är bara en hjälp tills du slår på {{ui:Rutnätsfångst}} ({{key:F9}}): då landar klick på närmaste rutnätspunkt, om inte en objektfångst tar punkten först.

## Funktionstangenter på din dator

{{key:F9}} är Rutnätsfångst, {{key:F10}} är Polär och {{key:F11}} är Spår.

:::mac
På en Mac styr F3, F7, F8 och F9 vanligtvis Mission Control och media. Håll ned **fn** med tangenten, eller slå på vanliga funktionstangenter, enligt beskrivningen i [Tangenter, möss och styrplattor](common:keys). Knapparna i statusfältet fungerar alltid.
:::

:::firefox
I Firefox är F7 också tangenten för bläddringsmarkören. Om Firefox frågar om du vill slå på bläddringsmarkören, välj **Nej**. Använd knappen {{ui:Rutnät}} om frågan kommer tillbaka.
:::

:::touch
På en pekskärm finns ingen svävning, så fångstmarkören visas bara där fingret rör skärmen. Zooma in nära för små mål, eller skriv koordinater i stället.
:::

## Vanliga misstag

- **Klicket gick till fel punkt.** Titta på markörens etikett innan du klickar: Ändpunkt vinner över Mittpunkt när båda är nära. Zooma in, eller bocka av fångster du inte behöver.
- **Ingen markör visas.** {{ui:Fångst}} är av, eller fångsten du vill ha är avbockad, eller objektet ligger på ett lager som är av eller fruset.
- **Fångster tar fel sak i en tät ritning.** Zooma in. Fångstavståndet mäts i skärmpixlar, så att zooma in gör det mindre på ritningen.
- **Att förvänta sig att Shift ger en rak linje.** I CadCraft stänger Shift av fångster för ett klick. Använd {{ui:Ortogonalt}} för raka linjer.
- **Att förvänta sig att punkter hamnar på rutnätspunkter.** Slå på {{ui:Rutnätsfångst}} ({{key:F9}}), eller skriv koordinater för runda tal.
