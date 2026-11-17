---
title: Atributi bloka
summary: Pogledajte i promenite vrednosti koje nosi referenca bloka, kao broj stavke ili proizvođača, i zadržite ih kada sačuvate kopiju.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, naslovni blok, uređivanje na mestu, uređivač atributa, attdef, definiši atribut, bedit, uređivač blokova, bclose, atribut, atributi, attdef, attrib, oznaka, broj stavke, vrednost, nevidljivo, konstantno, blok, svojstva, spisak, oznaka opreme
from: 34d307c7
---

## Šta su atributi

Atribut je imenovana vrednost koja putuje sa referencom bloka: broj stavke oznake opreme, ime oznake prostorije, protivpožarna klasa vrata. Definicija bloka kaže koje atribute ima (svaki ima **oznaku**, **upit**, **podrazumevanu** vrednost i mesto, veličinu i ugao svog teksta). Svaka referenca bloka nosi sopstvene vrednosti.

Neki atributi su **nevidljivi**: čuvaju podatke, kao proizvođač ili model, ali se nikada ne crtaju. Neki su **konstantni**: isti su za svaku referencu, zadati blokom.

## Odakle dolaze atributi

- Blokovi u DWG i DXF datotekama koje otvorite zadržavaju svoje atribute, sa vrednostima svake reference.
- Blokovi koje uvezete sa {{cmd:INSERT}} i opcijom {{ui:Datoteka}} zadržavaju svoje. Pogledajte [Umetanje iz datoteke ili biblioteke](topic:insert-from-file-and-library).
- Stavke iz biblioteke ulaze kao blokovi sa atributima: vidljiv broj stavke i podaci stavke, nevidljivi.

- Blokove koje sami pravite: prvo definišite atribute sa {{cmd:ATTDEF}} (dole), pa ih izaberite zajedno sa ostalim objektima kada pravite blok.

## Definišite atribute za svoje blokove

1. Nacrtajte linije bloka, na primer oznaku prostorije.
2. Izaberite {{ui:Blokovi}} › {{ui:Više}} › {{ui:Definiši atribut}}, ili ukucajte `ATT` i pritisnite {{key:Enter}}.
3. Istorija prikazuje režime (`Invisible=No Constant=No Preset=No`). Ukucajte `I`, `C` ili `P` da promenite jedan, i pritisnite {{key:Enter}} kada su ispravni. Nevidljive vrednosti se čuvaju, ali se ne crtaju; konstantna ima istu vrednost u svakoj referenci; unapred zadata se ne traži kada umećete blok.
4. Ukucajte oznaku (na primer `ROOM_NO`: velikim slovima, bez razmaka), upit (`Broj prostorije`) i podrazumevanu vrednost (`101`).
5. Kliknite gde ide vrednost, pa zadajte visinu i rotaciju. Oznaka se prikazuje na crtežu.
6. Napravite blok sa {{cmd:BLOCK}}, birajući linije i definicije atributa zajedno. Referenca koja ih zamenjuje dobija podrazumevane vrednosti; svako novo {{cmd:INSERT}} ih traži.

Izabrana definicija atributa prikazuje {{ui:Oznaka}}, {{ui:Upit}}, {{ui:Podrazumevano}} i režime u {{ui:Svojstva}}.

## Promena bloka: uređivač blokova

{{ui:Blokovi}} › {{ui:Više}} › {{ui:Izmeni blok}} ({{cmd:BEDIT}}, `BE`) otvara blok samostalno: ukucajte njegovo ime (ili prvo izaberite referencu). Traka na vrhu kaže koji blok uređujete. Crtajte, brišite i menjajte njegove objekte uobičajenim komandama, i dodajte ili menjajte definicije atributa. Zatim kliknite {{ui:Sačuvaj blok}} (ili ukucajte {{cmd:BCLOSE}} i `S`): svaka referenca prikazuje promenu, a jedan {{key:Mod+Z}} poništava sve. {{ui:Odbaci izmene}} ({{cmd:BCLOSE}}, `D`) ostavlja blok kakav je bio.

Kada dodajete, uklanjate ili menjate definicije atributa, čuvanje takođe usklađuje svaku referencu: vrednosti koje ste uneli se zadržavaju, novi atribut dobija podrazumevanu vrednost, uklonjeni se briše, a svaki atribut se vraća na mesto koje mu definicija određuje. Istorija kaže koliko je referenci ažurirano.

## Uredite naslovni blok na mestu (REFEDIT)

Naslovni blok na listu često je unutar bloka. Da promenite njegove linije ili tekstove bez napuštanja lista:

1. Izaberite naslovni blok, pa {{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi na mestu}} (ili ukucajte {{cmd:REFEDIT}}).
2. Njegov sadržaj postaje obični objekti tamo gde jesu; sve ostalo je zamagljeno i ne može da se menja.
3. Menjajte, brišite ili crtajte: novi objekti postaju deo bloka.
4. Kliknite {{ui:Sačuvaj blok}} u traci na vrhu (ili ukucajte {{cmd:REFCLOSE}} i `S`). Svaka referenca prikazuje promenu, a jedan {{key:Mod+Z}} poništava celu izmenu. {{ui:Odbaci}} ostavlja blok kakav je bio.

