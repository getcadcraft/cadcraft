---
title: Vægformer, klip, forskydninger og låse til 2D-vægge
summary: Tegn vægge som rektangler, polygoner og buer, del og sammenføj dem, flyt dem med en målsætning, og lås en væg til en anden væg eller til en gitterlinje. Samme værktøjer som BimCrafts vægge.
keywords: væg, vægværktøjslinje, vægknapper, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, sammenføjningsstil, gering, flad, afskåret, hængelås, greb, træk ende, roter, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, sammenføj, forbyd sammenføjning, lås, gitterlinje, del, mellemrum, forskydning, placeringslinje
from: f41e7433
---

Disse værktøjer virker på de 2D-vægge, der laves med `WALL` (se »Tegn smarte vægge, døre og vinduer i 2D«). De bruger de samme regler som vægværktøjerne i BimCraft, så en væg opfører sig ens i begge.

## Hvor værktøjerne er

- På værktøjslinjen har gruppen {{ui:Vægge}} {{ui:Væg}}, {{ui:Rektangel}}, {{ui:Del}} og {{ui:Forskyd}}. Dens menu {{ui:Mere}} har alle de andre vægværktøjer, hver med sit ikon.
- I båndmenustilene har fanen {{ui:Vægge}} panelerne {{ui:Tegn vægge}}, {{ui:Klip}}, {{ui:Angiv og ændr}}, {{ui:Hold}} og {{ui:Sammenføj}}.
- I et layout viser værktøjsrækkerne og værktøjskassen den samme gruppe {{ui:Vægge}}.
- Du kan også skrive en hvilken som helst kommando, der er nævnt nedenfor.

## Sammenføjninger gemmes

Når en vægende rammer en anden væg, gemmer CadCraft sammenføjningen sammen med begge vægge. Den regner ikke længere sammenføjningerne ud igen ud fra, hvor enderne tilfældigvis ligger. Derfor:

- Vægge, der er sammenføjet med en væg, du flytter, følger med og forbliver sammenføjet. Deres ender glider langs deres egne linjer, så intet drejer.
- Træk den ene ende af en væg i dens greb, og væggen, der er sammenføjet dér, beholder også sin retning. Dens ende glider langs sin egen linje for at møde den trukne væg, så den trukne ende lander på linjen og ikke altid under markøren. Forhåndsvisningen viser, hvor. En væg, der støder op til den trukne væg, følger langs sin egen linje. Trækker du enden lige langs væggen, ændres dens længde, og væggen, der er sammenføjet dér, flytter sig med den.
- `ROTATE` på en sammenføjet væg virker på samme måde: enderne af dens naboer glider langs deres egne linjer hen til den drejede væg.
- Vil du flytte et hjørne, vælger du begge vægge, der mødes dér, og trækker grebet i hjørnet. Begge vægge bliver på hjørnet, og begge drejer. Vægge længere væk bliver, som de var.
- Hold {{key:Alt}} nede, når du klikker på grebets nye placering, for at bryde sammenføjningerne med vilje: væggen går dér, du lægger den, og intet følger med.
- Hvis et træk ville dreje en sammenføjet væg tilbage gennem sin egen fjerne ende, afvises det, og intet ændres.
- En væg, du tegner med {{ui:Tillad ikke sammenføjninger}} (`D` i `WALL`), eller slår fra under {{ui:Egenskaber}} ({{ui:Tillad ikke sammenføjning ved start}}, {{ui:Tillad ikke sammenføjning ved slut}}), forbliver fri i den ende, selv om den rører en anden væg, indtil du tillader det igen.
- `WALLDISJOIN` ({{ui:Forbyd sammenføjning}} i gruppen {{ui:Vægge}}) gør det samme med ét klik: klik på en væg nær den ene ende for at forbyde sammenføjninger i den ende, og klik igen for at tillade dem.
- En ældre tegning har endnu ingen gemte sammenføjninger. Den første ændring, du laver, finder dem én gang, ud fra hvordan væggene stod før ændringen, og gemmer dem. `WALLJOINS` gør det med det samme.
- DWG- og DXF-filer bærer sammenføjningerne inde i hver væg. CadCraft læser dem tilbage, som de er gemt. Et program, der ikke gemmer udvidede data, viser vægge som almindelige blokke og fjerner sammenføjningerne, og en sammenføjning, hvis vægge er flyttet i et andet program, fjernes, næste gang du ændrer en af væggene.

## Sammenføjningsstil for et hjørne

Et hjørne, hvor to vægge mødes ende mod ende, tegnes som en gering, medmindre du vælger en anden stil.

