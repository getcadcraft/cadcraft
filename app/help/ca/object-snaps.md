---
title: Ajusta a punts sobre objectes
summary: Utilitzeu les referències a objectes, l'Orto i la quadrícula per triar amb el ratolí extrems, punts mitjans, centres i interseccions exactes.
keywords: osnap, referència a objectes, punt final, punt mitjà, centre, intersecció, perpendicular, quadrant, més proper, node, inserció, orto, quadrícula, f3, f8, f7, seguiment polar, polar, polarang, seguiment de referències a objectes, otrack, seguiment, f10, f11
from: 3cf17f94
---

## Què crearàs

Un rectangle amb les seves dues diagonals, un cercle centrat on es creuen, i una línia des del punt mitjà d'un costat quadrat fins al cercle. Cada punt es tria amb el ratolí, i cada punt és exacte.

## Com funciona l'ajust

Mentre una ordre demana un punt, CadCraft busca punts d'ajust a uns 10 píxels de la creueta. Quan en troba un, apareixen un marcador i una etiqueta ("Punt final", "Intersecció"), i un clic cau **exactament** sobre aquest punt, no on és la creueta.

Els ajustos estan activats quan {{ui:Pas}} de la barra d'estat està premut. {{key:F3}} els activa i els desactiva.

Els ajustos que podeu utilitzar són:

| Ajust | Cau sobre |
|---|---|
| Punt final | Els extrems de línies, arcs i segments de polilínia |
| Punt mitjà | El mig de línies, arcs i segments de polilínia |
| Centre | El centre de cercles i arcs, i de segments d'arc de polilínia |
| Quadrant | Els punts de 0, 90, 180 i 270 graus de cercles i arcs |
| Intersecció | On es creuen dos objectes |
| Perpendicular | El punt de l'objecte perpendicular a l'últim punt (cal un punt base) |
| Tangent | El punt d'un cercle o arc on una línia des de l'últim punt el toca just. Sense cap últim punt encara (el primer punt d'una línia), el marcador diu "diferit": el punt de contacte es calcula quan se sap el següent punt, de manera que una línia de Tangent a Tangent toca els dos cercles |
| Més proper | El punt més proper de qualsevol objecte |
| Node | Objectes de punt |
| Inserció | El punt d'inserció de textos i referències de bloc |

Totes estan activades per defecte excepte Tangent i Més proper. Més proper sovint guanya quan voleu una altra cosa; activeu Tangent quan la necessiteu.

## Trieu els ajusts

1. Feu clic a la petita fletxa al costat de {{ui:Pas}} a la barra d'estat. S'obre la llista {{ui:Referències a objectes}}.
2. Marqueu o desmarqueu ajustos. Els canvis s'apliquen a l'instant.
3. Torneu a fer clic a la fletxa per tancar la llista.

CadCraft recorda la vostra elecció, i els ajustos {{ui:Quadrícula}}, {{ui:Orto}} i {{ui:Pas}}, en aquest navegador.

## Passos

1. Escriviu `REC` i premeu {{key:Enter}}.
2. Escriviu `0,0` i premeu {{key:Enter}}.
3. Escriviu `@4000,3000` i premeu {{key:Enter}}. Apareix un rectangle.
4. Feu clic a {{ui:Extensió}}.
5. Escriviu `L` i premeu {{key:Enter}}.
6. Moveu la creueta a la cantonada inferior esquerra. El marcador mostra "Punt final". Feu clic.
7. Moveu-vos a la cantonada superior dreta fins que aparegui "Punt final". Feu clic.
8. Premeu {{key:Enter}} per acabar la línia.
9. Premeu {{key:Enter}} una altra vegada per repetir {{cmd:LINE}}, i dibuixeu l'altra diagonal des de la cantonada inferior dreta fins a la superior esquerra de la mateixa manera.
10. Escriviu `C` i premeu {{key:Enter}} per començar un cercle.
11. Moveu la creueta on es creuen les diagonals. El marcador mostra "Intersecció". Feu clic.
12. Escriviu `800` i premeu {{key:Enter}}.

Hauríeu de veure un cercle centrat exactament en el creuament.

13. Escriviu `L` i premeu {{key:Enter}}.
14. Moveu-vos al punt mig del costat esquerre del rectangle fins que aparegui "Punt mitjà". Feu clic.
15. Moveu la creueta sobre el cercle, al seu costat esquerre. El marcador mostra "Perpendicular" o "Quadrant"; aquí són el mateix punt. Feu clic.
16. Premeu {{key:Enter}}.

La línia nova va des del punt mig del costat esquerre i s'atura exactament sobre el cercle.

## Ometre un ajust per a un clic

Mantingueu premut {{key:Shift}} mentre feu clic. Les referències a objectes s'ignoren per a aquell clic, i el punt va exactament on és la creueta (o al llarg de la direcció de l'Orto, si l'Orto està activat).

## Orto

{{ui:Orto}} ({{key:F8}}) manté el següent punt alineat horitzontal o verticalment respecte al punt base. S'aplica als clics i a l'entrada de distància directa (un nombre sol escrit a la indicació). Les referències a objectes guanyen l'Orto: si apareix un marcador d'ajust, el clic va a l'ajust.

## Seguiment polar

{{ui:Polar}} ({{key:F10}}) és l'Orto amb més angles. Mentre una ordre té un punt base (l'últim punt d'una línia, el punt base d'un desplaçament), el punter s'alinea quan s'hi acosta en un raig des d'ell en un múltiple del pas polar: apareix una línia de punts, i una etiqueta al costat de la creueta diu `Polar: 1200 < 30°`. Feu clic per usar aquest punt, o escriviu una distància: `1200` va exactament 1200 al llarg del raig.

