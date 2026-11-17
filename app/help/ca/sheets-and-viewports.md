---
title: Configura un full amb caixetí i finestres gràfiques
summary: Feu un full (presentació) amb un marc i un caixetí, definiu l'escala de la finestra gràfica, afegiu una segona finestra per a un detall, i ompliu el caixetí.
keywords: presentació, full, espai de paper, finestra gràfica, mview, vpview, caixetí, escala, mida de paper, marc, vports, escala de traçat, mspace, pspace, espai model, entra a la finestra, fes doble clic a la finestra
from: 45a45de8
---

## Què crearàs

Un full A3 amb un caixetí, tota la planta en una finestra gràfica a 1:100, i una segona finestra gràfica que mostra una cantonada a 1:20.

## Model i fulls

Dibuixeu l'edifici a la pestanya {{ui:Model}}, a mida completa: un mur de 6 m fa 6000 unitats de llarg en mil·límetres. Un **full** (una presentació) és un tros de paper, mesurat en mil·límetres o polzades. Una **finestra gràfica** és una finestra tallada al full que mostra el model a una escala.

## Abans de començar

1. Obriu o dibuixeu una planta a la pestanya {{ui:Model}}.
2. Premeu {{key:Esc}} perquè no hi hagi res seleccionat.
3. A {{ui:Configuració actual}}, definiu {{ui:Unitats}} com la unitat en què heu dibuixat, per exemple {{ui:Mil·límetres}}.

Les unitats importen: una escala de finestra com 1:100 vol dir que un mil·límetre al paper mostra 100 mil·límetres reals, de manera que CadCraft ha de saber què és una unitat de dibuix. Un dibuix deixat com a {{ui:Sense unitats}} es pren com a la unitat del paper (mil·límetres en paper ISO, polzades en paper US).

## Fes el full

1. Feu clic al botó {{ui:+}} a la dreta de les pestanyes sota del dibuix, o escriviu `LAYOUT` i premeu {{key:Enter}}, o feu clic a {{ui:Full nou}}.

S'obre una pestanya nova, `Layout1`. Hauríeu de veure un full sobre un escriptori més fosc: un marc, un caixetí a la cantonada inferior dreta i una finestra gràfica sobre ell que mostra tot el model a l'escala estàndard més gran que hi cap. L'historial anomena el paper: ISO A3 per als dibuixos mètrics i sense unitats, Tabloid (ANSI B) per als dibuixos en polzades o peus.

2. Feu clic a {{ui:Extensió}} per ajustar el full a la pantalla.

## Trieu el paper

1. Premeu {{key:Esc}} perquè no hi hagi res seleccionat. El títol del panell de la dreta diu "Full: Layout1".
2. A {{ui:Nom}}, escriviu `A-101 Plan` i premeu {{key:Enter}}. La pestanya es reanomena.
3. A {{ui:Paper}}, trieu una mida.
4. A {{ui:Orientació}}, trieu {{ui:Apaïsat}} o {{ui:Vertical}}.

:::warning
Canviar el paper no mou ni redimensiona el que ja hi ha al full. Després de canviar-lo, comproveu que el marc, el caixetí i la finestra gràfica encara hi caben, i mogueu-los o redimensioneu-los amb nanses. Canviar entre paper en mil·límetres i en polzades manté els números, de manera que tot canvia de mida: la barra d'estat us avisa.
:::

## Defineix l'escala de la finestra gràfica

1. Feu clic a la vora de la finestra gràfica (el seu contorn). El títol del panell diu "Finestra gràfica".
2. A {{ui:Escala (S)}}, trieu `1:100`.

El model dins la finestra gràfica es redibuixa a 1:100, centrat on era. La llista ofereix escales mètriques de 10:1 a 1:10000; els dibuixos en polzades o peus també tenen escales arquitectòniques (1/4" = 1'-0" i similars) i escales d'enginyeria (1" = 20' i similars). {{ui:Ajusta tot el model}} defineix una escala exacta i no estàndard que hi cap tot.

