---
title: Otvori DWG, izmeni ga i sačuvaj kopiju
summary: Otvori crtež koji ti je neko poslao, proveri šta je stiglo, napravi izmenu i pošalji nazad kopiju kao DWG ili DXF.
keywords: dwg, dxf, otvori, uvoz, izvoz, sačuvaj, r12, povratna razmena, konsultant, xref, proveri crtež, saveas, sačuvaj kao, čuvanje dwg, format
from: 49de4bf6
---

## Šta ćeš raditi

Otvoriti DWG od konsultanta, proveriti šta je CadCraft mogao, a šta nije mogao da prikaže, dodati belešku, odštampati list u PDF i sačuvati kopiju za slanje nazad, kao DWG ili DXF.

## Otvori datoteku

1. Pritisni {{key:Mod+O}}, ili klikni {{ui:Otvori}}.
2. Izaberi `.dwg` datoteku.

Statusna linija prikazuje „Čitanje …“ dok se crtež čita. Kad je gotovo, crtež ispuni ekran, a istorija kaže, na primer, „Otvoreno plan.dwg: 18,240 objekata na 64 sloja“, uz to koliko je trajalo.

:::offline
Van si mreže. Ako dugme {{ui:Sačuvaj za rad van mreže}} piše „Spremno za rad van mreže“, DWG datoteke se otvaraju normalno. Ako ne, a u ovoj kartici još nijedan DWG nije otvoren, otvaranje DWG-a može da ne uspe, jer se čitač DWG-a za CadCraft preuzima uz prvi DWG: otvori DXF umesto toga, ili sačuvaj CadCraft za rad van mreže sledeći put kad si na mreži. Videti [Rad van mreže](common:offline).
:::

## Proveri šta je stiglo

1. Pogledaj odeljak {{ui:Drawing}} u levom panelu: format i verziju, jedinice, broj objekata i slojeva, i listove.
2. Pročitaj okvir „O ovoj datoteci“ ispod njega, ako postoji.

Okvir navodi:

- **Još nije prikazano:** objekte koje CadCraft još ne može da nacrta, po vrsti i broju. Oni su izostavljeni, a ne pogađani.
- **Listovi (layout-i) su stigli:** otvori ih karticama ispod crteža.
- **Kote koje su mogle biti pročitane samo onako kako su nacrtane.**

3. Klikni kroz kartice ispod crteža da vidiš svaki list.
4. Proveri {{ui:Jedinice}} u {{ui:Trenutna podešavanja}} (ništa izabrano, kartica {{ui:Model}}). Ako piše {{ui:Bez jedinica}}, a znaš da je crtež u milimetrima, postavi ih, da razmere lista i štampe budu tačne.

:::tip
Ako očekuješ deo crteža a ne vidiš ga, proveri panel {{ui:Slojevi}}: sloj može biti isključen ili zamrznut u datoteci. Klikni njegovo ime da ga postaviš kao tekući; to ga uključuje.
:::

## Napravi izmenu

1. Napravi sloj za beleške: klikni {{ui:Novi sloj}}, ukucaj `NOTES` i pritisni {{key:Enter}}.
2. Ukucaj `DT` i pritisni {{key:Enter}}.
3. Klikni gde ide beleška.
4. Ukucaj visinu teksta koja odgovara crtežu (videti [Dodavanje teksta i natpisa](topic:text)) i pritisni {{key:Enter}}.
5. Pritisni {{key:Enter}} da zadržiš ugao na 0.
6. Ukucaj belešku i pritisni {{key:Enter}}.
7. Pritisni {{key:Enter}} opet da završiš.

Izmene uvezenih kota su u redu: čim promeniš jednu, CadCraft je ponovo nacrta u svom stilu.

## Odštampaj list za pregled

1. Klikni karticu lista.
2. Pritisni {{key:Mod+P}}.
3. Klikni {{ui:Preuzmi PDF}}.

Videti [Štampanje u PDF](topic:plot-pdf).

## Sačuvaj kopiju

1. Pritisni {{key:Mod+S}}, ili klikni {{ui:Sačuvaj}}.

Otvorio si DWG, pa pregledač preuzima `<name>.dwg`, u verziji u kojoj je DWG došao. Istorija kaže, na primer, „Sačuvana kopija kao Plan.dwg (DWG (AutoCAD 2018))“, a u redovima ispod nje navodi sve što se promenilo na putu.

