---
title: Ändra storlek på måttext
summary: Gör måttext större eller mindre, för nya mått och för de som redan finns i ritningen.
keywords: måttextens storlek, texthöjd, dimtxt, dimscale, måttext för liten, måttext för stor, större måttext, annoteringsskala
from: 30e40633
---

## För de mått du gör härnäst

1. Tryck på {{key:Esc}} så att inget är markerat: den högra panelen visar {{ui:Aktuella inställningar}}.
2. Rulla ned i panelen till {{ui:Nya mått}}. Skriv den höjd du vill ha på papperet i {{ui:Texthöjd}} (till exempel `2.5` för 2,5 mm, eller `3/32"`) och tryck på {{key:Enter}}.
3. Ställ in {{ui:Total skala}} till utskriftsskalan (`50` för 1:50, `48` för 1/4" = 1'-0"). Varje storlek multipliceras med den.

På kommandoraden anger {{cmd:DIMTXT}} höjden och {{cmd:DIMSCALE}} den totala skalan.

## För mått som redan finns i ritningen

1. Markera måtten (ett eller flera: välj {{ui:Mått}} i listan överst i Egenskaper).
2. Skriv en ny {{ui:Texthöjd}} (i avsnittet {{ui:Text}}), eller en ny {{ui:Total skala}} (i avsnittet {{ui:Passning}} längre ned), och tryck på {{key:Enter}}.

De ritas om direkt, i ett ångra-steg. Ett mått från ett annat programs fil ritas om i CadCraft-stil så snart du ändrar det.

:::tip
Text som ser rätt ut på skärmen men är mycket liten på det utskrivna bladet beror oftast på att den totala skalan är 1. Ställ in den till bladets skala.
:::

Se [Ange måttstorlek, decimaler och skala](topic:dimension-settings) för alla inställningar.
