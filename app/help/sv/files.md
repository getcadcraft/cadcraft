---
title: Filer: vad som öppnas, vad som sparas
summary: Formaten CadCraft öppnar, sparar och exporterar, vad som behålls eller konverteras, och vart filerna går.
keywords: xclip, clip, xclip-gräns, bind klippt, dwg, dxf, pdf, r12, öppna, spara, exportera, importera, format, konvertering, nedladdning, saveas, dxfout, spara som, dwg-spara, format, qsave, xref, xattach, länkad ritning, extern referens, bind, ladda om, koppla bort
from: b8c5778d
---

## Översikt

| Format | Öppna | Spara | Anteckningar |
|---|---|---|---|
| DXF (text eller binär, valfri version) | Ja | Ja, som DXF R12, DXF 2000 eller DXF 2000 (binär) | En binär DXF öppnas som en textfil och sparas tillbaka som binär. |
| DWG | Ja | Ja, som DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 eller 2018) | Läses och skrivs av CadCraft:s egna DWG-bibliotek (AutoCAD R13 till 2018-filer). Din DWG ändras aldrig. Skadade filer, eller versioner som läsaren inte hanterar, avvisas med ett meddelande. |
| PDF | Hämtar in en sida: som underlägg eller som objekt ([PDF-underlägg](topic:pdf-underlay)) | Ja, genom utskrift | Vektor-PDF av ett blad, eller av modellen i en skala. |

Varje ritning du öppnar (eller startar med {{ui:Ny}}) får en egen flik över ritningsytan; en ny ritning som ingen har rört ännu används i stället för att lägga till en flik. Klicka på en flik för att byta, på dess {{ui:×}} för att stänga den (CadCraft frågar först om det finns osparade ändringar), eller lägg de öppna ritningarna sida vid sida: se [Dela skärmen](topic:split-screen).

## Öppna en ritning

- Tryck på {{key:Mod+O}}, klicka på {{ui:Öppna}}, eller skriv `OPEN`, och välj sedan filen.
- Eller dra en `.dwg`- eller `.dxf`-fil till ritningsytan.

Filen läses i din webbläsare. Den laddas inte upp någonstans. Historiken rapporterar hur många objekt och lager som kom in och hur lång tid det tog, och avsnittet {{ui:Ritning}} i vänster panel visar formatet, till exempel ”DWG 2018 (AC1032)”.

DWG-läsaren är en del av CadCraft och hämtas tillsammans med den första DWG-filen du öppnar efter att sidan laddats (några hundra kB), så det finns ingen separat nedladdning att vänta på. Den läser filen i bakgrunden, så sidan svarar fortfarande medan en stor DWG öppnas.

En DXF läses i delar om cirka 4 MB, aldrig som en enda textbit, så en DXF över 512 MB öppnas också. Det som begränsar är datorns minne: medan en DXF öppnas bör du räkna med att den använder ungefär 16 till 20 gånger filens storlek (en 100 MB DXF med cirka 690,000 objekt använde cirka 1.5 GB i vårt test).

### Vad som kommer in

