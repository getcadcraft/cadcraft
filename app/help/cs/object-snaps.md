---
title: Přichytávání k bodům na objektech
summary: Použijte uchopení na objekty, Ortogonální a mřížku k přesnému výběru koncových bodů, středů, průsečíků a kolmic myší.
keywords: osnap, uchopení na objekty, koncový bod, střed úsečky, střed, průsečík, kolmice, kvadrant, nejbližší, uzel, vložení, ortogonální, mřížka, f3, f8, f7, polární sledování, polární, polarang, sledování uchopení, otrack, sledování, f10, f11
from: 3cf17f94
---

## Co vytvoříte

Obdélník se dvěma úhlopříčkami, kružnice se středem tam, kde se protínají, a úsečka od středu jedné strany kolmo na kružnici. Každý bod se vybírá myší a každý bod je přesný.

## Jak funguje přichytávání

Když příkaz žádá bod, CadCraft hledá body přichycení v okruhu asi 10 pixelů od kříže. Když jeden najde, objeví se značka a popisek („Koncový bod“, „Průsečík“) a kliknutí dopadne **přesně** na tento bod, ne tam, kde je kříž.

Přichycení je zapnuté, když je ve stavovém řádku stisknuto {{ui:Přichytávání}}. {{key:F3}} je zapíná a vypíná.

Přichycení, která můžete použít, jsou:

| Přichycení | Dopadne na |
|---|---|
| Koncový bod | Konce úseček, oblouků a segmentů mnohočáry |
| Střed úsečky | Střed úseček, oblouků a segmentů mnohočáry |
| Střed | Střed kružnic a oblouků a obloukových segmentů mnohočáry |
| Kvadrant | Body 0, 90, 180 a 270 stupňů kružnic a oblouků |
| Průsečík | Místo, kde se dva objekty protínají |
| Kolmice | Bod na objektu kolmo k poslednímu bodu (potřebuje základní bod) |
| Tečna | Bod na kružnici nebo oblouku, kde se přímka od posledního bodu právě dotýká. Když ještě není poslední bod (první bod úsečky), značka říká „odloženo“: bod dotyku se určí, až bude znám další bod, takže úsečka od tečny k tečně se dotýká obou kružnic |
| Nejbližší | Nejbližší bod na libovolném objektu |
| Uzel | Objekty bodů |
| Vložení | Vkládací bod textu a odkazů na bloky |

Všechna jsou ve výchozím stavu zapnutá kromě Tečny a Nejbližšího. Nejbližší má tendenci vyhrát, když chcete něco jiného; zapněte Tečnu, když ji potřebujete.

## Výběr přichycení

1. Klikněte na malou šipku vedle {{ui:Přichytávání}} ve stavovém řádku. Otevře se seznam {{ui:Uchopení na objekty}}.
2. Zaškrtněte nebo odškrtněte přichycení. Změny platí hned.
3. Šipkou seznam zavřete kliknutím znovu.

CadCraft si zapamatuje vaši volbu a nastavení {{ui:Mřížka}}, {{ui:Ortogonální}} a {{ui:Přichytávání}} v tomto prohlížeči.

## Postup

1. Napište `REC` a stiskněte {{key:Enter}}.
2. Napište `0,0` a stiskněte {{key:Enter}}.
3. Napište `@4000,3000` a stiskněte {{key:Enter}}. Objeví se obdélník.
4. Klikněte na {{ui:Rozsah}}.
5. Napište `L` a stiskněte {{key:Enter}}.
6. Přesuňte kříž na levý dolní roh. Značka ukazuje „Koncový bod“. Klikněte.
7. Přesuňte se na pravý horní roh, dokud se neukáže „Koncový bod“. Klikněte.
8. Stiskněte {{key:Enter}}, čímž ukončíte úsečku.
9. Stiskněte {{key:Enter}} znovu, aby se opakoval {{cmd:LINE}}, a stejným způsobem nakreslete druhou úhlopříčku od pravého dolního rohu k levému hornímu.
10. Napište `C` a stiskněte {{key:Enter}}, abyste zahájili kružnici.
11. Přesuňte kříž tam, kde se úhlopříčky kříží. Značka ukazuje „Průsečík“. Klikněte.
12. Napište `800` a stiskněte {{key:Enter}}.

Měli byste vidět kružnici se středem přesně na průsečíku.

13. Napište `L` a stiskněte {{key:Enter}}.
14. Přesuňte se na střed levé strany obdélníku, dokud se neukáže „Střed úsečky“. Klikněte.
15. Přesuňte kříž na kružnici, na její levou stranu. Značka ukazuje „Kolmice“ nebo „Kvadrant“; zde jsou to stejný bod. Klikněte.
16. Stiskněte {{key:Enter}}.

Nová úsečka vede od středu levé strany a zastaví se přesně na kružnici.

## Přeskočení přichycení pro jedno kliknutí

Podržte {{key:Shift}} při kliknutí. Uchopení na objekty se pro toto kliknutí ignoruje a bod jde přesně tam, kde je kříž (nebo ve směru {{ui:Ortogonální}}, je-li zapnutý).

