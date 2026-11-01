---
title: Filer: hva som åpnes, hva som lagres
summary: Formatene CadCraft åpner, lagrer og eksporterer, hva som beholdes eller konverteres, og hvor filene havner.
keywords: xclip, klipp, xclip-avgrensning, bind klippede, dwg, dxf, pdf, r12, åpne, lagre, eksporter, importer, formater, konvertering, last ned, saveas, dxfout, lagre som, dwg-lagring, format, qsave, xref, xattach, lenket tegning, ekstern referanse, bind, last på nytt, løsne
from: 6d68b34e
---

## Med et blikk

| Format | Åpne | Lagre | Merknader |
|---|---|---|---|
| DXF (tekst, alle versjoner) | Ja | Ja, som DXF R12 eller DXF 2000 | Binær DXF avvises: lagre den som tekst-DXF først. |
| DWG | Ja | Ja, som DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 eller 2018) | Leses og skrives av CadCrafts eget DWG-bibliotek (AutoCAD R13- til 2018-filer). DWG-en din blir aldri endret. Skadde filer, eller versjoner leseren ikke håndterer, avvises med en melding. |
| PDF | Henter inn en side: som underlag eller som objekter ([PDF-underlag](topic:pdf-underlay)) | Ja, ved plotting | Vektor-PDF av et ark, eller av modellen i en målestokk. |

Hver tegning du åpner (eller starter med {{ui:Ny}}) får sin egen fane over tegneområdet; en ny tegning ingen har rørt ennå, brukes i stedet for å legge til en fane. Klikk en fane for å bytte, dens {{ui:×}} for å lukke den (CadCraft spør først hvis det finnes ulagrede endringer), eller flis de åpne tegningene side ved side: se [Del skjermen](topic:split-screen).

## Åpne en tegning

- Trykk {{key:Mod+O}}, klikk {{ui:Åpne}}, eller skriv `OPEN`, og velg deretter filen.
- Eller dra en `.dwg`- eller `.dxf`-fil til tegneområdet.

Filen leses inne i nettleseren din. Den lastes ikke opp noe sted. Historikken melder hvor mange objekter og layer som kom inn og hvor lang tid det tok, og delen {{ui:Tegning}} i panelet til venstre viser formatet, for eksempel «DWG 2018 (AC1032)».

DWG-leseren er en del av CadCraft og hentes med den første DWG-en du åpner etter at siden er lastet (noen hundre KB), så det er ingen egen nedlasting å vente på. Den leser filen i bakgrunnen, så siden fortsetter å svare mens en stor DWG åpnes.

### Hva som kommer inn

