---
title: Formas, cortes, desfasamentos e bloqueos de muros en 2D
summary: Debuxar muros como rectángulos, polígonos e arcos, dividilos e volvelos unir, movelos por unha cota, e bloquear un muro a outro ou a unha liña de cuadrícula. As mesmas ferramentas que os muros de BimCraft.
keywords: muro, barra de ferramentas de muros, botóns de muro, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, estilo de unión, inglete, recto, cadrada, candado, pinza, arrastrar extremo, xirar, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, unión, non permitir unión, bloqueo, liña de cuadrícula, dividir, oco, desfasamento, liña de localización
from: f41e7433
---

Estas ferramentas traballan cos muros 2D de `WALL` (vexa «Debuxar muros, portas e xanelas intelixentes en 2D»). Usan as mesmas regras que as ferramentas de muro de BimCraft, así que un muro se comporta igual en ambos.

## Onde están as ferramentas

- Na barra de ferramentas, o grupo {{ui:Muros}} ten {{ui:Muro}}, {{ui:Rectángulo}}, {{ui:Dividir}} e {{ui:Desfasamento}}. O seu menú {{ui:Máis}} ten todas as demais ferramentas de muro, cada unha coa súa icona.
- Nos estilos de menú de cinta, a lapela {{ui:Muros}} ten os paneis {{ui:Debuxar muros}}, {{ui:Cortar}}, {{ui:Definir e modificar}}, {{ui:Manter}} e {{ui:Unir}}.
- Nunha disposición, as filas de ferramentas e a caixa de ferramentas mostran o mesmo grupo {{ui:Muros}}.
- Tamén pode escribir calquera comando indicado abaixo.

## As uniones gárdanse

Cando unha punta de muro cae sobre outro muro, CadCraft garda esa unión cos dous muros. Xa non calcula de novo as uniones a partir de onde estean as puntas. Así pois:

- Os muros unidos a un muro que move séguenlle e seguen unidos. As súas puntas deslízanse pola súa propia liña, así que nada xira.
- Arrastre unha punta dun muro pola súa pinza e o muro unido aí tamén mantén a súa dirección. A súa punta desliza pola súa propia liña ata atoparse co muro arrastrado, así que a punta arrastrada cae sobre esa liña, non sempre baixo o cursor. A vista previa mostra onde. Un muro que chega a tope contra o muro arrastrado segue ao longo da súa propia liña. Arrastrar a punta en liña recta ao longo do muro cambia a súa lonxitude, e o muro unido aí muévese con ela.
- `ROTATE` sobre un muro unido funciona do mesmo xeito: as puntas dos seus veciños deslízanse pola súa propia liña ata o muro xirado.
- Para mover unha esquina, seleccione os dous muros que se xuntan alí e arrastre a pinza da esquina. Ambos muros seguen na esquina e ambos xiran. Os muros máis adiante quedan como estaban.
- Manteña {{key:Alt}} ao facer clic no novo lugar da pinza para romper as uniones a propósito: o muro vai onde o puxo e nada o segue.
- Se un arrastre fixese xirar un muro unido cara atrás, atravesando o seu propio extremo afastado, recházase e non cambia nada.
- Un muro debuxado con {{ui:Non permitir unións}} (`D` en `WALL`), ou desactivado nas propiedades ({{ui:Non permitir unión no inicio}}, {{ui:Non permitir unión no fin}}), queda libre nesa punta, aínda que toque outro muro, ata que o volva permitir.
- `WALLDISJOIN` ({{ui:Non permitir unión}} no grupo {{ui:Muros}}) fai o mesmo cun clic: prema un muro preto dunha punta para non permitir uniones nesa punta, e prémao de novo para permitilas.
- Un debuxo máis antigo aínda non ten uniones gardadas. O primeiro cambio que fai atópaas unha vez, a partir de como estaban os muros antes do cambio, e gárdaas. `WALLJOINS` faino de inmediato.
- Os ficheiros DWG e DXF levan as uniones dentro de cada muro. CadCraft lélas tal como se gardaron. Un programa que non garda datos estendidos mostra os muros como bloques simples e perde as uniones, e unha unión cuxos muros se moveron noutro programa perdese a seguinte vez que cambie algún dos dous.

## Estilo de unión dunha esquina

Unha esquina onde dous muros se atopan de extremo a extremo debúxase como inglete, a non ser que escolla outro estilo.

- `WALLJOINSTYLE` ({{ui:Estilo de unión}} no grupo {{ui:Muros}}): prema a esquina. Cada clic pasa ao seguinte estilo: {{ui:Inglete}}, {{ui:Recto}}, {{ui:Cadrada}} e logo {{ui:Inglete}} de novo. Escriba `T` para cambiar cal dos dous muros pasa pola esquina onde fixo o último clic. Prema {{key:Enter}} para rematar. Unha execución do comando é un paso de desfacer.
- {{ui:Recto}}: un muro pasa ata a cara afastada do outro, e o outro para contra o seu lado. {{ui:Cadrada}}: o mesmo, pero o muro que pasa acaba en ángulo recto consigo mesmo. A un ángulo recto ambos parecen iguais.
- Nas propiedades dun muro: {{ui:Estilo de unión no inicio}}, {{ui:Estilo de unión no final}}, e {{ui:Pasa por enriba no inicio}}, {{ui:Pasa por enriba no final}}.
- O estilo gárdase con ambos muros e viaxa nos ficheiros DWG e DXF. Unha copia dun muro comeza sen el.
- Unha unión en T non ten estilo que escoller: pasa o muro cuxo lado se atopa. Unha esquina onde se xuntan tres ou máis muros queda como inglete. Tamén o queda unha esquina moi aguda (por debaixo de uns 30 graos) e dous muros nunha mesma liña.

