---
title: Finns inte ännu
summary: Vad den här versionen av ritningsappen CadCraft inte gör ännu, och vad du ska göra i stället idag.
keywords: saknas, begränsningar, ctb, stb, plottstil, egenskaper, ucs, annoterande, dynamiskt block, spline, färdplan, stöds inte, DWG-sparning, skraffering, töj, matris, sammanfoga, matchprop, bryt, ändra längd, linjetyp, linjetjocklek, xref, revisionsmoln, 3d, solid, booleska operationer, flerhänvisning, täckyta
from: 87e56521
---

CadCraft är under utveckling. Den här sidan listar vad den nuvarande versionen inte gör, så att du slipper leta efter det. Varje post säger vad du ska göra i stället idag.

## Filer och sparning

| Finns inte ännu | I stället, idag |
|---|---|
| En CadCraft-DWG som kontrolleras i AutoCAD självt | Varje sparad version läses tillbaka av tre andra programs DWG-läsare och av CadCraft. Se [Vad en DWG behåller och ändrar](topic:files#what-a-dwg-keeps-and-changes). |
| Att spara DXF nyare än 2000 | Spara som DXF 2000, eller som DWG upp till AutoCAD 2018. |
| Att spara över den öppnade filen i webbläsaren | Varje sparning laddar ner en ny kopia; ersätt den gamla filen själv om du vill. I CadCraft Studio skriver {{key:Mod+S}} tillbaka till filen du öppnade. |
| Molnsparning och synkronisering mellan datorer | CadCraft skickar inte dina sparningar till molnet ännu: behåll dina DWG- och DXF-filer i egna mappar. I CadCraft Studio listar [Historik](topic:history) molnversionerna av en ritning som sparats någon annanstans, och kopior av dina egna sparningar på den här datorn. |
| Överlägg, och redigering av en länkad ritning på plats | Bifoga ritningen som en länk och ladda om den efter att du ändrat den andra ritningen. En länk förblir en länk när du sparar som DWG, och {{cmd:XCLIP}} klipper den. |
| Bilder i DXF; täckytor som döljer det som finns under dem | DXF behåller en bild som sin ram med filnamnet; DWG behåller den som en bild — se [Bilder i en ritning](topic:pictures). En täckyta visas som sin ram. |
| Redigering av flerhänvisningar med böjda hänvisningslinjer, med hänvisningslinjer på båda sidor om innehållet, eller med ett block som vrids eller skalas ojämnt | De ritas som det andra programmet ritade dem och flyttas som en enhet. Flerhänvisningar med raka hänvisningslinjer till en landningspunkt, och text eller ett block som innehåll, kommer in redigerbara ({{cmd:MLEADEREDIT}}). |
| I tabeller från andra program: en cell som innehåller ett block, textformatering inuti en cell, kantlinjer och färger per cell i en DXF-tabell, en tabell uppdelad i kolumner | Tabellen öppnas som en redigerbar tabell ({{cmd:TABLEDIT}}) och visas som det andra programmet ritade den tills du redigerar den; sedan ritar CadCraft om den från dess celler: vanlig text, formler som `=G3*H3` och `=Sum(I3:I9)`, justering och texthöjder. En blockcell blir då tom. En orörd DWG-tabell sparas tillbaka med de celldata den kom med. |
| Ett riktigt tabellobjekt i en sparad DXF | En DWG behåller en tabell som en tabell som andra program kan redigera. En DXF behåller den som blocket som ritar den, med CadCraft:s egna register: CadCraft öppnar den som tabell igen; andra program ser ett block. En spegelvänd eller ojämnt skalad tabell sparas så även i en DWG. |
| Kopiera och klistra in med andra program | CadCraft:s urklipp fungerar mellan CadCraft-ritningar och flikar i samma webbläsare, inte med andra program. Spara som DWG eller DXF och öppna den där. Se [Kopiera, klistra in och duplicera](topic:copy-paste). |

## Ritning och redigering

| Finns inte ännu | I stället, idag |
|---|---|
| Skrafferingsmönster som CadCraft inte har, och toningar exakt så som andra program målar dem | Öppnade skrafferingar med mönster som CadCraft inte har visas som en ton. En toning ({{cmd:GRADIENT}}) målas på CadCraft:s eget sätt för varje typ: likt andra programs i art, inte punkt för punkt. DWG 2004 och senare behåller den som en riktig toningsskraffering; i en DXF 2000- eller DWG 2000-fil läser bara CadCraft tillbaka den, och andra program ser en heltäckande fyllning. Mönster laddas från en `.pat`-fil, och en skraffering kan kopplas till sin gräns och följa den: se [Skraffering och fyllningsytor](topic:hatch). |
| Linjetyper med former eller text i sig, och linjetjocklekar i en sparad DXF R12 | Former och text i en fils linjetyp utelämnas från dess streck; spara som DWG för att behålla linjetjocklekar. |
| Mönsterskraffering i en sparad DXF | R12 har ingen skraffering: den sparas som sina konturer. Spara som DWG för att behålla mönstret. |
| Matriser som andra program gjort eller kan redigera; rader och nivåer i bana- och polära matriser; en matris som följer sin bankurva | En matris gjord med ASsociativ ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; ändras med {{cmd:ARRAYEDIT}}) sparas som en blockreferens med CadCraft:s egna tal: andra program visar, flyttar, plottar och sprängar den men kan inte ändra dess antal, och en matris gjord i ett annat program öppnas här som en vanlig blockreferens. En banmatris behåller en kopia av sin bana: om du ändrar kurvan efteråt flyttas inte objekten. |
| Klippta bladvyportar till och från andra program | En vyport klippt med {{cmd:VPCLIP}} eller gjord med {{cmd:MVIEW}} Polygonal eller Objekt sparas med CadCraft:s egna kontur: andra program öppnar den som rektangeln runt den, och en vyport klippt i ett annat program öppnas här som sin rektangel. DXF R12 behåller bara rektangeln. |
| {{cmd:STRETCH}} med en korsande polygon | Använd ett eller flera korsande fönster. |
| {{cmd:PEDIT}} Redigera hörn (ett hörn i taget på kommandoraden) | Handtag, och hörnbläddraren i Egenskaper (alla hörn, deras bredder och välvning). Resten av PEDIT finns: se [Splines och polylinjer](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} och {{cmd:JOIN}} på ellipser och splines | {{cmd:EXPLODE}} en spline (eller {{cmd:PEDIT}} den) för att få en polylinje som dessa kommandon tar. |
| Rundning och fasning mellan ett bågsegment i en polylinje och segmentet intill; rundning som fogar en linje till en polylinje | {{cmd:EXPLODE}} polylinjen och runda sedan bitarna. Rundningsbågen läggs till som ett eget objekt. |
| Trimma och förlänga: alternativet Projekt (3D) och förlängning av en polylinjes bågände | Trimma i ritningens plan; för en bågände, spränga polylinjen eller rita bågen igen. |
| OLE-objekt: infoga dem, kör eller redigera dem; visa dem i en DWG där filen placerar dem; metafilbilder | Se [Bilder](topic:pictures#objects-from-other-programs-ole). En DXF:s objekt visas som sin bitmap eller en märkt ram; en DWG:s behålls, men ritas inte på plats (OLELIST listar dem och placerar en kopia av en bild där du anger). |
| Skriva formateringskoder (fetstil, staplade bråk, färger per ord) i styckestext; andra teckensnitt än det Helvetica-liknande; kolumner | Formatering som kom in i en fil behålls, ritas och sparas (se Text); ny styckestext har en höjd och en färg. |
| Styckestext redigerad i sin rotation | Redigeraren öppnas plan; texten behåller sin rotation. |
| Flerhänvisningar sparade som flerhänvisningsobjekt i en DXF | En DWG behåller dem som flerhänvisningar, med varje hänvisningslinje och ett block som innehåll; en DXF behåller det de ritar (linjer, pilspetsar och text eller blocket). |
| I tabeller ({{cmd:TABLE}}): text som bryts inuti en cell, tabeller som delas i delar, en tabellstils egen textstil och färger per radtyp i en dialogruta, en datalänk till en kalkylbladsfil (`.xlsx`) eller en som läser filen själv | En cells text bryts bara där du bryter den ({{key:Alt+Enter}}); bred ut kolumnen. {{cmd:DATALINK}} läser en `.csv`-fil, och {{cmd:DATALINKUPDATE}} ber dig välja filen igen. {{cmd:DATAEXTRACTION}} och {{cmd:COUNTTABLE}} gör en tabell som inte följer ritningen av sig själv: kör dem igen (en levande räkning: {{cmd:BOMTABLE}}). |
| Attributdefinitioner som ligger för sig i en sparad fil (utanför ett block), attribut med flera rader | Lägg attributdefinitioner i ett block innan du sparar: på egen hand sparas de som text som visar taggen. |
| Lagertillstånd (spara och återställa vilka lager som är på) | Använd {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, eller slå på och av lager för hand. |
| Fönsterpolygon och korsande polygonmarkering, samt sparade markeringsfilter | Staket (`F`), Fönster, Korsande, Ta bort (`R`), {{cmd:QSELECT}} för en regel. |


## Egenskapspanelen

| Finns inte ännu | I stället, idag |
|---|---|
| Ritning av valen för Anpassning, och den horisontella textpositionen samt text under linjen på andra mått än linjära och justerade | De behålls på objektet, visas i Egenskaper och sparas; CadCraft placerar texten efter sin egen regel. |
| Material som andra program ser | En sparad fil behåller materialnamnet för CadCraft; andra program visar lagrets material. |
| Transparens i DWG 2000 och DXF-filer | Andra program visar de objekten helfyllda; CadCraft behåller transparensen. Spara som DWG 2004 eller senare för alla. |
| En skrafferingslänk gjord i ett annat program | CadCraft sparar sin egen länk i DWG- och DXF 2000-filer; länkar gjorda i andra program läses inte. Använd `HATCHEDIT` och Länk: se [Skraffering och fyllningsytor](topic:hatch). |
| Koordinater i Egenskaper i UCS | Egenskaper visar världskoordinater; statusfältet och {{cmd:ID}} visar UCS-koordinater. Se [Vrid vyn och använd egna koordinater](topic:ucs-and-turned-view). |
| En separat position för ett annoterande objekt i varje skala; läsning av skalposterna som andra program behåller | En annoterande text eller ett annoterande mått behåller en lista över skalor ({{cmd:OBJECTSCALE}}) och varje vyport visar den i storleken för sin skala, på samma plats. Listan sparas som CadCraft:s egna data: ett annat program ser objektet i den enda skala det är dimensionerat för, och en lista gjord i ett annat program läses inte. Se [Enheter, papper och skalor](topic:units-papers-scales#annotate-by-scale). |
| Ändring av ett dynamiskt blocks avstånd, vinklar eller spegling; dynamiska block som förblir dynamiska när du sparar i en annan DWG-version eller som DXF | Byt dess synlighetstillstånd i Egenskaper › {{ui:Custom}}; dess andra värden visas där som skrivskyddade. Det förblir dynamiskt när du sparar det som DWG i den version ritningen kom i. Se [Dynamiska block](topic:dynamic-blocks). |
| Spline-anpassningstolerans, spline-grad 6 och högre, 3D-splines | Anpassnings- och kontrollpunkter, grad 1 till 5 och vikter finns: se [Splines och polylinjer](topic:splines). En splines höjd (Z) behålls inte. |

## Precisionshjälp

| Finns inte ännu | I stället, idag |
|---|---|
| Spårning från punkter över kommandon, och dialogrutan för spårningsinställningar (relativa polära vinklar, extra vinklar) | {{cmd:POLARANG}} anger steget; hämta punkterna igen i nästa kommando. |
| Fångst till rutnät | Skriv in koordinater; rutnätet är bara en visuell hjälp. |
| Alternativen Båge och Längd när du väljer ett områdes hörn, och MEASUREGEOM Volym | Rita konturen med {{cmd:PLINE}} (bågar inräknade), och kör sedan {{cmd:AREA}} `O`. |
| Dynamisk inmatning för handtag, och dess alternativlista (pilen nedåt) | Kommandoraden visar alternativen. |
| Vinklar i grader-minuter-sekunder, gon eller lantmätarens riktningsvinklar | Skriv decimalgrader: `30.5` för 30°30'. |
| En dialogruta för vyhanterare; namngivna vyer för ett blad som kommer tillbaka på samma blad | {{cmd:NAMEDVIEW}} listar och återställer vyer. En sparad fil behåller dem, men ett blads vyer kommer tillbaka på det första bladet. |

## Blad, mått och plottning

| Finns inte ännu | I stället, idag |
|---|---|
| Fält för en vyports skala, ett namngivet objekt såsom ett lager eller ett block, en hyperlänk, och bladsamlingsfält utöver bladnummer och namn; fält skrivna som fältobjekt som andra program uppdaterar | {{cmd:FIELD}} har datum, filnamn, bladnummer, namn och antal, ritningens egenskaper ({{cmd:DWGPROPS}}), ett objekts area, längd och andra egenskaper, samt formler, i text, attribut och tabellceller. Ett annat program visar ett CadCraft-fält som texten det senast läste; CadCraft läser andra programs datum-, filnamns-, egenskaps-, blad- och uttrycksfält och lämnar de övriga typerna som text. En vyports skala skrivs in för hand. |
| Sparning av vilken måttstil som är aktuell; måttext dragen till en fri plats | En ritning öppnas med Standard aktuell. Texten sitter på måttlinjen (DIMTEDIT Vänster / Höger / Mitten). Se [Ställ in måttstorlekar](topic:dimension-settings). |
| Redigerbara tvålinjiga vinkelmått från öppnade filer som CadCraft inte kan räkna ut | De visas som de ritats i filen. Ordinat-, bågängds- och brutna radiemått öppnas som mått du kan redigera. |
| Kontroll av CTB-läsaren mot en fil från ett annat program (den är byggd, från den publicerade beskrivningen), namngivna plottstilar (STB), dithering, pennummer, gråskala från en CTB och adaptiv justering av linjetyp i en plottstil | Gör tabellen i {{ui:Plot style tables}} (färg, gråskala, bläck, linjetjocklek, linjetyp, linjeände och -förbindning, och fyllningsstil per färg): se [Plottstilstabeller](topic:plot-pdf#plot-style-tables). |
| Sidinställningar | Välj papper, skala och plottstil i dialogrutan {{ui:Plot to PDF}}; ett blad behåller sin plottstil. |
| Hindi och andra skrifter som behöver komplex formning i PDF-filer, och sällsynta ideografer (europeiska skrifter, kyrilliska, grekiska, hebreiska, arabiska, persiska, urdu, thai, kinesiska, japanska och koreanska vid utskrift) | De skrivs ut som "?". |
| Arabiska skrifter och kinesisk, japansk eller koreansk text i samma plottade PDF | En plot bär ett teckensnitt: ett av de två skrifterna skrivs ut som "?". |
| Explicita riktningsmarkeringar i text (inbäddningar, åsidosättningar, isolerare) | De ignoreras: varje rad ordnas enbart efter sina bokstäver. |
| Bilder i en bifogad PDF-sida, i en plot | Sidans linjer, fyllningar och text skrivs ut. En sida som bara är en bild läggs in med {{cmd:SCANATTACH}}, och bilder skrivs ut. Se [PDF-underlägg](topic:pdf-underlay#plot-and-save). |
| Skicka ett jobb till en laser från CadCraft Studio (Studio har inte Web Serial) | Spara G-koden och skicka den med din lasers egna program, eller skicka den från Chrome eller Edge. Se [Skicka en ritning till en laser](topic:laser-cutting#send-from-the-browser). |

## Villkor och parametrar

| Finns inte ännu | I stället, idag |
|---|---|
| Villkor på blad, i block, på ellipser, splines eller text | Ange villkor på fliken {{ui:Model}}, på linjer, polylinjer, cirklar, bågar och punkter. |
| Jämna (G2), och direkt villkor på en polylinjes bågbulge | Tangent och lika; ett bågsegment följer sina två ändar. |
| Referens- (drivna) måttvillkor, och `3Point` i {{cmd:DCANGULAR}} | Ett vanligt mått (DIMLINEAR …) visar ett värde utan att driva det. |
| Måttvillkor av fast storlek på papper, och plottning av dem | De visas bara på skärmen; lägg till vanliga mått för plotten. |
| Villkor som behålls genom EXPLODE, BREAK, JOIN och andra kommandon som gör nya objekt, och på trimmade polylinjer | Ange dem igen (AUTOCONSTRAIN hjälper). {{cmd:MIRROR}} och {{cmd:TRIM}} av linjer, bågar och cirklar behåller dem. |
| Konstruktionstabeller (konfigurationer) i CadCraft | Ändra parametrar i panelen. |
| Ett testat tur-och-retur med SolidWorks | Kontrollera skissen som makrot bygger innan du litar på den. |

## 3D

| Finns inte ännu | I stället, idag |
|---|---|
| Rundningar, fasningar, skal och lofter; svep längs en bana som stiger (3D-banor) | Extrudera konturer med bågar, skjut och dra ytor, rotera och svep längs plana banor. |
| Extrudering i en annan riktning än uppåt | Rita formen på marken och extrudera den uppåt eller nedåt (med en släpvinkel eller längs en bana om du vill); rotera volymen efteråt. |
| Höjd och tjocklek på 2D-objekt | Ritningen ligger på marken (höjd 0) på fliken 3D. |
| Redigering av solider, regioner och kroppar från andra program; visning av dem inne i block; deras ytor på svepta, lofta eller andra fria ytor; polyface- och polygonnät | Solider i modellrummet visas på fliken 3D som de är och sparas tillbaka oförändrade i DWG; det som inte ritas listas när fliken 3D öppnas. Be om nät som 3D-ytor i modellrummet. Se [Solider från andra program](topic:3d-solids#solids-from-other-programs). |
| Kopiera och klistra in solider | På fliken 3D, använd {{cmd:COPY}}. Urklippet innehåller bara 2D-objekt. |
| Sektioner, vyer som följer senare ändringar av solider, och skuggade solider på plottade blad | {{cmd:VIEWBASE}} placerar platta vyer (en ögonblicksbild); kör den igen efter att du ändrat solider. |
| Material, texturer och ljusinställningar | De visuella stilarna: skuggad, kanter, dold linje, trådmodell, röntgen. |
| Kartlager som plottas, på bladens vyportar och på fliken 3D; bilder från filer sparade med ritningen; en ritnings läge skrivet för andra program i DWG 2000–2007 och DXF R12 | Kartlager visas under modellrummet på skärmen; systemet och lagerlistan sparas med ritningen: se [Kartlager under ritningen](topic:map-layers) |
| E57-skanningar över 6 miljoner punkter eller 512 MB, tillverkares egna filer (RCP, RCS, FLS, LGS, TZF, ZFS), ett punktmoln sparat med ritningen eller plottat, fångst till ett moln på fliken 3D, lodräta sektionsskivor på fliken Modell | Exportera stora skanningar eller tillverkarnas egna som LAS eller LAZ ([Punktmolnsformat](topic:point-cloud-formats)); bifoga molnet varje gång du öppnar ritningen; spåra från ett planschnitt på fliken Modell: se [Spåra som-byggda linjer över ett punktmoln](topic:point-clouds) |
| Registrering av skanningar: hitta målpunkter (sfärer, schackrutor) i en skanning av sig själv, lösa alla skanningar tillsammans (bundle adjustment), skala, registrera mot en modell | Välj matchande punkter eller skriv in målkoordinater, och förfina sedan en skanning i taget med ICP: se [Registrera flera skanningar till en](topic:register-scans) |

## Rutiner och anpassning

| Finns inte ännu | I stället, idag |
|---|---|
| Kompilerad eller skyddad LISP (.fas, .vlx), inbyggda program (.arx, .crx, .dbx) och VBA (.dvb) | Läs in en rutins .lsp-källa med {{cmd:APPLOAD}}. |
| LISP:s `grread`, reaktorer (`vlr-…`), kurvfunktioner (`vlax-curve-…`), ordböcker och utökad data, Express Tools `acet-…` | Resten av språket körs: se [Kör LISP-rutiner](topic:run-lisp). Kommandoraden anger en saknad funktion när en rutin når en. |
| Bilder och diabilder i en rutins dialogruta | De visas som tomma ramar; resten av dialogrutan fungerar. |
| CraftScript (.craft), Lua och Python i CadCraft | Kör dem i PartCraft:s Skriptarbetsyta. |
| Lager-, färg- och linjetypslistor i menystilarna i menyfliksområdet | Använd panelen {{ui:Layers}} och {{ui:Properties}}. |
| Startup Suite och alias som sparas på din dator eller synkas | De sparas i den här webbläsaren; skrivbordsappen och molntjänsten sparar dem åt dig. I Studio läses `acad.lsp` och `acaddoc.lsp` från en supportmapp du väljer (Läs in program). |

## Hjälp

Hjälpen beskriver den här versionen. När något läggs till flyttas det från den här sidan och in i de guidade genomgångarna.
