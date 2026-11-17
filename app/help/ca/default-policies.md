---
title: "Polítiques per defecte: definiu amb què comença un dibuix nou"
summary: Indiqueu una vegada amb quines unitats, format de longitud, precisió, alçada de text i paper de full comença un dibuix nou, tant per a treball mètric com imperial, i compartiu les polítiques per tota l'oficina com un petit fitxer.
keywords: per defecte, valors per defecte, polítiques per defecte, política, estàndard d'oficina, valors per defecte de l'oficina, plantilla, dibuix nou, unitats, insunits, format de longitud, arquitectònic, precisió, luprec, alçada de text, paper de full, a1, compartir, exportar, importar, json
from: 7b80fd13
---

## Què farà

Digueu a CadCraft amb què ha de començar un dibuix nou, de manera que ningú de l'oficina hagi d'executar UNITS i canviar les mateixes coses cada vegada. Això és un complement: està desactivat fins que l'activeu, i una política que no definiu deixa el valor per defecte de CadCraft exactament com és.

:::note
Són valors per defecte per als dibuixos **nous** i els fulls **nous**. Un dibuix que ja heu començat no canvia, ni tampoc un que obriu.
:::

## Passos

1. Obriu Configuració, aneu a {{ui:Complements}} i activeu {{ui:Polítiques per defecte}}.
2. A Configuració, obriu la pestanya **CadCraft** i trieu {{ui:Polítiques per defecte}} a la llista de l'esquerra.
3. Definiu les polítiques que vulgueu. Cada una comença a les pròpies de CadCraft. Una política amb una casella **Mètric** i una **Imperial** pren un valor per a cada tipus de dibuix; ompliu només les que necessiteu.
4. No hi ha botó de desar: cada canvi es desa a mesura que el feu.
5. Comenceu un dibuix nou. Té les unitats, el format de longitud, la precisió i l'alçada de text que heu definit, i el seu primer full nou és al paper que heu triat.

## Les polítiques

- **Unitats d'un dibuix nou**: cap, mil·límetres, centímetres, metres, polzades o peus.
- **Format de longitud** i **Precisió de longitud**: el que estableix l'ordre UNITS, per a un dibuix nou.
- **Alçada del text nou**, en unitats de dibuix.
- **Paper d'un full nou**: el paper que fa servir {{ui:Full nou}}.
- **Mides d'anotació en paper** (Configuració › Global › Polítiques per defecte): les alçades de l'oficina en mil·límetres tal com s'imprimeixen. CadCraft n'utilitza la de notes i etiquetes: {{cmd:ANNOSCALE}} fixa l'alçada amb què comença el text nou en aquesta alçada a l'escala d'anotació. Vegeu [Unitats, papers i escales](topic:units-papers-scales#annotate-by-scale).

Un dibuix en polzades o peus fa servir els valors imperials; qualsevol altre dibuix fa servir els mètrics. Un dibuix sense unitats fa servir el sistema d'unitats definit a Configuració › Global › Polítiques per defecte, o el mètric si no n'hi ha cap.

## Compartiu-les per tota l'oficina

1. A Configuració, obriu la pestanya **Global** i trieu {{ui:Polítiques per defecte}}.
2. Feu clic a {{ui:Desa en un fitxer}}. Obtindreu un fitxer petit que acaba en `.ccdefaults.json`.
3. En un altre ordinador, activeu el complement, obriu el mateix lloc i feu clic a {{ui:Carrega des d'un fitxer}}. Les polítiques del fitxer substitueixen les d'aquell ordinador.

Un sol fitxer conté les polítiques de totes les aplicacions de CadCraft, de manera que el mateix fitxer també funciona a BimCraft.

## Bons a saber

- No hi ha cap política per a l'escala d'un full: la vista d'un full nou s'ajusta al dibuix, i l'escala la definiu al full.
- No hi ha cap política per a un estil de cota: un dibuix nou no té estils de cota amb nom. Definiu les cotes amb DIMSTYLE, o comenceu des d'un dibuix que en tingui.
- El fitxer és JSON pla i obert. Una política que el fitxer esmenta i que aquesta versió no coneix es deixa de banda i s'indica al missatge; la resta es carrega igualment.
- Les polítiques es guarden en aquest navegador, no al dibuix. Si desactiveu el complement, tot torna a ser el que és propi de CadCraft.
