---
title: Premjesti, kopiraj, rotiraj, razmjeri, zrcali, rastegni i niz
summary: Rasporedite namještaj u prostoriji osnovnim naredbama za izmjenu, uz osnovne tačke, unesene udaljenosti i poništavanje.
keywords: premjesti, kopiraj, rotiraj, razmjeri, zrcali, rastegni, niz, spoji, matchprop, usklađivanje svojstava, četkica, arrayrect, arraypolar, polarni niz, izbriši, razloži, poništi, ponovi, osnovna tačka, pomak, izmjena, poravnaj, rasporedi, ravnomjerno razmaknuti
from: 8eaeee6c
---

## Šta ćete napraviti

Sto sa jednom stolicom, kopiranom oko stola, okrenutom, zrcaljenom i promijenjenom veličine. Pritom koristite {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} i {{cmd:UNDO}}.

## Nacrtajte dijelove

1. Ukucajte `REC` i pritisnite {{key:Enter}}, ukucajte `0,0` i pritisnite {{key:Enter}}, zatim ukucajte `@1800,900` i pritisnite {{key:Enter}}. Ovo je sto.
2. Ukucajte `REC` i pritisnite {{key:Enter}}, ukucajte `300,-700` i pritisnite {{key:Enter}}, zatim ukucajte `@450,450` i pritisnite {{key:Enter}}. Ovo je stolica, ispod stola.
3. Kliknite {{ui:Extents}}.

## Premjesti: osnovna tačka, pa druga tačka

Svako premještanje, kopiranje, rotiranje i razmjera počinje od **osnovne tačke**: tačke koja se nosi sa sobom ili oko koje se okreće.

1. Kliknite stolicu da je odaberete.
2. Ukucajte `M` i pritisnite {{key:Enter}}. Historija kaže `1 pronađen`.
3. Kod `Zadaj osnovnu tačku` uhvatite gornji lijevi ugao stolice (Krajnja tačka) i kliknite.
4. Kod `Zadaj drugu tačku` ukucajte `@0,200` i pritisnite {{key:Enter}}.

Stolica se pomjeri za 200 prema gore, bliže stolu.

:::tip
Ukucajte `D` kod `Zadaj osnovnu tačku` da umjesto toga date pomak: CadCraft tada pita `Zadaj pomak`, a vi ukucate koliko daleko u stranu i gore, na primjer `0,200` (bez `@`).
:::

## Kopiraj koliko puta želite

1. Kliknite stolicu.
2. Ukucajte `CO` i pritisnite {{key:Enter}}.
3. Uhvatite donji lijevi ugao stolice i kliknite kao osnovnu tačku.
4. Ukucajte `@600,0` i pritisnite {{key:Enter}}. Pojavi se kopija 600 udesno.
5. Ponovo ukucajte `@600,0` i pritisnite {{key:Enter}}. Pojavi se druga kopija, 1200 udesno od originala.
6. Pritisnite {{key:Enter}} da završite naredbu.

{{cmd:COPY}} radi dok ne pritisnete {{key:Enter}}. Svaka kopija se postavlja na udaljenost od osnovne tačke do tačke koju unesete. Tačka sa `@` računa se od posljednje unesene tačke, a nakon prve kopije to je tačka te kopije, pa dva puta `@600,0` daju kopije na 600 i 1200. Ukucajte `U` i pritisnite {{key:Enter}} da poništite posljednju kopiju bez izlaska iz naredbe.

Trebali biste vidjeti tri stolice u nizu ispod stola.

:::tip
{{cmd:COPY}} služi za kopije unutar jednog crteža, postavljene prema osnovnoj tački. Da biste objekte prenijeli u drugi crtež ili karticu ili ih kasnije zalijepili, koristite međuspremnik: {{key:Mod+C}}, pa {{key:Mod+V}}. {{key:Mod+D}} pravi jednu kopiju koja se pomjera zajedno s pokazivačem. Pogledajte [Kopiraj, zalijepi i dupliciraj](topic:copy-paste).
:::

## Zrcali red na drugu stranu

1. Prevucite ukršteni prozor (s desna ulijevo) preko tri stolice, bez dodirivanja stola.
2. Ukucajte `MI` i pritisnite {{key:Enter}}.
3. Kod `Zadaj prvu tačku ose zrcaljenja` uhvatite Središnju tačku lijeve strane stola i kliknite.
4. Kod `Zadaj drugu tačku ose zrcaljenja` uhvatite Središnju tačku desne strane stola i kliknite.
5. Kod `Obrisati izvorne objekte? [Da (Y)/Ne (N)] <N>` pritisnite {{key:Enter}} da ih zadržite.

