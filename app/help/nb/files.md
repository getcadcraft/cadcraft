---
title: Filer: hva som åpnes, hva som lagres
summary: Formatene CadCraft åpner, lagrer og eksporterer, hva som beholdes eller konverteres, og hvor filene havner.
keywords: xclip, clip, xclip-grense, bind klippet, dwg, dxf, pdf, r12, åpne, lagre, eksporter, importer, formater, konvertering, nedlasting, saveas, dxfout, lagre som, dwg-lagring, format, qsave, xref, xattach, koblet tegning, ekstern referanse, bind, last på nytt, koble fra
from: b8c5778d
---

## Oversikt

| Format | Åpne | Lagre | Merknader |
|---|---|---|---|
| DXF (tekst eller binær, alle versjoner) | Ja | Ja, som DXF R12, DXF 2000 eller DXF 2000 (binær) | En binær DXF åpnes som en tekstfil og lagres tilbake som binær. |
| DWG | Ja | Ja, som DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 eller 2018) | Leses og skrives av CadCraft sitt eget DWG-bibliotek (AutoCAD R13 til 2018). Den opprinnelige DWG-filen endres aldri. Skadde filer, eller versjoner leseren ikke håndterer, avvises med en melding. |
| PDF | Henter inn en side: som underlegg eller som objekter ([PDF-underlegg](topic:pdf-underlay)) | Ja, ved plotting | Vektor-PDF av et ark, eller av modellen i en målestokk. |

Hver tegning du åpner (eller starter med {{ui:Ny}}), får sin egen fane over tegneområdet. En ny tegning som ingen har rørt ennå, brukes i stedet for å legge til en fane. Klikk på en fane for å bytte, eller på dens {{ui:×}} for å lukke den (CadCraft spør først hvis det finnes ulagrede endringer). Du kan også vise de åpne tegningene side om side: se [Del skjermen](topic:split-screen).

## Åpne en tegning

- Trykk {{key:Mod+O}}, klikk {{ui:Åpne}}, eller skriv `OPEN`, og velg deretter filen.
- Eller dra en `.dwg`- eller `.dxf`-fil over tegneområdet.

Filen leses i nettleseren din. Den lastes ikke opp noe sted. Historikken forteller hvor mange objekter og layere som kom inn, og hvor lang tid det tok. Seksjonen {{ui:Tegning}} i venstre panel viser formatet, for eksempel «DWG 2018 (AC1032)».

DWG-leseren er en del av CadCraft og hentes sammen med den første DWG-en du åpner etter at siden er lastet (noen hundre KB), så det finnes ingen egen nedlasting å vente på. Den leser filen i bakgrunnen, så siden fortsetter å svare mens en stor DWG åpnes.

En DXF leses i biter på rundt 4 MB, aldri som én tekstblokk, så en DXF over 512 MB åpnes også. Det som setter grensen er datamaskinens minne: mens en DXF åpnes, regn med å bruke omtrent 16 til 20 ganger filstørrelsen (en 100 MB DXF med rundt 690,000 objekter brukte rundt 1.5 GB i vår test).

### Hva som kommer inn

