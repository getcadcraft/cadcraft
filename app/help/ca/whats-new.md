---
title: Novetats de la 0.9
summary: Traçats que segueixen el seu contorn, grups de capes, plantes apilades, murs intel·ligents 2D amb portes i finestres, estils de text i un editor de text amb format, una línia d'ordres flotant, ajust a la quadrícula, deu maneres de dibuixar un arc i el panell Documents.
keywords: novetats, 0.9, notes de la versió, registre de canvis, trama, trama associativa, hatchedit, fitxer pat, fitxer de patró, grups de capes, laygroup, plantes, plantes apilades, floorlayers, murs intel·ligents, mur, porta, finestra, eines de mur, estil de text, estil, editor mtext, text de paràgraf, format, línia d'ordres flotant, línia d'ordres, àrea superior, compacta, ajust a la quadrícula, grid snap, f9, arc, panell de documents, registre, extracció, acer del Regne Unit, draw.io, text tailandès, dxf r12, novetats, canvis, 0.8, 0.8.1, versió, noves funcionalitats, autocompletar, fantasma, tab, sketchfix, photosketch, autosheet, detalls, gridmove, autodim, etiquetes, marca, git, fossil, access, dibuix sense visió, lector de pantalla, límits, rumbs, aunits, shx, diagrama, ole, historial, comparar, en paraules, propietats, peus i polzades, estirar, idiomes, dispositius d'entrada, problemes, live, assistents
from: 8b6dea0b
---

Això és el que va canviar a CadCraft 0.9, comparat amb la 0.8.1. CadCraft és l'aplicació de dibuix 2D i 3D de CadCraft Studio 0.9 i de les seves vuit aplicacions. La 0.9 completa el dibuix de plantes, afegeix estils de text i un editor de text real, i dona més espai a la pantalla.

## Novetats

### Dibuix de plantes

- **Traços que segueixen el seu contorn.** {{cmd:HATCH}} es vincula al que el delimita. Moveu, gireu o escaleu el contorn i el traç i el seu patró el segueixen; redibuixeu-lo i el traç es torna a calcular. {{cmd:HATCHEDIT}} (`HE`) canvia un traç després i crea o acaba el vincle. Vegeu [Trama i àrees de farciment](topic:hatch).
- **Fitxers de patró de trama.** A la pregunta de {{cmd:HATCH}} `Pick internal point`, escriviu `F` (Fitxer de patró) i trieu un fitxer `.pat`. Només s'han provat fitxers escrits en el format habitual.
- **Grups de capes.** A {{ui:Eines}} del tauler {{ui:Capes}}: {{ui:Grup nou}}, {{ui:Afegeix grups predefinits}}, {{ui:Agrupa pel nom}} i {{ui:Cerca una capa}}; o escriviu {{cmd:LAYGROUP}} (`LG`). Vegeu [Organitza un dibuix amb capes](topic:layers#group-layers).
- **Plantes apilades.** {{cmd:FLOORS}} (`FLR`), o {{ui:Plantes…}} al menú {{ui:Més}} del grup {{ui:Vista}}. Una finestra gràfica d'un full pot mostrar una planta a {{ui:Planta mostrada}} a Propietats. {{cmd:FLOORLAYERS}} converteix les plantes en capes per a un fitxer que va a una altra persona. Vegeu [Apila plantes en un dibuix](topic:floors).
- **Murs intel·ligents 2D, portes i finestres.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) i {{cmd:DELOPENING}}. Les cantonades, les unions en T i els encreuaments es calculen per vosaltres. Els murs guarden un registre de com s'uneixen, i Propietats té No permetis la unió a l'inici / al final, una Línia d'ubicació i una Longitud editable. Vegeu [Dibuixa murs, portes i finestres 2D](topic:walls-2d).
- **L'eina de murs en murs de planta.** Escriviu {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} i la resta. Encara no tenen botons a la barra d'eines. Vegeu [Formes, talls, desplaçaments i bloquejos per als murs 2D](topic:wall-tools-2d).

### Text

