---
title: Referenční příručka příkazů
summary: Každý příkaz v kreslicí aplikaci CadCraft s jeho zkratkami, otázkami, které klade, volbami a výchozími hodnotami.
keywords: příkazy, zkratky, seznam příkazů, plocha, obvod, measuregeom, úsečka, pline, kružnice, oblouk, oříznout, odsazení, dimlinear, blok, vložit, rozvržení, vykreslit, zoom, nápověda, copyclip, cutclip, pasteclip, pasteorig, copybase, duplikovat, selectall
from: 7db2646b
---

Napište název příkazu nebo zkratku a stiskněte {{key:Enter}} nebo {{key:Space}}. Velikost písmen nevadí a úvodní `_`, `-`, `.` nebo `'` se ignoruje. Napište `HELP` (nebo `?`) a vypíše se krátký seznam všech příkazů v historii příkazového řádku; stiskněte {{key:F1}} pro tuto nápovědu.

Jak číst výzvy: volby jsou v hranatých závorkách a vyberete je napsáním jejich velkých písmen (`D` pro Průměr). Výchozí hodnota je v lomených závorkách; stisknutím {{key:Enter}} ji přijmete. Tam, kde se žádá bod, můžete kliknout nebo napsat kterýkoli z formátů z [Zadávání souřadnic a vzdáleností](topic:coordinate-entry). Tam, kde se žádá vzdálenost, můžete napsat číslo, nebo kliknout na dva body.

Stisknutí {{key:Enter}} tam, kde se žádá bod nebo objekt a nemá to výchozí hodnotu, příkaz ukončí. {{key:Esc}} jej zruší. Cokoli příkaz provedl, lze vrátit jedním krokem zpět.

## Kreslení

### LINE

Zkratky: `L`. Přímé úseky, každý jako samostatný objekt.

- `Zadejte první bod` (Enter: začít od posledního zadaného bodu)
- `Zadejte další bod [Zpět (U)]`, opakováno. Po dvou úsečkách: `[Zpět (U)/Uzavřít (C)]`.
- `U` vrátí zpět poslední úsečku, `C` uzavře k prvnímu bodu a ukončí. Enter ukončí.

### PLINE

Zkratky: `PL`. Jedna mnohočára z úseček a oblouků.

- `Zadejte počáteční bod`
- `Zadejte další bod [Oblouk (A)/Uzavřít (C)/Zpět (U)]` (Uzavřít, jakmile budou dva segmenty)
- `A` přepne na oblouky: `Zadejte koncový bod oblouku [Úsečka (L)/Uzavřít (CL)/Zpět (U)]`. Každý oblouk navazuje tečně na předchozí segment. `L` se vrátí k úsečkám, `CL` uzavře obloukem.
- Enter ukončí; mnohočára zůstane otevřená.

### CIRCLE

Zkratky: `C`.

- `Zadejte střed kružnice [3P/2P/Ttr (tečna, tečna, poloměr)]`
- `Zadejte poloměr kružnice [Průměr (D)] <poslední poloměr>`; `D` se zeptá `Zadejte průměr kružnice`.
- `2P`: dva konce průměru. `3P`: tři body na kružnici.
- `T` (také příkaz `TTR` a {{ui:Kreslení}} › {{ui:Více}} › {{ui:Kružnice: tečna, tečna, poloměr}}): `Zadejte bod na objektu pro první tečnu kružnice`, potom druhou, a potom poloměr (Enter: poslední). Kružnice se dotýká obou objektů (úseček, oblouků, kružnic, segmentů mnohočáry, i uvnitř bloků); z kružnic, které to splňují, ta, která se dotýká nejblíže vašim bodům. „Kružnice neexistuje“, když žádná nevyhovuje.
- `TTT` (nebo {{ui:Kreslení}} › {{ui:Více}} › {{ui:Kružnice: tečna, tečna, tečna}}): tři objekty; kružnice, která se dotýká všech tří, nejblíže vašim bodům (tři úsečky dají vnitřní kružnici, nebo vnější, podle toho, kam kliknete).

### ARC

Zkratky: `A`.

- `Zadejte počáteční bod oblouku [Střed (C)]`, `Zadejte druhý bod oblouku`, `Zadejte koncový bod oblouku`: oblouk procházející třemi body.
- `C`: `Zadejte střed oblouku`, `Zadejte počáteční bod oblouku`, `Zadejte koncový bod oblouku`. Oblouk běží proti směru hodinových ručiček od počátku ke konci.

### RECTANG

Zkratky: `REC`, `RECTANGLE`. Uzavřená mnohočára.

- `Zadejte první roh`, `Zadejte druhý roh`. Napište `@šířka,výška` pro druhý roh.

### POLYGON

Zkratky: `POL`. Pravidelný mnohoúhelník jako uzavřená mnohočára.

- `Zadejte počet stran <4>` (3 až 1024)
- `Zadejte střed mnohoúhelníku`
- `Zadejte volbu [Vepsaný do kružnice (I)/Opsaný ke kružnici] <I>`
- `Zadejte poloměr kružnice`: klikněte nebo napište bod; jeho vzdálenost určí velikost a jeho směr otočí mnohoúhelník.

### ELLIPSE

Zkratky: `EL`.

- `Zadejte koncový bod osy elipsy [Střed (C)]`, `Zadejte druhý koncový bod osy`, `Zadejte vzdálenost k druhé ose`
- `C`: `Zadejte střed elipsy`, `Zadejte koncový bod osy`, potom vzdálenost k druhé ose.

### HATCH

Zkratky: `H`, `BH`, `BHATCH`; nebo {{ui:Šrafa}} na panelu nástrojů. Nejprve vypíše aktuální vzor, měřítko a úhel.

- `Vyberte vnitřní bod [Vybrat objekty (S)/Vzor (P)/Měřítko (SC)/Úhel (A)]`, opakováno (`Zpět (U)`, jakmile je oblast): každé kliknutí přidá uzavřenou oblast kolem něj, s uzavřenými tvary uvnitř jako ostrůvky. Enter vytvoří jednu šrafu ze všech.
- `S`: `Vyberte uzavřené objekty` (uzavřené mnohočáry, kružnice, uzavřené elipsy).
- `P`: `Zadejte název vzoru, SOLID, nebo ? pro seznam <aktuální>`. `SC`: `Zadejte měřítko vzoru`. `A`: `Zadejte úhel vzoru`.

Viz [Šrafy a výplně oblastí](topic:hatch).

### POINT

Zkratky: `PO`; nebo {{ui:Kreslení}} › {{ui:Více}} › {{ui:Bod}}. Bodové objekty, jeden na každé kliknutí, dokud nestisknete Enter.

- `Zadejte bod`

### XLINE

Zkratky: `XL`; nebo {{ui:Kreslení}} › {{ui:Více}} › {{ui:Konstrukční přímka}}. Konstrukční přímky, nekonečné oběma směry. Viz [Konstrukční přímky a polopřímky](topic:construction-lines).

- `Zadejte bod [Vodorovná (H)/Svislá (V)/Úhel (A)/Půlení (B)/Odsazení (O)]`, potom `Zadejte bod průchodu` pro každou přímku, dokud nestisknete Enter.
- `A`: `Zadejte úhel konstrukční přímky [Reference] <0>`; `R` se nejprve zeptá `Vyberte objekt přímky`.
- `B`: `Zadejte vrchol úhlu`, `Zadejte počáteční bod úhlu`, potom `Zadejte koncový bod úhlu` pro každou přímku.
- `O`: `Zadejte vzdálenost odsazení [Skrz (T)] <Skrz>`, potom `Vyberte objekt přímky` a `Zadejte stranu pro odsazení` (nebo `Zadejte bod průchodu`) pro každou přímku.

### RAY

Bez zkratek; nebo {{ui:Kreslení}} › {{ui:Více}} › {{ui:Polopřímka}}. `Zadejte počáteční bod`, potom `Zadejte bod průchodu` pro každou polopřímku, dokud nestisknete Enter.

### TEXT

Zkratky: `DT`, `DTEXT`; nebo {{ui:Text}} na panelu nástrojů. Jednořádkový text; každý řádek je samostatný objekt.

- `Zadejte počáteční bod textu [Zarovnání (J)]`
- `J`: `Zadejte volbu [Vlevo (L)/Střed (C)/Vpravo (R)/Uprostřed (M)/TL/MC] <L>`, potom `Zadejte vkládací bod textu`
- `Zadejte výšku <aktuální výška textu>`
- `Zadejte úhel natočení textu <0>`
- `Zadejte text`, opakováno: každý Enter začne další řádek pod ním. Enter na prázdném řádku ukončí. {{key:Space}} zde napíše mezeru.

## Úpravy

Zkratky: `MT`, `T`; nebo {{ui:Odstavec}} na panelu nástrojů. Odstavcový text, který se zalamuje na šířku, psaný přímo na místě.

