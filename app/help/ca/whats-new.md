---
title: Novetats de la versió 0.7
summary: Fons PDF i importació de PDF, dibuixos escanejats amb un calc automàtic, splines reals amb SPLINE, SPLINEDIT i PEDIT, un gestor d'estils de cota, text que conserva el seu format, WBLOCK i les vostres pròpies escales, sòlids 3D d'altres programes, registre d'escaneigs, un panell Làser, exportació USD, historial i impressió a CadCraft Studio, un primer dibuix guiat, la barra d'eines a qualsevol costat o en menys files, i més per als assistents d'IA.
keywords: novetats, què hi ha de nou, notes de versió, registre de canvis, canvis, 0.7, versió, funcions noves, pdf, pdfattach, pdfimport, fons, escaneig, scanattach, scantrace, calc, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, format, wblock, scalelistedit, llista d'escales, acis, sòlids 3d, registerscans, registra escaneigs, icp, e57, las, làser, grbl, g-code, usd, usdout, historial, versions, compara, imprimeix, impressora, png, svg, estil de traçat, tipus de línia, guia, full de referència ràpida, mapa d'ordres, posició de la barra d'eines, files de la barra d'eines, regen, regenall, touchpad, lliscament, pàgina de codi, ciríl·lic, coreà, xinès, japonès, elèctric, rcd, p&id, pid, acad.lsp, acaddoc.lsp, carpeta de suport, assistents, mcp, unitats, portuguès
from: b9258ca6
---

Aquests són els canvis de CadCraft 0.7 respecte de la 0.6. Gran part s'ha demanat a Discord. La llista s'agrupa per àrees, amb les més importants primer.

## Novetats

### PDF i dibuixos escanejats

