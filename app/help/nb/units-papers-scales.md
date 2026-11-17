---
title: Enheter, papirstørrelser og målestokker
summary: Hva tegneenheter betyr i CadCraft, papirstørrelsene for ark og plott, alle standardmålestokker, og hvordan tekst- og målstørrelser henger sammen med plottskalaen.
keywords: enheter, millimeter, tommer, fot, fot og tommer, arkitekt, ingeniør, brøk, fraksjoner, lunits, lengdeformat, presisjon, meter, papirstørrelse, a3, a1, arch d, ansi, tabloid, letter, målestokk, 1:100, 1/4 tomme, arkitektmålestokk, ingeniørmålestokk, insunits
from: 8346236a
---

## Tegneenheter

Du tegner i full størrelse, i tegneenheter. Det én enhet står for, er tegningens innstilling for **Enheter**:

1. Trykk {{key:Esc}} slik at ingenting er valgt, på fanen {{ui:Modell}}.
2. Under {{ui:Gjeldende innstillinger}} velger du {{ui:Enheter}}: {{ui:Uten enhet}}, {{ui:Millimeter}}, {{ui:Centimeter}}, {{ui:Meter}}, {{ui:Tommer}} eller {{ui:Fot}}.

Mål kan skrive lengdene sine i millimeter, centimeter, meter eller kilometer, uansett tegneenheten: se [Måltilsetninger i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Å endre enhetene endrer ingen størrelse. Det endrer hvordan målestokker leses på ark og i plott, og hvilke målestokker som tilbys. En tegning åpnet fra en DWG eller DXF beholder enhetene som er lagret i filen; seksjonen {{ui:Tegning}} i venstre panel viser dem.

En tegning satt til {{ui:Uten enhet}} behandles som om den er i papirets enhet: millimeter på ISO-papir, tommer på US-papir.

## Fot og tommer, og brøker

Hvordan lengder **skrives og skrives inn**, er en egen innstilling: lengdeformatet. Det endrer ingen geometri, bare hvordan tall ser ut og hva du kan skrive.

1. Trykk {{key:Esc}} slik at ingenting er valgt, på fanen {{ui:Modell}}.
2. Under {{ui:Gjeldende innstillinger}} velger du {{ui:Lengdeformat}}: {{ui:Desimal}} (`150.5`), {{ui:Arkitekt}} (`12'-6 1/2"`), {{ui:Ingeniør}} (`12'-6.5"`), {{ui:Brøk}} (`150 1/2`) eller {{ui:Vitenskapelig}} (`1.505E+02`).
3. Velg {{ui:Presisjon}}: desimaler, eller den minste brøken (1/16 er det vanlige valget for arkitekt).

Eller skriv {{cmd:UNITS}} (`UN`) og svar på de to spørsmålene.

Med {{ui:Arkitekt}} eller {{ui:Ingeniør}} er én tegneenhet én tomme, som i AutoCAD: sett {{ui:Enheter}} til {{ui:Tommer}} også. Du kan da skrive lengder i fot og tommer overalt der en lengde spørres om, og i boksene i {{ui:Egenskaper}}:

| Du skriver | Betyr |
|---|---|
| `12'6"` eller `12'-6"` | 12 fot 6 tommer (150) |
| `12'6-1/2"` | 12 fot 6½ tommer. Bruk en bindestrek foran brøken: {{key:Space}} er {{key:Enter}} på kommandolinjen. |
| `12'` | 12 fot |
| `6"` eller `6` | 6 tommer: et vanlig tall er tommer |
| `1/2`, `6-1/2` | brøker fungerer i alle formater |

Punkter tar de samme lengdene: `@12'6",0` eller `@10'<90`. Vinkler forblir i grader.

Formatet vises i historikken ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: arealer som kvadrattommer og kvadratfot), i {{ui:Egenskaper}}, i koordinatene på statuslinjen og i **nye mål**. Ark beholder papirenhetene sine (millimeter eller tommer) som desimaler.

:::note
Lengdeformatet lagres i DWG- og DXF-filer, og hvert mål beholder sitt eget: en lagret tegning åpnes igjen slik du forlot den.
:::

## Papirstørrelser

