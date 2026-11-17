---
title: Súbory: čo sa otvorí, čo sa uloží
summary: Formáty, ktoré CadCraft otvára, ukladá a exportuje, čo sa zachová alebo prevedie a kam súbory idú.
keywords: xclip, clip, orezanie xclip, zviazať orezané, dwg, dxf, pdf, r12, otvoriť, uložiť, exportovať, importovať, formáty, prevod, stiahnuť, saveas, dxfout, uložiť ako, dwg save, formát, qsave, xref, xattach, prepojený výkres, externý odkaz, zviazať, znova načítať, odpojiť
from: b8c5778d
---

## Na prvý pohľad

| Formát | Otvoriť | Uložiť | Poznámky |
|---|---|---|---|
| DXF (text alebo binárny, ľubovoľná verzia) | Áno | Áno, ako DXF R12, DXF 2000 alebo DXF 2000 (binárny) | Binárny DXF sa otvorí rovnako ako textový a uloží sa späť ako binárny. |
| DWG | Áno | Áno, ako DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 alebo 2018) | Čítané a zapisované vlastnou knižnicou DWG v CadCraft (súbory AutoCAD R13 až 2018). Váš DWG sa nikdy nemení. Poškodené súbory alebo verzie, ktoré čítačka nepodporuje, sa odmietnu so správou. |
| PDF | Načíta stranu ako podklad alebo ako objekty ([PDF podklady](topic:pdf-underlay)) | Áno, vykreslením | Vektorové PDF listu alebo modelu v mierke. |

Každý výkres, ktorý otvoríte (alebo začnete tlačidlom {{ui:Nová}}), dostane vlastnú kartu nad oblasťou výkresu; nový výkres, ktorého sa ešte nik nedotkol, sa použije namiesto pridania karty. Kliknutím na kartu prepnete, tlačidlom {{ui:×}} ju zatvoríte (CadCraft sa najprv opýta, ak sú neuložené zmeny), alebo usporiadajte otvorené výkresy vedľa seba: pozri [Rozdelenie obrazovky](topic:split-screen).

## Otvorenie výkresu

- Stlačte {{key:Mod+O}}, kliknite na {{ui:Otvoriť}}, alebo zadajte `OPEN` a vyberte súbor.
- Alebo pretiahnite súbor `.dwg` alebo `.dxf` na oblasť výkresu.

Súbor sa číta vo vašom prehliadači. Nikam sa neodosiela. História uvedie, koľko objektov a hladín sa načítalo a ako dlho to trvalo; sekcia {{ui:Výkres}} v ľavom paneli zobrazuje formát, napríklad „DWG 2018 (AC1032)“.

Čítačka DWG je súčasťou CadCraft a načíta sa s prvým DWG, ktorý otvoríte po načítaní stránky (niekoľko stoviek KB), takže nie je potrebné čakať na samostatné sťahovanie. Číta súbor na pozadí, takže stránka počas otvárania veľkého DWG ďalej reaguje.

DXF sa číta po častiach asi po 4 MB, nikdy ako jeden blok textu, takže sa otvorí aj DXF väčší ako 512 MB. Obmedzuje ho pamäť počítača: pri otváraní DXF počítajte s tým, že zaberie približne 16 až 20-násobok veľkosti súboru (100 MB DXF s asi 690 000 objektmi zaberal v našom teste asi 1.5 GB).

### Čo sa načíta

