---
title: Pomeri, kopiraj, rotiraj, skaliraj, ogledalski preslikaj, istegni i niz
summary: Rasporedi nameštaj u prostoriji osnovnim komandama za izmenu, uz osnovne tačke, unete daljine i opoziv.
keywords: pomeri, kopiraj, rotiraj, skaliraj, ogledalski preslikaj, istegni, niz, spoji, matchprop, usklađivanje svojstava, slikar, arrayrect, arraypolar, polarni niz, izbriši, rastavi, opozovi, ponovi, osnovna tačka, pomeraj, uređivanje, poravnaj, raspodeli, poravnaj u liniju, raspodeli ravnomerno
from: 8eaeee6c
---

## Šta ćete napraviti

Sto sa jednom stolicom, kopiranom oko stola, okrenutom, ogledalski preslikanom i promenjene veličine. Pritom koristite {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} i {{cmd:UNDO}}.

## Nacrtajte delove

1. Ukucaj `REC` i pritisni {{key:Enter}}, ukucaj `0,0` i pritisni {{key:Enter}}, zatim ukucaj `@1800,900` i pritisni {{key:Enter}}. Ovo je sto.
2. Ukucaj `REC` i pritisni {{key:Enter}}, ukucaj `300,-700` i pritisni {{key:Enter}}, zatim ukucaj `@450,450` i pritisni {{key:Enter}}. Ovo je stolica, ispod stola.
3. Klikni {{ui:Granice}}.

## Pomeranje: osnovna tačka, pa druga tačka

Svako pomeranje, kopiranje, rotiranje i skaliranje počinje od **osnovne tačke**: tačke koja se nosi sa sobom ili oko koje se okreće.

1. Klikni stolicu da je izabereš.
2. Ukucaj `M` i pritisni {{key:Enter}}. Istorija kaže `1 found`.
3. Kod `Specify base point`, uhvati za gornji levi ugao stolice (Krajnja tačka) i klikni.
4. Kod `Specify second point`, ukucaj `@0,200` i pritisni {{key:Enter}}.

Stolica se pomera nagore za 200, bliže stolu.

:::tip
Ukucaj `D` kod `Specify base point` da umesto toga zadaš pomeraj: CadCraft tada pita `Specify displacement`, a ti ukucaš koliko ide u stranu i nagore, na primer `0,200` (ne treba `@`).
:::

## Kopiranje, koliko god puta želite

1. Klikni stolicu.
2. Ukucaj `CO` i pritisni {{key:Enter}}.
3. Uhvati za donji levi ugao stolice i klikni kao osnovnu tačku.
4. Ukucaj `@600,0` i pritisni {{key:Enter}}. Pojavljuje se kopija 600 udesno.
5. Ukucaj ponovo `@600,0` i pritisni {{key:Enter}}. Druga kopija se pojavljuje 1200 udesno od originala.
6. Pritisni {{key:Enter}} da završiš komandu.

{{cmd:COPY}} radi dok ne pritisnete {{key:Enter}}. Svaka kopija se postavlja na rastojanje od osnovne tačke do tačke koju zadate. Tačka sa `@` računa se od poslednje unete tačke, koja je posle prve kopije tačka te kopije, pa `@600,0` dvaput daje kopije na 600 i 1200. Ukucaj `U` i pritisni {{key:Enter}} da poništiš poslednju kopiju, a da ne izađeš iz komande.

Trebalo bi da vidite tri stolice u nizu ispod stola.

:::tip
{{cmd:COPY}} služi za kopije unutar jednog crteža, postavljene osnovnom tačkom. Da biste objekte preneli u drugi crtež ili karticu, ili da ih kasnije nalepite, koristite privremenu memoriju: {{key:Mod+C}}, pa {{key:Mod+V}}. {{key:Mod+D}} pravi jednu kopiju koja se pomera sa pokazivačem. Videti [Kopiranje, nalepljivanje i dupliranje](topic:copy-paste).
:::

## Ogledalski preslikaj red na drugu stranu

1. Prevuci ukrštajući okvir (sa desna nalevo) preko tri stolice, bez dodirivanja stola.
2. Ukucaj `MI` i pritisni {{key:Enter}}.
3. Kod `Specify first point of mirror line`, uhvati za Središnju tačku leve strane stola i klikni.
4. Kod `Specify second point of mirror line`, uhvati za Središnju tačku desne strane stola i klikni.
5. Kod `Erase source objects? [Yes/No] <N>`, pritisni {{key:Enter}} da ih zadržiš.

