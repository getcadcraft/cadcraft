---
title: Nytt i 0.9 (tidligere)
summary: Skravurer som følger sin grense, layergrupper, stablede etasjer, 2D smarte vegger med dører og vinduer, tekststiler og en formatert tekstredigerer, en flytende kommandolinje, rutenettfang, ti måter å tegne en bue på, og Dokumentpanelet.
keywords: nytt i 0.9, tidligere versjon, versjonsnotater, 0.9, endringslogg, skravur, assosiativ skravur, hatchedit, pat-fil, mønsterfil, layergrupper, laygroup, etasjer, stablede etasjer, floorlayers, smarte vegger, vegg, dør, vindu, veggverktøy, tekststil, stil, mtext-redigerer, avsnittstekst, formatering, flytende kommandolinje, kommandolinje, toppområde, kompakt, rutenettfang, grid snap, f9, bue, dokumentpanel, sjekk ut, britiske stålstørrelser, draw.io, thai-tekst, dxf r12, hva er nytt, endringer, 0.8, 0.8.1, versjon, nye funksjoner, autofullføring, spøkelse, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, sammenslåing, git, fossil, access, tegning uten syn, skjermleser, grenser, peilinger, aunits, shx, diagram, ole, historikk, sammenlign, med ord, egenskaper, fot og tommer, strekk, språk, inndataenheter, problemer, live, assistenter
from: 3451e64c
---

Dette er hva som endret seg i CadCraft 0.9, sammenlignet med 0.8.1. CadCraft er 2D- og 3D-tegneappen i CadCraft Studio 0.9 og dens åtte apper. 0.9 fullfører plantegningstegning, legger til tekststiler og en ekte tekstredigerer, og gir mer plass på skjermen.

## Nytt

### Plantegningstegning

- **Skravurer som følger sin grense.** {{cmd:HATCH}} lenkes til det som avgrenser den. Flytter, roterer eller skalerer du grensen, følger skravuren og dens mønster med. Former du den om, beregnes skravuren på nytt. {{cmd:HATCHEDIT}} (`HE`) endrer en skravur etterpå og lager eller avslutter lenken. Se [Skravur og fyll av områder](topic:hatch).
- **Skravurmønsterfiler.** Ved {{cmd:HATCH}}-spørsmålet `Pick internal point` skriver du `F` (Mønsterfil) og velger en `.pat`-fil. Bare filer skrevet i det vanlige formatet er prøvd.
- **Layergrupper.** I {{ui:Verktøy}} på {{ui:Layer}}-panelet: {{ui:Ny gruppe}}, {{ui:Legg til ferdiglagde grupper}}, {{ui:Grupper etter navn}} og {{ui:Finn en layer}}, eller skriv {{cmd:LAYGROUP}} (`LG`). Se [Organiser en tegning med lag](topic:layers#group-layers).
- **Stablede etasjer.** {{cmd:FLOORS}} (`FLR`), eller {{ui:Etasjer…}} i menyen {{ui:Mer}} i gruppen {{ui:Visning}}. Et visningsområde på et ark kan vise én etasje under {{ui:Vist etasje}} i Egenskaper. {{cmd:FLOORLAYERS}} gjør etasjer om til lag for en fil som skal til noen andre. Se [Stable etasjer i én tegning](topic:floors).
- **2D smarte vegger, dører og vinduer.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) og {{cmd:DELOPENING}}. Hjørner, T-sammenføyninger og kryssinger regnes ut for deg. Vegger beholder en oversikt over hvordan de møtes, og Egenskaper får Ikke tillat sammenføyning ved start / ved slutt, en Posisjonslinje og en redigerbar Lengde. Se [Tegn 2D-vegger, dører og vinduer](topic:walls-2d).
- **Veggverktøyet på plantegningsvegger.** Skriv {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} og resten. De har ingen verktøylinjeknapper ennå. Se [Veggformer, kutt, forskyvninger og låser for 2D-vegger](topic:wall-tools-2d).

### Tekst

