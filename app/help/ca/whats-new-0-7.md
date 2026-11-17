---
title: Novetats de la 0.7 (anteriors)
summary: Fons PDF i importació de PDF, dibuixos escanejats amb un traçat automàtic, splines reals amb SPLINE, SPLINEDIT i PEDIT, un gestor d'estils de cota, text que conserva el seu format, WBLOCK i les vostres pròpies escales, sòlids 3D d'altres programes, registre d'escanejos, un tauler Làser, exportació USD, Historial i impressió a CadCraft Studio, un primer dibuix guiat, la barra d'eines a qualsevol costat o en menys files, i més per als assistents d'IA.
keywords: novetats 0.7, versió anterior, notes de la versió, registre de canvis, canvis, 0.7, versió, noves funcionalitats, pdf, pdfattach, pdfimport, subjacent, escaneig, scanattach, scantrace, traç, ràster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, format, wblock, scalelistedit, llista d'escales, acis, sòlids 3d, registerscans, registrar escaneigs, icp, e57, las, làser, grbl, g-code, usd, usdout, historial, versions, comparar, imprimir, impressora, png, svg, taula d'estils de traçat, tipus de línia, fulla de referència, mapa d'ordres, posició de la barra d'eines, files de la barra d'eines, toolbardock, regen, regenall, trackpad, lliscar, pàgina de codis, ciríl·lic, coreà, xinès, japonès, electricitat, rcd, p&id, pid, acad.lsp, acaddoc.lsp, carpeta de suport, assistents, mcp, unitats, portuguès
from: d07ca034
---

Això és el que va canviar a CadCraft 0.7, comparat amb la 0.6. Gran part es va demanar a Discord. La llista està agrupada per àrees, amb les més importants primer.

## Novetats

### PDF i dibuixos escanejats

