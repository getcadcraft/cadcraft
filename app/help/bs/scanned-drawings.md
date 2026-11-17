---
title: Skenirani crteži i praćenje
summary: Uvezi skenirani list, skaliraj ga i poravnaj, očisti, izbriši dijelove, hvataj za njegove linije i prati ga u linije i lukove.
keywords: skeniranje, skenirani crtež, raster, tiff, jpeg, png, razmjera, poravnanje, ispravljanje nagiba, uklanjanje mrlja, prag, crno-bijelo, obrezivanje, brisanje, praćenje, vektorizacija, hvatanje, lukovi, šrafura, papirni crteži, stari crteži, scanattach, scantrace
from: 36227e5b
---

## Od papirnog lista do objekata crteža

Skenirani crtež je slika. CadCraft čuva sliku koju ste mu dali i nikad je ne mijenja: svaki korak čišćenja pravi novu sliku, s jednim korakom poništavanja po koraku, a {{cmd:SCANINFO}} navodi originalnu datoteku i korake preduzete od tada. Ništa se nigdje ne šalje i ništa se ne nagađa pomoću treniranog modela: čišćenje i praćenje su obična obrada slike, i izvode se na vašem računaru.

1. **Umetnite ga.** {{cmd:SCANATTACH}} čita PNG, JPEG, TIFF (jednu stranicu ili sve stranice višestranične datoteke) ili PDF stranicu koja je slika. Traži stranicu, donji lijevi ugao i širinu. Za PDF stranicu pita i koliko piksela po inču da se stranica iscrta.
2. **Skalirajte ga.** {{cmd:SCANSCALE}}: odaberite dvije tačke na skeniranju, zatim upišite stvarnu udaljenost između njih. List se skalira u odnosu na prvu tačku.
3. **Poravnajte ga.** {{cmd:SCANALIGN}}: odaberite dvije tačke na skeniranju i dva mjesta kojima pripadaju; list se pomjera i okreće da se uklopi, i skalira se također, osim ako odgovorite Ne.
4. **Ispravite nagib.** {{cmd:SCANDESKEW}} mjeri ugao pod kojim leže duge linije lista i prikazuje ga, sa procjenom pouzdanosti. Prihvatite ga ili upišite vlastiti, i list se okrene. List s malo dugih linija dobija upozorenje: provjerite ugao prije nego ga prihvatite.
5. **Očistite ga.** {{cmd:SCANCLEAN}} pretvara list u crno-bijeli (Auto prvo izjednačava papir; Adaptive bolje prati promjene papira; Level je jedan broj za cijeli list) i uklanja mrlje do veličine koju postavite.
6. **Obrežite i izbrišite.** {{cmd:SCANCROP}} zadržava prozor. {{cmd:SCANERASE}} briše pravougaonik, poligon ili lasso (pritisnite i prevucite): pečate, bilješke, trag od šolje za kafu.

Očišćena slika je ono što sačuvani DWG drži (IMAGE i njegov IMAGEDEF, sa datotekom slike pored crteža, kao za svaku sliku).

## Hvatanje za linije skeniranja

Kada je {{cmd:RASTERSNAP}} uključen (podrazumijevano), hvatanja objekata također nalaze linije crno-bijelog skeniranja: krajeve linija, njihove sredine, uglove i presjeke, prikazane uobičajenim oznakama hvatanja. Dio lista pod pokazivačem prati se dok se pomjerate; uvećajte dovoljno da jedan piksel bude nekoliko piksela na ekranu. Linija duža od dijela koji se prati prati se do njenih krajeva.

## Praćenje

{{cmd:SCANTRACE}} pretvara linije lista u linije i lukove na novom sloju (SCAN-TRACE), kao jedan korak poništavanja, a skeniranje ostaje ispod njih. Postavljate:

- **Tolerancija:** koliko može da bude udaljena praćena linija ili luk od linija na skeniranju, u jedinicama crteža (izvještaj također daje piksele). Stroga tolerancija prati svako drhtanje; labava pravi manje, pravilnije dijelove.
- **Prozor:** ugao lista ili cijeli list.
- **Lukovi:** isključeno pravi samo linije.
- **Ostaci:** ono što praćenje nije obradilo crta se kao okviri na sloju koji možete isključiti, ili se ne crta.

Praćenje pronalazi središte svakog poteza, prati ga, uklapa prave linije i kružne lukove, spaja dijelove koji su bili prekinuti tamo gdje je presijecala druga linija, čini skoro vodoravne i skoro uspravne linije tačno vodoravnim i uspravnim, i zatvara uglove. **Tekst i šrafura ostaju kao raster:** dijelovi veličine slova se izdvajaju, a snopovi kratkih paralelnih linija uzimaju se za šrafuru i također se izdvajaju.

Kada završi, javlja koliko je linija i lukova napravljeno, toleranciju i koliko je dijelova ostavljeno kao raster. **To je ono što su pikseli dali uz tu toleranciju, i nije tvrdnja da je rezultat tačan.** Uporedite ga s listom: praćenje može preskočiti bljedu liniju, spojiti dvije linije koje leže vrlo blizu, ili nacrtati liniju tamo gdje je samo mrlja. Očistite skeniranje prvo (ispravljeno, crno-bijelo, bez mrlja) i rezultat je mnogo bolji.

## Šta se ne čita

TIFF datoteke pohranjene po pločicama, BigTIFF, TIFF sa JPEG ili deflate kompresijom, Group 3 faks kodiranje i boje sačuvane u zasebnim ravnima se odbijaju uz poruku; ponovo ih sačuvajte kao trake sa LZW, PackBits, Group 4 ili bez kompresije. Interlaced PNG datoteke se također odbijaju. Datoteke veće od 128 MB ili 100 miliona piksela se odbijaju, a prozor praćenja može imati najviše 64 miliona piksela.
