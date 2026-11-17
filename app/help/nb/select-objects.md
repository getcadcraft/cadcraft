---
title: Velg objekter
summary: Velg objekter ett og ett, med et vindu eller en kryssing, før eller under en kommando, og ta objekter ut av et utvalg igjen.
keywords: velg, utvalg, vindu, kryssing, substantiv-verb, klikk, alle, sist, forrige, gjerde, fjern, legg til, tab, syklus, overlappende, qselect, hurtigvalg, filter, velg lignende, selectsimilar, shift, fjern utvalg, ctrl+a, pickfirst
from: 676508c7
---

## Hva du får vite

Hvordan du velger objektene en kommando skal virke på. CadCraft har to måter å jobbe på, og begge er greie:

- **Velg først, deretter kommandoen** (substantiv-verb). Velg objekter, og skriv deretter `M` for Flytt. Kommandoen tar utvalget ditt og går rett videre til neste spørsmål.
- **Kommando først, deretter velg** (verb-substantiv). Skriv `M`; kommandoen spør `Select objects:`; du velger, og trykker deretter {{key:Enter}}.

## Velg ett objekt om gangen

1. Uten at en kommando kjører, klikk på en linje. Den markeres, og dens håndtak (små firkanter) vises. Høyre panel viser egenskapene.
2. Klikk på et annet objekt. Det legges til utvalget.
3. Hold {{key:Shift}} og klikk på et valgt objekt. Det tas ut av utvalget.
4. Trykk {{key:Esc}}. Ingenting er valgt.

## Vindu og kryssing

Klikk én gang på tomt område, beveg musen og klikk igjen: et rektangel. Trykk og dra tegner i stedet et frihåndslasso, med de samme to typene (se [Lassovalg](topic:lasso-selection); {{ui:Innstillinger}} kan få en dra til å tegne rektangelet). Hvilke objekter du får, avhenger av retningen:

| Du beveger | Boks | Velger |
|---|---|---|
| Venstre mot høyre | Vindu | Bare objekter som ligger **helt inne i** boksen |
| Høyre mot venstre | Kryssing | Objekter inne i boksen **og** objekter den berører |

1. Tegn noen overlappende linjer og sirkler.
2. Klikk på tomt område til venstre for noen objekter, beveg deg til høyre og klikk igjen. Bare objektene som ligger helt inne, velges.
3. Trykk {{key:Esc}}.
4. Klikk på tomt område til høyre, beveg deg til venstre over noen objekter, og klikk igjen. Alt boksen berører, velges.
5. Hold {{key:Shift}} og tegn en boks eller et lasso over noen valgte objekter. De tas ut av utvalget.

## Velg, og kjør deretter en kommando

1. Velg to sirkler.
2. Skriv `M` og trykk {{key:Enter}}.

Historikken sier `2 found`, og ledeteksten går rett til `Specify base point`. Fullfør flyttingen (se [Flytt, kopier, roter, skaler og speil](topic:modify-objects)).

Når en kommando er ferdig, tømmes utvalget, så neste kommando starter på nytt.

Kommandoer som tar et utvalg på denne måten: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} og {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} og {{cmd:CHAMFER}} ber alltid deg om å velge objekter ett om gangen i stedet. {{cmd:TRIM}} og {{cmd:EXTEND}} tar et klikk, eller en bane du drar gjennom delene (se [Trim og forleng](topic:trim-and-extend)).

## Kjør en kommando, og velg deretter

1. Kontroller at ingenting er valgt ({{key:Esc}}).
2. Skriv `E` og trykk {{key:Enter}}. Ledeteksten lyder `Select objects:`.
3. Klikk på objekter, eller dra vinduer og kryssinger. Historikken teller hvert valg (`1 found`, `3 found`).
4. Trykk {{key:Enter}}, trykk {{key:Space}} eller høyreklikk for å avslutte valget.

Objektene slettes, og historikken sier hvor mange.

Ved ledeteksten `Select objects:` kan du også skrive:

- `ALL`, deretter {{key:Enter}}: alle objekter du kan redigere i den åpne fanen.
- `L` (eller `LAST`), deretter {{key:Enter}}: det sist tegnede objektet.
- `P` (Forrige): objektene den forrige kommandoen virket på, hvis de fortsatt finnes.
- `F` (Gjerde): klikk eller skriv punkter langs en linje; alle objekter linjen krysser legges til. Trykk {{key:Enter}} for å avslutte gjerdet; `U` tar tilbake det siste punktet.
- `W` (Vindu) eller `C` (Kryssing): to hjørner, uansett hvilken vei du drar.
- `R` (Fjern): fra nå av tar klikk, vinduer og gjerder objekter **ut**. Ledeteksten lyder `Remove objects:`. `A` (Legg til) bytter tilbake.
- `?`: listen over disse i historikken.

Disse alternativene vises ikke i ledeteksten, slik som i AutoCAD.

## Velg ett av flere objekter oppå hverandre

Der objekter overlapper eller berører hverandre, tar et klikk det nærmeste. For å få et annet:

1. Hold pekeren stille over stedet.
2. Trykk {{key:Tab}}. Neste objekt der markeres, og statuslinjen sier hvilket det er («2 av 3: Linje på layer Vegger»).
3. Trykk {{key:Tab}} igjen til ønsket objekt er markert, og klikk uten å flytte.

