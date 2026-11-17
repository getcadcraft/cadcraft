---
title: Legg til tekst og etiketter
summary: Plasser rometiketter med enlinjetekst, skriv innpakkede merknader med avsnittstekst skrevet direkte på tegningen, og rediger tekst etterpå.
keywords: tekst, dtext, mtext, mleader, multileader, hjelpelinje, revcloud, revisjonssky, sky, finn, erstatt, finn og erstatt, avsnitt, bryt, linjeavstand, etikett, merknad, annotering, høyde, justering, textmask, bakgrunnsmaske, maske, maskering, rotasjon, rediger tekst, ddedit, textedit, skrift
from: 4b76be99
---

## Hva du lager

To rometiketter, sentrert i rommene, en merknad som bryter til sin bredde, og deretter en korreksjon av en av etikettene.

## Teksthøyde og tegningsmålestokk

Teksthøyde er i tegningsenheter. I en tegning i millimeter som skal plottes i 1:50, må tekst som er 2.5 mm høy på papiret være 2.5 × 50 = 125 enheter høy i modellen. På en arkfane tegner du i papirenheter, så 2.5 der er 2.5 mm på papiret.

## Plasser en sentrert etikett

1. Skriv `DT` og trykk {{key:Enter}} (eller klikk {{ui:Text}} på verktøylinjen). Ledeteksten lyder `Specify start point of text [Justify]:`.
2. Skriv `J` og trykk {{key:Enter}}.
3. Ved `Enter an option [Left/Center/Right/Middle/TL/MC] <L>:` skriver du `MC` og trykker {{key:Enter}}.
4. Ved `Specify insertion point of text` klikker du midt i et rom.
5. Ved `Specify height` skriver du `250` og trykker {{key:Enter}}.
6. Ved `Specify rotation angle of text <0>` trykker du {{key:Enter}}.
7. Ved `Enter text` skriver du `KITCHEN` og trykker {{key:Enter}}.

Etiketten vises, sentrert på punktet du klikket.

8. Trykk {{key:Enter}} på den tomme ledeteksten `Enter text` for å avslutte kommandoen.

## Skriv en merknad som bryter

Avsnittstekst ({{cmd:MTEXT}}) brytes til en bredde og skrives direkte inn på tegningen.

1. Skriv `T` og trykk {{key:Enter}}, eller klikk {{ui:Paragraph}} på verktøylinjen.
2. Ved `Specify first corner` klikker du der merknadens øverste venstre hjørne skal være.
3. For å endre høyden først, skriver du `H`, trykker {{key:Enter}}, skriver `250` og trykker {{key:Enter}}.
4. Ved `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]` klikker du til høyre for det første hjørnet. Avstanden på tvers er bredden teksten brytes til; hvor langt ned du klikker, begrenser ikke bredden.
5. En boks åpnes over tegningen med markøren i. Skriv `ALL DIMENSIONS ARE IN MILLIMETERS UNLESS NOTED`. Ordene brytes til bredden mens du skriver.
6. Trykk {{key:Enter}} for å starte et nytt avsnitt og skriv `CHECK ON SITE`.
7. Trykk {{key:Mod+Enter}}, klikk {{ui:OK}}, eller klikk hvor som helst utenfor boksen. Merknaden er ett objekt.

Linjen over boksen endrer {{ui:Height}}, {{ui:Line spacing}} (1 er normalt, 1.5 er halvparten til mer), {{ui:Width}} (0 = ingen bryting) og {{ui:Justify}} mens du skriver. {{key:Esc}} eller {{ui:Cancel}} lukker den uten å legge til noe.

Alternativene ved det andre hjørnet er: `H` høyde, `J` justering (`TL` øverst til venstre … `BR` nederst til høyre: hjørnet eller midten av boksen som blir stående), `L` linjeavstand, `R` rotasjon, `W` en skrevet bredde i stedet for det andre hjørnet.

:::note
Mens boksen er åpen, skriver {{key:Space}} et mellomrom, og {{key:Enter}} starter et nytt avsnitt. En lagret DWG beholder avsnittstekst som MTEXT; en DXF R12 har ikke avsnittstekst, så hver linje lagres som sin egen tekst.
:::

### Flere enkeltlinjer i stedet

{{cmd:TEXT}} (`DT`) spør etter én linje om gangen: hver {{key:Enter}} starter neste linje, 1.667 ganger teksthøyden lenger ned, og hver linje er sitt eget objekt. Trykk {{key:Enter}} på en tom linje for å avslutte.

## Justeringsalternativer

| Alternativ | Punktet du klikker er |
|---|---|
| Venstre (standard) | Venstre ende av grunnlinjen |
| Senter | Midten av grunnlinjen |
| Høyre | Høyre ende av grunnlinjen |
| Midt, MC | Midten av teksten, både på tvers og opp og ned |
| TL | Øverste venstre hjørne |

