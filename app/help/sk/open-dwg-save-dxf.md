---
title: Otvorenie DWG, úprava a uloženie kópie
summary: Otvorte výkres, ktorý vám niekto poslal, skontrolujte, čo prišlo, urobte zmenu a pošlite späť kópiu ako DWG alebo DXF.
keywords: dwg, dxf, otvoriť, import, export, uložiť, r12, obojsmerný prenos, konzultant, xref, kontrola výkresu, saveas, uložiť ako, uloženie dwg, formát
from: 49de4bf6
---

## Čo urobíte

Otvoríte DWG od konzultanta, skontrolujete, čo CadCraft dokázal zobraziť a čo nie, pridáte poznámku, vykreslíte list do PDF a uložíte kópiu na odoslanie späť, ako DWG alebo DXF.

## Otvorenie súboru

1. Stlačte {{key:Mod+O}} alebo kliknite na {{ui:Otvoriť}}.
2. Vyberte súbor `.dwg`.

Stavový riadok zobrazuje "Načítava sa …", kým sa výkres číta. Keď je hotovo, výkres vyplní obrazovku a história napríklad uvedie "Súbor plan.dwg bol otvorený: 18,240 objektov na 64 hladinách" spolu s časom, ktorý to trvalo.

:::offline
Ste offline. Ak tlačidlo {{ui:Uložiť na offline použitie}} hovorí "Pripravené na offline použitie", súbory DWG sa otvoria normálne. Ak nie a v tejto karte ešte nebol otvorený žiadny DWG, otvorenie DWG môže zlyhať, pretože čítač DWG od CadCraft sa načíta spolu s prvým DWG: otvorte DXF alebo uložte CadCraft na offline použitie, keď budete nabudúce pripojení. Pozri [Práca offline](common:offline).
:::

## Kontrola, čo prišlo

1. Pozrite sa na časť {{ui:Výkres}} na ľavom paneli: formát a verziu, jednotky, počet objektov a hladín a listy.
2. Prečítajte si pole "O tomto súbore" pod ňou, ak tam je.

Pole uvádza:

- **Ešte nezobrazené:** objekty, ktoré CadCraft zatiaľ nevie nakresliť, podľa druhu a počtu. Sú vynechané, nie odhadnuté.
- **Listy boli načítané:** otvorte ich pomocou kariet pod výkresom.
- **Kóty, ktoré sa dali načítať len tak, ako sú nakreslené.**

3. Prejdite kartami pod výkresom a pozrite si každý list.
4. Skontrolujte {{ui:Jednotky}} v {{ui:Aktuálne nastavenia}} (nič nie je vybrané, karta Model). Ak tam je {{ui:Bez jednotiek}}, ale viete, že výkres je v milimetroch, nastavte ich, aby mierky listu a vykreslenia boli správne.

:::tip
Ak očakávate časť výkresu a nevidíte ju, skontrolujte panel {{ui:Hladiny}}: hladina môže byť v súbore vypnutá alebo zmrazená. Kliknutím na jej názov ju nastavíte ako aktuálnu; to ju zapne.
:::

## Vykonanie zmeny

1. Vytvorte hladinu pre svoje poznámky: kliknite na {{ui:Nová hladina}}, napíšte `NOTES` a stlačte {{key:Enter}}.
2. Napíšte `DT` a stlačte {{key:Enter}}.
3. Kliknite, kam má poznámka patriť.
4. Napíšte výšku textu, ktorá sa hodí k výkresu (pozri [Pridanie textu a popisov](topic:text)) a stlačte {{key:Enter}}.
5. Stlačením {{key:Enter}} ponechajte otočenie 0.
6. Napíšte svoju poznámku a stlačte {{key:Enter}}.
7. Stlačením {{key:Enter}} znova dokončite.

Úpravy importovaných kót sú v poriadku: keď jednu zmeníte, CadCraft ju prekreslí vo vlastnom štýle.

## Vykreslenie listu na kontrolu

1. Kliknite na kartu listu.
2. Stlačte {{key:Mod+P}}.
3. Kliknite na {{ui:Stiahnuť PDF}}.

Pozri [Vykreslenie do PDF](topic:plot-pdf).

## Uloženie kópie

1. Stlačte {{key:Mod+S}} alebo kliknite na {{ui:Uložiť}}.

Otvorili ste DWG, takže prehliadač stiahne `<name>.dwg` vo verzii, v ktorej DWG prišiel. História napríklad uvedie "Kópia bola uložená ako Plan.dwg (DWG (AutoCAD 2018))." a na riadkoch pod ňou vypíše všetko, čo sa pri ukladaní zmenilo.

