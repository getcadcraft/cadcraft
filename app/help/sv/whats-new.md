---
title: Nytt i 0.8 och 0.8.1
summary: Ett spöke som färdigställer din ritning, pennskisser och skissfoton omvandlade till geometri, blad som lägger upp sig själva, detaljer som erbjuds när du ritar, GRIDMOVE och AUTODIM, taggar, sammanfogningsvänliga filer, granskningsmarkeringar omvandlade till revisioner, rita utan syn, ritgränser, riktningsvinklar, SHX-typsnitt, diagram från text och rättningar i 0.8.1.
keywords: vad är nytt, nyheter, versionsinformation, ändringslogg, ändringar, 0.8, 0.8.1, version, nya funktioner, autokomplettering, spöke, tab, sketchfix, photosketch, autosheet, detaljer, gridmove, autodim, taggar, redline, sammanfoga, git, fossil, åtkomst, rita utan syn, skärmläsare, gränser, riktningsvinklar, aunits, shx, diagram, ole, historik, jämför, med ord, egenskaper, fot och tum, sträck, språk, indataenheter, problem, live, assistenter
from: 9dd82db5
---

Det här är vad som ändrades i CadCraft 0.8 och 0.8.1, jämfört med 0.7. 0.8 (1 november 2026) lägger till ritningshjälpmedel som arbetar utifrån din egen ritning, med regler på din dator och utan modell, och 0.8.1 (2 november 2026) rättar fel som rapporterats efter den.

## Nytt

### Ritning som fullföljer din tanke

- **Ett spöke visar vad som kommer härnäst.** När inget kommando körs visar ett grått streckat spöke vad din ritnings egna mönster säger kommer härnäst: nästa regel med samma avstånd, nästa steg i en trappa, den saknade väggen i ett rum. Tryck på {{key:Tab}} för att rita det som ett enda ångra-steg, eller på {{key:Esc}} för att avfärda det. Det tittar bara på de nyaste objekten, så det förblir smidigt i en stor ritning. Stäng av det i {{ui:Inställningar}} › {{ui:CadCraft}} eller med {{cmd:AUTOCOMPLETE}} `Off`.
- **Nästa punkt när du ritar en linje.** Mitt i {{cmd:LINE}} eller {{cmd:PLINE}} är spöket nästa punkt: nästa steg i en trappa, det fjärde hörnet på en rektangel eller punkten som sluter den. För markören nära den och tryck på {{key:Tab}}, precis som om du hade klickat där.
- **Pennskisser blir exakt geometri.** {{cmd:SKETCHFIX}}: rita grova streck med penna, mus eller finger så blir var och en en ren linje, cirkel, båge, rektangel eller polylinje, fäst mot det som redan är ritat. Se [Skissa med penna och få exakt geometri](topic:sketch-with-a-pen).
- **Ett foto av en skiss blir en ritning.** {{cmd:PHOTOSKETCH}} (`PSK`) hittar papperet i ett foto, rätar upp perspektivet, tillämpar pappersstorlek och skala som du anger och spårar pennstrecken till ett lager för varje pennfärg. Bokstäver spåras inte.
- **Måttsätt efter regler.** {{cmd:AUTODIM}} (`ADIM`) skapar kedjor av mått längs de sidor du väljer, en totalstorlek, öppningsbredder, hålDiametrar och, med `Grid`, rutnätsavstånd. Den upprepar aldrig ett mått som redan finns.
- **Flytta en rutnätslinje så följer resten med.** {{cmd:GRIDMOVE}} (`GM`): väggar som slutar vid rutnätslinjen sträcks med den, väggar längs den, pelare, dess cirkel och etikett flyttas, och mått på den mäter det nya avståndet. Ett ångra-steg.

### Blad, detaljer och taggar