- Linjer, buer, sirkler, polylinjer (med buesegmenter), ellipser, punkter, tekst og flerlinjetekst, solider, skraveringer (standardmønstrene tegnet som sine linjer, andre som en flat tone), blokkreferanser med attributtene sine (verdier du kan redigere; se [Blokkattributter](topic:attributes)), mål, og layouter (ark) med sine visningsområder.
- Splines kommer inn som splines (grad, kontrollpunkter, knuter, vekter, tilpasningspunkter); se [Splines og polylinjer](topic:splines).
- Flerledere med én lederlinje og tekst kommer inn som CadCraft-flerledere du kan redigere (se {{cmd:MLEADER}}). Andre (med en blokk, flere lederlinjer eller buede linjer) tegnes slik det andre programmet tegnet dem, og flyttes som ett; historikken sier hvor mange.
- Bilder vises som en ramme med bildets filnavn helt til du gir CadCraft filen med {{cmd:IMAGE}}: se [Bilder i en tegning](topic:pictures#show-the-pictures-a-dwg-uses). Maskeringer vises som sin ramme, og det som er under dem, forblir synlig.
- Tabeller i en DWG kommer inn slik det andre programmet tegnet dem.
- 3D-flater i modellrommet kommer inn på fanen {{ui:3D}}, ikke som 2D-objekter; det samme gjelder de som ligger inne i blokker, én gang per blokkreferanse i modellen. I en blokk og på et ark tegnes de også flatt, som konturer. Se [Modell i 3D](topic:3d-solids).
- Layerne beholder farge, på, fryst, låst og plotteinnstillinger. DEFPOINTS skrives aldri ut.
- Mål blir ekte, redigerbare CadCraft-mål der punktene kan leses. De vises først nøyaktig slik det andre programmet tegnet dem; så snart du endrer ett, tegner CadCraft det på nytt i sin egen stil.
- Hver layout blir en arkfane. I det andre programmet har hver layout et skjult første visningsområde som er selve arket; CadCraft utelater det.

### Hva som ikke kommer inn ennå

Alt CadCraft ikke kan tegne, telles og gjettes ikke på. Boksen «Om denne filen» i venstre panel lister det opp som «Ikke vist ennå:», etterfulgt av hver type objekt og hvor mange. Typiske tilfeller er tabeller i en DXF, nett og 3D-solider inne i blokker. 3D-solider, regioner og legemer i modellrommet vises på 3D-fanen (se [Modell i 3D](topic:3d-solids#solids-from-other-programs)). Visningsområder som er vridd i filen, vises vridd, slik de er der, og beholder vridningen når du lagrer; det samme gjelder gjeldende UCS, de navngitte UCS-ene og en vridd visning.

Tekst tegnes i én skrift i Helvetica-stil. En etikett som får plass på én linje i det opprinnelige programmets smalere skrift, kan brytes over to linjer i CadCraft.

## Lagre

Det finnes tre måter å lagre på. Hver laster ned en kopi.

- **Lagre**: trykk {{key:Mod+S}}, klikk {{ui:Lagre}}, eller skriv `SAVE` (også `QSAVE`). Den lagrer i tegningens format: DWG hvis du åpnet en DWG, DXF hvis du åpnet en DXF. En DWG beholder versjonen den kom med (en 2018-fil lagres som 2018). En ny tegning bruker formatet og DWG-versjonen du sist valgte i {{ui:Lagre som}} i denne nettleseren; hvis du aldri valgte, DWG i AutoCAD 2000-formatet.
- **Lagre som**: trykk {{key:Mod+Shift+S}}, klikk {{ui:Lagre som}}, eller skriv `SAVEAS`. Dialogen {{ui:Lagre en kopi som}} tilbyr {{ui:DWG}}, med en liste over {{ui:Versjon}} (AutoCAD 2018, 2013, 2010, 2007, 2004 eller 2000), {{ui:DXF R12}} og {{ui:DXF 2000}}, hver med filnavnet den vil gi, og tegningens nåværende format og versjon valgt på forhånd. Klikk {{ui:Lagre}} for å laste ned, eller {{ui:Avbryt}} (eller {{key:Esc}}) for å lagre ingenting; historikken sier da «Ikke lagret.». Det du velger, består: {{key:Mod+S}} bruker det for denne tegningen fra da av, og nye tegninger i denne nettleseren starter med det.
- **DXFOUT**: skriv `DXFOUT`. Den laster alltid ned en DXF R12-kopi, og neste {{key:Mod+S}} lagrer fortsatt i tegningens eget format.

Nettleseren laster ned `<drawing name>.dwg` eller `<drawing name>.dxf`. Hver lagring er en **ny nedlasting**; filen du åpnet, blir aldri overskrevet eller endret. Historikken bekrefter det, for eksempel «Lagret en kopi som Plan.dwg (DWG (AutoCAD 2018)). Originalen Plan.dxf er uendret.». For en DXF står det «(DXF R12, åpnes i alle CAD-programmer)». Linjene under den viser alt som ble endret underveis.

Når CadCraft kjører i skrivebordsappen, fungerer lagring slik det gjør i andre skrivebordsprogrammer: {{key:Mod+S}} skriver tegningen tilbake til filen du åpnet, i sitt eget format og sin egen versjon, og historikken sier hvor den ble lagret. {{ui:Lagre som}} og eksportene viser systemets lagredialog, og en `.dwg`-, `.dxf`- eller `.ccsheets`-fil du dobbeltklikker, åpnes i CadCraft.

For en PDF, plott i stedet (se nedenfor).

## Hva en DWG beholder og endrer

CadCraft skriver DWG-filen selv, inne i nettleseren din, med det samme DWG-biblioteket som den leser med. Velg versjonen i {{ui:Lagre som}}: AutoCAD 2000-formatet (filversjon AC1015) åpnes i flest programmer, også gamle; de nyere formatene (2004, AC1018, opp til 2018, AC1032) beholder også ekte farger. Ingenting lastes opp, og lagring av en DWG fungerer frakoblet.

Hver versjon er kontrollert ved at de lagrede filene leses tilbake med tre andre programmers DWG-lesere og med CadCraft selv. En CadCraft-DWG er ikke åpnet i AutoCAD selv ennå.

### Hva en DWG beholder

- Linjer, buer, sirkler, ellipser, punkter og polylinjer med buesegmentene sine.
- Enkeltlinjetekst med justering og breddefaktor.
- Flerlinjet og brutt tekst, som flerlinjetekst. Det andre programmet bryter den på nytt fra samme bredde.
- Objektfarger: etter layer, etter blokk, de 255 standardfargene, og ekte farger i 2004-formatet og nyere.
- Layere med farge, linjetype, linjevekt og deres på-, fryst-, låst- og plotteinnstillinger; objektenes egne linjetyper, linjevekter og linjetypeskalaer, linjetypemønstrene og tegningens linjetypeskala.
- Tegningsenhetene og lengdeformatet (desimal, fot og tommer, brøker …).
- Blokker med basispunkt og attributtdefinisjoner, inkludert usynlige, konstante og forhåndsutfylte.
- Blokkreferanser med skala, rotasjon og attributtverdier.
- Heldekkende fyll, og mønstrede skraveringer med mønster, skala og vinkel (mønstrets egne linjer, så andre programmer tegner de samme linjene som CadCraft gjør).
- Mål, som ekte mål: andre programmer måler dem på nytt når de strekkes. Hvert beholder sine egne innstillinger (teksthøyde, pilstørrelse, desimaler, lengdeformat) og sin tekst, og bærer den tegnede kopien som hvert DWG-mål har.
- Ark (layouter): hvert ark med sin papirstørrelse og enheter, det som er tegnet på det, og dets visningsområder med visning og målestokk.
- Navngitte visninger.
- Flerledere, som flerledere.
- Layer- og blokknavn slik du skrev dem, med store og små bokstaver. (DXF R12 skriver dem med store bokstaver.)

### Hva en DWG endrer

Hver av disse er listet i historikken etter at du lagrer, når den gjelder tegningen din.

| I CadCraft | I den lagrede DWG-en |
|---|---|
| Ekte farger (valgt med fargevelgeren), i 2000-formatet | Nærmeste standardfarge: 2000-formatet har bare de 255. Lagre som 2004 eller nyere for å beholde dem |
| Navngitte visninger for et ark | Visninger i papirrommet: en DWG sier ikke hvilket ark, så når CadCraft åpner filen igjen, hører de til det første arket |
| Flerlinjetekst med breddefaktor | Vanlig bokstavbredde: i en DWG gjelder breddefaktoren bare enkeltlinjetekst |
| Layer- eller blokknavn med tegn DWG ikke tillater | Endret: et navn fra en koblet tegning som `Base\|Walls` blir `Base$0$Walls` (slik binding av en koblet tegning navngir det), og andre tegn blir `_` |

### Hvorfor R12, og hva som konverteres

Når du lagrer som DXF, skriver CadCraft DXF R12, versjonen alle CAD-programmer kan åpne. Den er eldre enn noen funksjoner, så noen ting skrives i en enklere form:

| I CadCraft | I den lagrede R12-filen |
|---|---|
| Flerlinjetekst | Ett tekstobjekt per linje |
| Ellipser | Polylinjer som følger ellipsen |
| Skraveringer (fra åpnede filer) | Bare konturene deres |
| Ekte farger (valgt med fargevelgeren) | Nærmeste standardfarge |
| Linjevekter, og objektenes egne linjetypeskalaer | Utelatt: R12 har ingen av dem (linjetyper beholdes) |
| Layer- og blokknavn | Skrevet med store bokstaver; mellomrom og andre tegn blir `_`, og navn kuttes til 31 tegn («Title block» blir `TITLE_BLOCK`) |
| Layere satt til ikke å plotte | Andre programmer vil skrive dem ut (CadCraft husker innstillingen når tegningen har et ark) |
| Mål | Ekte mål med sin egen tegnede blokk, slik at andre programmer viser dem slik du ser dem |
| Flerledere | Linjene, pilspissen og teksten de tegner |
| Navngitte visninger | Beholdt, med navn med store bokstaver; et arks visninger kommer tilbake på det første arket |
| Flere ark | Det første arket er papirrommet som alle programmer viser; de andre beholdes som blokker kalt `CCLAYOUT_1`, `CCLAYOUT_2` … som CadCraft gjør om til ark igjen når den åpner filen |

Historikken lister opp hver av disse som gjaldt tegningen din.

:::tip
For å fortsette å jobbe på en tegning over flere dager, lagre som DXF og åpne den DXF-en neste gang. Alt CadCraft kan tegne, overlever rundturen, inkludert mål, blokker og alle ark.
:::

## Koblede tegninger (eksterne referanser)

{{cmd:XATTACH}} (`XA`, eller {{ui:Blokker}} › {{ui:Mer}} › {{ui:Koble en tegning (xref)}}) kobler til en annen DWG eller DXF: velg filen, og klikk deretter der den skal plasseres ({{key:Enter}} setter den i 0,0). Den kommer inn som én blokk oppkalt etter filen, i riktig skala når de to tegningene har ulike enheter. Layerne og blokkene dens beholder navnene sine med koblingens navn foran – `Plan|Walls`, `Plan|Door` – så de aldri blandes med dine: slå de koblede layerne på og av, frys eller lås dem som dine egne. En kobling er skrivebeskyttet: endre den andre tegningen og last den inn på nytt. Det du setter på en koblings layere (farge, linjetype, linjevekt, på/av, frys, lås, plott), beholdes når du laster den på nytt, når du lagrer tegningen som DWG mens koblingen fortsatt er en kobling, og når en annen tegning kobler til denne.

{{cmd:XREF}} (`XR`): `?` lister koblingene (lastet eller ikke, hvilken fil, hvor mange referanser); `A` legger til; `R` laster én på nytt fra filen sin (velg filen igjen: nettleseren kan ikke nå mappene dine av seg selv); `B` binder én (den blir vanlige blokker og layere kalt `Plan$0$Walls`); `D` fjerner én (dens referanser og layere går). Hver er ett angre-steg.

{{cmd:XCLIP}} (`XC`) klipper blokkreferanser og koblinger: velg dem, `N` for en ny grense, deretter `R` og to hjørner, eller `P` og punktene i en mangekant ({{key:Enter}} lukker den); `D` fjerner klippet. Bare det som ligger innenfor, vises og skrives ut, og klippet flytter seg med referansen. DWG og DXF 2000 beholder klipp; DXF R12 lagrer referansen hel og sier fra om det. Når du binder en kobling som har klippede referanser, spør {{cmd:XREF}} `B`: `A` binder alt, `C` beholder bare hver referanses klippede del (linjer og buer kuttes ved grensen; tekster og nestede blokker blir værende når innsettingspunktet er innenfor).

En tegning du åpner, kan koble til filer CadCraft ikke kan se: den sier hvor mange som ikke er lastet. Bruk {{cmd:XREF}}, `R` og velg hver fil for å se dem.

Når du lagrer, blir en lastet kobling **bundet** inn i filen (andre programmer ser vanlige blokker og layere kalt `Plan$0$…`), og historikken sier det. En kobling som ikke er lastet, forblir en kobling til filen sin, i DWG og DXF.

## Åpne i 3D

{{ui:Visning}} › {{ui:Mer}} › {{ui:Åpne i ModelCraft}} ({{cmd:OPENIN3D}}) åpner tegningen i 3D-modelleringsappen i en ny fane, som en DWG, uten å laste den opp. Endringer gjort der, blir der; lagre dem der. Menypunktet vises bare der den appen kan ta imot en overlevert tegning.

## Plotte en PDF

Trykk {{key:Mod+P}}, klikk {{ui:Plott}}, eller skriv `PLOT`. PDF-en lages i nettleseren og lastes ned, eller åpnes i en ny fane for utskrift. Se [Plott til PDF](topic:plot-pdf).

## Hvor filene havner

Hver lagring og hver plotting er en nedlasting, så filene havner der nettleseren din legger nedlastinger: vanligvis Nedlastinger-mappen. For å velge en mappe hver gang, endre nedlastingsinnstillingen i nettleseren din; [Nettlesere og datamaskiner](common:browsers) viser hvor.

Ingenting du åpner eller lagrer, sendes til oss. Se [Hvor filene dine ender](common:your-files).

## PLN- og PLA-prosjektfiler

CadCraft åpner DWG- og DXF-tegninger, ikke Archicads egne filer (`.pln`, `.pla`, `.tpl`, `.bpn`). Når du åpner en av dem, får du beskjed om hva den er. I Archicad, lagre visningene eller layoutene du trenger som DWG og åpne dem her, eller eksporter modellen som IFC og åpne den i BimCraft. Der BimCraft kan ta over filen, tilbyr CadCraft {{ui:Åpne i BimCraft}}.

## Hvis siden lukkes før du lagrer

CadCraft beholder en kopi av hver tegning du endrer, bare i denne nettleseren, et øyeblikk etter at du slutter å redigere. Hvis fanen lukkes, nettleseren stopper eller datamaskinen starter på nytt før du lagrer, spør CadCraft **Gjenopprett arbeidet ditt?** neste gang den starter. {{ui:Gjenopprett}} åpner tegningen igjen, ulagret, i sin egen fane. Å lagre tegningen fjerner kopien. Se [Gjenopprett arbeidet ditt](common:recover).

## Tilkoblet og frakoblet

Åpning, tegning, lagring (DWG og DXF) og plotting skjer alle på datamaskinen din, så de fungerer uten forbindelse når CadCraft er lastet.

For å bruke CadCraft uten forbindelse i det hele tatt, klikk {{ui:Lagre for frakoblet bruk}} i linjen øverst mens du er tilkoblet. Teksten teller opp («Lagrer 40 av 212») og ender på «Klar for frakoblet bruk». Den lagrede kopien inkluderer DWG-leseren, omtrent 5 MB totalt, så **DWG-filer åpnes også frakoblet** når den er lagret. Klikk knappen igjen for {{ui:Lagre på nytt (hent nyeste versjon)}} eller {{ui:Fjern den frakoblede kopien}}. «Kunne ikke lagre» betyr at noen filer ikke ble lastet ned: sjekk forbindelsen og klikk for å prøve igjen. «Frakoblet er ikke tilgjengelig» betyr at dette nettleservinduet ikke kan beholde en kopi (private vinduer og noen administrerte datamaskiner).

Uten en lagret kopi hentes DWG-leseren første gang du åpner en DWG etter at siden er lastet, så det kan mislykkes å åpne en DWG frakoblet; DXF-filer trenger den aldri. Ikke last siden på nytt mens du er frakoblet, med mindre CadCraft er lagret.

Se [Arbeid frakoblet](common:offline) for detaljene.

:::offline
Du er frakoblet nå. Tegninger lagres som DWG eller DXF og plottes normalt, og DXF-filer åpnes. DWG-filer åpnes hvis CadCraft viser «Klar for frakoblet bruk», eller hvis DWG-leseren allerede er lastet i denne fanen.
:::

## Begrensninger i filer

Begrensninger og parametere (se [Betingelser i en tegning](topic:constraints)) lagres i både DWG og DXF. Hvert begrenset objekt bærer en liten CadCraft-merknad (utvidede data), og en ubrukt blokk kalt `CADCRAFT_PARAMETRIC` holder begrensningene og parametertabellen. Andre programmer åpner tegningen normalt og ignorerer begge; de kan slette den ubrukte blokken når de renser. Merknadene refererer til objekter med sin egen nøkkel, ikke filens håndtak, så et program som nummererer håndtakene på nytt, ødelegger dem ikke. Når et annet program har slettet eller endret et begrenset objekt, fjerner CadCraft begrensningene på det når den åpner filen, og sier hvor mange. En fil uten dem åpnes uten begrensninger.

En skisse eksportert fra et delmodelleringsprogram (`.json`) åpnes også: se [Flytt skisser til og fra andre delmodelleringsprogrammer](topic:solidworks-sketches).

## Ikke tilgjengelig ennå

- Flerledere som flerlederobjekter i en lagret DXF (R12 har ingen: de lagres som det de tegner).
- Bilder i en lagret DXF (de lagres som sine rammer; DWG beholder dem som bilder), og maskeringer som skjuler det som er under dem.
- Lagring av en nyere DXF-versjon enn 2000.
- Skylagring og synkronisering mellom datamaskiner.

Se [Ikke bygget ennå](topic:not-built-yet) for hele listen.
