---
title: Rad na jednom crtežu zajedno uz Live TeamWork
summary: Šta se menja u CadCraft-u dok ste u sesiji Live TeamWork iz CadCraft Studija: tuđi kursori i izbori, objekti koje neko menja, zaključavanja domaćina, vaš sopstveni opoziv, i pridruživanje iz pregledača na istoj mreži.
keywords: live, live teamwork, studio uživo, zajedno, saradnja, zajedničko uređivanje, sesija, deljenje uživo, pridruži se, kursor, zadržano, uređivanje, zaključavanje, livelock, liveunlock, livehold, zadrži sloj, zadrži oblast, katanac, opoziv, domaćin, asistent, ista datoteka, mnogo ljudi, sporo, ograničenje, ko je menjao, nedavne izmene, dnevnik izmena
from: 0497d2a3
---

## Šta ćete naučiti

Šta vidite i šta se dešava sa vašim izmenama dok više ljudi radi na jednom crtežu u isto vreme. CadCraft Studio pokreće i pridružuje se sesiji Live TeamWork (Podeli uživo, Pridruži se); ova stranica govori o samom crtežu.

## Svi crtaju u isto vreme

Crtajte i uređujte kao i obično. Vaše izmene se vide odmah, čak i pre nego što ih ostali imaju, a njihove se pojave na vašem ekranu malo posle nego što ih naprave. Svaka komanda radi: crtanje, izmene, slojevi, blokovi, listovi, kote, ograničenja.

Dvoje može da menja isti objekat. Kada menjate različite stvari, kao boju i krajnju tačku jedne linije, obe izmene se čuvaju. Kada menjate istu stvar, kasnija izmena pobeđuje.

Samo vaše je: tekući sloj, boja i visina teksta za nove objekte, vaša podešavanja kota, vaš pogled, podeljeni ekran i UCS. Crtež je zajednički; način na koji ga gledate nije.

## Drugi ljudi na vašem crtežu

- **Kursori:** pokazivač svake osobe se prikazuje sa njenim imenom u njenoj boji, i komanda koju pokreće. Vidite kursore ljudi koji rade blizu onoga što je na vašem ekranu.
- **Izbori:** ono što je neko izabrao obeleženo je njegovom bojom.
- **Uređivanje:** objekat koji neko izabere nosi oznaku kao što je „Ana uređuje”. I dalje možete da menjate njegovu boju ili da ga pomerate, ali ne možete da ga obrišete, rastavite ili ponovo ukucate dok ga ne pusti. Kada ga izaberete, dobijate podatak ko ga drži.
- **Ko je poslednji menjao:** izaberite jedan objekat koji je neko drugi promenio u ovoj sesiji, pa komandna linija kaže ko i šta je promenio („Poslednji je to menjao Ben: CIRCLE.”). Panel {{ui:Korisno}} u Studiju navodi svaku nedavnu izmenu pod {{ui:Nedavne izmene}}. Ništa od ovoga se ne čuva u crtežu: traje koliko i sesija.

## Zadržite sloj ili oblast dok radite tamo

Na velikom crtežu sa više ljudi, kažite koji deo je sada vaš:

1. Ukucajte `LIVEHOLD` i pritisnite {{key:Enter}}.
2. Izaberite `L` i ukucajte ime sloja (Enter zadržava tekući sloj), ili izaberite `A` i kliknite dva ugla oblasti.
3. Tuđe izmene na tom sloju, ili objekata u toj oblasti, se vraćaju, a ljudi dobijaju obaveštenje da radite tamo. Vašu oblast vidite kao isprekidani okvir; drugi je vide u vašoj boji sa vašim imenom, a slojevi koje držite navedeni su u gornjem levom uglu njihovog crteža.
4. `LIVEHOLD`, pa `R`, oslobađa sve što držite. Napuštanje sesije to takođe oslobađa.

Svako u sesiji može da zadrži, uključujući domaćina; zaključavanja domaćina važe i dalje iznad toga. Zadržavanje se nikada ne čuva u datoteci.

## Kada se izmena vrati

Domaćinova kopija crteža proverava svaku izmenu. Neke ne mogu da uđu, pa ih CadCraft vraća na vašem ekranu i kaže zašto u komandnoj liniji, na primer:

