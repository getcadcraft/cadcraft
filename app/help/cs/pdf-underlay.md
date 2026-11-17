---
title: PDF podklady a import PDF
summary: Položte stránku PDF pod výkres, abyste ji mohli obtáhnout a vykreslit, nebo převeďte čáry a text stránky na objekty výkresu.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, podklad, obtáhnout, import pdf, sken, půdorys, ztlumení, oříznutí, vrstvy, přichytávání, otevřít pdf
from: aa301d0f
---

## Dva způsoby, jak vložit stránku PDF

- **Připojit** ({{cmd:PDFATTACH}}) ponechá PDF jako obrázek pod výkresem. Můžete ho obtahovat, přichytávat k jeho čarám, ztlumit a oříznout a vytiskne se spolu s listem. Výkres si ponechá jen název souboru.
- **Importovat** ({{cmd:PDFIMPORT}}) převede čáry, křivky, výplně a text stránky na běžné objekty výkresu, umístěné do vrstev pojmenovaných podle PDF. Můžete je upravovat a PDF pak není potřeba.

Otevření PDF pomocí {{ui:Otevřít}} se zeptá, který z obou způsobů chcete.

## Připojit stránku

1. Napište `PDFATTACH` (nebo `PDFATT`) a vyberte PDF. Má-li více stran, napište číslo strany.
2. Klikněte na vkládací bod (levý dolní roh stránky).
3. Stiskněte {{key:Enter}} pro skutečnou velikost stránky, nebo napište měřítko: jednotky výkresu na jeden bod PDF (bod má 1/72 palce, takže v milimetrovém výkresu je to 0.3528).
4. Stiskněte {{key:Enter}} pro žádné otočení, nebo napište úhel.

Stránka je objekt podobný odkazu na blok: můžete ji přesunout, otočit, změnit měřítko, kopírovat, smazat a dát na vrstvu. Vypnete-li její vrstvu, zmizí. Přiblížíte-li, stránka se znovu vykreslí ostře.

## Obtáhnout ji

Při zapnutém {{ui:Přichytávání}} se kurzor přichytává k vlastním čarám PDF: koncovým bodům, středům a průsečíkům (a k {{ui:Nejbližší}}, je-li toto přichytávání zapnuté). Text psaný jako písmena na stránce se nepřichytává.

## Upravit ji

- `PDFADJUST`: **Ztlumení** (0 až 80 procent), **Kontrast** (0 až 100), **Jednobarevně** a **Zap/vyp** pro skrytí bez smazání.
- `PDFCLIP`: zobrazí jen obdélník nebo mnohoúhelník stránky; **Smazat** odstraní oříznutí.
- `PDFLAYERS`: PDF může mít vlastní vrstvy. Příkaz je vypíše; napište číslo a přepnete zapnutí nebo vypnutí té vrstvy pro tento podklad. Vrstvy, které soubor má vypnuté, začnou vypnuté.

## Vykreslit a uložit

PLOT vykreslí stránku jako její čáry, výplně a text (zůstane ostrá a prohledávatelná). Obrázky uvnitř PDF se zobrazí na obrazovce, ale zatím se netisknou.

DWG nebo DXF 2000 uchová podklad jako odkaz: název souboru, stránku, umístění, měřítko, otočení, oříznutí, ztlumení a kontrast. Samotné PDF ve výkresu není. Otevřete výkres znovu, napište `PDF` a vyberte soubor znovu; stránky se do té doby zobrazují jako rámečky a skutečnou velikost získají až tehdy. Starší DXF (R12) podklady nemá: uchová rámeček a název. Jak jiné programy čtou uložené oříznutí a měřítko, zatím nebylo ověřeno.

## Importovat stránku

1. Napište `PDFIMPORT` (nebo `PDFIM`) a vyberte PDF a stránku.
2. Klikněte, kam má přijít levý dolní roh stránky.
3. Stiskněte {{key:Enter}} pro skutečnou velikost, napište měřítko, nebo zvolte **Dva body**: stránka se nakreslí ve skutečné velikosti, pak klepnete na dva body o známé vzdálenosti a napíšete skutečnou vzdálenost; vše se podle ní přepočítá.

Čáry se stanou čárami a mnohočárami, kružnice a oblouky se rozpoznají, vyplněné tvary se stanou plnými šrafami a text se stane textem ve vrstvě končící na `-TEXT`. Je to jeden krok zpět. Obrázky v PDF se neimportují: připojte stránku. Sken (stránka, která je jen obrázek) nemá čáry k importu.

PDF se čtou jako nedůvěryhodné soubory: nespouští se žádné skripty a příliš velká stránka se zkrátí, o čemž je hlášení.
