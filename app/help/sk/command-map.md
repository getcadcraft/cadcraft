---
title: Prehľad príkazov: čo napísať
summary: Každý príkaz, ktorý CadCraft má, s jeho krátkymi názvami, od A po Z, vygenerovaný z programu samotného, a zvyky z iného kresliaceho softvéru, ktoré sa líšia.
keywords: prehľad príkazov, príkazy, skratky, krátke názvy, prechod z iného softvéru, zoznam príkazov, čo napísať, zmazať, orezať, ekvivalent, rozdiely
from: 3bdfd3e6
---

CadCraft preberá názvy príkazov a krátke názvy, ktoré ľudia poznajú z iných kresliacich programov: napíšte `L` pre úsečku, `TR` na orezanie, `E` na zmazanie. Pre väčšinu z nich preto neexistuje žiadna prekladová tabuľka, ktorú by ste sa museli učiť: názov, ktorý poznáte, je tu rovnaký. Zoznam nižšie obsahuje všetky príkazy, ktoré CadCraft má, vygenerované priamo z programu. {{key:Enter}} zopakuje posledný príkaz; `HELP` v príkazovom riadku vypíše ten istý zoznam.

Tie niekoľko, ktoré nie sú rovnaké alebo ešte nie sú hotové:

- **Uložiť** stiahne kópiu v prehliadači ({{cmd:SAVE}}, {{cmd:SAVEAS}}); v aplikácii CadCraft Studio zapíše súbor. Pozri [Prechod z iného kresliaceho softvéru](topic:coming-from).
- **PLOT** vytvorí PDF (aj PNG a SVG) s tabuľkou štýlov vykreslenia; správca nastavenia strany nie je k dispozícii.
- **DIMSTYLE** a **PEDIT** sú hotové; **PEDIT** nemá možnosť Úprava vrcholu (to robia úchyty).
- **TABLE** ešte nie je hotové; {{cmd:XREF}}, {{cmd:SPLINE}} a {{cmd:WBLOCK}} hotové sú.
- Vlastné príkazy rutiny (AutoLISP `C:NAME`) sa zobrazia po jej načítaní pomocou {{cmd:APPLOAD}}; tu nie sú uvedené.

## Všetky príkazy (398)

