---
title: Krive i polilinije: SPLINE, SPLINEDIT, PEDIT
summary: Nacrtaj glatku krivu kroz tačke ili iz kontrolnog poligona, uredi njeno prilagođavanje i kontrolne tačke, te uredi polilinije (spoji, zatvori, širina, prilagodi, spline, ukloni zakrivljenje) ili pretvori spline u polilinije.
keywords: spline, splinedit, spl, spe, pedit, pe, tačke prilagođavanja, kontrolne tačke, težine, nurbs, uređivanje polilinije, spajanje, kriva prilagođavanja, ukloni zakrivljenje, pretvori u polilinije, preciznost, tangenta, kriva, tolerancija prilagođavanja
from: d31f72d8
---

## Šta ćeš napraviti

Krivu kroz pet tačaka, zatim istu krivu uređenu na tri načina, i polilniju napravljenu od tri linije.

## Nacrtaj spline kroz tačke

1. Upiši `SPL` i pritisni {{key:Enter}}.
2. Klikni ili upiši tačke kroz koje kriva treba da prolazi: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Pritisni {{key:Enter}} poslije posljednje.
3. {{ui:Početna tangenta}}: klikni tačku prema kojoj kriva treba da polazi, ili pritisni {{key:Enter}} da odluči sama. Isto uradi i za krajnju tangentu.

Kriva prolazi kroz svaku tačku. Upiši `C` umjesto {{key:Enter}} da je zatvoriš (kriva se vraća na prvu tačku). {{key:U}} (`Poništi`) uklanja posljednju tačku dok crtaš.

### Nacrtaj iz kontrolnog poligona

Upiši `M` na prvom upitu, pa `C` (Kontrolni vrhovi) i stepen od 1 do 5 (3 je uobičajeno). Sad su tačke koje odabereš uglovi poligona koji privlači krivu prema sebi; kriva počinje na prvoj, a završava na posljednjoj. Zatvorena se obavija oko sebe, bez ugla na spoju.

### Pretvori polilinu u spline

Na prvom upitu upiši `O` (Objekat) i odaberi polilinije ili linije. Postaju splinovi kroz svoje vrhove; originali nestaju.

## Uredi spline

Odaberi ga i upiši `SPE` (ili upiši `SPE` i klikni na njega). Hvataljke pokazuju tačke prilagođavanja (ili kontrolne tačke splina koji ih nema): povuci jednu da preoblikuješ krivu. Na upitu:

- **Podaci o prilagođavanju** (spline nacrtan kroz tačke): `A` dodaje tačku prilagođavanja (klikni gdje), `D` briše jednu (klikni blizu nje), `M` pomjera jednu (klikni blizu nje, pa klikni novo mjesto), `T` postavlja krajnje tangente, `P` čisti tačke prilagođavanja, pa se spline od tada uređuje kontrolnim tačkama.
- **Uredi vrh**: `A` dodaje kontrolnu tačku bez mijenjanja krive, `M` pomjera jednu, `W` daje jednoj **težinu** (iznad 1 privlači krivu bliže njoj, ispod 1 je pušta).
- **Otvori** ili **Zatvori**, i **Obrni** (kriva ide suprotnim smjerom).
- **Pretvori u polilinije** (`P`): spline postaje polilinija; preciznost je koliko segmenata dobija svaki raspon (10 je uobičajeno).
- **Poništi** vraća posljednju promjenu; **Izađi (X)** završava.

{{ui:Svojstva}} prikazuje stepen splina, koliko ima tačaka prilagođavanja i kontrolnih tačaka, njegovu dužinu, i omogućava da ga otvoriš ili zatvoriš.

## Uredi polilinju

Odaberi polilinju i upiši `PE`. Linija, luk ili spline koji odabereš prvo se nudi kao polilinija za pretvaranje (spline traži preciznost).

- **Zatvori** / **Otvori** spaja ili razdvaja krajeve.
- **Spoji** dodaje linije, lukove i polilinije čiji se krajevi poklapaju s krajem polilinije. `Razmak tolerancije` je koliko krajevi mogu biti udaljeni i još se spojiti (0 znači da se moraju dodirnuti).
- **Širina** daje cijeloj polilinji jednu širinu (0 je uklanja).
- **Prilagodi** zamjenjuje polilinju glatkom krivom koja prolazi kroz njene vrhove; **Spline** kubičnim B-splajnom koji ih prati (počinje i završava na prvom i posljednjem vrhu i ostaje blizu ostalih). Oba postaju polilinija kratkih segmenata, a originalni uglovi se čuvaju, pa **Ukloni zakrivljenje** ih vraća.
- **Generiši tip linije** kaže da li isprekidani tip linije teče duž cijele polilinije ili počinje ponovo na svakom vrhu.
- **Obrni** mijenja redoslijed njenih vrhova. **Višestruko** (`M` na prvom upitu) uređuje više polilinija istim opcijama.

Uređivanje vrhova polilinije u {{ui:Svojstva}} ili hvataljkama ostaje kako je bilo: PEDIT nema uređivač vrhova.

## U datotekama

DWG i DXF 2000 čuvaju spline kao spline: stepen, kontrolne tačke, čvorove, težine, tačke prilagođavanja i tangente. Spline koji otvoriš i ne promijeniš upisuje se nazad tačno kako je došao. DXF R12 nema spline: čuva se kao polilinija duž krive, a historija kaže koliko ih je.

Odmak, skraćivanje, produžavanje, zaobljenje, prekid i spajanje ne rade na splinovima. Upotrijebi {{cmd:EXPLODE}} nad splinom, ili {{cmd:PEDIT}} nad njim, da dobiješ polilinju koju te naredbe prihvataju.

## Česte greške

- **Kriva prebacuje između bliskih tačaka.** Kriva kroz tačke savija se gdje se savijaju tačke. Koristi manje tačaka ili kontrolni poligon.
- **"To nije spline."** SPLINEDIT prihvata samo splinove; {{cmd:PEDIT}} uređuje polilinije.
- **Zatvoren spline prilagođavanja ima malo drugačiji oblik u drugom programu.** CadCraft ga zatvara jednim glatkim spojem u prvoj tački; drugi program ga može zatvoriti periodičnom krivom. Zatvoren spline kontrolnim tačkama je isti u oba.
