---
title: Menuer, taster og mus
summary: Vælg en menustil, der passer til den måde, du allerede arbejder på, giv en kommando din egen tast eller en tast, der skriver en kommando, flyt kommandoer mellem båndfaner, og angiv hvad hjulet og musens knapper gør.
keywords: menustil, menuer, bånd, værktøjslinje, kommandolinje, tastaturgenveje, hurtigtaster, taster, tilpas, omlæg, genvej, tekstnøgler, mus, hjul, vend, zoomretning, midterknap, højreknap, panorér, eksportér, importér, skift, bekendt, drafting classic
from: 8bbf4f88
---

CadCraft's kommandoer er de samme, uanset hvordan du når dem, og kommandolinjen er altid der med sine aliasser (`L`, `C`, `TR` …). En **menustil** bestemmer kun, hvor knapperne sidder på skærmen, hvad de hedder dér, og hvilke taster der kører dem. Vælg en i {{ui:Indstillinger}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Menuer, taster og mus}}; ændringen sker med det samme, og denne browser husker den.

## De tre stile

| Stil | Hvad du får |
|---|---|
| {{ui:CadCraft}} | CadCrafts egen værktøjslinje: File, Draw, Modify, Annotate, Parametric, Blocks, Sheets, Edit og View, hver med en {{ui:More}}-menu. Udgangspunktet. |
| {{ui:Drafting classic}} | Et bånd, sat op som klassiske 2D-tegneprogrammer sætter deres: en {{ui:File}}-menu og hurtigknapper, derefter fanerne {{ui:Home}} (Draw, Modify, Annotation, Layers, Block, Properties, Utilities, Clipboard), {{ui:Insert}}, {{ui:Annotate}}, {{ui:Parametric}}, {{ui:View}}, {{ui:Manage}}, {{ui:Output}} og {{ui:3D}}. Skriv kommandoer som altid. Midterknappen panorerer; et højreklik er {{key:Enter}}, og træk med højreknappen gør ingenting. |
| {{ui:Ribbon}} | Et bånd med enkle opgavefaner: {{ui:Draw}}, {{ui:Modify}}, {{ui:Annotate}}, {{ui:Parametric}}, {{ui:Blocks}}, {{ui:Sheets}}, {{ui:View}}, {{ui:3D}} og {{ui:Tools}}, med en {{ui:File}}-menu og hurtigknapper til højre. Midter- og højreknappen panorerer, som i CadCrafts egen stil. |

Alle stile beholder CadCrafts taster: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, og {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} til tegnehjælpemidlerne. Bogstaver er aldrig taster: CadCraft skriver dem ind på kommandolinjen.

Båndene rummer også værktøjerne fra panelet Lag og tegnehjælpemidlerne fra statuslinjen. Fanen {{ui:3D}} udfyldes, når 3D-fanen under tegningen er åbnet; et 3D-værktøj valgt på fanen Model åbner 3D-fanen først, og et 2D-værktøj valgt på 3D-fanen går først tilbage til fanen Model.

:::tip
En tast, der hører til CadCrafts egen opsætning, men som din stil har givet en anden kommando, gør ingenting, og statuslinjen siger, hvor dens kommando er endt ("I Mine taster er Ortho Ctrl+Alt+O"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} og piletasterne beholder altid deres betydning. Mens en kommando kører, eller mens bogstaver skrives på kommandolinjen, hører tasterne til kommandolinjen.
:::

## Lav den til din egen

1. Vælg den stil, der ligner det, du vil have, og klik på {{ui:Customize…}}.
2. Under {{ui:Taster og menuer}} finder du en kommando (søgefeltet hjælper). {{ui:Add a key}} og tryk på tasten. Klik på en tast for at fjerne den.
3. Med et bånd flytter {{ui:Where it sits}} kommandoen til en anden fane og panel, til {{ui:File}}-menuen, eller til {{ui:Keys only}}.
4. Under {{ui:Mouse}} angiver du hjulet og de knapper, der panorerer tegningen.
5. Giv den et navn, og klik på {{ui:Save}}.

Når du gemmer en indbygget stil, laves din egen kopi ("My Drafting classic"); den indbyggede ændres aldrig. En tast, der er givet til to kommandoer, vises med rødt og skal rettes, før du kan gemme.

## Taster, der skriver en kommando

{{cmd:SHORTCUTS}} (View › More › {{ui:Keyboard shortcuts…}}) giver en tast en hel kommandolinje, for eksempel {{key:Ctrl+Alt+L}} for `LINE` eller {{key:F9}} for `ZOOM E`. Disse taster hører til den stil, der er i brug: første gang denne version åbnes, føres de taster, du lavede i en ældre version, over i din egen stil "My CadCraft keys", én gang, og virker som før. Eksport af stilen tager dem med.

## Mus

- **Musehjul**: {{ui:Scroll up zooms in}} (udgangspunktet) eller {{ui:Scroll up zooms out}}, og hvor hurtigt. Et knibe-zoom på trackpad zoomer altid i den retning, dine fingre bevæger sig.
- **Panorér tegningen med**: midterknappen, højreknappen eller begge. Et højreklik uden træk er altid {{key:Enter}}. Venstreknappen vælger og tegner altid i CadCraft, så at markere den ændrer ingenting her.
- **Træk i 3D-visningerne**: 3D-fanen har sine egne knapper i alle stile (venstre kredser, midter og højre panorerer).

## Tag den med dig

{{ui:Export}} gemmer den stil, der er i brug, som en lille `.ccinput.json`-fil; {{ui:Import…}} tilføjer en, fra en anden computer eller en kollega. En importeret fil kan kun pege på CadCrafts egne kommandoer: alt andet i den udelades og tælles i statuslinjen. {{ui:Delete this style}} fjerner en af dine egne.

:::note
Disse indstillinger bliver i denne browser. {{ui:Use this style in every app}} under stilkortene får hver app til at åbne i sin tilsvarende stil (sin egen værktøjslinje, et bånd eller Drafting classic), med de ændringer, du har lavet i hver app. CadCraft har ingen menulinjestil: når en anden apps menulinje vælges for alle apps, beholder CadCraft sin egen værktøjslinje.
:::

Relateret: [Tastatur og mus](topic:keyboard) · [CadCraft-indstillinger](topic:settings) · [Fra andre tegneprogrammer](topic:coming-from) · [Kommandoaliasser](topic:command-aliases)
