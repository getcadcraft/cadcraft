---
title: Mus, trackpad og touch
summary: Sådan zoomer, panorerer, højreklikker og vælger du i CadCraft med en hjulmus, en Mac- eller pc-trackpad eller en touchskærm, og hvad der er forskelligt mellem browsere.
keywords: trackpad, touchpad, magic mouse, touch, tablet, ipad, panorér, zoom, knib, højreklik, to fingre, midterknap, browser, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft er lavet til en mus med hjul. Alt virker også med en trackpad, med få vaner at lære. Touchskærme virker til valg, dog med begrænsninger.

## Hjulmus

- **Zoom:** rul hjulet. Tegningen zoomer om krydset, så peg på det, du vil se.
- **Panorér:** hold hjulet nede og træk, eller træk med højre knap.
- **Zoom til alt:** dobbeltklik på hjulet, eller klik {{ui:Udstrækning}}.
- **Tilbage til den forrige visning:** klik {{ui:Forrige}} i gruppen Visning, eller skriv `Z`, {{key:Enter}}, `P`, {{key:Enter}}. En række hjulskridt tæller som én visning, så ét {{ui:Forrige}} fortryder den. Gem visninger, du vender tilbage til, med {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** højreklik.

## Trackpad

:::mac
- **Panorér:** flyt to fingre på trackpaden i en vilkårlig retning: tegningen følger dine fingre. Du kan også trække med et to-finger-klik holdt nede (en træk med højreknappen).
- **Zoom:** knib med to fingre. Zoomet følger krydset.
- **Højreklik (Enter):** klik med to fingre. Slå "Sekundær klik" til under **Systemindstillinger**, derefter **Trackpad**, hvis det ikke gør noget. Control-klik kan tælle som et almindeligt klik i CadCraft i stedet for et højreklik, så brug to-finger-klikket.
- **Zoom til et område:** klik {{ui:Vindue}} i gruppen Visning, og klik to hjørner.
:::

:::windows linux
- **Panorér:** flyt to fingre på touchpaden i en vilkårlig retning: tegningen følger dine fingre. Du kan også trække med højre knap holdt nede.
- **Zoom:** knib med to fingre. Zoomet følger krydset.
- **Højreklik (Enter):** klik med to fingre, eller klik i touchpadens nederste højre hjørne, afhængigt af dine touchpadindstillinger.
- **Zoom til et område:** klik {{ui:Vindue}} i gruppen Visning, og klik to hjørner.
:::

At holde {{key:Space}} nede og trække panorerer **ikke** i CadCraft: {{key:Space}} er Enter.

Et musehjul zoomer stadig, ét trin ad gangen. En touchpad, der sender sin rulning i hele trin, ligesom et hjul, zoomer med en to-finger-rulning i stedet for at panorere: zoom ud, peg på det område, du vil have, og zoom ind igen. 3D-fanen beholder sine egne trackpad-bevægelser (se [Model i 3D](topic:3d-solids#look-around)).

## Touchskærme og tablets

CadCraft læser et finger som et museklik:

- Et tryk vælger et punkt eller et objekt, eller markerer.
- Træk et finger over tomt rum for at tegne et lasso (træk først mod højre for et vindue, først mod venstre for et krydsningsvindue; se [Lassovalg](topic:lasso-selection)).
- I {{cmd:TRIM}} og {{cmd:EXTEND}} beskærer eller forlænger et træk med et finger over stykker dem alle.
- Træk et finger på et valgt objekts greb, og grebet flytter sig (greb og pick-boks er større for et finger).
- **Knib** med to fingre for at zoome om punktet mellem dem; flyt to fingre sammen for at **panorere**. Et andet finger annullerer det første fingers handling, så et knib aldrig efterlader et mærke.
- Et **langt tryk** (hold stille i cirka et halvt sekund) er et højreklik: {{key:Enter}}. Det afslutter en kommando, afslutter et valg eller gentager den sidste kommando.

Under kommandolinjen vises en **tastrække**: {{ui:Esc}}, {{ui:Fortryd}}, {{ui:Gentag}}, de tegn et tablet-tastatur skjuler (`@` `,` `<` `'` `"` `-`), {{ui:Fang}}, {{ui:Ortogonal}}, en tastaturknap og en stor {{ui:Enter}}. Tryk på tastaturknappen (eller på kommandolinjen) for at skrive en kommando eller et tal.

Der er ingen hover, så fangemarkører vises kun, hvor dit finger er.

:::touch
Du bruger en touchskærm. Til mere end et hurtigt kig gør et tilsluttet tastatur og en mus eller trackpad CadCraft meget lettere at bruge.
:::

## Browsere

CadCraft virker ens i Chrome, Edge, Firefox og Safari, på Mac, Windows og Linux. Forskellene er små:

| Emne | Hvad du skal vide |
|---|---|
| Åbning af en DWG | Store tegninger tager nogle sekunder at læse i alle browsere; statuslinjen viser "Læser …" imens |
| Downloads | Hver browser bestemmer, hvor downloads går, og om den spørger først; se [Browsere og computere](common:browsers) |
| Åbn for at udskrive | Åbner PDF'en i en ny fane. Hvis browseren blokerer pop-ups, downloader CadCraft PDF'en i stedet |
| F7 | Firefox kan tilbyde caret-browsing; vælg Nej |
| Forlad med ikke-gemte ændringer | Hver browser viser sit eget "Forlad siden?"-spørgsmål, som CadCraft ikke kan ændre |

:::safari
I Safari kan en PDF åbnet med {{ui:Åbn for at udskrive}} vises i fanen uden at udskrive: brug **Filer**, og derefter **Udskriv**.
:::

:::firefox
Firefox kan spørge, hvad der skal ske med hver download. Vælg at gemme filen, eller ændr det én gang i Firefox' indstillinger under Downloads.
:::
