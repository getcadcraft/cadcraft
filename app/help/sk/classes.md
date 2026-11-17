---
title: Organizácia výkresu pomocou tried
summary: Triedy usporiadajú objekty druhým spôsobom, naprieč hladinami (Lighting-Fixtures-Spot): zobrazovanie a skrývanie, farba, typ čiary, hrúbka, výplň a textový štýl, ktoré môžu objekty prevziať „podľa triedy“, a nastavenie triedy, do ktorej sa zaraďujú nové objekty.
keywords: trieda, triedy, CLASSES, CLS, CLASS, podľa triedy, ByClass, aktívna trieda, použiť pri vytváraní, Žiadna, návrhová hladina, mierka hladiny, výška, pohľad, Vectorworks
from: 672de9cb
---

Hladiny určujú *kde* sa objekt nachádza vo výkrese; triedy určujú *čo* to je. Stena na hladine `Level 1` môže byť v triede `Walls-Exterior`, bodové svietidlo na hladine `Ceiling` v triede `Lighting-Fixtures-Spot`. Môžete naraz skryť každé svietidlo na každej hladine alebo vykresliť každú vonkajšiu stenu hrubšie, bez presúvania čohokoľvek medzi hladinami.

Každý objekt začína v triede **Žiadna**. Výkres bez vlastných tried funguje presne ako predtým.

## Otvorenie panela Triedy

Napíšte `CLASSES` (alebo `CLS`) a stlačte {{key:Enter}}, alebo vyberte {{ui:Triedy…}} v ponuke {{ui:Viac}} skupiny {{ui:Pohľad}}. Panel sa otvorí nad výkresom a zostane otvorený aj počas kreslenia.

- **Pridanie triedy:** napíšte jej názov do poľa hore a stlačte {{key:Enter}}. Znak `-` vytvorí úroveň: `Lighting-Fixtures-Spot` je pod `Lighting-Fixtures`, ktorá je pod `Lighting`; chýbajúce úrovne sa pridajú automaticky.
- **Zobrazenie alebo skrytie:** oko vedľa triedy. Skrytie triedy skryje každú triedu pod ňou, na obrazovke aj na papieri.
- **Aktívna trieda:** okrúhle tlačidlo. Nové objekty, ktoré nakreslíte, sa zaradia do aktívnej triedy.
- **Výber triedy:** kliknite na jej názov. Tlačidlá a nastavenia pod zoznamom potom pracujú s ňou.

Číslo na konci každého riadku udáva, koľko objektov je v danej triede (v modeli, na listoch a vnútri definícií blokov).

## Zaradenie objektov do triedy

Vyberte objekty, v paneli zvoľte triedu a kliknite na {{ui:Nastaviť triedu}}. Najskôr zaškrtnite {{ui:Podľa triedy}}, aby z triedy prevzali farbu, typ čiary, hrúbku, výplň a textový štýl. Môžete aj:

- napísať `CLASS`, keď sú objekty vybraté, a zadať názov triedy (nový názov vytvorí triedu);
- napísať `CLASS`, keď nič nie je vybraté, a nastaviť aktívnu triedu; `?` vypíše triedy s ich počtami;
- použiť časť {{ui:Trieda}} v paneli Vlastnosti: triedu a prepínač {{ui:… podľa triedy}} pre farbu, typ čiary a hrúbku (výplň pri šráfovaniach, textový štýl pri texte);
- vybrať podľa triedy príkazom `QSELECT`: zvoľte vlastnosť {{ui:Trieda}}.

{{ui:Vybrať jej objekty}} vyberie každý objekt zvolenej triedy na otvorenom liste (alebo v modeli).

## Ako sa objekt kreslí: objekt, trieda, hladina

Farba, typ čiary, hrúbka, výplň a textový štýl objektu môžu byť **podľa triedy**, rovnako ako môžu byť podľa hladiny. CadCraft hľadá v tomto poradí:

1. Vlastná hodnota objektu, pokiaľ táto hodnota nie je podľa triedy.
2. Hodnota triedy, keď objekt ju preberá podľa triedy a trieda ju má.
3. Hodnota hladiny.

Trieda, ktorej farba (alebo typ čiary …) je {{ui:Nenastavené}}, predá objekt jeho hladine. Vyberte triedu a pod tlačidlami nastavte jej {{ui:Farba}}, {{ui:Typ čiary}}, {{ui:Hrúbka čiary}}, {{ui:Výplň (šráfovania)}} a {{ui:Textový štýl}}. Zaškrtnite {{ui:Použiť pri vytváraní}}, aby nové objekty nakreslené v tejto triede prevzali všetky tieto hodnoty podľa triedy.

Každá zmena v paneli je jeden krok späť.

## Premenovanie a zmazanie

{{ui:Premenovať}} upraví názov priamo na mieste: stlačte {{key:Enter}}, aby sa zachoval, a {{key:Esc}}, aby ste odišli. Triedy pod ňou sa prispôsobia (`Lighting-Spot` sa zmení na `Light-Spot`, keď sa `Lighting` zmení na `Light`) a rovnako aj ich objekty a všetky prepísania vo výreze.

{{ui:Zmazať}} odstráni triedu a každú triedu pod ňou. Ich objekty sa presunú do **Žiadna**. Jeden krok {{ui:Späť}} vráti všetko späť. **Žiadna** nemožno premenovať ani zmazať.

## Návrhové hladiny

Pod {{ui:Návrhové hladiny}} môže každá hladina niesť mierku (`1:50`) a výšku. Návrhová hladina je bežná hladina: priestor modelu a listy fungujú ako predtým a mierka a výška sa uchovajú vo výkrese pre nástroje, ktoré ich použijú.

## V súboroch DWG a DXF

Triedy sa uchovávajú v každej verzii DWG, ktorú CadCraft ukladá, a v DXF (R12 a 2000). Trieda každého objektu sú jeho vlastné rozšírené údaje (aplikácia `CADCRAFT_CLASS`), takže ich AutoCAD a iné programy uchovajú spolu s objektom. Zoznam tried, farby a viditeľnosť sú uložené v jednom nepoužitom bloku s názvom `CADCRAFT_CLASSES`; ak ho iný program vyčistí, CadCraft stále nájde triedu každého objektu a triedy sa obnovia s predvolenými nastaveniami.

Iné programy triedy nepoznajú: každý objekt kreslia s jeho vlastnými hodnotami alebo hodnotami jeho hladiny.

Pozrite aj [Prepísanie tried vo výreze](topic:viewport-overrides) a [Organizácia výkresu pomocou hladín](topic:layers).
