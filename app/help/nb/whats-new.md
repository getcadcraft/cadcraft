---
title: Nytt i 0.7
summary: PDF-underlag og PDF-import, skannede tegninger med automatisk trasering, ekte splines med SPLINE, SPLINEDIT og PEDIT, en behandler for måltilsettingsstiler, tekst som beholder formateringen, WBLOCK og egne målestokker, 3D-volumer fra andre programmer, registrering av skanninger, et Laser-panel, USD-eksport, Historikk og utskrift i CadCraft Studio, en veiledet første tegning, verktøylinjen på hvilken som helst side eller i færre rader, og mer for AI-assistenter.
keywords: nytt, hva er nytt, utgivelsesnotater, endringslogg, endringer, 0.7, versjon, nye funksjoner, pdf, pdfattach, pdfimport, underlag, skanning, scanattach, scantrace, trasering, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatering, wblock, scalelistedit, målestokkliste, acis, 3d-volumer, registerscans, registrer skanninger, icp, e57, las, laser, grbl, g-kode, usd, usdout, historikk, versjoner, sammenlign, skriv ut, skriver, png, svg, plottstil, linjetype, omvisning, jukselapp, kommandokart, verktøylinjens plassering, verktøylinjerader, toolbardock, regen, regenall, styreflate, sveip, kodesider, kyrillisk, koreansk, kinesisk, japansk, elektro, rcd, p&id, pid, acad.lsp, acaddoc.lsp, støttemappe, assistenter, mcp, enheter, portugisisk
from: b9258ca6
---

Dette er det som er endret i CadCraft 0.7 sammenlignet med 0.6. Mye av det ble etterspurt på Discord. Listen er gruppert etter område, med det viktigste først.

## Nytt

### PDF-er og skannede tegninger

