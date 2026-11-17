---
title: Promena veličine teksta kote
summary: Povećajte ili smanjite tekst kote, za nove kote i za one koje već postoje u crtežu.
keywords: veličina teksta kote, visina teksta, dimtxt, dimscale, tekst kote premali, tekst kote prevelik, veći tekst kote, razmera anotacije
from: 30e40633
---

## Za kote koje ćete napraviti sledeće

1. Pritisnite {{key:Esc}} da ništa ne bude izabrano: desni panel glasi {{ui:Trenutna podešavanja}}.
2. Pomerite panel nadole do {{ui:Nove kote}}. Ukucajte visinu koju želite na papiru u {{ui:Visina teksta}} (na primer `2.5` za 2.5 mm, ili `3/32"`) i pritisnite {{key:Enter}}.
3. Postavite {{ui:Ukupna razmera}} na razmeru štampe (`50` za 1:50, `48` za 1/4" = 1'-0"): svaka veličina se množi s njom.

U komandnoj liniji, {{cmd:DIMTXT}} postavlja visinu, a {{cmd:DIMSCALE}} ukupnu razmeru.

## Za kote koje su već u crtežu

1. Izaberite kote (jednu ili nekoliko: izaberite {{ui:Kota}} na listi na vrhu {{ui:Svojstva}}).
2. Ukucajte novu {{ui:Visina teksta}} (u odeljku {{ui:Tekst}}), ili novu {{ui:Ukupnu razmeru}} (u odeljku {{ui:Uklapanje}} niže), i pritisnite {{key:Enter}}.

Crtaju se odmah, u jednom koraku poništavanja. Kota iz datoteke drugog programa ponovo se crta u stilu CadCraft-a čim je promenite.

:::tip
Tekst koji je na ekranu u redu, a na odštampanom listu sitan, obično znači da je ukupna razmera 1: postavite je na razmeru lista.
:::

Pogledajte [Podešavanje veličina kota, decimala i razmere](topic:dimension-settings) za svako podešavanje.
