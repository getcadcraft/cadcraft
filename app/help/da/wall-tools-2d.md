---
title: Vægformer, snit, forskydninger og låse til 2D-vægge
summary: Tegn vægge som rektangler, polygoner og buer, del og sammenføj dem igen, flyt dem efter en målsætning, og lås en væg til en anden væg eller til en gitterlinje. Samme værktøjer som BimCrafts vægge.
keywords: væg, vægværktøjslinje, vægknapper, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, sammenføjningsstil, gering, flad, afskåret, hængelås, greb, træk ende, roter, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, sammenføj, forbyd sammenføjning, lås, gitterlinje, del, mellemrum, forskydning, placeringslinje
from: 49044181
---

Disse værktøjer virker på de 2D-vægge fra `WALL` (se »Tegn smarte vægge, døre og vinduer i 2D«). De bruger de samme regler som vægværktøjerne i BimCraft, så en væg opfører sig ens i begge.

## Hvor værktøjerne er

- På værktøjslinjen har gruppen {{ui:Vægge}} {{ui:Væg}}, {{ui:Rektangel}}, {{ui:Del}} og {{ui:Forskyd}}. Dens menu {{ui:Mere}} har alle de andre vægværktøjer, hver med sit ikon.
- I bånd-menustilene har fanen {{ui:Vægge}} panelerne {{ui:Tegn vægge}}, {{ui:Klip}}, {{ui:Angiv og ændr}}, {{ui:Hold}} og {{ui:Sammenføj}}.
- I et layout viser værktøjsrækkerne og værktøjskassen den samme gruppe {{ui:Vægge}}.
- Du kan også skrive en hvilken som helst kommando, der er navngivet nedenfor.

## Sammenføjninger gemmes

Når en vægende lander på en anden væg, gemmer CadCraft den sammenføjning med begge vægge. Den regner ikke længere sammenføjningerne ud fra, hvor enderne tilfældigvis ligger. Så:

- Vægge, der er sammenføjet med en væg du flytter, følger den og forbliver sammenføjet. Deres ender glider langs deres egne linjer, så intet drejer.
- Træk den ene ende af en væg med dens greb, og væggen sammenføjet der beholder sin retning. Dens ende glider langs sin egen linje for at møde den trukne væg, så den trukne ende lander på den linje, ikke altid under markøren. Forhåndsvisningen viser, hvor. En væg, der støder ind i den trukne væg, følger langs sin egen linje. Træk enden lige langs væggen ændrer dens længde, og væggen sammenføjet der flytter sig med den.
- `ROTATE` på en sammenføjet væg virker på samme måde: enderne af dens naboer glider langs deres egne linjer hen til den drejede væg.
- For at flytte et hjørne vælg begge vægge, der mødes der, og træk i grebet på hjørnet. Begge vægge bliver på hjørnet, og begge drejer. Vægge længere fremme bliver, som de var.
- Hold {{key:Alt}}, når du klikker på grebets nye sted, for at bryde sammenføjningerne med vilje: væggen går, hvor du satte den, og intet følger.
- Hvis et træk ville dreje en sammenføjet væg tilbage gennem sin egen fjerne ende, afvises det, og intet ændres.
- En væg du tegner med {{ui:Tillad ikke sammenføjninger}} (`D` i `WALL`), eller slår fra i {{ui:Egenskaber}} ({{ui:Tillad ikke sammenføjning ved start}}, {{ui:Tillad ikke sammenføjning ved slut}}), forbliver fri i den ende, selv om den rører en anden væg, indtil du tillader det igen.
- `WALLDISJOIN` ({{ui:Forbyd sammenføjning}} i gruppen {{ui:Vægge}}) gør det samme med et klik: klik på en væg nær den ene ende for at forbyde sammenføjninger i den ende, og klik igen for at tillade dem.
- En ældre tegning har endnu ingen gemte sammenføjninger. Den første ændring, du laver, finder dem én gang, ud fra hvordan væggene stod før ændringen, og gemmer dem. `WALLJOINS` gør det med det samme.
- DWG- og DXF-filer bærer sammenføjningerne inde i hver væg. CadCraft læser dem tilbage, som de blev gemt. Et program, der ikke gemmer udvidede data, viser væggene som almindelige blokke og taber sammenføjningerne, og en sammenføjning, hvis vægge blev flyttet i et andet program, tabes næste gang du ændrer en af væggene.

