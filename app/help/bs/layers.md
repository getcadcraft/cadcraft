---
title: Organizuj crtež pomoću slojeva
summary: Napravi slojeve za zidove, vrata i napomene, postavi boje, učini sloj tekućim i isključi slojeve, zamrzni, zaključaj ili ih spriječi da se štampaju.
keywords: sloj, slojevi, la, tekući sloj, zamrzni, odmrzni, zaključaj, isključi, uključi, štampa, ne štampaj, boja, svojstva sloja, layiso, layuniso, izoluj, layoff, layfrz, laymcur, layon, laythw, preimenuj, laymrg, spoji, laydel, izbriši sloj
from: cd033591
---

## Šta ćeš napraviti

Tri sloja, Zidovi, Vrata i Napomene, svaki sa svojom bojom, s objektima nacrtanim na svakom i premještenim između njih.

## Panel Slojevi

Slojevi se nalaze u panelu lijevo, ispod {{ui:Slojevi}}. Svaki red prikazuje, slijeva nadesno:

- tačku: ispunjena za **tekući** sloj, gdje idu novi objekti;
- uzorak boje;
- naziv sloja;
- četiri dugmeta: uključi/isključi (oko), zamrzni (pahulja), zaključaj (lokot) i štampa (štampač).

Svaki crtež ima sloj zvan `0`. Kucanje `LA` i pritisak na {{key:Enter}} prebacuje na panel.

## Napravi slojeve

1. Klikni {{ui:Novi sloj}} iznad liste. Otvara se polje za naziv.
2. Ukucaj `Zidovi` i pritisni {{key:Enter}} (ili klikni {{ui:Dodaj}}).

Statusna traka kaže "Dodan sloj Zidovi i postavljen kao tekući." Novi sloj dobija boju 7 (crna na svijetloj temi, bijela na tamnoj).

3. Ponovo klikni {{ui:Novi sloj}}, ukucaj `Vrata` i pritisni {{key:Enter}}.
4. Ponovo klikni {{ui:Novi sloj}}, ukucaj `Napomene` i pritisni {{key:Enter}}.

Napomene je sada tekući sloj.

## Dodijeli boju svakom sloju

1. Klikni uzorak boje u redu Zidovi. Otvara se birač boja tvog sistema.
2. Izaberi boju i potvrdi.

Uzorak i sve na Zidovima što je obojeno bojom {{ui:Po sloju}} se mijenjaju.

:::note
Izabrana boja koja odgovara jednoj od 255 standardnih CAD boja čuva se kao taj broj. Svaka druga boja se u CadCraftu čuva tačno, ali se u DWG ili DXF datoteci snima kao najbliža standardna boja.
:::

## Crtaj na sloju

1. Klikni naziv **Zidovi** na listi. Tačka se ispuni i statusna traka kaže "Tekući sloj: Zidovi".
2. Nacrtaj pravougaonik (`REC`). Ide na Zidovi.
3. Klikni **Vrata** i nacrtaj luk (`A`). Ide na Vrata.

Tekući sloj možeš izabrati i u {{ui:Trenutne postavke}} desno (kada ništa nije odabrano), pod {{ui:Sloj}}.

## Premjesti objekte na drugi sloj

1. Odaberi objekte.
2. U desnom panelu izaberi novi sloj pod {{ui:Sloj}}.

Premjeste se na taj sloj i preuzimaju njegovu boju ako je njihova boja {{ui:Po sloju}}.

## Isključi, zamrzni, zaključaj i štampaj

| Dugme | Šta radi |
|---|---|
| Uključi/isključi (oko) | Sakriva objekte sloja. Ne mogu se vidjeti, odabrati ni uhvatiti. |
| Zamrzni (pahulja) | U CadCraftu isto što i isključi. Odvojeno je jer drugi programi to razlikuju, a postavka se čuva. |
| Zaključaj (lokot) | Objekti ostaju vidljivi i možeš ih uhvatiti, ali se ne mogu odabrati ni mijenjati. Dobro za pozadinu preko koje crtaš. |
| Štampa (štampač) | Kada je pritisnuto, sloj se prikazuje na ekranu, ali se **izostavlja iz štampanja** i PDF-ova. Koristi za konstrukcijske linije i napomene za sebe. |

Pređi mišem preko dugmeta da vidiš šta će uraditi ("Isključi", "Zamrzni", "Zaključaj", "Ne štampaj ovaj sloj").

Ne možeš isključiti tekući sloj: statusna traka kaže "To je tekući sloj. Prvo postavi neki drugi sloj kao tekući." Klik na naziv sloja da ga učiniš tekućim također ga uključuje i odmrzava.

Svaka promjena sloja, u panelu ili naredbom, je jedan korak poništavanja: {{key:Mod+Z}} ga vraća.

## Radi sa slojevima biranjem objekata

Ne moraš znati naziv sloja: odaberi objekat na njemu. Ukucaj naredbu ili otvori {{ui:Alati}} na vrhu panela {{ui:Slojevi}}.

