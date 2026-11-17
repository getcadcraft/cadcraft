---
title: Rad na jednom crtežu zajedno s Live TeamWork
summary: Što se mijenja u CadCraftu dok ste u sesiji Live TeamWork iz CadCraft Studija: tuđi kursori i odabiri, objekti koje netko uređuje, zaključavanja domaćina, vaše vlastito poništavanje te pridruživanje iz preglednika na istoj mreži.
keywords: uživo, live teamwork, zajedno, suradnja, zajedničko uređivanje, sesija, dijeli uživo, pridruži se, kursor, zadržano, uređivanje, zaključavanje, livelock, liveunlock, livehold, zadrži sloj, zadrži područje, lokot, poništi, domaćin, pomoćnik, isti crtež, mnogo ljudi, sporo, ograničenje, tko je promijenio, nedavne izmjene, dnevnik uređivanja
from: 0497d2a3
---

## Što ćete naučiti

Što vidite i što se događa s vašim izmjenama dok više ljudi radi na jednom crtežu u isto vrijeme. CadCraft Studio pokreće i pridružuje se sesiji Live TeamWork (Dijeli uživo, Pridruži se); ova stranica govori o samom crtežu.

## Svi crtaju u isto vrijeme

Crtajte i uređujte kao i obično. Vaše izmjene vidljive su odmah, čak i prije nego ih ostali imaju, a njihove se pojavljuju na vašem zaslonu malo nakon što ih naprave. Svaka naredba radi: crtanje, izmjena, slojevi, blokovi, listovi, kote, ograničenja.

Dvije osobe mogu promijeniti isti objekt. Kad mijenjate različite stvari, poput boje i jedne krajnje točke linije, obje se promjene zadržavaju. Kad mijenjate istu stvar, kasnija promjena pobjeđuje.

Samo vaše ostaje vaše: trenutni sloj, boja i visina teksta za nove objekte, vaše postavke kota, vaš pogled, podijeljeni zaslon i UCS. Crtež je zajednički; način na koji ga gledate nije.

## Ostali ljudi na vašem crtežu

- **Kursori:** pokazivač svake osobe prikazuje se s njezinim imenom u njezinoj boji te naredbom koju izvodi. Vidite kursore ljudi koji rade blizu onoga što je na vašem zaslonu.
- **Odabiri:** što netko odabere ocrtano je njegovom bojom.
- **Uređuje se:** objekt koji je netko odabrao nosi oznaku poput „Ana uređuje“. Još ga možete promijeniti u boji ili pomaknuti, ali ga ne možete izbrisati, rastaviti ni ponovno upisati dok ga ne pusti. Odabir vam kaže tko ga ima.
- **Tko ga je zadnji promijenio:** odaberite jedan objekt koji je netko drugi promijenio u ovoj sesiji i naredbeni redak kaže tko je i što je bila promjena („Ben je to zadnji promijenio: CIRCLE.“). Ploča Uporabno u Studiju navodi svaku nedavnu izmjenu pod {{ui:Nedavne izmjene}}. Ništa od ovoga se ne sprema u crtež: traje koliko i sesija.

## Zadržite sloj ili područje dok radite tamo

Na velikom crtežu s više ljudi recite koji je dio sada vaš:

1. Upišite `LIVEHOLD` i pritisnite {{key:Enter}}.
2. Odaberite `L` i upišite ime sloja (Enter zadržava trenutni sloj) ili odaberite `A` i odredite dva kuta područja.
3. Tuđe izmjene na tom sloju ili objektima u tom području vraćaju se, a te osobe obavještene su da radite tamo. Vaše područje vidite kao isprekidani okvir; drugi ga vide u vašoj boji s vašim imenom, a slojevi koje zadržavate navedeni su u gornjem lijevom kutu njihova crteža.
4. `LIVEHOLD`, zatim `R`, otpušta sve što zadržavate. Napuštanje sesije također to otpušta.

Svatko u sesiji može zadržati, uključujući domaćina; zaključavanja domaćina i dalje vrijede povrh toga. Zadržavanje se nikad ne sprema u datoteku.

## Kad se izmjena vrati

Domaćinova kopija crteža provjerava svaku izmjenu. Neke ne mogu proći, pa CadCraft vraća ih na vašem zaslonu i u naredbenom retku navodi razlog, na primjer:

