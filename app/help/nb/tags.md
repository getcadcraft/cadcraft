---
title: Etiketter: attributter som mater tabeller
summary: Definer en etikett (type, verdiene den kan ha, blokkene den gjelder for), sett den på blokkreferanser, og list referansene som en tabell du kan lagre som CSV.
keywords: etiketter, etikett, attributt, tabell, datauttrekk, egenskap, brannklasse, valgliste, blokkreferanse, TAGS, csv
from: 9b90bacc
---

En **etikett** er et blokkattributt med en definisjon: hvilken type verdi den har, hvilke verdier som er tillatt, og hvilke blokker den gjelder for. Verdiene er vanlige blokkattributter, så ethvert annet program kan lese dem, og {{cmd:ATTEDIT}} viser dem. Bare definisjonene er nye, og de lagres i tegningen.

## Definer og sett

Skriv {{cmd:TAGS}} og velg:

- {{ui:Definer}}: et navn (bokstaver, siffer, mellomrom, `_ . -`), en type (`text`, `number`, `integer`, `yesno`, `length`, `angle`), de tillatte verdiene skilt med `;` (la stå tomt for alle), og blocknavnene den gjelder for (`DOOR*` treffer alle blokker som starter med DOOR; tomt betyr alle blokker).
- {{ui:Sett}}: med blokkreferanser valgt, skriv `FireRating=60 min; Width=850`. En verdi utenfor den tillatte listen, eller ikke et tall for en tallmerket, avvises, og det sies fra. Ett angrettrinn. En blokk som ikke har attributtet, får det som et skjult attributt.
- {{ui:Tabell}}: hver referanse til en blokk en etikett gjelder for, eventuelt gruppert etter en etikett eller blocknavn, skrevet ut og lagret som CSV.
- {{ui:Fjern}}: glemmer en definisjon; verdiene blir på referansene.

Å gi en etikett nytt navn gir nytt navn til verdiene på hver referanse. Etikettnavn skiller ikke mellom store og små bokstaver, slik attributtnavn heller ikke gjør.
