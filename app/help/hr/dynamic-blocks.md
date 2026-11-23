---
title: Dinamički blokovi
summary: Što program CadCraft radi s dinamičkim blokovima u datoteci DWG: zadržavaju svoje stvarne nazive, prikazuju stanje u kojem su spremljeni, mijenjaju stanja vidljivosti, prikazuju svoje ostale vrijednosti i ostaju dinamički pri spremanju.
keywords: dinamički blok, dinamički blokovi, vidljivost, stanje vidljivosti, okret, rastezanje, pretraživanje, parametri, prilagođeno, svojstva bloka, *U blokovi, dinamički
from: dea2ee7c
---

## Što radi

DWG izrađen dinamičkim blokovima otvara se s njima koji rade ovoliko:

- **Njihovi stvarni nazivi.** Dinamički blok u ploči {{ui:Blokovi}} navodi se pod vlastitim nazivom („Receptacle“, „Sink“), a ne kao neimenovani blok `*U`.
- **Stanje u kojem su spremljeni.** Svaka referenca prikazuje točno ono što je prikazao drugi program: stanje vidljivosti na koje je postavljena, rastegnuta ili okrenuta kako je spremljena.
- **Promjena stanja vidljivosti.** Odaberite jednu referencu (ili više istih blokova), otvorite {{ui:Svojstva}} i u odjeljku {{ui:Prilagođeno}} odaberite drugo stanje s popisa {{ui:Vidljivost}}. Referenca odmah prikazuje to stanje, a i njezini atributi: oni koje stanje skriva nestaju, oni koje prikazuje pojavljuju se sa svojim vrijednostima. Referenca čuva svaku vrijednost, pa se ništa ne vraća prazno; {{ui:Svojstva}} navodi skrivene s oznakom „skriveno“. {{key:Mod+Z}} vraća staro stanje u jednom koraku.
- **Ručke.** Odabrani dinamički blok prikazuje vlastite ručke na mjestima svojih parametara: mali trokut za stanje vidljivosti (kliknite ga za popis stanja), strelice na krajevima udaljenosti, dvostruka strelica za okret. Danas djeluje samo ručka vidljivosti; ostale to javljaju u statusnoj traci.
- **Ostale vrijednosti, samo za čitanje.** Ispod popisa vidljivosti {{ui:Prilagođeno}} prikazuje i udaljenosti bloka, kutove poravnanja, stanja okreta i točke onako kako ih crtež sadrži.
- **Uređivanje stanja vidljivosti.** Otvorite blok naredbom {{cmd:BEDIT}}: uređivač prikazuje jedno stanje, navedeno u traci iznad crteža (ovdje možete odabrati drugo). Upišite {{cmd:BVSTATE}} za promjenu, dodavanje (skrivanje svega, prikaz svega ili zadržavanje onoga što je prikazano), preimenovanje ili brisanje stanja; {{cmd:BVHIDE}} skriva odabrane objekte u trenutno prikazanom stanju; {{cmd:BVSHOW}} prikazuje skrivene zasjenjene pa možete kliknuti one koje želite vratiti. Spremite blok: reference postavljene na preimenovano stanje zadržavaju ga pod novim nazivom, a one postavljene na obrisano stanje prikazuju prvo stanje.
- **Ostaju dinamički.** Spremljeni kao DWG u verziji u kojoj je crtež došao, blokovi ostaju dinamički, sa stanjem koje ste odabrali: drugi program ih otvara kao iste dinamičke blokove. Uređena stanja vidljivosti također se spremaju: njihovi novi nazivi, dodana stanja i ono što svako prikazuje.

## Što je samo za čitanje ili još nije tu

| Još nije tu | Umjesto toga, danas |
|---|---|
| Mijenjanje udaljenosti, kutova ili okreta (radnje rastezanja, pomicanja, okretanja) | Prikazano samo za čitanje u {{ui:Prilagođeno}}; uređuje se u programu koji je izradio blok. |
| Parametri pretraživanja, XY, rotacije i polarni | Još nisu čitani: referenca se prikazuje kako je spremljena. |
| Povlačenje ručki udaljenosti, okreta i točke | Prikazuju se gdje su parametri; ručka vidljivosti i popis {{ui:Vidljivost}} u Svojstvima mijenjaju stanja. |
| Izrada dinamičkih blokova vrste drugog programa (rastezanje, okret, pretraživanje) | Blokovi koje izradite u CadCraftu su obični blokovi; {{cmd:BPARAMETER}} to kaže. Vaši parametri i više parametara vidljivosti nalaze se u upravitelju parametara (vidi „Vaši parametri i stanja vidljivosti“ niže). |
| Dodavanje ili brisanje objekata bloka s stanjima vidljivosti u uređivaču blokova | Blok se tada sprema kao obični blok (uređivač to kaže pri zatvaranju). |
| Zadržavanje dinamičkih svojstava u drugoj verziji DWG-a ili u DXF-u | Spremaju se kao obični blokovi koji prikazuju odabrano stanje, a spremanje to javlja. |

:::note
Pomicanje ili promjena objekata u {{cmd:BEDIT}} zadržava blok sa stanjima vidljivosti dinamičkim. Blok bez stanja ili blok kojem su objekti dodani ili obrisani u uređivaču postaje obični blok.
:::

## Vaši parametri i stanja vidljivosti

Blok koji izradite u CadCraftu može imati vlastite parametre i **više** parametara vidljivosti, svaki sa svojim stanjima. Upišite {{cmd:BPARAMS}} (ili `BPM`) da otvorite **upravitelja parametara** za blok koji uređujete u {{cmd:BEDIT}}, za blok odabrane reference ili za blok koji navedete.

- **Parametri**: naziv, vrsta (broj, duljina, kut, količina, da/ne) i vrijednost ili formula nad drugim parametrima (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Rezultat}} prikazuje rezultat. Formula koja ne radi ili vrijednost koja ne odgovara svojoj vrsti (količina 1.5) bit će odbijena, a upravitelj kaže zašto; ništa drugo se ne mijenja.
- **Parametri vidljivosti**: {{ui:Dodaj parametar vidljivosti}} izrađuje jedan s prvim stanjem. Svako stanje može se preimenovati, ukloniti (zadnje ostaje) ili dobiti broj „prikazuje se kad“. Formula bira stanje iz parametara (stanje čiji se broj podudara, inače stanje na tom mjestu na popisu); bez formule svaka referenca bira vlastito.
- **Stavljanje objekata u stanje**: u uređivaču blokova odaberite objekte, upišite {{cmd:BPARAMS}} i kliknite {{ui:Stavi odabrane objekte ovdje}} na stanju. Objekti koje nijedan parametar vidljivosti ne navodi uvijek se prikazuju.
- **Ova referenca**: pokrenut na odabranoj referenci, upravitelj prikazuje i vlastite vrijednosti i stanja te reference.

Izvan uređivača blokova svaka promjena je jedan korak poništavanja. U uređivaču blokova promjene pripadaju uređivaču: {{ui:Spremi blok}} ih zadržava. `-BPARAMS` pita isto u naredbenom retku.

**U datoteci.** DWG i DXF čuvaju parametre, koji su objekti u kojem stanju i vlastite vrijednosti svake reference, u CadCraftovim vlastitim zapisima; ponovno otvorite datoteku u CadCraftu i sve je tu. Drugi program vidi svaku referencu kao blok sa svim njegovim objektima, jer DWG drži najviše jedan parametar vidljivosti po bloku vlastite vrste. Referenca koju je drugi program pomaknuo ili blok čije je objekte promijenio vraća se bez dijelova koji se više ne poklapaju (ništa se ne nagađa).
