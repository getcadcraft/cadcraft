---
title: Dodavanje teksta i oznaka
summary: Postavi oznake prostorija jednorednim tekstom, napiši beleške koje se prelamaju pasusnim tekstom ukucanim na mestu, a kasnije uredi tekst.
keywords: tekst, dtext, mtext, mleader, multileader, pokazna linija, revcloud, oblak revizije, oblak, pronađi, zameni, pronađi i zameni, pasus, prelamanje, razmak redova, oznaka, beleška, anotacija, visina, poravnanje, textmask, maska pozadine, maska, wipeout, rotiranje, uredi tekst, ddedit, textedit, font
from: 4b76be99
---

## Šta ćeš napraviti

Dve oznake prostorija, centrirane u svojim prostorijama, belešku koja se prelama po svojoj širini, pa ispravku jedne od oznaka.

## Visina teksta i razmera crteža

Visina teksta je u jedinicama crteža. U crtežu u milimetrima koji će se štampati u razmeri 1:50, tekst visok 2.5 mm na papiru mora biti 2.5 × 50 = 125 jedinica visok u modelu. Na kartici lista crtaš u jedinicama papira, pa je 2.5 tu 2.5 mm na papiru.

## Postavljanje centrirane oznake

1. Ukucaj `DT` i pritisni {{key:Enter}} (ili klikni {{ui:Tekst}} na traci sa alatkama). Upit glasi `Zadaj početnu tačku teksta [Poravnaj (J)]:`.
2. Ukucaj `J` i pritisni {{key:Enter}}.
3. Na `Unesi opciju [Levo (L)/Centar (C)/Desno (R)/Sredina (M)/Gore levo (TL)/Središte (MC)] <L>:` ukucaj `MC` i pritisni {{key:Enter}}.
4. Na `Zadaj tačku umetanja teksta` klikni sredinu prostorije.
5. Na `Zadaj visinu` ukucaj `250` i pritisni {{key:Enter}}.
6. Na `Zadaj ugao rotacije teksta <0>` pritisni {{key:Enter}}.
7. Na `Unesi tekst` ukucaj `KUHINJA` i pritisni {{key:Enter}}.

Oznaka se pojavljuje, centrirana na tačku na koju si kliknuo.

8. Pritisni {{key:Enter}} na praznom upitu `Unesi tekst` da završiš komandu.

## Napiši belešku koja se prelama

Pasusni tekst ({{cmd:MTEXT}}) se prelama na zadatu širinu i kuca se pravo na crtež.

1. Ukucaj `T` i pritisni {{key:Enter}}, ili klikni {{ui:Pasus}} na traci sa alatkama.
2. Na `Zadaj prvi ugao` klikni mesto gornjeg levog ugla beleške.
3. Ako želiš da prvo promeniš visinu, ukucaj `H`, pritisni {{key:Enter}}, ukucaj `250` i pritisni {{key:Enter}}.
4. Na `Zadaj suprotni ugao [Visina (H)/Poravnaj (J)/Prored (L)/Rotiranje (R)/Širina (W)]` klikni desno od prvog ugla. Rastojanje preko je širina po kojoj se tekst prelama; koliko nisko klikneš, to je ne ograničava.
5. Otvara se okvir preko crteža sa kursorom u njemu. Ukucaj `SVE KOTE SU U MILIMETRIMA OSIM AKO NIJE DRUGAČIJE NAPOMENUTO`. Reči se prelamaju po širini dok kucaš.
6. Pritisni {{key:Enter}} da počneš novi pasus i ukucaj `PROVERITI NA LICU MESTA`.
7. Pritisni {{key:Mod+Enter}}, klikni {{ui:U redu}} ili klikni bilo gde van okvira. Beleška je jedan objekat.

