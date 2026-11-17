---
title: Pomakni, kopiraj, zakreni, skaliraj, zrcali, rastegni i niz
summary: Rasporedite namještaj u sobi osnovnim naredbama za izmjenu, uz bazne točke, upisane udaljenosti i poništavanje.
keywords: pomakni, kopiraj, zakreni, skaliraj, zrcali, rastegni, niz, spoji, matchprop, uskladi svojstva, slikar, arrayrect, arraypolar, polarni niz, izbriši, rastavi, poništi, ponovi, bazna točka, pomak, izmjena, poravnaj, rasporedi, poravnaj u liniju, ravnomjerno razmjesti
from: 8eaeee6c
---

## Što ćete izraditi

Stol s jednom stolicom, kopiranom oko stola, zakrenutom, zrcaljenom i promijenjene veličine. Pritom koristite {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} i {{cmd:UNDO}}.

## Nacrtajte dijelove

1. Upišite `REC` i pritisnite {{key:Enter}}, upišite `0,0` i pritisnite {{key:Enter}}, zatim upišite `@1800,900` i pritisnite {{key:Enter}}. Ovo je stol.
2. Upišite `REC` i pritisnite {{key:Enter}}, upišite `300,-700` i pritisnite {{key:Enter}}, zatim upišite `@450,450` i pritisnite {{key:Enter}}. Ovo je stolica, ispod stola.
3. Kliknite {{ui:Opseg}}.

## Pomak: bazna točka, zatim druga točka

Svaki pomak, kopiranje, zakretanje i skaliranje počinje od **bazne točke**: točke koja se nosi sa sobom ili oko koje se zakreće.

1. Kliknite stolicu da je odaberete.
2. Upišite `M` i pritisnite {{key:Enter}}. U povijesti piše `Pronađeno: 1`.
3. Na upitu `Odredite baznu točku` uhvatite gornji lijevi kut stolice (Krajnja točka) i kliknite.
4. Na upitu `Odredite drugu točku` upišite `@0,200` i pritisnite {{key:Enter}}.

Stolica se pomiče gore za 200, bliže stolu.

:::tip
Na upitu `Odredite baznu točku` upišite `D` da umjesto toga zadate pomak: CadCraft će tada pitati `Odredite pomak`, a vi upisujete koliko vodoravno i koliko okomito, na primjer `0,200` (znak `@` nije potreban).
:::

## Kopiranje, koliko god želite

1. Kliknite stolicu.
2. Upišite `CO` i pritisnite {{key:Enter}}.
3. Uhvatite donji lijevi kut stolice i kliknite ga kao baznu točku.
4. Upišite `@600,0` i pritisnite {{key:Enter}}. Kopija se pojavi 600 udesno.
5. Upišite `@600,0` opet i pritisnite {{key:Enter}}. Druga kopija se pojavi 1200 udesno od izvornika.
6. Pritisnite {{key:Enter}} za završetak naredbe.

{{cmd:COPY}} nastavlja dok ne pritisnete {{key:Enter}}. Svaka kopija postavlja se udaljenošću od bazne točke do točke koju zadate. Točka `@` broji se od zadnje unesene točke, a nakon prve kopije to je točka te kopije, pa dvostruki `@600,0` daje kopije na 600 i 1200. Upišite `U` i pritisnite {{key:Enter}} da uklonite zadnju kopiju, a da ne napustite naredbu.

Trebali biste vidjeti tri stolice u nizu ispod stola.

:::tip
{{cmd:COPY}} služi za kopije unutar jednog crteža, postavljene prema baznoj točki. Za prijenos objekata u drugi crtež ili karticu, ili za kasnije lijepljenje, upotrijebite međuspremnik: {{key:Mod+C}}, zatim {{key:Mod+V}}. {{key:Mod+D}} izrađuje jednu kopiju koja se pomiče zajedno s pokazivačem. Pogledajte [Kopiranje, lijepljenje i dupliciranje](topic:copy-paste).
:::

## Zrcaljenje reda na drugu stranu

1. Povucite prozor križanja (s desna nalijevo) preko triju stolica, bez dodirivanja stola.
2. Upišite `MI` i pritisnite {{key:Enter}}.
3. Na upitu `Odredite prvu točku zrcalne osi` uhvatite polovište lijeve strane stola i kliknite.
4. Na upitu `Odredite drugu točku zrcalne osi` uhvatite polovište desne strane stola i kliknite.
5. Na upitu `Izbrisati izvorne objekte? [Da (Y)/Ne (N)] <N>` pritisnite {{key:Enter}} da ih zadržite.

