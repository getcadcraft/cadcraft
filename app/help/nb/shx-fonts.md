---
title: Tegn tekst med dine egne SHX-skrifter
summary: Gi CadCraft en mappe med SHX-skrifter (eller velg filene), så tegnes tekststilene som navngir dem med dem, på skjermen og i plott eller PDF, med stilens høyde, breddefaktor og skråstilling.
keywords: shx, skrifter, skrift, formskrift, storskrift, bigfont, unifont, eldre, persisk, farsi, arabisk, tekststil, manglende skrift, skrift erstattet, SHXFONTS, mappe, omvendt, visuell rekkefølge, simplex, isocp
from: 14b0a4ab
---

Tegninger fra andre programmer nevner ofte **SHX-skrifter** i sine tekststiler, og en DWG-fil inneholder ikke skriftene. Uten skriften tegner CadCraft teksten i sin egen skrift. Det er greit for vanlig latinsk tekst, men ikke for gamle skrifter som kobler vanlige tegnkoder til andre bokstavformer, slik som eldre persisk annoteringsskrift.

Gi CadCraft skriftene, så tegner den teksten i dem.

## Last inn skriftene dine

Skriv {{cmd:SHXFONTS}} (`SHX`) og velg:

- {{ui:Mappe}} (CadCraft Studio): velg en mappe. Hver `.shx`-fil i den leses nå, og igjen hver gang CadCraft starter.
- {{ui:Filer}} (nettleseren): velg én eller flere `.shx`-filer. De lagres i denne nettleseren og lastes aldri opp.
- {{ui:Liste}}: skriftene som er lastet inn, og de den åpne tegningen nevner, men som du ikke har lastet inn.
- {{ui:Fjern}} og {{ui:Tøm}}: glem én skrift, eller alle.

CadCraft kan ikke inkludere skrifter fra tredjeparter, så den leverer aldri noen: de kommer fra deg. En tegning nevner bare skriftene sine, og den beholder ingen kopi av dem.

## Hva som skjer

En tekststils skriftnavn kobles til en innlastet skrift etter navn, uten hensyn til store og små bokstaver, mappe og `.shx` (`SIMPLEX.SHX` finner `simplex`). En tekst i en slik stil tegnes som linjer, på skjermen, i en plott og i en PDF, på tekstens egen plassering, høyde, rotasjon, breddefaktor og skråvinkel. Bredden er skriftens egen, så justering til {{ui:Senter}} og {{ui:Høyre}}, brytning og valg stemmer med det du ser. En stil der skriften ikke er lastet inn, beholder den innebygde skriften. Når du åpner en tegning som nevner skrifter du ikke har lastet inn, sier kommandolinjen det.

Standard-stilen teller også med: en tegning der Standard-stilen nevner en egen skrift, beholder den.

## Skrifter allerede i visuell rekkefølge

Mange gamle persiske og arabiske SHX-skrifter har bokstaver som allerede er formet for skjermen og tegnes fra venstre til høyre. Da kommer en tekst skrevet i logisk rekkefølge ut baklengs. Skriv {{cmd:SHXFONTS}}, velg {{ui:Snu (R)}}, og navngi skriften: teksten legges da ut med siste bokstav først. Kjør det på nytt for å angre. Bryteren hører til skriften, lagres i denne nettleseren, og lagres ikke i tegningen.

## Det som ikke er dekket ennå

- Tekst med innebygde formatkoder (farger, stabler i en MTEXT) blir i den innebygde skriften.
- Storskrifter (big fonts, de tobytes-typene) fyller inn for koder som hovedskriften mangler. En tekst i en østasiatisk kodeside som CadCraft allerede har gjort om til Unicode, blir ikke tilbakeført til skriftens tobytes-koder.
- Skriftleseren følger den publiserte beskrivelsen av formatet, og er testet med skrifter laget for CadCraft. Hvis en av dine tegner feil, send oss skriften og tegningen.