## Sammenføjningsstil for et hjørne

Et hjørne, hvor to vægge mødes ende mod ende, tegnes som en gering, medmindre du vælger en anden stil.

- `WALLJOINSTYLE` ({{ui:Sammenføjningsstil}} i gruppen {{ui:Vægge}}): klik på hjørnet. Hvert klik går til den næste stil: {{ui:Gering}}, {{ui:Flad}}, {{ui:Afskåret}}, derefter {{ui:Gering}} igen. Skriv `T` for at skifte, hvilken af de to vægge der løber igennem på det hjørne, du klikkede sidst. Tryk {{key:Enter}} for at afslutte. Én kørsel af kommandoen er ét fortrydelsestrin.
- {{ui:Flad}}: én væg løber igennem til den fjerne flade af den anden, og den anden stopper mod dens side. {{ui:Afskåret}}: det samme, men den væg, der løber igennem, ender vinkelret på sig selv. I en ret vinkel ligner de to hinanden.
- I {{ui:Egenskaber}} for en væg: {{ui:Sammenføjningsstil ved start}}, {{ui:Sammenføjningsstil ved slut}}, og {{ui:Løber igennem ved start}}, {{ui:Løber igennem ved slut}}.
- Stilen gemmes med begge vægge og rejser med i DWG- og DXF-filer. En kopi af en væg starter uden den.
- En T-sammenføjning har ingen stil at vælge: væggen, hvis side mødes, løber igennem. Et hjørne, hvor tre eller flere vægge mødes, forbliver en gering. Det samme gælder et meget skarpt hjørne (under ca. 30 grader) og to vægge på én linje.

## Tegn vægformer

Hver af dem laver væggene i ét fortrydelsestrin, med hjørnerne sammenføjet. I `WALL` sætter `O` en placeringsforskydning (hvor langt til venstre for dine klik væggen går), og `D` slår sammenføjning fra for de vægge, du tegner næst.

- `WALLRECT` (`WR`): to modsatte hjørner, ligesom `RECTANG`.
- `WALLROT`: den første side, og derefter hvor langt ud den anden side går, for et rektangel i en vilkårlig vinkel.
- `WALLPOLY` (`WP`): antal sider (3 til 64), centrum, `I` for indskrevet eller `C` for omskrevet, derefter radius, ligesom `POLYGON`: klik på den, eller skriv den (en skrevet radius løber mod markøren, eller langs X når markøren stadig står på centrum).
- `WALLARC` (`WARC`): centrum, start, slut. `D` vender buen den anden vej.
- `WALLTAN`: klik nær enden af en væg, derefter buens ende, som forlader langs den væg.
- `WALLPICK`: klik på en linje eller polylinje, og sig, om du også vil tage linjerne sammenføjet med den.
- `WALLTRACE`: klik inde i et lukket område af linjer og vægge for at lægge vægge rundt om det mindste.

Plan-vægge er lige, så en bue tegnes som korte lige vægge på 15 grader hver. De sammenføjes som ethvert hjørne.

## Skær vægge

- `WALLSPLIT` (`WS`): klik på væggen, derefter punktet. `C` skærer, hvor en anden væg krydser den, `G` efterlader et mellemrum mellem delene, `F` gør snitenderne frie i stedet for sammenføjede. Den første del beholder væggens plads i tegningen, og døre og vinduer følger deres del. Et snit gennem en dør eller et vindue afvises.
- `WALLSPLITGAP` ({{ui:Del med mellemrum}}): samme deling, men den spørger først om mellemrummet.
- `WALLDELSEG`: klik på væggen, derefter de to ender af stykket, der skal slettes.
- `WALLREJOIN`: klik på to dele af én væg for at gøre dem til én igen.

