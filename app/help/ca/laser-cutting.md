---
title: Envia un dibuix a un làser
summary: Obriu el tauler Làser, trieu què fa cada capa (tallar, ratllar, gravar, omplir, imatge), previsualitzeu els moviments del capçal, deseu el G-code en mode làser GRBL, o envieu-lo des del navegador després d'emmarcar el treball.
keywords: làser, tallador làser, gravador làser, GRBL, G-code, gcode, gravar, omplir, dither, gravat d'imatge, ratllar, tallar, Web Serial, emmarca el treball, potència, velocitat, passades, LASER, LASERCUT, CNC
from: 72b56db0
---

El tauler {{ui:Làser}} converteix les capes d'un dibuix en un programa per a un làser que funciona amb GRBL (la majoria de controladors de díode i CO2 d'aficionats i petits tallers). Escriviu `LASER` (o `LASERCUT`) i premeu {{key:Enter}}, o trieu {{ui:Làser…}} al menú {{ui:Més}} del grup {{ui:Vista}}. En els estils amb cinta és al menú {{ui:Fitxer}} i al costat de {{ui:Traça}}. El tauler s'obre sobre el dibuix i es queda obert mentre dibuixeu: la vista prèvia segueix cada canvi.

:::warning
Proveu cada ajustament primer amb una peça de rebuig, porteu ulleres de protecció adequades al vostre làser, mantingueu la tapa tancada quan n'hi hagi, i mai no deixeu un làser en marxa sense vigilar. Els números amb què comença una capa són valors de marcador de posició, no recomanacions per a cap material.
:::

## Què s'envia

El tauler llegeix el model (no els fulls), a les capes que són activades i descongelades:

- Línies, arcs, cercles, polilínies (els segments d'arc es mantenen com a arcs), el·lipses i splines. Una forma que acaba on comença es compta com a tancada.
- Els blocs es desmunten: un objecte de la capa 0 dins d'un bloc va amb la capa de la referència de bloc.
- Una trama envia el seu contorn, de manera que un logotip amb trama en una capa **Omple formes** queda omplert.
- Una imatge (`IMAGEATTACH`) es grava en una capa configurada a **Grava imatge**, quan és dreta (no girada ni inclinada) i el seu fitxer és obert a CadCraft.
- El text, les cotes, les línies de crida, els punts i les línies de construcció no s'envien; el tauler diu quants n'ha deixat fora. Per gravar text, dibuixeu les lletres com a formes o useu-hi trama.

Les mides surten en mil·límetres a partir de les unitats del dibuix (`UNITS`): un dibuix en polzades es multiplica per 25.4. Un dibuix sense unitats definides s'envia a una unitat per mil·límetre. Marqueu {{ui:Només els objectes seleccionats}} per enviar una part del dibuix.

## Trieu què fa cada capa

Cada capa amb alguna cosa és una fila. {{ui:Fa}} la defineix com a **Talla**, **Ratlla**, **Grava línies**, **Omple formes**, **Grava imatge** o **No s'envia**, amb una {{ui:Potència %}}, una {{ui:Velocitat mm/min}} i un nombre de {{ui:Passades}}.

Cada canvi és un pas de desfer i es desa al dibuix: els fitxers DWG (totes les versions que CadCraft desa) i DXF conserven els ajustaments, de manera que el dibuix s'obre amb ells la pròxima vegada. Els altres programes obren el fitxer com abans; hi veuen un bloc no usat anomenat CADCRAFT_LASER (purgar-lo allà elimina els ajustaments).

- **Omple formes** crema l'interior de les formes tancades amb línies separades per {{ui:Interlineat}}, a un {{ui:Angle}}, en totes dues direccions o en una, amb un recorregut excedent perquè el capçal vagi a velocitat quan s'encén el làser; la trama creuada afegeix una segona passada a 90°. Una forma amb un forat queda oberta en el forat.
- **Grava imatge** converteix una imatge en punts (Floyd–Steinberg, Atkinson, ordenat, o simplement blanc i negre amb un llindar) o, amb *Nivells de gris*, en potència variable.
- Ordre: primer les imatges i els omplerts, després el gravat de línies, després les ratlles, i després els talls, perquè una peça tallada no es mogui mentre se n'està gravant. Dins d'una mateixa capa, els trajectes van **primer per dins** (un forat abans de la placa on és), i el més proper després.

## Previsualitza, després desa

La vista prèvia dibuixa què fa el capçal: les línies que es graven, en color; els moviments ràpids, en gris; i una caixa verda al voltant de tot el que es grava. Sota hi ha la mida, la longitud de la gravació i una estimació del temps (sense acceleració; una màquina real triga més). {{ui:Desa el G-code…}} escriu G-code en mode làser GRBL: `$32=1`, `M4` (o `M3`) amb valors S, moviments `G0` i `G1`, i `M5` al final. X0 Y0 és el cantó inferior esquerre del treball, tret que trieu l'origen del dibuix: definiu-hi el zero de treball de la vostra màquina.

## Envia des del navegador

A Chrome i Edge, {{ui:Connecta…}} us demana que trieu el port USB del làser. No es connecta ni s'envia res fins que premeu un botó. Premeu {{ui:Emmarca el treball}} primer: el capçal traça la caixa del treball amb el làser **apagat** (o a la potència baixa que hàgiu definit per a un punter), perquè pugueu veure on gravarà. Només llavors s'activa {{ui:Envia el treball}}, i es desactiva de nou si canvieu alguna cosa. {{ui:Pausa}} atura el capçal, {{ui:Atura}} també el manté aturat, reinicia el controlador (el làser s'apaga) i envia `M5`. On falta Web Serial (Firefox, Safari, i CadCraft Studio, que encara no té Web Serial), el tauler només ofereix desar: deseu el G-code i envieu-lo amb el programa propi del vostre làser.

## Encara no implementat

Encara no implementat: formats d'altres controladors (Ruida, làsers de Marlin, fitxers de fabricants), pestanyes de subjecció i entrades de tall, desfasament de la ranura (kerf), biblioteques de materials, eixos rotatius i Z, alineació amb càmera, text com a contorns.
