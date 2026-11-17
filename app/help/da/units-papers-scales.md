---
title: Enheder, papirstørrelser og skalaer
summary: Hvad tegningsenheder betyder i CadCraft, papirstørrelserne til ark og plots, alle standardskalaer, og hvordan tekst- og målsætningsstørrelser hænger sammen med plotskalaen.
keywords: enheder, millimeter, tommer, fod, fod og tommer, arkitektonisk, ingeniør, brøk, lunits, længdeformat, præcision, meter, papirstørrelse, a3, a1, arch d, ansi, tabloid, letter, skala, 1:100, 1/4 tomme, arkitektonisk skala, ingeniørskala, insunits
from: 8346236a
---

## Tegningsenheder

Du tegner i fuld størrelse, i tegningsenheder. Hvad én enhed står for, er tegningens indstilling **Enheder**:

1. Tryk {{key:Esc}}, så intet er valgt, på fanen {{ui:Model}}.
2. Under {{ui:Aktuelle indstillinger}} vælger du {{ui:Enheder}}: {{ui:Uden enheder}}, {{ui:Millimeter}}, {{ui:Centimeter}}, {{ui:Meter}}, {{ui:Tommer}} eller {{ui:Fod}}.

Målsætninger kan skrive deres længder i millimeter, centimeter, meter eller kilometer, uanset tegningsenheden. Se [Målsætninger i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Ændring af enheder ændrer ikke størrelsen på noget. Den ændrer, hvordan skalaer læses på ark og i plots, og hvilke skalaer der tilbydes. En tegning, åbnet fra en DWG eller DXF, beholder de enheder, der er gemt i filen. Sektionen {{ui:Tegning}} i venstre panel viser dem.

En tegning på {{ui:Uden enheder}} behandles som værende i papirets enhed: millimeter på ISO-papir, tommer på US-papir.

## Fod og tommer, og brøker

Hvordan længder **skrives og indtastes**, er en separat indstilling: længdeformatet. Det ændrer ingen geometri, kun hvordan tal ser ud, og hvad du kan skrive.

1. Tryk {{key:Esc}}, så intet er valgt, på fanen {{ui:Model}}.
2. Under {{ui:Aktuelle indstillinger}} vælger du {{ui:Længdeformat}}: {{ui:Decimal}} (`150.5`), {{ui:Arkitekt}} (`12'-6 1/2"`), {{ui:Ingeniør}} (`12'-6.5"`), {{ui:Brøk}} (`150 1/2`) eller {{ui:Videnskabelig}} (`1.505E+02`).
3. Vælg {{ui:Præcision}}: decimaler, eller den mindste brøk (1/16 er det sædvanlige valg for arkitektonisk).

Eller skriv {{cmd:UNITS}} (`UN`) og svar på dens to spørgsmål.

Med {{ui:Arkitekt}} eller {{ui:Ingeniør}} er én tegnenhed én tomme, som i AutoCAD. Sæt derfor {{ui:Enheder}} til {{ui:Tommer}} også. Du kan så skrive længder i fod og tommer, hvor som helst en længde spørges efter, og i felterne i {{ui:Egenskaber}}:

| Du skriver | Betyder |
|---|---|
| `12'6"` eller `12'-6"` | 12 fod 6 tommer (150) |
| `12'6-1/2"` | 12 fod 6½ tomme. Brug en bindestreg før brøken: {{key:Space}} er {{key:Enter}} på kommandolinjen. |
| `12'` | 12 fod |
| `6"` eller `6` | 6 tommer: et almindeligt tal er tommer |
| `1/2`, `6-1/2` | brøker virker i ethvert format |

Punkter tager de samme længder: `@12'6",0` eller `@10'<90`. Vinkler forbliver i grader.

Formatet vises i historikken ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: arealer som kvadrattommer og kvadratfod), i {{ui:Egenskaber}}, i koordinaterne på statuslinjen og i **nye målsætninger**. Ark beholder deres papirenheder (millimeter eller tommer) som decimaler.

