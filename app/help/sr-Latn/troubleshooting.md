---
title: Rešavanje problema
summary: Poruke koje CadCraft prikazuje i problemi na koje možeš naići, svaki sa uzrokom i rešenjem.
keywords: problem, greška, ne radi, poruka, ne može da se otvori, nepoznata komanda, ništa se ne dešava, zaglavljeno, tasteri ne rade, prazno, nedostaje, popravka
from: 8299b222
---

## Otvaranje datoteka

| Poruka ili simptom | Uzrok | Rešenje |
|---|---|---|
| „CadCraft otvara DWG i DXF crteže. „…“ nije ni jedno ni drugo.“ | Datoteka nije `.dwg` ni `.dxf`. | Otvori samu datoteku crteža. PDF može da se uveze (Otvori pita: uvezi ili priloži, vidi [PDF podloge](topic:pdf-underlay)); slike se ubacuju sa `IMAGEATTACH`. |
| „Ova binarna DXF datoteka se završava usred objekta: datoteka je skraćena ili oštećena.“ | Binarni DXF prestaje pre svog kraja. | Ukucaj RECOVER da otvoriš ono što može da se pročita, ili zatraži datoteku ponovo. |
| „Ova datoteka nije čitljiv DXF (loš kod grupe u redu …).“ | DXF je oštećen ili zapravo nije DXF. | Zatraži datoteku ponovo, ili DWG. |
| „Ovaj crtež nije mogao da se pročita. Možda je oštećen, ili sačuvan u verziji koju čitač još ne podržava (…).“ | DWG čitač nije mogao da ga pročita. | Zatraži DWG sačuvan u starijoj verziji, ili DXF. |
| „Ovaj crtež je iz AutoCAD R11 / R12 (DWG AC1009), stariji nego što CadCraft čita …“ | DWG datoteke iz Release 12 i starijih koriste format koji CadCraft ne čita. | U programu koji ga je napravio sačuvaj ga kao DXF (bilo koja verzija) ili kao noviji DWG, pa ga otvori. Sačuvaj kao u samom CadCraft-u nudi DXF R12 za programe koji traže taj stari format. |
| „Nije moguće otvoriti …“ praćeno porukom o mreži, na prvom DWG | Čitač DWG-a nije mogao da se preuzme: nisi na mreži, a CadCraft nije sačuvan za rad van mreže, ili je veza prekinuta. | Pređi na mrežu i pokušaj ponovo, ili otvori DXF. Klikni {{ui:Sačuvaj za rad van mreže}} i sačekaj „Spremno za rad van mreže“ da se DWG datoteke sledeći put otvaraju van mreže. Vidi [Rad van mreže](common:offline). |
| Dugme za rad van mreže kaže „Nije moguće sačuvati“ | Neke datoteke nisu preuzete. | Proveri vezu i klikni dugme da pokušaš ponovo. |
| Dugme za rad van mreže kaže „Rad van mreže nije dostupan“ | Privatni prozori i neki upravljani računari ne mogu da čuvaju kopiju za rad van mreže. | Koristi običan prozor, ili ostani na mreži. |
| CadCraft ne otvara bez veze | Nije sačuvan za rad van mreže u ovom pregledaču, ili ga je pregledač obrisao. | Sledeći put kad budeš na mreži klikni {{ui:Sačuvaj za rad van mreže}} i sačekaj „Spremno za rad van mreže“. |
| Crtež se otvara, ali nedostaju delovi | Objekti koje CadCraft još ne može da nacrta, ili slojevi koji su isključeni ili zamrznuti u datoteci. | Pročitaj „O ovoj datoteci“ u levom panelu. Proveri panel {{ui:Slojevi}}. |
| Tekst se prelama u dva reda | CadCraft crta tekst fontom u stilu Helvetice, širim od nekih CAD fontova. | Skrati tekst u Svojstvima, ili prihvati dodatni red. |
| Krug se prikazuje kao elipsa, ili ogledalski tekst se čita pravilno | Objekat je nacrtan u nagnutoj ravni, ili gledan odozdo, u programu koji je napravio datoteku. CadCraft ga prikazuje kao gledan odozgo, kako to radi pogled u tlocrtu tog programa; tekst ostaje čitljiv. | Ništa za popravku. Da vidiš to na način drugog programa, zatraži crtež spljošten, ili sa objektima nacrtanim odozgo. |
| Blok, krug ili kota stoji negde drugde nego u programu koji je napravio datoteku | Slučaj crteža koji CadCraft pogrešno čita. | Javi nam na Discord-u, sa datotekom ako je možeš podeliti. |

