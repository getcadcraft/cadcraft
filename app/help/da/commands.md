---
title: Kommandoreference
summary: Alle kommandoer i CadCraft-tegneprogrammet, med deres aliasser, de spørgsmål de stiller, deres muligheder og standarder.
keywords: kommandoer, aliasser, kommandoliste, areal, omkreds, measuregeom, linje, pline, cirkel, bue, beskær, forskyd, dimlinear, blok, indsæt, layout, plot, zoom, hjælp, copyclip, cutclip, pasteclip, pasteorig, copybase, dupliker, selectall
from: 7db2646b
---

Skriv et kommandonavn eller et alias, og tryk {{key:Enter}} eller {{key:Space}}. Store og små bogstaver er ens, og et førende `_`, `-`, `.` eller `'` ignoreres. Skriv `HELP` (eller `?`) for at udskrive en kort liste over alle kommandoer i kommandolinjens historik; tryk {{key:F1}} for denne hjælp.

Sådan læses ledeteksterne: muligheder står i firkantede parenteser, og du vælger en ved at skrive dens store bogstaver (`D` for Diameter). En standard står i vinkelparenteser; tryk {{key:Enter}} for at acceptere den. Hvor et punkt efterspørges, kan du klikke eller skrive et af formaterne i [Indtastning af koordinater og afstande](topic:coordinate-entry). Hvor en afstand efterspørges, kan du skrive et tal eller klikke to punkter.

Hvor et punkt eller et objekt kræves, og der ingen standard er, afslutter {{key:Enter}} kommandoen. {{key:Esc}} annullerer den. Det, en kommando gjorde, er ét fortrydelsestrin.

## Tegn

### LINE

Aliaser: `L`. Rette segmenter, hvert sit eget objekt.

- `Angiv første punkt` (Enter: start fra det sidste punkt, du angav)
- `Angiv næste punkt [Fortryd (U)]`, gentaget. Efter to segmenter: `[Fortryd (U)/Luk (C)]`.
- `U` tager det sidste segment tilbage, `C` lukker til første punkt og afslutter. Enter afslutter.

### PLINE

Aliaser: `PL`. En polylinje af linje- og buesegmenter.

- `Angiv startpunkt`
- `Angiv næste punkt [Bue (A)/Luk (C)/Fortryd (U)]` (Luk, når der er to segmenter)
- `A` skifter til buer: `Angiv slutpunkt for bue [Linje (L)/Luk (C)/Fortryd (U)]`. Hver bue fortsætter tangentielt til det foregående segment. `L` går tilbage til linjer, `CL` lukker med en bue.
- Enter afslutter; polylinjen forbliver åben.

### CIRCLE

Aliaser: `C`.

- `Angiv centrumpunkt for cirkel [3P/2P/Ttr (tangent, tangent, radius)]`
- `Angiv radius for cirkel [Diameter (D)] <sidste radius>`; `D` spørger `Angiv diameter for cirkel`.
- `2P`: to ender af en diameter. `3P`: tre punkter på cirklen.
- `T` (også kommandoen `TTR`, og {{ui:Tegn}} › {{ui:Mere}} › {{ui:Cirkel: Tan, Tan, Radius}}): `Angiv punkt på objekt for første tangent til cirkel`, dernæst den anden, derefter radius (Enter: den sidste). Cirklen rører begge objekter (linjer, buer, cirkler, polylinjesegmenter, også inde i blokke); af de cirkler, der gør det, er det den, der rører tættest ved dine valg. »Cirkel findes ikke«, når ingen passer.
- `TTT` (eller {{ui:Tegn}} › {{ui:Mere}} › {{ui:Cirkel: Tan, Tan, Tan}}): tre objekter; cirklen rører alle tre, den nærmeste dine valg (tre linjer giver den indre cirkel eller en ydre, afhængigt af hvor du vælger).

### ARC

Aliaser: `A`.

- `Angiv startpunkt for bue [Centrum]`, `Angiv andet punkt for bue`, `Angiv slutpunkt for bue`: en bue gennem tre punkter.
- `C`: `Angiv centrumpunkt for bue`, `Angiv startpunkt for bue`, `Angiv slutpunkt for bue`. Buen løber mod uret fra start til slut.

### RECTANG

Aliaser: `REC`, `RECTANGLE`. En lukket polylinje.

- `Angiv første hjørnepunkt`, `Angiv andet hjørnepunkt`. Skriv `@bredde,højde` for det andet hjørne.

### POLYGON

Aliaser: `POL`. En regulær polygon som en lukket polylinje.

- `Angiv antal sider <4>` (3 til 1024)
- `Angiv centrum for polygon`
- `Angiv en mulighed [Indskrevet i cirkel/Omskrevet om cirkel (C)] <I>`
- `Angiv radius for cirkel`: klik eller skriv et punkt; dets afstand angiver størrelsen, og dets retning drejer polygonen.

### ELLIPSE

Aliaser: `EL`.

- `Angiv akseendepunkt for ellipse [Centrum]`, `Angiv andet endepunkt for akse`, `Angiv afstand til anden akse`
- `C`: `Angiv centrum for ellipse`, `Angiv endepunkt for akse`, derefter afstanden til den anden akse.

### HATCH

Aliaser: `H`, `BH`, `BHATCH`; eller {{ui:Skravering}} i værktøjslinjen. Udskriver først det aktuelle mønster, skala og vinkel.

- `Vælg indre punkt [Vælg objekter (S)/Mønster (P)/Skala (SC)/Vinkel (A)]`, gentaget (`Fortryd (U)`, når der er et areal): hvert klik tilføjer det lukkede areal omkring det, med de lukkede former inde i det som øer. Enter laver én skravering af dem alle.
- `S`: `Vælg lukkede objekter` (lukkede polylinjer, cirkler, lukkede ellipser).
- `P`: `Angiv et mønsternavn, SOLID eller ? for listen <aktuel>`. `SC`: `Angiv mønsterskala`. `A`: `Angiv mønstervinkel`.

Se [Skravér og udfyld områder](topic:hatch).

### POINT

Aliaser: `PO`; eller {{ui:Tegn}} › {{ui:Mere}} › {{ui:Punkt}}. Punktobjekter, ét per klik, indtil Enter.

- `Angiv et punkt`

### XLINE

Aliaser: `XL`; eller {{ui:Tegn}} › {{ui:Mere}} › {{ui:Konstruktionslinje}}. Konstruktionslinjer, uendelige i begge retninger. Se [Konstruktionslinjer og stråler](topic:construction-lines).

- `Angiv et punkt [Vandret (H)/Lodret (V)/Vinkel (A)/Halvér (B)/Forskyd (O)]`, derefter `Angiv gennemgående punkt` for hver linje, indtil Enter.
- `A`: `Angiv vinkel for konstruktionslinje [Reference] <0>`; `R` spørger først `Vælg et linjeobjekt`.
- `B`: `Angiv vinkelspids`, `Angiv vinkelstartpunkt`, derefter `Angiv vinkelslutpunkt` for hver linje.
- `O`: `Angiv forskydningsafstand [Gennem (T)] <Gennem (T)>`, derefter `Vælg et linjeobjekt` og `Angiv side at forskyde til` (eller `Angiv gennemgående punkt`) for hver linje.

### RAY

Ingen aliaser; eller {{ui:Tegn}} › {{ui:Mere}} › {{ui:Stråle}}. `Angiv startpunkt`, derefter `Angiv gennemgående punkt` for hver stråle, indtil Enter.

### TEXT

Aliaser: `DT`, `DTEXT`; eller {{ui:Tekst}} i værktøjslinjen. Enkeltlinjetekst; hver linje er sit eget objekt.

- `Angiv startpunkt for tekst [Justér]`
- `J`: `Angiv en mulighed [Venstre (L)/Centrum/Højre (R)/Midt/TL/MC] <L>`, derefter `Angiv indsætningspunkt for tekst`
- `Angiv højde <aktuel teksthøjde>`
- `Angiv rotationsvinkel for tekst <0>`
- `Angiv tekst`, gentaget: hver Enter starter næste linje nedenunder. Enter på en tom linje afslutter. {{key:Space}} skriver et mellemrum her.

## Rediger


Aliaser: `MT`, `T`; eller {{ui:Afsnit}} i værktøjslinjen. Afsnitstekst, der brydes til en bredde, skrevet på stedet.

