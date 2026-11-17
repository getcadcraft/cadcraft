---
title: Plotta till PDF
summary: Gör en PDF av ett blad i full storlek, eller av modellen i en skala eller anpassad till papperet, skriv ut den från webbläsaren eller från Studio, eller spara den som PNG eller SVG.
keywords: plotta, skriv ut, skrivare, kopior, png, svg, bild, pdf, publicera, exportpdf, papper, skala, monokrom, gråskala, svartvit, linjetjocklek, penna, sidinställning, plotfönster, plottstil, plottstilstabell, ctb, färgberoende, rastrering, plotstyles, stylesmanager
from: a4752f83
---

## Vad du skapar

En PDF av ett blad i full storlek, sedan en snabb PDF av modellen i 1:100, och en utskrift.

PDF:en görs i din webbläsare; inget laddas upp. Den är en vektor-PDF: linjerna förblir skarpa vid alla zoomnivåer, och texten går att söka i.

## Plotta ett blad

1. Klicka på bladets flik under ritningen.
2. Tryck {{key:Mod+P}}, klicka på {{ui:Plotta}}, eller skriv `PLOT` och tryck {{key:Enter}}.

Dialogrutan {{ui:Plotta till PDF}} öppnas. Den anger vilket blad den plottar och på vilket papper, ”i full storlek … som du ser den”. Förhandsvisningen till höger visar bladet.

