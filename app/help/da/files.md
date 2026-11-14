---
title: Filer: hvad der åbnes, hvad der gemmes
summary: De formater, CadCraft åbner, gemmer og eksporterer, hvad der beholdes eller konverteres, og hvor filerne havner.
keywords: xclip, clip, xclip-afgrænsning, bind beskåret, dwg, dxf, pdf, r12, åbn, gem, eksport, import, formater, konvertering, download, saveas, dxfout, gem som, dwg gem, format, qsave, xref, xattach, linket tegning, ekstern reference, bind, genindlæs, frakobl
from: 6d68b34e
---

## Overblik

| Format | Åbn | Gem | Bemærkninger |
|---|---|---|---|
| DXF (tekst, enhver version) | Ja | Ja, som DXF R12 eller DXF 2000 | Binær DXF afvises: gem den som tekst-DXF først. |
| DWG | Ja | Ja, som DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 eller 2018) | Læses og skrives af CadCrafts eget DWG-bibliotek (AutoCAD R13- til 2018-filer). Din DWG bliver aldrig ændret. Beskadigede filer eller versioner, læseren ikke håndterer, afvises med en besked. |
| PDF | Henter en side ind: som underlag eller som objekter ([PDF-underlag](topic:pdf-underlay)) | Ja, ved at plotte | Vektor-PDF af et ark eller af modellen i en målestok. |

Hver tegning, du åbner (eller starter med {{ui:Ny}}), får sin egen fane over tegneområdet; en ny tegning, ingen har rørt endnu, bruges i stedet for at tilføje en fane. Klik på en fane for at skifte, på dens {{ui:×}} for at lukke den (CadCraft spørger først, hvis der er ugemte ændringer), eller læg de åbne tegninger side om side: se [Del skærmen](topic:split-screen).

## At åbne en tegning

- Tryk på {{key:Mod+O}}, klik på {{ui:Åbn}}, eller skriv `OPEN`, og vælg derefter filen.
- Eller træk en `.dwg`- eller `.dxf`-fil ind på tegneområdet.

Filen læses inde i din browser. Den uploades ikke nogen steder. Historikken melder, hvor mange objekter og lag der kom ind, og hvor lang tid det tog, og afsnittet {{ui:Tegning}} i panelet til venstre viser formatet, for eksempel "DWG 2018 (AC1032)".

DWG-læseren er en del af CadCraft og hentes sammen med den første DWG, du åbner efter siden er indlæst (nogle hundrede KB), så der er ingen separat download at vente på. Den læser filen i baggrunden, så siden bliver ved med at reagere, mens en stor DWG åbnes.

### Det der kommer ind

