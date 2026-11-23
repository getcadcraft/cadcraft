---
title: Novetats de la 0.9 (anteriors)
summary: Trames que segueixen el seu contorn, capes de grups, plantes apilades, murs 2D intel·ligents amb portes i finestres, estils de text i un editor de text amb format, una línia d'ordres flotant, ajust a la quadrícula, deu maneres de dibuixar un arc, i el tauler de Documents.
keywords: novetats 0.9, versió anterior, novetats, 0.9, notes de la versió, registre de canvis, trama, trama associativa, hatchedit, fitxer pat, fitxer de patró, grups de capes, laygroup, plantes, plantes apilades, floors, floorlayers, murs intel·ligents, mur, porta, finestra, eines de mur, estil de text, estil, editor mtext, text de paràgraf, format, línia d'ordres flotant, línia d'ordres, àrea superior, compacta, ajust a la quadrícula, grid snap, f9, arc, tauler de documents, registre, sortida, mides d'acer del Regne Unit, draw.io, text tailandès, dxf r12, novetats, què hi ha de nou, notes de la versió, registre de canvis, canvis, 0.8, 0.8.1, versió, noves funcions, autocomplete, fantasma, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, merge, git, fossil, access, dibuix sense visió, lector de pantalla, limits, rumbs, aunits, shx, diagram, ole, historial, comparar, en paraules, propietats, peus i polzades, estira, idiomes, dispositius d'entrada, problemes, en viu, assistents
from: 3451e64c
---

Això és el que ha canviat a CadCraft 0.9, en comparació amb la 0.8.1. CadCraft és l'aplicació de dibuix 2D i 3D de CadCraft Studio 0.9 i de les seves vuit aplicacions. La 0.9 completa el dibuix en planta, afegeix estils de text i un editor de text real, i et dona més espai a la pantalla.

## Novetats

### Dibuix en planta

- **Trames que segueixen el seu contorn.** {{cmd:HATCH}} s'enllaça amb el que la delimita. Si mous, gires o escales el contorn, la trama i el seu patró el segueixen; si el reformes, la trama es torna a calcular. {{cmd:HATCHEDIT}} (`HE`) canvia una trama després i crea o acaba l'enllaç. Vegeu [Trama i àrees de farciment](topic:hatch).
- **Fitxers de patró de trama.** A la pregunta `Especifiqueu un punt interior` de {{cmd:HATCH}}, escriu `F` (Fitxer de patró) i tria un fitxer `.pat`. Només s'han provat fitxers escrits en el format habitual.
- **Grups de capes.** A {{ui:Eines}} del tauler {{ui:Capes}}: {{ui:Grup nou}}, {{ui:Afegeix grups predefinits}}, {{ui:Agrupa pel nom}} i {{ui:Cerca una capa}}; o escriu {{cmd:LAYGROUP}} (`LG`). Vegeu [Organitza un dibuix amb capes](topic:layers#group-layers).
- **Plantes apilades.** {{cmd:FLOORS}} (`FLR`), o {{ui:Plantes…}} al menú {{ui:Més}} del grup {{ui:Vista}}. Una finestra gràfica en un full pot mostrar una planta sota {{ui:Planta mostrada}} a Propietats. {{cmd:FLOORLAYERS}} converteix les plantes en capes per a un fitxer que va a una altra persona. Vegeu [Apila plantes en un dibuix](topic:floors).
- **Murs, portes i finestres 2D intel·ligents.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) i {{cmd:DELOPENING}}. Les cantonades, les unions en T i els creuaments es calculen per tu. Els murs guarden un registre de com s'uneixen, i a Propietats hi ha No permetis la unió a l'inici / al final, una Línia de referència i una Longitud editable. Vegeu [Dibuixa murs, portes i finestres intel·ligents en 2D](topic:walls-2d).
- **L'eina de mur en murs de planta.** Escriu {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} i la resta. Encara no tenen botons a la barra d'eines. Vegeu [Formes de mur, talls, desfasaments i bloqueigs per a murs 2D](topic:wall-tools-2d).

### Text