3. I {{ui:Plottstil}}, välj {{ui:Monokrom (svart)}} för svarta linjer, {{ui:Färg (som ritad)}} för att behålla färgerna, {{ui:Gråskala}}, eller en tabell du gjort själv (se [Plottstilstabeller](topic:plot-pdf#plot-style-tables)). Bladet behåller det här valet: det sparas med ritningen.
4. I {{ui:Linjetjocklek}}, välj en pennbredd från 0.13 mm till 0.70 mm. Linjer med standardlinjetjockleken skrivs ut i denna bredd; linjer med egen linjetjocklek (lager eller objekt, eller deras färgs penna i tabellen) skrivs ut i den.
5. Klicka på {{ui:Ladda ner PDF}}.

Webbläsaren laddar ner en PDF namngiven efter ritningen och bladet, till exempel `Drawing1-A-101 Plan.pdf`. Historiken anger dess storlek i byte och dess pappersstorlek i millimeter.

Bladet plottas alltid i 1:1 på sitt eget papper. För att ändra papper, ändra det på bladet självt (se [Ställ in ett blad](topic:sheets-and-viewports)). Lager som är satta att inte plottas utelämnas, liksom vyportsramar.

## Alla blad i en PDF

Med två eller fler blad har dialogrutan {{ui:Plotta till PDF}} {{ui:Alla blad i en PDF}}; eller skriv {{cmd:PUBLISH}}. {{key:Enter}} tar alla blad; Några (S) frågar efter deras namn, separerade med kommatecken. En PDF laddas ner med en sida per blad, i fliksordning, var och en i sin egen pappersstorlek, och ett bokmärke per blad med dess namn. Varje blad plottas med sin egen plottstilstabell; ett blad utan vald tabell använder den du senast valde i dialogrutan, och den pennbredd du senast valde.

## Plotta modellen

1. Klicka på fliken {{ui:Modell}}.
2. Tryck {{key:Mod+P}}.

Dialogrutan anger att den plottar modellen på ett pappersark, och visar fler inställningar:

3. I {{ui:Area}}, välj vad som ska plottas:
   - {{ui:Allt (utsträckning)}}: hela ritningen.
   - {{ui:Det som syns på skärmen}}: området du ser i ritningen just nu.
   - {{ui:Ett fönster…}}: klicka sedan på {{ui:Välj}}, klicka på två hörn i ritningen, och dialogrutan kommer tillbaka.
4. I {{ui:Papper}}, välj en storlek: ISO A4 till A0, Letter, Legal, Tabloid och ANSI C och D, eller ARCH C, D och E.
5. I {{ui:Orientering}}, välj {{ui:Liggande}} eller {{ui:Stående}}.
6. I {{ui:Skala}}, välj {{ui:Anpassa till papper}} eller en skala som `1:100`.

Under inställningarna står en rad med skalan och hur stort området blir på papperet. Om det är större än papperet säger den det: kanterna kapas. Välj en mindre skala, ett större papper, eller {{ui:Anpassa till papper}}.

7. Klicka på {{ui:Ladda ner PDF}}.

En modellplott lämnar en marginal på 5 mm runt kanten, eftersom de flesta skrivare inte kan skriva ut ända till kanten. {{ui:Anpassa till papper}} ger en udda skala (historiken och inforaden säger ”(anpassad)”); välj en standardskala när ritningen måste mäta rätt.

:::note
Skalor läses i verkliga enheter. För att 1:100 ska bli rätt, ställ in {{ui:Enheter}} under {{ui:Aktuella inställningar}} till vad en ritningsenhet är. En ritning utan enheter tas som millimeter.
:::

## Plottstilstabeller

En plottstilstabell säger hur var och en av de 255 standardfärgerna i ritningen skrivs ut, på samma sätt som en färgberoende plottstilstabell (CTB) gör i andra CAD-program. Tre är inbyggda:

| Tabell | Skriver ut |
|---|---|
| {{ui:Färg (som ritad)}} | Varje objekt i sin egen färg. |
| {{ui:Monokrom (svart)}} | Alla färger svarta: det vanliga valet för ritningar. |
| {{ui:Gråskala}} | Varje färg som sin gråton, så att färgerna hålls isär på en svartvit skrivare. |

För att göra en egen, till exempel röda linjer tjocka och svarta, allt annat tunt:

1. I dialogrutan {{ui:Plotta till PDF}}, klicka på {{ui:Redigera tabeller…}} (eller skriv {{cmd:PLOTSTYLES}}).
2. Klicka på {{ui:Ny}}, och skriv ett namn som `office` i {{ui:Namn}}. För att börja från en inbyggd tabell i stället, välj den i {{ui:Tabell}} och klicka på {{ui:Kopiera}}.
3. Klicka på en färg i rutnätet. {{key:Shift}}+klick markerar ett intervall av färger, {{key:Mod}}+klick lägger till en till, och {{ui:Markera alla färger}} tar dem alla.
4. Ställ in vad de markerade färgerna skrivs ut som:
   - {{ui:Skrivs ut som}}: {{ui:Egen färg}}, {{ui:Svart}} eller {{ui:Annan färg…}}.
   - {{ui:Som grå}}: färgen som sin gråton.
   - {{ui:Bläck (%)}}: 100 är full täckning, 50 är halvvägs mot vitt (rastrering), för bakgrundslinjer.
   - {{ui:Linjetjocklek}}: {{ui:Egen linjetjocklek}} behåller objektets eller lagrets linjetjocklek; ett värde skriver ut varje linje i den färgen i den bredden.
   - {{ui:Linjetyp}}: skriv ut varje linje i den färgen med en annan linjetyp (till exempel allt rött streckat); {{ui:Använd objektets linjetyp}} lämnar dem.
   - {{ui:Linjeslut}} och {{ui:Linjeskarv}}: trubbiga, kvadratiska eller runda ändar, och spetsiga, avfasade eller runda hörn (runda, som förut, när inget är inställt).
   - {{ui:Fyllningsstil}}: en heltäckande fyllning i den färgen skrivs ut som skraffering (vågräta eller lodräta streck, diagonaler, korsskraffering, romber, kvadratiska prickar) i stället för bläck, för skrivare och planer där platt bläck är för tungt.

Tabellen har själv två inställningar till: {{ui:Linjetjocklekar}}, de bredder den känner till (en utskriven linje går till den närmaste av dem), och {{ui:Linjetypsskala}}, en faktor på streckningen för varje linjetyp som inte är en ISO-linjetyp.

5. Klicka på {{ui:Klar}}. Tabellen behålls i ritningen, och bladet (eller modellen) plottas nu med den. {{ui:Avbryt}} släpper ändringarna.

En färg med egen penna visar en prick i sitt hörn, och en prick längst ned när den ställer in en linjetjocklek. Ett objekt med en äkta färg (inte en av de 255) använder pennan för närmaste standardfärg.

Ritningen behåller sina tabeller och varje bladets val när du sparar som DWG (2000 till 2018) eller DXF (R12 eller 2000), och öppnas med dem igen. Andra program ser namnet i varje blads sidinställning (`office.ctb`), inte själva tabellen. En ritning från ett annat program vars sidinställning anger en tabell som `monochrome.ctb` plottas med den inbyggda tabellen med det namnet; för ett annat namn säger dialogrutan att ritningen inte har den, och plottar ritningsfärgerna tills du väljer en tabell eller gör en med det namnet.

För att använda en tabell i en annan ritning, klicka på {{ui:Exportera}} i {{ui:Plottstilstabeller}} (den sparar `office.plotstyle.json`), och sedan {{ui:Importera…}} i den andra ritningen. {{ui:Importera…}} tar också en `.ctb`-fil från ett annat program: den läses från den publicerade beskrivningen av formatet och **har ännu inte kontrollerats mot en riktig fil**. Färg, rastrering och linjetjocklek för varje färg läses; gråskala, pennummer, linjetyper, linjeslut och -skarvar och fyllningsstilar läses inte, och en namngiven tabell (`.stb`) avvisas. Jämför första plottet med vad du förväntar dig, och skicka oss filen om den är fel.

## Skriv ut

**I webbläsaren**, klicka på {{ui:Skriv ut…}}. CadCraft gör PDF:en och öppnar webbläsarens egen utskriftsdialog för den. Välj ”Verklig storlek” eller 100 % (inte ”Anpassa”) där för att behålla skalan. Om webbläsaren inte vill skriva ut från sidan öppnas PDF:en i en ny flik i stället: skriv ut den därifrån med {{key:Mod+P}}.

Du kan också klicka på {{ui:Öppna för utskrift}}: PDF:en öppnas i en ny webbläsarflik, och du skriver ut den därifrån.

:::safari
Safari kan visa PDF:en och vänta på att du använder **Arkiv**, sedan **Skriv ut**.
:::

Om din webbläsare blockerar den nya fliken laddar CadCraft ner PDF:en i stället och säger det i historiken. Tillåt popup-fönster för webbplatsen för att öppna den i en flik nästa gång.

**I CadCraft Studio** listar dialogrutan {{ui:Plotta till PDF}} datorns skrivare. Välj {{ui:Skrivare}}, {{ui:Papper i skrivaren}} och antalet {{ui:Kopior}}, och klicka sedan på {{ui:Skriv ut…}}. {{ui:Samma som plotten}} väljer skrivarens papper som har bladets storlek (A3 för ett A3-blad); när skrivaren inte har något sådant använder den sitt eget papper och anpassar bladet till det. På Windows skickas bladet som en bild i 300 dpi, eftersom Windows inte kan skriva ut en PDF utan ett PDF-program; på Linux och macOS går PDF:en självt till systemets utskriftstjänst. Inget lämnar datorn.

## Bild- och SVG-filer

{{ui:Ladda ner PNG}} sparar det plottade bladet som en bild i 300 dpi (sänks bara när ett mycket stort blad skulle bli större än vad webbläsaren kan göra; historiken säger det). {{ui:Ladda ner SVG}} sparar det som en skalbar ritning i millimeter, med plottens linjer och text. Båda kommer från samma plott som PDF:en, med samma plottstil, linjetjocklek och område. Bilder placerade i ritningen finns bara i PDF:en; historiken anger hur många som lämnades utanför.

## Bilder

Bilder skrivs ut i sin egen upplösning, under linjerna. {{ui:Bilder}} i dialogrutan begränsar dem till 600, 300 eller 150 dpi för en mindre fil. Linjer, text och skraffering är alltid skarpa (vektor), och genomskinlighet förblir genomskinlighet. Se [Bilder i en ritning](topic:pictures).

## Inställningar som kommer ihåg

Dialogrutan kommer ihåg ditt senaste papper, din orientering, skala och linjetjocklek i den här webbläsaren. Plottstilstabellen sparas med varje blad i ritningen; ett blad utan vald tabell börjar med den du valde senast. Ett valt fönster behålls tills du laddar om sidan; efter det startar dialogrutan på {{ui:Allt (utsträckning)}}.

## Vanliga misstag

- **PDF:en är tom eller knapparna är gråa.** Det finns inget att plotta (en tom modell), eller {{ui:Ett fönster…}} är valt och inget fönster är valt ännu (”Välj fönstret att plotta.”).
- **”?” visas i PDF:en.** Text på polska, tjeckiska, kyrilliska, grekiska och de andra skrifterna i Europa skrivs ut som den är: PDF:en bär då de bokstäver den behöver (från typsnittet Liberation Sans, som har Helvetica-bredderna), och texten går fortfarande att markera och söka i. Kinesisk, japansk och koreansk text skrivs ut som den är också: när en ritning har den hämtar plottet ett större typsnitt (cirka 10 MB, en gång) och PDF:en bär bara de tecken som används, så den behöver en uppkoppling första gången (inte i en offlinekopia som sparades tidigare). Hebreiska skrivs ut med samma inbäddade typsnitt som latinsk text, och arabisk, persisk och urdu-text gör att plottet hämtar ett typsnitt till (under 1 MB, en gång); högerställda rader ordnas och deras bokstäver sammanfogas (se [Text](topic:text)). Sällsynta ideogram utanför de typsnitten, och skrifter som kräver komplex formning, som hindi, skrivs ut som ”?”, och historiken räknar dem.
- **Alla linjer är lika tjocka.** Deras linjetjocklek är standard: ge lager eller objekt en {{ui:Linjetjocklek}} i den högra panelen (se [Linjetjocklekar och linjetyper](topic:units-papers-scales#line-weights-and-linetypes)), eller ställ in linjetjocklekar per färg i en [plottstilstabell](topic:plot-pdf#plot-style-tables).
- **”(inte i den här ritningen)” bredvid plottstilen.** Ritningen kommer från ett annat program och anger en tabell som den inte innehåller. Välj en av tabellerna, eller gör en med det namnet.
- **Konstruktionslinjer skrevs ut.** Ställ in deras lager till att inte plottas: klicka på dess skrivarknapp i panelen {{ui:Lager}}.
- **Utskriften har fel storlek.** Skrivaren skalade den. Skriv ut i verklig storlek.
- **{{key:Mod+P}} öppnade webbläsarens utskriftsdialog.** Markören stod i en ruta i den högra panelen, eller så var en annan dialogruta öppen. Tryck {{key:Enter}} eller {{key:Esc}} för att lämna rutan och försök igen, eller klicka på {{ui:Plotta}}.
- **{{key:Mod+P}} gjorde ingenting.** Ett kommando körs. Tryck {{key:Esc}} först.
