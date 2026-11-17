---
title: Panel Vlastnosti
summary: Prohlédněte a změňte vše o vybraných objektech, mnoho najednou: souřadnice se Z, velikosti, text, nastavení kót, průhlednost a další. Pole přijímají výrazy a délky s jednotkami.
keywords: součty, celková délka, celková plocha, součet, délka výběru, vlastnosti, paleta vlastností, ctrl+1, pr, ch, mo, ddmodify, různé hodnoty, rychlý výběr, pickadd, souřadnice, z, výška, tloušťka, průhlednost, materiál, hypertextový odkaz, výraz, quickcalc, vrchol, styl kóty, tolerance, desetinná místa
from: 10d6a829
---

## Co se naučíte

Jak otevřít panel Vlastnosti, změnit jeden objekt nebo sto najednou, zadat přesné souřadnice (se Z), použít výrazy a jednotky v každém číselném poli a co každý druh objektu ukazuje.

## Otevřít jej

Panel je vpravo. Chcete-li jej dát do popředí:

- Stiskněte {{key:Mod+1}}, nebo napište {{cmd:PROPERTIES}} (nebo `PR`, `CH`, `MO`).
- Dvakrát klepněte na objekt (text a víceúrovňové výnosky otevřou svůj editor textu).

Panel je přesouvatelný jako ostatní: uchopte ho a přetáhněte k ukotvení vlevo, vpravo nebo dole, nebo ho pusťte nad výkres a bude plovoucí (viz [Uspořádání panelů a použití druhého monitoru](common:arrange-panels)).

### Sbalit jej

Tlačítko připínáčku vpravo nahoře v panelu zapne **automatické skrývání**: panel se sbalí na proužek u pravého okraje a výkres získá místo. Ukažte na proužek (nebo stiskněte {{key:Mod+1}}) a panel se otevře přes výkres; odejděte a sbalí se zase. Klepnutím na připínáček jej znovu nechte otevřený. {{cmd:PROPERTIESCLOSE}} jej také sbalí.

## Sekce

Vlastnosti jsou seskupeny do sekcí, které můžete sbalit: **Obecné**, **Geometrie**, **Text**, **Čáry a šipky**, **Přizpůsobení**, **Primární jednotky**, **Alternativní jednotky**, **Tolerance**, **Výplň**, **Různé**, a pro bloky **Atributy** a **Položka knihovny**. Klepněte na název sekce, abyste ji sbalili nebo otevřeli; CadCraft si pamatuje, které jste sbalili.

Přetáhněte tenkou čáru mezi názvy a hodnotami, abyste názvy zúžili nebo rozšířili. Dvojklikem ji vrátíte. Klávesnicí ji zaměřte a použijte šipky.

## Změnit hodnotu

1. Klepněte na řádek. Nadpis říká "Čára".
2. Klepněte do pole {{ui:Délka}}. Při úpravě pole ukazuje celou hodnotu, ne zaokrouhlenou.
3. Napište `2500` a stiskněte {{key:Enter}}. Čára má nyní délku 2500, se zachovaným počátečním bodem a úhlem.

{{key:Enter}}, nebo klepnutí jinam, hodnotu použije; {{key:Esc}} vrátí starou hodnotu. Každá změna je jeden krok zpět.

### Výrazy a jednotky

Každé číselné pole přijme víc než prosté číslo:

| Napíšete | Dostanete |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (palce, ve výkresu ve stopách a palcích) |
| `900mm`, `3.5m`, `2ft` | Převedeno na jednotky výkresu |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (pole úhlů) |
| `0.5r`, `100g` | Radiány a grady, jako stupně |

Délka s jednotkou potřebuje, aby výkres měl jednotky: nejdříve nastavte {{ui:Jednotky}} v {{ui:Nové objekty}} (nic nevybráno). Špatný zápis se odmítne s poznámkou pod panelem a nic se nezmění; nikdy se neuloží jako 0. Funkce: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; úhly ve stupních.

## Změnit více objektů najednou

1. Vyberte několik objektů, například 8 čar a 4 kóty.
2. Nadpis říká "12 objektů" a nahoře seznam nabízí **Vše (12)**, **Čára (8)** a **Kóta (4)**.
3. **Vše** ukáže, co má každý objekt (vrstvu, barvu, typ čáry…). Vyberte **Kóta (4)**, abyste viděli nastavení kót.
4. Změňte hodnotu, například {{ui:Desetinná místa}} na `1`.

