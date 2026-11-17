---
title: Nyheter i 0.7 (tidigare)
summary: PDF-underlägg och PDF-import, skannade ritningar med automatisk spårning, riktiga splines med SPLINE, SPLINEDIT och PEDIT, en stilhanterare för mått, text som behåller sin formatering, WBLOCK och egna skalor, 3D-solider från andra program, registrering av skanningar, en Laser-panel, USD-export, Historik och utskrift i CadCraft Studio, en guidad första ritning, verktygsfältet på valfri sida eller i färre rader, och mer för AI-assistenter.
keywords: nyheter 0.7, tidigare version, versionsinformation, ändringslogg, ändringar, 0.7, version, nya funktioner, pdf, pdfattach, pdfimport, underlägg, skanning, scanattach, scantrace, spårning, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatering, wblock, scalelistedit, skalalista, acis, 3d-solider, registerscans, registrera skanningar, icp, e57, las, laser, grbl, g-kod, usd, usdout, historik, versioner, jämför, utskrift, skrivare, png, svg, plottabell, linjetyp, rundtur, fuskark, kommandokarta, verktygsfältets placering, verktygsfältsrader, toolbardock, regen, regenall, pekplatta, svep, kodsida, kyrilliska, koreanska, kinesiska, japanska, elektrisk, rcd, p&id, pid, acad.lsp, acaddoc.lsp, supportmapp, assistenter, mcp, enheter, portugisiska
from: d07ca034
---

Det här ändrades i CadCraft 0.7 jämfört med 0.6. Mycket av det efterfrågades på Discord. Listan är grupperad efter område, med det viktigaste först.

## Nytt

### PDF-filer och skannade ritningar

