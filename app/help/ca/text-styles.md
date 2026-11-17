---
title: Definir la tipografia i la mida del text amb estils de text
summary: Crear estils de text amb nom amb una tipografia, alçada, amplada i inclinació, definir-ne un com a actual per al text nou, i canviar un estil per canviar tot el text que l'utilitza.
keywords: estil de text, estil, STYLE, ST, TEXTSTYLE, -STYLE, tipus de lletra, alçada del text, factor d'amplada, inclinació, canviar tipus de lletra, estil estàndard, aplicar estil, DDSTYLE
from: bd5a4883
---

## Què fareu

Crear un estil de text anomenat `Notes` amb la seva pròpia tipografia i alçada, usar-lo per al text nou i, més tard, canviar l'estil perquè totes les notes que l'utilitzen canviïn alhora.

## Passos

1. Escriviu {{cmd:STYLE}} (`ST`) i premeu {{key:Enter}}, o feu clic a {{ui:Estil de text}} a la barra d'eines {{ui:Dibuix}}. El diàleg {{ui:Estil de text}} llista els estils del dibuix. Tots els dibuixos tenen `Standard`.
2. Feu clic a {{ui:Nou…}}, escriviu `Notes` com a nom del nou estil i feu clic a {{ui:D'acord}}. La línia d'estat diu "Estil de text Notes creat i definit com a actual."
3. A {{ui:Tipus de lletra}}, trieu o escriviu un nom de tipografia. Definiu {{ui:Alçada (0 = demana-la cada vegada)}} amb un nombre, com `2.5`, perquè tot el text nou tingui aquella alçada. Deixeu-la a `0` si voleu que us la demani cada vegada.
4. Definiu {{ui:Factor d'amplada}} i {{ui:Angle d'inclinació (°)}} si voleu lletres més estretes, més amples o inclinades. La línia d'exemple mostra el resultat.
5. Feu clic a {{ui:Tanca (C)}}. Dibuixeu text amb {{cmd:TEXT}} o {{cmd:MTEXT}}: el text nou pren l'estil actual.
6. Per fer servir un estil que ja heu creat, torneu a obrir el diàleg, trieu-lo a la llista i feu clic a {{ui:Estableix com a actual}}.
7. Per aplicar un estil a un text ja dibuixat, seleccioneu el text, obriu el diàleg, trieu l'estil i feu clic a {{ui:Aplica al text seleccionat}}.

## Canviar un estil més tard

Canvieu el tipus de lletra, l'alçada, l'amplada o la inclinació d'un estil al diàleg i tot el text que l'utilitza ho segueix, en un sol pas de desfer ({{key:Mod+Z}}). La línia d'estat indica quants textos han seguit el canvi.

## Notes

- {{ui:Suprimeix}} no permet `Standard`, ni un estil que encara utilitzi algun text: canvieu primer aquest text a un altre estil.
- Els estils es desen a la taula STYLE del dibuix, de manera que els fitxers DXF i DWG els conserven.
- A la línia d'ordres, `-STYLE` fa el mateix amb opcions (Current, New, Font, Height, Width, Oblique, Delete, List).
- Un tipus de lletra que no és a l'ordinador que llegeix el dibuix es mostra amb un altre tipus de lletra.
