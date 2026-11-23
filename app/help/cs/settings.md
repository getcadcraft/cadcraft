---
title: Nastavení CadCraftu
summary: Nastavení patřící kreslicí aplikaci: velikost kurzoru, místo, odkud visí vložená kopie od kurzoru, co klik dělá s výběrem, kolik řádků používá panel nástrojů, kde je příkazový řádek a jak je vysoký, kompaktní horní oblast a indikátor rohu.
keywords: příkazový řádek, plovoucí příkazový řádek, plovoucí, ukotvit, jeden řádek, f2, historie příkazů, commandline, cmdline, toparea, horní oblast, kompaktní, cursorsize, kurzor přes celou obrazovku, celá obrazovka, od okraje k okraji, řádky panelu nástrojů, zobrazení panelu nástrojů, ctrl f1, nastavení, předvolby, volby, indikátor rohu, kostka pohledu, ikona os, ikona ucs, kurzor, zaměřovací kříž, výběrový čtvereček, bod vložení, základní bod, klikání na objekty, výběr, pickadd, shift, obnovit
from: ae1a81db
---

Otevřete {{ui:Nastavení}} pomocí ozubeného kola v horní liště nebo klávesou {{key:Mod+,}}. První karta, {{ui:CadCraft}}, obsahuje nastavení patřící této aplikaci; {{ui:Obecné}} obsahuje ta, která sdílejí všechny aplikace rodiny (motiv, velikost textu panelů a jejich šířky, vzhled a pořadí panelu nástrojů). Nastavení CadCraftu existují jen v aplikaci: měníte je zde a tento prohlížeč si je pamatuje. {{ui:Obnovit nastavení CadCraftu}} vrátí každé z nich na začátek.

## Kurzor

**Malý**, **Střední** (výchozí), **Velký** nebo **Celá obrazovka**: velikost zaměřovacího kříže a výběrového čtverečku ve výkresu. Větší výběrový čtvereček vybere objekty i z trochu větší vzdálenosti, což pomáhá na dotykové obrazovce nebo u velmi jemného výkresu.

**Celá obrazovka** vede dvě čáry zaměřovacího kříže od kraje k okraji výkresu, i když žádný příkaz neběží, takže můžete očima ověřit, že dvě věci leží v jedné linii přes celý pohled. Je-li pohled rozdělen, čáry zůstávají v podokně, se kterým pracujete. Stejné jako {{cmd:CURSORSIZE}} 100 v AutoCADu: napište {{cmd:CURSORSIZE}} a 100 pro celou obrazovku; menší číslo zvolí nejbližší velikost (pod 5 Malý, 5 až 9 Střední, 10 až 99 Velký).

## Místo vložení

Kam od kurzoru visí vložená kopie po {{key:Mod+V}} ({{cmd:PASTECLIP}}), dokud neklepnete:

- **Levý dolní roh** (výchozí): levý dolní roh rozsahu zkopírovaných objektů, jako v AutoCADu.
- **Střed**: střed jejich rozsahu. Hodí se pro umístění symbolu od oka.

Kopie vytvořená příkazem `COPYBASE` vždy visí od základního bodu, který jste zvolili. {{ui:Vložit na stejné místo}} ({{key:Mod+Shift+V}}) toto nastavení ignoruje: ponechá původní souřadnice. Viz [Kopírování, vkládání a duplikování](topic:copy-paste).

## Klikání na objekty

Co klik ve výkresu udělá s výběrem, když neběží žádný příkaz:

- **Přidává do výběru** (výchozí): každý klik nebo výběrový rámeček přidá objekty; {{key:Shift}}+klik nebo {{key:Shift}}+rámeček je vyřadí.
- **Nahrazuje výběr**: klik nebo rámeček vybere jen to, co zachytí. {{key:Shift}}+klik přidá objekt, nebo vyřadí ten, který už vybrán je; {{key:Shift}}+rámeček přidává.

U výzvy `Select objects:` uvnitř příkazu kliky vždy přidávají (a {{key:Shift}} odebírá), bez ohledu na toto nastavení. Viz [Výběr objektů](topic:select-objects).

## Klik na prázdné místo

Co udělá klik tam, kde žádný objekt není, když neběží žádný příkaz. V obou případech spustí výběrový rámeček (druhý klik ho dokončí).

- **Zruší výběr** (výchozí): co bylo vybráno, se pustí. Chcete-li to zachovat, držte {{key:Shift}} při kliku.
- **Ponechá výběr**: výběr zůstane, jak je to v jiných kreslicích programech; rámeček k němu přidává. Výběr zrušíte klávesou {{key:Esc}}.

