---
title: Plot til PDF
summary: Lav en PDF af et ark i fuld størrelse, eller af modellen i en skala eller tilpasset papiret, udskriv den fra browseren eller fra Studio, eller gem den som PNG eller SVG.
keywords: plot, udskriv, printer, kopier, png, svg, billede, pdf, publicér, exportpdf, papir, skala, monokrom, gråtoner, sort-hvid, linjetykkelse, pen, sidelayout, plotvindue, plotstil, plotstiltabel, ctb, farveafhængig, rastrering, plotstyles, stylesmanager
from: a4752f83
---

## Hvad du laver

En PDF af et ark i fuld størrelse, derefter en hurtig PDF af modellen i 1:100 og en udskrift.

PDF'en laves inde i din browser; intet uploades. Det er en vektor-PDF: linjerne forbliver skarpe ved enhver zoom, og teksten kan søges i.

## Plot et ark

1. Klik på arkets fane under tegningen.
2. Tryk {{key:Mod+P}}, klik på {{ui:Plot}}, eller skriv `PLOT` og tryk {{key:Enter}}.

Dialogboksen {{ui:Plot til PDF}} åbnes. Den viser hvilket ark der plottes og på hvilket papir, »i fuld størrelse … som du ser det«. Forhåndsvisningen til højre viser arket.