- **Poseu una pàgina PDF sota el dibuix.** {{cmd:PDFATTACH}} (`PDFATT`) col·loca una pàgina a la seva mida real o a una escala que escriviu. Feu-hi encaixar els seus traços, atenueu-la, feu-la monocroma ({{cmd:PDFADJUST}}), retalleu-la ({{cmd:PDFCLIP}}) i canvieu les capes del propi PDF ({{cmd:PDFLAYERS}}). Es trasllada com a línies, farcits i text, i un DWG o DXF 2000 la conserva com a enllaç al fitxer. En obrir un PDF amb {{ui:Obre}}, es pregunta si cal adjuntar-lo o importar-lo. Vegeu [Fons PDF i importació de PDF](topic:pdf-underlay).
- **Convertiu una pàgina PDF en objectes de dibuix.** {{cmd:PDFIMPORT}} (`PDFIM`) crea línies, polilínies, cercles, arcs, trames sòlides i text en capes amb el nom del PDF, a la mida real, a una escala escrita, o escalat a partir de dos punts i una distància real, en un sol pas per desfer. Vegeu [Importa una pàgina](topic:pdf-underlay#import-a-page).
- **Dibuixos escanejats.** {{cmd:SCANATTACH}} incorpora un PNG, JPEG o TIFF (una pàgina o totes) o una pàgina PDF que sigui una imatge. Després, escaleu-lo a partir de dos punts ({{cmd:SCANSCALE}}), alineeu-lo ({{cmd:SCANALIGN}}), feu-lo quadrat amb les seves pròpies línies llargues ({{cmd:SCANDESKEW}}), passeu-lo a blanc i negre i traieu-ne les taques ({{cmd:SCANCLEAN}}), retalleu-lo i esborreu-ne parts. Cada pas és un sol pas per desfer i el fitxer original es conserva. Vegeu [Dibuixos escanejats i el traçat](topic:scanned-drawings).
- **Tradueix un escaneig en línies i arcs.** {{cmd:SCANTRACE}} dibuixa les línies de l'escaneig com a línies i arcs en una capa nova, SCAN-TRACE, amb una tolerància que definiu, i deixa el text i les trames tal com són. L'informe diu què ha creat i què ha deixat, i no és cap garantia que el resultat sigui correcte: comproveu-lo amb el plànol. {{cmd:RASTERSNAP}} permet que les referències a objectes trobin els extrems, cantonades i encreuaments de l'escaneig. No s'envia res enlloc i no s'usa cap model entrenat. Vegeu [El traçat](topic:scanned-drawings#the-trace).

### Dibuix i edició

- **Splines reals.** {{cmd:SPLINE}} (`SPL`) dibuixa una corba que passa per punts o a partir de punts de control (de grau 1 a 5), amb tangents als extrems; {{cmd:SPLINEDIT}} (`SPE`) mou, afegeix i suprimeix punts d'ajust o de control, defineix pesos, obre, tanca, inverteix, o converteix una spline en polilínia. Les splines dels fitxers DWG i DXF s'obren com a splines, i DWG i DXF 2000 les desen com a splines. Vegeu [Splines i polilínies](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) tanca i obre polilínies, uneix línies i arcs a elles, defineix una amplada única, ajusta una corba que passi pels vèrtexs o una spline al llarg d'ells i la torna enrere amb Decurve, inverteix, i edita diverses alhora. Vegeu [Edita una polilínia](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) escriu un bloc, alguns objectes o tot el dibuix en un DWG o DXF nou que només conté les capes, estils i blocs que fan servir. Vegeu [Escriu un bloc o objectes en un fitxer propi](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN i REGENALL.** {{cmd:REGEN}} (`RE`) torna a dibuixar la pestanya on sou a partir del dibuix, {{cmd:REGENALL}} (`REA`) totes les pestanyes, panells i dibuixos oberts. Vegeu [REGEN i REGENALL](topic:commands#regen-and-regenall).

### Text i cotes

- **El text conserva el seu format.** El text de paràgraf d'altres programes conserva els colors per paraula, la negreta i la cursiva, el subratllat, les fraccions apilades i les alçades: es dibuixen a la pantalla i als PDF, es mantenen quan editeu les paraules, i es tornen a desar. Vegeu [Format dins del text de paràgraf d'altres programes](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Un gestor d'estils de cota.** {{cmd:DIMSTYLE}} (`D`) crea, canvia, compara i aplica estils de cota amb nom; canviar un estil canvia totes les cotes que l'usen. {{cmd:DIMEDIT}} (`DED`) torna a posar el text, escriu text nou, el gira o inclina les línies d'extensió; {{cmd:DIMTEDIT}} mou el text a l'esquerra, a la dreta o al centre. Vegeu [Estils de cota amb nom](topic:dimension-settings#named-dimension-styles).
- **Les vostres pròpies escales.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) afegeix escales com 1:75 a les llistes d'escales de finestra gràfica i de traçat; es desen al dibuix (DWG i DXF 2000), i un dibuix d'un altre programa porta la seva pròpia llista. Vegeu [Escales](topic:units-papers-scales#scales).
- **Text en altres alfabets.** Els fitxers DXF desats amb les pàgines de codis ciríl·liques, coreanes, xineses, japoneses o vietnamites ara s'obren amb el seu text, i el text xinès, japonès i coreà s'imprimeix en PDF (el traçat descarrega un tipus de lletra més gran la primera vegada que el necessita). Vegeu [Tipus de lletra](topic:text#font).

### Traçat i impressió

- **Més a les taules d'estils de traçat.** Per a cada color, una taula ara també pot definir un tipus de línia, l'acabament i la unió de les línies, i un estil d'omplert que imprimeix els farcits sòlids com a línies de trama; la taula té la seva pròpia llista de gruixos de línia i una escala de tipus de línia. Vegeu [Taules d'estils de traçat](topic:plot-pdf#plot-style-tables).
- **Imprimir, i fitxers PNG i SVG.** El diàleg Traçat té {{ui:Imprimeix…}}, {{ui:Baixa PNG}} (300 dpi) i {{ui:Baixa SVG}}. A CadCraft Studio llista les impressores de l'ordinador, el seu paper i el nombre de còpies. Vegeu [Imprimeix](topic:plot-pdf#print) i [Fitxers d'imatge i SVG](topic:plot-pdf#picture-and-svg-files).

### 3D i núvols de punts

- **Sòlids 3D d'altres programes.** Els sòlids, regions i cossos de l'espai model d'un dibuix es mostren a la pestanya 3D, només de lectura, i desar com a DWG els escriu sense canvis. Les cares de superfícies que CadCraft encara no dibuixa es llisten, no s'endevinen. Vegeu [Sòlids d'altres programes](topic:3d-solids#solids-from-other-programs).
- **Registreu diversos escanejos.** {{cmd:REGISTERSCANS}} (`REGSCAN`) col·loca escanejos presos des de diferents posicions en un mateix marc, amb parells de punts o coordenades de destí escrites, els refina amb ICP, desa el registre com a petit fitxer de projecte, i escriu el núvol registrat com un sol fitxer LAS o E57. Vegeu [Registra diversos escanejos en un de sol](topic:register-scans).
- **Exportació USD.** {{cmd:USDOUT}}, o {{cmd:EXPORT3D}} › {{ui:USD}}, escriu els sòlids de la pestanya 3D com a `.usda`, `.usdc` o `.usdz`. Vegeu [Exporta el model 3D com a USD](topic:usd).
- **Càlculs a la pestanya 3D.** Quan les eines de la pestanya 3D demanen una distància, podeu escriure un càlcul, com a la línia d'ordres. Vegeu [Aritmètica en un valor escrit](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Fabricació

- **Envieu un dibuix a un làser.** {{cmd:LASER}}, o {{ui:Vista}} › {{ui:Més}} › {{ui:Làser…}}, obre un tauler sobre el dibuix: cada capa talla, marca, grava línies, omple formes, grava una imatge o no s'envia, amb la seva potència, velocitat i passades. La vista prèvia segueix les vostres edicions, {{ui:Desa el G-code…}} escriu el G-code de mode làser GRBL, i a Chrome o Edge el tauler pot emmarcar el treball i enviar-lo per USB. La configuració es desa al dibuix (DWG i DXF). Vegeu [Envia un dibuix a un làser](topic:laser-cutting).
- **Símbols d'instal·lació de l'edifici al complement d'Electricitat.** Preses de dades, telefonia i TV, interruptors de clau i horaris, un termostat, un senyal de sortida, detectors, punt de trucada i sirena, un ventilador, escalfador d'aigua, cuina, punt de càrrega de vehicles elèctrics, comptador d'energia i subquadre, i símbols RCD i RCBO. Un circuit pot dur un RCD, la taula del quadre té una columna RCD, i les comprovacions assenyalen els circuits d'endolls sense RCD de 30 mA o menys. És un recordatori de planificació, no una comprovació normativa.
- **Un complement de P&ID.** P&ID dibuixa diagrames de procés: símbols amb punts de connexió, línies de procés i de senyal, etiquetes, números de línia, llistes de línies, equips, instruments i vàlvules (CSV o un llibre de càlcul) i comprovacions. Ve amb CadCraft i està desactivat fins que l'activeu a {{ui:Configuració}} › {{ui:General}} › {{ui:Complements}}. És una ajuda al dibuix, no una aprovació d'enginyeria, i de moment els seus textos són només en anglès.

### Inici i la pantalla

- **Un primer dibuix guiat.** {{cmd:TOUR}} (o {{ui:Feu la guia}} a la targeta d'inici) us porta per sis passos al dibuix real: una línia, un cercle, un moviment, un retall, un esborrat i una cota. Comença sol la primera vegada que CadCraft s'obre sense res. Vegeu [Preferiu que us guiïn?](topic:getting-started#prefer-to-be-guided)
- **Un full de referència i un mapa d'ordres.** El [full de referència](topic:cheat-sheet) té les 40 ordres habituals en una sola pàgina, també com a PDF per imprimir, i el [mapa d'ordres](topic:command-map) llista les ordres amb els seus noms curts, de la A a la Z.
- **La barra d'eines a qualsevol costat.** {{ui:Configuració}} › {{ui:CadCraft}} › {{ui:Posició de la barra d'eines}}: a dalt (com abans), a baix, a l'esquerra o a la dreta, o escriviu {{cmd:TOOLBARDOCK}}. Vegeu [Posició de la barra d'eines](topic:settings#toolbar-position).
- **Files de la barra d'eines.** {{ui:Configuració}} › {{ui:CadCraft}} › {{ui:Files de la barra d'eines}}: ajustar a l'espai, 2 files o 1 fila, per a la barra d'eines de CadCraft i els estils Dibuix clàssic i Cinta. {{key:Shift+Ctrl+F1}} recorre-les, {{key:Ctrl+F1}} recorre el que mostren els botons, i {{cmd:TOOLBARROWS}} i {{cmd:TOOLBAR}} les defineixen. La suggerència d'inici té un botó de tancar. Gràcies a GJoe2, que ho va enviar com a pull request. Vegeu [Files de la barra d'eines](topic:settings#toolbar-rows).

### A CadCraft Studio

- **Historial.** {{cmd:HISTORY}} (`HIST`), o {{ui:Vista}} › {{ui:Més}} › {{ui:Historial…}}: les còpies que Studio guarda quan obriu i deseu un dibuix, i les versions al núvol del dibuix quan l'heu obert des del núvol. Obriu-ne o restaureu-ne una, o compareu-ne dues, amb el que s'ha afegit, eliminat i canviat mostrat en color. Vegeu [Historial](topic:history).
- **acad.lsp i acaddoc.lsp.** Trieu una carpeta de suport a {{cmd:APPLOAD}}: aquests dos fitxers es carreguen quan CadCraft s'inicia (acaddoc.lsp de nou per a cada pestanya de dibuix nova), i `S::STARTUP` s'executa després. Vegeu [Carrega aplicacions](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **El diàleg Traçat a la seva pròpia finestra.** Un botó de la barra de títol el mou a una finestra que podeu posar en un altre monitor. Vegeu [Mou un diàleg](common:arrange-panels#move-a-dialog).

### Per als assistents d'IA

- **Fitxers pel nom, en carpetes que trieu.** A CadCraft Studio, un assistent pot obrir, desar i traçar fitxers pel nom, i donar a una ordre el fitxer que demana (INSERT des d'un fitxer, l'exportació de COUNT, SAVEAS, PLOT), però només dins de les carpetes que afegiu a {{ui:Configuració}} › {{ui:CadCraft}} › {{ui:Assistents}} › {{ui:Carpetes que pot fer servir}}. Vegeu [Deixeu que faci servir fitxers de les carpetes que trieu](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Menys crides.** Un assistent pot escriure una línia d'ordres sencera d'una vegada, mantenir una ordre oberta entre les seves crides, comptar objectes per tipus i capa sense llistar-los, i col·locar un bloc amb els valors dels seus atributs en un sol pas.
- **Sense finestra.** La línia d'ordres `cadcraft` escriu traçats SVG i converteix, trasllada, comprova o descriu molts fitxers alhora. El paquet MCP encara no està publicat. Vegeu [Treballa amb fitxers sense obrir CadCraft](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Canvis

- **Un trackpad fa lliscar.** Moveu dos dits sobre un trackpad i la vista 2D els segueix; el pinça i la roda del ratolí fan zoom. Vegeu [Ratolí, trackpad i tàctil](topic:mouse-trackpad-touch).
- **Es conserven els objectes OLE.** Els objectes incrustats d'un DXF es mostren com a imatge o com a marc amb etiqueta, i es tornen a desar amb DXF 2000. Els d'un DWG es conserven i es tornen a escriure quan deseu com a DWG, però encara no es mostren. Abans es perdien en desar. Vegeu [Objectes d'altres programes (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Les unitats d'un dibuix nou** segueixen la unitat que marqueu a {{ui:Configuració}} › {{ui:General}} › {{ui:Unitats}}.

## Corregit

- Els dissenys que s'obrien buits, o que perdien una finestra gràfica i mostraven tot el model al seu lloc, ara s'obren amb les seves finestres gràfiques reals. Un disseny sense enllaç al seu contingut es conserva i l'informe d'obertura ho diu.
- Els fitxers DXF en pàgines de codis antigues mostraven text ciríl·lic i coreà malmès. Ara es llegeixen bé.
- El text de paràgraf d'altres programes perdia el seu format en obrir-se i es desava sense format.

## A totes les aplicacions

- **Unitats.** {{ui:Configuració}} › {{ui:General}} › {{ui:Unitats}} té una llista per a longitud, àrea, volum, angle i pendent, amb les mides exactes que donen les definicions de les unitats (el peu de l'estudi dels EUA és una unitat pròpia). Desactiveu les unitats que no feu servir i surten de les llistes; marqueu-ne una i el treball nou comença amb ella. Un fitxer sempre conserva la seva pròpia unitat. A CadCraft, la marca fixa les unitats d'un dibuix nou quan és una unitat que un dibuix pot portar; el propi quadre {{ui:Unitats}} de CadCraft encara no segueix els interruptors. Un cop un dibuix té unitats, una longitud que escriviu pot portar la marca de qualsevol unitat. Vegeu [Unitats, valors escrits i llistes d'unitats](common:unit-lists).
- **Una disposició més densa i panells que es recullen.** {{ui:Configuració}} › {{ui:General}} › {{ui:Densitat de la disposició}} › {{ui:Compacta}} hi cap més a la pantalla (les pantalles tàctils i els telèfons mantenen els botons grans). Cada panell lateral té una barra de títol prima: arrossegueu-la per acoblar o deixar flotant el panell, deixeu-la a la barra d'un altre panell per compartir un marc com a pestanyes, fixeu-la perquè llisqui cap a la vora, o amagueu-la i torneu-la a treure des de la vora. Vegeu [Organitza els panells](common:arrange-panels#make-the-layout-denser).
- **Els diàlegs es mouen.** Arrossegueu un diàleg per la seva barra de títol perquè no molesti el dibuix; torna on l'heu deixat. Feu doble clic a la barra de títol per centrar-lo de nou. Vegeu [Mou un diàleg](common:arrange-panels#move-a-dialog).
- **Receptes per als assistents d'IA.** Deu peticions resoltes per al vostre propi assistent (ordenar un dibuix, traçar un conjunt, comprovar dibuixos, fer preguntes a un model, totalitzar un amidament, provar una variant de peça…), cadascuna amb les eines que crida i els permisos que necessita, i cadascuna repetida pels nostres tests. Les aplicacions no contenen cap IA. Vegeu [Receptes per a assistents d'IA](common:assistants-recipes).
- **Idiomes.** **Português (Portugal)** és nou a {{ui:Configuració}} › {{ui:General}} › {{ui:Idioma}}. Aquest, **Português (Brasil)**, **Español (México)** i **Bahasa Indonesia** tenen ara totes les paraules de les aplicacions, com a esborranys encara no revisats per una persona nativa. Els temes d'ajuda són en anglès.
- **CadCraft Studio** explica per què una comprovació d'actualització ha fallat (encara no hi ha fitxer per al vostre sistema, no hi ha xarxa, una signatura incorrecta) en lloc de només "Fet", i deixa de tornar a mostrar una targeta de Novetats que heu tancat fins que hi hagi una versió més nova.

## Encara no en aquesta versió

- **La 0.7 no està signada amb codi.** La signatura, i el paquet de la Microsoft Store, es passen a la 0.8 perquè la validació del certificat encara no ha arribat. Comproveu el SHA-256 al costat de cada fitxer a getcadcraft.com/download. A Windows, si SmartScreen atura l'instal·lador, trieu {{ui:Més informació}} i després {{ui:Executa-ho igualment}}. A un Mac, la primera vegada, feu clic dret a CadCraft Studio i trieu {{ui:Obre}}. CadCraft Studio encara no és a cap botiga d'aplicacions, i encara no hi ha versió per a iPad ni iPhone.
- Les llistes d'angles i pendents de {{ui:Unitats}} es desen, però cap quadre encara les llegeix.
- Els objectes OLE d'un DWG es conserven però no es mostren, i les imatges de metafitxer dins dels objectes OLE no es dibuixen.
- La lectura de taules d'estils de traçat (fitxers CTB) d'altres programes espera un fitxer de mostra.
- El text asiàtic antic escrit com a codis `\M+` es llegeix, però encara no s'ha comprovat amb un fitxer d'un altre programa.
- Fons PDF: les imatges dins de la pàgina es mostren a la pantalla però no es tracen, un traçat de l'assistent deixa fora els fons, i encara no s'ha comprovat com les altres aplicacions llegeixen la retallada i l'escala desades.
- Historial: CadCraft encara no envia els seus desaments al núvol, de manera que les versions al núvol són les desades des d'altres dispositius i des de la web. L'Historial és només a CadCraft Studio.
- Encara no s'ha comprovat si Studio manté la carpeta de suport acad.lsp després d'un reinici; si ho demana, trieu la carpeta de nou a APPLOAD.
- El tauler Làser encara no s'ha provat en un làser real: proveu cada configuració en un retall. CadCraft Studio no té Web Serial, de manera que a Studio el tauler només desa G-code.
- La registració d'escanejos s'ha provat amb escanejos inventats, encara no amb el conjunt d'un escàner real.
- El desplaçament amb dos dits s'ha provat amb esdeveniments simulats de trackpad, encara no en un trackpad real.
- {{cmd:PEDIT}} no té l'opció Edita vèrtex (useu les nanses o Propietats). Desfasament, retallar, allargar, empalmar, trencar i unir encara no accepten splines; l'alçada (Z) d'una spline no es conserva.
- El text de paràgraf nou encara no pot tenir codis de format, i els traçats SVG mostren el text formatat en un sol color.
- L'opció Tot el dibuix de WBLOCK escriu només el model, no els fulls. L'estil de cota actual no es desa al fitxer: un dibuix s'obre amb Standard com a actual.
- Els estils de menú de cinta encara no tenen llistes de capes, colors o tipus de línia: useu el tauler {{ui:Capes}} i {{ui:Propietats}}.
- Els núvols de punts encara no es desen al dibuix ni es tracen, i els fitxers E57 s'obren fins a 6 milions de punts i 512 MB.
- Els fitxers DWG desats per CadCraft encara no s'han comprovat a l'AutoCAD mateix.

Tota la resta és a [Encara no implementat](topic:not-built-yet).
