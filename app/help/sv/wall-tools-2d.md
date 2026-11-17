---
title: Väggformer, skärningar, förskjutningar och lås för 2D-väggar
summary: Rita väggar som rektanglar, polygoner och bågar, dela och sammanfoga dem igen, flytta dem med ett mått, och lås en vägg till en annan vägg eller till en rutnätslinje. Samma verktyg som BimCrafts väggar.
keywords: vägg, väggverktygsfält, väggknappar, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, sammanfogningsstil, geringsfog, platt, kapat, hänglås, handtag, dra änden, rotera, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, sammanfoga, tillåt inte sammanfogning, lås, rutnätslinje, dela, mellanrum, förskjutning, placeringslinje
from: f41e7433
---

Verktygen fungerar på 2D-väggarna från `WALL` (se "Rita smarta väggar, dörrar och fönster i 2D"). De använder samma regler som väggverktygen i BimCraft, så en vägg beter sig likadant i båda.

## Var verktygen finns

- I verktygsfältet har gruppen {{ui:Väggar}} {{ui:Vägg}}, {{ui:Rektangel}}, {{ui:Dela}} och {{ui:Förskjut}}. Dess menu {{ui:Mer}} har alla andra väggverktyg, vart och ett med sin ikon.
- I menyfliksstilarna har fliken {{ui:Väggar}} panelerna {{ui:Rita väggar}}, {{ui:Klipp ut}}, {{ui:Ange och ändra}}, {{ui:Håll}} och {{ui:Sammanfoga}}.
- I en layout visar verktygsraderna och verktygslådan samma grupp {{ui:Väggar}}.
- Du kan också skriva vilket kommando som helst som nämns nedan.

## Sammanfogningar sparas

När en väggände hamnar på en annan vägg sparar CadCraft den sammanfogningen med båda väggarna. Den räknar inte längre ut sammanfogningarna på nytt utifrån var ändarna råkar stå. Det innebär:

- Väggar som är sammanfogade med en vägg du flyttar följer med och förblir sammanfogade. Deras ändar glider längs sina egna linjer, så ingenting vrids.
- Drar du i ena änden av en vägg med dess handtag behåller den sammanfogade väggen där sin riktning. Dess ände glider längs sin egen linje för att möta den dragna väggen, så den dragna änden hamnar på den linjen, inte alltid under pekaren. Förhandsvisningen visar var. En vägg som stöter mot den dragna väggen följer med längs sin egen linje. Drar du änden rakt längs väggen ändras dess längd, och väggen som är sammanfogad där flyttas med den.
- `ROTATE` på en sammanfogad vägg fungerar på samma sätt: grannarnas ändar glider längs sina egna linjer till den vridna väggen.
- För att flytta ett hörn, markera båda väggarna som möts där och dra handtaget i hörnet. Båda väggarna står kvar i hörnet och båda vrids. Väggar längre bort står kvar som de var.
- Håll {{key:Alt}} när du klickar på handtagets nya plats för att bryta sammanfogningarna med avsikt: väggen går dit du placerade den och ingenting följer med.
- Om en dragning skulle vrida en sammanfogad vägg tillbaka genom sin egen andra ände, nekas den och ingenting ändras.
- En vägg du ritar med {{ui:Tillåt inte sammanfogningar}} (`D` i `WALL`), eller stänger av i Egenskaper ({{ui:Tillåt inte sammanfogning i början}}, {{ui:Tillåt inte sammanfogning i slutet}}), förblir fri i den änden, även om den rör en annan vägg, tills du tillåter det igen.
- `WALLDISJOIN` ({{ui:Tillåt inte sammanfogning}} i gruppen {{ui:Väggar}}) gör detsamma med ett klick: klicka på en vägg nära ena änden för att inte tillåta sammanfogningar där, och klicka igen för att tillåta dem.
- En äldre ritning har inga sparade sammanfogningar ännu. Den första ändring du gör hittar dem en gång, utifrån hur väggarna stod före ändringen, och sparar dem. `WALLJOINS` gör det direkt.
- DWG- och DXF-filer bär sammanfogningarna inne i varje vägg. CadCraft läser dem tillbaka som de sparades. Ett program som inte sparar utökad data visar väggarna som vanliga block och tappar sammanfogningarna, och en sammanfogning vars väggar flyttats i ett annat program tappas nästa gång du ändrar någon av väggarna.

## Sammanfogningsstil för ett hörn

Ett hörn där två väggar möts ände mot ände ritas som en geringsfog, om du inte väljer en annan stil.

