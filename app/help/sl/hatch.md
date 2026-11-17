---
title: Šrafura in polnjenje površin
summary: Zapolnite površino s polno barvo ali standardnim vzorcem tako, da kliknete znotraj nje ali izberete zaprte oblike, nastavite merilo in kot vzorca ter kasneje spremenite šrafuro.
keywords: šrafura, bhatch, polnjenje, polno polnilo, vzorec, ansi31, ansi37, opeka, zemlja, mreža, presečne črte, poché, otok, meja, merilo, kot
from: 14399174
---

## Kaj boste naredili

Prerez stene, zapolnjen z vzorcem ANSI31, stolpec v njem, ki ostane prazen, in polno polnilo v stolpcu.

## Šrafura s klikom znotraj površine

1. Narišite pravokotnik (`REC`, `0,0`, `@2000,1200`) in krožnico znotraj njega (`C`, `1000,600`, `300`). Kliknite {{ui:Obseg}}.
2. Kliknite {{ui:Šrafura}} v skupini {{ui:Risanje}} ali vnesite `H` in pritisnite {{key:Enter}}. Zgodovina pove, kateri vzorec je trenutno izbran, na primer `Trenutna šrafura: ANSI31, merilo 1, kot 0°`.
3. Vnesite `P` in pritisnite {{key:Enter}}, vnesite `ANSI31` in pritisnite {{key:Enter}}.
4. Vnesite `SC` in pritisnite {{key:Enter}}, vnesite `20` in pritisnite {{key:Enter}}. Velikosti vzorcev so na papirju, zato risba, izpisana v merilu 1:20, potrebuje merilo 20.
5. Pri `Izberite notranjo točko` kliknite znotraj pravokotnika, zunaj krožnice. Šrafura se prikaže kot predogled.
6. Pritisnite {{key:Enter}}. Pravokotnik je zašrafiran; krožnica znotraj ostane prazna, ker je otok.

Preden pritisnete {{key:Enter}}, lahko kliknete znotraj več površin, da postanejo ena šrafura. `U` razveljavi zadnjo površino.

## Polno polnilo

1. Vnesite `H` in pritisnite {{key:Enter}}.
2. Vnesite `P`, pritisnite {{key:Enter}}, vnesite `SOLID` in pritisnite {{key:Enter}}.
3. Kliknite znotraj krožnice, nato pritisnite {{key:Enter}}.

## Šrafiranje zaprtih oblik, ki jih izberete

Namesto klikanja znotraj vnesite pri `Izberite notranjo točko` `S` (Izberi objekte) in izberite zaprte polilinije, krožnice ali zaprte elipse, nato pritisnite {{key:Enter}}. Oblike znotraj drugih ostanejo prazne po vrsti (zunanja se zašrafira, naslednja ostane prazna in tako naprej).

## Vzorci

Pri vprašanju o vzorcu vnesite `?` za seznam. Standardni so ANSI31 do ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH in SOLID. V risbi v palcih (ali s čevlji in palci kot formatom dolžine) se uporabijo palčne velikosti vzorcev, kot v AutoCAD-u; sicer milimetrske.

{{ui:Kot}} (`A`) zavrti celoten vzorec: ANSI31 pri 90° se nagiba v drugo smer.

**Datoteke vzorcev.** Pri `Izberite notranjo točko` vnesite `F` (Datoteka vzorca) in izberite datoteko `.pat`. Vzorci v njej se pridružijo seznamu; če je datotek več, boste vprašani, katerega uporabiti. Datoteka brez vzorcev, ki jih CadCraft zna prebrati, to sporoči, prav tako se prešteje vsak preskočeni vzorec. Velikosti v datoteki `.pat` nimajo lastne enote, zato se preberejo v enotah risbe. Preizkušene so bile samo datoteke, zapisane v običajni obliki `.pat`; nobena ni bila narejena z drugim programom.

## Spremenite šrafuro

