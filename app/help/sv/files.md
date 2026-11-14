---
title: Filer: vad som öppnas och vad som sparas
summary: De format CadCraft öppnar, sparar och exporterar, vad som behålls eller konverteras och var filerna hamnar.
keywords: xclip, beskärning, xclip-gräns, bind beskuren, dwg, dxf, pdf, r12, öppna, spara, exportera, importera, format, konvertering, nedladdning, spara som, dxfout, dwg-sparning, qsave, xref, xattach, länkad ritning, externreferens, bind, läs om, lösgör
from: 6d68b34e
---

## I korthet

| Format | Öppna | Spara | Anmärkningar |
|---|---|---|---|
| DXF (text, valfri version) | Ja | Ja, som DXF R12 eller DXF 2000 | Binär DXF avvisas: spara den som text-DXF först. |
| DWG | Ja | Ja, som DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 eller 2018) | Läses och skrivs av CadCrafts eget DWG-bibliotek (AutoCAD R13- till 2018-filer). Din DWG ändras aldrig. Skadade filer, eller versioner som läsaren inte hanterar, avvisas med ett meddelande. |
| PDF | Hämtar in en sida: som underlag eller som objekt ([PDF-underlag](topic:pdf-underlay)) | Ja, genom plottning | Vektor-PDF av ett blad, eller av modellen i en skala. |

Varje ritning du öppnar (eller startar med {{ui:Ny}}) får en egen flik över ritytan; en ny ritning som ingen har rört används i stället för att lägga till en flik. Klicka på en flik för att byta, på dess {{ui:×}} för att stänga den (CadCraft frågar först om det finns osparade ändringar), eller lägg de öppna ritningarna sida vid sida: se [Dela skärmen](topic:split-screen).

## Öppna en ritning

- Tryck på {{key:Mod+O}}, klicka på {{ui:Öppna}} eller skriv `OPEN` och välj sedan filen.
- Eller dra en `.dwg`- eller `.dxf`-fil till ritytan.

Filen läses i din webbläsare. Den laddas inte upp någonstans. Historiken rapporterar hur många objekt och lager som kom in och hur lång tid det tog, och avsnittet {{ui:Ritning}} i den vänstra panelen visar formatet, till exempel ”DWG 2018 (AC1032)”.

DWG-läsaren är en del av CadCraft och hämtas med den första DWG du öppnar efter att sidan lästs in (några hundra KB), så det finns ingen separat nedladdning att vänta på. Den läser filen i bakgrunden, så sidan svarar fortfarande medan en stor DWG öppnas.

### Vad som kommer in

