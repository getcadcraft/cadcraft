---
title: Tegn med koordinater
summary: Tegn en nøjagtig gulvkontur ved at skrive absolutte, relative og polære koordinater og ved direkte afstandsindtastning.
keywords: linje, pline, polylinje, koordinater, relativ, polar, absolut, direkte afstand, @, indtastning af punkter, præcis, ortogonal
from: 19e82350
---

## Hvad du skal lave

Konturen af et L-formet rum, 6000 gange 4500 med en udskæring på 2000 gange 1500, tegnet præcist, plus en væg i 30 grader. Du bruger alle fire måder at skrive et punkt på. Arbejd i millimeter: én tegnenhed står for én millimeter.

Hurtigreferencen for alle formater findes i [Koordinat- og afstandsindtastning](topic:coordinate-entry).

## Før du begynder

1. Åbn CadCraft. Hvis en tegning er åben, klik først på {{ui:Ny}}.
2. Tryk {{key:Esc}}, så intet er valgt. Højre panel viser {{ui:Aktuelle indstillinger}}.
3. Sæt {{ui:Enheder}} til {{ui:Millimeter}}. Intet ændres i størrelse; dette fortæller kun ark og plots, hvad en enhed betyder.

## Absolutte koordinater: det første punkt

En absolut koordinat er en position målt fra origo, skrevet som `x,y`.

1. Skriv `L` og tryk {{key:Enter}}. Ledeteksten lyder `Specify first point:`.
2. Skriv `0,0` og tryk {{key:Enter}}.

Linjen trækker nu fra origo til krydset. Koordinaterne i statuslinjen viser afstanden og vinklen fra startpunktet, mens du bevæger dig.

## Relative koordinater: @dx,dy

En relativ koordinat skrives som `@dx,dy`: så langt hen tværs, så langt op, fra det sidste punkt. Negative tal går til venstre eller ned.

3. Skriv `@6000,0` og tryk {{key:Enter}}. En 6000-linje går mod højre.
4. Skriv `@0,3000` og tryk {{key:Enter}}.
5. Skriv `@-2000,0` og tryk {{key:Enter}}.
6. Skriv `@0,1500` og tryk {{key:Enter}}.

Du bør se fire forbundne linjer, der stiger op ad rummets højre side.

## Direkte afstandsindtastning: et enkelt tal

Når du skriver et enkelt tal, går CadCraft den afstand i krydsets retning. Slå Ortogonal til, så retningen fastlåses til vandret eller lodret.

7. Tryk {{key:F8}}, eller klik på {{ui:Ortogonal}} i statuslinjen. Statuslinjen siger »Ortogonal tændt«.
8. Flyt krydset til venstre for det sidste punkt. Gummibåndet bliver vandret.
9. Skriv `4000` og tryk {{key:Enter}}. Linjen går 4000 til venstre.
10. Flyt krydset under det sidste punkt.
11. Skriv `4500` og tryk {{key:Enter}}. Du er tilbage ved startpunktet.
12. Tryk {{key:Enter}} på den tomme ledetekst for at afslutte kommandoen.

:::mac
F8 kan styre medieafspilning på et Mac-tastatur. Hold **fn** nede og tryk på F8, eller klik på {{ui:Ortogonal}}. Se [Taster, mus og trackpads](common:keys).
:::

Du har nu en lukket L-formet kontur af seks adskilte linjer.

13. Klik på {{ui:Udstrækning}} for at se det hele.

## Polære koordinater: @afstand<vinkel

En polær koordinat skrives som `@afstand<vinkel`. Vinkler er i grader, målt mod uret fra den positive X-retning: 0 er højre, 90 er op, 180 er venstre, 270 (eller -90) er ned.

14. Skriv `L` og tryk {{key:Enter}}.
15. Skriv `6000,0` og tryk {{key:Enter}} for at starte i det nederste højre hjørne.
16. Skriv `@2500<-30` og tryk {{key:Enter}}. En 2500-linje går fra hjørnet, nedad og mod højre i 30 grader under vandret.
17. Tryk {{key:Enter}} for at afslutte kommandoen.

En polær koordinat uden `@`, såsom `2500<30`, måles fra origo i stedet for fra det sidste punkt.

## Den samme kontur som én polylinje

Seks adskilte linjer er fine til mange opgaver, men en polylinje er ét objekt: den forskydes, måles og vælges som en helhed. Brug {{cmd:PLINE}} med samme indtastning.

1. Skriv `PL` og tryk {{key:Enter}}.
2. Skriv `0,-6000` og tryk {{key:Enter}} for at starte under den første kontur.
3. Skriv `@6000,0`, og tryk derefter {{key:Enter}}.
4. Skriv `@0,3000`, og tryk derefter {{key:Enter}}.
5. Skriv `@-2000,0`, og tryk derefter {{key:Enter}}.
6. Skriv `@0,1500`, og tryk derefter {{key:Enter}}.
7. Skriv `@-4000,0`, og tryk derefter {{key:Enter}}.
8. Skriv `C` og tryk {{key:Enter}}. Polylinjen lukkes, og kommandoen afsluttes.
9. Klik på den nye kontur. Højre panel viser »Polylinje«, dens {{ui:Hjørnepunkter}}, {{ui:Længde}} og, fordi den er lukket, dens {{ui:Areal}}.

Arealet bør vise 24000000 (kvadratmillimeter, hvilket er 24 kvadratmeter).

## Tilvalg under tegning

- I {{cmd:LINE}} og {{cmd:PLINE}} skriver du `U` og trykker {{key:Enter}} for at tage det sidste segment tilbage uden at forlade kommandoen.
- I {{cmd:LINE}} lukker `C` tilbage til det første punkt, når der er mindst to segmenter.
- I {{cmd:PLINE}} skifter `A` til bue-segmenter (hver bue fortsætter glat fra segmentet før), og `L` skifter tilbage til linjer. I buetilstand er lukkemuligheden `CL`.
- Tryk {{key:Enter}} ved `Specify first point:` i {{cmd:LINE}} for at starte fra det sidste punkt du angav, så du kan fortsætte, hvor du slap.

## Almindelige fejl

- **Du skriver `6000,0`, når du mente `@6000,0`.** Uden `@` måles punktet fra origo, ikke fra det sidste punkt, så linjen skyder af sted et uventet sted. I CadCraft er `x,y` altid absolut. Tryk `U` og {{key:Enter}} for at tage det tilbage.
- **Et komma skrevet som decimaltegn.** Decimaler skrives med punktum: `1250.5`. Et komma adskiller altid X fra Y.
- **Den direkte afstand gik den forkerte vej.** Et enkelt tal følger krydset. Flyt krydset til den side du vil have, før du trykker {{key:Enter}}, og slå {{ui:Ortogonal}} til for lige linjer.
- **»Point or option keyword required.«** Der kræves et punkt eller et tilvalgsnøgleord. CadCraft forstod ikke hvad du skrev. Tjek for mellemrum inde i tallet eller et manglende komma, og skriv det igen.
- **Fod og tommer.** CadCraft læser kun almindelige tal. Skriv `150` for 12'-6" i en tomme-tegning, eller `12.5` i en fod-tegning.
