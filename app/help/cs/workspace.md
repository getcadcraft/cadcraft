---
title: Obrazovka CadCraftu
summary: Prohlídka všech lišt, panelů a karet kreslicí aplikace podle názvu, který mají na obrazovce.
keywords: obrazovka, rozhraní, panel nástrojů, pás karet, panely, příkazový řádek, stavový řádek, karty, karty rozvržení, vlastnosti, panel vrstev, prohlídka
from: b5a33388
---

Obrazovka má sedm částí. Shora dolů: lištu aplikace, panel nástrojů, plochu výkresu s panelem na každé straně, karty pod výkresem, příkazový řádek a stavový řádek.

## Lišta aplikace

Tenká lišta úplně nahoře patří webu, ne výkresu. Zobrazuje značku CadCraft, název aplikace, kterou verzi používáte, odkaz na stránku aplikace, tlačítko {{ui:Nápověda}} (nebo {{key:F1}}), tlačítko {{ui:Uložit pro offline}}, tlačítko {{ui:Celá obrazovka}} a dvě tlačítka motivu, {{ui:Papír}} a {{ui:Model}}.

Tlačítko {{ui:Nastavení}} (ozubené kolo) obsahuje vlastní nastavení CadCraftu a nastavení společná všem aplikacím: viz [Nastavení CadCraftu](topic:settings).

{{ui:Uložit pro offline}} uchová v tomto prohlížeči kopii CadCraftu, včetně jeho čtečky DWG, aby se otevřel bez připojení. Jeho popisek ukazuje stav: „Ukládání N z M“, „Připraveno offline“, „Nepodařilo se uložit“ nebo „Offline není dostupné“. Viz [Práce offline](common:offline).

:::note
Tlačítka {{ui:Papír}} a {{ui:Model}} v liště aplikace mění jen barvy obrazovky: {{ui:Papír}} je světlý motiv, {{ui:Model}} tmavý. S kartou {{ui:Model}} pod výkresem, která přepíná mezi výkresem a jeho listy, nemají nic společného.
:::

Tlačítko {{ui:Celá obrazovka}} nebo {{key:Ctrl+Shift+F}} (klávesa Control na každém počítači, i na Macu) přepíná tři režimy obrazovky: normální, celá obrazovka a celá obrazovka se skrytými lištami. Při skrytých lištách je vrátíte přesunutím ukazatele k hornímu okraji obrazovky.

## Panel nástrojů

Pod lištou aplikace je panel nástrojů. Každé tlačítko spouští příkaz, přesně jako byste ho napsali, takže příkazový řádek klade stejné otázky tak či onak. Najetím na tlačítko zobrazíte jeho zkratku příkazu. Skupiny jsou:

| Skupina | Tlačítka |
|---|---|
| Soubor | {{ui:Nový}}, {{ui:Otevřít}}, {{ui:Uložit}}, {{ui:Uložit jako}}, {{ui:Vykreslit}} |
| Kreslení | {{ui:Úsečka}}, {{ui:Mnohočára}}, {{ui:Kružnice}}, {{ui:Oblouk}}, {{ui:Obdélník}}, {{ui:Mnohoúhelník}}, {{ui:Elipsa}}, {{ui:Text}}, {{ui:Odstavec}}, {{ui:Šrafa}} a {{ui:Více}}: {{ui:Bod}}, {{ui:Konstrukční přímka}} a {{ui:Polopřímka}} (viz [Konstrukční přímky a polopřímky](topic:construction-lines)) |
| Úpravy | {{ui:Přesunout}}, {{ui:Kopírovat}}, {{ui:Otočit}}, {{ui:Měřítko}}, {{ui:Zrcadlit}}, {{ui:Natáhnout}}, {{ui:Odsadit}}, {{ui:Oříznout}}, {{ui:Prodloužit}}, {{ui:Zaoblení}}, {{ui:Sražení}}, {{ui:Rozložit}}, {{ui:Smazat}} a {{ui:Více}}: {{ui:Pole}}, {{ui:Spojit}}, {{ui:Shodné vlastnosti}}, {{ui:Přerušit}} a {{ui:Prodloužit délku}} |
| Kótování | {{ui:Délková}}, {{ui:Zarovnaná}}, {{ui:Úhel}}, {{ui:Poloměr}}, {{ui:Průměr}} (kóty), {{ui:Výnoska}} (víceúrovňová výnoska) a {{ui:Více}}: {{ui:Navazující kóta}}, {{ui:Základní kóta}} a {{ui:Revizní oblak}} |
| Parametrické | {{ui:Automaticky}}, {{ui:Vazby}}, {{ui:Kóta}}, {{ui:Parametry}} a {{ui:Více}} s jednotlivými vazbami (viz [Vazby ve výkresu](topic:constraints)) |
| Bloky | {{ui:Vytvořit}}, {{ui:Vložit}}, {{ui:Knihovna}} a {{ui:Více}}: {{ui:Upravit blok}} a {{ui:Definovat atribut}} |
| Listy | {{ui:Nový list}}, {{ui:Výřez}} |
| Úpravy (schránka) | {{ui:Zpět}}, {{ui:Znovu}}, {{ui:Kopírovat}} (do schránky), {{ui:Vložit}} a {{ui:Více}}: nabídka s {{ui:Vyjmout}}, {{ui:Kopírovat}}, {{ui:Vložit}}, {{ui:Vložit na stejné místo}}, {{ui:Duplikovat a přesunout}}, {{ui:Smazat}}, {{ui:Vybrat vše}}, {{ui:Zrušit výběr}}, {{ui:Rychlý výběr}}, {{ui:Vybrat podobné}} a {{ui:Najít a nahradit}}, každá se svou klávesou |
| Pohled | {{ui:Rozsah}}, {{ui:Okno}}, {{ui:Předchozí}} a {{ui:Více}}: {{ui:Změřit vzdálenost}}, {{ui:Plocha}}, {{ui:Změřit (poloměr, úhel …)}} a rozdělená obrazovka: {{ui:Rozdělit vedle sebe}}, {{ui:Rozdělit pod sebou}}, {{ui:Čtyři okna}}, {{ui:Jedno okno}} (viz [Rozdělení obrazovky](topic:split-screen)) a {{ui:Otočit pohled o 90° doleva}}, {{ui:Otočit pohled o 90° doprava}}, {{ui:Zpět na svět}} (viz [Otočení pohledu](topic:ucs-and-turned-view)) |