Izberite jo (kliknite eno od njenih črt). V {{ui:Lastnosti}}: {{ui:Vzorec}}, {{ui:Merilo vzorca}} in {{ui:Kot vzorca}}. Šrafure iz odprtih risb prikažejo svoj vzorec, če je eden od standardnih; drugi se prikažejo kot svetel ton njihove barve.

## Pogoste napake

- **„Ni zaprte meje okoli te točke.“** Na obrisu je vrzel ali pa je del zunaj zaslona, saj CadCraft gleda samo, kar je na zaslonu. Zaprite vrzel (povečajte vogale) ali pomanjšajte pogled.
- **„Vzorec je pri tem merilu pregost za risanje.“** Črte bi bile bližje, kot jih risba lahko prikaže. Uporabite večje merilo, na primer merilo izpisa (20 za 1:20).
- **Vzorec izgleda ogromen ali drobcen.** Merilo je v enotah risbe na enoto vzorca; glejte korak 4 zgoraj.
- **Premikanje obrisa ne premakne šrafure.** Šrafura ni vezana na svojo mejo. Premaknite oba ali šrafirajte znova.

## Šrafura, ki ostane vezana na svojo mejo

Šrafura, ki jo naredite z `HATCH`, si zapomni, kaj jo omejuje. Premaknite, zavrtite ali spremenite merilo meje, in šrafura ter njen vzorec gresta z njo. Povlecite ročico, da preoblikujete mejo, in šrafura se izračuna znova. Premaknite šrafuro sama, pa pride meja z njo, kot polnjena oblika v risarskem programu.

Povezava se prekine, in ukazna vrstica to pove, če meja ni več zaprta ali če šrafuro ročno preoblikujete. Šrafura sama ostane. Med šrafiranjem vnesite `AS`, da naredite šrafure, ki stojijo samostojno. Kopija šrafure z mejo ima svojo povezavo.

`HATCHEDIT` (`HE`) spremeni vzorec, merilo, kot in izhodišče šrafure ter jo poveže z mejo ali prekine povezavo. Povezava se shrani v datotekah DWG in DXF 2000. Datoteka DXF R12 nima objekta šrafure, povezave, narejene v drugih programih, pa se ne preberejo: za te uporabite `HATCHEDIT` in Povezava.

Šrafura, ki nima več meje (meja je bila izbrisana ali pa je datoteka prišla brez nje), jo lahko dobi nazaj: `HATCHGENERATEBOUNDARY` (`HGB`) nariše zaprto polilinijo okoli vsake zanke šrafure in, če odgovorite Da (Y), poveže šrafuro z njimi.

## Polnjenje s prelivanjem

`GRADIENT` (`GD`) zapolni površino s prelivanjem namesto z vzorcem: enaki izbori kot pri `HATCH`, potem pa vpraša za vrsto (linearno, valjasto, sferično, polsferično, ukrivljeno in vsako od teh obrnjeno), eno barvo s tonom ali dve barvi, kot in ali je središčno. Pri `HATCH` opcija `G` naredi isto. `HATCHEDIT` `G` ali {{ui:Lastnosti}} pod Prelivanje spremeni prelivanje ali spremeni katero koli šrafuro v prelivanje.

Prelivanje se prikaže na zaslonu in v izpisih. Shranite kot DWG 2004 ali novejši, in drugi programi dobijo pravo šrafuro s prelivanjem. DXF 2000 in DWG 2000 prelivanja nimata: CadCraft ga tam hrani zase, drugi programi pa vidijo polno polnilo v prvi barvi.

## Prirezovanje šrafure

`TRIM` prireže šrafuro kot vsak drug objekt. Kliknite šrafuro na strani rezalnega roba, ki jo želite odstraniti: robovi razdelijo šrafirano površino in ta del se odstrani. V hitrem načinu je vsak objekt rezalni rob; pri številnih objektih najprej izberite robove (možnost `T`). Prirezana šrafura ni več povezana z mejo, ker je ne polni več.