3. Si la planta ja no està centrada, canvieu {{ui:X}} i {{ui:Y}} sota {{ui:Centre de la vista (model)}} al panell de la dreta: són el punt del model que es mostra al mig de la finestra gràfica.

## Mostra una part del model en una finestra gràfica

1. Amb la finestra gràfica seleccionada, feu clic a {{ui:Trieu una finestra sobre el model…}} al panell de la dreta (o escriviu `VPVIEW` i premeu {{key:Enter}}).
2. CadCraft canvia a la pestanya {{ui:Model}}. Feu clic en una cantonada de l'àrea a mostrar.
3. Feu clic a la cantonada oposada.

Torneu al full, i la finestra gràfica mostra aquella àrea a l'escala estàndard més gran que hi cap; l'historial diu quina. {{ui:Mostra tot el model}} torna a la planta sencera a una escala estàndard.

## Afegeix una segona finestra gràfica per a un detall

1. Feu espai al full: seleccioneu la primera finestra gràfica i arrossegueu una nansa de cantonada per fer-la més petita.
2. Escriviu `MV` i premeu {{key:Enter}}, o feu clic a {{ui:Finestra gràfica}} al grup Fulls.
3. Feu clic en una cantonada de la nova finestra gràfica al full.
4. Feu clic a la cantonada oposada.

La nova finestra gràfica mostra tot el model. L'historial diu la seva escala.

5. Feu clic a la vora de la nova finestra gràfica.
6. Feu clic a {{ui:Trieu una finestra sobre el model…}} i trieu una àrea petita al voltant d'una cantonada de la planta.
7. A {{ui:Escala (S)}}, trieu `1:20`.

Els marcs de les finestres gràfiques són a la capa `Viewports`, que està configurada per no traçar, de manera que els marcs es veuen a la pantalla però no al PDF.

## Ompliu el caixetí

El caixetí està fet de línies i text normals a la capa `Title block`. Comença amb el nom del dibuix, l'escala de la primera finestra gràfica, la data d'avui i el número de full.

