---
title: Nytt i 0.8 og 0.8.1
summary: Et spøkelse som fullfører tegningen din, pennskisser og skissefoto gjort om til geometri, ark som legger seg selv ut, detaljer som foreslås mens du tegner, GRIDMOVE og AUTODIM, merker, sammenslåingsvennlige filer, markeringer gjort om til revisjoner, tegning uten syn, tegningsgrenser, retninger, SHX-skrifter, diagrammer fra tekst og rettelser i 0.8.1.
keywords: hva er nytt, nyheter, utgivelsesnotater, endringslogg, endringer, 0.8, 0.8.1, versjon, nye funksjoner, autofullføring, spøkelse, tab, sketchfix, photosketch, autosheet, detaljer, gridmove, autodim, merker, redline, sammenslåing, git, fossil, tilgang, tegning uten syn, skjermleser, grenser, retninger, aunits, shx, diagram, ole, historikk, sammenlign, med ord, egenskaper, fot og tommer, strekk, språk, inndataenheter, problemer, live, assistenter
from: 9dd82db5
---

Dette er endret i CadCraft 0.8 og 0.8.1, sammenlignet med 0.7. 0.8 (1. november 2026) legger til tegnehjelpere som virker ut fra din egen tegning, med regler på din datamaskin og uten modell, og 0.8.1 (2. november 2026) retter feil som ble meldt etter den.

## Nytt

### Tegning som fullfører tanken din

- **Et spøkelse viser hva som kommer neste.** Uten at en kommando kjører, viser et grått stiplet spøkelse hva tegningens egne mønstre sier kommer neste: neste stender med samme avstand, neste trinn i en trapp, den manglende veggen i et rom. Trykk {{key:Tab}} for å tegne det som ett trinn i Angre, eller {{key:Esc}} for å avvise det. Det ser bare på de nyeste objektene, så det holder seg jevnt på en stor tegning. Slå det av i {{ui:Innstillinger}} › {{ui:CadCraft}} eller med {{cmd:AUTOCOMPLETE}} `Off`.
- **Neste punkt når du tegner en linje.** Midt i {{cmd:LINE}} eller {{cmd:PLINE}} er spøkelset neste punkt: neste trinn i en trapp, fjerde hjørne i et rektangel, eller punktet som lukker det. Før markøren nær det og trykk {{key:Tab}}, som om du hadde klikket der.
- **Pennskisser blir presis geometri.** {{cmd:SKETCHFIX}}: tegn grove streker med penn, mus eller finger, og hver blir en ren linje, sirkel, bue, rektangel eller polylinje, festet til det som allerede er tegnet. Se [Tegn med penn og få presis geometri](topic:sketch-with-a-pen).
- **Et bilde av en skisse blir en tegning.** {{cmd:PHOTOSKETCH}} (`PSK`) finner papiret i et bilde, retter opp perspektivet, bruker papirstørrelsen og målestokken du oppgir, og tegner pennstrekene over på et lag for hver pennfarge. Bokstaver og tekst blir ikke overført.
- **Mål den etter regler.** {{cmd:AUTODIM}} (`ADIM`) lager kjeder av mål langs sidene du velger, en totalstørrelse, åpningsbredder, hulldiametre og, med `Grid`, rutenettavstand. Det gjentar aldri et mål som allerede finnes.
- **Flytt en rutenettlinje, så følger settet med.** {{cmd:GRIDMOVE}} (`GM`): vegger som ender på rutenettlinjen strekkes med den, vegger langs den, søyler, dens boble og merke flyttes, og mål på den måler den nye avstanden. Ett trinn i Angre.

### Ark, detaljer og merker

