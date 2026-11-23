---
title: Nytt i 0.7 (tidligere)
summary: PDF-underlag og PDF-import, skannede tegninger med automatisk sporing, ekte splines med SPLINE, SPLINEDIT og PEDIT, en håndtering av måltilsettingsstiler, tekst som beholder formateringen sin, WBLOCK og egne målestokker, 3D-solids fra andre programmer, registrering av skanninger, et Laser-panel, USD-eksport, Historikk og utskrift i CadCraft Studio, en veiledet første tegning, verktøylinjen på hvilken som helst side eller i færre rader, og mer for KI-assistenter.
keywords: nytt i 0.7, tidligere utgivelse, utgivelsesnotater, endringslogg, endringer, 0.7, versjon, nye funksjoner, pdf, pdfattach, pdfimport, underlag, scan, scanattach, scantrace, trace, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatering, wblock, scalelistedit, skalaliste, acis, 3d solids, registerscans, registrer skanninger, icp, e57, las, laser, grbl, g-code, usd, usdout, historikk, versjoner, sammenlign, utskrift, skriver, png, svg, plottstil, linjetype, omvisning, jukseark, kommandooversikt, verktøylinjeplassering, verktøylinjerader, toolbardock, regen, regenall, trackpad, sveip, kodeside, kyrillisk, koreansk, kinesisk, japansk, elektro, rcd, p&id, pid, acad.lsp, acaddoc.lsp, støttemappe, assistenter, mcp, enheter, portugisisk
from: d9a8ea79
---

Dette er hva som endret seg i CadCraft 0.7, sammenlignet med 0.6. Mye av det var etterspurt på Discord. Listen er gruppert etter område, med det viktigste først.

## Nytt

### PDF-er og skannede tegninger

