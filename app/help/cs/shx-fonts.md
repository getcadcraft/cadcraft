---
title: Kreslení textu ve vlastních písmech SHX
summary: Dejte CadCraftu složku písem SHX (nebo vyberte soubory) a styly textu, které je pojmenovávají, se kreslí v nich, na obrazovce i při vykreslení nebo v PDF, s výškou stylu, faktorem šířky a sklonem.
keywords: shx, písma, písmo, tvarová písma, big font, bigfont, unifont, starší, perština, farsí, arabština, styl textu, chybějící písmo, písmo nahrazeno, SHXFONTS, složka, obrátit, vizuální pořadí, simplex, isocp
from: 14b0a4ab
---

Výkresy z jiných programů často uvádějí **písma SHX** ve svých stylech textu, a DWG je neobsahuje. Bez písma kreslí CadCraft ten text vlastním řezem, což stačí pro běžný latinkový text, ale ne pro stará písma, která mapují prosté kódy znaků na jiné tvary písmen, jako starší perské popisky.

Dejte CadCraftu písma a on v nich text nakreslí.

## Načtení vašich písem

Napište {{cmd:SHXFONTS}} (`SHX`) a zvolte:

- {{ui:Složka}} (CadCraft Studio): vyberte složku. Každý soubor `.shx` v ní se přečte hned a znovu pokaždé, když CadCraft startuje.
- {{ui:Soubory}} (prohlížeč): vyberte jeden nebo více souborů `.shx`. Zůstanou v tomto prohlížeči a nikdy se nenahrávají.
- {{ui:Seznam (L)}}: písma, která jsou načtena, a ta, která otevřený výkres uvádí, ale vy jste je nenačetli.
- {{ui:Odebrat}} a {{ui:Vymazat}}: zapomene jedno písmo, nebo všechna.

CadCraft nemůže přibalit písma třetích stran, takže žádná nedodává: pocházejí od vás. Výkres jen uvádí jejich názvy a žádnou kopii si nenechává.

## Co se stane

Název písma stylu textu se páruje s načteným písmem podle názvu, bez ohledu na velikost písmen, složku a `.shx` (`SIMPLEX.SHX` najde `simplex`). Text v takovém stylu se kreslí jako čáry, na obrazovce, při vykreslení i v PDF, na vlastním místě textu, s jeho výškou, otočením, faktorem šířky a úhlem sklonu. Jeho šířka je šířka samotného písma, takže zarovnání {{ui:Center}} a {{ui:Right}}, zalamování a výběr odpovídají tomu, co vidíte. Styl, jehož písmo není načteno, si ponechá vestavěný řez; a když otevřete výkres, který uvádí písma, která jste nenačetli, příkazový řádek to řekne.

Styl Standard se také počítá: výkres, jehož styl Standard uvádí vlastní písmo, si je ponechá.

## Písma už ve vizuálním pořadí

Mnohá stará perská a arabská písma SHX drží písmena už tvarovaná pro obrazovku a kreslí se zleva doprava, takže text napsaný v logickém pořadí vyjde pozpátku. Napište {{cmd:SHXFONTS}}, zvolte {{ui:Obrátit (R)}} a pojmenujte písmo: jeho text se pak rozloží od posledního písmene. Spusťte to znovu pro zrušení. Přepínač patří písmu, uchová se v tomto prohlížeči a neukládá se do výkresu.

## Co zatím není pokryto

- Text s vloženými formátovacími kódy (barvy, zásobníky v MTEXT) zůstává ve vestavěném řezu.
- Big fonts (dvoubajtové druhy) doplní kódy, které hlavní písmo nemá, ale text ve východoasijské kódové stránce, který už CadCraft převedl do Unicode, se nemapuje zpět na dvoubajtové kódy písma.
- Čtečka písem se řídí zveřejněným popisem formátu a byla testována na písmech vytvořených pro CadCraft. Pokud některé z vašich kreslí špatně, pošlete nám písmo a výkres.
