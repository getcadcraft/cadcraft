---
title: Uspořádání výkresu pomocí tříd
summary: Třídy třídí objekty podruhé, napříč vrstvami (Lighting-Fixtures-Spot): zobrazte je a skryjte, dejte jim barvu, typ čáry, tloušťku, výplň a styl textu, které mohou objekty převzít „podle třídy“, a nastavte třídu, do které se zařadí nové objekty.
keywords: třída, třídy, CLASSES, CLS, CLASS, podle třídy, ByClass, aktivní třída, použít při vytvoření, None, návrhová vrstva, měřítko vrstvy, výška, Vectorworks
from: 672de9cb
---

Vrstvy říkají, *kde* objekt v kresbě je; třídy říkají, *čím* je. Stěna na vrstvě `Level 1` může být ve třídě `Walls-Exterior`, bodové světlo na vrstvě `Ceiling` ve třídě `Lighting-Fixtures-Spot`. Můžete naráz skrýt všechna světla na všech vrstvách nebo vykreslit všechny vnější stěny tlustěji, aniž byste cokoli přesouvali mezi vrstvami.

Každý objekt je zpočátku ve třídě **None**. Výkres bez vlastních tříd funguje přesně jako dřív.

## Otevřete panel Třídy

Napište `CLASSES` (nebo `CLS`) a stiskněte {{key:Enter}}, nebo vyberte {{ui:Třídy…}} v nabídce {{ui:Více}} skupiny {{ui:Pohled}}. Panel se otevře nad výkresem a zůstane otevřený i při kreslení.

- **Přidání třídy:** napište její název do pole nahoře a stiskněte {{key:Enter}}. Pomlčka vytvoří úroveň: `Lighting-Fixtures-Spot` leží pod `Lighting-Fixtures`, který leží pod `Lighting`; chybějící úrovně se přidají automaticky.
- **Zobrazení nebo skrytí:** oko vedle třídy. Skrytí třídy skryje všechny třídy pod ní, na obrazovce i na papíře.
- **Aktivní třída:** kulaté tlačítko. Nové objekty, které nakreslíte, půjdou do aktivní třídy.
- **Výběr třídy:** klikněte na její název. Tlačítka a nastavení pod seznamem pak pracují s ní.

Číslo na konci každého řádku udává, kolik objektů je v dané třídě (v modelu, na listech i uvnitř definic bloků).

## Zařazení objektů do třídy

Vyberte objekty, v panelu vyberte třídu a zvolte {{ui:Nastavit třídu}}. Nejprve zaškrtněte {{ui:Podle třídy}}, aby si objekty převzaly barvu, typ čáry, tloušťku, výplň a styl textu od třídy. Můžete také:

- napsat `CLASS` s vybranými objekty a zadat název třídy (nový název vytvoří třídu);
- napsat `CLASS` bez výběru, čímž nastavíte aktivní třídu; `?` vypíše třídy s jejich počty;
- použít část {{ui:Třída}} v panelu Vlastnosti: třídu a přepínač {{ui:… podle třídy}} pro barvu, typ čáry a tloušťku (výplň pro šrafy, styl textu pro text);
- vybrat podle třídy příkazem `QSELECT`: zvolte vlastnost {{ui:Třída}}.

{{ui:Vybrat její objekty}} vybere každý objekt zvolené třídy na otevřeném listu (nebo v modelu).

## Jak se objekt vykresluje: objekt, třída, vrstva

Barva, typ čáry, tloušťka, výplň a styl textu objektu mohou být **podle třídy**, stejně jako podle vrstvy. CadCraft hledá v tomto pořadí:

1. vlastní hodnotu objektu, pokud není podle třídy;
2. hodnotu třídy, pokud ji objekt bere podle třídy a třída ji má;
3. hodnotu vrstvy.

Třída, jejíž barva (nebo typ čáry …) je {{ui:Nenastaveno}}, předá objekt jeho vrstvě. Vyberte třídu a pod tlačítky nastavte její {{ui:Barva}}, {{ui:Typ čáry}}, {{ui:Tloušťka čáry}}, {{ui:Výplň (šrafy)}} a {{ui:Styl textu}}. Zaškrtnutím {{ui:Použít při vytvoření}} zajistíte, že nové objekty nakreslené v této třídě převezmou všechny tyto hodnoty podle třídy.

Každá změna v panelu je jeden krok zpět.

## Přejmenování a smazání

{{ui:Přejmenovat}} upraví název přímo na místě: stiskněte {{key:Enter}} pro uložení, {{key:Esc}} pro odchod. Třídy pod ní se přejmenují také (`Lighting-Spot` se změní na `Light-Spot`, když se `Lighting` změní na `Light`), stejně tak jejich objekty a případná přepsání ve výřezech.

{{ui:Smazat}} odstraní třídu a všechny třídy pod ní. Jejich objekty se přesunou do **None**. Jedním krokem {{ui:Zpět}} se vše vrátí zpět. Třídu **None** nelze přejmenovat ani smazat.

## Návrhové vrstvy

Pod {{ui:Návrhové vrstvy}} může každá vrstva nést měřítko (`1:50`) a výšku. Návrhová vrstva je běžná vrstva: prostor modelu a listy fungují jako dřív a měřítko a výška se uchovají ve výkresu pro nástroje, které je použijí.

## V souborech DWG a DXF

Třídy se uchovávají v každé verzi DWG, kterou CadCraft ukládá, i v DXF (R12 a 2000). Třída každého objektu je jeho vlastní rozšířená data (aplikace `CADCRAFT_CLASS`), takže je AutoCAD a jiné programy uchovají spolu s objektem. Seznam tříd, barvy a viditelnost se uchovávají v jednom nepoužitém bloku s názvem `CADCRAFT_CLASSES`; pokud jiný program tento blok vyčistí, CadCraft přesto najde třídu každého objektu a třídy se obnoví s výchozím nastavením.

Jiné programy třídy neznají: každý objekt vykreslují podle jeho vlastních nebo vrstvových hodnot.

Viz též [Přepsání třídy ve výřezu](topic:viewport-overrides) a [Uspořádání výkresu pomocí vrstev](topic:layers).
