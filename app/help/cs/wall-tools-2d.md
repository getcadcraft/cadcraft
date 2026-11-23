---
title: Tvary stěn, řezy, odsazení a zámky pro 2D stěny
summary: Kreslete stěny jako obdélníky, mnohoúhelníky a oblouky, dělte je a znovu spojujte, posouvejte je podle kóty a zamykejte jednu stěnu k jiné nebo k mřížkové čáře. Stejné nástroje jako stěny v BimCraftu.
keywords: stěna, panel stěn, tlačítka stěn, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, styl spojení, zkosení, tupý, kolmo ukončit, visací zámek, úchyt, přetažení konce, otočit, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, spojení, zakázat spojení, zámek, mřížková čára, dělit, mezera, odsazení, čára umístění
from: 49044181
---

Tyto nástroje pracují s 2D stěnami z příkazu `WALL` (viz „Kreslení chytrých 2D stěn, dveří a oken“). Používají stejná pravidla jako nástroje pro stěny v BimCraftu, takže se stěna chová stejně v obou.

## Kde jsou nástroje

- Na panelu nástrojů má skupina {{ui:Stěny}} tlačítka {{ui:Zeď}}, {{ui:Obdélník}}, {{ui:Dělit}} a {{ui:Odsadit}}. Její nabídka {{ui:Více}} obsahuje všechny ostatní nástroje pro stěny, každý s ikonou.
- V nabídkových stylech s pásem karet má karta {{ui:Stěny}} panely {{ui:Kreslit stěny}}, {{ui:Řez}}, {{ui:Nastavit a upravit}}, {{ui:Podržet}} a {{ui:Spojit}}.
- V rozvržení zobrazují řádky nástrojů a panel nástrojů stejnou skupinu {{ui:Stěny}}.
- Můžete také napsat kterýkoli níže uvedený příkaz.

## Spojení se ukládají

Když konec stěny dopadne na jinou stěnu, CadCraft to spojení uloží u obou stěn. Už nepočítá spojení znovu z toho, kde konce náhodou leží. Takže:

- Stěny spojené se stěnou, kterou posunete, ji následují a zůstávají spojené. Jejich konce kloužou po vlastních čarách, takže se nic nezlomí.
- Přetáhnete-li jeden konec stěny za úchyt, stěna spojená na tom místě si také zachová svůj směr. Její konec klouže po vlastní čáře, dokud se nesetká s přetahovanou stěnou, takže přetažený konec přistane na té čáře, ne vždy pod kurzorem. Náhled ukáže, kde. Stěna, která naráží do přetahované stěny, následuje podél své vlastní čáry. Přetažení konce přímo podél stěny změní její délku a stěna spojená na tom místě se pohne s ní.
- {{cmd:ROTATE}} na spojené stěně funguje stejně: konce jejích sousedů kloužou po vlastních čarách k otočené stěně.
- Chcete-li posunout roh, vyberte obě stěny, které se tam stýkají, a přetáhněte úchyt na rohu. Obě stěny zůstanou v rohu a obě se otočí. Stěny dál po trase zůstanou, jak byly.
- Podržte {{key:Alt}}, když kliknete na nové místo úchytu, abyste spojení záměrně přerušili: stěna jde tam, kam ji dáte, a nic ji nenásleduje.
- Pokud by tažení otočilo spojenou stěnu přes její vlastní vzdálený konec, odmítne se a nic se nezmění.
- Stěna nakreslená s {{ui:Zakázat spojení}} (`D` v `WALL`), nebo vypnutá ve Vlastnostech ({{ui:Nepovolit spojení na začátku}}, {{ui:Nepovolit spojení na konci}}), zůstane na tom konci volná, i když se dotýká jiné stěny, dokud ji znovu nepovolíte.
- `WALLDISJOIN` (tlačítko {{ui:Zakázat spojení}} ve skupině {{ui:Stěny}}) dělá totéž klikem: klikněte na stěnu blízko jednoho konce, abyste na tom konci zakázali spojení, a klikněte znovu, abyste je povolili.
- Starší výkres nemá zatím uložená spojení. První změna, kterou provedete, je jednou najde podle toho, jak stěny stály před změnou, a uloží. `WALLJOINS` to provede hned.
- Soubory DWG a DXF nesou spojení uvnitř každé stěny. CadCraft je čte zpět tak, jak byla uložena. Program, který nemá rozšířená data, zobrazí stěny jako prosté bloky a spojení zahodí; a spojení, jehož stěny byly posunuty v jiném programu, se zahodí při nejbližší změně kterékoli z nich.

