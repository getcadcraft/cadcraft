---
title: Splajnovi i polilinije: SPLINE, SPLINEDIT, PEDIT
summary: Nacrtaj glatku krivu kroz tačke ili iz kontrolnog poligona, uredi njen oblik i kontrolne tačke, i uredi polilinije (spoji, zatvori, širina, uklapanje, splajn, ukloni krivinu) ili pretvori splajn u poliliniju.
keywords: splajn, splinedit, spl, spe, pedit, pe, tačke prolaza, kontrolne tačke, težine, nurbs, uređivanje polilinije, spajanje, kriva uklapanja, uklanjanje krivine, pretvaranje u poliliniju, preciznost, tangenta, kriva, tolerancija uklapanja
from: d31f72d8
---

## Šta ćeš napraviti

Krivu kroz pet tačaka, zatim istu krivu uređenu na tri načina, i polilniju napravljenu od tri linije.

## Nacrtaj splajn kroz tačke

1. Ukucaj `SPL` i pritisni {{key:Enter}}.
2. Klikni ili ukucaj tačke kroz koje kriva treba da prolazi: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Pritisni {{key:Enter}} posle poslednje.
3. {{ui:Start tangent}}: klikni tačku u kojoj kriva treba da kreće, ili pritisni {{key:Enter}} da ona odluči. Isto uradi za krajnju tangentu.

Kriva prolazi kroz svaku tačku. Ukucaj `C` umesto {{key:Enter}} da je zatvoriš (kriva se vraća na prvu tačku). {{key:U}} (`Opozovi`) uklanja poslednju tačku dok crtaš.

### Nacrtaj iz kontrolnog poligona

Ukucaj `M` na prvom upitu, pa `C` (Kontrolna temena) i stepen od 1 do 5 (3 je uobičajen). Sada su tačke koje izabereš temena poligona koji privlači krivu ka sebi; kriva počinje na prvom, a završava se na poslednjem. Zatvorena kriva se obavija oko, bez temena na spoju.

### Pretvori polilniju u splajn

Na prvom upitu ukucaj `O` (Objekat) i izaberi polilinije ili linije. Postaju splajnovi kroz svoja temena; originali nestaju.

## Uredi splajn

Izaberi ga i ukucaj `SPE` (ili ukucaj `SPE` pa klikni na njega). Hvataljke prikazuju tačke prolaza (ili kontrolne tačke splajna koji ih nema): prevuci jednu da preoblikuješ krivu. Na upitu:

- **Podaci tačaka prolaza** (splajn nacrtan kroz tačke): `A` dodaje tačku prolaza (klikni gde), `D` briše jednu (klikni blizu nje), `M` pomera jednu (klikni blizu nje, pa klikni novo mesto), `T` postavlja krajnje tangente, `P` briše tačke prolaza, pa se splajn od tada uređuje preko svojih kontrolnih tačaka.
- **Uredi teme**: `A` dodaje kontrolnu tačku bez promene krive, `M` pomera jednu, `W` daje jednoj **težinu** (iznad 1 privlači krivu bliže sebi, ispod 1 je pušta).
- **Otvori** ili **Zatvori**, i **Obrni** (kriva ide u suprotnom smeru).
- **pretvori u poliliniju** (`P`): splajn postaje polilinija; preciznost je broj segmenata po svakom rasponu (10 je uobičajeno).
- **Opozovi** uzima poslednju promenu nazad; **Izlaz (X)** završava.

{{ui:Properties}} prikazuje stepen splajna, koliko ima tačaka prolaza i kontrolnih tačaka, njegovu dužinu, i omogućava da ga otvoriš ili zatvoriš.

## Uredi polilniju

Izaberi poliliniju i ukucaj `PE`. Linija, luk ili splajn koji izabereš prvo se nudi kao polilinija u koju se pretvara (splajn traži preciznost).

- **Zatvori** / **Otvori** spaja ili razdvaja krajeve.
- **Spoji** dodaje linije, lukove i polilinije čiji krajevi se spajaju sa krajem polilinije. `Rastojanje tolerancije` je koliko krajevi smeju biti udaljeni, a da se još spoje (0 znači da se moraju dodirivati).
- **Širina** daje celoj polilniji jednu širinu (vrednost 0 je ukida).
- **Uklapanje** zamenjuje poliliniju glatkom krivom koja prolazi kroz njena temena; **Splajn** kubičnim B-splajnom koji ih prati (počinje i završava se na prvom i poslednjem temenu i ostaje blizu ostalih). Oba postaju polilinija od kratkih segmenata, a originalni uglovi se čuvaju, pa ih **Ukloni krivinu** vraća.
- **Generisanje tipa linije** kaže da li isprekidani tip linije teče duž cele polilinije ili počinje iznova na svakom temenu.
- **Obrni** menja redosled njenih temena. **Više** (`M` na prvom upitu) menja više polilinija istim opcijama.

Uređivanje temena polilinije u {{ui:Properties}} ili pomoću hvataljki ostaje kakvo je bilo: PEDIT nema uređivač temena.

## U fajlovima

DWG i DXF 2000 čuvaju splajn kao splajn: stepen, kontrolne tačke, čvorove, težine, tačke prolaza i tangente. Splajn koji otvoriš i ne promeniš upisuje se nazad tačno kao što je došao. DXF R12 nema splajn: čuva se kao polilinija duž krive, a istorija kaže koliko ih je.

Ofset, presecanje, produženje, zaobljenje, prelom i spajanje ne rade na splajnovima. {{cmd:EXPLODE}} rastavlja splajn, ili {{cmd:PEDIT}} ga pretvara, da dobiješ polilinije koje te komande prihvataju.

## Česte greške

- **Kriva prebacuje preko između bliskih tačaka.** Kriva kroz tačke savija se tamo gde se savijaju tačke. Koristi manje tačaka ili kontrolni poligon.
- **„That is not a spline.“** SPLINEDIT prihvata samo splajnove; {{cmd:PEDIT}} uređuje polilinije.
- **Zatvoren splajn sa tačkama uklapanja ima malo drugačiji oblik u drugom programu.** CadCraft ga zatvara jednim glatkim spojem u prvoj tački, a drugi program ga može zatvoriti periodičnom krivom. Zatvoren splajn sa kontrolnim tačkama je isti u oba.
