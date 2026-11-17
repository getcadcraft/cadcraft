---
title: Tastatur og mus
summary: Alle taster, museaktioner og kommandolinjetaster i CadCraft-tegneappen, som koden håndterer dem.
keywords: tastatur, genveje, taster, mus, hjul, panorér, zoom, højreklik, midterknap, f3, f7, f8, ctrl, kommandotast, hurtigtaster, kopiér, klip, sæt ind, duplikér, udklipsholder, vælg alle
from: a2608a29
---

Genveje vises for din computer. På en Mac bruger hver {{key:Mod}}-genvej nedenfor Command-tasten, og Control-tasten virker også. Hvordan taster skrives, og hvordan du bruger F-taster på en Mac, står i [Taster, mus og trackpads](common:keys).

## Skriv kommandoer

| Tast | Hvad den gør |
|---|---|
| Ethvert bogstav, tal eller symbol | Går til kommandolinjen, uanset hvor markøren er, medmindre et felt i et panel har markøren |
| {{key:Enter}} | Sender det, du skrev. På en tom ledetekst: gentager den sidste kommando, afslutter en kommando, afslutter et valg eller accepterer standarden i `<…>` |
| {{key:Space}} | Samme som {{key:Enter}}, undtagen når CadCraft beder om tekst (tekst, blocknavne, målsætningstekst), hvor den skriver et mellemrum |
| {{key:Esc}} | Annullerer kommandoen. Uden kørende kommando: annullerer en grebflytning eller en markeringsboks og fravælger derefter |
| {{key:Tab}} | Accepterer den foreslåede kommando, der vises til højre for kommandolinjen. Når intet er skrevet, og markøren er over overlappende objekter: fremhæver det næste der (klik for at vælge det) |
| {{key:Up}} {{key:Down}} | Bladrer gennem de linjer, du skrev før (de sidste 100) |

## Tegning og redigering

| Tast | Hvad den gør |
|---|---|
| {{key:Mod+Z}} | Fortryder den sidste kommando |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gentager |
| {{key:Mod+A}} | Vælger alle objekter, du kan redigere, på den åbne fane ({{cmd:SELECTALL}}). Har du skrevet noget på kommandolinjen, vælges teksten i stedet |
| {{key:Delete}} | Sletter de valgte objekter ({{cmd:ERASE}}), medmindre du har skrevet noget på kommandolinjen |
| {{key:Backspace}} | Sletter de valgte objekter, når kommandolinjen ikke har markøren; på kommandolinjen sletter den det, du har skrevet |
| {{key:Esc}} | Uden kørende kommando: fravælger valget ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Gemmer en kopi i tegningens format (DWG eller DXF) |
| {{key:Mod+Shift+S}} | Gem som: vælg DWG eller DXF, og gem derefter en kopi |
| {{key:Mod+O}} | Åbner en DWG eller DXF |
| {{key:Mod+P}} | Plot til PDF |

Fortryd, gentag, vælg alle og plot gør intet, mens en kommando kører: tryk først på {{key:Esc}}.

## Kopiér, klip og sæt ind

| Tast | Hvad den gør |
|---|---|
| {{key:Mod+C}} | Kopierer valget til udklipsholderen ({{cmd:COPYCLIP}}). Intet valgt: CadCraft beder om objekter |
| {{key:Mod+X}} | Klip: kopierer valget og sletter det derefter ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Sæt ind: kopien følger markøren; klik, eller skriv et punkt, for at sætte den ned ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Sæt ind på samme sted: ved de koordinater, den blev kopieret fra ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Duplikér: en kopi af valget følger markøren; klik for at sætte den ned, {{key:Esc}} efterlader intet ({{cmd:DUPLICATE}}) |

De samme handlinger findes i værktøjslinjens gruppe {{ui:Redigér}} ({{ui:Kopiér}}, {{ui:Sæt ind}}) og i menuen {{ui:Mere}}. Mens en anden kommando kører, afslut den eller tryk først på {{key:Esc}}; tryk på {{key:Mod+V}} eller {{key:Mod+D}} igen, mens en kopi følger markøren, starter forfra. Når du har skrevet noget på kommandolinjen, eller en kommando beder om tekst, kopierer, klipper og sætter disse taster den tekst i stedet. Se [Kopiér, sæt ind og duplikér](topic:copy-paste).

## Til/fra

| Tast | Til/fra | Knap i statuslinjen |
|---|---|---|
| {{key:F3}} | Objektfang til eller fra | {{ui:Fang}} |
| {{key:F7}} | Gitter til eller fra | {{ui:Gitter}} |
| {{key:F8}} | Ortogonal til eller fra | {{ui:Ortogonal}} |
| {{key:F10}} | Polar sporing til eller fra | {{ui:Polar}} |
| {{key:F11}} | Objektfangssporing til eller fra | {{ui:Spor}} |
| {{key:F12}} | Dynamisk input til eller fra | {{ui:Dyn}} |

:::mac
På en Mac er F3, F7 og F8 normalt Mission Control og medietaster. Hold **fn** nede med dem, eller slå standardfunktionstaster til i Systemindstillinger, som beskrevet i [Taster, mus og trackpads](common:keys). Knapperne i statuslinjen virker altid.
:::

