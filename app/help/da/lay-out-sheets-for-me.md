---
title: Opsæt ark for mig
summary: Læg dele af en tegning på ark automatisk: CadCraft vælger et papirformat og en standardmålestok, der passer, placerer hver del med en titel og målestokken under, og lader alt blive redigerbart.
keywords: ark, layout, layouts, papir, målestok, automatisk, AUTOSHEET, tegningshoved, viewports, navngivne visninger
from: 7f315dff
---

Vælg **Visning › Mere › Opsæt ark for mig** (eller skriv {{cmd:AUTOSHEET}}). CadCraft finder delene af din tegning (dine navngivne visninger eller de adskilte grupper i modellen), vælger et papirformat og en standardmålestok, hvor de passer, og lægger dem på nye ark med et tegningshoved, en billedtekst og målestokken under hver.

Før den kører, kan du ændre, hvad den gør: **Dele** (navngivne visninger, grupper, hele tegningen, eller lad den vælge), **Papir** (automatisk eller et format som `iso-a1`), **Målestok** (én målestok for alle, eller hver del med sin egen) og **Ark** (hvor mange dele der deler et ark).

Arkene er almindelige ark: flyt et viewport, skift dets målestok eller slet et ark som vanligt. Tryk på {{key:Ctrl+Z}} én gang for at tage alle de nye ark tilbage.

## Nøgletekster

I {{cmd:AUTOSHEET}} vælger du **Nøgletekster** for at tilføje en nummereret signaturforklaring under visningerne på hvert ark. Den lister lagene, der er tegnet i de visninger, med én nummereret linje for hvert, som almindelig tekst, du kan redigere ligesom anden tekst. Vælg **Fil** for at læse din egen nøgletekstliste (et nummer og dets ord pr. linje, adskilt med et tab, et komma eller et semikolon): et lag, hvis navn svarer til et nummer på din liste, får dets ord. Der følger ingen nøgletekstliste med programmet.
