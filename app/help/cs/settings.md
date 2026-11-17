---
title: Nastavení CadCraftu
summary: Nastavení patřící do kreslicí aplikace: velikost kurzoru, odkud visí vložená kopie od kurzoru, co klik udělá s výběrem, kolik řádků používá panel nástrojů, kde je příkazový řádek a jak je vysoký, kompaktní horní oblast a indikátor v rohu.
keywords: příkazový řádek, plovoucí příkazový řádek, plovoucí, ukotvit, jeden řádek, f2, historie příkazů, commandline, cmdline, toparea, horní oblast, kompaktní, velikost kurzoru, celá obrazovka, kurzor přes celou obrazovku, od okraje k okraji, řádky panelu nástrojů, zobrazení panelu nástrojů, ctrl f1, nastavení, předvolby, možnosti, indikátor v rohu, kostka pohledu, ikona os, ucs icon, kurzor, zaměřovací kříž, výběrový čtverec, bod vložení, základní bod, klikání na objekty, výběr, pickadd, shift, obnovit
from: 0896eb42
---

Otevřete {{ui:Nastavení}} ozubeným kolečkem v horní liště nebo klávesami {{key:Mod+,}}. První karta, {{ui:CadCraft}}, obsahuje nastavení, která patří této aplikaci; {{ui:Obecné}} obsahuje ta, která sdílejí všechny aplikace z rodiny (motiv, velikost textu a šířky panelů, vzhled a pořadí panelu nástrojů). Nastavení CadCraftu existují jen v této aplikaci: měníte je tady a tento prohlížeč si je pamatuje. {{ui:Obnovit nastavení CadCraft}} vrátí každé z nich na začátek.

## Kurzor

**Malý**, **Střední** (výchozí), **Velký** nebo **Celá obrazovka**: velikost zaměřovacího kříže a výběrového čtverce ve výkresu. Větší výběrový čtverec vybírá objekty i z trochu dál, což pomáhá na dotykové obrazovce nebo u velmi jemného výkresu.

**Celá obrazovka** vede dvě čáry zaměřovacího kříže od kraje ke kraji výkresu, i když žádný příkaz neběží, takže můžete okem zkontrolovat, že dvě věci jsou v celém pohledu v jedné linii. Při rozděleném pohledu čáry zůstanou v podokně, ve kterém pracujete. Stejně jako {{cmd:CURSORSIZE}} 100 v AutoCADu: napište {{cmd:CURSORSIZE}} a 100 pro celou obrazovku; menší číslo zvolí nejbližší velikost (pod 5 Malý, 5 až 9 Střední, 10 až 99 Velký).

## Bod vložení

Kam visí vložená kopie od kurzoru po {{key:Mod+V}} ({{cmd:PASTECLIP}}), dokud neklinete:

- **Levý dolní roh** (výchozí): levý dolní roh rozsahu kopírovaných objektů, jako v AutoCADu.
- **Střed**: střed jejich rozsahu. Hodí se k umístění symbolu od oka.

Kopie vytvořená příkazem `COPYBASE` vždy visí od základního bodu, který jste zvolili. {{ui:Vložit na stejné místo}} ({{key:Mod+Shift+V}}) toto nastavení ignoruje: zachová původní souřadnice. Viz [Kopírování, vkládání a duplikování](topic:copy-paste).

## Klikání na objekty

Co klik v kresbě udělá s výběrem, když žádný příkaz neběží:

- **Přidává k výběru** (výchozí): každý klik nebo okno přidá objekty; {{key:Shift}}+klik nebo {{key:Shift}}+okno je vyjme.
- **Nahrazuje výběr**: klik nebo okno vybere jen to, co zachytí. {{key:Shift}}+klik přidá objekt, nebo vyjme ten, který už vybraný je; {{key:Shift}}+okno přidá.

Na výzvě `Vyberte objekty:` uvnitř příkazu kliky vždy přidávají (a {{key:Shift}} odebírá), ať toto nastavení říká cokoli. Viz [Výběr objektů](topic:select-objects).

## Klik na prázdné místo

Co udělá klik tam, kde není žádný objekt, když žádný příkaz neběží. V obou případech začne okno výběru (druhý klik ho dokončí).