- **Blad som lägger upp sig själva.** {{cmd:AUTOSHEET}} tar dina namngivna vyer (eller de separata delarna av modellen), väljer en pappersstorlek och en standardskala och placerar vyerna på nya blad med ett ritningshuvud och en bildtext med namn och skala. Allt förblir redigerbart. Se [Lägg upp blad åt mig](topic:lay-out-sheets-for-me).
- **Ditt företags detaljer, erbjudna när du ritar.** {{cmd:DETAILS}} (`DET`) håller dina egna detaljblock. När det du markerar matchar ett av dem genom orden på dess lager, blocknamn och noteringar säger statusfältet till om det; välj det och placera det. {{cmd:DETAILS}} › Dela lägger din lista i mappen Dokument och hämtar in det ditt team har lagt till. Inställningar stänger av erbjudandena.
- **Taggar på block.** {{cmd:TAGS}} definierar en tagg (dess typ, de värden den får ha, de block den gäller), sätter den på de blockreferenser du markerar och listar dem som en förteckning som du kan spara som CSV. Definitionerna sparas i DWG-filen. Se [Taggar](topic:tags).
- **Ritgränser.** {{cmd:LIMITS}} anger en rektangel för ritningen: rutnätet fyller den och zoom Allt visar den. Gränserna visas som en kontur och sparas i DWG och DXF, tillsammans med papperets gränser. Se [Ange ritningens gränser](topic:drawing-limits).

### Att arbeta med andra och med andra program