## Flyt vægge efter afstand

- `WALLDIM` ({{ui:Redigér efter målsætning}}): klik på en lineær eller justeret målsætning, der løber fra en væg til en anden, og skriv derefter den nye værdi. Væggen i den fjerne ende flytter sig vinkelret på sig selv, væggen i den første ende holder, og de vægge, der er sammenføjet med den, følger. Målsætningens fjerne punkt flytter sig med sin væg, så målsætningen viser den værdi, du skrev.
- `WALLOFFSET` (`WO`): klik på en væg, derefter den side, den skal flyttes til (`D` skriver en afstand, `C` laver en kopi i stedet).
- `WALLSTRETCH`: et vindue rundt om vægenderne, derefter et basispunkt og et andet punkt.
- I {{ui:Egenskaber}} kan en skrevet {{ui:Længde}} beholde starten og tage væggen sammenføjet i den fjerne ende med sig, og en ny {{ui:Tykkelse}} vokser væk fra den {{ui:Placeringslinje}}, du valgte (venstre flade, højre flade eller midten).

## Målsætning mellem væggenes centerlinjer

En væggs centerlinje tegnes ikke, men objektfang finder den. Med objektfang til ({{key:F3}}) flyt markøren hen over midten af en væggs tykkelse: markøren siger `Wall center: endpoint` eller `Wall center: midpoint`, og centerlinjen vises som en stiplet linje, mens markøren står på den. Med {{ui:Vinkelret}} eller {{ui:Nærmeste}} slået til i objektfanglisten virker de også på centerlinjen.

1. Start `DIMLINEAR` (eller `DIMALIGNED`).
2. Klik på den første væg, hvor markøren siger `Wall center: midpoint` eller `Wall center: endpoint`.
3. Klik på den anden væg på samme måde, og klik derefter, hvor målelinjen skal være.
4. For at ændre afstanden: start `WALLDIM`, klik på målsætningen og skriv den nye værdi. Den anden væg flytter sig.

Centerlinjefangen virker i hver kommando, der spørger efter et punkt.

## Lås vægge

En lås bliver hos væggen i filen. Flytter du en låst væg, følger den anden. Hvis én ændring flytter begge vægge forskelligt, afvises den, og intet ændres.

- `WALLHOLD`: lås en væg til en anden væg. `A` flytter den først over på den andens linje, `K` beholder den afstand, den har.
- `WALLHOLDDIM`: lås afstanden mellem to parallelle vægge.
- `WALLGRID`: lås en væg til en gitterlinje (en linje på et gitterlag med dens mærke som tekst i den ene ende), enten langs den eller med den ene ende på den. En væg låst langs linjen beholder den afstand, den har til den. Flyt gitterlinjen med `GRIDMOVE`, og væggen følger hel, med sine sammenføjede vægge. En væg, der ligger langs en gitterlinje, flytter sig hel med den selv uden en lås, og en væg, der kun ender på linjen, strækkes af den ende.
- `WALLHOLDS` lister låsene. `WALLUNHOLD` tager låsene af en væg.
- Hver lås viser en lille hængelås på planen: ved siden af midten af den låste væg, eller ved siden af enden, der er låst til en gitterlinje. Klik på en hængelås for at fjerne den lås.

## Hvad der ikke er her endnu

Låse bruger væggenes centerlinjer. Vægge her har ikke lag, så der er ingen lagprioritet ved en samling, og vægge bøjer ikke (se buer ovenfor). Ingen har prøvet disse værktøjer på en stor tegning, og de er ikke tjekket i et andet CAD-program.
