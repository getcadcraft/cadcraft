---
title: Dinamički blokovi
summary: Šta CadCraft radi s dinamičkim blokovima u DWG-u: zadržavaju svoje prave nazive, prikazuju stanje u kome su sačuvani, mijenjaju stanja vidljivosti, prikazuju svoje ostale vrijednosti i ostaju dinamički kada se sačuvaju.
keywords: dinamički blok, dinamički blokovi, vidljivost, stanje vidljivosti, okretanje, istezanje, pretraga, parametri, prilagođeno, svojstva bloka, *u blokovi, dinamički
from: 26b6aa80
---

## Šta radi

DWG napravljen s dinamičkim blokovima otvara se s njima koji rade do ovdje:

- **Njihovi pravi nazivi.** Dinamički blok je naveden u panelu {{ui:Blocks}} › "Blokovi" pod svojim nazivom ("Receptacle", "Sink"), a ne kao neimenovani blok `*U`.
- **Stanje u kome su sačuvani.** Svaka referenca prikazuje tačno ono što je pokazao drugi program: stanje vidljivosti na koje je postavljena, istegnuta ili okrenuta kako je sačuvana.
- **Mijenjanje stanja vidljivosti.** Odaberite jednu referencu (ili nekoliko istog bloka), otvorite {{ui:Properties}} › "Svojstva", i u odjeljku {{ui:Custom}} › "Prilagođeno" izaberite drugo stanje s liste {{ui:Visibility}} › "Vidljivost". Referenca odmah prikazuje to stanje, i njene atribute: oni koje stanje sakrije nestanu, a oni koje prikazuje pojave se s vrijednostima. Referenca zadržava svaku vrijednost, tako da se ništa ne vraća prazno; {{ui:Properties}} navodi skrivene, označene kao "hidden" (skriveno). {{key:Mod+Z}} vraća staro stanje u jednom koraku.
- **Hvatišta.** Odabrani dinamički blok pokazuje svoja hvatišta tamo gdje su njegovi parametri: mali trougao za stanje vidljivosti (kliknite ga za listu stanja), strelice na krajevima udaljenosti, dvostruka strelica za okretanje. Danas djeluje samo hvatište vidljivosti; ostala to kažu u statusnoj traci.
- **Ostale vrijednosti, samo za čitanje.** Ispod liste vidljivosti, {{ui:Custom}} › "Prilagođeno" prikazuje i udaljenosti bloka, uglove poravnanja, stanja okretanja i tačke onako kako ih crtež sadrži.
- **Uređivanje stanja vidljivosti.** Otvorite blok s {{cmd:BEDIT}}: urednik prikazuje jedno stanje, navedeno u traci iznad crteža (izaberite drugo tamo). Upišite {{cmd:BVSTATE}} da prebacite, dodate (sakrivajući sve, prikazujući sve ili zadržavajući ono što se prikazuje), preimenujete ili obrišete stanje; {{cmd:BVHIDE}} sakriva odabrane objekte u stanju koje se prikazuje; {{cmd:BVSHOW}} prikazuje skrivene, zatamnjene, da kliknete one koje želite vratiti. Sačuvajte blok: reference postavljene na preimenovano stanje zadržavaju ga pod novim nazivom, a one postavljene na obrisano stanje prikazuju prvo stanje.
- **Ostaju dinamički.** Sačuvani kao DWG u verziji u kojoj je crtež došao, blokovi ostaju dinamički, sa stanjem koje ste izabrali: drugi program ih otvara kao iste dinamičke blokove. Stanja vidljivosti koja ste uređivali također se čuvaju: njihovi novi nazivi, stanja koja ste dodali i ono što svako prikazuje.

## Šta je samo za čitanje ili još nije tu

| Još nije tu | Umjesto toga, danas |
|---|---|
| Mijenjanje udaljenosti, uglova ili okretanja (akcije istezanja, pomjeranja, okretanja) | Prikazani su samo za čitanje u {{ui:Custom}} › "Prilagođeno"; uređujte u programu koji je napravio blok. |
| Parametri pretrage, XY, rotacije i polarni | Još nisu pročitani: referenca se prikazuje kako je sačuvana. |
| Prevlačenje hvatišta udaljenosti, okretanja i tačke | Pokazuju gdje su parametri; hvatište vidljivosti i lista {{ui:Visibility}} › "Vidljivost" u Svojstvima mijenjaju stanja. |
| Pravljenje dinamičkih blokova (dodavanje parametara ili stanja vidljivosti bloku koji ih nema) | Blokovi koje pravite u CadCraftu su obični blokovi; {{cmd:BPARAMETER}} to kaže. |
| Dodavanje ili brisanje objekata bloka sa stanjima vidljivosti u uredniku blokova | Blok se tada čuva kao običan blok (urednik to kaže pri zatvaranju). |
| Održavanje dinamičnosti u drugoj verziji DWG-a ili u DXF-u | Čuvaju se kao obični blokovi koji prikazuju stanje koje ste izabrali, a čuvanje to kaže. |

:::note
Pomjeranje ili mijenjanje objekata u {{cmd:BEDIT}} zadržava blok sa stanjima vidljivosti dinamičkim. Blok bez stanja, ili onaj kome su objekti dodani ili obrisani u uredniku, postaje običan blok.
:::
