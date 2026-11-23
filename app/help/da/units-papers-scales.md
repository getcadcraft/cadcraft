---
title: Enheder, papirstørrelser og skalaer
summary: Hvad tegningsenheder betyder i CadCraft, papirstørrelserne til ark og plots, alle standardskalaer, og hvordan tekst- og målsætningsstørrelser hænger sammen med plotskalaen.
keywords: enheder, millimeter, tommer, fod, fod og tommer, arkitekt, ingeniør, brøk, brøker, lunits, længdeformat, præcision, meter, papirstørrelse, a3, a1, arch d, ansi, tabloid, letter, skala, 1:100, 1/4 tomme, arkitektskala, ingeniørskala, insunits
from: 7dc9b62e
---

## Tegningsenheder

Du tegner i fuld størrelse, i tegningsenheder. Hvad én enhed står for, er tegningens indstilling **Enheder**:

1. Tryk {{key:Esc}}, så intet er valgt, på fanen {{ui:Model}}.
2. I {{ui:Aktuelle indstillinger}} vælger du {{ui:Enheder}}: {{ui:Uden enheder}}, {{ui:Millimeter}}, {{ui:Centimeter}}, {{ui:Meter}}, {{ui:Tommer}} eller {{ui:Fod}}.

Målsætninger kan skrive deres længder i millimeter, centimeter, meter eller kilometer, uanset tegningens enhed: se [Målsætninger i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

Ændring af enheder ændrer ikke størrelsen på noget. Den ændrer, hvordan skalaer læses på ark og i plots, og hvilke skalaer der tilbydes. En tegning åbnet fra en DWG eller DXF beholder de enheder, der er gemt i filen; afsnittet {{ui:Tegning}} i venstre panel viser dem.

En tegning med {{ui:Uden enheder}} behandles som om den er i papirets enhed: millimeter på ISO-papir, tommer på amerikansk papir.

## Fod og tommer, og brøker

Hvordan længder **skrives og indtastes**, er en separat indstilling, længdeformatet. Det ændrer ingen geometri, kun hvordan tal ser ud, og hvad du kan skrive.

1. Tryk {{key:Esc}}, så intet er valgt, på fanen {{ui:Model}}.
2. I {{ui:Aktuelle indstillinger}} vælger du {{ui:Længdeformat}}: {{ui:Decimal}} (`150.5`), {{ui:Arkitekt}} (`12'-6 1/2"`), {{ui:Ingeniør}} (`12'-6.5"`), {{ui:Brøk}} (`150 1/2`) eller {{ui:Videnskabelig}} (`1.505E+02`).
3. Vælg {{ui:Præcision}}: decimaler, eller den mindste brøk (1/16 er det sædvanlige valg for arkitekt).

Eller skriv {{cmd:UNITS}} (`UN`) og svar dets to spørgsmål.

Med {{ui:Arkitekt}} eller {{ui:Ingeniør}} er én tegningsenhed én tomme, som i AutoCAD: sæt {{ui:Enheder}} til {{ui:Tommer}} også. Du kan så skrive længder i fod og tommer alle steder, hvor en længde spørges, og i boksene i {{ui:Egenskaber}}:

| Du skriver | Betyder |
|---|---|
| `12'6"` eller `12'-6"` | 12 fod 6 tommer (150) |
| `12'6-1/2"` | 12 fod 6½ tomme. Brug en bindestreg før brøken: {{key:Space}} er {{key:Enter}} på kommandolinjen. |
| `12'` | 12 fod |
| `6"` eller `6` | 6 tommer: et almindeligt tal er tommer |
| `1/2`, `6-1/2` | brøker virker i ethvert format |

Punkter tager de samme længder: `@12'6",0` eller `@10'<90`. Vinkler forbliver i grader.

Formatet vises i historikken ({{cmd:DIST}}, {{cmd:ID}}, {{cmd:LIST}}, {{cmd:AREA}}: arealer som kvadrattommer og kvadratfod), i {{ui:Egenskaber}}, i koordinaterne i statuslinjen og i **nye målsætninger**. Ark beholder deres papirenheder (millimeter eller tommer) som decimaler.

:::note
Længdeformatet gemmes i DWG- og DXF-filer, og hver målsætning beholder sit eget: en gemt tegning åbner igen, som du forlod den.
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

Nye ark starter på ISO A3 for metriske og enhedsløse tegninger, og på Tabloid for tegninger i tommer eller fod. Modelplots starter på ISO A4 eller Letter på samme måde og husker så dit sidste valg. Ark fra åbnede filer beholder deres egen størrelse, vist som Brugerdefineret, når den ikke er en af disse.

## Skalaer

En skala `1:n` betyder, at én enhed på papir viser n af samme enhed i modellen, så 1:100 viser 1 m bygning som 10 mm papir. CadCraft regner det ud fra tegningens enheder og papirets enhed.

**Metriske skalaer**, tilbudt for hver tegning: 10:1, 5:1, 2:1, 1:1, 1:2, 1:5, 1:10, 1:20, 1:25, 1:50, 1:100, 1:200, 1:250, 1:500, 1:1000, 1:1250, 1:2000, 1:2500, 1:5000, 1:10000.

**Arkitektskalaer**, tilbudt når enhederne er tommer eller fod: 3" = 1'-0", 1-1/2" = 1'-0", 1" = 1'-0", 3/4" = 1'-0", 1/2" = 1'-0", 3/8" = 1'-0", 1/4" = 1'-0", 3/16" = 1'-0", 1/8" = 1'-0", 3/32" = 1'-0", 1/16" = 1'-0".

**Ingeniørskalaer**, tilbudt når enhederne er tommer eller fod: 1" = 10', 1" = 20', 1" = 30', 1" = 40', 1" = 50', 1" = 100'.

**Dine egne skalaer.** Skriv `SCALELISTEDIT` (eller `SCALELIST`) for at tilføje en skala af din egen, såsom 1:75 eller en stedskala på 2 papir : 300 tegning. `Add` spørger efter et navn, derefter papirenhederne og tegningsenhederne (et navn som `1:75` tilbyder sine egne tal; tryk {{key:Enter}} for at tage dem). `Edit`, `Delete`, `List` og `Reset` virker på den samme liste; `Reset` går tilbage til standardlisten. Dine skalaer vises efter standarderne i viewport-skalalisten under {{ui:Egenskaber}} og i dialogen {{ui:Plot til PDF}}; en viewport i den skala læses med sit navn, og de gemmes i tegningen (DWG og DXF 2000) som tegningens skalaliste. En tegning åbnet fra et andet program medbringer sin liste; skalaer den har, der matcher en standard, vises ikke to gange.

Når en viewport rettes med {{ui:Vis hele modellen}} eller {{ui:Vælg et vindue på modellen…}}, vælger CadCraft den største standardskala, der passer. {{ui:Tilpas hele modellen}} sætter i stedet en præcis skala, som læses som et simpelt forhold.

## Størrelser på papir og i modellen

Tekst- og målsætningsstørrelser er i enhederne for det rum, du tegner i.

| Du vil have på papir | Tegnet på et ark | Tegnet i modellen i 1:50 (mm-tegning) | Tegnet i modellen i 1/4" = 1'-0" (tomme-tegning) |
|---|---|---|---|
| 2.5 mm tekst | 2.5 | 125 | — |
| 3/32" tekst | 0.09375 | — | 4.5 |

For målsætninger holder du størrelserne som papirstørrelser og sætter den samlede skala ({{cmd:DIMSCALE}}) til plotskalaen: 50 for 1:50, 48 for 1/4" = 1'-0". Se [Angiv målsætningsstørrelser](topic:dimension-settings).

## Annotér efter skala

Tegn modellen i fuld størrelse, og lad CadCraft regne efter for dig.

1. Vælg teksten eller målsætningerne, der skal beholde deres størrelse på papir. I {{ui:Egenskaber}} sæt flueben i {{ui:Annotativ}}. {{ui:Størrelse på papir}} viser så for eksempel `2.5 mm at 1:50`.
2. Skriv {{cmd:ANNOSCALE}} og den skala, tegningen skal udskrives i, for eksempel `1:100`.

Hver annotativ tekst og målsætning ændres i størrelse, så den udskrives i samme størrelse i den nye skala: 2.5 mm tekst er 125 høj i en millimeter-tegning i 1:50 og 250 høj i 1:100. En afsnits bredde ændres med den; en målsætnings tekst, pile og mellemrum ændres sammen (dens samlede skala). Det er ét fortrydelsestrin, og objekter der ikke er annotative, ændres aldrig.

Indstillingen gemmes i DWG og DXF: andre programmer læser det annotative flag, og CadCraft beholder også den skala, hvert objekt er dimensioneret til.

Hvis dit kontor angiver papirhøjder i tilføjelsen Standardpolitikker (Indstillinger › Globalt › Standardpolitikker › Annoteringsstørrelser på papir), sætter {{cmd:ANNOSCALE}} også højden, nye tekster starter med, til kontorets højde for noter i den skala. Se [Standardpolitikker](topic:default-policies).

### Ét objekt i flere skalaer

Et ark viser ofte samme plan i 1:100 og en del af det i 1:50. Giv noterne og målsætningerne begge skalaer, og hver viewport viser dem i deres papirstørrelse:

1. Vælg den annotative tekst og målsætningerne, og skriv `OBJECTSCALE`.
2. Vælg `Add` og skriv skalaen, for eksempel `1:50`. (`Current scale` tilføjer tegningens annoteringsskala; `List` viser, hvad hvert objekt beholder; `Delete` fjerner en.)

En viewport, hvis skala er på et objekts liste, viser det i størrelsen for den skala: 2.5 mm tekst tegnes 250 høj gennem en 1:100-viewport og 125 høj gennem en 1:50, på skærmen og i plottet. Objektet bliver, hvor det er; kun dets størrelse er forskellig. I en viewport i en skala, der ikke er på et objekts liste, vises objektet i den størrelse, det har, indtil du skriver `ANNOALLVISIBLE` og vælger `OFF`: så udelades det der. {{cmd:ANNOSCALE}} ændrer størrelsen på de objekter, der lister den nye skala, og lader de andre være, som de er.

Listerne gemmes i DWG og DXF som CadCrafts egne data. Et andet program ser hvert objekt som annotativt, i den ene skala det er dimensioneret til. Omskifteren ANNOALLVISIBLE gemmes ikke i filen.

## Linjetykkelser og linjetyper

Et lag eller et objekt kan have en **linjetykkelse** (0.05 til 2.11 mm) og en **linjetype** (stiplet, skjult, center, phantom, prik …). Angiv dem i højre panel: når intet er valgt, er {{ui:Linjetype}} og {{ui:Linjetykkelse}} under {{ui:Aktuelle indstillinger}} det, nye objekter får ({{ui:ByLayer}} for at følge deres lag), og de to under {{ui:Lag …}} er det aktuelle lags egne. Med objekter valgt ændrer de samme to rækker og {{ui:Linjetypeskala}} disse objekter. Kommandoerne er {{cmd:LINETYPE}} (`LT`), {{cmd:LWEIGHT}} (`LW`) og {{cmd:LTSCALE}} (`LTS`).

Linjetyper vises på skærmen og i plots. Deres streger er i tegningsenheder: en metrisk tegning bruger ISO-størrelserne (DASHED: 12.7 mm streger), en tomme-tegning de tomme-størrelser (0.5"). Hvis stregerne ser for små eller for store ud, ændr tegningens {{ui:Linjetypeskala}} (LTSCALE): hver streg og mellemrum ganges med den; et objekts egen skala ganger den igen. Et mønster for fint til at ses overhovedet, tegnes som en optrukket linje.

Linjetykkelser udskrives i plots, i mm på papiret uanset skala. Linjer med {{ui:Standard}}-linjetykkelse bruger pennebredden valgt i dialogen {{ui:Plot til PDF}} (0.13 til 0.70 mm; 0.25 mm til at starte med); en linjetykkelse på 0 udskrives som den tyndeste linje. På skærmen er hver linje én pixel bred, indtil du trykker på {{ui:LWT}} i statuslinjen (eller skriver {{cmd:LWDISPLAY}}): så tegnes en linjetykkelse over 0.25 mm bredere (0.5 mm = 2 pixels) i modellen, og i sin rigtige bredde på papiret på et ark. Valget gemmes i denne browser.

## Kontorstandarden

Et kontor kan holde sine papirteksthøjder, lag, felter i tegningshovedet og skabeloner i én post, kontorstandarden. CadCraft læser den i denne rækkefølge: tegningens egen post (sat med {{cmd:OFFICESTANDARD}} › `Import`, gemt i filen), dit teams fælles standard og derefter dine Standardpolitikker. Annotativ tekst og målsætninger tager deres papirhøjde derfra i annoteringsskalaen. En tom standard ændrer intet. {{cmd:OFFICESTANDARD}} › `Layers` tilføjer de kontorlag, en tegning mangler.