- `Zadejte první roh`
- `Zadejte protilehlý roh [Výška (H)/Zarovnání (J)/Řádkování (L)/Otočení (R)/Šířka (W)]`: šířka mezi dvěma rohy je místo, kde se text zalamuje. `H` se zeptá `Zadejte výšku`, `J` `Zadejte zarovnání [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Zadejte násobek řádkování (0.25 až 4)`, `R` `Zadejte úhel natočení`, `W` `Zadejte šířku (0 bez zalamování)` a přeskočí druhý roh.
- Potom se na výkresu otevře okénko: píšete, {{key:Enter}} začne nový odstavec, {{key:Mod+Enter}} nebo kliknutí mimo okénko dokončí, {{key:Esc}} zruší. Jeho lišta nastavuje výšku, řádkování, šířku a zarovnání. Viz [Přidání textu a popisků](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Zkratky: `ED`, `DDEDIT`; nebo dvojklik na text. `Vyberte text k úpravě`, opakováno, dokud nestisknete {{key:Enter}}: každý se otevře ve stejném okénku. Spuštěný nad vybraným, nebo dvojklikem označeným textem, upraví tento jeden a skončí.

### ERASE

Zkratky: `E`, `DELETE`; nebo stiskněte {{key:Delete}} s vybranými objekty.

- `Vyberte objekty` (přeskočeno, pokud jsou objekty už vybrány)

### MOVE

Zkratky: `M`.

- `Vyberte objekty`
- `Zadejte základní bod [Posunutí (D)]`, `Zadejte druhý bod`
- `D`: `Zadejte posunutí`, zadané jako `dx,dy`.

### COPY

Zkratky: `CO`, `CP`. Kopie tolikrát, kolikrát zadáte body.

- `Vyberte objekty`
- `Zadejte základní bod [Posunutí (D)]`
- `Zadejte druhý bod [Zpět (U)]`, opakováno, dokud nestisknete Enter. `U` vrátí zpět poslední kopii.

### ROTATE

Zkratky: `RO`.

- `Vyberte objekty`, `Zadejte základní bod`
- `Zadejte úhel natočení <poslední úhel>`: ve stupních, kladné proti směru hodinových ručiček; nebo klikněte na bod a otočte směrem k němu.

### SCALE

Zkratky: `SC`.

- `Vyberte objekty`, `Zadejte základní bod`
- `Zadejte násobek měřítka`: napište násobek, například `0.5` nebo `2`. Kliknutý bod dá svou vzdálenost od základního bodu jako násobek.

### MIRROR

Zkratky: `MI`.

- `Vyberte objekty`
- `Zadejte první bod zrcadlící přímky`, `Zadejte druhý bod zrcadlící přímky`
- `Smazat zdrojové objekty? [Ano (Y)/Ne] <N>`

### ALIGN

Zkratky: `AL`; nebo {{ui:Úpravy}} › {{ui:Více}} › {{ui:Zarovnat}}.

- `Vyberte objekty`
- `Zadejte první zdrojový bod`, `Zadejte první cílový bod`
- `Zadejte druhý zdrojový bod (Enter pro pokračování)`, `Zadejte druhý cílový bod`
- `Zadejte třetí zdrojový bod (Enter pro pokračování)`, `Zadejte třetí cílový bod`
- Se dvěma páry: `Změnit měřítko objektů podle zarovnávacích bodů? [Ano (Y)/Ne] <N>`

Viz [Zarovnání objektů](topic:modify-objects#align-objects).

### ALIGNTO

- `Vyberte objekty` (nebo výběr), `Zarovnat [Vlevo (L)/Střed (C)/Vpravo (R)/Horní (T)/Střední (M)/Dolní (B)] <Vlevo>`, `Vůči [Výběr (S)/První (F)/Poslední (L)/Bod (P)] <Výběr>`; `P` se zeptá na bod. Výběr zůstane.

### DISTRIBUTE

- `Vyberte objekty` (alespoň tři), `Rozmístit [Vodorovně (H)/Svisle (V)] <Vodorovně>`, `Rozestup rovnoměrně [Středy (C)/Mezery (G)] <Mezery>`. Krajní dva zůstanou; výběr zůstane.

### ALIGNPANEL

Zkratky: `ALP`; nebo {{ui:Úpravy}} › {{ui:Více}} › {{ui:Zarovnat a rozdělit}}. Otevře panel, který spouští ALIGNTO a DISTRIBUTE kliknutím.

### LASER

Zkratky: `LASERCUT`; nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Laser…}}. Otevře panel Laser nad výkresem: co každá vrstva dělá (řezat, rýsovat, gravírovat, vyplnit, obrázek), náhled, G-kód GRBL k uložení, a rámování a odesílání přes Web Serial. Viz [Odeslání výkresu do laseru](topic:laser-cutting).

### STRETCH

Zkratky: `S`; nebo {{ui:Natáhnout}}. `Vyberte objekty k natažení`: přetáhněte křížová okna (nebo napište `C`) přes konce, které chcete posunout. `Zadejte základní bod [Posunutí (D)]`, `Zadejte druhý bod`. Body uvnitř oken se posunou: konce úseček, vrcholy mnohočáry (segmenty oblouku si zachovají svou výšku), body kót; kružnice, elipsy, text, body a bloky se posunou celé, když je uvnitř jejich střed nebo vkládací bod. Výběr provedený před příkazem zachová křížová okna (a lasa), která jej vytvořila, takže se natahují stejně. Bez okna se objekty posunou celé.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Zkratky: `AR`; nebo {{ui:Pole}}. `Vyberte objekty`, potom `Zadejte typ pole [Obdélníkové (R)/Kruhové (PO)] <Obdélníkové>` (jen ARRAY).

- Obdélníkové začne ve 4 sloupcích × 3 řádcích, rozmístěných po 1,5násobku velikosti objektů, zobrazeno jako náhled. `Zadejte volbu [Počet (COU)/Rozestup (S)/Sloupce (COL)/Řádky (R)/Ukončit (X)] <X>`: `COU` se zeptá na sloupce a řádky, `S` na vzdálenosti mezi sloupci a mezi řádky (záporná jde doleva nebo dolů), `COL` a `R` každý jeden směr.
- Kruhové se zeptá `Zadejte střed pole`, začne se 6 položkami celým kruhem, otočenými. `Zadejte volbu [Položky (I)/Úhel výplně (F)/Otočit položky (ROT)/Ukončit (X)] <X>`: `I` položky, `F` úhel, který vyplnit (+ proti směru hodinových ručiček, − po směru), `ROT` Ano nebo Ne.
- {{key:Enter}} (Ukončit) vytvoří kopie jako obyčejné objekty. Jeden krok zpět.

### OFFSET

Zkratky: `O`. Úsečky, oblouky, kružnice a mnohočáry.

- `Zadejte vzdálenost odsazení [Skrz (T)] <poslední vzdálenost, nebo Skrz>`
- `Vyberte objekt k odsazení`, potom `Zadejte bod na straně pro odsazení` (nebo, se Skrz, `Zadejte bod průchodu`), opakováno, dokud nestisknete Enter.

### TRIMEXTENDMODE

- `Zadejte novou hodnotu pro TRIMEXTENDMODE (1 Rychlý, 0 Standardní)`: jak začínají {{cmd:TRIM}} a {{cmd:EXTEND}}. `1` Rychlý: každý objekt je řezná hrana nebo hranice. `0` Standardní: nejprve se zeptají na hrany. Také `(setvar "TRIMEXTENDMODE" 0)` v LISPu.

### TRIM

Zkratky: `TR`. Nejprve vypíše `Aktuální nastavení: rychlý režim (TRIMEXTENDMODE 1), hrany: bez prodloužení, tažení kreslí dráhu`. V rychlém režimu je každý viditelný objekt řeznou hranou a objekt, který nic neprotíná, se smaže; ve standardním režimu se nejprve zeptá `Vyberte řezné hrany (Enter = každý objekt)` a řeže jen u nich.

- `Vyberte objekt k oříznutí, nebo shift-vyberte k prodloužení [Řezné hrany (T)/Plot (F)/Křížení (C)/Režim (O)/Hrana (E)/Smazat (R)/Zpět (U)]`, opakováno: klikněte na kus, který se odstraní (při pohledu na něj ukazuje šedě a čárkovaně), přetáhněte dráhu přes více kusů (vše jde do jednoho kroku), nebo klikněte na dva prázdné body pro plot mezi nimi. {{key:Shift}} místo toho prodlužuje. `T` vybere řezné hrany (standardní režim), `F` se zeptá na body plotu, `C` dva rohy okna (kusy částečně uvnitř odejdou), `O` se zeptá `Zadejte volbu režimu oříznutí [Rychlý/Standardní]`, `E` se zeptá `Zadejte režim implicitního prodloužení hrany [Prodloužit/Neprodlužovat]` (EDGEMODE), `R` smaže vybrané objekty, `U` vrátí zpět poslední výběr nebo tah. Enter ukončí. Viz [Oříznutí a prodloužení](topic:trim-and-extend).

### EXTEND

Zkratky: `EX`. Totéž jako TRIM obráceně: `Vyberte objekt k prodloužení, nebo shift-vyberte k oříznutí [Hraniční hrany (B)/Plot (F)/Křížení (C)/Režim (O)/Hrana (E)/Zpět (U)]`. Klik prodlouží konec nejblíž k němu až k další hranici; tažená dráha nebo plot prodlouží každý objekt, který protíná; {{key:Shift}} ořízne. `B` vybere hraniční hrany (standardní režim). Režim a Hrana jsou sdílené s TRIM.

### LINKVIEWS

Zkratky: `SYNCVIEWS`; nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Propojit pohledy oken}}, nebo ikona odkazu na záložkách výkresu. `Propojit pohledy oken [ZAP/VYP]` (Enter přepne na opačný stav): dokud je zapnuto, posun nebo zoom v aktivním okně pohne každým oknem se stejným druhem prostoru. Viz [Rozdělení obrazovky](topic:split-screen).

### OPENIN3D

Bez zkratek; nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Otevřít v ModelCraftu}}, kde aplikace pro 3D modelování přebírá předaný výkres. Otevře jej tam v nové záložce, jako DWG (nic se nenahrává). Pokud prohlížeč záložku zablokuje, oznámí to.

### LASSOMODE

`Zadejte novou hodnotu pro LASSOMODE (1 = lasso, 0 = obdélník)`: co dělá stisk a tažení na prázdném místě. Stejné jako Nastavení › CadCraft › Tažení pro výběr. Viz [Výběr lassem](topic:lasso-selection).

### FILLET

Zkratky: `F`. Úsečky, oblouky, kružnice a mnohočáry. Nejprve vypíše `Aktuální nastavení: Režim = TRIM, Poloměr = 0`.

- `Vyberte první objekt [Zpět (U)/Mnohočára (P)/Poloměr (R)/Oříznutí (T)/Vícenásobně (M)]`
  - `R` se zeptá `Zadejte poloměr zaoblení <poslední>`. `T` se zeptá `Zadejte volbu režimu oříznutí [Oříznout (T)/Bez oříznutí]`: bez oříznutí objekty zůstanou, jak jsou, a přidá se jen oblouk.
  - `M` nechá příkaz běžet pro další rohy, dokud nestisknete {{key:Enter}}; `U` vrátí zpět poslední roh, aniž by příkaz opustil.
  - `P` se zeptá `Vyberte 2D mnohočáru [Poloměr (R)]` a zaoblí každý roh, kde se stýkají dva rovné segmenty. Zaoblení, která už má, se nahradí novým poloměrem; poloměr 0 je odstraní. Rohy, jejichž strany jsou pro poloměr příliš krátké, zůstanou a jsou spočítány.
