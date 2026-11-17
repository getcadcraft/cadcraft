---
title: Nytt i 0.9
summary: Skravurer som følger grensen sin, layer-grupper, stablede etasjer, smarte 2D-vegger med dører og vinduer, tekststiler og en formatert tekstredigerer, en flytende kommandolinje, rutenettfang, ti måter å tegne en bue på og dokumentpanelet.
keywords: nytt, 0.9, utgivelsesnotater, endringslogg, skravur, assosiativ skravur, hatchedit, pat-fil, mønsterfil, layer-grupper, laygroup, etasjer, stablede etasjer, floorlayers, smarte vegger, vegg, dør, vindu, veggverktøy, tekststil, stil, mtext-redigerer, avsnittstekst, formatering, flytende kommandolinje, kommandolinje, toppområde, kompakt, fang til rutenett, rutenettfang, f9, bue, dokumentpanel, check out, britiske stålstørrelser, draw.io, thai-tekst, dxf r12, hva er nytt, endringer, 0.8, 0.8.1, versjon, nye funksjoner, autofullføring, spøkelse, fane, sketchfix, photosketch, autosheet, detaljer, gridmove, autodim, merker, redline, sammenslå, git, fossil, tilgang, tegn uten syn, skjermleser, grenser, peiling, aunits, shx, diagram, ole, historikk, sammenlign, med ord, egenskaper, fot og tommer, strekk, språk, inndataenheter, problemer, live, assistenter
from: 8b6dea0b
---

Dette er hva som endret seg i CadCraft 0.9, sammenlignet med 0.8.1. CadCraft er 2D- og 3D-tegneprogrammet i CadCraft Studio 0.9 og de åtte appene. 0.9 fullfører plantegningstegning, legger til tekststiler og en ekte tekstredigerer, og gir deg mer plass på skjermen.

## Nytt

### Plantegningstegning

- **Skravurer som følger grensen sin.** {{cmd:HATCH}} lenker til det som avgrenser den. Flytter, roterer eller skalerer du grensen, følger skravuren og mønsteret den. Reformer du grensen, beregnes skravuren på nytt. {{cmd:HATCHEDIT}} (`HE`) endrer en skravur etterpå, og lager eller avslutter lenken. Se [Skravur og fyllområder](topic:hatch).
- **Mønsterfiler for skravur.** Ved spørsmålet {{cmd:HATCH}} `Pick internal point` skriver du `F` (Mønsterfil) og velger en `.pat`-fil. Bare filer skrevet i det vanlige formatet er prøvd.
- **Layer-grupper.** I {{ui:Verktøy}} på {{ui:Layer}}-panelet: {{ui:Ny gruppe}}, {{ui:Legg til ferdiglagde grupper}}, {{ui:Grupper etter navn}} og {{ui:Finn en layer}}. Eller skriv {{cmd:LAYGROUP}} (`LG`). Se [Organiser en tegning med layer](topic:layers#group-layers).
- **Stablede etasjer.** {{cmd:FLOORS}} (`FLR`), eller {{ui:Etasjer…}} i menyen {{ui:Mer}} i gruppen {{ui:Visning}}. Et visningsområde på et ark kan vise én etasje under {{ui:Vist etasje}} i Egenskaper. {{cmd:FLOORLAYERS}} gjør etasjer om til layer for en fil som skal til noen andre. Se [Stable etasjer i én tegning](topic:floors).
- **2D-smarte vegger, dører og vinduer.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) og {{cmd:DELOPENING}}. Hjørner, T-sammenføyninger og kryss regnes ut for deg. Vegger beholder en oversikt over hvordan de er sammenføyd, og Egenskaper får {{ui:Ikke tillat sammenføyning ved start}} / {{ui:Ikke tillat sammenføyning ved slutt}}, en {{ui:Plasseringslinje}} og en redigerbar {{ui:Lengde}}. Se [Tegn 2D-vegger, dører og vinduer](topic:walls-2d).
- **Veggverktøyet på plantegningsvegger.** Skriv {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} og resten. De har ingen verktøylinjeknapper ennå. Se [Veggformer, kutt, forskyvninger og låser for 2D-vegger](topic:wall-tools-2d).

### Tekst

