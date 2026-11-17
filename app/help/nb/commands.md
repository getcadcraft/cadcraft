---
title: Kommandoreferanse
summary: Alle kommandoene i CadCraft-tegneappen, med aliaser, spørsmålene de stiller, valgene og standardverdiene.
keywords: kommandoer, aliaser, kommandoliste, areal, omkrets, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plott, zoom, hjelp, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 7db2646b
---

Skriv et kommandonavn eller et alias og trykk {{key:Enter}} eller {{key:Space}}. Store og små bokstaver har ingen betydning, og et innledende `_`, `-`, `.` eller `'` ignoreres. Skriv `HELP` (eller `?`) for å skrive ut en kort liste over alle kommandoene i kommandolinjens historikk. Trykk {{key:F1}} for denne hjelpen.

Slik leser du ledetekstene: valg står i hakeparenteser, og du velger ett ved å skrive de store bokstavene (`D` for Diameter). En standardverdi står i vinkelparenteser. Trykk {{key:Enter}} for å godta den. Der et punkt etterspørres, kan du klikke eller skrive et av formatene i [Inntasting av koordinater og avstander](topic:coordinate-entry). Der en avstand etterspørres, kan du skrive et tall eller klikke to punkter.

Trykker du {{key:Enter}} der et punkt eller et objekt kreves, og det ikke finnes noen standardverdi, avsluttes kommandoen. {{key:Esc}} avbryter den. Det en kommando gjorde, er ett steg å angre.

## Tegn

### LINE

Alias: `L`. Rette segmenter, hvert sitt eget objekt.

- `Angi første punkt` (Enter: start fra det siste punktet du oppga)
- `Angi neste punkt [Angre (U)]`, gjentatt. Etter to segmenter: `[Angre (U)/Lukk (C)]`.
- `U` angrer det siste segmentet, `C` lukker til første punkt og avslutter. Enter avslutter.

### PLINE

Alias: `PL`. En polylinje av linje- og buesegmenter.

- `Angi startpunkt`
- `Angi neste punkt [Bue (A)/Lukk (C)/Angre (U)]` (Lukk når det er to segmenter)
- `A` bytter til buer: `Angi endepunkt for bue [Linje/Lukk (CL)/Angre (U)]`. Hver bue fortsetter tangent til segmentet før. `L` går tilbake til linjer, `CL` lukker med en bue.
- Enter avslutter. Polylinjen forblir åpen.

### CIRCLE

Alias: `C`.

- `Angi senterpunkt for sirkel [3P/2P/Ttr (tangent, tangent, radius)]`
- `Angi radius for sirkel [Diameter] <siste radius>`. `D` spør `Angi diameter for sirkel`.
- `2P`: to ender av en diameter. `3P`: tre punkter på sirkelen.
- `T` (også kommandoen `TTR`, og {{ui:Tegn}} › {{ui:Mer}} › {{ui:Sirkel: Tangent, Tangent, Radius}}): `Angi punkt på objekt for første tangent til sirkel`, deretter den andre, og så radiusen (Enter: den siste). Sirkelen berører begge objektene (linjer, buer, sirkler, polylinjesegmenter, også inne i blokker). Av sirklene som gjør det, velges den som berører nærmest dine valg. «Sirkelen finnes ikke» når ingen passer.
- `TTT` (eller {{ui:Tegn}} › {{ui:Mer}} › {{ui:Sirkel: Tangent, Tangent, Tangent}}): tre objekter. Sirkelen som berører alle tre, nærmest dine valg (tre linjer gir den indre sirkelen eller en ytre, avhengig av hvor du velger).

### ARC

Alias: `A`.

- `Angi startpunkt for bue [Senter (C)]`, `Angi andre punkt for bue`, `Angi endepunkt for bue`: en bue gjennom tre punkter.
- `C`: `Angi senterpunkt for bue`, `Angi startpunkt for bue`, `Angi endepunkt for bue`. Buen går mot klokken fra start til slutt.

### RECTANG

Alias: `REC`, `RECTANGLE`. En lukket polylinje.

- `Angi første hjørnepunkt`, `Angi annet hjørnepunkt`. Skriv `@bredde,høyde` for det andre hjørnet.

### POLYGON

Alias: `POL`. En regulær mangekant som en lukket polylinje.

- `Angi antall sider <4>` (3 til 1024)
- `Angi senter for mangekant`
- `Angi et valg [Innskrevet i sirkel/Omskrevet om sirkel (C)] <I>`
- `Angi radius for sirkel`: klikk eller skriv et punkt. Avstanden setter størrelsen, og retningen snur mangekanten.

### ELLIPSE

Alias: `EL`.

- `Angi aksens endepunkt for ellipse [Senter (C)]`, `Angi aksens andre endepunkt`, `Angi avstand til den andre aksen`
- `C`: `Angi senter for ellipse`, `Angi endepunkt for akse`, deretter avstanden til den andre aksen.

### HATCH

Alias: `H`, `BH`, `BHATCH`; eller {{ui:Skravur}} på verktøylinjen. Skriver først ut gjeldende mønster, skala og vinkel.

- `Velg et indre punkt [Velg objekter (S)/Mønster (P)/Skala (SC)/Vinkel (A)]`, gjentatt (`Angre (U)` når det finnes et område). Hvert klikk legger til det lukkede området rundt det, med de lukkede figurene inni som øyer. Enter lager én skravur av alle.
- `S`: `Velg lukkede objekter` (lukkede polylinjer, sirkler, lukkede ellipser).
- `P`: `Angi et mønsternavn, SOLID, eller ? for listen <gjeldende>`. `SC`: `Angi mønsterskala`. `A`: `Angi mønstervinkel`.

Se [Skravur og fyll av områder](topic:hatch).

### POINT

Alias: `PO`; eller {{ui:Tegn}} › {{ui:Mer}} › {{ui:Punkt}}. Punktobjekter, ett per klikk, til Enter.

- `Angi et punkt`

### XLINE

Alias: `XL`; eller {{ui:Tegn}} › {{ui:Mer}} › {{ui:Konstruksjonslinje}}. Konstruksjonslinjer, uendelige i begge retninger. Se [Konstruksjonslinjer og stråler](topic:construction-lines).

- `Angi et punkt [Horisontal/Vertikal/Vinkel (A)/Halver (B)/Forskyv (O)]`, deretter `Angi gjennomgangspunkt` for hver linje, til Enter.
- `A`: `Angi vinkel for konstruksjonslinje [Referanse (R)] <0>`; `R` spør først `Velg et linjeobjekt`.
- `B`: `Angi toppunkt for vinkel`, `Angi startpunkt for vinkel`, deretter `Angi sluttpunkt for vinkel` for hver linje.
- `O`: `Angi forskyvningsavstand [Gjennom (T)] <Gjennom>`, deretter `Velg et linjeobjekt` og `Angi side å forskyve` (eller `Angi gjennomgangspunkt`) for hver linje.

### RAY

Ingen alias; eller {{ui:Tegn}} › {{ui:Mer}} › {{ui:Stråle}}. `Angi startpunkt`, deretter `Angi gjennomgangspunkt` for hver stråle, til Enter.

### TEXT

Alias: `DT`, `DTEXT`; eller {{ui:Tekst}} på verktøylinjen. Enkeltlinjetekst. Hver linje er sitt eget objekt.

- `Angi startpunkt for tekst [Juster (J)]`
- `J`: `Angi et valg [Venstre (L)/Senter (C)/Høyre (R)/Midt (M)/TL/MC] <L>`, deretter `Angi innsettingspunkt for tekst`
- `Angi høyde <gjeldende teksthøyde>`
- `Angi rotasjonsvinkel for tekst <0>`
- `Angi tekst`, gjentatt: hver Enter starter neste linje under. Enter på en tom linje avslutter. {{key:Space}} skriver et mellomrom her.

## Endre

### MTEXT

Alias: `MT`, `T`; eller {{ui:Avsnitt}} på verktøylinjen. Avsnittstekst som brytes til en bredde, skrevet på stedet.

