---
title: Apila plantes en un sol dibuix
summary: Dibuixa la primera planta per sobre de la planta baixa amb les mateixes coordenades, i desactiva cada planta, sense Xrefs.
keywords: planta, plantes, FLOORS, FLR, FLOOR, FLOORLAYERS, nivell, apilar, capa de disseny, espai model, subjacent, xref
from: 7440fc87
---

Les plantes permeten apilar plànols en un sol espai model. Cada planta té els seus propis objectes, i les capes continuen funcionant en totes. Un mur a `P-Walls` pot estar en qualsevol planta.

## Inici

Escriviu `FLOORS` (`FLR`), o trieu {{ui:Plantes…}} al menú {{ui:Més}} del grup {{ui:Vista}}, i després trieu {{ui:Comença amb plantes}}. El que heu dibuixat fins ara va a la planta baixa.

## Dibuixar en una planta

Trieu la planta amb el botó rodó del tauler. Els objectes nous van a aquesta planta.

Les altres plantes que són visibles es mostren esvaïdes sota. Hi podeu fer referència a objectes, de manera que la primera planta s'alinea amb la planta baixa, però no les podeu canviar fins que les feu la planta activa. L'ull desactiva una planta. Els murs només s'uneixen amb murs de la seva pròpia planta.

Per començar una planta a partir de la de sota, seleccioneu el que voleu, trieu la planta al tauler i premeu {{ui:Copia-ho allà}}.

## Posa plantes en fulls

Seleccioneu una finestra gràfica en un full i trieu la seva planta a {{ui:Planta mostrada}} a Propietats. Una finestra gràfica sense planta triada mostra totes les plantes que estan activades.

## Envia el fitxer a una altra persona

Altres programes de CAD no coneixen les plantes, de manera que les mostren totes juntes. Abans d'enviar un fitxer, trieu {{ui:Converteix les plantes en capes}} al tauler, o escriviu `FLOORLAYERS`. Cada objecte passa a una capa amb el nom de la seva planta, com `Planta baixa-P-Walls`, de manera que encara puguin desactivar cada planta. Desfer ho reverteix. CadCraft conserva les plantes al fitxer DWG o DXF que desa.