## Komandna linija

| Poruka ili simptom | Uzrok | Rešenje |
|---|---|---|
| „Nepoznata komanda „…“. Ukucaj HELP za spisak.“ | Nema komande ili aliasa pod tim imenom. | Ukucaj `HELP`, ili pogledaj [Referenca komandi](topic:commands). Neke poznate komande [još nisu napravljene](topic:not-built-yet). |
| „Nema takve komande“ pored komandne linije dok kucaš | Ono što kucaš još ne odgovara ničemu. | Nastavi da kucaš, ili proveri pravopis. |
| „Potrebna je tačka ili ključna reč opcije.“ | Ono što si ukucao nije tačka ni opcija. | Proveri format: `x,y`, `@dx,dy`, `@d<a`, ili jedan broj. Vidi [Unos koordinata i rastojanja](topic:coordinate-entry). |
| „Traži pozitivan broj ili dve tačke.“ | Rastojanje je bilo negativno ili nije broj. | Ukucaj pozitivan broj, ili klikni dve tačke. |
| „Traži ugao u stepenima ili dve tačke.“ | Ugao nije bio broj. | Ukucaj stepene kao običan broj. |
| „Traži broj.“ | Očekivao se broj. | Ukucaj samo cifre. |
| „Nevažeća ključna reč opcije.“ | Slova ne odgovaraju nijednoj opciji. | Ukucaj velika slova prikazana u uglastim zagradama. |
| `*Otkaži*` | Pritisnuo si {{key:Esc}}, ili {{key:Enter}} tamo gde je trebala tačka. | Pokreni komandu ponovo. |
| Unos ne stiže do komandne linije | Okvir u panelu ili dijalogu ima kursor. | Pritisni {{key:Enter}} ili {{key:Esc}}, ili klikni na crtež. |
| Komanda koristi objekte koje nisi izabrao | Bili su izabrani pre nego što si je pokrenuo. | Pritisni {{key:Esc}} pre komande. |
| Linija je otišla na neočekivano mesto | `x,y` je apsolutno. | Koristi `@dx,dy` za relativne tačke. |
| „Završi ili otkaži tekuću komandu prvo (Esc).“ | Pritisnuo si {{key:Mod+S}} dok je komanda radila. | Pritisni {{key:Esc}}, pa sačuvaj. |
| „Nije moguće sačuvati kao DWG (AutoCAD 2000): … Pokušaj Sačuvaj kao, pa DXF.“ | Nešto u crtežu nije moglo da se upiše kao DWG. | Pritisni {{key:Mod+Shift+S}}, izaberi DXF R12 i klikni {{ui:Sačuvaj}}. |
| „Nije sačuvano.“ | Zatvorio si dijalog {{ui:Sačuvaj kopiju kao}} sa {{ui:Otkaži}} ili {{key:Esc}}. | Pritisni {{key:Mod+Shift+S}} ponovo i klikni {{ui:Sačuvaj}}. |

## Uređivanje

