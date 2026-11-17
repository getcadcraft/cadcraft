---
title: Schimbarea dimensiunii textului cotelor
summary: Faceți textul cotelor mai mare sau mai mic, pentru cotele noi și pentru cele deja existente în desen.
keywords: dimensiune text cotă, dimension text size, înălțime text, text height, dimtxt, dimscale, text cotă prea mic, text cotă prea mare, text cotă mai mare, scară de adnotare, annotation scale
from: 30e40633
---

## Pentru cotele pe care le faceți următoarele

1. Apăsați {{key:Esc}} ca să nu fie nimic selectat: panoul din dreapta arată {{ui:Current settings}}.
2. Derulați panoul în jos până la {{ui:New dimensions}}. Tastați înălțimea dorită pe hârtie în {{ui:Text height}} (de exemplu `2.5` pentru 2.5 mm sau `3/32"`) și apăsați {{key:Enter}}.
3. Setați {{ui:Overall scale}} la scara de trasare (`50` pentru 1:50, `48` pentru 1/4" = 1'-0"): fiecare dimensiune se înmulțește cu ea.

În linia de comandă, {{cmd:DIMTXT}} setează înălțimea, iar {{cmd:DIMSCALE}} scara generală.

## Pentru cotele deja existente în desen

1. Selectați cotele (una sau mai multe: alegeți {{ui:Dimension}} din lista de sus din Properties).
2. Tastați noua {{ui:Text height}} (în secțiunea {{ui:Text}}) sau o nouă {{ui:Overall scale}} (în secțiunea {{ui:Fit}}, mai jos), și apăsați {{key:Enter}}.

Se redesenează imediat, într-un singur pas de anulare. O cotă dintr-un fișier al altui program este redesenată în stilul CadCraft de îndată ce o modificați.

:::tip
Textul care este corect pe ecran, dar mic pe foaia trasată, înseamnă de obicei că scara generală este 1: setați-o la scara foii.
:::

Vezi [Setarea mărimilor cotelor, a zecimalelor și a scării](topic:dimension-settings) pentru fiecare setare.