Trebali biste vidjeti tri stolice ispod stola i tri zrcaljene stolice iznad njega. Tekst u zrcaljenom odabiru ostaje čitljiv: postavljen je zrcaljeno, ali nije napisan unatrag.

## Zakretanje stolice

1. Kliknite stolicu najdesnije ispod stola.
2. Upišite `RO` i pritisnite {{key:Enter}}.
3. Uhvatite donji desni kut stolice i kliknite ga kao baznu točku.
4. Upišite `90` i pritisnite {{key:Enter}}.

Stolica se zakreće za 90 stupnjeva suprotno od kazaljke na satu oko bazne točke. Negativni kut zakreće u smjeru kazaljke na satu. Umjesto upisivanja možete kliknuti drugu točku: kut se mjeri od bazne točke do te točke.

## Skaliranje stola

1. Odaberite stol.
2. Upišite `SC` i pritisnite {{key:Enter}}.
3. Uhvatite donji lijevi kut stola i kliknite ga kao baznu točku.
4. Upišite `1.2` i pritisnite {{key:Enter}}.

Stol je 20% veći i raste od bazne točke. Faktor manji od 1 stol čini manjim.

:::note
Ako umjesto upisivanja faktora skaliranja kliknete točku, faktor je udaljenost od bazne točke do te točke. Klik na jednu jedinicu crteža od bazne točke daje faktor 1. Obično želite upisati broj.
:::

## Poništavanje i ponavljanje

- {{key:Mod+Z}}, gumb {{ui:Poništi}} ili `U`, zatim {{key:Enter}}, poništava posljednju naredbu. Cijela naredba je jedan korak: poništavanje {{cmd:COPY}} koja je izradila pet kopija uklanja svih pet.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, gumb {{ui:Ponovi}} ili `REDO` je vraćaju.
- U povijesti piše što je poništeno („Poništeno: COPY“).

CadCraft pamti posljednjih 500 koraka. Postavke slojeva (uključeno, zamrznuto, zaključano, boja) su postavke, a ne izmjene, i ne poništavaju se.

## Proširivanje sobe

{{cmd:STRETCH}} (`S`, ili {{ui:Rastegni}}) pomiče samo ono što leži unutar prozora križanja: kutovi i krajevi linija unutar njega se pomiču, a sve ostalo ostaje na mjestu, pa soba postaje šira umjesto da se cijela pomakne.

1. Upišite `S` i pritisnite {{key:Enter}}.
2. Povucite prozor s desna nalijevo preko desnog zida, tako da obuhvati kutove zida i krajeve svega što se s njim spaja.
3. Pritisnite {{key:Enter}}.
4. Kliknite baznu točku, zatim upišite `@600,0` i pritisnite {{key:Enter}}.

Pravokutnik je širi za 600; linije koje su završavale na zidu i dalje završavaju na njemu. Luk s jednim krajem unutar prozora zadržava svoju visinu, kružnice i tekst se pomiču kad im je središte ili točka umetanja unutra, a kota mjeri svoju novu duljinu. Objekti odabrani jedan po jedan, bez prozora, jednostavno se pomiču.

Možete i prvo odabrati: povucite prozor križanja (ili laso križanja) preko zida dok ne radi nijedna naredba, zatim upišite `S`. STRETCH preuzima taj odabir i rasteže ono što drže njegovi prozori, kao da ste ih povukli na njegovom upitu.

## Niz: retci i stupci ili oko središta

{{cmd:ARRAY}} (`AR`, ili {{ui:Niz}}) kopira odabir u mreži ili u krugu.

1. Odaberite stolicu, upišite `AR` i pritisnite {{key:Enter}}. Pritisnite {{key:Enter}} za Pravokutno.
2. Pojavi se pregled s 4 stupca i 3 retka. Upišite `COU`, pritisnite {{key:Enter}}, zatim `5` za stupce i `2` za retke.
3. Upišite `S`, pritisnite {{key:Enter}}, zatim `600` između stupaca i `-900` između redaka (negativno ide prema dolje).
4. Pritisnite {{key:Enter}} za izradu kopija.

Za prsten stolica oko stola odaberite `PO` (Polarno), kliknite središte stola i postavite `I` (stavke), `F` (kut ispune: 360 za puni krug, 180 za pola) i `ROT` (zakreću li se kopije prema središtu). {{cmd:ARRAYRECT}} i {{cmd:ARRAYPOLAR}} preskaču ovo pitanje.

