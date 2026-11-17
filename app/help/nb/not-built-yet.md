---
title: Ikke bygget ennå
summary: Hva denne versjonen av CadCraft-tegneappen ikke gjør ennå, og hva du gjør i stedet i dag.
keywords: mangler, begrensninger, ctb, stb, plottestil, egenskaper, ucs, annoterende, dynamisk blokk, spline, veikart, ikke støttet, lagre dwg, skravur, strekk, matrise, slå sammen, matchprop, bryt, forleng, linjetype, linjevekt, xref, sky, 3d, volumlegemer, boolske operasjoner, flerhjelpelinje, maskering
from: 87e56521
---

CadCraft er under utvikling. Denne siden lister opp det gjeldende byggets ikke gjør, slik at du ikke leter etter det. Hvert punkt sier hva du gjør i stedet i dag.

## Filer og lagring

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| En CadCraft-DWG kontrollert i AutoCAD selv | Hver lagret versjon leses tilbake av tre andre programmers DWG-lesere og av CadCraft. Se [Hva en DWG beholder og endrer](topic:files#what-a-dwg-keeps-and-changes). |
| Lagring av DXF nyere enn 2000 | Lagre som DXF 2000, eller som DWG opptil AutoCAD 2018. |
| Lagring over den åpnede filen i nettleseren | Hver lagring laster ned en ny kopi; erstatt den gamle filen selv hvis du vil. I CadCraft Studio skriver {{key:Mod+S}} tilbake til filen du åpnet. |
| Skylagring og synkronisering mellom datamaskiner | CadCraft sender ikke lagringene dine til skyen ennå: behold DWG- og DXF-filene dine i egne mapper. I CadCraft Studio viser [Historikk](topic:history) skyversjonene av en tegning som er lagret et annet sted, og kopier av dine egne lagringer på denne datamaskinen. |
| Underlegg, og redigering av en ekstern tegning på stedet | Legg tegningen ved som en lenke og last den inn på nytt etter at du har endret den andre tegningen. En lenke forblir en lenke når du lagrer som DWG, og {{cmd:XCLIP}} klipper den. |
| Bilder i DXF; maskeringer som skjuler det som ligger under | DXF beholder et bilde som rammen med filnavnet; DWG beholder det som bilde — se [Bilder i en tegning](topic:pictures). En maskering vises som sin ramme. |
| Redigering av flerhjelpelinjer med buede hjelpelinjer, med hjelpelinjer på begge sider av innholdet, eller med en blokk som er snudd eller skalert ujevnt | De tegnes slik det andre programmet tegnet dem, og flyttes som én enhet. Flerhjelpelinjer med rette hjelpelinjer til ett landingspunkt, og tekst eller blokk som innhold, kommer inn redigerbare ({{cmd:MLEADEREDIT}}). |
| I tabeller fra andre programmer: en celle som inneholder en blokk, tekstformatering inne i en celle, cellevise kanter og farger i en DXF-tabell, en tabell delt i kolonner | Tabellen åpnes som en redigerbar tabell ({{cmd:TABLEDIT}}) og vises slik det andre programmet tegnet den, til du redigerer den. Da tegner CadCraft den på nytt fra cellene: ren tekst, formler som `=G3*H3` og `=Sum(I3:I9)`, justering og teksthøyder. En blokkcelle er da tom. En urørt DWG-tabell lagres tilbake med celledataene den kom med. |
| Et ekte tabellobjekt i en lagret DXF | En DWG beholder en tabell som en tabell andre programmer kan redigere. En DXF beholder den som blokken som tegner den, med CadCraft sin egen oppføring: CadCraft åpner den som tabell igjen; andre programmer ser en blokk. En speilvendt eller ujevnt skalert tabell lagres slik også i en DWG. |
| Kopiering og liming med andre programmer | CadCraft sitt utklippsbord fungerer mellom CadCraft-tegninger og faner i samme nettleser, ikke med andre programmer. Lagre som DWG eller DXF og åpne der. Se [Kopier, lim inn og dupliser](topic:copy-paste). |

## Tegning og redigering

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Skraveringsmønstre CadCraft ikke har, og gradientfyll nøyaktig slik andre programmer maler dem | Åpnede skraveringer med mønstre CadCraft ikke har, vises som en tone. Et gradientfyll ({{cmd:GRADIENT}}) males på CadCraft sin egen måte for hver type: likt andre programmers i art, ikke punkt for punkt. DWG 2004 og nyere beholder det som en ekte gradientskravur; i en DXF 2000- eller DWG 2000-fil leser bare CadCraft det tilbake, og andre programmer ser et heldekkende fyll. Mønstre lastes fra en `.pat`-fil, og en skravur kan knyttes til sin grense og følger den: se [Skravur og fyllområder](topic:hatch). |
| Linjetyper med figurer eller tekst i seg, og linjevekter i en lagret DXF R12 | Figurer og tekst i en fils linjetype utelates fra strekene; lagre som DWG for å beholde linjevektene. |
| Mønsterskravurer i en lagret DXF | R12 har ingen skravur: de lagres som sine konturer. Lagre som DWG for å beholde mønsteret. |
| Matriser laget av et annet program, eller som kan redigeres der; rader og nivåer i bane- og polarmatriser; en matrise som følger sin banekurve | En matrise laget med ASsociative ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; endres med {{cmd:ARRAYEDIT}}) lagres som en blokkreferanse med CadCraft sine egne tall: andre programmer viser, flytter, skriver ut og eksploderer den, men kan ikke endre antallet. En matrise laget i et annet program åpnes her som en vanlig blokkreferanse. En banematrise beholder en kopi av banen sin: å redigere kurven etterpå flytter ikke elementene. |
| Klippede arkvisningsområder til og fra andre programmer | Et visningsområde klippet med {{cmd:VPCLIP}} eller laget med {{cmd:MVIEW}} Polygonal eller Objekt lagres med CadCraft sin egen kontur: andre programmer åpner det som rektangelet rundt det, og et visningsområde klippet i et annet program åpnes her som sitt rektangel. DXF R12 beholder bare rektangelet. |
| {{cmd:STRETCH}} med en krysspolygon | Bruk ett eller flere kryssende vinduer. |
| {{cmd:PEDIT}} Rediger hjørnepunkt (ett hjørnepunkt om gangen på kommandolinjen) | Håndtak, og hjørnepunktnettleseren i {{ui:Egenskaper}} (alle hjørnepunkter, bredder og bule). Resten av PEDIT er bygget: se [Splines og polylinjer](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} og {{cmd:JOIN}} på ellipser og splines | {{cmd:EXPLODE}} en spline (eller {{cmd:PEDIT}} den) for å få en polylinje som disse kommandoene tar. |
| Avrunding og fasing mellom et buesegment i en polylinje og segmentet ved siden av; avrunding som knytter en linje inn i en polylinje | {{cmd:EXPLODE}} polylinjen, og avrund deretter delene. Avrundingsbuen legges til som sitt eget objekt. |
| Trim og forleng: prosjektvalget (3D) og forlengelse av en polylinjes buende | Trim i tegningens plan. For en buende: eksploder polylinjen, eller tegn buen på nytt. |
| OLE-objekter: innsetting, kjøring eller redigering av dem; visning av de i en DWG der filen legger dem; metafilbilder | Se [Bilder](topic:pictures#objects-from-other-programs-ole). En DXF sine objekter vises som bitmap eller en merket ramme. En DWG sine beholdes, men tegnes ikke på plass (OLELIST lister dem og legger en kopi av et bilde der du angir). |
| Skriving av formateringskoder (fet, stablede brøker, farger per ord) i avsnittstekst; andre skrifter enn den ene Helvetica-lignende skriften; kolonner | Formatering som kom i en fil, beholdes, tegnes og lagres (se Tekst). Ny avsnittstekst har én høyde og farge. |
| Avsnittstekst redigert ved sin rotasjon | Redigeringsverktøyet åpnes vannrett; teksten beholder sin rotasjon. |
| Flerhjelpelinjer lagret som flerhjelpelinjeobjekter i en DXF | En DWG beholder dem som flerhjelpelinjer, med hver hjelpelinje og en blokk som innhold. En DXF beholder det de tegner: linjer, pilspisser, og teksten eller blokken. |
| I tabeller ({{cmd:TABLE}}): tekst som bryter inne i en celle, tabeller som deles i deler, en tabellstils egen tekststil og farger per radtype i en dialog, en datakobling til et regneark (`.xlsx`) eller en som leser filen selv | En celles tekst brytes bare der du bryter den ({{key:Alt+Enter}}); gjør kolonnen bredere. {{cmd:DATALINK}} leser en `.csv`-fil, og {{cmd:DATALINKUPDATE}} ber deg velge filen på nytt. {{cmd:DATAEXTRACTION}} og {{cmd:COUNTTABLE}} lager en tabell som ikke følger tegningen av seg selv: kjør dem på nytt (en løpende telling: {{cmd:BOMTABLE}}). |
| Attributtdefinisjoner som lagres for seg selv i en lagret fil (utenfor en blokk), flerlinjeattributter | Legg attributtdefinisjoner inn i en blokk før du lagrer: alene lagres de som tekst som viser merkelappen. |
| Lagtilstander (lagring og gjenoppretting av hvilke layere som er på) | Bruk {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, eller slå layere av og på for hånd. |
| Valg med vindu-polygon og krysspolygon, og lagrede valgfilter | Gjerde (`F`), Vindu, Kryssing, Fjern (`R`), {{cmd:QSELECT}} for en regel. |

## Egenskapspanelet

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Tegning av Tilpass-valgene, og den horisontale tekstposisjonen og tekst under linjen på måltilsetninger som ikke er lineære eller innrettede | De beholdes på objektet, vises i {{ui:Egenskaper}} og lagres. CadCraft plasserer teksten etter sin egen regel. |
| Materialer som andre programmer ser | En lagret fil beholder materialnavnet for CadCraft; andre programmer viser layerets materiale. |
| Transparens i DWG 2000- og DXF-filer | Andre programmer viser disse objektene som fulle; CadCraft beholder transparensen. Lagre som DWG 2004 eller nyere for alle. |
| En skravurlenke laget i et annet program | CadCraft lagrer sin egen lenke i DWG- og DXF 2000-filer; lenker laget i andre programmer leses ikke. Bruk `HATCHEDIT` og Lenke: se [Skravur og fyllområder](topic:hatch). |
| Koordinater i {{ui:Egenskaper}} i BKS | Egenskaper viser verdenskoordinater; statuslinjen og {{cmd:ID}} viser BKS-koordinater. Se [Snu visningen og bruk egne koordinater](topic:ucs-and-turned-view). |
| En egen posisjon for et annoterende objekt i hver av dets målestokker; lesing av målestokkpostene andre programmer beholder | En annoterende tekst eller måltilsetning beholder en liste over målestokker ({{cmd:OBJECTSCALE}}), og hvert visningsområde viser den i størrelsen for sin målestokk, på samme sted. Listen lagres som CadCraft sine egne data: et annet program ser objektet i den ene målestokken det er dimensjonert for, og en liste laget i et annet program leses ikke. Se [Enheter, papir og målestokker](topic:units-papers-scales#annotate-by-scale). |
| Endring av en dynamisk blokks avstander, vinkler eller speiling; dynamiske blokker som beholdes dynamiske når du lagrer i en annen DWG-versjon eller som DXF | Bytt synlighetstilstanden i {{ui:Egenskaper}} › {{ui:Egendefinert}}; de andre verdiene vises der som skrivebeskyttet. Blokken forblir dynamisk når du lagrer den som DWG i versjonen tegningen kom i. Se [Dynamiske blokker](topic:dynamic-blocks). |
| Toleranse for splinetilpasning, splinegrad 6 og høyere, 3D-splines | Tilpass- og kontrollpunkter, grad 1 til 5 og vekter er bygget: se [Splines og polylinjer](topic:splines). En splines høyde (Z) beholdes ikke. |

## Presisjonshjelp

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Sporing fra punkter på tvers av kommandoer, og dialogboksen for sporingsinnstillinger (relative polarvinkler, ekstra vinkler) | {{cmd:POLARANG}} setter steget; hent punktene på nytt i neste kommando. |
| Fangst til rutenett | Skriv inn koordinater; rutenettet er bare en visuell veiledning. |
| Bue- og Lengde-valg når du velger hjørnene i et område, og MEASUREGEOM Volum | Tegn konturen med {{cmd:PLINE}} (buer inkludert), og deretter {{cmd:AREA}} `O`. |
| Dynamisk inndata for håndtak, og listen over valg (pilen ned) | Kommandolinjen viser valgene. |
| Vinkler i grader-minutter-sekunder, gon eller landmålerretninger | Skriv inn desimalgrader: `30.5` for 30°30'. |
| En visningsbehandler-dialog; navngitte visninger av et ark som kommer tilbake på det arket | {{cmd:NAMEDVIEW}} lister og gjenoppretter visninger. En lagret fil beholder dem, men et arks visninger kommer tilbake på det første arket. |

## Ark, måltilsetninger og plotting

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Felt for et visningsområdes målestokk, et navngitt objekt som et layer eller en blokk, en hyperlenke, og arksettfelt utover arknummer og navn; felt skrevet som feltobjekter som andre programmer oppdaterer | {{cmd:FIELD}} har dato, filnavn, arknummer, navn og antall, tegningens egenskaper ({{cmd:DWGPROPS}}), et objekts areal, lengde og andre egenskaper, og formler, i tekst, attributter og tabellceller. Et annet program viser et CadCraft-felt som teksten det sist leste. CadCraft leser andre programmers dato-, filnavn-, egenskaps-, ark- og uttrykksfelt og lar de andre typene være tekst. Et visningsområdes målestokk skrives inn for hånd. |
| Lagring av hvilken måltilsettingsstil som er gjeldende; måltekst dradd til et fritt sted | En tegning åpnes med Standard som gjeldende. Teksten ligger på mållinjen (DIMTEDIT Venstre / Høyre / Midt). Se [Sett målstørrelser](topic:dimension-settings). |
| Redigerbare toveislinjers vinkelmåltilsetninger fra åpnede filer som CadCraft ikke kan regne ut | De vises slik de er tegnet i filen. Ordinat-, buelengde- og knekte radiusmål åpnes som måltilsetninger du kan redigere. |
| Kontroll av CTB-leseren mot en fil fra et annet program (den er bygget, fra den publiserte beskrivelsen), navngitte plottestiler (STB), dither, pennumre, gråtoner fra en CTB og adaptiv justering av linjetype i en plottestil | Lag tabellen i {{ui:Plottestiltabeller}} (farge, gråtone, blekk, linjevekt, linjetype, linjeende og -sammenføyning, og fyllstil per farge): se [Plottestiltabeller](topic:plot-pdf#plot-style-tables). |
| Sideoppsett | Velg papir, målestokk og plottestil i dialogboksen {{ui:Plott til PDF}}. Et ark beholder plottestilen sin. |
| Hindi og andre skrifter som trenger kompleks formning i PDF-er, og sjeldne ideografer (europeiske skrifter, kyrillisk, gresk, hebraisk, arabisk, persisk, urdu, thai, kinesisk, japansk og koreansk utskrift) | De skrives ut som «?». |
| Arabisk skrift og kinesisk, japansk eller koreansk tekst i samme plottede PDF | En utskrift bærer én skrift: én av de to skriftene skrives ut som «?». |
| Eksplisitte retningsmerker i tekst (innbygginger, overstyringer, isolater) | De ignoreres: hver linje ordnes bare etter bokstavene. |
| Bilder inne i en vedlagt PDF-side, i en utskrift | Sidens linjer, fyll og tekst skrives ut. En side som bare er et bilde, legges inn med {{cmd:SCANATTACH}}, og bilder skrives ut. Se [PDF-underlegg](topic:pdf-underlay#plot-and-save). |
| Sende en jobb til en laser fra CadCraft Studio (Studio har ikke Web Serial) | Lagre G-koden og send den med lasers eget program, eller send den fra Chrome eller Edge. Se [Send en tegning til en laser](topic:laser-cutting#send-from-the-browser). |

## Betingelser og parametere

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Betingelser på ark, i blokker, på ellipser, splines eller tekst | Sett betingelser på fanen {{ui:Modell}}, på linjer, polylinjer, sirkler, buer og punkter. |
| Glatt (G2), og direkte betingelse av en polylinjes buebule | Tangent og lik; et buesegment følger sine to ender. |
| Referansedrevne (drevne) målbetingelser, og `3Point` i {{cmd:DCANGULAR}} | Et vanlig mål (DIMLINEAR …) viser en verdi uten å styre den. |
| Målbetingelser av fast størrelse på papir, og plotting av dem | De vises bare på skjermen; legg til vanlige mål for utskriften. |
| Betingelser beholdt gjennom EXPLODE, BREAK, JOIN og andre kommandoer som lager nye objekter, og på trimmede polylinjer | Sett betingelsene på nytt (AUTOCONSTRAIN hjelper). {{cmd:MIRROR}} og {{cmd:TRIM}} av linjer, buer og sirkler beholder dem. |
| Konfigurasjonstabeller (konfigurasjoner) i CadCraft | Endre parametere i panelet. |
| En testet tur-retur med SolidWorks | Kontroller skissen makroen lager før du stoler på den. |

## 3D

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Avrundinger, fasinger, skall og lofter; sveip langs en bane som stiger (3D-baner) | Ekstruder konturer med buer, skyv og trekk flater, roter rundt akse og sveip langs flate baner. |
| Ekstrudering i en annen retning enn opp | Tegn formen på bakken og ekstruder den opp eller ned (med trekkvinkel eller langs en bane om du vil); roter volumlegemet etterpå. |
| Høyde og tykkelse på 2D-objekter | Tegningen ligger på bakken (høyde 0) på 3D-fanen. |
| Redigering av volumlegemer, regioner og legemer fra andre programmer; visning av dem inne i blokker; deres flater på sveipede, lofta eller andre frie overflater; polyflate- og polygonnett | Volumlegemer i modellrom vises på 3D-fanen slik de er, og lagres tilbake uendret i DWG. Det som ikke tegnes, listes når 3D-fanen åpnes. Be om nett som 3D-flater i modellrom. Se [Volumlegemer fra andre programmer](topic:3d-solids#solids-from-other-programs). |
| Kopiering og liming av volumlegemer | På 3D-fanen bruker du {{cmd:COPY}}. Utklippstavlen holder bare 2D-objekter. |
| Snitt, visninger som følger senere endringer i volumlegemene, og skraverte volumlegemer på utplottede ark | {{cmd:VIEWBASE}} plasserer flate visninger (et øyeblikksbilde); kjør den på nytt etter å ha endret volumlegemene. |
| Materialer, teksturer og lysinnstillinger | De visuelle stilene: skygget, kanter, skjult linje, trådramme, røntgen. |
| Kartlag som plottes, på arkenes visningsområder og på 3D-fanen; bilder fra filer lagret med tegningen; en tegnings plassering skrevet for andre programmer i DWG 2000–2007 og DXF R12 | Kartlag vises under modellrommet på skjermen; systemet og layerlisten lagres med tegningen: se [Kartlag under tegningen](topic:map-layers) |
| E57-skanninger over 6 millioner punkter eller 512 MB, skannerprodusenters egne filer (RCP, RCS, FLS, LGS, TZF, ZFS), en punktsky lagret med tegningen eller plottet, fangst til en sky på 3D-fanen, loddrette (snitt-)skiver på Modell-fanen | Eksporter store skanninger eller produsentenes egne som LAS eller LAZ ([Punktskyformater](topic:point-cloud-formats)); legg inn skyen hver gang du åpner tegningen; tegn av fra en plan-skive på Modell-fanen: se [Tegn opp som bygget-linjer over en punktsky](topic:point-clouds) |
| Registrering av skanninger: finne mål (kuler, sjakkbrett) i en skanning av seg selv, løse alle skanninger samlet (bundle adjustment), skala, registrering mot en modell | Velg samsvarende punkter, eller skriv inn målkoordinater, og finjuster deretter én skanning om gangen med ICP: se [Registrer flere skanninger til én](topic:register-scans) |

## Rutiner og tilpasning

| Ikke bygget ennå | I stedet, i dag |
|---|---|
| Kompilert eller beskyttet LISP (.fas, .vlx), native programmer (.arx, .crx, .dbx) og VBA (.dvb) | Last inn en rutines .lsp-kildekode med {{cmd:APPLOAD}}. |
| LISPs `grread`, reaktorer (`vlr-…`), kurvefunksjoner (`vlax-curve-…`), ordbøker og utvidede data, Express Tools' `acet-…` | Resten av språket kjører: se [Kjør LISP-rutiner](topic:run-lisp). Kommandolinjen nevner en manglende funksjon når en rutine når en. |
| Bilder og lysbilder i en rutines dialog | De vises som tomme rammer; resten av dialogen fungerer. |
| CraftScript (.craft), Lua og Python i CadCraft | Kjør dem i PartCraft sin skriptarbeidsflate. |
| Lister over layer, farge og linjetype i båndmenystiler | Bruk {{ui:Layer}}-panelet og {{ui:Egenskaper}}. |
| Oppstartspakken og aliaser lagret på datamaskinen din eller synkronisert | De lagres i denne nettleseren; skrivebordsappen og skytjenesten vil lagre dem for deg. I Studio leses `acad.lsp` og `acaddoc.lsp` fra en støttemappe du velger (Last inn programmer). |

## Hjelp

Hjelpen beskriver denne versjonen. Når noe legges til, flyttes det ut av denne siden og inn i veiledningene.
