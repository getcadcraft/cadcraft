---
title: Vens d'altre programari de dibuix
summary: Com les ordres, tecles i hàbits coneguts es corresponen amb CadCraft, i les diferències que fan tropessar els dibuixants experimentats.
keywords: canvi, diferències, migrar, hàbits, àlies, entrada dinàmica, pickfirst, pickadd, qsave, saveas, desa com a, mtext, ctb, seguiment polar, xref, dreceres de teclat, familiar, copyclip, pasteclip, pasteorig, copybase, portapapers
from: b58688e7
---

Si has usat AutoCAD, o un programa basat en el mateix model, la major part del que coneixes funciona aquí: la línia d'ordres, els àlies com `L`, `C`, `TR` i `O`, {{key:Enter}} o {{key:Space}} per repetir, la selecció per finestra i per intersecció, les referències a objectes a F3, l'orto a F8, i l'espai model amb presentacions i finestres gràfiques. Aquesta pàgina enumera el que es correspon directament i després les diferències que sorprenen la gent. Llegeix la segona meitat encara que només la fullegis.

## Què es correspon directament

| Hàbit | A CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Mateixes ordres, mateixos àlies |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Igual |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Mateixes ordres de cotes |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` escrites a la línia d'ordres | Igual, per a les cotes noves |
| `B` per crear un bloc, `I` per inserir, `PU` per purgar | Igual (la purga només elimina blocs no utilitzats) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` i després `E` o `W` | Igual |
| Escriure `_LINE` o `-LAYER` des d'un script o per hàbit | El `_`, `-`, `.` o `'` inicial s'ignora |
| {{key:Enter}} o {{key:Space}} en una indicació buida repeteix l'última ordre | Igual |
| {{key:Esc}} cancel·la; un altre {{key:Esc}} neteja la selecció | Igual |
| `@dx,dy`, `@d<a`, angles escrits en sentit antihorari des de l'est | Igual |
| Finestra d'esquerra a dreta, intersecció de dreta a esquerra, clic-clic; prem i arrossega per a un llaç, {{key:Space}} alterna finestra / intersecció / tanca (LASSOMODE) | Igual |
| Primer selecciona, després l'ordre (nom-verb) | Igual; una ordre acabada neteja la selecció |
| `ALL` i `L` a Selecciona objectes | Igual |
| {{key:Shift}}+clic treu de la selecció | Igual. Les configuracions poden fer que un clic substitueixi la selecció, com fa PICKADD 0: consulta [Configuració de CadCraft](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Mateixes ordres i tecles; en enganxar, la còpia es col·loca pel seu cantó inferior esquerre, com fa PASTECLIP |
| F3 referència a objectes, F7 quadrícula, F8 Orto | Mateixes tecles |
| Doble clic a la roda per fer zoom a les extensions | Igual |
| El text mirat es manté llegible | Igual (com amb MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Igual; en un Mac, Command també funciona |

La [Referència d'ordres](topic:commands) enumera totes les ordres i àlies.

:::tip
Si t'agrada la cinta d'AutoCAD, tria l'estil de menú {{ui:Dibuix clàssic}} a {{ui:Configuració}} › {{ui:CadCraft}} › {{ui:Menús, tecles i ratolí}}: pestanyes Inici, Insereix, Anota, Paramètric, Vista, Gestiona i Sortida sobre la mateixa línia d'ordres, i el botó del mig desplaça mentre el clic dret és Enter. Consulta [Menús, tecles i ratolí](topic:menus-keys-and-mouse).
:::

La [Llista d'ordres](topic:command-map) enumera totes les ordres de CadCraft amb els seus noms curts, i la [fitxa de referència](topic:cheat-sheet) les 40 que faràs servir més (també com a PDF d'una pàgina).

## Diferències que fan tropessar la gent

### Els punts escrits són absoluts

Amb l'entrada dinàmica activada, l'altre programa tracta un `100,0` escrit per a un segon punt com a relatiu. **La línia d'ordres de CadCraft no ho fa**: aquí, `x,y` es mesura sempre des de l'origen. Amb {{ui:Dyn}} ({{key:F12}}) activat, usa en canvi els seus camps: distància, {{key:Tab}}, angle. Fes servir `@100,0` per a "100 a la dreta de l'últim punt", o mou la creu de la manera correcta i escriu només `100`.

### Shift salta les referències; no activa l'Orto

Mantenir {{key:Shift}} mentre fas clic ignora les referències a objectes per a aquest clic. No activa temporalment l'Orto. Usa F8 o el botó {{ui:Orto}}.

### El clic dret sempre és Enter

No hi ha menú contextual. Un clic dret al dibuix és Enter: acaba una ordre, acaba una selecció o repeteix l'última ordre. Durant un desplaçament amb nanses o un quadre de selecció, cancel·la. Arrossega amb el botó dret per desplaçar la vista.

### No hi ha desplaçament amb la barra d'espai

{{key:Space}} és Enter, de manera que mantenir {{key:Space}} i arrossegar no desplaça la vista. Desplaça amb el botó del mig o el dret, o allunya i torna a acostar la vista en un altre punt amb la roda.

### Retalla i Allarga

Retalla i Allarga comencen en mode Ràpid: cada objecte visible és una vora de tall o un límit, la peça sota el punter mostra què se n'anirà, un camí arrossegat retalla cada peça que travessa, i un objecte que cap altre no travessa s'esborra. {{key:Shift}} alterna entre retallar i allargar. `O` passa al mode Estàndard (tria primer les vores), `F` i `C` són tanca i intersecció, `E` és EDGEMODE, `R` esborra. No hi ha l'opció `P` (Projecta): CadCraft retalla en el pla del dibuix.

### Empalma i xamfrà

{{cmd:FILLET}} i {{cmd:CHAMFER}} accepten les opcions que coneixes: Desfés, Polilínia, Radi (o Distància, Angle i mEtode), Retalla i Múltiple, i {{key:Shift}}+clic per a una cantonada viva. Un empalmament entre una polilínia i una línia afegeix l'arc com a objecte propi en lloc d'unir-lo a la polilínia, i les cantonades de la polilínia al costat d'un segment d'arc es deixen tal com estan.

### Text de paràgraf i text d'una línia

`T`, `MT` i `MTEXT` són text de paràgraf escrit al lloc, amb una amplada, interlineat i justificació; `DT` i `DTEXT` són text d'una sola línia, com el coneixes. No hi ha estils de text ni columnes, i encara no pots escriure format dins del text (negreta, fraccions apilades); el format que arriba en un fitxer es manté, es dibuixa i es desa (consulta [Afegeix text i etiquetes](topic:text#formatting-inside-paragraph-text-from-other-programs)). Tot es dibuixa amb una tipografia d'estil Helvetica.

### Desar vol dir "descarrega una còpia"

{{key:Mod+S}}, `SAVE` i `QSAVE` descarreguen una còpia en el format del dibuix: un DWG que has obert es desa com a DWG, un DXF com a DXF. Al navegador no se sobreescriu res al lloc, i els fitxers oberts mai no es modifiquen. A CadCraft Studio, {{key:Mod+S}} escriu de nou al fitxer que has obert.

`SAVEAS` ({{key:Mod+Shift+S}}) és un petit diàleg, no un explorador de fitxers: tria {{ui:DWG}} (amb la seva {{ui:Versió}}, AutoCAD 2000 a 2018), {{ui:DXF R12}} o {{ui:DXF 2000}} i fes clic a {{ui:Desa}}. El navegador decideix on va la descàrrega. `DXFOUT` sempre descarrega DXF R12.

Un DWG que has obert es desa en la versió amb què va arribar; un dibuix nou es desa en format AutoCAD 2000 tret que triïs un altre. Les presentacions, les cotes i els patrons de trama es mantenen. Consulta [Fitxers: què s'obre, què es desa](topic:files#saving).

### Capes: més simple

- Cada canvi de capa (activa, desactiva, congela, bloqueja, color, traçat, tipus de línia, gruix de línia, capa actual) és un pas de {{ui:Desfés}}.
- Desactivar i congelar tenen el mateix efecte a CadCraft.
- Les capes que un dibuix congela en una finestra gràfica segueixen congelades allà: a la pantalla, als traçats i en desar-lo com a DWG o DXF.
- Una finestra gràfica que mostra una capa amb el seu propi color, tipus de línia, gruix de línia o transparència ho continua fent a la pantalla, als traçats i en un DWG desat (el DXF manté la configuració pròpia de la capa; el desat ho indica). Canviar-ho per finestra gràfica encara no està implementat.
- No hi ha gestor de propietats de capes ni estats de capa; {{cmd:RENAME}}, {{cmd:LAYMRG}} i {{cmd:LAYDEL}} reanomenen, fusionen i suprimeixen capes. Els tipus de línia i els gruixos de línia es defineixen al tauler de la dreta (consulta [Gruixos de línia i tipus de línia](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} i {{cmd:LAYMCUR}} funcionen per selecció.
- Desar a DXF R12 escriu els noms de capa en majúscules. Un DWG els manté tal com els has escrit.

### Estils de cota

`DIMSTYLE` obre un gestor d'estils amb nom (nou, modifica, estableix com a actual, compara, aplica). `DIMSCALE` i la resta de configuracions continuen canviant el que usen les cotes noves, i cada cota manté les seves pròpies mides, que també pots canviar al tauler Propietats. L'estil actual no es desa al fitxer. Les cotes segueixen el format de longitud del dibuix (decimal, o peus i polzades amb {{cmd:UNITS}}), o el seu propi {{ui:Format}}. Consulta [Estableix les mides de les cotes](topic:dimension-settings).

### El traçat és més simple

Les taules d'estils de traçat funcionen per color, com els fitxers CTB: Monocrom, Color i Escala de grisos ja hi són, pots crear-ne de pròpies, i cada presentació manté la seva taula. La lectura de fitxers CTB està basada en la descripció publicada i només s'ha provat amb fitxers que hem creat nosaltres; les taules d'estils de traçat amb nom (STB) i les configuracions de pàgina encara no estan implementades. Les línies s'imprimeixen amb el seu gruix de línia, les altres amb un gruix de ploma únic. Les presentacions es tracen a 1:1 sobre el seu propi paper; el model es trau a una escala escollida o ajustada. Consulta [Traça a PDF](topic:plot-pdf).

### Treballar dins d'una finestra gràfica

Tal com ho coneixes: fes doble clic dins d'una finestra gràfica (o escriu {{cmd:MSPACE}}) per treballar sobre el model a través seu, i fes doble clic fora (o {{cmd:PSPACE}}) per tornar a la presentació. Dins, desplaçar i fer zoom canvien el que mostra la finestra, tret que la seva visualització estigui bloquejada; aleshores mouen la presentació. Fer clic a una pestanya sota el dibuix també surt de la finestra gràfica. Consulta [Treballa sobre el model a través d'una finestra gràfica](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Seguiment i entrada dinàmica sí, quadrícula d'ajust encara no

La quadrícula és només per mirar; els punts no s'ajusten a ella (no hi ha mode d'ajust amb F9). El seguiment polar ({{key:F10}}, pas definit amb {{cmd:POLARANG}}) i el seguiment de referències a objectes ({{key:F11}}: para sobre un punt de referència per adquirir-lo) funcionen com els coneixes; consulta [Ajusta a objectes](topic:object-snaps#polar-tracking). L'entrada dinàmica ({{key:F12}}) mostra distància i angle (o X i Y) al costat de la creu; consulta [Entrada de coordenades i distàncies](topic:coordinate-entry#dynamic-input).

### Peus i polzades

Tria {{ui:Format de longitud}} {{ui:Arquitectònic}} o {{ui:Enginyeria}} (o escriu {{cmd:UNITS}}), i escriu les longituds com les coneixes: `12'6"`, `12'6-1/2"`. Usa un guionet, no un espai, abans d'una fracció: {{key:Space}} és {{key:Enter}}. Configura també {{ui:Unitats}} a {{ui:Polzades}}, perquè les presentacions i els traçats ofereixin escales arquitectòniques. El format es manté en els fitxers DWG i DXF desats. Consulta [Peus i polzades](topic:units-papers-scales#feet-and-inches-and-fractions).