- **Estils de text.** {{cmd:STYLE}} (`ST`), o {{ui:Estil de text}} a la barra d'eines {{ui:Dibuix}}: estils amb nom amb un tipus de lletra, alçada, factor d'amplada i inclinació. Vegeu [Defineix el tipus de lletra i la mida del text amb estils de text](topic:text-styles).
- **Un editor de text de paràgraf amb format.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} o un doble clic sobre el text obre un quadre amb tipus de lletra, mida, negreta, cursiva, subratllat, ratllat, color, alineació i els signes de grau, més/menys i diàmetre, més {{ui:D'acord}} i {{ui:Cancel·la}}. Vegeu [Dona format al text de paràgraf](topic:format-paragraph-text).
- **Un diagrama a partir de XML de draw.io.** {{cmd:DIAGRAM}} (`T2D`) també llegeix XML de draw.io enganxat. Vegeu [Dibuixa un diagrama a partir de text](topic:text-to-diagram).
- **Text tailandès en un traçat PDF.** Abans sortia com a signes d'interrogació.

### Més espai i ajudes de dibuix

- **Una línia d'ordres flotant i més fina, i una àrea superior compacta.** Arrossegueu la nansa de la línia d'ordres per deixar-la flotant, arrossegueu-ne la vora superior per tenir menys línies, i {{key:F2}} obre l'historial. {{ui:Configuració}} › {{ui:CadCraft}} › {{ui:Línia d'ordres}} i les opcions de l'àrea superior tenen els mateixos ajustaments. Vegeu [Configuració](topic:settings#command-line).
- **Menú de referències a objectes.** Feu clic dret a {{ui:Pas}} a la barra d'estat, o escriviu {{cmd:OSNAP}}.
- **Ajust a la quadrícula.** El botó {{ui:Pas a quadrícula}} a la barra d'estat, o {{key:F9}}: els punts triats van al punt de quadrícula més proper quan cap referència a objectes no ha agafat el punt.
- **Arc de deu maneres, i Continua.** {{ui:Arc}} a la barra d'eines {{ui:Dibuix}} o {{cmd:ARC}}: 3 punts, la família Inici/Centre/Final i la família Centre/Inici/Final, i Continua (premeu {{key:Enter}} al punt inicial) des de l'última línia, arc o polilínia.
- **El panell Documents.** {{cmd:DOCUMENTS}} (`DOCS`) o {{ui:Documents…}} al menú {{ui:Més}} del grup {{ui:Vista}}: revisió, estat i extracció de cada dibuix d'una carpeta de projecte. S'obre com a diàleg centrat. Vegeu [Documents](topic:documents).

### Fitxers

- **Mides d'acer del Regne Unit.** 976 seccions al panell Estàndard, escrites com als plànols (per exemple `305x165x40 UB`).
- **Paquets sud-africans** (pràctica de dibuix i normativa de construcció) com a paquets del complement Normativa de construcció. Les xifres no estan verificades.
- **Complements per a CadCraft,** afegits sota demanda i desactivats per defecte: disseny d'il·luminació interior, disseny de xips (de HDL a la distribució), gravat amb router, simulació de circuits, pinyons de cadena de corró i paquets de país de Normativa de construcció.

## Corregit

- Moure, girar o escalar un traç deixava el seu patró enrere.
- {{cmd:GRIDMOVE}} arrossegava un mur de planta sencer que només comença a la línia de quadrícula. Ara un mur es jutja pels seus extrems.
- La quadrícula només es mostrava dins dels límits del dibuix, fins i tot amb els límits desactivats.
- La llista de blocs del panell lateral es desplaça, i un nom que no és cap bloc llista els blocs que comencen per ell ("Volíeu dir").
- Els fitxers DXF R12 que AutoCAD rebutjava ("Unknown group 1001 for table") ara s'obren allà.
- Els fitxers molt grans (uns 70.000 entitats o més) fallaven en obrir-se amb "Maximum call stack size exceeded".
- Els fitxers DWG d'AutoCAD 2018 i posteriors amb una versió de manteniment alta fallaven en obrir-se amb "bad BITLONG code 11".
- Al quadre de text de paràgraf, una nova mida escrita per a una part seleccionada manté la selecció.

## A totes les aplicacions

Consells emergents de Bootstrap a cada control amb una ajuda, un consell d'inici que podeu tancar, pestanyes que es desplacen quan no hi caben, i un títol de pestanya del navegador que segueix el dibuix obert (`<drawing> - CadCraft | CadCraft`). {{ui:Configuració}} › {{ui:Disposició}} ara és una llista desplegable d'opcions de dues línies. La llista d'idiomes de {{ui:Configuració}} és més llarga que a la 0.8. La coedició en directe, les col·leccions de la Biblioteca i les unitats de pes i temperatura es descriuen a les notes de Studio.

