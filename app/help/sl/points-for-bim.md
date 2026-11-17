---
title: Točke za programe BIM
summary: Izvozite točke in vstavitvene točke blokov z opisom v datoteko CSV ali TXT, ki jo uvozijo programi BIM in geodetski programi.
keywords: izvoz točk, exportpoints, točke, csv, txt, pnezd, penzd, xyz, geodetske točke, koordinate, bim, zakoličba, datoteka točk, severna koordinata, vzhodna koordinata, višina
from: d80e2d53
---

## Kaj boste naredili

Datoteko točk: ena vrstica na točko, s številko, severno koordinato (northing), vzhodno koordinato (easting), višino in opisom, ki jo lahko uvozijo programi BIM (med njimi Revit in Archicad) in geodetska programska oprema, da postavijo geodetske točke, oznake na gradbišču ali opremo.

## Izvoz točk

1. Izberite točke in vstavitvene točke blokov, ki jih želite, ali ne izberite ničesar, da vzamete vse točke.
2. Vpišite {{cmd:EXPORTPOINTS}} (ali `EXPPTS`, ali {{ui:Bloki}} › {{ui:Več}} › {{ui:Izvozi točke}}) in pritisnite {{key:Enter}}
   (ponovno pritisnite {{key:Enter}} pri `Izberite točke in bloke`, kadar ničesar ni bilo izbrano).
3. Ko izberete bloke z atributi, CadCraft našteje njihove oznake: vpišite tisto, katere vrednost je opis (na primer `ITEM`), ali karkoli drugega, da uporabi ime vsakega bloka.
4. Izberite stolpce: `PNEZD` (točka, severna, vzhodna, višina, opis: navadni), `PENZD` (vzhodna pred severno) ali `XYZ` (samo koordinate).
5. Izberite enote: `D` kot narisano, ali `M` metri ali `F` čevlji (samo kadar so enote risbe nastavljene: Lastnosti › {{ui:Enote}}, ko ničesar ni izbrano).
6. Če je nastavljen UCS, izberite `W` svet ali `U` koordinate UCS (glejte [UCS in zasukan pogled](topic:ucs-and-turned-view)).
7. Izberite `C` za datoteko `.csv`, ločeno z vejicami, ali `T` za `.txt`, ločeno s tabulatorji, in številko prve točke.

Datoteka se prenese kot `<drawing>-points.csv` (ali `.txt`), zgodovina pa pove, koliko točk vsebuje.

## Kaj je v datoteki

- Ena točka na vrstico, konec z zalomom vrstice (CR LF), tri decimalke.
- Višina točke je njen Z (0, če je nima). Vstavitvena točka bloka je njena točka.
- Opis, ki vsebuje vejico (ali tabulator v TXT) ali narekovaj, je v dvojnih narekovajih, z podvojenimi narekovaji.
- Format je tisti, ki ga CivilCraft bere in piše, zato se datoteka tam odpre tudi kot točke.

## Pogoste napake

- Za enote se ponuja samo `D`: risba nima nastavljenih enot. Nastavite jih ali pretvorite v drugem programu.
- Točke so daleč od tam, kjer pričakujete, v drugem programu: izvozite svetovne koordinate (`W`) ali UCS, ki ga uporablja geodetska točka drugega programa (`U`).
