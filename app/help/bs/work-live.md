---
title: Radi na jednom crtežu zajedno uz Live TeamWork
summary: Šta se mijenja u CadCraftu dok si u sesiji Live TeamWork iz CadCraft Studija: tuđi kursori i izbori, objekti koje neko uređuje, zaključavanja domaćina, tvoje vlastito poništavanje, i pridruživanje iz preglednika na istoj mreži.
keywords: live, live teamwork, studio live, zajedno, zajednički rad, uređivanje zajedno, sesija, podijeli uživo, pridruži se, kursor, zadržano, uređivanje, zaključaj, livelock, liveunlock, livehold, zadrži sloj, zadrži područje, lokot, poništi, domaćin, asistent, ista datoteka, mnogo ljudi, sporo, ograničenje, ko je promijenio, nedavne izmjene, dnevnik izmjena
from: 0497d2a3
---

## Šta ćeš naučiti

Šta vidiš i šta se dešava s tvojim izmjenama dok više ljudi radi na jednom crtežu u isto vrijeme. CadCraft Studio pokreće i pridružuje se sesiji Live TeamWork (Podijeli uživo, Pridruži se); ova stranica govori o samom crtežu.

## Svi crtaju u isto vrijeme

Crtaj i uređuj kao obično. Tvoje izmjene se vide odmah, čak i prije nego što ih drugi imaju, a njihove se pojave na tvom ekranu čim ih naprave. Svaka komanda radi: crtanje, izmjena, slojevi, blokovi, listovi, kote, ograničenja.

Dvije osobe mogu promijeniti isti objekat. Kad mijenjaš različite stvari, kao boju i krajnju tačku jedne linije, obje se izmjene zadržavaju. Kad mijenjaš istu stvar, kasnija izmjena pobjeđuje.

Samo tvoje su: trenutni sloj, boja i visina teksta za nove objekte, tvoje postavke kota, tvoj pogled, podijeljeni ekran i UCS. Crtež je zajednički; način na koji ga gledaš nije.

## Drugi ljudi na tvom crtežu

- **Kursori:** pokazivač svake osobe prikazuje se s njenim imenom u njenoj boji, i komanda koju pokreće. Vidiš kursore ljudi koji rade blizu onoga što je na tvom ekranu.
- **Izbori:** ono što je neko izabrao označeno je njegovom bojom.
- **Uređivanje:** objekat koji je neko izabrao nosi oznaku, kao "Ana uređuje". I dalje možeš promijeniti njegovu boju ili ga pomjeriti, ali ga ne možeš obrisati, rastaviti ili ponovo unijeti dok ga ne ostave. Kad ga izabereš, kaže ti ko ga drži.
- **Ko je zadnji promijenio:** izaberi jedan objekat koji je neko drugi promijenio u ovoj sesiji, pa komandna linija kaže ko i šta je bila promjena ("Ben je zadnji promijenio to: CIRCLE."). Panel Live u Studiju navodi svaku nedavnu izmjenu pod {{ui:Nedavne izmjene}}. Ništa od ovoga se ne čuva u crtežu: traje koliko i sesija.

## Zadrži sloj ili područje dok radiš tamo

Na velikom crtežu s više ljudi, reci koji je dio tvoj za sada:

1. Ukucaj `LIVEHOLD` i pritisni {{key:Enter}}.
2. Izaberi `L` i ukucaj naziv sloja (Enter zadržava trenutni sloj), ili izaberi `A` i izaberi dva ugla područja.
3. Tuđe izmjene na tom sloju, ili na objektima u tom području, vraćaju se nazad i obaviješteni su da radiš tamo. Tvoje područje vidiš kao isprekidani okvir; drugi ga vide u tvojoj boji s tvojim imenom, a slojevi koje držiš navedeni su gore lijevo na njihovom crtežu.
4. `LIVEHOLD`, pa `R`, oslobađa sve što držiš. Napuštanje sesije to također oslobađa.

Svako u sesiji može zadržati, uključujući domaćina; zaključavanja domaćina i dalje važe iznad toga. Zadržavanje se nikad ne čuva u datoteci.

## Kad se izmjena vrati nazad

Domaćinova kopija crteža provjerava svaku izmjenu. Neke ne mogu proći, pa ih CadCraft vraća na tvom ekranu i kaže zašto na komandnoj liniji, na primjer:

