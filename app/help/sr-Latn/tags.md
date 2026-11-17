---
title: Oznake: atributi koji se koriste u specifikacijama
summary: Definiši oznaku (njenu vrstu, vrednosti koje sme da ima, blokove na koje se odnosi), postavi je na reference blokova i izlistaj reference kao specifikaciju koju možeš sačuvati kao CSV.
keywords: oznake, oznaka, atribut, specifikacija, izvlačenje podataka, svojstvo, protivpožarna otpornost, lista za izbor, referenca bloka, TAGS, csv
from: 9b90bacc
---

**Oznaka** je atribut bloka sa definicijom: koju vrstu vrednosti drži, koje vrednosti su dozvoljene i na koje blokove se odnosi. Vrednosti su obični atributi blokova, pa ih svaki drugi program čita, a {{cmd:ATTEDIT}} ih prikazuje. Nove su samo definicije, i one se čuvaju u crtežu.

## Definiši i postavi

Ukucaj {{cmd:TAGS}} i izaberi:

- {{ui:Define}}: ime (slova, cifre, razmak, `_ . -`), vrstu (`text`, `number`, `integer`, `yesno`, `length`, `angle`), dozvoljene vrednosti odvojene sa `;` (ostavi prazno za bilo koju) i imena blokova na koje se odnosi (`DOOR*` obuhvata svaki blok koji počinje sa DOOR; prazno znači svaki blok).
- {{ui:Set}}: sa izabranim referencama blokova ukucaj `FireRating=60 min; Width=850`. Vrednost van dozvoljene liste, ili vrednost koja nije broj za brojevnu oznaku, se odbija uz poruku. Jedan korak opozivanja. Blok koji nema taj atribut dobija ga kao skriven atribut.
- {{ui:sChedule}}: svaka referenca na blok na koji se oznaka odnosi, po želji grupisana po oznaci ili po imenu bloka, štampana i sačuvana kao CSV.
- {{ui:Remove}}: zaboravlja definiciju; vrednosti ostaju na referencama.

Preimenovanje oznake preimenuje njene vrednosti na svakoj referenci. Imena oznaka nisu osetljiva na velika i mala slova, kao što ni imena atributa nisu.