| Poruka ili simptom | Uzrok | Rešenje |
|---|---|---|
| Objekat se ne bira | Njegov sloj je zaključan, isključen ili zamrznut; ili si na listu, a to je model unutar prozora pogleda. | Otključaj sloj, ili idi na karticu {{ui:Model}}. |
| „Ništa nije pronađeno tu.“ | Nema objekta pod klikom. | Uvećaj prikaz i klikni na samu liniju. |
| „Ništa ne seče taj objekat na tom mestu.“ | {{cmd:TRIM}} nije našao objekat koji seče deo koji si izabrao. | Proveri da rezna linija zaista seče taj deo. |
| „Taj objekat ne može da se skrati.“ | Skraćivanje radi nad linijama, lukovima, krugovima i polilinijama. | Prvo rastavi blokove, ili obriši i ponovo nacrtaj. |
| „Nema granice u tom smeru.“ | {{cmd:EXTEND}} nije našao ništa za spajanje. | Izaberi bliži kraj koji treba da raste. |
| „Taj objekat ne može da se ofsetuje.“ | Ofset radi nad linijama, lukovima, krugovima i polilinijama. | Prvo ga rastavi, ili nacrtaj paralelnu liniju. |
| „Taj ofset je predaleko.“ | Ofset bi okrenuo oblik naopako. | Koristi manje rastojanje. |
| „Poluprečnik je prevelik.“ ili „Rastojanje je prevelike.“ | Zaobljenje ili obaranje bi prešlo kraj linije. | Postavi manji poluprečnik sa `R`, ili manja rastojanja sa `D`. |
| „Samo prvi ili poslednji segment otvorene polilinije može da se skrati.“ | Ugao bi zadro u sredinu polilinije. | Izaberi dva susedna segmenta polilinije, ili koristi `P` za svaki ugao. |
| „Izaberi drugu, različitu liniju.“ | Druga tačka je ista linija, ili nije linija. | Izaberi drugu liniju. |
| „Samo polilinije, reference blokova i kote mogu da se rastave.“ | Izbor nije imao šta da se rastavi. | Izaberi poliliniju, referencu bloka ili kotu. |
| „To je tekući sloj. Prvo napravi drugi sloj tekućim.“ | Pokušao si da isključiš tekući sloj. | Klikni ime drugog sloja, pa isključi ovaj. |
| „Već postoji sloj pod imenom …“ | Imena slojeva moraju biti jedinstvena. | Izaberi drugo ime. |
| „Nema šta da se poništi.“ | Nema ništa što može da se poništi, ili si otvorio ili pokrenuo crtež (to briše istoriju). | — |

## Kote i blokovi

| Poruka ili simptom | Uzrok | Rešenje |
|---|---|---|
| Tekst i strelice kote su sitni ili ogromni | Veličine su u jedinicama crteža; ukupna razmera ne odgovara crtežu. | Postavi {{cmd:DIMSCALE}} na razmeru štampe; vidi [Podešavanje veličina kota](topic:dimension-settings). |
| „Izaberi tačku unutar ugla koji želiš da izmeriš.“ | Lokacija uglovne kote je na kraku. | Klikni unutar ugla. |
| „Te linije su paralelne.“ | Paralelne linije nemaju ugao između sebe. | Izaberi dve linije koje se sastaju. |
| „Izaberi linearnu ili poravnatu kotu.“ | {{cmd:DIMCONTINUE}} ili {{cmd:DIMBASELINE}} treba jednu da bi počeo. | Izaberi linearnu ili poravnatu kotu. |
| „Ovaj crtež još nema blokova: F ubacuje jedan iz datoteke, L iz biblioteke …“ | Crtež nema svoje blokove. | Ukucaj `F` ili `L`, ili napravi blok sa {{cmd:BLOCK}}. |
| „Nema bloka pod imenom „…“.“ | Ime je pogrešno. | Poruka navodi postojeće blokove. |
| „Ime bloka ne može da počne sa * ili da koristi …“ praćeno spiskom znakova | Ime ima znak koji blokovi ne mogu da koriste. | Koristi slova, cifre, `-` i `_`. |
| „Blok ne može da sadrži sam sebe.“ | Izbor sadrži referencu na blok koji se pravi. | Izostavi tu referencu. |
| „Nema izabranih objekata; ništa nije napravljeno.“ | Pritisnuo si {{key:Enter}} pre biranja. | Pokreni {{cmd:BLOCK}} ponovo i izaberi objekte. |

## Listovi i štampanje

