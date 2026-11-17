---
title: Dibuixeu text amb les vostres fonts SHX
summary: Doneu a CadCraft una carpeta de fonts SHX (o trieu els fitxers) i els estils de text que les anomenen es dibuixen amb elles, a la pantalla i en un traçat o PDF, amb l'alçada, el factor d'amplada i la inclinació de l'estil.
keywords: shx, fonts, font, font de forma, big font, bigfont, unifont, antiga, persa, farsi, àrab, estil de text, font que falta, font substituïda, SHXFONTS, carpeta, invertit, ordre visual, simplex, isocp
from: 14b0a4ab
---

Els dibuixos d'altres programes sovint anomenen **fonts SHX** als seus estils de text, i un DWG no les porta. Sense la font, CadCraft dibuixa aquest text amb el seu propi tipus de lletra, cosa que és bé per al text llatí corrent però no per a les fonts antigues que assignen codis de caràcter simples a altres formes de lletra, com les anotacions perses antigues.

Doneu les fonts a CadCraft i dibuixarà el text amb elles.

## Carregueu les vostres fonts

Escriviu {{cmd:SHXFONTS}} (`SHX`) i trieu:

- {{ui:Carpeta}} (CadCraft Studio): trieu una carpeta. Cada fitxer `.shx` que hi hagi es llegeix ara, i de nou cada cop que s'inicia CadCraft.
- {{ui:Fitxers}} (el navegador): trieu un o diversos fitxers `.shx`. Es guarden en aquest navegador i mai no es pugen.
- {{ui:Llista}}: les fonts que estan carregades, i les que el dibuix obert anomena però que no heu carregat.
- {{ui:Elimina (R)}} i {{ui:Neteja}}: oblida una font, o totes.

CadCraft no pot incloure fonts de tercers, de manera que mai no n'envia cap: les teniu vosaltres. Un dibuix només anomena les seves fonts, i no guarda cap còpia d'elles.

## Què passa

El nom de la font d'un estil de text es fa coincidir amb una font carregada pel seu nom, sense distingir majúscules, carpeta ni `.shx` (`SIMPLEX.SHX` troba `simplex`). Un text en aquest estil es dibuixa com a línies, a la pantalla, en un traçat i en un PDF, al seu lloc, alçada, rotació, factor d'amplada i angle d'inclinació. La seva amplada és la de la pròpia font, de manera que l'alineació {{ui:Centre}} i {{ui:Dreta}}, el salt de línia i la selecció coincideixen amb el que veieu. Un estil la font del qual no està carregada manté el tipus de lletra integrat, i quan obriu un dibuix que anomena fonts que no heu carregat, la línia d'ordres ho diu.

L'estil Standard també compta: un dibuix l'estil Standard del qual anomena una font pròpia la conserva.

## Fonts ja en ordre visual

Moltes fonts SHX antigues en persa i àrab tenen lletres ja donades forma per a la pantalla i dibuixades d'esquerra a dreta, de manera que un text escrit en ordre lògic surt del revés. Escriviu {{cmd:SHXFONTS}}, trieu {{ui:Inverteix}}, i anomeneu la font: el seu text es disposa aleshores amb l'última lletra primer. Torneu a executar-ho per desfer-ho. El canvi pertany a la font, es guarda en aquest navegador i no es desa al dibuix.

## Què encara no es cobreix

- El text amb codis de format en línia (colors, apilats en un MTEXT) es manté amb el tipus de lletra integrat.
- Les big fonts (les de doble byte) suplen els codis que li falten a la font principal, però un text en una pàgina de codis d'Àsia oriental que CadCraft ja ha convertit a Unicode no es torna a assignar als codis de doble byte de la font.
- El lector de fonts segueix la descripció publicada del format i s'ha provat amb fonts fetes per a CadCraft. Si alguna de les vostres es dibuixa malament, envieu-nos la font i el dibuix.