- `Angi første hjørne`
- `Angi motsatt hjørne [Høyde (H)/Juster (J)/Linjeavstand (L)/Rotasjon (R)/Bredde (W)]`: bredden over de to hjørnene er der teksten brytes. `H` spør `Angi høyde`, `J` `Angi justering [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Angi linjeavstandsfaktor (0.25 til 4)`, `R` `Angi rotasjonsvinkel`, `W` `Angi bredde (0 for ingen bryting)` og hopper over det andre hjørnet.
- Deretter åpnes en boks på tegningen: skriv, {{key:Enter}} for nytt avsnitt, {{key:Mod+Enter}} eller klikk utenfor for å fullføre, {{key:Esc}} for å avbryte. Linjen over den setter høyde, linjeavstand, bredde og justering. Se [Legg til tekst og merkelapper](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Alias: `ED`, `DDEDIT`; eller dobbeltklikk en tekst. `Velg en tekst å redigere`, gjentatt til {{key:Enter}}: hver åpnes i samme boks. Startet på en valgt eller dobbeltklikket tekst, redigerer den den ene og avslutter.

### ERASE

Alias: `E`, `DELETE`; eller trykk {{key:Delete}} med objekter valgt.

- `Velg objekter` (hoppes over når objekter allerede er valgt)

### MOVE

Alias: `M`.

- `Velg objekter`
- `Angi basispunkt [Forskyvning (D)]`, `Angi andre punkt`
- `D`: `Angi forskyvning`, skrevet som `dx,dy`.

### COPY

Alias: `CO`, `CP`. Kopier så mange ganger du oppgir punkter.

- `Velg objekter`
- `Angi basispunkt [Forskyvning (D)]`
- `Angi andre punkt [Angre (U)]`, gjentatt til Enter. `U` angrer siste kopi.

### ROTATE

Alias: `RO`.

- `Velg objekter`, `Angi basispunkt`
- `Angi rotasjonsvinkel <siste vinkel>`: grader, positiv mot klokken. Eller klikk et punkt for å rotere mot det.

### SCALE

Alias: `SC`.

- `Velg objekter`, `Angi basispunkt`
- `Angi skalafaktor`: skriv en faktor som `0.5` eller `2`. Et klikket punkt gir sin avstand fra basispunktet som faktor.

### MIRROR

Alias: `MI`.

- `Velg objekter`
- `Angi første punkt på speillinjen`, `Angi andre punkt på speillinjen`
- `Slett kildeobjekter? [Ja (Y)/Nei (N)] <N>`

### ALIGN

Alias: `AL`; eller {{ui:Endre}} › {{ui:Mer}} › {{ui:Innrett}}.

- `Velg objekter`
- `Angi første kildepunkt`, `Angi første målpunkt`
- `Angi andre kildepunkt (Enter for å fortsette)`, `Angi andre målpunkt`
- `Angi tredje kildepunkt (Enter for å fortsette)`, `Angi tredje målpunkt`
- Med to par: `Skaler objekter etter innrettingspunktene? [Ja (Y)/Nei (N)] <N>`

Se [Innrett objekter](topic:modify-objects#align-objects).

### ALIGNTO

- `Velg objekter` (eller utvalget), `Innrett [Venstre (L)/Senter (C)/Høyre (R)/Topp (T)/Midt (M)/Bunn (B)] <Venstre>`, `Til [Utvalg (S)/Første (F)/Siste (L)/Punkt (P)] <Utvalg>`. `P` spør etter punktet. Utvalget forblir.

### DISTRIBUTE

- `Velg objekter` (minst tre), `Fordel [Horisontalt/Vertikalt] <Horisontalt>`, `Fordel jevnt [Sentre (C)/Mellomrom (G)] <Mellomrom (G)>`. De to ytterste blir stående. Utvalget forblir.

### ALIGNPANEL

Alias: `ALP`; eller {{ui:Endre}} › {{ui:Mer}} › {{ui:Innrett og fordel}}. Åpner panelet som kjører ALIGNTO og DISTRIBUTE med klikk.

### LASER

Alias: `LASERCUT`; eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Laser…}}. Åpner Laser-panelet over tegningen: hva hver layer gjør (skjær, rissing, gravering, fyll, bilde), forhåndsvisningen, GRBL G-kode å lagre, og innramming og sending over Web Serial. Se [Send en tegning til en laser](topic:laser-cutting).

### STRETCH

Alias: `S`; eller {{ui:Strekk}}. `Velg objekter som skal strekkes`: dra kryssingsvinduer (eller skriv `C`) over endene for å flytte. `Angi basispunkt [Forskyvning (D)]`, `Angi andre punkt`. Punkter inne i vinduene flyttes: linjeender, polylinjehjørner (buesegmenter beholder sin høyde), målepunkter. Sirkler, ellipser, tekst, punkter og blokker flyttes hele når senteret eller innsettingspunktet er inne. Et utvalg laget før kommandoen beholder kryssingsvinduene (og lassoene) som laget det, slik at de strekkes på samme måte. Uten et vindu flyttes objektene hele.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Alias: `AR`; eller {{ui:Matrise}}. `Velg objekter`, deretter `Angi matrisetype [Rektangulær (R)/Polar (PO)] <Rektangulær>` (kun ARRAY).

- Rektangulær starter med 4 kolonner × 3 rader, med avstand 1.5 ganger objektenes størrelse, vist som forhåndsvisning. `Angi et valg [Antall (COU)/Avstand (S)/Kolonner (COL)/Rader (R)/Avslutt (X)] <X>`: `COU` spør etter kolonner og rader, `S` avstandene mellom kolonner og mellom rader (negativ går til venstre eller ned), `COL` og `R` én retning hver.
- Polar spør `Angi senterpunkt for matrise`, starter med 6 elementer rundt hele veien, roterte. `Angi et valg [Elementer (I)/Fyllvinkel (F)/Roter elementer (ROT)/Avslutt (X)] <X>`: `I` elementer, `F` vinkelen å fylle (+ mot klokken, − med klokken), `ROT` Ja eller Nei.
- {{key:Enter}} (Avslutt) lager kopiene, som vanlige objekter. Ett steg å angre.

### OFFSET

Alias: `O`. Linjer, buer, sirkler og polylinjer.

- `Angi forskyvningsavstand [Gjennom (T)] <siste avstand, eller Gjennom>`
- `Velg objekt å forskyve`, deretter `Angi punkt på siden å forskyve` (eller, med Gjennom, `Angi gjennomgangspunkt`), gjentatt til Enter.

### TRIMEXTENDMODE

- `Angi ny verdi for TRIMEXTENDMODE (1 Hurtig, 0 Standard)`: hvordan {{cmd:TRIM}} og {{cmd:EXTEND}} starter. `1` Hurtig: hvert objekt er en skjærekant eller grense. `0` Standard: de spør først etter kantene. Også `(setvar "TRIMEXTENDMODE" 0)` i LISP.

### TRIM

Alias: `TR`. Skriver først ut `Gjeldende innstillinger: hurtigmodus (TRIMEXTENDMODE 1), kanter: No extend, dra tegner en bane`. I hurtigmodus er hvert synlige objekt en skjærekant, og et objekt som ingenting krysser, slettes. I standardmodus spør den først `Velg skjærekanter (Enter = alle objekter)` og kutter bare ved dem.

- `Velg objekt å trimme eller Shift-velg for å forlenge [Skjærekanter (T)/Gjerde (F)/Kryssing (C)/Modus (O)/Kant (E)/Slett (R)/Angre (U)]`, gjentatt: klikk stykket som skal fjernes (det vises grått og stiplet mens pekeren hviler på det), dra en bane gjennom flere stykker (alle går i ett steg), eller klikk to tomme steder for et gjerde mellom dem. {{key:Shift}} forlenger i stedet. `T` velger skjærekanter (standardmodus), `F` spør etter gjerdepunkter, `C` to vinduhjørner (stykker som delvis er inni, går), `O` spør `Angi et trimmodusvalg [Hurtig/Standard]`, `E` spør `Angi en modus for forlengelse av underforståtte kanter [Forleng/Ingen forlengelse]` (EDGEMODE), `R` sletter objekter du velger, `U` angrer det siste valget eller draget. Enter avslutter. Se [Trim og forleng](topic:trim-and-extend).

### EXTEND

Alias: `EX`. Samme som TRIM den andre veien: `Velg objekt å forlenge eller Shift-velg for å trimme [Grensekanter (B)/Gjerde (F)/Kryssing (C)/Modus (O)/Kant (E)/Angre (U)]`. Et klikk forlenger enden nærmest til neste grense. En dratt bane eller et gjerde forlenger hvert objekt det krysser. {{key:Shift}} trimmer. `B` velger grensekanter (standardmodus). Modus og Kant deles med TRIM.

### LINKVIEWS

Alias: `SYNCVIEWS`; eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Koble rutenes visninger}}, eller lenkeikonet på tegningsfanene. `Koble rutenes visninger [PÅ/AV]` (Enter bytter til den andre tilstanden): mens den er på, flytter en panorering eller zoom i den aktive ruten alle ruter som viser samme type område. Se [Del skjermen](topic:split-screen).

### OPENIN3D

Ingen alias; eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Åpne i ModelCraft}}, der 3D-modelleringsappen tar imot en overlevert tegning. Åpner den der i en ny fane, som en DWG (ingenting lastes opp). Hvis nettleseren blokkerer fanen, sier den fra om det.

### LASSOMODE

`Angi ny verdi for LASSOMODE (1 = lasso, 0 = rektangel)`: hva som tegnes når du trykker og drar på et tomt sted. Samme som Innstillinger › CadCraft › Dra for å velge. Se [Lassovalg](topic:lasso-selection).

### FILLET

Alias: `F`. Linjer, buer, sirkler og polylinjer. Skriver først ut `Gjeldende innstillinger: Modus = TRIM, Radius = 0`.

- `Velg første objekt [Angre (U)/Polylinje/Radius/Trim/Flere (M)]`
  - `R` spør `Angi avrundingsradius <siste>`. `T` spør `Angi trimmodusvalg [Trim/Ingen trim]`: med Ingen trim blir objektene som de er, og bare buen legges til.
  - `M` lar kommandoen fortsette for flere hjørner til {{key:Enter}}. `U` angrer siste hjørne uten å forlate kommandoen.
  - `P` spør `Velg 2D-polylinje [Radius]` og runder av hvert hjørne der to rette segmenter møtes. Avrundinger den allerede har, erstattes av den nye radiusen. Radius 0 fjerner dem. Hjørner der sidene er for korte for radiusen, blir stående og telles.
- `Velg andre objekt eller Shift-velg for å bruke hjørne [Radius]`. Hold {{key:Shift}} mens du klikker, for et skarpt hjørne, uansett radius.

