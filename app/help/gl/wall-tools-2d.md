---
title: Formas de muro, cortes, desprazamentos e bloqueos para muros 2D
summary: Debuxe muros como rectángulos, polígonos e arcos, córteos e volva unilos, móvaos por unha cota, e bloquee un muro a outro ou a unha liña de cuadrícula. As mesmas ferramentas que os muros de BimCraft.
keywords: muro, barra de muros, botóns de muros, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, estilo de unión, inglete, recto, cadrada, cadeado, agarre, arrastrar extremo, xirar, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, unir, non permitir unión, bloqueo, liña de cuadrícula, dividir, oco, desfasamento, liña de situación
from: 49044181
---

Estas ferramentas traballan sobre os muros 2D de `WALL` (vexa «Debuxar muros, portas e xanelas intelixentes en 2D»). Usan as mesmas regras que as ferramentas de muro de BimCraft, así que un muro se comporta igual en ambas.

## Onde están as ferramentas

- Na barra de ferramentas, o grupo {{ui:Muros}} ten {{ui:Muro}}, {{ui:Rectángulo}}, {{ui:Dividir}} e {{ui:Desfasamento}}. O seu menú {{ui:Máis}} ten todas as demais ferramentas de muro, cada unha coa súa icona.
- Nos estilos de menú de cinta, a lapela {{ui:Muros}} ten os paneis {{ui:Debuxar muros}}, {{ui:Cortar}}, {{ui:Definir e modificar}}, {{ui:Manter}} e {{ui:Unir}}.
- Nunha disposición, as filas de ferramentas e a caixa de ferramentas mostran o mesmo grupo {{ui:Muros}}.
- Tamén pode escribir calquera comando nomeado abaixo.

## As unións gárdanse

Cando un extremo de muro cae sobre outro muro, CadCraft garda esa unión cos dous muros. Xa non recalcula as uniones a partir de onde estean os extremos. Así:

- Os muros unidos a un muro que move séguello e seguen unidos. Os seus extremos deslízanse ao longo das súas propias liñas, así que nada xira.
- Arrastre un extremo dun muro polo seu agarre e o muro unido alí tamén conserva a súa dirección. O seu extremo desliza pola súa propia liña para atopar o muro arrastrado, así que o extremo arrastrado cae nesa liña, non sempre baixo o cursor. A vista previa mostra onde. Un muro que topa co muro arrastrado sigue pola súa propia liña. Arrastrar o extremo en liña recta ao longo do muro cambia a súa lonxitude, e o muro unido alí móvese con el.
- `ROTATE` sobre un muro unido funciona do mesmo xeito: os extremos dos seus veciños deslízanse pola súa propia liña ata o muro xirado.
- Para mover unha esquina, seleccione os dous muros que alí se encontran e arrastre o agarre da esquina. Os dous muros quedan na esquina e os dous xiran. Os muros máis adiante quedan como estaban.
- Manteña {{key:Alt}} ao facer clic no novo lugar do agarre para romper as uniones de xeito intencionado: o muro vai onde o pon e nada o segue.
- Se un arrastre fixese xirar un muro unido a través do seu propio extremo afastado, recházase e nada cambia.
- Un muro que debuxa con {{ui:Non permitir unións}} (`D` en `WALL`), ou que desactiva en Propiedades ({{ui:Non permitir unión no inicio}}, {{ui:Non permitir unión no fin}}), queda libre nese extremo, aínda que toque outro muro, ata que o volva permitir.
- `WALLDISJOIN` ({{ui:Non permitir unión}} no grupo {{ui:Muros}}) fai o mesmo cun clic: faga clic nun muro preto dun extremo para non permitir uniones nese extremo, e fágao de novo para permitilas.
- Un debuxo máis antigo aínda non ten uniones gardadas. O primeiro cambio que fai atópaas unha vez, a partir de como estaban os muros antes do cambio, e gárdaas. `WALLJOINS` fai isto de inmediato.
- Os ficheiros DWG e DXF levan as uniones dentro de cada muro. CadCraft léveas de volta tal como se gardaron. Un programa que non conserva datos estendidos mostra os muros como bloques simples e descarta as uniones, e unha unión cuxos muros foron movidos noutro programa descártase a próxima vez que cambie algún dos dous muros.

## Estilo de unión dunha esquina

Unha esquina onde dous muros se atopan extremo con extremo debúxase en inglete salvo que escolla outro estilo.

- `WALLJOINSTYLE` ({{ui:Estilo de unión}} no grupo {{ui:Muros}}): faga clic na esquina. Cada clic pasa ao seguinte estilo: {{ui:Inglete}}, {{ui:Recto}}, {{ui:Cadrada}}, e despois {{ui:Inglete}} de novo. Escriba `T` para cambiar cal dos dous muros pasa pola esquina onde fixo clic por última vez. Prema {{key:Enter}} para rematar. Unha execución do comando é un só paso de desfacer.
- {{ui:Recto}}: un muro pasa ata a cara afastada do outro, e o outro para contra o seu lado. {{ui:Cadrada}}: o mesmo, pero o muro que pasa remata en cadrado respecto de si mesmo. En ángulo recto os dous parecen iguais.
- En Propiedades dun muro: {{ui:Estilo de unión no inicio}}, {{ui:Estilo de unión no final}}, e {{ui:Pasa por enriba no inicio}}, {{ui:Pasa por enriba no final}}.
- O estilo gárdase cos dous muros e viaxa en ficheiros DWG e DXF. Unha copia dun muro comeza sen el.
- Unha unión en T non ten estilo que escoller: pasa o muro cuxo lado se atopa. Unha esquina onde se atopan tres ou máis muros queda en inglete. Así tamén unha esquina moi aguda (por debaixo de uns 30 graos) e dous muros nunha mesma liña.