- `Angiv første hjørne`
- `Angiv modsat hjørne [Højde (H)/Justér (J)/Linjeafstand (L)/Rotation/Bredde (W)]`: bredden på tværs af de to hjørner er der, teksten brydes. `H` spørger `Angiv højde`, `J` `Angiv justering [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Angiv linjeafstandsfaktor (0.25 til 4)`, `R` `Angiv rotationsvinkel`, `W` `Angiv bredde (0 for ingen brydning)` og springer det andet hjørne over.
- Derefter åbnes en boks på tegningen: skriv, {{key:Enter}} for et nyt afsnit, {{key:Mod+Enter}} eller et klik udenfor for at afslutte, {{key:Esc}} for at annullere. Dens bjælke sætter højde, linjeafstand, bredde og justering. Se [Tilføj tekst og etiketter](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliaser: `ED`, `DDEDIT`; eller dobbeltklik en tekst. `Vælg en tekst at redigere`, gentaget indtil {{key:Enter}}: hver åbner i samme boks. Startet på en valgt eller dobbeltklikket tekst redigerer den den ene og afslutter.
### ERASE

Aliaser: `E`, `DELETE`; eller tryk {{key:Delete}} med objekter valgt.

- `Vælg objekter` (springes over, når objekter allerede er valgt)

### MOVE

Aliaser: `M`.

- `Vælg objekter`
- `Angiv basispunkt [Forskydning (D)]`, `Angiv andet punkt`.
- `D`: `Angiv forskydning`, skrevet som `dx,dy`.

### COPY

Aliaser: `CO`, `CP`. Kopierer så mange gange, som du angiver punkter.

- `Vælg objekter`
- `Angiv basispunkt [Forskydning (D)]`
- `Angiv andet punkt [Fortryd (U)]`, gentaget indtil Enter. `U` tager den sidste kopi tilbage.

### ROTATE

Aliaser: `RO`.

- `Vælg objekter`, `Angiv basispunkt`
- `Angiv rotationsvinkel <sidste vinkel>`: grader, positiv mod uret; eller klik et punkt for at dreje mod det.

### SCALE

Aliaser: `SC`.

- `Vælg objekter`, `Angiv basispunkt`
- `Angiv skalafaktor`: skriv en faktor som `0.5` eller `2`. Et klikket punkt giver sin afstand fra basispunktet som faktor.

### MIRROR

Aliaser: `MI`.

- `Vælg objekter`
- `Angiv første punkt på spejlingslinje`, `Angiv andet punkt på spejlingslinje`
- `Slet kildeobjekterne? [Ja (Y)/Nej] <N>`

### ALIGN

Aliaser: `AL`; eller {{ui:Rediger}} › {{ui:Mere}} › {{ui:Justér}}.

- `Vælg objekter`
- `Angiv første kildepunkt`, `Angiv første destinationspunkt`
- `Angiv andet kildepunkt (Enter for at fortsætte)`, `Angiv andet destinationspunkt`
- `Angiv tredje kildepunkt (Enter for at fortsætte)`, `Angiv tredje destinationspunkt`
- Med to par: `Skalér objekter ud fra justeringspunkterne? [Ja (Y)/Nej] <N>`

Se [Justér objekter](topic:modify-objects#align-objects).

### ALIGNTO

- `Vælg objekter` (eller valget), `Justér [Venstre (L)/Centrum/Højre (R)/Top/Midt/Bund (B)] <Venstre (L)>`, `Til [Valg (S)/Første (F)/Sidste (L)/Punkt (P)] <Valg (S)>`; `P` spørger efter punktet. Valget forbliver.

### DISTRIBUTE

- `Vælg objekter` (mindst tre), `Fordel [Vandret (H)/Lodret (V)] <Vandret (H)>`, `Fordel jævnt [Centre/Mellemrum (G)] <Mellemrum (G)>`. De yderste to bliver; valget forbliver.

### ALIGNPANEL

Aliaser: `ALP`; eller {{ui:Rediger}} › {{ui:Mere}} › {{ui:Justér og fordel}}. Åbner panelet, der kører ALIGNTO og DISTRIBUTE med klik.

### LASER

Aliaser: `LASERCUT`; eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Laser…}}. Åbner Laser-panelet over tegningen: hvad hvert lag gør (skær, ridse, gravér, udfyld, billede), forhåndsvisningen, GRBL G-code der skal gemmes, og indramning og afsendelse over Web Serial. Se [Send en tegning til en laser](topic:laser-cutting).

### STRETCH

Aliaser: `S`; eller {{ui:Stræk}}. `Vælg objekter der skal strækkes`: træk krydsvinduer (eller skriv `C`) over enderne for at flytte. `Angiv basispunkt [Forskydning (D)]`, `Angiv andet punkt`. Punkter inde i vinduerne flyttes: linjeender, polylinjehjørner (buesegmenter bevarer deres højde), målsætningspunkter; cirkler, ellipser, tekst, punkter og blokke flyttes helt, når deres centrum eller indsætningspunkt er inde i. Et valg lavet før kommandoen beholder de krydsvinduer (og lassoer), der lavede det, så de strækkes på samme måde. Uden et vindue flyttes objekterne helt.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliaser: `AR`; eller {{ui:Array}}. `Vælg objekter`, derefter `Angiv array-type [Rektangulær/Polær (PO)] <Rektangulær>` (kun ARRAY).

- Rektangulær starter med 4 kolonner × 3 rækker, med afstand 1.5 gange objekternes størrelse, vist som forhåndsvisning. `Angiv en mulighed [Antal (COU)/Afstand (S)/Kolonner (COL)/Rækker/Afslut (X)] <X>`: `COU` spørger om kolonner og rækker, `S` afstandene mellem kolonner og mellem rækker (negativ går til venstre eller ned), `COL` og `R` én retning hver.
- Polær spørger `Angiv centrumpunkt for array`, starter med 6 elementer hele vejen rundt, roteret. `Angiv en mulighed [Elementer (I)/Udfyld vinkel (F)/Roter elementer (ROT)/Afslut (X)] <X>`: `I` elementer, `F` vinklen der skal udfyldes (+ mod uret, − med uret), `ROT` Ja eller Nej.
- {{key:Enter}} (Afslut) laver kopierne som almindelige objekter. Ét fortrydelsestrin.

### OFFSET

Aliaser: `O`. Linjer, buer, cirkler og polylinjer.

- `Angiv forskydningsafstand [Gennem (T)] <sidste afstand, eller Gennem (T)>`
- `Vælg objekt at forskyde`, derefter `Angiv punkt på side at forskyde til` (eller, med Gennem, `Angiv gennemgående punkt`), gentaget indtil Enter.

### TRIMEXTENDMODE

- `Angiv ny værdi for TRIMEXTENDMODE (1 Hurtig, 0 Standard)`: hvordan {{cmd:TRIM}} og {{cmd:EXTEND}} starter. `1` Hurtig: hvert objekt er en skærekant eller afgrænsning. `0` Standard: de spørger først efter kanterne. Også `(setvar "TRIMEXTENDMODE" 0)` i LISP.

### TRIM

Aliaser: `TR`. Udskriver først `Aktuelle indstillinger: Hurtig tilstand (TRIMEXTENDMODE 1), kanter: Forlæng ikke, træk tegner en sti`. I hurtig tilstand er hvert synligt objekt en skærekant, og et objekt, som intet krydser, slettes; i standardtilstand spørger den først `Vælg skærekanter (Enter = alle objekter)` og skærer kun ved dem.

- `Vælg objekt at beskære eller Shift-vælg for at forlænge [Skærekanter (T)/Hegn (F)/Kryds (C)/Tilstand (O)/Kant (E)/Slet (R)/Fortryd (U)]`, gentaget: klik på stykket, der skal fjernes (det vises grå og stiplet, mens markøren hviler på det), træk en sti gennem flere stykker (alle går i ét trin), eller klik to tomme steder for et hegn mellem dem. {{key:Shift}} forlænger i stedet. `T` vælger skærekanter (standardtilstand), `F` spørger efter hegnspunkter, `C` to vinduehjørner (stykker, der delvist er inde, går), `O` spørger `Angiv en beskæringstilstand [Hurtig/Standard]`, `E` spørger `Angiv en underforstået kantforlængelsestilstand [Forlæng/Forlæng ikke]` (EDGEMODE), `R` sletter objekter, du vælger, `U` fortryder det sidste valg eller træk. Enter afslutter. Se [Beskær og forlæng](topic:trim-and-extend).

### EXTEND

Aliaser: `EX`. Det samme som BESKÆR den anden vej: `Vælg objekt at forlænge eller Shift-vælg for at beskære [Afgrænsningskanter (B)/Hegn (F)/Kryds (C)/Tilstand (O)/Kant (E)/Fortryd (U)]`. Et klik forlænger enden nærmest det til næste afgrænsning; en trukket sti eller et hegn forlænger hvert objekt, det krydser; {{key:Shift}} beskærer. `B` vælger afgrænsningskanter (standardtilstand). Tilstand og Kant deles med BESKÆR.

### LINKVIEWS

Aliaser: `SYNCVIEWS`; eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Kobl ruderes visninger}}, eller linkikonet på tegningsfanerne. `Kobl ruderes visninger [ON/OFF]` (Enter skifter til den anden tilstand): mens den er tændt, flytter en panorering eller zoom i den aktive rude hver rude, der viser samme slags rum. Se [Del skærmen](topic:split-screen).

### OPENIN3D

Ingen aliaser; eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Åbn i ModelCraft}}, hvor 3D-modelleringsappen modtager en overdraget tegning. Åbner den der i en ny fane, som DWG (intet uploades). Hvis browseren blokerer fanen, siger den det.

### LASSOMODE

`Angiv ny værdi for LASSOMODE (1 = lasso, 0 = rektangel)`: hvad tryk og træk på en tom plads tegner. Det samme som Indstillinger › CadCraft › Træk for at vælge. Se [Lassovalg](topic:lasso-selection).

### FILLET

Aliaser: `F`. Linjer, buer, cirkler og polylinjer. Udskriver først `Aktuelle indstillinger: Tilstand = BESKÆR, Radius = 0`.

- `Vælg første objekt [Fortryd (U)/Polylinje (P)/Radius (R)/Beskær (T)/Flere (M)]`
  - `R` spørger `Angiv afrundingsradius <sidste>`. `T` spørger `Angiv beskæringstilstand [Beskær (T)/Beskær ikke]`: med Beskær ikke forbliver objekterne, som de er, og kun buen tilføjes.
  - `M` holder kommandoen i gang for flere hjørner, indtil {{key:Enter}}; `U` fortryder det sidste hjørne uden at forlade kommandoen.
  - `P` spørger `Vælg 2D-polylinje [Radius (R)]` og afrunder hvert hjørne, hvor to rette segmenter mødes. Afrundinger, den allerede har, erstattes af den nye radius; radius 0 fjerner dem. Hjørner, hvis sider er for korte til radius, lades være og tælles.
