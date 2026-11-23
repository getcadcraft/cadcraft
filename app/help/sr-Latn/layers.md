---
title: Organizacija crteža slojevima
summary: Napravite slojeve za zidove, vrata i napomene, podesite boje, postavite tekući sloj i isključite, zamrznite, zaključajte ili izuzmite slojeve iz štampanja.
keywords: sloj, slojevi, la, tekući sloj, zamrzni, odmrzni, zaključaj, isključi, uključi, štampaj, ne štampaj, boja, svojstva sloja, layiso, layuniso, izoluj, layoff, layfrz, laymcur, layon, laythw, preimenuj, laymrg, spoji, laydel, obriši sloj
from: ba9f0617
---

## Šta ćete napraviti

Tri sloja, Walls, Doors i Notes, svaki sa sopstvenom bojom, sa objektima nacrtanim na svakom i premeštenim između njih.

## Panel Slojevi

Slojevi su u panelu sa leve strane, pod {{ui:Slojevi}}. Svaki red prikazuje, s leva na desno:

- tačku: popunjenu za **tekući** sloj, na koji idu novi objekti;
- uzorak boje;
- naziv sloja;
- četiri dugmeta: uključi/isključi (oko), zamrzni (pahuljica), zaključaj (lokot) i štampaj (štampač).

Svaki crtež ima sloj nazvan `0`. Ukucavanje `LA` i pritisak na {{key:Enter}} skače na panel.

## Pravljenje slojeva

1. Kliknite {{ui:Novi sloj}} iznad spiska. Otvara se polje za ime.
2. Ukucajte `Walls` i pritisnite {{key:Enter}} (ili kliknite {{ui:Dodaj (A)}}).

Statusna traka kaže „Dodat sloj Walls i postavljen kao tekući.“ Novi sloj dobija boju 7 (crna na svetloj temi, bela na tamnoj).

3. Ponovo kliknite {{ui:Novi sloj}}, ukucajte `Doors` i pritisnite {{key:Enter}}.
4. Ponovo kliknite {{ui:Novi sloj}}, ukucajte `Notes` i pritisnite {{key:Enter}}.

Notes je sada tekući.

## Davanje boje svakom sloju

1. Kliknite uzorak boje u redu Walls. Otvara se birač boja vašeg sistema.
2. Izaberite boju i potvrdite.

Uzorak i sve na Walls što je obojeno kao {{ui:Po sloju}} se menja.

:::note
Izabrana boja koja odgovara jednoj od 255 standardnih CAD boja čuva se kao taj broj. Svaka druga boja se u CadCraft-u čuva tačno, ali se u DWG ili DXF datoteci čuva kao najbliža standardna boja.
:::

## Crtanje na sloju

1. Kliknite naziv **Walls** na spisku. Njegova tačka se popunjava, a statusna traka kaže „Tekući sloj: Walls“.
2. Nacrtajte pravougaonik (`REC`). Ide na Walls.
3. Kliknite **Doors** i nacrtajte luk (`A`). Ide na Doors.

Tekući sloj možete izabrati i u {{ui:Trenutna podešavanja}} desno (kada ništa nije izabrano), pod {{ui:Sloj}}.

## Premeštanje objekata na drugi sloj

1. Izaberite objekte.
2. U desnom panelu izaberite novi sloj u {{ui:Sloj}}.

Prelaze na taj sloj i preuzimaju njegovu boju ako je njihova boja {{ui:Po sloju}}.

## Isključivanje, zamrzavanje, zaključavanje i štampanje

| Dugme | Šta radi |
|---|---|
| Uključi/isključi (oko) | Sakriva objekte sloja. Ne mogu se videti, birati ili hvatati. |
| Zamrzni (pahuljica) | U CadCraft-u isti efekat kao isključivanje. Držano odvojeno jer ih drugi programi različito tretiraju, a postavka se čuva. |
| Zaključaj (lokot) | Objekti ostaju vidljivi i možete se hvatati za njih, ali se ne mogu birati ili menjati. Dobro za pozadinu preko koje crtate. |
| Štampaj (štampač) | Kada je pritisnuto, sloj se prikazuje na ekranu ali se **izostavlja iz štampe** i PDF-ova. Koristite ga za pomoćne linije i napomene za sebe. |

Zadržite pokazivač na dugmetu da vidite šta će uraditi („Isključi“, „Zamrzni“, „Zaključaj“, „Ne štampaj ovaj sloj“).

Tekući sloj ne možete isključiti: statusna traka kaže „To je tekući sloj. Prvo postavite drugi sloj kao tekući.“ Klik na naziv sloja da bi postao tekući takođe ga uključuje i odmrzava.

Svaka promena sloja, u panelu ili komandom, je jedan korak opozivanja: {{key:Mod+Z}} je vraća.

## Rad sa slojevima biranjem objekata

Ne morate znati naziv sloja: izaberite objekat na njemu. Ukucajte komandu, ili otvorite {{ui:Alatke}} na vrhu panela {{ui:Slojevi}}.

