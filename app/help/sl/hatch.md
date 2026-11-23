---
title: Šrafura in polnila površin
summary: Zapolnite območje s polno barvo ali standardnim vzorcem tako, da kliknete znotraj njega ali izberete zaprte oblike, nastavite merilo in kot vzorca ter kasneje spremenite šrafuro.
keywords: šrafura, bhatch, polnilo, polno polnilo, vzorec, ansi31, ansi37, opeka, zemlja, mreža, prerezne črte, poché, otok, meja, merilo, kot
from: e7feb344
---

## Kaj boste naredili

Prerez stene, zapolnjen z vzorcem ANSI31, steber v njem, ki ostane prazen, in polno polnilo v stebru.

## Šrafura s klikom znotraj območja

1. Narišite pravokotnik (`REC`, `0,0`, `@2000,1200`) in krog znotraj njega (`C`, `1000,600`, `300`). Kliknite {{ui:Obseg}}.
2. Kliknite {{ui:Šrafura}} v skupini {{ui:Risanje}} ali vnesite `H` in pritisnite {{key:Enter}}. Zgodovina pove, kateri vzorec je trenutni, na primer `Current hatch: ANSI31, scale 1, angle 0°`.
3. Vnesite `P` in pritisnite {{key:Enter}}, vnesite `ANSI31` in pritisnite {{key:Enter}}.
4. Vnesite `SC` in pritisnite {{key:Enter}}, vnesite `20` in pritisnite {{key:Enter}}. Velikosti vzorca so na papirju, zato risba, izrisana v merilu 1:20, potrebuje merilo 20.
5. Pri `Določite notranjo točko` kliknite znotraj pravokotnika, zunaj kroga. Šrafura se prikaže kot predogled.
6. Pritisnite {{key:Enter}}. Pravokotnik je šrafiran; krog znotraj ostane prazen, ker je otok.

Pred pritiskom na {{key:Enter}} kliknite znotraj več območij, da postanejo ena šrafura. `U` vzame nazaj zadnje območje.

## Polno polnilo

1. Vnesite `H` in pritisnite {{key:Enter}}.
2. Vnesite `P`, pritisnite {{key:Enter}}, vnesite `SOLID` in pritisnite {{key:Enter}}.
3. Kliknite znotraj kroga, nato pritisnite {{key:Enter}}.

## Šrafura zaprtih oblik, ki jih izberete

Namesto klika znotraj vnesite `S` (Izberi predmete) pri `Določite notranjo točko` in izberite zaprte polilinije, kroge ali zaprte elipse, nato pritisnite {{key:Enter}}. Oblike znotraj drugih ostanejo prazne po vrsti (zunanja šrafirana, naslednja v njej prazna, in tako naprej).

## Vzorci

Pri vprašanju za vzorec vnesite `?` za seznam. Standardni so ANSI31 do ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS in EARTH, ter SOLID. V risbi v palcih (ali z čevlji in palci kot formatom dolžin) se uporabijo velikosti vzorcev v palcih, kot v AutoCAD; sicer v milimetrih.

{{ui:Kot}} (`A`) zasuka cel vzorec: ANSI31 pod kotom 90° se nagiba v drugo smer.

**Datoteke vzorcev.** Vnesite `F` (datoteka vzorca) pri `Določite notranjo točko` in izberite datoteko `.pat`. Vzorci v njej se pridružijo seznamu; če jih je več, vas vpraša, katerega uporabiti. Datoteka brez vzorca, ki ga CadCraft zna prebrati, to pove, vsak preskočeni vzorec pa se šteje. Velikosti v datoteki `.pat` nimajo lastne enote, zato so prebrane v enotah risbe. Preizkušene so bile samo datoteke, zapisane v običajni obliki `.pat`; nobena, ki jo je naredil drug program.

## Spremenite šrafuro

Izberite jo (kliknite eno od njenih črt). V {{ui:Lastnosti}}: {{ui:Vzorec}}, {{ui:Merilo vzorca}} in {{ui:Kot vzorca}}. Šrafure iz odprtih risb prikažejo svoj vzorec, če je eden od standardnih; drugi se prikažejo kot svetel odtenek njihove barve.

