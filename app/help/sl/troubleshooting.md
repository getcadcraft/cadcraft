---
title: Odpravljanje težav
summary: Sporočila, ki jih CadCraft prikaže, in težave, na katere lahko naletite, vsaka z vzrokom in rešitvijo.
keywords: težava, napaka, ne deluje, sporočilo, datoteke ni mogoče odpreti, neznan ukaz, nič se ne zgodi, obvisi, tipke ne delujejo, prazno, manjka, popravilo
from: 8299b222
---

## Odpiranje datotek

| Sporočilo ali pojav | Vzrok | Rešitev |
|---|---|---|
| „CadCraft odpira risbe DWG in DXF. „…“ ni nobena od njiju.“ | Datoteka ni `.dwg` ali `.dxf`. | Odprite samo datoteko risbe. PDF lahko uvozite (ob odpiranju vas Odpri vpraša: uvozi ali pripni, glejte [PDF podlage](topic:pdf-underlay)); slike vstavite z `IMAGEATTACH`. |
| „Ta binarna DXF se konča sredi objekta: datoteka je skrajšana ali poškodovana.“ | Binarna DXF se konča pred koncem. | Vtipkajte RECOVER, da odprete, kar je mogoče prebrati, ali znova zahtevajte datoteko. |
| „Ta datoteka ni berljiva DXF (napačna skupinska koda v vrstici …).“ | DXF je poškodovan ali pravzaprav ni DXF. | Znova zahtevajte datoteko ali DWG. |
| „Te risbe ni bilo mogoče prebrati. Morda je poškodovana ali shranjena v različici, ki je bralnik še ne obravnava (…).“ | Bralnik DWG je ni mogel prebrati. | Zahtevajte DWG, shranjen v starejši različici, ali DXF. |
| „Ta risba je iz AutoCAD R11 / R12 (DWG AC1009), starejša od tiste, ki jo CadCraft bere …“ | Datoteke DWG iz izdaje 12 in starejše uporabljajo format, ki ga CadCraft ne bere. | V programu, ki jo je ustvaril, jo shranite kot DXF (katerakoli različica) ali kot novejši DWG in jo odprite. Lastni ukaz Shrani kot v CadCraftu ponuja DXF R12 za programe, ki ta stari format zahtevajo. |
| „Ni mogoče odpreti …“, ki mu sledi sporočilo o omrežju, pri prvi datoteki DWG | Bralnika DWG ni bilo mogoče prenesti: nimate povezave, CadCraft pa ni shranjen za delo brez povezave, ali pa se je povezava prekinila. | Vzpostavite povezavo in poskusite znova ali odprite DXF. Kliknite {{ui:Shrani za delo brez povezave}} in počakajte na „Pripravljeno za delo brez povezave“, da se datoteke DWG naslednjič odprejo tudi brez povezave. Glejte [Delo brez povezave](common:offline). |
| Gumb za delo brez povezave pravi „Shranjevanje ni uspelo“ | Nekatere datoteke se niso prenesle. | Preverite povezavo in znova kliknite gumb. |
| Gumb za delo brez povezave pravi „Delo brez povezave ni na voljo“ | Zasebna okna in nekateri upravljani računalniki ne morejo hraniti kopije za delo brez povezave. | Uporabite običajno okno ali ostanite na spletu. |
| CadCraft se brez povezave ne odpre | V tem brskalniku ni bil shranjen za delo brez povezave ali ga je brskalnik izbrisal. | Naslednjič, ko boste na spletu, kliknite {{ui:Shrani za delo brez povezave}} in počakajte na „Pripravljeno za delo brez povezave“. |
| Risba se odpre, vendar manjkajo deli | Objekti, ki jih CadCraft še ne zna narisati, ali sloji, ki so v datoteki izklopljeni ali zamrznjeni. | Preberite „O tej datoteki“ v levem podoknu. Preverite podokno {{ui:Sloji}}. |
| Besedilo se prelomi v dve vrstici | CadCraft riše besedilo v pisavi v slogu Helvetica, ki je širša od nekaterih pisav CAD. | Skrajšajte besedilo v Lastnostih ali sprejmite dodatno vrstico. |
| Krog je prikazan kot elipsa ali zrcaljeno besedilo se bere pravilno | Objekt je bil v programu, ki je datoteko ustvaril, narisan v nagnjeni ravnini ali gledan od spodaj. CadCraft ga prikaže, kot ga vidi od zgoraj, kot ga prikaže tloris tega programa; besedilo ostane berljivo. | Ni česa popraviti. Če želite videti, kako ga prikaže drugi program, zahtevajte risbo poravnano ali z objekti, narisanimi od zgoraj. |
| Blok, krog ali kota je na drugem mestu, kot v programu, ki je datoteko ustvaril | Primer risbe, ki ga CadCraft bere narobe. | Sporočite nam na Discordu, po možnosti z datoteko, če jo lahko delite. |