Trebalo bi da vidite tri stolice ispod stola i tri ogledalski preslikane iznad njega. Tekst u ogledalski preslikanom izboru ostaje čitljiv: postavljen je preslikano, ali nije napisan unazad.

## Okreni stolicu

1. Klikni krajnju desnu stolicu ispod stola.
2. Ukucaj `RO` i pritisni {{key:Enter}}.
3. Uhvati za donji desni ugao stolice i klikni kao osnovnu tačku.
4. Ukucaj `90` i pritisni {{key:Enter}}.

Stolica se okreće za 90 stepeni suprotno kretanju kazaljke na satu oko osnovne tačke. Negativan ugao okreće u smeru kazaljke. Umesto kucanja, možete kliknuti drugu tačku: ugao se meri od osnovne tačke do te tačke.

## Skaliraj sto

1. Izaberi sto.
2. Ukucaj `SC` i pritisni {{key:Enter}}.
3. Uhvati za donji levi ugao stola i klikni kao osnovnu tačku.
4. Ukucaj `1.2` i pritisni {{key:Enter}}.

Sto je 20% veći i raste od osnovne tačke. Faktor manji od 1 ga smanjuje.

:::note
Ako kliknete tačku umesto da ukucate faktor skaliranja, faktor je rastojanje od osnovne tačke do te tačke. Klik na jednu jedinicu crteža daje faktor 1. Obično je bolje ukucati broj.
:::

## Opozovi i ponovi

- {{key:Mod+Z}}, dugme {{ui:Opozovi}} ili `U` pa {{key:Enter}} opoziva poslednju komandu. Cela komanda je jedan korak: opozivanje {{cmd:COPY}} koja je napravila pet kopija uklanja svih pet.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, dugme {{ui:Ponovi}} ili `REDO` ga vraća.
- Istorija kaže šta je opozvano ("Opozvano je COPY").

CadCraft čuva poslednjih 500 koraka. Podešavanja slojeva (uključen, zamrznut, zaključan, boja) su podešavanja, a ne izmene, i ne opozivaju se.

## Istegni sobu šire

{{cmd:STRETCH}} (`S`, ili {{ui:Istegni}}) pomera samo ono što leži unutar ukrštajućeg prozora: uglovi i krajevi linija unutar njega se pomeraju, a sve ostalo ostaje na mestu, pa soba postaje šira umesto da se pomeri cela.

1. Ukucaj `S` i pritisni {{key:Enter}}.
2. Prevuci prozor sa desna nalevo preko desnog zida, tako da obuhvati uglove zida i krajeve svega što se na njega nastavlja.
3. Pritisni {{key:Enter}}.
4. Klikni osnovnu tačku, zatim ukucaj `@600,0` i pritisni {{key:Enter}}.

Pravougaonik je širi za 600; linije koje su se završavale na zidu i dalje se završavaju na njemu. Luk sa jednim krajem unutra zadržava visinu, krugovi i tekst se pomeraju kad je njihov centar ili tačka umetanja unutra, a kota meri novu dužinu. Objekti izabrani jedan po jedan, bez prozora, jednostavno se pomeraju.

Možete i prvo izabrati: prevucite ukrštajući prozor (ili ukrštajući lasso) preko zida bez aktivne komande, pa ukucajte `S`. STRETCH preuzima taj izbor i istegne ono što njegovi prozori obuhvataju, kao da ste ih prevukli na njegovom upitu.

## Niz: redovi i kolone ili u krugu oko centra

{{cmd:ARRAY}} (`AR`, ili {{ui:Niz}}) kopira izbor u mreži ili u krugu.

1. Izaberi stolicu, ukucaj `AR` i pritisni {{key:Enter}}. Pritisni {{key:Enter}} za `Rectangular`.
2. Pojavljuje se pregled od 4 kolone i 3 reda. Ukucaj `COU`, pritisni {{key:Enter}}, zatim `5` za kolone i `2` za redove.
3. Ukucaj `S`, pritisni {{key:Enter}}, zatim `600` između kolona i `-900` između redova (negativan broj ide nadole).
4. Pritisni {{key:Enter}} da napraviš kopije.

