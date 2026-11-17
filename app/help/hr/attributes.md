---
title: Atributi bloka
summary: Pogledajte i promijenite vrijednosti koje referenca bloka nosi, poput broja stavke ili proizvođača, i zadržite ih kad spremite kopiju.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, naslovni blok, uređivanje na mjestu, uređivač atributa, attdef, definiraj atribut, bedit, uređivač blokova, bclose, atribut, atributi, attrib, oznaka, broj stavke, vrijednost, nevidljivo, konstantno, blok, svojstva, popis, oznaka opreme
from: 34d307c7
---

## Što su atributi

Atribut je imenovana vrijednost koja putuje s referencom bloka: broj stavke oznake opreme, naziv oznake prostorije, protupožarna klasa vrata. Definicija bloka kaže koje atribute ima (svaki ima **oznaku**, **upit**, **zadano** i mjesto, veličinu i kut svog teksta). Svaka referenca bloka nosi vlastite vrijednosti.

Neki atributi su **nevidljivi**: čuvaju podatke, poput proizvođača ili broja modela, ali se nikad ne crtaju. Neki su **konstantni**: isti su za svaku referencu, a određuje ih blok.

## Odakle dolaze atributi

- Blokovi u DWG i DXF datotekama koje otvorite zadržavaju svoje atribute, s vrijednostima svake reference.
- Blokovi koje uvezete s {{cmd:INSERT}} i opcijom {{ui:Datoteka}} zadržavaju svoje. Vidi [Umetanje iz datoteke ili knjižnice](topic:insert-from-file-and-library).

- Stavke knjižnice dolaze kao blokovi s atributima: vidljivi broj stavke i podaci stavke, nevidljivi.

- Blokove koje sami izradite: prvo definirajte atribute s {{cmd:ATTDEF}} (u nastavku), zatim ih odaberite s ostalim objektima kad izrađujete blok.

## Definirajte atribute za vlastite blokove

1. Nacrtajte linije bloka, npr. oznaku prostorije.
2. Odaberite {{ui:Blokovi}} › {{ui:Više}} › {{ui:Definiraj atribut}}, ili upišite `ATT` i pritisnite {{key:Enter}}.
3. Povijest prikazuje načine (`Invisible=No Constant=No Preset=No`). Upišite `I`, `C` ili `P` da prebacite jedan, i pritisnite {{key:Enter}} kad su ispravni. Nevidljive vrijednosti se čuvaju, ali se ne crtaju; konstantna ima istu vrijednost u svakoj referenci; unaprijed postavljena se ne pita kad umećete blok.
4. Upišite oznaku (npr. `ROOM_NO`: velika slova, bez razmaka), upit (`Broj prostorije`) i zadanu vrijednost (`101`).
5. Kliknite gdje ide vrijednost, i zadajte visinu i rotaciju. Oznaka se prikazuje na crtežu.
6. Izradite blok s {{cmd:BLOCK}}, odabirom linija i definicija atributa zajedno. Referenca koja ih zamjenjuje dobiva zadane vrijednosti; svaki novi {{cmd:INSERT}} ih traži.

Odabrana definicija atributa prikazuje {{ui:Oznaka}}, {{ui:Upit}}, {{ui:Zadano}} i načine u {{ui:Svojstva}}.

## Promijenite blok: uređivač blokova

{{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi blok}} ({{cmd:BEDIT}}, `BE`) otvara blok zasebno: upišite njegov naziv (ili prvo odaberite referencu). Traka na vrhu kaže koji blok uređujete. Crtajte, brišite i mijenjajte njegove objekte uobičajenim naredbama te dodajte ili mijenjajte definicije atributa. Zatim kliknite {{ui:Spremi blok}} (ili upišite {{cmd:BCLOSE}} i `S`): svaka referenca prikazuje promjenu, a jedan {{key:Mod+Z}} poništava sve. {{ui:Odbaci promjene}} ({{cmd:BCLOSE}}, `D`) ostavlja blok kakav je bio.

Kad dodate, uklonite ili promijenite definicije atributa, spremanje također usklađuje svaku referencu: vrijednosti koje ste upisali se zadržavaju, novi atribut dobiva zadanu vrijednost, uklonjeni nestaje, a svaki atribut se vraća tamo gdje ga definicija postavlja. Povijest kaže koliko je referenci ažurirano.

## Uredite naslovni blok na mjestu (REFEDIT)

Naslovni blok na listu često je unutar bloka. Da promijenite njegove linije ili tekstove bez napuštanja lista:

1. Odaberite naslovni blok, zatim {{ui:Blokovi}} › {{ui:Više}} › {{ui:Uredi na mjestu}} (ili upišite {{cmd:REFEDIT}}).
2. Njegov sadržaj postaje obični objekti na mjestu; sve ostalo je zamagljeno i ne može se mijenjati.
3. Mijenjajte, brišite ili crtajte: novi objekti postaju dio bloka.
4. Kliknite {{ui:Spremi blok}} u traci na vrhu (ili upišite {{cmd:REFCLOSE}} i `S`). Svaka referenca prikazuje promjenu, a jedan {{key:Mod+Z}} poništava cijelo uređivanje. {{ui:Odbaci}} ostavlja blok kakav je bio.

