---
title: Encara no implementat
summary: Què no fa encara aquesta versió de l'aplicació de dibuix CadCraft i què cal fer avui en lloc d'això.
keywords: falta, limitacions, ctb, stb, estil de traçat, propietats, ucs, anotatiu, bloc dinàmic, spline, full de ruta, no compatible, desa dwg, trama, estira, matriu, uneix, matchprop, trenca, allarga, tipus de línia, gruix de línia, xref, núvol, 3d, sòlids, booleanes, multilíder, encoixinat
from: 87e56521
---

CadCraft està en desenvolupament. Aquesta pàgina enumera el que fa la versió actual i què no fa, perquè no hi perdeu el temps. Cada punt indica què fer en lloc d'això avui.

## Fitxers i desament

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Un DWG de CadCraft revisat a l'AutoCAD mateix | Cada versió desada es rellegeix amb els lectors DWG de tres altres programes i de CadCraft. Vegeu [Què conserva i què canvia un DWG](topic:files#what-a-dwg-keeps-and-changes). |
| Desar un DXF posterior al 2000 | Deseu com a DXF 2000, o com a DWG fins a AutoCAD 2018. |
| Desar sobre el fitxer obert al navegador | Cada desament baixa una còpia nova; substituïu el fitxer antic manualment si ho voleu. A CadCraft Studio, {{key:Mod+S}} escriu de nou al fitxer que heu obert. |
| Desament al núvol i sincronització entre ordinadors | CadCraft encara no envia els seus desaments al núvol: guardeu els fitxers DWG i DXF a les vostres pròpies carpetes. A CadCraft Studio, [Historial](topic:history) enumera les versions al núvol d'un dibuix desat des d'un altre lloc i les còpies dels vostres desaments en aquest ordinador. |
| Superposicions, i edició d'un dibuix enllaçat al seu lloc | Adjunteu el dibuix com a enllaç i torneu-lo a carregar després de canviar l'altre dibuix. Un enllaç es manté com a enllaç en desar com a DWG, i {{cmd:XCLIP}} el retalla. |
| Imatges en DXF; encoixinats (wipeouts) que amaguen el que hi ha sota | El DXF desa una imatge com al seu marc amb el nom del fitxer; el DWG la desa com a imatge: vegeu [Imatges en un dibuix](topic:pictures). Un encoixinat es mostra com el seu marc. |
| Edició de multilíders amb línies de fletxa corbes, amb línies de fletxa als dos costats del contingut, o amb un bloc girat o escalat de manera desigual | Es dibuixen com els va dibuixar l'altre programa i es mouen com un sol objecte. Els multilíders amb línies de fletxa rectes cap a una sola destinació, i amb text o un bloc com a contingut, sí que es poden editar ({{cmd:MLEADEREDIT}}). |
| A les taules d'altres programes: una cel·la que conté un bloc, format de text dins d'una cel·la, vores i colors per cel·la d'una taula de DXF, una taula dividida en columnes | La taula s'obre com a taula editable ({{cmd:TABLEDIT}}) i es mostra tal com la va dibuixar l'altre programa fins que l'editeu; llavors CadCraft la redibuixa a partir de les seves cel·les: text pla, fórmules com `=G3*H3` i `=Sum(I3:I9)`, alineació i alçades de text. Una cel·la de bloc queda buida. Una taula de DWG no modificada es torna a desar amb les dades de cel·les que tenia. |
| Un objecte de taula real en un DXF desat | Un DWG desa una taula com a taula que altres programes poden editar. Un DXF la desa com al bloc que la dibuixa, amb el registre propi de CadCraft: CadCraft la torna a obrir com a taula; altres programes veuen un bloc. Una taula reflectida o escalada de manera desigual també es desa així en un DWG. |
| Copiar i enganxar amb altres programes | El porta-retalls de CadCraft funciona entre dibuixos i pestanyes de CadCraft del mateix navegador, no amb altres programes. Deseu com a DWG o DXF i obriu-lo allà. Vegeu [Copia, enganxa i duplica](topic:copy-paste). |

