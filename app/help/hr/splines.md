---
title: Splineovi i polilinije: SPLINE, SPLINEDIT, PEDIT
summary: Nacrtajte glatku krivulju kroz točke ili iz kontrolnog poligona, uredite njezino prilagođavanje i kontrolne točke te uređujte polilinije (spoji, zatvori, širina, prilagodi, spline, ukloni zakrivljenost) ili pretvorite spline u polilinju.
keywords: spline, splinedit, spl, spe, pedit, pe, točke prilagodbe, kontrolne točke, težine, nurbs, uređivanje polilinije, spoji, prilagođena krivulja, ukloni zakrivljenost, pretvori u polilinju, preciznost, tangenta, krivulja, tolerancija prilagodbe
from: d31f72d8
---

## Što ćete izraditi

Krivulju kroz pet točaka, zatim istu krivulju uređenu na tri načina te polilinju izrađenu od tri linije.

## Nacrtajte spline kroz točke

1. Upišite `SPL` i pritisnite {{key:Enter}}.
2. Kliknite ili upišite točke kroz koje krivulja treba proći: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Nakon zadnje pritisnite {{key:Enter}}.
3. {{ui:Početna tangenta}}: kliknite točku prema kojoj krivulja treba krenuti ili pritisnite {{key:Enter}} da odluči sama. Isto učinite za završnu tangentu.

Krivulja prolazi kroz svaku točku. Upišite `C` umjesto {{key:Enter}} da je zatvorite (krivulja se vraća na prvu točku). {{key:U}} (`Poništi`) uklanja zadnju točku dok crtate.

### Nacrtajte iz kontrolnog poligona

Upišite `M` na prvom upitu, zatim `C` (Kontrolni vrhovi) i stupanj od 1 do 5 (3 je uobičajen). Sada su točke koje odaberete kutovi poligona koji privlači krivulju prema sebi; krivulja počinje na prvoj, a završava na zadnjoj. Zatvorena se obuhvaća oko sebe, bez kuta na spoju.

### Pretvorite polilinju u spline

Na prvom upitu upišite `O` (Objekt) i odaberite polilinije ili linije. Postaju splineovi kroz svoje vrhove; izvorni objekti nestaju.

## Uredite spline

Odaberite ga i upišite `SPE` (ili upišite `SPE` i kliknite na njega). Hvatišta prikazuju točke prilagodbe (ili kontrolne točke splinea koji ih nema): povucite jednu da preoblikujete krivulju. Na upitu:

- **Podaci prilagodbe** (spline nacrtan kroz točke): `A` dodaje točku prilagodbe (kliknite gdje), `D` briše jednu (kliknite blizu nje), `M` pomiče jednu (kliknite blizu nje, zatim kliknite na novo mjesto), `T` postavlja završne tangente, `P` briše točke prilagodbe, pa se spline od tada uređuje po kontrolnim točkama.
- **Uredi vrh**: `A` dodaje kontrolnu točku bez mijenjanja krivulje, `M` pomiče jednu, `W` daje jednoj **težinu** (iznad 1 privlači krivulju bliže sebi, ispod 1 je pušta).
- **Otvori** ili **Zatvori**, i **Obrni** (krivulja ide u drugom smjeru).
- **pretvori u Polilinju** (`P`): spline postaje polilinija; preciznost je broj segmenata po rasponu (10 je uobičajeno).
- **Poništi** (`U`) uklanja zadnju promjenu; **Izlaz** (`X`) završava.

{{ui:Svojstva}} prikazuje stupanj splinea, koliko ima točaka prilagodbe i kontrolnih točaka, njegovu duljinu i omogućuje otvaranje ili zatvaranje.

## Uredite polilinju

Odaberite polilinju i upišite `PE`. Linija, luk ili spline koje odaberete prvo se nude kao polilinija za pretvaranje (spline traži preciznost).

- **Zatvori** / **Otvori** spaja ili razdvaja krajeve.
- **Spoji** dodaje linije, lukove i polilinije čiji krajevi dodiruju kraj polilinije. `Udaljenost tolerancije` je koliko krajevi smiju biti razmaknuti i još se spajati (0 znači da se moraju dodirnuti).
- **Širina** daje cijeloj polilniji jednu širinu (0 je uklanja).
- **Prilagodi** zamjenjuje polilinju glatkom krivuljom koja prolazi kroz njezine vrhove; **Spline** kubičnim B-splineom koji ih slijedi (počinje i završava na prvom i zadnjem vrhu te ostaje blizu ostalih). Obje postaju polilinija kratkih segmenata, a izvorni kutovi se čuvaju, pa ih **Ukloni zakrivljenost** vraća.
- **Generiranje tipa linije** kaže hoće li isprekidana vrsta linije teći duž cijele polilinije ili počinje ponovo na svakom vrhu.
- **Obrni** mijenja redoslijed njezinih vrhova. **Više** (`M` na prvom upitu) uređuje nekoliko polilinija s istim opcijama.

Uređivanje vrhova polilinije u {{ui:Svojstva}} ili s hvatištima ostaje kakvo je bilo: PEDIT nema uređivač vrhova.

## U datotekama

DWG i DXF 2000 čuvaju spline kao spline: stupanj, kontrolne točke, čvorove, težine, točke prilagodbe i tangente. Spline koji otvorite i ne promijenite zapisuje se natrag točno kakav je bio. DXF R12 nema spline: sprema se kao polilinija duž krivulje, a povijest kaže koliko ih je.

Odmakni, skrati, produži, zaobli, prekini i spoji ne rade na splineovima. {{cmd:EXPLODE}} spline ili {{cmd:PEDIT}} ga da dobijete polilinju koju ta naredba prima.

## Česte pogreške

- **Krivulja se previše izvija između bliskih točaka.** Krivulja kroz točke savija se tamo gdje se savijaju točke. Koristite manje točaka ili kontrolni poligon.
- **„To nije spline."** SPLINEDIT prima samo splineove; {{cmd:PEDIT}} uređuje polilinije.
- **Zatvoreni spline s prilagodbom ima malo drugačiji oblik u drugom programu.** CadCraft ga zatvara jednim glatkim spojem u prvoj točki; drugi program ga može zatvoriti periodičnom krivuljom. Zatvoreni spline s kontrolnim točkama isti je u oba.
