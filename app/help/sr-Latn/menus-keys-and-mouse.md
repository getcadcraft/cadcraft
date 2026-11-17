---
title: Meniji, tasteri i miš
summary: Izaberi stil menija koji odgovara načinu na koji već radiš, dodeli bilo kojoj komandi sopstveni taster ili taster koji ukucava komandu, premesti komande između kartica trake i podesi šta rade točkić i tasteri miša.
keywords: stil menija, meniji, traka, paleta alatki, komandna linija, prečice sa tastature, prečice, tasteri, prilagodi, ponovo dodeli, tekstualni tasteri, miš, točkić, obrni, smer zumiranja, srednje dugme, desno dugme, pomeri pogled, izvezi, uvezi, prebacivanje, poznato, klasičan crtački
from: 8bbf4f88
---

CadCraft-ove komande su iste kako god im prilaziš, a komandna linija je uvek tu sa svojim aliasima (`L`, `C`, `TR` …). **Stil menija** određuje samo gde dugmad stoje na ekranu, kako se tamo zovu i koji tasteri ih pokreću. Izaberi ga u {{ui:Podešavanja}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Meniji, tasteri i miš}}; promena je odmah, a ovaj pregledač je pamti.

## Tri stila

| Stil | Šta dobijaš |
|---|---|
| {{ui:CadCraft}} | CadCraft-ova sopstvena paleta: Datoteka, Crtanje, Uređivanje, Anotacije, Parametarski, Blokovi, Listovi, Izmena i Pogled, svaki sa menijem {{ui:Više}}. Početak. |
| {{ui:Klasičan crtački}} | Traka raspoređena kao kod klasičnih 2D programa za crtanje: meni {{ui:Datoteka}} i brza dugmad, zatim kartice {{ui:Početna}} (Crtanje, Uređivanje, Anotacije, Slojevi, Blok, Svojstva, Pomoćne alatke, Privremena memorija), {{ui:Umetni}}, {{ui:Anotacije}}, {{ui:Parametarski}}, {{ui:Pogled}}, {{ui:Upravljanje}}, {{ui:Izlaz}} i {{ui:3D}}. Komande kucaj kao i uvek. Srednje dugme pomera pogled; desni klik je {{key:Enter}}, a prevlačenje desnim dugmetom ne radi ništa. |
| {{ui:Traka}} | Traka običnih kartica zadataka: {{ui:Crtanje}}, {{ui:Uređivanje}}, {{ui:Anotacije}}, {{ui:Parametarski}}, {{ui:Blokovi}}, {{ui:Listovi}}, {{ui:Pogled}}, {{ui:3D}} i {{ui:Alatke}}, sa menijem {{ui:Datoteka}} i brzim dugmadima desno. Srednje i desno dugme pomeraju pogled, kao u CadCraft-ovom sopstvenom stilu. |

Svaki stil zadržava CadCraft-ove tastere: {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+Shift+S}}, {{key:Mod+O}}, {{key:Mod+P}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}}, {{key:Mod+A}}, i {{key:F3}}, {{key:F7}}, {{key:F8}}, {{key:F10}}, {{key:F11}}, {{key:F12}} za pomoćne alate za crtanje. Slova nikad nisu tasteri: CadCraft ih kuca u komandnu liniju.

Trake takođe sadrže alate panela Slojevi i pomoćne alate statusne trake. Kartica {{ui:3D}} se popuni kada se otvori 3D kartica ispod crteža; 3D alat izabran na kartici Model najpre otvara 3D karticu, a 2D alat izabran na 3D kartici najpre vraća na karticu Model.

:::tip
Taster koji pripada CadCraft-ovom sopstvenom rasporedu, ali ga tvoj stil dodeljuje drugoj komandi, ne radi ništa, a statusna traka kaže gde je otišla njegova komanda („U Mojim tasterima, Ortho je Ctrl+Alt+O“). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} i strelice uvek zadržavaju svoje značenje. Dok komanda radi ili dok se slova kucaju u komandnoj liniji, tasteri pripadaju komandnoj liniji.
:::

## Napravi po svom

1. Izaberi stil koji je najbliži onome što želiš, zatim klikni {{ui:Prilagodi…}}.
2. Na {{ui:Tasteri i meniji}} pronađi komandu (pretraga pomaže). Klikni {{ui:Dodaj taster}} i pritisni taster. Klikni taster da ga skineš.
3. Uz traku, {{ui:Gde se nalazi}} premešta komandu na drugu karticu i panel, u meni {{ui:Datoteka}} ili na {{ui:Samo tasteri}}.
4. Na {{ui:Miš}} podesi točkić i dugmad koja pomeraju crtež.
5. Daj mu ime i klikni {{ui:Sačuvaj}}.

Čuvanje ugrađenog stila pravi tvoju kopiju („Moj Klasičan crtački“); ugrađeni se nikad ne menja. Taster dodeljen dvema komandama prikazan je crveno i mora da se popravi pre čuvanja.

## Tasteri koji kucaju komandu

{{cmd:SHORTCUTS}} (Pogled › Više › {{ui:Prečice sa tastature…}}) daje tasteru celu komandnu liniju, na primer {{key:Ctrl+Alt+L}} za `LINE` ili {{key:F9}} za `ZOOM E`. Ovi tasteri pripadaju stilu u upotrebi: kada ova verzija prvi put otvori, tasteri koje si napravio u starijoj verziji prenose se u tvoj stil „Moji CadCraft tasteri“, jednom, i rade kao ranije. Izvoz stila ih nosi sa sobom.

## Miš

- **Točkić miša**: {{ui:Skrolovanje nagore uvećava}} (početak) ili {{ui:Skrolovanje nagore smanjuje}}, i koliko brzo. Štipanje na podlozi uvek zumira u smeru kojim se pomeraju prsti.
- **Pomeri crtež sa**: srednjim dugmetom, desnim dugmetom ili oba. Desni klik bez prevlačenja je uvek {{key:Enter}}. Levo dugme uvek bira i crta u CadCraft-u, pa njegovo štikliranje ovde ništa ne menja.
- **Prevlačenje u 3D pogledima**: 3D kartica zadržava sopstvena dugmad u svakom stilu (levo kruži, srednje i desno pomeraju).

## Ponesi sa sobom

{{ui:Izvezi}} čuva stil u upotrebi kao mali `.ccinput.json` datoteku; {{ui:Uvezi…}} dodaje jednu, sa drugog računara ili od kolege. Uvezena datoteka može da pokazuje samo na CadCraft-ove sopstvene komande: sve drugo u njoj se izostavlja i prebrojava u statusnoj traci. {{ui:Izbriši ovaj stil}} uklanja jedan od tvojih.

:::note
Ova podešavanja ostaju u ovom pregledaču. {{ui:Koristi ovaj stil u svakoj aplikaciji}} ispod kartica stila pravi da se svaka aplikacija otvara u svom odgovarajućem stilu (sopstvena paleta, traka ili Klasičan crtački), sa promenama koje si napravio u svakoj aplikaciji. CadCraft nema stil sa meni-trakom: kada se za sve aplikacije izabere meni-traka neke druge aplikacije, CadCraft zadržava svoju sopstvenu paletu.
:::

Povezano: [Tastatura i miš](topic:keyboard) · [Podešavanja CadCraft-a](topic:settings) · [Prelazak sa drugog softvera za crtanje](topic:coming-from) · [Aliasi komandi](topic:command-aliases)
