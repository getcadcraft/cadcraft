---
title: Nyt i 0.9
summary: Skravering, der følger sin afgrænsning, lagegrupper, stablede etager, 2D-smarte vægge med døre og vinduer, tekststile og en formateret teksteditor, en flydende kommandolinje, fang til gitter, ti måder at tegne en bue og Dokumentpanelet.
keywords: nyt, 0.9, udgivelsesnoter, ændringslog, skravering, associativ skravering, hatchedit, pat-fil, mønsterfil, lagegrupper, laygroup, etager, stablede etager, floorlayers, smarte vægge, væg, dør, vindue, vægværktøjer, tekststil, stil, mtext-editor, afsnitstekst, formatering, flydende kommandolinje, kommandolinje, topområde, kompakt, fang til gitter, gitterfang, f9, bue, dokumentpanel, tjek ud, uk-stålstørrelser, draw.io, thai-tekst, dxf r12, hvad er nyt, udgivelsesnoter, ændringer, 0.8, 0.8.1, version, nye funktioner, autocomplete, spøgelse, tab, sketchfix, photosketch, autosheet, detaljer, gridmove, autodim, tags, redline, merge, git, fossil, adgang, tegning uden syn, skærmlæser, grænser, retninger, aunits, shx, diagram, ole, historik, sammenlign, med ord, egenskaber, fod og tommer, stræk, sprog, inputenheder, problemer, live, assistenter
from: 8b6dea0b
---

Dette er, hvad der ændrede sig i CadCraft 0.9 i forhold til 0.8.1. CadCraft er 2D- og 3D-tegneprogrammet i CadCraft Studio 0.9 og dets otte programmer. 0.9 færdiggør plantegningstegning, tilføjer tekststile og en rigtig teksteditor og giver dig mere plads på skærmen.

## Nyt

### Plantegningstegning

- **Skravering, der følger sin afgrænsning.** {{cmd:HATCH}} knytter sig til det, der afgrænser den. Flyt, roter eller skalér afgrænsningen, og skraveringen og dens mønster følger med; ændrer du dens form, beregnes skraveringen igen. {{cmd:HATCHEDIT}} (`HE`) ændrer en skravering bagefter og opretter eller afslutter forbindelsen. Se [Skravering og udfyldningsområder](topic:hatch).
- **Mønsterfiler til skravering.** Ved {{cmd:HATCH}}-spørgsmålet `Angiv indre punkt` skriver du `F` (Mønsterfil) og vælger en `.pat`-fil. Kun filer skrevet i det sædvanlige format er prøvet.
- **Lagegrupper.** I {{ui:Værktøjer}} i panelet {{ui:Lag}}: {{ui:Ny gruppe}}, {{ui:Tilføj færdige grupper}}, {{ui:Gruppér efter navn}} og {{ui:Find et lag}}; eller skriv {{cmd:LAYGROUP}} (`LG`). Se [Organisér en tegning med lag](topic:layers#group-layers).
- **Stablede etager.** {{cmd:FLOORS}} (`FLR`), eller {{ui:Etager…}} i menuen {{ui:Mere}} i gruppen {{ui:Visning}}. Et viewport på et ark kan vise én etage under {{ui:Viste etage}} i Egenskaber. {{cmd:FLOORLAYERS}} gør etager til lag for en fil, der skal til en anden. Se [Stabl etager i én tegning](topic:floors).
- **2D-smarte vægge, døre og vinduer.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) og {{cmd:DELOPENING}}. Hjørner, T-sammenføjninger og krydsninger beregnes for dig. Vægge gemmer en registrering af, hvordan de sammenføjes, og Egenskaber får {{ui:Tillad ikke sammenføjning ved start}} / {{ui:Tillad ikke sammenføjning ved slut}}, en {{ui:Placeringslinje}} og en redigerbar {{ui:Længde}}. Se [Tegn smarte vægge, døre og vinduer i 2D](topic:walls-2d).
- **Vægværktøjerne på plan-vægge.** Skriv {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} og resten. De har endnu ingen værktøjslinjeknapper. Se [Vægformer, klip, forskydninger og låse til 2D-vægge](topic:wall-tools-2d).

### Tekst

