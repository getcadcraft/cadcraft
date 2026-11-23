---
title: Formes de mur, talls, desfasaments i bloqueigs per a murs 2D
summary: Dibuixa murs com a rectangles, polígons i arcs, talla'ls i torna'ls a unir, mou-los per una cota i bloqueja un mur a un altre o a una línia de quadrícula. Les mateixes eines que els murs de BimCraft.
keywords: mur, barra d'eines de murs, botons de mur, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, estil d'unió, bisell, pla, a escaire, cadenat, nansa, arrossega l'extrem, gira, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, unió, no permetis la unió, bloqueig, línia de quadrícula, tall, buit, desfasament, línia de referència
from: 49044181
---

Aquestes eines treballen amb els murs 2D de `WALL` (vegeu «Dibuixa murs, portes i finestres intel·ligents en 2D»). Usen les mateixes regles que les eines de mur de BimCraft, de manera que un mur es comporta igual en tots dos.

## On són les eines

- A la barra d'eines, el grup {{ui:Murs}} té {{ui:Mur}}, {{ui:Rectangle}}, {{ui:Divideix}} i {{ui:Desfasament}}. El seu menú {{ui:Més}} té totes les altres eines de mur, cadascuna amb la seva icona.
- Als estils de menú de cinta, la pestanya {{ui:Murs}} té els panells {{ui:Dibuixa murs}}, {{ui:Retalla}}, {{ui:Defineix i modifica}}, {{ui:Manté}} i {{ui:Uneix}}.
- En una presentació, les files d'eines i la caixa d'eines mostren el mateix grup {{ui:Murs}}.
- També pots escriure qualsevol de les ordres que s'indiquen més avall.

## Les unions es desen

Quan un extrem de mur cau sobre un altre mur, CadCraft desa aquella unió amb tots dos murs. Ja no torna a calcular les unions a partir d'on són els extrems. Així doncs:

