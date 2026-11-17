---
title: Kommandokart: hva du skriver
summary: Alle kommandoer CadCraft har, med korte navn, A til Å, laget fra programmet selv, og vanene fra andre tegneprogrammer som er annerledes.
keywords: kommandokart, kommandoer, aliaser, korte navn, kommer fra, kommandoliste, hva du skriver, slett, trim, tilsvarende, forskjeller
from: 3bdfd3e6
---

CadCraft tar imot kommandonavnene og de korte navnene folk kjenner fra andre tegneprogrammer: skriv `L` for en linje, `TR` for å trimme, `E` for å slette. Det finnes altså ingen oversettelsestabell å lære for de fleste: navnet du kjenner, er navnet her. Listen under er alle kommandoene CadCraft har, laget fra programmet selv. {{key:Enter}} gjentar den siste kommandoen, og `HELP` i kommandolinjen skriver ut den samme listen.

De få som ikke er det samme, eller ikke er bygget:

- **Lagre** laster ned en kopi i nettleseren ({{cmd:SAVE}}, {{cmd:SAVEAS}}); i CadCraft Studio skriver den filen. Se [Kommer fra annen tegneprogramvare](topic:coming-from).
- **PLOT** lager en PDF (også PNG og SVG), med en tabell for plottstiler; det finnes ingen behandling av sideoppsett.
- **DIMSTYLE** og **PEDIT** er bygget; **PEDIT** har ikke valget Rediger toppunkt (håndtakene gjør det).
- **TABLE** er ikke bygget; {{cmd:XREF}}, {{cmd:SPLINE}} og {{cmd:WBLOCK}} er bygget.
- En rutines egne kommandoer (AutoLISP `C:NAVN`) vises når du har lastet den inn med {{cmd:APPLOAD}}; de står ikke her.

## Alle kommandoer (398)

