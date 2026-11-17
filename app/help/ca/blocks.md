---
title: Crea i insereix blocs
summary: Converteix una porta dibuixada en un bloc, col·loca'l de nou en altres posicions, escales i angles, i neteja els blocs no utilitzats.
keywords: bloc, bmake, insereix, ddinsert, símbol, purge, descompon, redefineix, punt base, referència, compta, bcount, quadre, csv, atributs, extracció de dades
from: 125a129d
---

## Què crearàs

Un símbol de porta convertit en un bloc anomenat `DOOR-900`, i després col·locat tres vegades: tal com està dibuixat, girat 90 graus i simetritzat.

Un bloc és un grup d'objectes amb nom. El dibuixes una vegada; cada lloc on l'utilitzes és una **referència de bloc** que apunta a l'única definició. La secció {{ui:Blocs}} del panell de l'esquerra enumera els blocs del dibuix i quantes vegades s'utilitza cadascun.

## Dibuixa la porta

1. Escriviu `L` i premeu {{key:Enter}}.
2. Escriviu `0,0` i premeu {{key:Enter}}.
3. Escriviu `@0,900` i premeu {{key:Enter}}, i després torneu a premer {{key:Enter}}. Això és la fulla de la porta.
4. Escriviu `A` i premeu {{key:Enter}}.
5. Escriviu `C` i premeu {{key:Enter}} per donar primer el centre.
6. Escriviu `0,0` i premeu {{key:Enter}} per al centre.
7. Escriviu `900,0` i premeu {{key:Enter}} per al punt inicial.
8. Escriviu `0,900` i premeu {{key:Enter}} per al punt final. Això és l'arc d'obertura.
9. Feu clic a {{ui:Extensió}}.

Els arcs van en sentit antihorari des del punt inicial fins al punt final.

## Crea el bloc

1. Escriviu `B` i premeu {{key:Enter}}, o feu clic a {{ui:Crea}} al grup Blocs.
2. En `Enter block name`, escriviu `DOOR-900` i premeu {{key:Enter}}.
3. En `Specify insertion base point`, escriviu `0,0` i premeu {{key:Enter}}. Aquesta és la frontissa: el punt que queda on col·loqueu el bloc.
4. En `Select objects`, arrossegueu una finestra al voltant de la fulla i de l'arc.
5. Premeu {{key:Enter}}.

L'historial diu `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` El panell {{ui:Blocs}} mostra DOOR-900 amb `1×` al costat: una referència. Feu clic a la porta: ara se selecciona com un sol objecte, una "Referència de bloc".

:::tip
Podeu seleccionar primer els objectes i després escriure `B`. CadCraft encara demana el nom i el punt base, i després utilitza la vostra selecció.
:::

## Insereix el bloc

1. Escriviu `I` i premeu {{key:Enter}}, o feu clic a {{ui:Insereix}} al costat de DOOR-900 al panell {{ui:Blocs}}.
2. En `Enter block name or [File/Library] <DOOR-900>`, premeu {{key:Enter}}. (El botó {{ui:Insereix}} del panell omple el nom per vosaltres.)
3. La porta segueix la creueta. Feu clic on ha d'anar la frontissa.

Apareix una segona porta.

## Insereix girat o escalat

1. Escriviu `I` i premeu {{key:Enter}}, i després premeu {{key:Enter}} per acceptar el nom.
2. En `Specify insertion point [Scale/Rotate]`, escriviu `R` i premeu {{key:Enter}}.
3. Escriviu `90` i premeu {{key:Enter}}. La vista prèvia es gira.
4. Feu clic per col·locar-la.

Escriviu `S` en lloc d'això per definir un factor d'escala; s'aplica en les dues direccions. L'escala i la rotació es recorden per a la següent inserció. Per simetritzar una porta, inseriu-la i després utilitzeu {{cmd:MIRROR}} sobre la referència.

## Canvia un bloc col·locat

Seleccioneu una referència de bloc. Al panell de la dreta podeu canviar {{ui:X}}, {{ui:Y}}, {{ui:Escala X}}, {{ui:Escala Y}} i {{ui:Rotació}}. Un {{ui:Escala X}} negatiu la inverteix.

