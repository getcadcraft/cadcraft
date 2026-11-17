---
title: Sloučení úprav jednoho výkresu od dvou lidí
summary: Nechte git, Fossil nebo Mercurial sloučit dvě kopie DWG nebo DXF objekt po objektu pomocí klíče, který CadCraft drží u každého objektu.
keywords: sloučení, git, fossil, mercurial, správa verzí, rozdíl, konflikt, třícestné, cadcraft sloučení, klíč, gitattributes, DWG, DXF
from: 71482bf9
---

Dva lidé upravují stejný výkres. Pokud změnili různé objekty, sloučení může proběhnout automaticky: nic nemusíte dělat ručně.

## Co to umožňuje

CadCraft dává každému objektu, který nakreslíte, krátký **klíč**, který se nikdy nemění a nikdy nedostane dva objekty. Uloží se s objektem do DWG nebo DXF (jako dodatečná data, která ostatní programy uchovají). Sloučení vyhledává objekty podle tohoto klíče, ne podle jejich pozice v souboru, protože každý program při ukládání pozice přečísluje. Vypněte to v {{ui:Nastavení}} › CadCraft › Soubory vhodné pro sloučení, pokud nikdy nesloučíte; soubory jsou asi o 10 procent menší.

Výkres uložený dříve, než klíče existovaly, se sloučí také: jeho objekty dostanou klíč podle místa v souboru, stejný pro každého, kdo ho otevře.

## Nastavení

Git potřebuje jednou pro repozitář dva řádky:

```
# .gitattributes
*.dwg merge=cadcraft
*.dxf merge=cadcraft

# jednorázově, na každém počítači
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez gitu jej spusťte ručně: `cadcraft merge <base> <ours> <theirs> -o <result>`. Fossil a Mercurial berou tyto tři soubory stejně, v nastavení svého nástroje pro sloučení.

## Pravidla

- Objekt změněný jen na jedné straně se převezme. Stejná změna na obou stranách se převezme jednou.
- Stejná vlastnost změněná dvěma způsoby je **konflikt**: zůstane vaše strana a hlášení uvede obě hodnoty. Otevřete výsledek, podívejte se na ten objekt a opravte ho ručně.
- Objekt přidaný na kterékoli straně se zachová. Objekt odstraněný na jedné straně a nedotčený na druhé se odstraní. Odstraněný na jedné straně a změněný na druhé: odstraněn a nahlášen.
- Vrstvy, bloky, text a styly kót, listy a pojmenované pohledy se sloučí stejně. Vazby sledují objekty, na které odkazují.
- Výsledek se zapíše ve stejném formátu a verzi souboru jako váš.

Nesloučí se: pořadí, v jakém jsou objekty nakresleny, zůstává vaše, a následují objekty přidané druhou stranou. Změny téže definice bloku na obou stranách jsou konflikt, nikdy se nesmísí. Nic se nenahrává; vše běží na vašem počítači.
