---
title: Obre un DWG de CadCraft en altres programes
summary: Amb quins programes s'ha obert un DWG desat per CadCraft, què es comprova i què fer quan un d'ells es queixa.
keywords: dwg, obrir en altres programes, compatibilitat, s'obre, auditoria, trueview, altres programes de CAD, dxf, comprova, desa com a dwg
from: 0f8c15c4
---

## Què escriu CadCraft

{{ui:Desa}} escriu un DWG real, en la versió amb què ha arribat el dibuix o la que trieu a {{ui:Anomena i desa}}: AutoCAD 2000, 2004, 2007, 2010, 2013 o 2018. No es converteix res sense avisar: l'historial enumera tot el que ha canviat pel camí (per exemple, un color real escrit com el color estàndard més proper en un DWG del 2000).

## On s'ha obert

Cada DWG que escriu CadCraft s'obre, en totes les versions, per tres programes que no són CadCraft: l'ODA File Converter (que comprova el fitxer i no en repara res), LibreDWG i libdxfrw. La seva lectura es compara amb la de CadCraft: objectes, capes, blocs i atributs, cotes, trames, fulls i les seves finestres gràfiques.

Obrir fitxers DWG de CadCraft a AutoCAD i al DWG TrueView gratuït s'està comprovant a Windows, tipus d'objecte per tipus d'objecte (AUDIT, capes, fulls, cotes, trames, atributs, blocs dinàmics, referències retallades, imatges). Els resultats s'enumeraran aquí quan hi siguin.

## Quan un altre programa es queixa

1. Torneu a desar com a DXF ({{ui:Anomena i desa}} › {{ui:DXF 2000}}) i obriu-lo: la majoria de programes llegeixen DXF.
2. Deseu el DWG en una versió anterior (2013 o 2010).
3. Digueu-nos a Discord quin programa i quina versió és i què ha dit; el fitxer és el que més ajuda.