Ark og modellplott bruker disse størrelsene, i begge retninger:

| Papir | Størrelse | Enhet på arket |
|---|---|---|
| ISO A4 | 297 × 210 mm | millimeter |
| ISO A3 | 420 × 297 mm | millimeter |
| ISO A2 | 594 × 420 mm | millimeter |
| ISO A1 | 841 × 594 mm | millimeter |
| ISO A0 | 1189 × 841 mm | millimeter |
| Letter | 11 × 8.5 in | tommer |
| Legal | 14 × 8.5 in | tommer |
| Tabloid / ANSI B | 17 × 11 in | tommer |
| ANSI C | 22 × 17 in | tommer |
| ANSI D | 34 × 22 in | tommer |
| ARCH C | 24 × 18 in | tommer |
| ARCH D | 36 × 24 in | tommer |
| ARCH E | 48 × 36 in | tommer |

Nye ark starter på ISO A3 for metriske og enhetsløse tegninger, og på Tabloid for tegninger i tommer eller fot. Modellplott starter på ISO A4 eller Letter på samme måte, og husker deretter ditt siste valg. Ark fra åpnede filer beholder sin egen størrelse, vist som «Egendefinert» når den ikke er en av disse.

## Målestokker

En målestokk `1:n` betyr at én enhet på papiret viser n av den samme enheten i modellen, så 1:100 viser 1 m bygning som 10 mm papir. CadCraft regner dette ut fra tegneenhetene og papirets enhet.

**Metriske målestokker**, tilbudt for alle tegninger: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arkitektmålestokker**, tilbudt når enhetene er tommer eller fot: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Ingeniørmålestokker**, tilbudt når enhetene er tommer eller fot: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Egne målestokker.** Skriv `SCALELISTEDIT` (eller `SCALELIST`) for å legge til en målestokk selv, for eksempel 1:75 eller en områdemålestokk på 2 papir : 300 tegning. `Add` spør etter et navn, deretter papirenhetene og tegneenhetene (et navn som `1:75` tilbyr sine egne tall; trykk {{key:Enter}} for å ta dem). `Edit`, `Delete`, `List` og `Reset` virker på samme liste; `Reset` går tilbake til standardlisten. Dine målestokker vises etter standardene i visningsområdets målestokkliste i Egenskaper og i dialogen {{ui:Plott til PDF}}. Et visningsområde i den målestokken leses med navnet sitt, og målestokkene lagres i tegningen (DWG og DXF 2000) som tegningens målestokkliste. En tegning åpnet fra et annet program tar med seg listen sin; målestokker den har som tilsvarer en standard, vises ikke to ganger.

Når et visningsområde rettes med {{ui:Vis hele modellen}} eller {{ui:Velg et vindu på modellen…}}, velger CadCraft den største standardmålestokken som passer. {{ui:Tilpass hele modellen}} setter i stedet en eksakt målestokk, som leses som et vanlig forhold.

## Størrelser på papir og i modellen

Tekst- og målestørrelser er i enhetene til rommet du tegner i.

| Du vil ha på papiret | Tegnet på et ark | Tegnet i modellen i 1:50 (mm-tegning) | Tegnet i modellen i 1/4" = 1'-0" (tomme-tegning) |
|---|---|---|---|
| 2.5 mm tekst | 2.5 | 125 | — |
| 3/32" tekst | 0.09375 | — | 4.5 |

For mål holder du størrelsene som papirstørrelser, og setter den totale skalaen ({{cmd:DIMSCALE}}) til plottskalaen: 50 for 1:50, 48 for 1/4" = 1'-0". Se [Sett størrelser på mål](topic:dimension-settings).

## Annoter etter målestokk

Tegn modellen i full størrelse, og la CadCraft gjøre regnestykkene over for deg.

1. Velg teksten eller målene som skal beholde størrelsen sin på papiret. I Egenskaper kryss av {{ui:Annoterende}}. {{ui:Størrelse på papir}} viser da for eksempel `2.5 mm at 1:50`.
2. Skriv {{cmd:ANNOSCALE}} og målestokken tegningen skal skrives ut i, for eksempel `1:100`.

