---
title: Tvary, řezy, odsazení a zámky 2D stěn
summary: Kreslete stěny jako obdélníky, mnohoúhelníky a oblouky, rozdělujte je a spojujte zpět, posouvejte je o rozměr a zamkněte jednu stěnu k jiné nebo k ose. Stejné nástroje jako u stěn v BimCraft.
keywords: stěna, panel nástrojů stěn, tlačítka stěn, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, styl spojení, zkosení, tupý, kolmo ukončit, visací zámek, úchyt, tažení konce, otočit, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, spojit, zakázat spojení, zámek, osa, rozdělit, mezera, odsazení, čára polohy
from: f41e7433
---

Tyto nástroje pracují s 2D stěnami z `WALL` (viz „Kreslení chytrých stěn, dveří a oken ve 2D“). Používají stejná pravidla jako nástroje stěn v BimCraft, takže se stěna chová v obou stejně.

## Kde jsou nástroje

- Na panelu nástrojů má skupina {{ui:Stěny}} položky {{ui:Zeď}}, {{ui:Obdélník}}, {{ui:Rozdělit}} a {{ui:Odsadit}}. Její nabídka {{ui:Více}} obsahuje všechny ostatní nástroje stěn, každý se svou ikonou.
- V stylech nabídky pásu karet má karta {{ui:Stěny}} panely {{ui:Kreslit stěny}}, {{ui:Vyjmout}}, {{ui:Nastavit a upravit}}, {{ui:Podržet}} a {{ui:Spojit}}.
- V rozvržení ukazují řádky nástrojů a panel nástrojů stejnou skupinu {{ui:Stěny}}.
- Můžete také napsat kterýkoli příkaz uvedený níže.

## Spojení se ukládají

Když konec stěny dosedne na jinou stěnu, CadCraft uloží to spojení s oběma stěnami. Spojení již znovu nepočítá podle toho, kde zrovna konce leží. Proto:

- Stěny spojené s přesouvanou stěnou ji sledují a zůstávají spojené. Jejich konce klouzají po vlastních čarách, takže se nic neotáčí.
- Když táhnete jeden konec stěny za jeho úchyt, stěna spojená v tomto místě si také zachová svůj směr. Její konec klouže po vlastní čáře, aby se setkal s tažnou stěnou, takže tažený konec přistane na této čáře, ne vždy pod kurzorem. Náhled ukazuje, kde. Stěna, která do tažené stěny naráží tupě, sleduje podle vlastní čáry. Tažení konce přímo podél stěny mění její délku a stěna spojená v tomto místě se s ní posune.
- `ROTATE` na spojené stěně funguje stejně: konce jejích sousedů klouzají po vlastních čarách k otočené stěně.
- Chcete-li přesunout roh, vyberte obě stěny, které se tam stýkají, a táhněte úchytem na rohu. Obě stěny zůstanou v rohu a obě se otočí. Stěny dál zůstanou, jaké byly.
- Podržte {{key:Alt}}, když klepnete na nové místo úchytu, a spojení záměrně přerušíte: stěna jde tam, kam ji dáte, a nic ji nesleduje.
- Pokud by tažení otočilo spojenou stěnu zpět skrz její vzdálený konec, bude odmítnuto a nic se nezmění.
- Stěna, kterou kreslíte s {{ui:Nepovolit spojení}} (`D` v `WALL`), nebo kterou vypnete ve Vlastnostech ({{ui:Nepovolit spojení na začátku}}, {{ui:Nepovolit spojení na konci}}), zůstane na tom konci volná, i když se dotýká jiné stěny, dokud ji znovu nepovolíte.
- `WALLDISJOIN` ({{ui:Zakázat spojení}} ve skupině {{ui:Stěny}}) dělá totéž jedním klepnutím: klepněte na stěnu blízko jednoho konce, aby se na tom konci spojení zakázala, a klepněte znovu, aby se povolila.
- Starší výkres zatím žádná uložená spojení nemá. První změna je jednou najde podle toho, jak stěny stály před změnou, a uloží. `WALLJOINS` to udělá hned.
- Soubory DWG a DXF nesou spojení uvnitř každé stěny. CadCraft je čte zpět tak, jak byla uložena. Program, který nevede rozšířená data, zobrazí stěny jako prosté bloky a spojení zahodí; spojení, jehož stěny byly přesunuty v jiném programu, se zahodí při příští změně kterékoli z těchto stěn.

## Styl spojení rohu

Roh, kde se dvě stěny stýkají konec na konec, se kreslí jako zkosení, pokud nezvolíte jiný styl.

- `WALLJOINSTYLE` ({{ui:Styl spojení}} ve skupině {{ui:Stěny}}): klepněte na roh. Každé klepnutí přejde na další styl: {{ui:Zkosení}}, {{ui:Tupý}}, {{ui:Kolmo ukončit}}, pak znovu {{ui:Zkosení}}. Napište `T`, aby se přepnulo, která ze dvou stěn prochází rohem, na který jste naposledy klepli. Dokončete stiskem {{key:Enter}}. Jedno spuštění příkazu je jeden krok zpět.
- {{ui:Tupý}}: jedna stěna prochází až k vzdálené líci druhé a druhá se zastaví u jejího boku. {{ui:Kolmo ukončit}}: totéž, ale procházející stěna končí kolmo k sobě. Pod pravým úhlem vypadají oba stejně.
- Ve Vlastnostech stěny: {{ui:Styl spojení na začátku}}, {{ui:Styl spojení na konci}} a {{ui:Prochází na začátku}}, {{ui:Prochází na konci}}.
- Styl se ukládá s oběma stěnami a přenáší se v souborech DWG a DXF. Kopie stěny začíná bez něj.
- Spoj typu T nemá styl k volbě: prochází stěna, do jejíhož boku se naráží. Roh, kde se stýkají tři nebo více stěn, zůstává zkosením. Zkosením zůstává i velmi ostrý roh (pod zhruba 30 stupňů) a dvě stěny v jedné přímce.