- **Estils de text.** {{cmd:STYLE}} (`ST`), o {{ui:Estil de text}} a la barra d'eines {{ui:Dibuix}}: estils amb nom amb un tipus de lletra, alçada, factor d'amplada i inclinació. Vegeu [Defineix el tipus de lletra i la mida del text amb estils de text](topic:text-styles).
- **Un editor de text de paràgraf amb format.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} o un doble clic sobre el text obre una caixa amb tipus de lletra, mida, negreta, cursiva, subratllat, ratllat, color, alineació i els signes de grau, més o menys i diàmetre, més {{ui:D'acord}} i {{ui:Cancel·la}}. Vegeu [Dona format al text de paràgraf](topic:format-paragraph-text).
- **Un diagrama a partir d'XML de draw.io.** {{cmd:DIAGRAM}} (`T2D`) també llegeix XML de draw.io enganxat. Vegeu [Dibuixa un diagrama a partir de text](topic:text-to-diagram).
- **Text tailandès en un traçat PDF.** Abans s'imprimia com a signes d'interrogació.

### Més espai i ajuts de dibuix

- **Una línia d'ordres flotant i més fina, i una àrea superior compacta.** Arrossega la nansa de la línia d'ordres per fer-la flotar, arrossega la seva vora superior per tenir-ne menys línies, {{key:F2}} obre l'historial. {{ui:Configuració}} › {{ui:CadCraft}} › {{ui:Línia d'ordres}} i les opcions de l'àrea superior tenen les mateixes configuracions. Vegeu [Configuració](topic:settings#command-line).
- **Menú de referències a objectes.** Fes clic dret a {{ui:Pas}} a la barra d'estat, o escriu {{cmd:OSNAP}}.
- **Ajust a la quadrícula.** El botó {{ui:Pas a quadrícula}} de la barra d'estat, o {{key:F9}}: els punts triats van al punt de quadrícula més proper quan cap referència a objectes no ha agafat el punt.
- **Arc de deu maneres, i Continua.** {{ui:Arc}} a la barra d'eines {{ui:Dibuix}} o {{cmd:ARC}}: de 3 punts, la família Inici/Centre/Final i la família Centre/Inici/Final, i Continua (prem {{key:Enter}} al punt inicial) a partir de l'última línia, arc o polilínia.
- **El tauler de Documents.** {{cmd:DOCUMENTS}} (`DOCS`) o {{ui:Documents…}} al menú {{ui:Més}} del grup {{ui:Vista}}: revisió, estat i extracció de cada dibuix d'una carpeta de projecte. S'obre com un diàleg centrat. Vegeu [Documents](topic:documents).

### Fitxers

- **Mides d'acer del Regne Unit.** 976 seccions al tauler {{ui:Estàndard}}, escrites tal com apareixen als plànols (per exemple `305x165x40 UB`).
- **Paquets sud-africans** (pràctica de dibuix i normativa de la construcció) com a paquets del complement de normativa de la construcció. Els números no estan verificats.
- **Complements per a CadCraft,** afegits sota demanda i desactivats per defecte: disseny d'il·luminació interior, disseny de xips (de HDL a la disposició), gravat amb fresadora, simulació de circuits, pinyons de cadena de corró i paquets de normativa de la construcció per país.

## Corregit

