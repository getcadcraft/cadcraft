---
title: Rješavanje problema
summary: Poruke koje CadCraft prikazuje i problemi na koje možeš naići, svaki s uzrokom i rješenjem.
keywords: problem, greška, ne radi, poruka, ne može se otvoriti, nepoznata komanda, ništa se ne dešava, zaglavljeno, tasteri ne rade, prazno, nedostaje, popravka
from: 8299b222
---

## Otvaranje datoteka

| Poruka ili simptom | Uzrok | Rješenje |
|---|---|---|
| "CadCraft otvara DWG i DXF crteže. "…" nije ni jedno ni drugo." | Datoteka nije `.dwg` ni `.dxf`. | Otvori samu datoteku crteža. PDF se može uvesti (Otvori pita: uvesti ili priložiti, vidi [PDF podloge](topic:pdf-underlay)); slike se dodaju s `IMAGEATTACH`. |
| "Ovaj binarni DXF završava usred objekta: datoteka je skraćena ili oštećena." | Binarni DXF prestaje prije svog kraja. | Upiši RECOVER da otvoriš ono što se može pročitati, ili zatraži datoteku ponovo. |
| "Ova datoteka nije čitljiv DXF (loš kod grupe u redu …)." | DXF je oštećen ili zapravo nije DXF. | Zatraži datoteku ponovo, ili DWG. |
| "Ovaj crtež nije mogao biti pročitan. Možda je oštećen, ili sačuvan u verziji koju čitač još ne podržava (…)." | DWG čitač ga nije mogao pročitati. | Zatraži DWG sačuvan u starijoj verziji, ili DXF. |
| "Ovaj crtež je iz AutoCAD R11 / R12 (DWG AC1009), stariji nego što CadCraft čita …" | DWG datoteke iz Release 12 i ranijih koriste format koji CadCraft ne čita. | U programu koji ga je napravio sačuvaj ga kao DXF (bilo koja verzija) ili kao noviji DWG, pa ga otvori. CadCraft-ov vlastiti Spasi kao nudi DXF R12 za programe koji žele taj stari format. |
| "Nije moguće otvoriti …" praćeno porukom o mreži, pri prvom DWG-u | DWG čitač nije mogao biti preuzet: nisi na mreži, a CadCraft nije spašen za rad van mreže, ili je veza prekinuta. | Pređi na mrežu i pokušaj ponovo, ili otvori DXF. Klikni {{ui:Spasi za rad van mreže}} i sačekaj "Spremno za rad van mreže" da se DWG datoteke sljedeći put otvore van mreže. Vidi [Rad van mreže](common:offline). |
| Dugme za rad van mreže kaže "Nije moguće spasiti" | Neke datoteke nisu preuzete. | Provjeri vezu i klikni dugme da pokušaš ponovo. |
| Dugme za rad van mreže kaže "Rad van mreže nije dostupan" | Privatni prozori i neki upravljani računari ne mogu čuvati kopiju za rad van mreže. | Koristi običan prozor, ili ostani na mreži. |
| CadCraft se ne otvara bez veze | Nije sačuvan za rad van mreže u ovom pregledaču, ili ga je pregledač obrisao. | Sljedeći put kad si na mreži klikni {{ui:Spasi za rad van mreže}} i sačekaj "Spremno za rad van mreže". |
| Crtež se otvara, ali dijelovi nedostaju | Objekti koje CadCraft još ne može nacrtati, ili slojevi koji su isključeni ili zamrznuti u datoteci. | Pročitaj "O ovoj datoteci" u lijevom panelu. Provjeri panel {{ui:Slojevi}}. |
| Tekst se prelama u dva reda | CadCraft crta tekst fontom u stilu Helvetica, koji je širi od nekih CAD fontova. | Skrati tekst u Svojstvima, ili prihvati dodatni red. |
| Krug se prikazuje kao elipsa, ili zrcalni tekst se čita ispravno | Objekat je nacrtan u nagnutoj ravni, ili gledan odozdo, u programu koji je napravio datoteku. CadCraft ga prikazuje kao gledan odozgo, kao što to radi plan prikaz tog programa; tekst ostaje čitljiv. | Ništa za popraviti. Da vidiš kako to vidi drugi program, zatraži crtež sveden na ravan, ili s objektima nacrtanim odozgo. |
| Blok, krug ili kota nalazi se negdje drugdje u odnosu na program koji je napravio datoteku | Slučaj u crtežu koji CadCraft pogrešno čita. | Javi nam na Discordu, uz datoteku ako je možeš podijeliti. |