:::note
Længdeformatet gemmes i DWG- og DXF-filer, og hver målsætning beholder sit eget. En gemt tegning åbnes igen, som du forlod den.
:::

## Papirstørrelser

Ark og modelplots bruger disse størrelser, i begge retninger:

| Papir | Størrelse | Enhed på arket |
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

Nye ark starter på ISO A3 for metriske tegninger og tegninger uden enheder, og på Tabloid for tegninger i tommer eller fod. Modelplots starter på ISO A4 eller Letter på samme måde og husker derefter dit sidste valg. Ark fra åbnede filer beholder deres egen størrelse, vist som »Brugerdefineret«, når den ikke er en af disse.

## Skalaer

En skala `1:n` betyder, at én enhed på papiret viser n af samme enhed i modellen. Så 1:100 viser 1 m bygning som 10 mm papir. CadCraft regner det ud fra tegningsenhederne og papirets enhed.

**Metriske skalaer**, tilbudt for enhver tegning: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arkitektoniske skalaer**, tilbudt når enhederne er tommer eller fod: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Ingeniørskalaer**, tilbudt når enhederne er tommer eller fod: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Dine egne skalaer.** Skriv `SCALELISTEDIT` (eller `SCALELIST`) for at tilføje en skala efter eget valg, såsom 1:75 eller en stedsskala på 2 papir : 300 tegning. `Add` spørger efter et navn og derefter papirenhederne og tegningsenhederne (et navn som `1:75` tilbyder sine egne tal; tryk {{key:Enter}} for at tage dem). `Edit`, `Delete`, `List` og `Reset` virker på samme liste. `Reset` går tilbage til standardlisten. Dine skalaer vises efter standardskalaerne i viewport-skalalisten i Egenskaber og i dialogen {{ui:Plot til PDF}}. En viewport i den skala vises med sit navn. Skalaerne gemmes i tegningen (DWG og DXF 2000) som tegningens skalaliste. En tegning, åbnet fra et andet program, medbringer sin liste. Skalaer, den har, der svarer til en standard, vises ikke to gange.

Når en viewport rettes med {{ui:Vis hele modellen}} eller {{ui:Vælg et vindue på modellen…}}, vælger CadCraft den største standardskala, der passer. {{ui:Tilpas hele modellen}} sætter i stedet en nøjagtig skala, som vises som et almindeligt forhold.

## Størrelser på papiret og i modellen

Tekst- og målsætningsstørrelser er i enhederne for det rum, du tegner i.

| Du vil have på papiret | Tegnet på et ark | Tegnet i modellen i 1:50 (mm-tegning) | Tegnet i modellen i 1/4" = 1'-0" (tommetegning) |
|---|---|---|---|
| 2.5 mm tekst | 2.5 | 125 | — |
| 3/32" tekst | 0.09375 | — | 4.5 |

For målsætninger holder du størrelserne som papirstørrelser og sætter den samlede skala ({{cmd:DIMSCALE}}) til plotskalaen: 50 for 1:50, 48 for 1/4" = 1'-0". Se [Indstil målsætningsstørrelser](topic:dimension-settings).

## Annotér efter skala

Tegn modellen i fuld størrelse, og lad CadCraft regne sum'erne ovenfor for dig.

1. Vælg teksten eller de målsætninger, der skal beholde deres størrelse på papiret. I Egenskaber sætter du flueben i {{ui:Annotativ}}. {{ui:Størrelse på papir}} viser så for eksempel `2.5 mm ved 1:50`.
2. Skriv {{cmd:ANNOSCALE}} og den skala, tegningen skal udskrives i, for eksempel `1:100`.

Hver annotativ tekst og målsætning ændres i størrelse, så den udskrives i samme størrelse ved den nye skala. 2.5 mm tekst er 125 høj i en millimeter-tegning ved 1:50 og 250 høj ved 1:100. En afsnits bredde ændrer sig med det. En målsætnings tekst, pile og mellemrum ændrer sig sammen (dens samlede skala). Det er ét trin i fortryd, og objekter, der ikke er annotative, ændres aldrig.

