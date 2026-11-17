---
title: Výber objektov
summary: Vyberajte objekty jeden po druhom, oknom alebo prekrížením, pred príkazom alebo počas neho, a odoberajte objekty z výberu.
keywords: výber, vybrať, okno, prekríženie, sloveso-podstatné meno, kliknúť, všetko, posledný, predchádzajúci, ohrada, odstrániť, pridať, tab, cyklovať, prekrývajúce sa, rýchly výber, filter, vybrať podobné, selectsimilar, shift, zrušiť výber, ctrl+a, pickfirst
from: 676508c7
---

## Čo sa naučíte

Ako vybrať objekty, na ktorých príkaz pracuje. CadCraft má dva spôsoby práce a oba sú v poriadku:

- **Najprv výber, potom príkaz** (podstatné meno-sloveso). Vyberte objekty, potom zadajte `M` pre Presunúť. Príkaz použije váš výber a hneď prejde na ďalšiu otázku.
- **Najprv príkaz, potom výber** (sloveso-podstatné meno). Zadajte `M`; príkaz sa spýta `Select objects:`; vyberte objekty a stlačte {{key:Enter}}.

## Výber jedného objektu naraz

1. Keď nebeží žiadny príkaz, kliknite na čiaru. Zvýrazní sa a objavia sa jej úchyty (malé štvorčeky). Pravý panel zobrazí jej vlastnosti.
2. Kliknite na ďalší objekt. Pridá sa do výberu.
3. Podržte {{key:Shift}} a kliknite na vybraný objekt. Odoberie sa z výberu.
4. Stlačte {{key:Esc}}. Nič nie je vybrané.

## Okno a prekríženie

Raz kliknite na prázdne miesto, pohnite sa a kliknite znova: vznikne obdĺžnik. Stlačenie a ťahanie kreslí namiesto toho voľné laso, s rovnakými dvoma druhmi (pozrite [Výber lasom](topic:lasso-selection); Nastavenia môžu nastaviť, aby ťahanie kreslilo obdĺžnik). Ktoré objekty dostanete, závisí od smeru:

| Pohybujete | Rámček | Vyberie |
|---|---|---|
| Zľava doprava | Okno | Len objekty **úplne vnútri** rámčeka |
| Sprava doľava | Prekríženie | Objekty vnútri rámčeka **a** objekty, ktorých sa dotýka |

1. Nakreslite niekoľko prekrývajúcich sa čiar a kružníc.
2. Kliknite na prázdne miesto naľavo od niektorých objektov, pohnite sa doprava a kliknite znova. Vyberú sa len objekty úplne vnútri.
3. Stlačte {{key:Esc}}.
4. Kliknite na prázdne miesto napravo, pohnite sa doľava cez niektoré objekty a kliknite znova. Vyberie sa všetko, čoho sa rámček dotkne.
5. Podržte {{key:Shift}} a nakreslite rámček alebo laso cez niektoré vybrané objekty. Odídu z výberu.

## Najprv výber, potom príkaz

1. Vyberte dve kružnice.
2. Zadajte `M` a stlačte {{key:Enter}}.

História hlási `2 found` a výzva prejde priamo na `Specify base point`. Dokončite presun (pozrite [Presunutie, kopírovanie, otočenie, mierka a zrkadlenie](topic:modify-objects)).

Keď príkaz skončí, výber sa vyčistí, takže ďalší príkaz začne od začiatku.

Príkazy, ktoré takto berú výber: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} a {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} a {{cmd:CHAMFER}} vždy pýtajú objekty vyberať jeden po druhom; {{cmd:TRIM}} a {{cmd:EXTEND}} berú klik alebo cestu, ktorú ťaháte cez časti (pozrite [Orezať a predĺžiť](topic:trim-and-extend)).

## Najprv príkaz, potom výber

