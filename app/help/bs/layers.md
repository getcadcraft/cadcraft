---
title: Organizacija crteža pomoću slojeva
summary: Napravite slojeve za zidove, vrata i napomene, postavite boje, izaberite tekući sloj i isključite, zamrznite, zaključajte ili izuzmite slojeve iz štampe.
keywords: sloj, slojevi, la, tekući sloj, zamrzni, odmrzni, zaključaj, isključi, uključi, štampa, bez štampe, boja, svojstva sloja, layiso, layuniso, izoliraj, layoff, layfrz, laymcur, layon, laythw, preimenuj, laymrg, spoji, laydel, obriši sloj
from: ba9f0617
---

## Šta ćete napraviti

Tri sloja, Walls, Doors i Notes, svaki sa vlastitom bojom, sa objektima nacrtanim na svakom i premještenim između njih.

## Panel Slojevi

Slojevi su u panelu lijevo, pod {{ui:Slojevi}}. Svaki red prikazuje, s lijeva na desno:

- tačku: punu za **tekući** sloj, u koji idu novi objekti;
- uzorak boje;
- naziv sloja;
- četiri dugmeta: uključi/isključi (oko), zamrzni (pahuljica), zaključaj (lokot) i štampa (štampač).

Svaki crtež ima sloj nazvan `0`. Ukucavanje `LA` i pritiskanje {{key:Enter}} vodi do panela.

## Pravljenje slojeva

1. Kliknite {{ui:Novi sloj}} iznad spiska. Otvara se polje za naziv.
2. Ukucajte `Walls` i pritisnite {{key:Enter}} (ili kliknite {{ui:Dodaj}}).

Statusna traka kaže: "Dodan je sloj Walls i postavljen kao tekući." Novi sloj dobija boju 7 (crna na svijetloj temi, bijela na tamnoj).

3. Kliknite {{ui:Novi sloj}} ponovo, ukucajte `Doors` i pritisnite {{key:Enter}}.
4. Kliknite {{ui:Novi sloj}} ponovo, ukucajte `Notes` i pritisnite {{key:Enter}}.

Sada je tekući sloj Notes.

## Dajte svakom sloju boju

1. Kliknite uzorak boje u redu Walls. Otvara se birač boja vašeg sistema.
2. Izaberite boju i potvrdite.

Uzorak i sve na Walls što je obojeno {{ui:Po sloju}} mijenjaju se.

:::note
Izabrana boja koja odgovara jednoj od 255 standardnih CAD boja čuva se kao taj broj. Svaka druga boja ostaje tačno u CadCraft-u, ali se u DWG ili DXF datoteci čuva kao najbliža standardna boja.
:::

## Crtanje na sloju

1. Kliknite naziv **Walls** u spisku. Njegova tačka se puni, a statusna traka kaže: "Tekući sloj: Walls".
2. Nacrtajte pravougaonik (`REC`). Ide na Walls.
3. Kliknite **Doors** i nacrtajte luk (`A`). Ide na Doors.

Tekući sloj možete izabrati i u {{ui:Trenutne postavke}} desno (ništa nije odabrano), pod {{ui:Sloj}}.

## Premještanje objekata na drugi sloj

1. Odaberite objekte.
2. U desnom panelu izaberite novi sloj u {{ui:Sloj}}.

Premještaju se na taj sloj i preuzimaju njegovu boju ako je njihova boja {{ui:Po sloju}}.

## Isključi, zamrzni, zaključaj i štampa

| Dugme | Šta radi |
|---|---|
| Uključi/isključi (oko) | Skriva objekte sloja. Ne mogu se vidjeti, odabrati niti hvatati. |
| Zamrzni (pahuljica) | Isti efekat kao isključivanje u CadCraft-u. Čuva se odvojeno jer drugi programi to različito tretiraju, i postavka se čuva. |
| Zaključaj (lokot) | Objekti ostaju vidljivi i možete ih hvatati, ali ne mogu se odabrati ni mijenjati. Dobro za pozadinu koju obilazite. |
| Štampa (štampač) | Kad je pritisnuto, sloj se prikazuje na ekranu ali je **izostavljen iz štampe** i PDF-ova. Koristite ga za pomoćne linije i napomene za sebe. |

Pređite mišem preko dugmeta da vidite šta će uraditi: "Isključi", "Zamrzni", "Zaključaj", "Ne štampaj ovaj sloj".

Tekući sloj ne možete isključiti: statusna traka kaže "To je tekući sloj. Prvo postavite drugi sloj kao tekući." Klik na naziv sloja da bi postao tekući takođe ga uključuje i odmrzava.

Svaka promjena sloja, u panelu ili naredbom, jedan je korak poništavanja: {{key:Mod+Z}} je vraća.

## Rad sa slojevima biranjem objekata

Ne morate znati naziv sloja: odaberite objekat na njemu. Ukucajte naredbu, ili otvorite {{ui:Alati}} na vrhu panela {{ui:Slojevi}}.