## Ukazna vrstica

| Sporočilo ali pojav | Vzrok | Rešitev |
|---|---|---|
| „Neznan ukaz „…“. Za seznam vtipkajte HELP.“ | Ni ukaza ali bližnjice s tem imenom. | Vtipkajte `HELP` ali glejte [Seznam ukazov](topic:commands). Nekateri znani ukazi [še niso izdelani](topic:not-built-yet). |
| „Ni takega ukaza“ ob ukazni vrstici med tipkanjem | Kar vtipkate, še ne ustreza ničemur. | Nadaljujte s tipkanjem ali preverite črkovanje. |
| „Zahtevana je točka ali ključna beseda možnosti.“ | Kar ste vtipkali, ni točka ali možnost. | Preverite obliko: `x,y`, `@dx,dy`, `@d<a` ali samo število. Glejte [Vnos koordinat in razdalj](topic:coordinate-entry). |
| „Zahtevano je pozitivno število ali dve točki.“ | Razdalja je bila negativna ali ni število. | Vtipkajte pozitivno število ali kliknite dve točki. |
| „Zahtevan je kot v stopinjah ali dve točki.“ | Kot ni bil število. | Vtipkajte stopinje kot navadno število. |
| „Zahtevano je število.“ | Pričakovano je bilo število. | Vtipkajte samo številke. |
| „Neveljavna ključna beseda možnosti.“ | Črke ne ustrezajo nobeni možnosti. | Vtipkajte velike črke, prikazane v oglatih oklepajih. |
| `*Prekinjeno*` | Pritisnili ste {{key:Esc}} ali {{key:Enter}} tam, kjer je bila zahtevana točka. | Ukaz zaženite znova. |
| Tipkanje ne doseže ukazne vrstice | Okno v podoknu ali pogovornem oknu ima kazalec. | Pritisnite {{key:Enter}} ali {{key:Esc}} ali kliknite na risbo. |
| Ukaz uporablja objekte, ki jih niste izbrali | Pred zagonom so bili izbrani. | Pred ukazom pritisnite {{key:Esc}}. |
| Črta je šla nekam nepričakovano | `x,y` je absolutno. | Za relativne točke uporabite `@dx,dy`. |
| „Pred tem dokončajte ali prekinite trenutni ukaz (Esc).“ | Pritisnili ste {{key:Mod+S}}, medtem ko je ukaz tekel. | Pritisnite {{key:Esc}} in nato shranite. |
| „Shranjevanje kot DWG (AutoCAD 2000) ni uspelo: … Poskusite Shrani kot, nato DXF.“ | Nekaj v risbi ni bilo mogoče zapisati kot DWG. | Pritisnite {{key:Mod+Shift+S}}, izberite {{ui:DXF R12}} in kliknite {{ui:Shrani}}. |
| „Ni shranjeno.“ | Pogovorno okno {{ui:Shrani kopijo kot}} ste zaprli s {{ui:Prekliči}} ali {{key:Esc}}. | Znova pritisnite {{key:Mod+Shift+S}} in kliknite {{ui:Shrani}}. |

## Urejanje

