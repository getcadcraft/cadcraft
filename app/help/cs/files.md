---
title: Soubory: co se otevírá, co se ukládá
summary: Formáty, které CadCraft otevírá, ukládá a exportuje, co se zachovává nebo převádí a kam soubory putují.
keywords: xclip, ořez, hranice xclip, svázat oříznuté, dwg, dxf, pdf, r12, otevřít, uložit, export, import, formáty, převod, stáhnout, saveas, dxfout, uložit jako, uložení dwg, formát, qsave, xref, xattach, propojený výkres, externí reference, svázat, znovu načíst, odpojit
from: 6d68b34e
---

## Ve zkratce

| Formát | Otevření | Uložení | Poznámky |
|---|---|---|---|
| DXF (text, libovolná verze) | Ano | Ano, jako DXF R12 nebo DXF 2000 | Binární DXF se odmítne: nejprve jej uložte jako textový DXF. |
| DWG | Ano | Ano, jako DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 nebo 2018) | Čte a zapisuje ho vlastní knihovna DWG v CadCraftu (soubory AutoCADu R13 až 2018). Váš DWG se nikdy nezmění. Poškozené soubory nebo verze, které čtečka nezvládá, se odmítnou se zprávou. |
| PDF | Přinese stranu: jako podklad nebo jako objekty ([Podklady PDF](topic:pdf-underlay)) | Ano, vykreslením | Vektorové PDF listu nebo modelu v měřítku. |

Každý výkres, který otevřete (nebo začnete pomocí {{ui:Nový}}), dostane vlastní kartu nad plochou výkresu; nový výkres, kterého se nikdo nedotkl, se použije místo přidání karty. Kliknutím na kartu přepnete, jejím {{ui:×}} ji zavřete (CadCraft se nejdřív zeptá, jsou-li neuložené změny), nebo otevřené výkresy rozložte vedle sebe: viz [Rozdělení obrazovky](topic:split-screen).

## Otevření výkresu

- Stiskněte {{key:Mod+O}}, klikněte na {{ui:Otevřít}} nebo napište `OPEN` a zvolte soubor.
- Nebo přetáhněte soubor `.dwg` nebo `.dxf` na plochu výkresu.

Soubor se čte uvnitř Vašeho prohlížeče. Nikam se nenahrává. Historie uvádí, kolik objektů a vrstev přišlo a jak dlouho to trvalo, a sekce {{ui:Výkres}} v levém panelu ukazuje formát, například „DWG 2018 (AC1032)“.

Čtečka DWG je součástí CadCraftu a stahuje se s prvním DWG, který po načtení stránky otevřete (několik set KB), takže není nutné čekat na žádné samostatné stahování. Soubor čte na pozadí, takže stránka reaguje i při otevírání velkého DWG.

### Co se načte

