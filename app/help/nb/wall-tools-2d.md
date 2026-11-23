---
title: Veggformer, kutt, forskyvninger og låser for 2D-vegger
summary: Tegn vegger som rektangler, mangekanter og buer, del dem og sett dem sammen igjen, flytt dem med et mål, og lås en vegg til en annen eller til en rutenettlinje. De samme verktøyene som veggene i BimCraft.
keywords: vegg, vegger, veggverktøylinje, veggknapper, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, sammenføyningsstil, gjæring, butt, rett av, hengelås, håndtak, dra ende, roter, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, sammenføy, ikke tillat sammenføyning, lås, rutenettlinje, del, mellomrom, forskyvning, posisjonslinje
from: 49044181
---

Disse verktøyene virker på 2D-veggene fra `WALL` (se «Tegn smarte vegger, dører og vinduer i 2D»). De bruker de samme reglene som veggverktøyene i BimCraft, så en vegg oppfører seg likt i begge.

## Hvor verktøyene er

- På verktøylinjen har gruppen {{ui:Vegger}} {{ui:Vegg}}, {{ui:Rektangel}}, {{ui:Del}} og {{ui:Forskyv}}. Menyen {{ui:Mer}} har alle de andre veggverktøyene, hver med sitt ikon.
- I båndmenystilene har fanen {{ui:Vegger}} panelene {{ui:Tegn vegger}}, {{ui:Kutt}}, {{ui:Sett og endre}}, {{ui:Hold}} og {{ui:Sammenføy}}.
- I et layout viser verktøyradene og verktøykassen samme gruppe {{ui:Vegger}}.
- Du kan også skrive et hvilket som helst kommandonavn nedenfor.

## Sammenføyninger lagres

Når en veggende havner på en annen vegg, lagrer CadCraft sammenføyningen med begge veggene. Den regner ikke lenger sammenføyningene ut på nytt fra hvor endene tilfeldigvis står. Så:

- Vegger som er sammenføyd med en vegg du flytter, følger den og blir sammenføyd. Endene deres glir langs sine egne linjer, så ingenting dreies.
- Drar du én ende av en vegg med håndtaket, beholder veggen som er sammenføyd der, også sin retning. Enden glir langs sin egen linje for å møte den dratte veggen, så den dratte enden havner på den linjen, ikke alltid under markøren. Forhåndsvisningen viser hvor. En vegg som støter inn i den dratte veggen, følger langs sin egen linje. Drar du enden rett langs veggen, endres lengden, og veggen som er sammenføyd der, flyttes med den.
- `ROTATE` på en sammenføyd vegg virker på samme måte: endene av naboene glir langs sine egne linjer til den dreide veggen.
- For å flytte et hjørne, velg begge veggene som møtes der, og dra håndtaket i hjørnet. Begge veggene blir liggende i hjørnet, og begge dreies. Vegger lenger ute blir som de var.
- Hold {{key:Alt}} når du klikker det nye stedet for håndtaket, for å bryte sammenføyningene med vilje: veggen går dit du satte den, og ingenting følger.
- Hvis et drag ville dreie en sammenføyd vegg tilbake gjennom sin egen fjerne ende, avvises det, og ingenting endres.
- En vegg du tegner med {{ui:Ikke tillat sammenføyning}} (`D` i `WALL`), eller slår av i Egenskaper ({{ui:Ikke tillat sammenføyning ved start}}, {{ui:Ikke tillat sammenføyning ved slutt}}), forblir fri i den enden, selv om den berører en annen vegg, til du tillater det igjen.
- `WALLDISJOIN` ({{ui:Ikke tillat sammenføyning}} i gruppen {{ui:Vegger}}) gjør det samme med et klikk: klikk en vegg nær en ende for å ikke tillate sammenføyninger der, og klikk den igjen for å tillate dem.
- En eldre tegning har ingen lagrede sammenføyninger ennå. Den første endringen du gjør, finner dem én gang, fra hvordan veggene sto før endringen, og lagrer dem. `WALLJOINS` gjør det med en gang.
- DWG- og DXF-filer bærer sammenføyningene inne i hver vegg. CadCraft leser dem tilbake som lagret. Et program som ikke beholder utvidede data, viser veggene som vanlige blokker og dropper sammenføyningene. En sammenføyning hvis vegger ble flyttet i et annet program, droppes neste gang du endrer en av veggene.

## Sammenføyningsstil i et hjørne

Et hjørne der to vegger møtes ende mot ende, tegnes som en gjæring med mindre du velger en annen stil.

- `WALLJOINSTYLE` ({{ui:Sammenføyningsstil}} i gruppen {{ui:Vegger}}): klikk hjørnet. Hvert klikk går til neste stil: {{ui:Gjæring}}, {{ui:Butt}}, {{ui:Rett av}}, og så {{ui:Gjæring}} igjen. Skriv `T` for å bytte hvilken av de to veggene som går gjennom ved hjørnet du klikket sist. Trykk {{key:Enter}} for å fullføre. Én kjøring av kommandoen er ett angretrinn.
- {{ui:Butt}}: én vegg går gjennom til den fjerne flaten av den andre, og den andre stopper mot dens side. {{ui:Rett av}}: det samme, men veggen som går gjennom, ender rettvinklet på seg selv. I en rett vinkel ser de to likt ut.
- I Egenskaper for en vegg: {{ui:Sammenføyningsstil ved start}}, {{ui:Sammenføyningsstil ved slutt}}, og {{ui:Går gjennom ved start}}, {{ui:Går gjennom ved slutt}}.
- Stilen lagres med begge veggene og reiser med i DWG- og DXF-filer. En kopi av en vegg starter uten den.
- En T-sammenføyning har ingen stil å velge: veggen hvis side møtes, går gjennom. Et hjørne der tre eller flere vegger møtes, forblir en gjæring. Det samme gjelder et svært skarpt hjørne (under omtrent 30 grader) og to vegger på én linje.