- **Poseu una pàgina PDF sota el dibuix.** {{cmd:PDFATTACH}} (`PDFATT`) col·loca una pàgina a la seva mida real o a una escala que escriviu. Hi podeu ajustar el cursor a les seves línies, esvair-la, fer-la monocroma ({{cmd:PDFADJUST}}), retallar-la ({{cmd:PDFCLIP}}) i canviar les capes del propi PDF ({{cmd:PDFLAYERS}}). Es traça com a línies, farciments i text, i un DWG o DXF 2000 la conserva com un enllaç al fitxer. En obrir un PDF amb {{ui:Obre}} pregunta si l'ha d'adjuntar o importar. Vegeu [Fons PDF i importació de PDF](topic:pdf-underlay).
- **Convertiu una pàgina PDF en objectes de dibuix.** {{cmd:PDFIMPORT}} (`PDFIM`) crea línies, polilínies, cercles, arcs, trames sòlides i text en capes amb el nom del PDF, a la mida real, a una escala escrita, o escalats des de dos punts i una distància real, en un sol pas de desfer. Vegeu [Importa una pàgina](topic:pdf-underlay#import-a-page).
- **Dibuixos escanejats.** {{cmd:SCANATTACH}} porta un PNG, JPEG o TIFF (una pàgina o totes) o una pàgina PDF que és una imatge. Després l'escaleu des de dos punts ({{cmd:SCANSCALE}}), l'alineeu ({{cmd:SCANALIGN}}), l'escaireu a partir de les seves pròpies línies llargues ({{cmd:SCANDESKEW}}), la passeu a blanc i negre i en traieu les taques ({{cmd:SCANCLEAN}}), la retalleu i n'esborreu parts. Cada pas és un pas de desfer i el fitxer original es conserva. Vegeu [Dibuixos escanejats i el calc](topic:scanned-drawings).
- **Calqueu un escaneig en línies i arcs.** {{cmd:SCANTRACE}} dibuixa les línies de l'escaneig com a línies i arcs en una capa nova, SCAN-TRACE, amb una tolerància que definiu, i deixa el text i les trames com estan. L'informe indica què ha creat i què ha deixat, i no vol dir que el resultat sigui correcte: comproveu-lo amb el plànol. {{cmd:RASTERSNAP}} permet que les referències a objectes trobin els extrems, cantonades i encreuaments de l'escaneig. No s'envia res enlloc i no es fa servir cap model entrenat. Vegeu [El calc](topic:scanned-drawings#the-trace).

### Dibuix i edició

- **Splines reals.** {{cmd:SPLINE}} (`SPL`) dibuixa una corba que passa per punts o a partir de punts de control (grau 1 a 5), amb tangents als extrems; {{cmd:SPLINEDIT}} (`SPE`) mou, afegeix i esborra punts d'ajust o de control, defineix pesos, obre, tanca, inverteix, o converteix una spline en polilínia. Les splines dels fitxers DWG i DXF s'obren com a splines, i DWG i DXF 2000 les desen com a splines. Vegeu [Splines i polilínies](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) tanca i obre polilínies, hi uneix línies i arcs, defineix una amplada única, fa passar una corba pels vèrtexs o una spline al llarg d'ells, i la torna a deixar com estava amb Decurve; a més inverteix, i edita diverses a la vegada. Vegeu [Edita una polilínia](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) escriu un bloc, alguns objectes o tot el dibuix en un DWG o DXF nou que només conté les capes, estils i blocs que fan servir. Vegeu [Escriu un bloc o objectes en un fitxer propi](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN i REGENALL.** {{cmd:REGEN}} (`RE`) torna a dibuixar des del dibuix la pestanya on sou, {{cmd:REGENALL}} (`REA`) totes les pestanyes, panells i dibuixos oberts. Vegeu [REGEN i REGENALL](topic:commands#regen-and-regenall).

### Text i cotes

- **El text conserva el seu format.** El text de paràgraf d'altres programes conserva els colors per paraula, la negreta i la cursiva, el subratllat, les fraccions apilades i les alçades: es dibuixa a la pantalla i als PDF, es conserva quan editeu les paraules, i es desa de nou. Vegeu [Format dins del text de paràgraf d'altres programes](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Un gestor d'estils de cota.** {{cmd:DIMSTYLE}} (`D`) crea, canvia, compara i aplica estils de cota amb nom; canviar un estil canvia cada cota que l'usa. {{cmd:DIMEDIT}} (`DED`) torna a posar el text, escriu text nou, el gira o inclina les línies d'extensió; {{cmd:DIMTEDIT}} mou el text a l'esquerra, a la dreta o al centre. Vegeu [Estils de cota amb nom](topic:dimension-settings#named-dimension-styles).
- **Les vostres pròpies escales.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) afegeix escales com 1:75 a les llistes d'escales de la finestra gràfica i de traçat; es desen al dibuix (DWG i DXF 2000), i un dibuix d'un altre programa porta la seva pròpia llista. Vegeu [Escales](topic:units-papers-scales#scales).
- **Text en altres alfabets.** Els fitxers DXF desats en pàgines de codi ciríl·liques, coreanes, xineses, japoneses o vietnamites ara s'obren amb el seu text, i el text xinès, japonès i coreà s'imprimeix en PDF (el traçat descarrega un tipus de lletra més gran la primera vegada que el necessita). Vegeu [Tipus de lletra](topic:text#font).

### Traçat i impressió

- **Més en les taules d'estils de traçat.** Per a cada color, una taula ara també pot definir un tipus de línia, el final i la unió de la línia, i un estil d'omplert que imprimeix els farciments sòlids com a línies de trama; la taula té la seva pròpia llista de gruixos de línia i una escala de tipus de línia. Vegeu [Taules d'estils de traçat](topic:plot-pdf#plot-style-tables).
- **Imprimir, i fitxers PNG i SVG.** El diàleg Traça té {{ui:Imprimeix…}}, {{ui:Baixa PNG}} (300 dpi) i {{ui:Baixa SVG}}. A CadCraft Studio llista les impressores de l'ordinador, el seu paper i el nombre de còpies. Vegeu [Imprimeix](topic:plot-pdf#print) i [Fitxers d'imatge i SVG](topic:plot-pdf#picture-and-svg-files).

### 3D i núvols de punts

- **Sòlids 3D d'altres programes.** Els sòlids, regions i cossos de l'espai model d'un dibuix es mostren a la pestanya 3D, només de lectura, i desar com a DWG els escriu de nou sense canvis. Les cares sobre superfícies que CadCraft encara no dibuixa es llisten, no s'endevinen. Vegeu [Sòlids d'altres programes](topic:3d-solids#solids-from-other-programs).
- **Registra diversos escaneigs.** {{cmd:REGISTERSCANS}} (`REGSCAN`) col·loca escaneigs fets des de posicions diferents en un sol sistema, per parells de punts o per coordenades de destí escrites, els refina amb ICP, desa el registre com un petit fitxer de projecte, i escriu el núvol registrat com un sol fitxer LAS o E57. Vegeu [Registra diversos escaneigs en un de sol](topic:register-scans).
- **Exportació USD.** {{cmd:USDOUT}}, o {{cmd:EXPORT3D}} › {{ui:USD}}, escriu els sòlids de la pestanya 3D com a `.usda`, `.usdc` o `.usdz`. Vegeu [Exporta el model 3D com a USD](topic:usd).
- **Càlculs a la pestanya 3D.** Quan les eines de la pestanya 3D demanen una distància, podeu escriure un càlcul, com a la línia d'ordres. Vegeu [Aritmètica en un valor escrit](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Fabricació

- **Envieu un dibuix a un làser.** {{cmd:LASER}}, o {{ui:Vista}} › {{ui:Més}} › {{ui:Làser…}}, obre un panell sobre el dibuix: cada capa talla, marca, grava línies, omple formes, grava una imatge o no s'envia, amb la seva potència, velocitat i passades. La vista prèvia segueix els vostres canvis, {{ui:Desa el G-code…}} escriu G-code de mode làser GRBL, i a Chrome o Edge el panell pot emmarcar el treball i enviar-lo per USB. Els ajustos es desen al dibuix (DWG i DXF). Vegeu [Envia un dibuix a un làser](topic:laser-cutting).
- **Símbols d'instal·lacions al complement Elèctric.** Preses de dades, de telèfon i de TV, interruptors amb clau i temporitzats, un termòstat, senyal d'eixida, detectors, polsador d'alarma i sirena, un ventilador, escalfador d'aigua, cuina, punt de càrrega de VE, comptador d'energia i subquadre, i símbols RCD i RCBO. Un circuit pot dur un RCD, el quadre d'instal·lació té una columna per al RCD, i les comprovacions esmenten els circuits de presa sense un RCD de 30 mA o menys. És un recordatori de planificació, no una comprovació de normativa.
- **Un complement P&ID.** P&ID dibuixa diagrames de procés: símbols amb punts de connexió, línies de procés i de senyal, etiquetes, números de línia, llistes de línies, equips, instruments i vàlvules (CSV o un llibre de càlcul), i comprovacions. Ve amb CadCraft i està desactivat fins que l'activeu a {{ui:Configuració}} › {{ui:General}} › {{ui:Complements}}. És una ajuda de dibuix, no una aprovació d'enginyeria, i les seves paraules són només en anglès de moment.

### Inici i la pantalla

- **Un primer dibuix guiat.** {{cmd:TOUR}} (o {{ui:Feu la guia}} a la targeta d'inici) us porta per sis passos en el dibuix real: una línia, un cercle, un moviment, un retall, un esborrat i una cota. S'inicia sol la primera vegada que CadCraft s'obre sense res. Vegeu [Preferiu que us guiï?](topic:getting-started#prefer-to-be-guided)
- **Un full de referència ràpida i un mapa d'ordres.** El [full de referència ràpida](topic:cheat-sheet) té les 40 ordres de cada dia en una pàgina, també com a PDF per imprimir, i el [mapa d'ordres](topic:command-map) llista les ordres amb els seus noms curts, de la A a la Z.
- **La barra d'eines a qualsevol costat.** {{ui:Configuració}} › {{ui:CadCraft}} › {{ui:Posició de la barra d'eines}}: a dalt (com abans), a baix, a l'esquerra o a la dreta, o escriviu {{cmd:TOOLBARDOCK}}. Vegeu [Posició de la barra d'eines](topic:settings#toolbar-position).
- **Files de la barra d'eines.** {{ui:Configuració}} › {{ui:CadCraft}} › {{ui:Files de la barra d'eines}}: ajustar per encaixar, 2 files o 1 fila, per a la barra d'eines de CadCraft i per als estils Dibuix clàssic i Cinta. {{key:Shift+Ctrl+F1}} les recorre, {{key:Ctrl+F1}} recorre el que mostren els botons, i {{cmd:TOOLBARROWS}} i {{cmd:TOOLBAR}} les defineixen. La indicació d'inici té un botó per tancar-la. Gràcies a GJoe2, que ho va enviar com a pull request. Vegeu [Files de la barra d'eines](topic:settings#toolbar-rows).

### A CadCraft Studio

- **Historial.** {{cmd:HISTORY}} (`HIST`), o {{ui:Vista}} › {{ui:Més}} › {{ui:Historial…}}: les còpies que Studio conserva quan obriu i deseu un dibuix, i les versions al núvol del dibuix quan l'heu obert des del núvol. Obriu-ne o restaureu-ne una, o compareu-ne dues, amb el que s'ha afegit, eliminat i canviat mostrat en color. Vegeu [Historial](topic:history).
- **acad.lsp i acaddoc.lsp.** Trieu una carpeta de suport a {{cmd:APPLOAD}}: aquests dos fitxers es carreguen quan CadCraft s'inicia (acaddoc.lsp de nou per a cada pestanya de dibuix nova), i `S::STARTUP` s'executa després. Vegeu [Carrega aplicacions](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **El diàleg Traça en la seva pròpia finestra.** Un botó a la barra de títol el mou a una finestra que podeu posar en un altre monitor. Vegeu [Mou un diàleg](common:arrange-panels#move-a-dialog).

### Per als assistents d'IA

- **Fitxers per nom, en carpetes que trieu.** A CadCraft Studio un assistent pot obrir, desar i traçar fitxers per nom, i lliurar a una ordre el fitxer que demana (INSERT des d'un fitxer, l'exportació de COUNT, SAVEAS, PLOT), però només dins de les carpetes que afegiu a {{ui:Configuració}} › {{ui:CadCraft}} › {{ui:Assistents}} › {{ui:Carpetes que pot fer servir}}. Vegeu [Deixeu-li fer servir fitxers en carpetes que trieu](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Menys crides.** Un assistent pot escriure una línia d'ordres sencera d'una vegada, mantenir una ordre oberta entre les seves crides, comptar objectes per tipus i capa sense llistar-los, i col·locar un bloc amb els seus valors d'atribut en un sol pas.
- **Sense finestra.** La línia d'ordres `cadcraft` escriu traçats SVG, i converteix, traça, comprova o descriu molts fitxers alhora. El paquet MCP encara no està publicat. Vegeu [Treballa amb fitxers sense obrir CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Canvis

- **El touchpad desplaça.** Moveu dos dits sobre un touchpad i la vista 2D els segueix; pinçar i la roda del ratolí fan zoom. Vegeu [Ratolí, touchpad i tàctil](topic:mouse-trackpad-touch).
- **Es conserven els objectes OLE.** Els objectes incrustats d'un DXF es mostren com la seva imatge o com un marc amb etiqueta, i es desen de nou amb DXF 2000. Els d'un DWG es conserven i s'escriuen de nou en desar com a DWG, però encara no es mostren. Abans es perdien en desar. Vegeu [Objectes d'altres programes (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Les unitats d'un dibuix nou** segueixen la unitat que marqueu amb una estrella a {{ui:Configuració}} › {{ui:General}} › {{ui:Unitats}}.

## Corregit

- Les disposicions que s'obrien buides, o perdien una finestra gràfica i mostraven tot el model en el seu lloc, ara s'obren amb les seves finestres gràfiques reals. Una disposició sense enllaç al seu contingut es conserva, i l'informe d'obertura ho diu.
- Els fitxers DXF en pàgines de codi més antigues mostraven ciríl·lic i coreà fet malbé. Ara es llegeixen bé.
- El text de paràgraf d'altres programes perdia el seu format en obrir-se, i es desava pla.

## En totes les aplicacions

- **Unitats.** {{ui:Configuració}} › {{ui:General}} › {{ui:Unitats}} té una llista per a longitud, àrea, volum, angle i pendent, amb les mides exactes que donen les definicions de les unitats (el peu topogràfic dels EUA és una unitat pròpia). Desactiveu les unitats que mai no feu servir i se'n van de les llistes; marqueu-ne una amb una estrella i el treball nou comença amb ella. Un fitxer sempre conserva la seva pròpia unitat. A CadCraft, l'estrella defineix les unitats d'un dibuix nou quan és una unitat que un dibuix pot portar; el quadre {{ui:Unitats}} de CadCraft encara no segueix els interruptors. Un cop un dibuix té unitats, una longitud que escriviu pot portar la marca de qualsevol unitat. Vegeu [Unitats, valors escrits i les llistes d'unitats](common:unit-lists).
- **Un disseny més dens i panells que s'amaguen.** {{ui:Configuració}} › {{ui:General}} › {{ui:Densitat de la disposició}} › {{ui:Compacta}} hi cap més a la pantalla (les pantalles tàctils i els telèfons mantenen els seus botons grans). Cada panell lateral té una barra de títol prima: arrossegueu-la per acoblar o deixar flotant el panell, deixeu-la sobre la barra d'un altre panell per compartir un marc com a pestanyes, fixeu-la perquè es desplaci fins a la vora, o amagueu-la i torneu-la a treure des de la vora. Vegeu [Organitza els panells](common:arrange-panels#make-the-layout-denser).
- **Els diàlegs es mouen.** Arrossegueu un diàleg per la seva barra de títol fora del camí del dibuix; torna on l'heu deixat. Feu doble clic a la barra de títol per centrar-lo un altre cop. Vegeu [Mou un diàleg](common:arrange-panels#move-a-dialog).
- **Receptes per als assistents d'IA.** Deu peticions resoltes per al vostre propi assistent (ordenar un dibuix, traçar un joc, comprovar dibuixos, fer preguntes a un model, sumar un amidament, provar una variant de peça…), cadascuna amb les eines que crida i els permisos que necessita, i cadascuna repetida pels nostres tests. Les aplicacions no contenen cap IA. Vegeu [Receptes per als assistents d'IA](common:assistants-recipes).
- **Idiomes.** **Português (Portugal)** és nou a {{ui:Configuració}} › {{ui:General}} › {{ui:Idioma}}. Aquest, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** tenen ara totes les paraules de les aplicacions, com a esborranys que encara no ha revisat un parlant nadiu. Els textos d'ajuda són en anglès.
- **CadCraft Studio** diu per què ha fallat una comprovació d'actualització (no hi ha fitxer per al vostre sistema encara, sense xarxa, una signatura incorrecta) en lloc de només "Fet", i deixa de tornar a mostrar una targeta de Novetats que heu tancat fins que hi hagi una versió més nova.

## Encara no en aquesta versió

- **La 0.7 no està signada digitalment.** La signatura, i el paquet de la Microsoft Store, passen a la 0.8 perquè encara no ha arribat la validació del certificat. Comproveu el SHA-256 al costat de cada fitxer a getcadcraft.com/download. A Windows, si SmartScreen atura l'instal·lador, trieu {{ui:Més informació}}, després {{ui:Executa igualment}}. A un Mac, la primera vegada, feu clic dret a CadCraft Studio i trieu {{ui:Obre}}. CadCraft Studio encara no és a cap botiga d'aplicacions, i encara no hi ha compilació per a iPad o iPhone.
- Les llistes d'angles i pendents de {{ui:Unitats}} es desen, però cap quadre no les llegeix encara.
- Els objectes OLE d'un DWG es conserven però no es mostren, i els dibuixos metafile dins d'objectes OLE no es dibuixen.
- La lectura de taules d'estils de traçat (fitxers CTB) d'altres programes espera un fitxer de mostra.
- El text asiàtic antic escrit com a codis `\M+` es llegeix, però encara no s'ha comprovat amb un fitxer d'un altre programa.
- Fons PDF: les imatges de dins de la pàgina es mostren a la pantalla però no es tracen, un traçat d'un assistent deixa fora els fons, i encara no s'ha comprovat com ho llegeixen els altres programes el retall i l'escala desats.
- Historial: CadCraft encara no envia els seus desats al núvol, de manera que les versions del núvol són les desades des d'altres dispositius i des de la web. L'historial només és a CadCraft Studio.
- Encara no s'ha comprovat si Studio conserva la carpeta de suport acad.lsp després de reiniciar; si ho demana, trieu la carpeta de nou a APPLOAD.
- El panell Làser encara no s'ha provat en un làser de veritat: proveu cada ajust en un retall. CadCraft Studio no té Web Serial, de manera que a Studio el panell només desa G-code.
- El registre d'escaneigs s'ha provat amb escaneigs inventats, no encara amb un conjunt d'un escàner real.
- El desplaçament amb dos dits s'ha provat amb esdeveniments simulats de touchpad, no encara en un touchpad real.
- {{cmd:PEDIT}} no té l'opció Edita vèrtex (useu les nanses o Propietats). Desfasament, retalla, allarga, empalma, trenca i uneix encara no admeten splines; l'alçada (Z) d'una spline no es conserva.
- El text de paràgraf nou encara no pot tenir codis de format, i els dibuixos SVG mostren el text formatat en un sol color.
- WBLOCK de «Tot el dibuix» només escriu el model, no els fulls. L'estil de cota actual no es desa al fitxer: un dibuix s'obre amb Standard com a actual.
- Els estils de menú de cinta encara no tenen llistes de capa, color ni tipus de línia: useu el panell {{ui:Capes}} i {{ui:Propietats}}.
- Els núvols de punts encara no es desen al dibuix ni es tracen, i els fitxers E57 s'obren fins a 6 milions de punts i 512 MB.
- Els fitxers DWG desats de CadCraft encara no s'han comprovat a l'AutoCAD mateix.

La resta és a [Encara no implementat](topic:not-built-yet).
