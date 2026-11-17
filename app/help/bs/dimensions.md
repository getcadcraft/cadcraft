---
title: Kotirajte plan
summary: Dodajte linearne, poravnate, ugaone, poluprečnik i prečnik kote, nizite ih s Nastavi kotu i Bazna kota, i prepisujte tekst.
keywords: kota, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, lanac, niz, anotacija, alat za kote, gdje, pronađi, traka alata, mjerenje, mm, cm, m, km, jedinice
from: 9ee65123
---

## Šta ćete napraviti

Kotiranu prostoriju: ukupnu širinu i visinu, niz kota uz jedan zid, kosi zid, zaobljeni ugao i ugao.

Prije početka, pročitajte [Postavite veličine kota](topic:dimension-settings) ako je vaš crtež velik: tekst kote je podrazumijevano visok 2.5 jedinice crteža, što je sitno u crtežu mjerenom u milimetrima. Za korake ispod, prvo upišite `DIMSCALE`, pritisnite {{key:Enter}}, upišite `50` i pritisnite {{key:Enter}}.

## Gdje su alati za kote

S meniju CadCraft (onim s kojim CadCraft počinje), alati za kote su na traci iznad crteža, u grupi {{ui:Anotacije}}: {{ui:Linearna}}, {{ui:Poravnata}}, {{ui:Ugao}}, {{ui:Poluprečnik}} i {{ui:Prečnik}}. Meni {{ui:Više}} te grupe ima {{ui:Nastavi kotu}} i {{ui:Bazna kota}}. Zadržite pokazivač iznad dugmeta da vidite šta radi.

- Uz meni {{ui:Klasični nacrt}} ili {{ui:Traka}}, otvorite karticu {{ui:Anotacija}}: alati su u njenom panelu {{ui:Kote}}. {{ui:Klasični nacrt}} takođe ima {{ui:Linearna}} na kartici {{ui:Početna}}, pod {{ui:Anotacija}}. Vidi [Meniji, tasteri i miš](topic:menus-keys-and-mouse).
- Ili upišite naredbu u komandnoj liniji ispod crteža i pritisnite {{key:Enter}}: `DLI` (linearna), `DAL` (poravnata), `DAN` (ugaona), `DRA` (poluprečnik), `DDI` (prečnik), `DCO` (nastavak), `DBA` (bazna).
- Na uskom ekranu traka alata je u jednom redu: prevucite je bočno da dođete do {{ui:Anotacije}}.