- **Tekststile.** {{cmd:STYLE}} (`ST`), eller {{ui:Tekststil}} på værktøjslinjen {{ui:Tegn}}: navngivne stile med en skrifttype, højde, breddefaktor og skråhed. Se [Angiv skrifttype og størrelse for tekst med tekststile](topic:text-styles).
- **En formateret afsnitstekst-editor.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} eller et dobbeltklik på tekst åbner en boks med skrifttype, størrelse, fed, kursiv, understreget, gennemstreget, farve, justering og gradtegn, plus-minus- og diametertegn samt {{ui:OK}} og {{ui:Annuller}}. Se [Formatér afsnitstekst](topic:format-paragraph-text).
- **Et diagram fra draw.io-XML.** {{cmd:DIAGRAM}} (`T2D`) læser også indsat draw.io-XML. Se [Tegn et diagram ud fra tekst](topic:text-to-diagram).
- **Thai-tekst i et PDF-plot.** Den blev tidligere udskrevet som spørgsmålstegn.

### Mere plads og tegnehjælpemidler

- **En flydende, tyndere kommandolinje og et kompakt topområde.** Træk i kommandolinjens greb for at gøre den flydende, træk i dens øverste kant for færre linjer, {{key:F2}} åbner historikken. {{ui:Indstillinger}} › {{ui:CadCraft}} › {{ui:Kommandolinje}} og valgene for topområdet har de samme indstillinger. Se [Indstillinger](topic:settings#command-line).
- **Menu for objektfang.** Højreklik på {{ui:Fang}} i statuslinjen, eller skriv {{cmd:OSNAP}}.
- **Fang til gitter.** Knappen {{ui:Gitterfang}} i statuslinjen, eller {{key:F9}}: valgte punkter går til det nærmeste gitterpunkt, når ingen objektfang har taget punktet.
- **Bue på ti måder, og Fortsæt.** {{ui:Bue}} på værktøjslinjen {{ui:Tegn}} eller {{cmd:ARC}}: 3 punkter, familien Start/Center/End og familien Center/Start/End, og Fortsæt (tryk {{key:Enter}} i startpunktet) fra den sidste linje, bue eller polylinje.
- **Dokumentpanelet.** {{cmd:DOCUMENTS}} (`DOCS`) eller {{ui:Dokumenter…}} i menuen {{ui:Mere}} i gruppen {{ui:Visning}}: revision, tilstand og tjek ud for hver tegning i en projektmappe. Det åbnes som en centreret dialogboks. Se [Dokumenter](topic:documents).

### Filer

- **UK-stålstørrelser.** 976 profiler i panelet Standard, skrevet, som de står på tegninger (for eksempel `305x165x40 UB`).
- **Sydafrikanske pakker** (tegnepraksis og byggeforskrifter) som pakker i add-on'et Byggeforskrifter. Tallene er ikke verificerede.
- **Add-ons til CadCraft,** tilføjet efter behov og slået fra som standard: design af indendørsbelysning, chipdesign (HDL til layout), fræsning med router, kredsløbssimulering, kædehjul til rullekæder og landepakker med byggeforskrifter.

## Rettet

- Flytning, rotation eller skalering af en skravering efterlod mønsteret tilbage.
- {{cmd:GRIDMOVE}} flyttede en hel plan-væg, der kun starter på gitterlinjen. En væg bedømmes nu ud fra sine ender.
- Gitteret blev kun vist inden for tegningsgrænserne, selv når grænserne var slået fra.
- Blokslisten i sidepanelet kan rulles, og et navn, der ikke er en blok, viser de blokke, der starter med det (»Mente du«).
- DXF R12-filer, som AutoCAD afviste ("Unknown group 1001 for table"), åbnes nu dér.
- Meget store filer (ca. 70.000 objekter og derover) kunne ikke åbnes med fejlen "Maximum call stack size exceeded".
- DWG-filer fra AutoCAD 2018 og nyere med en høj vedligeholdelsesversion kunne ikke åbnes med fejlen "bad BITLONG code 11".
- I afsnitstekstboksen beholder en ny størrelse, der skrives for en valgt del, valget.

## I alle programmer

Bootstrap-værktøjstips på hver kontrol med et hint, et startstip, du kan lukke, faneborde, der kan rulles, når de ikke passer, og en browserfanetitel, der følger den åbne tegning (`<drawing> - CadCraft | CadCraft`). {{ui:Indstillinger}} › {{ui:Layout}} er nu en rullemenu med tolinjede valg. Sprogmenuen i {{ui:Indstillinger}} er længere end i 0.8. Live-samredigering, bibliotekssamlinger samt vægt- og temperaturenheder beskrives i Studio-noterne.

## Ærlige begrænsninger

- Afsnitstekst har ingen punkt- eller nummerlister, tabulatorlineal eller justering. Plottede PDF'er sætter tekst i Helvetica.
- Plan-vægge er lige, så en bue tegnes som korte vægge. Fællesskabets håndkontrol af vægværktøjet er endnu ikke gennemført.
- Lagegrupper skrives ikke i AutoCADs eget format, så AutoCAD viser en flad liste. Andre programmer viser alle etager samlet, medmindre du kører {{cmd:FLOORLAYERS}}.
- Dokumentpanelet er ikke prøvet af to personer på en rigtig delt mappe. Fræsning med router er ikke kørt på nogen rigtig maskine. Belysningsoverslaget er kontrolleret mod en fotonsporing, ikke mod et andet program. Ingeniør-add-ons er kontrolhjælpemidler, ikke en erstatning for en ingeniørs gennemgang.
- Sprog ud over engelsk er maskinudkast, og nogle af de nye ord er kun på engelsk.

## Tidligere: 0.8 og 0.8.1

Dette er, hvad der ændrede sig i CadCraft 0.8 og 0.8.1 i forhold til 0.7. 0.8 (1. november 2026) tilføjer tegnehjælpemidler, der arbejder ud fra din egen tegning, efter regler på din computer og uden model, og 0.8.1 (2. november 2026) retter fejl, der blev rapporteret efter den.

### Nyt

**En tegning, der fuldfører din tanke**

- **Et spøgelse viser, hvad der kommer næst.** Når ingen kommando kører, viser et gråt, stiplet spøgelse, hvad din tegnings egne mønstre siger kommer næst: den næste stolpe med samme afstand, det næste trin i en trappe, den manglende væg i et rum. Tryk {{key:Tab}} for at tegne det som ét fortrydelsestrin, eller {{key:Esc}} for at afvise det. Det kigger kun på de nyeste objekter, så det forbliver glat på en stor tegning. Slå det fra i {{ui:Indstillinger}} › {{ui:CadCraft}} eller med {{cmd:AUTOCOMPLETE}} `Off`.
- **Det næste punkt, mens du tegner en linje.** Midt i {{cmd:LINE}} eller {{cmd:PLINE}} er spøgelset det næste punkt: det næste trin i en trappe, det fjerde hjørne i et rektangel eller det punkt, der lukker det. Før markøren hen til det, og tryk {{key:Tab}}, som om du havde klikket dér.
- **Pennskitser bliver til præcis geometri.** {{cmd:SKETCHFIX}}: tegn grove streger med en pen, mus eller finger, og hver bliver til en ren linje, cirkel, bue, rektangel eller polylinje, fanget til det, der allerede er tegnet. Se [Skitsér med en pen og få præcis geometri](topic:sketch-with-a-pen).
- **Et foto af en skitse bliver til en tegning.** {{cmd:PHOTOSKETCH}} (`PSK`) finder papiret på et foto, retter perspektivet, anvender papirstørrelsen og målestoksforholdet, du angiver, og sporer pennens streger over på et lag for hver pennefarve. Skrift sporres ikke.
- **Målsæt efter regler.** {{cmd:AUTODIM}} (`ADIM`) laver kæder af målsætninger langs de sider, du vælger, en samlet størrelse, åbningsbredder, hul-diametre og med `Grid` gitterafstande. Den gentager aldrig en målsætning, der allerede er der.
- **Flyt en gitterlinje, og sættet følger med.** {{cmd:GRIDMOVE}} (`GM`): vægge, der ender på gitterlinjen, strækkes med den, vægge langs den, søjler, dens bobler og etiket flytter sig, og målsætninger på den måler den nye afstand. Ét fortrydelsestrin.

**Ark, detaljer og tags**

- **Ark, der lægger sig selv ud.** {{cmd:AUTOSHEET}} tager dine navngivne visninger (eller de adskilte dele af modellen), vælger en papirstørrelse og en standardmålestok og placerer visningerne på nye ark med et tegningshoved og en billedtekst med navn og målestok. Alt forbliver redigerbart. Se [Lad mig lægge ark ud](topic:lay-out-sheets-for-me).
- **Dit firmas detaljer, tilbudt mens du tegner.** {{cmd:DETAILS}} (`DET`) gemmer dine egne detaljeblokke. Når det, du vælger, svarer til en af dem ud fra ordene på dens lag, blokninavne og noter, siger statuslinjen det; vælg den og placér den. {{cmd:DETAILS}} › Del lægger din liste i din Dokumenter-mappe og henter det, dit team har tilføjet. Indstillinger slår tilbuddene fra.
- **Tags på blokke.** {{cmd:TAGS}} definerer en tag (dens type, de værdier den må have, de blokke den gælder for), sætter den på de blokreferencer, du vælger, og lister dem som en oversigt, du kan gemme som CSV. Definitionerne gemmes i DWG'en. Se [Tags](topic:tags).
- **Tegningsgrænser.** {{cmd:LIMITS}} angiver et rektangel for tegningen: gitteret fylder det, og zoom til alt viser det. Grænserne vises som en kontur og gemmes i DWG og DXF sammen med papirgrænserne. Se [Angiv tegningsgrænser](topic:drawing-limits).

**At arbejde sammen med andre og med andre programmer**

- **Lav en markering om til en revision.** {{cmd:REDLINE}} læser den pakke, MarkupCraft skriver, og lister hver ændring. Accepter eller afvis hver med en note; de accepterede får en revisionssky og en revisionslog i ét fortrydelsestrin, og du gemmer svarfilen, der lukker markeringerne i MarkupCraft. Se [Lav en markering om til en revision](topic:redline-to-revision).
- **Tegninger, som git og Fossil kan flette.** Med {{ui:Filer der kan flettes}} slået til under {{ui:Indstillinger}} › {{ui:CadCraft}} får hvert objekt en nøgle, der aldrig ændres (filerne er ca. 10 procent større). `cadcraft merge base ours theirs` flettes derefter to personers redigeringer af ét DWG- eller DXF-objekt objekt for objekt og rapporterer kun, hvor to personer har ændret det samme. Se [Flet to personers redigeringer af én tegning](topic:merge-drawings).
- **Hvad der ændrede sig, med ord.** I Historik giver Sammenlign en klar liste: hvor ting ændrede sig, hvor store stederne er, hvad der blev tilføjet, fjernet eller ændret, og den tekst, der blev redigeret. Se [Sig med ord, hvad der ændrede sig](topic:changes-in-words).
- **Retninger og vinkler.** Skriv en retning som en landmålers retning, for eksempel N45°23'30"E, eller i grader, minutter og sekunder, hvor som helst en vinkel spørges om; AUNITS angiver, hvordan vinkler vises. Se [Skriv og vis retninger og vinkler](topic:bearings-and-angles).
- **Dine egne SHX-skrifttyper.** Giv CadCraft en mappe med SHX-skrifttyper, og tekststile, der navngiver dem, tegnes med dem, på skærmen og i plot. Se [Tegn tekst i dine egne SHX-skrifttyper](topic:shx-fonts).
- **Et diagram ud fra tekst.** {{cmd:DIAGRAM}} læser et Mermaid-flowdiagram, et PlantUML-komponentdiagram, D2 eller en fra-til-liste og tegner blokke og forbindelser, du kan redigere. Se [Tegn et diagram ud fra tekst](topic:text-to-diagram).
- **OLE-objekter i en DWG.** {{cmd:OLELIST}} lister de OLE-objekter, en DWG bærer, som CadCraft ikke selv kan placere, og placerer en kopi af et billede dér, du angiver. Se [Billeder](topic:pictures#objects-from-other-programs-ole).
- **Dine beregninger bliver hos tegningen.** Beregningsark og designbegrundelser gemmes i DWG'en sammen med klassetabellen.

**Tegning uden syn**

- Slå {{ui:Tegning uden syn}} til i {{ui:Indstillinger}} (eller skriv {{cmd:ACCESS}} og svar `On`). CadCraft oplæser hver kommando og hvert resultat via din skærmlæser, beskriver tegningen og det, der er nær markøren, lader dig flytte markøren og vælge punkter med tastaturet og afspiller en lyd for hvert fang og greb. Hvor din browser kan genkende tale på din computer, kan kommandoer siges. Se [Tegn uden syn](topic:draft-without-sight).

**I alle programmer**

- **Sprog.** 54 sprog; ti er nye (litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili, usbekisk). Sprog ud over engelsk er maskinudkast, indtil en modersmålstaler har læst dem.
- **Inputenheder.** Trackpad, pen, 3D-mus, spilcontroller og MIDI-kontrolelementer.
- **Værktøjslinjens rækker og egenskabsgitteret.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Værktøjslinjens rækker}} tilbyder Ombryd, 2 rækker eller 1 række i de andre programmer. CadCraft beholder sin egen indstilling i {{ui:Indstillinger}} › {{ui:CadCraft}} (se [Værktøjslinjens rækker](topic:settings#toolbar-rows)). Det fælles egenskabsgitter findes i tre andre programmer, ikke i CadCraft.
- **Problemer, Live og add-ons.** Et fælles panel med problemer, der advarer i alle programmer, en Live-visning af, hvem der er hvor i CadCraft Studio (se [Arbejd sammen om én tegning](topic:work-live)), og en liste over add-ons.
- **Forbind din AI.** Én forbindelse fra CadCraft Studio til alle otte programmer, med et niveau pr. program, der er skrivebeskyttet, foreslår eller redigerer, og en log i almindelige ord over, hvad assistenten gjorde. CadCraft har ingen AI af sig selv, og Spørg i alle programmer bruger den AI, du forbinder.

### Rettet i 0.8.1

- **Egenskaber viste 150 i stedet for 12'-6"** i tegninger i fod og tommer. Felter, som programmet selv læser, beholder deres tekst igen.
- **DWG-filer, hvis klasseafsnit blev læst som den forkerte type** (GitHub cadcraft#5), åbnes nu korrekt.
- **Krydsmarkøren vises ikke længere bag pop-op-vinduer.**
- **Studio og de pakkede udgaver kan skifte sprog, mens de kører.** Før var de kun på engelsk. Endnu ikke testet på alle platforme: giv os besked, hvis sproget ikke skifter.
- **Tablets i stående retning** giver ekstra gitterhøjde til lærredet, og arktilstanden starter ved 760 px eller mindre.
- **STRETCH med et krydsende vindue og LIMITS** blev rapporteret i Studio 0.8.0 og var allerede korrekte i 0.8-webbygningen; rapportørens installationsprogram var ældre. Studio 0.8.1 indeholder dem.

### Ikke i denne version endnu

- **0.8 og 0.8.1 er ikke kodesigneret.** Windows kan advare (vælg {{ui:Flere oplysninger}}, og derefter {{ui:Kør alligevel}}); på en Mac skal du højreklikke på CadCraft Studio og vælge {{ui:Åbn}}. Butiksudgivelser er sat på pause, og iPad- og iPhone-versionen blev ikke genbygget til 0.8.1.
- **Pennskitser og fotos af skitser** er kun prøvet på opdigtede fotos og med en mus, endnu ikke med en rigtig pen, touchskærm eller håndtegnet skitse på papir.
- **Tegning uden syn** er testet med automatiske kontroller, endnu ikke med en skærmlæser eller en blind testperson.
- **Deling af detaljer** er ikke kontrolleret af to personer, og en Team Cloud Plan-mappe som Dokumenter-mappe er ikke lavet.
- **Flettning** virker for CadCrafts DWG- og DXF-filer; det samme for de andre programmers filer er ikke lavet.
- **Fortryd på tværs af vinduer:** CadCraft rapporterer hvert afsluttet trin, men Studio har endnu ingen samlet Fortryd for alle programmer; hvert program fortryder sine egne trin.
- **En DWG's OLE-objekter** bevares, men tegnes ikke på deres plads.
- **Læsning af plottestiltabeller (CTB-filer)** fra andre programmer er bygget, men er ikke kontrolleret mod en fil fra et andet program.
- **Forbind din AI:** forbindelse med ét klik i Studio, den hostede forbindelse til browser-AI, din egen API-nøgle i Studio og den udgivne MCP-pakke er ikke lovet i denne udgivelse.

For den version før denne, se [Nyt i 0.7](topic:whats-new-0-7).
