---
title: Panel Vlastnosti
summary: Pozrite a zmeňte všetko o vybraných objektoch, mnohé naraz: súradnice so Z, veľkosti, text, nastavenia kót, priehľadnosť a ďalšie. Polia prijímajú výrazy a dĺžky s jednotkami.
keywords: súčty, celková dĺžka, celková plocha, súčet, dĺžka výberu, vlastnosti, paleta vlastností, ctrl+1, pr, ch, mo, ddmodify, rozdielne, rýchly výber, pickadd, súradnice, z, výška, hrúbka, priehľadnosť, materiál, hypertextový odkaz, výraz, quickcalc, vrchol, štýl kóty, tolerancia, desatinné miesta
from: 10d6a829
---

## Čo sa naučíte

Ako otvoriť panel Vlastnosti, zmeniť jeden objekt alebo sto v jednom kroku, zadať presné súradnice (so Z), použiť výrazy a jednotky v každom číselnom poli a čo každý druh objektu zobrazuje.

## Otvorenie

Panel je vpravo. Aby sa dostal dopredu:

- Stlačte {{key:Mod+1}}, alebo napíšte {{cmd:PROPERTIES}} (alebo `PR`, `CH`, `MO`).
- Dvojklikom na objekt (text a viacnásobné vynášacie čiary otvoria svoj textový editor).

Panel je pohyblivý ako ostatné: potiahnite jeho úchyt a ukotvite ho vľavo, vpravo alebo dole, alebo ho presuňte nad výkres, aby sa plával (pozri [Usporiadanie panelov a použitie druhého monitora](common:arrange-panels)).

### Zloženie

Špendlík v pravom hornom rohu panela zapne **automatické skrývanie**: panel sa zloží na pásik na pravom okraji a výkres dostane miesto. Ukážte na pásik (alebo stlačte {{key:Mod+1}}) a panel sa otvorí nad výkresom; keď odídete, znova sa zloží. Kliknutím na špendlík ho nechajte otvorený. {{cmd:PROPERTIESCLOSE}} ho tiež zloží.

## Sekcie

Vlastnosti sú zoskupené v sekciách, ktoré môžete zložiť: **Všeobecné**, **Geometria**, **Text**, **Čiary a šípky**, **Prispôsobenie**, **Primárne jednotky**, **Alternatívne jednotky**, **Tolerancie**, **Vzor**, **Rôzne** a pre bloky **Atribúty** a **Položka knižnice**. Kliknutím na názov sekcie ju zložíte alebo otvoríte; CadCraft si pamätá, ktoré ste zložili.

Potiahnite tenkú čiaru medzi názvami a hodnotami, aby boli názvy širšie alebo užšie. Dvojklikom na ňu sa vráti. Klávesnicou ju zamerajte a použite šípky.

## Zmena hodnoty

1. Kliknite na riadok. Nadpis hovorí "Čiara".
2. Kliknite do {{ui:Dĺžka}}. Počas úpravy pole ukazuje úplnú hodnotu, nie zaokrúhlenú.
3. Napíšte `2500` a stlačte {{key:Enter}}. Čiara je teraz dlhá 2500, pričom si zachová počiatočný bod a uhol.

{{key:Enter}} alebo kliknutie inde použije hodnotu; {{key:Esc}} vráti starú hodnotu. Každá zmena je jeden krok späť.

### Výrazy a jednotky

Každé číselné pole prijme viac než obyčajné číslo:

| Napíšete | Dostanete |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (palce, vo výkrese v stopách a palcoch) |
| `900mm`, `3.5m`, `2ft` | Prepočítané na jednotky výkresu |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (polia uhlov) |
| `0.5r`, `100g` | Radiány a gradiány ako stupne |

Dĺžka s jednotkou potrebuje, aby výkres mal jednotky: najprv nastavte {{ui:Jednotky}} pod {{ui:Nové objekty}} (nič nevybrané). Chybný zápis sa odmietne s poznámkou pod panelom a nič sa nezmení; nikdy sa neuloží ako 0. Funkcie: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; uhly v stupňoch.

## Zmena viacerých objektov naraz

1. Vyberte viac objektov, napríklad 8 čiar a 4 kóty.
2. Nadpis hovorí "12 objektov" a zoznam hore ponúka **Všetko (12)**, **Čiara (8)** a **Kóta (4)**.
3. **Všetko** zobrazí, čo má každý objekt (hladina, farba, typ čiary …). Vyberte **Kóta (4)**, aby ste videli nastavenia kót.
4. Zmeňte hodnotu, napríklad {{ui:Desatinné miesta}} na `1`.