2. Pred odoslaním súboru si tieto riadky prečítajte. [Čo DWG uchováva a čo mení](topic:files#what-a-dwg-keeps-and-changes) vysvetľuje každý z nich.

Váš pôvodný DWG sa nikdy nemení. Každé uloženie je nové stiahnutie.

## Uloženie ako DWG alebo DXF

Ak chcete formát vybrať sami:

1. Stlačte {{key:Mod+Shift+S}} alebo kliknite na {{ui:Uložiť ako}}.

Otvorí sa dialóg {{ui:Uložiť kópiu ako}} so štyrmi možnosťami, každá s názvom súboru, ktorý dostane: {{ui:DWG}} so zoznamom {{ui:Verzia}}, {{ui:DXF R12}}, {{ui:DXF 2000}} a {{ui:DXF 2000 (binary)}}. Aktuálny formát a verzia výkresu sú už vybraté.

2. Kliknite na formát, ktorý chcete. Pri DWG vyberte verziu, ktorú používa druhá kancelária, alebo staršiu: AutoCAD 2018, 2013, 2010, 2007, 2004 alebo 2000.
3. Kliknite na {{ui:Uložiť}}.

Kópia sa stiahne. Od tej chvíle {{key:Mod+S}} uloží tento výkres v tomto formáte a nové výkresy sa v tomto prehliadači tiež začnú s ním. {{ui:Zrušiť}} alebo {{key:Esc}} nič neuloží a história uvedie "Nebolo uložené."

Ktorý vybrať:

- **DWG** zachová najviac: listy s ich výrezmi, skutočné kóty, vzory šráfovania, názvy hladín a blokov tak, ako ste ich napísali, a viacriadkový text ako viacriadkový text. Verzia AutoCAD 2000 sa otvorí v najväčšom počte programov; 2004 a novšie zachovávajú aj pravé farby.
- **DXF 2000** je textový súbor, ktorý zachová takmer to, čo DWG: každý list ako rozloženie s jeho výrezmi, skutočné kóty, vzory šráfovania, pravé farby, hrúbky čiar, typy čiar a názvy tak, ako ste ich napísali. Otvorí sa v AutoCAD 2000 a novšom a v takmer všetkých CAD programoch. Viacnásobné vynášacie čiary sa stanú čiarami, hrotmi šípok a textom, ktoré kreslia. DXF otvorený vo verzii 2000 alebo novšej sa ukladá ako DXF 2000.
- **DXF 2000 (binary)** obsahuje rovnaký obsah ako DXF 2000 v binárnej podobe formátu: menší súbor, ktorý uchováva každé číslo presne. Binárne DXF súbory z iných programov sa otvárajú ako textové a výkres otvorený z binárneho DXF sa uloží späť ako binárny.
- **DXF R12** sa otvorí takmer v každom CAD programe. Zachová prvý list s jeho výrezmi a ostatné listy CadCraft. Zjednodušuje novšie veci, ako sú viacriadkový text a šráfovania.

## Čo uvidí druhá kancelária

V DWG:

- Čiary, oblúky, kružnice, elipsy, lomené čiary, text, viacriadkový text, bloky s ich atribútmi, plné výplne, vzory šráfovania a hladiny tak, ako ich vidíte.
- Skutočné kóty: druhý program ich pri natiahnutí prepočíta.
- Každý list s jeho papierom a výrezmi.
- Viacnásobné vynášacie čiary ako viacnásobné vynášacie čiary. Vo verzii AutoCAD 2000 sa pravé farby zmenia na najbližšiu štandardnú farbu.

V DXF R12:

- Čiary, oblúky, kružnice, lomené čiary, text, odkazy na bloky a kóty tak, ako ich vidíte. Kóty zostávajú skutočnými kótami.
- Názvy hladín veľkými písmenami, medzery nahradené `_`.
- Prvý list ako priestor papiera výkresu s jeho výrezmi. Ďalšie listy prídu ako bloky s názvami `CCLAYOUT_1` a ďalej; ak potrebujú každý list ako rozloženie, vykreslite pre nich aj PDF každého listu.
- Viacriadkový text ako samostatné riadky, elipsy ako lomené čiary, šráfovania ako obrysy.

Tak či onak, čokoľvek uvedené ako "Ešte nezobrazené" pri otvorení DWG nie je v kópii, pokiaľ história neuvádza, že to bolo zachované: OLE objekty DWG a jeho 3D telesá v priestore modelu sa pri uložení ako DWG zapisujú späť. Povedzte to druhej strane a pošlite aj PDF.

## Časté chyby

- **"CadCraft otvára výkresy DWG a DXF."** Súbor má inú príponu. Skontrolujte, že ide o `.dwg` alebo `.dxf`.
- **"Tento výkres sa nepodarilo načítať."** DWG je poškodený alebo vo verzii, ktorú čítač nespracuje. Požiadajte o DXF alebo o DWG uložený v staršej verzii.
- **"Tento binárny DXF končí uprostred objektu."** Súbor je skrátený alebo poškodený. Napíšte RECOVER, aby sa otvorilo, čo sa dá prečítať, alebo si súbor vyžiadajte znova.
- **Uložený súbor sa volá `name (1).dwg` alebo `name (1).dxf`.** Prehliadač to urobí, keď už v priečinku je súbor s rovnakým názvom.
- **Majú starší program, ktorý nedokáže otvoriť DWG.** Uložte ako DWG s {{ui:Verzia}} AutoCAD 2000, alebo ako {{ui:DXF R12}}: takmer každý CAD program ho otvorí.
- **Chýbajú časti výkresu.** Prepojené výkresy (xref) sa nenačítajú, kým nevyberiete ich súbory ({{cmd:XREF}}, `R`), a obrázky sa zobrazia ako rámčeky s názvami súborov.