- **Zruší výběr** (výchozí): co bylo vybráno, se uvolní. Podržte {{key:Shift}} při kliknutí, abyste jej zachovali.
- **Ponechá výběr**: výběr zůstane, jako v jiných kreslicích programech; okno k němu přidá. Stiskněte {{key:Esc}} pro zrušení výběru.

## Tažení pro výběr

Co udělá stisknutí a tažení na prázdném místě:

- **Lasso** (výchozí): volný obrys. Táhnete-li nejdřív doprava, vybere se to, co celé leží uvnitř; doleva, vybere se to, čeho se dotýká. {{key:Space}} během tažení přepíná mezi oknem, křížením a plotem.
- **Obdélník**: rámeček, jako když klik a druhý klik rámeček nakreslí.

{{cmd:LASSOMODE}} `1` nebo `0` nastavuje totéž. Viz [Výběr lassem](topic:lasso-selection).

## Tažení pro oříznutí a prodloužení

Co udělá stisknutí na prázdném místě a tažení v {{cmd:TRIM}} a {{cmd:EXTEND}}:

- **Cesta** (výchozí): volná cesta; každý kus, který protne, se ořízne (nebo prodlouží).
- **Okno**: rámeček; každý kus, kterého se dotkne, se ořízne, jako dělá volba `C`.

Viz [Oříznout a prodloužit](topic:trim-and-extend).

## Poloha panelu nástrojů

{{ui:CadCraft}} › {{ui:Poloha panelu nástrojů}}: **Nahoře** (výchozí, jak to bylo vždy), **Dole**, **Vlevo** nebo **Vpravo**. Na levé nebo pravé straně se skupiny nástrojů skládají do sloupce, který se posouvá, je-li vyšší než okno, a tlačítka se zalamují po dvou nebo třech v řádku. Volba se uloží s vaším nastavením a {{cmd:TOOLBARDOCK}} (`TBDOCK`) ji nastaví z příkazového řádku. {{ui:Obecné}} › {{ui:Obnovit rozložení}} vrátí panel nástrojů nahoru.

Lišty stylů nabídek sedí uvnitř panelu nástrojů a pohybují se s ním, ale styl {{ui:Pás karet}} je určen k běhu nahoře nebo dole: na boku dostane úzký sloupec, který se posouvá. Na telefonu zůstává panel nástrojů tam, kam jej umístí telefonní rozložení.

## Řádky panelu nástrojů

Kolik řádků nástroje zabírají nad výkresem, v panelu nástrojů CadCraftu a ve stylech {{ui:Klasické kreslení}} a {{ui:Pás karet}}:

- **Zalamovat podle šířky** (výchozí): nástroje se zalamují podle šířky okna.
- **2 řádky**: nejvýše dva řádky. Když se nástroje při této šířce zalomí na dva řádky nebo méně, prostě se zalomí; jinak sedí ve dvou řádcích, které se posouvají do stran.
- **1 řádek**: jeden řádek, který se posouvá do stran, což výkresu dává nejvíc místa.

{{key:Shift+Ctrl+F1}} přepíná mezi těmito třemi, {{cmd:TOOLBARROWS}} nastaví jeden. Co tlačítka zobrazují (ikony a text, jen ikony, nebo jen text), je nastavení {{ui:Obecné}} › {{ui:Panel nástrojů}}; {{key:Ctrl+F1}} přepíná mezi nimi a {{cmd:TOOLBAR}} nastaví.

## Příkazový řádek

Příkazový řádek může zůstat ukotvený pod výkresem, jako dříve, nebo se vznášet nad ním, a může být tenký jako jeden řádek.