Všetky štyri kóty sa zmenia v jednom kroku späť. Pole s nápisom **Rozdielne** znamená, že sa objekty líšia; napísanie hodnoty ju nastaví na všetky. Objekty na uzamknutých hladinách zostanú nezmenené a poznámka uvedie, koľko ich bolo.

## Súčty výberu

Keď je vybraných viac objektov, sekcia {{ui:Súčty}} hore uvádza:

- **Objekty**: koľko každého druhu, napríklad "8 čiar, 2 lomené čiary, 1 kružnica".
- **Celková dĺžka**: úsečky, oblúky a lomené čiary spočítané (aj splajny), a koľko objektov to je.
- **Celková plocha**: uzavreté spočítané: kružnice, celé elipsy, uzavreté lomené čiary a šrafovania (diery šrafovania sa odpočítajú).

Sú v dĺžkovom formáte výkresu (stopy a palce, keď ich používa; plochy potom v štvorcových palcoch a štvorcových stopách).
Stavový riadok ukazuje rovnakú dĺžku a plochu, kedykoľvek sú objekty vybrané; {{ui:Nastavenia}} › {{ui:CadCraft}} › {{ui:Dĺžka a plocha výberu}} › {{ui:Skryté}} to vypne. Pre jeden objekt {{ui:Geometria}} ukazuje jeho vlastnú dĺžku a plochu, ako predtým.

## Súradnice

Každý bod ukazuje **X**, **Y** a **Z**: začiatok a koniec čiary, stredy, vkladacie body, pozície textu, aktuálny vrchol lomenej čiary. Čiary tiež ukazujú **Delta X**, **Delta Y** a **Delta Z** (iba na čítanie). Lomené čiary a šrafovania majú **Výšku** (jedno Z pre celý objekt).

Tlačidlo so zameriavacím krížom vedľa názvu bodu vám umožní vybrať ho vo výkrese: kliknite naň a potom kliknite na novú pozíciu (uchopenia fungujú). Hodnoty sú svetové súradnice.

## Všeobecné

