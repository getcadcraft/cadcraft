---
title: Promjena veličine teksta kote
summary: Povećajte ili smanjite tekst kote, za nove kote i za one koje su već u crtežu.
keywords: veličina teksta kote, visina teksta, dimtxt, dimscale, tekst kote premalen, tekst kote prevelik, veći tekst kote, mjerilo anotacije
from: 30e40633
---

## Za kote koje ćete sljedeće izraditi

1. Pritisnite {{key:Esc}} da ništa nije odabrano: desni panel prikazuje {{ui:Trenutne postavke}}.
2. Pomaknite panel prema dolje do {{ui:Nove kote}}. Upišite visinu koju želite na papiru u {{ui:Visina teksta}} (npr. `2.5` za 2.5 mm ili `3/32"`) i pritisnite {{key:Enter}}.
3. Postavite {{ui:Ukupno mjerilo}} na mjerilo ispisa (`50` za 1:50, `48` za 1/4" = 1'-0"): svaka veličina se množi s njim.

Na redu naredbi, {{cmd:DIMTXT}} postavlja visinu, a {{cmd:DIMSCALE}} ukupno mjerilo.

## Za kote koje su već u crtežu

1. Odaberite kote (jednu ili više: odaberite {{ui:Kota}} na popisu na vrhu {{ui:Svojstva}}).
2. Upišite novu {{ui:Visina teksta}} (u odjeljku {{ui:Tekst}}), ili novo {{ui:Ukupno mjerilo}} (u odjeljku {{ui:Prilagodba}} niže), i pritisnite {{key:Enter}}.

Ponovno se crtaju odmah, u jednom koraku poništavanja. Kota iz datoteke drugog programa ponovno se crta u CadCraft stilu čim je promijenite.

:::tip
Tekst koji je na zaslonu ispravan, a na ispisanom listu sitan, obično znači da je ukupno mjerilo 1: postavite ga na mjerilo lista.
:::

Vidi [Postavljanje veličina kota, decimala i mjerila](topic:dimension-settings) za svaku postavku.
