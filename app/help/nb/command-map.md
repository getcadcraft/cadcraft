---
title: Kommandokart: hva du skriver
summary: Alle kommandoer CadCraft har, med sine korte navn, A til Z, laget av programmet selv, og vanene fra andre tegneprogrammer som er annerledes.
keywords: kommandokart, kommandoer, aliaser, korte navn, kommer fra, kommandoliste, hva du skriver, slett, trim, tilsvarende, forskjeller
from: 9426856f
---

CadCraft tar de kommandonavnene og de korte navnene folk kjenner fra andre tegneprogrammer: skriv `L` for en linje, `TR` for Trim, `E` for å slette. Det finnes derfor ingen oversettelsestabell å lære for de fleste: navnet du kjenner, er navnet her. Listen under er alle kommandoene CadCraft har, laget av programmet selv. {{key:Enter}} gjentar den siste, og `HELP` i kommandolinjen skriver ut den samme listen.

De få som ikke er like, eller ikke er bygget:

- **Lagre** laster ned en kopi i nettleseren ({{cmd:SAVE}}, {{cmd:SAVEAS}}); i CadCraft Studio skriver den filen. Se [Kommer fra andre tegneprogrammer](topic:coming-from).
- **PLOT** lager en PDF (også PNG og SVG), med en plottestiltabell; det finnes ingen behandling av sideoppsett.
- **DIMSTYLE** og **PEDIT** er bygget; **PEDIT** har ikke alternativet Rediger hjørnepunkt (det gjør håndtakene).
- **TABLE** er ikke bygget; {{cmd:XREF}}, {{cmd:SPLINE}} og {{cmd:WBLOCK}} er det.
- En rutines egne kommandoer (AutoLISP `C:NAME`) dukker opp etter at du laster den med {{cmd:APPLOAD}}; de står ikke oppført her.

## Alle kommandoer (402)

