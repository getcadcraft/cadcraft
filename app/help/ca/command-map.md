---
title: Mapa d'ordres: què escriure
summary: Totes les ordres de CadCraft amb els seus noms curts, de la A a la Z, extretes del mateix programa, i els hàbits d'altres programes de dibuix que canvien.
keywords: mapa d'ordres, ordres, àlies, noms curts, des d'altres programes, llista d'ordres, què escriure, esborra, retalla, equivalent, diferències
from: 3bdfd3e6
---

CadCraft accepta els noms d'ordres i els noms curts que la gent coneix d'altres programes de dibuix: escriviu `L` per a una línia, `TR` per retallar, `E` per esborrar. Per tant, per a la majoria no cal aprendre cap taula de traducció: el nom que coneixeu és el nom aquí. La llista següent conté totes les ordres que té CadCraft, extretes del mateix programa. {{key:Enter}} repeteix l'última ordre; `HELP` a la línia d'ordres mostra la mateixa llista.

Les poques que no són iguals, o que encara no estan implementades:

- **Desa** baixa una còpia al navegador ({{cmd:SAVE}}, {{cmd:SAVEAS}}); a CadCraft Studio escriu el fitxer. Vegeu [Des d'altres programes de dibuix](topic:coming-from).
- **PLOT** crea un PDF (també PNG i SVG), amb una taula d'estils de traçat; no hi ha gestor de configuració de pàgina.
- **DIMSTYLE** i **PEDIT** estan implementades; **PEDIT** no té l'opció de vèrtex d'edició (això ho fan les nanses).
- **TABLE** encara no està implementada; {{cmd:XREF}}, {{cmd:SPLINE}} i {{cmd:WBLOCK}} sí.
- Les ordres pròpies d'una rutina (AutoLISP `C:NOM`) apareixen després de carregar-la amb {{cmd:APPLOAD}}; no són aquí.

## Totes les ordres (398)

| Ordre | Noms curts | Què fa |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Orbita la vista 3D amb el botó esquerre |
| `ACCESS` | `AX` | Activa o desactiva el dibuix sense vista: resultats llegits pel lector de pantalla, un cursor de teclat al dibuix, sons d'enganxament i ordres per veu. |
| `ALIASEDIT` |  | Edita els àlies d'ordres en un sol fitxer de text (el format conegut L, *LINE) |
| `ALIGN` | `AL` | Mou i gira objectes perquè els punts d'origen caiguin sobre els punts de destí (un, dos o tres parells), i els escala si ho voleu |
| `ALIGNPANEL` | `ALP` | Obre el tauler Alinea i distribueix |
| `ALIGNTO` |  | Alinea les vores esquerra, centre, dreta, superior, mitjana o inferior dels objectes seleccionats, sobre la selecció, el primer o l'últim objecte triat, o un punt |
| `ANNOALLVISIBLE` | `ANNOALL` | Mostra els objectes d'anotació a totes les escales, o només on l'escala de la finestra gràfica (o del dibuix) és a la seva llista |
| `ANNOSCALE` | `CANNOSCALE` | Defineix l'escala d'anotació del dibuix: el text i les cotes anotatives es redimensionen per imprimir-se a la mateixa mida |
| `APPLOAD` | `AP` | Carrega aplicacions: rutines LISP (.lsp) i els seus fitxers de diàleg (.dcl); la Startup Suite (AP) |
| `ARC` | `A` | Arc: 3 punts, Inici/Centre/Final, Inici/Centre/Angle, Inici/Centre/Longitud, Inici/Final/Angle, Inici/Final/Direcció, Inici/Final/Radi, Centre/Inici/Final, Centre/Inici/Angle, Centre/Inici/Longitud, Continua |
| `AREA` | `AA` | Àrea i perímetre per punts o d'un objecte; Afegeix i Resta mantenen un total acumulat (AA) |
| `ARRAY` | `AR` | Còpies en files i columnes, o al voltant d'un centre (AR) |
| `ARRAYASSOCIATIVITY` |  | Defineix si les ordres ARRAY fan matrius que continuen sent editables (1) o còpies simples (0) |
| `ARRAYCLOSE` |  | Acaba l'edició dels objectes d'origen d'una matriu |
| `ARRAYEDIT` |  | Canvia una matriu feta amb l'opció Associativa: nombres, espaiat, objectes d'origen, un sol element |
| `ARRAYPATH` |  | Còpies d'objectes al llarg d'una línia, arc, polilínia o altra corba |
| `ARRAYPOLAR` |  | Còpies al voltant d'un punt central |
| `ARRAYRECT` |  | Còpies en files i columnes |
| `ASBUILT` | `ASB` | ASBUILT llegeix els punts tal com s'han construït que un equip ha mesurat (CSV / TXT, tal com els escriu EXPORTPOINTS) i els compara amb els punts del dibuix: dins o fora de la tolerància, no mesurats, sobrants. Els marca a la capa AS-BUILT i baixa un informe CSV. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Defineix un atribut (una etiqueta que un bloc demana un valor) per posar-lo en un bloc (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Edita els valors dels atributs d'una referència de bloc a la línia d'ordres, un després de l'altre (Enter manté un valor) |
| `ATTSYNC` |  | Posa les referències d'un bloc d'acord amb les seves definicions d'atribut: se n'afegeixen de noves amb els valors per defecte, es treuen les eliminades, es reinicien posicions i text; els valors es mantenen |
| `AUDIT` |  | Revisa el dibuix obert per detectar danys: nombres que no són finits, objectes sense mida, capes, blocs, estils i tipus de línia que falten, blocs que es contenen a si mateixos, identificadors compartits, cotes i trames trencades. Enumera el que troba per tipus i pregunta abans de corregir; la correcció és un sol pas de Desfés. |
| `AUNITS` | `ANGUNITS` | Com es mostren i s'escriuen els angles: graus decimals, graus-minuts-segons o rumbs com N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Activa o desactiva l'autocompletat del dibuix, o llista què suggereixen ara els patrons del dibuix. |
| `AUTOCONSTRAIN` |  | Afegeix restriccions de coincidència, horitzontal i vertical on la geometria ja és a prop |
| `AUTODIM` | `ADIM` | Acota segons regles: mida total, cadenes al llarg dels costats, obertures, diàmetres de forats i espaiat de quadrícula, sense repetir el que ja està acotat. |
| `AUTOSHEET` | `ASH` | Disposa fulls tot sol: tria paper i escales estàndard i col·loca cada vista amb un títol i un caixetí. |
| `BATTMAN` |  | Gestor d'atributs de bloc: ordre, etiquetes, indicacions, valors per defecte i modes dels atributs d'un bloc, i després s'actualitzen les seves referències |
| `BCLOSE` |  | Tanca l'editor de blocs: desa el bloc o descarta els canvis |
| `BCONVERT` |  | BCONVERT troba geometria que es repeteix i la converteix en referències de bloc. Seleccioneu els objectes que es repeteixen: es troba cada altre conjunt d'objectes de l'espai obert que té la mateixa geometria, desplaçat i girat per qualsevol angle; amb Mirall i Escalat activats també es troben imatges especulars i còpies a una altra mida. Doneu un nom al nou bloc i un punt base; la selecció i cada còpia es converteixen en referències a ell, cadascuna amb el seu propi gir i escala. O bé trieu Bloc i indiqueu un bloc existent per trobar còpies soltes dels seus objectes. Una còpia ha de tenir la mateixa capa, color, tipus de línia i gruix de línia tret que Propietats estigui en Ignora. Els objectes en capes bloquejades no es toquen. Un sol pas de Desfés. |
| `BEDIT` | `BE` | Editor de blocs: edita els objectes i atributs d'un bloc; BCLOSE desa (BE) |
| `BLEND` |  | BLEND: una spline entre els extrems de dues corbes obertes, triades a prop dels extrems per unir-les. CONtinuity: Tangent segueix les dues direccions, Suau segueix també com es corben. |
| `BLOCK` | `B`, `BMAKE` | Crea un bloc a partir d'objectes (esdevenen una sola referència) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: cada referència a un bloc esdevé una referència a un altre, al mateix lloc i amb la mateixa escala i gir. Es mantenen els valors dels atributs que tenen tots dos blocs. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE mostra el tauler Blocs amb el cursor al seu filtre. El tauler mostra una imatge de cada bloc (els col·locats més recentment primer), en llista o en quadrícula; feu clic a una imatge o arrossegueu-la al dibuix per col·locar el bloc amb INSERT. A Biblioteques, afegiu un fitxer DWG o DXF propi: els seus blocs es llisten amb imatges i es copien en aquest dibuix quan en col·loqueu un. A CadCraft Studio també es pot afegir una carpeta de dibuixos, i els fitxers i les carpetes es recorden. |
| `BOMEDIT` | `BOMCOLUMNS` | Les columnes, agrupació, ordenació, títol, totals i observacions d'una taula de llista de materials |
| `BOMEXPORT` |  | Desa una taula de llista de materials com a fitxer .csv |
| `BOMTABLE` | `BOM` | Una taula viva de llista de materials d'una zona, o de tot el dibuix |
| `BOMUPDATE` |  | Actualitza ara totes les taules de llista de materials, també les congelades |
| `BOMZONE` | `BZONE` | Una àrea amb nom del dibuix per a una llista de materials: dues cantonades, un polígon, o el contorn d'un objecte tancat |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): trieu un punt dins d'una àrea tancada i obtindreu una polilínia tancada al seu voltant. Els arcs continuen sent arcs. Illes contorna també les àrees que hi ha dins. |
| `BOX` |  | Una caixa: dues cantonades i una alçada (3D) |
| `BPARAMETER` | `BPARAM` | Encara no implementada: afegir un paràmetre (com Visibilitat) a un bloc. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Paràmetres de bloc: paràmetres amb nom i fórmules, i diversos paràmetres de visibilitat en un sol bloc. Funciona a l'editor de blocs (assigna els objectes seleccionats a un estat) i sobre una referència seleccionada (els seus propis valors i estats). |
| `BREAK` | `BR` | Trenca una línia, arc, cercle o polilínia entre dos punts (BR) |
| `BREAKATPOINT` |  | Divideix una línia, arc o polilínia en dos en un punt |
| `BREAKLINE` |  | Dibuixa una línia amb un símbol de trencament; es recorden la seva mida i la prolongació més enllà dels extrems. |
| `BREPLACE` |  | BREPLACE canvia un bloc per un altre. Seleccionats: trieu referències de bloc i indiqueu el bloc que cal usar en el seu lloc. Tots: indiqueu un bloc i el seu substitut, i cada referència a cada espai i dins d'altres blocs canvia. Una referència manté el seu lloc, escala, gir i capa, i els valors dels atributs que tenen tots dos blocs; els valors que el nou bloc no pot acollir es descarten i se n'indiquen els noms. |
| `BSEARCH` |  | BSEARCH troba blocs. Nom: part del nom d'un bloc, o un patró amb * i ?. Atribut: un valor (o TAG=valor) que tenen els atributs d'una referència. Geometria: seleccioneu objectes o una referència de bloc, i es llisten els blocs la forma dels quals és com a mínim un 85 % semblant, del millor al pitjor; la mida, el gir i el mirall no compten. Les referències trobades a l'espai obert se seleccionen, a punt per a la següent ordre. |
| `BURST` |  | Descompon referències de bloc i conserva el que diuen els seus atributs: cada valor esdevé text a la capa de l'atribut. |
| `BVHIDE` | `BVH` | A l'editor de blocs: amaga objectes de l'estat de visibilitat actual. |
| `BVSHOW` | `BVSH` | A l'editor de blocs: mostra objectes que l'estat de visibilitat actual amaga (es veuen esvaïts per poder-los triar). |
| `BVSTATE` | `BVS` | A l'editor de blocs, en un bloc amb estats de visibilitat: canvia a un estat, o n'afegeix, reanomena o n'esborra un. |
| `CAL` |  | Calcula una longitud o un nombre: + − * / i parèntesis, tal com els escriviu en qualsevol lloc |
| `CENTERLINE` | `CL` | Línia de centre entre dues línies: a mig camí entre elles, o al llarg de la bisectriu quan es troben (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Marca de centre: una creu al centre d'un cercle o arc, amb línies de centre que sobresurten una mica (CM) |
| `CHAMFER` | `CHA` | Bisela la cantonada entre dues línies (D dues distàncies, A longitud i angle, P cada cantonada d'una polilínia) |
| `CHSPACE` |  | CHSPACE: mou objectes entre un full i el model a través d'una finestra gràfica. S'escalen i es giren perquè es vegin igual des de l'altre costat. En un full van al model; mentre treballeu a través d'una finestra gràfica (MSPACE) van al full. |
| `CIRCLE` | `C` | Centre i radi, diàmetre, 2 o 3 punts |
| `CLASS` |  | Posa els objectes seleccionats en una classe, o, sense res seleccionat, defineix la classe activa (? les llista) |
| `CLASSES` | `CLS` | El tauler Classes: les classes ordenen objectes entre capes; les mostra, amaga i estilitza, i les modifica per finestra gràfica (CLS) |
| `COMMANDLINE` | `CMDLINE` | Acobla o deixa flotant la línia d'ordres, la fa d'una sola línia, defineix les seves línies d'historial, o obre l'historial (F2) |
| `COMPARESETTINGS` | `CMPSET` | Compara estils de cota, estils de text, capes, fulls o unitats: dos d'aquest dibuix, o aquest dibuix amb un altre d'obert, i copia un valor d'un a l'altre. |
| `CONSTRAINTBAR` | `CBAR` | Mostra o amaga les barres de restricció (Mostra-ho tot / Amaga-ho tot, o per objecte) |
| `COPY` | `CO`, `CP` | Copia objectes, tantes vegades com feu clic |
| `COPYBASE` |  | Copia objectes al porta-retalls amb un punt base que trieu |
| `COPYCLIP` |  | Copia objectes al porta-retalls (Ctrl+C); PASTECLIP els enganxa |
| `COUNT` | `BCOUNT` | Compta referències de bloc: trieu-ne una per seleccionar i comptar cada referència del seu bloc |
| `COUNTTABLE` |  | Col·loca una taula de recomptes de blocs |
| `CREDITS` |  | Posa els crèdits de la biblioteca al dibuix en forma de taula. Torneu-la a executar per actualitzar la taula amb els elements del dibuix ara. |
| `CURSORSIZE` |  | La mida de la creueta: 100 la fa anar d'una vora a l'altra del dibuix (Configuració › Cursor › Pantalla completa) |
| `CUTCLIP` |  | Retalla objectes al porta-retalls (Ctrl+X): copia i després esborra |
| `CYLINDER` | `CYL` | Un cilindre: centre, radi i alçada (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Llista blocs, els seus atributs i propietats dels objectes com una taula al dibuix o en un fitxer CSV |
| `DATALINK` | `DL` | Una taula d'un fitxer CSV que recorda el fitxer, per poder-lo tornar a llegir |
| `DATALINKUPDATE` | `DLU` | Torna a llegir el fitxer d'un enllaç de dades i omple de nou les seves taules |
| `DCALIGNED` | `DCALI` | Restricció dimensional: distància real entre punts, un punt i una línia, o dues línies |
| `DCANGULAR` | `DCANG` | Restricció dimensional: angle entre dues línies, o d'un arc |
| `DCCONVERT` |  | Converteix cotes dibuixades sobre geometria restringible en restriccions dimensionals |
| `DCDIAMETER` | `DCDIA` | Restricció dimensional: diàmetre d'un cercle o arc |
| `DCDISPLAY` |  | Mostra o amaga les restriccions dimensionals al dibuix |
| `DCHORIZONTAL` | `DCHOR` | Restricció dimensional: distància horitzontal |
| `DCLINEAR` | `DCLIN` | Restricció dimensional: distància horitzontal o vertical, des del lloc on la col·loqueu |
| `DCRADIUS` | `DCRAD` | Restricció dimensional: radi d'un cercle o arc |
| `DCVERTICAL` | `DCVER` | Restricció dimensional: distància vertical |
| `DELBLOCKS` |  | Esborra blocs: cada referència (també les niuades, en cada full) i les definicions |
| `DELCONSTRAINT` | `DELCON` | Treu cada restricció (geomètrica i dimensional) dels objectes que seleccioneu |
| `DELOPENING` |  | Treu una porta o finestra d'un mur. |
| `DESCRIBE` | `DESC` | Diu què conté el dibuix: quants objectes, de quin tipus, quina mida, què hi ha seleccionat. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Neteja la selecció (Esc) |
| `DETAILS` | `DET` | Els detalls propis de la vostra oficina, trobats segons el que dibuixeu: cerca, afegeix un bloc, llista, treu, activa o desactiva les propostes. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Dibuixa un diagrama a partir de text: un diagrama de flux Mermaid, un diagrama de components PlantUML, D2, una llista de-a o XML de draw.io, com a blocs i connectors que podeu editar |
| `DIMALIGNED` | `DAL`, `DIMALI` | Distància real entre dos punts |
| `DIMANGULAR` | `DAN`, `DIMANG` | Angle entre dues línies, d'un arc, o per tres punts |
| `DIMARC` | `DAR` | Cota de longitud d'arc: la distància al llarg d'un arc, amb el símbol d'arc (DAR) |
| `DIMASZ` |  | Paràmetre de cota: mida de la fletxa |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Cotes apilades des d'una línia base |
| `DIMBREAK` | `DBREAK` | Trenca les línies de cota i d'extensió on creuen altres objectes (Automàtic), entre dos punts (Manual), o en treu els trencaments |
| `DIMCONSTRAINT` | `DCON` | Restriccions dimensionals: lineal, alineada, angular, radi, diàmetre, converteix |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Una cadena de cotes, cadascuna des del final de l'anterior |
| `DIMDEC` |  | Paràmetre de cota: xifres decimals |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diàmetre d'un arc o cercle |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Allibera les cotes dels objectes als quals estan lligades (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Canvia el text de cota (Inici, Text nou, Gira) o inclina les línies d'extensió (Obliqua) |
| `DIMEXE` |  | Paràmetre de cota: extensió més enllà de la línia de cota |
| `DIMEXO` |  | Paràmetre de cota: desplaçament des de l'origen |
| `DIMGAP` |  | Paràmetre de cota: separació al voltant del text |
| `DIMINSPECT` |  | Cota d'inspecció: un marc al voltant del valor amb una etiqueta i la freqüència amb què es comprova la peça |
| `DIMJOGGED` | `DJO`, `JOG` | Cota de radi en ziga-zaga: un radi dibuixat des d'un punt més proper quan el centre és lluny (DJO) |
| `DIMJOGLINE` | `DJL` | Afegeix un símbol de ziga-zaga a una línia de cota lineal o alineada, per mostrar que la distància no és a escala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Distància horitzontal o vertical (R per a qualsevol angle) |
| `DIMLUNIT` |  | Paràmetre de cota: format de longitud (1 científic, 2 decimal, 3 enginyeria, 4 arquitectònic, 5 fraccionari) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Cota de coordenada: la distància X o Y d'un punt des de l'origen del SCP, amb una línia de crida (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Substitueix variables de cota en les cotes seleccionades sense canviar el seu estil; Neteja torna a posar l'estil (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radi d'un arc o cercle |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Lliga els punts d'una cota a objectes, de manera que la cota se segueix i es torna a mesurar quan es mouen (DRE) |
| `DIMSCALE` |  | Paràmetre de cota: escala global (mides × aquest valor) |
| `DIMSPACE` |  | Espaiat uniforme entre cotes paral·leles, mesurat des d'una cota base (0 les alinea, Automàtic és el doble de l'alçada del text) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Crea, canvia, defineix com a actual, esborra, aplica i compara estils de cota amb nom (el diàleg; -DIMSTYLE a la línia d'ordres) |
| `DIMTEDIT` | `DIMTED` | Mou el text de cota a l'esquerra, dreta o centre de la línia de cota, o el gira |
| `DIMTEXTUNIT` | `DTU` | Text de cota en mm, cm, m o km, o en les unitats del mateix dibuix: les cotes seleccionades, si no, les noves (DTU) |
| `DIMTXT` |  | Paràmetre de cota: alçada del text |
| `DIST` | `DI` | Distància i angle entre dos punts |
| `DISTRIBUTE` |  | Espaia els objectes seleccionats de manera uniforme, d'un costat a l'altre o amunt i avall: passos iguals entre centres, o separacions iguals; els dos de fora es mantenen |
| `DIVIDE` | `DIV` | DIVIDE (DIV): marques que divideixen una línia, arc, cercle, polilínia, spline o el·lipse en parts iguals. Punts, o amb Bloc un bloc a cada marca. |
| `DOCUMENTS` | `DOCS` | Obre el tauler Documents: tregueu i torneu a posar dibuixos, revisions, estats de publicació i aprovació d'una carpeta de projecte |
| `DOOR` | `DR` | Posa una porta en un mur. El costat on feu clic és el costat cap on obre. |
| `DRAWORDER` |  | Canvia l'ordre de dibuix: porta objectes al davant, els envia al darrere, o els posa per sobre o per sota d'altres objectes. |
| `DUPLICATE` | `DUP` | Una còpia que es mou amb el punter: feu clic per deixar-la (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Les propietats del dibuix: títol, autor i la resta, i els vostres propis parells de nom i valor |
| `DXFOUT` |  | Baixa el dibuix com a DXF R12 (Desa manté el seu propi format) |
| `EATTEDIT` | `DDATTE` | Edita els atributs d'una referència de bloc: valors, text i propietats, un atribut cada vegada |
| `ELLIPSE` | `EL` | Extrems dels eixos i l'altre semieix |
| `ERASE` | `E`, `DELETE` | Treu objectes |
| `EXPLODE` | `X` | Descompon polilínies, blocs i cotes en les seves parts |
| `EXPORT` | `EXP` | Desa una còpia del dibuix en un tipus de fitxer que escriu un complement |
| `EXPORT3D` | `3DEXPORT` | Exporta el model 3D: GLB, OBJ o STL |
| `EXPORTPOINTS` | `EXPPTS` | Escriu punts, i els punts d'inserció dels blocs amb un atribut com a descripció, en un fitxer CSV o TXT (PNEZD, PENZD o XYZ) per a programes BIM i de topografia |
| `EXTEND` | `EX` | Allarga objectes fins a trobar-ne d'altres: feu clic a prop d'un extrem, arrossegueu per diversos, o Maj+clic per retallar |
| `EXTRIM` |  | EXTRIM: trieu una vora de tall i després un costat. Tot el que creua la vora es retalla en aquest costat. Les peces que desapareixerien es mostren mentre mogueu el punter. |
| `EXTRUDE` | `EXT` | Extrueix objectes 2D tancats en sòlids (3D) |
| `FIELD` |  | Posa un camp en un text, una cel·la de taula o un atribut: una data, el nom del fitxer, el número de full, una propietat del dibuix, l'àrea o la longitud d'un objecte, o una fórmula |
| `FILLET` | `F` | Arrodoneix o fa quadrada la cantonada entre dos objectes (R radi, P cada cantonada d'una polilínia, M diverses) |
| `FIND` |  | Cerca i reemplaça paraules en text, valors d'atributs i text de cota |
| `FLATTEN` |  | Posa l'alçada (Z) i el gruix dels objectes seleccionats a 0, també als blocs que fan servir. |
| `FLOOR` |  | Tria la planta on dibuixar, n'afegeix una, o mou o copia la selecció a una d'elles. |
| `FLOORLAYERS` |  | Converteix les plantes en capes amb el nom Planta-Capa, per a un fitxer que anirà a algú sense plantes. |
| `FLOORS` | `FLR` | Obre el tauler Plantes: apila plantes en un sol espai model. |
| `GCCOINCIDENT` |  | Restricció: dos punts coincideixen, o un punt es queda sobre un objecte |
| `GCCOLLINEAR` |  | Restricció: dues línies es queden sobre una mateixa línia |
| `GCCONCENTRIC` |  | Restricció: dos cercles o arcs comparteixen un centre |
| `GCEQUAL` |  | Restricció: dues línies es mantenen de la mateixa llargada, o dos cercles/arcs del mateix radi |
| `GCFIX` |  | Restricció: un punt o un objecte sencer es queda on és |
| `GCHORIZONTAL` |  | Restricció: una línia (o dos punts) es manté horitzontal |
| `GCPARALLEL` |  | Restricció: dues línies es mantenen paral·leles |
| `GCPERPENDICULAR` |  | Restricció: dues línies es mantenen en angle recte |
| `GCSYMMETRIC` |  | Restricció: dos punts, línies o cercles es reflecteixen a través d'una línia |
| `GCTANGENT` |  | Restricció: una línia i un cercle o arc (o dos d'aquests) es mantenen tangents |
| `GCVERTICAL` |  | Restricció: una línia (o dos punts) es manté vertical |
| `GDSIN` | `GDS` | Mostra la disposició d'un circuit integrat (un fitxer de flux GDSII): cada capa i tipus de dada com a capa de dibuix, plana, en unitats d'usuari; només per veure i mesurar (prova de laboratori) |
| `GEOMCONSTRAINT` | `GCON` | Restriccions geomètriques: horitzontal, vertical, paral·lela, tangent, coincident… |
| `GLBOUT` |  | Exporta el model 3D com a GLB (glTF) |
| `GRADIENT` | `GD` | Omple una àrea amb un degradat d'un o dos colors |
| `GRIDMOVE` | `GM` | Mou una línia de quadrícula i arrossega el que hi penja: els murs s'estiren, les columnes, les bombolles i les etiquetes es mouen, les cotes segueixen. |
| `GROUP` | `G` | GROUP (G): dóna als objectes seleccionats un nom comú. Un clic en un d'ells els selecciona tots. Enter al nom crea un grup sense nom. |
| `GROUPEDIT` |  | GROUPEDIT: canvia un grup. Trieu un dels seus objectes o indiqueu el seu Nom, i després Afegeix o Treu objectes, REName el reanomena, canvia la seva Descripció, o indica si un clic el selecciona sencer. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Omple una àrea amb un farciment sòlid o un patró: feu clic dins o seleccioneu objectes tancats (H) |
| `HATCHEDIT` | `HE` | Canvia una trama: patró, escala, angle, origen i el seu enllaç a un contorn. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Torna a crear les polilínies de contorn a partir d'una trama, enllaçades o no |
| `HATCHTOBACK` |  | Envia totes les trames darrere de tot la resta. |
| `HELP` | `?` | Aquesta llista |
| `HIDEOBJECTS` |  | Amaga els objectes seleccionats fins a UNISOLATEOBJECTS. No es desa amb el dibuix. |
| `HISTORY` | `HIST` | HISTORY (HIST): les versions d'aquest dibuix —les còpies que es guarden en aquest ordinador quan Studio el desa, i les versions del núvol— per obrir, restaurar i comparar amb els canvis mostrats en color. |
| `ID` |  | Coordenades d'un punt |
| `IMAGE` | `IM` | Doneu a CadCraft els fitxers d'imatge que usa un dibuix (un DWG només guarda on eren). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Col·loca una imatge (PNG o JPEG) d'un fitxer. |
| `IMAGECLIP` | `ICL` | Retalla una imatge a un rectangle o un polígon, o en treu el retall. |
| `IMPORT` | `IMP` | Importa un fitxer d'un tipus que llegeix un complement, dins d'aquest dibuix |
| `INSERT` | `I`, `DDINSERT` | Col·loca un bloc (S escala, R gira); F des d'un fitxer DWG/DXF, L des de la biblioteca |
| `INTERSECT` | `IN` | Manté només el que els sòlids tenen en comú (3D), o l'àrea que comparteixen les regions 2D |
| `ISODRAFT` |  | ISODRAFT: dibuix isomètric activat o desactivat, o directament sobre el pla Esquerra, Superior o Dret. Mentre és activat, Orto i el seguiment polar segueixen els dos eixos del pla, la quadrícula es dibuixa isomètrica i ELLIPSE té Isocercle. |
| `ISOLATEOBJECTS` | `ISOLATE` | Mostra només els objectes seleccionats; tota la resta d'aquest espai queda amagada fins a UNISOLATEOBJECTS. No es desa amb el dibuix. |
| `ISOPLANE` |  | ISOPLANE: tria el pla isomètric on dibuixar: Esquerra, Superior o Dret. Enter va al següent, com fa F5 quan el dibuix isomètric és activat. |
| `JOIN` | `J` | Uneix línies, arcs i polilínies que es toquen de punta a punta en una sola polilínia; les línies d'una mateixa recta en una sola línia (J) |
| `LASER` | `LASERCUT` | Obre el tauler Làser: envia capes a una talladora o gravadora làser (codi G GRBL) |
| `LASSOMODE` |  | Premer i arrossegar dibuixa un llaç (1) o un rectangle (0) |
| `LAYDEL` |  | Esborra una capa i cada objecte que hi és (al model, als fulls i als blocs) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Obre el gestor de capes: totes les capes en una sola taula |
| `LAYERPANEL` |  | Mostra el tauler de capes |
| `LAYFRZ` |  | Congela la capa de cada objecte que trieu |
| `LAYGROUP` | `LG` | Agrupa capes en carpetes al tauler de Capes. |
| `LAYISO` |  | Aïlla les capes dels objectes seleccionats (totes les altres capes desactivades) |
| `LAYLOCKFADE` |  | Defineix quant s'esvaeixen els objectes de capes bloquejades, i si un clic els pot seleccionar. |
| `LAYMCUR` |  | Fa actual la capa de l'objecte que trieu |
| `LAYMRG` |  | Fusiona capes: els seus objectes passen a una capa de destí, i les capes fusionades desapareixen |
| `LAYOFF` |  | Desactiva la capa de cada objecte que trieu |
| `LAYON` |  | Activa totes les capes |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Un full nou amb un caixetí i una finestra gràfica |
| `LAYTHW` |  | Descongela totes les capes |
| `LAYUNISO` |  | Torna a activar les capes que LAYISO va desactivar |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Converteix a Unicode el text escrit amb tipus de lletra vietnamites antics (tipus TCVN3 / ABC, com .VnTime, i tipus VNI, com VNI-Times). Aquest text ja es mostra tal com es llegeix; això el reescriu de manera definitiva, amb un recompte i un sol pas de Desfés. |
| `LENGTHEN` | `LEN` | Allarga o escurça línies, arcs i polilínies: per una quantitat, un percentatge, fins a un total, o arrossegant (LEN) |
| `LIBRARY` | `LIB` | El tauler de la biblioteca: col·loca elements, comprova si hi ha actualitzacions, crèdits |
| `LIMITS` |  | Defineix els límits del dibuix: ON, OFF, o les cantonades inferior esquerra i superior dreta. Amb els límits ON, es rebutgen els punts que hi són fora |
| `LINE` | `L` | Segments rectes, cadascun un objecte propi |
| `LINETYPE` | `LT`, `CELTYPE` | El tipus de línia que reben els objectes nous (per capa, per bloc, o un amb nom) |
| `LINKVIEWS` | `SYNCVIEWS` | Desplaça i fa zoom a tots els panells junts (pantalla dividida), per comparar dos dibuixos o revisions |
| `LISPEDIT` | `VLIDE` | LISPEDIT (o VLIDE) obre l'editor LISP: una finestra per escriure, carregar i provar una rutina. Carregar al dibuix llegeix cada forma, com fa carregar el fitxer amb APPLOAD, i en crea les ordres. Executa la selecció avalua les formes seleccionades, o la forma on és el cursor. La consola mostra el que ha escrit la rutina i cada error amb la seva línia. El parèntesi corresponent es marca mentre escriviu i Enter sagna la línia nova. Nou, Obre i Desa treballen amb un fitxer .lsp. Les llistes al costat del text mostren les funcions que defineix la rutina, les que crida i que aquest LISP encara no té, i totes les que té. La finestra no bloqueja el dibuix, de manera que una rutina pot demanar punts; Atura o Esc acaba una rutina en execució. |
| `LIST` | `LI`, `LS` | Descriu objectes a l'historial |
| `LTSCALE` | `LTS` | L'escala de tipus de línia del dibuix (cada guió i espai es multiplica per ella) |
| `LWDISPLAY` | `LWT` | Mostra o amaga els gruixos de línia a la pantalla (el botó LWT de la barra d'estat) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | El gruix de línia que reben els objectes nous (per capa, per bloc, per defecte, o mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | capes de mapa sota l'espai model: el sistema de coordenades del dibuix, rajoles, WMS, WMTS, ArcGIS, imatges |
| `MASSPROP` |  | MASSPROP: propietats de secció de regions i objectes tancats: àrea, perímetre, centroide, moments i producte d'inèrcia, radis de gir i eixos principals. Exacte per a línies i arcs. Pot escriure l'informe en un fitxer de text. |
| `MATCHPROP` | `MA`, `PAINTER` | Iguala propietats: copia la capa, el color i més d'un objecte a altres (MA) |
| `MEASURE` | `ME` | MEASURE (ME): una marca cada longitud indicada al llarg d'una línia, arc, cercle, polilínia, spline o el·lipse, des de l'extrem més proper al vostre clic. Punts, o amb Bloc un bloc a cada marca. |
| `MEASUREGEOM` | `MEA` | Mesura una distància, un radi, un angle o una àrea (MEA) |
| `MINSERT` |  | MINSERT: col·loca un bloc en files i columnes d'una vegada. Cada un és una referència pròpia, de manera que podeu moure o esborrar qualsevol d'ells. |
| `MIRROR` | `MI` | Reflecteix objectes a través d'una línia |
| `MLEADER` | `MLD`, `MLEAD` | Multilínia de crida: una fletxa, una línia de crida i una nota, com un sol objecte (MLD) |
| `MLEADERALIGN` | `MLA` | Alinea multilínies de crida amb una d'elles en una direcció, a espaiat igual, o distribuïdes entre dos punts (MLA) |
| `MLEADERCOLLECT` | `MLC` | Reuneix diverses multilínies de crida en una: els seus blocs en fila o columna, o les seves notes una sota l'altra (MLC) |
| `MLEADEREDIT` | `MLE` | Afegeix línies de crida a una multilínia de crida o les treu; canvia el seu contingut entre text i bloc (MLE) |
| `MLINE` |  | Dibuixa línies paral·leles juntes, unides a les cantonades. |
| `MOVE` | `M` | Mou objectes amb un punt base i un segon punt |
| `MSPACE` | `MS` | Treballa sobre el model a través d'una finestra gràfica del full obert (o feu doble clic dins la finestra gràfica). |
| `MTEXT` | `MT`, `T` | Text de paràgraf: arrossegueu-ne l'amplada i després escriviu al lloc; Enter comença un paràgraf nou (T) |
| `MVIEW` | `MV` | Una finestra gràfica sobre el model, en una presentació |
| `NAMEDVIEW` | `NV`, `VIEWS` | Vistes amb nom: desa la vista de la pantalla (o una finestra) amb un nom i torna-hi (NV) |
| `NCOPY` |  | Copia objectes des d'una referència de bloc o d'un dibuix enllaçat al dibuix, sense descompondre'l. |
| `NEARBY` |  | Diu què hi ha a prop del cursor, del més proper primer, amb la distància i el costat. |
| `NEW` |  | Comença un dibuix nou |
| `OBJECTSCALE` | `OBJSCALE` | Escales d'anotació del text i les cotes anotatives: afegeix una escala, n'esborra una, afegeix l'escala actual, o les llista (cada finestra gràfica les mostra a la mida de la seva pròpia escala) |
| `OBJOUT` |  | Exporta el model 3D com a OBJ |
| `OFFSET` | `O` | Còpies paral·leles a una distància |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: com OFFSET tanca els espais a les cantonades exteriors d'una polilínia. 0 allarga els segments, 1 afegeix un arc, 2 afegeix un tall recte. Es manté per a aquesta sessió. |
| `OLELIST` | `OLES` | Llista els objectes OLE que porta un dibuix i posa una còpia de la imatge d'un d'ells on trieu |
| `OPEN` |  | Obre un DWG o DXF d'aquest ordinador |
| `OPENIN3D` |  | Obre aquest dibuix a l'aplicació de modelatge 3D, en una pestanya nova (no es puja res) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Obre el menú de referència a objectes: trieu quines referències estan activades. També un clic dret a Referència a la barra d'estat. |
| `OVERKILL` |  | Esborra objectes duplicats i fusiona línies i arcs que se superposen o es toquen de punta a punta, dins d'una tolerància. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | El tauler de Paràmetres: paràmetres d'usuari i restriccions dimensionals en una sola taula |
| `PARTSLIST` | `PLIST` | Una taula de llista de peces de cada peça i perfil d'acer estàndard col·locat des de la Biblioteca |
| `PASTEAREA` | `PAREA` | Enganxa una àrea copiada a MarkupCraft (Copia àrea) a la seva mida real, com a imatge. |
| `PASTEBLOCK` |  | PASTEBLOCK: enganxa el que heu copiat com un sol bloc. El bloc rep un nom propi; RENAME li posa el vostre. |
| `PASTECLIP` |  | Enganxa el porta-retalls: segueix el cursor, feu clic on ha d'anar (Ctrl+V) |
| `PASTEORIG` |  | Enganxa el porta-retalls a les coordenades des d'on es va copiar (Ctrl+Maj+V) |
| `PDF` |  | Doneu a CadCraft els fitxers PDF que usen les capes de fons del dibuix |
| `PDFADJUST` |  | Esvaeix, canvia el contrast, passa a monocrom o desactiva una capa de fons PDF |
| `PDFATTACH` | `PDFATT` | Adjunta una pàgina PDF com a capa de fons (PDFATTACH) |
| `PDFCLIP` |  | Retalla una capa de fons PDF a un rectangle o polígon |
| `PDFIMPORT` | `PDFIM` | Converteix les línies, els farcits i el text d'una pàgina PDF en objectes de dibuix (PDFIMPORT) |
| `PDFLAYERS` |  | Activa o desactiva les capes d'una capa de fons PDF |
| `PEDIT` | `PE` | Edita una polilínia: tanca, obre, uneix, amplada, corba ajustada, corba spline, desfer corba, generació de tipus de línia, inverteix; les línies, els arcs i les splines es poden convertir en polilínies |
| `PHOTOSKETCH` | `PSK` | Converteix una foto d'un croquis a mà sobre paper en línies i arcs a escala, redreçant la perspectiva i donant a cada color de bolígraf la seva pròpia capa. |
| `PICKSTYLE` |  | PICKSTYLE: si triar un objecte d'un grup selecciona tot el grup (1, la configuració inicial) o només aquest objecte (0). Es manté per a aquesta sessió. |
| `PLAN` |  | Gira la vista perquè l'eix X del SCP (SCP actual, un Scp desat, o el Món) quedi pla a la pantalla. Res del dibuix es mou. |
| `PLINE` | `PL` | Una polilínia de segments rectes i arcs |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Traça a PDF: una presentació, o el model a una escala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Taules d'estils de traçat: defineix com s'imprimeix cada color (color, negre, gris, tinta, gruix de línia); es desa amb el dibuix (STYLESMANAGER) |
| `POINT` | `PO` | Objectes punt |
| `POINTCLOUD` | `PC` | el núvol de punts adjunt: retall, alçada, gruix, color, mida, visible, zoom, desadjunta |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | adjunta un núvol de punts (LAS, LAZ, XYZ, PTS) sota el dibuix |
| `POLARANG` |  | El pas del seguiment polar en graus (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Un polígon regular |
| `PRESSPULL` |  | Empeny o estira una cara d'un sòlid (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Obre el tauler de Propietats (també Ctrl+1, o feu doble clic a un objecte) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Replega el tauler de Propietats fins a la vora de la finestra |
| `PSPACE` | `PS` | Deixa la finestra gràfica on treballeu i torna al full (o feu doble clic fora d'ella). |
| `PUBLISH` | `-PUBLISH` | Traça diversos o tots els fulls en un sol PDF (una pàgina i un marcador per full) |
| `PURGE` | `PU` | Treu definicions de blocs que no fa servir res |
| `QDIM` |  | Cota ràpida: acota diversos objectes alhora (contínua, de línia base, escalonada, coordenada, radi o diàmetre) |
| `QPMODE` | `QP` | Propietats ràpides al cursor, activades o desactivades |
| `QSELECT` | `QS` | Selecció ràpida: cada objecte d'un tipus la capa, color, mida o nom del qual coincideix (QS) |
| `RASTERSNAP` |  | Activa o desactiva la referència a les línies de fulls escanejats. |
| `RAY` |  | Semirecta: una línia de construcció des d'un punt, il·limitada en una direcció. |
| `RECOVER` |  | Obre un DXF o DWG malmès: salta el que no es pot llegir en lloc de rebutjar el fitxer, diu què ha saltat, i després revisa i repara el dibuix com fa AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Una polilínia tancada a partir de dues cantonades |
| `REDLINE` | `RDL` | Marcatge a revisió: llegeix un paquet de marcatge de MarkupCraft, accepta o rebutja cada canvi, enfila els acceptats amb un núvol i un registre de revisió, i desa el fitxer de respostes (RDL) |
| `REDO` |  | Refés el que s'ha desfet |
| `REFCLOSE` |  | Acaba l'edició d'un bloc al lloc: el desa o descarta els canvis |
| `REFEDIT` |  | Edita un bloc al lloc on hi ha una referència, amb la resta del dibuix esvaïda; REFCLOSE el desa |
| `REGEN` | `RE` | Reconstrueix el que es dibuixa en aquesta pestanya a partir del dibuix |
| `REGENALL` | `REA` | Reconstrueix el que es dibuixa en cada pestanya, panell i dibuix obert |
| `REGION` | `REG` | REGION (REG): crea regions planes a partir d'objectes tancats, o de línies, arcs i polilínies que es tanquen en un bucle de punta a punta. UNION, SUBTRACT i INTERSECT combinen després regions, i MASSPROP en dona les propietats de secció. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registra diversos escanejos: els col·loca en un marc per parells de punts triats o marques, els refina amb ICP, i exporta un sol LAS o E57 |
| `REINIT` |  | Torna a carregar el fitxer d'àlies |
| `RENAME` | `-RENAME`, `REN` | Reanomena una capa o un bloc (cada objecte o referència el segueix) |
| `REVCLOUD` | `RC` | Núvol de revisió: envolta un rectangle, un polígon, un camí a mà alçada o un objecte (RC) |
| `REVOLVE` | `REV` | Gira objectes 2D tancats al voltant d'un eix per convertir-los en sòlids (3D) |
| `ROTATE` | `RO` | Gira objectes al voltant d'un punt base |
| `SAMPLES` | `SAMPLE` | Obre un dels dibuixos d'exemple de CadCraft (un conjunt arquitectònic, un plànol tal com s'ha construït) per aprendre'n |
| `SAVE` | `QSAVE` | Baixa el dibuix en el seu format (DWG o DXF) |
| `SAVEAS` |  | Baixa el dibuix com a DWG o DXF: trieu quin |
| `SAYSEL` |  | Diu què hi ha seleccionat, una frase per cada objecte. |
| `SCALE` | `SC` | Escala objectes al voltant d'un punt base |
| `SCALELISTEDIT` | `SCALELIST` | Afegeix, edita i esborra les escales pròpies del dibuix; apareixen a les llistes d'escales de finestra gràfica i de traçat i es desen al fitxer (SCALELIST) |
| `SCANALIGN` | `SCL` | Alinea un full escanejat amb dos punts: el mou, el gira i, si ho trieu, l'escala. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Insereix un dibuix escanejat: un PNG, JPEG o TIFF (una pàgina o totes les pàgines d'un fitxer de diverses pàgines) o una pàgina PDF que és una imatge. |
| `SCANCLEAN` | `SCC` | Converteix un full escanejat en blanc i negre i en treu les brutícies. |
| `SCANCROP` | `SCR` | Retalla un full escanejat a una finestra. |
| `SCANDESKEW` | `SCD` | Troba l'angle en què estan les línies llargues d'un full escanejat i el gira perquè quedi recte quan accepteu l'angle. |
| `SCANERASE` | `SCE` | Esborra una àrea d'un full escanejat: un rectangle, un polígon o un llaç. |
| `SCANINFO` | `SCI` | Mostra el fitxer original d'un full escanejat i els passos fets des de llavors. |
| `SCANSCALE` | `SCS` | Escala un full escanejat: trieu-hi dos punts i escriviu la distància real entre ells. |
| `SCANTRACE` | `SCT` | Calca un full escanejat en línies i arcs en una capa nova, amb una tolerància que definiu. El text i les trames es queden com a imatge. |
| `SELECT` |  | Selecciona objectes ara (per a P, Anterior, a la següent ordre) |
| `SELECTALL` | `AI_SELALL` | Selecciona cada objecte que podeu editar en aquesta pestanya (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Selecciona cada objecte semblant als que trieu: mateix tipus, capa i color (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Mostra el tauler Conjunt de fulls: fulls de molts dibuixos, numerats, publicats en un sol PDF. |
| `SHORTCUTS` | `KEYS` | Dona a qualsevol ordre una tecla pròpia (Ctrl o Alt amb una lletra, o una tecla de funció lliure), que es desa en aquest navegador o aplicació d'escriptori. |
| `SHXFONTS` | `SHX` | Dona a CadCraft tipus de lletra SHX d'una carpeta o de fitxers, perquè els estils de text que els nomenen dibuixin amb ells (llista, treu, invertix) |
| `SKETCHFIX` | `SKF` | Dibuixa traços a mà alçada; cadascun esdevé una línia, cercle, arc, rectangle o polilínia nets, quadrats i units als altres. |
| `SKETCHLIVE` | `SKL` | Dibuixa amb un bolígraf: cada traç esdevé una línia, cercle, arc o rectangle precisos en aixecar el bolígraf, referenciats al dibuix, amb la mida que escriviu a sobre. |
| `SPLINE` | `SPL` | Dibuixa una spline per punts (o amb un polígon de control), o converteix una polilínia en una |
| `SPLINEDIT` | `SPE` | Edita una spline: punts d'ajust, punts de control i pesos, l'obre o la tanca, la inverteix, o la converteix en polilínia |
| `SPLIT` |  | Divideix l'àrea de dibuix en panells (com VPORTS sobre el model; també des d'un full) |
| `STEELMEMBER` | `SMEMBER` | Una barra d'acer en 3D a partir d'un perfil estàndard: dos punts (una biga) o un punt base i una alçada (Columna) |
| `STLOUT` |  | Exporta el model 3D com a STL (en mil·límetres) |
| `STRETCH` | `S` | Estira: arrossegueu una finestra de creuament sobre els extrems per moure; el que és dins es mou, la resta es queda (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Estils de text: el tipus de lletra, alçada, amplada i inclinació que pren el text nou (el diàleg; -STYLE a la línia d'ordres) |
| `SUBTRACT` | `SU` | Treu sòlids d'altres (3D), o regions 2D d'altres regions |
| `SWBOUT` | `SWMACRO` | Baixa una macro per a SolidWorks (.swb) que reconstrueix el model com un sol croquis restringit |
| `SWEEP` |  | Desplaça objectes 2D tancats al llarg d'un camí (línia, polilínia, arc, cercle) per convertir-los en sòlids (3D) |
| `TABLE` | `TB` | Crea una taula: files i columnes, o a partir de cel·les d'un full de càlcul del porta-retalls o d'un fitxer CSV |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Edita una taula: escriu en una cel·la, insereix i esborra files i columnes, mides, cel·les combinades, alineació |
| `TABLEEXPORT` |  | Desa el que mostra una taula com a fitxer CSV |
| `TABLEPASTE` | `PASTETABLE` | Crea una taula a partir de cel·les d'un full de càlcul del porta-retalls |
| `TABLESTYLE` | `TS` | Estils de taula: alçades de text, alineació, marge i vores per a les files de títol, de capçalera i de dades |
| `TAGS` |  | Etiquetes sobre referències de bloc: defineix una etiqueta (tipus, valors permesos, blocs als quals s'aplica), l'assigna a les referències seleccionades, i les llista com una taula que podeu desar com a CSV |
| `TEXT` | `DT`, `DTEXT` | Text d'una sola línia; Enter comença la línia següent |
| `TEXTEDIT` | `ED`, `DDEDIT` | Edita text al lloc: trieu un text (o feu-hi doble clic) (ED) |
| `TEXTMASK` | `TMASK` | Posa una màscara de fons darrere dels textos (el fons del dibuix o un color), o la treu. |
| `TEXTTOFRONT` |  | Porta tot el text, les cotes i les línies de crida davant de la resta. |
| `TOOLBAR` |  | Tria què mostren els botons de la barra d'eines: icones i text, només icones, o només text (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Posa la barra d'eines a la part superior, inferior, esquerra o dreta de la finestra |
| `TOOLBARROWS` |  | Tria quantes files usa la barra d'eines: ajustada, 2, o 1 (Maj+Ctrl+F1) |
| `TOPAREA` |  | Fa que les barres de sobre del dibuix siguin estàndard o compactes |
| `TOUCHCROSSHAIR` | `TCX` | Creueta desplaçada per dibuixar amb el dit: un dit mou una creueta que queda per sobre i al costat, de manera que el dit no tapa el punt triat. Aixecar el dit no tria res; el botó Clic o un toc amb un segon dit tria a la creueta, i mantenir Clic mentre us moveu arrossega. Una pulsació llarga o el botó Enter és Enter. Dos dits desplacen i fan zoom. Opcions: ON, OFF, Automàtic (activada només on un dit és l'únic punter), Distància, Costat. |
| `TOUR` | `TUTORIAL` | Torna a fer el recorregut de sis passos del primer dibuix |
| `TRIM` | `TR` | Retalla objectes fins on els creuen altres: feu clic en una peça, arrossegueu per diverses, o Maj+clic per allargar |
| `TRIMEXTENDMODE` |  | Com comencen TRIM i EXTEND: 1 Ràpid (cada objecte és una vora de tall o un límit), 0 Estàndard (trieu primer les vores) |
| `TTR` |  | Un cercle tangent a dos objectes, amb un radi que doneu (igual que CIRCLE T). |
| `TURNLEFT` |  | Gira la vista 90° a l'esquerra (en sentit antihorari): SCP Z -90, i la vista el segueix. Res del dibuix es mou. |
| `TURNRIGHT` |  | Gira la vista 90° a la dreta (en sentit horari): SCP Z 90, i la vista el segueix. Res del dibuix es mou. |
| `TURNWORLD` |  | Torna al món: SCP Món, i la vista torna a quedar plana. |
| `TXT2MTXT` | `T2M` | Uneix textos d'una sola línia en un sol text de paràgraf, de dalt a baix. |
| `UCS` |  | El vostre propi sistema de coordenades: un origen i un eix X (origen, angle Z, 3punts, OBjecte, Anterior, Món, NAmb nom). Els punts que escriviu, l'orto, el seguiment polar, la quadrícula i el text nou el segueixen; la vista gira perquè el seu eix X quedi pla. Res del dibuix es mou. |
| `UNDO` | `U` | Desfà l'última ordre |
| `UNGROUP` |  | UNGROUP: desfà grups. Seleccioneu objectes dels grups, o indiqueu un Nom. Els objectes es queden al dibuix. |
| `UNION` | `UNI` | Uneix sòlids en un de sol (3D), o regions 2D en una sola regió |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Torna a mostrar cada objecte amagat per ISOLATEOBJECTS o HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Com es mostren i s'escriuen les longituds: decimal, peus i polzades, fraccions (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Torna a calcular els camps, i tria quan s'actualitzen sols |
| `USDOUT` |  | Exporta el model 3D com a USD (text .usda, binari .usdc o un paquet .usdz) |
| `VIEW` | `-VIEW`, `V` | Vistes 3D estàndard, en perspectiva o paral·leles (3D) |
| `VIEWBASE` | `FLATSHOT` | Col·loca una vista 2D plana dels sòlids 3D (davant, superior, lateral o isomètrica, amb les línies ocultes en traç discontinu) en un full o al model |
| `VIEWLABEL` | `VL` | Un títol de vista en un full que mostra el nom de la vista de la seva finestra gràfica, i canvia amb ella. |
| `VOICE` |  | Activa o desactiva les ordres per veu. Es reconeixen en aquest ordinador. |
| `VPCLIP` |  | Retalla una finestra gràfica de full a un objecte tancat o a un polígon dibuixat; Suprimeix la torna a fer rectangle |
| `VPLAYER` |  | Congela o descongela capes només en algunes finestres gràfiques (Congela, Descongela, Restableix), i tria quines capes congelen les finestres noves en començar (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Divideix l'àrea de dibuix en panells, cadascun amb la seva pròpia vista (en un full: una finestra gràfica, com MVIEW) |
| `VPVIEW` |  | Defineix què mostra una finestra gràfica: trieu una finestra sobre el model |
| `VSCURRENT` | `VS`, `SHADEMODE` | Estil visual de la vista 3D: ombrejat, arestes, línia oculta, filferro, raigs X |
| `WALL` | `WA` | Dibuixa murs 2D com una polilínia. Es unen, i porten portes i finestres. |
| `WALLARC` | `WARC` | Dibuixa un arc de murs. Els murs en planta són rectes, de manera que l'arc es dibuixa com a murs rectes curts (15 graus cadascun) que s'uneixen. |
| `WALLDELSEG` |  | Esborra un tros de mur entre dos punts. El que queda es manté com un o dos murs. |
| `WALLDIM` |  | Escriu un valor nou per a una cota: el mur de l'extrem llunyà es mou perpendicularment a si mateix, el mur del primer extrem es manté, i els murs units a ell el segueixen. |
| `WALLDISJOIN` |  | Tria un mur a prop d'un extrem per no permetre les unions en aquell extrem: l'extrem es dibuixa a escaire i no segueix res. Torneu a triar-lo per permetre-les. |
| `WALLGRID` |  | Bloqueja un mur a una línia de quadrícula: al llarg d'ella, o un extrem sobre ella. Mogueu la línia amb GRIDMOVE i el mur la segueix. |
| `WALLHOLD` |  | Alinea i bloqueja: un mur manté el seu lloc davant d'un altre mur (a la seva línia, o a la distància que té). Si un es mou, l'altre el segueix. |
| `WALLHOLDDIM` |  | Bloqueja la distància entre dos murs paral·lels. Si un es mou, l'altre el segueix per mantenir-la. |
| `WALLHOLDS` |  | Llista els bloquejos dels murs. |
| `WALLJOINS` |  | Dona a cada mur d'un dibuix antic el seu identificador i desa les unions entre ells. Això també passa en el primer canvi que feu. |
| `WALLJOINSTYLE` |  | Feu clic en una cantonada on es troben dos murs de punta a punta per canviar com es dibuixa: a inglet, a topall, retallada a escaire. T canvia quin mur passa per dins. |
| `WALLOFFSET` | `WO` | Mou un mur perpendicularment a si mateix una distància (els murs units a ell el segueixen), o en fa una còpia a aquesta distància. |
| `WALLPICK` |  | Crea murs sobre una línia o polilínia del dibuix, amb les línies unides a ella si ho dieu que sí. |
| `WALLPOLY` | `WP` | Dibuixa murs al voltant d'un polígon regular de 3 a 64 costats, com POLYGON. |
| `WALLRECT` | `WR` | Dibuixa quatre murs units a partir de dues cantonades oposades, com RECTANG. |
| `WALLREJOIN` |  | Torna a fer d'dues parts d'un mur un sol mur. El primer manté el seu lloc al dibuix. |
| `WALLROT` |  | Dibuixa quatre murs units com un rectangle girat a qualsevol angle: el primer costat, i després quant sobresurt. |
| `WALLSPLIT` | `WS` | Divideix un mur en dos en un punt o on creua un altre mur. Les parts es mantenen unides tret que demaneu un espai o extrems lliures. Les portes i finestres van amb la seva part. |
| `WALLSPLITGAP` |  | Divideix un mur deixant un espai: escriviu l'espai, trieu el mur, i després el punt. Les parts tenen extrems lliures i es poden tornar a unir. |
| `WALLSTRETCH` |  | Estira amb una finestra: els extrems de mur que hi són dins es mouen, els murs completament dins es mouen sencers, i els murs que hi topen pels costats llisquen amb ells. |
| `WALLTAN` |  | Continua un mur amb un arc que en surt al llarg del mur (dibuixat com a murs rectes curts). |
| `WALLTRACE` |  | Crea murs al voltant de la superfície tancada més petita de línies i murs al voltant del punt que feu clic. |
| `WALLUNHOLD` |  | Treu els bloquejos d'un mur (i els bloquejos d'altres murs cap a ell). |
| `WBLOCK` | `W`, `-WBLOCK` | Escriu un bloc, alguns objectes o tot el dibuix en un fitxer DWG o DXF nou (W) |
| `WEDGE` | `WE` | Una falca: dues cantonades i una alçada; baixa des de la primera cantonada (3D) |
| `WHEREAMI` | `WHERE` | Diu on és el cursor. |
| `WHOHAS` |  | Diu qui té un dibuix obert. CadCraft Studio guarda un petit fitxer de bloqueig al costat de cada dibuix obert (Plan.dwg.cclock: qui, des de quan, quina versió) i l'esborra en tancar. Opcions: Actual (el dibuix obert), Fitxer (en trieu un), Carpeta (cada dibuix d'una carpeta que és obert en algun lloc; això també permet que Studio guardi fitxers de bloqueig en aquesta carpeta), Camí (l'escriviu), Nom (el nom que veuen els altres). Un bloqueig que no s'ha refrescat en cinc minuts es diu caducat. No disponible en un navegador. |
| `WINDOW` | `WN` | Posa una finestra en un mur. |
| `XATTACH` | `XA` | Enllaça un altre DWG o DXF en aquest dibuix, en mode només lectura (XREF els llista i els torna a carregar) |
| `XCLIP` | `XC` | Retalla referències de bloc i dibuixos enllaçats a un rectangle o un polígon, o en treu el retall. |
| `XLINE` | `XL` | Línia de construcció, il·limitada en les dues direccions: per dos punts, horitzontal, vertical, en un angle, bisectriu d'un angle, o desplaçada d'una línia. |
| `XREF` | `XR`, `-XREF` | Dibuixos enllaçats (referències externes): llista, adjunta, torna a carregar, incrusta, desvincula |
| `ZOOM` | `Z` | Extensió, o una finestra |
