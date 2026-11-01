---
title: CadCraft-skjermen
summary: En omvisning i hver linje, hvert panel og hver fane i tegneappen, med navnet den har på skjermen.
keywords: skjerm, grensesnitt, verktøylinje, bånd, paneler, kommandolinje, statuslinje, faner, layoutfaner, egenskaper, layerpanel, omvisning
from: b5a33388
---

Skjermen har sju deler. Ovenfra og ned: appfeltet, verktøylinjen, tegneområdet med et panel på hver side, fanene under tegningen, kommandolinjen og statuslinjen.

## Appfeltet

Den tynne linjen helt øverst tilhører nettstedet, ikke tegningen. Den viser CadCraft-merket, appnavnet, hvilken versjon du kjører, en lenke til appens side, en knapp {{ui:Hjelp}} (eller {{key:F1}}), en knapp {{ui:Lagre for frakoblet bruk}}, en knapp {{ui:Fullskjerm}} og to temaknapper, {{ui:Papir}} og {{ui:Modell}}.

Knappen {{ui:Innstillinger}} (tannhjul) har CadCrafts egne innstillinger og de som alle apper deler: se [CadCraft-innstillinger](topic:settings).

{{ui:Lagre for frakoblet bruk}} beholder en kopi av CadCraft, med DWG-leseren, i denne nettleseren, slik at den åpnes uten forbindelse. Etiketten viser tilstanden: «Lagrer N av M», «Klar frakoblet», «Kunne ikke lagre» eller «Frakoblet bruk er ikke tilgjengelig». Se [Arbeide frakoblet](common:offline).

:::note
Knappene {{ui:Papir}} og {{ui:Modell}} i appfeltet endrer bare fargene på skjermen: {{ui:Papir}} er et lyst tema, {{ui:Modell}} et mørkt. De har ingenting å gjøre med fanen {{ui:Modell}} under tegningen, som bytter mellom tegningen og arkene.
:::

Knappen {{ui:Fullskjerm}}, eller {{key:Ctrl+Shift+F}} (Control-tasten på alle datamaskiner, også Mac), bytter mellom tre skjermmoduser: normal, fullskjerm og fullskjerm med linjene skjult. Med linjene skjult flytter du pekeren til toppkanten av skjermen for å få dem tilbake.

## Verktøylinjen

Under appfeltet står verktøylinjen. Hver knapp kjører en kommando, akkurat som om du hadde skrevet den, så kommandolinjen stiller de samme spørsmålene begge veier. Hold pekeren over en knapp for å se kommandoaliaset. Gruppene er:

| Gruppe | Knapper |
|---|---|
| Fil | {{ui:Ny}}, {{ui:Åpne}}, {{ui:Lagre}}, {{ui:Lagre som}}, {{ui:Plott}} |
| Tegn | {{ui:Linje}}, {{ui:Polylinje}}, {{ui:Sirkel}}, {{ui:Bue}}, {{ui:Rektangel}}, {{ui:Mangekant}}, {{ui:Ellipse}}, {{ui:Tekst}}, {{ui:Avsnitt}}, {{ui:Skravur}}, og {{ui:Mer}}: {{ui:Punkt}}, {{ui:Konstruksjonslinje}} og {{ui:Stråle}} (se [Konstruksjonslinjer og stråler](topic:construction-lines)) |
| Endre | {{ui:Flytt}}, {{ui:Kopier}}, {{ui:Roter}}, {{ui:Skaler}}, {{ui:Speil}}, {{ui:Strekk}}, {{ui:Forskyv}}, {{ui:Trim}}, {{ui:Forleng}}, {{ui:Avrund}}, {{ui:Fas}}, {{ui:Eksploder}}, {{ui:Slett}}, og {{ui:Mer}}: {{ui:Matrise}}, {{ui:Slå sammen}}, {{ui:Match egenskaper}}, {{ui:Bryt}} og {{ui:Forleng}} |
| Merknad | {{ui:Lineært}}, {{ui:Innrettet}}, {{ui:Vinkel}}, {{ui:Radius}}, {{ui:Diameter}} (mål), {{ui:Hjelpelinje}} (flerhjelpelinje), og {{ui:Mer}}: {{ui:Fortsett måltilsetting}}, {{ui:Grunnlinjemål}} og {{ui:Revisjonssky}} |
| Parametrisk | {{ui:Auto}}, {{ui:Betingelse}}, {{ui:Måltilsetting}}, {{ui:Parametere}}, og {{ui:Mer}} med hver betingelse (se [Sett betingelser på en tegning](topic:constraints)) |
| Blokker | {{ui:Lag}}, {{ui:Sett inn}}, {{ui:Bibliotek}}, og {{ui:Mer}}: {{ui:Rediger blokk}} og {{ui:Definer attributt}} |
| Ark | {{ui:Nytt ark}}, {{ui:Visningsområde}} |
| Rediger | {{ui:Angre}}, {{ui:Gjør om}}, {{ui:Kopier}} (til utklippstavlen), {{ui:Lim inn}}, og {{ui:Mer}}: en meny med {{ui:Klipp ut}}, {{ui:Kopier}}, {{ui:Lim inn}}, {{ui:Lim inn på samme sted}}, {{ui:Dupliser og flytt}}, {{ui:Slett}}, {{ui:Velg alle}}, {{ui:Fjern utvalg}}, {{ui:Hurtigvalg}}, {{ui:Velg lignende}} og {{ui:Finn og erstatt}}, hver med sin tast |
| Visning | {{ui:Utstrekning}}, {{ui:Vindu}}, {{ui:Forrige}}, og {{ui:Mer}}: {{ui:Mål avstand}}, {{ui:Areal}}, {{ui:Mål (radius, vinkel …)}}, og delt skjerm: {{ui:Del side ved side}}, {{ui:Del over hverandre}}, {{ui:Fire ruter}}, {{ui:Én rute}} (se [Del skjermen](topic:split-screen)), og {{ui:Drei visningen 90° til venstre}}, {{ui:Drei visningen 90° til høyre}}, {{ui:Tilbake til verden}} (se [Drei visningen](topic:ucs-and-turned-view)) |

