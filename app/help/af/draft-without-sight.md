---
title: Teken sonder sig
summary: Skakel Toegang aan en CadCraft sê elke opdrag en resultaat deur jou skermleser, beskryf die tekening en wat naby die kruisdraad is, laat jou die kruisdraad met die sleutelbord beweeg, speel 'n klank vir elke vasklik en greep, en neem opdragte per stem waar jou blaaier dit op jou rekenaar kan doen.
keywords: toeganklikheid, skermleser, blind, swaksiende, NVDA, VoiceOver, JAWS, Orca, sleutelbordkruisdraad, stemopdragte, spraak, klanke, vasklikklanke, beskryf tekening, ACCESS, DESCRIBE, WHEREAMI, NEARBY, SAYSEL, VOICE
from: 2468e100
---

**Toegang** laat jou toe om sonder om die skerm te sien te teken. Dit is af totdat jy dit aanskakel, sodat niemand dit per ongeluk kry nie.

## Skakel dit aan

Maak **Instellings** oop (die rat, of Ctrl+,), vind **Teken sonder sig** en kies **Aan**. Of tik `ACCESS` by die opdragreël en antwoord `Aan`. Dit word op hierdie rekenaar onthou.

Met Toegang aan:

- **Alles wat die opdragreël sê, word deur jou skermleser uitgespreek**: wat jy getik het, die vraag wat dit stel, die antwoord, en elke fout. CadCraft gebruik sy eie beleefde en dringende lewendige streke, so 'n skermleser wat lewendige streke lees, het niks nodig nie. Foute en kansellerings onderbreek; al die ander wag hul beurt.
- **Die tekengebied is bereikbaar.** Druk Tab totdat jy "Drawing" hoor, of druk Shift+Tab vanaf die opdragreël. Dit is 'n streek wat sleutels na CadCraft deurgee.

## Sleutels op die tekening

| Sleutel | Wat dit doen |
|---|---|
| Pylsleutels | Beweeg die sleutelbordkruisdraad. 'n Stap is ongeveer 'n honderdste van wat die skerm wys, afgerond na 1, 2 of 5. Shift beweeg tien keer so ver, Ctrl een tiende. |
| Enter | Kies die punt onder die kruisdraad, presies soos 'n klik sou doen. |
| Spasie | Druk Enter by die opdragreël: voltooi LINE, neem die standaard. |
| Tab, Shift+Tab | Spring na die volgende of vorige vasklikpunt naby die kruisdraad, die naaste eerste. |
| G | Stap deur die grepe van die gekose voorwerpe. |
| D | Beskryf die tekening: hoeveel voorwerpe, van watter soort, hoe groot, wat gekies is. |
| W | Sê waar die kruisdraad is en hoe ver dit van die laaste punt af is. |
| N | Sê wat naby die kruisdraad is, die naaste eerste, met die afstand en die kant. |
| S | Beskryf die gekose voorwerpe. |
| R | Sê die laaste ding weer. |
| V | Stem aan of af. |
| / | Gaan na die opdragreël. |
| ? | Lys hierdie sleutels. |

Beweeg met die sleutels sê waar jy beland het. Wanneer 'n opdrag op 'n punt wag, sê dit ook hoe ver en in watter rigting jy van die laaste punt af is, byvoorbeeld "2400 vanaf die laaste punt, na regs, teen 0 grade".

## Opdragte

- {{cmd:ACCESS}} skakel Toegang, vasklikklanke en stem aan of af en sê die toestand.
- {{cmd:DESCRIBE}} sê wat die tekening bevat.
- {{cmd:WHEREAMI}} sê waar die kruisdraad is.
- {{cmd:NEARBY}} sê wat naby die kruisdraad lê.
- {{cmd:SAYSEL}} sê wat gekies is, een sin per voorwerp.
- {{cmd:VOICE}} skakel gesproke opdragte aan of af.

Hierdie vyf lees die tekening en druk 'n antwoord; hulle verander niks nie.

## Klanke vir vaslikke en grepe

Skakel **Vasklik- en greepklanke** in Instellings aan. Elke vasklik-soort het sy eie toonhoogte en klank, sodat jy 'n eindpunt van 'n middelpunt, 'n senter, 'n kruising en die res kan onderskei, en 'n greep het 'n dubbele tik. Die klank beweeg links of regs om die kruisdraad oor die skerm te volg. Die klanke word op jou rekenaar gemaak; niks word afgelaai nie.

## Opdragte per stem

Skakel **Opdragte per stem** in Instellings aan. Sê 'n opdragnaam ("line", "circle", "move"), en sê dan getalle soos jy dit sou lees: "point three hundred comma four hundred", "distance twelve hundred", "angle forty five". "Enter", "cancel", "undo" en "redo" doen wat hulle sê. Wat gehoor is, word teruggesê, en 'n frase wat nie 'n opdrag is nie, word gerapporteer, nie geraai nie.

**Waar die spraak herken word.** CadCraft het geen spraakdiens van sy eie nie en stuur geen klank iewers heen nie. Dit vra jou blaaier om spraak op hierdie rekenaar te herken. As jou blaaier dit kan, is die keuse **Op hierdie rekenaar** en verlaat geen klank dit nie. As dit nie kan nie, bly stem af tensy jy **Blaaier se aanlyn diens** kies, wat die blaaier toelaat om klank na sy maker se spraakdiens te stuur. Instellings sê watter een van toepassing is voordat jy besluit.

## Wat dit nog nie doen nie

- Net CadCraft het Toegang. Die ander sewe programme volg, met dieselfde sleutels en klanke.
- Teks in 'n tekening ('n nota, 'n bloknaam) word voorgelees soos dit geskryf is; dit word nooit as 'n instruksie geneem nie.
- Dit is getoets met sintetiese kontroles en die blaaiertoetse; handkontroles met NVDA, VoiceOver en 'n blinde of swaksiende toetser moet nog kom. As jy dit probeer, laat ons asseblief weet wat ontbreek.