Klikk hvert objekt på den delen du vil beholde. To linjer som ikke møtes, forlenges. To parallelle linjer får en halvsirkel over gapet, ved enden av den første linjen nærmest klikket ditt. En sirkel kuttes aldri. To segmenter i samme polylinje ved siden av hverandre får buen inne i polylinjen. En polylinje og et annet objekt fungerer når kuttet havner på polylinjens første eller siste segment.

### CHAMFER

Alias: `CHA`. Linjer og de rette segmentene i polylinjer. Skriver først ut gjeldende avstander (eller lengde og vinkel).

- `Velg første linje [Angre (U)/Polylinje/Distanse/Vinkel (A)/Trim/Metode (E)/Flere (M)]`
  - `D` spør `Angi første fasavstand <siste>` og `Angi andre fasavstand <den første>`: den første kuttes fra den første linjen du velger, den andre fra den andre.
  - `A` spør `Angi fasens lengde på den første linjen` og `Angi fasens vinkel fra den første linjen`.
  - `E` (Metode) velger hvilken av de to neste fase bruker. `T`, `M`, `U` og `P` virker som i {{cmd:FILLET}}.
- `Velg andre linje eller Shift-velg for å bruke hjørne [Distanse/Vinkel (A)/Metode (E)]`. {{key:Shift}}+klikk gir et skarpt hjørne.

En avstand som er lengre enn linjen, avvises (`Avstanden er for stor.`).

### BREAK og BREAKATPOINT

Alias: `BR`. `Velg objekt` (der du klikker, er første punkt), `Angi andre bruddpunkt [Første punkt (F)]`. `F` spør `Angi første bruddpunkt` og `Angi andre bruddpunkt`. Delen mellom dem fjernes. På en sirkel går det mot klokken fra første punkt. BREAKATPOINT spør `Angi bruddpunkt` og deler objektet i to der (ikke en sirkel).

### LENGTHEN

Alias: `LEN`. `Velg et objekt å måle [Endring (DE)/Prosent (P)/Total/Dynamisk (DY)]`: et valg skriver ut `Gjeldende lengde` (og en bues inkluderte vinkel) og spør igjen. `DE` spør `Angi endring i lengde (negativ forkorter) [Vinkel (A)]`, `P` `Angi prosentlengde`, `T` `Angi total lengde [Vinkel (A)]`, `DY` drar. Deretter `Velg et objekt å endre [Angre (U)]`, gjentatt: enden nærmest klikket flyttes. Linjer, buer og åpne polylinjer.

### JOIN

Alias: `J`. `Velg objekter å slå sammen`. Linjer, buer og åpne polylinjer som møtes ende mot ende, blir polylinjer (lukket når kjeden lukkes). Linjer på én linje blir én linje. Buer av én sirkel blir én bue eller sirkelen. Historikken sier hvor mange objekter som ble slått sammen, og hvor mange som ikke ble det.

### MATCHPROP

Alias: `MA`, `PAINTER`. `Velg kildeobjekt`, deretter `Velg målobjekter [Innstillinger (S)]` og {{key:Enter}}. Kopierer layer og farge, og mellom objekter av samme type tekstens høyde og bredde, målstørrelsene eller skravurmønsteret. `S` spør `Slå en egenskap av eller på [Farge (C)/Layer (LA)/Tekst/Mål (D)/Skravur (H)]`, gjentatt til {{key:Enter}}. Valget huskes for økten.

### EXPLODE

Alias: `X`. Polylinjer blir til linjer og buer, blokkreferanser blir til sine objekter, mål blir til linjer, pilspisser og tekst.

- `Velg objekter`

## Utklippstavle