| Sporočilo ali pojav | Vzrok | Rešitev |
|---|---|---|
| Objekta ni mogoče izbrati | Njegov sloj je zaklenjen, izklopljen ali zamrznjen; ali ste na listu in gre za model v poglednem oknu. | Odklenite sloj ali pojdite na zavihek {{ui:Model}}. |
| „Tam ni ničesar.“ | Pod klikom ni objekta. | Povečajte prikaz in kliknite na samo črto. |
| „Tam ničesar ne seka tega objekta.“ | {{cmd:TRIM}} ni našel objekta, ki bi sekal del, ki ste ga izbrali. | Preverite, ali rezalna črta res seka objekt. |
| „Tega objekta ni mogoče prirezati.“ | Prirez deluje na črtah, lokih, krogih in polilinijah. | Najprej razstavite bloke ali izbrišite in ponovno narišite. |
| „Ni meje v tej smeri.“ | {{cmd:EXTEND}} ni našel ničesar, s čimer bi se srečal. | Izberite bližje koncu, ki naj se podaljša. |
| „Tega objekta ni mogoče odmakniti.“ | Odmik deluje na črtah, lokih, krogih in polilinijah. | Najprej ga razstavite ali narišite vzporedno črto. |
| „Tako daleč ni mogoče odmakniti.“ | Odmik bi obrnil obliko navznoter. | Uporabite manjšo razdaljo. |
| „Polmer je prevelik.“ ali „Razdalja je prevelika.“ | Zaobljenje ali posnetje bi šlo čez konec črte. | Nastavite manjši polmer z `R` ali manjše razdalje z `D`. |
| „Nazaj je mogoče prirezati samo prvi ali zadnji odsek odprte polilinije.“ | Vogal bi zarezal v sredino polilinije. | Izberite dva sosednja odseka polilinije ali uporabite `P` za vsak vogal. |
| „Izberite drugo, različno črto.“ | Druga izbira je bila ista črta ali ni črta. | Izberite drugo črto. |
| „Samo polilinije, sklice blokov in kote je mogoče razstaviti.“ | Izbor ni imel ničesar za razstavljanje. | Izberite polilinijo, sklic bloka ali koto. |
| „To je trenutni sloj. Najprej naj bo trenutni drug sloj.“ | Poskušali ste izklopiti trenutni sloj. | Kliknite ime drugega sloja, nato izklopite tega. |
| „Sloj z imenom … že obstaja.“ | Imena slojev morajo biti edinstvena. | Izberite drugo ime. |
| „Ni ničesar za razveljavitev.“ | Ni več ničesar za razveljavitev ali ste odprli ali začeli risbo (s tem se zgodovina počisti). | — |

## Kote in bloki

| Sporočilo ali pojav | Vzrok | Rešitev |
|---|---|---|
| Besedilo kote in puščice so zelo majhne ali zelo velike | Velikosti so v enotah risbe; splošno merilo ne ustreza risbi. | Nastavite {{cmd:DIMSCALE}} na merilo izrisa; glejte [Nastavitev velikosti kot](topic:dimension-settings). |
| „Kliknite točko znotraj kota, ki ga želite izmeriti.“ | Lokacija kotne kote leži na kraku. | Kliknite znotraj kota. |
| „Te črte so vzporedne.“ | Vzporedne črte nimajo kota med seboj. | Izberite dve črti, ki se sekata. |
| „Izberite linearno ali poravnano koto.“ | {{cmd:DIMCONTINUE}} ali {{cmd:DIMBASELINE}} potrebujeta eno, od katere začneta. | Izberite linearno ali poravnano koto. |
| „Ta risba še nima blokov: F vstavi enega iz datoteke, L iz knjižnice …“ | Risba nima lastnih blokov. | Vtipkajte `F` ali `L` ali ustvarite blok z {{cmd:BLOCK}}. |
| „Ni bloka z imenom „…“.“ | Ime je napačno. | Sporočilo našteje bloke, ki obstajajo. |
| „Ime bloka se ne sme začeti z * ali uporabljati …“, ki mu sledi seznam znakov | Ime vsebuje znak, ki ga bloki ne smejo uporabljati. | Uporabite črke, številke, `-` in `_`. |
| „Blok ne more vsebovati samega sebe.“ | Izbor vsebuje sklic na blok, ki ga ustvarjate. | Ta sklic izpustite. |
| „Ni izbranih objektov; nič ni ustvarjeno.“ | Pred izbiro ste pritisnili {{key:Enter}}. | Znova zaženite {{cmd:BLOCK}} in izberite objekte. |

## Listi in izris