:::firefox
I Firefox kan F7 også bede om at slå markørnavigation til. Vælg **Nej**, og brug knappen {{ui:Gitter}}, hvis den bliver ved med at spørge.
:::

## Hjælp

| Tast | Hvad den gør |
|---|---|
| {{key:F1}} | Åbner eller lukker denne hjælp ved siden af tegningen. Den virker også, mens en kommando kører, og den når aldrig kommandolinjen. |
| {{key:Esc}} | Med markøren i hjælpepanelet: rydder søgningen, eller lukker panelet |

Knappen {{ui:Hjælp}} i linjen øverst gør det samme som {{key:F1}}. Mens du skriver i hjælpens søgefelt, når intet kommandolinjen. Klik på tegningen for at give tasterne tilbage til CadCraft; panelet forbliver åbent ved siden af den.

:::mac
På et Mac-tastatur holder du **fn** nede og trykker på F1, eller klikker på {{ui:Hjælp}}.
:::

## Skærm

| Tast | Hvad den gør |
|---|---|
| {{key:Ctrl+Shift+F}} | Skifter mellem normal, fuld skærm og fuld skærm med linjerne skjult. Dette bruger Control-tasten på alle computere, også Mac. |
| {{key:Left}} {{key:Right}} | Med en fane under tegningen i fokus: den forrige eller næste fane |

I fuld skærm kan browseren bruge det første {{key:Esc}} til at forlade fuld skærm. Tryk på {{key:Esc}} igen for at annullere en kommando.

## Dialogbokse

| Tast | Hvad den gør |
|---|---|
| {{key:Esc}} | Lukker dialogen ({{ui:Plot til PDF}}, eller et spørgsmål som »Ikke-gemte ændringer«, hvor den betyder {{ui:Annuller}}) |
| {{key:Tab}} | Flytter mellem dialogens indstillinger og knapper |

Mens en dialog er åben, er tegningens taster slået fra.

## Felter i panelet

I et felt i det højre eller venstre panel:

| Tast | Hvad den gør |
|---|---|
| {{key:Enter}} | Anvender værdien og forlader feltet |
| {{key:Esc}} | Sætter den gamle værdi tilbage og forlader feltet |
| {{key:Tab}} | Anvender og flytter til næste felt |

Mens et felt har markøren, skrives bogstaver i det, ikke på kommandolinjen.

## Mus

| Handling | Hvad den gør |
|---|---|
| Klik | Vælger et punkt, når en kommando beder om et; vælger et objekt, når den beder om objekter; ellers vælges et objekt eller et greb |
| Shift+klik | Fjerner et valgt objekt fra valget (med {{ui:Klik på objekter}} sat til {{ui:Erstatter valget}} i [Indstillinger](topic:settings): tilføjer det). Mens du vælger et punkt: ignorerer objektfang for det klik |
| Klik på tomt område, og klik igen | En markeringsboks: fra venstre mod højre er et vindue, fra højre mod venstre et kryds |
| Træk over tomt område | Et lasso: trækker du først mod højre, er det et vindue, og først mod venstre er det et kryds; {{key:Space}} mens du trækker, skifter mellem vindue, kryds og hegn; {{key:Esc}} slipper det (LASSOMODE 0, eller Indstillinger, gør det til rektanglet igen) |
| Træk gennem dele i TRIM eller EXTEND | Beskærer (eller forlænger) hver del, stien krydser; hold {{key:Shift}} for den anden |
| Træk et greb | Flytter grebet (eller klik på grebet, og klik derefter, hvor det skal hen) |
| Dobbeltklik på tekst | Vælger den og sætter markøren i dens {{ui:Tekst}}-felt i det højre panel |
| Højreklik | Enter. Under en grebflytning eller en markeringsboks: annullerer den |
| Træk med højre knap | Panorerer |
| Hjul | Zoomer ind og ud om krydsmarkøren |
| Træk med hjulet (midterknap) | Panorerer |
| Dobbeltklik på hjulet | Zoomer til hele tegningen (udstrækning) |
| Slip en DWG eller DXF på tegningen | Åbner den |

Bruger du trackpad eller touchskærm, se [Mus, trackpad og touch](topic:mouse-trackpad-touch).

## Taster, som browseren beholder

{{key:Mod+N}}, {{key:Mod+W}} og {{key:Mod+T}} tilhører altid browseren. CadCraft bruger dem ikke: brug {{ui:Ny}} eller skriv `NEW` for en ny tegning. CadCraft's udklipsholder er sin egen: {{key:Mod+C}} og {{key:Mod+V}} kopierer objekter mellem CadCraft-tegninger og faner, ikke til eller fra andre programmer.

:::mac
Hvis {{key:Mod+Y}} åbner din browsers historik i stedet for at gentage, brug {{key:Mod+Shift+Z}} eller knappen {{ui:Gentag}}.
:::

## Hvor Flyt findes

Flyt er kommandoen `MOVE` (tast {{key:M}}): vælg objekterne, derefter et basispunkt og et andet punkt eller en skrevet afstand. `ALIGN` og `DISTRIBUTE` findes også. BimCraft bruger de samme navne til de samme opgaver på bygningselementer, men dens {{key:M}} er Mål: dens Flyt er {{key:Shift+M}}.
