---
title: Keisti matmenų teksto dydį
summary: Padarykite matmenų tekstą didesnį arba mažesnį – naujiems matmenims ir tiems, kurie jau yra brėžinyje.
keywords: matmenų teksto dydis, teksto aukštis, dimtxt, dimscale, matmenų tekstas per mažas, matmenų tekstas per didelis, didesnis matmenų tekstas, anotacijos mastelis
from: 30e40633
---

## Naujiems matmenims, kuriuos sukursite

1. Paspauskite {{key:Esc}}, kad nieko nebūtų pažymėta: dešinysis skydelis rodo {{ui:Current settings}}.
2. Slinkite skydelį žemyn iki {{ui:New dimensions}}. Įveskite norimą aukštį popieriuje {{ui:Text height}} (pvz., `2.5` 2,5 mm, arba `3/32"`) ir paspauskite {{key:Enter}}.
3. Nustatykite {{ui:Overall scale}} į spausdinimo mastelį (`50` reiškia 1:50, `48` – 1/4" = 1'-0"): kiekvienas dydis padauginamas iš jo.

Komandinėje eilutėje {{cmd:DIMTXT}} nustato aukštį, o {{cmd:DIMSCALE}} – bendrą mastelį.

## Jau brėžinyje esantiems matmenims

1. Pasirinkite matmenis (vieną arba kelis: sąraše viršuje {{ui:Properties}} skydelyje pasirinkite {{ui:Dimension}}).
2. Įveskite naują {{ui:Text height}} (skiltyje {{ui:Text}}) arba naują {{ui:Overall scale}} (žemiau esančioje skiltyje {{ui:Fit}}) ir paspauskite {{key:Enter}}.

Jie iškart perbraižomi vienu atšaukimo žingsniu. Kitos programos failo matmuo perbraižomas CadCraft stiliumi, kai tik jį pakeičiate.

:::tip
Tekstas, kuris ekrane atrodo tinkamas, bet atspausdintame lape labai mažas, paprastai reiškia, kad {{ui:Overall scale}} lygus 1: nustatykite jį į lapo mastelį.
:::

Visus nustatymus žr. [Matmenų dydžių, dešimtainių skaičių ir mastelio nustatymas](topic:dimension-settings).
