---
title: Kommandoreferanse
summary: Hver kommando i CadCraft-tegneprogrammet, med sine alias, spørsmålene den stiller, og sine alternativer og standarder.
keywords: kommandoer, aliaser, kommandoliste, areal, omkrets, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 979ffe3b
---

Skriv et kommandonavn eller et alias og trykk {{key:Enter}} eller {{key:Space}}. Store og små bokstaver spiller ingen rolle, og et innledende `_`, `-`, `.` eller `'` ignoreres. Skriv `HELP` (eller `?`) for å skrive ut en kort liste over alle kommandoer i kommandolinjens historikk; trykk {{key:F1}} for denne hjelpen.

Slik leser du ledeteksten: alternativer står i hakeparenteser, og du velger ett ved å skrive dets store bokstaver (`D` for Diameter). En standard står i vinkelparenteser; trykk {{key:Enter}} for å godta den. Der et punkt etterspørres, kan du klikke eller skrive et av formatene i [Koordinat- og avstandsinntasting](topic:coordinate-entry). Der en avstand etterspørres, kan du skrive et tall eller klikke to punkter.

Trykker du {{key:Enter}} der et punkt eller et objekt kreves, og det ikke finnes noen standard, avsluttes kommandoen. {{key:Esc}} avbryter den. Det en kommando gjorde, er ett angretrinn.

## Tegn

### LINE

Alias: `L`. Rette segmenter, hvert sitt eget objekt.

- `Specify first point` (Enter: start fra det siste punktet du ga)
- `Specify next point [Undo]`, gjentas. Etter to segmenter: `[Undo/Close]`.
- `U` tar tilbake det siste segmentet, `C` lukker til det første punktet og avslutter. Enter avslutter.

### PLINE

Alias: `PL`. En polylinje av linje- og bue-segmenter.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close når det finnes to segmenter)
- `A` bytter til buer: `Specify endpoint of arc [Line/CLose/Undo]`. Hver bue fortsetter tangentialt til segmentet før. `L` går tilbake til linjer, `CL` lukker med en bue.
- Enter avslutter; polylinjen forblir åpen.

### CIRCLE

Alias: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` spør `Specify diameter of circle`.
- `2P`: to ender av en diameter. `3P`: tre punkter på sirkelen.
- `T` (også kommandoen `TTR`, og {{ui:Tegn}} › {{ui:Mer}} › {{ui:Sirkel: Tangent, Tangent, Radius}}): `Specify point on object for first tangent of circle`, deretter den andre, og så radius (Enter: den siste). Sirkelen berører begge objektene (linjer, buer, sirkler, segmenter av polylinjer, også inne i blokker). Av sirklene som gjør det, er det den som berører nærmest dine valgpunkter. «Sirkelen finnes ikke» når ingen passer.
- `TTT` (eller {{ui:Tegn}} › {{ui:Mer}} › {{ui:Sirkel: Tangent, Tangent, Tangent}}): tre objekter; sirkelen som berører alle tre, nærmest dine valgpunkter (tre linjer gir den indre sirkelen eller en ytre, avhengig av hvor du velger).

### ARC

Alias: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: en bue gjennom tre punkter.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Buen går mot klokken fra start til slutt.

### RECTANG

Alias: `REC`, `RECTANGLE`. En lukket polylinje.

- `Specify first corner point`, `Specify other corner point`. Skriv `@width,height` for det andre hjørnet.

### POLYGON

Alias: `POL`. En vanlig mangekant som en lukket polylinje.

- `Enter number of sides <4>` (3 til 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: klikk eller skriv et punkt; avstanden setter størrelsen, og retningen dreier mangekanten.

### ELLIPSE

Alias: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, deretter avstanden til den andre aksen.
- `I` (`Isocircle`, bare mens {{cmd:ISODRAFT}} er på): senter, deretter radius eller `Diameter`: ellipsen en sirkel viser seg som på det gjeldende isometriske planet.

### HATCH

Alias: `H`, `BH`, `BHATCH`; eller {{ui:Skravur}} i verktøylinjen. Skriver først ut gjeldende mønster, skala og vinkel.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, gjentas (`Undo` når det finnes et område): hvert klikk legger til det lukkede området rundt det, med de lukkede formene inni det som øyer. Enter lager én skravur av dem alle.
- `S`: `Select closed objects` (lukkede polylinjer, sirkler, lukkede ellipser).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.
- `G` (Gradient): fyllet er en gradient i stedet for et mønster. Se {{cmd:GRADIENT}} for spørsmålene.

Se [Skravur og fyll av områder](topic:hatch).

### GRADIENT

Alias: `GD`. Fyller et område med en gradient av én eller to farger. Den spør først om gradienten, og fortsetter deretter slik {{cmd:HATCH}} gjør (`Pick internal point`, `S` for lukkede objekter, {{key:Enter}} for å fullføre).

- `Enter a gradient option [Type/One color/TWo colors/Angle/Centered/eXit] <X>`, gjentas. Den skriver ut gradienten slik den er nå hver gang.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, eller en av dem omvendt (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). De første bokstavene er nok.
- `O`: én farge, deretter dens tone fra 0 til 1 (0 skygger den til svart, 0,5 er fargen selv, 1 gjør den til hvit). `TW`: den første og den andre fargen. En farge er et tall fra 1 til 255, tre tall som `255,128,0`, eller `#rrggbb`.
- `A`: vinkelen gradienten går i. `C`: sentrert Ja eller Nei (Nei flytter midten av gradienten til én side).
- Den avviser en farge eller type den ikke kjenner, og en tone utenfor 0 til 1.

{{cmd:HATCHEDIT}} `G` og Egenskaper (Gradient) endrer en gradient senere, eller gjør en hvilken som helst skravur om til en. En gradient tegnes på skjermen og plottes. DWG 2004 og nyere beholder den som en ekte gradientskravur. DXF 2000 og DWG 2000 beholder den for CadCraft, og andre programmer ser et heldekkende fyll i første farge.

### HATCHGENERATEBOUNDARY

Alias: `HGB`. Lager grensen på nytt fra en skravur som har mistet den. `Select hatches` (eller velg dem først), deretter `Link each hatch to its new boundary, so the hatch follows it? [Yes/No] <Yes>`.

- Hver løkke i skravuren blir en lukket polylinje på skravurens lag; de nye polylinjene forblir valgt. En buet kant kommer tilbake som de korte rette bitene skravuren beholder.
- Med Ja følger skravuren sin nye grense, slik en skravur laget med {{cmd:HATCH}} gjør. Ett angretrinn.
- Den sier fra når ingen skravur var valgt.

### POINT

Alias: `PO`; eller {{ui:Tegn}} › {{ui:Mer}} › {{ui:Punkt}}. Punktobjekter, ett per klikk, til Enter.

- `Specify a point`

### XLINE

Alias: `XL`; eller {{ui:Tegn}} › {{ui:Mer}} › {{ui:Konstruksjonslinje}}. Konstruksjonslinjer, uendelige i begge retninger. Se [Konstruksjonslinjer og stråler](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, deretter `Specify through point` for hver linje, til Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` spør `Select a line object` først.
- `B`: `Specify angle vertex point`, `Specify angle start point`, deretter `Specify angle end point` for hver linje.
- `O`: `Specify offset distance [Through] <Through>`, deretter `Select a line object` og `Specify side to offset` (eller `Specify through point`) for hver linje.

### RAY

Ingen alias; eller {{ui:Tegn}} › {{ui:Mer}} › {{ui:Stråle}}. `Specify start point`, deretter `Specify through point` for hver stråle, til Enter.

### TEXT

Alias: `DT`, `DTEXT`; eller {{ui:Tekst}} i verktøylinjen. Enkeltlinjetekst; hver linje er sitt eget objekt.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, deretter `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, gjentas: hver Enter starter neste linje under. Enter på en tom linje avslutter. {{key:Space}} skriver et mellomrom her.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} setter merker på en linje, bue, sirkel, polylinje, spline eller ellipse som deler den i like deler. Velg objektet, og gi deretter antall deler (2 til 32767). Et åpent objekt får ett merke færre enn antall deler; et lukket får også et merke ved starten. Selve objektet kuttes ikke. Merkene er punkter; `Block` spør i stedet om en blokk fra denne tegningen, og om den skal dreies for å følge objektet. Lengder langs splines og ellipser måles langs korte korder. Den avviser tekst, skravurer og andre objekter uten lengde.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} setter et merke for hver gitte lengde langs en linje, bue, sirkel, polylinje, spline eller ellipse, og teller fra enden nærmest der du valgte (et lukket objekt: fra starten). Gi lengden ved å skrive den inn eller ved to punkter. Den fjerne enden av et åpent objekt får ingen merke. `Block` setter en blokk ved hvert merke i stedet for et punkt. Den avviser en lengde på 0, en lengde lengre enn objektet, og en som ville gi mer enn 32767 merker.

### BOUNDARY

Alias: `BO`, `BPOLY`. {{cmd:BOUNDARY}} lager en lukket polylinje rundt området som punktet du velger ligger i, fra alle linjer, buer, sirkler, polylinjer og kurver som avgrenser det på skjermen. Biter som ligger på en bue eller sirkel, kommer tilbake som bue-segmenter. Biter av ellipser og splines kommer tilbake som korte rette segmenter. Med `Islands` på (startinnstillingen) får hvert lukket område inni det også sin egen polylinje. Fortsett å velge punkter; Enter avslutter. Objektene som avgrenser området, blir som de var. Den sier fra når ingen lukket område inneholder punktet.

### BLEND

{{cmd:BLEND}} tegner en spline mellom endene av to åpne kurver. Velg hver kurve nær enden som skal settes sammen. `CONtinuity` velger `Tangent` (splinen forlater og ankommer langs begge kurvene) eller `Smooth` (den følger også hvordan de krummer ved endene). Valget beholdes for økten. De to kurvene endres ikke. Den avviser lukkede objekter og to ender som allerede møtes.

### REGION

Alias: `REG`. {{cmd:REGION}} gjør lukkede objekter om til regioner: flate områder du kan slå sammen, kutte og måle. Velg sirkler, lukkede polylinjer, lukkede ellipser eller lukkede splines, eller linjer, buer og åpne polylinjer som lukker en løkke ende mot ende. Hver løkke blir én region og erstatter objektene den kom fra. Buer forblir buer; ellipser og splines blir korte rette segmenter. Det som ikke er lukket og ikke lukker noen løkke, blir som det er, og den sier hvor mange. I tegningen er en region én eller flere lukkede polylinjer holdt sammen som en gruppe uten navn, så et klikk velger hele regionen, og en kopi er en egen region. Andre programmer som åpner filen, ser lukkede polylinjer.

Med regioner i tegningen virker {{cmd:UNION}}, {{cmd:SUBTRACT}} og {{cmd:INTERSECT}} på 2D-fanen på regioner: `UNION` slår de valgte regionene sammen til én (regioner som ligger fra hverandre, blir én region med flere omrisser). `SUBTRACT` spør etter regionene å trekke fra og deretter dem som skal fjernes (et hull forblir en del av regionen). `INTERSECT` beholder området de alle deler. Hver sier arealet av resultatet og er ett angretrinn. De avviser når ingenting ville være igjen, eller ingenting deles. På 3D-fanen, og i en tegning uten regioner, virker de samme kommandoene på volumlegemer som før.

## Endre

