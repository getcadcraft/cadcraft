---
title: Nyheder i 0.7
summary: PDF-underlag og PDF-import, scannede tegninger med automatisk aftegning, rigtige splines med SPLINE, SPLINEDIT og PEDIT, en administrator til målsætningsstile, tekst der beholder sin formatering, WBLOCK og dine egne skalaer, massive 3D-legemer fra andre programmer, registrering af scanninger, et panel Laser, USD-eksport, Historik og udskrivning i CadCraft Studio, en guidet første tegning, værktøjslinjen på hvilken som helst side eller i færre rækker og mere til AI-assistenter.
keywords: nyheder, hvad er nyt, udgivelsesnoter, ændringslog, ændringer, 0.7, version, nye funktioner, pdf, pdfattach, pdfimport, underlag, scanning, scanattach, scantrace, aftegning, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatering, wblock, scalelistedit, skalaliste, acis, massive 3d-legemer, registerscans, registrér scanninger, icp, e57, las, laser, grbl, g-code, usd, usdout, historik, versioner, sammenlign, udskriv, printer, png, svg, plotstil, linjetype, rundvisning, snydeark, kommandokort, værktøjslinjens placering, værktøjslinjens rækker, toolbardock, regen, regenall, pegeplade, stryg, kodeside, kyrillisk, koreansk, kinesisk, japansk, el, rcd, p&id, pid, acad.lsp, acaddoc.lsp, supportmappe, assistenter, mcp, enheder, portugisisk
from: b9258ca6
---

Det her er, hvad der ændrede sig i CadCraft 0.7 i forhold til 0.6. Meget af det blev bedt om på Discord. Listen er grupperet efter område, med det vigtigste først.

## Nyt

### PDF'er og scannede tegninger

