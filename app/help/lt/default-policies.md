---
title: "Numatytosios politikos: nustatykite, nuo ko prasideda naujas brėžinys"
summary: Vieną kartą nurodykite, kokie vienetai, ilgio formatas, tikslumas, teksto aukštis ir lapo popierius prasideda naujas brėžinys, metriniam ir coliniam darbui, ir bendrinkite politikas visame biure kaip mažą failą.
keywords: numatytasis, numatytosios, numatytosios politikos, politika, biuro standartas, biuro numatytosios reikšmės, šablonas, naujas brėžinys, vienetai, insunits, ilgio formatas, architektūrinis, tikslumas, luprec, teksto aukštis, lapo popierius, a1, bendrinti, eksportuoti, importuoti, json
from: 7b80fd13
---

## Ką darysite

Pasakykite CadCraft, nuo ko turi prasidėti naujas brėžinys, kad niekas biure neturėtų kiekvieną kartą paleisti UNITS ir keisti tų pačių dalykų. Tai priedas: jis išjungtas, kol jį įjungiate, o politika, kurios nenustatote, palieka CadCraft savo numatytąją reikšmę nepakeistą.

:::note
Tai numatytosios reikšmės **naujiems** brėžiniams ir **naujiems** lapams. Jau pradėto brėžinio nekeičia, ir atidaryto brėžinio taip pat ne.
:::

## Žingsniai

1. Atidarykite {{ui:Parametrai}}, eikite į {{ui:Priedai}} ir įjunkite {{ui:Numatytosios politikos}}.
2. Parametruose atidarykite skirtuką **CadCraft** ir kairiajame sąraše pasirinkite {{ui:Numatytosios politikos}}.
3. Nustatykite norimas politikas. Kiekviena prasideda nuo **CadCraft savo**. Politika su laukeliais **Metrinis** ir **Colinis** priima po vieną reikšmę kiekvienam brėžinio tipui; užpildykite tik reikalingus.
4. Įrašymo mygtuko nėra: kiekvienas pakeitimas įrašomas, kai jį darote.
5. Pradėkite naują brėžinį. Jis turi vienetus, ilgio formatą, tikslumą ir teksto aukštį, kuriuos nustatėte, o pirmas jo naujas lapas bus ant pasirinkto popieriaus.

## Politikos

- **Naujo brėžinio vienetai**: nėra, milimetrai, centimetrai, metrai, coliai arba pėdos.
- **Ilgio formatas** ir **Ilgio tikslumas**: tai, ką nustato UNITS komanda, naujam brėžiniui.
- **Naujo teksto aukštis**, brėžinio vienetais.
- **Naujo lapo popierius**: popierius, kurį naudoja Naujas lapas.
- **Anotacijų dydžiai popieriuje** (Parametrai › Visuotiniai › Numatytosios politikos): biuro aukščiai milimetrais, kaip spausdinama. CadCraft naudoja tą, kuris skirtas pastaboms ir žymoms: {{cmd:ANNOSCALE}} nustato, kad naujas tekstas prasidėtų nuo to aukščio anotacijų mastelyje. Žr. [Vienetai, popieriai ir mastelis](topic:units-papers-scales#annotate-by-scale).

Brėžinys coliais ar pėdomis naudoja colines reikšmes; bet koks kitas brėžinys – metrines. Brėžinys be vienetų naudoja vienetų sistemą, nustatytą Parametrai › Visuotiniai › Numatytosios politikos, o jei nenustatyta – metrinę.

## Bendrinkite biure

1. Parametruose atidarykite skirtuką **Visuotiniai** ir pasirinkite {{ui:Numatytosios politikos}}.
2. Spustelėkite {{ui:Įrašyti į failą}}. Gausite mažą failą, besibaigiantį `.ccdefaults.json`.
3. Kitame kompiuteryje įjunkite priedą, atidarykite tą pačią vietą ir spustelėkite {{ui:Įkelti iš failo}}. Failo politikos pakeičia tame kompiuteryje esančias.

Vienas failas laiko kiekvienos CadCraft programos politikas, todėl tas pats failas veikia ir BimCraft.

## Verta žinoti

- Nėra politikos lapo mastelio: naujo lapo vaizdas pritaikomas prie brėžinio, o mastelį nustatote lape.
- Nėra politikos matmenų stiliui: naujame brėžinyje nėra pavadintų matmenų stilių. Nustatykite matmenis su DIMSTYLE arba pradėkite nuo brėžinio, kuriame jie yra.
- Failas yra paprastas, atviras JSON. Politika, kurią failas nurodo, o ši versija nežino, paliekama ir nurodoma pranešime; likusios įkeliamos.
- Politikos laikomos šioje naršyklėje, o ne brėžinyje. Išjunkite priedą ir viskas vėl yra CadCraft savo.
