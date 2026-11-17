---
title: Otočenie pohľadu a vlastné súradnice (UCS)
summary: Otočte pohľad o 90° alebo na ľubovoľný uhol bez presunu čohokoľvek vo výkrese a nastavte používateľský súradnicový systém (UCS), aby body, ortogonálne kreslenie, polárne sledovanie, mriežka a nový text sledovali vlastné osi budovy.
keywords: ucs, používateľský súradnicový systém, pôdorys, otočenie pohľadu, otočiť pohľad, skrútenie pohľadu, ucs z, ucs 3point, ucs object, ucs world, pomenovaný ucs, ucsfollow, turnleft, turnright, turnworld, šikmá budova, otočená mriežka
from: 6f152c65
---

## Čo sa naučíte

Ako sa pozerať na otočený výkres, aby budova nakreslená v uhle vyzerala na obrazovke pravouhlo, a ako písať body pozdĺž jej vlastných osí. Pri tom sa nič vo výkrese nehýbe: objekty si zachovajú svoje súradnice, otočenie nie je úprava a výkres nie je označený ako zmenený.

## Otočenie pohľadu o štvrtinu

1. Kliknite na {{ui:Pohľad}} › {{ui:Viac}} › {{ui:Otočiť pohľad o 90° vľavo}} alebo {{ui:Otočiť pohľad o 90° vpravo}}.

Výkres sa na obrazovke otočí okolo stredu kresliacej oblasti. Ak chcete pokračovať v otáčaní, urobte to znova.

2. Kliknite na {{ui:Pohľad}} › {{ui:Viac}} › {{ui:Späť do sveta}}, čím ho znova vyrovnáte.

Za nimi stoja príkazy {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} a {{cmd:TURNWORLD}}. Ak chcete niektorému priradiť klávesu, pridajte do aliasov pomocou {{cmd:ALIASEDIT}} riadok ako `TL=TURNLEFT`.

## Zarovnanie so šikmou budovou

1. Napíšte `UCS` a stlačte {{key:Enter}}, potom `OB` a {{key:Enter}}.
2. Kliknite na čiaru steny blízko konca, ktorý má byť počiatkom.

UCS teraz začína na tom konci, jeho os X ide pozdĺž steny a pohľad sa otočí tak, aby bola stena na obrazovke vodorovná. Ikona osí v ľavom dolnom rohu ukazuje, kam smerujú osi UCS.

3. Kreslite obvyklým spôsobom. Keď je UCS nastavený:
   - `x,y` a `@dx,dy` sa merajú pozdĺž osí UCS; `d<a` meria uhol od osi X UCS.
   - {{ui:Ortho}}, polárne sledovanie a mriežka sledujú osi UCS, rovnako ako kurzor.
   - Nový text a nové odseky idú pozdĺž osi X UCS; vodorovná a zvislá časť {{cmd:DIMLINEAR}} ju tiež sledujú.
   - Súradnice v stavovom riadku a z {{cmd:ID}} sú súradnice UCS.
4. Ak chcete napísať bod sveta, keď je nastavený UCS, pred neho dajte `*`: `*0,0` alebo `@*100,0`.
5. Napíšte `UCS`, {{key:Enter}}, potom znova {{key:Enter}}, čím sa vrátite do sveta.

## Ďalšie spôsoby nastavenia UCS

Pri výzve {{cmd:UCS}}:

| Napíšete | Čo to urobí |
|---|---|
| bod | Nový počiatok; potom kliknite na bod na novej osi X, alebo stlačte {{key:Enter}}, aby sa uhol zachoval |
| `Z` | Otočí UCS okolo jeho počiatku o uhol, ktorý napíšete (stupne, proti smeru hodinových ručičiek), alebo ho vyberiete |
| `3` (tri body) | Počiatok, bod na kladnej osi X a bod na strane kladnej osi Y |
| `OB` (Objekt) | Z čiary, oblúka, kružnice, úseku lomenej čiary, textu, odkazu na blok, bodu alebo konštrukčnej čiary |
| `P` (Predchádzajúci) | UCS pred týmto (posledných desať sa uchováva, kým je výkres otvorený) |
| `W` (Svet) | Späť do sveta |
| `NA` (Pomenovaný) | `S` uloží aktuálny UCS pod názvom, `R` obnoví jeden, `D` zmaže jeden, `?` ich vypíše |

Každá zmena otočí pohľad tak, aby bola nová os X UCS vodorovná. {{cmd:PLAN}} otočí pohľad bez zmeny UCS: {{key:Enter}} pre aktuálny UCS, `U` pre uložený, `W` pre svet.

## Dobré vedieť

- Každá časť rozdelenej obrazovky si drží vlastné otočenie. UCS patrí k výkresu.
- Listy pracujú v súradniciach papiera; nastavte UCS na karte {{ui:Model}}, alebo vnútri výrezu.
- Výberové okná ťahané v otočenom pohľade vyberú to, čo na obrazovke leží vnútri nich.
- Rutiny LISP dostávajú body v UCS z `getpoint`, môžu čítať `UCSORG`, `UCSXDIR`, `UCSYDIR` a `VIEWTWIST` a `trans` prevádza medzi svetom, UCS a zobrazením.

:::note
Uložený súbor si UCS a otočenie pohľadu zachová v neskoršom zostavení; dovtedy vydržia, kým je výkres otvorený.
:::