- Linjer, bågar, cirklar, polylinjer (med bågsegment), ellipser, punkter, text och flerradig text, solider, skraffering (standardmönstren ritade som sina linjer, andra som en jämn ton), blockreferenser med sina attribut (värden du kan redigera; se [Blockattribut](topic:attributes)), mått och layouter med sina vyportar.
- Splines kommer in som splines (grad, kontrollpunkter, knutar, vikter, passpunkter); se [Splines och polylinjer](topic:splines).
- Flerhänvisningar med en hänvisningslinje och text kommer in som CadCraft-flerhänvisningar som du kan redigera (se {{cmd:MLEADER}}). Andra (med ett block, flera hänvisningslinjer eller krökta linjer) ritas som det andra programmet ritade dem och flyttas som ett; historiken säger hur många.
- Bilder visas som en ram med bildens filnamn tills du ger CadCraft filen med {{cmd:IMAGE}}: se [Bilder i en ritning](topic:pictures#show-the-pictures-a-dwg-uses). Täckytor visas som sin ram, och det som ligger under dem förblir synligt.
- Tabeller i en DWG kommer in som det andra programmet ritade dem.
- 3D-ytor i modellrummet kommer in på fliken {{ui:3D}}, inte som 2D-objekt; det gäller också de inuti block, en gång per blockreferens i modellen. I ett block och på ett blad ritas de också platta, som konturer. Se [Modellera i 3D](topic:3d-solids).
- Lager behåller sin färg samt inställningarna på, fryst, låst och plott. DEFPOINTS plottas aldrig.
- Mått blir riktiga, redigerbara CadCraft-mått där deras punkter går att läsa. De visas först precis som det andra programmet ritade dem; så fort du ändrar ett ritar CadCraft om det i sin egen stil.
- Varje layout blir en bladflik. I det andra programmet har varje layout en dold första vyport som är själva bladet; CadCraft utelämnar den.

### Vad som inte kommer in ännu

Allt som CadCraft inte kan rita räknas, det gissas inte. Rutan ”Om den här filen” i den vänstra panelen listar det som ”Visas inte ännu:” följt av varje objektslag och hur många. Typiska fall är tabeller i en DXF, nät och 3D-solider inuti block. 3D-solider, regioner och kroppar i modellrummet visas på fliken 3D (se [Modellera i 3D](topic:3d-solids#solids-from-other-programs)). Vyportar som är vridna i filen visas vridna, som där, och behåller sin vridning när du sparar; det gör också det aktuella UCS, de namngivna UCS-systemen och en vriden vy.

Text ritas i ett enda typsnitt av Helvetica-typ. En etikett som ryms på en rad i det ursprungliga programmets smalare typsnitt kan radbrytas till två rader i CadCraft.

## Spara

Det finns tre sätt att spara. Varje sätt laddar ner en kopia.

- **Spara**: tryck på {{key:Mod+S}}, klicka på {{ui:Spara}} eller skriv `SAVE` (även `QSAVE`). Den sparar i ritningens format: DWG om du öppnade en DWG, DXF om du öppnade en DXF. En DWG behåller den version den kom in i (en 2018-fil sparas som 2018). En ny ritning använder det format och den DWG-version du senast valde i Spara som i den här webbläsaren; om du aldrig har valt någon, DWG i AutoCAD 2000-formatet.
- **Spara som**: tryck på {{key:Mod+Shift+S}}, klicka på {{ui:Spara som}} eller skriv `SAVEAS`. Dialogrutan {{ui:Spara en kopia som}} erbjuder {{ui:DWG}}, med en lista {{ui:Version}} (AutoCAD 2018, 2013, 2010, 2007, 2004 eller 2000), {{ui:DXF R12}} och {{ui:DXF 2000}}, var och en med det filnamn den ger, och med ritningens nuvarande format och version redan valda. Klicka på {{ui:Spara}} för att ladda ner, eller på {{ui:Avbryt}} (eller {{key:Esc}}) för att inte spara något; historiken säger då ”Inte sparad.” Det du väljer ligger kvar: {{key:Mod+S}} använder det för den här ritningen från och med nu, och nya ritningar i den här webbläsaren börjar med det.
- **DXFOUT**: skriv `DXFOUT`. Den laddar alltid ner en DXF R12-kopia, och nästa {{key:Mod+S}} sparar fortfarande i ritningens eget format.

Webbläsaren laddar ner `<ritningens namn>.dwg` eller `<ritningens namn>.dxf`. Varje sparning är en **ny nedladdning**; filen du öppnade skrivs aldrig över och ändras aldrig. Historiken bekräftar det, till exempel ”Sparade en kopia som Plan.dwg (DWG (AutoCAD 2018)). Din ursprungliga Plan.dxf är oförändrad.” För en DXF står det ”(DXF R12, öppnas i alla CAD-program)”. Raderna under listar allt som ändrades på vägen.

När CadCraft körs i skrivbordsappen fungerar sparandet som i andra skrivbordsprogram: {{key:Mod+S}} skriver tillbaka ritningen till filen du öppnade, i dess eget format och version, och historiken säger var den sparades. {{ui:Spara som}} och exporterna visar systemets sparadialog, och en `.dwg`-, `.dxf`- eller `.ccsheets`-fil som du dubbelklickar på öppnas i CadCraft.

För en PDF plottar du i stället (se nedan).

## Vad en DWG behåller och ändrar

CadCraft skriver DWG:n själv, i din webbläsare, med samma DWG-bibliotek som den läser med. Välj version i Spara som: AutoCAD 2000-formatet (filversion AC1015) öppnas i flest program, även gamla; de nyare formaten (2004, AC1018, upp till 2018, AC1032) behåller också äkta färger. Inget laddas upp, och att spara en DWG fungerar offline.

Varje version kontrolleras genom att de sparade filerna läses tillbaka med tre andra programs DWG-läsare och med CadCraft självt. En CadCraft-DWG har inte öppnats i själva AutoCAD ännu.

### Vad en DWG behåller

- Linjer, bågar, cirklar, ellipser, punkter och polylinjer med sina bågsegment.
- Enradig text med sin justering och breddfaktor.
- Flerradig och radbruten text, som flerradig text. Det andra programmet radbryter den på nytt från samma bredd.
- Objektfärger: enligt lager, enligt block, de 255 standardfärgerna, och äkta färger i 2004-formatet och senare.
- Lager med sin färg, linjetyp, linjetjocklek och sina inställningar på, fryst, låst och plott; objektens egna linjetyper, linjetjocklekar och linjetypsskalor, linjetypsmönstren och ritningens linjetypsskala.
- Ritningsenheterna och längdformatet (decimal, fot och tum, bråk …).
- Block med sin baspunkt och attributdefinitioner, även osynliga, konstanta och förinställda.
- Blockreferenser med sin skala, rotation och attributvärden.
- Heltäckande fyllningar och mönsterskraffering med sitt mönster, sin skala och vinkel (mönstrets egna linjer, så att andra program ritar samma linjer som CadCraft).
- Mått, som riktiga mått: andra program mäter om dem när de töjs. Varje mått behåller sina egna inställningar (texthöjd, pilstorlek, decimaler, längdformat) och sin text, och har den ritade kopia som varje DWG-mått har.
- Blad (layouter): varje blad med sin pappersstorlek och sina enheter, det som ritats på det och dess vyportar med vy och skala.
- Namngivna vyer.
- Flerhänvisningar, som flerhänvisningar.
- Lager- och blocknamn som du skrev dem, med stora och små bokstäver. (DXF R12 skriver dem med versaler.)

### Vad en DWG ändrar

Var och en av dessa listas i historiken när du har sparat, om den gäller din ritning.

| I CadCraft | I den sparade DWG:n |
|---|---|
| Äkta färger (valda med färgväljaren), i 2000-formatet | Den närmaste standardfärgen: 2000-formatet har bara de 255. Spara som 2004 eller senare för att behålla dem |
| Namngivna vyer på ett blad | Vyer i pappersrummet: en DWG anger inte vilket blad, så när CadCraft öppnar filen igen hör de till det första bladet |
| Flerradig text med breddfaktor | Normal teckenbredd: i en DWG gäller breddfaktorn bara enradig text |
| Lager- eller blocknamn med tecken som DWG inte tillåter | Ändras: ett namn från en länkad ritning som `Base\|Walls` blir `Base$0$Walls` (så som bindning av en länkad ritning namnger det), och andra tecken blir `_` |

### Varför R12, och vad som konverteras

När du sparar som DXF skriver CadCraft DXF R12, den version som alla CAD-program kan öppna. Den är äldre än vissa funktioner, så några saker skrivs i en enklare form:

| I CadCraft | I den sparade R12-filen |
|---|---|
| Flerradig text | Ett textobjekt per rad |
| Ellipser | Polylinjer som följer ellipsen |
| Skraffering (från öppnade filer) | Bara deras konturer |
| Äkta färger (valda med färgväljaren) | Den närmaste standardfärgen |
| Linjetjocklekar och objektens egna linjetypsskalor | Utelämnas: R12 har ingetdera (linjetyper behålls) |
| Lager- och blocknamn | Skrivs med versaler; mellanslag och andra tecken blir `_`, och namn kortas till 31 tecken (”Title block” blir `TITLE_BLOCK`) |
| Lager inställda att inte plottas | Andra program plottar dem (CadCraft kommer ihåg inställningen när ritningen har ett blad) |
| Mått | Riktiga mått med sitt eget ritade block, så att andra program visar dem som du ser dem |
| Flerhänvisningar | Linjerna, pilspetsen och texten de ritar |
| Namngivna vyer | Behålls, med namn i versaler; ett blads vyer kommer tillbaka på det första bladet |
| Flera blad | Det första bladet är det pappersrum som alla program visar; de andra behålls som block med namnen `CCLAYOUT_1`, `CCLAYOUT_2` … som CadCraft gör om till blad när det öppnar filen |

Historiken listar var och en av dessa som gällde din ritning.

:::tip
Om du vill fortsätta arbeta på en ritning under flera dagar sparar du som DXF och öppnar den DXF:en nästa gång. Allt som CadCraft kan rita överlever tur och retur, inklusive mått, block och alla blad.
:::

## Länkade ritningar (externreferenser)

{{cmd:XATTACH}} (`XA`, eller {{ui:Block}} › {{ui:Mer}} › {{ui:Länka en ritning (Xref)}}) länkar en annan DWG eller DXF: välj filen och klicka sedan där den ska hamna ({{key:Enter}} placerar den i 0,0). Den kommer in som ett block uppkallat efter filen, i rätt skala när de två ritningarna har olika enheter. Dess lager och block behåller sina namn med länkens namn framför — `Plan|Walls`, `Plan|Door` — så de blandas aldrig med dina: slå på och av de länkade lagren, frys eller lås dem som dina egna. En länk är skrivskyddad: ändra den andra ritningen och läs in den på nytt. Det du ställer in på en länks lager (färg, linjetyp, linjetjocklek, på/av, frys, lås, plott) behålls när du läser om den, när du sparar ritningen som DWG medan länken fortfarande är en länk, och när en annan ritning länkar den här.

{{cmd:XREF}} (`XR`): `?` listar länkarna (inlästa eller inte, vilken fil, hur många referenser); `A` bifogar; `R` läser om en från dess fil (välj filen igen: webbläsaren kommer inte åt dina mappar på egen hand); `B` binder en (den blir vanliga block och lager med namn som `Plan$0$Walls`); `D` lösgör en (dess referenser och lager försvinner). Var och en är ett ångrasteg.

{{cmd:XCLIP}} (`XC`) beskär blockreferenser och länkar: markera dem, `N` för en ny gräns, sedan `R` och två hörn eller `P` och punkterna i en polygon ({{key:Enter}} stänger den); `D` tar bort beskärningen. Bara det som ligger innanför visas och plottas, och beskärningen följer med referensen. DWG och DXF 2000 behåller beskärningar; DXF R12 sparar referensen hel och säger det. När du binder en länk som har beskurna referenser frågar {{cmd:XREF}} `B`: `A` binder allt, `C` behåller bara varje referens beskurna del (linjer och bågar kapas vid gränsen; texter och nästlade block blir kvar när deras infogningspunkt ligger innanför).

En ritning du öppnar kan länka filer som CadCraft inte ser: den säger hur många som inte är inlästa. Använd {{cmd:XREF}}, `R` och välj varje fil för att se dem.

När du sparar **binds** en inläst länk in i filen (andra program ser vanliga block och lager med namn som `Plan$0$…`), och historiken säger det. En länk som inte är inläst förblir en länk till sin fil, i DWG och DXF.

## Öppna i 3D

{{ui:Vy}} › {{ui:Mer}} › {{ui:Öppna i ModelCraft}} ({{cmd:OPENIN3D}}) öppnar ritningen i 3D-modelleringsappen i en ny flik, som DWG, utan att ladda upp den. Ändringar som görs där stannar där; spara dem där. Menyalternativet visas bara där den appen kan ta emot en överlämnad ritning.

## Plotta en PDF

Tryck på {{key:Mod+P}}, klicka på {{ui:Plotta}} eller skriv `PLOT`. PDF:en skapas i webbläsaren och laddas ner, eller öppnas i en ny flik för utskrift. Se [Plotta till PDF](topic:plot-pdf).

## Var filerna hamnar

Varje sparning och varje plottning är en nedladdning, så filerna hamnar där din webbläsare lägger nedladdningar: oftast mappen Nedladdningar. För att välja mapp varje gång ändrar du nedladdningsinställningen i webbläsaren; [Webbläsare och datorer](common:browsers) visar var.

Inget du öppnar eller sparar skickas till oss. Se [Var dina filer tar vägen](common:your-files).

## Projektfilerna PLN och PLA

CadCraft öppnar DWG- och DXF-ritningar, inte Archicads egna filer (`.pln`, `.pla`, `.tpl`, `.bpn`). Om du öppnar en får du veta vad den är. Spara i Archicad de vyer eller layouter du behöver som DWG och öppna dem här, eller exportera modellen som IFC och öppna den i BimCraft. Där BimCraft kan ta över filen erbjuder CadCraft {{ui:Öppna i BimCraft}}.

## Om sidan stängs innan du sparar

CadCraft behåller en kopia av varje ritning du ändrar, bara i den här webbläsaren, en stund efter att du slutat redigera. Om fliken stängs, webbläsaren avslutas eller datorn startar om innan du sparar frågar CadCraft **Återställa ditt arbete?** nästa gång den startar: {{ui:Återställ}} öppnar ritningen igen, osparad, i en egen flik. När du sparar ritningen tas dess kopia bort. Se [Återställ ditt arbete](common:recover).

## Online och offline

Att öppna, rita, spara (DWG och DXF) och plotta sker på din dator, så allt fungerar utan anslutning när CadCraft väl har lästs in.

För att använda CadCraft helt utan anslutning klickar du på {{ui:Spara för offline}} i fältet högst upp medan du är online. Etiketten räknar upp (”Sparar 40 av 212”) och slutar på ”Redo offline”. Den sparade kopian innehåller DWG-läsaren, ungefär 5 MB totalt, så **DWG-filer öppnas också offline** när den är sparad. Klicka på knappen igen för {{ui:Spara igen (hämta den senaste versionen)}} eller {{ui:Ta bort offlinekopian}}. ”Det gick inte att spara” betyder att vissa filer inte laddades ner: kontrollera anslutningen och klicka för att försöka igen. ”Offline är inte tillgängligt” betyder att det här webbläsarfönstret inte kan behålla en kopia (privata fönster och vissa hanterade datorer).

Utan en sparad kopia hämtas DWG-läsaren första gången du öppnar en DWG efter att sidan lästs in, så att öppna en DWG offline kan misslyckas; DXF-filer behöver den aldrig. Läs inte om sidan medan du är offline om inte CadCraft är sparat.

Se [Arbeta offline](common:offline) för detaljerna.

:::offline
Du är offline nu. Ritningar sparas som DWG eller DXF och plottas som vanligt, och DXF-filer öppnas. DWG-filer öppnas om CadCraft visar ”Redo offline”, eller om DWG-läsaren redan har lästs in i den här fliken.
:::

## Villkor i filer

Villkor och parametrar (se [Villkorsstyr en ritning](topic:constraints)) sparas i både DWG och DXF. Varje villkorsstyrt objekt bär en liten CadCraft-anteckning (utökad data), och ett oanvänt block med namnet `CADCRAFT_PARAMETRIC` håller villkoren och parametertabellen. Andra program öppnar ritningen som vanligt och ignorerar båda; de kan ta bort det oanvända blocket när de rensar. Anteckningarna refererar till objekt med deras egen nyckel, inte filens handtagsnummer, så ett program som numrerar om handtag förstör dem inte. När ett annat program har tagit bort eller ändrat ett villkorsstyrt objekt släpper CadCraft villkoren på det när filen öppnas och säger hur många. En fil utan dem öppnas utan villkor.

En skiss som exporterats från en delmodellerare (`.json`) öppnas också: se [Flytta skisser till och från andra delmodellerare](topic:solidworks-sketches).

## Finns inte ännu

- Flerhänvisningar som flerhänvisningsobjekt i en sparad DXF (R12 har inga: de sparas som det de ritar).
- Bilder i en sparad DXF (de sparas som sina ramar; DWG behåller dem som bilder), och täckytor som döljer det som ligger under.
- Att spara en nyare DXF-version än 2000.
- Molnlagring och synkronisering mellan datorer.

Se [Finns inte ännu](topic:not-built-yet) för hela listan.
