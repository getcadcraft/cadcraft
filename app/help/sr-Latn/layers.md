---
title: Organizovanje crteža slojevima
summary: Napravi slojeve za zidove, vrata i napomene, postavi boje, učini sloj tekućim i isključi, zamrzni, zaključaj slojeve ili spreči njihovo štampanje.
keywords: sloj, slojevi, la, tekući sloj, zamrzni, odmrzni, zaključaj, isključi, uključi, štampanje, bez štampanja, boja, svojstva sloja, layiso, layuniso, izoluj, layoff, layfrz, laymcur, layon, laythw, preimenuj, laymrg, spoji, laydel, obriši sloj
from: cd033591
---

## Šta ćeš napraviti

Tri sloja, Zidovi, Vrata i Napomene, svaki sa sopstvenom bojom, sa objektima nacrtanim na svakom i premeštenim među njima.

## Panel Slojevi

Slojevi su u panelu levo, pod {{ui:Slojevi}}. Svaki red prikazuje, sleva nadesno:

- tačku: punu za **tekući** sloj, u koji idu novi objekti;
- uzorak boje;
- ime sloja;
- četiri dugmeta: uključi/isključi (oko), zamrzni (pahulja), zaključaj (lokot) i štampanje (štampač).

Svaki crtež ima sloj zvan `0`. Ukucaj `LA` i pritisni {{key:Enter}} da skočiš na panel.

## Napravi slojeve

1. Klikni {{ui:Novi sloj}} iznad spiska. Otvara se polje za ime.
2. Ukucaj `Walls` i pritisni {{key:Enter}} (ili klikni {{ui:Dodaj}}).

Statusna traka kaže „Dodat sloj Walls i postavljen kao tekući.“ Novi sloj dobija boju 7 (crna na svetloj temi, bela na tamnoj).

3. Ponovo klikni {{ui:Novi sloj}}, ukucaj `Doors` i pritisni {{key:Enter}}.
4. Ponovo klikni {{ui:Novi sloj}}, ukucaj `Notes` i pritisni {{key:Enter}}.

Notes je sada tekući.

## Daj svakom sloju boju

1. Klikni uzorak boje u redu Walls. Otvara se birač boja tvog sistema.
2. Izaberi boju i potvrdi.

Uzorak i sve na sloju Walls koje je obojeno {{ui:Po sloju}} menjaju boju.

:::note
Izabrana boja koja se poklapa sa jednom od 255 standardnih CAD boja čuva se kao taj broj. Svaka druga boja se čuva tačno u CadCraft-u, ali se u DWG ili DXF datoteci čuva kao najbliža standardna boja.
:::

## Crtaj na sloju

1. Klikni ime **Walls** na spisku. Njena tačka se popunjava, a statusna traka kaže „Tekući sloj: Walls“.
2. Nacrtaj pravougaonik (`REC`). Ide na Walls.
3. Klikni **Doors** i nacrtaj luk (`A`). Ide na Doors.

Tekući sloj možeš da izabereš i u {{ui:Trenutna podešavanja}} desno (kada ništa nije izabrano), pod {{ui:Sloj}}.

## Premesti objekte na drugi sloj

1. Izaberi objekte.
2. U desnom panelu izaberi novi sloj pod {{ui:Sloj}}.

Premeštaju se na taj sloj i preuzimaju njegovu boju ako je njihova boja {{ui:Po sloju}}.

## Isključi, zamrzni, zaključaj i štampanje

| Dugme | Šta radi |
|---|---|
| Uključi/isključi (oko) | Sakriva objekte sloja. Ne mogu da se vide, izaberu ili uhvate za njih. |
| Zamrzni (pahulja) | U CadCraft-u isto kao isključivanje. Čuva se odvojeno jer ga drugi programi drugačije tretiraju, a podešavanje se čuva. |
| Zaključaj (lokot) | Objekti ostaju vidljivi i može da se uhvati za njih, ali ne mogu da se biraju ni menjaju. Dobro za pozadinu preko koje crtaš. |
| Štampanje (štampač) | Kada je pritisnuto, sloj se prikazuje na ekranu, ali **ne ulazi u štampanje** ni u PDF. Koristi ga za pomoćne linije i napomene za sebe. |

Zadrži pokazivač na dugmetu da vidiš šta će da uradi („Isključi“, „Zamrzni“, „Zaključaj“, „Ne štampaj ovaj sloj“).

Tekući sloj se ne može isključiti: statusna traka kaže „To je tekući sloj. Najpre postavi drugi sloj kao tekući.“ Klik na ime sloja da ga učiniš tekućim takođe ga uključuje i odmrzava.

Svaka promena sloja, u panelu ili komandom, je jedan korak opozivanja: {{key:Mod+Z}} ga vraća.

## Radi sa slojevima biranjem objekata

