---
title: Obrazovka CadCraft
summary: Prehliadka každej lišty, panela a karty kresliacej aplikácie pod názvom, ktorý má na obrazovke.
keywords: obrazovka, rozhranie, panel nástrojov, pás kariet, panely, príkazový riadok, stavový riadok, karty, karty rozložení, vlastnosti, panel hladín, prehliadka
from: b5a33388
---

Obrazovka má sedem častí. Zhora nadol: lišta aplikácie, panel nástrojov, kresliaca plocha s panelom na každej strane, karty pod výkresom, príkazový riadok a stavový riadok.

## Lišta aplikácie

Tenká lišta úplne hore patrí stránke, nie výkresu. Zobrazuje značku CadCraft, názov aplikácie, verziu, ktorú používate, odkaz na stránku aplikácie, tlačidlo {{ui:Pomocník}} (alebo {{key:F1}}), tlačidlo {{ui:Uložiť na offline použitie}}, tlačidlo {{ui:Celá obrazovka}} a dve tlačidlá motívu, {{ui:Papier}} a {{ui:Model}}.

Tlačidlo {{ui:Nastavenia}} (ozubené koleso) obsahuje vlastné nastavenia CadCraft a tie, ktoré majú spoločné všetky aplikácie: pozrite [Nastavenia CadCraft](topic:settings).

{{ui:Uložiť na offline použitie}} uchová v tomto prehliadači kópiu CadCraft vrátane čítačky DWG, aby sa otvoril bez pripojenia. Jeho názov ukazuje stav: „Ukladanie N z M“, „Pripravené offline“, „Nepodarilo sa uložiť“ alebo „Offline nie je k dispozícii“. Pozrite [Práca offline](common:offline).

:::note
Tlačidlá {{ui:Papier}} a {{ui:Model}} na lište aplikácie menia iba farby obrazovky: {{ui:Papier}} je svetlý motív, {{ui:Model}} tmavý. S kartou {{ui:Model}} pod výkresom, ktorá prepína medzi výkresom a jeho listami, nemajú nič spoločné.
:::

Tlačidlo {{ui:Celá obrazovka}} alebo {{key:Ctrl+Shift+F}} (kláves Control na každom počítači, vrátane Macu) prepína tri režimy obrazovky: normálny, celá obrazovka a celá obrazovka so skrytými lištami. Pri skrytých lištách ich vrátite presunutím ukazovateľa k hornému okraju obrazovky.

## Panel nástrojov

Pod lištou aplikácie je panel nástrojov. Každé tlačidlo spúšťa príkaz presne tak, ako keby ste ho napísali, takže príkazový riadok kladie rovnaké otázky v oboch prípadoch. Ak sa nad tlačidlom pozdržíte, zobrazí sa alias jeho príkazu. Skupiny sú:

