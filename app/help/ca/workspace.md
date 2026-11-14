---
title: La pantalla de CadCraft
summary: Un recorregut per cada barra, panell i pestanya de l'aplicació de dibuix, pel nom que té a la pantalla.
keywords: pantalla, interfície, barra d'eines, cinta, panells, línia d'ordres, barra d'estat, pestanyes, pestanyes de disposició, propietats, panell de capes, guia
from: b5a33388
---

La pantalla té set parts. De dalt a baix: la barra de l'aplicació, la barra d'eines, l'àrea de dibuix amb un panell a cada costat, les pestanyes sota el dibuix, la línia d'ordres i la barra d'estat.

## La barra de l'aplicació

La barra fina de dalt de tot pertany al lloc, no al dibuix. Mostra la marca de CadCraft, el nom de l'aplicació, la versió que executeu, un enllaç a la pàgina de l'aplicació, un botó {{ui:Ajuda}} (o {{key:F1}}), un botó {{ui:Desa per fer-lo servir sense connexió}}, un botó {{ui:Pantalla completa}} i dos botons de tema, {{ui:Paper}} i {{ui:Model}}.

El botó {{ui:Configuració}} (roda dentada) conté la configuració de CadCraft i la que comparteixen totes les aplicacions: vegeu [Configuració de CadCraft](topic:settings).

{{ui:Desa per fer-lo servir sense connexió}} conserva una còpia de CadCraft, incloent-hi el lector DWG, en aquest navegador perquè s'obri sense connexió. L'etiqueta mostra l'estat: "Desant N de M", "Preparat sense connexió", "No s'ha pogut desar" o "Sense connexió no disponible". Vegeu [Treballar fora de línia](common:offline).

:::note
Els botons {{ui:Paper}} i {{ui:Model}} de la barra de l'aplicació només canvien els colors de la pantalla: {{ui:Paper}} és un tema clar, {{ui:Model}} un de fosc. No tenen res a veure amb la pestanya {{ui:Model}} sota el dibuix, que canvia entre el dibuix i els seus fulls.
:::

El botó {{ui:Pantalla completa}}, o {{key:Ctrl+Shift+F}} (la tecla Control a tots els ordinadors, també als Mac), recorre tres modes de pantalla: normal, pantalla completa, i pantalla completa amb les barres amagades. Amb les barres amagades, porteu el punter a la vora superior de la pantalla per fer-les tornar.

## La barra d'eines

Sota la barra de l'aplicació hi ha la barra d'eines. Cada botó executa una ordre, exactament com si l'haguéssiu escrit, de manera que la línia d'ordres fa les mateixes preguntes en qualsevol dels dos casos. Situeu el ratolí sobre un botó per veure el seu àlies d'ordre. Els grups són:

| Grup | Botons |
|---|---|
| Fitxer | {{ui:Nova}}, {{ui:Obre}}, {{ui:Desa}}, {{ui:Anomena i desa}}, {{ui:Traça}} |
| Dibuix | {{ui:Línia}}, {{ui:Polilínia}}, {{ui:Cercle}}, {{ui:Arc}}, {{ui:Rectangle}}, {{ui:Polígon}}, {{ui:El·lipse}}, {{ui:Text}}, {{ui:Paràgraf}}, {{ui:Trama}}, i {{ui:Més}}: {{ui:Punt}}, {{ui:Línia de construcció}} i {{ui:Semirecta}} (vegeu [Línies de construcció i semirectes](topic:construction-lines)) |
| Modifica | {{ui:Mou}}, {{ui:Copia}}, {{ui:Gira}}, {{ui:Escala}}, {{ui:Simetria}}, {{ui:Estira}}, {{ui:Desfasament}}, {{ui:Retalla}}, {{ui:Allarga}}, {{ui:Empalma}}, {{ui:Xamfrà}}, {{ui:Descompon}}, {{ui:Esborra}}, i {{ui:Més}}: {{ui:Matriu}}, {{ui:Uneix}}, {{ui:Iguala propietats}}, {{ui:Trenca}} i {{ui:Allarga}} |
| Anota | {{ui:Lineal}}, {{ui:Alineada}}, {{ui:Angle}}, {{ui:Radi}}, {{ui:Diàmetre}} (cotes), {{ui:Línia de crida}} (multilínia de crida), i {{ui:Més}}: {{ui:Continua la cota}}, {{ui:Cota de base}} i {{ui:Núvol de revisió}} |
| Paramètric | {{ui:Auto}}, {{ui:Restringeix}}, {{ui:Cota}}, {{ui:Paràmetres}}, i {{ui:Més}} amb cada restricció (vegeu [Restringeix un dibuix](topic:constraints)) |
| Blocs | {{ui:Crea}}, {{ui:Insereix}}, {{ui:Biblioteca}}, i {{ui:Més}}: {{ui:Edita el bloc}} i {{ui:Defineix atribut}} |
| Fulls | {{ui:Full nou}}, {{ui:Finestra gràfica}} |
| Edita | {{ui:Desfés}}, {{ui:Refés}}, {{ui:Copia}} (al porta-retalls), {{ui:Enganxa}}, i {{ui:Més}}: un menú amb {{ui:Retalla}}, {{ui:Copia}}, {{ui:Enganxa}}, {{ui:Enganxa al mateix lloc}}, {{ui:Duplica i mou}}, {{ui:Suprimeix}}, {{ui:Selecciona-ho tot}}, {{ui:Neteja la selecció}}, {{ui:Selecció ràpida}}, {{ui:Selecciona objectes semblants}} i {{ui:Cerca i reemplaça}}, cadascun amb la seva tecla |
| Vista | {{ui:Extensió}}, {{ui:Finestra (W)}}, {{ui:Anterior}}, i {{ui:Més}}: {{ui:Mesura la distància}}, {{ui:Àrea}}, {{ui:Mesura (radi, angle …)}}, i la pantalla dividida: {{ui:Divideix un al costat de l'altre}}, {{ui:Divideix apilat}}, {{ui:Quatre panells}}, {{ui:Un panell}} (vegeu [Divideix la pantalla](topic:split-screen)), i {{ui:Gira la vista 90° a l'esquerra}}, {{ui:Gira la vista 90° a la dreta}}, {{ui:Torna al SCG}} (vegeu [Gira la vista](topic:ucs-and-turned-view)) |

