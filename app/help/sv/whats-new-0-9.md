---
title: Nyheter i 0.9 (tidigare)
summary: Skraffer som följer sin gräns, lagergrupper, staplade våningsplan, 2D-smarta väggar med dörrar och fönster, textstilar och en formaterad texteditor, en flytande kommandorad, rutnätsfångst, tio sätt att rita en båge och panelen Dokument.
keywords: nyheter 0.9, tidigare version, nyheter, 0.9, versionsinfo, ändringslogg, skraffering, associativ skraffering, hatchedit, pat-fil, mönsterfil, lagergrupper, laygroup, våningsplan, staplade våningsplan, floorlayers, smarta väggar, vägg, dörr, fönster, väggverktyg, textstil, stil, mtext-redigerare, styckestext, formatering, flytande kommandorad, kommandorad, övre område, kompakt, fånga till rutnät, rutnätsfångst, f9, båge, dokumentpanel, checka ut, brittiska stålprofiler, draw.io, thailändsk text, dxf r12, nyheter, ändringar, 0.8, 0.8.1, version, nya funktioner, autokomplettering, spöke, flik, sketchfix, photosketch, autosheet, details, gridmove, autodim, taggar, redline, sammanfoga, git, fossil, access, ritning utan syn, skärmläsare, gränser, bäringar, aunits, shx, diagram, ole, historik, jämför, med ord, egenskaper, fot och tum, töj, språk, inmatningsenheter, problem, live, assistenter
from: 3451e64c
---

Det här är vad som ändrats i CadCraft 0.9, jämfört med 0.8.1. CadCraft är den 2D- och 3D-ritappen i CadCraft Studio 0.9 och dess åtta appar. 0.9 avslutar plankonstruktionen, lägger till textstilar och en riktig texteditor, och ger mer utrymme på skärmen.

## Nytt

### Ritning i plan

- **Skraffer som följer sin gräns.** {{cmd:HATCH}} kopplas till det som avgränsar den. Flyttar, roterar eller skalar du gränsen följer skraffen och dess mönster; formar du om den räknas skraffen ut på nytt. {{cmd:HATCHEDIT}} (`HE`) ändrar en skraffering efteråt och skapar eller avslutar kopplingen. Se [Skraffering och fyllda ytor](topic:hatch).
- **Mönsterfiler för skraffering.** Vid {{cmd:HATCH}}-frågan `Pick internal point` skriver du `F` (Mönsterfil) och väljer en `.pat`-fil. Endast filer skrivna i det vanliga formatet har prövats.
- **Lagergrupper.** I {{ui:Verktyg}} i panelen {{ui:Lager}}: {{ui:Ny grupp}}, {{ui:Lägg till färdiga grupper}}, {{ui:Gruppera efter namn}} och {{ui:Hitta ett lager}}; eller skriv {{cmd:LAYGROUP}} (`LG`). Se [Ordna en ritning med lager](topic:layers#group-layers).
- **Staplade våningsplan.** {{cmd:FLOORS}} (`FLR`), eller {{ui:Våningsplan…}} i menyn {{ui:Mer}} i gruppen {{ui:Visa}}. En vyport på ett blad kan visa ett våningsplan under {{ui:Visad våning}} i Egenskaper. {{cmd:FLOORLAYERS}} gör våningsplan till lager för en fil som ska till någon annan. Se [Stapla våningsplan i en ritning](topic:floors).
- **2D-smarta väggar, dörrar och fönster.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) och {{cmd:DELOPENING}}. Hörn, T-sammanfogningar och korsningar räknas ut åt dig. Väggar sparar en uppteckning över hur de förenas, och Egenskaper får Tillåt inte sammanfogning i början / i slutet, en Placeringslinje och en redigerbar Längd. Se [Rita 2D-väggar, dörrar och fönster](topic:walls-2d).
- **Väggverktyget för planväggar.** Skriv {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} och resten. De har inga verktygsfältsknappar än. Se [Väggformer, skärningar, förskjutningar och lås för 2D-väggar](topic:wall-tools-2d).

### Text

