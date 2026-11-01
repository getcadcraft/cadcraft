---
title: Nyheter i 0.7
summary: PDF-underlag och PDF-import, skannade ritningar med automatisk spårning, riktiga splines med SPLINE, SPLINEDIT och PEDIT, en måttstilshanterare, text som behåller sin formatering, WBLOCK och egna skalor, 3D-solider från andra program, registrering av skanningar, en Laser-panel, USD-export, Historik och utskrift i CadCraft Studio, en guidad första ritning, verktygsfältet på valfri sida eller i färre rader, och mer för AI-assistenter.
keywords: nyheter, vad är nytt, versionsanteckningar, ändringslogg, ändringar, 0.7, version, nya funktioner, pdf, pdfattach, pdfimport, underlag, skanning, scanattach, scantrace, spårning, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatering, wblock, scalelistedit, skallista, acis, 3d-solider, registerscans, registrera skanningar, icp, e57, las, laser, grbl, g-kod, usd, usdout, historik, versioner, jämför, skriv ut, skrivare, png, svg, plottstil, linjetyp, rundtur, fusklapp, kommandokarta, verktygsfältets placering, verktygsfältsrader, toolbardock, regen, regenall, styrplatta, svep, teckentabell, kyrilliska, koreanska, kinesiska, japanska, el, rcd, p&id, pid, acad.lsp, acaddoc.lsp, supportmapp, assistenter, mcp, enheter, portugisiska
from: b9258ca6
---

Det här är vad som ändrades i CadCraft 0.7 jämfört med 0.6. Mycket av det efterfrågades på Discord. Listan är grupperad efter område, med det viktigaste först.

## Nytt

### PDF:er och skannade ritningar

