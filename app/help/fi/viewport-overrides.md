---
title: Näkymäruudun luokkaohitukset
summary: Piirustusarkilla piilota luokka tai anna sille toinen väri, viivanpaksuus tai täyttö vain yhdessä näkymäruudussa; malli ja muut näkymäruudut pysyvät ennallaan.
keywords: näkymäruutu, luokkaohitus, näkymäruudun ohitus, piilota luokka näkymäruudussa, arkki, asettelu, VPLAYER, plotti, Vectorworks
from: c1a2b51f
---

Piirustusarkki näyttää usein saman mallin useammin kuin kerran: pohjapiirros huonekaluineen ja ilman niitä tai valaistussuunnitelma, jossa vain valaisimet ovat värillisiä. Näkymäruudun luokkaohitus muuttaa sitä, miten yksi [luokka](topic:classes) näkyy **vain tässä näkymäruudussa**.

1. Avaa arkki ja valitse yksi näkymäruutu.
2. Avaa Luokat-paneeli (`CLASSES`) ja valitse luokka.
3. Kohdassa {{ui:Tämä näkymäruutu}} ruksaa {{ui:Piilota tässä näkymäruudussa}}, tai aseta {{ui:Väri täällä}}, {{ui:Viivanpaksuus täällä}} tai {{ui:Täyttö täällä}}.

Alla oleva luettelo näyttää kaikki luokat, joita tämä näkymäruutu muuttaa. {{ui:Tyhjennä tämän näkymäruudun ohitukset}} poistaa ne kaikki. Jokainen muutos on yksi kumoamisvaihe.

## Mitä ohitus muuttaa

- **Piilota** piilottaa luokan ja kaikki sen alla olevat luokat tässä näkymäruudussa.
- **Väri, viivanpaksuus ja täyttö** muuttavat luokan kohteita, joiden arvoa ei ole asetettu kohteeseen itseensä, eli kohteita, jotka perivät sen luokan tai tason mukaan. Kohde, jolla on oma väri, säilyttää sen, samoin kuin näkymäruudun tasoohituksella.

Ohitukset näkyvät näytöllä sekä plotteissa ja PDF-tiedostoissa, myös PDF-tiedostoksi julkaistussa arkkisarjassa. Ne toimivat yhdessä näkymäruudun jäädytettyjen tasojen ja tasoohitusten kanssa.

Ohitukset tallentuvat piirustukseen DWG- ja DXF-muodossa (luokkaluettelon kanssa lohkossa `CADCRAFT_CLASSES`) ja palautuvat samaan näkymäruutuun, kun tiedosto avataan CadCraftissa.