{{ui:Kopírovat}} ve skupině {{ui:Úpravy}} je příkaz {{cmd:COPY}} (základní bod, potom kam jde každá kopie); {{ui:Kopírovat}} ve skupině úprav schránky vloží objekty do schránky pro {{ui:Vložit}}. Viz [Kopírování, vkládání a duplikování](topic:copy-paste). Tlačítko právě běžícího příkazu zůstává zvýrazněné, dokud příkaz neskončí. Popisky nástrojů uvádějí zkratky pro Windows („Ctrl+O“); na Macu funguje také {{key:Mod+O}}.

V nízkém okně (například notebook se zobrazením zvětšeným na 125 % nebo více) panel nástrojů nikdy nezabere místo výkresu: když by výkres dostal příliš malou výšku, tlačítka vynechají slova pod ikonami a názvy skupin (najetím na tlačítko zobrazíte jeho název), a pokud to nestačí, panel nástrojů se změní na jeden řádek posouvaný do stran. Vyšší okno slova vrátí.

## Levý panel

Panel vlevo má tři sekce.

- **{{ui:Vrstvy}}.** Každá vrstva ve výkresu, s plnou tečkou u aktuální. Kliknutím na název vrstvu učiníte aktuální. Každý řádek má vzorek barvy (kliknutím vyberete barvu) a čtyři tlačítka: zapnuto/vypnuto (oko), zamrazit (sněhová vločka), zamknout (visací zámek) a tisk (tiskárna). {{ui:Nová vrstva}} otevře okno pro přidání. Viz [Uspořádání výkresu pomocí vrstev](topic:layers).
- **{{ui:Bloky}}.** Bloky definované ve výkresu, kolikrát je každý použit, a tlačítko {{ui:Vložit}} u každého. Viz [Vytváření a vkládání bloků](topic:blocks).
- **{{ui:Výkres}}.** Údaje o otevřeném souboru: název (s „(změněno)“, jsou-li neuložené úpravy), formát, velikost, jednotky, počet objektů, vrstev, bloků a listů. Po otevření souboru rámeček „O tomto souboru“ uvádí vše, co CadCraft nemohl zobrazit nebo musel převést.

## Plocha výkresu

Střed obrazovky je výkres. Ukazatel je zaměřovací kříž. Když CadCraft chce bod, malá značka a popisek („Koncový bod“, „Střed úsečky“) ukazují, kam dopadne uchopení na objekt. Když chce objekty, má kříž výběrové okénko a objekty pod ním se rozsvítí.

Když je výkres prázdný, karta „Začněte kreslit“ zobrazí několik prvních příkazů. Zmizí, jakmile spustíte příkaz nebo otevřete soubor. Soubor DWG nebo DXF můžete pustit kamkoli na tuto plochu a otevřít ho.

## Karty pod výkresem

Pod výkresem jsou karty: nejprve {{ui:Model}}, potom {{ui:3D}}, potom jedna karta na každý list (rozvržení) a tlačítko {{ui:+}}.