## Pogoste napake

- **"No closed boundary round that point."** V obrisu je reža ali je del zunaj zaslona: CadCraft gleda samo, kar je na zaslonu. Zaprite režo (povečajte oglišča) ali pomanjšajte.
- **"The pattern is too dense to draw at this scale."** Črte bi bile bližje, kot jih lahko risba prikaže. Uporabite večje merilo: poskusite merilo izrisa (20 za 1:20).
- **Vzorec je videti ogromen ali drobcen.** Merilo je v enotah risbe na enoto vzorca; glejte korak 4 zgoraj.
- **Šrafura ne sledi več svojemu obrisu.** Šrafura, narejena z {{cmd:HATCH}}, ostane pri predmetih, iz katerih je bila narejena: premaknete, zasukate ali skalirate obris in šrafura gre z njim; preoblikujete jo z ročico in šrafura se ponovno izračuna. Povezava se konča, ko se obris ne zapre več, ko šrafuro ročno preoblikujete ali jo obrežete, in ukazna vrstica to pove. Nič ni izgubljeno: območje znova šrafirajte, da jo povežete.

## Šrafura, ki ostane vezana na svojo mejo

Šrafura, ki jo naredite z `HATCH`, si zapomni, kaj jo omejuje. Premaknete, zasukate ali skalirate mejo in šrafura ter njen vzorec gresta z njo. Povlecite ročico, da preoblikujete mejo, in šrafura se ponovno izračuna. Premaknete šrafuro samo, pride tudi njena meja, kot zapolnjena oblika v risarskem programu.

Povezava se konča, in ukazna vrstica to pove, če meja ni več zaprta ali če šrafuro ročno preoblikujete. Sama šrafura ostane. Med šrafiranjem vnesite `AS`, da naredite šrafure, ki stojijo samostojno. Kopirajte šrafuro z mejo in kopija dobi svojo povezavo.

`HATCHEDIT` (`HE`) spremeni vzorec, merilo, kot in izhodišče šrafure ter jo poveže z mejo ali konča povezavo. Povezava je shranjena v datotekah DWG in DXF 2000. Datoteka DXF R12 nima predmeta šrafure, povezave, narejene v drugih programih, pa niso prebrane: za te uporabite `HATCHEDIT` in Poveži.

Šrafura, ki nima več meje (meja je bila izbrisana ali datoteka je prišla brez nje), jo lahko dobi nazaj: `HATCHGENERATEBOUNDARY` (`HGB`) nariše zaprto polilinijo okoli vsake zanke šrafure in, če odgovorite Da, šrafuro poveže z njimi.

## Prelivanje

`GRADIENT` (`GD`) zapolni območje s prelivanjem namesto z vzorcem: enaki izbori kot pri `HATCH`, potem vpraša za vrsto (linearno, valjasto, sferično, polsferično, ukrivljeno in vsako od teh obrnjeno), eno barvo z odtenkom ali dve barvi, kot in središčno ali ne. V `HATCH` isto naredi možnost `G`. `HATCHEDIT` `G` ali {{ui:Lastnosti}} pod Prelivanje spremenita prelivanje ali spremenita katero koli šrafuro v prelivanje.

Prelivanje se prikaže na zaslonu in v izrisih. Shranite kot DWG 2004 ali novejši in drugi programi dobijo pravo šrafuro s prelivanjem. DXF 2000 in DWG 2000 nimata prelivanja: tam ga CadCraft hrani zase, drugi programi pa vidijo polno polnilo v prvi barvi.

## Obrezovanje šrafure

`TRIM` obreže šrafuro kot vsak drug predmet. Kliknite šrafuro na strani rezalnega roba, ki jo želite odstraniti: robovi razdelijo šrafirano območje in ta kos se odstrani. V hitrem načinu je vsak predmet rezalni rob; ko je predmetov veliko, najprej izberite robove (možnost `T`). Obrezana šrafura ni več vezana na svojo mejo, ker je ne zapolnjuje več.
