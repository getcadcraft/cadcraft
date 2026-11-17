---
title: Filer: hvad der åbnes, hvad der gemmes
summary: De formater CadCraft åbner, gemmer og eksporterer, hvad der bevares eller konverteres, og hvor filerne gemmes.
keywords: xclip, klip, xclip-grænse, bevar klippet, dwg, dxf, pdf, r12, åbn, gem, eksport, import, formater, konvertering, download, saveas, dxfout, gem som, dwg-gem, format, qsave, xref, xattach, linket tegning, ekstern reference, bind, genindlæs, frakobl
from: b8c5778d
---

## Et overblik

| Format | Åbn | Gem | Noter |
|---|---|---|---|
| DXF (tekst eller binær, enhver version) | Ja | Ja, som DXF R12, DXF 2000 eller DXF 2000 (binær) | En binær DXF åbnes ligesom en tekst-DXF og gemmes tilbage som binær. |
| DWG | Ja | Ja, som DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 eller 2018) | Læses og skrives af det DWG-bibliotek, der er bygget ind i CadCraft (AutoCAD R13 til 2018-filer). Din DWG ændres aldrig. Beskadigede filer, eller versioner læseren ikke håndterer, afvises med en besked. |
| PDF | Henter en side ind: som underlag eller som objekter ([PDF-underlag](topic:pdf-underlay)) | Ja, ved plot | Vektor-PDF af et ark, eller af modellen i en skala. |

Hver tegning du åbner (eller starter med {{ui:Ny}}), får sin egen fane over tegneområdet. En ny tegning, som ingen har rørt endnu, bruges i stedet for at tilføje en fane. Klik på en fane for at skifte, på dens {{ui:×}} for at lukke den (CadCraft spørger først, hvis der er ikke-gemte ændringer), eller stil de åbne tegninger side om side: se [Del skærmen](topic:split-screen).

## Åbn en tegning

- Tryk {{key:Mod+O}}, klik på {{ui:Åbn}}, eller skriv `OPEN`, og vælg så filen.
- Eller træk en `.dwg`- eller `.dxf`-fil hen på tegneområdet.

Filen læses inde i din browser. Den uploades ingen steder hen. Historikken melder hvor mange objekter og lag der kom ind, og hvor lang tid det tog. Sektionen {{ui:Tegning}} i venstre panel viser formatet, for eksempel »DWG 2018 (AC1032)«.

DWG-læseren er en del af CadCraft og hentes sammen med den første DWG, du åbner, efter siden er indlæst (et par hundrede KB). Der er altså ingen separat download at vente på. Den læser filen i baggrunden, så siden fortsat reagerer, mens en stor DWG åbnes.

En DXF læses i stykker på cirka 4 MB, aldrig som ét stykke tekst, så en DXF over 512 MB åbnes også. Det der sætter grænsen, er din computers hukommelse: mens en DXF åbnes, må du regne med at den bruger cirka 16 til 20 gange filens størrelse (en 100 MB DXF med cirka 690,000 objekter brugte cirka 1.5 GB i vores test).

### Hvad der kommer med

