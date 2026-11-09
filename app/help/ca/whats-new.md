---
title: Novetats de la 0.8 i la 0.8.1
summary: Un fantasma que acaba el vostre dibuix, croquis a llapis i fotos de croquis convertits en geometria, fulls que es disposen sols, detalls ofertes mentre dibuixeu, GRIDMOVE i AUTODIM, etiquetes, fitxers compatibles amb la fusió, marques convertides en revisions, dibuix sense visió, límits del dibuix, rumbs, tipus de lletra SHX, diagrames a partir de text, i correccions a la 0.8.1.
keywords: novetats, què és nou, notes de la versió, registre de canvis, canvis, 0.8, 0.8.1, versió, noves funcions, autocompleta, fantasma, tab, sketchfix, photosketch, autosheet, detalls, gridmove, autodim, etiquetes, tags, redline, merge, git, fossil, accés, dibuix sense visió, lector de pantalla, límits, rumbs, aunits, shx, diagrama, ole, historial, compara, amb paraules, propietats, peus i polzades, estira, idiomes, dispositius d'entrada, problemes, live, assistents
from: 9dd82db5
---

Aquests són els canvis de CadCraft 0.8 i 0.8.1, respecte de la 0.7. La 0.8 (1 de novembre de 2026) afegeix ajudes de dibuix que treballen amb el vostre propi dibuix, amb regles al vostre ordinador i sense cap model, i la 0.8.1 (2 de novembre de 2026) corregeix els errors notificats després.

## Novetats

### Un dibuix que completa la idea

- **Un fantasma mostra el que ve després.** Sense cap ordre en curs, un fantasma gris discontinu mostra el que diuen els patrons del vostre propi dibuix que ve després: el següent muntant amb el mateix espaiat, el següent graó d'una escala, el mur que falta d'una sala. Premeu {{key:Tab}} per dibuixar-lo com un sol pas de desfer, o {{key:Esc}} per descartar-lo. Només mira els objectes més nous, de manera que es manté fluid en un dibuix gran. Desactiveu-ho a {{ui:Configuració}} › {{ui:CadCraft}} o amb {{cmd:AUTOCOMPLETE}} `Off`.
- **El següent punt mentre dibuixeu una línia.** Enmig de {{cmd:LINE}} o {{cmd:PLINE}} el fantasma és el següent punt: el següent graó d'una escala, la quarta cantonada d'un rectangle, o el punt que el tanca. Apropeu-hi el cursor i premeu {{key:Tab}}, com si hi haguéssiu fet clic.
- **Els croquis a llapis esdevenen geometria precisa.** {{cmd:SKETCHFIX}}: dibuixeu traços aproximats amb llapis, ratolí o dit i cadascun esdevé una línia, un cercle, un arc, un rectangle o una polilínia nets, ajustats a allò que ja està dibuixat. Vegeu [Croquis a llapis i geometria precisa](topic:sketch-with-a-pen).
- **Una foto d'un croquis esdevé un dibuix.** {{cmd:PHOTOSKETCH}} (`PSK`) troba el paper en una foto, n'endreça la perspectiva, aplica la mida de paper i l'escala que indiqueu, i traça les línies del llapis en una capa per a cada color de llapis. Les lletres no es tracen.
- **Acotació per regles.** {{cmd:AUTODIM}} (`ADIM`) fa cadenes de cotes al llarg dels costats que trieu, una mida global, amplades d'obertura, diàmetres de forats i, amb `Grid`, l'espaiat de la quadrícula. Mai no repeteix una cota que ja hi és.
- **Moveu una línia de quadrícula i el conjunt la segueix.** {{cmd:GRIDMOVE}} (`GM`): els murs que acaben a la línia de quadrícula s'estiren amb ella, els murs que hi van al llarg, les columnes, el seu cercle d'eix i l'etiqueta es mouen, i les cotes que hi són mesuren el nou espaiat. Un sol pas de desfer.

### Fulls, detalls i etiquetes