- Úsečky, oblouky, kružnice, mnohočáry (s obloukovými segmenty), elipsy, body, text a víceřádkový text, plné výplně, šrafy (standardní vzory vykreslené jako jejich čáry, ostatní jako plochý tón), odkazy na bloky s jejich atributy (hodnoty, které můžete upravovat; viz [Atributy bloků](topic:attributes)), kóty a rozvržení s jejich výřezy.
- Spliny se načtou jako spliny (stupeň, řídicí body, uzly, váhy, proložené body); viz [Spliny a mnohočáry](topic:splines).
- Víceúrovňové výnošky s jednou výnoskou a textem se načtou jako víceúrovňové výnošky CadCraftu, které můžete upravovat (viz {{cmd:MLEADER}}). Ostatní (s blokem, více výnoskami nebo křivými čarami) se vykreslí tak, jak je nakreslil druhý program, a pohybují se jako celek; historie uvádí kolik.
- Obrázky se zobrazí jako rámeček s názvem souboru obrázku, dokud CadCraftu soubor nedáte příkazem {{cmd:IMAGE}}: viz [Obrázky ve výkresu](topic:pictures#show-the-pictures-a-dwg-uses). Zakrývací objekty (wipeout) se zobrazí jako jejich rámeček a to, co je pod nimi, zůstane viditelné.
- Tabulky v DWG se načtou tak, jak je nakreslil druhý program.
- 3D plochy v prostoru modelu se načtou na kartě {{ui:3D}}, ne jako 2D objekty; stejně tak ty uvnitř bloků, jednou na odkaz na blok v modelu. V bloku a na listu jsou také vykresleny ploše, jako obrysy. Viz [Model ve 3D](topic:3d-solids).
- Vrstvy si zachovávají barvu, zapnutí, zamrazení, zamknutí a nastavení tisku. DEFPOINTS se nikdy nevykreslí.
- Kóty se stanou skutečnými, upravitelnými kótami CadCraftu tam, kde lze přečíst jejich body. Nejprve se zobrazí přesně tak, jak je nakreslil druhý program; jakmile jednu změníte, CadCraft ji překreslí ve svém stylu.
- Každé rozvržení se stane kartou listu. V druhém programu má každé rozvržení skrytý první výřez, který je samotným listem; CadCraft jej vynechá.

### Co se zatím nenačte

Cokoli, co CadCraft nedokáže nakreslit, se počítá, ne hádá. Rámeček „O tomto souboru“ v levém panelu to uvádí jako „Zatím se nezobrazuje:“ s každým druhem objektu a počtem. Typické jsou tabulky v DXF, sítě a 3D tělesa uvnitř bloků. 3D tělesa, oblasti a těla v prostoru modelu se zobrazí na kartě 3D (viz [Model ve 3D](topic:3d-solids#solids-from-other-programs)). Výřezy otočené v souboru se zobrazí otočené, jako tam, a při uložení si otočení zachovají; stejně tak aktuální UCS, pojmenované UCS a otočený pohled.

Text se kreslí jedním písmem ve stylu Helvetica. Popisek, který se v užším písmu původního programu vejde na jeden řádek, se může v CadCraftu zalomit na dva.

## Ukládání

Ukládat lze třemi způsoby. Každý stáhne kopii.

- **Uložit**: stiskněte {{key:Mod+S}}, klikněte na {{ui:Uložit}} nebo napište `SAVE` (také `QSAVE`). Ukládá ve formátu výkresu: DWG, pokud jste otevřeli DWG, DXF, pokud jste otevřeli DXF. DWG si zachová verzi, ve které přišel (soubor 2018 se uloží jako 2018). Nový výkres používá formát a verzi DWG, které jste naposledy zvolili v Uložit jako v tomto prohlížeči; pokud jste nikdy nevolili, DWG ve formátu AutoCAD 2000.
- **Uložit jako**: stiskněte {{key:Mod+Shift+S}}, klikněte na {{ui:Uložit jako}} nebo napište `SAVEAS`. Dialog {{ui:Uložit kopii jako}} nabízí {{ui:DWG}} se seznamem {{ui:Verze}} (AutoCAD 2018, 2013, 2010, 2007, 2004 nebo 2000), {{ui:DXF R12}} a {{ui:DXF 2000}}, každé s názvem souboru, který dá, a s předvybraným aktuálním formátem a verzí výkresu. Kliknutím na {{ui:Uložit}} stáhnete, nebo na {{ui:Zrušit}} (či {{key:Esc}}) nic neuložíte; historie pak uvede „Neuloženo.“ Co zvolíte, platí dál: {{key:Mod+S}} to od té chvíle používá pro tento výkres a nové výkresy v tomto prohlížeči s tím začínají.
- **DXFOUT**: napište `DXFOUT`. Vždy stáhne kopii DXF R12 a další {{key:Mod+S}} stále ukládá ve vlastním formátu výkresu.

Prohlížeč stáhne `<název výkresu>.dwg` nebo `<název výkresu>.dxf`. Každé uložení je **nové stažení**; soubor, který jste otevřeli, se nikdy nepřepíše ani nezmění. Historie to potvrdí, například „Uložena kopie jako Plan.dwg (DWG (AutoCAD 2018)). Váš původní soubor Plan.dxf zůstává beze změny.“ U DXF uvede „(DXF R12, otevře se v jakémkoli CAD programu)“. Řádky pod ním uvádějí vše, co se cestou změnilo.

Když CadCraft běží v aplikaci pro počítač, ukládání funguje jako v jiných počítačových programech: {{key:Mod+S}} zapíše výkres zpět do souboru, který jste otevřeli, v jeho vlastním formátu a verzi, a historie uvede, kam se uložil. {{ui:Uložit jako}} a exporty zobrazují systémový dialog pro uložení a soubor `.dwg`, `.dxf` nebo `.ccsheets`, na který dvakrát kliknete, se otevře v CadCraftu.

Pro PDF místo toho vykreslujte (viz níže).

## Co DWG zachovává a mění

CadCraft zapisuje DWG sám, uvnitř Vašeho prohlížeče, stejnou knihovnou DWG, kterou čte. Verzi zvolte v Uložit jako: formát AutoCAD 2000 (verze souboru AC1015) se otevře v nejvíce programech, i starých; novější formáty (2004, AC1018, až 2018, AC1032) navíc zachovávají skutečné barvy. Nic se nenahrává a ukládání DWG funguje offline.

Každá verze se kontroluje zpětným načtením uložených souborů třemi čtečkami DWG jiných programů a samotným CadCraftem. DWG z CadCraftu zatím nebyl otevřen v samotném AutoCADu.

### Co DWG zachovává

- Úsečky, oblouky, kružnice, elipsy, body a mnohočáry s jejich obloukovými segmenty.
- Jednořádkový text s jeho zarovnáním a faktorem šířky.
- Víceřádkový a zalamovaný text jako víceřádkový text. Druhý program jej ze stejné šířky zalomí znovu.
- Barvy objektů: podle vrstvy, podle bloku, 255 standardních barev a skutečné barvy ve formátu 2004 a novějším.
- Vrstvy s jejich barvou, typem čáry, tloušťkou čáry a nastavením zapnutí, zamrazení, zamknutí a tisku; vlastní typy čar, tloušťky čar a měřítka typů čar objektů, vzory typů čar a měřítko typů čar výkresu.
- Jednotky výkresu a formát délek (desetinný, stopy a palce, zlomky…).
- Bloky s jejich základním bodem a definicemi atributů, včetně neviditelných, konstantních a přednastavených.
- Odkazy na bloky s jejich měřítkem, natočením a hodnotami atributů.
- Plné výplně a šrafy se vzorem, s jejich vzorem, měřítkem a úhlem (vlastní čáry vzoru, takže ostatní programy kreslí stejné čáry jako CadCraft).
- Kóty jako skutečné kóty: ostatní programy je při natažení znovu změří. Každá si zachovává vlastní nastavení (výšku textu, velikost šipky, desetinná místa, formát délek) a svůj text a nese nakreslenou kopii, kterou má každá kóta DWG.
- Listy (rozvržení): každý list s jeho velikostí papíru a jednotkami, tím, co je na něm nakresleno, a jeho výřezy s jejich pohledem a měřítkem.
- Pojmenované pohledy.
- Víceúrovňové výnošky jako víceúrovňové výnošky.
- Názvy vrstev a bloků tak, jak jste je napsali, velkými i malými písmeny. (DXF R12 je zapisuje velkými.)

### Co DWG mění

Každá z těchto změn je po uložení uvedena v historii, pokud se týká Vašeho výkresu.

| V CadCraftu | V uloženém DWG |
|---|---|
| Skutečné barvy (zvolené výběrem barvy) ve formátu 2000 | Nejbližší standardní barva: formát 2000 má jen 255. Chcete-li je zachovat, uložte jako 2004 nebo novější |
| Pojmenované pohledy listu | Pohledy prostoru papíru: DWG neříká, který list, takže když CadCraft soubor znovu otevře, patří prvnímu listu |
| Víceřádkový text s faktorem šířky | Normální šířka písmen: v DWG se faktor šířky týká jen jednořádkového textu |
| Názvy vrstev nebo bloků se znaky, které DWG nepovoluje | Změněno: název z propojeného výkresu, například `Base\|Walls`, se stane `Base$0$Walls` (tak, jak ho pojmenuje svázání propojeného výkresu) a ostatní znaky se stanou `_` |

### Proč R12 a co se převádí

Při uložení jako DXF zapisuje CadCraft DXF R12, verzi, kterou otevře každý program CAD. Je starší než některé funkce, takže několik věcí se zapíše v jednodušší podobě:

| V CadCraftu | V uloženém souboru R12 |
|---|---|
| Víceřádkový text | Jeden textový objekt na řádek |
| Elipsy | Mnohočáry sledující elipsu |
| Šrafy (z otevřených souborů) | Jen jejich obrysy |
| Skutečné barvy (zvolené výběrem barvy) | Nejbližší standardní barva |
| Tloušťky čar a vlastní měřítka typů čar objektů | Vynechány: R12 nemá ani jedno (typy čar se zachovají) |
| Názvy vrstev a bloků | Zapsány velkými písmeny; mezery a další znaky se stanou `_` a názvy se zkrátí na 31 znaků („Title block“ se stane `TITLE_BLOCK`) |
| Vrstvy nastavené, aby se netiskly | Ostatní programy je vytisknou (CadCraft si nastavení pamatuje, má-li výkres list) |
| Kóty | Skutečné kóty s vlastním nakresleným blokem, takže je ostatní programy zobrazí tak, jak je vidíte |
| Víceúrovňové výnošky | Čáry, šipka a text, které kreslí |
| Pojmenované pohledy | Zachovány, s názvy velkými písmeny; pohledy listu se vrátí na první list |
| Více listů | První list je prostor papíru, který zobrazuje každý program; ostatní se zachovají jako bloky pojmenované `CCLAYOUT_1`, `CCLAYOUT_2` …, které CadCraft při otevření souboru promění zpět v listy |

Historie uvádí každou z těchto změn, která se týkala Vašeho výkresu.

:::tip
Chcete-li na výkresu pracovat několik dní, uložte jej jako DXF a příště otevřete tento DXF. Vše, co CadCraft umí nakreslit, přežije cestu tam a zpět, včetně kót, bloků a všech listů.
:::

## Propojené výkresy (externí reference)

{{cmd:XATTACH}} (`XA`, nebo {{ui:Bloky}} › {{ui:Více}} › {{ui:Propojit výkres (xref)}}) propojí jiný DWG nebo DXF: vyberte soubor a potom klikněte, kam patří ({{key:Enter}} jej umístí na 0,0). Přijde jako jeden blok pojmenovaný podle souboru, ve správném měřítku, mají-li oba výkresy různé jednotky. Jeho vrstvy a bloky si zachovají názvy s názvem propojení před nimi — `Plan|Walls`, `Plan|Door` — takže se nikdy nesmísí s Vašimi: propojené vrstvy zapínejte a vypínejte, zamrazujte nebo zamykejte jako vlastní. Propojení je jen pro čtení: změňte druhý výkres a znovu jej načtěte. To, co nastavíte na vrstvách propojení (barva, typ čáry, tloušťka čáry, zapnutí/vypnutí, zamrazení, zamknutí, tisk), se zachová při opětovném načtení, při uložení výkresu jako DWG, dokud je propojení stále propojením, a když tento výkres propojí jiný výkres.

{{cmd:XREF}} (`XR`): `?` uvádí propojení (načtená či nikoli, který soubor, kolik odkazů); `A` připojí; `R` znovu načte jedno z jeho souboru (zvolte soubor znovu: prohlížeč sám ke složkám přístup nemá); `B` jedno sváže (stane se běžnými bloky a vrstvami pojmenovanými `Plan$0$Walls`); `D` jedno odpojí (jeho odkazy a vrstvy zmizí). Každé je jeden krok zpět.

{{cmd:XCLIP}} (`XC`) ořezává odkazy na bloky a propojení: vyberte je, `N` pro novou hranici, potom `R` a dva rohy nebo `P` a body mnohoúhelníku ({{key:Enter}} jej uzavře); `D` ořez odstraní. Zobrazuje a vykresluje se jen to, co leží uvnitř, a ořez se pohybuje s odkazem. DWG a DXF 2000 ořezy zachovávají; DXF R12 uloží odkaz celý a řekne to. Když svazujete propojení s ořezanými odkazy, {{cmd:XREF}} `B` se zeptá: `A` sváže vše, `C` ponechá jen ořezanou část každého odkazu (úsečky a oblouky se na hranici přeříznou; texty a vnořené bloky zůstanou, leží-li jejich vkládací bod uvnitř).

Výkres, který otevřete, může propojovat soubory, které CadCraft nevidí: řekne, kolik jich není načteno. Použijte {{cmd:XREF}}, `R` a vyberte každý soubor, abyste je viděli.

Při uložení se načtené propojení **sváže** do souboru (ostatní programy vidí běžné bloky a vrstvy pojmenované `Plan$0$…`) a historie to uvede. Propojení, které není načteno, zůstane propojením na svůj soubor, v DWG i DXF.

## Otevření ve 3D

{{ui:Pohled}} › {{ui:Více}} › {{ui:Otevřít v ModelCraftu}} ({{cmd:OPENIN3D}}) otevře výkres v aplikaci pro 3D modelování v nové kartě, jako DWG, bez nahrávání. Změny provedené tam tam zůstanou; uložte je tam. Položka nabídky se zobrazuje jen tam, kde ta aplikace dokáže převzít předaný výkres.

## Vykreslení PDF

Stiskněte {{key:Mod+P}}, klikněte na {{ui:Vykreslit}} nebo napište `PLOT`. PDF se vytvoří uvnitř prohlížeče a stáhne se, nebo se otevře v nové kartě k tisku. Viz [Vykreslení do PDF](topic:plot-pdf).

## Kam soubory putují

Každé uložení a každé vykreslení je stažení, takže soubory skončí tam, kam Váš prohlížeč stahování ukládá: obvykle do složky Stažené soubory. Chcete-li pokaždé vybrat složku, změňte nastavení stahování v prohlížeči; kde, ukazuje téma [Prohlížeče a počítače](common:browsers).

Nic, co otevřete nebo uložíte, se nám neodesílá. Viz [Kam Vaše soubory putují](common:your-files).

## Soubory projektů PLN a PLA

CadCraft otevírá výkresy DWG a DXF, ne vlastní soubory Archicadu (`.pln`, `.pla`, `.tpl`, `.bpn`). Při otevření takového souboru Vám řekne, co to je. V Archicadu uložte potřebné pohledy nebo rozvržení jako DWG a otevřete je zde, nebo exportujte model jako IFC a otevřete jej v BimCraftu. Kde může BimCraft soubor převzít, CadCraft nabízí {{ui:Otevřít v BimCraft}}.

## Pokud se stránka zavře před uložením

CadCraft uchovává kopii každého výkresu, který změníte, jen v tomto prohlížeči, chvíli poté, co přestanete upravovat. Pokud se karta zavře, prohlížeč se zastaví nebo se počítač restartuje před uložením, CadCraft se při příštím spuštění zeptá **Obnovit Vaši práci?**: {{ui:Obnovit}} otevře výkres znovu, neuložený, ve vlastní kartě. Uložením výkresu se jeho kopie odstraní. Viz [Obnovení práce](common:recover).

## Online a offline

Otevírání, kreslení, ukládání (DWG a DXF) i vykreslování probíhají na Vašem počítači, takže po načtení CadCraftu fungují bez připojení.

Chcete-li CadCraft používat zcela bez připojení, klikněte, dokud jste online, na {{ui:Uložit pro offline}} v liště nahoře. Popisek počítá nahoru („Ukládání 40 z 212“) a skončí u „Připraveno offline“. Uložená kopie obsahuje čtečku DWG, celkem asi 5 MB, takže se **po uložení offline otevírají i soubory DWG**. Dalším kliknutím na tlačítko získáte {{ui:Uložit znovu (získat nejnovější verzi)}} nebo {{ui:Odebrat offline kopii}}. „Nepodařilo se uložit“ znamená, že se některé soubory nestáhly: zkontrolujte připojení a kliknutím to zkuste znovu. „Offline není dostupné“ znamená, že toto okno prohlížeče nemůže uchovat kopii (soukromá okna a některé spravované počítače).

Bez uložené kopie se čtečka DWG stahuje při prvním otevření DWG po načtení stránky, takže otevření DWG offline může selhat; soubory DXF ji nikdy nepotřebují. Nenačítejte stránku znovu offline, pokud CadCraft není uložen.

Podrobnosti viz [Práce offline](common:offline).

:::offline
Jste nyní offline. Výkresy se ukládají jako DWG nebo DXF a vykreslují normálně a soubory DXF se otevírají. Soubory DWG se otevírají, pokud CadCraft zobrazuje „Připraveno offline“, nebo pokud se čtečka DWG již v této kartě načetla.
:::

## Vazby v souborech

Vazby a parametry (viz [Vazby ve výkresu](topic:constraints)) se ukládají do DWG i DXF. Každý objekt s vazbou nese malou poznámku CadCraftu (rozšířená data) a nepoužitý blok pojmenovaný `CADCRAFT_PARAMETRIC` obsahuje vazby a tabulku parametrů. Ostatní programy výkres otevřou normálně a obojí ignorují; při vyčištění mohou nepoužitý blok smazat. Poznámky odkazují na objekty jejich vlastním klíčem, ne úchyty souboru, takže program, který úchyty přečísluje, je nerozbije. Když druhý program objekt s vazbou smazal nebo změnil, CadCraft při otevření souboru vazby na něm zahodí a řekne kolik. Soubor bez nich se otevře bez vazeb.

Skica exportovaná z modeláře dílů (`.json`) se také otevře: viz [Přenos skic mezi modeláři dílů](topic:solidworks-sketches).

## Zatím není k dispozici

- Víceúrovňové výnošky jako objekty víceúrovňových výnošek v uloženém DXF (R12 je nemá: ukládají se jako to, co kreslí).
- Obrázky v uloženém DXF (ukládají se jako rámečky; DWG je zachovává jako obrázky) a zakrývací objekty, které skrývají, co je pod nimi.
- Uložení novější verze DXF než 2000.
- Ukládání do cloudu a synchronizace mezi počítači.

Úplný seznam viz [Ještě není hotovo](topic:not-built-yet).