Traka iznad okvira menja {{ui:Visina}}, {{ui:Prored}} (1 je normalno, 1.5 je za polovinu više), {{ui:Širina}} (0 = bez prelamanja) i {{ui:Poravnaj}} dok kucaš. {{key:Esc}} ili {{ui:Otkaži}} zatvara okvir bez dodavanja ičega.

Opcije na drugom uglu: `H` visina, `J` poravnanje (`TL` gore levo … `BR` dole desno: ugao ili sredina okvira koji ostaje na mestu), `L` razmak redova, `R` rotacija, `W` otkucana širina umesto drugog ugla.

:::note
Dok je okvir otvoren, {{key:Space}} kuca razmak, a {{key:Enter}} počinje novi pasus. Sačuvani DWG čuva pasusni tekst kao MTEXT; DXF R12 nema pasusni tekst, pa se svaki red čuva kao poseban tekst.
:::

### Više jednorednih linija umesto toga

{{cmd:TEXT}} (`DT`) traži po jednu liniju: svaki {{key:Enter}} počinje sledeću liniju, 1.667 puta niže od visine teksta, a svaka linija je poseban objekat. Pritisni {{key:Enter}} na praznom redu da završiš.

## Opcije poravnanja

| Opcija | Tačka na koju klikneš je |
|---|---|
| Levo (podrazumevano) | Levi kraj osnovne linije |
| Centar | Sredina osnovne linije |
| Desno | Desni kraj osnovne linije |
| Sredina, MC | Sredina teksta, i po širini i gore-dole |
| TL | Gornji levi ugao |

## Uređivanje teksta

1. Dvaput klikni tekstualni objekat. Otvara se u istom okviru kao novi pasusni tekst, sa kursorom na kraju.
2. Promeni reči.
3. Pritisni {{key:Mod+Enter}} ili klikni van okvira. Tekst na crtežu se menja; {{key:Esc}} ga ostavlja kakav je bio.

{{cmd:TEXTEDIT}} (`ED`) radi isto: biraš jedan tekst za drugim i pritisneš {{key:Enter}} kad završiš.

Izaberi tekst da ga promeniš u desnom panelu: {{ui:Tekst}}, {{ui:Visina}}, {{ui:Širina prelamanja}} (0 = bez prelamanja), {{ui:Prored}}, {{ui:Rotiranje}}, položaj X i Y i {{ui:Poravnaj}}. Lista {{ui:Poravnaj}} nudi i Dole levo, koje tekst iz drugih programa ponekad koristi.

## Formatiranje unutar pasusnog teksta iz drugih programa

Pasusni tekst u DWG ili DXF može da nosi kodove unutar sebe: boje po reči, podebljano i kurziv, podvučeno, nadvučeno i precrtano, složene razlomke kao 1/2, i drugačiju visinu za reč. CadCraft zadržava te kodove, crta ih (na ekranu i u štampanom PDF-u) i čuva ih nepromenjene.

Kad menjaš takav tekst (dvostruki klik, {{cmd:TEXTEDIT}}, polje Tekst u desnom panelu ili {{cmd:FIND}} sa zamenom), menjaš njegove obične reči. Reč koju ukucaš ide u deo pored nje i preuzima njenu boju i stil; ostali kodovi ostaju gde jesu. Ako prepišeš brojeve složenog razlomka, taj razlomak postaje običan tekst. Postavljanje celog teksta iz polja Tekst zadržava kodove samo tamo gde može da zna koje su reči ostale.

Nazivi fontova (`\F`) se zadržavaju i čuvaju, ali se sve crta jednim fontom u stilu Helvetice. Paleta za kucanje kodova još ne postoji.

## Ukaži na nešto: višestruke pokazne linije

{{ui:Pokazna linija}} u grupi {{ui:Anotacije}} ({{cmd:MLEADER}}, `MLD`) crta strelicu, pokaznu liniju, kratak prihvat i belešku, kao jedan objekat.