- `WALLJOINSTYLE` ({{ui:Sammanfogningsstil}} i gruppen {{ui:Väggar}}): klicka på hörnet. Varje klick går till nästa stil: {{ui:Geringsfog}}, {{ui:Platt}}, {{ui:Kapat}}, sedan {{ui:Geringsfog}} igen. Skriv `T` för att byta vilken av de två väggarna som går igenom i hörnet du klickade på sist. Tryck {{key:Enter}} för att avsluta. En körning av kommandot är ett ångra-steg.
- {{ui:Platt}}: den ena väggen går igenom till den andra väggens yttre sida, och den andra stannar mot dess sida. {{ui:Kapat}}: detsamma, men väggen som går igenom slutar rakt mot sig själv. I en rät vinkel ser de två likadana ut.
- I Egenskaper för en vägg: {{ui:Sammanfogningsstil vid start}}, {{ui:Sammanfogningsstil vid slut}}, och {{ui:Går igenom vid start}}, {{ui:Går igenom vid slut}}.
- Stilen sparas med båda väggarna och följer med i DWG- och DXF-filer. En kopia av en vägg börjar utan den.
- En T-sammanfogning har ingen stil att välja: väggen vars sida träffas går igenom. Ett hörn där tre eller fler väggar möts förblir en geringsfog. Så är det också med ett mycket skarpt hörn (under cirka 30 grader) och två väggar på en rak linje.

## Rita väggformer

Var och en gör väggarna i ett ångra-steg, med hörnen sammanfogade. I `WALL` sätter `O` en placeringsförskjutning (hur långt till vänster om dina klick väggen går) och `D` stänger av sammanfogning för de väggar du ritar härnäst.

- `WALLRECT` (`WR`): två motsatta hörn, som `RECTANG`.
- `WALLROT`: första sidan, sedan hur långt den andra sidan går ut, för en rektangel i valfri vinkel.
- `WALLPOLY` (`WP`): antal sidor (3 till 64), mittpunkten, `I` för inskriven eller `C` för omskriven, sedan radien, som `POLYGON`.
- `WALLARC` (`WARC`): mittpunkt, start, slut. `D` vänder bågen åt andra hållet.
- `WALLTAN`: klicka nära änden av en vägg, sedan bågens slut, som börjar längs den väggen.
- `WALLPICK`: klicka på en linje eller polylinje och säg om även de linjer som är sammanfogade med den ska tas med.
- `WALLTRACE`: klicka inuti ett slutet område av linjer och väggar för att lägga väggar runt det minsta.

Planväggar är raka, så en båge ritas som korta raka väggar på 15 grader vardera. De sammanfogas som vilket hörn som helst.

## Dela väggar

- `WALLSPLIT` (`WS`): klicka på väggen, sedan på punkten. `C` delar där en annan vägg korsar den, `G` lämnar ett mellanrum mellan delarna, `F` gör de avskurna ändarna fria i stället för sammanfogade. Den första delen behåller väggens plats i ritningen, och dörrar och fönster följer med sin del. En delning genom en dörr eller ett fönster nekas.
- `WALLSPLITGAP` ({{ui:Dela med mellanrum}}): samma delning, men den frågar efter mellanrummet först.
- `WALLDELSEG`: klicka på väggen, sedan på de två ändarna av biten som ska tas bort.
- `WALLREJOIN`: klicka på två delar av en vägg för att göra dem till en igen.

## Flytta väggar med ett avstånd

- `WALLDIM`: klicka på ett linjärt eller justerat mått som går från en vägg till en annan, skriv sedan det nya värdet. Väggen i den bortre änden flyttas vinkelrätt mot sig själv, väggen i den första änden står kvar, och de väggar som är sammanfogade med den följer med.
- `WALLOFFSET` (`WO`): klicka på en vägg, sedan på sidan att flytta den till (`D` skriver ett avstånd, `C` gör en kopia i stället).
- `WALLSTRETCH`: ett fönster runt väggens ändar, sedan en basspunkt och en andra punkt.
- I Egenskaper: en inskriven {{ui:Längd}} behåller startpunkten och tar med väggen som är sammanfogad i den bortre änden, och en ny {{ui:Tjocklek}} växer bort från den {{ui:Placeringslinje}} du valt (vänster sida, höger sida eller mitten).

## Lås väggar

Ett lås stannar kvar hos väggen i filen. Flyttar du en låst vägg följer den andra med. Om en ändring flyttar båda väggarna olika nekas den och ingenting ändras.

- `WALLHOLD`: lås en vägg till en annan vägg. `A` flyttar den först till den andra väggens linje, `K` behåller det avstånd den har.
- `WALLHOLDDIM`: lås avståndet mellan två parallella väggar.
- `WALLGRID`: lås en vägg till en rutnätslinje (en linje på ett rutnätslager med sin beteckning i text vid ena änden), antingen längs den eller med ena änden på den. En vägg som är låst längs linjen behåller det avstånd den har från den. Flyttar du rutnätslinjen med `GRIDMOVE` följer väggen hela vägen, med sina sammanfogade väggar. En vägg som ligger längs en rutnätslinje flyttas hel med den även utan lås, och en vägg som bara slutar på linjen sträcks ut av den änden.
- `WALLHOLDS` listar låsen. `WALLUNHOLD` tar bort låsen från en vägg.
- Varje lås visas som en liten hänglås på planen: bredvid mitten av den låsta väggen, eller bredvid änden som är låst till en rutnätslinje. Klicka på en hänglås för att ta bort det låset.

## Vad som inte finns här än

Lås använder väggarnas mittlinjer. Väggar här har inga lager, så det finns ingen lagerprioritet i en knutpunkt, och väggarna kröker sig inte (se bågar ovan). Ingen har provat dessa verktyg på en stor ritning, och de har inte kontrollerats i något annat CAD-program.
