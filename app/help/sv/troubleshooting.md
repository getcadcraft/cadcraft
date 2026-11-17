---
title: Felsökning
summary: Meddelanden som CadCraft visar och problem du kan stöta på, var och en med orsak och åtgärd.
keywords: problem, fel, fungerar inte, meddelande, kan inte öppna, okänt kommando, händer inget, fast, tangenterna fungerar inte, tom, saknas, åtgärda
from: 8299b222
---

## Öppna filer

| Meddelande eller symptom | Orsak | Åtgärd |
|---|---|---|
| ”CadCraft öppnar DWG- och DXF-ritningar. ”…” är ingen av dem.” | Filen är inte en `.dwg` eller `.dxf`. | Öppna ritningsfilen själv. En PDF kan föras in (Öppna frågar: importera eller bifoga, se [PDF-underlägg](topic:pdf-underlay)). Bilder läggs in med `IMAGEATTACH`. |
| ”Denna binära DXF slutar mitt i ett objekt: filen är avklippt eller skadad.” | Den binära DXF:en slutar före sitt slut. | Skriv RECOVER för att öppna det som kan läsas, eller begär filen igen. |
| ”Detta är ingen läsbar DXF (felaktig gruppkod på rad …).” | DXF:en är skadad eller inte riktigt en DXF. | Begär filen igen, eller en DWG. |
| ”Denna ritning kunde inte läsas. Den kan vara skadad, eller sparad i en version som läsaren inte hanterar ännu (…).” | DWG-läsaren kunde inte läsa den. | Begär en DWG sparad i en äldre version, eller en DXF. |
| ”Denna ritning är från AutoCAD R11 / R12 (DWG AC1009), äldre än vad CadCraft läser …” | DWG-filer från Release 12 och tidigare använder ett format CadCraft inte läser. | Spara den som DXF (valfri version) eller som en nyare DWG i programmet som skapade den, och öppna den. CadCraft:s egna Spara som erbjuder DXF R12 för program som vill ha det gamla formatet. |
| ”Kunde inte öppna …” följt av ett nätverksmeddelande, vid första DWG:n | DWG-läsaren kunde inte laddas ner: du är offline och CadCraft är inte sparat för offlineanvändning, eller anslutningen bröts. | Gå online och försök igen, eller öppna en DXF. Klicka på {{ui:Spara för offline}} och vänta på ”Offline redo”, så att DWG-filer öppnas offline nästa gång. Se [Arbeta offline](common:offline). |
| Offline-knappen säger ”Could not save” | Vissa filer laddades inte ner. | Kontrollera anslutningen och klicka på knappen för att försöka igen. |
| Offline-knappen säger ”Offline not available” | Privata fönster och vissa hanterade datorer kan inte spara en offlinekopia. | Använd ett vanligt fönster, eller var online. |
| CadCraft öppnas inte utan anslutning | Den sparades inte för offlineanvändning i den här webbläsaren, eller webbläsaren rensade den. | Nästa gång du är online, klicka på {{ui:Spara för offline}} och vänta på ”Offline redo”. |
| Ritningen öppnas men delar saknas | Objekt CadCraft inte kan rita ännu, eller lager som är av eller frysta i filen. | Läs ”Om den här filen” i vänster panel. Kontrollera panelen {{ui:Lager}}. |
| Text bryts till två rader | CadCraft ritar text i ett typsnitt i Helvetica-stil, som är bredare än vissa CAD-typsnitt. | Korta texten i Egenskaper, eller acceptera den extra raden. |
| En cirkel visas som en ellips, eller spegelvänd text läses åt rätt håll | Objektet ritades i ett lutande plan, eller sett underifrån, i programmet som skapade filen. CadCraft visar det sett uppifrån, som planvyn i det programmet gör. Text hålls läsbar. | Inget att åtgärda. För att se det på det andra programmets sätt, begär ritningen plattad, eller med objekten ritade uppifrån. |
| Ett block, en cirkel eller ett mått sitter någon annanstans än i programmet som skapade filen | Ett ritningsfall som CadCraft läser fel. | Berätta för oss på Discord, med filen om du kan dela den. |

