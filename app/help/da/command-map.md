---
title: Kommandooversigt: hvad du skriver
summary: Alle kommandoer, CadCraft har, med deres korte navne, A til Z, lavet ud fra selve programmet, og de vaner fra andre tegneprogrammer, der er anderledes.
keywords: kommandooversigt, kommandoer, aliaser, korte navne, kommer fra, kommandoliste, hvad du skriver, slet, beskær, tilsvarende, forskelle
from: 3bdfd3e6
---

CadCraft bruger de kommandonavne og korte navne, folk kender fra andre tegneprogrammer: skriv `L` for en linje, `TR` for at beskære, `E` for at slette. Der er altså ingen oversættelsestabel at lære for de fleste af dem: det navn, du kender, er det samme her. Listen nedenfor er alle de kommandoer, CadCraft har, lavet ud fra selve programmet. {{key:Enter}} gentager den sidste. `HELP` i kommandolinjen udskriver den samme liste.

De få, der ikke er ens, eller som ikke er lavet endnu:

- **Gem** henter en kopi i browseren ({{cmd:SAVE}}, {{cmd:SAVEAS}}); i CadCraft Studio skriver den filen. Se [Kommer fra andet tegneprogram](topic:coming-from).
- **PLOT** laver en PDF (også PNG og SVG) med en plottestiltabel; der findes ingen sideopsætningsstyring.
- **DIMSTYLE** og **PEDIT** er lavet; **PEDIT** har ingen valgmulighed for at redigere hjørnepunkter (det gør greb).
- **TABLE** er ikke lavet endnu; {{cmd:XREF}}, {{cmd:SPLINE}} og {{cmd:WBLOCK}} er.
- En rutines egne kommandoer (AutoLISP `C:NAME`) vises, når du har indlæst den med {{cmd:APPLOAD}}; de står ikke på listen her.

## Alle kommandoer (398)