1. Uistite sa, že nič nie je vybrané ({{key:Esc}}).
2. Zadajte `E` a stlačte {{key:Enter}}. Výzva znie `Select objects:`.
3. Klikajte na objekty alebo ťahajte okná a prekríženia. História počíta každý výber (`1 found`, `3 found`).
4. Stlačte {{key:Enter}}, stlačte {{key:Space}} alebo kliknite pravým tlačidlom myši, aby ste ukončili výber.

Objekty sa vymažú a história uvedie koľko.

Na výzvu `Select objects:` môžete tiež zadať:

- `ALL`, potom {{key:Enter}}: každý objekt, ktorý môžete upraviť v otvorenej karte.
- `L` (alebo `LAST`), potom {{key:Enter}}: naposledy nakreslený objekt.
- `P` (Previous): objekty, na ktorých pracoval posledný príkaz, ak sú ešte tam.
- `F` (Fence): kliknite alebo zadajte body pozdĺž čiary; pridá sa každý objekt, ktorý čiara pretína. Stlačte {{key:Enter}}, aby ste ohradu ukončili; `U` vezme späť jej posledný bod.
- `W` (Window) alebo `C` (Crossing): dva rohy, podľa toho, akým smerom ťaháte.
- `R` (Remove): od tejto chvíle kliky, okná a ohrady objekty **odoberajú**. Výzva znie `Remove objects:`. `A` (Add) prepne späť.
- `?`: zoznam týchto možností v histórii.

Tieto možnosti nie sú zobrazené vo výzve, ako v AutoCAD.

## Výber jedného z viacerých objektov nad sebou

Tam, kde sa objekty prekrývajú alebo dotýkajú, klik vezme najbližší. Ak chcete ďalší:

1. Držte kurzor nehybne nad miestom.
2. Stlačte {{key:Tab}}. Ďalší objekt tam sa zvýrazní a stavový riadok povie, ktorý to je („2 of 3: Line on layer Walls“).
3. Stláčajte {{key:Tab}}, kým sa nezvýrazní ten, ktorý chcete, potom kliknite bez pohybu.

Pohyb kurzora začne odznova. Funguje to bez bežiaceho príkazu, pri výzve `Select objects:` aj všade, kde príkaz žiada vybrať jeden objekt.

## Výber podľa pravidla: Rýchly výber

{{cmd:QSELECT}} (`QS`, alebo {{ui:Upraviť}} › {{ui:Viac}} › {{ui:Rýchly výber}}) vyberie každý objekt, ktorý zodpovedá pravidlu, napríklad každú kružnicu s polomerom menším ako 50 alebo každý odkaz na blok s názvom DOOR-900.

1. Otvorte {{ui:Rýchly výber}}.
2. Zvoľte {{ui:Typ objektu}} (zoznam spočíta každý typ), potom {{ui:Vlastnosť}}: {{ui:Hladina}}, {{ui:Farba}} a pre niektoré typy {{ui:Dĺžka}}, {{ui:Polomer}}, {{ui:Plocha}}, {{ui:Výška textu}}, {{ui:Obsah textu}}, {{ui:Názov bloku}} alebo {{ui:Vzor šrafovania}}.
3. Zvoľte {{ui:Operátor}} a {{ui:Hodnota}}. `*` zodpovedá zástupným znakom (`DOOR-*`); {{ui:Vybrať všetko}} vezme každý objekt daného typu. Počet dole ukazuje, koľko zodpovedá, ako volíte.
4. {{ui:Spôsob použitia}}: zahrnúť zhody, alebo všetko ostatné. {{ui:Použiť na}} {{ui:Aktuálny výber}} zúži to, čo ste mali vybrané; {{ui:Pridať k aktuálnemu výberu}} k tomu pridá.
5. Kliknite na {{ui:Vybrať}}. Potom spustite príkaz, ktorý chcete: použije výber.

## Vybrať podobné

