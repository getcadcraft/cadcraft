---
title: Tastatur og mus
summary: Alle taster, musehandlinger og taster for kommandolinjen i CadCraft-tegneappen, slik koden håndterer dem.
keywords: tastatur, snarveier, taster, mus, hjul, panorer, zoom, høyreklikk, midtknapp, f3, f7, f8, ctrl, kommandotast, hurtigtaster, kopier, klipp ut, lim inn, dupliser, utklippstavle, velg alle
from: a2608a29
---

Snarveier vises for din datamaskin. På en Mac bruker alle {{key:Mod}}-snarveiene nedenfor Command-tasten, og Control-tasten fungerer også. Hvordan taster skrives, og hvordan du bruker F-tastene på en Mac, står i [Taster, mus og styreplate](common:keys).

## Skrive kommandoer

| Tast | Hva den gjør |
|---|---|
| Enhver bokstav, siffer eller symbol | Går til kommandolinjen, uansett hvor pekeren er, med mindre en boks i et panel har markøren |
| {{key:Enter}} | Sender det du skrev. På en tom ledetekst: gjentar siste kommando, avslutter en kommando, fullfører et utvalg, eller bruker standardverdien i `<…>` |
| {{key:Space}} | Samme som {{key:Enter}}, unntatt når CadCraft spør etter tekst (tekst, blokknavn, måltilsetningstekst), der den skriver et mellomrom |
| {{key:Esc}} | Avbryter kommandoen. Uten kommando som kjører: avbryter en håndtaksflytting eller en utvalgsboks, og fjerner deretter utvalget |
| {{key:Tab}} | Godtar den foreslåtte kommandoen som vises til høyre for kommandolinjen. Uten noe skrevet og med pekeren over overlappende objekter: markerer det neste der (klikk for å velge det) |
| {{key:Up}} {{key:Down}} | Blar gjennom linjene du skrev før (de siste 100) |

## Tegning og redigering

| Tast | Hva den gjør |
|---|---|
| {{key:Mod+Z}} | Angre siste kommando |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gjør om |
| {{key:Mod+A}} | Velger alle objekter du kan redigere på den åpne fanen ({{cmd:SELECTALL}}). Har du skrevet noe på kommandolinjen, velger den teksten i stedet |
| {{key:Delete}} | Sletter de valgte objektene ({{cmd:ERASE}}), med mindre du har skrevet noe på kommandolinjen |
| {{key:Backspace}} | Sletter de valgte objektene når kommandolinjen ikke har markøren; på kommandolinjen sletter den det du skrev |
| {{key:Esc}} | Uten kommando som kjører: fjerner utvalget ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Lagrer en kopi i tegningens format (DWG eller DXF) |
| {{key:Mod+Shift+S}} | Lagre som: velg DWG eller DXF, og lagre deretter en kopi |
| {{key:Mod+O}} | Åpne en DWG eller DXF |
| {{key:Mod+P}} | Plott til PDF |

Angre, gjør om, velg alle og plott gjør ingenting mens en kommando kjører: trykk {{key:Esc}} først.

## Kopier, klipp ut og lim inn

| Tast | Hva den gjør |
|---|---|
| {{key:Mod+C}} | Kopierer utvalget til utklippstavlen ({{cmd:COPYCLIP}}). Ingenting valgt: CadCraft ber om objekter |
| {{key:Mod+X}} | Klipp ut: kopierer utvalget, og sletter det deretter ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Lim inn: kopien følger pekeren; klikk, eller skriv et punkt, for å sette den ned ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Lim inn på samme sted: på koordinatene den ble kopiert fra ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Dupliser: en kopi av utvalget følger pekeren; klikk for å sette den ned, {{key:Esc}} later ingenting stå igjen ({{cmd:DUPLICATE}}) |

De samme handlingene finnes i verktøylinjens gruppe {{ui:Rediger}} ({{ui:Kopier}}, {{ui:Lim inn}}) og i {{ui:Mer}}-menyen. Mens en annen kommando kjører, fullfør den eller trykk {{key:Esc}} først; trykker du {{key:Mod+V}} eller {{key:Mod+D}} igjen mens en kopi følger pekeren, starter det på nytt. Når du har skrevet noe på kommandolinjen, eller en kommando ber om tekst, kopierer, klipper ut og limer disse tastene inn den teksten i stedet. Se [Kopier, lim inn og dupliser](topic:copy-paste).

## Brytere

| Tast | Bryter | Statusfeltknapp |
|---|---|---|
| {{key:F3}} | Objektfang av eller på | {{ui:Fang}} |
| {{key:F7}} | Rutenett av eller på | {{ui:Rutenett}} |
| {{key:F8}} | Ortho av eller på | {{ui:Ortho}} |
| {{key:F10}} | Polarsporing av eller på | {{ui:Polar}} |
| {{key:F11}} | Objektfangsporing av eller på | {{ui:Spor}} |
| {{key:F12}} | Dynamisk inndata av eller på | {{ui:Dyn}} |

:::mac
På en Mac er F3, F7 og F8 vanligvis Mission Control og medietaster. Hold **fn** sammen med dem, eller slå på standard funksjonstaster i Systeminnstillinger, som beskrevet i [Taster, mus og styreplate](common:keys). Statusfeltknappene fungerer alltid.
:::

