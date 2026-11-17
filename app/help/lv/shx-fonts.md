---
title: Teksta rakstīšana ar jūsu SHX fontiem
summary: Dodiet CadCraft SHX fontu mapi (vai izvēlieties failus), un teksta stili, kas tos nosauc, tiek zīmēti ar tiem ekrānā, drukā un PDF, ar stila augstumu, platuma koeficientu un slīpumu.
keywords: shx, fonti, font, formas fonts, lielais fonts, bigfont, unifont, vecais, persiešu, farsi, arābu, teksta stils, trūkstošs fonts, aizstāts fonts, SHXFONTS, mape, pagriezt, vizuālā kārtība, simplex, isocp
from: 14b0a4ab
---

Zīmējumi no citām programmām bieži nosauc **SHX fontus** savos teksta stilos, un DWG tos nesatur. Bez fonta CadCraft zīmē šo tekstu savā fontā, kas ir labi parastam latīņu tekstam, bet nav piemērots vecajiem fontiem, kas parastos rakstzīmju kodus attēlo kā citas burtu formas, piemēram, vecajām persiešu anotācijām.

Dodiet CadCraft fontus, un tas zīmēs tekstu ar tiem.

## Ielādējiet savus fontus

Ierakstiet {{cmd:SHXFONTS}} (`SHX`) un izvēlieties:

- {{ui:Mape}} (CadCraft Studio): izvēlieties mapi. Katrs `.shx` fails tajā tiek nolasīts tagad un katru reizi, kad CadCraft startē.
- {{ui:Faili}} (pārlūkprogramma): izvēlieties vienu vai vairākus `.shx` failus. Tie tiek saglabāti šajā pārlūkprogrammā un nekad netiek augšupielādēti.
- {{ui:Saraksts (L)}}: ielādētie fonti un tie, ko atvērtais zīmējums nosauc, bet jūs neesat ielādējis.
- {{ui:Noņemt}} un {{ui:Notīrīt}}: aizmirst vienu fontu vai visus.

CadCraft nevar iekļaut trešo pušu fontus, tāpēc tos nekad nepiegādā: tie nāk no jums. Zīmējums tikai nosauc savus fontus un nesaglabā to kopijas.

## Kas notiek

Teksta stila fonta nosaukums tiek saskaņots ar ielādētu fontu pēc tā nosaukuma, neņemot vērā lielos un mazos burtus, mapi un `.shx` (`SIMPLEX.SHX` atrod `simplex`). Teksts šādā stilā tiek zīmēts līnijās ekrānā, drukā un PDF, tieši tur, kur atrodas teksts, ar tā augstumu, pagriezienu, platuma koeficientu un slīpuma leņķi. Tā platums ir paša fonta, tāpēc {{ui:Centrs}} un {{ui:Pa labi}} līdzinājums, pārnešana rindās un izvēle atbilst tam, ko redzat. Stils, kura fonts nav ielādēts, saglabā iebūvēto fontu, un, atverot zīmējumu, kas nosauc fontus, kurus neesat ielādējis, komandrinda to saka.

Arī stils Standard tiek ņemts vērā: zīmējums, kura stils Standard nosauc savu fontu, to saglabā.

## Fonti jau vizuālā kārtībā

Daudzi vecie persiešu un arābu SHX fonti satur burtus, kas jau veidoti ekrānam un zīmēti no kreisās uz labo, tāpēc teksts, kas ierakstīts loģiskā kārtībā, parādās atpakaļ. Ierakstiet {{cmd:SHXFONTS}}, izvēlieties {{ui:Pagriezt}} un nosauciet fontu: tā teksts tiek izkārtots ar pēdējo burtu pirmo. Palaidiet vēlreiz, lai to atsauktu. Slēdzis pieder fontam, tiek saglabāts šajā pārlūkprogrammā un zīmējumā netiek saglabāts.

## Kas vēl nav aptvērts

- Teksts ar iekšējiem formatēšanas kodiem (krāsām, kaudzēm MTEXT) paliek iebūvētajā fontā.
- Lielie fonti (divbaitu tipa) aizpilda kodus, kuru galvenajam fontam trūkst, bet teksts austrumāziešu kodu lappusē, ko CadCraft jau ir pārvērtis Unicode, netiek atpakaļ kartēts uz fonta divbaitu kodiem.
- Fonta lasītājs seko publicētam formāta aprakstam un tika pārbaudīts ar fontiem, kas veidoti CadCraft. Ja kāds no jūsu fontiem zīmējas nepareizi, nosūtiet mums fontu un zīmējumu.