## Tažení pro výběr

Co dělá stisknutí a tažení na prázdném místě:

- **Lasso** (výchozí): volný obrys. Táhne-li se nejprve doprava, vybere to, co leží celé uvnitř; nejprve-li doleva, vybere to, čeho se dotýká. {{key:Space}} během tažení přepíná mezi oknem, křížením a plotem.
- **Obdélník**: pole, stejně jako když kliknete a potom klikněte podruhé.

{{cmd:LASSOMODE}} `1` nebo `0` nastaví totéž. Viz [Výběr lassem](topic:lasso-selection).

## Tažení pro oříznutí a prodloužení

Co dělá stisknutí na prázdném místě a tažení v {{cmd:TRIM}} a {{cmd:EXTEND}}:

- **Cesta** (výchozí): volná cesta; každý kus, který protne, se ořízne (nebo prodlouží).
- **Okno**: pole; každý kus, kterého se dotkne, se ořízne, jako dělá volba `C`.

Viz [Oříznutí a prodloužení](topic:trim-and-extend).

## Poloha panelu nástrojů

{{ui:CadCraft}} › {{ui:Poloha panelu nástrojů}}: **Nahoře** (výchozí, jak to bylo vždy), **Dole**, **Vlevo** nebo **Vpravo**. Vlevo nebo vpravo se skupiny nástrojů skládají do sloupce, který se posouvá, je-li vyšší než okno, a tlačítka se zalamují po dvou nebo třech v řádku. Volba se ukládá s vašimi nastaveními a {{cmd:TOOLBARDOCK}} (`TBDOCK`) ji nastaví z příkazového řádku. {{ui:Obecné}} › {{ui:Obnovit rozložení}} vrátí panel nástrojů nahoru.

Pruhy nabídkových stylů sídlí uvnitř panelu nástrojů a pohybují se s ním, ale styl {{ui:Pás karet}} je navržen tak, aby běžel nahoře nebo dole: na straně dostane úzký sloupec, který se posouvá. Na telefonu zůstává panel nástrojů tam, kam jej postaví telefonní rozložení.

## Řádky panelu nástrojů

Kolik řádků nástroje používají nad výkresem, v panelu nástrojů CadCraftu a ve stylech {{ui:Klasické kreslení}} a {{ui:Pás karet}}:

- **Zalomit podle šířky** (výchozí): nástroje se zalomí podle šířky okna.
- **2 řádky**: nejvýš dva řádky. Zalomí-li se nástroje do dvou řádků nebo méně při této šířce, prostě se zalamují; jinak sedí ve dvou řádcích, které se posouvají do stran.
- **1 řádek**: jeden řádek, který se posouvá do stran, což výkresu dává nejvíce místa.

{{key:Shift+Ctrl+F1}} přepíná mezi těmito třemi a {{cmd:TOOLBARROWS}} jeden z nich nastaví. To, co tlačítka zobrazují (ikony a text, jen ikony, nebo jen text), je nastavení {{ui:Obecné}} › {{ui:Panel nástrojů}}; {{key:Ctrl+F1}} přepíná mezi nimi a {{cmd:TOOLBAR}} nastaví jedno.

## Příkazový řádek

Příkazový řádek může zůstat ukotvený pod výkresem, jak to bývalo vždy, nebo se může vznášet nad ním, a může být tenký jako jeden řádek.

- **Učinit plovoucím.** Přetáhněte úchyt na jeho levém konci do výkresu, nebo zvolte {{ui:Plovoucí nad výkresem}} v jeho nabídce {{ui:Možnosti příkazového řádku}} (tři tečky na jeho pravém konci). Úchyt znovu přetáhněte, chcete-li jej přesunout; jeho místo se zachová, když se změní velikost okna. Přetáhněte jeho pravý okraj, chcete-li jej rozšířit nebo zúžit. Pusťte jej na stavový řádek, nebo zvolte {{ui:Ukotvit dole}}, abyste jej znovu ukotvili.
- **Ztenčit nebo zvýšit.** Přetáhněte jeho horní okraj: každý krok je jeden řádek historie. Až na nulu řádků je to **příkazový řádek o jednom řádku**: jen výzva a to, co píšete, a nová zpráva se na okamžik ukáže nad ním. Dvojklik na horním okraji přepíná mezi jedním řádkem a výškou, kterou jste měli.
- **Historie.** {{key:F2}}, nebo tlačítko hodin na příkazovém řádku ({{ui:Historie příkazů (F2)}}), otevře celou historii nad řádkem (pod ním, je-li plovoucí blízko horního okraje okna). Psaní stále směřuje na příkazový řádek; {{key:PageUp}} a {{key:PageDown}} posouvají historii a {{key:Esc}}, {{key:F2}} nebo klik jinde ji zavře. Vlastní klávesa na F2 má přednost před tím.
- **Z klávesnice.** Úchyt je tlačítko: je-li zaostřen, šipkové klávesy posouvají plovoucí příkazový řádek (s {{key:Shift}} ve větších krocích); {{key:Up}} učiní ukotvený plovoucím a {{key:Down}} na dolním okraji jej ukotví. Horní okraj je oddělovač: {{key:Up}} a {{key:Down}} přidávají nebo ubírají řádek, {{key:Home}} jej udělá jednořádkovým a {{key:End}} nejvyšší. Čtečky obrazovky slyší každou zprávu, i v příkazovém řádku o jednom řádku.

