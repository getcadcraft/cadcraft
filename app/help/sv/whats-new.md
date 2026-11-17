---
title: Nyheter i 0.9
summary: Skraffering som följer sin gräns, lagergrupper, staplade våningar, smarta 2D-väggar med dörrar och fönster, textstilar och en redigerare för formaterad text, en flytande kommandorad, rutnätsfångst, tio sätt att rita en båge, och dokumentpanelen.
keywords: nyheter, 0.9, versionsinformation, ändringslogg, skraffering, associativ skraffering, hatchedit, pat-fil, mönsterfil, lagergrupper, laygroup, våningar, staplade våningar, floorlayers, smarta väggar, vägg, dörr, fönster, väggverktyg, textstil, stil, mtext-redigerare, styckestext, formatering, flytande kommandorad, kommandorad, övre område, kompakt, fångst till rutnät, rutnätsfångst, f9, båge, dokumentpanel, checka ut, brittiska stålprofiler, draw.io, thailändsk text, dxf r12, nyheter, 0.8, 0.8.1, version, nya funktioner, autokomplettering, spöke, tab, sketchfix, photosketch, autosheet, detaljer, gridmove, autodim, taggar, redline, sammanfogning, git, fossil, access, rita utan syn, skärmläsare, gränser, bäringar, aunits, shx, diagram, ole, historik, jämför, i ord, egenskaper, fot och tum, sträck, språk, indatautrustning, problem, live, assistenter
from: 8b6dea0b
---

Det här ändrades i CadCraft 0.9 jämfört med 0.8.1. CadCraft är 2D- och 3D-ritappen i CadCraft Studio 0.9 och dess åtta appar. 0.9 slutför planritningen, lägger till textstilar och en riktig textredigerare, och ger dig mer utrymme på skärmen.

## Nytt

### Planritning

- **Skraffering som följer sin gräns.** {{cmd:HATCH}} länkar till det som avgränsar den. Flyttar, vrider eller skalar du gränsen följer skrafferingen och dess mönster med; formar du om den räknas skraffering ut på nytt. {{cmd:HATCHEDIT}} (`HE`) ändrar en skraffering i efterhand och skapar eller avslutar länken. Se [Skraffering och fyllda ytor](topic:hatch).
- **Mönsterfiler för skraffering.** På frågan `Pick internal point` i {{cmd:HATCH}}, skriv `F` (Mönsterfil) och välj en `.pat`-fil. Endast filer skrivna i det vanliga formatet har prövats.
- **Lagergrupper.** I {{ui:Verktyg}} på panelen {{ui:Lager}}: {{ui:Ny grupp}}, {{ui:Lägg till färdiga grupper}}, {{ui:Gruppera efter namn}} och {{ui:Hitta ett lager}}; eller skriv {{cmd:LAYGROUP}} (`LG`). Se [Ordna en ritning med lager](topic:layers#group-layers).
- **Staplade våningar.** {{cmd:FLOORS}} (`FLR`), eller {{ui:Våningsplan…}} i menyn {{ui:Mer}} i gruppen {{ui:Vy}}. En vyport på ett blad kan visa en våning under {{ui:Visad våning}} i Egenskaper. {{cmd:FLOORLAYERS}} gör våningar till lager för en fil som ska skickas till någon annan. Se [Stapla våningar i en ritning](topic:floors).
- **Smarta 2D-väggar, dörrar och fönster.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) och {{cmd:DELOPENING}}. Hörn, T-sammanfogningar och korsningar räknas ut åt dig. Väggar behåller en uppgift om hur de sammanfogas, och Egenskaper får Tillåt inte sammanfogning i början / i slutet, en Placeringslinje och en redigerbar Längd. Se [Rita 2D-väggar, dörrar och fönster](topic:walls-2d).
- **Väggverktyget för planväggar.** Skriv {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} och resten. De har inga verktygsfältsknappar ännu. Se [Väggformer, skärningar, förskjutningar och lås för 2D-väggar](topic:wall-tools-2d).

### Text

