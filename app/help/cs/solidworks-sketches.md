---
title: Přesun skic do jiných modelářů dílů a zpět
summary: Napište makro, které přestaví váš výkres jako jednu vázanou skicu v modeláři dílů, a otevřete skicu exportovanou z modeláře dílů.
keywords: skica, makro, swb, vba, export, modelář dílů, globální proměnné, rovnice, vztahy, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
Program SolidWorks není dostupný tam, kde se CadCraft sestavuje, takže žádný z těchto směrů zatím nebyl ověřen v SolidWorks. Zapsaný výstup CadCraftu se kontroluje jen po stránce struktury. Výsledek před použitím ověřte.
:::

## Odeslání výkresu jako skicy

1. Vázejte a kótujte výkres (viz [Vázání výkresu](topic:constraints)).
2. Ve skupině {{ui:Parametrické}} otevřete {{ui:Více}} a zvolte {{ui:Makro pro SolidWorks (.swb)}}, nebo napište {{cmd:SWBOUT}}.

   Stáhne se soubor pojmenovaný podle výkresu, s příponou `.swb`.
3. V SolidWorks zvolte **Tools > Macro > Run** a vyberte tento soubor.

Makro vytvoří nový díl ze své výchozí šablony dílu, otevře skicu na rovině Front Plane a nakreslí do ní úsečky, kružnice, oblouky, body a mnohočáry modelu, s:

- vašimi vazbami jako vztahy skicy,
- vašimi kótovými vazbami jako kótami se stejnými názvy (`d1@Sketch1`),
- vašimi vlastními parametry jako globálními proměnnými,
- každým výrazem jako rovnicí.

Díl používá délkovou jednotku výkresu. Text, bloky, šrafy, kóty a listy nejsou součástí skicy; historie vypíše, co bylo vynecháno. Výrazy, které nemají tvar rovnice (`if`, `min`, `max`, `round`, `%` a několik dalších), se zapíšou jako aktuální hodnota a historie uvede, které to jsou. Cokoli, co makro nedokáže vytvořit, se zapíše do logovacího souboru vedle makra a na konci shrnuje zpráva.

## Otevření skici z dílu

1. V SolidWorks spusťte na díle exportní makro CadCraftu (stáhněte je v aplikaci PartCraft: Soubor > Export > Makro pro přenos dílů zpět). Vedle dílu zapíše soubor `.json` ve formátu `cadcraft-sw-export`.
2. V CadCraftu zvolte {{ui:Otevřít}} a vyberte tento soubor `.json`.
3. Pokud má díl několik skic, vyberte jednu.

Skica se stane výkresem v milimetrech: její úsečky, oblouky, kružnice a body, její vztahy jako vazby, její kóty jako kótové vazby se zachovanými názvy (`D1`, `D2` …), její globální proměnné jako parametry a rovnice na jejích kótách jako výrazy. Historie uvede, co se nepřeneslo, například vztahy, které CadCraft nemá. Umístění skicy v dílu se neuchovává: je nakreslena plochou, tak jak je vidět v její rovině.