Povezani crtež, dinamički blok ili referenca skalirana drugačije po širini i visini ne mogu da se uređuju na mestu: koristite {{cmd:BEDIT}} (ili otvorite povezani crtež).

:::note
Sačuvajte ili odbacite u uređivaču blokova pre nego što sačuvate crtež: datoteka sačuvana dok je uređivač otvoren ima blok kakav je bio pre toga.
:::

## Popunite ih kada postavljate blok

1. Ukucajte `I` i pritisnite {{key:Enter}}, ukucajte ime bloka i pritisnite {{key:Enter}}.
2. Kliknite gde ide.
3. CadCraft traži svaku vrednost, na primer `Unesite broj stavke (ITEM) <>`. Ukucajte vrednost i pritisnite {{key:Enter}}, ili pritisnite {{key:Enter}} da zadržite podrazumevanu koja je prikazana u uglastim zagradama.

Vrednosti koje blok označava kao unapred zadate, i konstantne, se ne traže. Uzimaju svoju podrazumevanu vrednost.

## Pogledajte i promenite vrednosti

1. Kliknite referencu bloka.
2. U desnom panelu, pod {{ui:Atributi}}, svaka oznaka ima svoju vrednost. Nevidljive kažu `skriveno`.
3. Kliknite vrednost, ukucajte novu i pritisnite {{key:Enter}}.

Crtež odmah prikazuje novu vrednost. Svaka promena je jedan korak: {{key:Mod+Z}} je poništava.

**Uređivač atributa.** Dvostruki klik na referencu sa atributima (ili {{cmd:EATTEDIT}}): dijalog {{ui:Uredi atribute}} navodi svaku oznaku sa njenim upitom i vrednošću. Unesite nove vrednosti; kliknite red da promenite {{ui:Visina}}, {{ui:Rotiranje}}, {{ui:Faktor širine}}, {{ui:Poravnaj}}, {{ui:Sloj}}, {{ui:Boja}} i {{ui:Nevidljivo}} za taj atribut, samo za ovu referencu. {{ui:Primeni}} ostavlja dijalog otvoren; {{ui:U redu}} primenjuje i zatvara. Svako {{ui:Primeni}} ili {{ui:U redu}} je jedan korak poništavanja.

**U komandnoj liniji**, {{cmd:ATTEDIT}} pita svaku vrednost redom: ukucajte novu, ili pritisnite {{key:Enter}} da zadržite staru.

## Promena definicija atributa (BATTMAN, ATTSYNC)

{{ui:Blokovi}} › {{ui:Više}} › {{ui:Upravljanje atributima}} ({{cmd:BATTMAN}}) navodi atribute bloka: promenite oznaku, upit ili podrazumevanu vrednost, označite {{ui:Nevidljivo}}, {{ui:Konstantno}} ili {{ui:Unapred zadato}}, i pomerite ih gore ili dole (redosled kojim se vrednosti traže). Sa označenim {{ui:Ažuriraj reference (vrednosti se čuvaju)}}, {{ui:Primeni}} takođe usklađuje svaku referencu; preimenovana oznaka zadržava svoje vrednosti. Svako {{ui:Primeni}} je jedan korak poništavanja.

{{cmd:ATTSYNC}} ručno usklađuje reference s definicijama njihovog bloka: `S` bira referencu, `N` imenuje blok, `A` obrađuje sve blokove. Vrednosti se zadržavaju.

Vrednosti polja stavke iz biblioteke (njen ID, verzija, licenca i navođenje autora) prikazuju se, ali ne mogu da se menjaju, da bi provera ažuriranja i dalje radila. Broj stavke i količina su vaši da ih menjate.

## Izlistajte ih

Izaberite reference i ukucajte `LI` (za {{cmd:LIST}}). Istorija prikazuje svaki atribut kao `OZNAKA = vrednost`, uz `(nevidljivo)` ili `(konstantno)` gde to važi.

## Pomeranje, okretanje i razbijanje

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} i {{cmd:MIRROR}} zadržavaju vrednosti; tekst se pomera s blokom i ostaje čitljiv.
- {{cmd:EXPLODE}} pretvara vidljive atribute u običan tekst sa njihovim vrednostima. Nevidljivi se odbacuju.

## Čuvanje

Sačuvana DWG i sačuvana DXF datoteka zadržavaju svaki atribut: definicije svakog bloka (i nevidljive, konstantne i unapred zadate) i vrednosti svake reference. Drugi CAD programi ih čitaju kao obične atribute bloka.

U DXF R12, vrednost duža od 255 znakova se seče na 255, i istorija to kaže.

## Česte greške

- **Vrednost ne prikazuje se na crtežu.** Nevidljiva je, ili je prazna. Nevidljive vrednosti se i dalje prikazuju u desnom panelu.
- **Vrednost koju sam ukucao otišla je u komandnu liniju.** Prvo kliknite u polje vrednosti u desnom panelu.