Vanjska referenca (Xref), dinamički blok ili referenca skalirana različito po širini i visini ne mogu se uređivati na mjestu: koristite {{cmd:BEDIT}} (ili otvorite vanjski crtež).

:::note
Spremite ili odbacite u uređivaču blokova prije nego spremite crtež: datoteka spremljena dok je uređivač otvoren ima blok kakav je bio prije.
:::

## Ispunite ih kad postavljate blok

1. Upišite `I` i pritisnite {{key:Enter}}, upišite naziv bloka i pritisnite {{key:Enter}}.
2. Kliknite gdje ide.
3. CadCraft pita za svaku vrijednost, npr. `Unesite broj stavke (ITEM) <>`. Upišite vrijednost i pritisnite {{key:Enter}}, ili pritisnite {{key:Enter}} da zadržite zadanu u kutnim zagradama.

Vrijednosti koje blok označava kao unaprijed postavljene, i konstantne, se ne pitaju. Uzimaju svoju zadanu vrijednost.

## Pogledajte i promijenite vrijednosti

1. Kliknite referencu bloka.
2. U desnom panelu, pod {{ui:Atributi}}, svaka oznaka ima svoju vrijednost. Nevidljive kažu `skriveno`.
3. Kliknite vrijednost, upišite novu i pritisnite {{key:Enter}}.

Crtež odmah prikazuje novu vrijednost. Svaka promjena je jedan korak: {{key:Mod+Z}} je poništava.

**Uređivač atributa.** Dvostruki klik na referencu s atributima (ili {{cmd:EATTEDIT}}): dijaloški okvir {{ui:Uredi atribute}} popisuje svaku oznaku s upitom i vrijednošću. Upišite nove vrijednosti; kliknite redak da promijenite {{ui:Visina}}, {{ui:Rotacija}}, {{ui:Faktor širine}}, {{ui:Poravnanje}}, {{ui:Sloj}}, {{ui:Boja}} i {{ui:Nevidljivo}} tog atributa, samo za ovu referencu. {{ui:Primijeni}} ostavlja dijaloški okvir otvorenim; {{ui:U redu}} primjenjuje i zatvara. Svaki {{ui:Primijeni}} ili {{ui:U redu}} je jedan korak poništavanja.

**Na redu naredbi**, {{cmd:ATTEDIT}} pita svaku vrijednost redom: upišite novu ili pritisnite {{key:Enter}} da je zadržite.

## Promijenite definicije atributa (BATTMAN, ATTSYNC)

{{ui:Blokovi}} › {{ui:Više}} › {{ui:Upravitelj atributa}} ({{cmd:BATTMAN}}) popisuje atribute bloka: mijenjate oznaku, upit ili zadanu vrijednost, označavate {{ui:Nevidljivo}}, {{ui:Konstantno}} ili {{ui:Unaprijed postavljeno}}, i pomičete ih gore ili dolje (redoslijed kojim se vrijednosti traže). S označenim {{ui:Ažuriraj reference (vrijednosti zadržane)}}, {{ui:Primijeni}} također usklađuje svaku referencu; preimenovana oznaka zadržava svoje vrijednosti. Svaki {{ui:Primijeni}} je jedan korak poništavanja.

{{cmd:ATTSYNC}} ručno usklađuje reference s definicijama njihovih blokova: `S` odabire referencu, `N` imenuje blok, `A` obrađuje svaki blok. Vrijednosti se zadržavaju.

Vrijednosti polja stavke knjižnice (njezin id, verzija, licenca i navođenje autora) prikazuju se, ali se ne mogu uređivati, kako bi provjera ažuriranja i dalje radila. Njezin broj stavke i količina su vaši za promjenu.

## Popišite ih

Odaberite reference i upišite `LI` (za {{cmd:LIST}}). Povijest prikazuje svaki atribut kao `TAG = vrijednost`, uz `(nevidljivo)` ili `(konstantno)` gdje to vrijedi.

## Pomicanje, zakretanje i rastavljanje

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} i {{cmd:MIRROR}} zadržavaju vrijednosti; tekst se pomiče s blokom i ostaje čitljiv.
- {{cmd:EXPLODE}} vidljive atribute pretvara u običan tekst s njihovim vrijednostima. Nevidljivi se odbacuju.

## Spremanje

Spremljeni DWG i spremljeni DXF čuvaju svaki atribut: definicije svakog bloka (i nevidljive, konstantne i unaprijed postavljene) i vrijednosti svake reference. Drugi CAD programi ih čitaju kao obične atribute bloka.

U DXF R12 vrijednost duža od 255 znakova skraćuje se na 255, a povijest to kaže.

## Česte pogreške

- **Vrijednost ne prikazuje na crtežu.** Nevidljiva je ili prazna. Nevidljive vrijednosti se i dalje prikazuju u desnom panelu.
- **Vrijednost koju sam upisao otišla je u redak naredbi.** Najprije kliknite u okvir vrijednosti u desnom panelu.
