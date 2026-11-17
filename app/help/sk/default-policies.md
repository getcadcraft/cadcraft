---
title: "Predvolené zásady: nastavte, s čím sa začína nový výkres"
summary: Raz určite, s akými jednotkami, formátom dĺžky, presnosťou, výškou textu a formátom papiera listu sa začína nový výkres, pre metrickú aj imperiálnu prácu, a zdieľajte zásady v kancelárii ako malý súbor.
keywords: predvolené, predvolené hodnoty, predvolené zásady, zásada, kancelársky štandard, kancelárske predvolené hodnoty, šablóna, nový výkres, jednotky, insunits, formát dĺžky, architektonický, presnosť, luprec, výška textu, papier listu, a1, zdieľať, export, import, json
from: 7b80fd13
---

## Čo budete robiť

Povedzte CadCraft, s čím by sa mal nový výkres začínať, aby nikto v kancelárii nemusel spúšťať UNITS a meniť stále tie isté veci. Ide o doplnok: je vypnutý, kým ho nezapnete, a zásada, ktorú nenastavíte, ponechá predvolenú hodnotu CadCraft presne tak, ako je.

:::note
Ide o predvolené hodnoty pre **nové** výkresy a **nové** listy. Výkres, ktorý ste už začali, sa nezmení, rovnako ako výkres, ktorý otvoríte.
:::

## Postup

1. Otvorte {{ui:Nastavenia}}, prejdite na {{ui:Doplnky}} a zapnite {{ui:Predvolené zásady}}.
2. V Nastaveniach otvorte kartu **CadCraft** a v zozname vľavo vyberte {{ui:Predvolené zásady}}.
3. Nastavte zásady, ktoré chcete. Každá začína na **vlastnej hodnote CadCraft**. Zásada s poľom **Metrické** a **Imperiálne** má jednu hodnotu pre každý druh výkresu; vyplňte len tie, ktoré potrebujete.
4. Tlačidlo Uložiť nie je: každá zmena sa uloží hneď, ako ju urobíte.
5. Začnite nový výkres. Bude mať jednotky, formát dĺžky, presnosť a výšku textu, ktoré ste nastavili, a jeho prvý nový list bude na papieri, ktorý ste zvolili.

## Zásady

- **Jednotky nového výkresu**: žiadne, milimetre, centimetre, metre, palce alebo stopy.
- **Formát dĺžky** a **Presnosť dĺžky**: to, čo nastavuje príkaz UNITS, pre nový výkres.
- **Výška nového textu** v jednotkách výkresu.
- **Papier nového listu**: papier, ktorý používa Nový list.
- **Veľkosti poznámok na papieri** (Nastavenia › Globálne › Predvolené zásady): výšky kancelárie v milimetroch, ako sa tlačia. CadCraft používa tú pre poznámky a popisy: {{cmd:ANNOSCALE}} nastaví výšku, s ktorou nový text začína, na túto výšku pri mierke poznámok. Pozri [Jednotky, formáty papiera a mierky](topic:units-papers-scales#annotate-by-scale).

Výkres v palcoch alebo stopách používa imperiálne hodnoty; každý iný výkres používa metrické. Výkres bez jednotiek používa systém jednotiek nastavený v Nastavenia › Globálne › Predvolené zásady, alebo metrický, keď nie je nastavený žiadny.

## Zdieľanie v kancelárii

1. V Nastaveniach otvorte kartu **Globálne** a vyberte {{ui:Predvolené zásady}}.
2. Kliknite na {{ui:Uložiť do súboru}}. Dostanete malý súbor s príponou `.ccdefaults.json`.
3. Na inom počítači zapnite doplnok, otvorte to isté miesto a kliknite na {{ui:Načítať zo súboru}}. Zásady zo súboru nahradia zásady na tomto počítači.

Jeden súbor obsahuje zásady každej aplikácie CadCraft, takže rovnaký súbor funguje aj v BimCraft.

## Dobré vedieť

- Pre mierku listu neexistuje zásada: pohľad nového listu sa prispôsobí výkresu a mierku nastavíte na liste.
- Pre štýl kót neexistuje zásada: nový výkres nemá pomenované štýly kót. Kóty nastavte pomocou DIMSTYLE alebo začnite z výkresu, ktorý váš štýl obsahuje.
- Súbor je obyčajný, otvorený JSON. Zásada, ktorú súbor uvádza a táto verzia nepozná, sa vynechá a uvedie sa v hlásení; zvyšok sa načíta.
- Zásady sa uchovávajú v tomto prehliadači, nie vo výkrese. Vypnite doplnok a všetko sa vráti na predvolené hodnoty CadCraft.