- `Vælg andet objekt eller Shift-vælg for at anvende hjørne [Radius (R)]`. Hold {{key:Shift}} nede, mens du klikker, for et skarpt hjørne, uanset radius.

Klik på hvert objekt på den del, du vil beholde. To linjer, der ikke mødes, forlænges. To parallelle linjer får en halvcirkel hen over mellemrummet, ved enden af den første linje nærmest dit klik. En cirkel bliver aldrig skåret. To segmenter af samme polylinje ved siden af hinanden får buen inde i polylinjen; en polylinje og et andet objekt virker, når snittet lander på polylinjens første eller sidste segment.

### CHAMFER

Aliaser: `CHA`. Linjer og de rette segmenter af polylinjer. Udskriver først de aktuelle afstande (eller længde og vinkel).

- `Vælg første linje [Fortryd (U)/Polylinje (P)/Afstand (D)/Vinkel (A)/Beskær (T)/Metode (E)/Flere (M)]`
  - `D` spørger `Angiv første affasningsafstand <sidste>` og `Angiv anden affasningsafstand <den første>`: den første skæres fra den første linje, du vælger, den anden fra den anden.
  - `A` spørger `Angiv affasningslængde på første linje` og `Angiv affasningsvinkel fra første linje`.
  - `E` (Metode) vælger hvilken af de to den næste affasning bruger. `T`, `M`, `U` og `P` virker som i {{cmd:FILLET}}.
- `Vælg anden linje eller Shift-vælg for at anvende hjørne [Afstand (D)/Vinkel (A)/Metode (E)]`. {{key:Shift}}+klik laver et skarpt hjørne.

En afstand længere end linjen afvises (`Afstanden er for stor.`).

### BREAK og BREAKATPOINT

Aliaser: `BR`. `Vælg objekt` (hvor du klikker, er det første punkt), `Angiv andet brydepunkt [Første punkt (F)]`; `F` spørger `Angiv første brydepunkt` og `Angiv andet brydepunkt`. Delen imellem fjernes; på en cirkel, mod uret fra det første punkt. BREAKATPOINT spørger `Angiv brydepunkt` og deler objektet i to dér (ikke en cirkel).

### LENGTHEN

Aliaser: `LEN`. `Vælg et objekt at måle [Delta (DE)/Procent (P)/Total (T)/Dynamisk (DY)]`: et valg udskriver `Aktuel længde` (og en buens medfølgende vinkel) og spørger igen. `DE` spørger `Angiv deltalængde (negativ forkorter) [Vinkel (A)]`, `P` `Angiv procentlængde`, `T` `Angiv total længde [Vinkel (A)]`, `DY` trækker. Derefter `Vælg et objekt at ændre [Fortryd (U)]`, gentaget: enden nærmest klikket flyttes. Linjer, buer og åbne polylinjer.

### JOIN

Aliaser: `J`. `Vælg objekter at sammenføje`. Linjer, buer og åbne polylinjer, der mødes ende mod ende, bliver til polylinjer (lukkede, når kæden lukker); linjer på samme linje bliver til én linje; buer på samme cirkel bliver til én bue eller til cirklen. Historikken siger, hvor mange objekter der blev sammenføjet, og hvor mange der ikke blev.

### MATCHPROP

Aliaser: `MA`, `PAINTER`. `Vælg kildeobjekt`, derefter `Vælg destinationsobjekter [Indstillinger (S)]` og {{key:Enter}}. Kopierer lag og farve, og mellem objekter af samme slags tekstens højde og bredde, målsætningsstørrelserne eller skraveringsmønsteret. `S` spørger `Slå en egenskab til eller fra [Farve (C)/Lag (LA)/Tekst (T)/Målsætning (D)/Skravering (H)]`, gentaget indtil {{key:Enter}}; valget huskes for sessionen.

### EXPLODE

Aliaser: `X`. Polylinjer bliver til linjer og buer, blokreferencer bliver til deres objekter, og målsætninger bliver til linjer, pilespidser og tekst.

- `Vælg objekter`

## Udklipsholder

