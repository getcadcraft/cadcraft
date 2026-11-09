---
title: Nyheder i 0.8 og 0.8.1
summary: Et spøgelse der færdiggør din tegning, pennetegninger og fotos af skitser omdannet til geometri, ark der selv opsætter sig, detaljer tilbudt mens du tegner, GRIDMOVE og AUTODIM, tags, filer der kan sammenflettes, markeringer omdannet til revisioner, tegning uden syn, tegningsgrænser, pejlinger, SHX-skrifttyper, diagrammer ud fra tekst og rettelser i 0.8.1.
keywords: hvad er nyt, nyheder, udgivelsesnoter, changelog, ændringer, 0.8, 0.8.1, version, nye funktioner, autofuldførelse, spøgelse, tab, sketchfix, photosketch, autosheet, detaljer, gridmove, autodim, tags, redline, sammenflet, git, fossil, adgang, tegning uden syn, skærmlæser, grænser, pejlinger, aunits, shx, diagram, ole, historik, sammenlign, med ord, egenskaber, fod og tommer, stræk, sprog, inputenheder, problemer, live, assistenter
from: 9dd82db5
---

Dette er hvad der er ændret i CadCraft 0.8 og 0.8.1 i forhold til 0.7. 0.8 (1. november 2026) tilføjer tegnehjælpere, der arbejder ud fra din egen tegning, efter regler på din computer og uden model, og 0.8.1 (2. november 2026) retter fejl, der blev rapporteret efter den.

## Nyt

### Tegning der færdiggør din tanke

- **Et spøgelse viser, hvad der kommer næste.** Når ingen kommando kører, viser et grå stiplet spøgelse, hvad din tegnings egne mønstre siger kommer næst: den næste stolpe med samme afstand, næste trin i en trappe, den manglende væg i et rum. Tryk {{key:Tab}} for at tegne det som ét fortryd-trin, eller {{key:Esc}} for at skjule det. Det kigger kun på de nyeste objekter, så det forbliver jævnt på en stor tegning. Slå det fra i {{ui:Indstillinger}} › {{ui:CadCraft}} eller med {{cmd:AUTOCOMPLETE}} `Off`.
- **Det næste punkt, mens du tegner en linje.** Midt i {{cmd:LINE}} eller {{cmd:PLINE}} er spøgelset det næste punkt: næste trin i en trappe, det fjerde hjørne i et rektangel eller det punkt, der lukker det. Før markøren hen i nærheden og tryk {{key:Tab}}, som om du havde klikket der.
- **Pennetegninger bliver til præcis geometri.** {{cmd:SKETCHFIX}}: tegn grove streger med en pen, mus eller finger, og hver enkelt bliver til en ren linje, cirkel, bue, rektangel eller polylinje, fastgjort til det, der allerede er tegnet. Se [Skitsér med en pen og få præcis geometri](topic:sketch-with-a-pen).
- **Et foto af en skitse bliver til en tegning.** {{cmd:PHOTOSKETCH}} (`PSK`) finder papiret på et foto, retter perspektivet, anvender det papirformat og den målestok, du angiver, og optegner pennestregerne på et lag for hver pennefarve. Håndskrevet tekst optegnes ikke.
- **Målsæt efter regler.** {{cmd:AUTODIM}} (`ADIM`) laver kæder af målsætninger langs de sider, du vælger, et samlet mål, åbningsbredder, hulldiametre og med `Grid` gitterafstande. Den gentager aldrig en målsætning, der allerede findes.
- **Flyt en gitterlinje, og sættet følger med.** {{cmd:GRIDMOVE}} (`GM`): vægge, der ender på gitterlinjen, strækker sig med den, vægge langs den, søjler, cirklen og dens tag flytter sig, og målsætninger på den måler den nye afstand. Ét fortryd-trin.

### Ark, detaljer og tags

