---
title: Ještě není hotovo
summary: Co tato verze kreslicí aplikace CadCraft zatím nedělá a co místo toho můžete udělat dnes.
keywords: chybějící, omezení, ctb, stb, styl tisku, vlastnosti, ucs, anotativní, dynamický blok, spline, plán vývoje, nepodporováno, uložení dwg, šrafa, natáhnout, pole, spojit, matchprop, přerušit, prodloužit, typ čáry, tloušťka čáry, xref, cloud, 3d, tělesa, booleovské operace, víceúrovňová výnoska, wipeout
from: 87e56521
---

CadCraft je ve vývoji. Tato stránka uvádí, co aktuální verze nedělá, abyste to nemuseli hledat. U každé položky je uvedeno, co udělat místo toho.

## Soubory a ukládání

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Soubor DWG z CadCraftu zkontrolovaný přímo v AutoCADu | Každá uložená verze je načtena zpět čtečkami DWG tří dalších programů a aplikací CadCraft. Viz [Co DWG uchovává a co mění](topic:files#what-a-dwg-keeps-and-changes). |
| Ukládání DXF novějšího než 2000 | Uložte jako DXF 2000, nebo jako DWG až do verze AutoCAD 2018. |
| Přepsání otevřeného souboru v prohlížeči | Každé uložení stáhne novou kopii; pokud chcete, starý soubor nahraďte sami. V aplikaci CadCraft Studio zapíše {{key:Mod+S}} změny zpět do otevřeného souboru. |
| Ukládání do cloudu a synchronizace mezi počítači | CadCraft zatím neposílá uložené soubory do cloudu: ukládejte soubory DWG a DXF do vlastních složek. V aplikaci CadCraft Studio vypisuje [Historie](topic:history) cloudové verze výkresu uloženého jinde a kopie vašich uložení na tomto počítači. |
| Podklady a úprava propojeného výkresu na místě | Připojte výkres jako odkaz a po změně druhého výkresu jej znovu načtěte. Odkaz zůstane odkazem, když uložíte jako DWG, a {{cmd:XCLIP}} jej ořízne. |
| Obrázky v DXF; wipeouty, které skrývají to, co je pod nimi | DXF uchovává obrázek jako jeho rámeček s názvem souboru; DWG jej uchovává jako obrázek – viz [Obrázky ve výkresu](topic:pictures). Wipeout se zobrazí jako svůj rámeček. |
| Úprava víceúrovňových výnosek s křivými výnosovými čárami, s výnosovými čárami na obou stranách obsahu nebo s blokem, který je otočen nebo nerovnoměrně měněn | Jsou kresleny tak, jak je nakreslil druhý program, a pohybují se jako jeden celek. Víceúrovňové výnosky s přímými výnosovými čárami do jednoho místa a s textem nebo blokem jako obsahem se načtou jako upravitelné ({{cmd:MLEADEREDIT}}). |
| V tabulkách z jiných programů: buňka obsahující blok, formátování textu uvnitř buňky, ohraničení a barvy jednotlivých buněk tabulky z DXF, tabulka rozdělená do sloupců | Tabulka se otevře jako upravitelná tabulka ({{cmd:TABLEDIT}}) a zobrazí se tak, jak ji nakreslil druhý program, dokud ji neupravíte; poté ji CadCraft překreslí z jejích buněk: prostý text, vzorce jako `=G3*H3` a `=Sum(I3:I9)`, zarovnání a výšky textu. Buňka s blokem je pak prázdná. Nedotčená tabulka DWG se uloží zpět s daty buněk, se kterými přišla. |
| Skutečný objekt tabulky v uloženém DXF | DWG uchovává tabulku jako tabulku, kterou mohou jiné programy upravovat. DXF ji uchovává jako blok, který ji kreslí, spolu se záznamem CadCraftu: CadCraft ji znovu otevře jako tabulku; ostatní programy vidí blok. Zrcadlená nebo nerovnoměrně měněná tabulka se takto uloží i v DWG. |
| Kopírování a vkládání s jinými programy | Schránka CadCraftu funguje mezi výkresy a kartami CadCraftu ve stejném prohlížeči, ne s jinými programy. Uložte jako DWG nebo DXF a otevřete jej tam. Viz [Kopírovat, vložit a duplikovat](topic:copy-paste). |

## Kreslení a úpravy

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Šrafovací vzory, které CadCraft nemá, a přechodové výplně přesně tak, jak je maluje jiný program | Otevřené šrafy se vzory, které CadCraft nemá, se zobrazí jako tón. Přechodová výplň ({{cmd:GRADIENT}}) je vykreslena vlastním způsobem CadCraftu pro každý typ: podobně jako v jiných programech co do druhu, ne bod po bodu. DWG 2004 a novější ji uchovávají jako skutečnou přechodovou šrafu; v souboru DXF 2000 nebo DWG 2000 ji čte zpět jen CadCraft a ostatní programy vidí plnou výplň. Vzory se načítají ze souboru `.pat` a šrafu lze připojit k její hranici, takže ji sleduje: viz [Šrafy a výplňové plochy](topic:hatch). |
| Typy čar s tvary nebo textem a tloušťky čar v uloženém DXF R12 | Tvary a text v typu čáry souboru se vynechají z čárkování; pro zachování tloušťek čar uložte jako DWG. |
| Vzorované šrafy v uloženém DXF | R12 nemá šrafy: uloží se jako jejich obrysy. Pro zachování vzoru uložte jako DWG. |
| Pole vytvořená jiným programem nebo upravitelná v něm; řady a úrovně u polí podél cesty a polárních polí; pole, které sleduje křivku své dráhy | Pole vytvořené s asociativitou ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; měněné pomocí {{cmd:ARRAYEDIT}}) se uloží jako odkaz na blok s čísly CadCraftu: jiné programy je zobrazí, přesunou, vykreslí a rozloží, ale nemohou změnit jejich počty; pole vytvořené v jiném programu se zde otevře jako prostý odkaz na blok. Pole podél cesty si uchovává kopii své dráhy: úprava křivky později položky nepřesune. |
| Oříznuté výřezy listů z jiných programů a do nich | Výřez oříznutý pomocí {{cmd:VPCLIP}} nebo vytvořený pomocí {{cmd:MVIEW}} s volbou Mnohoúhelník (P) nebo Objekt se uloží s vlastním obrysem CadCraftu: jiné programy jej otevřou jako obdélník kolem něj a výřez oříznutý v jiném programu se zde otevře jako jeho obdélník. DXF R12 uchovává pouze obdélník. |
| {{cmd:STRETCH}} s křižujícím mnohoúhelníkem | Použijte jedno nebo více křižujících oken. |
| {{cmd:PEDIT}} Úprava vrcholu (E) (jeden vrchol najednou na příkazovém řádku) | Úchyty a prohlížeč vrcholů v panelu Vlastnosti (každý vrchol, jeho šířky a vyboulení). Zbytek PEDIT je hotov: viz [Křivky spline a mnohočáry](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} a {{cmd:JOIN}} na elipsách a splinech | Použijte {{cmd:EXPLODE}} na spline (nebo na něj {{cmd:PEDIT}}), abyste dostali mnohočáru, se kterou tyto příkazy pracují. |
| Zaoblení a sražení hrany mezi obloukovým segmentem mnohočáry a jejím sousedním segmentem; zaoblení spojující čáru do mnohočáry | Použijte {{cmd:EXPLODE}} na mnohočáru a poté zaoblete jednotlivé části. Oblouk zaoblení se přidá jako samostatný objekt. |
| Ořez a prodloužení: volba Project (3D) a prodloužení obloukového konce mnohočáry | Oříznout v rovině výkresu; u obloukového konce mnohočáru rozložte, nebo oblouk nakreslete znovu. |
| Objekty OLE: vkládání, spouštění nebo úprava; zobrazení těch v DWG, kde je soubor uvádí; obrázky metasouborů | Viz [Obrázky](topic:pictures#objects-from-other-programs-ole). Objekty DXF se zobrazují jako jejich bitmapa nebo popsaný rámeček; objekty DWG se zachovají, ale nekreslí se na místě (OLELIST je vypíše a na místo, které určíte, umístí kopii obrázku). |
| Psaní formátovacích kódů (tučně, zlomky pod sebou, barvy po slovech) v odstavcovém textu; jiná písma než jedno písmo typu Helvetica; sloupce | Formátování, které přišlo v souboru, se zachová, nakreslí a uloží (viz Text); nový odstavcový text má jednu výšku a barvu. |
| Úprava odstavcového textu v jeho natočení | Editor se otevře vodorovně; text si natočení zachová. |
| Víceúrovňové výnosky uložené jako objekty víceúrovňových výnosek v DXF | DWG je uchovává jako víceúrovňové výnosky se všemi výnosovými čárami a blokem jako obsahem; DXF uchovává to, co kreslí (čáry, hroty šipek a text nebo blok). |
| V tabulkách ({{cmd:TABLE}}): text, který se zalamuje uvnitř buňky, tabulky rozdělené na části, vlastní textový styl stylu tabulky a barvy podle druhu řádku v dialogu, datové propojení s tabulkovým souborem (`.xlsx`) nebo takové, které čte soubor samo | Text buňky se zalomí jen tam, kde jej zalomíte ({{key:Alt+Enter}}); rozšiřte sloupec. {{cmd:DATALINK}} čte soubor `.csv` a {{cmd:DATALINKUPDATE}} vás požádá, abyste soubor vybrali znovu. {{cmd:DATAEXTRACTION}} a {{cmd:COUNTTABLE}} vytvoří tabulku, která výkres sama nesleduje: spusťte je znovu (živé počítání: {{cmd:BOMTABLE}}). |
| Definice atributů uchované samostatně v uloženém souboru (mimo blok), víceřádkové atributy | Před uložením vložte definice atributů do bloku: samostatně se uloží jako text zobrazující značku. |
| Stavy vrstev (ukládání a obnovení toho, které vrstvy jsou zapnuté) | Použijte {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, nebo vrstvy zapínejte a vypínejte ručně. |
| Výběr mnohoúhelníkem plotu a křižujícím mnohoúhelníkem a uložené filtry výběru | Plot (`F`), Okno, Křížení, Odebrat (`R`), {{cmd:QSELECT}} pro pravidlo. |

## Panel Vlastnosti

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Kreslení voleb Fit a vodorovné polohy textu a textu pod čárou u kót jiných než délkových a zarovnaných | Jsou uchovány u objektu, zobrazeny ve Vlastnostech a uloženy; CadCraft umisťuje text podle svého pravidla. |
| Materiály, které vidí jiné programy | Uložený soubor uchovává název materiálu pro CadCraft; jiné programy zobrazují materiál vrstvy. |
| Průhlednost v souborech DWG 2000 a DXF | Jiné programy tyto objekty zobrazují plné; CadCraft průhlednost zachovává. Pro všechny uložte jako DWG 2004 nebo novější. |
| Odkaz na šrafu vytvořený v jiném programu | CadCraft ukládá vlastní odkaz v souborech DWG a DXF 2000; odkazy vytvořené v jiných programech se nečtou. Použijte `HATCHEDIT` a Odkaz: viz [Šrafy a výplňové plochy](topic:hatch). |
| Souřadnice ve Vlastnostech v UCS | Vlastnosti zobrazují světové souřadnice; stavový řádek a {{cmd:ID}} zobrazují souřadnice UCS. Viz [Otočení pohledu a vlastní souřadnice](topic:ucs-and-turned-view). |
| Samostatná poloha anotativního objektu v každém z jeho měřítek; čtení záznamů po měřítcích, které si vedou jiné programy | Anotativní text nebo kóta uchovává seznam měřítek ({{cmd:OBJECTSCALE}}) a každý výřez jej zobrazí ve velikosti pro své měřítko, na stejném místě. Seznam se ukládá jako vlastní data CadCraftu: jiný program vidí objekt jen v jednom měřítku, pro které je dimenzován, a seznam vytvořený v jiném programu se nečte. Viz [Jednotky, papíry a měřítka](topic:units-papers-scales#annotate-by-scale). |
| Změna vzdáleností, úhlů nebo překlápění dynamického bloku; dynamické bloky, které zůstávají dynamické při uložení v jiné verzi DWG nebo jako DXF | Přepněte jeho stav viditelnosti v Vlastnosti › {{ui:Vlastní}}; jeho ostatní hodnoty se tam zobrazí jen pro čtení. Zůstane dynamický, když jej uložíte jako DWG ve verzi, ve které výkres přišel. Viz [Dynamické bloky](topic:dynamic-blocks). |
| Tolerance přizpůsobení splinu, stupeň splinu 6 a vyšší, 3D spliny | Přizpůsobení a řídicí body, stupně 1 až 5 a váhy jsou hotové: viz [Křivky spline a mnohočáry](topic:splines). Výška splinu (Z) se neuchovává. |

## Pomůcky pro přesnost

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Sledování bodů napříč příkazy a dialog nastavení sledování (relativní polární úhly, dodatečné úhly) | {{cmd:POLARANG}} nastaví krok; body znovu získejte v dalším příkazu. |
| Přichycení k mřížce | Zadávejte souřadnice; mřížka je pouze vizuální vodítko. |
| Volby Oblouk a Délka při výběru rohů plochy a MEASUREGEOM Volume | Nakreslete obrys pomocí {{cmd:PLINE}} (včetně oblouků) a poté {{cmd:AREA}} `O`. |
| Dynamické zadávání pro úchyty a jeho seznam voleb (šipka dolů) | Příkazový řádek zobrazuje volby. |
| Úhly ve stupních, minutách a sekundách, gradech nebo geodetických azimutech | Zadejte desetinné stupně: `30.5` pro 30°30'. |
| Dialog správce pohledů; pojmenované pohledy listu, které se na tom listu vrátí | {{cmd:NAMEDVIEW}} vypisuje a obnovuje pohledy. Uložený soubor je uchovává, ale pohledy listu se vrátí na prvním listu. |

## Listy, kóty a vykreslování

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Pole pro měřítko výřezu, pojmenovaný objekt jako vrstva nebo blok, hypertextový odkaz a pole sady listů nad číslo a název listu; pole zapsaná jako polní objekty, které jiné programy aktualizují | {{cmd:FIELD}} obsahuje datum, název souboru, číslo listu, název a počet, vlastnosti výkresu ({{cmd:DWGPROPS}}), plochu, délku a jiné vlastnosti objektu a vzorce v textu, atributech a buňkách tabulek. Jiný program zobrazí pole CadCraftu jako text, který naposled načetl; CadCraft čte data, název souboru, vlastnost, list a výrazová pole jiného programu a ostatní druhy nechá jako text. Měřítko výřezu se píše ručně. |
| Uložení, který styl kót je aktuální; text kóty přetažený na volné místo | Výkres se otevře s aktuálním stylem Standard. Text leží na kótovací čáře (DIMTEDIT Left / Right / Center). Viz [Nastavení velikostí kót](topic:dimension-settings). |
| Kótované úhly s dvěma řádky z otevřených souborů, které CadCraft nedokáže určit | Zobrazí se tak, jak jsou nakresleny v souboru. Kóty souřadnic, délky oblouku a zalomené poloměry se otevřou jako kóty, které můžete upravit. |
| Ověření čtečky CTB oproti souboru z jiného programu (je hotová podle zveřejněného popisu), pojmenované styly tisku (STB), dither, čísla per, stupně šedi z CTB a adaptivní přizpůsobení typu čáry ve stylu tisku | Vytvořte tabulku v {{ui:Tabulky stylů tisku}} (barva, šedá, inkoust, tloušťka čáry, typ čáry, zakončení a spojení čáry a styl výplně pro každou barvu): viz [Tabulky stylů tisku](topic:plot-pdf#plot-style-tables). |
| Nastavení stránky | Vyberte papír, měřítko a styl tisku v dialogu {{ui:Vykreslit do PDF}}; list si uchovává svůj styl tisku. |
| Hindština a další písma vyžadující složité tvarování v PDF a vzácné ideogramy (evropská písma, cyrilice, řečtina, hebrejština, arabština, perština, urdština, thajština, čínština, japonština a korejština v tisku) | Vytisknou se jako "?". |
| Arabské písmo a čínština, japonština nebo korejština v tomtéž vykresleném PDF | Výtisk nese jedno písmo: jedno ze dvou písem se vytiskne jako "?". |
| Explicitní směrové značky v textu (vložení, přepsání, izolace) | Jsou ignorovány: každý řádek se řadí jen podle svých písmen. |
| Obrázky uvnitř připojené stránky PDF ve výtisku | Čáry, výplně a text stránky se vytisknou. Stránka, která je jen obrázek, se připojí pomocí {{cmd:SCANATTACH}} a obrázky se vytisknou. Viz [Podklady PDF](topic:pdf-underlay#plot-and-save). |
| Odeslání úlohy na laser z aplikace CadCraft Studio (Studio nemá Web Serial) | Uložte G-kód a odešlete jej vlastním programem laseru, nebo jej odešlete z Chrome nebo Edge. Viz [Odeslat výkres na laser](topic:laser-cutting#send-from-the-browser). |

## Vazby a parametry

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Vazby na listech, v blocích, na elipsách, splinech nebo textu | Vážte na kartě {{ui:Model}}, na čarách, mnohočarách, kružnicích, obloucích a bodech. |
| Hladký přechod (G2) a přímé vázání vyboulení oblouku mnohočáry | Tečna a stejná; obloukový segment následuje své dva konce. |
| Referenční (řízené) kótové vazby a `3Point` v {{cmd:DCANGULAR}} | Prostá kóta (DIMLINEAR …) zobrazí hodnotu, aniž by ji řídila. |
| Kótové vazby pevné velikosti na papíru a jejich vykreslení | Zobrazují se jen na obrazovce; pro výtisk přidejte prosté kóty. |
| Vazby zachované přes EXPLODE, BREAK, JOIN a jiné příkazy, které vytvářejí nové objekty, a na oříznutých mnohočárách | Znovu je nastavte (AUTOCONSTRAIN pomáhá). {{cmd:MIRROR}} a {{cmd:TRIM}} čar, oblouků a kružnic je zachovají. |
| Návrhové tabulky (konfigurace) v CadCraftu | Měňte parametry v panelu. |
| Ověřený přenos tam a zpět se SolidWorks | Před použitím zkontrolujte skicu, kterou makro vytvoří. |

## 3D

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Zaoblení, sražení, skořepiny a lofty; tažení po dráze, která stoupá (3D dráhy) | Vytahujte obrysy s oblouky, tlačte a táhněte plochy, otáčejte a tažením po rovných drahách. |
| Vytahování v jiném směru než nahoru | Nakreslete tvar na zem a vytáhněte jej nahoru nebo dolů (případně se zúžením nebo podél dráhy); těleso poté otočte. |
| Výška a tloušťka 2D objektů | Výkres leží na zemi (výška 0) na kartě 3D. |
| Úprava těles, oblastí a těles z jiných programů; zobrazení těch uvnitř bloků; jejich plochy na tažených, loftovaných nebo jiných volných plochách; polyface a polygonové sítě | Tělesa v prostoru modelu se zobrazují na kartě 3D tak, jak jsou, a při uložení do DWG se vrátí beze změny; co se nevykreslí, je vypsáno při otevření karty 3D. Sítě si vyžádejte jako 3D plochy v prostoru modelu. Viz [Tělesa z jiných programů](topic:3d-solids#solids-from-other-programs). |
| Kopírování a vkládání těles | Na kartě 3D použijte {{cmd:COPY}}. Schránka drží jen 2D objekty. |
| Řezy, pohledy, které sledují pozdější změny těles, a stínovaná tělesa na vykreslených listech | {{cmd:VIEWBASE}} umístí ploché pohledy (snímek); po změně těles jej spusťte znovu. |
| Materiály, textury a nastavení osvětlení | Vizuální styly: stínovaný, hrany, skrytá čára, drátový, rentgen. |
| Mapové vrstvy vykreslené, na výřezech listů a na kartě 3D; obrázky ze souborů uložených s výkresem; umístění výkresu zapsané pro jiné programy v DWG 2000–2007 a DXF R12 | Mapové vrstvy se zobrazují pod prostorem modelu na obrazovce; systém a seznam vrstev se ukládají s výkresem: viz [Mapové vrstvy pod výkresem](topic:map-layers). |
| E57 skeny nad 6 milionů bodů nebo 512 MB, vlastní soubory výrobců skenerů (RCP, RCS, FLS, LGS, TZF, ZFS), mračno bodů uložené s výkresem nebo vykreslené, přichycení k mračnu na kartě 3D, svislé (řezové) řezy na kartě Model | Velké skeny nebo skeny výrobců exportujte jako LAS nebo LAZ ([Formáty mračen bodů](topic:point-cloud-formats)); mračno připojte při každém otevření výkresu; obkreslujte z půdorysného řezu na kartě Model: viz [Obkreslení skutečného stavu nad mračnem bodů](topic:point-clouds). |
| Registrace skenů: automatické hledání cílů (koule, šachovnice) ve skenu, společné řešení všech skenů (vyrovnání svazku), měřítko, registrace oproti modelu | Vyberte odpovídající body nebo zadejte souřadnice cílů, poté zpřesněte jeden sken po druhém pomocí ICP: viz [Registrace více skenů do jednoho](topic:register-scans). |

## Rutiny a přizpůsobení

| Ještě není hotovo | Místo toho dnes |
|---|---|
| Zkompilované nebo chráněné LISP (.fas, .vlx), nativní programy (.arx, .crx, .dbx) a VBA (.dvb) | Načtěte zdrojový soubor `.lsp` rutiny pomocí {{cmd:APPLOAD}}. |
| `grread` v LISPu, reaktory (`vlr-…`), funkce křivek (`vlax-curve-…`), slovníky a rozšířená data, `acet-…` z Express Tools | Zbytek jazyka funguje: viz [Spouštění rutin LISP](topic:run-lisp). Příkazový řádek pojmenuje chybějící funkci, když na ni rutina narazí. |
| Obrázky a snímky v dialogu rutiny | Zobrazí se jako prázdné rámečky; zbytek dialogu funguje. |
| CraftScript (.craft), Lua a Python v CadCraftu | Spusťte je v pracovním prostoru Script v PartCraftu. |
| Seznamy vrstev, barev a typů čar uvnitř stylů nabídky pásu | Použijte panel {{ui:Vrstvy}} a {{ui:Vlastnosti}}. |
| Startovací sada a aliasy uložené na vašem počítači nebo synchronizované | Uchovávají se v tomto prohlížeči; desktopová aplikace a cloudová služba je budou uchovávat za vás. Ve Studiu se soubory `acad.lsp` a `acaddoc.lsp` čtou z podpůrné složky, kterou vyberete (Načíst aplikace). |

## Nápověda

Nápověda popisuje tuto verzi. Když se něco přidá, přesune se z této stránky do návodů.