Ne moraš da znaš ime sloja: izaberi objekat na njemu. Ukucaj komandu ili otvori {{ui:Alatke}} na vrhu panela {{ui:Slojevi}}.

| Komanda | Šta radi |
|---|---|
| {{cmd:LAYISO}} | Izaberi objekte, pritisni {{key:Enter}}: ostaju uključeni samo njihovi slojevi, a svi ostali se isključuju. Ako je tekući sloj isključen, jedan od izolovanih slojeva postaje tekući. |
| {{cmd:LAYUNISO}} | Ponovo uključuje slojeve koje je poslednji {{cmd:LAYISO}} isključio i vraća tekući sloj koji je promenio. |
| {{cmd:LAYOFF}} | Klikni objekte jedan za drugim: sloj svakog se isključuje. Ukucaj `U` da vratiš poslednji, {{key:Enter}} za kraj. |
| {{cmd:LAYFRZ}} | Isto, ali zamrzava sloj svakog. |
| {{cmd:LAYMCUR}} | Klikni objekat: njegov sloj postaje tekući (i uključuje se i odmrzava). Ako je već izabran jedan objekat, koristi se on. |
| {{cmd:LAYON}} | Uključuje sve slojeve. |
| {{cmd:LAYTHW}} | Odmrzava sve slojeve. |

Tekući sloj se na ovaj način nikad ne isključuje ni zamrzava: istorija to kaže, a pre toga možeš drugi sloj da postaviš kao tekući pomoću {{cmd:LAYMCUR}}. Biranje referenci blokova koristi sloj same reference.

## Preimenuj, spoji i obriši slojeve

- {{cmd:RENAME}}: ukucaj `LA`, staro ime i novo. Svaki objekat na sloju prati promenu. (`B` preimenuje blok na isti način, sa svim referencama na njega.)
- {{cmd:LAYMRG}}: klikni objekat na svakom sloju koji spajaš (ili ukucaj `N` i ime), pritisni {{key:Enter}}, zatim izaberi ciljni sloj i odgovori `Y`. Objekti idu na cilj — u modelu, na listovima i unutar blokova — a spojeni slojevi nestaju.
- {{cmd:LAYDEL}}: izaberi objekat na sloju (ili `N` i njegovo ime) i odgovori `Y`. Sloj odlazi **sa svakim objektom na njemu**, svuda. Sloj 0, DEFPOINTS i tekući sloj ne mogu da se obrišu.

Svaka je jedan korak opozivanja. Sve tri su u {{ui:Alatke}} na vrhu panela {{ui:Slojevi}}.

1. Klikni jednu liniju zida, zatim ukucaj `LAYISO` i pritisni {{key:Enter}}. Ostaje uključen samo Walls.
2. Nacrtaj ili promeni šta ti treba na Walls.
3. Ukucaj `LAYUNISO` i pritisni {{key:Enter}}. Doors i Notes se vraćaju.

## Česte greške

- **Nove linije su otišle na pogrešan sloj.** Pogledaj koja je tačka popunjena pre crtanja. Novi sloj postaje tekući čim ga dodaš.
- **Objekat se ne bira.** Njegov sloj je zaključan, isključen ili zamrznut.
- **Sloj se i dalje štampa u drugom programu.** DXF R12 ne može da čuva „ne štampaj“. CadCraft to podešavanje zadržava za sebe kada crtež ima list, ali će ga drugi programi štampati.
- **Imena slojeva su posle čuvanja velikim slovima.** DXF R12 čuva imena velikim slovima, pa se `Walls` vraća kao `WALLS`, a razmaci postaju `_`. Sačuvan DWG čuva imena onako kako si ih ukucao.
- **Preimenovanje, spajanje ili brisanje sloja.** Koristi {{cmd:RENAME}}, {{cmd:LAYMRG}} ili {{cmd:LAYDEL}} (takođe u {{ui:Alatke}}): vidi dole.

## Grupiši slojeve

Održi spisak kratkim tako što slojeve stavljaš u fascikle, na primer Postojeće, Predloženo i Instalacije. Svaka fascikla se sklapa, a njeni prekidači uključuju ili isključuju sve njene slojeve, zamrzavaju ih ili zaključavaju zajedno. Tekući sloj se nikad ne isključuje.

U {{ui:Alatke}} na panelu Slojevi izaberi {{ui:Dodaj gotove grupe}} za skup napravljen za male stambene radove, {{ui:Grupiši po imenu}} da grupišeš slojeve koji dele prefiks (`E-Walls`, `E-Doors`), ili {{ui:Nova grupa}}. Prevuci sloj na fasciklu ili koristi spisak iznad slojeva za tekući sloj. Ukucaj u {{ui:Pronađi sloj}} da suziš spisak. `LAYGROUP` (`LG`) radi isto u komandnoj liniji.

Sami slojevi se ne menjaju, pa drugi CAD programi vide običan ravan spisak. CadCraft čuva grupe u datoteci.
