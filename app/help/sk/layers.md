---
title: Usporiadanie výkresu hladinami
summary: Vytvorte hladiny pre múry, dvere a poznámky, nastavte farby, urobte hladinu aktuálnou a vypínajte, zmrazujte, zamykajte hladiny alebo ich vynechajte z výstupu.
keywords: hladina, hladiny, la, aktuálna hladina, zmraziť, rozmraziť, zamknúť, vypnúť, zapnúť, výstup, bez výstupu, farba, vlastnosti hladiny, layiso, layuniso, izolovať, layoff, layfrz, laymcur, layon, laythw, premenovať, laymrg, zlúčiť, laydel, zmazať hladinu
from: ba9f0617
---

## Čo vytvoríte

Tri hladiny, Múry, Dvere a Poznámky, každá s vlastnou farbou, s objektmi nakreslenými na každej a presúvanými medzi nimi.

## Panel Hladiny

Hladiny sú na paneli vľavo, pod {{ui:Hladiny}}. Každý riadok zobrazuje zľava doprava:

- bodku: vyplnenú pre **aktuálnu** hladinu, kam idú nové objekty;
- farebný vzorník;
- názov hladiny;
- štyri tlačidlá: zap/vyp (oko), zmraziť (vločka), zamknúť (zámok) a výstup (tlačiareň).

Každý výkres má hladinu s názvom `0`. Napísanie `LA` a stlačenie {{key:Enter}} presunie kurzor na panel.

## Vytvorenie hladín

1. Kliknite na {{ui:Nová hladina}} nad zoznamom. Otvorí sa pole pre názov.
2. Napíšte `Walls` a stlačte {{key:Enter}} (alebo kliknite na {{ui:Pridať}}).

Stavový riadok hlási „Added layer Walls and made it current." Nová hladina dostane farbu 7 (čierna na svetlej téme, biela na tmavej).

3. Znova kliknite na {{ui:Nová hladina}}, napíšte `Doors` a stlačte {{key:Enter}}.
4. Znova kliknite na {{ui:Nová hladina}}, napíšte `Notes` a stlačte {{key:Enter}}.

Hladina Notes je teraz aktuálna.

## Farba pre každú hladinu

1. Kliknite na farebný vzorník v riadku Walls. Otvorí sa farebný výber vášho systému.
2. Vyberte farbu a potvrďte.

Vzorník a všetko na hladine Walls, čo má farbu {{ui:Podľa hladiny}}, sa zmenia.

:::note
Vybraná farba, ktorá zodpovedá jednej zo 255 štandardných CAD farieb, sa uloží ako toto číslo. Každá iná farba sa v CadCraft zachová presne, ale v súbore DWG alebo DXF sa uloží ako najbližšia štandardná farba.
:::

## Kreslenie na hladine

1. Kliknite na názov **Walls** v zozname. Jej bodka sa vyplní a stavový riadok hlási „Current layer: Walls".
2. Nakreslite obdĺžnik (`REC`). Ide na Walls.
3. Kliknite na **Doors** a nakreslite oblúk (`A`). Ide na Doors.

Aktuálnu hladinu môžete vybrať aj v {{ui:Aktuálne nastavenia}} vpravo (keď nič nie je vybrané), pod {{ui:Hladina}}.

## Presun objektov na inú hladinu

1. Vyberte objekty.
2. V pravom paneli vyberte novú hladinu v {{ui:Hladina}}.

Presunú sa na ňu a prevezmú jej farbu, ak je ich farba {{ui:Podľa hladiny}}.

## Vypnutie, zmrazenie, zamknutie a výstup

| Tlačidlo | Čo robí |
|---|---|
| Zap/vyp (oko) | Skryje objekty hladiny. Nedajú sa vidieť, vybrať ani na ne uchopiť. |
| Zmraziť (vločka) | V CadCraft rovnaký účinok ako vypnutie. Ponechané oddelene, lebo ostatné programy s nimi zaobchádzajú inak, a nastavenie sa uloží. |
| Zamknúť (zámok) | Objekty zostávajú viditeľné a dá sa na ne uchopiť, ale nedajú sa vybrať ani zmeniť. Vhodné na podklad, po ktorom obťahujete. |
| Výstup (tlačiareň) | Keď je stlačené, hladina sa na obrazovke zobrazuje, ale **vynecháva sa z výstupov** a PDF. Použite to pre konštrukčné čiary a poznámky pre seba. |

Tlačidlo podržte myšou, aby sa zobrazil jeho popis („Turn off", „Freeze", „Lock", „Do not plot this layer").

Aktuálnu hladinu nemôžete vypnúť: stavový riadok hlási „That is the current layer. Make another layer current first." Kliknutie na názov hladiny, aby sa stala aktuálnou, ju tiež zapne a rozmrazí.

Každá zmena hladiny, v paneli alebo príkazom, je jeden krok späť: {{key:Mod+Z}} ju vráti.

## Práca s hladinami výberom objektov

Názov hladiny nemusíte poznať: vyberte objekt na nej. Napíšte príkaz alebo otvorte {{ui:Nástroje}} v hornej časti panela {{ui:Hladiny}}.

