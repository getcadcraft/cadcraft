---
title: Promjena veličine teksta kote
summary: Povećajte ili smanjite tekst kote, za nove kote i za one koje su već u crtežu.
keywords: veličina teksta kote, dimension text size, visina teksta, text height, dimtxt, dimscale, tekst kote premali, dimension text too small, tekst kote prevelik, dimension text too big, veći tekst kote, bigger dimension text, razmjera anotacija, annotation scale
from: 30e40633
---

## Za kote koje ćete napraviti sljedeće

1. Pritisnite {{key:Esc}} da ništa ne bude odabrano: desni panel prikazuje {{ui:Current settings}}.
2. Pomjerajte se niz panel do {{ui:New dimensions}}. Upišite visinu koju želite na papiru u {{ui:Text height}} (na primjer `2.5` za 2,5 mm, ili `3/32"`) i pritisnite {{key:Enter}}.
3. Postavite {{ui:Overall scale}} na razmjeru štampe (`50` za 1:50, `48` za 1/4" = 1'-0"): svaka veličina se množi s njom.

U komandnoj liniji, {{cmd:DIMTXT}} postavlja visinu, a {{cmd:DIMSCALE}} opštu razmjeru.

## Za kote koje su već u crtežu

1. Odaberite kote (jednu, ili nekoliko: izaberite {{ui:Dimension}} na listi na vrhu {{ui:Properties}}).
2. Upišite novu {{ui:Text height}} (u odjeljku {{ui:Text}}), ili novu {{ui:Overall scale}} (u odjeljku {{ui:Fit}} niže), i pritisnite {{key:Enter}}.

Crtaju se ponovo odmah, u jednom koraku poništavanja. Kota iz datoteke drugog programa se ponovo crta u stilu CadCraft-a čim je promijenite.

:::tip
Tekst koji je na ekranu u redu, a na štampanom listu je sićušan, obično znači da je opšta razmjera 1: postavite je na razmjeru lista.
:::

Pogledajte [Podešavanje veličina kota, decimala i razmjere](topic:dimension-settings) za svaku postavku.