- netko je izbrisao objekt, ili sloj ili blok koji mu treba, neposredno prije vas;
- netko uređuje taj objekt ili zadržava njegov sloj ili područje u kojem je;
- domaćin ga je zaključao;
- blok koji postavljate uklonjen je naredbom za čišćenje, ili sloj koji brišete još ima objekte na sebi.

## Poništavanje vraća vaš rad

{{key:Mod+Z}} i {{ui:Poništi}} poništavaju vašu posljednju naredbu, cijelu, i ostavljaju tuđi rad na miru. Kad je netko u međuvremenu promijenio istu stvar, ništa se ne poništava i naredbeni redak kaže tko je promijenio. {{key:Mod+Y}} ponavlja.

## Zaključavanja (domaćin)

Domaćin može zaštititi objekte ili cijeli sloj tako da ih nitko ne mijenja, uključujući i samog domaćina, dok se ne otključaju:

1. Odaberite objekte, zatim upišite `LIVELOCK` i pritisnite {{key:Enter}}. Ili upišite `LIVELOCK` bez odabira i odaberite `L` da zaključate sloj po imenu: objekti dodani tom sloju kasnije također su zaključani.
2. Zaključani objekti crtaju se isprekidano s oznakom „Zaključao domaćin“ na zaslonu svih.
3. `LIVEUNLOCK` ih otključava na isti način.

Zaključavanja pripadaju sesiji: završavaju kad ona završi i nikad se ne spremaju u datoteku.

## Pridružite se s istom datotekom

Ako ste otvorili istu datoteku koju je domaćin otvorio (iz zajedničke mape ili iste kopije), pridružite se iz svog CadCraft prozora u Studiju: otvorite ploču {{ui:Uporabno}} i upotrijebite {{ui:Pridruži se ovdje}} s domaćinovim kodom. Putuju samo izmjene napravljene otkad je domaćin otvorio datoteku, pa je veliki crtež odmah spreman. Ako je vaša datoteka druga, domaćinov crtež zamjenjuje je na vašem zaslonu (vaša datoteka ostaje kakva jest). To radi samo dok vaš crtež nije promijenjen otkad ste ga otvorili.

## Pridružite se iz preglednika

Kolega bez Studija može skenirati sliku pod domaćinovim kodom telefonom, tabletom ili računalom na istoj mreži. CadCraft se otvara u pregledniku, traži vaše ime u naredbenom retku i puni se domaćinovim crtežom kad vas domaćin pusti unutra. Poveznica pozivnice omogućuje nekome da se pridruži s druge mreže: domaćin treba mjesto Team Cloud Plana za aplikaciju, svi ostali se pridružuju besplatno, a poveznica radi samo dok je domaćinova sesija otvorena.

## Asistenti u živoj sesiji

Pomoćnik povezan s vašim CadCraft prozorom (vidi pomoć o radu s AI pomoćnicima) pridružuje se sesiji kao vlastiti sudionik, a svima se prikazuje kao „Pomoćnik (preko <vaše ime>)“. Domaćin ga pušta unutra, kao i osobu; domaćinov vlastiti pomoćnik pridružuje se odmah. Njegove promjene imaju vlastito poništavanje: vaš {{key:Mod+Z}} poništava vaš rad, a poništavanje pomoćnika poništava samo njegove korake. Napušta sesiju kad ga odspojite ili kad vi odete, a u sesiji može raditi samo dok vi smijete uređivati.

## Mnogo ljudi na jednom crtežu

Svaka izmjena ide svima u sesiji, pa što je više ljudi, to svaka promjena dulje stiže do svakoga, a sporija prijenosna računala i veze zaostaju prvi. Uobičajena veličina sesije je 20 ljudi; domaćin može dopustiti više za jednu sesiju (vidi pomoć o zajedničkom radu uživo). Ako je crtež sa mnogo ljudi spor, pomaže manje ljudi, manje njih koji uređuju u isto vrijeme ili bolja veza.

## Kad sesija završi

Samo domaćin sprema crtež. Kad domaćin završi sesiju, svi ostali zadržavaju nespremljenu kopiju: spremite je ako je želite zadržati.

:::note
Nešto što je vraćeno iscrtava se preko objekata oko njega na vašem zaslonu dok ponovno ne otvorite crtež. Šrafure i ispunjeni objekti koji se preklapaju mogu izgledati drukčije nego na domaćinovoj kopiji; sam crtež je isti.
:::
