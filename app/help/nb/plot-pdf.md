---
title: Plott til PDF
summary: Lag en PDF av et ark i full størrelse, eller av modellen i en skala eller tilpasset papiret, skriv den ut fra nettleseren eller fra Studio, eller lagre den som PNG eller SVG.
keywords: plott, skriv ut, skriver, kopier, png, svg, bilde, pdf, publiser, exportpdf, papir, skala, monokrom, gråtoner, svart-hvitt, linjevekt, penn, sideoppsett, plottevindu, plottestil, plottestiltabell, ctb, fargeavhengig, rastrering, plotstyles, stylesmanager
from: a4752f83
---

## Det du skal lage

En PDF av et ark i full størrelse, deretter en rask PDF av modellen i 1:100, og en utskrift.

PDF-en lages inne i nettleseren din; ingenting lastes opp. Det er en vektor-PDF: linjer forblir skarpe ved alle zoomnivåer, og tekst kan søkes i.

## Plott et ark

1. Klikk fanen til arket under tegningen.
2. Trykk {{key:Mod+P}}, klikk {{ui:Plott}}, eller skriv `PLOT` og trykk {{key:Enter}}.

Dialogboksen {{ui:Plott til PDF}} åpnes. Den viser hvilket ark som plottes og på hvilket papir, «i full størrelse … slik du ser det». Forhåndsvisningen til høyre viser arket.

