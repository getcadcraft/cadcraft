---
title: Formes, talls, desplaçaments i bloquejos per als murs 2D
summary: Dibuixeu murs com a rectangles, polígons i arcs, separeu-los i torneu-los a unir, mogueu-los per una cota, i bloquegeu un mur a un altre o a una línia de quadrícula. Les mateixes eines que els murs de BimCraft.
keywords: mur, barra d'eines de murs, botons de murs, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, estil d'unió, bisell, pla, a escaire, cadenat, nansa, arrossega el final, gira, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, unió, no permetis la unió, bloqueig, línia de quadrícula, tall, interval, desplaçament, línia d'ubicació
from: f41e7433
---

Aquestes eines treballen amb els murs 2D de `WALL` (vegeu "Dibuixa murs, portes i finestres intel·ligents en 2D"). Fan servir les mateixes regles que les eines de murs de BimCraft, de manera que un mur es comporta igual en tots dos.

## On són les eines

- A la barra d'eines, el grup {{ui:Murs}} té {{ui:Mur}}, {{ui:Rectangle}}, {{ui:Divideix}} i {{ui:Desfasament}}. El seu menú {{ui:Més}} té totes les altres eines de murs, cadascuna amb la seva icona.
- En els estils de menú de cinta, la pestanya {{ui:Murs}} té els taulers {{ui:Dibuixa murs}}, {{ui:Retalla}}, {{ui:Defineix i modifica}}, {{ui:Manté}} i {{ui:Uneix}}.
- En una presentació, les files d'eines i la caixa d'eines mostren el mateix grup {{ui:Murs}}.
- També podeu escriure qualsevol ordre que s'anomena a continuació.

## Les unions es desen

Quan el final d'un mur cau sobre un altre mur, CadCraft desa aquesta unió amb tots dos murs. Ja no calcula les unions de nou a partir d'on són els finals. Així doncs:

