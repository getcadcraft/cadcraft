---
title: Atribúty bloku
summary: Pozrite a zmeňte hodnoty, ktoré nesie odkaz na blok, ako číslo položky alebo výrobcu, a zachovajte ich, keď uložíte kópiu.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, popisové pole, úprava na mieste, editor atribútov, attdef, definovať atribút, bedit, editor blokov, bclose, atribút, atribúty, attdef, attrib, štítok, číslo položky, hodnota, neviditeľný, konštantný, blok, vlastnosti, zoznam, štítok zariadenia
from: 34d307c7
---

## Čo sú atribúty

Atribút je pomenovaná hodnota, ktorá putuje s odkazom na blok: číslo položky štítku zariadenia, názov štítku miestnosti, požiarna odolnosť dverí. Definícia bloku určuje, aké atribúty má (každý má **štítok**, **výzvu**, **predvolenú** hodnotu a miesto, veľkosť a uhol svojho textu). Každý odkaz na blok nesie vlastné hodnoty.

Niektoré atribúty sú **neviditeľné**: uchovávajú údaje, ako výrobcu alebo číslo modelu, ale nikdy sa nekreslia. Niektoré sú **konštantné**: sú rovnaké pre každý odkaz a určuje ich blok.

## Odkiaľ atribúty pochádzajú

- Bloky v súboroch DWG a DXF, ktoré otvoríte, si ponechajú svoje atribúty, s hodnotami každého odkazu.
- Bloky, ktoré vložíte pomocou {{cmd:INSERT}} a možnosti {{ui:Súbor}}, si ponechajú svoje. Pozri [Vloženie zo súboru alebo z knižnice](topic:insert-from-file-and-library).
- Položky knižnice prichádzajú ako bloky s atribútmi: viditeľné číslo položky a údaje položky, neviditeľné.

- Bloky, ktoré vytvoríte sami: najprv definujte atribúty pomocou {{cmd:ATTDEF}} (nižšie) a potom ich vyberte spolu s ostatnými objektmi, keď vytvárate blok.

## Definovanie atribútov pre vlastné bloky

1. Nakreslite čiary bloku, napríklad štítok miestnosti.
2. Vyberte {{ui:Bloky}} › {{ui:Viac}} › {{ui:Definovať atribút}}, alebo napíšte `ATT` a stlačte {{key:Enter}}.
3. História zobrazí režimy (`Neviditeľný=No Konštantný=No Predvolený=No`). Napíšte `I`, `C` alebo `P` na prepnutie jedného a stlačte {{key:Enter}}, keď sú správne. Neviditeľné hodnoty sa uchovajú, ale nekreslia; konštantná má rovnakú hodnotu v každom odkaze; predvolená sa nepýta pri vložení bloku.
4. Napíšte štítok (napríklad `ROOM_NO`: veľkými písmenami, bez medzier), výzvu (`Číslo miestnosti`) a predvolenú hodnotu (`101`).
5. Kliknite, kam má hodnota ísť, a zadajte výšku a otočenie. Štítok sa zobrazí vo výkrese.
6. Vytvorte blok pomocou {{cmd:BLOCK}}, vyberte čiary a definície atribútov spoločne. Odkaz, ktorý ich nahradí, dostane predvolené hodnoty; každé nové {{cmd:INSERT}} si ich vyžiada.

Vybraná definícia atribútu zobrazuje {{ui:Štítok}}, {{ui:Výzva}}, {{ui:Predvolené}} a režimy v {{ui:Vlastnosti}}.

## Zmena bloku: editor blokov

{{ui:Bloky}} › {{ui:Viac}} › {{ui:Upraviť blok}} ({{cmd:BEDIT}}, `BE`) otvorí blok samostatne: napíšte jeho názov (alebo najprv vyberte odkaz). Lišta hore hovorí, ktorý blok upravujete. Kreslite, mažte a mente jeho objekty bežnými príkazmi a pridávajte alebo mente definície atribútov. Potom kliknite na {{ui:Uložiť blok}} (alebo napíšte {{cmd:BCLOSE}} a `S`): každý odkaz zobrazí zmenu a jedno {{key:Mod+Z}} ju vráti späť celú. {{ui:Zahodiť zmeny}} (`BCLOSE`, `D`) nechá blok tak, ako bol.

Keď ste pridali, odstránili alebo zmenili definície atribútov, uloženie tiež uvedie všetky odkazy do súladu: hodnoty, ktoré ste zadali, sa zachovajú, nový atribút dostane predvolenú hodnotu, odstránený zmizne a každý atribút sa vráti na miesto, ktoré určuje definícia. História uvedie, koľko odkazov bolo aktualizovaných.

## Úprava popisového poľa na mieste (REFEDIT)

Popisové pole na liste často sedí vnútri bloku. Ak chcete zmeniť jeho čiary alebo texty bez opustenia listu:

1. Vyberte popisové pole, potom {{ui:Bloky}} › {{ui:Viac}} › {{ui:Upraviť na mieste}} (alebo napíšte {{cmd:REFEDIT}}).
2. Jeho obsah sa stane bežnými objektmi na svojom mieste; všetko ostatné je zosvetlené a nedá sa meniť.
3. Menťe, mažte alebo kreslite: nové objekty sa stanú súčasťou bloku.
4. Kliknite na {{ui:Uložiť blok}} na lište hore (alebo napíšte {{cmd:REFCLOSE}} a `S`). Každý odkaz zobrazí zmenu a jedno {{key:Mod+Z}} vráti späť celú úpravu. {{ui:Zahodiť}} nechá blok tak, ako bol.

