---
title: Organiziranje crteža slojevima
summary: Izradite slojeve za zidove, vrata i bilješke, postavite boje, odredite aktivni sloj te isključite, zamrznite, zaključajte ili izuzmite slojeve iz ispisa.
keywords: sloj, slojevi, la, aktivni sloj, zamrzni, odmrzni, zaključaj, isključi, ispis, bez ispisa, boja, svojstva sloja, layiso, layuniso, izoliraj, layoff, layfrz, laymcur, layon, laythw, preimenuj, laymrg, spoji, laydel, izbriši sloj
from: ba9f0617
---

## Što ćete izraditi

Tri sloja, `Walls`, `Doors` i `Notes`, svaki sa svojom bojom, s objektima nacrtanim na svakom i premještenim između njih.

## Ploča slojeva

Slojevi su u ploči lijevo, pod {{ui:Slojevi}}. Svaki redak prikazuje, s lijeva nadesno:

- točku: punu za **aktivni** sloj, na koji idu novi objekti;
- uzorak boje;
- naziv sloja;
- četiri gumba: uključeno/isključeno (oko), zamrzavanje (pahulja), zaključavanje (lokot) i ispis (pisač).

Svaki crtež ima sloj nazvan `0`. Upis `LA` i pritisak na {{key:Enter}} skače na ploču.

## Izrada slojeva

1. Kliknite {{ui:Novi sloj}} iznad popisa. Otvara se okvir za naziv.
2. Upišite `Walls` i pritisnite {{key:Enter}} (ili kliknite {{ui:Dodaj (A)}}).

Statusna traka kaže „Dodan sloj Walls i postavljen kao aktivni.“ Novi sloj dobiva boju 7 (crna na svijetloj temi, bijela na tamnoj).

3. Ponovno kliknite {{ui:Novi sloj}}, upišite `Doors` i pritisnite {{key:Enter}}.
4. Ponovno kliknite {{ui:Novi sloj}}, upišite `Notes` i pritisnite {{key:Enter}}.

`Notes` je sada aktivan.

## Dodjela boje svakom sloju

1. Kliknite uzorak boje u retku `Walls`. Otvara se birač boja vašeg sustava.
2. Odaberite boju i potvrdite.

Uzorak i sve na `Walls` što je obojeno {{ui:Po sloju}} se mijenjaju.

:::note
Odabrana boja koja odgovara jednoj od 255 standardnih CAD boja sprema se kao taj broj. Svaka druga boja čuva se točno u CadCraftu, ali se u datoteci DWG ili DXF sprema kao najbliža standardna boja.
:::

## Crtanje na sloju

1. Kliknite naziv **Walls** na popisu. Njegova točka se popuni, a statusna traka kaže „Aktivni sloj: Walls“.
2. Nacrtajte pravokutnik (`REC`). Ide na `Walls`.
3. Kliknite **Doors** i nacrtajte luk (`A`). Ide na `Doors`.

Aktivni sloj možete odabrati i u {{ui:Trenutne postavke}} desno (ništa nije odabrano), pod {{ui:Sloj}}.

## Premještanje objekata na drugi sloj

1. Odaberite objekte.
2. U desnoj ploči odaberite novi sloj u {{ui:Sloj}}.

Premještaju se na taj sloj i poprimaju njegovu boju ako je njihova boja {{ui:Po sloju}}.

## Isključivanje, zamrzavanje, zaključavanje i ispis

| Gumb | Što radi |
|---|---|
| Uključeno/isključeno (oko) | Skriva objekte sloja. Ne mogu se vidjeti, odabrati niti hvatati. |
| Zamrzavanje (pahulja) | Isti učinak kao isključivanje u CadCraftu. Odvojeno je jer drugi programi s njima postupaju različito, a postavka se sprema. |
| Zaključavanje (lokot) | Objekti ostaju vidljivi i možete se hvatati za njih, ali se ne mogu odabrati niti mijenjati. Dobro za pozadinu preko koje crtate. |
| Ispis (pisač) | Kad je pritisnut, sloj se prikazuje na zaslonu, ali se **izostavlja iz ispisa** i PDF-ova. Rabite ga za pomoćne linije i bilješke za sebe. |

Zadržite pokazivač na gumbu da vidite što će učiniti („Isključi“, „Zamrzni“, „Zaključaj“, „Ne ispisuj ovaj sloj“).

Aktivni sloj ne možete isključiti: statusna traka kaže „To je aktivni sloj. Najprije postavite drugi sloj kao aktivni.“ Klik na naziv sloja da postane aktivan također ga uključuje i odmrzava.

Svaka promjena sloja, u ploči ili naredbom, jedan je korak poništavanja: {{key:Mod+Z}} je vraća.

## Rad sa slojevima odabirom objekata

Ne morate znati naziv sloja: odaberite objekt na njemu. Upišite naredbu ili otvorite {{ui:Alati}} na vrhu ploče {{ui:Slojevi}}.

