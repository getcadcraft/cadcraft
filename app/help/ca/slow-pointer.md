---
title: El punter salta o va amb retard sobre el dibuix
summary: Què cal fer quan la creueta no segueix el ratolí amb fluïdesa, en un ordinador antic o lent.
keywords: salt del cursor, retard del punter, creueta lenta, cursor a sacses, ordinador antic, targeta gràfica antiga, gràfics integrats, acceleració per maquinari, punter més fluid, portàtil lent
from: 39dc9057
---

CadCraft s'executa al navegador (CadCraft Studio també és una vista de navegador), de manera que res no està pensat per a una targeta gràfica o una altra. La creueta la dibuixa l'aplicació, cosa que vol dir que només pot moure's tan ràpid com l'aplicació pot dibuixar un fotograma.

## Deixar que CadCraft redueixi els extres

1. Obriu {{ui:Configuració}} (la roda dentada a dalt a la dreta) i quedeu-vos a la pestanya {{ui:CadCraft}}.
2. Trieu {{ui:Punter més fluid en ordinadors lents}}.
3. Seleccioneu {{ui:Activat}}.

Amb això activat, s'utilitza la creueta pròpia del vostre ordinador en lloc de la creueta dibuixada i la caixa de selecció (també la creueta de pantalla completa), i l'objecte que hi ha sota el punter s'il·lumina quan el punter queda quiet, en lloc de mentre es mou. Les referències a objectes, el seguiment i la goma funcionen igual que abans.

{{ui:Automàtica}} és com comença CadCraft: observa quant triguen els fotogrames mentre moveu el punter, i ho activa sol quan triguen massa durant uns quants segons. Us ho diu una vegada quan ho fa. {{ui:Desactiva}} manté la creueta dibuixada, sigui quina sigui la velocitat.

## Si continua lent

- Comproveu que l'acceleració per maquinari està activada al navegador: obriu `chrome://gpu` (o `edge://gpu`) en una pestanya nova. Si les primeres línies diuen "Software only" o "Disabled", el navegador dibuixa sense la targeta gràfica. Actualitzar el controlador gràfic sovint ho arregla.
- Tanqueu altres pestanyes i programes pesats, i proveu amb una finestra del navegador més petita.
- Informeu-nos-en mitjançant {{ui:Ajuda}}, {{ui:Informa d'un problema}}: digueu si useu el navegador o CadCraft Studio, la versió, i què diu la pàgina de gpu.