- **Ark der selv opsætter sig.** {{cmd:AUTOSHEET}} tager dine navngivne visninger (eller modellens enkelte dele), vælger et papirformat og en standardmålestok og placerer visningerne på nye ark med et tegningshoved og en billedtekst med navn og målestok. Alt forbliver redigerbart. Se [Opsæt ark for mig](topic:lay-out-sheets-for-me).
- **Din virksomheds detaljer, tilbudt mens du tegner.** {{cmd:DETAILS}} (`DET`) gemmer dine egne detaljeblokke. Når det, du vælger, svarer til en af dem ud fra ordene på dens lag, bloknavne og noter, siger statuslinjen det; vælg den og placér den. {{cmd:DETAILS}} › Del lægger din liste i din Dokumenter-mappe og henter det, dit team har tilføjet. Indstillinger slår tilbuddene fra.
- **Tags på blokke.** {{cmd:TAGS}} definerer et tag (dets art, de værdier det må have, de blokke det gælder for), sætter det på de blokreferencer, du vælger, og lister dem som en liste, du kan gemme som CSV. Definitionerne gemmes i DWG-filen. Se [Tags](topic:tags).
- **Tegningsgrænser.** {{cmd:LIMITS}} angiver et rektangel for tegningen: gitteret udfylder det, og Zoom til alt viser det. Grænserne vises som en kontur og gemmes i DWG og DXF sammen med papirgrænserne. Se [Angiv tegningsgrænser](topic:drawing-limits).

### At arbejde sammen med andre og med andre programmer