- **Legg en PDF-side under tegningen.** {{cmd:PDFATTACH}} (`PDFATT`) plasserer en side i sann størrelse eller en målestokk du skriver. Fang til linjene, tone den ned, gjør den monokrom ({{cmd:PDFADJUST}}), klipp den ({{cmd:PDFCLIP}}) og slå PDF-ens egne layer av og på ({{cmd:PDFLAYERS}}). Den plottes som linjer, fyll og tekst, og en DWG eller DXF 2000 beholder den som en lenke til filen. Å åpne en PDF med {{ui:Åpne}} spør om den skal legges ved eller importeres. Se [PDF-underlag og PDF-import](topic:pdf-underlay).
- **Gjør en PDF-side om til tegneobjekter.** {{cmd:PDFIMPORT}} (`PDFIM`) lager linjer, polylinjer, sirkler, buer, heldekkende skraveringer og tekst på layer oppkalt etter PDF-en, i sann størrelse, en innskrevet målestokk, eller skalert fra to punkter og en ekte avstand, i ett angretrinn. Se [Importer en side](topic:pdf-underlay#import-a-page).
- **Skannede tegninger.** {{cmd:SCANATTACH}} henter inn en PNG, JPEG eller TIFF (én side eller alle) eller en PDF-side som er et bilde. Deretter kan du skalere den fra to punkter ({{cmd:SCANSCALE}}), justere den ({{cmd:SCANALIGN}}), rette den opp etter sine egne lange linjer ({{cmd:SCANDESKEW}}), gjøre den svart-hvit og fjerne flekker ({{cmd:SCANCLEAN}}), beskjære den og viske ut deler av den. Hvert trinn er ett angretrinn, og originalfilen beholdes. Se [Skannede tegninger og traseringen](topic:scanned-drawings).
- **Trasér en skanning til linjer og buer.** {{cmd:SCANTRACE}} tegner skanningens linjer som linjer og buer på et nytt layer, SCAN-TRACE, med en toleranse du setter, og lar tekst og skravur stå som de er. Rapporten sier hva den laget og hva den lot ligge, og den hevder ikke at resultatet er riktig: kontroller det mot arket. {{cmd:RASTERSNAP}} lar objektfangene finne skanningens ender, hjørner og kryssinger. Ingenting sendes noe sted, og ingen trent modell brukes. Se [Traseringen](topic:scanned-drawings#the-trace).

### Tegning og redigering

- **Ekte splines.** {{cmd:SPLINE}} (`SPL`) tegner en kurve gjennom punkter eller fra kontrollpunkter (grad 1 til 5), med endetangenter; {{cmd:SPLINEDIT}} (`SPE`) flytter, legger til og sletter tilpasnings- eller kontrollpunkter, setter vekter, åpner, lukker, snur, eller gjør en spline om til en polylinje. Splines fra DWG- og DXF-filer åpnes som splines, og DWG og DXF 2000 lagrer dem som splines. Se [Splines og polylinjer](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) lukker og åpner polylinjer, slår linjer og buer sammen med dem, setter én bredde, tilpasser en kurve gjennom hjørnepunktene eller en spline langs dem og tar den tilbake med Decurve, snur, og redigerer flere samtidig. Se [Rediger en polylinje](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) skriver en blokk, noen objekter eller hele tegningen til en ny DWG eller DXF som bare inneholder layerne, stilene og blokkene de bruker. Se [Skriv en blokk eller objekter til en egen fil](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN og REGENALL.** {{cmd:REGEN}} (`RE`) tegner fanen du er på om fra tegningen, {{cmd:REGENALL}} (`REA`) hver fane, rute og åpne tegning. Se [REGEN og REGENALL](topic:commands#regen-and-regenall).

### Tekst og måltilsettinger

- **Tekst beholder formateringen.** Avsnittstekst fra andre programmer beholder fargene per ord, fet og kursiv, understreking, stablede brøker og høyder: de tegnes på skjermen og i PDF-er, beholdes når du redigerer ordene, og lagres tilbake. Se [Formatering i avsnittstekst fra andre programmer](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **En behandler for måltilsettingsstiler.** {{cmd:DIMSTYLE}} (`D`) lager, endrer, sammenligner og bruker navngitte måltilsettingsstiler; å endre en stil endrer hver måltilsetting som bruker den. {{cmd:DIMEDIT}} (`DED`) setter tilbake tekst, skriver ny tekst, dreier den eller skrår målhjelpelinjene; {{cmd:DIMTEDIT}} flytter teksten til venstre, til høyre eller til midten. Se [Navngitte måltilsettingsstiler](topic:dimension-settings#named-dimension-styles).
- **Egne målestokker.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) legger til målestokker som 1:75 i listene for visningsområde og plott; de lagres i tegningen (DWG og DXF 2000), og en tegning fra et annet program bringer med sin egen liste. Se [Målestokker](topic:units-papers-scales#scales).
- **Tekst i andre alfabeter.** DXF-filer lagret i kyrilliske, koreanske, kinesiske, japanske eller vietnamesiske kodesider åpnes nå med teksten sin, og kinesisk, japansk og koreansk tekst skrives ut i PDF-er (plottet henter en større font første gang den trengs). Se [Font](topic:text#font).

### Plotting og utskrift

- **Mer i plottstiltabeller.** For hver farge kan en tabell nå også sette en linjetype, linjeende og linjesammenføyning, og en fyllstil som skriver ut heldekkende fyll som skravurlinjer; tabellen har sin egen liste over linjevekter og en linjetypeskala. Se [Plottstiltabeller](topic:plot-pdf#plot-style-tables).
- **Skriv ut, og PNG- og SVG-filer.** Plott-dialogen har {{ui:Skriv ut…}}, {{ui:Last ned PNG}} (300 dpi) og {{ui:Last ned SVG}}. I CadCraft Studio lister den datamaskinens skrivere, papiret deres og antall kopier. Se [Skriv ut](topic:plot-pdf#print) og [Bilde- og SVG-filer](topic:plot-pdf#picture-and-svg-files).

### 3D og punktskyer

- **3D-volumer fra andre programmer.** Volumer, regioner og legemer i en tegnings modellrom vises på 3D-fanen, skrivebeskyttet, og å lagre som DWG skriver dem tilbake uendret. Flater på overflater CadCraft ikke tegner ennå, listes, ikke gjettes på. Se [Volumer fra andre programmer](topic:3d-solids#solids-from-other-programs).
- **Registrer flere skanninger.** {{cmd:REGISTERSCANS}} (`REGSCAN`) plasserer skanninger tatt fra ulike posisjoner i én ramme, ved punktpar eller innskrevne målkoordinater, finjusterer dem med ICP, lagrer registreringen som en liten prosjektfil, og skriver den registrerte skyen som én LAS- eller E57-fil. Se [Registrer flere skanninger til én](topic:register-scans).
- **USD-eksport.** {{cmd:USDOUT}}, eller {{cmd:EXPORT3D}} › {{ui:USD}}, skriver 3D-fanens volumer som `.usda`, `.usdc` eller `.usdz`. Se [Eksporter 3D-modellen som USD](topic:usd).
- **Beregninger på 3D-fanen.** Der 3D-fanens verktøy ber om en avstand, kan du skrive en beregning, som på kommandolinjen. Se [Regning i en innskrevet verdi](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Lage ting

- **Send en tegning til en laser.** {{cmd:LASER}}, eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Laser…}}, åpner et panel over tegningen: hvert layer skjærer, ripes, graverer linjer, fyller former, graverer et bilde eller sendes ikke, med effekt, hastighet og antall gjennomganger. Forhåndsvisningen følger redigeringene dine, {{ui:Lagre G-kode…}} skriver GRBL-G-kode i lasermodus, og i Chrome eller Edge kan panelet ramme inn jobben og sende den over USB. Innstillingene lagres i tegningen (DWG og DXF). Se [Send en tegning til en laser](topic:laser-cutting).
- **Symboler for bygningsinstallasjoner i tillegget Electrical.** Data-, telefon- og TV-uttak, nøkkel- og tidsbrytere, en termostat, nødutgangsskilt, detektorer, brannmelder og sirene, en vifte, varmtvannsbereder, komfyr, ladepunkt for elbil, energimåler og underfordeling, og symboler for RCD og RCBO. En kurs kan ha en RCD, tavlelisten har en RCD-kolonne, og kontrollene navngir stikkontaktkurser uten RCD på 30 mA eller mindre. Det er en planleggingspåminnelse, ikke en forskriftskontroll.
- **Et P&ID-tillegg.** P&ID tegner prosessdiagrammer: symboler med tilkoblingspunkter, prosess- og signallinjer, merker, linjenumre, lister over linjer, utstyr, instrumenter og ventiler (CSV eller en arbeidsbok) og kontroller. Det følger med CadCraft og er avslått til du slår det på i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Tillegg}}. Det er et tegnehjelpemiddel, ikke en ingeniørgodkjenning, og teksten er foreløpig bare på engelsk.

### Komme i gang og skjermen

- **En veiledet første tegning.** {{cmd:TOUR}} (eller {{ui:Ta omvisningen}} på startkortet) tar deg gjennom seks trinn i den virkelige tegningen: en linje, en sirkel, en flytting, en trimming, en sletting og en måltilsetting. Den starter av seg selv første gang CadCraft åpnes med ingenting i. Se [Foretrekker du veiledning?](topic:getting-started#prefer-to-be-guided)
- **En jukselapp og et kommandokart.** [Jukselappen](topic:cheat-sheet) har de 40 daglige kommandoene på én side, også som PDF til utskrift, og [kommandokartet](topic:command-map) lister kommandoer med kortnavnene deres, A til Å.
- **Verktøylinjen på hvilken som helst side.** {{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Verktøylinjens plassering}}: topp (som før), bunn, venstre eller høyre, eller skriv {{cmd:TOOLBARDOCK}}. Se [Verktøylinjens plassering](topic:settings#toolbar-position).
- **Verktøylinjerader.** {{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Verktøylinjerader}}: bryt for å passe, 2 rader eller 1 rad, for CadCraft-verktøylinjen og stilene Klassisk tegning og Bånd. {{key:Shift+Ctrl+F1}} går gjennom dem, {{key:Ctrl+F1}} gjennom det knappene viser, og {{cmd:TOOLBARROWS}} og {{cmd:TOOLBAR}} setter dem. Starthintet har en lukkeknapp. Takk til GJoe2, som sendte dette som en pull request. Se [Verktøylinjerader](topic:settings#toolbar-rows).

### I CadCraft Studio

- **Historikk.** {{cmd:HISTORY}} (`HIST`), eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Historikk…}}: kopiene Studio beholder når du åpner og lagrer en tegning, og tegningens skyversjoner når du åpnet den fra skyen. Åpne eller gjenopprett én, eller sammenlign to, med det som er lagt til, fjernet og endret vist i farger. Se [Historikk](topic:history).
- **acad.lsp og acaddoc.lsp.** Velg en støttemappe i {{cmd:APPLOAD}}: de to filene lastes når CadCraft starter (acaddoc.lsp på nytt for hver nye tegningsfane), og `S::STARTUP` kjører etter dem. Se [Last inn applikasjoner](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Plott-dialogen i et eget vindu.** En knapp i tittellinjen flytter den til et vindu du kan legge på en annen skjerm. Se [Flytt en dialog](common:arrange-panels#move-a-dialog).

### For AI-assistenter

- **Filer ved navn, i mapper du velger.** I CadCraft Studio kan en assistent åpne, lagre og plotte filer ved navn, og gi en kommando filen den ber om (INSERT fra en fil, COUNTs eksport, SAVEAS, PLOT), men bare inne i mappene du legger til under {{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Assistenter}} › {{ui:Mapper den kan bruke}}. Se [La den bruke filer i mapper du velger](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Færre kall.** En assistent kan skrive en hel kommandolinje på én gang, holde en kommando åpen mellom kallene sine, telle objekter etter type og layer uten å liste dem, og plassere en blokk med attributtverdiene sine i ett trinn.
- **Uten vindu.** Kommandolinjen `cadcraft` skriver SVG-plott og konverterer, plotter, kontrollerer eller beskriver mange filer på én gang. MCP-pakken er ikke publisert ennå. Se [Arbeid på filer uten å åpne CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Endret

- **En styreflate panorerer.** Flytt to fingre på en styreflate, og 2D-visningen følger dem; knip og musehjulet zoomer. Se [Mus, styreflate og berøring](topic:mouse-trackpad-touch).
- **OLE-objekter beholdes.** En DXFs innebygde objekter vises som bildet sitt eller som en merket ramme og lagres tilbake av DXF 2000. En DWGs beholdes og skrives tilbake når du lagrer som DWG, men vises ikke ennå. Før gikk de tapt ved lagring. Se [Objekter fra andre programmer (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Enhetene i en ny tegning** følger enheten du setter stjerne på i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Enheter}}.

## Rettet

- Layouter som åpnet tomme, eller mistet et visningsområde og viste hele modellen i stedet, åpnes nå med de virkelige visningsområdene sine. En layout uten lenke til innholdet beholdes, og åpningsrapporten sier det.
- DXF-filer i eldre kodesider viste forvansket kyrillisk og koreansk tekst. De leses riktig nå.
- Avsnittstekst fra andre programmer mistet formateringen da den ble åpnet og ble lagret tilbake som ren tekst.

## I alle apper

- **Enheter.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Enheter}} har én liste hver for lengde, areal, volum, vinkel og helling, med de eksakte størrelsene enhetenes definisjoner gir (den amerikanske målefoten er sin egen enhet). Slå av enhetene du aldri bruker, så forlater de enhetslistene; sett stjerne på én, så starter nytt arbeid i den. En fil beholder alltid sin egen enhet. I CadCraft setter stjernen enhetene i en ny tegning når det er en enhet en tegning kan bære; CadCrafts egen boks {{ui:Enheter}} følger ikke bryterne ennå. Når en tegning har enheter, kan en lengde du skriver, bære merket til en hvilken som helst enhet. Se [Enheter, innskrevne verdier og enhetslistene](common:unit-lists).
- **Et tettere oppsett og paneler som ryddes bort.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Layouttetthet}} › {{ui:Kompakt}} får plass til mer på skjermen (berøringsskjermer og telefoner beholder de store knappene). Hvert sidepanel har en smal tittellinje: dra den for å feste eller frigjøre panelet, slipp den på et annet panels linje for å dele én ramme som faner, fest det for å gli bort til kanten, eller skjul det og hent det tilbake fra kanten. Se [Ordne panelene](common:arrange-panels#make-the-layout-denser).
- **Dialoger flyttes.** Dra en dialog etter tittellinjen ut av veien for tegningen; den kommer tilbake der du lot den stå. Dobbeltklikk tittellinjen for å sentrere den igjen. Se [Flytt en dialog](common:arrange-panels#move-a-dialog).
- **Oppskrifter for AI-assistenter.** Ti gjennomarbeidede forespørsler til din egen assistent (rydd en tegning, plott et sett, kontroller tegninger, still en modell spørsmål, summer et mengdeuttak, prøv en delvariant …), hver med verktøyene den kaller og tillatelsene den trenger, og hver avspilt av testene våre. Appene inneholder ingen AI. Se [Oppskrifter for AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** er nytt i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Språk}}. Det, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nå hvert ord i appene, som utkast som ennå ikke er gjennomgått av en morsmålsbruker. Hjelpeemnene er på engelsk.
- **CadCraft Studio** sier hvorfor en oppdateringskontroll feilet (ingen fil for systemet ditt ennå, ingen nettverk, en ugyldig signatur) i stedet for bare «Ferdig», og slutter å hente tilbake et Nytt-kort du lukket før det finnes en nyere utgivelse.

## Ikke i denne versjonen ennå

- **0.7 er ikke kodesignert.** Signering, og Microsoft Store-pakken, ble flyttet til 0.8 fordi sertifikatvalideringen ikke har kommet gjennom ennå. Kontroller SHA-256 ved siden av hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installasjonsprogrammet, velg {{ui:Mer informasjon}}, deretter {{ui:Kjør likevel}}. På en Mac høyreklikker du CadCraft Studio første gang og velger {{ui:Åpne}}. CadCraft Studio er ikke i en appbutikk ennå, og det finnes ingen iPad- eller iPhone-versjon ennå.
- Vinkel- og hellingslistene i {{ui:Enheter}} lagres, men ingen boks leser dem ennå.
- En DWGs OLE-objekter beholdes, men vises ikke, og metafilbilder inne i OLE-objekter tegnes ikke.
- Å lese plottstiltabeller (CTB-filer) fra andre programmer venter på en eksempelfil.
- Eldre asiatisk tekst skrevet som `\M+`-koder leses, men er ikke kontrollert mot en fil fra et annet program ennå.
- PDF-underlag: bilder inne i siden vises på skjermen, men plottes ikke, en assistents plott utelater underlag, og hvordan andre programmer leser det lagrede klippet og målestokken er ikke kontrollert i dem.
- Historikk: CadCraft sender ikke lagringene sine til skyen ennå, så skyversjonene er de som er lagret fra andre enheter og nettet. Historikk finnes bare i CadCraft Studio.
- Om Studio beholder støttemappen for acad.lsp etter en omstart, er ikke kontrollert ennå; hvis den spør, velg mappen igjen i APPLOAD.
- Laser-panelet er ikke prøvd på en ekte laser ennå: test hver innstilling på skrap. CadCraft Studio har ingen Web Serial, så i Studio lagrer panelet bare G-kode.
- Registrering av skanninger er testet på oppdiktede skanninger, ennå ikke på et ekte skannersett.
- Panorering med to fingre er prøvd med simulerte styreflatehendelser, ennå ikke på en ekte styreflate.
- {{cmd:PEDIT}} har ikke alternativet Rediger hjørnepunkt (bruk håndtak eller Egenskaper). Forskyv, trim, forleng, avrund, bryt og slå sammen tar ikke splines ennå; en splines høyde (Z) beholdes ikke.
- Ny avsnittstekst kan ikke gis formateringskoder ennå, og SVG-plott viser formatert tekst i én farge.
- WBLOCKs Hele tegningen skriver bare modellen, ikke arkene. Den gjeldende måltilsettingsstilen lagres ikke i filen: en tegning åpnes med Standard som gjeldende.
- Bånd-menystilene har ingen lister over layer, farger eller linjetyper ennå: bruk panelet {{ui:Layer}} og {{ui:Egenskaper}}.
- Punktskyer lagres fortsatt ikke i tegningen eller plottes, og E57-filer åpnes opp til 6 millioner punkter og 512 MB.
- CadCrafts lagrede DWG-filer er ikke kontrollert i AutoCAD selv ennå.

Alt annet står i [Ikke bygget ennå](topic:not-built-yet).
