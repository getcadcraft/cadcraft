---
title: Imatges en un dibuix
summary: Col·loqueu una imatge PNG o JPEG, retalleu-la a un rectangle o un polígon, mostreu les imatges que utilitza un DWG, i traceu-les nítides.
keywords: pastearea, parea, copia d'àrea, àrea copiada, markupcraft, mida real, superposició, ole, ole2frame, objecte incrustat, enganxa imatge, enganxa captura, ctrl+v, imatge del porta-retalls, captura de pantalla, imatge, imageattach, iat, imageclip, retall, clip, png, jpeg, jpg, logotip, foto, mapa de bits, imagedef, xref, traça, pdf, resolució
from: 4025ac97
---

## Què crearàs

Un logotip d'empresa col·locat en un caixetí, retallat a la part que voleu, i un PDF en què s'imprimeix a la seva pròpia resolució.

## Col·loca una imatge

1. Escriviu {{cmd:IMAGEATTACH}} (o `IAT`) i premeu {{key:Enter}}. Trieu un fitxer PNG o JPEG.
2. `Specify the lower-left corner`: feu clic, o escriviu un punt.
3. `Specify its width`: l'amplada en unitats de dibuix. {{key:Enter}} manté l'amplada oferta: una unitat per píxel, o l'amplada que heu donat a aquest fitxer la darrera vegada (la indicació diu quina).
4. `Specify its rotation angle`: {{key:Enter}} per no tenir-ne cap.

La imatge és un sol objecte: seleccioneu-la pel seu marc, i mogueu-la, copieu-la, gireu-la, escaleu-la o esborreu-la com qualsevol bloc.

:::note
El fitxer de la imatge es queda amb el dibuix mentre està obert. Un DWG desat conté el nom del fitxer, com fan altres programes; no conté els píxels. Mantingueu la imatge al costat del dibuix.
:::

## Enganxa una captura de pantalla o una imatge copiada

1. Copieu la imatge (una captura de pantalla amb {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=la vostra eina de captura de pantalla}}, o Copia la imatge en un altre programa o en un navegador).
2. Apunteu on ha d'anar al dibuix i premeu {{key:Mod+V}}.

La cantonada inferior esquerra de la imatge cau al punter (o al centre de la vista), amb un 40 % de l'amplada del que veieu; moveu-la, escaleu-la i retalleu-la com qualsevol altra imatge. El seu nom és el del dibuix amb `-picture-1.png` (després `-2`, …), i l'historial ho diu. {{ui:Edita}} › {{ui:Més}} › {{ui:Enganxa una imatge}} fa el mateix des del menú (el navegador pot preguntar primer).

Un DWG només conserva el nom del fitxer d'una imatge, de manera que desar el dibuix també desa la imatge com al seu propi fitxer. Mantingueu els dos a la mateixa carpeta: el dibuix mostra la imatge des d'allà. Al navegador això és una segona baixada, i l'historial ho diu. Amb només objectes de CadCraft al porta-retalls, {{key:Mod+V}} els enganxa, com abans.

## Enganxa una àrea copiada a MarkupCraft