Alias: `MT`, `T`; eller {{ui:Avsnitt}} i verktøylinjen. Avsnittstekst som bryter til en bredde, skrevet på stedet.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: bredden mellom de to hjørnene er der teksten brytes. `H` spør `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)`, og hopper over det andre hjørnet.
- Deretter åpnes en boks på tegningen: skriv, {{key:Enter}} for et nytt avsnitt, {{key:Mod+Enter}} eller et klikk utenfor for å fullføre, {{key:Esc}} for å avbryte. Linjen over boksen setter høyde, linjeavstand, bredde og justering. Se [Legg til tekst og merknader](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Alias: `ED`, `DDEDIT`; eller dobbeltklikk en tekst. `Select a text to edit`, gjentas til {{key:Enter}}: hver åpnes i samme boks. Startet på en valgt eller dobbeltklikket tekst, redigerer den den ene og avslutter.

### ERASE

Alias: `E`, `DELETE`; eller trykk {{key:Delete}} med objekter valgt.

- `Select objects` (hoppes over når objekter allerede er valgt)

### MOVE

Alias: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, skrevet som `dx,dy`.

### COPY

Alias: `CO`, `CP`. Kopierer så mange ganger du gir punkter.

`Array` ved spørsmålet om andre punkt lager en rad på én gang: gi antall elementer (originalen teller som én), deretter punktet der første kopi går. De andre følger med samme avstand. `Fit` gjør i stedet det punktet til plassen for siste kopi, med de andre jevnt fordelt mellom.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, gjentas til Enter. `U` tar tilbake den siste kopien.

### ROTATE

Alias: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: grader, positivt mot klokken; eller klikk et punkt for å rotere mot det.

### SCALE

Alias: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: skriv en faktor som `0.5` eller `2`. Et klikket punkt gir sin avstand fra basispunktet som faktor.

### MIRROR

Alias: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Alias: `AL`; eller {{ui:Endre}} › {{ui:Mer}} › {{ui:Innrett}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Med to par: `Scale objects based on alignment points? [Yes/No] <N>`

Se [Innrett objekter](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (eller utvalget), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` spør etter punktet. Utvalget blir valgt.

### DISTRIBUTE

- `Select objects` (minst tre), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. De ytterste to blir stående; utvalget blir valgt.

### ALIGNPANEL

Alias: `ALP`; eller {{ui:Endre}} › {{ui:Mer}} › {{ui:Innrett og fordel}}. Åpner panelet som kjører ALIGNTO og DISTRIBUTE med klikk.

### LASER

Alias: `LASERCUT`; eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Laser…}}. Åpner Laser-panelet over tegningen: hva hvert lag gjør (kutt, riss, gravering, fyll, bilde), forhåndsvisningen, GRBL G-kode å lagre, og rammesetting og sending over Web Serial. Se [Send en tegning til en laser](topic:laser-cutting).

### STRETCH

Alias: `S`; eller {{ui:Strekk}}. `Select objects to stretch`: dra kryssende vinduer (eller skriv `C`) over endene for å flytte. `Specify base point [Displacement]`, `Specify second point`. Punkter inni vinduene flyttes: linjeender, polylinjehjørner (bue-segmenter beholder sin høyde), målepunkter. Sirkler, ellipser, tekst, punkter og blokker flyttes hele når senteret eller innsettingspunktet deres er inni. Et utvalg laget før kommandoen beholder kryssende vinduer (og lasso) som laget det, så de strekkes på samme måte. Uten et vindu flyttes objektene hele.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Alias: `AR`; eller {{ui:Matrise}}. `Select objects`, deretter `Enter array type [Rectangular/POlar] <Rectangular>` (bare ARRAY).

- Rektangulær starter med 4 kolonner × 3 rader, med avstand 1,5 ganger objektenes størrelse, vist som en forhåndsvisning. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` spør kolonner og rader, `S` avstandene mellom kolonnene og mellom radene (negativ går til venstre eller ned), `COL` og `R` én retning hver.
- Polar spør `Specify center point of array`, starter med 6 elementer rundt hele veien, dreiet. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` elementer, `F` vinkelen å fylle (+ mot klokken, − med klokken), `ROT` Ja eller Nei.
- {{key:Enter}} (eXit) lager kopiene, som vanlige objekter. Ett angretrinn.
- `AS` (ASsociative) bytter mellom vanlige kopier og en matrise som kan redigeres: ett objekt du endrer senere med {{cmd:ARRAYEDIT}}, med håndtakene eller i Egenskaper. Valget huskes ({{cmd:ARRAYASSOCIATIVITY}}); det starter på vanlige kopier.

### ARRAYPATH

Kopier langs en kurve. `Select objects`, deretter `Select path curve`: en linje, bue, sirkel, ellipse, polylinje eller spline (ikke et av objektene som settes i matrise). Banen starter ved enden nærmest objektene, og det første elementet er objektene der de er.

- `Enter an option [Method/Items/SPacing/ALign/ASsociative/eXit] <X>`, med en forhåndsvisning. `M`: `Divide` fordeler elementene jevnt over hele banen, `Measure` setter ett hver så langt langs den. `I`: antall elementer (med Measure betyr 0 så mange som får plass; et tall forbi enden av banen holdes til det som får plass). `SP`: avstanden mellom elementene langs banen (bytter til Measure). `AL`: Ja dreier hvert element til å følge banen, Nei holder dem rette.
- `AS` som i {{cmd:ARRAY}}. Når den er på, beholder matrisen sin egen kopi av banens form: å redigere banekurven etterpå flytter ikke elementene.
- Den avviser en bane som ikke er en kurve, og ett element.

### ARRAYEDIT

Endrer en matrise laget med ASsociative. `Select array` (eller velg den først). Den skriver ut hva matrisen er nå, og spør deretter til {{key:Enter}}:

- Rektangulær: `COL` kolonner og deres avstand, `R` rader og deres avstand, `A` vinkelen kolonnene går i.
- Polar: `I` elementer, `F` fyllvinkelen, `ROT` dreie elementene Ja eller Nei.
- Bane: `M` Divide eller Measure, `I` elementer, `SP` avstand, `AL` innrett med banen.
- `S` (Source) åpner objektene matrisen gjentar, alene, som blokkredigeringen. Tegn og rediger der; {{cmd:ARRAYCLOSE}} lagrer eller forkaster, og hvert element følger med.
- `REP` (REPlace): `Select replacement objects`, `Specify base point of the replacement objects`, deretter klikk elementene som skal erstattes, {{key:Enter}}. Disse elementene viser erstatningen i stedet; erstatningsobjektene forlater tegningen og lever i matrisen. `RES` (RESet) viser kildeobjektene i hvert element igjen.
- Hver endring er ett angretrinn. Den avviser vanlige kopier, en vanlig blokkreferanse, og en matrise på et låst lag.

De samme tallene finnes i Egenskaper under Matrise. Matrisen har håndtak: basispunktet flytter den, håndtaket ved andre element setter avstanden, og håndtaket etter siste element setter antallet (polar: andre element setter antall elementer, siste element fyllvinkelen). {{cmd:EXPLODE}} gjør en matrise om til vanlige kopier.

### ARRAYCLOSE

Avslutter {{cmd:ARRAYEDIT}} Source: `Save the changes to the array's source objects? [Save/Discard] <Save>`. Den sier fra når ingen matrises kildeobjekter er åpne. {{cmd:BCLOSE}} gjør det samme.

### ARRAYASSOCIATIVITY

`Enter new value for ARRAYASSOCIATIVITY (1 = arrays stay editable, 0 = plain copies)`. Angir hva {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR og {{cmd:ARRAYPATH}} starter på. Deres alternativ `AS` endrer den samme innstillingen. Huskes i denne nettleseren.

### OFFSET

Alias: `O`. Linjer, buer, sirkler og polylinjer.

Der en polylinje flytter seg utover, og dens rette segmenter kommer fra hverandre i et hjørne, avgjør {{cmd:OFFSETGAPTYPE}} hvordan gapet lukkes.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, deretter `Specify point on side to offset` (eller, med Through, `Specify through point`), gjentas til Enter.

### OFFSETGAPTYPE

- `Offset corner gaps: 0 extend, 1 fillet, 2 chamfer`: hvordan {{cmd:OFFSET}} lukker gapene i de ytre hjørnene på en polylinje. `0` forlenger segmentene til de møtes (startinnstillingen), `1` forbinder dem med en bue rundt det gamle hjørnet, `2` med et rett kutt. Indre hjørner og bue-segmenter påvirkes ikke. Beholdes for denne økten.

### EXTRIM

{{cmd:EXTRIM}} trimmer alt på én side av en kant. Velg skjærekanten (en linje, bue, sirkel, polylinje, ellipse, spline eller konstruksjonslinje), og velg deretter et punkt på siden som skal ryddes: hver linje, bue, sirkel, polylinje og konstruksjonslinje som krysser kanten, mister sin del på den siden, der den starter ved kanten. Mens du velger siden, følger bitene som ville gått pekeren. For en lukket kant er sidene innsiden og utsiden. Objekter som bare berører kanten, og tekst, skravurer, splines og ellipser som krysser den, blir som de er. Ett angretrinn.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: hvordan {{cmd:TRIM}} og {{cmd:EXTEND}} starter. `1` Quick: hvert objekt er en skjærekant eller grense. `0` Standard: de spør etter kantene først. Også `(setvar "TRIMEXTENDMODE" 0)` i LISP.

### TRIM

Alias: `TR`. Skriver først ut `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. I hurtigmodus er hvert synlige objekt en skjærekant, og et objekt som ingenting krysser, slettes. I standardmodus spør den først `Select cutting edges (Enter = every object)` og kapper bare ved dem.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, gjentas: klikk biten som skal fjernes (den vises grå og stiplet mens pekeren hviler på den), dra en bane gjennom flere biter (alle går i ett trinn), eller klikk to tomme steder for et gjerde mellom dem. {{key:Shift}} forlenger i stedet. `T` velger skjærekanter (standardmodus), `F` spør etter gjerdepunkter, `C` to vinduhjørner (biter som er delvis inne, går), `O` spør `Enter a trim mode option [Quick/Standard]`, `E` spør `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` sletter objekter du velger, `U` angrer det siste valget eller draget. Enter avslutter. Se [Trim og forleng](topic:trim-and-extend).

- Et klikk på en skravur kutter skravuren: skjærekantene deler det skraverte området, og biten du klikket på, fjernes (det blir ingen tegnet kontur der den var). Skravuren beholder sitt mønster eller sin gradient. En skravur som var lenket til sin grense, er ikke lenket etterpå, fordi den ikke fyller den lenger. Den sier fra når ingen skjærekant deler skravuren der, når klikket er utenfor skravuren, og når ingenting ville være igjen (bruk {{cmd:ERASE}}). En dratt bane eller et gjerde kutter ikke skravurer.

### EXTEND

Alias: `EX`. Det samme som TRIM den andre veien: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Et klikk forlenger enden nærmest den til neste grense. En dratt bane eller et gjerde forlenger hvert objekt den krysser. {{key:Shift}} trimmer. `B` velger grensekanter (standardmodus). Mode og Edge deles med TRIM.

### LINKVIEWS

Alias: `SYNCVIEWS`; eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Koble rutenes visninger}}, eller lenkeikonet på tegningsfanene. `Link the panes' views [ON/OFF]` (Enter tar den andre tilstanden): mens den er på, flytter en panorering eller zoom i den aktive ruten hver rute som viser samme type rom. Se [Del skjermen](topic:split-screen).

### OPENIN3D

Ingen alias; eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Åpne i ModelCraft}} der 3D-modelleringsappen tar imot en overlevert tegning. Åpner den der i en ny fane, som en DWG (ingenting lastes opp). Hvis nettleseren blokkerer fanen, sier den det.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: hva det å trykke og dra på et tomt sted tegner. Det samme som Innstillinger › CadCraft › Dra for å velge. Se [Lassovalg](topic:lasso-selection).

### FILLET

Alias: `F`. Linjer, buer, sirkler og polylinjer. Skriver først ut `Current settings: Mode = TRIM, Radius = 0`.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` spør `Specify fillet radius <last>`. `T` spør `Enter Trim mode option [Trim/No trim]`: med No trim blir objektene som de er, og bare buen legges til.
  - `M` holder kommandoen i gang for flere hjørner til {{key:Enter}}. `U` tar tilbake det siste hjørnet uten å forlate kommandoen.
  - `P` spør `Select 2D polyline [Radius]` og runder av hvert hjørne der to rette segmenter møtes. Avrundinger den allerede har, erstattes av den nye radiusen. Radius 0 fjerner dem. Hjørner der sidene er for korte for radiusen, blir stående og telles.
- `Select second object or shift-select to apply corner [Radius]`. Hold {{key:Shift}} mens du klikker for et skarpt hjørne, uansett radius.

Klikk hvert objekt på den delen du vil beholde. To linjer som ikke møtes, forlenges. To parallelle linjer får en halvsirkel over gapet, ved enden av den første linjen nærmest klikket ditt. En sirkel kuttes aldri. To segmenter av samme polylinje ved siden av hverandre får buen inni polylinjen. En polylinje og et annet objekt virker når kuttet havner på polylinjens første eller siste segment.

### CHAMFER

Alias: `CHA`. Linjer og de rette segmentene i polylinjer. Skriver først ut de gjeldende avstandene (eller lengde og vinkel).

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` spør `Specify first chamfer distance <last>` og `Specify second chamfer distance <the first>`: den første kuttes fra den første linjen du velger, den andre fra den andre.
  - `A` spør `Specify chamfer length on the first line` og `Specify chamfer angle from the first line`.
  - `E` (mEthod) velger hvilken av de to den neste skråkanten bruker. `T`, `M`, `U` og `P` virker som i {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+klikk gir et skarpt hjørne.

En avstand lengre enn linjen avvises (`Distance is too large.`).

### BREAK og BREAKATPOINT

Alias: `BR`. `Select object` (der du klikker, er det første punktet), `Specify second break point [First point]`; `F` spør `Specify first break point` og `Specify second break point`. Delen mellom dem går. På en sirkel, mot klokken fra det første punktet. BREAKATPOINT spør `Specify break point` og deler objektet i to der (ikke en sirkel).

### LENGTHEN

Alias: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: et valg skriver `Current length` (og en bues innsluttede vinkel) og spør igjen. `DE` spør `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` drar. Deretter `Select an object to change [Undo]`, gjentas: enden nærmest klikket flyttes. Linjer, buer og åpne polylinjer.

### JOIN

Alias: `J`. `Select objects to join`. Linjer, buer og åpne polylinjer som møtes ende mot ende, blir polylinjer (lukkede når kjeden lukker seg). Linjer på én linje blir én linje. Buer på én sirkel blir én bue eller sirkelen. Historikken sier hvor mange objekter som ble slått sammen, og hvor mange som ikke ble det.

### MATCHPROP

Alias: `MA`, `PAINTER`. `Select source object`, deretter `Select destination objects [Settings]` og {{key:Enter}}. Kopierer lag og farge, og mellom objekter av samme slag teksthøyde og -bredde, målestørrelsene, eller skravurmønsteret. `S` spør `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, gjentas til {{key:Enter}}. Valget huskes for økten.

### EXPLODE

Alias: `X`. Polylinjer blir linjer og buer, blokkreferanser blir sine objekter, mål blir linjer, pilspisser og tekst. En matrise som kan redigeres ({{cmd:ARRAYEDIT}}), blir vanlige kopier av sine objekter.

- `Select objects`

### GROUP

Alias: `G`. {{cmd:GROUP}} gir de valgte objektene et navn de deler. Velg objektene, skriv deretter et navn (uten mellomrom; `?` lister gruppene; Enter lager en gruppe uten navn), og for en navngitt gruppe en valgfri beskrivelse. Fra da av velger et klikk på ett av dem, eller et vindu som tar ett av dem, alle, så de flyttes, kopieres og slettes sammen. Hvert objekt er fortsatt sitt eget objekt. Et objekt kan være i flere grupper. En kopi av en hel gruppe blir en ny gruppe uten navn; en kopi av ett medlem alene blir med i gruppen. Grupper hører til rommet de ble laget i (modellen eller et ark). De beholdes når du lagrer som DWG eller DXF og åpner filen igjen i CadCraft. DXF 2000-filer bærer dem også som gruppeobjekter for andre programmer, og grupper laget i et annet program leses når en DXF eller DWG åpnes.

### UNGROUP

{{cmd:UNGROUP}} tar grupper fra hverandre: velg objekter i gruppene (hver gruppe de er i, tas fra hverandre), eller skriv `Name` og gruppens navn. Objektene blir i tegningen. Ett angretrinn henter gruppene tilbake.

### GROUPEDIT

{{cmd:GROUPEDIT}} endrer én gruppe. Velg ett av objektene, eller `Name` og dets navn; en gruppe som allerede er valgt, tas slik den er. Deretter: `Add` objekter (valgt ett om gangen, ikke gruppe for gruppe), `Remove` objekter, `REName` gruppen, endre dens `Description`, eller angi `Selectable` (om et klikk på ett objekt velger hele gruppen). `eXit` eller Enter avslutter. En gruppe uten objekter igjen er borte.

### PICKSTYLE

- `Group selection: 0 a click selects one object, 1 its whole group`: med `1` (startinnstillingen) velger et klikk eller et vindu på et gruppert objekt hele gruppen. Med `0` velges enkeltobjekter, så du kan redigere ett medlem. Beholdes for denne økten.

## Utklippstavle

CadCrafts egen utklippstavle: den virker innen en tegning, mellom tegninger og mellom CadCraft-faner i denne nettleseren. Se [Kopier, lim inn og dupliser](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, eller {{ui:Kopier}} i gruppen {{ui:Rediger}}. Kopierer objekter til utklippstavlen, med blokkene og lagene de bruker. Objektene forblir valgt.

- `Select objects to copy` (hoppes over når objekter allerede er valgt)

### CUTCLIP

{{key:Mod+X}}, eller {{ui:Klipp ut}} i menyen {{ui:Mer}}. Kopierer objekter til utklippstavlen, og sletter dem deretter (ett angretrinn).

- `Select objects to cut` (hoppes over når objekter allerede er valgt)

### COPYBASE

Kopierer objekter til utklippstavlen med et basispunkt du velger. Innliming plasserer det punktet.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, eller {{ui:Lim inn}} i gruppen {{ui:Rediger}}. Kopien følger markøren, hengende fra nedre venstre hjørne av utstrekningen (eller fra midten, eller fra punktet i `COPYBASE`; se [CadCraft-innstillinger](topic:settings)).

- `Specify insertion point`

De innlimte objektene er valgt. En blokk tegningen allerede har under samme navn, beholder denne tegningens definisjon.

Når et område kopiert i MarkupCraft er nyere enn det CadCraft kopierte (og yngre enn 6 timer), limer {{key:Mod+V}} og `PASTECLIP` i stedet inn det området. Se `PASTEAREA`.

### PASTEAREA

Alias: `PAREA`. {{ui:Lim inn et kopiert område}} i menyen {{ui:Mer}}. Limer inn et område kopiert med {{ui:Kopier område}} i MarkupCraft, som et bilde i sin virkelige størrelse. Se [Bilder i en tegning](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (bare når arket ikke hadde en tegningsskala): et tall, {{key:Enter}} for papirstørrelsen, eller `P`, deretter `First point on the pasted area`, `Second point on the pasted area` og deres virkelige avstand.

### PASTEORIG

{{key:Mod+Shift+V}}, eller {{ui:Lim inn på samme sted}} i menyen {{ui:Mer}}. Limer inn på koordinatene objektene ble kopiert fra. Spør ingenting.

### DUPLICATE

Alias: `DUP`. {{key:Mod+D}}, eller {{ui:Dupliser og flytt}} i menyen {{ui:Mer}}. En kopi av objektene følger pekeren fra der de er. {{key:Esc}} later ingenting bli igjen. Bruker ikke utklippstavlen.

- `Select objects to duplicate` (hoppes over når objekter allerede er valgt)
- `Specify where the copy goes (Esc leaves nothing)`: klikk, skriv et punkt, `@dx,dy` (fra der pekeren var), eller en avstand mot markøren.

### SELECT

Spør `Select objects` (med alle alternativene under), og lar det du valgte forbli valgt, for neste kommando eller for `P` senere.

### QSELECT

Alias: `QS`. I nettleseren, dialogen {{ui:Hurtigvalg}} (se [Velg objekter](topic:select-objects#select-by-a-rule-quick-select)). Uten den spør kommandolinjen `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` og `Enter value`. Treffene blir utvalget.

### SELECTSIMILAR

Alias: `SIM`. `Select objects [SEttings]` (eller det gjeldende utvalget): velger hvert objekt av samme type med samme lag og farge (og blokknavn, skravurmønster). `SE` spør `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, gjentas til {{key:Enter}}.

### FIND

Ingen alias; eller {{ui:Rediger}} › {{ui:Mer}} › {{ui:Finn og erstatt}}. I nettleseren, dialogen {{ui:Finn og erstatt}} (se [Legg til tekst og merknader](topic:text#find-and-replace-words)). Uten den: `Enter text to find`, deretter `Enter replacement text (Enter: select what is found)`. Ser i tekst, attributtverdier og måltekst, i den åpne fanen eller i utvalget.

### SELECTALL og DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) velger hvert objekt du kan redigere i den åpne fanen. `DESELECT` (alias `AI_DESELECT`, `SELECTNONE`; eller {{key:Esc}}) fjerner utvalget.

## Mål

### DIMLINEAR

Alias: `DLI`, `DIMLIN`. Horisontal eller vertikal avstand.

- `Specify first extension line origin [Select object]` (Enter eller `S`: `Select object to dimension`, deretter klikk en linje, bue, sirkel eller et segment av en polylinje)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` spør etter tekst (`<>` er den målte verdien), `H` og `V` låser retningen, `R` spør `Specify angle of dimension line <0>`.

### DIMALIGNED

Alias: `DAL`, `DIMALI`. Den sanne avstanden mellom to punkter.

- Origoer som i {{cmd:DIMLINEAR}}, deretter `Specify dimension line location [Text]`.

### DIMANGULAR

Alias: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Bue: dens vinkel. Sirkel: `Specify second angle endpoint`. Linje: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: klikk inne i vinkelen du vil måle.

### DIMRADIUS og DIMDIAMETER

Alias: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, deretter `Specify dimension line location [Text]`.

### DIMCONTINUE

Alias: `DCO`, `DIMCONT`. Fortsetter fra det siste lineære eller innrettede målet som ble laget (eller spør `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, gjentas til Enter.

### DIMBASELINE

Alias: `DBA`, `DIMBASE`. Som {{cmd:DIMCONTINUE}}, men hvert mål starter fra det første origoet og stables lenger ut.

### DIMORDINATE

Alias: `DOR`, `DIMORD`. `Specify feature location`, deretter `Specify leader endpoint [Xdatum/Ydatum/Text]`. Skriver hvor langt egenskapen er fra UCS-origoet langs X eller langs Y, på en hjelpelinje. En hjelpelinje som går mest opp eller ned, leser X; en som går til siden, leser Y. `Xdatum` og `Ydatum` fastsetter hvilken. Sett origoet først med {{cmd:UCS}} (uten et er det tegningens 0,0). Håndtakene flytter egenskapen, origoet og hjelpelinjens ende, og verdien følger. Lagres som et ekte ordinatmål i DWG og DXF. Avviser en hjelpelinjeende på selve egenskapen.

### DIMARC

Alias: `DAR`. `Select arc or polyline arc segment`, deretter `Specify arc length dimension location [Text]`. Måler langs buen (ikke korden) og skriver buesymbolet foran verdien. Avviser en full sirkel, en linje eller et rett segment i en polylinje. En DWG beholder det som et buelengdemål. En DXF beholder det som et vinkelmål med lengden som tekst, og CadCraft åpner det igjen som et buelengdemål.

### DIMJOGGED

Alias: `DJO`, `JOG`. `Select arc or circle`, `Specify center location override`, `Specify jog location`. Et radiusmål for en kurve hvis senter er langt unna eller utenfor arket: målelinjen starter fra punktet du gir i stedet for senteret, med et knekk i seg, og skriver fortsatt den sanne radiusen. En DWG beholder det som et knekt radiusmål. En DXF beholder det som et radiusmål, og CadCraft åpner det knekt igjen.

### DIMJOGLINE

Alias: `DJL`. `Select dimension to add jog [Remove]`, deretter `Specify jog location (or press Enter)`. Setter et knekksymbol på linjen til et lineært eller innrettet mål, for å vise at avstanden ikke er tegnet i målestokk. Verdien endres ikke. `Remove` tar det av. Avviser andre typer mål.

### QDIM

Ingen alias. `Select geometry to dimension`, deretter `Specify dimension line position [Continuous/Staggered/Baseline/Ordinate/Radius/Diameter/datumPoint]`. Måler flere objekter i ett trinn, fra endene av linjer og polylinjesegmenter, sentrene til sirkler og buer, punkter og blokkreferanser. En posisjon over eller under objektene måler på tvers, og en ved siden av dem måler opp. `Continuous` kjeder punktene, `Baseline` måler alle fra det første, `Staggered` nester par fra midten og ut, `Ordinate` gir hvert punkt sin avstand fra datumet (`datumPoint` velger et nytt). `Radius` og `Diameter` målsetter hver sirkel og bue som velges. Modusen huskes. Alt det lager er ett angretrinn. Sier fra når det er færre enn to punkter, eller ingen buer eller sirkler for Radius og Diameter.

### DIMBREAK

Alias: `DBREAK`. `Select dimensions to add or remove breaks`, deretter `Break where other objects cross [Auto/Manual/Remove] <Auto>`. `Auto` lager et gap i mål- og hjelpelinjene der andre objekter krysser dem, og regner ut gapene på nytt når de objektene eller målet flyttes. `Manual` (ett mål) spør to punkter og lager et gap mellom dem. `Remove` fjerner alle gap. Gapet er 1,5 ganger målets teksthøyde.

### DIMSPACE

Ingen alias. `Select base dimension`, `Select dimensions to space`, `Enter spacing value or Auto <Auto>`. Flytter målelinjene til parallelle lineære og innrettede mål (eller vinkelmål om samme toppunkt), slik at de står like langt fra hverandre. Avstanden måles fra grunnmålet, og hver ligger på den siden den er. `0` setter dem på linje med grunnmålet. `Auto` er to ganger grunnmålets teksthøyde. Mål som ikke er parallelle med grunnmålet, blir stående.

### DIMINSPECT

Ingen alias. `Select dimensions`, `Inspection frame shape [Round/Angular/None/remove] <Round>`, `Enter label`, `Enter inspection rate <100%>`. Tegner en ramme rundt verdien med en merkelapp foran den og kontrollfrekvensen etter. `remove` tar rammen av. Toleransetekst blir sammen med verdien.

### DIMOVERRIDE

Alias: `DOV`, `DIMOVER`. `Enter dimension variable name to override or Clear`, `Enter new value for …`, igjen til Enter, deretter `Select dimensions`. Endrer disse innstillingene på de valgte målene bare. Målestilen endres ikke. Tar variablene som er et tall eller en bryter (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Clear` setter de valgte målene tilbake på sin stil. Avviser et navn som ikke er en slik variabel, og en verdi den ikke kan ta.

### DIMREASSOCIATE

Alias: `DRE`, `DIMREASSOC`. `Select dimensions`, deretter for hvert av dem dets origoer for hjelpelinjer (`Specify first extension line origin on an object`: fest til en ende eller midten av en linje, et hjørne på en polylinje, et senter; Enter holder det punktet fritt), eller for et radius-, diameter-, knekt radius- eller buelengdemål `Select arc or circle`. Målet er da knyttet til disse objektene: når de flyttes eller endrer størrelse, følger det med i samme angretrinn og måler på nytt. Å flytte et knyttet punkt for hånd, eller å slette objektet, avslutter knytningen. Knytningen lagres i DWG og DXF 2000 som CadCrafts egne data. Andre programmer ser et vanlig mål.

### DIMDISASSOCIATE

Alias: `DDA`, `DIMDISASSOC`. `Select dimensions`. Frigjør dem fra objektene de er knyttet til. Ingenting flyttes.

### CENTERMARK

Alias: `CM`, `DIMCENTER`, `DCE`. `Select circle or arc to add center mark`, igjen til Enter. Tegner et kryss i senteret og fire senterlinjer til like forbi kurven (linjetype CENTER), som vanlige linjer på gjeldende lag. Størrelsen følger pilstørrelsen og samlet skala i gjeldende målinnstillinger, og dreies med UCS. De følger ikke sirkelen hvis den flyttes.

### CENTERLINE

Alias: `CL`. `Select first line`, `Select second line`. Tegner en linje midt mellom to linjer (langs halveringslinjen når de møtes), litt lengre enn de er, i linjetype CENTER. En vanlig linje: den følger ikke de to linjene.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Ingen alias. Hver spør `Enter new value for … <current>` og setter den størrelsen for **nye** mål: samlet skala, teksthøyde, pilstørrelse, desimaler (opptil 8), mellomrom rundt teksten, forlengelse forbi mållinjen, forskyvning fra origoet. Se [Still inn målestørrelser](topic:dimension-settings).

### DIMLUNIT

Målinnstilling: formatet for nye mål alene (1 vitenskapelig, 2 desimal, 3 ingeniør, 4 arkitekt, 5 brøk).

### DIMSTYLE og -DIMSTYLE

Alias: `DST`, `DDIM`, `D`. Målstilbehandleren: {{ui:Gjør aktiv}}, {{ui:Ny…}}, {{ui:Endre…}}, {{ui:Gi nytt navn…}}, {{ui:Slett}}, {{ui:Sammenlign…}}, {{ui:Bruk på valgte}}. `-DIMSTYLE` på kommandolinjen: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Se [Still inn målestørrelser](topic:dimension-settings#named-dimension-styles).

### DIMEDIT og DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, deretter målene (eller de som allerede er valgt). New spør etter teksten (`<>` = målingen). Rotate for en vinkel (0 setter teksten tilbake). Oblique for vinkelen til hjelpelinjene fra X-aksen (Enter = ingen; bare lineære og innrettede mål). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Se [Still inn målestørrelser](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Alias: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, eller med mål valgt `Units in the text of the selected dimensions`. Skriver den målte lengden i den enheten med enheten etter (DIMLFAC og et DIMPOST-suffiks). `D` går tilbake til tegningens enheter. Se [Mål i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Alias: `RC`. Skriver `Arc length: … Type: …`, deretter `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rectangular spør `Specify opposite corner`. Polygonal `Specify next point (Enter closes the cloud) [Undo]`. Freehand følger pekeren til et klikk eller {{key:Enter}}. `O` spør `Select object` og `Reverse direction? [Yes/No] <N>`, og gjør objektet om til skyen. `A` spør `Specify the length of each arc`. `R`, `P` og `F` velger typen for neste sky. Resultatet er en lukket polylinje av buer.

### MLEADER

Alias: `MLD`; eller {{ui:Hjelpelinje}}. `Specify leader arrowhead location [Arrowhead size/Landing distance/Block]`, `Specify leader landing location`, deretter teksten i boksen på stedet (eller, uten den, `Enter text (an empty line ends)`). `Block` spør først etter et blokknavn, og flerhjelpelinjen viser den blokken i stedet for tekst. Flere hjelpelinjer: {{cmd:MLEADEREDIT}}. Lagres som en ekte flerhjelpelinje i DWG. DXF beholder linjene, pilspissen og teksten den tegner.

### MLEADEREDIT

Alias: `MLE`. `Select a multileader`, deretter `Specify leader arrowhead location [Remove leaders/Block content/Text content]`: hvert punkt legger til en hjelpelinje fra en ny pilspiss til samme landing, til Enter. `Remove leaders` tar så bort hjelpelinjen du klikker på (en flerhjelpelinje beholder minst én). `Block content` spør etter et blokknavn og viser den blokken i stedet for teksten (dens attributter spørres etter). `Text content` setter teksten tilbake. Hver hjelpelinje har sitt eget håndtak. En DWG beholder hver hjelpelinje og blokken i én flerhjelpelinje.

### MLEADERALIGN

Alias: `MLA`. `Select multileaders`, deretter `Select multileader to align to [Distribute/Spacing/Use current spacing]` og `Specify direction`. Flytter de andre flerhjelpelinjenes landinger (og deres tekst eller blokk) til linjen gjennom den valgte landingen i den retningen. Pilspissene blir der de peker. `Spacing` gir dem også lik avstand. `Distribute` spør to punkter og fordeler dem jevnt mellom. Krever minst to flerhjelpelinjer.

### MLEADERCOLLECT

Alias: `MLC`. `Select multileaders`, deretter `Specify collected multileader location [Vertical/Horizontal]` (Enter beholder den første sin plass). Lager én flerhjelpelinje av flere: blokkinnhold går inn i en ny blokk som holder hver blokk side om side eller under hverandre. Tekstinnhold blir én merknad med en linje for hver. Den første flerhjelpelinjen beholder sine hjelpelinjer. De andre fjernes. Avviser en blanding av tekst- og blokkinnhold.

## Tabeller

### TABLE

Alias: `TB`; eller {{ui:Merk}} › {{ui:Mer}} › {{ui:Tabell}}. Lager en tabell: ett objekt som du flytter, kopierer, roterer, skalerer og plotter som alt annet, med cellene beholdt som data.

- `Number of data rows or [Paste/File/Style] <3>`, deretter `Number of columns <3>`, `Text height` og `Top left corner of the table`. Tabellen får en tittelrad (én sammenslått celle) og en overskriftsrad over dataradene.
- `P`: en tabell fra regnearkceller på utklippstavlen (tekst med en tabulator mellom cellene). Å trykke {{key:Ctrl+V}} med slike celler på utklippstavlen gjør det samme, med mindre CadCrafts egen kopi er den nyere (eller CadCraft ikke kan se forskjellen: da limer den inn sin egen kopi og sier det). `F`: en tabell fra en `.csv`- eller tabulatorseparert fil. Den første raden blir overskriftsraden; kolonnebreddene passer teksten.
- `S`: velg tabellstilen for denne tabellen (se {{cmd:TABLESTYLE}}).
- Den avviser et rad- eller kolonneantall som ikke er et helt tall, og flere celler enn en tabell holder (2 000 rader, 200 kolonner, 40 000 celler).
- {{cmd:EXPLODE}} gjør en tabell om til linjer og tekst. Lagret som DWG er en tabell et ekte tabellobjekt som andre programmer kan redigere. Lagret som DXF er den en blokk som tegner den, og CadCraft åpner den igjen som en tabell.

### TABLEDIT

Alias: `TABLEEDIT`, `TABEDIT`; eller dobbeltklikk en celle. Redigerer en tabell.

- `Pick a cell to type in (Enter to finish) or [Row/Column/Size/Merge/Unmerge/Align/Height/Kind/CLear]`. Klikk en celle, eller skriv dens navn med en tabell valgt (`B3`: kolonne B, rad 3; tittelraden er rad 1). I nettleseren åpnes en boks over cellen: {{key:Enter}} beholder teksten, {{key:Tab}} går til neste celle, {{key:Alt+Enter}} starter en ny linje, {{key:Esc}} lar cellen være som den var.
- En tekst som starter med `=`, er en formel: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, med `+ - * / ^`, parenteser og funksjoner som `sqrt` og `round`. Cellen viser verdien. En formel som nevner sin egen celle, en celle utenfor tabellen eller en celle uten tall, viser `####`, og kommandolinjen sier hvorfor.
- `R` / `C`: `Insert` eller `Delete` rader eller kolonner ved en valgt celle (hvor mange, og over eller under, til venstre eller høyre). Formler følger cellene de nevner.
- `S`: kolonnens bredde og radens høyde. En rad er aldri lavere enn teksten krever. En valgt tabell har også et håndtak på hver kolonnes og hver rads kant.
- `M`: sammenslå fra en valgt celle til en annen. `U`: oppløs sammenslåing. `A`: justering (`TL` øverst til venstre … `MC` midt i midten … `BR` nederst til høyre). `H`: denne cellens egen teksthøyde (0 = stilens). `K`: gjør raden til en tittel-, overskrifts- eller datarad. `CL`: tømmer cellen.
- Den avviser en tabell på et låst lag, å slette hver rad eller kolonne, og en sammenslåing som ville kutte en annen sammenslått celle i to.

### TABLESTYLE

Alias: `TS`. Lister tabellstilene med hvor mange tabeller som bruker hver, deretter `Table style: [New/Set/Edit/Delete/Apply]`.

- En stil holder teksthøyden og justeringen for tittel-, overskrifts- og datarader, cellemargen, og hvilke kanter som tegnes (ytre, mellom radene, mellom kolonnene).
- `N` lager en stil fra den gjeldende og gjør den til gjeldende. `S` setter gjeldende stil (nye tabeller tar den). `E` redigerer en: tabeller som bruker den, tegnes på nytt. `A` gir valgte tabeller gjeldende stil. `D` sletter en (ikke Standard, ikke den gjeldende; tabeller som brukte den, beholder sitt utseende).
- Stiler lagres med tegningen (DWG og DXF).

### TABLEEXPORT

Lagrer det en tabell viser, som en CSV-fil (en formel som sin verdi). `Select a table`, eller velg en først. Tekstceller som starter med `=`, `+`, `-` eller `@`, får et innledende `'`, så et regneark ikke kjører dem.

### TABLEPASTE

Alias: `PASTETABLE`. Lager en tabell fra regnearkceller på utklippstavlen, og spør deretter etter dens øvre venstre hjørne. Det samme som {{cmd:TABLE}} › `Paste`.

## Data og felter

### DATALINK

Alias: `DL`. `Data link: [New/List/Remove] <New>`. `N` spør etter en CSV-fil, plasserer en tabell av den og husker filens navn. `L` lister lenkene med deres fil, størrelse, når de ble lest og hvor mange tabeller som bruker dem. `R` fjerner en lenke (tabellene blir som vanlige tabeller).

### DATALINKUPDATE

Alias: `DLU`. Leser en datalenkes fil på nytt og fyller tabellene som er lenket til den på nytt (rader og kolonner legges til eller fjernes for å passe). En nettleser kan ikke åpne en fil av seg selv, så den ber deg velge filen igjen. Med flere lenker spør den hvilken.

### FIELD

Plasserer et felt i tegningen: tekst som regner seg ut selv. `Field: [Date/Filename/Sheet/Property/Object/Expression/Code] <Date>`:

- `D`: nå, eller den lagrede, opprettede eller plottede datoen, og et format (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: filnavnet, med eller uten endelsen. `S`: arkets nummer, tittel, eller hvor mange ark det er. `P`: en tegningsegenskap ved navn (se {{cmd:DWGPROPS}}). `O`: velg et objekt, deretter hva som skal leses (areal, lengde, omkrets, radius, diameter, lag, navn, x, y, tekst, rotasjon, farge) og desimalene. `E`: en formel. `C`: en tekst med koder skrevet slik de er, for eksempel `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Deretter `Select a text, a table cell or a block with attributes to put it in (Enter: a new text)`: en valgt tekst får feltet lagt til etter det den inneholder. En tabellcelle likeså. En blokkreferanse spør hvilken attributt. {{key:Enter}} spør en høyde og et punkt for en ny tekst.
- På skjermen har et felt en lysegrå bakgrunn. En plott og en PDF har aldri den. Å skrive over feltets tekst for hånd, avslutter feltet. Et felt som ikke kan regnes ut, viser `####`.
- Et objekts felt finner sitt objekt med nøkkelen CadCraft holder på objekter (Innstillinger › CadCraft › Sammenslåingsvennlige filer). Med nøkler slått av avviser den.

### UPDATEFIELD

Alias: `UPDATEFIELDS`. `Select the objects whose fields to update (Enter: every field) or [Settings]`. `S` angir når felt oppdateres av seg selv: skriv bokstavene i `O` open, `S` save, `P` plot, `R` regen (alle fire for å begynne med), eller `NONE`.

### DWGPROPS

Alias: `DRAWINGPROPS`. Lister tegningens egenskaper, deretter `Change: [Title/Subject/Author/Company/Keywords/coMments/cUstom/Remove/eXit]`. De seks første er dem panelet {{ui:Tegningsdetaljer}} viser. `U` legger til ditt eget navn og din egen verdi, `R` fjerner en. Felt leser dem (`%<prop:title>%`, `%<prop:Client>%`) og følger med en gang. Den avviser et eget navn som er et av de innebygde, eller inneholder `%`, `<`, `>`, et anførselstegn eller en skråstrek.

## Parametrisk

Se [Betingelser for en tegning](topic:constraints) og [Bruk parametere og ligninger](topic:parameters). Betingelser virker på fanen {{ui:Modell}}.

### GEOMCONSTRAINT og GC-kommandoene

Alias `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, deretter den kommandoens ledetekster.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (den andre flyttes).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT og DC-kommandoene

Alias `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (et tall, et uttrykk, eller `name=expression`).
- {{cmd:DCALIGNED}}: som over, med `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` spør avstands- og vinkeltoleransene.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Select objects`. Deres betingelser går.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Select objects [Showall/Hideall]`, deretter `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS og -PARAMETERS

{{cmd:PARAMETERS}} (aliasene `PAR`, `PARAM`) åpner panelet {{ui:Parametere}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Laster ned en makro (.swb) som bygger modellen på nytt som én betinget skisse i SolidWorks. Se [Flytt skisser til og fra andre delmodelleringsprogrammer](topic:solidworks-sketches).

## Blokker

### ANNOSCALE

Alias: `CANNOSCALE`. Sier tegningens merkingsmålestokk og hvor mange annoterende objekter den holder. Deretter spør den `New annotation scale`: skriv `1:50`, `1:100`, `2:1`, et bart tall (`50` er 1:50) eller navnet på en av tegningens egne målestokker. Hver annoterende tekst og hvert annoterende mål endres slik at det skrives ut i samme størrelse i den nye målestokken, i ett angretrinn. Objekter som ikke er annoterende, blir i fred, og det samme gjelder et objekt som har en liste over målestokker uten den nye (se {{cmd:OBJECTSCALE}}). Se [Enheter, papirstørrelser og målestokker](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Alias: `OBJSCALE`. `Select annotative objects`, deretter `Annotation scales of the selected objects [Add/Delete/Current scale/List/eXit] <Add>`. En annoterende tekst eller et annoterende mål holder en liste over merkingsmålestokker. `Add` og `Delete` spør en målestokk (`1:50`, `2:1`, et bart tall, eller navnet på en av tegningens egne målestokker). `Current scale` legger til tegningens merkingsmålestokk. `List` skriver ut hver objekts målestokker. Et visningsområde hvis målestokk står i et objekts liste, viser objektet i den størrelsen som skriver ut papirhøyden i den målestokken, på skjermen og i plottene. Den siste målestokken kan ikke slettes. Objekter som ikke er annoterende, utelates: slå på Annoterende i Egenskaper først. Listene lagres i DWG og DXF som CadCrafts egne data. Se [Enheter, papirstørrelser og målestokker](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Alias: `ANNOALL`. `Show annotative objects at all scales [ON/OFF]`. På (slik en tegning starter): et annoterende objekt vises også i et visningsområde, eller i modellen, hvis målestokk ikke står i dets liste, i størrelsen det har. Av: det vises ikke der, og kan ikke velges i modellen. Bryteren er ett angretrinn; den lagres ikke i filen.

### SCALELISTEDIT

Alias: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` til {{key:Enter}}. Add: `Scale name`, `Paper units`, `Drawing units`. Edit og Delete spør etter målestokkens navn. Tegningens egne målestokker blir med i visningsområdets og plottets målestokklister, og lagres med tegningen. Se [Enheter, papirstørrelser og målestokker](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT og PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: punkter kurven går gjennom; `Close`, `Undo`, deretter `Start tangent` og `End tangent` (et punkt, eller {{key:Enter}}). Method › Control vertices spør en grad (1 til 5) og tegner fra en kontrollmangekant. Object gjør polylinjer om til splines gjennom hjørnene deres. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` for flere objekter. Linjer, buer og splines tilbys først som polylinjer. Se [Splines og polylinjer](topic:splines).

### BLOCK

Alias: `B`, `BMAKE`.

- `Enter block name`. Hvis den finnes: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. De erstattes av én referanse til den nye blokken.

### WBLOCK

Alias: `W`, `-WBLOCK`. Skriver en blokk, noen objekter eller hele tegningen som en ny DWG- eller DXF-fil. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objects**: `Specify insertion base point` (det blir den nye tegningens origo), `Select objects`, deretter `File format [DWG/DXF/R12 DXF]` og `File name for the new drawing`, deretter `What to do with the objects [Retain/Convert to block/Delete]`. Convert erstatter dem med én referanse til en blokk med filens navn. Delete fjerner dem.
- **Block**: `Block to write out`. Blokkens egne objekter, med dens basispunkt som origo, også innkapslede blokker.
- **Entire drawing**: hvert objekt i modellrommet. Ark skrives ikke. Bruk {{cmd:SAVEAS}} for en kopi som beholder dem.

Den nye filen holder bare lagene, linjetypene, tekst- og målstilene og blokkene objektene bruker, og tegningens enheter. Versjonen av en DWG er den {{cmd:SAVEAS}} sist brukte. I nettleseren lastes filen ned. I Studio åpnes lagre-dialogen.

### ATTDEF

Alias: `ATT`, `DDATTDEF`, `-ATTDEF`; eller {{ui:Blokker}} › {{ui:Mer}} › {{ui:Definer attributt}}. Skriver ut modusene, deretter `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value` når den er konstant), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} tar attributtdefinisjoner inn i blokken.

### EATTEDIT og ATTEDIT

`EATTEDIT` (`DDATTE`, eller dobbeltklikk en referanse med attributter; {{ui:Blokker}} › {{ui:Mer}} › {{ui:Rediger attributter}}): `Select a block reference with attributes`, deretter dialogen {{ui:Rediger attributter}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): den samme referansen, deretter `<prompt> (<TAG>) <value>` for hver attributt. {{key:Enter}} beholder en verdi. Se [Attributter](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Verdiene beholdes. Nye attributter får sin standard, fjernede går, og plasseringer tilbakestilles.

### BATTMAN

{{ui:Blokker}} › {{ui:Mer}} › {{ui:Attributtbehandler}}. Dialogen: blokk, attributter (merkelapp, ledetekst, standard, moduser, rekkefølge), {{ui:Oppdater referansene (verdiene beholdes)}}, {{ui:Bruk}}.

### REFEDIT og REFCLOSE

{{ui:Blokker}} › {{ui:Mer}} › {{ui:Rediger på stedet}}. `REFEDIT`: `Select the block reference to edit in place` (eller utvalget). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`. Linjens {{ui:Lagre blokken}} og {{ui:Forkast}} gjør det samme. Hele redigeringen er ett angretrinn. Se [Attributter](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: om trykket i et pennestrøk setter linjevekten til det {{cmd:SKETCHFIX}} og {{cmd:SKETCHLIVE}} lager (på fra begynnelsen). Se [Skisser med penn](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Alias: `OFFSTD`. Sier hvilken kontorstandard som gjelder for denne tegningen, og hvor den kommer fra: tegningens egen post, teamets felles standard, eller dine standardinnstillinger (tekstlengder `all.anno.*`). Uten noen er det programmets egne størrelser. `[Import/Layers/Title block/Clear/eXit]`: `Import` leser en `cc-office-standard` .json-fil (posten SuperCad og BimCraft skriver) inn i denne tegningen, lagret med den i DWG og DXF. `Layers` legger til kontorlagene tegningen mangler, i ett angretrinn, og fjerner aldri ett. `Title block` lister kontorets felt med denne tegningens egne verdier. `Clear` fjerner tegningens egen post. Høyder for annoterende tekst og mål følger standarden som gjelder. Se [Enheter, papirstørrelser og målestokker](topic:units-papers-scales).

### BPARAMS

Alias: `BPM`, `BLOCKPARAMS`. Åpner parameterbehandleren for blokken i blokkredigeringen, for den valgte referansens blokk, eller for blokken du navngir (`Block name`): parametere med formler, flere synlighetsparametere med sine tilstander, og den valgte referansens egne verdier og tilstander. Se [Egne parametere og synlighetstilstander](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` gjør det samme på kommandolinjen: `[Parameter/Visibility/State/Assign/Reference/Done]`.

### BEDIT og BCLOSE

`BE`; eller {{ui:Blokker}} › {{ui:Mer}} › {{ui:Rediger blokk}}. `Enter block name to edit <the selected reference's block>` åpner blokkredigeringen. `BCLOSE` spør `Close the block editor on "…" [Save/Discard] <Save>`. Bannerets {{ui:Lagre blokk}} og {{ui:Forkast endringer}} gjør det samme. Alt som gjøres i redigeringen, er ett angretrinn.

### VIEWBASE

Alias: `FLATSHOT`. En flat 2D-visning av volumlegemene på 3D-fanen: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, en skala (`1:20`, `2:1`; {{key:Enter}} tar den som passer arket), deretter visningens senter. Én blokkreferanse. Synlige kanter på VIEW-VISIBLE, skjulte stiplet på VIEW-HIDDEN. Se [Flate visninger på et ark](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Alias: `-PUBLISH`; eller {{ui:Alle ark i én PDF}} i dialogen {{ui:Plott til PDF}}. `Sheets to plot [All/Some]`: {{key:Enter}} plotter hvert ark, `S` spør etter navn skilt med komma. Én PDF, en side og et bokmerke per ark. Se [Hvert ark i én PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Alias: `SSM`, `SHEETSETMANAGER`. Tar deg til avsnittet {{ui:Arksett}} i venstre panel: ark fra mange tegninger, nummerert og med tittel. Deres tegningshoder fylles fra settet, og settet publiseres som én PDF. Se [Arksett](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): velg en DWG eller DXF, deretter dens innsettingspunkt. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`. Med mer enn én lenke, velg en av dens referanser, eller skriv `N` og dens navn. Se [Lenkede tegninger](topic:files#linked-drawings-external-references).

### COUNT

Alias: `BCOUNT`; eller {{ui:Blokker}} › {{ui:Mer}} › {{ui:Tell blokker}}. `Select a block reference to count, or [All/Export] (Enter: All)`: et valg velger og teller hver referanse til den blokken i dette rommet. {{key:Enter}} eller `A` lister dem alle. `E` og så `C` (tellinger) eller `A` (attributter) laster ned en CSV. Se [Tell blokker og eksporter en tabell](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Alias: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (store og små bokstaver spiller ingen rolle). `F` spør etter en DWG eller DXF, deretter hele tegningen eller én av dens blokker. Et navn som allerede er brukt, spør {{ui:Behold eksisterende}} eller {{ui:Gi nytt navn}}. `L` åpner biblioteksruten.
- `Specify insertion point [Scale/Rotate]`. `S` spør `Specify scale factor`, `R` spør `Specify rotation angle`. Begge huskes.
- Når blokken allerede står ved siden av objekter som gjentas andre steder uten den, sier en linje hvor mange steder som foreslås. Ledeteksten får `suGgested`: `G` viser dem, og du klikker nær en for å sette blokken der. `A` gjelder alle, og {{key:Enter}} går tilbake. De tar rotasjonen til naboene og standardverdiene for attributter. Tegninger med over 20 000 objekter i det åpne rommet blir ikke søkt gjennom.
- Deretter `Enter <prompt> (<TAG>) <default>` for hver attributt blokken ber om. Se [Blokkattributter](topic:attributes).

### LIBRARY

Alias: `LIB`. Åpner bibliotekspanelet: plasser elementer, se etter oppdateringer, kildehenvisninger. Ingen spørsmål. Se [Sett inn fra en fil eller biblioteket](topic:insert-from-file-and-library).

### STEELMEMBER

Alias: `SMEMBER`; eller {{ui:3D-stav}} på bibliotekets fane {{ui:Standard}}. `Section size <W12x26>` (slik fanen lister den), deretter `Start point [Column]` og `End point`: en solid stav på 3D-fanen mellom de to punktene, stående på bakken. `C` spør etter søylens basispunkt og dens høyde. Ett angretrinn. Se [Plasser stålprofiler og standarddeler](topic:steel-and-standard-parts).

### PARTSLIST

Alias: `PLIST`. `Top left corner of the parts list`, deretter `Text height <2.5>`: tegner en tabell over hver standarddel og stålprofil plassert fra biblioteket (elementnumre, antall, del, standard, størrelse, lengde, materiale, masse). Ett angretrinn. Se [Plasser stålprofiler og standarddeler](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Alias: `PU`. Fjerner blokkdefinisjoner som ingenting bruker. Ingen spørsmål.

### DELBLOCKS

Eller {{ui:Blokker}} › {{ui:Mer}} › {{ui:Slett blokker}}. `Select block to delete [Name/eXit]`: velg en blokkreferanse, eller `N` for listen over blokker med et filter (velg flere), eller `X` / {{key:Enter}} for å avslutte. Hver referanse går — i modellen, på hvert ark og inni andre blokker — og deretter definisjonen. Kommandolinjen sier hva som ble slettet, og hva som ikke kunne slettes. Blokker uten navn og lenkede tegninger tilbys ikke. Ledeteksten kommer tilbake for neste blokk. Hele kommandoen er ett angretrinn.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} limer inn det du kopierte ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) som én blokk: velg innsettingspunktet, og én referanse til en ny blokk legges der, valgt. Blokken får sitt eget navn (`A$C` og et tall). {{cmd:RENAME}} gir den ditt. Ett angretrinn fjerner referansen og blokken.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} spør etter blokken som skal erstattes, og blokken som skal settes i stedet (`?` lister blokkene). Deretter endrer den hver referanse i modellen, på hvert ark og inni andre blokker. Hver referanse beholder sin plass, skala, rotasjon, lag og verdiene til attributter som begge blokkene har. Attributter som bare den nye blokken har, starter på sine standarder, og den sier hvilke verdier som ble forkastet. Når ingenting bruker den gamle blokken lenger, tilbyr den å fjerne den. Den avviser lenkede tegninger og en erstatning som ville satt en blokk inni seg selv. Ett angretrinn.

### MINSERT

{{cmd:MINSERT}} plasserer en blokk i rader og kolonner: blokknavn, innsettingspunkt, skala, rotasjon, antall rader og kolonner, og avstandene mellom dem. Hele settet dreies med rotasjonen. Hver er sin egen referanse (10 000 på det meste), så hvilken som helst kan flyttes eller slettes etterpå.

### BLOCKSPALETTE

Alias: `BLOCKSPAL`; eller {{ui:Blokker}} › {{ui:Mer}} › {{ui:Blokkpanel}}. Viser panelet {{ui:Blokker}} med markøren i filteret. Hver blokk har et lite bilde, og de sist plasserte kommer først. De to knappene ved siden av filteret bytter mellom en liste og et rutenett av bilder. Klikk et bilde (eller {{ui:Sett inn}}) for å plassere blokken med {{cmd:INSERT}}, eller dra den inn i tegningen for å plassere den der du slipper.

{{ui:Biblioteker}}, under listen: {{ui:Legg til en tegning}} tar en DWG- eller DXF-fil du har selv og lister dens blokker med bilder, og hele tegningen som én blokk. Å plassere en kopierer dens definisjon (og blokkene den inneholder, og deres lag) inn i denne tegningen, som {{cmd:INSERT}}s alternativ `File` gjør. En blokk som allerede er her, med samme definisjon, brukes uten spørsmål. En med samme navn som er forskjellig, spør {{ui:Behold eksisterende}} eller {{ui:Gi nytt navn}}. I en nettleser blir filen liggende til siden lukkes. I CadCraft Studio lister {{ui:Legg til en mappe}} tegningene i en mappe, hver åpnet når du klikker den, og filer og mapper huskes. Det lille x-et fjerner et bibliotek fra listen. Filen blir ikke rørt. Det delte {{ui:Bibliotek}} er noe annet: se [Sett inn fra en fil eller biblioteket](topic:insert-from-file-and-library).

### BCONVERT

Eller {{ui:Blokker}} › {{ui:Mer}} › {{ui:Gjør gjentagelser om til blokker}}. Finner geometri som gjentas, og gjør hver kopi om til en referanse til én blokk.

- `Select the objects that repeat, or [Block]`: objektene i én kopi. `B` navngir i stedet en eksisterende blokk, for å finne løse kopier av objektene.
- `A copy may be: mirrored = No, scaled = No; layer, color, linetype and lineweight = Match … [Mirrored/Scaled/Properties]`: `M`, `S` og `P` bytter hva som teller som en kopi. {{key:Enter}} søker. Innstillingene huskes.
- `Name for the new block <Block1>`, deretter `Specify the block's base point` ({{key:Enter}} tar nedre venstre hjørne av utvalget).
- Den sier hvor mange andre sett objekter som har samme geometri, markerer alt den ville erstattet, og spør `Yes/No`.

En kopi er de samme objektene flyttet og dreiet i en hvilken som helst vinkel (og speilvendt eller skalert med én faktor når det er på). Hvert objekt må ha sin motpart, innenfor en milliondel av utvalgets størrelse. Hver referanse får sin egen rotasjon og skala (en speilvendt får en negativ Y-skala), og laget objektene deler. Objekter på låste lag blir i fred og telles. Den søker i det åpne rommet (modellen eller det åpne arket). Et veldig stort søk stopper ved en arbeidsgrense og sier det. Ett angretrinn.

### BSEARCH

Eller {{ui:Blokker}} › {{ui:Mer}} › {{ui:Finn blokker}}. `Find blocks by [Name/Attribute/Geometry] <Name>`:

- `N`: en del av et blokknavn, eller et mønster med `*` og `?`. Lister hver blokk med sine referanser her og i hele tegningen.
- `A`: en attributtverdi, eller `TAG=value`. Lister blokkene hvis referanser har den, med verdiene som ble funnet. Konstante attributter teller.
- `G`: velg objekter, eller én blokkreferanse, og blokkene hvis form er minst 85 % lik, listes, best først. Størrelse, rotasjon og speiling teller ikke. Målet sammenligner avstandene mellom punkter spredt langs omrissene, så den finner lignende former. Bruk {{cmd:BCONVERT}} for å finne nøyaktige kopier.

Referansene som finnes i det åpne rommet, velges og er klare for neste kommando.

### BREPLACE

Eller {{ui:Blokker}} › {{ui:Mer}} › {{ui:Erstatt blokker}}. `Replace [Selected/All]`: `S` erstatter blokkreferansene du velger med blokken du navngir. `A` spør etter en blokk og dens erstatning, og endrer hver referanse, som {{cmd:BLOCKREPLACE}} gjør (samme kode). En referanse beholder sin plass, skala, rotasjon, lag og verdiene til attributter som begge blokkene har. Verdier den nye blokken ikke har plass til, forkastes og nevnes. `?` lister blokkene. Ett angretrinn.

### DATAEXTRACTION

Alias: `EATTEXT`, `DX`; eller {{ui:Blokker}} › {{ui:Mer}} › {{ui:Dataekstraksjon}}. Lister blokker, deres attributter og objektegenskaper som en tabell eller en CSV-fil.

- Virker på utvalget, eller spør `Select objects (Enter: everything in this space)`.
- `List: [Blocks/Objects/All]` når utvalget har både. Blokker uten navn, tabeller og materiallister blir aldri listet.
- Den skriver ut kolonnene å velge mellom (navn, type, lag, X, Y, rotasjon, skala, lengde, areal, farge, linjetype, rom, og én per attributtmerkelapp), deretter `Columns, by name or number with commas between`. {{key:Enter}} tar de med stjerne: navnet og hver attributt for blokker, og type, lag og lengde for objekter.
- `Put identical rows together with a count? [Yes/No] <Yes>`, deretter `Put the list in a: [Table/Csv] <Table>`. En tabell er en vanlig tabell ({{cmd:TABLEDIT}} redigerer den), og den er ikke levende: kjør kommandoen på nytt etter at tegningen endres.
- Den avviser en kolonne som ikke står i listen. En tabell holder 1 999 datarader. En CSV-fil tar alle.

### COUNTTABLE

Teller blokkreferansene i utvalget (eller i det åpne rommet), og legger tallene i en tabell (`Block`, `Count`) eller en CSV-fil. For en telling som følger tegningen av seg selv, se {{cmd:BOMTABLE}}.

## Ark og plotting

### LAYOUT

Alias: `LO`, `NEWLAYOUT`; eller {{ui:+}}-knappen under tegningen. Et nytt ark med en ramme, et tegningshode og ett visningsområde, på ISO A3 (eller Tabloid for tegninger i tommer eller fot). Ingen spørsmål.

### MVIEW

Alias: `MV`. Bare på et ark ({{cmd:VPORTS}} på et ark gjør det samme).

- `Specify corner of viewport [Polygonal/Object]`, `Specify opposite corner`. Visningsområdet viser hele modellen i en standard målestokk.
- `P` (Polygonal): klikk hjørnene av omrisset (`Undo`, `Close`), {{key:Enter}} når du er ferdig. Den avviser færre enn tre hjørner.
- `O` (Object): `Select a closed object for the viewport's outline`: en lukket polylinje, en sirkel eller en ellipse på arket. Visningsområdet tar sin form (kurver som korte rette biter). Objektet blir som det var. Den avviser et objekt som ikke er lukket.

### VPCLIP

Klipper et visningsområde som allerede er på arket. `Select viewport to clip` (eller velg det først), deretter `Select the object to clip to [Polygonal/Delete]`:

- Klikk en lukket polylinje, sirkel eller ellipse, eller {{key:Enter}} (eller `P`) for å klikke hjørnene i en mangekant.
- `D` (Delete, tilbys når visningsområdet er klippet) gjør det til et rektangel igjen: boksen rundt omrisset det hadde.
- Det visningsområdet viser, flyttes ikke på papiret, og dets målestokk forblir den samme. Modellen tegnes og plottes bare inne i omrisset, og rammen følger den. Ett angretrinn.
- Et klippet visningsområde har et håndtak i hvert hjørne av sitt omriss, i tillegg til senteret og de fire hjørnene i sin boks (å dra et boks-hjørne strekker omrisset med det). Egenskaper viser Omriss: Rektangel, eller Klippet med antall hjørner.
- DWG- og DXF 2000-filer beholder omrisset for CadCraft. Andre programmer åpner visningsområdet som rektangelet rundt det. DXF R12 beholder bare rektangelet.
- På modellfanen sier den at visningsområder er på ark.

### VPORTS

Alias: `VIEWPORTS`. {{cmd:SPLIT}} er det samme også fra et ark. {{ui:Visning}} › {{ui:Mer}} › {{ui:Del side ved side}}, {{ui:Del over hverandre}}, {{ui:Fire ruter}} og {{ui:Én rute}} kjører den. På modellen: `Enter number of panes [SIngle/2/3/4] <3>`. `2` spør `[Horizontal/Vertical] <Vertical>` (Vertical = side ved side), og `3` spør `[Left/Right] <Right>` (der den store ruten går). Hver rute beholder sin egen visning og sitt eget rom. Et klikk gjør en rute aktiv. På et ark er det {{cmd:MVIEW}}. Se [Del skjermen](topic:split-screen).

### VPVIEW

Ingen alias. Bare på et ark.

- `Select viewport` (hoppes over hvis ett er valgt), deretter på modellen: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Ingen alias. Et koordinatsystem du selv lager, ikke en redigering. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: et punkt er et nytt origo, deretter `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: origo, et punkt på den positive X-aksen, et punkt på den positive Y-siden. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` og et navn. Visningen dreies slik at den nye X-aksen er vannrett. Se [Snu visningen og bruk dine egne koordinater](topic:ucs-and-turned-view).

### PLAN

Ingen alias. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: snur den aktive rutens visning slik at UCS-ens X-akse (eller verdenens) er vannrett. Ingenting i tegningen flyttes.

### TURNLEFT, TURNRIGHT, TURNWORLD

Ingen alias; eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Drei visningen 90° til venstre}}, {{ui:Drei visningen 90° til høyre}}, {{ui:Tilbake til verden}}. Det samme som `UCS Z -90`, `UCS Z 90` og `UCS W`, med visningen som følger.

### VPLAYER

Ingen alias. På et ark, eller inne i et visningsområde. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T` og `R` spør etter lagnavn (komma, og jokertegnene `*` og `?`), deretter visningsområder `[All/Select/Current] <Current>`. Reset setter hvert lag tilbake til sin standard «frosset i nye visningsområder». `V` setter den standarden (`[Frozen/Thawed]`), som {{cmd:MVIEW}} bruker. `?` lister lagene som er frosset i det gjeldende visningsområdet. Kolonnen for visningsområder i Lag-panelet gjør det samme for ett visningsområde. Se [Frys et lag i ett visningsområde](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Alias: `MS`; eller dobbeltklikk inne i et visningsområde. Bare på et ark. Arbeid på modellen gjennom et visningsområde: det valgte, det eneste på arket, eller `Click inside the viewport to work in`. Panorering og zoom inni endrer visningsområdets visning. Et skjermlåst et beholder den, og arket flyttes i stedet. Den nye visningen skrives som ett angretrinn. Se [Arbeid på modellen gjennom et visningsområde](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Alias: `PS`; eller dobbeltklikk utenfor visningsområdet, eller klikk en fane under tegningen. Tilbake til arket.

### PLOT

Alias: `PRINT`, `PUBLISH`, `EXPORTPDF`; eller {{key:Mod+P}}. Åpner dialogen {{ui:Plott til PDF}}. Se [Plott til PDF](topic:plot-pdf).

### PLOTSTYLES

Alias: `STYLESMANAGER`, `PSTABLES`; eller {{ui:Rediger tabeller…}} i dialogen {{ui:Plott til PDF}}. Åpner {{ui:Plottestiltabeller}}: hva hver farge skrives ut som (farge, gråtone, blekk, linjevekt), lagret med tegningen. Se [Plottestiltabeller](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} flytter objekter mellom et ark og modellen gjennom et visningsområde, skalert og dreiet slik at de ser like ut fra den andre siden. På et ark velger du objekter, og de går til modellen (velg visningsområdet når arket har flere). Mens du arbeider på modellen gjennom et visningsområde ({{cmd:MSPACE}}), kommer de valgte objektene til arket. Den sier hvor mange ganger større eller mindre de ble. Visningsområder blir på sitt ark. Ett angretrinn.

### ISODRAFT

{{cmd:ISODRAFT}} slår isometrisk tegning `ON` eller `OFF`, eller går rett inn på planet `Left`, `Top` eller `Right`. Mens den er på: Ortho ({{key:F8}}) holder linjer langs planets to akser (venstre: 90° og 150°; topp: 30° og 150°; høyre: 30° og 90°). Polarsporing ({{key:F10}}) følger de samme aksene. Fang til rutenett ({{key:F9}}) bruker det isometriske rutenettet, og rutenettet ({{key:F7}}) tegnes med linjer på 30°, 90° og 150°. {{cmd:ELLIPSE}} får `Isocircle`: gi et senter og en radius (eller `Diameter`), så tegner den ellipsen en sirkel viser seg som på det gjeldende planet. Tegningen forblir flat: dette er hjelpemidler for å tegne et bildeaktig oppriss, ikke en 3D-modell. Innstillingen gjelder for denne økten og lagres ikke i filen.

### ISOPLANE

{{cmd:ISOPLANE}} velger planet isometrisk tegning arbeider på: `Left`, `Top` eller `Right`. Enter går til neste plan. Mens isometrisk tegning er på, gjør {{key:F5}} det samme midt i en kommando. Mens den er av, overlates {{key:F5}} til nettleseren.

## Forespørsel

### CAL

Skriver ut verdien av en beregning, slik den leses overalt en lengde skrives.

- `Expression`: skriv den, for eksempel `12'6"+3/4"` eller `(24'-0")/3`, og trykk {{key:Enter}}. CadCraft skriver `= 12'-6 3/4"   (150.75 drawing units)`. Se [Aritmetikk i en skrevet verdi](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Alias: `DI`; eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Mål avstand}}.

- `Specify first point`, `Specify second point`. Skriver avstand, vinkel, Delta X og Delta Y.

### AREA

Alias: `AA`; eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Areal}}. Skriver ut areal og omkrets.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Klikk eller skriv hjørner. Ved `Specify next point (Enter closes) [Undo]` trykker du {{key:Enter}} for å lukke omrisset. `U` tar tilbake det siste hjørnet.
  - {{key:Enter}} eller `O`, deretter `Select object`: en sirkel (skriver ut omkretsen), en ellipse, en polylinje (en åpen lukkes med en rett linje for arealet, og lengden skrives ut), eller en skravur (hull trekkes fra).
  - `A` (Add area) og `S` (Subtract area) holder en løpende sum. Ledeteksten starter med `(ADD mode)` eller `(SUBTRACT mode)`, hvert område legges til eller trekkes fra, og `Total area = …` skrives ut etter hver. I disse modusene velger `O` objekter til {{key:Enter}}, og {{key:Enter}} ved den første ledeteksten avslutter kommandoen.

### MEASUREGEOM

Alias: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`. Etter hver måling spør den igjen, med `eXit` som standard.

`Quick` måler rundt pekeren mens du beveger den: avstanden til nærmeste objekt til høyre, over, til venstre og under (langs aksene i gjeldende UCS). Den tegnes mens du går, og vinkelen der to av disse naboene er rette og møtes, vises også. Et klikk skriver de fire avstandene, den frie bredden og høyden og vinklene til historikken. Enter går tilbake til alternativene. Den leser det som er på skjermen.

- `D`: to punkter, som {{cmd:DIST}}.
- `R`: `Select arc or circle`. Skriver ut radius og diameter.
- `A`: en bue (dens innsluttede vinkel), en linje og deretter en andre linje (vinkelen mellom dem, mot deres fjerne ender), eller {{key:Enter}} og tre punkter (toppunkt, deretter de to endene).
- `AR`: som {{cmd:AREA}}, ett område.

### ID

Ingen alias. `Specify point`. Skriver ut dets X og Y.

### LIST

Alias: `LI`, `LS`. `Select objects`. Skriver ut hvert objekts type, lag og hovedmål.

### MASSPROP

{{cmd:MASSPROP}} gir tverrsnittsegenskapene til områdene og de lukkede objektene du velger, samlet: areal, omkrets, avgrensningsboks, tyngdepunkt, treghetsmomenter om X- og Y-aksene gjennom origoet, treghetsproduktet, treghetsradier, de samme momentene om tyngdepunktet, og hovedmomentene med retningene til deres akser. Hull i en region teller som hull. Tallene er i tegningsenheter og eksakte for konturer laget av linjer og buer. Ellipser og splines måles som korte rette segmenter, og den sier det. Etter rapporten spør den om den skal skrive den til en tekstfil. Objekter som ikke er lukket, blir utelatt, og den sier hvor mange.

## Visning, fil og annet

### ZOOM

Alias: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Klikk to hjørner for et vindu. `E`, `A` eller Enter: hele tegningen.
- `P` (Previous, eller {{ui:Forrige}} i verktøylinjen) går tilbake til visningen før, opptil 10 visninger per fane. En serie hjulsteg eller én panorering teller som én visning.
- Et tall som `2`, `2x` eller `0.5x` (eller `S` og så tallet) zoomer inn eller ut med den faktoren rundt midten av skjermen.
- `C` spør `Specify center point` og `Enter height or magnification (nX)`.

### PDFATTACH, PDFIMPORT og PDF-kommandoene

Alias: `PDFATT` for {{cmd:PDFATTACH}}, `PDFIM` for {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} legger en PDF-side under tegningen (fil, side, innsettingspunkt, skala, rotasjon). {{cmd:PDFIMPORT}} gjør en sides linjer, kurver, fyll og tekst om til tegningsobjekter på lag oppkalt etter PDF-en, i virkelig størrelse, en skrevet skala, eller skalert fra to punkter og en virkelig avstand. {{cmd:PDFCLIP}} klipper et underlag. {{cmd:PDFADJUST}} angir blekning, kontrast og monokrom, eller slår det av. {{cmd:PDFLAYERS}} bytter PDF-ens egne lag, og {{cmd:PDF}} gir CadCraft filene en tegnings underlag bruker igjen. Se [PDF-underlag](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Tegningsautofullføring: uten en kommando i gang viser et grått spøkelse hva tegningens egne mønstre sier kommer neste. {{cmd:AUTOCOMPLETE}} slår den `On` eller `Off` (også Innstillinger › CadCraft), eller `Show`er hva den ville foreslå nå. **Tab** tegner spøkelset som ett angretrinn, **Esc** avviser det til tegningen endres. Den finner tre ting i de nyeste objektene: neste kopi av noe tegnet to ganger eller mer med jevnt steg (stendere, søyler, et trappetrinns opptrinn og inntrinn), neste trinn i en polylinjetrapp, og manglende side av et rom eller en veggkjede. Midt i {{cmd:LINE}} eller {{cmd:PLINE}} er spøkelset **neste punkt**: neste trinn i en trapp (opptrinn, inntrinn, opptrinn …), det fjerde hjørnet i et rektangel, punktet som lukker det, eller ett steg til med lik størrelse. Før markøren nær det og trykk **Tab**, som om du hadde klikket der. Fortsett, eller trykk Enter. Regnes ut på denne datamaskinen etter regler, uten en modell.

### AUTOSHEET

Alias: `ASH`. Ark som legger seg ut selv. {{cmd:AUTOSHEET}} tar delene av tegningen (dine navngitte visninger, eller de separate delene av modellen, eller hele modellen), velger et papirformat (eller det du gir), og gir hver del en standardmålestokk (én for alle, eller den største hver kan ta). Deretter plasserer den visningene i rader på nye ark, med et tegningshode og en bildetekst (navn og målestokk) under hver. Det som ikke får plass på ett ark, får et eget ark. Ett angretrinn. Regnes ut på denne datamaskinen etter regler, uten en modell.

### PHOTOSKETCH

Alias: `PSK`. Skissebilde til tegning. Velg et bilde (JPEG, PNG eller TIFF) av en håndskisse på et ark papir. {{cmd:PHOTOSKETCH}} finner arkets fire hjørner, retter opp perspektivet, tar papirformatet du oppgir (`Paper`, eller det nærmeste standardformatet) og `Scale` for skissen (1 : n). Deretter tegner den pennlinjene om til linjer, buer og sirkler, med et lag for hver pennfarge (svart, rød, blå, grønn). Finner den ikke arkets kant, tar den hele bildet som arket og sier det. Tekst utelates. Ett angretrinn. Gjøres på denne datamaskinen med klassisk bildebehandling, uten en modell, og ingenting sendes noe sted. Se også kommandoene for skannede tegninger.

### AUTODIM

Alias: `ADIM`. Automatisk mål etter regler. {{cmd:AUTODIM}} setter mål på de valgte objektene (eller hele tegningen) etter deres nivå- og loddrette kanter: en kjede av mål langs sidene du velger (`Sides`), ett totalmål utenfor den, bredden av hver åpning (et gap mellom kollineære veggelinjer), en diameter for hver hulldimensjon, og med `Grid` avstanden mellom rutenettlinjer. Et mål som allerede er der, lages ikke på nytt. Ett angretrinn. Regnes ut på denne datamaskinen etter regler, uten en modell.

### GRIDMOVE

Alias: `GM`. Å flytte en rutenettlinje tar med settet. {{cmd:GRIDMOVE}} flytter en rutenettlinje (en linje på et lag hvis navn sier rutenett eller akse) og det som henger på den: vegger med en ende på linjen strekkes for å følge den, vegger langs den flyttes hele, søyler (blokkreferanser og sirkler på linjen), dens boble og merkelapp flyttes, og mål der punktene ligger på den, måler den nye avstanden. Gi to punkter (bare den delen som går tvers over linjen teller) eller `Distance`. Ett angretrinn tar alt tilbake. Gjort etter regler på denne datamaskinen.

### DETAILS

Alias: `DET`. Detaljer som finner deg. {{cmd:DETAILS}} beholder din firmas egne detaljer: `Add` legger en blokk fra denne tegningen i listen, `List` og `Remove` administrerer den, og `Find` rangerer dem for det som er valgt (eller det du tegnet sist) etter ordene på lagene, blokknavnene, skravurmønstrene og merknadene, mot hver detaljs navn og merknader. Slik finner en vindushode din sålbenkflashing. Velg et nummer og et punkt for å plassere den. Med `Hint` på (også Innstillinger › CadCraft) gir det å velge noe en detalj passer til, én linje i statuslinjen. Listen lagres i denne nettleseren, på denne datamaskinen, og den listen er den som søkes i. `Share` legger den også i din Dokumentmappe (`.cadcraft/firm-details.json`, med hver blokks tegning): `Pull` legger til det teamet ditt har og du mangler, `Push` legger til det du har og de mangler, `Both` gjør begge deler, og ingenting fjernes fra noen side. Åpne Dokumentmappen først ({{cmd:DOCUMENTS}}). Når den mappen er en Team Cloud Plan-mappe, deler hele teamet én liste. Et detaljelement i Bibliotek-panelet har en knapp **Legg til i min firmas detaljer** som legger det i samme liste. Gjort med ord på denne datamaskinen, uten en modell.

### SKETCHFIX

Alias: `SKF`. Pennskisser blir presis geometri. Trykk og dra ett frihåndsstrøk av gangen (penn, mus eller finger), og trykk deretter Enter. Hvert strøk leses som en linje, sirkel, bue, rektangel eller polylinje: nesten vannrette og loddrette linjer gjøres nøyaktig vannrette og loddrette, et lukket rundt strøk blir en sirkel, og et lukket strøk med fire rettvinklede hjørner blir et rektangel. Endene av strøkene trekkes sammen, og til endene som allerede er i tegningen. Ett angretrinn. Gjort etter regler på denne datamaskinen, uten en modell.

### SCANATTACH og kommandoene for skannede tegninger

Alias: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} har ingen. De virker på et bilde, ett angretrinn hver. {{cmd:SCANATTACH}} setter inn en PNG, JPEG, TIFF (én side eller alle) eller en PDF-side som er et bilde. {{cmd:SCANSCALE}} skalerer arket fra to valgte punkter og den virkelige avstanden. {{cmd:SCANALIGN}} flytter og dreier det til to punkter (`Scale the sheet to fit` Ja/Nei). {{cmd:SCANDESKEW}} viser vinkelen til arkets lange linjer, og dreier arket når du `Accept` eller gir en `Value`. {{cmd:SCANCLEAN}} gjør det svart-hvitt (`Threshold` Auto/Adaptive/Level, `Specks`) og `Run`. {{cmd:SCANCROP}} beholder et vindu. {{cmd:SCANERASE}} sletter et `Rectangle`, `Polygon` eller `Lasso`. {{cmd:SCANTRACE}} trekker linjer og buer om på et nytt lag (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`), og rapporterer hva den fant og hva den lot være som raster. {{cmd:SCANINFO}} lister den opprinnelige filen og trinnene. {{cmd:RASTERSNAP}} slår fang til linjene på skannede ark På eller Av. Se emnet Skannede tegninger og trekking.

### REGEN og REGENALL

Alias: `RE` for {{cmd:REGEN}}, `REA` for {{cmd:REGENALL}}. Bygger på nytt det som tegnes på skjermen fra tegningen: {{cmd:REGEN}} fanen du ser på (på et ark også modellen som visningsområdene viser), {{cmd:REGENALL}} hver fane, hver delt skjerm-rute og hver åpen tegning. Bruk dem når bildet virker utdatert etter en skriptet eller veldig stor endring, eller en assistent redigerte tegningen. Selve tegningen røres ikke, så det er ingenting å angre.

### NAMEDVIEW

Alias: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, deretter visningens navn. `S` lagrer visningen på skjermen, `W` et vindu du velger, `R` viser en lagret visning, `D` sletter en, `?` lister visningene i denne fanen. Lagring under et eksisterende navn erstatter det. Hver endring er ett angretrinn. Visninger hører til fanen de ble lagret på. DWG- og DXF-filer beholder dem (VIEW-tabellen). Et arks visninger kommer tilbake på første ark, siden filen ikke sier hvilket.

### UNDO og REDO

Alias: `U` for {{cmd:UNDO}}; {{cmd:REDO}} har ingen. Også {{key:Mod+Z}} og {{key:Mod+Y}}.

### LAYER

Alias: `LA`. Hopper til panelet {{ui:Layer}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` eller et navn (`?` lister dem: Continuous, tegningens egne, og DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE med deres `2` (halv) og `X2` (dobbel) størrelser). {{cmd:LWEIGHT}} (`LW`): linjevekten for nye objekter i mm, eller `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): tegningens linjetypeskala (kan angres). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — det samme som {{ui:LWT}}-knappen i statuslinjen. Se [Linjevekter og linjetyper](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, deretter det nye navnet. Objekter eller referanser følger med. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` til {{key:Enter}}, deretter `Select object on target layer or [Name]` og `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, deretter `Y`: laget og hvert objekt på det går (ikke lag 0, DEFPOINTS eller gjeldende lag). Ett angretrinn hver. Se [Organiser en tegning med lag](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Lag ved å velge objekter. Også i {{ui:Verktøy}}-menyen i Layers-panelet. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, deretter {{key:Enter}}: alle andre lag slås av. {{cmd:LAYUNISO}} slår dem på igjen. {{cmd:LAYOFF}} og {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (eller frosset), igjen og igjen. `U` tar tilbake det siste, {{key:Enter}} avslutter. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} slår på alle lag, {{cmd:LAYTHW}} tiner alle lag. Hver kommando er ett angretrinn. Se [Organiser en tegning med lag](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} starter en tom tegning, og {{cmd:OPEN}} åpner en DWG eller DXF. Hver åpnes i sin egen fane over tegningen (en urørt ny tegning brukes i stedet for en ny fane). Å lukke en fane med ulagrede endringer spør først. Se [Del skjermen](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, også {{key:Mod+S}}) laster ned en kopi i tegningens format: DWG hvis den ble åpnet fra en DWG, DXF hvis fra en DXF. En ny tegning bruker formatet sist valgt i Lagre som i denne nettleseren, ellers DWG.

{{cmd:SAVEAS}} (også {{key:Mod+Shift+S}}) åpner dialogen {{ui:Lagre en kopi som}}: velg {{ui:DWG}} (og dens {{ui:Version}}), {{ui:DXF R12}} eller {{ui:DXF 2000}}, og så {{ui:Lagre}}. Valget gjelder for denne tegningen og for nye tegninger i denne nettleseren.

{{cmd:DXFOUT}} laster alltid ned en DXF R12-kopi, uten å endre formatet {{cmd:SAVE}} bruker.

Se [Filer: hva som åpnes, hva som lagres](topic:files#saving).

### TOUR

Alias: `TUTORIAL`. Starter den seks-trinns førstetegningsrundturen på nytt. Se [Komme i gang](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Alias: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Se [Innstillinger](topic:settings#toolbar-position).

### COMMANDLINE

Alias: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: fester eller flyter kommandolinjen, gjør den til én linje, spør hvor mange historikklinjer som skal vises (0 til 12), eller åpner historikken. Se [Innstillinger](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: stolpene over tegningen slik de var, eller kompakte. Se [Innstillinger](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: trinnet {{ui:Polar}}-sporing lines opp ved (mer enn 0, opptil 180). Huskes i denne nettleseren.

### UNITS

Alias: `UN`. Hvordan lengder skrives og skrives inn.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architectural og Fractional: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 or 256)`. De andre: `Enter number of decimal places (0 to 8)`.

Nye mål følger det. Ett angretrinn. Samme som {{ui:Lengdeformat}} og {{ui:Presisjon}} i {{ui:Gjeldende innstillinger}}. Se [Fot og tommer](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Alias: `GDS`. Viser en IC-layout (en GDSII-strømfil). Laboratorieforsøk, kun for visning og måling.

- En filvelger tar en `.gds`-fil. Med flere toppceller: `Enter the top cell to draw`.
- Hvert lag og datatype blir et tegnelag (`GDS 1`, `GDS 2/5`). Referanser og matriser plasseres flatt, i filens brukerenhet (vanligvis mikrometer). Ett angretrinn. Ingenting simuleres eller kontrolleres, og filen skrives ikke tilbake.

### DIAGRAM

Alias: `TEXTDIAGRAM`, `T2D`. Et diagram fra tekst.

- En boks tar teksten (eller én linje med `;` mellom utsagnene på kommandolinjen): et Mermaid-flytdiagram, et PlantUML-komponentdiagram, D2 eller en fra-til-liste.
- `Specify the top left corner of the diagram`, deretter `Specify the text height`.

Blokker og koblinger er vanlige objekter på laget `Diagram`, og de velges når det er ferdig. Ett angretrinn. Se [Tegn et diagram fra tekst](topic:text-to-diagram).

### OLELIST

Alias: `OLES`. OLE-objektene en DWG bærer, som CadCraft ikke kan plassere selv.

- Lister hvert enkelt: nummer, type, størrelse, om det lagret et bilde.
- `Enter an option [Place/eXit] <eXit>`: Place spør etter nummeret, nedre venstre hjørne og bredden, og tegner en ramme med bildet. Ett angretrinn. Det beholdte objektet endres ikke. Se [Bilder](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Alias: `SHX`. Dine egne SHX-skrifter.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Mappe}} leser hver `.shx` i en mappe (CadCraft Studio; igjen ved hver oppstart). {{ui:Filer}} tar valgte filer (nettleseren). {{ui:Reverse}} legger ut en skrifts bokstaver baklengs. Tekststiler som navngir en innlastet skrift, tegnes i den. Se [Tegn tekst i dine egne SHX-skrifter](topic:shx-fonts).

### LIMITS

Hvor stor tegningen er ment å være.

- `Specify lower left corner or [ON/OFF] <current>`: et punkt, `ON` eller `OFF`.
- `Specify upper right corner <current>`.

Rutenettet fyller grensene. {{cmd:ZOOM}} All viser dem. Med grensene PÅ avvises et punkt utenfor (`**Outside limits`). Ett angretrinn. Lagres i DWG og DXF. Se [Angi tegningens grenser](topic:drawing-limits).

### AUNITS

Alias: `ANGUNITS`. Hvordan vinkler vises og skrives.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, eller for de to andre `Enter precision` (0 grader, 2 minutter, 4 sekunder, 5 til 8 desimaler av et sekund).

Ett angretrinn. Lagres i DWG og DXF. Samme som {{ui:Vinkelformat}} i {{ui:Gjeldende innstillinger}}. Se [Skriv og vis peilinger og vinkler](topic:bearings-and-angles).

### APPLOAD

Alias: `AP`; eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Last program…}}. Dialogen {{ui:Last programmer}}: last inn `.lsp`-rutiner og `.dcl`-dialogfiler, fjern dem, last dem på nytt fra historikken, og oppstartspakken. En rutines `(defun c:NAME …)`-kommandoer virker da som alle andre. Se [Last programmer](topic:load-applications) og [Kjør LISP-rutiner](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Rediger aliaser…}}) åpner aliasfilen din (`ALIAS, *COMMAND`-linjer). {{ui:Lagre}} bruker den. {{cmd:REINIT}} bruker den på nytt. Se [Rediger kommandoaliaser](topic:command-aliases).

### OPTIONKEYS

Alias: `OPTKEYS`; eller {{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Alternativbokstaver}} › {{ui:Rediger…}}. Åpner filen med dine alternativbokstaver (`COMMAND.OPTION, LETTERS`-linjer, som `ARRAY.PO, P`). {{ui:Lagre}} bruker den, og {{cmd:REINIT}} bruker den på nytt. Se [Gi kommandoalternativer dine egne bokstaver](topic:option-letters).

### LISPEDIT

Alias: `VLIDE`; eller {{ui:Visning}} › {{ui:Mer}} › {{ui:LISP-editor}}. Åpner LISP-editoren, et vindu som blir åpent ved siden av tegningen.

- Teksten: linjenumre, paret til parentesen ved markøren markert (rødt når den ikke har ett). {{key:Enter}} setter den nye linjen inn med innrykk under den åpne parentesen. {{key:Tab}} skriver to mellomrom. {{key:Esc}} forlater teksten.
- {{ui:Last inn i tegningen}} ({{key:Ctrl+Shift+Enter}}): leser hvert uttrykk, slik {{cmd:APPLOAD}} gjør med filen, og lager dens `c:`-kommandoer. Filen vises i {{cmd:APPLOAD}}s liste.
- {{ui:Kjør utvalg}} ({{key:Ctrl+Enter}}): kjører de valgte uttrykkene, eller uttrykket markøren står i.
- {{ui:Stopp}}: avslutter en rutine som kjører.
- {{ui:Konsoll}}: det rutinen skrev ut, og hver feil med sitt linjenummer. Klikk en feil for å gå dit. Teksten kjøres ett toppnivåuttrykk om gangen, så linjen er uttrykkets, eller inni det linjen som kaller funksjonen feilen nevner.
- {{ui:Ny}}, {{ui:Åpne}}, {{ui:Lagre}} ({{key:Ctrl+S}}): en `.lsp`-fil. Teksten beholdes også i denne nettleseren, så lukking av vinduet ikke mister den.
- Ved siden av teksten: funksjonene rutinen definerer, dem den kaller som denne LISP-en ikke har ennå, dem den kaller som verken er definert i den eller innebygd, og de fullstendige listene over hva som er bygget og hva som ikke er.

En tekst med en parentes som aldri lukkes, eller en streng som aldri tar slutt, kjøres ikke. Linjen blir nevnt. Det finnes ingen trinnvis feilsøker, bruddpunkter eller overvåkningsvindu. Se [Kjør LISP-rutiner](topic:run-lisp).

### HELP

Alias: `?`. Skriver ut hver kommando, dens alias og en beskrivelse på én linje i kommandolinjens historikk. Den åpner ikke denne hjelpen. Trykk {{key:F1}} eller klikk {{ui:Hjelp}} for det.

## Ledeteksten Velg objekter

Ved enhver ledetekst `Select objects`: klikk objekter, tegn vinduer (venstre til høyre) og kryssinger (høyre til venstre) med to klikk, eller trykk og dra et lasso ({{key:Space}} mens du drar: vindu, kryssing, gjerde). {{key:Shift}}+klikk fjerner, og {{key:Enter}} fullfører. Du kan også skrive `ALL` (alt), `L` (det siste objektet), `P` (Previous: det siste kommandoen brukte), `F` (Fence: objekter en linje med punkter krysser; `U` tar tilbake et punkt), `W` (Window), `C` (Crossing), `R` (Remove-modus: valg tar objekter ut; ledeteksten viser `Remove objects`) og `A` (Add again). `?` lister dem. De vises ikke i ledeteksten. {{key:Tab}} over overlappende objekter markerer det neste. Klikk for å velge det. Se [Velg objekter](topic:select-objects).

### ACCESS

Alias: `AX`. Tegning uten syn. {{cmd:ACCESS}} slår Access av eller på (`On`, `Off`), og bytter fangelyder (`Sound`) og talte kommandoer (`Voice`). Den sier tilstanden først. Med Access på blir hver kommando og hvert resultat lest opp via skjermleseren, og tegneområdet har en tastaturmarkør. Hjelpeemnet «Tegning uten syn» har tastene.

### DESCRIBE

Alias: `DESC`. Si hva tegningen inneholder: hvor mange objekter, av hvilken type, hvor store, hvor mange lag, hva som er valgt. Leser bare; endrer ingenting.

### WHEREAMI

Alias: `WHERE`. Si hvor markøren er, i tegningens enheter.

### NEARBY

Si hva som ligger nær markøren, nærmest først, hver med sin avstand og siden den er på.

### SAYSEL

Si hva som er valgt, én setning per objekt (linjelengde, ender og vinkel; sirkelens radius og senter; tekst slik den er skrevet).

### VOICE

Slå talte kommandoer av eller på. De gjenkjennes på denne datamaskinen. Der nettleseren ikke kan det, er stemmen av med mindre du velger nettleserens nettjeneste i Innstillinger.

### TOUCHCROSSHAIR

Alias: `TCX`. Det forskjøvne siktekorset for tegning med fingeren, slik fingertuppen ikke dekker punktet du velger. Mens det er på, velger ikke én finger på tegningen: den flytter et siktekors som ligger over fingeren og til én side. Objektfang og sporing følger siktekorset. Å løfte fingeren velger ingenting og lar siktekorset stå. For å velge, trykk knappen {{ui:Klikk}} i hjørnet av tegningen, eller trykk hvor som helst på tegningen med en annen finger. Hold {{ui:Klikk}} mens du beveger den andre fingeren for å dra (et valgvindu, et lasso, et håndtak). En finger som trykkes og holdes stille, eller knappen {{ui:Enter}}, er Enter. To fingre panorerer og zoomer som før. Nær nedre kant og den fjerne sidekanten trekker siktekorset seg inn mot fingeren, så hver del av tegningen kan nås. En penn og en mus velger alltid direkte.

{{cmd:TOUCHCROSSHAIR}} sier tilstanden og spør `ON`, `OFF`, `Auto` (på bare der en finger er den eneste pekeren, så den er av på en datamaskin med mus), `Distance` (hvor langt siktekorset sitter fra fingeren, 24 til 240 piksler) eller `Side` (`Left`: opp og til venstre, for høyre hånd; `Right` for venstre hånd; knappene flyttes til det andre hjørnet). De samme valgene finnes i Innstillinger › CadCraft. På en enhet med berøringsskjerm har statuslinjen en bryter {{ui:Forskjøvet siktekors}}. Valgene huskes i denne nettleseren.

### WHOHAS

Sier hvem som har en tegning åpen. I CadCraft Studio på en datamaskin skriver åpning av en DWG eller DXF en liten låsefil ved siden av den (`Plan.dwg.cclock`: hvem, siden når, hvilken versjon). Den oppdaterer den hvert minutt mens tegningen er åpen, og fjerner den når tegningen lukkes. Å åpne en tegning som noen andre har åpen, sier hvem og siden når, og tilbyr {{ui:Åpne skrivebeskyttet}} (Lagre spør da etter et nytt navn), {{ui:Åpne likevel}} (den andre personen får beskjed ved neste oppdatering) eller {{ui:Avbryt}}. Å lagre over en fil som noen andre har åpen, spør først. Et lås som ikke er oppdatert på fem minutter, kalles utdatert: den andre kopien ble lukket uten å lagre, eller datamaskinen sover.

{{cmd:WHOHAS}} spør `Current` (den åpne tegningen), `File` (velg én), `FOlder` (velg en mappe: hver tegning i den som er åpen et sted, listes), `Path` (skriv en full sti) eller `Name` (navnet andre ser; din kontos navn når du er logget inn). Studio kan bare nå mapper du har valgt. For en tegning åpnet fra en mappe som aldri ble valgt, sier den én gang at den ikke kan notere tegningen som åpen. `FOlder` velger mappen, og låser virker der fra da av. Låsen er en merknad for folk, ikke en sperre: et annet program kan fortsatt skrive filen. I en nettleser finnes det ingen mapper å se i, og kommandoen sier det.

### OVERKILL

Sletter dupliserte objekter og rydder opp i overlappende linjer og buer, for tegninger som kommer fulle av doblede linjer. `Select objects to clean up`, {{key:Enter}}, deretter {{key:Enter}} igjen for å rydde med innstillingene som vises, eller endre én først:

- `Tolerance`: hvor nær to koordinater må være for å telle som de samme (0.000001 til å begynne med; 0 betyr nøyaktig det samme).
- `Ignore`: egenskaper som kan være ulike mellom to objekter som ellers er like. Skriv et navn for å bytte det: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, eller `None` / `All`. {{key:Enter}} når du er ferdig.
- `Overlap`: på eller av. På: linjer langs én rett linje som overlapper, blir én linje (en linje som ligger inni en annen, slettes ganske enkelt). Buer på én sirkel som overlapper, blir én bue. Buer som lukker en full omgang blir en sirkel, og en bue som ligger på en sirkel, slettes.
- `Ends`: på eller av. På: linjer langs én rett linje og buer på én sirkel som bare berører ende mot ende, blir ett stykke.

Hver objekttype blir sjekket for duplikater: to objekter er duplikater når geometrien deres er den samme innenfor toleransen, og lag, farge, linjetype, linjetypeskala, linjevekt, tykkelse, gjennomsiktighet og høyde stemmer (med de du ignorerer tatt ut). Linjer og åpne polylinjer stemmer også når de er tegnet den andre veien. Det første objektet i tegnerekkefølgen blir, og beholder sine egne egenskaper. Kommandoen melder hvor mange objekter den sjekket og slettet: duplikater, overlappende biter slått sammen, biter satt sammen ende mot ende. Ett {{cmd:UNDO}} tar alt tilbake. Innstillingene varer til du lukker tegningsvinduet.

Den lar være: objekter på låste lag og skjulte objekter. Den slår ikke sammen linjer med en høyde (Z) (eksakte duplikater av dem går likevel), og den røper ikke segmenter inni en polylinje (de blir ikke tynnet), en linje som ligger på et segment av en polylinje, eller en lukket polylinje tegnet den andre veien.

### DRAWORDER

Endrer hvilke objekter som tegnes foran. `Select objects to re-order`, {{key:Enter}}, deretter `Above objects`, `Under objects`, `Front` eller `Back` ({{key:Enter}} = `Back`). `Above objects` og `Under objects` spør etter referanseobjektene: utvalget går rett foran det fremste av dem, eller rett bak det bakerste. De valgte objektene beholder sin egen rekkefølge seg imellom. Ett angretrinn. Rekkefølgen lagres med tegningen i DWG og DXF, der det er den rekkefølgen objektene skrives i.

På skjermen tegnes hvert objekt i tegningens rekkefølge, slik andre programmer som åpner filen tegner den: en heldekkende skravur, en bred polylinje eller en tekstmaske dekker linjene og teksten bak den, og det som er foran den, dekker den. Der en linje krysser en tekst, vises begge. Bilder og innfestede PDF-sider blir under linjearbeidet. I en veldig stor tegning der fyll og linjearbeid overlapper og veksler mer enn 256 ganger, beholder de første 256 sin rekkefølge, og resten tegner sine fyll under linjene, så tegningen forblir rask.

### TEXTTOFRONT

Bringer tekst, mål og hjelpelinjer foran alt annet i det åpne rommet: `Text`, `Dimensions`, `Leaders` eller `All` ({{key:Enter}} = `All`). Ett angretrinn. Sier fra når det ikke finnes noe, eller når de allerede er foran.

### HATCHTOBACK

Sender hver skravur i det åpne rommet bak alt annet, så fyll slutter å dekke linjearbeid og tekst i den lagrede filen. Ingen ledetekster. Ett angretrinn.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Viser bare de valgte objektene. Alt annet i det åpne rommet forsvinner fra synet til {{cmd:UNISOLATEOBJECTS}}. I motsetning til {{cmd:LAYISO}} virker den på objektene du velger, uansett deres lag, og endrer ingen lag. Skjulte objekter blir ikke tegnet, valgt, fanget, zoomet til eller plottet, og kommandoer som tar `ALL` hopper over dem. Det du tegner mens objekter er isolert, vises som vanlig.

Dette gjelder bare for økten: ingenting om det lagres med tegningen, det er ikke et angretrinn, og å åpne tegningen igjen viser alt. Mens objekter er skjult, viser statuslinjen en knapp med antallet. Klikk den for å vise dem igjen.

### HIDEOBJECTS

Skjuler de valgte objektene til {{cmd:UNISOLATEOBJECTS}}. Samme regler som {{cmd:ISOLATEOBJECTS}}: bare for økten, ikke lagret, ikke et angretrinn.

### UNISOLATEOBJECTS

Alias: `UNISOLATE`, `UNHIDE`. Viser igjen hvert objekt skjult av {{cmd:ISOLATEOBJECTS}} eller {{cmd:HIDEOBJECTS}}, og sier hvor mange som kom tilbake.

### LAYLOCKFADE

Angir hvordan objekter på låste lag ser ut, og om et klikk når dem. Den sier gjeldende tilstand, deretter tar den:

- et tall fra 0 til 90: blekningsmengden i prosent (50 til å begynne med). 0 slår blekningen av.
- `ON` eller `OFF`: blekning på eller av, beholder mengden.
- `Pick`, deretter `Yes` eller `No`: kan et klikk velge objekter på låste lag når ingen kommando kjører? `No` (standarden): de kan ikke velges i det hele tatt. `Yes`: et klikk eller et vindu velger dem slik at {{ui:Egenskaper}} kan vise dem. De kan fortsatt ikke endres, og en kommandos egne `Select objects` tar dem aldri.

Objektfang finner objekter på låste lag uansett. Plott blekner aldri. Begge innstillingene er dine, ikke tegningens, og står også i {{ui:Innstillinger}} under {{ui:Låste lag}}.

### BURST

Eksploderer blokkreferanser og beholder det attributtene sier. `Select block references to burst`, {{key:Enter}}: hver referanse erstattes av blokkens objekter, og hver synlig attributts verdi blir vanlig tekst på attributtens eget lag. En attributt på lag 0 havner på referansens lag, som blokkens andre objekter på lag 0. Usynlige attributter forkastes. En blokk inni blokken blir en blokkreferanse. Ett angretrinn. Den rapporterer hvor mange referanser som ble sprengt, og hvor mange attributtverdier som ble gjort om til tekst.

Den avviser en lenket tegning etter navn (bind den først, eller kopier fra den med {{cmd:NCOPY}}), og lar andre valgte objekter være. For blokkreferanser gir {{cmd:EXPLODE}} de samme objektene. {{cmd:BURST}} tar bare blokkreferanser og teller attributtteksten.

### TXT2MTXT

Alias: `T2M`. Slår sammen enkeltlinjetekster til én avsnittstekst. `Select single-line text to join`, {{key:Enter}}, deretter `Paragraph` (linjene løper sammen og brytes ved bredden på den bredeste linjen) eller `Lines` (hver tekst blir en linje for seg selv). {{key:Enter}} tar den som ble brukt sist. Linjene ordnes fra topp til bunn, deretter venstre til høyre, langs retningen til den øverste teksten. Avsnittet henger fra øvre venstre hjørne av den øverste teksten og tar dens høyde, rotasjon, stil, lag og farge. Ett angretrinn.

Tekst som allerede er avsnittstekst, tom tekst og andre objekter i utvalget blir i fred, og kommandoen sier hvor mange.

### NCOPY

Kopierer objekter ut av en blokkreferanse eller en lenket tegning og inn i tegningen, uten å sprenge noe. `Pick an object inside a block reference or a linked drawing`: objektet nærmest valget kopieres der det vises, uansett hvor mange blokker dypt det sitter. Velg flere, deretter {{key:Enter}}. Neste `Base point to move the copies`: {{key:Enter}} lar dem stå, eller gi et basispunkt og et annet punkt. Hele kommandoen er ett angretrinn.

En kopi tar laget den vises på: et objekt på lag 0 inni en blokk havner på laget til referansen det satt i, og en ByBlock-farge blir referansens farge. Fra en lenket tegning blir laget `Plan|Walls` til `Plan$0$Walls` (navnet lenken gir det), laget med det lenkede lagets farge, linjetype og linjevekt. En attributts verdi kopieres som tekst. Blokkreferanser på låste lag kan ikke velges.

### FLATTEN

Setter høyden (Z) og tykkelsen på de valgte objektene til 0. `Select objects to flatten`, {{key:Enter}}. Den flater også objektene inni blokkdefinisjonene utvalget bruker (og blokkene inni dem), så hver referanse til disse blokkene endres. Lenkede tegninger blir som de er. Ett angretrinn. Den rapporterer hvor mange objekter som ble endret, og sier det når ingen hadde en høyde eller tykkelse.

Det CadCraft beholder av den tredje dimensjonen i en 2D-tegning er: en høyde på sirkler, buer, ellipser, punkter, tekst, blokkreferanser, skravurer, hjelpelinjer og polylinjer (deres høyde over planet), en høyde ved hver ende av en linje, og en tykkelse på linjer, sirkler, buer, polylinjer, punkter og tekst, slik filen hadde dem. {{cmd:FLATTEN}} tømmer nettopp disse. Den rører ikke 3D-modellen på 3D-fanen, 3D-flater eller volumlegemer. Et objekt tegnet i et skjevt plan ble allerede brakt inn i tegneplanet da filen ble åpnet.

### BREAKLINE

Tegner en linje med et bruddsymbol, for en visning som er kuttet kort. Den sier gjeldende størrelse og forlengelse, deretter `First point of the break line` (eller `Size` / `Extension` for å endre dem først), `Second point`, og `Where the break symbol sits`: klikk langs linjen, eller {{key:Enter}} for midten. Resultatet er én polylinje på gjeldende lag: linjen, som går forbi hvert punkt med forlengelsen, med et Z-formet drag like høyt som størrelsen og halvparten så langt.

`Size` og `Extension` huskes som dine innstillinger. Størrelsen starter på to ganger målteksthøyden ganger målskalaen, og forlengelsen på halvparten av størrelsen. {{key:Enter}} gjentar kommandoen.

### AUDIT

Sjekker den åpne tegningen for skade og reparerer den. {{cmd:AUDIT}} ser på hvert objekt i modellen, på arkene og inni blokker, og på lagtabellen, og lister det den finner etter type:

- tall som ikke er endelige eller er absurd store;
- objekter uten størrelse: en linje uten lengde, en sirkel uten radius, en polylinje med ett punkt, tekst uten bokstaver eller høyde, en blokkreferanse med skala null;
- objekter på et lag tegningen ikke har; referanser til en blokk som ikke finnes; tekst- og målstilnavn og linjetypenavn som ikke finnes i tegningen;
- blokker som inneholder seg selv, direkte eller gjennom andre blokker;
- objekter som deler en id, en nøkkel eller et filhåndtak;
- mål uten punktene de måles fra, og skravurer der grensen ikke er en lukket kontur.

Deretter spør den `Fix them? [Yes/No]`. `No` endrer ingenting. `Yes` reparerer alt i ett angretrinn: det som ikke kan tegnes, fjernes (dårlige tall, ingen størrelse, manglende blokk, ødelagt mål, en skravur uten brukbar grense, referansen som lukker en sirkel av blokker). Et manglende lag opprettes. Ukjente stil- og linjetypenavn går tilbake til standardene. En delt nøkkel erstattes. Den skriver ut hvor mange objekter som ble fjernet, og hvor mange som ble reparert. De samme funnene vises i Problemer-panelet, hver med sin egen {{ui:Reparer}}.

Den avviser ingenting, men den sjekker bare det CadCraft selv tegner. Data beholdt for andre programmer (3D-volumlegemer, OLE-objekter) blir ikke åpnet.

### RECOVER

Åpner en skadet DXF eller DWG. {{cmd:RECOVER}} spør etter filen, leser det som kan leses i stedet for å avvise filen, lister det den hoppet over eller antok, og sjekker og reparerer deretter tegningen slik {{cmd:AUDIT}} gjør med `Yes`.

- DXF: linjer som ikke er en del av et kode- og verdipar, hoppes over til parene stemmer igjen. En seksjon uten slutt lukkes. En fil som er kuttet kort, leses opp til kuttet. En binær DXF som er kuttet kort, leses opp til sin siste hele verdi. Når en seksjon, en blokk eller et objekt fortsatt ikke kan leses, utelates det og nevnes ved navn, og lesingen fortsetter forbi det.
- DWG: objekter som ikke består sine kontroller, eller ikke kan dekodes, utelates. En tapt objektliste bygges på nytt ved å gå gjennom objektdataene.

Filen på disken endres ikke. Den gjenopprettede tegningen åpnes ulagret: lagre den under et nytt navn. En fil det ikke kan leses noe som helst fra, avvises, med årsaken.

### LEGACYTEXT

Konverterer tekst skrevet med gamle 8-biters vietnamesiske skrifter til Unicode. Korte navn `TEXTTOUNICODE` og `VNTEXT`.

Eldre vietnamesiske tegninger har teksten sin som vestlige tegn som bare skriften gjør om til vietnamesisk: TCVN3-tekst i ABC-skriftene (`.VnTime`, `.VnArial`, og skriftene med store bokstaver hvis navn slutter på `H`), og VNI-tekst i VNI-skriftene (`VNI-Times`). CadCraft viser slik tekst slik den leses så snart tegningen er åpen, etter skriften til tekststilen, til objektet, eller til en løpende del av avsnittstekst. Filen har fortsatt de gamle tegnene.

{{cmd:LEGACYTEXT}} sier hvor mange tekster den fant i hver koding, og spør `Convert … to Unicode?`. `Yes` skriver om hver enkelt (modell, ark, blokker, attributtverdier og -definisjoner) og gir tekststilene en Unicode-skrift (Times New Roman, Arial eller Courier New etter den gamle skriftens type), i ett angretrinn. Formatering inni avsnittstekst beholdes.

Når ingen tekst bruker en kjent skrift (en stil som mistet skriftnavnet), spør den `Read selected texts as [Tcvn3/Vni/None]`: velg kodingen og velg tekstene. Tekst som allerede er Unicode, blir i fred. Overstyringer av måltekst og flerlinjetekst i flerhjelpelinjer konverteres ikke.
