---
title: Nyt i 0.7 (tidligere)
summary: PDF-underlag og PDF-import, scannede tegninger med automatisk sporing, rigtige splines med SPLINE, SPLINEDIT og PEDIT, en målsætningsstilhåndtering, tekst der bevarer sin formatering, WBLOCK og dine egne målestoksforhold, 3D-solider fra andre programmer, registrering af scanninger, et Laser-panel, USD-eksport, Historik og udskrivning i CadCraft Studio, en guidet første tegning, værktøjslinjen på hver side eller i færre rækker og mere til AI-assistenter.
keywords: nyt i 0.7, tidligere udgivelse, udgivelsesnoter, ændringslog, ændringer, 0.7, version, nye funktioner, pdf, pdfattach, pdfimport, underlag, scanning, scanattach, scantrace, spor, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatering, wblock, scalelistedit, målestoksliste, acis, 3d-solider, registerscans, registrer scanninger, icp, e57, las, laser, grbl, g-code, usd, usdout, historik, versioner, sammenlign, udskriv, printer, png, svg, plottestil, linjetype, rundvisning, hurtigguide, kommandokort, værktøjslinjens placering, værktøjslinjens rækker, toolbardock, regen, regenall, trackpad, stryg, kodeside, kyrillisk, koreansk, kinesisk, japansk, elektrisk, rcd, p&id, pid, acad.lsp, acaddoc.lsp, supportmappe, assistenter, mcp, enheder, portugisisk
from: d07ca034
---

Dette er, hvad der ændrede sig i CadCraft 0.7 i forhold til 0.6. Meget af det blev efterspurgt på Discord. Listen er grupperet efter område, med det vigtigste først.

## Nyt

### PDF'er og scannede tegninger

