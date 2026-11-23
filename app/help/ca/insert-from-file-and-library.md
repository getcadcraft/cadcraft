---
title: Insereix des d'un fitxer o de la biblioteca
summary: Porta un bloc, o un dibuix complet, des d'un altre DWG o DXF, i col·loca elements de la Biblioteca, d'un fitxer o d'una altra biblioteca, amb els seus crèdits i actualitzacions.
keywords: insereix, fitxer, biblioteca, librarycraft, element, equip, bloc des d'un altre dibuix, wblock, centre de disseny, crèdits, atribució, llicència, actualització, font, item.json
from: f6e4e452
---

## Insereix un bloc d'un altre dibuix

1. Escriu `I` i prem {{key:Enter}}, o fes clic a {{ui:Insereix}} al grup de Blocs.
2. La línia d'ordres a la part inferior de la finestra demana `Introduïu el nom del bloc o [Fitxer/Biblioteca]`. Escriu `F` i prem {{key:Enter}}.
3. Tria el DWG o DXF en aquest ordinador. Es llegeix aquí; no s'obre, i no es puja res.
4. Al diàleg {{ui:Insereix des de}}, tria un bloc de la llista (escriu a {{ui:Filtra els blocs}} per trobar-lo), o deixa {{ui:Tot el dibuix}}. Fes clic a {{ui:Insereix}}.
5. Fes clic on ha d'anar, i omple els atributs que demani.

