---
title: Dinamički blokovi
summary: Šta CadCraft radi s dinamičkim blokovima u DWG datoteci: zadržavaju prave nazive, prikazuju stanje u kojem su spašeni, mijenjaju stanja vidljivosti, prikazuju ostale vrijednosti i ostaju dinamički pri spašavanju.
keywords: dinamički blok, dinamički blokovi, vidljivost, stanje vidljivosti, okretanje, rastezanje, pretraga, parametri, prilagođeno, svojstva bloka, *u blokovi, dinamički
from: dea2ee7c
---

## Šta radi

DWG napravljen s dinamičkim blokovima otvara se s ovim mogućnostima:

- **Njihovi pravi nazivi.** Dinamički blok je u panelu {{ui:Blokovi}} naveden pod svojim nazivom ("Receptacle", "Sink"), a ne kao neimenovani blok `*U`.
- **Stanje u kojem su spašeni.** Svaka referenca prikazuje tačno ono što je drugi program prikazao: stanje vidljivosti na koje je bila postavljena, rastegnuta ili okrenuta kako je spašena.
- **Mijenjanje stanja vidljivosti.** Odaberite jednu referencu (ili više istih blokova), otvorite {{ui:Svojstva}} i u odjeljku {{ui:Prilagođeno}} izaberite drugo stanje s liste {{ui:Vidljivost}}. Referenca odmah prikazuje to stanje, i njeni atributi: oni koje stanje skriva nestaju, oni koje prikazuje pojavljuju se sa svojim vrijednostima. Referenca čuva svaku vrijednost, pa ništa ne ostaje prazno; {{ui:Svojstva}} navodi skrivene označene kao "hidden" (skriveno). {{key:Mod+Z}} vraća stari stanje u jednom koraku.
- **Hvataljke.** Odabrani dinamički blok prikazuje vlastite hvataljke tamo gdje su njegovi parametri: mali trougao za stanje vidljivosti (kliknite ga za spisak stanja), strelice na krajevima udaljenosti, dvostruka strelica za okretanje. Samo hvataljka vidljivosti danas djeluje; ostale to javljaju u statusnoj traci.
- **Ostale vrijednosti, samo za čitanje.** Ispod liste vidljivosti, {{ui:Prilagođeno}} prikazuje i udaljenosti bloka, uglove poravnanja, stanja okretanja i tačke kako ih crtež čuva.
- **Uređivanje stanja vidljivosti.** Otvorite blok pomoću {{cmd:BEDIT}}: uređivač prikazuje jedno stanje, navedeno u traci iznad crteža (izaberite drugo tamo). Ukucajte {{cmd:BVSTATE}} za promjenu, dodavanje (skrivanje svega, prikazivanje svega ili čuvanje onoga što se prikazuje), preimenovanje ili brisanje stanja; {{cmd:BVHIDE}} skriva odabrane objekte u stanju koje se prikazuje; {{cmd:BVSHOW}} prikazuje skrivene, zatamnjene, da kliknete one koje želite vratiti. Spasite blok: reference postavljene na preimenovano stanje zadržavaju ga pod novim nazivom, a one postavljene na obrisano stanje prikazuju prvo stanje.
- **Ostaju dinamički.** Spašeni kao DWG u verziji u kojoj je crtež došao, blokovi ostaju dinamički, sa izabranim stanjem: drugi program ih otvara kao iste dinamičke blokove. Uređena stanja vidljivosti čuvaju se takođe: njihovi novi nazivi, stanja koja ste dodali i ono što svako prikazuje.

## Šta je samo za čitanje ili još nije tu

| Još nije tu | Umjesto toga, danas |
|---|---|
| Mijenjanje udaljenosti, uglova ili okretanja (akcije rastezanja, pomjeranja, okretanja) | Prikazani su samo za čitanje u {{ui:Prilagođeno}}; uređuje se u programu koji je napravio blok. |
| Parametri pretrage, XY, rotacije i polarni | Još se ne čitaju: referenca se prikazuje kako je spašena. |
| Prevlačenje hvataljki udaljenosti, okretanja i tačke | Pokazuju gdje su parametri; hvataljka vidljivosti i lista {{ui:Vidljivost}} u Svojstvima mijenjaju stanja. |
| Pravljenje dinamičkih blokova vrste drugog programa (rastezanje, okretanje, pretraga) | Blokovi koje pravite u CadCraft-u su obični blokovi; {{cmd:BPARAMETER}} to kaže. Vaši vlastiti parametri i više parametara vidljivosti su u upravljaču parametrima (vidi "Vaši vlastiti parametri i stanja vidljivosti" niže). |
| Dodavanje ili brisanje objekata bloka sa stanjima vidljivosti u uređivaču blokova | Blok se tada spašava kao običan blok (uređivač to kaže pri zatvaranju). |
| Čuvanje dinamičnosti u drugoj DWG verziji ili u DXF | Spašavaju se kao obični blokovi koji prikazuju izabrano stanje, a spašavanje to kaže. |

:::note
Pomjeranje ili mijenjanje objekata u {{cmd:BEDIT}} zadržava blok sa stanjima vidljivosti dinamičkim. Blok bez stanja, ili onaj kome su objekti dodati ili obrisani u uređivaču, postaje običan blok.
:::

## Vaši vlastiti parametri i stanja vidljivosti

Blok koji napravite u CadCraft-u može nositi vlastite parametre i **više** parametara vidljivosti, svaki sa svojim stanjima. Ukucajte {{cmd:BPARAMS}} (ili `BPM`) da otvorite **Upravljač parametrima** za blok koji uređujete u {{cmd:BEDIT}}, za blok izabrane reference, ili za blok koji navedete.

- **Parametri**: naziv, vrsta (broj, dužina, ugao, brojanje, da/ne) i vrijednost ili formula nad drugim parametrima (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Iznosi}} prikazuje rezultat. Formula koja ne radi, ili vrijednost koja ne odgovara svojoj vrsti (brojanje 1.5), odbija se i upravljač kaže zašto; ništa drugo se ne mijenja.
- **Parametri vidljivosti**: {{ui:Dodaj parametar vidljivosti}} pravi jedan sa prvim stanjem. Svako stanje može se preimenovati, ukloniti (posljednje ostaje) ili dobiti broj "prikazuje se kada". Formula bira stanje iz parametara (stanje čiji broj odgovara, inače stanje na tom mjestu na listi); bez formule, svaka referenca bira vlastito.
- **Stavljanje objekata u stanje**: u uređivaču blokova odaberite objekte, ukucajte {{cmd:BPARAMS}} i kliknite {{ui:Stavi odabrane objekte ovdje}} na stanju. Objekti koje nijedan parametar vidljivosti ne navodi uvijek se prikazuju.
- **Ova referenca**: započeta na odabranoj referenci, upravljač prikazuje i vlastite vrijednosti i stanja te reference.

Van uređivača blokova svaka promjena je jedan korak poništavanja. U uređivaču blokova promjene pripadaju uređivaču: {{ui:Snimi blok}} ih čuva. `-BPARAMS` pita isto u komandnoj liniji.

**U datoteci.** DWG i DXF čuvaju parametre, koji objekti su u kojem stanju, i vlastite vrijednosti svake reference, u zapisima koje vodi CadCraft; otvorite datoteku ponovo u CadCraft-u i sve je vraćeno. Drugi program vidi svaku referencu kao blok sa svim njegovim objektima, jer DWG čuva najviše jedan parametar vidljivosti po bloku svoje vrste. Referenca koju je drugi program pomjerio, ili blok čije je objekte promijenio, vraća se bez dijelova koji se više ne poklapaju (ništa se ne nagađa).