## Styl spojení rohu

Roh, kde se dvě stěny stýkají konec na konec, se kreslí jako zkosení, pokud nezvolíte jiný styl.

- `WALLJOINSTYLE` ({{ui:Styl spojení}} ve skupině {{ui:Stěny}}): klikněte na roh. Každý klik přejde na další styl: {{ui:Zkosení}}, {{ui:Tupý}}, {{ui:Kolmo ukončit}}, pak znovu {{ui:Zkosení}}. Napište `T`, abyste přepnuli, která ze dvou stěn prochází rohem, na němž jste kliknuli naposledy. Stiskněte {{key:Enter}}, chcete-li skončit. Jedno spuštění příkazu je jeden krok zpět.
- {{ui:Tupý}}: jedna stěna pokračuje až k vnější straně druhé a druhá končí o její bok. {{ui:Kolmo ukončit}}: totéž, ale stěna, která prochází, končí kolmo ke svému vlastnímu směru. Při pravém úhlu vypadají obě stejně.
- Ve Vlastnostech stěny: {{ui:Styl spojení na začátku}}, {{ui:Styl spojení na konci}} a {{ui:Prochází na začátku}}, {{ui:Prochází na konci}}.
- Styl se ukládá se oběma stěnami a přechází do souborů DWG a DXF. Kopie stěny začíná bez něj.
- Spoj T nemá styl k volbě: prochází ta stěna, do jejíž strany se naráží. Roh, v němž se stýká tři a více stěn, zůstává zkosením. Zkosením zůstává i velmi ostrý roh (pod zhruba 30 stupňů) a dvě stěny v jedné přímce.

## Kreslení tvarů stěn

Každý z nich vytvoří stěny v jednom kroku zpět, s rohy spojenými. V `WALL` `O` nastaví odsazení umístění (jak daleko vlevo od vašich kliknutí stěna jde) a `D` vypne spojování pro stěny, které nakreslíte příště.

- `WALLRECT` (`WR`): dva protilehlé rohy, jako `RECTANG`.
- `WALLROT`: první strana, potom jak daleko jde druhá strana, pro obdélník pod libovolným úhlem.
- `WALLPOLY` (`WP`): počet stran (3 až 64), střed, `I` pro vepsaný nebo `C` pro opsaný, potom poloměr, jako `POLYGON`: klikněte na něj, nebo jej napište (napsaný poloměr míří ke kurzoru, nebo podél X, zůstane-li kurzor na středu).
- `WALLARC` (`WARC`): střed, začátek, konec. `D` otočí oblouk opačným směrem.
- `WALLTAN`: klikněte blízko konce stěny, potom na konec oblouku, který vychází podél té stěny.
- `WALLPICK`: klikněte na čáru nebo mnohočáru a řekněte, zda vzít i čáry na ni navazující.
- `WALLTRACE`: klikněte dovnitř uzavřené plochy čar a stěn, aby se kolem nejmenší z nich vytvořily stěny.

Půdorysné stěny jsou rovné, takže oblouk se kreslí jako krátké rovné stěny po 15 stupních. Spojí se jako každý roh.

## Dělení stěn

- `WALLSPLIT` (`WS`): klikněte na stěnu, potom na bod. `C` řeže tam, kde ji protíná jiná stěna, `G` nechá mezeru mezi částmi, `F` udělá řezné konce volné místo spojených. První část si zachová místo stěny ve výkresu a dveře a okna jdou s svou částí. Řez skrz dveře nebo okno se odmítne.
- `WALLSPLITGAP` ({{ui:Rozdělit s mezerou}}): totéž rozdělení, ale nejprve se zeptá na mezeru.
- `WALLDELSEG`: klikněte na stěnu, potom na oba konce kusu, který se smaže.
- `WALLREJOIN`: klikněte na dvě části jedné stěny, abyste z nich znovu udělali jednu.

