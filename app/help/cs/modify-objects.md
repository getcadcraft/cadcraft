---
title: Přesunout, kopírovat, otočit, měřítko, zrcadlit, natáhnout a pole
summary: Rozmístěte nábytek v místnosti pomocí základních příkazů pro úpravy, základních bodů, zadaných vzdáleností a zpětného kroku.
keywords: přesunout, kopírovat, otočit, měřítko, zrcadlit, natáhnout, pole, spojit, matchprop, shodné vlastnosti, malíř formátu, arrayrect, arraypolar, polární pole, smazat, rozložit, zpět, znovu, základní bod, posunutí, upravit, zarovnat, seřadit, rozmístit rovnoměrně
from: 8eaeee6c
---

## Co vytvoříte

Stůl s jednou židlí, která se zkopíruje kolem stolu, otočí, zrcadlí a změní velikost. Přitom použijete {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} a {{cmd:UNDO}}.

## Nakreslete díly

1. Napište `REC` a stiskněte {{key:Enter}}, napište `0,0` a stiskněte {{key:Enter}}, pak napište `@1800,900` a stiskněte {{key:Enter}}. Toto je stůl.
2. Napište `REC` a stiskněte {{key:Enter}}, napište `300,-700` a stiskněte {{key:Enter}}, pak napište `@450,450` a stiskněte {{key:Enter}}. Toto je židle pod stolem.
3. Klikněte na {{ui:Rozsah}}.

## Přesun: základní bod, pak druhý bod

Každý přesun, kopie, otočení a změna měřítka začíná u **základního bodu**: bodu, který se přenáší, nebo kolem něhož se otáčí.

1. Klikněte na židli a vyberte ji.
2. Napište `M` a stiskněte {{key:Enter}}. V historii se objeví `1 objekt nalezen`.
3. U výzvy `Zadejte základní bod` přichyťte na levý horní roh židle (Koncový bod) a klikněte.
4. U výzvy `Zadejte druhý bod` napište `@0,200` a stiskněte {{key:Enter}}.

Židle se posune nahoru o 200, blíž ke stolu.

:::tip
U výzvy `Zadejte základní bod` napište `D` a zadáte posunutí: CadCraft pak zobrazí výzvu `Zadejte posunutí` a vy napíšete, o kolik vodorovně a nahoru, například `0,200` (znak `@` není potřeba).
:::

## Kopírování, kolikrát chcete

1. Klikněte na židli.
2. Napište `CO` a stiskněte {{key:Enter}}.
3. Přichyťte na levý dolní roh židle a klikněte jako na základní bod.
4. Napište `@600,0` a stiskněte {{key:Enter}}. Vznikne kopie 600 doprava.
5. Napište `@600,0` znovu a stiskněte {{key:Enter}}. Vznikne druhá kopie 1200 doprava od originálu.
6. Stiskněte {{key:Enter}} pro ukončení příkazu.

{{cmd:COPY}} pokračuje, dokud nestisknete {{key:Enter}}. Každá kopie je umístěna podle vzdálenosti od základního bodu k bodu, který zadáte. Bod se znakem `@` počítá od posledního zadaného bodu, což je po první kopii bod této kopie, takže dvojí `@600,0` dá kopie v 600 a 1200. Napište `U` a stiskněte {{key:Enter}}, pokud chcete vzít zpět poslední kopii, aniž opustíte příkaz.

Vidíte tři židle v řadě pod stolem.

:::tip
{{cmd:COPY}} slouží ke kopiím uvnitř jednoho výkresu, umístěným podle základního bodu. Chcete-li objekty přenést do jiného výkresu nebo karty, nebo je vložit později, použijte schránku: {{key:Mod+C}}, pak {{key:Mod+V}}. {{key:Mod+D}} vytvoří jednu kopii, která se pohybuje s ukazovátkem. Viz [Kopírovat, vložit a duplikovat](topic:copy-paste).
:::

## Zrcadlení řady na druhou stranu

1. Přetáhněte křížové okno (zprava doleva) přes tři židle, aniž se dotknete stolu.
2. Napište `MI` a stiskněte {{key:Enter}}.
3. U výzvy `Zadejte první bod osy zrcadlení` přichyťte na střední bod levé strany stolu a klikněte.
4. U výzvy `Zadejte druhý bod osy zrcadlení` přichyťte na střední bod pravé strany stolu a klikněte.
5. U výzvy `Smazat zdrojové objekty? [Ano (Y)/Ne (N)] <N>` stiskněte {{key:Enter}}, aby zůstaly.

