---
title: Endre teksthøyden på måltilsettinger
summary: Gjør måltekst større eller mindre, både for nye mål og for dem som allerede er i tegningen.
keywords: måltekst størrelse, teksthøyde, dimtxt, dimscale, måltekst for liten, måltekst for stor, større måltekst, annoteringsmålestokk
from: 30e40633
---

## For målene du lager neste

1. Trykk {{key:Esc}} slik at ingenting er valgt. Høyre panel viser {{ui:Gjeldende innstillinger}}.
2. Rull ned i panelet til {{ui:Nye mål}}. Skriv høyden du vil ha på papiret i {{ui:Teksthøyde}} (for eksempel `2.5` for 2.5 mm, eller `3/32"`), og trykk {{key:Enter}}.
3. Sett {{ui:Samlet skala}} til plottskalaen (`50` for 1:50, `48` for 1/4" = 1'-0"). Hver størrelse multipliseres med den.

På kommandolinjen setter {{cmd:DIMTXT}} høyden, og {{cmd:DIMSCALE}} setter den samlede skalaen.

## For mål som allerede er i tegningen

1. Velg målene (ett, eller flere av dem: velg {{ui:Måltilsetting}} i listen øverst i {{ui:Egenskaper}}).
2. Skriv ny {{ui:Teksthøyde}} (i {{ui:Tekst}}-delen), eller en ny {{ui:Samlet skala}} (i {{ui:Tilpasning}}-delen lenger ned), og trykk {{key:Enter}}.

De tegnes om med en gang, i ett steg å angre. Et mål fra et annet programs fil tegnes om i CadCraft-stil så snart du endrer det.

:::tip
Tekst som ser riktig ut på skjermen, men er liten på det plottede arket, betyr vanligvis at samlet skala er 1. Sett den til arkets målestokk.
:::

Se [Angi størrelser, desimaler og skala for mål](topic:dimension-settings) for hver innstilling.