1. Feu doble clic al text gran del títol. S'obre una caixa d'edició a sobre.
2. Escriviu el títol del full.
3. Feu clic a {{ui:D'acord}}, o premeu {{key:Mod+Enter}}.

Feu el mateix amb els altres camps. Utilitzeu {{cmd:TEXT}} per escriure a la cel·la buida "DRAWN BY". El text SCALE no s'actualitza sol quan canvieu l'escala d'una finestra gràfica: editeu-lo a mà.

## Dibuixa al full

Qualsevol cosa que dibuixeu en una pestanya de full és al paper, en unitats de paper: un text d'alçada 3.5 és de 3.5 mm d'alçada en un full ISO. Les notes, les fletxes del nord i els marcs del full pertanyen aquí.

Per canviar la planta en si, aneu a la pestanya {{ui:Model}}, o treballeu a través d'una finestra gràfica (següent secció); totes les finestres gràfiques mostren el canvi.

## Treballa sobre el model a través d'una finestra gràfica

1. Feu doble clic dins d'una finestra gràfica, lluny del seu marc. O escriviu `MS` i premeu {{key:Enter}}: amb una sola finestra gràfica al full, entra directament; amb diverses, feu clic a la que vulgueu.

El marc es dibuixa més gruixut, l'historial diu que sou dins, i la pestanya del full continua seleccionada. Tot el que dibuixeu o canvieu ara és al model, en unitats del model, igual que a la pestanya {{ui:Model}}: una línia dibuixada dins d'una finestra a 1:100 és en mil·límetres reals. Les capes congelades en aquesta finestra no es poden triar aquí.

2. Gireu la roda o arrossegueu amb el botó del mig per fer zoom i desplaçar el que mostra la finestra. El full es queda on és.
3. Feu doble clic en qualsevol punt fora del marc, o escriviu `PS` i premeu {{key:Enter}}.

Torneu al full. La finestra gràfica manté la vista amb què la vau deixar; {{key:Mod+Z}} torna la vista anterior en un pas. Fer clic a qualsevol pestanya sota del dibuix també surt de la finestra gràfica.

:::note
Una finestra gràfica amb la {{ui:Visualització bloquejada}} (a Propietats) manté la seva vista: a dins, el desplaçament i el zoom mouen tot el full. Una finestra que està desactivada no es pot entrar.
:::

## Etiqueta una vista amb el seu nom

Un títol de vista sota una finestra gràfica pot mostrar el nom de la vista de la finestra i seguir-lo:

1. Doneu un nom a la vista: seleccioneu el marc de la finestra gràfica i ompliu {{ui:Nom de la vista}} a Propietats — o deseu la vista a la pestanya {{ui:Model}} amb {{cmd:NAMEDVIEW}} i, amb la finestra seleccionada, escriviu `VPVIEW`, `V` i el nom de la vista: la finestra mostra aquella vista i pren el seu nom.
2. Escriviu `VIEWLABEL` (`VL`) i premeu {{key:Enter}}, i després feu clic on ha d'anar l'etiqueta ({{key:Enter}} la posa sota la cantonada inferior esquerra de la finestra).

Quan canvia el nom de la vista, l'etiqueta canvia amb ell, en el mateix pas de desfer.

## Amaga una capa en una finestra gràfica

Per amagar una capa en una finestra gràfica però no en les altres (mobiliari en un detall, per exemple):

1. Seleccioneu el marc de la finestra gràfica, o treballeu a dins (feu doble clic).

El panell {{ui:Capes}} té un botó més a cada fila, i una línia sobre la llista ho indica.

2. Feu clic a aquest botó a la fila de la capa.

La capa desapareix només d'aquella finestra gràfica. Torneu a fer clic per descongelar-la; {{key:Mod+Z}} desfà qualsevol de les dues accions. Per a diverses capes o finestres alhora, escriviu `VPLAYER`: Congela (F) o Descongela (T), els noms de les capes (`A-*` pren totes les capes que comencen per A-), després Actual (C), Totes (A) o Selecciona (S). `VPLAYER` `V` (Vpvisdflt) tria les capes amb què les noves finestres gràfiques comencen congelades.

## Més fulls

Cada {{ui:+}} afegeix un altre full (`Layout2`, `Layout3` …) amb el següent número de full. Per esborrar el full obert, premeu {{key:Esc}} i feu clic a {{ui:Suprimeix aquest full}} al panell de la dreta. S'esborra sense preguntar; {{key:Mod+Z}} el torna.

Traceu un full amb {{ui:Traça aquest full}} o {{key:Mod+P}}; vegeu [Traça a PDF](topic:plot-pdf).

## Errors habituals

- **La finestra gràfica no mostra res.** El model és buit, o la vista apunta a un altre lloc. Seleccioneu el marc i feu clic a {{ui:Mostra tot el model}}.
- **La llista d'escales només mostra raons i cap escala de peus i polzades.** Definiu {{ui:Unitats}} a {{ui:Polzades}} o {{ui:Peus}} a la pestanya {{ui:Model}}.
- **1:100 es veu deu vegades més gran o més petit.** Les unitats del dibuix són incorrectes. Definiu {{ui:Unitats}} a allò que és realment una unitat.
- **Fer clic a la planta dins la finestra gràfica no selecciona res.** En un full, seleccioneu els objectes del propi full. Feu doble clic dins la finestra gràfica primer per treballar sobre la planta a través seu.
- **Els clics fora de la finestra gràfica no fan res.** Sou dins d'una finestra gràfica: feu doble clic fora d'ella, o escriviu `PS`, per tornar a treballar sobre el full.
- **"Les finestres gràfiques van en un full. Obriu una pestanya de full (o creeu-ne una amb LAYOUT) primer."** {{cmd:MVIEW}} només funciona en una pestanya de full.
