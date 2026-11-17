---
title: Dinamički blokovi
summary: Šta CadCraft radi sa dinamičkim blokovima u DWG-u: zadržavaju prava imena, prikazuju stanje u kojem su sačuvani, menjaju stanja vidljivosti, prikazuju ostale vrednosti i ostaju dinamički kad se sačuvaju.
keywords: dinamički blok, dinamički blokovi, vidljivost, stanje vidljivosti, okretanje, istezanje, pretraga, parametri, prilagođeno, svojstva bloka, *u blokovi, dinamički
from: 26b6aa80
---

## Šta radi

DWG napravljen sa dinamičkim blokovima otvara se sa njima koji rade do ove mere:

- **Njihova prava imena.** Dinamički blok je naveden u panelu {{ui:Blocks}} pod svojim imenom („Utičnica", „Sudoper"), a ne kao neimenovani blok `*U`.
- **Stanje u kojem su sačuvani.** Svaka referenca pokazuje tačno ono što je prikazao drugi program: stanje vidljivosti na koje je bila postavljena, istegnuta ili okrenuta kako je sačuvana.
- **Menjanje stanja vidljivosti.** Izaberite jednu referencu (ili više istih blokova), otvorite {{ui:Properties}}, pa u odeljku {{ui:Custom}} izaberite drugo stanje sa liste {{ui:Visibility}}. Referenca odmah prikazuje to stanje, i njene atribute: oni koje stanje sakriva nestaju, a oni koje prikazuje pojavljuju se sa svojim vrednostima. Referenca čuva svaku vrednost, pa ništa ne ostaje prazno; {{ui:Properties}} navodi sakrivene označene kao „sakriveno". {{key:Mod+Z}} vraća staro stanje u jednom koraku.
- **Ručice.** Izabrani dinamički blok prikazuje sopstvene ručice tamo gde su njegovi parametri: mali trougao za stanje vidljivosti (kliknite ga za listu stanja), strelice na krajevima rastojanja, dvostruka strelica za okretanje. Danas radi samo ručica za vidljivost; ostale to kažu u statusnoj traci.
- **Ostale vrednosti, samo za čitanje.** Ispod liste vidljivosti, {{ui:Custom}} prikazuje i rastojanja bloka, uglove poravnanja, stanja okretanja i tačke onako kako ih crtež čuva.
- **Uređivanje stanja vidljivosti.** Otvorite blok sa {{cmd:BEDIT}}: uređivač prikazuje jedno stanje, navedeno u traci iznad crteža (izaberite drugo tamo). Otkucajte {{cmd:BVSTATE}} da pređete, dodate (sakrivajući sve, prikazujući sve ili zadržavajući ono što se prikazuje), preimenujete ili obrišete stanje; {{cmd:BVHIDE}} sakriva izabrane objekte u stanju koje se prikazuje; {{cmd:BVSHOW}} prikazuje sakrivene zatamnjene da kliknete one koje vraćate. Sačuvajte blok: reference postavljene na preimenovano stanje zadržavaju ga pod novim imenom, a one postavljene na obrisano stanje prikazuju prvo stanje.
- **Ostaju dinamički.** Sačuvani kao DWG u verziji u kojoj je crtež došao, blokovi ostaju dinamički, sa stanjem koje ste izabrali: drugi program ih otvara kao iste dinamičke blokove. Stanja vidljivosti koja ste uredili takođe se čuvaju: njihova nova imena, stanja koja ste dodali i ono što svako prikazuje.

## Šta je samo za čitanje ili još nije tu

| Još nije tu | Umesto toga, danas |
|---|---|
| Promena rastojanja, uglova ili okretanja (akcije istezanja, pomeranja, okretanja) | Prikazani su samo za čitanje u {{ui:Custom}}; menjajte u programu koji je napravio blok. |
| Pretraga, XY, rotacija i polarni parametri | Još se ne čitaju: referenca se prikazuje kako je sačuvana. |
| Prevlačenje ručica za rastojanje, okretanje i tačku | Pokazuju gde su parametri; ručica za vidljivost i lista {{ui:Visibility}} u svojstvima menjaju stanja. |
| Pravljenje dinamičkih blokova (dodavanje parametara ili stanja vidljivosti bloku koji ih nema) | Blokovi koje pravite u CadCraft-u su obični blokovi; {{cmd:BPARAMETER}} to kaže. |
| Dodavanje ili brisanje objekata bloka sa stanjima vidljivosti u uređivaču blokova | Blok se tada čuva kao običan blok (uređivač to kaže kad se zatvori). |
| Održavanje dinamičnosti u drugoj DWG verziji ili u DXF-u | Čuvaju se kao obični blokovi koji prikazuju stanje koje ste izabrali, a čuvanje to kaže. |

:::note
Pomeranje ili menjanje objekata u {{cmd:BEDIT}} zadržava blok sa stanjima vidljivosti dinamičkim. Blok bez stanja, ili onaj kojem su objekti dodati ili obrisani u uređivaču, postaje običan blok.
:::
