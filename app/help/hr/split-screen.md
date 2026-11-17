---
title: Podijelite zaslon
summary: Prikažite crtež u dva, tri ili četiri okna sa svojim zumom, stavite list pored modela i otvorite nekoliko crteža jedan do drugog.
keywords: podijeli, podijeljeni zaslon, okna, vports, viewports, poslagano, jedan do drugog, složeno, dva crteža, kartice, kartice dokumenata, usporedi, razdjelnik, model i list, nekoliko crteža, otvoreni crteži
from: ee2f034b
---

## Što ćete naučiti

Kako gledati jedan crtež u nekoliko okana istodobno, svako sa svojim zumom, te kako otvoriti nekoliko crteža i gledati ih jedan do drugog.

## Podijelite jedan crtež u okna

1. Otvorite crtež ili nacrtajte nekoliko linija i kružnica.
2. Otvorite {{ui:Pogled}} › {{ui:Više}} i odaberite {{ui:Podijeli jedno do drugog}} (ili upišite {{cmd:VPORTS}}, zatim `2`, pa {{key:Enter}}).

Površina crtanja se dijeli na dva okna, oba prikazuju isti pogled. Aktivno okno ima plavi okvir i dobiva križić.

3. Kliknite u drugo okno. Ono postaje aktivno. (Taj prvi klik samo mijenja okno; kliknite ponovo za odabir.)
4. Zumirajte kotačićem miša. Zumira samo to okno.
5. Povucite liniju između okana da jedno učinite širim. {{key:Home}} na fokusiranom razdjelniku vraća ga na sredinu.

{{cmd:VPORTS}} prima i `3` (dva okna s jedne strane i veliko s druge: `L` ili `R`), `4` te `SI` za ponovo jedno okno. Pogled aktivnog okna tada ispunjava površinu. Na listu {{cmd:VPORTS}} umjesto toga dodaje viewport na list (kao u AutoCADu); tamo upišite {{cmd:SPLIT}} ili koristite izbornik Pogled.

## Crtajte iz jednog okna u drugo

1. Podijelite jedno do drugog i zumirajte svako okno na drugi kut crteža.
2. Upišite `L` i pritisnite {{key:Enter}}, zatim kliknite prvu točku u lijevom oknu.
3. Kliknite jednom u desno okno da ono postane aktivno, zatim kliknite drugu točku tamo.

Linija ide između dva mjesta. Naredba ide dalje dok mijenjate okna, a gumena traka se prikazuje u svakom oknu.

## Model uz list

1. Podijelite jedno do drugog.
2. Kliknite desno okno, zatim kliknite karticu lista ispod crteža.

Desno okno prikazuje list; lijevo i dalje prikazuje model. Svako okno zadržava svoj prostor, pa možete crtati na modelu i gledati kako viewport lista prati.

## Nekoliko crteža u jednom prozoru

1. Otvorite crtež. Zatim otvorite drugi (ili pritisnite {{ui:Nova}}).

Svaki crtež se otvara u svojoj kartici iznad površine crtanja. Kliknite karticu za prebacivanje; naredbeni redak, paneli i poništavanje prate crtež na koji se prebacite. {{key:Mod+C}} u jednom crtežu i {{key:Mod+V}} u drugom kopiraju objekte između njih.

2. Kliknite {{ui:Posloži otvorene crteže jedan do drugog}} (ikona podjele na kraju kartica) ili ikonu slaganja pored nje.

Svako okno sada prikazuje jedan od otvorenih crteža, najviše četiri. Kliknite okno da radite u tom crtežu.

3. Kliknite {{ui:×}} na kartici da zatvorite taj crtež. Ako ima nespremljene promjene, CadCraft prvo pita.

:::tip
Otvaranje crteža dok prozor sadrži samo novi, netaknuti crtež koristi tu karticu umjesto dodavanja nove.
:::

## Pomicanje i zumiranje zajedno

Za usporedbu dviju revizija, posložite ih jedan do drugog, zatim kliknite {{ui:Poveži prikaze ploča}} (ikona veze na kraju kartica), ili to odaberite u {{ui:Pogled}} › {{ui:Više}}, ili upišite {{cmd:LINKVIEWS}} i `ON`. Sada pomak ili zum u jednom oknu pomiče sva okna koja prikazuju model (ili sva okna koja prikazuju list) na isto mjesto, pa dva crteža ostaju poravnata. {{cmd:LINKVIEWS}} `OFF` ponovno omogućuje svakom oknu da se miče samostalno.

## Česte pogreške

- **Moj klik nije ništa učinio.** Učinio je to okno aktivnim. Kliknite ponovo za odabir ili crtanje.
- **Kotačić je zumirao krivo okno.** Kotačić zumira okno pod pokazivačem i čini ga aktivnim.
- **Okna su se vratila na jedno.** Otvaranje crteža prikazuje ga kako je spremljen; crtež spremljen bez okana otvara se u jednom.
- **Pri napuštanju stranice upozorava na nespremljene promjene koje ne vidim.** Druga kartica sadrži crtež s promjenama. Prebacite se na nju i spremite ili napustite bez spremanja.
