---
title: Öppna en DWG, redigera den och spara en kopia
summary: Öppna en ritning som någon skickat till dig, kontrollera vad som kom in, gör en ändring och skicka tillbaka en kopia som DWG eller DXF.
keywords: dwg, dxf, öppna, import, export, spara, r12, tur och retur, konsult, xref, kontrollera ritning, saveas, spara som, dwg-sparning, format
from: 49de4bf6
---

## Vad du gör

Öppna en DWG från en konsult, kontrollera vad CadCraft kunde och inte kunde visa, lägg till en notering, plotta ett blad till PDF och spara en kopia att skicka tillbaka, som DWG eller DXF.

## Öppna filen

1. Tryck på {{key:Mod+O}}, eller klicka på {{ui:Open}}.
2. Välj `.dwg`-filen.

Statusraden visar ”Läser …” medan ritningen läses. När den är klar fyller ritningen skärmen, och historiken säger till exempel ”Öppnade plan.dwg: 18,240 objekt på 64 lager”, tillsammans med hur lång tid det tog.

:::offline
Du är offline. Om knappen {{ui:Save for offline}} säger ”Klar för offline” öppnas DWG-filer normalt. Om inte, och ingen DWG har öppnats i den här fliken än, kan ett DWG-öppnande misslyckas, eftersom CadCraft:s DWG-läsare hämtas med den första DWG-filen: öppna en DXF i stället, eller spara CadCraft för offlineanvändning nästa gång du är online. Se [Arbeta offline](common:offline).
:::

## Kontrollera vad som kom in

1. Titta på avsnittet {{ui:Drawing}} i den vänstra panelen: format och version, enheter, antal objekt och lager, och blad.
2. Läs rutan ”Om filen” under den, om det finns en.

Rutan listar:

- **Visas inte än:** objekt som CadCraft inte kan rita än, efter typ och antal. De utelämnas, de gissas inte fram.
- **Layouter (blad) kom in:** öppna dem med flikarna under ritningen.
- **Mått som bara kunde läsas som de ritades.**

3. Klicka igenom flikarna under ritningen för att se varje blad.
4. Kontrollera {{ui:Units}} i {{ui:Current settings}} (inget markerat, fliken {{ui:Model}}). Om det står {{ui:Unitless}} men du vet att ritningen är i millimeter, ställ in det, så att bladens och utskrifternas skalor läses rätt.

:::tip
Om du väntade dig en del av ritningen och inte ser den, kontrollera panelen {{ui:Layers}}: lagret kan vara av eller fruset i filen. Klicka på dess namn för att göra det aktuellt; det slår på det.
:::

## Gör din ändring

1. Skapa ett lager för dina noteringar: klicka på {{ui:New layer}}, skriv `NOTES` och tryck på {{key:Enter}}.
2. Skriv `DT` och tryck på {{key:Enter}}.
3. Klicka där noteringen ska ligga.
4. Skriv en textHöjd som passar ritningen (se [Lägg till text och etiketter](topic:text)) och tryck på {{key:Enter}}.
5. Tryck på {{key:Enter}} för att behålla rotationen 0.
6. Skriv din notering och tryck på {{key:Enter}}.
7. Tryck på {{key:Enter}} igen för att avsluta.

Ändringar av importerade mått är helt okej: så snart du ändrar ett mått ritar CadCraft om det i sin egen stil.

## Plotta ett blad för granskning

1. Klicka på bladets flik.
2. Tryck på {{key:Mod+P}}.
3. Klicka på {{ui:Download PDF}}.

Se [Plotta till PDF](topic:plot-pdf).

## Spara en kopia

1. Tryck på {{key:Mod+S}}, eller klicka på {{ui:Save}}.

Du öppnade en DWG, så webbläsaren laddar ner `<namn>.dwg`, i den version som DWG:n kom in i. Historiken säger till exempel ”Sparade en kopia som Plan.dwg (DWG (AutoCAD 2018)).” och listar på raderna under den allt som ändrades på vägen.

