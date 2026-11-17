---
title: Mus, styreflate og berøring
summary: Hvordan du zoomer, panorerer, høyreklikker og velger i CadCraft med en hjulmus, en styreflate på Mac eller PC, eller en berøringsskjerm, og hva som skiller nettleserne.
keywords: styreflate, touchpad, magic mouse, berøring, nettbrett, ipad, panorer, zoom, klyp, høyreklikk, to fingre, midtknapp, nettleser, chrome, firefox, safari, edge
from: 73d0954a
---

CadCraft er laget for en mus med hjul. Alt fungerer også med en styreflate, med noen vaner å lære seg. Berøringsskjermer fungerer for å velge, men med begrensninger.

## Hjulmus

- **Zoom:** rull hjulet. Tegningen zoomer om krysset, så pek på det du vil se.
- **Panorer:** hold hjulet nede og dra, eller dra med høyre knapp.
- **Zoom til alt:** dobbeltklikk hjulet, eller klikk {{ui:Utstrekning}}.
- **Tilbake til forrige visning:** klikk {{ui:Forrige}} i Visning-gruppen, eller skriv `Z`, {{key:Enter}}, `P`, {{key:Enter}}. En rekke hjulsteg teller som én visning, så ett {{ui:Forrige}} angrer den. Lagre visninger du kommer tilbake til med {{cmd:NAMEDVIEW}} (`NV`).
- **Enter:** høyreklikk.

## Styreflate

:::mac
- **Panorer:** flytt to fingre på styreflaten, i hvilken som helst retning: tegningen følger fingrene. Du kan også dra med et to-fingret klikk holdt nede (en dra med høyre knapp).
- **Zoom:** klyp med to fingre. Zoomen følger krysset.
- **Høyreklikk (Enter):** klikk med to fingre. Slå på «Sekundærklikk» i **Systeminnstillinger**, deretter **Styreflate**, hvis det ikke gjør noe. Control-klikk kan telle som et vanlig klikk i CadCraft i stedet for et høyreklikk, så bruk to-fingret klikk.
- **Zoom til et område:** klikk {{ui:Vindu}} i Visning-gruppen og klikk to hjørner.
:::

:::windows linux
- **Panorer:** flytt to fingre på styreflaten, i hvilken som helst retning: tegningen følger fingrene. Du kan også dra med høyre knapp holdt nede.
- **Zoom:** klyp med to fingre. Zoomen følger krysset.
- **Høyreklikk (Enter):** klikk med to fingre, eller klikk nedre høyre hjørne av styreflaten, avhengig av innstillingene for styreflaten.
- **Zoom til et område:** klikk {{ui:Vindu}} i Visning-gruppen og klikk to hjørner.
:::

Å holde {{key:Space}} nede og dra panorerer **ikke** i CadCraft: {{key:Space}} er Enter.

Et hjul på musen zoomer fortsatt, ett steg om gangen. En styreflate som sender rulling i hele steg, slik et hjul gjør, zoomer med rulling med to fingre i stedet for å panorere: zoom ut, pek på området du vil ha, og zoom inn igjen. 3D-fanen beholder sine egne styreflatebevegelser (se [Modell i 3D](topic:3d-solids#look-around)).

## Berøringsskjermer og nettbrett

CadCraft leser en finger som et musklikk:

- Et trykk velger et punkt eller et objekt, eller markerer.
- Å dra en finger over tomt område tegner et lasso (dra først mot høyre for et vindu, først mot venstre for et kryss; se [Lassovalg](topic:lasso-selection)).
- I {{cmd:TRIM}} og {{cmd:EXTEND}} trimmer eller forlenger du dem alle ved å dra en finger gjennom dem.
- Å dra et valgt objekts håndtak flytter håndtaket (håndtak og plukkeboks er større for en finger).
- **Klyp** med to fingre for å zoome om punktet mellom dem; flytt to fingre sammen for å **panorere**. En andre finger avbryter det den første startet, så en klyping aldri etterlater noe merke.
- Et **langt trykk** (hold stille i omtrent et halvt sekund) er et høyreklikk: {{key:Enter}}. Det avslutter en kommando, fullfører et valg, eller gjentar forrige kommando.

Under kommandolinjen vises en **tastrad**: {{ui:Esc}}, Angre, Gjør om, tegnene som et nettbrettastatur skjuler (`@` `,` `<` `'` `"` `-`), {{ui:Fang}}, {{ui:Ortho}}, en tastaturknapp, og en stor {{ui:Enter}}. Trykk tastaturknappen (eller kommandolinjen) for å skrive en kommando eller et tall.

Det finnes ingen sveving, så fangmarkørene vises bare der fingeren er.

:::touch
Du bruker en berøringsskjerm. For mer enn et raskt blikk gjør et tilkoblet tastatur og en mus eller styreflate CadCraft mye enklere å bruke.
:::

## Nettlesere

CadCraft fungerer likt i Chrome, Edge, Firefox og Safari, på Mac, Windows og Linux. Forskjellene er små:

| Tema | Det du bør vite |
|---|---|
| Åpne en DWG | Store tegninger bruker noen sekunder på å leses i alle nettlesere; statuslinjen viser «Leser …» imens |
| Nedlastinger | Hver nettleser bestemmer hvor nedlastinger havner og om den spør først; se [Nettlesere og datamaskiner](common:browsers) |
| Åpne for utskrift | Åpner PDF-en i en ny fane. Hvis nettleseren blokkerer popup-vinduer, laster CadCraft ned PDF-en i stedet |
| F7 | Firefox kan tilby markørnavigering; velg Nei |
| Forlate med ulagrede endringer | Hver nettleser viser sitt eget «Forlate siden?»-spørsmål, som CadCraft ikke kan endre |

:::safari
I Safari kan en PDF åpnet med {{ui:Åpne for utskrift}} vises i fanen uten å skrive ut: bruk **Arkiv**, deretter **Skriv ut**.
:::

:::firefox
Firefox kan spørre hva den skal gjøre med hver nedlasting. Velg å lagre filen, eller endre dette én gang i Firefox-innstillingene under Nedlastinger.
:::