CadCraft sin egen utklippstavle: den virker innenfor en tegning, mellom tegninger og mellom CadCraft-faner i denne nettleseren. Se [Kopier, lim inn og dupliser](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, eller {{ui:Kopier}} i gruppen {{ui:Rediger}}. Kopierer objekter til utklippstavlen, med blokkene og layerne de bruker. Objektene forblir valgt.

- `Velg objekter å kopiere` (hoppes over når objekter allerede er valgt)

### CUTCLIP

{{key:Mod+X}}, eller {{ui:Klipp ut}} i menyen {{ui:Mer}}. Kopierer objekter til utklippstavlen, og sletter dem deretter (ett steg å angre).

- `Velg objekter å klippe ut` (hoppes over når objekter allerede er valgt)

### COPYBASE

Kopierer objekter til utklippstavlen med et basispunkt du velger. Liming plasserer det punktet.

- `Angi basispunkt`
- `Velg objekter å kopiere`

### PASTECLIP

{{key:Mod+V}}, eller {{ui:Lim inn}} i gruppen {{ui:Rediger}}. Kopien følger markøren, hengende fra nedre venstre hjørne av utstrekningen (eller senteret, eller `COPYBASE`-punktet; se [CadCraft-innstillinger](topic:settings)).

- `Angi innsettingspunkt`

De innlimte objektene er valgt. En blokk tegningen allerede har under samme navn, beholder denne tegningens definisjon.

Når et område kopiert i MarkupCraft er nyere enn det CadCraft kopierte (og yngre enn 6 timer), limer {{key:Mod+V}} og `PASTECLIP` inn det området i stedet. Se `PASTEAREA`.

### PASTEAREA

Alias: `PAREA`. {{ui:Lim inn kopiert område}} i menyen {{ui:Mer}}. Limer inn et område kopiert med {{ui:Kopier område}} i MarkupCraft, som et bilde i sann størrelse. Se [Bilder i en tegning](topic:pictures).

- `Angi nedre venstre hjørne av det kopierte området`
- `Skaler papirstørrelsen med (100 for et ark i 1:100; Punkter (P): to punkter på det og deres sanne avstand) [Punkter (P)] <1>` (bare når arket ikke hadde en tegningsmålestokk): et tall, {{key:Enter}} for papirstørrelsen, eller `P`, deretter `Første punkt på det innlimte området`, `Andre punkt på det innlimte området` og deres sanne avstand.

### PASTEORIG

{{key:Mod+Shift+V}}, eller {{ui:Lim inn på samme sted}} i menyen {{ui:Mer}}. Limer inn på koordinatene objektene ble kopiert fra. Spør ikke om noe.

### DUPLICATE

Alias: `DUP`. {{key:Mod+D}}, eller {{ui:Dupliser og flytt}} i menyen {{ui:Mer}}. En kopi av objektene følger pekeren fra der den er. {{key:Esc}} etterlater ingenting. Bruker ikke utklippstavlen.

- `Velg objekter å duplisere` (hoppes over når objekter allerede er valgt)
- `Angi hvor kopien skal (Esc etterlater ingenting)`: klikk, skriv et punkt, `@dx,dy` (fra der pekeren var), eller en avstand mot markøren.

### SELECT

Spør `Velg objekter` (med alle valgene under) og lar det du valgte være valgt, for neste kommando eller for `P` senere.

### QSELECT

Alias: `QS`. I nettleseren dialogboksen {{ui:Hurtigvalg}} (se [Velg objekter](topic:select-objects#select-by-a-rule-quick-select)). Uten den spør kommandolinjen `Angi objekttype`, `Angi egenskap`, `Angi operator [=/<>/>/</*/Velg alle] <=>` og `Angi verdi`. Treffene blir utvalget.

### SELECTSIMILAR

Alias: `SIM`. `Velg objekter [Innstillinger (SE)]` (eller det gjeldende utvalget): velger hvert objekt av samme type med samme layer og farge (og blokknavn, skravurmønster). `SE` spør `Slå en egenskap av eller på [Layer (LA)/Farge (CO)/Navn (NA)/Mønster (PA)/Høyde (HE)]`, gjentatt til {{key:Enter}}.

### FIND

Ingen alias; eller {{ui:Rediger}} › {{ui:Mer}} › {{ui:Finn og erstatt}}. I nettleseren dialogboksen {{ui:Finn og erstatt}} (se [Legg til tekst og merkelapper](topic:text#find-and-replace-words)). Uten den: `Angi tekst å finne`, deretter `Angi erstatningstekst (Enter: velg det som finnes)`. Ser i tekst, attributtverdier og måltekst, på den åpne fanen eller i utvalget.

### SELECTALL og DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) velger alle objekter du kan redigere på den åpne fanen. `DESELECT` (alias `AI_DESELECT`, `SELECTNONE`; eller {{key:Esc}}) fjerner utvalget.

## Måltilsettinger

### DIMLINEAR

Alias: `DLI`, `DIMLIN`. Horisontal eller vertikal avstand.

- `Angi første origo for målhjelpelinje [Velg objekt (S)]` (Enter eller `S`: `Velg objekt å måle`, deretter klikk en linje, bue, sirkel eller et polylinjesegment)
- `Angi andre origo for målhjelpelinje`
- `Angi plassering av målelinje [Tekst (T)/Horisontal/Vertikal/Rotert]`. `T` spør etter tekst (`<>` er den målte verdien). `H` og `V` låser retningen. `R` spør `Angi vinkel for målelinje <0>`.

### DIMALIGNED

Alias: `DAL`, `DIMALI`. Den sanne avstanden mellom to punkter.

- Origo som i {{cmd:DIMLINEAR}}, deretter `Angi plassering av målelinje [Tekst (T)]`.

### DIMANGULAR

Alias: `DAN`, `DIMANG`.

- `Velg bue, sirkel eller linje, eller Enter for et toppunkt`
- Bue: dens vinkel. Sirkel: `Angi andre endepunkt for vinkel`. Linje: `Velg andre linje`. Enter: `Angi toppunkt for vinkel`, `Angi første endepunkt for vinkel`, `Angi andre endepunkt for vinkel`.
- `Angi plassering av målelinje [Tekst (T)]`: klikk inne i vinkelen for å måle den.

### DIMRADIUS og DIMDIAMETER

Alias: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Velg bue eller sirkel`, deretter `Angi plassering av målelinje [Tekst (T)]`.

### DIMCONTINUE

Alias: `DCO`, `DIMCONT`. Fortsetter fra det siste lineære eller innrettede målet som ble laget (eller spør `Velg lineært eller innrettet mål`).

- `Angi andre origo for målhjelpelinje [Angre (U)]`, gjentatt til Enter.

### DIMBASELINE

Alias: `DBA`, `DIMBASE`. Som {{cmd:DIMCONTINUE}}, men hvert mål starter fra det første origoet og stables lenger ut.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Ingen alias. Hver spør `Angi ny verdi for … <gjeldende>` og setter den størrelsen for **nye** måltilsettinger: samlet skala, teksthøyde, pilstørrelse, desimaler (opptil 8), mellomrom rundt teksten, forlengelse utover målelinjen, forskyvning fra origo. Se [Sett størrelser for måltilsettinger](topic:dimension-settings).

### DIMLUNIT

Målinnstilling: formatet for nye måltilsettinger alene (1 vitenskapelig, 2 desimal, 3 ingeniør, 4 arkitekt, 5 brøk).

### DIMSTYLE og -DIMSTYLE

Alias: `DST`, `DDIM`, `D`. Behandleren for måltilsettingsstiler: {{ui:Sett aktiv}}, {{ui:Ny…}}, {{ui:Endre…}}, {{ui:Gi nytt navn…}}, {{ui:Slett}}, {{ui:Sammenlign…}}, {{ui:Bruk på valgte}}. `-DIMSTYLE` på kommandolinjen: `Måltilsettingsstil [Gjenopprett (R)/Lagre (S)/Slett (D)/Bruk (A)/Sammenlign (C)/Gi nytt navn (N)/Liste (L)]`. Se [Sett størrelser for måltilsettinger](topic:dimension-settings#named-dimension-styles).

### DIMEDIT og DIMTEDIT

`DIMEDIT` (`DED`): `Redigering av mål [Hjem/Ny/Roter/Skrå (O)] <Hjem>`, deretter målene (eller de som allerede er valgt). Ny spør etter teksten (`<>` = målingen). Roter for en vinkel (0 setter teksten tilbake). Skrå for målhjelpelinjenes vinkel fra X-aksen (Enter = ingen; bare lineære og innrettede mål). `DIMTEDIT` (`DIMTED`): `Måltekst [Venstre (L)/Høyre (R)/Senter (C)/Hjem/Vinkel (A)] <Senter>`. Se [Sett størrelser for måltilsettinger](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Alias: `DTU`. `Enheter i teksten til nye måltilsettinger [Tegningsenheter (D)/mm/cm/m/km]`, eller med mål valgt `Enheter i teksten til de valgte målene`. Skriver den målte lengden i den enheten med enheten etter (DIMLFAC og et DIMPOST-suffiks). `D` går tilbake til tegningsenheter. Se [Måltilsettinger i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Alias: `RC`. Skriver `Buelengde: … Type: …`, deretter `Angi første punkt [Buelengde (A)/Objekt (O)/Rektangulær (R)/Mangekant (P)/Frihånd (F)]`. Rektangulær spør `Angi motsatt hjørne`. Mangekant `Angi neste punkt (Enter lukker skyen) [Angre (U)]`. Frihånd følger pekeren til et klikk eller {{key:Enter}}. `O` spør `Velg objekt` og `Reverser retning? [Ja (Y)/Nei (N)] <N>`, og gjør objektet om til skyen. `A` spør `Angi lengden på hver bue`. `R`, `P` og `F` velger typen for neste sky. Resultatet er en lukket polylinje av buer.

### MLEADER

Alias: `MLD`; eller {{ui:Hjelpelinje}}. `Angi plassering av pilspiss for hjelpelinje [Pilspissstørrelse/Landingsavstand]`, `Angi plassering for hjelpelinjens landing`, deretter teksten i boksen på stedet (eller, uten den, `Angi tekst (en tom linje avslutter)`). Lagret som en ekte flerhjelpelinje i DWG. DXF beholder linjene, pilspissen og teksten den tegner.

## Parametrisk

Se [Gi tegningen betingelser](topic:constraints) og [Bruk parametere og ligninger](topic:parameters). Betingelser virker på fanen {{ui:Modell}}.

### GEOMCONSTRAINT og GC-kommandoene

Alias `GCON`: `Angi betingelsestype [Horisontal/Vertikal/Vinkelrett/Parallell/Tangent/Sammenfallende/Konsentrisk/Kolineær/Symmetrisk/Lik/Fiksér] <Horisontal>`, deretter kommandoens egne ledetekster.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Velg et objekt [2 punkter] <2 punkter>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Velg første objekt`, `Velg andre objekt` (det andre flyttes).
- {{cmd:GCCOINCIDENT}}: `Velg første punkt [Objekt/Autobetingelse] <Objekt>`, `Velg andre punkt [Objekt] <Objekt>`.
- {{cmd:GCFIX}}: `Velg punkt [Objekt] <Objekt>`.
- {{cmd:GCSYMMETRIC}}: `Velg første objekt [2 punkter] <2 punkter>`, `Velg andre objekt`, `Velg symmetrilinje`.

### DIMCONSTRAINT og DC-kommandoene

Alias `DCON`: `Velg assosiativt mål å konvertere [Lineær/Horisontal/Vertikal/Innrettet/Vinkel/Radial/Diameter/Konverter] <Innrettet>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Angi første betingelsespunkt [Objekt] <Objekt>`, `Angi andre betingelsespunkt`, `Angi plassering av målelinje`, `Måltekst <d1=40>` (et tall, et uttrykk, eller `navn=uttrykk`).
- {{cmd:DCALIGNED}}: som over, med `[Objekt/Punkt og linje/2 linjer]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Velg bue eller sirkel`. {{cmd:DCANGULAR}}: `Velg første linje eller bue`, `Velg andre linje`.
- {{cmd:DCCONVERT}}: `Velg mål å konvertere`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Velg objekter [Innstillinger (S)]`. `S` spør avstands- og vinkeltoleranser.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Velg objekter`. Betingelsene deres fjernes.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Velg objekter [Vis alle/Skjul alle]`, deretter `[Vis/Skjul]`.
- {{cmd:DCDISPLAY}}: `Angi et valg [Vis/Skjul]`.

### PARAMETERS og -PARAMETERS

{{cmd:PARAMETERS}} (aliaser `PAR`, `PARAM`) åpner panelet {{ui:Parametere}}. `-PARAMETERS`: `Angi et valg [Ny/Rediger/Gi nytt navn/Slett/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Laster ned en makro (.swb) som bygger modellen opp igjen som én betinget skisse i SolidWorks. Se [Flytt skisser til og fra andre delmodelleringsprogrammer](topic:solidworks-sketches).

## Blokker

### ANNOSCALE

Alias: `CANNOSCALE`. Sier tegningens annoteringsmålestokk og hvor mange annoterende objekter den har, og spør deretter `Ny annoteringsmålestokk`: skriv `1:50`, `1:100`, `2:1`, et bart tall (`50` er 1:50) eller navnet på en av tegningens egne målestokker. All annoterende tekst og alle annoterende mål endres i størrelse, slik at de skrives ut i samme størrelse i den nye målestokken. Det er ett steg å angre. Objekter som ikke er annoterende, blir stående. Se [Enheter, papirer og målestokker](topic:units-papers-scales#annotate-by-scale).

### SCALELISTEDIT

Alias: `SCALELIST`. `Målestokkliste [Legg til (A)/Rediger (E)/Slett (D)/Liste (L)/Tilbakestill (R)]` til {{key:Enter}}. Legg til: `Navn på målestokk`, `Papirenheter`, `Tegningsenheter`. Rediger og Slett spør etter målestokkens navn. Tegningens egne målestokker blir med i visningsområdets og plottets målestokklister, og lagres med tegningen. Se [Enheter, papirer og målestokker](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT og PEDIT

`SPLINE` (`SPL`): `Første punkt på splinen [Metode/Objekt] (Tilpass punkter)`. Tilpass: punkter kurven går gjennom. `Lukk`, `Angre`, deretter `Starttangent` og `Slutttangent` (et punkt, eller {{key:Enter}}). Metode › Kontrollpunkter spør etter en grad (1 til 5) og tegner fra en kontrollmangekant. Objekt gjør polylinjer om til splines gjennom hjørnene deres. `SPLINEDIT` (`SPE`): `[Tilpasningsdata/Rediger hjørne/Konverter til polylinje/Åpne eller lukk/Snu/Angre/Avslutt]`. Tilpasningsdata `[Legg til/Slett/Flytt/Rens/Tangenter/Avslutt]`. Rediger hjørne `[Legg til kontrollpunkt/Flytt/Vekt/Avslutt]`. `PEDIT` (`PE`): `[Lukk/Åpne/Slå sammen/Bredde/Tilpass/Spline/Fjern kurve/Linjetypegenerering/Snu/Angre/Avslutt]`, `M` for flere objekter. Linjer, buer og splines tilbys først som polylinjer. Se [Splines og polylinjer](topic:splines).

### BLOCK

Alias: `B`, `BMAKE`.

- `Angi blokknavn`. Hvis den finnes: `Blokken "…" finnes allerede. Definer den på nytt? [Ja (Y)/Nei (N)] <N>`.
- `Angi innsettingsbasispunkt`
- `Velg objekter`. De erstattes av én referanse til den nye blokken.

### WBLOCK

Alias: `W`, `-WBLOCK`. Skriver en blokk, noen objekter eller hele tegningen til en ny DWG- eller DXF-fil. `WBLOCK source [Blokk/Hele tegningen/Objekter] <Objekter>`:

- **Objekter**: `Angi innsettingsbasispunkt` (det blir den nye tegningens origo), `Velg objekter`, deretter `Filformat [DWG/DXF/R12 DXF]` og `Filnavn for den nye tegningen`, deretter `Hva skal gjøres med objektene [Behold/Konverter til blokk/Slett]`. Konverter erstatter dem med én referanse til en blokk med filens navn. Slett fjerner dem.
- **Blokk**: `Blokk å skrive ut`. Blokkens egne objekter, med basispunktet som origo, også innfelte blokker.
- **Hele tegningen**: alle objekter i modellrommet. Ark skrives ikke. Bruk {{cmd:SAVEAS}} for en kopi som beholder dem.

Den nye filen inneholder bare layerne, linjetypene, tekst- og måltilsettingsstilene og blokkene objektene bruker, og tegningens enheter. Versjonen av en DWG er den {{cmd:SAVEAS}} sist brukte. I nettleseren lastes filen ned. I Studio åpnes lagringsdialogen.

### ATTDEF

Alias: `ATT`, `DDATTDEF`, `-ATTDEF`; eller {{ui:Blokker}} › {{ui:Mer}} › {{ui:Definer attributt}}. Skriver ut modusene, deretter `Angi et valg å endre (Enter når du er ferdig) [Usynlig/Konstant/Forhåndsutfylt]`, `Angi navn på attributtmerkelapp`, `Angi ledetekst for attributt`, `Angi standardverdi for attributt` (`Angi attributtverdi` når konstant), `Angi startpunkt for tekst`, `Angi teksthøyde`, `Angi rotasjonsvinkel for tekst`. {{cmd:BLOCK}} tar attributtdefinisjonene med inn i blokken.

### EATTEDIT og ATTEDIT

`EATTEDIT` (`DDATTE`, eller dobbeltklikk en referanse med attributter; {{ui:Blokker}} › {{ui:Mer}} › {{ui:Rediger attributter}}): `Velg en blokkreferanse med attributter`, deretter dialogboksen {{ui:Rediger attributter}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): den samme referansen, deretter `<ledetekst> (<TAG>) <verdi>` for hver attributt. {{key:Enter}} beholder en verdi. Se [Attributter](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Oppdater attributtene til referansene for hvilken blokk [Navn/Velg/Alle] <Velg>`. Verdier beholdes. Nye attributter får sin standardverdi, fjernede går bort, og plasseringer tilbakestilles.

### BATTMAN

{{ui:Blokker}} › {{ui:Mer}} › {{ui:Attributtbehandler}}. Dialogboksen: blokk, attributter (merkelapp, ledetekst, standard, moduser, rekkefølge), {{ui:Oppdater referansene (verdiene beholdes)}}, {{ui:Bruk}}.

### REFEDIT og REFCLOSE

{{ui:Blokker}} › {{ui:Mer}} › {{ui:Rediger på stedet}}. `REFEDIT`: `Velg blokkreferansen å redigere på stedet` (eller utvalget). `REFCLOSE`: `Lagre endringene i "…" [Lagre/Forkast] <Lagre>`. Linjens {{ui:Lagre blokken}} og {{ui:Forkast}} gjør det samme. Hele redigeringen er ett steg å angre. Se [Attributter](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT og BCLOSE

`BE`; eller {{ui:Blokker}} › {{ui:Mer}} › {{ui:Rediger blokk}}. `Angi blokknavn å redigere <blokken til den valgte referansen>` åpner blokkredigeringen. `BCLOSE` spør `Lukk blokkredigeringen på "…" [Lagre/Forkast] <Lagre>`. Bannerets {{ui:Lagre blokk}} og {{ui:Forkast endringer}} gjør det samme. Alt gjort i redigeringen er ett steg å angre.

### VIEWBASE

Alias: `FLATSHOT`. En flat 2D-visning av volumene på 3D-fanen: `Visning [Forfra/Ovenfra/Høyre/Venstre/Bakfra/Nedenfra/Iso]`, `Skjulte linjer [Vis/Skjul]`, en skala (`1:20`, `2:1`; {{key:Enter}} tar den som passer arket), deretter visningens senter. Én blokkreferanse. Synlige kanter legges på VIEW-VISIBLE, skjulte stiplet på VIEW-HIDDEN. Se [Flate visninger på et ark](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Alias: `-PUBLISH`; eller {{ui:Alle ark i én PDF}} i dialogboksen {{ui:Plott til PDF}}. `Ark å plotte [Alle/Noen]`: {{key:Enter}} plotter alle ark, `S` spør etter navn skilt med komma. Én PDF, en side og et bokmerke per ark. Se [Alle ark i én PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Alias: `SSM`, `SHEETSETMANAGER`. Tar deg til seksjonen {{ui:Arksett}} i venstre panel: ark fra mange tegninger, nummerert og med tittel, tegningshodene fylt ut fra settet, publisert som én PDF. Se [Arksett](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): velg en DWG eller DXF, deretter innsettingspunktet. {{cmd:XREF}} (`XR`, `-XREF`): `Koblede tegninger [?/Fest/Last inn på nytt/Bind/Koble fra] (Enter: ?)`. Med mer enn én kobling velger du en av referansene, eller skriver `N` og navnet. Se [Koblede tegninger](topic:files#linked-drawings-external-references).

### COUNT

Alias: `BCOUNT`; eller {{ui:Blokker}} › {{ui:Mer}} › {{ui:Tell blokker}}. `Velg en blokkreferanse å telle, eller [Alle/Eksporter] (Enter: Alle)`: et valg markerer og teller hver referanse til den blokken i dette rommet. {{key:Enter}} eller `A` lister dem alle. `E` og deretter `C` (tall) eller `A` (attributter) laster ned en CSV. Se [Tell blokker og eksporter en tabell](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Alias: `I`, `DDINSERT`.

- `Angi blokknavn eller [Fil (F)/Bibliotek (L)] <siste blokk>` (store og små bokstaver spiller ingen rolle). `F` spør etter en DWG eller DXF, deretter hele tegningen eller én av blokkene. Et navn som allerede er brukt, spør om {{ui:Behold eksisterende}} eller {{ui:Gi nytt navn}}. `L` åpner bibliotekspanelet.
- `Angi innsettingspunkt [Skala (S)/Roter]`. `S` spør `Angi skalafaktor`, `R` spør `Angi rotasjonsvinkel`. Begge huskes.
- Deretter `Angi <ledetekst> (<TAG>) <standard>` for hver attributt blokken ber om. Se [Blokkattributter](topic:attributes).

### LIBRARY

Alias: `LIB`. Åpner bibliotekspanelet: sett inn elementer, sjekk for oppdateringer, bibliotekets kildehenvisninger. Ingen spørsmål. Se [Sett inn fra en fil eller biblioteket](topic:insert-from-file-and-library).

### STEELMEMBER

Alias: `SMEMBER`; eller {{ui:3D-stav}} på bibliotekets fane {{ui:Standard}}. `Profilstørrelse <W12x26>` (som fanen lister den), deretter `Startpunkt [Søyle]` og `Sluttpunkt`: et volumelement på 3D-fanen mellom de to punktene, stående på bakken. `C` spør etter søylens basispunkt og høyde. Ett steg å angre. Se [Plasser stålprofiler og standarddeler](topic:steel-and-standard-parts).

### PARTSLIST

Alias: `PLIST`. `Øvre venstre hjørne av delelisten`, deretter `Teksthøyde <2.5>`: tegner en tabell over alle standarddeler og stålprofiler satt inn fra biblioteket (postnummer, antall, del, standard, størrelse, lengde, materiale, masse). Ett steg å angre. Se [Plasser stålprofiler og standarddeler](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Alias: `PU`. Fjerner blokkdefinisjoner som ingenting bruker. Ingen spørsmål.

### DELBLOCKS

Eller {{ui:Blokker}} › {{ui:Mer}} › {{ui:Slett blokker}}. `Velg blokk å slette [Navn (N)/Avslutt (X)]`: velg en blokkreferanse, eller `N` for listen over blokker med et filter (velg flere), eller `X` / {{key:Enter}} for å avslutte. Hver referanse går, i modellen, på hvert ark og inne i andre blokker, og deretter definisjonen. Kommandolinjen sier hva som ble slettet, og hva som ikke kunne slettes. Blokker uten navn og koblede tegninger tilbys ikke. Ledeteksten kommer tilbake for neste blokk. Hele kommandoen er ett steg å angre.

## Ark og plott

### LAYOUT

Alias: `LO`, `NEWLAYOUT`; eller {{key:Plus}}-knappen under tegningen. Et nytt ark med ramme, tegningshode og ett visningsområde, på ISO A3 (eller Tabloid for tegninger i tommer eller fot). Ingen spørsmål.

### MVIEW

Alias: `MV`. Bare på et ark ({{cmd:VPORTS}} på et ark gjør det samme).

- `Angi hjørne på visningsområde`, `Angi motsatt hjørne`. Visningsområdet viser hele modellen i en standard målestokk.

### VPORTS

Alias: `VIEWPORTS`. {{cmd:SPLIT}} er det samme fra et ark også, og {{ui:Visning}} › {{ui:Mer}} › {{ui:Del side ved side}}, {{ui:Del over hverandre}}, {{ui:Fire ruter}}, {{ui:Én rute}} kjører den. På modellen: `Angi antall ruter [Enkel (SI)/2/3/4] <3>`. `2` spør `[Horisontal/Vertikal] <Vertikal>` (Vertikal = side ved side), `3` spør `[Venstre/Høyre] <Høyre>` (hvor den store ruten går). Hver rute beholder sin egen visning og sitt eget rom. Et klikk gjør en rute aktiv. På et ark er det {{cmd:MVIEW}}. Se [Del skjermen](topic:split-screen).

### VPVIEW

Ingen alias. Bare på et ark.

- `Velg visningsområde` (hoppes over hvis ett er valgt), deretter på modellen: `Angi første hjørne på vinduet som skal vises`, `Angi motsatt hjørne`.

### UCS

Ingen alias. Et koordinatsystem eget til deg, ikke en redigering. `Angi origo for UCS [Navngitt (NA)/Objekt (OB)/Forrige (F)/Verden (W)/Z/3punkt (3)] <Verden>`: et punkt er et nytt origo, deretter `Angi punkt på X-aksen (Enter beholder vinkelen)`. `Z`: `Angi rotasjonsvinkel om Z-aksen <90>`. `3`: origo, et punkt på den positive X-aksen, et punkt på den positive Y-siden. `OB`: `Velg objekt for å justere UCS`. `NA`: `[Gjenopprett/Lagre/Slett/?]` og et navn. Visningen snur slik at den nye X-aksen står vannrett. Se [Snu visningen og bruk egne koordinater](topic:ucs-and-turned-view).

### PLAN

Ingen alias. `Angi et valg [Gjeldende ucs/Ucs/Verden] <Gjeldende ucs>`: snur den aktive rutens visning slik at UCS-ens X-akse (eller verdenens) står vannrett. Ingenting i tegningen flyttes.

### TURNLEFT, TURNRIGHT, TURNWORLD

Ingen alias; eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Drei visningen 90° til venstre}}, {{ui:Drei visningen 90° til høyre}}, {{ui:Tilbake til verden}}. Samme som `UCS Z -90`, `UCS Z 90` og `UCS W`, med visningen som følger.

### VPLAYER

Ingen alias. På et ark, eller inne i et visningsområde. `Angi et valg [?/Frys/Tin/Tilbakestill/Vpvisdflt]`: `F`, `T` og `R` spør etter layernavn (kommaer, `*` og `?` som jokertegn), deretter visningsområder `[Alle/Velg/Gjeldende] <Gjeldende>`. Tilbakestill setter hver layer tilbake til standarden «frosset i nye visningsområder». `V` setter den standarden (`[Frosset/Tint]`), som {{cmd:MVIEW}} bruker. `?` lister layerne som er frosset i det gjeldende visningsområdet. Kolonnen for visningsområde i layerpanelet gjør det samme for ett visningsområde. Se [Frys en layer i ett visningsområde](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Alias: `MS`; eller dobbeltklikk inne i et visningsområde. Bare på et ark. Arbeid med modellen gjennom et visningsområde: det valgte, det eneste på arket, eller `Klikk inne i visningsområdet for å arbeide i`. Panorering og zoom inne endrer visningsområdets visning. Et område med låst skjerm beholder visningen, og arket flyttes i stedet. Den nye visningen skrives som ett steg å angre. Se [Arbeid med modellen gjennom et visningsområde](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Alias: `PS`; eller dobbeltklikk utenfor visningsområdet, eller klikk en fane under tegningen. Tilbake til arket.

### PLOT

Alias: `PRINT`, `PUBLISH`, `EXPORTPDF`; eller {{key:Mod+P}}. Åpner dialogboksen {{ui:Plott til PDF}}. Se [Plott til PDF](topic:plot-pdf).

### PLOTSTYLES

Alias: `STYLESMANAGER`, `PSTABLES`; eller {{ui:Rediger tabeller…}} i dialogboksen {{ui:Plott til PDF}}. Åpner {{ui:Plottestiltabeller}}: hva hver farge skrives ut som (farge, grå, blekk, linjevekt), lagret med tegningen. Se [Plottestiltabeller](topic:plot-pdf#plot-style-tables).

## Oppslag

### CAL

Skriver ut verdien av en beregning, slik den ville blitt lest hvor som helst en lengde skrives.

- `Uttrykk`: skriv det, for eksempel `12'6"+3/4"` eller `(24'-0")/3`, og trykk {{key:Enter}}. CadCraft skriver `= 12'-6 3/4"   (150.75 tegningsenheter)`. Se [Regning i en skrevet verdi](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Alias: `DI`; eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Mål avstand}}.

- `Angi første punkt`, `Angi andre punkt`. Skriver ut avstand, vinkel, Delta X og Delta Y.

### AREA

Alias: `AA`; eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Areal}}. Skriver ut arealet og omkretsen.

- `Angi første hjørnepunkt [Objekt (O)/Legg til areal (A)/Trekk fra areal (S)] <Objekt>`
  - Klikk eller skriv hjørner. Ved `Angi neste punkt (Enter lukker) [Angre (U)]` trykker du {{key:Enter}} for å lukke omrisset. `U` angrer siste hjørne.
  - {{key:Enter}} eller `O`, deretter `Velg objekt`: en sirkel (skriver ut omkretsen), en ellipse, en polylinje (en åpen lukkes med en rett linje for arealet, og lengden skrives ut) eller en skravur (hull trekkes fra).
  - `A` (Legg til areal) og `S` (Trekk fra areal) holder en løpende sum: ledeteksten starter med `(legg til-modus)` eller `(trekk fra-modus)`, hvert areal legges til eller trekkes fra, og `Totalt areal = …` skrives ut etter hvert. I disse modusene velger `O` objekter til {{key:Enter}}. {{key:Enter}} ved første ledetekst avslutter kommandoen.

### MEASUREGEOM

Alias: `MEA`. `Angi et valg [Distanse/Radius/Vinkel (A)/Areal (AR)] <Distanse>`. Etter hver måling spør den igjen, med `Avslutt (X)` som standard.

- `D`: to punkter, som {{cmd:DIST}}.
- `R`: `Velg bue eller sirkel`. Skriver ut radiusen og diameteren.
- `A`: en bue (dens inkluderte vinkel), en linje og deretter en andre linje (vinkelen mellom dem, mot deres fjerne ender), eller {{key:Enter}} og tre punkter (toppunkt, deretter de to endene).
- `AR`: som {{cmd:AREA}}, ett areal.

### ID

Ingen alias. `Angi punkt`. Skriver ut X og Y.

### LIST

Alias: `LI`, `LS`. `Velg objekter`. Skriver ut hvert objekts type, layer og hovedmål.

## Visning, fil og annet

### ZOOM

Alias: `Z`.

- `Angi hjørne på vindu, skriv en skalafaktor (nX) [Utstrekning (E)/Alle (A)/Vindu (W)/Forrige (P)/Skala (S)/Senter (C)]`. Klikk to hjørner for et vindu. `E`, `A` eller Enter: hele tegningen.
- `P` (Forrige, eller {{ui:Forrige}} på verktøylinjen) går tilbake til visningen før, opptil 10 visninger per fane. En rekke hjulsteg eller én panorering teller som én visning.
- Et tall som `2`, `2x` eller `0.5x` (eller `S` og deretter tallet) zoomer inn eller ut med den faktoren rundt midten av skjermen.
- `C` spør `Angi senterpunkt` og `Angi høyde eller forstørrelse (nX)`.

### PDFATTACH, PDFIMPORT og PDF-kommandoene

Alias: `PDFATT` for {{cmd:PDFATTACH}}, `PDFIM` for {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} legger en PDF-side under tegningen (fil, side, innsettingspunkt, skala, rotasjon). {{cmd:PDFIMPORT}} gjør en sides linjer, kurver, fyll og tekst om til tegningsobjekter på layere oppkalt etter PDF-en, i sann størrelse, en skrevet målestokk, eller skalert fra to punkter og en reell avstand. {{cmd:PDFCLIP}} klipper et underlegg. {{cmd:PDFADJUST}} setter dempning, kontrast og monokrom, eller slår det av. {{cmd:PDFLAYERS}} slår PDF-ens egne layere av og på. {{cmd:PDF}} gir CadCraft filene tegningens underlegg bruker igjen. Se [PDF-underlegg](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Autofullfør i tegningen: uten en kommando i gang vises et grått spøkelse som viser hva tegningens egne mønstre sier kommer neste. {{cmd:AUTOCOMPLETE}} slår den `On` eller `Off` (også Innstillinger › CadCraft), eller `Show` viser hva den ville foreslå nå. **Tab** tegner spøkelset som ett steg å angre. **Esc** avviser det til tegningen endres. Den finner tre ting i de nyeste objektene: neste kopi av noe tegnet to ganger eller mer med et jevnt steg (stendere, søyler, et trappetrinns opptrinn og trinn), neste steg i en polylinjetrapp, og den manglende siden av et rom eller en veggkjede. Midt i {{cmd:LINE}} eller {{cmd:PLINE}} er spøkelset **neste punkt**: neste steg i en trapp (opptrinn, trinn, opptrinn…), det fjerde hjørnet i et rektangel, punktet som lukker det, eller ett steg til likt. Før markøren nær det og trykk **Tab**, som om du hadde klikket der. Fortsett, eller trykk Enter. Beregnet på denne datamaskinen med regler, uten modell.

### AUTOSHEET

Alias: `ASH`. Ark som legger seg selv ut. {{cmd:AUTOSHEET}} tar delene av tegningen (dine navngitte visninger, eller de separate delene av modellen, eller hele modellen), velger en papirstørrelse (eller den du gir), gir hver del en standard målestokk (én målestokk for alle, eller den største hver kan ta), og plasserer visningene i rader på nye ark, med en tegningshode og en bildetekst (navn og målestokk) under hver. Det som ikke får plass på ett ark, får et eget ark. Ett steg å angre. Beregnet på denne datamaskinen med regler, uten modell.

### PHOTOSKETCH

Alias: `PSK`. Skisse-foto til tegning. Velg et bilde (JPEG, PNG eller TIFF) av en håndskisse på et ark papir. {{cmd:PHOTOSKETCH}} finner arkets fire hjørner, retter opp perspektivet, bruker papirstørrelsen du oppgir (`Paper`, eller den nærmeste standarden) og skalaen (`Scale`) til skissen (1 : n). Deretter sporer den penneliniene til linjer, buer og sirkler, med en layer for hver pennfarge (svart, rød, blå, grønn). Hvis den ikke finner kanten av papiret, tar den hele bildet som arket og sier fra om det. Skrift utelates. Ett steg å angre. Gjort på denne datamaskinen med klassisk bildebehandling, uten modell, og ingenting sendes noe sted. Se også kommandoene for skannede tegninger.

### AUTODIM

Alias: `ADIM`. Automatisk mål etter regler. {{cmd:AUTODIM}} setter mål på de valgte objektene (eller hele tegningen) fra deres vannrette og loddrette kanter: en kjede av mål langs sidene du velger (`Sides`), ett samlet mål utenfor den, bredden på hver åpning (et mellomrom mellom kollineære veggslinjer), en diameter for hver hulldimensjon, og med `Grid` avstanden mellom rutenettlinjer. Et mål som allerede finnes, lages ikke på nytt. Ett steg å angre. Beregnet på denne datamaskinen med regler, uten modell.

### GRIDMOVE

Alias: `GM`. Å flytte en rutenettlinje tar med settet. {{cmd:GRIDMOVE}} flytter en rutenettlinje (en linje på en layer der navnet sier grid eller axis) og det som henger på den: vegger med en ende på linjen strekkes for å følge den, vegger langs den flyttes hele, søyler (blokkreferanser og sirkler på linjen), dens boble og merkelapp flyttes, og mål der punktene sitter på den, måler den nye avstanden. Gi to punkter (bare delen på tvers av linjen teller) eller `Distance`. Ett steg å angre tar alt tilbake. Gjort etter regler på denne datamaskinen.

### DETAILS

Alias: `DET`. Detaljer som finner deg. {{cmd:DETAILS}} beholder firmaets egne detaljer: `Legg til` legger en blokk fra denne tegningen i listen, `Liste` og `Fjern` styrer den, og `Finn` rangerer dem for det som er valgt (eller det du tegnet sist). Rangeringen gjøres etter ordene på layerne, blokknavnene, skravurmønstrene og merknadene, mot hver detaljs navn og merknader. Slik finner en vindushode din sokkelbeslag. Velg et nummer og et punkt for å plassere den. Med `Hint` på (også Innstillinger › CadCraft) gir det å velge noe en detalj passer til, én linje i statuslinjen. Listen lagres i denne nettleseren, på denne datamaskinen, og det er den listen som søkes i. `Del` legger den også i dokumentmappen din (`.cadcraft/firm-details.json`, med hver blokks tegning). `Hent` legger til det teamet ditt har og du mangler, `Send` legger til det du har og de mangler, `Begge` gjør begge deler. Ingenting fjernes fra noen av sidene. Åpne dokumentmappen først ({{cmd:DOCUMENTS}}). Når den mappen er en Team Cloud Plan-mappe, deler hele teamet én liste. Et detaljelement i bibliotekspanelet har en knapp **Legg til i firmaets detaljer** som legger det i samme liste. Beregnet på denne datamaskinen med ord, uten modell.

### SKETCHFIX

Alias: `SKF`. Penneskisser blir presis geometri. Trykk og dra ett frihåndsstrøk om gangen (penn, mus eller finger), deretter Enter. Hvert strøk leses som en linje, sirkel, bue, rektangel eller polylinje. Nesten vannrette og loddrette linjer gjøres helt vannrette og loddrette. Et lukket rundt strøk blir en sirkel, og et lukket strøk med fire rettvinklede hjørner blir et rektangel. Endene på strøkene trekkes sammen og ut på endene som allerede finnes i tegningen. Ett steg å angre. Beregnet på denne datamaskinen med regler, uten modell.

### SCANATTACH og kommandoene for skannede tegninger

Alias: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}. {{cmd:RASTERSNAP}} har ingen alias. De virker på et bilde, med ett steg å angre hver. {{cmd:SCANATTACH}} setter inn en PNG, JPEG, TIFF (én side eller alle) eller en PDF-side som er et bilde. {{cmd:SCANSCALE}} skalerer arket fra to valgte punkter og den sanne avstanden. {{cmd:SCANALIGN}} flytter og roterer det til to punkter (`Skaler arket til passform` Ja/Nei). {{cmd:SCANDESKEW}} viser vinkelen på arkets lange linjer og roterer arket når du `Accept` eller gir en `Value`. {{cmd:SCANCLEAN}} gjør det svart-hvitt (`Threshold` Auto/Adaptive/Level, `Specks`) og `Run`. {{cmd:SCANCROP}} beholder et vindu. {{cmd:SCANERASE}} sletter et `Rectangle`, `Polygon` eller `Lasso`. {{cmd:SCANTRACE}} sporer linjer og buer til en ny layer (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) og melder hva den fant, og hva den lot være som raster. {{cmd:SCANINFO}} lister den opprinnelige filen og stegene. {{cmd:RASTERSNAP}} slår fangst til linjene på skannede ark På eller Av. Se emnet Skannede tegninger og sporing.

### REGEN og REGENALL

Alias: `RE` for {{cmd:REGEN}}, `REA` for {{cmd:REGENALL}}. Bygg opp på nytt det som tegnes på skjermen fra tegningen. {{cmd:REGEN}} gjør det for fanen du ser på (på et ark også modellen som visningsområdene viser). {{cmd:REGENALL}} gjør det for hver fane, hver rute i delt skjerm og hver åpen tegning. Bruk dem når bildet virker utdatert etter en skriptet eller svært stor endring, eller etter at en assistent har redigert tegningen. Selve tegningen røres ikke, så det er ingenting å angre.

### NAMEDVIEW

Alias: `NV`, `VIEWS`. `Angi et valg [?/Gjenopprett/Lagre/Vindu/Slett] <Gjenopprett>`, deretter visningens navn. `S` lagrer visningen på skjermen, `W` et vindu du velger, `R` viser en lagret visning, `D` sletter en, `?` lister visningene i denne fanen. Å lagre under et eksisterende navn erstatter det. Hver endring er ett steg å angre. Visninger hører til fanen de ble lagret på. DWG- og DXF-filer beholder dem (VIEW-tabellen). Et arks visninger kommer tilbake på det første arket, siden filen ikke sier hvilket.

### UNDO og REDO

Alias: `U` for {{cmd:UNDO}}. {{cmd:REDO}} har ingen. Også {{key:Mod+Z}} og {{key:Mod+Y}}.

### LAYER

Alias: `LA`. Hopper til panelet {{ui:Layer}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Angi linjetype for nye objekter`: `ByLayer`, `ByBlock` eller et navn (`?` lister dem: Continuous, tegningens egne, og DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE med størrelsene `2` (halv) og `X2` (dobbel)). {{cmd:LWEIGHT}} (`LW`): linjevekten for nye objekter i mm, eller `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): tegningens linjetypeskala (kan angres). {{cmd:LWDISPLAY}} (`LWT`): `Vis linjevekter [PÅ/AV]`, det samme som knappen {{ui:LWT}} i statuslinjen. Se [Linjevekter og linjetyper](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Angi objekttype som skal få nytt navn [LAyer/Block]`, `Angi gammelt navn`, deretter det nye navnet. Objekter eller referanser følger. {{cmd:LAYMRG}}: `Velg objekt på layeren som skal slås sammen, eller [Navn]` til {{key:Enter}}, deretter `Velg objekt på målayeren eller [Navn]` og `Y`. {{cmd:LAYDEL}}: `Velg objekt på layeren som skal slettes, eller [Navn]`, deretter `Y`: layeren og hvert objekt på den forsvinner (ikke layer 0, DEFPOINTS eller den aktive layeren). Ett steg å angre for hver. Se [Organiser en tegning med layere](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Layere ved å peke på objekter. Også i menyen {{ui:Verktøy}} i layerpanelet. {{cmd:LAYISO}}: `Velg objekter på layeren(e) som skal isoleres`, deretter {{key:Enter}}: alle andre layere slås av. {{cmd:LAYUNISO}} slår dem på igjen. {{cmd:LAYOFF}} og {{cmd:LAYFRZ}}: `Velg et objekt på layeren som skal slås av` (eller fryses), om og om igjen. `U` angrer det siste, {{key:Enter}} avslutter. {{cmd:LAYMCUR}}: `Velg objekt hvis layer skal bli aktiv`. {{cmd:LAYON}} slår på alle layere, {{cmd:LAYTHW}} tiner alle layere. Hver kommando er ett steg å angre. Se [Organiser en tegning med layere](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} starter en tom tegning, og {{cmd:OPEN}} åpner en DWG eller DXF. Hver får sin egen fane over tegningen (en urørt ny tegning brukes i stedet for en ny fane). Å lukke en fane med ulagrede endringer spør først. Se [Del skjermen](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, også {{key:Mod+S}}) laster ned en kopi i tegningens format: DWG hvis den ble åpnet fra en DWG, DXF hvis fra en DXF. En ny tegning bruker formatet sist valgt i Lagre som i denne nettleseren, ellers DWG.

{{cmd:SAVEAS}} (også {{key:Mod+Shift+S}}) åpner dialogboksen {{ui:Lagre en kopi som}}: velg {{ui:DWG}} (og dens {{ui:Version}}), {{ui:DXF R12}} eller {{ui:DXF 2000}}, og klikk deretter {{ui:Lagre}}. Valget huskes for denne tegningen og for nye tegninger i denne nettleseren.

{{cmd:DXFOUT}} laster alltid ned en DXF R12-kopi, uten å endre formatet {{cmd:SAVE}} bruker.

Se [Filer: hva som åpnes, hva som lagres](topic:files#saving).

### TOUR

Alias: `TUTORIAL`. Starter den seks-stegs førstetegnings-veiledningen igjen. Se [Kom i gang](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Alias: `TBDOCK`. `Verktøylinjeposisjon [Øverst/Nederst/Venstre/Høyre]`. Se [Innstillinger](topic:settings#toolbar-position).

### COMMANDLINE

Alias: `CMDLINE`. `Kommandolinje [Festet nederst/Frigjort/En linje/Vist historielinjer/Kommandohistorikk (F2)]`: fester eller frigjør kommandolinjen, gjør den til én linje, spør hvor mange historielinjer som skal vises (0 til 12), eller åpner historikken. Se [Innstillinger](topic:settings#command-line).

### TOPAREA

`Topplinje [Standard/Kompakt]`: linjene over tegningen slik de var, eller kompakte. Se [Innstillinger](topic:settings#top-area).

### POLARANG

`Angi steg for polarvinkel i grader <90>`: steget {{ui:Polar}}-sporingen følger (mer enn 0, opptil 180). Lagres i denne nettleseren.

### UNITS

Alias: `UN`. Hvordan lengder skrives og skrives inn.

- `Angi lengdeformat [Vitenskapelig/Desimal/Ingeniør/Arkitekt/Brøk] <gjeldende>`
- Arkitekt og Brøk: `Angi nevner for minste brøk som vises (1, 2, 4, 8, 16, 32, 64, 128 eller 256)`. For de andre: `Angi antall desimaler (0 til 8)`.

Nye mål følger det. Ett steg å angre. Samme som {{ui:Lengdeformat}} og {{ui:Presisjon}} i {{ui:Gjeldende innstillinger}}. Se [Fot og tommer](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Alias: `GDS`. Vis en IC-layout (en GDSII-strømfil). Labforsøk, kun for visning og måling.

- En filvelger tar en `.gds`-fil. Med flere toppceller: `Angi toppcellen som skal tegnes`.
- Hver layer og datatype blir en tegningslayer (`GDS 1`, `GDS 2/5`), og referanser og matriser plasseres flatt, i filens brukerenhet (vanligvis mikrometer). Ett steg å angre. Ingenting simuleres eller kontrolleres, og filen skrives ikke tilbake.

### DIAGRAM

Alias: `TEXTDIAGRAM`, `T2D`. Et diagram fra tekst.

- En boks tar teksten (eller én linje med `;` mellom utsagnene på kommandolinjen): et Mermaid-flytdiagram, et PlantUML-komponentdiagram, D2 eller en fra-til-liste.
- `Angi øvre venstre hjørne av diagrammet`, deretter `Angi teksthøyde`.

Blokker og forbindelser er vanlige objekter på layeren `Diagram`, og de velges når kommandoen avsluttes. Ett steg å angre. Se [Tegn et diagram fra tekst](topic:text-to-diagram).

### OLELIST

Alias: `OLES`. OLE-objektene en DWG bærer, og som CadCraft ikke kan plassere selv.

- Lister hvert enkelt: nummer, type, størrelse, om det lagret et bilde.
- `Angi et valg [Plasser/Avslutt (X)] <Avslutt>`: Plasser spør etter nummeret, nedre venstre hjørne og bredden, og tegner en ramme med bildet. Ett steg å angre. Det beholdte objektet endres ikke. Se [Bilder](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Alias: `SHX`. Dine egne SHX-skrifter.

- `Angi et valg for SHX-skrift [Mappe/Filer/Liste/Fjern/Snu/Tøm] <Liste>`

{{ui:Mappe}} leser alle `.shx`-filer i en mappe (CadCraft Studio, på nytt ved hver oppstart). {{ui:Filer}} tar valgte filer (nettleseren). {{ui:Snu}} legger ut bokstavene i én skrift sist først. Tekststiler som nevner en innlastet skrift, tegnes i den. Se [Tegn tekst i dine egne SHX-skrifter](topic:shx-fonts).

### LIMITS

Hvor stor tegningen skal være.

- `Angi nedre venstre hjørne eller [PÅ/AV] <gjeldende>`: et punkt, `ON` eller `OFF`.
- `Angi øvre høyre hjørne <gjeldende>`.

Rutenettet fyller grensene, {{cmd:ZOOM}} Alle viser dem, og med dem PÅ avvises et punkt utenfor (`**Utenfor grensene`). Ett steg å angre. Lagres i DWG og DXF. Se [Angi tegningsgrensene](topic:drawing-limits).

### AUNITS

Alias: `ANGUNITS`. Hvordan vinkler vises og skrives.

- `Angi vinkelformat [Desimalgrader/Grader-minutter-sekunder/Landmålerens retninger] <gjeldende>`
- `Angi antall desimaler (0 til 8)`, eller for de andre to `Angi presisjon` (0 grader, 2 minutter, 4 sekunder, 5 til 8 desimaler av et sekund).

Ett steg å angre. Lagres i DWG og DXF. Samme som {{ui:Vinkelformat}} i {{ui:Gjeldende innstillinger}}. Se [Skriv og vis retninger og vinkler](topic:bearings-and-angles).

### APPLOAD

Alias: `AP`; eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Last program…}}. Dialogboksen {{ui:Last programmer}}: last inn `.lsp`-rutiner og `.dcl`-dialogfiler, fjern dem, last dem inn igjen fra historikken, og Startup Suite. En rutines `(defun c:NAVN …)`-kommandoer virker da som alle andre. Se [Last programmer](topic:load-applications) og [Kjør LISP-rutiner](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (eller {{ui:Visning}} › {{ui:Mer}} › {{ui:Rediger aliaser…}}) åpner aliasfilen din (linjer `ALIAS, *COMMAND`). {{ui:Lagre}} bruker den. {{cmd:REINIT}} bruker den igjen. Se [Rediger kommandoaliaser](topic:command-aliases).

### HELP

Alias: `?`. Skriver ut alle kommandoer, deres aliaser og en beskrivelse på én linje i kommandolinjens historikk. Den åpner ikke denne hjelpen. Trykk {{key:F1}} eller klikk {{ui:Hjelp}} for det.

## Ledetekst for Velg objekter

Ved enhver ledetekst `Velg objekter`: klikk objekter, tegn vinduer (fra venstre til høyre) og kryssinger (fra høyre til venstre) med to klikk, eller trykk og dra en lasso ({{key:Space}} mens du drar: vindu, kryssing, gjerde). {{key:Shift}}+klikk fjerner, og du trykker {{key:Enter}} for å fullføre. Du kan også skrive `ALL` (alt), `L` (det siste objektet), `P` (Forrige: det siste kommandoen brukte), `F` (Gjerde: objekter en linje med punkter krysser; `U` angrer et punkt), `W` (Vindu), `C` (Kryssing), `R` (Fjern-modus: valg tar objekter ut; ledeteksten sier `Fjern objekter`) og `A` (Legg til igjen). `?` lister dem. De vises ikke i ledeteksten. {{key:Tab}} over overlappende objekter markerer det neste; klikk for å velge det. Se [Velg objekter](topic:select-objects).

### ACCESS

Alias: `AX`. Tegning uten syn. {{cmd:ACCESS}} slår Tilgang på eller av (`On`, `Off`) og bytter fangelyder (`Sound`) og talte kommandoer (`Voice`). Den sier tilstanden først. Med Tilgang på leses hver kommando og hvert resultat opp gjennom skjermleseren, og tegneområdet har en tastaturmarkør. Hjelpeemnet «Tegn uten syn» har tastene.

### DESCRIBE

Alias: `DESC`. Si hva tegningen inneholder: hvor mange objekter, av hvilken type, hvor store, hvor mange layere, og hva som er valgt. Leser bare; endrer ingenting.

### WHEREAMI

Alias: `WHERE`. Si hvor markøren er, i tegningens enheter.

### NEARBY

Si hva som ligger nær markøren, nærmeste først, hver med sin avstand og siden den er på.

### SAYSEL

Si hva som er valgt, én setning per objekt (linjelengde, ender og vinkel. Sirkelens radius og senter. Tekst slik den er skrevet).

### VOICE

Slå talte kommandoer på eller av. De gjenkjennes på denne datamaskinen. Der nettleseren ikke kan det, er stemmen av med mindre du velger nettleserens nettjeneste i Innstillinger.