- Moure, girar o escalar una trama deixava el seu patró enrere.
- {{cmd:GRIDMOVE}} arrossegava un mur de planta sencer que només començava a la línia de quadrícula. Ara un mur es jutja pels seus extrems.
- La quadrícula només es mostrava dins dels límits del dibuix fins i tot amb els límits desactivats.
- La llista de blocs del tauler lateral es desplaça, i un nom que no és cap bloc enumera els blocs que comencen amb ell («Volíeu dir»).
- Els fitxers DXF R12 que AutoCAD rebutjava («Unknown group 1001 for table») ara s'hi obren.
- Els fitxers molt grans (d'uns 70.000 elements en amunt) no s'obrien amb «Maximum call stack size exceeded».
- Els fitxers DWG d'AutoCAD 2018 i posteriors amb una versió de manteniment alta no s'obrien amb «bad BITLONG code 11».
- A la caixa de text de paràgraf, una mida nova escrita per a una part seleccionada manté la selecció.

## A totes les aplicacions

Consells emergents a cada control amb una indicació, un consell d'inici que pots tancar, pestanyes que es desplacen quan no hi caben, i un títol de pestanya del navegador que segueix el dibuix obert (`<dibuix> - CadCraft | CadCraft`). {{ui:Configuració}} › {{ui:Disposició}} és ara un desplegable amb opcions de dues línies. La llista d'idiomes de {{ui:Configuració}} és més llarga que a la 0.8. L'edició col·laborativa en viu, les col·leccions de la biblioteca i les unitats de pes i temperatura es descriuen a les notes de Studio.

## Límits reals

- El text de paràgraf no té llistes amb vinyetes ni numerades, regle de tabulacions ni justificació. Els PDF traçats componen el text en Helvetica.
- Els murs de planta són rectes, així que un arc es dibuixa com a murs curts. La revisió de la comunitat de l'eina de mur encara està pendent.
- Els grups de capes no s'escriuen en el format propi d'AutoCAD, de manera que AutoCAD mostra una llista plana. Els altres programes mostren totes les plantes juntes llevat que executis {{cmd:FLOORLAYERS}}.
- El tauler de Documents no l'han provat dues persones en una carpeta compartida real. El gravat amb fresadora no s'ha executat en cap màquina real. L'estimació d'il·luminació s'ha comprovat amb un traç de fotons, no amb un altre programa. Els complements d'enginyeria són eines de comprovació, no un substitut de la revisió d'un enginyer.
- Els idiomes diferents de l'anglès són esborranys automàtics, i algunes de les paraules noves només són en anglès.

## Anteriors: 0.8 i 0.8.1

Això és el que va canviar a CadCraft 0.8 i 0.8.1, en comparació amb la 0.7. La 0.8 (1 de novembre de 2026) afegeix ajudes per al dibuix que treballen a partir del teu propi dibuix, amb regles al teu ordinador i sense cap model, i la 0.8.1 (2 de novembre de 2026) corregeix els errors reportats després.

### Novetats

**Un dibuix que acaba el teu pensament**

- **Un fantasma mostra què ve després.** Sense cap ordre en curs, un fantasma gris de línies discontínues mostra què diuen els patrons del propi dibuix que ve després: el següent munt amb el mateix espaiat, el següent graó d'una escala, el mur que falta d'una habitació. Prem {{key:Tab}} per dibuixar-lo com un sol pas de desfer, o {{key:Esc}} per descartar-lo. Només mira els objectes més nous, així que es manté fluid en un dibuix gran. Desactiva-ho a {{ui:Configuració}} › {{ui:CadCraft}} o amb {{cmd:AUTOCOMPLETE}} `Off`.
- **El següent punt mentre dibuixes una línia.** Enmig de {{cmd:LINE}} o {{cmd:PLINE}}, el fantasma és el següent punt: el següent graó d'una escala, la quarta cantonada d'un rectangle, o el punt que el tanca. Apropa-hi el cursor i prem {{key:Tab}}, com si hi haguessis fet clic.
- **Els croquis a llapis esdevenen geometria precisa.** {{cmd:SKETCHFIX}}: dibuixa traços aproximats amb un llapis, ratolí o dit i cadascun esdevé una línia, cercle, arc, rectangle o polilínia nets, ajustats al que ja està dibuixat. Vegeu [Croquis amb un llapis i obtenció de geometria precisa](topic:sketch-with-a-pen).
- **Una foto d'un croquis esdevé un dibuix.** {{cmd:PHOTOSKETCH}} (`PSK`) troba el paper en una foto, redreça la perspectiva, aplica la mida de paper i l'escala que dones, i tradueix les línies del llapis en una capa per a cada color de llapis. El lletrejat no es tradueix.
- **Acotar-ho per regles.** {{cmd:AUTODIM}} (`ADIM`) fa cadenes de cotes al llarg dels costats que triïs, una mida total, amplades d'obertures, diàmetres de forats i, amb `Grid`, l'espaiat de la quadrícula. Mai no repeteix una cota que ja hi és.
- **Mou una línia de quadrícula i el conjunt la segueix.** {{cmd:GRIDMOVE}} (`GM`): els murs que acaben a la línia de quadrícula s'estiren amb ella, els murs al llarg d'ella, les columnes, la seva bombolla i etiqueta es mouen, i les cotes que hi són mesuren el nou espaiat. Un sol pas de desfer.

**Fulls, detalls i etiquetes**

- **Fulls que es disposen sols.** {{cmd:AUTOSHEET}} agafa les teves vistes amb nom (o les peces separades del model), tria una mida de paper i una escala estàndard, i posa les vistes en fulls nous amb un caixetí i una llegenda de nom i escala. Tot segueix sent editable. Vegeu [Disposa els fulls per a mi](topic:lay-out-sheets-for-me).
- **Els detalls de la teva empresa, oferts mentre dibuixes.** {{cmd:DETAILS}} (`DET`) guarda els teus propis blocs de detall. Quan el que seleccionis coincideix amb un per les paraules de les seves capes, noms de bloc i notes, la barra d'estat ho indica; tria'l i col·loca'l. {{cmd:DETAILS}} › Comparteix posa la teva llista a la carpeta de Documents i incorpora el que l'equip hi ha afegit. La configuració desactiva les ofertes.
- **Etiquetes als blocs.** {{cmd:TAGS}} defineix una etiqueta (el seu tipus, els valors que pot prendre, els blocs als quals s'aplica), la posa a les referències de bloc que seleccionis, i les llista en un quadre que pots desar com a CSV. Les definicions es guarden al DWG. Vegeu [Etiquetes](topic:tags).
- **Límits del dibuix.** {{cmd:LIMITS}} defineix un rectangle per al dibuix: la quadrícula l'omple i el zoom Tot el mostra. Els límits es mostren com un contorn i es desen en DWG i DXF, amb els límits del paper. Vegeu [Defineix els límits del dibuix](topic:drawing-limits).

**Treballar amb altres persones i altres programes**

- **Convertiu una anotació en una revisió.** {{cmd:REDLINE}} llegeix el paquet que escriu MarkupCraft i enumera cada canvi. Accepta o rebutja cadascun amb una nota; els acceptats reben un núvol de revisió i un registre de revisió en un sol pas de desfer, i desa el fitxer de respostes que tanca les anotacions a MarkupCraft. Vegeu [Converteix una anotació en una revisió](topic:redline-to-revision).
- **Dibuixos que git i Fossil poden fusionar.** Amb {{ui:Fitxers compatibles amb la fusió}} activat a {{ui:Configuració}} › {{ui:CadCraft}}, cada objecte rep una clau que no canvia mai (els fitxers són un 10 per cent més grans). `cadcraft merge base ours theirs` fusiona després les edicions de dues persones en un DWG o DXF objecte per objecte, i només informa dels punts on dues persones han canviat la mateixa cosa. Vegeu [Fusiona les edicions de dues persones en un mateix dibuix](topic:merge-drawings).
- **Què ha canviat, en paraules.** A l'historial, Compara dona una llista simple: on han canviat les coses, de quina mida són els llocs, què s'ha afegit, eliminat o canviat, i el text que s'ha editat. Vegeu [Digues en paraules què ha canviat](topic:changes-in-words).
- **Rumbs i angles.** Escriu una direcció com a rumb de topògraf, com N45°23'30"E, o en graus, minuts i segons, en qualsevol lloc on es demani un angle; AUNITS defineix com es mostren els angles. Vegeu [Escriu i mostra rumbs i angles](topic:bearings-and-angles).
- **Els teus propis tipus de lletra SHX.** Dona a CadCraft una carpeta de tipus de lletra SHX i els estils de text que els esmenten es dibuixen amb ells, a la pantalla i als traçats. Vegeu [Dibuixa text amb els teus propis tipus SHX](topic:shx-fonts).
- **Un diagrama a partir de text.** {{cmd:DIAGRAM}} llegeix un diagrama de flux Mermaid, un diagrama de components PlantUML, D2 o una llista de-a, i dibuixa blocs i connectors que pots editar. Vegeu [Dibuixa un diagrama a partir de text](topic:text-to-diagram).
- **Objectes OLE en un DWG.** {{cmd:OLELIST}} enumera els objectes OLE que porta un DWG i que CadCraft no pot col·locar per si mateix, i col·loca una còpia de la imatge on indiquis. Vegeu [Imatges](topic:pictures#objects-from-other-programs-ole).
- **Els teus càlculs es queden amb el dibuix.** Els fulls de càlcul i les raons de disseny es guarden al DWG amb la taula de classes.

**Dibuix sense visió**

- Activa {{ui:Dibuix sense visió}} a {{ui:Configuració}} (o escriu {{cmd:ACCESS}} i respon `On`). CadCraft diu cada ordre i cada resultat amb el teu lector de pantalla, descriu el dibuix i el que hi ha prop del cursor, et deixa moure el cursor i triar punts amb el teclat, i reprodueix un so per a cada referència i nansa. Quan el teu navegador pot reconèixer la veu al teu ordinador, es poden dir les ordres. Vegeu [Dibuix sense visió](topic:draft-without-sight).

**A totes les aplicacions**

- **Idiomes.** 54 idiomes; deu són nous (lituà, letó, bosnià, marathi, telugu, albanès, afrikaans, filipí, suahili, uzbek). Els idiomes més enllà de l'anglès són esborranys automàtics fins que un parlant nadiu els llegeixi.
- **Dispositius d'entrada.** Trackpad, llapis, ratolí 3D, comandament de joc i controls MIDI.
- **Files de la barra d'eines i la graella de propietats.** {{ui:Configuració}} › {{ui:General}} › {{ui:Files de la barra d'eines}} ofereix Ajusta, 2 files o 1 fila a les altres aplicacions. CadCraft manté la seva pròpia configuració a {{ui:Configuració}} › {{ui:CadCraft}} (vegeu [Files de la barra d'eines](topic:settings#toolbar-rows)). La graella de propietats compartida és a tres altres aplicacions, no a CadCraft.
- **Problemes, En viu i complements.** Un tauler de Problemes compartit que avisa a totes les aplicacions, una vista En viu de qui és on a CadCraft Studio (vegeu [Treballeu junts en un dibuix](topic:work-live)), i una llista de complements.
- **Connecta la teva IA.** Una sola connexió des de CadCraft Studio a les vuit aplicacions, amb un nivell de només lectura, de suggeriment o d'edició per aplicació i un registre en llenguatge simple del que ha fet l'assistent. CadCraft no té IA pròpia, i Pregunta a totes les aplicacions usa la IA que connectes.

### Corregit a la 0.8.1

- **Propietats mostrava 150 en lloc de 12'-6"** en dibuixos en peus i polzades. Els camps que l'aplicació llegeix per si mateixa tornen a mantenir el seu text.
- **Els fitxers DWG la secció de classes dels quals es llegia com un tipus incorrecte** (GitHub cadcraft#5) ara s'obren correctament.
- **La creueta ja no es mostra darrere de les finestres emergents.**
- **Studio i les edicions empaquetades poden canviar d'idioma en temps d'execució.** Abans eren només en anglès. Encara no s'ha provat en totes les plataformes: digues-nos si l'idioma no canvia.
- **Les tauletes en vertical** donen l'alçada de quadrícula sobrant al llenç, i el mode de fulls comença a 760 px o menys.
- **STRETCH amb una finestra d'intersecció, i LIMITS,** es van reportar a Studio 0.8.0 i ja eren correctes a la versió web 0.8; l'instal·lador de qui ho va reportar era més antic. Studio 0.8.1 els porta.

### Encara no hi és en aquesta versió

- **La 0.8 i la 0.8.1 no estan signades digitalment.** Windows pot avisar (tria {{ui:Més informació}} i després {{ui:Executa igualment}}); en un Mac, fes clic dret a CadCraft Studio i tria {{ui:Obre}}. Les versions per a botigues estan en espera, i la versió per a iPad i iPhone no es va recompilar per a la 0.8.1.
- **Els croquis amb llapis i les fotos de croquis** només s'han provat amb fotos inventades i amb ratolí, encara no amb un llapis real, una pantalla tàctil o un croquis fet a mà sobre paper.
- **Dibuix sense visió** s'ha provat amb comprovacions automàtiques, encara no amb un lector de pantalla o una persona cega.
- **Compartir detalls** no ha tingut una comprovació de dues persones, i una carpeta del Pla de núvol d'equip com a carpeta de Documents no està construïda.
- **La fusió** funciona per als fitxers DWG i DXF de CadCraft; la mateixa per als fitxers de les altres aplicacions no està construïda.
- **Desfer entre finestres:** CadCraft informa de cada pas acabat, però Studio encara no té un únic Desfés per a totes les aplicacions; cada aplicació desfà els seus propis passos.
- **Els objectes OLE d'un DWG** es conserven però no es dibuixen al seu lloc.
- **Llegir taules d'estil de traçat (fitxers CTB)** d'altres programes està construït, però no s'ha comprovat amb un fitxer d'un altre programa.
- **Connecta la teva IA:** la connexió d'un clic a Studio, el connector allotjat per a la IA del navegador, la teva pròpia clau d'API dins de Studio i el paquet MCP publicat no es prometen en aquesta versió.

Per a la versió anterior, vegeu [Novetats de la versió 0.7](topic:whats-new-0-7).