| Skupina | Tlačidlá |
|---|---|
| Súbor | {{ui:Nový}}, {{ui:Otvoriť}}, {{ui:Uložiť}}, {{ui:Uložiť ako}}, {{ui:Vykresliť}} |
| Kreslenie | {{ui:Úsečka}}, {{ui:Lomená čiara}}, {{ui:Kružnica}}, {{ui:Oblúk}}, {{ui:Obdĺžnik}}, {{ui:Mnohouholník}}, {{ui:Elipsa}}, {{ui:Text}}, {{ui:Odsek}}, {{ui:Šráfovanie}} a {{ui:Viac}}: {{ui:Bod}}, {{ui:Konštrukčná čiara}} a {{ui:Lúč}} (pozrite [Konštrukčné čiary a lúče](topic:construction-lines)) |
| Úpravy | {{ui:Presunúť}}, {{ui:Kopírovať}}, {{ui:Otočiť}}, {{ui:Mierka}}, {{ui:Zrkadliť}}, {{ui:Natiahnuť}}, {{ui:Odsadiť}}, {{ui:Orezať}}, {{ui:Predĺžiť}}, {{ui:Zaoblenie}}, {{ui:Skosenie}}, {{ui:Rozložiť}}, {{ui:Zmazať}} a {{ui:Viac}}: {{ui:Pole}}, {{ui:Spojiť}}, {{ui:Preniesť vlastnosti}}, {{ui:Prerušiť}} a {{ui:Zmeniť dĺžku}} |
| Popisy | {{ui:Dĺžková}}, {{ui:Zarovnaná}}, {{ui:Uhol}}, {{ui:Polomer}}, {{ui:Priemer}} (kóty), {{ui:Vynášacia čiara}} (viacnásobná vynášacia čiara) a {{ui:Viac}}: {{ui:Pokračujúca kóta}}, {{ui:Kóta od základne}} a {{ui:Revízny oblak}} |
| Parametrické | {{ui:Automaticky}}, {{ui:Väzba}}, {{ui:Kóta}}, {{ui:Parametre}} a {{ui:Viac}} s každou väzbou (pozrite [Väzby vo výkrese](topic:constraints)) |
| Bloky | {{ui:Vytvoriť}}, {{ui:Vložiť}}, {{ui:Knižnica}} a {{ui:Viac}}: {{ui:Upraviť blok}} a {{ui:Definovať atribút}} |
| Listy | {{ui:Nový list}}, {{ui:Výrez}} |
| Upraviť | {{ui:Späť}}, {{ui:Znova}}, {{ui:Kopírovať}} (do schránky), {{ui:Prilepiť}} a {{ui:Viac}}: ponuka s položkami {{ui:Vystrihnúť}}, {{ui:Kopírovať}}, {{ui:Prilepiť}}, {{ui:Prilepiť na rovnaké miesto}}, {{ui:Duplikovať a presunúť}}, {{ui:Zmazať}}, {{ui:Vybrať všetko}}, {{ui:Zrušiť výber}}, {{ui:Rýchly výber}}, {{ui:Vybrať podobné}} a {{ui:Hľadať a nahradiť}}, každá s klávesovou skratkou |
| Zobrazenie | {{ui:Rozsah}}, {{ui:Okno}}, {{ui:Predchádzajúci}} a {{ui:Viac}}: {{ui:Merať vzdialenosť}}, {{ui:Plocha}}, {{ui:Merať (polomer, uhol …)}} a rozdelená obrazovka: {{ui:Rozdeliť vedľa seba}}, {{ui:Rozdeliť nad seba}}, {{ui:Štyri tabule}}, {{ui:Jedna tabuľa}} (pozrite [Rozdelenie obrazovky](topic:split-screen)) a {{ui:Otočiť pohľad o 90° vľavo}}, {{ui:Otočiť pohľad o 90° vpravo}}, {{ui:Späť do sveta}} (pozrite [Otočenie pohľadu](topic:ucs-and-turned-view)) |

{{ui:Kopírovať}} v skupine Úpravy je príkaz {{cmd:COPY}} (základný bod, potom miesto, kam ide každá kópia); {{ui:Kopírovať}} v skupine Upraviť vloží objekty do schránky pre {{ui:Prilepiť}}. Pozrite [Kopírovanie, prilepenie a duplikovanie](topic:copy-paste). Tlačidlo bežiaceho príkazu zostáva zvýraznené, kým sa príkaz neskončí. Popisy nástrojov uvádzajú skratky pre Windows („Ctrl+O“); na Macu funguje aj {{key:Mod+O}}.

V nízkom okne (napríklad na notebooku so zobrazením zväčšeným na 125 % alebo viac) panel nástrojov nikdy nezaberie miesto výkresu: keď by výkres dostal príliš malú výšku, tlačidlá stratia slová pod ikonami a názvy skupín (názov tlačidla uvidíte po podržaní ukazovateľa) a ak to stále nestačí, panel nástrojov sa zmení na jeden riadok, ktorý sa posúva do strán. Vyššie okno slová vráti.

## Ľavý panel

Panel vľavo má tri časti.