- **Ark som legger seg selv ut.** {{cmd:AUTOSHEET}} tar dine navngitte visninger (eller de separate delene av modellen), velger en papirstørrelse og en standard målestokk, og legger visningene på nye ark med et tegningshode og en tekst med navn og målestokk. Alt kan fortsatt redigeres. Se [Legg ut ark for meg](topic:lay-out-sheets-for-me).
- **Dine firmas detaljer, foreslått mens du tegner.** {{cmd:DETAILS}} (`DET`) beholder dine egne detaljblokker. Når det du velger samsvarer med en av dem etter ordene på lagene, blocknavnene og merknadene, sier statuslinjen fra det; velg den og plasser den. {{cmd:DETAILS}} › Del legger listen din i Dokumenter-mappen og henter inn det teamet ditt har lagt til. Innstillinger slår av forslagene.
- **Merker på blokker.** {{cmd:TAGS}} definerer et merke (type, hvilke verdier det kan ha, blokkene det gjelder), setter det på blokkreferansene du velger, og lister dem som en tabell du kan lagre som CSV. Definisjonene lagres i DWG-filen. Se [Merker](topic:tags).
- **Tegningsgrenser.** {{cmd:LIMITS}} setter et rektangel for tegningen: rutenettet fyller det, og zoom Alt viser det. Grensene vises som en omriss og lagres i DWG og DXF, sammen med papirgrensene. Se [Sett tegningsgrensene](topic:drawing-limits).

### Arbeid med andre og med andre programmer

