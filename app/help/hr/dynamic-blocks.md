---
title: Dinamički blokovi
summary: Što CadCraft radi s dinamičkim blokovima u DWG datoteci: zadržavaju svoje prave nazive, prikazuju stanje u kojem su spremljeni, mijenjaju stanja vidljivosti, prikazuju ostale vrijednosti i ostaju dinamički pri spremanju.
keywords: dinamički blok, dinamički blokovi, vidljivost, stanje vidljivosti, okretanje, rastezanje, pretraživanje, parametri, prilagođeno, svojstva bloka, *u blokovi, dinamički
from: 26b6aa80
---

## Što radi

DWG nastao s dinamičkim blokovima otvara se s radom do ove mjere:

- **Njihovi pravi nazivi.** Dinamički blok navodi se u ploči {{ui:Blokovi}} pod svojim nazivom („Receptacle“, „Sink“), a ne kao bezimeni blok `*U`.
- **Stanje u kojem su spremljeni.** Svaka referenca prikazuje točno ono što je pokazao drugi program: stanje vidljivosti na koje je bila postavljena, rastegnuta ili okrenuta kako je spremljena.
- **Mijenjanje stanja vidljivosti.** Odaberite jednu referencu (ili više istog bloka), otvorite {{ui:Svojstva}} i u odjeljku {{ui:Prilagođeno}} odaberite drugo stanje s popisa {{ui:Vidljivost}}. Referenca odmah prikazuje to stanje, i njezine atribute: oni koje stanje skriva nestaju, a oni koje prikazuje pojavljuju se s vrijednostima. Referenca čuva svaku vrijednost, pa se ništa ne vraća prazno; {{ui:Svojstva}} navodi skrivene označene kao „skriveno“. {{key:Mod+Z}} vraća staro stanje u jednom koraku.
- **Ručke.** Odabrani dinamički blok prikazuje vlastite ručke tamo gdje su njegovi parametri: mali trokut za stanje vidljivosti (kliknite ga za popis stanja), strelice na krajevima udaljenosti, dvostruka strelica za okretanje. Samo ručka vidljivosti radi za sada; ostale to kažu u statusnoj traci.
- **Ostale vrijednosti, samo za čitanje.** Ispod popisa vidljivosti, {{ui:Prilagođeno}} prikazuje i udaljenosti bloka, kutove poravnanja, stanja okretanja i točke onako kako ih crtež sadrži.
- **Uređivanje stanja vidljivosti.** Otvorite blok naredbom {{cmd:BEDIT}}: uređivač prikazuje jedno stanje, navedeno u traci iznad crteža (ondje odaberite drugo). Upišite {{cmd:BVSTATE}} za prebacivanje, dodavanje (skrivajući sve, prikazujući sve ili zadržavajući ono što se prikazuje), preimenovanje ili brisanje stanja; {{cmd:BVHIDE}} skriva odabrane objekte u stanju koje se prikazuje; {{cmd:BVSHOW}} prikazuje skrivene, zatamnjene, da kliknete one koje želite vratiti. Spremite blok: reference postavljene na preimenovano stanje zadržavaju ga pod novim nazivom, a one postavljene na obrisano stanje prikazuju prvo stanje.
- **Ostaju dinamički.** Spremljeni kao DWG u verziji u kojoj je crtež došao, blokovi ostaju dinamički, sa stanjem koje ste odabrali: drugi program ih otvara kao iste dinamičke blokove. Stanja vidljivosti koja ste uredili također se spremaju: njihovi novi nazivi, stanja koja ste dodali i što svako prikazuje.

## Što je samo za čitanje ili još nije tu

| Još nije tu | Umjesto toga, danas |
|---|---|
| Mijenjanje udaljenosti, kutova ili okretanja (radnje rastezanja, pomicanja, okretanja) | Prikazuju se samo za čitanje u {{ui:Prilagođeno}}; uređujte u programu koji je izradio blok. |
| Parametri pretraživanja, XY, rotacije i polarni | Još se ne čitaju: referenca se prikazuje kako je spremljena. |
| Povlačenje ručki udaljenosti, okretanja i točke | Pokazuju gdje su parametri; ručka vidljivosti i popis {{ui:Vidljivost}} u Svojstvima mijenjaju stanja. |
| Izrada dinamičkih blokova (dodavanje parametara ili stanja vidljivosti bloku koji ih nema) | Blokovi koje izradite u CadCraftu su obični blokovi; {{cmd:BPARAMETER}} to kaže. |
| Dodavanje ili brisanje objekata bloka sa stanjima vidljivosti u uređivaču blokova | Blok se tada sprema kao običan blok (uređivač to kaže pri zatvaranju). |
| Zadržavanje dinamičnosti u drugoj verziji DWG-a ili u DXF-u | Spremaju se kao obični blokovi koji prikazuju stanje koje ste odabrali, a spremanje to navodi. |

:::note
Pomicanje ili mijenjanje objekata u {{cmd:BEDIT}} zadržava blok sa stanjima vidljivosti dinamičkim. Blok bez stanja ili blok kojem su objekti dodani ili obrisani u uređivaču postaje običan blok.
:::
