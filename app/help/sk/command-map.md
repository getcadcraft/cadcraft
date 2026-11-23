---
title: Mapa príkazov: čo napísať
summary: Každý príkaz CadCraft s jeho krátkymi názvami, A až Z, vytvorený priamo z programu, a zvyky z iných kresliacich programov, ktoré sa líšia.
keywords: mapa príkazov, príkazy, aliasy, krátke názvy, prechod z iného, zoznam príkazov, čo napísať, zmazať, orezať, ekvivalent, rozdiely
from: 9426856f
---

CadCraft preberá názvy príkazov a krátke názvy, ktoré ľudia poznajú z iných kresliacich programov: napíšte `L` pre čiaru, `TR` na orezanie, `E` na zmazanie. Takže pre väčšinu z nich nie je žiadna prekladová tabuľka, ktorú by ste sa museli učiť: názov, ktorý poznáte, je tu tiež. Zoznam nižšie obsahuje každý príkaz CadCraft, vytvorený z programu samotného. {{key:Enter}} zopakuje posledný; `HELP` na riadku príkazov vypíše ten istý zoznam.

Tie niekoľko, ktoré nie sú rovnaké, alebo nie sú hotové:

- **Uložiť** stiahne kópiu v prehliadači ({{cmd:SAVE}}, {{cmd:SAVEAS}}); v CadCraft Studio zapíše súbor. Pozrite [Prechod z iného kresliaceho softvéru](topic:coming-from).
- **PLOT** vytvorí PDF (aj PNG a SVG), s tabuľkou štýlov vykreslenia; nie je tu správca nastavenia stránky.
- **DIMSTYLE** a **PEDIT** sú hotové; **PEDIT** nemá voľbu Edit-vertex (to robia úchyty).
- **TABLE** nie je hotová; {{cmd:XREF}}, {{cmd:SPLINE}} a {{cmd:WBLOCK}} hotové sú.
- Vlastné príkazy rutiny (AutoLISP `C:NAME`) sa zobrazia, keď ju načítate cez {{cmd:APPLOAD}}; tu nie sú vypísané.

## Všetky príkazy (402)