- Linjer, bågar, cirklar, polylinjer (med bågsegment), ellipser, punkter, text och flerradig text, heltäckande ytor, skrafferingar (de vanliga mönstren ritade som sina linjer, andra som en platt ton), blockreferenser med sina attribut (värden du kan redigera; se [Blockattribut](topic:attributes)), måttsättningar och layouter med deras vyportar.
- Splines kommer in som splines (grad, kontrollpunkter, knutar, vikter, anpassningspunkter); se [Splines och polylinjer](topic:splines).
- Flerhänvisningar med en hänvisningslinje och text kommer in som CadCraft-flerhänvisningar som du kan redigera (se {{cmd:MLEADER}}). Andra (med ett block, flera hänvisningslinjer eller böjda linjer) ritas som det andra programmet ritade dem och flyttas som en enhet; historiken säger hur många.
- Bilder (images) visas som en ram med bildens filnamn tills du ger CadCraft filen med {{cmd:IMAGE}}: se [Bilder i en ritning](topic:pictures#show-the-pictures-a-dwg-uses). Täckytor (wipeouts) visas som sin ram, och det som ligger under dem förblir synligt.
- Tabeller i en DWG kommer in som det andra programmet ritade dem.
- 3D-ytor i modellrummet kommer in på fliken {{ui:3D}}, inte som 2D-objekt; så även de inuti block, en gång per blockreferens i modellen. I ett block och på ett blad ritas de också platt, som konturer. Se [Modellera i 3D](topic:3d-solids).
- Lager behåller sin färg, på, fryst, låst och utskriftsinställningar. DEFPOINTS skrivs aldrig ut.
- Måttsättningar blir riktiga, redigerbara CadCraft-måttsättningar där deras punkter kan läsas. De visas först exakt så som det andra programmet ritade dem; så snart du ändrar en ritar CadCraft om den i sin egen stil.
- Varje layout blir en bladflik. I det andra programmet har varje layout en dold första vyport som är själva bladet; CadCraft utelämnar den.

### Vad som ännu inte kommer in

Allt CadCraft inte kan rita räknas, det gissas inte. Rutan ”Om den här filen” i vänster panel listar det som ”Ännu inte visat:” följt av varje typ av objekt och hur många. Typiska fall är tabeller i en DXF, nät och 3D-solids inuti block. 3D-solids, regioner och kroppar i modellrummet visas på fliken 3D (se [Modellera i 3D](topic:3d-solids#solids-from-other-programs)). Vyportar som vridits i filen visas vridna, som där, och behåller vridningen när du sparar; så gör den aktuella UCS:en, de namngivna UCS:erna och en vriden vy.

Text ritas i ett typsnitt i Helvetica-stil. En etikett som ryms på en rad i det ursprungliga programmets smalare typsnitt kan brytas till två rader i CadCraft.

## Spara

Det finns tre sätt att spara. Varje sparning laddar ner en kopia.

- **Spara**: tryck på {{key:Mod+S}}, klicka på {{ui:Spara}}, eller skriv `SAVE` (även `QSAVE`). Den sparar i ritningens format: DWG om du öppnade en DWG, DXF om du öppnade en DXF. En DWG behåller versionen den kom med (en 2018-fil sparas som 2018). En ny ritning använder formatet och DWG-versionen du senast valde i {{ui:Spara som}} i den här webbläsaren; om du aldrig valde någon, DWG i AutoCAD 2000-formatet.
- **Spara som**: tryck på {{key:Mod+Shift+S}}, klicka på {{ui:Spara som}}, eller skriv `SAVEAS`. Dialogrutan {{ui:Spara en kopia som}} erbjuder {{ui:DWG}}, med en lista {{ui:Version}} (AutoCAD 2018, 2013, 2010, 2007, 2004 eller 2000), {{ui:DXF R12}} och {{ui:DXF 2000}}, var och en med filnamnet den ger, och ritningens aktuella format och version redan valda. Klicka på {{ui:Spara}} för att ladda ner, eller {{ui:Avbryt}} (eller {{key:Esc}}) för att spara ingenting; historiken säger då ”Inte sparad.” Det du väljer gäller: {{key:Mod+S}} använder det för den här ritningen från då och med, och nya ritningar i den här webbläsaren börjar med det.
- **DXFOUT**: skriv `DXFOUT`. Den laddar alltid ner en DXF R12-kopia, och nästa {{key:Mod+S}} sparar fortfarande i ritningens eget format.

Webbläsaren laddar ner `<ritningsnamn>.dwg` eller `<ritningsnamn>.dxf`. Varje sparning är en **ny nedladdning**; filen du öppnade skrivs aldrig över eller ändras. Historiken bekräftar det, till exempel ”Kopia sparad som Plan.dwg (DWG (AutoCAD 2018)). Din originalfil Plan.dxf är oförändrad.” För en DXF står det ”(DXF R12, öppnas i alla CAD-program)”. Raderna under den listar allt som ändrades på vägen.

När CadCraft körs i skrivbordsappen fungerar sparandet som i andra skrivbordsprogram: {{key:Mod+S}} skriver ritningen tillbaka till filen du öppnade, i dess eget format och version, och historiken säger var den sparades. {{ui:Spara som}} och exporterna visar systemets dialogruta för att spara, och en `.dwg`-, `.dxf`- eller `.ccsheets`-fil som du dubbelklickar på öppnas i CadCraft.

För en PDF-fil, plotta i stället (se nedan).

## Vad en DWG behåller och ändrar

CadCraft skriver DWG-filen själv, i din webbläsare, med samma DWG-bibliotek som den läser med. Välj versionen i {{ui:Spara som}}: AutoCAD 2000-formatet (filversion AC1015) öppnas i flest program, även gamla; de nyare formaten (2004, AC1018, upp till 2018, AC1032) behåller också äkta färger. Inget laddas upp, och att spara en DWG fungerar offline.

Varje version kontrolleras genom att de sparade filerna läses tillbaka med tre andra programs DWG-läsare och med CadCraft själv. En DWG från CadCraft har ännu inte öppnats i AutoCAD självt.

### Vad en DWG behåller

- Linjer, bågar, cirklar, ellipser, punkter och polylinjer med sina bågsegment.
- Enradig text med dess justering och breddfaktor.
- Flerradig och brutande text, som flerradig text. Det andra programmet bryter den igen från samma bredd.
- Objektens färger: enligt lager, enligt block, de 255 standardfärgerna, och äkta färger i 2004-formatet och senare.
- Lager med deras färg, linjetyp, linjetjocklek och deras på-, fryst-, låst- och utskriftsinställningar; objektens egna linjetyper, linjetjocklekar och linjetypsskalor, linjetypsmönstren och ritningens linjetypsskala.
- Ritningens enheter och längdformatet (decimal, fot och tum, bråk …).
- Block med deras baspunkt och attributdefinitioner, inklusive osynliga, konstanta och förinställda.
- Blockreferenser med deras skala, rotation och attributvärden.
- Heltäckande ytor, och mönsterskrafferingar med deras mönster, skala och vinkel (mönstrets egna linjer, så att andra program ritar samma linjer som CadCraft gör).
- Måttsättningar, som riktiga måttsättningar: andra program mäter om dem när de sträcks. Varje behåller sina egna inställningar (texthöjd, pilstorlek, decimaler, längdformat) och sin text, och bär den ritade kopian som varje DWG-måttsättning har.
- Blad (layouter): varje blad med sitt pappersformat och sina enheter, det som ritats på det, och dess vyportar med deras vy och skala.
- Namngivna vyer.
- Flerhänvisningar, som flerhänvisningar.
- Lager- och blocknamn som du skrev dem, med stora och små bokstäver. (DXF R12 skriver dem med versaler.)

### Vad en DWG ändrar

Var och en av dessa listas i historiken efter att du sparat, när den gäller din ritning.

| I CadCraft | I den sparade DWG-filen |
|---|---|
| Äkta färger (valda med färgväljaren), i 2000-formatet | Närmaste standardfärg: 2000-formatet har bara de 255. Spara som 2004 eller senare för att behålla dem |
| Namngivna vyer på ett blad | Pappersrumsvyer: en DWG säger inte vilket blad, så när CadCraft öppnar filen igen hör de till det första bladet |
| Flerradig text med en breddfaktor | Normal bokstavsbredd: i en DWG gäller breddfaktorn bara för enradig text |
| Lager- eller blocknamn med tecken som DWG inte tillåter | Ändrat: ett namn från en länkad ritning som `Base\|Walls` blir `Base$0$Walls` (så som bindning av en länkad ritning namnger det), och andra tecken blir `_` |

### Varför R12, och vad som konverteras

När du sparar som DXF skriver CadCraft DXF R12, den version som alla CAD-program kan öppna. Den är äldre än vissa funktioner, så några saker skrivs i enklare form:

| I CadCraft | I den sparade R12-filen |
|---|---|
| Flerradig text | Ett textobjekt per rad |
| Ellipser | Polylinjer som följer ellipsen |
| Skrafferingar (från öppnade filer) | Bara deras konturer |
| Äkta färger (valda med färgväljaren) | Närmaste standardfärg |
| Linjetjocklekar, och objektens egna linjetypsskalor | Utelämnas: R12 har varken ena eller andra (linjetyper behålls) |
| Lager- och blocknamn | Skrivs med versaler; mellanslag och andra tecken blir `_`, och namn kortas till 31 tecken (”Title block” blir `TITLE_BLOCK`) |
| Lager som är satta att inte skrivas ut | Andra program skriver ut dem (CadCraft minns inställningen när ritningen har ett blad) |
| Måttsättningar | Riktiga måttsättningar med sitt eget ritade block, så att andra program visar dem som du ser dem |
| Flerhänvisningar | Linjerna, pilspetsen och texten de ritar |
| Namngivna vyer | Behålls, med namn i versaler; ett blads vyer kommer tillbaka på det första bladet |
| Flera blad | Det första bladet är pappersrummet som alla program visar; de övriga behålls som block med namnen `CCLAYOUT_1`, `CCLAYOUT_2` … som CadCraft gör om till blad när den öppnar filen |

Historiken listar var och en av dessa som gällde din ritning.

:::tip
För att fortsätta arbeta på en ritning under flera dagar, spara som DXF och öppna den DXF:en nästa gång. Allt CadCraft kan rita överlever rundresan, inklusive måttsättningar, block och alla blad.
:::

## Länkade ritningar (externa referenser)

{{cmd:XATTACH}} (`XA`, eller {{ui:Block}} › {{ui:Mer}} › {{ui:Länka en ritning (Xref)}}) länkar en annan DWG eller DXF: välj filen och klicka sedan där den ska stå ({{key:Enter}} placerar den vid 0,0). Den kommer in som ett block med namnet efter filen, i rätt skala när de två ritningarna har olika enheter. Dess lager och block behåller sina namn med länkens namn framför: `Plan|Walls`, `Plan|Door` — så att de aldrig blandas med dina. Slå på och av de länkade lagren, frys eller lås dem som dina egna. En länk är skrivskyddad: ändra den andra ritningen och ladda om den. Det du ställer in på en länks lager (färg, linjetyp, linjetjocklek, på/av, frys, lås, utskrift) behålls när du laddar om den, när du sparar ritningen som DWG medan länken fortfarande är en länk, och när en annan ritning länkar till denna.

{{cmd:XREF}} (`XR`): `?` listar länkarna (inlästa eller inte, vilken fil, hur många referenser); `A` bifogar; `R` laddar om en från dess fil (välj filen igen: webbläsaren kan inte nå dina mappar på egen hand); `B` binder en (den blir vanliga block och lager med namn som `Plan$0$Walls`); `D` kopplar bort en (dess referenser och lager tas bort). Varje är ett steg att ångra.

{{cmd:XCLIP}} (`XC`) klipper blockreferenser och länkar: markera dem, `N` för en ny gräns, sedan `R` och två hörn eller `P` och punkterna i en polygon ({{key:Enter}} sluter den); `D` tar bort klippet. Endast det som ligger inuti visas och skrivs ut, och klippet följer referensen. DWG och DXF 2000 behåller klipp; DXF R12 sparar referensen hel och säger det. När du binder en länk som har klippta referenser frågar {{cmd:XREF}} `B`: `A` binder allt, `C` behåller bara varje referens klippta del (linjer och bågar skärs vid gränsen; texter och inbäddade block stannar kvar när deras infogningspunkt ligger inuti).

En ritning du öppnar kan länka filer som CadCraft inte kan se: den säger hur många som inte är inlästa. Använd {{cmd:XREF}}, `R` och välj varje fil för att se dem.

När du sparar bindas en inläst länk **in** i filen (andra program ser vanliga block och lager med namn som `Plan$0$…`), och historiken säger det. En länk som inte är inläst förblir en länk till sin fil, i DWG och DXF.

## Öppna i 3D

{{ui:Vy}} › {{ui:Mer}} › {{ui:Öppna i ModelCraft}} ({{cmd:OPENIN3D}}) öppnar ritningen i 3D-modelleringsappen i en ny flik, som en DWG, utan att ladda upp den. Ändringar som görs där stannar där; spara dem där. Menyalternativet visas bara där den appen kan ta emot en överlämnad ritning.

## Plotta en PDF

Tryck på {{key:Mod+P}}, klicka på {{ui:Plot}}, eller skriv `PLOT`. PDF-filen skapas i webbläsaren och laddas ner, eller öppnas i en ny flik för utskrift. Se [Plotta till PDF](topic:plot-pdf).

## Var filerna hamnar

Varje sparning och varje plott är en nedladdning, så filerna hamnar där din webbläsare lägger nedladdningar: vanligtvis mappen Hämtade filer. För att välja en mapp varje gång, ändra nedladdningsinställningen i din webbläsare; [Webbläsare och datorer](common:browsers) visar var.

Inget du öppnar eller sparar skickas till oss. Se [Var dina filer hamnar](common:your-files).

## PLN- och PLA-projektfiler

CadCraft öppnar DWG- och DXF-ritningar, inte Archicads egna filer (`.pln`, `.pla`, `.tpl`, `.bpn`). Om du öppnar en sådan visas vad den är. I Archicad, spara de vyer eller layouter du behöver som DWG och öppna dem här, eller exportera modellen som IFC och öppna den i BimCraft. Där BimCraft kan ta över filen erbjuder CadCraft {{ui:Öppna i BimCraft}}.

## Om sidan stängs innan du sparar

CadCraft behåller en kopia av varje ritning du ändrar, i den här webbläsaren enbart, en stund efter att du slutat redigera. Om fliken stängs, webbläsaren stoppas eller datorn startas om innan du sparar, frågar CadCraft **Återställ ditt arbete?** nästa gång den startar: {{ui:Återställ}} öppnar ritningen igen, osparad, i en egen flik. Om du sparar ritningen tas dess kopia bort. Se [Återställ ditt arbete](common:recover).

## Online och offline

Att öppna, rita, spara (DWG och DXF) och plotta sker alla på din dator, så de fungerar utan anslutning när CadCraft har laddats.

För att använda CadCraft utan någon anslutning alls, klicka på {{ui:Spara för offline}} i fältet överst medan du är online. Texten räknar upp (”Sparar 40 av 212”) och slutar på ”Offline klart”. Den sparade kopian innehåller DWG-läsaren, cirka 5 MB totalt, så **DWG-filer öppnas även offline** när den har sparats. Klicka på knappen igen för {{ui:Spara igen (hämta den senaste versionen)}} eller {{ui:Ta bort offlinekopian}}. ”Kunde inte spara” betyder att vissa filer inte laddades ner: kontrollera anslutningen och klicka för att försöka igen. ”Offline inte tillgängligt” betyder att det här webbläsarfönstret inte kan behålla en kopia (privata fönster och vissa hanterade datorer).

Utan en sparad kopia hämtas DWG-läsaren första gången du öppnar en DWG efter att sidan laddats, så att öppna en DWG offline kan misslyckas; DXF-filer behöver aldrig den. Ladda inte om sidan offline om inte CadCraft är sparat.

Se [Arbeta offline](common:offline) för detaljerna.

:::offline
Du är offline nu. Ritningar sparas som DWG eller DXF och plottas normalt, och DXF-filer öppnas. DWG-filer öppnas om CadCraft visar ”Offline klart”, eller om DWG-läsaren redan laddats i den här fliken.
:::

## Villkor i filer

Villkor och parametrar (se [Villkora en ritning](topic:constraints)) sparas i både DWG och DXF. Varje villkorat objekt bär en liten CadCraft-anteckning (utökad data), och ett oanvänt block med namnet `CADCRAFT_PARAMETRIC` innehåller villkoren och parametertabellen. Andra program öppnar ritningen normalt och ignorerar båda; de kan ta bort det oanvända blocket när de rensar. Anteckningarna refererar till objekt med deras egen nyckel, inte filens handtag, så ett program som numrerar om handtag inte bryter dem. När ett annat program har tagit bort eller ändrat ett villkorat objekt, tar CadCraft bort villkoren på det när den öppnar filen och säger hur många. En fil utan dem öppnas utan villkor.

En skiss som exporterats från ett delmodelleringsprogram (`.json`) öppnas också: se [Flytta skisser till och från andra delmodelleringsprogram](topic:solidworks-sketches).

## Inte tillgängligt ännu

- Flerhänvisningar som flerhänvisningsobjekt i en sparad DXF (R12 har inga: de sparas som det de ritar).
- Bilder i en sparad DXF (de sparas som sina ramar; DWG behåller dem som bilder), och täckytor som döljer det som ligger under.
- Att spara en nyare DXF-version än 2000.
- Molnsparande och synkronisering mellan datorer.

Se [Finns inte ännu](topic:not-built-yet) för hela listan.
