---
title: Kotiranje tlocrta
summary: Dodajte linearne, poravnate, kutne, radijalne i promjerne kote, nižite ih naredbama Lančana kota i Bazna kota te promijenite tekst.
keywords: kota, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, lanac, niz, bilješke, alat za kotiranje, gdje, pronađi, traka alata, izmjeri, mm, cm, m, km, jedinice
from: 9ee65123
---

## Što ćete izraditi

Kotiranu prostoriju: ukupnu širinu i visinu, niz kota uz jedan zid, nakošen zid, zakrivljeni kut i kut.

Prije početka pročitajte [Postavljanje veličina kota](topic:dimension-settings) ako je crtež velik: tekst kote je zadano visok 2.5 jedinice crteža, što je sitno u crtežu mjerenom u milimetrima. Za korake niže najprije upišite `DIMSCALE`, pritisnite {{key:Enter}}, upišite `50` i pritisnite {{key:Enter}}.

## Gdje su alati za kotiranje

S izbornim stilom CadCraft-a (onim s kojim CadCraft započinje), alati za kotiranje su na alatnoj traci iznad crteža, u grupi {{ui:Bilješke}}: {{ui:Linearna}}, {{ui:Poravnana}}, {{ui:Kut}}, {{ui:Radijus}} i {{ui:Promjer}}. Izbornik {{ui:Više}} te grupe ima {{ui:Lančana kota}} i {{ui:Bazna kota}}. Zadržite pokazivač iznad gumba da vidite što radi.

- S izbornim stilom {{ui:Klasično crtanje}} ili {{ui:Vrpca}} otvorite karticu {{ui:Bilješke}}: alati su u njezinom panelu {{ui:Kote}}. {{ui:Klasično crtanje}} također ima {{ui:Linearna}} na kartici {{ui:Početna}}, pod {{ui:Bilješke}}. Vidi [Izbornici, tipke i miš](topic:menus-keys-and-mouse).
- Ili upišite naredbu u naredbeni redak ispod crteža i pritisnite {{key:Enter}}: `DLI` (linearna), `DAL` (poravnata), `DAN` (kutna), `DRA` (radijalna), `DDI` (promjerna), `DCO` (lančana), `DBA` (bazna).
- Na uskom zaslonu alatna traka je u jednom redu: prijeđite prstom ulijevo-udesno da dođete do {{ui:Bilješke}}.