## Debuxar formas de muro

Cada un fai os muros nun só paso de desfacer, coas esquinas unidas. En `WALL`, `O` fixa un desfasamento de colocación (a que distancia á esquerda dos seus clics vai o muro) e `D` desactiva a unión para os muros que debuxe despois.

- `WALLRECT` (`WR`): dúas esquinas opostas, como `RECTANG`.
- `WALLROT`: o primeiro lado, despois ata onde chega o outro lado, para un rectángulo a calquera ángulo.
- `WALLPOLY` (`WP`): o número de lados (3 a 64), o centro, `I` para inscrito ou `C` para circunscrito, despois o raio, como `POLYGON`: prema nel, ou escríbao (un raio escrito vai cara ao punteiro, ou ao longo de X cando o punteiro segue no centro).
- `WALLARC` (`WARC`): centro, inicio, final. `D` xira o arco no outro sentido.
- `WALLTAN`: faga clic preto do extremo dun muro, despois o final do arco, que sae ao longo dese muro.
- `WALLPICK`: faga clic nunha liña ou polilínea e diga se tamén quere as liñas unidas a ela.
- `WALLTRACE`: faga clic dentro dunha área pechada de liñas e muros para poñer muros arredor da menor.

Os muros en planta son rectos, así que un arco debúxase como pequenos muros rectos de 15 graos cada un. Únense como calquera esquina.

## Cortar muros

- `WALLSPLIT` (`WS`): faga clic no muro, despois no punto. `C` corta onde outro muro o cruza, `G` deixa un oco entre as partes, `F` fai que os extremos cortados queden libres en lugar de unidos. A primeira parte conserva o lugar do muro no debuxo, e as portas e xanelas vanse coa súa parte. Un corte por unha porta ou xanela recházase.
- `WALLSPLITGAP` ({{ui:Dividir con oco}}): a mesma división, pero pide primeiro o oco.
- `WALLDELSEG`: faga clic no muro, despois nos dous extremos do tramo a eliminar.
- `WALLREJOIN`: faga clic en dúas partes dun muro para volver facelas un só.

## Mover muros por distancia

- `WALLDIM` ({{ui:Editar por cota}}): faga clic nunha cota lineal ou aliñada que vai dun muro a outro, despois escriba o novo valor. O muro do extremo afastado móvese cadrado respecto de si mesmo, o muro do primeiro extremo mantense, e os muros unidos a el seguen. O punto afastado da cota móvese co seu muro, así que a cota mostra o valor que escribiu.
- `WALLOFFSET` (`WO`): faga clic nun muro, despois no lado ao que o move (`D` escribe unha distancia, `C` fai unha copia en lugar).
- `WALLSTRETCH`: unha xanela arredor dos extremos dos muros, despois un punto base e un segundo punto.
- En Propiedades, unha {{ui:Lonxitude}} escrita mantén o inicio e leva consigo o muro unido no extremo afastado, e un novo {{ui:Espesor}} medra afastándose da {{ui:Liña de situación}} que escolleu (a cara esquerda, a cara dereita ou o centro).

## Cotar entre as liñas centrais dos muros

A liña central dun muro non se debuxa, pero o enganche a obxectos atópaa. Con enganche a obxectos activo ({{key:F3}}), leve o punteiro ao medio do espesor dun muro: o marcador le `Wall center: endpoint` ou `Wall center: midpoint`, e a liña central móstrase discontinua mentres o marcador está sobre ela. Con {{ui:Perpendicular}} ou {{ui:Máis próximo}} activados na lista de enganches a obxectos, esas funcionan tamén na liña central.

1. Inicie `DIMLINEAR` (ou `DIMALIGNED`).
2. Faga clic no primeiro muro onde o marcador lea `Wall center: midpoint` ou `Wall center: endpoint`.
3. Faga clic no segundo muro do mesmo xeito, despois onde vai a liña de cota.
4. Para cambiar a distancia, inicie `WALLDIM`, faga clic na cota e escriba o novo valor. O segundo muro móvese.

O enganche á liña central funciona en todos os comandos que piden un punto.

## Bloquear muros

Un bloqueo queda co muro no ficheiro. Se move un muro bloqueado, o outro segue. Se un cambio move os dous muros de xeito distinto, recházase e nada cambia.

- `WALLHOLD`: bloquea un muro a outro muro. `A` levao primeiro á liña do outro muro, `K` conserva a distancia que ten.
- `WALLHOLDDIM`: bloquea a distancia entre dous muros paralelos.
- `WALLGRID`: bloquea un muro a unha liña de cuadrícula (unha liña nunha capa de cuadrícula cunha etiqueta en texto nun extremo), ben ao longo dela, ben cun extremo sobre ela. Un muro bloqueado ao longo da liña conserva a distancia que ten respecto dela. Mova a liña de cuadrícula con `GRIDMOVE` e o muro sigue enteiro, cos seus muros unidos. Un muro que está ao longo dunha liña de cuadrícula móvese enteiro con ela aínda sen bloqueo, e un muro que só termina na liña estírase por ese extremo.
- `WALLHOLDS` lista os bloqueos. `WALLUNHOLD` quita os bloqueos dun muro.
- Cada bloqueo mostra un pequeno cadeado na planta: xunto ao medio do muro bloqueado, ou xunto ao extremo bloqueado a unha liña de cuadrícula. Faga clic nun cadeado para quitar ese bloqueo.

## O que aínda non está

Os bloqueos usan as liñas centrais dos muros. Aquí os muros non teñen capas, así que non hai prioridade de capa nunha unión, e os muros non se curvan (vexa os arcos enriba). Ninguén probou estas ferramentas nun debuxo grande, e non se comprobaron noutro programa CAD.