| Kommando | Korte navne | Hvad den gør |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Drej 3D-visningen med venstre knap |
| `ACCESS` | `AX` | Slå tegning uden syn til eller fra: resultater læst op via din skærmlæser, en tastaturmarkør på tegningen, fangelyde og oplæste kommandoer. |
| `ALIASEDIT` |  | Redigér kommandoaliaser i én tekstfil (det kendte format L, *LINE) |
| `ALIGN` | `AL` | Flyt og drej objekter, så kildepunkter lander på destinationspunkter (et, to eller tre par), og skalér dem, hvis du vil |
| `ALIGNPANEL` | `ALP` | Åbn panelet Justér og fordel |
| `ALIGNTO` |  | Justér de valgte objekters venstre, centrum, højre, øverste, midte eller nederste kanter ud fra valget, det første eller sidst valgte objekt eller et punkt |
| `ANNOALLVISIBLE` | `ANNOALL` | Vis annotative objekter i alle skalaer, eller kun hvor viewportens (eller tegningens) skala findes i deres liste |
| `ANNOSCALE` | `CANNOSCALE` | Angiv tegningens noteringsskala: annotativ tekst og målsætninger ændres i størrelse, så de udskrives i samme størrelse |
| `APPLOAD` | `AP` | Indlæs programmer: LISP-rutiner (.lsp) og deres dialogfiler (.dcl); Startup Suite (AP) |
| `ARC` | `A` | Bue: 3 punkter, Start/Centrum/Slut, Start/Centrum/Vinkel, Start/Centrum/Længde, Start/Slut/Vinkel, Start/Slut/Retning, Start/Slut/Radius, Centrum/Start/Slut, Centrum/Start/Vinkel, Centrum/Start/Længde, Fortsæt |
| `AREA` | `AA` | Areal og omkreds ud fra punkter eller af et objekt; Tilføj og Træk holder en løbende sum (AA) |
| `ARRAY` | `AR` | Kopier i rækker og kolonner, eller rundt om et centrum (AR) |
| `ARRAYASSOCIATIVITY` |  | Angiver, om ARRAY-kommandoerne laver arrays, der forbliver redigerbare (1), eller almindelige kopier (0) |
| `ARRAYCLOSE` |  | Afslutter redigering af et arrays kildeobjekter |
| `ARRAYEDIT` |  | Ændrer et array lavet med indstillingen Associativ: antal, afstand, kildeobjekter, ét element |
| `ARRAYPATH` |  | Kopier af objekter langs en linje, bue, polylinje eller anden kurve |
| `ARRAYPOLAR` |  | Kopier rundt om et centrumpunkt |
| `ARRAYRECT` |  | Kopier i rækker og kolonner |
| `ASBUILT` | `ASB` | ASBUILT læser de som-bygget-punkter, et hold har målt (CSV / TXT, som EXPORTPOINTS skriver), og sammenligner dem med tegningens punkter: inden for eller uden for tolerancen, ikke målt, ekstra. Markerer dem på laget AS-BUILT og henter en CSV-rapport. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definér en attribut (en tag, som en blok beder om en værdi for), der lægges i en blok (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Redigér en blokreferences attributværdier i kommandolinjen, én efter én (Enter beholder en værdi) |
| `ATTSYNC` |  | Bring en bloks referencer i overensstemmelse med dens attributdefinitioner: nye tilføjes med deres standardværdier, fjernede udgår, positioner og tekst nulstilles; værdier beholdes |
| `AUDIT` |  | Kontrollerer den åbne tegning for skader: tal, der ikke er endelige, objekter uden størrelse, manglende lag, blokke, stilarter og linjetyper, blokke der indeholder sig selv, delte id'er, ødelagte målsætninger og skraveringer. Lister det, den finder, efter type og spørger, før den retter; rettelsen er ét fortrydelsestrin. |
| `AUNITS` | `ANGUNITS` | Hvordan vinkler vises og skrives: decimalgrader, grader-minutter-sekunder eller retninger som N45°23'30"Ø (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Automatisk fuldførelse i tegning til eller fra, eller vis hvad tegningens mønstre foreslår nu. |
| `AUTOCONSTRAIN` |  | Tilføj sammenfaldende, vandrette og lodrette begrænsninger, hvor geometrien allerede ligger tæt på |
| `AUTODIM` | `ADIM` | Målsæt efter regler: samlet størrelse, kæder langs siderne, åbninger, hul-diametre og gitterafstand, uden at gentage det, der allerede er målsat. |
| `AUTOSHEET` | `ASH` | Lægger ark op af sig selv: vælger papir og standardskalaer og placerer hver visning med en billedtekst og et tegningshoved. |
| `BATTMAN` |  | Blokattributhåndtering: rækkefølge, tags, ledetekster, standardværdier og tilstande for en bloks attributter, derefter opdateres dens referencer |
| `BCLOSE` |  | Luk blokeditoren: gem blokken eller kassér ændringerne |
| `BCONVERT` |  | BCONVERT finder geometri, der gentages, og gør den til blokreferencer. Vælg de objekter, der gentages: alle andre sæt objekter i det åbne rum, der har samme geometri, flyttet og drejet i en vilkårlig vinkel, bliver fundet, og med Spejlet eller Skaleret slået til også spejlbilleder og kopier i en anden størrelse. Giv den nye blok et navn og et basispunkt; valget og hver kopi bliver referencer til den, hver med sin egen rotation og skala. Eller vælg Blok og navngiv en eksisterende blok for at finde løse kopier af dens objekter. En kopi skal have samme lag, farve, linjetype og linjetykkelse, medmindre Egenskaber er sat til Ignorér. Objekter på låste lag lades være. Ét fortrydelsestrin. |
| `BEDIT` | `BE` | Blokeditor: redigér en bloks objekter og attributter; BCLOSE gemmer (BE) |
| `BLEND` |  | BLEND: en spline mellem enderne af to åbne kurver, valgt tæt på enderne for at sammenføje. Kontinuitet (CON): Tangent følger begge retninger, Glat følger også, hvordan de bøjer. |
| `BLOCK` | `B`, `BMAKE` | Lav en blok af objekter (de bliver til én reference) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: hver reference til én blok bliver en reference til en anden, på samme sted med samme skala og rotation. Værdier for attributter, begge blokke har, beholdes. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE viser panelet Blokke med markøren i dets filter. Panelet viser et billede af hver blok (de senest placerede først), som liste eller gitter; klik på et billede eller træk det ind på tegningen for at placere blokken med INSERT. Under Biblioteker tilføjer du en egen DWG- eller DXF-fil: dens blokke vises med billeder og kopieres ind i denne tegning, når du placerer en. I CadCraft Studio kan en mappe med tegninger også tilføjes, og filer og mapper huskes. |
| `BOMEDIT` | `BOMCOLUMNS` | Stykliste-tabellens kolonner, gruppering, sortering, titel, summer og bemærkninger |
| `BOMEXPORT` |  | Gem en stykliste-tabel som en .csv-fil |
| `BOMTABLE` | `BOM` | En levende stykliste-tabel for én zone eller hele tegningen |
| `BOMUPDATE` |  | Opdatér alle stykliste-tabeller nu, også de frosne |
| `BOMZONE` | `BZONE` | Et navngivet område af tegningen til en stykliste: to hjørner, en polygon eller et lukket objekts kontur |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): vælg et punkt inde i et lukket område og få en lukket polylinje rundt om det. Buer bliver ved med at være buer. Øer konturerer også områderne inde i det. |
| `BOX` |  | En kasse: to hjørner og en højde (3D) |
| `BPARAMETER` | `BPARAM` | Ikke lavet endnu: tilføjelse af en parameter (f.eks. Synlighed) til en blok. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blokparametre: navngivne parametre med formler og flere synlighedsparametre i én blok. Virker i blokeditoren (tildel de valgte objekter til en tilstand) og på en valgt reference (dens egne værdier og tilstande). |
| `BREAK` | `BR` | Bryd en linje, bue, cirkel eller polylinje mellem to punkter (BR) |
| `BREAKATPOINT` |  | Del en linje, bue eller polylinje i to ved et punkt |
| `BREAKLINE` |  | Tegn en linje med et brudsymbol; dens størrelse og forlængelsen ud over enderne huskes. |
| `BREPLACE` |  | BREPLACE udskifter én blok med en anden. Valgte: vælg blokreferencer og navngiv blokken, der skal bruges i stedet. Alle: navngiv en blok og dens erstatning, og hver reference i alle rum og inde i andre blokke ændres. En reference beholder sin plads, skala, rotation og lag samt værdierne for attributter, begge blokke har; værdier, den nye blok ikke har plads til, udelades og navngives. |
| `BSEARCH` |  | BSEARCH finder blokke. Navn: en del af et bloknavn eller et mønster med * og ?. Attribut: en værdi (eller TAG=værdi), som en references attributter har. Geometri: vælg objekter eller én blokreference, og blokke, hvis form ligner mindst 85 %, listes, bedste først; størrelse, rotation og spejling tæller ikke. Referencerne, der findes i det åbne rum, bliver valgt, klar til næste kommando. |
| `BURST` |  | Eksplodér blokreferencer og behold det, deres attributter siger: hver værdi bliver til tekst på attributtens lag. |
| `BVHIDE` | `BVH` | I blokeditoren: skjul objekter i den aktuelle synlighedstilstand. |
| `BVSHOW` | `BVSH` | I blokeditoren: vis objekter, den aktuelle synlighedstilstand skjuler (de vises falmede, så du kan vælge dem). |
| `BVSTATE` | `BVS` | I blokeditoren, på en blok med synlighedstilstande: skift til en tilstand, eller tilføj, omdøb eller slet en. |
| `CAL` |  | Beregn en længde eller et tal: + − * / og parenteser, som du skriver dem hvor som helst |
| `CENTERLINE` | `CL` | Centerlinje mellem to linjer: midt imellem dem, eller langs halveringslinjen når de mødes (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Centermærke: et kryds i centrum af en cirkel eller bue, med centerlinjer lidt ud over den (CM) |
| `CHAMFER` | `CHA` | Affas hjørnet mellem to linjer: To afstande (D), Længde og vinkel (A), Hvert hjørne på en polylinje (P) |
| `CHSPACE` |  | CHSPACE: flyt objekter mellem et ark og modellen gennem en viewport. De skaleres og drejes, så de ser ens ud fra den anden side. På et ark går de til modellen; mens du arbejder gennem en viewport (MSPACE), kommer de til arket. |
| `CIRCLE` | `C` | Centrum og radius, diameter, 2 eller 3 punkter |
| `CLASS` |  | Læg de valgte objekter i en klasse, eller sæt den aktive klasse, når intet er valgt (? viser dem) |
| `CLASSES` | `CLS` | Panelet Klasser: klasser sorterer objekter på tværs af lag; vis, skjul og stil dem, og overskriv dem pr. viewport (CLS) |
| `COMMANDLINE` | `CMDLINE` | Fastgør eller frigør kommandolinjen, gør den til én linje, angiv antal historiklinjer, eller åbn historikken (F2) |
| `COMPARESETTINGS` | `CMPSET` | Sammenlign målsætningsstilarter, tekststilarter, lag, ark eller enheder: to i denne tegning, eller denne tegning med en anden åben, og kopiér en værdi over. |
| `CONSTRAINTBAR` | `CBAR` | Vis eller skjul begrænsningsbjælkerne (Vis alle / Skjul alle, eller pr. objekt) |
| `COPY` | `CO`, `CP` | Kopiér objekter, så mange gange som du klikker |
| `COPYBASE` |  | Kopiér objekter til udklipsholderen med et basispunkt, du vælger |
| `COPYCLIP` |  | Kopiér objekter til udklipsholderen (Ctrl+C); PASTECLIP placerer dem |
| `COUNT` | `BCOUNT` | Tæl blokreferencer: vælg én for at vælge og tælle hver reference af dens blok |
| `COUNTTABLE` |  | Placér en tabel over blokantal |
| `CREDITS` |  | Lægger bibliotekets kildeangivelser ind i tegningen som en tabel. Kør den igen for at opdatere tabellen ud fra de emner, der er i tegningen nu. |
| `CURSORSIZE` |  | Krydsmarkørens størrelse: 100 løber den fra kant til kant over tegningen (Indstillinger › Markør › Fuld skærm) |
| `CUTCLIP` |  | Klip objekter til udklipsholderen (Ctrl+X): kopiér, og slet derefter |
| `CYLINDER` | `CYL` | En cylinder: centrum, radius og højde (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Vis blokke, deres attributter og objektegenskaber som en tabel i tegningen eller en CSV-fil |
| `DATALINK` | `DL` | En tabel fra en CSV-fil, der husker filen, så den kan læses igen |
| `DATALINKUPDATE` | `DLU` | Læs et datalinks fil igen og fyld dens tabeller igen |
| `DCALIGNED` | `DCALI` | Målsætningsbegrænsning: sand afstand mellem punkter, et punkt og en linje, eller to linjer |
| `DCANGULAR` | `DCANG` | Målsætningsbegrænsning: vinkel mellem to linjer, eller af en bue |
| `DCCONVERT` |  | Gør målsætninger tegnet på begrænsbar geometri til målsætningsbegrænsninger |
| `DCDIAMETER` | `DCDIA` | Målsætningsbegrænsning: diameter af en cirkel eller bue |
| `DCDISPLAY` |  | Vis eller skjul målsætningsbegrænsninger på tegningen |
| `DCHORIZONTAL` | `DCHOR` | Målsætningsbegrænsning: vandret afstand |
| `DCLINEAR` | `DCLIN` | Målsætningsbegrænsning: vandret eller lodret afstand, fra der hvor du placerer den |
| `DCRADIUS` | `DCRAD` | Målsætningsbegrænsning: radius af en cirkel eller bue |
| `DCVERTICAL` | `DCVER` | Målsætningsbegrænsning: lodret afstand |
| `DELBLOCKS` |  | Slet blokke: hver reference (også indlejrede, på alle ark) og definitionerne |
| `DELCONSTRAINT` | `DELCON` | Fjern alle begrænsninger (geometriske og målsætnings-) fra de objekter, du vælger |
| `DELOPENING` |  | Tag en dør eller et vindue ud af en væg. |
| `DESCRIBE` | `DESC` | Fortæl hvad tegningen indeholder: hvor mange objekter, af hvilken type, hvor store, hvad der er valgt. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Ryd valget (Esc) |
| `DETAILS` | `DET` | Din virksomheds egne detaljer, fundet til det, du tegner: find, tilføj en blok, liste, fjern, slå forslagene til eller fra. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Tegn et diagram ud fra tekst: et Mermaid-flowdiagram, et PlantUML-komponentdiagram, D2, en fra-til-liste eller draw.io XML, som blokke og forbindelser, du kan redigere |
| `DIMALIGNED` | `DAL`, `DIMALI` | Sand afstand mellem to punkter |
| `DIMANGULAR` | `DAN`, `DIMANG` | Vinkel mellem to linjer, af en bue, eller ud fra tre punkter |
| `DIMARC` | `DAR` | Buelængdemålsætning: afstanden langs en bue, med buesymbolet (DAR) |
| `DIMASZ` |  | Målsætningsindstilling: Pilestørrelse |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Målsætninger stablet fra én grundlinje |
| `DIMBREAK` | `DBREAK` | Bryd målsætnings- og hjælpelinjer, hvor de krydser andre objekter (Auto), mellem to punkter (Manuel), eller fjern brydningerne |
| `DIMCONSTRAINT` | `DCON` | Målsætningsbegrænsninger: lineære, justerede, vinkel-, radius-, diameter, konvertér |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | En kæde af målsætninger, hver fra enden af den sidste |
| `DIMDEC` |  | Målsætningsindstilling: Decimaler |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diameter af en bue eller cirkel |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Frigør målsætninger fra de objekter, de er knyttet til (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Ændr målsætningsteksten (Hjem, Ny tekst, Roter) eller skråstil hjælpelinjerne (Skrå) |
| `DIMEXE` |  | Målsætningsindstilling: Forlængelse ud over målelinjen |
| `DIMEXO` |  | Målsætningsindstilling: Forskydning fra udgangspunktet |
| `DIMGAP` |  | Målsætningsindstilling: Mellemrum omkring teksten |
| `DIMINSPECT` |  | Kontrolmålsætning: en ramme om værdien med en etiket og hvor ofte delen kontrolleres |
| `DIMJOGGED` | `DJO`, `JOG` | Knækket radiusmålsætning: en radius tegnet fra et nærmere punkt, når centrum er langt væk (DJO) |
| `DIMJOGLINE` | `DJL` | Tilføj et knæksymbol til en lineær eller justeret målelinje, for at vise at afstanden ikke er tegnet i skala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Vandret eller lodret afstand (R for vilkårlig vinkel) |
| `DIMLUNIT` |  | Målsætningsindstilling: længdeformat (1 videnskabelig, 2 decimal, 3 ingeniør, 4 arkitekt, 5 brøk) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Koordinatmålsætning: X- eller Y-afstanden fra et punkt til UCS-udgangspunktet, på en henvisningslinje (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Overskriv målsætningsvariabler på valgte målsætninger uden at ændre deres stil; Ryd sætter stilen tilbage (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radius af en bue eller cirkel |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Knyt en målsætnings punkter til objekter, så den følger og måler igen, når de flyttes (DRE) |
| `DIMSCALE` |  | Målsætningsindstilling: Samlet skala (størrelser × dette) |
| `DIMSPACE` |  | Jævn afstand mellem parallelle målsætninger, målt fra en grundmålsætning (0 flugter dem, Auto er to gange teksthøjden) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Lav, ændr, angiv aktuel, slet, anvend og sammenlign navngivne målsætningsstilarter (dialogboksen; -DIMSTYLE i kommandolinjen) |
| `DIMTEDIT` | `DIMTED` | Flyt målsætningsteksten til venstre, højre eller midt på målelinjen, eller drej den |
| `DIMTEXTUNIT` | `DTU` | Målsætningstekst i mm, cm, m eller km, eller i tegningens egne enheder: de valgte målsætninger, ellers nye (DTU) |
| `DIMTXT` |  | Målsætningsindstilling: Teksthøjde |
| `DIST` | `DI` | Afstand og vinkel mellem to punkter |
| `DISTRIBUTE` |  | Fordel de valgte objekter jævnt, side om side eller op og ned: ens trin mellem centrum, eller ens mellemrum; de to yderste bliver stående |
| `DIVIDE` | `DIV` | DIVIDE (DIV): markeringer, der deler en linje, bue, cirkel, polylinje, spline eller ellipse i lige store dele. Punkter, eller med Blok en blok ved hver markering. |
| `DOCUMENTS` | `DOCS` | Åbn panelet Dokumenter: tjek tegninger ud og ind, revisioner, udgivelsestilstande og godkendelse for en projektmappe |
| `DOOR` | `DR` | Placér en dør i en væg. Den side, du klikker på, er den side, den svinger ind mod. |
| `DRAWORDER` |  | Ændr tegnerækkefølgen: bring objekter forrest, send dem bagerst, eller placér dem over eller under andre objekter. |
| `DUPLICATE` | `DUP` | En kopi, der flytter sig med markøren: klik for at placere den (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Tegningens egenskaber: titel, forfatter og resten, samt dine egne navne- og værdipar |
| `DXFOUT` |  | Hent tegningen som DXF R12 (Gem beholder sit eget format) |
| `EATTEDIT` | `DDATTE` | Redigér en blokreferences attributter: værdier, tekst og egenskaber, én attribut ad gangen |
| `ELLIPSE` | `EL` | Akseendepunkter og den anden halvakse |
| `ERASE` | `E`, `DELETE` | Fjern objekter |
| `EXPLODE` | `X` | Opdel polylinjer, blokke og målsætninger i deres dele |
| `EXPORT` | `EXP` | Gem en kopi af tegningen i en filtype, et add-on skriver |
| `EXPORT3D` | `3DEXPORT` | Eksportér 3D-modellen: GLB, OBJ eller STL |
| `EXPORTPOINTS` | `EXPPTS` | Skriv punkter, og blokkenes indsætningspunkter med en attribut som beskrivelse, til en CSV- eller TXT-fil (PNEZD, PENZD eller XYZ) til BIM- og landmålingsprogrammer |
| `EXTEND` | `EX` | Forlæng objekter, så de møder andre: klik tæt på en ende, træk gennem flere, eller Shift+klik for at beskære |
| `EXTRIM` |  | EXTRIM: vælg én skærekant, og derefter en side. Alt, der krydser kanten, beskæres på den side. Stykkerne, der ville forsvinde, vises, når du flytter markøren. |
| `EXTRUDE` | `EXT` | Ekstruder lukkede 2D-objekter til massive legemer (3D) |
| `FIELD` |  | Placér et felt i en tekst, en tabelcelle eller en attribut: en dato, filnavnet, arknummeret, en tegningsegenskab, et objekts areal eller længde, eller en formel |
| `FILLET` | `F` | Afrund eller gør hjørnet mellem to objekter kantet (Radius (R), Hvert hjørne i polylinje (P), Flere (M)) |
| `FIND` |  | Find og erstat ord i tekst, attributværdier og målsætningstekst |
| `FLATTEN` |  | Sæt højden (Z) og tykkelsen på de valgte objekter til 0, også i de blokke, de bruger. |
| `FLOOR` |  | Vælg den etage, der skal tegnes på, tilføj en, eller flyt eller kopiér valget til en. |
| `FLOORLAYERS` |  | Gør etager om til lag med navnet Floor-Layer, til en fil, der skal til nogen uden etager. |
| `FLOORS` | `FLR` | Åbn panelet Etager: stabl etager i ét modelrum. |
| `GCCOINCIDENT` |  | Begrænsning: to punkter mødes, eller et punkt bliver på et objekt |
| `GCCOLLINEAR` |  | Begrænsning: to linjer bliver på én linje |
| `GCCONCENTRIC` |  | Begrænsning: to cirkler eller buer deler et centrum |
| `GCEQUAL` |  | Begrænsning: to linjer bliver samme længde, eller to cirkler/buer samme radius |
| `GCFIX` |  | Begrænsning: et punkt eller et helt objekt bliver, hvor det er |
| `GCHORIZONTAL` |  | Begrænsning: en linje (eller to punkter) bliver vandret |
| `GCPARALLEL` |  | Begrænsning: to linjer bliver parallelle |
| `GCPERPENDICULAR` |  | Begrænsning: to linjer bliver i rette vinkler |
| `GCSYMMETRIC` |  | Begrænsning: to punkter, linjer eller cirkler spejler hinanden over en linje |
| `GCTANGENT` |  | Begrænsning: en linje og en cirkel eller bue (eller to af dem) bliver tangent |
| `GCVERTICAL` |  | Begrænsning: en linje (eller to punkter) bliver lodret |
| `GDSIN` | `GDS` | Vis et IC-layout (en GDSII-stream-fil): hvert lag og datatype som et tegningslag, fladt, i brugerenheder; kun til visning og måling (labforsøg) |
| `GEOMCONSTRAINT` | `GCON` | Geometriske begrænsninger: vandrette, lodrette, parallelle, tangenter, sammenfaldende … |
| `GLBOUT` |  | Eksportér 3D-modellen som GLB (glTF) |
| `GRADIENT` | `GD` | Udfylder et område med et farveforløb af en eller to farver |
| `GRIDMOVE` | `GM` | Flyt en gitterlinje og tag det med, der hænger på den: vægge strækkes, søjler, bobler og tags flyttes, målsætninger følger med. |
| `GROUP` | `G` | GROUP (G): giv de valgte objekter et navn, de deler. Et klik på et af dem vælger så dem alle. Enter ved navnet laver en gruppe uden navn. |
| `GROUPEDIT` |  | GROUPEDIT: ændr en gruppe. Vælg et af dens objekter eller angiv dens Navn, og tilføj eller fjern derefter objekter, Omdøb (RE) den, ændr dens Beskrivelse, eller angiv om et klik vælger den hele. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Udfyld et område med en massiv udfyldning eller et mønster: klik inde i det, eller vælg lukkede objekter (H) |
| `HATCHEDIT` | `HE` | Ændr en skravering: mønster, skala, vinkel, udgangspunkt og dens forbindelse til en kontur. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Laver konturpolylinjerne igen ud fra en skravering, knyttet til den eller ej |
| `HATCHTOBACK` |  | Send alle skraveringer bagved alt andet. |
| `HELP` | `?` | Denne liste |
| `HIDEOBJECTS` |  | Skjul de valgte objekter, indtil UNISOLATEOBJECTS. Gemmes ikke med tegningen. |
| `HISTORY` | `HIST` | HISTORY (HIST): tegningens versioner — kopier, der gemmes på denne computer, når Studio gemmer den, og skyens versioner — til at åbne, gendanne og sammenligne med det, der er ændret, vist i farver. |
| `ID` |  | Koordinater for et punkt |
| `IMAGE` | `IM` | Giv CadCraft de billedfiler, en tegning bruger (en DWG gemmer kun, hvor de var). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Placér et billede (PNG eller JPEG) fra en fil. |
| `IMAGECLIP` | `ICL` | Beskær et billede til et rektangel eller en polygon, eller fjern dets beskæring. |
| `IMPORT` | `IMP` | Importér en fil af en type, et add-on læser, ind i denne tegning |
| `INSERT` | `I`, `DDINSERT` | Placér en blok (S skala, R roter); F fra en DWG/DXF-fil, L fra biblioteket |
| `INTERSECT` | `IN` | Behold kun det, massive legemer har til fælles (3D), eller det areal 2D-regioner deler |
| `ISODRAFT` |  | ISODRAFT: isometrisk tegning til eller fra, eller direkte på planet Venstre, Top eller Højre. Når den er til, følger Ortogonal og polar sporing planets to akser, gitteret tegnes isometrisk, og ELLIPSE har Isocirkel. |
| `ISOLATEOBJECTS` | `ISOLATE` | Vis kun de valgte objekter; alt andet i dette rum skjules, indtil UNISOLATEOBJECTS. Gemmes ikke med tegningen. |
| `ISOPLANE` |  | ISOPLANE: vælg det isometriske plan at tegne på: Venstre, Top eller Højre. Enter går til det næste, ligesom F5 gør, mens isometrisk tegning er til. |
| `JOIN` | `J` | Sammenføj linjer, buer og polylinjer, der mødes ende mod ende, til én polylinje; linjer på én linje til én linje (J) |
| `LASER` | `LASERCUT` | Åbn laserpanelet: send lag til en laserskærer eller gravør (GRBL G-code) |
| `LASSOMODE` |  | Tryk og træk tegner et lasso (1) eller et rektangel (0) |
| `LAYDEL` |  | Slet et lag og hvert objekt på det (i modellen, på ark og i blokke) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Åbn lagadministratoren: alle lag i én tabel |
| `LAYERPANEL` |  | Vis lagpanelet |
| `LAYFRZ` |  | Frys laget for hvert objekt, du vælger |
| `LAYGROUP` | `LG` | Gruppér lag i mapper i panelet Lag. |
| `LAYISO` |  | Isolér lagene for de valgte objekter (alle andre lag slukket) |
| `LAYLOCKFADE` |  | Angiv hvor meget objekter på låste lag falmer, og om et klik kan vælge dem. |
| `LAYMCUR` |  | Gør laget for det objekt, du vælger, aktuelt |
| `LAYMRG` |  | Flet lag: deres objekter flyttes til et målag, og de flettede lag forsvinder |
| `LAYOFF` |  | Slå laget for hvert objekt, du vælger, fra |
| `LAYON` |  | Slå alle lag til |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Et nyt ark med et tegningshoved og en viewport |
| `LAYTHW` |  | Tø alle lag op |
| `LAYUNISO` |  | Slå de lag til igen, som LAYISO slog fra |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Konverterer tekst skrevet med gamle vietnamesiske skrifttyper (TCVN3 / ABC-skrifttyper som .VnTime, og VNI-skrifttyper som VNI-Times) til Unicode. Sådan tekst vises allerede, som den læses; denne omskriver den for altid, med en optælling og ét fortrydelsestrin. |
| `LENGTHEN` | `LEN` | Forlæng eller forkort linjer, buer og polylinjer: med en mængde, en procentdel, til en samlet længde, eller ved at trække (LEN) |
| `LIBRARY` | `LIB` | Biblioteket-panelet: placér emner, tjek for opdateringer, kildeangivelser |
| `LIMITS` |  | Angiv tegningens grænser: ON, OFF, eller hjørnerne nederst til venstre og øverst til højre. Med grænserne ON afvises punkter udenfor. |
| `LINE` | `L` | Lige stykker, hvert sit eget objekt |
| `LINETYPE` | `LT`, `CELTYPE` | Linjetypen nye objekter får (efter lag, efter blok, eller en navngiven) |
| `LINKVIEWS` | `SYNCVIEWS` | Panorér og zoom alle ruder samtidigt (delt skærm), for at sammenligne to tegninger eller revisioner |
| `LISPEDIT` | `VLIDE` | LISPEDIT (eller VLIDE) åbner LISP-editoren: et vindue til at skrive, indlæse og prøve en rutine. Indlæs i tegningen læser hver form, ligesom at indlæse filen med APPLOAD gør, og laver dens kommandoer. Kør valg evaluerer de valgte former, eller formen markøren står i. Konsollen viser, hvad rutinen skrev ud, og hver fejl med sin linje. Den matchende parentes markeres, mens du skriver, og Enter indrykker den nye linje. Ny, Åbn og Gem virker på en .lsp-fil. Listerne ved siden af teksten viser de funktioner, rutinen definerer, dem den kalder, som denne LISP ikke har endnu, og alle de funktioner, den har. Vinduet blokerer ikke tegningen, så en rutine kan bede om punkter; Stop eller Esc afslutter en rutine, der kører. |
| `LIST` | `LI`, `LS` | Beskriv objekter i historikken |
| `LTSCALE` | `LTS` | Tegningens linjetypeskala (hver streg og mellemrum ganges med den) |
| `LWDISPLAY` | `LWT` | Vis eller skjul linjetykkelser på skærmen (knappen LWT i statuslinjen) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Linjetykkelsen nye objekter får (efter lag, efter blok, standard, eller mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Kortlag under modelrummet: tegningens koordinatsystem, fliser, WMS, WMTS, ArcGIS, billeder |
| `MASSPROP` |  | MASSPROP: tværsnitsegenskaber for regioner og lukkede objekter: areal, omkreds, tyngdepunkt, momenter og inertiprodukt, gyrationsradier og hovedakserne. Nøjagtigt for linjer og buer. Det kan skrive rapporten til en tekstfil. |
| `MATCHPROP` | `MA`, `PAINTER` | Match egenskaber: kopiér et objekts lag, farve og mere over på andre (MA) |
| `MEASURE` | `ME` | MEASURE (ME): en markering for hver angivet længde langs en linje, bue, cirkel, polylinje, spline eller ellipse, fra den ende, der er tættest på dit valg. Punkter, eller med Blok en blok ved hver markering. |
| `MEASUREGEOM` | `MEA` | Mål en afstand, en radius, en vinkel eller et areal (MEA) |
| `MINSERT` |  | MINSERT: placér en blok i rækker og kolonner på én gang. Hver er sin egen reference, så du kan flytte eller slette hver af dem. |
| `MIRROR` | `MI` | Spejl objekter over en linje |
| `MLEADER` | `MLD`, `MLEAD` | Flere henvisningslinjer: en pil, en henvisningslinje og et notat, som ét objekt (MLD) |
| `MLEADERALIGN` | `MLA` | Flugt flere henvisningslinjer med én af dem langs en retning, med ens afstand, eller fordel dem mellem to punkter (MLA) |
| `MLEADERCOLLECT` | `MLC` | Saml flere henvisningslinjer til én: deres blokke i en række eller en kolonne, eller deres notater under hinanden (MLC) |
| `MLEADEREDIT` | `MLE` | Tilføj henvisningslinjer til flere henvisningslinjer eller fjern dem; skift dets indhold mellem tekst og en blok (MLE) |
| `MLINE` |  | Tegn parallelle linjer samtidigt, sammenføjet i hjørnerne. |
| `MOVE` | `M` | Flyt objekter med et basispunkt og et andet punkt |
| `MSPACE` | `MS` | Arbejd på modellen gennem en viewport på det åbne ark (eller dobbeltklik inde i viewporten). |
| `MTEXT` | `MT`, `T` | Afsnitstekst: træk dens bredde, og skriv derefter direkte på stedet; Enter starter et nyt afsnit (T) |
| `MVIEW` | `MV` | En viewport til modellen, på et layout |
| `NAMEDVIEW` | `NV`, `VIEWS` | Navngivne visninger: gem visningen på skærmen (eller et vindue) under et navn og gå tilbage til den (NV) |
| `NCOPY` |  | Kopiér objekter ud af en blokreference eller en ekstern tegning ind i tegningen, uden at eksplodere den. |
| `NEARBY` |  | Fortæl hvad der ligger tæt på markøren, nærmest først, med afstand og side. |
| `NEW` |  | Start en ny tegning |
| `OBJECTSCALE` | `OBJSCALE` | Noteringsskalaer for annotativ tekst og målsætninger: tilføj en skala, slet en, tilføj den aktuelle skala, eller vis dem (hver viewport viser dem i størrelsen for sin egen skala) |
| `OBJOUT` |  | Eksportér 3D-modellen som OBJ |
| `OFFSET` | `O` | Parallelle kopier i en afstand |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: hvordan OFFSET lukker mellemrummene i en polylinjes ydre hjørner. 0 forlænger segmenterne, 1 tilføjer en bue, 2 tilføjer en lige afskæring. Gemmes for denne session. |
| `OLELIST` | `OLES` | Vis de OLE-objekter, en tegning indeholder, og placér en kopi af et billede af et af dem, hvor du vælger |
| `OPEN` |  | Åbn en DWG eller DXF fra denne computer |
| `OPENIN3D` |  | Åbn denne tegning i 3D-modelleringsappen, i en ny fane (intet uploades) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Åbn objektfangmenuen: vælg hvilke fang der er slået til. Også et højreklik på Fang i statuslinjen. |
| `OVERKILL` |  | Slet dublerede objekter og flet overlappende linjer og buer, samt linjer og buer, der mødes ende mod ende, inden for en tolerance. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panelet Parametre: brugerparametre og målsætningsbegrænsninger i én tabel |
| `PARTSLIST` | `PLIST` | En delliste-tabel over hver standarddel og stålprofil placeret fra biblioteket |
| `PASTEAREA` | `PAREA` | Indsæt et areal kopieret i MarkupCraft (Kopiér areal) i dets sande størrelse, som et billede. |
| `PASTEBLOCK` |  | PASTEBLOCK: indsæt det, du kopierede, som én blok. Blokken får et navn af sig selv; RENAME giver den dit eget. |
| `PASTECLIP` |  | Indsæt udklipsholderen: den følger markøren, klik hvor den skal hen (Ctrl+V) |
| `PASTEORIG` |  | Indsæt udklipsholderen ved de koordinater, den blev kopieret fra (Ctrl+Shift+V) |
| `PDF` |  | Giv CadCraft de PDF-filer, tegningens underlag bruger |
| `PDFADJUST` |  | Falm, kontrast, monokrom eller slå et PDF-underlag fra |
| `PDFATTACH` | `PDFATT` | Vedhæft en PDF-side som underlag (PDFATTACH) |
| `PDFCLIP` |  | Beskær et PDF-underlag til et rektangel eller en polygon |
| `PDFIMPORT` | `PDFIM` | Gør en PDF-sides linjer, udfyldninger og tekst til tegningsobjekter (PDFIMPORT) |
| `PDFLAYERS` |  | Slå lagene i et PDF-underlag til eller fra |
| `PEDIT` | `PE` | Redigér en polylinje: luk, åbn, sammenføj, bredde, tilpas kurve, spline-kurve, fjern kurve, generér linjetype, vend om; linjer, buer og splines kan gøres til polylinjer |
| `PHOTOSKETCH` | `PSK` | Gør et foto af en håndskitse på papir til linjer og buer i en skala, retter perspektivet og giver hver pennefarve sit eget lag. |
| `PICKSTYLE` |  | PICKSTYLE: om valg af ét objekt i en gruppe vælger hele gruppen (1, startindstillingen) eller kun det objekt (0). Gemmes for denne session. |
| `PLAN` |  | Drej visningen, så UCS X-aksen (Aktuel ucs, en gemt Ucs eller Verden) ligger vandret på skærmen. Intet i tegningen flyttes. |
| `PLINE` | `PL` | En polylinje af linje- og buesegmenter |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Plot til PDF: et layout, eller modellen i en skala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Plottestiltabeller: angiv hvad hver farve udskrives som (farve, sort, grå, blæk, linjetykkelse); gemmes med tegningen (STYLESMANAGER) |
| `POINT` | `PO` | Punktobjekter |
| `POINTCLOUD` | `PC` | Den vedhæftede punktsky: udsnit, højde, tykkelse, farve, størrelse, synlig, zoom, frigør |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Vedhæft en punktsky (LAS, LAZ, XYZ, PTS) under tegningen |
| `POLARANG` |  | Trinnet for polar sporing i grader (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | En regulær polygon |
| `PRESSPULL` |  | Skub eller træk en flade på et massivt legeme (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Åbn panelet Egenskaber (også Ctrl+1, eller dobbeltklik på et objekt) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Fold panelet Egenskaber ind til vinduets kant |
| `PSPACE` | `PS` | Forlad viewporten, du arbejder i, og gå tilbage til arket (eller dobbeltklik uden for den). |
| `PUBLISH` | `-PUBLISH` | Plot flere eller alle ark til én PDF (en side og et bogmærke pr. ark) |
| `PURGE` | `PU` | Fjern blokdefinitioner, der ikke bruges |
| `QDIM` |  | Hurtig målsætning: målsæt flere objekter på én gang (kontinuerlig, grundlinje, forskudt, koordinat, radius eller diameter) |
| `QPMODE` | `QP` | Hurtige egenskaber ved markøren til eller fra |
| `QSELECT` | `QS` | Hurtigvalg: hvert objekt af en type, hvis lag, farve, størrelse eller navn passer (QS) |
| `RASTERSNAP` |  | Slå fang til linjerne på scannede ark til eller fra. |
| `RAY` |  | Stråle: en konstruktionslinje fra et punkt, uendelig i én retning. |
| `RECOVER` |  | Åbner en beskadiget DXF eller DWG: springer over det, der ikke kan læses, i stedet for at afvise filen, siger hvad der blev sprunget over, og kontrollerer og reparerer derefter tegningen, som AUDIT gør. |
| `RECTANG` | `REC`, `RECTANGLE` | En lukket polylinje ud fra to hjørner |
| `REDLINE` | `RDL` | Redline til revision: læs en MarkupCraft-redlinepakke, accepter eller afvis hver ændring, sæt en sky om de accepterede med en revisionslog, og gem svarfilen (RDL) |
| `REDO` |  | Gentag det, der blev fortrudt |
| `REFCLOSE` |  | Afslut redigering af en blok på stedet: gem den, eller kassér ændringerne |
| `REFEDIT` |  | Redigér en blok på stedet, hvor en reference til den sidder, med resten af tegningen falmet; REFCLOSE gemmer den |
| `REGEN` | `RE` | Genopbyg det, der er tegnet i denne fane, ud fra tegningen |
| `REGENALL` | `REA` | Genopbyg det, der er tegnet i hver fane, rude og åben tegning |
| `REGION` | `REG` | REGION (REG): lav flade områder (regioner) af lukkede objekter, eller af linjer, buer og polylinjer, der lukker en løkke ende mod ende. UNION, SUBTRACT og INTERSECT kombinerer så regioner, og MASSPROP giver deres tværsnitsegenskaber. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registrér flere scanninger: placér dem i én ramme ud fra valgte punktpar eller mål, finjustér med ICP, eksportér én LAS eller E57 |
| `REINIT` |  | Indlæs din aliasfil igen |
| `RENAME` | `-RENAME`, `REN` | Omdøb et lag eller en blok (hvert objekt eller reference følger med) |
| `REVCLOUD` | `RC` | Revisionssky: tegn rundt om et rektangel, en polygon, en frihåndsbane eller et objekt (RC) |
| `REVOLVE` | `REV` | Drej lukkede 2D-objekter om en akse til massive legemer (3D) |
| `ROTATE` | `RO` | Roter objekter om et basispunkt |
| `SAMPLES` | `SAMPLE` | Åbn en af eksempeltegninger fra CadCraft (et arkitektursæt, en som-bygget) for at lære af dem |
| `SAVE` | `QSAVE` | Hent tegningen i sit format (DWG eller DXF) |
| `SAVEAS` |  | Hent tegningen som DWG eller DXF: vælg hvilken |
| `SAYSEL` |  | Fortæl hvad der er valgt, én sætning pr. objekt. |
| `SCALE` | `SC` | Skalér objekter om et basispunkt |
| `SCALELISTEDIT` | `SCALELIST` | Tilføj, redigér og slet tegningens egne skalaer; de vises i viewport- og plotskalalisterne og gemmes i filen (SCALELIST) |
| `SCANALIGN` | `SCL` | Justér et scannet ark til to punkter: flyt, drej og, hvis du vælger, skalér det. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Indsæt en scannet tegning: en PNG, JPEG eller TIFF (én side eller alle sider i en flersidet fil) eller en PDF-side, der er et billede. |
| `SCANCLEAN` | `SCC` | Gør et scannet ark sort-hvidt og fjern pletter. |
| `SCANCROP` | `SCR` | Beskær et scannet ark til et vindue. |
| `SCANDESKEW` | `SCD` | Find vinklen, et scannet arks lange linjer ligger i, og drej arket lige, når du accepterer vinklen. |
| `SCANERASE` | `SCE` | Slet et område på et scannet ark: et rektangel, en polygon eller et lasso. |
| `SCANINFO` | `SCI` | Vis et scannet arks oprindelige fil og de trin, der er taget siden. |
| `SCANSCALE` | `SCS` | Skalér et scannet ark: vælg to punkter på det og skriv den sande afstand mellem dem. |
| `SCANTRACE` | `SCT` | Spor et scannet ark til linjer og buer på et nyt lag, med en tolerance du angiver. Tekst og skravering bliver som raster. |
| `SELECT` |  | Vælg objekter nu (til P, Forrige, i næste kommando) |
| `SELECTALL` | `AI_SELALL` | Vælg hvert objekt, du kan redigere på denne fane (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Vælg hvert objekt, der ligner dem, du vælger: samme type, lag og farve (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Viser panelet Arksæt: ark fra mange tegninger, nummereret, udgivet som én PDF. |
| `SHORTCUTS` | `KEYS` | Giv enhver kommando en tast efter eget valg (Ctrl eller Alt med et bogstav, eller en ledig funktionstast), gemt i denne browser eller desktop-app. |
| `SHXFONTS` | `SHX` | Giv CadCraft SHX-skrifttyper fra en mappe eller filer, så tekststilarter, der navngiver dem, tegner med dem (liste, fjern, omvendt) |
| `SKETCHFIX` | `SKF` | Tegn frihåndsstreger; hver bliver til en ren linje, cirkel, bue, rektangel eller polylinje, rettet op og sammenføjet med de andre. |
| `SKETCHLIVE` | `SKL` | Skitsér med en pen: hvert streg bliver til en præcis linje, cirkel, bue eller rektangel, når du løfter pennen, fanget til tegningen, med dens størrelse at skrive over. |
| `SPLINE` | `SPL` | Tegn en spline gennem punkter (eller med en kontrolpolygon), eller gør en polylinje til en |
| `SPLINEDIT` | `SPE` | Redigér en spline: tilpasningspunkter, kontrolpunkter og vægte, åbn eller luk den, vend den, eller konvertér den til en polylinje |
| `SPLIT` |  | Del tegneområdet i ruder (som VPORTS på modellen; også fra et ark) |
| `STEELMEMBER` | `SMEMBER` | Et stålprofil i 3D ud fra et standardprofil: to punkter (en bjælke) eller et basispunkt og en højde (Søjle) |
| `STLOUT` |  | Eksportér 3D-modellen som STL (millimeter) |
| `STRETCH` | `S` | Stræk: træk et krydsvindue over enderne for at flytte; det, der er inde i, flytter sig, resten bliver stående (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Tekststilarter: skrifttypen, højden, bredden og skråstillingen, nye tekster får (dialogboksen; -STYLE i kommandolinjen) |
| `SUBTRACT` | `SU` | Træk massive legemer fra andre (3D), eller 2D-regioner fra regioner |
| `SWBOUT` | `SWMACRO` | Hent en makro til SolidWorks (.swb), der genopbygger modellen som én begrænset skitse |
| `SWEEP` |  | Sweep lukkede 2D-objekter langs en bane (linje, polylinje, bue, cirkel) til massive legemer (3D) |
| `TABLE` | `TB` | Lav en tabel: rækker og kolonner, eller ud fra regnearksceller på udklipsholderen eller en CSV-fil |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Redigér en tabel: skriv i en celle, indsæt og slet rækker og kolonner, størrelser, sammenlagte celler, justering |
| `TABLEEXPORT` |  | Gem det, en tabel viser, som en CSV-fil |
| `TABLEPASTE` | `PASTETABLE` | Lav en tabel ud fra regnearksceller på udklipsholderen |
| `TABLESTYLE` | `TS` | Tabelstilarter: teksthøjder, justering, margen og kanter for titel-, overskrifts- og datarækker |
| `TAGS` |  | Tags på blokreferencer: definér en tag (type, tilladte værdier, blokke den gælder for), angiv den på de valgte referencer, og vis dem som en liste, du kan gemme som CSV |
| `TEXT` | `DT`, `DTEXT` | Enkeltlinjet tekst; Enter starter næste linje |
| `TEXTEDIT` | `ED`, `DDEDIT` | Redigér tekst på stedet: vælg en tekst (eller dobbeltklik på en) (ED) |
| `TEXTMASK` | `TMASK` | Læg en baggrundsmaske bag tekster (tegningens baggrund eller en farve), eller fjern den. |
| `TEXTTOFRONT` |  | Bring al tekst, målsætninger og henvisninger forrest foran alt andet. |
| `TOOLBAR` |  | Vælg hvad værktøjslinjens knapper viser: ikoner og tekst, kun ikoner, eller kun tekst (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Placér værktøjslinjen øverst, nederst, til venstre eller højre i vinduet |
| `TOOLBARROWS` |  | Vælg hvor mange rækker værktøjslinjen bruger: tilpas (bryd linjen), 2, eller 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Gør bjælkerne over tegningen standard eller kompakte |
| `TOUCHCROSSHAIR` | `TCX` | Forskudt krydsmarkør til tegning med en finger: én finger flytter en krydsmarkør, der sidder over og ved siden af den, så fingeren ikke dækker valgpunktet. Når du løfter fingeren, vælges intet; knappen Klik eller et tryk med en anden finger vælger ved krydsmarkøren, og når du holder Klik nede, mens du bevæger dig, trækkes der. Et langt tryk eller knappen Enter er Enter. To fingre panorerer og zoomer. Indstillinger: ON, OFF, Auto (kun hvor en finger er den eneste markør), Afstand, Side. |
| `TOUR` | `TUTORIAL` | Tag seks-trins-guiden til din første tegning igen |
| `TRIM` | `TR` | Beskær objekter tilbage til, hvor andre krydser dem: klik på et stykke, træk gennem flere, eller Shift+klik for at forlænge |
| `TRIMEXTENDMODE` |  | Hvordan TRIM og EXTEND starter: 1 Hurtig (hvert objekt er en skærekant eller kontur), 0 Standard (vælg kanterne først) |
| `TTR` |  | En cirkel tangent til to objekter, med en radius du angiver (det samme som CIRCLE T) |
| `TURNLEFT` |  | Drej visningen 90° til venstre (mod uret): UCS Z -90, og visningen følger. Intet i tegningen flyttes. |
| `TURNRIGHT` |  | Drej visningen 90° til højre (med uret): UCS Z 90, og visningen følger. Intet i tegningen flyttes. |
| `TURNWORLD` |  | Tilbage til verden: UCS Verden, og visningen er vandret igen. |
| `TXT2MTXT` | `T2M` | Sammenføj enkeltlinjet tekst til én afsnitstekst, fra top til bund. |
| `UCS` |  | Dit eget koordinatsystem: et udgangspunkt og en X-akse (Udgangspunkt (O), Z-vinkel, 3punkt, Objekt (OB), Forrige, Verden, Navngivet (NA)). Punkter, du skriver, ortogonal, polar sporing, gitteret og ny tekst følger det; visningen drejes, så dens X-akse er vandret. Intet i tegningen flyttes. |
| `UNDO` | `U` | Fortryd den sidste kommando |
| `UNGROUP` |  | UNGROUP: opløs grupper. Vælg objekter i grupperne, eller angiv et Navn. Objekterne bliver i tegningen. |
| `UNION` | `UNI` | Sammenføj massive legemer til ét (3D), eller 2D-regioner til én region |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Vis alle objekter, der er skjult af ISOLATEOBJECTS eller HIDEOBJECTS, igen. |
| `UNITS` | `UN`, `DDUNITS` | Hvordan længder vises og skrives: decimal, fod og tommer, brøker (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Beregn felterne igen, og vælg, hvornår de opdateres af sig selv |
| `USDOUT` |  | Eksportér 3D-modellen som USD (.usda-tekst, .usdc-binær eller en .usdz-pakke) |
| `VIEW` | `-VIEW`, `V` | Standard 3D-visninger, perspektiv eller parallel (3D) |
| `VIEWBASE` | `FLATSHOT` | Placér en flad 2D-visning af de 3D-massive legemer (forfra, oppefra, fra siden eller isometrisk, skjulte linjer stiplet) på et ark eller i modellen |
| `VIEWLABEL` | `VL` | En visningstitel på et ark, der viser sin viewports visningsnavn, og ændres med den. |
| `VOICE` |  | Slå talte kommandoer til eller fra. De genkendes på denne computer. |
| `VPCLIP` |  | Beskærer en arkviewport til et lukket objekt eller en tegnet polygon; Slet gør den til et rektangel igen |
| `VPLAYER` |  | Frys eller tø lag op i nogle viewports alene (Frys, Tø op, Nulstil), og vælg hvilke lag nye viewports starter frosne i (Vpvisdflt) |
| `VPORTS` | `VIEWPORTS` | Del tegneområdet i ruder, hver med sin egen visning (på et ark: en viewport, som MVIEW) |
| `VPVIEW` |  | Angiv hvad en viewport viser: vælg et vindue på modellen |
| `VSCURRENT` | `VS`, `SHADEMODE` | Visuel stil for 3D-visningen: skygget, kanter, skjult linje, trådmodel, røntgen |
| `WALL` | `WA` | Tegn 2D-vægge ligesom en polylinje. De sammenføjes og bærer døre og vinduer. |
| `WALLARC` | `WARC` | Tegn en bue af vægge. Plan-vægge er lige, så buen tegnes som korte lige vægge (15 grader hver), der sammenføjes. |
| `WALLDELSEG` |  | Slet et stykke af en væg mellem to punkter. Det, der er tilbage, bliver én eller to vægge. |
| `WALLDIM` |  | Skriv en ny værdi for en målsætning: væggen ved dens fjerne ende flytter sig vinkelret på sig selv, væggen ved den første ende holder, og de vægge, der er sammenføjet med den, følger med. |
| `WALLDISJOIN` |  | Vælg en væg tæt på den ene ende for at forbyde sammenføjninger i den ende: enden tegnes lige, og intet følger den. Vælg den igen for at tillade dem. |
| `WALLGRID` |  | Lås en væg til en gitterlinje: langs den, eller én ende på den. Flyt linjen med GRIDMOVE, og væggen følger med. |
| `WALLHOLD` |  | Justér og lås: en væg holder sin plads i forhold til en anden væg (på dens linje, eller i den afstand den har). Hvis den ene flytter sig, følger den anden. |
| `WALLHOLDDIM` |  | Lås afstanden mellem to parallelle vægge. Hvis den ene flytter sig, følger den anden for at holde den. |
| `WALLHOLDS` |  | Vis låsene på væggene. |
| `WALLJOINS` |  | Giv hver væg i en ældre tegning sit id og gem sammenføjningerne mellem dem. Dette sker også ved den første ændring, du laver. |
| `WALLJOINSTYLE` |  | Klik på et hjørne, hvor to vægge mødes ende mod ende, for at ændre hvordan det tegnes: geringsskåret, stødsamling, kantet afslutning. T skifter hvilken væg, der går igennem. |
| `WALLOFFSET` | `WO` | Flyt en væg vinkelret på sig selv med en afstand (de vægge, der er sammenføjet med den, følger med), eller lav en kopi i den afstand. |
| `WALLPICK` |  | Lav vægge på en linje eller polylinje i tegningen, med de linjer, der er sammenføjet med den, hvis du siger Ja. |
| `WALLPOLY` | `WP` | Tegn vægge rundt om en regulær polygon med 3 til 64 sider, ligesom POLYGON. |
| `WALLRECT` | `WR` | Tegn fire sammenføjede vægge ud fra to modsatte hjørner, ligesom RECTANG. |
| `WALLREJOIN` |  | Gør to dele af en væg til én væg igen. Den første beholder sin plads i tegningen. |
| `WALLROT` |  | Tegn fire sammenføjede vægge som et rektangel drejet i en vilkårlig vinkel: den første side, derefter hvor langt ud. |
| `WALLSPLIT` | `WS` | Del en væg i to ved et punkt, eller der hvor en anden væg krydser. Delene forbliver sammenføjet, medmindre du beder om et mellemrum eller frie ender. Døre og vinduer følger deres del. |
| `WALLSPLITGAP` |  | Del en væg og efterlad et mellemrum: skriv mellemrummet, vælg væggen, og derefter punktet. Delene beholder frie ender og kan sammenføjes igen. |
| `WALLSTRETCH` |  | Stræk med et vindue: vægender inde i det flytter sig, vægge helt inde i det flytter sig hele, og vægge, der støder ind i deres sider, glider med. |
| `WALLTAN` |  | Fortsæt en væg med en bue, der forlader den langs væggen (tegnes som korte lige vægge). |
| `WALLTRACE` |  | Lav vægge rundt om det mindste lukkede område af linjer og vægge omkring det punkt, du klikker på. |
| `WALLUNHOLD` |  | Fjern låsene fra en væg (og låsene for andre vægge til den). |
| `WBLOCK` | `W`, `-WBLOCK` | Skriv en blok, nogle objekter eller hele tegningen til en ny DWG- eller DXF-fil (W) |
| `WEDGE` | `WE` | En kile: to hjørner og en højde; den skråner væk fra det første hjørne (3D) |
| `WHEREAMI` | `WHERE` | Fortæl hvor markøren er. |
| `WHOHAS` |  | Siger hvem der har en tegning åben. CadCraft Studio gemmer en lille låsefil ved siden af hver åben tegning (Plan.dwg.cclock: hvem, siden hvornår, hvilken version) og fjerner den ved lukning. Valgmuligheder: Aktuel (C), Fil (F), Mappe (FO), Sti (PA), Navn (N). En lås, der ikke er opdateret i fem minutter, siges at være forældet. Ikke tilgængelig i en browser. |
| `WINDOW` | `WN` | Placér et vindue i en væg. |
| `XATTACH` | `XA` | Vedhæft en anden DWG eller DXF til denne tegning, vist skrivebeskyttet (XREF viser dem og indlæser dem igen) |
| `XCLIP` | `XC` | Beskær blokreferencer og eksterne tegninger til et rektangel eller en polygon, eller fjern beskæringen. |
| `XLINE` | `XL` | Konstruktionslinje, uendelig i begge retninger: gennem to punkter, vandret, lodret, i en vinkel, halverende en vinkel, eller forskudt fra en linje. |
| `XREF` | `XR`, `-XREF` | Eksterne tegninger (eksterne referencer): vis, vedhæft, indlæs igen, bind, frigør |
| `ZOOM` | `Z` | Udstrækning, eller et vindue |
