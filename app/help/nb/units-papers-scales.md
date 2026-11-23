---
title: Enheter, papirstørrelser og målestokker
summary: Hva tegningsenheter betyr i CadCraft, papirstørrelsene for ark og plott, alle standardmålestokker, og hvordan tekst- og målstørrelser henger sammen med plottskalaen.
keywords: enheter, millimeter, tommer, fot, fot og tommer, arkitekt, ingeniør, brøk, brøker, lunits, lengdeformat, presisjon, meter, papirstørrelse, a3, a1, arch d, ansi, tabloid, letter, målestokk, 1:100, 1/4 tomme, arkitektmålestokk, ingeniørmålestokk, insunits
from: 7dc9b62e
---

## Tegningsenheter

Du tegner i full størrelse, i tegningsenheter. Hva én enhet står for, er tegningens innstilling **Enheter**:

1. Trykk {{key:Esc}} slik at ingenting er valgt, på fanen {{ui:Modell}}.
2. I {{ui:Gjeldende innstillinger}} velger du {{ui:Enheter}}: {{ui:Uten enhet}}, {{ui:Millimeter}}, {{ui:Centimeter}}, {{ui:Meter}}, {{ui:Tommer}} eller {{ui:Fot}}.

Mål kan skrive sine lengder i millimeter, centimeter, meter eller kilometer, uansett tegningsenhet: se [Mål i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Å endre enheter endrer ingen størrelser. Det endrer hvordan målestokker leses på ark og i plott, og hvilke målestokker som tilbys. En tegning åpnet fra en DWG eller DXF beholder enhetene som er lagret i filen. Seksjonen {{ui:Tegning}} i venstre panel viser dem.

En tegning med {{ui:Uten enhet}} behandles som om den er i papirets enhet: millimeter på ISO-papir, tommer på US-papir.

## Fot og tommer, og brøker

Hvordan lengder **skrives og skrives inn**, er en egen innstilling, lengdeformatet. Den endrer ingen geometri, bare hvordan tall ser ut og hva du kan skrive.

1. Trykk {{key:Esc}} slik at ingenting er valgt, på fanen {{ui:Modell}}.
2. I {{ui:Gjeldende innstillinger}} velger du {{ui:Lengdeformat}}: {{ui:Desimal}} (`150.5`), {{ui:Arkitekt}} (`12'-6 1/2"`), {{ui:Ingeniør}} (`12'-6.5"`), {{ui:Brøk}} (`150 1/2`) eller {{ui:Vitenskapelig}} (`1.505E+02`).
3. Velg {{ui:Presisjon}}: desimaler, eller den minste brøken (1/16 er det vanlige valget for arkitekt).

Eller skriv {{cmd:UNITS}} (`UN`) og svar på de to spørsmålene.

Med {{ui:Arkitekt}} eller {{ui:Ingeniør}} er én tegningsenhet én tomme, som i AutoCAD. Sett også {{ui:Enheter}} til {{ui:Tommer}}. Du kan da skrive lengder i fot og tommer overalt en lengde etterspørres, og i boksene i {{ui:Egenskaper}}:

| Du skriver | Betyr |
|---|---|
| `12'6"` eller `12'-6"` | 12 fot 6 tommer (150) |
| `12'6-1/2"` | 12 fot 6½ tommer. Bruk en bindestrek før brøken: {{key:Space}} er {{key:Enter}} på kommandolinjen. |
| `12'` | 12 fot |
| `6"` eller `6` | 6 tommer: et bart tall er tommer |
| `1/2`, `6-1/2` | brøker virker i alle formater |

Punkter tar de samme lengdene: `@12'6",0` eller `@10'<90`. Vinkler forblir i grader.

Formatet vises i historikken ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: areal som kvadrattommer og kvadratfot), i {{ui:Egenskaper}}, i koordinatene på statuslinjen, og i **nye mål**. Ark beholder papirenheten sin (millimeter eller tommer) som desimaler.

