---
title: Otvori DWG, uredi ga i spasi kopiju
summary: Otvori crtež koji ti je neko poslao, provjeri šta je stiglo, napravi izmjenu i pošalji kopiju nazad kao DWG ili DXF.
keywords: dwg, dxf, otvori, uvoz, izvoz, spasi, r12, round trip, konsultant, xref, provjera crteža, saveas, spasi kao, spremanje DWG, format
from: 49de4bf6
---

## Šta ćeš raditi

Otvoriti DWG od konsultanta, provjeriti šta je CadCraft mogao, a šta nije mogao prikazati, dodati bilješku, odštampati list u PDF i spasiti kopiju za slanje nazad, kao DWG ili DXF.

## Otvori datoteku

1. Pritisni {{key:Mod+O}}, ili klikni {{ui:Otvori}}.
2. Odaberi `.dwg` datoteku.

Statusna linija prikazuje "Čitam …" dok se crtež čita. Kad je gotovo, crtež ispunjava ekran, a historija kaže, na primjer, "Otvoren plan.dwg: 18,240 objekata na 64 sloja", i koliko je trajalo.

:::offline
Van si mreže. Ako dugme {{ui:Spasi za rad van mreže}} glasi "Spremno za rad van mreže", DWG datoteke se otvaraju normalno. Ako ne glasi, i u ovoj kartici još nijedan DWG nije otvoren, otvaranje DWG-a može da ne uspije jer se čitač DWG-a učitava s prvim DWG-om: otvori DXF umjesto toga, ili spasi CadCraft za rad van mreže sljedeći put kad budeš na mreži. Vidi [Rad van mreže](common:offline).
:::

## Provjeri šta je stiglo

1. Pogledaj odjeljak {{ui:Crtež}} u lijevom panelu: format i verziju, jedinice, broj objekata i slojeva, i listove.
2. Pročitaj okvir "O ovoj datoteci" ispod njega, ako postoji.

Okvir navodi:

- **Još nije prikazano:** objekti koje CadCraft još ne može nacrtati, po vrsti i broju. Oni su izostavljeni, a ne pogađani.
- **Listovi (rasporedi) su stigli:** otvori ih karticama ispod crteža.
- **Kote koje su se mogle pročitati samo onako kako su nacrtane.**

3. Klikni kroz kartice ispod crteža da vidiš svaki list.
4. Provjeri {{ui:Jedinice}} u {{ui:Trenutne postavke}} (ništa nije odabrano, kartica {{ui:Model}}). Ako piše {{ui:Bez jedinica}}, a znaš da je crtež u milimetrima, postavi ih, da razmjere lista i štampe budu tačne.

:::tip
Ako očekuješ dio crteža a ne vidiš ga, provjeri panel {{ui:Slojevi}}: sloj može biti isključen ili zamrznut u datoteci. Klikni njegov naziv da ga učiniš tekućim; to ga uključuje.
:::

## Napravi izmjenu

1. Napravi sloj za bilješke: klikni {{ui:Novi sloj}}, upiši `NOTES` i pritisni {{key:Enter}}.
2. Upiši `DT` i pritisni {{key:Enter}}.
3. Klikni gdje ide bilješka.
4. Upiši visinu teksta koja odgovara crtežu (vidi [Dodaj tekst i oznake](topic:text)) i pritisni {{key:Enter}}.
5. Pritisni {{key:Enter}} da zadržiš rotaciju 0.
6. Upiši bilješku i pritisni {{key:Enter}}.
7. Ponovo pritisni {{key:Enter}} da završiš.

Izmjene uvezenih kota su u redu: čim izmijeniš jednu, CadCraft je ponovo crta u svom stilu.

## Štampaj list za pregled

1. Klikni karticu lista.
2. Pritisni {{key:Mod+P}}.
3. Klikni {{ui:Preuzmi PDF}}.

Vidi [Štampanje u PDF](topic:plot-pdf).

## Spasi kopiju

1. Pritisni {{key:Mod+S}}, ili klikni {{ui:Spasi}}.

Crtež je otvoren iz DWG-a, pa preglednik preuzima `<name>.dwg`, u verziji u kojoj je DWG došao. Historija kaže, na primjer, "Spašena kopija kao Plan.dwg (DWG (AutoCAD 2018))." i navodi, u redovima ispod, sve što se promijenilo usput.