- `Vyberte druhý objekt, nebo shift-vyberte k použití rohu [Poloměr (R)]`. Při kliknutí podržte {{key:Shift}} pro ostrý roh, ať je poloměr jakýkoli.

Klikněte na každý objekt v té části, kterou chcete zachovat. Dvě přímky, které se nestýkají, se prodlouží. Dvě rovnoběžné přímky dostanou přes mezeru půlkruh na konci první přímky nejblíž k vašemu kliknutí. Kružnice se nikdy neřeže. Dva sousední segmenty jedné mnohočáry dostanou oblouk uvnitř mnohočáry; mnohočára a jiný objekt fungují, když řez dopadne na první nebo poslední segment mnohočáry.

### CHAMFER

Zkratky: `CHA`. Úsečky a rovné segmenty mnohočar. Nejprve vypíše aktuální vzdálenosti (nebo délku a úhel).

- `Vyberte první úsečku [Zpět (U)/Mnohočára (P)/Vzdálenost (D)/Úhel (A)/Oříznutí (T)/Metoda (E)/Vícenásobně (M)]`
  - `D` se zeptá `Zadejte první vzdálenost sražení <poslední>` a `Zadejte druhou vzdálenost sražení <první>`: první se odřízne od první úsečky, kterou vyberete, druhá od druhé.
  - `A` se zeptá `Zadejte délku sražení na první úsečce` a `Zadejte úhel sražení od první úsečky`.
  - `E` (Metoda) vybere, která ze dvou se použije pro další sražení. `T`, `M`, `U` a `P` fungují jako u {{cmd:FILLET}}.
- `Vyberte druhou úsečku, nebo shift-vyberte k použití rohu [Vzdálenost (D)/Úhel (A)/Metoda (E)]`. {{key:Shift}}+klik udělá ostrý roh.

Vzdálenost delší než úsečka se odmítne (`Vzdálenost je příliš velká.`).

### BREAK and BREAKATPOINT

Zkratky: `BR`. `Vyberte objekt` (kde kliknete, je první bod), `Zadejte druhý bod přerušení [První bod (F)]`; `F` se zeptá `Zadejte první bod přerušení` a `Zadejte druhý bod přerušení`. Část mezi nimi zmizí; u kružnice proti směru hodinových ručiček od prvního bodu. BREAKATPOINT se zeptá `Zadejte bod přerušení` a rozdělí objekt tam na dva (ne kružnici).

### LENGTHEN

Zkratky: `LEN`. `Vyberte objekt k měření [Přírůstek (DE)/Procento (P)/Celkem (T)/Dynamicky (DY)]`: výběr vypíše `Aktuální délka` (a vnitřní úhel oblouku) a zeptá se znovu. `DE` se zeptá `Zadejte přírůstek délky (záporný zkracuje) [Úhel]`, `P` `Zadejte procentuální délku`, `T` `Zadejte celkovou délku [Úhel]`, `DY` tažení. Potom `Vyberte objekt ke změně [Zpět (U)]`, opakováno: pohne se konec nejblíž kliknutí. Úsečky, oblouky a otevřené mnohočáry.

### JOIN

Zkratky: `J`. `Vyberte objekty ke spojení`. Úsečky, oblouky a otevřené mnohočáry, které na sebe navazují konec ke konci, se promění v mnohočáry (uzavřené, když se řetěz uzavře); úsečky na jedné přímce se promění v jednu úsečku; oblouky jedné kružnice v jeden oblouk nebo kružnici. Historie řekne, kolik objektů se spojilo a kolik ne.

### MATCHPROP

Zkratky: `MA`, `PAINTER`. `Vyberte zdrojový objekt`, potom `Vyberte cílové objekty [Nastavení (S)]` a {{key:Enter}}. Kopíruje vrstvu a barvu a mezi objekty stejného druhu výšku a šířku textu, velikosti kót nebo vzor šrafy. `S` se zeptá `Zapněte nebo vypněte vlastnost [Barva (C)/Vrstva (LA)/Text (T)/Kóta (D)/Šrafa (H)]`, opakováno, dokud nestisknete {{key:Enter}}; volba se pamatuje pro relaci.

### EXPLODE

Zkratky: `X`. Mnohočáry se promění na úsečky a oblouky, odkazy na bloky na své objekty, kóty na úsečky, šipky a text.

- `Vyberte objekty`

## Schránka