Za prsten stolica oko stola izaberi `PO` (Polarno) umesto toga, klikni centar stola i podesi `I` (stavke), `F` (ugao popunjavanja: 360 za ceo krug, 180 za polovinu) i `ROT` (da li se kopije okreću ka centru). {{cmd:ARRAYRECT}} i {{cmd:ARRAYPOLAR}} preskaču pitanje.

## Spajanje delova u polilinju

{{cmd:JOIN}} (`J`, ili {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Spoji}}): izaberi linije, lukove i otvorene polilinije čiji se krajevi dodiruju, pa pritisni {{key:Enter}}. Postaju jedna polilinija, zatvorena kad idu ceo krug, koju zatim možete odjednom paralelno pomeriti. Linije na istoj pravoj postaju jedna linija, čak i kad između njih ima praznine; lukovi istog kruga postaju jedan luk, ili krug.

## Usklađivanje svojstava

{{cmd:MATCHPROP}} (`MA`, ili {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Usklađivanje svojstava}}): klikni objekat čiji izgled želiš, zatim izaberi objekte koje menjaš i pritisni {{key:Enter}}. Oni preuzimaju njegov sloj i boju; tekst preuzima njegovu visinu, kota svoje veličine, a šrafura svoj uzorak. Na drugom pitanju izaberi Podešavanja (S) da isključiš bilo koje od ovoga.

## Poravnaj objekte

**Po tačkama.** {{cmd:ALIGN}} (`AL`, ili {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Poravnaj}}): izaberi objekte i pritisni {{key:Enter}}, zatim klikni tačku na njima (izvor) i mesto gde treba da bude (odredište).

- Jedan par ih pomera. Pritisni {{key:Enter}} kod `Specify second source point` da stanete tu.
- Dva para ih i okreću, tako da linija između dve tačke izvora leži duž linije između dve tačke odredišta. CadCraft tada pita `Scale objects based on alignment points?`: `Y` ih takođe toliko uveća ili smanji.
- Treći par ih ogledalski preslikava kad su njegove dve tačke sa suprotnih strana te linije.

**Ivice i razmaci.** {{ui:Uređivanje}} › {{ui:Više}} › {{ui:Poravnaj i raspodeli}} (ili `ALIGNPANEL`) otvara mali panel preko crteža. Izaberi objekte, zatim:

- izaberi u {{ui:Poravnaj prema}} šta da poravnaš (ceo izbor, prvi ili poslednji izabrani objekat, ili tačku koju klikneš) i klikni {{ui:Levo}}, {{ui:Centar}}, {{ui:Desno}}, {{ui:Gornji}}, {{ui:Sredina}} ili {{ui:Donji}};
- ili izaberi {{ui:Jednaki razmaci}} ili {{ui:Jednaka središta}} i klikni {{ui:Vodoravno}} ili {{ui:Uspravno}}: dva spoljašnja objekta ostaju, ostali se ravnomerno raspoređuju između njih (najmanje tri objekta).

Svaki klik je jedan korak opoziva, a izbor ostaje, pa možete probati nešto drugo. Svaki objekat se računa po svom obuhvatnom okviru, u UCS ako je postavljen. U komandnoj liniji isto je {{cmd:ALIGNTO}} i {{cmd:DISTRIBUTE}}.

## Brisanje i rastavljanje

- {{cmd:ERASE}} (`E`, ili {{key:Delete}}) uklanja izabrane objekte.
- {{cmd:EXPLODE}} (`X`) razlaže polilinju na linije i lukove, referencu bloka na njegove objekte, a kotu na linije, strelice i tekst. Razložene kote više ne mere sebe.

## Česte greške

- **Ukucavanje daljine bez `@` u drugoj tački.** `600,0` je apsolutna tačka 600,0, a ne „600 udesno“. Koristi `@600,0`, ili samo `600` uz krstić usmeren u pravom smeru.
- **Rotacija je išla u pogrešnom smeru.** Pozitivni uglovi se okreću suprotno kretanju kazaljke na satu.
- **Opozivanje je uklonilo više nego što ste očekivali.** Jedan opoziv vraća celu poslednju komandu, uključujući svaku kopiju koju je napravila.
- **Komanda nije tražila da izabereš objekte.** Objekti su već bili izabrani, pa ih je koristila. Pritisni {{key:Esc}} prvo da počneš bez izbora.
