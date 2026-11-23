---
title: Väggformer, skärningar, förskjutningar och lås för 2D-väggar
summary: Rita väggar som rektanglar, polygoner och bågar, dela och förena dem igen, flytta dem med ett mått, och lås en vägg till en annan eller till en rutnätslinje. Samma verktyg som BimCrafts väggar.
keywords: vägg, väggar, väggverktygsfält, väggknappar, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, sammanfogningsstil, geringsfog, platt, kapat, hänglås, handtag, dra i ände, rotera, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, sammanfoga, tillåt inte sammanfogning, lås, rutnätslinje, dela, mellanrum, förskjutning, placeringslinje
from: 49044181
---

De här verktygen arbetar på 2D-väggarna från `WALL` (se "Rita smarta väggar, dörrar och fönster i 2D"). De använder samma regler som väggverktygen i BimCraft, så en vägg beter sig likadant i båda.

## Var verktygen finns

- I verktygsfältet har gruppen {{ui:Väggar}} {{ui:Vägg}}, {{ui:Rektangel}}, {{ui:Dela}} och {{ui:Förskjut}}. Dess {{ui:Mer}}-meny har alla andra väggverktyg, var och en med sin ikon.
- I menystilarna med menyflik har fliken {{ui:Väggar}} panelerna {{ui:Rita väggar}}, {{ui:Klipp ut}}, {{ui:Ange och ändra}}, {{ui:Håll}} och {{ui:Sammanfoga}}.
- I en layout visar verktygsraderna och verktygslådan samma grupp {{ui:Väggar}}.
- Du kan också skriva vilket kommando som helst som nämns nedan.

## Sammanfogningar sparas

När en väggände hamnar på en annan vägg sparar CadCraft den sammanfogningen med båda väggarna. Den räknar inte längre ut sammanfogningarna från var ändarna råkar ligga. Alltså:

- Väggar som är förenade med en vägg du flyttar följer med och förblir förenade. Deras ändar glider längs sina egna linjer, så ingenting vrids.
- Drar du i en väggände med dess handtag behåller väggen förenad där sin riktning också. Dess ände glider längs sin egen linje för att möta den dragna väggen, så den dragna änden hamnar på den linjen, inte alltid under markören. Förhandsvisningen visar var. En vägg som stöter mot den dragna väggen följer längs sin egen linje. Drar du änden rakt längs väggen ändras dess längd, och väggen förenad där flyttar med den.
- `ROTATE` på en förenad vägg fungerar på samma sätt: grannarnas ändar glider längs sina egna linjer till den vridna väggen.
- För att flytta ett hörn, markera båda väggarna som möts där och dra i handtaget på hörnet. Båda väggarna står kvar i hörnet och båda vrids. Väggar längre bort förblir som de var.
- Håll ned {{key:Alt}} när du klickar på handtagets nya plats för att avsiktligt bryta sammanfogningarna: väggen går dit du placerade den och inget följer med.
- Om en dragning skulle vrida en förenad vägg tillbaka genom sin egen fjärrände avvisas den, och ingenting ändras.
- En vägg du ritar med {{ui:Tillåt inte sammanfogningar}} (`D` i `WALL`), eller stänger av i Egenskaper ({{ui:Tillåt inte sammanfogning i början}}, {{ui:Tillåt inte sammanfogning i slutet}}), förblir fri i den änden även om den rör en annan vägg, tills du tillåter det igen.
- `WALLDISJOIN` ({{ui:Tillåt inte sammanfogningar}} i gruppen {{ui:Väggar}}) gör detsamma med ett klick: klicka på en vägg nära en ände för att inte tillåta sammanfogningar där, och klicka igen för att tillåta dem.
- En äldre ritning har inga sparade sammanfogningar än. Den första ändring du gör hittar dem en gång, utifrån hur väggarna stod före ändringen, och sparar dem. `WALLJOINS` gör det direkt.
- DWG- och DXF-filer bär sammanfogningarna inuti varje vägg. CadCraft läser dem tillbaka som sparade. Ett program som inte sparar utökad data visar väggarna som vanliga block och tappar sammanfogningarna, och en sammanfogning vars väggar flyttats i ett annat program tappas nästa gång du ändrar någon av väggarna.

## Sammanfogningsstil i ett hörn

Ett hörn där två väggar möts ände mot ände ritas som geringsfog om du inte väljer en annan stil.

- `WALLJOINSTYLE` ({{ui:Sammanfogningsstil}} i gruppen {{ui:Väggar}}): klicka på hörnet. Varje klick går till nästa stil: {{ui:Geringsfog}}, {{ui:Platt}}, {{ui:Kapat}}, sedan {{ui:Geringsfog}} igen. Skriv `T` för att byta vilken av de två väggarna som går igenom vid hörnet du klickade sist. Tryck på {{key:Enter}} för att avsluta. En körning av kommandot är ett ångra-steg.
- {{ui:Platt}}: en vägg går igenom till den andra väggens bortre yta, och den andra stannar mot dess sida. {{ui:Kapat}}: detsamma, men väggen som går igenom slutar vinkelrätt mot sig själv. I en rät vinkel ser de två likadana ut.
- I Egenskaper för en vägg: {{ui:Sammanfogningsstil vid start}}, {{ui:Sammanfogningsstil vid slut}}, samt {{ui:Går igenom vid start}}, {{ui:Går igenom vid slut}}.
- Stilen sparas med båda väggarna och följer med i DWG- och DXF-filer. En kopia av en vägg startar utan den.
- En T-sammanfogning har ingen stil att välja: väggen vars sida mötts går igenom. Ett hörn där tre eller fler väggar möts förblir geringsfog. Det gör även ett mycket spetsigt hörn (under ungefär 30 grader) och två väggar på samma linje.