- **Legg en PDF-side under tegningen.** {{cmd:PDFATTACH}} (`PDFATT`) plasserer en side i sin virkelige størrelse, eller i en målestokk du skriver inn. Snapp til linjene, gjør den blekere, gjør den monokrom ({{cmd:PDFADJUST}}), klipp den ({{cmd:PDFCLIP}}) og bytt PDF-ens egne layer ({{cmd:PDFLAYERS}}). Den plottes som linjer, fyll og tekst, og en DWG eller DXF 2000 beholder den som en lenke til filen. Å åpne en PDF med {{ui:Åpne}} spør om du vil feste den eller importere den. Se [PDF-underlag og PDF-import](topic:pdf-underlay).
- **Gjør en PDF-side om til tegningsobjekter.** {{cmd:PDFIMPORT}} (`PDFIM`) lager linjer, polylinjer, sirkler, buer, heldekkende skravurer og tekst på layer oppkalt etter PDF-en, i virkelig størrelse, i en skrevet målestokk, eller skalert fra to punkter og en virkelig avstand, i ett angrestegg. Se [Importer en side](topic:pdf-underlay#import-a-page).
- **Skannede tegninger.** {{cmd:SCANATTACH}} henter inn en PNG, JPEG eller TIFF (én side eller alle), eller en PDF-side som er et bilde. Deretter skalerer du den fra to punkter ({{cmd:SCANSCALE}}), justerer den ({{cmd:SCANALIGN}}), retter den opp fra sine egne lange linjer ({{cmd:SCANDESKEW}}), gjør den svart-hvit og fjerner støv ({{cmd:SCANCLEAN}}), beskjærer den og sletter deler av den. Hvert steg er ett angrestegg, og originalfilen beholdes. Se [Skannede tegninger og sporing](topic:scanned-drawings).
- **Spor en skanning til linjer og buer.** {{cmd:SCANTRACE}} tegner skannens linjer som linjer og buer på et nytt layer, SCAN-TRACE, med en toleranse du setter, og lar tekst og skravur være. Rapporten sier hva den laget og hva den lot være. Den garanterer ikke at resultatet er riktig: kontroller det mot arket. {{cmd:RASTERSNAP}} lar objektfangene finne skannens ender, hjørner og kryss. Ingenting sendes noe sted, og ingen trent modell brukes. Se [Sporingen](topic:scanned-drawings#the-trace).

### Tegning og redigering

- **Ekte splines.** {{cmd:SPLINE}} (`SPL`) tegner en kurve gjennom punkter eller fra kontrollpunkter (grad 1 til 5), med endetangenter. {{cmd:SPLINEDIT}} (`SPE`) flytter, legger til og sletter innpasningspunkter eller kontrollpunkter, setter vekter, åpner, lukker og reverserer, eller gjør en spline om til en polylinje. Splines fra DWG- og DXF-filer åpnes som splines, og DWG og DXF 2000 lagrer dem som splines. Se [Splines og polylinjer](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) lukker og åpner polylinjer, kobler linjer og buer til dem, setter én bredde, tilpasser en kurve gjennom hjørnene eller en spline langs dem og tar den tilbake med Decurve, reverserer, og redigerer flere på én gang. Se [Rediger en polylinje](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) skriver en blokk, noen objekter eller hele tegningen til en ny DWG eller DXF som bare inneholder layerne, stilene og blokkene de bruker. Se [Skriv en blokk eller objekter til en egen fil](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN og REGENALL.** {{cmd:REGEN}} (`RE`) tegner fanen du er på, på nytt fra tegningen, og {{cmd:REGENALL}} (`REA`) tegner alle faner, ruter og åpne tegninger på nytt. Se [REGEN og REGENALL](topic:commands#regen-and-regenall).

### Tekst og dimensjoner

- **Tekst beholder formateringen sin.** Avsnittstekst fra andre programmer beholder farger per ord, fet og kursiv, understreking, stablede brøker og høyder: de tegnes på skjermen og i PDF-er, beholdes når du redigerer ordene, og lagres tilbake. Se [Formatering inne i avsnittstekst fra andre programmer](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **En håndtering av måltilsettingsstiler.** {{cmd:DIMSTYLE}} (`D`) lager, endrer, sammenligner og bruker navngitte måltilsettingsstiler. Endrer du en stil, endres hver måltilsetting som bruker den. {{cmd:DIMEDIT}} (`DED`) setter tekst tilbake, skriver ny tekst, snur den eller skrår hjelpelinjene. {{cmd:DIMTEDIT}} flytter teksten til venstre, høyre eller midten. Se [Navngitte måltilsettingsstiler](topic:dimension-settings#named-dimension-styles).
- **Dine egne målestokker.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) legger til målestokker som 1:75 i listene over målestokker for visningsområder og plott. De lagres i tegningen (DWG og DXF 2000), og en tegning fra et annet program tar med sin egen liste. Se [Målestokker](topic:units-papers-scales#scales).
- **Tekst i andre alfabeter.** DXF-filer lagret i kodesider for kyrillisk, koreansk, kinesisk, japansk eller vietnamesisk åpnes nå med teksten sin, og kinesisk, japansk og koreansk tekst skrives ut i PDF-er (plottet henter en større skrift første gang den trenger en). Se [Skrift](topic:text#font).

### Plott og utskrift

- **Mer i plottstiltabeller.** For hver farge kan en tabell nå også sette en linjetype, linjeenden og linjesammenføyningen, og en fyllstil som skriver ut heldekkende fyll som skravurlinjer. Tabellen har sin egen liste over linjevekter og en linjetypeskala. Se [Plottstiltabeller](topic:plot-pdf#plot-style-tables).
- **Utskrift, og PNG- og SVG-filer.** Plott-dialogen har {{ui:Skriv ut…}}, {{ui:Last ned PNG}} (300 dpi) og {{ui:Last ned SVG}}. I CadCraft Studio lister den datamaskinens skrivere, papiret deres og antall kopier. Se [Utskrift](topic:plot-pdf#print) og [Bilde- og SVG-filer](topic:plot-pdf#picture-and-svg-files).

### 3D og punktskyer

- **3D-solids fra andre programmer.** Solids, regioner og legemer i en tegnings modellrom vises på 3D-fanen, skrivebeskyttet, og lagring som DWG skriver dem tilbake uendret. Flater på overflater CadCraft ennå ikke tegner, listes opp i stedet for å gjettes. Se [Solids fra andre programmer](topic:3d-solids#solids-from-other-programs).
- **Registrer flere skanninger.** {{cmd:REGISTERSCANS}} (`REGSCAN`) plasserer skanninger tatt fra ulike posisjoner i én ramme, med punktpar eller skrevne målkoordinater. Den finjusterer dem med ICP, lagrer registreringen som en liten prosjektfil, og skriver den registrerte skyen som én LAS- eller E57-fil. Se [Registrer flere skanninger til én](topic:register-scans).
- **USD-eksport.** {{cmd:USDOUT}}, eller {{cmd:EXPORT3D}} › {{ui:USD}}, skriver solidene på 3D-fanen som `.usda`, `.usdc` eller `.usdz`. Se [Eksporter 3D-modellen som USD](topic:usd).
- **Beregninger på 3D-fanen.** Der verktøyene på 3D-fanen ber om en avstand, kan du skrive inn en beregning, slik som på kommandolinjen. Se [Aritmetikk i en skrevet verdi](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Lage ting

- **Send en tegning til en laser.** {{cmd:LASER}}, eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Laser…}}, åpner et panel over tegningen: hvert layer kutter, risser, graverer linjer, fyller former, graverer et bilde eller sendes ikke, med effekt, hastighet og gjennomganger. Forhåndsvisningen følger endringene dine. {{ui:Lagre G-kode…}} skriver GRBL-G-kode for lasermodus, og i Chrome eller Edge kan panelet ramme inn jobben og sende den over USB. Innstillingene lagres i tegningen (DWG og DXF). Se [Send en tegning til en laser](topic:laser-cutting).
- **Installasjonssymboler i tilleggspakken Elektrisk.** Uttak for data, telefon og TV, nøkkel- og tidsbrytere, en termostat, nødutgangsskilt, detektorer, meldepunkt og varsler, en vifte, varmtvannsbereder, komfyr, ladepunkt for elbil, energimåler og underfordeling, og RCD- og RCBO-symboler. En krets kan ha en RCD, tavleoversikten har en RCD-kolonne, og kontrollene nevner stikkontaktkretser uten RCD på 30 mA eller mindre. Det er en påminnelse for planlegging, ikke en normkontroll.
- **En P&ID-tilleggspakke.** P&ID tegner prosessdiagrammer: symboler med tilkoblingspunkter, prosess- og signallinjer, merker, linjenumre, lister over linjer, utstyr, instrumenter og ventiler (CSV eller en arbeidsbok), og kontroller. Den følger med CadCraft og er av til du slår den på i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Tillegg}}. Den er et tegnehjelpemiddel, ikke en godkjenning fra en ingeniør, og ordene den bruker, er foreløpig bare på engelsk.

### Komme i gang og skjermen

- **En veiledet første tegning.** {{cmd:TOUR}} (eller {{ui:Ta omvisningen}} på startkortet) fører deg gjennom seks steg i den virkelige tegningen: en linje, en sirkel, en flytting, en trim, en sletting og en måltilsetting. Den starter av seg selv første gang CadCraft åpnes med ingenting i. Se [Foretrekker du å bli veiledet?](topic:getting-started#prefer-to-be-guided)
- **Et jukseark og en kommandooversikt.** [Juksearket](topic:cheat-sheet) har de 40 vanligste kommandoene på én side, også som PDF til utskrift. [Kommandooversikten](topic:command-map) lister kommandoene med sine korte navn, fra A til Å.
- **Verktøylinjen på hvilken som helst side.** {{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Verktøylinjens plassering}}: øverst (som før), nederst, venstre eller høyre, eller skriv {{cmd:TOOLBARDOCK}}. Se [Verktøylinjens plassering](topic:settings#toolbar-position).
- **Verktøylinjerader.** {{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Verktøylinjerader}}: bryt for å passe, 2 rader eller 1 rad, for CadCraft-verktøylinjen og stilene Drafting classic og Bånd. {{key:Shift+Ctrl+F1}} går gjennom dem, {{key:Ctrl+F1}} gjennom det knappene viser, og {{cmd:TOOLBARROWS}} og {{cmd:TOOLBAR}} setter dem. Startveiledningen har en lukkeknapp. Takk til GJoe2, som sendte dette som en pull request. Se [Verktøylinjerader](topic:settings#toolbar-rows).

### I CadCraft Studio

- **Historikk.** {{cmd:HISTORY}} (`HIST`), eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Historikk…}}: kopiene Studio tar vare på når du åpner og lagrer en tegning, og tegningens skyversjoner når du åpnet den fra skyen. Åpne eller gjenopprett én, eller sammenlign to, med det som er lagt til, fjernet og endret vist i farger. Se [Historikk](topic:history).
- **acad.lsp og acaddoc.lsp.** Velg en støttemappe i {{cmd:APPLOAD}}: de to filene lastes når CadCraft starter (acaddoc.lsp igjen for hver ny tegningsfane), og `S::STARTUP` kjører etter dem. Se [Last inn applikasjoner](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Plott-dialogen i eget vindu.** En knapp i tittellinjen flytter den inn i et vindu du kan legge på en annen skjerm. Se [Flytt en dialogboks](common:arrange-panels#move-a-dialog).

### For KI-assistenter

- **Filer etter navn, i mapper du velger.** I CadCraft Studio kan en assistent åpne, lagre og plotte filer etter navn, og gi en kommando filen den ber om (INSERT fra en fil, COUNT sin eksport, SAVEAS, PLOT). Det skjer bare inni mappene du legger til under {{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Assistenter}} › {{ui:Mapper den kan bruke}}. Se [La den bruke filer i mapper du velger](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Færre kall.** En assistent kan skrive en hel kommandolinje på én gang, holde en kommando åpen mellom kallene sine, telle objekter etter type og layer uten å liste dem, og sette inn en blokk med verdiene til attributtene sine i ett steg.
- **Uten vindu.** Kommandolinjen `cadcraft` skriver SVG-plott og konverterer, plotter, kontrollerer eller beskriver mange filer samtidig. MCP-pakken er ikke publisert ennå. Se [Arbeid med filer uten å åpne CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Endret

- **Styreplaten panorerer.** Flytt to fingre på styreplaten, så følger 2D-visningen dem. Klyp og rullehjulet zoomer. Se [Mus, styreplate og berøring](topic:mouse-trackpad-touch).
- **OLE-objekter beholdes.** En DXF sine innebygde objekter vises som bildet sitt eller som en merket ramme, og lagres tilbake av DXF 2000. En DWG sine beholdes og skrives tilbake når du lagrer som DWG, men vises ikke ennå. Før gikk de tapt ved lagring. Se [Objekter fra andre programmer (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Enhetene i en ny tegning** følger enheten du merker i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Enheter}}.

## Rettet

- Layouter som åpnet tomme, eller som mistet et visningsområde og viste hele modellen i stedet, åpnes nå med sine virkelige visningsområder. En layout uten lenke til innholdet sitt beholdes, og åpningsrapporten sier det.
- DXF-filer i eldre kodesider viste ødelagt kyrillisk og koreansk tekst. De leses riktig nå.
- Avsnittstekst fra andre programmer mistet formateringen sin når den ble åpnet, og ble lagret tilbake som ren tekst.

## I alle programmer

- **Enheter.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Enheter}} har én liste hver for lengde, areal, volum, vinkel og helning, med de nøyaktige størrelsene enhetsdefinisjonene gir (amerikansk landmålerfot er sin egen enhet). Slå av enhetene du aldri bruker, så forsvinner de fra enhetslistene. Merk én, så starter nytt arbeid i den. En fil beholder alltid sin egen enhet. I CadCraft setter merket enheten for en ny tegning når det er en enhet en tegning kan ha. CadCraft sin egen {{ui:Enheter}}-boks følger ikke bryterne ennå. Når en tegning har enheter, kan en lengde du skriver inn ha et hvilket som helst enhetsmerke. Se [Enheter, skrevne verdier og enhetslistene](common:unit-lists).
- **Et tettere oppsett og paneler som ryddes vekk.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Layouttetthet}} › {{ui:Kompakt}} får plass til mer på skjermen. Berøringsskjermer og telefoner beholder de store knappene sine. Hvert sidepanel har en slank tittellinje: dra den for å feste eller løsne panelet, slipp den på et annet panels linje for å dele én ramme som faner, fest den for å skli bort til kanten, eller skjul den og hent den fra kanten igjen. Se [Ordne panelene](common:arrange-panels#make-the-layout-denser).
- **Dialoger kan flyttes.** Dra en dialog etter tittellinjen ut av veien for tegningen. Den kommer tilbake dit du slapp den. Dobbeltklikk på tittellinjen for å sentrere den igjen. Se [Flytt en dialogboks](common:arrange-panels#move-a-dialog).
- **Oppskrifter for KI-assistenter.** Ti arbeidseksempler for din egen assistent (rydde en tegning, plotte et sett, kontrollere tegninger, stille en modell spørsmål, summere et mengdeuttak, prøve en variant av en del …). Hver har verktøyene den kaller og tillatelsene den trenger, og hver kjøres på nytt av testene våre. Programmene inneholder ingen KI. Se [Oppskrifter for KI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** er nytt i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Språk}}. Den, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nå alle ordene i programmene, som utkast som ikke er gjennomgått av en morsmålstalende ennå. Hjelpeemner er på engelsk.
- **CadCraft Studio** sier hvorfor en oppdateringssjekk mislyktes (ingen fil for systemet ditt ennå, ingen nettverkstilgang, en ugyldig signatur), i stedet for bare «Ferdig». Den slutter også å hente tilbake «Nytt»-kortet du lukket, før det kommer en nyere utgivelse.

## Ikke i denne versjonen ennå

- **0.7 er ikke kodesignert.** Signering og Microsoft Store-pakken er flyttet til 0.8, fordi valideringen av sertifikatet ikke er kommet gjennom ennå. Kontroller SHA-256-verdien ved hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installasjonsprogrammet, velg {{ui:Mer info}}, og så {{ui:Kjør likevel}}. På en Mac: første gang, høyreklikk CadCraft Studio og velg {{ui:Åpne}}. CadCraft Studio finnes ikke i en app-butikk ennå, og det finnes ingen iPad- eller iPhone-versjon ennå.
- Vinkel- og helningslistene i {{ui:Enheter}} lagres, men ingen boks leser dem ennå.
- OLE-objekter i en DWG beholdes, men vises ikke, og metafilbilder inne i OLE-objekter tegnes ikke.
- Lesing av plottstiltabeller (CTB-filer) fra andre programmer venter på en eksempelfil.
- Eldre asiatisk tekst skrevet som `\M+`-koder leses, men den er ikke kontrollert mot en fil fra et annet program ennå.
- PDF-underlag: bilder inne i siden vises på skjermen, men plottes ikke. En assistents plott utelater underlag, og hvordan andre programmer leser det lagrede utklippet og målestokken, er ikke kontrollert i dem.
- Historikk: CadCraft sender ikke lagringene sine til skyen ennå, så skyversjonene er de som er lagret fra andre enheter og fra nettet. Historikk finnes bare i CadCraft Studio.
- Om Studio beholder støttemappen for acad.lsp etter en omstart, er ikke kontrollert ennå. Hvis den spør, velg mappen igjen i APPLOAD.
- Laser-panelet er ikke prøvd på en ekte laser ennå: test hver innstilling på avfall. CadCraft Studio har ingen Web Serial, så i Studio lagrer panelet bare G-kode.
- Registrering av skanninger er testet på oppdiktede skanninger, ikke ennå på et ekte skannersett.
- To-finger-panorering er prøvd med simulerte styreplatehendelser, ikke ennå på en ekte styreplate.
- {{cmd:PEDIT}} har ikke alternativet Rediger toppunkt (bruk håndtak eller Egenskaper). Forskyv, trim, forleng, avrunding, bryt og slå sammen tar ikke splines ennå. En splines høyde (Z) beholdes ikke.
- Ny avsnittstekst kan ikke gis formateringskoder ennå, og SVG-plott viser formatert tekst i én farge.
- WBLOCK sitt alternativ Hele tegningen skriver bare modellen, ikke arkene. Den gjeldende måltilsettingsstilen lagres ikke i filen: en tegning åpnes med Standard som gjeldende.
- Stilene for bånd-menyen har ingen layer-, farge- eller linjetypelister ennå: bruk panelet {{ui:Layer}} og {{ui:Egenskaper}}.
- Punktskyer lagres fortsatt ikke i tegningen og plottes ikke, og E57-filer åpnes opptil 6 millioner punkter og 512 MB.
- CadCraft sine lagrede DWG-filer er ikke kontrollert i AutoCAD selv ennå.

Alt annet finnes i [Ikke bygget ennå](topic:not-built-yet).
