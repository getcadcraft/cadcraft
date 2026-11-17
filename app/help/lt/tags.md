---
title: Žymos: atributai, kurie maitina žiniaraščius
summary: Apibrėžkite žymą (jos tipą, reikšmes, kurias ji gali įgyti, blokus, kuriems ji taikoma), nustatykite ją blokų nuorodoms ir išvardykite nuorodas kaip žiniaraštį, kurį galite įrašyti kaip CSV.
keywords: žymos, žyma, atributas, žiniaraštis, duomenų išgavimas, ypatybė, atsparumo ugniai klasė, pasirinkimų sąrašas, blokų nuoroda, TAGS, csv
from: 9b90bacc
---

**Žyma** yra bloko atributas su apibrėžimu: kokio tipo reikšmę jis laiko, kurios reikšmės leidžiamos ir kuriems blokams jis taikomas. Reikšmės yra įprasti bloko atributai, todėl bet kuri kita programa jas skaito, o {{cmd:ATTEDIT}} jas rodo. Nauji yra tik apibrėžimai, ir jie saugomi brėžinyje.

## Apibrėžkite ir nustatykite

Įveskite {{cmd:TAGS}} ir pasirinkite:

- {{ui:Apibrėžti}}: pavadinimą (raidės, skaitmenys, tarpas, `_ . -`), tipą (`text`, `number`, `integer`, `yesno`, `length`, `angle`), leidžiamas reikšmes, atskirtas `;` (palikite tuščią – bet kokios), ir blokų pavadinimus, kuriems ji taikoma (`DOOR*` atitinka kiekvieną bloką, prasidedantį DOOR; tuščias laukas reiškia visus blokus).
- {{ui:Rinkinys}}: su pažymėtomis blokų nuorodomis įveskite `FireRating=60 min; Width=850`. Reikšmė, kurios nėra leidžiamų sąraše, arba ne skaičius skaitinei žymai atmetama ir apie tai pranešama. Vienas anuliavimo žingsnis. Blokas, neturintis atributo, gauna jį kaip paslėptą atributą.
- {{ui:Žiniaraštis}}: visos nuorodos į bloką, kuriam žyma taikoma, pasirinktinai sugrupuotos pagal žymą ar bloko pavadinimą, išspausdinamos ir įrašomos kaip CSV.
- {{ui:Šalinti}}: pamiršta apibrėžimą; reikšmės lieka nuorodose.

Žymos pervadinimas pervadina jos reikšmes kiekvienoje nuorodoje. Žymų pavadinimai nepriklauso nuo raidžių dydžio, kaip ir atributų pavadinimai.