| Poruka ili simptom | Uzrok | Rešenje |
|---|---|---|
| „Prozori pogleda idu na raspored. Prvo otvori karticu rasporeda (ili napravi jedan sa LAYOUT).“ | {{cmd:MVIEW}} na kartici {{ui:Model}}. | Prvo klikni karticu lista. |
| „Prvo otvori raspored sa prozorom pogleda.“ | {{cmd:VPVIEW}} na kartici {{ui:Model}}. | Klikni karticu lista. |
| Razmera prozora pogleda izgleda deset puta pogrešno | Jedinice crteža su pogrešne. | Postavi {{ui:Jedinice}} u {{ui:Trenutna podešavanja}}. |
| „Nema ništa za štampu još.“ | Model je prazan. | Nacrtaj nešto, ili otvori crtež. |
| „Izaberi prozor za štampu.“ | Izabrano je {{ui:Prozor…}} i nije izabran prozor. | Klikni {{ui:Izbor}} i izaberi dva ugla. |
| „… veće od papira: ivice su odsečene.“ | Površina ne staje u toj razmeri. | Izaberi manju razmeru, veći papir, ili {{ui:Uklopi u papir}}. |
| „Pregledač je blokirao novi tab, pa je PDF preuzet umesto toga.“ | Iskačući prozori su blokirani za sajt. | Otvori preuzeti PDF, ili dozvoli iskačuće prozore za sajt. |
| Znakovi se štampaju kao „?“ | Fontovi PDF-a nemaju slovo za njih (retki ideogrami, hindi i druga pisma koja traže složeno oblikovanje, …), ili veći font nije mogao da se preuzme (van mreže). Evropska pisma, ćirilica, grčki, hebrejski, arapski, persijski, urdu, tajlandski, kineski, japanski i korejski se štampaju kao sami sebe. | Za arapsko pismo, tajlandski, kineski, japanski ili korejski štampaj ponovo uz vezu. Ostala pisma još nisu napravljena. |
| Pomoćne linije se vide u PDF-u | Njihov sloj se štampa. | Klikni dugme štampača na sloju. |
| Sve linije su jednako debele | Njihova debljina je {{ui:Podrazumevano}}, pa se štampaju debljinom pera iz dijaloga. | Daj slojevima ili objektima {{ui:Debljina linije}} u desnom panelu, ili izaberi {{ui:Debljina linije}} u dijalogu. Da vidiš debljine na ekranu, pritisni {{ui:LWT}} u statusnoj traci. |

## Tasteri i ekran

| Simptom | Uzrok | Rešenje |
|---|---|---|
| F3, F7 ili F8 menja jačinu zvuka ili otvara Mission Control | Funkcijski tasteri na Mac-u. | Drži **fn**, ili koristi dugmad u statusnoj traci. Vidi [Tasteri, miševi i tačpedovi](common:keys). |
| F7 pita o pregledanju sa kursorom | Sopstvena upotreba F7 u Firefox-u. | Izaberi Ne; koristi dugme {{ui:Mreža}}. |
| {{key:Mod+N}} otvorio prozor pregledača | Pregledač zadržava taj taster. | Klikni {{ui:Novo}} ili ukucaj `NEW`. |
| {{key:Mod+A}} izabrao tekst komandne linije | Komandna linija je imala kursor. | Prvo klikni objekat, ili ukucaj `ALL` na upitu `Izaberi objekte`. |
| {{key:Delete}} ne briše | Komandna linija je imala kursor. | Ukucaj `E` i pritisni {{key:Enter}}. |
| Desni klik ne radi na Mac tačpedu | Control-klik može da se računa kao običan klik. | Klikni sa dva prsta. |
| Ništa se ne pomera na tačpedu | Nema srednjeg dugmeta, a Space ne pomera. | Prevuci sa dva prsta: 2D pogled se pomera (štipanje i točkić miša zumiraju). Ili prevuci držeći desni klik. |
| Prvi {{key:Esc}} je izašao iz celog ekrana | Pregledač koristi Esc da izađe iz celog ekrana. | Pritisni {{key:Esc}} ponovo da otkažeš komandu. |
| {{key:F1}} ne radi na Mac-u | F1 je taster za svetlinu. | Drži **fn**, ili klikni {{ui:Pomoć}}. |
| Kucanje ide u pretragu pomoći | Panel pomoći ima kursor. | Klikni na crtež. |
| Crtež je nestao sa ekrana | Udaljio si se previše. | Klikni {{ui:Granice}}, ili dvaput klikni točkić. |
| „Napusti sajt?“ pri zatvaranju kartice | Ima nesačuvanih izmena. | Ostani, sačuvaj sa {{key:Mod+S}}, pa zatvori. |