## Spajanje dijelova u jednu polilinija

{{cmd:JOIN}} (`J`, ili {{ui:Izmjena}} › {{ui:Više}} › {{ui:Spoji}}): odaberite linije, lukove i otvorene polilinije čiji se krajevi spajaju, i pritisnite {{key:Enter}}. Postaju jedna polilinija, zatvorena ako ide cijelim krugom, koju zatim možete odmaknuti odjednom. Linije koje leže na istom pravcu postaju jedna linija, i kad imaju praznine među sobom; lukovi jedne kružnice postaju jedan luk, ili kružnica.

## Uskladi svojstva

{{cmd:MATCHPROP}} (`MA`, ili {{ui:Izmjena}} › {{ui:Više}} › {{ui:Uskladi svojstva}}): kliknite objekt čiji izgled želite, zatim odaberite objekte koje želite promijeniti i pritisnite {{key:Enter}}. Oni preuzimaju njegov sloj i boju; tekst preuzima njegovu visinu, kota svoje mjere, a šrafura svoj uzorak. Upišite `S` (Postavke) na drugo pitanje da bilo koje od toga isključite.

## Poravnavanje objekata

**Prema točkama.** {{cmd:ALIGN}} (`AL`, ili {{ui:Izmjena}} › {{ui:Više}} › {{ui:Poravnaj}}): odaberite objekte i pritisnite {{key:Enter}}, zatim kliknite točku na njima (izvor) i mjesto na koje ona treba doći (odredište).

- Jedan par ih pomiče. Pritisnite {{key:Enter}} na upitu `Odredite drugu izvornu točku` da stanete ovdje.
- Dva para ih također zakreću, tako da linija između dviju izvornih točaka leži duž linije između dviju odredišnih točaka. CadCraft zatim pita `Skalirati objekte prema točkama poravnanja?`: `Y` ih također toliko povećava ili smanjuje.
- Treći par ih zrcali kad su njegove dvije točke na suprotnim stranama te linije.

**Rubovi i razmaci.** {{ui:Izmjena}} › {{ui:Više}} › {{ui:Poravnaj i rasporedi}} (ili `ALIGNPANEL`) otvara malu ploču nad crtežom. Odaberite objekte, zatim:

- odaberite s čime želite poravnati u {{ui:Poravnaj na}} (cijeli odabir, prvi ili posljednji odabrani objekt ili točku koju kliknete) i kliknite {{ui:Lijevo}}, {{ui:Središte}}, {{ui:Desno}}, {{ui:Gornji (T)}}, {{ui:Sredina}} ili {{ui:Donji (BO)}};
- ili odaberite {{ui:Jednaki razmaci}} ili {{ui:Jednaka središta}} i kliknite {{ui:Vodoravno}} ili {{ui:Gore-dolje}}: vanjska dva objekta ostaju, ostali se ravnomjerno raspoređuju između njih (najmanje tri objekta).

Svaki klik je jedan korak poništavanja, a odabir ostaje, pa možete isprobati drugi. Svaki objekt se računa prema svom okvirnom pravokutniku, u UCS-u kad je postavljen. U naredbenom retku isto je {{cmd:ALIGNTO}} i {{cmd:DISTRIBUTE}}.

## Brisanje i rastavljanje

- {{cmd:ERASE}} (`E`, ili {{key:Delete}}) uklanja odabrane objekte.
- {{cmd:EXPLODE}} (`X`) raščlanjuje polilniju na linije i lukove, referencu bloka na njezine objekte, a kotu na linije, strelice i tekst. Rastavljene kote više se ne mjere same.

## Česte pogreške

- **Upisivanje udaljenosti bez `@` na drugoj točki.** `600,0` je apsolutna točka 600,0, a ne „600 udesno“. Upotrijebite `@600,0`, ili samo `600` s križićem usmjerenim u pravom smjeru.
- **Zakretanje je išlo u krivom smjeru.** Pozitivni kutovi zakreću suprotno od kazaljke na satu.
- **Poništavanje je uklonilo više nego što ste očekivali.** Jedno poništavanje vraća cijelu posljednju naredbu, uključujući svaku kopiju koju je izradila.
- **Naredba nije tražila odabir objekata.** Objekti su već bili odabrani, pa ih je koristila. Najprije pritisnite {{key:Esc}} da počnete bez odabira.
