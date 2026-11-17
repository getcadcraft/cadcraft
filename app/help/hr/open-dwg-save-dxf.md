---
title: Otvorite DWG, uredite ga i spremite kopiju
summary: Otvorite crtež koji vam je netko poslao, provjerite što je stiglo, napravite promjenu i pošaljite kopiju natrag kao DWG ili DXF.
keywords: dwg, dxf, otvori, uvoz, izvoz, spremi, r12, povratni ciklus, konzultant, xref, provjeri crtež, saveas, spremi kao, spremanje dwg, format
from: 49de4bf6
---

## Što ćete napraviti

Otvorite DWG od konzultanta, provjerite što CadCraft može, a što ne može prikazati, dodajte bilješku, ispišite list u PDF i spremite kopiju za slanje natrag, kao DWG ili DXF.

## Otvorite datoteku

1. Pritisnite {{key:Mod+O}} ili kliknite {{ui:Otvori}}.
2. Odaberite datoteku `.dwg`.

Statusna linija prikazuje „Čitanje …“ dok se crtež čita. Kad završi, crtež ispunjava zaslon, a povijest kaže, na primjer, „Otvoreno: plan.dwg, 18,240 objekata na 64 sloja“, uz vrijeme trajanja.

:::offline
Niste povezani s mrežom. Ako gumb {{ui:Spremi za offline}} glasi „Spreman za offline rad“, DWG datoteke se otvaraju normalno. Ako ne, a u ovoj kartici još nije otvoren nijedan DWG, otvaranje DWG-a može ne uspjeti jer se čitač DWG-a programa CadCraft učitava uz prvi DWG: otvorite DXF umjesto njega ili spremite CadCraft za rad bez mreže sljedeći put kad budete na mreži. Vidi [Rad bez mreže](common:offline).
:::

## Provjerite što je stiglo

1. Pogledajte odjeljak {{ui:Crtež}} na lijevoj ploči: format i verzija, jedinice, broj objekata i slojeva te listovi.
2. Pročitajte okvir „O ovoj datoteci“ ispod njega, ako postoji.

Okvir popisuje:

- **Još nije prikazano:** objekti koje CadCraft još ne može nacrtati, po vrsti i broju. Izostavljeni su, a ne pogađaju se.
- **Listovi (layouti) su stigli:** otvorite ih karticama ispod crteža.
- **Kote koje su se mogle pročitati samo onako kako su nacrtane.**

3. Kliknite kartice ispod crteža da vidite svaki list.
4. Provjerite {{ui:Jedinice}} u {{ui:Trenutne postavke}} (ništa nije odabrano, kartica {{ui:Model}}). Ako piše {{ui:Bez jedinica}}, a znate da je crtež u milimetrima, postavite ih da mjerila listova i ispisa budu ispravna.

:::tip
Ako nešto od crteža očekujete, a ne vidite, provjerite ploču {{ui:Slojevi}}: sloj može biti isključen ili zamrznut u datoteci. Kliknite njegov naziv da ga postavite kao aktivni; to ga uključuje.
:::

## Napravite promjenu

1. Napravite sloj za bilješke: kliknite {{ui:Novi sloj}}, upišite `NOTES` i pritisnite {{key:Enter}}.
2. Upišite `DT` i pritisnite {{key:Enter}}.
3. Kliknite mjesto na kojem ide bilješka.
4. Upišite visinu teksta koja odgovara crtežu (vidi [Dodavanje teksta i oznaka](topic:text)) i pritisnite {{key:Enter}}.
5. Pritisnite {{key:Enter}} da zadržite rotaciju 0.
6. Upišite bilješku i pritisnite {{key:Enter}}.
7. Ponovno pritisnite {{key:Enter}} za završetak.

Uređivanje uvezenih kota je u redu: čim promijenite jednu, CadCraft je ponovno crta u svom stilu.

## Ispišite list za pregled

1. Kliknite karticu lista.
2. Pritisnite {{key:Mod+P}}.
3. Kliknite {{ui:Preuzmi PDF}}.

Vidi [Ispis u PDF](topic:plot-pdf).

## Spremite kopiju

1. Pritisnite {{key:Mod+S}} ili kliknite {{ui:Spremi}}.

Otvorili ste DWG, pa preglednik preuzima `<name>.dwg`, u verziji u kojoj je DWG došao. Povijest kaže, na primjer, „Kopija je spremljena kao Plan.dwg (DWG (AutoCAD 2018))“ i na recima ispod nje navodi sve što se tijekom toga promijenilo.

