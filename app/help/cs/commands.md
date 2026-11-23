---
title: Referenční příručka příkazů
summary: Každý příkaz v kreslicí aplikaci CadCraft se svými zkratkami, otázkami, které klade, volbami a výchozími hodnotami.
keywords: příkazy, zkratky, seznam příkazů, plocha, obvod, measuregeom, čára, pline, kružnice, oblouk, oříznout, odsadit, dimlinear, blok, vložit, rozvržení, vykreslit, zoom, nápověda, copyclip, cutclip, pasteclip, pasteorig, copybase, duplikovat, selectall
from: 979ffe3b
---

Napište název příkazu nebo zkratku a stiskněte {{key:Enter}} nebo {{key:Space}}. Velikost písmen nehraje roli a úvodní `_`, `-`, `.` nebo `'` se ignoruje. Napište `HELP` (nebo `?`) a vypíše se krátký seznam všech příkazů do historie příkazového řádku; {{key:F1}} otevře tuto nápovědu.

Jak číst výzvy: volby jsou v hranatých závorkách a zvolíte je tak, že napíšete jejich velká písmena (`D` pro Průměr). Výchozí hodnota je v ostrých závorkách `<>`; stisknutím {{key:Enter}} ji přijmete. Tam, kde se žádá bod, můžete klepnout nebo napsat kterýkoli z formátů uvedených v [Zadávání souřadnic a vzdáleností](topic:coordinate-entry). Tam, kde se žádá vzdálenost, můžete napsat číslo, nebo klepnout na dva body.

Stisknutí {{key:Enter}} tam, kde se žádá bod nebo objekt a není žádná výchozí hodnota, příkaz ukončí. {{key:Esc}} jej zruší. Cokoli příkaz udělal, je jeden krok zpět.

## Kreslení

### LINE

Zkratky: `L`. Rovné úseky, každý je samostatný objekt.

- `Zadejte první bod` ({{key:Enter}}: začít od posledního zadaného bodu)
- `Zadejte další bod [Zpět (U)]`, opakuje se. Po dvou úsecích: `[Zpět (U)/Uzavřít (C)]`.
- `U` vezme zpět poslední úsečku, `C` uzavře k prvnímu bodu a skončí. {{key:Enter}} skončí.

### PLINE

Zkratky: `PL`. Jedna mnohočára z úseček a oblouků.

- `Zadejte počáteční bod`
- `Zadejte další bod [Oblouk (A)/Uzavřít (C)/Zpět (U)]` (Uzavřít, jakmile jsou dva úseky)
- `A` přepne na oblouky: `Zadejte koncový bod oblouku [Úsečka (L)/Uzavřít (CL)/Zpět (U)]`. Každý oblouk navazuje tečně na předchozí úsek. `L` se vrátí k úsečkám, `CL` uzavře obloukem.
- {{key:Enter}} skončí; mnohočára zůstane otevřená.

### CIRCLE

Zkratky: `C`.

- `Zadejte střed kružnice [3P/2P/Ttr (tečna tečna poloměr)]`
- `Zadejte poloměr kružnice [Průměr (D)] <poslední poloměr>`; `D` se zeptá `Zadejte průměr kružnice`.
- `2P`: dva konce průměru. `3P`: tři body na kružnici.
- `T` (také příkaz `TTR` a {{ui:Kreslení}} › {{ui:Více}} › {{ui:Kružnice: tečna, tečna, poloměr}}): `Zadejte bod na objektu pro první tečnu kružnice`, potom druhou, potom poloměr ({{key:Enter}}: poslední). Kružnice se dotýká obou objektů (čar, oblouků, kružnic, úseků mnohočáry, také uvnitř bloků); z těch, které se dotýkají, vznikne ta, která se dotýká nejblíže vašim bodům. Když žádná nesedí, napíše se „Circle does not exist“.
- `TTT` (nebo {{ui:Kreslení}} › {{ui:Více}} › {{ui:Kružnice: tečna, tečna, tečna}}): tři objekty; kružnice, která se dotýká všech tří, nejblíže vašim bodům (tři čáry dají vnitřní, nebo vnější kružnici podle toho, kam kliknete).

### ARC

Zkratky: `A`.

- `Zadejte počáteční bod oblouku [Střed (C)]`, `Zadejte druhý bod oblouku`, `Zadejte koncový bod oblouku`: oblouk procházející třemi body.
- `C`: `Zadejte střed oblouku`, `Zadejte počáteční bod oblouku`, `Zadejte koncový bod oblouku`. Oblouk jde proti směru hodinových ručiček od počátku ke konci.

### RECTANG

Zkratky: `REC`, `RECTANGLE`. Uzavřená mnohočára.

- `Zadejte první roh`, `Zadejte protilehlý roh`. Pro druhý roh napište `@šířka,výška`.

### POLYGON

Zkratky: `POL`. Pravidelný mnohoúhelník jako uzavřená mnohočára.

- `Zadejte počet stran <4>` (3 až 1024)
- `Zadejte střed mnohoúhelníku`
- `Zadejte volbu [Vepsaný do kružnice (I)/Opsaný kružnici (C)] <I>`
- `Zadejte poloměr kružnice`: klepněte nebo napište bod; jeho vzdálenost určí velikost a jeho směr otočí mnohoúhelník.

### ELLIPSE

Zkratky: `EL`.

- `Zadejte koncový bod osy elipsy [Střed (C)]`, `Zadejte druhý koncový bod osy`, `Zadejte vzdálenost od druhé osy`
- `C`: `Zadejte střed elipsy`, `Zadejte koncový bod osy`, potom vzdálenost od druhé osy.
- `I` (`Izokružnice`, jen když je {{cmd:ISODRAFT}} zapnuto): střed, potom poloměr nebo `Průměr`: elipsa, jakou kružnice ukazuje v aktuální izometrické rovině.

### HATCH

Zkratky: `H`, `BH`, `BHATCH`; nebo {{ui:Šrafa}} na panelu nástrojů. Nejdříve vypíše aktuální vzor, měřítko a úhel.

- `Zadejte vnitřní bod [Vybrat objekty (S)/Vzor (P)/Měřítko (SC)/Úhel (A)]`, opakuje se (`Zpět (U)`, jakmile je plocha): každé kliknutí přidá uzavřenou plochu kolem něj, s uzavřenými tvary uvnitř jako ostrovy. {{key:Enter}} vytvoří jednu šrafu ze všech.
- `S`: `Vyberte uzavřené objekty` (uzavřené mnohočáry, kružnice, uzavřené elipsy).
- `P`: `Zadejte název vzoru, SOLID, nebo ? pro seznam <aktuální>`. `SC`: `Zadejte měřítko vzoru`. `A`: `Zadejte úhel vzoru`.
- `G` (Přechod): výplň je přechod místo vzoru. Viz {{cmd:GRADIENT}} pro jeho otázky.

Viz [Šrafy a výplně ploch](topic:hatch).

### GRADIENT

Zkratky: `GD`. Vyplní plochu přechodem jedné nebo dvou barev. Nejprve se zeptá na přechod a potom pokračuje jako {{cmd:HATCH}} (`Zadejte vnitřní bod`, `S` pro uzavřené objekty, {{key:Enter}} pro dokončení).