- Els murs units a un mur que mous el segueixen i es mantenen units. Els seus extrems llisquen per les seves pròpies línies, de manera que res no gira.
- Arrossega un extrem d'un mur per la seva nansa i el mur unit allà també conserva la seva direcció. El seu extrem llisca per la seva pròpia línia fins a trobar el mur arrossegat, de manera que l'extrem arrossegat cau sobre aquella línia, no sempre sota el cursor. La previsualització mostra on. Un mur que topa amb el mur arrossegat el segueix per la seva pròpia línia. Arrossegar l'extrem en línia recta al llarg del mur canvia la seva longitud, i el mur unit allà es mou amb ell.
- `ROTATE` sobre un mur unit funciona de la mateixa manera: els extrems dels seus veïns llisquen per les seves pròpies línies fins al mur girat.
- Per moure una cantonada, selecciona els dos murs que s'hi troben i arrossega la nansa de la cantonada. Tots dos murs es queden a la cantonada i tots dos giren. Els murs més enllà es queden com estaven.
- Mantén {{key:Alt}} en fer clic al nou lloc de la nansa per trencar les unions a propòsit: el mur va on l'has posat i no el segueix res.
- Si un arrossegament faria girar un mur unit a través del seu propi extrem llunyà, es rebutja i no canvia res.
- Un mur que dibuixes amb {{ui:No permetis les unions}} (`D` a `WALL`), o que desactives a Propietats ({{ui:No permetis la unió a l'inici}}, {{ui:No permetis la unió al final}}), queda lliure en aquell extrem, encara que toqui un altre mur, fins que el tornis a permetre.
- `WALLDISJOIN` ({{ui:No permetis la unió}} al grup {{ui:Murs}}) fa el mateix amb un clic: fes clic a un mur prop d'un extrem per no permetre les unions en aquell extrem, i torna-hi a fer clic per permetre-les.
- Un dibuix més antic encara no té unions desades. El primer canvi que fas les troba una vegada, a partir de com estaven els murs abans del canvi, i les desa. `WALLJOINS` ho fa de cop.
- Els fitxers DWG i DXF porten les unions dins de cada mur. CadCraft les llegeix tal com es van desar. Un programa que no guarda dades ampliades mostra els murs com a blocs normals i descarta les unions, i una unió els murs de la qual s'han mogut en un altre programa es descarta la propera vegada que canvies qualsevol dels dos murs.

## Estil d'unió d'una cantonada

Una cantonada on dos murs es troben extrem a extrem es dibuixa en bisell llevat que triïs un altre estil.

- `WALLJOINSTYLE` ({{ui:Estil d'unió}} al grup {{ui:Murs}}): fes clic a la cantonada. Cada clic passa a l'estil següent: {{ui:Bisell}}, {{ui:Pla}}, {{ui:A escaire}}, i després {{ui:Bisell}} de nou. Escriu `T` per canviar quin dels dos murs passa per la cantonada en què has fet clic en últim lloc. Prem {{key:Enter}} per acabar. Una execució de l'ordre és un sol pas de desfer.
- {{ui:Pla}}: un mur arriba fins a la cara llunyana de l'altre, i l'altre s'atura contra el seu costat. {{ui:A escaire}}: igual, però el mur que travessa acaba en escaire respecte a si mateix. En angle recte, els dos es veuen iguals.
- A Propietats d'un mur: {{ui:Estil d'unió a l'inici}}, {{ui:Estil d'unió al final}}, i {{ui:Travessa a l'inici}}, {{ui:Travessa al final}}.
- L'estil es desa amb tots dos murs i viatja en fitxers DWG i DXF. Una còpia d'un mur comença sense ell.
- Una unió en T no té estil per triar: passa el mur el costat del qual és tocat. Una cantonada on es troben tres o més murs es queda en bisell. Igual passa amb una cantonada molt aguda (per sota d'uns 30 graus) i amb dos murs en una mateixa línia.

## Dibuixa formes de mur

Cadascuna fa els murs en un sol pas de desfer, amb les cantonades unides. A `WALL`, `O` defineix un desplaçament de col·locació (quant a l'esquerra dels teus clics va el mur) i `D` desactiva la unió per als murs que dibuixes a continuació.

- `WALLRECT` (`WR`): dues cantonades oposades, com `RECTANG`.
- `WALLROT`: el primer costat, i després fins on arriba l'altre costat, per a un rectangle a qualsevol angle.
- `WALLPOLY` (`WP`): el nombre de costats (de 3 a 64), el centre, `I` per a inscrit o `C` per a circumscrit, i després el radi, com `POLYGON`: fes clic o escriu-lo (un radi escrit va cap al punter, o al llarg de X quan el punter encara és al centre).
- `WALLARC` (`WARC`): centre, inici, final. `D` gira l'arc en sentit contrari.
- `WALLTAN`: fes clic prop de l'extrem d'un mur, i després a l'extrem de l'arc, que surt al llarg d'aquell mur.
- `WALLPICK`: fes clic a una línia o polilínia i indica si també vols les línies que hi estan unides.
- `WALLTRACE`: fes clic dins d'una àrea tancada de línies i murs per posar murs al voltant de la més petita.

Els murs en planta són rectes, així que un arc es dibuixa com a murs rectes curts de 15 graus cadascun. S'uneixen com qualsevol cantonada.

## Talla murs

- `WALLSPLIT` (`WS`): fes clic al mur, i després al punt. `C` talla on hi creua un altre mur, `G` deixa un buit entre les parts, `F` fa que els extrems tallats siguin lliures en lloc d'units. La primera part conserva el lloc del mur al dibuix, i les portes i finestres van amb la seva part. Un tall per una porta o finestra es rebutja.
- `WALLSPLITGAP` ({{ui:Divideix amb un buit}}): la mateixa divisió, però primer demana el buit.
- `WALLDELSEG`: fes clic al mur, i després als dos extrems del tros que cal suprimir.
- `WALLREJOIN`: fes clic a dues parts d'un mateix mur per tornar-les a fer un de sol.

## Mou murs per distància

- `WALLDIM` ({{ui:Edita per cota}}): fes clic a una cota lineal o alineada que va d'un mur a un altre, i després escriu el nou valor. El mur de l'extrem llunyà es mou en escaire respecte a si mateix, el mur del primer extrem es manté, i els murs units a ell el segueixen. El punt llunyà de la cota es mou amb el seu mur, de manera que la cota mostra el valor que has escrit.
- `WALLOFFSET` (`WO`): fes clic a un mur, i després al costat cap al qual el vols moure (`D` escriu una distància, `C` fa una còpia en lloc d'això).
- `WALLSTRETCH`: una finestra al voltant dels extrems dels murs, després un punt base i un segon punt.
- A Propietats, una {{ui:Longitud}} escrita conserva l'inici i porta amb ella el mur unit a l'extrem llunyà, i un nou {{ui:Gruix}} creix allunyant-se de la {{ui:Línia de referència}} que hagis triat (la cara esquerra, la cara dreta o el centre).

## Cota entre les línies centrals dels murs

La línia central d'un mur no es dibuixa, però la referència a objectes la troba. Amb la referència a objectes activada ({{key:F3}}), mou el punter pel mig del gruix d'un mur: el marcador diu `Centre del mur: punt final` o `Centre del mur: punt mig`, i la línia central es mostra com una línia discontínua mentre el marcador hi és. Amb {{ui:Perpendicular}} o {{ui:Més proper}} activats a la llista de referències a objectes, també funcionen sobre la línia central.

1. Inicia `DIMLINEAR` (o `DIMALIGNED`).
2. Fes clic al primer mur on el marcador diu `Centre del mur: punt mig` o `Centre del mur: punt final`.
3. Fes clic al segon mur de la mateixa manera, i després fes clic on va la línia de cota.
4. Per canviar la distància, inicia `WALLDIM`, fes clic a la cota i escriu el nou valor. El segon mur es mou.

La referència a la línia central funciona en totes les ordres que demanen un punt.

## Bloqueja murs

Un bloqueig es queda amb el mur al fitxer. Si mous un mur bloquejat, l'altre el segueix. Si un canvi mou els dos murs de manera diferent, es rebutja i no canvia res.

- `WALLHOLD`: bloqueja un mur a un altre mur. `A` el mou primer a la línia de l'altre mur, `K` manté la distància que té.
- `WALLHOLDDIM`: bloqueja la distància entre dos murs paral·lels.
- `WALLGRID`: bloqueja un mur a una línia de quadrícula (una línia d'una capa de quadrícula amb la seva etiqueta de text a un extrem), tant al llarg com amb un extrem sobre ella. Un mur bloquejat al llarg de la línia manté la distància que té respecte d'ella. Mou la línia de quadrícula amb `GRIDMOVE` i el mur la segueix sencer, amb els murs units. Un mur que es troba al llarg d'una línia de quadrícula es mou sencer amb ella fins i tot sense bloqueig, i un mur que només acaba a la línia s'estira per aquell extrem.
- `WALLHOLDS` llista els bloquejos. `WALLUNHOLD` treu els bloquejos d'un mur.
- Cada bloqueig mostra un petit cadenat al plànol: al costat del mig del mur bloquejat, o al costat de l'extrem bloquejat a una línia de quadrícula. Fes clic a un cadenat per treure aquell bloqueig.

## El que encara no hi és

Els bloquejos usen les línies centrals dels murs. Aquí els murs no tenen capes, de manera que no hi ha prioritat de capa en una unió, i els murs no es corben (vegeu els arcs més amunt). Ningú no ha provat aquestes eines en un dibuix gran, i no s'han comprovat en un altre programa CAD.