- **Omdan en markering til en revision.** {{cmd:REDLINE}} læser pakken, som MarkupCraft skriver, og lister hver ændring. Accepter eller afvis hver med en note; de accepterede får en revisionssky og en revisionslog i ét fortryd-trin, og du gemmer svarfilen, der lukker markeringerne i MarkupCraft. Se [Omdan en markering til en revision](topic:redline-to-revision).
- **Tegninger som git og Fossil kan sammenflette.** Med {{ui:Filer der kan flettes}} slået til i {{ui:Indstillinger}} › {{ui:CadCraft}} får hvert objekt en nøgle, der aldrig ændrer sig (filerne er cirka 10 procent større). `cadcraft merge base ours theirs` sammenfletter derefter to personers redigeringer af ét DWG- eller DXF-objekt objekt for objekt og melder kun, hvor to personer har ændret det samme. Se [Sammenflet to personers redigeringer af én tegning](topic:merge-drawings).
- **Hvad der er ændret, med ord.** I {{ui:Historik}} giver Sammenlign en almindelig liste: hvor ting er ændret, hvor store stederne er, hvad der er tilføjet, fjernet eller ændret, og den tekst, der er redigeret. Se [Beskriv med ord, hvad der er ændret](topic:changes-in-words).
- **Retninger og vinkler.** Skriv en retning som en landmålerretning, fx N45°23'30"E, eller i grader, minutter og sekunder, overalt hvor en vinkel efterspørges; AUNITS angiver, hvordan vinkler vises. Se [Skriv og vis retninger og vinkler](topic:bearings-and-angles).
- **Dine egne SHX-skrifttyper.** Giv CadCraft en mappe med SHX-skrifttyper, og tekststile, der navngiver dem, tegnes i dem, både på skærmen og i plots. Se [Tegn tekst i dine egne SHX-skrifttyper](topic:shx-fonts).
- **Et diagram ud fra tekst.** {{cmd:DIAGRAM}} læser et Mermaid-flowdiagram, et PlantUML-komponentdiagram, D2 eller en fra-til-liste og tegner blokke og forbindelser, du kan redigere. Se [Tegn et diagram ud fra tekst](topic:text-to-diagram).
- **OLE-objekter i en DWG.** {{cmd:OLELIST}} lister de OLE-objekter, en DWG indeholder, som CadCraft ikke selv kan placere, og placerer en kopi af et billede, hvor du angiver. Se [Billeder](topic:pictures#objects-from-other-programs-ole).
- **Dine beregninger bliver hos tegningen.** Beregningsark og designbegrundelser gemmes i DWG-filen sammen med klassetabellen.

### Tegning uden syn

- Slå {{ui:Tegning uden syn}} til i {{ui:Indstillinger}} (eller skriv {{cmd:ACCESS}} og svar `On`). CadCraft læser hver kommando og hvert resultat op via din skærmlæser, beskriver tegningen og det, der er ved markøren, lader dig flytte markøren og vælge punkter med tastaturet og afspiller en lyd for hvert fang og greb. Hvor din browser kan genkende tale på din computer, kan kommandoer siges højt. Se [Tegn uden syn](topic:draft-without-sight).

### I alle apps

- **Sprog.** 54 sprog; ti er nye (litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili, usbekisk). Andre sprog end engelsk er maskinelle kladder, indtil en indfødt taler har læst dem.
- **Inputenheder.** Trackpad, pen, 3D-mus, spilcontroller og MIDI-styring.
- **Værktøjslinjens rækker og egenskabsgitteret.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Værktøjslinjens rækker}} tilbyder Wrap, 2 rækker eller 1 række i de andre apps. CadCraft har sin egen indstilling i {{ui:Indstillinger}} › {{ui:CadCraft}} (se [Værktøjslinjens rækker](topic:settings#toolbar-rows)). Det delte egenskabsgitter findes i tre andre apps, ikke i CadCraft.
- **Problemer, Live og add-ons.** Et delt panel for problemer, der advarer i alle apps, en Live-visning af hvem der er hvor i CadCraft Studio (se [Arbejd på én tegning sammen](topic:work-live)), og en liste over add-ons.
- **Forbind din AI.** Én forbindelse fra CadCraft Studio til alle otte apps, med et niveau pr. app: kun læsning, foreslå eller redigér, og en log i almindelige ord over, hvad assistenten gjorde. CadCraft har ingen egen AI, og Spørg i alle apps bruger den AI, du forbinder.

## Rettet i 0.8.1

- **Egenskaber viste 150 i stedet for 12'-6"** i tegninger i fod og tommer. Felter, som programmet selv læser, beholder igen deres tekst.
- **DWG-filer, hvis klasseafsnit blev læst som forkert type** (GitHub cadcraft#5), åbnes nu korrekt.
- **Krydsmarkøren vises ikke længere bag pop op-vinduer.**
- **Studio og de pakkede udgaver kan skifte sprog under kørsel.** Tidligere var de kun på engelsk. Endnu ikke testet på alle platforme: giv os besked, hvis sproget ikke skifter.
- **Tablets i stående format** giver ledig gitterhøjde til tegneområdet, og arktilstanden starter ved 760 px eller mindre.
- **STRETCH med et krydsvindue og LIMITS** blev rapporteret i Studio 0.8.0 og var allerede korrekte i webbuilden til 0.8; rapportørens installationsprogram var ældre. Studio 0.8.1 har dem med.

## Endnu ikke i denne version

- **0.8 og 0.8.1 er ikke kodesignerede.** Windows kan advare (vælg {{ui:Flere oplysninger}}, og derefter {{ui:Kør alligevel}}); på en Mac højreklikker du på CadCraft Studio og vælger {{ui:Åbn}}. Butiksbyggene er sat på pause, og iPad- og iPhone-bygget blev ikke genopbygget til 0.8.1.
- **Pennetegninger og fotos af skitser** er kun afprøvet på opdigtede fotos og med en mus, ikke endnu med en rigtig pen, touchskærm eller en håndtegnet skitse på papir.
- **Tegning uden syn** er testet med automatiske kontroller, ikke endnu med en skærmlæser eller en blind testperson.
- **Deling af detaljer** har ikke været kontrolleret af to personer, og en Team Cloud Plan-mappe som Dokumenter-mappe er ikke bygget.
- **Sammenfletning** virker for CadCraft's DWG- og DXF-filer; det samme for de andre apps' filer er ikke bygget.
- **Fortryd på tværs af vinduer:** CadCraft melder hvert afsluttet trin, men Studio har endnu ingen samlet fortryd for alle apps; hver app fortryder sine egne trin.
- **En DWG's OLE-objekter** bevares, men tegnes ikke på deres plads.
- **Læsning af plotstiltabeller (CTB-filer)** fra andre programmer er bygget, men er ikke kontrolleret mod en fil fra et andet program.
- **Forbind din AI:** forbindelse med ét klik i Studio, den hostede connector til browser-AI, din egen API-nøgle i Studio og den udgivne MCP-pakke er ikke lovet i denne udgivelse.

Den version, der kom før denne, finder du under [Nyheder i 0.7](topic:whats-new-0-7).