- Linjer, buer, cirkler, polylinjer (med bue-segmenter), ellipser, punkter, tekst og flerlinjet tekst, massive legemer, skraveringer (de standardmønstre tegnet som deres linjer, andre som en flad tone), blokreferencer med deres attributter (værdier du kan redigere; se [Blokattributter](topic:attributes)), målsætninger og layouts med deres viewports.
- Splines kommer ind som splines (grad, kontrolpunkter, knuder, vægte, tilpasningspunkter); se [Splines og polylinjer](topic:splines).
- Multiledere med én henvisningslinje og tekst kommer ind som CadCraft-multiledere, som du kan redigere (se {{cmd:MLEADER}}). Andre (med en blok, flere henvisningslinjer eller buede linjer) tegnes, som det andet program tegnede dem, og flyttes som én. Historikken siger hvor mange.
- Billeder (images) vises som en ramme med billedets filnavn, indtil du giver CadCraft filen med {{cmd:IMAGE}}: se [Billeder i en tegning](topic:pictures#show-the-pictures-a-dwg-uses). Afdækninger (wipeouts) vises som deres ramme, og det der ligger under dem, forbliver synligt.
- Tabeller i en DWG kommer ind, som det andet program tegnede dem.
- 3D-flader i modelrummet kommer ind på fanen {{ui:3D}}, ikke som 2D-objekter. Det samme gælder dem inde i blokke, én gang pr. blokreference i modellen. I en blok og på et ark tegnes de også fladt, som konturer. Se [Model i 3D](topic:3d-solids).
- Lag beholder deres farve, og deres tændt-, frosset-, låst- og plotindstillinger. DEFPOINTS plottes aldrig.
- Målsætninger bliver til rigtige, redigerbare CadCraft-målsætninger, hvor deres punkter kan læses. De vises først præcis, som det andet program tegnede dem. Så snart du ændrer en, tegner CadCraft den igen i sin egen stil.
- Hvert layout bliver til en arkfane. I det andet program har hvert layout en skjult første viewport, som er selve arket. CadCraft udelader den.

### Hvad der endnu ikke kommer med

Alt CadCraft ikke kan tegne, tælles, og det gættes ikke. Boksen »Om denne fil« i venstre panel lister det som »Ikke vist endnu:« efterfulgt af hver type objekt og hvor mange. Typiske tilfælde er tabeller i en DXF, net og 3D-massive legemer inde i blokke. 3D-massive legemer, regioner og legemer i modelrummet vises på 3D-fanen (se [Model i 3D](topic:3d-solids#solids-from-other-programs)). Viewports der er drejet i filen, vises drejet, som dér, og beholder drejningen, når du gemmer. Det samme gælder den aktuelle UCS, de navngivne UCS'er og en drejet visning.

Tekst tegnes i én Helvetica-lignende skrifttype. En etiket, der passer på én linje i det oprindelige programs smallere skrifttype, kan knække over på to linjer i CadCraft.

## Gem

Der er tre måder at gemme på. Hver downloader en kopi.

- **Gem**: tryk {{key:Mod+S}}, klik på {{ui:Gem}}, eller skriv `SAVE` (også `QSAVE`). Den gemmer i tegningens format: DWG, hvis du åbnede en DWG, DXF, hvis du åbnede en DXF. En DWG beholder den version, den kom i (en 2018-fil gemmes som 2018). En ny tegning bruger det format og den DWG-version, du sidst valgte i {{ui:Gem som}} i denne browser. Har du aldrig valgt en, bruges DWG i AutoCAD 2000-formatet.
- **Gem som**: tryk {{key:Mod+Shift+S}}, klik på {{ui:Gem som}}, eller skriv `SAVEAS`. Dialogen {{ui:Gem en kopi som}} tilbyder {{ui:DWG}} med en liste over {{ui:Version}} (AutoCAD 2018, 2013, 2010, 2007, 2004 eller 2000), {{ui:DXF R12}} og {{ui:DXF 2000}}. Hver med det filnavn den vil give, og med tegningens nuværende format og version allerede valgt. Klik på {{ui:Gem}} for at downloade, eller på {{ui:Annuller}} (eller {{key:Esc}}) for at gemme intet. Historikken siger så »Ikke gemt.« Det du vælger, bliver husket: {{key:Mod+S}} bruger det for denne tegning fra da af, og nye tegninger i denne browser starter med det.
- **DXFOUT**: skriv `DXFOUT`. Den downloader altid en DXF R12-kopi, og næste {{key:Mod+S}} gemmer stadig i tegningens eget format.

Browseren downloader `<drawing name>.dwg` eller `<drawing name>.dxf`. Hver gemning er en **ny download**; filen du åbnede, bliver aldrig overskrevet eller ændret. Historikken bekræfter det, for eksempel »Gemt en kopi som Plan.dwg (DWG (AutoCAD 2018)). Din originale Plan.dxf er uændret.« For en DXF står der »(DXF R12, åbnes i ethvert CAD-program)«. Linjerne under den lister alt, der ændrede sig undervejs.

Når CadCraft kører i desktop-appen, virker gemning, som den gør i andre desktopprogrammer: {{key:Mod+S}} skriver tegningen tilbage til den fil, du åbnede, i dens eget format og version, og historikken siger hvor den blev gemt. {{ui:Gem som}} og eksporterne viser systemets gemmedialog. En `.dwg`-, `.dxf`- eller `.ccsheets`-fil, du dobbeltklikker, åbnes i CadCraft.

For en PDF plotter du i stedet (se nedenfor).

## Hvad en DWG bevarer og ændrer

CadCraft skriver selve DWG'en inde i din browser, med det samme DWG-bibliotek, som den læser med. Vælg versionen i {{ui:Gem som}}: AutoCAD 2000-formatet (filversion AC1015) åbnes i de fleste programmer, også gamle. De nyere formater (2004, AC1018, op til 2018, AC1032) bevarer også ægte farver. Intet uploades, og at gemme en DWG virker offline.

Hver version kontrolleres ved at læse de gemte filer tilbage med tre andre programmers DWG-læsere og med CadCraft selv. En CadCraft-DWG er endnu ikke blevet åbnet i AutoCAD selv.

### Hvad en DWG bevarer

- Linjer, buer, cirkler, ellipser, punkter og polylinjer med deres bue-segmenter.
- Enkeltlinjetekst med dens justering og breddefaktor.
- Flerlinjet og ombrudt tekst, som flerlinjet tekst. Det andet program ombryder den igen ud fra samme bredde.
- Objektfarver: efter lag, efter blok, de 255 standardfarver og ægte farver i 2004-formatet og nyere.
- Lag med deres farve, linjetype, linjetykkelse og deres tændt-, frosset-, låst- og plotindstillinger. Objekters egne linjetyper, linjetykkelser og linjetypeskalaer, linjetypemønstrene og tegningens linjetypeskala.
- Tegningens enheder og længdeformatet (decimal, fod og tommer, brøker …).
- Blokke med deres basispunkt og attributdefinitioner, inklusive usynlige, konstante og forudindstillede.
- Blokreferencer med deres skala, rotation og attributværdier.
- Massive udfyldninger og mønstrede skraveringer med deres mønster, skala og vinkel (mønstrets egne linjer, så andre programmer tegner de samme linjer, som CadCraft gør).
- Målsætninger som rigtige målsætninger: andre programmer genmåler dem, når de strækkes. Hver beholder sine egne indstillinger (teksthøjde, pilestørrelse, decimaler, længdeformat) og sin tekst, og bærer den tegnede kopi, som hver DWG-målsætning har.
- Ark (layouts): hvert ark med sin papirstørrelse og enheder, det der er tegnet på det, og dets viewports med deres visning og skala.
- Navngivne visninger.
- Multiledere, som multiledere.
- Lag- og blocknavne, som du skrev dem, med store og små bogstaver. (DXF R12 skriver dem med store bogstaver.)

### Hvad en DWG ændrer

Hver af disse listes i historikken, efter du har gemt, når det gælder din tegning.

| I CadCraft | I den gemte DWG |
|---|---|
| Ægte farver (valgt med farvevælgeren), i 2000-formatet | Den nærmeste standardfarve: 2000-formatet har kun de 255. Gem som 2004 eller nyere for at bevare dem |
| Navngivne visninger af et ark | Visninger i papirrum: en DWG siger ikke, hvilket ark de hører til, så når CadCraft åbner filen igen, hører de til første ark |
| Flerlinjet tekst med en breddefaktor | Normal bogstavbredde: i en DWG gælder breddefaktoren kun for enkeltlinjetekst |
| Navne på lag eller blokke med tegn, DWG ikke tillader | Ændret: et navn fra en linket tegning som `Base\|Walls` bliver til `Base$0$Walls` (sådan som binding af en linket tegning navngiver det), og andre tegn bliver til `_` |

### Hvorfor R12, og hvad der konverteres

Når du gemmer som DXF, skriver CadCraft DXF R12, den version alle CAD-programmer kan åbne. Den er ældre end nogle funktioner, så nogle ting skrives i en enklere form:

| I CadCraft | I den gemte R12-fil |
|---|---|
| Flerlinjet tekst | Ét tekstobjekt pr. linje |
| Ellipser | Polylinjer, der følger ellipsen |
| Skraveringer (fra åbnede filer) | Kun deres konturer |
| Ægte farver (valgt med farvevælgeren) | Den nærmeste standardfarve |
| Linjetykkelser og objekters egne linjetypeskalaer | Udeladt: R12 har ingen af dem (linjetyper bevares) |
| Lag- og blocknavne | Skrevet med store bogstaver. Mellemrum og andre tegn bliver til `_`, og navne afkortes til 31 tegn (»Title block« bliver til `TITLE_BLOCK`) |
| Lag sat til ikke at plotte | Andre programmer plotter dem (CadCraft husker indstillingen, når tegningen har et ark) |
| Målsætninger | Rigtige målsætninger med deres egen tegnede blok, så andre programmer viser dem, som du ser dem |
| Multiledere | Linjerne, pilespidsen og teksten, de tegner |
| Navngivne visninger | Bevaret, med navne med store bogstaver. Et arks visninger kommer tilbage på første ark |
| Flere ark | Første ark er papirrummet, som alle programmer viser. De andre gemmes som blokke navngivet `CCLAYOUT_1`, `CCLAYOUT_2` … som CadCraft gør til ark igen, når den åbner filen |

Historikken lister hver af disse, der gjaldt for din tegning.

:::tip
For at arbejde videre på en tegning over flere dage: gem som DXF, og åbn den DXF næste gang. Alt, hvad CadCraft kan tegne, overlever rundturen, inklusive målsætninger, blokke og alle ark.
:::

## Linkede tegninger (eksterne referencer)

{{cmd:XATTACH}} (`XA`, eller {{ui:Blokke}} › {{ui:Mere}} › {{ui:Link en tegning (xref)}}) linker en anden DWG eller DXF: vælg filen, og klik derefter hvor den skal være ({{key:Enter}} placerer den i 0,0). Den kommer ind som én blok navngivet efter filen, i den rigtige skala, når de to tegninger har forskellige enheder. Dens lag og blokke beholder deres navne med linkets navn foran, som `Plan|Walls` og `Plan|Door`. Så blandes de aldrig med dine. Tænd og sluk de linkede lag, frys eller lås dem ligesom dine egne. Et link er skrivebeskyttet: ændrer du den anden tegning, skal du genindlæse den. Det du indstiller på et links lag (farve, linjetype, linjetykkelse, tændt/slukket, frosset, låst, plot), bevares, når du genindlæser det, når du gemmer tegningen som DWG, mens linket stadig er et link, og når en anden tegning linker denne.

{{cmd:XREF}} (`XR`): `?` lister linkene (indlæst eller ej, hvilken fil, hvor mange referencer). `A` vedhæfter. `R` genindlæser ét fra dets fil (vælg filen igen, for browseren kan ikke selv nå dine mapper). `B` binder ét, så det bliver almindelige blokke og lag navngivet `Plan$0$Walls`. `D` frakobler ét, og dets referencer og lag forsvinder. Hver er ét trin i fortryd.

{{cmd:XCLIP}} (`XC`) klipper blokreferencer og links: vælg dem, `N` for en ny grænse, derefter `R` og to hjørner eller `P` og punkterne i en polygon ({{key:Enter}} lukker den). `D` fjerner klippet. Kun det, der ligger inden for grænsen, vises og plottes, og klippet flytter sig med referencen. DWG og DXF 2000 bevarer klip. DXF R12 gemmer referencen hel og siger det. Når du binder et link, der har klippede referencer, spørger {{cmd:XREF}} `B`: `A` binder alt, `C` beholder kun hver references klippede del (linjer og buer skæres ved grænsen; tekster og indlejrede blokke bliver, når deres indsætningspunkt ligger inde i den).

En tegning du åbner, kan linke filer, som CadCraft ikke kan se. Den siger, hvor mange der ikke er indlæst. Brug {{cmd:XREF}}, `R` og vælg hver fil for at se dem.

Når du gemmer, bliver et indlæst link **bundet** ind i filen (andre programmer ser almindelige blokke og lag navngivet `Plan$0$…`), og historikken siger det. Et link, der ikke er indlæst, bliver ved med at være et link til sin fil, i DWG og DXF.

## Åbn i 3D

{{ui:View}} › {{ui:Mere}} › {{ui:Åbn i ModelCraft}} ({{cmd:OPENIN3D}}) åbner tegningen i 3D-modelleringsappen på en ny fane, som en DWG, uden at uploade den. Ændringer, du laver dér, bliver dér; gem dem dér. Menupunktet vises kun, hvor den app kan tage en overdraget tegning.

## Plot en PDF

Tryk {{key:Mod+P}}, klik på {{ui:Plot}}, eller skriv `PLOT`. PDF'en laves inde i browseren og downloades, eller åbnes på en ny fane til udskrivning. Se [Plot til PDF](topic:plot-pdf).

## Hvor filerne ender

Hver gemning og hvert plot er en download, så filerne havner, hvor din browser lægger downloads: normalt i mappen Downloads. Vil du vælge en mappe hver gang, skifter du downloadindstillingen i din browser. [Browsere og computere](common:browsers) viser hvor.

Intet, du åbner eller gemmer, sendes til os. Se [Hvor dine filer ender](common:your-files).

## PLN- og PLA-projektfiler

CadCraft åbner DWG- og DXF-tegninger, ikke Archicads egne filer (`.pln`, `.pla`, `.tpl`, `.bpn`). Når du åbner en, får du at vide, hvad den er. I Archicad skal du gemme de visninger eller layouts, du har brug for, som DWG og åbne dem her. Alternativt kan du eksportere modellen som IFC og åbne den i BimCraft. Hvor BimCraft kan overtage filen, tilbyder CadCraft {{ui:Åbn i BimCraft}}.

## Hvis siden lukker, før du gemmer

CadCraft gemmer en kopi af hver tegning, du ændrer, i kun denne browser, et øjeblik efter du holder op med at redigere. Hvis fanen lukkes, browseren stopper, eller computeren genstarter, før du gemmer, spørger CadCraft **Gendan dit arbejde?** næste gang den starter. {{ui:Gendan}} åbner tegningen igen, ikke gemt, på sin egen fane. Når du gemmer tegningen, fjernes dens kopi. Se [Gendan dit arbejde](common:recover).

## Online og offline

Åbning, tegning, gemning (DWG og DXF) og plot sker alt sammen på din computer. Det virker derfor uden forbindelse, når CadCraft først er indlæst.

For at bruge CadCraft helt uden forbindelse klikker du på {{ui:Gem til offline brug}} i linjen øverst, mens du er online. Etiketten tæller op (»Gemmer 40 af 212«) og slutter med »Klar offline«. Den gemte kopi inkluderer DWG-læseren, cirka 5 MB i alt, så **DWG-filer åbnes også offline**, når den er gemt. Klik på knappen igen for {{ui:Gem igen (hent den nyeste version)}} eller {{ui:Fjern offlinekopien}}. »Kunne ikke gemme« betyder, at nogle filer ikke blev downloadet: tjek forbindelsen, og klik for at prøve igen. »Offline ikke tilgængelig« betyder, at dette browservindue ikke kan gemme en kopi (private vinduer og nogle administrerede computere).

Uden en gemt kopi hentes DWG-læseren, første gang du åbner en DWG efter siden er indlæst. Så kan det at åbne en DWG offline mislykkes. DXF-filer har aldrig brug for den. Genindlæs ikke siden offline, medmindre CadCraft er gemt.

Se [Arbejde offline](common:offline) for detaljerne.

:::offline
Du er offline nu. Tegninger gemmes som DWG eller DXF og plottes normalt, og DXF-filer åbnes. DWG-filer åbnes, hvis CadCraft viser »Klar offline«, eller hvis DWG-læseren allerede er indlæst i denne fane.
:::

## Begrænsninger i filer

Begrænsninger og parametre (se [Begræns en tegning](topic:constraints)) gemmes i både DWG og DXF. Hvert begrænset objekt bærer en lille CadCraft-note (udvidede data), og en ubrugt blok ved navn `CADCRAFT_PARAMETRIC` indeholder begrænsningerne og parametertabellen. Andre programmer åbner tegningen normalt og ignorerer begge dele. De kan slette den ubrugte blok, når de renser op. Noterne henviser til objekter med deres egen nøgle, ikke til filens håndtag (handles), så et program, der nummererer håndtagene om, ødelægger dem ikke. Når et andet program har slettet eller ændret et begrænset objekt, fjerner CadCraft begrænsningerne på det, når den åbner filen, og siger hvor mange. En fil uden dem åbnes uden begrænsninger.

En skitse, eksporteret fra et delmodelleringsprogram (`.json`), åbnes også: se [Flyt skitser til og fra andre delmodelleringsprogrammer](topic:solidworks-sketches).

## Ikke lavet endnu

- Multiledere som multilederobjekter i en gemt DXF (R12 har ingen: de gemmes som det, de tegner).
- Billeder i en gemt DXF (de gemmes som deres rammer; DWG bevarer dem som billeder), og afdækninger, der skjuler det, der ligger under.
- Gemning af en nyere DXF-version end 2000.
- Gemning i skyen og synkronisering mellem computere.

Se [Ikke lavet endnu](topic:not-built-yet) for hele listen.
