---
title: Skenirani crteži i praćenje
summary: Uvezi skenirani list, razmeri i poravnaj ga, očisti, izbriši delove, uhvati tačke na njegovim linijama i prati ga u linije i lukove.
keywords: skeniranje, skenirani crtež, raster, tiff, jpeg, png, razmera, poravnanje, ispravljanje ugla, uklanjanje tačkica, prag, crno-belo, isecanje, brisanje, praćenje, vektorizacija, hvatanje, lukovi, šrafura, papirni crteži, stari crteži, scanattach, scantrace
from: 36227e5b
---

## Od papirnog lista do objekata crteža

Skenirani crtež je slika. CadCraft zadržava sliku koju ste mu dali i nikad je ne menja: svaki korak čišćenja pravi novu sliku, jedan korak opoziva po koraku, a {{cmd:SCANINFO}} navodi originalnu datoteku i korake preduzete od tada. Ništa se ne šalje nigde i ništa se ne pogađa uz pomoć treniranog modela: čišćenje i praćenje su obična obrada slike i izvršavaju se na vašem računaru.

1. **Umetni ga.** {{cmd:SCANATTACH}} čita PNG, JPEG, TIFF (jednu stranicu ili sve stranice višestranične datoteke) ili PDF stranicu koja je slika. Pita za stranicu, donji levi ugao i širinu. Za PDF stranicu pita i koliko piksela po inču da se stranica iscrta.
2. **Razmeri ga.** {{cmd:SCANSCALE}}: izaberite dve tačke na skenu, pa ukucajte stvarno rastojanje između njih. List se razmerava oko prve tačke.
3. **Poravnaj ga.** {{cmd:SCANALIGN}}: izaberite dve tačke na skenu i dva mesta kojima one pripadaju; list se pomera i okreće da se uklopi, a razmerava se i on, osim ako odgovorite Ne.
4. **Ispravi ga.** {{cmd:SCANDESKEW}} meri ugao pod kojim leže duge linije lista i prikazuje ga, zajedno sa tim koliko je siguran. Prihvatite ga ili ukucajte svoj, i list se okreće. List sa malo dugih linija dobija upozorenje: proverite ugao pre prihvatanja.
5. **Očisti ga.** {{cmd:SCANCLEAN}} pretvara list u crno-beli (Auto prvo izjednačava papir; Adaptive pažljivije prati promene papira; Level je jedan broj za ceo list) i uklanja tačkice do veličine koju podesite.
6. **Iseci i izbriši.** {{cmd:SCANCROP}} zadržava jedan prozor. {{cmd:SCANERASE}} briše pravougaonik, poligon ili lazo (pritisnite i prevucite): pečate, beleške, mrlju od kafe.

Očišćena slika je ono što sačuvani DWG drži (IMAGE i njegov IMAGEDEF, sa datotekom slike pored crteža, kao za svaku sliku).

## Hvatanje za linije skena

Kada je {{cmd:RASTERSNAP}} uključen (podrazumevano), hvatanja objekata pronalaze i linije crno-belog skena: krajeve linija, njihove sredine, uglove i preseke, prikazane uobičajenim oznakama hvatanja. Deo lista ispod pokazivača se prati dok se pomerate; uvećajte dovoljno da piksel bude nekoliko piksela na ekranu. Linija duža od dela koji se prati prati se do njenih krajeva.

## Praćenje

{{cmd:SCANTRACE}} pretvara linije lista u linije i lukove na novom sloju (SCAN-TRACE), kao jedan korak opoziva, a sken ostaje ispod njih. Podešavate:

- **Tolerancija:** koliko praćena linija ili luk smeju da odstupaju od linija na skenu, u jedinicama crteža (izveštaj daje i piksele). Stroga tolerancija prati svaku neravninu; labava pravi manje, pravilnije delove.
- **Prozor:** ugao lista ili ceo list.
- **Lukovi:** isključeno pravi samo linije.
- **Ostaci:** ono što praćenje nije obradilo crta se kao okviri na sloju koji možete isključiti, ili se ne crta.

Praćenje nalazi središte svakog poteza, prati ga, uklapa prave linije i kružne lukove, spaja delove koji su prekinuti tamo gde je preseklo drugu liniju, pravi skoro vodoravne i skoro uspravne linije tačno vodoravnim i uspravnim i zatvara uglove. **Tekst i šrafura ostaju kao raster:** delovi veličine slova se izdvajaju, a snopovi kratkih paralelnih linija se smatraju šrafurom i izdvajaju.

Kada završi, javlja koliko je linija i lukova napravljeno, toleranciju i koliko je delova ostalo kao raster. **To je ono što su pikseli dali, uz tu toleranciju, i to nije tvrdnja da je rezultat tačan.** Uporedite ga sa listom: praćenje može da propusti bledu liniju, spoji dve linije koje leže veoma blizu ili nacrta liniju tamo gde je samo mrlja. Najpre očistite sken (ispravljen, crno-beo, bez tačkica) i rezultat će biti mnogo bolji.

## Šta se ne čita

TIFF datoteke smeštene u pločice, BigTIFF, TIFF sa JPEG ili deflate kompresijom, Group 3 faks kodiranje i boje čuvane u odvojenim ravnima se odbijaju uz poruku; sačuvajte ih ponovo kao trake sa LZW, PackBits, Group 4 ili bez kompresije. Interlaced PNG datoteke se takođe odbijaju. Datoteke veće od 128 MB ili 100 miliona piksela se odbijaju, a prozor praćenja može da sadrži najviše 64 miliona piksela.
