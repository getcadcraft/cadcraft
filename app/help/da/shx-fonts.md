---
title: Tegn tekst i dine egne SHX-skrifttyper
summary: Giv CadCraft en mappe med SHX-skrifttyper (eller vælg filerne), og tekststilene, der navngiver dem, tegnes i dem, på skærmen og i en plot eller PDF, med stilens højde, breddefaktor og hældning.
keywords: shx, skrifttyper, skrifttype, formskrifttype, big font, bigfont, unifont, legacy, persisk, farsi, arabisk, tekststil, manglende skrifttype, skrifttype erstattet, SHXFONTS, mappe, omvendt, visuel rækkefølge, simplex, isocp
from: 14b0a4ab
---

Tegninger fra andre programmer navngiver ofte **SHX-skrifttyper** i deres tekststile, og en DWG medbringer dem ikke. Uden skrifttypen tegner CadCraft teksten i sin egen skrift, hvilket er fint for almindelig latinsk tekst, men ikke for gamle skrifttyper, der afbilder almindelige tegnkoder som andre bogstavformer, såsom ældre persisk annoteringstekst.

Giv CadCraft skrifttyperne, og den tegner teksten i dem.

## Indlæs dine skrifttyper

Skriv {{cmd:SHXFONTS}} (`SHX`), og vælg:

- {{ui:Mappe}} (CadCraft Studio): vælg en mappe. Hver `.shx`-fil i den læses nu, og igen hver gang CadCraft starter.
- {{ui:Filer}} (browseren): vælg én eller flere `.shx`-filer. De gemmes i denne browser og uploades aldrig.
- {{ui:Liste}}: de skrifttyper, der er indlæst, og dem den åbne tegning navngiver, men du ikke har indlæst.
- {{ui:Fjern}} og {{ui:Ryd}}: glem én skrifttype, eller alle.

CadCraft kan ikke medsende skrifttyper fra tredjepart, så den leverer aldrig nogen: de kommer fra dig. En tegning navngiver kun sine skrifttyper, og den gemmer ingen kopi af dem.

## Hvad der sker

En tekststils skrifttypenavn matches med en indlæst skrifttype ud fra navnet, uden hensyn til store og små bogstaver, mappen og `.shx` (`SIMPLEX.SHX` finder `simplex`). En tekst i en sådan stil tegnes som linjer, på skærmen, i en plot og i en PDF, på teksten egen plads, med sin højde, rotation, breddefaktor og skråvinkel. Dens bredde er skrifttypens egen, så {{ui:Centrum}}- og {{ui:Højre}}-justering, ombrydning og valg svarer til det, du ser. En stil, hvis skrifttype ikke er indlæst, beholder den indbyggede skrift, og når du åbner en tegning, der navngiver skrifttyper, du ikke har indlæst, siger kommandolinjen det.

Standard-stilen tæller også: en tegning, hvis Standard-stil navngiver en egen skrifttype, beholder den.

## Skrifttyper, der allerede er i visuel rækkefølge

Mange gamle persiske og arabiske SHX-skrifttyper har bogstaver, der allerede er formet til skærmen og tegnes fra venstre mod højre, så en tekst skrevet i logisk rækkefølge kommer ud baglæns. Skriv {{cmd:SHXFONTS}}, vælg {{ui:Vend om}}, og angiv skrifttypen: dens tekst lægges så ud med det sidste bogstav først. Kør det igen for at fortryde. Kontakten hører til skrifttypen, huskes i denne browser og gemmes ikke i tegningen.

## Hvad der endnu ikke er dækket

- Tekst med indlejrede formateringskoder (farver, stabler i en MTEXT) bliver i den indbyggede skrift.
- Store skrifttyper (dem med dobbelte bytes) træder til for koder, hovedskriften mangler, men en tekst i en østasiatisk kodeside, som CadCraft allerede har omsat til Unicode, bliver ikke omsat tilbage til skrifttypens dobbelte bytekoder.
- Skrifttypelæseren følger den offentliggjorte beskrivelse af formatet og er testet på skrifttyper lavet til CadCraft. Hvis en af dine tegner forkert, så send os skrifttypen og tegningen.