- neko je obrisao objekat, ili sloj ili blok koji mu treba, neposredno pre vas;
- neko uređuje taj objekat, ili drži njegov sloj ili oblast u kojoj se nalazi;
- domaćin ga je zaključao;
- blok koji postavljate je očišćen, ili sloj koji brišete još ima objekte na sebi.

## Opoziv poništava vaš rad

{{key:Mod+Z}} i {{ui:Opozovi}} poništavaju vašu poslednju komandu, u celini, i ostavljaju tuđi rad na miru. Kada je neko od tada promenio istu stvar, ništa se ne poništava i komandna linija kaže ko je to promenio. {{key:Mod+Y}} ponavlja.

## Zaključavanja (domaćin)

Domaćin može da zaštiti objekte ili ceo sloj tako da niko ne može da ih menja, uključujući i domaćina, dok se ne otključaju:

1. Izaberite objekte, pa ukucajte `LIVELOCK` i pritisnite {{key:Enter}}. Ili ukucajte `LIVELOCK` bez izabranog ičega i izaberite `L` da zaključate sloj po imenu: objekti dodati na taj sloj kasnije se takođe zaključavaju.
2. Zaključani objekti se crtaju isprekidano, sa oznakom „Zaključao domaćin” na svačijem ekranu.
3. `LIVEUNLOCK` ih otključava na isti način.

Zaključavanja pripadaju sesiji: završavaju se kada se ona završi i nikada se ne čuvaju u datoteci.

## Pridružite se sa iste datoteke

Ako ste otvorili baš onu datoteku koju je domaćin otvorio (iz zajedničke fascikle ili iste kopije), pridružite se iz svog CadCraft prozora u Studiju: otvorite panel {{ui:Korisno}} i koristite {{ui:Pridruži se ovde}} sa domaćinovim kodom. Putuju samo izmene napravljene otkako ga je domaćin otvorio, pa je veliki crtež spreman odmah. Ako je vaša datoteka druga, crtež domaćina zamenjuje je na vašem ekranu (vaša datoteka ostaje kakva je). Ovo radi samo dok je vaš crtež nepromenjen otkako ste ga otvorili.

## Asistenti u živoj sesiji

Asistent povezan sa vašim CadCraft prozorom (pogledajte pomoć o radu sa AI asistentima) pridružuje se sesiji kao sopstveni učesnik, prikazan svima kao „Asistent (preko <vaše ime>)”. Domaćin ga pušta unutra, kao i osobu; asistent domaćina se pridružuje odmah. Njegove izmene imaju sopstveni opoziv: vaš {{key:Mod+Z}} poništava vaš rad, a opoziv asistenta poništava samo njegov. Napušta sesiju kada ga isključite ili kada odete, i može da radi u sesiji samo dok vi možete da uređujete.

## Pridružite se iz pregledača

Saradnik bez Studija može da skenira sliku ispod domaćinovog koda telefonom, tabletom ili računarom na istoj mreži. CadCraft se otvara u pregledaču, pita vaše ime u komandnoj liniji, i popunjava se domaćinovim crtežom čim vas domaćin pusti unutra. Poziv-veza omogućava nekome da se pridruži sa druge mreže: domaćin treba mesto u Team Cloud Plan za aplikaciju, svi ostali se pridružuju besplatno, a veza radi samo dok je domaćinova sesija otvorena.

## Mnogo ljudi na jednom crtežu

Svaka izmena ide svima u sesiji, pa što ima više ljudi, to svaka promena duže stiže do svakog od njih, a sporiji laptopovi i veze zaostaju prvi. Uobičajena veličina sesije je 20 ljudi; domaćin može da dozvoli više za jednu sesiju (pogledajte pomoć o zajedničkom radu uživo). Ako je crtež spor sa mnogo ljudi, pomaže manje ljudi, manje njih koji uređuju u isto vreme, ili bolja veza.

## Kada se sesija završi

Samo domaćin čuva crtež. Kada domaćin završi sesiju, svi ostali zadržavaju nesačuvanu kopiju: sačuvajte je ako je želite.

:::note
Nešto što je vraćeno se crta preko objekata oko njega na vašem ekranu dok ponovo ne otvorite crtež. Šrafure i ispunjeni objekti koji se preklapaju mogu izgledati drugačije nego na kopiji domaćina; sam crtež je isti.
:::
