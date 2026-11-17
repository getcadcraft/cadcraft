---
title: Kotiranje plana
summary: Dodaj linearne, poravnate, uglovne, poluprečnik i prečnik kote, ulančaj ih pomoću Nastavi i Osnova i prepiši tekst.
keywords: kota, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, lanac, niz, anotiraj, alat za kotiranje, gde, pronađi, traka alata, izmeri, mm, cm, m, km, jedinice
from: 9ee65123
---

## Šta ćeš napraviti

Kotiranu prostoriju: ukupnu širinu i visinu, niz kota duž jednog zida, kosi zid, zakrivljeni ugao i ugao.

Pre početka, pročitaj [Podešavanje veličina kota](topic:dimension-settings) ako je crtež velik: tekst kote je podrazumevano visok 2.5 jedinice crteža, što je sitno u crtežu merenom u milimetrima. Za korake ispod, prvo ukucaj `DIMSCALE`, pritisni {{key:Enter}}, ukucaj `50` i pritisni {{key:Enter}}.

## Gde su alati za kotiranje

Sa stilom menija CadCraft (onim sa kojim CadCraft počinje), alati za kotiranje nalaze se na traci alata iznad crteža, u grupi {{ui:Anotacije}}: {{ui:Linearna}}, {{ui:Poravnata}}, {{ui:Ugao}}, {{ui:Poluprečnik}} i {{ui:Prečnik}}. Meni {{ui:Više}} te grupe ima {{ui:Nastavi kotu}} i {{ui:Kota od osnove}}. Zadrži pokazivač iznad dugmeta da vidiš šta radi.

- Sa stilom menija {{ui:Klasičan crtački}} ili {{ui:Traka}}, otvori karticu {{ui:Anotacije}}: alati su u njenom panelu {{ui:Kote}}. {{ui:Klasičan crtački}} takođe ima {{ui:Linearna}} na kartici {{ui:Početna}}, pod {{ui:Anotacija}}. Vidi [Meniji, tasteri i miš](topic:menus-keys-and-mouse).
- Ili ukucaj komandu u komandnoj liniji ispod crteža i pritisni {{key:Enter}}: `DLI` (linearna), `DAL` (poravnata), `DAN` (uglovna), `DRA` (poluprečnik), `DDI` (prečnik), `DCO` (nastavi), `DBA` (od osnove).
- Na uskom ekranu traka alata je u jednom redu: prevuci je u stranu da stigneš do {{ui:Anotacije}}.