- **Læg en PDF-side under tegningen.** {{cmd:PDFATTACH}} (`PDFATT`) placerer en side i sin sande størrelse eller en skala, du skriver. Fang til dens linjer, ton den ned, gør den monokrom ({{cmd:PDFADJUST}}), beskær den ({{cmd:PDFCLIP}}) og slå PDF'ens egne lag til og fra ({{cmd:PDFLAYERS}}). Den plottes som linjer, udfyldninger og tekst, og en DWG eller DXF 2000 beholder den som et link til filen. At åbne en PDF med {{ui:Åbn}} spørger, om den skal vedhæftes eller importeres. Se [PDF-underlag og PDF-import](topic:pdf-underlay).
- **Gør en PDF-side til tegneobjekter.** {{cmd:PDFIMPORT}} (`PDFIM`) laver linjer, polylinjer, cirkler, buer, massive skraveringer og tekst på lag opkaldt efter PDF'en, i sand størrelse, en skala du skriver, eller skaleret ud fra to punkter og en rigtig afstand, i ét fortrydelsestrin. Se [Importér en side](topic:pdf-underlay#import-a-page).
- **Scannede tegninger.** {{cmd:SCANATTACH}} henter en PNG, JPEG eller TIFF (én side eller alle) eller en PDF-side, der er et billede. Skalér den derefter ud fra to punkter ({{cmd:SCANSCALE}}), flugt den ({{cmd:SCANALIGN}}), ret den op efter dens egne lange linjer ({{cmd:SCANDESKEW}}), gør den sort-hvid og fjern pletter ({{cmd:SCANCLEAN}}), beskær den og slet dele af den. Hvert trin er ét fortrydelsestrin, og den oprindelige fil bevares. Se [Scannede tegninger og aftegningen](topic:scanned-drawings).
- **Aftegn en scanning til linjer og buer.** {{cmd:SCANTRACE}} tegner scanningens linjer som linjer og buer på et nyt lag, SCAN-TRACE, inden for en tolerance, du angiver, og lader tekst og skravering være, som de er. Rapporten siger, hvad den lavede, og hvad den lod ligge, og den er ikke en påstand om, at resultatet er rigtigt: kontrollér det mod arket. {{cmd:RASTERSNAP}} lader objektfang finde scanningens ender, hjørner og kryds. Intet sendes nogen steder hen, og der bruges ingen trænet model. Se [Aftegningen](topic:scanned-drawings#the-trace).

### Tegning og redigering

- **Rigtige splines.** {{cmd:SPLINE}} (`SPL`) tegner en kurve gennem punkter eller ud fra kontrolpunkter (grad 1 til 5), med sluttangenter; {{cmd:SPLINEDIT}} (`SPE`) flytter, tilføjer og sletter tilpasnings- eller kontrolpunkter, sætter vægte, åbner, lukker, vender om eller gør en spline til en polylinje. Splines fra DWG- og DXF-filer åbnes som splines, og DWG og DXF 2000 gemmer dem som splines. Se [Splines og polylinjer](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) lukker og åbner polylinjer, sammenføjer linjer og buer med dem, sætter én bredde, tilpasser en kurve gennem knudepunkterne eller en spline langs dem og tager den tilbage med Decurve, vender om og redigerer flere på én gang. Se [Redigér en polylinje](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) skriver en blok, nogle objekter eller hele tegningen til en ny DWG eller DXF, der kun rummer de lag, stile og blokke, de bruger. Se [Skriv en blok eller objekter til en fil for sig](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN og REGENALL.** {{cmd:REGEN}} (`RE`) tegner den fane, du er på, om fra tegningen, {{cmd:REGENALL}} (`REA`) hver fane, rude og åben tegning. Se [REGEN og REGENALL](topic:commands#regen-and-regenall).

### Tekst og målsætninger

- **Tekst beholder sin formatering.** Afsnitstekst fra andre programmer beholder sine farver pr. ord, fed og kursiv, understregning, stablede brøker og højder: de tegnes på skærmen og i PDF'er, bevares, når du redigerer ordene, og gemmes tilbage. Se [Formatering inde i afsnitstekst fra andre programmer](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **En administrator til målsætningsstile.** {{cmd:DIMSTYLE}} (`D`) laver, ændrer, sammenligner og anvender navngivne målsætningsstile; at ændre en stil ændrer hver målsætning, der bruger den. {{cmd:DIMEDIT}} (`DED`) sætter teksten tilbage, skriver ny tekst, drejer den eller skråstiller målhjælpelinjerne; {{cmd:DIMTEDIT}} flytter teksten til venstre, til højre eller til midten. Se [Navngivne målsætningsstile](topic:dimension-settings#named-dimension-styles).
- **Dine egne skalaer.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) tilføjer skalaer som 1:75 til viewportens og plottets skalalister; de gemmes i tegningen (DWG og DXF 2000), og en tegning fra et andet program medbringer sin egen liste. Se [Skalaer](topic:units-papers-scales#scales).
- **Tekst i andre alfabeter.** DXF-filer gemt i kyrilliske, koreanske, kinesiske, japanske eller vietnamesiske kodesider åbnes nu med deres tekst, og kinesisk, japansk og koreansk tekst udskrives i PDF'er (plottet henter en større skrifttype første gang, det har brug for en). Se [Skrifttype](topic:text#font).

### Plot og udskrivning

- **Mere i plotstilstabeller.** For hver farve kan en tabel nu også sætte en linjetype, linjeenden og linjesamlingen og en udfyldningsstil, der udskriver massive udfyldninger som skraveringslinjer; tabellen har sin egen liste over linjetykkelser og en linjetypeskala. Se [Plotstilstabeller](topic:plot-pdf#plot-style-tables).
- **Udskriv samt PNG- og SVG-filer.** Dialogboksen Plot har {{ui:Udskriv…}}, {{ui:Download PNG}} (300 dpi) og {{ui:Download SVG}}. I CadCraft Studio viser den computerens printere, deres papir og antallet af kopier. Se [Udskriv](topic:plot-pdf#print) og [Billed- og SVG-filer](topic:plot-pdf#picture-and-svg-files).

### 3D og punktskyer

- **Massive 3D-legemer fra andre programmer.** Massive legemer, regioner og legemer i en tegnings modelrum vises på fanen 3D, skrivebeskyttet, og at gemme som DWG skriver dem tilbage uændret. Flader på overflader, CadCraft endnu ikke tegner, står på en liste og gættes ikke. Se [Massive legemer fra andre programmer](topic:3d-solids#solids-from-other-programs).
- **Registrér flere scanninger.** {{cmd:REGISTERSCANS}} (`REGSCAN`) placerer scanninger taget fra forskellige positioner i én ramme ved punktpar eller indtastede målkoordinater, forfiner dem med ICP, gemmer registreringen som en lille projektfil og skriver den registrerede sky som én LAS- eller E57-fil. Se [Registrér flere scanninger til én](topic:register-scans).
- **USD-eksport.** {{cmd:USDOUT}}, eller {{cmd:EXPORT3D}} › {{ui:USD}}, skriver fanen 3D's massive legemer som `.usda`, `.usdc` eller `.usdz`. Se [Eksportér 3D-modellen som USD](topic:usd).
- **Beregninger på fanen 3D.** Hvor fanen 3D's værktøjer beder om en afstand, kan du skrive en beregning, som på kommandolinjen. Se [Regning i en indtastet værdi](topic:coordinate-entry#arithmetic-in-a-typed-value).

### At lave ting

- **Send en tegning til en laser.** {{cmd:LASER}}, eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Laser…}}, åbner et panel over tegningen: hvert lag skærer, ridser, graverer linjer, udfylder former, graverer et billede eller sendes ikke, med sin effekt, hastighed og antal gennemløb. Eksemplet følger dine ændringer, {{ui:Gem G-code…}} skriver GRBL-laser-G-code, og i Chrome eller Edge kan panelet rammesætte jobbet og sende det over USB. Indstillingerne gemmes i tegningen (DWG og DXF). Se [Send en tegning til en laser](topic:laser-cutting).
- **Symboler for bygningsinstallationer i add-onet El.** Data-, telefon- og tv-stik, nøgle- og tidsafbrydere, en termostat, udgangsskilt, meldere, alarmknap og sirene, en ventilator, varmtvandsbeholder, komfur, ladepunkt til elbiler, energimåler og undertavle samt symboler for RCD og RCBO. En gruppe kan bære en RCD, tavlelisten har en kolonne for RCD, og kontrollerne nævner stikkontaktgrupper uden RCD på 30 mA eller mindre. Det er en planlægningspåmindelse, ikke en kontrol af forskrifter.
- **Et P&ID-add-on.** P&ID tegner procesdiagrammer: symboler med forbindelsespunkter, proces- og signallinjer, mærker, ledningsnumre, lister over ledninger, udstyr, instrumenter og ventiler (CSV eller en arbejdsmappe) og kontroller. Det følger med CadCraft og er slået fra, til du slår det til i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Add-ons}}. Det er en tegnehjælp, ikke en ingeniørgodkendelse, og dets tekst er indtil videre kun på engelsk.

### Kom i gang og skærmen

- **En guidet første tegning.** {{cmd:TOUR}} (eller {{ui:Tag rundvisningen}} på startkortet) fører dig gennem seks trin i den rigtige tegning: en linje, en cirkel, en flytning, en beskæring, en sletning og en målsætning. Den starter af sig selv første gang, CadCraft åbnes med ingenting i. Se [Vil du hellere guides?](topic:getting-started#prefer-to-be-guided)
- **Et snydeark og et kommandokort.** [Snydearket](topic:cheat-sheet) har de 40 hverdagskommandoer på én side, også som PDF til print, og [kommandokortet](topic:command-map) viser kommandoer med deres korte navne, A til Z.
- **Værktøjslinjen på hvilken som helst side.** {{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Værktøjslinjens placering}}: øverst (som før), nederst, til venstre eller til højre, eller skriv {{cmd:TOOLBARDOCK}}. Se [Værktøjslinjens placering](topic:settings#toolbar-position).
- **Værktøjslinjens rækker.** {{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Værktøjslinjens rækker}}: ombryd efter plads, 2 rækker eller 1 række, for CadCraft-værktøjslinjen og stilene Klassisk tegning og Bånd. {{key:Shift+Ctrl+F1}} stepper gennem dem, {{key:Ctrl+F1}} gennem det, knapperne viser, og {{cmd:TOOLBARROWS}} og {{cmd:TOOLBAR}} sætter dem. Starthintet har en lukkeknap. Tak til GJoe2, som sendte det som en pull request. Se [Værktøjslinjens rækker](topic:settings#toolbar-rows).

### I CadCraft Studio

- **Historik.** {{cmd:HISTORY}} (`HIST`), eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Historik…}}: de kopier, Studio beholder, når du åbner og gemmer en tegning, og tegningens skyversioner, når du åbnede den fra skyen. Åbn eller gendan én, eller sammenlign to, med det tilføjede, fjernede og ændrede vist i farver. Se [Historik](topic:history).
- **acad.lsp og acaddoc.lsp.** Vælg en supportmappe i {{cmd:APPLOAD}}: de to filer indlæses, når CadCraft starter (acaddoc.lsp igen for hver ny tegningsfane), og `S::STARTUP` kører efter dem. Se [Indlæs programmer](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Dialogboksen Plot i sit eget vindue.** En knap i dens titellinje flytter den over i et vindue, du kan lægge på en anden skærm. Se [Flyt en dialogboks](common:arrange-panels#move-a-dialog).

### Til AI-assistenter

- **Filer ved navn, i mapper du vælger.** I CadCraft Studio kan en assistent åbne, gemme og plotte filer ved navn og give en kommando den fil, den beder om (INSERT fra en fil, COUNTs eksport, SAVEAS, PLOT), men kun inde i de mapper, du tilføjer under {{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Assistenter}} › {{ui:Mapper, den må bruge}}. Se [Lad den bruge filer i mapper, du vælger](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Færre kald.** En assistent kan skrive en hel kommandolinje på én gang, holde en kommando åben mellem sine kald, tælle objekter efter type og lag uden at liste dem og placere en blok med dens attributværdier i ét trin.
- **Uden et vindue.** Kommandolinjen `cadcraft` skriver SVG-plot og konverterer, plotter, kontrollerer eller beskriver mange filer på én gang. MCP-pakken er ikke udgivet endnu. Se [Arbejd på filer uden at åbne CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Ændret

- **En pegeplade panorerer.** Flyt to fingre på en pegeplade, og 2D-visningen følger dem; knib og musehjulet zoomer. Se [Mus, pegeplade og touch](topic:mouse-trackpad-touch).
- **OLE-objekter bevares.** En DXF's indlejrede objekter vises som deres billede eller som en mærket ramme og gemmes tilbage af DXF 2000. En DWG's bevares og skrives tilbage, når du gemmer som DWG, men vises ikke endnu. Før gik de tabt ved gem. Se [Objekter fra andre programmer (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Enhederne i en ny tegning** følger den enhed, du sætter en stjerne ved i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Enheder}}.

## Rettet

- Layouts, der åbnede tomme eller mistede en viewport og viste hele modellen i dens sted, åbnes nu med deres rigtige viewports. Et layout uden link til sit indhold bevares, og rapporten ved åbning siger det.
- DXF-filer i ældre kodesider viste forvansket kyrillisk og koreansk tekst. De læses nu rigtigt.
- Afsnitstekst fra andre programmer mistede sin formatering ved åbning og blev gemt tilbage uden den.

## I alle apps

- **Enheder.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Enheder}} har én liste hver for længde, areal, rumfang, vinkel og hældning, med de præcise størrelser, enhedernes definitioner giver (den amerikanske opmålingsfod er sin egen enhed). Slå de enheder fra, du aldrig bruger, og de forlader enhedslisterne; sæt en stjerne ved én, og nyt arbejde starter i den. En fil beholder altid sin egen enhed. I CadCraft sætter stjernen enhederne i en ny tegning, når det er en enhed, en tegning kan bære; CadCrafts egen boks {{ui:Enheder}} følger endnu ikke kontakterne. Når en tegning har enheder, kan en længde, du skriver, bære enhver enheds tegn. Se [Enheder, indtastede værdier og enhedslister](common:unit-lists).
- **Et tættere layout og paneler, der ryddes af vejen.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Layouttæthed}} › {{ui:Kompakt}} får mere på skærmen (touchskærme og telefoner beholder deres store knapper). Hvert sidepanel har en slank titellinje: træk i den for at fastgøre eller frigøre panelet, slip den på et andet paneles linje for at dele ramme som faner, fastgør den, så den glider ud til kanten, eller skjul den og få den tilbage fra kanten. Se [Ordn panelerne](common:arrange-panels#make-the-layout-denser).
- **Dialogbokse flyttes.** Træk en dialogboks i titellinjen væk fra tegningen; den kommer tilbage, hvor du lod den. Dobbeltklik på titellinjen for at centrere den igen. Se [Flyt en dialogboks](common:arrange-panels#move-a-dialog).
- **Opskrifter til AI-assistenter.** Ti gennemarbejdede forespørgsler til din egen assistent (ryd op i en tegning, plot et sæt, kontrollér tegninger, stil en model spørgsmål, summér et mængdeudtræk, prøv en delvariant …), hver med de værktøjer, den kalder, og de tilladelser, den har brug for, og hver afspillet igen af vores tests. Apps'ene indeholder ingen AI. Se [Opskrifter til AI-assistenter](common:assistants-recipes).
- **Sprog.** **Português (Portugal)** er nyt i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Sprog}}. Det, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nu hvert ord i apps'ene, som kladder, der endnu ikke er gennemlæst af en modersmålstalende. Hjælpeemner er på engelsk.
- **CadCraft Studio** siger, hvorfor en opdateringskontrol mislykkedes (ingen fil til dit system endnu, intet netværk, en dårlig signatur) i stedet for blot "Færdig", og holder op med at bringe et Nyheder-kort tilbage, du lukkede, indtil der er en nyere udgivelse.

## Ikke i denne version endnu

- **0.7 er ikke kodesigneret.** Signering og Microsoft Store-pakken er flyttet til 0.8, fordi certifikatvalideringen ikke er kommet igennem endnu. Kontrollér SHA-256 ved siden af hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installationsprogrammet, vælger du {{ui:Flere oplysninger}} og derefter {{ui:Kør alligevel}}. På en Mac højreklikker du første gang på CadCraft Studio og vælger {{ui:Åbn}}. CadCraft Studio er ikke i en app store endnu, og der er ingen iPad- eller iPhone-build endnu.
- Vinkel- og hældningslisterne i {{ui:Enheder}} gemmes, men intet felt læser dem endnu.
- En DWG's OLE-objekter bevares, men vises ikke, og metafilbilleder inde i OLE-objekter tegnes ikke.
- At læse plotstilstabeller (CTB-filer) fra andre programmer venter på en eksempelfil.
- Ældre asiatisk tekst skrevet som `\M+`-koder læses, men er endnu ikke kontrolleret mod en fil fra et andet program.
- PDF-underlag: billeder inde i siden vises på skærmen, men plottes ikke, en assistents plot udelader underlag, og hvordan andre programmer læser den gemte beskæring og skala, er ikke kontrolleret i dem.
- Historik: CadCraft sender endnu ikke sine gemninger til skyen, så skyversionerne er dem, der er gemt fra andre enheder og nettet. Historik findes kun i CadCraft Studio.
- Om Studio beholder supportmappen til acad.lsp efter en genstart, er endnu ikke kontrolleret; hvis den spørger, så vælg mappen igen i APPLOAD.
- Panelet Laser er ikke prøvet på en rigtig laser endnu: afprøv hver indstilling på skrot. CadCraft Studio har ingen Web Serial, så i Studio gemmer panelet kun G-code.
- Registrering af scanninger er afprøvet på opdigtede scanninger, endnu ikke på en rigtig scanners sæt.
- Panorering med to fingre er prøvet med simulerede pegepladehændelser, endnu ikke på en rigtig pegeplade.
- {{cmd:PEDIT}} har intet tilvalg Rediger knudepunkt (brug greb eller Egenskaber). Forskyd, beskær, forlæng, afrund, bryd og sammenføj tager endnu ikke splines; en splines højde (Z) bevares ikke.
- Ny afsnitstekst kan endnu ikke få formateringskoder, og SVG-plot viser formateret tekst i én farve.
- WBLOCKs Hele tegningen skriver kun modellen, ikke arkene. Den aktuelle målsætningsstil gemmes ikke i filen: en tegning åbnes med Standard som aktuel.
- Båndets menustile har endnu ingen lister over lag, farver eller linjetyper: brug panelet {{ui:Lag}} og {{ui:Egenskaber}}.
- Punktskyer gemmes stadig ikke i tegningen og plottes ikke, og E57-filer åbnes op til 6 millioner punkter og 512 MB.
- CadCrafts gemte DWG-filer er endnu ikke kontrolleret i selve AutoCAD.

Alt andet står i [Ikke lavet endnu](topic:not-built-yet).