- **Textstilar.** {{cmd:STYLE}} (`ST`), eller {{ui:Textstil}} i verktygsfältet {{ui:Rita}}: namngivna stilar med ett teckensnitt, en höjd, en breddfaktor och en lutning. Se [Ange teckensnitt och storlek för text med textstilar](topic:text-styles).
- **En redigerare för formaterad styckestext.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} eller ett dubbelklick på text öppnar en ruta med teckensnitt, storlek, fetstil, kursiv, understrykning, genomstrykning, färg, justering och grad-, plus-minus- och diametertecken, samt {{ui:OK}} och {{ui:Avbryt}}. Se [Formatera styckestext](topic:format-paragraph-text).
- **Ett diagram från draw.io-XML.** {{cmd:DIAGRAM}} (`T2D`) läser även inklistrad draw.io-XML. Se [Rita ett diagram från text](topic:text-to-diagram).
- **Thailändsk text i en PDF-plot.** Den skrevs ut som frågetecken förut.

### Mer utrymme och ritstöd

- **En flytande, smalare kommandorad och ett kompakt övre område.** Dra i kommandoradens handtag för att göra den flytande, dra i dess övre kant för färre rader, {{key:F2}} öppnar historiken. {{ui:Inställningar}} › {{ui:CadCraft}} › {{ui:Kommandorad}} och valen för det övre området har samma inställningar. Se [Inställningar](topic:settings#command-line).
- **Menyn för objektfångst.** Högerklicka på {{ui:Fångst}} i statusfältet, eller skriv {{cmd:OSNAP}}.
- **Fångst till rutnät.** Knappen {{ui:Rutnätsfångst}} i statusfältet, eller {{key:F9}}: valda punkter går till närmaste rutnätspunkt när ingen objektfångst tog punkten.
- **Båge på tio sätt, och Fortsätt.** {{ui:Båge}} i verktygsfältet {{ui:Rita}} eller {{cmd:ARC}}: 3 punkter, familjen Start/Mitt/Slut och familjen Mitt/Start/Slut, samt Fortsätt (tryck {{key:Enter}} i startpunkten) från den senaste linjen, bågen eller polylinjen.
- **Dokumentpanelen.** {{cmd:DOCUMENTS}} (`DOCS`) eller {{ui:Dokument…}} i menyn {{ui:Mer}} i gruppen {{ui:Vy}}: revision, status och utcheckning för varje ritning i en projektmapp. Den öppnas som en centrerad dialogruta. Se [Dokument](topic:documents).

### Filer

- **Brittiska stålprofiler.** 976 profiler i panelen Standard, skrivna som på ritningar (till exempel `305x165x40 UB`).
- **Sydafrikanska paket** (ritpraxis och byggregler) som paket i tillägget Byggregler. Siffrorna är overifierade.
- **Tillägg för CadCraft,** läggs till på begäran och är avstängda som standard: design av inomhusbelysning, chipdesign (HDL till layout), routerfräsning, kretssimulering, kedjehjul för rullkedjor och länderpaket för Byggregler.

## Åtgärdat

- Att flytta, vrida eller skala en skraffering lämnade kvar dess mönster.
- {{cmd:GRIDMOVE}} tog med en hel planvägg som bara startar på rutnätslinjen. En vägg bedöms nu efter sina ändar.
- Rutnätet visades bara inom ritningens gränser även med gränser avstängda.
- Blockslistan i sidopanelen rullar, och ett namn som inte är ett block listar blocken som börjar med det ("Menade du").
- DXF R12-filer som AutoCAD vägrade ("Okänd grupp 1001 för tabell") öppnas nu där.
- Mycket stora filer (cirka 70 000 entiteter och uppåt) misslyckades att öppnas med "Maximum call stack size exceeded".
- DWG-filer från AutoCAD 2018 och senare med en hög underhållsversion misslyckades att öppnas med "bad BITLONG code 11".
- I rutan för styckestext behåller ett nytt storlekvärde som skrivs in för en markerad del markeringen.

## I alla appar

Bootstrap-verktygstips på varje kontroll med en hjälptext, ett startTips du kan stänga, flikrader som rullar när de inte får plats, och en flikrubrik i webbläsaren som följer den öppna ritningen (`<ritning> - CadCraft | CadCraft`). {{ui:Inställningar}} › {{ui:Layout}} är nu en rullgardinslista med tvårads-val. Språklistan i {{ui:Inställningar}} är längre än i 0.8. Samtidig redigering i realtid, Biblioteks-samlingar och vikt- och temperaturenheter beskrivs i anteckningarna för Studio.

## Kända begränsningar

- Styckestext har inga punktlistor eller numrerade listor, tabbolinjal eller justering. Utskrivna PDF-filer sätter text i Helvetica.
- Planväggar är raka, så en båge ritas som korta väggar. Gemenskapens handkontroll av väggverktyget återstår.
- Lagergrupper skrivs inte i AutoCADs egna format, så AutoCAD visar en platt lista. Andra program visar alla våningar tillsammans om du inte kör {{cmd:FLOORLAYERS}}.
- Dokumentpanelen har inte prövats av två personer på en riktig delad mapp. Routerfräsning har körts på ingen riktig maskin. Belysningsberäkningen har kontrollerats mot en fotonspårning, inte mot ett annat program. Tekniska tillägg är kontrollstöd, inte en ersättning för en ingenjörs granskning.
- Språk andra än engelska är maskinella utkast, och några av de nya orden finns bara på engelska.

## Tidigare: 0.8 och 0.8.1

Det här ändrades i CadCraft 0.8 och 0.8.1 jämfört med 0.7. 0.8 (1 november 2026) lägger till ritstöd som arbetar utifrån din egen ritning, med regler på din dator och utan någon modell, och 0.8.1 (2 november 2026) rättar fel som rapporterats efter den.

### Nytt

**En ritning som avslutar din tanke**

- **Ett spöke visar vad som kommer härnäst.** När inget kommando körs visar ett grått streckat spöke vad ritningens egna mönster säger kommer härnäst: nästa regel med samma avstånd, nästa steg i en trappa, den saknade väggen i ett rum. Tryck {{key:Tab}} för att rita det som ett ångra-steg, eller {{key:Esc}} för att avfärda det. Det tittar bara på de nyaste objekten, så det förblir smidigt i en stor ritning. Stäng av det i {{ui:Inställningar}} › {{ui:CadCraft}} eller med {{cmd:AUTOCOMPLETE}} `Off`.
- **Nästa punkt när du ritar en linje.** Mitt i {{cmd:LINE}} eller {{cmd:PLINE}} är spöket nästa punkt: nästa steg i en trappa, det fjärde hörnet i en rektangel, eller punkten som sluter den. För pekaren nära den och tryck {{key:Tab}}, som om du klickat där.
- **Pennskisser blir exakt geometri.** {{cmd:SKETCHFIX}}: rita grova streck med en penna, mus eller ett finger och varje blir en ren linje, cirkel, båge, rektangel eller polylinje, fångad till det som redan är ritat. Se [Skissa med en penna och få exakt geometri](topic:sketch-with-a-pen).
- **Ett foto av en skiss blir en ritning.** {{cmd:PHOTOSKETCH}} (`PSK`) hittar papperet på ett foto, räter upp perspektivet, tillämpar pappersstorleken och skalan du anger, och spårar pennlinjerna till ett lager för varje pennfärg. Bokstäver spåras inte.
- **Mät den utifrån regler.** {{cmd:AUTODIM}} (`ADIM`) gör kedjor av mått längs de sidor du väljer, ett totalmått, öppningsbredder, håldiametrar och, med `Grid`, rutnätsavstånd. Det upprepar aldrig ett mått som redan finns.
- **Flytta en rutnätslinje så följer resten med.** {{cmd:GRIDMOVE}} (`GM`): väggar som slutar på rutnätslinjen sträcks med den, väggar längs den, pelare, dess bubbla och märkning flyttas, och mått på den mäter det nya avståndet. Ett ångra-steg.

**Blad, detaljer och taggar**

- **Blad som lägger upp sig själva.** {{cmd:AUTOSHEET}} tar dina namngivna vyer (eller de separata delarna av modellen), väljer en pappersstorlek och en standardskala, och placerar vyerna på nya blad med ett ritningshuvud och en bildtext med namn och skala. Allt förblir redigerbart. Se [Lägg upp blad åt mig](topic:lay-out-sheets-for-me).
- **Ditt företags detaljer, erbjudna när du ritar.** {{cmd:DETAILS}} (`DET`) behåller dina egna detaljblock. När det du markerar stämmer med ett av dem efter orden på dess lager, blocknamn och anteckningar, säger statusfältet det; välj det och placera det. {{cmd:DETAILS}} › Dela lägger din lista i din mapp Dokument och hämtar det ditt team lagt till. Inställningar stänger av erbjudandena.
- **Taggar på block.** {{cmd:TAGS}} definierar en tagg (dess typ, de värden den får ha, de block den gäller), anger den på de blockreferenser du markerar, och listar dem som en förteckning du kan spara som CSV. Definitionerna sparas i DWG-filen. Se [Taggar](topic:tags).
- **Ritningsgränser.** {{cmd:LIMITS}} anger en rektangel för ritningen: rutnätet fyller den och zoom Allt visar den. Gränserna visas som en kontur och sparas i DWG och DXF, tillsammans med pappersgränserna. Se [Ange ritningens gränser](topic:drawing-limits).

**Att arbeta med andra och med andra program**

- **Gör en markering till en revision.** {{cmd:REDLINE}} läser paketet MarkupCraft skriver och listar varje ändring. Godkänn eller avvisa var och en med en anteckning; de godkända får ett revisionsmoln och en revisionslogg i ett ångra-steg, och du sparar svarsfilen som stänger markeringarna i MarkupCraft. Se [Gör en markering till en revision](topic:redline-to-revision).
- **Ritningar som git och Fossil kan slå ihop.** Med {{ui:Sammanfogningsvänliga filer}} på i {{ui:Inställningar}} › {{ui:CadCraft}} får varje objekt en nyckel som aldrig ändras (filerna blir cirka 10 procent större). `cadcraft merge base ours theirs` slår sedan ihop två personers ändringar av ett DWG- eller DXF-objekt, objekt för objekt, och rapporterar bara där två personer ändrat samma sak. Se [Slå ihop två personers ändringar i en ritning](topic:merge-drawings).
- **Vad som ändrats, i ord.** I Historik ger Jämför en vanlig lista: var saker ändrats, hur stora platserna är, vad som lagts till, tagits bort eller ändrats, och texten som redigerats. Se [Säg i ord vad som ändrats](topic:changes-in-words).
- **Bäringar och vinklar.** Skriv en riktning som en lantmätares bäring, till exempel N45°23'30"E, eller i grader, minuter och sekunder, var som helst där en vinkel efterfrågas; AUNITS anger hur vinklar visas. Se [Skriv och visa bäringar och vinklar](topic:bearings-and-angles).
- **Egna SHX-teckensnitt.** Ge CadCraft en mapp med SHX-teckensnitt, och textstilar som anger dem ritas med dem, på skärmen och i plottar. Se [Rita text i egna SHX-teckensnitt](topic:shx-fonts).
- **Ett diagram från text.** {{cmd:DIAGRAM}} läser ett Mermaid-flödesschema, ett PlantUML-komponentdiagram, D2 eller en från-till-lista och ritar block och kopplingar du kan redigera. Se [Rita ett diagram från text](topic:text-to-diagram).
- **OLE-objekt i en DWG.** {{cmd:OLELIST}} listar de OLE-objekt en DWG bär och som CadCraft inte kan placera själv, och placerar en kopia av en bild där du anger. Se [Bilder](topic:pictures#objects-from-other-programs-ole).
- **Dina beräkningar stannar med ritningen.** Beräkningsblad och konstruktionsmotiveringar sparas i DWG-filen tillsammans med klasstabellen.

**Rita utan syn**

- Slå på {{ui:Rita utan syn}} i {{ui:Inställningar}} (eller skriv {{cmd:ACCESS}} och svara `On`). CadCraft läser upp varje kommando och resultat via din skärmläsare, beskriver ritningen och vad som finns nära pekaren, låter dig flytta pekaren och välja punkter med tangentbordet, och spelar upp ett ljud för varje fångst och handtag. Där din webbläsare kan känna igen tal på din dator kan kommandon sägas högt. Se [Rita utan syn](topic:draft-without-sight).

**I alla appar**

- **Språk.** 54 språk; tio är nya (litauiska, lettiska, bosniska, marathi, telugu, albanska, afrikaans, filippinska, swahili, uzbekiska). Språk utöver engelska är maskinella utkast tills en modersmålstalare har läst dem.
- **Indatautrustning.** Pekplatta, penna, 3D-mus, spelkontroll och MIDI-kontroller.
- **Verktygsfältsrader och egenskapsrutnätet.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Verktygsfältsrader}} erbjuder Bryt, 2 rader eller 1 rad i de andra apparna. CadCraft behåller sin egen inställning i {{ui:Inställningar}} › {{ui:CadCraft}} (se [Verktygsfältsrader](topic:settings#toolbar-rows)). Det delade egenskapsrutnätet finns i tre andra appar, inte i CadCraft.
- **Problem, Live och tillägg.** En delad panel för problem som varnar i varje app, en Live-vy över vem som är var i CadCraft Studio (se [Arbeta med en ritning tillsammans](topic:work-live)), och en lista över tillägg.
- **Anslut din AI.** En anslutning från CadCraft Studio till alla åtta appar, med en nivå per app som är skrivskyddad, föreslår eller redigerar, och en logg i vanlig text över vad assistenten gjort. CadCraft har ingen AI egen, och Fråga i alla appar använder den AI du ansluter.

### Åtgärdat i 0.8.1

- **Egenskaper visade 150 i stället för 12'-6"** i ritningar i fot och tum. Fält som appen läser själv behåller sin text igen.
- **DWG-filer vars klasssektion lästes som fel typ** (GitHub cadcraft#5) öppnas nu korrekt.
- **Korshåret visas inte längre bakom popup-fönster.**
- **Studio och de paketerade utgåvorna kan byta språk under körning.** Förut var de bara på engelska. Ännu inte prövat på alla plattformar: säg till om språket inte ändras.
- **Surfplattor i porträttläge** ger ledigt rutnätsutrymme åt duken, och bladläget startar vid 760 px eller mindre.
- **STRETCH med ett korsande fönster, och LIMITS,** rapporterades i Studio 0.8.0 och var redan rätt i webbversionen av 0.8; rapportörens installationsprogram var äldre. Studio 0.8.1 innehåller dem.

### Ännu inte i den här versionen

- **0.8 och 0.8.1 är inte kodsignerade.** Windows kan varna (välj {{ui:Mer information}}, sedan {{ui:Kör ändå}}); på en Mac, högerklicka på CadCraft Studio och välj {{ui:Öppna}}. Butiksversioner är pausade, och iPad- och iPhone-versionen byggdes inte om för 0.8.1.
- **Pennskisser och fotografier av skisser** har bara prövats på påhittade foton och med en mus, inte ännu med en riktig penna, pekskärm eller en handskiss på papper.
- **Rita utan syn** har testats med automatiska kontroller, inte ännu med en skärmläsare eller en blind testare.
- **Att dela detaljer** har inte haft en kontroll av två personer, och en Team Cloud Plan-mapp som mapp Dokument är inte byggd.
- **Sammanfogning** fungerar för CadCraft:s DWG- och DXF-filer; samma sak för de andra apparnas filer är inte byggd.
- **Ångra över fönster:** CadCraft rapporterar varje avslutat steg, men Studio har ingen gemensam Ångra för alla appar ännu; varje app ångrar sina egna steg.
- **En DWG:s OLE-objekt** behålls men ritas inte på sin plats.
- **Att läsa plottabeller (CTB-filer)** från andra program är byggt men har inte kontrollerats mot en fil från ett annat program.
- **Anslut din AI:** ett-klicks-anslutning i Studio, den hostade kopplingen för AI i webbläsaren, din egen API-nyckel i Studio och det publicerade MCP-paketet utlovas inte i den här versionen.

För versionen före den här, se [Nyheter i 0.7](topic:whats-new-0-7).