- **Tekststiler.** {{cmd:STYLE}} (`ST`), eller {{ui:Tekststil}} på verktøylinjen {{ui:Tegn}}: navngitte stiler med en skrift, høyde, breddefaktor og skråstilling. Se [Sett skrift og størrelse på tekst med tekststiler](topic:text-styles).
- **En formatert redigerer for avsnittstekst.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} eller et dobbeltklikk på tekst åpner en boks med skrift, størrelse, fet, kursiv, understreking, gjennomstreking, farge, justering og grad-, pluss-minus- og diametertegn, pluss {{ui:OK}} og {{ui:Avbryt}}. Se [Formater avsnittstekst](topic:format-paragraph-text).
- **Et diagram fra draw.io-XML.** {{cmd:DIAGRAM}} (`T2D`) leser også inn limt draw.io-XML. Se [Tegn et diagram fra tekst](topic:text-to-diagram).
- **Thai-tekst i en PDF-plott.** Den ble skrevet ut som spørsmålstegn før.

### Mer plass og tegnehjelpemidler

- **En flytende, tynnere kommandolinje og et kompakt toppområde.** Dra kommandolinjens håndtak for å gjøre den flytende, dra øvre kant for færre linjer, {{key:F2}} åpner historikken. {{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Kommandolinje}} og valgene for toppområdet har de samme innstillingene. Se [Innstillinger](topic:settings#command-line).
- **Objektfangmeny.** Høyreklikk {{ui:Fang}} i statuslinjen, eller skriv {{cmd:OSNAP}}.
- **Fang til rutenett.** Knappen {{ui:Rutenettfang}} i statuslinjen, eller {{key:F9}}: valgte punkter går til nærmeste rutenettpunkt når ingen objektfang tok punktet.
- **Bue på ti måter, og Fortsett.** {{ui:Bue}} på verktøylinjen {{ui:Tegn}}, eller {{cmd:ARC}}: 3-punkts, familien Start/Senter/Slutt og familien Senter/Start/Slutt, og Fortsett (trykk {{key:Enter}} i startpunktet) fra siste linje, bue eller polylinje.
- **Dokumentpanelet.** {{cmd:DOCUMENTS}} (`DOCS`), eller {{ui:Dokumenter…}} i menyen {{ui:Mer}} i gruppen {{ui:Visning}}: revisjon, tilstand og utsjekking for hver tegning i en prosjektmappe. Det åpnes som en sentrert dialogboks. Se [Dokumenter](topic:documents).

### Filer

- **Britiske stålstørrelser.** 976 profiler i Standard-panelet, skrevet slik de står på tegninger (for eksempel `305x165x40 UB`).
- **Sørafrikanske pakker** (tegnepraksis og byggeforskrifter) som pakker i tilleggspakken Byggeforskrifter. Tallene er ikke verifisert.
- **Tillegg for CadCraft,** lagt til på forespørsel og av som standard: lysdesign for interiør, brikkedesign (HDL til layout), rutergraving, kretssimulering, kjedehjul til rullekjede og landpakker for Byggeforskrifter.

## Rettet

- Flytting, rotering eller skalering av en skravur etterlot mønsteret sitt.
- {{cmd:GRIDMOVE}} tok med en hel plantegningsvegg som bare starter på rutenettlinjen. En vegg bedømmes nå etter endene sine.
- Rutenettet vistes bare innenfor tegningsgrensene, selv med grenser av.
- Blokklisten i sidepanelet ruller, og et navn som ikke er en blokk, lister blokkene som begynner med det («Mente du»).
- DXF R12-filer som AutoCAD nektet ("Unknown group 1001 for table") åpnes nå der.
- Svært store filer (omtrent 70 000 enheter og oppover) kunne ikke åpnes med "Maximum call stack size exceeded".
- DWG-filer fra AutoCAD 2018 og nyere med høy vedlikeholdsversjon kunne ikke åpnes med "bad BITLONG code 11".
- I tekstboksen for avsnitt beholder en ny størrelse skrevet for en valgt del utvalget.

## I alle programmer

Verktøytips på alle kontroller med et hint, et startveiledningskort du kan lukke, fanelinjer som ruller når de ikke får plass, og en nettleserfanetittel som følger den åpne tegningen (`<drawing> - CadCraft | CadCraft`). {{ui:Innstillinger}} › {{ui:Layout}} er nå en rullegardin med tolinjevalg. Språklisten i {{ui:Innstillinger}} er lengre enn i 0.8. Live-samredigering, Bibliotekssamlinger og vekt- og temperaturenheter er beskrevet i Studio-notatene.

## Ærlige begrensninger

- Avsnittstekst har ingen punkt- eller nummerlister, tabulatorlinjal eller justering. Plottede PDF-er setter tekst i Helvetica.
- Plantegningsvegger er rette, så en bue tegnes som korte vegger. Fellesskapets håndkontroll av veggverktøyet gjenstår.
- Layer-grupper er ikke skrevet i AutoCADs eget format, så AutoCAD viser en flat liste. Andre programmer viser alle etasjer sammen, med mindre du kjører {{cmd:FLOORLAYERS}}.
- Dokumentpanelet er ikke prøvd av to personer på en ekte delt mappe. Rutergraving er ikke kjørt på noen ekte maskin. Lysberegningen er kontrollert mot en fotonsporing, ikke et annet program. Tilleggene for ingeniørfag er kontrollverktøy, ikke en erstatning for en ingeniørs gjennomgang.
- Språk andre enn engelsk er maskinutkast, og noen av de nye ordene er bare på engelsk.

## Tidligere: 0.8 og 0.8.1

Dette er hva som endret seg i CadCraft 0.8 og 0.8.1, sammenlignet med 0.7. 0.8 (1. november 2026) legger til tegnehjelpere som jobber fra din egen tegning, etter regler på datamaskinen din og uten modell. 0.8.1 (2. november 2026) retter feil rapportert etter den.

### Nytt

**Tegning som fullfører tanken din**

- **Et spøkelse viser hva som kommer neste.** Uten en kommando som kjører, viser et grått stiplet spøkelse hva tegningens egne mønstre sier kommer neste: neste stender med samme avstand, neste trinn i en trapp, den manglende veggen i et rom. Trykk {{key:Tab}} for å tegne det som ett angrestegg, eller {{key:Esc}} for å avvise det. Det ser bare på de nyeste objektene, så det holder seg jevnt på en stor tegning. Slå det av i {{ui:Innstillinger}} › {{ui:CadCraft}}, eller med {{cmd:AUTOCOMPLETE}} `Off`.
- **Neste punkt mens du tegner en linje.** Midt i {{cmd:LINE}} eller {{cmd:PLINE}} er spøkelset neste punkt: neste trinn i en trapp, det fjerde hjørnet i et rektangel, eller punktet som lukker det. Før pekeren nær det og trykk {{key:Tab}}, som om du hadde klikket der.
- **Penntegninger blir presis geometri.** {{cmd:SKETCHFIX}}: tegn grove streker med en penn, mus eller finger, og hver blir en ren linje, sirkel, bue, rektangel eller polylinje, festet til det som allerede er tegnet. Se [Skisser med en penn og få presis geometri](topic:sketch-with-a-pen).
- **Et bilde av en skisse blir en tegning.** {{cmd:PHOTOSKETCH}} (`PSK`) finner papiret i et bilde, retter opp perspektivet, bruker papirstørrelsen og målestokken du oppgir, og sporer penneliniene over på et layer for hver pennfarge. Skrift sporers ikke.
- **Mål den etter regler.** {{cmd:AUTODIM}} (`ADIM`) lager kjeder av måltilsettinger langs sidene du velger, et samlet mål, åpningsbredder, hulldiametre og, med `Grid`, rutenettavstand. Den gjentar aldri en måltilsetting som allerede finnes.
- **Flytt en rutenettlinje, og settet følger.** {{cmd:GRIDMOVE}} (`GM`): vegger som ender på rutenettlinjen strekkes med den, vegger langs den, søyler, boblen og merket flytter seg, og måltilsettinger på den måler den nye avstanden. Ett angrestegg.

**Ark, detaljer og merker**

- **Ark som ordner seg selv.** {{cmd:AUTOSHEET}} tar de navngitte visningene dine (eller de adskilte delene av modellen), velger en papirstørrelse og en standard målestokk, og legger visningene på nye ark med en tegningshode og en tekst med navn og målestokk. Alt forblir redigerbart. Se [Legg ut ark for meg](topic:lay-out-sheets-for-me).
- **Firmaets detaljer, tilbudt mens du tegner.** {{cmd:DETAILS}} (`DET`) beholder egne detaljblokker. Når det du velger, stemmer med én ut fra ordene på layerne, blokknavnene og notatene, sier statuslinjen fra det. Velg den og plasser den. {{cmd:DETAILS}} › Del legger listen din i dokumentmappen din og henter inn det teamet ditt har lagt til. Innstillinger slår av forslagene.
- **Merker på blokker.** {{cmd:TAGS}} definerer et merke (typen, verdiene det kan ta, blokkene det gjelder), setter det på blokkreferansene du velger, og lister dem som en tabell du kan lagre som CSV. Definisjonene beholdes i DWG-filen. Se [Merker](topic:tags).
- **Tegningsgrenser.** {{cmd:LIMITS}} setter et rektangel for tegningen: rutenettet fyller det, og Zoom Alt viser det. Grensene vises som en omriss og lagres i DWG og DXF, sammen med papirgrensene. Se [Sett tegningsgrenser](topic:drawing-limits).

**Samarbeid med andre og andre programmer**

- **Gjør en markering om til en revisjon.** {{cmd:REDLINE}} leser pakken MarkupCraft skriver, og lister hver endring. Godta eller avvis hver med et notat. De godtatte får en revisjonssky og en revisjonslogg i ett angrestegg, og du lagrer svarfilen som lukker markeringene i MarkupCraft. Se [Gjør en markering om til en revisjon](topic:redline-to-revision).
- **Tegninger som git og Fossil kan slå sammen.** Med {{ui:Sammenslåingsvennlige filer}} på i {{ui:Innstillinger}} › {{ui:CadCraft}} får hvert objekt en nøkkel som aldri endres (filene er omtrent 10 prosent større). `cadcraft merge base ours theirs` slår deretter sammen to personers endringer av ett DWG- eller DXF-objekt, objekt for objekt, og rapporterer bare der to personer endret det samme. Se [Slå sammen to personers endringer i én tegning](topic:merge-drawings).
- **Hva som endret seg, med ord.** I {{ui:Historikk}} gir Sammenlign en ren liste: hvor ting endret seg, hvor store stedene er, hva som ble lagt til, fjernet eller endret, og teksten som ble redigert. Se [Si med ord hva som endret seg](topic:changes-in-words).
- **Retninger og vinkler.** Skriv inn en retning som en landmåler sin peiling, for eksempel N45°23'30"E, eller i grader, minutter og sekunder, hvor som helst en vinkel etterspørres. AUNITS setter hvordan vinkler vises. Se [Skriv inn og vis peilinger og vinkler](topic:bearings-and-angles).
- **Dine egne SHX-skrifter.** Gi CadCraft en mappe med SHX-skrifter. Tekststiler som navngir dem, tegnes med dem, på skjermen og i plott. Se [Tegn tekst i dine egne SHX-skrifter](topic:shx-fonts).
- **Et diagram fra tekst.** {{cmd:DIAGRAM}} leser et Mermaid-flytdiagram, et PlantUML-komponentdiagram, D2 eller en fra-til-liste, og tegner blokker og koblinger du kan redigere. Se [Tegn et diagram fra tekst](topic:text-to-diagram).
- **OLE-objekter i en DWG.** {{cmd:OLELIST}} lister OLE-objektene en DWG bærer, som CadCraft ikke kan plassere selv, og plasserer en kopi av et bilde der du sier. Se [Bilder](topic:pictures#objects-from-other-programs-ole).
- **Beregningene dine blir værende med tegningen.** Beregningsark og designbegrunnelser beholdes i DWG-filen, sammen med klassetabellen.

**Tegning uten syn**

- Slå på {{ui:Tegn uten syn}} i {{ui:Innstillinger}} (eller skriv {{cmd:ACCESS}} og svar `On`). CadCraft leser opp hver kommando og resultat gjennom skjermleseren din, beskriver tegningen og det som er nær pekeren, lar deg flytte pekeren og velge punkter med tastaturet, og spiller en lyd for hvert fang og håndtak. Der nettleseren din kan gjenkjenne tale på datamaskinen din, kan kommandoer leses inn med stemmen. Se [Tegn uten syn](topic:draft-without-sight).

**I alle programmer**

- **Språk.** 54 språk, og ti er nye (litauisk, latvisk, bosnisk, marathi, telugu, albansk, afrikaans, filippinsk, swahili, usbekisk). Språk utenom engelsk er maskinutkast til en morsmålstalende har lest dem.
- **Inndataenheter.** Styreplate, penn, 3D-mus, spillkontroller og MIDI-kontroller.
- **Verktøylinjerader og egenskapsrutenettet.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Verktøylinjerader}} tilbyr Bryt, 2 rader eller 1 rad i de andre programmene. CadCraft beholder sin egen innstilling i {{ui:Innstillinger}} › {{ui:CadCraft}} (se [Verktøylinjerader](topic:settings#toolbar-rows)). Det delte egenskapsrutenettet finnes i tre andre programmer, ikke i CadCraft.
- **Problemer, Live og tillegg.** Et delt Problemer-panel som varsler i alle programmer, en Live-visning av hvem som er hvor i CadCraft Studio (se [Arbeid på én tegning sammen](topic:work-live)), og en oversikt over tillegg.
- **Koble til KI-en din.** Én tilkobling fra CadCraft Studio til alle åtte programmene, med et skrivebeskyttet, foreslå- eller rediger-nivå per program og en logg i klartekst over det assistenten gjorde. CadCraft har ingen egen KI, og Spør i alle programmer bruker KI-en du kobler til.

### Rettet i 0.8.1

- **Egenskaper viste 150 i stedet for 12'-6"** i tegninger med fot og tommer. Felt som appen leser selv, beholder teksten sin igjen.
- **DWG-filer der klasse-seksjonen ble lest som feil type** (GitHub cadcraft#5) åpnes nå riktig.
- **Korsmarkøren vises ikke lenger bak popup-vinduer.**
- **Studio og de pakkede utgavene kan bytte språk mens de kjører.** Før var de bare på engelsk. Ikke ennå testet på alle plattformer: si ifra hvis språket ikke endres.
- **Nettbrett i stående retning** gir ledig rutenettshøyde til lerretet, og arkmodus starter ved 760 px eller mindre.
- **STRETCH med et kryssvindu, og LIMITS,** ble rapportert på Studio 0.8.0. De var allerede riktige i 0.8-nettversjonen, og rapportørens installasjonsprogram var eldre. Studio 0.8.1 har dem.

### Ikke i denne versjonen ennå

- **0.8 og 0.8.1 er ikke kodesignert.** Windows kan advare (velg {{ui:Mer info}}, og så {{ui:Kjør likevel}}). På en Mac: høyreklikk CadCraft Studio og velg {{ui:Åpne}}. Butikkbygg er satt på vent, og iPad- og iPhone-versjonen ble ikke bygget på nytt for 0.8.1.
- **Penn-skisser og skissebilder** er bare prøvd på oppdiktede bilder og med mus, ikke ennå med en ekte penn, berøringsskjerm eller håndskisse på papir.
- **Tegning uten syn** er testet med automatiske kontroller, ikke ennå med en skjermleser eller en blind tester.
- **Deling av detaljer** har ikke hatt en kontroll av to personer, og en Team Cloud Plan-mappe som dokumentmappe er ikke bygget.
- **Sammenslåing** fungerer for CadCraft sine DWG- og DXF-filer. For de andre programmenes filer er det ikke bygget.
- **Angre på tvers av vinduer:** CadCraft rapporterer hvert ferdige steg, men Studio har ikke én Angre for alle programmene ennå. Hvert program angrer sine egne steg.
- **En DWG sine OLE-objekter** beholdes, men tegnes ikke på plass.
- **Lesing av plottstiltabeller (CTB-filer)** fra andre programmer er bygget, men ikke kontrollert mot en fil fra et annet program.
- **Koble til KI-en din:** ett-klikk-tilkobling i Studio, den hostede koblingen for nettleser-KI, din egen API-nøkkel i Studio og den publiserte MCP-pakken er ikke lovet i denne utgivelsen.

For versjonen før denne, se [Nytt i 0.7](topic:whats-new-0-7).
