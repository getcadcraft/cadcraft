---
title: Rješavanje problema
summary: Poruke koje CadCraft prikazuje i problemi na koje možete naići, svaki s uzrokom i rješenjem.
keywords: problem, pogreška, ne radi, poruka, ne može se otvoriti, nepoznata naredba, ništa se ne događa, zaglavljeno, tipke ne rade, prazno, nedostaje, rješenje
from: 8299b222
---

## Otvaranje datoteka

| Poruka ili simptom | Uzrok | Rješenje |
|---|---|---|
| „CadCraft otvara crteže DWG i DXF. „…“ nije ni jedno ni drugo.“ | Datoteka nije `.dwg` ni `.dxf`. | Otvorite samu datoteku crteža. PDF se može uvesti (Otvori pita: uvezi ili priloži, vidi [PDF podloge](topic:pdf-underlay)); slike se unose s `IMAGEATTACH`. |
| „Ovaj binarni DXF završava usred objekta: datoteka je skraćena ili oštećena.“ | Binarni DXF prestaje prije svog kraja. | Upišite RECOVER da otvorite ono što se može pročitati ili zatražite datoteku ponovno. |
| „Ova datoteka nije čitljiv DXF (neispravan kod grupe u retku …).“ | DXF je oštećen ili zapravo nije DXF. | Zatražite datoteku ponovno ili DWG. |
| „Ovaj crtež nije bilo moguće pročitati. Može biti oštećen ili spremljen u verziji koju čitač još ne podržava (…).“ | DWG čitač nije mogao pročitati crtež. | Zatražite DWG spremljen u starijoj verziji ili DXF. |
| „Ovaj crtež potječe iz AutoCAD R11 / R12 (DWG AC1009), starijeg nego što CadCraft čita …“ | DWG datoteke iz Release 12 i ranije koriste format koji CadCraft ne čita. | U programu koji ga je napravio spremite ga kao DXF (bilo koja verzija) ili kao noviji DWG i otvorite taj. Funkcija Spremi kao u CadCraftu nudi DXF R12 za programe koji traže taj stari format. |
| „Nije moguće otvoriti …“ nakon poruke o mreži, pri prvom DWG | DWG čitač nije mogao biti preuzet: niste na mreži i CadCraft nije spremljen za rad izvan mreže, ili se veza prekinula. | Prijeđite na mrežu i pokušajte ponovno ili otvorite DXF. Kliknite {{ui:Spremi za offline}} i pričekajte „Spremno za offline“ da se DWG datoteke sljedeći put otvore izvan mreže. Vidi [Rad izvan mreže](common:offline). |
| Gumb za offline kaže „Nije moguće spremiti“ | Neke datoteke nisu preuzete. | Provjerite vezu i kliknite gumb da pokušate ponovno. |
| Gumb za offline kaže „Offline nije dostupno“ | Privatni prozori i neka upravljana računala ne mogu zadržati kopiju za rad izvan mreže. | Koristite obični prozor ili ostanite na mreži. |
| CadCraft se ne otvara bez veze | Nije bio spremljen za rad izvan mreže u ovom pregledniku, ili ga je preglednik obrisao. | Sljedeći put kad ste na mreži kliknite {{ui:Spremi za offline}} i pričekajte „Spremno za offline“. |
| Crtež se otvara, ali dijelovi nedostaju | Objekti koje CadCraft još ne može nacrtati, ili slojevi koji su isključeni ili zamrznuti u datoteci. | Pročitajte „O ovoj datoteci“ u lijevoj ploči. Provjerite ploču {{ui:Slojevi}}. |
| Tekst se prelama u dva retka | CadCraft crta tekst fontom u stilu Helvetice, širim od nekih CAD fontova. | Skratite tekst u Svojstvima ili prihvatite dodatni redak. |
| Kružnica se prikazuje kao elipsa, ili zrcalni tekst se čita u pravom smjeru | Objekt je nacrtan u nagnutoj ravnini ili gledan odozdo, u programu koji je napravio datoteku. CadCraft ga prikazuje kao gledan odozgo, kako to radi tlocrtni pogled tog programa; tekst ostaje čitljiv. | Nema što popravljati. Da vidite kako to prikazuje drugi program, zatražite da se crtež spljošti ili da se objekti nacrtaju odozgo. |
| Blok, kružnica ili kota nalazi se negdje drugdje nego u programu koji je napravio datoteku | Slučaj crteža koji CadCraft čita pogrešno. | Javite nam na Discordu, s datotekom ako je možete podijeliti. |