També pots començar des del tauler {{ui:Blocs}}: escriu `F` a la seva casella {{ui:Filtra els blocs}} i prem {{key:Enter}}, o escriu alguna cosa que no coincideixi amb cap bloc i fes clic a {{ui:Des d'un fitxer…}}. `L` i {{ui:Biblioteca…}} obren la biblioteca de la mateixa manera. Abans de la versió 0.10.1, una lletra escrita a {{ui:Filtra els blocs}} només cercava els blocs d'aquest dibuix i responia «Cap bloc coincideix amb el filtre».

Per tenir a mà un dibuix amb els teus propis blocs, fes clic a {{ui:Afegeix un dibuix}} sota {{ui:Biblioteques}} al tauler {{ui:Blocs}} i tria el DWG o DXF. Els seus blocs es llisten amb imatges; fes clic a un per col·locar-lo.

El dibuix complet entra com un sol bloc amb el nom del fitxer. Hi entren també els blocs que hi ha dins del bloc triat. Les capes que usen s'afegeixen a aquest dibuix.

Si l'altre dibuix està en unitats diferents (per exemple, polzades i mil·límetres), CadCraft escala la referència per igualar-la i ho indica a l'historial.

### Quan un nom ja s'usa

Si aquest dibuix ja té un bloc amb el mateix nom, CadCraft pregunta:

- {{ui:Mantén els existents}} usa el bloc d'aquest dibuix amb aquell nom.
- {{ui:Reanomena}} hi porta el nou com a `Nom (2)`.

Tota la inserció és un sol pas: {{key:Mod+Z}} torna a eliminar la referència i les definicions copiades.

## Obre la biblioteca

Fes clic a {{ui:Biblioteca…}} al tauler {{ui:Blocs}}, o a {{ui:Biblioteca}} al grup de Blocs, o escriu `LIB`. A la petició de `INSERT`, `L` també l'obre.

La biblioteca té quatre fonts, com a pestanyes:

- {{ui:Biblioteca}}: la biblioteca de CadCraft. Cerca per nom, fabricant o model, i filtra per categoria.
- {{ui:Fitxers…}}: un fitxer d'element (`item.json`) de qualsevol biblioteca, o un dibuix, full de càlcul o model 3D per fer-ne elements: un DWG o DXF (cada bloc esdevé un element), un CSV amb columnes de nom i mida, o un model glTF o OBJ. No es puja res.
- {{ui:Estàndard}}: seccions d'acer (com a seccions, alçats o barres 3D) i peces normalitzades com ara cargols, femelles i coixinets, fetes aquí a partir de taules publicades. Vegeu [Col·loqueu seccions d'acer i peces estàndard](topic:steel-and-standard-parts).
- {{ui:Altres fonts}}: altres biblioteques que responen igual que {{ui:Biblioteca}}. Afegeix-ne l'adreça una vegada; aquest navegador la recorda.

Cada targeta mostra una previsualització, el nom, el fabricant i el model, la llicència i la versió. Un element retirat es marca amb {{ui:Retirat}} i el motiu; CadCraft pregunta abans de col·locar-lo.

## Col·loca un element

1. Fes clic a {{ui:Insereix}} en una targeta.
2. Fes clic on ha d'anar l'element. Escriu `R` primer per girar-lo, o `S` per escalar-lo.
3. A `Introduïu el número d'element (CC-ITEM)`, prem {{key:Enter}} per al següent número lliure, o escriu el teu.

L'element esdevé un bloc amb el nom `LIB_<name>_v<version>`, dibuixat en les unitats d'aquest dibuix. Si el dibuix no té unitats, l'element entra en mil·límetres i l'historial ho indica; abans, defineix {{ui:Unitats}} al tauler de la dreta.

Les seves dades s'hi porten com a atributs invisibles: l'identificador i la versió de l'element, la llicència i l'atribució, el fabricant, el model, la categoria i les mides. Vegeu [Atributs de bloc](topic:attributes).

## Elements en la teva llengua

Un element pot portar el seu nom i la seva descripció en altres llengües. Quan els té en la llengua que CadCraft té configurada ({{ui:Configuració}} › {{ui:General}} › Llengua), la targeta i el nom d'element del bloc col·locat els usen. El bloc en si conserva un nom fet a partir del nom propi de l'element, de manera que un dibuix té un bloc per element, independentment de la llengua que l'hagi col·locat.

## Comprova si hi ha actualitzacions

1. Obre la biblioteca.
2. Fes clic a {{ui:Comprova si hi ha actualitzacions}}.

Cada element de biblioteca del dibuix es llista amb els seus números d'element i indica si està al dia, si té una versió més nova (i què ha canviat), o si s'ha retirat. Fes clic a {{ui:Actualitza}} en una fila, o a {{ui:Actualitza-ho tot}}. Cada referència passa al bloc de la nova versió i conserva el seu número d'element, quantitat, lloc, angle i capa. {{key:Mod+Z}} desfà una actualització.

## Acredita el que has usat

Fes clic a {{ui:Crèdits de la biblioteca}}. Cada element es llista amb la seva línia d'atribució i la llicència.

- {{ui:Copia l'atribució}} copia la línia d'un element; {{ui:Copia-ho tot}} copia totes les línies.
- {{ui:Baixa CSV}} desa la llista amb els números d'element, els fabricants, els models, les llicències i les atribucions. S'obre en qualsevol full de càlcul.

Llicències com CC BY us demanen que citeu l'autor on useu l'obra. Poseu les línies al dibuix, a l'especificació o a les notes del projecte.

## Símbols i actius

La biblioteca té tres tipus d'element: Símbols (convencions de dibuix, 2D), Tipus (de què està fet un element) i Actius (objectes físics). A la pestanya {{ui:Biblioteca}}, la llista {{ui:Tipus d'element}} mostra els símbols i els actius junts, només els símbols o només els actius. Els tipus són el que es construeix un projecte de BimCraft, així que CadCraft no els llista.

## Inicia la sessió a la biblioteca

Fes clic a {{ui:Inicia la sessió a la biblioteca}}. S'obre una finestra petita al lloc; quan hi hagis iniciat la sessió, CadCraft pot mostrar els elements del teu equip i registrar el que col·loques, de manera que sabràs quan canvia un element que has usat. La sessió dura mentre estigui obert aquest pestanya del navegador. Pots revocar-la en qualsevol moment des de la pàgina de seguretat del teu compte.

## Desa els teus propis objectes a Els meus objectes

{{ui:Els meus objectes}} és una llista privada de la Biblioteca que només veus tu. No és a la biblioteca pública, ni a la cerca, ni es mostra a l'equip, i segueix el teu compte a tots els ordinadors on inicies la sessió a la biblioteca.

1. Al tauler de la Biblioteca, fes clic a {{ui:Fitxers…}} i llegeix un fitxer.
2. A l'element que vols tornar a usar, fes clic a {{ui:Desa als meus objectes}}.
3. Més tard, fes clic a {{ui:Els meus objectes}} i a {{ui:Insereix}}. Es col·loca com qualsevol element de la biblioteca, i {{ui:Comprova si hi ha actualitzacions}} també el cobreix.
4. {{ui:Suprimeix dels meus objectes}} el treu de la llista. Les còpies ja col·locades en dibuixos es mantenen.

Cal que hagis iniciat la sessió a la biblioteca. Llegir un fitxer no puja res; desar un element envia només aquell element al teu compte.

:::note
Els meus objectes s'està provant i pot no estar obert encara al teu compte. Si diu «Els meus objectes encara no està obert per a aquest compte», encara pots col·locar elements dels teus fitxers amb {{ui:Fitxers…}}.
:::

## Errors habituals

- **«Fer elements a partir de tipus IFC és a BimCraft.»** Els fitxers IFC i de família es llegeixen a l'aplicació BimCraft. Fes-hi l'element o a la Biblioteca, i després usa el seu `item.json` aquí.
- **«No s'ha pogut contactar amb la biblioteca.»** Estàs fora de línia, o la biblioteca no funciona. Els elements que ja hi ha al dibuix no es veuen afectats.
- **Un element és massa gran o massa petit.** Les unitats del dibuix són incorrectes o no estan definides. Desfés l'acció, defineix {{ui:Unitats}}, i torna a col·locar-lo.