- **Lägg en PDF-sida under ritningen.** {{cmd:PDFATTACH}} (`PDFATT`) placerar en sida i sann storlek eller i en skala du skriver. Fånga till dess linjer, tona ned den, gör den enfärgad ({{cmd:PDFADJUST}}), beskär den ({{cmd:PDFCLIP}}) och slå av och på PDF:ens egna lager ({{cmd:PDFLAYERS}}). Den plottas som linjer, fyllningar och text, och en DWG eller DXF 2000 behåller den som en länk till filen. När du öppnar en PDF med {{ui:Öppna}} får du frågan om du vill bifoga eller importera den. Se [PDF-underlag och PDF-import](topic:pdf-underlay).
- **Gör en PDF-sida till ritobjekt.** {{cmd:PDFIMPORT}} (`PDFIM`) skapar linjer, polylinjer, cirklar, bågar, heltäckande skraffering och text på lager uppkallade efter PDF:en, i sann storlek, i en skala du skriver eller skalat från två punkter och ett verkligt avstånd, i ett ångrasteg. Se [Importera en sida](topic:pdf-underlay#import-a-page).
- **Skannade ritningar.** {{cmd:SCANATTACH}} hämtar in en PNG, JPEG eller TIFF (en sida eller alla) eller en PDF-sida som är en bild. Skala den sedan från två punkter ({{cmd:SCANSCALE}}), justera den ({{cmd:SCANALIGN}}), räta upp den efter dess egna långa linjer ({{cmd:SCANDESKEW}}), gör den svartvit och ta bort fläckar ({{cmd:SCANCLEAN}}), beskär den och radera delar av den. Varje steg är ett ångrasteg och originalfilen behålls. Se [Skannade ritningar och spårningen](topic:scanned-drawings).
- **Spåra en skanning till linjer och bågar.** {{cmd:SCANTRACE}} ritar skanningens linjer som linjer och bågar på ett nytt lager, SCAN-TRACE, med en tolerans du anger, och lämnar text och skraffering som de är. Rapporten säger vad den gjorde och vad den lämnade, och den är inget påstående om att resultatet är rätt: kontrollera det mot bladet. {{cmd:RASTERSNAP}} låter objektfångster hitta skanningens ändar, hörn och skärningar. Inget skickas någonstans och ingen tränad modell används. Se [Spårningen](topic:scanned-drawings#the-trace).

### Rita och redigera

- **Riktiga splines.** {{cmd:SPLINE}} (`SPL`) ritar en kurva genom punkter eller från kontrollpunkter (grad 1 till 5), med ändtangenter; {{cmd:SPLINEDIT}} (`SPE`) flyttar, lägger till och tar bort pass- eller kontrollpunkter, sätter vikter, öppnar, stänger, vänder eller gör om en spline till en polylinje. Splines från DWG- och DXF-filer öppnas som splines, och DWG och DXF 2000 sparar dem som splines. Se [Splines och polylinjer](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) stänger och öppnar polylinjer, sammanfogar linjer och bågar med dem, sätter en bredd, anpassar en kurva genom hörnpunkterna eller en spline längs dem och tar tillbaka den med Decurve, vänder och redigerar flera på en gång. Se [Redigera en polylinje](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) skriver ett block, några objekt eller hela ritningen till en ny DWG eller DXF som bara innehåller de lager, stilar och block de använder. Se [Skriv ett block eller objekt till en egen fil](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN och REGENALL.** {{cmd:REGEN}} (`RE`) ritar om fliken du är på från ritningen, {{cmd:REGENALL}} (`REA`) varje flik, ruta och öppen ritning. Se [REGEN och REGENALL](topic:commands#regen-and-regenall).

### Text och mått

- **Text behåller sin formatering.** Styckestext från andra program behåller färger per ord, fet stil och kursiv, understrykning, staplade bråk och höjder: de ritas på skärmen och i PDF:er, behålls när du redigerar orden och sparas tillbaka. Se [Formatering i styckestext från andra program](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **En måttstilshanterare.** {{cmd:DIMSTYLE}} (`D`) skapar, ändrar, jämför och tillämpar namngivna måttstilar; om du ändrar en stil ändras varje mått som använder den. {{cmd:DIMEDIT}} (`DED`) återställer text, skriver ny text, vrider den eller lutar hjälplinjerna; {{cmd:DIMTEDIT}} flyttar texten åt vänster, åt höger eller till mitten. Se [Namngivna måttstilar](topic:dimension-settings#named-dimension-styles).
- **Dina egna skalor.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) lägger till skalor som 1:75 i listorna för vyport- och plottskalor; de sparas i ritningen (DWG och DXF 2000), och en ritning från ett annat program tar med sin egen lista. Se [Skalor](topic:units-papers-scales#scales).
- **Text i andra alfabet.** DXF-filer sparade i kyrilliska, koreanska, kinesiska, japanska eller vietnamesiska teckentabeller öppnas nu med sin text, och kinesisk, japansk och koreansk text skrivs ut i PDF:er (plottningen hämtar ett större typsnitt första gången den behöver ett). Se [Typsnitt](topic:text#font).

### Plotta och skriva ut

- **Mer i plottstilstabeller.** För varje färg kan en tabell nu också ange en linjetyp, linjeände och linjeskarv, och en fyllningsstil som skriver ut heltäckande fyllningar som skrafferingslinjer; tabellen har en egen lista över linjetjocklekar och en linjetypsskala. Se [Plottstilstabeller](topic:plot-pdf#plot-style-tables).
- **Skriv ut, och PNG- och SVG-filer.** Plottdialogen har {{ui:Skriv ut…}}, {{ui:Ladda ner PNG}} (300 dpi) och {{ui:Ladda ner SVG}}. I CadCraft Studio listar den datorns skrivare, deras papper och antalet kopior. Se [Skriv ut](topic:plot-pdf#print) och [Bild- och SVG-filer](topic:plot-pdf#picture-and-svg-files).

### 3D och punktmoln

- **3D-solider från andra program.** Solider, regioner och kroppar i en ritnings modellrum visas på fliken 3D, skrivskyddade, och att spara som DWG skriver tillbaka dem oförändrade. Ytor på ytmodeller som CadCraft inte ritar ännu listas, de gissas inte. Se [Solider från andra program](topic:3d-solids#solids-from-other-programs).
- **Registrera flera skanningar.** {{cmd:REGISTERSCANS}} (`REGSCAN`) placerar skanningar tagna från olika positioner i ett gemensamt system, med punktpar eller inskrivna målkoordinater, förfinar dem med ICP, sparar registreringen som en liten projektfil och skriver det registrerade molnet som en LAS- eller E57-fil. Se [Registrera flera skanningar till en](topic:register-scans).
- **USD-export.** {{cmd:USDOUT}}, eller {{cmd:EXPORT3D}} › {{ui:USD}}, skriver 3D-flikens solider som `.usda`, `.usdc` eller `.usdz`. Se [Exportera 3D-modellen som USD](topic:usd).
- **Beräkningar på fliken 3D.** Där 3D-flikens verktyg ber om ett avstånd kan du skriva en beräkning, som på kommandoraden. Se [Aritmetik i ett inskrivet värde](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Tillverkning

- **Skicka en ritning till en laser.** {{cmd:LASER}}, eller {{ui:Vy}} › {{ui:Mer}} › {{ui:Laser…}}, öppnar en panel över ritningen: varje lager skär, ristar, graverar linjer, fyller former, graverar en bild eller skickas inte, med sin effekt, hastighet och antal varv. Förhandsvisningen följer dina ändringar, {{ui:Spara G-kod…}} skriver G-kod för GRBL:s laserläge, och i Chrome eller Edge kan panelen rama in jobbet och skicka det över USB. Inställningarna sparas i ritningen (DWG och DXF). Se [Skicka en ritning till en laser](topic:laser-cutting).
- **Installationssymboler för byggnader i tillägget Electrical.** Uttag för data, telefon och TV, trappautomat och tidur, en termostat, utgångsskylt, detektorer, brandlarmsknapp och siren, en fläkt, varmvattenberedare, spis, laddpunkt för elbil, energimätare och undercentral, samt symboler för jordfelsbrytare (RCD och RCBO). En krets kan ha en RCD, gruppförteckningen har en RCD-kolumn och kontrollerna pekar ut uttagskretsar utan RCD på 30 mA eller lägre. Det är en planeringspåminnelse, inte en kodkontroll.
- **Ett P&ID-tillägg.** P&ID ritar processchemor: symboler med anslutningspunkter, process- och signallinjer, taggar, ledningsnummer, listor över ledningar, utrustning, instrument och ventiler (CSV eller en arbetsbok) samt kontroller. Det följer med CadCraft och är avstängt tills du slår på det i {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Tillägg}}. Det är ett ritstöd, inget tekniskt godkännande, och dess ord är bara på engelska för närvarande.

### Komma igång och skärmen

- **En guidad första ritning.** {{cmd:TOUR}} (eller {{ui:Ta rundturen}} på startkortet) tar dig genom sex steg i den riktiga ritningen: en linje, en cirkel, en flytt, en trimning, en radering och ett mått. Den startar av sig själv första gången CadCraft öppnas med inget i. Se [Vill du hellre bli guidad?](topic:getting-started#prefer-to-be-guided)
- **En fusklapp och en kommandokarta.** [Fusklappen](topic:cheat-sheet) har de 40 vardagskommandona på en sida, också som PDF att skriva ut, och [kommandokartan](topic:command-map) listar kommandon med sina korta namn, A till Ö.
- **Verktygsfältet på valfri sida.** {{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Verktygsfältets placering}}: överst (som förut), nederst, till vänster eller till höger, eller skriv {{cmd:TOOLBARDOCK}}. Se [Verktygsfältets placering](topic:settings#toolbar-position).
- **Verktygsfältsrader.** {{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Verktygsfältsrader}}: radbryt för att passa, 2 rader eller 1 rad, för CadCraft-verktygsfältet och stilarna Klassiskt ritprogram och Menyflik. {{key:Shift+Ctrl+F1}} stegar igenom dem, {{key:Ctrl+F1}} igenom det knapparna visar, och {{cmd:TOOLBARROWS}} och {{cmd:TOOLBAR}} ställer in dem. Starttipset har en stängknapp. Tack till GJoe2, som skickade in detta som en pull request. Se [Verktygsfältsrader](topic:settings#toolbar-rows).

### I CadCraft Studio

- **Historik.** {{cmd:HISTORY}} (`HIST`), eller {{ui:Vy}} › {{ui:Mer}} › {{ui:Historik…}}: de kopior Studio behåller när du öppnar och sparar en ritning, och ritningens molnversioner när du öppnade den från molnet. Öppna eller återställ en, eller jämför två, med det som lagts till, tagits bort och ändrats visat i färg. Se [Historik](topic:history).
- **acad.lsp och acaddoc.lsp.** Välj en supportmapp i {{cmd:APPLOAD}}: de två filerna läses in när CadCraft startar (acaddoc.lsp igen för varje ny ritningsflik), och `S::STARTUP` körs efter dem. Se [Läs in tillämpningar](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Plottdialogen i ett eget fönster.** En knapp i dess namnlist flyttar den till ett fönster som du kan lägga på en annan skärm. Se [Flytta en dialogruta](common:arrange-panels#move-a-dialog).

### För AI-assistenter

- **Filer med namn, i mappar du väljer.** I CadCraft Studio kan en assistent öppna, spara och plotta filer med namn, och ge ett kommando den fil det ber om (INSERT från en fil, COUNT:s export, SAVEAS, PLOT), men bara inom de mappar du lägger till under {{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Assistenter}} › {{ui:Mappar den får använda}}. Se [Låt den använda filer i mappar du väljer](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Färre anrop.** En assistent kan skriva en hel kommandorad på en gång, hålla ett kommando öppet mellan sina anrop, räkna objekt efter typ och lager utan att lista dem och placera ett block med sina attributvärden i ett steg.
- **Utan fönster.** Kommandoraden `cadcraft` skriver SVG-plottar och konverterar, plottar, kontrollerar eller beskriver många filer på en gång. MCP-paketet är inte publicerat ännu. Se [Arbeta med filer utan att öppna CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Ändrat

- **En styrplatta panorerar.** Rör två fingrar på en styrplatta så följer 2D-vyn med; nyp och mushjulet zoomar. Se [Mus, styrplatta och touch](topic:mouse-trackpad-touch).
- **OLE-objekt behålls.** En DXF:s inbäddade objekt visas som sin bild eller som en märkt ram och sparas tillbaka av DXF 2000. En DWG:s behålls och skrivs tillbaka när du sparar som DWG, men visas inte ännu. Förut gick de förlorade vid sparning. Se [Objekt från andra program (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Enheterna i en ny ritning** följer den enhet du stjärnmärker i {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Enheter}}.

## Åtgärdat

- Layouter som öppnades tomma, eller förlorade en vyport och visade hela modellen i dess ställe, öppnas nu med sina riktiga vyportar. En layout utan länk till sitt innehåll behålls och öppningsrapporten säger det.
- DXF-filer i äldre teckentabeller visade förvanskad kyrillisk och koreansk text. De läses nu rätt.
- Styckestext från andra program förlorade sin formatering när den öppnades och sparades tillbaka som oformaterad.

## I alla appar

- **Enheter.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Enheter}} har en lista var för längd, area, volym, vinkel och lutning, med de exakta storlekar som enheternas definitioner ger (den amerikanska lantmäterifoten är en egen enhet). Stäng av de enheter du aldrig använder så försvinner de ur enhetslistorna; stjärnmärk en så börjar nytt arbete i den. En fil behåller alltid sin egen enhet. I CadCraft anger stjärnan enheterna i en ny ritning när det är en enhet som en ritning kan ha; CadCrafts egen ruta {{ui:Enheter}} följer inte omkopplarna ännu. När en ritning väl har enheter kan en längd du skriver ha vilken enhets beteckning som helst. Se [Enheter, inskrivna värden och enhetslistorna](common:unit-lists).
- **En tätare layout och paneler som städas undan.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Layouttäthet}} › {{ui:Kompakt}} ryms mer på skärmen (pekskärmar och telefoner behåller sina stora knappar). Varje sidopanel har en smal namnlist: dra den för att docka eller frigöra panelen, släpp den på en annan panels list för att dela en ram som flikar, fäst den för att glida undan mot kanten, eller dölj den och hämta tillbaka den från kanten. Se [Ordna panelerna](common:arrange-panels#make-the-layout-denser).
- **Dialogrutor flyttas.** Dra en dialogruta i dess namnlist ur vägen för ritningen; den kommer tillbaka där du lämnade den. Dubbelklicka på namnlisten för att centrera den igen. Se [Flytta en dialogruta](common:arrange-panels#move-a-dialog).
- **Recept för AI-assistenter.** Tio genomarbetade förfrågningar till din egen assistent (städa en ritning, plotta en sats, kontrollera ritningar, ställa frågor till en modell, summera en mängdavtagning, prova en delvariant …), var och en med de verktyg den anropar och de behörigheter den behöver, och var och en återspelad av våra tester. Apparna innehåller ingen AI. Se [Recept för AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** är nytt i {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Språk}}. Det, **Português (Brasil)**, **Español (México)** och **Bahasa Indonesia** har nu varje ord i apparna, som utkast som ännu inte granskats av en modersmålstalare. Hjälpavsnitt finns till att börja med också på dessa språk, bland dem svenska; övriga hjälpavsnitt är fortfarande på engelska där ingen översättning finns.
- **CadCraft Studio** säger varför en uppdateringskontroll misslyckades (ingen fil för ditt system ännu, inget nätverk, en felaktig signatur) i stället för bara ”Klar”, och slutar visa ett Nyheter-kort du har stängt tills det finns en nyare version.

## Finns inte i den här versionen ännu

- **0.7 är inte kodsignerad.** Signering och Microsoft Store-paketet flyttades till 0.8 eftersom certifikatvalideringen inte har kommit igenom. Kontrollera SHA-256-summan bredvid varje fil på getcadcraft.com/download. Om SmartScreen stoppar installationsprogrammet i Windows väljer du {{ui:Mer information}} och sedan {{ui:Kör ändå}}. På en Mac högerklickar du första gången på CadCraft Studio och väljer {{ui:Öppna}}. CadCraft Studio finns inte i någon appbutik ännu, och det finns inget bygge för iPad eller iPhone ännu.
- Vinkel- och lutningslistorna i {{ui:Enheter}} sparas, men ingen ruta läser dem ännu.
- En DWG:s OLE-objekt behålls men visas inte, och metafilsbilder inuti OLE-objekt ritas inte.
- Att läsa plottstilstabeller (CTB-filer) från andra program väntar på en exempelfil.
- Äldre asiatisk text skriven som `\M+`-koder läses, men har ännu inte kontrollerats mot en fil från ett annat program.
- PDF-underlag: bilder inuti sidan visas på skärmen men plottas inte, en assistents plottning utelämnar underlag, och hur andra program läser den sparade beskärningen och skalan har inte kontrollerats i dem.
- Historik: CadCraft skickar inte sina sparningar till molnet ännu, så molnversionerna är de som sparats från andra enheter och webben. Historik finns bara i CadCraft Studio.
- Om Studio behåller supportmappen för acad.lsp efter en omstart har inte kontrollerats ännu; om den frågar, välj mappen igen i APPLOAD.
- Laser-panelen har inte provats på en riktig laser ännu: testa varje inställning på spillmaterial. CadCraft Studio har inget Web Serial, så i Studio sparar panelen bara G-kod.
- Registrering av skanningar har testats på påhittade skanningar, ännu inte på en riktig skanners uppsättning.
- Panorering med två fingrar har provats med simulerade styrplattehändelser, ännu inte på en riktig styrplatta.
- {{cmd:PEDIT}} har inget alternativ Edit vertex (använd handtag eller Egenskaper). Förskjut, trimma, förläng, avrunda, bryt och sammanfoga hanterar inte splines ännu; en splines höjd (Z) behålls inte.
- Ny styckestext kan ännu inte ges formateringskoder, och SVG-plottar visar formaterad text i en färg.
- WBLOCK:s Entire drawing skriver bara modellen, inte bladen. Den aktuella måttstilen sparas inte i filen: en ritning öppnas med Standard som aktuell.
- Menyflikstilarna har inga listor för lager, färg eller linjetyp ännu: använd panelen {{ui:Lager}} och {{ui:Egenskaper}}.
- Punktmoln sparas fortfarande inte i ritningen eller plottas, och E57-filer öppnas upp till 6 miljoner punkter och 512 MB.
- CadCrafts sparade DWG-filer har inte kontrollerats i själva AutoCAD ännu.

Allt annat finns i [Finns inte ännu](topic:not-built-yet).
