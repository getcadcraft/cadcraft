---
title: Mapa d'ordres: què escriure
summary: Totes les ordres que té CadCraft amb els seus noms curts, de la A a la Z, generades des del propi programa, i els hàbits d'altres programes de dibuix que són diferents.
keywords: mapa d'ordres, ordres, àlies, noms curts, provinent de, llista d'ordres, què escriure, esborra, retalla, equivalent, diferències
from: 9426856f
---

CadCraft agafa els noms d'ordres i els noms curts que la gent coneix d'altres programes de dibuix: escriu `L` per a una línia, `TR` per retallar, `E` per esborrar. Per tant, no hi ha cap taula de traducció que aprendre per a la majoria: el nom que coneixes és el nom aquí. La llista següent és totes les ordres que té CadCraft, generada des del propi programa. {{key:Enter}} repeteix l'última, i `HELP` a la línia d'ordres imprimeix la mateixa llista.

Les poques que no són iguals, o que no estan fetes:

- **Save** descarrega una còpia al navegador ({{cmd:SAVE}}, {{cmd:SAVEAS}}); a CadCraft Studio escriu el fitxer. Vegeu [Des d'altres programes de dibuix](topic:coming-from).
- **PLOT** fa un PDF (també PNG i SVG), amb una taula d'estil de traçat; no hi ha gestor de configuració de pàgina.
- **DIMSTYLE** i **PEDIT** estan fetes; **PEDIT** no té l'opció Edit-vertex (ho fan les nanses).
- **TABLE** no està feta; {{cmd:XREF}}, {{cmd:SPLINE}} i {{cmd:WBLOCK}} sí.
- Les ordres pròpies d'una rutina (AutoLISP `C:NAME`) apareixen després de carregar-la amb {{cmd:APPLOAD}}; no es llisten aquí.

## Totes les ordres (402)

| Ordre | Noms curts | Què fa |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbita la vista 3D amb el botó esquerre |
| `ACCESS` | `AX` | Activa o desactiva el dibuix sense visió: resultats parlats pel lector de pantalla, un cursor de teclat al dibuix, sons d'enganxat i ordres parlades. |
| `ALIASEDIT` |  | Edita els àlies d'ordres en un fitxer de text (el format conegut L, *LINE) |
| `ALIGN` | `AL` | Mou i gira objectes perquè els punts d'origen caiguin sobre els punts de destinació (un, dos o tres parells), i els escala si ho vols |
| `ALIGNPANEL` | `ALP` | Obre el tauler Alinea i distribueix |
| `ALIGNTO` |  | Alinea les vores esquerra, centre, dreta, superior, mig o inferior dels objectes seleccionats, sobre la selecció, el primer o l'últim objecte triat, o un punt |
| `ANNOALLVISIBLE` | `ANNOALL` | Mostra els objectes anotatius a totes les escales, o només on l'escala de la finestra gràfica (o del dibuix) és a la seva llista |
| `ANNOSCALE` | `CANNOSCALE` | Defineix l'escala d'anotació del dibuix: el text i les cotes anotatives es redimensionen perquè s'imprimeixin a la mateixa mida |
| `APPLOAD` | `AP` | Carrega aplicacions: rutines LISP (.lsp) i els seus fitxers de diàleg (.dcl); el Startup Suite (AP) |
| `ARC` | `A` | Arc: 3 punts, Inici/Centre/Final, Inici/Centre/Angle, Inici/Centre/Longitud, Inici/Final/Angle, Inici/Final/Direcció, Inici/Final/Radi, Centre/Inici/Final, Centre/Inici/Angle, Centre/Inici/Longitud, Continua |
| `AREA` | `AA` | Àrea i perímetre per punts o d'un objecte; Afegeix i Resta mantenen un total acumulat (AA) |
| `ARRAY` | `AR` | Còpies en files i columnes, o al voltant d'un centre (AR) |
| `ARRAYASSOCIATIVITY` |  | Defineix si les ordres ARRAY fan matrius que es poden editar (1) o còpies simples (0) |
| `ARRAYCLOSE` |  | Acaba l'edició dels objectes d'origen d'una matriu |
| `ARRAYEDIT` |  | Canvia una matriu feta amb l'opció Associativa: nombres, espaiat, objectes d'origen, un element |
| `ARRAYPATH` |  | Còpies d'objectes al llarg d'una línia, arc, polilínia o una altra corba |
| `ARRAYPOLAR` |  | Còpies al voltant d'un punt central |
| `ARRAYRECT` |  | Còpies en files i columnes |
| `ASBUILT` | `ASB` | ASBUILT llegeix els punts tal com s'han construït que una brigada ha mesurat (CSV / TXT, tal com els escriu EXPORTPOINTS) i els compara amb els punts del dibuix: dins o fora de la tolerància, sense mesurar, sobrants. Els marca a la capa AS-BUILT i descarrega un informe CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Defineix un atribut (una etiqueta que un bloc demana un valor) per posar-lo en un bloc (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Edita els valors d'atributs d'una referència de bloc a la línia d'ordres, un darrere l'altre (Enter conserva un valor) |
| `ATTSYNC` |  | Posa les referències d'un bloc d'acord amb les seves definicions d'atributs: les noves s'afegeixen amb els seus valors per defecte, les eliminades es treuen, es reinicien posicions i text; els valors es conserven |
| `AUDIT` |  | Comprova el dibuix obert per detectar danys: números que no són finits, objectes sense mida, capes, blocs, estils i tipus de línia que falten, blocs que es contenen a si mateixos, identificadors compartits, cotes i trames trencades. Enumera el que troba per tipus i pregunta abans d'arreglar-ho; l'arranjament és un sol pas de desfer. |
| `AUNITS` | `ANGUNITS` | Com es mostren i s'escriuen els angles: graus decimals, graus-minuts-segons o rumbs com N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Autocompletar del dibuix activat o desactivat, o enumera el que suggereixen ara els patrons del dibuix. |
| `AUTOCONSTRAIN` |  | Afegeix restriccions de coincidència, horitzontals i verticals on la geometria ja és a prop |
| `AUTODIM` | `ADIM` | Acotar per regles: mida total, cadenes als costats, obertures, diàmetres de forats i espaiat de la quadrícula, sense repetir el que ja està acotat. |
| `AUTOSHEET` | `ASH` | Disposa els fulls per si mateix: tria paper i escales estàndard i col·loca cada vista amb un peu de foto i un caixetí. |
| `BATTMAN` |  | Gestor d'atributs de blocs: ordre, etiquetes, indicacions, valors per defecte i modes dels atributs d'un bloc, i després s'actualitzen les seves referències |
| `BCLOSE` |  | Tanca l'editor de blocs: desa el bloc o descarta els canvis |
| `BCONVERT` |  | BCONVERT troba geometria que es repeteix i la converteix en referències de bloc. Selecciona els objectes que es repeteixen: es troba cada altre conjunt d'objectes de l'espai obert que és la mateixa geometria, mogut i girat en qualsevol angle, i amb Simètric o Escalat activats també les imatges simètriques i les còpies a una altra mida. Dona un nom al nou bloc i un punt base; la selecció i cada còpia es converteixen en referències a ell, cadascuna amb la seva pròpia rotació i escala. O tria Bloc i anomena un bloc existent per trobar còpies soltes dels seus objectes. Una còpia ha de tenir la mateixa capa, color, tipus de línia i gruix de línia llevat que Propietats estigui en Ignora. Els objectes de capes bloquejades es deixen tranquils. Un sol pas de desfer. |
| `BEDIT` | `BE` | Editor de blocs: edita els objectes i atributs d'un bloc; BCLOSE desa (BE) |
| `BLEND` |  | BLEND: una spline entre els extrems de dues corbes obertes, triades a prop dels extrems per unir-les. CONtinuïtat: Tangent segueix les dues direccions, Suau també segueix com es doblegan. |
| `BLOCK` | `B`, `BMAKE` | Fa un bloc a partir d'objectes (esdevenen una sola referència) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: cada referència a un bloc esdevé una referència a un altre, al mateix lloc amb la mateixa escala i rotació. Els valors dels atributs que tots dos blocs tenen es conserven. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE mostra el tauler de Blocs amb el cursor al seu filtre. El tauler mostra una imatge de cada bloc (els col·locats més recentment primer), en llista o en quadrícula; fes clic a una imatge o arrossega-la sobre el dibuix per col·locar el bloc amb INSERT. Sota Biblioteques, afegeix un fitxer DWG o DXF propi: els seus blocs es llisten amb imatges i es copien en aquest dibuix quan en col·loques un. A CadCraft Studio també es pot afegir una carpeta de dibuixos, i es recorden els fitxers i les carpetes. |
| `BOMEDIT` | `BOMCOLUMNS` | Les columnes, agrupació, ordenació, títol, totals i observacions d'una taula de llista de materials |
| `BOMEXPORT` |  | Desa una taula de llista de materials com a fitxer .csv |
| `BOMTABLE` | `BOM` | Una taula viva de llista de materials d'una zona, o de tot el dibuix |
| `BOMUPDATE` |  | Actualitza ara totes les taules de llista de materials, també les congelades |
| `BOMZONE` | `BZONE` | Una àrea amb nom del dibuix per a una llista de materials: dues cantonades, un polígon o el contorn d'un objecte tancat |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): tria un punt dins d'una àrea tancada i obtén una polilínia tancada al seu voltant. Els arcs es mantenen com a arcs. Les illes també contornegen les àrees que hi ha dins. |
| `BOX` |  | Una caixa: dues cantonades i una alçada (3D) |
| `BPARAMETER` | `BPARAM` | Encara no està feta: afegir un paràmetre (com Visibilitat) a un bloc. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Paràmetres de bloc: paràmetres amb nom amb fórmules, i diversos paràmetres de visibilitat en un bloc. Funciona a l'editor de blocs (assigna els objectes seleccionats a un estat) i sobre una referència seleccionada (els seus propis valors i estats). |
| `BREAK` | `BR` | Trenca una línia, arc, cercle o polilínia entre dos punts (BR) |
| `BREAKATPOINT` |  | Divideix una línia, arc o polilínia en dos en un punt |
| `BREAKLINE` |  | Dibuixa una línia amb un símbol de trencament; la seva mida i la prolongació més enllà dels extrems es recorden. |
| `BREPLACE` |  | BREPLACE canvia un bloc per un altre. Seleccionats: tria referències de bloc i anomena el bloc que s'usarà en lloc seu. Tots: anomena un bloc i el seu substitut, i cada referència a cada espai i dins d'altres blocs canvia. Una referència conserva el seu lloc, escala, rotació i capa, i els valors dels atributs que tots dos blocs tenen; els valors que el nou bloc no té lloc per guardar-los es descarten i s'indiquen. |
| `BSEARCH` |  | BSEARCH troba blocs. Nom: part d'un nom de bloc, o un patró amb * i ?. Atribut: un valor (o TAG=valor) que tenen els atributs d'una referència. Geometria: selecciona objectes o una referència de bloc, i es llisten els blocs la forma dels quals és com a mínim un 85 % semblant, el millor primer; la mida, la rotació i la simetria no compten. Les referències trobades a l'espai obert es seleccionen, a punt per a la següent ordre. |
| `BURST` |  | Descompon referències de bloc i conserva el que diuen els seus atributs: cada valor esdevé text a la capa de l'atribut. |
| `BVHIDE` | `BVH` | A l'editor de blocs: amaga objectes a l'estat de visibilitat actual. |
| `BVSHOW` | `BVSH` | A l'editor de blocs: mostra els objectes que amaga l'estat de visibilitat actual (es mostren esvaïts per triar-los). |
| `BVSTATE` | `BVS` | A l'editor de blocs, en un bloc amb estats de visibilitat: canvia a un estat, o afegeix, reanomena o suprimeix un. |
| `CAL` |  | Calcula una longitud o un número: + − * / i parèntesis, tal com els escrius en qualsevol lloc |
| `CENTERLINE` | `CL` | Línia de centre entre dues línies: a mig camí entre elles, o al llarg de la bisectriu quan es troben (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Marca de centre: una creu al centre d'un cercle o arc, amb línies de centre que sobresurten una mica (CM) |
| `CHAMFER` | `CHA` | Bisella la cantonada entre dues línies (D dues distàncies, A longitud i angle, P cada cantonada d'una polilínia) |
| `CHSPACE` |  | CHSPACE: mou objectes entre un full i el model a través d'una finestra gràfica. S'escalen i es giren perquè es vegin igual des de l'altra banda. En un full van al model; mentre treballes a través d'una finestra gràfica (MSPACE) van al full. |
| `CIRCLE` | `C` | Centre i radi, diàmetre, 2 o 3 punts |
| `CLASS` |  | Posa els objectes seleccionats en una classe, o sense selecció defineix la classe activa (? les llista) |
| `CLASSES` | `CLS` | El tauler de Classes: les classes ordenen objectes entre capes; mostra, amaga i dona estil, i les substitueix per finestra gràfica (CLS) |
| `COMMANDLINE` | `CMDLINE` | Acobla o fa flotar la línia d'ordres, la fa una sola línia, defineix les seves línies d'historial, o obre l'historial (F2) |
| `COMPARESETTINGS` | `CMPSET` | Compara estils de cota, estils de text, capes, fulls o unitats: dos en aquest dibuix, o aquest dibuix amb un altre obert, i copia un valor d'un a l'altre. |
| `CONSTRAINTBAR` | `CBAR` | Mostra o amaga les barres de restricció (Mostra-ho tot / Amaga-ho tot, o per objecte) |
| `COPY` | `CO`, `CP` | Copia objectes, tantes vegades com facis clic |
| `COPYBASE` |  | Copia objectes al porta-retalls amb un punt base que tries |
| `COPYCLIP` |  | Copia objectes al porta-retalls (Ctrl+C); PASTECLIP els col·loca |
| `COUNT` | `BCOUNT` | Compta referències de bloc: tria'n una per seleccionar i comptar cada referència del seu bloc |
| `COUNTTABLE` |  | Col·loca una taula de recomptes de blocs |
| `CREDITS` |  | Posa els crèdits de la biblioteca al dibuix com a taula. Torna a executar-la per actualitzar la taula amb els elements que hi ha ara al dibuix. |
| `CURSORSIZE` |  | La mida de la creueta: 100 la porta d'una vora a l'altra del dibuix (Configuració › Cursor › Pantalla completa) |
| `CUTCLIP` |  | Retalla objectes al porta-retalls (Ctrl+X): copia i després esborra |
| `CYLINDER` | `CYL` | Un cilindre: centre, radi i alçada (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Llista blocs, els seus atributs i propietats d'objectes com a taula al dibuix o en un fitxer CSV |
| `DATALINK` | `DL` | Una taula d'un fitxer CSV que recorda el fitxer, de manera que es pot tornar a llegir |
| `DATALINKUPDATE` | `DLU` | Torna a llegir el fitxer d'un enllaç de dades i torna a omplir les seves taules |
| `DCALIGNED` | `DCALI` | Restricció dimensional: distància real entre punts, un punt i una línia, o dues línies |
| `DCANGULAR` | `DCANG` | Restricció dimensional: angle entre dues línies, o d'un arc |
| `DCCONVERT` |  | Converteix cotes dibuixades sobre geometria restringible en restriccions dimensionals |
| `DCDIAMETER` | `DCDIA` | Restricció dimensional: diàmetre d'un cercle o arc |
| `DCDISPLAY` |  | Mostra o amaga les restriccions dimensionals del dibuix |
| `DCHORIZONTAL` | `DCHOR` | Restricció dimensional: distància horitzontal |
| `DCLINEAR` | `DCLIN` | Restricció dimensional: distància horitzontal o vertical, des d'on la col·loques |
| `DCRADIUS` | `DCRAD` | Restricció dimensional: radi d'un cercle o arc |
| `DCVERTICAL` | `DCVER` | Restricció dimensional: distància vertical |
| `DELBLOCKS` |  | Suprimeix blocs: cada referència (també les niades, a cada full) i les definicions |
| `DELCONSTRAINT` | `DELCON` | Treu cada restricció (geomètrica i dimensional) dels objectes que seleccionis |
| `DELOPENING` |  | Treu una porta o finestra d'un mur. |
| `DESCRIBE` | `DESC` | Diu què conté el dibuix: quants objectes, de quin tipus, de quina mida, què és seleccionat. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Neteja la selecció (Esc) |
| `DETAILS` | `DET` | Els detalls propis de la teva empresa, trobats per al que dibuixes: cerca, afegeix un bloc, llista, elimina, activa o desactiva les ofertes. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Dibuixa un diagrama a partir de text: un diagrama de flux Mermaid, un diagrama de components PlantUML, D2, una llista de-a o XML de draw.io, com a blocs i connectors que pots editar |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distància real entre dos punts |
| `DIMANGULAR` | `DAN`, `DIMANG` | Angle entre dues línies, d'un arc, o per tres punts |
| `DIMARC` | `DAR` | Cota de longitud d'arc: la distància al llarg d'un arc, amb el símbol d'arc (DAR) |
| `DIMASZ` |  | Configuració de cota: mida de la punta de fletxa |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Cotes apilades des d'una línia base |
| `DIMBREAK` | `DBREAK` | Trenca les línies de cota i d'extensió on creuen altres objectes (Automàtic), entre dos punts (Manual), o treu els trencaments |
| `DIMCONSTRAINT` | `DCON` | Restriccions dimensionals: lineals, alineades, angulars, de radi, de diàmetre, converteix |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Una cadena de cotes, cadascuna des de l'extrem de l'anterior |
| `DIMDEC` |  | Configuració de cota: decimals |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diàmetre d'un arc o cercle |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Allibera les cotes dels objectes als quals estan lligades (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Canvia el text de cota (Inici, Text nou, Gira) o inclina les línies d'extensió (Obliqua) |
| `DIMEXE` |  | Configuració de cota: prolongació més enllà de la línia de cota |
| `DIMEXO` |  | Configuració de cota: desplaçament des de l'origen |
| `DIMGAP` |  | Configuració de cota: espai al voltant del text |
| `DIMINSPECT` |  | Cota d'inspecció: un marc al voltant del valor amb una etiqueta i amb quina freqüència es comprova la peça |
| `DIMJOGGED` | `DJO`, `JOG` | Cota de radi amb ziga: un radi dibuixat des d'un punt més proper quan el centre és lluny (DJO) |
| `DIMJOGLINE` | `DJL` | Afegeix un símbol de ziga a una línia de cota lineal o alineada, per mostrar que la distància no està a escala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distància horitzontal o vertical (R per a qualsevol angle) |
| `DIMLUNIT` |  | Configuració de cota: format de longitud (1 científic, 2 decimal, 3 enginyeria, 4 arquitectònic, 5 fraccionari) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Cota de coordenada: la distància X o Y d'un punt des de l'origen del SCP, en una línia de referència (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Substitueix variables de cota a les cotes seleccionades sense canviar el seu estil; Neteja torna a posar l'estil (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radi d'un arc o cercle |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Lliga els punts d'una cota a objectes, de manera que la segueix i es torna a mesurar quan es mouen (DRE) |
| `DIMSCALE` |  | Configuració de cota: escala general (mides × això) |
| `DIMSPACE` |  | Espaiat uniforme entre cotes paral·leles, mesurat des d'una cota base (0 les alinea, Automàtic és dues vegades l'alçada del text) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Crea, canvia, defineix com a actual, suprimeix, aplica i compara estils de cota amb nom (el diàleg; -DIMSTYLE a la línia d'ordres) |
| `DIMTEDIT` | `DIMTED` | Mou el text de cota a l'esquerra, a la dreta o al centre de la línia de cota, o el gira |
| `DIMTEXTUNIT` | `DTU` | Text de cota en mm, cm, m o km, o en les pròpies unitats del dibuix: les cotes seleccionades, o si no les noves (DTU) |
| `DIMTXT` |  | Configuració de cota: alçada del text |
| `DIST` | `DI` | Distància i angle entre dos punts |
| `DISTRIBUTE` |  | Espaia els objectes seleccionats uniformement, de costat a costat o de dalt a baix: passos iguals entre centres, o espais iguals; els dos de fora es queden |
| `DIVIDE` | `DIV` | DIVIDE (DIV): marques que tallen una línia, arc, cercle, polilínia, spline o el·lipse en parts iguals. Punts, o amb Bloc un bloc a cada marca. |
| `DOCUMENTS` | `DOCS` | Obre el tauler de Documents: extracció i retorn de dibuixos, revisions, estats de publicació i aprovació d'una carpeta de projecte |
| `DOOR` | `DR` | Posa una porta en un mur. El costat on fas clic és el costat cap on s'obre. |
| `DRAWORDER` |  | Canvia l'ordre de dibuix: porta objectes al davant, els envia al darrere, o els posa per sobre o sota d'altres objectes. |
| `DUPLICATE` | `DUP` | Una còpia que es mou amb el punter: fes clic per deixar-la (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Les propietats del dibuix: títol, autor i la resta, i els teus propis parells de nom i valor |
| `DXFOUT` |  | Descarrega el dibuix com a DXF R12 (Desa manté el seu propi format) |
| `EATTEDIT` | `DDATTE` | Edita els atributs d'una referència de bloc: valors, text i propietats, un atribut cada vegada |
| `ELLIPSE` | `EL` | Punts finals dels eixos i l'altre semieix |
| `ERASE` | `E`, `DELETE` | Elimina objectes |
| `EXPLODE` | `X` | Trenca polilínies, blocs i cotes en les seves parts |
| `EXPORT` | `EXP` | Desa una còpia del dibuix en un tipus de fitxer que escriu un complement |
| `EXPORT3D` | `3DEXPORT` | Exporta el model 3D: GLB, OBJ o STL |
| `EXPORTPOINTS` | `EXPPTS` | Escriu punts, i els punts d'inserció dels blocs amb un atribut com a descripció, en un fitxer CSV o TXT (PNEZD, PENZD o XYZ) per a programes BIM i de topografia |
| `EXTEND` | `EX` | Allarga objectes perquè arribin a uns altres: fes clic prop d'un extrem, arrossega per diversos, o Shift+clic per retallar |
| `EXTRIM` |  | EXTRIM: tria una vora de tall, i després un costat. Tot el que creua la vora es retalla en aquell costat. Les parts que s'eliminarien es mostren mentre mous el punter. |
| `EXTRUDE` | `EXT` | Extrudeix objectes 2D tancats en sòlids (3D) |
| `FIELD` |  | Posa un camp en un text, en una cel·la de taula o en un atribut: una data, el nom del fitxer, el número de full, una propietat del dibuix, l'àrea o longitud d'un objecte, o una fórmula |
| `FILLET` | `F` | Arrodoneix o escaira la cantonada entre dos objectes (R radi, P cada cantonada d'una polilínia, M diverses) |
| `FIND` |  | Cerca i reemplaça paraules en text, valors d'atributs i text de cota |
| `FLATTEN` |  | Defineix l'alçada (Z) i el gruix dels objectes seleccionats a 0, també en els blocs que fan servir. |
| `FLOOR` |  | Tria la planta on dibuixar, n'afegeix una, o hi mou o copia la selecció. |
| `FLOORLAYERS` |  | Converteix les plantes en capes amb el nom Planta-Capa, per a un fitxer que va a algú sense plantes. |
| `FLOORS` | `FLR` | Obre el tauler de Plantes: apila plantes en un sol espai de model. |
| `GCCOINCIDENT` |  | Restricció: dos punts coincideixen, o un punt es queda sobre un objecte |
| `GCCOLLINEAR` |  | Restricció: dues línies es queden en una sola línia |
| `GCCONCENTRIC` |  | Restricció: dos cercles o arcs comparteixen un centre |
| `GCEQUAL` |  | Restricció: dues línies es mantenen de la mateixa longitud, o dos cercles/arcs del mateix radi |
| `GCFIX` |  | Restricció: un punt o un objecte sencer es queda on és |
| `GCHORIZONTAL` |  | Restricció: una línia (o dos punts) es queda horitzontal |
| `GCPARALLEL` |  | Restricció: dues línies es mantenen paral·leles |
| `GCPERPENDICULAR` |  | Restricció: dues línies es mantenen en angle recte |
| `GCSYMMETRIC` |  | Restricció: dos punts, línies o cercles es miren mútuament a través d'una línia |
| `GCTANGENT` |  | Restricció: una línia i un cercle o arc (o dos d'ells) es mantenen tangents |
| `GCVERTICAL` |  | Restricció: una línia (o dos punts) es queda vertical |
| `GDSIN` | `GDS` | Veu un layout de circuit integrat (un fitxer de flux GDSII): cada capa i tipus de dada com a capa de dibuix, pla, en unitats d'usuari; només per veure i mesurar (prova de laboratori) |
| `GEOMCONSTRAINT` | `GCON` | Restriccions geomètriques: horitzontal, vertical, paral·lela, tangent, coincident… |
| `GLBOUT` |  | Exporta el model 3D com a GLB (glTF) |
| `GRADIENT` | `GD` | Omple una àrea amb un degradat d'un o dos colors |
| `GRID` |  | Defineix la quadrícula: la distància entre les línies, cada N-èsima línia com a línia principal, ON o OFF, o Automàtic per seguir el zoom de nou |
| `GRIDMOVE` | `GM` | Mou una línia de quadrícula i el que hi penja: els murs s'estiren, les columnes, les bombolles i les etiquetes es mouen, les cotes segueixen. |
| `GROUP` | `G` | GROUP (G): dona als objectes seleccionats un nom que comparteixen. Un clic en un d'ells els selecciona tots. Enter al nom crea un grup sense nom. |
| `GROUPEDIT` |  | GROUPEDIT: canvia un grup. Tria un dels seus objectes o dona'n el Nom, i després Afegeix o Treu objectes, REName el reanomena, canvia la seva Descripció, o indica si un clic el selecciona sencer. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Omple una àrea amb un farciment sòlid o un patró: fes clic a dins, o selecciona objectes tancats (H) |
| `HATCHEDIT` | `HE` | Canvia una trama: patró, escala, angle, origen, i el seu enllaç a un contorn. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Torna a fer les polilínies del contorn a partir d'una trama, enllaçades a ella o no |
| `HATCHTOBACK` |  | Envia cada trama darrere de tot la resta. |
| `HELP` | `?` | Aquesta llista |
| `HIDEOBJECTS` |  | Amaga els objectes seleccionats fins a UNISOLATEOBJECTS. No es desa amb el dibuix. |
| `HISTORY` | `HIST` | HISTORY (HIST): les versions d'aquest dibuix —còpies que es guarden en aquest ordinador quan Studio el desa, i les versions del núvol— per obrir, restaurar i comparar amb el que ha canviat, mostrat en color. |
| `ID` |  | Coordenades d'un punt |
| `IMAGE` | `IM` | Dona a CadCraft els fitxers d'imatge que usa un dibuix (un DWG només guarda on eren). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Col·loca una imatge (PNG o JPEG) des d'un fitxer. |
| `IMAGECLIP` | `ICL` | Retalla una imatge a un rectangle o un polígon, o treu el seu retall. |
| `IMPORT` | `IMP` | Importa un fitxer d'un tipus que llegeix un complement, en aquest dibuix |
| `INSERT` | `I`, `DDINSERT` | Col·loca un bloc (S escala, R gira); F des d'un fitxer DWG/DXF, L des de la biblioteca |
| `INTERSECT` | `IN` | Conserva només el que els sòlids tenen en comú (3D), o l'àrea que comparteixen les regions 2D |
| `ISODRAFT` |  | ISODRAFT: dibuix isomètric activat o desactivat, o directament sobre el pla Esquerra, Superior o Dreta. Mentre és activat, Orto i el seguiment polar segueixen els dos eixos del pla, la quadrícula es dibuixa isomètrica, i ELLIPSE té Isocercle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Mostra només els objectes seleccionats; la resta d'aquest espai queda amagada fins a UNISOLATEOBJECTS. No es desa amb el dibuix. |
| `ISOPLANE` |  | ISOPLANE: tria el pla isomètric on dibuixar: Esquerra, Superior o Dreta. Enter passa al següent, com fa F5 mentre el dibuix isomètric és activat. |
| `JOIN` | `J` | Uneix línies, arcs i polilínies que es troben extrem a extrem en una sola polilínia; línies en una mateixa línia en una sola línia (J) |
| `LASER` | `LASERCUT` | Obre el tauler Làser: envia capes a una talladora o gravadora làser (G-code GRBL) |
| `LASSOMODE` |  | Mantenir i arrossegar dibuixa un llaç (1) o un rectangle (0) |
| `LAYDEL` |  | Suprimeix una capa i tots els objectes que hi ha (al model, als fulls i als blocs) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Obre el gestor de capes: totes les capes en una sola taula |
| `LAYERPANEL` |  | Mostra el tauler de capes |
| `LAYFRZ` |  | Congela la capa de cada objecte que triïs |
| `LAYGROUP` | `LG` | Agrupa capes en carpetes al tauler de Capes. |
| `LAYISO` |  | Aïlla les capes dels objectes seleccionats (cada altra capa apagada) |
| `LAYLOCKFADE` |  | Defineix quant s'esvaeixen els objectes de capes bloquejades, i si un clic els pot seleccionar. |
| `LAYMCUR` |  | Fa actual la capa de l'objecte que triïs |
| `LAYMRG` |  | Fusiona capes: els seus objectes passen a una capa de destí, i les capes fusionades desapareixen |
| `LAYOFF` |  | Apaga la capa de cada objecte que triïs |
| `LAYON` |  | Activa totes les capes |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Un full nou amb un caixetí i una finestra gràfica |
| `LAYTHW` |  | Descongela totes les capes |
| `LAYUNISO` |  | Torna a activar les capes que LAYISO va apagar |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Converteix text escrit amb les antigues fonts vietnamites (fonts TCVN3 / ABC com .VnTime, i fonts VNI com VNI-Times) a Unicode. Aquest text ja es mostra com es llegeix; això el reescriu del tot, amb un recompte i un sol pas de desfer. |
| `LENGTHEN` | `LEN` | Allarga o escurça línies, arcs i polilínies: per una quantitat, un percentatge, fins a un total, o arrossegant (LEN) |
| `LIBRARY` | `LIB` | El tauler de la biblioteca: col·loca elements, comprova actualitzacions, crèdits |
| `LIMITS` |  | Defineix els límits del dibuix: ON, OFF, o les cantonades inferior esquerra i superior dreta. Amb els límits ON, els punts fora són rebutjats |
| `LINE` | `L` | Segments rectes, cadascun un objecte propi |
| `LINETYPE` | `LT`, `CELTYPE` | El tipus de línia que reben els objectes nous (per capa, per bloc, o un amb nom) |
| `LINKVIEWS` | `SYNCVIEWS` | Desplaça i fes zoom a tots els panells junts (pantalla dividida), per comparar dos dibuixos o revisions |
| `LISPEDIT` | `VLIDE` | LISPEDIT (o VLIDE) obre l'editor LISP: una finestra per escriure, carregar i provar una rutina. Carregar al dibuix llegeix cada forma, com fa APPLOAD amb el fitxer, i fa les seves ordres. Executa la selecció avalua les formes seleccionades, o la forma on és el cursor. La consola mostra el que ha imprès la rutina i cada error amb la seva línia. La parèntesi corresponent es marca mentre escrius i Enter sagna la línia nova. Nou, Obre i Desa treballen sobre un fitxer .lsp. Les llistes al costat del text mostren les funcions que defineix la rutina, les que crida que aquest LISP encara no té, i totes les que té. La finestra no bloqueja el dibuix, de manera que una rutina pot demanar punts; Atura o Esc acaba una rutina en execució. |
| `LIST` | `LI`, `LS` | Descriu objectes a l'historial |
| `LTSCALE` | `LTS` | L'escala de tipus de línia del dibuix (cada guionet i cada espai es multipliquen per ella) |
| `LWDISPLAY` | `LWT` | Mostra o amaga els gruixos de línia a la pantalla (el botó LWT de la barra d'estat) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | El gruix de línia que reben els objectes nous (per capa, per bloc, per defecte, o mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | capes de mapa sota l'espai model: el sistema de coordenades del dibuix, mosaics, WMS, WMTS, ArcGIS, imatges |
| `MASSPROP` |  | MASSPROP: propietats de secció de regions i objectes tancats: àrea, perímetre, centroide, moments i producte d'inèrcia, radis de gir i els eixos principals. Exacte per a línies i arcs. Pot escriure l'informe en un fitxer de text. |
| `MATCHPROP` | `MA`, `PAINTER` | Iguala propietats: copia la capa, el color i més d'un objecte a uns altres (MA) |
| `MEASURE` | `ME` | MEASURE (ME): una marca cada longitud donada al llarg d'una línia, arc, cercle, polilínia, spline o el·lipse, des de l'extrem més proper al teu punt triat. Punts, o amb Bloc un bloc a cada marca. |
| `MEASUREGEOM` | `MEA` | Mesura una distància, un radi, un angle o una àrea (MEA) |
| `MINSERT` |  | MINSERT: col·loca un bloc en files i columnes d'una vegada. Cadascun és una referència pròpia, de manera que es pot moure o esborrar qualsevol d'ells. |
| `MIRROR` | `MI` | Simetria d'objectes respecte a una línia |
| `MLEADER` | `MLD`, `MLEAD` | Multiplicador: una fletxa, una línia de crida i una nota, com un sol objecte (MLD) |
| `MLEADERALIGN` | `MLA` | Alinea les línies de crida múltiples amb una d'elles en una direcció, a espais iguals, o distribuïdes entre dos punts (MLA) |
| `MLEADERCOLLECT` | `MLC` | Reuneix diverses línies de crida múltiples en una: els seus blocs en fila o columna, o les seves notes una sota l'altra (MLC) |
| `MLEADEREDIT` | `MLE` | Afegeix línies de crida a una línia de crida múltiple o les treu; canvia el seu contingut entre text i bloc (MLE) |
| `MLINE` |  | Dibuixa línies paral·leles juntes, unides a les cantonades. |
| `MOVE` | `M` | Mou objectes per un punt base i un segon punt |
| `MSPACE` | `MS` | Treballa sobre el model a través d'una finestra gràfica del full obert (o fes doble clic dins la finestra). |
| `MTEXT` | `MT`, `T` | Text de paràgraf: arrossega la seva amplada, després escriu al lloc; Enter comença un paràgraf nou (T) |
| `MVIEW` | `MV` | Una finestra gràfica sobre el model, en una presentació |
| `NAMEDVIEW` | `NV`, `VIEWS` | Vistes amb nom: desa la vista de la pantalla (o una finestra) sota un nom i hi torna (NV) |
| `NCOPY` |  | Copia objectes des d'una referència de bloc o un dibuix enllaçat al dibuix, sense descompondre'l. |
| `NEARBY` |  | Diu què hi ha a prop del cursor, el més proper primer, amb la distància i el costat. |
| `NEW` |  | Comença un dibuix nou |
| `OBJECTSCALE` | `OBJSCALE` | Escales d'anotació de text i cotes anotatius: afegeix una escala, suprimeix-ne una, afegeix l'escala actual, o les llista (cada finestra gràfica les mostra a la mida de la seva pròpia escala) |
| `OBJOUT` |  | Exporta el model 3D com a OBJ |
| `OFFICESTANDARD` | `OFFSTD` | L'estàndard de l'oficina: les alçades del text en paper, les capes, els camps del caixetí i les plantilles en un sol registre. Mostra el que està en vigor i d'on prové; Importa un registre .json en aquest dibuix, afegeix les capes d'oficina que li falten, i enumera els camps del caixetí. |
| `OFFSET` | `O` | Còpies paral·leles a una distància |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: com OFFSET tanca els buits a les cantonades exteriors d'una polilínia. 0 allarga els segments, 1 afegeix un arc, 2 afegeix un tall recte. Es manté per a aquesta sessió. |
| `OLELIST` | `OLES` | Enumera els objectes OLE que porta un dibuix i posa una còpia de la imatge d'un on triïs |
| `OPEN` |  | Obre un DWG o DXF d'aquest ordinador |
| `OPENIN3D` |  | Obre aquest dibuix a l'aplicació de modelatge 3D, en una pestanya nova (no es puja res) |
| `OPTIONKEYS` | `OPTKEYS` | Dona lletres pròpies a les opcions d'ordres (ARRAY.PO, P), en un fitxer de text |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Obre el menú de referències a objectes: tria quines referències estan activades. També un clic dret a Pas a la barra d'estat. |
| `OVERKILL` |  | Elimina objectes duplicats i fon línies i arcs que se superposen o es toquen extrem a extrem, dins d'una tolerància. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | El tauler de Paràmetres: paràmetres d'usuari i restriccions dimensionals en una sola taula |
| `PARTSLIST` | `PLIST` | Una taula de llista de peces de cada peça estàndard i secció d'acer col·locada des de la Biblioteca |
| `PASTEAREA` | `PAREA` | Enganxa una àrea copiada a MarkupCraft (Copia l'àrea) a la seva mida real, com a imatge. |
| `PASTEBLOCK` |  | PASTEBLOCK: enganxa el que has copiat com un sol bloc. El bloc rep un nom propi; RENAME li dona el teu. |
| `PASTECLIP` |  | Enganxa el porta-retalls: segueix el cursor, fes clic on ha d'anar (Ctrl+V) |
| `PASTEORIG` |  | Enganxa el porta-retalls a les coordenades des d'on es va copiar (Ctrl+Shift+V) |
| `PDF` |  | Dona a CadCraft els fitxers PDF que usen les subjacències del dibuix |
| `PDFADJUST` |  | Esvaeix, contrasta, en monocrom o desactiva una subjacència PDF |
| `PDFATTACH` | `PDFATT` | Adjunta una pàgina PDF com a subjacència (PDFATTACH) |
| `PDFCLIP` |  | Retalla una subjacència PDF a un rectangle o polígon |
| `PDFIMPORT` | `PDFIM` | Converteix les línies, els omplerts i el text d'una pàgina PDF en objectes del dibuix (PDFIMPORT) |
| `PDFLAYERS` |  | Activa o desactiva les capes d'una subjacència PDF |
| `PEDIT` | `PE` | Edita una polilínia: tanca, obre, uneix, amplada, ajusta corba, corba spline, desfer corba, generació de tipus de línia, inverteix; les línies, arcs i splines es poden convertir en polilínies |
| `PENPRESSURE` |  | Si la pressió d'un traç de llapis defineix el gruix de línia del que fan SKETCHFIX i SKETCHLIVE (activat per defecte). Es manté en aquest navegador. |
| `PHOTOSKETCH` | `PSK` | Converteix una foto d'un croquis fet a mà sobre paper en línies i arcs a escala, redreçant la perspectiva i donant a cada color de llapis la seva pròpia capa. |
| `PICKSTYLE` |  | PICKSTYLE: si seleccionar un objecte d'un grup selecciona tot el grup (1, la configuració inicial) o només aquell objecte (0). Es manté per a aquesta sessió. |
| `PLAN` |  | Gira la vista perquè l'eix X del SCP (SCP actual, un SCP desat, o el Món) quedi horitzontal a la pantalla. Res del dibuix es mou. |
| `PLINE` | `PL` | Una polilínia de segments de línia i d'arc |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Traça a PDF: una presentació, o el model a una escala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Taules d'estil de traçat: defineix com s'imprimeix cada color (color, negre, gris, tinta, gruix de línia); es desa amb el dibuix (STYLESMANAGER) |
| `POINT` | `PO` | Objectes de punt |
| `POINTCLOUD` | `PC` | el núvol de punts adjunt: retall, alçada, gruix, color, mida, visible, zoom, desvincula |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | adjunta un núvol de punts (LAS, LAZ, XYZ, PTS) sota el dibuix |
| `POLARANG` |  | El pas del seguiment polar en graus (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Un polígon regular |
| `PRESSPULL` |  | Empeny o estira una cara d'un sòlid (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Obre el tauler Propietats (també Ctrl+1, o fer doble clic a un objecte) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Plega el tauler Propietats cap a la vora de la finestra |
| `PSPACE` | `PS` | Surt de la finestra gràfica on treballes i torna al full (o fes doble clic fora). |
| `PUBLISH` | `-PUBLISH` | Traça diversos o tots els fulls en un sol PDF (una pàgina i un marcador per full) |
| `PURGE` | `PU` | Elimina les definicions de blocs que no usa res |
| `QDIM` |  | Cota ràpida: cota diversos objectes a la vegada (contínua, de línia base, esglaonada, coordenada, radi o diàmetre) |
| `QPMODE` | `QP` | Propietats ràpides pel cursor activades o desactivades |
| `QSELECT` | `QS` | Selecció ràpida: tots els objectes d'un tipus la capa, color, mida o nom dels quals coincideix (QS) |
| `RASTERSNAP` |  | Activa o desactiva l'ajust a les línies de fulls escanejats. |
| `RAY` |  | Semirecta: una línia de construcció des d'un punt, il·limitada en un sentit. |
| `RECOVER` |  | Obre un DXF o DWG malmès: salta el que no es pot llegir en lloc de rebutjar el fitxer, diu què s'ha saltat, i després revisa i repara el dibuix com fa AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Una polilínia tancada a partir de dues cantonades |
| `REDLINE` | `RDL` | Anotació a revisió: llegeix un paquet d'anotacions de MarkupCraft, accepta o rebutja cada canvi, núvol dels acceptats amb un registre de revisió, i desa el fitxer de respostes (RDL) |
| `REDO` |  | Refés el que s'ha desfet |
| `REFCLOSE` |  | Acaba d'editar un bloc al lloc: el desa, o descarta els canvis |
| `REFEDIT` |  | Edita un bloc al lloc on hi ha una referència, amb la resta del dibuix esvaït; REFCLOSE el desa |
| `REGEN` | `RE` | Reconstrueix el que es dibuixa en aquesta pestanya a partir del dibuix |
| `REGENALL` | `REA` | Reconstrueix el que es dibuixa en cada pestanya, panell i dibuix obert |
| `REGION` | `REG` | REGION (REG): crea regions planes a partir d'objectes tancats, o de línies, arcs i polilínies que es tanquen en un bucle extrem a extrem. UNION, SUBTRACT i INTERSECT combinen regions, i MASSPROP en dona les propietats de secció. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registra diversos escaneigs: els col·loca en un marc amb parells de punts triats o dianes, els refina amb ICP, i exporta un LAS o E57 |
| `REINIT` |  | Torna a carregar el fitxer d'àlies |
| `RENAME` | `-RENAME`, `REN` | Reanomena una capa o un bloc (cada objecte o referència el segueix) |
| `REVCLOUD` | `RC` | Núvol de revisió: arrodoneix un rectangle, un polígon, un camí a mà alçada o un objecte (RC) |
| `REVOLVE` | `REV` | Gira objectes 2D tancats al voltant d'un eix i els converteix en sòlids (3D) |
| `ROTATE` | `RO` | Gira objectes al voltant d'un punt base |
| `SAMPLES` | `SAMPLE` | Obre un dels dibuixos d'exemple de CadCraft (un conjunt arquitectònic, un as-built) per aprendre'n |
| `SAVE` | `QSAVE` | Descarrega el dibuix en el seu format (DWG o DXF) |
| `SAVEAS` |  | Descarrega el dibuix com a DWG o DXF: tria quin |
| `SAYSEL` |  | Diu què és seleccionat, una frase per objecte. |
| `SCALE` | `SC` | Escala objectes sobre un punt base |
| `SCALELISTEDIT` | `SCALELIST` | Afegeix, edita i suprimeix les escales pròpies del dibuix; apareixen a les llistes d'escales de finestra gràfica i de traçat i es desen al fitxer (SCALELIST) |
| `SCANALIGN` | `SCL` | Alinea un full escanejat amb dos punts: el mou, el gira i, si ho tries, l'escala. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Insereix un dibuix escanejat: un PNG, JPEG o TIFF (una pàgina o totes les d'un fitxer de diverses pàgines) o una pàgina PDF que és una imatge. |
| `SCANCLEAN` | `SCC` | Fa un full escanejat en blanc i negre i treu les taques. |
| `SCANCROP` | `SCR` | Retalla un full escanejat a una finestra. |
| `SCANDESKEW` | `SCD` | Troba l'angle en què estan les línies llargues d'un full escanejat i gira el full a escaire quan acceptes l'angle. |
| `SCANERASE` | `SCE` | Esborra una àrea d'un full escanejat: un rectangle, un polígon o un llaç. |
| `SCANINFO` | `SCI` | Mostra el fitxer original d'un full escanejat i els passos fets des d'aleshores. |
| `SCANSCALE` | `SCS` | Escala un full escanejat: tria dos punts sobre ell i escriu la distància real entre ells. |
| `SCANTRACE` | `SCT` | Tradueix un full escanejat en línies i arcs en una capa nova, amb una tolerància que defineixes. El text i els ombrejats es queden com a imatge. |
| `SELECT` |  | Selecciona objectes ara (per a P, Anterior, a l'ordre següent) |
| `SELECTALL` | `AI_SELALL` | Selecciona cada objecte que pots editar en aquesta pestanya (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Selecciona cada objecte com els que triïs: mateix tipus, capa i color (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Mostra el tauler Joc de fulls: fulls de molts dibuixos, numerats, publicats en un sol PDF. |
| `SHORTCUTS` | `KEYS` | Dona a qualsevol ordre una tecla pròpia (Ctrl o Alt amb una lletra, o una tecla de funció lliure), que es manté en aquest navegador o aplicació d'escriptori. |
| `SHXFONTS` | `SHX` | Dona a CadCraft tipus de lletra SHX d'una carpeta o de fitxers, perquè els estils de text que els esmenten es dibuixin amb ells (llista, elimina, inverteix) |
| `SKETCHFIX` | `SKF` | Dibuixa traços a mà alçada; cadascun esdevé una línia, cercle, arc, rectangle o polilínia nets, en escaire i units als altres. |
| `SKETCHLIVE` | `SKL` | Croquis amb un llapis: cada traç esdevé una línia, cercle, arc o rectangle precisos en aixecar el llapis, cargolats al dibuix, amb la mida per escriure a sobre. |
| `SPLINE` | `SPL` | Dibuixa una spline entre punts (o amb un polígon de control), o converteix una polilínia en una |
| `SPLINEDIT` | `SPE` | Edita una spline: punts d'ajust, punts de control i pesos, obre o tanca, inverteix, o la converteix en polilínia |
| `SPLIT` |  | Divideix l'àrea de dibuix en panells (com VPORTS sobre el model; també des d'un full) |
| `STEELMEMBER` | `SMEMBER` | Una barra d'acer en 3D a partir d'una secció estàndard: dos punts (una biga) o un punt base i una alçada (Columna) |
| `STLOUT` |  | Exporta el model 3D com a STL (mil·límetres) |
| `STRETCH` | `S` | Estira: arrossega una finestra d'intersecció sobre els extrems per moure; el que és dins es mou, la resta es queda (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Estils de text: el tipus de lletra, l'alçada, l'amplada i la inclinació que pren el text nou (el diàleg; -STYLE a la línia d'ordres) |
| `SUBTRACT` | `SU` | Treu sòlids d'altres (3D), o regions 2D de regions |
| `SWBOUT` | `SWMACRO` | Descarrega una macro per a SolidWorks (.swb) que reconstrueix el model com un sol croquis restringit |
| `SWEEP` |  | Desplaça objectes 2D tancats al llarg d'un camí (línia, polilínia, arc, cercle) i els converteix en sòlids (3D) |
| `TABLE` | `TB` | Fa una taula: files i columnes, o a partir de cel·les d'un full de càlcul del porta-retalls o d'un fitxer CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Edita una taula: escriu en una cel·la, insereix i suprimeix files i columnes, mides, cel·les combinades, alineació |
| `TABLEEXPORT` |  | Desa el que mostra una taula com a fitxer CSV |
| `TABLEPASTE` | `PASTETABLE` | Fa una taula a partir de cel·les d'un full de càlcul del porta-retalls |
| `TABLESTYLE` | `TS` | Estils de taula: alçades de text, alineació, marge i vores per a les files de títol, capçalera i dades |
| `TAGS` |  | Etiquetes a referències de bloc: defineix una etiqueta (tipus, valors permesos, blocs als quals s'aplica), la posa a les referències seleccionades, i les llista com un quadre que pots desar com a CSV |
| `TEXT` | `DT`, `DTEXT` | Text d'una línia; Enter comença la línia següent |
| `TEXTEDIT` | `ED`, `DDEDIT` | Edita text al lloc: tria un text (o fes-hi doble clic) (ED) |
| `TEXTMASK` | `TMASK` | Posa una màscara de fons darrere dels textos (el fons del dibuix o un color), o la treu. |
| `TEXTTOFRONT` |  | Porta tot el text, les cotes i les línies de crida al davant de la resta. |
| `TOOLBAR` |  | Tria què mostren els botons de la barra d'eines: icones i text, només icones, o només text (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Posa la barra d'eines a dalt, a baix, a l'esquerra o a la dreta de la finestra |
| `TOOLBARROWS` |  | Tria quantes files usa la barra d'eines: ajustar, 2, o 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Fa les barres sobre el dibuix estàndard o compactes |
| `TOUCHCROSSHAIR` | `TCX` | Creueta desplaçada per dibuixar amb el dit: un dit mou una creueta que se situa per sobre i al costat, de manera que el dit no tapa el punt triat. Aixecar el dit no tria res; el botó Clic o un toc amb un segon dit tria a la creueta, i mantenir Clic mentre mous arrossega. Una pressió llarga o el botó Enter és Enter. Dos dits desplacen i fan zoom. Opcions: ON, OFF, Automàtic (només on el dit és l'únic punter), Distància, Costat. |
| `TOUR` | `TUTORIAL` | Fa de nou el recorregut de primer dibuix en sis passos |
| `TRIM` | `TR` | Retalla objectes fins on els creuen altres: fes clic a un tros, arrossega per diversos, o Shift+clic per allargar |
| `TRIMEXTENDMODE` |  | Com comencen TRIM i EXTEND: 1 Ràpid (cada objecte és una vora de tall o un límit), 0 Estàndard (tries les vores primer) |
| `TTR` |  | Un cercle tangent a dos objectes, amb un radi que dones (el mateix que CIRCLE T). |
| `TURNLEFT` |  | Gira la vista 90° a l'esquerra (en sentit antihorari): Z del SCP −90, i la vista segueix. Res del dibuix es mou. |
| `TURNRIGHT` |  | Gira la vista 90° a la dreta (en sentit horari): Z del SCP 90, i la vista segueix. Res del dibuix es mou. |
| `TURNWORLD` |  | Torna al món: SCP Món, i la vista és horitzontal de nou. |
| `TXT2MTXT` | `T2M` | Uneix textos d'una línia en un sol text de paràgraf, de dalt a baix. |
| `UCS` |  | El teu propi sistema de coordenades: un origen i un eix X (origen, angle Z, 3punts, OBjecte, Anterior, Món, NAmb nom). Els punts que escrius, orto, seguiment polar, la quadrícula i el text nou el segueixen; la vista gira perquè el seu eix X quedi horitzontal. Res del dibuix es mou. |
| `UNDO` | `U` | Desfà l'última ordre |
| `UNGROUP` |  | UNGROUP: separa grups. Selecciona objectes dels grups, o dona un Nom. Els objectes es queden al dibuix. |
| `UNION` | `UNI` | Uneix sòlids en un de sol (3D), o regions 2D en una sola regió |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Mostra de nou cada objecte amagat per ISOLATEOBJECTS o HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Com s'escriuen i s'escriuen les longituds: decimal, peus i polzades, fraccions (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Torna a calcular els camps, i tria quan s'actualitzen sols |
| `USDOUT` |  | Exporta el model 3D com a USD (.usda text, .usdc binari o un paquet .usdz) |
| `VIEW` | `-VIEW`, `V` | Vistes 3D estàndard, en perspectiva o paral·leles (3D) |
| `VIEWBASE` | `FLATSHOT` | Col·loca una vista 2D plana dels sòlids 3D (davant, superior, lateral o isomètrica, línies ocultes en discontinu) en un full o al model |
| `VIEWLABEL` | `VL` | Un títol de vista en un full que mostra el nom de la vista de la seva finestra gràfica, i canvia amb ella. |
| `VOICE` |  | Activa o desactiva les ordres parlades. Es reconeixen en aquest ordinador. |
| `VPCLIP` |  | Retalla una finestra gràfica de full a un objecte tancat o a un polígon dibuixat; Suprimeix la torna a fer un rectangle |
| `VPLAYER` |  | Congela o descongela capes només en algunes finestres gràfiques (Congela, Descongela, Restableix), i tria quines capes comencen congelades en les finestres noves (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Divideix l'àrea de dibuix en panells, cadascun amb la seva pròpia vista (en un full: una finestra gràfica, com MVIEW) |
| `VPVIEW` |  | Defineix què mostra una finestra gràfica: tria una finestra sobre el model |
| `VSCURRENT` | `VS`, `SHADEMODE` | Estil visual de la vista 3D: ombrejat, arestes, línia oculta, filferro, raigs X |
| `WALL` | `WA` | Dibuixa murs 2D com una polilínia. Es uneixen, i porten portes i finestres. |
| `WALLARC` | `WARC` | Dibuixa un arc de murs. Els murs en planta són rectes, així que l'arc es dibuixa com a murs rectes curts (15 graus cadascun) que s'uneixen. |
| `WALLDELSEG` |  | Suprimeix un tros de mur entre dos punts. El que queda es manté com un o dos murs. |
| `WALLDIM` |  | Escriu un valor nou per a una cota: el mur de l'extrem llunyà es mou en escaire respecte a si mateix, el mur del primer extrem es manté, i els murs units a ell el segueixen. |
| `WALLDISJOIN` |  | Tria un mur prop d'un extrem per no permetre les unions en aquell extrem: l'extrem es dibuixa en escaire i res no el segueix. Torna a triar-lo per permetre-les. |
| `WALLGRID` |  | Bloqueja un mur a una línia de quadrícula: al llarg, o un extrem sobre ella. Mou la línia amb GRIDMOVE i el mur la segueix. |
| `WALLHOLD` |  | Alinea i bloqueja: un mur manté el seu lloc respecte a un altre mur (sobre la seva línia, o a la distància que té). Si un es mou, l'altre el segueix. |
| `WALLHOLDDIM` |  | Bloqueja la distància entre dos murs paral·lels. Si un es mou, l'altre el segueix per mantenir-la. |
| `WALLHOLDS` |  | Llista els bloquejos dels murs. |
| `WALLJOINS` |  | Dona a cada mur d'un dibuix antic el seu identificador i desa les unions entre ells. També passa en el primer canvi que fas. |
| `WALLJOINSTYLE` |  | Fes clic en una cantonada on es troben dos murs extrem a extrem per canviar com es dibuixa: bisell, pla, a escaire. T canvia quin mur travessa. |
| `WALLOFFSET` | `WO` | Mou un mur en escaire respecte a si mateix una distància (els murs units el segueixen), o fa una còpia a aquella distància. |
| `WALLPICK` |  | Fa murs sobre una línia o polilínia del dibuix, amb les línies units a ella si dius Sí. |
| `WALLPOLY` | `WP` | Dibuixa murs al voltant d'un polígon regular de 3 a 64 costats, com POLYGON. |
| `WALLRECT` | `WR` | Dibuixa quatre murs units a partir de dues cantonades oposades, com RECTANG. |
| `WALLREJOIN` |  | Fa de nou un sol mur a partir de dues parts d'un mur. La primera conserva el seu lloc al dibuix. |
| `WALLROT` |  | Dibuixa quatre murs units com un rectangle girat a qualsevol angle: el primer costat, i després fins on arriba l'altre. |
| `WALLSPLIT` | `WS` | Divideix un mur en dos en un punt o on creua un altre mur. Les parts es mantenen unides llevat que demanis un buit o extrems lliures. Les portes i finestres van amb la seva part. |
| `WALLSPLITGAP` |  | Divideix un mur deixant un buit: escriu el buit, tria el mur, i després el punt. Les parts tenen extrems lliures i es poden tornar a unir. |
| `WALLSTRETCH` |  | Estira amb una finestra: els extrems de mur dins seu es mouen, els murs completament dins es mouen sencers, i els murs que topen als seus costats llisquen amb ells. |
| `WALLTAN` |  | Continua un mur amb un arc que en surt al llarg del mur (dibuixat com a murs rectes curts). |
| `WALLTRACE` |  | Fa murs al voltant de l'àrea tancada més petita de línies i murs al voltant del punt on fas clic. |
| `WALLUNHOLD` |  | Treu els bloquejos d'un mur (i els bloquejos d'altres murs a ell). |
| `WBLOCK` | `W`, `-WBLOCK` | Escriu un bloc, alguns objectes o tot el dibuix en un fitxer DWG o DXF nou (W) |
| `WEDGE` | `WE` | Una falca: dues cantonades i una alçada; s'inclina allunyant-se de la primera cantonada (3D) |
| `WHEREAMI` | `WHERE` | Diu on és el cursor. |
| `WHOHAS` |  | Diu qui té obert un dibuix. CadCraft Studio manté un petit fitxer de bloqueig al costat de cada dibuix obert (Plan.dwg.cclock: qui, des de quan, quina versió) i l'elimina en tancar. Opcions: Actual (el dibuix obert), Fitxer (tria'n un), Carpeta (cada dibuix d'una carpeta que és obert en algun lloc; això també permet a Studio mantenir fitxers de bloqueig en aquella carpeta), Camí (escriu-lo), Nom (el nom que veuen els altres). Un bloqueig que no s'ha refrescat en cinc minuts es diu obsolet. No disponible en un navegador. |
| `WINDOW` | `WN` | Posa una finestra en un mur. |
| `XATTACH` | `XA` | Enllaça un altre DWG o DXF en aquest dibuix, només de lectura (XREF els llista i els torna a carregar) |
| `XCLIP` | `XC` | Retalla referències de bloc i dibuixos enllaçats a un rectangle o un polígon, o treu el retall. |
| `XLINE` | `XL` | Línia de construcció, il·limitada en els dos sentits: per dos punts, horitzontal, vertical, en un angle, bisectant un angle, o desplaçada d'una línia. |
| `XREF` | `XR`, `-XREF` | Dibuixos enllaçats (referències externes): llista, adjunta, torna a carregar, lliga, desvincula |
| `ZOOM` | `Z` | Extensió, o una finestra |