## Komandna linija

| Poruka ili simptom | Uzrok | Rješenje |
|---|---|---|
| "Nepoznata komanda "…". Upiši HELP za listu." | Nema komande ili aliasa s tim imenom. | Upiši `HELP`, ili vidi [Referenca komandi](topic:commands). Neke poznate komande [još nisu napravljene](topic:not-built-yet). |
| "Nema takve komande" pored komandne linije dok kucaš | Ono što kucaš još ne odgovara ničemu. | Nastavi kucati, ili provjeri pravopis. |
| "Potrebna je tačka ili ključna riječ opcije." | Ono što si upisao nije tačka ni opcija. | Provjeri format: `x,y`, `@dx,dy`, `@d<a`, ili jedan broj. Vidi [Unos koordinata i razmaka](topic:coordinate-entry). |
| "Traži pozitivan broj ili dvije tačke." | Razmak je bio negativan ili nije broj. | Upiši pozitivan broj, ili klikni dvije tačke. |
| "Traži ugao u stepenima ili dvije tačke." | Ugao nije bio broj. | Upiši stepene kao običan broj. |
| "Traži broj." | Očekivao se broj. | Upiši samo cifre. |
| "Neispravna ključna riječ opcije." | Slova ne odgovaraju nijednoj opciji. | Upiši velika slova prikazana u uglastim zagradama. |
| `*Cancel*` | Pritisnuo si {{key:Esc}}, ili {{key:Enter}} tamo gdje je tražena tačka. | Pokreni komandu ponovo. |
| Kucanje ne stiže do komandne linije | Okvir u panelu ili dijalogu ima kursor. | Pritisni {{key:Enter}} ili {{key:Esc}}, ili klikni na crtež. |
| Komanda koristi objekte koje nisi odabrao | Bili su odabrani prije nego si je pokrenuo. | Pritisni {{key:Esc}} prije komande. |
| Linija je otišla na neočekivano mjesto | `x,y` je apsolutno. | Koristi `@dx,dy` za relativne tačke. |
| "Prvo završi ili otkaži tekuću komandu (Esc)." | Pritisnuo si {{key:Mod+S}} dok je komanda radila. | Pritisni {{key:Esc}}, pa spasi. |
| "Nije moguće spasiti kao DWG (AutoCAD 2000): … Pokušaj Spasi kao, pa DXF." | Nešto u crtežu nije moglo biti zapisano kao DWG. | Pritisni {{key:Mod+Shift+S}}, izaberi {{ui:DXF R12}} i klikni {{ui:Spasi}}. |
| "Nije spašeno." | Zatvorio si dijalog {{ui:Spasi kopiju kao}} s {{ui:Otkaži}} ili {{key:Esc}}. | Pritisni {{key:Mod+Shift+S}} ponovo i klikni {{ui:Spasi}}. |

## Uređivanje

