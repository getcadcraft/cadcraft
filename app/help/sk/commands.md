---
title: Referencia príkazov
summary: Každý príkaz v kreslicej aplikácii CadCraft s jeho aliasmi, otázkami, ktoré kladie, a s jeho možnosťami a predvolenými hodnotami.
keywords: príkazy, aliasy, zoznam príkazov, plocha, obvod, measuregeom, čiara, pline, kružnica, oblúk, orezať, odsadiť, dimlinear, blok, vložiť, rozloženie, vykresliť, zoom, pomocník, copyclip, cutclip, pasteclip, pasteorig, copybase, duplikovať, selectall
from: 7db2646b
---

Zadajte názov príkazu alebo alias a stlačte {{key:Enter}} alebo {{key:Space}}. Veľkosť písmen nezáleží a úvodné `_`, `-`, `.` alebo `'` sa ignorujú. Zadajte `HELP` (alebo `?`), aby sa v histórii riadku príkazov vypísal stručný zoznam každého príkazu; stlačte {{key:F1}} pre túto pomoc.

Ako čítať výzvy: možnosti sú v hranatých zátvorkách a zvolíte ich napísaním ich veľkých písmen (`D` pre Priemer). Predvolená hodnota je v lomených zátvorkách; stlačte {{key:Enter}}, aby ste ju prijali. Kde sa žiada bod, môžete kliknúť alebo zadať ľubovoľný z formátov v [Zadávanie súradníc a vzdialeností](topic:coordinate-entry). Kde sa žiada vzdialenosť, môžete zadať číslo alebo kliknúť na dva body.

Stlačenie {{key:Enter}} tam, kde sa žiada bod alebo objekt a nie je predvolená hodnota, ukončí príkaz. {{key:Esc}} ho zruší. Čokoľvek príkaz urobil, je jeden krok späť.

## Kreslenie

### LINE

Aliasy: `L`. Rovné úseky, každý ako samostatný objekt.

- `Zadajte prvý bod` (Enter: začať od posledného zadaného bodu)
- `Zadajte ďalší bod [Späť (U)]`, opakovane. Po dvoch úsekoch: `[Späť (U)/Zavrieť (C)]`.
- `U` vráti späť posledný úsek, `C` uzavrie k prvému bodu a skončí. Enter skončí.

### PLINE

Aliasy: `PL`. Jedna lomená čiara z úsečiek a oblúkov.

- `Zadajte začiatočný bod`
- `Zadajte ďalší bod [Oblúk (A)/Zavrieť (C)/Späť (U)]` (Zavrieť, keď sú už dva úseky)
- `A` prepne na oblúky: `Zadajte koncový bod oblúka [Úsečka (L)/Zavrieť (CL)/Späť (U)]`. Každý oblúk pokračuje dotyčnicovo k predchádzajúcemu úseku. `L` sa vráti na úsečky, `CL` uzavrie oblúkom.
- Enter skončí; lomená čiara zostane otvorená.

### CIRCLE

Aliasy: `C`.

- `Zadajte stred kružnice [3P/2P/Ttr (dotyčnica, dotyčnica, polomer)]`
- `Zadajte polomer kružnice [Priemer (D)] <posledný polomer>`; `D` sa opýta `Zadajte priemer kružnice`.
- `2P`: dva konce priemeru. `3P`: tri body na kružnici.
- `T` (tiež príkaz `TTR` a {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Zadajte bod na objekte pre prvú dotyčnicu kružnice`, potom druhú, potom polomer (Enter: posledný). Kružnica sa dotýka oboch objektov (čiar, oblúkov, kružníc, úsekov lomenej čiary, aj vnútri blokov); z tých, ktoré sa dotýkajú, je to tá, ktorá sa dotýka najbližšie k vašim bodom. Keď žiadna nesedí, zobrazí sa „Kružnica neexistuje“.
- `TTT` (alebo {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): tri objekty; kružnica, ktorá sa dotýka všetkých troch, najbližšia k vašim bodom (tri čiary dajú vnútornú kružnicu alebo vonkajšiu podľa toho, kam kliknete).

### ARC

Aliasy: `A`.

- `Zadajte začiatočný bod oblúka [Stred (C)]`, `Zadajte druhý bod oblúka`, `Zadajte koncový bod oblúka`: oblúk cez tri body.
- `C`: `Zadajte stred oblúka`, `Zadajte začiatočný bod oblúka`, `Zadajte koncový bod oblúka`. Oblúk ide proti smeru hodinových ručičiek od začiatku ku koncu.

### RECTANG

Aliasy: `REC`, `RECTANGLE`. Uzavretá lomená čiara.

- `Zadajte prvý rohový bod`, `Zadajte druhý rohový bod`. Pre druhý roh napíšte `@šírka,výška`.

### POLYGON

Aliasy: `POL`. Pravidelný mnohouholník ako uzavretá lomená čiara.

- `Zadajte počet strán <4>` (3 až 1024)
- `Zadajte stred mnohouholníka`
- `Zadajte možnosť [Vpísaný do kružnice (I)/Opísaný okolo kružnice (C)] <I>`
- `Zadajte polomer kružnice`: kliknite alebo zadajte bod; jeho vzdialenosť určí veľkosť a jeho smer otočí mnohouholník.

### ELLIPSE

Aliasy: `EL`.

- `Zadajte koncový bod osi elipsy [Stred (C)]`, `Zadajte druhý koncový bod osi`, `Zadajte vzdialenosť k druhej osi`
- `C`: `Zadajte stred elipsy`, `Zadajte koncový bod osi`, potom vzdialenosť k druhej osi.
- `I` (`Isocircle`, len keď je zapnutý {{cmd:ISODRAFT}}): stred, potom polomer alebo `Priemer`: elipsa, ktorou sa kružnica zobrazí v aktuálnej izometrickej rovine.

### HATCH

Aliasy: `H`, `BH`, `BHATCH`; alebo {{ui:Hatch}} na paneli nástrojov. Najprv vypíše aktuálny vzor, mierku a uhol.

- `Zadajte vnútorný bod [Vybrať objekty (S)/Vzor (P)/Mierka (SC)/Uhol (A)]`, opakovane (`Späť (U)`, keď je už oblasť): každé kliknutie pridá uzavretú oblasť okolo seba, s uzavretými tvarmi vnútri ako ostrovmi. Enter vytvorí jedno šrafovanie zo všetkých.
- `S`: `Vyberte uzavreté objekty` (uzavreté lomené čiary, kružnice, uzavreté elipsy).
- `P`: `Zadajte názov vzoru, SOLID alebo ? pre zoznam <aktuálny>`. `SC`: `Zadajte mierku vzoru`. `A`: `Zadajte uhol vzoru`.
- `G` (Prechod): výplň je prechod namiesto vzoru. Pozrite si {{cmd:GRADIENT}} pre jeho výzvy.

Pozrite si [Šrafovanie a výplne oblastí](topic:hatch).

### GRADIENT

Aliasy: `GD`. Vyplní oblasť prechodom jednej alebo dvoch farieb. Najprv sa opýta na prechod, potom pokračuje ako {{cmd:HATCH}} (`Zadajte vnútorný bod`, `S` pre uzavreté objekty, {{key:Enter}} na dokončenie).

- `Zadajte možnosť prechodu [Typ (T)/Jedna farba (O)/Dve farby (TW)/Uhol (A)/Stred (C)/Ukončiť (X)] <X>`, opakovane; zakaždým vypíše prechod v jeho aktuálnom stave.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, alebo jeden z nich obrátený (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Stačia prvé písmená.
- `O`: jedna farba, potom jej odtieň od 0 do 1 (0 ju stmaví na čiernu, 0,5 je sama farba, 1 ju zosvetlí na bielu). `TW`: prvá a druhá farba. Farba je číslo od 1 do 255, tri čísla ako `255,128,0`, alebo `#rrggbb`.
- `A`: uhol, pod ktorým prechod beží. `C`: stred Áno alebo Nie (Nie posunie stred prechodu na jednu stranu).
- Odmietne farbu alebo typ, ktorý nepozná, a odtieň mimo rozsahu 0 až 1.

{{cmd:HATCHEDIT}} `G` a Vlastnosti (Prechod) zmenia prechod neskôr alebo ľubovoľné šrafovanie premenia na prechod. Prechod sa zobrazí na obrazovke aj sa vytlačí. DWG 2004 a novšie ho uchovajú ako skutočné šrafovanie s prechodom; DXF 2000 a DWG 2000 ho uchovajú pre CadCraft a ostatné programy uvidia plnú výplň v prvej farbe.

### HATCHGENERATEBOUNDARY

Aliasy: `HGB`. Znova vytvorí hranicu zo šrafovania, ktoré ju stratilo. `Vyberte šrafovania` (alebo ich vyberte najprv), potom `Prepojiť každé šrafovanie s jeho novou hranicou, aby ho šrafovanie nasledovalo? [Áno (Y)/Nie] <Áno>`.

- Každá slučka šrafovania sa stane uzavretou lomenou čiarou na hladine šrafovania; nové lomené čiary zostanú vybraté. Zakrivená hrana sa vráti ako krátke rovné kúsky, ktoré šrafovanie zachová.
- S Áno šrafovanie nasleduje svoju novú hranicu, ako šrafovanie vytvorené cez {{cmd:HATCH}}. Jeden krok späť.
- Ak nebolo vybraté žiadne šrafovanie, oznámi to.

### POINT

Aliasy: `PO`; alebo {{ui:Draw}} › {{ui:More}} › {{ui:Point}}. Objekty bod, jeden za každé kliknutie, až do Enter.

- `Zadajte bod`

### XLINE

Aliasy: `XL`; alebo {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}. Konštrukčné čiary, nekonečné na oboch stranách. Pozrite si [Konštrukčné čiary a lúče](topic:construction-lines).

- `Zadajte bod [Hor (H)/Ver (V)/Uhol (A)/Osová (B)/Odsadenie (O)]`, potom `Zadajte bod, ktorým čiara prechádza` pre každú čiaru, až do Enter.
- `A`: `Zadajte uhol konštrukčnej čiary [Referencia] <0>`; `R` najprv pýta `Vyberte objekt čiary`.
- `B`: `Zadajte vrchol uhla`, `Zadajte začiatočný bod uhla`, potom `Zadajte koncový bod uhla` pre každú čiaru.
- `O`: `Zadajte vzdialenosť odsadenia [Cez bod] <Cez bod>`, potom `Vyberte objekt čiary` a `Zadajte stranu odsadenia` (alebo `Zadajte bod, ktorým čiara prechádza`) pre každú čiaru.

### RAY

Bez aliasov; alebo {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}. `Zadajte začiatočný bod`, potom `Zadajte bod, ktorým lúč prechádza` pre každý lúč, až do Enter.

### TEXT

Aliasy: `DT`, `DTEXT`; alebo {{ui:Text}} na paneli nástrojov. Jednoriadkový text; každý riadok je samostatný objekt.

- `Zadajte začiatočný bod textu [Zarovnanie (J)]`
- `J`: `Zadajte možnosť [Vľavo/Stred/Vpravo/Stred výšky/TL/MC] <L>`, potom `Zadajte vkladací bod textu`
- `Zadajte výšku <aktuálna výška textu>`
- `Zadajte uhol otočenia textu <0>`
- `Zadajte text`, opakovane: každý Enter začne ďalší riadok pod ním. Enter na prázdnom riadku skončí. {{key:Space}} tu napíše medzeru.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} položí značky na čiaru, oblúk, kružnicu, lomenú čiaru, spline alebo elipsu, ktoré ju rozdelia na rovnaké časti. Vyberte objekt, potom zadajte počet častí (2 až 32767). Otvorený objekt dostane o jednu značku menej, ako je častí; uzavretý dostane značku aj na svojom začiatku. Samotný objekt sa nerozreže. Značky sú body; `Blok` namiesto toho žiada blok tohto výkresu a či sa má otáčať podľa objektu. Dĺžky pozdĺž splinov a elíps sa merajú po krátkych tetivách. Odmietne text, šrafovania a ďalšie objekty, ktoré nemajú dĺžku.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} položí značku pri každej zadanej dĺžke pozdĺž čiary, oblúka, kružnice, lomenej čiary, splinu alebo elipsy, počítané od konca najbližšie k miestu, kde ste klikli (uzavretý objekt: od jeho začiatku). Dĺžku zadajte napísaním alebo dvoma bodmi. Vzdialený koniec otvoreného objektu nedostane značku. `Blok` umiestni blok pri každej značke namiesto bodu. Odmietne dĺžku 0, dĺžku dlhšiu ako objekt a takú, ktorá by urobila viac ako 32767 značiek.

### BOUNDARY

Aliasy: `BO`, `BPOLY`. {{cmd:BOUNDARY}} vytvorí uzavretú lomenú čiaru okolo oblasti, v ktorej je bod, ktorý zvolíte, z akýchkoľvek čiar, oblúkov, kružníc, lomených čiar a kriviek, ktoré ju ohraničujú na obrazovke. Kúsky ležiace na oblúku alebo kružnici sa vrátia ako segmenty oblúka; kúsky elíps a splinov sa vrátia ako krátke rovné segmenty. Pri zapnutých `Ostrovy` (štartovacie nastavenie) dostane aj každá uzavretá oblasť vnútri vlastnú lomenú čiaru. Ďalej zadávajte body; Enter skončí. Objekty, ktoré oblasť ohraničujú, zostanú, ako sú. Ak žiadna uzavretá oblasť neobsahuje bod, oznámi to.

### BLEND

{{cmd:BLEND}} nakreslí spline medzi koncami dvoch otvorených kriviek. Každú krivku zvoľte blízko konca, ktorý sa má spojiť. `CONtinuity` vyberie `Tangent` (spline odchádza aj prichádza pozdĺž oboch kriviek) alebo `Smooth` (navyše sa ohýba tak, ako sa ohýbajú na koncoch); voľba sa zachová pre reláciu. Obe krivky sa nemenia. Odmietne uzavreté objekty a dva konce, ktoré sa už stretávajú.

### REGION

Alias: `REG`. {{cmd:REGION}} premení uzavreté objekty na regióny: ploché oblasti, ktoré možno spájať, rezať a merať. Vyberte kružnice, uzavreté lomené čiary, uzavreté elipsy alebo uzavreté spliny, alebo čiary, oblúky a otvorené lomené čiary, ktoré uzavrú slučku koniec na koniec; každá slučka sa stane jedným regiónom a nahradí objekty, z ktorých vznikla. Oblúky zostanú oblúkmi; elipsy a spliny sa stanú krátkymi rovnými segmentmi. Čo nie je uzavreté a neuzavrie slučku, zostane, ako je, a oznámi sa, koľko takých je. Vo výkrese je región jedna alebo viac uzavretých lomených čiar držaných pohromade ako nepomenovaná skupina, takže kliknutie vyberie celý región a kópia je región sám osebe; ostatné programy, ktoré otvoria súbor, uvidia uzavreté lomené čiary.

Keď sú vo výkrese regióny, {{cmd:UNION}}, {{cmd:SUBTRACT}} a {{cmd:INTERSECT}} na karte 2D pracujú s regiónmi: `UNION` spojí vybrané regióny do jedného (regióny, ktoré sú od seba, sa stanú jedným regiónom s viacerými obrysmi), `SUBTRACT` sa opýta na regióny, od ktorých sa odčítava, a potom na tie, ktoré sa odoberú (diera zostane súčasťou regiónu), `INTERSECT` ponechá oblasť, ktorú všetky majú spoločnú. Každý oznámi plochu výsledku a je jeden krok späť. Odmietnu, keď by nič nezostalo alebo keď nie je nič spoločné. Na karte 3D a vo výkrese bez regiónov fungujú rovnaké príkazy na telesách ako predtým.

## Úpravy

Aliasy: `MT`, `T`; alebo {{ui:Paragraph}} na paneli nástrojov. Odsek textu, ktorý sa zalamuje do šírky, píše sa na mieste.