Všechny čtyři kóty se změní v jednom kroku zpět. Pole s nápisem **Různé hodnoty** znamená, že se objekty liší; napsání hodnoty ji nastaví na všech. Objekty na zamčených vrstvách zůstanou beze změny a poznámka řekne, kolik jich bylo.

## Součty výběru

Při více vybraných objektech sekce {{ui:Součty}} nahoře říká:

- **Objekty**: kolik každého druhu, například "8 čar, 2 mnohočáry, 1 kružnice".
- **Celková délka**: čáry, oblouky a mnohočáry sečtené (i splajny) a kolik objektů to je.
- **Celková plocha**: uzavřené objekty sečtené: kružnice, celé elipsy, uzavřené mnohočáry a šrafy (otvory šrafy se odečtou).

Jsou v délkovém formátu výkresu (stopy a palce, je-li používán; plochy pak v čtverečních palcích a čtverečních stopách). Stavový řádek ukazuje tutéž délku a plochu, kdykoli jsou objekty vybrány; {{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Délka a plocha výběru}} › {{ui:Skryto}} to vypne. U jednoho objektu {{ui:Geometrie}} ukazuje jeho vlastní délku a plochu, jako dřív.

## Souřadnice

Každý bod ukazuje **X**, **Y** a **Z**: začátek a konec čáry, středy, vkládací body, polohy textu, aktuální vrchol mnohočáry. Čáry také ukazují **Delta X**, **Delta Y** a **Delta Z** (jen ke čtení). Mnohočáry a šrafy mají **Nadmořskou výšku** (jedno Z pro celý objekt).

Tlačítko se zaměřením vedle názvu bodu vám umožní zvolit bod na výkrese: klepněte na něj, pak klepněte na novou polohu (přichytávání funguje). Hodnoty jsou světové souřadnice.

## Obecné

