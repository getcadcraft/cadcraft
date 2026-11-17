---
title: Izbornici, tipke i miš
summary: Odaberite stil izbornika koji odgovara načinu na koji već radite, dodijelite bilo kojoj naredbi vlastitu tipku ili tipku koja upisuje naredbu, premjestite naredbe između kartica vrpce te postavite što rade kotačić i gumbi miša.
keywords: stil izbornika, izbornici, vrpca, alatna traka, naredbeni redak, tipkovnički prečaci, prečaci, tipke, prilagodba, ponovna dodjela, tekstualne tipke, miš, kotačić, invertiraj, smjer zumiranja, srednji gumb, desni gumb, pomicanje, izvoz, uvoz, prebacivanje, poznato, klasično crtanje
from: 8bbf4f88
---

Naredbe CadCrafta iste su bez obzira kako do njih dođete, a naredbeni redak uvijek je tu sa svojim aliasima (`L`, `C`, `TR` …). **Stil izbornika** samo određuje gdje su gumbi na zaslonu, kako se tamo zovu i kojim tipkama se pokreću. Odaberite ga u {{ui:Postavke}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Izbornici, tipke i miš}}; promjena je odmah vidljiva, a ovaj preglednik je pamti.

## Tri stila

| Stil | Što dobivate |
|---|---|
| {{ui:CadCraft}} | Vlastita alatna traka CadCrafta: Datoteka, Crtanje, Izmjena, Bilješke, Parametarski, Blokovi, Listovi, Uređivanje i Pogled, svaki s izbornikom {{ui:Više}}. Početno. |
| {{ui:Klasično crtanje}} | Vrpca raspoređena kao kod klasičnih 2D programa za crtanje: izbornik {{ui:Datoteka}} i brzi gumbi, zatim kartice {{ui:Početna}} (Crtanje, Izmjena, Bilješke, Slojevi, Blok, Svojstva, Uslužni programi, Međuspremnik), {{ui:Umetni}}, {{ui:Bilješke}}, {{ui:Parametarski}}, {{ui:Pogled}}, {{ui:Upravljanje}}, {{ui:Izlaz}} i {{ui:3D}}. Naredbe i dalje upisujte. Srednji gumb pomiče prikaz; desni klik je {{key:Enter}}, a povlačenje desnim gumbom ne radi ništa. |
| {{ui:Vrpca}} | Vrpca s jednostavnim karticama za zadatke: {{ui:Crtanje}}, {{ui:Izmjena}}, {{ui:Bilješke}}, {{ui:Parametarski}}, {{ui:Blokovi}}, {{ui:Listovi}}, {{ui:Pogled}}, {{ui:3D}} i {{ui:Alati}}, s izbornikom {{ui:Datoteka}} i brzim gumbima desno. Srednji i desni gumb pomiču prikaz, kao u CadCraftovom vlastitom stilu. |

Svaki stil zadržava CadCraftove tipke: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, i {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} za pomoćna sredstva crtanja. Slova nikad nisu tipke: CadCraft ih upisuje u naredbeni redak.

Vrpce također sadrže alate ploče Slojevi i pomoćna sredstva crtanja iz statusne trake. Kartica {{ui:3D}} popunjava se kad se otvori 3D kartica ispod crteža; 3D alat odabran na kartici Model prvo otvara 3D karticu, a 2D alat odabran na 3D kartici prvo vraća na karticu Model.

:::tip
Tipka koja pripada CadCraftovu vlastitom rasporedu, ali ju je vaš stil dodijelio drugoj naredbi, ne radi ništa, a statusna traka kaže kamo je otišla njezina naredba („U Mojim tipkama, Ortogonalno je Ctrl+Alt+O“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvijek zadržavaju svoje značenje. Dok se naredba izvodi ili dok se slova upisuju u naredbeni redak, tipke pripadaju naredbenom retku.
:::

## Prilagodite po svojoj mjeri

1. Odaberite stil koji je najbliži onome što želite, zatim kliknite {{ui:Prilagodi…}}.
2. Na {{ui:Tipke i izbornici}} pronađite naredbu (pomaže polje za pretragu). Kliknite {{ui:Dodaj tipku}} i pritisnite tipku. Kliknite tipku da je uklonite.
3. Uz vrpcu, {{ui:Gdje se nalazi}} premješta naredbu na drugu karticu i grupu, u izbornik {{ui:Datoteka}} ili na {{ui:Samo tipke}}.
4. Na {{ui:Miš}} postavite kotačić i gumbe koji pomiču prikaz crteža.
5. Dajte mu naziv i kliknite {{ui:Spremi}}.

Spremanje ugrađenog stila stvara vašu vlastitu kopiju („Moje klasično crtanje“); ugrađeni se nikad ne mijenja. Tipka dodijeljena dvjema naredbama prikazuje se crveno i mora se ispraviti prije spremanja.

## Tipke koje upisuju naredbu

{{cmd:SHORTCUTS}} ({{ui:Pogled}} › {{ui:Više}} › {{ui:Tipkovnički prečaci…}}) daje tipki cijeli naredbeni redak, na primjer {{key:Ctrl+Alt+L}} za `LINE` ili {{key:F9}} za `ZOOM E`. Ove tipke pripadaju stilu koji se koristi: kad se ova verzija prvi put otvori, tipke koje ste napravili u starijoj verziji prenose se jednom u vaš vlastiti stil „Moje CadCraft tipke“ i rade kao i prije. Izvoz stila ih uključuje.

## Miš

- **Kotačić miša**: {{ui:Pomicanje prema gore približava}} (početno) ili {{ui:Pomicanje prema gore udaljava}}, i koliko brzo. Štipanje na touchpadu uvijek zumira u smjeru kretanja prstiju.
- **Pomicanje crteža pomoću**: srednjeg gumba, desnog gumba ili oba. Klik desnim gumbom bez povlačenja uvijek je {{key:Enter}}. Lijevi gumb uvijek bira i crta u CadCraftu, pa njegovo označavanje ovdje ne mijenja ništa.
- **Povlačenje u 3D prikazima**: 3D kartica zadržava vlastite gumbe u svakom stilu (lijevi okreće, srednji i desni pomiču).

## Ponesite ga sa sobom

{{ui:Izvezi}} sprema stil koji se koristi kao malu datoteku `.ccinput.json`; {{ui:Uvezi…}} dodaje jednu, s drugog računala ili od kolege. Uvezena datoteka može upućivati samo na CadCraftove vlastite naredbe: sve drugo u njoj izostavlja se i broji u statusnoj traci. {{ui:Izbriši ovaj stil}} uklanja jedan od vaših.

:::note
Ove postavke ostaju u ovom pregledniku. {{ui:Koristi ovaj stil u svakoj aplikaciji}} ispod kartica stilova čini da se svaka aplikacija otvara u odgovarajućem stilu (vlastita alatna traka, vrpca ili Klasično crtanje), s promjenama koje ste napravili u svakoj aplikaciji. CadCraft nema stil trake izbornika: kad se traka izbornika neke druge aplikacije odabere za svaku aplikaciju, CadCraft zadržava vlastitu alatnu traku.
:::

Povezano: [Tipkovnica i miš](topic:keyboard) · [Postavke CadCrafta](topic:settings) · [Prelazak s drugih programa za crtanje](topic:coming-from) · [Aliasi naredbi](topic:command-aliases)