- **Gjør en markering om til en revisjon.** {{cmd:REDLINE}} leser pakken MarkupCraft skriver og lister hver endring. Godta eller avvis hver med en merknad; de godtatte får en revisjonssky og en revisjonslogg i ett trinn i Angre, og du lagrer svarfilen som lukker markeringene i MarkupCraft. Se [Gjør en markering om til en revisjon](topic:redline-to-revision).
- **Tegninger som git og Fossil kan slå sammen.** Med {{ui:Sammenslåingsvennlige filer}} på i {{ui:Innstillinger}} › {{ui:CadCraft}} får hvert objekt en nøkkel som aldri endrer seg (filene blir omtrent 10 prosent større). `cadcraft merge base ours theirs` slår deretter sammen to personers endringer i én DWG- eller DXF-fil objekt for objekt, og melder bare fra der to personer har endret det samme. Se [Slå sammen to personers endringer i én tegning](topic:merge-drawings).
- **Hva som er endret, med ord.** I Historikk gir Sammenlign en enkel liste: hvor ting er endret, hvor store områdene er, hva som er lagt til, fjernet eller endret, og teksten som er redigert. Se [Si med ord hva som er endret](topic:changes-in-words).
- **Retninger og vinkler.** Skriv inn en retning som en landmålers retning, for eksempel N45°23'30"E, eller i grader, minutter og sekunder, hvor som helst en vinkel etterspørres; AUNITS angir hvordan vinkler vises. Se [Skriv inn og vis retninger og vinkler](topic:bearings-and-angles).
- **Dine egne SHX-skrifter.** Gi CadCraft en mappe med SHX-skrifter, og tekststiler som har navn på dem, tegnes med dem, på skjermen og i plott. Se [Tegn tekst med dine egne SHX-skrifter](topic:shx-fonts).
- **Et diagram fra tekst.** {{cmd:DIAGRAM}} leser et Mermaid-flytdiagram, et PlantUML-komponentdiagram, D2 eller en liste fra–til, og tegner blokker og forbindelser du kan redigere. Se [Tegn et diagram fra tekst](topic:text-to-diagram).
- **OLE-objekter i en DWG.** {{cmd:OLELIST}} lister OLE-objektene en DWG-fil inneholder, som CadCraft ikke kan plassere selv, og plasserer en kopi av et bilde der du sier. Se [Bilder](topic:pictures#objects-from-other-programs-ole).
- **Dine beregninger følger tegningen.** Beregningsark og designbegrunnelser lagres i DWG-filen sammen med klassetabellen.

### Tegning uten syn

- Slå på {{ui:Tegning uten syn}} i {{ui:Innstillinger}} (eller skriv {{cmd:ACCESS}} og svar `On`). CadCraft leser opp hver kommando og hvert resultat via skjermleseren, beskriver tegningen og det som er nær markøren, lar deg flytte markøren og velge punkter med tastaturet, og spiller en lyd for hvert fangpunkt og håndtak. Der nettleseren din kan gjenkjenne tale på datamaskinen din, kan kommandoer diktes. Se [Tegn uten syn](topic:draft-without-sight).

### I alle appene

- **Språk.** 54 språk; ti er nye (litauisk, lettisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili, usbekisk). Språk utover engelsk er maskinutkast til en morsmålstalende har lest dem.
- **Inndataenheter.** Styreflate, penn, 3D-mus, spillkontroll og MIDI-kontroller.
- **Verktøylinjerader og egenskapsrutenettet.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Verktøylinjerader}} tilbyr Bryt, 2 rader eller 1 rad i de andre appene. CadCraft har sin egen innstilling i {{ui:Innstillinger}} › {{ui:CadCraft}} (se [Verktøylinjerader](topic:settings#toolbar-rows)). Det delte egenskapsrutenettet finnes i tre andre apper, ikke i CadCraft.
- **Problemer, Live og tillegg.** Et delt Problemer-panel som varsler i alle appene, en Live-visning av hvem som er hvor i CadCraft Studio (se [Arbeid på én tegning sammen](topic:work-live)), og en liste over tillegg.
- **Koble til din KI.** Én tilkobling fra CadCraft Studio til alle åtte appene, med et nivå per app: kun lesing, forslag eller redigering, og en enkel logg over hva assistenten gjorde. CadCraft har ingen egen KI, og Spør i alle appene bruker KI-en du kobler til.

## Rettet i 0.8.1

- **Egenskaper viste 150 i stedet for 12'-6"** i tegninger med fot og tommer. Felt som appen leser selv, beholder teksten sin igjen.
- **DWG-filer der klasseseksjonen ble lest som feil type** (GitHub cadcraft#5) åpnes nå riktig.
- **Korsmarkøren vises ikke lenger bak popup-vinduer.**
- **Studio og de pakkede utgavene kan bytte språk mens de kjører.** Tidligere var de bare på engelsk. Ikke testet på alle plattformer ennå: si fra hvis språket ikke endres.
- **Nettbrett i stående retning** gir ekstra rutenettplass til tegneflaten, og arkmodus starter ved 760 px eller mindre.
- **STRETCH med et kryssende vindu, og LIMITS,** ble meldt på Studio 0.8.0, og var allerede riktige i nettversjonen av 0.8; installasjonsprogrammet til den som meldte fra var eldre. Studio 0.8.1 har dem med.

## Ikke i denne versjonen ennå

- **0.8 og 0.8.1 er ikke kodesignert.** Windows kan varsle (velg {{ui:Mer informasjon}}, og deretter {{ui:Kjør likevel}}); på en Mac høyreklikker du CadCraft Studio og velger {{ui:Åpne}}. Butikkversjoner er satt på vent, og bygget for iPad og iPhone ble ikke bygget på nytt for 0.8.1.
- **Pennskisser og skissefoto** er bare prøvd på oppdiktede bilder og med mus, ikke ennå med en ekte penn, berøringsskjerm eller håndskisse på papir.
- **Tegning uten syn** er testet med automatiske kontroller, ikke ennå med en skjermleser eller en blind tester.
- **Deling av detaljer** er ikke kontrollert av to personer, og en Team Cloud Plan-mappe som Dokumenter-mappe er ikke bygget.
- **Sammenslåing** fungerer for CadCraft sine DWG- og DXF-filer; det samme for de andre appenes filer er ikke bygget.
- **Angre på tvers av vinduer:** CadCraft melder hvert fullført trinn, men Studio har ingen felles Angre for alle appene ennå; hver app angrer sine egne trinn.
- **OLE-objekter i en DWG** tas vare på, men tegnes ikke på plass.
- **Lesing av plottstiltabeller (CTB-filer)** fra andre programmer er bygget, men er ikke kontrollert mot en fil fra et annet program.
- **Koble til din KI:** ett-klikk-tilkobling i Studio, den hostede koblingen for nettleser-KI, din egen API-nøkkel i Studio og den publiserte MCP-pakken lover vi ikke i denne utgivelsen.

For versjonen før denne, se [Nytt i 0.7](topic:whats-new-0-7).