| Pole | Co to je |
|---|---|
| {{ui:Vrstva}}, {{ui:Barva}}, {{ui:Typ čáry}}, {{ui:Měřítko typu čáry}}, {{ui:Tloušťka čáry}} | Jako v panelu vrstev; {{ui:Podle vrstvy}} následuje vrstvu |
| {{ui:Průhlednost}} | Podle vrstvy, podle bloku, nebo 0 až 90 % |
| {{ui:Tloušťka}} | Jak daleko čáry, kružnice, oblouky, mnohočáry, body a text sahají ve směru Z |
| {{ui:Materiál}} | Podle vrstvy, podle bloku, Globální, nebo název, který přinesl výkres |
| {{ui:Styl tisku}} | Jen ke čtení: výkresy se vykreslují podle barvy, přes [tabulku stylů tisku](topic:plot-pdf#plot-style-tables) listu |
| {{ui:Hypertextový odkaz}} | Webová adresa uložená u objektu |

## Co ukazuje každý typ

| Vybráno | Můžete změnit |
|---|---|
| Čára | Počáteční a koncové X, Y, Z; délku; úhel |
| Kružnice | Střed; poloměr; průměr; obvod; plochu (každé nastaví poloměr) |
| Oblouk | Střed; poloměr; počáteční a koncový úhel; celkový úhel; tětivu (ukáže délku oblouku a plochu) |
| Elipsa | Střed; hlavní a vedlejší poloměr; poměr poloměrů; úhel hlavní osy; počáteční a koncový úhel |
| Mnohočára | Prohlížeč vrcholů (níže); celkovou šířku; nadmořskou výšku; uzavřenost; plochu při uzavření (škáluje ji kolem jejího středu) |
| Text | Obsah; styl; zarovnání; výšku; natočení; činitel šířky; úhel sklonu; definovanou šířku; řádkování; anotativnost; polohu |
| Odkaz na blok | Vkládací bod; natočení; měřítko X, Y, Z a jednotné měřítko; hodnoty atributů |
| Šrafa | Vzor; měřítko; úhel; počátek; asociativnost; detekci ostrovů; barvu pozadí; nadmořskou výšku |
| Kóta | Viz níže |
| Víceúrovňový výnosek | Text; výšku; šířku; stranu textu; velikost hrotu šipky; vzdálenost zakončení; bod hrotu šipky |
| Výřez | Měřítko; střed a velikost na listu; střed zobrazení v modelu; zapnuto; zamčené zobrazení |

### Vrcholy mnohočáry

{{ui:Aktuální vrchol}} ukazuje, ke kterému vrcholu patří pole pod ním. Použijte šipková tlačítka, nebo napište číslo, a přejdete na jiný vrchol; počet není omezen. Každý vrchol má X, Y, šířku počátečního a koncového segmentu a vypouklost segmentu, který tam začíná (0 = přímý).

## Kóty

Kóta ukazuje svůj **Styl kóty**, co měří, své body a každé nastavení:

- **Čáry a šipky:** hrot šipky na každém konci, velikost šipky, velikost značky, barvy a tloušťky kótovací a pomocné čáry, skrytí kterékoli poloviny nebo kterékoli pomocné čáry, odsazení pomocné čáry a její prodloužení.
- **Text:** přepsání (prázdné pro naměřenou hodnotu; `<>` ji označuje uvnitř vašeho vlastního textu), styl, barva, výška, odsazení, svislá a vodorovná poloha, vždy vodorovně, natočení, výplň pozadí.
- **Přizpůsobení:** celkové měřítko, rozestup základní čáry, co se pohne, když je málo místa, pohyb textu.
- **Primární jednotky:** formát, desetinná místa, zaokrouhlení, předpona, přípona, měřítko měření, oddělovač desetinných míst, potlačení úvodních a koncových nul; u úhlů formát úhlu a desetinná místa.
- **Alternativní jednotky:** zapnuto nebo vypnuto, formát, desetinná místa, násobitel (25.4 převádí palce na milimetry), zaokrouhlení, předpona a přípona.
- **Tolerance:** žádná, symetrická, odchylka, meze nebo základní, s horní a dolní hodnotou, desetinnými místy, výškou a polohou.

Změníte-li kteroukoli z nich u otevřené kóty, zahodí se výkres, který z ní udělal druhý program, a CadCraft ji nakreslí znovu.

:::note
Vodorovná poloha textu (vedle první nebo druhé pomocné čáry) a text pod čarou se kreslí u délkových a zarovnaných kót; u ostatních kót se uchovají a uloží, ale zatím se nekreslí. Volby Přizpůsobení se uchovají a uloží, ale zatím se nekreslí: CadCraft umísťuje text podle vlastního pravidla (nad čarou, vně, když se nevejde).
:::

## Nic není vybráno

Když nic není vybráno, panel ukazuje:

- **Nové objekty:** vrstvu, barvu, typ čáry, tloušťku čáry a výšku textu, které nové objekty dostanou; jednotky výkresu a formát délky; typ čáry a tloušťku aktuální vrstvy; velikosti pro nové kóty. Na listu nahoře jsou název listu, papír a orientace.
- **Zobrazení:** střed, výška a šířka toho, co je na obrazovce. Napište hodnotu a zobrazení se tam přesune.
- **Různé:** ikona UCS zapnutá nebo vypnutá, UCS (vždy světový: CadCraft zatím nemá uživatelské souřadnicové systémy) a měřítko anotací.

## Tlačítka nahoře

| Tlačítko | Dělá |
|---|---|
| Filtr | {{cmd:QSELECT}}: výběr podle typu a vlastnosti |
| Ukazatel | {{cmd:SELECT}}: výběr objektů na příkazovém řádku |
| Plus nebo 1 | Zda klepnutí přidá do výběru (plus), nebo ho nahradí (1); totéž nastavení jako v {{ui:Nastavení}}, {{ui:CadCraft}} |
| Připínáček | Automatické skrývání, výše |

## Časté chyby

- **Psaní do pole nic neudělalo.** Stiskněte {{key:Enter}}, nebo klepněte jinam, abyste hodnotu použili. Červené pole a poznámka znamenají, že zápis byl odmítnut.
- **Délka s jednotkou se odmítne.** Výkres nemá jednotky. Nastavte {{ui:Jednotky}} bez výběru čehokoli.
- **Vidíte jen Vrstvu a Barvu.** Vybráno je několik druhů objektů a zvoleno je **Vše**. Vyberte jeden druh v seznamu nahoře.
- **Některé objekty se nezměnily.** Jsou na zamčené vrstvě. Odemkněte vrstvu v panelu vrstev.
- **Psaná písmena šla do pole.** Zatímco pole má kurzor, klávesy se píšou tam. Stiskněte {{key:Enter}} nebo {{key:Esc}} a pak napište příkaz.
