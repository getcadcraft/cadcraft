---
title: Zmena veľkosti textu kóty
summary: Zväčšite alebo zmenšite text kóty, pre nové kóty aj pre tie, ktoré sú už vo výkrese.
keywords: veľkosť textu kóty, výška textu, dimtxt, dimscale, text kóty je príliš malý, text kóty je príliš veľký, väčší text kóty, mierka anotácie
from: 30e40633
---

## Pre kóty, ktoré vytvoríte ďalej

1. Stlačte {{key:Esc}}, aby nič nebolo vybrané: pravý panel zobrazuje {{ui:Aktuálne nastavenia}}.
2. Posuňte panel nadol k {{ui:Nové kóty}}. Napíšte výšku, akú chcete na papieri, do {{ui:Výška textu}} (napríklad `2.5` pre 2.5 mm alebo `3/32"`) a stlačte {{key:Enter}}.
3. Nastavte {{ui:Celková mierka}} na mierku vykreslenia (`50` pre 1:50, `48` pre 1/4" = 1'-0"): každá veľkosť sa ňou vynásobí.

V príkazovom riadku {{cmd:DIMTXT}} nastavuje výšku a {{cmd:DIMSCALE}} celkovú mierku.

## Pre kóty, ktoré sú už vo výkrese

1. Vyberte kóty (jednu alebo viac: v zozname hore vo Vlastnostiach vyberte {{ui:Kóta}}).
2. Napíšte novú {{ui:Výška textu}} (v sekcii {{ui:Text}}), alebo novú {{ui:Celková mierka}} (v sekcii {{ui:Prispôsobenie}} nižšie), a stlačte {{key:Enter}}.

Prekreslia sa hneď, v jednom kroku späť. Kóta zo súboru iného programu sa prekreslí v štýle CadCraft hneď, ako ju zmeníte.

:::tip
Text, ktorý je na obrazovke správny, ale na vytlačenom liste drobný, zvyčajne znamená, že celková mierka je 1: nastavte ju na mierku listu.
:::

Pozri [Nastavenie veľkostí kót, desatinných miest a mierky](topic:dimension-settings) pre každé nastavenie.