Udklipsholderen hører til CadCraft: den virker inden i en tegning, mellem tegninger og mellem CadCraft-faner i denne browser. Se [Kopiér, sæt ind og duplikér](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, eller {{ui:Kopiér}} i gruppen {{ui:Rediger}}. Kopierer objekter til udklipsholderen med de blokke og lag, de bruger. Objekterne forbliver valgt.

- `Vælg objekter der skal kopieres` (springes over, når objekter allerede er valgt)

### CUTCLIP

{{key:Mod+X}}, eller {{ui:Klip}} i menuen {{ui:Mere}}. Kopierer objekter til udklipsholderen og sletter dem derefter (ét fortrydelsestrin).

- `Vælg objekter der skal klippes` (springes over, når objekter allerede er valgt)

### COPYBASE

Kopierer objekter til udklipsholderen med et basispunkt, du vælger; indsætning placerer det punkt.

- `Angiv basispunkt`
- `Vælg objekter der skal kopieres`

### PASTECLIP

{{key:Mod+V}}, eller {{ui:Sæt ind}} i gruppen {{ui:Rediger}}. Kopien følger markøren og hænger fra det nederste venstre hjørne af sin udstrækning (eller fra dets centrum, eller fra `COPYBASE`-punktet; se [CadCraft-indstillinger](topic:settings)).

- `Angiv indsætningspunkt`

De indsatte objekter er valgt. En blok, tegningen allerede har under samme navn, beholder denne tegnings definition.

Når et areal kopieret i MarkupCraft er nyere end det, CadCraft kopierede (og under 6 timer gammelt), indsætter {{key:Mod+V}} og `PASTECLIP` i stedet det areal: se `PASTEAREA`.

### PASTEAREA

Aliaser: `PAREA`. {{ui:Sæt et kopieret areal ind}} i menuen {{ui:Mere}}. Indsætter et areal kopieret med {{ui:Kopiér areal}} i MarkupCraft som et billede i sin rigtige størrelse. Se [Billeder i en tegning](topic:pictures).

- `Angiv nederste venstre hjørne af det kopierede areal`
- `Skalér dets papirstørrelse med (100 for et 1:100-ark; Punkter (P): to punkter på det og deres rigtige afstand) [Punkter (P)] <1>` (kun når arket ikke havde en tegningsskala): et tal, {{key:Enter}} for papirstørrelsen, eller `P`, derefter `Første punkt på det indsatte areal`, `Andet punkt på det indsatte areal` og deres rigtige afstand.

### PASTEORIG

{{key:Mod+Shift+V}}, eller {{ui:Sæt ind på samme sted}} i menuen {{ui:Mere}}. Indsætter ved de koordinater, objekterne blev kopieret fra. Spørger ikke om noget.

### DUPLICATE

Aliaser: `DUP`. {{key:Mod+D}}, eller {{ui:Duplikér og flyt}} i menuen {{ui:Mere}}. En kopi af objekterne flyttes med markøren fra dér, den er; {{key:Esc}} lader intet blive. Bruger ikke udklipsholderen.

- `Vælg objekter der skal duplikeres` (springes over, når objekter allerede er valgt)
- `Angiv hvor kopien skal (Esc lader intet blive)`: klik, skriv et punkt, `@dx,dy` (fra hvor markøren var), eller en afstand mod markøren.

### SELECT

Spørger `Vælg objekter` (med hver mulighed nedenfor) og lader det, du valgte, være valgt til næste kommando, eller til `P` senere.

### QSELECT

Aliaser: `QS`. I browseren dialogen {{ui:Hurtigvalg}} (se [Vælg objekter](topic:select-objects#select-by-a-rule-quick-select)). Uden den spørger kommandolinjen `Angiv objekttype`, `Angiv egenskab`, `Angiv operator [=/<>/>/</*/Vælg alle] <=>` og `Angiv værdi`. Matches bliver valget.

### SELECTSIMILAR

Aliaser: `SIM`. `Vælg objekter [Indstillinger (SE)]` (eller det aktuelle valg): vælger hvert objekt af samme type med samme lag og farve (og blokNavn, skraveringsmønster). `SE` spørger `Slå en egenskab til eller fra [Lag (LA)/Farve (CO)/Navn (NA)/Mønster (PA)/Højde (HE)]`, gentaget indtil {{key:Enter}}.

### FIND

Ingen aliaser; eller {{ui:Redigér}} › {{ui:Mere}} › {{ui:Find og erstat}}. I browseren dialogen {{ui:Find og erstat}} (se [Tilføj tekst og etiketter](topic:text#find-and-replace-words)). Uden den: `Angiv tekst at finde`, derefter `Angiv erstatningstekst (Enter: vælg det, der findes)`. Leder i tekst, attributværdier og målsætningstekst, i den åbne fane eller i valget.

### SELECTALL and DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) vælger hvert objekt, du kan redigere, på den åbne fane. `DESELECT` (aliaser `AI_DESELECT`, `SELECTNONE`; eller {{key:Esc}}) rydder valget.

## Målsætninger

### DIMLINEAR

Aliaser: `DLI`, `DIMLIN`. Vandret eller lodret afstand.

- `Angiv første udgangspunkt for målhjælpelinje [Vælg objekt]` (Enter eller `S`: `Vælg objekt til målsætning`, derefter klik på en linje, bue, cirkel eller et polylinjesegment)
- `Angiv andet udgangspunkt for målhjælpelinje`
- `Angiv placering af målelinje [Tekst (T)/Vandret (H)/Lodret (V)/Roteret (R)]`. `T` spørger efter tekst (`<>` er den målte værdi), `H` og `V` fastlåser retningen, `R` spørger `Angiv vinkel for målelinje <0>`.

### DIMALIGNED

Aliaser: `DAL`, `DIMALI`. Den sande afstand mellem to punkter.

- Udgangspunkter som i {{cmd:DIMLINEAR}}, derefter `Angiv placering af målelinje [Tekst (T)]`.

### DIMANGULAR

Aliaser: `DAN`, `DIMANG`.

- `Vælg bue, cirkel eller linje, eller Enter for et hjørne`
- Bue: dens vinkel. Cirkel: `Angiv andet vinkelendepunkt`. Linje: `Vælg anden linje`. Enter: `Angiv vinkelspids`, `Angiv første vinkelendepunkt`, `Angiv andet vinkelendepunkt`.
- `Angiv placering af målelinje [Tekst (T)]`: klik inde i vinklen for at måle den.

### DIMRADIUS and DIMDIAMETER

Aliaser: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Vælg bue eller cirkel`, derefter `Angiv placering af målelinje [Tekst (T)]`.

### DIMCONTINUE

Aliaser: `DCO`, `DIMCONT`. Fortsætter fra den sidste lineære eller justerede målsætning, der blev lavet (eller spørger `Vælg lineær eller justeret målsætning`).

- `Angiv andet udgangspunkt for målhjælpelinje [Fortryd (U)]`, gentaget indtil Enter.

### DIMBASELINE

Aliaser: `DBA`, `DIMBASE`. Som {{cmd:DIMCONTINUE}}, men hver målsætning starter fra det første udgangspunkt og stables længere ude.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Ingen aliaser. Hver spørger `Angiv ny værdi for … <aktuel>` og sætter den størrelse for **nye** målsætninger: samlet skala, teksthøjde, pilestørrelse, decimaler (op til 8), mellemrum omkring teksten, forlængelse ud over målelinjen, forskydning fra udgangspunktet. Se [Angiv målsætningsstørrelser](topic:dimension-settings).

### DIMLUNIT

Målsætningsindstilling: formatet for nye målsætninger alene (1 videnskabelig, 2 decimal, 3 ingeniør, 4 arkitektonisk, 5 brøk).

### DIMSTYLE and -DIMSTYLE

Aliaser: `DST`, `DDIM`, `D`. Administratoren for målsætningsstile: {{ui:Gør aktuel}}, {{ui:Ny…}}, {{ui:Redigér…}}, {{ui:Omdøb…}}, {{ui:Slet}}, {{ui:Sammenlign…}}, {{ui:Anvend på valgte}}. `-DIMSTYLE` på kommandolinjen: `Målsætningsstil [Gendan (R)/Gem (S)/Slet (D)/Anvend (A)/Sammenlign (C)/Omdøb (N)/Liste (L)]`. Se [Angiv målsætningsstørrelser](topic:dimension-settings#named-dimension-styles).

### DIMEDIT and DIMTEDIT

`DIMEDIT` (`DED`): `Målsætningsredigering [Hjem (H)/Ny (N)/Roter (R)/Skrå (O)] <Hjem (H)>`, derefter målsætningerne (eller dem, der allerede er valgt). Ny spørger efter teksten (`<>` = målingen); Roter for en vinkel (0 sætter teksten tilbage); Skrå for vinklen på hjælpelinjerne fra X-aksen (Enter = ingen; kun lineære og justerede målsætninger). `DIMTEDIT` (`DIMTED`): `Målsætningstekst [Venstre (L)/Højre (R)/Centrum/Hjem (H)/Vinkel (A)] <Centrum>`. Se [Angiv målsætningsstørrelser](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliaser: `DTU`. `Enheder i teksten for nye målsætninger [Tegningsenheder (D)/mm/cm/m/km]`, eller med målsætninger valgt `Enheder i teksten for de valgte målsætninger`. Skriver den målte længde i den enhed med enheden efter (DIMLFAC og et DIMPOST-suffiks); `D` går tilbage til tegningsenheder. Se [Målsætninger i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliaser: `RC`. Udskriver `Buelængde: … Type: …`, derefter `Angiv første punkt [Buelængde (A)/Objekt/Rektangulær/Polygonal/Fri hånd]`. Rektangulær spørger `Angiv modsat hjørne`; Polygonal `Angiv næste punkt (Enter lukker skyen) [Fortryd (U)]`; Fri hånd følger markøren, indtil et klik eller {{key:Enter}}; `O` spørger `Vælg objekt` og `Vend retningen? [Ja (Y)/Nej] <N>` og gør objektet til skyen. `A` spørger `Angiv længden af hver bue`. `R`, `P` og `F` vælger typen for næste sky. Resultatet er en lukket polylinje af buer.

### MLEADER

Aliaser: `MLD`; eller {{ui:Henvisning}}. `Angiv placering af henvisningens pilespids [Pilespidsstørrelse/Landingsafstand]`, `Angiv placering af henvisningens landing`, derefter teksten i boksen på stedet (eller uden den, `Angiv tekst (en tom linje afslutter)`). Gemmes som en rigtig flerledet henvisning i DWG; DXF bevarer de linjer, pilespids og tekst, den tegner.

## Parametrisk

Se [Begræns en tegning](topic:constraints) og [Brug parametre og ligninger](topic:parameters). Begrænsninger virker på fanen {{ui:Model}}.

### GEOMCONSTRAINT and the GC commands

Alias `GCON`: `Angiv begrænsningstype [Vandret (H)/Lodret (V)/Vinkelret/PArallel (PA)/Tangent/Sammenfaldende/CONcentric (CON)/COLlinear (COL)/Symmetrisk/Lig med/Fastlås] <Vandret (H)>`, derefter den kommandos ledetekster.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Vælg et objekt [2 punkter] <2 punkter>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Vælg første objekt`, `Vælg andet objekt` (det andet flytter sig).
- {{cmd:GCCOINCIDENT}}: `Vælg første punkt [Objekt/Autobegræns] <Objekt>`, `Vælg andet punkt [Objekt] <Objekt>`.
- {{cmd:GCFIX}}: `Vælg punkt [Objekt] <Objekt>`.
- {{cmd:GCSYMMETRIC}}: `Vælg første objekt [2 punkter] <2 punkter>`, `Vælg andet objekt`, `Vælg symmetrilinje`.

### DIMCONSTRAINT and the DC commands

Alias `DCON`: `Vælg associativ målsætning at konvertere [Lineær (LI)/Vandret (H)/Lodret (V)/Justeret (AL)/Vinkel (AN)/Radial/Diameter/Konvertér] <Justeret (AL)>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Angiv første begrænsningspunkt [Objekt] <Objekt>`, `Angiv andet begrænsningspunkt`, `Angiv placering af målelinje`, `Målsætningstekst <d1=40>` (et tal, et udtryk, eller `navn=udtryk`).
- {{cmd:DCALIGNED}}: som ovenfor, med `[Objekt/Punkt & linje/2 linjer]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Vælg bue eller cirkel`. {{cmd:DCANGULAR}}: `Vælg første linje eller bue`, `Vælg anden linje`.
- {{cmd:DCCONVERT}}: `Vælg målsætninger at konvertere`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Vælg objekter [Indstillinger (S)]`. `S` spørger efter tolerancerne for afstand og vinkel.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Vælg objekter`; deres begrænsninger fjernes.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Vælg objekter [Vis alle/Skjul alle]`, derefter `[Vis/Skjul]`.
- {{cmd:DCDISPLAY}}: `Angiv en mulighed [Vis/Skjul]`.

### PARAMETERS and -PARAMETERS

{{cmd:PARAMETERS}} (aliaser `PAR`, `PARAM`) åbner panelet {{ui:Parametre}}. `-PARAMETERS`: `Angiv en mulighed [Ny/Redigér/Omdøb/Slet/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Downloader en makro (.swb), der genopbygger modellen som én begrænset skitse i SolidWorks. Se [Flyt skitser til og fra andre del-modellerere](topic:solidworks-sketches).

## Blokke

### ANNOSCALE

Aliaser: `CANNOSCALE`. Siger tegningens annoteringsskala og hvor mange annoterbare objekter den har, og spørger derefter `Ny annoteringsskala`: skriv `1:50`, `1:100`, `2:1`, et løst tal (`50` er 1:50) eller navnet på en af tegningens egne skalaer. Hver annoterbar tekst og målsætning ændres i størrelse, så den udskrives i samme størrelse ved den nye skala, i ét fortrydelsestrin; objekter, der ikke er annoterbare, lades være. Se [Enheder, papirer og målestokke](topic:units-papers-scales#annotate-by-scale).

### SCALELISTEDIT

Aliaser: `SCALELIST`. `Skalaliste [Tilføj/Redigér/Slet/Liste/Nulstil]` indtil {{key:Enter}}. Tilføj: `Skalanavn`, `Papirenheder`, `Tegningsenheder`. Redigér og Slet spørger efter skalaens navn. Tegningens egne skalaer føjes til visnings- og plotskalalisterne og gemmes med tegningen. Se [Enheder, papirer og målestokke](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT and PEDIT

`SPLINE` (`SPL`): `Første punkt på spline [Metode/Objekt] (Tilpas punkter)`. Tilpas: punkter, kurven går igennem, `Luk`, `Fortryd`, derefter `Starttangent` og `Sluttangent` (et punkt, eller {{key:Enter}}). Metode › Kontrolhjørner spørger efter en grad (1 til 5) og tegner ud fra et kontrolpolygon. Objekt laver polylinjer om til splines gennem deres hjørner. `SPLINEDIT` (`SPE`): `[Tilpasningsdata/Redigér hjørne/Konvertér til polylinje/Åbn eller luk/Vend/Fortryd/Afslut (X)]`; Tilpasningsdata `[Tilføj/Slet/Flyt/Rens/Tangenter/Afslut (X)]`; Redigér hjørne `[Tilføj kontrolpunkt/Flyt/Vægt/Afslut (X)]`. `PEDIT` (`PE`): `[Luk (C)/Åbn (O)/Sammenføj (J)/Bredde (W)/Tilpas (F)/Spline/Fjern kurve/Linjetypegenerering/Vend (R)/Fortryd (U)/Afslut (X)]`, `M` for flere objekter; linjer, buer og splines tilbydes først som polylinjer. Se [Splines og polylinjer](topic:splines).

### BLOCK

Aliaser: `B`, `BMAKE`.

- `Angiv blok-navn`. Findes den allerede: `Blok "…" findes allerede. Omdefinér den? [Ja (Y)/Nej] <N>`.
- `Angiv indsætningens basispunkt`
- `Vælg objekter`. De erstattes af én reference til den nye blok.

### WBLOCK

Aliaser: `W`, `-WBLOCK`. Skriver en blok, nogle objekter eller hele tegningen som en ny DWG- eller DXF-fil. `WBLOCK kilde [Blok/Hele tegningen/Objekter] <Objekter>`:

- **Objekter**: `Angiv indsætningens basispunkt` (det bliver den nye tegnings origo), `Vælg objekter`, derefter `Filformat [DWG/DXF/R12 DXF]` og `Filnavn til den nye tegning`, derefter `Hvad skal der ske med objekterne [Behold/Konvertér til blok/Slet]`. Konvertér erstatter dem med én reference til en blok med filens navn; Slet fjerner dem.
- **Blok**: `Blok der skal skrives ud`. Blokkens egne objekter, med dens basispunkt som origo, også indlejrede blokke.
- **Hele tegningen**: hvert objekt i modelrummet. Ark skrives ikke; brug {{cmd:SAVEAS}} for en kopi, der beholder dem.

Den nye fil indeholder kun de lag, linjetyper, tekst- og målsætningsstile og blokke, dens objekter bruger, og tegningens enheder. Versionen af en DWG er den, {{cmd:SAVEAS}} senest brugte. I browseren downloades filen; i Studio åbnes gemmedialogen.

### ATTDEF

Aliaser: `ATT`, `DDATTDEF`, `-ATTDEF`; eller {{ui:Blokke}} › {{ui:Mere}} › {{ui:Definér attribut}}. Udskriver tilstandene, derefter `Angiv en mulighed at ændre (Enter når færdig) [Usynlig/Konstant/Forudindstillet]`, `Angiv attributtag-navn`, `Angiv attributprompt`, `Angiv standard attributværdi` (`Angiv attributværdi` ved konstant), `Angiv startpunkt for tekst`, `Angiv tekstens højde`, `Angiv tekstens rotationsvinkel`. {{cmd:BLOCK}} tager attributdefinitionerne med ind i blokken.

### EATTEDIT and ATTEDIT

`EATTEDIT` (`DDATTE`, eller dobbeltklik en reference med attributter; {{ui:Blokke}} › {{ui:Mere}} › {{ui:Redigér attributter}}): `Vælg en blokreference med attributter`, derefter dialogen {{ui:Redigér attributter}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): samme reference, derefter `<prompt> (<TAG>) <værdi>` for hver attribut; {{key:Enter}} beholder en værdi. Se [Attributter](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Opdatér attributterne for hvilke blokkers referencer [Navn/Vælg/Alle] <Vælg>`. Værdier beholdes; nye attributter får deres standard, fjernede går, og placeringer nulstilles.

### BATTMAN

{{ui:Blokke}} › {{ui:Mere}} › {{ui:Attributadministrator}}. Dialogen: blok, attributter (tag, prompt, standard, tilstande, rækkefølge), {{ui:Opdatér referencerne (værdier bevaret)}}, {{ui:Anvend}}.

### REFEDIT and REFCLOSE

{{ui:Blokke}} › {{ui:Mere}} › {{ui:Redigér på stedet}}. `REFEDIT`: `Vælg blokreferencen at redigere på stedet` (eller valget). `REFCLOSE`: `Gem ændringerne til "…" [Gem/Kassér] <Gem>`; bjælkens {{ui:Gem blokken}} og {{ui:Kassér}} gør det samme. Hele redigeringen er ét fortrydelsestrin. Se [Attributter](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT and BCLOSE

`BE`; eller {{ui:Blokke}} › {{ui:Mere}} › {{ui:Redigér blok}}. `Angiv blok-navn at redigere <blokken for den valgte reference>` åbner blokeditoren. `BCLOSE` spørger `Luk blokeditoren på "…" [Gem/Kassér] <Gem>`; bannerets {{ui:Gem blok}} og {{ui:Kassér ændringer}} gør det samme. Alt, der gøres i editoren, er ét fortrydelsestrin.

### VIEWBASE

Alias: `FLATSHOT`. En flad 2D-visning af legemerne på 3D-fanen: `Visning [Forfra/Oppefra/Højre/Venstre/Bagfra (BA)/Nedefra (BO)/Iso]`, `Skjulte linjer [Vis/Skjul]`, en skala (`1:20`, `2:1`; {{key:Enter}} tager den, der passer til arket), derefter visningens centrum. Én blokreference, synlige kanter på VIEW-VISIBLE, skjulte stiplet på VIEW-HIDDEN. Se [Flade visninger på et ark](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliaser: `-PUBLISH`; eller {{ui:Alle ark i én PDF}} i dialogen {{ui:Plot til PDF}}. `Ark der skal plottes [Alle/Nogle]`: {{key:Enter}} plotter hvert ark, `S` spørger efter navne adskilt af kommaer. Én PDF, en side og et bogmærke per ark. Se [Alle ark i én PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliaser: `SSM`, `SHEETSETMANAGER`. Bringer dig til sektionen {{ui:Arksæt}} i venstre panel: ark fra mange tegninger, nummereret og med titel, deres tegningshoveder udfyldt fra sættet, udgivet som én PDF. Se [Arksæt](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): vælg en DWG eller DXF, derefter dens indsætningspunkt. {{cmd:XREF}} (`XR`, `-XREF`): `Tilknyttede tegninger [?/Vedhæft (A)/Genindlæs (R)/Bind (B)/Frakobl (D)] (Enter: ?)`; med mere end ét link vælger du en af dets referencer, eller skriver `N` og dets navn. Se [Tilknyttede tegninger](topic:files#linked-drawings-external-references).

### COUNT

Aliaser: `BCOUNT`; eller {{ui:Blokke}} › {{ui:Mere}} › {{ui:Tæl blokke}}. `Vælg en blokreference at tælle, eller [Alle/Eksport] (Enter: Alle)`: et valg vælger og tæller hver reference af den blok i dette rum; {{key:Enter}} eller `A` lister dem alle; `E` og derefter `C` (tæller) eller `A` (attributter) downloader en CSV. Se [Tæl blokke og eksporter en liste](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliaser: `I`, `DDINSERT`.

- `Angiv blok-navn eller [Fil/Bibliotek (L)] <sidste blok>` (store og små bogstaver er ens). `F` spørger efter en DWG eller DXF, derefter hele tegningen eller en af dens blokke; et navn, der allerede er brugt, spørger {{ui:Behold eksisterende}} eller {{ui:Omdøb}}. `L` åbner bibliotekspanelet.
- `Angiv indsætningspunkt [Skalér/Roter]`. `S` spørger `Angiv skalafaktor`, `R` spørger `Angiv rotationsvinkel`; begge huskes.
- Derefter `Angiv <prompt> (<TAG>) <standard>` for hver attribut, blokken beder om. Se [Blokattributter](topic:attributes).

### LIBRARY

Aliaser: `LIB`. Åbner bibliotekspanelet: placér elementer, tjek for opdateringer, bibliotekskrediteringer. Ingen spørgsmål. Se [Indsæt fra en fil eller biblioteket](topic:insert-from-file-and-library).

### STEELMEMBER

Aliaser: `SMEMBER`; eller {{ui:3D-profil}} på bibliotekets fane {{ui:Standard}}. `Profilstørrelse <W12x26>` (som fanen viser den), derefter `Startpunkt [Søjle]` og `Slutpunkt`: et massivt element på 3D-fanen mellem de to punkter, stående på jorden. `C` spørger efter søjlens basispunkt og dens højde. Ét fortrydelsestrin. Se [Placér stålprofiler og standarddele](topic:steel-and-standard-parts).

### PARTSLIST

Aliaser: `PLIST`. `Øverste venstre hjørne af delelisten`, derefter `Teksthøjde <2.5>`: tegner en tabel over hver standarddel og stålprofil placeret fra biblioteket (positionsnumre, antal, del, standard, størrelse, længde, materiale, masse). Ét fortrydelsestrin. Se [Placér stålprofiler og standarddele](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliaser: `PU`. Fjerner blokdefinitioner, som intet bruger. Ingen spørgsmål.

### DELBLOCKS

Eller {{ui:Blokke}} › {{ui:Mere}} › {{ui:Slet blokke}}. `Vælg blok at slette [Navn/Afslut (X)]`: vælg en blokreference, eller `N` for listen over blokke med et filter (vælg flere), eller `X` / {{key:Enter}} for at afslutte. Hver reference går — i modellen, på hvert ark og inde i andre blokke — og derefter definitionen, og kommandolinjen siger, hvad der blev slettet, og hvad der ikke kunne. Ikke-navngivne blokke og tilknyttede tegninger tilbydes ikke. Prompten kommer tilbage for næste blok; hele kommandoen er ét fortrydelsestrin.

## Ark og plot

### LAYOUT

Aliaser: `LO`, `NEWLAYOUT`; eller knappen {{ui:+}} under tegningen. Et nyt ark med en ramme, et tegningshoved og én viewport, på ISO A3 (eller Tabloid for tegninger i tommer eller fod). Ingen spørgsmål.

### MVIEW

Aliaser: `MV`. Kun på et ark ({{cmd:VPORTS}} på et ark gør det samme).

- `Angiv hjørne for viewport`, `Angiv modsat hjørne`. Viewporten viser hele modellen i en standardskala.

### VPORTS

Aliaser: `VIEWPORTS`. {{cmd:SPLIT}} er det samme fra et ark også, og {{ui:Visning}} › {{ui:Mere}} › {{ui:Del side om side}}, {{ui:Del stablet}}, {{ui:Fire ruder}}, {{ui:Én rude}} kører den. På modellen: `Angiv antal ruder [Enkelt (SI)/2/3/4] <3>`; `2` spørger `[Vandret/Lodret] <Lodret>` (Lodret = side om side), `3` spørger `[Venstre/Højre] <Højre>` (hvor den store rude går). Hver rude beholder sin egen visning og sit eget rum; et klik gør en rude aktiv. På et ark er det {{cmd:MVIEW}}. Se [Del skærmen](topic:split-screen).

### VPVIEW

Ingen aliaser. Kun på et ark.

- `Vælg viewport` (springes over, hvis én er valgt), derefter på modellen: `Angiv første hjørne af vinduet at vise`, `Angiv modsat hjørne`.

### UCS

Ingen aliaser. Et koordinatsystem af dit eget; ikke en redigering. `Angiv origo for UCS [Navngivet (NA)/Objekt (OB)/Forrige/Verden/Z/3 punkter] <Verden>`: et punkt er et nyt origo, derefter `Angiv punkt på X-aksen (Enter beholder vinklen)`. `Z`: `Angiv rotationsvinkel om Z-aksen <90>`. `3`: origo, et punkt på den positive X-akse, et punkt på den positive Y-side. `OB`: `Vælg objekt at justere UCS efter`. `NA`: `[Gendan/Gem/Slet/?]` og et navn. Visningen drejes, så den nye X-akse er vandret. Se [Drej visningen og brug dine egne koordinater](topic:ucs-and-turned-view).

### PLAN

Ingen aliaser. `Angiv en mulighed [Aktuel UCS/Ucs/Verden] <Aktuel UCS>`: drejer den aktive rudes visning, så UCS' X-akse (eller verdens) er vandret. Intet i tegningen flyttes.

### TURNLEFT, TURNRIGHT, TURNWORLD

Ingen aliaser; eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Drej visningen 90° til venstre}}, {{ui:Drej visningen 90° til højre}}, {{ui:Tilbage til verden}}. Det samme som `UCS Z -90`, `UCS Z 90` og `UCS W`, med visningen, der følger med.

### VPLAYER

Ingen aliaser. På et ark, eller inde i en viewport. `Angiv en mulighed [?/Frys (F)/Tø op (T)/Nulstil (R)/Vpvisdflt]`: `F`, `T`, `R` spørger efter lagnavne (kommaer, `*` og `?` jokertegn), derefter `[Alle/Valg/Aktuel] <Aktuel>` viewports; Nulstil sætter hvert lag tilbage til sin standard "frosset i nye viewports"; `V` sætter den standard (`[Frosset/Tøet]`), som {{cmd:MVIEW}} bruger. `?` lister lagene frosset i den aktuelle viewport. Kolonnen Viewport i panelet Lag gør det samme for én viewport. Se [Frys et lag i én viewport](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliaser: `MS`; eller dobbeltklik inde i en viewport. Kun på et ark. Arbejd på modellen gennem en viewport: den valgte, den eneste på arket, eller `Klik inde i viewporten for at arbejde i`. Panorering og zoom inde i ændrer viewportens visning (en visning, der er låst, beholder den, og arket flytter i stedet); den nye visning skrives som ét fortrydelsestrin. Se [Arbejd på modellen gennem en viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliaser: `PS`; eller dobbeltklik udenfor viewporten, eller klik på en fane under tegningen. Tilbage til arket.

### PLOT

Aliaser: `PRINT`, `PUBLISH`, `EXPORTPDF`; eller {{key:Mod+P}}. Åbner dialogen {{ui:Plot til PDF}}. Se [Plot til PDF](topic:plot-pdf).

### PLOTSTYLES

Aliaser: `STYLESMANAGER`, `PSTABLES`; eller {{ui:Redigér tabeller…}} i dialogen {{ui:Plot til PDF}}. Åbner {{ui:Plotstiltabeller}}: hvad hver farve udskrives som (farve, gråtone, blæk, linjetykkelse), gemt sammen med tegningen. Se [Plotstiltabeller](topic:plot-pdf#plot-style-tables).

## Forespørgsel

### CAL

Udskriver værdien af en beregning, som den læses dér, hvor som helst en længde skrives.

- `Udtryk`: skriv det, for eksempel `12'6"+3/4"` eller `(24'-0")/3`, og tryk {{key:Enter}}. CadCraft udskriver `= 12'-6 3/4"   (150.75 tegningsenheder)`. Se [Aritmetik i en skrevet værdi](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliaser: `DI`; eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Mål afstand}}.

- `Angiv første punkt`, `Angiv andet punkt`. Udskriver afstand, vinkel, Delta X og Delta Y.

### AREA

Aliaser: `AA`; eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Areal}}. Udskriver arealet og omkredsen.

- `Angiv første hjørnepunkt [Objekt/Tilføj areal (A)/Træk areal fra (S)] <Objekt>`
  - Klik eller skriv hjørner; ved `Angiv næste punkt (Enter lukker) [Fortryd (U)]` tryk {{key:Enter}} for at lukke konturen. `U` tager det sidste hjørne tilbage.
  - {{key:Enter}} eller `O`, derefter `Vælg objekt`: en cirkel (udskriver dens omkreds), en ellipse, en polylinje (en åben lukkes med en ret linje for arealet, og dens længde udskrives) eller en skravering (huller trækkes fra).
  - `A` (Tilføj areal) og `S` (Træk areal fra) holder en løbende total: prompten starter med `(TILFØJ-tilstand)` eller `(TRÆK FRA-tilstand)`, hvert areal lægges til eller trækkes fra, og `Samlet areal = …` udskrives efter hver. I disse tilstande vælger `O` objekter, indtil {{key:Enter}}, og {{key:Enter}} ved første prompt afslutter kommandoen.

### MEASUREGEOM

Aliaser: `MEA`. `Angiv en mulighed [Afstand (D)/Radius (R)/Vinkel (A)/Areal (AR)] <Afstand (D)>`; efter hver måling spørger den igen, med `Afslut (X)` som standard.

- `D`: to punkter, som {{cmd:DIST}}.
- `R`: `Vælg bue eller cirkel`; udskriver radius og diameter.
- `A`: en bue (dens inkluderede vinkel), en linje og så en anden linje (vinklen mellem dem, mod deres fjerne ender), eller {{key:Enter}} og tre punkter (spids, derefter de to ender).
- `AR`: som {{cmd:AREA}}, ét areal.

### ID

Ingen aliaser. `Angiv punkt`; udskriver dets X og Y.

### LIST

Aliaser: `LI`, `LS`. `Vælg objekter`; udskriver hvert objekts type, lag og hovedmål.

## Visning, fil og andet

### ZOOM

Aliaser: `Z`.

- `Angiv hjørne for vindue, angiv en skalafaktor (nX) [Udstrækning (E)/Alle/Vindue (W)/Forrige (P)/Skala/Centrum]`. Klik to hjørner for et vindue. `E`, `A` eller Enter: hele tegningen.
- `P` (Forrige, eller {{ui:Forrige}} i værktøjslinjen) går tilbage til visningen før, op til 10 visninger per fane; en række hjulskridt eller én panorering tæller som én visning.
- Et tal som `2`, `2x` eller `0.5x` (eller `S` og derefter tallet) zoomer ind eller ud med den faktor omkring midten af skærmen.
- `C` spørger `Angiv centrumpunkt` og `Angiv højde eller forstørrelse (nX)`.

### PDFATTACH, PDFIMPORT and the PDF commands

Aliaser: `PDFATT` for {{cmd:PDFATTACH}}, `PDFIM` for {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} placerer en PDF-side under tegningen (fil, side, indsætningspunkt, skala, rotation); {{cmd:PDFIMPORT}} laver en sides linjer, kurver, udfyldninger og tekst om til tegningsobjekter på lag navngivet efter PDF'en, i sand størrelse, en skrevet skala, eller skaleret ud fra to punkter og en reel afstand. {{cmd:PDFCLIP}} klipper en underlægning, {{cmd:PDFADJUST}} sætter udtoning, kontrast, monokrom eller slår den fra, {{cmd:PDFLAYERS}} tænder og slukker PDF'ens egne lag, og {{cmd:PDF}} giver CadCraft filerne, en tegnings underlægninger bruger, igen. Se [PDF-underlægninger](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Tegningsautofuldførelse: uden en kommando i gang viser et gråt spøgelse, hvad din tegnings egne mønstre siger, der kommer næst. {{cmd:AUTOCOMPLETE}} tænder den `On` eller slukker den `Off` (også Indstillinger › CadCraft), eller `Show` viser, hvad den ville foreslå nu. **Tab** tegner spøgelset som ét fortrydelsestrin, **Esc** afviser det, indtil tegningen ændres. Den finder tre ting i de nyeste objekter: den næste kopi af noget tegnet to gange eller mere i et lige trin (stolper, søjler, et trappes stigtrin og trin), de næste trin i en polylinjetrappe og den manglende side af et rum eller en vægkæde. Midt i {{cmd:LINE}} eller {{cmd:PLINE}} er spøgelset **næste punkt**: næste trin i en trappe (stigtrin, trin, stigtrin …), det fjerde hjørne i et rektangel, punktet, der lukker det, eller ét trin mere af samme længde. Før markøren tæt på det, og tryk **Tab**, som om du havde klikket der; fortsæt eller tryk Enter. Beregnet på denne computer efter regler, uden en model.

### AUTOSHEET

Alias: `ASH`. Ark, der layouter sig selv. {{cmd:AUTOSHEET}} tager stykkerne af tegningen (dine navngivne visninger, eller de adskilte stykker af modellen, eller hele modellen), vælger en papirstørrelse (eller den du giver), giver hvert stykke en standardskala (én skala for alle, eller den største hvert kan tage), og placerer visningerne i rækker på nye ark med et tegningshoved og en billedtekst (navn og skala) under hver. Hvad der ikke kan være på ét ark, får et ark for sig selv. Ét fortrydelsestrin. Beregnet på denne computer efter regler, uden en model.

### PHOTOSKETCH

Alias: `PSK`. Skitsefoto til tegning. Vælg et foto (JPEG, PNG eller TIFF) af en håndskitse på et stykke papir. {{cmd:PHOTOSKETCH}} finder arkets fire hjørner, retter perspektivet ud, tager den papirstørrelse, du angiver (`Paper`, eller den nærmeste standard), og skitsens `Scale` (1 : n), og sporer pennelinjerne til linjer, buer og cirkler, med et lag for hver pennefarve (sort, rød, blå, grøn). Hvis den ikke kan finde papirets kant, tager den hele fotoet som arket og siger det. Skrift udelades. Ét fortrydelsestrin. Udført på denne computer med klassisk billedbehandling, ingen model, intet sendt nogen steder hen. Se også de skannede tegningskommandoer.

### AUTODIM

Alias: `ADIM`. Automatisk målsætning efter regler. {{cmd:AUTODIM}} målsætter de valgte objekter (eller hele tegningen) ud fra deres niveau og lodrette kanter: en kæde af målsætninger langs de sider, du vælger (`Sides`), én samlet målsætning udenfor den, bredden af hver åbning (et mellemrum mellem kollineære vægliner), en diameter for hver hulstørrelse, og med `Grid` afstanden mellem gitterlinjer. En målsætning, der allerede findes, laves ikke igen. Ét fortrydelsestrin. Beregnet på denne computer efter regler, uden en model.

### GRIDMOVE

Alias: `GM`. Flytning af en gitterlinje flytter sættet. {{cmd:GRIDMOVE}} flytter en gitterlinje (en linje på et lag, hvis navn siger grid eller axis) og det, der hænger på den: vægge med en ende på linjen strækkes for at følge den, vægge langs den flyttes helt, søjler (blokreferencer og cirkler på linjen), dens boble og mærke flyttes, og målsætninger, hvis punkter ligger på den, måler den nye afstand. Giv to punkter (kun den del, der går på tværs af linjen, tæller) eller `Distance`. Ét fortrydelsestrin tager det hele tilbage. Udført efter regler på denne computer.

### DETAILS

Alias: `DET`. Detaljer, der finder dig. {{cmd:DETAILS}} holder din virksomheds egne detaljer: `Add` lægger en blok fra denne tegning på listen, `List` og `Remove` administrerer den, og `Find` rangerer dem for det, der er valgt (eller det, du tegnede sidst), efter ordene på dets lag, bloknavne, skraveringsmønstre og noter, mod hver detaljes navn og noter, så et vinduesoverstykke finder din vindueshylde-tætning. Vælg et nummer og et punkt for at placere den. Med `Hint` tændt (også Indstillinger › CadCraft) giver valg af noget, en detalje passer til, én linje i statuslinjen. Listen gemmes i denne browser, på denne computer, og det er den liste, der søges i. `Share` lægger den også i din Dokumenter-mappe (`.cadcraft/firm-details.json`, med hver bloks tegning): `Pull` tilføjer det, dit team har og du mangler, `Push` tilføjer det, du har og de mangler, `Both` gør begge, og intet fjernes fra nogen af siderne. Åbn Dokumenter-mappen først ({{cmd:DOCUMENTS}}); når den mappe er en Team Cloud Plan-mappe, deler hele teamet én liste. Et detaljeelement i panelet Bibliotek har en knap **Tilføj til min virksomheds detaljer**, der lægger det i den samme liste. Udført på denne computer efter ord, uden en model.

### SKETCHFIX

Alias: `SKF`. Pennetegninger bliver til præcis geometri. Tryk og træk ét frihåndsstrøg ad gangen (pen, mus eller finger), og tryk derefter Enter. Hvert strøg læses som en linje, cirkel, bue, rektangel eller polylinje: næsten vandrette og lodrette linjer gøres præcist vandrette og lodrette, et lukket rundt strøg bliver til en cirkel, et lukket strøg med fire retvinklede hjørner til et rektangel, og strøgenes ender trækkes sammen og hen på de ender, der allerede er i tegningen. Ét fortrydelsestrin. Udført efter regler på denne computer, uden en model.

### SCANATTACH and the scanned-drawing commands

Aliaser: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} har ingen. De virker på et billede, med ét fortrydelsestrin hver. {{cmd:SCANATTACH}} indsætter en PNG, JPEG, TIFF (én side eller alle) eller en PDF-side, der er et billede. {{cmd:SCANSCALE}} skalerer arket ud fra to valgte punkter og den rigtige afstand. {{cmd:SCANALIGN}} flytter og drejer det hen på to punkter (`Skalér arket til at passe` Ja/Nej). {{cmd:SCANDESKEW}} viser vinklen på arkets lange linjer og drejer arket, når du `Accept` eller giver en `Value`. {{cmd:SCANCLEAN}} gør det sort/hvidt (`Threshold` Auto/Adaptive/Level, `Specks`) og `Run`. {{cmd:SCANCROP}} beholder et vindue. {{cmd:SCANERASE}} sletter et `Rectangle`, `Polygon` eller `Lasso`. {{cmd:SCANTRACE}} sporer linjer og buer til et nyt lag (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) og rapporterer, hvad den fandt, og hvad den lod stå som raster. {{cmd:SCANINFO}} lister den originale fil og trinene. {{cmd:RASTERSNAP}} slår fangst til linjerne på skannede ark til eller fra (On eller Off). Se emnet Skannede tegninger og sporingen.

### REGEN and REGENALL

Aliaser: `RE` for {{cmd:REGEN}}, `REA` for {{cmd:REGENALL}}. Genopbyg det, der tegnes på skærmen ud fra tegningen: {{cmd:REGEN}} den fane, du kigger på (på et ark, også modellen, som dets viewporte viser), {{cmd:REGENALL}} hver fane, hver delt rude og hver åben tegning. Brug dem, når billedet ser forældet ud efter en scriptet eller meget stor ændring, eller en assistent redigerede tegningen; selve tegningen røres ikke, så der er intet at fortryde.

### NAMEDVIEW

Aliaser: `NV`, `VIEWS`. `Angiv en mulighed [?/Gendan/Gem/Vindue/Slet] <Gendan>`, derefter visningens navn. `S` gemmer visningen på skærmen, `W` et vindue, du vælger, `R` viser en gemt visning, `D` sletter en, `?` lister visningerne i denne fane. At gemme under et navn, der findes, erstatter det; hver ændring er ét fortrydelsestrin. Visninger hører til den fane, de blev gemt på. DWG- og DXF-filer gemmer dem (VIEW-tabellen); et arks visninger kommer tilbage på det første ark, da filen ikke siger, hvilket det var.

### UNDO and REDO

Aliaser: `U` for {{cmd:UNDO}}; {{cmd:REDO}} har ingen. Også {{key:Mod+Z}} og {{key:Mod+Y}}.

### LAYER

Aliaser: `LA`. Springer til panelet {{ui:Lag}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Angiv linjetype for nye objekter` — `ByLayer`, `ByBlock` eller et navn (`?` lister dem: Continuous, tegningens egne, og DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE med deres `2` (halv) og `X2` (dobbelt) størrelser). {{cmd:LWEIGHT}} (`LW`): linjetykkelsen for nye objekter i mm, eller `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): tegningens linjetypeskala (kan fortrydes). {{cmd:LWDISPLAY}} (`LWT`): `Vis linjetykkelser [ON/OFF]` — det samme som knappen {{ui:LWT}} i statuslinjen. Se [Linjetykkelser og linjetyper](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Angiv objekttype at omdøbe [LAyer/Block]`, `Angiv gammelt navn`, derefter det nye navn; objekter eller referencer følger med. {{cmd:LAYMRG}}: `Vælg objekt på lag der skal sammenlægges, eller [Navn]` indtil {{key:Enter}}, derefter `Vælg objekt på målslag eller [Navn]` og `Y`. {{cmd:LAYDEL}}: `Vælg objekt på lag der skal slettes eller [Navn]`, derefter `Y`: laget og hvert objekt på det går (ikke lag 0, DEFPOINTS eller det aktuelle lag). Ét fortrydelsestrin hver. Se [Organisér en tegning med lag](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Lag ved at vælge objekter; også i menuen {{ui:Værktøjer}} i panelet {{ui:Lag}}. {{cmd:LAYISO}}: `Vælg objekter på de lag, der skal isoleres`, derefter {{key:Enter}}: hvert andet lag slukkes. {{cmd:LAYUNISO}} tænder dem igen. {{cmd:LAYOFF}} og {{cmd:LAYFRZ}}: `Vælg et objekt på laget der skal slukkes` (eller fryses), igen og igen; `U` tager det sidste tilbage, {{key:Enter}} afslutter. {{cmd:LAYMCUR}}: `Vælg objekt, hvis lag skal blive aktuelt`. {{cmd:LAYON}} tænder alle lag, {{cmd:LAYTHW}} tøer alle lag op. Hver kommando er ét fortrydelsestrin. Se [Organisér en tegning med lag](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} starter en tom tegning, og {{cmd:OPEN}} åbner en DWG eller DXF, hver i sin egen fane over tegningen (en urørt ny tegning bruges i stedet for en ny fane). Lukning af en fane med ikke-gemte ændringer spørger først. Se [Del skærmen](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, også {{key:Mod+S}}) downloader en kopi i tegningens format: DWG, hvis den er åbnet fra en DWG, DXF, hvis fra en DXF. En ny tegning bruger det format, der sidst blev valgt i Gem som i denne browser, ellers DWG.

{{cmd:SAVEAS}} (også {{key:Mod+Shift+S}}) åbner dialogen {{ui:Gem en kopi som}}: vælg {{ui:DWG}} (og dens {{ui:Version}}), {{ui:DXF R12}} eller {{ui:DXF 2000}}, og klik derefter på {{ui:Gem}}. Valget bliver for denne tegning og for nye tegninger i denne browser.

{{cmd:DXFOUT}} downloader altid en DXF R12-kopi, uden at ændre det format, {{cmd:SAVE}} bruger.

Se [Filer: hvad der åbnes, hvad der gemmes](topic:files#saving).

### TOUR

Aliaser: `TUTORIAL`. Starter den seks-trins første-tegning-rundvisning igen. Se [Kom i gang](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliaser: `TBDOCK`. `Placering af værktøjslinje [Top/Bund/Venstre/Højre]`. Se [Indstillinger](topic:settings#toolbar-position).

### COMMANDLINE

Aliaser: `CMDLINE`. `Kommandolinje [Fastgjort i bunden/Frigjort/En linje/Viste historiklinjer/Kommandohistorik (F2)]`: fastgør eller frigør kommandolinjen, gør den til én linje, spørger hvor mange historiklinjer der skal vises (0 til 12), eller åbner historikken. Se [Indstillinger](topic:settings#command-line).

### TOPAREA

`Topområde [Standard/Kompakt]`: linjerne over tegningen, som de var, eller kompakte. Se [Indstillinger](topic:settings#top-area).

### POLARANG

`Angiv polar vinkeltrin i grader <90>`: trinnet, {{ui:Polar}}-sporingen fluchter efter (mere end 0, op til 180). Huskes i denne browser.

### UNITS

Aliaser: `UN`. Hvordan længder skrives og skrives ind.

- `Angiv længdeformat [Videnskabelig/Decimal/Ingeniør/Arkitekt/Brøk] <aktuel>`
- Arkitekt og Brøk: `Angiv nævner for mindste brøk der vises (1, 2, 4, 8, 16, 32, 64, 128 eller 256)`. De andre: `Angiv antal decimaler (0 til 8)`.

Nye målsætninger følger det. Ét fortrydelsestrin. Samme som {{ui:Længdeformat}} og {{ui:Præcision}} i {{ui:Aktuelle indstillinger}}; se [Fod og tommer](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliaser: `GDS`. Vis et IC-layout (en GDSII-stream-fil): lab-forsøg, kun til visning og måling.

- En filvælger tager en `.gds`-fil; med flere topceller: `Angiv topcellen at tegne`.
- Hvert lag og datatype bliver et tegningslag (`GDS 1`, `GDS 2/5`), referencer og arrays placeres fladt, i filens brugerenhed (normalt mikrometer). Ét fortrydelsestrin. Intet simuleres eller kontrolleres, og filen skrives ikke tilbage.

### DIAGRAM

Aliaser: `TEXTDIAGRAM`, `T2D`. Et diagram ud fra tekst.

- En boks tager teksten (eller én linje med `;` mellem udsagn på kommandolinjen): et Mermaid-flowchart, et PlantUML-komponentdiagram, D2 eller en fra-til-liste.
- `Angiv det øverste venstre hjørne af diagrammet`, derefter `Angiv teksthøjden`.

Blokke og forbindelser er almindelige objekter på laget `Diagram`, valgt når det slutter. Ét fortrydelsestrin. Se [Tegn et diagram ud fra tekst](topic:text-to-diagram).

### OLELIST

Aliaser: `OLES`. OLE-objekterne en DWG har, som CadCraft ikke selv kan placere.

- Lister hver enkelt: nummer, type, størrelse, og om den gemte et billede.
- `Angiv en mulighed [Placér/Afslut (X)] <Afslut (X)>`: Placér spørger efter nummeret, det nederste venstre hjørne og bredden, og tegner en ramme med billedet. Ét fortrydelsestrin; det bevarede objekt ændres ikke. Se [Billeder](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliaser: `SHX`. Dine egne SHX-skrifttyper.

- `Angiv en SHX-skrifttypemulighed [Mappe/Filer/Liste/Fjern/Vend/Ryd] <Liste>`

{{ui:Mappe}} læser hver `.shx` i en mappe (CadCraft Studio; igen ved hver start), {{ui:Filer}} tager valgte filer (browseren), {{ui:Vend}} lægger en skrifttypes bogstaver ud sidst først. Tekststile, der navngiver en indlæst skrifttype, tegnes med den. Se [Tegn tekst i dine egne SHX-skrifttyper](topic:shx-fonts).

### LIMITS

Hvor stor tegningen er tænkt at være.

- `Angiv nederste venstre hjørne eller [ON/OFF] <aktuel>`: et punkt, `ON` eller `OFF`.
- `Angiv øverste højre hjørne <aktuel>`.

Gitteret fylder grænserne, {{cmd:ZOOM}} Alle viser dem, og med grænserne ON afvises et punkt udenfor (`**Uden for grænserne`). Ét fortrydelsestrin; gemmes i DWG og DXF. Se [Angiv tegningens grænser](topic:drawing-limits).

### AUNITS

Aliaser: `ANGUNITS`. Hvordan vinkler vises og skrives.

- `Angiv vinkelformat [Decimalgrader/Grader-minutter-sekunder/Landmålerpejlinger] <aktuel>`
- `Angiv antal decimaler (0 til 8)`, eller for de to andre `Angiv præcision` (0 grader, 2 minutter, 4 sekunder, 5 til 8 decimaler af et sekund).

Ét fortrydelsestrin; gemmes i DWG og DXF. Samme som {{ui:Vinkelformat}} i {{ui:Aktuelle indstillinger}}. Se [Skriv og vis pejlinger og vinkler](topic:bearings-and-angles).

### APPLOAD

Aliaser: `AP`; eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Indlæs program…}}. Dialogen {{ui:Indlæs programmer}}: indlæs `.lsp`-rutiner og `.dcl`-dialogfiler, fjern dem, indlæs dem igen fra historikken, og Startup Suite. En rutines `(defun c:NAME …)`-kommandoer virker så som alle andre. Se [Indlæs programmer](topic:load-applications) og [Kør LISP-rutiner](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (eller {{ui:Visning}} › {{ui:Mere}} › {{ui:Redigér aliasser…}}) åbner din aliasfil (`ALIAS, *COMMAND`-linjer); {{ui:Gem}} anvender den. {{cmd:REINIT}} anvender den igen. Se [Redigér kommandoaliasser](topic:command-aliases).

### HELP

Aliaser: `?`. Udskriver hver kommando, dens aliasser og en beskrivelse på én linje i kommandolinjens historik. Den åbner ikke denne hjælp: tryk {{key:F1}} eller klik på {{ui:Hjælp}} for det.

## Ledetekst for Vælg objekter

Ved enhver ledetekst for `Vælg objekter`: klik på objekter, træk vinduer (venstre mod højre) og kryds (højre mod venstre) med to klik, eller tryk og træk et lasso ({{key:Space}} mens du trækker: vindue, kryds, hegn), {{key:Shift}}+klik for at fjerne, og tryk {{key:Enter}} for at afslutte. Du kan også skrive `ALL` (alt), `L` (det sidste objekt), `P` (Forrige: det, den sidste kommando brugte), `F` (Hegn: objekter, en linje af punkter krydser; `U` tager et punkt tilbage), `W` (Vindue), `C` (Kryds), `R` (Fjern-tilstand: valg tager objekter ud; ledeteksten siger `Fjern objekter`) og `A` (Tilføj igen). `?` lister dem. De vises ikke i ledeteksten. {{key:Tab}} over overlappende objekter fremhæver det næste; klik for at vælge det. Se [Vælg objekter](topic:select-objects).

### ACCESS

Alias: `AX`. Tegn uden syn. {{cmd:ACCESS}} tænder eller slukker Access (`On`, `Off`) og skifter snap-lyde (`Sound`) og talte kommandoer (`Voice`); den siger tilstanden først. Med Access tændt oplæses hver kommando og hvert resultat gennem din skærmlæser, og tegneområdet har en tastaturmarkør. Hjælpeemnet "Tegn uden syn" har tasterne.

### DESCRIBE

Alias: `DESC`. Sig, hvad tegningen indeholder: hvor mange objekter, af hvilken slags, hvor store, hvor mange lag, hvad der er valgt. Læser kun; ændrer intet.

### WHEREAMI

Alias: `WHERE`. Sig, hvor markøren er, i tegningens enheder.

### NEARBY

Sig, hvad der ligger tæt på markøren, nærmeste først, hver med sin afstand og den side, den er på.

### SAYSEL

Sig, hvad der er valgt, én sætning pr. objekt (linjelængde, ender og vinkel; cirkelradius og centrum; tekst som skrevet).

### VOICE

Tænd eller sluk for talte kommandoer. De genkendes på denne computer; hvor browseren ikke kan det, forbliver tale slukket, medmindre du vælger browserens onlinetjeneste i Indstillinger.