| Komanda | Šta radi |
|---|---|
| {{cmd:LAYISO}} | Izaberite objekte, pritisnite {{key:Enter}}: ostaju uključeni samo njihovi slojevi, a svi ostali se isključuju. Ako je tekući sloj isključen, jedan od izolovanih slojeva postaje tekući. |
| {{cmd:LAYUNISO}} | Ponovo uključuje slojeve koje je poslednji {{cmd:LAYISO}} isključio, i vraća tekući sloj koji je promenio. |
| {{cmd:LAYOFF}} | Kliknite objekte jedan za drugim: sloj svakog se isključuje. Ukucajte `U` da opozovete poslednji, {{key:Enter}} za kraj. |
| {{cmd:LAYFRZ}} | Isto, ali zamrzava svaki sloj. |
| {{cmd:LAYMCUR}} | Kliknite objekat: njegov sloj postaje tekući (i uključuje se i odmrzava). Ako je jedan objekat već izabran, koristi se on. |
| {{cmd:LAYON}} | Uključuje svaki sloj. |
| {{cmd:LAYTHW}} | Odmrzava svaki sloj. |

Tekući sloj se na ovaj način nikada ne isključuje niti zamrzava: istorija to kaže, a pre toga možete postaviti drugi sloj kao tekući sa {{cmd:LAYMCUR}}. Kada izaberete referencu bloka, koristi se sopstveni sloj reference.

## Preimenovanje, spajanje i brisanje slojeva

- {{cmd:RENAME}}: ukucajte `LA`, stari naziv i novi. Svaki objekat na sloju prati ga. (`B` preimenuje blok na isti način, sa svim referencama na njega.)
- {{cmd:LAYMRG}}: kliknite objekat na svakom sloju koji spajate (ili ukucajte `N` i naziv), pritisnite {{key:Enter}}, zatim izaberite ciljni sloj i odgovorite `Y`. Objekti prelaze na cilj, u modelu, na listovima i unutar blokova, a spojeni slojevi nestaju.
- {{cmd:LAYDEL}}: izaberite objekat na sloju (ili `N` i naziv) i odgovorite `Y`. Sloj nestaje **zajedno sa svim objektima na njemu**, svuda. Sloj 0, DEFPOINTS i tekući sloj se ne mogu obrisati.

Svaka je jedan korak opozivanja. Sve tri su u {{ui:Alatke}} na vrhu panela {{ui:Slojevi}}.

1. Kliknite jednu liniju zida, zatim ukucajte `LAYISO` i pritisnite {{key:Enter}}. Ostaje uključen samo Walls.
2. Nacrtajte ili promenite šta vam treba na Walls.
3. Ukucajte `LAYUNISO` i pritisnite {{key:Enter}}. Doors i Notes se vraćaju.

## Česte greške

- **Nove linije su otišle na pogrešan sloj.** Pre crtanja proverite koja je tačka popunjena. Novi sloj postaje tekući čim ga dodate.
- **Objekat se ne bira.** Njegov sloj je zaključan, isključen ili zamrznut.
- **Sloj se i dalje štampa u drugom programu.** DXF R12 ne može da sačuva „ne štampaj“. CadCraft zadržava tu postavku za sebe kada crtež ima list, ali će drugi programi štampati taj sloj.
- **Nazivi slojeva velikim slovima posle čuvanja.** DXF R12 čuva nazive velikim slovima, pa se `Walls` vraća kao `WALLS`, a razmaci postaju `_`. Sačuvani DWG zadržava nazive kako ste ih ukucali.
- **Preimenovanje, spajanje ili brisanje sloja.** Koristite {{cmd:RENAME}}, {{cmd:LAYMRG}} ili {{cmd:LAYDEL}} (takođe u {{ui:Alatke}}): vidi ispod.

## Grupisanje slojeva

Držite spisak kratkim tako što slojeve stavljate u fascikle, kao što su Existing, Proposed i Services. Svaka fascikla se sklapa, a njeni prekidači uključuju ili isključuju sve njene slojeve, zamrzavaju ih ili zaključavaju zajedno. Tekući sloj se nikada ne isključuje.

U {{ui:Alatke}} na panelu Slojevi izaberite {{ui:Dodaj gotove grupe}} za skup napravljen za mali stambeni posao, {{ui:Grupiši po imenu}} da grupišete slojeve koji dele prefiks (`E-Walls`, `E-Doors`), ili {{ui:Nova grupa}}. Prevucite sloj na fasciklu, ili koristite spisak iznad slojeva za tekući sloj. Ukucajte u {{ui:Pronađi sloj}} da suzite spisak. `LAYGROUP` (`LG`) radi isto u komandnoj liniji.

Da preimenujete grupu, dvaput kliknite njen naziv (ili je izaberite i pritisnite {{key:F2}}), ukucajte novi naziv i pritisnite {{key:Enter}}; {{key:Esc}} zadržava stari, a {{cmd:UNDO}} ga vraća. {{ui:Nova grupa}} je u {{ui:Alatke}} na panelu Slojevi.

Sami slojevi se ne menjaju, pa ih drugi CAD programi vide kao običan ravan spisak. CadCraft čuva grupe u datoteci.