- **Lägg en PDF-sida under ritningen.** {{cmd:PDFATTACH}} (`PDFATT`) placerar en sida i sin verkliga storlek eller i en skala du anger. Snappa till dess linjer, tona bort den, gör den monokrom ({{cmd:PDFADJUST}}), klipp den ({{cmd:PDFCLIP}}) och växla PDF:ens egna lager ({{cmd:PDFLAYERS}}). Den plottas som linjer, fyllningar och text, och en DWG eller DXF 2000 behåller den som en länk till filen. Att öppna en PDF med {{ui:Öppna}} frågar om du vill bifoga eller importera den. Se [PDF-underlägg och PDF-import](topic:pdf-underlay).
- **Gör en PDF-sida till ritobjekt.** {{cmd:PDFIMPORT}} (`PDFIM`) gör linjer, polylinjer, cirklar, bågar, heltäckande skraffering och text på lager som är namngivna efter PDF:en, i verklig storlek, i en skala du anger, eller skalad utifrån två punkter och ett verkligt avstånd, i ett ångra-steg. Se [Importera en sida](topic:pdf-underlay#import-a-page).
- **Skannade ritningar.** {{cmd:SCANATTACH}} hämtar in en PNG, JPEG eller TIFF (en sida eller alla) eller en PDF-sida som är en bild. Skala den sedan utifrån två punkter ({{cmd:SCANSCALE}}), justera den ({{cmd:SCANALIGN}}), räta upp den utifrån dess egna långa linjer ({{cmd:SCANDESKEW}}), gör den svartvit och ta bort fläckar ({{cmd:SCANCLEAN}}), beskär den och radera delar av den. Varje steg är ett ångra-steg, och den ursprungliga filen behålls. Se [Skannade ritningar och spårningen](topic:scanned-drawings).
- **Spåra en skanning till linjer och bågar.** {{cmd:SCANTRACE}} ritar skanningens linjer som linjer och bågar på ett nytt lager, SCAN-TRACE, med en tolerans du anger, och lämnar text och skraffering som de är. Rapporten säger vad som gjordes och vad som lämnades, och den påstår inte att resultatet är rätt: kontrollera det mot bladet. {{cmd:RASTERSNAP}} gör att objektfångst kan hitta skanningens ändar, hörn och korsningar. Inget skickas någonstans och ingen tränad modell används. Se [Spårningen](topic:scanned-drawings#the-trace).

### Rita och redigera

- **Riktiga splines.** {{cmd:SPLINE}} (`SPL`) ritar en kurva genom punkter eller utifrån kontrollpunkter (grad 1 till 5), med ändtangenter; {{cmd:SPLINEDIT}} (`SPE`) flyttar, lägger till och tar bort anpassnings- eller kontrollpunkter, anger vikter, öppnar, stänger, vänder, eller gör en spline till en polylinje. Splines från DWG- och DXF-filer öppnas som splines, och DWG och DXF 2000 sparar dem som splines. Se [Splines och polylinjer](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) stänger och öppnar polylinjer, sammanfogar linjer och bågar med dem, anger en enda bredd, anpassar en kurva genom hörnen eller en spline längs dem och tar tillbaka den med Decurve, vänder, och redigerar flera på en gång. Se [Redigera en polylinje](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) skriver ett block, några objekt eller hela ritningen till en ny DWG- eller DXF-fil som bara innehåller de lager, stilar och block de använder. Se [Skriv ett block eller objekt till en egen fil](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN och REGENALL.** {{cmd:REGEN}} (`RE`) ritar om fliken du är på från ritningen, {{cmd:REGENALL}} (`REA`) varje flik, ruta och öppen ritning. Se [REGEN och REGENALL](topic:commands#regen-and-regenall).

### Text och mått

- **Text behåller sin formatering.** Styckestext från andra program behåller sina färger per ord, fetstil och kursiv, understrykning, staplade bråk och höjder: de ritas på skärmen och i PDF-filer, behålls när du redigerar orden, och sparas tillbaka. Se [Formatering i styckestext från andra program](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **En stilhanterare för mått.** {{cmd:DIMSTYLE}} (`D`) skapar, ändrar, jämför och tillämpar namngivna måttstilar; ändrar du en stil ändras varje mått som använder den. {{cmd:DIMEDIT}} (`DED`) återställer text, skriver ny text, vänder den eller lutar hjälplinjerna; {{cmd:DIMTEDIT}} flyttar texten till vänster, höger eller till mitten. Se [Namngivna måttstilar](topic:dimension-settings#named-dimension-styles).
- **Egna skalor.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) lägger till skalor som 1:75 i listorna för vyport- och utskriftsskala; de sparas i ritningen (DWG och DXF 2000), och en ritning från ett annat program tar med sin egen lista. Se [Skalor](topic:units-papers-scales#scales).
- **Text i andra alfabet.** DXF-filer sparade med kyrilliska, koreanska, kinesiska, japanska eller vietnamesiska kodsidor öppnas nu med sin text, och kinesisk, japansk och koreansk text skrivs ut i PDF-filer (plotten hämtar ett större teckensnitt första gången det behövs). Se [Teckensnitt](topic:text#font).

### Plotta och skriva ut

- **Mer i plottabeller.** För varje färg kan en tabell nu också ange en linjetyp, linjeändan och linjeanslutningen, samt en fyllningsstil som skriver ut heltäckande fyllningar som skraffering; tabellen har sin egen lista över linjetjocklekar och en linjetypsskala. Se [Plottabeller](topic:plot-pdf#plot-style-tables).
- **Utskrift, samt PNG- och SVG-filer.** Dialogrutan Plotta har {{ui:Skriv ut…}}, {{ui:Ladda ner PNG}} (300 dpi) och {{ui:Ladda ner SVG}}. I CadCraft Studio listar den datorns skrivare, deras papper och antalet kopior. Se [Utskrift](topic:plot-pdf#print) och [Bild- och SVG-filer](topic:plot-pdf#picture-and-svg-files).

### 3D och punktmoln

- **3D-solider från andra program.** Solider, regioner och kroppar i en ritnings modellrum visas på 3D-fliken, skrivskyddade, och en sparning som DWG skriver tillbaka dem oförändrade. Ytor på ytor som CadCraft ännu inte ritar listas, de gissas inte. Se [Solider från andra program](topic:3d-solids#solids-from-other-programs).
- **Registrera flera skanningar.** {{cmd:REGISTERSCANS}} (`REGSCAN`) placerar skanningar tagna från olika positioner i en gemensam ram, med punktpar eller angivna målkoordinater, förfinar dem med ICP, sparar registreringen som en liten projektfil och skriver det registrerade molnet som en LAS- eller E57-fil. Se [Registrera flera skanningar till en](topic:register-scans).
- **USD-export.** {{cmd:USDOUT}}, eller {{cmd:EXPORT3D}} › {{ui:USD}}, skriver soliderna på 3D-fliken som `.usda`, `.usdc` eller `.usdz`. Se [Exportera 3D-modellen som USD](topic:usd).
- **Beräkningar på 3D-fliken.** Där 3D-fliken:s verktyg frågar efter ett avstånd kan du skriva en beräkning, som på kommandoraden. Se [Räkning i ett skrivet värde](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Att tillverka saker

- **Skicka en ritning till en laser.** {{cmd:LASER}}, eller {{ui:Vy}} › {{ui:Mer}} › {{ui:Laser…}}, öppnar en panel över ritningen: varje lager skärs, ristas, gravera linjer, fyller former, graverar en bild eller skickas inte, med dess effekt, hastighet och genomgångar. Förhandsvisningen följer dina ändringar, {{ui:Spara G-kod…}} skriver GRBL-G-kod för lasterläge, och i Chrome eller Edge kan panelen rama in jobbet och skicka det över USB. Inställningarna sparas i ritningen (DWG och DXF). Se [Skicka en ritning till en laser](topic:laser-cutting).
- **Byggnadsinstallationssymboler i tillägget Elektrisk.** Uttag för data, telefon och TV, nyckel- och tidsbrytare, en termostat, nödutgångsskylt, detektorer, larmknapp och signalhorn, en fläkt, varmvattenberedare, spis, laddpunkt för elbil, energimätare och undercentral, samt RCD- och RCBO-symboler. En krets kan ha en RCD, centralschemat har en RCD-kolumn, och kontrollerna pekar ut uttagskretsar utan RCD på 30 mA eller mindre. Det är en påminnelse vid planering, inte en kodkontroll.
- **Ett P&ID-tillägg.** P&ID ritar processdiagram: symboler med anslutningspunkter, processlinjer och signallinjer, märkningar, linjenummer, förteckningar över linjer, apparater, instrument och ventiler (CSV eller en arbetsbok) samt kontroller. Det följer med CadCraft och är avstängt tills du slår på det i {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Tillägg}}. Det är ett ritningsstöd, inte ett tekniskt godkännande, och dess ord finns bara på engelska ännu.

### Komma igång och skärmen

- **En guidad första ritning.** {{cmd:TOUR}} (eller {{ui:Ta rundturen}} på startkortet) går igenom sex steg i den riktiga ritningen: en linje, en cirkel, en flyttning, en trimning, en radering och ett mått. Den startar av sig själv första gången CadCraft öppnas med inget i den. Se [Vill du ha en guidad genomgång?](topic:getting-started#prefer-to-be-guided)
- **Ett fuskark och en kommandokarta.** [Fuskarket](topic:cheat-sheet) har de 40 vanligaste kommandona på en sida, även som PDF att skriva ut, och [kommandokartan](topic:command-map) listar kommandon med sina korta namn, A till Ö.
- **Verktygsfältet på valfri sida.** {{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Verktygsfältets placering}}: upptill (som förut), nedtill, till vänster eller till höger, eller skriv {{cmd:TOOLBARDOCK}}. Se [Verktygsfältets placering](topic:settings#toolbar-position).
- **Verktygsfältsrader.** {{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Verktygsfältsrader}}: bryt för att passa, 2 rader eller 1 rad, för CadCraft-verktygsfältet och stilarna Drafting classic och Ribbon. {{key:Shift+Ctrl+F1}} växlar mellan dem, {{key:Ctrl+F1}} mellan vad knapparna visar, och {{cmd:TOOLBARROWS}} och {{cmd:TOOLBAR}} anger dem. Startraden har en stängningsknapp. Tack till GJoe2, som skickade detta som en pull request. Se [Verktygsfältsrader](topic:settings#toolbar-rows).

### I CadCraft Studio

- **Historik.** {{cmd:HISTORY}} (`HIST`), eller {{ui:Vy}} › {{ui:Mer}} › {{ui:Historik…}}: kopiorna Studio sparar när du öppnar och sparar en ritning, samt ritningens molnversioner när du öppnade den från molnet. Öppna eller återställ en, eller jämför två, med det som lagts till, tagits bort och ändrats visat i färg. Se [Historik](topic:history).
- **acad.lsp och acaddoc.lsp.** Välj en supportmapp i {{cmd:APPLOAD}}: de två filerna läses in när CadCraft startar (acaddoc.lsp igen för varje ny ritningsflik), och `S::STARTUP` körs efter dem. Se [Läs in program](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Dialogrutan Plotta i eget fönster.** En knapp i dess namnlist flyttar den till ett fönster som du kan placera på en annan bildskärm. Se [Flytta en dialogruta](common:arrange-panels#move-a-dialog).

### För AI-assistenter

- **Filer med namn, i mappar du väljer.** I CadCraft Studio kan en assistent öppna, spara och plotta filer med namn, och ge ett kommando den fil det frågar efter (INSERT från en fil, COUNT:s export, SAVEAS, PLOT), men bara inom de mappar du lägger till under {{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Assistenter}} › {{ui:Mappar den får använda}}. Se [Låt den använda filer i mappar du väljer](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Färre anrop.** En assistent kan skriva en hel kommandorad på en gång, behålla ett kommando öppet mellan sina anrop, räkna objekt efter typ och lager utan att lista dem, och placera ett block med dess attributvärden i ett steg.
- **Utan fönster.** Kommandoraden `cadcraft` skriver SVG-plottar och konverterar, plottar, kontrollerar eller beskriver många filer på en gång. MCP-paketet är inte publicerat ännu. Se [Arbeta med filer utan att öppna CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Ändrat

- **Pekplattan panorerar.** För två fingrar på en pekplatta så följer 2D-vyn dem; nypa och scrollhjulet zoomar. Se [Mus, pekplatta och touch](topic:mouse-trackpad-touch).
- **OLE-objekt behålls.** Ett DXF:s inbäddade objekt visas som sin bild eller som en märkt ram och sparas tillbaka med DXF 2000. Ett DWG:s behålls och skrivs tillbaka när du sparar som DWG, men visas ännu inte. Förut förlorades de vid sparning. Se [Objekt från andra program (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Enheterna i en ny ritning** följer den enhet du stjärnmärker i {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Enheter}}.

## Åtgärdat

- Layouter som öppnades tomma, eller som tappat en vyport och visade hela modellen i dess ställe, öppnas nu med sina riktiga vyportar. En layout utan koppling till sitt innehåll behålls, och öppningsrapporten säger det.
- DXF-filer i äldre kodsidor visade förvrängd kyrillisk och koreansk text. De läses rätt nu.
- Styckestext från andra program tappade sin formatering när den öppnades och sparades tillbaka som ren text.

## I alla appar

- **Enheter.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Enheter}} har en lista var för längd, area, volym, vinkel och lutning, med de exakta storlekarna som enheternas definitioner ger (den amerikanska mätfoten är en egen enhet). Stäng av de enheter du aldrig använder och de lämnar enhetslistorna; stjärnmärker du en börjar nytt arbete i den. En fil behåller alltid sin egen enhet. I CadCraft anger stjärnan enheterna för en ny ritning när det är en enhet en ritning kan ha; CadCraft:s egen ruta {{ui:Enheter}} följer inte omkopplarna ännu. När en ritning har enheter kan en längd du skriver bära vilken enhetsbeteckning som helst. Se [Enheter, skrivna värden och enhetslistorna](common:unit-lists).
- **En tätare layout och paneler som städar undan sig.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Layouttäthet}} › {{ui:Kompakt}} får plats med mer på skärmen (pekskärmar och telefoner behåller sina stora knappar). Varje sidopanel har en smal namnlist: dra den för att docka eller frigöra panelen, släpp den på en annan panels list för att dela en ram som flikar, fäst den så att den glider undan åt kanten, eller dölj den och hämta tillbaka den från kanten. Se [Ordna panelerna](common:arrange-panels#make-the-layout-denser).
- **Dialogrutor kan flyttas.** Dra en dialogruta i namnlisten ur vägen för ritningen; den kommer tillbaka dit du lämnade den. Dubbelklicka på namnlisten för att centrera den igen. Se [Flytta en dialogruta](common:arrange-panels#move-a-dialog).
- **Recept för AI-assistenter.** Tio exempel på förfrågningar till din egen assistent (städa en ritning, plotta ett set, kontrollera ritningar, ställa frågor om en modell, summera en mängdavtagning, prova en variant av en del…), vart och ett med de verktyg det anropar och de behörigheter det behöver, och vart och ett körs om av våra tester. Apparna innehåller ingen AI. Se [Recept för AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** är nytt i {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Språk}}. Det, **Português (Brasil)**, **Español (México)** och **Bahasa Indonesia** har nu alla ord i apparna, som utkast som ännu inte granskats av en modersmålstalare. Hjälpämnena är på engelska.
- **CadCraft Studio** säger varför en uppdateringskontroll misslyckades (ingen fil för ditt system ännu, inget nätverk, en felaktig signatur) i stället för bara "Klar", och slutar visa ett kort om Nyheter som du stängt tills det finns en nyare version.

## Ännu inte i den här versionen

- **0.7 är inte kodsignerad.** Signering och Microsoft Store-paketet flyttades till 0.8 eftersom certifikatvalideringen inte har kommit igenom ännu. Kontrollera SHA-256-värdet bredvid varje fil på getcadcraft.com/download. På Windows, om SmartScreen stoppar installationsprogrammet, välj {{ui:Mer information}}, sedan {{ui:Kör ändå}}. På en Mac, högerklicka första gången på CadCraft Studio och välj {{ui:Öppna}}. CadCraft Studio finns inte i någon appbutik ännu, och det finns ingen iPad- eller iPhone-version ännu.
- Vinkel- och lutningslistorna i {{ui:Enheter}} sparas, men ingen ruta läser dem ännu.
- En DWG:s OLE-objekt behålls men visas inte, och metafilsbilder inuti OLE-objekt ritas inte.
- Att läsa plottabeller (CTB-filer) från andra program väntar på en exempelfil.
- Äldre asiatisk text skriven som `\M+`-koder läses, men har inte kontrollerats mot en fil från ett annat program ännu.
- PDF-underlägg: bilder inuti sidan visas på skärmen men plottas inte, en assistents plot lämnar bort underlägg, och hur andra program läser den sparade klippningen och skalan har inte kontrollerats i dem.
- Historik: CadCraft skickar inte sina sparningar till molnet ännu, så molnversionerna är de som sparats från andra enheter och webben. Historik finns bara i CadCraft Studio.
- Om Studio behåller supportmappen acad.lsp efter en omstart har inte kontrollerats ännu; om den frågar, välj mappen igen i APPLOAD.
- Laser-panelen har inte prövats på en riktig laser ännu: testa varje inställning på skrot. CadCraft Studio har inget Web Serial, så i Studio sparar panelen bara G-kod.
- Registrering av skanningar har testats på påhittade skanningar, inte ännu på ett riktigt skannerset.
- Panorering med två fingrar har prövats med simulerade pekplattehändelser, inte ännu på en riktig pekplatta.
- {{cmd:PEDIT}} har inget alternativet Redigera hörn (använd handtag eller Egenskaper). Offset, trimning, förlängning, avrundning, brytning och sammanfogning tar inte splines ännu; en splines höjd (Z) behålls inte.
- Ny styckestext kan inte få formateringskoder ännu, och SVG-plottar visar formaterad text i en färg.
- WBLOCK:s Hela ritningen skriver bara modellen, inte bladen. Den aktuella måttstilen sparas inte i filen: en ritning öppnas med Standard som aktuell.
- Menyfliksstilarna har inga lager-, färg- eller linjetypslistor ännu: använd panelen {{ui:Lager}} och {{ui:Egenskaper}}.
- Punktmoln sparas fortfarande inte i ritningen och plottas inte, och E57-filer öppnas upp till 6 miljoner punkter och 512 MB.
- CadCraft:s sparade DWG-filer har ännu inte kontrollerats i AutoCAD självt.

Allt annat finns i [Inte byggt ännu](topic:not-built-yet).
