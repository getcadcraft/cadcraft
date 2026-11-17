---
title: Tags: attributter, der fodrer lister
summary: Definér et tag (dets type, de værdier det må have, de blokke det gælder for), sæt det på blokreferencer, og opliste referencerne som en liste, du kan gemme som CSV.
keywords: tags, tag, attribut, liste, dataudtræk, egenskab, brandklasse, valgliste, blokreference, TAGS, csv
from: 9b90bacc
---

Et **tag** er en blokattribut med en definition: hvilken slags værdi den holder, hvilke værdier der er tilladt, og hvilke blokke den gælder for. Værdierne er almindelige blokattributter, så ethvert andet program læser dem, og {{cmd:ATTEDIT}} viser dem. Kun definitionerne er nye, og de gemmes i tegningen.

## Definér og sæt

Skriv {{cmd:TAGS}} og vælg:

- {{ui:Definér}}: et navn (bogstaver, cifre, mellemrum, `_ . -`), en type (`text`, `number`, `integer`, `yesno`, `length`, `angle`), de tilladte værdier adskilt med `;` (lad være tom for vilkårlige), og de bloknavne den gælder for (`DOOR*` matcher alle blokke, der starter med DOOR; tom betyder alle blokke).
- {{ui:Sæt}}: med blokreferencer valgt skriver du `FireRating=60 min; Width=850`. En værdi uden for den tilladte liste, eller ikke et tal for et talfelt, afvises og oplyses. Ét fortrydelsestrin. En blok, der ikke har attributten, får den som en skjult attribut.
- {{ui:Liste (C)}}: alle referencer til en blok, et tag gælder for, eventuelt grupperet efter et tag eller bloknavn, udskrevet og gemt som CSV.
- {{ui:Fjern}}: glemmer en definition; værdierne bliver på referencerne.

Omdøbning af et tag omdøber dets værdier på hver reference. Tagnavne skelner ikke mellem store og små bogstaver, ligesom attributnavne ikke gør.