Prepojený výkres, dynamický blok alebo odkaz zmenený v mierke inak v šírke a výške sa nedajú upraviť na mieste: použite {{cmd:BEDIT}} (alebo otvorte prepojený výkres).

:::note
Uložte alebo zahoďte v editore blokov ešte pred uložením výkresu: súbor uložený s otvoreným editorom má blok v podobe pred úpravou.
:::

## Vyplnenie pri umiestnení bloku

1. Napíšte `I` a stlačte {{key:Enter}}, napíšte názov bloku a stlačte {{key:Enter}}.
2. Kliknite, kam má ísť.
3. CadCraft sa pýta na každú hodnotu, napríklad `Zadajte číslo položky (ITEM) <>`. Napíšte hodnotu a stlačte {{key:Enter}}, alebo stlačte {{key:Enter}} na zachovanie predvolenej hodnoty v uhlových zátvorkách.

Hodnoty, ktoré blok označuje ako predvolené, a konštantné sa nepýtajú. Dostanú svoju predvolenú hodnotu.

## Pozrenie a zmena hodnôt

1. Kliknite na odkaz na blok.
2. Na pravom paneli pod {{ui:Atribúty}} má každý štítok svoju hodnotu. Neviditeľné hovoria `skryté`.
3. Kliknite na hodnotu, napíšte novú a stlačte {{key:Enter}}.

Výkres hneď zobrazí novú hodnotu. Každá zmena je jeden krok: {{key:Mod+Z}} ju vráti späť.

**Editor atribútov.** Dvojitým kliknutím na odkaz s atribútmi (alebo {{cmd:EATTEDIT}}) sa otvorí dialóg {{ui:Upraviť atribúty}}, ktorý vypíše každý štítok s jeho výzvou a hodnotou. Napíšte nové hodnoty; kliknutím na riadok zmeníte {{ui:Výška}}, {{ui:Otočenie}}, {{ui:Činiteľ šírky}}, {{ui:Zarovnanie}}, {{ui:Hladina}}, {{ui:Farba}} a {{ui:Neviditeľný}} tohto atribútu len pre tento odkaz. {{ui:Použiť}} nechá dialóg otvorený; {{ui:OK}} použije a zavrie. Každé {{ui:Použiť}} alebo {{ui:OK}} je jeden krok späť.

**Na príkazovom riadku** {{cmd:ATTEDIT}} pýta každú hodnotu postupne: napíšte novú alebo stlačte {{key:Enter}}, aby ostala.

## Zmena definícií atribútov (BATTMAN, ATTSYNC)

{{ui:Bloky}} › {{ui:Viac}} › {{ui:Správca atribútov}} ({{cmd:BATTMAN}}) vypíše atribúty bloku: zmeňte štítok, výzvu alebo predvolenú hodnotu, označte {{ui:Neviditeľný}}, {{ui:Konštantný}} alebo {{ui:Predvolený}} a posúvajte ich nahor alebo nadol (poradie, v akom sa hodnoty pýtajú). S označeným {{ui:Aktualizovať odkazy (hodnoty zachované)}} {{ui:Použiť}} tiež uvedie každý odkaz do súladu; premenovaný štítok si zachová hodnoty. Každé {{ui:Použiť}} je jeden krok späť.

{{cmd:ATTSYNC}} uvedie odkazy do súladu s definíciami ich blokov ručne: `S` vyberie odkaz, `N` pomenuje blok, `A` urobí všetky bloky. Hodnoty sa zachovajú.

Hodnoty vlastných polí položky knižnice (jej id, verzia, licencia a uvedenie autora) sa zobrazujú, ale nedajú sa upraviť, aby kontrola aktualizácií ďalej fungovala. Jej číslo položky a množstvo meníte vy.

## Zoznam atribútov

Vyberte odkazy a napíšte `LI` (pre {{cmd:LIST}}). História zobrazí každý atribút ako `TAG = hodnota`, s `(neviditeľný)` alebo `(konštantný)` tam, kde to platí.

## Presúvanie, otáčanie a rozkladanie

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} a {{cmd:MIRROR}} zachovávajú hodnoty; text sa pohne s blokom a zostane čitateľný.
- {{cmd:EXPLODE}} zmení viditeľné atribúty na obyčajný text s ich hodnotami. Neviditeľné sa zahodia.

## Ukladanie

Uložený DWG aj uložený DXF uchovávajú každý atribút: definície každého bloku (aj neviditeľné, konštantné a predvolené) a hodnoty každého odkazu. Ostatné CAD programy ich čítajú ako bežné atribúty bloku.

V DXF R12 sa hodnota dlhšia ako 255 znakov skráti na 255 a história to uvedie.

## Bežné chyby

- **Hodnota sa nezobrazí vo výkrese.** Je neviditeľná alebo prázdna. Neviditeľné hodnoty sa stále zobrazujú na pravom paneli.
- **Zadaná hodnota išla na príkazový riadok.** Najprv kliknite do poľa hodnoty na pravom paneli.
