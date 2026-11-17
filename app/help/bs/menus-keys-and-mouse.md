---
title: Meniji, tipke i miš
summary: Izaberi stil menija koji odgovara načinu na koji već radiš, daj bilo kojoj naredbi svoju tipku ili tipku koja ukucava naredbu, premjesti naredbe između kartica trake i postavi šta točkić i dugmad miša rade.
keywords: stil menija, meniji, traka, traka alata, komandna linija, prečice tastature, prečice, tipke, prilagodi, preslikaj, ponovo dodijeli, tekstualne tipke, miš, točkić, obrni, smjer zumiranja, srednje dugme, desno dugme, pomjeri pogled, izvezi, uvezi, prebacivanje, poznato, klasični nacrt
from: 8bbf4f88
---

Naredbe CadCrafta su iste bez obzira na to kako ih pozoveš, a komandna linija je uvijek tu, sa svojim aliasima (`L`, `C`, `TR` …). **Stil menija** samo odlučuje gdje se dugmad nalaze na ekranu, kako se zovu i koje tipke ih pokreću. Izaberi ga u {{ui:Postavke}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Meniji, tipke i miš}}; promjena je odmah, a ovaj preglednik je pamti.

## Tri stila

| Stil | Šta dobijaš |
|---|---|
| {{ui:CadCraft}} | CadCraftova vlastita traka alata: Datoteka, Crtanje, Izmjena, Anotacije, Parametarski, Blokovi, Listovi, Uređivanje i Pogled, svaki sa menijem {{ui:Više}}. Početak. |
| {{ui:Klasični nacrt}} | Traka raspoređena kao kod klasičnih 2D programa za crtanje: meni {{ui:Datoteka}} i brza dugmad, zatim kartice {{ui:Početna}} (Crtanje, Izmjena, Anotacije, Slojevi, Blok, Svojstva, Pomoćne, Međuspremnik), {{ui:Umetni}}, {{ui:Anotacije}}, {{ui:Parametarski}}, {{ui:Pogled}}, {{ui:Upravljanje}}, {{ui:Izlaz}} i {{ui:3D}}. Naredbe kucaj kao i uvijek. Srednje dugme pomjera pogled; desni klik je {{key:Enter}}, a prevlačenje desnim dugmetom ne radi ništa. |
| {{ui:Traka}} | Traka običnih kartica zadataka: {{ui:Crtanje}}, {{ui:Izmjena}}, {{ui:Anotacije}}, {{ui:Parametarski}}, {{ui:Blokovi}}, {{ui:Listovi}}, {{ui:Pogled}}, {{ui:3D}} i {{ui:Alati}}, sa menijem {{ui:Datoteka}} i brzim dugmadima desno. Srednje i desno dugme pomjeraju pogled, kao u CadCraftovom vlastitom stilu. |

Svaki stil zadržava CadCraftove tipke: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, i {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} za pomoćne alate crtanja. Slova nikada nisu tipke: CadCraft ih upisuje u komandnu liniju.

Trake također sadrže alate panela Slojevi i pomoćne alate crtanja sa statusne trake. Kartica {{ui:3D}} se popunjava kada se otvori 3D kartica ispod crteža; 3D alat izabran na kartici Model prvo otvara 3D karticu, a 2D alat izabran na 3D kartici prvo vraća na karticu Model.

:::tip
Tipka koja pripada CadCraftovom vlastitom rasporedu, ali ju je tvoj stil dodijelio drugoj naredbi, ne radi ništa, a statusna traka kaže gdje je njena naredba otišla ("U Mojim tipkama, Ortho je Ctrl+Alt+O"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvijek zadržavaju svoje značenje. Dok naredba radi ili dok se slova kucaju u komandnoj liniji, tipke pripadaju komandnoj liniji.
:::

## Napravi po svom

1. Izaberi stil koji je najbliži onome što želiš, zatim klikni {{ui:Prilagodi…}}.
2. Na {{ui:Tipke i meniji}} nađi naredbu (pretraga pomaže). Klikni {{ui:Dodaj ključ}} i pritisni tipku. Klikni tipku da je skineš.
3. Uz traku, {{ui:Gdje stoji}} premješta naredbu na drugu karticu i panel, u meni {{ui:Datoteka}}, ili na {{ui:Samo tipke}}.
4. Na {{ui:Miš}} postavi točkić i dugmad koja pomjeraju crtež.
5. Daj mu naziv i klikni {{ui:Spasi}}.

Snimanje ugrađenog stila pravi tvoju kopiju ("Moj klasični nacrt"); ugrađeni se nikada ne mijenja. Tipka dodijeljena dvjema naredbama prikazuje se crveno i mora se ispraviti prije snimanja.

## Tipke koje ukucavaju naredbu

{{cmd:SHORTCUTS}} (Pogled › Više › {{ui:Tipkovni prečaci…}}) daje tipki cijelu liniju naredbe, kao {{key:Ctrl+Alt+L}} za `LINE` ili {{key:F9}} za `ZOOM E`. Ove tipke pripadaju stilu koji je u upotrebi: prvi put kada se ova verzija otvori, tipke koje si napravio u starijoj verziji prenose se u tvoj stil "Moje CadCraft tipke", jednom, i rade kao ranije. Izvoz stila ih nosi sa sobom.

## Miš

- **Točkić miša**: {{ui:Skrolanje prema gore zumira unutra}} (početno) ili {{ui:Skrolanje prema gore zumira van}}, i koliko brzo. Štipanje na touchpadu uvijek zumira u smjeru kojim se pomjeraju prsti.
- **Pomjeranje crteža pomoću**: srednjeg dugmeta, desnog dugmeta ili oba. Desni klik bez prevlačenja je uvijek {{key:Enter}}. Lijevo dugme uvijek bira i crta u CadCraftu, pa njegovo označavanje ovdje ništa ne mijenja.
- **Prevlačenje u 3D prikazima**: 3D kartica zadržava svoja dugmad u svakom stilu (lijevo rotira, srednje i desno pomjeraju).

## Ponesi sa sobom

{{ui:Izvezi}} snima stil koji je u upotrebi kao mali `.ccinput.json` datoteku; {{ui:Uvezi…}} dodaje jednu, sa drugog računara ili od kolege. Uvezena datoteka može pokazivati samo na CadCraftove vlastite naredbe: sve drugo se izostavlja i broji u statusnoj traci. {{ui:Izbriši ovaj stil}} uklanja jedan od tvojih.

:::note
Ova podešavanja ostaju u ovom pregledniku. {{ui:Koristi ovaj stil u svakoj aplikaciji}} ispod kartica stila čini da se svaka aplikacija otvara u svom odgovarajućem stilu (sopstvena traka alata, traka ili Klasični nacrt), sa promjenama koje si napravio u svakoj aplikaciji. CadCraft nema stil sa menijskom trakom: kada je meni druge aplikacije izabran za sve aplikacije, CadCraft zadržava svoju traku alata.
:::

Srodno: [Tastatura i miš](topic:keyboard) · [Postavke CadCrafta](topic:settings) · [Prelazak sa drugog softvera za crtanje](topic:coming-from) · [Aliasi naredbi](topic:command-aliases)
