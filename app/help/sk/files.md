---
title: Súbory: čo sa otvára a čo sa ukladá
summary: Formáty, ktoré CadCraft otvára, ukladá a exportuje, čo sa zachová alebo prevedie a kam súbory idú.
keywords: xclip, orezanie, hranica orezania, zlúčiť orezané, dwg, dxf, pdf, r12, otvoriť, uložiť, export, import, formáty, prevod, stiahnuť, saveas, dxfout, uložiť ako, uloženie dwg, formát, qsave, xref, xattach, prepojený výkres, externý odkaz, zlúčiť, znova načítať, odpojiť
from: 6d68b34e
---

## Na prvý pohľad

| Formát | Otvorenie | Uloženie | Poznámky |
|---|---|---|---|
| DXF (text, ľubovoľná verzia) | Áno | Áno, ako DXF R12 alebo DXF 2000 | Binárny DXF sa odmietne: najprv ho uložte ako textový DXF. |
| DWG | Áno | Áno, ako DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 alebo 2018) | Číta a zapisuje ho vlastná knižnica DWG v CadCraft (súbory AutoCAD R13 až 2018). Váš DWG sa nikdy nezmení. Poškodené súbory alebo verzie, ktoré čítačka nezvláda, sa odmietnu so správou. |
| PDF | Vloží stranu: ako podklad alebo ako objekty ([Podklady z PDF](topic:pdf-underlay)) | Áno, vykreslením | Vektorové PDF listu alebo modelu v mierke. |

Každý výkres, ktorý otvoríte (alebo začnete cez {{ui:Nový}}), dostane vlastnú kartu nad kresliacou plochou; nový výkres, ktorého sa nikto nedotkol, sa použije namiesto pridania karty. Kliknutím na kartu prepnete, jej {{ui:×}} zatvoríte (CadCraft sa najprv opýta, ak sú neuložené zmeny), alebo otvorené výkresy usporiadate vedľa seba: pozrite [Rozdelenie obrazovky](topic:split-screen).

## Otvorenie výkresu

- Stlačte {{key:Mod+O}}, kliknite na {{ui:Otvoriť}} alebo napíšte `OPEN` a potom vyberte súbor.
- Alebo pretiahnite súbor `.dwg` alebo `.dxf` na kresliacu plochu.

Súbor sa číta vo vašom prehliadači. Nikam sa nenahráva. História uvedie, koľko objektov a hladín sa načítalo a ako dlho to trvalo, a sekcia {{ui:Výkres}} ľavého panela zobrazuje formát, napríklad „DWG 2018 (AC1032)“.

Čítačka DWG je súčasťou CadCraft a načíta sa pri prvom DWG, ktorý otvoríte po načítaní stránky (niekoľko stoviek KB), takže nie je potrebné čakať na samostatné stiahnutie. Číta súbor na pozadí, takže stránka reaguje aj pri otváraní veľkého DWG.

### Čo sa načíta

