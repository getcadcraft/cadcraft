---
title: Ændr størrelse på målsætningsteksten
summary: Gør målsætningsteksten større eller mindre, både for nye målsætninger og for dem der allerede er i tegningen.
keywords: målsætningstekst størrelse, teksthøjde, dimtxt, dimscale, målsætningstekst for lille, målsætningstekst for stor, større målsætningstekst, annoteringsskala
from: 30e40633
---

## For de målsætninger du laver næste gang

1. Tryk {{key:Esc}}, så intet er valgt: højre panel viser {{ui:Aktuelle indstillinger}}.
2. Rul ned i panelet til {{ui:Nye målsætninger}}. Skriv den højde du vil have på papiret i {{ui:Teksthøjde}} (f.eks. `2.5` for 2.5 mm, eller `3/32"`), og tryk {{key:Enter}}.
3. Sæt {{ui:Samlet skala}} til plotskalaen (`50` for 1:50, `48` for 1/4" = 1'-0"): hver størrelse ganges med den.

På kommandolinjen sætter {{cmd:DIMTXT}} højden, og {{cmd:DIMSCALE}} sætter den samlede skala.

## For målsætninger der allerede er i tegningen

1. Vælg målsætningerne (én, eller flere: vælg {{ui:Målsætning}} i listen øverst i Egenskaber).
2. Skriv ny {{ui:Teksthøjde}} (i sektionen {{ui:Tekst}}), eller en ny {{ui:Samlet skala}} (i sektionen {{ui:Tilpasning}} længere nede), og tryk {{key:Enter}}.

De tegnes om med det samme, i ét fortryd-trin. En målsætning fra et andet programs fil tegnes om i CadCraft-stil så snart du ændrer den.

:::tip
Tekst der er rigtig på skærmen, men lille på det plottede ark, skyldes normalt at den samlede skala er 1. Sæt den til arkets skala.
:::

Se [Angiv målsætningsstørrelser, decimaler og skala](topic:dimension-settings) for alle indstillinger.