| Príkaz | Krátke názvy | Čo robí |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Obieha 3D pohľad ľavým tlačidlom |
| `ACCESS` | `AX` | Zapína alebo vypína kreslenie bez zraku: výsledky čítané cez čítačku obrazovky, kurzor klávesnice na výkrese, zvuky prichytávania a hlasové príkazy. |
| `ALIASEDIT` |  | Upraví skratky príkazov v jednom textovom súbore (známy formát L, *LINE) |
| `ALIGN` | `AL` | Presunie a otočí objekty tak, aby zdrojové body dosadli na cieľové body (jeden, dva alebo tri páry), a ak chcete, zmení ich mierku |
| `ALIGNPANEL` | `ALP` | Otvorí panel Zarovnať a rozmiestniť |
| `ALIGNTO` |  | Zarovná ľavé, stredové, pravé, horné, stredné alebo dolné hrany vybraných objektov podľa výberu, prvého alebo posledného zvoleného objektu, alebo bodu |
| `ANNOALLVISIBLE` | `ANNOALL` | Zobrazí anotatívne objekty v každej mierke, alebo len tam, kde je mierka výrezu (alebo výkresu) v ich zozname |
| `ANNOSCALE` | `CANNOSCALE` | Nastaví mierku anotácií výkresu: anotatívny text a kóty sa zmenia tak, aby sa vytlačili v rovnakej veľkosti |
| `APPLOAD` | `AP` | Načíta aplikácie: rutiny LISP (.lsp) a ich dialógové súbory (.dcl); Štartovacia sada (AP) |
| `ARC` | `A` | Oblúk: 3 body, Začiatok/Stred/Koniec, Začiatok/Stred/Uhol, Začiatok/Stred/Dĺžka, Začiatok/Koniec/Uhol, Začiatok/Koniec/Smer, Začiatok/Koniec/Polomer, Stred/Začiatok/Koniec, Stred/Začiatok/Uhol, Stred/Začiatok/Dĺžka, Pokračovať |
| `AREA` | `AA` | Plocha a obvod podľa bodov alebo objektu; Pridať a Odčítať udržiavajú priebežný súčet (AA) |
| `ARRAY` | `AR` | Kópie v riadkoch a stĺpcoch, alebo okolo stredu (AR) |
| `ARRAYASSOCIATIVITY` |  | Nastaví, či príkazy POLE vytvárajú polia, ktoré zostanú upraviteľné (1), alebo obyčajné kópie (0) |
| `ARRAYCLOSE` |  | Ukončí úpravu zdrojových objektov poľa |
| `ARRAYEDIT` |  | Zmení pole vytvorené s možnosťou Asociatívne: počty, rozstupy, zdrojové objekty, jedna položka |
| `ARRAYPATH` |  | Kópie objektov pozdĺž čiary, oblúka, lomenej čiary alebo inej krivky |
| `ARRAYPOLAR` |  | Kópie okolo stredového bodu |
| `ARRAYRECT` |  | Kópie v riadkoch a stĺpcoch |
| `ASBUILT` | `ASB` | ASBUILT načíta skutočné body, ktoré namerala posádka (CSV / TXT, ako ich zapisuje EXPORTPOINTS), a porovná ich s bodmi výkresu: v tolerancii alebo mimo nej, nenamerané, nadbytočné. Označí ich na hladine AS-BUILT a stiahne správu CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definuje atribút (značku, pre ktorú blok žiada hodnotu), ktorý sa vloží do bloku (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Upraví hodnoty atribútov odkazu na blok v príkazovom riadku, jednu za druhou (Enter ponechá hodnotu) |
| `ATTSYNC` |  | Zosúladí odkazy bloku s jeho definíciami atribútov: nové sa pridajú s predvolenými hodnotami, odstránené sa zrušia, polohy a text sa obnovia; hodnoty sa zachovajú |
| `AUDIT` |  | Skontroluje otvorený výkres na poškodenia: čísla, ktoré nie sú konečné, objekty bez veľkosti, chýbajúce hladiny, bloky, štýly a typy čiar, bloky, ktoré obsahujú samy seba, zdieľané identifikátory, poškodené kóty a šrafovania. Vypíše, čo našla, podľa druhu, a pred opravou sa opýta; oprava je jeden krok späť. |
| `AUNITS` | `ANGUNITS` | Ako sa uhly zobrazujú a zadávajú: desatinné stupne, stupne-minúty-sekundy alebo smery ako N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Automatické dopĺňanie výkresu zapnuté alebo vypnuté, alebo výpis toho, čo vzory výkresu teraz navrhujú. |
| `AUTOCONSTRAIN` |  | Pridá väzby koincidencie, vodorovnosti a zvislosti tam, kde je geometria už blízko |
| `AUTODIM` | `ADIM` | Kótovanie podľa pravidiel: celková veľkosť, reťazce pozdĺž strán, otvory, priemery otvorov a rozstup mriežky, bez opakovania toho, čo je už okótované. |
| `AUTOSHEET` | `ASH` | Rozloží listy sám: vyberie papier a štandardné mierky a umiestni každý pohľad s popisom a popisovým poľom. |
| `BATTMAN` |  | Správca atribútov blokov: poradie, značky, výzvy, predvolené hodnoty a režimy atribútov bloku, potom aktualizácia jeho odkazov |
| `BCLOSE` |  | Zatvorí editor blokov: uloží blok alebo zahodí zmeny |
| `BCONVERT` |  | BCONVERT nájde opakujúcu sa geometriu a premení ju na odkazy na bloky. Vyberte objekty, ktoré sa opakujú: nájdu sa všetky ostatné skupiny objektov v otvorenom priestore, ktoré majú rovnakú geometriu, posunuté a otočené o ľubovoľný uhol; so zapnutými Zrkadlovo alebo Mierka sa nájdu aj zrkadlové obrazy a kópie inej veľkosti. Dajte novému bloku názov a základný bod; výber a každá kópia sa stanú odkazmi naň, každý s vlastným otočením a mierkou. Alebo zvoľte Blok a pomenujte existujúci blok, aby ste našli voľné kópie jeho objektov. Kópia musí mať rovnakú hladinu, farbu, typ čiary a hrúbku, pokiaľ Vlastnosti nie sú nastavené na Ignorovať. Objekty na uzamknutých hladinách zostanú nedotknuté. Jeden krok späť. |
| `BEDIT` | `BE` | Editor blokov: úprava objektov a atribútov bloku; BCLOSE uloží (BE) |
| `BLEND` |  | BLEND: spline medzi koncami dvoch otvorených kriviek, zvolenými blízko koncov na spojenie. Spojitosť (CON): Dotyčnica nasleduje oba smery, Hladko nasleduje aj to, ako sa krivia. |
| `BLOCK` | `B`, `BMAKE` | Vytvorí blok z objektov (stanú sa jedným odkazom) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: každý odkaz na jeden blok sa stane odkazom na iný, na rovnakom mieste, s rovnakou mierkou a otočením. Hodnoty atribútov, ktoré majú oba bloky, sa zachovajú. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE zobrazí panel Bloky s kurzorom v jeho filtri. Panel ukazuje obrázok každého bloku (naposledy umiestnené prvé) ako zoznam alebo mriežku; kliknite na obrázok alebo ho pretiahnite na výkres, aby sa blok umiestnil pomocou INSERT. Pod Knižnicami pridajte vlastný súbor DWG alebo DXF: jeho bloky sa zobrazia s obrázkami a pri umiestnení sa skopírujú do tohto výkresu. V aplikácii CadCraft Studio možno pridať aj priečinok s výkresmi; súbory a priečinky sa pamätajú. |
| `BOMEDIT` | `BOMCOLUMNS` | Stĺpce, zoskupenie, zoradenie, nadpis, súčty a poznámky tabuľky kusovníka |
| `BOMEXPORT` |  | Uloží tabuľku kusovníka ako súbor .csv |
| `BOMTABLE` | `BOM` | Živá tabuľka kusovníka jednej zóny alebo celého výkresu |
| `BOMUPDATE` |  | Aktualizuje teraz všetky tabuľky kusovníka, aj zmrazené |
| `BOMZONE` | `BZONE` | Pomenovaná oblasť výkresu pre kusovník: dva rohy, mnohouholník alebo obrys uzavretého objektu |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): zvoľte bod vnútri uzavretej plochy a dostanete okolo nej uzavretú lomenú čiaru. Oblúky zostanú oblúkmi. Ostrovy obkreslí aj plochy vnútri nich. |
| `BOX` |  | Kváder: dva rohy a výška (3D) |
| `BPARAMETER` | `BPARAM` | Ešte nie je hotové: pridanie parametra (napríklad Viditeľnosť) do bloku. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametre blokov: pomenované parametre so vzorcami a viacero parametrov viditeľnosti v jednom bloku. Funguje v editore blokov (priradenie vybraných objektov k stavu) a na vybranom odkaze (jeho vlastné hodnoty a stavy). |
| `BREAK` | `BR` | Preruší čiaru, oblúk, kružnicu alebo lomenú čiaru medzi dvoma bodmi (BR) |
| `BREAKATPOINT` |  | Rozdelí čiaru, oblúk alebo lomenú čiaru na dve časti v bode |
| `BREAKLINE` |  | Nakreslí čiaru so symbolom prerušenia; jej veľkosť a predĺženie za konce sa pamätajú. |
| `BREPLACE` |  | BREPLACE vymení jeden blok za iný. Vybrané: vyberte odkazy na bloky a pomenujte blok, ktorý sa má použiť namiesto nich. Všetky: pomenujte blok a jeho náhradu; každý odkaz v každom priestore a vo vnútri iných blokov sa zmení. Odkaz si zachová miesto, mierku, otočenie a hladinu, ako aj hodnoty atribútov, ktoré majú oba bloky; hodnoty, pre ktoré nový blok nemá miesto, sa zahodia a pomenujú. |
| `BSEARCH` |  | BSEARCH hľadá bloky. Názov: časť názvu bloku alebo vzor s * a ?. Atribút: hodnota (alebo TAG=hodnota), ktorú majú atribúty odkazu. Geometria: vyberte objekty alebo jeden odkaz na blok a vypíšu sa bloky, ktorých tvar je podobný aspoň na 85 %, najlepšie prvé; veľkosť, otočenie a zrkadlenie sa nerátajú. Nájdené odkazy v otvorenom priestore sa vyberú a sú pripravené na ďalší príkaz. |
| `BURST` |  | Rozloží odkazy na bloky a zachová to, čo hovoria ich atribúty: každá hodnota sa stane textom na hladine atribútu. |
| `BVHIDE` | `BVH` | V editore blokov: skryje objekty v aktuálnom stave viditeľnosti. |
| `BVSHOW` | `BVSH` | V editore blokov: zobrazí objekty, ktoré aktuálny stav viditeľnosti skrýva (zobrazia sa zoslabené, aby sa dali vybrať). |
| `BVSTATE` | `BVS` | V editore blokov, pri bloku so stavmi viditeľnosti: prepne na stav, alebo pridá, premenuje či zmaže jeden. |
| `CAL` |  | Vypočíta dĺžku alebo číslo: + − * / a zátvorky, ako ich napíšete kdekoľvek |
| `CENTERLINE` | `CL` | Stredová čiara medzi dvoma čiarami: v polovici medzi nimi, alebo pozdĺž osi, keď sa stretnú (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Stredová značka: kríž v strede kružnice alebo oblúka, so stredovými čiarami tesne za ním (CM) |
| `CHAMFER` | `CHA` | Zoskosí roh medzi dvoma čiarami (D dve vzdialenosti, A dĺžka a uhol, P každý roh lomenej čiary) |
| `CHSPACE` |  | CHSPACE: presúva objekty medzi listom a modelom cez výrez. Sú zmenené v mierke a otočené, aby z druhej strany vyzerali rovnako. Na liste sa presunú do modelu; pri práci cez výrez (MSPACE) sa dostanú na list. |
| `CIRCLE` | `C` | Stred a polomer, priemer, 2 alebo 3 body |
| `CLASS` |  | Zaradí vybrané objekty do triedy, alebo pri nevybranom nastaví aktívnu triedu (? ich vypíše) |
| `CLASSES` | `CLS` | Panel Triedy: triedy zoraďujú objekty naprieč hladinami; zobrazujú, skrývajú a štylizujú ich a prepisujú ich pre každý výrez (CLS) |
| `COMMANDLINE` | `CMDLINE` | Ukotví alebo odpojí príkazový riadok, zmení ho na jeden riadok, nastaví počet riadkov histórie alebo otvorí históriu (F2) |
| `COMPARESETTINGS` | `CMPSET` | Porovná štýly kót, štýly textu, hladiny, listy alebo jednotky: dva v tomto výkrese, alebo tento výkres s iným otvoreným, a skopíruje hodnotu. |
| `CONSTRAINTBAR` | `CBAR` | Zobrazí alebo skryje lišty väzieb (Zobraziť všetko / Skryť všetko, alebo pre každý objekt) |
| `COPY` | `CO`, `CP` | Kopíruje objekty, toľkokrát, koľkokrát kliknete |
| `COPYBASE` |  | Kopíruje objekty do schránky so základným bodom, ktorý zvolíte |
| `COPYCLIP` |  | Kopíruje objekty do schránky (Ctrl+C); PASTECLIP ich vloží |
| `COUNT` | `BCOUNT` | Spočíta odkazy na bloky: zvoľte jeden, aby sa vybral a spočítal každý odkaz jeho bloku |
| `COUNTTABLE` |  | Umiestni tabuľku počtov blokov |
| `CREDITS` |  | Vloží kredity knižnice do výkresu ako tabuľku. Spustite znova, aby sa tabuľka aktualizovala z položiek, ktoré sú teraz vo výkrese. |
| `CURSORSIZE` |  | Veľkosť kríža: 100 ho nakreslí od okraja k okraju výkresu (Nastavenia › Kurzor › Celá obrazovka) |
| `CUTCLIP` |  | Vystrihne objekty do schránky (Ctrl+X): skopíruje a potom zmaže |
| `CYLINDER` | `CYL` | Valec: stred, polomer a výška (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Vypíše bloky, ich atribúty a vlastnosti objektov ako tabuľku vo výkrese alebo v súbore CSV |
| `DATALINK` | `DL` | Tabuľka zo súboru CSV, ktorá si pamätá súbor, takže sa dá znova načítať |
| `DATALINKUPDATE` | `DLU` | Znova načíta súbor dátového prepojenia a naplní jeho tabuľky |
| `DCALIGNED` | `DCALI` | Rozmerová väzba: skutočná vzdialenosť medzi bodmi, bodom a čiarou, alebo dvoma čiarami |
| `DCANGULAR` | `DCANG` | Rozmerová väzba: uhol medzi dvoma čiarami alebo oblúkom |
| `DCCONVERT` |  | Premení kóty nakreslené na geometrii, ktorú možno viazať, na rozmerové väzby |
| `DCDIAMETER` | `DCDIA` | Rozmerová väzba: priemer kružnice alebo oblúka |
| `DCDISPLAY` |  | Zobrazí alebo skryje rozmerové väzby na výkrese |
| `DCHORIZONTAL` | `DCHOR` | Rozmerová väzba: vodorovná vzdialenosť |
| `DCLINEAR` | `DCLIN` | Rozmerová väzba: vodorovná alebo zvislá vzdialenosť, od miesta, kde ju umiestnite |
| `DCRADIUS` | `DCRAD` | Rozmerová väzba: polomer kružnice alebo oblúka |
| `DCVERTICAL` | `DCVER` | Rozmerová väzba: zvislá vzdialenosť |
| `DELBLOCKS` |  | Zmaže bloky: každý odkaz (aj vnorené, na každom liste) a definície |
| `DELCONSTRAINT` | `DELCON` | Odstráni každú väzbu (geometrickú aj rozmerovú) z vybraných objektov |
| `DELOPENING` |  | Vyberie dvere alebo okno zo steny. |
| `DESCRIBE` | `DESC` | Povie, čo výkres obsahuje: koľko objektov, akého druhu, akej veľkosti, čo je vybrané. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Zruší výber (Esc) |
| `DETAILS` | `DET` | Vlastné detaily vašej firmy, nájdené pre to, čo kreslite: hľadať, pridať blok, vypísať, odstrániť, zapnúť alebo vypnúť ponuky. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Nakreslí diagram z textu: vývojový diagram Mermaid, diagram komponentov PlantUML, D2, zoznam od-do alebo XML draw.io, ako bloky a spojnice, ktoré môžete upravovať |
| `DIMALIGNED` | `DAL`, `DIMALI` | Skutočná vzdialenosť medzi dvoma bodmi |
| `DIMANGULAR` | `DAN`, `DIMANG` | Uhol medzi dvoma čiarami, oblúkom alebo tromi bodmi |
| `DIMARC` | `DAR` | Kóta dĺžky oblúka: vzdialenosť pozdĺž oblúka so symbolom oblúka (DAR) |
| `DIMASZ` |  | Nastavenie kóty: veľkosť šípky |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Kóty zoradené od jednej základnej čiary |
| `DIMBREAK` | `DBREAK` | Preruší kótovacie a predlžovacie čiary tam, kde pretínajú iné objekty (Automaticky), medzi dvoma bodmi (Ručne), alebo odstráni prerušenia |
| `DIMCONSTRAINT` | `DCON` | Rozmerové väzby: lineárne, zarovnané, uhlové, polomer, priemer, previesť |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Reťazec kót, každá od konca poslednej |
| `DIMDEC` |  | Nastavenie kóty: desatinné miesta |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Priemer oblúka alebo kružnice |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Uvoľní kóty od objektov, ku ktorým sú pripojené (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Zmení text kóty (Domov, Nový text, Otočiť) alebo nakloní predlžovacie čiary (Šikmo) |
| `DIMEXE` |  | Nastavenie kóty: predĺženie za kótovaciu čiaru |
| `DIMEXO` |  | Nastavenie kóty: odsadenie od začiatku |
| `DIMGAP` |  | Nastavenie kóty: medzera okolo textu |
| `DIMINSPECT` |  | Kóta kontroly: rámček okolo hodnoty so značkou a tým, ako často sa diel kontroluje |
| `DIMJOGGED` | `DJO`, `JOG` | Kóta zalomeného polomeru: polomer nakreslený z bližšieho bodu, keď je stred ďaleko (DJO) |
| `DIMJOGLINE` | `DJL` | Pridá symbol zalomenia k lineárnej alebo zarovnanej kótovacej čiare, aby ukázal, že vzdialenosť nie je nakreslená v mierke (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Vodorovná alebo zvislá vzdialenosť (R pre ľubovoľný uhol) |
| `DIMLUNIT` |  | Nastavenie kóty: formát dĺžky (1 vedecký, 2 desatinný, 3 inžinierský, 4 architektonický, 5 zlomkový) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Kóta súradnice: vzdialenosť X alebo Y bodu od začiatku UCS, na vynášacej čiare (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Prepíše premenné kóty na vybraných kótach bez zmeny ich štýlu; Zrušiť vráti štýl (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Polomer oblúka alebo kružnice |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Pripojí body kóty k objektom, aby sa kóta pri ich posune sledovala a znova zmerala (DRE) |
| `DIMSCALE` |  | Nastavenie kóty: celková mierka (veľkosti × toto) |
| `DIMSPACE` |  | Rovnomerný rozstup rovnobežných kót, meraný od základnej kóty (0 ich zarovná, Automaticky je dvojnásobok výšky textu) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Vytvorí, mení, nastaví ako aktuálny, zmaže, použije a porovná pomenované štýly kót (dialóg; -DIMSTYLE v príkazovom riadku) |
| `DIMTEDIT` | `DIMTED` | Presunie text kóty doľava, doprava alebo na stred kótovacej čiary, alebo ho otočí |
| `DIMTEXTUNIT` | `DTU` | Text kóty v mm, cm, m alebo km, alebo v jednotkách samotného výkresu: vybrané kóty, inak nové (DTU) |
| `DIMTXT` |  | Nastavenie kóty: výška textu |
| `DIST` | `DI` | Vzdialenosť a uhol medzi dvoma bodmi |
| `DISTRIBUTE` |  | Rovnomerne rozmiestni vybrané objekty zo strany na stranu alebo nahor a nadol: rovnaké kroky medzi stredmi alebo rovnaké medzery; dve vonkajšie zostanú |
| `DIVIDE` | `DIV` | DIVIDE (DIV): značky, ktoré rozdelia čiaru, oblúk, kružnicu, lomenú čiaru, spline alebo elipsu na rovnaké časti. Body, alebo s Blokom blok pri každej značke. |
| `DOCUMENTS` | `DOCS` | Otvorí panel Dokumenty: výpožičky a vrátenie výkresov, revízie, stavy vydania a schválenie pre priečinok projektu |
| `DOOR` | `DR` | Umiestni dvere do steny. Strana, na ktorú kliknete, je stranou, kam sa dvere otvoria. |
| `DRAWORDER` |  | Zmení poradie kreslenia: presunie objekty dopredu, pošle ich dozadu, alebo ich umiestni nad alebo pod iné objekty. |
| `DUPLICATE` | `DUP` | Kópia, ktorá sa pohybuje s ukazovateľom: kliknutím ju položíte (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Vlastnosti výkresu: názov, autor a ďalšie, a vaše vlastné dvojice názvu a hodnoty |
| `DXFOUT` |  | Stiahne výkres ako DXF R12 (Uložiť zachováva svoj formát) |
| `EATTEDIT` | `DDATTE` | Upraví atribúty odkazu na blok: hodnoty, text a vlastnosti, po jednom atribúte |
| `ELLIPSE` | `EL` | Koncové body osi a druhá polos |
| `ERASE` | `E`, `DELETE` | Odstráni objekty |
| `EXPLODE` | `X` | Rozloží lomené čiary, bloky a kóty na ich časti |
| `EXPORT` | `EXP` | Uloží kópiu výkresu v type súboru, ktorý zapisuje doplnok |
| `EXPORT3D` | `3DEXPORT` | Exportuje 3D model: GLB, OBJ alebo STL |
| `EXPORTPOINTS` | `EXPPTS` | Zapíše body a vkladacie body blokov s jedným atribútom ako popis do súboru CSV alebo TXT (PNEZD, PENZD alebo XYZ) pre programy BIM a geodetické programy |
| `EXTEND` | `EX` | Predĺži objekty, aby sa stretli s inými: kliknite blízko konca, potiahnite cez viacero, alebo Shift+kliknutie na orezanie |
| `EXTRIM` |  | EXTRIM: zvoľte jednu hranu rezu, potom stranu. Všetko, čo pretína hranu, sa orezá na tej strane. Kúsky, ktoré by zmizli, sa zobrazia pri pohybe ukazovateľa. |
| `EXTRUDE` | `EXT` | Vytiahne uzavreté 2D objekty na telesá (3D) |
| `FIELD` |  | Umiestni pole do textu, bunky tabuľky alebo atribútu: dátum, názov súboru, číslo listu, vlastnosť výkresu, plocha alebo dĺžka objektu, alebo vzorec |
| `FILLET` | `F` | Zaoblí alebo zarovná roh medzi dvoma objektmi (polomer (R), každý roh lomenej čiary (P), viac (M)) |
| `FIND` |  | Hľadá a nahrádza slová v texte, hodnotách atribútov a texte kóty |
| `FLATTEN` |  | Nastaví výšku (Z) a hrúbku vybraných objektov na 0, aj v blokoch, ktoré používajú. |
| `FLOOR` |  | Vyberie podlažie, na ktorom sa kreslí, pridá jedno, alebo presunie či skopíruje výber do neho. |
| `FLOORLAYERS` |  | Premení podlažia na hladiny pomenované Floor-Layer, pre súbor, ktorý pôjde niekomu bez podlaží. |
| `FLOORS` | `FLR` | Otvorí panel Podlažia: skladanie podlaží do jedného priestoru modelu. |
| `GCCOINCIDENT` |  | Väzba: dva body sa stretnú, alebo bod zostane na objekte |
| `GCCOLLINEAR` |  | Väzba: dve čiary zostanú na jednej priamke |
| `GCCONCENTRIC` |  | Väzba: dve kružnice alebo oblúky majú spoločný stred |
| `GCEQUAL` |  | Väzba: dve čiary zostanú rovnako dlhé, alebo dve kružnice či oblúky rovnaký polomer |
| `GCFIX` |  | Väzba: bod alebo celý objekt zostane na svojom mieste |
| `GCHORIZONTAL` |  | Väzba: čiara (alebo dva body) zostane vodorovná |
| `GCPARALLEL` |  | Väzba: dve čiary zostanú rovnobežné |
| `GCPERPENDICULAR` |  | Väzba: dve čiary zostanú v pravom uhle |
| `GCSYMMETRIC` |  | Väzba: dva body, čiary alebo kružnice sa zrkadlia cez čiaru |
| `GCTANGENT` |  | Väzba: čiara a kružnica alebo oblúk (alebo dva z nich) zostanú dotyčnicové |
| `GCVERTICAL` |  | Väzba: čiara (alebo dva body) zostane zvislá |
| `GDSIN` | `GDS` | Zobrazí rozloženie IC (súbor GDSII stream): každú vrstvu a typ údajov ako hladinu výkresu, plochú, v používateľských jednotkách; len na prezeranie a meranie (laboratórny test) |
| `GEOMCONSTRAINT` | `GCON` | Geometrické väzby: vodorovné, zvislé, rovnobežné, dotyčnicové, koincidentné… |
| `GLBOUT` |  | Exportuje 3D model ako GLB (glTF) |
| `GRADIENT` | `GD` | Vyplní plochu prechodom jednej alebo dvoch farieb |
| `GRIDMOVE` | `GM` | Presunie os mriežky a prenesie to, čo na nej visí: steny sa natiahnu, stĺpce, bubliny a značky sa presunú, kóty nasledujú. |
| `GROUP` | `G` | GROUP (G): dá vybraným objektom spoločný názov. Kliknutie na jeden z nich potom vyberie všetky. Enter pri názve vytvorí neoznačenú skupinu. |
| `GROUPEDIT` |  | GROUPEDIT: upraví skupinu. Zvoľte jeden z jej objektov alebo zadajte jej Názov, potom Pridať alebo Odobrať objekty, premenovať (RE) ju, zmeniť jej Popis, alebo určiť, či kliknutie vyberie celú skupinu. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Vyplní plochu plnou výplňou alebo vzorom: kliknite vnútri nej, alebo vyberte uzavreté objekty (H) |
| `HATCHEDIT` | `HE` | Zmení šrafovanie: vzor, mierku, uhol, začiatok a jeho prepojenie na hranicu. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Znova vytvorí hraničné lomené čiary zo šrafovania, prepojené s ním alebo nie |
| `HATCHTOBACK` |  | Pošle každé šrafovanie za všetko ostatné. |
| `HELP` | `?` | Tento zoznam |
| `HIDEOBJECTS` |  | Skryje vybrané objekty až do UNISOLATEOBJECTS. Neukladá sa s výkresom. |
| `HISTORY` | `HIST` | HISTORY (HIST): verzie tohto výkresu — kópie uchované na tomto počítači, keď ich Studio uloží, a verzie v cloude — na otvorenie, obnovenie a porovnanie so zmenami zobrazenými farbou. |
| `ID` |  | Súradnice bodu |
| `IMAGE` | `IM` | Dá CadCraft obrazové súbory, ktoré výkres používa (DWG ukladá len to, kde boli). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Umiestni obrázok (PNG alebo JPEG) zo súboru. |
| `IMAGECLIP` | `ICL` | Orezáva obrázok na obdĺžnik alebo mnohouholník, alebo odstráni jeho orezanie. |
| `IMPORT` | `IMP` | Importuje do tohto výkresu súbor druhu, ktorý číta doplnok |
| `INSERT` | `I`, `DDINSERT` | Umiestni blok (S mierka, R otočenie); F zo súboru DWG/DXF, L z knižnice |
| `INTERSECT` | `IN` | Ponechá len to, čo majú telesá spoločné (3D), alebo plochu, ktorú majú spoločnú 2D regióny |
| `ISODRAFT` |  | ISODRAFT: izometrické kreslenie zapnuté alebo vypnuté, alebo priamo na rovinu Ľavá, Horná alebo Pravá. Keď je zapnuté, Orto a polárne sledovanie nasledujú dve osi roviny, mriežka sa kreslí izometricky a ELLIPSE má Izokružnicu. |
| `ISOLATEOBJECTS` | `ISOLATE` | Zobrazí len vybrané objekty; všetko ostatné v tomto priestore je skryté až do UNISOLATEOBJECTS. Neukladá sa s výkresom. |
| `ISOPLANE` |  | ISOPLANE: zvoľte izometrickú rovinu na kreslenie: Ľavá, Horná alebo Pravá. Enter prejde na ďalšiu, ako to robí F5, keď je izometrické kreslenie zapnuté. |
| `JOIN` | `J` | Spojí čiary, oblúky a lomené čiary, ktoré sa stretávajú koniec na koniec, do jednej lomenej čiary; čiary na jednej priamke do jednej čiary (J) |
| `LASER` | `LASERCUT` | Otvorí panel Laser: pošle hladiny laserovej rezačke alebo gravírovaciemu zariadeniu (G-kód GRBL) |
| `LASSOMODE` |  | Stlačenie a ťahanie nakreslí laso (1), alebo obdĺžnik (0) |
| `LAYDEL` |  | Zmaže hladinu a každý objekt na nej (v modeli, na listoch a v blokoch) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Otvorí správcu hladín: každá hladina v jednej tabuľke |
| `LAYERPANEL` |  | Zobrazí panel hladín |
| `LAYFRZ` |  | Zmrazí hladinu každého objektu, ktorý vyberiete |
| `LAYGROUP` | `LG` | Zoskupí hladiny do priečinkov na paneli Hladiny. |
| `LAYISO` |  | Izoluje hladiny vybraných objektov (každá iná hladina vypnutá) |
| `LAYLOCKFADE` |  | Nastaví, do akej miery sa zoslabujú objekty na uzamknutých hladinách a či ich kliknutie môže vybrať. |
| `LAYMCUR` |  | Nastaví hladinu objektu, ktorý vyberiete, ako aktuálnu |
| `LAYMRG` |  | Zlúči hladiny: ich objekty sa presunú na cieľovú hladinu a zlúčené hladiny zaniknú |
| `LAYOFF` |  | Vypne hladinu každého objektu, ktorý vyberiete |
| `LAYON` |  | Zapne každú hladinu |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Nový list s popisovým poľom a výrezom |
| `LAYTHW` |  | Rozmrazí každú hladinu |
| `LAYUNISO` |  | Znova zapne hladiny, ktoré LAYISO vypol |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Premení text napísaný starými vietnamskými fontmi (fonty TCVN3 / ABC, napríklad .VnTime, a fonty VNI, napríklad VNI-Times) na Unicode. Taký text sa už zobrazuje správne; tento príkaz ho natrvalo prepíše, s počtom a jedným krokom späť. |
| `LENGTHEN` | `LEN` | Predĺži alebo skráti čiary, oblúky a lomené čiary: o hodnotu, o percento, na celkovú dĺžku alebo ťahaním (LEN) |
| `LIBRARY` | `LIB` | Panel knižnice: umiestňovanie položiek, kontrola aktualizácií, kredity |
| `LIMITS` |  | Nastaví hranice výkresu: ON, OFF, alebo ľavý dolný a pravý horný roh. Keď sú hranice zapnuté, body mimo nich sa odmietnu |
| `LINE` | `L` | Priame úseky, každý ako vlastný objekt |
| `LINETYPE` | `LT`, `CELTYPE` | Typ čiary, ktorý dostanú nové objekty (podľa hladiny, podľa bloku alebo pomenovaný) |
| `LINKVIEWS` | `SYNCVIEWS` | Posúva a zväčšuje všetky panely spoločne (rozdelená obrazovka), na porovnanie dvoch výkresov alebo revízií |
| `LISPEDIT` | `VLIDE` | LISPEDIT (alebo VLIDE) otvorí editor LISP: okno na písanie, načítanie a vyskúšanie rutiny. Načítať do výkresu prečíta každý tvar, ako to robí načítanie súboru pomocou APPLOAD, a vytvorí jeho príkazy. Spustiť výber vyhodnotí vybrané tvary, alebo tvar, v ktorom je kurzor. Konzola zobrazí, čo rutina vypísala, a každú chybu s jej riadkom. Zodpovedajúca zátvorka sa označí pri písaní a Enter odsadí nový riadok. Nový, Otvoriť a Uložiť fungujú so súborom .lsp. Zoznamy vedľa textu ukazujú funkcie, ktoré rutina definuje, tie, ktoré volá a tento LISP ešte nemá, a všetky funkcie, ktoré má. Okno neblokuje výkres, takže rutina môže žiadať body; Stop alebo Esc ukončí bežiacu rutinu. |
| `LIST` | `LI`, `LS` | Opíše objekty v histórii |
| `LTSCALE` | `LTS` | Mierka typov čiar výkresu (každá čiarka a medzera sa ňou násobí) |
| `LWDISPLAY` | `LWT` | Zobrazí alebo skryje hrúbky čiar na obrazovke (tlačidlo LWT v stavovom riadku) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Hrúbka čiary, ktorú dostanú nové objekty (podľa hladiny, podľa bloku, predvolená alebo v mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Mapové hladiny pod priestorom modelu: súradnicový systém výkresu, dlaždice, WMS, WMTS, ArcGIS, obrázky |
| `MASSPROP` |  | MASSPROP: vlastnosti prierezu oblastí a uzavretých objektov: plocha, obvod, ťažisko, momenty a deviačný moment zotrvačnosti, polomery zotrvačnosti a hlavné osi. Presné pre čiary a oblúky. Správu môže zapísať do textového súboru. |
| `MATCHPROP` | `MA`, `PAINTER` | Prenesie vlastnosti: skopíruje hladinu, farbu a ďalšie vlastnosti jedného objektu na iné (MA) |
| `MEASURE` | `ME` | MEASURE (ME): značka každých zadaných dĺžok pozdĺž čiary, oblúka, kružnice, lomenej čiary, spline alebo elipsy, od konca najbližšieho k vášmu výberu. Body, alebo s Blokom blok pri každej značke. |
| `MEASUREGEOM` | `MEA` | Zmeria vzdialenosť, polomer, uhol alebo plochu (MEA) |
| `MINSERT` |  | MINSERT: umiestni blok naraz v riadkoch a stĺpcoch. Každý je vlastným odkazom, takže ktorýkoľvek z nich môžete presunúť alebo zmazať. |
| `MIRROR` | `MI` | Zrkadlí objekty cez čiaru |
| `MLEADER` | `MLD`, `MLEAD` | Viacnásobná vynášacia čiara: šípka, vynášacia čiara a poznámka ako jeden objekt (MLD) |
| `MLEADERALIGN` | `MLA` | Zarovná viacnásobné vynášacie čiary s jednou z nich v jednom smere, v rovnakých rozstupoch, alebo ich rozmiestni medzi dvoma bodmi (MLA) |
| `MLEADERCOLLECT` | `MLC` | Zoskupí viac viacnásobných vynášacích čiar do jednej: ich bloky v riadku alebo stĺpci, alebo ich poznámky jedna pod druhou (MLC) |
| `MLEADEREDIT` | `MLE` | Pridá vynášacie čiary k viacnásobnej vynášacej čiare alebo ich odstráni; prepína jej obsah medzi textom a blokom (MLE) |
| `MLINE` |  | Nakreslí rovnobežné čiary naraz, spojené v rohoch. |
| `MOVE` | `M` | Presunie objekty podľa základného bodu a druhého bodu |
| `MSPACE` | `MS` | Pracuje s modelom cez výrez otvoreného listu (alebo dvojklik vnútri výrezu). |
| `MTEXT` | `MT`, `T` | Odsekový text: potiahnite jeho šírku, potom píšte na mieste; Enter začne nový odsek (T) |
| `MVIEW` | `MV` | Výrez na model na rozložení |
| `NAMEDVIEW` | `NV`, `VIEWS` | Pomenované pohľady: uloží pohľad na obrazovke (alebo okno) pod názvom a vráti sa k nemu (NV) |
| `NCOPY` |  | Skopíruje objekty z odkazu na blok alebo prepojeného výkresu do výkresu bez rozloženia. |
| `NEARBY` |  | Povie, čo leží blízko kurzora, najbližšie prvé, s vzdialenosťou a stranou. |
| `NEW` |  | Začne nový výkres |
| `OBJECTSCALE` | `OBJSCALE` | Mierky anotácií anotatívneho textu a kót: pridať mierku, zmazať ju, pridať aktuálnu mierku alebo ich vypísať (každý výrez ich zobrazuje vo veľkosti pre svoju mierku) |
| `OBJOUT` |  | Exportuje 3D model ako OBJ |
| `OFFSET` | `O` | Rovnobežné kópie v zadanej vzdialenosti |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: ako OFFSET uzavrie medzery na vonkajších rohoch lomenej čiary. 0 predĺži úsečky, 1 pridá oblúk, 2 pridá rovný rez. Ponechané pre túto reláciu. |
| `OLELIST` | `OLES` | Vypíše objekty OLE, ktoré výkres nesie, a umiestni kópiu obrázka jedného z nich, kam chcete |
| `OPEN` |  | Otvorí DWG alebo DXF z tohto počítača |
| `OPENIN3D` |  | Otvorí tento výkres v aplikácii 3D modelovania na novej karte (nič sa nenahráva) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Otvorí ponuku uchopenia objektov: vyberte, ktoré uchopenia sú zapnuté. Aj pravé tlačidlo na Uchopenie v stavovom riadku. |
| `OVERKILL` |  | Zmaže duplicitné objekty a spojí prekrývajúce sa alebo koniec-na-koniec čiary a oblúky v rámci tolerancie. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panel Parametre: používateľské parametre a rozmerové väzby v jednej tabuľke |
| `PARTSLIST` | `PLIST` | Tabuľka zoznamu súčiastok: každá štandardná súčiastka a oceľový profil umiestnený z knižnice |
| `PASTEAREA` | `PAREA` | Vloží plochu skopírovanú v MarkupCraft (Kopírovať plochu) v jej skutočnej veľkosti ako obrázok. |
| `PASTEBLOCK` |  | PASTEBLOCK: vloží, čo ste skopírovali, ako jeden blok. Blok dostane vlastný názov; RENAME mu dá váš. |
| `PASTECLIP` |  | Vloží obsah schránky: nasleduje kurzor, kliknite, kam má ísť (Ctrl+V) |
| `PASTEORIG` |  | Vloží obsah schránky na súradnice, z ktorých bol skopírovaný (Ctrl+Shift+V) |
| `PDF` |  | Dá CadCraft súbory PDF, ktoré používajú podklady výkresu |
| `PDFADJUST` |  | Zoslabí, zmení kontrast, prevedie na čiernobiele alebo vypne PDF podklad |
| `PDFATTACH` | `PDFATT` | Pripojí stranu PDF ako podklad (PDFATTACH) |
| `PDFCLIP` |  | Orezáva PDF podklad na obdĺžnik alebo mnohouholník |
| `PDFIMPORT` | `PDFIM` | Premení čiary, výplne a text strany PDF na objekty výkresu (PDFIMPORT) |
| `PDFLAYERS` |  | Zapína alebo vypína hladiny PDF podkladu |
| `PEDIT` | `PE` | Upraví lomenú čiaru: uzavrie, otvorí, spojí, nastaví šírku, prispôsobenú krivku, spline krivku, zruší zakrivenie, generovanie typu čiary, obráti; čiary, oblúky a splines sa môžu premeniť na lomené čiary |
| `PHOTOSKETCH` | `PSK` | Premení fotografiu ručnej skice na papieri na čiary a oblúky v mierke, narovná perspektívu a dá každej farbe pera vlastnú hladinu. |
| `PICKSTYLE` |  | PICKSTYLE: či výber jedného objektu zo skupiny vyberie celú skupinu (1, začiatočné nastavenie), alebo len ten objekt (0). Ponechané pre túto reláciu. |
| `PLAN` |  | Otočí pohľad tak, aby os X UCS (aktuálny ucs, uložený Ucs alebo Svet) bola vodorovne na obrazovke. Nič vo výkrese sa nepohne. |
| `PLINE` | `PL` | Lomená čiara z úsečiek a oblúkov |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Vykreslí do PDF: list, alebo model v mierke |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabuľky štýlov vykreslenia: nastavte, ako sa každá farba tlačí (farba, čierna, sivá, atrament, hrúbka čiary); uchováva sa s výkresom (STYLESMANAGER) |
| `POINT` | `PO` | Objekty bod |
| `POINTCLOUD` | `PC` | Pripojený oblak bodov: rez, výška, hrúbka, farba, veľkosť, viditeľnosť, zoom, odpojiť |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Pripojí oblak bodov (LAS, LAZ, XYZ, PTS) pod výkres |
| `POLARANG` |  | Krok polárneho sledovania v stupňoch (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Pravidelný mnohouholník |
| `PRESSPULL` |  | Zatlačí alebo potiahne stenu telesa (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Otvorí panel Vlastnosti (aj Ctrl+1, alebo dvojklik na objekt) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Zloží panel Vlastnosti k okraju okna |
| `PSPACE` | `PS` | Opustí výrez, v ktorom pracujete, a vráti sa na list (alebo dvojklik mimo neho). |
| `PUBLISH` | `-PUBLISH` | Vykreslí viac alebo všetky listy do jedného PDF (strana a záložka pre každý list) |
| `PURGE` | `PU` | Odstráni definície blokov, ktoré nič nepoužíva |
| `QDIM` |  | Rýchla kóta: kótuje viacero objektov naraz (spojite, od základnej čiary, odsadené, súradnicové, polomer alebo priemer) |
| `QPMODE` | `QP` | Rýchle vlastnosti pri kurzore zapnuté alebo vypnuté |
| `QSELECT` | `QS` | Rýchly výber: každý objekt daného typu, ktorého hladina, farba, veľkosť alebo názov sa zhoduje (QS) |
| `RASTERSNAP` |  | Zapína alebo vypína prichytávanie k čiaram skenovaných listov. |
| `RAY` |  | Lúč: konštrukčná čiara z bodu, na jednu stranu nekonečná. |
| `RECOVER` |  | Otvorí poškodený DXF alebo DWG: preskočí to, čo sa nedá prečítať, namiesto odmietnutia súboru, povie, čo sa preskočilo, a potom skontroluje a opraví výkres ako AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Uzavretá lomená čiara z dvoch rohov |
| `REDLINE` | `RDL` | Redline na revíziu: prečíta balík redline MarkupCraft, prijme alebo zamietne každú zmenu, označí prijaté oblakom s protokolom revízií a uloží súbor odpovedí (RDL) |
| `REDO` |  | Znova urobí to, čo bolo vrátené späť |
| `REFCLOSE` |  | Dokončí úpravu bloku na mieste: uloží ho, alebo zahodí zmeny |
| `REFEDIT` |  | Upraví blok na mieste, kde sa nachádza jeho odkaz, pričom zvyšok výkresu je zoslabený; REFCLOSE ho uloží |
| `REGEN` | `RE` | Znova vytvorí to, čo je na tejto karte nakreslené, z výkresu |
| `REGENALL` | `REA` | Znova vytvorí to, čo je nakreslené na každej karte, v každom paneli a každom otvorenom výkrese |
| `REGION` | `REG` | REGION (REG): vytvorí ploché oblasti (regióny) z uzavretých objektov, alebo z čiar, oblúkov a lomených čiar, ktoré uzatvárajú slučku koniec na koniec. UNION, SUBTRACT a INTERSECT potom kombinujú regióny a MASSPROP udá ich vlastnosti prierezu. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Zaregistruje viacero skenov: umiestni ich do jedného rámca podľa zvolených dvojíc bodov alebo cieľov, spresní pomocou ICP, exportuje jeden LAS alebo E57 |
| `REINIT` |  | Znova načíta váš súbor skratiek |
| `RENAME` | `-RENAME`, `REN` | Premenuje hladinu alebo blok (každý objekt alebo odkaz nasleduje) |
| `REVCLOUD` | `RC` | Revízny oblak: zaoblí obdĺžnik, mnohouholník, voľnú cestu alebo objekt (RC) |
| `REVOLVE` | `REV` | Otočí uzavreté 2D objekty okolo osi na telesá (3D) |
| `ROTATE` | `RO` | Otočí objekty okolo základného bodu |
| `SAMPLES` | `SAMPLE` | Otvorí jeden zo vzorových výkresov CadCraft (architektonickú sadu, skutočné vyhotovenie), aby ste sa mohli učiť |
| `SAVE` | `QSAVE` | Stiahne výkres v jeho formáte (DWG alebo DXF) |
| `SAVEAS` |  | Stiahne výkres ako DWG alebo DXF: vyberiete, ktorý |
| `SAYSEL` |  | Povie, čo je vybrané, každú vetu zvlášť. |
| `SCALE` | `SC` | Zmení mierku objektov okolo základného bodu |
| `SCALELISTEDIT` | `SCALELIST` | Pridá, upraví a zmaže vlastné mierky výkresu; objavia sa v zoznamoch mierok výrezu a vykreslenia a uložia sa do súboru (SCALELIST) |
| `SCANALIGN` | `SCL` | Zarovná skenovaný list do dvoch bodov: posunie, otočí a ak chcete, zmení mierku. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Vloží skenovaný výkres: PNG, JPEG alebo TIFF (jedna strana alebo všetky strany viacstranového súboru), alebo stranu PDF, ktorá je obrázok. |
| `SCANCLEAN` | `SCC` | Zmení skenovaný list na čiernobiely a odstráni škvrny. |
| `SCANCROP` | `SCR` | Orezáva skenovaný list na okno. |
| `SCANDESKEW` | `SCD` | Nájde uhol, pod ktorým ležia dlhé čiary skenovaného listu, a po potvrdení uhla list narovná. |
| `SCANERASE` | `SCE` | Zmaže oblasť skenovaného listu: obdĺžnik, mnohouholník alebo laso. |
| `SCANINFO` | `SCI` | Zobrazí pôvodný súbor skenovaného listu a kroky od tej doby. |
| `SCANSCALE` | `SCS` | Zmení mierku skenovaného listu: zvoľte dva body na ňom a napíšte skutočnú vzdialenosť medzi nimi. |
| `SCANTRACE` | `SCT` | Prekreslí skenovaný list na čiary a oblúky na novej hladine, s toleranciou, ktorú nastavíte. Text a šrafovanie zostanú ako raster. |
| `SELECT` |  | Vyberie objekty hneď (pre P, Predchádzajúci, v ďalšom príkaze) |
| `SELECTALL` | `AI_SELALL` | Vyberie každý objekt, ktorý môžete na tejto karte upraviť (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Vyberie každý objekt podobný tomu, ktorý zvolíte: rovnaký typ, hladina a farba (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Zobrazí panel Súbor listov: listy z mnohých výkresov, očíslované, vykreslené do jedného PDF. |
| `SHORTCUTS` | `KEYS` | Dá ľubovoľnému príkazu vlastnú klávesu (Ctrl alebo Alt s písmenom, alebo voľnú funkčnú klávesu), uchovanú v tomto prehliadači alebo v počítačovej aplikácii. |
| `SHXFONTS` | `SHX` | Dá CadCraft fonty SHX z priečinka alebo súborov, takže štýly textu, ktoré ich uvádzajú, sa nimi vykreslia (zoznam, odstrániť, obrátiť) |
| `SKETCHFIX` | `SKF` | Kreslí ťahy voľnou rukou; každý sa stane čistou čiarou, kružnicou, oblúkom, obdĺžnikom alebo lomenou čiarou, zarovnaný a spojený s ostatnými. |
| `SKETCHLIVE` | `SKL` | Kreslenie perom: každý ťah sa stane presnou čiarou, kružnicou, oblúkom alebo obdĺžnikom, keď zdvihnete pero, prichytený k výkresu, s veľkosťou, ktorú prepíšete. |
| `SPLINE` | `SPL` | Nakreslí spline cez body (alebo s riadiacim mnohouholníkom), alebo premení lomenú čiaru na spline |
| `SPLINEDIT` | `SPE` | Upraví spline: body prispôsobenia, riadiace body a váhy, otvorí alebo uzavrie, obráti ho, alebo ho premení na lomenú čiaru |
| `SPLIT` |  | Rozdelí kresliacu plochu na panely (ako VPORTS na modeli; aj z listu) |
| `STEELMEMBER` | `SMEMBER` | Oceľový prvok v 3D zo štandardného profilu: dva body (nosník), alebo základný bod a výška (stĺpec) |
| `STLOUT` |  | Exportuje 3D model ako STL (v milimetroch) |
| `STRETCH` | `S` | Natiahne: potiahnite okno cez konce, aby ste presunuli; čo je vnútri, sa pohne, zvyšok zostane (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Štýly textu: písmo, výška, šírka a sklon, ktoré nový text prevezme (dialóg; -STYLE v príkazovom riadku) |
| `SUBTRACT` | `SU` | Odoberie telesá od iných (3D), alebo 2D regióny od regiónov |
| `SWBOUT` | `SWMACRO` | Stiahne makro pre SolidWorks (.swb), ktoré znova vytvorí model ako jeden náčrt s väzbami |
| `SWEEP` |  | Prevedie uzavreté 2D objekty pozdĺž dráhy (čiara, lomená čiara, oblúk, kružnica) na telesá (3D) |
| `TABLE` | `TB` | Vytvorí tabuľku: riadky a stĺpce, alebo z buniek tabuľkového procesora v schránke alebo v súbore CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Upraví tabuľku: píšte do bunky, vkladajte a mažte riadky a stĺpce, veľkosti, zlúčené bunky, zarovnanie |
| `TABLEEXPORT` |  | Uloží to, čo tabuľka zobrazuje, ako súbor CSV |
| `TABLEPASTE` | `PASTETABLE` | Vytvorí tabuľku z buniek tabuľkového procesora v schránke |
| `TABLESTYLE` | `TS` | Štýly tabuliek: výšky textu, zarovnanie, okraje a ohraničenia pre riadky nadpisu, hlavičky a údajov |
| `TAGS` |  | Značky na odkazoch na bloky: definujte značku (druh, povolené hodnoty, bloky, na ktoré sa vzťahuje), nastavte ju na vybrané odkazy a vypíšte ich ako tabuľku, ktorú možno uložiť ako CSV |
| `TEXT` | `DT`, `DTEXT` | Jednoriadkový text; Enter začne ďalší riadok |
| `TEXTEDIT` | `ED`, `DDEDIT` | Upraví text na mieste: zvoľte text (alebo dvojklik naň) (ED) |
| `TEXTMASK` | `TMASK` | Dá za text podkladovú masku (pozadie výkresu alebo farbu), alebo ju odstráni. |
| `TEXTTOFRONT` |  | Presunie všetok text, kóty a vynášacie čiary pred všetko ostatné. |
| `TOOLBAR` |  | Vyberte, čo zobrazujú tlačidlá panela nástrojov: ikony a text, len ikony, alebo len text (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Umiestni panel nástrojov nahor, nadol, vľavo alebo vpravo v okne |
| `TOOLBARROWS` |  | Vyberte, koľko riadkov používa panel nástrojov: zalomiť podľa miesta, 2, alebo 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Nastaví lišty nad výkresom ako štandardné alebo kompaktné |
| `TOUCHCROSSHAIR` | `TCX` | Posunutý kríž na kreslenie prstom: jeden prst pohybuje krížom, ktorý je nad a vedľa neho, takže prst nezakrýva bod výberu. Zdvihnutie prsta nič nevyberie; tlačidlo Kliknutie alebo ťuknutie druhým prstom vyberie na kríži, a podržanie Kliknutia pri pohybe ťahá. Dlhý stlak alebo tlačidlo Enter je Enter. Dva prsty posúvajú a zväčšujú. Možnosti: ON, OFF, Auto (zapnuté len tam, kde je prst jediným ukazovateľom), Vzdialenosť, Strana. |
| `TOUR` | `TUTORIAL` | Znova prejde šesťkrokovú prehliadku prvého výkresu |
| `TRIM` | `TR` | Orezáva objekty tam, kde ich pretínajú iné: kliknite na časť, potiahnite cez viacero, alebo Shift+kliknutie na predĺženie |
| `TRIMEXTENDMODE` |  | Ako TRIM a EXTEND začínajú: 1 Rýchly (každý objekt je hranou rezu alebo hranicou), 0 Štandardný (najprv zvoľte hrany) |
| `TTR` |  | Kružnica dotyčnicová k dvom objektom s polomerom, ktorý zadáte (rovnaké ako CIRCLE T). |
| `TURNLEFT` |  | Otočí pohľad o 90° doľava (proti smeru hodinových ručičiek): UCS Z -90, a pohľad nasleduje. Nič vo výkrese sa nepohne. |
| `TURNRIGHT` |  | Otočí pohľad o 90° doprava (v smere hodinových ručičiek): UCS Z 90, a pohľad nasleduje. Nič vo výkrese sa nepohne. |
| `TURNWORLD` |  | Späť do sveta: UCS Svet, a pohľad je znova vodorovný. |
| `TXT2MTXT` | `T2M` | Spojí jednoriadkové texty do jedného odsekového textu zhora nadol. |
| `UCS` |  | Váš vlastný súradnicový systém: začiatok a os X (začiatok, uhol Z, 3bod, OBjekt, Predchádzajúci, Svet, NAmed). Body, ktoré napíšete, ortogonálne, polárne sledovanie, mriežka a nový text ho nasledujú; pohľad sa otočí, aby jeho os X bola vodorovne. Nič vo výkrese sa nepohne. |
| `UNDO` | `U` | Vráti späť posledný príkaz |
| `UNGROUP` |  | UNGROUP: rozdelí skupiny. Vyberte objekty skupín alebo zadajte Názov. Objekty zostanú vo výkrese. |
| `UNION` | `UNI` | Spojí telesá do jedného (3D), alebo 2D regióny do jedného regiónu |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Znova zobrazí každý objekt skrytý príkazmi ISOLATEOBJECTS alebo HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Ako sa dĺžky zobrazujú a zadávajú: desatinné, stopy a palce, zlomky (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Znova vypočíta polia a vyberte, kedy sa aktualizujú samy |
| `USDOUT` |  | Exportuje 3D model ako USD (textový .usda, binárny .usdc, alebo balík .usdz) |
| `VIEW` | `-VIEW`, `V` | Štandardné 3D pohľady, perspektívne alebo rovnobežné (3D) |
| `VIEWBASE` | `FLATSHOT` | Umiestni plochý 2D pohľad na 3D telesá (predný, horný, bočný alebo izometrický, skryté čiary prerušované) na list alebo do modelu |
| `VIEWLABEL` | `VL` | Názov pohľadu na liste, ktorý zobrazuje názov pohľadu jeho výrezu a mení sa s ním. |
| `VOICE` |  | Zapína alebo vypína hlasové príkazy. Rozpoznávajú sa na tomto počítači. |
| `VPCLIP` |  | Orezáva výrez listu na uzavretý objekt alebo nakreslený mnohouholník; Delete z neho opäť urobí obdĺžnik |
| `VPLAYER` |  | Zmrazí alebo rozmrazí hladiny len v niektorých výrezoch (Zmraziť, Rozmraziť, Obnoviť) a vyberie, ktoré hladiny nové výrezy začínajú zmrazené (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Rozdelí kresliacu plochu na panely, každý s vlastným pohľadom (na liste: výrez, ako MVIEW) |
| `VPVIEW` |  | Nastaví, čo výrez zobrazuje: zvoľte okno na modeli |
| `VSCURRENT` | `VS`, `SHADEMODE` | Vizuálny štýl 3D pohľadu: tieňovaný, hrany, skrytá čiara, drôtený, röntgen |
| `WALL` | `WA` | Nakreslí 2D steny ako lomenú čiaru. Spájajú sa a nesú dvere a okná. |
| `WALLARC` | `WARC` | Nakreslí oblúk stien. Pôdorysné steny sú priame, takže oblúk sa kreslí ako krátke priame steny (každá 15 stupňov), ktoré sa spájajú. |
| `WALLDELSEG` |  | Zmaže kus steny medzi dvoma bodmi. Zvyšok zostane ako jedna alebo dve steny. |
| `WALLDIM` |  | Napíšte novú hodnotu pre kótu: stena na jej vzdialenom konci sa posunie kolmo na seba, stena na prvom konci zostane na mieste a steny k nej spojené nasledujú. |
| `WALLDISJOIN` |  | Zvoľte stenu blízko jedného konca, aby sa na tom konci zakázali spojenia: koniec sa nakreslí rovno a nič ho nenasleduje. Znova ju zvoľte, aby sa spojenia povolili. |
| `WALLGRID` |  | Uzamkne stenu na os mriežky: pozdĺž nej, alebo jeden koniec na nej. Keď osu presuniete cez GRIDMOVE, stena ju nasleduje. |
| `WALLHOLD` |  | Zarovnanie a uzamknutie: stena si zachováva miesto oproti inej stene (na svojej priamke alebo vo vzdialenosti, akú má). Keď sa jedna pohne, druhá nasleduje. |
| `WALLHOLDDIM` |  | Uzamkne vzdialenosť medzi dvoma rovnobežnými stenami. Keď sa jedna pohne, druhá nasleduje, aby ju zachovala. |
| `WALLHOLDS` |  | Vypíše uzamknutia stien. |
| `WALLJOINS` |  | Dá každej stene staršieho výkresu jej identifikátor a uloží spojenia medzi nimi. Stane sa to aj pri prvej zmene, ktorú urobíte. |
| `WALLJOINSTYLE` |  | Kliknite na roh, kde sa dve steny stretávajú koniec na koniec, aby ste zmenili, ako sa kreslí: zošikmenie, tupý spoj, zarovnanie. T prepína, ktorá stena prechádza. |
| `WALLOFFSET` | `WO` | Presunie stenu kolmo na seba o vzdialenosť (steny k nej spojené nasledujú), alebo vytvorí jej kópiu v tej vzdialenosti |
| `WALLPICK` |  | Vytvorí steny na čiare alebo lomenej čiare vo výkrese, s čiarami k nej spojenými, ak poviete Áno. |
| `WALLPOLY` | `WP` | Nakreslí steny okolo pravidelného mnohouholníka s 3 až 64 stranami, ako POLYGON. |
| `WALLRECT` | `WR` | Nakreslí štyri spojené steny z dvoch protiľahlých rohov, ako RECTANG. |
| `WALLREJOIN` |  | Zlúči dve časti steny znova do jednej steny. Prvá si zachová svoje miesto vo výkrese. |
| `WALLROT` |  | Nakreslí štyri spojené steny ako obdĺžnik otočený na ľubovoľný uhol: prvá strana, potom ako ďaleko von. |
| `WALLSPLIT` | `WS` | Rozdelí stenu na dve v bode, alebo tam, kde ju pretína iná stena. Časti zostanú spojené, pokiaľ nepožiadate o medzeru alebo voľné konce. Dvere a okná idú s svojou časťou. |
| `WALLSPLITGAP` |  | Rozdelí stenu a nechá medzeru: napíšte medzeru, zvoľte stenu, potom bod. Časti majú voľné konce a dajú sa znova spojiť. |
| `WALLSTRETCH` |  | Natiahne oknom: koncové body stien vnútri sa pohnú, steny celé vnútri sa pohnú celé, a steny, ktoré do ich strán narážajú, sa posunú s nimi. |
| `WALLTAN` |  | Pokračuje stenou oblúkom, ktorý z nej vychádza pozdĺž steny (nakreslený ako krátke priame steny). |
| `WALLTRACE` |  | Vytvorí steny okolo najmenšej uzavretej oblasti čiar a stien okolo bodu, na ktorý kliknete. |
| `WALLUNHOLD` |  | Zruší uzamknutia steny (a uzamknutia iných stien k nej). |
| `WBLOCK` | `W`, `-WBLOCK` | Zapíše blok, niektoré objekty alebo celý výkres do nového súboru DWG alebo DXF (W) |
| `WEDGE` | `WE` | Klin: dva rohy a výška; svahuje sa od prvého rohu (3D) |
| `WHEREAMI` | `WHERE` | Povie, kde je kurzor. |
| `WHOHAS` |  | Povie, kto má výkres otvorený. CadCraft Studio si pri každom otvorenom výkrese drží malý zamykací súbor (Plan.dwg.cclock: kto, od kedy, ktorú verziu) a pri zatvorení ho odstráni. Možnosti: Current (otvorený výkres), File (vyberte jeden), FOlder (každý výkres v priečinku, ktorý je niekde otvorený; Studio tým môže v tom priečinku ukladať zamykacie súbory), Path (napíšte jednu), Name (názov, ktorý vidia ostatní). Zámok, ktorý sa neobnovil päť minút, sa považuje za zastaraný. V prehliadači nie je k dispozícii. |
| `WINDOW` | `WN` | Umiestni okno do steny. |
| `XATTACH` | `XA` | Prepojí ďalší DWG alebo DXF do tohto výkresu, zobrazený len na čítanie (XREF ich vypíše a znova načíta) |
| `XCLIP` | `XC` | Orezáva odkazy na bloky a prepojené výkresy na obdĺžnik alebo mnohouholník, alebo odstráni orezanie. |
| `XLINE` | `XL` | Konštrukčná čiara, nekonečná na oboch stranách: cez dva body, vodorovná, zvislá, pod uhlom, rozpoľujúca uhol alebo odsadená od čiary. |
| `XREF` | `XR`, `-XREF` | Prepojené výkresy (externé odkazy): vypísať, pripojiť, znova načítať, zviazať, odpojiť |
| `ZOOM` | `Z` | Rozsah, alebo okno |
