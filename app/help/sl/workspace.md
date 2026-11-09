---
title: Zaslon CadCraft
summary: Ogled vseh vrstic, plošč in zavihkov v aplikaciji za risanje, po imenu, ki ga imajo na zaslonu.
keywords: zaslon, vmesnik, orodna vrstica, trak, plošče, ukazna vrstica, vrstica stanja, zavihki, zavihki listov, lastnosti, plošča slojev, ogled
from: b5a33388
---

Zaslon ima sedem delov. Od zgoraj navzdol: vrstica aplikacije, orodna vrstica, risalno območje s ploščo na vsaki strani, zavihki pod risbo, ukazna vrstica in vrstica stanja.

## Vrstica aplikacije

Tanka vrstica na samem vrhu pripada spletnemu mestu, ne risbi. Prikazuje oznako CadCraft, ime aplikacije, katero različico zaganjate, povezavo na stran aplikacije, gumb {{ui:Pomoč}} (ali {{key:F1}}), gumb {{ui:Shrani za delo brez povezave}}, gumb {{ui:Celozaslonski način}} in dva gumba teme, {{ui:Papir}} in {{ui:Model}}.

Gumb {{ui:Nastavitve}} (zobnik) vsebuje nastavitve CadCraft in tiste, ki si jih delijo vse aplikacije: glejte [Nastavitve CadCraft](topic:settings).

{{ui:Shrani za delo brez povezave}} v tem brskalniku ohrani kopijo CadCraft, vključno z njegovim bralnikom DWG, da se odpre brez povezave. Njegova oznaka pokaže stanje: „Shranjevanje N od M“, „Pripravljeno za delo brez povezave“, „Shranjevanje ni uspelo“ ali „Brez povezave ni na voljo“. Glejte [Delo brez povezave](common:offline).

:::note
Gumba {{ui:Papir}} in {{ui:Model}} v vrstici aplikacije samo spreminjata barve zaslona: {{ui:Papir}} je svetla tema, {{ui:Model}} temna. Nimata nobene zveze z zavihkom {{ui:Model}} pod risbo, ki preklaplja med risbo in njenimi listi.
:::

Gumb {{ui:Celozaslonski način}} ali {{key:Ctrl+Shift+F}} (tipka Control na vsakem računalniku, vključno z Macom) preklaplja med tremi načini zaslona: običajnim, celozaslonskim in celozaslonskim s skritimi vrsticami. Ko so vrstice skrite, premaknite kazalec na zgornji rob zaslona, da se vrnejo.

## Orodna vrstica

Pod vrstico aplikacije je orodna vrstica. Vsak gumb zažene ukaz, točno kot če bi ga vnesli, zato ukazna vrstica postavi ista vprašanja na obe načina. Ob zadržanju miške nad gumbom se prikaže njegov alias ukaza. Skupine so:

| Skupina | Gumbi |
|---|---|
| Datoteka | {{ui:Nova}}, {{ui:Odpri}}, {{ui:Shrani}}, {{ui:Shrani kot}}, {{ui:Izris}} |
| Riši | {{ui:Črta}}, {{ui:Polilinija}}, {{ui:Krožnica}}, {{ui:Lok}}, {{ui:Pravokotnik}}, {{ui:Mnogokotnik}}, {{ui:Elipsa}}, {{ui:Besedilo}}, {{ui:Odstavek}}, {{ui:Šrafura}}, in {{ui:Več}}: {{ui:Točka}}, {{ui:Pomožna premica}} in {{ui:Poltrak}} (glejte [Pomožne premice in poltraki](topic:construction-lines)) |
| Spreminjanje | {{ui:Premakni}}, {{ui:Kopiraj}}, {{ui:Zasukaj}}, {{ui:Merilo}}, {{ui:Zrcali}}, {{ui:Raztegni}}, {{ui:Odmik}}, {{ui:Prirezi}}, {{ui:Podaljšaj}}, {{ui:Zaobli}}, {{ui:Posnemi}}, {{ui:Razstavi}}, {{ui:Izbriši}}, in {{ui:Več}}: {{ui:Matrika}}, {{ui:Združi}}, {{ui:Ujemanje lastnosti}}, {{ui:Prekini}} in {{ui:Podaljšaj}} |
| Označevanje | {{ui:Linearna}}, {{ui:Poravnana}}, {{ui:Kot}}, {{ui:Polmer}}, {{ui:Premer}} (kote), {{ui:Vodilka}} (večkratna vodilka), in {{ui:Več}}: {{ui:Nadaljevalna kota}}, {{ui:Osnovnična kota}} in {{ui:Revizijski oblak}} |
| Parametrično | {{ui:Samodejno}}, {{ui:Omeji}}, {{ui:Kota}}, {{ui:Parametri}}, in {{ui:Več}} z vsako omejitvijo (glejte [Omejitev risbe](topic:constraints)) |
| Bloki | {{ui:Ustvari}}, {{ui:Vstavi}}, {{ui:Knjižnica}}, in {{ui:Več}}: {{ui:Uredi blok}} in {{ui:Določi atribut}} |
| Listi | {{ui:Nov list}}, {{ui:Pogledno okno}} |
| Urejanje | {{ui:Razveljavi}}, {{ui:Uveljavi}}, {{ui:Kopiraj}} (v odložišče), {{ui:Prilepi}}, in {{ui:Več}}: meni z {{ui:Izreži}}, {{ui:Kopiraj}}, {{ui:Prilepi}}, {{ui:Prilepi na isto mesto}}, {{ui:Podvoji in premakni}}, {{ui:Izbriši}}, {{ui:Izberi vse}}, {{ui:Prekliči izbor}}, {{ui:Hitra izbira}}, {{ui:Izberi podobne}} in {{ui:Poišči in zamenjaj}}, vsakega s svojo tipko |
| Pogled | {{ui:Obseg}}, {{ui:Okno (W)}}, {{ui:Prejšnji (P)}}, in {{ui:Več}}: {{ui:Izmeri razdaljo}}, {{ui:Površina}}, {{ui:Meri (polmer, kot …)}}, ter razdelitev zaslona: {{ui:Razdeli drugo ob drugi}}, {{ui:Razdeli drugo pod drugo}}, {{ui:Štiri podokna}}, {{ui:Eno podokno}} (glejte [Razdelitev zaslona](topic:split-screen)), ter {{ui:Zasuk pogleda za 90° v levo}}, {{ui:Zasuk pogleda za 90° v desno}}, {{ui:Nazaj na svet}} (glejte [Zasuk pogleda](topic:ucs-and-turned-view)) |

