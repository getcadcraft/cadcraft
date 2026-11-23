---
title: Dinamički blokovi
summary: Šta CadCraft radi sa dinamičkim blokovima u DWG datoteci: zadržavaju prave nazive, prikazuju stanje u kome su sačuvani, menjaju stanje vidljivosti, prikazuju ostale vrednosti i ostaju dinamički pri čuvanju.
keywords: dinamički blok, dinamički blokovi, vidljivost, stanje vidljivosti, okret, istezanje, pretraga, parametri, prilagođeno, svojstva bloka, *u blokovi, dinamički
from: dea2ee7c
---

## Šta radi

DWG napravljen dinamičkim blokovima se otvara sa sledećim funkcijama:

- **Njihovi pravi nazivi.** Dinamički blok je u panelu {{ui:Blokovi}} naveden pod svojim nazivom ("Receptacle", "Sink"), a ne kao neimenovani blok `*U`.
- **Stanje u kome su sačuvani.** Svaka referenca prikazuje tačno ono što je prikazao drugi program: stanje vidljivosti na koje je bila postavljena, istegnuta ili okrenuta onako kako je sačuvana.
- **Promena stanja vidljivosti.** Izaberite jednu referencu (ili više istih blokova), otvorite {{ui:Svojstva}} i u odeljku {{ui:Prilagođeno}} izaberite drugo stanje sa spiska {{ui:Vidljivost}}. Referenca odmah prikazuje to stanje, i njeni atributi takođe: oni koje stanje skriva nestaju, a oni koje prikazuje pojavljuju se sa svojim vrednostima. Referenca čuva svaku vrednost, pa ništa ne ostaje prazno; {{ui:Svojstva}} navodi skrivene, označene kao "skriveno". {{key:Mod+Z}} vraća staro stanje jednim korakom.
- **Hvatači.** Izabrani dinamički blok prikazuje sopstvene hvatače tamo gde su njegovi parametri: mali trougao za stanje vidljivosti (kliknite ga za spisak stanja), strelice na krajevima rastojanja, dvostruku strelicu za okret. Danas deluje samo hvatač vidljivosti; ostali to navode u statusnoj traci.
- **Ostale vrednosti, samo za čitanje.** Ispod spiska vidljivosti, {{ui:Prilagođeno}} prikazuje i rastojanja bloka, uglove poravnanja, stanja okreta i tačke onako kako ih crtež čuva.
- **Izmena stanja vidljivosti.** Otvorite blok komandom {{cmd:BEDIT}}: urednik prikazuje jedno stanje, navedeno u traci iznad crteža (tamo izaberite drugo). Ukucajte {{cmd:BVSTATE}} za prebacivanje, dodavanje (skrivanje svega, prikazivanje svega ili zadržavanje onoga što je prikazano), preimenovanje ili brisanje stanja; {{cmd:BVHIDE}} sakriva izabrane objekte u stanju koje je prikazano; {{cmd:BVSHOW}} prikazuje skrivene objekte zatamnjene, da kliknete one koje želite da vratite. Sačuvajte blok: reference postavljene na preimenovano stanje zadržavaju ga pod novim nazivom, a one postavljene na obrisano stanje prikazuju prvo stanje.
- **Ostaju dinamički.** Sačuvani kao DWG u verziji u kojoj je crtež došao, blokovi ostaju dinamički, sa stanjem koje ste izabrali: drugi program ih otvara kao iste dinamičke blokove. Stanja vidljivosti koja ste menjali takođe se čuvaju: njihovi novi nazivi, stanja koja ste dodali i ono što svako od njih prikazuje.

## Šta je samo za čitanje ili još nije tu

| Još nije tu | Umesto toga, danas |
|---|---|
| Promena rastojanja, uglova ili okreta (akcije istezanja, pomeranja, okretanja) | Prikazuju se samo za čitanje u {{ui:Prilagođeno}}; menjajte ih u programu koji je napravio blok. |
| Parametri pretrage, XY, rotacije i polarni | Još nisu pročitani: referenca se prikazuje kako je sačuvana. |
| Prevlačenje hvatača rastojanja, okreta i tačke | Prikazuju gde su parametri; hvatač vidljivosti i spisak {{ui:Vidljivost}} u Svojstvima menjaju stanja. |
| Pravljenje dinamičkih blokova vrste drugog programa (istezanje, okret, pretraga) | Blokovi koje pravite u CadCraft-u su obični blokovi; {{cmd:BPARAMETER}} to kaže. Vaši parametri i više parametara vidljivosti nalaze se u upravljaču parametrima (vidi "Vaši parametri i stanja vidljivosti" ispod). |
| Dodavanje ili brisanje objekata bloka sa stanjima vidljivosti u uredniku blokova | Blok se tada čuva kao običan blok (urednik to kaže pri zatvaranju). |
| Čuvanje kao dinamički u drugoj verziji DWG-a ili u DXF-u | Čuvaju se kao obični blokovi koji prikazuju izabrano stanje, a čuvanje to navodi. |

:::note
Pomeranje ili menjanje objekata u {{cmd:BEDIT}} zadržava blok sa stanjima vidljivosti dinamičkim. Blok bez stanja, ili onaj kome su objekti dodati ili obrisani u uredniku, postaje običan blok.
:::

## Vaši parametri i stanja vidljivosti

Blok koji napravite u CadCraft-u može imati sopstvene parametre i **više** parametara vidljivosti, svaki sa svojim stanjima. Ukucajte {{cmd:BPARAMS}} (ili `BPM`) da biste otvorili **Upravljač parametrima** za blok koji uređujete u {{cmd:BEDIT}}, za blok izabrane reference, ili za blok koji navedete.

- **Parametri**: naziv, vrsta (broj, dužina, ugao, broj, da/ne) i vrednost ili formula nad drugim parametrima (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Iznosi}} prikazuje rezultat. Formula koja ne radi, ili vrednost koja ne odgovara svojoj vrsti (broj 1.5 za brojanje), se odbija, a upravljač kaže zašto; ništa drugo se ne menja.
- **Parametri vidljivosti**: {{ui:Dodaj parametar vidljivosti}} pravi jedan sa prvim stanjem. Svako stanje može da se preimenuje, ukloni (poslednje ostaje) ili dobije broj "prikazuje se kad". Formula bira stanje iz parametara (stanje čiji se broj poklapa, inače stanje na tom mestu u spisku); bez formule, svaka referenca bira svoje.
- **Stavljanje objekata u stanje**: u uredniku blokova izaberite objekte, ukucajte {{cmd:BPARAMS}} i kliknite {{ui:Stavi izabrane objekte ovde}} na stanju. Objekti koje nijedan parametar vidljivosti ne navodi uvek se prikazuju.
- **Ova referenca**: kada se pokrene nad izabranom referencom, upravljač takođe prikazuje sopstvene vrednosti i stanja te reference.

Van uređivača blokova svaka promena je jedan korak opozivanja. U uredniku blokova promene pripadaju uredniku: {{ui:Sačuvaj blok}} ih čuva. `-BPARAMS` postavlja isto pitanje u komandnoj liniji.

**U datoteci.** DWG i DXF čuvaju parametre, to koji su objekti u kom stanju i sopstvene vrednosti svake reference, u CadCraft-ovim zapisima; ponovo otvorite datoteku u CadCraft-u i sve se vraća. Drugi program vidi svaku referencu kao blok sa svim njegovim objektima, jer DWG drži najviše jedan parametar vidljivosti po bloku svoje vrste. Referenca koju je drugi program pomerio, ili blok čije je objekte promenio, vraća se bez delova koji se više ne poklapaju (ništa se ne pogađa).