El pas és de 90° fins que el canvieu: escriviu {{cmd:POLARANG}}, premeu {{key:Enter}}, i escriviu `30` (o 45, 22.5, 15 …). Polar i Orto s'exclouen mútuament: activar-ne un desactiva l'altre.

## Seguiment de referències a objectes

{{ui:Segueix}} ({{key:F11}}) alinea el punter amb els punts d'ajust en què us heu aturat, de manera que podeu triar un punt al mateix nivell que una cantonada i per sobre d'una altra sense dibuixar línies auxiliars.

1. Activeu {{ui:Pas}} i {{ui:Segueix}}, i inicieu una ordre que demani un punt (`L`).
2. Deixeu el punter sobre un punt d'ajust, com una cantonada, durant mig segon, sense fer clic. Una petita creu el marca: queda adquirit. Torneu-hi a deixar el punter per deixar-lo anar.
3. Moveu el punter recte des d'ell, en horitzontal o vertical. Una línia de punts segueix el punter i l'etiqueta diu `Segueix: 600 < 90°`. Feu clic, o escriviu una distància.
4. Adquiriu un segon punt, i moveu-vos on la vertical que passa per un es troba amb l'horitzontal que passa per l'altre: el punter s'ajusta a aquest creuament (`Segueix: on es troben dues línies`).

Amb {{ui:Polar}} també activat, els punts adquirits segueixen a cada angle polar. Es guarden fins a set punts, fins que acaba l'ordre. {{key:Shift}} desactiva el seguiment per a un clic, igual que els ajustos.

## Quadrícula

{{ui:Quadrícula}} ({{key:F7}}) mostra una quadrícula de línies darrere del dibuix, amb línies més gruixudes cada cinc línies; l'espaiat canvia en fer zoom. És només una guia fins que activeu {{ui:Pas a quadrícula}} ({{key:F9}}): aleshores els clics cauen sobre el punt de quadrícula més proper, tret que una referència a objectes agafi abans el punt.

## Tecles de funció al vostre ordinador

{{key:F9}} és Pas a quadrícula, {{key:F10}} és Polar i {{key:F11}} és Segueix.

:::mac
En un Mac, F3, F7, F8 i F9 normalment controlen el Mission Control i el multimèdia. Mantingueu premuda la tecla **fn** amb la tecla, o activeu les tecles de funció estàndard, tal com es descriu a [Tecles, ratolins i panells tàctils](common:keys). Els botons de la barra d'estat sempre funcionen.
:::

:::firefox
A Firefox, F7 també és la tecla per a la navegació amb cursor. Si Firefox pregunta si vol activar la navegació amb cursor, trieu **No**. Useu el botó {{ui:Quadrícula}} si la pregunta torna a aparèixer.
:::

:::touch
En una pantalla tàctil no hi ha passada del punter, de manera que el marcador d'ajust només apareix on el dit toca. Feu zoom de prop per als objectius petits, o escriviu coordenades.
:::

## Errors habituals

- **El clic ha anat al punt equivocat.** Mireu l'etiqueta del marcador abans de fer clic: "Punt final" guanya a "Punt mitjà" quan els dos són a prop. Feu zoom, o desmarqueu els ajustos que no necessiteu.
- **No apareix cap marcador.** {{ui:Pas}} està desactivat, o l'ajust que voleu no està marcat, o l'objecte és en una capa desactivada o congelada.
- **Els ajustos agafen una cosa equivocada en un dibuix ple.** Feu zoom. La distància d'ajust es mesura en píxels de pantalla, de manera que fer zoom la fa més petita sobre el dibuix.
- **Esperar que Shift doni una línia recta.** A CadCraft, Shift desactiva els ajustos per a un clic. Utilitzeu {{ui:Orto}} per a línies rectes.
- **Esperar que els punts caiguin sobre punts de quadrícula.** Activeu {{ui:Pas a quadrícula}} ({{key:F9}}), o escriviu coordenades per a nombres redons.