- **Textstilar.** {{cmd:STYLE}} (`ST`), eller {{ui:Textstil}} i verktygsfältet {{ui:Rita}}: namngivna stilar med ett teckensnitt, en höjd, en breddfaktor och en lutning. Se [Ställ in teckensnitt och storlek för text med textstilar](topic:text-styles).
- **En formaterad texteditor för styckestext.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} eller ett dubbelklick på text öppnar en ruta med teckensnitt, storlek, fetstil, kursiv, understrykning, genomstrykning, färg, justering och grad-, plus-minus- och diametertecken, samt {{ui:OK}} och {{ui:Avbryt}}. Se [Formatera styckestext](topic:format-paragraph-text).
- **Ett diagram från draw.io-XML.** {{cmd:DIAGRAM}} (`T2D`) läser även inklistrad draw.io-XML. Se [Rita ett diagram från text](topic:text-to-diagram).
- **Thailändsk text i en PDF-utskrift.** Den skrevs tidigare ut som frågetecken.

### Mer utrymme och ritstöd

- **En flytande, tunnare kommandorad och ett kompakt övre område.** Dra i kommandoradens handtag för att frigöra den, dra i dess övre kant för färre rader, {{key:F2}} öppnar historiken. {{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Kommandorad}} och valen för övre område har samma inställningar. Se [Inställningar](topic:settings#command-line).
- **Objektfångstmenyn.** Högerklicka på {{ui:Fångst}} i statusfältet, eller skriv {{cmd:OSNAP}}.
- **Fånga till rutnät.** Knappen {{ui:Rutnätsfångst}} i statusfältet, eller {{key:F9}}: valda punkter går till närmaste rutnätspunkt när ingen objektfångst tog punkten.
- **Båge på tio sätt, och Fortsätt.** {{ui:Båge}} i verktygsfältet {{ui:Rita}} eller {{cmd:ARC}}: 3 punkter, familjen Start/Mitt/Slut och familjen Mitt/Start/Slut, samt Fortsätt (tryck på {{key:Enter}} vid startpunkten) från den senaste linjen, bågen eller polylinjen.
- **Panelen Dokument.** {{cmd:DOCUMENTS}} (`DOCS`) eller {{ui:Dokument…}} i menyn {{ui:Mer}} i gruppen {{ui:Visa}}: revision, status och utcheckning för varje ritning i en projektmapp. Den öppnas som en centrerad dialogruta. Se [Dokument](topic:documents).

### Filer

- **Brittiska stålprofiler.** 976 sektioner i panelen Standard, skrivna som på ritningar (till exempel `305x165x40 UB`).
- **Sydafrikanska paket** (ritpraxis och byggregler) som paket i tillägget Byggregler. Siffrorna är overifierade.
- **Tillägg för CadCraft,** läggs till vid behov och av som standard: belysningsdesign för inomhus, chipdesign (HDL till layout), routerfräsning, kretssimulering, kedjehjul för rullkedjor och landpaket för byggregler.

## Åtgärdat

- Att flytta, rotera eller skala en skraffering lämnade kvar dess mönster.
- {{cmd:GRIDMOVE}} tog med en hel planvägg som bara börjar på rutnätslinjen. En vägg bedöms nu efter sina ändar.
- Rutnätet visades bara inuti ritningens gränser även med gränserna avstängda.
- Blocklistan i sidopanelen rullar, och ett namn som inte är något block listar blocken som börjar med det ("Did you mean").
- DXF R12-filer som AutoCAD vägrade ("Unknown group 1001 for table") öppnas nu där.
- Mycket stora filer (omkring 70 000 entiteter och uppåt) gav "Maximum call stack size exceeded" vid öppning.
- DWG-filer från AutoCAD 2018 och senare med hög underhållsversion gav "bad BITLONG code 11" vid öppning.
- I styckestextrutan behåller en ny storlek som skrivs för en markerad del markeringen.

## I alla appar

Bootstrap-verktygstips på varje kontroll med en hjälptext, ett startetips du kan stänga, flikrader som rullar när de inte ryms, och en webbläsarflikstitel som följer den öppna ritningen (`<drawing> - CadCraft | CadCraft`). {{ui:Inställningar}} › {{ui:Layout}} är nu en rullgardin med tvårads-val. Språklistan i {{ui:Inställningar}} är längre än i 0.8. Live-samredigering, biblioteksamlingar och vikt- och temperaturenheter beskrivs i Studio-anteckningarna.

## Ärliga begränsningar

- Styckestext har inga punktlistor eller numrerade listor, inget tabulatorlinjal och ingen justering. Utskrivna PDF:er sätter text i Helvetica.
- Planväggar är räta, så en båge ritas som korta väggar. Gemenskapens handkontroll av väggverktyget återstår.
- Lagergrupper skrivs inte i AutoCADs eget format, så AutoCAD visar en platt lista. Andra program visar alla våningsplan tillsammans om du inte kör {{cmd:FLOORLAYERS}}.
- Panelen Dokument har inte prövats av två personer på en riktig delning. Routerfräsning har körts på ingen riktig maskin. Belysningsberäkningen har kontrollerats mot en fotonspårning, inte mot ett annat program. Ingenjörstilläggen är kontrollverktyg, inte ersättning för en ingenjörs granskning.
- Språk utöver engelska är maskinöversättningar, och en del av de nya orden finns bara på engelska.

## Tidigare: 0.8 och 0.8.1

Det här är vad som ändrats i CadCraft 0.8 och 0.8.1, jämfört med 0.7. 0.8 (1 november 2026) lägger till ritstöd som arbetar utifrån din egen ritning, med regler på din dator och utan modell, och 0.8.1 (2 november 2026) rättar fel som rapporterats efter den.

### Nytt

**Ritning som avslutar din tanke**

- **Ett spöke visar vad som kommer härnäst.** När inget kommando körs visar ett grått streckat spöke vad din ritnings egna mönster säger kommer härnäst: nästa regel i samma avstånd, nästa steg i en trappa, den saknade väggen i ett rum. Tryck på {{key:Tab}} för att rita det som ett ångra-steg, eller {{key:Esc}} för att avfärda det. Det tittar bara på de nyaste objekten, så det förblir smidigt i en stor ritning. Stäng av det i {{ui:Inställningar}} › {{ui:CadCraft}} eller med {{cmd:AUTOCOMPLETE}} `Off`.
- **Nästa punkt när du ritar en linje.** Mitt i {{cmd:LINE}} eller {{cmd:PLINE}} är spöket nästa punkt: nästa steg i en trappa, rektangelns fjärde hörn, eller punkten som sluter den. För markören nära den och tryck på {{key:Tab}}, som om du klickat där.
- **Pennskisser blir exakt geometri.** {{cmd:SKETCHFIX}}: rita grova streck med penna, mus eller finger och varje blir en ren linje, cirkel, båge, rektangel eller polylinje, fångad till det som redan är ritat. Se [Skissa med penna och få exakt geometri](topic:sketch-with-a-pen).
- **Ett foto av en skiss blir en ritning.** {{cmd:PHOTOSKETCH}} (`PSK`) hittar papperet i ett foto, rätar ut perspektivet, tillämpar den pappersstorlek och skala du anger, och spårar pennlinjerna till ett lager för varje pennfärg. Bokstäver spåras inte.
- **Mät den utifrån regler.** {{cmd:AUTODIM}} (`ADIM`) gör kedjor av mått längs de sidor du väljer, en totalmått, öppningsbredder, hålens diametrar och, med `Grid`, rutnätsavstånd. Den upprepar aldrig ett mått som redan finns.
- **Flytta en rutnätslinje så följer resten.** {{cmd:GRIDMOVE}} (`GM`): väggar som slutar på rutnätslinjen sträcks med den, väggar längs den, pelare, dess bubbla och tagg flyttas, och mått på den mäter det nya avståndet. Ett ångra-steg.

**Blad, detaljer och taggar**

- **Blad som lägger upp sig själva.** {{cmd:AUTOSHEET}} tar dina namngivna vyer (eller de separata delarna av modellen), väljer en pappersstorlek och en standardskala, och lägger vyerna på nya blad med ett ritningshuvud och en bildtext med namn och skala. Allt förblir redigerbart. Se [Låt mig lägga upp blad](topic:lay-out-sheets-for-me).
- **Ditt företags detaljer, erbjudna när du ritar.** {{cmd:DETAILS}} (`DET`) behåller dina egna detaljblock. När det du markerar stämmer med ett av dem efter orden på dess lager, blocknamn och anteckningar, säger statusfältet det; välj det och placera det. {{cmd:DETAILS}} › Share lägger din lista i din dokumentmapp och hämtar in det ditt team lagt till. Inställningarna stänger av erbjudandena.
- **Taggar på block.** {{cmd:TAGS}} definierar en tagg (dess typ, de värden den får ha, de block den gäller), sätter den på de blockreferenser du markerar, och listar dem som en tabell du kan spara som CSV. Definitionerna sparas i DWG. Se [Taggar](topic:tags).
- **Ritningsgränser.** {{cmd:LIMITS}} sätter en rektangel för ritningen: rutnätet fyller den och zoom Alla visar den. Gränserna visas som en kontur och sparas i DWG och DXF, tillsammans med pappersgränserna. Se [Ställ in ritningens gränser](topic:drawing-limits).

**Att arbeta med andra och andra program**

- **Gör en markering till en revision.** {{cmd:REDLINE}} läser paketet MarkupCraft skriver och listar varje ändring. Godkänn eller avvisa var och en med en notering; de godkända får ett revisionsmoln och en revisionslogg i ett ångra-steg, och du sparar svarsfilen som stänger markeringarna i MarkupCraft. Se [Gör en markering till en revision](topic:redline-to-revision).
- **Ritningar som git och Fossil kan slå ihop.** Med {{ui:Sammanfogningsvänliga filer}} på i {{ui:Inställningar}} › {{ui:CadCraft}} får varje objekt en nyckel som aldrig ändras (filerna blir omkring 10 procent större). `cadcraft merge base ours theirs` slår sedan ihop två personers ändringar av en DWG- eller DXF-fil objekt för objekt och rapporterar bara där två personer ändrat samma sak. Se [Slå ihop två personers ändringar av en ritning](topic:merge-drawings).
- **Vad som ändrats, med ord.** I Historik ger Jämför en enkel lista: var saker ändrats, hur stora platserna är, vad som lagts till, tagits bort eller ändrats, och texten som redigerats. Se [Säg med ord vad som ändrats](topic:changes-in-words).
- **Bäringar och vinklar.** Skriv en riktning som en lantmätares bäring, till exempel N45°23'30"E, eller i grader, minuter och sekunder, var som helst en vinkel efterfrågas; AUNITS anger hur vinklar visas. Se [Skriv och visa bäringar och vinklar](topic:bearings-and-angles).
- **Dina egna SHX-teckensnitt.** Ge CadCraft en mapp med SHX-teckensnitt, och textstilar som anger dem ritas i dem, på skärmen och i utskrifter. Se [Rita text i dina egna SHX-teckensnitt](topic:shx-fonts).
- **Ett diagram från text.** {{cmd:DIAGRAM}} läser ett Mermaid-flödesschema, ett PlantUML-komponentdiagram, D2 eller en från-till-lista, och ritar block och kopplingar du kan redigera. Se [Rita ett diagram från text](topic:text-to-diagram).
- **OLE-objekt i en DWG.** {{cmd:OLELIST}} listar OLE-objekten en DWG bär som CadCraft inte kan placera själv, och placerar en kopia av en bild där du anger. Se [Bilder](topic:pictures#objects-from-other-programs-ole).
- **Dina beräkningar stannar med ritningen.** Beräkningsblad och konstruktionsmotiveringar sparas i DWG tillsammans med klasstabellen.

**Ritning utan syn**

- Slå på {{ui:Ritning utan syn}} i {{ui:Inställningar}} (eller skriv {{cmd:ACCESS}} och svara `On`). CadCraft läser upp varje kommando och resultat via din skärmläsare, beskriver ritningen och vad som finns nära markören, låter dig flytta markören och välja punkter med tangentbordet, och spelar upp ett ljud för varje fångst och handtag. Där din webbläsare kan känna igen tal på din dator kan kommandon sägas. Se [Rita utan syn](topic:draft-without-sight).

**I alla appar**

- **Språk.** 54 språk; tio är nya (litauiska, lettiska, bosniska, marathi, telugu, albanska, afrikaans, filippinska, swahili, uzbekiska). Språk utöver engelska är maskinöversättningar tills en modersmålstalare har granskat dem.
- **Inmatningsenheter.** Styrplatta, penna, 3D-mus, spelkontroll och MIDI-kontroller.
- **Verktygsrader och egenskapsrutnätet.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Verktygsfältsrader}} erbjuder Radbryt, 2 rader eller 1 rad i de andra apparna. CadCraft har sin egen inställning i {{ui:Inställningar}} › {{ui:CadCraft}} (se [Verktygsfältsrader](topic:settings#toolbar-rows)). Det delade egenskapsrutnätet finns i tre andra appar, inte i CadCraft.
- **Problem, Live och tillägg.** En delad panel Problem som varnar i varje app, en Live-vy över vem som är var i CadCraft Studio (se [Arbeta på en ritning tillsammans](topic:work-live)), och en tilläggslista.
- **Koppla din AI.** En anslutning från CadCraft Studio till alla åtta appar, med en nivå per app: skrivskyddad, föreslå eller redigera, och en klartextlogg över vad assistenten gjorde. CadCraft har ingen egen AI, och Fråga i varje app använder den AI du ansluter.

### Åtgärdat i 0.8.1

- **Egenskaper visade 150 i stället för 12'-6"** i ritningar med fot och tum. Fält som appen själv läser behåller sin text igen.
- **DWG-filer vars klasssektion lästes som fel typ** (GitHub cadcraft#5) öppnas nu korrekt.
- **Korshåret syns inte längre bakom popup-fönster.**
- **Studio och de paketerade utgåvorna kan byta språk under körning.** Tidigare var de bara på engelska. Inte testat på alla plattformar än: säg till om språket inte byts.
- **Surfplattor i porträtt** ger extra rutnätshöjd åt duken, och bladläget startar vid 760 px eller mindre.
- **STRETCH med ett korsande fönster, och LIMITS,** rapporterades i Studio 0.8.0 och var redan rätt i 0.8-webbversionen; rapportörens installerare var äldre. Studio 0.8.1 innehåller dem.

### Ännu inte i denna version

- **0.8 och 0.8.1 är inte kodsignerade.** Windows kan varna (välj {{ui:Mer information}}, sedan {{ui:Kör ändå}}); på en Mac högerklickar du på CadCraft Studio och väljer {{ui:Öppna}}. Butiksversioner är pausade, och iPad- och iPhone-versionen byggdes inte om för 0.8.1.
- **Pennskisser och skissfoton** har bara prövats på påhittade foton och med mus, inte ännu med en riktig penna, pekskärm eller handskiss på papper.
- **Ritning utan syn** har testats med automatiska kontroller, inte ännu med en skärmläsare eller en blind testare.
- **Delning av detaljer** har inte haft en kontroll av två personer, och en Team Cloud Plan-mapp som dokumentmapp är inte byggd.
- **Sammanfogning** fungerar för CadCrafts DWG- och DXF-filer; samma sak för de andra apparnas filer är inte byggd.
- **Ångra över fönster:** CadCraft rapporterar varje avslutat steg, men Studio har ännu ingen gemensam Ångra för alla appar; varje app ångrar sina egna steg.
- **En DWG:s OLE-objekt** bevaras men ritas inte på sin plats.
- **Läsning av plottstilstabeller (CTB-filer)** från andra program är byggd men har inte kontrollerats mot en fil från ett annat program.
- **Koppla din AI:** en-klicks-anslutning i Studio, den hostade kopplingen för webbläsar-AI, din egen API-nyckel i Studio och det publicerade MCP-paketet utlovas inte i den här utgåvan.

För versionen före den här, se [Vad som är nytt i 0.7](topic:whats-new-0-7).
