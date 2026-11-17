---
title: Veggformer, kutt, forskyvninger og låser for 2D-vegger
summary: Tegn vegger som rektangler, mangekanter og buer, del dem og sett dem sammen igjen, flytt dem med en måling, og lås én vegg til en annen eller til en rutenettlinje. De samme verktøyene som veggene i BimCraft.
keywords: vegg, veggverktøylinje, veggknapper, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, sammenføyningsstil, gering, butt, rett av, hengelås, håndtak, dra ende, roter, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, sammenføy, ikke tillat sammenføyning, lås, rutenettlinje, del, mellomrom, forskyv, plasseringslinje
from: f41e7433
---

Disse verktøyene virker på 2D-veggene fra `WALL` (se «Tegn smarte vegger, dører og vinduer i 2D»). De bruker de samme reglene som veggverktøyene i BimCraft, så en vegg oppfører seg likt i begge.

## Hvor verktøyene er

- På verktøylinjen har gruppen {{ui:Vegger}} {{ui:Vegg}}, {{ui:Rektangel}}, {{ui:Del}} og {{ui:Forskyv}}. Menyen {{ui:Mer}} har alle de andre veggverktøyene, hver med ikonet sitt.
- I bånd-menystilene har fanen {{ui:Vegger}} panelene {{ui:Tegn vegger}}, {{ui:Klipp ut}}, {{ui:Angi og endre}}, {{ui:Hold}} og {{ui:Slå sammen}}.
- I et layout viser verktøyradene og verktøykassen den samme gruppen {{ui:Vegger}}.
- Du kan også skrive inn en hvilken som helst kommando nevnt nedenfor.

## Sammenføyninger lagres

Når en veggende havner på en annen vegg, lagrer CadCraft den sammenføyningen med begge veggene. Den regner ikke lenger ut sammenføyningene på nytt ut fra der endene tilfeldigvis står. Det betyr:

- Vegger som er sammenføyd med en vegg du flytter, følger den og forblir sammenføyd. Endene glir langs sine egne linjer, så ingenting vrir seg.
- Dra én ende av en vegg i håndtaket, så beholder veggen som er sammenføyd der, også sin retning. Endene glir langs sin egen linje for å møte den dratte veggen, så den dratte enden havner på den linjen, ikke alltid under pekeren. Forhåndsvisningen viser hvor. En vegg som støter inn i den dratte veggen, følger langs sin egen linje. Hvis du drar enden rett langs veggen, endres lengden, og veggen som er sammenføyd der, flytter seg med den.
- `ROTATE` på en sammenføyd vegg virker på samme måte: endene til naboveggene glir langs sine egne linjer til den roterte veggen.
- For å flytte et hjørne, velg begge veggene som møtes der, og dra håndtaket i hjørnet. Begge veggene blir liggende i hjørnet, og begge roterer. Vegger lenger unna blir som de var.
- Hold {{key:Alt}} når du klikker på håndtakets nye plass, for å bryte sammenføyningene med vilje: veggen går dit du plasserte den, og ingenting følger med.
- Hvis en dra ville vri en sammenføyd vegg tilbake gjennom sin egen fjerne ende, blir den avvist, og ingenting endres.
- En vegg du tegner med {{ui:Ikke tillat sammenføyning}} (`D` i `WALL`), eller slår av i Egenskaper ({{ui:Ikke tillat sammenføyning ved start}}, {{ui:Ikke tillat sammenføyning ved slutt}}), forblir fri i den enden, selv om den berører en annen vegg, til du tillater det igjen.
- `WALLDISJOIN` ({{ui:Ikke tillat sammenføyning}} i gruppen {{ui:Vegger}}) gjør det samme med ett klikk: klikk på en vegg nær den ene enden for å ikke tillate sammenføyning der, og klikk igjen for å tillate den.
- En eldre tegning har ennå ingen lagrede sammenføyninger. Den første endringen du gjør, finner dem én gang, ut fra hvordan veggene sto før endringen, og lagrer dem. `WALLJOINS` gjør det med en gang.
- DWG- og DXF-filer bærer sammenføyningene inne i hver vegg. CadCraft leser dem tilbake slik de ble lagret. Et program som ikke tar vare på utvidede data, viser veggene som vanlige blokker og mister sammenføyningene. En sammenføyning der veggene er flyttet i et annet program, blir fjernet neste gang du endrer en av veggene.

## Sammenføyningsstil i et hjørne

Et hjørne der to vegger møtes ende mot ende, tegnes som gering hvis du ikke velger en annen stil.