## Kommandoraden

| Meddelande eller symptom | Orsak | Åtgärd |
|---|---|---|
| ”Okänt kommando ”…”. Skriv HELP för listan.” | Inget kommando eller alias med det namnet. | Skriv `HELP`, eller se [Kommandoreferens](topic:commands). Några välkända kommandon är [finns inte ännu](topic:not-built-yet). |
| ”Inget sådant kommando” bredvid kommandoraden när du skriver | Det du skrivit matchar inget ännu. | Fortsätt skriva, eller kontrollera stavningen. |
| ”Punkt eller alternativnyckelord krävs.” | Det du skrev är inte en punkt eller ett alternativ. | Kontrollera formatet: `x,y`, `@dx,dy`, `@d<a` eller ett enda tal. Se [Ange koordinater och avstånd](topic:coordinate-entry). |
| ”Kräver ett positivt tal eller två punkter.” | Ett avstånd var negativt eller inte ett tal. | Skriv ett positivt tal, eller klicka på två punkter. |
| ”Kräver en vinkel i grader eller två punkter.” | Vinkeln var inte ett tal. | Skriv grader som ett vanligt tal. |
| ”Kräver ett tal.” | Ett tal förväntades. | Skriv bara siffror. |
| ”Ogiltigt alternativnyckelord.” | Bokstäverna matchar inget alternativ. | Skriv de versalbokstäver som visas inom hakparenteserna. |
| `*Avbryt*` | Du tryckte på {{key:Esc}}, eller på {{key:Enter}} där en punkt krävdes. | Starta kommandot igen. |
| Det du skriver når inte kommandoraden | En ruta i en panel eller dialog har markören. | Tryck på {{key:Enter}} eller {{key:Esc}}, eller klicka på ritningen. |
| Kommandot använder objekt du inte valde | De markerades innan du startade det. | Tryck på {{key:Esc}} före kommandot. |
| En linje hamnade någonstans oväntat | `x,y` är absolut. | Använd `@dx,dy` för relativa punkter. |
| ”Avsluta eller avbryt det aktuella kommandot först (Esc).” | Du tryckte på {{key:Mod+S}} medan ett kommando kördes. | Tryck på {{key:Esc}} och spara sedan. |
| ”Kunde inte spara som DWG (AutoCAD 2000): … Prova Spara som, sedan DXF.” | Något i ritningen kunde inte skrivas som DWG. | Tryck på {{key:Mod+Shift+S}}, välj {{ui:DXF R12}} och klicka på {{ui:Spara}}. |
| ”Inte sparat.” | Du stängde dialogen {{ui:Spara en kopia som}} med {{ui:Avbryt}} eller {{key:Esc}}. | Tryck på {{key:Mod+Shift+S}} igen och klicka på {{ui:Spara}}. |

## Redigering