| Pole | Čo je |
|---|---|
| {{ui:Hladina}}, {{ui:Farba}}, {{ui:Typ čiary}}, {{ui:Mierka typu čiary}}, {{ui:Hrúbka čiary}} | Ako v paneli hladín; {{ui:Podľa hladiny}} nasleduje hladinu |
| {{ui:Priehľadnosť}} | Podľa hladiny, podľa bloku, alebo 0 až 90 % |
| {{ui:Hrúbka objektu}} | Ako ďaleko čiary, kružnice, oblúky, lomené čiary, body a text siahajú v Z |
| {{ui:Materiál}} | Podľa hladiny, podľa bloku, Globálny alebo názov, ktorý priniesol výkres |
| {{ui:Štýl vykresľovania}} | Iba na čítanie: výkresy sa vykresľujú podľa farby, cez [tabuľku štýlov vykresľovania](topic:plot-pdf#plot-style-tables) listu |
| {{ui:Hypertextový odkaz}} | Webová adresa uložená s objektom |

## Čo ukazuje každý typ

| Vybrané | Môžete zmeniť |
|---|---|
| Čiara | Začiatok a koniec X, Y, Z; dĺžka; uhol |
| Kružnica | Stred; polomer; priemer; obvod; plocha (každé nastaví polomer) |
| Oblúk | Stred; polomer; začiatočný a koncový uhol; celkový uhol; tetiva (ukazuje dĺžku oblúka a plochu) |
| Elipsa | Stred; hlavný a vedľajší polomer; pomer polomerov; uhol hlavnej osi; začiatočný a koncový uhol |
| Lomená čiara | Prehliadač vrcholov (nižšie); globálna šírka; výška; uzavretá; plocha, keď je uzavretá (mierkuje ju okolo jej stredu) |
| Text | Obsah; štýl; zarovnanie; výška; otočenie; faktor šírky; uhol sklonu; definovaná šírka; medzera riadkov; anotatívny; pozícia |
| Odkaz na blok | Vkladací bod; otočenie; mierka X, Y, Z a jednotná mierka; hodnoty atribútov |
| Šrafovanie | Vzor; mierka; uhol; počiatok; asociatívne; detekcia ostrovov; farba pozadia; výška |
| Kóta | Pozri nižšie |
| Viacnásobná vynášacia čiara | Text; výška; šírka; strana textu; veľkosť šípky; vzdialenosť pristátia; bod šípky |
| Výrez | Mierka; stred a veľkosť na liste; stred pohľadu v modeli; zapnutý; zamknuté zobrazenie |

### Vrcholy lomenej čiary

{{ui:Aktuálny vrchol}} ukazuje, ku ktorému vrcholu patria polia pod ním. Šípkami alebo napísaním čísla sa presuniete na iný vrchol; ich počet nie je obmedzený. Každý vrchol má X, Y, šírku segmentu na začiatku a na konci a vypuklosť segmentu, ktorý sa tam začína (0 = rovný).

## Kóty

Kóta ukazuje svoj **Štýl kóty**, čo meria, svoje body a každé nastavenie:

- **Čiary a šípky:** šípka pre každý koniec, veľkosť šípky, veľkosť značky, farby a hrúbky kótovacej a predlžovacej čiary, skrytie ktorejkoľvek polovice alebo ktorejkoľvek predlžovacej čiary, odsadenie predlžovacej čiary a jej predĺženie.
- **Text:** prepísanie (nechajte prázdne pre nameranú hodnotu; `<>` ju znamená vo vašom vlastnom texte), štýl, farba, výška, odsadenie, zvislá a vodorovná pozícia, vždy vodorovne, otočenie, výplň pozadia.
- **Prispôsobenie:** celková mierka, rozstup základnej čiary, čo sa pohne, keď je málo miesta, pohyb textu.
- **Primárne jednotky:** formát, desatinné miesta, zaokrúhlenie, predpona, prípona, mierka merania, desatinný oddeľovač, potlačenie úvodných a koncových núl; pre uhly formát uhla a desatinné miesta.
- **Alternatívne jednotky:** zapnuté alebo vypnuté, formát, desatinné miesta, násobiteľ (25.4 mení palce na milimetre), zaokrúhlenie, predpona a prípona.
- **Tolerancie:** žiadne, symetrické, odchýlka, medzné alebo základné, s hornou a dolnou hodnotou, desatinnými miestami, výškou a pozíciou.

Zmena ktoréhokoľvek z nich na otvorenej kóte zahodí výkres, ktorý z nej urobil iný program, a CadCraft ju nakreslí znova.

:::note
Vodorovná pozícia textu (vedľa prvej alebo druhej predlžovacej čiary) a text pod čiarou sa kreslia pri dĺžkových a zarovnaných kótach; pri ostatných sa zachovajú a uložia, ale zatiaľ sa nekreslia. Voľby Prispôsobenia sa zachovajú a uložia, ale zatiaľ sa nekreslia: CadCraft umiestni text podľa vlastného pravidla (nad čiarou, mimo nej, keď sa nezmestí).
:::

## Nič nevybrané

Keď nič nie je vybrané, panel zobrazuje:

- **Nové objekty:** hladinu, farbu, typ čiary, hrúbku čiary a výšku textu, ktorú dostanú nové objekty; jednotky výkresu a formát dĺžky; typ čiary a hrúbku čiary aktuálnej hladiny; veľkosti pre nové kóty. Na liste sú najprv názov listu, papier a orientácia.
- **Zobrazenie:** stred, výška a šírka toho, čo je na obrazovke. Napíšte hodnotu, aby sa zobrazenie tam presunulo.
- **Rôzne:** ikona UCS zapnutá alebo vypnutá, UCS (vždy Svetový: CadCraft zatiaľ nemá používateľské súradnicové systémy) a mierka anotácie.

## Tlačidlá hore

| Tlačidlo | Robí |
|---|---|
| Lievik | {{cmd:QSELECT}}: výber podľa typu a vlastnosti |
| Šípka | {{cmd:SELECT}}: výber objektov na príkazovom riadku |
| Plus alebo 1 | Či kliknutie pridá k výberu (plus) alebo ho nahradí (1); rovnaké nastavenie ako v {{ui:Nastavenia}}, {{ui:CadCraft}} |
| Špendlík | Automatické skrývanie, vyššie |

## Časté chyby

- **Písanie do poľa nič neurobilo.** Stlačte {{key:Enter}} alebo kliknite inde, aby sa použilo. Červené pole a poznámka znamenajú, že zápis bol odmietnutý.
- **Dĺžka s jednotkou sa odmietne.** Výkres nemá jednotky. Nastavte {{ui:Jednotky}} s ničím nevybraným.
- **Vidieť sú iba {{ui:Hladina}} a {{ui:Farba}}.** Vybraných je viac druhov objektov a je zvolené **Všetko**. Vyberte jeden druh v zozname hore.
- **Niektoré objekty sa nezmenili.** Sú na uzamknutej hladine. Odomknite hladinu v paneli hladín.
- **Písmená napísané na klávesnici sa dostali do poľa.** Kým pole má kurzor, klávesy píšu tam. Stlačte {{key:Enter}} alebo {{key:Esc}} a potom napíšte príkaz.