{{ui:Copia}} del grup {{ui:Modifica}} és l'ordre {{cmd:COPY}} (punt base, i després on va cada còpia); {{ui:Copia}} del grup {{ui:Edita}} posa objectes al porta-retalls per a {{ui:Enganxa}}. Vegeu [Copia, enganxa i duplica](topic:copy-paste). El botó de l'ordre que s'executa es manté ressaltat fins que l'ordre acaba. Les indicacions emergents enumeren les dreceres de Windows ("Ctrl+O"); en un Mac, {{key:Mod+O}} també funciona.

En una finestra baixa (un portàtil amb la pantalla escalada al 125 % o més, per exemple) la barra d'eines mai no ocupa el lloc del dibuix: quan el dibuix tindria massa poca alçada, els botons deixen les paraules sota les icones i els noms dels grups (situeu el ratolí sobre un botó per veure el seu nom), i si encara no n'hi ha prou, la barra d'eines passa a ser una sola fila que es desplaça de costat. Una finestra més alta torna a mostrar les paraules.

## El panell esquerre

El panell de l'esquerra té tres seccions.

- **{{ui:Capes}}.** Totes les capes del dibuix, amb un punt ple a la capa actual. Feu clic a un nom per fer-lo actual. Cada fila té una mostra de color (feu-hi clic per triar un color) i quatre botons: activada o desactivada (ull), congelada (flocs de neu), bloquejada (cadenat) i traçat (impressora). {{ui:Capa nova}} obre un quadre per afegir-ne una. Vegeu [Organitza un dibuix amb capes](topic:layers).
- **{{ui:Blocs}}.** Els blocs definits al dibuix, quantes vegades s'utilitza cadascun, i un botó {{ui:Insereix}} per a cadascun. Vegeu [Crea i insereix blocs](topic:blocks).
- **{{ui:Dibuix}}.** Dades del fitxer obert: nom (amb "(canviat)" quan hi ha canvis sense desar), format, mida, unitats, nombre d'objectes, capes, blocs i fulls. Després d'obrir un fitxer, una caixa "Quant a aquest fitxer" enumera tot el que CadCraft no ha pogut mostrar o ha hagut de convertir.

## L'àrea de dibuix

El centre de la pantalla és el dibuix. El punter és una creueta. Quan CadCraft vol un punt, un petit marcador i una etiqueta ("Punt final", "Punt mitjà") mostren on hi anirà una referència a objectes. Quan vol objectes, la creueta té una caixa de selecció i els objectes que hi ha sota s'il·luminen.

Quan el dibuix és buit, una targeta "Comença a dibuixar" mostra unes quantes primeres ordres. Desapareix en el moment que executeu una ordre o obriu un fitxer. Podeu deixar un fitxer DWG o DXF en qualsevol lloc d'aquesta àrea per obrir-lo.

## Les pestanyes sota el dibuix

Sota el dibuix hi ha les pestanyes: {{ui:Model}} primer, després {{ui:3D}}, després una pestanya per cada full (disposició), i un botó {{ui:+}}.