- **Fulls que es disposen sols.** {{cmd:AUTOSHEET}} agafa les vistes amb nom (o les peces separades del model), tria una mida de paper i una escala estàndard, i posa les vistes en fulls nous amb un caixetí i un peu amb el nom i l'escala. Tot continua sent editable. Vegeu [Disposició automàtica dels fulls](topic:lay-out-sheets-for-me).
- **Els detalls del vostre estudi, oferts mentre dibuixeu.** {{cmd:DETAILS}} (`DET`) guarda els vostres propis blocs de detall. Quan la selecció coincideix amb un per les paraules de les seves capes, els noms de bloc i les notes, la barra d'estat ho indica; trieu-lo i col·loqueu-lo. {{cmd:DETAILS}} › Comparteix posa la vostra llista a la carpeta Documents i incorpora el que hagi afegit el vostre equip. Configuració desactiva les ofertes.
- **Etiquetes als blocs.** {{cmd:TAGS}} defineix una etiqueta (el seu tipus, els valors que pot prendre, els blocs als quals s'aplica), la posa a les referències de bloc que seleccioneu i les llista com un quadre que podeu desar com a CSV. Les definicions es guarden al DWG. Vegeu [Etiquetes](topic:tags).
- **Límits del dibuix.** {{cmd:LIMITS}} defineix un rectangle per al dibuix: la quadrícula l'omple i el zoom Tot el mostra. Els límits es mostren com un contorn i es desen en DWG i DXF, amb els límits del paper. Vegeu [Definició dels límits del dibuix](topic:drawing-limits).

### Treballar amb altres persones i altres programes

- **Una marca esdevé revisió.** {{cmd:REDLINE}} llegeix el paquet que escriu MarkupCraft i enumera cada canvi. Accepteu o rebutgeu cadascun amb una nota; els acceptats obtenen un núvol de revisió i un registre de revisions en un sol pas de desfer, i deseu el fitxer de respostes que tanca les marques a MarkupCraft. Vegeu [Conversió d'una marca en revisió](topic:redline-to-revision).
- **Dibuixos que git i Fossil poden fusionar.** Amb {{ui:Fitxers compatibles amb la fusió}} activat a {{ui:Configuració}} › {{ui:CadCraft}}, cada objecte rep una clau que no canvia mai (els fitxers són un 10 % més grans). Després, `cadcraft merge base ours theirs` fusiona, objecte per objecte, les edicions de dues persones en un DWG o DXF, i només informa dels punts on dues persones han canviat el mateix. Vegeu [Fusió de les edicions de dues persones en un dibuix](topic:merge-drawings).
- **Què ha canviat, en paraules.** A Historial, Compara dona una llista simple: on han canviat coses, quina mida tenen les zones, què s'ha afegit, eliminat o canviat, i el text que s'ha editat. Vegeu [Dir amb paraules què ha canviat](topic:changes-in-words).
- **Rumbs i angles.** Escriviu una direcció com a rumb de topògraf, com N45°23'30"E, o en graus, minuts i segons, en qualsevol lloc on es demani un angle; AUNITS defineix com es mostren els angles. Vegeu [Escriptura i visualització de rumbs i angles](topic:bearings-and-angles).
- **Els vostres propis tipus de lletra SHX.** Doneu a CadCraft una carpeta de tipus de lletra SHX; el text dels estils que els anomenen es dibuixa amb ells, a la pantalla i als traçats. Vegeu [Dibuix de text amb els vostres propis tipus de lletra SHX](topic:shx-fonts).
- **Un diagrama a partir de text.** {{cmd:DIAGRAM}} llegeix un diagrama de flux de Mermaid, un diagrama de components de PlantUML, D2 o una llista d'origen i destí, i dibuixa blocs i connectors que podeu editar. Vegeu [Dibuix d'un diagrama a partir de text](topic:text-to-diagram).
- **Objectes OLE en un DWG.** {{cmd:OLELIST}} llista els objectes OLE que porta un DWG i que CadCraft no pot col·locar per si mateix, i col·loca una còpia d'una imatge on digueu. Vegeu [Imatges](topic:pictures#objects-from-other-programs-ole).
- **Els vostres càlculs es queden amb el dibuix.** Els fulls de càlcul i els motius de disseny es guarden al DWG amb la taula de classes.

### Dibuix sense visió

- Activeu {{ui:Dibuix sense visió}} a {{ui:Configuració}} (o escriviu {{cmd:ACCESS}} i respongueu `On`). CadCraft anuncia cada ordre i cada resultat mitjançant el vostre lector de pantalla, descriu el dibuix i el que hi ha a prop del cursor, us deixa moure el cursor i triar punts amb el teclat, i reprodueix un so per a cada referència a objectes i cada nansa. Quan el vostre navegador pugui reconèixer la parla al vostre ordinador, es poden dictar ordres. Vegeu [Dibuix sense visió](topic:draft-without-sight).

### En totes les aplicacions

- **Idiomes.** 54 idiomes; deu són nous (lituà, letó, bosnià, marathi, telugu, albanès, afrikaans, filipí, suahili, uzbek). Els idiomes diferents de l'anglès són esborranys automàtics fins que un parlant nadiu els llegeixi.
- **Dispositius d'entrada.** Trackpad, llapis, ratolí 3D, comandament de joc i controls MIDI.
- **Files de la barra d'eines i la graella de propietats.** {{ui:Configuració}} › {{ui:General}} › {{ui:Files de la barra d'eines}} ofereix Ajusta, 2 files o 1 fila a les altres aplicacions. CadCraft manté la seva pròpia configuració a {{ui:Configuració}} › {{ui:CadCraft}} (vegeu [Files de la barra d'eines](topic:settings#toolbar-rows)). La graella de propietats compartida és a tres altres aplicacions, no a CadCraft.
- **Problemes, Live i complements.** Un tauler de Problemes compartit que avisa a totes les aplicacions, una vista Live de qui és on a CadCraft Studio (vegeu [Treballar junts en un mateix dibuix](topic:work-live)), i una llista de complements.
- **Connecteu la vostra IA.** Una sola connexió des de CadCraft Studio a les vuit aplicacions, amb un nivell només lectura, de suggeriment o d'edició per a cada aplicació, i un registre en paraules senzilles de què ha fet l'assistent. CadCraft no té IA pròpia, i Pregunta a cada aplicació fa servir la IA que connecteu.

## Corregit a la 0.8.1

- **Les propietats mostraven 150 en lloc de 12'-6"** en dibuixos en peus i polzades. Els camps que l'aplicació llegeix per si mateixa tornen a mantenir el seu text.
- **Fitxers DWG amb la secció de classes llegida com a tipus erroni** (GitHub cadcraft#5) ara s'obren correctament.
- **La creu del cursor ja no es mostra darrere de les finestres emergents.**
- **Studio i les edicions empaquetades poden canviar d'idioma en temps d'execució.** Abans només eren en anglès. Encara no s'ha provat a totes les plataformes: digueu-nos si l'idioma no canvia.
- **Les tauletes en posició vertical** donen l'alçada de quadrícula sobrant al llenç, i el mode de fulls comença a 760 px o menys.
- **STRETCH amb una finestra d'intersecció, i LIMITS,** s'havien notificat a Studio 0.8.0 i ja eren correctes a la versió web 0.8; l'instal·lador de la persona que ho va notificar era més antic. Studio 0.8.1 els inclou.

## Encara no implementat en aquesta versió

- **La 0.8 i la 0.8.1 no tenen signatura de codi.** Windows pot avisar (trieu {{ui:Més informació}} i després {{ui:Executa-ho igualment}}); en un Mac, feu clic dret a CadCraft Studio i trieu {{ui:Obre}}. Les versions per a botigues estan en pausa, i la versió per a iPad i iPhone no es va recompilar per a la 0.8.1.
- **Croquis a llapis i fotos de croquis** s'han provat només amb fotos inventades i un ratolí, encara no amb un llapis real, una pantalla tàctil o un croquis fet a mà en paper.
- **El dibuix sense visió** s'ha provat amb comprovacions automàtiques, encara no amb un lector de pantalla ni amb una persona cega que el provi.
- **Compartir detalls** no ha passat una comprovació de dues persones, i una carpeta de Team Cloud Plan com a carpeta Documents no està implementada.
- **La fusió** funciona per als fitxers DWG i DXF de CadCraft; per als fitxers de les altres aplicacions no està implementada.
- **Desfer entre finestres:** CadCraft informa de cada pas acabat, però Studio encara no té un sol Desfés per a totes les aplicacions; cada aplicació desfà els seus propis passos.
- **Els objectes OLE d'un DWG** es conserven però no es dibuixen al seu lloc.
- **La lectura de taules d'estils de traçat (fitxers CTB)** d'altres programes està implementada però no s'ha comprovat amb un fitxer d'un altre programa.
- **Connecteu la vostra IA:** la connexió d'un clic a Studio, el connector allotjat per a la IA del navegador, la vostra pròpia clau d'API dins de Studio i el paquet MCP publicat no es prometen en aquesta versió.

Per a la versió anterior, vegeu [Novetats de la 0.7](topic:whats-new-0-7).