- Linjer, buer, sirkler, polylinjer (med buesegmenter), ellipser, punkter, tekst og flerlinjetekst, volumer, skraveringer (standardmønstrene tegnet som sine linjer, andre som en flat tone), blokkreferanser med attributtene sine (verdier du kan redigere; se [Blokkattributter](topic:attributes)), måltilsettinger og layouter med visningsområdene sine.
- Splines kommer inn som splines (grad, kontrollpunkter, knuter, vekter, tilpasningspunkter); se [Splines og polylinjer](topic:splines).
- Flerhjelpelinjer med én hjelpelinje og tekst kommer inn som CadCraft-flerhjelpelinjer du kan redigere (se {{cmd:MLEADER}}). Andre (med en blokk, flere hjelpelinjer eller buede linjer) tegnes slik det andre programmet tegnet dem og flyttes som ett; historikken sier hvor mange.
- Bilder vises som en ramme med bildets filnavn til du gir CadCraft filen med {{cmd:IMAGE}}: se [Bilder i en tegning](topic:pictures#show-the-pictures-a-dwg-uses). Maskeringer vises som rammen sin, og det som er under dem, forblir synlig.
- Tabeller i en DWG kommer inn slik det andre programmet tegnet dem.
- 3D-flater i modellrommet kommer inn på fanen {{ui:3D}}, ikke som 2D-objekter; det samme gjelder de inne i blokker, én gang per blokkreferanse i modellen. I en blokk og på et ark tegnes de også flate, som omriss. Se [Modeller i 3D](topic:3d-solids).
- Layer beholder farge-, på-, frosset-, låst- og plottinnstillingene sine. DEFPOINTS plottes aldri.
- Måltilsettinger blir ekte, redigerbare CadCraft-måltilsettinger der punktene deres kan leses. De vises først nøyaktig slik det andre programmet tegnet dem; så snart du endrer en, tegner CadCraft den på nytt i sin egen stil.
- Hver layout blir en arkfane. I det andre programmet har hver layout et skjult første visningsområde som er selve arket; CadCraft utelater det.

### Hva som ikke kommer inn ennå

Alt CadCraft ikke kan tegne, telles, ikke gjettes på. Boksen «Om denne filen» i panelet til venstre lister det som «Vises ikke ennå:» etterfulgt av hver objekttype og hvor mange. Typiske tilfeller er tabeller i en DXF, nett og 3D-volumer inne i blokker. 3D-volumer, regioner og legemer i modellrommet vises på 3D-fanen (se [Modeller i 3D](topic:3d-solids#solids-from-other-programs)). Visningsområder som er vridd i filen, vises vridd som der, og beholder vridningen når du lagrer; det samme gjelder gjeldende BKS, de navngitte BKS-ene og en dreid visning.

Tekst tegnes i én Helvetica-lignende font. En etikett som får plass på én linje i det opprinnelige programmets smalere font, kan brytes over to linjer i CadCraft.

## Lagring

Det er tre måter å lagre på. Hver laster ned en kopi.

- **Lagre**: trykk {{key:Mod+S}}, klikk {{ui:Lagre}}, eller skriv `SAVE` (også `QSAVE`). Den lagrer i tegningens format: DWG hvis du åpnet en DWG, DXF hvis du åpnet en DXF. En DWG beholder versjonen den kom inn i (en 2018-fil lagres som 2018). En ny tegning bruker formatet og DWG-versjonen du sist valgte i Lagre som i denne nettleseren; hvis du aldri valgte noe, DWG i AutoCAD 2000-formatet.
- **Lagre som**: trykk {{key:Mod+Shift+S}}, klikk {{ui:Lagre som}}, eller skriv `SAVEAS`. Dialogen {{ui:Lagre en kopi som}} tilbyr {{ui:DWG}}, med en liste {{ui:Versjon}} (AutoCAD 2018, 2013, 2010, 2007, 2004 eller 2000), {{ui:DXF R12}} og {{ui:DXF 2000}}, hver med filnavnet den vil gi, og tegningens gjeldende format og versjon allerede valgt. Klikk {{ui:Lagre}} for å laste ned, eller {{ui:Avbryt}} (eller {{key:Esc}}) for å lagre ingenting; historikken sier da «Ikke lagret.» Det du velger, blir stående: {{key:Mod+S}} bruker det for denne tegningen fra da av, og nye tegninger i denne nettleseren starter med det.
- **DXFOUT**: skriv `DXFOUT`. Den laster alltid ned en DXF R12-kopi, og neste {{key:Mod+S}} lagrer fortsatt i tegningens eget format.

Nettleseren laster ned `<tegningsnavn>.dwg` eller `<tegningsnavn>.dxf`. Hver lagring er en **ny nedlasting**; filen du åpnet blir aldri overskrevet eller endret. Historikken bekrefter det, for eksempel «Lagret en kopi som Plan.dwg (DWG (AutoCAD 2018)). Originalen Plan.dxf er uendret.» For en DXF står det «(DXF R12, åpnes i alle CAD-programmer)». Linjene under lister alt som endret seg på veien.

Når CadCraft kjører i skrivebordsappen, fungerer lagring slik det gjør i andre skrivebordsprogrammer: {{key:Mod+S}} skriver tegningen tilbake til filen du åpnet, i sitt eget format og sin egen versjon, og historikken sier hvor den ble lagret. {{ui:Lagre som}} og eksportene viser systemets lagringsdialog, og en `.dwg`-, `.dxf`- eller `.ccsheets`-fil du dobbeltklikker, åpnes i CadCraft.

For en PDF plotter du i stedet (se nedenfor).

## Hva en DWG beholder og endrer

CadCraft skriver DWG-en selv, inne i nettleseren din, med det samme DWG-biblioteket den leser med. Velg versjonen i Lagre som: AutoCAD 2000-formatet (filversjon AC1015) åpnes i flest programmer, også gamle; de nyere formatene (2004, AC1018, opp til 2018, AC1032) beholder også ekte farger. Ingenting lastes opp, og å lagre en DWG fungerer frakoblet.

Hver versjon er kontrollert ved å lese de lagrede filene tilbake med tre andre programmers DWG-lesere og med CadCraft selv. En CadCraft-DWG er ikke åpnet i AutoCAD selv ennå.

### Hva en DWG beholder

- Linjer, buer, sirkler, ellipser, punkter og polylinjer med buesegmentene sine.
- Enlinjetekst med justering og breddefaktor.
- Flerlinjetekst og brutt tekst, som flerlinjetekst. Det andre programmet bryter den på nytt fra samme bredde.
- Objektfarger: etter layer, etter blokk, de 255 standardfargene, og ekte farger i 2004-formatet og senere.
- Layer med farge, linjetype, linjevekt og på-, frosset-, låst- og plottinnstillingene sine; objektenes egne linjetyper, linjevekter og linjetypeskalaer, linjetypemønstrene og tegningens linjetypeskala.
- Tegneenhetene og lengdeformatet (desimal, fot og tommer, brøker …).
- Blokker med basispunktet og attributtdefinisjonene sine, også usynlige, konstante og forhåndsinnstilte.
- Blokkreferanser med skala, rotasjon og attributtverdier.
- Heldekkende fyll og mønsterskraveringer med mønster, skala og vinkel (mønsterets egne linjer, så andre programmer tegner de samme linjene som CadCraft).
- Måltilsettinger, som ekte måltilsettinger: andre programmer måler dem på nytt når de strekkes. Hver beholder sine egne innstillinger (teksthøyde, pilstørrelse, desimaler, lengdeformat) og teksten sin, og har den tegnede kopien hver DWG-måltilsetting har.
- Ark (layouter): hvert ark med papirstørrelse og enheter, det som er tegnet på det, og visningsområdene med visning og skala.
- Navngitte visninger.
- Flerhjelpelinjer, som flerhjelpelinjer.
- Layer- og blokknavn slik du skrev dem, med store og små bokstaver. (DXF R12 skriver dem med store bokstaver.)

### Hva en DWG endrer

Hver av disse listes i historikken etter at du har lagret, når det gjelder tegningen din.

| I CadCraft | I den lagrede DWG-en |
|---|---|
| Ekte farger (valgt med fargevelgeren), i 2000-formatet | Nærmeste standardfarge: 2000-formatet har bare de 255. Lagre som 2004 eller senere for å beholde dem |
| Navngitte visninger på et ark | Papirromvisninger: en DWG sier ikke hvilket ark, så når CadCraft åpner filen igjen, tilhører de første ark |
| Flerlinjetekst med breddefaktor | Normal bokstavbredde: i en DWG gjelder breddefaktoren bare enlinjetekst |
| Layer- eller blokknavn med tegn DWG ikke tillater | Endret: et navn fra en lenket tegning som `Base\|Walls` blir `Base$0$Walls` (slik binding av en lenket tegning navngir det), og andre tegn blir `_` |

### Hvorfor R12, og hva som konverteres

Når du lagrer som DXF, skriver CadCraft DXF R12, versjonen alle CAD-programmer kan åpne. Den er eldre enn noen funksjoner, så noen ting skrives i en enklere form:

| I CadCraft | I den lagrede R12-filen |
|---|---|
| Flerlinjetekst | Ett tekstobjekt per linje |
| Ellipser | Polylinjer som følger ellipsen |
| Skraveringer (fra åpnede filer) | Bare omrissene |
| Ekte farger (valgt med fargevelgeren) | Nærmeste standardfarge |
| Linjevekter, og objektenes egne linjetypeskalaer | Utelatt: R12 har ingen av dem (linjetyper beholdes) |
| Layer- og blokknavn | Skrevet med store bokstaver; mellomrom og andre tegn blir `_`, og navn kuttes til 31 tegn («Title block» blir `TITLE_BLOCK`) |
| Layer satt til ikke å plottes | Andre programmer vil plotte dem (CadCraft husker innstillingen når tegningen har et ark) |
| Måltilsettinger | Ekte måltilsettinger med sin egen tegnede blokk, så andre programmer viser dem slik du ser dem |
| Flerhjelpelinjer | Linjene, pilspissen og teksten de tegner |
| Navngitte visninger | Beholdt, med navn med store bokstaver; et arks visninger kommer tilbake på det første arket |
| Flere ark | Det første arket er papirrommet alle programmer viser; de andre beholdes som blokker kalt `CCLAYOUT_1`, `CCLAYOUT_2` … som CadCraft gjør om til ark igjen når den åpner filen |

Historikken lister hver av disse som gjaldt tegningen din.

:::tip
For å fortsette å arbeide på en tegning over flere dager lagrer du som DXF og åpner den DXF-en neste gang. Alt CadCraft kan tegne, overlever rundturen, også måltilsettinger, blokker og alle ark.
:::

## Lenkede tegninger (eksterne referanser)

{{cmd:XATTACH}} (`XA`, eller {{ui:Blokker}} › {{ui:Mer}} › {{ui:Koble en tegning (xref)}}) lenker en annen DWG eller DXF: velg filen, og klikk deretter hvor den skal stå ({{key:Enter}} legger den på 0,0). Den kommer inn som én blokk oppkalt etter filen, i riktig skala når de to tegningene har ulike enheter. Layerne og blokkene beholder navnene sine med lenkens navn foran — `Plan|Walls`, `Plan|Door` — så de aldri blandes med dine: slå de lenkede layerne av og på, frys eller lås dem som dine egne. En lenke er skrivebeskyttet: endre den andre tegningen og last den på nytt. Det du setter på en lenkes layer (farge, linjetype, linjevekt, på/av, frys, lås, plott), beholdes når du laster den på nytt, når du lagrer tegningen som DWG mens lenken fortsatt er en lenke, og når en annen tegning lenker til denne.

{{cmd:XREF}} (`XR`): `?` lister lenkene (lastet eller ikke, hvilken fil, hvor mange referanser); `A` kobler til; `R` laster én på nytt fra filen sin (velg filen igjen: nettleseren kan ikke nå mappene dine av seg selv); `B` binder én (den blir vanlige blokker og layer kalt `Plan$0$Walls`); `D` løsner én (referansene og layerne forsvinner). Hver er ett angretrinn.

{{cmd:XCLIP}} (`XC`) klipper blokkreferanser og lenker: velg dem, `N` for en ny avgrensning, deretter `R` og to hjørner eller `P` og punktene til en mangekant ({{key:Enter}} lukker den); `D` fjerner klippet. Bare det som ligger innenfor, vises og plottes, og klippet flyttes med referansen. DWG og DXF 2000 beholder klipp; DXF R12 lagrer referansen hel og sier det. Når du binder en lenke som har klippede referanser, spør {{cmd:XREF}} `B`: `A` binder alt, `C` beholder bare hver referanses klippede del (linjer og buer kuttes ved avgrensningen; tekster og nøstede blokker blir stående når innsettingspunktet er innenfor).

En tegning du åpner, kan lenke til filer CadCraft ikke kan se: den sier hvor mange som ikke er lastet. Bruk {{cmd:XREF}}, `R` og velg hver fil for å se dem.

Når du lagrer, **bindes** en lastet lenke inn i filen (andre programmer ser vanlige blokker og layer kalt `Plan$0$…`), og historikken sier det. En lenke som ikke er lastet, forblir en lenke til filen sin, i DWG og DXF.

## Åpne i 3D

{{ui:Visning}} › {{ui:Mer}} › {{ui:Åpne i ModelCraft}} ({{cmd:OPENIN3D}}) åpner tegningen i 3D-modelleringsappen i en ny fane, som en DWG, uten å laste den opp. Endringer gjort der, blir der; lagre dem der. Menyvalget vises bare der den appen kan ta imot en overlevert tegning.

## Plotte en PDF

Trykk {{key:Mod+P}}, klikk {{ui:Plott}}, eller skriv `PLOT`. PDF-en lages inne i nettleseren og lastes ned, eller åpnes i en ny fane for utskrift. Se [Plott til PDF](topic:plot-pdf).

## Hvor filene havner

Hver lagring og hvert plott er en nedlasting, så filene havner der nettleseren legger nedlastinger: vanligvis mappen Nedlastinger. For å velge en mappe hver gang endrer du nedlastingsinnstillingen i nettleseren; [Nettlesere og datamaskiner](common:browsers) viser hvor.

Ingenting du åpner eller lagrer, sendes til oss. Se [Hvor filene dine havner](common:your-files).

## PLN- og PLA-prosjektfiler

CadCraft åpner DWG- og DXF-tegninger, ikke Archicads egne filer (`.pln`, `.pla`, `.tpl`, `.bpn`). Å åpne en forteller deg hva den er. Lagre visningene eller layoutene du trenger som DWG i Archicad og åpne dem her, eller eksporter modellen som IFC og åpne den i BimCraft. Der BimCraft kan overta filen, tilbyr CadCraft {{ui:Åpne i BimCraft}}.

## Hvis siden lukkes før du lagrer

CadCraft beholder en kopi av hver tegning du endrer, bare i denne nettleseren, et øyeblikk etter at du slutter å redigere. Hvis fanen lukkes, nettleseren stopper eller datamaskinen starter på nytt før du lagrer, spør CadCraft **Gjenopprette arbeidet ditt?** neste gang den starter: {{ui:Gjenopprett}} åpner tegningen igjen, ulagret, i en egen fane. Å lagre tegningen fjerner kopien. Se [Gjenopprett arbeidet ditt](common:recover).

## Tilkoblet og frakoblet

Å åpne, tegne, lagre (DWG og DXF) og plotte skjer alt på datamaskinen din, så det fungerer uten forbindelse når CadCraft er lastet.

For å bruke CadCraft helt uten forbindelse klikker du {{ui:Lagre for frakoblet bruk}} i linjen øverst mens du er tilkoblet. Etiketten teller opp («Lagrer 40 av 212») og ender på «Klar frakoblet». Den lagrede kopien inneholder DWG-leseren, omtrent 5 MB til sammen, så **DWG-filer åpnes også frakoblet** når den er lagret. Klikk knappen igjen for {{ui:Lagre på nytt (hent nyeste versjon)}} eller {{ui:Fjern den frakoblede kopien}}. «Kunne ikke lagre» betyr at noen filer ikke ble lastet ned: sjekk forbindelsen og klikk for å prøve igjen. «Frakoblet bruk er ikke tilgjengelig» betyr at dette nettleservinduet ikke kan beholde en kopi (private vinduer og noen administrerte datamaskiner).

Uten en lagret kopi hentes DWG-leseren første gang du åpner en DWG etter at siden er lastet, så å åpne en DWG frakoblet kan mislykkes; DXF-filer trenger den aldri. Ikke last siden på nytt frakoblet med mindre CadCraft er lagret.

Se [Arbeide frakoblet](common:offline) for detaljene.

:::offline
Du er frakoblet nå. Tegninger lagres som DWG eller DXF og plottes som vanlig, og DXF-filer åpnes. DWG-filer åpnes hvis CadCraft viser «Klar frakoblet», eller hvis DWG-leseren allerede er lastet i denne fanen.
:::

## Betingelser i filer

Betingelser og parametere (se [Sett betingelser på en tegning](topic:constraints)) lagres i både DWG og DXF. Hvert objekt med betingelser bærer et lite CadCraft-notat (utvidede data), og en ubrukt blokk kalt `CADCRAFT_PARAMETRIC` holder betingelsene og parametertabellen. Andre programmer åpner tegningen som vanlig og ignorerer begge; de kan slette den ubrukte blokken når de renser. Notatene viser til objekter med sin egen nøkkel, ikke filens håndtak, så et program som nummererer håndtakene på nytt, ødelegger dem ikke. Når et annet program har slettet eller endret et objekt med betingelser, fjerner CadCraft betingelsene på det når den åpner filen og sier hvor mange. En fil uten dem åpnes uten betingelser.

En skisse eksportert fra en delmodellerer (`.json`) åpnes også: se [Flytt skisser til og fra andre delmodellerere](topic:solidworks-sketches).

## Ikke tilgjengelig ennå

- Flerhjelpelinjer som flerhjelpelinje-objekter i en lagret DXF (R12 har ingen: de lagres som det de tegner).
- Bilder i en lagret DXF (de lagres som rammene sine; DWG beholder dem som bilder), og maskeringer som skjuler det som er under dem.
- Å lagre en nyere DXF-versjon enn 2000.
- Skylagring og synkronisering mellom datamaskiner.

Se [Ikke bygget ennå](topic:not-built-yet) for hele listen.