- `Zadajte prvý rohový bod`
- `Zadajte opačný rohový bod [Výška (H)/Zarovnanie (J)/Riadkovanie (L)/Otočenie (R)/Šírka (W)]`: šírka medzi dvoma rohmi je miesto, kde sa text zalamuje. `H` sa opýta `Zadajte výšku`, `J` `Zadajte zarovnanie [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Zadajte faktor riadkovania (0,25 až 4)`, `R` `Zadajte uhol otočenia`, `W` `Zadajte šírku (0 pre bez zalamovania)` a preskočí druhý roh.
- Potom sa na výkrese otvorí políčko: píšte, {{key:Enter}} pre nový odsek, {{key:Mod+Enter}} alebo kliknutie mimo políčka dokončí, {{key:Esc}} zruší. Jeho lišta nastavuje výšku, riadkovanie, šírku a zarovnanie. Pozrite si [Pridanie textu a popisiek](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliasy: `ED`, `DDEDIT`; alebo dvojklik na text. `Vyberte text na úpravu`, opakovane až do {{key:Enter}}: každý sa otvorí v tom istom políčku. Spustený na vybranom alebo dvojkliknutom texte upraví iba ten a skončí.

### ERASE

Aliasy: `E`, `DELETE`; alebo stlačte {{key:Delete}} pri vybraných objektoch.

- `Vyberte objekty` (preskočí sa, ak sú objekty už vybraté)

### MOVE

Aliasy: `M`.

- `Vyberte objekty`
- `Zadajte základný bod [Posun (D)]`, `Zadajte druhý bod`
- `D`: `Zadajte posun`, zadaný ako `dx,dy`.

### COPY

Aliasy: `CO`, `CP`. Kopíruje toľkokrát, koľkokrát zadáte body.

`Pole` pri výzve na druhý bod urobí riadok naraz: zadajte počet položiek (pôvodný sa počíta ako jeden), potom bod, kde ide prvá kópia; ostatné nasledujú s rovnakým rozstupom. `Prispôsobiť (F)` namiesto toho urobí tento bod miestom poslednej kópie, pričom ostatné sú rovnomerne rozložené medzi nimi.

- `Vyberte objekty`
- `Zadajte základný bod [Posun (D)]`
- `Zadajte druhý bod [Späť (U)]`, opakovane až do Enter. `U` vráti späť poslednú kópiu.

### ROTATE

Aliasy: `RO`.

- `Vyberte objekty`, `Zadajte základný bod`
- `Zadajte uhol otočenia <posledný uhol>`: stupne, kladné proti smeru hodinových ručičiek; alebo kliknite na bod, aby sa otočilo smerom k nemu.

### SCALE

Aliasy: `SC`.

- `Vyberte objekty`, `Zadajte základný bod`
- `Zadajte faktor mierky`: napíšte faktor, napríklad `0.5` alebo `2`. Kliknutý bod dá za faktor svoju vzdialenosť od základného bodu.

### MIRROR

Aliasy: `MI`.

- `Vyberte objekty`
- `Zadajte prvý bod zrkadlovej čiary`, `Zadajte druhý bod zrkadlovej čiary`
- `Vymazať zdrojové objekty? [Áno (Y)/Nie] <N>`

### ALIGN

Aliasy: `AL`; alebo {{ui:Modify}} › {{ui:More}} › {{ui:Align}}.

- `Vyberte objekty`
- `Zadajte prvý zdrojový bod`, `Zadajte prvý cieľový bod`
- `Zadajte druhý zdrojový bod (Enter pre pokračovanie)`, `Zadajte druhý cieľový bod`
- `Zadajte tretí zdrojový bod (Enter pre pokračovanie)`, `Zadajte tretí cieľový bod`
- Pri dvoch pároch: `Zmeniť mierku objektov podľa zarovnávacích bodov? [Áno (Y)/Nie] <N>`

Pozrite si [Zarovnanie objektov](topic:modify-objects#align-objects).

### ALIGNTO

- `Vyberte objekty` (alebo výber), `Zarovnať [Vľavo (L)/Stred (C)/Vpravo (R)/Hore (T)/Stred výšky (M)/Dole (B)] <Vľavo>`, `K [Výberu (S)/Prvému (F)/Poslednému (L)/Bodu (P)] <Výber>`; `P` sa opýta na bod. Výber zostane.

### DISTRIBUTE

- `Vyberte objekty` (aspoň tri), `Rozmiestniť [Vodorovne (H)/Zvisle (V)] <Vodorovne>`, `Rozložiť rovnomerne [Stredy (C)/Medzery (G)] <Medzery>`. Dva vonkajšie zostanú; výber zostane.

### ALIGNPANEL

Aliasy: `ALP`; alebo {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}. Otvorí panel, ktorý spúšťa ALIGNTO a DISTRIBUTE kliknutiami.

### LASER

Aliasy: `LASERCUT`; alebo {{ui:View}} › {{ui:More}} › {{ui:Laser…}}. Otvorí panel Laser nad výkresom: čo robí každá hladina (rez, ryhovanie, gravírovanie, výplň, obrázok), náhľad, G-kód GRBL na uloženie a rámovanie a odosielanie cez Web Serial. Pozrite si [Odoslanie výkresu na laser](topic:laser-cutting).

### STRETCH

Aliasy: `S`; alebo {{ui:Stretch}}. `Vyberte objekty na natiahnutie`: ťahajte okná kríženia (alebo napíšte `C`) cez konce, aby ste presunuli. `Zadajte základný bod [Posun (D)]`, `Zadajte druhý bod`. Body vnútri okien sa presunú: konce čiar, vrcholy lomených čiar (segmenty oblúka si zachovajú výšku), body kót; kružnice, elipsy, text, body a bloky sa presunú celé, keď je ich stred alebo vkladací bod vnútri. Výber urobený pred príkazom zachová okná kríženia (a laso), ktorými vznikol, takže natiahnu rovnako. Bez okna sa objekty presunú celé.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliasy: `AR`; alebo {{ui:Array}}. `Vyberte objekty`, potom `Zadajte typ poľa [Obdĺžnikové (R)/Polárne (PO)] <Obdĺžnikové>` (len ARRAY).

- Obdĺžnikové začína na 4 stĺpcoch × 3 riadkoch, rozstup 1,5-násobok veľkosti objektov, zobrazené ako náhľad. `Zadajte možnosť [Počet (COU)/Rozstup (S)/Stĺpce (COL)/Riadky (R)/Ukončiť (X)] <X>`: `COU` sa opýta na stĺpce a riadky, `S` na vzdialenosti medzi stĺpcami a medzi riadkami (záporná ide doľava alebo nadol), `COL` a `R` každý jeden smer.
- Polárne sa opýta `Zadajte stredový bod poľa`, začína šiestimi položkami dokola, otočenými. `Zadajte možnosť [Položky (I)/Uhol výplne (F)/Otočiť položky (ROT)/Ukončiť (X)] <X>`: `I` položky, `F` uhol na vyplnenie (+ proti smeru hodinových ručičiek, − v smere), `ROT` Áno alebo Nie.
- {{key:Enter}} (Ukončiť) vytvorí kópie ako obyčajné objekty. Jeden krok späť.
- `AS` (Asociatívne) prepína medzi obyčajnými kópiami a poľom, ktoré zostane upraviteľné: jeden objekt, ktorý neskôr zmeníte pomocou {{cmd:ARRAYEDIT}}, jeho úchytmi alebo vo Vlastnostiach. Voľba sa zapamätá ({{cmd:ARRAYASSOCIATIVITY}}); štartuje na obyčajných kópiách.

### ARRAYPATH

Kópie pozdĺž krivky. `Vyberte objekty`, potom `Vyberte krivku dráhy`: čiara, oblúk, kružnica, elipsa, lomená čiara alebo spline (nie jeden z objektov, ktoré sa kopírujú). Dráha začína na svojom konci bližšom k objektom a prvá položka sú objekty tam, kde sú.

- `Zadajte možnosť [Metóda (M)/Položky (I)/Rozstup (SP)/Zarovnať (AL)/Asociatívne (AS)/Ukončiť (X)] <X>`, s náhľadom. `M`: `Rozdeliť` rozloží položky rovnomerne po celej dráhe, `Merať` položí jednu každých toľko pozdĺž nej. `I`: počet položiek (pri Merať znamená 0, koľko sa zmestí; číslo za koncom dráhy sa obmedzí na to, čo sa zmestí). `SP`: vzdialenosť medzi položkami pozdĺž dráhy (prepne na Merať). `AL`: Áno otočí každú položku, aby nasledovala dráhu, Nie ich nechá zvislo.
- `AS` ako v {{cmd:ARRAY}}. Keď je zapnuté, pole si ponechá vlastnú kópiu tvaru dráhy: neskoršia úprava krivky dráhy položky nepresunie.
- Odmietne dráhu, ktorá nie je krivka, a jednu položku.

### ARRAYEDIT

Upraví pole vytvorené s Asociatívne. `Vyberte pole` (alebo ho vyberte najprv). Vypíše, aké je pole teraz, potom sa pýta až do {{key:Enter}}:

- Obdĺžnikové: `COL` stĺpce a ich rozstup, `R` riadky a ich rozstup, `A` uhol, pod ktorým stĺpce bežia.
- Polárne: `I` položky, `F` uhol výplne, `ROT` otočiť položky Áno alebo Nie.
- Dráha: `M` Rozdeliť alebo Merať, `I` položky, `SP` rozstup, `AL` zarovnať s dráhou.
- `S` (Zdroj) otvorí objekty, ktoré pole opakuje, samostatne, ako editor blokov. Kreslite a upravujte tam; {{cmd:ARRAYCLOSE}} uloží alebo zahodí, a každá položka nasleduje.
- `REP` (REPlace): `Vyberte náhradné objekty`, `Zadajte základný bod náhradných objektov`, potom kliknite na položky, ktoré sa majú nahradiť, a {{key:Enter}}. Tieto položky namiesto toho zobrazia náhradu; náhradné objekty opustia výkres a žijú v poli. `RES` (RESet) zobrazí zdrojové objekty znova v každej položke.
- Každá zmena je jeden krok späť. Odmietne obyčajné kópie, obyčajný odkaz na blok a pole na zamknutej hladine.

Tie isté čísla sú vo Vlastnostiach v časti Pole a pole má úchyty: jeho základný bod ho presúva, úchyt pri druhej položke nastavuje rozstup, úchyt za poslednou položkou nastavuje počet (polárne: druhá položka nastavuje počet položiek, posledná uhol výplne). {{cmd:EXPLODE}} premení pole späť na obyčajné kópie.

### ARRAYCLOSE

Ukončí {{cmd:ARRAYEDIT}} Zdroj: `Uložiť zmeny zdrojových objektov poľa? [Uložiť/Zahodiť] <Uložiť>`. Ak nie sú otvorené žiadne zdrojové objekty poľa, oznámi to. {{cmd:BCLOSE}} robí to isté.

### ARRAYASSOCIATIVITY

`Zadajte novú hodnotu pre ARRAYASSOCIATIVITY (1 = polia zostanú upraviteľné, 0 = obyčajné kópie)`. Nastavuje, na čom začínajú {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR a {{cmd:ARRAYPATH}}; ich voľba `AS` mení to isté nastavenie. Zapamätá sa v tomto prehliadači.

### OFFSET

Aliasy: `O`. Čiary, oblúky, kružnice a lomené čiary.

Tam, kde sa lomená čiara posúva smerom von a jej rovné úseky sa na rohu rozídu, {{cmd:OFFSETGAPTYPE}} rozhoduje, ako sa medzera uzavrie.

- `Zadajte vzdialenosť odsadenia [Cez bod] <posledná vzdialenosť alebo Cez bod>`
- `Vyberte objekt na odsadenie`, potom `Zadajte bod na strane odsadenia` (alebo, s Cez bod, `Zadajte bod, ktorým čiara prechádza`), opakovane až do Enter.

### OFFSETGAPTYPE

- `Medzery rohov odsadenia: 0 predĺžiť, 1 zaoblenie, 2 skosenie`: ako {{cmd:OFFSET}} uzatvára medzery na vonkajších rohoch lomenej čiary. `0` predlžuje úseky, kým sa nestretnú (štartovacie nastavenie), `1` ich spojí oblúkom okolo pôvodného rohu, `2` rovným rezom. Vnútorné rohy a segmenty oblúka nie sú ovplyvnené. Zachované pre túto reláciu.

### EXTRIM

{{cmd:EXTRIM}} orezáva všetko na jednej strane hrany. Vyberte hranu rezu (čiaru, oblúk, kružnicu, lomenú čiaru, elipsu, spline alebo konštrukčnú čiaru), potom bod na strane, ktorú chcete vyčistiť: každá čiara, oblúk, kružnica, lomená čiara a konštrukčná čiara, ktorá hranu pretína, stratí svoju časť na tej strane, kde začína na hrane. Počas výberu strany časti, ktoré by zanikli, nasledujú ukazovateľ. Pri uzavretej hrane sú strany vnútri a vonku. Objekty, ktoré sa hrany iba dotýkajú, a text, šrafovania, spliny a elipsy, ktoré ju pretínajú, zostanú, ako sú. Jeden krok späť.

### TRIMEXTENDMODE

- `Zadajte novú hodnotu pre TRIMEXTENDMODE (1 Rýchly, 0 Štandardný)`: ako začínajú {{cmd:TRIM}} a {{cmd:EXTEND}}. `1` Rýchly: každý objekt je hrana rezu alebo hranica. `0` Štandardný: najprv sa pýtajú na hrany. Tiež `(setvar "TRIMEXTENDMODE" 0)` v LISPe.

### TRIM

Aliasy: `TR`. Najprv vypíše `Aktuálne nastavenia: Rýchly režim (TRIMEXTENDMODE 1), hrany: Bez predĺženia, ťahanie kreslí cestu`. V rýchlom režime je každý viditeľný objekt hranou rezu a objekt, ktorý nič nepretína, sa zmaže; v štandardnom režime sa najprv pýta `Vyberte hrany rezu (Enter = každý objekt)` a reže iba na nich.

- `Vyberte objekt na orezanie alebo ho Shift-výberom predĺžte [Hrany rezu (T)/Ohrada (F)/Prekríženie (C)/Režim (O)/Hrana (E)/Zmazať (R)/Späť (U)]`, opakovane: kliknite na kúsok, ktorý sa má odstrániť (počas pokoja ukazovateľa na ňom je sivý a prerušovaný), potiahnite cestu cez viacero kúskov (všetky idú v jednom kroku), alebo kliknite na dva prázdne miesta pre ohradu medzi nimi. {{key:Shift}} namiesto toho predlžuje. `T` vyberá hrany rezu (štandardný režim), `F` pýta body ohrady, `C` dva rohy okna (kúsky čiastočne vnútri pôjdu), `O` sa pýta `Zadajte možnosť režimu orezania [Rýchly/Štandardný]`, `E` sa pýta `Zadajte režim predĺženia implicitnej hrany [Predĺžiť/Bez predĺženia]` (EDGEMODE), `R` zmaže objekty, ktoré vyberiete, `U` vráti späť posledný výber alebo ťah. Enter skončí. Pozrite si [Orezanie a predĺženie](topic:trim-and-extend).

- Kliknutie na šrafovanie ho orezáva: hrany rezu rozdelia šrafovanú oblasť a kúsok, na ktorý ste klikli, sa odoberie (nezostane po ňom žiadny nakreslený obrys). Šrafovanie si ponechá svoj vzor alebo prechod; šrafovanie, ktoré bolo prepojené so svojou hranicou, sa potom už neprepája, lebo ju už nevypĺňa. Oznámi to, keď žiadna hrana rezu šrafovanie tam nerozdelí, keď je kliknutie mimo šrafovania a keď by nič nezostalo (použite {{cmd:ERASE}}). Ťahaná cesta alebo ohrada šrafovanie neorezáva.

### EXTEND

Aliasy: `EX`. To isté ako TRIM naopak: `Vyberte objekt na predĺženie alebo ho Shift-výberom orezte [Hraničné hrany (B)/Ohrada (F)/Prekríženie (C)/Režim (O)/Hrana (E)/Späť (U)]`. Kliknutie predĺži koniec najbližší ku kliknutiu k ďalšej hranici; ťahaná cesta alebo ohrada predĺži každý objekt, ktorý pretína; {{key:Shift}} orezáva. `B` vyberá hraničné hrany (štandardný režim). Režim a Hrana sú spoločné s TRIM.

### LINKVIEWS

Aliasy: `SYNCVIEWS`; alebo {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, alebo ikona prepojenia na kartách výkresu. `Prepojiť pohľady tabúľ [ON/OFF]` (Enter prepne na druhý stav): keď je zapnuté, posun alebo zoom v aktívnej tabuli posunie každú tablu, ktorá zobrazuje rovnaký druh priestoru. Pozrite si [Rozdelenie obrazovky](topic:split-screen).

### OPENIN3D

Bez aliasov; alebo {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}}, kde 3D modelovacia aplikácia preberá odovzdaný výkres. Otvorí ho tam na novej karte ako DWG (nič sa nenahráva). Ak prehliadač kartu zablokuje, oznámi to.

### LASSOMODE

`Zadajte novú hodnotu pre LASSOMODE (1 = laso, 0 = obdĺžnik)`: čo kreslí stlačenie a ťahanie na prázdnom mieste. Rovnaké ako Nastavenia › CadCraft › Ťahanie na výber. Pozrite si [Výber lasom](topic:lasso-selection).

### FILLET

Aliasy: `F`. Čiary, oblúky, kružnice a lomené čiary. Najprv vypíše `Aktuálne nastavenia: Režim = TRIM, Polomer = 0`.

- `Vyberte prvý objekt [Späť (U)/Lomená čiara (P)/Polomer (R)/Orezať (T)/Viac (M)]`
  - `R` sa opýta `Zadajte polomer zaoblenia <posledný>`. `T` sa opýta `Zadajte možnosť režimu orezania [Orezať/Bez orezania]`: pri Bez orezania objekty zostanú, ako sú, a pridá sa len oblúk.
  - `M` nechá príkaz bežať pre ďalšie rohy až do {{key:Enter}}; `U` vráti späť posledný roh bez opustenia príkazu.
  - `P` sa opýta `Vyberte 2D lomenú čiaru [Polomer]` a zaokrúhli každý roh, kde sa stretávajú dva rovné úseky. Zaoblenia, ktoré už má, sa nahradia novým polomerom; polomer 0 ich odstráni. Rohy, ktorých strany sú pre polomer príliš krátke, zostanú a sú započítané.
- `Vyberte druhý objekt alebo ho Shift-výberom použite na roh [Polomer (R)]`. Podržte {{key:Shift}} pri kliknutí na ostrý roh, bez ohľadu na polomer.

Kliknite na každý objekt na časti, ktorú chcete zachovať. Dve čiary, ktoré sa nestretajú, sa predĺžia. Dve rovnobežné čiary dostanú polkruh cez medzeru, na konci prvej čiary najbližšie k vášmu kliknutiu. Kružnica sa nikdy nereže. Dva susedné segmenty tej istej lomenej čiary dostanú oblúk vnútri lomenej čiary; lomená čiara a iný objekt fungujú, keď rez pristane na prvom alebo poslednom segmente lomenej čiary.

### CHAMFER

Aliasy: `CHA`. Čiary a rovné segmenty lomených čiar. Najprv vypíše aktuálne vzdialenosti (alebo dĺžku a uhol).

- `Vyberte prvú čiaru [Späť (U)/Lomená čiara (P)/Vzdialenosť (D)/Uhol (A)/Orezať (T)/Metóda (E)/Viac (M)]`
  - `D` sa opýta `Zadajte prvú vzdialenosť skosenia <posledná>` a `Zadajte druhú vzdialenosť skosenia <prvá>`: prvá sa odreže z prvej čiary, ktorú vyberiete, druhá z druhej.
  - `A` sa opýta `Zadajte dĺžku skosenia na prvej čiare` a `Zadajte uhol skosenia od prvej čiary`.
  - `E` (Metóda) vyberá, ktorá z dvoch sa použije pri ďalšom skosení. `T`, `M`, `U` a `P` fungujú ako v {{cmd:FILLET}}.
- `Vyberte druhú čiaru alebo ju Shift-výberom použite na roh [Vzdialenosť (D)/Uhol (A)/Metóda (E)]`. {{key:Shift}}+klik urobí ostrý roh.

Vzdialenosť dlhšia ako čiara sa odmietne (`Vzdialenosť je príliš veľká.`).

### BREAK a BREAKATPOINT

Aliasy: `BR`. `Vyberte objekt` (kde kliknete, je prvý bod), `Zadajte druhý bod prerušenia [Prvý bod (F)]`; `F` sa opýta `Zadajte prvý bod prerušenia` a `Zadajte druhý bod prerušenia`. Časť medzi nimi zmizne; na kružnici proti smeru hodinových ručičiek od prvého bodu. BREAKATPOINT sa opýta `Zadajte bod prerušenia` a rozdelí objekt na dve časti v tom bode (nie kružnicu).

### LENGTHEN

Aliasy: `LEN`. `Vyberte objekt na meranie [Zmena (DE)/Percento (P)/Celkom (T)/Dynamicky (DY)]`: výber vypíše `Aktuálna dĺžka` (a obsiahnutý uhol oblúka) a znova sa pýta. `DE` sa opýta `Zadajte zmenu dĺžky (záporná skracuje) [Uhol (A)]`, `P` `Zadajte percentuálnu dĺžku`, `T` `Zadajte celkovú dĺžku [Uhol (A)]`, `DY` ťahá. Potom `Vyberte objekt na zmenu [Späť (U)]`, opakovane: koniec najbližší ku kliknutiu sa presunie. Čiary, oblúky a otvorené lomené čiary.

### JOIN

Aliasy: `J`. `Vyberte objekty na spojenie`. Čiary, oblúky a otvorené lomené čiary, ktoré sa stretávajú koniec na koniec, sa stanú lomenými čiarami (uzavretými, keď sa reťaz uzavrie); čiary na jednej priamke sa stanú jednou čiarou; oblúky jednej kružnice sa stanú jedným oblúkom alebo kružnicou. História povie, koľko objektov sa spojilo a koľko nie.

### MATCHPROP

Aliasy: `MA`, `PAINTER`. `Vyberte zdrojový objekt`, potom `Vyberte cieľové objekty [Nastavenia (S)]` a {{key:Enter}}. Skopíruje hladinu a farbu a medzi objektmi rovnakého druhu výšku a šírku textu, veľkosti kót alebo vzor šrafovania. `S` sa opýta `Zapnúť alebo vypnúť vlastnosť [Farba (C)/Hladina (LA)/Text (T)/Kóta (D)/Šrafovanie (H)]`, opakovane až do {{key:Enter}}; voľba sa zapamätá pre reláciu.

### EXPLODE

Aliasy: `X`. Lomené čiary sa stanú čiarami a oblúkmi, odkazy na bloky sa stanú svojimi objektmi, kóty sa stanú čiarami, šípkami a textom. Pole, ktoré zostáva upraviteľné ({{cmd:ARRAYEDIT}}), sa stane obyčajnými kópiami svojich objektov.

- `Vyberte objekty`

### GROUP

Alias: `G`. {{cmd:GROUP}} dá vybraným objektom názov, ktorý majú spoločný. Vyberte objekty, potom napíšte názov (bez medzier; `?` vypíše skupiny; Enter vytvorí skupinu bez názvu) a pri pomenovanej skupine voliteľný popis. Odvtedy kliknutie na jeden z nich alebo okno, ktoré niektorý zachytí, vyberie všetky, takže sa presúvajú, kopírujú a mažú spoločne; každý objekt je stále samostatný objekt. Objekt môže byť v niekoľkých skupinách. Kópia celej skupiny je nová skupina bez názvu; kópia jedného člena samostatne sa pridá do skupiny. Skupiny patria do priestoru, v ktorom vznikli (model alebo list). Zachovajú sa, keď uložíte ako DWG alebo DXF a súbor znova otvoríte v CadCraft; súbory DXF 2000 nesú skupiny aj ako objekty skupín pre ostatné programy a skupiny vytvorené v inom programe sa prečítajú, keď sa otvorí DXF alebo DWG.

### UNGROUP

{{cmd:UNGROUP}} rozdelí skupiny: vyberte objekty zo skupín (každá skupina, v ktorej sú, sa rozdelí) alebo napíšte `Name` a názov skupiny. Objekty zostanú vo výkrese. Jeden krok späť vráti skupiny.

### GROUPEDIT

{{cmd:GROUPEDIT}} upraví jednu skupinu. Vyberte jeden z jej objektov, alebo `Name` a jej názov; skupina, ktorá je už vybraná, sa vezme taká, aká je. Potom: `Add` (Pridať) objekty (vyberané jeden po druhom, nie po skupinách), `Remove` (Odstrániť) objekty, `REName` (premenovať) skupinu, zmeniť jej `Description` (popis), alebo nastaviť `Selectable` (či kliknutie na jeden objekt vyberie celú skupinu). `eXit` alebo Enter skončí. Skupina bez objektov zanikne.

### PICKSTYLE

- `Výber skupiny: 0 kliknutie vyberie jeden objekt, 1 celú skupinu`: pri `1` (štartovacie nastavenie) kliknutie alebo okno na zgrupovanom objekte vyberie celú skupinu; pri `0` jednotlivé objekty, takže môžete upraviť jeden člen. Zachované pre túto reláciu.

## Schránka

Vlastná schránka CadCraftu: funguje v rámci výkresu, medzi výkresmi a medzi kartami CadCraftu v tomto prehliadači. Pozrite si [Kopírovanie, vloženie a duplikovanie](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, alebo {{ui:Copy}} v skupine {{ui:Edit}}. Skopíruje objekty do schránky spolu s blokmi a hladinami, ktoré používajú. Objekty zostanú vybraté.

- `Vyberte objekty na kopírovanie` (preskočí sa, ak sú objekty už vybraté)

### CUTCLIP

{{key:Mod+X}}, alebo {{ui:Cut}} v ponuke {{ui:More}}. Skopíruje objekty do schránky a potom ich zmaže (jeden krok späť).

- `Vyberte objekty na vystrihnutie` (preskočí sa, ak sú objekty už vybraté)

### COPYBASE

Skopíruje objekty do schránky so základným bodom, ktorý zvolíte; vloženie umiestni tento bod.

- `Zadajte základný bod`
- `Vyberte objekty na kopírovanie`

### PASTECLIP

{{key:Mod+V}}, alebo {{ui:Paste}} v skupine {{ui:Edit}}. Kópia nasleduje kurzor, visí z dolného ľavého rohu svojho rozsahu (alebo zo svojho stredu, alebo z bodu `COPYBASE`; pozrite si [Nastavenia CadCraftu](topic:settings)).

- `Zadajte vkladací bod`

Vložené objekty sú vybraté. Blok, ktorý už výkres má pod rovnakým názvom, si ponechá definíciu tohto výkresu.

Keď je oblasť skopírovaná v MarkupCraft novšia ako to, čo skopíroval CadCraft (a mladšia ako 6 hodín), {{key:Mod+V}} a `PASTECLIP` vložia namiesto toho túto oblasť: pozrite si `PASTEAREA`.

### PASTEAREA

Aliasy: `PAREA`. {{ui:Paste a copied area}} v ponuke {{ui:More}}. Vloží oblasť skopírovanú v MarkupCraft pomocou {{ui:Copy area}} ako obrázok v jej skutočnej veľkosti. Pozrite si [Obrázky vo výkrese](topic:pictures).

- `Zadajte ľavý dolný roh skopírovanej oblasti`
- `Zmeniť mierku jej veľkosti papiera o (100 pre list v mierke 1:100; Body: dva body na nej a ich skutočná vzdialenosť) [Body] <1>` (len keď list nemal mierku výkresu): číslo, {{key:Enter}} pre veľkosť papiera, alebo `P`, potom `Prvý bod na vloženej oblasti`, `Druhý bod na vloženej oblasti` a ich skutočná vzdialenosť.

### PASTEORIG

{{key:Mod+Shift+V}}, alebo {{ui:Paste in place}} v ponuke {{ui:More}}. Vloží na súradnice, z ktorých boli objekty skopírované. Nič sa nepýta.

### DUPLICATE

Aliasy: `DUP`. {{key:Mod+D}}, alebo {{ui:Duplicate and move}} v ponuke {{ui:More}}. Kópia objektov sa pohybuje so šípkou od miesta, kde je; {{key:Esc}} nenechá nič. Nepoužíva schránku.

- `Vyberte objekty na duplikovanie` (preskočí sa, ak sú objekty už vybraté)
- `Zadajte, kam kópia ide (Esc nenechá nič)`: kliknite, zadajte bod, `@dx,dy` (od miesta, kde bol ukazovateľ), alebo vzdialenosť smerom ku kurzoru.

### SELECT

Pýta `Vyberte objekty` (so všetkými možnosťami nižšie) a nechá vybrané to, čo ste zvolili, pre ďalší príkaz alebo pre `P` neskôr.

### QSELECT

Aliasy: `QS`. V prehliadači dialógové okno {{ui:Quick select}} (pozrite si [Výber objektov](topic:select-objects#select-by-a-rule-quick-select)). Bez neho sa v riadku príkazov pýta `Zadajte typ objektu`, `Zadajte vlastnosť`, `Zadajte operátor [=/<>/>/</*/Vybrať všetko] <=>` a `Zadajte hodnotu`. Zhody sa stanú výberom.

### SELECTSIMILAR

Aliasy: `SIM`. `Vyberte objekty [Nastavenia (SE)]` (alebo aktuálny výber): vyberie každý objekt rovnakého typu s rovnakou hladinou a farbou (a názvom bloku, vzorom šrafovania). `SE` sa opýta `Zapnúť alebo vypnúť vlastnosť [Hladina (LA)/Farba (CO)/Názov (N)/Vzor (PA)/Výška (HE)]`, opakovane až do {{key:Enter}}.

### FIND

Bez aliasov; alebo {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}. V prehliadači dialógové okno {{ui:Find and replace}} (pozrite si [Pridanie textu a popisiek](topic:text#find-and-replace-words)). Bez neho: `Zadajte text na hľadanie`, potom `Zadajte náhradný text (Enter: vybrať, čo sa našlo)`. Hľadá v texte, hodnotách atribútov a texte kót, na otvorenej karte alebo vo výbere.

### SELECTALL a DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) vyberie každý objekt, ktorý môžete upraviť na otvorenej karte. `DESELECT` (aliasy `AI_DESELECT`, `SELECTNONE`; alebo {{key:Esc}}) zruší výber.

## Kóty

### DIMLINEAR

Aliasy: `DLI`, `DIMLIN`. Vodorovná alebo zvislá vzdialenosť.

- `Zadajte prvý začiatok predlžovacej čiary [Vybrať objekt (S)]` (Enter alebo `S`: `Vyberte objekt na okótovanie`, potom kliknite na čiaru, oblúk, kružnicu alebo segment lomenej čiary)
- `Zadajte druhý začiatok predlžovacej čiary`
- `Zadajte umiestnenie kótovacej čiary [Text (T)/Vodorovná (H)/Zvislá (V)/Otočená (R)]`. `T` sa opýta na text (`<>` je nameraná hodnota), `H` a `V` pevne určia smer, `R` sa opýta `Zadajte uhol kótovacej čiary <0>`.

### DIMALIGNED

Aliasy: `DAL`, `DIMALI`. Skutočná vzdialenosť medzi dvoma bodmi.

- Začiatky ako v {{cmd:DIMLINEAR}}, potom `Zadajte umiestnenie kótovacej čiary [Text (T)]`.

### DIMANGULAR

Aliasy: `DAN`, `DIMANG`.

- `Vyberte oblúk, kružnicu alebo čiaru, alebo Enter pre vrchol`
- Oblúk: jeho uhol. Kružnica: `Zadajte druhý koncový bod uhla`. Čiara: `Vyberte druhú čiaru`. Enter: `Zadajte vrchol uhla`, `Zadajte prvý koncový bod uhla`, `Zadajte druhý koncový bod uhla`.
- `Zadajte umiestnenie kótovacej čiary [Text (T)]`: kliknite vnútri uhla, ktorý chcete merať.

### DIMRADIUS a DIMDIAMETER

Aliasy: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Vyberte oblúk alebo kružnicu`, potom `Zadajte umiestnenie kótovacej čiary [Text (T)]`.

### DIMCONTINUE

Aliasy: `DCO`, `DIMCONT`. Pokračuje od poslednej vytvorenej lineárnej alebo zarovnanej kóty (alebo sa pýta `Vyberte lineárnu alebo zarovnanú kótu`).

- `Zadajte druhý začiatok predlžovacej čiary [Späť (U)]`, opakovane až do Enter.

### DIMBASELINE

Aliasy: `DBA`, `DIMBASE`. Ako {{cmd:DIMCONTINUE}}, ale každá kóta začína od prvého začiatku a je naložená ďalej von.

### DIMORDINATE

Aliasy: `DOR`, `DIMORD`. `Zadajte umiestnenie prvku`, potom `Zadajte koncový bod vynášacej čiary [Xdatum/Ydatum/Text (T)]`. Zapíše, ako ďaleko je prvok od začiatku UCS pozdĺž X alebo pozdĺž Y, na vynášacej čiare: vynášacia čiara, ktorá ide väčšinou nahor alebo nadol, číta X, tá, ktorá ide do strany, číta Y; `Xdatum` a `Ydatum` určujú, ktoré. Najprv nastavte začiatok pomocou {{cmd:UCS}} (bez neho je to 0,0 výkresu). Úchyty presúvajú prvok, začiatok a koniec vynášacej čiary a hodnota nasleduje. V DWG a DXF sa uloží ako skutočná kóta súradnice. Odmietne koniec vynášacej čiary na samotnom prvku.

### DIMARC

Aliasy: `DAR`. `Vyberte oblúk alebo segment oblúka lomenej čiary`, potom `Zadajte umiestnenie kóty dĺžky oblúka [Text (T)]`. Meria pozdĺž oblúka (nie po tetive) a pred hodnotu zapíše symbol oblúka. Odmietne celú kružnicu, čiaru alebo rovný segment lomenej čiary. DWG ho uchová ako kótu dĺžky oblúka; DXF ho uchová ako uhlovú kótu s dĺžkou ako textom a CadCraft ho znova otvorí ako kótu dĺžky oblúka.

### DIMJOGGED

Aliasy: `DJO`, `JOG`. `Vyberte oblúk alebo kružnicu`, `Zadajte prepísanie umiestnenia stredu`, `Zadajte umiestnenie zalomenia`. Kóta polomeru pre krivku, ktorej stred je ďaleko alebo mimo listu: kótovacia čiara začína v bode, ktorý zadáte, namiesto stredu, so zalomením, a stále zapíše skutočný polomer. DWG ju uchová ako kótu polomeru so zalomením; DXF ju uchová ako kótu polomeru a CadCraft ju znova otvorí zalomenú.

### DIMJOGLINE

Aliasy: `DJL`. `Vyberte kótu na pridanie zalomenia [Odstrániť (R)]`, potom `Zadajte umiestnenie zalomenia (alebo stlačte Enter)`. Umiestni symbol zalomenia na čiaru lineárnej alebo zarovnanej kóty, aby sa ukázalo, že vzdialenosť nie je nakreslená v mierke; hodnota sa nemení. `Odstrániť` ho zloží. Odmietne iné druhy kót.

### QDIM

Bez aliasov. `Vyberte geometriu na okótovanie`, potom `Zadajte polohu kótovacej čiary [Spojite (C)/Odsadene (S)/Od základnej (B)/Súradnica (O)/Polomer (R)/Priemer (D)/Bod dátumu (P)]`. Okótuje viacero objektov naraz, od koncov čiar a segmentov lomených čiar, stredov kružníc a oblúkov, bodov a odkazov na bloky. Poloha nad alebo pod objektmi meria naprieč, poloha vedľa nich meria nahor. `Spojite` reťazí body, `Od základnej` meria všetky od prvého, `Odsadene` vnára dvojice od stredu smerom von, `Súradnica` dá každému bodu jeho vzdialenosť od dátumu (`datumPoint` vyberie nový), `Polomer` a `Priemer` okótujú každú kružnicu a oblúk, ktoré zvolíte. Režim sa zapamätá. Všetko, čo vytvorí, je jeden krok späť. Oznámi, keď je menej ako dva body, alebo keď nie sú žiadne oblúky či kružnice pre Polomer a Priemer.

### DIMBREAK

Aliasy: `DBREAK`. `Vyberte kóty na pridanie alebo odstránenie prerušení`, potom `Prerušiť, kde iné objekty pretínajú [Auto/Manual/Remove] <Auto>`. `Auto` nechá medzeru v kótovacej a predlžovacej čiare všade, kde ju iný objekt pretína, a tieto medzery znova vypočíta, keď sa tie objekty alebo kóta presunú. `Manual` (jedna kóta) sa opýta na dva body a nechá medzeru medzi nimi. `Remove` odstráni všetky medzery. Medzera je 1,5-násobok výšky textu kóty.

### DIMSPACE

Bez aliasov. `Vyberte základnú kótu`, `Vyberte kóty na rozmiestnenie`, `Zadajte hodnotu rozstupu alebo Auto <Auto>`. Posunie kótovacie čiary rovnobežných lineárnych a zarovnaných kót (alebo uhlových okolo toho istého vrcholu) tak, aby boli rovnako vzdialené, merané od základnej kóty, každá na strane, na ktorej je. `0` ich zarovná so základnou; `Auto` je dvojnásobok výšky textu základnej kóty. Kóty, ktoré nie sú rovnobežné so základnou, zostanú, ako sú.

### DIMINSPECT

Bez aliasov. `Vyberte kóty`, `Tvar rámčeka kontroly [Okrúhly (R)/Uhlový (A)/Žiadny (N)/odstrániť] <Okrúhly>`, `Zadajte štítok`, `Zadajte mieru kontroly <100%>`. Nakreslí rámček okolo hodnoty so štítkom pred ňou a mierou kontroly za ňou. `odstrániť` ho zloží. Text tolerancie zostáva pri hodnote.

### DIMOVERRIDE

Aliasy: `DOV`, `DIMOVER`. `Zadajte názov premennej kóty na prepísanie alebo Vymazať`, `Zadajte novú hodnotu pre …`, znova, až do Enter, potom `Vyberte kóty`. Mení tieto nastavenia iba na vybraných kótach; štýl kóty sa nemení. Berie premenné, ktoré sú číslo alebo prepínač (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Vymazať` vráti vybrané kóty na ich štýl. Odmietne názov, ktorý nie je takouto premennou, a hodnotu, ktorú nemôže prijať.

### DIMREASSOCIATE

Aliasy: `DRE`, `DIMREASSOC`. `Vyberte kóty`, potom pre každú jej začiatky predlžovacích čiar (`Zadajte prvý začiatok predlžovacej čiary na objekte`: prichytiť na koniec alebo stred čiary, roh lomenej čiary, stred; Enter ponechá ten bod voľný), alebo pri polomere, priemere, zalomenom polomere alebo dĺžke oblúka `Vyberte oblúk alebo kružnicu`. Kóta sa potom viaže na tieto objekty: keď sa presunú alebo zmenia veľkosť, nasleduje ich v tom istom kroku späť a znova sa zmeria. Presunutie viazaného bodu rukou alebo zmazanie objektu toto viazanie ukončí. Viazanie sa ukladá v DWG a DXF 2000 ako vlastné údaje CadCraftu; ostatné programy vidia obyčajnú kótu.

### DIMDISASSOCIATE

Aliasy: `DDA`, `DIMDISASSOC`. `Vyberte kóty`. Uvoľní ich od objektov, ku ktorým sú viazané; nič sa nepresunie.

### CENTERMARK

Aliasy: `CM`, `DIMCENTER`, `DCE`. `Vyberte kružnicu alebo oblúk na pridanie stredovej značky`, znova až do Enter. Nakreslí kríž v strede a štyri stredové čiary kúsok za krivku (typ čiary CENTER), ako obyčajné čiary na aktuálnej hladine; veľkosť sa odvodí z veľkosti šípky a celkovej mierky aktuálnych nastavení kóty a otočí sa s UCS. Nenasledujú kružnicu, ak sa pohne.

### CENTERLINE

Aliasy: `CL`. `Vyberte prvú čiaru`, `Vyberte druhú čiaru`. Nakreslí čiaru uprostred medzi dvoma čiarami (pozdĺž osy, keď sa stretnú), o niečo dlhšiu, ako sú, v type čiary CENTER. Obyčajná čiara: nenasleduje tie dve čiary.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Bez aliasov. Každá sa pýta `Zadajte novú hodnotu pre … <aktuálna>` a nastaví túto veľkosť pre **nové** kóty: celkovú mierku, výšku textu, veľkosť šípky, počet desatinných miest (až 8), medzeru okolo textu, predĺženie za kótovaciu čiaru, odsadenie od začiatku. Pozrite si [Nastavenie veľkostí kót](topic:dimension-settings).

### DIMLUNIT

Nastavenie kóty: formát iba nových kót (1 vedecký, 2 desatinný, 3 inžiniersky, 4 architektonický, 5 zlomkový).

### DIMSTYLE a -DIMSTYLE

Aliasy: `DST`, `DDIM`, `D`. Správca štýlov kót: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}. `-DIMSTYLE` v riadku príkazov: `Štýl kóty [Obnoviť/Uložiť/Zmazať/Použiť/Porovnať/Premenovať (N)/Zoznam]`. Pozrite si [Nastavenie veľkostí kót](topic:dimension-settings#named-dimension-styles).

### DIMEDIT a DIMTEDIT

`DIMEDIT` (`DED`): `Úprava kóty [Začiatok (H)/Nový (N)/Otočiť (R)/Šikmo (O)] <Začiatok>`, potom kóty (alebo tie, ktoré sú už vybraté). Nový sa opýta na text (`<>` = nameranie); Otočiť na uhol (0 vráti text späť); Šikmo na uhol predlžovacích čiar od osi X (Enter = žiadny; iba lineárne a zarovnané kóty). `DIMTEDIT` (`DIMTED`): `Text kóty [Vľavo (L)/Vpravo (R)/Stred (C)/Začiatok (H)/Uhol (A)] <Stred>`. Pozrite si [Nastavenie veľkostí kót](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliasy: `DTU`. `Jednotky v texte nových kót [Jednotky výkresu/mm/cm/m/km]`, alebo pri vybraných kótach `Jednotky v texte vybraných kót`. Zapíše nameranú dĺžku v tej jednotke s jednotkou za ňou (DIMLFAC a prípona DIMPOST); `D` sa vráti na jednotky výkresu. Pozrite si [Kóty v mm, cm, m alebo km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliasy: `RC`. Vypíše `Dĺžka oblúka: … Typ: …`, potom `Zadajte prvý bod [Dĺžka oblúka (A)/Objekt (O)/Obdĺžnik (R)/Mnohouholník (P)/Voľný tvar (F)]`. Obdĺžnik sa pýta `Zadajte opačný roh`; Mnohouholník `Zadajte ďalší bod (Enter uzavrie oblak) [Späť (U)]`; Voľný tvar nasleduje ukazovateľ, kým nekliknete alebo nestlačíte {{key:Enter}}; `O` sa pýta `Vyberte objekt` a `Obrátiť smer? [Áno (Y)/Nie] <N>` a premení objekt na oblak. `A` sa pýta `Zadajte dĺžku každého oblúka`. `R`, `P` a `F` vyberajú typ pre ďalší oblak. Výsledok je uzavretá lomená čiara z oblúkov.

### MLEADER

Aliasy: `MLD`; alebo {{ui:Leader}}. `Zadajte umiestnenie hrotu vynášacej čiary [Veľkosť šípky/Vzdialenosť pristátia/Blok (B)]`, `Zadajte umiestnenie pristátia vynášacej čiary`, potom text v políčku na mieste (alebo bez neho `Zadajte text (prázdny riadok ukončí)`). `Blok` sa najprv opýta na názov bloku a viacnásobná vynášacia čiara zobrazí tento blok namiesto textu. Ďalšie vynášacie čiary: {{cmd:MLEADEREDIT}}. Uloží sa ako skutočná viacnásobná vynášacia čiara v DWG; DXF uchová čiary, hrot a text, ktoré nakreslí.

### MLEADEREDIT

Aliasy: `MLE`. `Vyberte viacnásobnú vynášaciu čiaru`, potom `Zadajte umiestnenie hrotu vynášacej čiary [Odstrániť vynášacie čiary (R)/Obsah bloku (B)/Obsah textu (T)]`: každý bod pridá vynášaciu čiaru z nového hrotu k tomu istému pristátiu, až do Enter. `Odstrániť vynášacie čiary` potom zoberie vynášaciu čiaru, na ktorú kliknete (viacnásobná vynášacia čiara si ponechá aspoň jednu). `Obsah bloku` sa opýta na názov bloku a zobrazí tento blok namiesto textu (jeho atribúty sa pýtajú); `Obsah textu` vráti text späť. Každá vynášacia čiara má vlastný úchyt. DWG ponechá každú vynášaciu čiaru a blok v jednej viacnásobnej vynášacej čiare.

### MLEADERALIGN

Aliasy: `MLA`. `Vyberte viacnásobné vynášacie čiary`, potom `Vyberte viacnásobnú vynášaciu čiaru, na ktorú sa zarovnať [Rozmiestniť/Rozstup/Použiť aktuálny rozstup]` a `Zadajte smer`. Presunie pristátia ostatných viacnásobných vynášacích čiar (a ich text alebo blok) na čiaru prechádzajúcu pristátím vybranej čiary v tom smere; hroty zostanú tam, kam mieria. `Rozstup` im tiež nastaví rovnaký odstup; `Rozmiestniť` sa opýta na dva body a rovnomerne ich medzi nimi rozloží. Potrebné sú aspoň dve viacnásobné vynášacie čiary.

### MLEADERCOLLECT

Aliasy: `MLC`. `Vyberte viacnásobné vynášacie čiary`, potom `Zadajte umiestnenie spojenej viacnásobnej vynášacej čiary [Zvisle (V)/Vodorovne (H)]` (Enter ponechá miesto prvej). Spojí viacero do jednej: obsah blokov ide do nového bloku, ktorý drží každý blok vedľa seba alebo jeden pod druhým; obsah textu sa stane jednou poznámkou s riadkom pre každý. Prvá viacnásobná vynášacia čiara si ponechá svoje vynášacie čiary; ostatné sa odstránia. Odmietne zmes textového a blokového obsahu.

### TABLE

Aliasy: `TB`; alebo {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}. Vytvorí tabuľku: jeden objekt, ktorý presúvate, kopírujete, otáčate, meníte mierku a tlačíte ako ktorýkoľvek iný, s bunkami uloženými ako údaje.

- `Počet riadkov údajov alebo [Vložiť (P)/Súbor (F)/Štýl (S)] <3>`, potom `Počet stĺpcov <3>`, `Výška textu` a `Ľavý horný roh tabuľky`. Tabuľka dostane riadok nadpisu (jedna zlúčená bunka) a riadok hlavičky nad riadkami údajov.
- `P`: tabuľka z buniek tabuľkového procesora na schránke (text s tabulátorom medzi bunkami). Stlačenie {{key:Ctrl+V}} s takými bunkami na schránke urobí to isté, pokiaľ nie je novšia kópia CadCraftu (alebo CadCraft nevie rozlíšiť: vtedy vloží vlastnú kópiu a oznámi to). `F`: tabuľka zo súboru `.csv` alebo súboru oddeleného tabulátormi. Prvý riadok sa stane riadkom hlavičky; šírky stĺpcov sa prispôsobia textu.
- `S`: zvoľte štýl tabuľky pre túto tabuľku (pozrite si {{cmd:TABLESTYLE}}).
- Odmietne počet riadkov alebo stĺpcov, ktorý nie je celé číslo, a viac buniek, ako tabuľka pojme (2 000 riadkov, 200 stĺpcov, 40 000 buniek).
- {{cmd:EXPLODE}} premení tabuľku na čiary a text. Uložená ako DWG je tabuľka skutočný objekt tabuľky, ktorý môžu upravovať iné programy; uložená ako DXF je blok, ktorý ju kreslí, a CadCraft ju znova otvorí ako tabuľku.

### TABLEDIT

Aliasy: `TABLEEDIT`, `TABEDIT`; alebo dvojklik na bunku. Upravuje tabuľku.

- `Vyberte bunku na písanie (Enter pre dokončenie) alebo [Riadok (R)/Stĺpec (C)/Veľkosť (S)/Zlúčiť (M)/Zrušiť zlúčenie (U)/Zarovnanie (A)/Výška (H)/Druh (K)/Vymazať (CL)]`. Kliknite na bunku, alebo ak je tabuľka vybratá, napíšte jej názov (`B3`: stĺpec B, riadok 3; riadok nadpisu je riadok 1). V prehliadači sa nad bunkou otvorí políčko: {{key:Enter}} ponechá text, {{key:Tab}} ide na ďalšiu bunku, {{key:Alt+Enter}} začne nový riadok, {{key:Esc}} nechá bunku, ako bola.
- Text, ktorý sa začína `=`, je vzorec: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, s `+ - * / ^`, zátvorkami a funkciami ako `sqrt` a `round`. Bunka zobrazí hodnotu; vzorec, ktorý pomenúva svoju vlastnú bunku, bunku mimo tabuľky alebo bunku bez čísla, zobrazí `####` a riadok príkazov povie prečo.
- `R` / `C`: `Vložiť` alebo `Zmazať` riadky alebo stĺpce pri zvolenej bunke (koľko a nad alebo pod, vľavo alebo vpravo). Vzorce nasledujú bunky, ktoré pomenúvajú.
- `S`: šírka stĺpca a výška riadka. Riadok nikdy nie je nižší, ako potrebuje jeho text. Vybraná tabuľka má navyše úchyt na hrane každého stĺpca a každého riadka.
- `M`: zlúčenie od jednej zvolenej bunky k druhej; `U`: zrušenie zlúčenia. `A`: zarovnanie (`TL` vľavo hore … `MC` stred … `BR` vpravo dole). `H`: vlastná výška textu tejto bunky (0 = štýl). `K`: urobí z riadka nadpis, hlavičku alebo riadok údajov. `CL`: vyprázdni bunku.
- Odmietne tabuľku na zamknutej hladine, zmazanie každého riadka alebo stĺpca a zlúčenie, ktoré by rozrezalo inú zlúčenú bunku na dve.

### TABLESTYLE

Aliasy: `TS`. Vypíše štýly tabuliek s počtom tabuliek, ktoré každý používa, potom `Štýl tabuľky: [Nový/Nastaviť/Upraviť/Zmazať/Použiť]`.

- Štýl drží výšku textu a zarovnanie riadkov nadpisu, hlavičky a údajov, okraj bunky a to, ktoré okraje sa kreslia (vonkajšie, medzi riadkami, medzi stĺpcami).
- `N` vytvorí štýl z aktuálneho a urobí ho aktuálnym; `S` nastaví aktuálny štýl (nové tabuľky ho prevezmú); `E` upraví jeden: tabuľky, ktoré ho používajú, sa prekreslia; `A` dá vybraným tabuľkám aktuálny štýl; `D` zmaže jeden (nie Standard, nie aktuálny; tabuľky, ktoré ho používali, si zachovajú svoj vzhľad).
- Štýly sa ukladajú s výkresom (DWG aj DXF).

### TABLEEXPORT

Uloží to, čo tabuľka zobrazuje, ako súbor CSV (vzorec ako jeho hodnotu). `Vyberte tabuľku`, alebo ju vyberte najprv. Textové bunky, ktoré sa začínajú `=`, `+`, `-` alebo `@`, dostanú úvodné `'`, aby ich tabuľkový procesor nespustil.

### TABLEPASTE

Aliasy: `PASTETABLE`. Vytvorí tabuľku z buniek tabuľkového procesora na schránke, potom sa opýta na jej ľavý horný roh. Rovnaké ako {{cmd:TABLE}} › `Vložiť`.

### DATALINK

Aliasy: `DL`. `Dátové prepojenie: [Nové/Zoznam/Odstrániť] <Nové>`. `N` sa opýta na súbor CSV, umiestni tabuľku z neho a zapamätá si názov súboru; `L` vypíše prepojenia s ich súborom, veľkosťou, časom čítania a počtom tabuliek, ktoré ho používajú; `R` odstráni prepojenie (jeho tabuľky ostanú ako obyčajné tabuľky).

### DATALINKUPDATE

Aliasy: `DLU`. Znova prečíta súbor dátového prepojenia a znova naplní tabuľky, ktoré sú s ním prepojené (riadky a stĺpce sa pridajú alebo odstránia, aby sedeli). Prehliadač nevie otvoriť súbor sám, takže vás požiada, aby ste súbor vybrali znova. Pri viacerých prepojeniach sa opýta, ktoré.

### FIELD

Vloží pole do výkresu: text, ktorý sa sám vypočíta. `Pole: [Dátum (D)/Názov súboru (F)/List (S)/Vlastnosť (P)/Objekt (O)/Výraz (E)/Kód (C)] <Dátum>`:

- `D`: teraz, alebo uložený, vytvorený či vytlačený dátum, a formát (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: názov súboru, s príponou alebo bez nej. `S`: číslo listu, jeho názov alebo koľko listov je. `P`: vlastnosť výkresu podľa názvu (pozrite si {{cmd:DWGPROPS}}). `O`: vyberte objekt, potom, čo čítať (plocha, dĺžka, obvod, polomer, priemer, hladina, názov, x, y, text, otočenie, farba) a desatinné miesta. `E`: vzorec. `C`: text s kódmi napísanými tak, ako sú, napríklad `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Potom `Vyberte text, bunku tabuľky alebo blok s atribútmi, do ktorého sa to vloží (Enter: nový text)`: vybraný text dostane pole pridané za to, čo obsahuje; bunka tabuľky rovnako; odkaz na blok sa opýta, ktorý atribút; {{key:Enter}} sa opýta na výšku a bod pre nový text.
- Na obrazovke má pole svetlošedé pozadie; výtlačok a PDF ho nikdy nemajú. Písanie cez text poľa rukou pole ukončí. Pole, ktoré sa nedá vypočítať, zobrazí `####`.
- Pole objektu nájde svoj objekt podľa kľúča, ktorý CadCraft drží na objektoch (Nastavenia › CadCraft › Súbory vhodné na zlučovanie); keď sú kľúče vypnuté, odmietne.

### UPDATEFIELD

Aliasy: `UPDATEFIELDS`. `Vyberte objekty, ktorých polia sa majú aktualizovať (Enter: každé pole) alebo [Nastavenia (S)]`. `S` nastaví, kedy sa polia aktualizujú samy: napíšte písmená `O` otvoriť, `S` uložiť, `P` vytlačiť, `R` regenerovať (všetky štyri na začiatku), alebo `NONE`.

### DWGPROPS

Aliasy: `DRAWINGPROPS`. Vypíše vlastnosti výkresu, potom `Zmeniť: [Názov/Predmet/Autor/Spoločnosť/Kľúčové slová/Komentáre (M)/Vlastné (U)/Odstrániť (R)/Ukončiť (X)]`. Prvých šesť sú tie, ktoré zobrazuje panel {{ui:Drawing details}}; `U` pridá vaše vlastné meno a hodnotu, `R` jednu odstráni. Polia ich čítajú (`%<prop:title>%`, `%<prop:Client>%`) a nasledujú hneď. Odmietne vlastný názov, ktorý je jedným z vstavaných, alebo ktorý obsahuje `%`, `<`, `>`, úvodzovku alebo spätné lomítko.

## Parametrické

Pozrite si [Viazanie výkresu](topic:constraints) a [Použitie parametrov a rovníc](topic:parameters). Väzby fungujú na karte {{ui:Model}}.

### GEOMCONSTRAINT a príkazy GC

Alias `GCON`: `Zadajte typ väzby [Vodorovná (H)/Zvislá (V)/Kolmá (P)/Rovnobežná (AR)/Dotyčnica (T)/Spoločný bod (CO)/Súbežná (CON)/Kolineárna (COL)/Symetrická (S)/Rovnaká (E)/Pevná (F)] <Vodorovná>`, potom výzvy tohto príkazu.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Vyberte objekt [2 body] <2 body>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Vyberte prvý objekt`, `Vyberte druhý objekt` (druhý sa pohne).
- {{cmd:GCCOINCIDENT}}: `Vyberte prvý bod [Objekt (O)/Automaticky (A)] <Objekt>`, `Vyberte druhý bod [Objekt (O)] <Objekt>`.
- {{cmd:GCFIX}}: `Vyberte bod [Objekt (O)] <Objekt>`.
- {{cmd:GCSYMMETRIC}}: `Vyberte prvý objekt [2 body] <2 body>`, `Vyberte druhý objekt`, `Vyberte čiaru symetrie`.

### DIMCONSTRAINT a príkazy DC

Alias `DCON`: `Vyberte pridruženú kótu na prevod [Lineárna (LI)/Vodorovná (H)/Zvislá (V)/Zarovnaná (AL)/Uhlová (AN)/Polomerová (R)/Priemerová (D)/Previesť (C)] <Zarovnaná>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Zadajte prvý bod väzby [Objekt (O)] <Objekt>`, `Zadajte druhý bod väzby`, `Zadajte umiestnenie kótovacej čiary`, `Text kóty <d1=40>` (číslo, výraz alebo `názov=výraz`).
- {{cmd:DCALIGNED}}: ako vyššie, s `[Objekt (O)/Bod a čiara (P)/2 čiary (2)]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Vyberte oblúk alebo kružnicu`. {{cmd:DCANGULAR}}: `Vyberte prvú čiaru alebo oblúk`, `Vyberte druhú čiaru`.
- {{cmd:DCCONVERT}}: `Vyberte kóty na prevod`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Vyberte objekty [Nastavenia (S)]`. `S` sa opýta na tolerancie vzdialenosti a uhla.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Vyberte objekty`; ich väzby zmiznú.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Vyberte objekty [Zobraziť všetko/Skryť všetko]`, potom `[Zobraziť/Skryť]`.
- {{cmd:DCDISPLAY}}: `Zadajte možnosť [Zobraziť/Skryť]`.

### PARAMETERS a -PARAMETERS

{{cmd:PARAMETERS}} (aliasy `PAR`, `PARAM`) otvorí panel {{ui:Parameters}}. `-PARAMETERS`: `Zadajte možnosť [Nový (N)/Upraviť (E)/Premenovať (R)/Zmazať (D)/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Stiahne makro (.swb), ktoré obnoví model ako jeden viazaný náčrt v SolidWorks. Pozrite si [Presun náčrtov do iných modelárov dielov a naopak](topic:solidworks-sketches).

## Bloky

### ANNOSCALE

Aliasy: `CANNOSCALE`. Povie mierku anotácií výkresu a koľko anotatívnych objektov obsahuje, potom sa pýta `Nová mierka anotácií`: napíšte `1:50`, `1:100`, `2:1`, samotné číslo (`50` je 1:50) alebo názov jednej z vlastných mierok výkresu. Každý anotatívny text a kóta sa zmení veľkosťou tak, aby sa pri novej mierke vytlačili v rovnakej veľkosti, v jednom kroku späť; objekty, ktoré nie sú anotatívne, zostanú nedotknuté, rovnako ako objekt, ktorý drží zoznam mierok bez novej (pozrite si {{cmd:OBJECTSCALE}}). Pozrite si [Jednotky, papiere a mierky](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliasy: `OBJSCALE`. `Vyberte anotatívne objekty`, potom `Mierky anotácií vybraných objektov [Pridať/Odstrániť/Aktuálna mierka/Zoznam/Ukončiť] <Pridať>`. Anotatívny text alebo kóta drží zoznam mierok anotácií. `Pridať` a `Odstrániť` sa pýtajú na mierku (`1:50`, `2:1`, samotné číslo alebo názov jednej z vlastných mierok výkresu); `Aktuálna mierka` pridá mierku anotácií výkresu; `Zoznam` vypíše mierky každého objektu. Výrez, ktorého mierka je v zozname objektu, zobrazí objekt vo veľkosti, ktorá vytlačí jeho výšku na papieri pri tejto mierke, na obrazovke aj vo výtlačkoch. Poslednú mierku nie je možné zmazať. Objekty, ktoré nie sú anotatívne, sa vynechajú: najprv zapnite Anotatívne vo Vlastnostiach. Zoznamy sa ukladajú v DWG a DXF ako vlastné údaje CadCraftu. Pozrite si [Jednotky, papiere a mierky](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliasy: `ANNOALL`. `Zobraziť anotatívne objekty pri všetkých mierkach [ON/OFF]`. Zapnuté (ako sa výkres začína): anotatívny objekt sa zobrazí aj vo výreze alebo v modeli, ktorého mierka nie je v jeho zozname, vo veľkosti, akú má. Vypnuté: tam sa nezobrazí a v modeli sa nedá vybrať. Prepínač je jeden krok späť; nie je uložený v súbore.

### SCALELISTEDIT

Aliasy: `SCALELIST`. `Zoznam mierok [Pridať/Upraviť/Zmazať/Zoznam/Obnoviť]` až do {{key:Enter}}. Pridať: `Názov mierky`, `Jednotky papiera`, `Jednotky výkresu`. Upraviť a Zmazať sa pýtajú na názov mierky. Vlastné mierky výkresu sa pridajú do zoznamov mierok výrezu a tlače a uložia sa s výkresom. Pozrite si [Jednotky, papiere a mierky](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT a PEDIT

`SPLINE` (`SPL`): `Prvý bod splinu [Metóda (M)/Objekt (O)] (Body napasovania)`. Napasovanie: body, ktorými krivka prechádza; `Zavrieť`, `Späť`, potom `Začiatočná dotyčnica` a `Koncová dotyčnica` (bod, alebo {{key:Enter}}). Metóda › Riadiace vrcholy sa opýta na stupeň (1 až 5) a kreslí z riadiaceho mnohouholníka. Objekt premení lomené čiary na spliny cez ich vrcholy. `SPLINEDIT` (`SPE`): `[Údaje napasovania/Upraviť vrchol/previesť na lomenú čiaru/Otvoriť alebo Zavrieť/Obrátiť/Späť/Ukončiť]`; Údaje napasovania `[Pridať/Zmazať/Presunúť/Vyčistiť/Dotyčnice/Ukončiť]`; Upraviť vrchol `[Pridať riadiaci bod/Presunúť/Váha/Ukončiť]`. `PEDIT` (`PE`): `[Zavrieť/Otvoriť/Spojiť/Šírka/Napasovať/Spline/Zrušiť krivku/Generovanie typu čiary/Obrátiť/Späť/Ukončiť]`, `M` pre viacero objektov; čiary, oblúky a spliny sa najprv ponúknu ako lomené čiary. Pozrite si [Spliny a lomené čiary](topic:splines).

### BLOCK

Aliasy: `B`, `BMAKE`.

- `Zadajte názov bloku`. Ak existuje: `Blok „…“ už existuje. Predefinovať ho? [Áno (Y)/Nie] <N>`.
- `Zadajte základný bod vloženia`
- `Vyberte objekty`. Nahradia sa jedným odkazom na nový blok.

### WBLOCK

Aliasy: `W`, `-WBLOCK`. Zapíše blok, niektoré objekty alebo celý výkres ako nový súbor DWG alebo DXF. `Zdroj WBLOCK [Blok/Celý výkres/Objekty] <Objekty>`:

- **Objekty**: `Zadajte základný bod vloženia` (stane sa začiatkom nového výkresu), `Vyberte objekty`, potom `Formát súboru [DWG/DXF/R12 DXF]` a `Názov súboru pre nový výkres`, potom `Čo urobiť s objektmi [Zachovať/Previesť na blok/Zmazať]`. Previesť ich nahradí jedným odkazom na blok s názvom súboru; Zmazať ich odstráni.
- **Blok**: `Blok na zápis`. Vlastné objekty bloku, so základným bodom ako začiatkom, vrátane vnorených blokov.
- **Celý výkres**: každý objekt v modelovom priestore. Listy sa nezapisujú; pre kópiu, ktorá listy zachová, použite {{cmd:SAVEAS}}.

Nový súbor obsahuje iba hladiny, typy čiar, štýly textu a kót a bloky, ktoré jeho objekty používajú, a jednotky výkresu. Verzia DWG je tá, ktorú naposledy použil {{cmd:SAVEAS}}. V prehliadači sa súbor stiahne; v Studiu sa otvorí dialóg uloženia.

### ATTDEF

Aliasy: `ATT`, `DDATTDEF`, `-ATTDEF`; alebo {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}. Vypíše režimy, potom `Zadajte možnosť na zmenu (Enter po dokončení) [Neviditeľný/Konštantný/Predvoľba]`, `Zadajte názov značky atribútu`, `Zadajte výzvu atribútu`, `Zadajte predvolenú hodnotu atribútu` (`Zadajte hodnotu atribútu`, keď je konštantný), `Zadajte začiatočný bod textu`, `Zadajte výšku textu`, `Zadajte uhol otočenia textu`. {{cmd:BLOCK}} prevezme definície atribútov do bloku.

### EATTEDIT a ATTEDIT

`EATTEDIT` (`DDATTE`, alebo dvojklik na odkaz s atribútmi; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Vyberte odkaz na blok s atribútmi`, potom dialóg {{ui:Edit attributes}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): ten istý odkaz, potom `<výzva> (<TAG>) <hodnota>` pre každý atribút; {{key:Enter}} ponechá hodnotu. Pozrite si [Atribúty](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Aktualizovať atribúty odkazov ktorého bloku [Názov (N)/Výber (S)/Všetky (A)] <Výber>`. Hodnoty sa zachovajú; nové atribúty dostanú svoju predvolenú hodnotu, odstránené zmiznú, umiestnenia sa obnovia.

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}. Dialógové okno: blok, atribúty (značka, výzva, predvolená hodnota, režimy, poradie), {{ui:Update the references (values kept)}}, {{ui:Apply}}.

### REFEDIT a REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. `REFEDIT`: `Vyberte odkaz na blok na úpravu na mieste` (alebo výber). `REFCLOSE`: `Uložiť zmeny v „…“ [Uložiť/Zahodiť] <Uložiť>`; {{ui:Save the block}} a {{ui:Discard}} na lište robia to isté. Celá úprava je jeden krok späť. Pozrite si [Atribúty](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT a BCLOSE

`BE`; alebo {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}. `Zadajte názov bloku na úpravu <blok vybraného odkazu>` otvorí editor blokov. `BCLOSE` sa pýta `Zavrieť editor blokov v „…“ [Uložiť/Zahodiť] <Uložiť>`; {{ui:Save block}} a {{ui:Discard changes}} v lište robia to isté. Všetko urobené v editore je jeden krok späť.

### VIEWBASE

Alias: `FLATSHOT`. Plochý 2D pohľad na telesá na karte 3D: `Pohľad [Predný/Horný/Pravý/Ľavý/Zadný/Spodný/Izo]`, `Skryté čiary [Zobraziť/Skryť]`, mierka (`1:20`, `2:1`; {{key:Enter}} zoberie tú, ktorá sa zmestí na list), potom stred pohľadu. Jeden odkaz na blok, viditeľné hrany na VIEW-VISIBLE, skryté prerušované na VIEW-HIDDEN. Pozrite si [Ploché pohľady na liste](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliasy: `-PUBLISH`; alebo {{ui:All sheets in one PDF}} v dialógu {{ui:Plot to PDF}}. `Listy na vytlačenie [Všetky/Niektoré]`: {{key:Enter}} vytlačí každý list, `S` sa opýta na názvy oddelené čiarkami. Jedno PDF, strana a záložka na každý list. Pozrite si [Každý list v jednom PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliasy: `SSM`, `SHEETSETMANAGER`. Privedie vás do časti {{ui:Sheet set}} ľavého panela: listy z mnohých výkresov, očíslované a pomenované, ich popisové polia vyplnené zo súboru listov, vytlačené ako jedno PDF. Pozrite si [Súbory listov](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): vyberte DWG alebo DXF, potom jeho vkladací bod. {{cmd:XREF}} (`XR`, `-XREF`): `Prepojené výkresy [?/Pripojiť (A)/Znova načítať (R)/Zviazať (B)/Odpojiť (D)] (Enter: ?)`; pri viacerých prepojeniach vyberte jeden z jeho odkazov alebo napíšte `N` a jeho názov. Pozrite si [Prepojené výkresy](topic:files#linked-drawings-external-references).

### COUNT

Aliasy: `BCOUNT`; alebo {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}. `Vyberte odkaz na blok na spočítanie, alebo [Všetko (A)/Export (E)] (Enter: Všetko)`: výber vyberie a spočíta každý odkaz na tento blok v tomto priestore; {{key:Enter}} alebo `A` ich vypíše všetky; `E`, potom `C` (počty) alebo `A` (atribúty) stiahne CSV. Pozrite si [Spočítanie blokov a export rozpisu](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliasy: `I`, `DDINSERT`.

- `Zadajte názov bloku alebo [Súbor (F)/Knižnica (L)] <posledný blok>` (veľkosť písmen nezáleží). `F` sa opýta na DWG alebo DXF, potom na celý výkres alebo jeden z jeho blokov; názov, ktorý sa už používa, sa opýta {{ui:Keep existing}} alebo {{ui:Rename}}. `L` otvorí panel knižnice.
- `Zadajte vkladací bod [Mierka (S)/Otočenie (R)]`. `S` sa opýta `Zadajte faktor mierky`, `R` sa opýta `Zadajte uhol otočenia`; obe sa zapamätajú.
- Keď blok už stojí vedľa objektov, ktoré sa opakujú inde bez neho, riadok povie, koľko miest sa navrhuje, a výzva dostane `suGgested`: `G` ich zobrazí; kliknite blízko jedného, aby sa blok umiestnil tam, `A` pre všetky, {{key:Enter}} na návrat. Prevezmú otočenie svojich susedov a predvolené hodnoty atribútov. Výkresy s viac ako 20 000 objektmi v otvorenom priestore sa neprehľadávajú.
- Potom `Zadajte <výzva> (<TAG>) <predvolená hodnota>` pre každý atribút, ktorý blok žiada. Pozrite si [Atribúty bloku](topic:attributes).

### LIBRARY

Aliasy: `LIB`. Otvorí panel knižnice: umiestnenie položiek, kontrola aktualizácií, kredity knižnice. Bez otázok. Pozrite si [Vloženie zo súboru alebo z knižnice](topic:insert-from-file-and-library).

### STEELMEMBER

Aliasy: `SMEMBER`; alebo {{ui:3D member}} na karte {{ui:Standard}} knižnice. `Veľkosť profilu <W12x26>` (ako ho karta vypisuje), potom `Začiatočný bod [Stĺpec (C)]` a `Koncový bod`: plný prvok na karte 3D medzi dvoma bodmi, stojaci na zemi. `C` sa opýta na základný bod stĺpca a jeho výšku. Jeden krok späť. Pozrite si [Umiestnenie oceľových profilov a normalizovaných dielov](topic:steel-and-standard-parts).

### PARTSLIST

Aliasy: `PLIST`. `Ľavý horný roh zoznamu dielov`, potom `Výška textu <2.5>`: nakreslí tabuľku každej normalizovanej časti a oceľového profilu umiestnenej z knižnice (čísla položiek, množstvo, diel, norma, veľkosť, dĺžka, materiál, hmotnosť). Jeden krok späť. Pozrite si [Umiestnenie oceľových profilov a normalizovaných dielov](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliasy: `PU`. Odstráni definície blokov, ktoré nič nepoužíva. Bez otázok.

### DELBLOCKS

Alebo {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}. `Vyberte blok na zmazanie [Názov (N)/Ukončiť (X)]`: vyberte odkaz na blok, alebo `N` pre zoznam blokov s filtrom (vyberte viacero), alebo `X` / {{key:Enter}} na ukončenie. Každý odkaz zanikne — v modeli, na každom liste a vo vnútri iných blokov — a potom definícia; príkazový riadok povie, čo sa zmazalo a čo nie. Nepomenované bloky a prepojené výkresy sa neponúkajú. Výzva sa vráti pre ďalší blok; celý príkaz je jeden krok späť.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} vloží to, čo ste skopírovali ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}), ako jeden blok: vyberte vkladací bod a tam príde jeden odkaz na nový blok, vybratý. Blok dostane vlastný názov (`A$C` a číslo); {{cmd:RENAME}} mu dá váš. Jeden krok späť odstráni odkaz aj blok.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} sa pýta na blok, ktorý sa nahradí, a blok, ktorý ho nahradí (`?` vypíše bloky), potom zmení každý odkaz v modeli, na každom liste a vo vnútri iných blokov. Každý odkaz si zachová miesto, mierku, otočenie, hladinu a hodnoty atribútov, ktoré majú oba bloky; atribúty, ktoré má iba nový blok, začínajú na svojich predvolených hodnotách, a povie vám, ktoré hodnoty sa zahodili. Keď už starý blok nikto nepoužíva, ponúkne jeho odstránenie. Odmietne prepojené výkresy a náhradu, ktorá by dala blok dovnútra seba. Jeden krok späť.

### MINSERT

{{cmd:MINSERT}} umiestni blok do riadkov a stĺpcov: názov bloku, vkladací bod, mierka, otočenie, počet riadkov a stĺpcov a vzdialenosti medzi nimi. Celá množina sa otáča s otočením. Každý je samostatný odkaz (najviac 10 000), takže ktorýkoľvek z nich možno neskôr presunúť alebo zmazať.

### BLOCKSPALETTE

Aliasy: `BLOCKSPAL`; alebo {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}. Zobrazí panel {{ui:Blocks}} s kurzorom vo filtri. Každý blok má malý obrázok; naposledy umiestnené sú prvé. Dve tlačidlá vedľa filtra prepínajú medzi zoznamom a mriežkou obrázkov. Kliknite na obrázok (alebo na {{ui:Insert}}), aby sa blok umiestnil cez {{cmd:INSERT}}, alebo ho pretiahnite na výkres, aby sa umiestnil tam, kam ho pustíte.

{{ui:Libraries}}, pod zoznamom: {{ui:Add a drawing}} zoberie vlastný súbor DWG alebo DXF a vypíše jeho bloky s obrázkami a celý výkres ako jeden blok. Umiestnenie jedného skopíruje jeho definíciu (a bloky, ktoré vnára, a ich hladiny) do tohto výkresu, ako to robí voľba `File` príkazu {{cmd:INSERT}}; blok, ktorý je tu už s rovnakou definíciou, sa použije bez otázky, jeden s rovnakým názvom, ktorý sa líši, sa opýta {{ui:Keep existing}} alebo {{ui:Rename}}. V prehliadači súbor zostáva, kým sa stránka nezavrie. V CadCraft Studio {{ui:Add a folder}} vypíše výkresy v priečinku, každý sa otvorí, keď naň kliknete, a súbory a priečinky sa zapamätajú. Malé x odstráni knižnicu zo zoznamu; súbor sa nedotkne. Zdieľaná {{ui:Library}} je iná vec: pozrite si [Vloženie zo súboru alebo z knižnice](topic:insert-from-file-and-library).

### BCONVERT

Alebo {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}. Nájde geometriu, ktorá sa opakuje, a každú kópiu premení na odkaz na jeden blok.

- `Vyberte objekty, ktoré sa opakujú, alebo [Blok (B)]`: objekty jednej kópie. `B` namiesto toho pomenuje existujúci blok, aby sa našli voľné kópie jeho objektov.
- `Kópia môže byť: zrkadlená = Nie, zmenená mierka = Nie; hladina, farba, typ čiary a hrúbka čiary = Zhodné … [Zrkadlené (M)/Zmenená mierka (S)/Vlastnosti (P)]`: `M`, `S` a `P` prepínajú, čo sa počíta ako kópia; {{key:Enter}} vyhľadá. Nastavenia sa zapamätajú.
- `Názov pre nový blok <Block1>`, potom `Zadajte základný bod bloku` ({{key:Enter}} zoberie ľavý dolný roh výberu).
- Povie, koľko iných sád objektov je rovnakej geometrie, zvýrazní všetko, čo by nahradil, a pýta sa `Áno/Nie`.

Kópia sú tie isté objekty posunuté a otočené o ľubovoľný uhol (a zrkadlené alebo zmenené mierkou jedným faktorom, keď sú tieto zapnuté): každý objekt musí mať svoj protějšok, s presnosťou na milióntinu veľkosti výberu. Každý odkaz dostane vlastné otočenie a mierku (zrkadlený má záporný Y-mierku), a hladinu, ktorú mali objekty spoločnú. Objekty na zamknutých hladinách zostanú nedotknuté a spočítajú sa. Prehľadáva otvorený priestor (model alebo otvorený list). Veľmi rozsiahle hľadanie sa zastaví na limite práce a oznámi to. Jeden krok späť.

### BSEARCH

Alebo {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}. `Nájsť bloky podľa [Názov (N)/Atribút (A)/Geometria (G)] <Názov>`:

- `N`: časť názvu bloku, alebo vzor s `*` a `?`. Vypíše každý blok s jeho odkazmi tu a v celom výkrese.
- `A`: hodnota atribútu, alebo `TAG=hodnota`. Vypíše bloky, ktorých odkazy ju majú, s nájdenými hodnotami. Konštantné atribúty sa počítajú.
- `G`: vyberte objekty alebo jeden odkaz na blok a vypíšu sa bloky, ktorých tvar je aspoň na 85 % podobný, od najlepšieho. Veľkosť, otočenie a zrkadlenie sa nepočítajú. Miera porovnáva vzdialenosti medzi bodmi rozloženými pozdĺž obrysov, takže nájde podobné tvary; na presné kópie použite {{cmd:BCONVERT}}.

Nájdené odkazy v otvorenom priestore sa vyberú, pripravené na ďalší príkaz.

### BREPLACE

Alebo {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}. `Nahradiť [Vybrané (S)/Všetky (A)]`: `S` nahradí odkazy na bloky, ktoré vyberiete, blokom, ktorý pomenujete; `A` sa opýta na blok a jeho náhradu a zmení každý odkaz, ako to robí {{cmd:BLOCKREPLACE}} (rovnaký kód). Odkaz si zachová miesto, mierku, otočenie, hladinu a hodnoty atribútov, ktoré majú oba bloky; hodnoty, pre ktoré nový blok nemá miesto, sa zahodia a pomenujú sa. `?` vypíše bloky. Jeden krok späť.

### DATAEXTRACTION

Aliasy: `EATTEXT`, `DX`; alebo {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}. Vypíše bloky, ich atribúty a vlastnosti objektov ako tabuľku alebo súbor CSV.

- Pracuje s výberom, alebo sa pýta `Vyberte objekty (Enter: všetko v tomto priestore)`.
- `Zoznam: [Bloky (B)/Objekty (O)/Všetko (A)]`, keď výber obsahuje oboje. Nepomenované bloky, tabuľky a kusovníky sa nikdy nevypisujú.
- Vypíše stĺpce, z ktorých sa vyberá (názov, typ, hladina, X, Y, otočenie, mierka, dĺžka, plocha, farba, typ čiary, priestor a jeden na každú značku atribútu), potom `Stĺpce, podľa názvu alebo čísla oddelené čiarkami`. {{key:Enter}} zoberie tie s hviezdičkou: názov a každý atribút pre bloky; typ, hladinu a dĺžku pre objekty.
- `Dať rovnaké riadky k sebe s počtom? [Áno (Y)/Nie] <Áno>`, potom `Dať zoznam do: [Tabuľka (T)/Csv (C)] <Tabuľka>`. Tabuľka je obyčajná tabuľka ({{cmd:TABLEDIT}} ju upravuje) a nie je živá: keď sa výkres zmení, spustite príkaz znova.
- Odmietne stĺpec, ktorý nie je v zozname. Tabuľka má 1 999 riadkov údajov; súbor CSV ich pojme všetky.

### COUNTTABLE

Spočíta odkazy na bloky vo výbere (alebo v otvorenom priestore) a dá počty do tabuľky (`Blok`, `Počet`) alebo do súboru CSV. Pre počet, ktorý sa sám sleduje podľa výkresu, pozrite si {{cmd:BOMTABLE}}.

## Listy a vykresľovanie

### LAYOUT

Aliasy: `LO`, `NEWLAYOUT`; alebo tlačidlo {{ui:+}} pod výkresom. Nový list s rámcom, popisovým poľom a jedným výrezom, na ISO A3 (alebo Tabloid pre výkresy v palcoch alebo stopách). Bez otázok.

### MVIEW

Aliasy: `MV`. Iba na liste ({{cmd:VPORTS}} na liste robí to isté).

- `Zadajte roh výrezu [Lomený (P)/Objekt (O)]`, `Zadajte opačný roh`. Výrez zobrazí celý model v štandardnej mierke.
- `P` (Lomený): kliknite na rohy obrysu (`Späť`, `Zavrieť`), {{key:Enter}} keď skončíte. Odmietne menej ako tri rohy.
- `O` (Objekt): `Vyberte uzavretý objekt pre obrys výrezu`: uzavretá lomená čiara, kružnica alebo elipsa na liste. Výrez prevezme jej tvar (krivky ako krátke rovné kúsky); objekt zostane, ako bol. Odmietne objekt, ktorý nie je uzavretý.

### VPCLIP

Orezáva výrez, ktorý už je na liste. `Vyberte výrez na orezanie` (alebo ho vyberte najprv), potom `Vyberte objekt na orezanie [Lomený (P)/Zmazať (D)]`:

- Kliknite na uzavretú lomenú čiaru, kružnicu alebo elipsu, alebo {{key:Enter}} (alebo `P`), aby ste klikali na rohy mnohouholníka.
- `D` (Zmazať, ponúkne sa, keď je výrez orezaný) z neho znova urobí obdĺžnik: rámček okolo obrysu, ktorý mal.
- Čo výrez zobrazuje, sa na papieri nehýbe a jeho mierka zostáva. Model sa kreslí a tlačí len vnútri obrysu a okraj ho nasleduje. Jeden krok späť.
- Orezaný výrez má úchyt na každom rohu svojho obrysu, okrem stredu a štyroch rohov svojho rámčeka (ťahanie rohu rámčeka natiahne obrys spolu s ním). Vlastnosti ukazujú Obrys: Obdĺžnik, alebo Orezaný s počtom rohov.
- Súbory DWG a DXF 2000 uchovajú obrys pre CadCraft. Ostatné programy otvoria výrez ako obdĺžnik okolo neho; DXF R12 uchová iba obdĺžnik.
- Na karte modelu oznámi, že výrezy sú na listoch.

### VPORTS

Aliasy: `VIEWPORTS`. {{cmd:SPLIT}} je to isté aj z listu, a {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} ho spúšťajú. Na modeli: `Zadajte počet tabúľ [SIngle/2/3/4] <3>`; `2` sa pýta `[Vodorovne (H)/Zvisle (V)] <Zvisle>` (Zvisle = vedľa seba), `3` sa pýta `[Vľavo (L)/Vpravo (R)] <Vpravo>` (kam ide veľká tabuľa). Každá tabuľa si ponechá vlastný pohľad a priestor; kliknutie urobí tablu aktívnou. Na liste je to {{cmd:MVIEW}}. Pozrite si [Rozdelenie obrazovky](topic:split-screen).

### VPVIEW

Bez aliasov. Iba na liste.

- `Vyberte výrez` (preskočí sa, ak je už vybraný), potom na modeli: `Zadajte prvý roh okna na zobrazenie`, `Zadajte opačný roh`.

### UCS

Bez aliasov. Vlastný súradnicový systém; nie je to úprava. `Zadajte začiatok UCS [Pomenovaný (NA)/Objekt (OB)/Predchádzajúci (P)/Svet (W)/Z/3bod (3)] <Svet>`: bod je nový začiatok, potom `Zadajte bod na osi X (Enter ponechá uhol)`. `Z`: `Zadajte uhol otočenia okolo osi Z <90>`. `3`: začiatok, bod na kladnej osi X, bod na kladnej strane Y. `OB`: `Vyberte objekt na zarovnanie UCS`. `NA`: `[Obnoviť/Uložiť/Zmazať/?]` a názov. Pohľad sa otočí, aby jeho nová os X bola vodorovná. Pozrite si [Otočenie pohľadu a použitie vlastných súradníc](topic:ucs-and-turned-view).

### PLAN

Bez aliasov. `Zadajte možnosť [Aktuálny UCS (C)/Ucs/Svet (W)] <Aktuálny UCS>`: otočí pohľad aktívnej tably tak, aby os X UCS (alebo sveta) bola vodorovná. Nič vo výkrese sa nehýbe.

### TURNLEFT, TURNRIGHT, TURNWORLD

Bez aliasov; alebo {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}. Rovnaké ako `UCS Z -90`, `UCS Z 90` a `UCS W`, s nasledovaním pohľadu.

### VPLAYER

Bez aliasov. Na liste alebo vnútri výrezu. `Zadajte možnosť [?/Zmraziť (F)/Rozmraziť (T)/Obnoviť (R)/Vpvisdflt]`: `F`, `T`, `R` sa pýtajú na názvy hladín (oddelené čiarkami, zástupné znaky `*` a `?`), potom `[Všetky/Výber/Aktuálny] <Aktuálny>` výrezy; Obnoviť vráti každú hladinu na jej predvolenú hodnotu „zmrazená v nových výrezoch“; `V` nastaví túto predvolenú hodnotu (`[Zmrazené/Rozmrazené]`), ktorú používa {{cmd:MVIEW}}. `?` vypíše hladiny zmrazené v aktuálnom výreze. Stĺpec výrezov v paneli Hladiny robí to isté pre jeden výrez. Pozrite si [Zmrazenie hladiny v jednom výreze](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliasy: `MS`; alebo dvojklik vnútri výrezu. Iba na liste. Pracujte na modeli cez výrez: ten, ktorý je vybratý, jediný na liste, alebo `Kliknite vnútri výrezu, aby ste v ňom pracovali`. Posun a zoom vnútri menia pohľad výrezu (uzamknutý zobrazenie ho ponechá a list sa posunie namiesto toho); nový pohľad sa zapíše ako jeden krok späť. Pozrite si [Práca s modelom cez výrez](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliasy: `PS`; alebo dvojklik mimo výrezu, alebo kliknutie na kartu pod výkresom. Späť na list.

### PLOT

Aliasy: `PRINT`, `PUBLISH`, `EXPORTPDF`; alebo {{key:Mod+P}}. Otvorí dialógové okno {{ui:Plot to PDF}}. Pozrite si [Vykreslenie do PDF](topic:plot-pdf).

### PLOTSTYLES

Aliasy: `STYLESMANAGER`, `PSTABLES`; alebo {{ui:Edit tables…}} v dialógu {{ui:Plot to PDF}}. Otvorí {{ui:Plot style tables}}: čo sa každá farba vytlačí ako (farba, sivá, atrament, hrúbka čiary), uložené s výkresom. Pozrite si [Tabuľky štýlov vykresľovania](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} presunie objekty medzi listom a modelom cez výrez, zmenené mierkou a otočené, aby z druhej strany vyzerali rovnako. Na liste vyberte objekty a pôjdu do modelu (vyberte výrez, keď má list viac výrezov). Keď pracujete na modeli cez výrez ({{cmd:MSPACE}}), vybraté objekty prídu na list. Oznámi, koľkokrát väčšie alebo menšie sa stali. Výrezy ostanú na svojom liste. Jeden krok späť.

### ISODRAFT

{{cmd:ISODRAFT}} zapína izometrické kreslenie `ON` alebo `OFF`, alebo ide priamo na rovinu `Left`, `Top` alebo `Right`. Keď je zapnuté: Ortho ({{key:F8}}) drží čiary pozdĺž dvoch osí roviny (ľavá: 90° a 150°; horná: 30° a 150°; pravá: 30° a 90°), polárne sledovanie ({{key:F10}}) nasleduje rovnaké osi, prichytávanie k mriežke ({{key:F9}}) používa izometrickú mriežku a mriežka ({{key:F7}}) sa kreslí čiarami pod 30°, 90° a 150°. {{cmd:ELLIPSE}} získa `Isocircle`: zadajte stred a polomer (alebo `Priemer`) a nakreslí elipsu, ktorou sa kružnica zobrazí v aktuálnej rovine. Výkres ostane plochý: sú to pomôcky na kreslenie perspektívneho pohľadu, nie 3D model. Nastavenie platí pre túto reláciu a nie je uložené v súbore.

### ISOPLANE

{{cmd:ISOPLANE}} vyberá rovinu, na ktorej izometrické kreslenie pracuje: `Left`, `Top` alebo `Right`. Enter ide na ďalšiu rovinu. Keď je izometrické kreslenie zapnuté, {{key:F5}} robí to isté uprostred príkazu; keď je vypnuté, {{key:F5}} patrí prehliadaču.

## Zisťovanie údajov

### CAL

Vypíše hodnotu výpočtu, tak ako by sa čítala kdekoľvek, kde sa zadáva dĺžka.

- `Výraz`: napíšte ho, napríklad `12'6"+3/4"` alebo `(24'-0")/3`, a stlačte {{key:Enter}}. CadCraft vypíše `= 12'-6 3/4"   (150.75 jednotiek výkresu)`. Pozrite si [Aritmetika v zadanej hodnote](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliasy: `DI`; alebo {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}.

- `Zadajte prvý bod`, `Zadajte druhý bod`. Vypíše vzdialenosť, uhol, Delta X a Delta Y.

### AREA

Aliasy: `AA`; alebo {{ui:View}} › {{ui:More}} › {{ui:Area}}. Vypíše plochu a obvod.

- `Zadajte prvý rohový bod [Objekt (O)/Pridať plochu (A)/Odčítať plochu (S)] <Objekt>`
  - Kliknite alebo zadajte rohy; pri `Zadajte ďalší bod (Enter uzavrie) [Späť (U)]` stlačte {{key:Enter}}, aby sa obrys uzavrel. `U` vráti späť posledný roh.
  - {{key:Enter}} alebo `O`, potom `Vyberte objekt`: kružnica (vypíše svoj obvod), elipsa, lomená čiara (otvorená sa pre plochu uzavrie priamou čiarou a jej dĺžka sa vypíše), alebo šrafovanie (diery sa odpočítajú).
  - `A` (Pridať plochu) a `S` (Odčítať plochu) udržiavajú priebežný súčet: výzva začína `(REŽIM PRIDANIA)` alebo `(REŽIM ODČÍTANIA)`, každá plocha sa pridá alebo odčíta a po každej sa vypíše `Celková plocha = …`. V týchto režimoch `O` vyberá objekty až do {{key:Enter}}, a {{key:Enter}} pri prvej výzve ukončí príkaz.

### MEASUREGEOM

Aliasy: `MEA`. `Zadajte možnosť [Vzdialenosť (D)/Polomer (R)/Uhol (A)/Plocha (AR)] <Vzdialenosť>`; po každom meraní sa pýta znova, s predvolenou hodnotou `Ukončiť (X)`.

`Rýchle` meria okolo ukazovateľa, keď ho pohybujete: vzdialenosť k najbližšiemu objektu vpravo, hore, vľavo a dole (pozdĺž osí aktuálneho UCS), kreslená pri pohybe, a uhol tam, kde sa dvaja z týchto susedov stretávajú rovno. Kliknutie zapíše štyri vzdialenosti, voľnú šírku a výšku a uhly do histórie; Enter sa vráti k možnostiam. Číta, čo je na obrazovke.

- `D`: dva body, ako {{cmd:DIST}}.
- `R`: `Vyberte oblúk alebo kružnicu`; vypíše polomer a priemer.
- `A`: oblúk (jeho obsiahnutý uhol), čiara a potom druhá čiara (uhol medzi nimi, smerom k ich vzdialeným koncom), alebo {{key:Enter}} a tri body (vrchol, potom dva konce).
- `AR`: ako {{cmd:AREA}}, jedna plocha.

### ID

Bez aliasov. `Zadajte bod`; vypíše jeho X a Y.

### LIST

Aliasy: `LI`, `LS`. `Vyberte objekty`; vypíše typ, hladinu a hlavné rozmery každého objektu.

### MASSPROP

{{cmd:MASSPROP}} dá vlastnosti prierezu oblastí a uzavretých objektov, ktoré vyberiete, spolu: plochu, obvod, ohraničujúci rámec, ťažisko, momenty zotrvačnosti okolo osí X a Y prechádzajúcich začiatkom, deviačný moment, polomery zotrvačnosti, rovnaké momenty okolo ťažiska a hlavné momenty s smermi ich osí. Diery v regióne sa počítajú ako diery. Čísla sú v jednotkách výkresu a presné pre obrysy z čiar a oblúkov; elipsy a spliny sa merajú ako krátke rovné segmenty, a to povie. Po správe sa opýta, či ju zapísať do textového súboru. Objekty, ktoré nie sú uzavreté, sa vynechajú, a oznámi, koľko ich je.

## Pohľad, súbory a ďalšie

### ZOOM

Aliasy: `Z`.

- `Zadajte roh okna, alebo faktor mierky (nX) [Rozsah (E)/Všetko (A)/Okno (W)/Predchádzajúci (P)/Mierka (S)/Stred (C)]`. Kliknite na dva rohy pre okno. `E`, `A` alebo Enter: celý výkres.
- `P` (Predchádzajúci, alebo {{ui:Previous}} na paneli nástrojov) sa vráti k pohľadu pred ním, až 10 pohľadov na kartu; séria krokov kolieska alebo jedno posunutie sa počíta ako jeden pohľad.
- Číslo ako `2`, `2x` alebo `0.5x` (alebo `S` a potom číslo) priblíži alebo oddiali o tento faktor okolo stredu obrazovky.
- `C` sa opýta `Zadajte stredový bod` a `Zadajte výšku alebo zväčšenie (nX)`.

### PDFATTACH, PDFIMPORT a príkazy PDF

Aliasy: `PDFATT` pre {{cmd:PDFATTACH}}, `PDFIM` pre {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} umiestni stranu PDF pod výkres (súbor, strana, vkladací bod, mierka, otočenie); {{cmd:PDFIMPORT}} premení čiary, krivky, výplne a text strany na objekty výkresu na hladinách pomenovaných podľa PDF, v skutočnej veľkosti, v zadanej mierke, alebo škálované z dvoch bodov a skutočnej vzdialenosti. {{cmd:PDFCLIP}} orezáva podklad, {{cmd:PDFADJUST}} nastavuje stmavenie, kontrast, monochróm alebo ho vypína, {{cmd:PDFLAYERS}} prepína vlastné hladiny PDF a {{cmd:PDF}} dá CadCraftu znova súbory, ktoré používajú podklady výkresu. Pozrite si [Podklady PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Automatické dopĺňanie výkresu: keď nebeží žiadny príkaz, sivý duch ukazuje, čo hovoria vzory vášho výkresu, že príde ďalej. {{cmd:AUTOCOMPLETE}} ho zapína `On` alebo `Off` (aj Nastavenia › CadCraft), alebo `Show` ukáže, čo by teraz navrhol. **Tab** nakreslí ducha ako jeden krok späť, **Esc** ho odmietne, kým sa výkres nezmení. Nájde tri veci v najnovších objektoch: ďalšiu kópiu niečoho, čo je nakreslené dvakrát alebo viackrát v rovnakom kroku (stĺpiky, stĺpce, stúpanie a šliapka schodiska), ďalšie kroky schodiska z lomenej čiary a chýbajúcu stranu miestnosti alebo reťaze stien. Uprostred {{cmd:LINE}} alebo {{cmd:PLINE}} je duch **ďalší bod**: ďalší krok schodiska (stúpanie, šliapka, stúpanie…), štvrtý roh obdĺžnika, bod, ktorý ho uzavrie, alebo ešte jeden rovnaký krok. Priblížte k nemu kurzor a stlačte **Tab**, ako keby ste tam klikli; pokračujte alebo stlačte Enter. Vypočíta sa na tomto počítači pravidlami, bez modelu.

### AUTOSHEET

Alias: `ASH`. Listy, ktoré sa rozložia samy. {{cmd:AUTOSHEET}} zoberie časti výkresu (vaše pomenované pohľady, alebo oddelené časti modelu, alebo celý model), zvolí veľkosť papiera (alebo tú, ktorú zadáte), dá každej časti štandardnú mierku (jednu mierku pre všetky, alebo najväčšiu, akú každá zvládne) a umiestni pohľady v riadkoch na nové listy s popisovým poľom a popiskom (názov a mierka) pod každým. Čo sa nezmestí na jeden list, dostane vlastný list. Jeden krok späť. Vypočíta sa na tomto počítači pravidlami, bez modelu.

### PHOTOSKETCH

Alias: `PSK`. Fotka skice do výkresu. Vyberte fotku (JPEG, PNG alebo TIFF) ručnej skice na liste papiera. {{cmd:PHOTOSKETCH}} nájde štyri rohy listu, narovná perspektívu, zoberie veľkosť papiera, ktorú pomenujete (`Paper`, alebo najbližšiu normalizovanú), a `Scale` skice (1 : n), potom obtiahne čiary pera na čiary, oblúky a kružnice, s hladinou pre každú farbu pera (čierna, červená, modrá, zelená). Ak nenájde okraj papiera, zoberie celú fotku ako list a oznámi to. Písmo sa vynechá. Jeden krok späť. Robí sa na tomto počítači klasickým spracovaním obrazu, bez modelu, nič sa nikam neposiela. Pozrite si aj príkazy pre naskenované výkresy.

### AUTODIM

Alias: `ADIM`. Automatické kótovanie podľa pravidiel. {{cmd:AUTODIM}} okótuje vybrané objekty (alebo celý výkres) z ich vodorovných a zvislých hrán: reťaz kót pozdĺž strán, ktoré zvolíte (`Sides`), jednu celkovú kótu von, šírku každého otvoru (medzera medzi priamkami stien), priemer pre každú veľkosť otvoru, a s `Grid` rozstup osí mriežky. Kóta, ktorá tam už je, sa nevytvorí znova. Jeden krok späť. Vypočíta sa na tomto počítači pravidlami, bez modelu.

### GRIDMOVE

Alias: `GM`. Presun osi mriežky nesie celú sadu. {{cmd:GRIDMOVE}} posunie čiaru mriežky (čiaru na hladine, ktorej názov hovorí grid alebo axis) a to, čo na nej visí: steny s koncom na čiare sa natiahnu, aby ju nasledovali, steny pozdĺž nej sa presunú celé, stĺpce (odkazy na bloky a kružnice na čiare), jej bublina a značka sa presunú, a kóty, ktorých body ležia na nej, zmerajú nový rozstup. Zadajte dva body (počíta sa len časť napríč čiary) alebo `Distance`. Jeden krok späť vráti všetko. Robí sa podľa pravidiel na tomto počítači.

### DETAILS

Alias: `DET`. Detaily, ktoré vás nájdu. {{cmd:DETAILS}} uchováva vlastné detaily vašej firmy: `Add` (Pridať) dá blok tohto výkresu do zoznamu, `List` a `Remove` (Odstrániť) ho spravujú, a `Find` (Hľadať) ich zoradí pre to, čo je vybraté (alebo pre to, čo ste nakreslili naposledy), podľa slov na jeho hladinách, názvoch blokov, vzoroch šrafovania a poznámkach oproti názvu a poznámkam každého detailu, takže hlava okna nájde vaše parapetné plechy. Vyberte číslo a bod, aby sa umiestnil. Keď je zapnuté `Hint` (aj Nastavenia › CadCraft), výber niečoho, čo detail zodpovedá, dá jeden riadok do stavového riadka. Zoznam je uložený v tomto prehliadači, na tomto počítači, a tento zoznam sa prehľadáva. `Share` ho dá aj do vášho priečinka Dokumenty (`.cadcraft/firm-details.json`, s výkresom každého bloku): `Pull` pridá, čo má váš tím a vy nemáte, `Push` pridá, čo máte vy a oni nemajú, `Both` urobí obe, a nič sa nikdy neodstráni z jednej ani druhej strany. Najprv otvorte priečinok Dokumenty ({{cmd:DOCUMENTS}}); keď je tento priečinok priečinkom Team Cloud Plan, celý tím zdieľa jeden zoznam. Položka detailu v paneli Knižnica má tlačidlo **Pridať do detailov mojej firmy**, ktoré ju dá do toho istého zoznamu. Vypočíta sa na tomto počítači podľa slov, bez modelu.

### SKETCHFIX

Alias: `SKF`. Skice perom sa stanú presnou geometriou. Stlačte a ťahajte jeden voľný ťah naraz (perom, myšou alebo prstom), potom Enter. Každý ťah sa načíta ako čiara, kružnica, oblúk, obdĺžnik alebo lomená čiara: takmer vodorovné a zvislé čiary sa urobia presne vodorovné a zvislé, uzavretý okrúhly ťah sa stane kružnicou, uzavretý ťah so štyrmi pravouhlými rohmi obdĺžnikom, a konce ťahov sa stiahnu k sebe a na konce, ktoré už sú vo výkrese. Jeden krok späť. Vypočíta sa na tomto počítači podľa pravidiel, bez modelu.

### SCANATTACH a príkazy pre naskenované výkresy

Aliasy: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} nemá žiadny. Pracujú s obrázkom, každý jeden krok späť. {{cmd:SCANATTACH}} vloží PNG, JPEG, TIFF (jednu stranu alebo všetky) alebo stranu PDF, ktorá je obrázok. {{cmd:SCANSCALE}} zmení mierku listu z dvoch vybraných bodov a skutočnej vzdialenosti. {{cmd:SCANALIGN}} ho presunie a otočí na dva body (`Scale the sheet to fit` Áno/Nie). {{cmd:SCANDESKEW}} ukáže uhol dlhých čiar listu a list otočí, keď `Accept` (Prijať) alebo zadáte `Value` (Hodnota). {{cmd:SCANCLEAN}} ho urobí čierno-bielym (`Threshold` Auto/Adaptive/Level, `Specks`) a `Run`. {{cmd:SCANCROP}} ponechá okno. {{cmd:SCANERASE}} zmaže `Rectangle` (Obdĺžnik), `Polygon` (Mnohouholník) alebo `Lasso` (Laso). {{cmd:SCANTRACE}} obtiahne čiary a oblúky na novú hladinu (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) a oznámi, čo našiel a čo nechal ako raster. {{cmd:SCANINFO}} vypíše pôvodný súbor a kroky. {{cmd:RASTERSNAP}} zapína alebo vypína prichytávanie k čiaram naskenovaných listov. Pozrite si tému Naskenované výkresy a obtiahnutie.

### REGEN a REGENALL

Aliasy: `RE` pre {{cmd:REGEN}}, `REA` pre {{cmd:REGENALL}}. Znova nakreslí na obrazovke to, čo je z výkresu: {{cmd:REGEN}} kartu, na ktorú sa pozeráte (na liste aj model, ktorý jeho výrezy zobrazujú), {{cmd:REGENALL}} každú kartu, každú tablu rozdeleného okna a každý otvorený výkres. Použite ich, keď obrázok vyzerá zastarane po skriptovej alebo veľmi veľkej zmene, alebo keď asistent upravil výkres; sám výkres sa nedotkne, takže nie je čo vrátiť späť.

### NAMEDVIEW

Aliasy: `NV`, `VIEWS`. `Zadajte možnosť [?/Obnoviť (R)/Uložiť (S)/Okno (W)/Zmazať (D)] <Obnoviť>`, potom názov pohľadu. `S` uloží pohľad na obrazovke, `W` okno, ktoré vyberiete, `R` zobrazí uložený pohľad, `D` jeden zmaže, `?` vypíše pohľady tejto karty. Uloženie pod existujúcim názvom ho nahradí; každá zmena je jeden krok späť. Pohľady patria karte, na ktorej boli uložené. Súbory DWG a DXF ich uchovávajú (tabuľka VIEW); pohľady listu sa vrátia na prvom liste, pretože súbor nehovorí, ktorý je ktorý.

### UNDO a REDO

Aliasy: `U` pre {{cmd:UNDO}}; {{cmd:REDO}} nemá žiadny. Tiež {{key:Mod+Z}} a {{key:Mod+Y}}.

### LAYER

Aliasy: `LA`. Prejde na panel {{ui:Layers}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Zadajte typ čiary pre nové objekty` — `ByLayer` (Podľa hladiny), `ByBlock` (Podľa bloku) alebo názov (`?` ich vypíše: Continuous, vlastné typy výkresu a DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE s ich veľkosťami `2` (polovičná) a `X2` (dvojnásobná)). {{cmd:LWEIGHT}} (`LW`): hrúbka čiary pre nové objekty v mm, alebo `ByLayer` (Podľa hladiny), `ByBlock` (Podľa bloku), `Default` (Predvolená). {{cmd:LTSCALE}} (`LTS`): mierka typov čiar výkresu (dá sa vrátiť späť). {{cmd:LWDISPLAY}} (`LWT`): `Zobraziť hrúbky čiar [ON/OFF]` — to isté ako tlačidlo {{ui:LWT}} v stavovom riadku. Pozrite si [Hrúbky čiar a typy čiar](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Zadajte typ objektu na premenovanie [LAyer/Block]`, `Zadajte starý názov`, potom nový názov; objekty alebo odkazy nasledujú. {{cmd:LAYMRG}}: `Vyberte objekt na hladine na zlúčenie alebo [Názov]` až do {{key:Enter}}, potom `Vyberte objekt na cieľovej hladine alebo [Názov]` a `Y`. {{cmd:LAYDEL}}: `Vyberte objekt na hladine na zmazanie alebo [Názov]`, potom `Y`: hladina a každý objekt na nej odíde (nie vrstva 0, DEFPOINTS ani aktuálna hladina). Jeden krok späť každý. Pozrite si [Organizácia výkresu hladinami](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Hladiny cez výber objektov; tiež v ponuke {{ui:Tools}} panela {{ui:Layers}}. {{cmd:LAYISO}}: `Vyberte objekty na hladine (hladinách), ktoré sa majú izolovať`, potom {{key:Enter}}: každá iná hladina sa vypne. {{cmd:LAYUNISO}} ich zapne späť. {{cmd:LAYOFF}} a {{cmd:LAYFRZ}}: `Vyberte objekt na hladine, ktorá sa má vypnúť` (alebo zmraziť), znova a znova; `U` vráti späť posledný, {{key:Enter}} skončí. {{cmd:LAYMCUR}}: `Vyberte objekt, ktorého hladina sa stane aktuálnou`. {{cmd:LAYON}} zapne každú hladinu, {{cmd:LAYTHW}} rozmrazí každú hladinu. Každý príkaz je jeden krok späť. Pozrite si [Organizácia výkresu hladinami](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} začne prázdny výkres a {{cmd:OPEN}} otvorí DWG alebo DXF, každé na vlastnej karte nad výkresom (nepoužitý nový výkres sa použije namiesto novej karty). Zatvorenie karty s neuloženými zmenami sa najprv opýta. Pozrite si [Rozdelenie obrazovky](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, tiež {{key:Mod+S}}) stiahne kópiu vo formáte výkresu: DWG, ak bol otvorený z DWG, DXF, ak z DXF. Nový výkres použije formát naposledy zvolený v Uložiť ako v tomto prehliadači, inak DWG.

{{cmd:SAVEAS}} (tiež {{key:Mod+Shift+S}}) otvorí dialóg {{ui:Save a copy as}}: vyberte {{ui:DWG}} (a jeho {{ui:Version}}), {{ui:DXF R12}} alebo {{ui:DXF 2000}}, potom {{ui:Save}}. Voľba platí pre tento výkres a pre nové výkresy v tomto prehliadači.

{{cmd:DXFOUT}} vždy stiahne kópiu DXF R12, bez zmeny formátu, ktorý používa {{cmd:SAVE}}.

Pozrite si [Súbory: čo sa otvorí, čo sa uloží](topic:files#saving).

### TOUR

Aliasy: `TUTORIAL`. Znova spustí šesťkrokovú prehliadku prvého výkresu. Pozrite si [Začíname](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliasy: `TBDOCK`. `Pozícia panela nástrojov [Hore/Dole/Vľavo/Vpravo]`. Pozrite si [Nastavenia](topic:settings#toolbar-position).

### COMMANDLINE

Aliasy: `CMDLINE`. `Riadok príkazov [Ukotvený dole/Plávajúci/Jeden riadok/Zobrazené riadky histórie/História príkazov (F2)]`: ukotví alebo uvoľní riadok príkazov, urobí z neho jeden riadok, sa opýta, koľko riadkov histórie zobraziť (0 až 12), alebo otvorí históriu. Pozrite si [Nastavenia](topic:settings#command-line).

### TOPAREA

`Oblasť hore [Štandardná/Kompaktná]`: lišty nad výkresom, ako boli, alebo kompaktné. Pozrite si [Nastavenia](topic:settings#top-area).

### POLARANG

`Zadajte krok polárneho uhla v stupňoch <90>`: krok, na ktorý sa zarovnávajú čiary polárneho sledovania {{ui:Polar}} (väčší ako 0, najviac 180). Zapamätá sa v tomto prehliadači.

### UNITS

Aliasy: `UN`. Ako sa dĺžky zapisujú a zadávajú.

- `Zadajte formát dĺžky [Vedecký/Desatinný/Inžinierský/Architektonický/Zlomkový] <aktuálny>`
- Architektonický a Zlomkový: `Zadajte menovateľa najmenšieho zobrazeného zlomku (1, 2, 4, 8, 16, 32, 64, 128 alebo 256)`. Ostatné: `Zadajte počet desatinných miest (0 až 8)`.

Nové kóty sa podľa toho riadia. Jeden krok späť. To isté ako {{ui:Length format}} a {{ui:Precision}} v {{ui:Current settings}}; pozrite si [Stopy a palce](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliasy: `GDS`. Zobrazí rozloženie IC (súbor toku GDSII): laboratórny test, len na zobrazenie a meranie.

- Výber súboru prijme súbor `.gds`; pri viacerých hlavných bunkách `Zadajte hlavnú bunku na kreslenie`.
- Každá vrstva a typ údajov sa stane hladinou výkresu (`GDS 1`, `GDS 2/5`), odkazy a polia sa umiestnia ploško, v používateľskej jednotke súboru (zvyčajne mikrometre). Jeden krok späť. Nič sa nesimuluje ani nekontroluje a súbor sa nezapisuje späť.

### DIAGRAM

Aliasy: `TEXTDIAGRAM`, `T2D`. Diagram z textu.

- Políčko prijme text (alebo jeden riadok s `;` medzi príkazmi v riadku príkazov): vývojový diagram Mermaid, diagram komponentov PlantUML, D2 alebo zoznam od–do.
- `Zadajte ľavý horný roh diagramu`, potom `Zadajte výšku textu`.

Bloky a spojnice sú obyčajné objekty na hladine `Diagram`, vybraté, keď sa príkaz skončí. Jeden krok späť. Pozrite si [Nakreslenie diagramu z textu](topic:text-to-diagram).

### OLELIST

Aliasy: `OLES`. Objekty OLE, ktoré nesie DWG a ktoré CadCraft nevie umiestniť sám.

- Vypíše každý: číslo, typ, veľkosť, či uložil obrázok.
- `Zadajte možnosť [Umiestniť (P)/Ukončiť (X)] <Ukončiť>`: Umiestniť sa opýta na číslo, ľavý dolný roh a šírku, a nakreslí rámček s obrázkom. Jeden krok späť; uchovaný objekt sa nemení. Pozrite si [Obrázky](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliasy: `SHX`. Vaše vlastné fonty SHX.

- `Zadajte možnosť fontu SHX [Priečinok/Súbory/Zoznam/Odstrániť/Obrátiť/Vyčistiť] <Zoznam>`

{{ui:Folder}} načíta každý `.shx` v priečinku (CadCraft Studio; pri každom spustení znova), {{ui:Files}} zoberie vybrané súbory (prehliadač), {{ui:Reverse}} rozloží písmená jedného fontu od posledného po prvé. Štýly textu, ktoré menujú načítaný font, sa ním kreslia. Pozrite si [Kreslenie textu vlastnými fontmi SHX](topic:shx-fonts).

### LIMITS

Aký veľký má výkres byť.

- `Zadajte ľavý dolný roh alebo [ON/OFF] <aktuálny>`: bod, `ON` alebo `OFF`.
- `Zadajte pravý horný roh <aktuálny>`.

Mriežka vyplní hranice, {{cmd:ZOOM}} All ich zobrazí, a keď sú hranice ON, bod mimo nich sa odmietne (`**Mimo hraníc`). Jeden krok späť; uloží sa v DWG a DXF. Pozrite si [Nastavenie hraníc výkresu](topic:drawing-limits).

### AUNITS

Aliasy: `ANGUNITS`. Ako sa uhly zobrazujú a zadávajú.

- `Zadajte formát uhla [Desatinné stupne/Stupne-minúty-sekundy/Azimuty geodetov] <aktuálny>`
- `Zadajte počet desatinných miest (0 až 8)`, alebo pre ďalšie dva `Zadajte presnosť` (0 stupňov, 2 minúty, 4 sekundy, 5 až 8 desatinných miest sekundy).

Jeden krok späť; uloží sa v DWG a DXF. To isté ako {{ui:Angle format}} v {{ui:Current settings}}. Pozrite si [Zadávanie a zobrazenie azimutov a uhlov](topic:bearings-and-angles).

### APPLOAD

Aliasy: `AP`; alebo {{ui:View}} › {{ui:More}} › {{ui:Load application…}}. Dialógové okno {{ui:Load applications}}: načíta rutiny `.lsp` a dialógové súbory `.dcl`, uvoľní ich, znova načíta z histórie a Štartovací balík. Príkazy `(defun c:NAME …)` rutiny potom fungujú ako ktorékoľvek iné. Pozrite si [Načítanie aplikácií](topic:load-applications) a [Spúšťanie rutín LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (alebo {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) otvorí váš súbor aliasov (riadky `ALIAS, *COMMAND`); {{ui:Save}} ho použije. {{cmd:REINIT}} ho použije znova. Pozrite si [Úprava aliasov príkazov](topic:command-aliases).

### LISPEDIT

Aliasy: `VLIDE`; alebo {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}. Otvorí editor LISP, okno, ktoré zostáva otvorené vedľa výkresu.

- Text: čísla riadkov, partner zátvorky pri kurzore označený (červene, keď nemá), {{key:Enter}} odsadí nový riadok pod otvorenou zátvorkou, {{key:Tab}} napíše dve medzery, {{key:Esc}} opustí text.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): prečíta každý tvar, ako to robí {{cmd:APPLOAD}} so súborom, a vytvorí jeho príkazy `c:`. Súbor sa ukáže v zozname {{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): vyhodnotí vybrané tvary, alebo tvar, v ktorom je kurzor.
- {{ui:Stop}}: ukončí bežiacu rutinu.
- {{ui:Console}}: čo rutina vypísala, a každú chybu s jej riadkom; kliknutím na chybu sa tam prejde. Text sa spúšťa po jednom tvare najvyššej úrovne, takže riadok je riadok tvaru, alebo vnútri neho riadok, ktorý volá funkciu, ktorú chyba pomenúva.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): súbor `.lsp`. Text sa uchová aj v tomto prehliadači, takže zatvorenie okna neprinesie stratu.
- Vedľa textu: funkcie, ktoré rutina definuje, tie, ktoré volá a tento LISP ešte nemá, tie, ktoré volá a nie sú v nej definované ani vstavané, a úplné zoznamy toho, čo je vstavané a čo nie.

Text so zátvorkou, ktorá sa nikdy nezavrie, alebo s reťazcom, ktorý sa nikdy neskončí, sa nespustí: pomenuje sa riadok. Nie je tu krokovací ladič, zarážky ani okno sledovania. Pozrite si [Spúšťanie rutín LISP](topic:run-lisp).

### HELP

Aliasy: `?`. Vypíše každý príkaz, jeho aliasy a jednoriadkový popis do histórie riadku príkazov. Neotvorí túto pomoc: pre ňu stlačte {{key:F1}} alebo kliknite na {{ui:Help}}.

## Výzva Vybrať objekty

Pri každej výzve `Vyberte objekty`: kliknite na objekty, ťahajte okná (zľava doprava) a kríženia (sprava doľava) dvoma kliknutiami, alebo stlačte a ťahajte laso ({{key:Space}} počas ťahania: okno, kríženie, ohrada), {{key:Shift}}+klik na odstránenie a stlačte {{key:Enter}} na dokončenie. Môžete tiež napísať `ALL` (všetko), `L` (posledný objekt), `P` (Predchádzajúci: to, čo použil posledný príkaz), `F` (Ohrada: objekty, ktoré pretína čiara bodov; `U` vráti späť bod), `W` (Okno), `C` (Kríženie), `R` (režim Odstrániť: výbery vyberajú objekty von; výzva hovorí `Odstrániť objekty`) a `A` (Pridať znova). `?` ich vypíše. V výzve sa nezobrazujú. {{key:Tab}} nad prekrývajúcimi sa objektmi zvýrazní ďalší; kliknutím ho vyberiete. Pozrite si [Výber objektov](topic:select-objects).

### ACCESS

Alias: `AX`. Kreslenie bez zraku. {{cmd:ACCESS}} zapína alebo vypína Prístup (`On`, `Off`) a prepína zvuky uchopenia (`Sound`) a hlasové príkazy (`Voice`); najprv povie stav. Keď je Prístup zapnutý, každý príkaz a výsledok sa číta cez čítačku obrazovky a oblasť kreslenia má kurzor z klávesnice. Téma pomoci „Kreslenie bez zraku“ má klávesy.

### DESCRIBE

Alias: `DESC`. Povie, čo výkres obsahuje: koľko objektov, akého druhu, aké veľké, koľko hladín, čo je vybraté. Iba číta; nič nemení.

### WHEREAMI

Alias: `WHERE`. Povie, kde je kurzor, v jednotkách výkresu.

### NEARBY

Povie, čo leží blízko kurzora, najbližšie najprv, každé s vzdialenosťou a stranou, na ktorej je.

### SAYSEL

Povie, čo je vybraté, jedna veta na objekt (dĺžka čiary, konce a uhol; polomer kružnice a stred; text tak, ako je napísaný).

### VOICE

Zapína alebo vypína hlasové príkazy. Rozpoznávajú sa na tomto počítači; kde prehliadač nevie toto urobiť, hlas zostane vypnutý, pokiaľ v Nastaveniach nezvolíte online službu prehliadača.

### TOUCHCROSSHAIR

Alias: `TCX`. Odsadený kríž na kreslenie prstom, aby konček prsta nezakrýval bod, ktorý vyberáte. Keď je zapnutý, jeden prst na výkrese nič nevyberá: pohybuje krížom, ktorý sedí nad prstom a na jednej strane. Uchopenia objektov a sledovanie nasledujú kríž. Zdvihnutie prsta nič nevyberie a nechá kríž, kde je. Na výber stlačte tlačidlo {{ui:Click}} v rohu výkresu, alebo klepnite kdekoľvek na výkrese druhým prstom. Podržte {{ui:Click}}, kým pohybujete druhým prstom, aby ste ťahali (okno výberu, laso, úchyt). Prst držaný nehybne dlho, alebo tlačidlo {{ui:Enter}}, je Enter. Dva prsty posúvajú a zväčšujú ako predtým. Pri spodnom okraji a vzdialenom bočnom okraji sa kríž priblíži k prstu, takže sa dá dosiahnuť každá časť výkresu. Pero a myš vyberajú vždy priamo.

{{cmd:TOUCHCROSSHAIR}} povie stav a sa opýta `ON`, `OFF`, `Auto` (zapnuté len tam, kde je prst jediným ukazovateľom, takže je vypnuté na počítači s myšou), `Distance` (ako ďaleko kríž sedí od prsta, 24 až 240 pixelov) alebo `Side` (`Left`: hore a vľavo, pre pravú ruku; `Right` pre ľavú ruku; tlačidlá sa presunú do druhého rohu). Tie isté voľby sú v Nastaveniach › CadCraft, a na zariadení s dotykovou obrazovkou má stavový riadok prepínač {{ui:Offset crosshair}}. Voľby sa uchovajú v tomto prehliadači.

### WHOHAS

Povie, kto má výkres otvorený. V CadCraft Studio na počítači otvorenie DWG alebo DXF zapíše vedľa neho malý zámkový súbor (`Plan.dwg.cclock`: kto, od kedy, ktorá verzia), obnovuje ho každú minútu, kým je výkres otvorený, a pri zatvorení výkresu ho odstráni. Otvorenie výkresu, ktorý má niekto iný otvorený, povie, kto a od kedy, a ponúkne {{ui:Open read-only}} (Uložiť potom žiada nový názov), {{ui:Open anyway}} (druhá osoba sa dozvie pri ďalšom obnovení) alebo {{ui:Cancel}}. Uloženie cez súbor, ktorý má niekto iný otvorený, sa najprv opýta. Zámok, ktorý sa nebol obnovený päť minút, je zastaraný: druhá kópia sa zatvorila bez uloženia, alebo spí počítač.

{{cmd:WHOHAS}} sa pýta `Current` (aktuálny otvorený výkres), `File` (súbor, ktorý vyberiete), `FOlder` (priečinok, ktorý vyberiete: každý výkres v ňom, ktorý je niekde otvorený, sa vypíše), `Path` (napíšte úplnú cestu) alebo `Name` (názov, ktorý vidia ostatní; názov vášho účtu, keď ste prihlásení). Studio dosiahne iba priečinky, ktoré ste zvolili: pri výkrese otvorenom z priečinka, ktorý nebol nikdy zvolený, raz povie, že nemôže výkres označiť ako otvorený; `FOlder` zvolí priečinok a zámky tam odvtedy fungujú. Zámok je poznámka pre ľudí, nie prekážka: iný program stále môže súbor zapísať. V prehliadači nie sú priečinky, ktoré by sa dali prezerať, a príkaz to povie.

### OVERKILL

Zmaže duplicitné objekty a upraví prekrývajúce sa čiary a oblúky, pre výkresy, ktoré prídu plné zdvojenej kresby. `Vyberte objekty na vyčistenie`, {{key:Enter}}, potom {{key:Enter}} znova, aby sa vyčistilo s ukázanými nastaveniami, alebo najprv zmeňte jedno:

- `Tolerance`: ako blízko musia byť dve súradnice, aby sa počítali ako rovnaké (0,000001 na začiatku; 0 znamená presne rovnaké).
- `Ignore` (Ignorovať): vlastnosti, ktoré sa môžu líšiť medzi dvoma inak rovnakými objektmi. Napíšte názov, aby ste ho prepli: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, alebo `None` / `All`. {{key:Enter}} keď skončíte.
- `Overlap` (Prekrytie): zapnuté alebo vypnuté. Zapnuté, čiary na jednej priamke, ktoré sa prekrývajú, sa stanú jednou čiarou (čiara ležiaca vnútri inej sa jednoducho zmaže), a oblúky na jednej kružnici, ktoré sa prekrývajú, sa stanú jedným oblúkom; oblúky, ktoré uzavrú celý obrat, sa stanú kružnicou, a oblúk ležiaci na kružnici sa zmaže.
- `Ends` (Konce): zapnuté alebo vypnuté. Zapnuté, čiary na jednej priamke a oblúky na jednej kružnici, ktoré sa dotýkajú len koniec na koniec, sa stanú jedným kusom.

Každý typ objektu sa kontroluje na duplicity: dva objekty sú duplicitné, keď sa ich geometria zhoduje v rámci tolerancie a ich hladina, farba, typ čiary, mierka typu čiary, hrúbka čiary, hrúbka, priehľadnosť a výška sa zhodujú (okrem tých, ktoré ignorujete). Čiary a otvorené lomené čiary sa zhodujú aj keď sú nakreslené opačne. Prvý objekt v poradí kreslenia zostane a ponechá si svoje vlastnosti. Príkaz oznámi, koľko objektov skontroloval a zmazal: duplicity, zlúčené prekrývajúce sa kúsky, kúsky spojené koniec na koniec. Jeden {{cmd:UNDO}} to všetko vráti. Nastavenia platia, kým nezavriete okno výkresu.

Nechá na pokoji: objekty na zamknutých hladinách a skryté objekty. Nezlučuje čiary s výškou (Z) (presné duplicity z nich sa stále odstránia) a nedotýka sa segmentov vnútri lomenej čiary (nerednú sa), čiary ležiacej na segmente lomenej čiary a uzavretej lomenej čiary nakreslenej opačne.

### DRAWORDER

Mení, ktoré objekty sa kreslia navrchu. `Vyberte objekty na zmenu poradia`, {{key:Enter}}, potom `Nad objekty`, `Pod objekty`, `Navrch` alebo `Naspodok` ({{key:Enter}} = `Naspodok`). `Nad objekty` a `Pod objekty` sa pýtajú na referenčné objekty: výber ide hneď pred najpredný z nich, alebo hneď za najzadnejší. Vybrané objekty si medzi sebou zachovajú svoje poradie. Jeden krok späť. Poradie sa ukladá s výkresom v DWG a DXF, kde je poradím, v akom sa objekty zapisujú.

Na obrazovke CadCraft kreslí najprv plné oblasti (plné šrafovania, široké lomené čiary, masky), potom čiary, potom text, takže text sa vždy číta nad výplňou; poradie kreslenia sa ukazuje medzi plnými objektmi a medzi obrázkami. Ostatné programy, ktoré súbor otvoria, kreslia každý objekt v uloženom poradí.

### TEXTTOFRONT

Prenesie text, kóty a vynášacie čiary pred všetko ostatné v otvorenom priestore: `Text`, `Dimensions`, `Leaders` alebo `All` ({{key:Enter}} = `All`). Jeden krok späť. Oznámi to, keď nie je nič, alebo keď sú už navrchu.

### HATCHTOBACK

Pošle každé šrafovanie otvoreného priestoru za všetko ostatné, aby výplne prestali zakrývať čiary a text v uloženom súbore. Bez výziev. Jeden krok späť.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Zobrazí len vybrané objekty: všetko ostatné v otvorenom priestore zmizne z dohľadu, až do {{cmd:UNISOLATEOBJECTS}}. Na rozdiel od {{cmd:LAYISO}} pracuje s objektmi, ktoré vyberiete, nech sú na akýchkoľvek hladinách, a nemení žiadnu hladinu. Skryté objekty sa nekreslia, nevyberajú, neuchopujú, nepribližujú ani netlačia, a príkazy, ktoré berú `ALL`, ich preskočia. To, čo nakreslíte, keď sú objekty izolované, sa zobrazí ako obvykle.

Je to len pre túto reláciu: nič o tom sa nezapisuje do výkresu, nie je to krok späť a po opätovnom otvorení výkresu sa všetko zobrazí. Kým sú objekty skryté, stavový riadok zobrazuje tlačidlo s ich počtom; kliknutím ich znova zobrazíte.

### HIDEOBJECTS

Skryje vybrané objekty až do {{cmd:UNISOLATEOBJECTS}}. Platia rovnaké pravidlá ako pre {{cmd:ISOLATEOBJECTS}}: len pre túto reláciu, neukladá sa, nie je to krok späť.

### UNISOLATEOBJECTS

Aliasy: `UNISOLATE`, `UNHIDE`. Znova zobrazí každý objekt skrytý {{cmd:ISOLATEOBJECTS}} alebo {{cmd:HIDEOBJECTS}}, a povie, koľko sa vrátilo.

### LAYLOCKFADE

Nastaví, ako vyzerajú objekty na zamknutých hladinách a či sa ich dosiahne kliknutím. Povie aktuálny stav, potom prijme:

- číslo od 0 do 90: mieru stmavenia v percentách (na začiatku 50). 0 stmavenie vypne.
- `ON` alebo `OFF`: stmavenie zapnuté alebo vypnuté, s ponechaním miery.
- `Pick`, potom `Yes` alebo `No`: môže kliknutie vybrať objekty na zamknutých hladinách, keď nebeží žiadny príkaz? `No` (predvolené): nedajú sa vybrať vôbec. `Yes`: kliknutie alebo okno ich vyberie, aby ich {{ui:Properties}} mohli zobraziť; stále ich nemožno zmeniť a `Select objects` vlastného príkazu ich nikdy neberie.

Uchopenia objektov nájdu objekty na zamknutých hladinách v oboch prípadoch. Výtlačky sa nikdy nestmavia. Obe nastavenia sú vaše, nie výkresu, a sú aj v {{ui:Settings}} pod {{ui:Locked layers}}.

### BURST

Rozloží odkazy na bloky a zachová, čo hovoria ich atribúty. `Vyberte odkazy na blok na rozložanie`, {{key:Enter}}: každý odkaz sa nahradí objektmi bloku a hodnota každého viditeľného atribútu sa stane obyčajným textom na vlastnej hladine tohto atribútu (atribút na hladine 0 pristane na hladine odkazu, ako ostatné objekty bloku na hladine 0). Neviditeľné atribúty sa zahodia. Blok vnútri bloku zostane odkazom na blok. Jeden krok späť; oznámi, koľko odkazov sa rozložilo a koľko hodnôt atribútov sa premenilo na text.

Odmietne prepojený výkres podľa názvu (najprv ho zviažte, alebo skopírujte z neho cez {{cmd:NCOPY}}), a ostatné vybraté objekty nechá na pokoji. Pre odkazy na bloky dáva {{cmd:EXPLODE}} tie isté objekty; {{cmd:BURST}} berie len odkazy na bloky a počíta text atribútov.

### TXT2MTXT

Alias: `T2M`. Spojí jednoriadkové texty do jedného odseku textu. `Vyberte jednoriadkový text na spojenie`, {{key:Enter}}, potom `Odsek` (riadky sa spoja a zalomia sa pri šírke najširšieho riadku) alebo `Riadky` (každý text zostane vlastným riadkom); {{key:Enter}} zoberie ten, ktorý sa použil naposledy. Riadky sa zoradia zhora nadol, potom zľava doprava, pozdĺž smeru horného textu. Odsek visí z ľavého horného rohu horného textu a preberá jeho výšku, otočenie, štýl, hladinu a farbu. Jeden krok späť.

Text, ktorý je už odsekom, prázdny text a ostatné objekty vo výbere zostanú na pokoji, a príkaz povie, koľko ich bolo.

### NCOPY

Kopíruje objekty z odkazu na blok alebo prepojeného výkresu do výkresu bez rozloženia čohokoľvek. `Zvoľte objekt vnútri odkazu na blok alebo prepojeného výkresu`: objekt najbližší k bodu sa skopíruje tam, kde sa zobrazuje, bez ohľadu na to, koľko blokov hlboko je vnorený; zvoľte ďalšie, potom {{key:Enter}}. Ďalej `Základný bod na presun kópií`: {{key:Enter}} ich nechá na mieste, alebo zadajte základný bod a druhý bod. Celý príkaz je jeden krok späť.

Kópia dostane hladinu, na ktorej sa zobrazuje: objekt na hladine 0 vnútri bloku pristane na hladine odkazu, v ktorom sedel, a farba Podľa bloku sa stane farbou tohto odkazu. Z prepojeného výkresu sa hladina `Plan|Walls` stane `Plan$0$Walls` (názov, ktorý jej dáva prepojenie), vytvorená s farbou, typom čiary a hrúbkou čiary prepojenej hladiny. Hodnota atribútu sa skopíruje ako text. Odkazy na bloky na zamknutých hladinách sa nedajú zvoliť.

### FLATTEN

Nastaví výšku (Z) a hrúbku vybraných objektov na 0. `Vyberte objekty na zploštenie`, {{key:Enter}}. Zploští tiež objekty vnútri definícií blokov, ktoré výber používa (a bloky v nich), takže sa zmení každý odkaz na tieto bloky; prepojené výkresy zostanú, ako sú. Jeden krok späť; oznámi, koľko objektov sa zmenilo, a povie, keď žiadny nemal výšku ani hrúbku.

To, čo CadCraft uchováva z tretieho rozmeru v 2D výkrese, je: výška na kružniciach, oblúkoch, elipsách, bodoch, texte, odkazoch na bloky, šrafovaniach, vynášacích čiarach a lomených čiarach (ich kóta), výška na každom konci čiary a hrúbka na čiarach, kružniciach, oblúkoch, lomených čiarach, bodoch a texte, tak ako ich súbor mal. {{cmd:FLATTEN}} vymaže presne tieto. Nedotýka sa 3D modelu na karte 3D, 3D plôch ani telies, a objekt nakreslený v naklonenej rovine bol už pri otvorení súboru prenesený do roviny výkresu.

### BREAKLINE

Nakreslí čiaru so symbolom prerušenia, pre pohľad, ktorý je skrátený. Povie aktuálnu veľkosť a predĺženie, potom `Prvý bod prerušovacej čiary` (alebo `Size` / `Extension` na ich najprv zmenu), `Druhý bod` a `Kde sedí symbol prerušenia`: kliknite pozdĺž čiary, alebo {{key:Enter}} pre stred. Výsledkom je jedna lomená čiara na aktuálnej hladine: čiara, ktorá za každým bodom prebehne o predĺženie, s Z-ovým ťahom, ktorý je vysoký ako veľkosť a polovicu dlhý.

`Size` a `Extension` sa zapamätajú ako vaše nastavenia (veľkosť sa začína na dvojnásobku výšky textu kóty krát mierka kóty; predĺženie na polovici veľkosti). {{key:Enter}} opakuje príkaz.

### AUDIT

Skontroluje otvorený výkres na poškodenie a opraví ho. {{cmd:AUDIT}} prejde každý objekt v modeli, na listoch a vo vnútri blokov, a tabuľku hladín, a vypíše, čo našiel, podľa druhu:

- čísla, ktoré nie sú konečné, alebo sú absurdne veľké;
- objekty bez veľkosti: čiara bez dĺžky, kružnica bez polomeru, lomená čiara s jedným bodom, text bez písmen alebo výšky, odkaz na blok s nulovou mierkou;
- objekty na hladine, ktorú výkres nemá; odkazy na blok, ktorý tam nie je; názvy štýlov textu a kót a názvy typov čiar, ktoré nie sú vo výkrese;
- bloky, ktoré obsahujú sami seba, priamo alebo cez iné bloky;
- objekty, ktoré zdieľajú identifikátor, kľúč alebo odkaz súboru;
- kóty bez bodov, od ktorých sa merajú, a šrafovania, ktorých hranica nie je uzavretý obrys.

Potom sa pýta `Opraviť ich? [Áno (Y)/Nie]`. `Nie` nič nemení. `Áno` opraví všetko v jednom kroku späť: to, čo sa nedá nakresliť, sa odstráni (zlé čísla, bez veľkosti, chýbajúci blok, pokazená kóta, šrafovanie bez použiteľnej hranice, odkaz, ktorý uzatvára kruh blokov); chýbajúca hladina sa vytvorí; neznáme názvy štýlov a typov čiar sa vrátia na predvolené; zdieľaný kľúč sa nahradí. Vypíše, koľko objektov sa odstránilo a koľko sa opravilo. Tie isté nálezy sa objavia v paneli Problémy, každý so svojím {{ui:Repair}}.

Nič neodmieta, ale kontroluje len to, čo CadCraft sám kreslí: údaje uchované pre iné programy (3D telesá, objekty OLE) sa neotvárajú.

### RECOVER

Otvorí poškodený DXF alebo DWG. {{cmd:RECOVER}} sa pýta na súbor, prečíta, čo sa dá prečítať, namiesto odmietnutia súboru, vypíše, čo preskočil alebo predpokladal, a potom skontroluje a opraví výkres ako {{cmd:AUDIT}} s `Yes`.

- DXF: riadky, ktoré nie sú súčasťou dvojice kód a hodnota, sa preskočia, kým sa dvojice znova nezhodnú; sekcia bez konca sa uzavrie; súbor, ktorý je useknutý, sa prečíta až po miesto useknutia; binárny DXF, ktorý je useknutý, sa prečíta až po jeho poslednú celú hodnotu. Keď sekcia, blok alebo objekt sa stále nedá prečítať, vynechá sa a je pomenovaný, a čítanie pokračuje za ním.
- DWG: objekty, ktoré zlyhajú kontroly alebo sa nedajú dekódovať, sa vynechajú, a stratený zoznam objektov sa znovu zostaví prechádzaním údajov objektov.

Súbor na disku sa nezmení. Obnovený výkres sa otvorí neuložený: uložte ho pod novým názvom. Súbor, z ktorého sa nedá prečítať vôbec nič, sa odmietne s dôvodom.

### LEGACYTEXT

Prevedie text písaný starými 8-bitovými vietnamskými fontmi do Unicode. Krátke názvy `TEXTTOUNICODE` a `VNTEXT`.

Staršie vietnamské výkresy držia svoj text ako západné znaky, ktoré z neho font urobí vietnamčinu: text TCVN3 vo fontoch ABC (`.VnTime`, `.VnArial` a fonty veľkých písmen, ktorých názvy končia na `H`), a text VNI vo fontoch VNI (`VNI-Times`). CadCraft takýto text zobrazuje tak, ako sa číta, hneď po otvorení výkresu, podľa fontu jeho štýlu textu, objektu alebo úseku v odseku textu; súbor stále drží staré znaky.

{{cmd:LEGACYTEXT}} povie, koľko textov našiel v každom kódovaní, a pýta sa `Previesť … do Unicode?`. `Áno` prepíše každý (model, listy, bloky, hodnoty a definície atribútov) a dá štýlom textu Unicode font (Times New Roman, Arial alebo Courier New podľa druhu starého fontu), v jednom kroku späť. Formátovanie vnútri odseku textu sa zachová.

Keď žiadny text nepoužíva známy font (štýl, ktorý stratil názov fontu), pýta sa `Čítať vybrané texty ako [Tcvn3/Vni/None]`: vyberte kódovanie a vyberte texty. Text, ktorý je už Unicode, zostane nedotknutý. Prepísané hodnoty textu kót a text viacnásobnej vynášacej čiary sa neprevádzajú.