{{ui:CadCraft}} › {{ui:Příkazový řádek}} nabízí tytéž volby: {{ui:Ukotven dole}} nebo {{ui:Plovoucí}}, {{ui:Zobrazené řádky historie}} (0 až 12) a {{ui:Standardní výška}}. {{cmd:COMMANDLINE}} (`CMDLINE`) je nastaví z příkazového řádku. Místo a výška se uchovávají pro CadCraft v tomto prohlížeči spolu s ostatním rozložením, takže uložené pracovní prostředí je nese; {{ui:Obecné}} › {{ui:Obnovit rozložení}} ukotví příkazový řádek zpět na standardní výšku. Na telefonu zůstává příkazový řádek ukotvený s jedním řádkem historie; tlačítko historie tam také funguje.

{{ui:CadCraft}} › {{ui:Písmena voleb}} uchovává písmena, která jste zvolili pro volby příkazů: {{ui:Upravit…}} otevře soubor, {{ui:Importovat…}} jej nahradí souborem, který vyberete, a {{ui:Exportovat}} jej uloží. Viz [Dejte volbám příkazů vlastní písmena](topic:option-letters).

Je-li okno nízké a kontrola rozložení nabídne těsnější rozložení, jeho {{ui:Ano}} také přepne příkazový řádek na jeden řádek, pokud je výkres po panelech stále krátký.

## Horní oblast

{{ui:CadCraft}} › {{ui:Horní oblast}}: **Standardní** (výchozí) nebo **Kompaktní**. Kompaktní drží lišty nad výkresem malé ve všech stylech nabídek: názvy skupin a slova pod ikonami zmizí (popisky a čtečky obrazovky je mají dál) a tlačítka jsou těsnější. Funguje s [Řádky panelu nástrojů](topic:settings#toolbar-rows): Kompaktní a **1 řádek** nechávají výkresu nejvíce místa. {{cmd:TOPAREA}} to nastaví.

## Indikátor rohu

Co sedí v rohu výkresu:

- **Automaticky** (výchozí): ikona os na kartě {{ui:Model}} a kostka pohledu na kartě {{ui:3D}}.
- **Ikona os**: značka X a Y v levém dolním rohu karty {{ui:Model}} a malá značka X, Y a Z na kartě {{ui:3D}}.
- **Kostka pohledu**: kostka vpravo nahoře na obou kartách. Na kartě {{ui:Model}} ukazuje výkres shora; klik na jinou stěnu, hranu nebo roh otevře kartu {{ui:3D}} s pohledem odtamtud. Na kartě 3D se otáčí s pohledem: klikněte pro pohled z boku, táhněte pro oběžný pohyb a domeček vrátí izometrický pohled. Viz [Model ve 3D](topic:3d-solids).
- **Žádný**: nic v rohu.

Listy nezobrazují ani jedno.

## Délka a plocha výběru

- **Ve stavovém řádku** (výchozí): je-li něco vybráno, stavový řádek ukazuje jejich celkovou délku a celkovou plochu uzavřených. Viz [Součty výběru](topic:properties-panel#totals-of-a-selection).
- **Skryto**: stavový řádek je vynechá. Vlastnosti je přesto ukážou pro několik objektů.

## Mřížka, Ortogonální a přichytávání

Tyto položky nejsou v dialogu: tlačítka {{ui:Mřížka}}, {{ui:Ortogonální}} a {{ui:Přichytávání}} ve stavovém řádku (nebo {{key:F7}}, {{key:F8}}, {{key:F3}}) a seznam přichytávání k objektům vedle nich se pamatují, jak je opustíte. Viz [Přichycení k bodům na objektech](topic:object-snaps).