### Copiar i enganxar es queda dins de CadCraft

{{key:Mod+C}}, {{key:Mod+X}} i {{key:Mod+V}} copien, retallen i enganxen objectes dins d'un dibuix, entre dibuixos i entre pestanyes de CadCraft al mateix navegador. El portapapers és propi de CadCraft: no pots enganxar objectes de CadCraft en un altre programa, ni objectes d'un altre programa a CadCraft. Enganxar des d'un dibuix en unes altres unitats no reescala: usa després {{cmd:SCALE}}. {{key:Mod+D}} és un duplicat que es mou amb el punter, una addició de CadCraft. Consulta [Copia, enganxa i duplica](topic:copy-paste).

### Dreceres del navegador que no pots usar

Una pàgina web no pot rebre {{key:Mod+N}}, {{key:Mod+W}} o {{key:Mod+T}} del navegador: obren i tanquen finestres i pestanyes. Usa el botó {{ui:Nova}} o escriu `NEW`. Consulta [Tecles, ratolins i ratolins tàctils](common:keys).

## Ordres que potser cerques i que encara no hi són

{{cmd:TABLE}} no està implementada. Escriure-la diu «Unknown command». ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} i {{cmd:XREF}} sí que estan implementades.) [Encara no implementat](topic:not-built-yet) enumera què fer en el seu lloc avui.
