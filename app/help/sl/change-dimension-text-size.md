---
title: Sprememba velikosti besedila kote
summary: Povečajte ali pomanjšajte besedilo kot, za nove kote in za tiste, ki so že v risbi.
keywords: velikost besedila kote, višina besedila, dimtxt, dimscale, besedilo kote premajhno, besedilo kote preveliko, večje besedilo kote, merilo označevanja
from: 30e40633
---

## Za kote, ki jih boste naredili naslednje

1. Pritisnite {{key:Esc}}, da nič ni izbrano: desno podokno prikazuje {{ui:Current settings}}.
2. Pomaknite se po podoknu do {{ui:New dimensions}}. V {{ui:Text height}} vnesite višino, ki jo želite na papirju (npr. `2.5` za 2.5 mm ali `3/32"`), in pritisnite {{key:Enter}}.
3. Nastavite {{ui:Overall scale}} na merilo izrisa (`50` za 1:50, `48` za 1/4" = 1'-0"): vsaka velikost se pomnoži z njim.

V ukazni vrstici {{cmd:DIMTXT}} nastavi višino, {{cmd:DIMSCALE}} pa skupno merilo.

## Za kote, ki so že v risbi

1. Izberite kote (eno ali več: v seznamu na vrhu {{ui:Properties}} izberite {{ui:Dimension}}).
2. Vnesite nov {{ui:Text height}} (v razdelku {{ui:Text}}) ali nov {{ui:Overall scale}} (v razdelku {{ui:Fit}} nižje) in pritisnite {{key:Enter}}.

Narišejo se takoj, v enem koraku razveljavitve. Kota iz datoteke drugega programa se ob spremembi nariše v slogu CadCraft.

:::tip
Besedilo, ki je na zaslonu pravo, na izrisanem listu pa drobno, ponavadi pomeni, da je skupno merilo 1: nastavite ga na merilo lista.
:::

Glejte [Nastavitev velikosti, decimalnih mest in merila kot](topic:dimension-settings) za vse nastavitve.