## Dibuix i edició

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Patrons de trama que CadCraft no té, i farciments de degradat exactament com els pinten altres programes | Les trames obertes amb patrons que CadCraft no té es mostren com un to. Un farciment de degradat ({{cmd:GRADIENT}}) es pinta a la manera pròpia de CadCraft per a cada tipus: semblant al dels altres programes en el tipus, però no punt per punt. El DWG 2004 i posteriors el conserven com una trama de degradat real; en un fitxer DXF 2000 o DWG 2000 només CadCraft el torna a llegir, i els altres programes veuen un farciment sòlid. Els patrons es carreguen d'un fitxer `.pat`, i una trama es pot enllaçar al seu contorn i llavors el segueix: vegeu [Trama i àrees de farciment](topic:hatch). |
| Tipus de línia amb formes o text, i gruixos de línia en un DXF R12 desat | Les formes i el text del tipus de línia d'un fitxer queden fora dels seus guions; deseu com a DWG per conservar els gruixos de línia. |
| Trames amb patró en un DXF desat | El R12 no té trama: es desen com als seus contorns. Deseu com a DWG per conservar el patró. |
| Matrius que un altre programa ha fet o pot editar; files i nivells en matrius de camí i polars; una matriu que segueix la seva corba de camí | Una matriu feta amb ASsociative ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; es canvia amb {{cmd:ARRAYEDIT}}) es desa com a referència de bloc amb els números propis de CadCraft: altres programes la mostren, la mouen, la tracen i la descomponen, però no en poden canviar els recomptes; una matriu feta en un altre programa s'obre aquí com a referència de bloc simple. Una matriu de camí conserva una còpia del seu camí: editar la corba després no mou els elements. |
| Finestres gràfiques de full retallades cap a altres programes i des d'ells | Una finestra gràfica retallada amb {{cmd:VPCLIP}} o feta amb {{cmd:MVIEW}} Polygonal o Object es desa amb el contorn propi de CadCraft: altres programes l'obren com el rectangle que la envolta, i una finestra retallada en un altre programa s'obre aquí com el seu rectangle. El DXF R12 només conserva el rectangle. |
| {{cmd:STRETCH}} amb un polígon de creuament | Useu una o més finestres de creuament. |
| {{cmd:PEDIT}} Edita vèrtex (un vèrtex cada cop a la línia d'ordres) | Nanses, i el navegador de vèrtexs a Propietats (cada vèrtex, els seus amples i el seu bulge). La resta de PEDIT sí que està implementada: vegeu [Splines i polilínies](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} i {{cmd:JOIN}} sobre el·lipses i splines | {{cmd:EXPLODE}} una spline (o {{cmd:PEDIT}}-la) per obtenir una polilínia que aquestes ordres accepten. |
| Arrodoniment i xamfrà entre un segment d'arc d'una polilínia i el segment següent; arrodoniment que uneix una línia en una polilínia | {{cmd:EXPLODE}} la polilínia i després arrodoniu les peces. L'arc d'arrodoniment s'afegeix com a objecte propi. |
| Trim i extend: l'opció Project (3D) i allargar l'extrem d'arc d'una polilínia | Retalleu en el pla del dibuix; per a un extrem d'arc, descomponeu la polilínia o torneu a dibuixar l'arc. |
| Objectes OLE: inserir-los, executar-los o editar-los; mostrar els d'un DWG on el fitxer els situa; imatges de metafitxer | Vegeu [Imatges](topic:pictures#objects-from-other-programs-ole). Els objectes d'un DXF es mostren com el seu mapa de bits o com un marc amb etiqueta; els d'un DWG es conserven, però no es dibuixen al seu lloc (OLELIST els enumera i col·loca una còpia d'una imatge on indiqueu). |
| Escriure codis de format (negreta, fraccions apilades, colors per paraula) en text de paràgraf; tipus de lletra diferents del que és estil Helvetica; columnes | El format que arriba en un fitxer es conserva, es dibuixa i es desa (vegeu Text); el text de paràgraf nou té una sola alçada i un sol color. |
| Text de paràgraf editat amb la seva rotació | L'editor s'obre nivellat; el text conserva la seva rotació. |
| Multilíders desats com a objectes multilíder en un DXF | Un DWG els conserva com a multilíders, amb cada línia de fletxa i un bloc com a contingut; un DXF conserva el que dibuixen (línies, punxes de fletxa i el text o el bloc). |
| A les taules ({{cmd:TABLE}}): text que es parteix dins d'una cel·la, taules que es divideixen en parts, l'estil de text propi d'un estil de taula i els colors per tipus de fila en un diàleg, un enllaç de dades a un fitxer de full de càlcul (`.xlsx`) o un que llegeixi el fitxer per si mateix | El text d'una cel·la només es parteix on el partiu ({{key:Alt+Enter}}); amplieu la columna. {{cmd:DATALINK}} llegeix un fitxer `.csv`, i {{cmd:DATALINKUPDATE}} us demana que torneu a triar el fitxer. {{cmd:DATAEXTRACTION}} i {{cmd:COUNTTABLE}} fan una taula que no segueix el dibuix per si mateixa: torneu-les a executar (un recompte en directe: {{cmd:BOMTABLE}}). |
| Definicions d'atributs guardades soltes en un fitxer desat (fora d'un bloc), atributs de diverses línies | Poseu les definicions d'atributs en un bloc abans de desar: soltes, es desen com a text que mostra l'etiqueta. |
| Estats de capa (desar i restaurar quines capes són actives) | Useu {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, o activeu i desactiveu les capes manualment. |
| Selecció per polígon de finestra i per polígon de creuament, i filtres de selecció desats | Tanca (F), Finestra, Intersecció, Elimina (R), {{cmd:QSELECT}} per a una regla. |


## El tauler de Propietats

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Dibuixar les opcions d'Ajust, i la posició horitzontal del text i el text sota la línia en cotes que no són lineals ni alineades | Es guarden a l'objecte, es mostren a Propietats i es desen; CadCraft col·loca el text segons la seva pròpia regla. |
| Materials que veuen altres programes | Un fitxer desat conserva el nom del material per a CadCraft; altres programes mostren el material de la capa. |
| Transparència en fitxers DWG 2000 i DXF | Altres programes mostren aquests objectes sòlids; CadCraft conserva la transparència. Deseu com a DWG 2004 o posterior perquè ho vegi tothom. |
| Un enllaç de trama fet en un altre programa | CadCraft desa el seu propi enllaç en fitxers DWG i DXF 2000; els enllaços fets en altres programes no es llegeixen. Useu `HATCHEDIT` i Enllaç: vegeu [Trama i àrees de farciment](topic:hatch). |
| Coordenades a Propietats en el SCP | Propietats mostra les coordenades mundials; la barra d'estat i {{cmd:ID}} mostren les del SCP. Vegeu [Gira la vista i useu les vostres pròpies coordenades](topic:ucs-and-turned-view). |
| Una posició separada per a un objecte anotatiu a cadascuna de les seves escales; llegir els registres per escala que guarden altres programes | Un text o una cota anotatius guarden una llista d'escales ({{cmd:OBJECTSCALE}}) i cada finestra gràfica el mostra a la mida de la seva escala, al mateix lloc. La llista es desa com a dades pròpies de CadCraft: un altre programa veu l'objecte a l'única escala per a la qual està dimensionat, i una llista feta en un altre programa no es llegeix. Vegeu [Unitats, fulls i escales](topic:units-papers-scales#annotate-by-scale). |
| Canviar les distàncies, els angles o els reflexos d'un bloc dinàmic; blocs dinàmics que es mantenen dinàmics en desar en una altra versió de DWG o com a DXF | Canvieu-ne l'estat de visibilitat a Propietats › {{ui:Personalitzat}}; els altres valors s'hi mostren només de lectura. Continua dinàmic en desar-lo com a DWG en la versió en què va arribar el dibuix. Vegeu [Blocs dinàmics](topic:dynamic-blocks). |
| Tolerància d'ajust de spline, grau de spline 6 o superior, splines 3D | Els punts d'ajust i de control, de grau 1 a 5, i els pesos estan implementats: vegeu [Splines i polilínies](topic:splines). L'alçada (Z) d'una spline no es conserva. |
## Ajudes de precisió

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Seguiment de punts entre ordres, i el diàleg de configuració del seguiment (angles polars relatius, angles addicionals) | {{cmd:POLARANG}} fixa el pas; torneu a adquirir els punts en l'ordre següent. |
| Ajustar a la quadrícula | Escriviu coordenades; la quadrícula és només una guia visual. |
| Opcions Arc i Length en triar els cantons d'una àrea, i MEASUREGEOM Volume | Dibuixeu el contorn amb {{cmd:PLINE}} (inclosos els arcs) i després {{cmd:AREA}} `O`. |
| Entrada dinàmica per a nanses, i la seva llista d'opcions (la fletxa avall) | La línia d'ordres mostra les opcions. |
| Angles en graus, minuts i segons, grads o rumbs topogràfics | Escriviu graus decimals: `30.5` per a 30°30'. |
| Un diàleg de gestor de vistes; vistes amb nom d'un full que tornen en aquest mateix full | {{cmd:NAMEDVIEW}} enumera i restaura les vistes. Un fitxer desat les conserva, però les vistes d'un full tornen al primer full. |

## Fulls, cotes i traçat

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Camps per a l'escala d'una finestra gràfica, un objecte amb nom com una capa o un bloc, un hipervincle, i camps de conjunt de fulls més enllà del número i el nom del full; camps escrits com a objectes de camp que altres programes actualitzen | {{cmd:FIELD}} té la data, el nom del fitxer, el número, el nom i el recompte del full, les propietats del dibuix ({{cmd:DWGPROPS}}), l'àrea, la longitud i altres propietats d'un objecte, i fórmules, en text, atributs i cel·les de taula. Un altre programa mostra un camp de CadCraft com el text que va llegir per última vegada; CadCraft llegeix els camps de data, nom de fitxer, propietat, full i expressió d'un altre programa i deixa la resta com a text. L'escala d'una finestra gràfica s'escriu a mà. |
| Desar quin estil de cota és l'actual; text de cota arrossegat a un lloc lliure | Un dibuix s'obre amb Standard com a actual. El text es col·loca sobre la línia de cota (DIMTEDIT Esquerra (L) / Dreta (R) / Centre (C)). Vegeu [Definiu les mides de cota](topic:dimension-settings). |
| Cotes angulars de dues línies editables de fitxers oberts que CadCraft no pot resoldre | Es mostren tal com estan dibuixades al fitxer. Les cotes d'ordenada, de longitud d'arc i de radi amb ressalt s'obren com a cotes editables. |
| Comprovar el lector CTB amb un fitxer d'un altre programa (està implementat, a partir de la descripció publicada), estils de traçat amb nom (STB), dithering, números de ploma, escala de grisos des d'un CTB i ajust adaptatiu del tipus de línia en un estil de traçat | Feu la taula a {{ui:Taules d'estil de traçat}} (color, gris, tinta, gruix de línia, tipus de línia, final i unió de línia, i estil de farciment per color): vegeu [Taules d'estil de traçat](topic:plot-pdf#plot-style-tables). |
| Configuracions de pàgina | Trieu paper, escala i estil de traçat al diàleg {{ui:Traça a PDF}}; un full conserva el seu estil de traçat. |
| Hindi i altres escriptures que necessiten formació complexa de glifs en PDF, i ideogrames rars (impressió en escriptures europees, ciríl·liques, gregues, hebrees, àrabs, persa, urdú, thai, xinès, japonès i coreà) | S'imprimeixen com a "?". |
| Text en escriptura àrab i xinès, japonès o coreà en el mateix PDF traçat | Un traçat porta una sola tipografia: una de les dues escriptures s'imprimeix com a "?". |
| Marques de direcció explícites al text (incrustacions, substitucions, aïllats) | S'ignoren: cada línia s'ordena només per les seves lletres. |
| Imatges dins d'una pàgina PDF adjunta, en un traçat | Les línies, els farciments i el text de la pàgina s'imprimeixen. Una pàgina que només és una imatge s'hi afegeix amb {{cmd:SCANATTACH}}, i les imatges s'imprimeixen. Vegeu [Subjacents PDF](topic:pdf-underlay#plot-and-save). |
| Enviar una feina a un làser des de CadCraft Studio (Studio no té Web Serial) | Deseu el G-code i envieu-lo amb el programa propi del vostre làser, o envieu-lo des de Chrome o Edge. Vegeu [Envia un dibuix a un làser](topic:laser-cutting#send-from-the-browser). |

## Restriccions i paràmetres

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Restriccions en fulls, en blocs, en el·lipses, splines o text | Restringiu a la pestanya {{ui:Model}}, en línies, polilínies, cercles, arcs i punts. |
| Suau (G2), i restringir directament el bulge d'un arc de polilínia | Tangent i igual; un segment d'arc segueix els seus dos extrems. |
| Cotes restrictives de referència (dirigides) i `3Point` a {{cmd:DCANGULAR}} | Una cota simple (DIMLINEAR …) mostra un valor sense dirigir-lo. |
| Restriccions dimensionals d'una mida fixa en paper, i traçar-les | Es mostren només a la pantalla; afegiu cotes simples per al traçat. |
| Restriccions que es mantenen en passar per EXPLODE, BREAK, JOIN i altres ordres que creen objectes nous, i en polilínies retallades | Torneu a restringir-les (AUTOCONSTRAIN ajuda). {{cmd:MIRROR}} i {{cmd:TRIM}} de línies, arcs i cercles les conserven. |
| Taules de disseny (configuracions) a CadCraft | Canvieu els paràmetres al tauler. |
| Una prova de cicle complet amb SolidWorks | Comproveu el croquis que construeix la macro abans de fiar-vos-en. |

## 3D

| Encara no implementat | En lloc d'això, avui |
|---|---|
| Arrodoniments, xamfrans, buidats i lofts; escombrats al llarg d'un camí que puja (camins 3D) | Extruïu contorns amb arcs, premeu i estireu cares, feu revolucions i escombreu al llarg de camins plans. |
| Extrusió en una altra direcció que no sigui amunt | Dibuixeu la forma a terra i extruïu-la amunt o avall (amb un desmotllament o al llarg d'un camí si voleu); després gireu el sòlid. |
| Elevació i gruix d'objectes 2D | El dibuix es troba a terra (alçada 0) a la pestanya 3D. |
| Edició de sòlids, regions i cossos d'altres programes; mostrar-los dins de blocs; les seves cares en superfícies escombrades, lofts o altres superfícies de forma lliure; malles de polifaces i de polígons | Els sòlids de l'espai model es mostren a la pestanya 3D tal com són i es tornen a desar sense canvis en DWG; el que no es dibuixa es llista en obrir la pestanya 3D. Demaneu malles com a cares 3D a l'espai model. Vegeu [Sòlids d'altres programes](topic:3d-solids#solids-from-other-programs). |
| Copiar i enganxar sòlids | A la pestanya 3D, useu {{cmd:COPY}}. El porta-retalls només conté objectes 2D. |
| Seccions, vistes que segueixen els canvis posteriors dels sòlids, i sòlids ombrejats en fulls traçats | {{cmd:VIEWBASE}} col·loca vistes planes (una instantània); torneu-la a executar després de canviar els sòlids. |
| Materials, textures i paràmetres d'il·luminació | Els estils visuals: ombrejat, arestes, línia oculta, filferro i raigs X. |
| Capes de mapa traçades, a les finestres gràfiques dels fulls i a la pestanya 3D; imatges de fitxers desats amb el dibuix; la ubicació d'un dibuix escrita per a altres programes en DWG 2000–2007 i DXF R12 | Les capes de mapa es mostren sota l'espai model a la pantalla; el sistema i la llista de capes es desen amb el dibuix: vegeu [Capes de mapa sota el dibuix](topic:map-layers) |
| Escanejos E57 de més de 6 milions de punts o 512 MB, fitxers propis dels fabricants d'escàners (RCP, RCS, FLS, LGS, TZF, ZFS), un núvol de punts desat amb el dibuix o traçat, ajust a un núvol a la pestanya 3D, talls verticals (de secció) a la pestanya Model | Exporteu els escanejos grans o dels fabricants com a LAS o LAZ ([Formats de núvol de punts](topic:point-cloud-formats)); adjunteu el núvol cada cop que obriu el dibuix; dibuixeu des d'un tall en planta a la pestanya Model: vegeu [Traça línies com a construïdes sobre un núvol de punts](topic:point-clouds) |
| Registrar escanejos: trobar objectius (esferes, taulers d'escacs) en un escaneig per si mateix, resoldre tots els escanejos alhora (ajust de feix, bundle adjustment), escala, registrar contra un model | Trieu punts coincidents o escriviu les coordenades dels objectius, i després refineu un escaneig cada cop amb ICP: vegeu [Registra diversos escanejos en un de sol](topic:register-scans) |

## Rutines i personalització

| Encara no implementat | En lloc d'això, avui |
|---|---|
| LISP compilat o protegit (.fas, .vlx), programes nadius (.arx, .crx, .dbx) i VBA (.dvb) | Carregueu el codi font .lsp d'una rutina amb {{cmd:APPLOAD}}. |
| `grread` de LISP, reactors (`vlr-…`), funcions de corba (`vlax-curve-…`), diccionaris i dades estesos, `acet-…` de les Express Tools | La resta del llenguatge funciona: vegeu [Executa rutines LISP](topic:run-lisp). La línia d'ordres indica quina funció falta quan una rutina n'arriba a una. |
| Imatges i diapositives en un diàleg de rutina | Es mostren com a marcs en blanc; la resta del diàleg funciona. |
| CraftScript (.craft), Lua i Python a CadCraft | Executeu-los a l'espai Script de PartCraft. |
| Llistes de capa, color i tipus de línia dins dels estils de menú de la cinta | Useu el tauler {{ui:Capes}} i {{ui:Propietats}}. |
| El Startup Suite i els àlies guardats al vostre ordinador o sincronitzats | Es guarden en aquest navegador; l'aplicació d'escriptori i el servei al núvol els guardaran per a vosaltres. A Studio, `acad.lsp` i `acaddoc.lsp` es llegeixen d'una carpeta de suport que trieu (Carrega aplicacions). |

## Ajuda

L'ajuda descriu aquesta versió. Quan s'afegeix alguna cosa, deixa aquesta pàgina i passa a les guies pas a pas.