{{ui:Kopiraj}} v skupini {{ui:Spreminjanje}} je ukaz {{cmd:COPY}} (osnovna točka, nato kamor pride vsaka kopija); {{ui:Kopiraj}} v skupini {{ui:Urejanje}} da objekte v odložišče za {{ui:Prilepi}}. Glejte [Kopiraj, prilepi in podvoji](topic:copy-paste). Gumb ukaza, ki teče, ostane osvetljen, dokler se ukaz ne konča. Opisi orodij navajajo bližnjice za Windows („Ctrl+O“); na Macu deluje tudi {{key:Mod+O}}.

Pri nizkem oknu (na primer prenosnik z zaslonom, povečanim na 125 % ali več) orodna vrstica nikoli ne zavzame prostora risbe: ko bi risba dobila premalo višine, gumbi izpustijo besede pod ikonami in imena skupin (za ime zadržite miško nad gumbom), če pa to še ne zadostuje, se orodna vrstica zloži v eno vrstico, ki se pomika vstran. Višje okno besede spet prikaže.

## Leva plošča

Plošča na levi ima tri razdelke.

- **{{ui:Sloji}}.** Vsak sloj v risbi, z polnim pikom pri trenutnem. Kliknite ime, da naredite ta sloj trenutnim. Vsaka vrstica ima barvni vzorec (kliknite ga za izbiro barve) in štiri gumbe: vklop/izklop (oko), zamrznitev (snežinka), zaklepanje (ključavnica) in izris (tiskalnik). {{ui:Nov sloj}} odpre okno za dodajanje. Glejte [Organizacija risbe s sloji](topic:layers).
- **{{ui:Bloki}}.** Bloki, določeni v risbi, kolikokrat se uporablja vsak, in gumb {{ui:Vstavi}} za vsakega. Glejte [Ustvarjanje in vstavljanje blokov](topic:blocks).
- **{{ui:Risba}}.** Podatki o odprti datoteki: ime (z „(spremenjeno)“, kadar so neshranjene spremembe), oblika, velikost, enote, število objektov, slojev, blokov in listov. Po odprtju datoteke okno „O tej datoteki“ navede vse, kar CadCraft ni mogel prikazati ali je moral pretvoriti.

## Risalno območje

Sredina zaslona je risba. Kazalec je križec. Ko CadCraft želi točko, se pokaže majhen označevalnik in oznaka („Krajišče“, „Razpolovišče“), kjer bo pristalo lovljenje objekta. Ko želi objekte, ima križec izbirno polje in objekti pod njim zasvetijo.

Ko je risba prazna, kartica „Začni risati“ prikaže nekaj prvih ukazov. Izgine takoj, ko zaženete ukaz ali odprete datoteko. Na to območje lahko spustite datoteko DWG ali DXF, da jo odprete.

## Zavihki pod risbo

Pod risbo so zavihki: najprej {{ui:Model}}, nato {{ui:3D}}, nato po en zavihek za vsak list (postavitev) in gumb {{ui:+}}.