1. Klikni {{ui:Pokazna linija}}. Na `Zadaj položaj vrha strelice` klikni na ono čemu se beleška odnosi.
2. Na `Zadaj položaj prihvata` klikni gde ide beleška. Prihvat se okreće ka strani na koju si kliknuo.
3. Ukucaj belešku u okvir koji se otvori i pritisni {{key:Mod+Enter}}.

`A` i `L` na prvo pitanje postavljaju veličinu vrha strelice i dužinu prihvata; visina teksta dolazi iz {{ui:Visina teksta}} za nove kote, pomnožene sa {{ui:Ukupna razmera}}. Dvaput klikni višestruku pokaznu liniju da promeniš reči. Hvatišta pomeraju vrh strelice i prihvat; beleška prati prihvat. U {{ui:Svojstva}}: {{ui:Tekst}}, {{ui:Visina}}, {{ui:Širina prelamanja}}, {{ui:Veličina strelice}} i {{ui:Rastojanje prihvata}}.

:::note
Višestruke pokazne linije se u DWG čuvaju kao prave višestruke pokazne linije. DXF nema višestruku pokaznu liniju u R12 ili 2000, pa se tu čuvaju kao linije, vrh strelice i tekst koje crtaju.
:::

## Označi izmene oblakom revizije

{{ui:Anotacije}} › {{ui:Više}} › {{ui:Oblak revizije}} ({{cmd:REVCLOUD}}, `RC`) crta oblak lukova oko onoga što se promenilo. Istorija prikazuje dužinu luka i tip koji će koristiti.

- **Pravougaoni** (prvi put): klikni dva ugla.
- `P` **Poligonalni**: klikni uglove, {{key:Enter}} zatvara oblak.
- `F` **Slobodni**: klikni gde počinje i pomeraj pokazivač oko površine bez klikanja; dodaje se luk na svaku dužinu luka. Klikni ili pritisni {{key:Enter}} da zatvoriš.
- `O` **Objekat**: izaberi zatvorenu polilinij, krug ili elipsu (ili liniju, luk ili otvorenu polilinij); ona postaje oblak. `Obrni smer?` `Y` okreće lukove prema unutra.
- `A` **Dužina luka**: dužina svakog luka. Izaberi onu koja odgovara razmeri štampe.

Oblak je zatvorena polilinija lukova, pa se čuva u svakom formatu.

## Pronađi i zameni reči

{{ui:Uređivanje}} › {{ui:Više}} › {{ui:Pronađi i zameni}} ({{cmd:FIND}}) pretražuje tekst, vrednosti atributa blokova i tekst kota na otvorenoj kartici (ili samo u izabranim objektima).

1. Ukucaj reči u {{ui:Pronađi}}. Lista prikazuje svako mesto gde se nalaze i broj.
2. Izaberi {{ui:Razlikuj velika i mala slova}}, {{ui:Samo cele reči}} ili {{ui:Koristi džokere (* i ?)}} ako ti trebaju, i isključi ono u čemu ne treba tražiti.
3. Klikni {{ui:Izaberi pronađeno}} da izabereš te objekte, ili ukucaj nove reči u {{ui:Zameni sa}} (lista pokazuje šta svaka postaje) i klikni {{ui:Zameni sve}}. Jedno {{key:Mod+Z}} poništava svaku zamenu.

Izmerena vrednost kote nije tekst, pa se nikad ne menja: u `<> TYP.` može da se menja samo `TYP.`.

## Sakrij linije iza oznake

1. Izaberi tekstove, ukucaj {{cmd:TEXTMASK}} i pritisni {{key:Enter}}.
2. `B` boji pozadinu crteža iza njih; `C` traži broj boje. `O` skida masku.
3. `Faktor pomeraja ivice`: {{key:Enter}} zadržava 1.5, polovinu visine teksta oko teksta.

Maska prekriva linije ispod teksta, na ekranu i pri štampanju. DWG 2004 ili noviji i DXF 2000 je zadržavaju; DWG formata 2000 i DXF R12 ne mogu, i čuvanje to kaže.