Trebali biste vidjeti tri stolice ispod stola i tri zrcaljene stolice iznad njega. Tekst u zrcaljenom odabiru ostaje čitljiv: postavljen je zrcalno, ali nije napisan unazad.

## Rotiraj stolicu

1. Kliknite krajnju desnu stolicu ispod stola.
2. Ukucajte `RO` i pritisnite {{key:Enter}}.
3. Uhvatite donji desni ugao stolice i kliknite kao osnovnu tačku.
4. Ukucajte `90` i pritisnite {{key:Enter}}.

Stolica se okrene za 90 stepeni suprotno kretanju kazaljke na satu oko osnovne tačke. Negativan ugao okreće u smjeru kazaljke. Umjesto da kucate, možete kliknuti drugu tačku: ugao se mjeri od osnovne tačke do te tačke.

## Razmjeri sto

1. Odaberite sto.
2. Ukucajte `SC` i pritisnite {{key:Enter}}.
3. Uhvatite donji lijevi ugao stola i kliknite kao osnovnu tačku.
4. Ukucajte `1.2` i pritisnite {{key:Enter}}.

Sto je 20% veći, a raste od osnovne tačke. Faktor manji od 1 ga smanjuje.

:::note
Ako kliknete tačku umjesto da ukucate faktor razmjere, faktor je udaljenost od osnovne tačke do te tačke. Klik jednu jedinicu crteža daleko daje faktor 1. Obično želite unijeti broj.
:::

## Poništi i ponovi

- {{key:Mod+Z}}, dugme {{ui:Undo}} ili `U` pa {{key:Enter}} poništavaju posljednju naredbu. Cijela naredba je jedan korak: poništavanje {{cmd:COPY}} koja je napravila pet kopija uklanja svih pet.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, dugme {{ui:Redo}} ili `REDO` vraćaju je.
- Historija kaže šta je poništeno ("Poništeno COPY").

CadCraft čuva posljednjih 500 koraka. Postavke slojeva (uključeno, zamrznuto, zaključano, boja) su postavke, a ne izmjene, i ne poništavaju se.

## Proširi prostoriju u širinu

{{cmd:STRETCH}} (`S`, ili {{ui:Stretch}}) pomjera samo ono što leži unutar ukrštenog prozora: uglovi i krajevi linija unutra se pomjeraju, a sve ostalo ostaje na mjestu, pa se prostorija proširi umjesto da se cijela pomjeri.

1. Ukucajte `S` i pritisnite {{key:Enter}}.
2. Prevucite prozor s desna ulijevo preko desnog zida, tako da obuhvati uglove zida i krajeve svega što se na njega nastavlja.
3. Pritisnite {{key:Enter}}.
4. Kliknite osnovnu tačku, zatim ukucajte `@600,0` i pritisnite {{key:Enter}}.

Pravougaonik je 600 širi; linije koje su završavale na zidu i dalje završavaju na njemu. Luk s jednim krajem unutra zadržava svoju visinu, krugovi i tekst se pomjeraju kad su njihov centar ili tačka umetanja unutra, a kota mjeri novu dužinu. Objekti odabrani jedan po jedan, bez prozora, jednostavno se pomjeraju.

Možete i prvo odabrati: prevucite ukršteni prozor (ili ukršteni lazo) preko zida kad ne radi nijedna naredba, zatim ukucajte `S`. STRETCH preuzme taj odabir i rasteže ono što njegovi prozori obuhvataju, kao da ste ih prevukli na njegovom sopstvenom upitu.

## Niz: redovi i kolone ili u krugu oko centra

{{cmd:ARRAY}} (`AR`, ili {{ui:Array}}) kopira odabir u mrežu ili u krug.

1. Odaberite stolicu i ukucajte `AR`, pa pritisnite {{key:Enter}}. Pritisnite {{key:Enter}} za pravougaoni niz.
2. Pojavi se pregled 4 kolone i 3 reda. Ukucajte `COU`, pritisnite {{key:Enter}}, zatim `5` za kolone i `2` za redove.
3. Ukucajte [Razmak (S)], pritisnite {{key:Enter}}, zatim `600` između kolona i `-900` između redova (negativno ide dolje).
4. Pritisnite {{key:Enter}} da napravite kopije.