Hver annoterende tekst og alle mål endres i størrelse, slik at de skrives ut i samme størrelse i den nye målestokken: 2.5 mm tekst er 125 høy i en millimeter-tegning i 1:50 og 250 høy i 1:100. En avsnittsbredde endres med den; et måls tekst, piler og mellomrom endres sammen (den totale skalaen). Det er ett angre-steg, og objekter som ikke er annoterende, endres aldri.

Innstillingen lagres i DWG og DXF: andre programmer leser det annoterende flagget, og CadCraft beholder også målestokken hvert objekt er dimensjonert for.

Hvis kontoret ditt setter papirhøyder i tillegget «Standardpolicyer» (Innstillinger › Global › Standardpolicyer › Størrelse på papir for merknader), setter {{cmd:ANNOSCALE}} også høyden ny tekst starter med til kontorets høyde for merknader i den målestokken. Se [Standardpolicyer](topic:default-policies).

### Ett objekt i flere målestokker

Et ark viser ofte samme plan i 1:100 og en del av den i 1:50. Gi merknadene og målene begge målestokkene, så viser hvert visningsområde dem i sin papirstørrelse:

1. Velg de annoterende tekstene og målene, og skriv `OBJECTSCALE`.
2. Velg `Add` og skriv målestokken, for eksempel `1:50`. (`Current scale` legger til tegningens merknadsmålestokk; `List` viser hva hvert objekt beholder; `Delete` fjerner én.)

Et visningsområde der målestokken står i et objekts liste, viser det i størrelsen for den målestokken: 2.5 mm tekst tegnes 250 høy gjennom et 1:100-visningsområde og 125 høy gjennom et 1:50-visningsområde, både på skjermen og i plottet. Objektet blir værende der det er; bare størrelsen er forskjellig. I et visningsområde med en målestokk som ikke står i et objekts liste, vises objektet i størrelsen det har, til du skriver `ANNOALLVISIBLE` og velger `OFF`: da utelates det der. {{cmd:ANNOSCALE}} endrer objektene som lister den nye målestokken, og lar de andre være som de er.

Listene lagres i DWG og DXF som CadCraft sine egne data. Et annet program ser hvert objekt som annoterende, i den ene målestokken det er dimensjonert for. Bryteren ANNOALLVISIBLE lagres ikke i filen.

## Linjevekter og linjetyper

Et layer, eller et objekt, kan ha en **linjevekt** (0.05 til 2.11 mm) og en **linjetype** (stiplet, skjult, senter, fantom, prikk …). Sett dem i høyre panel: uten noe valgt er {{ui:Linjetype}} og {{ui:Linjevekt}} under {{ui:Gjeldende innstillinger}} det nye objekter får ({{ui:EtterLayer}} for å følge layeren deres), og de to under {{ui:Layer …}} er det aktive layerets egne. Med objekter valgt endrer de samme to radene og {{ui:Linjetypeskala}} disse objektene. Kommandoene er {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) og {{cmd:LTSCALE}} (`LTS`).

Linjetyper vises på skjermen og i plott. Strekene deres er i tegneenheter: en metrisk tegning bruker ISO-størrelsene (DASHED: 12.7 mm streker), en tommetegning bruker tomme-størrelsene (0.5"). Hvis strekene ser for små eller for store ut, endre tegningens {{ui:Linjetypeskala}} (LTSCALE): hver strek og hvert mellomrom multipliseres med den; et objekts egen skala multipliserer den igjen. Et mønster som er for fint til å sees i det hele tatt, tegnes som en heltrukket linje.

Linjevekter skrives ut i plott, i mm på papiret uansett målestokk. Linjer med {{ui:Standard}}-linjevekt bruker pennebredden valgt i dialogen {{ui:Plott til PDF}} (0.13 til 0.70 mm; 0.25 mm til å begynne med). En linjevekt på 0 skrives ut som den tynneste linjen. På skjermen er hver linje én piksel bred til du trykker {{ui:LWT}} i statuslinjen (eller skriver {{cmd:LWDISPLAY}}): da tegnes en linjevekt over 0.25 mm bredere (0.5 mm = 2 piksler) i modellen, og i sin virkelige bredde på papiret på et ark. Valget huskes i denne nettleseren.
