---
title: Nastavení listu s razítkem a výřezy
summary: Vytvořte list (rozvržení) s ohraničením a razítkem, nastavte měřítko výřezu, přidejte druhý výřez pro detail a vyplňte razítko.
keywords: rozvržení, list, prostor papíru, výřez, mview, vpview, razítko, měřítko, formát papíru, ohraničení, vports, měřítko tisku, mspace, pspace, prostor modelu, vstup do výřezu, dvojklik na výřez
from: 45a45de8
---

## Co vytvoříte

List A3 s razítkem, celý půdorys v jednom výřezu v měřítku 1:100 a druhý výřez zobrazující jeden roh v měřítku 1:20.

## Model a listy

Budovu kreslíte na kartě {{ui:Model}} v plné velikosti: stěna 6 m je v milimetrech dlouhá 6000 jednotek. **List** (rozvržení) je kus papíru, měřený v milimetrech nebo palcích. **Výřez** je okno vyříznuté do listu, které zobrazuje model v měřítku.

## Než začnete

1. Otevřete nebo nakreslete půdorys na kartě {{ui:Model}}.
2. Stiskněte {{key:Esc}}, aby nic nebylo vybráno.
3. V {{ui:Aktuální nastavení}} nastavte {{ui:Jednotky}} na jednotku, ve které jste kreslili, například {{ui:Milimetry}}.

Jednotky jsou důležité: měřítko výřezu jako 1:100 znamená, že jeden milimetr na papíře zobrazuje 100 skutečných milimetrů, takže CadCraft potřebuje vědět, co je jedna jednotka výkresu. Výkres ponechaný jako {{ui:Bez jednotek}} se bere jako v jednotce papíru (milimetry na papíru ISO, palce na papíru US).

## Vytvoření listu

1. Klikněte na tlačítko {{ui:+}} vpravo od karet pod výkresem, nebo napište `LAYOUT` a stiskněte {{key:Enter}}, nebo klikněte na {{ui:Nový list}}.

Otevře se nová karta `Layout1`. Měli byste vidět list na tmavším stole: ohraničení, razítko v pravém dolním rohu a nad ním jeden výřez, který zobrazuje celý model v největším standardním měřítku, které se vejde. Historie pojmenuje papír: ISO A3 pro metrické výkresy a výkresy bez jednotek, Tabloid (ANSI B) pro výkresy v palcích nebo stopách.

2. Klikněte na {{ui:Rozsah}}, aby se list vešel na obrazovku.

## Výběr papíru

1. Stiskněte {{key:Esc}}, aby nic nebylo vybráno. Nadpis pravého panelu zní „List: Layout1“.
2. V {{ui:Název}} napište `A-101 Plan` a stiskněte {{key:Enter}}. Karta se přejmenuje.
3. V {{ui:Papír}} vyberte formát.
4. V {{ui:Orientace}} vyberte {{ui:Na šířku}} nebo {{ui:Na výšku}}.

:::warning
Změna papíru nepřesune ani nezmění velikost toho, co už je na listu. Po změně zkontrolujte, zda se ohraničení, razítko a výřez stále vejdou, a přesuňte je nebo změňte jejich velikost úchyty. Přepnutí mezi papírem v milimetrech a palcích ponechá čísla, takže se všechno změní velikost: stavový řádek vás upozorní.
:::

## Nastavení měřítka výřezu

1. Klikněte na rámeček výřezu (jeho okraj). Nadpis panelu zní „Výřez“.
2. V {{ui:Měřítko (S)}} vyberte `1:100`.