| Poruka ili simptom | Uzrok | Rješenje |
|---|---|---|
| Objekat se ne može odabrati | Njegov sloj je zaključan, isključen ili zamrznut; ili si na listu, a to je model unutar prozora na listu. | Otključaj sloj, ili pređi na karticu {{ui:Model}}. |
| "Tu ništa nije pronađeno." | Nema objekta pod klikom. | Uvećaj i klikni na samu liniju. |
| "Tu ništa ne siječe taj objekat." | {{cmd:TRIM}} nije našao objekat koji siječe dio koji si odabrao. | Provjeri da linija za rezanje zaista siječe objekat. |
| "Taj objekat se ne može skratiti." | Skraćivanje radi na linijama, lukovima, krugovima i polilinijama. | Prvo raznesi blokove, ili obriši i ponovo nacrtaj. |
| "Nema granice u tom smjeru." | {{cmd:EXTEND}} nije našao ništa na šta bi se dotakao. | Odaberi bliže kraju koji treba da se produži. |
| "Taj objekat se ne može pomaknuti paralelno." | Paralelni pomak radi na linijama, lukovima, krugovima i polilinijama. | Prvo ga raznesi, ili nacrtaj paralelnu liniju. |
| "Ne može se pomaknuti tako daleko." | Pomak bi okrenuo oblik naopako. | Koristi manju udaljenost. |
| "Poluprečnik je prevelik." ili "Udaljenost je prevelika." | Zaobljenje ili skošenje bi prešlo kraj linije. | Postavi manji poluprečnik s `R`, ili manje udaljenosti s `D`. |
| "Samo prvi ili posljednji segment otvorene polilinije može se skratiti." | Ugao bi zašao u sredinu polilinije. | Odaberi dva susjedna segmenta polilinije, ili koristi `P` za svaki ugao. |
| "Odaberi drugu, različitu liniju." | Drugi odabir je bila ista linija, ili nije linija. | Odaberi drugu liniju. |
| "Samo polilinije, reference blokova i kote se razmotavaju." | Odabir nije imao šta da se razmota. | Odaberi poliliniju, referencu bloka ili kotu. |
| "To je tekući sloj. Prvo postavi drugi sloj kao tekući." | Pokušao si isključiti tekući sloj. | Klikni na ime drugog sloja, pa isključi ovaj. |
| "Već postoji sloj pod nazivom …" | Imena slojeva moraju biti jedinstvena. | Izaberi drugo ime. |
| "Nema šta da se poništi." | Nema ništa više za poništiti, ili si otvorio ili započeo crtež (to briše historiju). | — |

## Kote i blokovi

| Poruka ili simptom | Uzrok | Rješenje |
|---|---|---|
| Tekst i strelice kote su sitni ili ogromni | Veličine su u jedinicama crteža; opšta razmjera ne odgovara crtežu. | Postavi {{cmd:DIMSCALE}} na razmjeru štampe; vidi [Postavi veličine kota](topic:dimension-settings). |
| "Odaberi tačku unutar ugla koji želiš izmjeriti." | Mjesto ugaone kote je na kraku. | Klikni unutar ugla. |
| "Te linije su paralelne." | Paralelne linije nemaju ugao među sobom. | Odaberi dvije linije koje se sastaju. |
| "Odaberi linearnu ili poravnatu kotu." | {{cmd:DIMCONTINUE}} ili {{cmd:DIMBASELINE}} treba jednu od njih za početak. | Odaberi linearnu ili poravnatu kotu. |
| "Ovaj crtež još nema blokove: F umeće jedan iz datoteke, L iz biblioteke …" | Crtež nema vlastite blokove. | Upiši `F` ili `L`, ili napravi blok s {{cmd:BLOCK}}. |
| "Nema bloka pod nazivom "…"." | Naziv je pogrešan. | Poruka navodi postojeće blokove. |
| "Naziv bloka ne može početi sa * ili koristiti …" praćeno listom znakova | Naziv ima znak koji blokovi ne mogu koristiti. | Koristi slova, cifre, `-` i `_`. |
| "Blok ne može sadržavati sam sebe." | Odabir sadrži referencu na blok koji se pravi. | Izostavi tu referencu. |
| "Nema odabranih objekata; ništa nije napravljeno." | Pritisnuo si {{key:Enter}} prije odabira. | Pokreni {{cmd:BLOCK}} ponovo i odaberi objekte. |

## Listovi i štampa

