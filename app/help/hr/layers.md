---
title: Organizirajte crtež slojevima
summary: Stvorite slojeve za zidove, vrata i bilješke, postavite boje, učinite sloj aktivnim te isključite slojeve, zamrznite ih, zaključajte ili ih spriječite u plotanju.
keywords: sloj, slojevi, la, aktivni sloj, zamrzni, odmrzni, zaključaj, isključeno, uključeno, plot, bez plotanja, boja, svojstva sloja, layiso, layuniso, izoliraj, layoff, layfrz, laymcur, layon, laythw, preimenuj, laymrg, spoji, laydel, izbriši sloj
from: cd033591
---

## Što ćete napraviti

Tri sloja, Zidovi, Vrata i Bilješke, svaki sa svojom bojom, s objektima nacrtanim na svakom i premještenima između njih.

## Ploča Slojevi

Slojevi se nalaze na ploči lijevo, pod {{ui:Slojevi}}. Svaki redak prikazuje, s lijeva na desno:

- točku: punu za **aktivni** sloj, na koji idu novi objekti;
- uzorak boje;
- naziv sloja;
- četiri gumba: uključeno/isključeno (oko), zamrzni (pahulja), zaključaj (lokot) i plotanje (pisač).

Svaki crtež ima sloj nazvan `0`. Upis `LA` i pritisak na {{key:Enter}} prebacuje na ploču.

## Stvorite slojeve

1. Kliknite {{ui:Novi sloj}} iznad popisa. Otvara se polje za naziv.
2. Upišite `Zidovi` i pritisnite {{key:Enter}} (ili kliknite {{ui:Dodaj (A)}}).

Statusna traka kaže: „Dodan je sloj Zidovi i postavljen kao aktivni.“ Novi sloj dobiva boju 7 (crna na svijetloj temi, bijela na tamnoj).

3. Ponovno kliknite {{ui:Novi sloj}}, upišite `Vrata` i pritisnite {{key:Enter}}.
4. Ponovno kliknite {{ui:Novi sloj}}, upišite `Bilješke` i pritisnite {{key:Enter}}.

Sloj Bilješke sada je aktivan.

## Dodijelite boju svakom sloju

1. Kliknite uzorak boje u retku Zidovi. Otvara se birač boja vašeg sustava.
2. Odaberite boju i potvrdite.

Uzorak i sve na sloju Zidovi što je obojeno {{ui:Po sloju}} mijenjaju se.

:::note
Odabrana boja koja odgovara jednoj od 255 standardnih CAD boja sprema se kao taj broj. Svaka druga boja čuva se točno u CadCraftu, ali se u datoteci DWG ili DXF sprema kao najbliža standardna boja.
:::

## Crtajte na sloju

1. Kliknite naziv **Zidovi** na popisu. Njegova točka se popuni i statusna traka kaže: „Aktivni sloj: Zidovi“.
2. Nacrtajte pravokutnik (`REC`). Ide na Zidove.
3. Kliknite **Vrata** i nacrtajte luk (`A`). Ide na Vrata.

Aktivni sloj možete odabrati i u {{ui:Trenutne postavke}} desno (kad ništa nije odabrano), pod {{ui:Sloj}}.

## Premjestite objekte na drugi sloj

1. Odaberite objekte.
2. U desnoj ploči odaberite novi sloj u {{ui:Sloj}}.

Premještaju se na taj sloj i preuzimaju njegovu boju ako je njihova boja {{ui:Po sloju}}.

## Isključeno, zamrznuto, zaključano i plotanje

| Gumb | Što radi |
|---|---|
| Uključeno/isključeno (oko) | Skriva objekte sloja. Ne mogu se vidjeti, odabrati niti hvatati. |
| Zamrzni (pahulja) | Isti učinak kao isključeno u CadCraftu. Zadržano odvojeno jer drugi programi to razlikuju, a postavka se sprema. |
| Zaključaj (lokot) | Objekti ostaju vidljivi i možete se hvatati za njih, ali ih nije moguće odabrati niti mijenjati. Dobro za pozadinu koju obrubljujete. |
| Plotanje (pisač) | Kad je pritisnut, sloj se prikazuje na zaslonu, ali se **izostavlja iz plotova** i PDF-ova. Koristite za konstrukcijske linije i bilješke za sebe. |

Zadržite pokazivač na gumbu da vidite što će učiniti („Isključi“, „Zamrzni“, „Zaključaj“, „Isključi plotanje za ovaj sloj“).

Aktivni sloj ne možete isključiti: statusna traka kaže „To je aktivni sloj. Prvo postavite drugi sloj kao aktivni.“ Klik na naziv sloja da ga postavite kao aktivni također ga uključuje i odmrzava.

Svaka promjena sloja, na ploči ili naredbom, jedan je korak poništavanja: {{key:Mod+Z}} je vraća.

## Radite sa slojevima odabirom objekata