- **{{ui:Hladiny}}.** Každá hladina vo výkrese s vyplneným bodom pri aktuálnej. Kliknutím na názov urobíte hladinu aktuálnou. Každý riadok má farebnú vzorku (kliknutím vyberiete farbu) a štyri tlačidlá: zapnúť/vypnúť (oko), zmraziť (snehová vločka), zamknúť (zámok) a vykresľovať (tlačiareň). {{ui:Nová hladina}} otvorí okno na pridanie hladiny. Pozrite [Usporiadanie výkresu pomocou hladín](topic:layers).
- **{{ui:Bloky}}.** Bloky definované vo výkrese, koľkokrát sa každý používa, a tlačidlo {{ui:Vložiť}} pri každom. Pozrite [Vytváranie a vkladanie blokov](topic:blocks).
- **{{ui:Výkres}}.** Údaje o otvorenom súbore: názov (s „(zmenené)“, keď sú neuložené úpravy), formát, veľkosť, jednotky, počet objektov, hladín, blokov a listov. Po otvorení súboru zoznam v rámčeku „O tomto súbore“ uvádza všetko, čo CadCraft nemohol zobraziť alebo musel previesť.

## Kresliaca plocha

Stred obrazovky je výkres. Ukazovateľ je kríž. Keď CadCraft chce bod, malá značka a štítok („Koncový bod“, „Stred“) ukazujú, kde uchopenie objektu dopadne. Keď chce objekty, kríž má výberový štvorček a objekty pod ním sa rozsvietia.

Keď je výkres prázdny, karta „Začnite kresliť“ ukazuje niekoľko prvých príkazov. Zmizne, hneď ako spustíte príkaz alebo otvoríte súbor. Súbor DWG alebo DXF môžete pustiť kdekoľvek na túto plochu a otvoriť ho.

## Karty pod výkresom

Pod výkresom sú karty: najprv {{ui:Model}}, potom {{ui:3D}}, potom jedna karta na každý list (rozloženie) a nakoniec tlačidlo {{ui:+}}.

