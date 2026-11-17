---
title: Klávesnice a myš
summary: Každá klávesa, akce myši a klávesa příkazového řádku v kreslicí aplikaci CadCraft, tak, jak je kód zpracovává.
keywords: klávesnice, zkratky, klávesy, myš, kolečko, posun, zoom, pravé tlačítko, prostřední tlačítko, f3, f7, f8, ctrl, klávesa příkazu, klávesové zkratky, kopírovat, vyjmout, vložit, duplikovat, schránka, vybrat vše
from: a2608a29
---

Zkratky jsou zobrazeny pro váš počítač. Na Macu používají všechny zkratky {{key:Mod}} klávesu Command, funguje i Control. Jak se klávesy zapisují a jak používat klávesy F na Macu, je v [Klávesy, myši a touchpady](common:keys).

## Psaní příkazů

| Klávesa | Co dělá |
|---|---|
| Libovolné písmeno, číslice nebo znak | Jde na příkazový řádek, ať je ukazatel kdekoli, pokud v panelu nemá kurzor pole |
| {{key:Enter}} | Odešle, co jste napsali. Na prázdné výzvě: zopakuje poslední příkaz, ukončí příkaz, dokončí výběr, nebo potvrdí výchozí hodnotu v `<…>` |
| {{key:Space}} | Totéž co {{key:Enter}}, kromě chvíle, kdy CadCraft žádá text (text, názvy bloků, text kóty), kde vloží mezeru |
| {{key:Esc}} | Zruší příkaz. Když žádný příkaz neběží: zruší přesun úchytu nebo výběrový rámeček a pak zruší výběr |
| {{key:Tab}} | Přijme navrhovaný příkaz zobrazený napravo od příkazového řádku. Když nic nenapíšete a ukazatel je nad překrývajícími se objekty: zvýrazní další z nich (kliknutím ho vyberete) |
| {{key:Up}} {{key:Down}} | Prochází řádky, které jste zadali dříve (posledních 100) |

## Kreslení a úpravy

| Klávesa | Co dělá |
|---|---|
| {{key:Mod+Z}} | Vrátí zpět poslední příkaz |
| {{key:Mod+Y}} nebo {{key:Mod+Shift+Z}} | Znovu |
| {{key:Mod+A}} | Vybere každý objekt, který lze na otevřené kartě upravit ({{cmd:SELECTALL}}). Pokud jste něco napsali na příkazový řádek, vybere tento text |
| {{key:Delete}} | Smaže vybrané objekty ({{cmd:ERASE}}), pokud jste na příkazový řádek nic nenapsali |
| {{key:Backspace}} | Smaže vybrané objekty, když příkazový řádek nemá kurzor; na příkazovém řádku smaže, co jste napsali |
| {{key:Esc}} | Když žádný příkaz neběží: zruší výběr ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Uloží kopii ve formátu výkresu (DWG nebo DXF) |
| {{key:Mod+Shift+S}} | Uložit jako: vyberte DWG nebo DXF a uložte kopii |
| {{key:Mod+O}} | Otevře DWG nebo DXF |
| {{key:Mod+P}} | Vykreslí do PDF |

Zpět, znovu, vybrat vše a vykreslení nic nedělají, dokud běží příkaz: nejprve stiskněte {{key:Esc}}.

## Kopírování, vyjmutí a vložení

| Klávesa | Co dělá |
|---|---|
| {{key:Mod+C}} | Zkopíruje výběr do schránky ({{cmd:COPYCLIP}}). Nic nevybráno: CadCraft požádá o objekty |
| {{key:Mod+X}} | Vyjmout: zkopíruje výběr a pak ho smaže ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Vložit: kopie se pohybuje za kurzorem; klikněte, nebo zadejte bod, a umístěte ji ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | Vložit na stejné místo: na souřadnice, odkud byla zkopírována ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Duplikovat: kopie výběru se pohybuje s ukazatelem; klikněte pro umístění, {{key:Esc}} nezanechá nic ({{cmd:DUPLICATE}}) |

Stejné akce jsou ve skupině {{ui:Úpravy}} panelu nástrojů ({{ui:Kopírovat}}, {{ui:Vložit}}) a v nabídce {{ui:Více}}. Dokud běží jiný příkaz, dokončete ho, nebo nejprve stiskněte {{key:Esc}}; stisknutí {{key:Mod+V}} nebo {{key:Mod+D}} znovu, dokud se kopie pohybuje za kurzorem, začne znovu. Když jste něco napsali na příkazový řádek, nebo příkaz žádá text, tyto klávesy kopírují, vyjímají a vkládají právě tento text. Viz [Kopírování, vložení a duplikování](topic:copy-paste).

## Přepínače

| Klávesa | Přepínač | Tlačítko stavového řádku |
|---|---|---|
| {{key:F3}} | Přichytávání objektů zapnuto nebo vypnuto | {{ui:Přichytávání}} |
| {{key:F7}} | Mřížka zapnuta nebo vypnuta | {{ui:Mřížka}} |
| {{key:F8}} | Ortogonální režim zapnut nebo vypnut | {{ui:Ortogonální}} |
| {{key:F10}} | Polární sledování zapnuto nebo vypnuto | {{ui:Polární}} |
| {{key:F11}} | Sledování přichytávání objektů zapnuto nebo vypnuto | {{ui:Sledování}} |
| {{key:F12}} | Dynamické zadávání zapnuto nebo vypnuto | {{ui:Dyn}} |

:::mac
Na Macu jsou F3, F7 a F8 obvykle klávesy Mission Control a médií. Podržte s nimi **fn**, nebo zapněte standardní funkční klávesy v Nastavení systému, jak je popsáno v [Klávesy, myši a touchpady](common:keys). Tlačítka ve stavovém řádku fungují vždy.
:::