| Naredba | Što radi |
|---|---|
| {{cmd:LAYISO}} | Odaberite objekte, pritisnite {{key:Enter}}: ostaju uključeni samo njihovi slojevi, a svi ostali se isključuju. Ako se aktivni sloj isključi, jedan od izoliranih slojeva postaje aktivan. |
| {{cmd:LAYUNISO}} | Ponovno uključuje slojeve koje je zadnji {{cmd:LAYISO}} isključio i vraća aktivni sloj koji je promijenio. |
| {{cmd:LAYOFF}} | Klikajte objekte jedan za drugim: sloj svakog se isključuje. Upišite `U` da poništite posljednji, {{key:Enter}} za završetak. |
| {{cmd:LAYFRZ}} | Isto, ali zamrzava svaki sloj. |
| {{cmd:LAYMCUR}} | Kliknite objekt: njegov sloj postaje aktivan (i uključuje se te odmrzava). Ako je već odabran jedan objekt, rabi se on. |
| {{cmd:LAYON}} | Uključuje sve slojeve. |
| {{cmd:LAYTHW}} | Odmrzava sve slojeve. |

Aktivni sloj se na ovaj način nikad ne isključuje niti zamrzava: povijest to kaže, a najprije možete drugi sloj postaviti kao aktivni naredbom {{cmd:LAYMCUR}}. Odabir reference bloka rabi vlastiti sloj reference.

## Preimenovanje, spajanje i brisanje slojeva

- {{cmd:RENAME}}: upišite `LA`, stari naziv i novi. Svaki objekt na sloju slijedi. (`B` preimenuje blok na isti način, sa svim njegovim referencama.)
- {{cmd:LAYMRG}}: kliknite objekt na svakom sloju za spajanje (ili upišite `N` i naziv), pritisnite {{key:Enter}}, zatim odaberite ciljni sloj i odgovorite `Y`. Objekti prelaze na cilj – u modelu, na listovima i unutar blokova – a spojeni slojevi nestaju.
- {{cmd:LAYDEL}}: odaberite objekt na sloju (ili `N` i naziv) i odgovorite `Y`. Sloj nestaje **sa svim objektima na njemu**, svuda. Sloj 0, DEFPOINTS i aktivni sloj ne mogu se obrisati.

Svaka je jedan korak poništavanja. Sve tri su u {{ui:Alati}} na vrhu ploče {{ui:Slojevi}}.

1. Kliknite jednu liniju zida, zatim upišite `LAYISO` i pritisnite {{key:Enter}}. Ostaje uključen samo `Walls`.
2. Nacrtajte ili promijenite što treba na `Walls`.
3. Upišite `LAYUNISO` i pritisnite {{key:Enter}}. `Doors` i `Notes` se vraćaju.

## Česte pogreške

- **Nove linije su završile na krivom sloju.** Prije crtanja provjerite koja je točka popunjena. Novi sloj postaje aktivan čim ga dodate.
- **Objekt se ne odabire.** Njegov sloj je zaključan, isključen ili zamrznut.
- **Sloj se i dalje ispisuje u drugom programu.** DXF R12 ne može pohraniti „ne ispisuj“. CadCraft tu postavku čuva za sebe kad crtež ima list, ali će drugi programi ispisati taj sloj.
- **Nazivi slojeva velikim slovima nakon spremanja.** DXF R12 sprema nazive velikim slovima, pa se `Walls` vraća kao `WALLS`, a razmaci postaju `_`. Spremljeni DWG čuva nazive kako ste ih upisali.
- **Preimenovanje, spajanje ili brisanje sloja.** Rabite {{cmd:RENAME}}, {{cmd:LAYMRG}} ili {{cmd:LAYDEL}} (također u {{ui:Alati}}): vidi niže.

## Grupiranje slojeva

Držite popis kratkim tako da slojeve stavite u mape, poput Existing, Proposed i Services. Svaka se mapa skuplja, a njezine sklopke uključuju ili isključuju sve njezine slojeve, zamrzavaju ih ili zaključavaju zajedno. Aktivni sloj se nikad ne isključuje.

U {{ui:Alati}} na ploči Slojevi odaberite {{ui:Dodaj gotove skupine}} za skup izrađen za manje stambene radove, {{ui:Grupiraj po nazivu}} za grupiranje slojeva koji dijele prefiks (`E-Walls`, `E-Doors`), ili {{ui:Nova skupina}}. Povucite sloj na mapu ili rabite popis iznad slojeva za aktivni sloj. Upišite u {{ui:Pronađi sloj}} da suzite popis. `LAYGROUP` (`LG`) čini isto u naredbenom retku.

Za preimenovanje skupine dvaput kliknite njezin naziv (ili je odaberite i pritisnite {{key:F2}}), upišite novi naziv i pritisnite {{key:Enter}}; {{key:Esc}} zadržava stari, a {{cmd:UNDO}} ga vraća. {{ui:Nova skupina}} je u {{ui:Alati}} na ploči Slojevi.

Sami slojevi se ne mijenjaju, pa ih drugi CAD programi vide kao običan popis. CadCraft čuva skupine u datoteci.
