---
title: Skenirani crteži i praćenje
summary: Uvezite skenirani list, zadajte mu mjerilo i poravnajte ga, očistite, izbrišite dijelove, hvatajte na njegove linije i pratite ga u linije i lukove.
keywords: skeniranje, skenirani crtež, raster, tiff, jpeg, png, mjerilo, poravnaj, ispravi nagib, ukloni točkice, prag, crno-bijelo, obreži, izbriši, praćenje, vektoriziraj, hvatanje, lukovi, šrafura, papirnati crteži, stari crteži, scanattach, scantrace
from: 36227e5b
---

## Od papirnatog lista do objekata crteža

Skenirani crtež je slika. CadCraft čuva sliku koju ste mu dali i nikad je ne mijenja: svaki korak čišćenja stvara novu sliku, s jednim korakom poništavanja za svaki, a {{cmd:SCANINFO}} popisuje izvornu datoteku i korake poduzete od tada. Ništa se nigdje ne šalje i ništa se ne pogađa uz pomoć treniranog modela: čišćenje i praćenje su obična obrada slike, a izvode se na vašem računalu.

1. **Umetnite ga.** {{cmd:SCANATTACH}} čita PNG, JPEG, TIFF (jednu stranicu ili sve stranice višestranične datoteke) ili PDF stranicu koja je slika. Traži stranicu, donji lijevi kut i širinu. Za PDF stranicu traži i koliko piksela po inču treba crtati stranicu.
2. **Zadajte mjerilo.** {{cmd:SCANSCALE}}: odaberite dvije točke na skeniranju, zatim upišite stvarnu udaljenost između njih. List se skalira oko prve točke.
3. **Poravnajte ga.** {{cmd:SCANALIGN}}: odaberite dvije točke na skeniranju i dva mjesta kojima pripadaju; list se pomiče i okreće da stane, a skalira se i sam, osim ako odgovorite Ne.
4. **Ispravite nagib.** {{cmd:SCANDESKEW}} mjeri kut pod kojim leže duge linije lista i prikazuje ga, s pouzdanošću. Prihvatite ga ili upišite vlastiti, i list se okrene. List s malo dugih linija dobija upozorenje: provjerite kut prije prihvaćanja.
5. **Očistite ga.** {{cmd:SCANCLEAN}} pretvara list u crno-bijeli (Auto prvo izjednačava papir; Adaptive preciznije prati promjene papira; Level je jedan broj za cijeli list) i uklanja točkice do veličine koju postavite.
6. **Obrežite i izbrišite.** {{cmd:SCANCROP}} zadržava prozor. {{cmd:SCANERASE}} briše pravokutnik, mnogokut ili laso (pritisnite i povucite): pečate, bilješke, trag šalice kave.

Očišćena slika je ono što spremljeni DWG sadrži (IMAGE i njegov IMAGEDEF, s datotekom slike pored crteža, kao i za svaku sliku).

## Hvatanje na linije skeniranja

Uz uključeno {{cmd:RASTERSNAP}} (zadano), hvatanja objekata također nalaze linije crno-bijelog skeniranja: krajeve linija, njihove sredine, kutove i presjeke, prikazane uobičajenim oznakama hvatanja. Dio lista pod pokazivačem prati se dok pomičete; uvećajte dovoljno da jedan piksel bude nekoliko piksela na zaslonu. Linija dulja od dijela koji se prati slijedi se do krajeva.

## Praćenje

{{cmd:SCANTRACE}} pretvara linije lista u linije i lukove na novom sloju (SCAN-TRACE), kao jedan korak poništavanja, sa skeniranjem još ispod njih. Postavljate:

- **Tolerancija:** koliko daleko praćena linija ili luk smiju biti od linija na skeniranju, u jedinicama crteža (izvješće također daje piksele). Stroga tolerancija prati svaku neravninu; labava pravi manje, ravnije dijelove.
- **Prozor:** kut lista ili cijeli list.
- **Lukovi:** isključeno daje samo linije.
- **Ostatci:** što praćenje nije obradilo crta se kao okviri na sloju koji možete isključiti, ili se uopće ne crta.

Praćenje nalazi središte svake crte, slijedi je, uklapa ravne linije i kružne lukove u nju, spaja dionice koje su bile prekinute gdje ih je presjekla druga linija, gotovo vodoravne i gotovo okomite linije čini točno vodoravnima i okomitima te zatvara kutove. **Tekst i šrafure ostaju kao raster:** dijelovi veličine slova odlažu se, a snopovi kratkih paralelnih linija uzimaju se kao šrafura i odlažu.

Kad završi, javlja koliko je linija i lukova napravljeno, toleranciju i koliko je dijelova ostavljeno kao raster. **To je ono što su pikseli dali, uz tu toleranciju, i nije tvrdnja da je rezultat ispravan.** Usporedite ga s listom: praćenje može propustiti slabu liniju, spojiti dvije linije koje su vrlo blizu, ili nacrtati liniju tamo gdje je samo mrlja. Najprije očistite skeniranje (poravnato, crno-bijelo, bez točkica) i rezultat će biti mnogo bolji.

## Što ne čita

TIFF datoteke pohranjene u pločicama, BigTIFF, TIFF s JPEG ili deflate kompresijom, Group 3 faks kodiranje i boje spremljene u zasebnim ravninama odbijaju se uz poruku; ponovno ih spremite kao trake s LZW, PackBits, Group 4 ili bez kompresije. PNG s isprepletanjem također se odbija. Datoteke veće od 128 MB ili 100 milijuna piksela se odbijaju, a prozor praćenja može sadržavati najviše 64 milijuna piksela.
