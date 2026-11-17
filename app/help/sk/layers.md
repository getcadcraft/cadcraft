---
title: Usporiadanie výkresu pomocou hladín
summary: Vytvorte hladiny pre steny, dvere a poznámky, nastavte farby, nastavte hladinu ako aktuálnu a vypínajte, zmrazujte, zamykajte hladiny alebo ich vylúčte z tlače.
keywords: hladina, hladiny, la, aktuálna hladina, zmraziť, rozmraziť, zamknúť, vypnúť, zapnúť, tlač, netlačiť, farba, vlastnosti hladiny, layiso, layuniso, izolovať, layoff, layfrz, laymcur, layon, laythw, premenovať, laymrg, zlúčiť, laydel, zmazať hladinu
from: cd033591
---

## Čo vytvoríte

Tri hladiny, Walls, Doors a Notes, každá s vlastnou farbou, s objektmi nakreslenými na každej a presunutými medzi nimi.

## Panel hladín

Hladiny sú v paneli vľavo, pod {{ui:Hladiny}}. Každý riadok ukazuje zľava doprava:

- bodku: vyplnenú pre **aktuálnu** hladinu, kam idú nové objekty;
- farebný vzorok;
- názov hladiny;
- štyri tlačidlá: zapnúť/vypnúť (oko), zmraziť (vločka), zamknúť (zámok) a tlač (tlačiareň).

Každý výkres má hladinu nazvanú `0`. Zadanie `LA` a stlačenie {{key:Enter}} prejde na panel.

## Vytvorenie hladín

1. Kliknite na {{ui:Nová hladina}} nad zoznamom. Otvorí sa pole na názov.
2. Zadajte `Walls` a stlačte {{key:Enter}} (alebo kliknite na {{ui:Pridať}}).

Stavový riadok hlási "Hladina Walls bola pridaná a nastavená ako aktuálna." Nová hladina dostane farbu 7 (čierna na svetlom motíve, biela na tmavom).

3. Znova kliknite na {{ui:Nová hladina}}, zadajte `Doors` a stlačte {{key:Enter}}.
4. Znova kliknite na {{ui:Nová hladina}}, zadajte `Notes` a stlačte {{key:Enter}}.

Notes je teraz aktuálna.

## Nastavenie farby každej hladine

1. Kliknite na farebný vzorok v riadku Walls. Otvorí sa výber farby vášho systému.
2. Vyberte farbu a potvrďte.

Vzorok a všetko na Walls, čo má farbu {{ui:Podľa hladiny}}, sa zmenia.

:::note
Vybraná farba, ktorá zodpovedá jednej z 255 štandardných farieb CAD, sa uloží ako toto číslo. Každá iná farba sa v CadCraft zachová presne, ale v súbore DWG alebo DXF sa uloží ako najbližšia štandardná farba.
:::

## Kreslenie na hladine

1. Kliknite na názov **Walls** v zozname. Jeho bodka sa vyplní a stavový riadok hlási "Aktuálna hladina: Walls".
2. Nakreslite obdĺžnik (`REC`). Pôjde na Walls.
3. Kliknite na **Doors** a nakreslite oblúk (`A`). Pôjde na Doors.

Aktuálnu hladinu môžete zvoliť aj v {{ui:Aktuálne nastavenia}} vpravo (keď nie je nič vybrané), pod {{ui:Hladina}}.

## Presun objektov na inú hladinu

1. Vyberte objekty.
2. V pravom paneli zvoľte novú hladinu v {{ui:Hladina}}.

Presunú sa na túto hladinu a prevezmú jej farbu, ak je ich farba {{ui:Podľa hladiny}}.

## Vypnutie, zmrazenie, zamknutie a tlač

| Tlačidlo | Čo robí |
|---|---|
| Zapnúť/vypnúť (oko) | Skryje objekty hladiny. Nedajú sa vidieť, vybrať ani uchopiť. |
| Zmraziť (vločka) | V CadCraft rovnaký účinok ako vypnutie. Ponechané oddelene, lebo iné programy ich spracúvajú inak a nastavenie sa uloží. |
| Zamknúť (zámok) | Objekty zostanú viditeľné a môžete na ne uchopiť, ale nedajú sa vybrať ani zmeniť. Vhodné pre podklad, ktorý obkresľujete. |
| Tlač (tlačiareň) | Keď je stlačené, hladina sa zobrazí na obrazovke, ale **nevynáša sa do tlače** a PDF. Použite ju na konštrukčné čiary a poznámky pre seba. |

Podržte kurzor nad tlačidlom a zobrazí sa, čo urobí ("Vypnúť", "Zmraziť", "Zamknúť", "Netlačiť túto hladinu").

Aktuálnu hladinu nemôžete vypnúť: stavový riadok hlási "Toto je aktuálna hladina. Najprv nastavte ako aktuálnu inú hladinu." Kliknutie na názov hladiny, aby sa stala aktuálnou, ju zároveň zapne a rozmrazí.

Každá zmena hladiny, v paneli alebo príkazom, je jeden krok späť: {{key:Mod+Z}} ju vráti.

## Práca s hladinami výberom objektov

Nemusíte poznať názov hladiny: vyberte na nej objekt. Zadajte príkaz alebo otvorte {{ui:Nástroje}} v hornej časti panela {{ui:Hladiny}}.