## Límits reconeguts

- El text de paràgraf no té vinyetes ni llistes numerades, regle de tabulacions ni justificació. Els PDF traçats composen el text en Helvetica.
- Els murs de planta són rectes, de manera que un arc es dibuixa com a murs curts. La revisió manual de la comunitat de l'eina de murs està pendent.
- Les capes de grup no s'escriuen en el format propi d'AutoCAD, de manera que AutoCAD en mostra una llista plana. Els altres programes mostren totes les plantes juntes tret que executeu {{cmd:FLOORLAYERS}}.
- El panell Documents encara no l'han provat dues persones en una carpeta compartida real. El gravat amb router no s'ha executat en cap màquina real. L'estimació d'il·luminació s'ha comprovat amb un traç de fotons, no amb un altre programa. Els complements d'enginyeria són ajudes de comprovació, no un substitut de la revisió d'un enginyer.
- Els idiomes diferents de l'anglès són esborranys de màquina, i algunes de les paraules noves són només en anglès.

## Anteriors: 0.8 i 0.8.1

Això és el que va canviar a CadCraft 0.8 i 0.8.1, comparat amb la 0.7. La 0.8 (1 de novembre de 2026) afegeix ajudes de dibuix que treballen a partir del vostre propi dibuix, amb regles al vostre ordinador i sense cap model, i la 0.8.1 (2 de novembre de 2026) corregeix errors reportats després.

### Novetats

**Un dibuix que acaba el vostre pensament**

- **Un fantasma mostra el següent pas.** Sense cap ordre en curs, un fantasma gris de traços mostra el que diuen els patrons del vostre dibuix que ve a continuació: el següent muntant amb el mateix espaiat, el següent esglaó d'una escala, el mur que falta d'una sala. Premeu {{key:Tab}} per dibuixar-lo com a un sol pas per desfer, o {{key:Esc}} per descartar-lo. Només mira els objectes més nous, de manera que es manté fluid en un dibuix gran. Desactiveu-lo a {{ui:Configuració}} › {{ui:CadCraft}} o amb {{cmd:AUTOCOMPLETE}} `Off`.
- **El següent punt mentre dibuixeu una línia.** Enmig de {{cmd:LINE}} o {{cmd:PLINE}} el fantasma és el següent punt: el següent esglaó d'una escala, la quarta cantonada d'un rectangle, o el punt que el tanca. Apropeu-hi el cursor i premeu {{key:Tab}}, com si hi haguéssiu fet clic.
- **Els esbossos a llapis esdevenen geometria precisa.** {{cmd:SKETCHFIX}}: dibuixeu traços aproximats amb un llapis, ratolí o dit i cadascun esdevé una línia, cercle, arc, rectangle o polilínia neta, ajustada al que ja hi ha dibuixat. Vegeu [Dibuixa a mà alçada amb un llapis i obtén geometria precisa](topic:sketch-with-a-pen).
- **Una fotografia d'un esbós es converteix en dibuix.** {{cmd:PHOTOSKETCH}} (`PSK`) troba el paper en una fotografia, redreça la perspectiva, aplica la mida de paper i l'escala que doneu, i tradueix els traços del llapis a una capa per a cada color de llapis. El text no es tradueix.
- **Acotar per regles.** {{cmd:AUTODIM}} (`ADIM`) fa cadenes de cotes al llarg dels costats que trieu, una mida total, amplades d'obertures, diàmetres de forat i, amb `Grid`, l'espaiat de la quadrícula. Mai no repeteix una cota que ja hi és.
- **Moveu una línia de quadrícula i el conjunt la segueix.** {{cmd:GRIDMOVE}} (`GM`): els murs que acaben a la línia de quadrícula s'estiren amb ella, els murs al llarg d'ella, les columnes, la seva bombolla i etiqueta es mouen, i les cotes sobre ella mesuren el nou espaiat. Un sol pas per desfer.

**Fulls, detalls i etiquetes**

