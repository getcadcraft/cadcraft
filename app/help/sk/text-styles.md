---
title: Nastavenie písma a veľkosti textu pomocou textových štýlov
summary: Vytvorte pomenované textové štýly s písmom, výškou, šírkou a sklonom, nastavte jeden ako aktuálny pre nový text a zmeňte štýl, aby sa zmenil všetok text, ktorý ho používa.
keywords: textový štýl, štýl, STYLE, ST, TEXTSTYLE, -STYLE, písmo, výška textu, činiteľ šírky, sklon, zmena písma, štandardný štýl, použitie štýlu, DDSTYLE
from: bd5a4883
---

## Čo urobíte

Vytvoríte textový štýl s názvom `Poznámky` s vlastným písmom a výškou, použijete ho pre nový text a neskôr zmeníte štýl, aby sa každá poznámka, ktorá ho používa, zmenila naraz.

## Postup

1. Napíšte {{cmd:STYLE}} (`ST`) a stlačte {{key:Enter}}, alebo kliknite na {{ui:Textový štýl}} na paneli {{ui:Kreslenie}}. Dialóg {{ui:Textový štýl}} zobrazuje štýly vo výkrese. Každý výkres má `Štandardný`.
2. Kliknite na {{ui:Nový…}}, napíšte `Poznámky` ako názov nového štýlu a kliknite na {{ui:OK}}. Stavový riadok hlási: „Textový štýl Poznámky bol vytvorený a nastavený ako aktuálny.“
3. V {{ui:Písmo}} vyberte alebo napíšte názov písma. Nastavte {{ui:Výška (0 = pýtať sa pri každom texte)}} na číslo, napríklad `2.5`, aby každý nový text mal túto výšku. Ponechajte `0`, aby ste sa pýtali zakaždým.
4. Nastavte {{ui:Činiteľ šírky}} a {{ui:Uhol sklonu (°)}}, ak chcete užšie, širšie alebo šikmé písmená. Ukážkový riadok zobrazí výsledok.
5. Kliknite na {{ui:Zavrieť (C)}}. Text kreslite príkazom {{cmd:TEXT}} alebo {{cmd:MTEXT}}: nový text preberie aktuálny štýl.
6. Ak chcete použiť štýl, ktorý ste už vytvorili, otvorte dialóg znova, vyberte ho v zozname a kliknite na {{ui:Nastaviť aktuálny}}.
7. Ak chcete dať štýl na už nakreslený text, vyberte text, otvorte dialóg, vyberte štýl a kliknite na {{ui:Použiť na vybraný text}}.

## Zmena štýlu neskôr

Zmeňte písmo, výšku, šírku alebo sklon štýlu v dialógu a všetok text, ktorý ho používa, sa zmení za ním, v jednom kroku späť ({{key:Mod+Z}}). Stavový riadok hovorí, koľko textov sa zmenilo.

## Poznámky

- {{ui:Zmazať}} odmietne `Štandardný` a štýl, ktorý ešte používa text: najprv zmeňte ten text na iný štýl.
- Štýly sa ukladajú do tabuľky STYLE výkresu, takže súbory DXF a DWG si ich zachovajú.
- Na riadku príkazov `-STYLE` robí to isté s voľbami (Aktuálny, Nový, Písmo, Výška, Šírka, Sklon, Zmazať, Zoznam).
- Písmo, ktoré nie je na počítači, na ktorom sa výkres číta, sa zobrazí iným písmom.
