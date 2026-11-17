---
title: Insereix des d'un fitxer o de la biblioteca
summary: Porteu un bloc, o un dibuix sencer, des d'un altre DWG o DXF, i inseriu elements de la Biblioteca, d'un fitxer o d'una altra biblioteca, amb els seus crèdits i actualitzacions.
keywords: insereix, fitxer, biblioteca, librarycraft, element, equip, bloc d'un altre dibuix, wblock, centre de disseny, crèdits, atribució, llicència, actualització, font, item.json
from: 316188d2
---

## Insereix un bloc d'un altre dibuix

1. Escriviu `I` i premeu {{key:Enter}}, o feu clic a {{ui:Insereix}} al grup Blocs.
2. A `Enter block name or [File/Library]`, escriviu `F` i premeu {{key:Enter}}.
3. Trieu el DWG o DXF d'aquest ordinador. Es llegeix aquí; no s'obre, i no es puja res.
4. Al diàleg {{ui:Insereix des de}}, trieu un bloc de la llista (escriviu a {{ui:Filtra els blocs}} per trobar-lo), o deixeu {{ui:Tot el dibuix}}. Feu clic a {{ui:Insereix}}.
5. Feu clic on ha d'anar, i ompliu els atributs que demani.

El dibuix sencer arriba com un sol bloc amb el nom del fitxer. També hi arriben els blocs que hi ha dins del bloc que heu triat. Les capes que usen s'afegeixen a aquest dibuix.

Si l'altre dibuix està en unitats diferents (polzades i mil·límetres, per exemple), CadCraft n'escala la referència perquè coincideixi i ho diu a l'historial.

### Quan un nom ja està usat

Si aquest dibuix ja té un bloc amb el mateix nom, CadCraft pregunta:

- {{ui:Mantén els existents}} usa el bloc d'aquest dibuix amb aquell nom.
- {{ui:Reanomena}} porta el nou com a `Nom (2)`.

Tota la inserció és un sol pas: {{key:Mod+Z}} treu de nou la referència i les definicions copiades.

## Obre la biblioteca

Feu clic a {{ui:Biblioteca…}} al tauler {{ui:Blocs}}, o a {{ui:Biblioteca}} al grup Blocs, o escriviu `LIB`. A l'indicador `INSERT`, `L` també l'obre.

La biblioteca té quatre fonts, com a pestanyes:

- {{ui:Biblioteca}}: la biblioteca de CadCraft. Cerqueu per nom, fabricant o model, i filtreu per categoria.
- {{ui:Fitxers…}}: un fitxer d'element (`item.json`) de qualsevol biblioteca, o un dibuix, un full de càlcul o un model 3D per fer-hi elements: un DWG o DXF (cada bloc es converteix en un element), un CSV amb columnes de nom i mida, o un model glTF o OBJ. No es puja res.
- {{ui:Estàndard}}: seccions d'acer (com a seccions, alçats o barres 3D) i peces normalitzades com cargols, femelles i coixinets, fetes aquí a partir de taules publicades. Vegeu [Insereix seccions d'acer i peces normalitzades](topic:steel-and-standard-parts).
- {{ui:Altres fonts}}: altres biblioteques que responen igual que la Biblioteca. Afegiu-ne l'adreça una sola vegada; aquest navegador la recorda.

Cada targeta mostra una previsualització, el nom, el fabricant i el model, la llicència i la versió. Un element retirat es marca com a {{ui:Retirat}} amb el motiu; CadCraft pregunta abans que n'inseriu un.

## Insereix un element

1. Feu clic a {{ui:Insereix}} en una targeta.
2. Feu clic on ha d'anar l'element. Escriviu `R` primer per girar-lo, o `S` per escalar-lo.
3. A `Enter Item number (CC-ITEM)`, premeu {{key:Enter}} per al número lliure següent, o escriviu el vostre.

L'element es converteix en un bloc anomenat `LIB_<name>_v<version>`, dibuixat en les unitats d'aquest dibuix. Si el dibuix no té unitats, l'element s'insereix en mil·límetres i l'historial ho diu; definiu primer {{ui:Unitats}} al tauler de la dreta.

Les seves dades s'hi porten com a atributs invisibles: l'identificador i la versió de l'element, la llicència i l'atribució, el fabricant, el model, la categoria i les mides. Vegeu [Atributs de bloc](topic:attributes).

## Elements en el vostre idioma

Un element pot portar el seu nom i la seva descripció en altres idiomes. Quan els té en l'idioma en què està configurat CadCraft (Configuració › General › Idioma), la targeta i el nom d'element del bloc inserit els usen. El bloc en si conserva un nom fet a partir del nom propi de l'element, així que un dibuix té un bloc per element, independentment de l'idioma amb què s'hagi inserit.

## Comprova si hi ha actualitzacions

1. Obriu la biblioteca.
2. Feu clic a {{ui:Comprova si hi ha actualitzacions}}.

Cada element de la biblioteca del dibuix apareix a la llista amb els seus números d'element, i indica si està al dia, si té una versió més nova (i què ha canviat), o si s'ha retirat. Feu clic a {{ui:Actualitza}} en una fila, o a {{ui:Actualitza-ho tot}}. Cada referència passa al bloc de la nova versió i conserva el seu número d'element, la quantitat, la posició, l'angle i la capa. {{key:Mod+Z}} desfà una actualització.

## Acrediteu el que heu usat

Feu clic a {{ui:Crèdits de la biblioteca}}. Cada element apareix amb la seva línia d'atribució i la seva llicència.

- {{ui:Copia l'atribució}} copia la línia d'un element; {{ui:Copia-ho tot}} copia totes les línies.
- {{ui:Baixa CSV}} desa la llista amb els números d'element, els fabricants, els models, les llicències i les atribucions. S'obre en qualsevol full de càlcul.

Llicències com CC BY demanen que acrediteu l'autor quan useu l'obra. Poseu les línies al dibuix, a l'especificació o a les notes del projecte.

## Símbols i recursos

La biblioteca té tres tipus d'element: Símbols (convencions de dibuix, en 2D), Tipus (de què es compon un element) i Recursos (objectes físics). A la pestanya {{ui:Biblioteca}}, la llista {{ui:Tipus d'element}} mostra els símbols i els recursos junts, només els símbols, o només els recursos. Els tipus són el que es construeix amb un projecte de BimCraft, així que CadCraft no els llista.

## Inicia la sessió a la biblioteca

Feu clic a {{ui:Inicia la sessió a la biblioteca}}. S'obre una petita finestra al lloc web; un cop hi hagueu iniciat la sessió, CadCraft pot mostrar els elements del vostre equip i registrar els que inseriu, de manera que sabeu quan canvia un element que heu usat. La sessió dura només en aquesta pestanya del navegador. Podeu revocar-la en qualsevol moment a la pàgina de seguretat del vostre compte.

## Errors habituals

- **"Crear elements a partir de tipus IFC es fa a BimCraft."** Els fitxers IFC i de família es llegeixen a l'aplicació BimCraft. Feu l'element allà o a la Biblioteca, i després useu el seu `item.json` aquí.
- **"No s'ha pogut contactar amb la biblioteca."** Esteu fora de línia, o la biblioteca no funciona. Els elements que ja hi ha al dibuix no es veuen afectats.
- **Un element és molt més gran o molt més petit.** Les unitats del dibuix són incorrectes o no estan definides. Desfeu-ho, definiu {{ui:Unitats}} i torneu-lo a inserir.