- `Zadejte volbu přechodu [Typ/Jedna barva/Dvě barvy/Úhel/Vycentrovat/Konec] <X>`, opakuje se; pokaždé vypíše přechod tak, jak je nyní.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, nebo jeden z nich obrácený (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Stačí první písmena.
- `O`: jedna barva, potom její odstín od 0 do 1 (0 ji ztmaví do černé, 0,5 je sama barva, 1 ji zesvětlí do bílé). `TW`: první a druhá barva. Barva je číslo od 1 do 255, tři čísla jako `255,128,0`, nebo `#rrggbb`.
- `A`: úhel, pod nímž přechod běží. `C`: vycentrovaný Ano nebo Ne (Ne posune střed přechodu na jednu stranu).
- Odmítne barvu nebo typ, který nezná, a odstín mimo rozsah 0 až 1.

{{cmd:HATCHEDIT}} `G` a Vlastnosti (Přechod) změní přechod později, nebo jakoukoli šrafu přemění na přechod. Přechod se zobrazí na obrazovce i ve vykreslení. DWG 2004 a novější jej uchovávají jako skutečnou šrafu s přechodem; DXF 2000 a DWG 2000 jej uchovávají pro CadCraft, a jiné programy vidí plnou výplň první barvou.

### HATCHGENERATEBOUNDARY

Zkratky: `HGB`. Znovu vytvoří hranici ze šrafy, která ji ztratila. `Vyberte šrafy` (nebo je vyberte předem), potom `Propojit každou šrafu s její novou hranicí, aby ji šrafa následovala? [Ano/Ne] <Ano>`.

- Každá smyčka šrafy se stane uzavřenou mnohočárou na vrstvě šrafy; nové mnohočáry zůstanou vybrané. Zakřivená hrana se vrátí jako krátké rovné kusy, které šrafa drží.
- S volbou Ano šrafa následuje svou novou hranici, jako šrafa vytvořená příkazem {{cmd:HATCH}}. Jeden krok zpět.
- Když nebyla vybrána žádná šrafa, řekne to.

### POINT

Zkratky: `PO`; nebo {{ui:Kreslení}} › {{ui:Více}} › {{ui:Bod}}. Bodové objekty, jeden na každé kliknutí, dokud nestisknete {{key:Enter}}.

- `Zadejte bod`

### XLINE

Zkratky: `XL`; nebo {{ui:Kreslení}} › {{ui:Více}} › {{ui:Konstrukční přímka}}. Konstrukční čáry, nekonečné oběma směry. Viz [Konstrukční čáry a polopřímky](topic:construction-lines).

- `Zadejte bod [Vod/Svi/Úhl/Půl/Odsaz]`, potom `Zadejte bod, kterým čára prochází` pro každou čáru, dokud nestisknete {{key:Enter}}.
- `A`: `Zadejte úhel konstrukční čáry [Reference] <0>`; `R` se nejprve zeptá `Vyberte objekt čáry`.
- `B`: `Zadejte vrchol úhlu`, `Zadejte počáteční bod úhlu`, potom `Zadejte koncový bod úhlu` pro každou čáru.
- `O`: `Zadejte vzdálenost odsazení [Skrz] <Skrz>`, potom `Vyberte objekt čáry` a `Zadejte stranu pro odsazení` (nebo `Zadejte bod, kterým čára prochází`) pro každou čáru.

### RAY

Bez zkratek; nebo {{ui:Kreslení}} › {{ui:Více}} › {{ui:Polopřímka}}. `Zadejte počáteční bod`, potom `Zadejte bod, kterým polopřímka prochází` pro každou polopřímku, dokud nestisknete {{key:Enter}}.

### TEXT

Zkratky: `DT`, `DTEXT`; nebo {{ui:Text}} na panelu nástrojů. Jednořádkový text; každý řádek je samostatný objekt.

- `Zadejte počáteční bod textu [Zarovnat (J)]`
- `J`: `Zadejte volbu [Vlevo/Střed/Vpravo/Uprostřed/TL/MC] <L>`, potom `Zadejte bod vložení textu`
- `Zadejte výšku <aktuální výška textu>`
- `Zadejte úhel natočení textu <0>`
- `Zadejte text`, opakuje se: každé {{key:Enter}} začne další řádek pod ním. {{key:Enter}} na prázdném řádku skončí. {{key:Space}} zde napíše mezeru.

### DIVIDE

Zkratky: `DIV`. {{cmd:DIVIDE}} umístí značky na čáru, oblouk, kružnici, mnohočáru, spline nebo elipsu, které ji rozdělí na stejné díly. Vyberte objekt a potom zadejte počet dílů (2 až 32767). Otevřený objekt dostane o jednu značku méně než dílů; uzavřený dostane značku i na svém začátku. Samotný objekt se nerozřízne. Značky jsou body; `Blok` místo toho žádá blok z tohoto výkresu a to, zda se otáčí podle objektu. Délky po splinech a elipsách se měří po krátkých tětivách. Odmítne text, šrafy a jiné objekty, které nemají délku.

### MEASURE

Zkratky: `ME`. {{cmd:MEASURE}} umístí značku každou danou délku podél čáry, oblouku, kružnice, mnohočáry, splinu nebo elipsy, počítáno od konce nejblíže tam, kde jste klikli (uzavřený objekt: od jeho začátku). Délku zadejte napsáním, nebo dvěma body. Vzdálený konec otevřeného objektu nedostane žádnou značku. `Blok` umístí blok na každou značku místo bodu. Odmítne délku 0, délku větší než objekt a takovou, která by dala více než 32767 značek.

### BOUNDARY

Zkratky: `BO`, `BPOLY`. {{cmd:BOUNDARY}} vytvoří uzavřenou mnohočáru kolem plochy, v níž leží bod, který vyberete, z čar, oblouků, kružnic, mnohočar a křivek, které ji ohraničují na obrazovce. Kusy ležící na oblouku nebo kružnici se vrátí jako oblouky; kusy elips a splinů se vrátí jako krátké rovné úseky. Při zapnutých `Ostrovy` (výchozí nastavení) dostane každá uzavřená plocha uvnitř také svou mnohočáru. Dál klikejte na body; {{key:Enter}} skončí. Objekty, které plochu ohraničují, zůstanou jak jsou. Když žádná uzavřená plocha bod neobsahuje, řekne to.

### BLEND

{{cmd:BLEND}} nakreslí spline mezi konci dvou otevřených křivek. Každou křivku vyberte blízko konce, který se má spojit. `CONtinuity` volí `Tangent` (spline opouští i přichází podél obou křivek) nebo `Smooth` (navíc se ohýbá tak, jak se ohýbají na koncích); volba zůstane pro relaci. Dvě křivky se nemění. Odmítne uzavřené objekty a dva konce, které se už stýkají.

### REGION

Zkratky: `REG`. {{cmd:REGION}} promění uzavřené objekty na oblasti (regiony): ploché plochy, které lze spojovat, řezat a měřit. Vyberte kružnice, uzavřené mnohočáry, uzavřené elipsy nebo uzavřené splines, nebo čáry, oblouky a otevřené mnohočáry, které uzavřou smyčku konec na konec; každá smyčka se stane jednou oblastí a nahradí objekty, z nichž vznikla. Oblouky zůstanou oblouky; elipsy a splines se promění na krátké rovné úseky. Co není uzavřené a nic neuzavírá, zůstane tak, jak je, a řekne se, kolik. Ve výkresu je oblast jednou nebo více uzavřenými mnohočárami držených pohromadě jako nepojmenovaná skupina, takže klik vybere celou oblast a kopie je oblast sama o sobě; ostatní programy, které soubor otevřou, vidí uzavřené mnohočáry.

Jsou-li v výkresu oblasti, pracují {{cmd:UNION}}, {{cmd:SUBTRACT}} a {{cmd:INTERSECT}} na kartě 2D s oblastmi: `UNION` spojí vybrané oblasti do jedné (oblasti, které jsou od sebe, se stanou jednou oblastí o několika obrysech), `SUBTRACT` se zeptá na oblasti, od kterých se odečítá, a potom na ty, které se odečtou (díra zůstane součástí oblasti), `INTERSECT` ponechá plochu, kterou všechny sdílejí. Každý z nich řekne plochu výsledku a je jeden krok zpět. Odmítnou, když by nic nezůstalo, nebo když nic nesdílí. Na kartě 3D a ve výkresu bez oblastí fungují tytéž příkazy na tělesech jako dříve.

## Úpravy

### MTEXT

Zkratky: `MT`, `T`; nebo {{ui:Odstavec}} na panelu nástrojů. Odstavcový text, který se zalamuje do šířky, psaný na místě.

- `Zadejte první roh`
- `Zadejte protilehlý roh [Výška (H)/Zarovnat (J)/Řádkování (L)/Natočení (R)/Šířka (W)]`: šířka mezi oběma rohy je místo, kde se text zalamuje. `H` se zeptá `Zadejte výšku`, `J` `Zadejte zarovnání [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Zadejte násobitel řádkování (0,25 až 4)`, `R` `Zadejte úhel natočení`, `W` `Zadejte šířku (0 pro žádné zalamování)` a přeskočí druhý roh.
- Potom se na výkresu otevře okno: pište, {{key:Enter}} pro nový odstavec, {{key:Mod+Enter}}, nebo klik mimo okno, dokončí; {{key:Esc}} zruší. Jeho lišta nastavuje výšku, řádkování, šířku a zarovnání. Viz [Přidání textu a popisků](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Zkratky: `ED`, `DDEDIT`; nebo dvojklik na text. `Vyberte text k úpravě`, opakuje se, dokud nestisknete {{key:Enter}}: každý se otevře ve stejném okně. Spuštěn nad vybraným nebo dvakrát klepnutým textem, upraví ten jeden a skončí.

### ERASE

Zkratky: `E`, `DELETE`; nebo stiskněte {{key:Delete}} s vybranými objekty.

- `Vyberte objekty` (přeskočí se, když jsou objekty už vybrány)

### MOVE

Zkratky: `M`.

- `Vyberte objekty`
- `Zadejte základní bod [Posunutí (D)]`, `Zadejte druhý bod`
- `D`: `Zadejte posunutí`, napsané jako `dx,dy`.

### COPY

Zkratky: `CO`, `CP`. Kopíruje tolikrát, kolikrát zadáte body.

`Pole` u výzvy druhého bodu vytvoří řádek jedním krokem: zadejte počet prvků (původní se počítá jako jeden), potom bod, kam jde první kopie; ostatní následují se stejnou roztečí. `Přizpůsobit` místo toho udělá tento bod místem poslední kopie a ostatní se rovnoměrně rozmístí mezi.

- `Vyberte objekty`
- `Zadejte základní bod [Posunutí (D)]`
- `Zadejte druhý bod [Zpět (U)]`, opakuje se, dokud nestisknete {{key:Enter}}. `U` vezme zpět poslední kopii.

### ROTATE

Zkratky: `RO`.

- `Vyberte objekty`, `Zadejte základní bod`
- `Zadejte úhel natočení <poslední úhel>`: stupně, kladné proti směru hodinových ručiček; nebo klepněte na bod, abyste otočili směrem k němu.

### SCALE

Zkratky: `SC`.

- `Vyberte objekty`, `Zadejte základní bod`
- `Zadejte měřítko`: napište činitel, například `0.5` nebo `2`. Klepnutý bod dá svou vzdálenost od základního bodu jako činitel.

### MIRROR

Zkratky: `MI`.

- `Vyberte objekty`
- `Zadejte první bod zrcadlové čáry`, `Zadejte druhý bod zrcadlové čáry`
- `Smazat zdrojové objekty? [Ano/Ne] <N>`

### ALIGN

Zkratky: `AL`; nebo {{ui:Úpravy}} › {{ui:Více}} › {{ui:Zarovnat}}.

- `Vyberte objekty`
- `Zadejte první zdrojový bod`, `Zadejte první cílový bod`
- `Zadejte druhý zdrojový bod ({{key:Enter}} pro pokračování)`, `Zadejte druhý cílový bod`
- `Zadejte třetí zdrojový bod ({{key:Enter}} pro pokračování)`, `Zadejte třetí cílový bod`
- Při dvou párech: `Měnit měřítko objektů podle bodů zarovnání? [Ano/Ne] <N>`

Viz [Zarovnání objektů](topic:modify-objects#align-objects).

### ALIGNTO

- `Vyberte objekty` (nebo výběr), `Zarovnat [Vlevo/Střed/Vpravo/Nahoru/Uprostřed/Dolů] <Vlevo>`, `K [Výběr/První/Poslední/Bod] <Výběr>`; `P` se zeptá na bod. Výběr zůstane.

### DISTRIBUTE

- `Vyberte objekty` (alespoň tři), `Rozdělit [Vodorovně/Svisle] <Vodorovně>`, `Rozmístit rovnoměrně [Středy/Mezery] <Mezery>`. Dva vnější zůstanou; výběr zůstane.

### ALIGNPANEL

Zkratky: `ALP`; nebo {{ui:Úpravy}} › {{ui:Více}} › {{ui:Zarovnat a rozdělit}}. Otevře panel, který spouští ALIGNTO a DISTRIBUTE kliknutím.

### LASER

Zkratky: `LASERCUT`; nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Laser…}}. Otevře panel Laser nad výkresem: co každá vrstva dělá (řezat, rýt, gravírovat, vyplnit, obrázek), náhled, G-kód GRBL k uložení, a rámování a odesílání přes Web Serial. Viz [Odeslání výkresu do laseru](topic:laser-cutting).

### STRETCH

Zkratky: `S`; nebo {{ui:Natáhnout}}. `Vyberte objekty k natažení`: přetáhněte křížící okna (nebo napište `C`) přes konce, které se mají pohnout. `Zadejte základní bod [Posunutí (D)]`, `Zadejte druhý bod`. Body uvnitř oken se pohnou: konce čar, vrcholy mnohočáry (oblouky si drží svou výšku), body kót; kružnice, elipsy, text, body a bloky se pohnou celé, když je jejich střed nebo bod vložení uvnitř. Výběr provedený před příkazem si drží křížící okna (a lasa), která jej vytvořila, takže se natahují stejně. Bez okna se objekty pohnou celé.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Zkratky: `AR`; nebo {{ui:Pole}}. `Vyberte objekty`, potom `Zadejte typ pole [Obdélníkové/POlární] <Obdélníkové>` (jen ARRAY).

- Obdélníkové začíná na 4 sloupcích × 3 řádcích, s roztečí 1,5násobku velikosti objektů, ukázáno jako náhled. `Zadejte volbu [Počet (CO)/Rozteč/Sloupce (COL)/Řádky (R)/Konec (X)] <X>`: `CO` se zeptá na sloupce a řádky, `S` na vzdálenosti mezi sloupci a mezi řádky (záporná jde doleva nebo dolů), `COL` a `R` každý na jeden směr.
- Polární se zeptá `Zadejte střed pole`, začíná na 6 prvcích dokola, otočených. `Zadejte volbu [Prvky/Úhel výplně/Otočit prvky/Konec] <X>`: `I` prvky, `F` úhel výplně (+ proti směru hodinových ručiček, − po směru), `ROT` Ano nebo Ne.
- {{key:Enter}} (Konec) vytvoří kopie jako prosté objekty. Jeden krok zpět.
- `AS` (Přidružené) přepíná mezi prostými kopiemi a polem, které zůstane upravitelné: jeden objekt, který později změníte příkazem {{cmd:ARRAYEDIT}}, jeho úchyty nebo ve Vlastnostech. Volba se pamatuje ({{cmd:ARRAYASSOCIATIVITY}}); začíná na prostých kopiích.

### ARRAYPATH

Kopie podél křivky. `Vyberte objekty`, potom `Vyberte křivku dráhy`: čára, oblouk, kružnice, elipsa, mnohočára nebo spline (ne jeden z objektů, které se rozmnožují). Dráha začíná na svém konci bližším k objektům a první prvek jsou objekty tam, kde jsou.

- `Zadejte volbu [Metoda/Prvky/Rozteč/Zarovnat/Přidružené/Konec] <X>`, s náhledem. `M`: `Rozdělit` rozmístí prvky rovnoměrně po celé dráze, `Měřit` dá jeden každou danou vzdálenost. `I`: počet prvků (u Měřit znamená 0 tolik, kolik se vejde; číslo za koncem dráhy se omezí na to, co se vejde). `SP`: vzdálenost mezi prvky podél dráhy (přepne na Měřit). `AL`: Ano otočí každý prvek, aby následoval dráhu, Ne je nechá svisle.
- `AS` jako v {{cmd:ARRAY}}. Je-li zapnuto, pole si udrží vlastní kopii tvaru dráhy: úprava křivky dráhy později prvky nepohne.
- Odmítne dráhu, která není křivka, a jeden prvek.

### ARRAYEDIT

Změní pole vytvořené s Přidruženým. `Vyberte pole` (nebo je vyberte předem). Vypíše, jaké pole je nyní, a potom se ptá, dokud nestisknete {{key:Enter}}:

- Obdélníkové: `COL` sloupce a jejich rozteč, `R` řádky a jejich rozteč, `A` úhel, pod nímž sloupce běží.
- Polární: `I` prvky, `F` úhel výplně, `ROT` otočit prvky Ano nebo Ne.
- Dráha: `M` Rozdělit nebo Měřit, `I` prvky, `SP` rozteč, `AL` zarovnat s dráhou.
- `S` (Zdroj) otevře objekty, které se opakují, samostatně, jako editor bloků. Kreslete a upravujte tam; {{cmd:ARRAYCLOSE}} uloží nebo zahodí, a každý prvek následuje.
- `REP` (Nahradit): `Vyberte nahrazující objekty`, `Zadejte základní bod nahrazujících objektů`, potom klikněte na prvky, které se mají nahradit, a {{key:Enter}}. Ty prvky místo toho ukážou náhradu; nahrazující objekty opustí výkres a žijí v poli. `RES` (Obnovit) ukáže zdrojové objekty v každém prvku znovu.
- Každá změna je jeden krok zpět. Odmítne prosté kopie, prostý odkaz na blok a pole na zamčené vrstvě.

Tytéž čísla jsou ve Vlastnostech v části Pole a pole má úchyty: jeho základní bod ho přesune, úchyt u druhého prvku nastaví rozteč, úchyt za posledním prvkem nastaví počet (u polárního: druhý prvek nastaví, kolik prvků, poslední prvek úhel výplně). {{cmd:EXPLODE}} promění pole zpět na prosté kopie.

### ARRAYCLOSE

Ukončí úpravu zdrojových objektů {{cmd:ARRAYEDIT}}: `Uložit změny zdrojových objektů pole? [Uložit/Zahodit] <Uložit>`. Řekne to, když žádné zdrojové objekty pole otevřené nejsou. {{cmd:BCLOSE}} dělá totéž.

### ARRAYASSOCIATIVITY

`Zadejte novou hodnotu pro ARRAYASSOCIATIVITY (1 = pole zůstanou upravitelná, 0 = prosté kopie)`. Nastaví, na čem začínají {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR a {{cmd:ARRAYPATH}}; jejich volba `AS` mění totéž nastavení. Pamatuje se v tomto prohlížeči.

### OFFSET

Zkratky: `O`. Čáry, oblouky, kružnice a mnohočáry.

Kde se mnohočára posouvá ven a její rovné úseky se na rohu rozejdou, {{cmd:OFFSETGAPTYPE}} rozhodne, jak se mezera uzavře.

- `Zadejte vzdálenost odsazení [Skrz] <poslední vzdálenost, nebo Skrz>`
- `Vyberte objekt k odsazení`, potom `Zadejte bod na straně pro odsazení` (nebo, s volbou Skrz, `Zadejte bod, kterým čára prochází`), opakuje se, dokud nestisknete {{key:Enter}}.

### OFFSETGAPTYPE

- `Mezery na rozích odsazení: 0 prodloužit, 1 zaoblit, 2 zkosit`: jak {{cmd:OFFSET}} uzavírá mezery na vnějších rozích mnohočáry. `0` prodlouží úseky, dokud se nesetkají (výchozí nastavení), `1` je spojí obloukem kolem původního rohu, `2` rovným řezem. Vnitřní rohy a oblouky se nedotknou. Platí pro tuto relaci.

### EXTRIM

{{cmd:EXTRIM}} ořízne všechno na jedné straně hrany. Vyberte řeznou hranu (čáru, oblouk, kružnici, mnohočáru, elipsu, spline nebo konstrukční čáru), potom bod na straně, která se má vyčistit: každá čára, oblouk, kružnice, mnohočára a konstrukční čára, která hranu kříží, přijde o svou část na té straně, kde začíná u hrany. Dokud vybíráte stranu, kusy, které by zmizely, sledují ukazatel. U uzavřené hrany jsou strany vnitřek a vnějšek. Objekty, které se hrany jen dotýkají, a text, šrafy, splines a elipsy, které ji kříží, zůstanou jak jsou. Jeden krok zpět.

### TRIMEXTENDMODE

- `Zadejte novou hodnotu pro TRIMEXTENDMODE (1 Rychlý, 0 Standardní)`: jak začínají {{cmd:TRIM}} a {{cmd:EXTEND}}. `1` Rychlý: každý objekt je řezná hrana nebo hranice. `0` Standardní: nejprve se zeptají na hrany. Také `(setvar "TRIMEXTENDMODE" 0)` v LISPu.

### TRIM

Zkratky: `TR`. Nejprve vypíše `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path`. V režimu Rychlý je každý viditelný objekt řeznou hranou a objekt, který nic neprotíná, se smaže; ve Standardním režimu se nejprve zeptá `Vyberte řezné hrany (Enter = každý objekt)` a řeže jen u nich.

- `Vyberte objekt k oříznutí nebo Shift-vyberte k prodloužení [Řezné hrany (T)/Plot (F)/Křížení (C)/Režim (O)/Hrana (E)/Smazat (R)/Zpět (U)]`, opakuje se: klikněte na kus, který se má odstranit (zešedne a bude čárkovaný, dokud na něm spočívá ukazatel), táhněte cestu přes několik kusů (všechny jdou v jednom kroku), nebo klikněte na dvě prázdná místa pro plot mezi nimi. {{key:Shift}} místo toho prodlužuje. `T` volí řezné hrany (Standardní režim), `F` se ptá na body plotu, `C` dva rohy okna (kusy částečně uvnitř jdou), `O` se zeptá `Zadejte volbu režimu oříznutí [Rychlý/Standardní]`, `E` se zeptá `Zadejte režim prodloužení implicitní hrany [Prodloužit/Neprodlužovat]` (EDGEMODE), `R` smaže objekty, které vyberete, `U` vezme zpět poslední výběr nebo tah. {{key:Enter}} skončí. Viz [Oříznutí a prodloužení](topic:trim-and-extend).

- Klik na šrafu ji ořízne: řezné hrany rozdělí vyšrafovanou plochu a kus, na který jste klikli, se odstraní (na místě, kde byl, nezůstane žádný nakreslený obrys). Šrafa si ponechá svůj vzor nebo přechod; šrafa, která byla spojena se svou hranicí, po tom spojení nemá, protože ji už nevyplňuje. Řekne to, když žádná řezná hrana šrafu tam nerozdělí, když klik je mimo šrafu, a když by nic nezůstalo (použijte {{cmd:ERASE}}). Táhnutá cesta nebo plot šrafy neřeže.

### EXTEND

Zkratky: `EX`. Totéž co TRIM obráceně: `Vyberte objekt k prodloužení nebo Shift-vyberte k oříznutí [Hranice (B)/Plot (F)/Křížení (C)/Režim (O)/Hrana (E)/Zpět (U)]`. Klik prodlouží konec nejbližší k němu k další hranici; táhnutá cesta nebo plot prodlouží každý objekt, který protíná; {{key:Shift}} ořízne. `B` volí hraniční hrany (Standardní režim). Režim a Hrana jsou sdíleny s TRIM.

### LINKVIEWS

Zkratky: `SYNCVIEWS`; nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Propojit pohledy oken}}, nebo ikona propojení na kartách výkresu. `Propojit pohledy oken [ZAP/VYP]` ({{key:Enter}} přepne na druhý stav): dokud je zapnuto, posun nebo přiblížení v aktivním podokně posune každé podokno ukazující stejný druh prostoru. Viz [Rozdělení obrazovky](topic:split-screen).

### OPENIN3D

Bez zkratek; nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Otevřít v ModelCraftu}}, kde aplikace 3D modelování přebírá předaný výkres. Otevře jej tam na nové kartě jako DWG (nic se nenahrává). Když prohlížeč kartu zablokuje, řekne to.

### LASSOMODE

`Zadejte novou hodnotu pro LASSOMODE (1 = lasso, 0 = obdélník)`: co dělá stisknutí a tažení na prázdném místě. Stejné jako Nastavení › CadCraft › Tažení pro výběr. Viz [Výběr lassem](topic:lasso-selection).

### FILLET

Zkratky: `F`. Čáry, oblouky, kružnice a mnohočáry. Nejprve vypíše `Current settings: Mode = TRIM, Radius = 0`.

- `Vyberte první objekt [Zpět (U)/Mnohočára (P)/Poloměr (R)/Oříznout (T)/Více (M)]`
  - `R` se zeptá `Zadejte poloměr zaoblení <poslední>`. `T` se zeptá `Zadejte volbu režimu oříznutí [Oříznout/Neořezávat]`: s volbou Neořezávat zůstanou objekty, jak jsou, a přidá se jen oblouk.
  - `M` nechá příkaz běžet pro další rohy, dokud nestisknete {{key:Enter}}; `U` vezme zpět poslední roh, aniž by příkaz skončil.
  - `P` se zeptá `Vyberte 2D mnohočáru [Poloměr]` a zaoblí každý roh, kde se stýkají dva rovné úseky. Zaoblení, které už má, se nahradí novým poloměrem; poloměr 0 je odstraní. Rohy, jejichž strany jsou pro poloměr příliš krátké, se nechají a spočítají.
- `Vyberte druhý objekt, nebo Shift-vyberte pro použití rohu [Poloměr (R)]`. Podržte {{key:Shift}} při kliknutí pro ostrý roh, bez ohledu na poloměr.

Klikněte na každý objekt na části, kterou chcete zachovat. Dvě čáry, které se nestýkají, se prodlouží. Dvě rovnoběžné čáry dostanou půlkruh přes mezeru, na konci první čáry nejbližším vašemu kliknutí. Kružnice se nikdy neřeže. Dva sousední úseky jedné mnohočáry dostanou oblouk uvnitř mnohočáry; mnohočára a jiný objekt fungují, když řez dopadne na první nebo poslední úsek mnohočáry.

### CHAMFER

Zkratky: `CHA`. Čáry a rovné úseky mnohočar. Nejprve vypíše aktuální vzdálenosti (nebo délku a úhel).

- `Vyberte první čáru [Zpět (U)/Mnohočára (P)/Vzdálenost (D)/Úhel (A)/Oříznout (T)/Metoda (E)/Více (M)]`
  - `D` se zeptá `Zadejte první vzdálenost sražení <poslední>` a `Zadejte druhou vzdálenost sražení <první>`: první se odřízne od první čáry, kterou vyberete, druhá od druhé.
  - `A` se zeptá `Zadejte délku sražení na první čáře` a `Zadejte úhel sražení od první čáry`.
  - `E` (Metoda) volí, která ze dvou další sražení použije. `T`, `M`, `U` a `P` fungují jako u {{cmd:FILLET}}.
- `Vyberte druhou čáru, nebo Shift-vyberte pro použití rohu [Vzdálenost/Úhel/Metoda (E)]`. {{key:Shift}}+klik udělá ostrý roh.

Vzdálenost delší než čára se odmítne (`Distance is too large.`).

### BREAK a BREAKATPOINT

Zkratky: `BR`. `Vyberte objekt` (kde klikáte, je první bod), `Zadejte druhý bod přerušení [První bod (F)]`; `F` se zeptá `Zadejte první bod přerušení` a `Zadejte druhý bod přerušení`. Část mezi nimi zmizí; u kružnice proti směru hodinových ručiček od prvního bodu. BREAKATPOINT se zeptá `Zadejte bod přerušení` a rozdělí objekt v něm na dva (ne kružnici).

### LENGTHEN

Zkratky: `LEN`. `Vyberte objekt k měření [Rozdíl (DE)/Procento (P)/Celkem (T)/Dynamicky (DY)]`: výběr vypíše `Current length` (a úhel oblouku) a znovu se zeptá. `DE` se zeptá `Zadejte změnu délky (záporná zkracuje) [Úhel]`, `P` `Zadejte procentuální délku`, `T` `Zadejte celkovou délku [Úhel]`, `DY` táhne. Potom `Vyberte objekt ke změně [Zpět (U)]`, opakuje se: pohne se konec nejbližší ke kliknutí. Čáry, oblouky a otevřené mnohočáry.

### JOIN

Zkratky: `J`. `Vyberte objekty ke spojení`. Čáry, oblouky a otevřené mnohočáry, které se stýkají konec na konec, se stanou mnohočárami (uzavřenými, když se řetěz uzavře); čáry na jedné přímce se stanou jednou čárou; oblouky jedné kružnice se stanou jedním obloukem nebo kružnicí. Historie řekne, kolik objektů se spojilo a kolik ne.

### MATCHPROP

Zkratky: `MA`, `PAINTER`. `Vyberte zdrojový objekt`, potom `Vyberte cílové objekty [Nastavení (S)]` a {{key:Enter}}. Zkopíruje vrstvu a barvu a mezi objekty stejného druhu výšku a šířku textu, velikosti kót nebo vzor šrafy. `S` se zeptá `Zapnout nebo vypnout vlastnost [Barva/Vrstva/Text/Kóta/Šrafa]`, opakuje se, dokud nestisknete {{key:Enter}}; volba se pamatuje pro relaci.

### EXPLODE

Zkratky: `X`. Mnohočáry se stanou čarami a oblouky, odkazy na bloky se stanou svými objekty, kóty se stanou čarami, šipkami a textem. Pole, které zůstává upravitelné ({{cmd:ARRAYEDIT}}), se stane prostými kopiemi svých objektů.

- `Vyberte objekty`

### GROUP