| Naredba | Šta radi |
|---|---|
| {{cmd:LAYISO}} | Odaberite objekte, pritisnite {{key:Enter}}: ostaju uključeni samo njihovi slojevi, svi ostali slojevi se isključuju. Ako je tekući sloj isključen, jedan od izolovanih slojeva postaje tekući. |
| {{cmd:LAYUNISO}} | Ponovo uključuje slojeve koje je posljednji {{cmd:LAYISO}} isključio, i vraća tekući sloj koji je promijenio. |
| {{cmd:LAYOFF}} | Kliknite objekte jedan po jedan: sloj svakog se isključuje. Ukucajte `U` da poništite posljednji, {{key:Enter}} da završite. |
| {{cmd:LAYFRZ}} | Isto, ali zamrzava svaki sloj. |
| {{cmd:LAYMCUR}} | Kliknite objekat: njegov sloj postaje tekući (i uključuje se i odmrzava). Ako je jedan objekat već odabran, koristi se on. |
| {{cmd:LAYON}} | Uključuje svaki sloj. |
| {{cmd:LAYTHW}} | Odmrzava svaki sloj. |

Tekući sloj se ovako nikad ne isključuje ni zamrzava: historija to kaže, a prvo možete drugi sloj postaviti kao tekući pomoću {{cmd:LAYMCUR}}. Biranje reference bloka koristi sloj same reference.

## Preimenovanje, spajanje i brisanje slojeva

- {{cmd:RENAME}}: ukucajte `LA`, stari naziv i novi. Svaki objekat na sloju ide za njim. (`B` preimenuje blok na isti način, sa svakom referencom na njega.)
- {{cmd:LAYMRG}}: kliknite objekat na svakom sloju za spajanje (ili ukucajte `N` i naziv), pritisnite {{key:Enter}}, zatim izaberite ciljni sloj i odgovorite `Y`. Objekti idu na cilj — u modelu, na listovima i unutar blokova — a spojeni slojevi nestaju.
- {{cmd:LAYDEL}}: izaberite objekat na sloju (ili `N` i njegov naziv) i odgovorite `Y`. Sloj nestaje **sa svakim objektom na njemu**, svuda. Sloj 0, DEFPOINTS i tekući sloj ne mogu se obrisati.

Svaka je jedan korak poništavanja. Sve tri su u {{ui:Alati}} na vrhu panela {{ui:Slojevi}}.

1. Kliknite jednu liniju zida, zatim ukucajte `LAYISO` i pritisnite {{key:Enter}}. Ostaje uključen samo Walls.
2. Nacrtajte ili promijenite šta treba na Walls.
3. Ukucajte `LAYUNISO` i pritisnite {{key:Enter}}. Doors i Notes se vraćaju.

## Česte greške

- **Nove linije su otišle na pogrešan sloj.** Provjerite koja tačka je puna prije crtanja. Novi sloj postaje tekući čim ga dodate.
- **Objekat se ne može odabrati.** Njegov sloj je zaključan, isključen ili zamrznut.
- **Sloj se i dalje štampa u drugom programu.** DXF R12 ne može čuvati "ne štampaj". CadCraft zadržava postavku za sebe kad crtež ima list, ali drugi programi će štampati taj sloj.
- **Nazivi slojeva velikim slovima nakon spašavanja.** DXF R12 čuva nazive velikim slovima, pa se `Walls` vraća kao `WALLS`, a razmaci postaju `_`. Spašeni DWG čuva nazive onako kako ste ih ukucali.
- **Preimenovanje, spajanje ili brisanje sloja.** Koristite {{cmd:RENAME}}, {{cmd:LAYMRG}} ili {{cmd:LAYDEL}} (takođe u {{ui:Alati}}): vidi dalje.

## Grupisanje slojeva

Držite spisak kratkim tako što slojeve stavljate u fascikle, kao što su Existing, Proposed i Services. Svaka fascikla se sklapa, a njeni prekidači uključuju ili isključuju sve njene slojeve, zamrzavaju ih ili zaključavaju zajedno. Tekući sloj se nikad ne isključuje.

U {{ui:Alati}} na panelu Slojevi izaberite {{ui:Dodaj gotove grupe}} za skup napravljen za male stambene radove, {{ui:Grupiši po nazivu}} da grupišete slojeve koji dijele prefiks (`E-Walls`, `E-Doors`), ili {{ui:Nova grupa}}. Prevucite sloj na fasciklu, ili koristite spisak iznad slojeva za tekući sloj. Ukucajte u {{ui:Pronađi sloj}} da suzite spisak. `LAYGROUP` (`LG`) radi isto u komandnoj liniji.

Da preimenujete grupu, dvaput kliknite njen naziv (ili je odaberite i pritisnite {{key:F2}}), ukucajte novi naziv i pritisnite {{key:Enter}}; {{key:Esc}} zadržava stari, a {{cmd:UNDO}} ga vraća. {{ui:Nova grupa}} je u {{ui:Alati}} na panelu Slojevi.

Sami slojevi se ne mijenjaju, pa drugi CAD programi vide običan ravan spisak. CadCraft čuva grupe u datoteci.
