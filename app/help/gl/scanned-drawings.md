---
title: Debuxos escaneados e o trazado
summary: Traer unha folla escaneada, escalala e endereitala, limpala, borrar partes dela, enganchar ás súas liñas e trazala en liñas e arcos.
keywords: escaneo, debuxo escaneado, ráster, tiff, jpeg, png, escala, aliñar, endereitar, eliminar motas, limiar, preto e branco, recortar, borrar, trazar, vectorizar, enganche, arcos, trama, debuxos en papel, debuxos antigos, scanattach, scantrace
from: 36227e5b
---

## Dunha folla de papel a obxectos do debuxo

Un debuxo escaneado é unha imaxe. CadCraft conserva a imaxe que lle deu e nunca a modifica: cada paso de limpeza crea unha imaxe nova, cun paso de desfacer cada un, e {{cmd:SCANINFO}} enumera o ficheiro orixinal e os pasos dados desde entón. Non se envía nada a ningures e ningún modelo adestrado adiviña nada: a limpeza e o trazado son procesamento de imaxe corrente, e executanse no seu ordenador.

1. **Insírao.** {{cmd:SCANATTACH}} lê un PNG, un JPEG, un TIFF (unha páxina, ou todas as páxinas dun ficheiro de varias páxinas) ou unha páxina PDF que sexa unha imaxe. Pregunta pola páxina, a esquina inferior esquerda e o ancho. No caso dunha páxina PDF, pregunta tamén cantos píxeles por polgada se debuxa a páxina.
2. **Escalar.** {{cmd:SCANSCALE}}: escolla dous puntos no escaneo e despois escriba a distancia real entre eles. A folla escálase arredor do primeiro punto.
3. **Aliñar.** {{cmd:SCANALIGN}}: escolla dous puntos no escaneo e os dous lugares aos que pertencen; a folla se despraza e xira para encaixar, e tamén escala, a menos que responda Non.
4. **Endereitar.** {{cmd:SCANDESKEW}} mide o ángulo das liñas longas da folla e mostrao, xunto con canto seguro está. Acepte o ángulo ou escriba o seu propio, e a folla xírase. Unha folla con poucas liñas longas recibe un aviso: comprobe o ángulo antes de aceptalo.
5. **Limpar.** {{cmd:SCANCLEAN}} pasa a folla a preto e branco (Auto iguala primeiro o papel; Adaptativo segue máis de cerca as variacións do papel; Nivel é un único número para toda a folla) e elimina as motas ata o tamaño que fixo.
6. **Recortar e borrar.** {{cmd:SCANCROP}} conserva unha xanela. {{cmd:SCANERASE}} borra un rectángulo, un polígono ou un lazo (prema e arrastre): selos, notas, unha marca de café.

A imaxe limpa é o que garda un DWG gardado (un IMAGE e o seu IMAGEDEF, co ficheiro da imaxe xunto ao debuxo, como en calquera imaxe).

## Enganchar ás liñas do escaneo

Con {{cmd:RASTERSNAP}} activado (por defecto), os enganches a obxectos tamén atopan as liñas dun escaneo en preto e branco: os extremos das liñas, os seus puntos medios, as esquinas e os cruzamentos, mostrados coas marcas de enganche habituais. A parte da folla que está baixo o punteiro trázase segundo se move; achegue o zoom o suficiente para que un píxel ocupe uns poucos píxeles da pantalla. Unha liña máis longa que a parte que se traza séguese ata os seus extremos.

## O trazado

{{cmd:SCANTRACE}} convirte as liñas da folla en liñas e arcos nunha capa nova (SCAN-TRACE), como un só paso de desfacer, co escaneo aínda debaixo. Vostede define:

- **Tolerancia:** a que distancia pode estar unha liña ou arco trazado das liñas do escaneo, en unidades do debuxo (o informe tamén dá píxeles). Unha tolerancia estreita segue cada irregularidade; unha folgada fai menos pezas, máis rectas.
- **Xanela:** unha esquina da folla, ou toda a folla.
- **Arcos:** desactivado fai só liñas.
- **Restos:** o que o trazado deixa sen tocar debúxase como caixas nunha capa que pode desactivar, ou non se debuxa.

O trazado atopa o centro de cada trazo, sígueo, axusta liñas rectas e arcos circulares, une tramos que se cortaron onde cruzaba outra liña, fai exactamente horizontais e verticais as liñas case horizontais e case verticais, e pecha as esquinas. **O texto e a trama quedan como ráster:** as pezas do tamaño de rotulación apártanse, e os feixes de liñas curtas paralelas tómanse por trama e apártanse.

Ao terminar, indica cantas liñas e arcos creou, a tolerancia e cantas pezas deixou como ráster. **Isto é o que deron os píxeles, con esa tolerancia, e non é unha afirmación de que o resultado sexa correcto.** Compárello coa folla: un trazado pode perder unha liña tenue, unir dúas liñas moi próximas ou debuxar unha liña onde só hai unha mancha. Limpe primeiro o escaneo (endereitado, en preto e branco, sen motas) e o resultado mellorará moito.

## O que non lee

Rexéitanse, con unha mensaxe, os ficheiros TIFF almacenados en teselas, BigTIFF, TIFF con compresión JPEG ou deflate, codificación de fax Grupo 3 e cores gardadas en planos separados; gárdeos de novo en tiras con LZW, PackBits, Grupo 4 ou sen compresión. Os PNG entrelazados tamén se rexeitan. Os ficheiros de máis de 128 MB ou de 100 millóns de píxeles rexéitanse, e unha xanela de trazado pode ter como máximo 64 millóns de píxeles.