| Kommando | Korte navn | Hva den gjør |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Kretser 3D-visningen med venstre knapp |
| `ACCESS` | `AX` | Slår tegning uten syn av eller på: resultater leses opp via skjermleseren, en tastaturmarkør i tegningen, fangelyder og talte kommandoer. |
| `ALIASEDIT` |  | Rediger kommandoaliaser i én tekstfil (det kjente formatet L, *LINE) |
| `ALIGN` | `AL` | Flytt og roter objekter slik at kildepunkter havner på målpunkter (ett, to eller tre par), og skaler dem om du vil |
| `ALIGNPANEL` | `ALP` | Åpne panelet Innrett og fordel |
| `ALIGNTO` |  | Innrett venstre, midtre, høyre, øvre, midtre eller nedre kanter av de valgte objektene, mot utvalget, det første eller siste valgte objektet, eller et punkt |
| `ANNOALLVISIBLE` | `ANNOALL` | Vis annoterende objekter i alle målestokker, eller bare der målestokken for visningsområdet (eller tegningen) står i listen deres |
| `ANNOSCALE` | `CANNOSCALE` | Angi tegningens merkingsmålestokk: annoterende tekst og mål endres slik at de skrives ut i samme størrelse |
| `APPLOAD` | `AP` | Last programmer: LISP-rutiner (.lsp) og deres dialogfiler (.dcl); oppstartspakken (AP) |
| `ARC` | `A` | Bue: 3-punkt, Start/Sentrum/Slutt, Start/Sentrum/Vinkel, Start/Sentrum/Lengde, Start/Slutt/Vinkel, Start/Slutt/Retning, Start/Slutt/Radius, Sentrum/Start/Slutt, Sentrum/Start/Vinkel, Sentrum/Start/Lengde, Fortsett |
| `AREA` | `AA` | Areal og omkrets etter punkter eller for et objekt; Legg til og Trekk fra holder en løpende sum (AA) |
| `ARRAY` | `AR` | Kopier i rader og kolonner, eller rundt et sentrum (AR) |
| `ARRAYASSOCIATIVITY` |  | Angir om ARRAY-kommandoene lager matriser som kan redigeres (1) eller vanlige kopier (0) |
| `ARRAYCLOSE` |  | Avslutter redigering av en matrises kildeobjekter |
| `ARRAYEDIT` |  | Endrer en matrise laget med alternativet Assosiativ: antall, avstand, kildeobjekter, ett element |
| `ARRAYPATH` |  | Kopier av objekter langs en linje, bue, polylinje eller annen kurve |
| `ARRAYPOLAR` |  | Kopier rundt et sentrumspunkt |
| `ARRAYRECT` |  | Kopier i rader og kolonner |
| `ASBUILT` | `ASB` | ASBUILT leser punktene for som-bygget som et mannskap målte (CSV / TXT, slik EXPORTPOINTS skriver dem), og sammenligner dem med tegningens punkter: innenfor eller utenfor toleransen, ikke målt, ekstra. Merker dem på laget AS-BUILT og laster ned en CSV-rapport. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definer en attributt (en merkelapp en blokk ber om en verdi for) som skal settes i en blokk (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Rediger attributtverdiene til en blokkreferanse på kommandolinjen, én etter én (Enter beholder en verdi) |
| `ATTSYNC` |  | Hold blokkens referanser i samsvar med attributtdefinisjonene: nye legges til med sine standardverdier, fjernede slettes, plasseringer og tekst tilbakestilles; verdier beholdes |
| `AUDIT` |  | Sjekker den åpne tegningen for skade: tall som ikke er endelige, objekter uten størrelse, manglende lag, blokker, stiler og linjetyper, blokker som inneholder seg selv, delte id-er, ødelagte mål og skravurer. Lister det den finner etter type og spør før den retter; rettingen er ett angretrinn. |
| `AUNITS` | `ANGUNITS` | Hvordan vinkler vises og skrives: desimalgrader, grader-minutter-sekunder eller peilinger som N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Tegningsautofullføring av eller på, eller list hva tegningens mønstre foreslår nå. |
| `AUTOCONSTRAIN` |  | Legg til sammenfallende, horisontale og vertikale betingelser der geometrien allerede er nær |
| `AUTODIM` | `ADIM` | Mål etter regler: totalmål, kjeder langs sidene, åpninger, hulldiametre og rutenettavstand, uten å gjenta det som allerede er målsatt. |
| `AUTOSHEET` | `ASH` | Legger ut ark av seg selv: velger papir og standardmålestokker, og plasserer hver visning med en bildetekst og et tegningshode. |
| `BATTMAN` |  | Attributtbehandler for blokker: rekkefølge, merkelapper, ledetekster, standardverdier og moduser for en blokks attributter, deretter oppdateres dens referanser |
| `BCLOSE` |  | Lukk blokkredigeringen: lagre blokken eller forkast endringene |
| `BCONVERT` |  | BCONVERT finner geometri som gjentas og gjør den om til blokkreferanser. Velg objektene som gjentas: hvert annet sett objekter i det åpne rommet som er samme geometri, flyttet og rotert i en hvilken som helst vinkel, blir funnet, og med Speilvendt eller Skalert på blir også speilbilder og kopier i en annen størrelse funnet. Gi den nye blokken et navn og et basispunkt; utvalget og hver kopi blir referanser til den, hver med sin egen rotasjon og skala. Eller velg Blokk og navngi en eksisterende blokk for å finne løse kopier av objektene. En kopi må ha samme lag, farge, linjetype og linjevekt, med mindre Egenskaper er satt til Ignorer. Objekter på låste lag blir ikke rørt. Ett angretrinn. |
| `BEDIT` | `BE` | Blokkredigering: rediger en blokks objekter og attributter; BCLOSE lagrer (BE) |
| `BLEND` |  | BLEND: en spline mellom endene av to åpne kurver, valgt nær endene for å settes sammen. CONtinuity: Tangent følger begge retninger, Smooth følger også hvordan de krummer. |
| `BLOCK` | `B`, `BMAKE` | Lag en blokk av objekter (de blir én referanse) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: hver referanse til én blokk blir en referanse til en annen, på samme sted med samme skala og rotasjon. Verdier for attributter som begge blokkene har, beholdes. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE viser Blokkpanelet med markøren i filteret. Panelet viser et bilde av hver blokk (de sist plasserte først), som liste eller rutenett; klikk et bilde, eller dra det inn i tegningen, for å plassere blokken med INSERT. Under Biblioteker legger du til en egen DWG- eller DXF-fil: blokkene listes med bilder og kopieres inn i denne tegningen når du plasserer en. I CadCraft Studio kan også en mappe med tegninger legges til, og filer og mapper huskes. |
| `BOMEDIT` | `BOMCOLUMNS` | Kolonnene, gruppering, sortering, tittel, totaler og merknader i en materialliste-tabell |
| `BOMEXPORT` |  | Lagre en materialliste-tabell som en .csv-fil |
| `BOMTABLE` | `BOM` | En levende materialliste-tabell for én sone, eller for hele tegningen |
| `BOMUPDATE` |  | Oppdater alle materialliste-tabeller nå, også de frosne |
| `BOMZONE` | `BZONE` | Et navngitt område i tegningen for en materialliste: to hjørner, en mangekant, eller omrisset til et lukket objekt |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): velg et punkt inne i et lukket område, og få en lukket polylinje rundt det. Buer forblir buer. Øyer tegner også omrisset av områdene inni. |
| `BOX` |  | En boks: to hjørner og en høyde (3D) |
| `BPARAMETER` | `BPARAM` | Ikke bygget ennå: legge til en parameter (for eksempel Synlighet) i en blokk. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blokkparametere: navngitte parametere med formler, og flere synlighetsparametere i én blokk. Virker i blokkredigeringen (tilordne de valgte objektene til en tilstand) og på en valgt referanse (dens egne verdier og tilstander). |
| `BREAK` | `BR` | Bryt en linje, bue, sirkel eller polylinje mellom to punkter (BR) |
| `BREAKATPOINT` |  | Del en linje, bue eller polylinje i to ved et punkt |
| `BREAKLINE` |  | Tegn en linje med et bruddsymbol; størrelsen og forlengelsen forbi endene huskes. |
| `BREPLACE` |  | BREPLACE bytter én blokk med en annen. Valgte: velg blokkreferanser og navngi blokken som skal brukes i stedet. Alle: navngi en blokk og dens erstatning, så endres hver referanse i alle rom og inni andre blokker. En referanse beholder sin plass, skala, rotasjon og lag, og verdiene til attributter som begge blokkene har; verdier den nye blokken ikke har plass til, slettes og nevnes. |
| `BSEARCH` |  | BSEARCH finner blokker. Navn: en del av et blokknavn, eller et mønster med * og ?. Attributt: en verdi (eller TAG=verdi) som en referanses attributter har. Geometri: velg objekter eller én blokkreferanse, og blokkene hvis form er minst 85 % lik, listes, best først; størrelse, rotasjon og speiling teller ikke. Referansene som finnes i det åpne rommet, velges og er klare for neste kommando. |
| `BURST` |  | Eksploder blokkreferanser og behold det attributtene sier: hver verdi blir tekst på attributtens eget lag. |
| `BVHIDE` | `BVH` | I blokkredigeringen: skjul objekter i gjeldende synlighetstilstand. |
| `BVSHOW` | `BVSH` | I blokkredigeringen: vis objekter som gjeldende synlighetstilstand skjuler (de vises blekt, så du kan velge dem). |
| `BVSTATE` | `BVS` | I blokkredigeringen, på en blokk med synlighetstilstander: bytt til en tilstand, eller legg til, gi nytt navn til eller slett en. |
| `CAL` |  | Regn ut en lengde eller et tall: + − * / og parenteser, slik du skriver dem hvor som helst |
| `CENTERLINE` | `CL` | Senterlinje mellom to linjer: midt mellom dem, eller langs halveringslinjen når de møtes (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Senter-merke: et kryss i midten av en sirkel eller bue, med senterlinjer til like forbi den (CM) |
| `CHAMFER` | `CHA` | Skråkant på hjørnet mellom to linjer (D to avstander, A lengde og vinkel, P hvert hjørne i en polylinje) |
| `CHSPACE` |  | CHSPACE: flytt objekter mellom et ark og modellen gjennom et visningsområde. De skaleres og roteres slik at de ser like ut fra den andre siden. På et ark går de til modellen; når du arbeider gjennom et visningsområde (MSPACE), kommer de til arket. |
| `CIRCLE` | `C` | Senter og radius, diameter, 2 eller 3 punkter |
| `CLASS` |  | Legg de valgte objektene i en klasse, eller når ingenting er valgt, sett den aktive klassen (? lister dem) |
| `CLASSES` | `CLS` | Klassepanelet: klasser sorterer objekter på tvers av lag; vis, skjul og stil dem, og overstyr dem per visningsområde (CLS) |
| `COMMANDLINE` | `CMDLINE` | Fest eller frigjør kommandolinjen, gjør den til én linje, angi antall historikklinjer, eller åpne historikken (F2) |
| `COMPARESETTINGS` | `CMPSET` | Sammenlign målstiler, tekststiler, lag, ark eller enheter: to i denne tegningen, eller denne tegningen mot en annen åpen, og kopier en verdi over. |
| `CONSTRAINTBAR` | `CBAR` | Vis eller skjul betingelseslinjene (Showall / Hideall, eller per objekt) |
| `COPY` | `CO`, `CP` | Kopier objekter, så mange ganger du klikker |
| `COPYBASE` |  | Kopier objekter til utklippstavlen med et basispunkt du velger |
| `COPYCLIP` |  | Kopier objekter til utklippstavlen (Ctrl+C); PASTECLIP plasserer dem |
| `COUNT` | `BCOUNT` | Tell blokkreferanser: velg én for å velge og telle hver referanse til blokken |
| `COUNTTABLE` |  | Plasser en tabell over blokktellinger |
| `CREDITS` |  | Legger bibliotekets kildehenvisninger i tegningen som en tabell. Kjør den på nytt for å oppdatere tabellen fra elementene i tegningen nå. |
| `CURSORSIZE` |  | Størrelsen på siktekorset: 100 kjører det fra kant til kant over tegningen (Innstillinger › Markør › Fullskjerm) |
| `CUTCLIP` |  | Klipp ut objekter til utklippstavlen (Ctrl+X): kopier, og slett deretter |
| `CYLINDER` | `CYL` | En sylinder: senter, radius og høyde (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Lister blokker, deres attributter og objektegenskaper som en tabell i tegningen eller en CSV-fil |
| `DATALINK` | `DL` | En tabell fra en CSV-fil som husker filen, så den kan leses igjen |
| `DATALINKUPDATE` | `DLU` | Les en datalenkes fil på nytt og fyll tabellene på nytt |
| `DCALIGNED` | `DCALI` | Dimensjonell betingelse: sann avstand mellom punkter, et punkt og en linje, eller to linjer |
| `DCANGULAR` | `DCANG` | Dimensjonell betingelse: vinkel mellom to linjer, eller for en bue |
| `DCCONVERT` |  | Gjør mål tegnet på betingbar geometri om til dimensjonelle betingelser |
| `DCDIAMETER` | `DCDIA` | Dimensjonell betingelse: diameter på en sirkel eller bue |
| `DCDISPLAY` |  | Vis eller skjul dimensjonelle betingelser i tegningen |
| `DCHORIZONTAL` | `DCHOR` | Dimensjonell betingelse: horisontal avstand |
| `DCLINEAR` | `DCLIN` | Dimensjonell betingelse: horisontal eller vertikal avstand, fra der du plasserer den |
| `DCRADIUS` | `DCRAD` | Dimensjonell betingelse: radius på en sirkel eller bue |
| `DCVERTICAL` | `DCVER` | Dimensjonell betingelse: vertikal avstand |
| `DELBLOCKS` |  | Slett blokker: hver referanse (også innkapslede, på hvert ark) og definisjonene |
| `DELCONSTRAINT` | `DELCON` | Fjern alle betingelser (geometriske og dimensjonelle) fra objektene du velger |
| `DELOPENING` |  | Ta en dør eller et vindu ut av en vegg. |
| `DESCRIBE` | `DESC` | Si hva tegningen inneholder: hvor mange objekter, av hvilken type, hvor store, hva som er valgt. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Fjern utvalget (Esc) |
| `DETAILS` | `DET` | Din firmas egne detaljer, funnet for det du tegner: finn, legg til en blokk, lister, fjern, slå forslagene av eller på. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Tegn et diagram fra tekst: et Mermaid-flytdiagram, et PlantUML-komponentdiagram, D2, en fra-til-liste eller draw.io XML, som blokker og koblinger du kan redigere |
| `DIMALIGNED` | `DAL`, `DIMALI` | Sann avstand mellom to punkter |
| `DIMANGULAR` | `DAN`, `DIMANG` | Vinkel mellom to linjer, for en bue, eller med tre punkter |
| `DIMARC` | `DAR` | Buelengde-mål: avstanden langs en bue, med buesymbolet (DAR) |
| `DIMASZ` |  | Målinnstilling: pilstørrelse |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Mål stablet fra én grunnlinje |
| `DIMBREAK` | `DBREAK` | Bryt mållinjer og hjelpelinjer der de krysser andre objekter (Auto), mellom to punkter (Manuell), eller fjern bruddene |
| `DIMCONSTRAINT` | `DCON` | Dimensjonelle betingelser: lineære, innrettede, vinkel-, radius-, diameter-, konverter |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | En kjede av mål, hvert fra enden av det forrige |
| `DIMDEC` |  | Målinnstilling: desimaler |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diameter for en bue eller sirkel |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Frigjør mål fra objektene de er knyttet til (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Endre måltekst (Hjem, Ny tekst, Roter) eller skrå hjelpelinjene (Skrå) |
| `DIMEXE` |  | Målinnstilling: forlengelse forbi mållinjen |
| `DIMEXO` |  | Målinnstilling: forskyvning fra origo |
| `DIMGAP` |  | Målinnstilling: mellomrom rundt teksten |
| `DIMINSPECT` |  | Kontrollmål: en ramme rundt verdien med en merkelapp og hvor ofte delen kontrolleres |
| `DIMJOGGED` | `DJO`, `JOG` | Radiusmål med knekk: en radius tegnet fra et nærmere punkt når senteret er langt unna (DJO) |
| `DIMJOGLINE` | `DJL` | Legg et knekksymbol til en lineær eller innrettet mållinje, for å vise at avstanden ikke er tegnet i målestokk (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horisontal eller vertikal avstand (R for en hvilken som helst vinkel) |
| `DIMLUNIT` |  | Målinnstilling: lengdeformat (1 vitenskapelig, 2 desimal, 3 ingeniør, 4 arkitekt, 5 brøk) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinatmål: X- eller Y-avstanden fra et punkt til BKS-origo, på en hjelpelinje (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Overstyr målvariabler på valgte mål uten å endre stilen; Clear setter stilen tilbake (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radius for en bue eller sirkel |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Knytt målets punkter til objekter, slik at det følger og måler på nytt når de flyttes (DRE) |
| `DIMSCALE` |  | Målinnstilling: samlet skala (størrelser × dette) |
| `DIMSPACE` |  | Jevn avstand mellom parallelle mål, målt fra et grunnmål (0 linjer dem opp, Auto er to ganger teksthøyden) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Lag, endre, gjør aktiv, slett, bruk og sammenlign navngitte målstiler (dialogen; -DIMSTYLE på kommandolinjen) |
| `DIMTEDIT` | `DIMTED` | Flytt måltekst til venstre, høyre eller midten av mållinjen, eller snu den |
| `DIMTEXTUNIT` | `DTU` | Måltekst i mm, cm, m eller km, eller i tegningens egne enheter: de valgte målene, ellers nye (DTU) |
| `DIMTXT` |  | Målinnstilling: teksthøyde |
| `DIST` | `DI` | Avstand og vinkel mellom to punkter |
| `DISTRIBUTE` |  | Fordel de valgte objektene jevnt, side ved side eller opp og ned: like steg mellom sentrene, eller like mellomrom; de ytterste to blir stående |
| `DIVIDE` | `DIV` | DIVIDE (DIV): merker som deler en linje, bue, sirkel, polylinje, spline eller ellipse i like deler. Punkter, eller med Blokk en blokk ved hvert merke. |
| `DOCUMENTS` | `DOCS` | Åpne Dokumentpanelet: sjekk tegninger ut og inn, revisjoner, utgivelsestilstander og godkjenning for en prosjektmappe |
| `DOOR` | `DR` | Sett en dør i en vegg. Siden du klikker på, er siden den svinger mot. |
| `DRAWORDER` |  | Endre tegningsrekkefølgen: bring objekter forrest, send dem bakerst, eller legg dem over eller under andre objekter. |
| `DUPLICATE` | `DUP` | En kopi som følger pekeren: klikk for å sette den ned (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Tegningens egenskaper: tittel, forfatter og resten, og egne navn- og verdi-par |
| `DXFOUT` |  | Last ned tegningen som DXF R12 (Lagre beholder sitt eget format) |
| `EATTEDIT` | `DDATTE` | Rediger en blokkreferanses attributter: verdier, tekst og egenskaper, én attributt om gangen |
| `ELLIPSE` | `EL` | Endepunkter for aksen og den andre halvaksen |
| `ERASE` | `E`, `DELETE` | Fjern objekter |
| `EXPLODE` | `X` | Del polylinjer, blokker og mål i deres deler |
| `EXPORT` | `EXP` | Lagre en kopi av tegningen i en filtype et tillegg skriver |
| `EXPORT3D` | `3DEXPORT` | Eksporter 3D-modellen: GLB, OBJ eller STL |
| `EXPORTPOINTS` | `EXPPTS` | Skriv punkter, og blokkers innsettingspunkter med én attributt som beskrivelse, til en CSV- eller TXT-fil (PNEZD, PENZD eller XYZ) for BIM- og oppmålingsprogrammer |
| `EXTEND` | `EX` | Forleng objekter til de møter andre: klikk nær en ende, dra gjennom flere, eller Shift+klikk for å trimme |
| `EXTRIM` |  | EXTRIM: velg én skjærekant, deretter en side. Alt som krysser kanten, trimmes på den siden. Bitene som ville gått, vises mens du beveger pekeren. |
| `EXTRUDE` | `EXT` | Ekstruder lukkede 2D-objekter til volumlegemer (3D) |
| `FIELD` |  | Plasser et felt i en tekst, en tabellcelle eller en attributt: en dato, filnavnet, arknummeret, en tegningsegenskap, et objekts areal eller lengde, eller en formel |
| `FILLET` | `F` | Avrund eller kapp hjørnet mellom to objekter (R radius, P hvert hjørne i en polylinje, M flere) |
| `FIND` |  | Finn og erstatt ord i tekst, attributtverdier og måltekst |
| `FLATTEN` |  | Sett høyden (Z) og tykkelsen på de valgte objektene til 0, også i blokkene de bruker. |
| `FLOOR` |  | Velg etasjen å tegne på, legg til en, eller flytt eller kopier utvalget til en. |
| `FLOORLAYERS` |  | Gjør etasjer om til lag som heter Floor-Layer, for en fil som skal til noen uten etasjer. |
| `FLOORS` | `FLR` | Åpne Etasjepanelet: stable etasjer i ett modellrom. |
| `GCCOINCIDENT` |  | Betingelse: to punkter møtes, eller et punkt blir på et objekt |
| `GCCOLLINEAR` |  | Betingelse: to linjer blir på én linje |
| `GCCONCENTRIC` |  | Betingelse: to sirkler eller buer deler senter |
| `GCEQUAL` |  | Betingelse: to linjer forblir like lange, eller to sirkler/buer like store radier |
| `GCFIX` |  | Betingelse: et punkt eller et helt objekt blir der det er |
| `GCHORIZONTAL` |  | Betingelse: en linje (eller to punkter) forblir horisontal |
| `GCPARALLEL` |  | Betingelse: to linjer forblir parallelle |
| `GCPERPENDICULAR` |  | Betingelse: to linjer forblir i rette vinkler |
| `GCSYMMETRIC` |  | Betingelse: to punkter, linjer eller sirkler speiler hverandre over en linje |
| `GCTANGENT` |  | Betingelse: en linje og en sirkel eller bue (eller to av dem) forblir tangenter |
| `GCVERTICAL` |  | Betingelse: en linje (eller to punkter) forblir vertikal |
| `GDSIN` | `GDS` | Vis en IC-layout (en GDSII-strømfil): hvert lag og datatype som et tegnelag, flatt, i brukerenheter; kun for visning og måling (laboratorieforsøk) |
| `GEOMCONSTRAINT` | `GCON` | Geometriske betingelser: horisontal, vertikal, parallell, tangent, sammenfallende … |
| `GLBOUT` |  | Eksporter 3D-modellen som GLB (glTF) |
| `GRADIENT` | `GD` | Fyller et område med en gradient av én eller to farger |
| `GRID` |  | Angi rutenettet: avstanden mellom linjene, hver N-te linje som hovedlinje, PÅ eller AV, eller Auto for å følge zoomen igjen |
| `GRIDMOVE` | `GM` | Flytt en rutenettlinje og ta med det som henger på den: vegger strekkes, søyler, bobler og merkelapper flyttes, mål følger. |
| `GROUP` | `G` | GROUP (G): gi de valgte objektene et felles navn. Et klikk på ett av dem velger dem alle. Enter ved navnet lager en gruppe uten navn. |
| `GROUPEDIT` |  | GROUPEDIT: endre en gruppe. Velg ett av objektene eller gi navnet, legg så til eller fjern objekter, REName for å gi nytt navn, endre beskrivelsen, eller si om et klikk velger den hel. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Fyll et område med et heldekkende fyll eller et mønster: klikk inni det, eller velg lukkede objekter (H) |
| `HATCHEDIT` | `HE` | Endre en skravur: mønster, skala, vinkel, origo og dens lenke til en grense. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Lager grenselinjene på nytt fra en skravur, lenket til den eller ikke |
| `HATCHTOBACK` |  | Send hver skravur bak alt annet. |
| `HELP` | `?` | Denne listen |
| `HIDEOBJECTS` |  | Skjul de valgte objektene til UNISOLATEOBJECTS. Lagres ikke med tegningen. |
| `HISTORY` | `HIST` | HISTORY (HIST): versjonene av denne tegningen — kopier som lagres på denne datamaskinen når Studio lagrer den, og skyens versjoner — for å åpne, gjenopprette og sammenligne med det som er endret, vist i farge. |
| `ID` |  | Koordinater for et punkt |
| `IMAGE` | `IM` | Gi CadCraft bildefilene en tegning bruker (en DWG lagrer bare hvor de var). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Plasser et bilde (PNG eller JPEG) fra en fil. |
| `IMAGECLIP` | `ICL` | Klipp et bilde til et rektangel eller en mangekant, eller fjern klippingen. |
| `IMPORT` | `IMP` | Importer en fil av en type et tillegg leser, inn i denne tegningen |
| `INSERT` | `I`, `DDINSERT` | Plasser en blokk (S skala, R roter); F fra en DWG/DXF-fil, L fra biblioteket |
| `INTERSECT` | `IN` | Behold bare det volumlegemene har felles (3D), eller området 2D-regionene deler |
| `ISODRAFT` |  | ISODRAFT: isometrisk tegning av eller på, eller rett inn på planet Venstre, Topp eller Høyre. Når den er på, følger Ortho og polarsporing planets to akser, rutenettet tegnes isometrisk, og ELLIPSE har Isosirkel. |
| `ISOLATEOBJECTS` | `ISOLATE` | Vis bare de valgte objektene; alt annet i rommet er skjult til UNISOLATEOBJECTS. Lagres ikke med tegningen. |
| `ISOPLANE` |  | ISOPLANE: velg isometrisk plan å tegne på: Venstre, Topp eller Høyre. Enter går til neste, slik F5 gjør når isometrisk tegning er på. |
| `JOIN` | `J` | Slå sammen linjer, buer og polylinjer som møtes ende mot ende til én polylinje; linjer på én linje til én linje (J) |
| `LASER` | `LASERCUT` | Åpne Laser-panelet: send lag til en laserskjærer eller gravør (GRBL G-kode) |
| `LASSOMODE` |  | Trykk og dra tegner et lasso (1) eller et rektangel (0) |
| `LAYDEL` |  | Slett et lag og hvert objekt på det (i modellen, på ark og i blokker) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Åpne lagbehandleren: hvert lag i én tabell |
| `LAYERPANEL` |  | Vis layerpanelet |
| `LAYFRZ` |  | Frys laget til hvert objekt du velger |
| `LAYGROUP` | `LG` | Gruppér lag i mapper i layerpanelet. |
| `LAYISO` |  | Isoler lagene til de valgte objektene (alle andre lag av) |
| `LAYLOCKFADE` |  | Angi hvor mye objekter på låste lag blekner, og om et klikk kan velge dem. |
| `LAYMCUR` |  | Gjør laget til objektet du velger, aktivt |
| `LAYMRG` |  | Slå sammen lag: objektene flyttes til et målag, og de sammenslåtte lagene forsvinner |
| `LAYOFF` |  | Slå av laget til hvert objekt du velger |
| `LAYON` |  | Slå på alle lag |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Et nytt ark med et tegningshode og et visningsområde |
| `LAYTHW` |  | Tin alle lag |
| `LAYUNISO` |  | Slå på igjen lagene som LAYISO slo av |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Konverterer tekst skrevet med gamle vietnamesiske skrifter (TCVN3 / ABC-skrifter som .VnTime, og VNI-skrifter som VNI-Times) til Unicode. Slik tekst vises allerede slik den leses; dette skriver den om for godt, med en teller og ett angretrinn. |
| `LENGTHEN` | `LEN` | Forleng eller forkort linjer, buer og polylinjer: med et beløp, en prosent, til en total lengde, eller ved å dra (LEN) |
| `LIBRARY` | `LIB` | Bibliotekpanelet: plasser elementer, se etter oppdateringer, kildehenvisninger |
| `LIMITS` |  | Angi tegningens grenser: ON, OFF, eller hjørnene nede til venstre og oppe til høyre. Med grensene PÅ avvises punkter utenfor dem |
| `LINE` | `L` | Rette segmenter, hvert sitt eget objekt |
| `LINETYPE` | `LT`, `CELTYPE` | Linjetypen nye objekter får (etter lag, etter blokk, eller en navngitt) |
| `LINKVIEWS` | `SYNCVIEWS` | Panorer og zoom alle ruter sammen (delt skjerm), for å sammenligne to tegninger eller revisjoner |
| `LISPEDIT` | `VLIDE` | LISPEDIT (eller VLIDE) åpner LISP-editoren: et vindu for å skrive, laste og prøve en rutine. Last inn i tegningen leser hvert uttrykk, slik APPLOAD gjør med filen, og lager kommandoene. Kjør utvalg kjører de valgte uttrykkene, eller uttrykket markøren står i. Konsollen viser det rutinen skrev ut og hver feil med sitt linjenummer. Parentesen som hører sammen markeres mens du skriver, og Enter setter inn den nye linjen med innrykk. Ny, Åpne og Lagre virker på en .lsp-fil. Listene ved siden av teksten viser funksjonene rutinen definerer, dem den kaller som denne LISP-en ikke har ennå, og alle funksjonene den har. Vinduet blokkerer ikke tegningen, så en rutine kan be om punkter; Stopp eller Esc avslutter en rutine som kjører. |
| `LIST` | `LI`, `LS` | Beskriv objekter i historikken |
| `LTSCALE` | `LTS` | Tegningens linjetypeskala (hver strek og hvert mellomrom ganges med den) |
| `LWDISPLAY` | `LWT` | Vis eller skjul linjevekter på skjermen (LWT-knappen i statuslinjen) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Linjevekten nye objekter får (etter lag, etter blokk, standard, eller mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Kartlag under modellrommet: tegningens koordinatsystem, fliser, WMS, WMTS, ArcGIS, bilder |
| `MASSPROP` |  | MASSPROP: tverrsnittsegenskaper for områder og lukkede objekter: areal, omkrets, tyngdepunkt, momenter og treghetsprodukt, treghetsradier og hovedakser. Eksakt for linjer og buer. Kan skrive rapporten til en tekstfil. |
| `MATCHPROP` | `MA`, `PAINTER` | Match egenskaper: kopier ett objekts lag, farge og mer over på andre (MA) |
| `MEASURE` | `ME` | MEASURE (ME): et merke for hver gitte lengde langs en linje, bue, sirkel, polylinje, spline eller ellipse, fra enden nærmest pekingen. Punkter, eller med Blokk en blokk ved hvert merke. |
| `MEASUREGEOM` | `MEA` | Mål en avstand, en radius, en vinkel eller et areal (MEA) |
| `MINSERT` |  | MINSERT: plasser en blokk i rader og kolonner i ett drag. Hver er sin egen referanse, så du kan flytte eller slette hver enkelt. |
| `MIRROR` | `MI` | Speil objekter over en linje |
| `MLEADER` | `MLD`, `MLEAD` | Flerhjelpelinje: en pil, en hjelpelinje og en merknad, som ett objekt (MLD) |
| `MLEADERALIGN` | `MLA` | Innrett flerhjelpelinjer etter én av dem langs en retning, med like avstander, eller fordelt mellom to punkter (MLA) |
| `MLEADERCOLLECT` | `MLC` | Samle flere flerhjelpelinjer til én: blokkene deres i en rad eller kolonne, eller merknadene under hverandre (MLC) |
| `MLEADEREDIT` | `MLE` | Legg til hjelpelinjer til en flerhjelpelinje eller fjern dem; bytt innholdet mellom tekst og en blokk (MLE) |
| `MLINE` |  | Tegn parallelle linjer samtidig, sammenføyd i hjørnene. |
| `MOVE` | `M` | Flytt objekter med et basispunkt og et annet punkt |
| `MSPACE` | `MS` | Arbeid på modellen gjennom et visningsområde på det åpne arket (eller dobbeltklikk inne i visningsområdet). |
| `MTEXT` | `MT`, `T` | Avsnittstekst: dra bredden, og skriv deretter på stedet; Enter starter et nytt avsnitt (T) |
| `MVIEW` | `MV` | Et visningsområde mot modellen, på et layout |
| `NAMEDVIEW` | `NV`, `VIEWS` | Navngitte visninger: lagre visningen på skjermen (eller et vindu) under et navn, og gå tilbake til den (NV) |
| `NCOPY` |  | Kopier objekter ut av en blokkreferanse eller en lenket tegning og inn i tegningen, uten å eksplodere den. |
| `NEARBY` |  | Si hva som ligger nær markøren, nærmest først, med avstand og side. |
| `NEW` |  | Start en ny tegning |
| `OBJECTSCALE` | `OBJSCALE` | Merkingsmålestokker for annoterende tekst og mål: legg til en målestokk, slett en, legg til gjeldende målestokk, eller list dem (hvert visningsområde viser dem i størrelsen for sin egen målestokk) |
| `OBJOUT` |  | Eksporter 3D-modellen som OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Kontorstandarden: tekstlengder på papir, lag, felt i tegningshodet og maler i én post. Viser den som gjelder og hvor den kommer fra; Importer en .json-post inn i denne tegningen, legg til kontorlagene tegningen mangler, list feltene i tegningshodet. |
| `OFFSET` | `O` | Parallelle kopier i en avstand |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: hvordan OFFSET lukker hullene i de ytre hjørnene på en polylinje. 0 forlenger segmentene, 1 legger til en bue, 2 legger til et rett kutt. Beholdes for denne økten. |
| `OLELIST` | `OLES` | Lister OLE-objektene en tegning har, og legger en kopi av et bilde der du velger |
| `OPEN` |  | Åpne en DWG eller DXF fra denne datamaskinen |
| `OPENIN3D` |  | Åpne denne tegningen i 3D-modelleringsappen, i en ny fane (ingenting lastes opp) |
| `OPTIONKEYS` | `OPTKEYS` | Gi kommandoalternativer egne bokstaver (ARRAY.PO, P), i én tekstfil |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Åpne objektfangmenyen: velg hvilke fang som er på. Også et høyreklikk på Fang i statuslinjen. |
| `OVERKILL` |  | Slett dupliserte objekter og slå sammen overlappende eller ende-mot-ende-linjer og buer, innenfor en toleranse. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Parameterpanelet: brukerparametere og dimensjonelle betingelser i én tabell |
| `PARTSLIST` | `PLIST` | En delliste-tabell over hver standarddel og stålprofil plassert fra biblioteket |
| `PASTEAREA` | `PAREA` | Lim inn et område kopiert i MarkupCraft (Kopier område) i sin virkelige størrelse, som et bilde. |
| `PASTEBLOCK` |  | PASTEBLOCK: lim inn det du kopierte som én blokk. Blokken får et eget navn; RENAME gir den ditt. |
| `PASTECLIP` |  | Lim inn utklippstavlen: den følger markøren, klikk der den skal (Ctrl+V) |
| `PASTEORIG` |  | Lim inn utklippstavlen på koordinatene den ble kopiert fra (Ctrl+Shift+V) |
| `PDF` |  | Gi CadCraft PDF-filene tegningens underlag bruker |
| `PDFADJUST` |  | Blekn, øk kontrast, gjør monokrom eller slå av et PDF-underlag |
| `PDFATTACH` | `PDFATT` | Fest en PDF-side som underlag (PDFATTACH) |
| `PDFCLIP` |  | Klipp et PDF-underlag til et rektangel eller en mangekant |
| `PDFIMPORT` | `PDFIM` | Gjør en PDF-sides linjer, fyll og tekst om til tegningsobjekter (PDFIMPORT) |
| `PDFLAYERS` |  | Slå PDF-underlagets egne lag av eller på |
| `PEDIT` | `PE` | Rediger en polylinje: lukk, åpne, slå sammen, bredde, tilpass kurve, spline-kurve, rett ut, linjetypegenerering, snu; linjer, buer og splines kan gjøres om til polylinjer |
| `PENPRESSURE` |  | Om trykket i et pennestrøk setter linjevekten til det SKETCHFIX og SKETCHLIVE lager (på som standard). Lagres i denne nettleseren. |
| `PHOTOSKETCH` | `PSK` | Gjør et bilde av en håndskisse på papir om til linjer og buer i målestokk, retter opp perspektivet og gir hver pennfarge sitt eget lag. |
| `PICKSTYLE` |  | PICKSTYLE: om valg av ett objekt i en gruppe velger hele gruppen (1, startinnstillingen) eller bare det objektet (0). Beholdes for denne økten. |
| `PLAN` |  | Snu visningen slik at BKS-X-aksen (gjeldende BKS, en lagret BKS, eller verdenen) står vannrett på skjermen. Ingenting i tegningen flyttes. |
| `PLINE` | `PL` | En polylinje av linje- og bue-segmenter |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Plott til PDF: et layout, eller modellen i en målestokk |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Plottestiltabeller: angi hva hver farge skrives ut som (farge, svart, gråtone, blekk, linjevekt); lagres med tegningen (STYLESMANAGER) |
| `POINT` | `PO` | Punktobjekter |
| `POINTCLOUD` | `PC` | Den tilkoblede punktskyen: snitt, høyde, tykkelse, farge, størrelse, synlig, zoom, koble fra |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Koble til en punktsky (LAS, LAZ, XYZ, PTS) under tegningen |
| `POLARANG` |  | Trinnet for polarsporing i grader (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | En vanlig mangekant |
| `PRESSPULL` |  | Skyv eller trekk en flate på et volumlegeme (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Åpne Egenskaper-panelet (også Ctrl+1, eller dobbeltklikk et objekt) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Fold Egenskaper-panelet til vinduskanten |
| `PSPACE` | `PS` | Forlat visningsområdet du arbeider i, og gå tilbake til arket (eller dobbeltklikk utenfor det). |
| `PUBLISH` | `-PUBLISH` | Plott flere eller alle ark til én PDF (en side og et bokmerke per ark) |
| `PURGE` | `PU` | Fjern blokkdefinisjoner som ingenting bruker |
| `QDIM` |  | Hurtigmål: mål flere objekter samtidig (kontinuerlig, grunnlinje, forskjøvet, ordinat, radius eller diameter) |
| `QPMODE` | `QP` | Hurtig egenskaper ved markøren, av eller på |
| `QSELECT` | `QS` | Hurtigvalg: hvert objekt av en type der lag, farge, størrelse eller navn stemmer (QS) |
| `RASTERSNAP` |  | Slå fang til linjene på skannede ark av eller på. |
| `RAY` |  | Stråle: en konstruksjonslinje fra et punkt, uendelig i én retning. |
| `RECOVER` |  | Åpner en skadet DXF eller DWG: hopper over det som ikke kan leses, i stedet for å avvise filen, sier hva som ble hoppet over, og sjekker og reparerer tegningen slik AUDIT gjør. |
| `RECTANG` | `REC`, `RECTANGLE` | En lukket polylinje fra to hjørner |
| `REDLINE` | `RDL` | Rødstrek til revisjon: les MarkupCraft-pakken for rødstrek, godta eller avvis hver endring, sky de godkjente med en revisjonslogg, og lagre svarfilen (RDL) |
| `REDO` |  | Gjør om det som ble angret |
| `REFCLOSE` |  | Avslutt redigering av en blokk på stedet: lagre den, eller forkast endringene |
| `REFEDIT` |  | Rediger en blokk på stedet, der en referanse til den står, med resten av tegningen blekt; REFCLOSE lagrer den |
| `REGEN` | `RE` | Bygg på nytt det som tegnes i denne fanen, fra tegningen |
| `REGENALL` | `REA` | Bygg på nytt det som tegnes i hver fane, rute og åpen tegning |
| `REGION` | `REG` | REGION (REG): lag flate områder (regioner) av lukkede objekter, eller av linjer, buer og polylinjer som lukker en løkke ende mot ende. UNION, SUBTRACT og INTERSECT kombinerer så regioner, og MASSPROP gir deres tverrsnittsegenskaper. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registrer flere skanninger: plasser dem i én ramme med valgte punktpar eller mål, finjuster med ICP, eksporter én LAS eller E57 |
| `REINIT` |  | Last aliasfilen din på nytt |
| `RENAME` | `-RENAME`, `REN` | Gi et lag eller en blokk nytt navn (hvert objekt eller hver referanse følger med) |
| `REVCLOUD` | `RC` | Revisjonssky: rund av et rektangel, en mangekant, en frihåndsbane eller et objekt (RC) |
| `REVOLVE` | `REV` | Snu lukkede 2D-objekter om en akse til volumlegemer (3D) |
| `ROTATE` | `RO` | Roter objekter om et basispunkt |
| `SAMPLES` | `SAMPLE` | Åpne en av CadCrafts eksempeltegninger (et arkitektsett, et som-bygget) for å lære av |
| `SAVE` | `QSAVE` | Last ned tegningen i sitt format (DWG eller DXF) |
| `SAVEAS` |  | Last ned tegningen som DWG eller DXF: velg hvilken |
| `SAYSEL` |  | Si hva som er valgt, én setning per objekt. |
| `SCALE` | `SC` | Skaler objekter om et basispunkt |
| `SCALELISTEDIT` | `SCALELIST` | Legg til, rediger og slett tegningens egne målestokker; de vises i visningsområdets og plottets målestokklister og lagres i filen (SCALELIST) |
| `SCANALIGN` | `SCL` | Innrett et skannet ark til to punkter: flytt, roter og, om du vil, skaler det. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Sett inn en skannet tegning: en PNG, JPEG eller TIFF (én side eller alle sider i en flersidig fil), eller en PDF-side som er et bilde. |
| `SCANCLEAN` | `SCC` | Gjør et skannet ark svart-hvitt, og fjern flekker. |
| `SCANCROP` | `SCR` | Beskjær et skannet ark til et vindu. |
| `SCANDESKEW` | `SCD` | Finn vinkelen de lange linjene på et skannet ark ligger i, og roter arket rett når du godtar vinkelen. |
| `SCANERASE` | `SCE` | Slett et område på et skannet ark: et rektangel, en mangekant eller et lasso. |
| `SCANINFO` | `SCI` | Vis et skannet arks opprinnelige fil og trinnene tatt siden. |
| `SCANSCALE` | `SCS` | Skaler et skannet ark: velg to punkter på det og skriv inn den virkelige avstanden mellom dem. |
| `SCANTRACE` | `SCT` | Trekk et skannet ark om til linjer og buer på et nytt lag, med en toleranse du angir. Tekst og skravur blir værende som raster. |
| `SELECT` |  | Velg objekter nå (for P, Forrige, i neste kommando) |
| `SELECTALL` | `AI_SELALL` | Velg hvert objekt du kan redigere på denne fanen (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Velg hvert objekt som ligner dem du velger: samme type, lag og farge (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Viser Arksett-panelet: ark fra mange tegninger, nummerert, publisert som én PDF. |
| `SHORTCUTS` | `KEYS` | Gi en kommando en egen tast (Ctrl eller Alt med en bokstav, eller en ledig funksjonstast), lagret i denne nettleseren eller skrivebordsappen. |
| `SHXFONTS` | `SHX` | Gi CadCraft SHX-skrifter fra en mappe eller filer, så tekststiler som navngir dem tegnes i dem (liste, fjern, snu) |
| `SKETCHFIX` | `SKF` | Tegn frihåndsstrøk; hvert blir en ren linje, sirkel, bue, rektangel eller polylinje, rettvinklet og sammenføyd med de andre. |
| `SKETCHLIVE` | `SKL` | Skisser med penn: hvert strøk blir en presis linje, sirkel, bue eller et rektangel når du løfter pennen, festet til tegningen, med størrelsen å skrive over. |
| `SPLINE` | `SPL` | Tegn en spline gjennom punkter (eller med en kontrollmangekant), eller gjør en polylinje om til en spline |
| `SPLINEDIT` | `SPE` | Rediger en spline: tilpass punkter, kontrollpunkter og vekter, åpne eller lukk den, snu den, eller gjør den om til en polylinje |
| `SPLIT` |  | Del tegneområdet i ruter (som VPORTS på modellen; også fra et ark) |
| `STEELMEMBER` | `SMEMBER` | Et stålprofil i 3D fra en standardprofil: to punkter (en bjelke) eller et basispunkt og en høyde (søyle) |
| `STLOUT` |  | Eksporter 3D-modellen som STL (millimeter) |
| `STRETCH` | `S` | Strekk: dra et kryssende vindu over endene for å flytte; det som er inni flyttes, resten blir (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Tekststiler: skrift, høyde, bredde og skråstilling ny tekst får (dialogen; -STYLE på kommandolinjen) |
| `SUBTRACT` | `SU` | Trekk volumlegemer fra andre (3D), eller 2D-regioner fra regioner |
| `SWBOUT` | `SWMACRO` | Last ned en makro for SolidWorks (.swb) som bygger modellen på nytt som én betinget skisse |
| `SWEEP` |  | Sveip lukkede 2D-objekter langs en bane (linje, polylinje, bue, sirkel) til volumlegemer (3D) |
| `TABLE` | `TB` | Lag en tabell: rader og kolonner, eller fra regnearkceller på utklippstavlen eller en CSV-fil |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Rediger en tabell: skriv i en celle, sett inn og slett rader og kolonner, størrelser, sammenslåtte celler, justering |
| `TABLEEXPORT` |  | Lagre det en tabell viser som en CSV-fil |
| `TABLEPASTE` | `PASTETABLE` | Lag en tabell fra regnearkceller på utklippstavlen |
| `TABLESTYLE` | `TS` | Tabellstiler: tekstlengder, justering, marg og kanter for tittel-, overskrifts- og dataradene |
| `TAGS` |  | Merker på blokkreferanser: definer en merkelapp (type, tillatte verdier, blokkene den gjelder for), sett den på de valgte referansene, og list dem som en tabell du kan lagre som CSV |
| `TEXT` | `DT`, `DTEXT` | Enkeltlinjetekst; Enter starter neste linje |
| `TEXTEDIT` | `ED`, `DDEDIT` | Rediger tekst på stedet: velg en tekst (eller dobbeltklikk en) (ED) |
| `TEXTMASK` | `TMASK` | Legg en bakgrunnsmaske bak tekster (tegningens bakgrunn eller en farge), eller fjern den. |
| `TEXTTOFRONT` |  | Før all tekst, alle mål og alle hjelpelinjer foran alt annet. |
| `TOOLBAR` |  | Velg hva verktøylinjeknappene viser: ikoner og tekst, bare ikoner, eller bare tekst (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Plasser verktøylinjen øverst, nederst, til venstre eller til høyre i vinduet |
| `TOOLBARROWS` |  | Velg hvor mange rader verktøylinjen bruker: bryt for å passe, 2, eller 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Gjør stolpene over tegningen standard eller kompakte |
| `TOUCHCROSSHAIR` | `TCX` | Forskjøvet siktekors for tegning med fingeren: én finger flytter et siktekors som ligger over og ved siden av den, så fingeren ikke dekker valgpunktet. Løfter du fingeren, velges ingenting; knappen Klikk, eller et trykk med en annen finger, velger i siktekorset, og å holde Klikk mens du beveger deg drar. Et langt trykk eller Enter-knappen er Enter. To fingre panorerer og zoomer. Valg: ON, OFF, Auto (på bare der en finger er den eneste pekeren), Avstand, Side. |
| `TOUR` | `TUTORIAL` | Ta den seks-trinns førstetegningsrundturen på nytt |
| `TRIM` | `TR` | Kapp objekter tilbake til der andre krysser dem: klikk en del, dra gjennom flere, eller Shift+klikk for å forlenge |
| `TRIMEXTENDMODE` |  | Hvordan TRIM og EXTEND starter: 1 Hurtig (hvert objekt er en skjærekant eller grense), 0 Standard (velg kantene først) |
| `TTR` |  | En sirkel tangent til to objekter, med en radius du gir (samme som CIRCLE T) |
| `TURNLEFT` |  | Snu visningen 90° til venstre (mot klokken): BKS Z -90, og visningen følger. Ingenting i tegningen flyttes. |
| `TURNRIGHT` |  | Snu visningen 90° til høyre (med klokken): BKS Z 90, og visningen følger. Ingenting i tegningen flyttes. |
| `TURNWORLD` |  | Tilbake til verden: BKS Verden, og visningen er vannrett igjen. |
| `TXT2MTXT` | `T2M` | Slå sammen enkeltlinjetekster til én avsnittstekst, fra topp til bunn. |
| `UCS` |  | Ditt eget koordinatsystem: et origo og en X-akse (origo, Z-vinkel, 3point, OBject, Previous, World, NAmed). Punkter du skriver, ortho, polarsporing, rutenettet og ny tekst følger det; visningen snur slik at X-aksen blir vannrett. Ingenting i tegningen flyttes. |
| `UNDO` | `U` | Angre den siste kommandoen |
| `UNGROUP` |  | UNGROUP: ta grupper fra hverandre. Velg objekter i gruppene, eller gi et navn. Objektene blir i tegningen. |
| `UNION` | `UNI` | Slå sammen volumlegemer til ett (3D), eller 2D-regioner til én region |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Vis igjen alle objekter skjult av ISOLATEOBJECTS eller HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Hvordan lengder vises og skrives: desimal, fot og tommer, brøker (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Regn ut feltene på nytt, og velg når de oppdateres av seg selv |
| `USDOUT` |  | Eksporter 3D-modellen som USD (.usda-tekst, .usdc-binær eller en .usdz-pakke) |
| `VIEW` | `-VIEW`, `V` | Standard 3D-visninger, perspektiv eller parallell (3D) |
| `VIEWBASE` | `FLATSHOT` | Plasser en flat 2D-visning av 3D-volumlegemene (forfra, ovenfra, side eller isometrisk, skjulte linjer stiplet) på et ark eller i modellen |
| `VIEWLABEL` | `VL` | En visningstittel på et ark som viser visningsområdets visningsnavn, og endres med det. |
| `VOICE` |  | Slå talte kommandoer av eller på. De gjenkjennes på denne datamaskinen. |
| `VPCLIP` |  | Klipper et arkvisningsområde til et lukket objekt eller en tegnet mangekant; Slett gjør det til et rektangel igjen |
| `VPLAYER` |  | Frys eller tin lag i noen visningsområder bare (Frys, Tin, Tilbakestill), og velg hvilke lag nye visningsområder starter frosset (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Del tegneområdet i ruter, hver med sin egen visning (på et ark: et visningsområde, som MVIEW) |
| `VPVIEW` |  | Angi hva et visningsområde viser: velg et vindu på modellen |
| `VSCURRENT` | `VS`, `SHADEMODE` | Visuell stil for 3D-visningen: skygget, kanter, skjult linje, trådramme, røntgen |
| `WALL` | `WA` | Tegn 2D-vegger som en polylinje. De møtes, og bærer dører og vinduer. |
| `WALLARC` | `WARC` | Tegn en bue av vegger. Plan-vegger er rette, så buen tegnes som korte rette vegger (15 grader hver) som møtes. |
| `WALLDELSEG` |  | Slett en bit av en vegg mellom to punkter. Det som er igjen, blir én eller to vegger. |
| `WALLDIM` |  | Skriv en ny verdi for et mål: veggen i den fjerne enden flytter seg vinkelrett på seg selv, veggen i den første enden holder seg, og veggene som er knyttet til den følger. |
| `WALLDISJOIN` |  | Velg en vegg nær en ende for å tillate ingen sammenføyninger der: enden tegnes rett, og ingenting følger den. Velg den igjen for å tillate dem. |
| `WALLGRID` |  | Lås en vegg til en rutenettlinje: langs den, eller med en ende på den. Flytt linjen med GRIDMOVE, og veggen følger. |
| `WALLHOLD` |  | Innrett og lås: en vegg beholder sin plass mot en annen vegg (på dens linje, eller i avstanden den har). Hvis den ene flyttes, følger den andre. |
| `WALLHOLDDIM` |  | Lås avstanden mellom to parallelle vegger. Hvis den ene flyttes, følger den andre for å beholde den. |
| `WALLHOLDS` |  | Lister låsene på veggene. |
| `WALLJOINS` |  | Gi hver vegg i en eldre tegning sin id og lagre sammenføyningene mellom dem. Dette skjer også ved den første endringen du gjør. |
| `WALLJOINSTYLE` |  | Klikk et hjørne der to vegger møtes ende mot ende, for å endre hvordan det tegnes: gjæring, butt, rett av. T bytter hvilken vegg som går gjennom. |
| `WALLOFFSET` | `WO` | Flytt en vegg rett på seg selv med en avstand (veggene som er knyttet til den følger), eller lag en kopi i den avstanden. |
| `WALLPICK` |  | Lag vegger på en linje eller polylinje i tegningen, med linjene som er knyttet til den, med hvis du sier Ja. |
| `WALLPOLY` | `WP` | Tegn vegger rundt en vanlig mangekant med 3 til 64 sider, som POLYGON. |
| `WALLRECT` | `WR` | Tegn fire sammenføyde vegger fra to motsatte hjørner, som RECTANG. |
| `WALLREJOIN` |  | Gjør to deler av en vegg til én vegg igjen. Den første beholder sin plass i tegningen. |
| `WALLROT` |  | Tegn fire sammenføyde vegger som et rektangel snudd i en hvilken som helst vinkel: den første siden, deretter hvor langt ut den andre siden går. |
| `WALLSPLIT` | `WS` | Del en vegg i to ved et punkt, eller der en annen vegg krysser. Delene forblir sammenføyd, med mindre du ber om et mellomrom eller frie ender. Dører og vinduer følger sin del. |
| `WALLSPLITGAP` |  | Del en vegg og la et mellomrom stå: skriv inn mellomrommet, velg veggen, og så punktet. Delene beholder frie ender og kan settes sammen igjen. |
| `WALLSTRETCH` |  | Strekk med et vindu: veggender inni det flyttes, hele vegger inni det flyttes hele, og vegger som støter inn i sidene deres, glir med dem. |
| `WALLTAN` |  | Fortsett en vegg med en bue som forlater den langs veggen (tegnet som korte rette vegger). |
| `WALLTRACE` |  | Lag vegger rundt det minste lukkede området av linjer og vegger rundt punktet du klikker. |
| `WALLUNHOLD` |  | Fjern låsene fra en vegg (og låsene til andre vegger mot den). |
| `WBLOCK` | `W`, `-WBLOCK` | Skriv en blokk, noen objekter eller hele tegningen til en ny DWG- eller DXF-fil (W) |
| `WEDGE` | `WE` | En kile: to hjørner og en høyde; den skråner bort fra det første hjørnet (3D) |
| `WHEREAMI` | `WHERE` | Si hvor markøren er. |
| `WHOHAS` |  | Sier hvem som har en tegning åpen. CadCraft Studio lagrer en liten låsefil ved siden av hver åpen tegning (Plan.dwg.cclock: hvem, siden når, hvilken versjon) og fjerner den ved lukking. Alternativer: Gjeldende (den åpne tegningen), Fil (velg én), Mappe (hver tegning i en mappe som er åpen et sted; dette lar Studio også lagre låsefiler i den mappen), Sti (skriv en), Navn (navnet andre ser). Et lås som ikke er oppdatert på fem minutter, kalles utdatert. Ikke tilgjengelig i en nettleser. |
| `WINDOW` | `WN` | Sett et vindu i en vegg. |
| `XATTACH` | `XA` | Lenk en annen DWG eller DXF inn i denne tegningen, vist skrivebeskyttet (XREF lister og laster dem på nytt) |
| `XCLIP` | `XC` | Klipp blokkreferanser og lenkede tegninger til et rektangel eller en mangekant, eller fjern klippingen. |
| `XLINE` | `XL` | Konstruksjonslinje, uendelig i begge retninger: gjennom to punkter, vannrett, loddrett, i en vinkel, halverende en vinkel, eller forskjøvet fra en linje. |
| `XREF` | `XR`, `-XREF` | Lenkede tegninger (eksterne referanser): liste, fest, last på nytt, bind, koble fra |
| `ZOOM` | `Z` | Utstrekning, eller et vindu |