{{ui:Kopier}} i gruppen {{ui:Endre}} er kommandoen {{cmd:COPY}} (basispunkt, deretter hvor hver kopi går); {{ui:Kopier}} i gruppen {{ui:Rediger}} legger objekter på utklippstavlen for {{ui:Lim inn}}. Se [Kopier, lim inn og dupliser](topic:copy-paste). Knappen til kommandoen som kjører, forblir uthevet til kommandoen er ferdig. Verktøytipsene nevner Windows-snarveiene («Ctrl+O»); på en Mac fungerer {{key:Mod+O}} også.

I et lavt vindu (for eksempel en bærbar med skjermen skalert til 125 % eller mer) tar verktøylinjen aldri tegningens plass: når tegningen ville få for lite høyde, mister knappene ordene under ikonene og gruppenavnene (hold pekeren over en knapp for navnet), og hvis det fortsatt ikke er nok, blir verktøylinjen én rad som ruller sidelengs. Et høyere vindu henter ordene tilbake.

## Panelet til venstre

Panelet til venstre har tre deler.

- **{{ui:Layer}}.** Hvert layer i tegningen, med en fylt prikk på det aktive. Klikk et navn for å gjøre det layeret aktivt. Hver rad har en fargeprøve (klikk for å velge en farge) og fire knapper: på/av (øye), frys (snøflake), lås (hengelås) og plott (skriver). {{ui:Nytt layer}} åpner en boks for å legge til ett. Se [Organiser en tegning med layer](topic:layers).
- **{{ui:Blokker}}.** Blokkene som er definert i tegningen, hvor mange ganger hver er brukt, og en knapp {{ui:Sett inn}} for hver. Se [Lag og sett inn blokker](topic:blocks).
- **{{ui:Tegning}}.** Fakta om den åpne filen: navn (med «(endret)» når det finnes ulagrede endringer), format, størrelse, enheter, antall objekter, layer, blokker og ark. Etter at du har åpnet en fil, lister en boks «Om denne filen» alt CadCraft ikke kunne vise eller måtte konvertere.

## Tegneområdet

Midten av skjermen er tegningen. Pekeren er et siktekors. Når CadCraft vil ha et punkt, viser en liten markør og en etikett («Endepunkt», «Midtpunkt») hvor en objektfang vil lande. Når den vil ha objekter, har siktekorset en velgerboks, og objektene under lyser opp.

Når tegningen er tom, viser et kort «Begynn å tegne» noen første kommandoer. Det forsvinner så snart du kjører en kommando eller åpner en fil. Du kan slippe en DWG- eller DXF-fil hvor som helst på dette området for å åpne den.

## Fanene under tegningen

Under tegningen står fanene: {{ui:Modell}} først, deretter {{ui:3D}}, deretter én fane per ark (layout), og så en knapp {{ui:+}}.