:::firefox
F7 ve Firefoxu může také nabídnout zapnutí procházení pomocí kurzoru. Zvolte **Ne** a pokud se to bude opakovat, použijte tlačítko {{ui:Mřížka}}.
:::

## Nápověda

| Klávesa | Co dělá |
|---|---|
| {{key:F1}} | Otevře nebo zavře tuto nápovědu vedle výkresu. Funguje i při běžícím příkazu a nikdy se nedostane na příkazový řádek. |
| {{key:Esc}} | Když je kurzor v panelu nápovědy: vymaže hledání, nebo panel zavře |

Tlačítko {{ui:Nápověda}} v liště nahoře dělá totéž co {{key:F1}}. Dokud píšete do pole hledání v nápovědě, nic se nedostane na příkazový řádek. Klikněte na výkres, aby klávesy patřily zase CadCraftu; panel zůstane otevřený vedle něj.

:::mac
Na klávesnici Macu podržte **fn** a stiskněte F1, nebo klikněte na {{ui:Nápověda}}.
:::

## Obrazovka

| Klávesa | Co dělá |
|---|---|
| {{key:Ctrl+Shift+F}} | Přepíná mezi normálním režimem, celou obrazovkou a celou obrazovkou se skrytými lištami. Na každém počítači včetně Macu se používá klávesa Control. |
| {{key:Left}} {{key:Right}} | Když je pod výkresem zaměřena karta: předchozí nebo další karta |

Při celé obrazovce může prohlížeč první {{key:Esc}} použít k ukončení celé obrazovky. Pro zrušení příkazu stiskněte {{key:Esc}} znovu.

## Dialogy

| Klávesa | Co dělá |
|---|---|
| {{key:Esc}} | Zavře dialog ({{ui:Vykreslit do PDF}}, nebo dotaz typu "Neuložené změny", kde znamená {{ui:Zrušit}}) |
| {{key:Tab}} | Přesune mezi nastaveními a tlačítky dialogu |

Dokud je dialog otevřený, klávesy výkresu jsou vypnuty.

## Pole v panelech

V poli pravého nebo levého panelu:

| Klávesa | Co dělá |
|---|---|
| {{key:Enter}} | Použije hodnotu a opustí pole |
| {{key:Esc}} | Vrátí původní hodnotu a opustí pole |
| {{key:Tab}} | Použije hodnotu a přejde na další pole |

Dokud má pole kurzor, písmena píšou do něj, ne na příkazový řádek.

## Myš

| Akce | Co dělá |
|---|---|
| Klik | Vybere bod, když příkaz žádá bod; vybere objekt, když žádá objekty; jinak vybere objekt, nebo úchyt |
| Shift+klik | Odebere vybraný objekt z výběru (pokud je {{ui:Klikání na objekty}} nastaveno na {{ui:Nahrazuje výběr}} v [Nastavení](topic:settings): přidá jej). Při výběru bodu: pro tento klik ignoruje přichytávání objektů |
| Klik na prázdné místo, pak znovu klik | Výběrový rámeček: zleva doprava je okno, zprava doleva křížení |
| Tažení po prázdném místě | Lasso: pohyb nejprve doprava je okno, nejprve doleva křížení; {{key:Space}} během tažení přepíná okno, křížení a plot; {{key:Esc}} ho zruší (LASSOMODE 0 nebo Nastavení jej vrátí na obdélník) |
| Tažení přes části v TRIM nebo EXTEND | Ořízne (nebo prodlouží) každou část, kterou dráha protne; pro druhý režim držte {{key:Shift}} |
| Tažení úchytu | Přesune úchyt (nebo klikněte na úchyt a pak klikněte, kam má jít) |
| Dvojklik na text | Vybere ho a dá kurzor do jeho pole {{ui:Text}} v pravém panelu |
| Pravé tlačítko | Enter. Během přesunu úchytu nebo výběrového rámečku: zruší ho |
| Tažení pravým tlačítkem | Posouvá |
| Kolečko | Přibližuje a oddaluje kolem kurzoru |
| Tažení kolečkem (prostřední tlačítko) | Posouvá |
| Dvojklik na kolečko | Přiblíží na celý výkres (rozsah) |
| Přetažení DWG nebo DXF na výkres | Otevře ho |

Na touchpadu nebo dotykové obrazovce viz [Myš, touchpad a dotyk](topic:mouse-trackpad-touch).

## Klávesy, které si ponechává prohlížeč

{{key:Mod+N}}, {{key:Mod+W}} a {{key:Mod+T}} vždy patří prohlížeči. CadCraft je nepoužívá: pro nový výkres použijte {{ui:Nová}} nebo napište `NEW`. Schránka CadCraftu je vlastní: {{key:Mod+C}} a {{key:Mod+V}} kopírují objekty mezi výkresy a kartami CadCraftu, ne do jiných programů nebo z nich.

:::mac
Pokud {{key:Mod+Y}} místo znovu otevře historii prohlížeče, použijte {{key:Mod+Shift+Z}} nebo tlačítko {{ui:Znovu}}.
:::

## Kde je Posun

Posun je příkaz `MOVE` (klávesa {{key:M}}): vyberte objekty, pak základní bod a druhý bod, nebo zadejte vzdálenost. `ALIGN` a `DISTRIBUTE` jsou tu také. BimCraft používá stejné názvy pro stejné úkoly u stavebních prvků, ale jeho {{key:M}} je Měření: jeho Posun je {{key:Shift+M}}.