:::note
Lengdeformatet lagres i DWG- og DXF-filer, og hvert mål beholder sitt eget. En lagret tegning åpnes igjen slik du forlot den.
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

En målestokk `1:n` betyr at én enhet på papiret viser n av samme enhet i modellen, så 1:100 viser 1 m bygning som 10 mm papir. CadCraft regner det ut fra tegningsenhetene og papirenheten.

**Metriske målestokker**, tilbys for hver tegning: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arkitektmålestokker**, tilbys når enhetene er tommer eller fot: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Ingeniørmålestokker**, tilbys når enhetene er tommer eller fot: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Egne målestokker.** Skriv `SCALELISTEDIT` (eller `SCALELIST`) for å legge til en målestokk av egen, for eksempel 1:75 eller en områdemålestokk på 2 papir : 300 tegning. `Add` spør etter et navn, deretter papirenhetene og tegningsenhetene (et navn som `1:75` tilbyr sine egne tall; trykk {{key:Enter}} for å ta dem). `Edit`, `Delete`, `List` og `Reset` virker på samme liste. `Reset` går tilbake til standardlisten. Dine målestokker vises etter standardene i visningsområdets målestokkliste i {{ui:Egenskaper}} og i dialogen {{ui:Plott til PDF}}. Et visningsområde i den målestokken leses med sitt navn, og de lagres i tegningen (DWG og DXF 2000) som tegningens målestokkliste. En tegning åpnet fra et annet program tar med sin liste. Målestokker den har som passer en standard, vises ikke to ganger.

Når et visningsområde rettes med {{ui:Vis hele modellen}} eller {{ui:Velg et vindu på modellen…}}, velger CadCraft den største standardmålestokken som passer. {{ui:Tilpass hele modellen}} setter i stedet en eksakt målestokk, som leses som et vanlig forhold.

## Størrelser på papir og i modellen

Tekst- og målstørrelser er i enhetene til rommet du tegner i.

| Du vil ha på papiret | Tegnet på et ark | Tegnet i modellen 1:50 (mm-tegning) | Tegnet i modellen 1/4" = 1'-0" (tomme-tegning) |
|---|---|---|---|
| 2.5 mm tekst | 2.5 | 125 | — |
| 3/32" tekst | 0.09375 | — | 4.5 |

For mål: hold størrelsene som papirstørrelser, og sett samlet skala ({{cmd:DIMSCALE}}) til plottskalaen: 50 for 1:50, 48 for 1/4" = 1'-0". Se [Still inn målestørrelser](topic:dimension-settings).

## Annoter etter målestokk

Tegn modellen i full størrelse, og la CadCraft gjøre regnestykkene over for deg.

1. Velg teksten eller målene som skal beholde sin størrelse på papiret. Kryss av for {{ui:Annoterende}} i {{ui:Egenskaper}}. {{ui:Størrelse på papir}} viser da for eksempel `2.5 mm at 1:50`.
2. Skriv {{cmd:ANNOSCALE}} og målestokken tegningen skal skrives ut i, for eksempel `1:100`.

Hver annoterende tekst og hvert annoterende mål endres slik at det skrives ut i samme størrelse i den nye målestokken: 2.5 mm tekst er 125 høy i en millimeter-tegning ved 1:50, og 250 høy ved 1:100. En avsnittsbredde endres med den. Et måls tekst, pilspisser og mellomrom endres sammen (dens samlede skala). Det er ett angretrinn, og objekter som ikke er annoterende, blir aldri endret.

Innstillingen lagres i DWG og DXF. Andre programmer leser det annoterende flagget, og CadCraft beholder også målestokken hvert objekt er dimensjonert for.

Hvis kontoret ditt setter papirhøyder i tilleggsprogrammet Default Policies (Innstillinger › Globalt › Default Policies › Annotation sizes on paper), setter {{cmd:ANNOSCALE}} også høyden ny tekst starter med til kontorets høyde for merknader i den målestokken. Se [Default Policies](topic:default-policies).