Za prsten stolica oko stola izaberite `PO` (Polar), kliknite centar stola i postavite `I` ([Stavke (I)]), `F` ([Ugao punjenja (F)]: 360 za cijeli krug, 180 za pola) i `ROT` ([Rotiraj (ROT)]: da li se kopije okreću prema centru). {{cmd:ARRAYRECT}} i {{cmd:ARRAYPOLAR}} preskaču pitanje.

## Spoji dijelove u jednu polilniju

{{cmd:JOIN}} (`J`, ili {{ui:Modify}} › {{ui:More}} › {{ui:Join}}): odaberite linije, lukove i otvorene polilinije čiji se krajevi dodiruju, i pritisnite {{key:Enter}}. Postaju jedna polilinija, zatvorena ako idu cijelim krugom, koju zatim možete odmaknuti odjednom. Linije koje leže na istoj pravoj postaju jedna linija, čak i ako imaju praznine među sobom; lukovi jednog kruga postaju jedan luk, ili krug.

## Usklađivanje svojstava

{{cmd:MATCHPROP}} (`MA`, ili {{ui:Modify}} › {{ui:More}} › {{ui:Match properties}}): kliknite objekat čiji izgled želite, zatim odaberite objekte koje treba promijeniti i pritisnite {{key:Enter}}. Oni preuzimaju njegov sloj i boju; tekst preuzima njegovu visinu, kota njegove veličine, šrafura njegov uzorak. Ukucajte [Postavke (S)] na drugom pitanju da isključite bilo koju od ovih stavki.

## Poravnaj objekte

**Po tačkama.** {{cmd:ALIGN}} (`AL`, ili {{ui:Modify}} › {{ui:More}} › {{ui:Align}}): odaberite objekte i pritisnite {{key:Enter}}, zatim kliknite tačku na njima (izvornu) i mjesto gdje treba da bude (odredišnu).

- Jedan par ih pomjera. Pritisnite {{key:Enter}} kod `Zadaj drugu izvornu tačku` da stanete.
- Dva para ih i okreću, tako da linija između dvije izvorne tačke leži duž linije između dvije odredišne tačke. CadCraft tada pita `Razmjeriti objekte prema tačkama poravnanja?`: [Da (Y)] ih toliko povećava ili smanjuje.
- Treći par ih zrcali ako su njegove dvije tačke s različitih strana te linije.

**Ivice i razmak.** {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}} (ili `ALIGNPANEL`) otvara mali panel iznad crteža. Odaberite objekte, zatim:

- izaberite šta da poravnate u {{ui:Align to}} (cijeli odabir, prvi ili posljednji objekat koji ste odabrali, ili tačku koju kliknete) i kliknite {{ui:Left}}, {{ui:Center}}, {{ui:Right}}, {{ui:Top}}, {{ui:Middle}} ili {{ui:Bottom}};
- ili izaberite {{ui:Equal gaps}} ili {{ui:Equal centres}} i kliknite {{ui:Across}} ili {{ui:Up and down}}: dva vanjska objekta ostaju, a ostali se ravnomjerno raspoređuju među njima (najmanje tri objekta).

Svaki klik je jedan korak poništavanja, a odabir ostaje, pa možete probati drugačije. Svaki objekat se računa prema svom okvirnom pravougaoniku, u UCS-u ako je postavljen. U komandnoj liniji isto su {{cmd:ALIGNTO}} i {{cmd:DISTRIBUTE}}.

## Izbriši i razloži

- {{cmd:ERASE}} (`E`, ili {{key:Delete}}) uklanja odabrane objekte.
- {{cmd:EXPLODE}} (`X`) razlaže poliliniju na linije i lukove, referencu bloka na njegove objekte, a kotu na linije, strelice i tekst. Razložene kote više ne mjere same sebe.

## Česte greške

- **Unos udaljenosti bez `@` na drugoj tački.** `600,0` je apsolutna tačka 600,0, a ne "600 udesno". Koristite `@600,0`, ili samo `600` uz križni kursor usmjeren u pravom smjeru.
- **Rotacija je išla u pogrešnom smjeru.** Pozitivni uglovi se okreću suprotno kretanju kazaljke na satu.
- **Poništavanje je uklonilo više nego što ste očekivali.** Jedno poništavanje vraća cijelu posljednju naredbu, uključujući svaku kopiju koju je napravila.
- **Naredba nije tražila odabir objekata.** Objekti su već bili odabrani, pa ih je koristila. Prvo pritisnite {{key:Esc}} da počnete bez odabira.