Da prikažete dužine u milimetrima, centimetrima, metrima ili kilometrima, vidi [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Nacrtajte nešto za kotiranje

1. Upišite `PL` i pritisnite {{key:Enter}}.
2. Upišite `0,0` i pritisnite {{key:Enter}}.
3. Upišite `@6000,0` i pritisnite {{key:Enter}}.
4. Upišite `@1500<60` i pritisnite {{key:Enter}}.
5. Upišite `@0,2700` i pritisnite {{key:Enter}}.
6. Upišite `@-6750,0` i pritisnite {{key:Enter}}.
7. Upišite `C` i pritisnite {{key:Enter}}. Obris se zatvara.
8. Upišite `C` i pritisnite {{key:Enter}} da započnete krug.
9. Kliknite unutar prostorije, dalje od zidova, za centar.
10. Upišite `600` i pritisnite {{key:Enter}}. Ovo je stub.
11. Kliknite {{ui:Granice}}.

## Linearna: vodoravno ili vertikalno

1. Upišite `DLI` i pritisnite {{key:Enter}}.
2. Kod `Specify first extension line origin` uhvatite donji lijevi ugao (Kraj) i kliknite.
3. Kod `Specify second extension line origin` uhvatite donji desni ugao i kliknite.
4. Pomjerite nišan ispod prostorije. Kota prati, vodoravno.
5. Kliknite da postavite liniju kote.

Istorija kaže `Dimension text = 6000`.

Gdje postavite liniju određuje smjer: ispod ili iznad daje vodoravnu kotu, lijevo ili desno vertikalnu. Da to nametnete, upišite `H` (vodoravno), `V` (vertikalno) ili `R` (rotirano, pa ugao) prije postavljanja.

:::tip
Pritisnite {{key:Enter}} na prvom upitu umjesto da birate tačku, pa kliknite liniju, luk, krug ili segment polilinije. CadCraft uzima oba kraja za vas.
:::

## Nastavak: niz kota

{{cmd:DIMCONTINUE}} ({{ui:Anotacije}} › {{ui:Više}} › {{ui:Nastavi kotu}}, ili `DCO`) nastavlja od posljednje linearne ili poravnate kote koju ste napravili, a svaka nova počinje gdje je prethodna završila.

1. Upišite `DLI` i pritisnite {{key:Enter}}.
2. Upišite `0,0` i pritisnite {{key:Enter}} za prvo ishodište.
3. Upišite `2000,0` i pritisnite {{key:Enter}} za drugo ishodište.
4. Kliknite ispod prostorije da je postavite.
5. Upišite `DCO` i pritisnite {{key:Enter}}.
6. Upišite `4500,0` i pritisnite {{key:Enter}}. Druga kota se nastavlja na prvu, na istoj liniji.
7. Uhvatite donji desni ugao i kliknite. Treća kota završava niz.
8. Pritisnite {{key:Enter}} da završite naredbu.

:::note
Ovdje su tačke upisane kao apsolutne koordinate namjerno. Tačka sa `@` broji od posljednje tačke koju ste dali, a posljednja tačka je mjesto gdje ste postavili prethodnu liniju kote, a ne kraj kote. Apsolutne tačke, hvatanja ili goli broj udaljenosti uz uključen {{ui:Ortogonalno}} sigurniji su u nizu kota.
:::

Upišite `U` i pritisnite {{key:Enter}} da vratite posljednju kotu u nizu, a da ne napustite naredbu.

## Bazna: kote poredane od jedne linije

{{cmd:DIMBASELINE}} ({{ui:Anotacije}} › {{ui:Više}} › {{ui:Bazna kota}}, ili `DBA`) mjeri svaku novu kotu od prvog ishodišta posljednje, i slaže svaku korak dalje.

1. Upišite `DLI` i pritisnite {{key:Enter}}.
2. Uhvatite donji lijevi ugao i kliknite.
3. Uhvatite gornji lijevi ugao i kliknite.
4. Pomjerite nišan lijevo od prostorije i kliknite. Pojavljuje se vertikalna kota.
5. Upišite `DBA` i pritisnite {{key:Enter}}.
6. Uhvatite gornji kraj zida pod 60 stepeni (Kraj) i kliknite. Pojavljuje se druga vertikalna kota, korak dalje od prve.
7. Pritisnite {{key:Enter}} da završite.

## Poravnata: prava dužina kose linije

1. Upišite `DAL` i pritisnite {{key:Enter}}.
2. Pritisnite {{key:Enter}} da izaberete objekat.
3. Kliknite zid pod 60 stepeni.
4. Pomaknite se prema van i kliknite da postavite.

Tekst glasi 1500: prava dužina, mjerena duž zida.

## Poluprečnik i prečnik

1. Upišite `DRA` i pritisnite {{key:Enter}}.
2. Kliknite krug stuba.
3. Pomjerite nišan. Vodilica pokazuje od centra prema nišanu.
4. Kliknite da postavite tekst.

Tekst glasi `R600`. {{cmd:DIMDIAMETER}} (`DDI`) radi isto, sa znakom ⌀ i prečnikom.

## Ugaona

Zidovi ovdje su jedna polilinija, pa mjerite ugao po njegovom vrhu. (Između dvije odvojene linije, možete kliknuti same linije.)

1. Upišite `DAN` i pritisnite {{key:Enter}}.
2. Kod `Select arc, circle or line, or Enter for a vertex` pritisnite {{key:Enter}}.
3. Kod `Specify angle vertex` uhvatite donji desni ugao i kliknite.
4. Kod `Specify first angle endpoint` uhvatite donji lijevi ugao i kliknite.
5. Kod `Specify second angle endpoint` uhvatite gornji kraj zida pod 60 stepeni i kliknite.
6. Pomjerite nišan unutar prostorije, blizu ugla, i kliknite.

Tekst glasi `120°`, unutrašnji ugao ugla. Postavljena s druge strane ugla, kota mjeri ugao s te strane. Kliknite luk na prvom upitu da kotirate ugao koji obuhvata, ili kliknite dvije linije da kotirate ugao među njima.

## Promjena teksta

Da napišete svoj tekst, upišite `T` i pritisnite {{key:Enter}} prije postavljanja kote, pa upišite tekst. U vašem tekstu, `<>` označava izmjerenu vrijednost: `<> TYP.` daje `6000 TYP.`. Pritisnite {{key:Enter}} na praznom redu da zadržite izmjerenu vrijednost.

Da promijenite postojeću kotu:

1. Kliknite je.
2. U desnom panelu upišite u {{ui:Tekst}}. Ostavite prazno za izmjerenu vrijednost.
3. Pritisnite {{key:Enter}}.

## Kote prate geometriju

Kota pamti svoje tačke. Prevucite jedno od njenih hvatišta, ili pomjerite, rotirajte ili skalirajte je zajedno s objektima koje mjeri, i ona se ponovo mjeri. Ako rastegnete geometriju bez pomjeranja kote, kota ne prati: zadržava svoje tačke.

## Česte greške

- **Tekst i strelice su sitni ili ogromni.** Postavite opštu razmjeru: vidi [Postavite veličine kota](topic:dimension-settings).
- **„Odaberite tačku unutar ugla koji želite da izmjerite.“** Tačka koju ste kliknuli za ugaonu kotu leži na jednom kraku. Pomjerite je unutar ugla.
- **Nastavak je počeo od pogrešne kote.** Uvijek nastavlja od posljednje linearne ili poravnate kote napravljene u ovoj sesiji. Prvo napravite (ili ponovo napravite) onu od koje treba nastaviti.
- **Kota je ispala vertikalno.** Postavili ste je sa strane. Upišite `H` prije postavljanja.
- **Stope i palci.** Prvo postavite format dužine crteža na {{ui:Arhitektonski}}, ili {{ui:Format}} kote u {{ui:Svojstva}}: vidi [Stope i palci u kotama](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Brojevi nisu u jedinici koju želite.** Izaberite {{ui:Jedinice u tekstu}}: vidi [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
