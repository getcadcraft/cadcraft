---
title: Atributi blokova
summary: Pogledajte i promijenite vrijednosti koje referenca bloka nosi, poput broja stavke ili proizvođača, i zadržite ih kad snimite kopiju.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, naslovni blok, title block, uredi na mjestu, edit in place, uređivač atributa, attribute editor, attdef, definiši atribut, define attribute, bedit, uređivač blokova, block editor, bclose, atribut, atributi, attributes, attrib, oznaka, tag, broj stavke, item number, vrijednost, value, nevidljivo, invisible, konstantno, constant, blok, properties, svojstva, popis, list, oznaka opreme, equipment tag
from: 34d307c7
---

## Šta su atributi

Atribut je imenovana vrijednost koja putuje s referencom bloka: broj stavke oznake opreme, naziv oznake sobe, protupožarna klasa vrata. Definicija bloka kaže koje atribute ima (svaki ima **oznaku**, **upit**, **zadanu** vrijednost i mjesto, veličinu i ugao svog teksta). Svaka referenca bloka nosi svoje vrijednosti.

Neki atributi su **nevidljivi**: čuvaju podatke, kao proizvođač ili broj modela, ali se nikad ne crtaju. Neki su **konstantni**: isti su za svaku referencu, određeni blokom.

## Odakle dolaze atributi

- Blokovi u DWG i DXF datotekama koje otvorite čuvaju svoje atribute, sa vrijednostima svake reference.
- Blokovi koje uvedete komandom {{cmd:INSERT}} i opcijom {{ui:File}} zadržavaju svoje. Pogledajte [Umetanje iz datoteke ili biblioteke](topic:insert-from-file-and-library).
- Stavke iz biblioteke ulaze kao blokovi sa atributima: vidljivi broj stavke i podaci stavke, nevidljivi.

- Blokove koje sami pravite: prvo definišite atribute sa {{cmd:ATTDEF}} (dolje), pa ih odaberite zajedno s ostalim objektima kad pravite blok.

## Definisanje atributa za vlastite blokove

1. Nacrtajte linije bloka, na primjer oznaku sobe.
2. Izaberite {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}, ili upišite `ATT` i pritisnite {{key:Enter}}.
3. Historija prikazuje režime (`Invisible=No Constant=No Preset=No`). Upišite `I`, `C` ili `P` da promijenite jedan, i pritisnite {{key:Enter}} kad su ispravni. Nevidljive vrijednosti se čuvaju, ali se ne crtaju; konstantna ima istu vrijednost u svakoj referenci; unaprijed zadana se ne traži pri umetanju bloka.
4. Upišite oznaku (na primjer `ROOM_NO`: velikim slovima, bez razmaka), upit (`Broj sobe`) i zadanu vrijednost (`101`).
5. Kliknite gdje ide vrijednost, pa upišite visinu i rotaciju. Oznaka se prikazuje na crtežu.
6. Napravite blok sa {{cmd:BLOCK}}, odabirom linija i definicija atributa zajedno. Referenca koja ih zamjenjuje dobija zadane vrijednosti; svaki novi {{cmd:INSERT}} ih traži.

Odabrana definicija atributa prikazuje {{ui:Tag}}, {{ui:Prompt}}, {{ui:Default}} i režime u {{ui:Properties}}.

## Promjena bloka: uređivač blokova

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}} ({{cmd:BEDIT}}, `BE`) otvara blok samostalno: upišite njegov naziv (ili prvo odaberite referencu). Traka na vrhu kaže koji blok uređujete. Crtajte, brišite i mijenjajte njegove objekte uobičajenim komandama, te dodajte ili mijenjajte definicije atributa. Zatim kliknite {{ui:Save block}} (ili upišite {{cmd:BCLOSE}} i `S`): svaka referenca prikazuje promjenu, a jedno {{key:Mod+Z}} poništava sve. {{ui:Discard changes}} ({{cmd:BCLOSE}}, `D`) ostavlja blok kakav je bio.

Kad dodate, uklonite ili promijenite definicije atributa, snimanje također dovodi svaku referencu u red: vrijednosti koje ste upisali se zadržavaju, novi atribut dobija zadanu vrijednost, uklonjeni nestaje, a svaki atribut se vraća tamo gdje ga definicija stavlja. Historija kaže koliko je referenci ažurirano.

## Uređivanje naslovnog bloka na mjestu (REFEDIT)

Naslovni blok na listu često se nalazi unutar bloka. Da promijenite njegove linije ili tekstove bez napuštanja lista:

1. Odaberite naslovni blok, pa {{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}} (ili upišite {{cmd:REFEDIT}}).
2. Njegov sadržaj postaje obični objekti tamo gdje jesu; sve ostalo je zatamnjeno i ne može se mijenjati.
3. Mijenjajte, brišite ili crtajte: novi objekti postaju dio bloka.
4. Kliknite {{ui:Spasi blok}} u traci na vrhu (ili upišite {{cmd:REFCLOSE}} i `S`). Svaka referenca prikazuje promjenu, a jedno {{key:Mod+Z}} poništava cijelu izmjenu. {{ui:Discard}} ostavlja blok kakav je bio.

