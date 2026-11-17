---
title: Výběr objektů
summary: Vyberte objekty jednotlivě, oknem nebo křížením, před příkazem nebo během něj, a vyjměte objekty z výběru.
keywords: vybrat, výběr, okno, křížení, nejprve výběr, nejprve příkaz, vše, poslední, předchozí, plot, odebrat, přidat, tab, cyklovat, překrývající se, qselect, rychlý výběr, filtr, vybrat podobné, selectsimilar, shift, zrušit výběr, ctrl+a, pickfirst
from: 676508c7
---

## Co se naučíte

Jak vybrat objekty, na které příkaz působí. CadCraft má dva způsoby práce a oba jsou v pořádku:

- **Nejprve výběr, pak příkaz.** Vyberte objekty, pak napište `M` (přesunout). Příkaz vezme váš výběr a jde rovnou na další otázku.
- **Nejprve příkaz, pak výběr.** Napište `M`; příkaz se zeptá `Vyberte objekty:`; vyberte a stiskněte {{key:Enter}}.

## Vybrat objekty po jednom

1. Když žádný příkaz neběží, klikněte na čáru. Je zvýrazněna a zobrazí se její úchyty (malé čtverečky). Pravý panel ukazuje její vlastnosti.
2. Klikněte na jiný objekt. Přidá se do výběru.
3. Podržte {{key:Shift}} a klikněte na vybraný objekt. Vyjme se z výběru.
4. Stiskněte {{key:Esc}}. Nic není vybráno.

## Okno a křížení

Klikněte jednou na prázdné místo, pohněte a klikněte znovu: vznikne obdélník. Stisknutí a tažení nakreslí místo toho volné lasso, se stejnými dvěma typy (viz [Výběr lassem](topic:lasso-selection); v Nastavení lze nastavit, aby tažení kreslilo obdélník). Který objekty dostanete, závisí na směru:

| Pohybujete | Rámeček | Vybere |
|---|---|---|
| Zleva doprava | Okno | Jen objekty **zcela uvnitř** rámečku |
| Zprava doleva | Křížení | Objekty uvnitř rámečku **a** objekty, kterých se rámeček dotýká |

1. Nakreslete několik překrývajících se čar a kružnic.
2. Klikněte na prázdné místo vlevo od některých objektů, pohněte doprava a klikněte znovu. Vyberou se jen objekty, které jsou celé uvnitř.
3. Stiskněte {{key:Esc}}.
4. Klikněte na prázdné místo vpravo, pohněte doleva přes některé objekty a klikněte znovu. Vybere se vše, čeho se rámeček dotkne.
5. Podržte {{key:Shift}} a nakreslete rámeček nebo lasso přes některé vybrané objekty. Vyjdou z výběru.

## Výběr, pak spuštění příkazu

1. Vyberte dvě kružnice.
2. Napište `M` a stiskněte {{key:Enter}}.

Historie napíše `Nalezeno: 2` a výzva jde rovnou na `Zadejte základní bod`. Dokončete přesun (viz [Přesun, kopírování, otočení, měřítko a zrcadlení](topic:modify-objects)).

Až příkaz skončí, výběr se zruší, takže další příkaz začne od začátku.

Příkazy, které takto berou výběr: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} a {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} a {{cmd:CHAMFER}} vždy žádají, abyste objekty vybírali po jednom; {{cmd:TRIM}} a {{cmd:EXTEND}} berou klik nebo cestu, kterou přetáhnete přes kusy (viz [Oříznout a prodloužit](topic:trim-and-extend)).

## Spuštění příkazu, pak výběr

1. Ujistěte se, že nic není vybráno ({{key:Esc}}).
2. Napište `E` a stiskněte {{key:Enter}}. Výzva zní `Vyberte objekty:`.
3. Klikejte na objekty, nebo tahejte okna a křížení. Historie počítá každý výběr (`Nalezeno: 1`, `Nalezeno: 3`).
4. Stiskněte {{key:Enter}}, {{key:Space}} nebo klikněte pravým tlačítkem a výběr dokončete.

Objekty se smažou a historie napíše, kolik jich bylo.

Na výzvu `Vyberte objekty:` můžete také napsat:

- `ALL`, pak {{key:Enter}}: každý objekt, který lze na otevřené kartě upravit.
- Poslední (`L`), nebo `LAST`, pak {{key:Enter}}: naposledy nakreslený objekt.
- Předchozí (`P`): objekty, na kterých pracoval poslední příkaz, pokud tam ještě jsou.
- Plot (`F`): klikněte nebo napište body podél čáry; přidá se každý objekt, který čára protíná. Ukončete plot stisknutím {{key:Enter}}; `U` vezme zpět jeho poslední bod.
- Okno (`W`), nebo Křížení (`C`): dva rohy, podle toho, kterým směrem táhnete.
- Odebrat (`R`): od této chvíle kliky, okna a ploty berou objekty **ven**. Výzva zní `Odebrat objekty:`. Přidat (`A`) přepne zpět.
- `?`: seznam těchto možností v historii.

Tyto možnosti se ve výzvě nezobrazují, jako v AutoCADu.

## Výběr jednoho z několika objektů nad sebou

Kde se objekty překrývají nebo dotýkají, klik vezme nejbližší. Chcete-li jiný:

1. Držte kurzor nehybně nad místem.
2. Stiskněte {{key:Tab}}. Další objekt na tomto místě se zvýrazní a stavový řádek řekne, který to je („2 z 3: Čára na vrstvě Walls“).
3. Stiskněte {{key:Tab}} znovu, dokud není zvýrazněn ten správný, a pak klikněte, aniž byste pohnuli.