## Kreslení tvarů stěn

Každý vytvoří stěny v jednom kroku zpět se spojenými rohy. V `WALL` `O` nastaví posun umístění (jak daleko vlevo od vašich klepnutí stěna půjde) a `D` vypne spojování pro stěny, které nakreslíte příště.

- `WALLRECT` (`WR`): dva protilehlé rohy, jako `RECTANG`.
- `WALLROT`: první strana, pak jak daleko jde druhá strana, pro obdélník v libovolném úhlu.
- `WALLPOLY` (`WP`): počet stran (3 až 64), střed, `I` pro vepsaný nebo `C` pro opsaný, pak poloměr, jako `POLYGON`.
- `WALLARC` (`WARC`): střed, začátek, konec. `D` otočí oblouk na opačnou stranu.
- `WALLTAN`: klepněte blízko konce stěny, pak na konec oblouku, který vychází podél této stěny.
- `WALLPICK`: klepněte na úsečku nebo mnohočáru a řekněte, zda vzít i čáry, které jsou k ní připojené.
- `WALLTRACE`: klepněte dovnitř uzavřené oblasti čar a stěn, aby kolem nejmenší z nich vznikly stěny.

Stěny půdorysu jsou přímé, proto se oblouk kreslí jako krátké přímé stěny po 15 stupních. Spojují se jako jakýkoli roh.

## Řezání stěn

- `WALLSPLIT` (`WS`): klepněte na stěnu, pak na bod. `C` řeže tam, kde ji protíná jiná stěna, `G` nechá mezeru mezi částmi, `F` udělá z konců řezu volné místo spojených. První část si ponechá místo stěny ve výkresu a dveře a okna jdou se svou částí. Řez skrz dveře nebo okno bude odmítnut.
- `WALLSPLITGAP` ({{ui:Rozdělit s mezerou}}): stejné rozdělení, ale nejprve se zeptá na mezeru.
- `WALLDELSEG`: klepněte na stěnu, pak na oba konce úseku, který chcete smazat.
- `WALLREJOIN`: klepněte na dvě části jedné stěny, aby se znovu staly jednou.

## Posun stěn o vzdálenost

- `WALLDIM`: klepněte na délkovou nebo zarovnanou kótu, která vede od jedné stěny ke druhé, a pak napište novou hodnotu. Stěna na vzdáleném konci se posune kolmo k sobě, stěna na prvním konci zůstane na místě a stěny spojené s ní ji sledují.
- `WALLOFFSET` (`WO`): klepněte na stěnu, pak na stranu, na kterou ji posunout (`D` zadá vzdálenost, `C` místo toho vytvoří kopii).
- `WALLSTRETCH`: okno kolem konců stěn, pak základní bod a druhý bod.
- Ve Vlastnostech zadaná {{ui:Délka}} zachová začátek a vezme s sebou stěnu spojenou na vzdáleném konci a nová {{ui:Tloušťka}} roste od {{ui:Čára polohy}}, kterou zvolíte (levá líc, pravá líc nebo střed).

## Zamykání stěn

Zámek zůstává se stěnou v souboru. Když přesunete jednu zamčenou stěnu, druhá ji sleduje. Pokud by jedna změna pohnula oběma stěnami různě, bude odmítnuta a nic se nezmění.

- `WALLHOLD`: zamkne stěnu k jiné stěně. `A` ji nejprve přesune na čáru druhé stěny, `K` zachová vzdálenost, kterou má.
- `WALLHOLDDIM`: zamkne vzdálenost mezi dvěma rovnoběžnými stěnami.
- `WALLGRID`: zamkne stěnu k ose (čára na vrstvě mřížky s jejím označením textem na jednom konci), buď podél ní, nebo jedním koncem na ní. Stěna zamčená podél čáry si zachová vzdálenost, kterou od ní má. Přesunete-li osu příkazem `GRIDMOVE`, stěna ji sleduje celá i se spojenými stěnami. Stěna ležící podél osy se s ní posune celá i bez zámku a stěna, která na čáře jen končí, se natáhne svým koncem.
- `WALLHOLDS` vypíše zámky. `WALLUNHOLD` zruší zámky na stěně.
- Každý zámek ukazuje na půdorysu malý visací zámek: vedle středu zamčené stěny, nebo vedle konce, který je zamčen k ose. Klepnutím na visací zámek tento zámek zrušíte.

## Co zde ještě není

Zámky používají středové čáry stěn. Stěny zde nemají vrstvy, takže na styku není žádná priorita vrstev a stěny se neohýbají (viz oblouky výše). Tyto nástroje ještě nikdo nevyzkoušel na velkém výkresu a nebyly ověřeny v jiném CAD programu.