- Úsečky, oblúky, kružnice, lomené čiary (s oblúkovými úsekmi), elipsy, body, text a viacriadkový text, telesá, šráfovania (štandardné vzory nakreslené ako ich čiary, ostatné ako plochý tón), odkazy na bloky s ich atribútmi (hodnoty, ktoré môžete upraviť; pozri [Atribúty bloku](topic:attributes)), kóty a rozloženia s ich výrezmi.
- Splajny sa načítajú ako splajny (stupeň, riadiace body, uzly, váhy, body prispôsobenia); pozri [Splajny a lomené čiary](topic:splines).
- Viacnásobné vynášacie čiary s jednou vynášacou čiarou a textom sa načítajú ako viacnásobné vynášacie čiary CadCraft, ktoré môžete upraviť (pozri {{cmd:MLEADER}}). Ostatné (s blokom, viacerými vynášacími čiarami alebo zakrivenými čiarami) sa nakreslia tak, ako ich nakreslil iný program, a pohybujú sa ako jeden celok; história uvedie, koľko ich bolo.
- Obrázky sa zobrazia ako rámček s názvom súboru obrázka, kým CadCraft nedáte súbor pomocou {{cmd:IMAGE}}: pozri [Obrázky vo výkrese](topic:pictures#show-the-pictures-a-dwg-uses). Výrezy (wipeouts) sa zobrazia ako ich rámček a to, čo je pod nimi, zostane viditeľné.
- Tabuľky v DWG sa načítajú tak, ako ich nakreslil iný program.
- 3D plochy v priestore modelu sa načítajú na karte {{ui:3D}}, nie ako 2D objekty; rovnako tie vnútri blokov, raz na každý odkaz na blok v modeli. V bloku a na liste sa kreslia aj ploché, ako obrysy. Pozri [Model v 3D](topic:3d-solids).
- Hladiny si zachovajú farbu, zapnutie, zmrazenie, uzamknutie a nastavenia vykreslenia. DEFPOINTS sa nikdy nevykreslí.
- Kóty sa stanú skutočnými, upraviteľnými kótami CadCraft, kde sa dajú prečítať ich body. Najprv sa zobrazia presne tak, ako ich nakreslil iný program; hneď ako niektorú zmeníte, CadCraft ju prekreslí vo svojom štýle.
- Každé rozloženie sa stane kartou listu. V inom programe má každé rozloženie skrytý prvý výrez, ktorý je samotným listom; CadCraft ho vynechá.

### Čo sa zatiaľ nenačíta

Čokoľvek, čo CadCraft nevie nakresliť, sa počíta, nehádže sa odhad. Okno „O tomto súbore“ v ľavom paneli to uvádza ako „Ešte nezobrazené:“ a za tým každý druh objektu a koľko ich je. Typické prípady sú tabuľky v DXF, siete a 3D telesá vnútri blokov. 3D telesá, oblasti a telesá v priestore modelu sa zobrazia na karte 3D (pozri [Model v 3D](topic:3d-solids#solids-from-other-programs)). Výrezy skrútené v súbore sa zobrazia otočené, ako tam, a pri uložení si zachovajú skrútenie; rovnako aktuálny UCS, pomenované UCS a otočený pohľad.

Text sa kreslí jedným písmom v štýle Helvetica. Popis, ktorý sa v užšom písme pôvodného programu zmestí na jeden riadok, sa môže v CadCraft zalomiť na dva riadky.

## Ukladanie

Existujú tri spôsoby uloženia. Každý z nich stiahne kópiu.

- **Uložiť**: stlačte {{key:Mod+S}}, kliknite na {{ui:Uložiť}}, alebo zadajte `SAVE` (aj `QSAVE`). Ukladá vo formáte výkresu: DWG, ak ste otvorili DWG, DXF, ak ste otvorili DXF. DWG si zachová verziu, s ktorou prišiel (súbor 2018 sa uloží ako 2018). Nový výkres použije formát a verziu DWG, ktoré ste naposledy zvolili v {{ui:Uložiť ako}} v tomto prehliadači; ak ste žiadnu nezvolili, DWG vo formáte AutoCAD 2000.
- **Uložiť ako**: stlačte {{key:Mod+Shift+S}}, kliknite na {{ui:Uložiť ako}}, alebo zadajte `SAVEAS`. Dialóg {{ui:Uložiť kópiu ako}} ponúka {{ui:DWG}}, so zoznamom {{ui:Verzia}} (AutoCAD 2018, 2013, 2010, 2007, 2004 alebo 2000), {{ui:DXF R12}} a {{ui:DXF 2000}}, každý s názvom súboru, ktorý dostane, a s už zvoleným aktuálnym formátom a verziou výkresu. Kliknutím na {{ui:Uložiť}} stiahnete, alebo {{ui:Zrušiť}} (alebo {{key:Esc}}) neuložíte nič; história potom uvedie „Nebolo uložené.“ Vaša voľba sa zachová: {{key:Mod+S}} ju od tej chvíle použije pre tento výkres a nové výkresy v tomto prehliadači s ňou začnú.
- **DXFOUT**: zadajte `DXFOUT`. Vždy stiahne kópiu DXF R12 a ďalšie {{key:Mod+S}} stále uloží vo vlastnom formáte výkresu.

Prehliadač stiahne `<názov výkresu>.dwg` alebo `<názov výkresu>.dxf`. Každé uloženie je **nové stiahnutie**; súbor, ktorý ste otvorili, sa nikdy neprepíše ani nezmení. História to potvrdí, napríklad „Kópia uložená ako Plan.dwg (DWG (AutoCAD 2018)). Váš pôvodný Plan.dxf je nezmenený.“ Pri DXF uvedie „(DXF R12, otvorí sa v ľubovoľnom CAD programe)“. Riadky pod ním uvádzajú všetko, čo sa cestou zmenilo.

Keď CadCraft beží v desktopovej aplikácii, ukladanie funguje ako v iných desktopových programoch: {{key:Mod+S}} zapíše výkres späť do súboru, ktorý ste otvorili, vo vlastnom formáte a verzii, a história uvedie, kam bol uložený. {{ui:Uložiť ako}} a exporty zobrazia systémový dialóg uloženia a súbor `.dwg`, `.dxf` alebo `.ccsheets`, na ktorý dvakrát kliknete, sa otvorí v CadCraft.

Pre PDF namiesto toho vykreslite (pozri nižšie).

## Čo DWG zachová a mení

CadCraft zapisuje DWG sám, vo vašom prehliadači, tou istou knižnicou DWG, ktorou ho číta. Verziu vyberte v {{ui:Uložiť ako}}: formát AutoCAD 2000 (verzia súboru AC1015) sa otvorí v najväčšom počte programov, aj starých; novšie formáty (2004, AC1018, až 2018, AC1032) si tiež zachovajú pravé farby. Nič sa neodosiela a ukladanie DWG funguje offline.

Každá verzia sa overuje tak, že sa uložené súbory čítajú späť pomocou troch čítačiek DWG iných programov a samotným CadCraft. DWG z CadCraft ešte nebol otvorený priamo v AutoCAD.

### Čo DWG zachová

- Úsečky, oblúky, kružnice, elipsy, body a lomené čiary s ich oblúkovými úsekmi.
- Jednoriadkový text so zarovnaním a koeficientom šírky.
- Viacriadkový a zalamovaný text ako viacriadkový text. Iný program ho zalomí znova z tej istej šírky.
- Farby objektov: podľa hladiny, podľa bloku, 255 štandardných farieb a pravé farby vo formáte 2004 a novšom.
- Hladiny s ich farbou, typom čiary, hrúbkou čiary a nastaveniami zapnutia, zmrazenia, uzamknutia a vykreslenia; vlastné typy čiar, hrúbky a mierky typov čiar objektov, vzory typov čiar a mierka typu čiary výkresu.
- Jednotky výkresu a formát dĺžky (desatinný, stopy a palce, zlomky…).
- Bloky so základným bodom a definíciami atribútov vrátane neviditeľných, konštantných a prednastavených.
- Odkazy na bloky s ich mierkou, otočením a hodnotami atribútov.
- Plné výplne a vzorované šráfovania s ich vzorom, mierkou a uhlom (vlastné čiary vzoru, takže iné programy kreslia tie isté čiary ako CadCraft).
- Kóty ako skutočné kóty: iné programy ich pri natiahnutí prepočítajú. Každá si zachová vlastné nastavenia (výška textu, veľkosť šípky, desatinné miesta, formát dĺžky) a svoj text a nesie nakreslenú kópiu, ktorú má každá kóta DWG.
- Listy (rozloženia): každý list s jeho veľkosťou papiera a jednotkami, to, čo je na ňom nakreslené, a jeho výrezy s pohľadom a mierkou.
- Pomenované pohľady.
- Viacnásobné vynášacie čiary ako viacnásobné vynášacie čiary.
- Názvy hladín a blokov tak, ako ste ich zadali, s veľkými a malými písmenami. (DXF R12 ich zapisuje veľkými písmenami.)

### Čo DWG mení

Každá z nich sa uvedie v histórii po uložení, keď sa týka vášho výkresu.

| V CadCraft | V uloženom DWG |
|---|---|
| Pravé farby (vybrané farebnou pipetou) vo formáte 2000 | Najbližšia štandardná farba: formát 2000 má iba 255. Uložte ako 2004 alebo novší, aby ste ich zachovali |
| Pomenované pohľady listu | Pohľady na papierovom priestore: DWG nehovorí, ktorý list, takže pri opätovnom otvorení CadCraft patria prvému listu |
| Viacriadkový text s koeficientom šírky | Normálna šírka písmen: v DWG koeficient šírky platí iba pre jednoriadkový text |
| Názvy hladín alebo blokov so znakmi, ktoré DWG nepovoľuje | Zmenené: názov z prepojeného výkresu ako `Base\|Walls` sa stane `Base$0$Walls` (spôsob, akým ho pomenuje väzba prepojeného výkresu) a ostatné znaky sa zmenia na `_` |

### Prečo R12 a čo sa prevádza

Pri uložení ako DXF CadCraft zapíše DXF R12, verziu, ktorú dokáže otvoriť každý CAD program. Je staršia ako niektoré funkcie, takže niekoľko vecí sa zapíše v jednoduchšej podobe:

| V CadCraft | V uloženom súbore R12 |
|---|---|
| Viacriadkový text | Jeden textový objekt na riadok |
| Elipsy | Lomené čiary, ktoré sledujú elipsu |
| Šráfovania (z otvorených súborov) | Iba ich obrysy |
| Pravé farby (vybrané farebnou pipetou) | Najbližšia štandardná farba |
| Hrúbky čiar a mierky typov čiar objektov | Vynechané: R12 nemá ani jedno (typy čiar sa zachovajú) |
| Názvy hladín a blokov | Zapísané veľkými písmenami; medzery a ostatné znaky sa zmenia na `_` a názvy sa skrátia na 31 znakov („Title block“ sa zmení na `TITLE_BLOCK`) |
| Hladiny nastavené na nevykresľovanie | Iné programy ich vykreslia (CadCraft si nastavenie zapamätá, keď výkres obsahuje list) |
| Kóty | Skutočné kóty s vlastným nakresleným blokom, takže iné programy ich zobrazia tak, ako ich vidíte |
| Viacnásobné vynášacie čiary | Čiary, hrot šípky a text, ktoré kreslia |
| Pomenované pohľady | Zachované, s názvami veľkými písmenami; pohľady listu sa vrátia na prvý list |
| Viacero listov | Prvý list je papierový priestor, ktorý zobrazuje každý program; ostatné sa zachovajú ako bloky s názvami `CCLAYOUT_1`, `CCLAYOUT_2` … , ktoré CadCraft pri otvorení súboru premení späť na listy |

História uvedie každú z nich, ktorá sa týkala vášho výkresu.

:::tip
Ak chcete na výkrese pracovať niekoľko dní, uložte ho ako DXF a pri ďalšom otvorení otvorte ten DXF. Všetko, čo CadCraft dokáže nakresliť, prežije tento cyklus, vrátane kót, blokov a všetkých listov.
:::

## Prepojené výkresy (externé odkazy)

{{cmd:XATTACH}} (`XA`, alebo {{ui:Bloky}} › {{ui:Viac}} › {{ui:Prepojiť výkres (xref)}}) prepojí ďalší DWG alebo DXF: vyberte súbor a potom kliknite, kam má ísť ({{key:Enter}} ho umiestni na 0,0). Načíta sa ako jeden blok pomenovaný podľa súboru, v správnej mierke, keď majú oba výkresy rôzne jednotky. Jeho hladiny a bloky si zachovajú svoje názvy s názvom prepojenia pred nimi — `Plan|Walls`, `Plan|Door` — takže sa nikdy nemiešajú s vašimi: zapínajte a vypínajte prepojené hladiny, zmrazujte alebo uzamykajte ich ako vlastné. Prepojenie je iba na čítanie: zmeňte druhý výkres a načítajte ho znova. To, čo nastavíte na hladinách prepojenia (farba, typ čiary, hrúbka, zapnutie/vypnutie, zmrazenie, uzamknutie, vykreslenie), sa zachová pri opätovnom načítaní, pri uložení výkresu ako DWG, kým je prepojenie stále prepojením, a keď iný výkres prepojí tento.

{{cmd:XREF}} (`XR`): `?` vypíše prepojenia (načítané alebo nie, ktorý súbor, koľko odkazov); `Pripojiť (A)` pripojí; `Znova načítať (R)` načíta jeden zo súboru (vyberte súbor znova: prehliadač sa k vašim priečinkom nedostane sám); `Zviazať (B)` zviaže jedno (stane sa z neho bežné bloky a hladiny pomenované `Plan$0$Walls`); `Odpojiť (D)` odpojí jedno (jeho odkazy a hladiny zmiznú). Každé je jeden krok späť.

{{cmd:XCLIP}} (`XC`) orezáva odkazy na bloky a prepojenia: vyberte ich, `N` pre novú hranicu, potom `R` a dva rohy alebo `P` a body mnohouholníka ({{key:Enter}} ho uzavrie); `D` odstráni orezanie. Zobrazí sa a vykreslí sa iba to, čo je vnútri, a orezanie sa pohybuje s odkazom. DWG a DXF 2000 orezania zachovávajú; DXF R12 uloží odkaz celý a uvedie to. Keď zviažete prepojenie, ktoré má orezané odkazy, {{cmd:XREF}} `B` sa opýta: `Všetko (A)` zviaže všetko, `Orezané (C)` zachová iba orezanú časť každého odkazu (čiary a oblúky sa rezú na hranici; texty a vnorené bloky zostanú, keď je ich vložovací bod vnútri).

Výkres, ktorý otvoríte, môže prepájať súbory, ktoré CadCraft nevidí: uvedie, koľko ich nie je načítaných. Použite {{cmd:XREF}}, `R` a vyberte každý súbor, aby ste ich videli.

Pri uložení sa načítané prepojenie **zviaže** do súboru (iné programy vidia bežné bloky a hladiny pomenované `Plan$0$…`) a história to uvedie. Prepojenie, ktoré nie je načítané, zostane prepojením na svoj súbor, v DWG aj DXF.

## Otvoriť v 3D

{{ui:Pohľad}} › {{ui:Viac}} › {{ui:Otvoriť v ModelCraft}} ({{cmd:OPENIN3D}}) otvorí výkres v 3D modelovacej aplikácii na novej karte, ako DWG, bez odoslania. Zmeny, ktoré tam urobíte, zostanú tam; uložte ich tam. Položka ponuky sa zobrazí iba tam, kde táto aplikácia dokáže prevziať odovzdaný výkres.

## Vykreslenie do PDF

Stlačte {{key:Mod+P}}, kliknite na {{ui:Vykresliť}}, alebo zadajte `PLOT`. PDF sa vytvorí vo vnútri prehliadača a stiahne sa, alebo sa otvorí na novej karte na tlač. Pozri [Vykreslenie do PDF](topic:plot-pdf).

## Kam idú súbory

Každé uloženie a každé vykreslenie je stiahnutie, takže súbory skončia tam, kam prehliadač ukladá stiahnutia: zvyčajne v priečinku Stiahnuté súbory. Ak chcete zakaždým vybrať priečinok, zmeňte nastavenie sťahovania v prehliadači; [Prehliadače a počítače](common:browsers) ukazuje, kde.

Nič, čo otvoríte alebo uložíte, sa nám neposiela. Pozri [Kam idú vaše súbory](common:your-files).

## Projektové súbory PLN a PLA

CadCraft otvára výkresy DWG a DXF, nie vlastné súbory Archicadu (`.pln`, `.pla`, `.tpl`, `.bpn`). Pri otvorení jedného vám povie, čo to je. V Archicade uložte potrebné pohľady alebo rozloženia ako DWG a otvorte ich tu, alebo exportujte model ako IFC a otvorte ho v BimCraft. Tam, kde BimCraft dokáže súbor prevziať, CadCraft ponúkne {{ui:Otvoriť v BimCraft}}.

## Ak sa stránka zavrie pred uložením

CadCraft uchováva kópiu každého výkresu, ktorý zmeníte, iba v tomto prehliadači, chvíľu po tom, čo prestanete upravovať. Ak sa karta zavrie, prehliadač sa zastaví alebo počítač sa reštartuje pred uložením, CadCraft sa pri ďalšom spustení opýta **Obnoviť prácu?**: {{ui:Obnoviť}} znova otvorí výkres, neuložený, na vlastnej karte. Uložením výkresu sa jeho kópia odstráni. Pozri [Obnovenie práce](common:recover).

## Online a offline

Otváranie, kreslenie, ukladanie (DWG a DXF) a vykresľovanie prebiehajú na vašom počítači, takže fungujú bez pripojenia, keď sa CadCraft načíta.

Ak chcete používať CadCraft úplne bez pripojenia, kliknite v hornom paneli na {{ui:Uložiť na offline použitie}}, keď ste online. Popisok sa počíta („Ukladá sa 40 z 212“) a skončí pri „Offline pripravené“. Uložená kópia obsahuje čítačku DWG, celkovo asi 5 MB, takže **súbory DWG sa otvoria aj offline**, keď sa uložia. Tlačidlo kliknite znova pre {{ui:Uložiť znova (získať najnovšiu verziu)}} alebo {{ui:Odstrániť offline kópiu}}. „Nepodarilo sa uložiť“ znamená, že niektoré súbory sa nestiahli: skontrolujte pripojenie a kliknutím skúste znova. „Offline nie je k dispozícii“ znamená, že toto okno prehliadača nemôže uchovať kópiu (súkromné okná a niektoré spravované počítače).

Bez uloženej kópie sa čítačka DWG načíta pri prvom otvorení DWG po načítaní stránky, takže otvorenie DWG offline môže zlyhať; súbory DXF ju nikdy nepotrebujú. Nenačítavajte stránku znova offline, pokiaľ nie je CadCraft uložený.

Podrobnosti pozri v [Práca offline](common:offline).

:::offline
Teraz ste offline. Výkresy sa ukladajú ako DWG alebo DXF a normálne sa vykresľujú, a súbory DXF sa otvárajú. Súbory DWG sa otvoria, ak CadCraft zobrazuje „Offline pripravené“, alebo ak čítačka DWG už bola načítaná v tejto karte.
:::

## Väzby v súboroch

Väzby a parametre (pozri [Viazanie výkresu](topic:constraints)) sa ukladajú do DWG aj DXF. Každý viazaný objekt nesie malú poznámku CadCraft (rozšírené dáta) a nepoužitý blok s názvom `CADCRAFT_PARAMETRIC` obsahuje väzby a tabuľku parametrov. Iné programy otvoria výkres normálne a obe ignorujú; pri čistení môžu nepoužitý blok odstrániť. Poznámky odkazujú na objekty vlastným kľúčom, nie na identifikátory (handle) súboru, takže program, ktorý ich prečísluje, ich neporuší. Keď iný program vymazal alebo zmenil viazaný objekt, CadCraft pri otvorení súboru zruší väzby na ňom a uvedie, koľko ich bolo. Súbor bez nich sa otvorí bez väzieb.

Náčrt exportovaný z modelára súčiastok (`.json`) sa tiež otvorí: pozri [Presun náčrtov do iných modelárov súčiastok a z nich](topic:solidworks-sketches).

## Zatiaľ nie je k dispozícii

- Viacnásobné vynášacie čiary ako objekty vo uloženom DXF (R12 ich nemá: ukladajú sa ako to, čo kreslia).
- Obrázky vo uloženom DXF (ukladajú sa ako ich rámčeky; DWG ich zachováva ako obrázky) a výrezy (wipeouts), ktoré skrývajú to, čo je pod nimi.
- Ukladanie DXF novšej verzie ako 2000.
- Ukladanie do cloudu a synchronizácia medzi počítačmi.

Úplný zoznam pozri v [Ešte nie je hotové](topic:not-built-yet).