## Naredbeni redak

| Poruka ili simptom | Uzrok | Rješenje |
|---|---|---|
| „Nepoznata naredba „…“. Upišite HELP za popis.“ | Nema naredbe ni alijasa s tim nazivom. | Upišite `HELP` ili pogledajte [Popis naredbi](topic:commands). Neke poznate naredbe [još nisu izrađene](topic:not-built-yet). |
| „Nema takve naredbe“ pored naredbenog retka dok tipkate | Ono što upisujete još ne odgovara ničemu. | Nastavite tipkati ili provjerite pravopis. |
| „Potrebna je točka ili ključna riječ opcije.“ | Ono što ste upisali nije točka ni opcija. | Provjerite oblik: `x,y`, `@dx,dy`, `@d<a` ili jedan broj. Vidi [Unos koordinata i udaljenosti](topic:coordinate-entry). |
| „Potreban je pozitivan broj ili dvije točke.“ | Udaljenost je bila negativna ili nije broj. | Upišite pozitivan broj ili kliknite dvije točke. |
| „Potreban je kut u stupnjevima ili dvije točke.“ | Kut nije bio broj. | Upišite stupnjeve kao običan broj. |
| „Potreban je broj.“ | Očekivao se broj. | Upišite samo znamenke. |
| „Neispravna ključna riječ opcije.“ | Slova ne odgovaraju nijednoj opciji. | Upišite velika slova prikazana u uglatim zagradama. |
| `*Cancel*` | Pritisnuli ste {{key:Esc}}, ili {{key:Enter}} tamo gdje je trebala točka. | Pokrenite naredbu ponovno. |
| Tipkanje ne dolazi do naredbenog retka | Okvir u ploči ili dijaloškom okviru ima kursor. | Pritisnite {{key:Enter}} ili {{key:Esc}}, ili kliknite na crtež. |
| Naredba koristi objekte koje niste odabrali | Bili su odabrani prije nego što ste je pokrenuli. | Pritisnite {{key:Esc}} prije naredbe. |
| Linija je otišla na neočekivano mjesto | `x,y` je apsolutno. | Upotrijebite `@dx,dy` za relativne točke. |
| „Prvo završite ili otkažite trenutnu naredbu (Esc).“ | Pritisnuli ste {{key:Mod+S}} dok je naredba bila u tijeku. | Pritisnite {{key:Esc}}, zatim spremite. |
| „Nije moguće spremiti kao DWG (AutoCAD 2000): … Pokušajte Spremi kao, pa DXF.“ | Nešto u crtežu ne može se zapisati kao DWG. | Pritisnite {{key:Mod+Shift+S}}, odaberite {{ui:DXF R12}} i kliknite {{ui:Spremi}}. |
| „Nije spremljeno.“ | Zatvorili ste dijaloški okvir {{ui:Spremi kopiju kao}} s {{ui:Odustani}} ili {{key:Esc}}. | Pritisnite {{key:Mod+Shift+S}} ponovno i kliknite {{ui:Spremi}}. |

## Uređivanje