## Font

Sav tekst se crta fontom u stilu Helvetice, na ekranu i u PDF-ovima. Tekst iz otvorenih crteža zadržava svoje reči, visinu i položaj, ali ne i prvobitni font (naziv fonta unutar pasusnog teksta se čuva u datoteci, vidi gore).

U štampanim PDF-ovima tekst bilo kog evropskog pisma, ćirilice ili grčkog se štampa kao sam sebe (PDF nosi slova koja su mu potrebna, a tekst se i dalje može izabrati i pretraživati). Kineski, japanski i korejski tekst se takođe štampa kao sam sebe (štampanje prvi put dovlači veći font kad zatreba). Arapski, persijski, urdu i hebrejski tekst se štampa kao sam sebe (vidi sledeći odeljak). Znakovi za koje nijedan font nema slovo štampaju se kao "?", a istorija kaže koliko ih je bilo.

## Tekst zdesna nalevo: arapski, persijski, urdu, hebrejski

Kucaj tekst kao i bilo gde drugde: {{cmd:TEXT}} i {{cmd:MTEXT}} crtaju svaki red po redosledu čitanja. Red čiji je prvi znak arapski ili hebrejski čita se zdesna nalevo; brojevi i latinične reči unutar njega zadržavaju svoj redosled sleva udesno, a slova arapskog pisma se spajaju. Red koji počinje latiničnim slovom ostaje sleva udesno, sa rečima zdesna nalevo na svom mestu unutar njega. Svaki pasus višerednog teksta ima svoj smer, a prelomljeni pasus ga zadržava u svakom redu.

Tekst se čuva kako si ga ukucao, pa DWG i DXF datoteke razmenjuju tekst sa drugim programima nepromenjen. Tačka umetanja i poravnanje ({{ui:Levo}}, {{ui:Centar}}, {{ui:Desno}}) znače istu stranu kao za svaki tekst: beleška zdesna nalevo koja treba da visi sa svog desnog kraja treba {{ui:Desno}}.

Na ekranu slova dolaze iz fontova tvog sistema. U štampanom PDF-u hebrejski koristi isti ugrađeni font kao latinični tekst; tekst arapskog pisma dovlači još jedan font (manji od 1 MB, jednom), pa se tada cela PDF datoteka štampa tim fontom. Taj font nema sopstveni oblik za tri urdu znaka (heh goal, yeh barree i urdu tačku): štampaju se u obliku najbližeg arapskog slova. Crtež koji ima i tekst arapskog pisma i kineski, japanski ili korejski štampa jedan od ta dva kao "?", jer štampa nosi jedan font. Tekst u učitanom SHX fontu se poredi i spaja kad font ima slova na njihovim Unicode mestima; za stare fontove čija su slova već oblikovana koristi {{ui:Obrni}} u {{cmd:SHXFONTS}} kao i ranije.

## Česte greške

- **Tekst je premali da se vidi.** Visina je u jedinicama crteža. U velikom crtežu koristi veliku visinu (vidi gore) ili uvećaj prikaz.
- **Komanda se završila posle jednog reda.** Pritisnuo si {{key:Enter}} na praznom redu u {{cmd:TEXT}}. Pokreni je ponovo ili koristi pasusni tekst (`T`), gde {{key:Enter}} počinje novi pasus.
- **`T` je otvorio okvir umesto da traži red.** Kao u AutoCAD-u, `T` je pasusni tekst ({{cmd:MTEXT}}); jednoredni tekst je `DT`.
- **Tekst se prelama na drugom mestu nego u AutoCAD-u.** CadCraft prelama po širinama Helvetice; drugi font može da stane reč malo više ili manje u red.
- **Tekst u ogledalskoj kopiji.** Postavlja se ogledalski, ali ostaje čitljiv sleva udesno.
