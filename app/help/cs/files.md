---
title: Soubory: co se otevře, co se uloží
summary: Formáty, které CadCraft otevírá, ukládá a exportuje, co se zachová nebo převede a kam soubory jdou.
keywords: xclip, clip, hranice xclip, svázat ořezané, dwg, dxf, pdf, r12, otevřít, uložit, export, import, formáty, převod, stažení, saveas, dxfout, uložit jako, uložení dwg, formát, qsave, xref, xattach, propojený výkres, externí odkaz, svázat, znovu načíst, odpojit
from: b8c5778d
---

## Přehled

| Formát | Otevření | Uložení | Poznámky |
|---|---|---|---|
| DXF (textový nebo binární, libovolná verze) | Ano | Ano, jako DXF R12, DXF 2000 nebo DXF 2000 (binární) | Binární DXF se otevře jako textový a uloží se zpět jako binární. |
| DWG | Ano | Ano, jako DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 nebo 2018) | Čte a zapisuje vlastní knihovna DWG v CadCraftu (soubory AutoCAD R13 až 2018). Váš DWG se nikdy nemění. Poškozené soubory nebo verze, které čtečka nezvládá, se odmítnou se zprávou. |
| PDF | Přivede stranu jako podklad nebo jako objekty ([Podklady PDF](topic:pdf-underlay)) | Ano, vykreslením | Vektorové PDF listu nebo modelu v měřítku. |

Každý otevřený výkres (nebo výkres začatý příkazem {{ui:Nová}}) dostane vlastní kartu nad kreslicí plochou; nový výkres, kterého se ještě nikdo nedotkl, se použije místo přidání karty. Kliknutím na kartu přepnete, kliknutím na její {{ui:×}} ji zavřete (CadCraft se nejprve zeptá, jsou-li neuložené změny), nebo otevřené výkresy uspořádejte vedle sebe: viz [Rozdělení obrazovky](topic:split-screen).

## Otevření výkresu

- Stiskněte {{key:Mod+O}}, klikněte na {{ui:Otevřít}}, nebo napište `OPEN` a vyberte soubor.
- Nebo přetáhněte soubor `.dwg` nebo `.dxf` na kreslicí plochu.

Soubor se čte uvnitř vašeho prohlížeče. Nikam se nenahrává. Historie uvede, kolik objektů a vrstev se načetlo a jak dlouho to trvalo, a sekce {{ui:Výkres}} v levém panelu ukazuje formát, například „DWG 2018 (AC1032)“.

Čtečka DWG je součástí CadCraftu a načte se s prvním DWG, které otevřete po načtení stránky (několik set KB), takže nemusíte čekat na žádné samostatné stahování. Soubor čte na pozadí, takže stránka dál reaguje, zatímco se otevírá velký DWG.

DXF se čte po částech asi 4 MB, nikdy jako jeden blok textu, takže se otevře i DXF větší než 512 MB. Omezuje to paměť vašeho počítače: při otevírání DXF počítejte s využitím zhruba 16 až 20násobku velikosti souboru (DXF o velikosti 100 MB s asi 690 000 objekty spotřeboval v našem testu asi 1,5 GB).

### Co se načte

