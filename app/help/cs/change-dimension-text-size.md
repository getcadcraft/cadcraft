---
title: Změna velikosti textu kót
summary: Zvětšete nebo zmenšete text kót, a to pro nové kóty i pro ty, které už jsou ve výkresu.
keywords: velikost textu kóty, výška textu, dimtxt, dimscale, text kóty je příliš malý, text kóty je příliš velký, větší text kóty, měřítko anotací
from: 30e40633
---

## Pro kóty, které nakreslíte příště

1. Stiskněte {{key:Esc}}, aby nic nebylo vybráno: pravý panel ukazuje {{ui:Aktuální nastavení}}.
2. Posuňte panel dolů na {{ui:Nové kóty}}. Napište výšku, kterou chcete na papíře, do {{ui:Výška textu}} (například `2.5` pro 2.5 mm, nebo `3/32"`) a stiskněte {{key:Enter}}.
3. Nastavte {{ui:Celkové měřítko}} na měřítko tisku (`50` pro 1:50, `48` pro 1/4" = 1'-0"): každá velikost se jím vynásobí.

Na příkazovém řádku {{cmd:DIMTXT}} nastavuje výšku a {{cmd:DIMSCALE}} celkové měřítko.

## Pro kóty už ve výkresu

1. Vyberte kóty (jednu, nebo více: zvolte {{ui:Kóta}} v seznamu nahoře v {{ui:Vlastnosti}}).
2. Napište novou {{ui:Výšku textu}} (v sekci {{ui:Text}}), nebo nové {{ui:Celkové měřítko}} (v sekci {{ui:Umístění}} níže), a stiskněte {{key:Enter}}.

Kóty se překreslí okamžitě, v jednom kroku zpět. Kóta ze souboru jiného programu se po změně překreslí ve stylu CadCraftu.

:::tip
Text, který je na obrazovce správný, ale na vytištěném listu drobný, obvykle znamená, že celkové měřítko je 1: nastavte jej na měřítko listu.
:::

Viz [Nastavení velikostí, desetinných míst a měřítka kót](topic:dimension-settings) pro každé nastavení.