- {{ui:Model}} je samotný výkres v plnej veľkosti, vo výkresových jednotkách.
- {{ui:3D}} zobrazuje výkres ležiaci na zemi a telesá z neho vytvorené. Kým je zobrazená, panel nástrojov má namiesto skupín výkresu skupinu {{ui:3D}}. Pozrite [Model v 3D](topic:3d-solids).
- Každá karta listu je list papiera s popisovým poľom a výrezmi do modelu. To, čo tam kreslíte, je v jednotkách papiera (milimetre alebo palce). Dvojitým kliknutím vnútri výrezu pracujete cez neho na modeli (pozrite [Práca na modeli cez výrez](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Dlhý názov listu sa na karte skráti; celý názov uvidíte po podržaní ukazovateľa nad kartou. Pri mnohých listoch {{ui:Nastavenia}} › {{ui:CadCraft}} › {{ui:Karty listov}} › {{ui:Iba čísla listov}} zobrazí na karte iba číslo každého listu (A-101).
- {{ui:+}} vytvorí nový list s okrajom, popisovým poľom a jedným výrezom. Je to to isté ako príkaz {{cmd:LAYOUT}}.
- Dvojitým kliknutím na kartu listu ju premenujete. Pri zameranej karte presúvajú medzi kartami {{key:Left}} a {{key:Right}}.

Každá karta si uchováva vlastné zväčšenie a posun. Pozrite [Príprava listu](topic:sheets-and-viewports).

## Pravý panel: Vlastnosti

Panel vpravo sa mení podľa toho, čo je vybrané.

- **Nič nie je vybrané, na karte {{ui:Model}}:** nadpis znie {{ui:Aktuálne nastavenia}}. Tu nastavíte {{ui:Hladina}}, {{ui:Farba}} a {{ui:Výška textu}} pre nové objekty, {{ui:Jednotky}} výkresu a veľkosti nových kót ({{ui:Výška textu}}, {{ui:Veľkosť šípky}}, {{ui:Desatinné miesta}}, {{ui:Celková mierka}}).
- **Nič nie je vybrané, na liste:** nadpis znie „List:“ a názov listu. Môžete list premenovať, zmeniť jeho {{ui:Papier}} a {{ui:Orientácia}}, {{ui:Vykresliť tento list}} alebo {{ui:Zmazať tento list}}. Nižšie nasledujú nastavenia pre nové objekty.
- **Vybraný jeden objekt:** jeho typ ako nadpis (Úsečka, Kružnica, Text, Kóta, Výrez …), potom jeho hladina, farba a geometria. Zadajte novú hodnotu a stlačte {{key:Enter}}, čím ju zmeníte.
- **Vybraných viac objektov:** koľko ich je a ich spoločná {{ui:Hladina}} a {{ui:Farba}}. Zmena niektorej z nich zmení všetky. „Rôzne“ znamená, že sa líšia.

Pozrite [Úpravy pomocou úchytov a Vlastností](topic:grips-and-properties).

Pod ním sa panel {{ui:Parametre}} otvorí, keď zvolíte {{ui:Parametre}} alebo napíšete {{cmd:PARAMETERS}}: každý parameter a rozmerová väzba v jednej tabuľke. Pozrite [Používanie parametrov a rovníc](topic:parameters).

## Príkazový riadok

Dole je príkazový riadok: história toho, čo ste robili, a pod ňou výzva.

- Označenie výzvy znie `Príkaz:`, keď nič nebeží. Kým príkaz beží, zobrazuje otázku, jeho voľby v hranatých zátvorkách a predvolenú hodnotu v lomených zátvorkách, napríklad `Zadajte polomer kružnice [Priemer] <500>:`.
- Keď píšete názov príkazu, nápoveda vpravo navrhuje zodpovedajúce príkazy. Klávesom {{key:Tab}} prijmete prvý. „Taký príkaz neexistuje“ znamená, že nič nezodpovedá.
- {{key:Up}} a {{key:Down}} vrátia riadky, ktoré ste predtým napísali.
- História uchováva posledných 400 riadkov. Tu sa zobrazujú správy príkazov, merania z {{cmd:DIST}} a {{cmd:LIST}} a správy o ukladaní a vykresľovaní.

## Stavový riadok

Úplne spodný riadok je stavový riadok.

- **Súradnice** vľavo: X a Y kríža. Kým príkaz má základný bod, zobrazuje aj vzdialenosť a uhol od neho, napríklad `Δ 1200 < 90°`.
- **Správy** v strede, napríklad „Ortho zapnuté“ alebo „Aktuálna hladina: Walls“. Po niekoľkých sekundách zmiznú.
- **{{ui:Mriežka}}**, **{{ui:Ortho}}**, **{{ui:Polárne}}**, **{{ui:Prichytávanie}}**, **{{ui:Sledovanie}}**, **{{ui:Dyn}}** a **{{ui:LWT}}** vpravo. Každé je prepínač; stlačené tlačidlo je zapnuté. {{ui:LWT}} zobrazuje hrúbky čiar na obrazovke (pozrite [Hrúbky čiar a typy čiar](topic:units-papers-scales#line-weights-and-linetypes)). Malá šípka vedľa {{ui:Prichytávanie}} otvorí {{ui:Uchopenia objektov}}, kde zaškrtnete, ktoré uchopenia sú aktívne. Pozrite [Uchopenie bodov na objektoch](topic:object-snaps).

## Dialógové okno Vykreslenie do PDF

{{ui:Vykresliť}} (alebo {{key:Mod+P}}) otvorí dialógové okno {{ui:Vykresliť do PDF}} s nastaveniami vľavo a živou ukážkou vpravo. Pozrite [Vykreslenie do PDF](topic:plot-pdf).

## Pomocník

{{key:F1}} alebo tlačidlo {{ui:Pomocník}} otvorí tohto pomocníka ako bočný panel; výkres zostáva použiteľný vedľa neho. Funguje bez pripojenia. Opätovné {{key:F1}} alebo {{key:Esc}} v paneli ho zatvorí. Pozrite [Používanie tohto pomocníka](common:help).