### Ett objekt i flere målestokker

Et ark viser ofte samme plan i 1:100 og en del av den i 1:50. Gi merknadene og målene begge målestokkene, så viser hvert visningsområde dem i sin papirstørrelse:

1. Velg de annoterende tekstene og målene, og skriv `OBJECTSCALE`.
2. Velg `Add` og skriv målestokken, for eksempel `1:50`. (`Current scale` legger til tegningens merkingsmålestokk. `List` viser hva hvert objekt beholder. `Delete` fjerner en.)

Et visningsområde hvis målestokk står i et objekts liste, viser det i størrelsen for den målestokken: 2.5 mm tekst tegnes 250 høy gjennom et 1:100-visningsområde og 125 høy gjennom et 1:50, både på skjermen og i plottet. Objektet står der det er; bare størrelsen er forskjellig. I et visningsområde med en målestokk som ikke står i et objekts liste, vises objektet i størrelsen det har, til du skriver `ANNOALLVISIBLE` og velger `OFF`. Da utelates det der. {{cmd:ANNOSCALE}} endrer størrelsen på objektene som lister den nye målestokken, og lar de andre være som de er.

Listene lagres i DWG og DXF som CadCrafts egne data. Et annet program ser hvert objekt som annoterende, i den ene målestokken det er dimensjonert for. Bryteren ANNOALLVISIBLE lagres ikke i filen.

## Linjevekter og linjetyper

Et lag, eller et objekt, kan ha en **linjevekt** (0.05 til 2.11 mm) og en **linjetype** (stiplet, skjult, senter, fantom, prikket …). Sett dem i høyre panel. Uten noe valgt er {{ui:Linjetype}} og {{ui:Linjevekt}} under {{ui:Gjeldende innstillinger}} det nye objekter får ({{ui:EtterLayer}} for å følge laget deres). De to under {{ui:Layer …}} er det aktive lagets egne. Med objekter valgt endrer de samme to radene og {{ui:Linjetypeskala}} disse objektene. Kommandoene er {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) og {{cmd:LTSCALE}} (`LTS`).

Linjetyper vises på skjermen og i plott. Strekene deres er i tegningsenheter: en metrisk tegning bruker ISO-størrelsene (DASHED: 12.7 mm streker), en tommetegning de tomme-størrelsene (0.5"). Ser strekene for små eller for store ut, endre tegningens {{ui:Linjetypeskala}} (LTSCALE): hver strek og hvert mellomrom ganges med den. Et objekts egen skala ganges med den igjen. Et mønster som er for fint til å sees i det hele tatt, tegnes som en heltrukket linje.

Linjevekter skrives ut i plott, i mm på papiret uansett målestokk. Linjer med linjevekten {{ui:Standard}} bruker pennbredden valgt i dialogen {{ui:Plott til PDF}} (0.13 til 0.70 mm; 0.25 mm til å begynne med). En linjevekt på 0 skrives ut som den tynneste linjen. På skjermen er hver linje én piksel bred til du trykker {{ui:LWT}} i statuslinjen (eller skriver {{cmd:LWDISPLAY}}). Da tegnes en linjevekt over 0.25 mm bredere (0.5 mm = 2 piksler) i modellen, og i sin virkelige bredde på papiret på et ark. Valget lagres i denne nettleseren.

## Kontorstandarden

Et kontor kan beholde sine papirtekstlengder, lag, felt i tegningshodet og maler i én post, kontorstandarden. CadCraft leser den i denne rekkefølgen: tegningens egen post (satt med {{cmd:OFFICESTANDARD}} › `Import`, lagret i filen), teamets felles standard, og deretter dine Default Policies. Annoterende tekst og mål tar sin papirhøyde fra den i annoteringsmålestokken. En tom standard endrer ingenting. {{cmd:OFFICESTANDARD}} › `Layers` legger til kontorlagene en tegning mangler.