- Els murs units a un mur que moveu el segueixen i es mantenen units. Els seus finals llisquen per les seves pròpies línies, de manera que res no gira.
- Arrossegueu un final d'un mur per la seva nansa i el mur unit allà també manté la seva direcció. El seu final llisca per la seva pròpia línia fins a trobar el mur arrossegat, de manera que el final arrossegat cau sobre aquesta línia, no sempre sota el cursor. La vista prèvia en mostra on. Un mur que topa contra el mur arrossegat segueix per la seva pròpia línia. Si arrossegueu el final en línia recta al llarg del mur, en canvia la longitud, i el mur unit allà es mou amb ell.
- `ROTATE` sobre un mur unit funciona igual: els finals dels seus veïns llisquen per les seves pròpies línies fins al mur girat.
- Per moure una cantonada, seleccioneu els dos murs que s'hi troben i arrossegueu la nansa de la cantonada. Tots dos murs es mantenen a la cantonada i tots dos giren. Els murs més enllà es queden com estaven.
- Manteniu {{key:Alt}} premut en fer clic a la nova posició de la nansa per trencar les unions a propòsit: el mur va on l'heu posat i res no el segueix.
- Si un arrossegament faria girar un mur unit fins a passar pel seu propi final llunyà, es rebutja i no canvia res.
- Un mur que dibuixeu amb {{ui:No permetis les unions}} (`D` a `WALL`), o que desactiveu a Propietats ({{ui:No permetis la unió a l'inici}}, {{ui:No permetis la unió al final}}), queda lliure en aquest final, encara que toqui un altre mur, fins que el torneu a permetre.
- `WALLDISJOIN` ({{ui:No permetis la unió}} al grup {{ui:Murs}}) fa el mateix amb un clic: feu clic a un mur prop d'un final per no permetre les unions en aquell final, i torneu-hi a fer clic per tornar-les a permetre.
- Un dibuix més antic encara no té unions desades. El primer canvi que feu les troba una vegada, a partir de com estaven els murs abans del canvi, i les desa. `WALLJOINS` ho fa de cop.
- Els fitxers DWG i DXF porten les unions dins de cada mur. CadCraft les llegeix tal com es van desar. Un programa que no conserva dades ampliades mostra els murs com a blocs senzills i descarta les unions, i una unió els murs de la qual s'han mogut en un altre programa es descarta la propera vegada que canvieu qualsevol dels dos murs.

## Estil d'unió d'una cantonada

Una cantonada on dos murs es troben de final a final es dibuixa com a bisell tret que trieu un altre estil.

- `WALLJOINSTYLE` ({{ui:Estil d'unió}} al grup {{ui:Murs}}): feu clic a la cantonada. Cada clic passa a l'estil següent: {{ui:Bisell}}, {{ui:Pla}}, {{ui:A escaire}}, i després {{ui:Bisell}} de nou. Escriviu `T` per canviar quin dels dos murs travessa la cantonada on heu fet clic per últim. Premeu {{key:Enter}} per acabar. Una execució de l'ordre és un sol pas per desfer.
- {{ui:Pla}}: un mur travessa fins a la cara llunyana de l'altre, i l'altre s'atura contra el seu costat. {{ui:A escaire}}: igual, però el mur que travessa acaba a escaire respecte de si mateix. En un angle recte tots dos es veuen iguals.
- A Propietats d'un mur: {{ui:Estil d'unió a l'inici}}, {{ui:Estil d'unió al final}}, i {{ui:Travessa a l'inici}}, {{ui:Travessa al final}}.
- L'estil es desa amb tots dos murs i viatja als fitxers DWG i DXF. Una còpia d'un mur comença sense ell.
- Una unió en T no té estil per triar: travessa el mur al costat del qual es troba l'altre. Una cantonada on es troben tres o més murs es queda com a bisell. Igual passa amb una cantonada molt aguda (per sota d'uns 30 graus) i amb dos murs en una mateixa línia.

## Dibuixa formes de mur

Cadascuna crea els murs en un sol pas per desfer, amb les cantonades unides. A `WALL`, `O` defineix un desplaçament de col·locació (quant a l'esquerra dels vostres clics va el mur), i `D` desactiva la unió per als murs que dibuixeu a continuació.

- `WALLRECT` (`WR`): dues cantonades oposades, com `RECTANG`.
- `WALLROT`: el primer costat i després fins on arriba l'altre costat, per a un rectangle a qualsevol angle.
- `WALLPOLY` (`WP`): el nombre de costats (de 3 a 64), el centre, `I` per a inscrit o `C` per a circumscrit, i després el radi, com `POLYGON`.
- `WALLARC` (`WARC`): centre, inici, final. `D` gira l'arc en sentit contrari.
- `WALLTAN`: feu clic prop del final d'un mur, i després al final de l'arc, que surt al llarg d'aquest mur.
- `WALLPICK`: feu clic en una línia o polilínia i indiqueu si també cal prendre les línies units a ella.
- `WALLTRACE`: feu clic dins d'una àrea tancada de línies i murs per posar-hi murs al voltant de la més petita.

Els murs de planta són rectes, de manera que un arc es dibuixa com a murs rectes curts de 15 graus cadascun. S'uneixen com qualsevol cantonada.

## Talla murs

- `WALLSPLIT` (`WS`): feu clic al mur i després al punt. `C` talla on hi creua un altre mur, `G` deixa un buit entre les parts, `F` fa que els extrems del tall siguin lliures en lloc d'units. La primera part conserva el lloc del mur al dibuix, i les portes i finestres van amb la seva part. Un tall per una porta o finestra es rebutja.
- `WALLSPLITGAP` ({{ui:Divideix amb un buit}}): el mateix tall, però primer demana el buit.
- `WALLDELSEG`: feu clic al mur i després als dos extrems del tros a suprimir.
- `WALLREJOIN`: feu clic a dues parts d'un mateix mur per tornar-les a fer una.

## Mou murs per distància

- `WALLDIM`: feu clic a una cota lineal o alineada que va d'un mur a un altre, i després escriviu el nou valor. El mur de l'extrem llunyà es mou a escaire respecte de si mateix, el mur del primer extrem es manté, i els murs units a ell el segueixen.
- `WALLOFFSET` (`WO`): feu clic a un mur i després al costat on el voleu moure (`D` escriu una distància, `C` fa una còpia en lloc d'això).
- `WALLSTRETCH`: una finestra al voltant dels finals dels murs, i després un punt base i un segon punt.
- A Propietats, una {{ui:Longitud}} escrita manté l'inici i s'emporta amb ell el mur unit a l'extrem llunyà, i un nou {{ui:Gruix}} creix allunyant-se de la {{ui:Línia d'ubicació}} que heu triat (la cara esquerra, la cara dreta o el centre).

## Bloqueja murs

Un bloqueig es queda amb el mur al fitxer. Si moveu un mur bloquejat, l'altre el segueix. Si un sol canvi mou tots dos murs de manera diferent, es rebutja i no canvia res.

- `WALLHOLD`: bloqueja un mur a un altre mur. `A` el mou primer sobre la línia de l'altre mur, `K` manté la distància que té.
- `WALLHOLDDIM`: bloqueja la distància entre dos murs paral·lels.
- `WALLGRID`: bloqueja un mur a una línia de quadrícula (una línia d'una capa de quadrícula amb la seva etiqueta com a text en un dels extrems), ja sigui al llarg de la línia o amb un final sobre ella. Un mur bloquejat al llarg de la línia manté la distància que té respecte d'ella. Moveu la línia de quadrícula amb `GRIDMOVE` i el mur la segueix sencer, amb els seus murs units. Un mur que es troba al llarg d'una línia de quadrícula es mou sencer amb ella fins i tot sense bloqueig, i un mur que només acaba sobre la línia s'estira per aquest extrem.
- `WALLHOLDS` llista els bloquejos. `WALLUNHOLD` treu els bloquejos d'un mur.
- Cada bloqueig mostra un petit cadenat al plànol: al costat del centre del mur bloquejat, o al costat del final bloquejat a una línia de quadrícula. Feu clic en un cadenat per treure aquest bloqueig.

## Què encara no hi és

Els bloquejos usen les línies centrals dels murs. Aquí els murs no tenen capes, de manera que no hi ha prioritat de capa en una unió, i els murs no es corben (vegeu els arcs més amunt). Ningú no ha provat aquestes eines en un dibuix gran, i no s'han comprovat en cap altre programa CAD.