| Príkaz | Čo robí |
|---|---|
| {{cmd:LAYISO}} | Vyberte objekty, stlačte {{key:Enter}}: zostanú zapnuté iba ich hladiny, všetky ostatné sa vypnú. Ak je aktuálna hladina vypnutá, jedna z izolovaných sa stane aktuálnou. |
| {{cmd:LAYUNISO}} | Znova zapne hladiny, ktoré vypol posledný {{cmd:LAYISO}}, a vráti aktuálnu hladinu, ktorú zmenil. |
| {{cmd:LAYOFF}} | Klikajte na objekty jeden za druhým: hladina každého sa vypne. Napíšte `U`, aby ste vzali späť posledný, a {{key:Enter}}, aby ste skončili. |
| {{cmd:LAYFRZ}} | To isté, ale zmrazuje každú hladinu. |
| {{cmd:LAYMCUR}} | Kliknite na objekt: jeho hladina sa stane aktuálnou (a zapne sa a rozmrazí). Ak je už vybraný jeden objekt, použije sa ten. |
| {{cmd:LAYON}} | Zapne všetky hladiny. |
| {{cmd:LAYTHW}} | Rozmrazí všetky hladiny. |

Aktuálnu hladinu takto nikdy nevypnete ani nezmrazíte: história to oznámi a najprv môžete aktuálnu hladinu nastaviť príkazom {{cmd:LAYMCUR}}. Keď vyberiete blok, použije sa vlastná hladina referencie.

## Premenovanie, zlúčenie a zmazanie hladín

- {{cmd:RENAME}}: napíšte `LA`, starý názov a nový. Každý objekt na hladine ich nasleduje. (`B` premenuje blok rovnakým spôsobom, so všetkými referenciami naň.)
- {{cmd:LAYMRG}}: kliknite na objekt na každej hladine, ktorú chcete zlúčiť (alebo napíšte `N` a názov), stlačte {{key:Enter}}, potom vyberte cieľovú hladinu a odpovedzte `Y`. Objekty sa presunú na cieľovú hladinu — v modeli, na listoch a vnútri blokov — a zlúčené hladiny zmiznú.
- {{cmd:LAYDEL}}: vyberte objekt na hladine (alebo `N` a jej názov) a odpovedzte `Y`. Hladina zmizne **spolu so všetkými objektmi na nej**, všade. Hladinu 0, DEFPOINTS a aktuálnu hladinu nemožno zmazať.

Každý z nich je jeden krok späť. Všetky tri sú v {{ui:Nástroje}} v hornej časti panela {{ui:Hladiny}}.

1. Kliknite na jednu čiaru múru, potom napíšte `LAYISO` a stlačte {{key:Enter}}. Zostane zapnutá iba hladina Walls.
2. Nakreslite alebo zmeňte, čo potrebujete, na Walls.
3. Napíšte `LAYUNISO` a stlačte {{key:Enter}}. Doors a Notes sa vrátia.

## Časté chyby

- **Nové čiary išli na zlú hladinu.** Pred kreslením skontrolujte, ktorá bodka je vyplnená. Nová hladina sa stane aktuálnou hneď, ako ju pridáte.
- **Objekt sa nedá vybrať.** Jeho hladina je zamknutá, vypnutá alebo zmrazená.
- **Hladina sa stále tlačí v inom programe.** DXF R12 nedokáže uložiť „bez výstupu". CadCraft nastavenie uchováva pre seba, keď má výkres list, ale ostatné programy danú hladinu vytlačia.
- **Názvy hladín veľkými písmenami po uložení.** DXF R12 ukladá názvy veľkými písmenami, takže `Walls` sa vráti ako `WALLS` a medzery sa zmenia na `_`. Uložený DWG zachová názvy tak, ako ste ich napísali.
- **Premenovanie, zlúčenie alebo zmazanie hladiny.** Použite {{cmd:RENAME}}, {{cmd:LAYMRG}} alebo {{cmd:LAYDEL}} (tiež v {{ui:Nástroje}}): pozri nižšie.

## Skupiny hladín

Zoznam udržíte krátky tak, že hladiny dáte do priečinkov, napríklad Existujúce, Navrhované a Inžinierske siete. Každý priečinok sa dá zložiť a jeho prepínače zapnú alebo vypnú všetky jeho hladiny, zmrazia ich alebo zamknú spolu. Aktuálna hladina sa nikdy nevypne.

V {{ui:Nástroje}} na paneli Hladiny vyberte {{ui:Pridať hotové skupiny}} pre sadu urobenú pre menšie obytné práce, {{ui:Zoskupiť podľa názvu}} na zoskupenie hladín so spoločným predponou (`E-Walls`, `E-Doors`), alebo {{ui:Nová skupina}}. Pretiahnite hladinu na priečinok alebo použite zoznam nad hladinami pre aktuálnu hladinu. Napíšte do {{ui:Nájsť hladinu}}, aby sa zoznam zúžil. `LAYGROUP` (`LG`) robí to isté na riadku príkazov.

Ak chcete premenovať skupinu, dvakrát kliknite na jej názov (alebo ju vyberte a stlačte {{key:F2}}), napíšte nový názov a stlačte {{key:Enter}}; {{key:Esc}} zachová starý, a {{cmd:UNDO}} ho vráti. {{ui:Nová skupina}} je v {{ui:Nástroje}} na paneli Hladiny.

Samotné hladiny sa nemenia, takže ich ostatné CAD programy vidia ako obyčajný plochý zoznam. CadCraft uchováva skupiny v súbore.