{{ui:Copia l'àrea}} a MarkupCraft copia una part d'un full com una imatge que sap quina mida té. CadCraft l'enganxa a aquesta mida.

1. A MarkupCraft, copieu l'àrea (un rectangle, un cercle o una forma lliure; {{ui:Copia com a superposició}} si voleu veure el dibuix a través seu).
2. A CadCraft, premeu {{key:Mod+V}}, o escriviu {{cmd:PASTEAREA}} (o `PAREA`), o trieu {{ui:Edita}} › {{ui:Més}} › {{ui:Enganxa una àrea copiada}}.
3. `Specify the lower-left corner of the copied area`: feu clic, o escriviu un punt. Un marc de la mida de l'àrea segueix el punter.

Com de gran es col·loca:

- **El full tenia una escala de dibuix:** a la seva mida real, en les unitats del dibuix (un detall 1:50 d'una escala de 2 m fa 2 m de llarg en un dibuix en metres, 78.74 en un dibuix en polzades). No es demana res més.
- **El full no tenia escala:** CadCraft diu la seva mida al paper i demana una escala: escriviu `100` per a un full 1:100, premeu {{key:Enter}} per a la mida del paper, o escriviu `P`, feu clic a dos punts de la imatge enganxada i escriviu la distància real entre ells (tal com fa {{cmd:SCANSCALE}}). La cantonada inferior esquerra es queda on l'heu posada.

Un dibuix sense unitats pren mil·límetres, igual que un subjacent PDF. Una superposició manté el seu paper transparent i comença tan esvaïda com estava quan es va copiar; fora d'un cercle o d'una forma lliure també és transparent. L'àrea enganxada és una imatge com qualsevol altra: mogueu-la, gireu-la, escaleu-la, retalleu-la o esborreu-la, i tot l'enganxament és un sol pas de desfer. Desada com a DWG és una IMAGE amb el seu esvaïment i transparència.

{{key:Mod+V}} enganxa l'àrea quan la imatge del porta-retalls és de l'àrea, o quan l'àrea es va copiar després de qualsevol cosa que hàgiu copiat a CadCraft (i en les últimes 6 hores). Si no, s'enganxa com abans. {{cmd:PASTEAREA}} enganxa l'última àrea copiada en qualsevol moment.

## Mostra les imatges que utilitza un DWG

Un DWG només desa on eren les seves imatges, de manera que CadCraft mostra cada una com un marc amb el seu nom de fitxer.

1. Escriviu {{cmd:IMAGE}} (o `IM`). La línia d'ordres llista cada fitxer d'imatge i si es mostra.
2. Trieu els fitxers (diversos alhora). També compta un fitxer el nom del qual conté el que anomena el dibuix, perquè les exportacions sovint hi afegeixen un prefix de projecte.

## Retalla una imatge

1. Escriviu {{cmd:IMAGECLIP}} (o `ICL`) i seleccioneu la imatge.
2. Trieu `R` i feu clic a dues cantonades, o `P` i feu clic als punts d'un polígon, i després {{key:Enter}}. `D` elimina el retall.

## Traça les imatges

Les imatges entren al PDF com a imatges, a la seva pròpia resolució i per sota de les línies. Al diàleg {{ui:Traça}}, {{ui:Imatges}} pot limitar-les a 600, 300 o 150 dpi per fer el fitxer més petit. Un JPEG hi entra tal qual.

## On es desa cada cosa

| Format | Imatges |
|---|---|
| DWG (totes les versions) | Com a imatges (IMAGE), amb el seu retall |
| DXF | Com als seus marcs amb el nom del fitxer; el desament ho diu |

## Objectes d'altres programes (OLE)

Un dibuix pot contenir objectes que un altre programa ha creat, com una imatge d'un programa de pintura o un rang d'un full de càlcul (objectes OLE). CadCraft no els executa ni els edita, i no pot inserir-ne de nous. Això és el que fa:

- **En un DXF**, un objecte OLE s'obre com un marc. Si l'objecte va desar una imatge de si mateix i aquesta imatge és un mapa de bits, la imatge es dibuixa dins del marc; si no, el marc porta una etiqueta amb el tipus de l'objecte, com "Microsoft Excel Worksheet (OLE)". Podeu moure, copiar i esborrar el marc com un bloc. {{cmd:SAVEAS}} a DXF 2000 l'escriu de nou com a objecte OLE, amb les seves dades sense canvis.
- **En un DWG**, els objectes es conserven i s'escriuen de nou en desar com a DWG, byte per byte, però **no es mostren**: un DWG conserva el lloc d'un objecte dins de les seves pròpies dades, i CadCraft encara no el llegeix. L'historial diu quants n'ha conservat. Escriviu {{cmd:OLELIST}} per veure què són (tipus, mida, si cadascun va desar una imatge) i per posar una còpia d'una imatge on trieu: **Col·loca** demana el número, la cantonada inferior esquerra i l'amplada, i dibuixa un marc amb la imatge a dins. Aquella còpia és un marc que podeu moure o esborrar; l'objecte es queda al dibuix i encara s'escriu en desar.
- Un objecte que venia d'un DXF es desa en un DWG només com el seu marc i la seva etiqueta; l'historial ho diu. Deseu com a DXF 2000 per conservar l'objecte mateix.
- Les imatges que són metafitxers (el que desen molts programes) no es dibuixen: en el seu lloc es mostren el marc i l'etiqueta.

## Errors habituals

| Veieu | Per què | Solució |
|---|---|---|
| Un marc amb un nom de fitxer | CadCraft no té el fitxer | {{cmd:IMAGE}}, i després trieu el fitxer |
| "Això no és una imatge" | L'objecte triat no és una imatge | Trieu el marc de la imatge |
