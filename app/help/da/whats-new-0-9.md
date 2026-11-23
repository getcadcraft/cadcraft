---
title: Nyt i 0.9 (tidligere)
summary: Skraveringer, der følger deres kontur, lag-grupper, stablede etager, 2D-smarte vægge med døre og vinduer, tekststile og en formateret teksteditor, en svævende kommandolinje, gitterfangning, ti måder at tegne en bue på og Dokumenter-panelet.
keywords: nyt i 0.9, tidligere udgivelse, nyt, 0.9, udgivelsesnoter, ændringslog, skravering, associativ skravering, hatchedit, pat-fil, mønsterfil, lag-grupper, laygroup, etager, stablede etager, floorlayers, smarte vægge, væg, dør, vindue, vægværktøjer, tekststil, stil, mtext-editor, afsnitstekst, formatering, svævende kommandolinje, kommandolinje, øverste område, kompakt, fang til gitter, gitterfang, f9, bue, dokumentpanel, check ud, britiske stålstørrelser, draw.io, thai-tekst, dxf r12, hvad er nyt, udgivelsesnoter, ændringer, 0.8, 0.8.1, version, nye funktioner, autofuldførelse, spøgelse, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, flet, git, fossil, access, tegning uden syn, skærmlæser, grænser, pejlinger, aunits, shx, diagram, ole, historik, sammenlign, med ord, egenskaber, fod og tommer, stræk, sprog, inputenheder, problemer, live, assistenter
from: 3451e64c
---

Dette er, hvad der ændrede sig i CadCraft 0.9, sammenlignet med 0.8.1. CadCraft er 2D- og 3D-tegneappen i CadCraft Studio 0.9 og dens otte apps. 0.9 færdiggør plantegningstegning, tilføjer tekststile og en rigtig teksteditor og giver mere plads på skærmen.

## Nyt

### Plantegningstegning

- **Skraveringer, der følger deres kontur.** {{cmd:HATCH}} forbinder sig til det, der afgrænser den. Flyt, drej eller skalér konturen, og skraveringen og dens mønster følger med; formgiv den, og skraveringen beregnes igen. {{cmd:HATCHEDIT}} (`HE`) ændrer en skravering bagefter og laver eller afslutter forbindelsen. Se [Skravering og udfyldning af områder](topic:hatch).
- **Mønsterfiler til skravering.** Ved {{cmd:HATCH}}-spørgsmålet `Pick internal point` skriver du `F` (Mønsterfil) og vælger en `.pat`-fil. Kun filer skrevet i det sædvanlige format er prøvet.
- **Lag-grupper.** I {{ui:Værktøjer}} på panelet {{ui:Lag}}: {{ui:Ny gruppe}}, {{ui:Tilføj færdige grupper}}, {{ui:Gruppér efter navn}} og {{ui:Find et lag}}; eller skriv {{cmd:LAYGROUP}} (`LG`). Se [Organisér en tegning med lag](topic:layers#group-layers).
- **Stablede etager.** {{cmd:FLOORS}} (`FLR`), eller {{ui:Etager…}} i menuen {{ui:Mere}} i gruppen {{ui:Visning}}. En viewport på et ark kan vise én etage under {{ui:Viste etage}} i {{ui:Egenskaber}}. {{cmd:FLOORLAYERS}} gør etager til lag til en fil, der skal til en anden. Se [Stabl etager i én tegning](topic:floors).
- **2D-smarte vægge, døre og vinduer.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) og {{cmd:DELOPENING}}. Hjørner, T-sammenføjninger og krydsninger regnes ud for dig. Vægge gemmer en registrering af, hvordan de forbindes, og {{ui:Egenskaber}} får Forbyd sammenføjning ved start / ved slut, en Placeringslinje og en redigerbar Længde. Se [Tegn 2D-vægge, døre og vinduer](topic:walls-2d).
- **Vægværktøjet på plan-vægge.** Skriv {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} og resten. De har endnu ingen værktøjslinjeknapper. Se [Vægformer, snit, forskydninger og låse til 2D-vægge](topic:wall-tools-2d).

### Tekst