Vlastní schránka CadCraftu: funguje v rámci výkresu, mezi výkresy a mezi záložkami CadCraftu v tomto prohlížeči. Viz [Kopírování, vkládání a duplikace](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, nebo {{ui:Kopírovat}} ve skupině {{ui:Úpravy}}. Kopíruje objekty do schránky, i s bloky a vrstvami, které používají. Objekty zůstanou vybrané.

- `Vyberte objekty ke kopírování` (přeskočeno, pokud jsou objekty už vybrány)

### CUTCLIP

{{key:Mod+X}}, nebo {{ui:Vyjmout}} v nabídce {{ui:Více}}. Kopíruje objekty do schránky, potom je smaže (jeden krok zpět).

- `Vyberte objekty k vyjmutí` (přeskočeno, pokud jsou objekty už vybrány)

### COPYBASE

Kopíruje objekty do schránky se základním bodem, který zvolíte; vložení umístí tento bod.

- `Zadejte základní bod`
- `Vyberte objekty ke kopírování`

### PASTECLIP

{{key:Mod+V}}, nebo {{ui:Vložit}} ve skupině {{ui:Úpravy}}. Kopie se pohybuje za kurzorem a visí z levého dolního rohu svého rozsahu (nebo ze středu, nebo z bodu `COPYBASE`; viz [Nastavení CadCraftu](topic:settings)).

- `Zadejte vkládací bod`

Vložené objekty jsou vybrány. Blok, který výkres už má pod stejným názvem, si zachová definici tohoto výkresu.

Když je oblast zkopírovaná v MarkupCraft novější než to, co zkopíroval CadCraft (a je mladší než 6 hodin), {{key:Mod+V}} a `PASTECLIP` vloží místo toho tuto oblast: viz `PASTEAREA`.

### PASTEAREA

Zkratky: `PAREA`. {{ui:Vložit zkopírovanou oblast}} v nabídce {{ui:Více}}. Vloží oblast zkopírovanou pomocí {{ui:Kopírovat oblast}} v MarkupCraft jako obrázek ve skutečné velikosti. Viz [Obrázky ve výkresu](topic:pictures).

- `Zadejte levý dolní roh zkopírované oblasti`
- `Změňte velikost papíru měřítkem (100 pro list 1:100; Body: dva body na ní a jejich skutečná vzdálenost) [Body (P)] <1>` (jen když list neměl měřítko výkresu): číslo, {{key:Enter}} pro velikost papíru, nebo `P`, potom `První bod na vložené oblasti`, `Druhý bod na vložené oblasti` a jejich skutečná vzdálenost.

### PASTEORIG

{{key:Mod+Shift+V}}, nebo {{ui:Vložit na stejné místo}} v nabídce {{ui:Více}}. Vloží na souřadnice, ze kterých byly objekty zkopírovány. Nic se neptá.

### DUPLICATE

Zkratky: `DUP`. {{key:Mod+D}}, nebo {{ui:Duplikovat a přesunout}} v nabídce {{ui:Více}}. Kopie objektů se pohybuje s kurzorem od místa, kde je; {{key:Esc}} nezanechá nic. Nepoužívá schránku.

- `Vyberte objekty k duplikování` (přeskočeno, pokud jsou už vybrány)
- `Zadejte, kam kopie půjde (Esc nezanechá nic)`: klikněte, napište bod, `@dx,dy` (od místa, kde byl kurzor), nebo vzdálenost směrem ke kurzoru.

### SELECT

Ptá se `Vyberte objekty` (se všemi volbami níže) a nechá vybrané objekty vybrané pro další příkaz, nebo pro `P` později.

### QSELECT

Zkratky: `QS`. V prohlížeči dialog {{ui:Rychlý výběr}} (viz [Výběr objektů](topic:select-objects#select-by-a-rule-quick-select)). Bez něj se příkazový řádek zeptá `Zadejte typ objektu`, `Zadejte vlastnost`, `Zadejte operátor [=/<>/>/</*/Vybrat vše] <=>` a `Zadejte hodnotu`. Shody se stanou výběrem.

### SELECTSIMILAR

Zkratky: `SIM`. `Vyberte objekty [Nastavení (SE)]` (nebo aktuální výběr): vybere každý objekt stejného typu se stejnou vrstvou a barvou (a názvem bloku, vzorem šrafy). `SE` se zeptá `Zapněte nebo vypněte vlastnost [Vrstva (LA)/Barva (CO)/Název (NA)/Vzor (PA)/Výška (HE)]`, opakováno, dokud nestisknete {{key:Enter}}.

### FIND

Bez zkratek; nebo {{ui:Úpravy}} › {{ui:Více}} › {{ui:Najít a nahradit}}. V prohlížeči dialog {{ui:Najít a nahradit}} (viz [Přidání textu a popisků](topic:text#find-and-replace-words)). Bez něj: `Zadejte text k nalezení`, potom `Zadejte text náhrady (Enter: vybrat nalezené)`. Hledá v textu, hodnotách atributů a textu kót, na otevřené záložce nebo ve výběru.

### SELECTALL and DESELECT

`SELECTALL` (zkratka `AI_SELALL`, {{key:Mod+A}}) vybere každý objekt, který lze na otevřené záložce upravit. `DESELECT` (zkratky `AI_DESELECT`, `SELECTNONE`; nebo {{key:Esc}}) zruší výběr.

## Kóty

### DIMLINEAR

Zkratky: `DLI`, `DIMLIN`. Vodorovná nebo svislá vzdálenost.

- `Zadejte počátek první pomocné čáry [Vybrat objekt (S)]` (Enter nebo `S`: `Vyberte objekt ke kótování`, potom klikněte na úsečku, oblouk, kružnici nebo segment mnohočáry)
- `Zadejte počátek druhé pomocné čáry`
- `Zadejte umístění kótovací čáry [Text (T)/Vodorovná (H)/Svislá (V)/Otočená (R)]`. `T` se zeptá na text (`<>` je naměřená hodnota), `H` a `V` pevně určí směr, `R` se zeptá `Zadejte úhel kótovací čáry <0>`.

### DIMALIGNED

Zkratky: `DAL`, `DIMALI`. Skutečná vzdálenost mezi dvěma body.

- Počátky jako u {{cmd:DIMLINEAR}}, potom `Zadejte umístění kótovací čáry [Text (T)]`.

### DIMANGULAR

Zkratky: `DAN`, `DIMANG`.

- `Vyberte oblouk, kružnici nebo úsečku, nebo Enter pro vrchol`
- Oblouk: jeho úhel. Kružnice: `Zadejte druhý koncový bod úhlu`. Úsečka: `Vyberte druhou úsečku`. Enter: `Zadejte vrchol úhlu`, `Zadejte první koncový bod úhlu`, `Zadejte druhý koncový bod úhlu`.
- `Zadejte umístění kótovací čáry [Text (T)]`: klikněte dovnitř úhlu, který chcete změřit.

### DIMRADIUS and DIMDIAMETER

Zkratky: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Vyberte oblouk nebo kružnici`, potom `Zadejte umístění kótovací čáry [Text (T)]`.

### DIMCONTINUE

Zkratky: `DCO`, `DIMCONT`. Pokračuje od poslední vytvořené délkové nebo zarovnané kóty (nebo se zeptá `Vyberte délkovou nebo zarovnanou kótu`).

- `Zadejte druhý počátek pomocné čáry [Zpět (U)]`, opakováno, dokud nestisknete Enter.

### DIMBASELINE

Zkratky: `DBA`, `DIMBASE`. Jako {{cmd:DIMCONTINUE}}, ale každá kóta začíná od prvního počátku a je naskládána dál.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Bez zkratek. Každý se zeptá `Zadejte novou hodnotu pro … <aktuální>` a nastaví tu velikost pro **nové** kóty: celkové měřítko, výška textu, velikost šipky, počet desetinných míst (až 8), mezera kolem textu, prodloužení za kótovací čáru, odsazení od počátku. Viz [Nastavení velikostí kót](topic:dimension-settings).

### DIMLUNIT

Nastavení kóty: pouze formát nových kót (1 vědecký, 2 desetinný, 3 inženýrský, 4 stavební, 5 zlomkový).

### DIMSTYLE and -DIMSTYLE

Zkratky: `DST`, `DDIM`, `D`. Správce stylů kót: {{ui:Nastavit aktuální}}, {{ui:Nový…}}, {{ui:Změnit…}}, {{ui:Přejmenovat…}}, {{ui:Smazat}}, {{ui:Porovnat…}}, {{ui:Použít na vybrané}}. `-DIMSTYLE` na příkazovém řádku: `Styl kóty [Obnovit (R)/Uložit (S)/Smazat (D)/Použít (A)/Porovnat (C)/Přejmenovat (N)/Vypsat (L)]`. Viz [Nastavení velikostí kót](topic:dimension-settings#named-dimension-styles).

### DIMEDIT and DIMTEDIT

`DIMEDIT` (`DED`): `Úprava kóty [Domů (H)/Nový (N)/Otočit (R)/Šikmo (O)] <Domů>`, potom kóty (nebo ty, které už jsou vybrány). Nový se zeptá na text (`<>` = naměřená hodnota); Otočit se zeptá na úhel (0 vrátí text zpět); Šikmo se zeptá na úhel pomocných čar od osy X (Enter = žádný; jen délkové a zarovnané kóty). `DIMTEDIT` (`DIMTED`): `Text kóty [Vlevo (L)/Vpravo (R)/Střed (C)/Domů (H)/Úhel (A)] <Střed>`. Viz [Nastavení velikostí kót](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Zkratky: `DTU`. `Jednotky v textu nových kót [Jednotky výkresu/mm/cm/m/km]`, nebo s vybranými kótami `Jednotky v textu vybraných kót`. Zapíše naměřenou délku s jednotkou za ní (DIMLFAC a přípona DIMPOST); `D` se vrátí k jednotkám výkresu. Viz [Kóty v mm, cm, m nebo km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Zkratky: `RC`. Vypíše `Délka oblouku: … Typ: …`, potom `Zadejte první bod [Délka oblouku (A)/Objekt/Obdélník (R)/Mnohoúhelník (P)/Volný tah (F)]`. Obdélník se zeptá `Zadejte protilehlý roh`; Mnohoúhelník `Zadejte další bod (Enter uzavře oblačku) [Zpět (U)]`; Volný tah sleduje kurzor, dokud neklikněte nebo nestisknete {{key:Enter}}; `O` se zeptá `Vyberte objekt` a `Obrátit směr? [Ano (Y)/Ne] <N>` a promění objekt v oblačku. `A` se zeptá `Zadejte délku každého oblouku`. `R`, `P` a `F` vyberou typ pro další oblačku. Výsledkem je uzavřená mnohočára z oblouků.

### MLEADER

Zkratky: `MLD`; nebo {{ui:Výnoska}}. `Zadejte umístění hrotu výnosky [Velikost šipky/Vzdálenost přistání]`, `Zadejte umístění přistání výnosky`, potom text v okénku na místě (nebo, bez něj, `Zadejte text (prázdný řádek ukončí)`). Uloží se jako skutečná víceúrovňová výnoska v DWG; DXF uchová čáry, hrot a text, které nakreslí.

## Parametrické

Viz [Vazby ve výkresu](topic:constraints) a [Použití parametrů a rovnic](topic:parameters). Vazby pracují na kartě {{ui:Model}}.

### GEOMCONSTRAINT and the GC commands

Zkratky `GCON`: `Zadejte typ vazby [Vodorovná (H)/Svislá (V)/Kolmá (P)/Rovnoběžná (PA)/Tečná (T)/Shoda/Soustředná (CON)/Kolineární (COL)/Symetrie/Stejné/Pevný] <Vodorovná>`, potom výzvy té které příkazu.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Vyberte objekt [2 body (2P)] <2 body>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Vyberte první objekt`, `Vyberte druhý objekt` (druhý se pohne).
- {{cmd:GCCOINCIDENT}}: `Vyberte první bod [Objekt/Automaticky vazby] <Objekt>`, `Vyberte druhý bod [Objekt] <Objekt>`.
- {{cmd:GCFIX}}: `Vyberte bod [Objekt] <Objekt>`.
- {{cmd:GCSYMMETRIC}}: `Vyberte první objekt [2 body (2P)] <2 body>`, `Vyberte druhý objekt`, `Vyberte osu symetrie`.

### DIMCONSTRAINT and the DC commands

Zkratky `DCON`: `Vyberte rozměrovou kótu k převodu [Délková (LI)/Vodorovná (H)/Svislá (V)/Zarovnaná (AL)/Úhlová (AN)/Poloměrová (R)/Průměr (D)/Převést (C)] <Zarovnaná>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Zadejte první bod vazby [Objekt] <Objekt>`, `Zadejte druhý bod vazby`, `Zadejte umístění kótovací čáry`, `Text kóty <d1=40>` (číslo, výraz, nebo `název=výraz`).
- {{cmd:DCALIGNED}}: jako výše, s `[Objekt/Bod a přímka/2 přímky]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Vyberte oblouk nebo kružnici`. {{cmd:DCANGULAR}}: `Vyberte první přímku nebo oblouk`, `Vyberte druhou přímku`.
- {{cmd:DCCONVERT}}: `Vyberte kóty k převodu`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Vyberte objekty [Nastavení (S)]`. `S` se zeptá na tolerance vzdálenosti a úhlu.
- {{cmd:DELCONSTRAINT}} (zkratka `DELCON`): `Vyberte objekty`; jejich vazby zmizí.
- {{cmd:CONSTRAINTBAR}} (zkratka `CBAR`): `Vyberte objekty [Zobrazit vše/Skrýt vše]`, potom `[Zobrazit/Skrýt]`.
- {{cmd:DCDISPLAY}}: `Zadejte volbu [Zobrazit/Skrýt]`.

### PARAMETERS and -PARAMETERS

{{cmd:PARAMETERS}} (zkratky `PAR`, `PARAM`) otevře panel {{ui:Parametry}}. `-PARAMETERS`: `Zadejte volbu [Nový/Upravit/Přejmenovat/Smazat/?] <?>`.

### SWBOUT

Zkratky `SWMACRO`. Stáhne makro (.swb), které znovu sestaví model jako jeden svázaný náčrt v SolidWorks. Viz [Přesun náčrtů do jiných modelářů dílů a z nich](topic:solidworks-sketches).

## Bloky

### ANNOSCALE

Zkratky: `CANNOSCALE`. Řekne anotační měřítko výkresu a kolik anotativních objektů obsahuje, potom se zeptá `Nové anotační měřítko`: napište `1:50`, `1:100`, `2:1`, samotné číslo (`50` je 1:50), nebo název jednoho z vlastních měřítek výkresu. Každý anotativní text a kóta se změní tak, aby se při novém měřítku vytiskly ve stejné velikosti, v jednom kroku zpět; neanotativní objekty zůstanou beze změny. Viz [Jednotky, papíry a měřítka](topic:units-papers-scales#annotate-by-scale).

### SCALELISTEDIT

Zkratky: `SCALELIST`. `Seznam měřítek [Přidat/Upravit/Smazat/Vypsat/Obnovit]` dokud nestisknete {{key:Enter}}. Přidat: `Název měřítka`, `Jednotky papíru`, `Jednotky výkresu`. Upravit a Smazat se ptají na název měřítka. Vlastní měřítka výkresu se připojí k seznamům měřítek výřezů a tisku a uloží se s výkresem. Viz [Jednotky, papíry a měřítka](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT and PEDIT

`SPLINE` (`SPL`): `První bod splajnu [Metoda (M)/Objekt] (Body proložení)`. Proložení: body, kterými křivka prochází; `Uzavřít`, `Zpět (U)`, potom `Počáteční tečna` a `Koncová tečna` (bod, nebo {{key:Enter}}). Metoda › Řídicí vrcholy se zeptá na stupeň (1 až 5) a kreslí z řídicího mnohoúhelníku. Objekt promění mnohočáry na splajny procházející jejich vrcholy. `SPLINEDIT` (`SPE`): `[Data proložení/Upravit vrchol/Převést na mnohočáru (P)/Otevřít nebo uzavřít/Obrátit/Zpět (U)/Ukončit (X)]`; Data proložení `[Přidat/Smazat/Přesunout/Vyčistit/Tečny/Ukončit (X)]`; Upravit vrchol `[Přidat řídicí bod/Přesunout/Váha/Ukončit (X)]`. `PEDIT` (`PE`): `[Uzavřít/Otevřít/Spojit/Šířka/Proložit/Splajn/Zrušit proložení/Generování typu čáry/Obrátit/Zpět (U)/Ukončit (X)]`, `M` pro více objektů; úsečky, oblouky a splajny se nejprve nabídnou jako mnohočáry. Viz [Splajny a mnohočáry](topic:splines).

### BLOCK

Zkratky: `B`, `BMAKE`.

- `Zadejte název bloku`. Pokud existuje: `Blok "…" již existuje. Předefinovat jej? [Ano (Y)/Ne] <N>`.
- `Zadejte základní bod vložení`
- `Vyberte objekty`. Nahradí je jeden odkaz na nový blok.

### WBLOCK

Zkratky: `W`, `-WBLOCK`. Zapíše blok, některé objekty nebo celý výkres jako nový soubor DWG nebo DXF. `Zdroj WBLOCK [Blok/Celý výkres/Objekty] <Objekty>`:

- **Objekty**: `Zadejte základní bod vložení` (stane se počátkem nového výkresu), `Vyberte objekty`, potom `Formát souboru [DWG/DXF/R12 DXF]` a `Název souboru pro nový výkres`, potom `Co s objekty [Ponechat/Převést na blok/Smazat]`. Převést je nahradí jedním odkazem na blok pojmenovaný podle souboru; Smazat je odstraní.
- **Blok**: `Blok k zapsání`. Vlastní objekty bloku se základním bodem jako počátkem, včetně vnořených bloků.
- **Celý výkres**: každý objekt v prostoru modelu. Listy se nezapisují; pro kopii, která listy zachová, použijte {{cmd:SAVEAS}}.

Nový soubor obsahuje jen vrstvy, typy čar, text a styly kót a bloky, které jeho objekty používají, a jednotky výkresu. Verze DWG je ta, kterou naposledy použil {{cmd:SAVEAS}}. V prohlížeči se soubor stáhne; v Studiu se otevře dialog uložení.

### ATTDEF

Zkratky: `ATT`, `DDATTDEF`, `-ATTDEF`; nebo {{ui:Bloky}} › {{ui:Více}} › {{ui:Definovat atribut}}. Vypíše režimy, potom `Zadejte volbu ke změně (Enter po dokončení) [Neviditelný/Konstantní/Předvolba]`, `Zadejte název značky atributu`, `Zadejte výzvu atributu`, `Zadejte výchozí hodnotu atributu` (`Zadejte hodnotu atributu`, je-li konstantní), `Zadejte počáteční bod textu`, `Zadejte výšku textu`, `Zadejte úhel natočení textu`. {{cmd:BLOCK}} převezme definice atributů do bloku.

### EATTEDIT and ATTEDIT

`EATTEDIT` (`DDATTE`, nebo dvojklik na odkaz s atributy; {{ui:Bloky}} › {{ui:Více}} › {{ui:Upravit atributy}}): `Vyberte odkaz na blok s atributy`, potom dialog {{ui:Upravit atributy}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): tentýž odkaz, potom `<výzva> (<ZNAČKA>) <hodnota>` pro každý atribut; {{key:Enter}} ponechá hodnotu. Viz [Atributy](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Aktualizovat atributy odkazů kterého bloku [Název/Vybrat/Vše] <Vybrat>`. Hodnoty se zachovají; nové atributy dostanou výchozí hodnotu, odebrané zmizí, umístění se resetuje.

### BATTMAN

{{ui:Bloky}} › {{ui:Více}} › {{ui:Správce atributů}}. Dialog: blok, atributy (značka, výzva, výchozí hodnota, režimy, pořadí), {{ui:Aktualizovat odkazy (hodnoty zachovány)}}, {{ui:Použít}}.

### REFEDIT and REFCLOSE

{{ui:Bloky}} › {{ui:Více}} › {{ui:Upravit na místě}}. `REFEDIT`: `Vyberte odkaz na blok k úpravě na místě` (nebo výběr). `REFCLOSE`: `Uložit změny do "…" [Uložit/Zahodit] <Uložit>`; lišta {{ui:Uložit blok}} a {{ui:Zahodit}} dělají totéž. Celá úprava je jeden krok zpět. Viz [Atributy](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT and BCLOSE

`BE`; nebo {{ui:Bloky}} › {{ui:Více}} › {{ui:Upravit blok}}. `Zadejte název bloku k úpravě <blok vybraného odkazu>` otevře editor bloků. `BCLOSE` se zeptá `Zavřít editor bloků na "…" [Uložit/Zahodit] <Uložit>`; lišta {{ui:Uložit blok}} a {{ui:Zahodit změny}} dělají totéž. Vše v editoru je jeden krok zpět.

### VIEWBASE

Zkratky: `FLATSHOT`. Plochý 2D pohled těles na záložce 3D: `Pohled [Přední/Horní/Pravý/Levý/Zadní/Spodní/Izometrie]`, `Skryté čáry [Zobrazit/Skrýt]`, měřítko (`1:20`, `2:1`; {{key:Enter}} vezme to, které se hodí na list), potom střed pohledu. Jeden odkaz na blok, viditelné hrany na VIEW-VISIBLE, skryté čárkovaně na VIEW-HIDDEN. Viz [Ploché pohledy na listu](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Zkratky: `-PUBLISH`; nebo {{ui:Všechny listy v jednom PDF}} v dialogu {{ui:Vykreslit do PDF}}. `Listy k vykreslení [Všechny/Některé]`: {{key:Enter}} vykreslí každý list, `S` se zeptá na názvy oddělené čárkami. Jedno PDF, stránka a záložka pro každý list. Viz [Všechny listy v jednom PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Zkratky: `SSM`, `SHEETSETMANAGER`. Přepne na sekci {{ui:Sada listů}} v levém panelu: listy z mnoha výkresů, očíslované a pojmenované, jejich razítka vyplněná ze sady, vykreslené jako jedno PDF. Viz [Sady listů](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): vyberte DWG nebo DXF, potom jeho vkládací bod. {{cmd:XREF}} (`XR`, `-XREF`): `Propojené výkresy [?/Připojit/Znovu načíst/Svázat/Odpojit] (Enter: ?)`; s více odkazy vyberte jeden z jeho odkazů, nebo napište `N` a jeho název. Viz [Propojené výkresy (externí odkazy)](topic:files#linked-drawings-external-references).

### COUNT

Zkratky: `BCOUNT`; nebo {{ui:Bloky}} › {{ui:Více}} › {{ui:Počítat bloky}}. `Vyberte odkaz na blok k počítání, nebo [Vše/Export] (Enter: Vše)`: výběr vybere a spočítá každý odkaz na tento blok v tomto prostoru; {{key:Enter}} nebo `A` vypíše všechny; `E` potom `C` (počty) nebo `A` (atributy) stáhne CSV. Viz [Počítání bloků a export rozpisu](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Zkratky: `I`, `DDINSERT`.

- `Zadejte název bloku nebo [Soubor/Knihovna] <poslední blok>` (velikost písmen nevadí). `F` se zeptá na DWG nebo DXF, potom na celý výkres nebo jeden z jeho bloků; název, který je už použit, se zeptá na {{ui:Ponechat stávající}} nebo {{ui:Přejmenovat}}. `L` otevře panel knihovny.
- `Zadejte vkládací bod [Měřítko (S)/Otočení (R)]`. `S` se zeptá `Zadejte násobek měřítka`, `R` se zeptá `Zadejte úhel natočení`; oboje se pamatuje.
- Potom `Zadejte <výzva> (<ZNAČKA>) <výchozí>` pro každý atribut, který blok žádá. Viz [Atributy bloku](topic:attributes).

### LIBRARY

Zkratky: `LIB`. Otevře panel knihovny: vkládání položek, kontrola aktualizací, poděkování knihovny. Žádné otázky. Viz [Vložení ze souboru nebo z knihovny](topic:insert-from-file-and-library).

### STEELMEMBER

Zkratky: `SMEMBER`; nebo {{ui:3D prvek}} na záložce {{ui:Standardní}} knihovny. `Velikost profilu <W12x26>` (jak ji záložka uvádí), potom `Počáteční bod [Sloup (C)]` a `Koncový bod`: plný prvek na záložce 3D mezi těmito dvěma body, stojící na zemi. `C` se zeptá na základní bod sloupu a jeho výšku. Jeden krok zpět. Viz [Umístění ocelových profilů a normalizovaných dílů](topic:steel-and-standard-parts).

### PARTSLIST

Zkratky: `PLIST`. `Levý horní roh seznamu dílů`, potom `Výška textu <2.5>`: nakreslí tabulku všech normalizovaných dílů a ocelových profilů umístěných z knihovny (čísla položek, množství, díl, norma, velikost, délka, materiál, hmotnost). Jeden krok zpět. Viz [Umístění ocelových profilů a normalizovaných dílů](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Zkratky: `PU`. Odstraní definice bloků, které nic nepoužívá. Žádné otázky.

### DELBLOCKS

Nebo {{ui:Bloky}} › {{ui:Více}} › {{ui:Smazat bloky}}. `Vyberte blok ke smazání [Název/Ukončit (X)]`: vyberte odkaz na blok, nebo `N` pro seznam bloků s filtrem (vyberte několik), nebo `X` / {{key:Enter}} pro ukončení. Smaže se každý odkaz — v modelu, na každém listu a uvnitř jiných bloků — a potom definice; příkazový řádek řekne, co bylo smazáno a co ne. Nepojmenované bloky a propojené výkresy se nenabízejí. Výzva se vrátí pro další blok; celý příkaz je jeden krok zpět.

## Listy a tisk

### LAYOUT

Zkratky: `LO`, `NEWLAYOUT`; nebo tlačítko {{ui:+}} pod výkresem. Nový list s rámečkem, razítkem a jedním výřezem, na ISO A3 (nebo Tabloid pro výkresy v palcích nebo stopách). Žádné otázky.

### MVIEW

Zkratky: `MV`. Jen na listu ({{cmd:VPORTS}} na listu dělá totéž).

- `Zadejte roh výřezu`, `Zadejte protilehlý roh`. Výřez ukáže celý model ve standardním měřítku.

### VPORTS

Zkratky: `VIEWPORTS`. {{cmd:SPLIT}} je totéž i z listu, a {{ui:Pohled}} › {{ui:Více}} › {{ui:Rozdělit vedle sebe}}, {{ui:Rozdělit pod sebou}}, {{ui:Čtyři okna}}, {{ui:Jedno okno}} to spouštějí. Na modelu: `Zadejte počet oken [SI/2/3/4] <3>`; `2` se zeptá `[Vodorovně (H)/Svisle (V)] <Svisle>` (Svisle = vedle sebe), `3` se zeptá `[Vlevo (L)/Vpravo (R)] <Vpravo>` (kam jde velké okno). Každé okno si ponechá svůj pohled a prostor; kliknutí dělá okno aktivní. Na listu je to {{cmd:MVIEW}}. Viz [Rozdělení obrazovky](topic:split-screen).

### VPVIEW

Bez zkratek. Jen na listu.

- `Vyberte výřez` (přeskočeno, pokud je vybrán), potom na modelu: `Zadejte první roh okna k zobrazení`, `Zadejte protilehlý roh`.

### UCS

Bez zkratek. Vlastní souřadný systém; není to úprava. `Zadejte počátek UCS [Pojmenovaný (NA)/Objekt (OB)/Předchozí (P)/Svět (W)/Z/3 body (3)] <Svět>`: bod je nový počátek, potom `Zadejte bod na ose X (Enter ponechá úhel)`. `Z`: `Zadejte úhel otočení kolem osy Z <90>`. `3`: počátek, bod na kladné ose X, bod na kladné straně Y. `OB`: `Vyberte objekt k zarovnání UCS`. `NA`: `[Obnovit/Uložit/Smazat/?]` a název. Pohled se otočí, aby nová osa X byla vodorovná. Viz [Otočení pohledu a vlastní souřadnice](topic:ucs-and-turned-view).

### PLAN

Bez zkratek. `Zadejte volbu [Aktuální ucs/Ucs/Svět] <Aktuální ucs>`: otočí pohled aktivního okna tak, aby osa X UCS (nebo světa) byla vodorovná. Nic ve výkresu se nepřesune.

### TURNLEFT, TURNRIGHT, TURNWORLD

Bez zkratek; nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Otočit pohled o 90° doleva}}, {{ui:Otočit pohled o 90° doprava}}, {{ui:Zpět na svět}}. Totéž jako `UCS Z -90`, `UCS Z 90` a `UCS W`, s pohledem, který se otáčí.

### VPLAYER

Bez zkratek. Na listu, nebo uvnitř výřezu. `Zadejte volbu [?/Zmrazit (F)/Odmrazit (T)/Obnovit (R)/Vpvisdflt]`: `F`, `T`, `R` se ptají na názvy vrstev (čárky, zástupné znaky `*` a `?`), potom `[Vše/Vybrat/Aktuální] <Aktuální>` výřezy; Obnovit vrátí každou vrstvu na její výchozí „zmrazená v nových výřezech“; `V` nastaví tuto výchozí hodnotu (`[Zmrazeno/Odmrazeno]`), kterou používá {{cmd:MVIEW}}. `?` vypíše vrstvy zmrazené v aktuálním výřezu. Sloupec výřezu v panelu Vrstvy dělá totéž pro jeden výřez. Viz [Zmrazení vrstvy v jednom výřezu](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Zkratky: `MS`; nebo dvojklik uvnitř výřezu. Jen na listu. Pracujte s modelem skrze výřez: ten vybraný, jediný na listu, nebo `Klikněte uvnitř výřezu, ve kterém se má pracovat`. Posun a zoom uvnitř mění pohled výřezu (výřez se zamčeným zobrazením si ho zachová a místo toho se pohne list); nový pohled se zapíše jako jeden krok zpět. Viz [Práce na modelu přes výřez](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Zkratky: `PS`; nebo dvojklik vně výřezu, nebo klik na záložku pod výkresem. Zpět na list.

### PLOT

Zkratky: `PRINT`, `PUBLISH`, `EXPORTPDF`; nebo {{key:Mod+P}}. Otevře dialog {{ui:Vykreslit do PDF}}. Viz [Vykreslit do PDF](topic:plot-pdf).

### PLOTSTYLES

Zkratky: `STYLESMANAGER`, `PSTABLES`; nebo {{ui:Upravit tabulky…}} v dialogu {{ui:Vykreslit do PDF}}. Otevře {{ui:Tabulky stylů tisku}}: jak se každá barva tiskne (barva, šedá, inkoust, tloušťka), uloženo s výkresem. Viz [Tabulky stylů tisku](topic:plot-pdf#plot-style-tables).

## Dotazy

### CAL

Vypíše hodnotu výpočtu, tak jak by se četla kdekoli, kde se píše délka.

- `Výraz`: napište jej, například `12'6"+3/4"` nebo `(24'-0")/3`, a stiskněte {{key:Enter}}. CadCraft vypíše `= 12'-6 3/4"   (150.75 jednotek výkresu)`. Viz [Aritmetika v zadané hodnotě](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Zkratky: `DI`; nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Změřit vzdálenost}}.

- `Zadejte první bod`, `Zadejte druhý bod`. Vypíše vzdálenost, úhel, Delta X a Delta Y.

### AREA

Zkratky: `AA`; nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Plocha}}. Vypíše plochu a obvod.

- `Zadejte první roh [Objekt/Přidat plochu (A)/Odečíst plochu (S)] <Objekt>`
  - Klikněte nebo napište rohy; u `Zadejte další bod (Enter uzavře) [Zpět (U)]` stiskněte {{key:Enter}} pro uzavření obrysu. `U` vrátí zpět poslední roh.
  - {{key:Enter}} nebo `O`, potom `Vyberte objekt`: kružnice (vypíše obvod), elipsa, mnohočára (otevřená se pro plochu uzavře přímkou a vypíše se její délka), nebo šrafa (díry se odečtou).
  - `A` (Přidat plochu) a `S` (Odečíst plochu) udržují průběžný součet: výzva začíná `(režim PŘIDÁNÍ)` nebo `(režim ODEČÍTÁNÍ)`, každá plocha se přičte nebo odečte a po každé se vypíše `Celková plocha = …`. V těchto režimech `O` vybírá objekty, dokud nestisknete {{key:Enter}}, a {{key:Enter}} na první výzvě příkaz ukončí.

### MEASUREGEOM

Zkratky: `MEA`. `Zadejte volbu [Vzdálenost (D)/Poloměr (R)/Úhel (A)/Plocha (AR)] <Vzdálenost>`; po každém měření se zeptá znovu, s výchozí hodnotou `Ukončit (X)`.

- `D`: dva body, jako {{cmd:DIST}}.
- `R`: `Vyberte oblouk nebo kružnici`; vypíše poloměr a průměr.
- `A`: oblouk (jeho vnitřní úhel), přímka a potom druhá přímka (úhel mezi nimi, směrem k jejich vzdáleným koncům), nebo {{key:Enter}} a tři body (vrchol, potom oba konce).
- `AR`: jako {{cmd:AREA}}, jedna plocha.

### ID

Bez zkratek. `Zadejte bod`; vypíše jeho X a Y.

### LIST

Zkratky: `LI`, `LS`. `Vyberte objekty`; vypíše typ, vrstvu a hlavní rozměry každého objektu.

## Pohled, soubory a ostatní

### ZOOM

Zkratky: `Z`.

- `Zadejte roh okna, nebo zadejte násobek měřítka (nX) [Rozsah (E)/Vše (A)/Okno (W)/Předchozí (P)/Měřítko (S)/Střed (C)]`. Klikněte na dva rohy pro okno. `E`, `A` nebo Enter: celý výkres.
- `P` (Předchozí, nebo {{ui:Předchozí}} na panelu nástrojů) se vrátí k pohledu před ním, až 10 pohledů na záložku; série kroků kolečkem nebo jedno posunutí se počítá jako jeden pohled.
- Číslo jako `2`, `2x` nebo `0.5x` (nebo `S` a potom číslo) přiblíží nebo oddálí o daný násobek kolem středu obrazovky.
- `C` se zeptá `Zadejte střed` a `Zadejte výšku nebo zvětšení (nX)`.

### PDFATTACH, PDFIMPORT and the PDF commands

Zkratky: `PDFATT` pro {{cmd:PDFATTACH}}, `PDFIM` pro {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} umístí stránku PDF pod výkres (soubor, stránka, vkládací bod, měřítko, natočení); {{cmd:PDFIMPORT}} promění čáry, křivky, výplně a text stránky na objekty výkresu na vrstvách pojmenovaných podle PDF, ve skutečné velikosti, v zadaném měřítku, nebo podle měřítka ze dvou bodů a skutečné vzdálenosti. {{cmd:PDFCLIP}} ořízne podklad, {{cmd:PDFADJUST}} nastaví ztlumení, kontrast, monochrom, nebo podklad vypne, {{cmd:PDFLAYERS}} zapíná a vypíná vlastní vrstvy PDF, a {{cmd:PDF}} dá CadCraftu znovu soubory, které podklady výkresu používají. Viz [Podklady PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Zkratky: `AUTOC`. Automatické doplňování výkresu: když neběží žádný příkaz, šedý stín ukazuje, co říkají vzory vašeho výkresu, že přijde dál. {{cmd:AUTOCOMPLETE}} jej zapíná `On` nebo vypíná `Off` (také Nastavení › CadCraft), nebo `Show` ukáže, co by nyní navrhl. **Tab** nakreslí stín jako jeden krok zpět, **Esc** jej zruší, dokud se výkres nezmění. Hledá tři věci v nejnovějších objektech: další kopii něčeho nakresleného dvakrát nebo vícekrát v rovnoměrném kroku (sloupky, sloupy, stupnice a stupeň schodiště), další kroky lomeného schodiště z mnohočáry a chybějící stranu místnosti nebo řetězu stěn. Uprostřed {{cmd:LINE}} nebo {{cmd:PLINE}} je stín **dalším bodem**: dalším krokem schodiště (stupnice, stupeň, stupnice…), čtvrtým rohem obdélníku, bodem, který jej uzavře, nebo ještě jedním stejným krokem. Přiblížte kurzor a stiskněte **Tab**, jako byste tam klikli; pokračujte, nebo stiskněte Enter. Počítá se na tomto počítači podle pravidel, bez modelu.

### AUTOSHEET

Zkratky: `ASH`. Listy, které se rozvrhnou samy. {{cmd:AUTOSHEET}} vezme části výkresu (vaše pojmenované pohledy, nebo oddělené části modelu, nebo celý model), zvolí formát papíru (nebo ten, který zadáte), přidělí každé části standardní měřítko (jedno pro všechny, nebo největší, které každá unese) a umístí pohledy do řádků na nové listy s razítkem a popiskem (název a měřítko) pod každým. Co se nevejde na jeden list, dostane vlastní list. Jeden krok zpět. Počítá se na tomto počítači podle pravidel, bez modelu.

### PHOTOSKETCH

Zkratky: `PSK`. Náčrt z fotky na výkres. Vyberte fotku (JPEG, PNG nebo TIFF) ručního náčrtu na listu papíru. {{cmd:PHOTOSKETCH}} najde čtyři rohy listu, narovná perspektivu, vezme formát papíru, který pojmenujete (`Paper`, nebo nejbližší standardní), a `Měřítko` náčrtu (1 : n), potom obkreslí čáry pera na úsečky, oblouky a kružnice, s vrstvou pro každou barvu pera (černá, červená, modrá, zelená). Pokud nenajde okraj papíru, vezme celou fotku jako list a řekne to. Nápisy se vynechají. Jeden krok zpět. Provádí se na tomto počítači klasickým zpracováním obrazu, bez modelu, nic se nikam neodesílá. Viz také příkazy pro naskenované výkresy.

### AUTODIM

Zkratky: `ADIM`. Automatické kótování podle pravidel. {{cmd:AUTODIM}} okótuje vybrané objekty (nebo celý výkres) podle jejich úrovní a svislých hran: řetěz kót podél stran, které zvolíte (`Strany`), jednu celkovou kótu vně něj, šířku každého otvoru (mezera mezi souosými čárami stěn), průměr pro každou velikost otvoru, a s `Mřížka` rozteč os mřížky. Kóta, která už tam je, se znovu nevytvoří. Jeden krok zpět. Počítá se na tomto počítači podle pravidel, bez modelu.

### GRIDMOVE

Zkratky: `GM`. Posun osy mřížky odnese i to, co na ní visí. {{cmd:GRIDMOVE}} posune čáru mřížky (čáru na vrstvě, jejíž název obsahuje grid nebo axis) a to, co na ní visí: stěny s koncem na čáře se natáhnou, aby ji následovaly, stěny podél ní se posunou celé, sloupy (odkazy na bloky a kružnice na čáře), její bublina a štítek se přesunou, a kóty, jejichž body leží na ní, změří novou rozteč. Zadejte dva body (počítá se jen část napříč čárou), nebo `Vzdálenost`. Jeden krok zpět vrátí vše. Provádí se podle pravidel na tomto počítači.

### DETAILS

Zkratky: `DET`. Detaily, které vás najdou. {{cmd:DETAILS}} uchovává vlastní detaily vaší firmy: `Přidat` přidá blok z tohoto výkresu do seznamu, `Seznam` a `Odebrat` jej spravují, `Hledat` je seřadí pro to, co je vybráno (nebo pro to, co jste nakreslili naposledy), podle slov na jejich vrstvách, názvech bloků, vzorech šrafování a poznámkách proti názvu a poznámkám každého detailu, takže detail nadpraží okna najde vaše lemování parapetu. Vyberte číslo a bod pro umístění. Při zapnutém `Nápověda` (také Nastavení › CadCraft) výběr něčeho, co detail odpovídá, vypíše jeden řádek ve stavovém řádku. Seznam se uchovává v tomto prohlížeči, na tomto počítači, a hledá se právě v něm. `Sdílet` jej uloží i do vaší složky Dokumenty (`.cadcraft/firm-details.json`, s výkresem každého bloku): `Stáhnout` přidá, co má váš tým a vy nemáte, `Nahrát` přidá, co máte vy a oni nemají, `Obojí` udělá obojí, a nic se z žádné strany neodstraní. Nejprve otevřete složku Dokumenty ({{cmd:DOCUMENTS}}); když je ta složka složkou Team Cloud Plan, sdílí celý tým jeden seznam. Položka detailu v panelu Knihovna má tlačítko **Přidat do detailů mé firmy**, které ji vloží do stejného seznamu. Provádí se na tomto počítači podle slov, bez modelu.

### SKETCHFIX

Zkratky: `SKF`. Pero-náčrty se promění v přesnou geometrii. Stiskněte a táhněte jeden volný tah najednou (perem, myší nebo prstem), potom Enter. Každý tah se přečte jako úsečka, kružnice, oblouk, obdélník nebo mnohočára: téměř vodorovné a svislé čáry se udělají přesně vodorovné a svislé, uzavřený kulatý tah se stane kružnicí, uzavřený tah se čtyřmi pravými rohy obdélníkem, a konce tahů se přitáhnou k sobě a na konce, které už jsou ve výkresu. Jeden krok zpět. Počítá se na tomto počítači podle pravidel, bez modelu.

### SCANATTACH and the scanned-drawing commands

Zkratky: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} žádnou nemá. Pracují s obrázkem, každý s jedním krokem zpět. {{cmd:SCANATTACH}} vloží PNG, JPEG, TIFF (jednu stránku, nebo všechny), nebo stránku PDF, která je obrázkem. {{cmd:SCANSCALE}} změní měřítko listu podle dvou vybraných bodů a skutečné vzdálenosti. {{cmd:SCANALIGN}} jej přesune a otočí na dva body (`Přizpůsobit měřítko listu` Ano/Ne). {{cmd:SCANDESKEW}} ukáže úhel dlouhých čar listu a list otočí, jakmile potvrdíte `Přijmout`, nebo zadáte `Hodnota`. {{cmd:SCANCLEAN}} jej převede na černobílý (`Práh` Auto/Adaptivní/Úroveň, `Skvrny`) a `Spustit`. {{cmd:SCANCROP}} ponechá okno. {{cmd:SCANERASE}} smaže `Obdélník`, `Mnohoúhelník`, nebo `Lasso`. {{cmd:SCANTRACE}} obkreslí čáry a oblouky na novou vrstvu (`Tolerance`, `Okno`, `Oblouky`, `Zbytky`, `Spustit`) a ohlásí, co našel a co zůstalo jako rastr. {{cmd:SCANINFO}} vypíše původní soubor a kroky. {{cmd:RASTERSNAP}} zapíná nebo vypíná přichycení k čárám naskenovaných listů (On / Off). Viz téma Naskenované výkresy a obkreslení.

### REGEN and REGENALL

Zkratky: `RE` pro {{cmd:REGEN}}, `REA` pro {{cmd:REGENALL}}. Znovu sestaví, co se kreslí na obrazovce z výkresu: {{cmd:REGEN}} záložku, na kterou se díváte (na listu i model, který jeho výřezy ukazují), {{cmd:REGENALL}} každou záložku, každé okno rozděleného pohledu a každý otevřený výkres. Použijte je, když obrázek zastarává po skriptované nebo velmi velké změně, nebo když výkres upravil asistent; výkres samotný se nedotkne, takže není co vracet zpět.

### NAMEDVIEW

Zkratky: `NV`, `VIEWS`. `Zadejte volbu [?/Obnovit (R)/Uložit (S)/Okno (W)/Smazat (D)] <Obnovit>`, potom název pohledu. `S` uloží pohled na obrazovce, `W` okno, které vyberete, `R` ukáže uložený pohled, `D` jeden smaže, `?` vypíše pohledy této záložky. Uložení pod existujícím názvem jej nahradí; každá změna je jeden krok zpět. Pohledy patří záložce, na které byly uloženy. Soubory DWG a DXF je uchovávají (tabulka VIEW); pohledy listu se vrátí na první list, protože soubor neříká, který je který.

### UNDO and REDO

Zkratky: `U` pro {{cmd:UNDO}}; {{cmd:REDO}} žádnou nemá. Také {{key:Mod+Z}} a {{key:Mod+Y}}.

### LAYER

Zkratky: `LA`. Přeskočí na panel {{ui:Vrstvy}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Zadejte typ čáry pro nové objekty` — `ByLayer`, `ByBlock`, nebo název (`?` je vypíše: Continuous, vlastní typy výkresu, a DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE se svými velikostmi `2` (poloviční) a `X2` (dvojnásobná)). {{cmd:LWEIGHT}} (`LW`): tloušťka čáry pro nové objekty v mm, nebo `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): měřítko typů čar výkresu (lze vrátit zpět). {{cmd:LWDISPLAY}} (`LWT`): `Zobrazit tloušťky čar [ZAP/VYP]` — totéž jako tlačítko {{ui:TČ}} ve stavovém řádku. Viz [Tloušťky čar a typy čar](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Zadejte typ objektu k přejmenování [Vrstva (LA)/Blok]`, `Zadejte starý název`, potom nový název; objekty nebo odkazy se přejmenují. {{cmd:LAYMRG}}: `Vyberte objekt na vrstvě ke sloučení, nebo [Název]`, opakováno, dokud nestisknete {{key:Enter}}, potom `Vyberte objekt na cílové vrstvě, nebo [Název]` a `Y`. {{cmd:LAYDEL}}: `Vyberte objekt na vrstvě ke smazání, nebo [Název]`, potom `Y`: vrstva a každý objekt na ní odejdou (ne vrstva 0, DEFPOINTS ani aktuální vrstva). Jeden krok zpět každý. Viz [Uspořádání výkresu pomocí vrstev](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Vrstvy výběrem objektů; také v nabídce {{ui:Nástroje}} panelu {{ui:Vrstvy}}. {{cmd:LAYISO}}: `Vyberte objekty na vrstvě (vrstvách), které se mají izolovat`, potom {{key:Enter}}: každá jiná vrstva se vypne. {{cmd:LAYUNISO}} je znovu zapne. {{cmd:LAYOFF}} a {{cmd:LAYFRZ}}: `Vyberte objekt na vrstvě, která se má vypnout` (nebo zmrazit), znovu a znovu; `U` vrátí zpět poslední, {{key:Enter}} ukončí. {{cmd:LAYMCUR}}: `Vyberte objekt, jehož vrstva se stane aktuální`. {{cmd:LAYON}} zapne každou vrstvu, {{cmd:LAYTHW}} odmrazí každou vrstvu. Každý příkaz je jeden krok zpět. Viz [Uspořádání výkresu pomocí vrstev](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} začne prázdný výkres a {{cmd:OPEN}} otevře DWG nebo DXF, každý na vlastní záložce nad výkresem (nepoužitý nový výkres se použije místo nové záložky). Zavření záložky s neuloženými změnami se nejprve zeptá. Viz [Rozdělení obrazovky](topic:split-screen).

{{cmd:SAVE}} (zkratka `QSAVE`, také {{key:Mod+S}}) stáhne kopii ve formátu výkresu: DWG, pokud byl otevřen z DWG, DXF, pokud z DXF. Nový výkres použije formát naposled zvolený v {{ui:Uložit jako}} v tomto prohlížeči, jinak DWG.

{{cmd:SAVEAS}} (také {{key:Mod+Shift+S}}) otevře dialog {{ui:Uložit kopii jako}}: vyberte {{ui:DWG}} (a jeho {{ui:Verze}}), {{ui:DXF R12}} nebo {{ui:DXF 2000}}, potom {{ui:Uložit}}. Volba zůstane pro tento výkres a pro nové výkresy v tomto prohlížeči.

{{cmd:DXFOUT}} vždy stáhne kopii DXF R12, aniž by změnil formát, který používá {{cmd:SAVE}}.

Viz [Soubory: co se otevře, co se uloží](topic:files#saving).

### TOUR

Zkratky: `TUTORIAL`. Znovu spustí šestikrokovou prohlídku prvního výkresu. Viz [Začínáme](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Zkratky: `TBDOCK`. `Pozice panelu nástrojů [Nahoře/Dole/Vlevo/Vpravo]`. Viz [Nastavení](topic:settings#toolbar-position).

### COMMANDLINE

Zkratky: `CMDLINE`. `Příkazový řádek [Ukotvený dole/Odpojený/Jeden řádek/Zobrazené řádky historie/Historie příkazů (F2)]`: ukotví nebo odpojí příkazový řádek, udělá z něj jeden řádek, zeptá se, kolik řádků historie zobrazit (0 až 12), nebo otevře historii. Viz [Nastavení](topic:settings#command-line).

### TOPAREA

`Horní oblast [Standardní/Kompaktní]`: lišty nad výkresem tak, jak byly, nebo kompaktní. Viz [Nastavení](topic:settings#top-area).

### POLARANG

`Zadejte krok polárního úhlu ve stupních <90>`: krok, na který se zarovnávají čáry polárního sledování {{ui:Polární}} (více než 0, nejvýše 180). Uchovává se v tomto prohlížeči.

### UNITS

Zkratky: `UN`. Jak se píšou a zadávají délky.

- `Zadejte formát délek [Vědecký/Desetinný/Inženýrský/Stavební/Zlomkový] <aktuální>`
- Stavební a Zlomkový: `Zadejte jmenovatel nejmenšího zobrazeného zlomku (1, 2, 4, 8, 16, 32, 64, 128 nebo 256)`. U ostatních: `Zadejte počet desetinných míst (0 až 8)`.

Nové kóty se podle něj řídí. Jeden krok zpět. Stejné jako {{ui:Formát délek}} a {{ui:Přesnost}} v {{ui:Aktuální nastavení}}; viz [Stopy a palce](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Zkratky: `GDS`. Zobrazí rozvržení IO (soubor GDSII stream): laboratorní test, jen pro prohlížení a měření.

- Výběr souboru vezme soubor `.gds`; při více horních buňkách `Zadejte horní buňku k vykreslení`.
- Každá vrstva a datový typ se stane vrstvou výkresu (`GDS 1`, `GDS 2/5`), odkazy a pole se umístí naplocho, v uživatelské jednotce souboru (obvykle mikrometry). Jeden krok zpět. Nic se nesimuluje ani nekontroluje a soubor se nezapisuje zpět.

### DIAGRAM

Zkratky: `TEXTDIAGRAM`, `T2D`. Diagram z textu.

- Okno vezme text (nebo jeden řádek s `;` mezi příkazy na příkazovém řádku): vývojový diagram Mermaid, komponentový diagram PlantUML, D2 nebo seznam od-do.
- `Zadejte levý horní roh diagramu`, potom `Zadejte výšku textu`.

Bloky a spojnice jsou běžné objekty na vrstvě `Diagram`, po skončení vybrané. Jeden krok zpět. Viz [Kreslení diagramu z textu](topic:text-to-diagram).

### OLELIST

Zkratky: `OLES`. Objekty OLE, které DWG nese a které CadCraft sám neumí umístit.

- Vypíše každý: číslo, typ, velikost, zda uložil obrázek.
- `Zadejte volbu [Umístit (P)/Ukončit (X)] <Ukončit>`: Umístit se zeptá na číslo, levý dolní roh a šířku a nakreslí rámeček s obrázkem. Jeden krok zpět; zachovaný objekt se nezmění. Viz [Obrázky](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Zkratky: `SHX`. Vaše vlastní písma SHX.

- `Zadejte volbu písma SHX [Složka/Soubory/Seznam/Odebrat/Obrátit (R)/Vymazat] <Seznam>`

{{ui:Složka}} načte každý `.shx` ve složce (CadCraft Studio; znovu při každém spuštění), {{ui:Soubory}} vezme vybrané soubory (prohlížeč), {{ui:Obrátit (R)}} rozloží písmena jednoho písma od posledního k prvnímu. Styly textu, které načtené písmo pojmenují, se jím vykreslí. Viz [Kreslení textu vlastními písmy SHX](topic:shx-fonts).

### LIMITS

Jak velký má výkres být.

- `Zadejte levý dolní roh, nebo [ZAP/VYP] <aktuální>`: bod, `ZAP` nebo `VYP`.
- `Zadejte pravý horní roh <aktuální>`.

Mřížka vyplní meze, {{cmd:ZOOM}} Vše je ukáže, a se zapnutými mezemi je bod mimo ně odmítnut (`**Mimo meze`). Jeden krok zpět; uloží se v DWG a DXF. Viz [Nastavení mezí výkresu](topic:drawing-limits).

### AUNITS

Zkratky: `ANGUNITS`. Jak se úhly zobrazují a zadávají.

- `Zadejte formát úhlů [Desetinné stupně/Stupně-minuty-sekundy/Zeměměřičské azimuty] <aktuální>`
- `Zadejte počet desetinných míst (0 až 8)`, nebo u dalších dvou `Zadejte přesnost` (0 stupňů, 2 minuty, 4 sekundy, 5 až 8 desetinných míst sekundy).

Jeden krok zpět; uloží se v DWG a DXF. Stejné jako {{ui:Formát úhlu}} v {{ui:Aktuální nastavení}}. Viz [Zadávání a zobrazení azimutů a úhlů](topic:bearings-and-angles).

### APPLOAD

Zkratky: `AP`; nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Načíst aplikaci…}}. Dialog {{ui:Načíst aplikace}}: načtěte rutiny `.lsp` a soubory dialogů `.dcl`, odstraňte je, načtěte je znovu z historie a Startup Suite. Příkazy `(defun c:NAME …)` rutiny pak fungují jako kterýkoli jiný. Viz [Načítání aplikací](topic:load-applications) a [Spouštění rutin LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (nebo {{ui:Pohled}} › {{ui:Více}} › {{ui:Upravit zkratky…}}) otevře váš soubor zkratek (řádky `ZKRATKA, *PŘÍKAZ`); {{ui:Uložit}} jej použije. {{cmd:REINIT}} jej použije znovu. Viz [Úprava zkratek příkazů](topic:command-aliases).

### HELP

Zkratky: `?`. Vypíše každý příkaz, jeho zkratky a jednořádkový popis do historie příkazového řádku. Neotevře tuto nápovědu: pro ni stiskněte {{key:F1}} nebo klikněte na {{ui:Nápověda}}.

## Výzva výběru objektů

V každé výzvě `Vyberte objekty`: klikněte na objekty, táhněte okna (zleva doprava) a kříže (zprava doleva) dvěma kliknutími, nebo stiskněte a táhněte lasso ({{key:Space}} při tažení: okno, křížení, plot), {{key:Shift}}+klik odebere, a {{key:Enter}} výběr dokončí. Můžete také napsat `ALL` (vše), `L` (poslední objekt), `P` (Předchozí: co použil poslední příkaz), `F` (Plot: objekty, které protíná čára bodů; `U` vrátí bod zpět), `W` (Okno), `C` (Křížení), `R` (režim odebírání: výběry objekty odeberou; výzva zní `Odebrat objekty`) a `A` (Přidat znovu). `?` je vypíše. V výzvě se nezobrazují. {{key:Tab}} nad překrývajícími se objekty zvýrazní další; klikněte, abyste jej vybrali. Viz [Výběr objektů](topic:select-objects).

### ACCESS

Zkratky: `AX`. Kreslení bez zraku. {{cmd:ACCESS}} zapíná nebo vypíná Access (`On`, `Off`) a přepíná zvuky uchopení (`Sound`) a hlasové příkazy (`Voice`); nejprve řekne stav. Při zapnutém Access se každý příkaz a výsledek přečte přes čtečku obrazovky a kreslicí plocha má klávesový kurzor. Téma nápovědy „Kreslení bez zraku“ uvádí klávesy.

### DESCRIBE

Zkratky: `DESC`. Řekne, co výkres obsahuje: kolik je objektů, jakého druhu, jak velké, kolik je vrstev, co je vybráno. Jen čte; nic nemění.

### WHEREAMI

Zkratky: `WHERE`. Řekne, kde je kurzor, v jednotkách výkresu.

### NEARBY

Řekne, co leží blízko kurzoru, nejbližší první, každé s jeho vzdáleností a stranou, na které je.

### SAYSEL

Řekne, co je vybráno, jedna věta na objekt (délka úsečky, konce a úhel; poloměr a střed kružnice; text tak, jak je napsán).

### VOICE

Zapíná nebo vypíná hlasové příkazy. Rozpoznávají se na tomto počítači; kde to prohlížeč neumí, zůstane hlas vypnutý, pokud nezvolíte online službu prohlížeče v Nastavení.
