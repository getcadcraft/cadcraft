---
title: "Výchozí zásady: nastavte, s čím začíná nový výkres"
summary: Jednou určete, s jakými jednotkami, formátem délek, přesností, výškou textu a papírem listu začíná nový výkres, pro metrickou i imperiální práci, a sdílejte zásady v kanceláři jako malý soubor.
keywords: výchozí, výchozí zásady, zásada, kancelářský standard, kancelářské výchozí hodnoty, šablona, nový výkres, jednotky, insunits, formát délek, stavební, přesnost, luprec, výška textu, papír listu, a1, sdílet, export, import, json
from: 7b80fd13
---

## Co uděláte

Řekněte CadCraftu, s čím má začínat nový výkres, aby nikdo v kanceláři nemusel pokaždé spouštět UNITS a měnit totéž. Je to doplněk: je vypnutý, dokud ho nezapnete, a zásada, kterou nenastavíte, zůstane přesně na výchozím nastavení samotného CadCraftu.

:::note
Jsou to výchozí hodnoty pro **nové** výkresy a **nové** listy. Výkres, který jste už začali, se nemění, ani se nemění výkres, který otevřete.
:::

## Postup

1. Otevřete Nastavení, přejděte na {{ui:Doplňky}} a zapněte {{ui:Výchozí zásady}}.
2. V Nastavení otevřete kartu **CadCraft** a vyberte {{ui:Výchozí zásady}} v seznamu vlevo.
3. Nastavte zásady, které chcete. Každá začíná na **výchozím nastavení CadCraftu**. Zásada s polem **Metric** a polem **Imperial** má jednu hodnotu pro každý druh výkresu; vyplňte jen ta pole, která potřebujete.
4. Tlačítko Uložit neexistuje: každá změna se uloží, jakmile ji uděláte.
5. Začněte nový výkres. Bude mít jednotky, formát délek, přesnost a výšku textu, které jste nastavili, a jeho první nový list bude na papíru, který jste zvolili.

## Zásady

- **Jednotky nového výkresu**: žádné, milimetry, centimetry, metry, palce nebo stopy.
- **Formát délek** a **Přesnost délek**: co nastavuje příkaz UNITS, pro nový výkres.
- **Výška nového textu**, v jednotkách výkresu.
- **Papír nového listu**: papír, který použije Nový list.
- **Velikosti anotací na papíru** (Nastavení › Globální › Výchozí zásady): výšky kanceláře v milimetrech, jak se tisknou. CadCraft používá tu pro poznámky a popisky: {{cmd:ANNOSCALE}} nastaví výšku, se kterou začíná nový text, na tuto výšku při měřítku anotace. Viz [Jednotky, papíry a měřítka](topic:units-papers-scales#annotate-by-scale).

Výkres v palcích nebo stopách používá imperiální hodnoty; každý jiný výkres používá metrické. Výkres bez jednotek používá soustavu jednotek nastavenou v Nastavení › Globální › Výchozí zásady, nebo metrickou, pokud žádná není nastavena.

## Sdílení v kanceláři

1. V Nastavení otevřete kartu **Globální** a vyberte {{ui:Výchozí zásady}}.
2. Klikněte na {{ui:Uložit do souboru}}. Dostanete malý soubor končící na `.ccdefaults.json`.
3. Na jiném počítači zapněte doplněk, otevřete totéž místo a klikněte na {{ui:Načíst ze souboru}}. Zásady ze souboru nahradí ty na tomto počítači.

Jeden soubor obsahuje zásady všech aplikací CadCraftu, takže stejný soubor funguje i v BimCraftu.

## Dobré vědět

- Neexistuje zásada pro měřítko listu: pohled nového listu se přizpůsobí výkresu a měřítko nastavíte na samotném listu.
- Neexistuje zásada pro styl kót: nový výkres nemá pojmenované styly kót. Kóty nastavte pomocí DIMSTYLE, nebo začněte z výkresu, který ho má.
- Soubor je prostý, otevřitelný JSON. Zásada, kterou soubor uvádí a tato verze nezná, se vynechá a uvede se v hlášení; zbytek se načte.
- Zásady se uchovávají v tomto prohlížeči, ne ve výkresu. Vypnete-li doplněk, vše je zase výchozí nastavení CadCraftu.