- {{ui:Modell}} er selve tegningen, i full størrelse, i tegneenheter.
- {{ui:3D}} viser tegningen liggende på bakken og volumlegemene laget av den. Mens den vises, har verktøylinjen en gruppe {{ui:3D}} i stedet for tegnegruppene. Se [Modeller i 3D](topic:3d-solids).
- Hver arkfane er et ark med et tegningshode og visningsområder mot modellen. Det du tegner der, er i arkenheter (millimeter eller tommer). Dobbeltklikk inne i et visningsområde for å arbeide på modellen gjennom det (se [Arbeid på modellen gjennom et visningsområde](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Et langt arknavn kuttes på fanen; hold pekeren over fanen for hele navnet. Med mange ark viser {{ui:Innstillinger}} › {{ui:CadCraft}} › {{ui:Arkfaner}} › {{ui:Bare arknumre}} bare hvert arks nummer (A-101) på fanen.
- {{ui:+}} lager et nytt ark med ramme, tegningshode og ett visningsområde. Det er det samme som kommandoen {{cmd:LAYOUT}}.
- Dobbeltklikk en arkfane for å gi den nytt navn. Med en fane i fokus flytter {{key:Left}} og {{key:Right}} mellom fanene.

Hver fane beholder sin egen zoom og panorering. Se [Sett opp et ark](topic:sheets-and-viewports).

## Panelet til høyre: Egenskaper

Panelet til høyre endres med det som er valgt.

- **Ingenting valgt, på fanen {{ui:Modell}}:** overskriften er {{ui:Gjeldende innstillinger}}. Her setter du {{ui:Layer}}, {{ui:Farge}} og {{ui:Teksthøyde}} for nye objekter, tegningens {{ui:Enheter}} og størrelsene for nye måltilsettinger ({{ui:Teksthøyde}}, {{ui:Pilstørrelse}}, {{ui:Desimaler}}, {{ui:Samlet skala}}).
- **Ingenting valgt, på et ark:** overskriften er «Ark:» og arknavnet. Du kan gi arket nytt navn, endre {{ui:Papir}} og {{ui:Orientering}}, {{ui:Plott dette arket}} eller {{ui:Slett dette arket}}. Innstillingene for nye objekter følger under.
- **Ett objekt valgt:** typen som overskrift (Linje, Sirkel, Tekst, Måltilsetting, Visningsområde …), deretter layer, farge og geometri. Skriv en ny verdi og trykk {{key:Enter}} for å endre den.
- **Flere objekter valgt:** hvor mange, og felles {{ui:Layer}} og {{ui:Farge}}. Å endre en av dem endrer alle. «Varierer» betyr at de er ulike.

Se [Rediger med håndtak og Egenskaper](topic:grips-and-properties).

Under det åpnes panelet {{ui:Parametere}} når du velger {{ui:Parametere}} eller skriver {{cmd:PARAMETERS}}: alle parametere og målbetingelser i én tabell. Se [Bruk parametere og ligninger](topic:parameters).

## Kommandolinjen

Nederst er kommandolinjen: historikken over det du gjorde, og under den spørsmålslinjen.

- Spørsmålsetiketten er `Kommando:` når ingenting kjører. Mens en kommando kjører, viser den spørsmålet, alternativene i hakeparenteser og standardverdien i vinkelparenteser, for eksempel `Angi sirkelens radius [Diameter] <500>:`.
- Mens du skriver et kommandonavn, foreslår et hint til høyre kommandoer som passer. Trykk {{key:Tab}} for å godta den første. «Ingen slik kommando» betyr at ingenting passer.
- {{key:Up}} og {{key:Down}} henter tilbake linjer du skrev tidligere.
- Historikken beholder de siste 400 linjene. Meldinger fra kommandoer, målinger fra {{cmd:DIST}} og {{cmd:LIST}}, og lagrings- og plottrapporter vises her.

## Statuslinjen

Den nederste raden er statuslinjen.

- **Koordinater** til venstre: X og Y for siktekorset. Mens en kommando har et basispunkt, viser den også avstanden og vinkelen fra det, for eksempel `Δ 1200 < 90°`.
- **Meldinger** i midten, som «Ortho på» eller «Aktivt layer: Walls». De toner bort etter noen sekunder.
- **{{ui:Rutenett}}**, **{{ui:Ortho}}**, **{{ui:Polar}}**, **{{ui:Fang}}**, **{{ui:Spor}}**, **{{ui:Dyn}}** og **{{ui:LWT}}** til høyre. Hver er en bryter; en nedtrykt knapp er på. {{ui:LWT}} viser linjevekter på skjermen (se [Linjevekter og linjetyper](topic:units-papers-scales#line-weights-and-linetypes)). Den lille pilen ved siden av {{ui:Fang}} åpner {{ui:Objektfang}}, der du krysser av hvilke fanger som er aktive. Se [Fang til punkter på objekter](topic:object-snaps).

## Dialogen Plott til PDF

{{ui:Plott}} (eller {{key:Mod+P}}) åpner dialogen {{ui:Plott til PDF}}, med innstillingene til venstre og en levende forhåndsvisning til høyre. Se [Plott til PDF](topic:plot-pdf).

## Hjelpen

{{key:F1}} eller knappen {{ui:Hjelp}} åpner denne hjelpen som et sidepanel; tegningen kan fortsatt brukes ved siden av. Den fungerer uten forbindelse. {{key:F1}} igjen, eller {{key:Esc}} i panelet, lukker den. Se [Bruke denne hjelpen](common:help).