| Kommando | Korte navn | Hva den gjør |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Roter 3D-visningen med venstre knapp |
| `ACCESS` | `AX` | Slår tegning uten syn av eller på: resultater leses opp via skjermleseren, en tastaturmarkør på tegningen, fangelyder og talte kommandoer. |
| `ALIASEDIT` |  | Rediger kommandoaliaser i én tekstfil (det kjente L, *LINE-formatet) |
| `ALIGN` | `AL` | Flytt og roter objekter slik at kildepunktene havner på målpunktene (ett, to eller tre par), og skaler dem hvis du vil |
| `ALIGNPANEL` | `ALP` | Åpne panelet Juster og fordel |
| `ALIGNTO` |  | Juster venstre, midtre, høyre, øvre, midtre eller nedre kanter på de valgte objektene, etter utvalget, det første eller siste valgte objektet, eller et punkt |
| `ANNOALLVISIBLE` | `ANNOALL` | Vis annoterende objekter i alle målestokker, eller bare der visningsområdets (eller tegningens) målestokk står i listen deres |
| `ANNOSCALE` | `CANNOSCALE` | Angi tegningens annoteringsmålestokk: annoterende tekst og mål endres slik at de skrives ut i samme størrelse |
| `APPLOAD` | `AP` | Last inn programmer: LISP-rutiner (.lsp) og deres dialogfiler (.dcl); oppstartspakken (AP) |
| `ARC` | `A` | Bue: 3-punkt, Start/Sentrum/Slutt, Start/Sentrum/Vinkel, Start/Sentrum/Lengde, Start/Slutt/Vinkel, Start/Slutt/Retning, Start/Slutt/Radius, Sentrum/Start/Slutt, Sentrum/Start/Vinkel, Sentrum/Start/Lengde, Fortsett |
| `AREA` | `AA` | Areal og omkrets etter punkter eller for et objekt; Legg til og Trekk fra holder en løpende sum (AA) |
| `ARRAY` | `AR` | Kopier i rader og kolonner, eller rundt et senter (AR) |
| `ARRAYASSOCIATIVITY` |  | Angir om ARRAY-kommandoene lager matriser som forblir redigerbare (1) eller vanlige kopier (0) |
| `ARRAYCLOSE` |  | Avslutter redigeringen av en matrises kildeobjekter |
| `ARRAYEDIT` |  | Endrer en matrise laget med valget Assosiativ: antall, avstand, kildeobjekter, ett element |
| `ARRAYPATH` |  | Kopier av objekter langs en linje, bue, polylinje eller annen kurve |
| `ARRAYPOLAR` |  | Kopier rundt et senterpunkt |
| `ARRAYRECT` |  | Kopier i rader og kolonner |
| `ASBUILT` | `ASB` | ASBUILT leser de utførte punktene et mannskap har målt (CSV / TXT, slik EXPORTPOINTS skriver dem), og sammenligner dem med tegningens punkter: innenfor eller utenfor toleransen, ikke målt, ekstra. Merker dem på laget AS-BUILT og laster ned en CSV-rapport. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definer et attributt (en merkelapp som en blokk ber om en verdi for) som skal settes inn i en blokk (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Rediger attributtverdiene til en blokkreferanse på kommandolinjen, én etter én (Enter beholder en verdi) |
| `ATTSYNC` |  | Få blokkens referanser i samsvar med attributtdefinisjonene: nye legges til med standardverdiene, fjernede tas bort, plassering og tekst tilbakestilles; verdier beholdes |
| `AUDIT` |  | Sjekker den åpne tegningen for skader: tall som ikke er endelige, objekter uten størrelse, manglende lag, blokker, stiler og linjetyper, blokker som inneholder seg selv, delte id-er, ødelagte mål og skravurer. Lister det den finner etter type og spør før den retter; rettingen er ett angrertrinn. |
| `AUNITS` | `ANGUNITS` | Hvordan vinkler vises og skrives: desimalgrader, grader-minutter-sekunder eller retninger som N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Tegningens autofullføring av eller på, eller list opp hva tegningens mønstre foreslår nå. |
| `AUTOCONSTRAIN` |  | Legg til sammenfallende, horisontale og vertikale betingelser der geometrien allerede er nær |
| `AUTODIM` | `ADIM` | Mål etter regler: totalmål, kjeder langs sidene, åpninger, hulldiametre og rutenettavstand, uten å måle på nytt det som allerede er målt. |
| `AUTOSHEET` | `ASH` | Legger ut ark av seg selv: velger papir og standardmålestokker, og plasserer hver visning med bildetekst og tegningshode. |
| `BATTMAN` |  | Blokkattributtbehandling: rekkefølge, merkelapper, ledetekster, standardverdier og moduser for en blokks attributter, og deretter oppdateres dens referanser |
| `BCLOSE` |  | Lukk blokkredigereren: lagre blokken eller forkast endringene |
| `BCONVERT` |  | BCONVERT finner geometri som gjentar seg og gjør den om til blokkreferanser. Velg objektene som gjentar seg: hvert annet sett objekter i det åpne rommet som har samme geometri, flyttet og vridd i en hvilken som helst vinkel, blir funnet, og med Speilvendt eller Skalert på blir også speilbilder og kopier i annen størrelse funnet. Gi den nye blokken et navn og et basispunkt; utvalget og hver kopi blir referanser til den, hver med sin egen rotasjon og skala. Eller velg Blokk og navngi en eksisterende blokk for å finne løse kopier av objektene. En kopi må ha samme lag, farge, linjetype og linjevekt, med mindre Egenskaper er satt til Ignorer. Objekter på låste lag blir liggende. Ett angrertrinn. |
| `BEDIT` | `BE` | Blokkredigerer: rediger en blokks objekter og attributter; BCLOSE lagrer (BE) |
| `BLEND` |  | BLEND: en spline mellom endene av to åpne kurver, valgt nær endene for å settes sammen. Kontinuitet (CON): Tangent følger begge retningene, Glatt følger også hvordan de bøyer seg. |
| `BLOCK` | `B`, `BMAKE` | Lag en blokk av objekter (de blir én referanse) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: hver referanse til én blokk blir en referanse til en annen, på samme sted med samme skala og rotasjon. Verdier for attributter som begge blokkene har, beholdes. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE viser panelet Blokker med markøren i filterfeltet. Panelet viser et bilde av hver blokk (de sist plasserte først), som liste eller rutenett; klikk på et bilde eller dra det inn på tegningen for å plassere blokken med INSERT. Under Biblioteker legger du til en egen DWG- eller DXF-fil: blokkene den har, listes med bilder og kopieres inn i denne tegningen når du plasserer en. I CadCraft Studio kan også en mappe med tegninger legges til, og filer og mapper huskes. |
| `BOMEDIT` | `BOMCOLUMNS` | Kolonnene, gruppering, sortering, tittel, summer og merknader i en stykklistetabell |
| `BOMEXPORT` |  | Lagre en stykklistetabell som en .csv-fil |
| `BOMTABLE` | `BOM` | En levende stykklistetabell for én sone, eller for hele tegningen |
| `BOMUPDATE` |  | Oppdater alle stykklistetabeller nå, også de frosne |
| `BOMZONE` | `BZONE` | Et navngitt område i tegningen for en stykkliste: to hjørner, en mangekant, eller konturen av et lukket objekt |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): velg et punkt inne i et lukket område og få en lukket polylinje rundt det. Buer forblir buer. Øyer tegner også konturene av områdene inni det. |
| `BOX` |  | En boks: to hjørner og en høyde (3D) |
| `BPARAMETER` | `BPARAM` | Ikke bygget ennå: legge til en parameter (for eksempel Synlighet) til en blokk. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blokkparametere: navngitte parametere med formler, og flere synlighetsparametere i én blokk. Virker i blokkredigereren (tilordne de valgte objektene til en tilstand) og på en valgt referanse (dens egne verdier og tilstander). |
| `BREAK` | `BR` | Bryt en linje, bue, sirkel eller polylinje mellom to punkter (BR) |
| `BREAKATPOINT` |  | Del en linje, bue eller polylinje i to ved et punkt |
| `BREAKLINE` |  | Tegn en linje med et bruddsymbol; størrelsen og forlengelsen forbi endene huskes. |
| `BREPLACE` |  | BREPLACE bytter én blokk med en annen. Valgte: velg blokkreferanser og navngi blokken som skal brukes i stedet. Alle: navngi en blokk og dens erstatning, så endres hver referanse i hvert rom og inne i andre blokker. En referanse beholder sin plassering, skala, rotasjon og lag, og verdiene til attributter som begge blokkene har; verdier den nye blokken ikke har plass til, fjernes og oppgis. |
| `BSEARCH` |  | BSEARCH finner blokker. Navn: en del av et blokknavn, eller et mønster med * og ?. Attributt: en verdi (eller TAG=verdi) som en referanses attributter har. Geometri: velg objekter eller én blokkreferanse, så listes blokkene hvis form er minst 85 % lik, best først; størrelse, rotasjon og speiling teller ikke. Referansene som finnes i det åpne rommet, velges, klare for neste kommando. |
| `BURST` |  | Eksploder blokkreferanser og behold det attributtene sier: hver verdi blir tekst på attributtets lag. |
| `BVHIDE` | `BVH` | I blokkredigereren: skjul objekter i den gjeldende synlighetstilstanden. |
| `BVSHOW` | `BVSH` | I blokkredigereren: vis objekter som den gjeldende synlighetstilstanden skjuler (de vises falmet, klare for valg). |
| `BVSTATE` | `BVS` | I blokkredigereren, på en blokk med synlighetstilstander: bytt til en tilstand, eller legg til, gi nytt navn til eller slett en. |
| `CAL` |  | Regn ut en lengde eller et tall: + − * / og parenteser, slik du skriver dem hvor som helst |
| `CENTERLINE` | `CL` | Midtlinje mellom to linjer: midt imellom dem, eller langs halveringslinjen når de møtes (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Senterkryss: et kryss i midten av en sirkel eller bue, med midtlinjer like forbi den (CM) |
| `CHAMFER` | `CHA` | Avfas hjørnet mellom to linjer (D to avstander, A lengde og vinkel, P hvert hjørne i en polylinje) |
| `CHSPACE` |  | CHSPACE: flytt objekter mellom et ark og modellen gjennom et visningsområde. De skaleres og vris slik at de ser like ut fra den andre siden. På et ark går de til modellen; mens du jobber gjennom et visningsområde (MSPACE) kommer de til arket. |
| `CIRCLE` | `C` | Senter og radius, diameter, 2 eller 3 punkter |
| `CLASS` |  | Legg de valgte objektene i en klasse, eller med ingenting valgt, angi den aktive klassen (? lister dem) |
| `CLASSES` | `CLS` | Panelet Klasser: klasser sorterer objekter på tvers av lag; vis, skjul og stil dem, og overstyr dem per visningsområde (CLS) |
| `COMMANDLINE` | `CMDLINE` | Fest eller frigjør kommandolinjen, gjør den til én linje, angi antall historikklinjer, eller åpne historikken (F2) |
| `COMPARESETTINGS` | `CMPSET` | Sammenlign måltilsettingsstiler, tekststiler, lag, ark eller enheter: to i denne tegningen, eller denne tegningen mot en annen åpen, og kopier en verdi over. |
| `CONSTRAINTBAR` | `CBAR` | Vis eller skjul betingelseslinjene (Vis alle / Skjul alle, eller per objekt) |
| `COPY` | `CO`, `CP` | Kopier objekter, så mange ganger du klikker |
| `COPYBASE` |  | Kopier objekter til utklippstavlen med et basispunkt du velger |
| `COPYCLIP` |  | Kopier objekter til utklippstavlen (Ctrl+C); PASTECLIP plasserer dem |
| `COUNT` | `BCOUNT` | Tell blokkreferanser: velg én for å markere og telle hver referanse av blokken |
| `COUNTTABLE` |  | Plasser en tabell med blokktelling |
| `CREDITS` |  | Legger bibliotekets kildehenvisninger inn i tegningen som en tabell. Kjør den på nytt for å oppdatere tabellen fra elementene i tegningen nå. |
| `CURSORSIZE` |  | Størrelsen på markørkorset: 100 går kant til kant over tegningen (Innstillinger › Markør › Fullskjerm) |
| `CUTCLIP` |  | Klipp ut objekter til utklippstavlen (Ctrl+X): kopier, og slett deretter |
| `CYLINDER` | `CYL` | En sylinder: senter, radius og høyde (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | List blokker, deres attributter og objektegenskaper som en tabell i tegningen eller en CSV-fil |
| `DATALINK` | `DL` | En tabell fra en CSV-fil som husker filen, slik at den kan leses på nytt |
| `DATALINKUPDATE` | `DLU` | Les en datakoblings fil på nytt og fyll tabellene på nytt |
| `DCALIGNED` | `DCALI` | Målbetingelse: sann avstand mellom punkter, et punkt og en linje, eller to linjer |
| `DCANGULAR` | `DCANG` | Målbetingelse: vinkel mellom to linjer, eller for en bue |
| `DCCONVERT` |  | Gjør mål tegnet på betingelsesbar geometri om til målbetingelser |
| `DCDIAMETER` | `DCDIA` | Målbetingelse: diameter på en sirkel eller bue |
| `DCDISPLAY` |  | Vis eller skjul målbetingelser på tegningen |
| `DCHORIZONTAL` | `DCHOR` | Målbetingelse: horisontal avstand |
| `DCLINEAR` | `DCLIN` | Målbetingelse: horisontal eller vertikal avstand, fra der du plasserer den |
| `DCRADIUS` | `DCRAD` | Målbetingelse: radius på en sirkel eller bue |
| `DCVERTICAL` | `DCVER` | Målbetingelse: vertikal avstand |
| `DELBLOCKS` |  | Slett blokker: hver referanse (også innebygde, på hvert ark) og definisjonene |
| `DELCONSTRAINT` | `DELCON` | Fjern hver betingelse (geometrisk og målbetingelse) fra objektene du velger |
| `DELOPENING` |  | Ta en dør eller et vindu ut av en vegg. |
| `DESCRIBE` | `DESC` | Si hva tegningen inneholder: hvor mange objekter, av hvilken type, hvor store, hva som er valgt. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Fjern utvalget (Esc) |
| `DETAILS` | `DET` | Firmaets egne detaljer, funnet for det du tegner: finn, legg til en blokk, list opp, fjern, slå tilbudene av eller på. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Tegn et diagram fra tekst: et Mermaid-flytdiagram, et PlantUML-komponentdiagram, D2, en fra-til-liste eller draw.io-XML, som blokker og koblinger du kan redigere |
| `DIMALIGNED` | `DAL`, `DIMALI` | Sann avstand mellom to punkter |
| `DIMANGULAR` | `DAN`, `DIMANG` | Vinkel mellom to linjer, for en bue, eller ved tre punkter |
| `DIMARC` | `DAR` | Måling av buelengde: avstanden langs en bue, med buesymbolet (DAR) |
| `DIMASZ` |  | Måltilsettingsinnstilling: Pilstørrelse |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Mål stablet fra én grunnlinje |
| `DIMBREAK` | `DBREAK` | Bryt mål- og hjelpelinjer der de krysser andre objekter (Auto), mellom to punkter (Manuell), eller fjern bruddene |
| `DIMCONSTRAINT` | `DCON` | Målbetingelser: lineær, innrettet, vinkel, radius, diameter, konverter |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | En kjede av mål, hver fra enden av det forrige |
| `DIMDEC` |  | Måltilsettingsinnstilling: Desimaler |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diameter på en bue eller sirkel |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Frigjør mål fra objektene de er festet til (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Endre måltekst (Hjem, Ny tekst, Roter) eller skrå hjelpelinjene (Skrå) |
| `DIMEXE` |  | Måltilsettingsinnstilling: Forlengelse forbi mållinjen |
| `DIMEXO` |  | Måltilsettingsinnstilling: Forskyvning fra origo |
| `DIMGAP` |  | Måltilsettingsinnstilling: Mellomrom rundt teksten |
| `DIMINSPECT` |  | Kontrollmål: en ramme rundt verdien med en merkelapp og hvor ofte delen kontrolleres |
| `DIMJOGGED` | `DJO`, `JOG` | Radiusmål med knekk: en radius tegnet fra et nærmere punkt når senteret er langt unna (DJO) |
| `DIMJOGLINE` | `DJL` | Legg til et knekksymbol på en lineær eller innrettet mållinje, for å vise at avstanden ikke er tegnet i riktig målestokk (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horisontal eller vertikal avstand (R for en hvilken som helst vinkel) |
| `DIMLUNIT` |  | Måltilsettingsinnstilling: lengdeformat (1 vitenskapelig, 2 desimal, 3 ingeniør, 4 arkitekt, 5 brøk) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinatmål: X- eller Y-avstanden til et punkt fra BKS-origo, på en hjelpelinje (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Overstyr måltilsettingsvariabler på valgte mål uten å endre stilen; Nullstill setter stilen tilbake (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radius på en bue eller sirkel |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Knytt et måls punkter til objekter, slik at det følger og måler på nytt når de flyttes (DRE) |
| `DIMSCALE` |  | Måltilsettingsinnstilling: Samlet skala (størrelser × dette) |
| `DIMSPACE` |  | Jevn avstand mellom parallelle mål, målt fra et grunnmål (0 flukter dem, Auto er to ganger teksthøyden) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Lag, endre, angi gjeldende, slett, bruk og sammenlign navngitte måltilsettingsstiler (dialogen; -DIMSTYLE på kommandolinjen) |
| `DIMTEDIT` | `DIMTED` | Flytt måltekst til venstre, høyre eller midten av mållinjen, eller snu den |
| `DIMTEXTUNIT` | `DTU` | Måltekst i mm, cm, m eller km, eller i tegningens egne enheter: de valgte målene, ellers nye (DTU) |
| `DIMTXT` |  | Måltilsettingsinnstilling: Teksthøyde |
| `DIST` | `DI` | Avstand og vinkel mellom to punkter |
| `DISTRIBUTE` |  | Fordel de valgte objektene jevnt, side om side eller opp og ned: like store trinn mellom senter, eller like mellomrom; de to ytterste blir stående |
| `DIVIDE` | `DIV` | DIVIDE (DIV): merker som deler en linje, bue, sirkel, polylinje, spline eller ellipse i like deler. Punkter, eller med Blokk en blokk ved hvert merke. |
| `DOCUMENTS` | `DOCS` | Åpne panelet Dokumenter: sjekk tegninger ut og inn, revisjoner, utgivelsestilstander og godkjenning for en prosjektmappe |
| `DOOR` | `DR` | Sett en dør i en vegg. Siden du klikker på er siden den åpnes mot. |
| `DRAWORDER` |  | Endre tegnerekkefølgen: før objekter fremst, send dem bakerst, eller legg dem over eller under andre objekter. |
| `DUPLICATE` | `DUP` | En kopi som følger pekeren: klikk for å sette den ned (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Tegningens egenskaper: tittel, forfatter og resten, samt egne navn- og verdipar |
| `DXFOUT` |  | Last ned tegningen som DXF R12 (Lagre beholder sitt eget format) |
| `EATTEDIT` | `DDATTE` | Rediger attributtene til en blokkreferanse: verdier, tekst og egenskaper, ett attributt om gangen |
| `ELLIPSE` | `EL` | Endepunkter for aksen og den andre halvaksen |
| `ERASE` | `E`, `DELETE` | Fjern objekter |
| `EXPLODE` | `X` | Del polylinjer, blokker og mål i deres deler |
| `EXPORT` | `EXP` | Lagre en kopi av tegningen i en filtype et tillegg skriver |
| `EXPORT3D` | `3DEXPORT` | Eksporter 3D-modellen: GLB, OBJ eller STL |
| `EXPORTPOINTS` | `EXPPTS` | Skriv punkter, og blokkers innsettingspunkter med ett attributt som beskrivelse, til en CSV- eller TXT-fil (PNEZD, PENZD eller XYZ) for BIM- og målingsprogrammer |
| `EXTEND` | `EX` | Forleng objekter til de møter andre: klikk nær en ende, dra gjennom flere, eller Shift+klikk for å trimme |
| `EXTRIM` |  | EXTRIM: velg én skjærekant, og deretter en side. Alt som krysser kanten, trimmes på den siden. Delene som ville forsvinne, vises når du flytter pekeren. |
| `EXTRUDE` | `EXT` | Ekstruder lukkede 2D-objekter til volumlegemer (3D) |
| `FIELD` |  | Sett et felt inn i en tekst, en tabellcelle eller et attributt: en dato, filnavnet, arknummeret, en tegningsegenskap, et objekts areal eller lengde, eller en formel |
| `FILLET` | `F` | Avrund eller gjør hjørnet mellom to objekter kantet (R radius, P hvert hjørne i en polylinje, M flere) |
| `FIND` |  | Finn og erstatt ord i tekst, attributtverdier og måltekst |
| `FLATTEN` |  | Sett høyden (Z) og tykkelsen på de valgte objektene til 0, også i blokkene de bruker. |
| `FLOOR` |  | Velg etasjen du skal tegne på, legg til en, eller flytt eller kopier utvalget til en. |
| `FLOORLAYERS` |  | Gjør etasjer om til lag med navnet Floor-Layer, for en fil som skal til noen uten etasjer. |
| `FLOORS` | `FLR` | Åpne panelet Etasjer: stable etasjer i ett modellrom. |
| `GCCOINCIDENT` |  | Betingelse: to punkter møtes, eller et punkt blir på et objekt |
| `GCCOLLINEAR` |  | Betingelse: to linjer blir på én linje |
| `GCCONCENTRIC` |  | Betingelse: to sirkler eller buer deler senter |
| `GCEQUAL` |  | Betingelse: to linjer blir like lange, eller to sirkler/buer like store i radius |
| `GCFIX` |  | Betingelse: et punkt eller et helt objekt blir der det er |
| `GCHORIZONTAL` |  | Betingelse: en linje (eller to punkter) blir horisontal |
| `GCPARALLEL` |  | Betingelse: to linjer blir parallelle |
| `GCPERPENDICULAR` |  | Betingelse: to linjer blir stående i rett vinkel |
| `GCSYMMETRIC` |  | Betingelse: to punkter, linjer eller sirkler speiler hverandre over en linje |
| `GCTANGENT` |  | Betingelse: en linje og en sirkel eller bue (eller to av dem) blir tangerende |
| `GCVERTICAL` |  | Betingelse: en linje (eller to punkter) blir vertikal |
| `GDSIN` | `GDS` | Vis en IC-layout (en GDSII-strømfil): hvert lag og datatype som et tegningslag, flatt, i brukerenheter; kun for visning og måling (laboratorieforsøk) |
| `GEOMCONSTRAINT` | `GCON` | Geometriske betingelser: horisontal, vertikal, parallell, tangent, sammenfallende … |
| `GLBOUT` |  | Eksporter 3D-modellen som GLB (glTF) |
| `GRADIENT` | `GD` | Fyller et område med en overgang mellom én eller to farger |
| `GRIDMOVE` | `GM` | Flytt en rutenettlinje og ta med det som henger på den: vegger strekkes, søyler, bobler og merkelapper flyttes, mål følger med. |
| `GROUP` | `G` | GROUP (G): gi de valgte objektene et felles navn. Et klikk på ett av dem velger så alle sammen. Enter ved navnet lager en gruppe uten navn. |
| `GROUPEDIT` |  | GROUPEDIT: endre en gruppe. Velg ett av objektene eller oppgi navnet, og legg så til eller fjern objekter, gi nytt navn (REName), endre beskrivelsen, eller angi om et klikk velger den hele. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Fyll et område med en heldekkende fyll eller et mønster: klikk inne i det, eller velg lukkede objekter (H) |
| `HATCHEDIT` | `HE` | Endre en skravur: mønster, skala, vinkel, origo, og koblingen til en kontur. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Lager konturpolylinjene på nytt fra en skravur, koblet til den eller ikke |
| `HATCHTOBACK` |  | Send all skravur bak alt annet. |
| `HELP` | `?` | Denne listen |
| `HIDEOBJECTS` |  | Skjul de valgte objektene til UNISOLATEOBJECTS. Lagres ikke med tegningen. |
| `HISTORY` | `HIST` | HISTORY (HIST): versjonene av denne tegningen — kopier som lagres på denne datamaskinen når Studio lagrer den, og skyens versjoner — for å åpne, gjenopprette og sammenligne med det som er endret, vist i farge. |
| `ID` |  | Koordinater til et punkt |
| `IMAGE` | `IM` | Gi CadCraft bildefilene en tegning bruker (en DWG lagrer bare hvor de var). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Plasser et bilde (PNG eller JPEG) fra en fil. |
| `IMAGECLIP` | `ICL` | Klipp et bilde til et rektangel eller en mangekant, eller fjern klippingen. |
| `IMPORT` | `IMP` | Importer en fil av en type et tillegg leser, inn i denne tegningen |
| `INSERT` | `I`, `DDINSERT` | Plasser en blokk (S skala, R roter); F fra en DWG/DXF-fil, L fra biblioteket |
| `INTERSECT` | `IN` | Behold bare det volumlegemene har felles (3D), eller arealet 2D-områdene deler |
| `ISODRAFT` |  | ISODRAFT: isometrisk tegning av eller på, eller rett inn på planet Venstre, Topp eller Høyre. Når den er på, følger Ortho og polarsporing planets to akser, rutenettet tegnes isometrisk, og ELLIPSE har Isosirkel. |
| `ISOLATEOBJECTS` | `ISOLATE` | Vis bare de valgte objektene; alt annet i dette rommet er skjult til UNISOLATEOBJECTS. Lagres ikke med tegningen. |
| `ISOPLANE` |  | ISOPLANE: velg isometrisk plan å tegne på: Venstre, Topp eller Høyre. Enter går til neste, slik F5 gjør når isometrisk tegning er på. |
| `JOIN` | `J` | Sett sammen linjer, buer og polylinjer som møtes ende mot ende til én polylinje; linjer på én linje til én linje (J) |
| `LASER` | `LASERCUT` | Åpne panelet Laser: send lag til en laserskjærer eller graver (GRBL G-kode) |
| `LASSOMODE` |  | Trykk og dra tegner et lasso (1) eller et rektangel (0) |
| `LAYDEL` |  | Slett et lag og hvert objekt på det (i modellen, på ark og i blokker) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Åpne lagbehandleren: hvert lag i én tabell |
| `LAYERPANEL` |  | Vis panelet Lag |
| `LAYFRZ` |  | Frys laget til hvert objekt du velger |
| `LAYGROUP` | `LG` | Gruppér lag i mapper i panelet Lag. |
| `LAYISO` |  | Isoler lagene til de valgte objektene (alle andre lag av) |
| `LAYLOCKFADE` |  | Angi hvor mye objekter på låste lag falmer, og om et klikk kan velge dem. |
| `LAYMCUR` |  | Gjør laget til objektet du velger til gjeldende lag |
| `LAYMRG` |  | Slå sammen lag: objektene deres flyttes til et målLag, og de sammenslåtte lagene forsvinner |
| `LAYOFF` |  | Slå av laget til hvert objekt du velger |
| `LAYON` |  | Slå på alle lag |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Et nytt ark med et tegningshode og et visningsområde |
| `LAYTHW` |  | Tin alle lag |
| `LAYUNISO` |  | Slå på igjen lagene LAYISO slo av |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Konverterer tekst skrevet med gamle vietnamesiske skrifttyper (TCVN3 / ABC-skrifter som .VnTime, og VNI-skrifter som VNI-Times) til Unicode. Slik tekst vises allerede slik den leses; dette skriver den om for godt, med en telling og ett angrertrinn. |
| `LENGTHEN` | `LEN` | Forleng eller forkort linjer, buer og polylinjer: med et beløp, en prosent, til en total, eller ved å dra (LEN) |
| `LIBRARY` | `LIB` | Bibliotekpanelet: plasser elementer, se etter oppdateringer, kildehenvisninger |
| `LIMITS` |  | Angi tegningens grenser: PÅ, AV, eller hjørnene nede til venstre og oppe til høyre. Med grensene PÅ avvises punkter utenfor dem |
| `LINE` | `L` | Rette segmenter, hvert sitt eget objekt |
| `LINETYPE` | `LT`, `CELTYPE` | Linjetypen nye objekter får (etter lag, etter blokk, eller en navngitt) |
| `LINKVIEWS` | `SYNCVIEWS` | Panorer og zoom alle ruter sammen (delt skjerm), for å sammenligne to tegninger eller revisjoner |
| `LISPEDIT` | `VLIDE` | LISPEDIT (eller VLIDE) åpner LISP-redigereren: et vindu for å skrive, laste inn og prøve en rutine. Last inn i tegningen leser hvert uttrykk, slik APPLOAD gjør når filen lastes, og lager kommandoene. Kjør utvalg kjører de valgte uttrykkene, eller uttrykket markøren står i. Konsollen viser det rutinen skrev ut og hver feil med linjen sin. Den matchende parentesen markeres mens du skriver, og Enter rykker inn den nye linjen. Ny, Åpne og Lagre virker på en .lsp-fil. Listene ved siden av teksten viser funksjonene rutinen definerer, dem den kaller som denne LISP ikke har ennå, og alle den har. Vinduet blokkerer ikke tegningen, så en rutine kan be om punkter; Stopp eller Esc avslutter en rutine som kjører. |
| `LIST` | `LI`, `LS` | Beskriv objekter i historikken |
| `LTSCALE` | `LTS` | Tegningens linjetypeskala (hver strek og mellomrom ganges med den) |
| `LWDISPLAY` | `LWT` | Vis eller skjul linjevekter på skjermen (knappen LWT i statuslinjen) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Linjevekten nye objekter får (etter lag, etter blokk, standard, eller mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | kartlag under modellrommet: tegningens koordinatsystem, fliser, WMS, WMTS, ArcGIS, bilder |
| `MASSPROP` |  | MASSPROP: tverrsnittsegenskaper for områder og lukkede objekter: areal, omkrets, tyngdepunkt, momenter og treghetsprodukt, treghetsradier og hovedakser. Eksakt for linjer og buer. Kan skrive rapporten til en tekstfil. |
| `MATCHPROP` | `MA`, `PAINTER` | Samsvar egenskaper: kopier ett objekts lag, farge og mer over på andre (MA) |
| `MEASURE` | `ME` | MEASURE (ME): et merke for hver gitte lengde langs en linje, bue, sirkel, polylinje, spline eller ellipse, fra enden nærmest valget ditt. Punkter, eller med Blokk en blokk ved hvert merke. |
| `MEASUREGEOM` | `MEA` | Mål en avstand, en radius, en vinkel eller et areal (MEA) |
| `MINSERT` |  | MINSERT: plasser en blokk i rader og kolonner på én gang. Hver er sin egen referanse, så du kan flytte eller slette hver enkelt. |
| `MIRROR` | `MI` | Speil objekter over en linje |
| `MLEADER` | `MLD`, `MLEAD` | Flerpekerlinje: en pil, en peker og en merknad, som ett objekt (MLD) |
| `MLEADERALIGN` | `MLA` | Juster flerpekerlinjer etter én av dem langs en retning, med like avstander, eller fordelt mellom to punkter (MLA) |
| `MLEADERCOLLECT` | `MLC` | Samle flere flerpekerlinjer til én: blokkene i en rad eller kolonne, eller merknadene under hverandre (MLC) |
| `MLEADEREDIT` | `MLE` | Legg til pekerlinjer til en flerpekerlinje, eller fjern dem; bytt innholdet mellom tekst og en blokk (MLE) |
| `MLINE` |  | Tegn parallelle linjer samlet, sammenkoblet i hjørnene. |
| `MOVE` | `M` | Flytt objekter med et basispunkt og et andre punkt |
| `MSPACE` | `MS` | Arbeid på modellen gjennom et visningsområde på det åpne arket (eller dobbeltklikk inne i visningsområdet). |
| `MTEXT` | `MT`, `T` | Avsnittstekst: dra bredden, og skriv så på stedet; Enter starter et nytt avsnitt (T) |
| `MVIEW` | `MV` | Et visningsområde mot modellen, på et layout |
| `NAMEDVIEW` | `NV`, `VIEWS` | Navngitte visninger: lagre visningen på skjermen (eller et vindu) under et navn og gå tilbake til den (NV) |
| `NCOPY` |  | Kopier objekter ut av en blokkreferanse eller en koblet tegning inn i tegningen, uten å eksplodere den. |
| `NEARBY` |  | Si hva som ligger nær markøren, nærmest først, med avstanden og siden. |
| `NEW` |  | Start en ny tegning |
| `OBJECTSCALE` | `OBJSCALE` | Annoteringsmålestokker for annoterende tekst og mål: legg til en målestokk, slett en, legg til gjeldende målestokk, eller list dem (hvert visningsområde viser dem i størrelsen for sin egen målestokk) |
| `OBJOUT` |  | Eksporter 3D-modellen som OBJ |
| `OFFSET` | `O` | Parallelle kopier i en avstand |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: hvordan OFFSET lukker hullene i de ytre hjørnene på en polylinje. 0 forlenger segmentene, 1 legger til en bue, 2 legger til et rett kutt. Beholdes for denne økten. |
| `OLELIST` | `OLES` | List OLE-objektene en tegning har, og legg en kopi av et bilde av ett der du velger |
| `OPEN` |  | Åpne en DWG eller DXF fra denne datamaskinen |
| `OPENIN3D` |  | Åpne denne tegningen i 3D-modelleringsappen, i en ny fane (ingenting lastes opp) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Åpne objektfangmenyen: velg hvilke fang som er på. Også et høyreklikk på Fang i statuslinjen. |
| `OVERKILL` |  | Slett dupliserte objekter og slå sammen overlappende eller ende-mot-ende-linjer og buer, innenfor en toleranse. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panelet Parametere: brukerparametere og målbetingelser i én tabell |
| `PARTSLIST` | `PLIST` | En delliste-tabell over hver standarddel og stålprofil plassert fra biblioteket |
| `PASTEAREA` | `PAREA` | Lim inn et område kopiert i MarkupCraft (Kopier område) i sin virkelige størrelse, som et bilde. |
| `PASTEBLOCK` |  | PASTEBLOCK: lim inn det du kopierte som én blokk. Blokken får et eget navn; RENAME gir den ditt. |
| `PASTECLIP` |  | Lim inn utklippstavlen: den følger markøren, klikk der den skal (Ctrl+V) |
| `PASTEORIG` |  | Lim inn utklippstavlen på koordinatene den ble kopiert fra (Ctrl+Shift+V) |
| `PDF` |  | Gi CadCraft PDF-filene tegningens underlegg bruker |
| `PDFADJUST` |  | Dempe, kontrast, enfarget eller slå av et PDF-underlegg |
| `PDFATTACH` | `PDFATT` | Legg ved en PDF-side som underlegg (PDFATTACH) |
| `PDFCLIP` |  | Klipp et PDF-underlegg til et rektangel eller en mangekant |
| `PDFIMPORT` | `PDFIM` | Gjør en PDF-sides linjer, fyll og tekst om til tegningsobjekter (PDFIMPORT) |
| `PDFLAYERS` |  | Slå lagene i et PDF-underlegg av eller på |
| `PEDIT` | `PE` | Rediger en polylinje: lukk, åpne, sett sammen, bredde, tilpass kurve, splinekurve, fjern kurve, generering av linjetype, reverser; linjer, buer og splines kan gjøres om til polylinjer |
| `PHOTOSKETCH` | `PSK` | Gjør et bilde av en håndskisse på papir om til linjer og buer i en målestokk, retter opp perspektivet og gir hver pennfarge sitt eget lag. |
| `PICKSTYLE` |  | PICKSTYLE: om valg av ett objekt i en gruppe velger hele gruppen (1, startinnstillingen) eller bare det objektet (0). Beholdes for denne økten. |
| `PLAN` |  | Snu visningen slik at BKS X-aksen (gjeldende BKS, en lagret BKS, eller VKS) ligger vannrett på skjermen. Ingenting i tegningen flyttes. |
| `PLINE` | `PL` | En polylinje av linje- og buesegmenter |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Plott til PDF: et layout, eller modellen i en målestokk |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabeller for plottstiler: angi hva hver farge skrives ut som (farge, svart, grå, blekk, linjevekt); beholdes med tegningen (STYLESMANAGER) |
| `POINT` | `PO` | Punktobjekter |
| `POINTCLOUD` | `PC` | den tilknyttede punktskyen: skive, høyde, tykkelse, farge, størrelse, synlig, zoom, koble fra |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | legg ved en punktsky (LAS, LAZ, XYZ, PTS) under tegningen |
| `POLARANG` |  | Polarsporingens steg i grader (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | En regulær mangekant |
| `PRESSPULL` |  | Skyv eller dra en flate på et volumlegeme (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Åpne panelet Egenskaper (også Ctrl+1, eller dobbeltklikk et objekt) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Brett panelet Egenskaper inn til kanten av vinduet |
| `PSPACE` | `PS` | Forlat visningsområdet du arbeider i, og gå tilbake til arket (eller dobbeltklikk utenfor det). |
| `PUBLISH` | `-PUBLISH` | Plott flere eller alle ark til én PDF (en side og et bokmerke per ark) |
| `PURGE` | `PU` | Fjern blokkdefinisjoner som ingenting bruker |
| `QDIM` |  | Hurtigmål: mål flere objekter samtidig (kontinuerlig, grunnlinje, forskjøvet, ordinat, radius eller diameter) |
| `QPMODE` | `QP` | Hurtigegenskaper ved markøren av eller på |
| `QSELECT` | `QS` | Hurtigvalg: hvert objekt av en type der laget, farge, størrelse eller navn stemmer (QS) |
| `RASTERSNAP` |  | Slå festing til linjene på skannede ark av eller på. |
| `RAY` |  | Stråle: en konstruksjonslinje fra et punkt, uendelig én vei. |
| `RECOVER` |  | Åpner en skadet DXF eller DWG: hopper over det som ikke kan leses i stedet for å avvise filen, sier hva som ble hoppet over, og sjekker og reparerer deretter tegningen slik AUDIT gjør. |
| `RECTANG` | `REC`, `RECTANGLE` | En lukket polylinje fra to hjørner |
| `REDLINE` | `RDL` | Rødmerking til revisjon: les en MarkupCraft-rødmerkingspakke, godta eller avvis hver endring, sky de godkjente med en revisjonslogg, og lagre svarfilen (RDL) |
| `REDO` |  | Gjør om det som ble angret |
| `REFCLOSE` |  | Avslutt redigering av en blokk på stedet: lagre den, eller forkast endringene |
| `REFEDIT` |  | Rediger en blokk på stedet, der en referanse til den ligger, med resten av tegningen falmet; REFCLOSE lagrer den |
| `REGEN` | `RE` | Bygg opp på nytt det som tegnes i denne fanen fra tegningen |
| `REGENALL` | `REA` | Bygg opp på nytt det som tegnes i hver fane, rute og åpen tegning |
| `REGION` | `REG` | REGION (REG): lag flate områder (regioner) av lukkede objekter, eller av linjer, buer og polylinjer som lukker en sløyfe ende mot ende. UNION, SUBTRACT og INTERSECT kombinerer så regioner, og MASSPROP gir deres tverrsnittsegenskaper. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registrer flere skanninger: plasser dem i én ramme med valgte punktpar eller mål, finjuster med ICP, eksporter én LAS- eller E57-fil |
| `REINIT` |  | Last inn aliasfilen din på nytt |
| `RENAME` | `-RENAME`, `REN` | Gi et lag eller en blokk nytt navn (hvert objekt eller hver referanse følger) |
| `REVCLOUD` | `RC` | Revisjonssky: rund av et rektangel, en mangekant, en frihåndsbane eller et objekt (RC) |
| `REVOLVE` | `REV` | Roter lukkede 2D-objekter om en akse til volumlegemer (3D) |
| `ROTATE` | `RO` | Roter objekter om et basispunkt |
| `SAMPLES` | `SAMPLE` | Åpne en av CadCraft sine eksempeltegninger (et arkitektsett, en utførelsestegning) for å lære av |
| `SAVE` | `QSAVE` | Last ned tegningen i sitt format (DWG eller DXF) |
| `SAVEAS` |  | Last ned tegningen som DWG eller DXF: velg hvilken |
| `SAYSEL` |  | Si hva som er valgt, én setning hver. |
| `SCALE` | `SC` | Skaler objekter om et basispunkt |
| `SCALELISTEDIT` | `SCALELIST` | Legg til, rediger og slett tegningens egne målestokker; de vises i visningsområdets og plottets målestokklister og lagres i filen (SCALELIST) |
| `SCANALIGN` | `SCL` | Juster et skannet ark etter to punkter: flytt, roter og skaler det hvis du velger det. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Sett inn en skannet tegning: en PNG, JPEG eller TIFF (én side eller alle sider i en flersidig fil) eller en PDF-side som er et bilde. |
| `SCANCLEAN` | `SCC` | Gjør et skannet ark svart-hvitt og fjern flekker. |
| `SCANCROP` | `SCR` | Beskjær et skannet ark til et vindu. |
| `SCANDESKEW` | `SCD` | Finn vinkelen de lange linjene på et skannet ark ligger i, og roter arket rett når du godtar vinkelen. |
| `SCANERASE` | `SCE` | Slett et område på et skannet ark: et rektangel, en mangekant eller et lasso. |
| `SCANINFO` | `SCI` | Vis et skannet arks opprinnelige fil og trinnene som er tatt siden. |
| `SCANSCALE` | `SCS` | Skaler et skannet ark: velg to punkter på det og skriv den virkelige avstanden mellom dem. |
| `SCANTRACE` | `SCT` | Tegn et skannet ark over til linjer og buer på et nytt lag, til en toleranse du angir. Tekst og skravur blir værende som raster. |
| `SELECT` |  | Velg objekter nå (for P, Forrige, i neste kommando) |
| `SELECTALL` | `AI_SELALL` | Velg hvert objekt du kan redigere på denne fanen (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Velg hvert objekt som de du peker ut: samme type, lag og farge (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Viser panelet Arksett: ark fra mange tegninger, nummerert, publisert som én PDF. |
| `SHORTCUTS` | `KEYS` | Gi en kommando en tast av din egen (Ctrl eller Alt med en bokstav, eller en ledig funksjonstast), lagret i denne nettleseren eller skrivebordsappen. |
| `SHXFONTS` | `SHX` | Gi CadCraft SHX-skrifter fra en mappe eller filer, slik at tekststiler som nevner dem tegner med dem (list, fjern, reverser) |
| `SKETCHFIX` | `SKF` | Tegn frihåndsstrøk; hvert blir en ren linje, sirkel, bue, rektangel eller polylinje, kvadrert og sammenkoblet med de andre. |
| `SKETCHLIVE` | `SKL` | Skisser med en penn: hvert strøk blir en presis linje, sirkel, bue eller rektangel når du løfter pennen, festet til tegningen, med størrelsen å skrive over. |
| `SPLINE` | `SPL` | Tegn en spline gjennom punkter (eller med en kontrollmangekant), eller gjør en polylinje om til én |
| `SPLINEDIT` | `SPE` | Rediger en spline: tilpass punkter, kontrollpunkter og vekter, åpne eller lukk den, reverser den, eller gjør den om til en polylinje |
| `SPLIT` |  | Del tegneområdet i ruter (som VPORTS på modellen; også fra et ark) |
| `STEELMEMBER` | `SMEMBER` | En stålstav i 3D fra en standardprofil: to punkter (en bjelke) eller et basispunkt og en høyde (Søyle) |
| `STLOUT` |  | Eksporter 3D-modellen som STL (millimeter) |
| `STRETCH` | `S` | Strekk: dra et krysningsvindu over endene for å flytte; det som er inni flyttes, resten blir (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Tekststiler: skriften, høyden, bredden og skråstillingen ny tekst får (dialogen; -STYLE på kommandolinjen) |
| `SUBTRACT` | `SU` | Trekk volumlegemer fra andre (3D), eller 2D-regioner fra regioner |
| `SWBOUT` | `SWMACRO` | Last ned en makro for SolidWorks (.swb) som bygger modellen opp igjen som én begrenset skisse |
| `SWEEP` |  | Sveip lukkede 2D-objekter langs en bane (linje, polylinje, bue, sirkel) til volumlegemer (3D) |
| `TABLE` | `TB` | Lag en tabell: rader og kolonner, eller fra regnearkceller på utklippstavlen eller en CSV-fil |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Rediger en tabell: skriv i en celle, sett inn og slett rader og kolonner, størrelser, sammenslåtte celler, justering |
| `TABLEEXPORT` |  | Lagre det en tabell viser som en CSV-fil |
| `TABLEPASTE` | `PASTETABLE` | Lag en tabell fra regnearkceller på utklippstavlen |
| `TABLESTYLE` | `TS` | Tabellstiler: teksthøyder, justering, marg og kanter for tittel-, overskrifts- og dataradene |
| `TAGS` |  | Merkelapper på blokkreferanser: definer en merkelapp (type, tillatte verdier, blokker den gjelder for), sett den på de valgte referansene, og list dem som en oversikt du kan lagre som CSV |
| `TEXT` | `DT`, `DTEXT` | Tekst på én linje; Enter starter neste linje |
| `TEXTEDIT` | `ED`, `DDEDIT` | Rediger tekst på stedet: velg en tekst (eller dobbeltklikk en) (ED) |
| `TEXTMASK` | `TMASK` | Sett en bakgrunnsmaskering bak tekster (tegningens bakgrunn eller en farge), eller fjern den. |
| `TEXTTOFRONT` |  | Før all tekst, alle mål og alle pekerlinjer foran alt annet. |
| `TOOLBAR` |  | Velg hva verktøylinjeknappene viser: ikoner og tekst, bare ikoner, eller bare tekst (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Fest verktøylinjen øverst, nederst, til venstre eller til høyre i vinduet |
| `TOOLBARROWS` |  | Velg hvor mange rader verktøylinjen bruker: bryt for å passe, 2, eller 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Gjør linjene over tegningen standard eller kompakte |
| `TOUCHCROSSHAIR` | `TCX` | Forskjøvet markørkors for tegning med fingeren: én finger flytter et markørkors som ligger over og ved siden av den, slik at fingeren ikke dekker valgpunktet. Når fingeren løftes, velges ingenting; knappen Klikk eller et trykk med en andre finger velger ved markørkorset, og å holde Klikk mens du beveger deg drar. Et langt trykk eller knappen Enter er Enter. To fingre panorerer og zoomer. Valg: PÅ, AV, Auto (på bare der en finger er den eneste pekeren), Avstand, Side. |
| `TOUR` | `TUTORIAL` | Ta den seks-trinns første-tegning-turen på nytt |
| `TRIM` | `TR` | Kutt objekter tilbake til der andre krysser dem: klikk på en del, dra gjennom flere, eller Shift+klikk for å forlenge |
| `TRIMEXTENDMODE` |  | Hvordan TRIM og EXTEND starter: 1 Hurtig (hvert objekt er en skjære- eller grensekant), 0 Standard (velg kantene først) |
| `TTR` |  | En sirkel som tangerer to objekter, med en radius du gir (samme som CIRCLE T). |
| `TURNLEFT` |  | Snu visningen 90° til venstre (mot klokken): BKS Z -90, og visningen følger. Ingenting i tegningen flyttes. |
| `TURNRIGHT` |  | Snu visningen 90° til høyre (med klokken): BKS Z 90, og visningen følger. Ingenting i tegningen flyttes. |
| `TURNWORLD` |  | Tilbake til verden: BKS VKS, og visningen står vannrett igjen. |
| `TXT2MTXT` | `T2M` | Sett sammen enlinjetekster til én avsnittstekst, øverst til nederst. |
| `UCS` |  | Ditt eget koordinatsystem: et origo og en X-akse (origo, Z-vinkel, 3punkt, OBjekt, Forrige, Verden, NAvngitt). Punkter du skriver, ortho, polarsporing, rutenettet og ny tekst følger det; visningen snur seg slik at X-aksen blir vannrett. Ingenting i tegningen flyttes. |
| `UNDO` | `U` | Angre den siste kommandoen |
| `UNGROUP` |  | UNGROUP: ta grupper fra hverandre. Velg objekter i gruppene, eller oppgi et Navn. Objektene blir i tegningen. |
| `UNION` | `UNI` | Sett volumlegemer sammen til ett (3D), eller 2D-regioner til én region |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Vis igjen hvert objekt som ISOLATEOBJECTS eller HIDEOBJECTS skjulte. |
| `UNITS` | `UN`, `DDUNITS` | Hvordan lengder vises og skrives: desimal, fot og tommer, brøker (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Beregn feltene på nytt, og velg når de oppdateres av seg selv |
| `USDOUT` |  | Eksporter 3D-modellen som USD (.usda-tekst, .usdc-binær eller en .usdz-pakke) |
| `VIEW` | `-VIEW`, `V` | Standard 3D-visninger, perspektiv eller parallell (3D) |
| `VIEWBASE` | `FLATSHOT` | Plasser en flat 2D-visning av 3D-volumlegemene (forside, topp, side eller isometrisk, skjulte linjer stiplet) på et ark eller i modellen |
| `VIEWLABEL` | `VL` | En visningstittel på et ark som viser visningsområdets visningsnavn, og endrer seg med det. |
| `VOICE` |  | Slå talte kommandoer av eller på. De gjenkjennes på denne datamaskinen. |
| `VPCLIP` |  | Klipper et arks visningsområde til et lukket objekt eller en tegnet mangekant; Slett gjør det til et rektangel igjen |
| `VPLAYER` |  | Frys eller tin lag i noen visningsområder bare (Frys, Tin, Tilbakestill), og velg hvilke lag nye visningsområder starter fryst (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Del tegneområdet i ruter, hver med sin egen visning (på et ark: et visningsområde, som MVIEW) |
| `VPVIEW` |  | Angi hva et visningsområde viser: velg et vindu på modellen |
| `VSCURRENT` | `VS`, `SHADEMODE` | Visuell stil for 3D-visningen: skygget, kanter, skjult linje, trådramme, røntgen |
| `WALL` | `WA` | Tegn 2D-vegger som en polylinje. De settes sammen, og bærer dører og vinduer. |
| `WALLARC` | `WARC` | Tegn en bue av vegger. Plantegningsvegger er rette, så buen tegnes som korte rette vegger (15 grader hver) som settes sammen. |
| `WALLDELSEG` |  | Slett en del av en vegg mellom to punkter. Det som er igjen, blir en eller to vegger. |
| `WALLDIM` |  | Skriv en ny verdi for et mål: veggen i den fjerne enden flyttes vinkelrett på seg selv, veggen i den første enden holder, og veggene som er satt sammen med den, følger. |
| `WALLDISJOIN` |  | Velg en vegg nær én ende for å forby sammenkoblinger i den enden: enden tegnes rett, og ingenting følger den. Velg den igjen for å tillate dem. |
| `WALLGRID` |  | Lås en vegg til en rutenettlinje: langs den, eller én ende på den. Flytt linjen med GRIDMOVE, så følger veggen. |
| `WALLHOLD` |  | Juster og lås: en vegg beholder sin plass mot en annen vegg (på sin linje, eller i avstanden den har). Hvis den ene flyttes, følger den andre. |
| `WALLHOLDDIM` |  | Lås avstanden mellom to parallelle vegger. Hvis den ene flyttes, følger den andre for å beholde den. |
| `WALLHOLDS` |  | List låsene på veggene. |
| `WALLJOINS` |  | Gi hver vegg i en eldre tegning sitt id og lagre sammenkoblingene mellom dem. Dette skjer også ved den første endringen du gjør. |
| `WALLJOINSTYLE` |  | Klikk et hjørne der to vegger møtes ende mot ende for å endre hvordan det tegnes: gjæring, stump, kantet av. T bytter hvilken vegg som går gjennom. |
| `WALLOFFSET` | `WO` | Flytt en vegg vinkelrett på seg selv med en avstand (veggene som er satt sammen med den følger), eller lag en kopi i den avstanden. |
| `WALLPICK` |  | Lag vegger på en linje eller polylinje i tegningen, med linjene satt sammen med den hvis du sier Ja. |
| `WALLPOLY` | `WP` | Tegn vegger rundt en regulær mangekant med 3 til 64 sider, som POLYGON. |
| `WALLRECT` | `WR` | Tegn fire sammenkoblede vegger fra to motstående hjørner, som RECTANG. |
| `WALLREJOIN` |  | Gjør to deler av en vegg til én vegg igjen. Den første beholder sin plass i tegningen. |
| `WALLROT` |  | Tegn fire sammenkoblede vegger som et rektangel vridd til en hvilken som helst vinkel: den første siden, deretter hvor langt ut. |
| `WALLSPLIT` | `WS` | Del en vegg i to ved et punkt eller der en annen vegg krysser. Delene forblir sammenkoblet med mindre du ber om et mellomrom eller frie ender. Dører og vinduer følger sin del. |
| `WALLSPLITGAP` |  | Del en vegg med et mellomrom: skriv mellomrommet, velg veggen, så punktet. Delene beholder frie ender og kan settes sammen igjen. |
| `WALLSTRETCH` |  | Strekk med et vindu: veggender inne i det flyttes, vegger som helt ligger inne flyttes hele, og vegger som støter inn i sidene deres glir med dem. |
| `WALLTAN` |  | Fortsett en vegg med en bue som forlater den langs veggen (tegnet som korte rette vegger). |
| `WALLTRACE` |  | Lag vegger rundt det minste lukkede området av linjer og vegger rundt punktet du klikker. |
| `WALLUNHOLD` |  | Fjern låsene fra en vegg (og låsene til andre vegger mot den). |
| `WBLOCK` | `W`, `-WBLOCK` | Skriv en blokk, noen objekter eller hele tegningen til en ny DWG- eller DXF-fil (W) |
| `WEDGE` | `WE` | Et kile: to hjørner og en høyde; den skråner bort fra det første hjørnet (3D) |
| `WHEREAMI` | `WHERE` | Si hvor markøren er. |
| `WHOHAS` |  | Sier hvem som har en tegning åpen. CadCraft Studio lagrer en liten låsefil ved siden av hver åpen tegning (Plan.dwg.cclock: hvem, siden når, hvilken versjon) og fjerner den når den lukkes. Valg: Gjeldende (den åpne tegningen), Fil (velg én), Mappe (hver tegning i en mappe som er åpen et sted; dette lar også Studio lagre låsefiler i den mappen), Sti (skriv én), Navn (navnet andre ser). En lås som ikke er oppdatert på fem minutter, sies å være foreldet. Ikke tilgjengelig i en nettleser. |
| `WINDOW` | `WN` | Sett et vindu i en vegg. |
| `XATTACH` | `XA` | Koble en annen DWG eller DXF inn i denne tegningen, vist skrivebeskyttet (XREF lister dem og laster dem på nytt) |
| `XCLIP` | `XC` | Klipp blokkreferanser og koblede tegninger til et rektangel eller en mangekant, eller fjern klippingen. |
| `XLINE` | `XL` | Konstruksjonslinje, uendelig i begge retninger: gjennom to punkter, horisontal, vertikal, i en vinkel, halvering av en vinkel, eller forskjøvet fra en linje. |
| `XREF` | `XR`, `-XREF` | Koblede tegninger (eksterne referanser): list, legg ved, last på nytt, bind, koble fra |
| `ZOOM` | `Z` | Utstrekning, eller et vindu |