Pohyb kurzoru začne znovu. Funguje to bez běžícího příkazu, na výzvě `Vyberte objekty:` i všude tam, kde příkaz žádá výběr jednoho objektu.

## Výběr podle pravidla: Rychlý výběr

{{cmd:QSELECT}} (`QS`, nebo {{ui:Úpravy}} › {{ui:Více}} › {{ui:Rychlý výběr}}) vybere každý objekt, který odpovídá pravidlu, například každou kružnici s poloměrem menším než 50, nebo každý odkaz na blok nazvaný DOOR-900.

1. Otevřete {{ui:Rychlý výběr}}.
2. Zvolte {{ui:Typ objektu}} (seznam počítá každý typ), pak {{ui:Vlastnost}}: {{ui:Vrstva}}, {{ui:Barva}}, a u některých typů {{ui:Délka}}, {{ui:Poloměr}}, {{ui:Plocha}}, {{ui:Výška textu}}, {{ui:Obsah textu}}, {{ui:Název bloku}} nebo {{ui:Vzor šrafy}}.
3. Zvolte {{ui:Operátor}} a {{ui:Hodnota}}. `*` odpovídá zástupným znakům (`DOOR-*`); {{ui:Vybrat vše}} vezme každý objekt daného typu. Počet dole ukazuje, kolik objektů odpovídá, když volíte.
4. {{ui:Způsob použití}}: zahrnout odpovídající, nebo všechno ostatní. {{ui:Použít na}} {{ui:Aktuální výběr}} zúží to, co jste vybrali; {{ui:Připojit k aktuálnímu výběru}} přidá k němu.
5. Klikněte na {{ui:Vybrat}}. Pak spusťte příkaz, který chcete: použije výběr.

## Vybrat podobné

Vyberte jeden nebo více objektů a napište {{cmd:SELECTSIMILAR}} (`SIM`), nebo zvolte {{ui:Úpravy}} › {{ui:Více}} › {{ui:Vybrat podobné}}. Vybere se každý objekt stejného typu na stejné vrstvě a se stejnou barvou; odkazy na bloky potřebují také stejný blok, šrafy stejný vzor. Napište `SE` na jeho výzvu `Vyberte objekty`, abyste zvolili, co musí odpovídat.

## Vybrat teď, použít později

Napište `SELECT` a stiskněte {{key:Enter}}, vyberte objekty kterýmkoli ze způsobů výše a stiskněte {{key:Enter}}. Zůstanou vybrané pro další příkaz a `P` je vybere znovu na další výzvě `Vyberte objekty:`.

## Vybrat vše

Když žádný příkaz neběží, stiskněte {{key:Mod+A}}, nebo zvolte {{ui:Vybrat vše}} v nabídce {{ui:Úpravy}} › {{ui:Více}} na panelu nástrojů, a vyberete každý objekt, který lze na otevřené kartě upravit. Pokud jste něco napsali na příkazový řádek, {{key:Mod+A}} vybere tento text: nejprve stiskněte {{key:Esc}}, aby se vymazal. Na výzvě `Vyberte objekty:` napište `ALL`. {{ui:Zrušit výběr}} ve stejné nabídce, nebo {{key:Esc}}, výběr zruší.

:::tip
Chcete-li, aby každé kliknutí nahradilo výběr (a {{key:Shift}} přidával), nastavte {{ui:Klikání na objekty}} na {{ui:Nahrazuje výběr}} v [nastavení CadCraftu](topic:settings).
:::

## Co nejde vybrat

- Objekty na vrstvě, která je **vypnutá**, **zamrazená** nebo **uzamčená**. Uzamčené objekty zůstávají viditelné a můžete na ně přichytit, ale nelze je vybrat ani změnit.
- Na kartě listu model zobrazený uvnitř výřezu. Vyberete vlastní objekty listu (razítko, poznámky, rámečky výřezů). Chcete-li upravit model, přejděte na kartu {{ui:Model}}.

## Rychlé smazání

Vyberte objekty a stiskněte {{key:Delete}} (nebo {{key:Backspace}}, když kurzor není na příkazovém řádku). Na klávesnici Mac funguje klávesa označená delete, jakmile kliknete do výkresu; zatímco má kurzor příkazový řádek, stiskněte společně fn a delete. Spustí se {{cmd:ERASE}} nad výběrem. Pokud se nic nestane, něco jste napsali na příkazový řádek: stiskněte {{key:Esc}}, nebo místo toho napište `E` a stiskněte {{key:Enter}}.

## Časté chyby

- **Okno vzalo příliš málo.** Táhli jste zleva doprava, což bere jen to, co je celé uvnitř. Pro křížení táhněte zprava doleva.
- **Klik na prázdné místo začal rámeček.** Jeden klik na prázdné místo spustí okno; druhý klik ho dokončí. Stiskněte {{key:Esc}}, nebo klikněte pravým tlačítkem, a zahoďte jej.
- **Klik na prázdné místo uvolnil výběr.** Stane se to, pokud nedržíte {{key:Shift}}. Chcete-li výběr při takovém kliknutí zachovat a zrušit jej jen {{key:Esc}}, nastavte {{ui:Kliknutí na prázdné místo}} na {{ui:Ponechá výběr}} v [nastavení CadCraftu](topic:settings#clicking-an-empty-spot).
- **Příkaz použil objekty, které jste nechtěli.** Něco bylo ještě vybráno, když jste jej spustili. Před příkazem stiskněte {{key:Esc}}, abyste začali s ničím vybraným.
- **Po příkazu nic není vybráno.** To je záměrně: dokončený příkaz výběr zruší.