- Úsečky, oblouky, kružnice, mnohočáry (s obloukovými segmenty), elipsy, body, text a víceřádkový text, tělesa, šrafy (standardní vzory nakreslené jako jejich čáry, ostatní jako plošný tón), odkazy na bloky s jejich atributy (hodnoty, které lze upravit; viz [Atributy bloků](topic:attributes)), kóty a rozvržení s jejich výřezy.
- Splajny se načtou jako splajny (stupeň, řídicí body, uzly, váhy, body proložení); viz [Splajny a mnohočáry](topic:splines).
- Víceúrovňové výnosky s jednou výnoskou a textem se načtou jako víceúrovňové výnosky CadCraftu, které lze upravit (viz {{cmd:MLEADER}}). Ostatní (s blokem, několika výnoskami nebo křivkovými čarami) se vykreslí tak, jak je nakreslil druhý program, a pohybují se jako celek; historie uvede, kolik jich bylo.
- Obrázky se zobrazí jako rámeček s názvem souboru obrázku, dokud CadCraftu nedodáte soubor příkazem {{cmd:IMAGE}}: viz [Obrázky ve výkresu](topic:pictures#show-the-pictures-a-dwg-uses). Zakrytí se zobrazí jako jejich rámeček a to, co je pod nimi, zůstane viditelné.
- Tabulky v DWG se načtou tak, jak je nakreslil druhý program.
- 3D plochy v prostoru modelu se načtou na kartě {{ui:3D}}, ne jako 2D objekty; stejně tak ty uvnitř bloků, jednou na každý odkaz na blok v modelu. V bloku a na listu se také kreslí naplocho jako obrysy. Viz [Model ve 3D](topic:3d-solids).
- Vrstvy si ponechají barvu, zapnutí, zamrazení, zamknutí a nastavení tisku. DEFPOINTS se nikdy nevykresluje.
- Kóty se stanou skutečnými, upravitelnými kótami CadCraftu, pokud lze načíst jejich body. Nejprve se zobrazí přesně tak, jak je nakreslil druhý program; jakmile některou změníte, CadCraft ji překreslí ve svém stylu.
- Každé rozvržení se stane kartou listu. V druhém programu má každé rozvržení skrytý první výřez, který je samotným listem; CadCraft ho vynechá.

### Co zatím nepřichází

Co CadCraft nedokáže nakreslit, se počítá, nikoli odhaduje. Okno „O tomto souboru“ v levém panelu to uvádí jako „Zatím nezobrazeno:“ a za tím každý druh objektu a jejich počet. Typické případy jsou tabulky v DXF, sítě a 3D tělesa uvnitř bloků. 3D tělesa, oblasti a tělesa v prostoru modelu se zobrazí na kartě 3D (viz [Model ve 3D](topic:3d-solids#solids-from-other-programs)). Výřezy, které jsou v souboru natočené, se zobrazí natočené, jak je tam, a při uložení si natočení zachovají; stejně tak aktuální UCS, pojmenované UCS a natočený pohled.

Text se kreslí jedním písmem v duchu Helvetica. Popisek, který se vejde na jeden řádek v užším písmu původního programu, se v CadCraftu může zalomit na dva řádky.

## Ukládání

Existují tři způsoby uložení. Každý z nich stáhne kopii.

- **Uložit**: stiskněte {{key:Mod+S}}, klikněte na {{ui:Uložit}}, nebo napište `SAVE` (také `QSAVE`). Ukládá ve formátu výkresu: DWG, pokud jste otevřeli DWG, DXF, pokud jste otevřeli DXF. DWG si zachová verzi, se kterou přišel (soubor 2018 se uloží jako 2018). Nový výkres použije formát a verzi DWG, které jste naposledy zvolili v {{ui:Uložit jako}} v tomto prohlížeči; pokud jste žádnou nezvolili, DWG ve formátu AutoCAD 2000.
- **Uložit jako**: stiskněte {{key:Mod+Shift+S}}, klikněte na {{ui:Uložit jako}}, nebo napište `SAVEAS`. Dialog {{ui:Uložit kopii jako}} nabízí {{ui:DWG}} se seznamem {{ui:Verze}} (AutoCAD 2018, 2013, 2010, 2007, 2004 nebo 2000), {{ui:DXF R12}} a {{ui:DXF 2000}}, každé s názvem souboru, který dostane, a s již vybraným aktuálním formátem a verzí výkresu. Kliknutím na {{ui:Uložit}} stáhnete soubor, nebo na {{ui:Zrušit}} (nebo {{key:Esc}}) nic neuložíte; historie pak uvede „Neuloženo.“ Vaše volba zůstane: {{key:Mod+S}} ji od té doby použije pro tento výkres a nové výkresy v tomto prohlížeči ji převezmou.
- **DXFOUT**: napište `DXFOUT`. Vždy stáhne kopii DXF R12 a další {{key:Mod+S}} stále uloží ve vlastním formátu výkresu.

Prohlížeč stáhne `<název výkresu>.dwg` nebo `<název výkresu>.dxf`. Každé uložení je **nové stažení**; otevřený soubor se nikdy nepřepíše ani nezmění. Historie to potvrdí, například „Kopie uložena jako Plan.dwg (DWG (AutoCAD 2018)). Váš původní Plan.dxf je beze změny.“ U DXF píše „(DXF R12, otevře se v libovolném CAD programu)“. Řádky pod ním uvádějí vše, co se na cestě změnilo.

Když CadCraft běží jako desktopová aplikace, ukládání funguje jako v jiných desktopových programech: {{key:Mod+S}} zapíše výkres zpět do souboru, který jste otevřeli, ve svém formátu a verzi, a historie uvede, kam se uložil. {{ui:Uložit jako}} a exporty zobrazí systémový dialog pro uložení a soubor `.dwg`, `.dxf` nebo `.ccsheets`, na který dvakrát kliknete, se otevře v CadCraftu.

Pro PDF místo toho vykreslete (viz níže).

## Co DWG zachovává a mění

CadCraft píše DWG sám, uvnitř vašeho prohlížeče, stejnou knihovnou DWG, jakou čte. Verzi vyberte v {{ui:Uložit jako}}: formát AutoCAD 2000 (verze souboru AC1015) se otevře v nejvíce programech, včetně starých; novější formáty (2004, AC1018, až 2018, AC1032) také zachovají skutečné barvy. Nic se nenahrává a ukládání DWG funguje offline.

Každá verze se kontroluje tak, že uložené soubory se čtou zpět čtečkami DWG tří jiných programů a samotným CadCraftem. DWG z CadCraftu zatím nebyl otevřen v samotném AutoCADu.

### Co DWG zachovává

- Úsečky, oblouky, kružnice, elipsy, body a mnohočáry s jejich obloukovými segmenty.
- Jednořádkový text se zarovnáním a koeficientem šířky.
- Víceřádkový a zalamovaný text jako víceřádkový text. Druhý program ho zalomí znovu ze stejné šířky.
- Barvy objektů: podle vrstvy, podle bloku, 255 standardních barev a skutečné barvy ve formátu 2004 a novějších.
- Vrstvy s jejich barvou, typem čáry, tloušťkou čáry a nastavením zapnutí, zamrazení, zamknutí a tisku; vlastní typy čar, tloušťky a měřítka typů čar objektů, vzory typů čar a měřítko typu čáry výkresu.
- Jednotky výkresu a formát délek (desetinný, stopy a palce, zlomky…).
- Bloky se základním bodem a definicemi atributů, včetně neviditelných, konstantních a přednastavených.
- Odkazy na bloky s měřítkem, natočením a hodnotami atributů.
- Plné výplně a vzorované šrafy se vzorem, měřítkem a úhlem (vlastní čáry vzoru, takže jiné programy kreslí stejné čáry jako CadCraft).
- Kóty jako skutečné kóty: jiné programy je při natažení přeměří. Každá si ponechá vlastní nastavení (výška textu, velikost šipky, desetinná místa, formát délek) a svůj text a nese nakreslenou kopii, kterou má každá kóta v DWG.
- Listy (rozvržení): každý list s formátem papíru a jednotkami, to, co na něm je nakresleno, a jeho výřezy s pohledem a měřítkem.
- Pojmenované pohledy.
- Víceúrovňové výnosky jako víceúrovňové výnosky.
- Názvy vrstev a bloků tak, jak jste je napsali, velkými a malými písmeny. (DXF R12 je zapisuje velkými písmeny.)

### Co DWG mění

Každá z těchto změn je po uložení uvedena v historii, pokud se týká vašeho výkresu.

| V CadCraftu | V uloženém DWG |
|---|---|
| Skutečné barvy (vybrané pipetou), ve formátu 2000 | Nejbližší standardní barva: formát 2000 má jen 255 barev. Chcete-li je zachovat, uložte jako 2004 nebo novější. |
| Pojmenované pohledy listu | Pohledy papírového prostoru: DWG neuvádí, který list, takže když CadCraft soubor znovu otevře, patří prvnímu listu. |
| Víceřádkový text s koeficientem šířky | Normální šířka písma: v DWG se koeficient šířky používá jen u jednořádkového textu. |
| Názvy vrstev nebo bloků se znaky, které DWG nepovoluje | Změněno: název z propojeného výkresu, například `Base\|Walls`, se změní na `Base$0$Walls` (způsob, jakým svázání propojeného výkresu pojmenovává), a ostatní znaky se změní na `_`. |

### Proč R12 a co se převádí

Když uložíte jako DXF, CadCraft zapíše DXF R12, verzi, kterou otevře každý CAD program. Je starší než některé funkce, takže se několik věcí zapíše jednodušší formou:

| V CadCraftu | V uloženém souboru R12 |
|---|---|
| Víceřádkový text | Jeden textový objekt na řádek |
| Elipsy | Mnohočáry, které sledují elipsu |
| Šrafy (z otevřených souborů) | Jen jejich obrysy |
| Skutečné barvy (vybrané pipetou) | Nejbližší standardní barva |
| Tloušťky čar a vlastní měřítka typů čar objektů | Vynecháno: R12 nemá ani jedno (typy čar se zachovají) |
| Názvy vrstev a bloků | Zapsány velkými písmeny; mezery a jiné znaky se změní na `_` a názvy se zkrátí na 31 znaků („Title block“ se změní na `TITLE_BLOCK`) |
| Vrstvy nastavené jako neviditelné pro tisk | Jiné programy je vykreslí (CadCraft si nastavení zapamatuje, když výkres má list) |
| Kóty | Skutečné kóty s vlastním nakresleným blokem, takže je jiné programy zobrazí tak, jak je vidíte vy |
| Víceúrovňové výnosky | Čáry, hrot šipky a text, které kreslí |
| Pojmenované pohledy | Zachovány, názvy velkými písmeny; pohledy listu se vrátí na prvním listu |
| Více listů | První list je papírový prostor, který zobrazí každý program; ostatní se zachovají jako bloky pojmenované `CCLAYOUT_1`, `CCLAYOUT_2` … které CadCraft při otevření souboru přemění zpět na listy |

Historie uvede každou z těchto položek, která se na váš výkres vztahovala.

:::tip
Chcete-li na výkresu pracovat několik dní, uložte jako DXF a příště otevřete právě ten DXF. Vše, co CadCraft umí nakreslit, přežije cestu tam a zpět, včetně kót, bloků a všech listů.
:::

## Propojené výkresy (externí odkazy)

{{cmd:XATTACH}} (`XA`, nebo {{ui:Bloky}} › {{ui:Více}} › {{ui:Propojit výkres (xref)}}) propojí jiný DWG nebo DXF: vyberte soubor a pak klikněte, kam má přijít ({{key:Enter}} jej umístí do 0,0). Přijde jako jeden blok pojmenovaný podle souboru, ve správném měřítku, když mají oba výkresy různé jednotky. Jeho vrstvy a bloky si zachovají názvy s názvem odkazu před nimi — `Plan|Walls`, `Plan|Door` — takže se nikdy nesmíchají s vašimi: propojené vrstvy zapínejte a vypínejte, zamrazujte nebo zamykejte jako své vlastní. Odkaz je jen pro čtení: změníte-li druhý výkres, načtěte jej znovu. Nastavení propojených vrstev (barva, typ čáry, tloušťka, zapnutí/vypnutí, zamrazení, zamknutí, tisk) se zachová při novém načtení, při uložení výkresu jako DWG, dokud je odkaz stále odkazem, i když jiný výkres propojí tento.

{{cmd:XREF}} (`XR`): `?` vypíše odkazy (načtené i nenačtené, který soubor, kolik odkazů); `A` připojí; `R` znovu načte jeden ze svého souboru (vyberte soubor znovu: prohlížeč nemůže sám přistoupit k vašim složkám); `B` jej sváže (stane se z něj obyčejné bloky a vrstvy pojmenované `Plan$0$Walls`); `D` jej odpojí (jeho odkazy a vrstvy zmizí). Každá volba je jeden krok zpět.

{{cmd:XCLIP}} (`XC`) ořezává odkazy na bloky a propojení: vyberte je, `N` pro novou hranici, pak `R` a dva rohy nebo `P` a body mnohoúhelníku ({{key:Enter}} jej uzavře); `D` ořez odstraní. Zobrazí se a vytiskne jen to, co leží uvnitř, a ořez se pohybuje s odkazem. DWG a DXF 2000 ořezy zachovávají; DXF R12 uloží odkaz celý a uvede to. Když svážete propojení, které má ořezané odkazy, {{cmd:XREF}} `B` se zeptá: `A` sváže všechno, `C` ponechá jen ořezanou část každého odkazu (úsečky a oblouky se řežou na hranici; texty a vnořené bloky zůstanou, je-li jejich vkládací bod uvnitř).

Výkres, který otevřete, může obsahovat odkazy na soubory, které CadCraft nevidí: uvede, kolik jich není načteno. Použijte {{cmd:XREF}}, `R` a vyberte každý soubor, abyste je viděli.

Při uložení se načtený odkaz **sváže** do souboru (jiné programy vidí obyčejné bloky a vrstvy pojmenované `Plan$0$…`) a historie to uvede. Odkaz, který není načten, zůstane odkazem na svůj soubor, v DWG i DXF.

## Otevření ve 3D

{{ui:Pohled}} › {{ui:Více}} › {{ui:Otevřít v ModelCraftu}} ({{cmd:OPENIN3D}}) otevře výkres v 3D modelovací aplikaci v nové kartě jako DWG, bez nahrávání. Změny provedené tam tam zůstanou; uložte je tam. Položka nabídky se zobrazí jen tam, kde ta aplikace umí převzít předaný výkres.

## Vykreslení do PDF

Stiskněte {{key:Mod+P}}, klikněte na {{ui:Vykreslit}}, nebo napište `PLOT`. PDF se vytvoří uvnitř prohlížeče a stáhne se, nebo se otevře v nové kartě k tisku. Viz [Vykreslení do PDF](topic:plot-pdf).

## Kam soubory putují

Každé uložení a každé vykreslení je stažení, takže soubory skončí tam, kam prohlížeč ukládá stažené soubory: obvykle ve složce Stažené. Chcete-li pokaždé vybrat složku, změňte nastavení stahování v prohlížeči; [Prohlížeče a počítače](common:browsers) ukazuje kde.

Nic, co otevřete nebo uložíte, se k nám neposílá. Viz [Kam jdou vaše soubory](common:your-files).

## Projektové soubory PLN a PLA

CadCraft otevírá výkresy DWG a DXF, ne vlastní soubory Archicadu (`.pln`, `.pla`, `.tpl`, `.bpn`). Při otevření jednoho z nich vám řekne, co to je. V Archicadu uložte potřebné pohledy nebo rozvržení jako DWG a otevřete je zde, nebo exportujte model jako IFC a otevřete jej v BimCraftu. Tam, kde BimCraft umí soubor převzít, CadCraft nabídne {{ui:Otevřít v BimCraft}}.

## Pokud se stránka zavře dříve, než uložíte

CadCraft si krátce po skončení úprav uchovává kopii každého výkresu, který změníte, jen v tomto prohlížeči. Pokud se karta zavře, prohlížeč se zastaví nebo se počítač restartuje dříve, než uložíte, CadCraft se při dalším spuštění zeptá **Obnovit práci?**: {{ui:Obnovit}} otevře výkres znovu, neuložený, ve vlastní kartě. Uložením výkresu se jeho kopie odstraní. Viz [Obnovení práce](common:recover).

## Online a offline

Otevírání, kreslení, ukládání (DWG a DXF) a vykreslování se dějí na vašem počítači, takže fungují bez připojení, jakmile se CadCraft načte.

Chcete-li používat CadCraft úplně bez připojení, klikněte, když jste online, na {{ui:Uložit pro offline}} v horním pruhu. Popisek počítá („Ukládání 40 z 212“) a skončí na „Připraveno offline“. Uložená kopie obsahuje čtečku DWG, celkem asi 5 MB, takže **DWG soubory se otevřou i offline**, jakmile je uložena. Tlačítko znovu stiskněte pro {{ui:Uložit znovu (získat nejnovější verzi)}} nebo {{ui:Odebrat offline kopii}}. „Nelze uložit“ znamená, že některé soubory se nestáhly: zkontrolujte připojení a klikněte pro nový pokus. „Offline není k dispozici“ znamená, že toto okno prohlížeče nemůže ponechat kopii (soukromá okna a některé spravované počítače).

Bez uložené kopie se čtečka DWG načte poprvé, když otevřete DWG po načtení stránky, takže otevření DWG offline může selhat; soubory DXF ji nikdy nepotřebují. Neobnovujte stránku offline, pokud není CadCraft uložen.

Podrobnosti viz [Práce offline](common:offline).

:::offline
Nyní jste offline. Výkresy se ukládají jako DWG nebo DXF a normálně se vykreslují a DXF soubory se otevírají. DWG soubory se otevřou, pokud CadCraft zobrazuje „Připraveno offline“, nebo pokud čtečka DWG už byla v této kartě načtena.
:::

## Vazby v souborech

Vazby a parametry (viz [Vazby výkresu](topic:constraints)) se ukládají v DWG i DXF. Každý svázaný objekt nese malou poznámku CadCraftu (rozšířená data) a nepoužitý blok pojmenovaný `CADCRAFT_PARAMETRIC` drží vazby a tabulku parametrů. Jiné programy otevřou výkres normálně a obojí ignorují; při čištění mohou nepoužitý blok smazat. Poznámky odkazují na objekty vlastním klíčem, ne identifikátory souboru, takže program, který identifikátory přečísluje, je nerozbije. Když jiný program svázaný objekt smazal nebo změnil, CadCraft při otevření souboru vazby na něm zruší a uvede, kolik jich bylo. Soubor bez nich se otevře bez vazeb.

Skica exportovaná z modelovače dílů (`.json`) se také otevře: viz [Přesun skic do jiných modelovačů dílů a z nich](topic:solidworks-sketches).

## Zatím nedostupné

- Víceúrovňové výnosky jako objekty víceúrovňových výnosků v uloženém DXF (R12 žádné nemá: ukládají se jako to, co kreslí).
- Obrázky v uloženém DXF (ukládají se jako jejich rámečky; DWG je zachovává jako obrázky) a zakrytí, která skrývají to, co je pod nimi.
- Uložení novější verze DXF než 2000.
- Ukládání do cloudu a synchronizace mezi počítači.

Úplný seznam viz [Ještě není hotovo](topic:not-built-yet).