3. Under {{ui:Plotstil}} vælg {{ui:Monokrom (sort)}} for sorte linjer, {{ui:Farve (som tegnet)}} for at beholde farverne, {{ui:Gråtoner}}, eller en tabel du selv har lavet (se [Plotstiltabeller](topic:plot-pdf#plot-style-tables)). Arket beholder dette valg: det gemmes med tegningen.
4. Under {{ui:Linjetykkelse}} vælg en pen-bredde fra 0.13 mm til 0.70 mm. Linjer med standardlinjetykkelsen udskrives i denne bredde; linjer med deres egen linjetykkelse (lag eller objekt, eller penen for deres farve i tabellen) udskrives i den.
5. Klik på {{ui:Download PDF}}.

Browseren downloader en PDF, der er navngivet efter tegningen og arket, for eksempel `Drawing1-A-101 Plan.pdf`. Historikken viser dens størrelse i bytes og dens papirstørrelse i millimeter.

Et ark plottes altid i 1:1 på sit eget papir. Vil du ændre papiret, gør du det på selve arket (se [Opsæt et ark](topic:sheets-and-viewports)). Lag, der er sat til ikke at blive plottet, udelades, og det samme gælder viewport-rammer.

## Alle ark i én PDF

Med to eller flere ark har dialogboksen {{ui:Plot til PDF}} {{ui:Alle ark i én PDF}}; eller skriv {{cmd:PUBLISH}}. {{key:Enter}} tager alle ark; `S` (Nogle) beder om deres navne, adskilt af kommaer. Én PDF downloades med en side pr. ark, i fanernes rækkefølge, hver i sin egen papirstørrelse, og et bogmærke pr. ark med dets navn. Hvert ark plottes med sin egen plotstiltabel; et ark uden valgt tabel bruger den, du sidst valgte i dialogboksen, og den pen-bredde du sidst valgte.

## Plot modellen

1. Klik på fanen {{ui:Model}}.
2. Tryk {{key:Mod+P}}.

Dialogboksen siger, at den plotter modellen på et ark papir, og viser flere indstillinger:

3. Under {{ui:Areal}} vælg hvad der skal plottes:
   - {{ui:Alt (udstrækning)}}: hele tegningen.
   - {{ui:Det, der er på skærmen}}: området du ser i tegningen nu.
   - {{ui:Et vindue…}}: klik derefter på {{ui:Vælg}}, klik to hjørner på tegningen, og dialogboksen vender tilbage.
4. Under {{ui:Papir}} vælg en størrelse: ISO A4 til A0, Letter, Legal, Tabloid og ANSI C og D, eller ARCH C, D og E.
5. Under {{ui:Orientering}} vælg {{ui:Liggende}} eller {{ui:Stående}}.
6. Under {{ui:Skalér}} vælg {{ui:Tilpas til papir}} eller en skala som `1:100`.

Under indstillingerne viser en linje skalaen og hvor stort området bliver på papiret. Er det større end papiret, siger den det: kanterne bliver klippet af. Vælg en mindre skala, et større papir eller {{ui:Tilpas til papir}}.

7. Klik på {{ui:Download PDF}}.

En modelplot efterlader en margen på 5 mm rundt om kanten, fordi de fleste printere ikke kan udskrive helt ud til kanten. {{ui:Tilpas til papir}} giver en ulige skala (historikken og infolinjen skriver »(tilpasset)«); vælg en standardskala, når tegningen skal kunne måles korrekt.

:::note
Skalaer læses i reelle enheder. For at 1:100 skal være rigtig, sæt {{ui:Enheder}} under {{ui:Aktuelle indstillinger}} til, hvad én tegningsenhed er. En tegning uden enhed tages for at være i millimeter.
:::

## Plotstiltabeller

En plotstiltabel siger, hvordan hver af de 255 standardfarver i tegninger udskrives, ligesom en farveafhængig plotstiltabel (CTB) gør i andre CAD-programmer. Tre er indbygget:

| Tabel | Udskriver |
|---|---|
| {{ui:Farve (som tegnet)}} | Hvert objekt i sin egen farve. |
| {{ui:Monokrom (sort)}} | Alle farver sort: det sædvanlige valg til tegninger. |
| {{ui:Gråtoner}} | Hver farve som sin gråtone, så farverne holdes adskilt på en sort-hvid printer. |

For at lave din egen, for eksempel røde linjer tykke og sorte, alt andet tyndt:

1. I dialogboksen {{ui:Plot til PDF}} klik på {{ui:Redigér tabeller…}} (eller skriv {{cmd:PLOTSTYLES}}).
2. Klik på {{ui:Ny}}, og skriv et navn som `office` i {{ui:Navn}}. Vil du starte fra en indbygget tabel i stedet, vælg den i {{ui:Tabel}} og klik på {{ui:Kopiér}}.
3. Klik på en farve i gitteret. {{key:Shift}}+klik vælger et interval af farver, {{key:Mod}}+klik tilføjer en mere, og {{ui:Vælg alle farver}} tager dem alle.
4. Angiv hvad de valgte farver udskrives som:
   - {{ui:Udskrives i}}: {{ui:Dets egen farve}}, {{ui:Sort}} eller {{ui:En anden farve…}}.
   - {{ui:Som en grå}}: farven som sin gråtone.
   - {{ui:Farvestyrke (%)}}: 100 er fuld farvestyrke, 50 er halvvejs mod hvid (rastrering), til baggrundslinjer.
   - {{ui:Linjetykkelse}}: {{ui:Dets egen linjetykkelse}} beholder objektets eller lagets linjetykkelse; en værdi udskriver hver linje i den farve i den bredde.
   - {{ui:Linjetype}}: udskriv hver linje i den farve med en anden linjetype (for eksempel alt rødt stiplet); {{ui:Brug objektets linjetype}} lader dem være.
   - {{ui:Linjeende}} og {{ui:Linjesamling}}: stumpe, firkantede eller runde ender, og kantede, skrå eller runde hjørner (runde, som før, når du ikke angiver noget).
   - {{ui:Fyldstil}}: en massiv udfyldning i den farve udskrives som skravering (vandrette eller lodrette streger, skråstreger, krydsskravering, diamanter, kvadratiske prikker) i stedet for blæk, til printere og planer, hvor flad blæk er for tungt.

   Selve tabellen har to indstillinger mere: {{ui:Linjetykkelser}}, de bredder den kender (en udskreven linje går til den nærmeste af dem), og {{ui:Linjetypeskala}}, en faktor på stregerne i hver linjetype, der ikke er en ISO-type.
5. Klik på {{ui:Færdig}}. Tabellen gemmes i tegningen, og arket (eller modellen) plottes nu med den. {{ui:Annuller}} fjerner ændringerne.

En farve med sin egen pen viser en prik i hjørnet, og en prik nederst, når den angiver en linjetykkelse. Et objekt med en ægte farve (ikke en af de 255) bruger penen for den nærmeste standardfarve.

Tegningen gemmer sine tabeller og hvert arks valg, når du gemmer som DWG (2000 til 2018) eller DXF (R12 eller 2000), og åbnes med dem igen. Andre programmer ser navnet i hvert arks sidelayout (`office.ctb`), ikke selve tabellen. En tegning fra et andet program, hvis sidelayout navngiver en tabel som `monochrome.ctb`, plottes med den indbyggede tabel af det navn; for ethvert andet navn siger dialogboksen, at tegningen ikke har den, og plotter tegningsfarverne, indtil du vælger en tabel eller laver en med det navn.

For at bruge en tabel i en anden tegning klik på {{ui:Eksportér}} i {{ui:Plotstiltabeller}} (den gemmer `office.plotstyle.json`), og derefter {{ui:Importér…}} i den anden tegning. {{ui:Importér…}} tager også en `.ctb`-fil fra et andet program: den læses ud fra den offentliggjorte beskrivelse af formatet og **er endnu ikke kontrolleret mod en rigtig fil**. Farven, skraveringen og linjetykkelsen for hver farve læses; gråtoner, pen-numre, linjetyper, linjeender og -samlinger og fyldstile læses ikke, og en navngivet tabel (`.stb`) afvises. Sammenlign den første plot med det, du forventer, og send os filen, hvis den er forkert.

## Udskriv

**I browseren** klik på {{ui:Udskriv…}}. CadCraft laver PDF'en og åbner browserens egen udskriftsdialog for den. Vælg »Faktisk størrelse« eller 100 % (ikke »Tilpas«) der for at beholde skalaen. Hvis browseren ikke vil udskrive fra siden, åbnes PDF'en i en ny fane i stedet: udskriv den derfra med {{key:Mod+P}}.

Du kan også klikke på {{ui:Åbn for at udskrive}}: PDF'en åbnes i en ny browserfane, og du udskriver den derfra.

:::safari
Safari kan vise PDF'en og vente på, at du bruger **Arkiv** og derefter **Udskriv**.
:::

Hvis din browser blokerer den nye fane, downloader CadCraft PDF'en i stedet og siger det i historikken. Tillad pop-ups for siden, så den åbnes i en fane næste gang.

**I CadCraft Studio** lister dialogboksen {{ui:Plot til PDF}} computerens printere. Vælg {{ui:Printer}}, {{ui:Papir i printeren}} og antallet af {{ui:Kopier}}, og klik derefter på {{ui:Udskriv…}}. {{ui:Samme som plottet}} vælger printerens papir, der har arkets størrelse (A3 for et A3-ark); har printeren intet sådant, bruger den sit eget papir og tilpasser arket til det. På Windows sendes arket som et billede på 300 dpi, fordi Windows ikke kan udskrive en PDF uden et PDF-program; på Linux og macOS går selve PDF'en til systemets udskriftstjeneste. Intet forlader computeren.

## Billed- og SVG-filer

{{ui:Download PNG}} gemmer det plottede ark som et billede på 300 dpi (sænkes kun, når et meget stort ark ville blive større, end browseren kan lave; historikken siger det). {{ui:Download SVG}} gemmer det som en skalerbar tegning i millimeter, med plottets linjer og tekst. Begge kommer fra samme plot som PDF'en, med samme plotstil, linjetykkelse og område. Billeder placeret i tegningen er kun i PDF'en; historikken siger, hvor mange der blev udeladt.

## Billeder

Billeder udskrives i deres egen opløsning, under linjerne. {{ui:Billeder}} i dialogboksen begrænser dem til 600, 300 eller 150 dpi for en mindre fil. Linjer, tekst og skravering forbliver altid skarpe (vektor), og gennemsigtighed forbliver gennemsigtighed. Se [Billeder i en tegning](topic:pictures).

## Indstillinger, der huskes

Dialogboksen husker dit sidste papir, din orientering, skala og linjetykkelse i denne browser. Plotstiltabellen gemmes sammen med hvert ark i tegningen; et ark uden valgt tabel starter på den, du valgte sidst. Et valgt vindue huskes, indtil du genindlæser siden; derefter starter dialogboksen på {{ui:Alt (udstrækning)}}.

## Almindelige fejl

- **PDF'en er tom, eller knapperne er grå.** Der er intet at plotte (en tom model), eller {{ui:Et vindue…}} er valgt, og der er endnu ikke valgt et vindue (»Vælg vinduet, der skal plottes.«).
- **Teksten i PDF'en viser »?«.** Tekst på polsk, tjekkisk, kyrillisk, græsk og de andre skriftsystemer i Europa udskrives som sig selv: PDF'en bærer så de bogstaver, den har brug for (fra skrifttypen Liberation Sans, som har Helvetica-bredder), og teksten kan stadig markeres og søges i. Kinesisk, japansk og koreansk tekst udskrives også som sig selv: når en tegning har den, henter plottet en større skrifttype (ca. 10 MB, én gang), og PDF'en bærer kun de tegn, der bruges, så det kræver en forbindelse første gang (ikke i en offline-kopi, der blev gemt før). Hebraisk udskrives med den samme indlejrede skrifttype som latinsk tekst, og arabisk, persisk og urdu-tekst får plottet til at hente endnu en skrifttype (under 1 MB, én gang); højre-mod-venstre-linjer ordnes, og deres bogstaver forbindes (se [Tekst](topic:text)). Sjældne ideogrammer uden for disse skrifttyper og skriftsystemer, der kræver kompleks formning, som hindi, udskrives som »?«, og historikken tæller dem.
- **Alle linjer har samme tykkelse.** Deres linjetykkelse er standard: giv lag eller objekter en {{ui:Linjetykkelse}} i højre panel (se [Linjetykkelser og linjetyper](topic:units-papers-scales#line-weights-and-linetypes)), eller angiv linjetykkelser pr. farve i en [plotstiltabel](topic:plot-pdf#plot-style-tables).
- **»(ikke i denne tegning)« ved siden af plotstilen.** Tegningen kommer fra et andet program og navngiver en tabel, den ikke indeholder. Vælg en af tabellerne, eller lav en med det navn.
- **Konstruktionslinjer er udskrevet.** Sæt deres lag til ikke at blive plottet: klik på dets printerknap i panelet {{ui:Lag}}.
- **Udskriften har forkert størrelse.** Printeren skalerede den. Udskriv i faktisk størrelse.
- **{{key:Mod+P}} åbnede browserens udskriftsdialog.** Markøren var i et felt i højre panel, eller en anden dialogboks var åben. Tryk {{key:Enter}} eller {{key:Esc}} for at forlade feltet, og prøv igen, eller klik på {{ui:Plot}}.
- **{{key:Mod+P}} gjorde ingenting.** En kommando kører. Tryk {{key:Esc}} først.