Zkratky: `G`. {{cmd:GROUP}} dá vybraným objektům název, který sdílejí. Vyberte objekty, potom napište název (bez mezer; `?` vypíše skupiny; {{key:Enter}} vytvoří skupinu bez názvu) a u pojmenované skupiny volitelný popis. Od té chvíle klik na jeden z nich, nebo okno, které jeden zachytí, vybere všechny, takže se pohnou, zkopírují a smažou společně; každý objekt je přesto sám. Objekt může být ve více skupinách. Kopie celé skupiny je nová skupina bez názvu; kopie jednoho člena samotného se připojí ke skupině. Skupiny patří prostoru, v němž vznikly (model nebo list). Zachovávají se, když uložíte jako DWG nebo DXF a soubor znovu otevřete v CadCraftu; soubory DXF 2000 je nesou také jako objekty skupin pro ostatní programy, a skupiny vytvořené v jiném programu se čtou, když se otevře DXF nebo DWG.

### UNGROUP

{{cmd:UNGROUP}} rozebere skupiny: vyberte objekty skupin (každá skupina, do níž patří, se rozebere), nebo napište `Name` a název skupiny. Objekty zůstanou ve výkresu. Jeden krok zpět skupiny vrátí.

### GROUPEDIT

{{cmd:GROUPEDIT}} změní jednu skupinu. Vyberte jeden z jejích objektů, nebo `Name` a její název; skupina, která je už vybrána, se vezme tak, jak je. Potom: `Add` objekty (vybírané jeden po druhém, ne skupinu po skupině), `Remove` objekty, `REName` skupinu, změnit její `Description`, nebo nastavit `Selectable` (zda klik na jeden objekt vybere celou skupinu). `eXit` nebo {{key:Enter}} skončí. Skupina bez objektů zmizí.

### PICKSTYLE

- `Výběr skupiny: 0 klik vybere jeden objekt, 1 celou jeho skupinu`: s `1` (výchozí nastavení) klik nebo okno na objektu ve skupině vybere celou skupinu; s `0` jednotlivé objekty, takže můžete upravit jednoho člena. Platí pro tuto relaci.

## Schránka