- **Plovoucí.** Přetáhněte úchyt na jeho levém konci do výkresu, nebo zvolte {{ui:Plovoucí nad výkresem}} v jeho nabídce {{ui:Možnosti příkazového řádku}} (tři tečky na pravém konci). Úchyt přetáhněte znovu pro přesun; jeho místo se zachová, když se změní velikost okna. Přetažením jeho pravého okraje ho zúžíte nebo rozšíříte. Pustíte-li jej na stavový řádek, nebo zvolíte {{ui:Ukotvit dole}}, znovu se ukotví.
- **Ztenčit nebo zvýšit.** Přetáhněte jeho horní okraj: každý krok je jeden řádek historie. Až na nulu řádků je to **jednořádkový příkazový řádek**: jen výzva a to, co píšete, a nová zpráva se nad ním na chvíli ukáže. Dvojklik na horní okraj přepíná mezi jedním řádkem a výškou, kterou jste měli.
- **Historie.** {{key:F2}}, nebo tlačítko s hodinami na příkazovém řádku ({{ui:Historie příkazů (F2)}}), otevře celou historii nad řádkem (pod ním, když se řádek vznáší blízko horního okraje okna). Psaní stále míří na příkazový řádek; {{key:PageUp}} a {{key:PageDown}} posouvají historii a {{key:Esc}}, {{key:F2}} nebo klik jinam ji zavřou. Vaše vlastní klávesa na F2 má přednost.
- **Z klávesnice.** Úchyt je tlačítko: je-li zaostřen, šipky posouvají plovoucí příkazový řádek (s {{key:Shift}} ve větších krocích); {{key:Up}} vznese ukotvený řádek a {{key:Down}} na spodním okraji jej ukotví. Horní okraj je oddělovač: {{key:Up}} a {{key:Down}} přidají nebo ubírají řádek, {{key:Home}} jej udělá jednořádkovým, {{key:End}} nejvyšším. Čtečky obrazovky slyší každou zprávu, i v jednořádkovém příkazovém řádku.

{{ui:CadCraft}} › {{ui:Příkazový řádek}} má stejné volby: {{ui:Ukotven dole}} nebo {{ui:Plovoucí}}, {{ui:Zobrazené řádky historie}} (0 až 12) a {{ui:Standardní výška}}. {{cmd:COMMANDLINE}} (`CMDLINE`) je nastaví z příkazového řádku. Místo a výška se pro CadCraft uchovají v tomto prohlížeči spolu s ostatním rozložením, takže je nese i uložené pracovní prostředí; {{ui:Obecné}} › {{ui:Obnovit rozložení}} ukotví příkazový řádek znovu na standardní výšku. Na telefonu zůstane příkazový řádek ukotvený s jedním řádkem historie; tlačítko historie tam funguje také.

Když je okno nízké a kontrola rozložení nabídne těsnější rozložení, jeho {{ui:Ano}} také přepne příkazový řádek na jeden řádek, pokud je výkres po panelech nástrojů stále krátký.

## Horní oblast

{{ui:CadCraft}} › {{ui:Horní oblast}}: **Standardní** (výchozí), nebo **Kompaktní**. Kompaktní zmenší lišty nad výkresem ve všech stylech nabídek: názvy skupin a slova pod ikonami zmizí (popisky a čtečky obrazovky je stále mají) a tlačítka jsou těsnější. Funguje s [Řádky panelu nástrojů](topic:settings#toolbar-rows): Kompaktní a **1 řádek** dávají výkresu nejvíc místa. {{cmd:TOPAREA}} to nastaví.

## Indikátor v rohu

Co sedí v rohu výkresu:

- **Automaticky** (výchozí): ikona os na kartě {{ui:Model}} a kostka pohledu na kartě {{ui:3D}}.
- **Ikona os**: značka X a Y vlevo dole na kartě {{ui:Model}} a malá značka X, Y a Z na kartě {{ui:3D}}.
- **Kostka pohledu**: kostka vpravo nahoře na obou kartách. Na kartě {{ui:Model}} ukazuje výkres shora a klik na jinou stěnu, hranu nebo roh otevře kartu {{ui:3D}} s pohledem odtamtud. Na kartě 3D se otáčí s pohledem: klikněte pro pohled z boku, tažením obíháte, a ikona domečku vrátí izometrický pohled. Viz [Model ve 3D](topic:3d-solids).
- **Žádná**: nic v rohu.

Listy nezobrazují ani jedno.

## Délka a plocha výběru

- **Ve stavovém řádku** (výchozí): jsou-li objekty vybrány, stavový řádek ukáže jejich celkovou délku a celkovou plochu uzavřených. Viz [Součty výběru](topic:properties-panel#totals-of-a-selection).
- **Skryto**: stavový řádek je vynechá. Vlastnosti je přesto zobrazí u několika objektů.

## Mřížka, ortogonální režim a přichytávání

Tyto nejsou v dialogu: tlačítka {{ui:Mřížka}}, {{ui:Ortogonální}} a {{ui:Přichytávání}} ve stavovém řádku (nebo {{key:F7}}, {{key:F8}}, {{key:F3}}) a seznam uchopení objektů vedle nich si pamatují, jak je necháte. Viz [Uchopení k bodům na objektech](topic:object-snaps).
