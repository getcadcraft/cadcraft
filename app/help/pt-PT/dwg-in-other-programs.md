---
title: Abrir um DWG do CadCraft noutros programas
summary: Em que programas foi aberto um DWG guardado pelo CadCraft, o que é verificado e o que fazer quando um deles se queixa.
keywords: dwg, abrir noutros programas, compatibilidade, abre ou não, auditoria, trueview, outros programas CAD, dxf, verificar, guardar como dwg
from: 0f8c15c4
---

## O que o CadCraft escreve

{{ui:Guardar}} escreve um DWG real, na versão em que o desenho entrou ou na que escolher em {{ui:Guardar como}}: AutoCAD 2000, 2004, 2007, 2010, 2013 ou 2018. Nada é convertido às escondidas: o histórico lista tudo o que mudou pelo caminho (por exemplo, uma cor verdadeira escrita como a cor padrão mais próxima num DWG 2000).

## Onde foi aberto

Cada DWG que o CadCraft escreve é aberto, em todas as versões, por três programas que não são o CadCraft: o ODA File Converter (que verifica o ficheiro e não repara nada nele), o LibreDWG e o libdxfrw. A leitura deles é comparada com a do CadCraft: objetos, camadas, blocos e atributos, cotas, tramas, folhas e respetivos viewports.

Abrir os ficheiros DWG do CadCraft no AutoCAD e no DWG TrueView gratuito está a ser verificado no Windows, tipo de objeto a tipo de objeto (AUDIT, camadas, folhas, cotas, tramas, atributos, blocos dinâmicos, referências recortadas, imagens). Os resultados serão listados aqui quando estiverem prontos.

## Quando outro programa se queixa

1. Guarde de novo como DXF ({{ui:Guardar como}} › {{ui:DXF 2000}}) e abra esse: a maioria dos programas lê DXF.
2. Guarde o DWG numa versão anterior (2013 ou 2010).
3. Diga-nos no Discord qual o programa e a versão, e o que disse; o ficheiro ajuda mais.