Å flytte pekeren begynner på nytt. Dette virker uten at en kommando kjører, ved ledeteksten `Select objects:`, og hvor som helst en kommando ber deg velge ett objekt.

## Velg etter en regel: Hurtigvalg

{{cmd:QSELECT}} (`QS`, eller {{ui:Rediger}} › {{ui:Mer}} › {{ui:Hurtigvalg}}) velger alle objekter som passer en regel, for eksempel alle sirkler med radius under 50, eller alle blokkreferanser som heter DOOR-900.

1. Åpne {{ui:Hurtigvalg}}.
2. Velg {{ui:Objekttype}} (listen teller hver type), og deretter {{ui:Egenskap}}: {{ui:Layer}}, {{ui:Farge}}, og for noen typer {{ui:Lengde}}, {{ui:Radius}}, {{ui:Areal}}, {{ui:Teksthøyde}}, {{ui:Tekstinnhold}}, {{ui:Blokknavn}} eller {{ui:Skravurmønster}}.
3. Velg {{ui:Operator}} og {{ui:Verdi}}. `*` passer med jokertegn (`DOOR-*`); {{ui:Velg alle}} tar alle objekter av typen. Tallet nederst viser hvor mange som passer, mens du velger.
4. {{ui:Slik brukes det}}: ta med treffene, eller alt annet. {{ui:Bruk på}} {{ui:Gjeldende utvalg}} begrenser det du hadde valgt; {{ui:Legg til i gjeldende utvalg}} legger til i det.
5. Klikk {{ui:Velg}}. Kjør deretter kommandoen du vil ha: den bruker utvalget.

## Velg lignende

Velg ett eller flere objekter, og skriv {{cmd:SELECTSIMILAR}} (`SIM`), eller velg {{ui:Rediger}} › {{ui:Mer}} › {{ui:Velg lignende}}. Alle objekter av samme type, på samme layer og med samme farge, velges. Blokkreferanser må også ha samme blokk, og skravurer samme mønster. Skriv `SE` ved ledeteksten `Select objects` for å velge hva som må passe.

## Velg nå, bruk senere

Skriv `SELECT` og trykk {{key:Enter}}, velg objekter med en av metodene over, og trykk {{key:Enter}}. De forblir valgt for neste kommando, og `P` velger dem igjen ved en senere ledetekst `Select objects:`.

## Velg alt

Uten at en kommando kjører, trykk {{key:Mod+A}}, eller velg {{ui:Velg alle}} i verktøylinjens meny {{ui:Rediger}} › {{ui:Mer}}, for å velge alle objekter du kan redigere på den åpne fanen. Hvis du har skrevet noe på kommandolinjen, velger {{key:Mod+A}} i stedet den teksten: trykk {{key:Esc}} først for å tømme den. Ved ledeteksten `Select objects:` skriver du `ALL`. {{ui:Fjern utvalg}} i samme meny, eller {{key:Esc}}, fjerner utvalget.

:::tip
Hvis du heller vil at hvert klikk erstatter utvalget (og {{key:Shift}} legger til), sett {{ui:Klikk på objekter}} til {{ui:Erstatter utvalget}} i [CadCraft-innstillinger](topic:settings).
:::

## Hva som ikke kan velges

- Objekter på et layer som er **av**, **frosset** eller **låst**. Låste objekter forblir synlige, og du kan fange dem, men du kan ikke velge eller endre dem.
- På en arkfane er modellen som vises inne i et utsnitt, ikke valgbar. Du velger arkets egne objekter (tegningshodet, merknadene, rammene rundt utsnittene). For å redigere modellen, gå til fanen «{{ui:Modell}}».

## Slett raskt

Velg objekter, og trykk {{key:Delete}} (eller {{key:Backspace}} når kommandolinjen ikke har markøren). På et Mac-tastatur virker tasten merket delete når du har klikket i tegningen. Mens kommandolinjen har markøren, trykk fn og delete samtidig. Dette kjører {{cmd:ERASE}} på utvalget. Hvis ingenting skjer, har du skrevet noe på kommandolinjen: trykk {{key:Esc}}, eller skriv `E` og trykk {{key:Enter}} i stedet.

## Vanlige feil

- **Vinduet tok for lite.** Du dro fra venstre mot høyre, som bare tar med det som ligger helt inne. Dra fra høyre mot venstre for en kryssing.
- **Et klikk på tomt område startet en boks.** Ett klikk på tomt område starter et vindu; det andre klikket fullfører det. Trykk {{key:Esc}} eller høyreklikk for å avbryte.
- **Et klikk på tomt område slapp utvalget.** Det gjør det, med mindre du holder {{key:Shift}}. For å beholde utvalget ved et slikt klikk, og tømme det kun med {{key:Esc}}, sett {{ui:Klikk på et tomt sted}} til {{ui:Beholder utvalget}} i [CadCraft-innstillinger](topic:settings#clicking-an-empty-spot).
- **Kommandoen brukte objekter du ikke mente.** Noe var fortsatt valgt da du startet den. Trykk {{key:Esc}} før en kommando for å starte uten valg.
- **Ingenting er valgt etter en kommando.** Det er med vilje: en fullført kommando tømmer utvalget.