- `WALLJOINSTYLE` ({{ui:Sammenføyningsstil}} i gruppen {{ui:Vegger}}): klikk på hjørnet. Hvert klikk går til neste stil: {{ui:Gering}}, {{ui:Butt}}, {{ui:Rett av}}, og så {{ui:Gering}} igjen. Skriv `T` for å bytte hvilken av de to veggene som går gjennom i hjørnet du klikket sist. Trykk {{key:Enter}} for å avslutte. Én kjøring av kommandoen er ett angrestegg.
- {{ui:Butt}}: én vegg går gjennom til den fjerne flaten på den andre, og den andre stopper mot siden av den. {{ui:Rett av}}: det samme, men veggen som går gjennom, ender rett på seg selv. I en rett vinkel ser de to like ut.
- I Egenskaper for en vegg: {{ui:Sammenføyningsstil ved start}}, {{ui:Sammenføyningsstil ved slutt}}, og {{ui:Går gjennom ved start}}, {{ui:Går gjennom ved slutt}}.
- Stilen lagres med begge veggene og følger med i DWG- og DXF-filer. En kopi av en vegg starter uten den.
- En T-sammenføyning har ingen stil å velge: veggen som har siden sin møtt, går gjennom. Et hjørne der tre eller flere vegger møtes, forblir gering. Det samme gjelder et veldig spisst hjørne (under omtrent 30 grader) og to vegger på én linje.

## Tegn veggformer

Hver av dem lager veggene i ett angrestegg, med hjørnene sammenføyd. I `WALL` setter `O` en plasseringsforskyvning (hvor langt til venstre for klikkene dine veggen går), og `D` slår av sammenføyning for veggene du tegner etterpå.

- `WALLRECT` (`WR`): to motsatte hjørner, som `RECTANG`.
- `WALLROT`: første side, deretter hvor langt den andre siden går ut, for et rektangel i en hvilken som helst vinkel.
- `WALLPOLY` (`WP`): antall sider (3 til 64), sentrum, `I` for innskrevet eller `C` for omskrevet, deretter radius, som `POLYGON`.
- `WALLARC` (`WARC`): sentrum, start, slutt. `D` snur buen den andre veien.
- `WALLTAN`: klikk nær enden av en vegg, deretter enden av buen, som går ut langs den veggen.
- `WALLPICK`: klikk på en linje eller polylinje, og si om du også vil ta med linjene som er sammenføyd med den.
- `WALLTRACE`: klikk inne i et lukket område av linjer og vegger for å legge vegger rundt det minste.

Plantegningsvegger er rette, så en bue tegnes som korte vegger på 15 grader hver. De sammenføyes som et hvilket som helst hjørne.

## Kutt vegger

- `WALLSPLIT` (`WS`): klikk på veggen, deretter på punktet. `C` kutter der en annen vegg krysser den, `G` lar det bli et mellomrom mellom delene, `F` gjør kuttenderne frie i stedet for sammenføyd. Den første delen beholder veggens plass i tegningen, og dører og vinduer følger sin del. Et kutt gjennom en dør eller et vindu blir avvist.
- {{ui:Del med mellomrom}} (`WALLSPLITGAP`): den samme delingen, men den spør etter mellomrommet først.
- `WALLDELSEG`: klikk på veggen, deretter på de to endene av stykket som skal slettes.
- `WALLREJOIN`: klikk på to deler av én vegg for å gjøre dem til én igjen.

## Flytt vegger med en avstand

- `WALLDIM`: klikk på en lineær eller innrettet måltilsetting som går fra én vegg til en annen, og skriv inn den nye verdien. Veggen i den fjerne enden flytter seg vinkelrett på seg selv, veggen i den første enden holder seg, og veggene som er sammenføyd med den, følger.
- `WALLOFFSET` (`WO`): klikk på en vegg, deretter på siden den skal flyttes til (`D` skriver inn en avstand, `C` lager en kopi i stedet).
- `WALLSTRETCH`: et vindu rundt veggendene, deretter et basispunkt og et andre punkt.
- I Egenskaper: en skrevet {{ui:Lengde}} beholder starten og tar med veggen som er sammenføyd i den fjerne enden, og en ny {{ui:Tykkelse}} vokser bort fra {{ui:Plasseringslinje}} du valgte (venstre flate, høyre flate eller midten).

## Lås vegger

En lås blir værende med veggen i filen. Hvis du flytter én låst vegg, følger den andre. Hvis en endring flytter begge veggene ulikt, blir den avvist, og ingenting endres.

- `WALLHOLD`: lås en vegg til en annen vegg. `A` flytter den først inn på den andre veggens linje, `K` beholder avstanden den har.
- `WALLHOLDDIM`: lås avstanden mellom to parallelle vegger.
- `WALLGRID`: lås en vegg til en rutenettlinje (en linje på et rutenett-layer med merket sitt som tekst i den ene enden), enten langs den eller med den ene enden på den. En vegg låst langs linjen beholder avstanden den har fra den. Flytter du rutenettlinjen med `GRIDMOVE`, følger veggen med hel, sammen med veggene den er sammenføyd med. En vegg som ligger langs en rutenettlinje, flytter seg hel med den selv uten lås, og en vegg som bare slutter på linjen, strekkes av den enden.
- `WALLHOLDS` lister låsene. `WALLUNHOLD` fjerner låsene fra en vegg.
- Hver lås vises som en liten hengelås på planen: ved midten av den låste veggen, eller ved enden som er låst til en rutenettlinje. Klikk på en hengelås for å fjerne den låsen.

## Hva som ikke er her ennå

Låser bruker midtlinjene til veggene. Vegger her har ingen layer, så det er ingen layer-prioritet i et sammenføyningspunkt, og veggene bøyer seg ikke (se buene ovenfor). Ingen har prøvd disse verktøyene på en stor tegning, og de er ikke kontrollert i et annet CAD-program.