| Meddelande eller symptom | Orsak | Åtgärd |
|---|---|---|
| Ett objekt går inte att markera | Dess lager är låst, av eller fruset, eller så är du på ett blad och det är modellen inuti en vyport. | Lås upp lagret, eller gå till fliken {{ui:Modell}}. |
| ”Inget hittades där.” | Inget objekt under klicket. | Zooma in och klicka på själva linjen. |
| ”Inget korsar det objektet där.” | {{cmd:TRIM}} hittade inget objekt som korsar biten du valde. | Kontrollera att skärlinjen verkligen korsar den. |
| ”Kan inte trimma det objektet.” | Trim fungerar på linjer, bågar, cirklar och polylinjer. | Spräng blocken först, eller radera och rita om. |
| ”Ingen gräns i den riktningen.” | {{cmd:EXTEND}} hittade inget att mötas av. | Välj änden närmast som ska växa. |
| ”Kan inte förskjuta det objektet.” | Förskjutning fungerar på linjer, bågar, cirklar och polylinjer. | Spräng det först, eller rita en parallell linje. |
| ”Kan inte förskjuta så långt.” | Förskjutningen skulle vända formen ut och in. | Använd ett mindre avstånd. |
| ”Radien är för stor.” eller ”Avståndet är för stort.” | Rundningen eller fasningen skulle gå förbi slutet på en linje. | Ange en mindre radie med `R`, eller mindre avstånd med `D`. |
| ”Endast det första eller sista segmentet på en öppen polylinje kan klippas tillbaka.” | Hörnet skulle skära in i mitten av en polylinje. | Välj två segment av polylinjen bredvid varandra, eller använd `P` för varje hörn. |
| ”Välj en andra, annan linje.” | Det andra valet var samma linje, eller inte en linje. | Välj en annan linje. |
| ”Endast polylinjer, blockreferenser och mått sprängs.” | Markeringen hade inget att spränga. | Markera en polylinje, blockreferens eller ett mått. |
| ”Det är det aktuella lagret. Gör ett annat lager aktuellt först.” | Du försökte stänga av det aktuella lagret. | Klicka på ett annat lagers namn, och stäng sedan av det här. |
| ”Det finns redan ett lager som heter …” | Lagernamn måste vara unika. | Välj ett annat namn. |
| ”Inget att ångra.” | Det finns inget kvar att ångra, eller så öppnade eller startade du en ritning (det rensar historiken). | — |

## Mått och block

| Meddelande eller symptom | Orsak | Åtgärd |
|---|---|---|
| Måttext och pilar är små eller stora | Storlekarna är i ritenheter, och den totala skalan passar inte ritningen. | Ställ in {{cmd:DIMSCALE}} till plottskalan. Se [Ställ in måttstorlekar](topic:dimension-settings). |
| ”Välj en punkt inuti vinkeln du vill mäta.” | Vinkelmåttets placering ligger på ett ben. | Klicka inuti vinkeln. |
| ”Linjerna är parallella.” | Parallella linjer har ingen vinkel mellan sig. | Välj två linjer som möts. |
| ”Välj ett linjärt eller justerat mått.” | {{cmd:DIMCONTINUE}} eller {{cmd:DIMBASELINE}} behöver ett mått att börja från. | Välj ett linjärt eller justerat mått. |
| ”Den här ritningen har inga block ännu: F infogar ett från en fil, L från biblioteket …” | Ritningen har inga egna block. | Skriv `F` eller `L`, eller skapa ett block med {{cmd:BLOCK}}. |
| ”Inget block som heter ”…”.” | Namnet är fel. | Meddelandet listar blocken som finns. |
| ”Ett blocknamn kan inte börja med * eller använda …” följt av en lista med tecken | Namnet har ett tecken som block inte kan använda. | Använd bokstäver, siffror, `-` och `_`. |
| ”Ett block kan inte innehålla sig självt.” | Markeringen innehåller en referens till blocket som skapas. | Ta bort den referensen. |
| ”Inga objekt markerade; inget skapades.” | Du tryckte på {{key:Enter}} innan du markerade. | Kör {{cmd:BLOCK}} igen och markera objekten. |

## Blad och utskrift

