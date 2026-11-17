---
title: Rozdelenie obrazovky
summary: Zobrazte výkres v dvoch, troch alebo štyroch tablách s vlastným zväčšením, umiestnite list vedľa modelu a otvorte viac výkresov vedľa seba.
keywords: rozdelenie, rozdelenie obrazovky, tably, VPORTS, výrezy, dlaždice, vedľa seba, nad sebou, dva výkresy, karty, karty dokumentov, porovnanie, delič, model a list, viac výkresov, otvorené výkresy
from: ee2f034b
---

## Čo sa naučíte

Ako sa pozerať na jeden výkres v niekoľkých tablách naraz, každá s vlastným zväčšením, a ako otvoriť viac výkresov a vidieť ich vedľa seba.

## Rozdelenie jedného výkresu na tably

1. Otvorte výkres alebo nakreslite niekoľko čiar a kružníc.
2. Otvorte {{ui:Pohľad}} › {{ui:Viac}} a zvoľte {{ui:Rozdeliť vedľa seba}} (alebo napíšte {{cmd:VPORTS}}, potom `2` a {{key:Enter}}).

Plocha výkresu sa rozdelí na dve tably, obe zobrazujú ten istý pohľad. Aktívna tabla má modrý rám a dostáva zameriavací kríž.

3. Kliknite do druhej tably. Stane sa aktívnou. (Prvé kliknutie len prepne tably; kliknite znova, aby ste vybrali.)
4. Zväčšujte kolieskom myši. Zväčší sa len táto tabla.
5. Potiahnite čiaru medzi tablami, aby bola jedna širšia. {{key:Home}} na zvolenom deliči ho vráti do stredu.

{{cmd:VPORTS}} berie aj `3` (dve tably na jednej strane a jedna veľká na druhej: `L` alebo `R`), `4` a `SI` na to, aby zostala len jedna tabla. Pohľad aktívnej tably potom vyplní plochu. Na liste pridá {{cmd:VPORTS}} výrez na list (ako v AutoCAD); tam napíšte {{cmd:SPLIT}}, alebo použite ponuku Pohľad.

## Kreslenie z jednej tably do druhej

1. Rozdeľte vedľa seba a každú tablu priblížte na iný roh výkresu.
2. Napíšte `L` a stlačte {{key:Enter}}, potom kliknite na prvý bod v ľavej table.
3. Kliknite raz v pravej table, aby sa stala aktívnou, potom tam kliknite na druhý bod.

Čiara vedie medzi oboma miestami. Príkaz pokračuje, keď meníte tably, a gumový pás sa zobrazuje v každej table.

## Model vedľa listu

1. Rozdeľte vedľa seba.
2. Kliknite na pravú tablu, potom kliknite na kartu listu pod výkresom.

Pravá tabla zobrazuje list; ľavá stále zobrazuje model. Každá tabla si ponecháva svoj priestor, takže môžete kresliť na model a sledovať, ako výrez listu nasleduje.

## Viac výkresov v jednom okne

1. Otvorte výkres. Potom otvorte ďalší (alebo stlačte {{ui:Nový…}}).

Každý výkres sa otvorí na vlastnej karte nad plochou výkresu. Kliknutím na kartu prepnete; riadok príkazov, panely a späť nasledujú výkres, na ktorý prepnete. {{key:Mod+C}} v jednom výkrese a {{key:Mod+V}} v inom kopíruje objekty medzi nimi.

2. Kliknite na {{ui:Usporiadať otvorené výkresy vedľa seba}} (ikona rozdelenia na konci kariet), alebo na ikonu vedľa nej pre usporiadanie nad sebou.

Každá tabla teraz zobrazuje jeden z otvorených výkresov, najviac štyri. Kliknutím na tablu v nej pracujete s týmto výkresom.

3. Kliknite na {{ui:×}} na karte, aby ste zavreli ten výkres. Ak má neuložené zmeny, CadCraft sa najprv opýta.

:::tip
Otvorenie výkresu, keď okno obsahuje len nový, nedotknutý výkres, použije túto kartu namiesto pridania novej.
:::

## Posun a zväčšenie spolu

Na porovnanie dvoch revízií ich usporiadajte vedľa seba a potom kliknite na {{ui:Prepojiť pohľady tabúľ}} (ikona prepojenia na konci kariet), alebo ju zvoľte v {{ui:Pohľad}} › {{ui:Viac}}, alebo napíšte {{cmd:LINKVIEWS}} a `ON`. Teraz posun alebo zväčšenie v jednej table presunie každú tablu zobrazujúcu model (alebo každú tablu zobrazujúcu list) na to isté miesto, takže dva výkresy zostanú zarovnané. {{cmd:LINKVIEWS}} `OFF` nechá každú tablu pohybovať sa samostatne.

## Časté chyby

- **Moje kliknutie nič neurobilo.** Iba spravilo túto tablu aktívnou. Kliknite znova na výber alebo kreslenie.
- **Koliesko zväčšilo nesprávnu tablu.** Koliesko zväčšuje tablu pod kurzorom a aktivuje ju.
- **Tably sa vrátili na jednu.** Otvorenie výkresu ho zobrazí tak, ako bol uložený; výkres uložený bez tabúľ sa otvorí v jednej.
- **Pri opustení stránky sa zobrazí upozornenie na neuložené zmeny, ktoré nevidím.** Iná karta obsahuje výkres so zmenami. Prepnite na ňu a uložte, alebo odíďte bez uloženia.