Vlastní schránka CadCraftu: funguje uvnitř jednoho výkresu, mezi výkresy a mezi kartami CadCraftu v tomto prohlížeči. Viz [Kopírování, vkládání a duplikování](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, nebo {{ui:Kopírovat}} ve skupině {{ui:Úpravy}}. Zkopíruje objekty do schránky i s bloky a vrstvami, které používají. Objekty zůstanou vybrány.

- `Vyberte objekty ke zkopírování` (přeskočí se, když jsou objekty už vybrány)

### CUTCLIP

{{key:Mod+X}}, nebo {{ui:Vyjmout}} v nabídce {{ui:Více}}. Zkopíruje objekty do schránky a potom je smaže (jeden krok zpět).

- `Vyberte objekty k vyjmutí` (přeskočí se, když jsou objekty už vybrány)

### COPYBASE

Zkopíruje objekty do schránky se základním bodem, který vyberete; vložení umístí tento bod.

- `Zadejte základní bod`
- `Vyberte objekty ke zkopírování`

### PASTECLIP

{{key:Mod+V}}, nebo {{ui:Vložit}} ve skupině {{ui:Úpravy}}. Kopie následuje kurzor, visí od levého dolního rohu svého rozsahu (nebo od jeho středu, nebo od bodu {{cmd:COPYBASE}}; viz [Nastavení CadCraftu](topic:settings)).

- `Zadejte bod vložení`

Vložené objekty jsou vybrány. Blok, který výkres už má pod stejným názvem, si ponechá definici tohoto výkresu.

Je-li oblast zkopírovaná v MarkupCraftu novější než to, co zkopíroval CadCraft (a je mladší než 6 hodin), {{key:Mod+V}} a `PASTECLIP` vloží místo toho tuto oblast: viz `PASTEAREA`.

### PASTEAREA

Zkratky: `PAREA`. {{ui:Vložit zkopírovanou oblast}} v nabídce {{ui:Více}}. Vloží oblast zkopírovanou v MarkupCraftu pomocí {{ui:Kopírovat oblast}} jako obrázek ve skutečné velikosti. Viz [Obrázky ve výkresu](topic:pictures).

- `Zadejte levý dolní roh zkopírované oblasti`
- `Změnit měřítko její velikosti papíru o (100 pro list 1:100; Body: dva body na ní a jejich skutečná vzdálenost) [Body] <1>` (jen když list neměl měřítko výkresu): číslo, {{key:Enter}} pro velikost papíru, nebo `P`, potom `První bod na vložené oblasti`, `Druhý bod na vložené oblasti` a jejich skutečná vzdálenost.

### PASTEORIG

{{key:Mod+Shift+V}}, nebo {{ui:Vložit na stejné místo}} v nabídce {{ui:Více}}. Vloží na souřadnice, z nichž byly objekty zkopírovány. Nic se neptá.

### DUPLICATE

Zkratky: `DUP`. {{key:Mod+D}}, nebo {{ui:Duplikovat a přesunout}} v nabídce {{ui:Více}}. Kopie objektů se pohybuje s ukazatelem od místa, kde je; {{key:Esc}} nenechá nic. Nepoužívá schránku.

- `Vyberte objekty k duplikování` (přeskočí se, když jsou objekty už vybrány)
- `Zadejte, kam kopie půjde (Esc nenechá nic)`: klik, napsaný bod, `@dx,dy` (od místa, kde byl ukazatel), nebo vzdálenost směrem ke kurzoru.

### SELECT

Zeptá se `Vyberte objekty` (se všemi volbami níže) a nechá, co jste zvolili, vybráno pro další příkaz, nebo pro `P` později.

### QSELECT

Zkratky: `QS`. V prohlížeči dialog {{ui:Rychlý výběr}} (viz [Výběr objektů](topic:select-objects#select-by-a-rule-quick-select)). Bez něj se příkazový řádek zeptá `Zadejte typ objektu`, `Zadejte vlastnost`, `Zadejte operátor [=/<>/>/</*/Vybrat vše] <=>` a `Zadejte hodnotu`. Shody se stanou výběrem.

### SELECTSIMILAR

Zkratky: `SIM`. `Vyberte objekty [Nastavení (SE)]` (nebo aktuální výběr): vybere každý objekt stejného typu se stejnou vrstvou a barvou (a názvem bloku, vzorem šrafy). `SE` se zeptá `Zapnout nebo vypnout vlastnost [Vrstva (LA)/Barva (CO)/Název (NA)/Vzor (PA)/Výška (HE)]`, opakuje se, dokud nestisknete {{key:Enter}}.

### FIND

Bez zkratek; nebo {{ui:Úpravy}} › {{ui:Více}} › {{ui:Najít a nahradit}}. V prohlížeči dialog {{ui:Najít a nahradit}} (viz [Přidání textu a popisků](topic:text#find-and-replace-words)). Bez něj: `Zadejte text k nalezení`, potom `Zadejte text náhrady ({{key:Enter}}: vybrat nalezené)`. Hledá v textu, hodnotách atributů a textu kót, na otevřené kartě, nebo ve výběru.

### SELECTALL a DESELECT

`SELECTALL` (zkratka `AI_SELALL`, {{key:Mod+A}}) vybere každý objekt, který můžete na otevřené kartě upravit. `DESELECT` (zkratky `AI_DESELECT`, `SELECTNONE`; nebo {{key:Esc}}) zruší výběr.

## Kóty

### DIMLINEAR

Zkratky: `DLI`, `DIMLIN`. Vodorovná nebo svislá vzdálenost.

- `Zadejte první počátek pomocné čáry [Vybrat objekt (S)]` ({{key:Enter}} nebo `S`: `Vyberte objekt ke kótování`, potom klikněte na čáru, oblouk, kružnici nebo úsek mnohočáry)
- `Zadejte druhý počátek pomocné čáry`
- `Zadejte umístění kótovací čáry [Text/Vodorovně/Svisle/Otočeně]`. `T` se zeptá na text (`<>` je naměřená hodnota), `H` a `V` pevně určují směr, `R` se zeptá `Zadejte úhel kótovací čáry <0>`.

### DIMALIGNED

Zkratky: `DAL`, `DIMALI`. Skutečná vzdálenost mezi dvěma body.

- Počátky jako u {{cmd:DIMLINEAR}}, potom `Zadejte umístění kótovací čáry [Text]`.

### DIMANGULAR

Zkratky: `DAN`, `DIMANG`.

- `Vyberte oblouk, kružnici nebo čáru, nebo Enter pro vrchol`
- Oblouk: jeho úhel. Kružnice: `Zadejte druhý koncový bod úhlu`. Čára: `Vyberte druhou čáru`. Enter: `Zadejte vrchol úhlu`, `Zadejte první koncový bod úhlu`, `Zadejte druhý koncový bod úhlu`.
- `Zadejte umístění kótovací čáry [Text]`: klikněte dovnitř úhlu, který měříte.

### DIMRADIUS a DIMDIAMETER

Zkratky: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Vyberte oblouk nebo kružnici`, potom `Zadejte umístění kótovací čáry [Text]`.

### DIMCONTINUE

Zkratky: `DCO`, `DIMCONT`. Pokračuje od poslední vytvořené lineární nebo zarovnané kóty (nebo se zeptá `Vyberte lineární nebo zarovnanou kótu`).

- `Zadejte druhý počátek pomocné čáry [Zpět (U)]`, opakuje se, dokud nestisknete {{key:Enter}}.

### DIMBASELINE

Zkratky: `DBA`, `DIMBASE`. Jako {{cmd:DIMCONTINUE}}, ale každá kóta začíná od prvního počátku a je naskládána dále ven.

### DIMORDINATE

Zkratky: `DOR`, `DIMORD`. `Zadejte umístění prvku`, potom `Zadejte koncový bod výnosky [Xdatum/Ydatum/Text]`. Napíše, jak daleko je prvek od počátku UCS podél X nebo podél Y, na výnosce: výnoska, která běží hlavně nahoru nebo dolů, se čte jako X, ta, která běží do stran, jako Y; `Xdatum` a `Ydatum` to určí pevně. Počátek nastavte nejprve příkazem {{cmd:UCS}} (bez něj je to 0,0 výkresu). Úchyty pohybují prvkem, počátkem a koncem výnosky a hodnota následuje. Uloží se jako skutečná kóta souřadnice v DWG a DXF. Odmítne konec výnosky na samotném prvku.

### DIMARC

Zkratky: `DAR`. `Vyberte oblouk nebo úsek oblouku mnohočáry`, potom `Zadejte umístění kóty délky oblouku [Text]`. Měří podél oblouku (ne po tětivě) a před hodnotu napíše symbol oblouku. Odmítne celou kružnici, čáru nebo rovný úsek mnohočáry. DWG ji uchová jako kótu délky oblouku; DXF ji uchová jako úhlovou kótu s délkou jako textem, a CadCraft ji při otevření znovu zobrazí jako kótu délky oblouku.

### DIMJOGGED

Zkratky: `DJO`, `JOG`. `Vyberte oblouk nebo kružnici`, `Zadejte přepsání umístění středu`, `Zadejte umístění zalomení`. Kóta poloměru pro křivku, jejíž střed je daleko nebo mimo list: čára kóty začíná v bodě, který zadáte, místo středu, se zalomením v sobě, a stále napíše skutečný poloměr. DWG ji uchová jako zalomenou kótu poloměru; DXF ji uchová jako kótu poloměru a CadCraft ji při otevření znovu zobrazí zalomenou.

### DIMJOGLINE

Zkratky: `DJL`. `Vyberte kótu k přidání zalomení [Odstranit]`, potom `Zadejte umístění zalomení (nebo stiskněte Enter)`. Dá symbol zalomení na čáru lineární nebo zarovnané kóty, aby ukázal, že vzdálenost není nakreslena v měřítku; hodnota se nemění. `Odstranit` jej sejme. Odmítne jiné druhy kót.

### QDIM

Bez zkratek. `Vyberte geometrii ke kótování`, potom `Zadejte polohu kótovací čáry [Spojitě/Odsazeně/Zpět/Souřadnice/Poloměr/Průměr/bodPočátku]`. Okótuje několik objektů najednou, od konců čar a úseků mnohočar, středů kružnic a oblouků, bodů a odkazů na bloky. Poloha nad nebo pod objekty měří napříč, poloha vedle nich měří nahoru. `Spojitě` řetězí body, `Zpět` měří všechny od prvního, `Odsazeně` vnoří páry od středu ven, `Souřadnice` dá každému bodu jeho vzdálenost od počátku (`bodPočátku` vybere nový), `Poloměr` a `Průměr` okótují každou kružnici a oblouk, který vyberete. Režim se pamatuje. Vše, co vytvoří, je jeden krok zpět. Řekne to, když jsou bodů méně než dva, nebo když nejsou žádné oblouky nebo kružnice pro Poloměr a Průměr.

### DIMBREAK

Zkratky: `DBREAK`. `Vyberte kóty k přidání nebo odebrání přerušení`, potom `Přerušit tam, kde kříží jiné objekty [Auto/Ručně/Odstranit] <Auto>`. `Auto` nechá mezeru v kótovací a pomocné čáře všude, kde ji kříží jiný objekt, a mezery znovu spočítá, když se ty objekty nebo kóta pohnou. `Ručně` (jedna kóta) se zeptá na dva body a nechá mezeru mezi nimi. `Odstranit` odstraní každou mezeru. Mezera je 1,5násobek výšky textu kóty.

### DIMSPACE

Bez zkratek. `Vyberte základní kótu`, `Vyberte kóty k rozmístění`, `Zadejte hodnotu rozestupu nebo Auto <Auto>`. Posune kótovací čáry rovnoběžných lineárních a zarovnaných kót (nebo úhlových kolem téhož vrcholu) tak, aby stály stejně daleko od sebe, počítáno od základní kóty, každá na své straně. `0` je zarovná se základní; `Auto` je dvojnásobek výšky textu základní kóty. Kóty, které nejsou rovnoběžné se základní, se nechají být.

### DIMINSPECT

Bez zkratek. `Vyberte kóty`, `Tvar rámečku kontroly [Kruh/Úhlový/Žádný/odstranit] <Kruh>`, `Zadejte popisek`, `Zadejte četnost kontroly <100%>`. Nakreslí rámeček kolem hodnoty s popiskem před ní a četností kontroly za ní. `odstranit` rámeček sejme. Text tolerance zůstává s hodnotou.

### DIMOVERRIDE

Zkratky: `DOV`, `DIMOVER`. `Zadejte název proměnné kóty k přepsání, nebo Vymazat`, `Zadejte novou hodnotu pro …`, znovu, dokud nestisknete {{key:Enter}}, potom `Vyberte kóty`. Změní tato nastavení jen na vybraných kótách; styl kóty se nemění. Bere proměnné, které jsou číslo nebo přepínač (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Vymazat` vrátí vybrané kóty na jejich styl. Odmítne název, který není takovou proměnnou, a hodnotu, kterou nemůže přijmout.

### DIMREASSOCIATE

Zkratky: `DRE`, `DIMREASSOC`. `Vyberte kóty`, potom pro každou její počátky pomocných čar (`Zadejte první počátek pomocné čáry na objektu`: přichytí se ke konci nebo středu čáry, k rohu mnohočáry, ke středu; {{key:Enter}} ponechá ten bod volný), nebo pro kótu poloměru, průměru, zalomeného poloměru nebo délky oblouku `Vyberte oblouk nebo kružnici`. Kóta je potom připojena k těmto objektům: když se pohnou nebo změní velikost, následuje je ve stejném kroku zpět a znovu se měří. Ruční pohnutí připojeným bodem nebo smazání objektu to připojení ukončí. Připojení se ukládá v DWG a DXF 2000 jako vlastní data CadCraftu; ostatní programy vidí obyčejnou kótu.

### DIMDISASSOCIATE

Zkratky: `DDA`, `DIMDISASSOC`. `Vyberte kóty`. Uvolní je od objektů, ke kterým jsou připojeny; nic se nepohne.

### CENTERMARK

Zkratky: `CM`, `DIMCENTER`, `DCE`. `Vyberte kružnici nebo oblouk pro přidání značky středu`, opakuje se, dokud nestisknete {{key:Enter}}. Nakreslí kříž ve středu a čtyři osové čáry těsně za křivkou (typ čáry CENTER), jako prosté čáry na aktuální vrstvě; velikost se odvíjí od velikosti šipky a celkového měřítka aktuálního nastavení kót, otočena podle UCS. Nesledují kružnici, když se pohne.

### CENTERLINE

Zkratky: `CL`. `Vyberte první čáru`, `Vyberte druhou čáru`. Nakreslí čáru uprostřed mezi dvěma čarami (podél osy úhlu, když se stýkají), o něco delší, než jsou, v typu čáry CENTER. Je to prostá čára: nesleduje dvě čáry.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Bez zkratek. Každá se zeptá `Zadejte novou hodnotu pro … <aktuální>` a nastaví tuto velikost pro **nové** kóty: celkové měřítko, výšku textu, velikost šipky, počet desetinných míst (až 8), mezeru kolem textu, prodloužení za kótovací čáru, odsazení od počátku. Viz [Nastavení velikostí kót](topic:dimension-settings).

### DIMLUNIT

Nastavení kóty: formát délek jen u nových kót (1 vědecký, 2 desetinný, 3 inženýrský, 4 stavební, 5 zlomkový).

### DIMSTYLE a -DIMSTYLE

Zkratky: `DST`, `DDIM`, `D`. Správce stylů kót: {{ui:Nastavit aktuální}}, {{ui:Nový…}}, {{ui:Změnit…}}, {{ui:Přejmenovat…}}, {{ui:Smazat}}, {{ui:Porovnat…}}, {{ui:Použít na vybrané}}. `-DIMSTYLE` na příkazovém řádku: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Viz [Nastavení velikostí kót](topic:dimension-settings#named-dimension-styles).

### DIMEDIT a DIMTEDIT

`DIMEDIT` (`DED`): `Úprava kóty [Domů/Nový/Otočit/Šikmo] <Domů>`, potom kóty (nebo ty, které jsou už vybrány). Nový se zeptá na text (`<>` = naměřená hodnota); Otočit na úhel (0 vrátí text zpět); Šikmo na úhel pomocných čar od osy X ({{key:Enter}} = žádný; jen lineární a zarovnané kóty). `DIMTEDIT` (`DIMTED`): `Text kóty [Vlevo/Vpravo/Střed/Domů/Úhel] <Střed>`. Viz [Nastavení velikostí kót](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Zkratky: `DTU`. `Jednotky v textu nových kót [Jednotky výkresu/mm/cm/m/km]`, nebo s vybranými kótami `Jednotky v textu vybraných kót`. Zapíše naměřenou délku v této jednotce s jednotkou za ní (DIMLFAC a přípona DIMPOST); `D` se vrátí na jednotky výkresu. Viz [Kóty v mm, cm, m nebo km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Zkratky: `RC`. Vypíše `Arc length: … Type: …`, potom `Zadejte první bod [Délka oblouku/Objekt/Obdélník/Mnohoúhelník/Volná ruka]`. Obdélník se zeptá `Zadejte protilehlý roh`; Mnohoúhelník `Zadejte další bod (Enter uzavře oblak) [Zpět (U)]`; Volná ruka sleduje ukazatel, dokud neklikněte nebo nestisknete {{key:Enter}}; `O` se zeptá `Vyberte objekt` a `Obrátit směr? [Ano/Ne] <N>` a promění objekt v oblak. `A` se zeptá `Zadejte délku každého oblouku`. `R`, `P` a `F` volí druh pro další oblak. Výsledek je uzavřená mnohočára z oblouků.

### MLEADER

Zkratky: `MLD`; nebo {{ui:Výnoska}}. `Zadejte umístění hrotu výnosky [Velikost hrotu/Vzdálenost přistání/Blok]`, `Zadejte umístění přistání výnosky`, potom text v okně na místě (nebo bez něj `Zadejte text (prázdný řádek skončí)`). `Blok` se nejprve zeptá na název bloku a víceúrovňová výnoska ukáže ten blok místo textu. Další výnosové čáry: {{cmd:MLEADEREDIT}}. Uloží se jako skutečná víceúrovňová výnoska v DWG; DXF uchová čáry, hrot a text, které kreslí.

### MLEADEREDIT

Zkratky: `MLE`. `Vyberte víceúrovňovou výnosku`, potom `Zadejte umístění hrotu výnosky [Odstranit výnosky/Obsah bloku/Obsah textu]`: každý bod přidá výnosovou čáru z nového hrotu ke stejnému přistání, dokud nestisknete {{key:Enter}}. `Odstranit výnosky` potom sejme výnosovou čáru, na kterou klikнete (víceúrovňová výnoska si ponechá aspoň jednu). `Obsah bloku` se zeptá na název bloku a ukáže ten blok místo textu (zeptá se na jeho atributy); `Obsah textu` vrátí text. Každá výnosová čára má vlastní úchyt. DWG uchová každou výnosovou čáru a blok v jedné víceúrovňové výnoské.

### MLEADERALIGN

Zkratky: `MLA`. `Vyberte víceúrovňové výnosky`, potom `Vyberte víceúrovňovou výnosku, k níž zarovnat [Rozdělit/Rozteč/Použít aktuální rozteč]` a `Zadejte směr`. Přesune přistání ostatních víceúrovňových výnosek (a jejich text nebo blok) na čáru procházející přistáním vybrané v tom směru; hroty zůstanou, kam ukazují. `Rozteč` jim také dá stejnou vzdálenost od sebe; `Rozdělit` se zeptá na dva body a rozmístí je mezi nimi rovnoměrně. Potřebuje alespoň dvě víceúrovňové výnosky.

### MLEADERCOLLECT

Zkratky: `MLC`. `Vyberte víceúrovňové výnosky`, potom `Zadejte umístění sloučené víceúrovňové výnosky [Svisle/Vodorovně]` ({{key:Enter}} ponechá místo první). Udělá z několika jednu víceúrovňovou výnosku: obsah bloků jde do nového bloku, který drží každý blok vedle sebe nebo jeden pod druhým; obsah textu se stane jednou poznámkou s řádkem pro každou. První víceúrovňová výnoska si ponechá své výnosové čáry; ostatní se odstraní. Odmítne směs textového a blokového obsahu.

### TABLE

Zkratky: `TB`; nebo {{ui:Kótování}} › {{ui:Více}} › {{ui:Tabulka}}. Vytvoří tabulku: jeden objekt, který přesunete, zkopírujete, otočíte, zvětšíte a vykreslíte jako každý jiný, s buňkami uloženými jako data.

- `Počet řádků dat nebo [Vložit/Soubor/Styl] <3>`, potom `Počet sloupců <3>`, `Výška textu` a `Levý horní roh tabulky`. Tabulka dostane řádek nadpisu (jednu sloučenou buňku) a řádek záhlaví nad datovými řádky.
- `P`: tabulka z buněk tabulkového procesoru ve schránce (text s tabulátorem mezi buňkami). Stisknutí {{key:Ctrl+V}} s takovými buňkami ve schránce udělá totéž, pokud není novější kopie CadCraftu (nebo CadCraft nepozná, který je novější: pak vloží svou kopii a řekne to). `F`: tabulka ze souboru `.csv` nebo souboru oddělovaného tabulátory. První řádek se stane řádkem záhlaví; šířky sloupců se přizpůsobí textu.
- `S`: vyberte styl tabulky pro tuto tabulku (viz {{cmd:TABLESTYLE}}).
- Odmítne počet řádků nebo sloupců, který není celé číslo, a více buněk, než se tabulka vejde (2 000 řádků, 200 sloupců, 40 000 buněk).
- {{cmd:EXPLODE}} promění tabulku na čáry a text. Uložená jako DWG je tabulka skutečným objektem tabulky, který mohou ostatní programy upravit; uložená jako DXF je to blok, který ji kreslí, a CadCraft ji při otevření znovu zobrazí jako tabulku.

### TABLEDIT

Zkratky: `TABLEEDIT`, `TABEDIT`; nebo dvojklik na buňku. Upraví tabulku.

- `Vyberte buňku, do které psát ({{key:Enter}} pro dokončení), nebo [Řádek (R)/Sloupec (C)/Velikost (S)/Sloučit (M)/Zrušit sloučení (U)/Zarovnat (A)/Výška (H)/Druh (K)/Vymazat (CL)]`. Klikněte na buňku, nebo když je tabulka vybrána, napište její název (`B3`: sloupec B, řádek 3; řádek nadpisu je řádek 1). V prohlížeči se nad buňkou otevře okno: {{key:Enter}} ponechá text, {{key:Tab}} přejde na další buňku, {{key:Alt+Enter}} začne nový řádek, {{key:Esc}} nechá buňku, jaká byla.
- Text, který začíná `=`, je vzorec: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, s `+ - * / ^`, závorkami a funkcemi jako `sqrt` a `round`. Buňka ukáže hodnotu; vzorec, který pojmenuje svou vlastní buňku, buňku mimo tabulku, nebo buňku bez čísla, ukáže `####` a příkazový řádek řekne proč.
- `R` / `C`: `Vložit` nebo `Smazat` řádky či sloupce u vybrané buňky (kolik, a nad nebo pod, vlevo nebo vpravo). Vzorce následují buňky, které pojmenují.
- `S`: šířka sloupce a výška řádku. Řádek není nikdy nižší, než jeho text potřebuje. Vybraná tabulka má také úchyt na okraji každého sloupce a každého řádku.
- `M`: sloučit od jedné vybrané buňky k druhé; `U`: zrušit sloučení. `A`: zarovnání (`TL` vlevo nahoře … `MC` uprostřed … `BR` vpravo dole). `H`: vlastní výška textu této buňky (0 = styl). `K`: udělat z řádku nadpis, záhlaví nebo datový řádek. `CL`: vyprázdnit buňku.
- Odmítne tabulku na zamčené vrstvě, smazání každého řádku nebo sloupce, a sloučení, které by rozřezalo jinou sloučenou buňku na dvě.

### TABLESTYLE

Zkratky: `TS`. Vypíše styly tabulek s počtem tabulek, které každý používá, potom `Styl tabulky: [Nový/Nastavit/Upravit/Smazat/Použít]`.

- Styl drží výšku textu a zarovnání nadpisu, záhlaví a datových řádků, okraj buněk a které ohraničení se kreslí (vnější, mezi řádky, mezi sloupci).
- `N` vytvoří styl z aktuálního a udělá jej aktuálním; `S` nastaví aktuální styl (nové tabulky ho dostanou); `E` upraví jeden: tabulky, které ho používají, se překreslí; `A` dá vybraným tabulkám aktuální styl; `D` smaže jeden (ne Standard, ne aktuální; tabulky, které jej používaly, si ponechají svůj vzhled).
- Styly se ukládají s výkresem (DWG a DXF).

### TABLEEXPORT

Uloží, co tabulka ukazuje, jako soubor CSV (vzorec jako svou hodnotu). `Vyberte tabulku`, nebo ji vyberte předem. Textové buňky, které začínají `=`, `+`, `-` nebo `@`, dostanou úvodní `'`, aby je tabulkový procesor nespustil.

### TABLEPASTE

Zkratky: `PASTETABLE`. Vytvoří tabulku z buněk tabulkového procesoru ve schránce a potom se zeptá na levý horní roh. Totéž jako {{cmd:TABLE}} › `Vložit`.

### DATALINK

Zkratky: `DL`. `Datové propojení: [Nový/Seznam/Odstranit] <Nový>`. `N` se zeptá na soubor CSV, umístí tabulku z něj a zapamatuje si jeho název; `L` vypíše propojení se souborem, velikostí, časem přečtení a počtem tabulek, které jej používají; `R` odstraní propojení (jeho tabulky zůstanou prostými tabulkami).

### DATALINKUPDATE

Zkratky: `DLU`. Znovu přečte soubor datového propojení a znovu naplní tabulky s ním spojené (řádky a sloupce se přidají nebo odeberou, aby odpovídaly). Prohlížeč nemůže otevřít soubor sám, takže se zeptá, abyste jej vybrali znovu. S několika propojeními se zeptá, které.

### FIELD

Vloží pole do výkresu: text, který si spočítá sám. `Pole: [Datum/Název souboru/List/Vlastnost/Objekt/Výraz/Kód] <Datum>`:

- `D`: teď, nebo uložené, vytvořené či vykreslené datum, a formát (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: název souboru, s nebo bez přípony. `S`: číslo listu, jeho název, nebo kolik je listů. `P`: vlastnost výkresu podle názvu (viz {{cmd:DWGPROPS}}). `O`: vyberte objekt, potom co číst (plocha, délka, obvod, poloměr, průměr, vrstva, název, x, y, text, natočení, barva) a desetinná místa. `E`: vzorec. `C`: text s kódy napsanými tak, jak jsou, například `Sheet %<sheetnumber>% of %<sheetcount>%`.
- Potom `Vyberte text, buňku tabulky nebo blok s atributy, do kterého se vloží (Enter: nový text)`: vybraný text dostane pole připojené za svůj obsah; buňka tabulky také; odkaz na blok se zeptá, který atribut; {{key:Enter}} se zeptá na výšku a bod pro nový text.
- Na obrazovce má pole světle šedé pozadí; vykreslení ani PDF je nikdy nemají. Ruční psaní přes text pole pole ukončí. Pole, které nelze spočítat, ukáže `####`.
- Pole objektu najde svůj objekt podle klíče, který CadCraft uchovává u objektů (Nastavení › CadCraft › Soubory vhodné pro sloučení); s vypnutými klíči to odmítne.

### UPDATEFIELD

Zkratky: `UPDATEFIELDS`. `Vyberte objekty, jejichž pole se mají aktualizovat ({{key:Enter}}: každé pole), nebo [Nastavení]`. `S` nastaví, kdy se pole aktualizují samy: napište písmena `O` otevřít, `S` uložit, `P` vykreslit, `R` regenerovat (všechna čtyři pro začátek), nebo `NONE`.

### DWGPROPS

Zkratky: `DRAWINGPROPS`. Vypíše vlastnosti výkresu, potom `Změnit: [Název/Předmět/Autor/Firma/Klíčová slova/Komentáře/Vlastní/Odstranit/Konec]`. Prvních šest jsou ty, které ukazuje panel {{ui:Podrobnosti o výkresu}}; `U` přidá vaše vlastní název a hodnotu, `R` jednu odstraní. Pole je čtou (`%<prop:title>%`, `%<prop:Client>%`) a hned následují. Odmítne vlastní název, který je jedním ze vestavěných, nebo obsahuje `%`, `<`, `>`, uvozovku nebo zpětné lomítko.

## Parametrické

Viz [Vazby výkresu](topic:constraints) a [Použití parametrů a rovnic](topic:parameters). Vazby pracují na kartě {{ui:Model}}.

### GEOMCONSTRAINT a příkazy GC

Zkratka `GCON`: `Zadejte druh vazby [Vodorovně/Svisle/Kolmo/Rovnoběžně/Tečna/Shodné/Soustředné/Kolineární/Symetrické/Stejné/Pevné] <Vodorovně>`, potom výzvy tohoto příkazu.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Vyberte objekt [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Vyberte první objekt`, `Vyberte druhý objekt` (druhý se pohne).
- {{cmd:GCCOINCIDENT}}: `Vyberte první bod [Objekt/Automaticky] <Objekt>`, `Vyberte druhý bod [Objekt] <Objekt>`.
- {{cmd:GCFIX}}: `Vyberte bod [Objekt] <Objekt>`.
- {{cmd:GCSYMMETRIC}}: `Vyberte první objekt [2Points] <2Points>`, `Vyberte druhý objekt`, `Vyberte osu symetrie`.

### DIMCONSTRAINT a příkazy DC

Zkratka `DCON`: `Vyberte přidruženou kótu k převodu [Lineární/Vodorovně/Svisle/Zarovnaná/Úhlová/Poloměr/Průměr/Převést] <Zarovnaná>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Zadejte první bod vazby [Objekt] <Objekt>`, `Zadejte druhý bod vazby`, `Zadejte umístění kótovací čáry`, `Text kóty <d1=40>` (číslo, výraz, nebo `název=výraz`).
- {{cmd:DCALIGNED}}: jako výše, s `[Objekt/Bod a čára/2 čáry]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Vyberte oblouk nebo kružnici`. {{cmd:DCANGULAR}}: `Vyberte první čáru nebo oblouk`, `Vyberte druhou čáru`.
- {{cmd:DCCONVERT}}: `Vyberte kóty k převodu`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Vyberte objekty [Nastavení]`. `S` se zeptá na tolerance vzdálenosti a úhlu.
- {{cmd:DELCONSTRAINT}} (zkratka `DELCON`): `Vyberte objekty`; jejich vazby zmizí.
- {{cmd:CONSTRAINTBAR}} (zkratka `CBAR`): `Vyberte objekty [Zobrazit vše/Skrýt vše]`, potom `[Zobrazit/Skrýt]`.
- {{cmd:DCDISPLAY}}: `Zadejte volbu [Zobrazit/Skrýt]`.

### PARAMETERS a -PARAMETERS

{{cmd:PARAMETERS}} (zkratky `PAR`, `PARAM`) otevře panel {{ui:Parametry}}. `-PARAMETERS`: `Zadejte volbu [Nový/Upravit/Přejmenovat/Smazat/?] <?>`.

### SWBOUT

Zkratka `SWMACRO`. Stáhne makro (.swb), které znovu sestaví model jako jednu vázanou skicu v SolidWorks. Viz [Přesun skic do jiných modelářů dílů a z nich](topic:solidworks-sketches).

## Bloky

### ANNOSCALE

Zkratky: `CANNOSCALE`. Řekne anotační měřítko výkresu a kolik anotativních objektů obsahuje, potom se zeptá `Nové anotační měřítko`: napište `1:50`, `1:100`, `2:1`, holé číslo (`50` je 1:50), nebo název jednoho z vlastních měřítek výkresu. Každý anotativní text a kóta se změní tak, aby se při novém měřítku tiskly stejně velké, v jednom kroku zpět; objekty, které nejsou anotativní, se nechají být, a stejně tak objekt, který si drží seznam měřítek bez nového ({{cmd:OBJECTSCALE}}). Viz [Jednotky, papíry a měřítka](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Zkratky: `OBJSCALE`. `Vyberte anotativní objekty`, potom `Anotační měřítka vybraných objektů [Přidat/Smazat/Aktuální měřítko/Seznam/Konec] <Přidat>`. Anotativní text nebo kóta si drží seznam anotačních měřítek. `Přidat` a `Smazat` se zeptají na měřítko (`1:50`, `2:1`, holé číslo, nebo název jednoho z vlastních měřítek výkresu); `Aktuální měřítko` přidá anotační měřítko výkresu; `Seznam` vypíše měřítka každého objektu. Výřez, jehož měřítko je v seznamu objektu, zobrazí objekt ve velikosti, která tiskne jeho výšku na papíře při tomto měřítku, na obrazovce i ve vykreslení. Poslední měřítko nelze smazat. Objekty, které nejsou anotativní, se vynechají: nejprve zapněte Anotativní ve Vlastnostech. Seznamy se ukládají v DWG a DXF jako vlastní data CadCraftu. Viz [Jednotky, papíry a měřítka](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Zkratky: `ANNOALL`. `Zobrazit anotativní objekty ve všech měřítkách [ZAP/VYP]`. Zapnuto (jak výkres začíná): anotativní objekt se zobrazí také ve výřezu nebo v modelu, jehož měřítko není v jeho seznamu, ve velikosti, kterou má. Vypnuto: tam se nezobrazí a v modelu jej nelze vybrat. Přepínač je jeden krok zpět; do souboru se neukládá.

### SCALELISTEDIT

Zkratky: `SCALELIST`. `Seznam měřítek [Přidat/Upravit/Smazat/Seznam/Obnovit]`, dokud nestisknete {{key:Enter}}. Přidat: `Název měřítka`, `Jednotky papíru`, `Jednotky výkresu`. Upravit a Smazat se ptají na název měřítka. Vlastní měřítka výkresu se připojí k seznamům měřítek výřezů a vykreslení a ukládají se s výkresem. Viz [Jednotky, papíry a měřítka](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT a PEDIT

`SPLINE` (`SPL`): `První bod splinu [Metoda/Objekt] (Body vyhlazení)`. Vyhlazení: body, kterými křivka prochází; `Uzavřít`, `Zpět`, potom `Počáteční tečna` a `Koncová tečna` (bod, nebo {{key:Enter}}). Metoda › Řídicí body se zeptá na stupeň (1 až 5) a kreslí podle řídicího mnohoúhelníku. Objekt promění mnohočáry na splines procházející jejich vrcholy. `SPLINEDIT` (`SPE`): `[Data vyhlazení/Upravit vrchol/převést na Mnohočáru/Otevřít nebo Uzavřít/Obrátit/Zpět/Konec]`; Data vyhlazení `[Přidat/Smazat/Přesunout/Vyčistit/Tečny/Konec]`; Upravit vrchol `[Přidat řídicí bod/Přesunout/Váha/Konec]`. `PEDIT` (`PE`): `[Uzavřít/Otevřít/Spojit/Šířka/Vyhladit/Spline/Zrušit vyhlazení/Generování typu čáry/Obrátit/Zpět/Konec]`, `M` pro více objektů; čáry, oblouky a splines se nejprve nabídnou jako mnohočáry. Viz [Splines a mnohočáry](topic:splines).

### BLOCK

Zkratky: `B`, `BMAKE`.

- `Zadejte název bloku`. Pokud existuje: `Blok „…“ už existuje. Předefinovat jej? [Ano/Ne] <N>`.
- `Zadejte základní bod vložení`
- `Vyberte objekty`. Nahradí se jedním odkazem na nový blok.

### WBLOCK

Zkratky: `W`, `-WBLOCK`. Zapíše blok, některé objekty nebo celý výkres jako nový soubor DWG nebo DXF. `WBLOCK zdroj [Blok/Celý výkres/Objekty] <Objekty>`:

- **Objekty**: `Zadejte základní bod vložení` (stane se počátkem nového výkresu), `Vyberte objekty`, potom `Formát souboru [DWG/DXF/R12 DXF]` a `Název souboru pro nový výkres`, potom `Co s objekty [Zachovat/Převést na blok/Smazat]`. Převést je nahradí jedním odkazem na blok se jménem souboru; Smazat je odstraní.
- **Blok**: `Blok k zapsání`. Vlastní objekty bloku se základním bodem jako počátkem, včetně vnořených bloků.
- **Celý výkres**: každý objekt v modelovém prostoru. Listy se nezapisují; pro kopii, která listy zachová, použijte {{cmd:SAVEAS}}.

Nový soubor drží jen vrstvy, typy čar, styly textu a kót a bloky, které jeho objekty používají, a jednotky výkresu. Verze DWG je ta, kterou naposledy použil {{cmd:SAVEAS}}. V prohlížeči se soubor stáhne; ve Studiu se otevře dialog uložení.

### ATTDEF

Zkratky: `ATT`, `DDATTDEF`, `-ATTDEF`; nebo {{ui:Bloky}} › {{ui:Více}} › {{ui:Definovat atribut}}. Vypíše režimy, potom `Zadejte volbu ke změně ({{key:Enter}} když hotovo) [Neviditelný/Konstantní/Předvolba]`, `Zadejte název značky atributu`, `Zadejte výzvu atributu`, `Zadejte výchozí hodnotu atributu` (`Zadejte hodnotu atributu`, když je konstantní), `Zadejte počáteční bod textu`, `Zadejte výšku textu`, `Zadejte úhel natočení textu`. {{cmd:BLOCK}} převezme definice atributů do bloku.

### EATTEDIT a ATTEDIT

`EATTEDIT` (`DDATTE`, nebo dvojklik na odkaz s atributy; {{ui:Bloky}} › {{ui:Více}} › {{ui:Upravit atributy}}): `Vyberte odkaz na blok s atributy`, potom dialog {{ui:Upravit atributy}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): týž odkaz, potom `<výzva> (<ZNAČKA>) <hodnota>` pro každý atribut; {{key:Enter}} ponechá hodnotu. Viz [Atributy](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Aktualizovat atributy odkazů kterého bloku [Název/Vybrat/Vše] <Vybrat>`. Hodnoty se zachovají; nové atributy dostanou svou výchozí hodnotu, odstraněné zmizí, umístění se vynuluje.

### BATTMAN

{{ui:Bloky}} › {{ui:Více}} › {{ui:Správce atributů}}. Dialog: blok, atributy (značka, výzva, výchozí hodnota, režimy, pořadí), {{ui:Aktualizovat odkazy (hodnoty zachovány)}}, {{ui:Použít}}.

### REFEDIT a REFCLOSE

{{ui:Bloky}} › {{ui:Více}} › {{ui:Upravit na místě}}. `REFEDIT`: `Vyberte odkaz na blok k úpravě na místě` (nebo výběr). `REFCLOSE`: `Uložit změny do „…“ [Uložit/Zahodit] <Uložit>`; tlačítka pruhu {{ui:Uložit blok}} a {{ui:Zahodit}} dělají totéž. Celá úprava je jeden krok zpět. Viz [Atributy](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ZAP/VYP]`: zda tlak tahu pera nastavuje tloušťku čáry toho, co {{cmd:SKETCHFIX}} a {{cmd:SKETCHLIVE}} vytvoří (zpočátku zapnuto). Viz [Kreslení perem](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Zkratky: `OFFSTD`. Řekne, který kancelářský standard platí pro tento výkres a odkud pochází: vlastní záznam výkresu, sdílený standard vašeho týmu, nebo vaše Výchozí zásady (výšky textu `all.anno.*`); bez nich vlastní velikosti programu. `[Import/Layers/Title block/Clear/eXit]`: `Import` načte `cc-office-standard` .json (záznam, který zapisují SuperCad a BimCraft) do tohoto výkresu, uložený s ním v DWG a DXF; `Layers` přidá kancelářské vrstvy, které výkres nemá, v jednom kroku zpět, a nikdy žádnou neodstraní; `Title block` vypíše pole kanceláře s hodnotami tohoto výkresu; `Clear` odstraní vlastní záznam výkresu. Výšky anotativního textu a kót se řídí platným standardem. Viz [Jednotky, papíry a měřítka](topic:units-papers-scales).

### BPARAMS

Zkratky: `BPM`, `BLOCKPARAMS`. Otevře správce parametrů pro blok v editoru bloků, blok vybraného odkazu, nebo blok, který pojmenujete (`Název bloku`): parametry se vzorci, několik parametrů viditelnosti s jejich stavy a vlastní hodnoty a stavy vybraného odkazu. Viz [Vlastní parametry a stavy viditelnosti](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` dělá totéž na příkazovém řádku: `[Parametr/Viditelnost/Stav/Přiřadit/Odkaz/Hotovo]`.

### BEDIT a BCLOSE

`BE`; nebo {{ui:Bloky}} › {{ui:Více}} › {{ui:Upravit blok}}. `Zadejte název bloku k úpravě <blok vybraného odkazu>` otevře editor bloků. `BCLOSE` se zeptá `Zavřít editor bloku „…“ [Uložit/Zahodit] <Uložit>`; tlačítka pruhu {{ui:Uložit blok}} a {{ui:Zahodit změny}} dělají totéž. Vše provedené v editoru je jeden krok zpět.

### VIEWBASE

Zkratka: `FLATSHOT`. Plochý 2D pohled na tělesa na kartě 3D: `Pohled [Zepředu/Shora/Zprava/Zleva/Zezadu/Zdola/Izometricky]`, `Skryté čáry [Zobrazit/Skrýt]`, měřítko (`1:20`, `2:1`; {{key:Enter}} vezme to, které se vejde na list), potom střed pohledu. Jeden odkaz na blok, viditelné hrany na VIEW-VISIBLE, skryté čárkovaně na VIEW-HIDDEN. Viz [Plochá zobrazení na listu](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Zkratky: `-PUBLISH`; nebo {{ui:Všechny listy v jednom PDF}} v dialogu {{ui:Vykreslit do PDF}}. `Listy k vykreslení [Vše/Některé]`: {{key:Enter}} vykreslí každý list, `S` se zeptá na názvy oddělené čárkami. Jedno PDF, stránka a záložka pro každý list. Viz [Každý list v jednom PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Zkratky: `SSM`, `SHEETSETMANAGER`. Přenese vás do sekce {{ui:Sada listů}} levého panelu: listy z mnoha výkresů, očíslované a pojmenované, jejich razítka vyplněná ze sady, vykreslené jako jedno PDF. Viz [Sady listů](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): vyberte DWG nebo DXF, potom jeho bod vložení. {{cmd:XREF}} (`XR`, `-XREF`): `Propojené výkresy [?/Připojit/Znovu načíst/Svázat/Odpojit] (Enter: ?)`; je-li propojení více, vyberte jeden z jeho odkazů, nebo napište `N` a jeho název. Viz [Propojené výkresy](topic:files#linked-drawings-external-references).

### COUNT

Zkratky: `BCOUNT`; nebo {{ui:Bloky}} › {{ui:Více}} › {{ui:Počítat bloky}}. `Vyberte odkaz na blok k počítání, nebo [Vše/Export] (Enter: Vše)`: výběr vybere a spočítá každý odkaz na ten blok v tomto prostoru; {{key:Enter}} nebo `A` je vypíše všechny; `E` a potom `C` (počty) nebo `A` (atributy) stáhne CSV. Viz [Spočítání bloků a export rozpisu](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Zkratky: `I`, `DDINSERT`.

- `Zadejte název bloku nebo [Soubor/Knihovna] <poslední blok>` (velikost písmen nehraje roli). `F` se zeptá na DWG nebo DXF, potom na celý výkres nebo jeden z jeho bloků; název, který je už použit, se zeptá na {{ui:Ponechat stávající}} nebo {{ui:Přejmenovat}}. `L` otevře panel knihovny.
- `Zadejte bod vložení [Měřítko/Otočit]`. `S` se zeptá `Zadejte činitel měřítka`, `R` se zeptá `Zadejte úhel natočení`; obojí se pamatuje.
- Když blok už stojí vedle objektů, které se jinde opakují bez něj, řádek řekne, kolik míst se navrhuje, a výzva získá `suGgested`: `G` je ukáže; klikněte blízko jednoho, aby se tam blok vložil, `A` pro všechna, {{key:Enter}} pro návrat. Berou natočení svých sousedů a výchozí hodnoty atributů. Výkresy s více než 20 000 objekty v otevřeném prostoru se neprohledávají.
- Potom `Zadejte <výzva> (<ZNAČKA>) <výchozí>` pro každý atribut, který blok žádá. Viz [Atributy bloků](topic:attributes).

### LIBRARY

Zkratky: `LIB`. Otevře panel knihovny: umístit položky, zkontrolovat aktualizace, zdroje knihovny. Bez otázek. Viz [Vložení ze souboru nebo z knihovny](topic:insert-from-file-and-library).

### STEELMEMBER

Zkratky: `SMEMBER`; nebo {{ui:Prvek 3D}} na kartě {{ui:Standard}} knihovny. `Velikost průřezu <W12x26>` (jak ji karta vypisuje), potom `Počáteční bod [Sloup]` a `Koncový bod`: plný prvek na kartě 3D mezi těmito body, stojící na zemi. `C` se zeptá na základní bod sloupu a jeho výšku. Jeden krok zpět. Viz [Umístění ocelových profilů a normalizovaných dílů](topic:steel-and-standard-parts).

### PARTSLIST

Zkratky: `PLIST`. `Levý horní roh seznamu dílů`, potom `Výška textu <2.5>`: nakreslí tabulku každého normalizovaného dílu a ocelového profilu umístěného z knihovny (čísla položek, množství, díl, norma, velikost, délka, materiál, hmotnost). Jeden krok zpět. Viz [Umístění ocelových profilů a normalizovaných dílů](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Zkratky: `PU`. Odstraní definice bloků, které nic nepoužívá. Bez otázek.

### DELBLOCKS

Nebo {{ui:Bloky}} › {{ui:Více}} › {{ui:Smazat bloky}}. `Vyberte blok ke smazání [Název/Konec]`: vyberte odkaz na blok, nebo `N` pro seznam bloků s filtrem (vyberte několik), nebo `X` / {{key:Enter}} pro konec. Každý odkaz zmizí — v modelu, na každém listu a uvnitř jiných bloků — a potom definice; příkazový řádek řekne, co bylo smazáno a co nešlo. Nepojmenované bloky a propojené výkresy se nenabízejí. Výzva se vrátí pro další blok; celý příkaz je jeden krok zpět.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} vloží, co jste zkopírovali ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}), jako jeden blok: vyberte bod vložení a tam přijde jeden odkaz na nový blok, vybraný. Blok dostane vlastní název (`A$C` a číslo); {{cmd:RENAME}} mu dá váš. Jeden krok zpět odstraní odkaz i blok.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} se zeptá na blok k nahrazení a blok, který jej nahradí (`?` vypíše bloky), potom změní každý odkaz v modelu, na každém listu a uvnitř jiných bloků. Každý odkaz si ponechá místo, měřítko, otočení, vrstvu a hodnoty atributů, které mají oba bloky; atributy, které má jen nový blok, začnou na výchozích hodnotách, a řekne vám, které hodnoty se zahodily. Když starý blok už nic nepoužívá, nabídne jeho smazání. Odmítne propojené výkresy a náhradu, která by vložila blok sám do sebe. Jeden krok zpět.

### MINSERT

{{cmd:MINSERT}} vloží blok do řádků a sloupců: název bloku, bod vložení, měřítko, otočení, počet řádků a sloupců a vzdálenosti mezi nimi. Celá sada se otočí s natočením. Každý je samostatný odkaz (10 000 nejvýš), takže kterýkoli lze potom přesunout nebo smazat.

### BLOCKSPALETTE

Zkratky: `BLOCKSPAL`; nebo {{ui:Bloky}} › {{ui:Více}} › {{ui:Panel bloků}}. Zobrazí panel {{ui:Bloky}} s kurzorem v jeho filtru. Každý blok má malý obrázek; ty naposledy vložené jsou první. Dvě tlačítka vedle filtru přepínají mezi seznamem a mřížkou obrázků. Klikněte na obrázek (nebo na {{ui:Vložit}}), abyste blok vložili příkazem {{cmd:INSERT}}, nebo jej přetáhněte na výkres, aby se vložil tam, kam jej pustíte.

{{ui:Knihovny}}, pod seznamem: {{ui:Přidat výkres}} vezme DWG nebo DXF soubor, který máte, a vypíše jeho bloky s obrázky a celý výkres jako jeden blok. Umístění jednoho zkopíruje jeho definici (a bloky, které v sobě vnořuje, a jejich vrstvy) do tohoto výkresu, jako to dělá volba `File` příkazu {{cmd:INSERT}}; blok, který tu už je se stejnou definicí, se použije bez dotazu, jeden stejného názvu, který se liší, se zeptá na {{ui:Ponechat stávající}} nebo {{ui:Přejmenovat}}. V prohlížeči soubor zůstane, dokud se stránka nezavře. Ve CadCraft Studiu {{ui:Přidat složku}} vypíše výkresy ve složce, každý se otevře, když na něj kliknete, a soubory a složky se pamatují. Malé x odstraní knihovnu ze seznamu; soubor se nedotkne. Sdílená {{ui:Knihovna}} je něco jiného: viz [Vložení ze souboru nebo z knihovny](topic:insert-from-file-and-library).

### BCONVERT

Nebo {{ui:Bloky}} › {{ui:Více}} › {{ui:Převést opakování na bloky}}. Najde geometrii, která se opakuje, a promění každou kopii na odkaz na jeden blok.

- `Vyberte objekty, které se opakují, nebo [Blok]`: objekty jedné kopie. `B` místo toho pojmenuje existující blok, aby našel volné kopie jeho objektů.
- `Kopie může být: zrcadlená = Ne, zvětšená = Ne; vrstva, barva, typ čáry a tloušťka = Shodné … [Zrcadlené/Měřítko/Vlastnosti]`: `M`, `S` a `P` přepínají, co se počítá jako kopie; {{key:Enter}} hledá. Nastavení se pamatují.
- `Název nového bloku <Blok1>`, potom `Zadejte základní bod bloku` ({{key:Enter}} vezme levý dolní roh výběru).
- Řekne, kolik dalších sad objektů je stejnou geometrií, zvýrazní vše, co by nahradilo, a zeptá se `Ano/Ne`.

Kopie jsou tytéž objekty posunuté a otočené o libovolný úhel (a zrcadlené nebo zvětšené jedním činitelem, když jsou zapnuty): každý objekt musí mít svůj protějšek s přesností na milióntinu velikosti výběru. Každý odkaz dostane vlastní natočení a měřítko (zrcadlený má záporné měřítko Y) a vrstvu, kterou objekty sdílely. Objekty na zamčených vrstvách se nechají být a počítají se. Hledá v otevřeném prostoru (modelu nebo otevřeného listu). Velmi velké hledání se zastaví na pracovním limitu a řekne to. Jeden krok zpět.

### BSEARCH

Nebo {{ui:Bloky}} › {{ui:Více}} › {{ui:Najít bloky}}. `Najít bloky podle [Název/Atribut/Geometrie] <Název>`:

- `N`: část názvu bloku, nebo vzor se `*` a `?`. Vypíše každý blok s jeho odkazy zde i v celém výkresu.
- `A`: hodnota atributu, nebo `TAG=hodnota`. Vypíše bloky, jejichž odkazy ji drží, s nalezenými hodnotami. Konstantní atributy se počítají.
- `G`: vyberte objekty, nebo jeden odkaz na blok, a vypíšou se bloky, jejichž tvar je podobný alespoň na 85 %, nejlepší první. Velikost, otočení a zrcadlení se nepočítají. Měření porovnává vzdálenosti mezi body rozloženými podél obrysů, takže najde podobné tvary; pro přesné kopie použijte {{cmd:BCONVERT}}.

Odkazy nalezené v otevřeném prostoru se označí, připravené pro další příkaz.

### BREPLACE

Nebo {{ui:Bloky}} › {{ui:Více}} › {{ui:Nahradit bloky}}. `Nahradit [Vybrané/Vše]`: `S` nahradí odkazy na bloky, které vyberete, blokem, který pojmenujete; `A` se zeptá na blok a jeho náhradu a změní každý odkaz, jako dělá {{cmd:BLOCKREPLACE}} (týž kód). Odkaz si ponechá místo, měřítko, otočení, vrstvu a hodnoty atributů, které mají oba bloky; hodnoty, pro které nový blok nemá místo, se zahodí a pojmenují. `?` vypíše bloky. Jeden krok zpět.

### DATAEXTRACTION

Zkratky: `EATTEXT`, `DX`; nebo {{ui:Bloky}} › {{ui:Více}} › {{ui:Extrakce dat}}. Vypíše bloky, jejich atributy a vlastnosti objektů jako tabulku nebo soubor CSV.

- Pracuje s výběrem, nebo se zeptá `Vyberte objekty (Enter: vše v tomto prostoru)`.
- `Seznam: [Bloky/Objekty/Vše]`, když výběr obsahuje obojí. Nepojmenované bloky, tabulky a kusovníky se nikdy nevypisují.
- Vypíše sloupce, z nichž lze vybírat (název, druh, vrstva, X, Y, natočení, měřítko, délka, plocha, barva, typ čáry, prostor, a jeden pro každou značku atributu), potom `Sloupce, podle názvu nebo čísla, oddělené čárkami`. {{key:Enter}} vezme ty s hvězdičkou: název a každý atribut u bloků; druh, vrstvu a délku u objektů.
- `Dát stejné řádky k sobě s počtem? [Ano/Ne] <Ano>`, potom `Dát seznam do: [Tabulka/Csv] <Tabulka>`. Tabulka je běžná tabulka ({{cmd:TABLEDIT}} ji upravuje) a není živá: po změně výkresu příkaz spusťte znovu.
- Odmítne sloupec, který není v seznamu. Tabulka drží 1 999 řádků dat; soubor CSV je pojme všechny.

### COUNTTABLE

Spočítá odkazy na bloky výběru (nebo otevřeného prostoru) a dá počty do tabulky (`Blok`, `Počet`) nebo do souboru CSV. Pro počet, který se sám řídí výkresem, viz {{cmd:BOMTABLE}}.

## Listy a vykreslování

### LAYOUT

Zkratky: `LO`, `NEWLAYOUT`; nebo tlačítko {{ui:+}} pod výkresem. Nový list s rámečkem, razítkem a jedním výřezem, na ISO A3 (nebo Tabloid pro výkresy v palcích nebo stopách). Bez otázek.

### MVIEW

Zkratky: `MV`. Jen na listu ({{cmd:VPORTS}} na listu dělá totéž).

- `Zadejte roh výřezu [Mnohoúhelník/Objekt]`, `Zadejte protilehlý roh`. Výřez ukáže celý model v standardním měřítku.
- `P` (Mnohoúhelník): klikněte na rohy obrysu (`Zpět`, `Uzavřít`), {{key:Enter}} když hotovo. Odmítne méně než tři rohy.
- `O` (Objekt): `Vyberte uzavřený objekt pro obrys výřezu`: uzavřená mnohočára, kružnice nebo elipsa na listu. Výřez převezme jeho tvar (křivky jako krátké rovné kusy); objekt zůstane tak, jak byl. Odmítne objekt, který není uzavřený.

### VPCLIP

Ořízne výřez, který už je na listu. `Vyberte výřez k oříznutí` (nebo jej vyberte předem), potom `Vyberte objekt k oříznutí [Mnohoúhelník/Smazat]`:

- Klikněte na uzavřenou mnohočáru, kružnici nebo elipsu, nebo {{key:Enter}} (nebo `P`), abyste klikali na rohy mnohoúhelníku.
- `D` (Smazat, nabízeno, když je výřez oříznut) udělá z něj zase obdélník: rámeček kolem obrysu, který měl.
- Co výřez ukazuje, se na papíře nepohne a jeho měřítko zůstane. Model se kreslí a vykresluje jen uvnitř obrysu a okraj jej sleduje. Jeden krok zpět.
- Oříznutý výřez má úchyt u každého rohu svého obrysu, kromě svého středu a čtyř rohů svého rámečku (tažení rohu rámečku natáhne obrys s ním). Vlastnosti ukazují Obrys: Obdélník, nebo Oříznutý s počtem rohů.
- Soubory DWG a DXF 2000 uchovávají obrys pro CadCraft. Ostatní programy otevřou výřez jako obdélník kolem něj; DXF R12 uchová jen obdélník.
- Na kartě modelu řekne, že výřezy jsou na listech.

### VPORTS

Zkratky: `VIEWPORTS`. {{cmd:SPLIT}} je totéž i z listu; {{ui:Pohled}} › {{ui:Více}} › {{ui:Rozdělit vedle sebe}}, {{ui:Rozdělit pod sebou}}, {{ui:Čtyři okna}}, {{ui:Jedno okno}} to spouští. Na modelu: `Zadejte počet podoken [Jedno/2/3/4] <3>`; `2` se zeptá `[Vodorovně/Svisle] <Svisle>` (Svisle = vedle sebe), `3` se zeptá `[Vlevo/Vpravo] <Vpravo>` (kam jde velké podokno). Každé podokno si drží svůj pohled a prostor; klik udělá podokno aktivním. Na listu je to {{cmd:MVIEW}}. Viz [Rozdělení obrazovky](topic:split-screen).

### VPVIEW

Bez zkratek. Jen na listu.

- `Vyberte výřez` (přeskočí se, když je jeden vybrán), potom na modelu: `Zadejte první roh okna k zobrazení`, `Zadejte protilehlý roh`.

### UCS

Bez zkratek. Vlastní souřadnicový systém; není to úprava. `Zadejte počátek UCS [Pojmenovaný/Objekt/Předchozí/Svět/Z/3bod] <Svět>`: bod je nový počátek, potom `Zadejte bod na ose X (Enter ponechá úhel)`. `Z`: `Zadejte úhel natočení kolem osy Z <90>`. `3`: počátek, bod na kladné ose X, bod na kladné straně Y. `OB`: `Vyberte objekt k zarovnání UCS`. `NA`: `[Obnovit/Uložit/Smazat/?]` a název. Pohled se otočí tak, aby byla nová osa X vodorovná. Viz [Otočení pohledu a použití vlastních souřadnic](topic:ucs-and-turned-view).

### PLAN

Bez zkratek. `Zadejte volbu [Aktuální UCS/Ucs/Svět] <Aktuální UCS>`: otočí pohled aktivního podokna tak, aby osa X UCS (nebo světa) byla vodorovná. Nic ve výkresu se nepohne.

### TURNLEFT, TURNRIGHT, TURNWORLD

Bez zkratek; nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Otočit pohled o 90° doleva}}, {{ui:Otočit pohled o 90° doprava}}, {{ui:Zpět na svět}}. Totéž jako `UCS Z -90`, `UCS Z 90` a `UCS W`, s pohledem, který je následuje.

### VPLAYER

Bez zkratek. Na listu, nebo uvnitř výřezu. `Zadejte volbu [?/Zamrazit/Odmrazit/Obnovit/Vpvisdflt]`: `F`, `T`, `R` se ptají na názvy vrstev (čárky, zástupné znaky `*` a `?`), potom `[Vše/Vybrat/Aktuální] <Aktuální>` výřezy; Obnovit vrátí každou vrstvu na její výchozí „zamražená v nových výřezech“; `V` nastaví tuto výchozí hodnotu (`[Zamražená/Odmražená]`), kterou používá {{cmd:MVIEW}}. `?` vypíše vrstvy zamražené v aktuálním výřezu. Sloupec výřezů v panelu Vrstvy dělá totéž pro jeden výřez. Viz [Zamražení vrstvy v jednom výřezu](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Zkratky: `MS`; nebo dvojklik uvnitř výřezu. Jen na listu. Práce na modelu přes výřez: ten vybraný, jediný na listu, nebo `Klikněte do výřezu, ve kterém chcete pracovat`. Posun a přiblížení uvnitř mění pohled výřezu (výřez se zamčeným zobrazením si jej ponechá a místo toho se pohne list); nový pohled se zapíše jako jeden krok zpět. Viz [Práce na modelu přes výřez](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Zkratky: `PS`; nebo dvojklik mimo výřez, nebo klik na kartu pod výkresem. Zpět na list.

### PLOT

Zkratky: `PRINT`, `PUBLISH`, `EXPORTPDF`; nebo {{key:Mod+P}}. Otevře dialog {{ui:Vykreslit do PDF}}. Viz [Vykreslení do PDF](topic:plot-pdf).

### PLOTSTYLES

Zkratky: `STYLESMANAGER`, `PSTABLES`; nebo {{ui:Upravit tabulky…}} v dialogu {{ui:Vykreslit do PDF}}. Otevře {{ui:Tabulky stylů tisku}}: co každá barva tiskne (barva, šedá, inkoust, tloušťka čáry), uchováno s výkresem. Viz [Tabulky stylů tisku](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} přesune objekty mezi listem a modelem přes výřez, zvětšené a otočené, aby z druhé strany vypadaly stejně. Na listu vyberte objekty a půjdou do modelu (vyberte výřez, když má list víc než jeden). Když pracujete na modelu přes výřez ({{cmd:MSPACE}}), vybrané objekty přijdou na list. Řekne, kolikrát větší nebo menší se staly. Výřezy zůstanou na svém listu. Jeden krok zpět.

### ISODRAFT

{{cmd:ISODRAFT}} zapne nebo vypne izometrické kreslení `ON` nebo `OFF`, nebo přímo přejde na rovinu `Left`, `Top` nebo `Right`. Dokud je zapnuto: Ortogonální ({{key:F8}}) drží čáry podél dvou os roviny (vlevo: 90° a 150°; nahoře: 30° a 150°; vpravo: 30° a 90°), polární sledování ({{key:F10}}) sleduje tytéž osy, přichytávání na mřížku ({{key:F9}}) používá izometrickou mřížku, a mřížka ({{key:F7}}) se kreslí čarami pod 30°, 90° a 150°. {{cmd:ELLIPSE}} získá `Isocircle`: zadejte střed a poloměr (nebo `Diameter`) a nakreslí elipsu, jakou kružnice ukazuje v aktuální rovině. Výkres zůstává plochý: jsou to pomůcky pro kreslení perspektivního pohledu, ne 3D model. Nastavení platí pro tuto relaci a do souboru se neukládá.

### ISOPLANE

{{cmd:ISOPLANE}} zvolí rovinu, na které izometrické kreslení pracuje: `Left`, `Top` nebo `Right`. Enter přejde na další rovinu. Dokud je izometrické kreslení zapnuto, {{key:F5}} dělá totéž uprostřed příkazu; dokud je vypnuto, je {{key:F5}} ponechán prohlížeči.

## Dotazy

### CAL

Vypíše hodnotu výpočtu, tak jak by se četla kdekoli, kde se píše délka.

- `Výraz`: napište jej, například `12'6"+3/4"` nebo `(24'-0")/3`, a stiskněte {{key:Enter}}. CadCraft vypíše `= 12'-6 3/4"   (150.75 drawing units)`. Viz [Aritmetika v napsané hodnotě](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Zkratky: `DI`; nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Změřit vzdálenost}}.

- `Zadejte první bod`, `Zadejte druhý bod`. Vypíše vzdálenost, úhel, Delta X a Delta Y.

### AREA

Zkratky: `AA`; nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Plocha}}. Vypíše plochu a obvod.

- `Zadejte první roh [Objekt/Přidat plochu/Odečíst plochu] <Objekt>`
  - Klikněte nebo napište rohy; u `Zadejte další bod (Enter uzavře) [Zpět (U)]` stiskněte {{key:Enter}}, chcete-li uzavřít obrys. `U` vezme zpět poslední roh.
  - {{key:Enter}} nebo `O`, potom `Vyberte objekt`: kružnice (vypíše svůj obvod), elipsa, mnohočára (otevřená se uzavře přímkou pro plochu a vypíše se její délka), nebo šrafa (díry se odečtou).
  - `A` (Přidat plochu) a `S` (Odečíst plochu) udržují průběžný součet: výzva začne `(ADD mode)` nebo `(SUBTRACT mode)`, každá plocha se přidá nebo odečte a po každé se vypíše `Total area = …`. V těchto režimech `O` vybírá objekty, dokud nestisknete {{key:Enter}}, a {{key:Enter}} u první výzvy příkaz ukončí.

### MEASUREGEOM

Zkratky: `MEA`. `Zadejte volbu [Vzdálenost/Poloměr/Úhel/Plocha] <Vzdálenost>`; po každém měření se zeptá znovu, s `Konec` jako výchozí volbou.

`Rychle` měří kolem ukazatele, když jej pohybujete: vzdálenost k nejbližšímu objektu vpravo, nahoře, vlevo a dole (podél os aktuálního UCS), kreslená, jak jdete, a úhel tam, kde jsou dva ti sousedé rovní a stýkají se. Kliknutí zapíše do historie čtyři vzdálenosti, čistou šířku a výšku a úhly; {{key:Enter}} se vrátí k volbám. Čte, co je na obrazovce.

- `D`: dva body, jako {{cmd:DIST}}.
- `R`: `Vyberte oblouk nebo kružnici`; vypíše poloměr a průměr.
- `A`: oblouk (jeho obsažený úhel), nebo čára a potom druhá čára (úhel mezi nimi, směrem k jejich vzdáleným koncům), nebo {{key:Enter}} a tři body (vrchol, potom oba konce).
- `AR`: jako {{cmd:AREA}}, jedna plocha.

### ID

Bez zkratek. `Zadejte bod`; vypíše jeho X a Y.

### LIST

Zkratky: `LI`, `LS`. `Vyberte objekty`; vypíše druh každého objektu, jeho vrstvu a hlavní rozměry.

### MASSPROP

{{cmd:MASSPROP}} dá průřezové vlastnosti oblastí a uzavřených objektů, které vyberete, dohromady: plochu, obvod, ohraničující rámeček, těžiště, momenty setrvačnosti k osám X a Y procházejícím počátkem, deviační moment, poloměry setrvačnosti, tytéž momenty k těžišti a hlavní momenty se směry jejich os. Díry v oblasti se počítají jako díry. Údaje jsou v jednotkách výkresu a přesné pro obrysy z čar a oblouků; elipsy a splines se měří jako krátké rovné úseky, a řekne to. Po zprávě se zeptá, zda ji zapsat do textového souboru. Objekty, které nejsou uzavřené, se vynechají a řekne se, kolik jich bylo.

## Pohled, soubor a ostatní

### ZOOM

Zkratky: `Z`.

- `Zadejte roh okna, nebo zadejte činitel měřítka (nX) [Rozsah/Vše/Okno/Předchozí/Měřítko/Střed]`. Pro okno klikněte na dva rohy. `E`, `A` nebo Enter: celý výkres.
- `P` (Předchozí, nebo {{ui:Předchozí}} na panelu nástrojů) se vrátí k pohledu předtím, až k 10 pohledům na kartu; série kroků kolečka nebo jedno posunutí se počítá jako jeden pohled.
- Číslo jako `2`, `2x` nebo `0.5x` (nebo `S` a potom číslo) přiblíží nebo oddálí o tento činitel kolem středu obrazovky.
- `C` se zeptá `Zadejte bod středu` a `Zadejte výšku nebo zvětšení (nX)`.

### PDFATTACH, PDFIMPORT a příkazy PDF

Zkratky: `PDFATT` pro {{cmd:PDFATTACH}}, `PDFIM` pro {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} vloží stránku PDF pod výkres (soubor, stránku, bod vložení, měřítko, natočení); {{cmd:PDFIMPORT}} promění čáry, křivky, výplně a text stránky na objekty výkresu na vrstvách pojmenovaných podle PDF, ve skutečné velikosti, podle zadaného měřítka, nebo podle dvou bodů a skutečné vzdálenosti. {{cmd:PDFCLIP}} ořízne podklad, {{cmd:PDFADJUST}} nastaví ztlumení, kontrast, jednobarevnost nebo jej vypne, {{cmd:PDFLAYERS}} přepíná vlastní vrstvy PDF, a {{cmd:PDF}} dá CadCraftu znovu soubory, které podklady výkresu používají. Viz [Podklady PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Zkratky: `AUTOC`. Automatické doplňování výkresu: když neběží žádný příkaz, šedý duch ukazuje, co říkají vzory vašeho výkresu, že přijde dál. {{cmd:AUTOCOMPLETE}} jej zapne `On`, nebo vypne `Off` (také Nastavení › CadCraft), nebo `Show` ukáže, co by teď navrhl. **Tab** nakreslí ducha jako jeden krok zpět, **Esc** jej zavře, dokud se výkres nezmění. Hledá tři věci v nejnovějších objektech: další kopii něčeho, co je nakresleno dvakrát a více v rovnoměrném kroku (sloupky, sloupy, stoupání a šlapání schodiště), další kroky schodiště z mnohočáry, a chybějící stranu místnosti nebo stěnového řetězu. Uprostřed {{cmd:LINE}} nebo {{cmd:PLINE}} je duch **další bod**: další krok schodiště (stoupání, šlapání, stoupání…), čtvrtý roh obdélníku, bod, který jej uzavírá, nebo další stejný krok. Přiblížte kurzor a stiskněte **Tab**, jako byste tam klikli; pokračujte, nebo stiskněte Enter. Počítá se na tomto počítači podle pravidel, bez modelu.

### AUTOSHEET

Zkratky: `ASH`. Listy, které se rozloží samy. {{cmd:AUTOSHEET}} vezme části výkresu (vaše pojmenované pohledy, nebo jednotlivé části modelu, nebo celý model), zvolí velikost papíru (nebo tu, kterou dáte), dá každé části standardní měřítko (jedno pro všechny, nebo největší, které každá unese) a rozmístí pohledy v řádcích na nové listy s razítkem a popiskem (název a měřítko) pod každým. Co se nevejde na jeden list, dostane vlastní list. Jeden krok zpět. Počítá se na tomto počítači podle pravidel, bez modelu.

### PHOTOSKETCH

Zkratky: `PSK`. Fotografie skici na výkres. Vyberte fotografii (JPEG, PNG nebo TIFF) ruční skici na listu papíru. {{cmd:PHOTOSKETCH}} najde čtyři rohy listu, narovná perspektivu, vezme velikost papíru, kterou pojmenujete (`Papír`, nebo nejbližší standardní), a `Měřítko` skici (1 : n), potom obtáhne tahy pera do čar, oblouků a kružnic, s vrstvou pro každou barvu pera (černá, červená, modrá, zelená). Když nenajde okraj papíru, vezme celou fotografii jako list a řekne to. Písmo se vynechá. Jeden krok zpět. Provádí se na tomto počítači klasickým zpracováním obrazu, bez modelu, nic se neodesílá. Viz také příkazy pro naskenované výkresy.

### AUTODIM

Zkratky: `ADIM`. Automatické kótování podle pravidel. {{cmd:AUTODIM}} okótuje vybrané objekty (nebo celý výkres) podle jejich vodorovných a svislých hran: řetěz kót podél stran, které zvolíte (`Strany`), jeden celkový rozměr venku, šířku každého otvoru (mezera mezi souosými čarami stěn), průměr pro každou velikost díry, a s `Grid` rozteč mezi čarami mřížky. Kóta, která tam už je, se nevytvoří znovu. Jeden krok zpět. Počítá se na tomto počítači podle pravidel, bez modelu.

### GRIDMOVE

Zkratky: `GM`. Posun čáry mřížky přenese sadu. {{cmd:GRIDMOVE}} pohne čáru mřížky (čáru na vrstvě, jejíž název říká grid nebo axis) a to, co na ní visí: stěny, které mají konec na čáře, se natáhnou, aby ji následovaly, stěny podél ní se pohnou celé, sloupky (odkazy na bloky a kružnice na čáře), její bublina a štítek se pohnou, a kóty, jejichž body na ní sedí, měří novou rozteč. Zadejte dva body (počítá se jen část napříč čáře), nebo `Distance`. Jeden krok zpět vrátí všechno. Počítá se podle pravidel na tomto počítači.

### DETAILS

Zkratky: `DET`. Detaily, které vás najdou. {{cmd:DETAILS}} uchovává vlastní detaily vaší firmy: `Add` vloží blok tohoto výkresu do seznamu, `List` a `Remove` ho spravují, `Find` je seřadí pro to, co je vybráno (nebo pro to, co jste nakreslili naposledy), podle slov na jeho vrstvách, názvech bloků, vzorech šrafy a poznámkách proti názvu a poznámkám každého detailu, takže detail okna najde vaše parapetní lišta. Zvolte číslo a bod, abyste jej umístili. S `Hint` zapnutým (také Nastavení › CadCraft) výběr něčeho, co detail odpovídá, dá jeden řádek do stavového řádku. Seznam se uchovává v tomto prohlížeči, na tomto počítači, a tento seznam se prohledává. `Share` jej uloží i do vaší složky Dokumenty (`.cadcraft/firm-details.json`, s výkresem každého bloku): `Pull` přidá, co má váš tým a vy ne, `Push` přidá, co máte vy a oni ne, `Both` udělá obojí, a nic se nikdy neodstraní z žádné strany. Nejprve otevřete složku Dokumenty ({{cmd:DOCUMENTS}}); když je ta složka složkou Team Cloud Plan, sdílí celý tým jeden seznam. Položka detailu v panelu Knihovny má tlačítko **Přidat do detailů mé firmy**, které ji dá do téhož seznamu. Počítá se na tomto počítači podle slov, bez modelu.

### SKETCHFIX

Zkratky: `SKF`. Skici perem se stávají přesnou geometrií. Stiskněte a táhněte jeden volný tah najednou (perem, myší nebo prstem), potom Enter. Každý tah se čte jako úsečka, kružnice, oblouk, obdélník nebo mnohočára: téměř vodorovné a svislé čáry se udělají přesně vodorovné a svislé, uzavřený kulatý tah se stane kružnicí, uzavřený tah se čtyřmi pravými rohy obdélníkem, a konce tahů se přitáhnou k sobě a na konce, které už jsou ve výkresu. Jeden krok zpět. Počítá se na tomto počítači podle pravidel, bez modelu.

### SCANATTACH a příkazy naskenovaného výkresu

Zkratky: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} zkratku nemá. Pracují na obrázku, každý s jedním krokem zpět. {{cmd:SCANATTACH}} vloží PNG, JPEG, TIFF (jednu stránku, nebo všechny) nebo stránku PDF, která je obrázkem. {{cmd:SCANSCALE}} změní měřítko listu podle dvou vybraných bodů a skutečné vzdálenosti. {{cmd:SCANALIGN}} jej posune a otočí na dva body (`Scale the sheet to fit` Ano/Ne). {{cmd:SCANDESKEW}} ukáže úhel dlouhých čar listu a list otočí, až `Accept` nebo zadáte `Value`. {{cmd:SCANCLEAN}} jej převede na černobílý (`Threshold` Auto/Adaptive/Level, `Specks`) a `Run`. {{cmd:SCANCROP}} ponechá okno. {{cmd:SCANERASE}} smaže `Rectangle`, `Polygon` nebo `Lasso`. {{cmd:SCANTRACE}} obtáhne čáry a oblouky na novou vrstvu (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) a řekne, co našel a co nechal jako rastr. {{cmd:SCANINFO}} vypíše původní soubor a kroky. {{cmd:RASTERSNAP}} zapíná nebo vypíná přichytávání k čarám naskenovaných listů (On nebo Off). Viz téma Naskenované výkresy a obtahování.

### REGEN a REGENALL

Zkratky: `RE` pro {{cmd:REGEN}}, `REA` pro {{cmd:REGENALL}}. Znovu sestaví to, co je na obrazovce nakresleno z výkresu: {{cmd:REGEN}} kartu, na kterou se díváte (na listu i model, který jeho výřezy ukazují), {{cmd:REGENALL}} každou kartu, každé podokno rozdělené obrazovky a každý otevřený výkres. Použijte je, když obraz vypadá zastarale po skriptované nebo velmi velké změně, nebo když asistent výkres upravil; samotný výkres se nedotkne, takže není co vracet zpět.

### NAMEDVIEW

Zkratky: `NV`, `VIEWS`. `Zadejte volbu [?/Obnovit/Uložit/Okno/Smazat] <Obnovit>`, potom název pohledu. `S` uloží pohled na obrazovce, `W` okno, které vyberete, `R` ukáže uložený pohled, `D` jeden smaže, `?` vypíše pohledy této karty. Uložení pod existujícím názvem jej nahradí; každá změna je jeden krok zpět. Pohledy patří kartě, na které byly uloženy. Soubory DWG a DXF je uchovávají (tabulka VIEW); pohledy listu se vrátí na první list, protože soubor neříká, který je který.

### UNDO a REDO

Zkratky: `U` pro {{cmd:UNDO}}; {{cmd:REDO}} zkratku nemá. Také {{key:Mod+Z}} a {{key:Mod+Y}}.

### LAYER

Zkratky: `LA`. Přeskočí do panelu {{ui:Vrstvy}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Zadejte typ čáry pro nové objekty` — `ByLayer`, `ByBlock`, nebo název (`?` je vypíše: Continuous, vlastní typy výkresu, a DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE se svými velikostmi `2` (polovina) a `X2` (dvojnásobek)). {{cmd:LWEIGHT}} (`LW`): tloušťka čáry pro nové objekty v mm, nebo `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): měřítko typu čáry výkresu (lze vrátit zpět). {{cmd:LWDISPLAY}} (`LWT`): `Zobrazit tloušťky čar [ZAP/VYP]` — totéž jako tlačítko {{ui:LWT}} ve stavovém řádku. Viz [Tloušťky čar a typy čar](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Zadejte druh objektu k přejmenování [LAyer/Block]`, `Zadejte starý název`, potom nový název; objekty nebo odkazy následují. {{cmd:LAYMRG}}: `Vyberte objekt na vrstvě ke sloučení nebo [Název]` až do {{key:Enter}}, potom `Vyberte objekt na cílové vrstvě nebo [Název]` a `Y`. {{cmd:LAYDEL}}: `Vyberte objekt na vrstvě ke smazání nebo [Název]`, potom `Y`: vrstva a každý objekt na ní zmizí (ne vrstva 0, DEFPOINTS ani aktuální vrstva). Jeden krok zpět každý. Viz [Uspořádání výkresu do vrstev](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Vrstvy výběrem objektů; také v nabídce {{ui:Nástroje}} panelu {{ui:Vrstvy}}. {{cmd:LAYISO}}: `Vyberte objekty na izolovaných vrstvách`, potom {{key:Enter}}: každá další vrstva se vypne. {{cmd:LAYUNISO}} je znovu zapne. {{cmd:LAYOFF}} a {{cmd:LAYFRZ}}: `Vyberte objekt na vrstvě, která se má vypnout` (nebo zamrazit), znovu a znovu; `U` vezme zpět poslední, {{key:Enter}} skončí. {{cmd:LAYMCUR}}: `Vyberte objekt, jehož vrstva se stane aktuální`. {{cmd:LAYON}} zapne každou vrstvu, {{cmd:LAYTHW}} každou odmrazí. Každý příkaz je jeden krok zpět. Viz [Uspořádání výkresu do vrstev](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} začne prázdný výkres a {{cmd:OPEN}} otevře DWG nebo DXF, každý na vlastní kartě nad výkresem (nepoužitý nový výkres se použije místo nové karty). Zavření karty s neuloženými změnami se nejprve zeptá. Viz [Rozdělení obrazovky](topic:split-screen).

{{cmd:SAVE}} (zkratka `QSAVE`, také {{key:Mod+S}}) stáhne kopii ve formátu výkresu: DWG, pokud byl otevřen z DWG, DXF, pokud z DXF. Nový výkres použije formát, který byl naposledy zvolen v Uložit jako v tomto prohlížeči, jinak DWG.

{{cmd:SAVEAS}} (také {{key:Mod+Shift+S}}) otevře dialog {{ui:Uložit kopii jako}}: vyberte {{ui:DWG}} (a jeho {{ui:Verzi}}), {{ui:DXF R12}} nebo {{ui:DXF 2000}}, potom {{ui:Uložit}}. Volba platí pro tento výkres i pro nové výkresy v tomto prohlížeči.

{{cmd:DXFOUT}} vždy stáhne kopii DXF R12, aniž by změnil formát, který používá {{cmd:SAVE}}.

Viz [Soubory: co se otevře, co se uloží](topic:files#saving).

### TOUR

Zkratky: `TUTORIAL`. Spustí znovu šestikrokovou prohlídku prvního výkresu. Viz [Začínáme](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Zkratky: `TBDOCK`. `Poloha panelu nástrojů [Nahoře/Dole/Vlevo/Vpravo]`. Viz [Nastavení](topic:settings#toolbar-position).

### COMMANDLINE

Zkratky: `CMDLINE`. `Příkazový řádek [Ukotven dole/Plovoucí/Jeden řádek/Zobrazené řádky historie/Historie příkazů (F2)]`: ukotví nebo učiní plovoucí příkazový řádek, udělá z něj jeden řádek, zeptá se, kolik řádků historie zobrazit (0 až 12), nebo otevře historii. Viz [Nastavení](topic:settings#command-line).

### TOPAREA

`Horní oblast [Standardní/Kompaktní]`: lišty nad výkresem tak, jak byly, nebo kompaktní. Viz [Nastavení](topic:settings#top-area).

### POLARANG

`Zadejte krok polárního úhlu ve stupních <90>`: krok, na který se zarovnávají čáry {{ui:Polární}} sledování (více než 0, nejvýš 180). Pamatuje se v tomto prohlížeči.

### UNITS

Zkratky: `UN`. Jak se délky píšou a zadávají.

- `Zadejte formát délek [Vědecký/Desetinný/Inženýrský/Stavební/Zlomkový] <aktuální>`
- Stavební a Zlomkový: `Zadejte jmenovatel nejmenšího zlomku k zobrazení (1, 2, 4, 8, 16, 32, 64, 128 nebo 256)`. Ostatní: `Zadejte počet desetinných míst (0 až 8)`.

Nové kóty se podle toho řídí. Jeden krok zpět. Totéž jako {{ui:Formát délek}} a {{ui:Přesnost}} v {{ui:Aktuální nastavení}}; viz [Stopy a palce](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Zkratky: `GDS`. Zobrazí rozvržení IC (soubor proudu GDSII): laboratorní test, jen pro prohlížení a měření.

- Výběr souboru vezme soubor `.gds`; s několika horními buňkami `Zadejte horní buňku k vykreslení`.
- Každá vrstva a datový typ se stane vrstvou výkresu (`GDS 1`, `GDS 2/5`), odkazy a pole se umístí naplocho, v uživatelské jednotce souboru (obvykle mikrometry). Jeden krok zpět. Nic se nesimuluje ani neověřuje a soubor se nezapisuje zpět.

### DIAGRAM

Zkratky: `TEXTDIAGRAM`, `T2D`. Diagram z textu.

- Rámeček převezme text (nebo jeden řádek s `;` mezi příkazy na příkazovém řádku): vývojový diagram Mermaid, diagram komponent PlantUML, D2 nebo seznam od-do.
- `Zadejte levý horní roh diagramu`, potom `Zadejte výšku textu`.

Bloky a spojnice jsou běžné objekty na vrstvě `Diagram`, vybrané, když skončí. Jeden krok zpět. Viz [Kreslení diagramu z textu](topic:text-to-diagram).

### OLELIST

Zkratky: `OLES`. Objekty OLE, které DWG nese a které CadCraft sám neumí umístit.

- Vypíše každý: číslo, druh, velikost, zda si uložil obrázek.
- `Zadejte volbu [Umístit/Konec] <Konec>`: Umístit se zeptá na číslo, levý dolní roh a šířku, a nakreslí rámeček s obrázkem. Jeden krok zpět; uchovaný objekt se nemění. Viz [Obrázky](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Zkratky: `SHX`. Vaše vlastní písma SHX.

- `Zadejte volbu písma SHX [Složka/Soubory/Seznam/Odebrat/Obrátit/Vyčistit] <Seznam>`

{{ui:Složka}} načte každé `.shx` ve složce (CadCraft Studio; znovu při každém spuštění), {{ui:Soubory}} vezme vybrané soubory (prohlížeč), {{ui:Obrátit}} rozloží písmena jednoho písma od posledního k prvnímu. Textové styly, které pojmenují načtené písmo, se v něm kreslí. Viz [Kreslení textu ve vlastních písmech SHX](topic:shx-fonts).

### LIMITS

Jak velký má výkres být.

- `Zadejte levý dolní roh, nebo [ZAP/VYP] <aktuální>`: bod, `ON` nebo `OFF`.
- `Zadejte pravý horní roh <aktuální>`.

Mřížka vyplní limity, {{cmd:ZOOM}} Vše je ukáže, a při zapnutých limitech je bod mimo ně odmítnut (`**Outside limits`). Jeden krok zpět; uloží se v DWG a DXF. Viz [Nastavení limitů výkresu](topic:drawing-limits).

### AUNITS

Zkratky: `ANGUNITS`. Jak se úhly zobrazují a zadávají.

- `Zadejte formát úhlů [Desetinné stupně/Stupně-minuty-sekundy/Geodetické azimuty] <aktuální>`
- `Zadejte počet desetinných míst (0 až 8)`, nebo u dalších dvou `Zadejte přesnost` (0 stupňů, 2 minuty, 4 sekundy, 5 až 8 desetinných míst sekundy).

Jeden krok zpět; uloží se v DWG a DXF. Totéž jako {{ui:Formát úhlu}} v {{ui:Aktuální nastavení}}. Viz [Zadávání a zobrazení azimutů a úhlů](topic:bearings-and-angles).

### APPLOAD

Zkratky: `AP`; nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Načíst aplikaci…}}. Dialog {{ui:Načíst aplikace}}: načte rutiny `.lsp` a soubory dialogů `.dcl`, vyjme je, znovu je načte z historie, a Sada při spuštění. Příkazy `(defun c:NAME …)` rutiny pak fungují jako každý jiný. Viz [Načítání aplikací](topic:load-applications) a [Spouštění rutin LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Upravit zkratky…}}) otevře váš soubor zkratek (řádky `ALIAS, *COMMAND`); {{ui:Uložit}} jej použije. {{cmd:REINIT}} jej použije znovu. Viz [Úprava zkratek příkazů](topic:command-aliases).

### OPTIONKEYS

Zkratky: `OPTKEYS`; nebo {{ui:Nastavení}} › {{ui:CadCraft}} › {{ui:Písmena voleb}} › {{ui:Upravit…}}. Otevře váš soubor písmen voleb (řádky `COMMAND.OPTION, LETTERS`, například `ARRAY.PO, P`); {{ui:Uložit}} jej použije a {{cmd:REINIT}} jej použije znovu. Viz [Dejte volbám příkazů vlastní písmena](topic:option-letters).

### LISPEDIT

Zkratky: `VLIDE`; nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Editor LISPu}}. Otevře editor LISPu, okno, které zůstane otevřené vedle výkresu.

- Text: čísla řádků, protějšek závorky u kurzoru označen (červeně, když nemá), {{key:Enter}} odsadí nový řádek pod otevřenou závorkou, {{key:Tab}} napíše dvě mezery, {{key:Esc}} opustí text.
- {{ui:Načíst do výkresu}} ({{key:Ctrl+Shift+Enter}}): přečte každou formu, jako to dělá {{cmd:APPLOAD}} se souborem, a vytvoří jeho příkazy `c:`. Soubor se ukáže v seznamu {{cmd:APPLOAD}}.
- {{ui:Spustit výběr}} ({{key:Ctrl+Enter}}): vyhodnotí vybrané formy, nebo formu, v níž je kurzor.
- {{ui:Zastavit}}: ukončí běžící rutinu.
- {{ui:Konzole}}: co rutina vypsala, a každou chybu s jejím řádkem; kliknutím na chybu se tam přesunete. Text se spouští po jedné formě nejvyšší úrovně, takže řádek je řádkem té formy, nebo uvnitř ní řádkem, který volá funkci, kterou chyba jmenuje.
- {{ui:Nový}}, {{ui:Otevřít}}, {{ui:Uložit}} ({{key:Ctrl+S}}): soubor `.lsp`. Text se také uchovává v tomto prohlížeči, takže zavření okna neztratí.
- Vedle textu: funkce, které rutina definuje, ty, které volá a které tento LISP ještě nemá, ty, které volá a které nejsou ani definovány v ní, ani vestavěny, a úplné seznamy toho, co je vestavěno a co ne.

Text s nikdy neuzavřenou závorkou nebo řetězcem, který nikdy nekončí, se nespustí: řádek se pojmenuje. Krokovací ladicí program, zarážky ani okno sledování neexistují. Viz [Spouštění rutin LISP](topic:run-lisp).

### HELP

Zkratky: `?`. Vypíše každý příkaz, jeho zkratky a jednořádkový popis do historie příkazového řádku. Tuto nápovědu neotevře: pro ni stiskněte {{key:F1}} nebo klikněte na {{ui:Nápověda}}.

## Výzva Vybrat objekty

U každé výzvy `Vyberte objekty`: klikejte na objekty, tažením zleva doprava tvořte okna a zprava doleva křížení (dvěma kliky), nebo stiskněte a táhněte lasso ({{key:Space}} při tažení: okno, křížení, plot), {{key:Shift}}+klik pro odebrání, a {{key:Enter}} pro dokončení. Můžete také napsat `ALL` (vše), `L` (poslední objekt), `P` (Předchozí: co použil poslední příkaz), `F` (Plot: objekty, které protíná čára bodů; `U` vezme bod zpět), `W` (Okno), `C` (Křížení), `R` (režim Odebrat: kliky objekty odeberou; výzva říká `Remove objects`) a `A` (Přidat znovu). `?` je vypíše. V výzvě se neukazují. {{key:Tab}} nad překrývajícími se objekty zvýrazní další; klikněte, abyste jej vybrali. Viz [Výběr objektů](topic:select-objects).

### ACCESS

Zkratky: `AX`. Kreslení bez zraku. {{cmd:ACCESS}} zapíná nebo vypíná přístup (`On`, `Off`) a přepíná zvuky přichycení (`Sound`) a hlasové příkazy (`Voice`); nejprve řekne stav. S přístupem zapnutým se každý příkaz a výsledek čtou přes čtečku obrazovky a plocha výkresu má klávesový kurzor. Téma nápovědy „Kreslení bez zraku“ má klávesy.

### DESCRIBE

Zkratky: `DESC`. Řekne, co výkres obsahuje: kolik je objektů, jakého druhu, jak velké, kolik je vrstev, co je vybráno. Pouze čte; nic nemění.

### WHEREAMI

Zkratky: `WHERE`. Řekne, kde je kurzor, v jednotkách výkresu.

### NEARBY

Řekne, co leží blízko kurzoru, nejbližší první, každé s jeho vzdáleností a stranou, na které je.

### SAYSEL

Řekne, co je vybráno, jednu větu na objekt (délka čáry, konce a úhel; poloměr a střed kružnice; text tak, jak je napsán).

### VOICE

Zapne nebo vypne mluvené příkazy. Rozpoznávají se na tomto počítači; kde prohlížeč tohle neumí, zůstane hlas vypnutý, dokud v Nastavení nezvolíte online službu prohlížeče.

### TOUCHCROSSHAIR

Zkratky: `TCX`. Posunutý zaměřovací kříž pro kreslení prstem, aby špička prstu nezakrývala bod, který vybíráte. Dokud je zapnutý, jeden prst na výkresu nic nevybírá: pohybuje zaměřovacím křížem, který sedí nad prstem a na jedné straně něj. Přichytávání k objektům a sledování sledují kříž. Zvednutí prstu nic nevybere a nechá kříž, kde je. K výběru stiskněte tlačítko {{ui:Klik}} v rohu výkresu, nebo klepněte kamkoli na výkres druhým prstem. Podržte {{ui:Klik}}, zatímco pohybujete druhým prstem, abyste táhli (výběrové okno, lasso, úchyt). Prst držený nehybně, nebo tlačítko {{ui:Enter}}, je Enter. Dva prsty posouvají a přibližují jako dřív. Blízko dolního okraje a vzdáleného okraje se kříž přibližuje k prstu, takže každá část výkresu je dosažitelná. Pero a myš vždy vybírají přímo.

{{cmd:TOUCHCROSSHAIR}} řekne stav a zeptá se `ON`, `OFF`, `Auto` (zapnuto jen tam, kde je prst jediným ukazatelem, takže je vypnuto na počítači s myší), `Distance` (jak daleko kříž sedí od prstu, 24 až 240 pixelů) nebo `Side` (`Left`: nahoru a vlevo, pro pravou ruku; `Right` pro levou ruku; tlačítka přejdou do druhého rohu). Stejné volby jsou v Nastavení › CadCraft, a na zařízení s dotykovou obrazovkou má stavový řádek přepínač {{ui:Posunutý zaměřovací kříž}}. Volby se uchovávají v tomto prohlížeči.

### WHOHAS

Řekne, kdo má výkres otevřený. Ve CadCraft Studiu na počítači otevření DWG nebo DXF zapíše vedle něj malý zamykací soubor (`Plan.dwg.cclock`: kdo, od kdy, která verze), obnovuje jej každou minutu, dokud je výkres otevřený, a při zavření výkresu jej odstraní. Otevření výkresu, který má otevřený někdo jiný, řekne kdo a od kdy a nabídne {{ui:Otevřít jen pro čtení}} (Uložit potom žádá nový název), {{ui:Otevřít přesto}} (ten druhý se dozví při své příští obnově) nebo {{ui:Zrušit}}. Uložení přes soubor, který má otevřený někdo jiný, se nejprve zeptá. Zámek, který nebyl obnoven pět minut, je zastaralý: druhá kopie se zavřela bez uložení, nebo je počítač uspaný.

{{cmd:WHOHAS}} se zeptá `Current` (otevřený výkres), `File` (vyberte jeden), `FOlder` (vyberte složku: vypíše každý výkres v ní, který je někde otevřen), `Path` (napište úplnou cestu), nebo `Name` (jméno, které vidí ostatní; název vašeho účtu, když jste přihlášeni). Studio dosáhne jen na složky, které jste zvolili: u výkresu otevřeného ze složky, která nikdy nebyla zvolena, řekne jednou, že nemůže výkres zapsat jako otevřený; `FOlder` složku zvolí a zámky tam fungují od té chvíle. Zámek je poznámka pro lidi, ne zábrana: jiný program může soubor stále zapsat. V prohlížeči nejsou žádné složky, kde by se hledalo, a příkaz to řekne.

### OVERKILL

Smaže duplicitní objekty a upraví překrývající se čáry a oblouky, pro výkresy, které přijdou plné zdvojených linií. `Vyberte objekty k vyčištění`, {{key:Enter}}, potom {{key:Enter}} znovu pro vyčištění s ukázanými nastaveními, nebo nejprve něco změňte:

- `Tolerance`: jak blízko musí být dvě souřadnice, aby se počítaly jako stejné (zpočátku 0,000001; 0 znamená přesně stejné).
- `Ignore`: vlastnosti, které se mohou u jinak stejných dvou objektů lišit. Napište název a přepněte jej: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, nebo `None` / `All`. {{key:Enter}}, až budete hotovi.
- `Overlap`: zapnuto nebo vypnuto. Zapnuto, čáry na jedné přímce, které se překrývají, se stanou jednou čárou (čára ležící uvnitř jiné je prostě smazána), a oblouky na jedné kružnici, které se překrývají, se stanou jedním obloukem; oblouky, které uzavírají celý obrat, se stanou kružnicí, a oblouk ležící na kružnici se smaže.
- `Ends`: zapnuto nebo vypnuto. Zapnuto, čáry na jedné přímce a oblouky na jedné kružnici, které se jen dotýkají konec na konec, se stanou jedním kusem.

Každý druh objektu se kontroluje na duplicity: dva objekty jsou duplicity, když je jejich geometrie stejná v toleranci a jejich vrstva, barva, typ čáry, měřítko typu čáry, tloušťka čáry, tloušťka, průhlednost a výška se shodují (méně těch, které ignorujete). Čáry a otevřené mnohočáry se shodují také, když jsou nakresleny opačným směrem. První objekt v pořadí kreslení zůstane a zachová si své vlastní vlastnosti. Příkaz řekne, kolik objektů zkontroloval a smazal: duplicity, překrývající se kusy sloučené, kusy spojené konec na konec. Jedno {{cmd:UNDO}} to všechno vrátí. Nastavení platí, dokud nezavřete okno výkresu.

Nechává být: objekty na zamčených vrstvách a skryté objekty. Nesloučí čáry s výškou (Z) (přesné duplicity jich se přesto týkají), a nedotýká se úseků uvnitř mnohočáry (nejsou ztenčeny), čáry ležící na úseku mnohočáry, a uzavřené mnohočáry nakreslené opačným směrem.

### DRAWORDER

Změní, které objekty se kreslí vpředu. `Vyberte objekty k přeřazení`, {{key:Enter}}, potom `Nad objekty`, `Pod objekty`, `Vpředu` nebo `Vzadu` ({{key:Enter}} = `Vzadu`). `Nad objekty` a `Pod objekty` se ptají na referenční objekty: výběr jde hned před nejpřednější z nich, nebo hned za nejzadnější z nich. Vybrané objekty si mezi sebou ponechají své vlastní pořadí. Jeden krok zpět. Pořadí se ukládá s výkresem v DWG a DXF, kde je to pořadí, v němž se objekty zapisují.

Na obrazovce se každý objekt kreslí v pořadí výkresu, jak jej kreslí ostatní programy, které soubor otevřou: plná šrafa, široká mnohočára nebo maska textu zakrývá čáry a text za sebou, a co je vpředu, zakrývá to vzadu. Kde čára kříží text, oba se ukážou. Obrázky a připojené stránky PDF zůstávají pod čárovou kresbou. U velmi velkého výkresu, jehož výplně a čárová kresba se překrývají a střídají více než 256krát, si prvních 256 zachová své pořadí a zbytek kreslí své výplně pod čárami, aby překreslení zůstalo rychlé.

### TEXTTOFRONT

Přenese text, kóty a výnosky před všechno ostatní v otevřeném prostoru: `Text`, `Dimensions`, `Leaders` nebo `All` ({{key:Enter}} = `All`). Jeden krok zpět. Řekne to, když tam nic není, nebo když už jsou vpředu.

### HATCHTOBACK

Pošle každou šrafu otevřeného prostoru za všechno ostatní, takže výplně přestanou zakrývat čárovou kresbu a text v uloženém souboru. Bez výzev. Jeden krok zpět.

### ISOLATEOBJECTS

Zkratky: `ISOLATE`. Zobrazí jen vybrané objekty: všechno ostatní v otevřeném prostoru zmizí z dohledu, dokud nepřijde {{cmd:UNISOLATEOBJECTS}}. Na rozdíl od {{cmd:LAYISO}} pracuje s objekty, které vyberete, bez ohledu na jejich vrstvy, a žádnou vrstvu nemění. Skryté objekty se nekreslí, nevybírají, na ně nepřichytává, na ně nezoomuje se a nevykreslují se, a příkazy, které berou `ALL`, je přeskakují. Co nakreslíte, zatímco jsou objekty izolované, se ukáže obvykle.

Platí jen pro relaci: nic o tom se s výkresem neukládá, není to krok zpět, a když výkres znovu otevřete, vše je vidět. Zatímco jsou objekty skryté, stavový řádek ukazuje tlačítko s jejich počtem; kliknutím je znovu zobrazíte.

### HIDEOBJECTS

Skryje vybrané objekty, dokud nepřijde {{cmd:UNISOLATEOBJECTS}}. Stejná pravidla jako u {{cmd:ISOLATEOBJECTS}}: jen pro relaci, neukládá se, není to krok zpět.

### UNISOLATEOBJECTS

Zkratky: `UNISOLATE`, `UNHIDE`. Znovu zobrazí každý objekt skrytý příkazem {{cmd:ISOLATEOBJECTS}} nebo {{cmd:HIDEOBJECTS}} a řekne, kolik se jich vrátilo.

### LAYLOCKFADE

Nastaví, jak vypadají objekty na zamčených vrstvách a zda se na ně klik dostane. Řekne aktuální stav a potom přijme:

- číslo od 0 do 90: míru vyblednutí v procentech (zpočátku 50). 0 vyblednutí vypne.
- `ON` nebo `OFF`: vyblednutí zapnuto nebo vypnuto, se zachováním míry.
- `Pick`, potom `Yes` nebo `No`: smí klik vybrat objekty na zamčených vrstvách, když neběží žádný příkaz? `No` (výchozí): nelze je vůbec vybrat. `Yes`: klik nebo okno je vybere, aby je {{ui:Vlastnosti}} mohly ukázat; stále se nedají změnit, a vlastní `Vyberte objekty` příkazu je nikdy nebere.

Přichytávání k objektům najde objekty na zamčených vrstvách v každém případě. Vykreslení se nikdy nevyblednou. Obě nastavení jsou vaše, ne výkresu, a jsou také v {{ui:Nastavení}} pod {{ui:Zamčené vrstvy}}.

### BURST

Rozloží odkazy na bloky a ponechá to, co říkají jejich atributy. `Vyberte odkazy na bloky k rozložení`, {{key:Enter}}: každý odkaz se nahradí objekty bloku a hodnota každého viditelného atributu se stane prostým textem na vlastní vrstvě toho atributu (atribut na vrstvě 0 přistane na vrstvě odkazu, jako ostatní objekty bloku na vrstvě 0). Neviditelné atributy se zahodí. Blok uvnitř bloku zůstane odkazem na blok. Jeden krok zpět; oznámí, kolik odkazů bylo rozloženo a kolik hodnot atributů se změnilo na text.

Odmítne propojený výkres podle názvu (nejprve jej svažte, nebo z něj zkopírujte pomocí {{cmd:NCOPY}}) a ostatní vybrané objekty nechá být. U odkazů na bloky dá {{cmd:EXPLODE}} tytéž objekty; {{cmd:BURST}} bere jen odkazy na bloky a počítá text atributů.

### TXT2MTXT

Zkratky: `T2M`. Spojí jednořádkové texty do jednoho odstavcového textu. `Vyberte jednořádkový text ke spojení`, {{key:Enter}}, potom `Paragraph` (řádky se spojí a zalomí podle šířky nejširšího řádku) nebo `Lines` (každý text zůstane vlastním řádkem); {{key:Enter}} vezme ten, který byl použit naposledy. Řádky se řadí shora dolů, potom zleva doprava, podél směru horního textu. Odstavec visí od levého horního rohu horního textu a převezme jeho výšku, natočení, styl, vrstvu a barvu. Jeden krok zpět.

Text, který už je odstavcovým textem, prázdný text a jiné objekty ve výběru se nechají být a příkaz řekne, kolik jich bylo.

### NCOPY

Zkopíruje objekty z odkazu na blok nebo z propojeného výkresu do výkresu, bez rozložení čehokoli. `Vyberte objekt uvnitř odkazu na blok nebo propojeného výkresu`: objekt nejbližší výběru se zkopíruje tam, kde se ukazuje, bez ohledu na to, jak hluboko v blocích leží; vyberte další a potom {{key:Enter}}. Další `Základní bod pro přesun kopií`: {{key:Enter}} je nechá na místě, nebo zadejte základní bod a druhý bod. Celý příkaz je jeden krok zpět.

Kopie převezme vrstvu, na které se ukazuje: objekt na vrstvě 0 uvnitř bloku přistane na vrstvě odkazu, v němž ležel, a barva ByBlock se stane barvou toho odkazu. Z propojeného výkresu se vrstva `Plan|Walls` změní na `Plan$0$Walls` (název, který dává propojení), vytvořená s barvou, typem čáry a tloušťkou propojené vrstvy. Hodnota atributu se zkopíruje jako text. Odkazy na bloky na zamčených vrstvách nelze vybrat.

### FLATTEN

Nastaví výšku (Z) a tloušťku vybraných objektů na 0. `Vyberte objekty k zploštění`, {{key:Enter}}. Zploští také objekty uvnitř definic bloků, které výběr používá (a bloky uvnitř nich), takže se změní každý odkaz na tyto bloky; propojené výkresy se nechají být. Jeden krok zpět; řekne, kolik objektů se změnilo, a řekne to také, když žádný neměl výšku ani tloušťku.

Co CadCraft uchovává z třetího rozměru ve 2D výkresu: výšku u kružnic, oblouků, elips, bodů, textu, odkazů na bloky, šrafy, výnosek a mnohočar (jejich kóta), výšku na každém konci čáry a tloušťku u čar, kružnic, oblouků, mnohočar, bodů a textu, tak jak je soubor měl. {{cmd:FLATTEN}} vymaže přesně tyto hodnoty. Nedotýká se 3D modelu na kartě 3D, 3D ploch ani těles a objekt nakreslený v nakloněné rovině už byl při otevření souboru převeden do roviny výkresu.

### BREAKLINE

Nakreslí čáru se symbolem přerušení, pro pohled, který je useknut. Řekne aktuální velikost a prodloužení, potom `First point of the break line` (nebo nejprve `Size` / `Extension`, abyste je změnili), `Second point` a `Where the break symbol sits`: klikněte podél čáry, nebo {{key:Enter}} pro střed. Výsledek je jedna mnohočára na aktuální vrstvě: čára, která přesahuje každý bod o prodloužení, s Z tahem vysokým jako velikost a poloviční délky.

`Size` a `Extension` se pamatují jako vaše nastavení (velikost začíná na dvojnásobku výšky textu kóty krát měřítko kóty; prodloužení na polovině velikosti). {{key:Enter}} příkaz opakuje.

### AUDIT

Zkontroluje otevřený výkres na poškození a opraví ho. {{cmd:AUDIT}} prohlédne každý objekt v modelu, na listech a uvnitř bloků, a tabulku vrstev, a vypíše, co našel, podle druhu:

- čísla, která nejsou konečná, nebo jsou absurdně velká;
- objekty bez velikosti: čára bez délky, kružnice bez poloměru, mnohočára s jedním místem, text bez písmen nebo výšky, odkaz na blok s nulovým měřítkem;
- objekty na vrstvě, kterou výkres nemá; odkazy na blok, který tam není; názvy stylů textu a kót a názvy typů čar, které ve výkresu nejsou;
- bloky, které obsahují samy sebe, přímo nebo přes jiné bloky;
- objekty, které sdílejí id, klíč nebo popisovač souboru;
- kóty bez bodů, z nichž se měří, a šrafy, jejichž hranice není uzavřený obrys.

Potom se zeptá `Fix them? [Yes/No]`. `No` nic nemění. `Yes` opraví všechno v jednom kroku zpět: co nejde nakreslit, se odstraní (špatná čísla, žádná velikost, chybějící blok, rozbitá kóta, šrafa bez použitelné hranice, odkaz, který uzavírá kruh bloků); chybějící vrstva se vytvoří; neznámé názvy stylů a typů čar se vrátí na výchozí; sdílený klíč se nahradí. Vypíše, kolik objektů bylo odstraněno a kolik opraveno. Stejné nálezy se objeví v panelu Problémy, každý se svou vlastní {{ui:Opravit}}.

Nic neodmítá, ale kontroluje jen to, co samo CadCraft kreslí: data uchovaná pro jiné programy (3D tělesa, objekty OLE) se neotevírají.

### RECOVER

Otevře poškozený DXF nebo DWG. {{cmd:RECOVER}} se zeptá na soubor, přečte, co lze přečíst, místo odmítnutí souboru, vypíše, co přeskočil nebo předpokládal, potom zkontroluje a opraví výkres tak, jak to dělá {{cmd:AUDIT}} s `Yes`.

- DXF: řádky, které nejsou součástí dvojice kód a hodnota, se přeskočí, dokud se dvojice znovu nesrovnají; sekce bez konce se uzavře; soubor, který je useknut, se přečte až k místu useknutí; binární DXF, který je useknut, se přečte až k poslední celé hodnotě. Když sekce, blok nebo objekt stále nejde přečíst, vynechá se a je pojmenován, a čtení pokračuje za ním.
- DWG: objekty, které neprojdou svými kontrolami nebo nejdou dekódovat, se vynechají, a ztracený seznam objektů se obnoví procházením dat objektů.

Soubor na disku se nezmění. Obnovený výkres se otevře neuložený: uložte jej pod novým názvem. Soubor, z něhož nejde přečíst vůbec nic, se odmítne s důvodem.

### LEGACYTEXT

Převede text psaný starými 8bitovými vietnamskými písmy do Unicode. Krátké názvy `TEXTTOUNICODE` a `VNTEXT`.

Starší vietnamské výkresy drží text jako západní znaky, které z něj font udělá vietnamštinu: text TCVN3 v písmech ABC (`.VnTime`, `.VnArial`, a velkopísmenná písma, jejichž názvy končí na `H`), a text VNI v písmech VNI (`VNI-Times`). CadCraft takový text zobrazí tak, jak se čte, jakmile je výkres otevřen, podle písma jeho stylu textu, objektu, nebo úseku uvnitř odstavcového textu; soubor stále drží staré znaky.

{{cmd:LEGACYTEXT}} řekne, kolik textů našel v každém kódování, a zeptá se `Convert … to Unicode?`. `Yes` přepíše každý z nich (model, listy, bloky, hodnoty a definice atributů) a dá stylům textu písmo Unicode (Times New Roman, Arial nebo Courier New podle druhu starého písma), v jednom kroku zpět. Formátování uvnitř odstavcového textu se zachová.

Když žádný text nepoužívá známé písmo (styl, který ztratil název písma), zeptá se `Read selected texts as [Tcvn3/Vni/None]`: zvolte kódování a vyberte texty. Text, který je už v Unicode, se nechá být. Přepsání textu kót a text víceúrovňových výnosek se nepřevádí.
