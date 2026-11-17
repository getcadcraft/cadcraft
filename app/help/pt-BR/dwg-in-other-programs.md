---
title: Abrir um DWG do CadCraft em outros programas
summary: Em quais programas um DWG salvo pelo CadCraft foi aberto, o que é verificado e o que fazer quando um deles reclama.
keywords: dwg, abrir em outros programas, compatibilidade, ele abre, audit, trueview, outros programas CAD, dxf, verificar, salvar como dwg
from: 0f8c15c4
---

## O que o CadCraft grava

{{ui:Save}} grava um DWG real, na versão em que o desenho foi aberto ou na que você escolher em {{ui:Save as}}: AutoCAD 2000, 2004,
2007, 2010, 2013 ou 2018. Nada é convertido sem que você saiba: o histórico lista qualquer coisa que tenha mudado no processo (por
exemplo, uma cor verdadeira gravada como a cor padrão mais próxima em um DWG 2000).

## Onde ele foi aberto

Todo DWG que o CadCraft grava é aberto, em todas as versões, por três programas que não são o CadCraft: o ODA File Converter (que
verifica o arquivo e não repara nada nele), o LibreDWG e o libdxfrw. A leitura deles é comparada com a do CadCraft: objetos, camadas,
blocos e atributos, cotas, hachuras, folhas e suas viewports.

Abrir os arquivos DWG do CadCraft no AutoCAD e no DWG TrueView gratuito está sendo verificado no Windows, tipo de objeto por tipo de objeto (AUDIT, camadas, folhas, cotas, hachuras, atributos, blocos dinâmicos, referências recortadas, imagens). Os resultados serão listados aqui quando estiverem prontos.

## Quando outro programa reclamar

1. Salve novamente como DXF ({{ui:Save as}} › {{ui:DXF 2000}}) e abra esse arquivo: a maioria dos programas lê DXF.
2. Salve o DWG em uma versão anterior (2013 ou 2010).
3. Conte-nos no Discord qual programa e versão, e o que ele disse; o arquivo ajuda mais do que tudo.