Vidíte tři židle pod stolem a tři zrcadlené židle nad ním. Text ve zrcadleném výběru zůstane čitelný: je umístěn zrcadlově, ale nepíše se pozpátku.

## Otočení židle

1. Klikněte na nejpravější židli pod stolem.
2. Napište `RO` a stiskněte {{key:Enter}}.
3. Přichyťte na pravý dolní roh židle a klikněte jako na základní bod.
4. Napište `90` a stiskněte {{key:Enter}}.

Židle se otočí o 90 stupňů proti směru hodinových ručiček kolem základního bodu. Záporný úhel otáčí po směru hodinových ručiček. Místo psaní můžete kliknout na druhý bod: úhel se měří od základního bodu k tomuto bodu.

## Změna měřítka stolu

1. Vyberte stůl.
2. Napište `SC` a stiskněte {{key:Enter}}.
3. Přichyťte na levý dolní roh stolu a klikněte jako na základní bod.
4. Napište `1.2` a stiskněte {{key:Enter}}.

Stůl je o 20 % větší a roste od základního bodu. Činitel menší než 1 jej zmenší.

:::note
Pokud místo zadání činitele měřítka kliknete na bod, činitelem je vzdálenost od základního bodu k tomuto bodu. Kliknutí o jednu jednotku výkresu daleko dá činitel 1. Obvykle chcete číslo napsat.
:::

## Zpět a znovu

- {{key:Mod+Z}}, tlačítko {{ui:Zpět}}, nebo `U` a {{key:Enter}} vrátí zpět poslední příkaz. Celý příkaz je jeden krok: vrácení {{cmd:COPY}}, který vytvořil pět kopií, odstraní všech pět.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, tlačítko {{ui:Znovu}}, nebo `REDO` jej vrátí zpět.
- V historii je vidět, co bylo vráceno ("Vráceno: COPY").

CadCraft uchovává posledních 500 kroků. Nastavení vrstev (zapnutí, zamrazení, zamčení, barva) je nastavení, nikoli úprava, a nevrací se.

## Natažení místnosti do šířky

{{cmd:STRETCH}} (`S`, nebo {{ui:Natáhnout}}) přesune jen to, co leží uvnitř křížového okna: rohy a konce čar uvnitř se posunou, vše ostatní zůstane na místě, takže se místnost rozšíří místo toho, aby se celá přesunula.

1. Napište `S` a stiskněte {{key:Enter}}.
2. Přetáhněte okno zprava doleva přes pravou stěnu, aby zahrnulo rohy stěny a konce všeho, co do ní zasahuje.
3. Stiskněte {{key:Enter}}.
4. Klikněte na základní bod, pak napište `@600,0` a stiskněte {{key:Enter}}.

Obdélník je o 600 širší; čáry, které končily na stěně, na ní stále končí. Oblouk s jedním koncem uvnitř si zachová výšku, kružnice a text se posunou, pokud je jejich střed nebo bod vložení uvnitř, a kóta změří svou novou délku. Objekty vybrané jeden po druhém bez okna se prostě přesunou.

Výběr můžete provést i předem: přetáhněte křížové okno (nebo křížové lasso) přes stěnu, když neběží žádný příkaz, a pak napište `S`. {{cmd:STRETCH}} převezme tento výběr a natáhne to, co leží v jeho oknech, stejně jako byste je přetáhli při jeho vlastní výzvě.

## Pole: řady a sloupce, nebo kolem středu

{{cmd:ARRAY}} (`AR`, nebo {{ui:Pole}}) zkopíruje výběr do mřížky nebo do kruhu.

1. Vyberte židli, napište `AR` a stiskněte {{key:Enter}}. Stiskněte {{key:Enter}} pro Obdélníkové (R).
2. Zobrazí se náhled 4 sloupců a 3 řádků. Napište `COU`, stiskněte {{key:Enter}}, pak `5` pro sloupce a `2` pro řádky.
3. Napište `S`, stiskněte {{key:Enter}}, pak `600` mezi sloupci a `-900` mezi řádky (záporné hodnoty jdou dolů).
4. Stiskněte {{key:Enter}} pro vytvoření kopií.

Pro kruh židlí kolem stolu zvolte `PO` (Polární), klikněte na střed stolu a nastavte `I` (Položky), `F` (Úhel výplně: 360 pro celé kolem, 180 pro polovinu) a `ROT` (zda se kopie otočí k středu). {{cmd:ARRAYRECT}} a {{cmd:ARRAYPOLAR}} tuto otázku přeskočí.

