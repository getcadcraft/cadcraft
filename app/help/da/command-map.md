---
title: Kommandokort: hvad du skriver
summary: Hver kommando CadCraft har med sine korte navne, A til Z, lavet af programmet selv, og de vaner fra andre tegneprogrammer der er anderledes.
keywords: kommandokort, kommandoer, aliasser, korte navne, kommer fra, kommandoliste, hvad du skriver, erase, trim, tilsvarende, forskelle
from: 9426856f
---

CadCraft bruger de kommandonavne og korte navne folk kender fra andre tegneprogrammer: skriv `L` for en linje, `TR` for at beskære, `E` for at slette. Der er derfor ingen oversættelsestabel at lære for de fleste; navnet du kender, er navnet her. Listen nedenfor er alle kommandoer CadCraft har, lavet af selve programmet. {{key:Enter}} gentager den sidste, og `HELP` i kommandolinjen udskriver den samme liste.

De få der ikke er de samme, eller som ikke er bygget:

- **Gem** downloader en kopi i browseren ({{cmd:SAVE}}, {{cmd:SAVEAS}}); i CadCraft Studio skriver den filen. Se [Fra andre tegneprogrammer](topic:coming-from).
- **PLOT** laver en PDF (også PNG og SVG) med en plotstiltabel; der er ingen sidehåndtering.
- **DIMSTYLE** og **PEDIT** er bygget; **PEDIT** har ingen valgmulighed for at redigere hjørnepunkter (det klarer grebene).
- **TABLE** er ikke bygget; {{cmd:XREF}}, {{cmd:SPLINE}} og {{cmd:WBLOCK}} er.
- En rutines egne kommandoer (AutoLISP `C:NAME`) vises, når du har indlæst den med {{cmd:APPLOAD}}; de er ikke listet her.

## Alle kommandoer (402)