- **Læg en PDF-side under tegningen.** {{cmd:PDFATTACH}} (`PDFATT`) placerer en side i sin rigtige størrelse eller en målestok, du skriver. Fang til dens linjer, gør den blegere, gør den sort/hvid ({{cmd:PDFADJUST}}), beskær den ({{cmd:PDFCLIP}}) og skift PDF'ens egne lag ({{cmd:PDFLAYERS}}). Den plottes som linjer, udfyldninger og tekst, og en DWG eller DXF 2000 gemmer den som et link til filen. Når du åbner en PDF med {{ui:Åbn}}, spørges der, om den skal vedhæftes eller importeres. Se [PDF-underlag og PDF-import](topic:pdf-underlay).
- **Lav en PDF-side om til tegneobjekter.** {{cmd:PDFIMPORT}} (`PDFIM`) laver linjer, polylinjer, cirkler, buer, massive skraveringer og tekst på lag, der er navngivet efter PDF'en, i sin rigtige størrelse, en angivet målestok, eller skaleret ud fra to punkter og en reel afstand, i ét fortrydelsestrin. Se [Importér en side](topic:pdf-underlay#import-a-page).
- **Scannede tegninger.** {{cmd:SCANATTACH}} henter en PNG, JPEG eller TIFF (én side eller alle) eller en PDF-side, der er et billede. Derefter kan du skalere den ud fra to punkter ({{cmd:SCANSCALE}}), rette den ind ({{cmd:SCANALIGN}}), rette den op ud fra dens egne lange linjer ({{cmd:SCANDESKEW}}), gøre den sort/hvid og fjerne småpletter ({{cmd:SCANCLEAN}}), beskære den og slette dele af den. Hvert trin er ét fortrydelsestrin, og den oprindelige fil bevares. Se [Scannede tegninger og sporingen](topic:scanned-drawings).
- **Spor en scanning om til linjer og buer.** {{cmd:SCANTRACE}} tegner scanningens linjer som linjer og buer på et nyt lag, SCAN-TRACE, med en tolerance, du angiver, og lader tekst og skravering være, som de er. Rapporten siger, hvad der blev lavet, og hvad der blev efterladt, og den er ikke en påstand om, at resultatet er rigtigt: kontrollér det mod arket. {{cmd:RASTERSNAP}} lader objektfang finde scanningens ender, hjørner og kryds. Intet sendes nogen steder, og ingen trænet model bruges. Se [Sporingen](topic:scanned-drawings#the-trace).

### Tegning og redigering

- **Rigtige splines.** {{cmd:SPLINE}} (`SPL`) tegner en kurve gennem punkter eller ud fra kontrolpunkter (grad 1 til 5), med endetangenter; {{cmd:SPLINEDIT}} (`SPE`) flytter, tilføjer og sletter tilpasnings- eller kontrolpunkter, angiver vægte, åbner, lukker, vender om eller gør en spline til en polylinje. Splines fra DWG- og DXF-filer åbnes som splines, og DWG og DXF 2000 gemmer dem som splines. Se [Splines og polylinjer](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) lukker og åbner polylinjer, sammenføjer linjer og buer til dem, angiver én bredde, tilpasser en kurve gennem hjørnepunkterne eller en spline langs dem og tager den tilbage med Decurve, vender om og redigerer flere ad gangen. Se [Rediger en polylinje](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) skriver en blok, nogle objekter eller hele tegningen til en ny DWG eller DXF, der kun indeholder de lag, stilarter og blokke, de bruger. Se [Skriv en blok eller objekter til en fil for sig selv](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN og REGENALL.** {{cmd:REGEN}} (`RE`) tegner fanen, du er på, om fra tegningen, {{cmd:REGENALL}} (`REA`) alle faner, ruder og åbne tegninger. Se [REGEN og REGENALL](topic:commands#regen-and-regenall).

### Tekst og målsætninger

- **Tekst bevarer sin formatering.** Afsnitstekst fra andre programmer beholder farver pr. ord, fed og kursiv, understregning, stablede brøker og højder: de tegnes på skærmen og i PDF'er, bevares, når du redigerer ordene, og gemmes tilbage. Se [Formatering inde i afsnitstekst fra andre programmer](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **En styring af målsætningsstile.** {{cmd:DIMSTYLE}} (`D`) laver, ændrer, sammenligner og anvender navngivne målsætningsstile; ændres en stil, ændres hver målsætning, der bruger den. {{cmd:DIMEDIT}} (`DED`) sætter teksten tilbage, skriver ny tekst, vender den eller skråstiller hjælpelinjerne; {{cmd:DIMTEDIT}} flytter teksten til venstre, højre eller til midten. Se [Navngivne målsætningsstile](topic:dimension-settings#named-dimension-styles).
- **Dine egne målestoksforhold.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) tilføjer målestoksforhold som 1:75 til viewport- og plotlisterne; de gemmes i tegningen (DWG og DXF 2000), og en tegning fra et andet program medbringer sin egen liste. Se [Målestoksforhold](topic:units-papers-scales#scales).
- **Tekst i andre alfabeter.** DXF-filer gemt i kyrilliske, koreanske, kinesiske, japanske eller vietnamesiske kodesider åbnes nu med deres tekst, og kinesisk, japansk og koreansk tekst udskrives i PDF'er (plottet henter en større skrifttype første gang, den har brug for en). Se [Skrifttype](topic:text#font).

### Plot og udskrivning

- **Mere i plottestiltabeller.** For hver farve kan en tabel nu også angive en linjetype, linjeenden og linjesammenføjningen og en udfyldningsstil, der udskriver massive udfyldninger som skraveringslinjer; tabellen har sin egen liste over linjetykkelser og en linjetypeskala. Se [Plottestiltabeller](topic:plot-pdf#plot-style-tables).
- **Udskriv, samt PNG- og SVG-filer.** Plot-dialogen har {{ui:Udskriv…}}, {{ui:Download PNG}} (300 dpi) og {{ui:Download SVG}}. I CadCraft Studio viser den computerens printere, deres papir og antallet af kopier. Se [Udskriv](topic:plot-pdf#print) og [Billed- og SVG-filer](topic:plot-pdf#picture-and-svg-files).

### 3D og punktskyer

- **3D-solider fra andre programmer.** Massive legemer, regioner og legemer i en tegnings modelrum vises på 3D-fanen, kun til læsning, og gemmes man som DWG, skrives de tilbage uændret. Flader på overflader, som CadCraft endnu ikke tegner, vises som en liste og gættes ikke. Se [Massive legemer fra andre programmer](topic:3d-solids#solids-from-other-programs).
- **Registrér flere scanninger.** {{cmd:REGISTERSCANS}} (`REGSCAN`) placerer scanninger, der er taget fra forskellige positioner, i én ramme, ud fra punktpar eller indtastede målkoordinater, forfiner dem med ICP, gemmer registreringen som en lille projektfil og skriver den registrerede punktsky som én LAS- eller E57-fil. Se [Registrér flere scanninger til én](topic:register-scans).
- **USD-eksport.** {{cmd:USDOUT}}, eller {{cmd:EXPORT3D}} › {{ui:USD}}, skriver 3D-fanens solider som `.usda`, `.usdc` eller `.usdz`. Se [Eksportér 3D-modellen som USD](topic:usd).
- **Beregninger på 3D-fanen.** Hvor 3D-fanens værktøjer beder om en afstand, kan du skrive en beregning, ligesom på kommandolinjen. Se [Regning i en indtastet værdi](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Fremstilling

- **Send en tegning til en laser.** {{cmd:LASER}}, eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Laser…}}, åbner et panel over tegningen: hvert lag skæres, ridses, graveres med linjer, udfylder figurer, graverer et billede eller sendes ikke, med sin effekt, hastighed og gennemløb. Forhåndsvisningen følger dine ændringer, {{ui:Gem G-code…}} skriver GRBL-laser-G-code, og i Chrome eller Edge kan panelet angive jobbets ramme og sende det over USB. Indstillingerne gemmes i tegningen (DWG og DXF). Se [Send en tegning til en laser](topic:laser-cutting).
- **Bygningsinstallationssymboler i add-on'et Electrical.** Data-, telefon- og tv-stikkontakter, nøgle- og tidsafbrydere, en termostat, nødudgangsskilt, detektorer, alarmknap og sirene, en ventilator, vandvarmer, komfur, ladepunkt til elbiler, elmåler og underfordeling samt RCD- og RCBO-symboler. En gruppe kan have en RCD, tavleoversigten har en RCD-kolonne, og kontrollerne nævner stikkontaktgrupper uden en RCD på 30 mA eller mindre. Det er en planlægningspåmindelse, ikke en kodekontrol.
- **Et P&ID-add-on.** P&ID tegner procesdiagrammer: symboler med forbindelsespunkter, proces- og signallinjer, mærker, linjenumre, lister over linjer, udstyr, instrumenter og ventiler (CSV eller et regneark) og kontroller. Det følger med CadCraft og er slået fra, indtil du slår det til under {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Add-ons}}. Det er et tegnehjælpemiddel, ikke en ingeniørgodkendelse, og dets ord er indtil videre kun på engelsk.

### Kom i gang og skærmen

- **En guidet første tegning.** {{cmd:TOUR}} (eller {{ui:Tag rundvisningen}} på startkortet) fører dig gennem seks trin i den rigtige tegning: en linje, en cirkel, en flytning, en beskæring, en sletning og en målsætning. Den starter af sig selv første gang, CadCraft åbner med intet i. Se [Foretrækker du at blive vejledt?](topic:getting-started#prefer-to-be-guided)
- **En hurtigguide og et kommandokort.** [Hurtigguiden](topic:cheat-sheet) har de 40 almindelige kommandoer på én side, også som PDF til udskrivning, og [kommandokortet](topic:command-map) viser kommandoer med deres korte navne, A til Å.
- **Værktøjslinjen på hver side.** {{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Værktøjslinjens placering}}: øverst (som før), nederst, til venstre eller højre, eller skriv {{cmd:TOOLBARDOCK}}. Se [Værktøjslinjens placering](topic:settings#toolbar-position).
- **Værktøjslinjens rækker.** {{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Værktøjslinjens rækker}}: tilpas til bredden, 2 rækker eller 1 række, for CadCraft-værktøjslinjen og stilene Drafting classic og Ribbon. {{key:Shift+Ctrl+F1}} skifter mellem dem, {{key:Ctrl+F1}} mellem det, knapperne viser, og {{cmd:TOOLBARROWS}} og {{cmd:TOOLBAR}} angiver dem. Startpunktets hint har en lukneknap. Tak til GJoe2, som sendte dette som en pull request. Se [Værktøjslinjens rækker](topic:settings#toolbar-rows).

### I CadCraft Studio

- **Historik.** {{cmd:HISTORY}} (`HIST`), eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Historik…}}: de kopier, Studio gemmer, når du åbner og gemmer en tegning, og tegningens skyversioner, når du åbnede den fra skyen. Åbn eller gendan én, eller sammenlign to, med det, der er tilføjet, fjernet og ændret, vist med farver. Se [Historik](topic:history).
- **acad.lsp og acaddoc.lsp.** Vælg en supportmappe i {{cmd:APPLOAD}}: de to filer indlæses, når CadCraft starter (acaddoc.lsp igen for hver ny tegnefane), og `S::STARTUP` kører efter dem. Se [Indlæs programmer](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Plot-dialogen i sit eget vindue.** En knap i dens titellinje flytter den ind i et vindue, du kan placere på en anden skærm. Se [Flyt en dialogboks](common:arrange-panels#move-a-dialog).

### Til AI-assistenter

- **Filer efter navn, i mapper du vælger.** I CadCraft Studio kan en assistent åbne, gemme og plotte filer efter navn og give en kommando den fil, den beder om (INSERT fra en fil, COUNTs eksport, SAVEAS, PLOT), men kun inde i de mapper, du tilføjer under {{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Assistenter}} › {{ui:Mapper, den må bruge}}. Se [Lad den bruge filer i mapper, du vælger](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Færre kald.** En assistent kan skrive en hel kommandolinje på én gang, holde en kommando åben mellem sine kald, tælle objekter efter type og lag uden at liste dem og placere en blok med dens attributværdier i ét trin.
- **Uden vindue.** Kommandolinjen `cadcraft` skriver SVG-plot og konverterer, plotter, kontrollerer eller beskriver mange filer på én gang. MCP-pakken er endnu ikke udgivet. Se [Arbejd med filer uden at åbne CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Ændret

- **Et trackpad panorerer.** Bevæg to fingre på et trackpad, og 2D-visningen følger dem; knib og musehjulet zoomer. Se [Mus, trackpad og touch](topic:mouse-trackpad-touch).
- **OLE-objekter bevares.** En DXF's indlejrede objekter vises som deres billede eller som en mærket ramme og gemmes tilbage af DXF 2000. En DWG's bevares og skrives tilbage, når du gemmer som DWG, men vises endnu ikke. Før gik de tabt ved gemning. Se [Objekter fra andre programmer (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Enhederne i en ny tegning** følger den enhed, du markerer med en stjerne i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Enheder}}.

## Rettet

- Layouts, der åbnede tomme, eller som mistede et viewport og viste hele modellen i stedet, åbnes nu med deres rigtige viewports. Et layout uden forbindelse til sit indhold bevares, og åbningsrapporten siger det.
- DXF-filer i ældre kodesider viste ødelagt kyrillisk og koreansk tekst. De læses nu korrekt.
- Afsnitstekst fra andre programmer mistede sin formatering, når den blev åbnet, og blev gemt tilbage som ren tekst.

## I alle programmer

- **Enheder.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Enheder}} har én liste hver for længde, areal, rumfang, vinkel og hældning, med de nøjagtige størrelser, enhedernes definitioner giver (den amerikanske landmålerfod er sin egen enhed). Slå de enheder fra, du aldrig bruger, og de forlader enhedslisterne; markér én med en stjerne, og nyt arbejde starter i den. En fil beholder altid sin egen enhed. I CadCraft sætter stjernen enhederne for en ny tegning, når det er en enhed, en tegning kan bære; CadCrafts egen boks {{ui:Enheder}} følger endnu ikke kontakterne. Når en tegning har enheder, kan en længde, du skriver, have ethvert enhedsmærke. Se [Enheder, indtastede værdier og enhedslisterne](common:unit-lists).
- **En tættere layout og paneler, der gemmer sig væk.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Layouttæthed}} › {{ui:Kompakt}} får plads til mere på skærmen (touchskærme og telefoner beholder deres store knapper). Hvert sidepanel har en smal titellinje: træk den for at fastgøre eller frigøre panelet, slip den på et andet panels linje for at dele én ramme som faner, fastgør den for at lade den glide væk til kanten, eller skjul den og hent den tilbage fra kanten. Se [Ordn panelerne](common:arrange-panels#make-the-layout-denser).
- **Dialogbokse kan flyttes.** Træk en dialogboks i dens titellinje væk fra tegningen; den vender tilbage dér, du slap den. Dobbeltklik på titellinjen for at centrere den igen. Se [Flyt en dialogboks](common:arrange-panels#move-a-dialog).
- **Opskrifter til AI-assistenter.** Ti gennemarbejdede anmodninger til din egen assistent (ryd op i en tegning, plot et sæt, kontrollér tegninger, stil en model spørgsmål, summér et mængdeudtræk, prøv en delvariant …), hver med de værktøjer, den kalder, og de tilladelser, den kræver, og hver gennemspillet af vores tests. Programmerne indeholder ingen AI. Se [Opskrifter til AI-assistenter](common:assistants-recipes).
- **Sprog.** **Português (Portugal)** er nyt i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Sprog}}. Den og **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nu alle programmernes ord som udkast, der endnu ikke er gennemgået af en modersmålstaler. Hjælpeemnerne er på engelsk.
- **CadCraft Studio** siger, hvorfor en opdateringskontrol mislykkedes (ingen fil til dit system endnu, intet netværk, en ugyldig signatur) i stedet for blot »Færdig«, og holder op med at vise et kort med Nyheder, du har lukket, indtil der er en nyere udgivelse.

## Ikke i denne version endnu

- **0.7 er ikke kodesigneret.** Signering og Microsoft Store-pakken blev flyttet til 0.8, fordi certifikatvalideringen endnu ikke er kommet igennem. Kontrollér SHA-256 ved siden af hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installationsprogrammet, vælg {{ui:Flere oplysninger}}, og derefter {{ui:Kør alligevel}}. På en Mac skal du første gang højreklikke på CadCraft Studio og vælge {{ui:Åbn}}. CadCraft Studio er endnu ikke i en app-butik, og der er endnu ingen iPad- eller iPhone-version.
- Vinkel- og hældningslisterne i {{ui:Enheder}} gemmes, men ingen boks læser dem endnu.
- En DWG's OLE-objekter bevares, men vises ikke, og metafilbilleder inde i OLE-objekter tegnes ikke.
- Læsning af plottestiltabeller (CTB-filer) fra andre programmer venter på en prøvefil.
- Ældre asiatisk tekst skrevet med `\M+`-koder læses, men er endnu ikke kontrolleret mod en fil fra et andet program.
- PDF-underlag: billeder inde på siden vises på skærmen, men plottes ikke, en assistents plot udelader underlag, og det er ikke kontrolleret, hvordan andre programmer læser den gemte beskæring og målestok.
- Historik: CadCraft sender endnu ikke sine gemninger til skyen, så skyversionerne er dem, der er gemt fra andre enheder og fra nettet. Historik findes kun i CadCraft Studio.
- Det er endnu ikke kontrolleret, om Studio beholder supportmappen til acad.lsp efter en genstart; hvis den spørger, skal du vælge mappen igen i APPLOAD.
- Laser-panelet er endnu ikke prøvet på en rigtig laser: test hver indstilling på spildmateriale. CadCraft Studio har ingen Web Serial, så i Studio gemmer panelet kun G-code.
- Registrering af scanninger er testet på opdigtede scanninger, endnu ikke på et rigtigt scanners sæt.
- Panorering med to fingre er prøvet med simulerede trackpad-hændelser, endnu ikke på et rigtigt trackpad.
- {{cmd:PEDIT}} har ingen valgmulighed for at redigere hjørnepunkter (brug greb eller Egenskaber). Forskyd, beskær, forlæng, afrund, bryd og sammenføj tager endnu ikke splines; en splines højde (Z) bevares ikke.
- Ny afsnitstekst kan endnu ikke få formateringskoder, og SVG-plot viser formateret tekst i én farve.
- WBLOCKs »Hele tegningen« skriver kun modellen, ikke arkene. Den aktuelle målsætningsstil gemmes ikke i filen: en tegning åbnes med Standard som aktuel.
- Menustilene med bånd har endnu ingen lister over lag, farve eller linjetype: brug panelet {{ui:Lag}} og {{ui:Egenskaber}}.
- Punktskyer gemmes stadig ikke i tegningen og plottes ikke, og E57-filer åbnes med op til 6 millioner punkter og 512 MB.
- CadCrafts gemte DWG-filer er endnu ikke kontrolleret i AutoCAD selv.

Alt andet findes i [Ikke lavet endnu](topic:not-built-yet).
