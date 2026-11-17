---
title: Otevřít DWG, upravit jej a uložit kopii
summary: Otevřete výkres, který vám někdo poslal, zkontrolujte, co se načetlo, proveďte změnu a pošlete zpět kopii jako DWG nebo DXF.
keywords: dwg, dxf, otevřít, import, export, uložit, r12, přenos tam a zpět, konzultant, xref, kontrola výkresu, saveas, uložit jako, uložení dwg, formát
from: 49de4bf6
---

## Co uděláte

Otevřete DWG od konzultanta, zkontrolujte, co CadCraft mohl a nemohl zobrazit, přidejte poznámku, vykreslete list do PDF a uložte kopii k odeslání zpět jako DWG nebo DXF.

## Otevřít soubor

1. Stiskněte {{key:Mod+O}}, nebo klikněte na {{ui:Otevřít}}.
2. Vyberte soubor `.dwg`.

Stavový řádek zobrazí "Načítání …", dokud se výkres čte. Po dokončení výkres vyplní obrazovku a historie napíše například "Otevřen plan.dwg: 18,240 objektů na 64 vrstvách" a uvede, jak dlouho to trvalo.

:::offline
Jste offline. Pokud tlačítko {{ui:Uložit pro offline}} ukazuje "Připraveno offline", soubory DWG se otevírají normálně. Pokud ne a v této kartě ještě nebyl otevřen žádný DWG, otevření DWG může selhat, protože čtečka DWG CadCraftu se stahuje s prvním DWG: otevřete místo toho DXF, nebo příště uložte CadCraft pro offline použití, až budete online. Viz [Práce offline](common:offline).
:::

## Zkontrolujte, co přišlo

1. Podívejte se na sekci {{ui:Výkres}} v levém panelu: formát a verzi, jednotky, počet objektů a vrstev a listy.
2. Přečtěte si pole "O tomto souboru" pod ní, pokud tam je.

Pole vypisuje:

- **Zatím nezobrazeno:** objekty, které CadCraft zatím nedokáže nakreslit, podle druhu a počtu. Jsou vynechány, ne odhadovány.
- **Listy (layouty) přišly:** otevřete je pomocí karet pod výkresem.
- **Kóty, které šlo přečíst jen tak, jak jsou nakresleny.**

3. Proklikejte karty pod výkresem a prohlédněte si každý list.
4. Zkontrolujte {{ui:Jednotky}} v {{ui:Aktuální nastavení}} (nic není vybráno, karta {{ui:Model}}). Pokud je tam {{ui:Bez jednotek}}, ale víte, že výkres je v milimetrech, nastavte je, aby měřítka listu a výtisku byla správná.

:::tip
Pokud očekáváte část výkresu a nevidíte ji, zkontrolujte panel {{ui:Vrstvy}}: vrstva může být v souboru vypnutá nebo zamrazená. Kliknutím na její název ji nastavíte jako aktuální; to ji zapne.
:::

## Proveďte změnu

1. Vytvořte vrstvu pro poznámky: klikněte na {{ui:Nová vrstva}}, napište `NOTES` a stiskněte {{key:Enter}}.
2. Napište `DT` a stiskněte {{key:Enter}}.
3. Klikněte, kam poznámka patří.
4. Napište výšku textu, která se hodí k výkresu (viz [Přidat text a popisky](topic:text)), a stiskněte {{key:Enter}}.
5. Stiskněte {{key:Enter}}, aby se natočení ponechalo na 0.
6. Napište poznámku a stiskněte {{key:Enter}}.
7. Pro dokončení stiskněte {{key:Enter}} znovu.

Úpravy importovaných kót jsou v pořádku: jakmile některou změníte, CadCraft ji překreslí v jeho vlastním stylu.

## Vykreslit list k posouzení

1. Klikněte na kartu listu.
2. Stiskněte {{key:Mod+P}}.
3. Klikněte na {{ui:Stáhnout PDF}}.

Viz [Vykreslení do PDF](topic:plot-pdf).

## Uložit kopii

1. Stiskněte {{key:Mod+S}}, nebo klikněte na {{ui:Uložit}}.

Otevřeli jste DWG, takže prohlížeč stáhne `<název>.dwg` ve verzi, ve které DWG přišel. Historie napíše například "Uložena kopie jako Plan.dwg (DWG (AutoCAD 2018))." a na řádcích pod ní vypíše vše, co se na cestě změnilo.