## Rita väggformer

Varje gör väggarna i ett ångra-steg, med hörnen sammanfogade. I `WALL` sätter `O` en placeringsförskjutning (hur långt till vänster om dina klick väggen går), och `D` stänger av sammanfogning för de väggar du ritar härnäst.

- `WALLRECT` (`WR`): två motstående hörn, som `RECTANG`.
- `WALLROT`: första sidan, sedan hur långt ut den andra sidan går, för en rektangel i valfri vinkel.
- `WALLPOLY` (`WP`): antalet sidor (3 till 64), mittpunkten, `I` för inskriven eller `C` för omskriven, sedan radien, som `POLYGON`: klicka den, eller skriv den (en inskriven radie går mot pekaren, eller längs X när pekaren fortfarande är på mittpunkten).
- `WALLARC` (`WARC`): mittpunkt, start, slut. `D` vänder bågen åt det andra hållet.
- `WALLTAN`: klicka nära änden av en vägg, sedan bågens slut, som lämnar längs den väggen.
- `WALLPICK`: klicka på en linje eller polylinje och säg om du också ska ta de linjer som är förenade med den.
- `WALLTRACE`: klicka inuti en sluten yta av linjer och väggar för att lägga väggar runt den minsta.

Planväggar är räta, så en båge ritas som korta räta väggar på 15 grader vardera. De förenas som vilket hörn som helst.

## Klipp väggar

- `WALLSPLIT` (`WS`): klicka på väggen, sedan på punkten. `C` klipper där en annan vägg korsar den, `G` lämnar ett mellanrum mellan delarna, `F` gör de klippta ändarna fria i stället för förenade. Den första delen behåller väggens plats i ritningen, och dörrar och fönster följer sin del. Ett klipp genom en dörr eller ett fönster avvisas.
- `WALLSPLITGAP` ({{ui:Dela med mellanrum}}): samma delning, men den frågar efter mellanrummet först.
- `WALLDELSEG`: klicka på väggen, sedan på de två ändarna av biten som ska tas bort.
- `WALLREJOIN`: klicka på två delar av en och samma vägg för att göra dem till en igen.

## Flytta väggar med ett mått

- `WALLDIM` ({{ui:Redigera efter mått}}): klicka på ett linjärt eller justerat mått som går från en vägg till en annan, och skriv sedan det nya värdet. Väggen vid fjärränden flyttas vinkelrätt mot sig själv, väggen vid första änden står kvar, och väggarna förenade med den följer. Måttets fjärrpunkt flyttas med sin vägg, så måttet visar värdet du skrev.
- `WALLOFFSET` (`WO`): klicka på en vägg, sedan på sidan att flytta den till (`D` skriver ett avstånd, `C` gör en kopia i stället).
- `WALLSTRETCH`: ett fönster runt väggändarna, sedan en basspunkt och en andra punkt.
- I Egenskaper: en skriven {{ui:Längd}} behåller starten och tar med sig väggen förenad vid den bortre änden, och en ny {{ui:Tjocklek}} växer bort från den {{ui:Placeringslinje}} du valt (vänster yta, höger yta eller mitten).

## Mått mellan väggars mittlinjer

En väggs mittlinje ritas inte, men objektfångst hittar den. Med objektfångst på ({{key:F3}}) för du pekaren över mitten av väggens tjocklek: markeringen säger `Wall center: endpoint` eller `Wall center: midpoint`, och mittlinjen visas som en streckad linje medan markeringen ligger på den. Med {{ui:Vinkelrät}} eller {{ui:Närmaste}} påslagna i objektfångstlistan fungerar de även mot mittlinjen.

1. Starta `DIMLINEAR` (eller `DIMALIGNED`).
2. Klicka på den första väggen där markeringen säger `Wall center: midpoint` eller `Wall center: endpoint`.
3. Klicka på den andra väggen på samma sätt, och klicka sedan där måttlinjen ska ligga.
4. För att ändra avståndet, starta `WALLDIM`, klicka på måttet och skriv det nya värdet. Den andra väggen flyttas.

Mittlinjefångsten fungerar i varje kommando som frågar efter en punkt.

## Lås väggar

Ett lås stannar med väggen i filen. Flyttar du en låst vägg följer den andra. Om en ändring flyttar båda väggarna olika avvisas den och ingenting ändras.

- `WALLHOLD`: lås en vägg till en annan vägg. `A` flyttar den först till den andra väggens linje, `K` behåller avståndet den har.
- `WALLHOLDDIM`: lås avståndet mellan två parallella väggar.
- `WALLGRID`: lås en vägg till en rutnätslinje (en linje på ett rutnätslager med sin etikett som text i ena änden), antingen längs den eller med ena änden på den. En vägg låst längs linjen behåller det avstånd den har från den. Flytta rutnätslinjen med `GRIDMOVE` och väggen följer hela vägen, med sina förenade väggar. En vägg som ligger längs en rutnätslinje flyttas hel med den även utan lås, och en vägg som bara slutar på linjen sträcks av den änden.
- `WALLHOLDS` listar låsen. `WALLUNHOLD` tar bort låsen från en vägg.
- Varje lås visar ett litet hänglås i planen: bredvid mitten av den låsta väggen, eller bredvid änden som är låst till en rutnätslinje. Klicka på ett hänglås för att ta bort det låset.

## Vad som inte finns här än

Lås använder väggarnas mittlinjer. Väggar här har inga lager, så det finns ingen lagerprioritet vid en skarv, och väggarna kröks inte (se bågar ovan). Ingen har prövat dessa verktyg på en stor ritning, och de har inte kontrollerats i något annat CAD-program.