| Poruka ili simptom | Uzrok | Rješenje |
|---|---|---|
| Objekt se ne može odabrati | Njegov sloj je zaključan, isključen ili zamrznut; ili ste na listu i to je model unutar viewporta. | Otključajte sloj ili idite na karticu {{ui:Model}}. |
| „Ništa nije pronađeno tamo.“ | Nema objekta ispod klika. | Uvećajte prikaz i kliknite na samu liniju. |
| „Ništa ne presijeca taj objekt tamo.“ | {{cmd:TRIM}} nije našao objekt koji presijeca dio koji ste odabrali. | Provjerite da rezna linija stvarno presijeca objekt. |
| „Taj objekt nije moguće skratiti.“ | Skraćivanje radi na linijama, lukovima, kružnicama i polilinijama. | Prvo rastavite blokove ili izbrišite i nacrtajte ponovno. |
| „Nema granice u tom smjeru.“ | {{cmd:EXTEND}} nije našao što bi sustigao. | Odaberite bliže kraju koji treba produljiti. |
| „Taj objekt nije moguće odmaknuti.“ | Odmak radi na linijama, lukovima, kružnicama i polilinijama. | Prvo ga rastavite ili nacrtajte paralelnu liniju. |
| „Nije moguće odmaknuti tako daleko.“ | Odmak bi oblik okrenuo naopako. | Upotrijebite manju udaljenost. |
| „Radijus je prevelik.“ ili „Udaljenost je prevelika.“ | Zaobljenje ili skošenje bi prešlo kraj linije. | Postavite manji radijus s `R`, ili manje udaljenosti s `D`. |
| „Samo prvi ili zadnji segment otvorene polilinije može se skratiti.“ | Kut bi zašao u sredinu polilinije. | Odaberite dva susjedna segmenta polilinije ili upotrijebite `P` za svaki kut. |
| „Odaberite drugu, različitu liniju.“ | Drugi odabir je bio ista linija ili nije linija. | Odaberite drugu liniju. |
| „Rastavljaju se samo polilinije, reference blokova i kote.“ | Odabir nije imao što rastaviti. | Odaberite polilinija, referencu bloka ili kotu. |
| „To je aktivni sloj. Prvo postavite drugi sloj kao aktivni.“ | Pokušali ste isključiti aktivni sloj. | Kliknite ime drugog sloja, zatim isključite ovaj. |
| „Sloj pod nazivom … već postoji.“ | Nazivi slojeva moraju biti jedinstveni. | Odaberite drugi naziv. |
| „Nema što poništiti.“ | Nema više ničega za poništiti, ili ste otvorili ili pokrenuli crtež (to briše povijest). | — |

## Kote i blokovi

| Poruka ili simptom | Uzrok | Rješenje |
|---|---|---|
| Tekst kote i strelice su sitni ili ogromni | Veličine su u jedinicama crteža; ukupno mjerilo ne odgovara crtežu. | Postavite {{cmd:DIMSCALE}} na mjerilo ispisa; vidi [Postavljanje veličina kota](topic:dimension-settings). |
| „Odaberite točku unutar kuta koji želite izmjeriti.“ | Mjesto kutne kote nalazi se na kraku. | Kliknite unutar kuta. |
| „Te linije su paralelne.“ | Paralelne linije nemaju kut među sobom. | Odaberite dvije linije koje se sijeku. |
| „Odaberite linearnu ili poravnatu kotu.“ | {{cmd:DIMCONTINUE}} ili {{cmd:DIMBASELINE}} treba jednu da bi počeo. | Odaberite linearnu ili poravnatu kotu. |
| „Ovaj crtež još nema blokova: F umeće jedan iz datoteke, L iz knjižnice …“ | Crtež nema svoje blokove. | Upišite `F` ili `L`, ili napravite blok s {{cmd:BLOCK}}. |
| „Nema bloka pod nazivom „…“.“ | Naziv je pogrešan. | Poruka navodi blokove koji postoje. |
| „Naziv bloka ne može započeti s * ili koristiti …“ nakon popisa znakova | Naziv ima znak koji blokovi ne mogu koristiti. | Koristite slova, znamenke, `-` i `_`. |
| „Blok ne može sadržavati sam sebe.“ | Odabir sadrži referencu na blok koji se pravi. | Izostavite tu referencu. |
| „Nema odabranih objekata; ništa nije napravljeno.“ | Pritisnuli ste {{key:Enter}} prije odabira. | Pokrenite {{cmd:BLOCK}} ponovno i odaberite objekte. |

## Listovi i ispis