- **Gör en markering till en revision.** {{cmd:REDLINE}} läser paketet som MarkupCraft skriver och listar varje ändring. Godkänn eller avvisa var och en med en anteckning; de godkända får ett revisionsmoln och en revisionslogg i ett enda ångra-steg, och du sparar svarsfilen som stänger markeringarna i MarkupCraft. Se [Gör en markering till en revision](topic:redline-to-revision).
- **Ritningar som git och Fossil kan sammanfoga.** Med {{ui:Sammanfogningsvänliga filer}} på i {{ui:Inställningar}} › {{ui:CadCraft}} får varje objekt en nyckel som aldrig ändras (filerna blir ungefär 10 procent större). `cadcraft merge base ours theirs` sammanfogar sedan två personers ändringar av ett DWG- eller DXF-objekt objekt för objekt och rapporterar bara där två personer ändrat samma sak. Se [Sammanfoga två personers ändringar av en ritning](topic:merge-drawings).
- **Vad som ändrats, med ord.** I Historik ger Jämför en enkel lista: var saker ändrats, hur stora platserna är, vad som lagts till, tagits bort eller ändrats, och texten som redigerats. Se [Säg med ord vad som ändrats](topic:changes-in-words).
- **Riktningar och vinklar.** Skriv en riktning som en lantmätares riktningsvinkel, till exempel N45°23'30"E, eller i grader, minuter och sekunder, var som helst där en vinkel efterfrågas; AUNITS anger hur vinklar visas. Se [Skriv in och visa riktningsvinklar och vinklar](topic:bearings-and-angles).
- **Egna SHX-typsnitt.** Ge CadCraft en mapp med SHX-typsnitt, och textstilar som anger dem ritas med dem, på skärmen och i utskrifter. Se [Rita text med egna SHX-typsnitt](topic:shx-fonts).
- **Ett diagram från text.** {{cmd:DIAGRAM}} läser ett Mermaid-flödesschema, ett PlantUML-komponentdiagram, D2 eller en från-till-lista och ritar block och kopplingar som du kan redigera. Se [Rita ett diagram från text](topic:text-to-diagram).
- **OLE-objekt i en DWG.** {{cmd:OLELIST}} listar de OLE-objekt som en DWG-fil innehåller och som CadCraft inte kan placera själv, och placerar en kopia av en bild där du anger. Se [Bilder](topic:pictures#objects-from-other-programs-ole).
- **Dina beräkningar stannar med ritningen.** Kalkylblad och konstruktionsskäl sparas i DWG-filen tillsammans med klasstabellen.

### Rita utan syn

- Slå på {{ui:Rita utan syn}} i {{ui:Inställningar}} (eller skriv {{cmd:ACCESS}} och svara `On`). CadCraft läser upp varje kommando och resultat med din skärmläsare, beskriver ritningen och det som finns nära markören, låter dig flytta markören och välja punkter med tangentbordet och spelar upp ett ljud för varje fångst och handtag. Där din webbläsare kan känna igen tal på din dator kan kommandon sägas. Se [Rita utan syn](topic:draft-without-sight).

### I alla appar

- **Språk.** 54 språk; tio är nya (litauiska, lettiska, bosniska, marathi, telugu, albanska, afrikaans, filippinska, swahili, uzbekiska). Språk utöver engelska är maskinutkast tills en modersmålstalare har läst dem.
- **Indataenheter.** Styrplatta, penna, 3D-mus, spelkontroll och MIDI-reglage.
- **Verktygsfältsrader och egenskapsrutnätet.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Verktygsfältsrader}} erbjuder Bryt, 2 rader eller 1 rad i de andra apparna. CadCraft har sin egen inställning i {{ui:Inställningar}} › {{ui:CadCraft}} (se [Verktygsfältsrader](topic:settings#toolbar-rows)). Det delade egenskapsrutnätet finns i tre andra appar, inte i CadCraft.
- **Problem, Live och tillägg.** En delad panel för Problem som varnar i alla appar, en Live-vy över vem som är var i CadCraft Studio (se [Arbeta på en ritning tillsammans](topic:work-live)) och en lista över tillägg.
- **Anslut din AI.** En anslutning från CadCraft Studio till alla åtta apparna, med nivån skrivskyddad, föreslå eller redigera per app och en enkel logg över vad assistenten gjorde. CadCraft har ingen egen AI, och Fråga i alla appar använder den AI du ansluter.

## Rättat i 0.8.1

- **Egenskaper visade 150 i stället för 12'-6"** i ritningar i fot och tum. Fält som appen läser själv behåller sin text igen.
- **DWG-filer vars klasssektion lästes som fel typ** (GitHub cadcraft#5) öppnas nu korrekt.
- **Korshåret syns inte längre bakom popup-fönster.**
- **Studio och de paketerade utgåvorna kan byta språk under körning.** Tidigare var de bara på engelska. Inte testat på alla plattformar ännu: säg till om språket inte byts.
- **Surfplattor i porträttläge** ger extra rutnätshöjd till arbetsytan, och läget för blad startar vid 760 px eller mindre.
- **STRETCH med ett korsande fönster, och LIMITS,** rapporterades i Studio 0.8.0 och var redan korrekta i webbversionen av 0.8; rapportörens installationsprogram var äldre. Studio 0.8.1 innehåller dem.

## Ännu inte i den här versionen

- **0.8 och 0.8.1 är inte kodsignerade.** Windows kan varna (välj {{ui:Mer information}} och sedan {{ui:Kör ändå}}); på en Mac högerklickar du på CadCraft Studio och väljer {{ui:Öppna}}. Butiksversioner är pausade, och build för iPad och iPhone byggdes inte om för 0.8.1.
- **Pennskisser och skissfoton** har bara prövats på påhittade foton och med mus, inte ännu med en riktig penna, pekskärm eller handritad skiss på papper.
- **Rita utan syn** har testats med automatiska kontroller, inte ännu med en skärmläsare eller en testare som är blind.
- **Delning av detaljer** har inte haft en kontroll med två personer, och en mapp i Team Cloud Plan som mappen Dokument är inte byggd.
- **Sammanfogning** fungerar för CadCraft:s DWG- och DXF-filer; motsvarande för de andra apparnas filer är inte byggt.
- **Ångra över fönster:** CadCraft rapporterar varje avslutat steg, men Studio har ännu ingen gemensam Ångra för alla appar; varje app ångrar sina egna steg.
- **OLE-objekt i en DWG** behålls men ritas inte på plats.
- **Läsning av plottstilstabeller (CTB-filer)** från andra program är byggd men har inte kontrollerats mot en fil från ett annat program.
- **Anslut din AI:** anslutning med ett klick i Studio, den hostade anslutningen för AI i webbläsaren, din egen API-nyckel i Studio och det publicerade MCP-paketet utlovas inte i den här utgåvan.

För versionen före denna, se [Nytt i 0.7](topic:whats-new-0-7).