- Úsečky, oblúky, kružnice, lomené čiary (s oblúkovými úsekmi), elipsy, body, text a viacriadkový text, telesá, šráfovania (štandardné vzory nakreslené ako ich čiary, ostatné ako plochý tón), odkazy na bloky s ich atribútmi (hodnoty, ktoré môžete upraviť; pozrite [Atribúty blokov](topic:attributes)), kóty a rozloženia s ich výrezmi.
- Splajny sa načítajú ako splajny (stupeň, riadiace body, uzly, váhy, preložené body); pozrite [Splajny a lomené čiary](topic:splines).
- Viacnásobné vynášacie čiary s jednou čiarou a textom sa načítajú ako viacnásobné vynášacie čiary CadCraft, ktoré môžete upravovať (pozrite {{cmd:MLEADER}}). Ostatné (s blokom, viacerými čiarami alebo krivými čiarami) sa kreslia tak, ako ich nakreslil iný program, a presúvajú sa ako celok; história uvedie, koľko ich je.
- Obrázky sa zobrazujú ako rámček s názvom súboru obrázka, kým CadCraft nedáte súbor príkazom {{cmd:IMAGE}}: pozrite [Obrázky vo výkrese](topic:pictures#show-the-pictures-a-dwg-uses). Prekrytia (wipeout) sa zobrazujú ako ich rámček a to, čo je pod nimi, zostáva viditeľné.
- Tabuľky v DWG sa načítajú tak, ako ich nakreslil iný program.
- Plochy 3D v priestore modelu sa načítajú na kartu {{ui:3D}}, nie ako objekty 2D; rovnako tie vnútri blokov, raz na odkaz na blok v modeli. V bloku a na liste sa kreslia aj ploché, ako obrysy. Pozrite [Model v 3D](topic:3d-solids).
- Hladiny si zachovajú farbu, zapnutie, zmrazenie, zamknutie a nastavenia vykresľovania. DEFPOINTS sa nikdy nevykreslí.
- Kóty sa stanú skutočnými, upraviteľnými kótami CadCraft, ak sa dajú prečítať ich body. Najprv sa zobrazia presne tak, ako ich nakreslil iný program; hneď ako jednu zmeníte, CadCraft ju prekreslí vlastným štýlom.
- Každé rozloženie sa stane kartou listu. V inom programe má každé rozloženie skrytý prvý výrez, ktorý je samotným listom; CadCraft ho vynecháva.

### Čo sa zatiaľ nenačíta

Všetko, čo CadCraft nevie nakresliť, sa spočíta, nehádá sa. Rámček „O tomto súbore“ v ľavom paneli to uvádza ako „Zatiaľ nezobrazené:“ s každým druhom objektu a počtom. Typické prípady sú tabuľky v DXF, siete a 3D telesá vnútri blokov. 3D telesá, oblasti a objemové objekty v priestore modelu sa zobrazia na karte 3D (pozrite [Model v 3D](topic:3d-solids#solids-from-other-programs)). Výrezy otočené v súbore sa zobrazia otočené ako tam a pri uložení si otočenie zachovajú; rovnako aktuálny UCS, pomenované UCS a otočený pohľad.

Text sa kreslí jedným písmom v štýle Helvetica. Štítok, ktorý sa zmestí do jedného riadka v užšom písme pôvodného programu, sa môže v CadCraft zalomiť do dvoch riadkov.

## Ukladanie

Existujú tri spôsoby uloženia. Každý stiahne kópiu.

- **Uložiť**: stlačte {{key:Mod+S}}, kliknite na {{ui:Uložiť}} alebo napíšte `SAVE` (aj `QSAVE`). Ukladá vo formáte výkresu: DWG, ak ste otvorili DWG, DXF, ak ste otvorili DXF. DWG si zachová verziu, v ktorej prišiel (súbor 2018 sa uloží ako 2018). Nový výkres používa formát a verziu DWG, ktorú ste naposledy zvolili v Uložiť ako v tomto prehliadači; ak ste žiadnu nezvolili, DWG vo formáte AutoCAD 2000.
- **Uložiť ako**: stlačte {{key:Mod+Shift+S}}, kliknite na {{ui:Uložiť ako}} alebo napíšte `SAVEAS`. Dialógové okno {{ui:Uložiť kópiu ako}} ponúka {{ui:DWG}} so zoznamom {{ui:Verzia}} (AutoCAD 2018, 2013, 2010, 2007, 2004 alebo 2000), {{ui:DXF R12}} a {{ui:DXF 2000}}, každé s názvom súboru, ktorý dá, a s už vybraným súčasným formátom a verziou výkresu. Kliknutím na {{ui:Uložiť}} stiahnete alebo na {{ui:Zrušiť}} (alebo {{key:Esc}}) neuložíte nič; história potom povie „Neuložené.“ Čo zvolíte, zostane: {{key:Mod+S}} to odteraz používa pre tento výkres a nové výkresy v tomto prehliadači s tým začínajú.
- **DXFOUT**: napíšte `DXFOUT`. Vždy stiahne kópiu DXF R12 a ďalšie {{key:Mod+S}} stále ukladá vo vlastnom formáte výkresu.

Prehliadač stiahne `<názov výkresu>.dwg` alebo `<názov výkresu>.dxf`. Každé uloženie je **nové stiahnutie**; súbor, ktorý ste otvorili, sa nikdy neprepíše ani nezmení. História to potvrdí, napríklad „Kópia bola uložená ako Plan.dwg (DWG (AutoCAD 2018)). Váš pôvodný Plan.dxf je nezmenený.“ Pri DXF uvádza „(DXF R12, otvorí sa v každom programe CAD)“. Riadky pod tým uvádzajú všetko, čo sa cestou zmenilo.

Keď CadCraft beží v aplikácii pre počítač, ukladanie funguje ako v iných programoch pre počítač: {{key:Mod+S}} zapíše výkres späť do súboru, ktorý ste otvorili, v jeho vlastnom formáte a verzii, a história povie, kam sa uložil. {{ui:Uložiť ako}} a exporty zobrazujú systémové dialógové okno uloženia a súbor `.dwg`, `.dxf` alebo `.ccsheets`, na ktorý dvakrát kliknete, sa otvorí v CadCraft.

Pre PDF namiesto toho vykresľujte (pozrite nižšie).

## Čo DWG zachová a čo zmení

CadCraft zapisuje DWG sám, vo vašom prehliadači, tou istou knižnicou DWG, ktorou číta. Verziu zvoľte v Uložiť ako: formát AutoCAD 2000 (verzia súboru AC1015) sa otvorí vo väčšine programov, aj starých; novšie formáty (2004, AC1018, až po 2018, AC1032) zachovajú aj skutočné farby. Nič sa nenahráva a ukladanie DWG funguje offline.

Každá verzia sa kontroluje načítaním uložených súborov späť tromi inými čítačkami DWG a samotným CadCraft. DWG z CadCraft sa zatiaľ neotvoril v samotnom AutoCADe.

### Čo DWG zachová

- Úsečky, oblúky, kružnice, elipsy, body a lomené čiary s ich oblúkovými úsekmi.
- Jednoriadkový text s jeho zarovnaním a súčiniteľom šírky.
- Viacriadkový a zalomený text, ako viacriadkový text. Iný program ho zalomí znova z tej istej šírky.
- Farby objektov: podľa hladiny, podľa bloku, 255 štandardných farieb a skutočné farby vo formáte 2004 a novších.
- Hladiny s ich farbou, typom čiary, hrúbkou čiary a nastaveniami zapnutia, zmrazenia, zamknutia a vykresľovania; vlastné typy čiar, hrúbky čiar a mierky typov čiar objektov, vzory typov čiar a mierku typov čiar výkresu.
- Jednotky výkresu a formát dĺžky (desatinný, stopy a palce, zlomky…).
- Bloky s ich základným bodom a definíciami atribútov, vrátane neviditeľných, konštantných a predvolených.
- Odkazy na bloky s ich mierkou, otočením a hodnotami atribútov.
- Plné výplne a šráfovania so vzorom s ich vzorom, mierkou a uhlom (vlastné čiary vzoru, takže iné programy kreslia rovnaké čiary ako CadCraft).
- Kóty, ako skutočné kóty: iné programy ich pri natiahnutí znova zmerajú. Každá si zachová vlastné nastavenia (výška textu, veľkosť šípky, desatinné miesta, formát dĺžky) a svoj text a nesie nakreslenú kópiu, ktorú má každá kóta DWG.
- Listy (rozloženia): každý list s veľkosťou papiera a jednotkami, tým, čo je na ňom nakreslené, a jeho výrezmi s ich pohľadom a mierkou.
- Pomenované pohľady.
- Viacnásobné vynášacie čiary, ako viacnásobné vynášacie čiary.
- Názvy hladín a blokov tak, ako ste ich napísali, s veľkými a malými písmenami. (DXF R12 ich zapisuje veľkými.)

### Čo DWG zmení

Každá z týchto vecí je uvedená v histórii po uložení, keď sa týka vášho výkresu.

| V CadCraft | V uloženom DWG |
|---|---|
| Skutočné farby (vybrané výberom farby), vo formáte 2000 | Najbližšia štandardná farba: formát 2000 má iba 255. Uložte ako 2004 alebo novší, aby sa zachovali |
| Pomenované pohľady listu | Pohľady priestoru papiera: DWG nehovorí, ktorý list, takže keď CadCraft súbor znova otvorí, patria prvému listu |
| Viacriadkový text so súčiniteľom šírky | Normálna šírka písmen: v DWG sa súčiniteľ šírky týka iba jednoriadkového textu |
| Názvy hladín alebo blokov so znakmi, ktoré DWG nepovoľuje | Zmenené: názov z prepojeného výkresu, napríklad `Base\|Walls`, sa stane `Base$0$Walls` (tak, ako ho pomenuje zlúčenie prepojeného výkresu) a ostatné znaky sa stanú `_` |

### Prečo R12 a čo sa prevádza

Keď ukladáte ako DXF, CadCraft zapisuje DXF R12, verziu, ktorú otvorí každý program CAD. Je staršia než niektoré funkcie, takže niekoľko vecí sa zapíše v jednoduchšej podobe:

| V CadCraft | V uloženom súbore R12 |
|---|---|
| Viacriadkový text | Jeden textový objekt na riadok |
| Elipsy | Lomené čiary sledujúce elipsu |
| Šráfovania (z otvorených súborov) | Iba ich obrysy |
| Skutočné farby (vybrané výberom farby) | Najbližšia štandardná farba |
| Hrúbky čiar a vlastné mierky typov čiar objektov | Vynechané: R12 nemá ani jedno (typy čiar sa zachovajú) |
| Názvy hladín a blokov | Zapísané veľkými písmenami; medzery a iné znaky sa stanú `_` a názvy sa skrátia na 31 znakov („Title block“ sa stane `TITLE_BLOCK`) |
| Hladiny nastavené tak, aby sa nevykresľovali | Iné programy ich vykreslia (CadCraft si nastavenie pamätá, keď má výkres list) |
| Kóty | Skutočné kóty s vlastným nakresleným blokom, takže ich iné programy zobrazujú tak, ako ich vidíte |
| Viacnásobné vynášacie čiary | Čiary, šípka a text, ktoré kreslia |
| Pomenované pohľady | Zachované, s názvami veľkými písmenami; pohľady listu sa vrátia na prvý list |
| Viac listov | Prvý list je priestor papiera, ktorý zobrazuje každý program; ostatné sa zachovajú ako bloky s názvami `CCLAYOUT_1`, `CCLAYOUT_2` …, ktoré CadCraft pri otvorení súboru premení späť na listy |

História uvádza každú z týchto vecí, ktorá sa týkala vášho výkresu.

:::tip
Ak chcete na výkrese pracovať niekoľko dní, uložte ho ako DXF a nabudúce otvorte ten DXF. Všetko, čo CadCraft vie nakresliť, prežije okružnú cestu, vrátane kót, blokov a všetkých listov.
:::

## Prepojené výkresy (externé odkazy)

{{cmd:XATTACH}} (`XA`, alebo {{ui:Bloky}} › {{ui:Viac}} › {{ui:Prepojiť výkres (xref)}}) prepojí iný DWG alebo DXF: vyberte súbor a potom kliknite, kam patrí ({{key:Enter}} ho dá na 0,0). Načíta sa ako jeden blok pomenovaný podľa súboru, v správnej mierke, keď majú oba výkresy rôzne jednotky. Jeho hladiny a bloky si zachovajú názvy s názvom odkazu vpredu — `Plan|Walls`, `Plan|Door` — takže sa nikdy nezmiešajú s vašimi: prepojené hladiny zapínajte a vypínajte, zmrazte ich alebo zamknite ako vlastné. Odkaz je iba na čítanie: zmeňte druhý výkres a znova ho načítajte. To, čo nastavíte na hladinách odkazu (farba, typ čiary, hrúbka čiary, zapnutie/vypnutie, zmrazenie, zamknutie, vykresľovanie), sa zachová pri opätovnom načítaní, pri uložení výkresu ako DWG, kým je odkaz ešte odkazom, a keď tento výkres prepojí iný výkres.

{{cmd:XREF}} (`XR`): `?` vypíše odkazy (načítané alebo nie, ktorý súbor, koľko odkazov); `A` pripojí; `R` znova načíta jeden zo súboru (vyberte súbor znova: prehliadač sa k vašim priečinkom sám nedostane); `B` jeden zlúči (stane sa z neho obyčajné bloky a hladiny s názvami `Plan$0$Walls`); `D` jeden odpojí (jeho odkazy a hladiny zmiznú). Každé je jeden krok späť.

{{cmd:XCLIP}} (`XC`) orezáva odkazy na bloky a prepojenia: vyberte ich, `N` pre novú hranicu, potom `R` a dva rohy alebo `P` a body mnohouholníka ({{key:Enter}} ho uzavrie); `D` odstráni orezanie. Zobrazí sa a vykreslí iba to, čo leží vnútri, a orezanie sa pohybuje s odkazom. DWG a DXF 2000 orezania zachovajú; DXF R12 uloží odkaz celý a povie to. Keď zlúčite odkaz s orezanými odkazmi, {{cmd:XREF}} `B` sa opýta: `A` zlúči všetko, `C` zachová iba orezanú časť každého odkazu (úsečky a oblúky sa na hranici rozrežú; texty a vnorené bloky zostanú, keď je ich vkladací bod vnútri).

Výkres, ktorý otvoríte, môže prepájať súbory, ktoré CadCraft nevidí: povie, koľko ich nie je načítaných. Použite {{cmd:XREF}}, `R` a vyberte každý súbor, aby sa zobrazili.

Pri uložení sa načítaný odkaz **zlúči** do súboru (iné programy vidia obyčajné bloky a hladiny s názvami `Plan$0$…`) a história to uvedie. Odkaz, ktorý nie je načítaný, zostáva odkazom na svoj súbor, v DWG aj DXF.

## Otvorenie v 3D

{{ui:Pohľad}} › {{ui:Viac}} › {{ui:Otvoriť v ModelCraft}} ({{cmd:OPENIN3D}}) otvorí výkres v aplikácii na 3D modelovanie na novej karte, ako DWG, bez nahrávania. Zmeny urobené tam zostanú tam; uložte ich tam. Položka ponuky sa zobrazuje iba tam, kde tá aplikácia dokáže prevziať odovzdaný výkres.

## Vykreslenie PDF

Stlačte {{key:Mod+P}}, kliknite na {{ui:Vykresliť}} alebo napíšte `PLOT`. PDF sa vytvorí v prehliadači a stiahne sa, alebo sa otvorí na novej karte na tlač. Pozrite [Vykreslenie do PDF](topic:plot-pdf).

## Kam súbory idú

Každé uloženie a každé vykreslenie je stiahnutie, takže súbory skončia tam, kam váš prehliadač ukladá stiahnuté súbory: zvyčajne do priečinka Stiahnuté súbory. Ak chcete priečinok vyberať pri každom uložení, zmeňte nastavenie sťahovania v prehliadači; [Prehliadače a počítače](common:browsers) ukazuje, kde.

Nič z toho, čo otvoríte alebo uložíte, sa nám neposiela. Pozrite [Kam idú vaše súbory](common:your-files).

## Súbory projektov PLN a PLA

CadCraft otvára výkresy DWG a DXF, nie vlastné súbory Archicadu (`.pln`, `.pla`, `.tpl`, `.bpn`). Otvorenie jedného povie, čo to je. V Archicade uložte pohľady alebo rozloženia, ktoré potrebujete, ako DWG a otvorte ich tu, alebo exportujte model ako IFC a otvorte ho v BimCraft. Tam, kde BimCraft dokáže súbor prevziať, CadCraft ponúka {{ui:Otvoriť v BimCraft}}.

## Ak sa stránka zatvorí pred uložením

CadCraft uchováva kópiu každého výkresu, ktorý zmeníte, iba v tomto prehliadači, chvíľu po tom, čo prestanete upravovať. Ak sa karta zatvorí, prehliadač sa zastaví alebo sa počítač reštartuje pred uložením, CadCraft sa pri ďalšom spustení opýta **Obnoviť prácu?**: {{ui:Obnoviť}} otvorí výkres znova, neuložený, na vlastnej karte. Uloženie výkresu jeho kópiu odstráni. Pozrite [Obnovenie práce](common:recover).

## Online a offline

Otváranie, kreslenie, ukladanie (DWG a DXF) a vykresľovanie prebiehajú na vašom počítači, takže po načítaní CadCraft fungujú bez pripojenia.

Ak chcete CadCraft používať úplne bez pripojenia, kliknite, kým ste online, na lište hore na {{ui:Uložiť na offline použitie}}. Názov počíta („Ukladanie 40 z 212“) a skončí „Pripravené offline“. Uložená kópia zahŕňa čítačku DWG, spolu asi 5 MB, takže **súbory DWG sa po uložení otvárajú aj offline**. Opätovným kliknutím na tlačidlo dostanete {{ui:Uložiť znova (získať najnovšiu verziu)}} alebo {{ui:Odstrániť offline kópiu}}. „Nepodarilo sa uložiť“ znamená, že sa niektoré súbory nestiahli: skontrolujte pripojenie a skúste znova kliknutím. „Offline nie je k dispozícii“ znamená, že toto okno prehliadača nemôže uchovať kópiu (súkromné okná a niektoré spravované počítače).

Bez uloženej kópie sa čítačka DWG načíta pri prvom otvorení DWG po načítaní stránky, takže otvorenie DWG offline môže zlyhať; súbory DXF ju nikdy nepotrebujú. Nenačítavajte stránku offline, ak CadCraft nie je uložený.

Podrobnosti nájdete v [Práca offline](common:offline).

:::offline
Teraz ste offline. Výkresy sa ukladajú ako DWG alebo DXF a vykresľujú sa normálne a súbory DXF sa otvárajú. Súbory DWG sa otvárajú, ak CadCraft zobrazuje „Pripravené offline“, alebo ak sa čítačka DWG už na tejto karte načítala.
:::

## Väzby v súboroch

Väzby a parametre (pozrite [Väzby vo výkrese](topic:constraints)) sa ukladajú v DWG aj DXF. Každý viazaný objekt nesie malú poznámku CadCraft (rozšírené údaje) a nepoužitý blok s názvom `CADCRAFT_PARAMETRIC` obsahuje väzby a tabuľku parametrov. Iné programy otvoria výkres normálne a obe ignorujú; pri čistení môžu nepoužitý blok zmazať. Poznámky sa na objekty odvolávajú vlastným kľúčom, nie rukoväťami súboru, takže program, ktorý rukoväte prečísluje, ich nepokazí. Keď iný program viazaný objekt zmazal alebo zmenil, CadCraft pri otvorení súboru väzby naň zruší a povie, koľko ich bolo. Súbor bez nich sa otvorí bez väzieb.

Náčrt exportovaný z modelára súčiastok (`.json`) sa tiež otvorí: pozrite [Presun náčrtov do a z iných modelárov súčiastok](topic:solidworks-sketches).

## Zatiaľ nie je k dispozícii

- Viacnásobné vynášacie čiary ako objekty viacnásobných vynášacích čiar v uloženom DXF (R12 ich nemá: ukladajú sa ako to, čo kreslia).
- Obrázky v uloženom DXF (ukladajú sa ako ich rámčeky; DWG ich zachová ako obrázky) a prekrytia (wipeout), ktoré skrývajú to, čo je pod nimi.
- Ukladanie novšej verzie DXF než 2000.
- Ukladanie do cloudu a synchronizácia medzi počítačmi.

Úplný zoznam nájdete v [Ešte nie je hotové](topic:not-built-yet).