2. Pročitajte te retke prije slanja datoteke. [Što DWG čuva i mijenja](topic:files#what-a-dwg-keeps-and-changes) objašnjava svaki od njih.

Izvorni DWG se nikad ne mijenja. Svako spremanje je novo preuzimanje.

## Spremite kao DWG ili DXF

Za odabir formata sami:

1. Pritisnite {{key:Mod+Shift+S}} ili kliknite {{ui:Spremi kao}}.

Otvara se dijaloški okvir {{ui:Spremi kopiju kao}} s četiri izbora, svaki s nazivom datoteke koji će dati: {{ui:DWG}}, s popisom {{ui:Verzija}}, {{ui:DXF R12}}, {{ui:DXF 2000}} i {{ui:DXF 2000 (binary)}}. Trenutačni format i verzija crteža već su odabrani.

2. Kliknite format koji želite. Za DWG odaberite verziju koju koristi drugi ured ili stariju: AutoCAD 2018, 2013, 2010, 2007, 2004 ili 2000.
3. Kliknite {{ui:Spremi}}.

Kopija se preuzima. Od sada {{key:Mod+S}} sprema ovaj crtež u tom formatu, a i novi crteži u njemu počinju, u ovom pregledniku. {{ui:Odustani}} ili {{key:Esc}} ne sprema ništa, a povijest kaže „Nije spremljeno.“

Koji odabrati:

- **DWG** čuva najviše: listove s njihovim viewportima, prave kote, uzorke šrafura, nazive slojeva i blokova kako ste ih upisali te višeredni tekst kao višeredni tekst. Verzija AutoCAD 2000 otvara se u najviše programa; 2004 i noviji čuvaju i prave boje.
- **DXF 2000** je tekstualna datoteka koja čuva gotovo sve što čuva DWG: svaki list kao layout s njegovim viewportima, prave kote, uzorke šrafura, prave boje, debljine linija, tipove linija i nazive kako ste ih upisali. Otvara se u AutoCADu 2000 i novijem te u većini CAD programa. Višestruke vodilice postaju linije, strelice i tekst koje crtaju. DXF otvoren u verziji 2000 ili novijoj sprema se kao DXF 2000.
- **DXF 2000 (binary)** ima isti sadržaj kao DXF 2000 u binarnom obliku formata: manja datoteka koja svaki broj čuva točno. Binarni DXF-ovi iz drugih programa otvaraju se kao tekstualni, a crtež otvoren iz binarnog DXF-a sprema se natrag kao binarni.
- **DXF R12** otvara se u gotovo svakom CAD programu. Čuva prvi list s njegovim viewportima i ostale CadCraftove listove. Pojednostavljuje novije stvari, kao što su višeredni tekst i šrafure.

## Što će vidjeti drugi ured

U DWG-u:

- Linije, lukovi, kružnice, elipse, polilinije, tekst, višeredni tekst, blokovi s atributima, pune ispune, uzorci šrafura i slojevi kako ih vidite.
- Prave kote: drugi program ih ponovno mjeri kad se rastegnu.
- Svaki list, s papirom i viewportima.
- Višestruke vodilice kao višestruke vodilice. U verziji AutoCAD 2000 prave boje postaju najbliža standardna boja.

U DXF R12:

- Linije, lukovi, kružnice, polilinije, tekst, reference blokova i kote kako ih vidite. Kote ostaju prave kote.
- Nazivi slojeva velikim slovima, a razmaci pretvoreni u `_`.
- Prvi list kao prostor papira crteža, s njegovim viewportima. Ostali listovi dolaze kao blokovi nazvani `CCLAYOUT_1` i tako dalje; ako im trebaju svi listovi kao layouti, za svaki list im pošaljite i PDF.
- Višeredni tekst kao zasebni redci, elipse kao polilinije, šrafure kao obrisi.

U svakom slučaju, sve što je označeno kao „Još nije prikazano“ kad ste otvorili DWG **nije** u kopiji, osim ako povijest kaže da je sačuvano: OLE objekti DWG-a i njegova 3D tijela u prostoru modela zapisuju se natrag kad spremate kao DWG. Recite im to i pošaljite i PDF.

## Česte pogreške

- **„CadCraft otvara DWG i DXF crteže.“** Datoteka ima drugu ekstenziju. Provjerite je li `.dwg` ili `.dxf`.
- **„Ovaj crtež nije moguće pročitati.“** DWG je oštećen ili u verziji koju čitač ne podržava. Zatražite DXF ili DWG spremljen u starijoj verziji.
- **„Ovaj binarni DXF završava usred objekta.“** Datoteka je skraćena ili oštećena. Upišite RECOVER da otvorite ono što se može pročitati ili ponovno zatražite datoteku.
- **Spremljena datoteka se zove `name (1).dwg` ili `name (1).dxf`.** Preglednik to radi kad datoteka s istim nazivom već postoji u mapi.
- **Imaju stariji program koji ne može otvoriti DWG.** Spremite kao DWG s {{ui:Verzija}} {{ui:AutoCAD 2000}} ili kao {{ui:DXF R12}}: gotovo svaki CAD program ga otvara.
- **Dijelovi crteža nedostaju.** Vanjske reference (xrefovi) ne učitavaju se dok ne odaberete njihove datoteke ({{cmd:XREF}}, `R`), a slike se prikazuju kao okviri s nazivima datoteka.