- {{ui:Model}} és el dibuix mateix, a mida completa, en unitats de dibuix.
- {{ui:3D}} mostra el dibuix estès a terra i els sòlids fets a partir d'ell. Mentre es mostra, la barra d'eines té un grup {{ui:3D}} en lloc dels grups de dibuix. Vegeu [Model en 3D](topic:3d-solids).
- Cada pestanya de full és un full de paper amb un caixetí i finestres gràfiques cap al model. El que dibuixeu allà és en unitats de paper (mil·límetres o polzades). Feu doble clic dins d'una finestra gràfica per treballar sobre el model a través d'ella (vegeu [Treballa sobre el model a través d'una finestra gràfica](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Un nom de full llarg es talla a la pestanya; situeu el ratolí sobre la pestanya per veure'n el nom complet. Amb molts fulls, {{ui:Configuració}} › {{ui:CadCraft}} › {{ui:Pestanyes de full}} › {{ui:Només els números de full}} mostra només el número de cada full (A-101) a la pestanya.
- {{ui:+}} crea un full nou amb una vora, un caixetí i una finestra gràfica. És el mateix que l'ordre {{cmd:LAYOUT}}.
- Feu doble clic a una pestanya de full per canviar-li el nom. Amb una pestanya enfocada, {{key:Left}} i {{key:Right}} es mouen entre pestanyes.

Cada pestanya conserva el seu propi zoom i desplaçament. Vegeu [Prepara un full](topic:sheets-and-viewports).

## El panell dret: Propietats

El panell de la dreta canvia segons el que estigui seleccionat.

- **Res seleccionat, a la pestanya {{ui:Model}}:** el títol diu {{ui:Configuració actual}}. Aquí definiu la {{ui:Capa}}, el {{ui:Color}} i l'{{ui:Alçada del text}} per als objectes nous, les {{ui:Unitats}} del dibuix, i les mides per a cotes noves ({{ui:Alçada del text}}, {{ui:Mida de la fletxa}}, {{ui:Decimals}}, {{ui:Escala global}}).
- **Res seleccionat, en un full:** el títol diu "Full:" i el nom del full. Podeu canviar-li el nom, canviar-ne el {{ui:Paper}} i l'{{ui:Orientació}}, {{ui:Traça aquest full}} o {{ui:Suprimeix aquest full}}. Els ajustos dels objectes nous segueixen a sota.
- **Un objecte seleccionat:** el seu tipus com a títol (Línia, Cercle, Text, Cota, Finestra gràfica…), i després la seva capa, color i geometria. Escriviu un valor nou i premeu {{key:Enter}} per canviar-lo.
- **Diversos objectes seleccionats:** quants, i la seva {{ui:Capa}} i {{ui:Color}} comuns. Canviar-ne una canvia totes. "Varies" vol dir que difereixen.

Vegeu [Edita amb nanses i Propietats](topic:grips-and-properties).

Sota, el panell {{ui:Paràmetres}} s'obre quan trieu {{ui:Paràmetres}} o escriviu {{cmd:PARAMETERS}}: tots els paràmetres i les restriccions dimensionals en una sola taula. Vegeu [Usa paràmetres i equacions](topic:parameters).

## La línia d'ordres

A baix hi ha la línia d'ordres: l'historial del que heu fet i, sota, la petició.

- L'etiqueta de la petició diu `Ordre:` quan no n'hi ha cap en marxa. Mentre una ordre s'executa, mostra la pregunta, les opcions entre claudàtors i el valor per defecte entre angles, per exemple `Especifiqueu el radi del cercle [Diàmetre] <500>:`.
- Quan escriviu el nom d'una ordre, una pista a la dreta suggereix ordres que coincideixen. Premeu {{key:Tab}} per acceptar la primera. "Aquesta ordre no existeix" vol dir que no n'hi ha cap que coincideixi.
- {{key:Up}} i {{key:Down}} recuperen les línies que heu escrit abans.
- L'historial guarda les últimes 400 línies. Els missatges de les ordres, les mesures de {{cmd:DIST}} i {{cmd:LIST}}, i els informes de desar i traçar apareixen aquí.

## La barra d'estat

La fila més baixa és la barra d'estat.

- **Coordenades** a l'esquerra: la X i la Y de la creueta. Mentre una ordre té un punt base, també mostra la distància i l'angle des d'ell, per exemple `Δ 1200 < 90°`.
- **Missatges** al mig, com "Orto activat" o "Capa actual: Murs". Desapareixen en uns segons.
- **{{ui:Quadrícula}}**, **{{ui:Orto}}**, **{{ui:Polar}}**, **{{ui:Pas}}**, **{{ui:Segueix}}**, **{{ui:Dyn}}** i **{{ui:LWT}}** a la dreta. Cadascun és un interruptor; un botó premut està activat. {{ui:LWT}} mostra els gruixos de línia a la pantalla (vegeu [Gruixos de línia i tipus de línia](topic:units-papers-scales#line-weights-and-linetypes)). La petita fletxa al costat de {{ui:Pas}} obre {{ui:Referències a objectes}}, on marqueu quines referències estan actives. Vegeu [Ajusta a punts d'objectes](topic:object-snaps).

## El diàleg Traça a PDF

{{ui:Traça}} (o {{key:Mod+P}}) obre el diàleg {{ui:Traça a PDF}}, amb els ajustos a l'esquerra i una vista prèvia en directe a la dreta. Vegeu [Traça a PDF](topic:plot-pdf).

## L'ajuda

{{key:F1}} o el botó {{ui:Ajuda}} obre aquesta ajuda com un panell lateral; el dibuix continua utilitzable al costat. Funciona sense connexió. {{key:F1}} de nou, o {{key:Esc}} dins del panell, la tanquen. Vegeu [Com fer servir aquesta ajuda](common:help).