- {{ui:Model}} je sama risba, v polni velikosti, v enotah risbe.
- {{ui:3D}} prikazuje risbo, ki leži na tleh, in telesa, narejena iz nje. Med prikazom ima orodna vrstica skupino {{ui:3D}} namesto skupin risbe. Glejte [Model v 3D](topic:3d-solids).
- Vsak zavihek lista je list papirja z glavo risbe in pogledna okna na model. Kar tam narišete, je v enotah papirja (milimetri ali palci). Dvokliknite znotraj pogleda, da delate na modelu skozi njega (glejte [Delo na modelu prek poglednega okna](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Dolgo ime lista je na zavihku skrajšano; za celotno ime zadržite miško nad zavihkom. Pri veliko listih {{ui:Nastavitve}} › {{ui:CadCraft}} › {{ui:Zavihki listov}} › {{ui:Samo številke listov}} na zavihku prikaže samo številko vsakega lista (A-101).
- {{ui:+}} naredi nov list z obrobo, glavo risbe in enim pogledom. Enako je kot ukaz {{cmd:LAYOUT}}.
- Dvokliknite zavihek lista, da ga preimenujete. Ko je zavihek v fokusu, {{key:Left}} in {{key:Right}} premakneta med zavihki.

Vsak zavihek ohrani svojo povečavo in pomik. Glejte [Nastavitev lista](topic:sheets-and-viewports).

## Desna plošča: Lastnosti

Plošča na desni se spreminja glede na izbrano.

- **Nič ni izbrano, na zavihku {{ui:Model}}:** naslov je {{ui:Trenutne nastavitve}}. Tu nastavite {{ui:Sloj}}, {{ui:Barva}} in {{ui:Višina besedila}} za nove objekte, {{ui:Enote}} risbe ter velikosti za nove kote ({{ui:Višina besedila}}, {{ui:Velikost puščice}}, {{ui:Decimalke}}, {{ui:Skupno merilo}}).
- **Nič ni izbrano, na listu:** naslov je „List:“ in ime lista. Lahko preimenujete list, spremenite njegov {{ui:Papir}} in {{ui:Usmerjenost}}, {{ui:Izriši ta list}} ali {{ui:Izbriši ta list}}. Nastavitve za nove objekte so spodaj.
- **En objekt izbran:** njegov tip kot naslov (Črta, Krožnica, Besedilo, Kota, Pogledno okno …), nato njegov sloj, barva in geometrija. Vnesite novo vrednost in pritisnite {{key:Enter}}, da jo spremenite.
- **Več objektov izbranih:** koliko jih je in njihov skupni {{ui:Sloj}} in {{ui:Barva}}. Sprememba enega spremeni vse. „Različno“ pomeni, da se razlikujejo.

Glejte [Urejanje z ročicami in Lastnostmi](topic:grips-and-properties).

Pod njo se odpre plošča {{ui:Parametri}}, ko izberete {{ui:Parametri}} ali vnesete {{cmd:PARAMETERS}}: vsak parameter in dimenzijska omejitev v eni tabeli. Glejte [Uporaba parametrov in enačb](topic:parameters).

## Ukazna vrstica

Na dnu je ukazna vrstica: zgodovina tega, kar ste naredili, in pod njo poziv.

- Oznaka poziva je `Ukaz:`, ko nič ne teče. Med izvajanjem ukaza prikaže vprašanje, njegove možnosti v oglatih oklepajih in privzeto vrednost v kotnih oklepajih, na primer `Določite polmer krožnice [Premer (D)] <500>:`.
- Ko vpisujete ime ukaza, desno nakaže ujemajoče ukaze. Pritisnite {{key:Tab}}, da sprejmete prvega. „Ni takega ukaza“ pomeni, da se nič ne ujema.
- {{key:Up}} in {{key:Down}} prinesejo nazaj vrstice, ki ste jih vnesli prej.
- Zgodovina hrani zadnjih 400 vrstic. Sporočila ukazov, meritve iz {{cmd:DIST}} in {{cmd:LIST}} ter poročila o shranjevanju in izrisu se prikažejo tukaj.

## Vrstica stanja

Čisto spodnja vrstica je vrstica stanja.

- **Koordinate** na levi: X in Y križca. Medtem ko ukaz nima osnovne točke, prikaže tudi razdaljo in kot od nje, na primer `Δ 1200 < 90°`.
- **Sporočila** v sredini, na primer „Orto vklopljen“ ali „Trenutni sloj: Walls“. Po nekaj sekundah zbledijo.
- **{{ui:Mreža}}**, **{{ui:Orto}}**, **{{ui:Polarno}}**, **{{ui:Lovljenje}}**, **{{ui:Sledenje}}**, **{{ui:Dyn}}** in **{{ui:LWT}}** na desni. Vsak je preklopnik; pritisnjen gumb je vklopljen. {{ui:LWT}} prikazuje debeline črt na zaslonu (glejte [Debeline in vrste črt](topic:units-papers-scales#line-weights-and-linetypes)). Majhna puščica poleg {{ui:Lovljenje}} odpre {{ui:Lovljenje objektov}}, kjer označite, katera lovljenja so aktivna. Glejte [Lovljenje na točke objektov](topic:object-snaps).

## Pogovorno okno Izris v PDF

{{ui:Izris}} (ali {{key:Mod+P}}) odpre pogovorno okno {{ui:Izris v PDF}}, z nastavitvami levo in živim predogledom desno. Glejte [Izris v PDF](topic:plot-pdf).

## Pomoč

{{key:F1}} ali gumb {{ui:Pomoč}} odpre to pomoč kot stransko ploščo; risba ostane uporabna poleg nje. Deluje brez povezave. {{key:F1}} znova ali {{key:Esc}} v plošči jo zapre. Glejte [Uporaba te pomoči](common:help).