3. I {{ui:Plottestil}}, velg {{ui:Monokrom (svart)}} for svarte linjer, {{ui:Farge (som tegnet)}} for å beholde fargene, {{ui:Gråtoner}}, eller en tabell du selv har laget (se [Plottestiltabeller](topic:plot-pdf#plot-style-tables)). Arket beholder dette valget: det lagres sammen med tegningen.
4. I {{ui:Linjevekt}}, velg en pennbredde fra 0.13 mm til 0.70 mm. Linjer med standard linjevekt skrives ut med denne bredden; linjer med sin egen linjevekt (layer eller objekt, eller fargens penn i tabellen) skrives ut med den.
5. Klikk {{ui:Last ned PDF}}.

Nettleseren laster ned en PDF som er oppkalt etter tegningen og arket, for eksempel `Drawing1-A-101 Plan.pdf`. Historikken viser størrelsen i byte og papirstørrelsen i millimeter.

Et ark plottes alltid i 1:1 på sitt eget papir. For å endre papiret, endre det på selve arket (se [Sett opp et ark](topic:sheets-and-viewports)). Layer som er satt til ikke å plottes, utelates, og det samme gjelder rammer for visningsområder.

## Alle ark i én PDF

Når det er to eller flere ark, har dialogboksen {{ui:Plott til PDF}} valget {{ui:Alle ark i én PDF}}; eller skriv {{cmd:PUBLISH}}. {{key:Enter}} tar med alle ark; Noen (`S`) spør etter navnene deres, skilt med komma. Én PDF lastes ned med én side per ark, i fanerekkefølge, hver i sin egen papirstørrelse, og et bokmerke per ark med navnet sitt. Hvert ark plottes med sin egen plottestiltabell; et ark uten valgt tabell bruker den du sist valgte i dialogboksen, og pennbredden du sist valgte.

## Plott modellen

1. Klikk fanen {{ui:Modell}}.
2. Trykk {{key:Mod+P}}.

Dialogboksen sier at den plotter modellen på et ark papir, og viser flere innstillinger:

3. I {{ui:Areal}}, velg hva som skal plottes:
   - {{ui:Alt (utstrekning)}}: hele tegningen.
   - {{ui:Det som er på skjermen}}: området du ser i tegningen nå.
   - {{ui:Et vindu…}}: klikk deretter {{ui:Velg}}, klikk to hjørner i tegningen, så kommer dialogboksen tilbake.
4. I {{ui:Papir}}, velg en størrelse: ISO A4 til A0, Letter, Legal, Tabloid og ANSI C og D, eller ARCH C, D og E.
5. I {{ui:Orientering}}, velg {{ui:Liggende}} eller {{ui:Stående}}.
6. I {{ui:Skala}}, velg {{ui:Tilpass til papiret}} eller en skala, for eksempel `1:100`.

Under innstillingene viser en linje skalaen og hvor stort området blir på papiret. Hvis det er større enn papiret, sier den fra: kantene blir kuttet av. Velg en mindre skala, et større papir eller {{ui:Tilpass til papiret}}.

7. Klikk {{ui:Last ned PDF}}.

En modellplott har en 5 mm marg rundt kanten, fordi de fleste skrivere ikke kan skrive helt ut til kanten. {{ui:Tilpass til papiret}} gir en uvanlig skala (historikken og infolinjen sier «(tilpasset)»); velg en standardskala når tegningen må måles riktig.

:::note
Skalaer leses i reelle enheter. For at 1:100 skal stemme, sett {{ui:Enheter}} i {{ui:Gjeldende innstillinger}} til hva én tegningsenhet er. En tegning uten enheter regnes som millimeter.
:::

## Plottestiltabeller

En plottestiltabell angir hvordan hver av de 255 standard tegnefargene skrives ut, slik en fargeavhengig plottestiltabell (CTB) gjør i andre CAD-programmer. Tre er innebygd:

| Tabell | Skrives ut |
|---|---|
| {{ui:Farge (som tegnet)}} | Hvert objekt i sin egen farge. |
| {{ui:Monokrom (svart)}} | Alle farger svart: det vanlige valget for tegninger. |
| {{ui:Gråtoner}} | Hver farge som sin gråtone, slik at fargene holdes fra hverandre på en svart-hvitt-skriver. |

For å lage en egen, for eksempel røde linjer tykke og svarte, alt annet tynt:

1. I dialogboksen {{ui:Plott til PDF}}, klikk {{ui:Rediger tabeller…}} (eller skriv {{cmd:PLOTSTYLES}}).
2. Klikk {{ui:Ny}}, og skriv et navn, for eksempel `office`, i {{ui:Navn}}. For å starte fra en innebygd tabell i stedet, velg den i {{ui:Tabell}} og klikk {{ui:Kopier}}.
3. Klikk en farge i rutenettet. {{key:Shift}}+klikk velger et utvalg farger, {{key:Mod}}+klikk legger til én til, og {{ui:Velg alle farger}} tar dem alle.
4. Angi hva de valgte fargene skrives ut som:
   - {{ui:Skrives ut som}}: {{ui:Sin egen farge}}, {{ui:Svart}} eller {{ui:En annen farge…}}.
   - {{ui:Som grå}}: fargen som sin gråtone.
   - {{ui:Blekk (%)}}: 100 er full blekk, 50 er halvveis mot hvitt (rastrering), for bakgrunnslinjer.
   - {{ui:Linjevekt}}: {{ui:Sin egen linjevekt}} beholder objektets eller layerets linjevekt; en verdi skriver ut alle linjer i den fargen med den bredden.
   - {{ui:Linjetype}}: skriv ut alle linjer i den fargen med en annen linjetype (for eksempel alt rødt stiplet); {{ui:Bruk objektets linjetype}} lar dem være.
   - {{ui:Linjeende}} og {{ui:Linjeskjøt}}: stumpe, kvadratiske eller runde ender, og spisse, avskårne eller runde hjørner (runde, som før, når du ikke angir noe).
   - {{ui:Fyllstil}}: en heldekkende fylling i den fargen skrives ut som skravurlinjer (horisontale eller vertikale striper, skråstreker, krysskravur, diamanter, kvadratiske prikker) i stedet for blekk, for skrivere og planer der flat blekk er for tungt.
   Selve tabellen har to innstillinger til: {{ui:Linjevekter}}, breddene den kjenner (en utskrevet linje går til den nærmeste av dem), og {{ui:Linjetypeskala}}, en faktor for strekene i hver linjetype som ikke er en ISO-linjetype.
5. Klikk {{ui:Ferdig}}. Tabellen lagres i tegningen, og arket (eller modellen) plottes nå med den. {{ui:Avbryt}} forkaster endringene.

En farge med sin egen penn viser en prikk i hjørnet, og en prikk nederst når den angir en linjevekt. Et objekt med ekte farge (ikke en av de 255) bruker pennen til nærmeste standardfarge.

Tegningen beholder sine tabeller og hvert arks valg når du lagrer som DWG (2000 til 2018) eller DXF (R12 eller 2000), og åpnes med dem igjen. Andre programmer ser navnet i hvert arks sideoppsett (`office.ctb`), ikke selve tabellen. En tegning fra et annet program som i sideoppsettet nevner en tabell som `monochrome.ctb`, plottes med den innebygde tabellen med det navnet; for ethvert annet navn sier dialogboksen at tegningen ikke har den, og plotter tegningsfargene inntil du velger en tabell eller lager en med det navnet.

For å bruke en tabell i en annen tegning, klikk {{ui:Eksporter}} i {{ui:Plottestiltabeller}} (den lagrer `office.plotstyle.json`), og deretter {{ui:Importer…}} i den andre tegningen. {{ui:Importer…}} tar også imot en `.ctb`-fil fra et annet program: den leses ut fra den publiserte beskrivelsen av formatet og **er ennå ikke sjekket mot en ekte fil**. Fargen, rasteringen og linjevekten til hver farge leses; gråtoner, pennummer, linjetyper, linjeender og -skjøter og fyllstiler leses ikke, og en navngitt tabell (`.stb`) avvises. Sammenlign det første plottet med det du forventer, og send oss filen hvis den er feil.

## Skriv ut

**I nettleseren**, klikk {{ui:Skriv ut…}}. CadCraft lager PDF-en og åpner nettleserens egen utskriftsdialog for den. Velg «Faktisk størrelse» eller 100 % (ikke «Tilpass») der for å beholde skalaen. Hvis nettleseren ikke vil skrive ut fra siden, åpnes PDF-en i stedet i en ny fane: skriv den ut derfra med {{key:Mod+P}}.

Du kan også klikke {{ui:Åpne for utskrift}}: PDF-en åpnes i en ny nettleserfane, og du skriver den ut derfra.

:::safari
Safari kan vise PDF-en og vente til du bruker **Arkiv**, deretter **Skriv ut**.
:::

Hvis nettleseren blokkerer den nye fanen, laster CadCraft i stedet ned PDF-en og sier fra om det i historikken. Tillat popup-vinduer for nettstedet for å åpne den i en fane neste gang.

**I CadCraft Studio** lister dialogboksen {{ui:Plott til PDF}} datamaskinens skrivere. Velg {{ui:Skriver}}, {{ui:Papir i skriveren}} og antall {{ui:Kopier}}, og klikk deretter {{ui:Skriv ut…}}. {{ui:Samme som plottet}} velger skriverens papir som har størrelsen til arket (A3 for et A3-ark); når skriveren ikke har et slikt, bruker den sitt eget papir og tilpasser arket til det. På Windows sendes arket som et bilde med 300 dpi, fordi Windows ikke kan skrive ut en PDF uten et PDF-program; på Linux og macOS sendes selve PDF-en til systemets utskriftstjeneste. Ingenting forlater datamaskinen.

## Bilde- og SVG-filer

{{ui:Last ned PNG}} lagrer det plottede arket som et bilde med 300 dpi (senkes bare når et veldig stort ark ville blitt større enn nettleseren kan lage; historikken sier fra om det). {{ui:Last ned SVG}} lagrer det som en skalerbar tegning i millimeter, med linjene og teksten fra plottet. Begge kommer fra samme plott som PDF-en, med samme plottestil, linjevekt og område. Bilder plassert i tegningen finnes bare i PDF-en; historikken sier hvor mange som ble utelatt.

## Bilder

Bilder skrives ut i sin egen oppløsning, under linjene. {{ui:Bilder}} i dialogboksen begrenser dem til 600, 300 eller 150 dpi for en mindre fil. Linjer, tekst og skravur forblir alltid skarpe (vektor), og gjennomsiktighet forblir gjennomsiktighet. Se [Bilder i en tegning](topic:pictures).

## Innstillinger som huskes

Dialogboksen husker ditt sist valgte papir, din orientering, skala og linjevekt i denne nettleseren. Plottestiltabellen lagres med hvert ark i tegningen; et ark uten valgt tabell starter med den du sist valgte. Et valgt vindu beholdes til du laster siden på nytt; etter det starter dialogboksen med {{ui:Alt (utstrekning)}}.

## Vanlige feil

- **PDF-en er tom, eller knappene er grå.** Det er ingenting å plotte (en tom modell), eller {{ui:Et vindu…}} er valgt og ingen vindu er valgt ennå («Velg vinduet som skal plottes.»).
- **Tekst vises som «?» i PDF-en.** Tekst på polsk, tsjekkisk, kyrillisk, gresk og de andre skriftene i Europa skrives ut slik den er: PDF-en inneholder da bokstavene den trenger (fra skriften Liberation Sans, som har Helvetica-bredder), og teksten kan fortsatt merkes og søkes i. Kinesisk, japansk og koreansk tekst skrives også ut slik den er: når en tegning har den, henter plottet en større skrift (ca. 10 MB, én gang), og PDF-en inneholder bare de tegnene som brukes, så det trengs en tilkobling første gang (ikke i en frakoblet kopi som ble lagret før). Hebraisk skrives ut med samme innebygde skrift som latinsk tekst, og arabisk, persisk og urdu gjør at plottet henter én skrift til (under 1 MB, én gang); linjer fra høyre mot venstre ordnes og bokstavene settes sammen (se [Tekst](topic:text)). Sjeldne ideogrammer utenfor disse skriftene, og skriftsystemer som krever kompleks tegnforming, som hindi, skrives ut som «?», og historikken teller dem.
- **Alle linjer har samme tykkelse.** Linjevekten deres er standard: gi layer eller objekter en {{ui:Linjevekt}} i høyre panel (se [Linjevekter og linjetyper](topic:units-papers-scales#line-weights-and-linetypes)), eller angi linjevekter per farge i en [plottestiltabell](topic:plot-pdf#plot-style-tables).
- **«(ikke i denne tegningen)» ved siden av plottestilen.** Tegningen kommer fra et annet program og nevner en tabell den ikke inneholder. Velg en av tabellene, eller lag en med det navnet.
- **Konstruksjonslinjer ble skrevet ut.** Sett layeret deres til ikke å plottes: klikk skriverknappen i panelet {{ui:Layer}}.
- **Utskriften har feil størrelse.** Skriveren skalerte den. Skriv ut i faktisk størrelse.
- **{{key:Mod+P}} åpnet nettleserens utskriftsdialog.** Markøren sto i et felt i høyre panel, eller en annen dialogboks var åpen. Trykk {{key:Enter}} eller {{key:Esc}} for å forlate feltet, og prøv igjen, eller klikk {{ui:Plott}}.
- **{{key:Mod+P}} gjorde ingenting.** En kommando kjører. Trykk {{key:Esc}} først.