| Príkaz | Krátke názvy | Čo robí |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Obieha 3D pohľad ľavým tlačidlom |
| `ACCESS` | `AX` | Zapína alebo vypína kreslenie bez zraku: výsledky hovorené cez čítačku obrazovky, klávesový kurzor na výkrese, zvuky uchopenia a hovorené príkazy. |
| `ALIASEDIT` |  | Úprava aliasov príkazov v jednom textovom súbore (známy formát L, *LINE) |
| `ALIGN` | `AL` | Presunie a otočí objekty tak, aby zdrojové body pristáli na cieľových bodoch (jeden, dva alebo tri páry), a ak chcete, zmení im mierku |
| `ALIGNPANEL` | `ALP` | Otvorí panel Zarovnať a rozmiestniť |
| `ALIGNTO` |  | Zarovná ľavé, stredové, pravé, horné, stredové alebo dolné hrany vybraných objektov, podľa výberu, prvého alebo posledného vybraného objektu, alebo bodu |
| `ANNOALLVISIBLE` | `ANNOALL` | Zobrazí anotatívne objekty pri každej mierke, alebo iba tam, kde je mierka pohľadu (alebo výkresu) v ich zozname |
| `ANNOSCALE` | `CANNOSCALE` | Nastaví anotačnú mierku výkresu: anotatívny text a kóty sa zmenia tak, aby sa vytlačili v rovnakej veľkosti |
| `APPLOAD` | `AP` | Načíta aplikácie: rutiny LISP (.lsp) a ich súbory dialógov (.dcl); Startup Suite (AP) |
| `ARC` | `A` | Oblúk: 3 body, Začiatok/Stred/Koniec, Začiatok/Stred/Uhol, Začiatok/Stred/Dĺžka, Začiatok/Koniec/Uhol, Začiatok/Koniec/Smer, Začiatok/Koniec/Polomer, Stred/Začiatok/Koniec, Stred/Začiatok/Uhol, Stred/Začiatok/Dĺžka, Pokračovanie |
| `AREA` | `AA` | Plocha a obvod podľa bodov alebo objektu; Pridať a Odčítať držia bežiaci súčet (AA) |
| `ARRAY` | `AR` | Kópie v riadkoch a stĺpcoch, alebo okolo stredu (AR) |
| `ARRAYASSOCIATIVITY` |  | Nastaví, či príkazy ARRAY robia polia, ktoré zostávajú upraviteľné (1), alebo obyčajné kópie (0) |
| `ARRAYCLOSE` |  | Ukončí úpravu zdrojových objektov poľa |
| `ARRAYEDIT` |  | Mení pole vytvorené voľbou Asociatívne: počty, rozstupy, zdrojové objekty, jedna položka |
| `ARRAYPATH` |  | Kópie objektov pozdĺž čiary, oblúka, lomenej čiary alebo inej krivky |
| `ARRAYPOLAR` |  | Kópie okolo stredového bodu |
| `ARRAYRECT` |  | Kópie v riadkoch a stĺpcoch |
| `ASBUILT` | `ASB` | ASBUILT číta skutočné body, ktoré tím zameral (CSV / TXT, ako ich zapisuje EXPORTPOINTS), a porovnáva ich s bodmi výkresu: v rámci alebo mimo tolerancie, nezameraný, navyše. Označí ich na hladine AS-BUILT a stiahne správu CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definuje atribút (značku, za ktorú blok žiada hodnotu), ktorý sa dá vložiť do bloku (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Upraví hodnoty atribútov referencie bloku na riadku príkazov, jednu za druhou (Enter ponechá hodnotu) |
| `ATTSYNC` |  | Zosúladí referencie bloku s jeho definíciami atribútov: nové pridá s predvolenými hodnotami, odstránené zahodí, polohy a text resetuje; hodnoty sa zachovajú |
| `AUDIT` |  | Skontroluje otvorený výkres na poškodenie: čísla, ktoré nie sú konečné, objekty bez veľkosti, chýbajúce hladiny, bloky, štýly a typy čiar, bloky, ktoré obsahujú samy seba, zdieľané identifikátory, pokazené kóty a šrafovania. Vypíše, čo našiel, podľa druhu, a pred opravou sa opýta; oprava je jeden krok späť. |
| `AUNITS` | `ANGUNITS` | Ako sa uhly zobrazujú a zadávajú: desatinné stupne, stupne-minúty-sekundy alebo azimuty ako N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Automatické dopĺňanie výkresu zapnuté alebo vypnuté, alebo výpis toho, čo vzory výkresu navrhujú teraz. |
| `AUTOCONSTRAIN` |  | Pridá väzby spoločného bodu, vodorovnej a zvislej tam, kde je geometria už blízko |
| `AUTODIM` | `ADIM` | Kótovanie podľa pravidiel: celkový rozmer, reťazce pozdĺž strán, otvory, priemery otvorov a rozstup mriežky, bez opakovania toho, čo je už okótované. |
| `AUTOSHEET` | `ASH` | Usporiadá listy sám: vyberie papier a štandardné mierky a umiestni každý pohľad s popiskom a popisovým poľom. |
| `BATTMAN` |  | Správca atribútov bloku: poradie, značky, výzvy, predvolené hodnoty a režimy atribútov bloku, potom aktualizácia jeho referencií |
| `BCLOSE` |  | Zatvorí editor blokov: uloží blok alebo zahodí zmeny |
| `BCONVERT` |  | BCONVERT nájde geometriu, ktorá sa opakuje, a premení ju na referencie blokov. Vyberte objekty, ktoré sa opakujú: každá iná množina objektov v otvorenom priestore, ktorá je rovnaká geometria, posunutá a otočená o ľubovoľný uhol, sa nájde, a so zapnutou voľbou Zrkadlovo alebo Mierka aj zrkadlové obrazy a kópie v inej veľkosti. Novému bloku dajte názov a základný bod; výber a každá kópia sa stanú referenciami naň, každá so svojou rotáciou a mierkou. Alebo zvoľte Blok a pomenujte existujúci blok, aby ste našli voľné kópie jeho objektov. Kópia musí mať rovnakú hladinu, farbu, typ čiary a hrúbku čiary, pokiaľ Vlastnosti nie sú nastavené na Ignorovať. Objekty na zamknutých hladinách sa nechajú na pokoji. Jeden krok späť. |
| `BEDIT` | `BE` | Editor blokov: upravuje objekty a atribúty bloku; BCLOSE uloží (BE) |
| `BLEND` |  | BLEND: spline medzi koncami dvoch otvorených kriviek, vybraných blízko koncov, aby sa spojili. CONtinuity: Tangent sleduje obidva smery, Smooth sleduje aj to, ako sa ohýbajú. |
| `BLOCK` | `B`, `BMAKE` | Vytvorí blok z objektov (stanú sa jednou referenciou) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: každá referencia jedného bloku sa stane referenciou na iný, na rovnakom mieste s rovnakou mierkou a rotáciou. Hodnoty atribútov, ktoré majú oba bloky, sa zachovajú. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE zobrazí panel Bloky s kurzorom v jeho filtri. Panel ukazuje obrázok každého bloku (naposledy umiestnené sú prvé), ako zoznam alebo mriežku; kliknite na obrázok alebo ho pretiahnite na výkres, aby sa blok umiestnil cez INSERT. Pod Knižnice pridajte vlastný súbor DWG alebo DXF: jeho bloky sa vypíšu s obrázkami a pri umiestnení sa skopírujú do tohto výkresu. V CadCraft Studio sa dá pridať aj priečinok výkresov a súbory a priečinky sa zapamätajú. |
| `BOMEDIT` | `BOMCOLUMNS` | Stĺpce, zoskupenie, zoradenie, nadpis, súčty a poznámky tabuľky kusovníka |
| `BOMEXPORT` |  | Uloží tabuľku kusovníka ako súbor .csv |
| `BOMTABLE` | `BOM` | Živá tabuľka kusovníka jednej zóny, alebo celého výkresu |
| `BOMUPDATE` |  | Aktualizuje teraz všetky tabuľky kusovníka, aj zamrazené |
| `BOMZONE` | `BZONE` | Pomenovaná oblasť výkresu pre kusovník: dva rohy, mnohouholník alebo obrys uzavretého objektu |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): vyberte bod vnútri uzavretej plochy a dostanete okolo nej uzavretú lomenú čiaru. Oblúky zostanú oblúkmi. Ostrovy obkreslí aj plochy vnútri neho. |
| `BOX` |  | Kváder: dva rohy a výška (3D) |
| `BPARAMETER` | `BPARAM` | Ešte nie je hotové: pridanie parametra (napríklad Viditeľnosť) do bloku. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Parametre bloku: pomenované parametre so vzorcami a viac parametrov viditeľnosti v jednom bloku. Funguje v editore blokov (priradí vybrané objekty k stavu) a na vybranej referencii (jej vlastné hodnoty a stavy). |
| `BREAK` | `BR` | Prerušenie čiary, oblúka, kružnice alebo lomenej čiary medzi dvoma bodmi (BR) |
| `BREAKATPOINT` |  | Rozdelí čiaru, oblúk alebo lomenú čiaru na dve v bode |
| `BREAKLINE` |  | Nakreslí čiaru so symbolom prerušenia; jej veľkosť a predĺženie za koncami sa zapamätajú. |
| `BREPLACE` |  | BREPLACE vymení jeden blok za iný. Vybrané: vyberte referencie blokov a pomenujte blok, ktorý sa má použiť namiesto nich. Všetky: pomenujte blok a jeho náhradu, a každá referencia vo všetkých priestoroch a vnútri iných blokov sa zmení. Referencia si zachová svoje miesto, mierku, rotáciu a hladinu a hodnoty atribútov, ktoré majú oba bloky; hodnoty, pre ktoré nový blok nemá miesto, sa zahodia a pomenujú. |
| `BSEARCH` |  | BSEARCH nájde bloky. Názov: časť názvu bloku, alebo vzor s * a ?. Atribút: hodnota (alebo TAG=hodnota), ktorú majú atribúty referencie. Geometria: vyberte objekty alebo jednu referenciu bloku a vypíšu sa bloky, ktorých tvar je aspoň na 85 % podobný, najlepší prvý; veľkosť, rotácia a zrkadlenie sa nepočítajú. Nájdené referencie v otvorenom priestore sú vybrané a pripravené pre ďalší príkaz. |
| `BURST` |  | Rozloží referencie blokov a zachová to, čo hovoria ich atribúty: každá hodnota sa stane textom na hladine atribútu. |
| `BVHIDE` | `BVH` | V editore blokov: skryje objekty v aktuálnom stave viditeľnosti. |
| `BVSHOW` | `BVSH` | V editore blokov: zobrazí objekty, ktoré aktuálny stav viditeľnosti skrýva (zobrazia sa zoslabené, aby sa dali vybrať). |
| `BVSTATE` | `BVS` | V editore blokov, na bloku so stavmi viditeľnosti: prepne na stav, alebo pridá, premenuje či zmaže jeden. |
| `CAL` |  | Vypočíta dĺžku alebo číslo: + − * / a zátvorky, ako ich napíšete kdekoľvek |
| `CENTERLINE` | `CL` | Osová čiara medzi dvoma čiarami: uprostred medzi nimi, alebo pozdĺž osi, keď sa stretnú (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Značka stredu: kríž v strede kružnice alebo oblúka, s osovými čiarami tesne za ním (CM) |
| `CHAMFER` | `CHA` | Zrazí roh medzi dvoma čiarami (D dve vzdialenosti, A dĺžka a uhol, P každý roh lomenej čiary) |
| `CHSPACE` |  | CHSPACE: presúva objekty medzi listom a modelom cez pohľad. Sú zmenené v mierke a otočené, aby z druhej strany vyzerali rovnako. Na liste idú do modelu; keď pracujete cez pohľad (MSPACE), prídu na list. |
| `CIRCLE` | `C` | Stred a polomer, priemer, 2 alebo 3 body |
| `CLASS` |  | Vloží vybrané objekty do triedy, alebo bez výberu nastaví aktívnu triedu (? ich vypíše) |
| `CLASSES` | `CLS` | Panel Triedy: triedy zoraďujú objekty cez hladiny; zobrazujú, skrývajú a štylizujú ich, a prepisujú ich pre každý pohľad (CLS) |
| `COMMANDLINE` | `CMDLINE` | Ukotví alebo oddelí riadok príkazov, urobí z neho jeden riadok, nastaví riadky jeho histórie alebo otvorí históriu (F2) |
| `COMPARESETTINGS` | `CMPSET` | Porovnáva štýly kót, štýly textu, hladiny, listy alebo jednotky: dva v tomto výkrese, alebo tento výkres s iným otvoreným, a prenesie hodnotu. |
| `CONSTRAINTBAR` | `CBAR` | Zobrazí alebo skryje lišty väzieb (Showall / Hideall, alebo pre každý objekt) |
| `COPY` | `CO`, `CP` | Kopíruje objekty, toľkokrát, koľkokrát kliknete |
| `COPYBASE` |  | Kopíruje objekty do schránky so základným bodom, ktorý vyberiete |
| `COPYCLIP` |  | Kopíruje objekty do schránky (Ctrl+C); PASTECLIP ich umiestni |
| `COUNT` | `BCOUNT` | Počíta referencie blokov: vyberte jednu, aby sa vybrali a spočítali všetky referencie jej bloku |
| `COUNTTABLE` |  | Umiestni tabuľku počtov blokov |
| `CREDITS` |  | Vloží uvedenia autorov knižnice do výkresu ako tabuľku. Spustite znova, aby sa tabuľka aktualizovala z položiek v teraz v výkrese. |
| `CURSORSIZE` |  | Veľkosť zameriavača: 100 ho vedie od okraja k okraju výkresu (Nastavenia › Kurzor › Celá obrazovka) |
| `CUTCLIP` |  | Vystrihne objekty do schránky (Ctrl+X): kopírovať, potom zmazať |
| `CYLINDER` | `CYL` | Valec: stred, polomer a výška (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Vypíše bloky, ich atribúty a vlastnosti objektov ako tabuľku vo výkrese alebo súbor CSV |
| `DATALINK` | `DL` | Tabuľka zo súboru CSV, ktorá si pamätá súbor, takže sa dá znova načítať |
| `DATALINKUPDATE` | `DLU` | Znova načíta súbor dátového prepojenia a znova naplní jeho tabuľky |
| `DCALIGNED` | `DCALI` | Rozmerová väzba: skutočná vzdialenosť medzi bodmi, bodom a čiarou, alebo dvoma čiarami |
| `DCANGULAR` | `DCANG` | Rozmerová väzba: uhol medzi dvoma čiarami, alebo oblúka |
| `DCCONVERT` |  | Premení kóty nakreslené na geometrii, na ktorú sa dajú dávať väzby, na rozmerové väzby |
| `DCDIAMETER` | `DCDIA` | Rozmerová väzba: priemer kružnice alebo oblúka |
| `DCDISPLAY` |  | Zobrazí alebo skryje rozmerové väzby na výkrese |
| `DCHORIZONTAL` | `DCHOR` | Rozmerová väzba: vodorovná vzdialenosť |
| `DCLINEAR` | `DCLIN` | Rozmerová väzba: vodorovná alebo zvislá vzdialenosť, od miesta, kde ju umiestnite |
| `DCRADIUS` | `DCRAD` | Rozmerová väzba: polomer kružnice alebo oblúka |
| `DCVERTICAL` | `DCVER` | Rozmerová väzba: zvislá vzdialenosť |
| `DELBLOCKS` |  | Zmaže bloky: každú referenciu (aj vnorené, na každom liste) a definície |
| `DELCONSTRAINT` | `DELCON` | Odstráni každú väzbu (geometrickú aj rozmerovú) z vybraných objektov |
| `DELOPENING` |  | Vyberie dvere alebo okno zo múru. |
| `DESCRIBE` | `DESC` | Povie, čo výkres obsahuje: koľko objektov, akého druhu, akej veľkosti, čo je vybrané. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Zruší výber (Esc) |
| `DETAILS` | `DET` | Vlastné detaily vašej firmy, nájdené pre to, čo kreslíte: hľadať, pridať blok, vypísať, odstrániť, zapnúť alebo vypnúť ponuky. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Nakreslí diagram z textu: vývojový diagram Mermaid, komponentový diagram PlantUML, D2, zoznam od–do alebo XML draw.io, ako bloky a spojnice, ktoré môžete upraviť |
| `DIMALIGNED` | `DAL`, `DIMALI` | Skutočná vzdialenosť medzi dvoma bodmi |
| `DIMANGULAR` | `DAN`, `DIMANG` | Uhol medzi dvoma čiarami, oblúka, alebo tromi bodmi |
| `DIMARC` | `DAR` | Kóta dĺžky oblúka: vzdialenosť pozdĺž oblúka, so symbolom oblúka (DAR) |
| `DIMASZ` |  | Nastavenie kóty: veľkosť šípky |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Kóty zložené z jednej základnej čiary |
| `DIMBREAK` | `DBREAK` | Preruší kótovacie a predlžovacie čiary tam, kde pretínajú iné objekty (Auto), medzi dvoma bodmi (Manual), alebo odstráni prerušenia |
| `DIMCONSTRAINT` | `DCON` | Rozmerové väzby: lineárne, zarovnané, uhlové, polomer, priemer, premena |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Reťazec kót, každá od konca poslednej |
| `DIMDEC` |  | Nastavenie kóty: desatinné miesta |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Priemer oblúka alebo kružnice |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Uvoľní kóty od objektov, ku ktorým sú pripojené (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Zmení text kóty (Domov, Nový text, Otočiť) alebo sklopí predlžovacie čiary (Šikmo) |
| `DIMEXE` |  | Nastavenie kóty: predĺženie za kótovaciu čiaru |
| `DIMEXO` |  | Nastavenie kóty: odsadenie od začiatku |
| `DIMGAP` |  | Nastavenie kóty: medzera okolo textu |
| `DIMINSPECT` |  | Kontrolná kóta: rámček okolo hodnoty s označením a ako často sa diel kontroluje |
| `DIMJOGGED` | `DJO`, `JOG` | Kóta polomeru so zalomením: polomer nakreslený z bližšieho bodu, keď je stred ďaleko (DJO) |
| `DIMJOGLINE` | `DJL` | Pridá symbol zalomenia na kótovaciu čiaru lineárnej alebo zarovnanej kóty, aby ukázal, že vzdialenosť nie je nakreslená v mierke (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Vodorovná alebo zvislá vzdialenosť (R pre ľubovoľný uhol) |
| `DIMLUNIT` |  | Nastavenie kóty: formát dĺžky (1 vedecký, 2 desatinný, 3 inžiniersky, 4 architektonický, 5 zlomkový) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Súradnicová kóta: vzdialenosť X alebo Y bodu od počiatku UCS, na vynášacej čiare (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Prepíše premenné kóty na vybraných kótach bez zmeny ich štýlu; Clear vráti štýl (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Polomer oblúka alebo kružnice |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Pripojí body kóty k objektom, takže ich sleduje a znova meria, keď sa posunú (DRE) |
| `DIMSCALE` |  | Nastavenie kóty: celková mierka (veľkosti × toto) |
| `DIMSPACE` |  | Rovnaký rozstup rovnobežných kót, meraný od základnej kóty (0 ich zarovná, Auto je dvojnásobok výšky textu) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Vytvorí, mení, nastavuje ako aktuálny, zmaže, použije a porovnáva pomenované štýly kót (dialóg; -DIMSTYLE na riadku príkazov) |
| `DIMTEDIT` | `DIMTED` | Presunie text kóty doľava, doprava alebo na stred kótovacej čiary, alebo ho otočí |
| `DIMTEXTUNIT` | `DTU` | Text kóty v mm, cm, m alebo km, alebo v jednotkách samotného výkresu: vybrané kóty, inak nové (DTU) |
| `DIMTXT` |  | Nastavenie kóty: výška textu |
| `DIST` | `DI` | Vzdialenosť a uhol medzi dvoma bodmi |
| `DISTRIBUTE` |  | Rovnomerne rozmiestni vybrané objekty, zo strany na stranu alebo nahor a nadol: rovnaké kroky medzi stredmi, alebo rovnaké medzery; dve vonkajšie zostanú |
| `DIVIDE` | `DIV` | DIVIDE (DIV): značky, ktoré rozdelia čiaru, oblúk, kružnicu, lomenú čiaru, spline alebo elipsu na rovnaké časti. Body, alebo s Blok blok na každej značke. |
| `DOCUMENTS` | `DOCS` | Otvorí panel Dokumenty: vybrať a vrátiť výkresy, revízie, stavy vydania a schválenie pre priečinok projektu |
| `DOOR` | `DR` | Umiestni dvere do múru. Strana, na ktorú kliknete, je strana, na ktorú sa otvoria. |
| `DRAWORDER` |  | Zmení poradie kreslenia: objekty dopredu, dozadu, alebo nad či pod iné objekty. |
| `DUPLICATE` | `DUP` | Kópia, ktorá sa hýbe s ukazovateľom: kliknutím ju položíte (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Vlastnosti výkresu: názov, autor a ostatné, a vaše vlastné dvojice názov a hodnota |
| `DXFOUT` |  | Stiahne výkres ako DXF R12 (Uložiť zachová svoj formát) |
| `EATTEDIT` | `DDATTE` | Upraví atribúty referencie bloku: hodnoty, text a vlastnosti, jeden atribút naraz |
| `ELLIPSE` | `EL` | Koncové body osi a druhá polosos |
| `ERASE` | `E`, `DELETE` | Odstráni objekty |
| `EXPLODE` | `X` | Rozloží lomené čiary, bloky a kóty na ich časti |
| `EXPORT` | `EXP` | Uloží kópiu výkresu v type súboru, ktorý zapisuje doplnok |
| `EXPORT3D` | `3DEXPORT` | Exportuje 3D model: GLB, OBJ alebo STL |
| `EXPORTPOINTS` | `EXPPTS` | Zapíše body a vkladacie body blokov s jedným atribútom ako popis do súboru CSV alebo TXT (PNEZD, PENZD alebo XYZ) pre programy BIM a geodéziu |
| `EXTEND` | `EX` | Predlží objekty, aby dosiahli iné: kliknite blízko konca, ťahajte cez viacero, alebo Shift+klik na orezanie |
| `EXTRIM` |  | EXTRIM: vyberte jednu hranu orezania, potom stranu. Všetko, čo hranu pretína, sa na tej strane orežie. Kúsky, ktoré by zmizli, sa ukážu pri pohybe ukazovateľa. |
| `EXTRUDE` | `EXT` | Vytlačí uzavreté 2D objekty na telesá (3D) |
| `FIELD` |  | Vloží pole do textu, bunky tabuľky alebo atribútu: dátum, názov súboru, číslo listu, vlastnosť výkresu, plochu alebo dĺžku objektu, alebo vzorec |
| `FILLET` | `F` | Zaoblí alebo zarovná roh medzi dvoma objektmi (R polomer, P každý roh lomenej čiary, M viac) |
| `FIND` |  | Nájde a nahradí slová v texte, hodnotách atribútov a texte kóty |
| `FLATTEN` |  | Nastaví výšku (Z) a hrúbku vybraných objektov na 0, aj v blokoch, ktoré používajú. |
| `FLOOR` |  | Vyberie poschodie, na ktorom sa kreslí, pridá jedno, alebo presunie či skopíruje výber na neho. |
| `FLOORLAYERS` |  | Premení poschodia na hladiny s názvom Floor-Layer, pre súbor, ktorý pôjde niekomu bez poschodí. |
| `FLOORS` | `FLR` | Otvorí panel Poschodia: skladá poschodia v jednom priestore modelu. |
| `GCCOINCIDENT` |  | Väzba: dva body sa stretnú, alebo bod zostane na objekte |
| `GCCOLLINEAR` |  | Väzba: dve čiary zostanú na jednej čiare |
| `GCCONCENTRIC` |  | Väzba: dve kružnice alebo oblúky zdieľajú stred |
| `GCEQUAL` |  | Väzba: dve čiary zostanú rovnako dlhé, alebo dve kružnice/oblúky rovnaký polomer |
| `GCFIX` |  | Väzba: bod alebo celý objekt zostane tam, kde je |
| `GCHORIZONTAL` |  | Väzba: čiara (alebo dva body) zostane vodorovná |
| `GCPARALLEL` |  | Väzba: dve čiary zostanú rovnobežné |
| `GCPERPENDICULAR` |  | Väzba: dve čiary zostanú v pravom uhle |
| `GCSYMMETRIC` |  | Väzba: dva body, čiary alebo kružnice sa zrkadlia cez čiaru |
| `GCTANGENT` |  | Väzba: čiara a kružnica alebo oblúk (alebo dva z nich) zostanú dotyčnicou |
| `GCVERTICAL` |  | Väzba: čiara (alebo dva body) zostane zvislá |
| `GDSIN` | `GDS` | Zobrazí rozloženie IC (súbor GDSII): každú hladinu a typ údajov ako hladinu výkresu, sploštené, v jednotkách používateľa; iba na zobrazenie a meranie (laboratórny pokus) |
| `GEOMCONSTRAINT` | `GCON` | Geometrické väzby: vodorovná, zvislá, rovnobežná, dotyčnica, spoločný bod… |
| `GLBOUT` |  | Exportuje 3D model ako GLB (glTF) |
| `GRADIENT` | `GD` | Vyplní plochu prechodom jednej alebo dvoch farieb |
| `GRID` |  | Nastaví mriežku: vzdialenosť medzi čiarami, každú N-tu čiaru ako hlavnú, ON alebo OFF, alebo Auto, aby znova sledovala zväčšenie |
| `GRIDMOVE` | `GM` | Presunie čiaru mriežky a to, čo na nej visí: múry sa natiahnu, stĺpy, bubliny a značky sa pohnú, kóty nasledujú. |
| `GROUP` | `G` | GROUP (G): dá vybraným objektom meno, ktoré zdieľajú. Kliknutie na jeden z nich potom vyberie všetky. Enter pri názve vytvorí skupinu bez mena. |
| `GROUPEDIT` |  | GROUPEDIT: upraví skupinu. Vyberte jeden z jej objektov alebo zadajte Názov, potom Pridať alebo Odstrániť objekty, REName ju premenuje, zmení jej Popis, alebo určí, či kliknutie vyberie celú. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Vyplní plochu plnou výplňou alebo vzorom: kliknite vnútri, alebo vyberte uzavreté objekty (H) |
| `HATCHEDIT` | `HE` | Zmení šrafovanie: vzor, mierku, uhol, začiatok a jeho väzbu na hranicu. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Znova vytvorí hraničné lomené čiary zo šrafovania, prepojené s ním alebo nie |
| `HATCHTOBACK` |  | Pošle každé šrafovanie za všetko ostatné. |
| `HELP` | `?` | Tento zoznam |
| `HIDEOBJECTS` |  | Skryje vybrané objekty až do UNISOLATEOBJECTS. Neukladá sa s výkresom. |
| `HISTORY` | `HIST` | HISTORY (HIST): verzie tohto výkresu — kópie uchované na tomto počítači, keď ich Studio uloží, a verzie v cloude — na otvorenie, obnovenie a porovnanie so zmenami zobrazenými farebne. |
| `ID` |  | Súradnice bodu |
| `IMAGE` | `IM` | Dá CadCraftu obrázkové súbory, ktoré výkres používa (DWG ukladá iba to, kde boli) |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Umiestni obrázok (PNG alebo JPEG) zo súboru. |
| `IMAGECLIP` | `ICL` | Orezanie obrázka na obdĺžnik alebo mnohouholník, alebo odstránenie orezania. |
| `IMPORT` | `IMP` | Importuje súbor druhu, ktorý číta doplnok, do tohto výkresu |
| `INSERT` | `I`, `DDINSERT` | Umiestni blok (S mierka, R otočenie); F zo súboru DWG/DXF, L z knižnice |
| `INTERSECT` | `IN` | Ponechá len to, čo majú telesá spoločné (3D), alebo plochu, ktorú spoločne zdieľajú 2D oblasti |
| `ISODRAFT` |  | ISODRAFT: izometrické kreslenie zapnuté alebo vypnuté, alebo priamo na rovinu Vľavo, Hore alebo Vpravo. Pokiaľ je zapnuté, Ortogonálne a polárne sledovanie sledujú dve osi roviny, mriežka sa kreslí izometricky a ELLIPSE má Izokruh. |
| `ISOLATEOBJECTS` | `ISOLATE` | Zobrazí iba vybrané objekty; všetko ostatné v tomto priestore je skryté až do UNISOLATEOBJECTS. Neukladá sa s výkresom. |
| `ISOPLANE` |  | ISOPLANE: vyberte izometrickú rovinu na kreslenie: Vľavo, Hore alebo Vpravo. Enter ide na ďalšiu, ako F5 pri zapnutom izometrickom kreslení. |
| `JOIN` | `J` | Spojí čiary, oblúky a lomené čiary, ktoré sa stretávajú koniec na koniec, do jednej lomenej čiary; čiary na jednej priamke do jednej čiary (J) |
| `LASER` | `LASERCUT` | Otvorí panel Laser: pošle hladiny laserovej rezačke alebo gravírke (G-kód GRBL) |
| `LASSOMODE` |  | Stlačenie a ťahanie nakreslí lasso (1) alebo obdĺžnik (0) |
| `LAYDEL` |  | Zmaže hladinu a každý objekt na nej (v modeli, na listoch a v blokoch) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Otvorí správcu hladín: každú hladinu v jednej tabuľke |
| `LAYERPANEL` |  | Zobrazí panel hladín |
| `LAYFRZ` |  | Zmrazí hladinu každého objektu, ktorý vyberiete |
| `LAYGROUP` | `LG` | Zoskupí hladiny do priečinkov na paneli Hladiny. |
| `LAYISO` |  | Izoluje hladiny vybraných objektov (každá iná hladina vypnutá) |
| `LAYLOCKFADE` |  | Nastaví, koľko zoslabnú objekty na zamknutých hladinách, a či ich kliknutie môže vybrať. |
| `LAYMCUR` |  | Urobí hladinu objektu, ktorý vyberiete, aktuálnou |
| `LAYMRG` |  | Zlúči hladiny: ich objekty sa presunú na cieľovú hladinu a zlúčené hladiny zmiznú |
| `LAYOFF` |  | Vypne hladinu každého objektu, ktorý vyberiete |
| `LAYON` |  | Zapne každú hladinu |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Nový list s rámcom, popisovým poľom a pohľadom |
| `LAYTHW` |  | Rozmrazí každú hladinu |
| `LAYUNISO` |  | Znova zapne hladiny, ktoré LAYISO vypol |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Premení text napísaný starými vietnamskými fontmi na Unicode (fonty TCVN3 / ABC ako .VnTime a fonty VNI ako VNI-Times). Taký text sa už zobrazuje tak, ako sa číta; tento príkaz ho prepíše natrvalo, s počtom a jedným krokom späť. |
| `LENGTHEN` | `LEN` | Predĺži alebo skráti čiary, oblúky a lomené čiary: o hodnotu, percento, na celkovú dĺžku, alebo ťahaním (LEN) |
| `LIBRARY` | `LIB` | Panel knižnice: umiestniť položky, kontrola aktualizácií, uvedenia autorov |
| `LIMITS` |  | Nastaví hranice výkresu: ON, OFF, alebo ľavý dolný a pravý horný roh. S hranicami ON sa body mimo nich odmietnu |
| `LINE` | `L` | Rovné úseky, každý ako vlastný objekt |
| `LINETYPE` | `LT`, `CELTYPE` | Typ čiary, ktorý dostanú nové objekty (podľa hladiny, podľa bloku alebo pomenovaný) |
| `LINKVIEWS` | `SYNCVIEWS` | Posúva a zväčšuje všetky tabule spoločne (rozdelená obrazovka), na porovnanie dvoch výkresov alebo revízií |
| `LISPEDIT` | `VLIDE` | LISPEDIT (alebo VLIDE) otvorí editor LISP: okno na písanie, načítanie a vyskúšanie rutiny. Načítať do výkresu prečíta každý tvar, ako to robí APPLOAD so súborom, a vytvorí jeho príkazy. Spustiť výber vyhodnotí vybrané tvary, alebo tvar, kde je kurzor. Konzola ukáže, čo rutina vypísala, a každú chybu s jej riadkom. Zodpovedajúca zátvorka sa označuje pri písaní a Enter odsadí nový riadok. Nový, Otvoriť a Uložiť pracujú so súborom .lsp. Zoznamy vedľa textu ukazujú funkcie, ktoré rutina definuje, tie, ktoré volá a tento LISP ešte nemá, a všetky, ktoré má. Okno neblokuje výkres, takže rutina môže žiadať body; Stop alebo Esc ukončí bežiacu rutinu. |
| `LIST` | `LI`, `LS` | Opíše objekty v histórii |
| `LTSCALE` | `LTS` | Mierka typu čiary výkresu (každá čiarka a medzera sa ňou násobí) |
| `LWDISPLAY` | `LWT` | Zobrazí alebo skryje hrúbky čiar na obrazovke (tlačidlo LWT na stavovom riadku) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Hrúbka čiary, ktorú dostanú nové objekty (podľa hladiny, podľa bloku, predvolená, alebo mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Mapové vrstvy pod priestorom modelu: súradnicový systém výkresu, dlaždice, WMS, WMTS, ArcGIS, obrázky |
| `MASSPROP` |  | MASSPROP: vlastnosti rezu oblastí a uzavretých objektov: plocha, obvod, ťažisko, momenty a deviačný moment, polomery zotrvačnosti a hlavné osi. Presné pre čiary a oblúky. Správu môže zapísať do textového súboru. |
| `MATCHPROP` | `MA`, `PAINTER` | Zhoda vlastností: skopíruje hladinu, farbu a ďalšie vlastnosti jedného objektu na ostatné (MA) |
| `MEASURE` | `ME` | MEASURE (ME): značka každú zadanú dĺžku pozdĺž čiary, oblúka, kružnice, lomenej čiary, splinu alebo elipsy, od konca najbližšie k vášmu výberu. Body, alebo s Blok blok na každej značke. |
| `MEASUREGEOM` | `MEA` | Meria vzdialenosť, polomer, uhol alebo plochu (MEA) |
| `MINSERT` |  | MINSERT: umiestni blok v riadkoch a stĺpcoch naraz. Každý je vlastná referencia, takže ktorúkoľvek môžete posunúť alebo zmazať. |
| `MIRROR` | `MI` | Zrkadlí objekty cez čiaru |
| `MLEADER` | `MLD`, `MLEAD` | Viacnásobná vynášacia čiara: šípka, vynášacia čiara a poznámka ako jeden objekt (MLD) |
| `MLEADERALIGN` | `MLA` | Zarovná viacnásobné vynášacie čiary s jednou z nich v jednom smere, v rovnakých rozstupoch, alebo rozmiestni medzi dvoma bodmi (MLA) |
| `MLEADERCOLLECT` | `MLC` | Zhromaždí niekoľko viacnásobných vynášacích čiar do jednej: ich bloky v riadku alebo stĺpci, alebo ich poznámky jedna pod druhou (MLC) |
| `MLEADEREDIT` | `MLE` | Pridá vynášacie čiary k viacnásobnej vynášacej čiare alebo ich odstráni; prepína jej obsah medzi textom a blokom (MLE) |
| `MLINE` |  | Nakreslí rovnobežné čiary naraz, spojené v rohoch. |
| `MOVE` | `M` | Presunie objekty podľa základného bodu a druhého bodu |
| `MSPACE` | `MS` | Pracuje na modeli cez pohľad otvoreného listu (alebo dvojklik vnútri pohľadu). |
| `MTEXT` | `MT`, `T` | Odsekový text: potiahnite jeho šírku, potom ppíšte na mieste; Enter začne nový odsek (T) |
| `MVIEW` | `MV` | Pohľad na model, na rozložení |
| `NAMEDVIEW` | `NV`, `VIEWS` | Pomenované pohľady: uloží pohľad na obrazovke (alebo okno) pod názvom a vráti sa k nemu (NV) |
| `NCOPY` |  | Kopíruje objekty z referencie bloku alebo prepojeného výkresu do výkresu bez ich rozloženia. |
| `NEARBY` |  | Povie, čo leží blízko kurzora, najbližšie prvé, s vzdialenosťou a stranou. |
| `NEW` |  | Začne nový výkres |
| `OBJECTSCALE` | `OBJSCALE` | Anotačné mierky anotatívneho textu a kót: pridajte mierku, zmažte jednu, pridajte aktuálnu mierku alebo ich vypíšte (každý pohľad ich zobrazí vo veľkosti pre svoju mierku) |
| `OBJOUT` |  | Exportuje 3D model ako OBJ |
| `OFFICESTANDARD` | `OFFSTD` | Kancelársky štandard: výšky textu na papieri, hladiny, polia popisového poľa a šablóny v jednom zázname. Ukazuje platný a odkiaľ pochádza; Importovať záznam .json do tohto výkresu, pridať kancelárske hladiny, ktoré výkres nemá, vypísať polia popisového poľa. |
| `OFFSET` | `O` | Rovnobežné kópie v danej vzdialenosti |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: ako OFFSET uzatvára medzery na vonkajších rohoch lomenej čiary. 0 predlžuje úseky, 1 pridá oblúk, 2 pridá rovný rez. Ponechané pre túto reláciu. |
| `OLELIST` | `OLES` | Vypíše objekty OLE, ktoré výkres nesie, a umiestni kópiu obrázka jedného tam, kde zvolíte |
| `OPEN` |  | Otvorí DWG alebo DXF z tohto počítača |
| `OPENIN3D` |  | Otvorí tento výkres v 3D modelovacej aplikácii, v novej karte (nič sa nenahrá) |
| `OPTIONKEYS` | `OPTKEYS` | Dajte voľbám príkazov vlastné písmená (ARRAY.PO, P), v jednom textovom súbore |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Otvorí ponuku uchopenia objektov: vyberte, ktoré uchopenia sú zapnuté. Tiež pravý klik na Uchopenie na stavovom riadku. |
| `OVERKILL` |  | Zmaže duplicitné objekty a zlúči prekrývajúce sa alebo koniec na koniec naväzujúce čiary a oblúky v rámci tolerancie. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panel Parametre: používateľské parametre a rozmerové väzby v jednej tabuľke |
| `PARTSLIST` | `PLIST` | Tabuľka zoznamu dielov každého štandardného dielu a oceľového profilu umiestneného z Knižnice |
| `PASTEAREA` | `PAREA` | Vloží oblasť skopírovanú v MarkupCraft (Kopírovať oblasť) v jej skutočnej veľkosti, ako obrázok. |
| `PASTEBLOCK` |  | PASTEBLOCK: vloží, čo ste skopírovali, ako jeden blok. Blok dostane vlastný názov; RENAME mu dá váš. |
| `PASTECLIP` |  | Vloží schránku: sleduje kurzor, kliknite, kam má ísť (Ctrl+V) |
| `PASTEORIG` |  | Vloží schránku na súradnice, z ktorých bola skopírovaná (Ctrl+Shift+V) |
| `PDF` |  | Dá CadCraftu súbory PDF, ktoré používajú podklady výkresu |
| `PDFADJUST` |  | Zoslabí, zmení kontrast, monochróm alebo vypne podklad PDF |
| `PDFATTACH` | `PDFATT` | Pripojí stranu PDF ako podklad (PDFATTACH) |
| `PDFCLIP` |  | Orezať podklad PDF na obdĺžnik alebo mnohouholník |
| `PDFIMPORT` | `PDFIM` | Premení čiary, výplne a text strany PDF na objekty výkresu (PDFIMPORT) |
| `PDFLAYERS` |  | Zapne alebo vypne hladiny podkladu PDF |
| `PEDIT` | `PE` | Upraví lomenú čiaru: zatvoriť, otvoriť, spojiť, šírka, prispôsobiť krivku, spline krivka, zrušiť zakrivenie, generovanie typu čiary, obrátiť; čiary, oblúky a splines sa dajú premeniť na lomené čiary |
| `PENPRESSURE` |  | Či tlak ťahu perom nastavuje hrúbku čiary toho, čo SKETCHFIX a SKETCHLIVE vytvoria (štandardne zapnuté). Ponechané v tomto prehliadači. |
| `PHOTOSKETCH` | `PSK` | Premení fotografiu náčrtu na papieri na čiary a oblúky v mierke, narovná perspektívu a dá každej farbe pera vlastnú hladinu. |
| `PICKSTYLE` |  | PICKSTYLE: či výber jedného objektu skupiny vyberie celú skupinu (1, štartovacie nastavenie), alebo iba ten objekt (0). Ponechané pre túto reláciu. |
| `PLAN` |  | Otočí pohľad tak, aby os X UCS (aktuálny ucs, uložený Ucs, alebo Svet) bola vodorovná na obrazovke. Nič vo výkrese sa nepohne. |
| `PLINE` | `PL` | Lomená čiara z úsečiek a oblúkov |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Vykresliť do PDF: rozloženie alebo model v mierke |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabuľky štýlov vykreslenia: nastavte, ako sa každá farba tlačí (farba, čierna, sivá, atrament, hrúbka čiary); uchované s výkresom (STYLESMANAGER) |
| `POINT` | `PO` | Objekty bodov |
| `POINTCLOUD` | `PC` | pripojený oblak bodov: rez, výška, hrúbka, farba, veľkosť, viditeľnosť, zoom, odpojiť |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | pripojí oblak bodov (LAS, LAZ, XYZ, PTS) pod výkres |
| `POLARANG` |  | Krok polárneho sledovania v stupňoch (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Pravidelný mnohouholník |
| `PRESSPULL` |  | Zatlačí alebo potiahne plochu telesa (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Otvorí panel Vlastnosti (aj Ctrl+1, alebo dvojklik na objekt) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Zloží panel Vlastnosti k okraju okna |
| `PSPACE` | `PS` | Opustí pohľad, v ktorom pracujete, a vráti sa na list (alebo dvojklik mimo neho). |
| `PUBLISH` | `-PUBLISH` | Vykreslí niekoľko alebo všetky listy do jedného PDF (strana a záložka na každý list) |
| `PURGE` | `PU` | Odstráni definície blokov, ktoré nikto nepoužíva |
| `QDIM` |  | Rýchla kóta: okótuje niekoľko objektov naraz (spojite, od základu, odsadene, súradnice, polomer alebo priemer) |
| `QPMODE` | `QP` | Rýchle vlastnosti pri kurzore zapnuté alebo vypnuté |
| `QSELECT` | `QS` | Rýchly výber: každý objekt daného typu, ktorého hladina, farba, veľkosť alebo názov sedí (QS) |
| `RASTERSNAP` |  | Zapne alebo vypne prichytávanie na čiary skenovaných listov. |
| `RAY` |  | Lúč: konštrukčná čiara z bodu, nekonečná jedným smerom. |
| `RECOVER` |  | Otvorí poškodený DXF alebo DWG: preskočí to, čo sa nedá prečítať, namiesto odmietnutia súboru, povie, čo preskočil, potom skontroluje a opraví výkres ako AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Uzavretá lomená čiara z dvoch rohov |
| `REDLINE` | `RDL` | Pripomienky na revíziu: načíta balík pripomienok MarkupCraft, prijme alebo zamietne každú zmenu, prijaté označí revíznym oblakom s revíznym záznamom a uloží súbor odpovedí (RDL) |
| `REDO` |  | Zopakuje to, čo bolo vrátené späť |
| `REFCLOSE` |  | Dokončí úpravu bloku na mieste: uloží ho, alebo zahodí zmeny |
| `REFEDIT` |  | Upraví blok na mieste, kde sedí jeho referencia, so zoslabeným zvyškom výkresu; REFCLOSE ho uloží |
| `REGEN` | `RE` | Znova vytvorí, čo sa kreslí na tejto karte z výkresu |
| `REGENALL` | `REA` | Znova vytvorí, čo sa kreslí na každej karte, tabuli a každom otvorenom výkrese |
| `REGION` | `REG` | REGION (REG): vytvorí ploché plochy (oblasti) z uzavretých objektov, alebo z čiar, oblúkov a lomených čiar, ktoré uzavrú slučku koniec na koniec. UNION, SUBTRACT a INTERSECT potom kombinujú oblasti a MASSPROP dá ich vlastnosti. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Zaregistruje niekoľko skenov: umiestni ich do jedného rámca podľa vybraných dvojíc bodov alebo cieľov, spresní cez ICP, exportuje jeden LAS alebo E57 |
| `REINIT` |  | Znova načíta váš súbor aliasov |
| `RENAME` | `-RENAME`, `REN` | Premenuje hladinu alebo blok (každý objekt alebo referencia ho nasleduje) |
| `REVCLOUD` | `RC` | Revizný oblak: obkreslí obdĺžnik, mnohouholník, voľnú dráhu alebo objekt (RC) |
| `REVOLVE` | `REV` | Otočí uzavreté 2D objekty okolo osi na telesá (3D) |
| `ROTATE` | `RO` | Otočí objekty okolo základného bodu |
| `SAMPLES` | `SAMPLE` | Otvorí jeden z ukážkových výkresov CadCraftu (architektonický súbor, skutočné vyhotovenie), aby ste sa z neho učili |
| `SAVE` | `QSAVE` | Stiahne výkres vo svojom formáte (DWG alebo DXF) |
| `SAVEAS` |  | Stiahne výkres ako DWG alebo DXF: vyberte, ktorý |
| `SAYSEL` |  | Povie, čo je vybrané, jedna veta na objekt. |
| `SCALE` | `SC` | Mení mierku objektov okolo základného bodu |
| `SCALELISTEDIT` | `SCALELIST` | Pridá, upraví a zmaže vlastné mierky výkresu; objavia sa v zozname mierok pohľadu a výstupu a uložia sa v súbore (SCALELIST) |
| `SCANALIGN` | `SCL` | Zarovná skenovaný list na dva body: posunie, otočí a ak chcete, zmení mierku. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Vloží skenovaný výkres: PNG, JPEG alebo TIFF (jedna strana alebo všetky strany viacstranového súboru) alebo stranu PDF, ktorá je obrázkom. |
| `SCANCLEAN` | `SCC` | Zmení skenovaný list na čiernobiely a odstráni škvrny. |
| `SCANCROP` | `SCR` | Orezať skenovaný list na okno. |
| `SCANDESKEW` | `SCD` | Nájde uhol, pod ktorým ležia dlhé čiary skenovaného listu, a po potvrdení uhla list narovná. |
| `SCANERASE` | `SCE` | Zmaže oblasť skenovaného listu: obdĺžnik, mnohouholník alebo lasso. |
| `SCANINFO` | `SCI` | Zobrazí pôvodný súbor skenovaného listu a kroky od tej doby. |
| `SCANSCALE` | `SCS` | Zmení mierku skenovaného listu: vyberte na ňom dva body a napíšte skutočnú vzdialenosť medzi nimi. |
| `SCANTRACE` | `SCT` | Obkreslí skenovaný list na čiary a oblúky na novú hladinu, s toleranciou, ktorú nastavíte. Text a šrafovanie zostanú ako raster. |
| `SELECT` |  | Vyberie objekty teraz (pre P, Predchádzajúci, v ďalšom príkaze) |
| `SELECTALL` | `AI_SELALL` | Vyberie každý objekt, ktorý môžete na tejto karte upraviť (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Vyberie každý objekt ako tie, ktoré vyberiete: rovnaký typ, hladina a farba (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Zobrazí panel Súbor listov: listy z mnohých výkresov, očíslované, vydané ako jedno PDF. |
| `SHORTCUTS` | `KEYS` | Dá ľubovoľnému príkazu vlastný kláves (Ctrl alebo Alt s písmenom, alebo voľná funkčná klávesa), uchovaný v tomto prehliadači alebo desktopovej aplikácii. |
| `SHXFONTS` | `SHX` | Dá CadCraftu písma SHX z priečinka alebo súborov, takže textové štýly, ktoré ich menujú, sa nimi kreslia (zoznam, odstránenie, obrátenie) |
| `SKETCHFIX` | `SKF` | Kreslí voľné ťahy; každý sa stane čistou čiarou, kružnicou, oblúkom, obdĺžnikom alebo lomenou čiarou, zarovnanou a spojenou s ostatnými. |
| `SKETCHLIVE` | `SKL` | Náčrt perom: každý ťah sa pri zdvihnutí pera stane presnou čiarou, kružnicou, oblúkom alebo obdĺžnikom, prichytený k výkresu, s veľkosťou na prepísanie. |
| `SPLINE` | `SPL` | Nakreslí spline cez body (alebo s riadiacim mnohouholníkom), alebo z lomenej čiary urobí spline |
| `SPLINEDIT` | `SPE` | Upraví spline: body prispôsobenia, riadiace body a váhy, otvorí alebo zatvorí, obráti ho, alebo ho premení na lomenú čiaru |
| `SPLIT` |  | Rozdelí oblasť kreslenia na tabule (ako VPORTS na modeli; aj z listu) |
| `STEELMEMBER` | `SMEMBER` | Oceľový prvok v 3D zo štandardného profilu: dva body (nosník), alebo základný bod a výška (stĺp) |
| `STLOUT` |  | Exportuje 3D model ako STL (milimetre) |
| `STRETCH` | `S` | Roztiahnutie: potiahnite pretínajúce okno cez konce, aby ste posunuli; čo je vnútri, sa pohne, zvyšok zostane (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Textové štýly: písmo, výška, šírka a sklon, ktoré nový text prevezme (dialóg; -STYLE na riadku príkazov) |
| `SUBTRACT` | `SU` | Odčíta telesá od iných (3D), alebo 2D oblasti od oblastí |
| `SWBOUT` | `SWMACRO` | Stiahne makro pre SolidWorks (.swb), ktoré prestaví model ako jeden väzbový náčrt |
| `SWEEP` |  | Prejde uzavreté 2D objekty pozdĺž dráhy (čiara, lomená čiara, oblúk, kružnica) na telesá (3D) |
| `TABLE` | `TB` | Vytvorí tabuľku: riadky a stĺpce, alebo z buniek tabuľkového procesora zo schránky alebo súboru CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Upraví tabuľku: píšte do bunky, vkladajte a mažte riadky a stĺpce, veľkosti, zlúčené bunky, zarovnanie |
| `TABLEEXPORT` |  | Uloží to, čo tabuľka ukazuje, ako súbor CSV |
| `TABLEPASTE` | `PASTETABLE` | Vytvorí tabuľku z buniek tabuľkového procesora zo schránky |
| `TABLESTYLE` | `TS` | Štýly tabuliek: výšky textu, zarovnanie, okraj a ohraničenia pre nadpis, hlavičku a riadky údajov |
| `TAGS` |  | Značky na referenciách blokov: definuje značku (druh, povolené hodnoty, bloky, na ktoré sa vzťahuje), nastaví ju na vybrané referencie a vypíše ich ako rozpis, ktorý môžete uložiť ako CSV |
| `TEXT` | `DT`, `DTEXT` | Jednoriadkový text; Enter začne ďalší riadok |
| `TEXTEDIT` | `ED`, `DDEDIT` | Upraví text na mieste: vyberte text (alebo dvojklik) (ED) |
| `TEXTMASK` | `TMASK` | Umiestni pozadie za text (pozadie výkresu alebo farbu), alebo ho odstráni. |
| `TEXTTOFRONT` |  | Presunie všetok text, kóty a vynášacie čiary pred všetko ostatné. |
| `TOOLBAR` |  | Vyberte, čo tlačidlá panela nástrojov ukazujú: ikony a text, iba ikony, alebo iba text (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Umiestni panel nástrojov hore, dole, vľavo alebo vpravo v okne |
| `TOOLBARROWS` |  | Vyberte, koľko riadkov panel nástrojov používa: zalomiť, 2, alebo 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Nastaví lišty nad výkresom na štandardné alebo kompaktné |
| `TOUCHCROSSHAIR` | `TCX` | Zameriavač s posunom na kreslenie prstom: jeden prst posúva zameriavač, ktorý sedí nad ním a vedľa, takže prst nezakrýva bod výberu. Zdvihnutie prsta nič nevyberie; tlačidlo Klik alebo ťuknutie druhým prstom vyberie pri zameriavači, a držanie Klik pri pohybe ťahá. Dlhý stlačenie alebo tlačidlo Enter je Enter. Dva prsty posúvajú a zväčšujú. Voľby: ON, OFF, Auto (zapnuté len tam, kde je prst jediným ukazovateľom), Distance, Side. |
| `TOUR` | `TUTORIAL` | Znova prejde šesťkrokovú prehliadku prvého výkresu |
| `TRIM` | `TR` | Zreže objekty späť tam, kde ich pretínajú iné: kliknite na kúsok, ťahajte cez viac, alebo Shift+klik na predĺženie |
| `TRIMEXTENDMODE` |  | Ako TRIM a EXTEND začínajú: 1 Rýchly (každý objekt je hrana orezania alebo hranica), 0 Štandardný (najprv vyberte hrany) |
| `TTR` |  | Kružnica dotyčná k dvom objektom s polomerom, ktorý zadáte (rovnaké ako CIRCLE T). |
| `TURNLEFT` |  | Otočí pohľad o 90° doľava (proti smeru hodinových ručičiek): UCS Z -90, a pohľad ide za ním. Nič vo výkrese sa nepohne. |
| `TURNRIGHT` |  | Otočí pohľad o 90° doprava (v smere hodinových ručičiek): UCS Z 90, a pohľad ide za ním. Nič vo výkrese sa nepohne. |
| `TURNWORLD` |  | Späť do sveta: UCS Svet, a pohľad je znova vodorovný. |
| `TXT2MTXT` | `T2M` | Spojí jednoriadkové texty do jedného odsekového textu, zhora nadol. |
| `UCS` |  | Váš vlastný súradnicový systém: počiatok a os X (počiatok, uhol Z, 3bod, OBject, Predchádzajúci, Svet, NAmed). Body, ktoré napíšete, ortogonálne sledovanie, polárne sledovanie, mriežka a nový text ho nasledujú; pohľad sa otočí tak, aby jeho os X bola vodorovná. Nič vo výkrese sa nepohne. |
| `UNDO` | `U` | Vráti späť posledný príkaz |
| `UNGROUP` |  | UNGROUP: rozdelí skupiny. Vyberte objekty skupín, alebo zadajte Názov. Objekty zostanú vo výkrese. |
| `UNION` | `UNI` | Spojí telesá do jedného (3D), alebo 2D oblasti do jednej oblasti |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Znova zobrazí každý objekt skrytý cez ISOLATEOBJECTS alebo HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Ako sa dĺžky zobrazujú a zadávajú: desatinné, stopy a palce, zlomky (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Znova vypočíta polia a vyberie, kedy sa aktualizujú samy |
| `USDOUT` |  | Exportuje 3D model ako USD (.usda text, .usdc binárny alebo balík .usdz) |
| `VIEW` | `-VIEW`, `V` | Štandardné 3D pohľady, perspektívne alebo rovnobežné (3D) |
| `VIEWBASE` | `FLATSHOT` | Umiestni plochý 2D pohľad na 3D telesá (spredu, zhora, zboku alebo izometricky, skryté čiary čiarkované) na list alebo do modelu |
| `VIEWLABEL` | `VL` | Názov pohľadu na liste, ktorý ukazuje názov pohľadu jeho pohľadu, a mení sa s ním. |
| `VOICE` |  | Zapne alebo vypne hovorené príkazy. Rozpoznávajú sa na tomto počítači. |
| `VPCLIP` |  | Orezá pohľad na liste na uzavretý objekt alebo nakreslený mnohouholník; Delete z neho znova urobí obdĺžnik |
| `VPLAYER` |  | Zmrazí alebo rozmrazí hladiny iba v niektorých pohľadoch (Freeze, Thaw, Reset) a vyberie, ktoré hladiny nové pohľady začínajú zmrazené (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Rozdelí oblasť kreslenia na tabule, každú s vlastným pohľadom (na liste: pohľad, ako MVIEW) |
| `VPVIEW` |  | Nastaví, čo pohľad ukazuje: vyberte okno na modeli |
| `VSCURRENT` | `VS`, `SHADEMODE` | Vizuálny štýl 3D pohľadu: tieňovaný, hrany, skrytá čiara, drôtený, röntgen |
| `WALL` | `WA` | Kreslí 2D múry ako lomenú čiaru. Spájajú sa a nesú dvere a okná. |
| `WALLARC` | `WARC` | Nakreslí oblúk múrov. Pôdorysné múry sú rovné, takže oblúk sa kreslí ako krátke rovné múry (každý po 15 stupňoch), ktoré sa spoja. |
| `WALLDELSEG` |  | Zmaže kúsok múru medzi dvoma bodmi. Zvyšok zostane ako jeden alebo dva múry. |
| `WALLDIM` |  | Napíšte novú hodnotu pre kótu: múr na jej vzdialenom konci sa posunie kolmo k sebe, múr na prvom konci zostane, a múry k nemu spojené ho nasledujú. |
| `WALLDISJOIN` |  | Vyberte múr blízko jedného konca, aby ste zakázali spojenia na tom konci: koniec sa nakreslí kolmo a nič ho nenasleduje. Vyberte ho znova, aby ste ich povolili. |
| `WALLGRID` |  | Zamkne múr na čiaru mriežky: pozdĺž nej, alebo jeden koniec na nej. Posuňte čiaru pomocou GRIDMOVE a múr ju nasleduje. |
| `WALLHOLD` |  | Zarovná a zamkne: múr si drží svoje miesto voči inému múru (na jeho čiare, alebo v jeho vzdialenosti). Ak sa jeden pohne, druhý ho nasleduje. |
| `WALLHOLDDIM` |  | Zamkne vzdialenosť medzi dvoma rovnobežnými múrmi. Ak sa jeden pohne, druhý ho nasleduje a udrží ju. |
| `WALLHOLDS` |  | Vypíše zámky na múroch. |
| `WALLJOINS` |  | Dá každému múru staršieho výkresu jeho identifikátor a uloží spojenia medzi nimi. Stane sa to aj pri prvej zmene, ktorú urobíte. |
| `WALLJOINSTYLE` |  | Kliknite na roh, kde sa dva múry stretávajú koniec na koniec, aby ste zmenili, ako sa kreslí: zrkadlo, na tupo, kolmo ukončiť. T prepína, ktorý múr prechádza. |
| `WALLOFFSET` | `WO` | Presunie múr kolmo k sebe o vzdialenosť (múry k nemu spojené ho nasledujú), alebo urobí kópiu v tejto vzdialenosti. |
| `WALLPICK` |  | Vytvorí múry na čiare alebo lomenej čiare vo výkrese, s čiarami k nej spojenými, ak poviete Áno. |
| `WALLPOLY` | `WP` | Nakreslí múry okolo pravidelného mnohouholníka s 3 až 64 stranami, ako POLYGON. |
| `WALLRECT` | `WR` | Nakreslí štyri spojené múry z dvoch protiľahlých rohov, ako RECTANG. |
| `WALLREJOIN` |  | Urobí dve časti jedného múru znova jedným múrom. Prvá si zachová svoje miesto vo výkrese. |
| `WALLROT` |  | Nakreslí štyri spojené múry ako obdĺžnik otočený v ľubovoľnom uhle: prvá strana, potom ako ďaleko ide druhá. |
| `WALLSPLIT` | `WS` | Rozdelí múr na dve v bode alebo tam, kde ho pretína iný múr. Časti zostanú spojené, pokiaľ nepožiadate o medzeru alebo voľné konce. Dvere a okná idú so svojou časťou. |
| `WALLSPLITGAP` |  | Rozdelí múr so zanechaním medzery: napíšte medzeru, vyberte múr, potom bod. Časti si ponechajú voľné konce a dajú sa znova spojiť. |
| `WALLSTRETCH` |  | Roztiahne oknom: koncové body múrov vnútri sa pohnú, celé múry vnútri sa pohnú celé, a múry, ktoré narážajú do ich bokov, sa s nimi posúvajú. |
| `WALLTAN` |  | Pokračuje múrom oblúkom, ktorý z neho odchádza pozdĺž múru (nakreslený ako krátke rovné múry). |
| `WALLTRACE` |  | Vytvorí múry okolo najmenšej uzavretej plochy čiar a múrov okolo bodu, na ktorý kliknete. |
| `WALLUNHOLD` |  | Zruší zámky na múre (a zámky ostatných múrov na ňom). |
| `WBLOCK` | `W`, `-WBLOCK` | Zapíše blok, niektoré objekty, alebo celý výkres do nového súboru DWG alebo DXF (W) |
| `WEDGE` | `WE` | Klin: dva rohy a výška; sklon ide od prvého rohu (3D) |
| `WHEREAMI` | `WHERE` | Povie, kde je kurzor. |
| `WHOHAS` |  | Povie, kto má výkres otvorený. CadCraft Studio si ku každému otvorenému výkresu drží malý zámkový súbor (Plan.dwg.cclock: kto, od kedy, aká verzia) a pri zatvorení ho odstráni. Voľby: Current (otvorený výkres), File (vyberte jeden), FOlder (každý výkres v priečinku, ktorý je niekde otvorený; Studio tiež smie v tom priečinku držať zámkové súbory), Path (napíšte jednu), Name (meno, ktoré ostatní vidia). Zámok, ktorý sa neobnovil päť minút, je zastaraný. V prehliadači nie je k dispozícii. |
| `WINDOW` | `WN` | Umiestni okno do múru. |
| `XATTACH` | `XA` | Prepojí ďalší DWG alebo DXF do tohto výkresu, zobrazený len na čítanie (XREF ich vypíše a znova načíta) |
| `XCLIP` | `XC` | Orezá referencie blokov a prepojené výkresy na obdĺžnik alebo mnohouholník, alebo odstráni orezanie. |
| `XLINE` | `XL` | Konštrukčná čiara, nekonečná na oboch stranách: cez dva body, vodorovná, zvislá, v uhle, deliaca uhol, alebo posunutá od čiary. |
| `XREF` | `XR`, `-XREF` | Prepojené výkresy (externé referencie): vypísať, pripojiť, znova načítať, zviazať, odpojiť |
| `ZOOM` | `Z` | Rozsah, alebo okno |