| Sporočilo ali pojav | Vzrok | Rešitev |
|---|---|---|
| „Pogledna okna gredo na list. Najprej odprite zavihek lista (ali ga ustvarite z LAYOUT).“ | {{cmd:MVIEW}} na zavihku {{ui:Model}}. | Najprej kliknite zavihek lista. |
| „Najprej odprite list s pogledom.“ | {{cmd:VPVIEW}} na zavihku {{ui:Model}}. | Kliknite zavihek lista. |
| Merilo pogleda se zdi desetkrat napačno | Enote risbe so napačne. | Nastavite {{ui:Enote}} v {{ui:Trenutne nastavitve}}. |
| „Za izris še ni ničesar.“ | Model je prazen. | Narišite nekaj ali odprite risbo. |
| „Izberite okno za izris.“ | Izbrano je {{ui:Okno …}} in okno ni bilo izbrano. | Kliknite {{ui:Izberi}} in izberite dva kota. |
| „… večje od papirja: robovi so odrezani.“ | Območje se pri tem merilu ne prilega. | Izberite manjše merilo, večji papir ali {{ui:Prilagodi papirju}}. |
| „Brskalnik je blokiral nov zavihek, zato je bil PDF namesto tega prenesen.“ | Pojavna okna so za to spletno mesto blokirana. | Odprite preneseni PDF ali dovolite pojavna okna za to spletno mesto. |
| Znaki se izrišejo kot „?“ | PDF-jeve pisave nimajo črk zanje (redke ideograme, hindijščino in druge pisave, ki potrebujejo zapleteno oblikovanje, …), ali pa večje pisave ni bilo mogoče pridobiti (brez povezave). Evropske pisave, cirilica, grščina, hebrejščina, arabščina, perzijščina, urdu, tajščina, kitajščina, japonščina in korejščina se izrišejo kot samo sebe. | Za arabsko pisane, tajske, kitajske, japonske ali korejske znake znova izrišite s povezavo. Druge pisave še niso izdelane. |
| Konstrukcijske črte so vidne v PDF | Njihov sloj se izriše. | Kliknite gumb tiskalnika za sloj. |
| Vse črte so enako debele | Njihova debelina je {{ui:Privzeto}}, zato se izrišejo s širino peresa iz pogovornega okna. | Dajte slojem ali objektom {{ui:Debelina črte}} v desnem podoknu ali izberite {{ui:Debelina črte}} v pogovornem oknu. Če želite debeline videti na zaslonu, pritisnite {{ui:LWT}} v vrstici stanja. |

## Tipke in zaslon

| Pojav | Vzrok | Rešitev |
|---|---|---|
| F3, F7 ali F8 spremeni glasnost ali odpre Mission Control | Tipke funkcij na Macu. | Držite **fn** ali uporabite gumbe v vrstici stanja. Glejte [Tipke, miške in sledilne ploščice](common:keys). |
| F7 vpraša o brskanju s kazalcem | Firefoxova lastna uporaba tipke F7. | Izberite Ne; uporabite gumb {{ui:Mreža}}. |
| {{key:Mod+N}} je odprl okno brskalnika | Brskalnik to tipko zadrži zase. | Kliknite {{ui:Nova}} ali vtipkajte `NEW`. |
| {{key:Mod+A}} je izbralo besedilo ukazne vrstice | Kazalec je bil v ukazni vrstici. | Najprej kliknite objekt ali vtipkajte `ALL` na pozivu `Izberite objekte`. |
| {{key:Delete}} ne izbriše | Kazalec je bil v ukazni vrstici. | Vtipkajte `E` in pritisnite {{key:Enter}}. |
| Desni klik na sledilni ploščici Mac ne naredi ničesar | Klik s krmilno tipko se lahko šteje za navaden klik. | Kliknite z dvema prstoma. |
| Na sledilni ploščici se ne premika pogled | Ni srednjega gumba in preslednica ne premika pogleda. | Podrsajte z dvema prstoma: 2D pogled se premakne (stisk in kolešček miške povečata). Ali povlecite z desnim klikom. |
| Prvi {{key:Esc}} je zapustil celozaslonski način | Brskalnik uporablja Esc za izhod iz celozaslonskega načina. | Pritisnite {{key:Esc}} še enkrat, da prekličete ukaz. |
| {{key:F1}} na Macu ne naredi ničesar | F1 je tipka za svetlost. | Držite **fn** ali kliknite {{ui:Pomoč}}. |
| Tipkanje gre v iskalno polje pomoči | Podokno pomoči ima kazalec. | Kliknite na risbo. |
| Risba je izginila | Močno ste oddaljili pogled. | Kliknite {{ui:Obseg}} ali dvokliknite kolešček. |
| „Zapustim stran?“ ob zapiranju zavihka | Obstajajo neshranjene spremembe. | Ostanite, shranite s {{key:Mod+S}} in nato zaprite. |