## Posouvání stěn o vzdálenost

- `WALLDIM` ({{ui:Upravit podle kóty}}): klikněte na lineární nebo zarovnanou kótu, která vede od jedné stěny ke druhé, potom napište novou hodnotu. Stěna na vzdáleném konci se posune kolmo sama k sobě, stěna na prvním konci zůstane, a stěny na ni navazující následují. Vzdálený bod kóty se pohybuje se svou stěnou, takže kóta ukazuje hodnotu, kterou jste napsali.
- `WALLOFFSET` (`WO`): klikněte na stěnu, potom na stranu, na kterou ji přesunout (`D` napíše vzdálenost, `C` místo toho vytvoří kopii).
- `WALLSTRETCH`: rámeček kolem konců stěn, potom základní bod a druhý bod.
- Ve Vlastnostech napsaná {{ui:Délka}} si zachová začátek a vezme s sebou stěnu připojenou na vzdáleném konci, a nová {{ui:Tloušťka}} roste od {{ui:Čára umístění}}, kterou jste zvolili (levá plocha, pravá plocha nebo střed).

## Kóta mezi středovými čarami stěn

Středová čára stěny se nekreslí, ale přichycení k objektu ji najde. Je-li přichytávání k objektům zapnuto ({{key:F3}}), najeďte kurzorem na střed tloušťky stěny: značka hlásí `Wall center: endpoint` nebo `Wall center: midpoint` a středová čára se ukáže jako čárkovaná, dokud je na ní značka. Zapnete-li v seznamu přichytávání k objektům {{ui:Kolmá}} nebo {{ui:Nejbližší}}, fungují i na středové čáře.

1. Spusťte `DIMLINEAR` (nebo `DIMALIGNED`).
2. Klikněte na první stěnu tam, kde značka hlásí `Wall center: midpoint` nebo `Wall center: endpoint`.
3. Klikněte na druhou stěnu stejným způsobem, potom klikněte, kam půjde kótovací čára.
4. Chcete-li změnit vzdálenost, spusťte `WALLDIM`, klikněte na kótu a napište novou hodnotu. Druhá stěna se posune.

Přichycení na středovou čáru funguje v každém příkazu, který žádá bod.

## Zamykání stěn

Zámek zůstává se stěnou v souboru. Posunete-li jednu zamčenou stěnu, druhá ji následuje. Jestliže jedna změna pohne oběma stěnami různě, odmítne se a nic se nezmění.

- `WALLHOLD`: zamkne stěnu k jiné stěně. `A` ji nejprve přesune na čáru druhé stěny, `K` si ponechá vzdálenost, kterou má.
- `WALLHOLDDIM`: zamkne vzdálenost mezi dvěma rovnoběžnými stěnami.
- `WALLGRID`: zamkne stěnu k mřížkové čáře (čára na vrstvě mřížky s jejím štítkem v textu na jednom konci), buď podél ní, nebo jedním koncem na ní. Stěna zamčená podél čáry si zachová svou vzdálenost od ní. Posunete-li mřížkovou čáru pomocí `GRIDMOVE`, stěna ji následuje celá, se svými spojenými stěnami. Stěna, která leží podél mřížkové čáry, se pohne celá i bez zámku, a stěna, která na čáře jen končí, se natáhne tím koncem.
- `WALLHOLDS` vypíše zámky. `WALLUNHOLD` zámky ze stěny sejme.
- Každý zámek ukazuje na plánu malý visací zámek: vedle středu zamčené stěny, nebo vedle konce, který je zamčen k mřížkové čáře. Kliknutím na visací zámek ten zámek zrušíte.

## Co zatím není

Zámky používají středové čáry stěn. Stěny zde nemají vrstvy, takže na spoji není žádná priorita vrstev, a stěny se neohýbají (viz oblouky výše). Nikdo tyto nástroje ještě nezkoušel na velkém výkresu a nebyly ověřeny v jiném CAD programu.
