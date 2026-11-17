---
title: Model en 3D
summary: Veure el dibuix en 3D a la pestanya 3D i crear-hi sòlids senzills: extrudir (amb conicitat o al llarg d'un camí), revolució, empènyer i estirar cares, caixes, cilindres i falques, unir-los, restar-los i intersecar-los, després moure'ls, copiar-los, girar-los i esborrar-los, i col·locar-hi vistes 2D planes en un full.
keywords: 3d, tres dimensions, sòlid, sòlids, 3dsolid, regió, cos, acis, sat, sab, sòlids d'altres programes, obrir dibuix 3D, extrudeix, ext, revolució, rev, escombrat, conicitat, camí, presspull, prem estira, empeny estira, caixa, cilindre, cyl, falca, 3dorbit, òrbita, vista, vscurrent, estil visual, ombrejat, línia oculta, filferro, raigs X, xray, iso, perspectiva, paral·lela, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, cub de vista, unió, uni, resta, su, intersecció, in, booleà, combina, unir sòlids, viewbase, flatshot, vista plana, vista 2D, vista de dibuix, vista de davant, vista superior, vista lateral, línies ocultes
from: 13060e71
---

## Què crearàs

Una base d'habitació de 1000 × 600 extrudida fins a un bloc de 400 d'alçada, una cara estirada cap amunt i un cilindre al costat; després, el model es desa amb el dibuix i s'exporta per a un visualitzador 3D o una impressora.

La pestanya {{ui:3D}} és al costat de {{ui:Model}}, sota el dibuix. Mostra el dibuix de l'espai model estès a terra amb els colors de les seves capes (les capes desactivades o congelades queden ocultes) i els sòlids que creeu. La primera vegada que s'obre, es carrega la vista 3D; després canvia a l'instant.

## Extrudeix una forma

1. A la pestanya {{ui:Model}}, escriviu `REC` i premeu {{key:Enter}}. Escriviu `0,0`, {{key:Enter}}, `@1000,600`, {{key:Enter}}.
2. Feu clic a la pestanya {{ui:3D}}. La barra d'eines mostra el grup {{ui:3D}} en lloc dels grups del dibuix.
3. Feu clic a {{ui:Extrudeix}} (o escriviu {{cmd:EXTRUDE}}, `EXT`). Feu clic dins del rectangle i premeu {{key:Enter}}.
4. Escriviu `400` i premeu {{key:Enter}}. L'historial diu "Extrudit 1 sòlid, 400 d'alçada" amb el seu volum.

Les polilínies tancades (inclosos els arcs), els rectangles, els polígons, els cercles i les el·lipses s'extrudeixen; les línies i les polilínies obertes no, i l'historial n'indica el motiu. També podeu seleccionar primer les formes a la pestanya {{ui:Model}} i escriure-hi `EXTRUDE`. En lloc d'escriure l'alçada, podeu fer-hi clic: el contorn segueix el cursor amunt i avall. Una alçada negativa va cap avall. Escriviu `D` a la indicació d'alçada per suprimir les formes 2D després d'extrudir-les (`D` de nou les conserva).

A la indicació d'alçada, `T` (Angle de conicitat) demana un angle en graus: els costats s'inclinen per aquest angle, de manera que la part superior és més petita (un angle negatiu la fa més gran); es rebutja un angle massa pronunciat per a la forma. `P` (Camí) escombra les formes al llarg d'un camí en lloc d'això (vegeu a continuació).

## Revolució i escombrat

- {{cmd:REVOLVE}} (`REV`, o {{ui:Més}} › {{ui:Revolució al voltant d'un eix}}): seleccioneu les formes tancades, premeu {{key:Enter}}, després feu clic als dos extrems de l'eix (o escriviu `X` o `Y` per a l'eix del dibuix que passa per 0,0), i després escriviu un angle o premeu {{key:Enter}} per a una volta completa. La forma gira al voltant de l'eix i s'alça des de terra: dibuixeu el contorn de mig gerro al costat d'una línia i feu-lo girar al voltant de la línia. La forma pot tocar l'eix però no el pot creuar. Una volta completa té 48 passos.
- {{cmd:SWEEP}} (o {{ui:Més}} › {{ui:Escombrat per un camí}}, o `P` a la indicació d'alçada de EXTRUDE): seleccioneu les formes tancades (el perfil), premeu {{key:Enter}}, després feu clic al camí: una línia, polilínia, arc, cercle o el·lipse. El perfil s'alça travessant el camí, amb el seu centre sobre aquest, i avança al llarg d'ell; les cantonades es tallen a inglet, i un camí tancat fa un anell. Un rectangle petit escombrat al llarg del contorn d'una habitació fa un sòcol; un cercle al llarg d'una polilínia fa una canonada.

## Empeny i estira una cara

1. Feu clic a {{ui:Prem/Estira}} (o escriviu {{cmd:PRESSPULL}}).
2. Feu clic a la cara superior del bloc.
3. Escriviu `100` i premeu {{key:Enter}}, o mogueu el cursor i feu clic. El bloc passa a tenir 500 d'alçada.

## Caixes, cilindres i falques

- {{cmd:BOX}}: feu clic o escriviu dues cantonades, i després una alçada.
- {{cmd:CYLINDER}} (`CYL`): el centre, el radi i després una alçada. Els cilindres i els cercles extrudits tenen 48 costats, ombrejats suaument.
- {{cmd:WEDGE}} (`WE`): dues cantonades i una alçada. Té l'alçada completa a la primera cantonada i baixa fins a zero a l'altra.

A la pestanya 3D, un clic cau a la cara o aresta sota el cursor; si no n'hi ha, cau a terra, de manera que una caixa pot recolzar-se sobre un altre sòlid.

## Mou, copia, gira i esborra sòlids

A la pestanya 3D, un clic selecciona un sòlid; arrossegueu d'esquerra a dreta per a una finestra, i de dreta a esquerra per a una intersecció. Després:

- {{cmd:MOVE}}: feu clic a un punt base i on ha d'anar, o escriviu `<100,0,0>` (o `@100,0`) per a una distància al llarg de X, Y i Z.
- {{cmd:COPY}}: igual, però conservant l'original.
- {{cmd:ROTATE}}: escriviu un angle (gira al voltant del centre de la selecció, al voltant de Z), o feu clic al centre, a un punt inicial i a l'angle.
- {{cmd:ERASE}} o {{key:Delete}}.

## Uneix, resta i intersecta sòlids

Obriu {{ui:Més}} a la barra d'eines 3D, o escriviu l'ordre:

- {{cmd:UNION}} (`UNI`): seleccioneu els sòlids, premeu {{key:Enter}}: esdevenen un sol sòlid.
- {{cmd:SUBTRACT}} (`SU`): seleccioneu els sòlids que cal conservar i premeu {{key:Enter}}, després els que cal treure i premeu {{key:Enter}}. Un forat a través d'un bloc: dibuixeu un cilindre que el travessi i després resteu el cilindre.
- {{cmd:INTERSECT}} (`IN`): seleccioneu els sòlids, premeu {{key:Enter}}: només queda el que tots tenen en comú.

L'historial indica el volum del resultat. Cada operació és un sol pas per desfer. La primera que executeu carrega el motor booleà 3D (uns 0.5 MB; inclòs a {{ui:Desa per fer-lo servir sense connexió}}). Només es poden combinar sòlids tancats: un sòlid amb arestes obertes (de cares 3D soltes d'un altre programa) es rebutja i se n'indica el motiu. El resultat és un sol sòlid; les cares corbes segueixen formades per facetes planes, com ho era el cilindre.

Feu doble clic a un sòlid per editar-ne les cares i arestes per separat; {{key:Esc}} ho tanca de nou. Cada canvi 3D és un pas per desfer a l'historial del dibuix: {{key:Mod+Z}} desfà l'última acció feta en qualsevol de les dues pestanyes.

## Vistes planes en un full

1. Obriu una pestanya de full (o quedeu-vos a {{ui:Model}}), i després escriviu {{cmd:VIEWBASE}} (o `FLATSHOT`).
2. Trieu la vista: {{key:Enter}} per a la de davant, o `T` (superior), `R` (dreta), `L` (esquerra), `BA` (posterior), `BO` (inferior), `I` (isomètrica).
3. {{key:Enter}} mostra les línies ocultes, discontínues; `H` les omet.
4. {{key:Enter}} agafa l'escala que suggereix CadCraft: en un full, l'escala estàndard més gran (per exemple 1:20) amb la qual la vista ocupa menys de la meitat del paper. O escriviu-ne una: `1:50`, `2:1`.
5. Feu clic, o escriviu, on ha d'anar el centre de la vista.

La vista és una referència de bloc, `VIEW-FRONT-1` i així successivament: les arestes visibles van a la capa VIEW-VISIBLE (0.5 mm), les ocultes a VIEW-HIDDEN (discontínua, 0.25 mm). Mogueu-la, acoteu-la i traceu-la com qualsevol altre dibuix. És una imatge dels sòlids en el moment en què la vau fer: després de canviar-los, esborreu la vista i torneu a executar {{cmd:VIEWBASE}}. Per a més vistes, executeu-la una vegada per cada vista.

## Mira al voltant

Arrossegueu amb la roda per orbitar, {{key:Shift}} + arrossegar la roda o el botó dret per desplaçar, i gireu la roda per fer zoom al cursor. En un trackpad, dos dits orbiten i un pinç fa zoom. Un clic dret sense arrossegar és {{key:Enter}}, com a les altres pestanyes. `3DORBIT` permet que el botó esquerre orbiti fins que premeu {{key:Enter}} o {{key:Esc}}.

- {{ui:Vistes}} (o {{cmd:VIEW}}): Iso, Superior, Inferior, Davant, Darrere, Esquerra, Dreta, Perspectiva o Paral·lela, i Zoom a tot.
- {{ui:Estil}} (o {{cmd:VSCURRENT}}, `VS`): Ombrejat, Ombrejat amb arestes, Línia oculta, Filferro o Raigs X.

Els punts on feu clic s'ajusten als sòlids (cantonades, arestes, cares) i al dibuix 2D a terra: els extrems i els punts mitjans de les seves línies i arcs, i els punts al llarg d'aquests. Les línies 2D no se seleccionen mai a la pestanya 3D. Quan una ordre demana objectes 2D (EXTRUDE, REVOLVE, SWEEP), un clic en tria un, un arrossegament d'esquerra a dreta pren el que és totalment dins de la finestra, i un arrossegament de dreta a esquerra pren el que hi creua, igual que a la pestanya {{ui:Model}}.

Un cub de vista es troba a la part superior dreta de la pestanya 3D: feu clic a una cara, aresta o cantonada per mirar des d'allà, arrossegueu-lo per girar la vista, i el botó d'inici torna a la vista isomètrica. Això és {{ui:Automàtica}}, la primera opció de {{ui:Indicador de cantonada}} a [Configuració de CadCraft](topic:settings). Si s'estableix a {{ui:Cub de vista}}, la pestanya {{ui:Model}} també mostra un cub, que mira des de dalt; fer clic en qualsevol altra cara obre la pestanya 3D mirant des d'allà. Si s'estableix a {{ui:Icona d'eixos}}, les dues pestanyes mostren en canvi el marcador d'eixos.

## Sòlids d'altres programes

Un dibuix d'un altre programa pot contenir sòlids 3D, regions i cossos (3DSOLID, REGION, BODY: l'altre programa conserva la seva forma com a dades ACIS). CadCraft mostra els de l'espai model a la pestanya 3D, amb el color de la seva capa i les seves arestes pròpies, la primera vegada que obriu la pestanya; després la línia d'ordres indica quants se n'han dibuixat.

- Es mostren tal com són: no els podeu seleccionar, moure ni canviar. Les capes desactivades o congelades els amaguen.
- Desar com a DWG reescriu cadascun sense canvis, en qualsevol versió de DWG, de manera que l'altre programa els torna a obtenir. Els fitxers DXF no els conserven: CadCraft els escriu només en DWG, i ho indica en desar com a DXF.
- Dibuixats: cares planes, i cares de cilindres, cons, esferes, tors i superfícies spline senzilles, amb arestes rectes, arrodonides i spline. Una cara de qualsevol altre tipus de superfície, o una que CadCraft no pot disposar, no s'endevina: s'omet i es llista, per exemple "Encara no dibuixat (sòlids 3D): 2 cares a superfície spline (sweepsur), una superfície encara no dibuixada."
- Els sòlids dins de blocs encara no es mostren; "Quant a aquest fitxer" els compta.

Les cares corbes es dibuixen com a petites peces planes, separades uns 7.5°, de manera que un sòlid corb es veu una mica facetat de prop.

## Desa i exporta

Desar conserva el model 3D, en DWG i en DXF. Cada cara entra com a cara 3D a la capa `CC-3D`, perquè els altres programes mostrin els sòlids, i CadCraft guarda al fitxer la seva pròpia còpia exacta, que llegeix de nou en tornar a obrir el dibuix, amb la vista 3D tal com era (càmera, projecció i estil visual). Les cares 3D fetes per altres programes entren a la pestanya 3D com a cares soltes, agrupades juntes com un sol grup. Una cara 3D dins d'un bloc entra una vegada per cada referència a aquest bloc del model, col·locada i girada tal com ho està la referència; al mateix bloc, i en un full, una cara 3D es dibuixa plana, com el seu contorn.

{{ui:Exporta}} al grup 3D baixa només els sòlids: GLB per a visualitzadors i per a la web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) o STL per a impressió 3D, en mil·límetres ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} pregunta quin voleu.

:::note
El model 3D és de mida real. Un dibuix sense unitats es compta en mil·límetres, de manera que `1000` és un metre. Si més tard canvieu les unitats del dibuix (Propietats, sense res seleccionat), els sòlids s'escalen amb elles perquè es mantinguin al dibuix, i l'historial ho indica. Un {{key:Mod+Z}} desfà alhora el canvi d'unitats i l'escalat.
:::