| Kommando | Korte navne | Hvad den gør |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Kredsér 3D-visningen med venstre knap |
| `ACCESS` | `AX` | Slå tegning uden syn til eller fra: resultater læst op af din skærmlæser, en tastaturmarkør på tegningen, fangelyde og talte kommandoer. |
| `ALIASEDIT` | | Redigér kommandoaliasser i én tekstfil (det velkendte L, *LINE-format) |
| `ALIGN` | `AL` | Flyt og drej objekter så kildepunkter lander på destinationspunkter (et, to eller tre par), og skalér dem hvis du vil |
| `ALIGNPANEL` | `ALP` | Åbn panelet Justér og fordel |
| `ALIGNTO` | | Justér de valgte objekters venstre, midter, højre, top, midte eller bund-kanter efter markeringen, det første eller sidste valgte objekt, eller et punkt |
| `ANNOALLVISIBLE` | `ANNOALL` | Vis annotative objekter i hver skala, eller kun hvor viewportens (eller tegningens) skala står på deres liste |
| `ANNOSCALE` | `CANNOSCALE` | Angiv tegningens annoteringsskala: annotativ tekst og målsætninger ændres i størrelse, så de udskrives i samme størrelse |
| `APPLOAD` | `AP` | Indlæs programmer: LISP-rutiner (.lsp) og deres dialogfiler (.dcl); Startup Suite (AP) |
| `ARC` | `A` | Bue: 3-punkt, Start/Centrum/Slut, Start/Centrum/Vinkel, Start/Centrum/Længde, Start/Slut/Vinkel, Start/Slut/Retning, Start/Slut/Radius, Centrum/Start/Slut, Centrum/Start/Vinkel, Centrum/Start/Længde, Fortsæt |
| `AREA` | `AA` | Areal og omkreds ud fra punkter eller for et objekt; Tilføj og Træk fra holder en løbende total (AA) |
| `ARRAY` | `AR` | Kopier i rækker og kolonner, eller rundt om et centrum (AR) |
| `ARRAYASSOCIATIVITY` | | Angiver om ARRAY-kommandoerne laver arrays der forbliver redigerbare (1) eller simple kopier (0) |
| `ARRAYCLOSE` | | Afslutter redigering af et arrays kildeobjekter |
| `ARRAYEDIT` | | Ændrer et array lavet med valgmuligheden Associativ: antal, afstand, kildeobjekter, ét element |
| `ARRAYPATH` | | Kopier af objekter langs en linje, bue, polylinje eller anden kurve |
| `ARRAYPOLAR` | | Kopier rundt om et centerpunkt |
| `ARRAYRECT` | | Kopier i rækker og kolonner |
| `ASBUILT` | `ASB` | ASBUILT læser de som-bygget-punkter et hold har målt (CSV / TXT, som EXPORTPOINTS skriver) og sammenligner dem med tegningens punkter: inden for eller uden for tolerancen, ikke målt, ekstra. Markerer dem på laget AS-BUILT og downloader en CSV-rapport. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definér en attribut (et mærke en blok beder om en værdi for) til at lægge i en blok (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Redigér en blokreferences attributværdier på kommandolinjen, én efter én (Enter beholder en værdi) |
| `ATTSYNC` | | Bring en blocks referencer på linje med dens attributdefinitioner: nye tilføjes med deres standardværdier, fjernede slettes, placeringer og tekst nulstilles; værdier bevares |
| `AUDIT` | | Kontrollerer den åbne tegning for skader: tal der ikke er endelige, objekter uden størrelse, manglende lag, blokke, stilarter og linjetyper, blokke der indeholder sig selv, delte id'er, ødelagte målsætninger og skraveringer. Lister hvad den finder efter type og spørger før den retter; rettelsen er ét fortrydelsestrin. |
| `AUNITS` | `ANGUNITS` | Hvordan vinkler vises og skrives: decimale grader, grader-minutter-sekunder eller pejlinger som N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Tegningens autofuldførelse til eller fra, eller vis hvad tegningens mønstre foreslår nu. |
| `AUTOCONSTRAIN` | | Tilføj sammenfaldende, vandrette og lodrette begrænsninger hvor geometrien allerede er tæt på |
| `AUTODIM` | `ADIM` | Målsæt efter regler: samlet størrelse, kæder langs siderne, åbninger, hul-diametre og gitterafstand, uden at gentage det der allerede er målsat. |
| `AUTOSHEET` | `ASH` | Lægger ark ud af sig selv: vælger papir og standardskalaer og placerer hver visning med en billedtekst og et tegningshoved. |
| `BATTMAN` | | Blokattributadministrator: rækkefølge, mærker, spørgsmål, standarder og tilstande for en blocks attributter, derefter opdateres dens referencer |
| `BCLOSE` | | Luk blokeditoren: gem blokken eller kassér ændringerne |
| `BCONVERT` | | BCONVERT finder geometri der gentages og gør den til blokreferencer. Vælg de objekter der gentages: hvert andet sæt objekter i det åbne rum med samme geometri, flyttet og drejet i en vilkårlig vinkel, findes, og med Spejlet eller Skaleret slået til findes også spejlbilleder og kopier i en anden størrelse. Giv den nye blok et navn og et basispunkt; markeringen og hver kopi bliver referencer til den, hver med sin egen rotation og skala. Eller vælg Blok og navngiv en eksisterende blok for at finde løse kopier af dens objekter. En kopi skal have samme lag, farve, linjetype og linjetykkelse, medmindre Egenskaber er sat til Ignorér. Objekter på låste lag lades være. Ét fortrydelsestrin. |
| `BEDIT` | `BE` | Blokeditor: redigér en blocks objekter og attributter; BCLOSE gemmer (BE) |
| `BLEND` | | BLEND: en spline mellem enderne af to åbne kurver, valgt nær enderne for at forbinde. CONtinuity: Tangent følger begge retninger, Smooth følger også hvordan de bøjer. |
| `BLOCK` | `B`, `BMAKE` | Lav en blok af objekter (de bliver én reference) |
| `BLOCKREPLACE` | | BLOCKREPLACE: hver reference til én blok bliver en reference til en anden, på samme sted med samme skala og rotation. Værdier for attributter som begge blokke har, bevares. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE viser panelet Blokke med markøren i dets filter. Panelet viser et billede af hver blok (de senest placerede først), som liste eller gitter; klik på et billede eller træk det ind på tegningen for at placere blokken med INSERT. Under Biblioteker tilføjer du en DWG- eller DXF-fil af din egen: dens blokke vises med billeder og kopieres ind i denne tegning når du placerer en. I CadCraft Studio kan en mappe med tegninger også tilføjes, og filer og mapper huskes. |
| `BOMEDIT` | `BOMCOLUMNS` | En materialelistetabels kolonner, gruppering, sortering, titel, summer og bemærkninger |
| `BOMEXPORT` | | Gem en materialelistetabel som en .csv-fil |
| `BOMTABLE` | `BOM` | En levende materialelistetabel for én zone, eller for hele tegningen |
| `BOMUPDATE` | | Opdatér alle materialelistetabeller nu, også de fastlåste |
| `BOMZONE` | `BZONE` | Et navngivet område i tegningen til en materialeliste: to hjørner, en polygon eller et lukket objekts kontur |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): vælg et punkt inde i et lukket område og få en lukket polylinje rundt om det. Buer forbliver buer. Øer tegner også konturerne af områderne indeni. |
| `BOX` | | En kasse: to hjørner og en højde (3D) |
| `BPARAMETER` | `BPARAM` | Ikke bygget endnu: tilføjelse af en parameter (såsom Synlighed) til en blok. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blokparametre: navngivne parametre med formler og flere synlighedsparametre i én blok. Virker i blokeditoren (tildel de valgte objekter til en tilstand) og på en valgt reference (dens egne værdier og tilstande). |
| `BREAK` | `BR` | Bryd en linje, bue, cirkel eller polylinje mellem to punkter (BR) |
| `BREAKATPOINT` | | Del en linje, bue eller polylinje i to ved et punkt |
| `BREAKLINE` | | Tegn en linje med et brudsymbol; dens størrelse og forlængelsen ud over enderne huskes. |
| `BREPLACE` | | BREPLACE bytter én blok ud med en anden. Valgt: vælg blokreferencer og navngiv blokken der skal bruges i stedet. Alle: navngiv en blok og dens erstatning, og hver reference i hvert rum og inde i andre blokke ændres. En reference beholder sit sted, sin skala, rotation og lag og værdierne for attributter som begge blokke har; værdier den nye blok ikke har plads til, fjernes og navngives. |
| `BSEARCH` | | BSEARCH finder blokke. Navn: en del af et blocknavn, eller et mønster med * og ?. Attribut: en værdi (eller TAG=værdi) som en references attributter har. Geometri: vælg objekter eller én blokreference, og blokke hvis form er mindst 85 % ens listes, bedste først; størrelse, rotation og spejling tæller ikke. De referencer der findes i det åbne rum vælges, klar til næste kommando. |
| `BURST` | | Eksplodér blokreferencer og behold det attributterne siger: hver værdi bliver til tekst på attributtens eget lag. |
| `BVHIDE` | `BVH` | I blokeditoren: skjul objekter i den aktuelle synlighedstilstand. |
| `BVSHOW` | `BVSH` | I blokeditoren: vis objekter som den aktuelle synlighedstilstand skjuler (de vises falmet, så du kan vælge dem). |
| `BVSTATE` | `BVS` | I blokeditoren, på en blok med synlighedstilstande: skift til en tilstand, eller tilføj, omdøb eller slet en. |
| `CAL` | | Beregn en længde eller et tal: + − * / og parenteser, som du skriver dem hvor som helst |
| `CENTERLINE` | `CL` | Centerlinje mellem to linjer: midt imellem dem, eller langs halveringslinjen når de mødes (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Centermærke: et kryds i centrum af en cirkel eller bue, med centerlinjer til lige udenfor (CM) |
| `CHAMFER` | `CHA` | Affas hjørnet mellem to linjer (D to afstande, A længde og vinkel, P hvert hjørne af en polylinje) |
| `CHSPACE` | | CHSPACE: flyt objekter mellem et ark og modellen gennem en viewport. De skaleres og drejes så de ser ens ud fra den anden side. På et ark går de til modellen; mens du arbejder gennem en viewport (MSPACE), kommer de til arket. |
| `CIRCLE` | `C` | Centrum og radius, diameter, 2 eller 3 punkter |
| `CLASS` | | Læg de valgte objekter i en klasse, eller angiv den aktive klasse når intet er valgt (? lister dem) |
| `CLASSES` | `CLS` | Panelet Klasser: klasser sorterer objekter på tværs af lag; vis, skjul og stil dem, og overskriv dem pr. viewport (CLS) |
| `COMMANDLINE` | `CMDLINE` | Dok eller frigør kommandolinjen, gør den til én linje, angiv dens historiklinjer, eller åbn historikken (F2) |
| `COMPARESETTINGS` | `CMPSET` | Sammenlign målsætningsstile, tekststile, lag, ark eller enheder: to i denne tegning, eller denne tegning mod en anden åben, og kopiér en værdi over. |
| `CONSTRAINTBAR` | `CBAR` | Vis eller skjul begrænsningslinjerne (Vis alle / Skjul alle, eller pr. objekt) |
| `COPY` | `CO`, `CP` | Kopiér objekter, så mange gange du klikker |
| `COPYBASE` | | Kopiér objekter til udklipsholderen med et basispunkt du vælger |
| `COPYCLIP` | | Kopiér objekter til udklipsholderen (Ctrl+C); PASTECLIP placerer dem |
| `COUNT` | `BCOUNT` | Tæl blokreferencer: vælg én for at markere og tælle hver reference til dens blok |
| `COUNTTABLE` | | Placér en tabel med blokoptællinger |
| `CREDITS` | | Sætter bibliotekets kildeangivelser ind i tegningen som en tabel. Kør den igen for at opdatere tabellen fra de objekter der er i tegningen nu. |
| `CURSORSIZE` | | Markørkorsets størrelse: 100 kører det kant til kant over tegningen (Indstillinger › Markør › Fuld skærm) |
| `CUTCLIP` | | Klip objekter til udklipsholderen (Ctrl+X): kopiér, og slet derefter |
| `CYLINDER` | `CYL` | En cylinder: centrum, radius og højde (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | List blokke, deres attributter og objektegenskaber som en tabel i tegningen eller en CSV-fil |
| `DATALINK` | `DL` | En tabel fra en CSV-fil der husker filen, så den kan læses igen |
| `DATALINKUPDATE` | `DLU` | Læs et datalinks fil igen og fyld dets tabeller igen |
| `DCALIGNED` | `DCALI` | Dimensionel begrænsning: sand afstand mellem punkter, et punkt og en linje, eller to linjer |
| `DCANGULAR` | `DCANG` | Dimensionel begrænsning: vinkel mellem to linjer, eller af en bue |
| `DCCONVERT` | | Gør målsætninger tegnet på begrænsbar geometri til dimensionelle begrænsninger |
| `DCDIAMETER` | `DCDIA` | Dimensionel begrænsning: diameter af en cirkel eller bue |
| `DCDISPLAY` | | Vis eller skjul dimensionelle begrænsninger på tegningen |
| `DCHORIZONTAL` | `DCHOR` | Dimensionel begrænsning: vandret afstand |
| `DCLINEAR` | `DCLIN` | Dimensionel begrænsning: vandret eller lodret afstand, fra hvor du placerer den |
| `DCRADIUS` | `DCRAD` | Dimensionel begrænsning: radius af en cirkel eller bue |
| `DCVERTICAL` | `DCVER` | Dimensionel begrænsning: lodret afstand |
| `DELBLOCKS` | | Slet blokke: hver reference (også indlejrede, på hvert ark) og definitionerne |
| `DELCONSTRAINT` | `DELCON` | Fjern hver begrænsning (geometrisk og dimensionel) fra de objekter du vælger |
| `DELOPENING` | | Tag en dør eller et vindue ud af en væg. |
| `DESCRIBE` | `DESC` | Sig hvad tegningen indeholder: hvor mange objekter, af hvilken slags, hvor store, hvad der er valgt. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Ryd markeringen (Esc) |
| `DETAILS` | `DET` | Dit firmas egne detaljer, fundet for det du tegner: find, tilføj en blok, list, fjern, slå tilbud til eller fra. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Tegn et diagram ud fra tekst: et Mermaid-flowdiagram, et PlantUML-komponentdiagram, D2, en fra-til-liste eller draw.io XML, som blokke og forbindelser du kan redigere |
| `DIMALIGNED` | `DAL`, `DIMALI` | Sand afstand mellem to punkter |
| `DIMANGULAR` | `DAN`, `DIMANG` | Vinkel mellem to linjer, af en bue, eller ud fra tre punkter |
| `DIMARC` | `DAR` | Buelængdemålsætning: afstanden langs en bue, med buesymbolet (DAR) |
| `DIMASZ` | | Målsætningsindstilling: pilestørrelse |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Målsætninger stablet fra én grundlinje |
| `DIMBREAK` | `DBREAK` | Bryd målelinjer og hjælpelinjer hvor de krydser andre objekter (Auto), mellem to punkter (Manuel), eller fjern brydningerne |
| `DIMCONSTRAINT` | `DCON` | Dimensionelle begrænsninger: lineære, justerede, vinkel, radius, diameter, konvertér |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | En kæde af målsætninger, hver fra enden af den sidste |
| `DIMDEC` | | Målsætningsindstilling: decimaler |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diameter af en bue eller cirkel |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Frigør målsætninger fra de objekter de er bundet til (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Ændr målsætningsteksten (Hjem, Ny tekst, Roter) eller skråstil hjælpelinjerne (Skrå) |
| `DIMEXE` | | Målsætningsindstilling: forlængelse ud over målelinjen |
| `DIMEXO` | | Målsætningsindstilling: forskydning fra oprindelsen |
| `DIMGAP` | | Målsætningsindstilling: mellemrum rundt om teksten |
| `DIMINSPECT` | | Kontrolmålsætning: en ramme om værdien med en etiket og hvor ofte delen kontrolleres |
| `DIMJOGGED` | `DJO`, `JOG` | Knækket radiusmålsætning: en radius tegnet fra et nærmere punkt når centrum er langt væk (DJO) |
| `DIMJOGLINE` | `DJL` | Tilføj et knæksymbol til en lineær eller justeret målelinje, for at vise at afstanden ikke er tegnet i skala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Vandret eller lodret afstand (R for en vilkårlig vinkel) |
| `DIMLUNIT` | | Målsætningsindstilling: længdeformat (1 videnskabelig, 2 decimal, 3 ingeniør, 4 arkitekt, 5 brøk) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinatmålsætning: X- eller Y-afstanden fra et punkt til UCS-oprindelsen, på en henvisning (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Overskriv målsætningsvariabler på valgte målsætninger uden at ændre deres stil; Ryd sætter stilen tilbage (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radius af en bue eller cirkel |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Bind en målsætnings punkter til objekter, så den følger og måler igen når de flyttes (DRE) |
| `DIMSCALE` | | Målsætningsindstilling: samlet skala (størrelser × denne) |
| `DIMSPACE` | | Lige afstand mellem parallelle målsætninger, målt fra en grundmålsætning (0 flugter dem, Auto er to gange teksthøjden) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Lav, ændr, angiv aktuel, slet, anvend og sammenlign navngivne målsætningsstile (dialogen; -DIMSTYLE på kommandolinjen) |
| `DIMTEDIT` | `DIMTED` | Flyt målsætningsteksten til venstre, højre eller midten af målelinjen, eller vend den |
| `DIMTEXTUNIT` | `DTU` | Målsætningstekst i mm, cm, m eller km, eller i tegningens egne enheder: de valgte målsætninger, ellers nye (DTU) |
| `DIMTXT` | | Målsætningsindstilling: teksthøjde |
| `DIST` | `DI` | Afstand og vinkel mellem to punkter |
| `DISTRIBUTE` | | Fordel de valgte objekter jævnt, side om side eller op og ned: lige store trin mellem centre, eller lige store mellemrum; de yderste to bliver |
| `DIVIDE` | `DIV` | DIVIDE (DIV): mærker der deler en linje, bue, cirkel, polylinje, spline eller ellipse i lige store dele. Punkter, eller med Blok en blok ved hvert mærke. |
| `DOCUMENTS` | `DOCS` | Åbn panelet Dokumenter: tjek tegninger ud og ind, revisioner, udgivelsestilstande og godkendelse for en projektmappe |
| `DOOR` | `DR` | Sæt en dør i en væg. Den side du klikker på er den side den svinger mod. |
| `DRAWORDER` | | Ændr tegnerækkefølgen: før objekter forrest, send dem bagerst, eller sæt dem over eller under andre objekter. |
| `DUPLICATE` | `DUP` | En kopi der flytter sig med markøren: klik for at sætte den ned (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Tegningens egenskaber: titel, forfatter og resten, samt dine egne navne- og værdipar |
| `DXFOUT` | | Download tegningen som DXF R12 (Gem beholder sit eget format) |
| `EATTEDIT` | `DDATTE` | Redigér en blokreferences attributter: værdier, tekst og egenskaber, én attribut ad gangen |
| `ELLIPSE` | `EL` | Akseendepunkter og den anden halvakse |
| `ERASE` | `E`, `DELETE` | Fjern objekter |
| `EXPLODE` | `X` | Bryd polylinjer, blokke og målsætninger i deres dele |
| `EXPORT` | `EXP` | Gem en kopi af tegningen i en filtype en add-on skriver |
| `EXPORT3D` | `3DEXPORT` | Eksportér 3D-modellen: GLB, OBJ eller STL |
| `EXPORTPOINTS` | `EXPPTS` | Skriv punkter, og blokkes indsætningspunkter med én attribut som beskrivelse, til en CSV- eller TXT-fil (PNEZD, PENZD eller XYZ) til BIM- og opmålingsprogrammer |
| `EXTEND` | `EX` | Forlæng objekter til at møde andre: klik nær en ende, træk gennem flere, eller Shift+klik for at beskære |
| `EXTRIM` | | EXTRIM: vælg én skærekant, og derefter en side. Alt der krydser kanten beskæres på den side. De stykker der ville gå, vises mens du flytter markøren. |
| `EXTRUDE` | `EXT` | Ekstruder lukkede 2D-objekter til legemer (3D) |
| `FIELD` | | Sæt et felt ind i en tekst, en tabelcelle eller en attribut: en dato, filnavnet, arknummeret, en tegningsegenskab, et objekts areal eller længde, eller en formel |
| `FILLET` | `F` | Afrund eller kantsikre hjørnet mellem to objekter (R radius, P hvert hjørne af en polylinje, M flere) |
| `FIND` | | Find og erstat ord i tekst, attributværdier og målsætningstekst |
| `FLATTEN` | | Sæt højden (Z) og tykkelsen af de valgte objekter til 0, også i de blokke de bruger. |
| `FLOOR` | | Vælg den etage der skal tegnes på, tilføj en, eller flyt eller kopiér markeringen til en. |
| `FLOORLAYERS` | | Gør etager til lag med navnene Floor-Layer, til en fil der skal til nogen uden etager. |
| `FLOORS` | `FLR` | Åbn panelet Etager: stabl etager i ét modelrum. |
| `GCCOINCIDENT` | | Begrænsning: to punkter mødes, eller et punkt bliver på et objekt |
| `GCCOLLINEAR` | | Begrænsning: to linjer bliver på én linje |
| `GCCONCENTRIC` | | Begrænsning: to cirkler eller buer deler et centrum |
| `GCEQUAL` | | Begrænsning: to linjer bliver lige lange, eller to cirkler/buer får samme radius |
| `GCFIX` | | Begrænsning: et punkt eller et helt objekt bliver, hvor det er |
| `GCHORIZONTAL` | | Begrænsning: en linje (eller to punkter) bliver vandret |
| `GCPARALLEL` | | Begrænsning: to linjer bliver parallelle |
| `GCPERPENDICULAR` | | Begrænsning: to linjer bliver i ret vinkel |
| `GCSYMMETRIC` | | Begrænsning: to punkter, linjer eller cirkler spejler hinanden på tværs af en linje |
| `GCTANGENT` | | Begrænsning: en linje og en cirkel eller bue (eller to af dem) bliver tangenter |
| `GCVERTICAL` | | Begrænsning: en linje (eller to punkter) bliver lodret |
| `GDSIN` | `GDS` | Vis en IC-layout (en GDSII-stream-fil): hvert lag og datatype som et tegningslag, fladt, i brugerenheder; kun til visning og måling (labforsøg) |
| `GEOMCONSTRAINT` | `GCON` | Geometriske begrænsninger: vandret, lodret, parallel, tangent, sammenfaldende… |
| `GLBOUT` | | Eksportér 3D-modellen som GLB (glTF) |
| `GRADIENT` | `GD` | Udfylder et område med et farveforløb af én eller to farver |
| `GRID` | | Angiv gitteret: afstanden mellem linjerne, hver N'te linje som hovedlinje, TIL eller FRA, eller Auto for at følge zoomet igen |
| `GRIDMOVE` | `GM` | Flyt en gitterlinje og tag det med der hænger på den: vægge strækkes, søjler, bobler og mærker flytter sig, og målsætninger følger. |
| `GROUP` | `G` | GROUP (G): giv de valgte objekter et fælles navn. Et klik på et af dem vælger dem alle. Enter ved navnet laver en gruppe uden navn. |
| `GROUPEDIT` | | GROUPEDIT: ændr en gruppe. Vælg et af dens objekter eller angiv dens Navn, og derefter Tilføj eller Fjern objekter, OMdøb den, ændr dens Beskrivelse, eller angiv om et klik vælger den hel. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Udfyld et område med en ensfarvet udfyldning eller et mønster: klik inde i det, eller vælg lukkede objekter (H) |
| `HATCHEDIT` | `HE` | Ændr en skravering: mønster, skala, vinkel, oprindelse og dens forbindelse til en kontur. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Laver konturpolylinjerne igen ud fra en skravering, forbundet med den eller ej |
| `HATCHTOBACK` | | Send hver skravering bag alt andet. |
| `HELP` | `?` | Denne liste |
| `HIDEOBJECTS` | | Skjul de valgte objekter indtil UNISOLATEOBJECTS. Gemmes ikke med tegningen. |
| `HISTORY` | `HIST` | HISTORY (HIST): tegningens versioner — kopier der gemmes på denne computer når Studio gemmer den, og skyens versioner — til at åbne, gendanne og sammenligne med det der er ændret, vist i farve. |
| `ID` | | Koordinater for et punkt |
| `IMAGE` | `IM` | Giv CadCraft de billedfiler en tegning bruger (en DWG gemmer kun hvor de lå) |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Placér et billede (PNG eller JPEG) fra en fil. |
| `IMAGECLIP` | `ICL` | Klip et billede til et rektangel eller en polygon, eller fjern dets udklip. |
| `IMPORT` | `IMP` | Importér en fil af en slags en add-on læser, ind i denne tegning |
| `INSERT` | `I`, `DDINSERT` | Placér en blok (S skala, R rotér); F fra en DWG/DXF-fil, L fra biblioteket |
| `INTERSECT` | `IN` | Behold kun det legemer har til fælles (3D), eller det området 2D-regioner deler |
| `ISODRAFT` | | ISODRAFT: isometrisk tegning til eller fra, eller direkte på planet Venstre, Top eller Højre. Mens den er til, følger Ortogonal og polar sporing planets to akser, gitteret tegnes isometrisk, og ELLIPSE har Isocirkel. |
| `ISOLATEOBJECTS` | `ISOLATE` | Vis kun de valgte objekter; alt andet i rummet skjules indtil UNISOLATEOBJECTS. Gemmes ikke med tegningen. |
| `ISOPLANE` | | ISOPLANE: vælg det isometriske plan at tegne på: Venstre, Top eller Højre. Enter går til det næste, ligesom F5 gør når isometrisk tegning er til. |
| `JOIN` | `J` | Sammenføj linjer, buer og polylinjer der mødes ende mod ende til én polylinje; linjer på én linje til én linje (J) |
| `LASER` | `LASERCUT` | Åbn panelet Laser: send lag til en laserskærer eller graveringsmaskine (GRBL G-kode) |
| `LASSOMODE` | | Tryk og træk tegner et lasso (1) eller et rektangel (0) |
| `LAYDEL` | | Slet et lag og hvert objekt på det (i modellen, på ark og i blokke) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Åbn lagadministratoren: hvert lag i én tabel |
| `LAYERPANEL` | | Vis lagpanelet |
| `LAYFRZ` | | Frys laget for hvert objekt du vælger |
| `LAYGROUP` | `LG` | Gruppér lag i mapper i panelet Lag. |
| `LAYISO` | | Isolér lagene for de valgte objekter (alle andre lag slås fra) |
| `LAYLOCKFADE` | | Angiv hvor meget objekter på låste lag falmer, og om et klik kan vælge dem. |
| `LAYMCUR` | | Gør laget for det objekt du peger på til det aktuelle |
| `LAYMRG` | | Flet lag: deres objekter flyttes til et målelag, og de fletede lag forsvinder |
| `LAYOFF` | | Slå laget for hvert objekt du vælger fra |
| `LAYON` | | Slå alle lag til |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Et nyt ark med et tegningshoved og en viewport |
| `LAYTHW` | | Tø alle lag op |
| `LAYUNISO` | | Slå de lag til igen som LAYISO slog fra |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Konverterer tekst skrevet med gamle vietnamesiske skrifttyper (TCVN3 / ABC-skrifttyper såsom .VnTime, og VNI-skrifttyper såsom VNI-Times) til Unicode. Sådan tekst vises allerede læsbart; dette skriver den om for altid, med en optælling og ét fortrydelsestrin. |
| `LENGTHEN` | `LEN` | Forlæng eller forkort linjer, buer og polylinjer: med et beløb, en procentdel, til en samlet længde, eller ved at trække (LEN) |
| `LIBRARY` | `LIB` | Biblioteksruden: placér elementer, søg efter opdateringer, kildeangivelser |
| `LIMITS` | | Angiv tegningsgrænserne: TIL, FRA, eller hjørnerne nederst venstre og øverst højre. Med grænserne TIL afvises punkter udenfor |
| `LINE` | `L` | Lige segmenter, hvert sit eget objekt |
| `LINETYPE` | `LT`, `CELTYPE` | Den linjetype nye objekter får (efter lag, efter blok, eller en navngiven) |
| `LINKVIEWS` | `SYNCVIEWS` | Panorér og zoom alle ruder sammen (delt skærm), for at sammenligne to tegninger eller revisioner |
| `LISPEDIT` | `VLIDE` | LISPEDIT (eller VLIDE) åbner LISP-editoren: et vindue til at skrive, indlæse og prøve en rutine. Indlæs i tegningen læser hver form, ligesom indlæsning af filen med APPLOAD gør, og laver dens kommandoer. Kør markering evaluerer de valgte former, eller formen markøren står i. Konsollen viser hvad rutinen skrev og hver fejl med sin linje. Den matchende parentes markeres mens du skriver, og Enter indrykker den nye linje. Ny, Åbn og Gem virker på en .lsp-fil. Listerne ved siden af teksten viser de funktioner rutinen definerer, dem den kalder som denne LISP ikke har endnu, og alle dem den har. Vinduet blokerer ikke tegningen, så en rutine kan bede om punkter; Stop eller Esc afslutter en rutine der kører. |
| `LIST` | `LI`, `LS` | Beskriv objekter i historikken |
| `LTSCALE` | `LTS` | Tegningens linjetypeskala (hver streg og mellemrum ganges med den) |
| `LWDISPLAY` | `LWT` | Vis eller skjul linjetykkelser på skærmen (knappen LWT i statuslinjen) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Den linjetykkelse nye objekter får (efter lag, efter blok, standard, eller mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Kortlag under modelrummet: tegningens koordinatsystem, fliser, WMS, WMTS, ArcGIS, billeder |
| `MASSPROP` | | MASSPROP: tværsnitsegenskaber for regioner og lukkede objekter: areal, omkreds, tyngdepunkt, momenter og produkt af inertia, gyrationsradier og hovedakserne. Præcis for linjer og buer. Den kan skrive rapporten til en tekstfil. |
| `MATCHPROP` | `MA`, `PAINTER` | Match egenskaber: kopiér ét objekts lag, farve og mere over på andre (MA) |
| `MEASURE` | `ME` | MEASURE (ME): et mærke for hver given længde langs en linje, bue, cirkel, polylinje, spline eller ellipse, fra enden nærmest dit valg. Punkter, eller med Blok en blok ved hvert mærke. |
| `MEASUREGEOM` | `MEA` | Mål en afstand, en radius, en vinkel eller et areal (MEA) |
| `MINSERT` | | MINSERT: placér en blok i rækker og kolonner på én gang. Hver er sin egen reference, så du kan flytte eller slette enhver af dem. |
| `MIRROR` | `MI` | Spejl objekter over en linje |
| `MLEADER` | `MLD`, `MLEAD` | Multihenvisning: en pil, en henvisning og en note, som ét objekt (MLD) |
| `MLEADERALIGN` | `MLA` | Flugt multihenvisninger med en af dem langs en retning, med lige store mellemrum, eller fordelt mellem to punkter (MLA) |
| `MLEADERCOLLECT` | `MLC` | Saml flere multihenvisninger til én: deres blokke i en række eller kolonne, eller deres noter under hinanden (MLC) |
| `MLEADEREDIT` | `MLE` | Tilføj henvisningslinjer til en multihenvisning eller fjern dem; skift dens indhold mellem tekst og en blok (MLE) |
| `MLINE` | | Tegn parallelle linjer samlet, forbundet i hjørnerne. |
| `MOVE` | `M` | Flyt objekter efter et basispunkt og et andet punkt |
| `MSPACE` | `MS` | Arbejd på modellen gennem en viewport på det åbne ark (eller dobbeltklik inde i viewporten). |
| `MTEXT` | `MT`, `T` | Afsnitstekst: træk dens bredde, og skriv derefter på stedet; Enter starter et nyt afsnit (T) |
| `MVIEW` | `MV` | En viewport til modellen, på et layout |
| `NAMEDVIEW` | `NV`, `VIEWS` | Navngivne visninger: gem visningen på skærmen (eller et vindue) under et navn og gå tilbage til den (NV) |
| `NCOPY` | | Kopiér objekter ud af en blokreference eller en tilknyttet tegning ind i tegningen, uden at eksplodere den. |
| `NEARBY` | | Sig hvad der ligger tæt på markøren, nærmeste først, med afstanden og siden. |
| `NEW` | | Start en ny tegning |
| `OBJECTSCALE` | `OBJSCALE` | Annoteringsskalaer for annotativ tekst og målsætninger: tilføj en skala, slet en, tilføj den aktuelle skala, eller list dem (hver viewport viser dem i størrelsen for sin egen skala) |
| `OBJOUT` | | Eksportér 3D-modellen som OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Kontorstandarden: teksthøjder på papir, lag, felter i tegningshovedet og skabeloner i én post. Viser den der gælder og hvor den kommer fra; Importér en .json-post til denne tegning, tilføj de kontorlag tegningen mangler, list felterne i tegningshovedet. |
| `OFFSET` | `O` | Parallelle kopier i en afstand |
| `OFFSETGAPTYPE` | | OFFSETGAPTYPE: hvordan OFFSET lukker mellemrummene ved en polylinjes ydre hjørner. 0 forlænger segmenterne, 1 tilføjer en bue, 2 tilføjer et lige snit. Gemmes for denne session. |
| `OLELIST` | `OLES` | List de OLE-objekter en tegning har, og læg en kopi af et af dets billeder hvor du vælger |
| `OPEN` | | Åbn en DWG eller DXF fra denne computer |
| `OPENIN3D` | | Åbn denne tegning i 3D-modelleringsappen, i en ny fane (intet uploades) |
| `OPTIONKEYS` | `OPTKEYS` | Giv kommandoens valgmuligheder egne bogstaver (ARRAY.PO, P), i én tekstfil |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Åbn objektfangmenuen: vælg hvilke fang der er til. Også et højreklik på Fang i statuslinjen. |
| `OVERKILL` | | Slet dublerede objekter og flet overlappende eller ende-mod-ende linjer og buer, inden for en tolerance. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Parameterpanelet: brugerparametre og dimensionelle begrænsninger i én tabel |
| `PARTSLIST` | `PLIST` | En delliste-tabel over hver standarddel og stålprofil placeret fra biblioteket |
| `PASTEAREA` | `PAREA` | Sæt et areal kopieret i MarkupCraft (Kopiér areal) ind i sin rigtige størrelse, som et billede. |
| `PASTEBLOCK` | | PASTEBLOCK: sæt det du kopierede ind som én blok. Blokken får et eget navn; RENAME giver den dit. |
| `PASTECLIP` | | Sæt udklipsholderen ind: den følger markøren, klik hvor den skal hen (Ctrl+V) |
| `PASTEORIG` | | Sæt udklipsholderen ind ved de koordinater den blev kopieret fra (Ctrl+Shift+V) |
| `PDF` | | Giv CadCraft de PDF-filer tegningens underlag bruger |
| `PDFADJUST` | | Dæmp, kontrast, monokrom eller slå et PDF-underlag fra |
| `PDFATTACH` | `PDFATT` | Vedhæft en PDF-side som underlag (PDFATTACH) |
| `PDFCLIP` | | Klip et PDF-underlag til et rektangel eller en polygon |
| `PDFIMPORT` | `PDFIM` | Gør en PDF-sides linjer, udfyldninger og tekst til tegningsobjekter (PDFIMPORT) |
| `PDFLAYERS` | | Slå lagene i et PDF-underlag til eller fra |
| `PEDIT` | `PE` | Redigér en polylinje: luk, åbn, sammenføj, bredde, tilpas kurve, spline-kurve, fjern kurve, linjetypegenerering, vend; linjer, buer og splines kan gøres til polylinjer |
| `PENPRESSURE` | | Om en pennestregs tryk sætter linjetykkelsen for det SKETCHFIX og SKETCHLIVE laver (til som standard). Gemmes i denne browser. |
| `PHOTOSKETCH` | `PSK` | Gør et foto af en håndtegning på papir til linjer og buer i en skala, retter perspektivet og giver hver pennefarve sit eget lag. |
| `PICKSTYLE` | | PICKSTYLE: om valg af ét objekt i en gruppe vælger hele gruppen (1, startindstillingen) eller kun det objekt (0). Gemmes for denne session. |
| `PLAN` | | Drej visningen så UCS' X-akse (Aktuel ucs, en gemt Ucs, eller Verden) er vandret på skærmen. Intet i tegningen flytter sig. |
| `PLINE` | `PL` | En polylinje af linje- og bue-segmenter |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Plot til PDF: et layout, eller modellen i en skala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Plotstiltabeller: angiv hvad hver farve udskrives som (farve, sort, gråtone, blæk, linjetykkelse); gemmes med tegningen (STYLESMANAGER) |
| `POINT` | `PO` | Punktobjekter |
| `POINTCLOUD` | `PC` | Den vedhæftede punktsky: udsnit, højde, tykkelse, farve, størrelse, synlig, zoom, frakobl |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Vedhæft en punktsky (LAS, LAZ, XYZ, PTS) under tegningen |
| `POLARANG` | | Trinnet for polar sporing i grader (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | En regulær polygon |
| `PRESSPULL` | | Skub eller træk en flade på et legeme (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Åbn panelet Egenskaber (også Ctrl+1, eller dobbeltklik på et objekt) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Fold panelet Egenskaber ind til vinduets kant |
| `PSPACE` | `PS` | Forlad viewporten du arbejder i og gå tilbage til arket (eller dobbeltklik udenfor den). |
| `PUBLISH` | `-PUBLISH` | Plot flere eller alle ark til én PDF (en side og et bogmærke pr. ark) |
| `PURGE` | `PU` | Fjern blokdefinitioner som intet bruger |
| `QDIM` | | Hurtig målsætning: målsæt flere objekter på én gang (kontinuerlig, grundlinje, forskudt, ordinat, radius eller diameter) |
| `QPMODE` | `QP` | Hurtige egenskaber ved markøren til eller fra |
| `QSELECT` | `QS` | Hurtigvalg: hver objekttype hvis lag, farve, størrelse eller navn passer (QS) |
| `RASTERSNAP` | | Slå fangning til linjerne i scannede ark til eller fra. |
| `RAY` | | Stråle: en konstruktionslinje fra et punkt, uendelig i én retning. |
| `RECOVER` | | Åbner en beskadiget DXF eller DWG: springer over det der ikke kan læses i stedet for at afvise filen, siger hvad der blev sprunget over, og kontrollerer og reparerer derefter tegningen som AUDIT gør. |
| `RECTANG` | `REC`, `RECTANGLE` | En lukket polylinje ud fra to hjørner |
| `REDLINE` | `RDL` | Rødt rids til revision: læs en MarkupCraft-rødtpakke, accepter eller afvis hver ændring, sky de accepterede med en revisionslog, og gem svarfilen (RDL) |
| `REDO` | | Gentag det der blev fortrudt |
| `REFCLOSE` | | Afslut redigering af en blok på stedet: gem den, eller kassér ændringerne |
| `REFEDIT` | | Redigér en blok på stedet, hvor en reference til den sidder, med resten af tegningen falmet; REFCLOSE gemmer den |
| `REGEN` | `RE` | Genopbyg det der tegnes på denne fane fra tegningen |
| `REGENALL` | `REA` | Genopbyg det der tegnes på hver fane, rude og åben tegning |
| `REGION` | `REG` | REGION (REG): lav flade områder (regioner) af lukkede objekter, eller af linjer, buer og polylinjer der lukker en løkke ende mod ende. UNION, SUBTRACT og INTERSECT kombinerer så regioner, og MASSPROP giver deres tværsnitsegenskaber. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registrér flere scanninger: placér dem i én ramme ud fra valgte punktpar eller mål, forfin med ICP, eksportér én LAS- eller E57-fil |
| `REINIT` | | Indlæs din aliasfil igen |
| `RENAME` | `-RENAME`, `REN` | Omdøb et lag eller en blok (hvert objekt eller reference følger med) |
| `REVCLOUD` | `RC` | Revisionssky: afrund et rektangel, en polygon, en frihåndssti eller et objekt (RC) |
| `REVOLVE` | `REV` | Drej lukkede 2D-objekter om en akse til legemer (3D) |
| `ROTATE` | `RO` | Roter objekter om et basispunkt |
| `SAMPLES` | `SAMPLE` | Åbn en af CadCrafts prøvetegninger (et arkitektsæt, et som-bygget) at lære af |
| `SAVE` | `QSAVE` | Download tegningen i dens format (DWG eller DXF) |
| `SAVEAS` | | Download tegningen som DWG eller DXF: vælg hvilken |
| `SAYSEL` | | Sig hvad der er valgt, én sætning pr. objekt. |
| `SCALE` | `SC` | Skalér objekter om et basispunkt |
| `SCALELISTEDIT` | `SCALELIST` | Tilføj, redigér og slet tegningens egne skalaer; de vises i viewport- og plotskalalisterne og gemmes i filen (SCALELIST) |
| `SCANALIGN` | `SCL` | Justér et scannet ark til to punkter: flyt, drej og, hvis du vælger, skalér det. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Indsæt en scannet tegning: en PNG, JPEG eller TIFF (én side eller alle sider i en flersidet fil) eller en PDF-side der er et billede. |
| `SCANCLEAN` | `SCC` | Gør et scannet ark sort-hvidt og fjern pletter. |
| `SCANCROP` | `SCR` | Beskær et scannet ark til et vindue. |
| `SCANDESKEW` | `SCD` | Find vinklen et scannet arks lange linjer ligger i, og drej arket lige når du accepterer vinklen. |
| `SCANERASE` | `SCE` | Slet et område af et scannet ark: et rektangel, en polygon eller et lasso. |
| `SCANINFO` | `SCI` | Vis et scannet arks oprindelige fil og de trin der er taget siden. |
| `SCANSCALE` | `SCS` | Skalér et scannet ark: vælg to punkter på det og skriv den rigtige afstand mellem dem. |
| `SCANTRACE` | `SCT` | Spor et scannet ark til linjer og buer på et nyt lag, til en tolerance du angiver. Tekst og skravering forbliver som raster. |
| `SELECT` | | Vælg objekter nu (for P, Forrige, i den næste kommando) |
| `SELECTALL` | `AI_SELALL` | Vælg hvert objekt du kan redigere på denne fane (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Vælg hvert objekt som dem du peger på: samme type, lag og farve (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Viser panelet Arksæt: ark fra mange tegninger, nummereret, udgivet som én PDF. |
| `SHORTCUTS` | `KEYS` | Giv en hvilken som helst kommando en tast af din egen (Ctrl eller Alt med et bogstav, eller en ledig funktionstast), gemt i denne browser eller desktop-appen. |
| `SHXFONTS` | `SHX` | Giv CadCraft SHX-skrifttyper fra en mappe eller filer, så tekststile der nævner dem tegnes i dem (liste, fjern, vend) |
| `SKETCHFIX` | `SKF` | Tegn frihåndsstreger; hver bliver til en ren linje, cirkel, bue, rektangel eller polylinje, rettet op og forbundet med de andre. |
| `SKETCHLIVE` | `SKL` | Skitsér med en pen: hver streg bliver til en præcis linje, cirkel, bue eller rektangel når du løfter pennen, fanget til tegningen, med sin størrelse at skrive over. |
| `SPLINE` | `SPL` | Tegn en spline gennem punkter (eller med en kontrolpolygon), eller gør en polylinje til en |
| `SPLINEDIT` | `SPE` | Redigér en spline: tilpas punkter, kontrolpunkter og vægte, åbn eller luk den, vend den, eller konvertér den til en polylinje |
| `SPLIT` | | Del tegneområdet i ruder (som VPORTS på modellen; også fra et ark) |
| `STEELMEMBER` | `SMEMBER` | Et stålprofil i 3D ud fra en standardprofil: to punkter (en bjælke) eller et basispunkt og en højde (Søjle) |
| `STLOUT` | | Eksportér 3D-modellen som STL (millimeter) |
| `STRETCH` | `S` | Stræk: træk et krydsvindue over enderne for at flytte; det der er indeni flytter sig, resten bliver (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Tekststile: skrifttypen, højden, bredden og hældningen ny tekst får (dialogen; -STYLE på kommandolinjen) |
| `SUBTRACT` | `SU` | Tag legemer fra andre (3D), eller 2D-regioner fra regioner |
| `SWBOUT` | `SWMACRO` | Download en makro til SolidWorks (.swb) der genopbygger modellen som én begrænset skitse |
| `SWEEP` | | Sweep lukkede 2D-objekter langs en sti (linje, polylinje, bue, cirkel) til legemer (3D) |
| `TABLE` | `TB` | Lav en tabel: rækker og kolonner, eller fra regnearksceller på udklipsholderen eller en CSV-fil |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Redigér en tabel: skriv i en celle, indsæt og slet rækker og kolonner, størrelser, sammenlagte celler, justering |
| `TABLEEXPORT` | | Gem det en tabel viser som en CSV-fil |
| `TABLEPASTE` | `PASTETABLE` | Lav en tabel af regnearksceller på udklipsholderen |
| `TABLESTYLE` | `TS` | Tabelstile: teksthøjder, justering, margen og kanter for titel-, overskrifts- og datarækker |
| `TAGS` | | Mærker på blokreferencer: definér et mærke (slags, tilladte værdier, blokke det gælder), sæt det på de valgte referencer, og list dem som et skema du kan gemme som CSV |
| `TEXT` | `DT`, `DTEXT` | Enlinjet tekst; Enter starter næste linje |
| `TEXTEDIT` | `ED`, `DDEDIT` | Redigér tekst på stedet: vælg en tekst (eller dobbeltklik på en) (ED) |
| `TEXTMASK` | `TMASK` | Læg en baggrundsmaske bag teksten (tegningens baggrund eller en farve), eller fjern den. |
| `TEXTTOFRONT` | | Før al tekst, målsætninger og henvisninger foran alt andet. |
| `TOOLBAR` | | Vælg hvad værktøjslinjens knapper viser: ikoner og tekst, kun ikoner, eller kun tekst (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Sæt værktøjslinjen øverst, nederst, til venstre eller højre i vinduet |
| `TOOLBARROWS` | | Vælg hvor mange rækker værktøjslinjen bruger: pak til at passe, 2 eller 1 (Shift+Ctrl+F1) |
| `TOPAREA` | | Gør linjerne over tegningen standard eller kompakte |
| `TOUCHCROSSHAIR` | `TCX` | Forskudt markørkors til tegning med en finger: én finger flytter et markørkors der sidder over og ved siden af den, så fingeren ikke dækker valgpunktet. At løfte fingeren vælger intet; knappen Klik eller et tryk med en anden finger vælger ved markørkorset, og at holde Klik nede mens du flytter trækker. Et langt tryk eller knappen Enter er Enter. To fingre panorerer og zoomer. Valgmuligheder: TIL, FRA, Auto (kun hvor en finger er den eneste markør), Afstand, Side. |
| `TOUR` | `TUTORIAL` | Tag den seks-trins rundvisning i første tegning igen |
| `TRIM` | `TR` | Beskær objekter tilbage til hvor andre krydser dem: klik på et stykke, træk gennem flere, eller Shift+klik for at forlænge |
| `TRIMEXTENDMODE` | | Hvordan TRIM og EXTEND starter: 1 Hurtig (hvert objekt er en skærekant eller grænse), 0 Standard (vælg kanterne først) |
| `TTR` | | En cirkel tangent til to objekter, med en radius du angiver (samme som CIRCLE T). |
| `TURNLEFT` | | Drej visningen 90° til venstre (mod uret): UCS Z -90, og visningen følger. Intet i tegningen flytter sig. |
| `TURNRIGHT` | | Drej visningen 90° til højre (med uret): UCS Z 90, og visningen følger. Intet i tegningen flytter sig. |
| `TURNWORLD` | | Tilbage til verden: UCS Verden, og visningen er vandret igen. |
| `TXT2MTXT` | `T2M` | Samler enlinjede tekster til én afsnitstekst, øverst til nederst. |
| `UCS` | | Dit eget koordinatsystem: en oprindelse og en X-akse (oprindelse, Z-vinkel, 3punkt, OBjekt, Forrige, Verden, NAvngivet). Punkter du skriver, ortogonal, polar sporing, gitteret og ny tekst følger det; visningen drejer, så dens X-akse er vandret. Intet i tegningen flytter sig. |
| `UNDO` | `U` | Fortryd den sidste kommando |
| `UNGROUP` | | UNGROUP: tag grupper fra hinanden. Vælg objekter i grupperne, eller angiv et Navn. Objekterne bliver i tegningen. |
| `UNION` | `UNI` | Sammenføj legemer til ét (3D), eller 2D-regioner til én region |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Vis hvert objekt skjult af ISOLATEOBJECTS eller HIDEOBJECTS igen. |
| `UNITS` | `UN`, `DDUNITS` | Hvordan længder vises og skrives: decimal, fod og tommer, brøker (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Beregn felterne igen, og vælg hvornår de opdaterer sig selv |
| `USDOUT` | | Eksportér 3D-modellen som USD (.usda tekst, .usdc binær eller en .usdz-pakke) |
| `VIEW` | `-VIEW`, `V` | Standard 3D-visninger, perspektiv eller parallel (3D) |
| `VIEWBASE` | `FLATSHOT` | Placér en flad 2D-visning af 3D-legemerne (forfra, oppefra, fra siden eller isometrisk, skjulte linjer stiplet) på et ark eller i modellen |
| `VIEWLABEL` | `VL` | En visningstitel på et ark der viser sin viewports visningsnavn, og ændrer sig med den. |
| `VOICE` | | Slå talte kommandoer til eller fra. De genkendes på denne computer. |
| `VPCLIP` | | Klipper en arkviewport til et lukket objekt eller en tegnet polygon; Slet gør den til et rektangel igen |
| `VPLAYER` | | Frys eller tø lag op i nogle viewports kun (Frys, Tø op, Nulstil), og vælg hvilke lag nye viewports starter frosne (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Del tegneområdet i ruder, hver med sin egen visning (på et ark: en viewport, som MVIEW) |
| `VPVIEW` | | Angiv hvad en viewport viser: vælg et vindue på modellen |
| `VSCURRENT` | `VS`, `SHADEMODE` | Visuel stil for 3D-visningen: skygget, kanter, skjult linje, trådmodel, røntgen |
| `WALL` | `WA` | Tegn 2D-vægge som en polylinje. De forbindes og bærer døre og vinduer. |
| `WALLARC` | `WARC` | Tegn en bue af vægge. Plan-vægge er lige, så buen tegnes som korte lige vægge (15 grader hver) der forbindes. |
| `WALLDELSEG` | | Slet et stykke af en væg mellem to punkter. Det der er tilbage bliver ved én eller to vægge. |
| `WALLDIM` | | Skriv en ny værdi for en målsætning: væggen i dens fjerne ende flytter sig vinkelret på sig selv, væggen i den første ende holder, og de vægge der er forbundet med den følger. |
| `WALLDISJOIN` | | Vælg en væg nær den ene ende for at forbyde sammenføjninger i den ende: enden tegnes lige og intet følger den. Vælg den igen for at tillade dem. |
| `WALLGRID` | | Lås en væg til en gitterlinje: langs den, eller med den ene ende på den. Flyt linjen med GRIDMOVE og væggen følger. |
| `WALLHOLD` | | Justér og lås: en væg holder sin plads i forhold til en anden væg (på dens linje, eller i den afstand den har). Hvis den ene flytter sig, følger den anden. |
| `WALLHOLDDIM` | | Lås afstanden mellem to parallelle vægge. Hvis den ene flytter sig, følger den anden for at holde den. |
| `WALLHOLDS` | | List låsene på væggene. |
| `WALLJOINS` | | Giv hver væg i en ældre tegning sit id og gem sammenføjningerne mellem dem. Dette sker også ved den første ændring du laver. |
| `WALLJOINSTYLE` | | Klik på et hjørne hvor to vægge mødes ende mod ende for at ændre hvordan det tegnes: gering, flad, afskåret. T skifter hvilken væg der løber igennem. |
| `WALLOFFSET` | `WO` | Flyt en væg vinkelret på sig selv med en afstand (de vægge der er forbundet med den følger), eller lav en kopi i den afstand. |
| `WALLPICK` | | Lav vægge på en linje eller polylinje i tegningen, med linjerne forbundet med den hvis du svarer Ja. |
| `WALLPOLY` | `WP` | Tegn vægge rundt om en regulær polygon med 3 til 64 sider, ligesom POLYGON. |
| `WALLRECT` | `WR` | Tegn fire forbundne vægge ud fra to modsatte hjørner, ligesom RECTANG. |
| `WALLREJOIN` | | Gør to dele af en væg til én væg igen. Den første beholder sin plads i tegningen. |
| `WALLROT` | | Tegn fire forbundne vægge som et rektangel drejet i en vilkårlig vinkel: den første side, og derefter hvor langt ud den anden side går. |
| `WALLSPLIT` | `WS` | Del en væg i to ved et punkt eller der hvor en anden væg krydser. Delene forbliver forbundet, medmindre du beder om et mellemrum eller frie ender. Døre og vinduer følger deres del. |
| `WALLSPLITGAP` | | Del en væg og efterlad et mellemrum: skriv mellemrummet, vælg væggen, derefter punktet. Delene beholder frie ender og kan forbindes igen. |
| `WALLSTRETCH` | | Stræk med et vindue: vægenderne inde i det flytter sig, vægge helt inde flytter sig hele, og vægge der støder ind i deres sider glider med dem. |
| `WALLTAN` | | Fortsæt en væg med en bue der forlader den langs væggen (tegnet som korte lige vægge). |
| `WALLTRACE` | | Lav vægge rundt om det mindste lukkede område af linjer og vægge omkring punktet du klikker på. |
| `WALLUNHOLD` | | Tag låsene af en væg (og låsene af andre vægge til den). |
| `WBLOCK` | `W`, `-WBLOCK` | Skriv en blok, nogle objekter eller hele tegningen til en ny DWG- eller DXF-fil (W) |
| `WEDGE` | `WE` | En kile: to hjørner og en højde; den skråner væk fra det første hjørne (3D) |
| `WHEREAMI` | `WHERE` | Sig hvor markøren er. |
| `WHOHAS` | | Siger hvem der har en tegning åben. CadCraft Studio beholder en lille låsefil ved siden af hver åben tegning (Plan.dwg.cclock: hvem, siden hvornår, hvilken version) og fjerner den ved lukning. Valgmuligheder: Aktuel (den åbne tegning), Fil (vælg en), Mappe (hver tegning i en mappe der er åben et sted; dette lader også Studio beholde låsefiler i mappen), Sti (skriv en), Navn (det navn andre ser). En lås der ikke er opdateret i fem minutter siges at være forældet. Ikke tilgængelig i en browser. |
| `WINDOW` | `WN` | Sæt et vindue i en væg. |
| `XATTACH` | `XA` | Forbind en anden DWG eller DXF til denne tegning, vist skrivebeskyttet (XREF lister og indlæser dem igen) |
| `XCLIP` | `XC` | Klip blokreferencer og tilknyttede tegninger til et rektangel eller en polygon, eller fjern udklippet. |
| `XLINE` | `XL` | Konstruktionslinje, uendelig i begge retninger: gennem to punkter, vandret, lodret, i en vinkel, halvering af en vinkel, eller forskudt fra en linje. |
| `XREF` | `XR`, `-XREF` | Tilknyttede tegninger (eksterne referencer): list, vedhæft, genindlæs, bind, frakobl |
| `ZOOM` | `Z` | Udstrækning, eller et vindue |