2. Pročitaj te redove prije slanja datoteke. [Šta DWG zadržava, a šta mijenja](topic:files#what-a-dwg-keeps-and-changes) objašnjava svaki od njih.

Originalni DWG se nikad ne mijenja. Svako spremanje je novo preuzimanje.

## Spasi kao DWG ili DXF

Da sam odabereš format:

1. Pritisni {{key:Mod+Shift+S}}, ili klikni {{ui:Spasi kao}}.

Dijalog {{ui:Spasi kopiju kao}} se otvara s četiri izbora, svaki s nazivom datoteke koji će dobiti: {{ui:DWG}}, sa listom {{ui:Verzija}}, {{ui:DXF R12}}, {{ui:DXF 2000}} i {{ui:DXF 2000 (binary)}}. Trenutni format i verzija crteža su već odabrani.

2. Klikni format koji želiš. Za DWG odaberi verziju koju koristi drugi ured, ili stariju: AutoCAD 2018, 2013, 2010, 2007, 2004 ili 2000.
3. Klikni {{ui:Spasi}}.

Kopija se preuzima. Od sada {{key:Mod+S}} sprema ovaj crtež u tom formatu, a i novi crteži počinju s njim, u ovom pregledniku. {{ui:Otkaži}} ili {{key:Esc}} ne spašava ništa, a historija kaže "Nije spašeno."

Koji izabrati:

- **DWG** čuva najviše: listove s njihovim prozorima pogleda, prave kote, uzorke šrafura, nazive slojeva i blokova onako kako su upisani, i višelinijski tekst kao višelinijski tekst. Verzija AutoCAD 2000 se otvara u najviše programa; 2004 i noviji čuvaju i prave boje.
- **DXF 2000** je tekstualna datoteka koja čuva gotovo sve što čuva DWG: svaki list kao raspored s njegovim prozorima pogleda, prave kote, uzorke šrafura, prave boje, debljine linija, vrste linija i nazive onako kako su upisani. Otvara se u AutoCAD 2000 i novijim i u većini CAD programa. Višestruke vodilice postaju linije, strelice i tekst koje crtaju. DXF otvoren u verziji 2000 ili novijoj sprema se kao DXF 2000.
- **DXF 2000 (binary)** sadrži isti sadržaj kao DXF 2000 u binarnom obliku formata: manja datoteka koja čuva svaki broj tačno. Binarni DXF iz drugih programa otvara se kao tekstualni, a crtež otvoren iz binarnog DXF-a se vraća kao binarni.
- **DXF R12** se otvara u gotovo svakom CAD programu. Čuva prvi list s njegovim prozorima pogleda, i ostale listove CadCraft-a. Pojednostavljuje novije stvari, poput višelinijskog teksta i šrafura.

## Šta će drugi ured vidjeti

U DWG-u:

- Linije, lukovi, krugovi, elipse, polilinije, tekst, višelinijski tekst, blokovi s atributima, pune ispune, uzorci šrafura i slojevi onako kako ih vidiš.
- Prave kote: drugi program ih ponovo mjeri kad se rastegnu.
- Svaki list, s papirom i prozorima pogleda.
- Višestruke vodilice kao višestruke vodilice. U verziji AutoCAD 2000 prave boje postaju najbliža standardna boja.

U DXF R12:

- Linije, lukovi, krugovi, polilinije, tekst, reference blokova i kote onako kako ih vidiš. Kote ostaju prave kote.
- Nazivi slojeva velikim slovima, s razmacima pretvorenim u `_`.
- Prvi list kao papirni prostor crteža, s njegovim prozorima pogleda. Ostali listovi stižu kao blokovi nazvani `CCLAYOUT_1` i tako dalje; ako im trebaju svi listovi kao rasporedi, pošalji im i PDF svakog lista.
- Višelinijski tekst kao zasebne linije, elipse kao polilinije, šrafure kao konture.

U oba slučaja, sve što je navedeno kao "Još nije prikazano" kad si otvorio DWG nije u kopiji, osim ako historija kaže da je sačuvano: OLE objekti DWG-a i njegova 3D tijela u modelskom prostoru zapisuju se nazad kad spasiš kao DWG. Reci to primaocu i pošalji i PDF.

## Česte greške

- **"CadCraft otvara DWG i DXF crteže."** Datoteka ima drugu ekstenziju. Provjeri da je `.dwg` ili `.dxf`.
- **"Ovaj crtež se ne može pročitati."** DWG je oštećen ili u verziji koju čitač ne podržava. Zatraži DXF, ili DWG spašen u starijoj verziji.
- **"Ovaj binarni DXF se završava usred objekta."** Datoteka je skraćena ili oštećena. Upiši RECOVER da otvoriš ono što se može pročitati, ili ponovo zatraži datoteku.
- **Spašena datoteka se zove `name (1).dwg` ili `name (1).dxf`.** Preglednik to radi kad datoteka s istim nazivom već postoji u mapi.
- **Imaju stariji program koji ne može otvoriti DWG.** Spasi kao DWG s {{ui:Verzija}} {{ui:AutoCAD 2000}}, ili kao {{ui:DXF R12}}: gotovo svaki CAD program ga otvara.
- **Nedostaju dijelovi crteža.** Povezani crteži (xref) se ne učitavaju dok se ne odaberu njihove datoteke ({{cmd:XREF}}, `R`), a slike se prikazuju kao okviri s nazivima datoteka.