- **Tekststiler.** {{cmd:STYLE}} (`ST`), eller {{ui:Tekststil}} på verktøylinjen {{ui:Tegn}}: navngitte stiler med en skrift, høyde, breddefaktor og skråstilling. Se [Still inn skrift og størrelse på tekst med tekststiler](topic:text-styles).
- **En formatert avsnittstekstredigerer.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} eller et dobbeltklikk på tekst åpner en boks med skrift, størrelse, fet, kursiv, understreking, gjennomstreking, farge, justering og grad-, pluss-minus- og diametertegn, pluss {{ui:OK}} og {{ui:Avbryt}}. Se [Formater avsnittstekst](topic:format-paragraph-text).
- **Et diagram fra draw.io XML.** {{cmd:DIAGRAM}} (`T2D`) leser også limt draw.io XML. Se [Tegn et diagram fra tekst](topic:text-to-diagram).
- **Thai-tekst i en PDF-plott.** Den ble tidligere skrevet ut som spørsmålstegn.

### Mer plass og tegnehjelpemidler

- **En flytende, tynnere kommandolinje og et kompakt toppområde.** Dra kommandolinjens håndtak for å gjøre den flytende, dra øvre kant for færre linjer, og {{key:F2}} åpner historikken. {{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Kommandolinje}} og valgene for toppområdet har de samme innstillingene. Se [Innstillinger](topic:settings#command-line).
- **Objektfangmenyen.** Høyreklikk {{ui:Fang}} i statuslinjen, eller skriv {{cmd:OSNAP}}.
- **Fang til rutenett.** Knappen {{ui:Rutenettfang}} i statuslinjen, eller {{key:F9}}: plukkede punkter går til nærmeste rutenettpunkt når ingen objektfang tok punktet.
- **Bue på ti måter, og Fortsett.** {{ui:Bue}} på verktøylinjen {{ui:Tegn}} eller {{cmd:ARC}}: 3-punkt, Start/Sentrum/Slutt-familien og Sentrum/Start/Slutt-familien, og Fortsett (trykk {{key:Enter}} ved startpunktet) fra den siste linjen, buen eller polylinjen.
- **Dokumentpanelet.** {{cmd:DOCUMENTS}} (`DOCS`) eller {{ui:Dokumenter…}} i menyen {{ui:Mer}} i gruppen {{ui:Visning}}: revisjon, tilstand og utsjekking for hver tegning i en prosjektmappe. Det åpnes som en sentrert dialog. Se [Dokumenter](topic:documents).

### Filer

- **Britiske stålstørrelser.** 976 profiler i Standard-panelet, skrevet slik de står på tegninger (for eksempel `305x165x40 UB`).
- **Sørafrikanske pakker** (tegnepraksis og byggeforskrifter) som pakker i tilleggsprogrammet Byggeforskrifter. Tallene er ikke verifisert.
- **Tillegg for CadCraft,** lagt til på forespørsel og av som standard: design av interiørbelysning, brikkedesign (HDL til layout), rutersnitting, kretssimulering, rullekjedetannhjul og landpakker for Byggeforskrifter.

## Rettet

- Å flytte, rotere eller skalere en skravur etterlot mønsteret sitt.
- {{cmd:GRIDMOVE}} tok med en hel plan-vegg som bare starter på rutenettlinjen. En vegg bedømmes nå etter sine ender.
- Rutenettet vistes bare innenfor tegningsgrensene, selv med grenser av.
- Blokklisten i sidepanelet ruller, og et navn som ingen blokk har, lister blokkene som begynner med det («Mente du»).
- DXF R12-filer som AutoCAD avviste («Unknown group 1001 for table»), åpnes der nå.
- Veldig store filer (omtrent 70 000 enheter og oppover) feilet ved åpning med «Maximum call stack size exceeded».
- DWG-filer fra AutoCAD 2018 og nyere med en høy vedlikeholdsversjon feilet ved åpning med «bad BITLONG code 11».
- I avsnittstekstboksen beholder en ny størrelse som skrives for en valgt del, valget.

## I alle apper

Bootstrap-verktøytips på hver kontroll med et hint, et startstips du kan lukke, fanelister som ruller når de ikke får plass, og en tittel på nettleserfanen som følger den åpne tegningen (`<drawing> - CadCraft | CadCraft`). {{ui:Innstillinger}} › {{ui:Layout}} er nå en nedtrekksliste med to-linjers valg. Språklisten i {{ui:Innstillinger}} er lengre enn i 0.8. Live-samredigering, Bibliotekssamlinger og vekt- og temperaturenheter er beskrevet i Studio-notatene.

## Ærlige begrensninger

- Avsnittstekst har ingen punkt- eller nummerlister, tabulatorlinjal eller justering til begge kanter. Plottede PDF-filer setter tekst i Helvetica.
- Plan-vegger er rette, så en bue tegnes som korte vegger. Fellesskapets håndsjekk av veggverktøyet er ikke ferdig.
- Layergrupper er ikke skrevet i AutoCADs eget format, så AutoCAD viser en flat liste. Andre programmer viser alle etasjer sammen med mindre du kjører {{cmd:FLOORLAYERS}}.
- Dokumentpanelet er ikke prøvd av to personer på en ekte delt mappe. Rutersnitting har kjørt på ingen ekte maskin. Belysningsberegningen ble sjekket mot en fotonsporing, ikke et annet program. Ingeniørtilleggene er sjekkeverktøy, ikke en erstatning for en ingeniørs gjennomgang.
- Språk utenom engelsk er maskinutkast, og noen av de nye ordene er bare engelske.

## Tidligere: 0.8 og 0.8.1

Dette er hva som endret seg i CadCraft 0.8 og 0.8.1, sammenlignet med 0.7. 0.8 (1. november 2026) legger til tegnehjelpemidler som arbeider ut fra din egen tegning, etter regler på din datamaskin og uten modell. 0.8.1 (2. november 2026) retter feil som ble meldt etter den.

### Nytt

**Tegning som fullfører tanken din**

- **Et spøkelse viser hva som kommer neste.** Uten en kommando i gang viser et grått stiplet spøkelse hva tegningens egne mønstre sier kommer neste: neste stender med samme avstand, neste trinn i en trapp, den manglende veggen i et rom. Trykk {{key:Tab}} for å tegne det som ett angretrinn, eller {{key:Esc}} for å avvise det. Det ser bare på de nyeste objektene, så det holder seg jevnt på en stor tegning. Slå det av i {{ui:Innstillinger}} › {{ui:CadCraft}}, eller med {{cmd:AUTOCOMPLETE}} `Off`.
- **Neste punkt mens du tegner en linje.** Midt i {{cmd:LINE}} eller {{cmd:PLINE}} er spøkelset neste punkt: neste trinn i en trapp, det fjerde hjørnet i et rektangel, eller punktet som lukker det. Før markøren nær det og trykk {{key:Tab}}, som om du hadde klikket der.
- **Penn-skisser blir presis geometri.** {{cmd:SKETCHFIX}}: tegn grove strøk med penn, mus eller finger, og hvert blir en ren linje, sirkel, bue, rektangel eller polylinje, festet til det som allerede er tegnet. Se [Skisser med penn og få presis geometri](topic:sketch-with-a-pen).
- **Et bilde av en skisse blir en tegning.** {{cmd:PHOTOSKETCH}} (`PSK`) finner papiret i et bilde, retter opp perspektivet, bruker papirformatet og målestokken du gir, og tegner pennlinjene over på et lag for hver pennfarge. Bokstaver blir ikke tegnet om.
- **Mål det etter regler.** {{cmd:AUTODIM}} (`ADIM`) lager kjeder av mål langs sidene du velger, et totalmål, åpningsbredder, hulldiametre og, med `Grid`, rutenettavstand. Den gjentar aldri et mål som allerede finnes.
- **Flytt en rutenettlinje, og settet følger.** {{cmd:GRIDMOVE}} (`GM`): vegger som ender på rutenettlinjen strekkes med den, vegger langs den, søyler, dens boble og merkelapp flyttes, og mål på den måler den nye avstanden. Ett angretrinn.

**Ark, detaljer og merkelapper**

- **Ark som legger seg ut selv.** {{cmd:AUTOSHEET}} tar dine navngitte visninger (eller de separate delene av modellen), velger et papirformat og en standardmålestokk, og legger visningene på nye ark med et tegningshode og en bildetekst (navn og målestokk). Alt forblir redigerbart. Se [Legg ut ark for meg](topic:lay-out-sheets-for-me).
- **Firmaets detaljer, tilbudt mens du tegner.** {{cmd:DETAILS}} (`DET`) beholder dine egne detaljblokker. Når det du velger passer til en av dem etter ordene på lagene, blokknavnene og merknadene, sier statuslinjen det. Velg den og plasser den. {{cmd:DETAILS}} › Share legger listen din i Dokumentmappen og henter inn det teamet ditt har lagt til. Innstillinger slår tilbudene av.
- **Merkelapper på blokker.** {{cmd:TAGS}} definerer en merkelapp (dens type, verdiene den kan ta, blokkene den gjelder for), setter den på blokkreferansene du velger, og lister dem som en tabell du kan lagre som CSV. Definisjonene beholdes i DWG-en. Se [Merkelapper](topic:tags).
- **Tegningsgrenser.** {{cmd:LIMITS}} setter et rektangel for tegningen: rutenettet fyller det, og {{cmd:ZOOM}} All viser dem. Grensene vises som en kontur og lagres i DWG og DXF, sammen med papirgrensene. Se [Angi tegningsgrenser](topic:drawing-limits).

**Å arbeide med andre folk og andre programmer**

- **Gjør en markering om til en revisjon.** {{cmd:REDLINE}} leser pakken MarkupCraft skriver, og lister hver endring. Godta eller avvis hver med en merknad. De godkjente får en revisjonssky og en revisjonslogg i ett angretrinn, og du lagrer svarfilen som lukker markeringene i MarkupCraft. Se [Gjør en markering om til en revisjon](topic:redline-to-revision).
- **Tegninger som git og Fossil kan slå sammen.** Med {{ui:Sammenslåingsvennlige filer}} på i {{ui:Innstillinger}} › {{ui:CadCraft}} får hvert objekt en nøkkel som aldri endres (filene blir omtrent 10 prosent større). `cadcraft merge base ours theirs` slår deretter sammen to personers endringer av én DWG- eller DXF-fil objekt for objekt, og melder bare der to personer endret det samme. Se [Slå sammen to personers endringer av én tegning](topic:merge-drawings).
- **Hva som endret seg, med ord.** I Historikk gir Sammenlign en ren liste: hvor ting endret seg, hvor store stedene er, hva som ble lagt til, fjernet eller endret, og teksten som ble redigert. Se [Si med ord hva som endret seg](topic:changes-in-words).
- **Peilinger og vinkler.** Skriv en retning som en landmålers peiling, som N45°23'30"E, eller i grader, minutter og sekunder, hvor som helst en vinkel etterspørres. AUNITS setter hvordan vinkler vises. Se [Skriv og vis peilinger og vinkler](topic:bearings-and-angles).
- **Dine egne SHX-skrifter.** Gi CadCraft en mappe med SHX-skrifter, og tekststiler som navngir dem, tegnes i dem, på skjermen og i plott. Se [Tegn tekst i dine egne SHX-skrifter](topic:shx-fonts).
- **Et diagram fra tekst.** {{cmd:DIAGRAM}} leser et Mermaid-flytdiagram, et PlantUML-komponentdiagram, D2 eller en fra-til-liste, og tegner blokker og koblinger du kan redigere. Se [Tegn et diagram fra tekst](topic:text-to-diagram).
- **OLE-objekter i en DWG.** {{cmd:OLELIST}} lister OLE-objektene en DWG bærer, som CadCraft ikke kan plassere selv, og plasserer en kopi av et bilde der du sier. Se [Bilder](topic:pictures#objects-from-other-programs-ole).
- **Dine beregninger blir med tegningen.** Beregningsark og designgrunner beholdes i DWG-en sammen med klassetabellen.

**Tegning uten syn**

- Slå på {{ui:Tegning uten syn}} i {{ui:Innstillinger}} (eller skriv {{cmd:ACCESS}} og svar `On`). CadCraft leser opp hver kommando og hvert resultat via skjermleseren, beskriver tegningen og det som er nær markøren, lar deg flytte markøren og velge punkter med tastaturet, og spiller en lyd for hvert fang og hvert håndtak. Der nettleseren din kan gjenkjenne tale på datamaskinen, kan kommandoer sies. Se [Tegn uten syn](topic:draft-without-sight).

**I alle apper**

- **Språk.** 54 språk; ti er nye (litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili, usbekisk). Språk utenom engelsk er maskinutkast til en morsmålstaler har lest dem.
- **Inndataenheter.** Styreflate, penn, 3D-mus, spillkontroll og MIDI-kontroller.
- **Verktøylinjerader og egenskapsrutenettet.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Verktøylinjerader}} tilbyr Bryt, 2 rader eller 1 rad i de andre appene. CadCraft beholder sin egen innstilling i {{ui:Innstillinger}} › {{ui:CadCraft}} (se [Verktøylinjerader](topic:settings#toolbar-rows)). Det delte egenskapsrutenettet finnes i tre andre apper, ikke i CadCraft.
- **Problemer, Live og tillegg.** Et delt Problemer-panel som varsler i hver app, en Live-visning av hvem som er hvor i CadCraft Studio (se [Arbeid på én tegning sammen](topic:work-live)), og en oversikt over tillegg.
- **Koble til din KI.** Én forbindelse fra CadCraft Studio til alle åtte appene, med et nivå per app for bare lesing, forslag eller redigering, og en logg i vanlig språk over hva assistenten gjorde. CadCraft har ingen egen KI, og Spør i alle apper bruker KI-en du kobler til.

### Rettet i 0.8.1

- **Egenskaper viste 150 i stedet for 12'-6"** i tegninger med fot og tommer. Felt som appen leser selv, beholder teksten sin igjen.
- **DWG-filer der klasseseksjonen ble lest som feil type** (GitHub cadcraft#5) åpnes nå riktig.
- **Siktekorset vises ikke lenger bak popup-vinduer.**
- **Studio og de pakkede utgavene kan bytte språk under kjøring.** Før var de bare engelske. Ikke testet på alle plattformer ennå: si fra hvis språket ikke bytter.
- **Nettbrett i portrett** gir ledig rutenetthøyde til lerretet, og arkmodus starter ved 760 px eller mindre.
- **STRETCH med et kryssende vindu, og LIMITS,** ble meldt på Studio 0.8.0. De var allerede riktige i 0.8-nettversjonen; installeringsprogrammet til den som meldte, var eldre. Studio 0.8.1 har dem.

### Ikke i denne versjonen ennå

- **0.8 og 0.8.1 er ikke kodesignert.** Windows kan advare (velg {{ui:Mer info}}, deretter {{ui:Kjør likevel}}). På en Mac høyreklikker du CadCraft Studio og velger {{ui:Åpne}}. Butikkutgaver er satt på vent, og iPad- og iPhone-utgaven ble ikke bygget på nytt for 0.8.1.
- **Pennskisser og skissebilder** er bare prøvd på oppdiktede bilder og med mus, ikke ennå med en ekte penn, berøringsskjerm eller en håndskisse på papir.
- **Tegning uten syn** er testet med automatiske sjekker, ikke ennå med en skjermleser eller en blind tester.
- **Deling av detaljer** har ikke hatt en sjekk av to personer. En Team Cloud Plan-mappe som Dokumentmappe er ikke bygget.
- **Sammenslåing** virker for CadCrafts DWG- og DXF-filer. Det samme for de andre appenes filer er ikke bygget.
- **Angre på tvers av vinduer:** CadCraft melder hvert ferdige trinn, men Studio har ingen felles Angre for alle apper ennå. Hver app angrer sine egne trinn.
- **En DWGs OLE-objekter** beholdes, men tegnes ikke på stedet.
- **Lesing av plottestiltabeller (CTB-filer)** fra andre programmer er bygget, men ikke sjekket mot en fil fra et annet program.
- **Koble til din KI:** ett-klikks tilkobling i Studio, den hostede koblingen for nettleser-KI, din egen API-nøkkel inni Studio og den publiserte MCP-pakken er ikke lovet i denne utgaven.

For versjonen før denne, se [Nytt i 0.7](topic:whats-new-0-7).
