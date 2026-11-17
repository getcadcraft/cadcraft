---
title: Tegn med koordinater
summary: Tegn en eksakt gulvkontur ved å skrive absolutte, relative og polare koordinater, og ved direkte avstandsinnlegging.
keywords: linje, pline, polylinje, koordinater, relativ, polar, absolutt, direkte avstand, @, skrive punkter, eksakt, ortho
from: 19e82350
---

## Hva du skal lage

Konturen av et L-formet rom, 6000 på 4500 med et utsnitt på 2000 på 1500, tegnet eksakt, pluss en vegg i 30 grader. Du bruker alle fire måtene å skrive et punkt på. Arbeid i millimeter: én tegneenhet tilsvarer én millimeter.

Hurtigreferansen for alle formater finner du i [Koordinat- og avstandsinnlegging](topic:coordinate-entry).

## Før du begynner

1. Åpne CadCraft. Hvis en tegning er åpen, klikk {{ui:Ny}} først.
2. Trykk {{key:Esc}} slik at ingenting er valgt. Høyre panel viser {{ui:Gjeldende innstillinger}}.
3. Sett {{ui:Enheter}} til {{ui:Millimeter}}. Ingenting endres i størrelse; dette forteller bare ark og utskrifter hva en enhet betyr.

## Absolutte koordinater: det første punktet

En absolutt koordinat er en posisjon målt fra origo, skrevet som `x,y`.

1. Skriv `L` og trykk {{key:Enter}}. Ledeteksten lyder `Specify first point:`.
2. Skriv `0,0` og trykk {{key:Enter}}.

Linjen følger nå krysset fra origo, som et gummibånd. Koordinatene i statuslinjen viser avstanden og vinkelen fra startpunktet mens du beveger deg.

## Relative koordinater: @dx,dy

En relativ koordinat skrives som `@dx,dy`: så langt bortover, så langt opp, fra det siste punktet. Negative tall går til venstre eller nedover.

3. Skriv `@6000,0` og trykk {{key:Enter}}. En linje på 6000 går til høyre.
4. Skriv `@0,3000` og trykk {{key:Enter}}.
5. Skriv `@-2000,0` og trykk {{key:Enter}}.
6. Skriv `@0,1500` og trykk {{key:Enter}}.

Du bør se fire sammenhengende linjer som stiger opp langs høyre side av rommet.

## Direkte avstandsinnlegging: et enkelt tall

Når du skriver ett enkelt tall, går CadCraft den avstanden i retningen til krysset. Slå på Ortho slik at retningen låser seg til horisontal eller vertikal.

7. Trykk {{key:F8}}, eller klikk {{ui:Ortho}} i statuslinjen. Statuslinjen sier «Ortho på».
8. Flytt krysset til venstre for det siste punktet. Gummibåndet forblir horisontalt.
9. Skriv `4000` og trykk {{key:Enter}}. Linjen går 4000 til venstre.
10. Flytt krysset under det siste punktet.
11. Skriv `4500` og trykk {{key:Enter}}. Du er tilbake i startpunktet.
12. Trykk {{key:Enter}} på den tomme ledeteksten for å avslutte kommandoen.

:::mac
F8 kan styre avspilling av medier på et Mac-tastatur. Hold **fn** og trykk F8, eller klikk {{ui:Ortho}}. Se [Taster, mus og styreflater](common:keys).
:::

Du har nå en lukket L-formet kontur laget av seks separate linjer.

13. Klikk {{ui:Utstrekning}} for å se alt.

## Polare koordinater: @avstand<vinkel

En polar koordinat skrives som `@avstand<vinkel`. Vinkler er i grader, målt mot klokken fra den positive X-retningen: 0 er høyre, 90 er opp, 180 er venstre, 270 (eller -90) er ned.

14. Skriv `L` og trykk {{key:Enter}}.
15. Skriv `6000,0` og trykk {{key:Enter}} for å starte i nedre høyre hjørne.
16. Skriv `@2500<-30` og trykk {{key:Enter}}. En linje på 2500 går ut fra hjørnet, nedover og til høyre i 30 grader under horisontalen.
17. Trykk {{key:Enter}} for å avslutte kommandoen.

En polar koordinat uten `@`, som `2500<30`, måles fra origo i stedet for fra det siste punktet.

## Den samme konturen som én polylinje

Seks separate linjer er greit for mange oppgaver, men en polylinje er ett objekt: den forskyves, måles og velges som en helhet. Bruk {{cmd:PLINE}} med samme inntasting.

1. Skriv `PL` og trykk {{key:Enter}}.
2. Skriv `0,-6000` og trykk {{key:Enter}} for å starte under den første konturen.
3. Skriv `@6000,0`, og trykk deretter {{key:Enter}}.
4. Skriv `@0,3000`, og trykk deretter {{key:Enter}}.
5. Skriv `@-2000,0`, og trykk deretter {{key:Enter}}.
6. Skriv `@0,1500`, og trykk deretter {{key:Enter}}.
7. Skriv `@-4000,0`, og trykk deretter {{key:Enter}}.
8. Skriv `C` og trykk {{key:Enter}}. Polylinjen lukkes og kommandoen avsluttes.
9. Klikk på den nye konturen. Høyre panel viser «Polylinje», dens {{ui:Hjørnepunkter}}, {{ui:Lengde}} og, fordi den er lukket, dens {{ui:Areal}}.

Arealet skal vise 24000000 (kvadratmillimeter, som er 24 kvadratmeter).

## Alternativer under tegning

- I {{cmd:LINE}} og {{cmd:PLINE}} skriver du `U` og trykker {{key:Enter}} for å ta tilbake siste segment uten å forlate kommandoen.
- I {{cmd:LINE}} lukker `C` tilbake til første punkt når det finnes minst to segmenter.
- I {{cmd:PLINE}} bytter `A` til buesegmenter (hver bue fortsetter jevnt fra segmentet før), og `L` bytter tilbake til linjer. I bue-modus er lukkealternativet `CL`.
- Å trykke {{key:Enter}} ved `Specify first point:` i {{cmd:LINE}} starter fra det siste punktet du ga, slik at du kan fortsette der du stoppet.

## Vanlige feil

- **Du skriver `6000,0` når du mente `@6000,0`.** Uten `@` måles punktet fra origo, ikke fra det siste punktet, så linjen går til et uventet sted. I CadCraft er `x,y` alltid absolutt. Trykk `U` og {{key:Enter}} for å ta den tilbake.
- **Et komma skrevet som desimalpunktum.** Desimaler skrives med punktum: `1250.5`. Et komma skiller alltid X fra Y.
- **Den direkte avstanden gikk feil vei.** Et enkelt tall følger krysset. Flytt krysset til siden du vil ha før du trykker {{key:Enter}}, og slå på {{ui:Ortho}} for rette linjer.
- **«Punkt eller alternativnøkkelord kreves.»** CadCraft forsto ikke det du skrev. Sjekk for mellomrom inne i tallet eller en manglende komma, og skriv det på nytt.
- **Fot og tommer.** CadCraft leser bare vanlige tall. Skriv `150` for 12'-6" i en tommetegning, eller `12.5` i en fottegning.