2. Läs de raderna innan du skickar filen. [Vad en DWG behåller och ändrar](topic:files#what-a-dwg-keeps-and-changes) förklarar var och en.

Din ursprungliga DWG ändras aldrig. Varje sparning är en ny nedladdning.

## Spara som DWG eller DXF

För att välja formatet själv:

1. Tryck på {{key:Mod+Shift+S}}, eller klicka på {{ui:Save as}}.

Dialogen {{ui:Save a copy as}} öppnas med fyra val, var och ett med det filnamn det ger: {{ui:DWG}}, med sin lista {{ui:Version}}, {{ui:DXF R12}}, {{ui:DXF 2000}} och DXF 2000 (binär). Ritningens nuvarande format och version är redan valda.

2. Klicka på det format du vill ha. För DWG, välj den version som det andra kontoret använder, eller en äldre: AutoCAD 2018, 2013, 2010, 2007, 2004 eller 2000.
3. Klicka på {{ui:Save}}.

Kopian laddas ner. Från och med nu sparar {{key:Mod+S}} den här ritningen i det formatet, och nya ritningar börjar också med det, i den här webbläsaren. {{ui:Cancel}} eller {{key:Esc}} sparar ingenting, och historiken säger ”Sparades inte.”

Vilket du ska välja:

- **DWG** behåller mest: blad med sina vyportar, riktiga mått, skrafferingsmönster, lager- och blocknamn som du skrev dem, och flerradig text som flerradig text. AutoCAD 2000-versionen öppnas i flest program; 2004 och senare behåller också äkta färger.
- **DXF 2000** är en textfil som behåller nästan allt en DWG behåller: varje blad som en layout med sina vyportar, riktiga mått, skrafferingsmönster, äkta färger, linjetjocklekar, linjetyper och namn som du skrev dem. Den öppnas i AutoCAD 2000 och senare, och i de flesta CAD-program. Flerhänvisningar blir de linjer, pilspetsar och den text de ritar. En DXF som öppnats i version 2000 eller senare sparas som DXF 2000.
- **DXF 2000 (binär)** innehåller samma innehåll som DXF 2000, i formatets binära form: en mindre fil som behåller varje tal exakt. Binära DXF-filer från andra program öppnas precis som textfiler, och en ritning som öppnats från en binär DXF sparas tillbaka som binär.
- **DXF R12** öppnas i nästan alla CAD-program. Den behåller första bladet med dess vyportar, och CadCraft:s övriga blad. Den förenklar nyare saker, som flerradig text och skraffering.

## Vad den andra kontoret får se

I en DWG:

- Linjer, bågar, cirklar, ellipser, polylinjer, text, flerradig text, block med sina attribut, heltäckande fyllningar, skrafferingsmönster och lager som du ser dem.
- Riktiga mått: det andra programmet mäter om dem när de töjs.
- Varje blad, med sitt papper och sina vyportar.
- Flerhänvisningar som flerhänvisningar. I AutoCAD 2000-versionen blir äkta färger närmaste standardfärg.

I en DXF R12:

- Linjer, bågar, cirklar, polylinjer, text, blockreferenser och mått som du ser dem. Mått förblir riktiga mått.
- Lagernamn med versaler, med mellanslag ersatta av `_`.
- Det första bladet som ritningens pappersrum, med sina vyportar. Fler blad kommer som block med namnen `CCLAYOUT_1` och så vidare; om de behöver varje blad som en layout, plotta även PDF-filer av varje blad åt dem.
- Flerradig text som separata rader, ellipser som polylinjer, skrafferingar som konturer.

Hur som helst: allt som stod som ”Visas inte än” när du öppnade DWG:n finns **inte** i kopian, om inte historiken säger att det behölls. En DWG:s OLE-objekt och dess 3D-solider i modellrummet skrivs tillbaka när du sparar som DWG. Berätta det, och skicka en PDF också.

## Vanliga misstag

- **”CadCraft öppnar DWG- och DXF-ritningar.”** Filen har ett annat tillägg. Kontrollera att den är en `.dwg` eller `.dxf`.
- **”Ritningen kunde inte läsas.”** Filen är skadad eller i en version som läsaren inte hanterar. Be om en DXF, eller om DWG sparad i en äldre version.
- **”Den binära DXF-filen slutar mitt i ett objekt.”** Filen är avklippt eller skadad. Skriv RECOVER för att öppna det som kan läsas, eller be om filen igen.
- **Den sparade filen heter `name (1).dwg` eller `name (1).dxf`.** Webbläsaren gör så när en fil med samma namn redan finns i mappen.
- **De har ett äldre program som inte kan öppna DWG:n.** Spara som DWG med {{ui:Version}} {{ui:AutoCAD 2000}}, eller som {{ui:DXF R12}}: nästan alla CAD-program öppnar den.
- **Delar av ritningen saknas.** Länkade ritningar (xrefs) läses inte in förrän du väljer deras filer ({{cmd:XREF}}, `R`), och bilder visas som ramar med sina filnamn.
