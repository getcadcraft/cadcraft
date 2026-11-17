---
title: Debuxar texto coas túas fontes SHX
summary: Dea a CadCraft un cartafol de fontes SHX (ou escolla os ficheiros) e os estilos de texto que as nomean debúxanse con elas, na pantalla e na impresión ou PDF, coa altura, o factor de ancho e a inclinación do estilo.
keywords: shx, fontes, fonte, fonte de forma, big font, bigfont, unifont, herdado, persa, farsi, árabe, estilo de texto, fonte que falta, fonte substituída, SHXFONTS, cartafol, inverter, orde visual, simplex, isocp
from: 14b0a4ab
---

Os debuxos doutros programas adoitan nomear **fontes SHX** nos seus estilos de texto, e un DWG non as inclúe. Sen a fonte, CadCraft debuxa ese texto coa súa propia tipografía, o que está ben para o texto latino corrente, pero non para as fontes antigas que asignan códigos de carácter simples a outras formas de letra, como as anotacións persas herdadas.

Dea a CadCraft as fontes e debuxará o texto con elas.

## Cargar as fontes

Escriba {{cmd:SHXFONTS}} (`SHX`) e escolla:

- {{ui:Cartafol}} (CadCraft Studio): escolla un cartafol. Cada ficheiro `.shx` que contén lese agora, e de novo cada vez que se inicia CadCraft.
- {{ui:Ficheiros}} (o navegador): escolla un ou varios ficheiros `.shx`. Gárdanse neste navegador e non se envían nunca.
- {{ui:Listar}}: as fontes cargadas, e as que o debuxo aberto nomea pero que vostede non cargou.
- {{ui:Retirar}} e {{ui:Limpar}}: esquecer unha fonte, ou todas.

CadCraft non pode incluír fontes de terceiros, así que nunca as envía: proceden de vostede. Un debuxo só nomea as súas fontes, e non garda copia delas.

## Que ocorre

O nome da fonte dun estilo de texto emparéllase cunha fonte cargada polo seu nome, sen distinguir maiúsculas, o cartafol nin `.shx` (`SIMPLEX.SHX` atopa `simplex`). Un texto dese estilo debúxase como liñas, na pantalla, na impresión e no PDF, no seu propio lugar, altura, rotación, factor de ancho e ángulo de oblicuidade. O seu ancho é o da propia fonte, así que o alineamento {{ui:Centro}} e {{ui:Dereita}}, o axuste de liña e a selección coinciden co que ve. Un estilo cuxa fonte non está cargada conserva a tipografía integrada, e cando abre un debuxo que nomea fontes que vostede non cargou, a liña de comandos indícao.

O estilo Standard tamén conta: un debuxo cuxo estilo Standard nomea unha fonte propia conserva esa fonte.

## Fontes xa en orde visual

Moitas fontes SHX antigas persas e árabes conteñen letras xa formadas para a pantalla e debuxadas de esquerda a dereita, así que un texto escrito en orde lóxica sae ao revés. Escriba {{cmd:SHXFONTS}}, escolla {{ui:Inverter (R)}}, e nomee a fonte: o seu texto dispóñse entón desde a última letra. Execútao de novo para desfacelo. O interruptor pertence á fonte, gárdase neste navegador e non se garda no debuxo.

## Aínda sen cubrir

- O texto con códigos de formato en liña (cores, apilados nun MTEXT) queda na tipografía integrada.
- As big fonts (as de dobre byte) completan os códigos que lle faltan á fonte principal, pero un texto dunha páxina de códigos do Leste asiático que CadCraft xa converteu a Unicode non se asigna de novo aos códigos de dobre byte da fonte.
- O lector de fontes segue a descrición publicada do formato e probouse con fontes feitas para CadCraft. Se algunha das súas debuxa mal, envíenos a fonte e o debuxo.