- `WALLJOINSTYLE` ({{ui:Sammenføjningsstil}} i gruppen {{ui:Vægge}}): klik på hjørnet. Hvert klik går til næste stil: {{ui:Gering}}, {{ui:Flad}}, {{ui:Afskåret}}, og derefter {{ui:Gering}} igen. Skriv `T` for at skifte, hvilken af de to vægge der løber igennem i det hjørne, du klikkede på sidst. Tryk {{key:Enter}} for at afslutte. Én kørsel af kommandoen er ét fortrydelsestrin.
- {{ui:Flad}}: den ene væg løber igennem til den fjerne flade på den anden, og den anden stopper mod dens side. {{ui:Afskåret}}: det samme, men den væg, der løber igennem, ender vinkelret på sig selv. Ved en ret vinkel ligner de to hinanden.
- Under {{ui:Egenskaber}} for en væg: {{ui:Sammenføjningsstil ved start}}, {{ui:Sammenføjningsstil ved slut}} og {{ui:Løber igennem ved start}}, {{ui:Løber igennem ved slut}}.
- Stilen gemmes sammen med begge vægge og følger med i DWG- og DXF-filer. En kopi af en væg starter uden den.
- En T-sammenføjning har ingen stil at vælge imellem: væggen, hvis side mødes, løber igennem. Et hjørne, hvor tre eller flere vægge mødes, forbliver en gering. Det samme gælder et meget skarpt hjørne (under ca. 30 grader) og to vægge i samme linje.

## Tegn vægformer

Hver af dem laver væggene i ét fortrydelsestrin, med hjørnerne sammenføjet. I `WALL` angiver `O` en placeringsforskydning (hvor langt til venstre for dine klik væggen går), og `D` slår sammenføjning fra for de vægge, du tegner næste gang.

- `WALLRECT` (`WR`): to modsatte hjørner, ligesom `RECTANG`.
- `WALLROT`: den første side, derefter hvor langt den anden side går ud, for et rektangel i en vilkårlig vinkel.
- `WALLPOLY` (`WP`): antallet af sider (3 til 64), centrum, `I` for indskreven eller `C` for omskreven, derefter radius, ligesom `POLYGON`.
- `WALLARC` (`WARC`): centrum, start, slut. `D` vender buen den anden vej.
- `WALLTAN`: klik nær enden af en væg, derefter buens slutpunkt, som går ud langs den væg.
- `WALLPICK`: klik på en linje eller polylinje, og angiv, om de linjer, der er sammenføjet med den, også skal med.
- `WALLTRACE`: klik inde i et lukket område af linjer og vægge for at lægge vægge rundt om det mindste.

Plan-vægge er lige, så en bue tegnes som korte lige vægge på 15 grader hver. De sammenføjes som ethvert hjørne.

## Klip vægge

- `WALLSPLIT` (`WS`): klik på væggen, derefter punktet. `C` skærer, hvor en anden væg krydser den, `G` lader et mellemrum stå mellem delene, `F` gør snitenderne frie i stedet for sammenføjede. Den første del beholder væggens plads i tegningen, og døre og vinduer følger deres del. Et snit gennem en dør eller et vindue afvises.
- `WALLSPLITGAP` ({{ui:Del med mellemrum}}): samme deling, men den spørger først om mellemrummet.
- `WALLDELSEG`: klik på væggen, derefter de to ender af stykket, der skal slettes.
- `WALLREJOIN`: klik på to dele af én væg for at gøre dem til én igen.

## Flyt vægge efter afstand

- `WALLDIM`: klik på en lineær eller justeret målsætning, der går fra en væg til en anden, og skriv derefter den nye værdi. Væggen i den fjerne ende flytter sig vinkelret på sig selv, væggen i den første ende holder, og de vægge, der er sammenføjet med den, følger med.
- `WALLOFFSET` (`WO`): klik på en væg, og derefter den side, den skal flyttes til (`D` skriver en afstand, `C` laver i stedet en kopi).
- `WALLSTRETCH`: et vindue om vægenderne, derefter et basispunkt og et andet punkt.
- Under {{ui:Egenskaber}} holder en indtastet {{ui:Længde}} startpunktet og tager den væg, der er sammenføjet i den fjerne ende, med sig, og en ny {{ui:Tykkelse}} vokser væk fra den {{ui:Placeringslinje}}, du valgte (venstre flade, højre flade eller midten).

## Lås vægge

En lås bliver hos væggen i filen. Flytter du én låst væg, følger den anden med. Hvis én ændring flytter begge vægge forskelligt, afvises den, og intet ændres.

- `WALLHOLD`: lås en væg til en anden væg. `A` flytter den først over på den anden væg's linje, `K` beholder den afstand, den har.
- `WALLHOLDDIM`: lås afstanden mellem to parallelle vægge.
- `WALLGRID`: lås en væg til en gitterlinje (en linje på et gitterlag med sin etiket som tekst i den ene ende), enten langs den eller med den ene ende på den. En væg låst langs linjen beholder den afstand, den har til den. Flyt gitterlinjen med `GRIDMOVE`, og væggen følger hel med, sammen med sine sammenføjede vægge. En væg, der ligger langs en gitterlinje, flyttes hel med den selv uden lås, og en væg, der kun ender på linjen, strækkes af den ende.
- `WALLHOLDS` viser låsene. `WALLUNHOLD` fjerner låsene fra en væg.
- Hver lås vises med en lille hængelås på planen: ved midten af den låste væg, eller ved enden, der er låst til en gitterlinje. Klik på en hængelås for at fjerne den lås.

## Det, der ikke er her endnu

Låse bruger væggenes midterlinjer. Vægge her har ingen lag, så der er ingen lagprioritet i en forbindelse, og vægge bøjer ikke (se buerne ovenfor). Ingen har prøvet disse værktøjer på en stor tegning, og de er ikke kontrolleret i et andet CAD-program.