## Debuxar formas de muro

Cada unha fai os muros nun só paso de desfacer, coas esquinas unidas. En `WALL`, `O` fixa un desfasamento de colocación (a que distancia á esquerda dos seus clics vai o muro) e `D` desactiva a unión para os muros que debuxe a seguir.

- `WALLRECT` (`WR`): dúas esquinas opostas, como `RECTANG`.
- `WALLROT`: primeiro o lado, e logo a distancia do outro lado, para un rectángulo en calquera ángulo.
- `WALLPOLY` (`WP`): o número de lados (3 a 64), o centro, `I` para inscrito ou `C` para circunscrito, e logo o radio, como `POLYGON`.
- `WALLARC` (`WARC`): centro, inicio, final. `D` fai o arco no outro sentido.
- `WALLTAN`: prema preto do extremo dun muro, e logo o extremo do arco, que sae por ese muro.
- `WALLPICK`: prema unha liña ou polilínea e diga se tamén hai que tomar as liñas unidas a ela.
- `WALLTRACE`: prema dentro dunha área pechada de liñas e muros para poñer muros arredor da menor.

Os muros en planta son rectos, así que un arco se debuxa como pequenos muros rectos de 15 graos cada un. Únense como calquera esquina.

## Cortar muros

- `WALLSPLIT` (`WS`): prema o muro e logo o punto. `C` corta onde outro muro o cruza, `G` deixa un oco entre as partes, `F` fai que os extremos do corte queden libres en lugar de unidos. A primeira parte mantén o lugar do muro no debuxo, e portas e xanelas van coa súa parte. Un corte a través dunha porta ou dunha xanela recházase.
- `WALLSPLITGAP` ({{ui:Dividir con oco}}): a mesma división, pero pregunta antes polo oco.
- `WALLDELSEG`: prema o muro e logo os dous extremos do tramo que se vai eliminar.
- `WALLREJOIN`: prema dúas partes dun mesmo muro para volvelas facer unha soa.

## Mover muros por distancia

- `WALLDIM`: prema unha cota lineal ou aliñada que vai dun muro a outro, e logo escriba o novo valor. O muro do extremo afastado móvese en ángulo recto consigo mesmo, o muro do primeiro extremo mantense, e os muros unidos a el séguenlo.
- `WALLOFFSET` (`WO`): prema un muro e logo o lado ao que o quere levar (`D` escribe unha distancia, `C` fai unha copia en lugar de mover).
- `WALLSTRETCH`: unha xanela arredor dos extremos do muro, e logo un punto base e un segundo punto.
- Nas propiedades, unha {{ui:Lonxitude}} escrita mantén o inicio e leva consigo o muro unido no extremo afastado, e un novo {{ui:Espesor}} crece lonxe da {{ui:Liña de localización}} que escolla (a cara esquerda, a cara dereita ou o centro).

## Bloquear muros

Un bloqueo mantense co muro no ficheiro. Se move un muro bloqueado, o outro séguello. Se un cambio move os dous muros de xeito diferente, recházase e non cambia nada.

- `WALLHOLD`: bloquea un muro a outro muro. `A` move primeiro o muro á liña do outro, `K` mantén a distancia que ten.
- `WALLHOLDDIM`: bloquea a distancia entre dous muros paralelos.
- `WALLGRID`: bloquea un muro a unha liña de cuadrícula (unha liña nunha capa de cuadrícula cunha etiqueta de texto nun extremo), ao longo dela ou cunha punta sobre ela. Un muro bloqueado ao longo da liña mantén a distancia que ten dela. Mova a liña de cuadrícula con `GRIDMOVE` e o muro sígueo enteiro, cos seus muros unidos. Un muro que está ao longo dunha liña de cuadrícula móvese enteiro con ela aínda sen bloqueo, e un muro que só acaba sobre a liña estírase por ese extremo.
- `WALLHOLDS` lista os bloqueos. `WALLUNHOLD` quita os bloqueos dun muro.
- Cada bloqueo mostra un pequeno candado no plano: xunto ao centro do muro bloqueado, ou xunto ao extremo bloqueado a unha liña de cuadrícula. Prema un candado para quitar ese bloqueo.

## O que aínda non está aquí

Os bloqueos usan as liñas centrais dos muros. Os muros aquí non teñen capas, así que non hai prioridade de capa nunha unión, e os muros non se curvan (vexa os arcos máis arriba). Ninguén probou estas ferramentas nun debuxo grande, e non se comprobaron noutro programa CAD.