Ne morate znati naziv sloja: odaberite objekt na njemu. Upišite naredbu ili otvorite {{ui:Alati}} na vrhu ploče {{ui:Slojevi}}.

| Naredba | Što radi |
|---|---|
| {{cmd:LAYISO}} | Odaberite objekte, pritisnite {{key:Enter}}: ostaju uključeni samo njihovi slojevi, a svi ostali slojevi se isključuju. Ako je aktivni sloj isključen, jedan od izoliranih slojeva postaje aktivan. |
| {{cmd:LAYUNISO}} | Ponovno uključuje slojeve koje je zadnji {{cmd:LAYISO}} isključio i vraća aktivni sloj koji je promijenio. |
| {{cmd:LAYOFF}} | Klikajte objekte jedan za drugim: sloj svakog se isključuje. Upišite `U` da poništite zadnji, {{key:Enter}} za završetak. |
| {{cmd:LAYFRZ}} | Isto, ali zamrzava svaki sloj. |
| {{cmd:LAYMCUR}} | Kliknite objekt: njegov sloj postaje aktivan (i uključuje se i odmrzava). Ako je već odabran jedan objekt, koristi se on. |
| {{cmd:LAYON}} | Uključuje sve slojeve. |
| {{cmd:LAYTHW}} | Odmrzava sve slojeve. |

Aktivni sloj se na ovaj način nikad ne isključuje niti zamrzava: povijest to navodi, a prvo možete drugi sloj postaviti kao aktivan naredbom {{cmd:LAYMCUR}}. Odabir reference bloka koristi sloj same reference.

## Preimenujte, spojite i izbrišite slojeve

- {{cmd:RENAME}}: upišite `LA`, stari naziv i novi naziv. Svaki objekt na sloju slijedi. (`B` preimenuje blok na isti način, sa svim referencama na njega.)
- {{cmd:LAYMRG}}: kliknite objekt na svakom sloju za spajanje (ili upišite `N` i naziv), pritisnite {{key:Enter}}, zatim odaberite ciljni sloj i odgovorite `Y`. Objekti se premještaju na cilj — u modelu, na listovima i unutar blokova — a spojeni slojevi nestaju.
- {{cmd:LAYDEL}}: odaberite objekt na sloju (ili `N` i njegov naziv) i odgovorite `Y`. Sloj nestaje **sa svim objektima na njemu**, svuda. Sloj 0, DEFPOINTS i aktivni sloj ne mogu se izbrisati.

Svaka je jedan korak poništavanja. Sve tri nalaze se u {{ui:Alati}} na vrhu ploče {{ui:Slojevi}}.

1. Kliknite jednu liniju zida, zatim upišite `LAYISO` i pritisnite {{key:Enter}}. Uključen ostaje samo sloj Zidovi.
2. Nacrtajte ili promijenite što trebate na Zidovima.
3. Upišite `LAYUNISO` i pritisnite {{key:Enter}}. Vrata i Bilješke se vraćaju.

## Česte pogreške

- **Nove linije su završile na krivom sloju.** Prije crtanja provjerite koja je točka popunjena. Novi sloj postaje aktivan čim ga dodate.
- **Objekt se ne može odabrati.** Njegov sloj je zaključan, isključen ili zamrznut.
- **Sloj se i dalje ispisuje u drugom programu.** DXF R12 ne može spremiti „ne plotaj“. CadCraft zadržava postavku za sebe kad crtež ima list, ali će drugi programi plotati taj sloj.
- **Nazivi slojeva velikim slovima nakon spremanja.** DXF R12 sprema nazive velikim slovima, pa se `Zidovi` vraća kao `ZIDOVI`, a razmaci postaju `_`. Spremljeni DWG čuva nazive kako ste ih upisali.
- **Preimenovanje, spajanje ili brisanje sloja.** Koristite {{cmd:RENAME}}, {{cmd:LAYMRG}} ili {{cmd:LAYDEL}} (također u {{ui:Alati}}): vidi dolje.

## Grupirajte slojeve

Držite popis kratkim tako da slojeve stavite u mape, poput Postojeće, Projektirano i Instalacije. Svaka se mapa sklapa, a njezine sklopke uključuju ili isključuju sve njezine slojeve, zamrzavaju ih ili zaključavaju zajedno. Aktivni sloj se nikad ne isključuje.

U {{ui:Alati}} na ploči Slojevi odaberite {{ui:Dodaj gotove skupine}} za skup namijenjen manjim stambenim radovima, {{ui:Grupiraj po nazivu}} za grupiranje slojeva koji dijele prefiks (`E-Walls`, `E-Doors`) ili {{ui:Nova skupina}}. Povucite sloj na mapu ili upotrijebite popis iznad slojeva za aktivni sloj. Upišite u {{ui:Pronađi sloj}} da suzite popis. `LAYGROUP` (`LG`) radi isto u naredbenom retku.

Sami slojevi se ne mijenjaju, pa ih drugi CAD programi vide kao običan ravni popis. CadCraft čuva skupine u datoteci.