| Meddelande eller symptom | Orsak | Åtgärd |
|---|---|---|
| ”Vyportar placeras på en Layout. Öppna en Layout-flik (eller skapa en med LAYOUT) först.” | {{cmd:MVIEW}} på fliken {{ui:Modell}}. | Klicka på en Layout-flik först. |
| ”Öppna layouten med vyporten först.” | {{cmd:VPVIEW}} på fliken {{ui:Modell}}. | Klicka på layoutfliken först. |
| En vyports skala ser tio gånger fel ut | Ritningsenheterna är fel. | Ställ in {{ui:Enheter}} i {{ui:Aktuella inställningar}}. |
| ”Det finns inget att plotta ännu.” | Modellen är tom. | Rita något, eller öppna en ritning. |
| ”Välj fönstret att plotta.” | {{ui:Ett fönster…}} är valt och inget fönster har valts. | Klicka på {{ui:Välj}} och välj två hörn. |
| ”… större än papperet: kanterna klipps av.” | Området ryms inte i den skalan. | Välj en mindre skala, ett större papper, eller {{ui:Anpassa till papper}}. |
| ”Webbläsaren blockerade den nya fliken, så PDF-filen laddades ner i stället.” | Popup-fönster är blockerade för webbplatsen. | Öppna den nedladdade PDF-filen, eller tillåt popup-fönster för webbplatsen. |
| Tecken skrivs ut som ”?” | PDF:ens typsnitt har ingen bokstav för dem (sällsynta ideogram, hindi och annan skrift som kräver komplex formning, …), eller det större typsnittet kunde inte hämtas (offline). Europeiska skriftsystem, kyrilliska, grekiska, hebreiska, arabiska, persiska, urdu, thai, kinesiska, japanska och koreanska skrivs ut som de är. | För arabisk skrift, thai, kinesiska, japanska eller koreanska: plotta igen med en anslutning. Andra skriftsystem finns inte ännu. |
| Konstruktionslinjer visas i PDF:en | Deras lager plottas. | Klicka på lagrets skrivarknapp. |
| Alla linjer är lika tjocka | Deras linjetjocklek är {{ui:Standard}}, så de skrivs ut med dialogens pennbredd. | Ge lagren eller objekten en {{ui:Linjetjocklek}} i den högra panelen, eller välj en {{ui:Linjetjocklek}} i dialogen. För att se linjetjocklekar på skärmen, tryck på {{ui:LWT}} i statusfältet. |

## Tangenter och skärm

| Symptom | Orsak | Åtgärd |
|---|---|---|
| F3, F7 eller F8 ändrar volym eller öppnar Mission Control | Mac-funktionstangenter. | Håll ned **fn**, eller använd knapparna i statusfältet. Se [Tangenter, möss och styrplattor](common:keys). |
| F7 frågar om caret browsing | Firefoxs egen användning av F7. | Välj Nej. Använd knappen {{ui:Rutnät}}. |
| {{key:Mod+N}} öppnade ett webbläsarfönster | Webbläsaren behåller den tangenten. | Klicka på {{ui:Ny}} eller skriv `NEW`. |
| {{key:Mod+A}} markerade kommandoradens text | Kommandoraden hade markören. | Klicka först på ett objekt, eller skriv `ALL` vid en prompt för `Välj objekt`. |
| {{key:Delete}} raderar inte | Kommandoraden hade markören. | Skriv `E` och tryck på {{key:Enter}}. |
| Högerklick gör inget på en Mac-styrplatta | Control-klick kan räknas som ett vanligt klick. | Klicka med två fingrar. |
| Ingen panorering på en styrplatta | Det finns ingen mittknapp, och mellanslag panorerar inte. | Svep med två fingrar: 2D-vyn panoreras, och nypning och mushjulet zoomar. Eller dra med en högerknapp nedtryckt. |
| Den första {{key:Esc}} lämnade helskärm | Webbläsaren använder Esc för att lämna helskärm. | Tryck på {{key:Esc}} igen för att avbryta kommandot. |
| {{key:F1}} gör inget på en Mac | F1 är en ljusstyrkeknapp. | Håll ned **fn**, eller klicka på {{ui:Hjälp}}. |
| Det du skriver går in i hjälpens sökruta | Hjälppanelen har markören. | Klicka på ritningen. |
| Ritningen blev tom | Du zoomade långt bort. | Klicka på {{ui:Utsträckning}}, eller dubbelklicka på hjulet. |
| ”Lämna webbplatsen?” när du stänger fliken | Det finns osparade ändringar. | Stanna kvar, spara med {{key:Mod+S}} och stäng sedan. |
