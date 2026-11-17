---
title: Unitats en importar: un fitxer indica les seves unitats, o se us pregunta abans
summary: Quan un fitxer que porteu a un dibuix indica les seves unitats, CadCraft les converteix i ho diu. Quan no ho fa, CadCraft pregunta abans de col·locar res, i recorda la vostra resposta per a aquell fitxer.
keywords: unitats, importa, insereix, xref, adjunta, XATTACH, INSERT, OBJ, DWG, DXF, núvol de punts, element de biblioteca, mil·límetres, metres, polzades, peus, escala, mida equivocada, massa gran, massa petita, 1000 vegades, pregunta, recordat, INSUNITS
from: 558f1293
---

## Què faràs

Porteu un fitxer a un dibuix i assegureu-vos que arriba a la mida correcta.

## Passos

1. Porteu el fitxer com de costum: `INSERT` › Fitxer, `XATTACH`, `POINTCLOUDATTACH`, o {{ui:Fitxers}} al panell Biblioteca.
2. Si el fitxer indica les seves unitats, no es demana res. La línia d'ordres diu quines unitats indica el fitxer, i l'escala que s'aplica quan són diferents de les del dibuix.
3. Si no les indica, un diàleg pregunta les **Unitats de** del fitxer. Trieu quina és una unitat al fitxer i feu clic a {{ui:Fes servir aquestes unitats}}. No es col·loca res abans de la vostra resposta.
4. {{ui:Cancel·la}} (o {{key:Esc}}) no porta res.

## Quins fitxers indiquen les unitats

- **DWG i DXF**: les unitats d'inserció del dibuix (`$INSUNITS`). Un fitxer sense elles es pregunta.
- **Núvols de punts**: els LAS i LAZ amb un sistema de coordenades, E57, PTX i PLY indiquen les seves. Els altres es pregunten.
- **OBJ**: mai no indiquen unitats. Se us pregunta.
- **glTF i GLB**: metres, segons la regla del propi format.
- **Imatges**: no tenen mida pròpia. `IMAGEATTACH` demana l'amplada, i ofereix l'amplada que heu donat abans a aquell fitxer.
- **Escanejos**: un escaneig que indica la seva densitat (punts per polzada) entra a la seva mida real en les unitats del dibuix; `SCANATTACH` encara demana l'amplada.
- **El complement de Núvols de punts**: pregunta quan construeix un núvol el fitxer del qual no indica cap unitat, i etiqueta els números del núvol amb la unitat que porta.

## Bones de saber

- Obrir un DWG o DXF com a dibuix propi no demana res: la línia d'ordres diu quines unitats indica el fitxer, o que no n'indica cap. {{ui:Propietats}} defineix les unitats d'un dibuix.
- Quan aquest dibuix tampoc no té unitats, un fitxer no es pot convertir: es col·loca número per número, i la línia d'ordres ho diu.
- La resposta es recorda per a aquest fitxer en aquest ordinador, en totes les aplicacions de CadCraft. La pròxima vegada que entri no se us pregunta, i la línia d'ordres diu que s'han fet servir les unitats recordades.
- Per tornar a preguntar: la paleta d'ordres ({{key:Mod+K}}) › **Torna a preguntar les unitats dels fitxers importats**.