2. Pročitaj te redove pre nego što pošalješ datoteku. [Šta DWG čuva i menja](topic:files#what-a-dwg-keeps-and-changes) objašnjava svaki od njih.

Tvoj originalni DWG se nikad ne menja. Svako čuvanje je novo preuzimanje.

## Sačuvaj kao DWG ili DXF

Da sam biraš format:

1. Pritisni {{key:Mod+Shift+S}}, ili klikni {{ui:Sačuvaj kao}}.

Dijalog {{ui:Sačuvaj kopiju kao}} se otvara sa četiri izbora, svaki sa imenom datoteke koje će dati: {{ui:DWG}}, sa njegovom listom {{ui:Verzija}}, {{ui:DXF R12}}, {{ui:DXF 2000}} i {{ui:DXF 2000 (binary)}}. Trenutni format i verzija crteža su već izabrani.

2. Klikni format koji želiš. Za DWG izaberi verziju koju koristi drugi ured, ili stariju: AutoCAD 2018, 2013, 2010, 2007, 2004 ili 2000.
3. Klikni {{ui:Sačuvaj}}.

Kopija se preuzima. Od sada {{key:Mod+S}} čuva ovaj crtež u tom formatu, a novi crteži u tom formatu počinju u ovom pregledaču. {{ui:Otkaži}} ili {{key:Esc}} ne čuva ništa, a istorija kaže „Nije sačuvano.“

Koji izabrati:

- **DWG** čuva najviše: listove sa njihovim prozorima, prave kote, uzorke šrafura, nazive slojeva i blokova kako si ih kucao, i višeredni tekst kao višeredni tekst. Verzija AutoCAD 2000 se otvara u najviše programa; 2004 i noviji čuvaju i prave boje.
- **DXF 2000** je tekstualna datoteka koja čuva skoro sve što čuva DWG: svaki list kao layout sa svojim prozorima, prave kote, uzorke šrafura, prave boje, debljine linija, tipove linija i nazive kako si ih kucao. Otvara se u AutoCAD 2000 i novijim i u većini CAD programa. Multileader-i postaju linije, strelice i tekst koje crtaju. DXF otvoren u verziji 2000 ili novijoj čuva se kao DXF 2000.
- **DXF 2000 (binary)** sadrži isti sadržaj kao DXF 2000 u binarnom obliku formata: manja datoteka koja čuva svaki broj tačno. Binarne DXF datoteke iz drugih programa otvaraju se kao tekstualne, a crtež otvoren iz binarnog DXF-a čuva se nazad kao binaran.
- **DXF R12** se otvara u skoro svakom CAD programu. Čuva prvi list sa njegovim prozorima, i ostale listove CadCraft-a. Pojednostavljuje novije stvari, kao višeredni tekst i šrafure.

## Šta će drugi ured videti

U DWG-u:

- Linije, lukovi, krugovi, elipse, polilinije, tekst, višeredni tekst, blokovi sa svojim atributima, pune ispune, uzorci šrafura i slojevi kako ih vidiš.
- Prave kote: drugi program ih ponovo meri kad se rastežu.
- Svaki list, sa svojim papirom i prozorima.
- Multileader-i kao multileader-i. U verziji AutoCAD 2000 prave boje postaju najbliža standardna boja.

U DXF R12:

- Linije, lukovi, krugovi, polilinije, tekst, reference blokova i kote kako ih vidiš. Kote ostaju prave kote.
- Nazivi slojeva velikim slovima, sa razmacima pretvorenim u `_`.
- Prvi list kao papirni prostor crteža, sa svojim prozorima. Ostali listovi stižu kao blokovi nazvani `CCLAYOUT_1` i tako dalje; ako im trebaju svi listovi kao layout-i, pošalji im i PDF-ove svakog lista.
- Višeredni tekst kao zasebne linije, elipse kao polilinije, šrafure kao konture.

U oba slučaja, sve navedeno kao „Još nije prikazano“ kad si otvorio DWG **nije** u kopiji, osim ako istorija kaže da je sačuvano: OLE objekti DWG-a i 3D tela u prostoru modela se upisuju nazad kad sačuvaš kao DWG. Reci im to, i pošalji i PDF.

## Česte greške

- **„CadCraft otvara DWG i DXF crteže.“** Datoteka ima drugu ekstenziju. Proveri da je `.dwg` ili `.dxf`.
- **„Ovaj crtež nije mogao da se pročita.“** DWG je oštećen ili u verziji koju čitač ne podržava. Traži DXF, ili DWG sačuvan u starijoj verziji.
- **„Ovaj binarni DXF se završava usred objekta.“** Datoteka je skraćena ili oštećena. Ukucaj RECOVER da otvoriš ono što može da se pročita, ili zatraži datoteku ponovo.
- **Sačuvana datoteka se zove `name (1).dwg` ili `name (1).dxf`.** Pregledač to radi kad datoteka sa istim imenom već postoji u fascikli.
- **Imaju stariji program koji ne može da otvori DWG.** Sačuvaj kao DWG sa {{ui:Verzija}} {{ui:AutoCAD 2000}}, ili kao {{ui:DXF R12}}: skoro svaki CAD program ga otvara.
- **Delovi crteža nedostaju.** Povezani crteži (xref-ovi) se ne učitavaju dok ne izabereš njihove datoteke ({{cmd:XREF}}, `R`), a slike se prikazuju kao okviri sa svojim imenima datoteka.