- **Tekststile.** {{cmd:STYLE}} (`ST`), eller {{ui:Tekststil}} på værktøjslinjen {{ui:Tegn}}: navngivne stile med en skrifttype, højde, breddefaktor og hældning. Se [Angiv skrifttype og størrelse for tekst med tekststile](topic:text-styles).
- **En formateret afsnitsteksteditor.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} eller et dobbeltklik på tekst åbner en boks med skrifttype, størrelse, fed, kursiv, understregning, gennemstregning, farve, justering og gradtegn, plus-minus og diameter-tegn, samt {{ui:OK}} og {{ui:Annuller}}. Se [Formatér afsnitstekst](topic:format-paragraph-text).
- **Et diagram fra draw.io XML.** {{cmd:DIAGRAM}} (`T2D`) læser også indsat draw.io XML. Se [Tegn et diagram ud fra tekst](topic:text-to-diagram).
- **Thai-tekst i en PDF-plot.** Den blev udskrevet som spørgsmålstegn før.

### Mere plads og tegnehjælpemidler

- **En svævende, tyndere kommandolinje og et kompakt øverste område.** Træk kommandolinjens greb for at frigøre den, træk i dens øverste kant for færre linjer, og {{key:F2}} åbner historikken. {{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Kommandolinje}} og valgene for øverste område har de samme indstillinger. Se [Indstillinger](topic:settings#command-line).
- **Objektfangmenu.** Højreklik på {{ui:Fang}} i statuslinjen, eller skriv {{cmd:OSNAP}}.
- **Fang til gitter.** Knappen {{ui:Gitterfang}} i statuslinjen, eller {{key:F9}}: valgte punkter går til det nærmeste gitterpunkt, når ingen objektfang tog punktet.
- **Bue på ti måder, og Fortsæt.** {{ui:Bue}} på værktøjslinjen {{ui:Tegn}} eller {{cmd:ARC}}: 3-punkt, Start/Centrum/Slut-familien og Centrum/Start/Slut-familien, og Fortsæt (tryk {{key:Enter}} ved startpunktet) fra den sidste linje, bue eller polylinje.
- **Dokumentpanelet.** {{cmd:DOCUMENTS}} (`DOCS`) eller {{ui:Dokumenter…}} i menuen {{ui:Mere}} i gruppen {{ui:Visning}}: revision, tilstand og check-ud for hver tegning i en projektmappe. Det åbner som en centreret dialog. Se [Dokumenter](topic:documents).

### Filer

- **Britiske stålstørrelser.** 976 profiler i panelet Standard, skrevet som på tegninger (for eksempel `305x165x40 UB`).
- **Sydafrikanske pakker** (tegnepraksis og byggeregler) som pakker i add-on'en Byggeregler. Tallene er ikke verificeret.
- **Add-ons til CadCraft,** tilføjet efter behov og slået fra som standard: design af indendørs belysning, chipdesign (HDL til layout), routerudskæring, kredsløbssimulering, rullekædetandhjul og landepakker til Byggeregler.

## Rettet

- Flytning, rotation eller skalering af en skravering efterlod dens mønster.
- {{cmd:GRIDMOVE}} tog en hel plan-væg med, der kun starter på gitterlinjen. En væg bedømmes nu ud fra sine ender.
- Gitteret blev kun vist inden for tegningsgrænserne, selv med grænser slået fra.
- Blokkelisten i sidepanelet ruller, og et navn, der ikke er en blok, lister de blokke, der begynder med det (»Mente du«).
- DXF R12-filer, som AutoCAD afviste (»Unknown group 1001 for table«), åbner nu der.
- Meget store filer (ca. 70,000 elementer og op) fejlede med »Maximum call stack size exceeded«.
- DWG-filer fra AutoCAD 2018 og senere med en høj vedligeholdelsesversion fejlede med »bad BITLONG code 11«.
- I afsnitstekstboksen beholder en ny størrelse, skrevet for en valgt del, markeringen.

## I alle apps

Bootstrap-værktøjstips på hver kontrol med et hint, et startstip du kan lukke, fanelinjer der ruller, når de ikke passer, og en browserfanetitel, der følger den åbne tegning (`<drawing> - CadCraft | CadCraft`). {{ui:Indstillinger}} › {{ui:Layout}} er nu en rullemenu med to-linjers valg. Sprogmenuen i {{ui:Indstillinger}} er længere end i 0.8. Live-samredigering, biblioteks-samlinger og vægt- og temperaturenheder beskrives i Studio-noterne.

## Ærlige begrænsninger

- Afsnitstekst har ingen punkt- eller nummererede lister, tabulatorlineal eller justering. Udskrevne PDF'er sætter tekst i Helvetica.
- Plan-vægge er lige, så en bue tegnes som korte vægge. Det fælles håndtjek af vægværktøjet er endnu ikke gjort.
- Lag-grupper skrives ikke i AutoCADs eget format, så AutoCAD viser en flad liste. Andre programmer viser alle etager sammen, medmindre du kører {{cmd:FLOORLAYERS}}.
- Dokumentpanelet er ikke prøvet af to personer på en rigtig delt mappe. Routerudskæring er kørt på ingen rigtig maskine. Belysningsestimatet er tjekket mod en fotonsporing, ikke et andet program. Ingeniør-add-ons er kontrolværktøjer, ikke en erstatning for en ingeniørs gennemgang.
- Andre sprog end engelsk er maskinoversættelser, og nogle af de nye ord findes kun på engelsk.

## Tidligere: 0.8 og 0.8.1

Dette er, hvad der ændrede sig i CadCraft 0.8 og 0.8.1, sammenlignet med 0.7. 0.8 (1. november 2026) tilføjer tegnehjælpere, der arbejder ud fra din egen tegning, ved regler på din computer og uden model, og 0.8.1 (2. november 2026) retter fejl, der er rapporteret efter den.

### Nyt

**En tegning, der fuldender din tanke**

- **Et spøgelse viser, hvad der kommer næst.** Uden en kommando kørende viser et grå stiplet spøgelse, hvad din tegnings egne mønstre siger, kommer næste: den næste stolpe i samme afstand, næste trin i en trappe, den manglende væg i et rum. Tryk {{key:Tab}} for at tegne det som ét fortrydelsestrin, eller {{key:Esc}} for at afvise det. Det kigger kun på de nyeste objekter, så det forbliver glat i en stor tegning. Slå det fra i {{ui:Indstillinger}} › {{ui:CadCraft}} eller med {{cmd:AUTOCOMPLETE}} `Off`.
- **Det næste punkt, mens du tegner en linje.** Midt i {{cmd:LINE}} eller {{cmd:PLINE}} er spøgelset det **næste punkt**: næste trin i en trappe, det fjerde hjørne i et rektangel, eller punktet der lukker det. Før markøren tæt på det og tryk {{key:Tab}}, som om du havde klikket der; fortsæt, eller tryk Enter.
- **Pennetegninger bliver til præcis geometri.** {{cmd:SKETCHFIX}}: tegn ru streger med en pen, mus eller finger, og hver bliver til en ren linje, cirkel, bue, rektangel eller polylinje, fanget til det, der allerede er tegnet. Se [Skitsér med en pen og få præcis geometri](topic:sketch-with-a-pen).
- **Et foto af en skitse bliver til en tegning.** {{cmd:PHOTOSKETCH}} (`PSK`) finder papiret i et foto, retter perspektivet, anvender den papirstørrelse og skala, du angiver, og tegner pennelinjerne over på et lag for hver pennefarve. Skrift tegnes ikke over.
- **Målsæt efter regler.** {{cmd:AUTODIM}} (`ADIM`) laver kæder af målsætninger langs de sider, du vælger, en samlet størrelse, åbningsbredder, hul-diametre og, med `Grid`, gitterafstand. Den gentager aldrig en målsætning, der allerede er der.
- **Flyt en gitterlinje, og sættet følger med.** {{cmd:GRIDMOVE}} (`GM`): vægge der ender på gitterlinjen strækkes med den, vægge langs den, søjler, dens boble og mærke flytter sig, og målsætninger på den måler den nye afstand. Ét fortrydelsestrin.

**Ark, detaljer og mærker**

- **Ark, der lægger sig selv ud.** {{cmd:AUTOSHEET}} tager dine navngivne visninger (eller de adskilte dele af modellen), vælger en papirstørrelse og en standardskala og placerer visningerne på nye ark med et tegningshoved og en billedtekst med navn og skala. Alt forbliver redigerbart. Se [Lad mig lægge ark ud](topic:lay-out-sheets-for-me).
- **Dit firmas detaljer, tilbudt mens du tegner.** {{cmd:DETAILS}} (`DET`) gemmer dine egne detaljeblokke. Når det, du vælger, matcher en af dem efter ordene på dens lag, blokke og noter, siger statuslinjen det; vælg den og placér den. {{cmd:DETAILS}} › Share lægger din liste i din Dokumenter-mappe og henter det, dit team har tilføjet. Indstillinger slår tilbuddene fra.
- **Mærker på blokke.** {{cmd:TAGS}} definerer et mærke (dets slags, de værdier det må have, de blokke det gælder), sætter det på de blokreferencer, du vælger, og lister dem som et skema, du kan gemme som CSV. Definitionerne gemmes i DWG'en. Se [Mærker](topic:tags).
- **Tegningsgrænser.** {{cmd:LIMITS}} angiver et rektangel for tegningen: gitteret udfylder det, og {{ui:Udstrækning}} viser det. Grænserne vises som en kontur og gemmes i DWG og DXF sammen med papirgrænserne. Se [Angiv tegningsgrænser](topic:drawing-limits).

**Arbejde med andre og andre programmer**

- **Gør en markup til en revision.** {{cmd:REDLINE}} læser pakken, MarkupCraft skriver, og lister hver ændring. Accepter eller afvis hver med en note; de accepterede får en revisionssky og en revisionslog i ét fortrydelsestrin, og du gemmer svarfilen, der lukker markupperne i MarkupCraft. Se [Gør en markup til en revision](topic:redline-to-revision).
- **Tegninger, som git og Fossil kan flette.** Med {{ui:Filer der kan flettes}} slået til i {{ui:Indstillinger}} › {{ui:CadCraft}} får hvert objekt en nøgle, der aldrig ændrer sig (filerne er ca. 10 procent større). `cadcraft merge base ours theirs` flettes to personers ændringer af én DWG eller DXF objekt for objekt og rapporterer kun, hvor to personer har ændret det samme. Se [Flet to personers ændringer af én tegning](topic:merge-drawings).
- **Hvad der er ændret, med ord.** I Historik giver Sammenlign en almindelig liste: hvor ting ændrede sig, hvor store stederne er, hvad der blev tilføjet, fjernet eller ændret, og teksten der blev redigeret. Se [Sig med ord, hvad der ændrede sig](topic:changes-in-words).
- **Pejlinger og vinkler.** Skriv en retning som en landmålers pejling, såsom N45°23'30"E, eller i grader, minutter og sekunder, hvor som helst en vinkel spørges efter; AUNITS angiver, hvordan vinkler vises. Se [Skriv og vis pejlinger og vinkler](topic:bearings-and-angles).
- **Dine egne SHX-skrifttyper.** Giv CadCraft en mappe med SHX-skrifttyper, og tekststile, der nævner dem, tegnes med dem, på skærmen og i plots. Se [Tegn tekst i dine egne SHX-skrifttyper](topic:shx-fonts).
- **Et diagram ud fra tekst.** {{cmd:DIAGRAM}} læser et Mermaid-flowdiagram, et PlantUML-komponentdiagram, D2 eller en fra-til-liste og tegner blokke og forbindelser, du kan redigere. Se [Tegn et diagram ud fra tekst](topic:text-to-diagram).
- **OLE-objekter i en DWG.** {{cmd:OLELIST}} lister de OLE-objekter, en DWG bærer, som CadCraft ikke selv kan placere, og placerer en kopi af et billede, hvor du siger til. Se [Billeder](topic:pictures#objects-from-other-programs-ole).
- **Dine beregninger bliver hos tegningen.** Beregningsark og designbegrundelser gemmes i DWG'en sammen med klassetabellen.

**Tegning uden syn**

- Slå {{ui:Tegning uden syn}} til i {{ui:Indstillinger}} (eller skriv {{cmd:ACCESS}} og svar `On`). CadCraft læser hver kommando og hvert resultat op via din skærmlæser, beskriver tegningen og det, der er nær markøren, lader dig flytte markøren og vælge punkter med tastaturet og afspiller en lyd for hvert fang og hvert greb. Hvor din browser kan genkende tale på din computer, kan kommandoer siges. Se [Tegn uden syn](topic:draft-without-sight).

**I alle apps**

- **Sprog.** 54 sprog; ti er nye (litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili, usbekisk). Sprog ud over engelsk er maskinoversættelser, indtil en indfødt taler har læst dem.
- **Inputenheder.** Trackpad, pen, 3D-mus, spilkontroller og MIDI-kontroller.
- **Værktøjslinjerækker og egenskabsgitteret.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Værktøjslinjens rækker}} tilbyder Pak, 2 rækker eller 1 række i de andre apps. CadCraft har sin egen indstilling i {{ui:Indstillinger}} › {{ui:CadCraft}} (se [Værktøjslinjens rækker](topic:settings#toolbar-rows)). Det fælles egenskabsgitter findes i tre andre apps, ikke i CadCraft.
- **Problemer, Live og add-ons.** Et fælles panel Problemer, der advarer i hver app, en Live-visning af hvem der er hvor i CadCraft Studio (se [Arbejd på én tegning sammen](topic:work-live)), og en liste over add-ons.
- **Forbind din AI.** Én forbindelse fra CadCraft Studio til alle otte apps, med et skrivebeskyttet-, forslag- eller redigeringsniveau pr. app og en log i almindelige ord over, hvad assistenten gjorde. CadCraft har ingen egen AI, og Spørg i alle apps bruger den AI, du forbinder.

### Rettet i 0.8.1

- **Egenskaber viste 150 i stedet for 12'-6"** i tegninger i fod og tommer. Felter, som appen selv læser, beholder deres tekst igen.
- **DWG-filer, hvis klasse-sektion blev læst som den forkerte type** (GitHub cadcraft#5), åbner nu korrekt.
- **Markørkorset vises ikke længere bag pop-ups.**
- **Studio og de pakkede udgaver kan skifte sprog under kørsel.** Før var de kun engelske. Ikke testet på alle platforme endnu: sig til, hvis sproget ikke skifter.
- **Tablets i portræt** giver ekstra gitterhøjde til lærredet, og arkdelen starter ved 760 px eller mindre.
- **STRETCH med et krydsvindue og LIMITS** blev rapporteret på Studio 0.8.0 og var allerede rigtige i 0.8-webbuilden; rapportørens installer var ældre. Studio 0.8.1 har dem med.

### Ikke i denne version endnu

- **0.8 og 0.8.1 er ikke kodesignerede.** Windows kan advare (vælg {{ui:Mere info}}, og derefter {{ui:Kør alligevel}}); på en Mac: højreklik på CadCraft Studio og vælg {{ui:Åbn}}. Butiksbuilds er sat på pause, og iPad- og iPhone-buildet blev ikke genbygget til 0.8.1.
- **Pennetegninger og skitsefotos** er kun prøvet på opdigtede fotos og en mus, ikke endnu med en rigtig pen, touchskærm eller en håndtegning på papir.
- **Tegning uden syn** er testet med automatiske kontroller, ikke endnu med en skærmlæser eller en blind tester.
- **Deling af detaljer** har ikke haft et tjek med to personer, og en Team Cloud Plan-mappe som Dokumenter-mappe er ikke bygget.
- **Fletning** virker for CadCrafts DWG- og DXF-filer; det samme for de andre apps' filer er ikke bygget.
- **Fortryd på tværs af vinduer:** CadCraft rapporterer hvert afsluttet trin, men Studio har endnu ingen samlet Fortryd for alle apps; hver app fortryder sine egne trin.
- **En DWG's OLE-objekter** bevares, men tegnes ikke på deres plads.
- **Læsning af plotstiltabeller (CTB-filer)** fra andre programmer er bygget, men ikke tjekket mod en fil fra et andet program.
- **Forbind din AI:** ét-klik-forbindelse i Studio, den hostede connector til browser-AI, din egen API-nøgle i Studio og den offentliggjorte MCP-pakke er ikke lovet i denne udgivelse.

For versionen før denne, se [Nyt i 0.7](topic:whats-new-0-7).