2. Přečtěte si tyto řádky, než soubor odešlete. [Co DWG uchovává a co mění](topic:files#what-a-dwg-keeps-and-changes) vysvětluje každý z nich.

Váš původní DWG se nikdy nemění. Každé uložení je nové stažení.

## Uložit jako DWG nebo DXF

Chcete-li formát vybrat sami:

1. Stiskněte {{key:Mod+Shift+S}}, nebo klikněte na {{ui:Uložit jako}}.

Dialog {{ui:Uložit kopii jako}} se otevře se čtyřmi volbami, každá s názvem souboru, který vytvoří: {{ui:DWG}} se seznamem {{ui:Verze}}, {{ui:DXF R12}}, {{ui:DXF 2000}} a {{ui:DXF 2000 (binary)}}. Aktuální formát a verze výkresu jsou už vybrány.

2. Klikněte na formát, který chcete. U DWG vyberte verzi, kterou používá druhá kancelář, nebo starší: AutoCAD 2018, 2013, 2010, 2007, 2004 nebo 2000.
3. Klikněte na {{ui:Uložit}}.

Kopie se stáhne. Od této chvíle {{key:Mod+S}} ukládá tento výkres v tomto formátu a nové výkresy v něm také začínají, v tomto prohlížeči. {{ui:Zrušit}} nebo {{key:Esc}} nic neuloží a historie napíše "Neuloženo."

Které zvolit:

- **DWG** uchovává nejvíce: listy s jejich výřezy, skutečné kóty, vzory šraf, názvy vrstev a bloků tak, jak jste je napsali, a víceřádkový text jako víceřádkový. Verze AutoCAD 2000 se otevře v nejvíce programech; 2004 a novější uchovávají i pravé barvy.
- **DXF 2000** je textový soubor, který uchovává téměř vše, co DWG: každý list jako layout s jeho výřezy, skutečné kóty, vzory šraf, pravé barvy, tloušťky čar, typy čar a názvy tak, jak jste je napsali. Otevře se v AutoCADu 2000 a novějším a ve většině CAD programů. Víceúrovňové výnosky se změní na čáry, hroty šipek a text, které kreslí. DXF otevřený ve verzi 2000 nebo novější se ukládá jako DXF 2000.
- **DXF 2000 (binary)** obsahuje stejný obsah jako DXF 2000 v binárním tvaru formátu: menší soubor, který uchovává každé číslo přesně. Binární DXF z jiných programů se otevírají jako textové a výkres otevřený z binárního DXF se ukládá zpět jako binární.
- **DXF R12** se otevře téměř v jakémkoli CAD programu. Uchovává první list s jeho výřezy a další listy CadCraftu. Zjednodušuje novější věci, jako víceřádkový text a šrafy.

## Co uvidí druhá kancelář

V DWG:

- Čáry, oblouky, kružnice, elipsy, mnohočáry, text, víceřádkový text, bloky s jejich atributy, plné výplně, vzory šraf a vrstvy tak, jak je vidíte.
- Skutečné kóty: jiný program je při natažení přeměří.
- Každý list s jeho papírem a výřezy.
- Víceúrovňové výnosky jako víceúrovňové výnosky. Ve verzi AutoCAD 2000 se pravé barvy změní na nejbližší standardní barvu.

V DXF R12:

- Čáry, oblouky, kružnice, mnohočáry, text, odkazy na bloky a kóty tak, jak je vidíte. Kóty zůstávají skutečnými kótami.
- Názvy vrstev velkými písmeny, mezery nahrazeny `_`.
- První list jako prostor papíru výkresu s jeho výřezy. Další listy přijdou jako bloky pojmenované `CCLAYOUT_1` a tak dále; pokud potřebují každý list jako layout, pošlete jim také PDF každého listu.
- Víceřádkový text jako samostatné řádky, elipsy jako mnohočáry, šrafy jako obrysy.

V obou případech: cokoli uvedeného jako "Zatím nezobrazeno", když jste DWG otevřeli, **není** v kopii, pokud historie neuvádí, že bylo zachováno. OLE objekty DWG a jeho 3D tělesa v prostoru modelu se zapisují zpět při uložení jako DWG. Řekněte to jim a pošlete také PDF.

## Časté chyby

- **"CadCraft otevírá výkresy DWG a DXF."** Soubor má jinou příponu. Ověřte, že je to `.dwg` nebo `.dxf`.
- **"Tento výkres nelze načíst."** DWG je poškozený nebo ve verzi, kterou čtečka nezvládne. Požádejte o DXF, nebo o DWG uložený v starší verzi.
- **"Tento binární DXF končí uprostřed objektu."** Soubor je useknutý nebo poškozený. Napište RECOVER, aby se otevřelo, co lze přečíst, nebo si vyžádejte soubor znovu.
- **Uložený soubor se jmenuje `name (1).dwg` nebo `name (1).dxf`.** Prohlížeč to udělá, když už ve složce je soubor se stejným názvem.
- **Mají starší program, který nemůže otevřít DWG.** Uložte jako DWG s {{ui:Verze}} {{ui:AutoCAD 2000}}, nebo jako {{ui:DXF R12}}: téměř jakýkoli CAD program jej otevře.
- **Chybí části výkresu.** Propojené výkresy (xrefs) se nenačtou, dokud nevyberete jejich soubory ({{cmd:XREF}}, `R`), a obrázky se zobrazí jako rámečky s názvy souborů.