Da duljine prikažete u milimetrima, centimetrima, metrima ili kilometrima, vidi [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Nacrtajte nešto za kotiranje

1. Upišite `PL` i pritisnite {{key:Enter}}.
2. Upišite `0,0` i pritisnite {{key:Enter}}.
3. Upišite `@6000,0` i pritisnite {{key:Enter}}.
4. Upišite `@1500<60` i pritisnite {{key:Enter}}.
5. Upišite `@0,2700` i pritisnite {{key:Enter}}.
6. Upišite `@-6750,0` i pritisnite {{key:Enter}}.
7. Upišite `C` i pritisnite {{key:Enter}}. Obris se zatvara.
8. Upišite `C` i pritisnite {{key:Enter}} za početak kružnice.
9. Kliknite unutar prostorije, dalje od zidova, za središte.
10. Upišite `600` i pritisnite {{key:Enter}}. To je stup.
11. Kliknite {{ui:Opseg}}.

## Linearna: vodoravna ili okomita

1. Upišite `DLI` i pritisnite {{key:Enter}}.
2. Na `Specify first extension line origin` uhvatite donji lijevi kut (Endpoint) i kliknite.
3. Na `Specify second extension line origin` uhvatite donji desni kut i kliknite.
4. Pomaknite nitnicu ispod prostorije. Kota prati, vodoravno.
5. Kliknite da postavite kotnu liniju.

Povijest kaže `Dimension text = 6000`.

Gdje postavite liniju određuje smjer: ispod ili iznad daje vodoravnu kotu, lijevo ili desno daje okomitu. Da prisilite smjer, upišite `H` (vodoravno), `V` (okomito) ili `R` (zakrenuto, pa kut) prije postavljanja.

:::tip
Pritisnite {{key:Enter}} na prvom upitu umjesto da birate točku, zatim kliknite liniju, luk, kružnicu ili segment polilinije. CadCraft uzima oba kraja umjesto vas.
:::

## Lančana kota: niz kota

{{cmd:DIMCONTINUE}} ({{ui:Bilješke}} › {{ui:Više}} › {{ui:Lančana kota}}, ili `DCO`) nastavlja od zadnje linearne ili poravnate kote koju ste napravili, a svaka nova počinje tamo gdje je završila prethodna.

1. Upišite `DLI` i pritisnite {{key:Enter}}.
2. Upišite `0,0` i pritisnite {{key:Enter}} za prvo ishodište.
3. Upišite `2000,0` i pritisnite {{key:Enter}} za drugo ishodište.
4. Kliknite ispod prostorije da je postavite.
5. Upišite `DCO` i pritisnite {{key:Enter}}.
6. Upišite `4500,0` i pritisnite {{key:Enter}}. Druga kota slijedi od prve, na istoj liniji.
7. Uhvatite donji desni kut i kliknite. Treća dovršava niz.
8. Pritisnite {{key:Enter}} za završetak naredbe.

:::note
Ovdje su točke namjerno upisane kao apsolutne koordinate. `@` točka računa od zadnje točke koju ste dali, a zadnja točka je mjesto gdje ste postavili prethodnu kotnu liniju, a ne kraj kote. Apsolutne točke, hvatanja ili goli broj uz uključen {{ui:Orto}} sigurniji su u nizu kota.
:::

Upišite `U` i pritisnite {{key:Enter}} da poništite zadnju kotu u nizu, bez napuštanja naredbe.

## Bazna kota: kote poslagane od jedne linije

{{cmd:DIMBASELINE}} ({{ui:Bilješke}} › {{ui:Više}} › {{ui:Bazna kota}}, ili `DBA`) mjeri svaku novu kotu od prvog ishodišta zadnje i slaže svaku korak dalje van.

1. Upišite `DLI` i pritisnite {{key:Enter}}.
2. Uhvatite donji lijevi kut i kliknite.
3. Uhvatite gornji lijevi kut i kliknite.
4. Pomaknite nitnicu lijevo od prostorije i kliknite. Pojavljuje se okomita kota.
5. Upišite `DBA` i pritisnite {{key:Enter}}.
6. Uhvatite gornji kraj zida od 60 stupnjeva (Endpoint) i kliknite. Pojavljuje se druga okomita kota, korak dalje od prve.
7. Pritisnite {{key:Enter}} za završetak.

## Poravnata: prava duljina nagnute linije

1. Upišite `DAL` i pritisnite {{key:Enter}}.
2. Pritisnite {{key:Enter}} da odaberete objekt.
3. Kliknite zid od 60 stupnjeva.
4. Pomaknite van i kliknite za postavljanje.

Tekst glasi 1500: prava duljina, izmjerena duž zida.

## Radijus i promjer

1. Upišite `DRA` i pritisnite {{key:Enter}}.
2. Kliknite kružnicu stupa.
3. Pomaknite nitnicu. Vodilica pokazuje od središta prema nitnici.
4. Kliknite da postavite tekst.

Tekst glasi `R600`. {{cmd:DIMDIAMETER}} (`DDI`) radi isto, sa znakom ⌀ i promjerom.

## Kutna

Zidovi ovdje su jedna polilinija, pa mjerite kut po njegovu vrhu. (Između dviju odvojenih linija možete umjesto toga kliknuti same linije.)

1. Upišite `DAN` i pritisnite {{key:Enter}}.
2. Na `Select arc, circle or line, or Enter for a vertex` pritisnite {{key:Enter}}.
3. Na `Specify angle vertex` uhvatite donji desni kut i kliknite.
4. Na `Specify first angle endpoint` uhvatite donji lijevi kut i kliknite.
5. Na `Specify second angle endpoint` uhvatite gornji kraj zida od 60 stupnjeva i kliknite.
6. Pomaknite nitnicu unutar prostorije, blizu kuta, i kliknite.

Tekst glasi `120°`, unutarnji kut ugla. Postavljena s druge strane kuta, kota mjeri kut s te strane. Kliknite luk na prvom upitu da kotirate kut koji zatvara, ili kliknite dvije linije da kotirate kut između njih.

## Promjena teksta

Za pisanje vlastitog teksta upišite `T` i pritisnite {{key:Enter}} prije postavljanja kote, zatim upišite tekst. U vašem tekstu `<>` označava izmjerenu vrijednost: `<> TYP.` daje `6000 TYP.`. Pritisnite {{key:Enter}} na praznom retku da zadržite izmjerenu vrijednost.

Za promjenu postojeće kote:

1. Kliknite je.
2. U desnom panelu upišite u {{ui:Tekst}}. Ostavite prazno za izmjerenu vrijednost.
3. Pritisnite {{key:Enter}}.

## Kote prate geometriju

Kota pamti svoje točke. Povucite jednu od njezinih ručki ili pomaknite, zakrenite ili skalirajte je s objektima koje mjeri, i ponovno mjeri. Ako razvučete geometriju bez pomicanja kote, kota ne prati: zadržava svoje točke.

## Česte greške

- **Tekst i strelice su sitni ili ogromni.** Postavite ukupno mjerilo: vidi [Postavljanje veličina kota](topic:dimension-settings).
- **„Odaberite točku unutar kuta koji želite izmjeriti.“** Točka koju ste kliknuli za kutnu kotu leži na jednom od krakova. Pomaknite je unutar kuta.
- **Lančana kota je krenula od krive kote.** Uvijek nastavlja od zadnje linearne ili poravnate kote napravljene u ovoj sesiji. Prvo napravite (ili ponovno napravite) onu od koje treba nastaviti.
- **Kota je ispala okomita.** Postavili ste je sa strane. Upišite `H` prije postavljanja.
- **Stope i inči.** Najprije postavite oblik duljine crteža na {{ui:Arhitektonsko}}, ili {{ui:Oblik}} kote u {{ui:Svojstva}}: vidi [Stope i inči u kotama](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Brojevi nisu u jedinici koju želite.** Odaberite {{ui:Jedinice u tekstu}}: vidi [Kote u mm, cm, m ili km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