Model uvnitř výřezu se překreslí v měřítku 1:100, vycentrovaný tam, kde byl. Seznam nabízí metrická měřítka od 10:1 do 1:10000; výkresy v palcích nebo stopách dostanou také stavební měřítka (1/4" = 1'-0" a podobná) a inženýrská měřítka (1" = 20' a podobná). {{ui:Přizpůsobit celý model}} nastaví přesné, nestandardní měřítko, které se vejde na všechno.

3. Pokud už není půdorys vycentrovaný, změňte {{ui:X}} a {{ui:Y}} v části {{ui:Střed pohledu (model)}} v pravém panelu: jsou to bod modelu uprostřed výřezu.

## Zobrazení části modelu ve výřezu

1. S vybraným výřezem klikněte v pravém panelu na {{ui:Vybrat okno na modelu…}} (nebo napište `VPVIEW` a stiskněte {{key:Enter}}).
2. CadCraft přepne na kartu {{ui:Model}}. Klikněte na jeden roh oblasti, která se má zobrazit.
3. Klikněte na opačný roh.

Jste zpět na listu a výřez zobrazuje tuto oblast v největším standardním měřítku, které se vejde; historie uvede které. {{ui:Zobrazit celý model}} vrátí celý půdorys ve standardním měřítku.

## Přidání druhého výřezu pro detail

1. Vytvořte místo na listu: vyberte první výřez a přetažením rohového úchytu jej zmenšete.
2. Napište `MV` a stiskněte {{key:Enter}}, nebo klikněte na {{ui:Výřez}} ve skupině Listy.
3. Klikněte na jeden roh nového výřezu na listu.
4. Klikněte na opačný roh.

Nový výřez zobrazuje celý model. Historie uvede jeho měřítko.

5. Klikněte na rámeček nového výřezu.
6. Klikněte na {{ui:Vybrat okno na modelu…}} a vyberte malou oblast kolem jednoho rohu půdorysu.
7. V {{ui:Měřítko (S)}} vyberte `1:20`.

Rámečky výřezů jsou na vrstvě `Viewports`, která je nastavena jako netisknutelná, takže se rámečky ukazují na obrazovce, ale ne v PDF.

## Vyplnění razítka

Razítko je tvořeno obyčejnými čarami a textem na vrstvě `Title block`. Začíná názvem výkresu, měřítkem prvního výřezu, dnešním datem a číslem listu.

1. Dvojklikněte na velký nadpisový text. Otevře se editační pole nad ním.
2. Napište název listu.
3. Klikněte na {{ui:OK}}, nebo stiskněte {{key:Mod+Enter}}.

Stejně postupujte u ostatních polí. Pro zápis do prázdné buňky „DRAWN BY“ použijte {{cmd:TEXT}}. Text SCALE se sám neaktualizuje, když změníte měřítko výřezu: upravte jej ručně.

## Kreslení na listu

Cokoli nakreslíte na kartě listu, je na papíře, v jednotkách papíru: text výšky 3.5 je na listu ISO vysoký 3.5 mm. Poznámky, šipky severu a ohraničení listu patří sem.

Chcete-li změnit samotný půdorys, přejděte na kartu {{ui:Model}}, nebo pracujte přes výřez (další sekce); každý výřez zobrazí změnu.

## Práce s modelem přes výřez

1. Dvojklikněte uvnitř výřezu, mimo jeho rámeček. Nebo napište `MS` a stiskněte {{key:Enter}}: je-li na listu jeden výřez, vstoupíte rovnou; je-li jich více, klikněte uvnitř toho, který chcete.

Rámeček je kreslen silněji, historie uvede, že jste uvnitř, a karta listu zůstane vybraná. Vše, co teď nakreslíte nebo změníte, je v modelu, v jednotkách modelu, jako na kartě {{ui:Model}}: úsečka nakreslená uvnitř výřezu v měřítku 1:100 je ve skutečných milimetrech. Vrstvy zamrazené v tomto výřezu tu nelze vybrat.

2. Otáčejte kolečkem nebo tahejte prostředním tlačítkem, abyste přibližovali a posouvali, co výřez zobrazuje. List zůstane na místě.
3. Dvojklikněte kamkoli mimo rámeček, nebo napište `PS` a stiskněte {{key:Enter}}.

Jste zpět na listu. Výřez si zachová pohled, s nímž jste jej opustili; {{key:Mod+Z}} vrátí starý pohled jedním krokem. Kliknutí na kteroukoli kartu pod výkresem také výřez opustí.

:::note
Výřez, jehož zobrazení je uzamčeno ({{ui:Zobrazení uzamčeno}} ve {{ui:Vlastnosti}}), si zachová svůj pohled: uvnitř něj posun a zoom pohybují celým listem. Výřez, který je vypnutý, nelze otevřít.
:::

## Popisek pohledu jeho názvem

Název pohledu pod výřezem může zobrazovat název pohledu výřezu a sledovat jej:

1. Dejte pohledu název: vyberte rámeček výřezu a vyplňte {{ui:Název pohledu}} v {{ui:Vlastnosti}}; nebo uložte pohled na kartě {{ui:Model}} příkazem {{cmd:NAMEDVIEW}} a s vybraným výřezem napište `VPVIEW`, `V` a název pohledu: výřez zobrazí ten pohled a převezme jeho název.
2. Napište `VIEWLABEL` (`VL`) a stiskněte {{key:Enter}}, pak klikněte, kam popisek patří ({{key:Enter}} jej umístí pod levý dolní roh výřezu).

Když se název pohledu změní, popisek se změní s ním, ve stejném kroku zpět.

## Zamrazení vrstvy v jednom výřezu

Chcete-li skrýt vrstvu v jednom výřezu, ale ne v ostatních (například nábytek v detailu):

1. Vyberte rámeček výřezu, nebo pracujte uvnitř něj (dvojklikem).

Panel {{ui:Vrstvy}} dostane na každém řádku jedno tlačítko navíc a řádek nad seznamem to uvede.

2. Klikněte na to tlačítko na řádku vrstvy.

Vrstva zmizí jen v tomto výřezu. Kliknutím znovu ji odmrazíte; {{key:Mod+Z}} vrátí kterýkoli úkon. Pro více vrstev nebo výřezů najednou napište `VPLAYER`: `F` (zamrazit), nebo `T` (odmrazit), názvy vrstev (`A-*` vezme každou vrstvu začínající na A-), pak `C` (aktuální), `A` (vše), nebo `S` (vybrat). `VPLAYER` `V` (Vpvisdflt) vybere vrstvy, které nové výřezy začínají zamrzlé.

## Další listy

Každé {{ui:+}} přidá další list (`Layout2`, `Layout3` …) s dalším číslem listu. Chcete-li smazat otevřený list, stiskněte {{key:Esc}} a klikněte na {{ui:Smazat tento list}} v pravém panelu. Smaže se bez dotazu; {{key:Mod+Z}} jej vrátí.

Vykreslete list pomocí {{ui:Vykreslit tento list}} nebo {{key:Mod+P}}; viz [Vykreslení do PDF](topic:plot-pdf).

## Časté chyby

- **Výřez nic nezobrazuje.** Model je prázdný, nebo je pohled namířen jinam. Vyberte rámeček a klikněte na {{ui:Zobrazit celý model}}.
- **Seznam měřítek ukazuje jen poměry a žádná stopová a palcová měřítka.** Na kartě {{ui:Model}} nastavte {{ui:Jednotky}} na {{ui:Palce}} nebo {{ui:Stopy}}.
- **1:100 vypadá desetkrát příliš velké nebo malé.** Jednotky výkresu jsou špatně. Nastavte {{ui:Jednotky}} na to, čím jedna jednotka skutečně je.
- **Kliknutí na půdorys uvnitř výřezu nic nevybere.** Na listu vybíráte vlastní objekty listu. Nejprve dvojklikněte uvnitř výřezu, abyste na půdorysu pracovali přes něj.
- **Kliknutí mimo výřez nic nedělají.** Jste uvnitř výřezu: dvojklikněte mimo něj, nebo napište `PS`, abyste znovu pracovali na listu.
- **„Výřezy patří do rozvržení. Nejprve otevřete kartu rozvržení (nebo ji vytvořte příkazem LAYOUT).“** {{cmd:MVIEW}} funguje jen na kartě listu.