## Spojení kusů do jedné mnohočáry

{{cmd:JOIN}} (`J`, nebo {{ui:Úpravy}} › {{ui:Více}} › {{ui:Spojit}}): vyberte úsečky, oblouky a otevřené mnohočáry, jejichž konce se stýkají, a stiskněte {{key:Enter}}. Vzniknou z nich jedna mnohočára, uzavřená, pokud tvoří celý obvod, kterou pak lze odsadit najednou. Úsečky ležící na jedné přímce se stanou jednou úsečkou, i když mezi nimi jsou mezery; oblouky jedné kružnice se stanou jedním obloukem, nebo kružnicí.

## Shodné vlastnosti

{{cmd:MATCHPROP}} (`MA`, nebo {{ui:Úpravy}} › {{ui:Více}} › {{ui:Shodné vlastnosti}}): klikněte na objekt, jehož vzhled chcete, pak vyberte objekty, které se mají změnit, a stiskněte {{key:Enter}}. Převezmou jeho vrstvu a barvu; text převezme jeho výšku, kóta své velikosti, šrafa svůj vzor. U druhé otázky napište `S` (Nastavení), abyste kterékoli z nich vypnuli.

## Zarovnání objektů

**Podle bodů.** {{cmd:ALIGN}} (`AL`, nebo {{ui:Úpravy}} › {{ui:Více}} › {{ui:Zarovnat}}): vyberte objekty a stiskněte {{key:Enter}}, pak klikněte na bod na nich (zdroj) a na místo, kam má přijít (cíl).

- Jeden pár je přesune. Stiskněte {{key:Enter}} u výzvy `Zadejte druhý zdrojový bod`, aby se zastavilo.
- Dva páry je také otočí tak, že čára mezi dvěma zdrojovými body leží podél čáry mezi dvěma cílovými body. CadCraft pak zobrazí `Změnit měřítko objektů podle bodů zarovnání?`: `Y` je také zvětší, nebo zmenší o stejný poměr.
- Třetí pár je zrcadlí, pokud jsou jeho dva body na opačných stranách této čáry.

**Hrany a rozestupy.** {{ui:Úpravy}} › {{ui:Více}} › {{ui:Zarovnat a rozdělit}} (nebo `ALIGNPANEL`) otevře malý panel nad výkresem. Vyberte objekty, pak:

- v {{ui:Zarovnat na}} zvolte, podle čeho se má zarovnávat (celý výběr, první nebo poslední vybraný objekt, nebo bod, na který kliknete), a klikněte na {{ui:Vlevo}}, {{ui:Střed}}, {{ui:Vpravo}}, {{ui:Shora}}, {{ui:Uprostřed}} nebo {{ui:Zdola}};
- nebo zvolte {{ui:Stejné mezery}} nebo {{ui:Stejné středy}} a klikněte na {{ui:Vodorovně}} nebo {{ui:Svisle}}: dva krajní objekty zůstanou, ostatní se rozmístí rovnoměrně mezi nimi (alespoň tři objekty).

Každé kliknutí je jeden krok zpět a výběr zůstane, takže můžete zkusit jiné zarovnání. Každý objekt se počítá podle svého ohraničujícího obdélníku v UCS, pokud je nastaven. Na příkazovém řádku totéž dělají {{cmd:ALIGNTO}} a {{cmd:DISTRIBUTE}}.

## Smazání a rozložení

- {{cmd:ERASE}} (`E`, nebo {{key:Delete}}) smaže vybrané objekty.
- {{cmd:EXPLODE}} (`X`) rozloží mnohočáru na úsečky a oblouky, odkaz na blok na jeho objekty a kótu na úsečky, šipky a text. Rozložené kóty už neměří samy sebe.

## Časté chyby

- **Zadání vzdálenosti bez `@` u druhého bodu.** `600,0` je absolutní bod 600,0, ne "600 doprava". Použijte `@600,0`, nebo holé `600` s křížkem ukazujícím správným směrem.
- **Otočení šlo opačným směrem.** Kladné úhly se otáčejí proti směru hodinových ručiček.
- **Zpět odstranil víc, než se čekalo.** Jedno vrácení vezme zpět celý poslední příkaz, včetně všech kopií, které vytvořil.
- **Příkaz se nezeptal na výběr objektů.** Objekty už byly vybrány, a proto je použil. Nejprve stiskněte {{key:Esc}}, aby se začínalo bez výběru.