## Rediger tekst

1. Dobbeltklikk et tekstobjekt. Det åpnes i samme boks som ny avsnittstekst, med markøren på slutten.
2. Endre ordene.
3. Trykk {{key:Mod+Enter}} eller klikk utenfor boksen. Teksten på tegningen endres; {{key:Esc}} lar den være slik den var.

{{cmd:TEXTEDIT}} (`ED`) gjør det samme: velg én tekst etter en annen, og trykk {{key:Enter}} når du er ferdig.

Velg en tekst for å endre den i stedet i høyre panel: {{ui:Text}}, {{ui:Height}}, {{ui:Wrap width}} (0 = ingen bryting), {{ui:Line spacing}}, {{ui:Rotation}}, X- og Y-posisjonen og {{ui:Justify}}. Listen {{ui:Justify}} tilbyr også Bottom left, som tekst fra andre programmer noen ganger bruker.

## Formatering i avsnittstekst fra andre programmer

Avsnittstekst i en DWG eller DXF kan inneholde koder: farger per ord, fet og kursiv, understreking, overstreking og gjennomstreking, stablede brøker som 1/2, og en annen høyde for et ord. CadCraft beholder disse kodene, tegner dem (på skjermen og i en plottet PDF) og lagrer dem tilbake uendret.

Når du redigerer slik tekst (dobbeltklikk, {{cmd:TEXTEDIT}}, Text-feltet i høyre panel, eller {{cmd:FIND}} med erstatning), redigerer du de vanlige ordene. Et ord du skriver havner i kjeden ved siden av og får dens farge og stil; de andre kodene blir der de er. Hvis du skriver om tallene i en stablet brøk, blir brøken vanlig tekst. Å sette hele teksten fra Text-feltet beholder kodene bare der det kan avgjøres hvilke ord som ble stående.

Skriftnavn (`\F`) beholdes og lagres, men alt tegnes i den ene skriften i Helvetica-stil. Det finnes ingen verktøylinje for å skrive koder ennå.

## Pek på noe: flerhjelpelinjer

{{ui:Leader}} i gruppen {{ui:Annotate}} ({{cmd:MLEADER}}, `MLD`) tegner en pil, en hjelpelinje, en kort landing og en merknad, som ett objekt.

1. Klikk {{ui:Leader}}. Ved `Specify leader arrowhead location` klikker du på det merknaden handler om.
2. Ved `Specify leader landing location` klikker du der merknaden skal stå. Landingen vender mot siden du klikket.
3. Skriv merknaden i boksen som åpnes, og trykk {{key:Mod+Enter}}.

`A` og `L` ved det første spørsmålet setter størrelsen på pilspissen og lengden på landingen; teksthøyden kommer fra {{ui:Text height}} for nye måltilsettinger, multiplisert med {{ui:Overall scale}}. Dobbeltklikk en flerhjelpelinje for å endre ordene. Håndtakene flytter pilspissen og landingen; merknaden følger landingen. Under {{ui:Properties}}: {{ui:Text}}, {{ui:Height}}, {{ui:Wrap width}}, {{ui:Arrowhead size}} og {{ui:Landing distance}}.

:::note
Flerhjelpelinjer lagres som ekte flerhjelpelinjer i DWG. DXF har ingen flerhjelpelinje i R12 eller 2000, så der lagres de som linjene, pilspissen og teksten de tegner.
:::

## Marker endringer med en revisjonssky

{{ui:Annotate}} › {{ui:More}} › {{ui:Revision cloud}} ({{cmd:REVCLOUD}}, `RC`) tegner en sky av buer rundt det som er endret. Historikken viser buelengden og typen den vil bruke.

- **Rektangulær** (første gang): klikk to hjørner.
- `P` **Mangekant**: klikk hjørnene, {{key:Enter}} lukker skyen.
- `F` **Frihånd**: klikk der den starter og flytt pekeren rundt området uten å klikke; en bue legges til for hver buelengde. Klikk eller trykk {{key:Enter}} for å lukke den.
- `O` **Objekt**: velg en lukket polylinje, sirkel eller ellipse (eller en linje, bue eller åpen polylinje); den blir skyen. `Reverse direction?` `Y` vender buene innover.
- `A` **Buelengde**: lengden på hver bue. Velg en som passer til plottmålestokken.

Skyen er en lukket polylinje av buer, så den lagres i alle formater.

## Finn og erstatt ord

{{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}} ({{cmd:FIND}}) søker i tekst, verdiene til blokkattributter og måltekst på den åpne fanen (eller bare i de valgte objektene).