Indstillingen gemmes i DWG og DXF. Andre programmer læser det annotative flag, og CadCraft beholder også den skala, hvert objekt er dimensioneret til.

Hvis dit kontor sætter papirhøjder i tilvalget Default Policies (Indstillinger › Global › Default Policies › Annotation sizes on paper), sætter {{cmd:ANNOSCALE}} også den højde, ny tekst starter med, til kontorets højde for noter i den skala. Se [Default Policies](topic:default-policies).

### Ét objekt i flere skalaer

Et ark viser ofte den samme plan i 1:100 og en del af den i 1:50. Giv noterne og målsætningerne begge skalaer, så viser hver viewport dem i deres papirstørrelse:

1. Vælg de annotative tekster og målsætninger, og skriv `OBJECTSCALE`.
2. Vælg `Add` og skriv skalaen, for eksempel `1:50`. (`Current scale` tilføjer tegningens annoteringsskala. `List` viser, hvad hvert objekt beholder. `Delete` fjerner en.)

En viewport, hvis skala står på et objekts liste, viser det i størrelsen for den skala: 2.5 mm tekst tegnes 250 høj gennem en 1:100-viewport og 125 høj gennem en 1:50, både på skærmen og i plottet. Objektet bliver, hvor det er. Kun dets størrelse er forskellig. I en viewport i en skala, der ikke står på listen, vises objektet i den størrelse, det har, indtil du skriver `ANNOALLVISIBLE` og vælger `OFF`. Så udelades det dér. {{cmd:ANNOSCALE}} ændrer størrelsen på de objekter, der lister den nye skala, og lader de andre være.

Listerne gemmes i DWG og DXF som CadCraft's egne data. Et andet program ser hvert objekt som annotativt, i den ene skala det er dimensioneret til. Omskifteren ANNOALLVISIBLE gemmes ikke i filen.

## Linjetykkelser og linjetyper

Et lag eller et objekt kan have en **linjetykkelse** (0.05 til 2.11 mm) og en **linjetype** (stiplet, skjult, center, phantom, prik …). Du sætter dem i højre panel. Med intet valgt er {{ui:Linjetype}} og {{ui:Linjetykkelse}} under {{ui:Aktuelle indstillinger}} det, nye objekter får ({{ui:By layer}} for at følge deres lag). De to under {{ui:Lag …}} er det aktuelle lags egne. Med objekter valgt ændrer de samme to rækker og {{ui:Linjetypeskala}} disse objekter. Kommandoerne er {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) og {{cmd:LTSCALE}} (`LTS`).

Linjetyper vises på skærmen og i plots. Deres streger er i tegnenheder: en metrisk tegning bruger ISO-størrelserne (DASHED: 12.7 mm streger), og en tomme-tegning bruger tommestørrelserne (0.5"). Hvis stregerne ser for små eller for store ud, ændrer du tegningens {{ui:Linjetypeskala}} (LTSCALE). Hver streg og hvert mellemrum ganges med den, og et objekts egen skala ganges igen. Et mønster for fint til at ses overhovedet tegnes som en massiv linje.

Linjetykkelser udskrives i plots, i mm på papiret, uanset skala. Linjer med linjetykkelsen {{ui:Standard}} bruger pennebredden, der er valgt i dialogen {{ui:Plot til PDF}} (0.13 til 0.70 mm, 0.25 mm til at starte med). En linjetykkelse på 0 udskrives som den tyndeste linje. På skærmen er hver linje én pixel bred, indtil du trykker på {{ui:LWT}} i statuslinjen (eller skriver {{cmd:LWDISPLAY}}). Så tegnes en linjetykkelse over 0.25 mm bredere (0.5 mm = 2 pixels) i modellen, og i sin sande bredde på papiret på et ark. Valget huskes i denne browser.