- **Fulls que es maqueten sols.** {{cmd:AUTOSHEET}} agafa les vostres vistes amb nom (o les peces separades del model), tria una mida de paper i una escala estàndard, i col·loca les vistes en fulls nous amb un caixetí i una llegenda de nom i escala. Tot continua sent editable. Vegeu [Maqueta els fulls per mi](topic:lay-out-sheets-for-me).
- **Els detalls de la vostra empresa, ofert mentre dibuixeu.** {{cmd:DETAILS}} (`DET`) guarda els vostres propis blocs de detall. Quan el que seleccioneu coincideix amb un per les paraules de les seves capes, noms de blocs i notes, la barra d'estat ho diu; trieu-lo i col·loqueu-lo. {{cmd:DETAILS}} › Share posa la vostra llista a la carpeta Documents i incorpora el que el vostre equip hi hagi afegit. Configuració desactiva les ofertes.
- **Etiquetes als blocs.** {{cmd:TAGS}} defineix una etiqueta (el seu tipus, els valors que pot prendre, els blocs als quals s'aplica), la posa a les referències de bloc que seleccioneu, i les llista com a quadre que podeu desar com a CSV. Les definicions es guarden al DWG. Vegeu [Etiquetes](topic:tags).
- **Límits del dibuix.** {{cmd:LIMITS}} defineix un rectangle per al dibuix: la quadrícula l'omple i el zoom Tot el mostra. Els límits es mostren com un contorn i es desen als DWG i DXF, amb els límits del paper. Vegeu [Defineix els límits del dibuix](topic:drawing-limits).

**Treballar amb altres persones i altres programes**

- **Convertiu una marca en una revisió.** {{cmd:REDLINE}} llegeix el paquet que escriu MarkupCraft i llista cada canvi. Accepteu o rebutgeu cadascun amb una nota; els acceptats reben un núvol de revisió i un registre de revisió en un sol pas per desfer, i deseu el fitxer de respostes que tanca les marques a MarkupCraft. Vegeu [Converteix una marca en una revisió](topic:redline-to-revision).
- **Dibuixos que git i Fossil poden fusionar.** Amb {{ui:Fitxers compatibles amb la fusió}} activat a {{ui:Configuració}} › {{ui:CadCraft}}, cada objecte rep una clau que mai canvia (els fitxers són un 10 per cent més grans). `cadcraft merge base ours theirs` fusiona després les edicions de dues persones d'un mateix objecte DWG o DXF objecte per objecte, i informa només d'on dues persones han canviat la mateixa cosa. Vegeu [Fusiona les edicions de dues persones en un dibuix](topic:merge-drawings).
- **Què ha canviat, en paraules.** A l'Historial, Comparar dona una llista en llenguatge planer: on han canviat les coses, quant ocupen aquests llocs, què s'ha afegit, eliminat o canviat, i el text editat. Vegeu [Digues en paraules què ha canviat](topic:changes-in-words).
- **Rumbs i angles.** Escriviu una direcció com a rumb de topògraf com N45°23'30"E, o en graus, minuts i segons, en qualsevol lloc on es demana un angle; AUNITS defineix com es mostren els angles. Vegeu [Escriu i mostra rumbs i angles](topic:bearings-and-angles).
- **Els vostres propis tipus de lletra SHX.** Doneu a CadCraft una carpeta de tipus SHX i els estils de text que els anomenen es dibuixen amb ells, a la pantalla i als traçats. Vegeu [Dibuixa text amb els vostres propis tipus SHX](topic:shx-fonts).
- **Un diagrama a partir de text.** {{cmd:DIAGRAM}} llegeix un diagrama de flux Mermaid, un diagrama de components PlantUML, D2 o una llista de-a, i dibuixa blocs i connectors que podeu editar. Vegeu [Dibuixa un diagrama a partir de text](topic:text-to-diagram).
- **Objectes OLE en un DWG.** {{cmd:OLELIST}} llista els objectes OLE que porta un DWG i que CadCraft no pot col·locar per si mateix, i col·loca una còpia d'una imatge on digueu. Vegeu [Imatges](topic:pictures#objects-from-other-programs-ole).
- **Els vostres càlculs es queden amb el dibuix.** Els fulls de càlcul i les raons de disseny es guarden al DWG amb la taula de classes.

**Dibuix sense visió**

- Activeu {{ui:Dibuix sense visió}} a {{ui:Configuració}} (o escriviu {{cmd:ACCESS}} i respongueu `On`). CadCraft diu en veu alta cada ordre i resultat amb el vostre lector de pantalla, descriu el dibuix i el que hi ha a prop del cursor, us deixa moure el cursor i triar punts amb el teclat, i fa un so per a cada referència a objectes i nansa. Quan el vostre navegador pot reconèixer la veu al vostre ordinador, les ordres es poden dictar. Vegeu [Dibuixa sense visió](topic:draft-without-sight).

**A totes les aplicacions**

- **Idiomes.** 54 idiomes; deu són nous (lituà, letó, bosnià, marathi, telugu, albanès, afrikaans, filipí, suahili, uzbek). Els idiomes diferents de l'anglès són esborranys de màquina fins que una persona nativa els llegeixi.
- **Dispositius d'entrada.** Trackpad, llapis, ratolí 3D, comandament de joc i controls MIDI.
- **Barra d'eines en files i la graella de propietats.** {{ui:Configuració}} › {{ui:General}} › {{ui:Files de la barra d'eines}} ofereix Ajusta, 2 files o 1 fila a les altres aplicacions. CadCraft manté la seva pròpia configuració a {{ui:Configuració}} › {{ui:CadCraft}} (vegeu [Files de la barra d'eines](topic:settings#toolbar-rows)). La graella de propietats compartida és a tres altres aplicacions, no a CadCraft.
- **Problemes, Live i complements.** Un tauler compartit de Problemes que avisa a cada aplicació, una vista Live de qui és on a CadCraft Studio (vegeu [Treballeu junts en un dibuix en directe](topic:work-live)), i una llista de complements.
- **Connecteu la vostra IA.** Una sola connexió des de CadCraft Studio a les vuit aplicacions, amb un nivell de només lectura, suggerir o editar per aplicació, i un registre en llenguatge planer del que ha fet l'assistent. CadCraft no té IA pròpia, i Pregunta a cada aplicació fa servir la IA que connecteu.

### Corregit a la 0.8.1

- **Les Propietats mostraven 150 en lloc de 12'-6"** en dibuixos en peus i polzades. Els camps que l'aplicació llegeix ella mateixa tornen a mantenir el seu text.
- **Fitxers DWG la secció de classes dels quals es llegia com a tipus equivocat** (GitHub cadcraft#5) ara s'obren bé.
- **La creu ja no apareix darrere de les finestres emergents.**
- **Studio i les edicions empaquetades poden canviar d'idioma en temps d'execució.** Abans eren només en anglès. Encara no s'ha provat a totes les plataformes: digueu-nos si l'idioma no canvia.
- **Les tauletes en vertical** donen l'espai de quadrícula sobrant al llenç, i el mode de fulls comença a 760 px o menys.
- **STRETCH amb una finestra d'encreuament, i LIMITS,** es van reportar a Studio 0.8.0 i ja estaven bé a la compilació web 0.8; l'instal·lador de qui ho va reportar era més antic. Studio 0.8.1 els porta.

### Encara no en aquesta versió

- **La 0.8 i la 0.8.1 no estan signades amb codi.** Windows pot avisar (trieu {{ui:Més informació}} i després {{ui:Executa-ho igualment}}); en un Mac, feu clic dret a CadCraft Studio i trieu {{ui:Obre}}. Les versions per a botigues estan en espera, i la versió per a iPad i iPhone no es va reconstruir per a la 0.8.1.
- **Els esbossos a llapis i les fotografies d'esbossos** només s'han provat amb fotografies inventades i amb ratolí, encara no amb un llapis real, una pantalla tàctil o un esbós a mà sobre paper.
- **Dibuix sense visió** s'ha provat amb comprovacions automàtiques, encara no amb un lector de pantalla o un usuari cec.
- **Compartir detalls** no ha tingut una comprovació entre dues persones, i una carpeta de Team Cloud Plan com a carpeta Documents no està feta.
- **La fusió** funciona per als fitxers DWG i DXF de CadCraft; la de fitxers d'altres aplicacions no està feta.
- **Desfer entre finestres:** CadCraft informa de cada pas acabat, però Studio encara no té un sol Desfer per a totes les aplicacions; cada aplicació desfà els seus passos.
- **Els objectes OLE d'un DWG** es conserven però no es dibuixen al seu lloc.
- **La lectura de taules d'estils de traçat (fitxers CTB)** d'altres programes està feta però no s'ha comprovat amb un fitxer d'un altre programa.
- **Connecteu la vostra IA:** la connexió amb un clic a Studio, el connector allotjat per a la IA del navegador, la vostra pròpia clau d'API dins de Studio i el paquet MCP publicat no estan garantits en aquesta versió.

Per a la versió anterior, vegeu [Novetats de la 0.7](topic:whats-new-0-7).
