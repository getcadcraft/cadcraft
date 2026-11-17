---
title: Enviar un debuxo a un láser
summary: Abra o panel Láser, escolla o que fai cada capa (cortar, marcar, gravar, encher, imaxe), vexa a previsualización dos movementos do cabezal, garde o G-code de modo láser GRBL, ou envíeo desde o navegador despois de enmarcar o traballo.
keywords: láser, cortadora láser, gravadora láser, GRBL, G-code, gcode, gravar, encher, tramado, gravado de imaxe, marcar, cortar, Web Serial, enmarcar o traballo, potencia, velocidade, pasadas, LASER, LASERCUT, CNC
from: 72b56db0
---

O panel {{ui:Láser}} converte as capas dun debuxo nun programa para un láser que usa GRBL (a maioría dos controladores de díodo e CO2 para afeccionados e pequenos talleres). Escriba `LASER` (ou `LASERCUT`) e prema {{key:Enter}}, ou escolla {{ui:Láser…}} no menú {{ui:Máis}} do grupo {{ui:Vista}}. Nos estilos de cinta está no menú {{ui:Ficheiro}} e xunto a {{ui:Trazar}}. O panel ábrese sobre o debuxo e queda aberto mentres debuxa: a vista previa segue cada cambio.

:::warning
Probe cada axuste en retallos antes, use protección ocular adecuada para o seu láser, manteña a tapa pechada onde a haxa, e nunca deixe un láser en funcionamento sen vixilancia. Os números cos que empeza unha capa son marcadores de posición, non recomendacións para ningún material.
:::

## Que se envía

O panel le o modelo (non as follas), nas capas que están activadas e descongeladas:

- Liñas, arcos, círculos, polilíneas (os segmentos en arco seguen sendo arcos), elipses e splines. Unha forma que remata onde comeza conta como pechada.
- Os bloques desmóntanse: un obxecto na capa 0 dentro dun bloque vai coa capa da referencia do bloque.
- Unha trama envía o seu contorno, así que un logotipo con trama nunha capa de **Encher** queda cheo.
- Unha imaxe (`IMAGEATTACH`) grávase nunha capa definida en **Gravar imaxe**, cando está en cuadrado (sen xirar nin inclinar) e o seu ficheiro está aberto en CadCraft.
- Os textos, cotas, indicadores, puntos e liñas de construción non se envían; o panel indica cantos deixou fóra. Para queimar texto, debuxe as letras como formas ou faga tramas delas.

Os tamaños envíanse en milímetros a partir das unidades do debuxo (`UNITS`): un debuxo en polgadas multiplícase por 25,4. Un debuxo sen unidades definidas envíase cun unidade por cada milímetro. Marque {{ui:Só os obxectos seleccionados}} para enviar parte do debuxo.

## Escolla o que fai cada capa

Cada capa con algo debuxado é unha fila. {{ui:Fai}} define a capa como **Cortar**, **Marcar**, **Gravar liñas**, **Encher formas**, **Gravar imaxe** ou **Non enviar**, con {{ui:Potencia %}}, {{ui:Velocidade mm/min}} e un número de {{ui:Pasadas}}. Cada cambio é un paso de desfacer e gárdase no debuxo: DWG (todas as versións que CadCraft garda) e DXF conservan os axustes, así que o debuxo ábrese con eles a próxima vez. Outros programas abren o ficheiro como antes; ven un bloque sen uso chamado CADCRAFT_LASER (purgalo alí elimina os axustes).

- **Encher** queima o interior das formas pechadas con liñas, separadas {{ui:Interlineado}}, a un {{ui:Ángulo}}, en ambos sentidos ou nun só, cun sobrerrecorrido para que o cabezal vaia a velocidade cando se acende o láser; a trama cruzada engade unha segunda pasada a 90°. Unha forma cun furo queda aberta no furo.
- **Gravar imaxe** converte unha imaxe en puntos (Floyd–Steinberg, Atkinson, ordenado, ou simplemente branco e negro cun limiar) ou, con *Niveis de gris*, en potencia variable.
- Orde: primeiro imaxes e recheos, despois gravado de liñas, despois marcas, despois cortes, para que unha peza recortada non se mova mentres se grava. Dentro dunha capa os camiños van **de dentro cara a fóra** (un furo antes da placa en que está), e o máis próximo despois.

## Previsualizar, despois gardar

A vista previa debuxa o que fai o cabezal: as liñas que queiman, en cor; os movementos rápidos, en gris; e unha caixa verde arredor de todo o que queima. Debaixo están o tamaño, a lonxitude de queima e unha estimación de tempo (sen aceleración; unha máquina real tarda máis). {{ui:Gardar G-code…}} escribe G-code de modo láser GRBL: `$32=1`, `M4` (ou `M3`) con valores S, movementos `G0` e `G1`, e `M5` ao final. X0 Y0 é a esquina inferior esquerda do traballo, salvo que escolla a orixe do debuxo: estableza aí o cero de traballo da súa máquina.

## Enviar desde o navegador

En Chrome e Edge, {{ui:Conectar…}} pide que escolla o porto USB do láser. Non se conecta nin envía nada ata que prema un botón. Prema primeiro {{ui:Enmarcar o traballo}}: o cabezal traza a caixa do traballo co láser **apagado** (ou á baixa potencia que defina para un punteiro), para que vexa onde queimará. Só entón se activa {{ui:Enviar traballo}}, e apágase de novo se cambia algo. {{ui:Pausar}} detén o cabezal; {{ui:Parar}} tamén o detén, reinicia o controlador (o láser apágase) e envía `M5`. Onde falta Web Serial (Firefox, Safari e CadCraft Studio, que aínda non ten Web Serial), o panel ofrece só gardar: garde o G-code e envíeo co programa propio do seu láser.

## Aínda non está feito

Aínda non está feito: formatos doutros controladores (Ruida, láseres Marlin, ficheiros do fabricante), lengüetas e entradas, compensación de kerf, bibliotecas de materiais, eixos rotativos e eixo Z, aliñación por cámara, texto como contornos.
