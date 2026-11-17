---
title: Ikke lavet endnu
summary: Hvad denne version af CadCraft-tegneappen endnu ikke gør, og hvad du gør i stedet i dag.
keywords: mangler, begrænsninger, ctb, stb, plotstil, egenskaber, ucs, annotativ, dynamisk blok, spline, køreplan, ikke understøttet, dwg-gem, skravering, stræk, array, sammenføj, matchprop, bryd, forlæng længde, linjetype, linjetykkelse, xref, sky, 3d, legemer, boolske operationer, flere henvisningslinjer, afdækning
from: 87e56521
---

CadCraft er under udvikling. Denne side viser, hvad den nuværende version ikke gør, så du ikke skal lede efter det. Hvert punkt siger, hvad du gør i stedet i dag.

## Filer og gemning

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| En CadCraft-DWG åbnet og kontrolleret i selve AutoCAD | Hver gemt version læses tilbage af tre andre programmers DWG-læsere og af CadCraft. Se [Hvad en DWG bevarer og ændrer](topic:files#what-a-dwg-keeps-and-changes). |
| Gemning af DXF nyere end 2000 | Gem som DXF 2000, eller som DWG op til AutoCAD 2018. |
| Gemning over den åbnede fil i browseren | Hver gemning downloader en ny kopi; erstat selv den gamle fil, hvis du vil. I CadCraft Studio skriver {{key:Mod+S}} tilbage til den fil, du åbnede. |
| Skysikkerhedskopiering og synkronisering mellem computere | CadCraft sender endnu ikke dine gemninger til skyen: gem dine DWG- og DXF-filer i dine egne mapper. I CadCraft Studio viser [Historik](topic:history) skyversionerne af en tegning, der er gemt andetsteds, og kopier af dine egne gemninger på denne computer. |
| Overlejringer (overlays), og redigering af en tilknyttet tegning på stedet | Vedhæft tegningen som en reference og genindlæs den efter at have ændret den anden tegning. En reference forbliver en reference, når du gemmer som DWG, og {{cmd:XCLIP}} klipper den. |
| Billeder i DXF; afdækninger, der skjuler det under dem | DXF bevarer et billede som dets ramme med filnavnet; DWG bevarer det som et billede — se [Billeder i en tegning](topic:pictures). En afdækning vises som sin ramme. |
| Redigering af flere henvisningslinjer med buede henvisningslinjer, med henvisningslinjer på begge sider af indholdet eller med en blok, der er drejet eller skaleret ujævnt | De tegnes, som det andet program tegnede dem, og flyttes som én. Flere henvisningslinjer med lige henvisningslinjer til ét landingspunkt og tekst eller en blok som indhold kan redigeres ({{cmd:MLEADEREDIT}}). |
| I tabeller fra andre programmer: en celle med en blok, tekstformatering i en celle, celle-kanter og farver for hver celle i en DXF-tabel, en tabel opdelt i kolonner | Tabellen åbnes som en redigerbar tabel ({{cmd:TABLEDIT}}) og vises, som det andet program tegnede den, indtil du redigerer den; derefter tegner CadCraft den igen fra dens celler: ren tekst, formler som `=G3*H3` og `=Sum(I3:I9)`, justering og teksthøjder. En blokcelle er så tom. En urørt DWG-tabel gemmes tilbage med de celledata, den kom med. |
| Et rigtigt tabelobjekt i en gemt DXF | En DWG bevarer en tabel som en tabel, andre programmer kan redigere. En DXF bevarer den som blokken, der tegner den, med CadCraft's egen registrering: CadCraft åbner den igen som en tabel; andre programmer ser en blok. En spejlet eller ujævnt skaleret tabel gemmes sådan i en DWG også. |
| Kopiér og sæt ind med andre programmer | CadCraft's udklipsholder virker mellem CadCraft-tegninger og faner i samme browser, ikke med andre programmer. Gem som DWG eller DXF og åbn den der. Se [Kopiér, sæt ind og duplikér](topic:copy-paste). |

## Tegning og redigering

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Skraveringsmønstre CadCraft ikke har, og farveforløb præcis som andre programmer males dem | Åbnede skraveringer med mønstre, CadCraft ikke har, vises som en tone. Et farveforløb ({{cmd:GRADIENT}}) males på CadCraft's egen måde for hver type: ligesom andre programmers i art, ikke punkt for punkt. DWG 2004 og nyere bevarer det som en rigtig farveforløbsskravering; i en DXF 2000- eller DWG 2000-fil læser kun CadCraft det tilbage, og andre programmer ser en massiv udfyldning. Mønstre indlæses fra en `.pat`-fil, og en skravering kan knyttes til sin kant og følger den derefter: se [Skravering og udfyldningsområder](topic:hatch). |
| Linjetyper med figurer eller tekst i sig, og linjetykkelser i en gemt DXF R12 | Figurer og tekst i en fils linjetype udelades fra dens streger; gem som DWG for at bevare linjetykkelser. |
| Mønstrede skraveringer i en gemt DXF | R12 har ingen skravering: de gemmes som deres konturer. Gem som DWG for at bevare mønstret. |
| Arrays, som et andet program har lavet eller kan redigere; rækker og niveauer i sti- og polære arrays; et array, der følger sin stikurve | Et array lavet med associativ ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; ændres med {{cmd:ARRAYEDIT}}) gemmes som en blokreference med CadCraft's egne tal: andre programmer viser, flytter, plotter og eksploderer det, men kan ikke ændre dets antal, og et array lavet i et andet program åbnes her som en almindelig blokreference. Et stiarray beholder en kopi af sin sti: at redigere kurven bagefter flytter ikke elementerne. |
| Klippede papirviewports til og fra andre programmer | En viewport klippet med {{cmd:VPCLIP}} eller lavet med {{cmd:MVIEW}} Polygonal eller Object gemmes med CadCraft's egen kontur: andre programmer åbner den som rektanglet omkring den, og en viewport klippet i et andet program åbnes her som sit rektangel. DXF R12 bevarer kun rektanglet. |
| {{cmd:STRETCH}} med en krydspolygon | Brug et eller flere krydsvinduer. |
| {{cmd:PEDIT}} Rediger hjørne (ét hjørne ad gangen på kommandolinjen) | Greb og hjørnebrowseren i Egenskaber (alle hjørner, deres bredder og buk (bulge)). Resten af PEDIT er lavet: se [Splines og polylinjer](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} og {{cmd:JOIN}} på ellipser og splines | {{cmd:EXPLODE}} en spline (eller {{cmd:PEDIT}} den) for at få en polylinje, disse kommandoer kan bruge. |
| Afrunding og affasning mellem et buesegment i en polylinje og segmentet ved siden af; afrunding der samler en linje til en polylinje | {{cmd:EXPLODE}} polylinjen, og afrund derefter stykkerne. Afrundingsbuen tilføjes som sit eget objekt. |
| Beskær og forlæng: Projekt-valget (3D) og forlængelse af en polylinjes buende | Beskær i tegningens plan; for en buende, eksplodér polylinjen eller tegn buen igen. |
| OLE-objekter: indsætning, kørsel eller redigering; visning af dem i en DWG, hvor filen placerer dem; metafil-billeder | Se [Billeder](topic:pictures#objects-from-other-programs-ole). En DXF's objekter vises som deres bitmap eller en mærket ramme; en DWG's bevares, men tegnes ikke på stedet ({{cmd:OLELIST}} lister dem og placerer en kopi af et billede, hvor du siger). |
| Indtastning af formateringskoder (fed, stablede brøker, farver pr. ord) i afsnitstekst; skrifttyper ud over den ene Helvetica-agtige skrifttype; kolonner | Formatering, der kom med i en fil, bevares, tegnes og gemmes (se Tekst); ny afsnitstekst har én højde og farve. |
| Afsnitstekst redigeret i sin rotation | Editoren åbnes vandret; teksten beholder sin rotation. |
| Flere henvisningslinjer gemt som flere henvisningslinjer-objekter i en DXF | En DWG bevarer dem som flere henvisningslinjer med hver henvisningslinje og en blok som indhold; en DXF bevarer det, de tegner (linjer, pilespidser og teksten eller blokken). |
| I tabeller ({{cmd:TABLE}}): tekst, der bryder inde i en celle, tabeller der deles i dele, en tabelstils egen tekststil og farver pr. rækketype i en dialog, en datalink til en regnearksfil (`.xlsx`) eller en, der læser filen selv | En celles tekst brydes kun hvor du bryder den ({{key:Alt+Enter}}); gør kolonnen bredere. {{cmd:DATALINK}} læser en `.csv`-fil, og {{cmd:DATALINKUPDATE}} beder dig vælge filen igen. {{cmd:DATAEXTRACTION}} og {{cmd:COUNTTABLE}} laver en tabel, der ikke følger tegningen af sig selv: kør dem igen (en levende optælling: {{cmd:BOMTABLE}}). |
| Attributdefinitioner gemt for sig selv i en gemt fil (uden for en blok), attributter med flere linjer | Læg attributdefinitioner i en blok før gemning: alene gemmes de som tekst, der viser tagget. |
| Lagtilstande (gemning og gendannelse af hvilke lag der er tændt) | Brug {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, eller tænd og sluk lag i hånden. |
| Valg af vinduespolygon og krydspolygon, og gemte valgfiltre | Hegn (`F`), Vindue, Kryds, Fjern (`R`), {{cmd:QSELECT}} for en regel. |


## Panelet Egenskaber

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Tegning af Fit-valgene, og den vandrette tekstposition og tekst under linjen på målsætninger andet end lineære og justerede | De bevares på objektet, vises i Egenskaber og gemmes; CadCraft placerer teksten efter sin egen regel. |
| Materialer, som andre programmer ser | En gemt fil bevarer materialenavnet for CadCraft; andre programmer viser lagets materiale. |
| Gennemsigtighed i DWG 2000- og DXF-filer | Andre programmer viser disse objekter massive; CadCraft bevarer gennemsigtigheden. Gem som DWG 2004 eller nyere for alle. |
| En skraverings-reference lavet i et andet program | CadCraft gemmer sin egen reference i DWG- og DXF 2000-filer; referencer lavet i andre programmer læses ikke. Brug `HATCHEDIT` og Link: se [Skravering og udfyldningsområder](topic:hatch). |
| Koordinater i Egenskaber i UCS | Egenskaber viser verdenskoordinater; statuslinjen og {{cmd:ID}} viser UCS-koordinater. Se [Drej visningen og brug dine egne koordinater](topic:ucs-and-turned-view). |
| En særskilt position for et annotativt objekt i hver af dets skalaer; læsning af de skala-poster, andre programmer bevarer | En annotativ tekst eller målsætning har en liste over skalaer ({{cmd:OBJECTSCALE}}), og hver viewport viser den i størrelsen for sin skala, på samme sted. Listen gemmes som CadCraft's egne data: et andet program ser objektet i den ene skala, det er dimensioneret til, og en liste lavet i et andet program læses ikke. Se [Enheder, papirer og skalaer](topic:units-papers-scales#annotate-by-scale). |
| Ændring af en dynamisk blok's afstande, vinkler eller spejlinger; dynamiske blokke, der bevares dynamiske, når du gemmer i en anden DWG-version eller som DXF | Skift dens synlighedstilstand i Egenskaber › {{ui:Brugerdefineret}}; dens andre værdier vises der kun til læsning. Den forbliver dynamisk, når du gemmer den som DWG i den version, tegningen kom i. Se [Dynamiske blokke](topic:dynamic-blocks). |
| Spline-tilpasningstolerance, spline-grad 6 og højere, 3D-splines | Tilpasnings- og kontrolpunkter, grad 1 til 5 og vægte er lavet: se [Splines og polylinjer](topic:splines). En splines højde (Z) bevares ikke. |
## Præcisionshjælpemidler

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Sporing fra punkter på tværs af kommandoer og dialogen for sporingsindstillinger (relative polære vinkler, ekstra vinkler) | {{cmd:POLARANG}} sætter trinnet; hent punkterne igen i næste kommando. |
| Fang til gitter | Skriv koordinater; gitteret er kun en visuel vejledning. |
| Bue- og Længde-valg, når du vælger et områdes hjørner, og MEASUREGEOM Volume | Tegn konturen med {{cmd:PLINE}} (inkl. buer), og derefter {{cmd:AREA}} `O`. |
| Dynamisk input til greb og dens valgliste (pilen ned) | Kommandolinjen viser valgene. |
| Vinkler i grader-minutter-sekunder, gon eller landmålerens retninger | Skriv decimalgrader: `30.5` for 30°30'. |
| En visningsadministrator-dialog; navngivne visninger af et ark, der vender tilbage på det ark | {{cmd:NAMEDVIEW}} lister og gendanner visninger. En gemt fil bevarer dem, men et arks visninger vender tilbage på det første ark. |

## Ark, målsætninger og plot

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Felter for en viewports skala, et navngivet objekt såsom et lag eller en blok, et hyperlink og arksæt-felter ud over arkets nummer og navn; felter skrevet som feltobjekter, som andre programmer opdaterer | {{cmd:FIELD}} har datoen, filnavnet, arknummeret, navn og antal, tegningens egenskaber ({{cmd:DWGPROPS}}), et objekts areal, længde og andre egenskaber samt formler, i tekst, attributter og tabelceller. Et andet program viser et CadCraft-felt som den tekst, det sidst læste; CadCraft læser et andet programs dato-, filnavn-, egenskabs-, ark- og udtryksfelter og lader de andre slags stå som tekst. En viewports skala skrives i hånden. |
| Gemning af hvilken målsætningsstil der er aktuel; målsætningstekst trukket til et frit sted | En tegning åbnes med Standard aktuel. Teksten sidder på målelinjen (DIMTEDIT Left / Right / Center). Se [Angiv målsætningsstørrelser](topic:dimension-settings). |
| Redigerbare to-linjede vinkelmålsætninger fra åbnede filer, som CadCraft ikke kan regne ud | De vises som tegnet i filen. Ordinat-, buelængde- og knækkede radiusmålsætninger åbnes som målsætninger, du kan redigere. |
| Kontrol af CTB-læseren mod en fil fra et andet program (den er lavet ud fra den publicerede beskrivelse), navngivne plotstile (STB), dithering, pennumre, gråtoner fra en CTB og adaptiv justering af linjetyper i en plotstil | Lav tabellen i {{ui:Plotstiltabeller}} (farve, gråtone, blæk, linjetykkelse, linjetype, linjeende og -forbindelse og udfyldningsstil pr. farve): se [Plotstiltabeller](topic:plot-pdf#plot-style-tables). |
| Sideopsætninger | Vælg papir, skala og plotstil i dialogen {{ui:Plot til PDF}}; et ark bevarer sin plotstil. |
| Hindi og andre skrifter, der kræver kompleks skrivning i PDF'er, og sjældne ideografer (europæiske skrifter, kyrillisk, græsk, hebraisk, arabisk, persisk, urdu, thai, kinesisk, japansk og koreansk tryk) | De udskrives som "?". |
| Arabisk-skriftsprog og kinesisk, japansk eller koreansk tekst i samme plottede PDF | Et plot bærer én skrifttype: en af de to skrifter udskrives som "?". |
| Eksplicitte retningsmarkører i tekst (indlejringer, overskrivninger, isolater) | De ignoreres: hver linje ordnes kun efter sine bogstaver. |
| Billeder inde i en vedhæftet PDF-side, i et plot | Sidens linjer, udfyldninger og tekst udskrives. En side, der kun er et billede, indlæses med {{cmd:SCANATTACH}}, og billeder udskrives. Se [PDF-underlag](topic:pdf-underlay#plot-and-save). |
| At sende et job til en laser fra CadCraft Studio (Studio har ingen Web Serial) | Gem G-koden og send den med din lasers eget program, eller send den fra Chrome eller Edge. Se [Send en tegning til en laser](topic:laser-cutting#send-from-the-browser). |

## Begrænsninger og parametre

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Begrænsninger på ark, i blokke, på ellipser, splines eller tekst | Begræns på fanen {{ui:Model}}, på linjer, polylinjer, cirkler, buer og punkter. |
| Glat (G2), og direkte begrænsning af en polylinjes bue-bulge | Tangent og lig med; et buesegment følger sine to ender. |
| Referencemålsætnings-begrænsninger (drevne), og `3Point` i {{cmd:DCANGULAR}} | En almindelig målsætning (DIMLINEAR …) viser en værdi uden at styre den. |
| Målsætnings-begrænsninger af fast størrelse på papir, og plotning af dem | De vises kun på skærmen; tilføj almindelige målsætninger til plottet. |
| Begrænsninger bevaret gennem EXPLODE, BREAK, JOIN og andre kommandoer, der laver nye objekter, og på beskårne polylinjer | Begræns dem igen (AUTOCONSTRAIN hjælper). {{cmd:MIRROR}} og {{cmd:TRIM}} af linjer, buer og cirkler bevarer dem. |
| Designtabeller (konfigurationer) i CadCraft | Ændr parametre i panelet. |
| En testet tur-retur med SolidWorks | Kontrollér skitsen, som makroen bygger, før du stoler på den. |

## 3D

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Afrundinger, affasninger, skaller og lofter; sweeps langs en sti, der stiger (3D-stier) | Ekstrudér konturer med buer, skub og træk flader, drej og sweep langs flade stier. |
| Ekstrudering i en anden retning end op | Tegn formen på jorden og ekstrudér den op eller ned (med en skråning eller langs en sti, hvis du vil); drej legemet bagefter. |
| Kote og tykkelse af 2D-objekter | Tegningen ligger på jorden (højde 0) på 3D-fanen. |
| Redigering af legemer, områder og legemer fra andre programmer; visning af dem inde i blokke; deres flader på sweep-, loft- eller andre frie overflader; polyflade- og polygonnet | Modelrum-legemer vises på 3D-fanen, som de er, og gemmes tilbage uændret i DWG; det, der ikke tegnes, listes, når 3D-fanen åbnes. Bed om net som 3D-flader i modelrummet. Se [Legemer fra andre programmer](topic:3d-solids#solids-from-other-programs). |
| Kopiering og indsætning af legemer | På 3D-fanen brug {{cmd:COPY}}. Udklipsholderen indeholder kun 2D-objekter. |
| Snit, visninger der følger senere ændringer i legemerne, og skyggede legemer på plottede ark | {{cmd:VIEWBASE}} placerer flade visninger (et øjebliksbillede); kør den igen, efter at have ændret legemerne. |
| Materialer, teksturer og belysningsindstillinger | De visuelle stile: skygget, kanter, skjult linje, trådmodel, røntgen. |
| Kortlag plottet, på ark-viewports og på 3D-fanen; billeder fra filer gemt med tegningen; en tegnings placering skrevet til andre programmer i DWG 2000–2007 og DXF R12 | Kortlag vises under modelrummet på skærmen; systemet og lagslisten gemmes med tegningen: se [Kortlag under tegningen](topic:map-layers). |
| E57-scanninger over 6 millioner punkter eller 512 MB, scanningsproducenters egne filer (RCP, RCS, FLS, LGS, TZF, ZFS), en punktsky gemt med tegningen eller plottet, snapping til en sky på 3D-fanen, lodrette (snit) udsnit på fanen Model | Eksportér store eller producentens egne scanninger som LAS eller LAZ ([Punktsky-formater](topic:point-cloud-formats)); vedhæft skyen hver gang du åbner tegningen; følg som-bygget-linjer fra et planudsnit på fanen Model: se [Tegn som-bygget-linjer over en punktsky](topic:point-clouds). |
| Registrering af scanninger: finde mål (kugler, skakbrætter) i en scanning af sig selv, løse alle scanninger samlet (bundtjustering), skala, registrering mod en model | Vælg matchende punkter eller skriv målkoordinater, og forfin derefter én scanning ad gangen med ICP: se [Registrer flere scanninger til én](topic:register-scans). |

## Rutiner og tilpasning

| Ikke lavet endnu | I stedet, i dag |
|---|---|
| Kompileret eller beskyttet LISP (.fas, .vlx), native programmer (.arx, .crx, .dbx) og VBA (.dvb) | Indlæs en rutines .lsp-kilde med {{cmd:APPLOAD}}. |
| LISP's `grread`, reaktorer (`vlr-…`), kurvefunktioner (`vlax-curve-…`), ordbøger og udvidede data, Express Tools' `acet-…` | Resten af sproget virker: se [Kør LISP-rutiner](topic:run-lisp). Kommandolinjen nævner en manglende funktion, når en rutine når til en. |
| Billeder og slides i en rutines dialog | De vises som tomme rammer; resten af dialogen virker. |
| CraftScript (.craft), Lua og Python i CadCraft | Kør dem i PartCraft's Script-arbejdsområde. |
| Lag-, farve- og linjetypelister i båndmenustile | Brug panelet {{ui:Lag}} og {{ui:Egenskaber}}. |
| Startup Suite og aliaser gemt på din computer eller synkroniseret | De gemmes i denne browser; desktop-appen og skytjenesten vil gemme dem for dig. I Studio læses `acad.lsp` og `acaddoc.lsp` fra en supportmappe, du vælger (Indlæs programmer). |

## Hjælp

Hjælpen beskriver denne version. Når noget tilføjes, flytter det ud af denne side og over i trin-for-trin-guiderne.