1. Skriv ordene i {{ui:Find}}. Listen viser hvert sted de finnes, og antallet.
2. Velg {{ui:Match case}}, {{ui:Whole words only}} eller {{ui:Use wildcards (* and ?)}} om du trenger dem, og fjern haken for det du ikke vil søke i.
3. Klikk {{ui:Select found}} for å velge disse objektene, eller skriv de nye ordene i {{ui:Replace with}} (listen viser hva hvert blir) og klikk {{ui:Replace all}}. Ett {{key:Mod+Z}} angrer alle erstatningene.

En måltilsettings målte verdi er ikke tekst, så den erstattes aldri: i `<> TYP.` kan bare `TYP.` endres.

## Skjul linjene bak en etikett

1. Velg tekstene, skriv {{cmd:TEXTMASK}} og trykk {{key:Enter}}.
2. `B` maler tegningens bakgrunn bak dem; `C` ber om et fargenummer. `O` fjerner masken.
3. `Border offset factor`: {{key:Enter}} beholder 1.5, en halv teksthøyde rundt teksten.

Masken dekker linjer under teksten, på skjermen og når du plotter. DWG 2004 eller nyere og DXF 2000 beholder den; DWG-formatet 2000 og DXF R12 kan ikke, og lagringen sier fra om det.

## Skrift

All tekst tegnes i en skrift i Helvetica-stil, på skjermen og i PDF-er. Tekst fra åpnede tegninger beholder ordene, høyden og posisjonen, men ikke sin opprinnelige skrift (navnet på en skrift inne i avsnittstekst beholdes i filen, se over).

I plottede PDF-er skrives tekst på europeisk skrift, kyrillisk eller gresk som seg selv (PDF-en inneholder bokstavene den trenger, og du kan fortsatt markere og søke i teksten). Kinesisk, japansk og koreansk tekst skrives også ut som seg selv (plottet henter en større skrift første gang den trengs). Arabisk, persisk, urdu og hebraisk tekst skrives også ut som seg selv (se neste avsnitt). Tegn som ingen skrift har en bokstav for, skrives ut som «?», og historikken sier hvor mange det var.

## Høyre-til-venstre-tekst: arabisk, persisk, urdu, hebraisk

Skriv teksten slik du ellers ville gjort: {{cmd:TEXT}} og {{cmd:MTEXT}} tegner hver linje i leserekkefølge. En linje hvis første bokstav er arabisk eller hebraisk, leses fra høyre mot venstre; tall og latinske ord inne i den beholder sin egen rekkefølge fra venstre mot høyre, og bokstaver i arabisk skrift henger sammen. En linje som starter med en latinsk bokstav, forblir fra venstre mot høyre med høyre-til-venstre-ord på plass inni seg. Hvert avsnitt i en tekst med flere linjer har sin egen retning, og et brutt avsnitt beholder den på hver linje.

Teksten lagres slik du skrev den, så DWG- og DXF-filer utveksler den med andre programmer uendret. Innsettingspunktet og justeringen ({{ui:Left}}, {{ui:Center}}, {{ui:Right}}) betyr samme side som for all annen tekst; en høyre-til-venstre-merknad som skal henge fra sin høyre ende, trenger {{ui:Right}}.

På skjermen kommer bokstavene fra systemets skrifter. I en plottet PDF bruker hebraisk samme innebygde skrift som latinsk tekst; tekst i arabisk skrift får plottet til å hente én skrift til (under 1 MB, bare én gang), og hele PDF-en skrives så ut i den skriften. Den skriften har ingen egen form for tre urdu-tegn (heh goal, yeh barree og urdu-punktum): de skrives ut i formen til nærmeste arabiske bokstav. En tegning som har både tekst i arabisk skrift og kinesisk, japansk eller koreansk tekst, skriver ut den ene av dem som «?», fordi et plott bare har én skrift. Tekst i en innlastet SHX-skrift ordnes og settes sammen når skriften har bokstavene på sine Unicode-plasser; for gamle skrifter der bokstavene allerede er formet, bruk {{ui:Reverse}} i {{cmd:SHXFONTS}} som før.

## Vanlige feil

- **Teksten er for liten til å se.** Høyden er i tegningsenheter. I en stor tegning, bruk en stor høyde (se over), eller zoom inn.
- **Kommandoen avsluttet etter én linje.** Du trykte {{key:Enter}} på en tom linje i {{cmd:TEXT}}. Start den på nytt, eller bruk avsnittstekst (`T`), der {{key:Enter}} starter et nytt avsnitt.
- **`T` åpnet en boks i stedet for å spørre etter en linje.** Som i AutoCAD er `T` avsnittstekst ({{cmd:MTEXT}}); enkeltlinjetekst er `DT`.
- **Teksten brytes et annet sted enn i AutoCAD.** CadCraft bryter med Helvetica-bredder; en annen skrift kan få plass til et ord litt mer eller litt mindre på en linje.
- **Tekst i en speilet kopi.** Den plasseres speilvendt, men er fortsatt lesbar fra venstre mot høyre.
