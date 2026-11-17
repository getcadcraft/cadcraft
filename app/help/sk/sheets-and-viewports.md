---
title: Nastavenie listu s popisovým poľom a výrezmi
summary: Vytvorte list (rozloženie) s rámom a popisovým poľom, nastavte mierku výrezu, pridajte druhý výrez pre detail a vyplňte popisové pole.
keywords: rozloženie, list, priestor papiera, výrez, mview, vpview, popisové pole, mierka, veľkosť papiera, rám, vports, mierka vykreslenia, mspace, pspace, priestor modelu, vstup do výrezu, dvojklik na výrez
from: 45a45de8
---

## Čo vytvoríte

List formátu A3 s popisovým poľom, celý pôdorys v jednom výreze v mierke 1:100 a druhý výrez zobrazujúci jeden roh v mierke 1:20.

## Model a listy

Budovu kreslíte na karte {{ui:Model}} v plnej veľkosti: múr dlhý 6 m má v milimetroch 6000 jednotiek. **List** (rozloženie) je kus papiera, meraný v milimetroch alebo palcoch. **Výrez** je okno vyrezané do listu, ktoré zobrazuje model v mierke.

## Skôr než začnete

1. Otvorte alebo nakreslite pôdorys na karte {{ui:Model}}.
2. Stlačte {{key:Esc}}, aby nič nebolo vybrané.
3. V {{ui:Aktuálne nastavenia}} nastavte {{ui:Jednotky}} na jednotku, v ktorej ste kreslili, napríklad {{ui:Milimetre}}.

Jednotky sú dôležité: mierka výrezu, napríklad 1:100, znamená, že jeden milimeter na papieri zobrazuje 100 skutočných milimetrov, takže CadCraft musí vedieť, čo je jedna jednotka výkresu. Výkres ponechaný ako {{ui:Bez jednotiek}} sa považuje za jednotky papiera (milimetre pri papieri ISO, palce pri americkom papieri).

## Vytvorenie listu

1. Kliknite na tlačidlo {{ui:+}} vpravo od kariet pod výkresom, alebo zadajte {{cmd:LAYOUT}} a stlačte {{key:Enter}}, alebo kliknite na {{ui:Nový list}}.

Otvorí sa nová karta `Layout1`. Mali by ste vidieť list na tmavšom podklade: rám, popisové pole v pravom dolnom rohu a jeden výrez nad ním, ktorý zobrazuje celý model v najväčšej štandardnej mierke, ktorá sa zmestí. História uvedie papier: ISO A3 pre metrické a bezjednotkové výkresy, Tabloid (ANSI B) pre výkresy v palcoch alebo stopách.

2. Kliknutím na {{ui:Rozsah}} prispôsobte list obrazovke.

## Výber papiera

1. Stlačte {{key:Esc}}, aby nič nebolo vybrané. Nadpis pravého panela znie „List: Layout1“.
2. Do poľa {{ui:Názov}} zadajte `A-101 Plan` a stlačte {{key:Enter}}. Karta sa premenuje.
3. V {{ui:Papier}} zvoľte veľkosť.
4. V {{ui:Orientácia}} zvoľte {{ui:Na šírku}} alebo {{ui:Na výšku}}.

:::warning
Zmena papiera nepresunie ani nezmení veľkosť toho, čo je už na liste. Po zmene skontrolujte, či rám, popisové pole a výrez stále sedia, a presuňte ich alebo zmeňte ich veľkosť uchopovačmi. Prepnutie medzi milimetrovým a palcovým papierom zachová čísla, takže sa všetko zmení na veľkosti: stavový riadok vás upozorní.
:::

## Nastavenie mierky výrezu

1. Kliknite na rám výrezu (jeho okraj). Nadpis panela znie „Výrez“.
2. V {{ui:Mierka (S)}} zvoľte `1:100`.