| Poruka ili simptom | Uzrok | Rješenje |
|---|---|---|
| „Viewporti idu na layout. Prvo otvorite karticu layouta (ili napravite jedan s LAYOUT).“ | {{cmd:MVIEW}} na kartici {{ui:Model}}. | Prvo kliknite karticu lista. |
| „Prvo otvorite layout s viewportom.“ | {{cmd:VPVIEW}} na kartici {{ui:Model}}. | Prvo kliknite karticu lista. |
| Mjerilo viewporta izgleda deset puta krivo | Jedinice crteža su krive. | Postavite {{ui:Jedinice}} u {{ui:Trenutne postavke}}. |
| „Još nema ničega za ispis.“ | Model je prazan. | Nacrtajte nešto ili otvorite crtež. |
| „Odaberite prozor za ispis.“ | Odabrano je {{ui:Prozor…}} i nije odabran nijedan prozor. | Kliknite {{ui:Odaberi}} i odaberite dva kuta. |
| „… veće od papira: rubovi su odsječeni.“ | Područje ne stane pri tom mjerilu. | Odaberite manje mjerilo, veći papir ili {{ui:Prilagodi papiru}}. |
| „Preglednik je blokirao novu karticu, pa je PDF umjesto toga preuzet.“ | Skočni prozori su blokirani za stranicu. | Otvorite preuzeti PDF ili dopustite skočne prozore za stranicu. |
| Znakovi se ispisuju kao „?“ | Fontovi PDF-a nemaju slovo za njih (rijetki ideogrami, hindi i druga pisma koja traže složeno oblikovanje, …), ili veći font nije mogao biti preuzet (offline). Europska pisma, ćirilica, grčki, hebrejski, arapski, perzijski, urdu, tajlandski, kineski, japanski i korejski ispisuju se kao sami sebe. | Za arapsko pismo, tajlandski, kineski, japanski ili korejski ispišite ponovno uz vezu. Ostala pisma još nisu izrađena. |
| Konstrukcijske linije se vide u PDF-u | Njihov sloj se ispisuje. | Kliknite gumb pisača na sloju. |
| Sve linije su jednako debele | Njihova debljina je {{ui:Zadano}}, pa se ispisuju debljinom pera iz dijaloga. | Dodijelite slojevima ili objektima {{ui:Debljina linije}} u desnoj ploči ili odaberite {{ui:Debljina linije}} u dijalogu. Da vidite debljine na zaslonu, pritisnite {{ui:LWT}} u statusnoj traci. |

## Tipke i zaslon

| Simptom | Uzrok | Rješenje |
|---|---|---|
| F3, F7 ili F8 mijenja glasnoću ili otvara Mission Control | Funkcijske tipke na Macu. | Držite **fn** ili upotrijebite gumbe na statusnoj traci. Vidi [Tipke, miševi i dodirne ploče](common:keys). |
| F7 pita o pregledavanju tekstualnim kursorom | Firefoxova vlastita upotreba tipke F7. | Odaberite Ne; upotrijebite gumb {{ui:Mreža}}. |
| {{key:Mod+N}} otvorio je prozor preglednika | Preglednik zadržava tu tipku. | Kliknite {{ui:Nova}} ili upišite `NEW`. |
| {{key:Mod+A}} je odabrao tekst naredbenog retka | Naredbeni redak je imao kursor. | Prvo kliknite objekt ili upišite `ALL` na upitu `Select objects`. |
| {{key:Delete}} ne briše | Naredbeni redak je imao kursor. | Upišite `E` i pritisnite {{key:Enter}}. |
| Desni klik ne radi na Mac dodirnoj ploči | Control-klik može se računati kao običan klik. | Kliknite s dva prsta. |
| Ništa se ne pomiče na dodirnoj ploči | Nema srednje tipke, a razmak ne pomiče prikaz. | Prevucite dvama prstima: pogled 2D se pomiče (štipanje i kotačić miša uvećavaju). Ili povucite s držanim desnim klikom. |
| Prvi {{key:Esc}} je izašao iz cijelog zaslona | Preglednik koristi Esc za izlazak iz cijelog zaslona. | Pritisnite {{key:Esc}} ponovno da otkažete naredbu. |
| {{key:F1}} ne radi na Macu | F1 je tipka za svjetlinu. | Držite **fn** ili kliknite {{ui:Pomoć}}. |
| Tipkanje ide u okvir za pretragu pomoći | Ploča pomoći ima kursor. | Kliknite na crtež. |
| Crtež je ostao prazan | Odmakli ste se predaleko uvećanjem. | Kliknite {{ui:Opseg}} ili dvaput kliknite kotačić. |
| „Napustiti stranicu?“ pri zatvaranju kartice | Ima nespremljenih promjena. | Ostanite, spremite s {{key:Mod+S}}, pa zatvorite. |