- {{ui:Model}} je samotný výkres, v plné velikosti, ve výkresových jednotkách.
- {{ui:3D}} ukazuje výkres ležící na zemi a tělesa z něj vytvořená. Dokud je zobrazena, má panel nástrojů místo skupin kreslení skupinu {{ui:3D}}. Viz [Model ve 3D](topic:3d-solids).
- Každá karta listu je list papíru s razítkem a výřezy na model. Co tam nakreslíte, je v jednotkách papíru (milimetry nebo palce). Dvojitým kliknutím uvnitř výřezu pracujete skrz něj na modelu (viz [Práce na modelu skrz výřez](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Dlouhý název listu je na jeho kartě zkrácen; najetím na kartu zobrazíte celý název. U mnoha listů {{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Karty listů}} › {{ui:Jen čísla listů}} ukáže na kartě jen číslo každého listu (A-101).
- {{ui:+}} vytvoří nový list s rámem, razítkem a jedním výřezem. Je to totéž jako příkaz {{cmd:LAYOUT}}.
- Dvojitým kliknutím na kartu listu ji přejmenujete. S aktivní kartou se {{key:Left}} a {{key:Right}} pohybujete mezi kartami.

Každá karta si pamatuje vlastní zoom a posun. Viz [Příprava listu](topic:sheets-and-viewports).

## Pravý panel: Vlastnosti

Panel vpravo se mění podle toho, co je vybráno.

- **Nic nevybráno, na kartě {{ui:Model}}:** nadpis zní {{ui:Aktuální nastavení}}. Zde nastavíte {{ui:Vrstvu}}, {{ui:Barvu}} a {{ui:Výšku textu}} pro nové objekty, {{ui:Jednotky}} výkresu a velikosti pro nové kóty ({{ui:Výška textu}}, {{ui:Velikost šipky}}, {{ui:Desetinná místa}}, {{ui:Celkové měřítko}}).
- **Nic nevybráno, na listu:** nadpis zní „List:“ a název listu. Můžete list přejmenovat, změnit jeho {{ui:Papír}} a {{ui:Orientaci}}, {{ui:Vykreslit tento list}} nebo {{ui:Smazat tento list}}. Níže následují nastavení pro nové objekty.
- **Vybrán jeden objekt:** jeho typ jako nadpis (Úsečka, Kružnice, Text, Kóta, Výřez …), potom jeho vrstva, barva a geometrie. Napište novou hodnotu a stiskněte {{key:Enter}} pro změnu.
- **Vybráno několik objektů:** kolik, a jejich společná {{ui:Vrstva}} a {{ui:Barva}}. Změna kterékoli změní všechny. „Proměnné“ znamená, že se liší.

Viz [Úpravy pomocí úchopů a Vlastností](topic:grips-and-properties).

Pod ním se otevře panel {{ui:Parametry}}, když zvolíte {{ui:Parametry}} nebo napíšete {{cmd:PARAMETERS}}: všechny parametry a kótové vazby v jedné tabulce. Viz [Používání parametrů a rovnic](topic:parameters).

## Příkazový řádek

Dole je příkazový řádek: historie toho, co jste udělali, a pod ní výzva.

- Popisek výzvy zní `Příkaz:`, když nic neběží. Při běhu příkazu ukazuje otázku, její volby v hranatých závorkách a výchozí hodnotu ve špičatých, například `Zadejte poloměr kružnice [Průměr] <500>:`.
- Jak píšete název příkazu, nápověda vpravo navrhuje odpovídající příkazy. Klávesou {{key:Tab}} přijmete první. „Takový příkaz není“ znamená, že nic neodpovídá.
- {{key:Up}} a {{key:Down}} vrátí řádky, které jste psali dříve.
- Historie uchovává posledních 400 řádků. Zobrazují se zde zprávy příkazů, měření z {{cmd:DIST}} a {{cmd:LIST}} a zprávy o uložení a vykreslení.

## Stavový řádek

Úplně spodní řada je stavový řádek.

- **Souřadnice** vlevo: X a Y zaměřovacího kříže. Když má příkaz základní bod, zobrazuje také vzdálenost a úhel od něj, například `Δ 1200 < 90°`.
- **Zprávy** uprostřed, například „Ortogonální zapnuto“ nebo „Aktuální vrstva: Walls“. Po několika sekundách zmizí.
- **{{ui:Mřížka}}**, **{{ui:Ortogonální}}**, **{{ui:Polární}}**, **{{ui:Přichytávání}}**, **{{ui:Sledování}}**, **{{ui:Dyn}}** a **{{ui:TČ}}** vpravo. Každé je přepínač; stisknuté tlačítko je zapnuté. {{ui:TČ}} zobrazuje tloušťky čar na obrazovce (viz [Tloušťky a typy čar](topic:units-papers-scales#line-weights-and-linetypes)). Malá šipka vedle {{ui:Přichytávání}} otevře {{ui:Uchopení na objekty}}, kde zaškrtnete, která uchopení jsou aktivní. Viz [Uchopení na body objektů](topic:object-snaps).

## Dialog Vykreslit do PDF

{{ui:Vykreslit}} (nebo {{key:Mod+P}}) otevře dialog {{ui:Vykreslit do PDF}} s nastavením vlevo a živým náhledem vpravo. Viz [Vykreslení do PDF](topic:plot-pdf).

## Nápověda

{{key:F1}} nebo tlačítko {{ui:Nápověda}} otevře tuto nápovědu jako boční panel; výkres zůstává vedle ní použitelný. Funguje bez připojení. Opětovný {{key:F1}} nebo {{key:Esc}} uvnitř panelu ji zavře. Viz [Používání této nápovědy](common:help).