| Poruka ili simptom | Uzrok | Rješenje |
|---|---|---|
| "Prozori na listu idu na raspored. Prvo otvori karticu rasporeda (ili napravi jednu s LAYOUT)." | {{cmd:MVIEW}} na kartici {{ui:Model}}. | Prvo klikni karticu lista. |
| "Prvo otvori raspored s prozorom." | {{cmd:VPVIEW}} na kartici {{ui:Model}}. | Prvo klikni karticu lista. |
| Razmjera prozora izgleda deset puta pogrešno | Jedinice crteža su pogrešne. | Postavi {{ui:Jedinice}} u {{ui:Trenutne postavke}}. |
| "Još nema šta da se štampa." | Model je prazan. | Nacrtaj nešto, ili otvori crtež. |
| "Odaberi prozor za štampu." | Izabrano je {{ui:Prozor…}}, a nijedan prozor nije odabran. | Klikni {{ui:Odaberi}} i odaberi dva ugla. |
| "… veće od papira: ivice su odsječene." | Područje ne stane u toj razmjeri. | Izaberi manju razmjeru, veći papir, ili {{ui:Uklopi u papir}}. |
| "Pregledač je blokirao novu karticu, pa je PDF umjesto toga preuzet." | Iskačući prozori su blokirani za ovaj sajt. | Otvori preuzeti PDF, ili dozvoli iskačuće prozore za sajt. |
| Znakovi se štampaju kao "?" | Fontovi PDF-a nemaju slovo za njih (rijetki ideogrami, hindi i druga pisma koja traže složeno oblikovanje, …), ili veći font nije mogao biti preuzet (van mreže). Evropska pisma, ćirilica, grčki, hebrejski, arapski, perzijski, urdu, tajlandski, kineski, japanski i korejski se štampaju kao sami sebe. | Za arapsko pismo, tajlandski, kineski, japanski ili korejski, štampaj ponovo s vezom. Ostala pisma još nisu napravljena. |
| Pomoćne linije se vide u PDF-u | Njihov sloj se štampa. | Klikni dugme štampača na sloju. |
| Sve linije su jednako debele | Njihova debljina je {{ui:Zadano}}, pa se štampaju širinom pera iz dijaloga. | Daj slojevima ili objektima {{ui:Debljina linije}} u desnom panelu, ili izaberi {{ui:Debljina linije}} u dijalogu. Da vidiš debljine na ekranu, pritisni {{ui:LWT}} u statusnoj traci. |

## Tasteri i ekran

| Simptom | Uzrok | Rješenje |
|---|---|---|
| F3, F7 ili F8 mijenja jačinu zvuka ili otvara Mission Control | Funkcijski tasteri na Mac-u. | Drži **fn**, ili koristi dugmad na statusnoj traci. Vidi [Tasteri, miševi i trackpad-ovi](common:keys). |
| F7 pita o pregledanju kursorom | Firefoxova vlastita upotreba F7. | Izaberi Ne; koristi dugme {{ui:Mreža}}. |
| {{key:Mod+N}} otvorio je prozor pregledača | Pregledač zadržava taj taster. | Klikni {{ui:Nova}} ili upiši `NEW`. |
| {{key:Mod+A}} je odabrao tekst komandne linije | Komandna linija je imala kursor. | Prvo klikni objekat, ili upiši `ALL` na upit `Select objects`. |
| {{key:Delete}} ne briše | Komandna linija ima kursor. | Upiši `E` i pritisni {{key:Enter}}. |
| Desni klik ne radi ništa na Mac trackpad-u | Control-klik može biti računat kao običan klik. | Klikni dvama prstima. |
| Ništa se ne pomjera na trackpad-u | Nema srednjeg dugmeta, a razmak ne pomjera pogled. | Prevuci dvama prstima: 2D prikaz se pomjera (štipanje i točkić miša zumiraju). Ili prevuci držeći desni klik. |
| Prvi {{key:Esc}} je izašao iz cijelog ekrana | Pregledač koristi Esc da izađe iz cijelog ekrana. | Pritisni {{key:Esc}} ponovo da otkažeš komandu. |
| {{key:F1}} ne radi ništa na Mac-u | F1 je taster za svjetlinu. | Drži **fn**, ili klikni {{ui:Pomoć}}. |
| Kucanje ide u polje za pretragu pomoći | Panel pomoći ima kursor. | Klikni na crtež. |
| Crtež je postao prazan | Uvećao si daleko. | Klikni {{ui:Granice}}, ili dvaput klikni točkić. |
| "Napusti sajt?" pri zatvaranju kartice | Postoje nespašene promjene. | Ostani, spasi s {{key:Mod+S}}, pa zatvori. |