## Tegn veggformer

Hver av dem lager veggene i ett angretrinn, med hjørnene sammenføyd. I `WALL` setter `O` en plasseringsforskyvning (hvor langt til venstre for klikkene veggen går), og `D` slår av sammenføyning for veggene du tegner neste.

- `WALLRECT` (`WR`): to motsatte hjørner, som `RECTANG`.
- `WALLROT`: den første siden, deretter hvor langt ut den andre siden går, for et rektangel i en hvilken som helst vinkel.
- `WALLPOLY` (`WP`): antall sider (3 til 64), senteret, `I` for innskrevet eller `C` for omskrevet, deretter radiusen, som `POLYGON`: klikk den, eller skriv den. En skrevet radius går mot pekeren, eller langs X når pekeren fortsatt står på senteret.
- `WALLARC` (`WARC`): senter, start, slutt. `D` snur buen den andre veien.
- `WALLTAN`: klikk nær enden av en vegg, og deretter enden av buen, som forlater langs den veggen.
- `WALLPICK`: klikk en linje eller polylinje, og si om du også vil ta med linjene som er sammenføyd med den.
- `WALLTRACE`: klikk inne i et lukket område av linjer og vegger for å sette vegger rundt det minste.

Plan-vegger er rette, så en bue tegnes som korte rette vegger på 15 grader hver. De møtes som ethvert hjørne.

## Kutt vegger

- `WALLSPLIT` (`WS`): klikk veggen, deretter punktet. `C` kutter der en annen vegg krysser den. `G` lar et mellomrom stå mellom delene. `F` gjør de kuttede endene frie i stedet for sammenføyd. Den første delen beholder veggens plass i tegningen, og dører og vinduer følger sin del. Et kutt gjennom en dør eller et vindu avvises.
- `WALLSPLITGAP` ({{ui:Del med mellomrom}}): den samme delingen, men den spør først etter mellomrommet.
- `WALLDELSEG`: klikk veggen, deretter de to endene av stykket som skal slettes.
- `WALLREJOIN`: klikk to deler av én vegg for å gjøre dem til én igjen.

## Flytt vegger med et mål

- `WALLDIM` ({{ui:Rediger etter mål}}): klikk et lineært eller innrettet mål som går fra en vegg til en annen, og skriv deretter den nye verdien. Veggen i den fjerne enden flytter seg vinkelrett på seg selv, veggen i den første enden holder seg, og veggene som er sammenføyd med den, følger. Målets fjerne punkt flytter seg med veggen sin, så målet viser verdien du skrev.
- `WALLOFFSET` (`WO`): klikk en vegg, deretter siden å flytte den til (`D` skriver inn en avstand, `C` lager en kopi i stedet).
- `WALLSTRETCH`: et vindu rundt veggendene, deretter et basispunkt og et annet punkt.
- I Egenskaper: en skrevet {{ui:Lengde}} beholder starten og tar med veggen som er sammenføyd i den fjerne enden. En ny {{ui:Tykkelse}} vokser bort fra {{ui:Posisjonslinje}} du valgte (venstre flate, høyre flate eller midten).

## Mål mellom veggsentre

En veggs senterlinje tegnes ikke, men objektfang finner den. Med objektfang på ({{key:F3}}) beveger du pekeren over midten av en veggs tykkelse: markøren viser `Wall center: endpoint` eller `Wall center: midpoint`, og senterlinjen vises som en stiplet linje mens markøren er på den. Med {{ui:Vinkelrett}} eller {{ui:Nærmeste}} slått på i listen over objektfang, virker de også på senterlinjen.

1. Start `DIMLINEAR` (eller `DIMALIGNED`).
2. Klikk den første veggen der markøren viser `Wall center: midpoint` eller `Wall center: endpoint`.
3. Klikk den andre veggen på samme måte, og klikk deretter der målelinjen skal gå.
4. For å endre avstanden starter du `WALLDIM`, klikker målet og skriver den nye verdien. Den andre veggen flytter seg.

Senterlinjefanget virker i hver kommando som ber om et punkt.

## Lås vegger

En lås blir med veggen i filen. Flytter du én låst vegg, følger den andre. Endrer én endring begge veggene ulikt, avvises den, og ingenting endres.

- `WALLHOLD`: lås en vegg til en annen vegg. `A` flytter den først inn på den andre veggens linje, `K` beholder avstanden den har.
- `WALLHOLDDIM`: lås avstanden mellom to parallelle vegger.
- `WALLGRID`: lås en vegg til en rutenettlinje (en linje på et rutenettlag med sin merkelapp som tekst i den ene enden), enten langs den eller med en ende på den. En vegg låst langs linjen beholder avstanden den har fra den. Flytt rutenettlinjen med `GRIDMOVE`, så følger veggen hel, med sine sammenføyde vegger. En vegg som ligger langs en rutenettlinje, flytter seg hel med den, selv uten lås. En vegg som bare ender på linjen, strekkes av den enden.
- `WALLHOLDS` lister låsene. `WALLUNHOLD` tar låsene bort fra en vegg.
- Hver lås viser en liten hengelås på planen: ved siden av midten av den låste veggen, eller ved siden av enden som er låst til en rutenettlinje. Klikk en hengelås for å ta den låsen bort.

## Hva som ikke er her ennå

Låser bruker veggenes senterlinjer. Vegger her har ingen lag, så det er ingen lagprioritet i et skjæringspunkt, og veggene krummer ikke (se buer over). Ingen har prøvd disse verktøyene på en stor tegning, og de er ikke sjekket i et annet CAD-program.