Vyberte jeden alebo viac objektov a zadajte {{cmd:SELECTSIMILAR}} (`SIM`), alebo zvoľte {{ui:Upraviť}} › {{ui:Viac}} › {{ui:Vybrať podobné}}. Vyberie sa každý objekt rovnakého typu na rovnakej hladine a s rovnakou farbou; odkazy na bloky musia mať aj rovnaký blok, šrafovania rovnaký vzor. Zadajte `SE` pri jeho výzve `Select objects`, aby ste zvolili, čo sa musí zhodovať.

## Vybrať teraz, použiť neskôr

Zadajte `SELECT` a stlačte {{key:Enter}}, vyberte objekty ktoroukoľvek z vyššie uvedených metód a stlačte {{key:Enter}}. Ostanú vybrané pre ďalší príkaz a `P` ich pri neskoršej výzve `Select objects:` vyberie znova.

## Vybrať všetko

Keď nebeží žiadny príkaz, stlačte {{key:Mod+A}} alebo zvoľte {{ui:Vybrať všetko}} v ponuke {{ui:Upraviť}} › {{ui:Viac}} na paneli nástrojov, aby ste vybrali každý objekt, ktorý môžete upraviť v otvorenej karte. Ak ste niečo napísali na riadok príkazov, {{key:Mod+A}} vyberie tento text: najskôr stlačte {{key:Esc}}, aby sa vymazal. Pri výzve `Select objects:` zadajte `ALL`. {{ui:Zrušiť výber}} v tej istej ponuke alebo {{key:Esc}} výber vyčistí.

:::tip
Ak chcete, aby každý klik nahradil výber (a {{key:Shift}} ho pridával), nastavte {{ui:Kliknutie na objekty}} na {{ui:Nahrádza výber}} v [Nastaveniach CadCraft](topic:settings).
:::

## Čo sa nedá vybrať

- Objekty na hladine, ktorá je **vypnutá**, **zmrazená** alebo **zamknutá**. Zamknuté objekty zostávajú viditeľné a stále sa k nim dá uchopiť, ale nedajú sa vybrať ani zmeniť.
- Na karte listu model zobrazený vnútri výrezu. Vyberáte vlastné objekty listu (popisové pole, poznámky, rámy výrezov). Ak chcete upraviť model, prejdite na kartu {{ui:Model}}.

## Rýchle vymazanie

Vyberte objekty a stlačte {{key:Delete}} (alebo {{key:Backspace}}, keď riadok príkazov nemá kurzor). Na klávesnici Mac funguje kláves označený delete, keď ste kliknuli do výkresu; keď má kurzor riadok príkazov, stlačte fn a delete spolu. Spustí sa {{cmd:ERASE}} nad výberom. Ak sa nič nestane, niečo ste napísali na riadok príkazov: stlačte {{key:Esc}}, alebo namiesto toho zadajte `E` a stlačte {{key:Enter}}.

## Časté chyby

- **Okno vzalo príliš málo.** Ťahali ste zľava doprava, čo berie len to, čo je úplne vnútri. Pre prekríženie ťahajte sprava doľava.
- **Klik na prázdne miesto začal rámček.** Jeden klik na prázdne miesto začne okno; druhý klik ho dokončí. Stlačte {{key:Esc}} alebo kliknite pravým tlačidlom, aby ste ho zrušili.
- **Klik na prázdne miesto pustil výber.** Stane sa to, pokiaľ nepodržíte {{key:Shift}}. Ak chcete, aby sa výber pri takomto kliku zachoval a vyčistil sa len {{key:Esc}}, nastavte {{ui:Kliknutie na prázdne miesto}} na {{ui:Ponechá výber}} v [Nastaveniach CadCraft](topic:settings#clicking-an-empty-spot).
- **Príkaz použil objekty, ktoré ste nechceli.** Niečo ešte bolo vybrané, keď ste ho spustili. Pred príkazom stlačte {{key:Esc}}, aby ste začali bez výberu.
- **Po príkaze nie je nič vybrané.** To je zámer: ukončený príkaz výber vyčistí.