:::firefox
F7 i Firefox kan også be deg slå på markørnavigering. Velg **Nei**, og bruk knappen {{ui:Rutenett}} hvis den fortsetter å spørre.
:::

## Hjelp

| Tast | Hva den gjør |
|---|---|
| {{key:F1}} | Åpner eller lukker denne hjelpen, ved siden av tegningen. Den virker selv mens en kommando kjører, og når aldri kommandolinjen. |
| {{key:Esc}} | Med markøren i hjelpepanelet: fjerner søket, eller lukker panelet |

Knappen {{ui:Hjelp}} i linjen øverst gjør det samme som {{key:F1}}. Mens du skriver i hjelpens søkeboks, når ingenting kommandolinjen. Klikk på tegningen for å gi tastene tilbake til CadCraft; panelet forblir åpent ved siden av den.

:::mac
På et Mac-tastatur holder du **fn** og trykker F1, eller klikker {{ui:Hjelp}}.
:::

## Skjerm

| Tast | Hva den gjør |
|---|---|
| {{key:Ctrl+Shift+F}} | Bytter mellom normal, fullskjerm og fullskjerm med linjene skjult. Dette bruker Control-tasten på alle datamaskiner, også Mac. |
| {{key:Left}} {{key:Right}} | Med en fane under tegningen i fokus: forrige eller neste fane |

I fullskjerm kan nettleseren bruke den første {{key:Esc}} til å forlate fullskjerm. Trykk {{key:Esc}} igjen for å avbryte en kommando.

## Dialogbokser

| Tast | Hva den gjør |
|---|---|
| {{key:Esc}} | Lukker dialogboksen ({{ui:Plott til PDF}}, eller et spørsmål som «Ulagrede endringer», der den betyr {{ui:Avbryt}}) |
| {{key:Tab}} | Flytter mellom dialogens innstillinger og knapper |

Mens en dialogboks er åpen, er tegningens taster av.

## Felt i panelet

I en boks i høyre eller venstre panel:

| Tast | Hva den gjør |
|---|---|
| {{key:Enter}} | Bruker verdien og forlater boksen |
| {{key:Esc}} | Setter den gamle verdien tilbake og forlater boksen |
| {{key:Tab}} | Bruker verdien og flytter til neste boks |

Mens en boks har markøren, skrives bokstaver inn i den, ikke på kommandolinjen.

## Mus

| Handling | Hva den gjør |
|---|---|
| Klikk | Velger et punkt når en kommando ber om det; velger et objekt når den ber om objekter; ellers velger et objekt eller et håndtak |
| Shift+klikk | Fjerner et valgt objekt fra utvalget (med {{ui:Klikk på objekter}} satt til {{ui:Erstatter utvalget}} i [Innstillinger](topic:settings): legger det til). Mens du velger et punkt: ignorerer objektfang for det klikket |
| Klikk på tomt område, og klikk igjen | En utvalgsboks: venstre til høyre er et vindu, høyre til venstre en kryssing |
| Dra på tomt område | Et lasso: høyre først er et vindu, venstre først en kryssing; {{key:Space}} mens du drar, bytter mellom vindu, kryssing og gjerde; {{key:Esc}} slipper det (LASSOMODE 0, eller Innstillinger, gjør det til rektangelet igjen) |
| Dra gjennom deler i TRIM eller EXTEND | Trimmer (eller forlenger) hver del som banen krysser; hold {{key:Shift}} for den andre |
| Dra et håndtak | Flytter håndtaket (eller klikk på håndtaket, og klikk deretter der det skal gå) |
| Dobbeltklikk på tekst | Velger den og setter markøren i boksen {{ui:Tekst}} i høyre panel |
| Høyreklikk | Enter. Under en håndtaksflytting eller en utvalgsboks: avbryter den |
| Dra med høyre knapp | Panorerer |
| Hjulet | Zoomer inn og ut rundt korsmarkøren |
| Dra med hjulet (midtknappen) | Panorerer |
| Dobbeltklikk på hjulet | Zoomer til hele tegningen (utstrekning) |
| Slipp en DWG eller DXF på tegningen | Åpner den |

På styreplate eller berøringsskjerm, se [Mus, styreplate og berøring](topic:mouse-trackpad-touch).

## Taster nettleseren beholder

{{key:Mod+N}}, {{key:Mod+W}} og {{key:Mod+T}} tilhører alltid nettleseren. CadCraft bruker dem ikke: bruk {{ui:Ny}} eller skriv `NEW` for en ny tegning. CadCraft har sin egen utklippstavle: {{key:Mod+C}} og {{key:Mod+V}} kopierer objekter mellom CadCraft-tegninger og -faner, ikke til eller fra andre programmer.

:::mac
Hvis {{key:Mod+Y}} åpner nettleserens historikk i stedet for å gjøre om, bruk {{key:Mod+Shift+Z}} eller knappen {{ui:Gjør om}}.
:::

## Hvor Flytt er

Flytt er kommandoen `MOVE` (tast {{key:M}}): velg objektene, og deretter et basispunkt og et andre punkt eller en skrevet avstand. `ALIGN` og `DISTRIBUTE` finnes også. BimCraft bruker de samme navnene til de samme oppgavene på bygningselementer, men dens {{key:M}} er Mål: dens Flytt er {{key:Shift+M}}.