## Ortogonální

{{ui:Ortogonální}} ({{key:F8}}) udržuje další bod přímo napříč nebo přímo nahoru a dolů od základního bodu. Platí pro kliknutí i pro přímé zadání vzdálenosti (samotné číslo napsané na výzvě). Uchopení na objekty má přednost před Ortogonálním: když se ukáže značka přichycení, kliknutí jde na přichycení.

## Polární sledování

{{ui:Polární}} ({{key:F10}}) je Ortogonální pro více úhlů. Když má příkaz základní bod (poslední bod úsečky, základní bod přesunu), ukazatel se srovná, kdykoli se přiblíží k paprsku z něj v násobku polárního kroku: ukáže se tečkovaná čára a popisek u kříže čte `Polární: 1200 < 30°`. Klikněte pro použití tohoto bodu, nebo napište vzdálenost: `1200` půjde přesně 1200 po paprsku.

Krok je 90° , dokud ho nezměníte: napište {{cmd:POLARANG}}, stiskněte {{key:Enter}} a napište `30` (nebo 45, 22.5, 15 …). Polární a Ortogonální se vylučují: zapnutí jednoho vypne druhý.

## Sledování uchopení na objekty

{{ui:Sledování}} ({{key:F11}}) srovnává ukazatel s body přichycení, na kterých jste se zastavili, takže můžete vybrat bod ve stejné výšce s jedním rohem a nad jiným bez kreslení pomocných čar.

1. Zapněte {{ui:Přichytávání}} a {{ui:Sledování}} a spusťte příkaz, který žádá bod (`L`).
2. Zastavte ukazatel na bodu přichycení, například na rohu, na půl sekundy, bez kliknutí. Malý křížek ho označí: je zachycen. Znovu na něm zastavte, abyste jej uvolnili.
3. Hned od něj pohněte ukazatelem rovně, vodorovně nebo svisle. Tečkovaná čára sleduje ukazatel a popisek ukazuje `Sledování: 600 < 90°`. Klikněte, nebo napište vzdálenost.
4. Zachyťte druhý bod a přesuňte se tam, kde se svislá přímka jedním bodem setká s vodorovnou přímkou druhého: ukazatel se přichytí na ten průsečík (`Sledování: kde se setkají dvě čáry`).

Když je zapnuté i {{ui:Polární}}, zachycené body se sledují v každém polárním úhlu. Uchová se až sedm bodů, dokud příkaz neskončí. {{key:Shift}} vypne sledování pro jedno kliknutí, stejně jako přichycení.

## Mřížka

{{ui:Mřížka}} ({{key:F7}}) ukazuje mřížku čar za výkresem, s tlustšími čarami každou pátou čárou; rozteč se mění při zoomu. Je to jen vodítko, dokud nezapnete {{ui:Přichycení na mřížku}} ({{key:F9}}): pak kliknutí dopadnou na nejbližší bod mřížky, pokud bod dříve nevezme uchopení na objekty.

## Funkční klávesy na vašem počítači

{{key:F9}} je {{ui:Přichycení na mřížku}}, {{key:F10}} je {{ui:Polární}} a {{key:F11}} je {{ui:Sledování}}.

:::mac
Na Macu F3, F7, F8 a F9 obvykle ovládají Mission Control a média. Podržte **fn** společně s klávesou, nebo zapněte standardní funkční klávesy, jak je popsáno v [Klávesy, myši a trackpady](common:keys). Tlačítka ve stavovém řádku fungují vždy.
:::

:::firefox
Ve Firefoxu je F7 také klávesa pro procházení s kurzorem. Pokud se Firefox zeptá, zda zapnout procházení s kurzorem, zvolte **Ne**. Pokud se otázka stále vrací, použijte tlačítko {{ui:Mřížka}}.
:::

:::touch
Na dotykové obrazovce není najetí, takže značka přichycení se ukáže jen tam, kde se dotknete prstem. U malých cílů přibližte, nebo místo toho napište souřadnice.
:::

## Časté chyby

- **Kliknutí šlo na špatný bod.** Před kliknutím se podívejte na popisek značky: Koncový bod má přednost před Středem úsečky, když jsou oba blízko. Přibližte, nebo odškrtněte přichycení, která nepotřebujete.
- **Žádná značka se neobjeví.** {{ui:Přichytávání}} je vypnuto, nebo požadované přichycení je odškrtnuto, nebo je objekt na vrstvě, která je vypnutá nebo zamrazená.
- **Přichycení zachytí špatnou věc v přeplněném výkresu.** Přibližte. Vzdálenost přichycení se měří v pixelech obrazovky, takže přiblížení ji na výkresu zmenší.
- **Očekávání, že Shift dá rovnou čáru.** V CadCraftu Shift vypíná přichycení pro jedno kliknutí. Pro rovné čáry použijte {{ui:Ortogonální}}.
- **Očekávání, že body dopadnou na body mřížky.** Zapněte {{ui:Přichycení na mřížku}} ({{key:F9}}), nebo pro kulatá čísla napište souřadnice.