| Naredba | Šta radi |
|---|---|
| {{cmd:LAYISO}} | Odaberi objekte, pritisni {{key:Enter}}: ostaju uključeni samo njihovi slojevi, a svi ostali se isključuju. Ako je tekući sloj isključen, jedan od izolovanih slojeva postaje tekući. |
| {{cmd:LAYUNISO}} | Ponovo uključuje slojeve koje je posljednji {{cmd:LAYISO}} isključio i vraća tekući sloj koji je promijenio. |
| {{cmd:LAYOFF}} | Klikni objekte jedan za drugim: sloj svakog se isključuje. Ukucaj `U` da poništiš posljednji, {{key:Enter}} za završetak. |
| {{cmd:LAYFRZ}} | Isto, ali zamrzava svaki sloj. |
| {{cmd:LAYMCUR}} | Klikni objekat: njegov sloj postaje tekući (i uključuje se i odmrzava). Ako je jedan objekat već odabran, koristi se on. |
| {{cmd:LAYON}} | Uključuje sve slojeve. |
| {{cmd:LAYTHW}} | Odmrzava sve slojeve. |

Tekući sloj se na ovaj način nikada ne isključuje ni zamrzava: historija to kaže, a prije toga možeš drugi sloj postaviti kao tekući pomoću {{cmd:LAYMCUR}}. Ako odabereš referencu bloka, koristi se sloj same reference.

## Preimenuj, spoji i izbriši slojeve

- {{cmd:RENAME}}: ukucaj `LA`, stari naziv i novi. Svaki objekat na sloju prati promjenu. (`B` preimenuje blok na isti način, sa svim referencama na njega.)
- {{cmd:LAYMRG}}: klikni objekat na svakom sloju koji spajaš (ili ukucaj `N` i naziv), pritisni {{key:Enter}}, zatim izaberi ciljni sloj i odgovori `Y`. Objekti idu na cilj (u modelu, na listovima i unutar blokova), a spojeni slojevi nestaju.
- {{cmd:LAYDEL}}: odaberi objekat na sloju (ili `N` i njegov naziv) i odgovori `Y`. Sloj nestaje **sa svim objektima na njemu**, svuda. Sloj 0, DEFPOINTS i tekući sloj ne mogu se izbrisati.

Svaka od ovih radnji je jedan korak poništavanja. Sve tri su u {{ui:Alati}} na vrhu panela {{ui:Slojevi}}.

1. Klikni jednu liniju zida, zatim ukucaj `LAYISO` i pritisni {{key:Enter}}. Ostaje uključen samo Zidovi.
2. Nacrtaj ili promijeni što treba na Zidovima.
3. Ukucaj `LAYUNISO` i pritisni {{key:Enter}}. Vrata i Napomene se vraćaju.

## Česte greške

- **Nove linije su završile na pogrešnom sloju.** Provjeri koja je tačka ispunjena prije crtanja. Novi sloj postaje tekući čim ga dodaš.
- **Objekat se ne može odabrati.** Njegov sloj je zaključan, isključen ili zamrznut.
- **Sloj se i dalje štampa u drugom programu.** DXF R12 ne može čuvati "ne štampaj". CadCraft zadržava postavku za sebe kada crtež ima list, ali će drugi programi štampati taj sloj.
- **Nazivi slojeva velikim slovima nakon snimanja.** DXF R12 čuva nazive velikim slovima, pa se `Zidovi` vraća kao `ZIDOVI`, a razmaci postaju `_`. Snimljeni DWG čuva nazive kako si ih ukucao.
- **Preimenovanje, spajanje ili brisanje sloja.** Koristi {{cmd:RENAME}}, {{cmd:LAYMRG}} ili {{cmd:LAYDEL}} (također u {{ui:Alati}}): vidi gore.

## Grupiši slojeve

Lista ostaje kratka kada slojeve stavljaš u foldere, npr. Postojeći, Predloženi i Instalacije. Svaki folder se sklapa, a njegovi prekidači uključuju ili isključuju sve njegove slojeve, zamrzavaju ih ili zaključavaju zajedno. Tekući sloj se nikada ne isključuje.

U {{ui:Alati}} na panelu Slojevi izaberi {{ui:Dodaj gotove grupe}} za skup napravljen za manje stambene radove, {{ui:Grupiši po nazivu}} da grupišeš slojeve koji dijele prefiks (`E-Zidovi`, `E-Vrata`), ili {{ui:Nova grupa}}. Prevuci sloj na folder ili koristi listu iznad slojeva za tekući sloj. Ukucaj u {{ui:Pronađi sloj}} da suziš listu. `LAYGROUP` (`LG`) radi isto u komandnoj liniji.

Slojevi sami se ne mijenjaju, pa ih drugi CAD programi vide kao običnu ravnu listu. CadCraft čuva grupe u datoteci.