Model vo výreze sa prekreslí v mierke 1:100, vycentrovaný tam, kde bol. Zoznam ponúka metrické mierky od 10:1 do 1:10000; výkresy v palcoch alebo stopách dostanú aj architektonické mierky (1/4" = 1'-0" a podobne) a inžinierske mierky (1" = 20' a podobne). {{ui:Prispôsobiť celý model}} nastaví presnú, neštandardnú mierku, ktorá všetko zmestí.

3. Ak pôdorys už nie je vycentrovaný, zmeňte {{ui:X}} a {{ui:Y}} pod {{ui:Stred pohľadu (model)}} v pravom paneli: sú to body modelu zobrazené v strede výrezu.

## Zobrazenie časti modelu vo výreze

1. Keď je výrez vybraný, kliknite v pravom paneli na {{ui:Vybrať okno na modeli…}} (alebo zadajte {{cmd:VPVIEW}} a stlačte {{key:Enter}}).
2. CadCraft prepne na kartu {{ui:Model}}. Kliknite na jeden roh oblasti, ktorú chcete zobraziť.
3. Kliknite na protiľahlý roh.

Ste späť na liste a výrez zobrazuje túto oblasť v najväčšej štandardnej mierke, ktorá sa zmestí; história uvedie, ktorá. {{ui:Zobraziť celý model}} vráti celý pôdorys v štandardnej mierke.

## Pridanie druhého výrezu pre detail

1. Vytvorte miesto na liste: vyberte prvý výrez a ťahajte roh uchopovač, aby bol menší.
2. Zadajte {{cmd:MV}} a stlačte {{key:Enter}}, alebo kliknite na {{ui:Výrez}} v skupine Listy.
3. Kliknite na jeden roh nového výrezu na liste.
4. Kliknite na protiľahlý roh.

Nový výrez zobrazuje celý model. História uvedie jeho mierku.

5. Kliknite na rám nového výrezu.
6. Kliknite na {{ui:Vybrať okno na modeli…}} a vyberte malú oblasť okolo jedného rohu pôdorysu.
7. V {{ui:Mierka (S)}} zvoľte `1:20`.

Rámy výrezov sú na hladine `Viewports`, ktorá je nastavená na nevykresľovanie, takže rámy sa zobrazia na obrazovke, ale nie v PDF.

## Vyplnenie popisového poľa

Popisové pole sa skladá z obyčajných čiar a textu na hladine `Title block`. Začína názvom výkresu, mierkou prvého výrezu, dnešným dátumom a číslom listu.

1. Dvakrát kliknite na veľký nadpis. Nad ním sa otvorí editačné pole.
2. Zadajte názov listu.
3. Kliknite na {{ui:OK}} alebo stlačte {{key:Mod+Enter}}.

Rovnako postupujte pri ostatných poliach. Na zápis do prázdnej bunky „DRAWN BY“ použite {{cmd:TEXT}}. Text SCALE sa sám neaktualizuje, keď zmeníte mierku výrezu: upravte ho ručne.

## Kreslenie na liste

Všetko, čo nakreslíte na karte listu, je na papieri, v jednotkách papiera: text s výškou 3.5 je na liste ISO vysoký 3.5 mm. Poznámky, šípky severu a rámy listov patria sem.

Ak chcete zmeniť samotný pôdorys, prejdite na kartu {{ui:Model}}, alebo pracujte cez výrez (ďalšia sekcia); každý výrez zobrazí zmenu.

## Práca s modelom cez výrez

1. Dvakrát kliknite vnútri výrezu, mimo jeho rámu. Alebo zadajte {{cmd:MS}} a stlačte {{key:Enter}}: ak je na liste jeden výrez, vstúpite priamo; ak ich je viac, kliknite vnútri toho, ktorý chcete.

Rám sa nakreslí hrubšie, história uvedie, že ste vnútri, a karta listu zostane vybratá. Všetko, čo teraz nakreslíte alebo zmeníte, je na modeli, v jednotkách modelu, rovnako ako na karte {{ui:Model}}: úsečka nakreslená vnútri výrezu v mierke 1:100 má skutočné milimetre. Hladiny zmrazené v tomto výreze tu nemožno vybrať.

2. Otáčaním kolieska alebo ťahaním stredným tlačidlom priblížte a posúvajte to, čo výrez zobrazuje. List zostane na mieste.
3. Dvakrát kliknite kdekoľvek mimo rámu, alebo zadajte {{cmd:PS}} a stlačte {{key:Enter}}.

Ste späť na liste. Výrez si zachová pohľad, v ktorom ste ho opustili; {{key:Mod+Z}} vráti starý pohľad jedným krokom. Kliknutie na ľubovoľnú kartu pod výkresom tiež opustí výrez.

:::note
Výrez, ktorého zobrazenie je zamknuté ({{ui:Zobrazenie zamknuté}} vo {{ui:Vlastnosti}}), si zachová svoj pohľad: vnútri neho posúvanie a zoom posúvajú celý list. Výrez, ktorý je vypnutý, sa nedá otvoriť.
:::

## Označenie pohľadu jeho názvom

Názov pohľadu pod výrezom môže zobrazovať názov pohľadu výrezu a držať s ním krok:

1. Pohľadu dajte názov: vyberte rám výrezu a vyplňte {{ui:Názov pohľadu}} vo {{ui:Vlastnosti}} — alebo uložte pohľad na karte {{ui:Model}} príkazom {{cmd:NAMEDVIEW}} a s vybratým výrezom zadajte {{cmd:VPVIEW}}, `V` a názov pohľadu: výrez zobrazí tento pohľad a prevezme jeho názov.
2. Zadajte {{cmd:VIEWLABEL}} (`VL`) a stlačte {{key:Enter}}, potom kliknite, kam má popis ísť ({{key:Enter}} ho umiestni pod ľavý dolný roh výrezu).

Keď sa názov pohľadu zmení, popis sa zmení s ním, v tom istom kroku späť.

## Zmrazenie hladiny v jednom výreze

Ak chcete skryť hladinu v jednom výreze, ale nie v ostatných (napríklad nábytok v detaile):

1. Vyberte rám výrezu alebo pracujte vnútri neho (dvojklik).

Panel {{ui:Hladiny}} dostane na každom riadku jedno tlačidlo navyše a nad zoznamom je o tom riadok.

2. Kliknite na toto tlačidlo v riadku hladiny.

Hladina zmizne iba z tohto výrezu. Kliknutím znova ju odmrazíte; {{key:Mod+Z}} vráti oboje späť. Pre viac hladín alebo výrezov naraz zadajte {{cmd:VPLAYER}}: `Zmraziť (F)` alebo `Rozmraziť (T)`, názvy hladín (`A-*` vezme každú hladinu začínajúcu na A-), potom `Aktuálna (C)`, `Všetky (A)` alebo `Vybrať (S)`. {{cmd:VPLAYER}} `V` (Vpvisdflt) vyberie hladiny, ktoré nové výrezy začínajú zmrazené.

## Ďalšie listy

Každé {{ui:+}} pridá ďalší list (`Layout2`, `Layout3` …) s ďalším číslom listu. Ak chcete zmazať otvorený list, stlačte {{key:Esc}} a kliknite na {{ui:Zmazať tento list}} v pravom paneli. Nič sa nepýta; {{key:Mod+Z}} ho vráti späť.

List vykreslite pomocou {{ui:Vykresliť tento list}} alebo {{key:Mod+P}}; pozri [Vykreslenie do PDF](topic:plot-pdf).

## Časté chyby

- **Výrez nič nezobrazuje.** Model je prázdny alebo je pohľad nasmerovaný inam. Vyberte rám a kliknite na {{ui:Zobraziť celý model}}.
- **Zoznam mierok ukazuje iba pomery a žiadne stopové a palcové mierky.** Na karte {{ui:Model}} nastavte {{ui:Jednotky}} na {{ui:Palce}} alebo {{ui:Stopy}}.
- **Mierka 1:100 vyzerá desaťkrát väčšia alebo menšia.** Jednotky výkresu sú nesprávne. Nastavte {{ui:Jednotky}} na to, čím jedna jednotka skutočne je.
- **Kliknutie na pôdorys vo výreze nič nevyberie.** Na liste vyberáte objekty samotného listu. Najprv dvakrát kliknite vnútri výrezu, aby ste cez neho pracovali s pôdorysom.
- **Kliknutia mimo výrezu nič nerobia.** Ste vnútri výrezu: dvakrát kliknite mimo neho alebo zadajte {{cmd:PS}}, aby ste znova pracovali s listom.
- **„Výrezy sa dávajú na rozloženie. Najprv otvorte kartu rozloženia (alebo ju vytvorte príkazom LAYOUT).“** {{cmd:MVIEW}} funguje iba na karte listu.
