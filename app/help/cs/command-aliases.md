---
title: Úprava zkratek příkazů
summary: Uchovávejte vlastní zkratky příkazů v jednom textovém souboru ve známém formátu, importujte a exportujte soubor .pgp a načtěte jej znovu příkazem REINIT.
keywords: zkratka, zkratky, aliasedit, pgp, klávesová zkratka, krátký název, reinit, klávesnice, přizpůsobit, upravit zkratky
from: 6ab6fa0e
---

## Co se naučíte

Jak přidat vlastní krátké názvy příkazů, například `LL` pro {{cmd:LINE}}, vše v jednom textovém souboru.

## Přidání zkratky

1. Otevřete {{ui:Pohled}} › {{ui:Více}} › {{ui:Upravit zkratky…}}, nebo napište {{cmd:ALIASEDIT}} a stiskněte {{key:Enter}}.
2. Přidejte řádek se zkratkou, čárkou a příkazem za hvězdičkou:

```
LL,     *LINE
```

3. Klikněte na {{ui:Uložit}}. Příkazový řádek řekne, kolik vašich zkratek je v použití.
4. Napište `LL` a stiskněte {{key:Enter}}: spustí se LINE.

Vaše zkratky leží nad zkratkami CadCraftu. Váš řádek vyhraje nad vestavěnou zkratkou se stejným názvem; odstraníte-li svůj řádek, vestavěná zkratka se vrátí.

## Řádky, které CadCraft odmítne

Editor vypíše každý problém s číslem řádku, jak píšete:

- příkaz neexistuje;
- zkratka je sama názvem příkazu (`LINE, *CIRCLE` by skryl LINE);
- řádek není ve tvaru `ZKRATKA, *PŘÍKAZ`;
- stejná zkratka je na dvou řádcích (pozdější vyhraje).

Řádky, které spouštějí program ve vašem počítači, například `NOTEPAD, START, 1, *File to edit: ,`, se přeskočí s poznámkou: aplikace v prohlížeči programy spouštět nemůže.

## Převzetí zkratek z jiného programu

1. V editoru zkratek klikněte na {{ui:Importovat .pgp…}} a vyberte soubor. Můžete také přetáhnout soubor `.pgp` na výkres.
2. Zkontrolujte vypsané problémy (příkazy, které CadCraft nemá, se odmítnou, zbytek funguje).
3. Klikněte na {{ui:Uložit}}.

{{ui:Exportovat .pgp}} uloží zkratky CadCraftu i vaše jako jeden soubor ve stejném formátu.

## Znovu načtení souboru

Napište {{cmd:REINIT}} a stiskněte {{key:Enter}}, aby se soubor se zkratkami znovu použil. Je uložen v tomto prohlížeči; desktopová aplikace jej bude uchovávat ve své vlastní složce a cloudová služba jej bude synchronizovat.

## Klávesové zkratky pro libovolný příkaz

Zkratka je napsaná; klávesová zkratka je klávesa. Chcete-li přiřadit příkazu vlastní klávesu:

1. Klikněte na {{ui:Pohled}} › {{ui:Více}} › {{ui:Klávesové zkratky…}}, nebo napište `KEYS` a stiskněte {{key:Enter}}.
2. Klikněte do pole {{ui:Klávesa}} a stiskněte klávesy, například {{key:Alt+Shift+C}}.
3. Do pole {{ui:Spustí}} napište příkaz a případně to, co se má napsat za ním: `CIRCLE`, nebo `ZOOM E`.
4. Klikněte na {{ui:Přidat}}.

Klávesa potřebuje {{key:Mod}} nebo {{key:Alt}} s písmenem nebo číslicí, nebo volnou funkční klávesu ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Klávesy, které už používá CadCraft, aplikace nebo prohlížeč, a klávesy, které má tlačítko Vlastní nástroje (viz [Vlastní tlačítka](topic:my-tools)), se odmítnou a pole vysvětlí proč. Zkratky se uchovávají v tomto prohlížeči (nebo v desktopové aplikaci); {{ui:Odebrat}} jednu odebere.