## Redefineix un bloc

Per canviar totes les portes de cop, creeu un bloc amb el mateix nom:

1. Dibuixeu la nova versió de la porta.
2. Escriviu `B` i premeu {{key:Enter}}, i escriviu `DOOR-900`.
3. A `Block "DOOR-900" already exists. Redefine it?`, escriviu `Y` i premeu {{key:Enter}}.
4. Doneu el punt base i seleccioneu els objectes nous, com abans.

Ara cada referència a DOOR-900 mostra la nova versió.

O editeu el bloc mateix: {{ui:Blocs}} › {{ui:Més}} › {{ui:Edita el bloc}} ({{cmd:BEDIT}}) l'obre per separat, i {{ui:Desa el bloc}} el torna a deixar. Vegeu [Atributs de bloc](topic:attributes#change-a-block-the-block-editor).

## Compta blocs i exporta un quadre

Escriviu {{cmd:COUNT}} (o {{ui:Blocs}} › {{ui:Més}} › {{ui:Compta blocs}}), i després:

- feu clic en una porta: se seleccionen totes les portes d'aquest espai, i l'historial diu quantes n'hi ha aquí i en tot el dibuix;
- o premeu {{key:Enter}}: l'historial enumera cada bloc amb el seu recompte, començant pel que en té més;
- o escriviu `E`, després `C` per a un CSV dels recomptes (al model, als fulls, en total) o `A` per a una fila per referència amb la seva capa, posició, rotació i cada valor d'atribut: un quadre que podeu obrir en un full de càlcul.

Els blocs sense nom (cotes, taules) i les referències dins d'altres blocs no es compten. Les cel·les que comencen com una fórmula (`=`, `+`, `-`, `@`) reben un `'` inicial perquè un full de càlcul les mostri com a text.

## Descompon i depura

- {{cmd:EXPLODE}} (`X`) torna a convertir una referència de bloc seleccionada en objectes separats. La definició es manté.
- {{cmd:PURGE}} (`PU`) elimina les definicions de blocs que ja no utilitza res. L'historial diu quantes n'ha eliminat.

## Noms de blocs

Un nom pot tenir fins a 255 caràcters i pot contenir espais, però no pot començar per un asterisc, ni contenir `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` ni un backtick. Quan deseu un DXF R12, els noms s'escriuen en majúscules, els caràcters diferents de lletres, xifres, `$`, `_` i `-` passen a `_`, i els noms es tallen a 31 caràcters; l'historial diu quants han canviat. Els noms curts en majúscules, xifres i guions, com `DOOR-900`, es conserven sense canvis. Un DWG desat conserva els noms tal com els heu escrit, en majúscules i minúscules; només canvien els caràcters que el DWG no permet (un `|` esdevé `$0$`, els altres esdevenen `_`).

## Escriu un bloc o objectes en un fitxer propi

Escriviu `W` ({{cmd:WBLOCK}}) i trieu **Objectes**, **Bloc** o **Tot el dibuix**. El resultat és un DWG o DXF nou que només conté les capes, estils i blocs que utilitza, amb el vostre punt base com a origen. Pels objectes podeu conservar-los, convertir-los en un bloc o eliminar-los d'aquest dibuix.

## Errors habituals

- **El bloc ha quedat lluny de la creueta.** El punt base no era sobre els objectes. Torneu a fer el bloc amb el punt base sobre una cantonada o una frontissa.
- **"No s'ha seleccionat cap objecte; no s'ha creat res."** Heu premut {{key:Enter}} abans de seleccionar res.
- **"Aquest dibuix encara no té blocs: F insereix un des d'un fitxer, L des de la biblioteca (o crea'n un amb BLOCK)."** Escriviu `F` per portar-hi un bloc d'un altre dibuix, o `L` per a la biblioteca. Vegeu [Insereix des d'un fitxer o de la biblioteca](topic:insert-from-file-and-library).
- **"Una finestra gràfica no es pot posar en un bloc."** Deixeu els marcs de les finestres gràfiques fora de la selecció.
