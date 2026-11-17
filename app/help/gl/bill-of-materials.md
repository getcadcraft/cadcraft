---
title: Listas de materiais por zona
summary: Marque áreas do debuxo como zonas e coloque unha táboa para cada unha que conte os bloques de dentro. As táboas seguen o debuxo á medida que traballa, e vostede escolle que columnas amosa cada unha.
keywords: lista de materiais, BOM, lista de pezas, cadro, zona, área, táboa, contar, cantidade, atributo, columnas, número de elemento, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

Unha **zona** é unha área con nome do debuxo. Unha **táboa de lista de materiais** enumera o que hai dentro dunha zona, ou en todo o debuxo: cada bloque coa súa cantidade e os seus valores de atributo. Un debuxo pode ter tantas zonas e táboas como precise, e unha zona pode ter varias táboas con columnas distintas.

As ferramentas están na pestana Bloques baixo {{ui:Lista de materiais}}, no menú Máis do grupo Bloques, e pódense escribir.

## Crear unha zona

Escriba {{cmd:BOMZONE}} e:

- prema dúas esquinas opostas para un rectángulo,
- escolla {{ui:Polígono}}, prema cada esquina e prema Enter para pechalo, ou
- escolla {{ui:Obxecto}} e seleccione unha polilínea pechada, un círculo, unha elipse ou unha spline pechada. Copíase o seu contorno; o obxecto queda como está.

Despois escriba o nome da zona. A zona debúxase cun contorno a trazos, con o seu nome enriba da esquina superior esquerda, na capa `BOM-ZONES`, que non se imprime. Active a impresión desa capa se quere as zonas no papel.

Unha zona é unha polilínea pechada normal: muévaa, estírea ou arrastre os seus agarres, e o nome segue. Para cambiar o nome dunha zona, edite o texto do nome, ou use {{cmd:BOMZONE}} e {{ui:Renomear}}. {{ui:Zonas}} enumera todas as zonas e cantas táboas teñen.

## Colocar unha táboa

Escriba {{cmd:BOMTABLE}} (ou {{cmd:BOM}}), seleccione o contorno da zona ou o seu nome, indique a altura do texto e prema onde vai a esquina superior esquerda da táboa. Prema Enter en vez de seleccionar unha zona, ou escolla {{ui:Completa}}, para unha táboa de todo o debuxo.

Unha táboa nova mostra o número de elemento, a cantidade, o nome do bloque e unha columna para cada atributo que levan os bloques (os primeiros seis; os demais ofrécense sen marcar). Os bloques co mesmo nome e os mesmos valores de atributo comparten unha fila.

## Que conta como dentro

- Un bloque conta na zona que contén o seu **punto de inserción**.
- Unha liña, arco, círculo, polilínea, elipse, spline ou trama conta **enteira** na zona que contén o centro da súa extensión (para unha liña, o seu punto medio). A súa lonxitude non se corta na beira da zona.
- Un punto exactamente na beira está dentro.
- As zonas poden solaparse. Cada zona conta por si mesma, así que un obxecto na zona de solapamento está nas dúas táboas.

## As táboas seguen o debuxo

Cando engade, mova, copie ou elimine un bloque, edite un atributo, ou reforme ou mova unha zona, todas as táboas se redebuxan no mesmo paso. Desfacer desfai á vez a súa edición e o cambio da táboa.

Para que unha táboa deixe de seguir o debuxo, marque {{ui:Conxelada}} nos seus axustes. Unha táboa conxelada cambia só cando edita os seus axustes ou escribe {{cmd:BOMUPDATE}}, que actualiza todas as táboas no momento.

## Escoller as columnas

Seleccione unha táboa e escriba {{cmd:BOMEDIT}}. No cadro de diálogo:

- **Columnas**: marque as que se han amosar (elemento, cantidade, nome, capa, lonxitude, área, observacións e cada atributo), escriba un encabezado propio para calquera delas, e mova cara arriba ou cara abaixo.
- {{ui:Agrupar filas por}}: nome do bloque e valores de atributo, só nome do bloque, capa, ou un atributo. Nunha fila combinada, un valor que difire entre bloques le «varía».
- {{ui:Ordenar por}} calquera columna, ascendente ou descendente.
- {{ui:Título}}, {{ui:Mostrar o título}} e {{ui:Fila de totais}}.
- {{ui:Contar liñas por capa}} engade unha fila por capa co número de obxectos, a súa lonxitude total e, para as formas pechadas, a súa área total, en unidades do debuxo.
- **Observacións**: marque a columna Observacións e despois escriba unha observación para calquera fila na táboa da parte inferior do cadro de diálogo.

Cada táboa conserva as súas propias opcións.

## Números de elemento

Unha fila conserva o seu número de elemento mentres estea na táboa. Unha fila nova toma o seguinte número libre, e un número que xa se deu non se volve usar, así que os globos e as notas que citan un número seguen correctos. {{ui:Renumerar elementos}} numbéraos desde 1 na orde mostrada.

Unha fila recoñécese polo que agrupa: se cambia como se agrupan as filas, ou cambia un valor de atributo que usa a agrupación, a fila conta como unha nova.

## Exportar e outros programas

{{cmd:BOMEXPORT}}, ou {{ui:Exportar CSV}} no cadro de diálogo, garda unha táboa como ficheiro .csv para unha folla de cálculo.

Nun ficheiro DWG ou DXF unha táboa é un bloque normal de liñas e texto, así que outros programas a mostran e a imprimen tal como se debuxou. Alí non é un obxecto táboa, e non se actualiza noutros programas. A ligazón á súa zona consérvase no ficheiro como datos de extensión que CadCraft lle de novo, así que a táboa volve estar activa ao reabrir o debuxo en CadCraft. Un DXF R12 dun debuxo sen folla non conserva o axuste «non se imprime» da capa da zona.

Descompoñer unha táboa convértea en liñas e texto soltos e remata a ligazón.