| Príkaz | Čo robí |
|---|---|
| {{cmd:LAYISO}} | Vyberte objekty a stlačte {{key:Enter}}: zostanú zapnuté iba ich hladiny, všetky ostatné hladiny sa vypnú. Ak sa vypne aktuálna hladina, jedna z izolovaných hladín sa stane aktuálnou. |
| {{cmd:LAYUNISO}} | Znova zapne hladiny, ktoré vypol posledný {{cmd:LAYISO}}, a vráti aktuálnu hladinu, ktorú zmenil. |
| {{cmd:LAYOFF}} | Klikajte na objekty jeden za druhým: hladina každého z nich sa vypne. Zadajte `U` na vrátenie posledného, {{key:Enter}} na dokončenie. |
| {{cmd:LAYFRZ}} | Rovnaké, ale zmrazí hladinu každého objektu. |
| {{cmd:LAYMCUR}} | Kliknite na objekt: jeho hladina sa stane aktuálnou (a zapne sa a rozmrazí). Ak je už vybraný jeden objekt, použije sa on. |
| {{cmd:LAYON}} | Zapne všetky hladiny. |
| {{cmd:LAYTHW}} | Rozmrazí všetky hladiny. |

Aktuálna hladina sa týmto spôsobom nikdy nevypne ani nezmrazí: história to hlási a najprv môžete nastaviť inú hladinu ako aktuálnu príkazom {{cmd:LAYMCUR}}. Pri výbere odkazu na blok sa použije hladina samotného odkazu.

## Premenovanie, zlúčenie a zmazanie hladín

- {{cmd:RENAME}}: zadajte `LA`, starý názov a nový. Každý objekt na hladine ho nasleduje. (`B` premenuje blok rovnakým spôsobom, so všetkými odkazmi na neho.)
- {{cmd:LAYMRG}}: kliknite na objekt na každej hladine, ktorú chcete zlúčiť (alebo zadajte `N` a názov), stlačte {{key:Enter}}, potom vyberte cieľovú hladinu a odpovedzte `Y`. Objekty sa presunú do cieľovej hladiny – v modeli, na listoch aj vnútri blokov – a zlúčené hladiny zaniknú.
- {{cmd:LAYDEL}}: vyberte objekt na hladine (alebo `N` a jej názov) a odpovedzte `Y`. Hladina zanikne **spolu so všetkými objektmi na nej**, všade. Hladinu 0, DEFPOINTS ani aktuálnu hladinu nemožno zmazať.

Každé je jeden krok späť. Všetky tri sú v {{ui:Nástroje}} v hornej časti panela {{ui:Hladiny}}.

1. Kliknite na jednu čiaru steny, potom zadajte `LAYISO` a stlačte {{key:Enter}}. Zostane zapnutá iba Walls.
2. Nakreslite alebo upravte, čo potrebujete, na Walls.
3. Zadajte `LAYUNISO` a stlačte {{key:Enter}}. Doors a Notes sa vrátia.

## Časté chyby

- **Nové čiary sú na zlej hladine.** Pred kreslením skontrolujte, ktorá bodka je vyplnená. Nová hladina sa stane aktuálnou hneď po pridaní.
- **Objekt sa nedá vybrať.** Jeho hladina je zamknutá, vypnutá alebo zmrazená.
- **Hladina sa stále tlačí v inom programe.** DXF R12 nedokáže uložiť "netlačiť". CadCraft si nastavenie zachová sám, keď má výkres list, ale iné programy túto hladinu vytlačia.
- **Názvy hladín sú po uložení veľkými písmenami.** DXF R12 ukladá názvy veľkými písmenami, takže `Walls` sa vráti ako `WALLS` a medzery sa zmenia na `_`. Uložený DWG zachová názvy tak, ako ste ich napísali.
- **Premenovanie, zlúčenie alebo zmazanie hladiny.** Použite {{cmd:RENAME}}, {{cmd:LAYMRG}} alebo {{cmd:LAYDEL}} (tiež v {{ui:Nástroje}}): pozri nižšie.

## Zoskupenie hladín

Zoznam udržte krátky tak, že hladiny uložíte do priečinkov, napríklad Existujúce, Navrhované a Inžinierske siete. Každý priečinok sa dá zbaliť a jeho prepínače zapnú alebo vypnú, zmrazia alebo zamknú všetky jeho hladiny naraz. Aktuálna hladina sa nikdy nevypne.

V {{ui:Nástroje}} na paneli {{ui:Hladiny}} zvoľte {{ui:Pridať hotové skupiny}} pre súbor pripravený na malé obytné práce, {{ui:Zoskupiť podľa názvu}}, ak chcete zoskupiť hladiny so spoločnou predponou (`E-Walls`, `E-Doors`), alebo {{ui:Nová skupina}}. Presuňte hladinu na priečinok alebo použite zoznam nad hladinami pre aktuálnu hladinu. Zadajte text do {{ui:Nájsť hladinu}}, aby ste zúžili zoznam. `LAYGROUP` (`LG`) robí to isté na príkazovom riadku.

Samotné hladiny sa nemenia, takže ich ostatné CAD programy vidia ako obyčajný plochý zoznam. CadCraft skupiny uchováva v súbore.