Povezani crtež, dinamički blok ili referenca skalirana različito po širini i visini ne mogu se uređivati na mjestu: koristite {{cmd:BEDIT}} (ili otvorite povezani crtež).

:::note
Snimite ili odbacite u uređivaču blokova prije nego snimite crtež: datoteka snimljena dok je uređivač otvoren ima blok kakav je bio prije.
:::

## Popunjavanje pri postavljanju bloka

1. Upišite `I` i pritisnite {{key:Enter}}, upišite naziv bloka i pritisnite {{key:Enter}}.
2. Kliknite gdje ide.
3. CadCraft traži svaku vrijednost, na primjer `Unesi broj stavke (ITEM) <>`. Upišite vrijednost i pritisnite {{key:Enter}}, ili pritisnite {{key:Enter}} da zadržite zadanu vrijednost prikazanu u uglastim zagradama.

Vrijednosti koje blok označava kao unaprijed zadane, kao i konstantne, se ne traže. Uzimaju svoju zadanu vrijednost.

## Pregled i promjena vrijednosti

1. Kliknite referencu bloka.
2. U desnom panelu, pod {{ui:Attributes}}, svaka oznaka ima svoju vrijednost. Nevidljive kažu `hidden`.
3. Kliknite vrijednost, upišite novu i pritisnite {{key:Enter}}.

Crtež odmah prikazuje novu vrijednost. Svaka promjena je jedan korak: {{key:Mod+Z}} je poništava.

**Uređivač atributa.** Dvostruki klik na referencu sa atributima (ili {{cmd:EATTEDIT}}): dijalog {{ui:Edit attributes}} navodi svaku oznaku sa njenim upitom i vrijednošću. Upišite nove vrijednosti; kliknite red da promijenite {{ui:Height}}, {{ui:Rotation}}, {{ui:Width factor}}, {{ui:Justify}}, {{ui:Layer}}, {{ui:Color}} i {{ui:Invisible}} tog atributa samo za ovu referencu. {{ui:Apply}} ostavlja dijalog otvoren; {{ui:OK}} primjenjuje i zatvara. Svako {{ui:Apply}} ili {{ui:OK}} je jedan korak poništavanja.

**U komandnoj liniji**, {{cmd:ATTEDIT}} traži svaku vrijednost redom: upišite novu ili pritisnite {{key:Enter}} da je zadržite.

## Promjena definicija atributa (BATTMAN, ATTSYNC)

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}} ({{cmd:BATTMAN}}) navodi atribute bloka: mijenjate oznaku, upit ili zadanu vrijednost, označite {{ui:Invisible}}, {{ui:Constant}} ili {{ui:Preset}}, te ih pomjerate gore ili dolje (redoslijed kojim se traže vrijednosti). Kad je označeno {{ui:Update the references (values kept)}}, {{ui:Apply}} također dovodi svaku referencu u red; preimenovana oznaka zadržava svoje vrijednosti. Svako {{ui:Apply}} je jedan korak poništavanja.

{{cmd:ATTSYNC}} ručno dovodi reference u red sa definicijama njihovog bloka: `S` bira referencu, `N` imenuje blok, `A` obrađuje svaki blok. Vrijednosti se zadržavaju.

Vrijednosti vlastitih polja stavke iz biblioteke (njen ID, verzija, licenca i navođenje autora) se prikazuju, ali se ne mogu uređivati, kako bi provjera ažuriranja i dalje radila. Njen broj stavke i količina su vaši za promjenu.

## Popis atributa

Odaberite reference i upišite `LI` (za {{cmd:LIST}}). Historija prikazuje svaki atribut kao `TAG = value`, sa `(invisible)` ili `(constant)` gdje to važi.

## Pomjeranje, okretanje i razbijanje

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} i {{cmd:MIRROR}} zadržavaju vrijednosti; tekst se pomjera s blokom i ostaje čitljiv.
- {{cmd:EXPLODE}} pretvara vidljive atribute u običan tekst sa njihovim vrijednostima. Nevidljivi se odbacuju.

## Snimanje

Snimljeni DWG i snimljeni DXF čuvaju svaki atribut: definicije svakog bloka (i nevidljive, konstantne i unaprijed zadane) i vrijednosti svake reference. Drugi CAD programi ih čitaju kao obične atribute bloka.

U DXF R12, vrijednost duža od 255 znakova se skraćuje na 255, a historija to kaže.

## Česte greške

- **Vrijednost se ne prikazuje na crtežu.** Nevidljiva je, ili je prazna. Nevidljive vrijednosti se i dalje prikazuju u desnom panelu.
- **Vrijednost koju sam upisao otišla je u komandnu liniju.** Prvo kliknite u kutiju vrijednosti u desnom panelu.