- Linjer, buer, cirkler, polylinjer (med buesegmenter), ellipser, punkter, tekst og flerlinjet tekst, massive flader, skraveringer (standardmønstrene tegnet som deres linjer, andre som en flad tone), blokreferencer med deres attributter (værdier, du kan redigere; se [Blokattributter](topic:attributes)), målsætninger og layouts med deres viewports.
- Splines kommer ind som splines (grad, kontrolpunkter, knuder, vægte, tilpasningspunkter); se [Splines og polylinjer](topic:splines).
- Flere henvisningslinjer med én henvisningslinje og tekst kommer ind som CadCraft-henvisninger, du kan redigere (se {{cmd:MLEADER}}). Andre (med en blok, flere henvisningslinjer eller kurvede linjer) tegnes, som det andet program tegnede dem, og flyttes som ét; historikken siger hvor mange.
- Billeder vises som en ramme med billedets filnavn, indtil du giver CadCraft filen med {{cmd:IMAGE}}: se [Billeder i en tegning](topic:pictures#show-the-pictures-a-dwg-uses). Afdækninger vises som deres ramme, og det, der ligger under dem, forbliver synligt.
- Tabeller i en DWG kommer ind, som det andet program tegnede dem.
- 3D-flader i modelrummet kommer ind på fanen {{ui:3D}}, ikke som 2D-objekter; det samme gælder dem inde i blokke, én gang pr. blokreference i modellen. I en blok og på et ark tegnes de også fladt som omrids. Se [Model i 3D](topic:3d-solids).
- Lag beholder deres farve samt tændt, frosset, låst og plotindstillinger. DEFPOINTS plottes aldrig.
- Målsætninger bliver til rigtige, redigerbare CadCraft-målsætninger, hvor deres punkter kan læses. De vises først præcis, som det andet program tegnede dem; så snart du ændrer en, tegner CadCraft den igen i sin egen stil.
- Hvert layout bliver en arkfane. I det andet program har hvert layout en skjult første viewport, som er selve arket; CadCraft udelader den.

### Det der ikke kommer ind endnu

Alt, CadCraft ikke kan tegne, bliver talt, ikke gættet på. Boksen "Om denne fil" i panelet til venstre viser det som "Not shown yet:" efterfulgt af hver slags objekt og hvor mange. Typiske tilfælde er tabeller i en DXF, net og massive 3D-legemer inde i blokke. Massive 3D-legemer, regioner og legemer i modelrummet vises på fanen 3D (se [Model i 3D](topic:3d-solids#solids-from-other-programs)). Viewports, der er drejet i filen, vises drejet, som dér, og beholder deres drejning, når du gemmer; det samme gør det aktuelle UCS, de navngivne UCS'er og en drejet visning.

Tekst tegnes i én skrifttype i Helvetica-stil. En etiket, der kan stå på én linje i det oprindelige programs smallere skrifttype, kan ombrydes til to linjer i CadCraft.

## Gem

Der er tre måder at gemme på. Hver downloader en kopi.

- **Gem**: tryk på {{key:Mod+S}}, klik på {{ui:Gem}}, eller skriv `SAVE` (også `QSAVE`). Den gemmer i tegningens format: DWG, hvis du åbnede en DWG, DXF, hvis du åbnede en DXF. En DWG beholder den version, den kom ind i (en 2018-fil gemmes som 2018). En ny tegning bruger det format og den DWG-version, du sidst valgte i Gem som i denne browser; hvis du aldrig valgte en, DWG i AutoCAD 2000-formatet.
- **Gem som**: tryk på {{key:Mod+Shift+S}}, klik på {{ui:Gem som}}, eller skriv `SAVEAS`. Dialogboksen {{ui:Gem en kopi som}} tilbyder {{ui:DWG}} med en liste {{ui:Version}} (AutoCAD 2018, 2013, 2010, 2007, 2004 eller 2000), {{ui:DXF R12}} og {{ui:DXF 2000}}, hver med det filnavn, den vil give, og med tegningens nuværende format og version allerede valgt. Klik på {{ui:Gem}} for at downloade, eller {{ui:Annuller}} (eller {{key:Esc}}) for ikke at gemme noget; historikken siger så "Not saved." Det, du vælger, bliver ved med at gælde: {{key:Mod+S}} bruger det for denne tegning fra da af, og nye tegninger i denne browser starter med det.
- **DXFOUT**: skriv `DXFOUT`. Den downloader altid en DXF R12-kopi, og den næste {{key:Mod+S}} gemmer stadig i tegningens eget format.

Browseren downloader `<tegningens navn>.dwg` eller `<tegningens navn>.dxf`. Hver gemning er en **ny download**; den fil, du åbnede, bliver aldrig overskrevet eller ændret. Historikken bekræfter det, for eksempel "Saved a copy as Plan.dwg (DWG (AutoCAD 2018)). Your original Plan.dxf is unchanged." For en DXF siger den "(DXF R12, opens in any CAD program)". Linjerne under den viser alt, der ændrede sig undervejs.

Når CadCraft kører i skrivebordsappen, virker gemning, som det gør i andre skrivebordsprogrammer: {{key:Mod+S}} skriver tegningen tilbage til den fil, du åbnede, i dens eget format og version, og historikken siger, hvor den blev gemt. {{ui:Gem som}} og eksporterne viser systemets gemmedialog, og en `.dwg`-, `.dxf`- eller `.ccsheets`-fil, du dobbeltklikker på, åbnes i CadCraft.

For en PDF plotter du i stedet (se nedenfor).

## Hvad en DWG beholder og ændrer

CadCraft skriver selv DWG'en, inde i din browser, med det samme DWG-bibliotek, den læser med. Vælg versionen i Gem som: AutoCAD 2000-formatet (filversion AC1015) åbnes i flest programmer, også gamle; de nyere formater (2004, AC1018, op til 2018, AC1032) beholder også ægte farver. Der uploades intet, og det at gemme en DWG virker offline.

Hver version er kontrolleret ved at læse de gemte filer tilbage med tre andre programmers DWG-læsere og med CadCraft selv. En CadCraft-DWG er endnu ikke blevet åbnet i selve AutoCAD.

### Det en DWG beholder

- Linjer, buer, cirkler, ellipser, punkter og polylinjer med deres buesegmenter.
- Enkeltlinjet tekst med dens justering og breddefaktor.
- Flerlinjet og ombrudt tekst, som flerlinjet tekst. Det andet program ombryder den igen ud fra den samme bredde.
- Objektfarver: ByLayer, ByBlock, de 255 standardfarver og ægte farver i 2004-formatet og senere.
- Lag med deres farve, linjetype, linjetykkelse og deres tændt-, frosset-, låst- og plotindstillinger; objekters egne linjetyper, linjetykkelser og linjetypeskalaer, linjetypemønstrene og tegningens linjetypeskala.
- Tegningsenhederne og længdeformatet (decimal, fod og tommer, brøker …).
- Blokke med deres basispunkt og attributdefinitioner, også usynlige, konstante og forudindstillede.
- Blokreferencer med deres skala, drejning og attributværdier.
- Udfyldninger og mønsterskraveringer med deres mønster, skala og vinkel (mønstrets egne linjer, så andre programmer tegner de samme linjer som CadCraft).
- Målsætninger, som rigtige målsætninger: andre programmer måler dem igen, når de strækkes. Hver beholder sine egne indstillinger (teksthøjde, pilestørrelse, decimaler, længdeformat) og sin tekst og bærer den tegnede kopi, som hver DWG-målsætning har.
- Ark (layouts): hvert ark med sin papirstørrelse og sine enheder, det, der er tegnet på det, og dets viewports med deres visning og skala.
- Navngivne visninger.
- Flere henvisningslinjer, som flere henvisningslinjer.
- Lag- og blokke-navne, som du skrev dem, med store og små bogstaver. (DXF R12 skriver dem med store bogstaver.)

### Det en DWG ændrer

Hver af disse står i historikken, når du har gemt, hvis den gælder din tegning.

| I CadCraft | I den gemte DWG |
|---|---|
| Ægte farver (valgt med farvevælgeren), i 2000-formatet | Den nærmeste standardfarve: 2000-formatet har kun de 255. Gem som 2004 eller senere for at beholde dem |
| Et arks navngivne visninger | Papirrumsvisninger: en DWG siger ikke, hvilket ark, så når CadCraft åbner filen igen, hører de til det første ark |
| Flerlinjet tekst med en breddefaktor | Normal bogstavbredde: i en DWG gælder breddefaktoren kun enkeltlinjet tekst |
| Lag- eller blokke-navne med tegn, DWG ikke tillader | Ændret: et navn fra en linket tegning som `Base\|Walls` bliver til `Base$0$Walls` (på den måde, binding af en linket tegning navngiver det), og andre tegn bliver til `_` |

### Hvorfor R12, og hvad der konverteres

Når du gemmer som DXF, skriver CadCraft DXF R12, den version som alle CAD-programmer kan åbne. Den er ældre end nogle funktioner, så få ting skrives i en enklere form:

| I CadCraft | I den gemte R12-fil |
|---|---|
| Flerlinjet tekst | Ét tekstobjekt pr. linje |
| Ellipser | Polylinjer, der følger ellipsen |
| Skraveringer (fra åbnede filer) | Kun deres omrids |
| Ægte farver (valgt med farvevælgeren) | Den nærmeste standardfarve |
| Linjetykkelser og objekters egne linjetypeskalaer | Udeladt: R12 har ingen af dem (linjetyper beholdes) |
| Lag- og blokke-navne | Skrevet med store bogstaver; mellemrum og andre tegn bliver til `_`, og navne afkortes til 31 tegn ("Title block" bliver til `TITLE_BLOCK`) |
| Lag sat til ikke at plotte | Andre programmer plotter dem (CadCraft husker indstillingen, når tegningen har et ark) |
| Målsætninger | Rigtige målsætninger med deres egen tegnede blok, så andre programmer viser dem, som du ser dem |
| Flere henvisningslinjer | De linjer, den pilespids og den tekst, de tegner |
| Navngivne visninger | Beholdt, med navne med store bogstaver; et arks visninger kommer tilbage på det første ark |
| Flere ark | Det første ark er det papirrum, alle programmer viser; de andre beholdes som blokke med navnene `CCLAYOUT_1`, `CCLAYOUT_2` …, som CadCraft gør til ark igen, når den åbner filen |

Historikken viser hver af dem, der gjaldt din tegning.

:::tip
For at arbejde videre på en tegning over flere dage gemmer du som DXF og åbner den DXF næste gang. Alt, CadCraft kan tegne, overlever turen frem og tilbage, også målsætninger, blokke og alle ark.
:::

## Linkede tegninger (eksterne referencer)

{{cmd:XATTACH}} (`XA`, eller {{ui:Blokke}} › {{ui:Mere}} › {{ui:Link en tegning (xref)}}) linker en anden DWG eller DXF: vælg filen, og klik derefter, hvor den skal være ({{key:Enter}} sætter den i 0,0). Den kommer ind som én blok opkaldt efter filen, i den rigtige skala, når de to tegninger har forskellige enheder. Dens lag og blokke beholder deres navne med linkets navn foran, `Plan|Walls`, `Plan|Door`, så de aldrig blandes med dine: slå de linkede lag til og fra, frys eller lås dem som dine egne. Et link er skrivebeskyttet: ændr den anden tegning, og genindlæs den. Det, du indstiller på et links lag (farve, linjetype, linjetykkelse, tændt/slukket, frys, lås, plot), beholdes, når du genindlæser det, når du gemmer tegningen som DWG, mens linket stadig er et link, og når en anden tegning linker til denne.

{{cmd:XREF}} (`XR`): `?` viser linkene (indlæst eller ej, hvilken fil, hvor mange referencer); `A` vedhæfter; `R` genindlæser ét fra dets fil (vælg filen igen: browseren kan ikke selv nå dine mapper); `B` binder ét (det bliver til almindelige blokke og lag med navne som `Plan$0$Walls`); `D` frakobler ét (dets referencer og lag forsvinder). Hver er ét fortrydelsestrin.

{{cmd:XCLIP}} (`XC`) beskærer blokreferencer og links: markér dem, `N` for en ny afgrænsning, derefter `R` og to hjørner eller `P` og punkterne i en polygon ({{key:Enter}} lukker den); `D` fjerner beskæringen. Kun det, der ligger indeni, vises og plottes, og beskæringen flytter sig med referencen. DWG og DXF 2000 beholder beskæringer; DXF R12 gemmer referencen hel og siger det. Når du binder et link med beskårne referencer, spørger {{cmd:XREF}} `B`: `A` binder alt, `C` beholder kun hver references beskårne del (linjer og buer skæres ved afgrænsningen; tekster og indlejrede blokke bliver, når deres indsætningspunkt er indeni).

En tegning, du åbner, kan linke filer, CadCraft ikke kan se: den siger, hvor mange der ikke er indlæst. Brug {{cmd:XREF}}, `R` og vælg hver fil for at se dem.

Når du gemmer, **bindes** et indlæst link ind i filen (andre programmer ser almindelige blokke og lag med navne som `Plan$0$…`), og historikken siger det. Et link, der ikke er indlæst, forbliver et link til sin fil, i DWG og DXF.

## Åbn i 3D

{{ui:Visning}} › {{ui:Mere}} › {{ui:Åbn i ModelCraft}} ({{cmd:OPENIN3D}}) åbner tegningen i 3D-modelleringsappen i en ny fane, som en DWG, uden at uploade den. Ændringer, der laves dér, bliver dér; gem dem dér. Menupunktet vises kun, hvor den app kan tage imod en overdraget tegning.

## At plotte en PDF

Tryk på {{key:Mod+P}}, klik på {{ui:Plot}}, eller skriv `PLOT`. PDF'en laves inde i browseren og downloades eller åbnes i en ny fane til udskrivning. Se [Plot til PDF](topic:plot-pdf).

## Hvor filerne havner

Hver gemning og hvert plot er en download, så filer havner, hvor din browser lægger downloads: som regel mappen Downloads. For at vælge en mappe hver gang ændrer du indstillingen for downloads i din browser; [Browsere og computere](common:browsers) viser hvor.

Intet, du åbner eller gemmer, sendes til os. Se [Hvor dine filer havner](common:your-files).

## PLN- og PLA-projektfiler

CadCraft åbner DWG- og DXF-tegninger, ikke Archicads egne filer (`.pln`, `.pla`, `.tpl`, `.bpn`). Når du åbner en, fortæller den dig, hvad den er. I Archicad gemmer du de visninger eller layouts, du har brug for, som DWG og åbner dem her, eller eksporterer modellen som IFC og åbner den i BimCraft. Hvor BimCraft kan overtage filen, tilbyder CadCraft {{ui:Åbn i BimCraft}}.

## Hvis siden lukkes, før du gemmer

CadCraft beholder en kopi af hver tegning, du ændrer, kun i denne browser, et øjeblik efter du holder op med at redigere. Hvis fanen lukkes, browseren stopper, eller computeren genstarter, før du gemmer, spørger CadCraft **Gendan dit arbejde?** næste gang, den starter: {{ui:Gendan}} åbner tegningen igen, ugemt, i sin egen fane. Når du gemmer tegningen, fjernes dens kopi. Se [Gendan dit arbejde](common:recover).

## Online og offline

At åbne, tegne, gemme (DWG og DXF) og plotte sker alt sammen på din computer, så det virker uden forbindelse, når CadCraft først er indlæst.

For at bruge CadCraft helt uden forbindelse klikker du på {{ui:Gem til offline brug}} i linjen øverst, mens du er online. Etiketten tæller op ("Saving 40 of 212") og ender på "Offline ready". Den gemte kopi indeholder DWG-læseren, omkring 5 MB i alt, så **DWG-filer åbnes også offline**, når den er gemt. Klik på knappen igen for {{ui:Gem igen (hent den nyeste version)}} eller {{ui:Fjern offlinekopien}}. "Could not save" betyder, at nogle filer ikke blev downloadet: kontrollér forbindelsen, og klik for at prøve igen. "Offline not available" betyder, at dette browservindue ikke kan beholde en kopi (private vinduer og nogle administrerede computere).

Uden en gemt kopi hentes DWG-læseren første gang, du åbner en DWG efter siden er indlæst, så det kan mislykkes at åbne en DWG offline; DXF-filer har aldrig brug for den. Genindlæs ikke siden offline, medmindre CadCraft er gemt.

Se [Arbejd offline](common:offline) for detaljerne.

:::offline
Du er offline nu. Tegninger gemmes som DWG eller DXF og plottes normalt, og DXF-filer åbnes. DWG-filer åbnes, hvis CadCraft viser "Offline ready", eller hvis DWG-læseren allerede er indlæst i denne fane.
:::

## Begrænsninger i filer

Begrænsninger og parametre (se [Begræns en tegning](topic:constraints)) gemmes i både DWG og DXF. Hvert begrænset objekt bærer en lille CadCraft-note (udvidede data), og en ubrugt blok med navnet `CADCRAFT_PARAMETRIC` rummer begrænsningerne og parametertabellen. Andre programmer åbner tegningen normalt og ignorerer begge dele; de kan slette den ubrugte blok, når de renser. Noterne henviser til objekter med deres egen nøgle, ikke filens håndtag, så et program, der omnummererer håndtag, ødelægger dem ikke. Når et andet program har slettet eller ændret et begrænset objekt, fjerner CadCraft begrænsningerne på det, når den åbner filen, og siger hvor mange. En fil uden dem åbnes uden begrænsninger.

En skitse eksporteret fra en delmodellering (`.json`) åbnes også: se [Flyt skitser til og fra andre delmodelleringsprogrammer](topic:solidworks-sketches).

## Ikke tilgængeligt endnu

- Flere henvisningslinjer som henvisningsobjekter i en gemt DXF (R12 har ingen: de gemmes som det, de tegner).
- Billeder i en gemt DXF (de gemmes som deres rammer; DWG beholder dem som billeder) og afdækninger, der skjuler det, der ligger under dem.
- At gemme en nyere DXF-version end 2000.
- Gemning i skyen og synkronisering mellem computere.

Se [Ikke lavet endnu](topic:not-built-yet) for hele listen.
