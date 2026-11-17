---
title: Oznake: atributi koji hrane specifikacije
summary: Definiši oznaku (njenu vrstu, vrijednosti koje može imati i blokove na koje se primjenjuje), postavi je na reference blokova i prikaži reference kao specifikaciju koju možeš sačuvati kao CSV.
keywords: oznake, oznaka, atribut, specifikacija, izvlačenje podataka, svojstvo, ocjena otpornosti na vatru, lista izbora, referenca bloka, TAGS, csv
from: 9b90bacc
---

**Oznaka** je atribut bloka sa definicijom: kakvu vrijednost čuva, koje vrijednosti su dozvoljene i na koje blokove se primjenjuje. Vrijednosti su obični atributi bloka, pa ih svaki drugi program čita, a {{cmd:ATTEDIT}} ih prikazuje. Nove su samo definicije, i čuvaju se u crtežu.

## Definiši i postavi

Upiši {{cmd:TAGS}} i izaberi:

- {{ui:Definiši}}: naziv (slova, cifre, razmak, `_ . -`), vrstu (`text`, `number`, `integer`, `yesno`, `length`, `angle`), dozvoljene vrijednosti odvojene sa `;` (ostavi prazno za bilo koju), i nazive blokova na koje se primjenjuje (`DOOR*` odgovara svakom bloku koji počinje sa DOOR; prazno znači svaki blok).
- {{ui:Set}}: sa odabranim referencama blokova upiši `FireRating=60 min; Width=850`. Vrijednost van dozvoljene liste, ili broj koji nije broj za numeričku oznaku, se odbija i kaže se zašto. Jedan korak poništavanja. Blok koji nema atribut dobija ga kao skriveni atribut.
- {{ui:Specifikacija}} (C): svaka referenca na blok na koji se oznaka primjenjuje, po želji grupisana po oznaci ili po nazivu bloka, ispisana i sačuvana kao CSV.
- {{ui:Ukloni}}: zaboravlja definiciju; vrijednosti ostaju na referencama.

Preimenovanje oznake preimenuje njene vrijednosti na svakoj referenci. Nazivi oznaka ne prave razliku između velikih i malih slova, kao što ni nazivi atributa.