- neko je obrisao objekat, ili sloj ili blok koji mu treba, neposredno prije tebe;
- neko uređuje taj objekat, ili drži njegov sloj ili područje u kojem se nalazi;
- domaćin ga je zaključao;
- blok koji postavljaš je očišćen, ili sloj koji brišeš još ima objekte na sebi.

## Poništavanje poništava tvoj rad

{{key:Mod+Z}} i {{ui:Poništi}} poništavaju tvoju posljednju komandu, cijelu, i ostavljaju tuđi rad na miru. Kad je neko promijenio istu stvar otad, ništa se ne poništava i komandna linija kaže ko je promijenio. {{key:Mod+Y}} ponavlja.

## Zaključavanja (domaćin)

Domaćin može zaštititi objekte ili cijeli sloj tako da ih niko ne mijenja, uključujući domaćina, dok se ne otključaju:

1. Izaberi objekte, pa ukucaj `LIVELOCK` i pritisni {{key:Enter}}. Ili ukucaj `LIVELOCK` bez izbora i izaberi `L` da zaključaš sloj po nazivu: objekti dodani tom sloju kasnije također su zaključani.
2. Zaključani objekti se crtaju isprekidano s oznakom "Zaključao domaćin" na ekranu svakog.
3. `LIVEUNLOCK` ih otključava na isti način.

Zaključavanja pripadaju sesiji: završavaju se kad ona završi i nikad se ne čuvaju u datoteci.

## Pridruži se s iste datoteke

Ako si otvorio istu datoteku koju je domaćin otvorio (iz dijeljene fascikle ili iste kopije), pridruži se iz svog CadCraft prozora u Studiju: otvori panel {{ui:Korisno}} i koristi {{ui:Pridruži se ovdje}} s domaćinovim kodom. Putuju samo izmjene napravljene otkad je domaćin otvorio datoteku, pa je veliki crtež spreman odmah. Ako je tvoja datoteka drugačija, domaćinov crtež zamjenjuje je na tvom ekranu (tvoja datoteka ostaje kakva jeste). Ovo radi samo dok je tvoj crtež nepromijenjen otkad si ga otvorio.

## Asistenti u živoj sesiji

Asistent povezan s tvojim CadCraft prozorom (vidi pomoć o radu s AI asistentima) pridružuje se sesiji kao vlastiti učesnik, a svima se prikazuje kao "Asistent (preko <tvoje ime>)". Domaćin ga pušta unutra, kao i osobu; asistent domaćina se pridružuje odmah. Njegove izmjene imaju vlastito poništavanje: tvoj {{key:Mod+Z}} poništava tvoj rad, a poništavanje asistenta poništava samo njegov. Napušta sesiju kad ga isključiš ili kad ti odeš, a u sesiji može raditi samo dok ti možeš uređivati.

## Pridruži se iz preglednika

Kolega bez Studija može skenirati sliku pod domaćinovim kodom telefonom, tabletom ili računarom na istoj mreži. CadCraft se otvara u pregledniku, traži tvoje ime na komandnoj liniji i popunjava se domaćinovim crtežom kad te domaćin pusti unutra. Pozivnica može omogućiti da se neko pridruži s druge mreže: domaćin treba mjesto Team Cloud Plan za aplikaciju, svi ostali se pridružuju besplatno, a veza radi samo dok je domaćinova sesija otvorena.

## Mnogo ljudi na jednom crtežu

Svaka izmjena ide svima u sesiji, pa što ima više ljudi, to duže svaka izmjena stiže do svakog od njih, a sporiji laptopi i veze zaostaju prvi. Uobičajena veličina sesije je 20 ljudi; domaćin može dozvoliti više za jednu sesiju (vidi pomoć o zajedničkom radu uživo). Ako crtež postane spor s mnogo ljudi, pomaže manje ljudi, manje njih da uređuje u isto vrijeme, ili bolja veza.

## Kad sesija završi

Samo domaćin spašava crtež. Kad domaćin završi sesiju, svi ostali zadržavaju nespašenu kopiju: spasi je ako je želiš zadržati.

:::note
Ono što je vraćeno nazad crta se preko objekata oko sebe na tvom ekranu dok ponovo ne otvoriš crtež. Šrafure i ispunjeni objekti koji se preklapaju mogu izgledati drugačije nego u domaćinovoj kopiji; crtež je isti.
:::