Da dužine prikažeš u milimetrima, centimetrima, metrima ili kilometrima, vidi [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Nacrtaj nešto za kotiranje

1. Ukucaj `PL` i pritisni {{key:Enter}}.
2. Ukucaj `0,0` i pritisni {{key:Enter}}.
3. Ukucaj `@6000,0` i pritisni {{key:Enter}}.
4. Ukucaj `@1500<60` i pritisni {{key:Enter}}.
5. Ukucaj `@0,2700` i pritisni {{key:Enter}}.
6. Ukucaj `@-6750,0` i pritisni {{key:Enter}}.
7. Ukucaj `C` i pritisni {{key:Enter}}. Obris se zatvara.
8. Ukucaj `C` i pritisni {{key:Enter}} da započneš krug.
9. Klikni unutar prostorije, daleko od zidova, za centar.
10. Ukucaj `600` i pritisni {{key:Enter}}. Ovo je stub.
11. Klikni {{ui:Granice}}.

## Linearna: vodoravna ili uspravna

1. Ukucaj `DLI` i pritisni {{key:Enter}}.
2. Kod `Specify first extension line origin` uhvati donji levi ugao (Kraj) i klikni.
3. Kod `Specify second extension line origin` uhvati donji desni ugao i klikni.
4. Pomeri ukrsni kursor ispod prostorije. Kota prati, vodoravno.
5. Klikni da postaviš liniju kote.

Istorija kaže `Dimension text = 6000`.

Mesto na kome postaviš liniju određuje pravac: ispod ili iznad daje vodoravnu kotu, levo ili desno daje uspravnu. Da je nametneš, ukucaj `H` (vodoravno), `V` (uspravno) ili `R` (zarotirano, pa ugao) pre postavljanja.

:::tip
Pritisni {{key:Enter}} na prvom upitu umesto biranja tačke, pa klikni liniju, luk, krug ili segment polilinije. CadCraft uzima oba kraja umesto tebe.
:::

## Nastavi: niz kota

{{cmd:DIMCONTINUE}} ({{ui:Anotacije}} › {{ui:Više}} › {{ui:Nastavi kotu}}, ili `DCO`) nastavlja od poslednje linearne ili poravnate kote koju si napravio, pri čemu svaka nova počinje tamo gde se prethodna završila.

1. Ukucaj `DLI` i pritisni {{key:Enter}}.
2. Ukucaj `0,0` i pritisni {{key:Enter}} za prvu tačku.
3. Ukucaj `2000,0` i pritisni {{key:Enter}} za drugu tačku.
4. Klikni ispod prostorije da je postaviš.
5. Ukucaj `DCO` i pritisni {{key:Enter}}.
6. Ukucaj `4500,0` i pritisni {{key:Enter}}. Druga kota se nadovezuje na prvu, na istoj liniji.
7. Uhvati donji desni ugao i klikni. Treća kota završava niz.
8. Pritisni {{key:Enter}} da završiš komandu.

:::note
Ovde su tačke ukucane kao apsolutne koordinate namerno. Tačka sa `@` računa od poslednje tačke koju si dao, a poslednja tačka je mesto gde si postavio prethodnu liniju kote, a ne kraj kote. Apsolutne tačke, hvatanja ili goli broj sa uključenim {{ui:Ortogonalno}} sigurniji su u nizu kota.
:::

Ukucaj `U` i pritisni {{key:Enter}} da poništiš poslednju kotu u nizu bez napuštanja komande.

## Osnova: kote složene iz jedne linije

{{cmd:DIMBASELINE}} ({{ui:Anotacije}} › {{ui:Više}} › {{ui:Kota od osnove}}, ili `DBA`) meri svaku novu kotu od prve tačke poslednje, i slaže svaku još korak dalje.

1. Ukucaj `DLI` i pritisni {{key:Enter}}.
2. Uhvati donji levi ugao i klikni.
3. Uhvati gornji levi ugao i klikni.
4. Pomeri ukrsni kursor levo od prostorije i klikni. Pojavljuje se uspravna kota.
5. Ukucaj `DBA` i pritisni {{key:Enter}}.
6. Uhvati gornji kraj zida pod 60 stepeni (Kraj) i klikni. Pojavljuje se druga uspravna kota, korak dalje od prve.
7. Pritisni {{key:Enter}} da završiš.

## Poravnata: prava dužina kosne linije

1. Ukucaj `DAL` i pritisni {{key:Enter}}.
2. Pritisni {{key:Enter}} da izabereš objekat.
3. Klikni zid pod 60 stepeni.
4. Pomeri se napolje i klikni da postaviš.

Tekst glasi 1500: prava dužina, izmerena duž zida.

## Poluprečnik i prečnik

1. Ukucaj `DRA` i pritisni {{key:Enter}}.
2. Klikni krug stuba.
3. Pomeri ukrsni kursor. Vođica pokazuje od centra prema kursoru.
4. Klikni da postaviš tekst.

Tekst glasi `R600`. {{cmd:DIMDIAMETER}} (`DDI`) radi isto sa znakom ⌀ i prečnikom.

## Uglovna

Zidovi su ovde jedna polilinija, pa ugao merimo po njegovom vrhu. (Između dve odvojene linije možeš kliknuti same linije.)

1. Ukucaj `DAN` i pritisni {{key:Enter}}.
2. Kod `Select arc, circle or line, or Enter for a vertex` pritisni {{key:Enter}}.
3. Kod `Specify angle vertex` uhvati donji desni ugao i klikni.
4. Kod `Specify first angle endpoint` uhvati donji levi ugao i klikni.
5. Kod `Specify second angle endpoint` uhvati gornji kraj zida pod 60 stepeni i klikni.
6. Pomeri ukrsni kursor unutar prostorije, blizu ugla, i klikni.

Tekst glasi `120°`, unutrašnji ugao ugla. Postavljena sa druge strane ugla, kota meri ugao s te strane. Klikni luk na prvom upitu da kotiraš ugao koji obuhvata, ili klikni dve linije da kotiraš ugao između njih.

## Promena teksta

Da napišeš sopstveni tekst, ukucaj `T` i pritisni {{key:Enter}} pre postavljanja kote, pa ukucaj tekst. U tvom tekstu, `<>` stoji za izmerenu vrednost: `<> TYP.` daje `6000 TYP.`. Pritisni {{key:Enter}} na praznom redu da zadržiš izmerenu vrednost.

Da promeniš postojeću kotu:

1. Klikni je.
2. U desnom panelu, ukucaj u {{ui:Tekst}}. Ostavi prazno za izmerenu vrednost.
3. Pritisni {{key:Enter}}.

## Kote prate geometriju

Kota pamti svoje tačke. Prevuci jednu od njenih hvataljki, ili pomeri, rotiraj ili skaliraj je zajedno sa objektima koje meri, pa ona ponovo meri. Ako razvučeš geometriju bez pomeranja kote, kota ne prati: zadržava svoje tačke.

## Česte greške

- **Tekst i strelice su sitni ili ogromni.** Postavi ukupnu razmeru: vidi [Podešavanje veličina kota](topic:dimension-settings).
- **„Izaberi tačku unutar ugla koji želiš da izmeriš.“** Tačka koju si kliknuo za uglovnu kotu leži na jednom kraku. Pomeri je unutar ugla.
- **Nastavi je krenulo od pogrešne kote.** Uvek nastavlja od poslednje linearne ili poravnate kote napravljene u ovoj sesiji. Prvo napravi (ili ponovo napravi) onu od koje treba nastaviti.
- **Kota je ispala uspravna.** Postavio si je sa strane. Ukucaj `H` pre postavljanja.
- **Stope i inči.** Prvo postavi format dužine crteža na {{ui:Arhitektonski}}, ili {{ui:Format}} kote u {{ui:Svojstva}}: vidi [Stope i inči u kotama](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Brojevi nisu u jedinici koju želiš.** Izaberi {{ui:Jedinice u tekstu}}: vidi [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
